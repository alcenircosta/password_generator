(()=>{"use strict";var n={122:(n,e,r)=>{r.d(e,{Z:()=>c});var o=r(537),t=r.n(o),a=r(645),i=r.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,':root {\n    --primary-color: rgb(17, 86, 102);\n    --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: "Open sans", sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\n.password-generated {\n    font-size: 2em;\n    color: var(--primary-color);\n    margin: 40px 0;\n}\n\ninput[type="checkbox"] {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    display: block;\n    margin: 40px 0;\n    font-size: 1em;\n}\n',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;IACI,iCAAiC;IACjC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;AAClB",sourcesContent:['@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");\n:root {\n    --primary-color: rgb(17, 86, 102);\n    --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: "Open sans", sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\n.password-generated {\n    font-size: 2em;\n    color: var(--primary-color);\n    margin: 40px 0;\n}\n\ninput[type="checkbox"] {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    display: block;\n    margin: 40px 0;\n    font-size: 1em;\n}\n'],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var u=[].concat(n[A]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),e.push(u))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===n){r=o;break}return r}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=o.base?s[0]+o.base:s[0],u=a[A]||0,p="".concat(A," ").concat(u);a[A]=u+1;var d=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var l=t(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:l,references:1})}i.push(p)}return i}function t(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=o(n,t),A=0;A<a.length;A++){var u=r(a[A]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var o=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,t&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(o){var t=e[o];if(void 0!==t)return t.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var o in e)r.o(e,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=function(n,e){return Math.floor(Math.random()*(e-n)+n)},e="',.><!?/|\"-+/*°{}[]()=^~";function o(r){switch(r){case 1:default:return String.fromCharCode(n(65,91));case 2:return String.fromCharCode(n(97,123));case 3:return String.fromCharCode(n(48,58));case 4:return e[n(0,e.length)]}}var t=document.querySelector(".password-generated"),a=document.querySelector(".quantity"),i=document.querySelector(".uppercase"),c=document.querySelector(".lowercase"),s=document.querySelector(".numbers"),A=document.querySelector(".symbols"),u=document.querySelector(".generate-password"),p=r(379),d=r.n(p),f=r(795),l=r.n(f),m=r(569),g=r.n(m),C=r(565),h=r.n(C),v=r(216),y=r.n(v),b=r(589),I=r.n(b),x=r(122),B={};B.styleTagTransform=I(),B.setAttributes=h(),B.insert=g().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=y(),d()(x.Z,B),x.Z&&x.Z.locals&&x.Z.locals,u.addEventListener("click",(function(){t.innerHTML=function(e,r,t,a,i){if(!(r||t||a||i))return"Nada selecionado!";if(!e>0)return"Digite uma quantidade!";e=Number(e);for(var c=[],s=0;s<e;s++)c.push(o(n(1,5)));return c.join("")}(a.value,i.checked,c.checked,s.checked,A.checked)}))})()})();
//# sourceMappingURL=bundle.js.map