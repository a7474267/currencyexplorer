(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/currencyexplorer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0554":function(e,t,n){var r=n("96a4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("8de89716",r,!0,{sourceMap:!1,shadowMode:!1})},"51fd":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'.container .searchBox{margin:0 auto;width:340px;padding-top:10px;padding-bottom:10px;text-align:center}.container .searchBox .button{margin-left:10px;cursor:pointer;display:inline-block;text-align:center;vertical-align:middle;padding:5px;border:1px solid #a12727;border-radius:8px;background:#753f3f;background:linear-gradient(180deg,#753f3f,#c44747);box-shadow:0 0 40px 0 #ff5959;text-shadow:#591717 1px 1px 1px;font:normal normal 700 15px arial;color:#fff;text-decoration:none}.container .searchBox .button:focus,.container .searchBox .button:hover{background:#8c4c4c;background:linear-gradient(180deg,#8c4c4c,#eb5555);color:#fff;text-decoration:none}.container .searchBox .button:active{background:#462626;background:linear-gradient(180deg,#462626,#c44747)}.container .searchBox .button:before{content:"\\0000a0";display:inline-block;height:24px;width:24px;line-height:24px;margin:0 4px -6px -4px;position:relative;top:0;left:0;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEyUlEQVRIia2VWWxUVRjHf3eZdtpO22mBllLoxmJlqYQoYGgCQRQTECsEeYFEARMNlAhqDMENH/TBGE0gMUaECIlRHwgoS9WoUJo2NlBDF1onZeje6Uw7nX3mTu/c48O9YG3ApAlf8uXmnnvO//8t/3M/hWlazQIKquew6tFcZsgpYiMaieli/K9dfb3wlBi+JoT7oghc/VhrO/78tR92pO8usmN/KAS/HJjzvYgOCBHuFyIyIETMI8RQvXCfeKHz8/VUT90vT5tBGJAMgBaExDjEfJDmpHzrR5V73//gtzPbM3dP3q5On0CAFoKUAYi7iwBkLdyQtm2/8WUg/KGnto5LAMp08Xc9JrbPd0aWoI1Cei4YE6AnQI+DHsfmnCfPzY48/WfT3yf7o8SVqpk41hazoMPP2KSQHmhbyie2Z/lal0Q66pHddaTl54M9zyRIxUGPkT27JGt2oDH1bUvid+V4jXTgyOFd5/aunbXnpRXyyo0lodxkTES7/Izfj7C6lLU5dpbaVGyJhEbK3UxmUTGoGRaBpVrNO+/E5f4vpDPbOLrzwL73cJSaeMkAEz630d/f2xMaHmh0uwd/PtksGi9247Y48iWJssoZVL7yOC9vWsj6ueVFcmb1q2Ck7oWUHGlnY+3ZZWpcI8W4G2QHYABgyyuRK/LLKlhuVCxPBXdufrHPGBga6o74hhvaXb5fv2qg4UovLYfquNQf5N23czyHMrV+kDJMAkOQZldZMIsStd2HSwT6kLJLTAkKARIgC9MlSJsxR64oKF6EZCyqWh/avXWHx2i50Va35mho02dNHH12mVj3jDG2AinLjNEAxpqRFFS1cYCu6JgPR8G4maIEKMLUlxDWTbHylsx3u+yX08bClZgyD8m5GV0o2gr0pAnu7wStB0kGtcPDgNcfCjgSY04QoP5X22BlJARIAjHswts0QiiKDhjvPMXilasLt2AETckGu0HzgwQTExhqPEVgNJjoqwh0OsmaCZL8L6g0CVykSN3uwdMSY0gjdPomn5zYxfqazXmncgrtDjS3eavRIR1iXhgKM6oC+ngMN4mhKgwPZGRBRibINpClSeVJQaFE1nIbxojwH1ktvzW/PG2RrEzAhMvsXxpmaTXovUOgqR+3CuAJcwuFGhQDCIMeNmsvySDLoEiAhJItcDph1RJRhpgAkTT5JauxuvlMtEOrl/pQwsyA1hFumvqc6oblVjsVTGLZAhWWG0DK/K63wdAg+ulWjgGGCnD1Dq64Bhk5FogNSFqHHdaaOoVkKkES9Gbw3oYLvZy+dIt6rCO0DTHgjRAoLcKJCgTBfwMMA/LKQFkGFGDWWJ7kmPXmDkQaYFyDa16uHPyRw1aIJkEyRcAXpK9UxSmGwdcJgwYRRUKN9mDPvA2OYkh/BOTZgN2stz4KcRcE+yApMC70cPaN8xw0DLwW/b15oAfH6DY6qPL6wK3jefMyr/mjxGrXUPtkMesK/TiUZrDZQVFNBaNDJIlxw8+tr69z7Kc2vgNCTLJ7A2cwTvtIgK1/RWnfd449PaNcB4z9Z2nItrP4uaVsWFnCE7McFNgU1HCSgMuH63wbf3QN0wiMcvdndj/bUsXqT2v4JjOdigduMovjAHKATKY5EWXMNj5U+wcb0TIr9nRDzwAAAABJRU5ErkJggg==") no-repeat 0 transparent;background-size:100% 100%}.container ul{width:200px;margin:0 auto;display:flex;flex-direction:column}.container li{display:inline-block;border-bottom:1px dashed #000;padding:10px}.container .countryBox,.container .ipBox{text-align:center}',""]),e.exports=t},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home")],1)},c=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"searchBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currencyCode,expression:"currencyCode"}],attrs:{type:"text",placeholder:"請輸入想查詢的貨幣代碼"},domProps:{value:e.currencyCode},on:{input:function(t){t.target.composing||(e.currencyCode=t.target.value)}}}),n("button",{staticClass:"button",on:{click:e.checkRate}},[e._v("查詢")])]),n("p",{staticClass:"ipBox"},[e._v(" 您的IP位置是:"),n("span",[e._v(e._s(e.ip))])]),n("p",{staticClass:"countryBox"},[e._v(" 您來自: "),n("span",[e._v(e._s(e.city)+","+e._s(e.country))])]),n("ul",[n("li",[e._v("貨幣種類")]),e._l(e.currencyData,(function(t){return n("li",{key:t.currencyCode},[n("flag",{attrs:{iso:t.currencyCode.slice(0,2)}}),e._v(" "+e._s(t.currencyCode)+" "+e._s(t.currencyRate)+" ")],1)}))],2)])},i=[],u=(n("99af"),n("b64b"),n("07ac"),n("d3b7"),n("159b"),n("d61f")),s={data:function(){return{currencyBaseUrl:"https://v6.exchangerate-api.com/v6/",ipBaseUrl:"https://ipgeolocation.abstractapi.com/v1/?api_key=430b6272b56648d59bfe881036789619",currencyData:[],currencyCode:"",currencyCodes:[],ip:"",country:"",city:""}},methods:{getCurrencyData:function(e){var t=this;this.axios.get("".concat(this.currencyBaseUrl).concat("ba9d9846ed118c4063202124","/latest/").concat(e)).then((function(e){var n=[Object.keys(e.data.conversion_rates),Object.values(e.data.conversion_rates)],r=n[0],o=n[1];t.currencyCodes=r,r.forEach((function(e,n){t.currencyData.push({currencyCode:r[n],currencyRate:o[n]})}))}))},getCurrencyCode:function(){var e=this;this.axios.get("".concat(this.ipBaseUrl)).then((function(t){console.log(t),e.currencyCode=t.data.currency.currency_code,e.ip=t.data.ip_address,e.country=t.data.country,e.city=t.data.city})).then((function(){e.getCurrencyData(e.currencyCode)}))},checkRate:function(){this.checkCurrencyInput()&&(this.currencyData=[],this.getCurrencyData(this.currencyCode))},checkCurrencyInput:function(){return console.log(this.currencyCodes.indexOf(this.currencyCode)),3!==this.currencyCode.length?(alert("請輸入三碼的貨幣代碼!"),!1):-1!==this.currencyCodes.indexOf(this.currencyCode)||(alert("請輸入正確的貨幣代碼!(需大寫)"),!1)}},created:function(){this.getCurrencyCode()}},l=s,d=(n("dbc2"),n("2877")),p=Object(d["a"])(l,a,i,!1,null,null,null),f=p.exports,g={name:"App",components:{Home:f}},y=g,h=(n("5c0b"),Object(d["a"])(y,o,c,!1,null,null,null)),b=h.exports,x=n("bc3a"),v=n.n(x),A=n("130e");r["a"].config.productionTip=!1,r["a"].use(A["a"],v.a),r["a"].use(u["a"]),new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("0554")},"96a4":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"li{list-style:none}",""]),e.exports=t},dbc2:function(e,t,n){"use strict";n("f86d")},f86d:function(e,t,n){var r=n("51fd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("aa837dee",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.7d45b1a3.js.map