import { ImageTransforms } from './typings';
import { getCenter, rotatePoint, rotateSize } from './service';

export const XHR_DONE = 4;

export function prepareSource(canvas, image, { rotate, flip }) {
	const originalSize = {
		width: image.naturalWidth,
		height: image.naturalHeight,
	};

	const transformedSize = rotateSize(originalSize, rotate);

	const ctx = canvas.getContext('2d');
	canvas.height = transformedSize.height;
	canvas.width = transformedSize.width;

	ctx.save();

	// Rotation:
	const originalCenter = {
		left: originalSize.width / 2,
		top: originalSize.height / 2,
	};

	let canvasCenter = rotatePoint(
		getCenter({
			left: 0,
			top: 0,
			...originalSize,
		}),
		rotate,
	);

	ctx.translate(-(canvasCenter.left - transformedSize.width / 2), -(canvasCenter.top - transformedSize.height / 2));
	ctx.rotate((rotate * Math.PI) / 180);

	// Reflection;
	ctx.translate(flip.horizontal ? originalSize.width : 0, flip.vertical ? originalSize.height : 0);
	ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);

	ctx.drawImage(image, 0, 0, originalSize.width, originalSize.height);
	ctx.restore();

	return canvas;
}

function base64ToArrayBuffer(base64) {
	base64 = base64.replace(/^data:([^;]+);base64,/gim, '');
	const binary = atob(base64);
	const len = binary.length;
	const buffer = new ArrayBuffer(len);
	const view = new Uint8Array(buffer);
	for (let i = 0; i < len; i++) {
		view[i] = binary.charCodeAt(i);
	}
	return buffer;
}

function objectURLToBlob(url, callback) {
	const http = new XMLHttpRequest();
	http.open('GET', url, true);
	http.responseType = 'blob';
	http.onload = function () {
		if (this.status == 200 || this.status === 0) {
			callback(this.response);
		}
	};
	http.send();
}

export function fillImageTransforms(transforms: {
	rotate?: number;
	flip?: Partial<ImageTransforms['flip']>;
}): ImageTransforms {
	return {
		rotate: transforms.rotate || 0,
		flip: {
			horizontal: transforms?.flip?.horizontal || false,
			vertical: transforms?.flip?.vertical || false,
		},
	};
}

export function getImageTransforms(orientation: number) {
	const result: ImageTransforms = fillImageTransforms({});
	if (orientation) {
		switch (orientation) {
			case 2:
				result.flip.horizontal = true;
				break;
			case 3:
				result.rotate = -180;
				break;
			case 4:
				result.flip.vertical = true;
				break;
			case 5:
				result.rotate = 90;
				result.flip.vertical = true;
				break;
			case 6:
				result.rotate = 90;
				break;
			case 7:
				result.rotate = 90;
				result.flip.horizontal = true;
				break;
			case 8:
				result.rotate = -90;
				break;
		}
	}
	return result;
}
function getImageData(img) {
	return new Promise((resolve, reject) => {
		try {
			if (img) {
				if (/^data:/i.test(img)) {
					// Data URL
					resolve(base64ToArrayBuffer(img));
				} else if (/^blob:/i.test(img)) {
					// Blob
					const fileReader = new FileReader();
					fileReader.onload = function (e) {
						resolve(e.target.result);
					};
					objectURLToBlob(img, function (blob) {
						fileReader.readAsArrayBuffer(blob);
					});
				} else {
					// Simple URL
					let http = new XMLHttpRequest();
					http.onreadystatechange = function () {
						if (http.readyState !== XHR_DONE) return;

						if (http.status === 200 || http.status === 0) {
							resolve(http.response);
						} else {
							reject('Warning: could not load an image to parse its orientation');
						}
						http = null;
					};
					http.onprogress = function () {
						// Abort the request directly if it not a JPEG image for better performance
						if (http.getResponseHeader('content-type') !== 'image/jpeg') {
							http.abort();
						}
					};
					http.withCredentials = false;
					http.open('GET', img, true);
					http.responseType = 'arraybuffer';
					http.send(null);
				}
			} else {
				reject('Error: the image is empty');
			}
		} catch (e) {
			reject(e);
		}
	});
}

export function getStyleTransforms({ rotate, flip, scaleX, scaleY }) {
	let transform = '';
	transform += ` rotate(${rotate}deg) `;
	transform += ` scaleX(${scaleX * (flip.horizontal ? -1 : 1)}) `;
	transform += ` scaleY(${scaleY * (flip.vertical ? -1 : 1)}) `;
	return transform;
}

function getStringFromCharCode(dataView, start, length) {
	let str = '';
	let i;
	for (i = start, length += start; i < length; i++) {
		str += String.fromCharCode(dataView.getUint8(i));
	}
	return str;
}

function resetAndGetOrientation(arrayBuffer) {
	try {
		const dataView = new DataView(arrayBuffer);
		let orientation;
		let exifIDCode;
		let tiffOffset;
		let littleEndian;
		let app1Start;
		let ifdStart;
		// Only handle JPEG image (start by 0xFFD8)
		if (dataView.getUint8(0) === 0xff && dataView.getUint8(1) === 0xd8) {
			const length = dataView.byteLength;
			let offset = 2;
			while (offset + 1 < length) {
				if (dataView.getUint8(offset) === 0xff && dataView.getUint8(offset + 1) === 0xe1) {
					app1Start = offset;
					break;
				}
				offset++;
			}
		}
		if (app1Start) {
			exifIDCode = app1Start + 4;
			tiffOffset = app1Start + 10;
			if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
				const endianness = dataView.getUint16(tiffOffset);

				littleEndian = endianness === 0x4949;

				if (littleEndian || endianness === 0x4d4d /* bigEndian */) {
					if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002a) {
						const firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
						if (firstIFDOffset >= 0x00000008) {
							ifdStart = tiffOffset + firstIFDOffset;
						}
					}
				}
			}
		}
		if (ifdStart) {
			const length = dataView.getUint16(ifdStart, littleEndian);

			for (let i = 0; i < length; i++) {
				let offset = ifdStart + i * 12 + 2;
				if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {
					// 8 is the offset of the current tag's value
					offset += 8;
					// Get the original orientation value
					orientation = dataView.getUint16(offset, littleEndian);
					// Override the orientation with its default value
					dataView.setUint16(offset, 1, littleEndian);
					break;
				}
			}
		}
		return orientation;
	} catch (error) {
		return null;
	}
}

export function parseImage(src: string) {
	return new Promise((resolve) => {
		getImageData(src)
			.then((data) => {
				const orientation = resetAndGetOrientation(data);
				resolve(
					data
						? { source: src, arrayBuffer: data, orientation }
						: { source: src, arrayBuffer: null, orientation: null },
				);
			})
			.catch((error) => {
				console.warn(error);
				resolve({ source: src, arrayBuffer: null, orientation: null });
			});
	});
}

export function arrayBufferToDataURL(arrayBuffer) {
	const chunks = [];

	// Chunk Typed Array for better performance
	const chunkSize = 8192;
	let uint8 = new Uint8Array(arrayBuffer);

	while (uint8.length > 0) {
		const value = uint8.subarray(0, chunkSize);
		chunks.push(String.fromCharCode.apply(null, Array.from ? Array.from(value) : value.slice()));
		uint8 = uint8.subarray(chunkSize);
	}

	return `data:image/jpeg;base64,${btoa(chunks.join(''))}`;
}
