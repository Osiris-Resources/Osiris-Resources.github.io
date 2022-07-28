/*! For license information please see component---src-pages-index-js-582002d7bf3a6e882509.js.LICENSE.txt */
(self.webpackChunkosiris_resources=self.webpackChunkosiris_resources||[]).push([[678],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!a(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",l),f}}},8241:function(e,t){"use strict";var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case l:case i:case p:case m:return e;default:switch(e=e&&e.$$typeof){case u:case s:case f:case v:case d:case c:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.isForwardRef=function(e){return h(e)===f}},6443:function(e,t,n){"use strict";e.exports=n(8241)},6328:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ut}});var r=n(7294),o=n(1597),a=n.p+"static/Osiris_Resources_Logo-dbd43d7d75a565e54d00284bf7349355.svg",i=n(4694),l=n(5697),c=n.n(l);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var h=["style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=y(t.slice(0,r)),a=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[o]=a,e}),{})}var g=!1;try{g=!0}catch(ft){}function w(e){return e&&"object"===f(e)&&e.prefix&&e.iconName&&e.icon?e:i.parse.icon?i.parse.icon(e):null===e?null:e&&"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}var T=r.forwardRef((function(e,t){var n=e.icon,r=e.mask,o=e.symbol,a=e.className,l=e.title,c=e.titleId,s=e.maskId,f=w(n),m=E("classes",[].concat(d(function(e){var t,n=e.beat,r=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,l=e.flash,c=e.spin,s=e.spinPulse,u=e.spinReverse,f=e.pulse,m=e.fixedWidth,d=e.inverse,v=e.border,y=e.listItem,h=e.flip,b=e.size,g=e.rotation,w=e.pull,E=(p(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":s,"fa-pulse":f,"fa-fw":m,"fa-inverse":d,"fa-border":v,"fa-li":y,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(b),null!=b),p(t,"fa-rotate-".concat(g),null!=g&&0!==g),p(t,"fa-pull-".concat(w),null!=w),p(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map((function(e){return E[e]?e:null})).filter((function(e){return e}))}(e)),d(a.split(" ")))),v=E("transform","string"==typeof e.transform?i.parse.transform(e.transform):e.transform),y=E("mask",w(r)),h=(0,i.icon)(f,u(u(u(u({},m),v),y),{},{symbol:o,title:l,titleId:c,maskId:s}));if(!h)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var b=h.abstract,O={ref:t};return Object.keys(e).forEach((function(t){T.defaultProps.hasOwnProperty(t)||(O[t]=e[t])})),N(b[0],O)}));T.displayName="FontAwesomeIcon",T.propTypes={beat:c().bool,border:c().bool,beatFade:c().bool,bounce:c().bool,className:c().string,fade:c().bool,flash:c().bool,mask:c().oneOfType([c().object,c().array,c().string]),maskId:c().string,fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf([!0,!1,"horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),shake:c().bool,size:c().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,spinPulse:c().bool,spinReverse:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,titleId:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool},T.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var O,S,A,k,N=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=b(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[y(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,c=m(r,h);return a.attrs.style=u(u({},a.attrs.style),l),t.apply(void 0,[n.tag,u(u({},a.attrs),c)].concat(d(o)))}.bind(null,r.createElement),x=n(7190),C=n(8014),P=function(e){var t=e.simpleNav,n=e.isHero,i=(0,r.useState)(!1),l=i[0],c=i[1];return r.createElement(r.Fragment,null,r.createElement("nav",{className:"navbar fixed-top navbar-expand-xl navbar-dark "+(n?"menu-scrolling-hero":"menu-scrolling-content")},r.createElement("div",{className:"me-auto tog-container"},r.createElement(o.Link,{className:"navbar-brand",to:"/"},r.createElement("img",{src:a,alt:"Osiris Resources Logo"})),r.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(e){return function(e,t,n){e.preventDefault(),t(!n)}(e,c,l)},"data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"}))),r.createElement("div",{className:"collapse navbar-collapse nav-collapse "+(l?"show":""),id:"navbarCollapse"},t?r.createElement("ul",{className:"navbar-nav ms-auto"},r.createElement("li",{className:"nav-item"},r.createElement(o.Link,{className:"nav-link",to:"/"},"Home"))):r.createElement("ul",{className:"navbar-nav ms-auto"},r.createElement("li",{className:"nav-item"},r.createElement(o.Link,{className:"nav-link",to:"/about"},"About Us")),r.createElement("li",{className:"nav-item"},r.createElement(o.Link,{className:"nav-link",to:"/services"},"Services")),r.createElement("li",{className:"nav-item"},r.createElement(o.Link,{className:"nav-link",to:"/platform"},"Platform")),r.createElement("li",{className:"nav-item"},r.createElement(o.Link,{className:"nav-link",to:"/contact"},"Contact Us")),r.createElement("li",{className:"nav-item nav-only"},r.createElement("a",{className:"nav-link",href:"tel:+441179410523"},r.createElement(T,{icon:C.yeU})," +44 (0) 117 941 0523")),r.createElement("li",{className:"nav-item nav-only"},r.createElement("a",{className:"nav-link",href:"tel:+441179410523"},r.createElement(T,{icon:C.yeU})," +44 (0) 117 941 0523")),r.createElement("li",{className:"nav-item nav-only"},r.createElement("a",{className:"nav-link",href:"tel:+441179410523"},r.createElement(T,{icon:C.Z_X})," +44 (0) 117 941 0523")),r.createElement("li",{className:"nav-item nav-only"},r.createElement("div",{className:"nav-social"},r.createElement("a",{href:"/"},r.createElement(T,{icon:x.pZl})),r.createElement("a",{href:"/"},r.createElement(T,{icon:x.D9H})),r.createElement("a",{href:"/"},r.createElement(T,{icon:x.sd1}))))))),r.createElement("nav",{className:"navbar fixed-top navbar-expand-xl navbar-dark "+(n?"top-menu-scrolling-hero":"top-menu-scrolling-content")},r.createElement("div",{className:"me-auto tog-container"},r.createElement("div",{className:"nav-social"},r.createElement("a",{href:"/"},r.createElement(T,{icon:x.pZl})),r.createElement("a",{href:"/"},r.createElement(T,{icon:x.D9H})),r.createElement("a",{href:"/"},r.createElement(T,{icon:x.sd1})))),r.createElement("div",null,r.createElement("ul",{className:"navbar-nav ms-auto nav-contact"},r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"tel:+441179410523"},r.createElement(T,{icon:C.yeU})," +44 (0) 117 941 0523")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"tel:+441179410523"},r.createElement(T,{icon:C.yeU})," +44 (0) 117 941 0523")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"tel:+441179410523"},r.createElement(T,{icon:C.Z_X})," +44 (0) 117 941 0523"))))))},j=function(){return r.createElement("footer",null,r.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Osiris Resources. All Rights Reserved."),r.createElement(o.Link,{to:"/privacy"},"Privacy Policy"))},L=n(4839),_=n.n(L),I=n(2993),B=n.n(I),R=n(6494),H=n.n(R),M="bodyAttributes",D="htmlAttributes",U="titleAttributes",F={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},z=(Object.keys(F).map((function(e){return F[e]})),"charset"),q="cssText",W="href",Y="http-equiv",K="innerHTML",$="itemprop",V="name",Z="property",X="rel",G="src",Q="target",J={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ee="defaultTitle",te="defer",ne="encodeSpecialCharacters",re="onChangeClientState",oe="titleTemplate",ae=Object.keys(J).reduce((function(e,t){return e[J[t]]=t,e}),{}),ie=[F.NOSCRIPT,F.SCRIPT,F.STYLE],le="data-react-helmet",ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ue=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},me=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},de=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ve=function(e){var t=we(e,F.TITLE),n=we(e,oe);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=we(e,ee);return t||r||void 0},ye=function(e){return we(e,re)||function(){}},he=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return fe({},e,t)}),{})},be=function(e,t){return t.filter((function(e){return void 0!==e[F.BASE]})).map((function(e){return e[F.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},ge=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Ae("Helmet: "+e+' should be of type "Array". Instead found type "'+ce(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||n===X&&"canonical"===e[n].toLowerCase()||c===X&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==K&&l!==q&&l!==$||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],c=H()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},we=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Ee=(O=Date.now(),function(e){var t=Date.now();t-O>16?(O=t,e(t)):setTimeout((function(){Ee(e)}),0)}),Te=function(e){return clearTimeout(e)},Oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ee:n.g.requestAnimationFrame||Ee,Se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Te:n.g.cancelAnimationFrame||Te,Ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ke=null,Ne=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;Pe(F.BODY,r),Pe(F.HTML,o),Ce(f,p);var m={baseTag:je(F.BASE,n),linkTags:je(F.LINK,a),metaTags:je(F.META,i),noscriptTags:je(F.NOSCRIPT,l),scriptTags:je(F.SCRIPT,s),styleTags:je(F.STYLE,u)},d={},v={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(v[e]=m[e].oldTags)})),t&&t(),c(e,d,v)},xe=function(e){return Array.isArray(e)?e.join(""):e},Ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=xe(e)),Pe(F.TITLE,t)},Pe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(le),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(le):n.getAttribute(le)!==i.join(",")&&n.setAttribute(le,i.join(","))}},je=function(e,t){var n=document.head||document.querySelector(F.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===K)n.innerHTML=t.innerHTML;else if(r===q)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(le,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},Le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},_e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[J[n]||n]=e[n],t}),t)},Ie=function(e,t,n){switch(e){case F.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[le]=!0,a=_e(n,o),[r.createElement(F.TITLE,a,e)];var e,n,o,a},toString:function(){return function(e,t,n,r){var o=Le(n),a=xe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+de(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+de(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case M:case D:return{toComponent:function(){return _e(t)},toString:function(){return Le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,a=((o={key:n})[le]=!0,o);return Object.keys(t).forEach((function(e){var n=J[e]||e;if(n===K||n===q){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),r.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===K||e===q)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+de(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===ie.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},Be=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:Ie(F.BASE,t,r),bodyAttributes:Ie(M,n,r),htmlAttributes:Ie(D,o,r),link:Ie(F.LINK,a,r),meta:Ie(F.META,i,r),noscript:Ie(F.NOSCRIPT,l,r),script:Ie(F.SCRIPT,c,r),style:Ie(F.STYLE,s,r),title:Ie(F.TITLE,{title:f,titleAttributes:p},r)}},Re=_()((function(e){return{baseTag:be([W,Q],e),bodyAttributes:he(M,e),defer:we(e,te),encode:we(e,ne),htmlAttributes:he(D,e),linkTags:ge(F.LINK,[X,W],e),metaTags:ge(F.META,[V,z,Y,Z,$],e),noscriptTags:ge(F.NOSCRIPT,[K],e),onChangeClientState:ye(e),scriptTags:ge(F.SCRIPT,[G,K],e),styleTags:ge(F.STYLE,[q],e),title:ve(e),titleAttributes:he(U,e)}}),(function(e){ke&&Se(ke),e.defer?ke=Oe((function(){Ne(e,(function(){ke=null}))})):(Ne(e),ke=null)}),Be)((function(){return null})),He=(S=Re,k=A=function(e){function t(){return se(this,t),me(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!B()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case F.SCRIPT:case F.NOSCRIPT:return{innerHTML:t};case F.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return fe({},r,((t={})[n.type]=[].concat(r[n.type]||[],[fe({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case F.TITLE:return fe({},o,((t={})[r.type]=i,t.titleAttributes=fe({},a),t));case F.BODY:return fe({},o,{bodyAttributes:fe({},a)});case F.HTML:return fe({},o,{htmlAttributes:fe({},a)})}return fe({},o,((n={})[r.type]=fe({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=fe({},t);return Object.keys(e).forEach((function(t){var r;n=fe({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,a=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ae[n]||n]=e[n],t}),t)}(pe(r,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case F.LINK:case F.META:case F.NOSCRIPT:case F.SCRIPT:case F.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=pe(e,["children"]),o=fe({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(S,o)},ue(t,null,[{key:"canUseDOM",set:function(e){S.canUseDOM=e}}]),t}(r.Component),A.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=S.peek,A.rewind=function(){var e=S.rewind();return e||(e=Be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},k);He.renderStatic=He.rewind;var Me=n(9499),De=function(e){var t=e.title,n=e.description,a=e.image,i=e.keywords,l=(0,Me.useLocation)().pathname,c=(0,o.useStaticQuery)(Fe).site.siteMetadata,s=c.defaultTitle,u=c.titleTemplate,f=c.defaultDescription,p=c.siteUrl,m=c.defaultImage,d=c.defaultKeywords,v=c.shortTitle,y=c.maskedIcon,h={title:t||s,description:n||f,image:""+p+(a||m),url:""+p+l,keywords:i||d};return r.createElement(He,{title:h.title,titleTemplate:t?u:""},r.createElement("link",{rel:"mask-icon",href:""+p+y,color:"#2a2a2a"}),r.createElement("meta",{name:"apple-mobile-web-app-title",content:v}),r.createElement("meta",{name:"application-name",content:v}),r.createElement("meta",{name:"description",content:h.description}),h.keywords&&r.createElement("meta",{name:"keywords",content:h.keywords}),r.createElement("meta",{name:"image",content:h.image}),h.url&&r.createElement("meta",{property:"og:url",content:h.url}),r.createElement("meta",{property:"og:locale",content:"en_GB"}),r.createElement("meta",{property:"og:site_name",content:s}),h.title&&r.createElement("meta",{property:"og:title",content:h.title}),h.description&&r.createElement("meta",{property:"og:description",content:h.description}),h.image&&r.createElement("meta",{property:"og:image",content:h.image}))},Ue=De;De.defaultProps={title:null,description:null,image:null,keywords:null};var Fe="2810838613",ze=function(e){var t=e.title,n=e.description,o=e.keywords,a=e.image,i=e.simpleNav,l=e.isHero,c=e.children;return r.createElement(r.Fragment,null,r.createElement(Ue,{title:t,description:n,image:a,keywords:o}),r.createElement(P,{simpleNav:i,isHero:l}),r.createElement("main",null,c,r.createElement(j,null)))},qe=n(1721),We=!("undefined"==typeof window||!window.document||!window.document.createElement);var Ye=void 0;function Ke(){return void 0===Ye&&(Ye=function(){if(!We)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(ft){}return e}()),Ye}function $e(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function Ve(e){this.target=e,this.events={}}Ve.prototype.getEventHandlers=function(e,t){var n,r=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[r]||(this.events[r]={handlers:[],handleEvent:void 0},this.events[r].nextHandlers=this.events[r].handlers),this.events[r]},Ve.prototype.handleEvent=function(e,t,n){var r=this.getEventHandlers(e,t);r.handlers=r.nextHandlers,r.handlers.forEach((function(e){e&&e(n)}))},Ve.prototype.add=function(e,t,n){var r=this,o=this.getEventHandlers(e,n);$e(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,o.handleEvent,n)),o.nextHandlers.push(t);var a=!0;return function(){if(a){a=!1,$e(o);var i=o.nextHandlers.indexOf(t);o.nextHandlers.splice(i,1),0===o.nextHandlers.length&&(r.target&&r.target.removeEventListener(e,o.handleEvent,n),o.handleEvent=void 0)}}};var Ze="__consolidated_events_handlers__";function Xe(e,t,n,r){e[Ze]||(e[Ze]=new Ve(e));var o=function(e){if(e)return Ke()?e:!!e.capture}(r);return e[Ze].add(t,n,o)}var Ge=n(6443);function Qe(e,t){var n,r=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof r)return r;var o=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof o?o*t:void 0}var Je="above",et="inside",tt="below",nt="invisible";function rt(e){return"string"==typeof e.type}var ot;var at=[];function it(e){at.push(e),ot||(ot=setTimeout((function(){var e;for(ot=null;e=at.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=at.indexOf(e);-1!==n&&(at.splice(n,1),!at.length&&ot&&(clearTimeout(ot),ot=null))}}}var lt="undefined"!=typeof window,ct={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},st=function(e){function t(t){var n;return(n=e.call(this,t)||this).refElement=function(e){n._ref=e},n}(0,qe.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;lt&&(this.cancelOnNextTick=it((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug;!function(e,t){if(e&&!rt(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Xe(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Xe(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))},o.componentDidUpdate=function(){var e=this;lt&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=it((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))},o.componentWillUnmount=function(){lt&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())},o._findScrollableAncestor=function(){var e=this.props,t=e.horizontal,r=e.scrollableAncestor;if(r)return function(e){return"window"===e?n.g.window:e}(r);for(var o=this._ref;o.parentNode;){if((o=o.parentNode)===document.body)return window;var a=window.getComputedStyle(o),i=(t?a.getPropertyValue("overflow-x"):a.getPropertyValue("overflow-y"))||a.getPropertyValue("overflow");if("auto"===i||"scroll"===i||"overlay"===i)return o}return window},o._handleScroll=function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?nt:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?et:e.viewportBottom<e.waypointTop?tt:e.waypointTop<e.viewportTop?Je:nt}(t),r=this._previousPosition,o=this.props,a=(o.debug,o.onPositionChange),i=o.onEnter,l=o.onLeave,c=o.fireOnRapidScroll;if(this._previousPosition=n,r!==n){var s={currentPosition:n,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};a.call(this,s),n===et?i.call(this,s):r===et&&l.call(this,s),c&&(r===tt&&n===Je||r===Je&&n===tt)&&(i.call(this,{currentPosition:et,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),l.call(this,{currentPosition:n,previousPosition:et,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}},o._getBounds=function(){var e,t,n=this.props,r=n.horizontal,o=(n.debug,this._ref.getBoundingClientRect()),a=o.left,i=o.top,l=o.right,c=o.bottom,s=r?a:i,u=r?l:c;this.scrollableAncestor===window?(e=r?window.innerWidth:window.innerHeight,t=0):(e=r?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=r?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var f=this.props,p=f.bottomOffset;return{waypointTop:s,waypointBottom:u,viewportTop:t+Qe(f.topOffset,e),viewportBottom:t+e-Qe(p,e)}},o.render=function(){var e=this,t=this.props.children;if(!t)return r.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(rt(t)||(0,Ge.isForwardRef)(t)){return r.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}})}return r.cloneElement(t,{innerRef:this.refElement})},t}(r.PureComponent);st.above=Je,st.below=tt,st.inside=et,st.invisible=nt,st.defaultProps=ct,st.displayName="Waypoint";var ut=function(){var e=(0,r.useState)(!0),t=e[0],n=e[1];return r.createElement(ze,{isArticle:!1,isHero:t},r.createElement("div",{className:"hero-container"},r.createElement("div",{className:"hero-container-sub"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-5"},r.createElement("div",{className:"hero-content"},r.createElement("h1",null,"Data Driven Recruitment"),r.createElement("h3",{className:"dark-text"},"Osiris Resources is an expert consultancy delivering global hiring programs for clients in the Telecommunication and Computer Networking space."),r.createElement("div",{className:"hero-cta"},r.createElement("a",{className:"btn",href:"#"},"Find Out More"),r.createElement("a",{className:"btn hero-btn-last",href:""},"Register Interest")))),r.createElement("div",{className:"col-lg-7"},r.createElement("div",{className:"hero-image"},r.createElement("div",{className:"hero-image-container"}))))))),r.createElement(st,{onEnter:function(){return n(!0)},onLeave:function(){return n(!1)},topOffset:100}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-582002d7bf3a6e882509.js.map