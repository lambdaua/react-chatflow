!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define([,],t):"object"==typeof exports?exports.ChatFlow=t(require("react"),require("react-dom")):e.ChatFlow=t(e[void 0],e[void 0])}("undefined"!=typeof self?self:this,function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"../node_modules/chatflow/dist/chatflow.js":function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"../node_modules/classnames/index.js":function(e,t){!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===s)for(var a in r)t.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=n:"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return n}):window.classNames=n}()},"../node_modules/css-loader/index.js??ref--5-1!../node_modules/postcss-loader/lib/index.js??ref--5-2!../node_modules/sass-loader/lib/loader.js!./scss/index.scss":function(e,t,n){(t=e.exports=n("../node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),t.push([e.i,"body>div{margin-bottom:10px}.chatflow--1emhz{position:relative;background:#f0f0f0;border:1px solid #ccc;padding:0 4px 12px;display:flex;flex-flow:column nowrap;font-family:Roboto,sans-serif;box-sizing:border-box;overflow-y:auto}.chatflow--1emhz .chatflow__start-btn--rKa4x{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:20px;display:flex;flex-flow:column nowrap;align-items:center;text-align:center;color:gray;cursor:pointer}.chatflow--1emhz .chatflow__start-btn--rKa4x,.chatflow--1emhz .chatflow__start-btn--rKa4x svg{transition:.2s;transition-property:fill,color}.chatflow--1emhz .chatflow__start-btn--rKa4x svg{width:75px;height:75px;fill:gray;margin-bottom:10px}.chatflow--1emhz .chatflow__start-btn--rKa4x:hover{color:#000}.chatflow--1emhz .chatflow__start-btn--rKa4x:hover svg{fill:#000}.chatflow--1emhz .chatflow__message--26_1f{flex:0 0 auto;position:relative;display:flex;flex-flow:row nowrap;align-items:flex-start;margin-top:10px}.chatflow--1emhz .chatflow__message--26_1f .message__avatar--218Mn{flex:0 0 auto;width:24px;height:24px;border-radius:50%;overflow:hidden}.chatflow--1emhz .chatflow__message--26_1f .message__avatar--218Mn img{width:100%;height:100%;-o-object-fit:cover;font-family:object-fit\\:cover;object-fit:cover}.chatflow--1emhz .chatflow__message--26_1f .message__text--Em0y0{font-size:13px;box-sizing:border-box}.chatflow--1emhz .chatflow__message--26_1f .message__typing-indicator--2m7N7{align-self:center;margin:0 5px}.chatflow--1emhz .chatflow__message--26_1f.message--left--3uiak .message__text--Em0y0,.chatflow--1emhz .chatflow__message--26_1f.message--right--2kZqX .message__text--Em0y0{margin:0 4px;border-radius:15px;box-shadow:0 .5px 0 0 rgba(0,0,0,.2);padding:4px 8px;min-height:24px}.chatflow--1emhz .chatflow__message--26_1f.message--left--3uiak .message__text--Em0y0{border-top-left-radius:4px;background:#fff}.chatflow--1emhz .chatflow__message--26_1f.message--right--2kZqX{justify-content:flex-end}.chatflow--1emhz .chatflow__message--26_1f.message--right--2kZqX .message__text--Em0y0{order:0;border-top-right-radius:4px;background:#418ef7;color:#fff}.chatflow--1emhz .chatflow__message--26_1f.message--right--2kZqX .message__typing-indicator--2m7N7{order:0}.chatflow--1emhz .chatflow__message--26_1f.message--right--2kZqX .message__avatar--218Mn{order:1}.chatflow--1emhz .chatflow__message--26_1f.message--system--3JvPS{align-self:center;text-align:center}",""]),t.locals={chatflow:"chatflow--1emhz","chatflow__start-btn":"chatflow__start-btn--rKa4x",chatflow__message:"chatflow__message--26_1f",message__avatar:"message__avatar--218Mn",message__text:"message__text--Em0y0","message__typing-indicator":"message__typing-indicator--2m7N7","message--left":"message--left--3uiak","message--right":"message--right--2kZqX","message--system":"message--system--3JvPS"}},"../node_modules/css-loader/index.js??ref--5-1!../node_modules/postcss-loader/lib/index.js??ref--5-2!../node_modules/sass-loader/lib/loader.js!./scss/typing-indicator.scss":function(e,t,n){(t=e.exports=n("../node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"@-webkit-keyframes blink--3PaQm{50%{opacity:1}}@keyframes blink--3PaQm{50%{opacity:1}}@-webkit-keyframes bulge--35ZIY{50%{-webkit-transform:scale(1.05);transform:scale(1.05)}}@keyframes bulge--35ZIY{50%{-webkit-transform:scale(1.05);transform:scale(1.05)}}.typing-indicator--1wjxG{background-color:#e6e7ed;will-change:transform;width:auto;border-radius:25px;padding:8px 10px;display:table;position:relative;-webkit-animation:2s infinite ease-out;animation:2s infinite ease-out;-webkit-animation-name:bulge--35ZIY;animation-name:bulge--35ZIY}.typing-indicator--1wjxG span{height:8px;width:8px;float:left;margin:0 1px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4}.typing-indicator--1wjxG span:first-of-type{-webkit-animation:1s infinite .3333s;animation:1s infinite .3333s;-webkit-animation-name:blink--3PaQm;animation-name:blink--3PaQm}.typing-indicator--1wjxG span:nth-of-type(2){-webkit-animation:1s infinite .6666s;animation:1s infinite .6666s;-webkit-animation-name:blink--3PaQm;animation-name:blink--3PaQm}.typing-indicator--1wjxG span:nth-of-type(3){-webkit-animation:1s infinite .9999s;animation:1s infinite .9999s;-webkit-animation-name:blink--3PaQm;animation-name:blink--3PaQm}",""]),t.locals={"typing-indicator":"typing-indicator--1wjxG",bulge:"bulge--35ZIY",blink:"blink--3PaQm"}},"../node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var s=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[o].concat(a).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(o[s]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},"../node_modules/fbjs/lib/emptyFunction.js":function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},"../node_modules/fbjs/lib/invariant.js":function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,s,a,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,r,s,a,i],f=0;(l=new Error(t.replace(/%s/g,function(){return u[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},"../node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,n){"use strict";var o=n("../node_modules/fbjs/lib/emptyFunction.js"),r=n("../node_modules/fbjs/lib/invariant.js"),s=n("../node_modules/prop-types/lib/ReactPropTypesSecret.js");e.exports=function(){function e(e,t,n,o,a,i){i!==s&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},"../node_modules/prop-types/index.js":function(e,t,n){e.exports=n("../node_modules/prop-types/factoryWithThrowingShims.js")()},"../node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"../node_modules/style-loader/lib/addStyles.js":function(e,t,n){var o,r,s={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,f=[],c=n("../node_modules/style-loader/lib/urls.js");function d(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=s[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],t))}else{var i=[];for(a=0;a<o.parts.length;a++)i.push(b(o.parts[a],t));s[o.id]={id:o.id,refs:1,parts:i}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var s=e[r],a=t.base?s[0]+t.base:s[0],i={css:s[1],media:s[2],sourceMap:s[3]};o[a]?o[a].parts.push(i):n.push(o[a]={id:a,parts:[i]})}return n}function m(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function y(e){var t=document.createElement("style");return e.attrs.type="text/css",g(t,e.attrs),m(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,o,r,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var a=u++;n=l||(l=y(t)),o=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",g(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||s)&&(o=c(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}.bind(null,n,t),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),o=function(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(i=s[a.id]).refs--,o.push(i)}for(e&&d(p(e,t),t),r=0;r<o.length;r++){var i;if(0===(i=o[r]).refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete s[i.id]}}}};var _,v=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function w(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}},"../node_modules/style-loader/lib/urls.js":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:o+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},"./assets/svg/play-circle.svg":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("react"),r=n.n(o),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=(e=>{let{styles:t={}}=e,n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["styles"]);return r.a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n),r.a.createElement("path",{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"}))})},"./components/ChatFlow/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("react"),s=d(r),a=d(n("../node_modules/prop-types/index.js")),i=d(n("../node_modules/classnames/index.js")),l=d(n("./types/Message.js")),u=d(n("./components/TypingIndicator/index.js")),f=d(n("./assets/svg/play-circle.svg")),c=d(n("./scss/index.scss"));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a.default.arrayOf(l.default),a.default.number.isRequired,a.default.number.isRequired,a.default.number.isRequired,a.default.object.isRequired,a.default.func.isRequired,a.default.bool.isRequired;var h=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.getAvatar=function(e){switch(e.from){case"bot":return"//picsum.photos/30";case"user":return"//picsum.photos/35"}},m(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.messages,r=n.width,a=n.height,l=n.messagesVisible,d=n.typingAnimation,m=n.isStarted;if(!o)return null;var h=o[l];return o=o.slice(0,l),m?s.default.createElement("div",{className:c.default.chatflow,style:{width:r,height:a}},o.map(function(e,n){var o;return s.default.createElement("div",{key:n,className:(0,i.default)(c.default.chatflow__message,(o={},p(o,c.default["message--left"],"bot"===e.from),p(o,c.default["message--right"],"user"===e.from),p(o,c.default["message--system"],"system"===e.from),o))},"system"!==e.from&&s.default.createElement("div",{className:c.default.message__avatar},s.default.createElement("img",{src:t.getAvatar(e)})),s.default.createElement("div",{className:c.default.message__text},e.message))}),!!h&&"system"!==h.from&&!!d[h.from]&&s.default.createElement("div",{className:(0,i.default)(c.default.chatflow__message,(e={},p(e,c.default["message--left"],"bot"===h.from),p(e,c.default["message--right"],"user"===h.from),p(e,c.default["message--system"],"system"===h.from),e))},s.default.createElement("div",{className:c.default.message__avatar},s.default.createElement("img",{src:this.getAvatar(h)})),s.default.createElement("div",{className:c.default["message__typing-indicator"]},s.default.createElement(u.default,{from:h.from})))):s.default.createElement("div",{className:c.default.chatflow,style:{width:r,height:a}},s.default.createElement("div",{className:c.default["chatflow__start-btn"],onClick:this.props.startChat},s.default.createElement(f.default,null),"Run demo"))}}]),t}();t.default=h},"./components/TypingIndicator/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("react"),s=l(r),a=(l(n("../node_modules/classnames/index.js")),l(n("./types/From.js"))),i=l(n("./scss/typing-indicator.scss"));function l(e){return e&&e.__esModule?e:{default:e}}a.default.isRequired;var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){return s.default.createElement("div",{className:i.default["typing-indicator"]},s.default.createElement("span",null),s.default.createElement("span",null),s.default.createElement("span",null))}}]),t}();t.default=u},"./containers/ChatFlowContainer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("react"),a=c(s),i=n("react-dom"),l=c(n("../node_modules/prop-types/index.js")),u=c(n("./components/ChatFlow/index.js")),f=c(n("./types/Message.js"));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}l.default.arrayOf(f.default),l.default.number,l.default.number,l.default.number,l.default.number,l.default.func,l.default.bool;var p=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={isStarted:!1,messagesVisible:0,typingAnimation:{}},r.replay=function(){if(!r.state.isStarted)return r.startChat();clearTimeout(r.timeout),r.setState({messagesVisible:0,typingAnimation:{}},function(){r.createMessageTimeout(0)})},r.initChatflow=function(e){e&&(r.chatflow=(0,i.findDOMNode)(e),r.props.autoPlay&&r.createMessageTimeout(0))},r.createMessageTimeout=function(e){var t=r.props.messages,n=t[e],o="delay"in n?n.delay:r.props.messageDelay,s="typingDuration"in n?n.typingDuration:r.props.typingDuration,a=function(){r.setTypingAnimation(n.from,!1),r.setState({messagesVisible:r.state.messagesVisible+1}),e<t.length-1&&r.createMessageTimeout(e+1)};o?r.timeout=setTimeout(function(){r.setTypingAnimation(n.from,!0),"system"!==n.from&&s?r.timeout=setTimeout(a,s):a()},o):a()},r.setTypingAnimation=function(e,t){r.setState({typingAnimation:o({},r.state.typingAnimation,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))})},r.startChat=function(){r.setState({isStarted:!0})},d(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),r(t,[{key:"componentDidMount",value:function(){this.props.onInit({start:this.startChat,replay:this.replay})}},{key:"componentDidUpdate",value:function(e,t){t.messagesVisible===this.state.messagesVisible&&t.typingAnimation===this.state.typingAnimation||(this.chatflow.scrollTop=this.chatflow.scrollHeight),!t.isStarted&&this.state.isStarted&&this.createMessageTimeout(0)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.messages,n=e.width,o=e.height,r=this.state,s=r.messagesVisible,i=r.typingAnimation,l=r.isStarted;return a.default.createElement(u.default,{ref:this.initChatflow,messages:t,width:n,height:o,messagesVisible:s,typingAnimation:i,startChat:this.startChat,isStarted:l})}}]),t}();t.default=p,p.defaultProps={width:300,height:300,typingDuration:1e3,messageDelay:1500,onInit:function(){},autoPlay:!1}},"./index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("react")),r=a(n("react-dom")),s=a(n("./containers/ChatFlowContainer.js"));function a(e){return e&&e.__esModule?e:{default:e}}var i=document.createElement("div");document.body.appendChild(i),r.default.render(o.default.createElement(s.default,{messages:[{message:"- Conversation start -",from:"system",delay:0},{message:"Josh, I need your email to register on our service",from:"bot",delay:500,typingDuration:1e3},{message:"sure",from:"user"},{message:"josh@email.com",from:"user"},{message:"thx, Josh",from:"bot"},{message:"and your phone number",from:"bot"},{message:"- Some system message again -",from:"system"},{message:"+47-JOSH-PHONE",from:"user"},{message:"great, thanks a lot",from:"bot"},{message:"have a nice day!",from:"bot"},{message:"have a nice day!",from:"bot"},{message:"have a nice day!",from:"bot"}],onInit:function(e){return window.chatflow=e}}),i),t.default=s.default},"./scss/index.scss":function(e,t,n){var o=n("../node_modules/css-loader/index.js??ref--5-1!../node_modules/postcss-loader/lib/index.js??ref--5-2!../node_modules/sass-loader/lib/loader.js!./scss/index.scss");"string"==typeof o&&(o=[[e.i,o,""]]);n("../node_modules/style-loader/lib/addStyles.js")(o,{hmr:!1,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},"./scss/typing-indicator.scss":function(e,t,n){var o=n("../node_modules/css-loader/index.js??ref--5-1!../node_modules/postcss-loader/lib/index.js??ref--5-2!../node_modules/sass-loader/lib/loader.js!./scss/typing-indicator.scss");"string"==typeof o&&(o=[[e.i,o,""]]);n("../node_modules/style-loader/lib/addStyles.js")(o,{hmr:!1,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},"./types/From.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n("../node_modules/prop-types/index.js"))&&o.__esModule?o:{default:o};t.default=r.default.oneOf(["bot","user","system"])},"./types/Message.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n("../node_modules/prop-types/index.js")),r=s(n("./types/From.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=o.default.shape({from:r.default.isRequired,message:o.default.string.isRequired,avatar:o.default.string,delay:o.default.number,typingDuration:o.default.number})},0:function(e,t,n){e.exports=n("./index.js")},react:function(e,t){e.exports=n("react")},"react-dom":function(e,t){e.exports=n("react-dom")}})},"./index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(n("react")),o(n("react-dom"));function o(e){return e&&e.__esModule?e:{default:e}}var r=n("../node_modules/chatflow/dist/chatflow.js");t.default=r},0:function(e,t,n){e.exports=n("./index.js")},react:function(t,n){t.exports=e},"react-dom":function(e,n){e.exports=t}})});