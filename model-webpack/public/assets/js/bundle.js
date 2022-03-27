(()=>{"use strict";var n,t,e,o,r,a,s,i,c,p,u,d,l,f,A={122:(n,t,e)=>{e.d(t,{Z:()=>i});var o=e(537),r=e.n(o),a=e(645),s=e.n(a)()(r());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700;800&display=swap);"]),s.push([n.id,":root{\n    --dark-mode: #606060;\n    --light-mode: #fff;\n    --buttons: #404040;\n    --buttons-hover: #303030;\n    --box-shadow: #404040;\n    --action-on: #00FF00;\n    --action-error: rgb(221, 71, 71);\n}\n*\n{\n    box-sizing: border-box;\n    outline: 0;\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins', sans-serif;\n}\nbody{\n   background: var(--dark-mode);\n}\n.container{\n    max-width: 600px;\n    margin: 9% auto;\n    background: var(--light-mode);\n    padding: 20px;\n    box-shadow: 10px 10px 10px var(--box-shadow);\n    border-radius: 10px;\n}\n\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;IACxB,qBAAqB;IACrB,oBAAoB;IACpB,gCAAgC;AACpC;AACA;;IAEI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,UAAU;IACV,kCAAkC;AACtC;AACA;GACG,4BAA4B;AAC/B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,6BAA6B;IAC7B,aAAa;IACb,4CAA4C;IAC5C,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700;800&display=swap');\n\n:root{\n    --dark-mode: #606060;\n    --light-mode: #fff;\n    --buttons: #404040;\n    --buttons-hover: #303030;\n    --box-shadow: #404040;\n    --action-on: #00FF00;\n    --action-error: rgb(221, 71, 71);\n}\n*\n{\n    box-sizing: border-box;\n    outline: 0;\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins', sans-serif;\n}\nbody{\n   background: var(--dark-mode);\n}\n.container{\n    max-width: 600px;\n    margin: 9% auto;\n    background: var(--light-mode);\n    padding: 20px;\n    box-shadow: 10px 10px 10px var(--box-shadow);\n    border-radius: 10px;\n}\n\n"],sourceRoot:""}]);const i=s},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);o&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),s=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(s).concat([a]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],p=o.base?c[0]+o.base:c[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var l=e(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var A=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:d,updater:A,references:1})}s.push(d)}return s}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);t[i].references--}for(var c=o(n,r),p=0;p<a.length;p++){var u=e(a[p]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},m={};function v(n){var t=m[n];if(void 0!==t)return t.exports;var e=m[n]={id:n,exports:{}};return A[n](e,e.exports,v),e.exports}v.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return v.d(t,{a:t}),t},v.d=(n,t)=>{for(var e in t)v.o(t,e)&&!v.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},v.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),n=v(379),t=v.n(n),e=v(795),o=v.n(e),r=v(569),a=v.n(r),s=v(565),i=v.n(s),c=v(216),p=v.n(c),u=v(589),d=v.n(u),l=v(122),(f={}).styleTagTransform=d(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),t()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals})();
//# sourceMappingURL=bundle.js.map