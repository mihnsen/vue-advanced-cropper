'use strict';
function t(t, e) {
	var i = Object.keys(t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(t);
		e &&
			(n = n.filter(function (e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable;
			})),
			i.push.apply(i, n);
	}
	return i;
}
function e(e) {
	for (var n = 1; n < arguments.length; n++) {
		var s = null != arguments[n] ? arguments[n] : {};
		n % 2
			? t(Object(s), !0).forEach(function (t) {
					i(e, t, s[t]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
			: t(Object(s)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
			  });
	}
	return e;
}
function i(t, e, i) {
	return (
		e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i),
		t
	);
}
function n(t, e) {
	if (null == t) return {};
	var i,
		n,
		s = (function (t, e) {
			if (null == t) return {};
			var i,
				n,
				s = {},
				o = Object.keys(t);
			for (n = 0; n < o.length; n++) (i = o[n]), e.indexOf(i) >= 0 || (s[i] = t[i]);
			return s;
		})(t, e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(t);
		for (n = 0; n < o.length; n++)
			(i = o[n]), e.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i]));
	}
	return s;
}
function s(t) {
	return (
		(function (t) {
			if (Array.isArray(t)) return o(t);
		})(t) ||
		(function (t) {
			if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator'])
				return Array.from(t);
		})(t) ||
		(function (t, e) {
			if (!t) return;
			if ('string' == typeof t) return o(t, e);
			var i = Object.prototype.toString.call(t).slice(8, -1);
			'Object' === i && t.constructor && (i = t.constructor.name);
			if ('Map' === i || 'Set' === i) return Array.from(t);
			if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return o(t, e);
		})(t) ||
		(function () {
			throw new TypeError(
				'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
			);
		})()
	);
}
function o(t, e) {
	(null == e || e > t.length) && (e = t.length);
	for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
	return n;
}
Object.defineProperty(exports, '__esModule', { value: !0 });
var r,
	a,
	h =
		((function (t) {
			/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
			!(function () {
				var e = {}.hasOwnProperty;
				function i() {
					for (var t = [], n = 0; n < arguments.length; n++) {
						var s = arguments[n];
						if (s) {
							var o = typeof s;
							if ('string' === o || 'number' === o) t.push(s);
							else if (Array.isArray(s)) {
								if (s.length) {
									var r = i.apply(null, s);
									r && t.push(r);
								}
							} else if ('object' === o)
								if (s.toString === Object.prototype.toString)
									for (var a in s) e.call(s, a) && s[a] && t.push(a);
								else t.push(s.toString());
						}
					}
					return t.join(' ');
				}
				t.exports ? ((i.default = i), (t.exports = i)) : (window.classNames = i);
			})();
		})(
			(a = {
				path: r,
				exports: {},
				require: function (t, e) {
					return (function () {
						throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
					})(null == e && a.path);
				},
			}),
			a.exports,
		),
		a.exports),
	c = function (t) {
		return function (e, i) {
			if (!e) return t;
			var n;
			'string' == typeof e ? (n = e) : (i = e);
			var s = t;
			return (
				n && (s += '__' + n),
				s +
					(i
						? Object.keys(i).reduce(function (t, e) {
								var n = i[e];
								return (
									n && (t += ' ' + ('boolean' == typeof n ? s + '--' + e : s + '--' + e + '_' + n)), t
								);
						  }, '')
						: '')
			);
		};
	};
