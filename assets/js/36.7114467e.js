(window.webpackJsonp=window.webpackJsonp||[]).push([[36,51],{303:function(t,i,e){},304:function(t,i,e){t.exports=e.p+"assets/img/link.03ea4d17.svg"},305:function(t,i,e){"use strict";e(303)},306:function(t,i,e){"use strict";e.r(i);var a={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},s=(e(305),e(41)),n=Object(s.a)(a,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?i("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[i("img",{attrs:{src:e(304)}})]):this._e()],2)}),[],!1,null,null,null);i.default=n.exports},471:function(t,i,e){},583:function(t,i,e){"use strict";e(471)},648:function(t,i,e){"use strict";e.r(i);var a=e(307),s={components:{ExampleWrapper:e(306).default,Cropper:a.c},data:function(){return{image:"https://images.pexels.com/photos/1988684/pexels-photo-1988684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",limitations:{maxWidth:256}}},methods:{showImage:function(){var t=this.$refs.cropper.getResult().canvas;window.open().document.body.innerHTML='<img src="'.concat(t.toDataURL(),'"></img>')}}},n=(e(583),e(41)),o=Object(n.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("example-wrapper",{staticClass:"resize-result-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/resize-result-example.vue"}},[e("cropper",{ref:"cropper",staticClass:"resize-result-cropper",attrs:{src:t.image,canvas:{maxHeight:t.limitations.maxHeight,maxWidth:t.limitations.maxWidth,minHeight:t.limitations.minHeight,minWidth:t.limitations.minWidth,maxArea:t.limitations.maxArea}}}),t._v(" "),e("div",{staticClass:"panel"},[e("div",{staticClass:"panel__left"},[e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Max width")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.maxWidth,expression:"limitations.maxWidth"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.maxWidth},on:{input:function(i){i.target.composing||t.$set(t.limitations,"maxWidth",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Max height")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.maxHeight,expression:"limitations.maxHeight"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.maxHeight},on:{input:function(i){i.target.composing||t.$set(t.limitations,"maxHeight",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Min width")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.minWidth,expression:"limitations.minWidth"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.minWidth},on:{input:function(i){i.target.composing||t.$set(t.limitations,"minWidth",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Min height")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.minHeight,expression:"limitations.minHeight"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.minHeight},on:{input:function(i){i.target.composing||t.$set(t.limitations,"minHeight",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Max area (width × height)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.maxArea,expression:"limitations.maxArea"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.maxArea},on:{input:function(i){i.target.composing||t.$set(t.limitations,"maxArea",i.target.value)}}})])]),t._v(" "),e("div",{staticClass:"panel__right"},[e("div",{staticClass:"button",on:{click:function(i){return t.showImage()}}},[t._v("Crop")])])])],1)}),[],!1,null,null,null);i.default=o.exports}}]);