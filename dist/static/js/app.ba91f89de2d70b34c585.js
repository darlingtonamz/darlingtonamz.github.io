webpackJsonp([1],{"4+hh":function(e,t){},"6U6t":function(e,t){},I0Lq:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},c,!1,function(e){n("6U6t")},null,null).exports,a=n("/ocq"),s=n("mvHQ"),i=n.n(s),u=n("mtWM"),l=n.n(u),d=n("Zrlr"),v=n.n(d),m=n("wxAW"),f=n.n(m),p=n("a4gv"),h=n.n(p),_=new(function(){function e(){v()(this,e),this.dbPromise=h.a.open("keyval-store",1,function(e){switch(e.oldVersion){case 0:e.createObjectStore("keyval");case 1:e.createObjectStore("conversions")}})}return f()(e,[{key:"addData",value:function(e,t,n){this.dbPromise.then(function(r){var c=r.transaction(e,"readwrite");return c.objectStore(e).put(n,t),c.complete})}},{key:"getData",value:function(e,t){this.dbPromise.then(function(n){return n.transaction(e).objectStore(e).get(t)}).then(function(e){return console.log(e),e})}}]),e}()),y={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",from:1,to:1,fromCurrency:"NGN",toCurrency:"USD",currencies:[]}},watch:{currencies:function(e){this.fromCurrency="NGN",this.toCurrency="USD"},from:function(e){this.convert()},to:function(e){this.convert()},fromCurrency:function(e){this.convert()},toCurrency:function(e){this.convert()}},methods:{getCurrencies:function(){var e=this;localStorage.currencies?this.currencies=JSON.parse(localStorage.currencies):l()({url:"https://free.currencyconverterapi.com/api/v5/currencies",method:"get"}).then(function(t){e.currencies=t.data.results,localStorage.currencies=i()(e.currencies)}).catch(function(e){console.log("couldn't get data",e)})},convert:function(){var e=this,t=this.fromCurrency+"_"+this.toCurrency;_.getData("conversions",t)?this.to=res.data.results[t].val*this.from:l()({url:"https://free.currencyconverterapi.com/api/v5/convert?q="+t,method:"get"}).then(function(n){e.to=n.data.results[t].val*e.from,_.addData("conversions",t,n.data.results[t])}).catch(function(e){})},init:function(){this.getCurrencies(),_.addData("conversions","id","value")}},mounted:function(){this.init()}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("center",[n("md-avatar",{staticClass:"md-large"},[n("img",{attrs:{src:"/static/img/amanze.jpg"}})]),e._v(" "),n("span",{staticClass:"md-display-1"},[e._v("Currency Converter")])],1),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"w600 center"},[n("center",[n("div",{staticClass:"flex"},[n("md-card",[n("md-card-content",[n("div",{},[n("md-field",[n("md-select",{attrs:{placeholder:"from"},model:{value:e.fromCurrency,callback:function(t){e.fromCurrency=t},expression:"fromCurrency"}},e._l(e.currencies,function(t,r){return n("md-option",{key:r,attrs:{value:r}},[e._v(e._s(r)+" ("+e._s(t.currencySymbol)+")")])}))],1),e._v(" "),n("md-field",{attrs:{"md-inline":""}},[n("label",[e._v("Inline")]),e._v(" "),n("md-input",{model:{value:e.from,callback:function(t){e.from=t},expression:"from"}}),e._v(" "),n("span",[e._v(e._s(e.fromCurrency))])],1)],1)])],1),e._v(" "),n("span",[e._v("..")]),e._v(" "),n("md-card",[n("md-card-content",[n("div",{},[n("md-field",[n("md-select",{attrs:{placeholder:"to"},model:{value:e.toCurrency,callback:function(t){e.toCurrency=t},expression:"toCurrency"}},e._l(e.currencies,function(t,r){return n("md-option",{key:r,attrs:{value:r}},[e._v(e._s(r)+" ("+e._s(t.currencySymbol)+")")])}))],1),e._v(" "),n("md-field",{attrs:{"md-inline":""}},[n("label",[e._v("Inline")]),e._v(" "),n("md-input",{model:{value:e.to,callback:function(t){e.to=t},expression:"to"}}),e._v(" "),n("span",[e._v(e._s(e.toCurrency))])],1)],1)])],1)],1)]),e._v(" "),n("br"),e._v(" "),n("div",[n("md-card",[n("md-card-content",[n("div",{staticClass:"md-caption"},[e._v("\n            "+e._s(e.fromCurrency)+" "+e._s(e.from)+"\n          ")]),e._v(" "),n("div",{staticClass:"md-display-1"},[e._v("\n            "+e._s(e.toCurrency)+" "+e._s(e.to)+"\n          ")])])],1)],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(y,C,!1,function(e){n("I0Lq")},null,null).exports;r.default.use(a.a);var b=new a.a({routes:[{path:"/",name:"HelloWorld",component:g}]}),S=n("Lgyv"),k=n.n(S);n("4+hh");r.default.use(k.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:b,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.ba91f89de2d70b34c585.js.map