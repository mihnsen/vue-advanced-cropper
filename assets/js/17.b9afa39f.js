(window.webpackJsonp=window.webpackJsonp||[]).push([[17,51,53],{303:function(t,e,n){},304:function(t,e,n){t.exports=n.p+"assets/img/link.03ea4d17.svg"},305:function(t,e,n){"use strict";n(303)},306:function(t,e,n){"use strict";n.r(e);var s={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},i=(n(305),n(41)),o=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?e("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[e("img",{attrs:{src:n(304)}})]):this._e()],2)}),[],!1,null,null,null);e.default=o.exports},316:function(t,e,n){},327:function(t,e,n){t.exports=n.p+"assets/img/handler.d2843e4e.svg"},328:function(t,e,n){"use strict";n(316)},331:function(t,e,n){"use strict";n.r(e);n(163);var s=n(307),i={components:{StencilPreview:s.i,DraggableArea:s.d,DraggableElement:s.e},props:{image:{type:Object},coordinates:{type:Object},transitions:{type:Object},stencilCoordinates:{type:Object}},computed:{style:function(){var t=this.stencilCoordinates,e=t.height,n=t.width,s=t.left,i=t.top,o={width:"".concat(n,"px"),height:"".concat(e,"px"),transform:"translate(".concat(s,"px, ").concat(i,"px)")};return this.transitions&&this.transitions.enabled&&(o.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),o}},methods:{onMove:function(t){this.$emit("move",t)},onMoveEnd:function(){this.$emit("move-end")},onResize:function(t){var e=t.shift(),n=e.left,i=-e.top;this.$emit("resize",new s.h({left:n,right:n,top:i,bottom:i},{compensate:!0}))},onResizeEnd:function(){this.$emit("resize-end")},aspectRatios:function(){return{minimum:1,maximum:1}}}},o=(n(328),n(41)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-stencil",style:t.style},[s("draggable-element",{staticClass:"circle-stencil__handler",on:{drag:t.onResize,"drag-end":t.onResizeEnd}},[s("img",{attrs:{src:n(327)},on:{mousedown:function(t){t.preventDefault()}}})]),t._v(" "),s("draggable-area",{on:{move:t.onMove,"move-end":t.onMoveEnd}},[s("stencil-preview",{staticClass:"circle-stencil__preview",attrs:{image:t.image,coordinates:t.coordinates,width:t.stencilCoordinates.width,height:t.stencilCoordinates.height,transitions:t.transitions}})],1)],1)}),[],!1,null,null,null);e.default=r.exports},620:function(t,e,n){"use strict";n.r(e);var s=n(331),i=n(306),o=n(307),r={components:{ExampleWrapper:i.default,Cropper:o.c},data:function(){return{img:"https://images.pexels.com/photos/1451124/pexels-photo-1451124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",stencil:s.default}}},a=n(41),c=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("example-wrapper",{attrs:{href:"https://codesandbox.io/s/vue-advanced-cropper-custom-stencil-omseq?file=/src/Stencil.vue"}},[e("cropper",{attrs:{src:this.img,"stencil-component":this.stencil}})],1)}),[],!1,null,null,null);e.default=c.exports}}]);