function l(t, e, i) {
	var n, s, o, r, a;
	function h() {
		var c = Date.now() - r;
		c < e && c >= 0 ? (n = setTimeout(h, e - c)) : ((n = null), i || ((a = t.apply(o, s)), (o = s = null)));
	}
	null == e && (e = 100);
	var c = function () {
		(o = this), (s = arguments), (r = Date.now());
		var c = i && !n;
		return n || (n = setTimeout(h, e)), c && ((a = t.apply(o, s)), (o = s = null)), a;
	};
	return (
		(c.clear = function () {
			n && (clearTimeout(n), (n = null));
		}),
		(c.flush = function () {
			n && ((a = t.apply(o, s)), (o = s = null), clearTimeout(n), (n = null));
		}),
		c
	);
}
l.debounce = l;
var d = l,
	u = function () {
		return (u =
			Object.assign ||
			function (t) {
				for (var e, i = 1, n = arguments.length; i < n; i++)
					for (var s in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
				return t;
			}).apply(this, arguments);
	};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function m(t, e) {
	var i, n;
	return (
		t && e ? ((i = '' + t + e[0].toUpperCase() + e.slice(1)), (n = t + '-' + e)) : ((i = t || e), (n = t || e)),
		{ name: i, classname: n }
	);
}
function f(t) {
	return /^blob:/.test(t);
}
function p(t) {
	return (
		f(t) ||
		(function (t) {
			return /^data:/.test(t);
		})(t)
	);
}
function g(t) {
	return !!(t && t.constructor && t.call && t.apply);
}
function v(t) {
	return void 0 === t;
}
function b(t) {
	return 'object' == typeof t && null !== t;
}
function w(t, e, i) {
	var n = {};
	return b(t)
		? (Object.keys(e).forEach(function (s) {
				v(t[s])
					? (n[s] = e[s])
					: b(e[s])
					? b(t[s])
						? (n[s] = w(t[s], e[s], i[s]))
						: (n[s] = t[s] ? e[s] : i[s])
					: !0 === e[s] || !1 === e[s]
					? (n[s] = Boolean(t[s]))
					: (n[s] = t[s]);
		  }),
		  n)
		: t
		? e
		: i;
}
function y(t) {
	var e = Number(t);
	return Number.isNaN(e) ? t : e;
}
function z(t) {
	return (
		typeof (
			'number' == t ||
			((function (t) {
				return 'object' == typeof t && null !== t;
			})(t) &&
				'[object Number]' == toString.call(t))
		) && !R(t)
	);
}
function R(t) {
	return t != t;
}
function A(t, e) {
	return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
var x = function (t, e) {
		void 0 === t && (t = {}),
			void 0 === e && (e = {}),
			(this.type = 'manipulateImage'),
			(this.move = t),
			(this.scale = e);
	},
	S = function (t, e) {
		void 0 === e && (e = {}), (this.type = 'resize'), (this.directions = t), (this.params = e);
	},
	M = function (t) {
		(this.type = 'move'), (this.directions = t);
	},
	C = (function () {
		function t(t, e, i, n, s) {
			(this.type = 'drag'),
				(this.nativeEvent = t),
				(this.position = i),
				(this.previousPosition = n),
				(this.element = e),
				(this.anchor = s);
		}
		return (
			(t.prototype.shift = function () {
				var t = this,
					e = t.element,
					i = t.anchor,
					n = t.position,
					s = e.getBoundingClientRect(),
					o = s.left,
					r = s.top;
				return { left: n.left - o - i.left, top: n.top - r - i.top };
			}),
			t
		);
	})();
function E(t, e, i, n, s, o, r, a, h, c) {
	'boolean' != typeof r && ((h = a), (a = r), (r = !1));
	const l = 'function' == typeof i ? i.options : i;
	let d;
	if (
		(t &&
			t.render &&
			((l.render = t.render),
			(l.staticRenderFns = t.staticRenderFns),
			(l._compiled = !0),
			s && (l.functional = !0)),
		n && (l._scopeId = n),
		o
			? ((d = function (t) {
					(t =
						t ||
						(this.$vnode && this.$vnode.ssrContext) ||
						(this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
						'undefined' == typeof __VUE_SSR_CONTEXT__ ||
						(t = __VUE_SSR_CONTEXT__),
						e && e.call(this, h(t)),
						t && t._registeredComponents && t._registeredComponents.add(o);
			  }),
			  (l._ssrRegister = d))
			: e &&
			  (d = r
					? function (t) {
							e.call(this, c(t, this.$root.$options.shadowRoot));
					  }
					: function (t) {
							e.call(this, a(t));
					  }),
		d)
	)
		if (l.functional) {
			const t = l.render;
			l.render = function (e, i) {
				return d.call(i), t(e, i);
			};
		} else {
			const t = l.beforeCreate;
			l.beforeCreate = t ? [].concat(t, d) : [d];
		}
	return i;
}
var W = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)(
					'div',
					{
						ref: 'draggable',
						class: t.classname,
						on: {
							touchstart: t.onTouchStart,
							mousedown: t.onMouseDown,
							mouseover: t.onMouseOver,
							mouseleave: t.onMouseLeave,
						},
					},
					[t._t('default')],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'DraggableElement',
			mixins: [
				{
					beforeMount: function () {
						window.addEventListener('mouseup', this.onMouseUp, { passive: !1 }),
							window.addEventListener('mousemove', this.onMouseMove, { passive: !1 }),
							window.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
							window.addEventListener('touchend', this.onTouchEnd, { passive: !1 });
					},
					beforeDestroy: function () {
						window.removeEventListener('mouseup', this.onMouseUp),
							window.removeEventListener('mousemove', this.onMouseMove),
							window.removeEventListener('touchmove', this.onTouchMove),
							window.removeEventListener('touchend', this.onTouchEnd);
					},
					mounted: function () {
						if (!this.$refs.draggable)
							throw new Error(
								'You should add ref "draggable" to your root element to use draggable mixin',
							);
						(this.touches = []), (this.hovered = !1);
					},
					methods: {
						onMouseOver: function () {
							this.hovered || ((this.hovered = !0), this.$emit('enter'));
						},
						onMouseLeave: function () {
							this.hovered && !this.touches.length && ((this.hovered = !1), this.$emit('leave'));
						},
						onTouchStart: function (t) {
							t.cancelable &&
								!this.disabled &&
								1 === t.touches.length &&
								((this.touches = s(t.touches)),
								this.hovered || (this.$emit('enter'), (this.hovered = !0)),
								t.touches.length &&
									this.initAnchor(
										this.touches.reduce(
											function (e, i) {
												return {
													clientX: e.clientX + i.clientX / t.touches.length,
													clientY: e.clientY + i.clientY / t.touches.length,
												};
											},
											{ clientX: 0, clientY: 0 },
										),
									),
								t.preventDefault && t.preventDefault(),
								t.stopPropagation());
						},
						onTouchEnd: function () {
							this.processEnd();
						},
						onTouchMove: function (t) {
							this.touches.length &&
								(this.processMove(t, t.touches),
								t.preventDefault && t.preventDefault(),
								t.stopPropagation && t.stopPropagation());
						},
						onMouseDown: function (t) {
							if (!this.disabled && 0 === t.button) {
								var e = { fake: !0, clientX: t.clientX, clientY: t.clientY };
								(this.touches = [e]), this.initAnchor(e), t.stopPropagation();
							}
						},
						onMouseMove: function (t) {
							this.touches.length &&
								(this.processMove(t, [{ fake: !0, clientX: t.clientX, clientY: t.clientY }]),
								t.preventDefault && t.preventDefault());
						},
						onMouseUp: function () {
							this.processEnd();
						},
						initAnchor: function (t) {
							var e = this.$refs.draggable.getBoundingClientRect(),
								i = e.left,
								n = e.right,
								s = e.bottom,
								o = e.top;
							this.anchor = {
								left: t.clientX - i,
								top: t.clientY - o,
								bottom: s - t.clientY,
								right: n - t.clientX,
							};
						},
						processMove: function (t, e) {
							var i = s(e);
							if (this.touches.length) {
								if (1 === this.touches.length && 1 === i.length) {
									var n = this.$refs.draggable;
									this.$emit(
										'drag',
										new C(
											t,
											n,
											{ left: i[0].clientX, top: i[0].clientY },
											{ left: this.touches[0].clientX, top: this.touches[0].clientY },
											this.anchor,
										),
									);
								}
								this.touches = i;
							}
						},
						processEnd: function () {
							this.touches.length && this.$emit('drag-end'),
								this.hovered && (this.$emit('leave'), (this.hovered = !1)),
								(this.touches = []);
						},
					},
				},
			],
			props: { classname: { type: String } },
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	T = c('vue-handler-wrapper'),
	O = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					'div',
					{ class: t.classes.root },
					[
						i(
							'DraggableElement',
							{
								class: t.classes.draggable,
								on: {
									drag: function (e) {
										return t.$emit('drag', e);
									},
									'drag-end': function (e) {
										return t.$emit('drag-end');
									},
									leave: function (e) {
										return t.$emit('leave');
									},
									enter: function (e) {
										return t.$emit('enter');
									},
								},
							},
							[t._t('default')],
							2,
						),
					],
					1,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'HandlerWrapper',
			components: { DraggableElement: W },
			props: {
				horizontalPosition: { type: String },
				verticalPosition: { type: String },
				disabled: { type: Boolean, default: !1 },
			},
			computed: {
				classes: function () {
					var t;
					if (this.horizontalPosition || this.verticalPosition) {
						var e,
							n = m(this.horizontalPosition, this.verticalPosition);
						t = T((i((e = {}), n.classname, !0), i(e, 'disabled', this.disabled), e));
					} else t = T({ disabled: this.disabled });
					return { root: t, draggable: T('draggable') };
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	$ = c('vue-line-wrapper'),
	H = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)(
					'DraggableElement',
					{
						class: t.classname,
						on: {
							drag: function (e) {
								return t.$emit('drag', e);
							},
							'drag-end': function (e) {
								return t.$emit('drag-end');
							},
							leave: function (e) {
								return t.$emit('leave');
							},
							enter: function (e) {
								return t.$emit('enter');
							},
						},
					},
					[t._t('default')],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'LineWrapper',
			components: { DraggableElement: W },
			props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } },
			computed: {
				classname: function () {
					var t;
					return $((i((t = {}), this.position, !0), i(t, 'disabled', this.disabled), t));
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	j = ['left', 'right', 'top', 'bottom'],
	P = ['left', 'right'],
	D = ['top', 'bottom'],
	L = ['left', 'top'],
	I = ['fill-area', 'fit-area', 'stencil', 'none'],
	_ = { left: 0, top: 0, width: 0, height: 0 };
function B(t, e, i) {
	return !(i = i || ['width', 'height', 'left', 'top']).some(function (i) {
		return t[i] !== e[i];
	});
}
function F(t) {
	return { left: t.left, top: t.top, right: t.left + t.width, bottom: t.top + t.height };
}
function X(t, e) {
	return { left: t.left - e.left, top: t.top - e.top };
}
function Y(t) {
	return { left: t.left + t.width / 2, top: t.top + t.height / 2 };
}
function k(t, e) {
	var i = { left: 0, top: 0, right: 0, bottom: 0 };
	return (
		j.forEach(function (n) {
			var s = e[n],
				o = F(t)[n];
			i[n] =
				void 0 !== s && void 0 !== o
					? 'left' === n || 'top' === n
						? Math.max(0, s - o)
						: Math.max(0, o - s)
					: 0;
		}),
		i
	);
}
function U(t, e) {
	return {
		left: t.left - e.left,
		top: t.top - e.top,
		width: t.width + e.left + e.right,
		height: t.height + e.top + e.bottom,
	};
}
function N(t) {
	return { left: -t.left, top: -t.top };
}
function Z(t, e) {
	return u(u({}, t), { left: t.left + e.left, top: t.top + e.top });
}
function q(t, e, i, n) {
	if (1 !== e) {
		if (i) {
			var s = Y(t);
			return {
				width: t.width * e,
				height: t.height * e,
				left: t.left + (t.width * (1 - e)) / 2 + (i.left - s.left) * (n || 1 - e),
				top: t.top + (t.height * (1 - e)) / 2 + (i.top - s.top) * (n || 1 - e),
			};
		}
		return {
			width: t.width * e,
			height: t.height * e,
			left: t.left + (t.width * (1 - e)) / 2,
			top: t.top + (t.height * (1 - e)) / 2,
		};
	}
	return t;
}
function V(t) {
	return t.width / t.height;
}
function G(t, e) {
	return Math.min(
		void 0 !== e.right && void 0 !== e.left ? (e.right - e.left) / t.width : 1 / 0,
		void 0 !== e.bottom && void 0 !== e.top ? (e.bottom - e.top) / t.height : 1 / 0,
	);
}
function Q(t, e) {
	var i = { left: 0, top: 0 },
		n = k(t, e);
	return (
		n.left && n.left > 0 ? (i.left = n.left) : n.right && n.right > 0 && (i.left = -n.right),
		n.top && n.top > 0 ? (i.top = n.top) : n.bottom && n.bottom > 0 && (i.top = -n.bottom),
		i
	);
}
function K(t, e) {
	var i;
	return e.minimum && t < e.minimum ? (i = e.minimum) : e.maximum && t > e.maximum && (i = e.maximum), i;
}
function J(t, e) {
	var i = V(t),
		n = V(e);
	return e.width < 1 / 0 && e.height < 1 / 0
		? i > n
			? { width: e.width, height: e.width / i }
			: { width: e.height * i, height: e.height }
		: e.width < 1 / 0
		? { width: e.width, height: e.width / i }
		: e.height < 1 / 0
		? { width: e.height * i, height: e.height }
		: t;
}
function tt(t, e) {
	var i = (e * Math.PI) / 180;
	return {
		width: Math.abs(t.width * Math.cos(i)) + Math.abs(t.height * Math.sin(i)),
		height: Math.abs(t.width * Math.sin(i)) + Math.abs(t.height * Math.cos(i)),
	};
}
function et(t, e) {
	var i = (e * Math.PI) / 180;
	return { left: t.left * Math.cos(i) - t.top * Math.sin(i), top: t.left * Math.sin(i) + t.top * Math.cos(i) };
}
function it(t, e) {
	var i = k(nt(t, e), e);
	return i.left + i.right + i.top + i.bottom
		? i.left + i.right > i.top + i.bottom
			? Math.min((t.width + i.left + i.right) / t.width, G(t, e))
			: Math.min((t.height + i.top + i.bottom) / t.height, G(t, e))
		: 1;
}
function nt(t, e, i) {
	void 0 === i && (i = !1);
	var n = Q(t, e);
	return Z(t, i ? N(n) : n);
}
function st(t) {
	return {
		width: void 0 !== t.right && void 0 !== t.left ? t.right - t.left : 1 / 0,
		height: void 0 !== t.bottom && void 0 !== t.top ? t.bottom - t.top : 1 / 0,
	};
}
function ot(t, e) {
	return u(u({}, t), {
		minWidth: Math.min(e.width, t.minWidth),
		minHeight: Math.min(e.height, t.minHeight),
		maxWidth: Math.min(e.width, t.maxWidth),
		maxHeight: Math.min(e.height, t.maxHeight),
	});
}
function rt(t, e, i) {
	void 0 === i && (i = !0);
	var n = {};
	return (
		j.forEach(function (s) {
			var o = t[s],
				r = e[s];
			void 0 !== o && void 0 !== r
				? (n[s] =
						'left' === s || 'top' === s
							? i
								? Math.max(o, r)
								: Math.min(o, r)
							: i
							? Math.min(o, r)
							: Math.max(o, r))
				: void 0 !== r
				? (n[s] = r)
				: void 0 !== o && (n[s] = o);
		}),
		n
	);
}
function at(t, e) {
	return rt(t, e, !0);
}
function ht(t) {
	var e = t.size,
		i = t.aspectRatio,
		n = t.ignoreMinimum,
		s = t.sizeRestrictions;
	return Boolean(
		(e.correctRatio || (V(e) >= i.minimum && V(e) <= i.maximum)) &&
			e.height <= s.maxHeight &&
			e.width <= s.maxWidth &&
			e.width &&
			e.height &&
			(n || (e.height >= s.minHeight && e.width >= s.minWidth)),
	);
}
function ct(t, e) {
	return Math.pow(t.width - e.width, 2) + Math.pow(t.height - e.height, 2);
}
function lt(t) {
	var e = t.width,
		i = t.height,
		n = t.sizeRestrictions,
		s = {
			minimum: (t.aspectRatio && t.aspectRatio.minimum) || 0,
			maximum: (t.aspectRatio && t.aspectRatio.maximum) || 1 / 0,
		},
		o = {
			width: Math.max(n.minWidth, Math.min(n.maxWidth, e)),
			height: Math.max(n.minHeight, Math.min(n.maxHeight, i)),
		};
	function r(t, o) {
		return (
			void 0 === o && (o = !1),
			t.reduce(function (t, r) {
				return ht({ size: r, aspectRatio: s, sizeRestrictions: n, ignoreMinimum: o }) &&
					(!t || ct(r, { width: e, height: i }) < ct(t, { width: e, height: i }))
					? r
					: t;
			}, null)
		);
	}
	var a = [];
	s &&
		[s.minimum, s.maximum].forEach(function (t) {
			t &&
				a.push(
					{ width: o.width, height: o.width / t, correctRatio: !0 },
					{ width: o.height * t, height: o.height, correctRatio: !0 },
				);
		}),
		ht({ size: o, aspectRatio: s, sizeRestrictions: n }) && a.push(o);
	var h = r(a) || r(a, !0);
	return h && { width: h.width, height: h.height };
}
function dt(t) {
	var e = t.event,
		i = t.coordinates,
		n = t.positionRestrictions,
		s = void 0 === n ? {} : n,
		o = Z(i, e.directions);
	return Z(o, Q(o, s));
}
function ut(t) {
	var e = t.coordinates,
		i = t.transform,
		n = t.imageSize,
		s = t.sizeRestrictions,
		o = t.positionRestrictions,
		r = t.aspectRatio,
		a = t.visibleArea,
		h = function (t, e) {
			return dt({
				coordinates: t,
				positionRestrictions: o,
				event: new M({ left: e.left - t.left, top: e.top - t.top }),
			});
		},
		c = u({}, e);
	return (
		(Array.isArray(i) ? i : [i]).forEach(function (t) {
			var e = {};
			(v((e = 'function' == typeof t ? t({ coordinates: c, imageSize: n, visibleArea: a }) : t).width) &&
				v(e.height)) ||
				(c = (function (t, e) {
					var i = u(
						u(u({}, t), lt({ width: e.width, height: e.height, sizeRestrictions: s, aspectRatio: r })),
						{ left: 0, top: 0 },
					);
					return h(i, { left: t.left, top: t.top });
				})(c, u(u({}, c), e))),
				(v(e.left) && v(e.top)) || (c = h(c, u(u({}, c), e)));
		}),
		c
	);
}
function mt(t) {
	t.event;
	var e = t.getAreaRestrictions,
		i = t.boundaries,
		n = t.coordinates,
		s = t.visibleArea;
	t.aspectRatio;
	var o = t.stencilSize,
		r = t.sizeRestrictions,
		a = t.positionRestrictions;
	t.stencilReference;
	var h,
		c,
		l,
		d = u({}, n),
		m = u({}, s),
		f = u({}, o);
	(h = V(f)),
		(c = V(d)),
		void 0 === l && (l = 0.001),
		(0 === h || 0 === c ? Math.abs(c - h) < l : Math.abs(c / h) < 1 + l && Math.abs(c / h) > 1 - l) ||
			(d = u(
				u({}, d),
				lt({
					sizeRestrictions: r,
					width: d.width,
					height: d.height,
					aspectRatio: { minimum: V(f), maximum: V(f) },
				}),
			));
	var p = it((m = q(m, (d.width * i.width) / (m.width * f.width))), e({ visibleArea: m, type: 'resize' }));
	return (
		1 !== p && ((m = q(m, p)), (d = q(d, p))),
		(m = nt((m = Z(m, X(Y(d), Y(m)))), e({ visibleArea: m, type: 'move' }))),
		{ coordinates: (d = nt(d, at(F(m), a))), visibleArea: m }
	);
}
function ft(t) {
	var e = t.event,
		i = t.getAreaRestrictions,
		n = t.boundaries,
		s = t.coordinates,
		o = t.visibleArea;
	t.aspectRatio, t.stencilSize, t.sizeRestrictions;
	var r = t.positionRestrictions;
	t.stencilReference;
	var a = u({}, s),
		h = u({}, o);
	if (s && o && 'manipulateImage' !== e.type) {
		var c = { width: 0, height: 0 };
		h.width,
			n.width,
			V(n) > V(a)
				? ((c.height = 0.8 * n.height), (c.width = c.height * V(a)))
				: ((c.width = 0.8 * n.width), (c.height = c.width * V(a)));
		var l = it((h = q(h, (a.width * n.width) / (h.width * c.width))), i({ visibleArea: h, type: 'resize' }));
		(h = q(h, l)),
			1 !== l && ((c.height /= l), (c.width /= l)),
			(h = nt((h = Z(h, X(Y(a), Y(h)))), i({ visibleArea: h, type: 'move' }))),
			(a = nt(a, at(F(h), r)));
	}
	return { coordinates: a, visibleArea: h };
}
function pt(t) {
	var e = t.event,
		i = t.coordinates,
		n = t.visibleArea,
		s = t.getAreaRestrictions,
		o = u({}, n),
		r = u({}, i);
	if ('setCoordinates' === e.type) {
		var a = Math.max(0, r.width - o.width),
			h = Math.max(0, r.height - o.height);
		a > h
			? (o = q(o, Math.min(r.width / o.width, G(o, s({ visibleArea: o, type: 'resize' })))))
			: h > a && (o = q(o, Math.min(r.height / o.height, G(o, s({ visibleArea: o, type: 'resize' }))))),
			(o = nt((o = Z(o, N(Q(r, F(o))))), s({ visibleArea: o, type: 'move' })));
	}
	return { visibleArea: o, coordinates: r };
}
function gt(t) {
	var e = t.imageSize,
		i = t.visibleArea,
		n = t.aspectRatio,
		s = t.sizeRestrictions,
		o = i || e,
		r = Math.min(n.maximum || 1 / 0, Math.max(n.minimum || 0, V(o))),
		a =
			o.width < o.height
				? { width: 0.8 * o.width, height: (0.8 * o.width) / r }
				: { height: 0.8 * o.height, width: 0.8 * o.height * r };
	return lt(u(u({}, a), { aspectRatio: n, sizeRestrictions: s }));
}
function vt(t) {
	var e,
		i,
		n = t.imageSize,
		s = t.visibleArea,
		o = t.boundaries,
		r = t.aspectRatio,
		a = t.sizeRestrictions,
		h = t.stencilSize,
		c = s || n;
	return (
		V(c) > V(o)
			? (i = (e = (h.height * c.height) / o.height) * V(h))
			: (e = (i = (h.width * c.width) / o.width) / V(h)),
		lt({ width: i, height: e, aspectRatio: r, sizeRestrictions: a })
	);
}
function bt(t, e) {
	return rt(t, F(e));
}
function wt(t) {
	var e = t.event,
		i = t.coordinates,
		n = t.visibleArea,
		s = t.sizeRestrictions,
		o = t.getAreaRestrictions,
		r = t.positionRestrictions,
		a = t.adjustStencil,
		h = e.scale,
		c = e.move,
		l = u({}, n),
		d = u({}, i),
		m = 1,
		f = 1,
		p = h.factor && Math.abs(h.factor - 1) > 0.001;
	l = Z(l, { left: c.left || 0, top: c.top || 0 });
	var g = {
		stencil: {
			minimum: Math.max(s.minWidth ? s.minWidth / d.width : 0, s.minHeight ? s.minHeight / d.height : 0),
			maximum: Math.min(
				s.maxWidth ? s.maxWidth / d.width : 1 / 0,
				s.maxHeight ? s.maxHeight / d.height : 1 / 0,
				G(d, r),
			),
		},
		area: { maximum: G(l, o({ visibleArea: l, type: 'resize' })) },
	};
	h.factor &&
		p &&
		(h.factor < 1
			? (f = Math.max(h.factor, g.stencil.minimum)) > 1 && (f = 1)
			: h.factor > 1 && (f = Math.min(h.factor, Math.min(g.area.maximum, g.stencil.maximum))) < 1 && (f = 1)),
		f && (l = q(l, f, h.center));
	var v = i.left - n.left,
		b = n.width + n.left - (i.width + i.left),
		w = i.top - n.top,
		y = n.height + n.top - (i.height + i.top);
	return (
		(l = nt(
			(l = Z(
				l,
				Q(l, {
					left: void 0 !== r.left ? r.left - v * f : void 0,
					top: void 0 !== r.top ? r.top - w * f : void 0,
					bottom: void 0 !== r.bottom ? r.bottom + y * f : void 0,
					right: void 0 !== r.right ? r.right + b * f : void 0,
				}),
			)),
			o({ visibleArea: l, type: 'move' }),
		)),
		(d.width = d.width * f),
		(d.height = d.height * f),
		(d.left = l.left + v * f),
		(d.top = l.top + w * f),
		(d = nt(d, at(F(l), r))),
		h.factor &&
			p &&
			a &&
			(h.factor > 1
				? (m = Math.min(g.area.maximum, h.factor) / f)
				: h.factor < 1 && (m = Math.max(d.height / l.height, d.width / l.width, h.factor / f)),
			1 !== m &&
				(l = Z(
					(l = nt((l = q(l, m, h.factor > 1 ? h.center : Y(d))), o({ visibleArea: l, type: 'move' }))),
					N(Q(d, F(l))),
				))),
		{ coordinates: d, visibleArea: l }
	);
}
function yt(t) {
	var e = t.aspectRatio,
		i = t.getAreaRestrictions,
		n = t.coordinates,
		s = t.visibleArea,
		o = t.sizeRestrictions,
		r = t.positionRestrictions,
		a = t.imageSize,
		h = t.previousImageSize,
		c = t.angle,
		l = u({}, n),
		d = u({}, s),
		m = et(Y(u({ left: 0, top: 0 }, h)), c);
	return (
		((l = u(
			u({}, lt({ sizeRestrictions: o, aspectRatio: e, width: l.width, height: l.height })),
			et(Y(l), c),
		)).left -= m.left - a.width / 2 + l.width / 2),
		(l.top -= m.top - a.height / 2 + l.height / 2),
		(d = q(d, it(d, i({ visibleArea: d, type: 'resize' })))),
		{
			coordinates: (l = nt(l, r)),
			visibleArea: (d = nt((d = Z(d, X(Y(l), Y(n)))), i({ visibleArea: d, type: 'move' }))),
		}
	);
}
function zt(t) {
	var e = t.flip,
		i = t.previousFlip,
		n = t.rotate;
	t.aspectRatio;
	var s = t.getAreaRestrictions,
		o = t.coordinates,
		r = t.visibleArea,
		a = t.imageSize,
		h = u({}, o),
		c = u({}, r),
		l = i.horizontal !== e.horizontal,
		d = i.vertical !== e.vertical;
	if (l || d) {
		var m = et({ left: a.width / 2, top: a.height / 2 }, -n),
			f = et(Y(h), -n),
			p = et({ left: l ? m.left - (f.left - m.left) : f.left, top: d ? m.top - (f.top - m.top) : f.top }, n);
		(h = Z(h, X(p, Y(h)))),
			(f = et(Y(c), -n)),
			(c = nt(
				(c = Z(
					c,
					X(
						(p = et(
							{ left: l ? m.left - (f.left - m.left) : f.left, top: d ? m.top - (f.top - m.top) : f.top },
							n,
						)),
						Y(c),
					),
				)),
				s({ visibleArea: c, type: 'move' }),
			));
	}
	return { coordinates: h, visibleArea: c };
}
function Rt(t) {
	var e = t.directions,
		i = t.coordinates,
		n = t.positionRestrictions,
		s = void 0 === n ? {} : n,
		o = t.sizeRestrictions,
		r = t.preserveRatio,
		a = t.compensate,
		h = u({}, e),
		c = U(i, h).width,
		l = U(i, h).height;
	c < 0 &&
		(h.left < 0 && h.right < 0
			? ((h.left = -(i.width - o.minWidth) / (h.left / h.right)),
			  (h.right = -(i.width - o.minWidth) / (h.right / h.left)))
			: h.left < 0
			? (h.left = -(i.width - o.minWidth))
			: h.right < 0 && (h.right = -(i.width - o.minWidth))),
		l < 0 &&
			(h.top < 0 && h.bottom < 0
				? ((h.top = -(i.height - o.minHeight) / (h.top / h.bottom)),
				  (h.bottom = -(i.height - o.minHeight) / (h.bottom / h.top)))
				: h.top < 0
				? (h.top = -(i.height - o.minHeight))
				: h.bottom < 0 && (h.bottom = -(i.height - o.minHeight)));
	var d = k(U(i, h), s);
	a &&
		(d.left && d.left > 0 && 0 === d.right
			? ((h.right += d.left), (h.left -= d.left))
			: d.right && d.right > 0 && 0 === d.left && ((h.left += d.right), (h.right -= d.right)),
		d.top && d.top > 0 && 0 === d.bottom
			? ((h.bottom += d.top), (h.top -= d.top))
			: d.bottom && d.bottom > 0 && 0 === d.top && ((h.top += d.bottom), (h.bottom -= d.bottom)),
		(d = k(U(i, h), s)));
	var m = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
	if (
		(j.forEach(function (t) {
			var e = d[t];
			e && h[t] && (m[t] = Math.max(0, 1 - e / h[t]));
		}),
		r)
	) {
		var f = Math.min.apply(
			null,
			j.map(function (t) {
				return m[t];
			}),
		);
		f !== 1 / 0 &&
			j.forEach(function (t) {
				h[t] *= f;
			});
	} else
		j.forEach(function (t) {
			m[t] !== 1 / 0 && (h[t] *= m[t]);
		});
	if (
		((c = U(i, h).width),
		(l = U(i, h).height),
		h.right + h.left &&
			(c > o.maxWidth
				? (m.width = (o.maxWidth - i.width) / (h.right + h.left))
				: c < o.minWidth && (m.width = (o.minWidth - i.width) / (h.right + h.left))),
		h.bottom + h.top &&
			(l > o.maxHeight
				? (m.height = (o.maxHeight - i.height) / (h.bottom + h.top))
				: l < o.minHeight && (m.height = (o.minHeight - i.height) / (h.bottom + h.top))),
		r)
	) {
		var p = Math.min(m.width, m.height);
		p !== 1 / 0 &&
			j.forEach(function (t) {
				h[t] *= p;
			});
	} else
		m.width !== 1 / 0 &&
			P.forEach(function (t) {
				h[t] *= m.width;
			}),
			m.height !== 1 / 0 &&
				D.forEach(function (t) {
					h[t] *= m.height;
				});
	return h;
}
function At(t, e, i) {
	return 0 == e && 0 == i ? t / 2 : 0 == e ? 0 : 0 == i ? t : t * Math.abs(e / (e + i));
}
var xt = c('vue-simple-handler'),
	St = c('vue-simple-handler-wrapper'),
	Mt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					'HandlerWrapper',
					{
						class: t.classes.wrapper,
						attrs: {
							'vertical-position': t.verticalPosition,
							'horizontal-position': t.horizontalPosition,
							disabled: t.disabled,
						},
						on: { drag: t.onDrag, 'drag-end': t.onDragEnd, enter: t.onEnter, leave: t.onLeave },
					},
					[i('div', { class: t.classes.default })],
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'SimpleHandler',
			components: { HandlerWrapper: O },
			props: {
				defaultClass: { type: String },
				hoverClass: { type: String },
				wrapperClass: { type: String },
				horizontalPosition: { type: String },
				verticalPosition: { type: String },
				disabled: { type: Boolean, default: !1 },
			},
			data: function () {
				return { hover: !1 };
			},
			computed: {
				classes: function () {
					var t,
						e =
							(i((t = {}), this.horizontalPosition, Boolean(this.horizontalPosition)),
							i(t, this.verticalPosition, Boolean(this.verticalPosition)),
							i(
								t,
								''.concat(this.horizontalPosition, '-').concat(this.verticalPosition),
								Boolean(this.verticalPosition && this.horizontalPosition),
							),
							i(t, 'hover', this.hover),
							t);
					return {
						default: h(xt(e), this.defaultClass, this.hover && this.hoverClass),
						wrapper: h(St(e), this.wrapperClass),
					};
				},
			},
			methods: {
				onDrag: function (t) {
					this.$emit('drag', t);
				},
				onEnter: function () {
					this.hover = !0;
				},
				onLeave: function () {
					this.hover = !1;
				},
				onDragEnd: function () {
					this.$emit('drag-end');
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	Ct = c('vue-simple-line'),
	Et = c('vue-simple-line-wrapper'),
	Wt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					'LineWrapper',
					{
						class: t.classes.wrapper,
						attrs: { position: t.position, disabled: t.disabled },
						on: { drag: t.onDrag, 'drag-end': t.onDragEnd, enter: t.onEnter, leave: t.onLeave },
					},
					[i('div', { class: t.classes.root })],
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'SimpleLine',
			components: { LineWrapper: H },
			props: {
				defaultClass: { type: String },
				hoverClass: { type: String },
				wrapperClass: { type: String },
				position: { type: String },
				disabled: { type: Boolean, default: !1 },
			},
			data: function () {
				return { hover: !1 };
			},
			computed: {
				classes: function () {
					return {
						root: h(Ct(i({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass),
						wrapper: h(Et(i({}, this.position, !0)), this.wrapperClass),
					};
				},
			},
			methods: {
				onDrag: function (t) {
					this.$emit('drag', t);
				},
				onEnter: function () {
					this.hover = !0;
				},
				onLeave: function () {
					this.hover = !1;
				},
				onDragEnd: function () {
					this.$emit('drag-end');
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	Tt = c('vue-bounding-box'),
	Ot = ['east', 'west', null],
	$t = ['south', 'north', null],
	Ht = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					'div',
					{ ref: 'box', class: t.classes.root, style: t.style },
					[
						t._t('default'),
						t._v(' '),
						i(
							'div',
							t._l(t.lineNodes, function (e) {
								return i(e.component, {
									key: e.name,
									tag: 'component',
									attrs: {
										'default-class': e.class,
										'hover-class': e.hoverClass,
										'wrapper-class': e.wrapperClass,
										position: e.name,
										disabled: e.disabled,
									},
									on: {
										drag: function (i) {
											return t.onHandlerDrag(i, e.horizontalDirection, e.verticalDirection);
										},
										'drag-end': function (e) {
											return t.onEnd();
										},
									},
								});
							}),
							1,
						),
						t._v(' '),
						t._l(t.handlerNodes, function (e) {
							return i(
								'div',
								{ key: e.name, class: e.wrapperClass, style: e.wrapperStyle },
								[
									i(e.component, {
										tag: 'component',
										attrs: {
											'default-class': e.class,
											'hover-class': e.hoverClass,
											'wrapper-class': e.wrapperClass,
											'horizontal-position': e.horizontalDirection,
											'vertical-position': e.verticalDirection,
											disabled: e.disabled,
										},
										on: {
											drag: function (i) {
												return t.onHandlerDrag(i, e.horizontalDirection, e.verticalDirection);
											},
											'drag-end': function (e) {
												return t.onEnd();
											},
										},
									}),
								],
								1,
							);
						}),
					],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'BoundingBox',
			props: {
				width: { type: Number },
				height: { type: Number },
				transitions: { type: Object },
				handlers: {
					type: Object,
					default: function () {
						return {
							eastNorth: !0,
							north: !0,
							westNorth: !0,
							west: !0,
							westSouth: !0,
							south: !0,
							eastSouth: !0,
							east: !0,
						};
					},
				},
				handlersComponent: {
					type: [Object, String],
					default: function () {
						return Mt;
					},
				},
				handlersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				handlersWrappersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				lines: {
					type: Object,
					default: function () {
						return { west: !0, north: !0, east: !0, south: !0 };
					},
				},
				linesComponent: {
					type: [Object, String],
					default: function () {
						return Wt;
					},
				},
				linesClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				linesWrappersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				resizable: { type: Boolean, default: !0 },
			},
			data: function () {
				var t = [];
				return (
					Ot.forEach(function (e) {
						$t.forEach(function (i) {
							if (e !== i) {
								var n = m(e, i),
									s = n.name,
									o = n.classname;
								t.push({ name: s, classname: o, verticalDirection: i, horizontalDirection: e });
							}
						});
					}),
					{ points: t }
				);
			},
			computed: {
				style: function () {
					var t = {};
					return (
						this.width &&
							this.height &&
							((t.width = ''.concat(this.width, 'px')),
							(t.height = ''.concat(this.height, 'px')),
							this.transitions &&
								this.transitions.enabled &&
								(t.transition = ''
									.concat(this.transitions.time, 'ms ')
									.concat(this.transitions.timingFunction))),
						t
					);
				},
				classes: function () {
					var t = this.handlersClasses,
						e = this.handlersWrappersClasses,
						i = this.linesClasses,
						n = this.linesWrappersClasses;
					return { root: Tt(), handlers: t, handlersWrappers: e, lines: i, linesWrappers: n };
				},
				lineNodes: function () {
					var t = this,
						e = [];
					return (
						this.points.forEach(function (i) {
							(i.horizontalDirection && i.verticalDirection) ||
								!t.lines[i.name] ||
								e.push({
									name: i.name,
									component: t.linesComponent,
									class: h(
										t.classes.lines.default,
										t.classes.lines[i.name],
										!t.resizable && t.classes.lines.disabled,
									),
									wrapperClass: h(
										t.classes.linesWrappers.default,
										t.classes.linesWrappers[i.name],
										!t.resizable && t.classes.linesWrappers.disabled,
									),
									hoverClass: t.classes.lines.hover,
									verticalDirection: i.verticalDirection,
									horizontalDirection: i.horizontalDirection,
									disabled: !t.resizable,
								});
						}),
						e
					);
				},
				handlerNodes: function () {
					var t = this,
						e = [],
						n = this.width,
						s = this.height;
					return (
						this.points.forEach(function (o) {
							if (t.handlers[o.name]) {
								var r = {
									name: o.name,
									component: t.handlersComponent,
									class: h(t.classes.handlers.default, t.classes.handlers[o.name]),
									wrapperClass: h(
										t.classes.handlersWrappers.default,
										t.classes.handlersWrappers[o.name],
									),
									hoverClass: t.classes.handlers.hover,
									verticalDirection: o.verticalDirection,
									horizontalDirection: o.horizontalDirection,
									disabled: !t.resizable,
								};
								if (n && s) {
									var a = o.horizontalDirection,
										c = o.verticalDirection,
										l = 'east' === a ? n : 'west' === a ? 0 : n / 2,
										d = 'south' === c ? s : 'north' === c ? 0 : s / 2;
									(r.wrapperClass = Tt('handler')),
										(r.wrapperStyle = {
											transform: 'translate('.concat(l, 'px, ').concat(d, 'px)'),
										}),
										t.transitions &&
											t.transitions.enabled &&
											(r.wrapperStyle.transition = ''
												.concat(t.transitions.time, 'ms ')
												.concat(t.transitions.timingFunction));
								} else r.wrapperClass = Tt('handler', i({}, o.classname, !0));
								e.push(r);
							}
						}),
						e
					);
				},
			},
			beforeMount: function () {
				window.addEventListener('mouseup', this.onMouseUp, { passive: !1 }),
					window.addEventListener('mousemove', this.onMouseMove, { passive: !1 }),
					window.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
					window.addEventListener('touchend', this.onTouchEnd, { passive: !1 });
			},
			beforeDestroy: function () {
				window.removeEventListener('mouseup', this.onMouseUp),
					window.removeEventListener('mousemove', this.onMouseMove),
					window.removeEventListener('touchmove', this.onTouchMove),
					window.removeEventListener('touchend', this.onTouchEnd);
			},
			mounted: function () {
				this.touches = [];
			},
			methods: {
				onEnd: function () {
					this.$emit('resize-end');
				},
				onHandlerDrag: function (t, e, i) {
					var n,
						s = t.shift(),
						o = s.left,
						r = s.top,
						a = { left: 0, right: 0, top: 0, bottom: 0 };
					'west' === e ? (a.left -= o) : 'east' === e && (a.right += o),
						'north' === i ? (a.top -= r) : 'south' === i && (a.bottom += r),
						!i && e ? (n = 'width') : i && !e && (n = 'height'),
						this.resizable &&
							this.$emit(
								'resize',
								new S(a, {
									allowedDirections: {
										left: 'west' === e || !e,
										right: 'east' === e || !e,
										bottom: 'south' === i || !i,
										top: 'north' === i || !i,
									},
									preserveAspectRatio: t.nativeEvent && t.nativeEvent.shiftKey,
									respectDirection: n,
								}),
							);
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	jt = c('vue-draggable-area'),
	Pt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)(
					'div',
					{ ref: 'container', on: { touchstart: t.onTouchStart, mousedown: t.onMouseDown } },
					[t._t('default')],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'DraggableArea',
			props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } },
			computed: {
				classnames: function () {
					return { default: jt() };
				},
			},
			beforeMount: function () {
				window.addEventListener('mouseup', this.onMouseUp, { passive: !1 }),
					window.addEventListener('mousemove', this.onMouseMove, { passive: !1 }),
					window.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
					window.addEventListener('touchend', this.onTouchEnd, { passive: !1 });
			},
			beforeDestroy: function () {
				window.removeEventListener('mouseup', this.onMouseUp),
					window.removeEventListener('mousemove', this.onMouseMove),
					window.removeEventListener('touchmove', this.onTouchMove),
					window.removeEventListener('touchend', this.onTouchEnd);
			},
			mounted: function () {
				(this.touches = []), (this.touchStarted = !1);
			},
			methods: {
				onTouchStart: function (t) {
					if (t.cancelable) {
						var e = this.movable && 1 === t.touches.length;
						e && (this.touches = s(t.touches)),
							(this.touchStarted || e) && (t.preventDefault(), t.stopPropagation());
					}
				},
				onTouchEnd: function () {
					(this.touchStarted = !1), this.processEnd();
				},
				onTouchMove: function (t) {
					this.touches.length >= 1 &&
						(this.touchStarted
							? (this.processMove(t, t.touches), t.preventDefault(), t.stopPropagation())
							: A(
									{ x: this.touches[0].clientX, y: this.touches[0].clientY },
									{ x: t.touches[0].clientX, y: t.touches[0].clientY },
							  ) > this.activationDistance &&
							  (this.initAnchor({ clientX: t.touches[0].clientX, clientY: t.touches[0].clientY }),
							  (this.touchStarted = !0)));
				},
				onMouseDown: function (t) {
					if (this.movable && 0 === t.button) {
						var e = { fake: !0, clientX: t.clientX, clientY: t.clientY };
						(this.touches = [e]), this.initAnchor(e), t.stopPropagation();
					}
				},
				onMouseMove: function (t) {
					this.touches.length &&
						(this.processMove(t, [{ fake: !0, clientX: t.clientX, clientY: t.clientY }]),
						t.preventDefault && t.cancelable && t.preventDefault(),
						t.stopPropagation());
				},
				onMouseUp: function () {
					this.processEnd();
				},
				initAnchor: function (t) {
					var e = this.$refs.container.getBoundingClientRect(),
						i = e.left,
						n = e.top;
					this.anchor = { x: t.clientX - i, y: t.clientY - n };
				},
				processMove: function (t, e) {
					var i = s(e);
					if (this.touches.length) {
						var n = this.$refs.container.getBoundingClientRect(),
							o = n.left,
							r = n.top;
						1 === this.touches.length &&
							1 === i.length &&
							this.$emit(
								'move',
								new M({
									left: i[0].clientX - (o + this.anchor.x),
									top: i[0].clientY - (r + this.anchor.y),
								}),
							);
					}
				},
				processEnd: function () {
					this.touches.length && this.$emit('move-end'), (this.touches = []);
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	);
function Dt(t) {
	var e, i;
	return {
		rotate: t.rotate || 0,
		flip: {
			horizontal: (null === (e = null == t ? void 0 : t.flip) || void 0 === e ? void 0 : e.horizontal) || !1,
			vertical: (null === (i = null == t ? void 0 : t.flip) || void 0 === i ? void 0 : i.vertical) || !1,
		},
	};
}
function Lt(t) {
	return new Promise(function (e, i) {
		try {
			if (t)
				if (/^data:/i.test(t))
					e(
						(function (t) {
							t = t.replace(/^data:([^;]+);base64,/gim, '');
							for (
								var e = atob(t), i = e.length, n = new ArrayBuffer(i), s = new Uint8Array(n), o = 0;
								o < i;
								o++
							)
								s[o] = e.charCodeAt(o);
							return n;
						})(t),
					);
				else if (/^blob:/i.test(t)) {
					var n = new FileReader();
					(n.onload = function (t) {
						e(t.target.result);
					}),
						(o = t),
						(r = function (t) {
							n.readAsArrayBuffer(t);
						}),
						(a = new XMLHttpRequest()).open('GET', o, !0),
						(a.responseType = 'blob'),
						(a.onload = function () {
							(200 != this.status && 0 !== this.status) || r(this.response);
						}),
						a.send();
				} else {
					var s = new XMLHttpRequest();
					(s.onreadystatechange = function () {
						4 === s.readyState &&
							(200 === s.status || 0 === s.status
								? e(s.response)
								: i('Warning: could not load an image to parse its orientation'),
							(s = null));
					}),
						(s.onprogress = function () {
							'image/jpeg' !== s.getResponseHeader('content-type') && s.abort();
						}),
						(s.withCredentials = !1),
						s.open('GET', t, !0),
						(s.responseType = 'arraybuffer'),
						s.send(null);
				}
			else i('Error: the image is empty');
		} catch (t) {
			i(t);
		}
		var o, r, a;
	});
}
function It(t) {
	var e = t.rotate,
		i = t.flip,
		n = t.scaleX,
		s = t.scaleY,
		o = '';
	return (
		(o += ' rotate(' + e + 'deg) '),
		(o += ' scaleX(' + n * (i.horizontal ? -1 : 1) + ') '),
		(o += ' scaleY(' + s * (i.vertical ? -1 : 1) + ') ')
	);
}
function _t(t) {
	try {
		var e,
			i = new DataView(t),
			n = void 0,
			s = void 0,
			o = void 0,
			r = void 0;
		if (255 === i.getUint8(0) && 216 === i.getUint8(1))
			for (var a = i.byteLength, h = 2; h + 1 < a; ) {
				if (255 === i.getUint8(h) && 225 === i.getUint8(h + 1)) {
					o = h;
					break;
				}
				h++;
			}
		if (
			o &&
			((n = o + 10),
			'Exif' ===
				(function (t, e, i) {
					var n,
						s = '';
					for (n = e, i += e; n < i; n++) s += String.fromCharCode(t.getUint8(n));
					return s;
				})(i, o + 4, 4))
		) {
			var c = i.getUint16(n);
			if (((s = 18761 === c) || 19789 === c) && 42 === i.getUint16(n + 2, s)) {
				var l = i.getUint32(n + 4, s);
				l >= 8 && (r = n + l);
			}
		}
		if (r)
			for (var d = i.getUint16(r, s), u = 0; u < d; u++) {
				h = r + 12 * u + 2;
				if (274 === i.getUint16(h, s)) {
					(h += 8), (e = i.getUint16(h, s)), i.setUint16(h, 1, s);
					break;
				}
			}
		return e;
	} catch (t) {
		return null;
	}
}
var Bt = c('vue-preview-result'),
	Ft = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i('div', { class: t.classes.root }, [
					i('div', { ref: 'wrapper', class: t.classes.wrapper, style: t.wrapperStyle }, [
						i('img', {
							ref: 'image',
							class: t.classes.image,
							style: t.imageStyle,
							attrs: { src: t.image.src },
						}),
					]),
				]);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'PreviewResult',
			props: {
				image: { type: Object },
				transitions: { type: Object },
				stencilCoordinates: {
					type: Object,
					default: function () {
						return { width: 0, height: 0, left: 0, top: 0 };
					},
				},
				imageClass: { type: String },
			},
			computed: {
				classes: function () {
					return {
						root: Bt(),
						wrapper: Bt('wrapper'),
						imageWrapper: Bt('image-wrapper'),
						image: h(Bt('image'), this.imageClass),
					};
				},
				wrapperStyle: function () {
					var t = {
						width: ''.concat(this.stencilCoordinates.width, 'px'),
						height: ''.concat(this.stencilCoordinates.height, 'px'),
						left: 'calc(50% - '.concat(this.stencilCoordinates.width / 2, 'px)'),
						top: 'calc(50% - '.concat(this.stencilCoordinates.height / 2, 'px)'),
					};
					return (
						this.transitions &&
							this.transitions.enabled &&
							(t.transition = ''
								.concat(this.transitions.time, 'ms ')
								.concat(this.transitions.timingFunction)),
						t
					);
				},
				imageStyle: function () {
					var t = this.image.transforms,
						e = tt({ width: this.image.width, height: this.image.height }, t.rotate),
						i = {
							width: ''.concat(this.image.width, 'px'),
							height: ''.concat(this.image.height, 'px'),
							left: '0px',
							top: '0px',
						},
						n = {
							left: ((this.image.width - e.width) * t.scaleX) / 2,
							top: ((this.image.height - e.height) * t.scaleY) / 2,
						},
						s = {
							left: ((1 - t.scaleX) * this.image.width) / 2,
							top: ((1 - t.scaleY) * this.image.height) / 2,
						};
					return (
						(i.transform =
							'translate(\n\t\t\t\t'
								.concat(-this.stencilCoordinates.left - t.translateX - n.left - s.left, 'px,')
								.concat(-this.stencilCoordinates.top - t.translateY - n.top - s.top, 'px) ') + It(t)),
						this.transitions &&
							this.transitions.enabled &&
							(i.transition = ''
								.concat(this.transitions.time, 'ms ')
								.concat(this.transitions.timingFunction)),
						i
					);
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	);
function Xt(t, e) {
	var i = e.getBoundingClientRect(),
		n = i.left,
		s = i.top,
		o = { left: 0, top: 0 },
		r = 0;
	return (
		t.forEach(function (e) {
			(o.left += (e.clientX - n) / t.length), (o.top += (e.clientY - s) / t.length);
		}),
		t.forEach(function (t) {
			r += A({ x: o.left, y: o.top }, { x: t.clientX - n, y: t.clientY - s });
		}),
		{ centerMass: o, spread: r, count: t.length }
	);
}
var Yt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)(
					'div',
					{
						ref: 'container',
						on: { touchstart: t.onTouchStart, mousedown: t.onMouseDown, wheel: t.onWheel },
					},
					[t._t('default')],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			props: {
				touchMove: { type: Boolean, required: !0 },
				mouseMove: { type: Boolean, required: !0 },
				touchResize: { type: Boolean, required: !0 },
				wheelResize: { type: [Boolean, Object], required: !0 },
				eventsFilter: { type: Function, required: !1 },
			},
			beforeMount: function () {
				window.addEventListener('mouseup', this.onMouseUp, { passive: !1 }),
					window.addEventListener('mousemove', this.onMouseMove, { passive: !1 }),
					window.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
					window.addEventListener('touchend', this.onTouchEnd, { passive: !1 });
			},
			beforeDestroy: function () {
				window.removeEventListener('mouseup', this.onMouseUp),
					window.removeEventListener('mousemove', this.onMouseMove),
					window.removeEventListener('touchmove', this.onTouchMove),
					window.removeEventListener('touchend', this.onTouchEnd);
			},
			created: function () {
				(this.transforming = !1), (this.debouncedProcessEnd = d(this.processEnd)), (this.touches = []);
			},
			methods: {
				processMove: function (t, e) {
					if (this.touches.length) {
						if (1 === this.touches.length && 1 === e.length)
							this.$emit(
								'move',
								new x({
									left: this.touches[0].clientX - e[0].clientX,
									top: this.touches[0].clientY - e[0].clientY,
								}),
							);
						else if (this.touches.length > 1 && this.touchResize) {
							var i = Xt(e, this.$refs.container),
								n = this.oldGeometricProperties;
							n.count === i.count &&
								n.count > 1 &&
								this.$emit(
									'resize',
									new x(
										{
											left: n.centerMass.left - i.centerMass.left,
											top: n.centerMass.top - i.centerMass.top,
										},
										{ factor: n.spread / i.spread, center: i.centerMass },
									),
								),
								(this.oldGeometricProperties = i);
						}
						this.touches = e;
					}
				},
				processEnd: function () {
					this.transforming && ((this.transforming = !1), this.$emit('transform-end'));
				},
				processStart: function () {
					(this.transforming = !0), this.debouncedProcessEnd.clear();
				},
				processEvent: function (t) {
					return this.eventsFilter
						? !1 !== this.eventsFilter(t, this.transforming)
						: (t.preventDefault(), t.stopPropagation(), !0);
				},
				onTouchStart: function (t) {
					if (
						t.cancelable &&
						(this.touchMove || (this.touchResize && t.touches.length > 1)) &&
						this.processEvent(t)
					) {
						var e = this.$refs.container,
							i = e.getBoundingClientRect(),
							n = i.left,
							o = i.top,
							r = i.bottom,
							a = i.right;
						(this.touches = s(t.touches).filter(function (t) {
							return t.clientX > n && t.clientX < a && t.clientY > o && t.clientY < r;
						})),
							(this.oldGeometricProperties = Xt(this.touches, e));
					}
				},
				onTouchEnd: function (t) {
					0 === t.touches.length && ((this.touches = []), this.processEnd());
				},
				onTouchMove: function (t) {
					var e = this;
					if (this.touches.length) {
						var i = s(t.touches).filter(function (t) {
							return (
								!t.identifier ||
								e.touches.find(function (e) {
									return e.identifier === t.identifier;
								})
							);
						});
						this.processEvent(t) && (this.processMove(t, i), this.processStart());
					}
				},
				onMouseDown: function (t) {
					if (this.mouseMove && 'buttons' in t && 1 === t.buttons && this.processEvent(t)) {
						var e = { fake: !0, clientX: t.clientX, clientY: t.clientY };
						(this.touches = [e]), this.processStart();
					}
				},
				onMouseMove: function (t) {
					this.touches.length &&
						this.processEvent(t) &&
						this.processMove(t, [{ clientX: t.clientX, clientY: t.clientY }]);
				},
				onMouseUp: function () {
					(this.touches = []), this.processEnd();
				},
				onWheel: function (t) {
					if (this.wheelResize && this.processEvent(t)) {
						var e = this.$refs.container.getBoundingClientRect(),
							i = e.left,
							n = e.top,
							s =
								1 +
								this.wheelResize.ratio *
									((r = t.deltaY || t.detail || t.wheelDelta),
									0 === (a = +r) || R(a) ? a : a > 0 ? 1 : -1),
							o = { left: t.clientX - i, top: t.clientY - n };
						this.$emit('resize', new x({}, { factor: s, center: o })),
							this.touches.length || this.debouncedProcessEnd();
					}
					var r, a;
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	kt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)(
					'transformable-image',
					{
						attrs: {
							'touch-move': t.touchMove,
							'touch-resize': t.touchResize,
							'mouse-move': t.mouseMove,
							'wheel-resize': t.wheelResize,
						},
						on: {
							move: function (e) {
								return t.$emit('move', e);
							},
							resize: function (e) {
								return t.$emit('resize', e);
							},
						},
					},
					[t._t('default')],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			components: { TransformableImage: Yt },
			props: {
				touchMove: { type: Boolean, required: !0 },
				mouseMove: { type: Boolean, required: !0 },
				touchResize: { type: Boolean, required: !0 },
				wheelResize: { type: [Boolean, Object], required: !0 },
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	Ut = c('vue-preview'),
	Nt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i('div', { ref: 'root', class: t.classes.root, style: t.style }, [
					i('div', { ref: 'wrapper', class: t.classes.wrapper, style: t.wrapperStyle }, [
						i('img', {
							directives: [
								{
									name: 'show',
									rawName: 'v-show',
									value: t.image && t.image.src,
									expression: 'image && image.src',
								},
							],
							ref: 'image',
							class: t.classes.image,
							style: t.imageStyle,
							attrs: { src: t.image && t.image.src },
						}),
					]),
				]);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			props: {
				coordinates: { type: Object },
				transitions: { type: Object },
				image: {
					type: Object,
					default: function () {
						return {};
					},
				},
				imageClass: { type: String },
				width: { type: Number },
				height: { type: Number },
				fill: { type: Boolean },
			},
			data: function () {
				return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
			},
			computed: {
				classes: function () {
					return {
						root: Ut({ fill: this.fill }),
						wrapper: Ut('wrapper'),
						imageWrapper: Ut('image-wrapper'),
						image: h(Ut('image'), this.imageClass),
					};
				},
				style: function () {
					if (this.fill) return {};
					var t = {};
					return (
						this.width && (t.width = ''.concat(this.size.width, 'px')),
						this.height && (t.height = ''.concat(this.size.height, 'px')),
						this.transitions &&
							this.transitions.enabled &&
							(t.transition = ''
								.concat(this.transitions.time, 'ms ')
								.concat(this.transitions.timingFunction)),
						t
					);
				},
				wrapperStyle: function () {
					var t = {
						width: ''.concat(this.size.width, 'px'),
						height: ''.concat(this.size.height, 'px'),
						left: 'calc(50% - '.concat(this.size.width / 2, 'px)'),
						top: 'calc(50% - '.concat(this.size.height / 2, 'px)'),
					};
					return (
						this.transitions &&
							this.transitions.enabled &&
							(t.transition = ''
								.concat(this.transitions.time, 'ms ')
								.concat(this.transitions.timingFunction)),
						t
					);
				},
				imageStyle: function () {
					if (this.coordinates && this.image) {
						var t = this.coordinates.width / this.size.width,
							i = e(
								e({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms),
								{},
								{ scaleX: 1 / t, scaleY: 1 / t },
							),
							n = this.imageSize.width,
							s = this.imageSize.height,
							o = tt({ width: n, height: s }, i.rotate),
							r = { width: ''.concat(n, 'px'), height: ''.concat(s, 'px'), left: '0px', top: '0px' },
							a = {
								rotate: { left: ((n - o.width) * i.scaleX) / 2, top: ((s - o.height) * i.scaleY) / 2 },
								scale: { left: ((1 - i.scaleX) * n) / 2, top: ((1 - i.scaleY) * s) / 2 },
							};
						return (
							(r.transform =
								'translate(\n\t\t\t\t'
									.concat(-this.coordinates.left / t - a.rotate.left - a.scale.left, 'px,')
									.concat(-this.coordinates.top / t - a.rotate.top - a.scale.top, 'px) ') + It(i)),
							this.transitions &&
								this.transitions.enabled &&
								(r.transition = ''
									.concat(this.transitions.time, 'ms ')
									.concat(this.transitions.timingFunction)),
							r
						);
					}
					return {};
				},
				size: function () {
					return {
						width: this.width || this.calculatedSize.width,
						height: this.height || this.calculatedSize.height,
					};
				},
				imageSize: function () {
					return {
						width: this.image.width || this.calculatedImageSize.width,
						height: this.image.height || this.calculatedImageSize.height,
					};
				},
			},
			watch: {
				image: function (t) {
					(t.width || t.height) && this.onChangeImage();
				},
			},
			mounted: function () {
				var t = this;
				this.onChangeImage(),
					this.$refs.image.addEventListener('load', function () {
						t.refreshImage();
					}),
					window.addEventListener('resize', this.refresh),
					window.addEventListener('orientationchange', this.refresh);
			},
			destroyed: function () {
				window.removeEventListener('resize', this.refresh),
					window.removeEventListener('orientationchange', this.refresh);
			},
			methods: {
				refreshImage: function () {
					var t = this.$refs.image;
					(this.calculatedImageSize.height = t.naturalHeight),
						(this.calculatedImageSize.width = t.naturalWidth);
				},
				refresh: function () {
					var t = this.$refs.root;
					this.width || (this.calculatedSize.width = t.clientWidth),
						this.height || (this.calculatedSize.height = t.clientHeight);
				},
				onChangeImage: function () {
					var t = this.$refs.image;
					t && t.complete && this.refreshImage(), this.refresh();
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	Zt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)('preview', t._b({ attrs: { fill: !0 } }, 'preview', t.$attrs, !1));
			},
			staticRenderFns: [],
		},
		undefined,
		{ components: { Preview: Nt }, inheritAttrs: !1 },
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	qt = c('vue-rectangle-stencil'),
	Vt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					'div',
					{ class: t.classes.stencil, style: t.style },
					[
						t._t('default'),
						t._v(' '),
						i(
							'bounding-box',
							{
								class: t.classes.boundingBox,
								attrs: {
									width: t.stencilCoordinates.width,
									height: t.stencilCoordinates.height,
									transitions: t.transitions,
									handlers: t.handlers,
									'handlers-component': t.handlersComponent,
									'handlers-classes': t.handlersClasses,
									'handlers-wrappers-classes': t.handlersWrappersClasses,
									lines: t.lines,
									'lines-component': t.linesComponent,
									'lines-classes': t.linesClasses,
									'lines-wrappers-classes': t.linesWrappersClasses,
									resizable: t.resizable,
								},
								on: { resize: t.onResize, 'resize-end': t.onResizeEnd },
							},
							[
								i(
									'draggable-area',
									{ attrs: { movable: t.movable }, on: { move: t.onMove, 'move-end': t.onMoveEnd } },
									[
										i('stencil-preview', {
											class: t.classes.preview,
											attrs: {
												image: t.image,
												coordinates: t.coordinates,
												width: t.stencilCoordinates.width,
												height: t.stencilCoordinates.height,
												transitions: t.transitions,
											},
										}),
									],
									1,
								),
							],
							1,
						),
					],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'RectangleStencil',
			components: { StencilPreview: Zt, BoundingBox: Ht, DraggableArea: Pt },
			props: {
				image: { type: Object },
				coordinates: { type: Object },
				stencilCoordinates: { type: Object },
				handlers: { type: Object },
				handlersComponent: {
					type: [Object, String],
					default: function () {
						return Mt;
					},
				},
				lines: { type: Object },
				linesComponent: {
					type: [Object, String],
					default: function () {
						return Wt;
					},
				},
				aspectRatio: { type: [Number, String] },
				minAspectRatio: { type: [Number, String] },
				maxAspectRatio: { type: [Number, String] },
				movable: { type: Boolean, default: !0 },
				resizable: { type: Boolean, default: !0 },
				transitions: { type: Object },
				movingClass: { type: String },
				resizingClass: { type: String },
				previewClass: { type: String },
				boundingBoxClass: { type: String },
				linesClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				linesWrappersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				handlersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				handlersWrappersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
			},
			data: function () {
				return { moving: !1, resizing: !1 };
			},
			computed: {
				classes: function () {
					return {
						stencil: h(
							qt({ movable: this.movable, moving: this.moving, resizing: this.resizing }),
							this.moving && this.movingClass,
							this.resizing && this.resizingClass,
						),
						preview: h(qt('preview'), this.previewClass),
						boundingBox: h(qt('bounding-box'), this.boundingBoxClass),
					};
				},
				style: function () {
					var t = this.stencilCoordinates,
						e = t.height,
						i = t.width,
						n = t.left,
						s = t.top,
						o = {
							width: ''.concat(i, 'px'),
							height: ''.concat(e, 'px'),
							transform: 'translate('.concat(n, 'px, ').concat(s, 'px)'),
						};
					return (
						this.transitions &&
							this.transitions.enabled &&
							(o.transition = ''
								.concat(this.transitions.time, 'ms ')
								.concat(this.transitions.timingFunction)),
						o
					);
				},
			},
			methods: {
				onMove: function (t) {
					this.$emit('move', t), (this.moving = !0);
				},
				onMoveEnd: function () {
					this.$emit('move-end'), (this.moving = !1);
				},
				onResize: function (t) {
					this.$emit('resize', t), (this.resizing = !0);
				},
				onResizeEnd: function () {
					this.$emit('resize-end'), (this.resizing = !1);
				},
				aspectRatios: function () {
					return {
						minimum: this.aspectRatio || this.minAspectRatio,
						maximum: this.aspectRatio || this.maxAspectRatio,
					};
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	),
	Gt = c('vue-circle-stencil'),
	Qt = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					'div',
					{ class: t.classes.stencil, style: t.style },
					[
						t._t('default'),
						t._v(' '),
						i(
							'bounding-box',
							{
								class: t.classes.boundingBox,
								attrs: {
									width: t.stencilCoordinates.width,
									height: t.stencilCoordinates.height,
									transitions: t.transitions,
									handlers: t.handlers,
									'handlers-component': t.handlersComponent,
									'handlers-classes': t.handlersClasses,
									'handlers-wrappers-classes': t.handlersWrappersClasses,
									lines: t.lines,
									'lines-component': t.linesComponent,
									'lines-classes': t.linesClasses,
									'lines-wrappers-classes': t.linesWrappersClasses,
									resizable: t.resizable,
								},
								on: { resize: t.onResize, 'resize-end': t.onResizeEnd },
							},
							[
								i(
									'draggable-area',
									{ attrs: { movable: t.movable }, on: { move: t.onMove, 'move-end': t.onMoveEnd } },
									[
										i('stencil-preview', {
											class: t.classes.preview,
											attrs: {
												image: t.image,
												coordinates: t.coordinates,
												width: t.stencilCoordinates.width,
												height: t.stencilCoordinates.height,
												transitions: t.transitions,
											},
										}),
									],
									1,
								),
							],
							1,
						),
					],
					2,
				);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			components: { StencilPreview: Zt, BoundingBox: Ht, DraggableArea: Pt },
			props: {
				image: { type: Object },
				coordinates: { type: Object },
				stencilCoordinates: { type: Object },
				handlers: {
					type: Object,
					default: function () {
						return { eastNorth: !0, westNorth: !0, westSouth: !0, eastSouth: !0 };
					},
				},
				handlersComponent: {
					type: [Object, String],
					default: function () {
						return Mt;
					},
				},
				handlersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				handlersWrappersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				lines: { type: Object },
				linesComponent: {
					type: [Object, String],
					default: function () {
						return Wt;
					},
				},
				linesClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				linesWrappersClasses: {
					type: Object,
					default: function () {
						return {};
					},
				},
				movable: { type: Boolean, default: !0 },
				resizable: { type: Boolean, default: !0 },
				transitions: { type: Object },
				movingClass: { type: String },
				resizingClass: { type: String },
				previewClass: { type: String },
				boundingBoxClass: { type: String },
			},
			data: function () {
				return { moving: !1, resizing: !1 };
			},
			computed: {
				classes: function () {
					return {
						stencil: h(
							Gt({ movable: this.movable, moving: this.moving, resizing: this.resizing }),
							this.moving && this.movingClass,
							this.resizing && this.resizingClass,
						),
						preview: h(Gt('preview'), this.previewClass),
						boundingBox: h(Gt('bounding-box'), this.boundingBoxClass),
					};
				},
				style: function () {
					var t = this.stencilCoordinates,
						e = t.height,
						i = t.width,
						n = t.left,
						s = t.top,
						o = {
							width: ''.concat(i, 'px'),
							height: ''.concat(e, 'px'),
							transform: 'translate('.concat(n, 'px, ').concat(s, 'px)'),
						};
					return (
						this.transitions &&
							this.transitions.enabled &&
							(o.transition = ''
								.concat(this.transitions.time, 'ms ')
								.concat(this.transitions.timingFunction)),
						o
					);
				},
			},
			methods: {
				onMove: function (t) {
					this.$emit('move', t), (this.moving = !0);
				},
				onMoveEnd: function () {
					this.$emit('move-end'), (this.moving = !1);
				},
				onResize: function (t) {
					this.$emit('resize', t), (this.resizing = !0);
				},
				onResizeEnd: function () {
					this.$emit('resize-end'), (this.resizing = !1);
				},
				aspectRatios: function () {
					return { minimum: 1, maximum: 1 };
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	);
var Kt = ['transitions'],
	Jt = c('vue-advanced-cropper'),
	te = E(
		{
			render: function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i('div', { ref: 'cropper', class: t.classes.cropper }, [
					i('div', { ref: 'stretcher', class: t.classes.stretcher }),
					t._v(' '),
					i(
						'div',
						{ class: t.classes.boundaries, style: t.boundariesStyle },
						[
							i(
								t.backgroundWrapperComponent,
								{
									tag: 'component',
									class: t.classes.cropperWrapper,
									attrs: {
										'wheel-resize': t.settings.resizeImage.wheel,
										'touch-resize': t.settings.resizeImage.touch,
										'touch-move': t.settings.moveImage.touch,
										'mouse-move': t.settings.moveImage.mouse,
									},
									on: { move: t.onManipulateImage, resize: t.onManipulateImage },
								},
								[
									i('div', { class: t.classes.background, style: t.boundariesStyle }),
									t._v(' '),
									i('div', { class: t.classes.imageWrapper }, [
										i('img', {
											ref: 'image',
											class: t.classes.image,
											style: t.imageStyle,
											attrs: {
												crossorigin: t.imageAttributes.crossOrigin,
												src: t.imageAttributes.src,
											},
											on: {
												mousedown: function (t) {
													t.preventDefault();
												},
											},
										}),
									]),
									t._v(' '),
									i('div', { class: t.classes.foreground, style: t.boundariesStyle }),
									t._v(' '),
									i(
										t.stencilComponent,
										t._b(
											{
												directives: [
													{
														name: 'show',
														rawName: 'v-show',
														value: t.imageLoaded,
														expression: 'imageLoaded',
													},
												],
												ref: 'stencil',
												tag: 'component',
												attrs: {
													image: t.image,
													coordinates: t.coordinates,
													'stencil-coordinates': t.stencilCoordinates,
													transitions: t.transitionsOptions,
												},
												on: {
													resize: t.onResize,
													'resize-end': t.onResizeEnd,
													move: t.onMove,
													'move-end': t.onMoveEnd,
												},
											},
											'component',
											t.stencilProps,
											!1,
										),
									),
									t._v(' '),
									t._t('stencil-content'),
									t._v(' '),
									t.canvas ? i('canvas', { ref: 'canvas', style: { display: 'none' } }) : t._e(),
									t._v(' '),
									t.canvas
										? i('canvas', { ref: 'sourceCanvas', style: { display: 'none' } })
										: t._e(),
								],
								2,
							),
						],
						1,
					),
				]);
			},
			staticRenderFns: [],
		},
		undefined,
		{
			name: 'Cropper',
			components: { BackgroundWrapper: kt },
			props: {
				src: { type: String, default: null },
				stencilComponent: {
					type: [Object, String],
					default: function () {
						return Vt;
					},
				},
				backgroundWrapperComponent: {
					type: [Object, String],
					default: function () {
						return kt;
					},
				},
				stencilProps: {
					type: Object,
					default: function () {
						return {};
					},
				},
				autoZoom: { type: Boolean, default: !1 },
				imageClass: { type: String },
				boundariesClass: { type: String },
				backgroundClass: { type: String },
				foregroundClass: { type: String },
				minWidth: { type: [Number, String] },
				minHeight: { type: [Number, String] },
				maxWidth: { type: [Number, String] },
				maxHeight: { type: [Number, String] },
				debounce: { type: [Boolean, Number], default: 500 },
				transitions: { type: Boolean, default: !0 },
				checkOrientation: { type: Boolean, default: !0 },
				canvas: { type: [Object, Boolean], default: !0 },
				crossOrigin: { type: [Boolean, String], default: void 0 },
				transitionTime: { type: Number, default: 300 },
				imageRestriction: {
					type: String,
					default: 'fit-area',
					validator: function (t) {
						return -1 !== I.indexOf(t);
					},
				},
				roundResult: { type: Boolean, default: !0 },
				defaultSize: { type: [Function, Object] },
				defaultPosition: {
					type: [Function, Object],
					default: function (t) {
						var e = t.imageSize,
							i = t.visibleArea,
							n = t.coordinates,
							s = i || e;
						return {
							left: (i ? i.left : 0) + s.width / 2 - n.width / 2,
							top: (i ? i.top : 0) + s.height / 2 - n.height / 2,
						};
					},
				},
				defaultVisibleArea: {
					type: [Function, Object],
					default: function (t) {
						var e = t.getAreaRestrictions,
							i = t.coordinates,
							n = t.imageSize,
							s = V(t.boundaries);
						if (i) {
							var o = { height: Math.max(i.height, n.height), width: Math.max(i.width, n.width) },
								r = J(
									{
										width: V(o) > s ? o.width : o.height * s,
										height: V(o) > s ? o.width / s : o.height,
									},
									st(e()),
								),
								a = {
									left: i.left + i.width / 2 - r.width / 2,
									top: i.top + i.height / 2 - r.height / 2,
									width: r.width,
									height: r.height,
								},
								h = k(i, F(u({ left: 0, top: 0 }, n))),
								c = {};
							return (
								!h.left && !h.right && a.width <= n.width && ((c.left = 0), (c.right = n.width)),
								!h.top && !h.bottom && a.height <= n.height && ((c.top = 0), (c.bottom = n.height)),
								nt(a, c)
							);
						}
						var l = V(n);
						return (
							(r = { height: l > s ? n.height : n.width / s, width: l > s ? n.height * s : n.width }),
							{
								left: n.width / 2 - r.width / 2,
								top: n.height / 2 - r.height / 2,
								width: r.width,
								height: r.height,
							}
						);
					},
				},
				defaultTransforms: { type: [Function, Object] },
				defaultBoundaries: {
					type: [Function, String],
					validator: function (t) {
						return !('string' == typeof t && 'fill' !== t && 'fit' !== t);
					},
				},
				priority: { type: String, default: 'coordinates' },
				stencilSize: { type: [Object, Function] },
				resizeImage: { type: [Boolean, Object], default: !0 },
				moveImage: { type: [Boolean, Object], default: !0 },
				autoZoomAlgorithm: { type: Function },
				resizeAlgorithm: {
					type: Function,
					default: function (t) {
						var e = t.event,
							i = t.coordinates,
							n = t.aspectRatio,
							s = t.positionRestrictions,
							o = t.sizeRestrictions,
							r = u(u({}, i), { right: i.left + i.width, bottom: i.top + i.height }),
							a = e.params || {},
							h = u({}, e.directions),
							c = a.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
						o.widthFrozen && ((h.left = 0), (h.right = 0)),
							o.heightFrozen && ((h.top = 0), (h.bottom = 0)),
							j.forEach(function (t) {
								c[t] || (h[t] = 0);
							});
						var l = U(
								r,
								(h = Rt({
									coordinates: r,
									directions: h,
									sizeRestrictions: o,
									positionRestrictions: s,
								})),
							).width,
							d = U(r, h).height,
							m = a.preserveRatio ? V(r) : K(l / d, n);
						if (m) {
							var f = a.respectDirection;
							if ((f || (f = r.width >= r.height || 1 === m ? 'width' : 'height'), 'width' === f)) {
								var p = l / m - r.height;
								if (c.top && c.bottom) {
									var g = h.top,
										v = h.bottom;
									(h.bottom = At(p, v, g)), (h.top = At(p, g, v));
								} else
									c.bottom
										? (h.bottom = p)
										: c.top
										? (h.top = p)
										: c.right
										? (h.right = 0)
										: c.left && (h.left = 0);
							} else if ('height' === f) {
								var b = r.width - d * m;
								if (c.left && c.right) {
									var w = h.left,
										y = h.right;
									(h.left = -At(b, w, y)), (h.right = -At(b, y, w));
								} else
									c.left
										? (h.left = -b)
										: c.right
										? (h.right = -b)
										: c.top
										? (h.top = 0)
										: c.bottom && (h.bottom = 0);
							}
							h = Rt({
								directions: h,
								coordinates: r,
								sizeRestrictions: o,
								positionRestrictions: s,
								preserveRatio: !0,
								compensate: a.compensate,
							});
						}
						return (
							(l = U(r, h).width),
							(d = U(r, h).height),
							(m = a.preserveRatio ? V(r) : K(l / d, n)) &&
								Math.abs(m - l / d) > 0.001 &&
								j.forEach(function (t) {
									c[t] || (h[t] = 0);
								}),
							dt({
								event: new M({ left: -h.left, top: -h.top }),
								coordinates: {
									width: i.width + h.right + h.left,
									height: i.height + h.top + h.bottom,
									left: i.left,
									top: i.top,
								},
								positionRestrictions: s,
							})
						);
					},
				},
				moveAlgorithm: { type: Function, default: dt },
				initStretcher: {
					type: Function,
					default: function (t) {
						var e = t.stretcher,
							i = t.imageSize,
							n = V(i);
						(e.style.width = i.width + 'px'),
							(e.style.height = e.clientWidth / n + 'px'),
							(e.style.width = e.clientWidth + 'px');
					},
				},
				fitCoordinates: {
					type: Function,
					default: function (t) {
						var e = t.visibleArea,
							i = t.coordinates,
							n = t.aspectRatio,
							s = t.sizeRestrictions,
							o = t.positionRestrictions,
							r = u(
								u({}, i),
								lt({
									width: i.width,
									height: i.height,
									aspectRatio: n,
									sizeRestrictions: {
										maxWidth: e.width,
										maxHeight: e.height,
										minHeight: Math.min(e.height, s.minHeight),
										minWidth: Math.min(e.width, s.minWidth),
									},
								}),
							);
						return (r = nt((r = Z(r, X(Y(i), Y(r)))), at(F(e), o)));
					},
				},
				fitVisibleArea: {
					type: Function,
					default: function (t) {
						var e = t.visibleArea,
							i = t.boundaries,
							n = t.getAreaRestrictions,
							s = t.coordinates,
							o = u({}, e);
						(o.height = o.width / V(i)),
							(o.top += (e.height - o.height) / 2),
							(s.height - o.height > 0 || s.width - o.width > 0) &&
								(o = q(o, Math.max(s.height / o.height, s.width / o.width)));
						var r = N(Q(s, F((o = q(o, it(o, n({ visibleArea: o, type: 'resize' })))))));
						return (
							o.width < s.width && (r.left = 0),
							o.height < s.height && (r.top = 0),
							(o = nt((o = Z(o, r)), n({ visibleArea: o, type: 'move' })))
						);
					},
				},
				areaRestrictionsAlgorithm: {
					type: Function,
					default: function (t) {
						var e = t.visibleArea,
							i = t.boundaries,
							n = t.imageSize,
							s = t.imageRestriction,
							o = t.type,
							r = {};
						return (
							'fill-area' === s
								? (r = { left: 0, top: 0, right: n.width, bottom: n.height })
								: 'fit-area' === s &&
								  (V(i) > V(n)
										? ((r = { top: 0, bottom: n.height }),
										  e &&
												'move' === o &&
												(e.width > n.width
													? ((r.left = -(e.width - n.width) / 2),
													  (r.right = n.width - r.left))
													: ((r.left = 0), (r.right = n.width))))
										: ((r = { left: 0, right: n.width }),
										  e &&
												'move' === o &&
												(e.height > n.height
													? ((r.top = -(e.height - n.height) / 2),
													  (r.bottom = n.height - r.top))
													: ((r.top = 0), (r.bottom = n.height))))),
							r
						);
					},
				},
				sizeRestrictionsAlgorithm: {
					type: Function,
					default: function (t) {
						return {
							minWidth: t.minWidth,
							minHeight: t.minHeight,
							maxWidth: t.maxWidth,
							maxHeight: t.maxHeight,
						};
					},
				},
				positionRestrictionsAlgorithm: {
					type: Function,
					default: function (t) {
						var e = t.imageSize,
							i = {};
						return (
							'none' !== t.imageRestriction &&
								(i = { left: 0, top: 0, right: e.width, bottom: e.height }),
							i
						);
					},
				},
			},
			data: function () {
				return {
					transitionsActive: !1,
					imageLoaded: !1,
					imageAttributes: { width: null, height: null, crossOrigin: !1, src: null },
					defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } },
					appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } },
					boundaries: { width: 0, height: 0 },
					visibleArea: null,
					coordinates: e({}, _),
				};
			},
			computed: {
				image: function () {
					return {
						src: this.imageAttributes.src,
						width: this.imageAttributes.width,
						height: this.imageAttributes.height,
						transforms: this.imageTransforms,
					};
				},
				imageTransforms: function () {
					return {
						rotate: this.appliedImageTransforms.rotate,
						flip: {
							horizontal: this.appliedImageTransforms.flip.horizontal,
							vertical: this.appliedImageTransforms.flip.vertical,
						},
						translateX: this.visibleArea ? this.visibleArea.left / this.coefficient : 0,
						translateY: this.visibleArea ? this.visibleArea.top / this.coefficient : 0,
						scaleX: 1 / this.coefficient,
						scaleY: 1 / this.coefficient,
					};
				},
				imageSize: function () {
					var t = (function (t) {
						return (t * Math.PI) / 180;
					})(this.imageTransforms.rotate);
					return {
						width:
							Math.abs(this.imageAttributes.width * Math.cos(t)) +
							Math.abs(this.imageAttributes.height * Math.sin(t)),
						height:
							Math.abs(this.imageAttributes.width * Math.sin(t)) +
							Math.abs(this.imageAttributes.height * Math.cos(t)),
					};
				},
				initialized: function () {
					return Boolean(this.visibleArea && this.imageLoaded);
				},
				settings: function () {
					var t = w(
						this.resizeImage,
						{ touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 },
						{ touch: !1, wheel: !1, adjustStencil: !1 },
					);
					return {
						moveImage: w(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }),
						resizeImage: t,
					};
				},
				coefficient: function () {
					return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
				},
				areaRestrictions: function () {
					return this.imageLoaded
						? this.areaRestrictionsAlgorithm({
								imageSize: this.imageSize,
								imageRestriction: this.imageRestriction,
								boundaries: this.boundaries,
						  })
						: {};
				},
				transitionsOptions: function () {
					return { enabled: this.transitionsActive, timingFunction: 'ease-in-out', time: 350 };
				},
				sizeRestrictions: function () {
					if (
						this.boundaries.width &&
						this.boundaries.height &&
						this.imageSize.width &&
						this.imageSize.height
					) {
						var t = this.sizeRestrictionsAlgorithm({
							imageSize: this.imageSize,
							minWidth: v(this.minWidth) ? 0 : y(this.minWidth),
							minHeight: v(this.minHeight) ? 0 : y(this.minHeight),
							maxWidth: v(this.maxWidth) ? 1 / 0 : y(this.maxWidth),
							maxHeight: v(this.maxHeight) ? 1 / 0 : y(this.maxHeight),
						});
						if (
							((t = (function (t) {
								var e = t.areaRestrictions,
									i = t.sizeRestrictions;
								t.imageSize;
								var n = t.boundaries,
									s = t.positionRestrictions;
								t.imageRestriction;
								var o = u(u({}, i), {
									minWidth: void 0 !== i.minWidth ? i.minWidth : 0,
									minHeight: void 0 !== i.minHeight ? i.minHeight : 0,
									maxWidth: void 0 !== i.maxWidth ? i.maxWidth : 1 / 0,
									maxHeight: void 0 !== i.maxHeight ? i.maxHeight : 1 / 0,
								});
								void 0 !== s.left &&
									void 0 !== s.right &&
									(o.maxWidth = Math.min(o.maxWidth, s.right - s.left)),
									void 0 !== s.bottom &&
										void 0 !== s.top &&
										(o.maxHeight = Math.min(o.maxHeight, s.bottom - s.top));
								var r = st(e),
									a = J(n, r);
								return (
									r.width < 1 / 0 &&
										(!o.maxWidth || o.maxWidth > a.width) &&
										(o.maxWidth = Math.min(o.maxWidth, a.width)),
									r.height < 1 / 0 &&
										(!o.maxHeight || o.maxHeight > a.height) &&
										(o.maxHeight = Math.min(o.maxHeight, a.height)),
									o.minWidth > o.maxWidth && ((o.minWidth = o.maxWidth), (o.widthFrozen = !0)),
									o.minHeight > o.maxHeight && ((o.minHeight = o.maxHeight), (o.heightFrozen = !0)),
									o
								);
							})({
								sizeRestrictions: t,
								areaRestrictions: this.getAreaRestrictions({
									visibleArea: this.visibleArea,
									type: 'resize',
								}),
								imageSize: this.imageSize,
								boundaries: this.boundaries,
								positionRestrictions: this.positionRestrictions,
								imageRestriction: this.imageRestriction,
								visibleArea: this.visibleArea,
								stencilSize: this.getStencilSize(),
							})),
							this.visibleArea && this.stencilSize)
						) {
							var e = this.getStencilSize(),
								i = st(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: 'resize' }));
							(t.maxWidth = Math.min(t.maxWidth, (i.width * e.width) / this.boundaries.width)),
								(t.maxHeight = Math.min(t.maxHeight, (i.height * e.height) / this.boundaries.height)),
								t.maxWidth < t.minWidth && (t.minWidth = t.maxWidth),
								t.maxHeight < t.minHeight && (t.minHeight = t.maxHeight);
						}
						return t;
					}
					return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
				},
				positionRestrictions: function () {
					return this.positionRestrictionsAlgorithm({
						imageSize: this.imageSize,
						imageRestriction: this.imageRestriction,
					});
				},
				classes: function () {
					return {
						cropper: Jt(),
						image: h(Jt('image'), this.imageClass),
						stencil: Jt('stencil'),
						boundaries: h(Jt('boundaries'), this.boundariesClass),
						stretcher: h(Jt('stretcher')),
						background: h(Jt('background'), this.backgroundClass),
						foreground: h(Jt('foreground'), this.foregroundClass),
						imageWrapper: h(Jt('image-wrapper')),
						cropperWrapper: h(Jt('cropper-wrapper')),
					};
				},
				stencilCoordinates: function () {
					if (this.initialized) {
						var t = this.coordinates,
							e = t.width,
							i = t.height,
							n = t.left,
							s = t.top;
						return {
							width: e / this.coefficient,
							height: i / this.coefficient,
							left: (n - this.visibleArea.left) / this.coefficient,
							top: (s - this.visibleArea.top) / this.coefficient,
						};
					}
					return this.defaultCoordinates();
				},
				boundariesStyle: function () {
					var t = {
						width: this.boundaries.width ? ''.concat(Math.round(this.boundaries.width), 'px') : 'auto',
						height: this.boundaries.height ? ''.concat(Math.round(this.boundaries.height), 'px') : 'auto',
						transition: 'opacity '.concat(this.transitionTime, 'ms'),
						pointerEvents: this.imageLoaded ? 'all' : 'none',
					};
					return this.imageLoaded || (t.opacity = '0'), t;
				},
				imageStyle: function () {
					var t =
							this.imageAttributes.width > this.imageAttributes.height
								? {
										width: Math.min(1024, this.imageAttributes.width),
										height:
											Math.min(1024, this.imageAttributes.width) /
											(this.imageAttributes.width / this.imageAttributes.height),
								  }
								: {
										height: Math.min(1024, this.imageAttributes.height),
										width:
											Math.min(1024, this.imageAttributes.height) *
											(this.imageAttributes.width / this.imageAttributes.height),
								  },
						i = {
							left: (t.width - this.imageSize.width) / (2 * this.coefficient),
							top: (t.height - this.imageSize.height) / (2 * this.coefficient),
						},
						n = {
							left: ((1 - 1 / this.coefficient) * t.width) / 2,
							top: ((1 - 1 / this.coefficient) * t.height) / 2,
						},
						s = e(
							e({}, this.imageTransforms),
							{},
							{
								scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / t.width),
								scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / t.height),
							},
						),
						o = {
							width: ''.concat(t.width, 'px'),
							height: ''.concat(t.height, 'px'),
							left: '0px',
							top: '0px',
							transform:
								'translate('
									.concat(-i.left - n.left - this.imageTransforms.translateX, 'px, ')
									.concat(-i.top - n.top - this.imageTransforms.translateY, 'px)') + It(s),
						};
					return (
						this.transitionsOptions.enabled &&
							(o.transition = ''
								.concat(this.transitionsOptions.time, 'ms ')
								.concat(this.transitionsOptions.timingFunction)),
						o
					);
				},
			},
			watch: {
				src: function () {
					this.onChangeImage();
				},
				stencilComponent: function () {
					var t = this;
					this.$nextTick(function () {
						t.resetCoordinates(), t.runAutoZoom('setCoordinates'), t.onChange();
					});
				},
				minWidth: function () {
					this.onPropsChange();
				},
				maxWidth: function () {
					this.onPropsChange();
				},
				minHeight: function () {
					this.onPropsChange();
				},
				maxHeight: function () {
					this.onPropsChange();
				},
				imageRestriction: function () {
					this.reset();
				},
				stencilProps: function (t, e) {
					['aspectRatio', 'minAspectRatio', 'maxAspectRatio'].find(function (i) {
						return t[i] !== e[i];
					}) && this.$nextTick(this.onPropsChange);
				},
			},
			created: function () {
				(this.debouncedUpdate = d(this.update, this.debounce)),
					(this.debouncedDisableTransitions = d(this.disableTransitions, this.transitionsOptions.time)),
					(this.awaiting = !1);
			},
			mounted: function () {
				this.$refs.image.addEventListener('load', this.onSuccessLoadImage),
					this.$refs.image.addEventListener('error', this.onFailLoadImage),
					this.onChangeImage(),
					window.addEventListener('resize', this.refresh),
					window.addEventListener('orientationchange', this.refresh);
			},
			destroyed: function () {
				window.removeEventListener('resize', this.refresh),
					window.removeEventListener('orientationchange', this.refresh),
					this.imageAttributes.revoke &&
						this.imageAttributes.src &&
						URL.revokeObjectURL(this.imageAttributes.src);
			},
			methods: {
				getResult: function () {
					var t = this.initialized ? this.prepareResult(e({}, this.coordinates)) : this.defaultCoordinates(),
						i = { rotate: this.imageTransforms.rotate % 360, flip: e({}, this.imageTransforms.flip) };
					if (this.src && this.imageLoaded) {
						var n = this;
						return {
							image: this.image,
							coordinates: t,
							visibleArea: this.visibleArea ? e({}, this.visibleArea) : null,
							imageTransforms: i,
							get canvas() {
								return n.canvas ? n.getCanvas() : void 0;
							},
						};
					}
					return {
						image: this.image,
						coordinates: t,
						visibleArea: this.visibleArea ? e({}, this.visibleArea) : null,
						canvas: void 0,
						imageTransforms: i,
					};
				},
				zoom: function (t, e) {
					var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						n = i.transitions,
						s = void 0 === n || n;
					this.onManipulateImage(new x({}, { factor: 1 / t, center: e }), { normalize: !1, transitions: s });
				},
				move: function (t, e) {
					var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						n = i.transitions,
						s = void 0 === n || n;
					this.onManipulateImage(new x({ left: t || 0, top: e || 0 }), { normalize: !1, transitions: s });
				},
				setCoordinates: function (t) {
					var e = this,
						i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = i.autoZoom,
						s = void 0 === n || n,
						o = i.transitions,
						r = void 0 === o || o;
					this.$nextTick(function () {
						e.imageLoaded
							? (e.transitionsActive ||
									(r && e.enableTransitions(),
									(e.coordinates = e.applyTransform(t)),
									s && e.runAutoZoom('setCoordinates'),
									r && e.debouncedDisableTransitions()),
							  e.onChange())
							: (e.delayedTransforms = t);
					});
				},
				refresh: function () {
					var t = this,
						e = this.$refs.image;
					if (this.src && e)
						return this.initialized
							? this.updateVisibleArea().then(function () {
									t.onChange();
							  })
							: this.resetVisibleArea().then(function () {
									t.onChange();
							  });
				},
				reset: function () {
					var t = this;
					return this.resetVisibleArea().then(function () {
						t.onChange();
					});
				},
				awaitRender: function (t) {
					var e = this;
					this.awaiting ||
						((this.awaiting = !0),
						this.$nextTick(function () {
							t(), (e.awaiting = !1);
						}));
				},
				prepareResult: function (t) {
					return this.roundResult
						? (function (t) {
								var e = t.coordinates,
									i = t.sizeRestrictions,
									n = t.positionRestrictions,
									s = {
										width: Math.round(e.width),
										height: Math.round(e.height),
										left: Math.round(e.left),
										top: Math.round(e.top),
									};
								return (
									s.width > i.maxWidth
										? (s.width = Math.floor(e.width))
										: s.width < i.minWidth && (s.width = Math.ceil(e.width)),
									s.height > i.maxHeight
										? (s.height = Math.floor(e.height))
										: s.height < i.minHeight && (s.height = Math.ceil(e.height)),
									nt(s, n)
								);
						  })(
								e(
									e({}, this.getPublicProperties()),
									{},
									{
										positionRestrictions: bt(this.positionRestrictions, this.visibleArea),
										coordinates: t,
									},
								),
						  )
						: t;
				},
				processAutoZoom: function (t, i, n, s) {
					var o = this.autoZoomAlgorithm;
					o || (o = this.stencilSize ? mt : this.autoZoom ? ft : pt);
					var r = o({
						event: { type: t, params: s },
						visibleArea: i,
						coordinates: n,
						boundaries: this.boundaries,
						aspectRatio: this.getAspectRatio(),
						positionRestrictions: this.positionRestrictions,
						getAreaRestrictions: this.getAreaRestrictions,
						sizeRestrictions: this.sizeRestrictions,
						stencilSize: this.getStencilSize(),
					});
					return e(e({}, r), {}, { changed: !B(r.visibleArea, i) || !B(r.coordinates, n) });
				},
				runAutoZoom: function (t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						i = e.transitions,
						s = void 0 !== i && i,
						o = n(e, Kt),
						r = this.processAutoZoom(t, this.visibleArea, this.coordinates, o),
						a = r.visibleArea,
						h = r.coordinates,
						c = r.changed;
					s && c && this.enableTransitions(),
						(this.visibleArea = a),
						(this.coordinates = h),
						s && c && this.debouncedDisableTransitions();
				},
				normalizeEvent: function (t) {
					return (function (t) {
						var e = t.event,
							i = t.visibleArea,
							n = t.coefficient;
						if ('manipulateImage' === e.type)
							return u(u({}, e), {
								move: {
									left: e.move && e.move.left ? n * e.move.left : 0,
									top: e.move && e.move.top ? n * e.move.top : 0,
								},
								scale: {
									factor: e.scale && e.scale.factor ? e.scale.factor : 1,
									center:
										e.scale && e.scale.center
											? {
													left: e.scale.center.left * n + i.left,
													top: e.scale.center.top * n + i.top,
											  }
											: null,
								},
							});
						if ('resize' === e.type) {
							var s = u(u({}, e), { directions: u({}, e.directions) });
							return (
								j.forEach(function (t) {
									s.directions[t] *= n;
								}),
								s
							);
						}
						if ('move' === e.type) {
							var o = u(u({}, e), { directions: u({}, e.directions) });
							return (
								L.forEach(function (t) {
									o.directions[t] *= n;
								}),
								o
							);
						}
						return e;
					})(e(e({}, this.getPublicProperties()), {}, { event: t }));
				},
				getCanvas: function () {
					if (this.$refs.canvas) {
						var t = this.$refs.canvas,
							i = this.$refs.image,
							n =
								0 !== this.imageTransforms.rotate ||
								this.imageTransforms.flip.horizontal ||
								this.imageTransforms.flip.vertical
									? (function (t, e, i) {
											var n = i.rotate,
												s = i.flip,
												o = { width: e.naturalWidth, height: e.naturalHeight },
												r = tt(o, n),
												a = t.getContext('2d');
											(t.height = r.height), (t.width = r.width), a.save();
											var h = et(Y(u({ left: 0, top: 0 }, o)), n);
											return (
												a.translate(-(h.left - r.width / 2), -(h.top - r.height / 2)),
												a.rotate((n * Math.PI) / 180),
												a.translate(s.horizontal ? o.width : 0, s.vertical ? o.height : 0),
												a.scale(s.horizontal ? -1 : 1, s.vertical ? -1 : 1),
												a.drawImage(e, 0, 0, o.width, o.height),
												a.restore(),
												t
											);
									  })(this.$refs.sourceCanvas, i, this.imageTransforms)
									: i,
							s = e(
								{
									minWidth: 0,
									minHeight: 0,
									maxWidth: 1 / 0,
									maxHeight: 1 / 0,
									maxArea: this.maxCanvasSize,
									imageSmoothingEnabled: !0,
									imageSmoothingQuality: 'high',
									fillColor: 'transparent',
								},
								this.canvas,
							),
							o = function (t) {
								return t.find(function (t) {
									return (e = t), !Number.isNaN(parseFloat(e)) && isFinite(e);
									var e;
								});
							},
							r = lt({
								sizeRestrictions: {
									minWidth: o([s.width, s.minWidth]) || 0,
									minHeight: o([s.height, s.minHeight]) || 0,
									maxWidth: o([s.width, s.maxWidth]) || 1 / 0,
									maxHeight: o([s.height, s.maxHeight]) || 1 / 0,
								},
								width: this.coordinates.width,
								height: this.coordinates.height,
								aspectRatio: {
									minimum: this.coordinates.width / this.coordinates.height,
									maximum: this.coordinates.width / this.coordinates.height,
								},
							});
						if (s.maxArea && r.width * r.height > s.maxArea) {
							var a = Math.sqrt(s.maxArea / (r.width * r.height));
							r = { width: Math.round(a * r.width), height: Math.round(a * r.height) };
						}
						return (
							(function (t, e, i, n, s) {
								(t.width = n ? n.width : i.width), (t.height = n ? n.height : i.height);
								var o = t.getContext('2d');
								o.clearRect(0, 0, t.width, t.height),
									s &&
										(s.imageSmoothingEnabled && (o.imageSmoothingEnabled = s.imageSmoothingEnabled),
										s.imageSmoothingQuality && (o.imageSmoothingQuality = s.imageSmoothingQuality),
										s.fillColor &&
											((o.fillStyle = s.fillColor),
											o.fillRect(0, 0, t.width, t.height),
											o.save())),
									o.drawImage(e, i.left, i.top, i.width, i.height, 0, 0, t.width, t.height);
							})(t, n, this.coordinates, r, s),
							t
						);
					}
				},
				update: function () {
					this.$emit('change', this.getResult());
				},
				applyTransform: function (t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						i = this.visibleArea && e ? ot(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions,
						n =
							this.visibleArea && e
								? bt(this.positionRestrictions, this.visibleArea)
								: this.positionRestrictions;
					return ut({
						transform: t,
						coordinates: this.coordinates,
						imageSize: this.imageSize,
						sizeRestrictions: i,
						positionRestrictions: n,
						aspectRatio: this.getAspectRatio(),
						visibleArea: this.visibleArea,
					});
				},
				resetCoordinates: function () {
					var t = this;
					if (this.$refs.image) {
						this.$refs.cropper, this.$refs.image;
						var i = this.defaultSize;
						i || (i = this.stencilSize ? vt : gt);
						var n = this.sizeRestrictions;
						n.minWidth, n.minHeight, n.maxWidth, n.maxHeight;
						var o = [
							g(i)
								? i({
										boundaries: this.boundaries,
										imageSize: this.imageSize,
										aspectRatio: this.getAspectRatio(),
										sizeRestrictions: this.sizeRestrictions,
										stencilSize: this.getStencilSize(),
										visibleArea: this.visibleArea,
								  })
								: i,
							function (i) {
								var n = i.coordinates;
								return e(
									{},
									g(t.defaultPosition)
										? t.defaultPosition({
												coordinates: n,
												imageSize: t.imageSize,
												visibleArea: t.visibleArea,
										  })
										: t.defaultPosition,
								);
							},
						];
						this.delayedTransforms &&
							o.push.apply(
								o,
								s(
									Array.isArray(this.delayedTransforms)
										? this.delayedTransforms
										: [this.delayedTransforms],
								),
							),
							(this.coordinates = this.applyTransform(o, !0)),
							(this.delayedTransforms = null);
					}
				},
				clearImage: function () {
					var t = this;
					(this.imageLoaded = !1),
						setTimeout(function () {
							var e = t.$refs.stretcher;
							e && ((e.style.height = 'auto'), (e.style.width = 'auto')),
								(t.coordinates = t.defaultCoordinates()),
								(t.boundaries = { width: 0, height: 0 });
						}, this.transitionTime);
				},
				enableTransitions: function () {
					this.transitions && (this.transitionsActive = !0);
				},
				disableTransitions: function () {
					this.transitionsActive = !1;
				},
				updateBoundaries: function () {
					var t = this,
						e = this.$refs.stretcher,
						i = this.$refs.cropper;
					return (
						this.initStretcher({ cropper: i, stretcher: e, imageSize: this.imageSize }),
						this.$nextTick().then(function () {
							var e = { cropper: i, imageSize: t.imageSize };
							if (
								(g(t.defaultBoundaries)
									? (t.boundaries = t.defaultBoundaries(e))
									: 'fit' === t.defaultBoundaries
									? (t.boundaries = (function (t) {
											var e = t.cropper,
												i = t.imageSize,
												n = e.clientHeight,
												s = e.clientWidth,
												o = n,
												r = (i.width * n) / i.height;
											return (
												r > s && ((r = s), (o = (i.height * s) / i.width)),
												{ width: r, height: o }
											);
									  })(e))
									: (t.boundaries = (function (t) {
											var e = t.cropper;
											return { width: e.clientWidth, height: e.clientHeight };
									  })(e)),
								!t.boundaries.width || !t.boundaries.height)
							)
								throw new Error("It's impossible to fit the cropper in the current container");
						})
					);
				},
				resetVisibleArea: function () {
					var t = this;
					return (
						(this.appliedImageTransforms = e(
							e({}, this.defaultImageTransforms),
							{},
							{ flip: e({}, this.defaultImageTransforms.flip) },
						)),
						this.updateBoundaries()
							.then(function () {
								var e, i, n, s, o, r;
								'visible-area' !== t.priority && ((t.visibleArea = null), t.resetCoordinates()),
									(t.visibleArea = g(t.defaultVisibleArea)
										? t.defaultVisibleArea({
												imageSize: t.imageSize,
												boundaries: t.boundaries,
												coordinates: 'visible-area' !== t.priority ? t.coordinates : null,
												getAreaRestrictions: t.getAreaRestrictions,
												stencilSize: t.getStencilSize(),
										  })
										: t.defaultVisibleArea),
									(t.visibleArea =
										((e = {
											visibleArea: t.visibleArea,
											boundaries: t.boundaries,
											getAreaRestrictions: t.getAreaRestrictions,
										}),
										(i = e.visibleArea),
										(n = e.boundaries),
										(s = e.getAreaRestrictions),
										(o = u({}, i)),
										(r = V(n)),
										o.width / o.height !== r && (o.height = o.width / r),
										nt(o, s({ visibleArea: o, type: 'move' })))),
									'visible-area' === t.priority
										? t.resetCoordinates()
										: (t.coordinates = t.fitCoordinates({
												visibleArea: t.visibleArea,
												coordinates: t.coordinates,
												aspectRatio: t.getAspectRatio(),
												positionRestrictions: t.positionRestrictions,
												sizeRestrictions: t.sizeRestrictions,
										  })),
									t.runAutoZoom('resetVisibleArea');
							})
							.catch(function () {
								t.visibleArea = null;
							})
					);
				},
				updateVisibleArea: function () {
					var t = this;
					return this.updateBoundaries()
						.then(function () {
							(t.visibleArea = t.fitVisibleArea({
								imageSize: t.imageSize,
								boundaries: t.boundaries,
								visibleArea: t.visibleArea,
								coordinates: t.coordinates,
								getAreaRestrictions: t.getAreaRestrictions,
							})),
								(t.coordinates = t.fitCoordinates({
									visibleArea: t.visibleArea,
									coordinates: t.coordinates,
									aspectRatio: t.getAspectRatio(),
									positionRestrictions: t.positionRestrictions,
									sizeRestrictions: t.sizeRestrictions,
								})),
								t.runAutoZoom('updateVisibleArea');
						})
						.catch(function () {
							t.visibleArea = null;
						});
				},
				onChange: function () {
					var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					this.$listeners &&
						this.$listeners.change &&
						(t && this.debounce ? this.debouncedUpdate() : this.update());
				},
				onChangeImage: function () {
					var t,
						e = this;
					if (((this.imageLoaded = !1), (this.delayedTransforms = null), this.src)) {
						if (
							(function (t) {
								if (p(t)) return !1;
								var e = window.location,
									i = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(t) || [],
									n = { protocol: i[1] || '', host: i[2] || '', port: i[3] || '' },
									s = function (t) {
										return t.port || ('http' === (t.protocol || e.protocol) ? 80 : 433);
									};
								return !(
									(!n.protocol && !n.host && !n.port) ||
									Boolean(
										n.protocol &&
											n.protocol == e.protocol &&
											n.host &&
											n.host == e.host &&
											n.host &&
											s(n) == s(e),
									)
								);
							})(this.src)
						) {
							var i = v(this.crossOrigin) ? this.canvas : this.crossOrigin;
							!0 === i && (i = 'anonymous'), (this.imageAttributes.crossOrigin = i);
						}
						if (this.checkOrientation) {
							var n =
								((t = this.src),
								new Promise(function (e) {
									Lt(t)
										.then(function (i) {
											var n = _t(i);
											e(
												i
													? { source: t, arrayBuffer: i, orientation: n }
													: { source: t, arrayBuffer: null, orientation: null },
											);
										})
										.catch(function (i) {
											console.warn(i), e({ source: t, arrayBuffer: null, orientation: null });
										});
								}));
							setTimeout(function () {
								n.then(e.onParseImage);
							}, this.transitionTime);
						} else
							setTimeout(function () {
								e.onParseImage({ source: e.src });
							}, this.transitionTime);
					} else this.clearImage();
				},
				onFailLoadImage: function () {
					this.imageAttributes.src && (this.clearImage(), this.$emit('error'));
				},
				onSuccessLoadImage: function () {
					var t = this,
						e = this.$refs.image;
					e &&
						!this.imageLoaded &&
						((this.imageAttributes.height = e.naturalHeight),
						(this.imageAttributes.width = e.naturalWidth),
						(this.imageLoaded = !0),
						this.reset().then(function () {
							t.$emit('ready'), t.onChange(!1);
						}));
				},
				onParseImage: function (t) {
					var i = this,
						n = t.source,
						s = t.arrayBuffer,
						o = t.orientation;
					this.imageAttributes.revoke &&
						this.imageAttributes.src &&
						URL.revokeObjectURL(this.imageAttributes.src),
						(this.imageAttributes.revoke = !1),
						s && o && o > 1
							? f(n) || !p(n)
								? ((this.imageAttributes.src = URL.createObjectURL(new Blob([s]))),
								  (this.imageAttributes.revoke = !0))
								: (this.imageAttributes.src = (function (t) {
										for (var e = [], i = new Uint8Array(t); i.length > 0; ) {
											var n = i.subarray(0, 8192);
											e.push(
												String.fromCharCode.apply(null, Array.from ? Array.from(n) : n.slice()),
											),
												(i = i.subarray(8192));
										}
										return 'data:image/jpeg;base64,' + btoa(e.join(''));
								  })(s))
							: (this.imageAttributes.src = n),
						g(this.defaultTransforms)
							? (this.appliedImageTransforms = Dt(this.defaultTransforms()))
							: b(this.defaultTransforms)
							? (this.appliedImageTransforms = Dt(this.defaultTransforms))
							: (this.appliedImageTransforms = (function (t) {
									var e = Dt({});
									if (t)
										switch (t) {
											case 2:
												e.flip.horizontal = !0;
												break;
											case 3:
												e.rotate = -180;
												break;
											case 4:
												e.flip.vertical = !0;
												break;
											case 5:
												(e.rotate = 90), (e.flip.vertical = !0);
												break;
											case 6:
												e.rotate = 90;
												break;
											case 7:
												(e.rotate = 90), (e.flip.horizontal = !0);
												break;
											case 8:
												e.rotate = -90;
										}
									return e;
							  })(o)),
						(this.defaultImageTransforms = e(
							e({}, this.appliedImageTransforms),
							{},
							{ flip: e({}, this.appliedImageTransforms.flip) },
						)),
						this.$nextTick(function () {
							var t = i.$refs.image;
							t &&
								t.complete &&
								(!(function (t) {
									return Boolean(t.naturalWidth);
								})(t)
									? i.onFailLoadImage()
									: i.onSuccessLoadImage());
						});
				},
				onResizeEnd: function () {
					this.runAutoZoom('resize', { transitions: !0 });
				},
				onMoveEnd: function () {
					this.runAutoZoom('move', { transitions: !0 });
				},
				onMove: function (t) {
					var i = this;
					this.transitionsOptions.enabled ||
						this.awaitRender(function () {
							(i.coordinates = i.moveAlgorithm(
								e(
									e({}, i.getPublicProperties()),
									{},
									{
										positionRestrictions: bt(i.positionRestrictions, i.visibleArea),
										coordinates: i.coordinates,
										event: i.normalizeEvent(t),
									},
								),
							)),
								i.onChange();
						});
				},
				onResize: function (t) {
					var i = this;
					this.transitionsOptions.enabled ||
						(this.stencilSize && !this.autoZoom) ||
						this.awaitRender(function () {
							var n = i.sizeRestrictions,
								s = Math.min(i.coordinates.width, i.coordinates.height, 20 * i.coefficient);
							(i.coordinates = i.resizeAlgorithm(
								e(
									e({}, i.getPublicProperties()),
									{},
									{
										positionRestrictions: bt(i.positionRestrictions, i.visibleArea),
										sizeRestrictions: {
											maxWidth: Math.min(n.maxWidth, i.visibleArea.width),
											maxHeight: Math.min(n.maxHeight, i.visibleArea.height),
											minWidth: Math.max(n.minWidth, s),
											minHeight: Math.max(n.minHeight, s),
										},
										event: i.normalizeEvent(t),
									},
								),
							)),
								i.onChange(),
								(i.ticking = !1);
						});
				},
				onManipulateImage: function (t) {
					var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					if (!this.transitionsOptions.enabled) {
						var n = i.transitions,
							s = void 0 !== n && n,
							o = i.normalize,
							r = void 0 === o || o;
						s && this.enableTransitions();
						var a = wt(
								e(
									e({}, this.getPublicProperties()),
									{},
									{
										event: r ? this.normalizeEvent(t) : t,
										getAreaRestrictions: this.getAreaRestrictions,
										imageRestriction: this.imageRestriction,
										adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil,
									},
								),
							),
							h = a.visibleArea,
							c = a.coordinates;
						(this.visibleArea = h),
							(this.coordinates = c),
							this.runAutoZoom('manipulateImage'),
							this.onChange(),
							s && this.debouncedDisableTransitions();
					}
				},
				onPropsChange: function () {
					(this.coordinates = this.applyTransform(this.coordinates, !0)), this.onChange(!1);
				},
				getAreaRestrictions: function () {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						e = t.visibleArea,
						i = t.type,
						n = void 0 === i ? 'move' : i;
					return this.areaRestrictionsAlgorithm({
						boundaries: this.boundaries,
						imageSize: this.imageSize,
						imageRestriction: this.imageRestriction,
						visibleArea: e,
						type: n,
					});
				},
				getAspectRatio: function (t) {
					var e,
						i,
						n = this.stencilProps,
						s = n.aspectRatio,
						o = n.minAspectRatio,
						r = n.maxAspectRatio;
					if (this.$refs.stencil.aspectRatios) {
						var a = this.$refs.stencil.aspectRatios();
						(e = a.minimum), (i = a.maximum);
					}
					if ((v(e) && (e = v(s) ? o : s), v(i) && (i = v(s) ? r : s), !t && (v(e) || v(i)))) {
						var h = this.getStencilSize(),
							c = h ? V(h) : null;
						v(e) && (e = z(c) ? c : void 0), v(i) && (i = z(c) ? c : void 0);
					}
					return { minimum: e, maximum: i };
				},
				getStencilSize: function () {
					if (this.stencilSize)
						return (
							(t = {
								currentStencilSize: {
									width: this.stencilCoordinates.width,
									height: this.stencilCoordinates.height,
								},
								stencilSize: this.stencilSize,
								boundaries: this.boundaries,
								coefficient: this.coefficient,
								coordinates: this.coordinates,
								aspectRatio: this.getAspectRatio(!0),
							}),
							(e = t.boundaries),
							(i = t.stencilSize),
							(n = t.aspectRatio),
							K(V((s = g(i) ? i({ boundaries: e, aspectRatio: n }) : i)), n) &&
								(s = lt({
									sizeRestrictions: {
										maxWidth: e.width,
										maxHeight: e.height,
										minWidth: 0,
										minHeight: 0,
									},
									width: s.width,
									height: s.height,
									aspectRatio: { minimum: n.minimum, maximum: n.maximum },
								})),
							(s.width > e.width || s.height > e.height) &&
								(s = lt({
									sizeRestrictions: {
										maxWidth: e.width,
										maxHeight: e.height,
										minWidth: 0,
										minHeight: 0,
									},
									width: s.width,
									height: s.height,
									aspectRatio: { minimum: V(s), maximum: V(s) },
								})),
							s
						);
					var t, e, i, n, s;
				},
				getPublicProperties: function () {
					return {
						coefficient: this.coefficient,
						visibleArea: this.visibleArea,
						coordinates: this.coordinates,
						boundaries: this.boundaries,
						sizeRestrictions: this.sizeRestrictions,
						positionRestrictions: this.positionRestrictions,
						aspectRatio: this.getAspectRatio(),
						imageRestriction: this.imageRestriction,
					};
				},
				defaultCoordinates: function () {
					return e({}, _);
				},
				flip: function (t, i) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = n.transitions,
						o = void 0 === s || s;
					if (!this.transitionsActive) {
						o && this.enableTransitions();
						var r = e({}, this.imageTransforms.flip),
							a = zt({
								flip: {
									horizontal: t ? !r.horizontal : r.horizontal,
									vertical: i ? !r.vertical : r.vertical,
								},
								previousFlip: r,
								rotate: this.imageTransforms.rotate,
								visibleArea: this.visibleArea,
								coordinates: this.coordinates,
								imageSize: this.imageSize,
								positionRestrictions: this.positionRestrictions,
								sizeRestrictions: this.sizeRestrictions,
								getAreaRestrictions: this.getAreaRestrictions,
								aspectRatio: this.getAspectRatio(),
							}),
							h = a.visibleArea,
							c = a.coordinates;
						t &&
							(this.appliedImageTransforms.flip.horizontal =
								!this.appliedImageTransforms.flip.horizontal),
							i &&
								(this.appliedImageTransforms.flip.vertical =
									!this.appliedImageTransforms.flip.vertical),
							(this.visibleArea = h),
							(this.coordinates = c),
							this.onChange(),
							o && this.debouncedDisableTransitions();
					}
				},
				rotate: function (t) {
					var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = i.transitions,
						s = void 0 === n || n;
					if (!this.transitionsActive) {
						s && this.enableTransitions();
						var o = e({}, this.imageSize);
						this.appliedImageTransforms.rotate += t;
						var r = yt({
								visibleArea: this.visibleArea,
								coordinates: this.coordinates,
								previousImageSize: o,
								imageSize: this.imageSize,
								angle: t,
								positionRestrictions: this.positionRestrictions,
								sizeRestrictions: this.sizeRestrictions,
								getAreaRestrictions: this.getAreaRestrictions,
								aspectRatio: this.getAspectRatio(),
							}),
							a = r.visibleArea,
							h = r.coordinates,
							c = this.processAutoZoom('rotateImage', a, h);
						(a = c.visibleArea),
							(h = c.coordinates),
							(this.visibleArea = a),
							(this.coordinates = h),
							this.onChange(),
							s && this.debouncedDisableTransitions();
					}
				},
			},
		},
		undefined,
		false,
		undefined,
		!1,
		void 0,
		void 0,
		void 0,
	);
(exports.BackgroundWrapper = kt),
	(exports.BoundingBox = Ht),
	(exports.CircleStencil = Qt),
	(exports.Cropper = te),
	(exports.DragEvent = C),
	(exports.DraggableArea = Pt),
	(exports.DraggableElement = W),
	(exports.HandlerWrapper = O),
	(exports.LineWrapper = H),
	(exports.MoveEvent = M),
	(exports.Preview = Nt),
	(exports.PreviewResult = Ft),
	(exports.RectangleStencil = Vt),
	(exports.ResizeEvent = S),
	(exports.SimpleHandler = Mt),
	(exports.SimpleLine = Wt),
	(exports.StencilPreview = Zt),
	(exports.TransformableImage = Yt);
