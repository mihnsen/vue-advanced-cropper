(window.webpackJsonp=window.webpackJsonp||[]).push([[8,37,51],{11:function(t,e,i){},12:function(t,e,i){"use strict";var n=i(11);i.n(n).a},14:function(t,e,i){"use strict";i.r(e);i(12);var n=i(1),o=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"example-wrapper"},[this._t("default")],2)},[],!1,null,null,null);e.default=o.exports},156:function(t,e,i){},215:function(t,e,i){var n=i(67),o=i(27),r=i(77);t.exports=function(t,e){var i=(o.Object||{})[t]||Object[t],s={};s[t]=e(i),n(n.S+n.F*r(function(){i(1)}),"Object",s)}},345:function(t,e,i){t.exports=i(346)},346:function(t,e,i){i(347);var n=i(27).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},347:function(t,e,i){var n=i(54),o=i(211).f;i(215)("getOwnPropertyDescriptor",function(){return function(t,e){return o(n(t),e)}})},348:function(t,e,i){t.exports=i(349)},349:function(t,e,i){i(208),t.exports=i(27).Object.getOwnPropertySymbols},350:function(t,e,i){t.exports=i(351)},351:function(t,e,i){i(352),t.exports=i(27).Object.keys},352:function(t,e,i){var n=i(92),o=i(90);i(215)("keys",function(){return function(t){return o(n(t))}})},353:function(t,e,i){t.exports=i(354)},354:function(t,e,i){i(355);var n=i(27).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},355:function(t,e,i){var n=i(67);n(n.S+n.F*!i(52),"Object",{defineProperty:i(47).f})},356:function(t,e,i){"use strict";var n=i(156);i.n(n).a},378:function(t,e,i){"use strict";i.r(e);var n=i(345),o=i.n(n),r=i(348),s=i.n(r),a=i(350),c=i.n(a),h=i(353),u=i.n(h);function f(t,e,i){return e in t?u()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=i(13),p=i(96),d={components:{ExampleWrapper:i(14).default,BoundingBox:l.a,Cropper:l.c,SimplestStencil:p.default},data:function(){return{img:"https://images.unsplash.com/photo-1553301208-a3718cc0150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",width:0,height:0,left:0,top:0}},methods:{boundaries:function(t){var e=t.cropper;return{width:e.clientWidth,height:e.clientHeight}},updateCoordinates:function(t,e){var i=this.$refs.container;i&&(this.width=Math.min(Math.max(0,t),i.clientWidth),this.height=Math.min(Math.max(0,e),i.clientHeight),this.left=i.clientWidth/2-this.width/2,this.top=i.clientHeight/2-this.height/2,this.$refs.cropper.refresh())},refresh:function(){this.updateCoordinates(this.width,this.height)},onResize:function(t){if(this.$refs.container){var e=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=c()(i);"function"==typeof s.a&&(n=n.concat(s()(i).filter(function(t){return o()(i,t).enumerable}))),n.forEach(function(e){f(t,e,i[e])})}return t}({},t.directions);e.left&&(e.right=e.left),e.right&&(e.left=e.right),e.top&&(e.bottom=e.top),e.bottom&&(e.top=e.bottom);var i=this.width+e.left+e.right,n=this.height+e.top+e.bottom;this.updateCoordinates(i,n)}}},mounted:function(){var t=this.$refs.container;t&&this.updateCoordinates(t.clientWidth,t.clientHeight,0,0),window.addEventListener("resize",this.refresh),window.addEventListener("orientationchange",this.refresh)},destroyed:function(){window.removeEventListener("resize",this.refresh),window.removeEventListener("orientationchange",this.refresh)},computed:{boxStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),left:"".concat(this.left,"px"),top:"".concat(this.top,"px")}}}},m=(i(356),i(1)),v=Object(m.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("example-wrapper",{staticClass:"refresh-example"},[e("div",{ref:"container",staticClass:"container"},[e("bounding-box",{staticClass:"box",style:this.boxStyle,attrs:{"lines-classes":{default:"line"},"handlers-classes":{default:"handler"}},on:{resize:this.onResize}},[e("cropper",{ref:"cropper",staticClass:"cropper",attrs:{src:this.img,"stencil-props":{aspectRatio:1},"default-boundaries":this.boundaries}})],1)],1)])},[],!1,null,null,null);e.default=v.exports},96:function(t,e,i){"use strict";i.r(e);var n=i(13),o={components:{PreviewResult:n.f,BoundingBox:n.a,DraggableArea:n.d},props:["img","stencilCoordinates","aspectRatio","minAspectRatio","maxAspectRatio"],computed:{style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,n=t.left,o=t.top;return{position:"absolute",width:"".concat(i,"px"),height:"".concat(e,"px"),left:"".concat(n,"px"),top:"".concat(o,"px")}}},methods:{onMove:function(t){this.$emit("move",t)},onResize:function(t){this.$emit("resize",t)},aspectRatios:function(){return{minimum:this.aspectRatio||this.minAspectRatio,maximum:this.aspectRatio||this.maxAspectRatio}}}},r=i(1),s=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.style},[e("BoundingBox",{on:{resize:this.onResize}},[e("DraggableArea",{on:{move:this.onMove}},[e("PreviewResult",{attrs:{img:this.img,"stencil-coordinates":this.stencilCoordinates}})],1)],1)],1)},[],!1,null,null,null);e.default=s.exports}}]);