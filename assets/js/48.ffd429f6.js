(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{128:function(t,e,i){"use strict";i.r(e);var s=i(15),n={name:"CircleStencil",components:{PreviewResult:s.f,DraggableArea:s.d,DraggableElement:s.e},props:{img:{type:Object},resultCoordinates:{type:Object},stencilCoordinates:{type:Object}},computed:{style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,s=t.left,n=t.top;return{width:"".concat(i,"px"),height:"".concat(e,"px"),left:"".concat(s,"px"),top:"".concat(n,"px")}}},methods:{onMove:function(t){this.$emit("move",t)},onHandlerMove:function(t){var e=t.shift(),i=e.left/2,n=-e.top/2,o=this.resultCoordinates;o.height,o.width,o.left,o.top;this.$emit("resize",new s.h({left:i,right:i,top:n,bottom:n},{compensate:!0}))},aspectRatios:function(){return{minimum:1,maximum:1}}}},o=(i(93),i(1)),c=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle-stencil",style:this.style},[e("DraggableElement",{staticClass:"circle-stencil__handler",on:{drag:this.onHandlerMove}},[e("img",{staticClass:"circle-stencil__icon",attrs:{src:i(90),alt:""}})]),this._v(" "),e("DraggableArea",{on:{move:this.onMove}},[e("PreviewResult",{staticClass:"circle-stencil__preview",attrs:{img:this.img,"result-coordinates":this.resultCoordinates,"stencil-coordinates":this.stencilCoordinates}})],1)],1)},[],!1,null,null,null);e.default=c.exports},39:function(t,e,i){},90:function(t,e,i){t.exports=i.p+"assets/img/handler.d2843e4e.svg"},93:function(t,e,i){"use strict";var s=i(39);i.n(s).a}}]);