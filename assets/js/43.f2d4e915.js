(window.webpackJsonp=window.webpackJsonp||[]).push([[43,58],{345:function(t,e,r){},381:function(t,e,r){"use strict";r(345)},446:function(t,e,r){},487:function(t,e,r){"use strict";r.r(e);var a={components:{BoundingBox:r(307).a}},i=(r(381),r(41)),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("bounding-box",this._g(this._b({staticClass:"dynamic-area",attrs:{"lines-classes":{default:"dynamic-area__line"},"handlers-classes":{default:"dynamic-area__handler"}}},"bounding-box",this.$attrs,!1),this.$listeners),[this._t("default")],2)}),[],!1,null,null,null);e.default=n.exports},542:function(t,e,r){"use strict";r(446)},619:function(t,e,r){"use strict";r.r(e);var a=r(330),i=r(307),n=r(399),s=r(334),c=r(360),l=r(487),o=r(361),u=r(354),h=r(355),d=r(363),p=r(356),f=r(358),g={components:{Cropper:i.c,AlgorithmWrapper:c.default,BoundingBox:i.a,DynamicArea:l.default,StaticCropper:o.default,RunButton:d.default,GroupInput:p.default,Group:h.default,ElementsLegend:u.default,Stretcher:f.default},data:function(){return{area:Object(s.d)(),displayStretcher:!1,image:{width:100,height:100}}},mounted:function(){var t=this.$refs.container;t&&(this.area.width=t.clientWidth,this.area.height=t.clientHeight)},computed:{areaStyle:function(){return Object(s.a)(this.area)}},methods:{onResizeArea:function(t){this.area=Object(s.e)(this.area,t,Object(s.c)(this.$refs.container))},runAlgorithm:function(){var t=this,e=this.$refs.stretcher;e&&(this.displayStretcher=!0,this.$nextTick((function(){console.log(e.$el,Object(a.a)({},t.image)),Object(n.d)({stretcher:e.$el,imageSize:t.image})})))}}},m=(r(542),r(41)),b=Object(m.a)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("algorithm-wrapper",{staticClass:"algorithms-init-stretcher",scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{ref:"container",staticClass:"algorithms-init-stretcher__area"},[r("dynamic-area",{style:t.areaStyle,on:{resize:t.onResizeArea}},[r("static-cropper",{staticClass:"algorithms-init-stretcher__cropper"},[r("stretcher",{ref:"stretcher",attrs:{visible:t.displayStretcher}})],1)],1)],1),t._v(" "),r("run-button",{on:{click:t.runAlgorithm}})]},proxy:!0},{key:"panel",fn:function(){return[r("group",{attrs:{label:"Image"}},[r("group-input",{attrs:{type:"number",label:"Width"},model:{value:t.image.width,callback:function(e){t.$set(t.image,"width",e)},expression:"image.width"}}),t._v(" "),r("group-input",{attrs:{type:"number",label:"Height"},model:{value:t.image.height,callback:function(e){t.$set(t.image,"height",e)},expression:"image.height"}})],1),t._v(" "),r("group",[r("elements-legend",{attrs:{stretcher:!0,cropper:!0,area:!0}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=b.exports}}]);