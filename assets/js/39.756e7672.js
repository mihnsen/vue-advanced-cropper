(window.webpackJsonp=window.webpackJsonp||[]).push([[39,52],{332:function(t,e,r){},372:function(t,e,r){"use strict";r(332)},418:function(t,e,r){},456:function(t,e,r){"use strict";r.r(e);var a={components:{BoundingBox:r(305).a}},i=(r(372),r(41)),n=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("bounding-box",this._g(this._b({staticClass:"dynamic-area",attrs:{"lines-classes":{default:"dynamic-area__line"},"handlers-classes":{default:"dynamic-area__handler"}}},"bounding-box",this.$attrs,!1),this.$listeners),[this._t("default")],2)},[],!1,null,null,null);e.default=n.exports},534:function(t,e,r){"use strict";r(418)},603:function(t,e,r){"use strict";r.r(e);var a=r(349),i=r(305),n=r(396),s=r(330),c=r(358),l=r(456),o=r(359),u=r(350),h=r(351),d=r(360),p=r(352),f=r(353),g={components:{Cropper:i.c,AlgorithmWrapper:c.default,BoundingBox:i.a,DynamicArea:l.default,StaticCropper:o.default,RunButton:d.default,GroupInput:p.default,Group:h.default,ElementsLegend:u.default,Stretcher:f.default},data:function(){return{area:Object(s.d)(),displayStretcher:!1,image:{width:100,height:100}}},mounted:function(){var t=this.$refs.container;t&&(this.area.width=t.clientWidth,this.area.height=t.clientHeight)},computed:{areaStyle:function(){return Object(s.a)(this.area)}},methods:{onResizeArea:function(t){this.area=Object(s.e)(this.area,t,Object(s.c)(this.$refs.container))},runAlgorithm:function(){var t=this,e=this.$refs.stretcher;e&&(this.displayStretcher=!0,this.$nextTick(function(){console.log(e.$el,Object(a.a)({},t.image)),Object(n.d)({stretcher:e.$el,imageSize:t.image})}))}}},m=(r(534),r(41)),b=Object(m.a)(g,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("algorithm-wrapper",{staticClass:"algorithms-init-stretcher",scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{ref:"container",staticClass:"algorithms-init-stretcher__area"},[r("dynamic-area",{style:t.areaStyle,on:{resize:t.onResizeArea}},[r("static-cropper",{staticClass:"algorithms-init-stretcher__cropper"},[r("stretcher",{ref:"stretcher",attrs:{visible:t.displayStretcher}})],1)],1)],1),t._v(" "),r("run-button",{on:{click:t.runAlgorithm}})]},proxy:!0},{key:"panel",fn:function(){return[r("group",{attrs:{label:"Image"}},[r("group-input",{attrs:{type:"number",label:"Width"},model:{value:t.image.width,callback:function(e){t.$set(t.image,"width",e)},expression:"image.width"}}),t._v(" "),r("group-input",{attrs:{type:"number",label:"Height"},model:{value:t.image.height,callback:function(e){t.$set(t.image,"height",e)},expression:"image.height"}})],1),t._v(" "),r("group",[r("elements-legend",{attrs:{stretcher:!0,cropper:!0,area:!0}})],1)]},proxy:!0}])})},[],!1,null,null,null);e.default=b.exports}}]);