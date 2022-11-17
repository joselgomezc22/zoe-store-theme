window.theme = window.theme || {};
window.themeInfo = {name: "Icon"};

(function vendorLazySizes() {
  /*! lazysizes - v4.0.1 */
  !function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=125,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&d.ricTimeout?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d&&m?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});

  /*! lazysizes Bgset - v4.0.1 */
  !function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+/g,e=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,g=/\(|\)|'/,h={contain:1,cover:1},i=function(a){var b=c.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},j=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!h[b]&&h[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},k=function(a,c,g){var h=b.createElement("picture"),i=c.getAttribute(lazySizesConfig.sizesAttr),j=c.getAttribute("data-ratio"),k=c.getAttribute("data-optimumx");c._lazybgset&&c._lazybgset.parentNode==c&&c.removeChild(c._lazybgset),Object.defineProperty(g,"_lazybgset",{value:c,writable:!0}),Object.defineProperty(c,"_lazybgset",{value:h,writable:!0}),a=a.replace(d," ").split(e),h.style.display="none",g.className=lazySizesConfig.lazyClass,1!=a.length||i||(i="auto"),a.forEach(function(a){var c=b.createElement("source");i&&"auto"!=i&&c.setAttribute("sizes",i),a.match(f)&&(c.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&c.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),h.appendChild(c)}),i&&(g.setAttribute(lazySizesConfig.sizesAttr,i),c.removeAttribute(lazySizesConfig.sizesAttr),c.removeAttribute("sizes")),k&&g.setAttribute("data-optimumx",k),j&&g.setAttribute("data-ratio",j),h.appendChild(g),c.appendChild(h)},l=function(a){if(a.target._lazybgset){var b=a.target,d=b._lazybgset,e=b.currentSrc||b.src;e&&(d.style.backgroundImage="url("+(g.test(e)?JSON.stringify(e):e)+")"),b._lazybgsetLoading&&(c.fire(d,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var d,e,f;!a.defaultPrevented&&(d=a.target.getAttribute("data-bgset"))&&(f=a.target,e=b.createElement("img"),e.alt="",e._lazybgsetLoading=!0,a.detail.firesLoad=!0,k(d,f,e),setTimeout(function(){c.loader.unveil(e),c.rAF(function(){c.fire(e,"_lazyloaded",{},!0,!0),e.complete&&l({target:e})})}))}),b.addEventListener("load",l,!0),a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c&&a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,d=j(b);h[d]&&(a.target._lazysizesParentFit=d,c.rAF(function(){a.target.setAttribute("data-parent-fit",d),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),b.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&a.detail.instance==c&&(a.detail.width=i(a.target._lazybgset))})}});

  /*! lazysizes rias - v4.0.1 */
  !function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!m.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(l.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(q.test(d))try{d=JSON.parse(d)}catch(f){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(p,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return k[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(s.setAttribute("href",a),a=s.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(p,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f={u:a.replace(n,e).replace(o,b.ratio?Math.round(d*b.ratio):""),w:d};c.push(f),c.srcset.push(f.c=f.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=g/f)}a=e(a,c),a.isPicture=c.isPicture,u&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var e=d(a,b);return j.modifyOptions.call(a,{target:a,details:e,detail:e}),c.fire(a,"lazyriasmodifyoptions",e),e}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}var i,j,k={string:1,number:1},l=/^\-*\+*\d+\.*\d*$/,m=/^picture$/i,n=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q=/^\[.*\]|\{.*\}$/,r=/^(?:auto|\d+(px)?)$/,s=b.createElement("a"),t=b.createElement("img"),u="srcset"in t&&!("sizes"in t),v=!!a.HTMLPictureElement&&!u;!function(){var b,d=function(){},e={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:d,widthmap:{},ratio:!1};i=c&&c.cfg||a.lazySizesConfig,i||(i={},a.lazySizesConfig=i),i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),j=i.rias,"widths"in j||(j.widths=[],function(a){for(var b,c=0;!b||3e3>b;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(b in e)b in j||(j[b]=e[b])}(),addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,d,e,k,l,m,o,p,q,s,t,u,x;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(q=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&r.test(q)){if(d=h(b),e=g(b,d),t=n.test(e.prefix)||n.test(e.postfix),e.isPicture&&(k=b.parentNode))for(l=k.getElementsByTagName("source"),m=0,o=l.length;o>m;m++)(t||n.test(p=h(l[m])))&&(f(p,e,l[m]),u=!0);t||n.test(d)?(f(d,e,b),u=!0):u&&(x=[],x.srcset=[],x.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:x,writable:!0})),u&&(v?b.removeAttribute(i.srcAttr):"auto"!=q&&(s={width:parseInt(q,10)},w({target:b,detail:s})))}}},!0);var w=function(){var d=function(a,b){return a.w-b.w},e=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},f=function(a,b){var d;return!a._lazyrias&&c.pWS&&(d=c.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:d,writable:!0}),b&&a.parentNode&&(d.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},g=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.4,d)},h=function(b,c){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;j>i;i++)if(f(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<c)&&(l.w=c,l.d=g(b),m=e(l.sort(d))),m},j=function(d){if(d.detail.instance==c){var e,g=d.target;return!u&&(a.respimage||a.picturefill||lazySizesConfig.pf)?void b.removeEventListener("lazybeforesizes",j):void(("_lazyrias"in g||d.detail.dataAttr&&f(g,!0))&&(e=h(g,d.detail.width),e&&e.u&&g._lazyrias.cur!=e.u&&(g._lazyrias.cur=e.u,e.cached=!0,c.rAF(function(){g.setAttribute(i.srcAttr,e.u),g.setAttribute("src",e.u)}))))}};return v?j=function(){}:addEventListener("lazybeforesizes",j),j}()});

})();
(function vendorAOS(){
  /**
   * *******************************************************
   * AOS (Animate on scroll) - wowjs alternative
   * made to animate elements on scroll in both directions
   * *******************************************************
   */
  !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});
})();
(function vendorParallax(){

  /*!
   * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos,
   * @date: 20-08-2020 14:0:14,
   * @version: 5.6.2,
   * @link: https://simpleparallax.com/
   */
  !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("simpleParallax",[],e):"object"==typeof exports?exports.simpleParallax=e():t.simpleParallax=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var i=function(){return Element.prototype.closest&&"IntersectionObserver"in window};function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.positions={top:0,bottom:0,height:0}}var e,n,i;return e=t,(n=[{key:"setViewportTop",value:function(t){return this.positions.top=t?t.scrollTop:window.pageYOffset,this.positions}},{key:"setViewportBottom",value:function(){return this.positions.bottom=this.positions.top+this.positions.height,this.positions}},{key:"setViewportAll",value:function(t){return this.positions.top=t?t.scrollTop:window.pageYOffset,this.positions.height=t?t.clientHeight:document.documentElement.clientHeight,this.positions.bottom=this.positions.top+this.positions.height,this.positions}}])&&r(e.prototype,n),i&&r(e,i),t}()),o=function(t){return NodeList.prototype.isPrototypeOf(t)||HTMLCollection.prototype.isPrototypeOf(t)?Array.from(t):"string"==typeof t||t instanceof String?document.querySelectorAll(t):[t]},a=function(){for(var t,e="transform webkitTransform mozTransform oTransform msTransform".split(" "),n=0;void 0===t;)t=void 0!==document.createElement("div").style[e[n]]?e[n]:void 0,n+=1;return t}(),l=function(t){return"img"!==t.tagName.toLowerCase()&&"picture"!==t.tagName.toLowerCase()||!!t&&(!!t.complete&&(void 0===t.naturalWidth||0!==t.naturalWidth))};function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.elementContainer=e,this.settings=n,this.isVisible=!0,this.isInit=!1,this.oldTranslateValue=-1,this.init=this.init.bind(this),this.customWrapper=this.settings.customWrapper&&this.element.closest(this.settings.customWrapper)?this.element.closest(this.settings.customWrapper):null,l(e)?this.init():this.element.addEventListener("load",(function(){setTimeout((function(){i.init(!0)}),50)}))}var e,n,i;return e=t,(n=[{key:"init",value:function(t){var e=this;this.isInit||(t&&(this.rangeMax=null),this.element.closest(".simpleParallax")||(!1===this.settings.overflow&&this.wrapElement(this.element),this.setTransformCSS(),this.getElementOffset(),this.intersectionObserver(),this.getTranslateValue(),this.animate(),this.settings.delay>0?setTimeout((function(){e.setTransitionCSS(),e.elementContainer.classList.add("simple-parallax-initialized")}),10):this.elementContainer.classList.add("simple-parallax-initialized"),this.isInit=!0))}},{key:"wrapElement",value:function(){var t=this.element.closest("picture")||this.element,e=this.customWrapper||document.createElement("div");e.classList.add("simpleParallax"),e.style.overflow="hidden",this.customWrapper||(t.parentNode.insertBefore(e,t),e.appendChild(t)),this.elementContainer=e}},{key:"unWrapElement",value:function(){var t=this.elementContainer;this.customWrapper?(t.classList.remove("simpleParallax"),t.style.overflow=""):t.replaceWith.apply(t,u(t.childNodes))}},{key:"setTransformCSS",value:function(){!1===this.settings.overflow&&(this.element.style[a]="scale(".concat(this.settings.scale,")")),this.element.style.willChange="transform"}},{key:"setTransitionCSS",value:function(){this.element.style.transition="transform ".concat(this.settings.delay,"s ").concat(this.settings.transition)}},{key:"unSetStyle",value:function(){this.element.style.willChange="",this.element.style[a]="",this.element.style.transition=""}},{key:"getElementOffset",value:function(){var t=this.elementContainer.getBoundingClientRect();if(this.elementHeight=t.height,this.elementTop=t.top+s.positions.top,this.settings.customContainer){var e=this.settings.customContainer.getBoundingClientRect();this.elementTop=t.top-e.top+s.positions.top}this.elementBottom=this.elementHeight+this.elementTop}},{key:"buildThresholdList",value:function(){for(var t=[],e=1;e<=this.elementHeight;e++){var n=e/this.elementHeight;t.push(n)}return t}},{key:"intersectionObserver",value:function(){var t={root:null,threshold:this.buildThresholdList()};this.observer=new IntersectionObserver(this.intersectionObserverCallback.bind(this),t),this.observer.observe(this.element)}},{key:"intersectionObserverCallback",value:function(t){var e=this;t.forEach((function(t){t.isIntersecting?e.isVisible=!0:e.isVisible=!1}))}},{key:"checkIfVisible",value:function(){return this.elementBottom>s.positions.top&&this.elementTop<s.positions.bottom}},{key:"getRangeMax",value:function(){var t=this.element.clientHeight;this.rangeMax=t*this.settings.scale-t}},{key:"getTranslateValue",value:function(){var t=((s.positions.bottom-this.elementTop)/((s.positions.height+this.elementHeight)/100)).toFixed(1);return t=Math.min(100,Math.max(0,t)),0!==this.settings.maxTransition&&t>this.settings.maxTransition&&(t=this.settings.maxTransition),this.oldPercentage!==t&&(this.rangeMax||this.getRangeMax(),this.translateValue=(t/100*this.rangeMax-this.rangeMax/2).toFixed(0),this.oldTranslateValue!==this.translateValue&&(this.oldPercentage=t,this.oldTranslateValue=this.translateValue,!0))}},{key:"animate",value:function(){var t,e=0,n=0;(this.settings.orientation.includes("left")||this.settings.orientation.includes("right"))&&(n="".concat(this.settings.orientation.includes("left")?-1*this.translateValue:this.translateValue,"px")),(this.settings.orientation.includes("up")||this.settings.orientation.includes("down"))&&(e="".concat(this.settings.orientation.includes("up")?-1*this.translateValue:this.translateValue,"px")),t=!1===this.settings.overflow?"translate3d(".concat(n,", ").concat(e,", 0) scale(").concat(this.settings.scale,")"):"translate3d(".concat(n,", ").concat(e,", 0)"),this.element.style[a]=t}}])&&h(e.prototype,n),i&&h(e,i),t}();function m(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g,b,w=!1,T=[],x=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&i()){if(this.elements=o(e),this.defaults={delay:0,orientation:"up",scale:1.3,overflow:!1,transition:"cubic-bezier(0,0,0,1)",customContainer:"",customWrapper:"",maxTransition:0},this.settings=Object.assign(this.defaults,n),this.settings.customContainer){var r=p(o(this.settings.customContainer),1);this.customContainer=r[0]}this.lastPosition=-1,this.resizeIsDone=this.resizeIsDone.bind(this),this.refresh=this.refresh.bind(this),this.proceedRequestAnimationFrame=this.proceedRequestAnimationFrame.bind(this),this.init()}}var e,n,r;return e=t,(n=[{key:"init",value:function(){var t=this;s.setViewportAll(this.customContainer),T=[].concat(m(this.elements.map((function(e){return new f(e,t.settings)}))),m(T)),w||(this.proceedRequestAnimationFrame(),window.addEventListener("resize",this.resizeIsDone),w=!0)}},{key:"resizeIsDone",value:function(){clearTimeout(b),b=setTimeout(this.refresh,200)}},{key:"proceedRequestAnimationFrame",value:function(){var t=this;s.setViewportTop(this.customContainer),this.lastPosition!==s.positions.top?(s.setViewportBottom(),T.forEach((function(e){t.proceedElement(e)})),g=window.requestAnimationFrame(this.proceedRequestAnimationFrame),this.lastPosition=s.positions.top):g=window.requestAnimationFrame(this.proceedRequestAnimationFrame)}},{key:"proceedElement",value:function(t){(this.customContainer?t.checkIfVisible():t.isVisible)&&t.getTranslateValue()&&t.animate()}},{key:"refresh",value:function(){s.setViewportAll(this.customContainer),T.forEach((function(t){t.getElementOffset(),t.getRangeMax()})),this.lastPosition=-1}},{key:"destroy",value:function(){var t=this,e=[];T=T.filter((function(n){return t.elements.includes(n.element)?(e.push(n),!1):n})),e.forEach((function(e){e.unSetStyle(),!1===t.settings.overflow&&e.unWrapElement()})),T.length||(window.cancelAnimationFrame(g),window.removeEventListener("resize",this.refresh),w=!1)}}])&&v(e.prototype,n),r&&v(e,r),t}()}]).default}));

})();
(function vendorInfiniteScroll() {
  /*!
   * Infinite Scroll PACKAGED v4.0.1
   * Automatically add next page
   *
   * Licensed GPLv3 for open source use
   * or Infinite Scroll Commercial License for commercial use
   *
   * https://infinite-scroll.com
   * Copyright 2018-2020 Metafizzy
   */
  !function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,(function(t,e){let i=t.console,n=void 0===i?function(){}:function(t){i.error(t)};return function(i,o,s){(s=s||e||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){t&&(this.options=Object.assign(this.options||{},t))}),s.fn[i]=function(t,...e){return"string"==typeof t?function(t,e,o){let r,l=`$().${i}("${e}")`;return t.each((function(t,h){let a=s.data(h,i);if(!a)return void n(`${i} not initialized. Cannot call method ${l}`);let c=a[e];if(!c||"_"==e.charAt(0))return void n(`${l} is not a valid method`);let u=c.apply(a,o);r=void 0===r?u:r})),void 0!==r?r:t}(this,t,e):(r=t,this.each((function(t,e){let n=s.data(e,i);n?(n.option(r),n._init()):(n=new o(e,r),s.data(e,i,n))})),this);var r})}})),function(t,e){"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,(function(){function t(){}let e=t.prototype;return e.on=function(t,e){if(!t||!e)return this;let i=this._events=this._events||{},n=i[t]=i[t]||[];return n.includes(e)||n.push(e),this},e.once=function(t,e){if(!t||!e)return this;this.on(t,e);let i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;let n=i.indexOf(e);return-1!=n&&i.splice(n,1),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;i=i.slice(0),e=e||[];let n=this._onceEvents&&this._onceEvents[t];for(let o of i){n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),function(t,e){"object"==typeof module&&module.exports?module.exports=e(t):t.fizzyUIUtils=e(t)}(this,(function(t){let e={extend:function(t,e){return Object.assign(t,e)},modulo:function(t,e){return(t%e+e)%e},makeArray:function(t){if(Array.isArray(t))return t;if(null==t)return[];return"object"==typeof t&&"number"==typeof t.length?[...t]:[t]},removeFrom:function(t,e){let i=t.indexOf(e);-1!=i&&t.splice(i,1)},getParent:function(t,e){for(;t.parentNode&&t!=document.body;)if((t=t.parentNode).matches(e))return t},getQueryElement:function(t){return"string"==typeof t?document.querySelector(t):t},handleEvent:function(t){let e="on"+t.type;this[e]&&this[e](t)},filterFindElements:function(t,i){return(t=e.makeArray(t)).filter((t=>t instanceof HTMLElement)).reduce(((t,e)=>{if(!i)return t.push(e),t;e.matches(i)&&t.push(e);let n=e.querySelectorAll(i);return t=t.concat(...n)}),[])},debounceMethod:function(t,e,i){i=i||100;let n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){clearTimeout(this[o]);let t=arguments;this[o]=setTimeout((()=>{n.apply(this,t),delete this[o]}),i)}},docReady:function(t){let e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},toDashed:function(t){return t.replace(/(.)([A-Z])/g,(function(t,e,i){return e+"-"+i})).toLowerCase()}},i=t.console;return e.htmlInit=function(n,o){e.docReady((function(){let s="data-"+e.toDashed(o),r=document.querySelectorAll(`[${s}]`),l=t.jQuery;[...r].forEach((t=>{let e,r=t.getAttribute(s);try{e=r&&JSON.parse(r)}catch(e){return void(i&&i.error(`Error parsing ${s} on ${t.className}: ${e}`))}let h=new n(t,e);l&&l.data(t,o,h)}))}))},e})),function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("fizzy-ui-utils")):t.InfiniteScroll=e(t,t.EvEmitter,t.fizzyUIUtils)}(window,(function(t,e,i){let n=t.jQuery,o={};function s(t,e){let r=i.getQueryElement(t);if(r){if((t=r).infiniteScrollGUID){let i=o[t.infiniteScrollGUID];return i.option(e),i}this.element=t,this.options={...s.defaults},this.option(e),n&&(this.$element=n(this.element)),this.create()}else console.error("Bad element for InfiniteScroll: "+(r||t))}s.defaults={},s.create={},s.destroy={};let r=s.prototype;Object.assign(r,e.prototype);let l=0;r.create=function(){let t=this.guid=++l;if(this.element.infiniteScrollGUID=t,o[t]=this,this.pageIndex=1,this.loadCount=0,this.updateGetPath(),this.getPath&&this.getPath()){this.updateGetAbsolutePath(),this.log("initialized",[this.element.className]),this.callOnInit();for(let t in s.create)s.create[t].call(this)}else console.error("Disabling InfiniteScroll")},r.option=function(t){Object.assign(this.options,t)},r.callOnInit=function(){let t=this.options.onInit;t&&t.call(this,this)},r.dispatchEvent=function(t,e,i){this.log(t,i);let o=e?[e].concat(i):i;if(this.emitEvent(t,o),!n||!this.$element)return;let s=t+=".infiniteScroll";if(e){let i=n.Event(e);i.type=t,s=i}this.$element.trigger(s,i)};let h={initialized:t=>`on ${t}`,request:t=>`URL: ${t}`,load:(t,e)=>`${t.title||""}. URL: ${e}`,error:(t,e)=>`${t}. URL: ${e}`,append:(t,e,i)=>`${i.length} items. URL: ${e}`,last:(t,e)=>`URL: ${e}`,history:(t,e)=>`URL: ${e}`,pageIndex:function(t,e){return`current page determined to be: ${t} from ${e}`}};r.log=function(t,e){if(!this.options.debug)return;let i=`[InfiniteScroll] ${t}`,n=h[t];n&&(i+=". "+n.apply(this,e)),console.log(i)},r.updateMeasurements=function(){this.windowHeight=t.innerHeight;let e=this.element.getBoundingClientRect();this.top=e.top+t.scrollY},r.updateScroller=function(){let e=this.options.elementScroll;if(e){if(this.scroller=!0===e?this.element:i.getQueryElement(e),!this.scroller)throw new Error(`Unable to find elementScroll: ${e}`)}else this.scroller=t},r.updateGetPath=function(){let t=this.options.path;if(!t)return void console.error(`InfiniteScroll path option required. Set as: ${t}`);let e=typeof t;"function"!=e?"string"==e&&t.match("{{#}}")?this.updateGetPathTemplate(t):this.updateGetPathSelector(t):this.getPath=t},r.updateGetPathTemplate=function(t){this.getPath=()=>{let e=this.pageIndex+1;return t.replace("{{#}}",e)};let e=t.replace(/(\\\?|\?)/,"\\?").replace("{{#}}","(\\d\\d?\\d?)"),i=new RegExp(e),n=location.href.match(i);n&&(this.pageIndex=parseInt(n[1],10),this.log("pageIndex",[this.pageIndex,"template string"]))};let a=[/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,/^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,/(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/],c=s.getPathParts=function(t){if(t)for(let e of a){let i=t.match(e);if(i){let[,t,e,n]=i;return{begin:t,index:e,end:n}}}};r.updateGetPathSelector=function(t){let e=document.querySelector(t);if(!e)return void console.error(`Bad InfiniteScroll path option. Next link not found: ${t}`);let i=e.getAttribute("href"),n=c(i);if(!n)return void console.error(`InfiniteScroll unable to parse next link href: ${i}`);let{begin:o,index:s,end:r}=n;this.isPathSelector=!0,this.getPath=()=>o+(this.pageIndex+1)+r,this.pageIndex=parseInt(s,10)-1,this.log("pageIndex",[this.pageIndex,"next link"])},r.updateGetAbsolutePath=function(){let t=this.getPath();if(t.match(/^http/)||t.match(/^\//))return void(this.getAbsolutePath=this.getPath);let{pathname:e}=location,i=t.match(/^\?/),n=e.substring(0,e.lastIndexOf("/")),o=i?e:n+"/";this.getAbsolutePath=()=>o+this.getPath()},s.create.hideNav=function(){let t=i.getQueryElement(this.options.hideNav);t&&(t.style.display="none",this.nav=t)},s.destroy.hideNav=function(){this.nav&&(this.nav.style.display="")},r.destroy=function(){this.allOff();for(let t in s.destroy)s.destroy[t].call(this);delete this.element.infiniteScrollGUID,delete o[this.guid],n&&this.$element&&n.removeData(this.element,"infiniteScroll")},s.throttle=function(t,e){let i,n;return e=e||200,function(){let o=+new Date,s=arguments,r=()=>{i=o,t.apply(this,s)};i&&o<i+e?(clearTimeout(n),n=setTimeout(r,e)):r()}},s.data=function(t){let e=(t=i.getQueryElement(t))&&t.infiniteScrollGUID;return e&&o[e]},s.setJQuery=function(t){n=t},i.htmlInit(s,"infinite-scroll"),r._init=function(){};let{jQueryBridget:u}=t;return n&&u&&u("infiniteScroll",s,n),s})),function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("./core")):e(t,t.InfiniteScroll)}(window,(function(t,e){let i=e.prototype;Object.assign(e.defaults,{loadOnScroll:!0,checkLastPage:!0,responseBody:"text",domParseResponse:!0}),e.create.pageLoad=function(){this.canLoad=!0,this.on("scrollThreshold",this.onScrollThresholdLoad),this.on("load",this.checkLastPage),this.options.outlayer&&this.on("append",this.onAppendOutlayer)},i.onScrollThresholdLoad=function(){this.options.loadOnScroll&&this.loadNextPage()};let n=new DOMParser;function o(t){let e=document.createDocumentFragment();return t&&e.append(...t),e}return i.loadNextPage=function(){if(this.isLoading||!this.canLoad)return;let{responseBody:t,domParseResponse:e,fetchOptions:i}=this.options,o=this.getAbsolutePath();this.isLoading=!0,"function"==typeof i&&(i=i());let s=fetch(o,i).then((i=>{if(!i.ok){let t=new Error(i.statusText);return this.onPageError(t,o,i),{response:i}}return i[t]().then((s=>("text"==t&&e&&(s=n.parseFromString(s,"text/html")),204==i.status?(this.lastPageReached(s,o),{body:s,response:i}):this.onPageLoad(s,o,i))))})).catch((t=>{this.onPageError(t,o)}));return this.dispatchEvent("request",null,[o,s]),s},i.onPageLoad=function(t,e,i){return this.options.append||(this.isLoading=!1),this.pageIndex++,this.loadCount++,this.dispatchEvent("load",null,[t,e,i]),this.appendNextPage(t,e,i)},i.appendNextPage=function(t,e,i){let{append:n,responseBody:s,domParseResponse:r}=this.options;if(!("text"==s&&r)||!n)return{body:t,response:i};let l=t.querySelectorAll(n),h={body:t,response:i,items:l};if(!l||!l.length)return this.lastPageReached(t,e),h;let a=o(l),c=()=>(this.appendItems(l,a),this.isLoading=!1,this.dispatchEvent("append",null,[t,e,l,i]),h);return this.options.outlayer?this.appendOutlayerItems(a,c):c()},i.appendItems=function(t,e){t&&t.length&&(function(t){let e=t.querySelectorAll("script");for(let t of e){let e=document.createElement("script"),i=t.attributes;for(let t of i)e.setAttribute(t.name,t.value);e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e,t)}}(e=e||o(t)),this.element.appendChild(e))},i.appendOutlayerItems=function(i,n){let o=e.imagesLoaded||t.imagesLoaded;return o?new Promise((function(t){o(i,(function(){let e=n();t(e)}))})):(console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),void(this.isLoading=!1))},i.onAppendOutlayer=function(t,e,i){this.options.outlayer.appended(i)},i.checkLastPage=function(t,e){let i,{checkLastPage:n,path:o}=this.options;if(n){if("function"==typeof o){if(!this.getPath())return void this.lastPageReached(t,e)}"string"==typeof n?i=n:this.isPathSelector&&(i=o),i&&t.querySelector&&(t.querySelector(i)||this.lastPageReached(t,e))}},i.lastPageReached=function(t,e){this.canLoad=!1,this.dispatchEvent("last",null,[t,e])},i.onPageError=function(t,e,i){return this.isLoading=!1,this.canLoad=!1,this.dispatchEvent("error",null,[t,e,i]),t},e.create.prefill=function(){if(!this.options.prefill)return;let t=this.options.append;t?(this.updateMeasurements(),this.updateScroller(),this.isPrefilling=!0,this.on("append",this.prefill),this.once("error",this.stopPrefill),this.once("last",this.stopPrefill),this.prefill()):console.error(`append option required for prefill. Set as :${t}`)},i.prefill=function(){let t=this.getPrefillDistance();this.isPrefilling=t>=0,this.isPrefilling?(this.log("prefill"),this.loadNextPage()):this.stopPrefill()},i.getPrefillDistance=function(){return this.options.elementScroll?this.scroller.clientHeight-this.scroller.scrollHeight:this.windowHeight-this.element.clientHeight},i.stopPrefill=function(){this.log("stopPrefill"),this.off("append",this.prefill)},e})),function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,(function(t,e,i){let n=e.prototype;return Object.assign(e.defaults,{scrollThreshold:400}),e.create.scrollWatch=function(){this.pageScrollHandler=this.onPageScroll.bind(this),this.resizeHandler=this.onResize.bind(this);let t=this.options.scrollThreshold;(t||0===t)&&this.enableScrollWatch()},e.destroy.scrollWatch=function(){this.disableScrollWatch()},n.enableScrollWatch=function(){this.isScrollWatching||(this.isScrollWatching=!0,this.updateMeasurements(),this.updateScroller(),this.on("last",this.disableScrollWatch),this.bindScrollWatchEvents(!0))},n.disableScrollWatch=function(){this.isScrollWatching&&(this.bindScrollWatchEvents(!1),delete this.isScrollWatching)},n.bindScrollWatchEvents=function(e){let i=e?"addEventListener":"removeEventListener";this.scroller[i]("scroll",this.pageScrollHandler),t[i]("resize",this.resizeHandler)},n.onPageScroll=e.throttle((function(){this.getBottomDistance()<=this.options.scrollThreshold&&this.dispatchEvent("scrollThreshold")})),n.getBottomDistance=function(){let e,i;return this.options.elementScroll?(e=this.scroller.scrollHeight,i=this.scroller.scrollTop+this.scroller.clientHeight):(e=this.top+this.element.clientHeight,i=t.scrollY+this.windowHeight),e-i},n.onResize=function(){this.updateMeasurements()},i.debounceMethod(e,"onResize",150),e})),function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,(function(t,e,i){let n=e.prototype;Object.assign(e.defaults,{history:"replace"});let o=document.createElement("a");return e.create.history=function(){if(!this.options.history)return;o.href=this.getAbsolutePath(),(o.origin||o.protocol+"//"+o.host)==location.origin?this.options.append?this.createHistoryAppend():this.createHistoryPageLoad():console.error(`[InfiniteScroll] cannot set history with different origin: ${o.origin} on ${location.origin} . History behavior disabled.`)},n.createHistoryAppend=function(){this.updateMeasurements(),this.updateScroller(),this.scrollPages=[{top:0,path:location.href,title:document.title}],this.scrollPage=this.scrollPages[0],this.scrollHistoryHandler=this.onScrollHistory.bind(this),this.unloadHandler=this.onUnload.bind(this),this.scroller.addEventListener("scroll",this.scrollHistoryHandler),this.on("append",this.onAppendHistory),this.bindHistoryAppendEvents(!0)},n.bindHistoryAppendEvents=function(e){let i=e?"addEventListener":"removeEventListener";this.scroller[i]("scroll",this.scrollHistoryHandler),t[i]("unload",this.unloadHandler)},n.createHistoryPageLoad=function(){this.on("load",this.onPageLoadHistory)},e.destroy.history=n.destroyHistory=function(){this.options.history&&this.options.append&&this.bindHistoryAppendEvents(!1)},n.onAppendHistory=function(t,e,i){if(!i||!i.length)return;let n=i[0],s=this.getElementScrollY(n);o.href=e,this.scrollPages.push({top:s,path:o.href,title:t.title})},n.getElementScrollY=function(e){if(this.options.elementScroll)return e.offsetTop-this.top;return e.getBoundingClientRect().top+t.scrollY},n.onScrollHistory=function(){let t=this.getClosestScrollPage();t!=this.scrollPage&&(this.scrollPage=t,this.setHistory(t.title,t.path))},i.debounceMethod(e,"onScrollHistory",150),n.getClosestScrollPage=function(){let e,i;e=this.options.elementScroll?this.scroller.scrollTop+this.scroller.clientHeight/2:t.scrollY+this.windowHeight/2;for(let t of this.scrollPages){if(t.top>=e)break;i=t}return i},n.setHistory=function(t,e){let i=this.options.history;i&&history[i+"State"]&&(history[i+"State"](null,t,e),this.options.historyTitle&&(document.title=t),this.dispatchEvent("history",null,[t,e]))},n.onUnload=function(){if(0===this.scrollPage.top)return;let e=t.scrollY-this.scrollPage.top+this.top;this.destroyHistory(),scrollTo(0,e)},n.onPageLoadHistory=function(t,e){this.setHistory(t.title,e)},e})),function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,(function(t,e,i){class n{constructor(t,e){this.element=t,this.infScroll=e,this.clickHandler=this.onClick.bind(this),this.element.addEventListener("click",this.clickHandler),e.on("request",this.disable.bind(this)),e.on("load",this.enable.bind(this)),e.on("error",this.hide.bind(this)),e.on("last",this.hide.bind(this))}onClick(t){t.preventDefault(),this.infScroll.loadNextPage()}enable(){this.element.removeAttribute("disabled")}disable(){this.element.disabled="disabled"}hide(){this.element.style.display="none"}destroy(){this.element.removeEventListener("click",this.clickHandler)}}return e.create.button=function(){let t=i.getQueryElement(this.options.button);t&&(this.button=new n(t,this))},e.destroy.button=function(){this.button&&this.button.destroy()},e.Button=n,e})),function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("./core"),require("fizzy-ui-utils")):e(t,t.InfiniteScroll,t.fizzyUIUtils)}(window,(function(t,e,i){let n=e.prototype;function o(t){r(t,"none")}function s(t){r(t,"block")}function r(t,e){t&&(t.style.display=e)}return e.create.status=function(){let t=i.getQueryElement(this.options.status);t&&(this.statusElement=t,this.statusEventElements={request:t.querySelector(".infinite-scroll-request"),error:t.querySelector(".infinite-scroll-error"),last:t.querySelector(".infinite-scroll-last")},this.on("request",this.showRequestStatus),this.on("error",this.showErrorStatus),this.on("last",this.showLastStatus),this.bindHideStatus("on"))},n.bindHideStatus=function(t){let e=this.options.append?"append":"load";this[t](e,this.hideAllStatus)},n.showRequestStatus=function(){this.showStatus("request")},n.showErrorStatus=function(){this.showStatus("error")},n.showLastStatus=function(){this.showStatus("last"),this.bindHideStatus("off")},n.showStatus=function(t){s(this.statusElement),this.hideStatusEventElements(),s(this.statusEventElements[t])},n.hideAllStatus=function(){o(this.statusElement),this.hideStatusEventElements()},n.hideStatusEventElements=function(){for(let t in this.statusEventElements){o(this.statusEventElements[t])}},e})),
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],(function(i){return e(t,i)})):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,e){"use strict";var i=t.jQuery,n=t.console;function o(t,e){for(var i in e)t[i]=e[i];return t}var s=Array.prototype.slice;function r(t,e,l){if(!(this instanceof r))return new r(t,e,l);var h,a=t;("string"==typeof t&&(a=document.querySelectorAll(t)),a)?(this.elements=(h=a,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?s.call(h):[h]),this.options=o({},this.options),"function"==typeof e?l=e:o(this.options,e),l&&this.on("always",l),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):n.error("Bad element for imagesLoaded "+(a||t))}r.prototype=Object.create(e.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&l[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var s=t.querySelectorAll(this.options.background);for(n=0;n<s.length;n++){var r=s[n];this.addElementBackgroundImages(r)}}}};var l={1:!0,9:!0,11:!0};function h(t){this.img=t}function a(t,e){this.url=t,this.element=e,this.img=new Image}return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new h(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var i=new a(t,e);this.images.push(i)},r.prototype.check=function(){var t=this;function e(e,i,n){setTimeout((function(){t.progress(e,i,n)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},r.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&n&&n.log("progress: "+i,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},h.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},a.prototype=Object.create(h.prototype),a.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},r.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((i=e).fn.imagesLoaded=function(t,e){return new r(this,t,e).jqDeferred.promise(i(this))})},r.makeJQueryPlugin(),r}));
})();
(function vendorFlickity() {
    /*!
   * Flickity PACKAGED v2.2.1
   * Touch, responsive, flickable carousels
   *
   * Licensed GPLv3 for open source use
   * or Flickity Commercial License for commercial use
   *
   * https://flickity.metafizzy.co
   * Copyright 2015-2019 Metafizzy
   */

  !function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});

  /**
   * Flickity fade v1.0.0
   * Fade between Flickity slides
   */

  /* jshint browser: true, undef: true, unused: true */

  !function(e,t){"function"==typeof define&&define.amd?define(["flickity/js/index","fizzy-ui-utils/utils"],t):"object"==typeof module&&module.exports?module.exports=t(require("flickity"),require("fizzy-ui-utils")):t(e.Flickity,e.fizzyUIUtils)}(this,function(e,t){var i=e.Slide,s=i.prototype.updateTarget;i.prototype.updateTarget=function(){if(s.apply(this,arguments),this.parent.options.fade){var e=this.target-this.x,t=this.cells[0].x;this.cells.forEach(function(i){var s=i.x-t-e;i.renderPosition(s)})}},i.prototype.setOpacity=function(e){this.cells.forEach(function(t){t.element.style.opacity=e})};var a=e.prototype;e.createMethods.push("_createFade"),a._createFade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};var n=a.updateSlides;a.updateSlides=function(){n.apply(this,arguments),this.options.fade&&this.slides.forEach(function(e,t){var i=t==this.selectedIndex?1:0;e.setOpacity(i)},this)},a.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},a.onSettleFade=function(){(delete this.didDragEnd,this.options.fade)&&(this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!=this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0))},a.onDragEndFade=function(){this.didDragEnd=!0},a.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},a.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(function(e){e.setOpacity("")}))};var d=a.positionSlider;a.positionSlider=function(){this.options.fade?(this.fadeSlides(),this.dispatchScrollEvent()):d.apply(this,arguments)};var h=a.positionSliderAtSelected;a.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),h.apply(this,arguments)},a.fadeSlides=function(){if(!(this.slides.length<2)){var e=this.getFadeIndexes(),t=this.slides[e.a],i=this.slides[e.b],s=this.wrapDifference(t.target,i.target),a=this.wrapDifference(t.target,-this.x);a/=s,t.setOpacity(1-a),i.setOpacity(a);var n=e.a;this.isDragging&&(n=a>.5?e.a:e.b),null!=this.fadeHideIndex&&this.fadeHideIndex!=n&&this.fadeHideIndex!=e.a&&this.fadeHideIndex!=e.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=n}},a.getFadeIndexes=function(){return this.isDragging||this.didDragEnd?this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes():{a:this.fadeIndex,b:this.selectedIndex}},a.getFadeDragWrapIndexes=function(){var e=this.slides.map(function(e,t){return this.getSlideDistance(-this.x,t)},this),i=e.map(function(e){return Math.abs(e)}),s=Math.min.apply(Math,i),a=i.indexOf(s),n=e[a],d=this.slides.length,h=n>=0?1:-1;return{a:a,b:t.modulo(a+h,d)}},a.getFadeDragLimitIndexes=function(){for(var e=0,t=0;t<this.slides.length-1;t++){var i=this.slides[t];if(-this.x<i.target)break;e=t}return{a:e,b:e+1}},a.wrapDifference=function(e,t){var i=t-e;if(!this.options.wrapAround)return i;var s=i+this.slideableWidth,a=i-this.slideableWidth;return Math.abs(s)<Math.abs(i)&&(i=s),Math.abs(a)<Math.abs(i)&&(i=a),i};var o=a._getWrapShiftCells;a._getWrapShiftCells=function(){this.options.fade||o.apply(this,arguments)};var r=a.shiftWrapCells;return a.shiftWrapCells=function(){this.options.fade||r.apply(this,arguments)},e});

  /*!
 * Flickity sync v2.0.0
 * enable sync for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

!function(t,n){"function"==typeof define&&define.amd?define(["flickity/js/index","fizzy-ui-utils/utils"],n):"object"==typeof module&&module.exports?module.exports=n(require("flickity"),require("fizzy-ui-utils")):t.Flickity=n(t.Flickity,t.fizzyUIUtils)}(window,function(t,n){"use strict";return t.createMethods.push("_createSync"),t.prototype._createSync=function(){this.syncers={};var t=this.options.sync;if(this.on("destroy",this.unsyncAll),t){var n=this;setTimeout(function(){n.sync(t)})}},t.prototype.sync=function(i){i=n.getQueryElement(i);var e=t.data(i);e&&(this._syncCompanion(e),e._syncCompanion(this))},t.prototype._syncCompanion=function(t){var n=this;function i(){var i=n.selectedIndex;t.selectedIndex!=i&&t.select(i)}this.on("select",i),this.syncers[t.guid]={flickity:t,listener:i}},t.prototype.unsync=function(i){i=n.getQueryElement(i);var e=t.data(i);this._unsync(e)},t.prototype._unsync=function(t){t&&(this._unsyncCompanion(t),t._unsyncCompanion(this))},t.prototype._unsyncCompanion=function(t){var n=t.guid,i=this.syncers[n];this.off("select",i.listener),delete this.syncers[n]},t.prototype.unsyncAll=function(){for(var t in this.syncers){var n=this.syncers[t];this._unsync(n.flickity)}},t});

})();
(function vendorSticky() {
  /**
    stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
    @version v3.7.8
    @link https://github.com/yowainwright/stickybits#readme
    @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
    @license MIT
  **/
  !function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t=t||self).stickybits=s()}(this,function(){"use strict";function b(){return(b=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var e=function(){function t(t,s){var e=this,i=void 0!==s?s:{};this.version="3.7.8",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:i.customStickyChangeNumber||null,noStyles:i.noStyles||!1,stickyBitStickyOffset:i.stickyBitStickyOffset||0,parentClass:i.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof i.scrollEl?document.querySelector(i.scrollEl):i.scrollEl||window,stickyClass:i.stickyClass||"js-is-sticky",stuckClass:i.stuckClass||"js-is-stuck",stickyChangeClass:i.stickyChangeClass||"js-is-sticky--change",useStickyClasses:i.useStickyClasses||!1,useFixed:i.useFixed||!1,useGetBoundingClientRect:i.useGetBoundingClientRect||!1,verticalPosition:i.verticalPosition||"top",applyStyle:i.applyStyle||function(t,s){return e.applyStyle(t,s)}},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var n=this.props,o=n.positionVal,a=n.verticalPosition,l=n.noStyles,r=n.stickyBitStickyOffset,c="top"!==a||l?"":r+"px",p="fixed"!==o?o:"";this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]);for(var f=0;f<this.els.length;f++){var u,y=this.els[f],h=this.addInstance(y,this.props);this.props.applyStyle({styles:((u={})[a]=c,u.position=p,u),classes:{}},h),this.manageState(h),this.instances.push(h)}}var s=t.prototype;return s.definePosition=function(){var t;if(this.props.useFixed)t="fixed";else{for(var s=["","-o-","-webkit-","-moz-","-ms-"],e=document.head.style,i=0;i<s.length;i+=1)e.position=s[i]+"sticky";t=e.position?e.position:"fixed",e.position=""}return t},s.addInstance=function(t,s){var e=this,i={el:t,parent:t.parentNode,props:s};if("fixed"===s.positionVal||s.useStickyClasses){this.isWin=this.props.scrollEl===window;var n=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);this.computeScrollOffsets(i),this.toggleClasses(i.parent,"",s.parentClass),i.state="default",i.stateChange="default",i.stateContainer=function(){return e.manageState(i)},n.addEventListener("scroll",i.stateContainer)}return i},s.getClosestParent=function(t,s){var e=s,i=t;if(i.parentElement===e)return e;for(;i.parentElement!==e;)i=i.parentElement;return e},s.getTopPosition=function(t){if(this.props.useGetBoundingClientRect)return t.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);for(var s=0;s=t.offsetTop+s,t=t.offsetParent;);return s},s.computeScrollOffsets=function(t){var s=t,e=s.props,i=s.el,n=s.parent,o=!this.isWin&&"fixed"===e.positionVal,a="bottom"!==e.verticalPosition,l=o?this.getTopPosition(e.scrollEl):0,r=o?this.getTopPosition(n)-l:this.getTopPosition(n),c=null!==e.customStickyChangeNumber?e.customStickyChangeNumber:i.offsetHeight,p=r+n.offsetHeight;s.offset=o?0:l+e.stickyBitStickyOffset,s.stickyStart=a?r-s.offset:0,s.stickyChange=s.stickyStart+c,s.stickyStop=a?p-(i.offsetHeight+s.offset):p-window.innerHeight},s.toggleClasses=function(t,s,e){var i=t,n=i.className.split(" ");e&&-1===n.indexOf(e)&&n.push(e);var o=n.indexOf(s);-1!==o&&n.splice(o,1),i.className=n.join(" ")},s.manageState=function(r){function t(t){t()}var c=this,p=r,f=p.props,s=p.state,e=p.stateChange,i=p.stickyStart,n=p.stickyChange,o=p.stickyStop,u=f.positionVal,a=f.scrollEl,y=f.stickyClass,h=f.stickyChangeClass,d=f.stuckClass,g=f.verticalPosition,l="bottom"!==g,k=f.applyStyle,m=f.noStyles,v=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||t,C=this.isWin?window.scrollY||window.pageYOffset:a.scrollTop,S=l&&C<=i&&("sticky"===s||"stuck"===s),w=o<=C&&"sticky"===s;i<C&&C<o&&("default"===s||"stuck"===s)?p.state="sticky":S?p.state="default":w&&(p.state="stuck");var x=n<=C&&C<=o;C<n/2||o<C?p.stateChange="default":x&&(p.stateChange="sticky"),s===p.state&&e===p.stateChange||v(function(){var t,s,e,i,n,o,a={sticky:{styles:((t={position:u,top:"",bottom:""})[g]=f.stickyBitStickyOffset+"px",t),classes:((s={})[y]=!0,s)},default:{styles:((e={})[g]="",e),classes:{}},stuck:{styles:b(((i={})[g]="",i),"fixed"===u&&!m||!c.isWin?{position:"absolute",top:"",bottom:"0"}:{}),classes:((n={})[d]=!0,n)}};"fixed"===u&&(a.default.styles.position="");var l=a[p.state];l.classes=((o={})[d]=!!l.classes[d],o[y]=!!l.classes[y],o[h]=x,o),k(l,r)})},s.applyStyle=function(t,s){var e=t.styles,i=t.classes,n=s.el,o=s.props,a=n.style,l=o.noStyles,r=n.className.split(" ");for(var c in i){if(i[c])-1===r.indexOf(c)&&r.push(c);else{var p=r.indexOf(c);-1!==p&&r.splice(p,1)}}if(n.className=r.join(" "),e.position&&(a.position=e.position),!l)for(var f in e)a[f]=e[f]},s.update=function(e){var i=this;return void 0===e&&(e=null),this.instances.forEach(function(t){if(i.computeScrollOffsets(t),e)for(var s in e)t.props[s]=e[s]}),this},s.removeInstance=function(t){var s,e,i=t.el,n=t.props;this.applyStyle({styles:((s={position:""})[n.verticalPosition]="",s),classes:((e={})[n.stickyClass]="",e[n.stuckClass]="",e)},t),this.toggleClasses(i.parentNode,n.parentClass)},s.cleanup=function(){for(var t=0;t<this.instances.length;t+=1){var s=this.instances[t];s.stateContainer&&s.props.scrollEl.removeEventListener("scroll",s.stateContainer),this.removeInstance(s)}this.manageState=!1,this.instances=[]},t}();return function(t,s){return new e(t,s)}});
})();
(function vendorPhotoSwipe(){
/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&g<8&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(i<4.4&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;n<4;n++){c=m[n];for(var o=0;o<3;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma=function(){return{x:0,y:0}},na=ma(),oa=ma(),pa=ma(),qa={},ra=0,sa={},ta=ma(),ua=0,va=!0,wa=[],xa={},ya=!1,za=function(a,b){e.extend(f,b.publicMethods),wa.push(a)},Aa=function(a){var b=ac();return a>b-1?a-b:a<0?b+a:a},Ba={},Ca=function(a,b){return Ba[a]||(Ba[a]=[]),Ba[a].push(b)},Da=function(a){var b=Ba[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Ea=function(){return(new Date).getTime()},Fa=function(a){ja=a,f.bg.style.opacity=a*i.bgOpacity},Ga=function(a,b,c,d,e){(!ya||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ha=function(a){ea&&(a&&(s>f.currItem.fitRatio?ya||(mc(f.currItem,!1,!0),ya=!0):ya&&(mc(f.currItem),ya=!1)),Ga(ea,pa.x,pa.y,s))},Ia=function(a){a.container&&Ga(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ja=function(a,b){b[E]=u+a+"px, 0px"+v},Ka=function(a,b){if(!i.loop&&b){var c=m+(ta.x*ra-a)/ta.x,d=Math.round(a-tb.x);(c<0&&d>0||c>=ac()-1&&d<0)&&(a=tb.x+d*i.mainScrollEndFriction)}tb.x=a,Ja(a,n)},La=function(a,b){var c=ub[a]-sa[a];return oa[a]+na[a]+c-c*(b/t)},Ma=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Na=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Oa=null,Pa=function(){Oa&&(e.unbind(document,"mousemove",Pa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Da("mouseUsed")),Oa=setTimeout(function(){Oa=null},100)},Qa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Pa),e.bind(window,"resize scroll orientationchange",f),Da("bindEvents")},Ra=function(){e.unbind(window,"resize scroll orientationchange",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Pa),N.transform&&e.unbind(f.scrollWrap,"click",f),V&&e.unbind(window,p,f),clearTimeout(O),Da("unbindEvents")},Sa=function(a,b){var c=ic(f.currItem,qa,a);return b&&(da=c),c},Ta=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ua=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Va=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=La(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]&&(c[a]=b.max[a],!0))},Wa=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ja=function(a,b){b.left=a+"px"},Ia=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ha=function(){if(ea){var a=ea,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=pa.x+"px",a.top=pa.y+"px"}}},Xa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Ya=function(a){a&&(Y||X||fa||T)&&(a.preventDefault(),a.stopPropagation())},Za=function(){f.setScrollOffset(0,e.getScrollY())},$a={},_a=0,ab=function(a){$a[a]&&($a[a].raf&&I($a[a].raf),_a--,delete $a[a])},bb=function(a){$a[a]&&ab(a),$a[a]||(_a++,$a[a]={})},cb=function(){for(var a in $a)$a.hasOwnProperty(a)&&ab(a)},db=function(a,b,c,d,e,f,g){var h,i=Ea();bb(a);var j=function(){if($a[a]){if(h=Ea()-i,h>=d)return ab(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),$a[a].raf=H(j)}};j()},eb={shout:Da,listen:Ca,viewportSize:qa,options:i,isMainScrollAnimating:function(){return fa},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return aa},setScrollOffset:function(a,b){sa.x=a,M=sa.y=b,Da("updateScrollOffset",sa)},applyZoomPan:function(a,b,c,d){pa.x=b,pa.y=c,s=a,Ha(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Wa(),r={resize:f.updateSize,orientationchange:function(){clearTimeout(O),O=setTimeout(function(){qa.x!==f.scrollWrap.clientWidth&&f.updateSize()},500)},scroll:Za,keydown:Xa,click:Ya};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<wa.length;c++)f["init"+wa[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Da("firstUpdate"),m=m||i.index||0,(isNaN(m)||m<0||m>=ac())&&(m=0),f.currItem=_b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(va=!1),a.setAttribute("aria-hidden","false"),i.modal&&(va?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Da("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ua=null,c=0;c<h;c++)Ja((c+o)*ta.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ca("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Qa()}),f.setContent(y[1],m),f.updateCurrItem(),Da("afterInit"),va||(w=setInterval(function(){_a||V||aa||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Da("close"),Ra(),cc(f.currItem,null,!0,f.destroy))},destroy:function(){Da("destroy"),Xb&&clearTimeout(Xb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),zb(),cb(),Ba=null},panTo:function(a,b,c){c||(a>da.min.x?a=da.min.x:a<da.max.x&&(a=da.max.x),b>da.min.y?b=da.min.y:b<da.max.y&&(b=da.max.y)),pa.x=a,pa.y=b,Ha()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=Aa(a);var b=a-m;ua=b,m=a,f.currItem=_b(m),ra-=b,Ka(ta.x*ra),cb(),fa=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Da("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];ea=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else ea=null;da=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,pa.x=da.center.x,pa.y=da.center.y,a&&Da("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;a<h;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ua){var b,c=Math.abs(ua);if(!(a&&c<2)){f.currItem=_b(m),ya=!1,Da("beforeChange",ua),c>=h&&(o+=ua+(ua>0?-h:h),c=h);for(var d=0;d<c;d++)ua>0?(b=y.shift(),y[h-1]=b,o++,Ja((o+2)*ta.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ja(o*ta.x,b.el.style),f.setContent(b,m+c-d-1-1));if(ea&&1===Math.abs(ua)){var e=_b(z);e.initialZoomLevel!==s&&(ic(e,qa),mc(e),Ia(e))}ua=0,f.updateCurrZoomItem(),z=m,Da("afterChange")}}},updateSize:function(b){if(!va&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&xa.x===window.innerWidth&&xa.y===window.innerHeight)return;xa.x=window.innerWidth,xa.y=window.innerHeight,a.style.height=xa.y+"px"}if(qa.x=f.scrollWrap.clientWidth,qa.y=f.scrollWrap.clientHeight,Za(),ta.x=qa.x+Math.round(qa.x*i.spacing),ta.y=qa.y,Ka(ta.x*ra),Da("beforeResize"),void 0!==o){for(var d,g,j,k=0;k<h;k++)d=y[k],Ja((k+o)*ta.x,d.el.style),j=m+k-1,i.loop&&ac()>2&&(j=Aa(j)),g=_b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):d.index===-1&&j>=0&&f.setContent(d,j),g&&g.container&&(ic(g,qa),mc(g),Ia(g));x=!1}t=s=f.currItem.initialZoomLevel,da=f.currItem.bounds,da&&(pa.x=da.center.x,pa.y=da.center.y,Ha(!0)),Da("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,ub.x=Math.abs(b.x)-pa.x,ub.y=Math.abs(b.y)-pa.y,Ma(oa,pa));var g=Sa(a,!1),h={};Va("x",g,h,a),Va("y",g,h,a);var i=s,j={x:pa.x,y:pa.y};Na(h);var k=function(b){1===b?(s=a,pa.x=h.x,pa.y=h.y):(s=(a-i)*b+i,pa.x=(h.x-j.x)*b+j.x,pa.y=(h.y-j.y)*b+j.y),f&&f(b),Ha(1===b)};c?db("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},fb=30,gb=10,hb={},ib={},jb={},kb={},lb={},mb=[],nb={},ob=[],pb={},qb=0,rb=ma(),sb=0,tb=ma(),ub=ma(),vb=ma(),wb=function(a,b){return a.x===b.x&&a.y===b.y},xb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},yb=function(a,b){return pb.x=Math.abs(a.x-b.x),pb.y=Math.abs(a.y-b.y),Math.sqrt(pb.x*pb.x+pb.y*pb.y)},zb=function(){Z&&(I(Z),Z=null)},Ab=function(){V&&(Z=H(Ab),Qb())},Bb=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Cb=function(a,b){return!(!a||a===document)&&(!(a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(b(a)?a:Cb(a.parentNode,b)))},Db={},Eb=function(a,b){return Db.prevent=!Cb(a.target,i.isClickableElement),Da("preventDragEvent",a,b,Db),Db.prevent},Fb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Gb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Hb=function(a,b,c){if(a-Q>50){var d=ob.length>2?ob.shift():{};d.x=b,d.y=c,ob.push(d),Q=a}},Ib=function(){var a=pa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(qa.y/2))},Jb={},Kb={},Lb=[],Mb=function(a){for(;Lb.length>0;)Lb.pop();return F?(la=0,mb.forEach(function(a){0===la?Lb[0]=a:1===la&&(Lb[1]=a),la++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Lb[0]=Fb(a.touches[0],Jb),a.touches.length>1&&(Lb[1]=Fb(a.touches[1],Kb))):(Jb.x=a.pageX,Jb.y=a.pageY,Jb.id="",Lb[0]=Jb),Lb},Nb=function(a,b){var c,d,e,g,h=0,j=pa[a]+b[a],k=b[a]>0,l=tb.x+b.x,m=tb.x-nb.x;return c=j>da.min[a]||j<da.max[a]?i.panEndFriction:1,j=pa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(ea?"h"!==ga||"x"!==a||X||(k?(j>da.min[a]&&(c=i.panEndFriction,h=da.min[a]-j,d=da.min[a]-oa[a]),(d<=0||m<0)&&ac()>1?(g=l,m<0&&l>nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j)):(j<da.max[a]&&(c=i.panEndFriction,h=j-da.max[a],d=oa[a]-da.max[a]),(d<=0||m>0)&&ac()>1?(g=l,m>0&&l<nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j))):g=l,"x"!==a)?void(fa||$||s>f.currItem.fitRatio&&(pa[a]+=b[a]*c)):(void 0!==g&&(Ka(g,!0),$=g!==nb.x),da.min.x!==da.max.x&&(void 0!==e?pa.x=e:$||(pa.x+=b.x*c)),void 0!==g)},Ob=function(a){if(!("mousedown"===a.type&&a.button>0)){if($b)return void a.preventDefault();if(!U||"mousedown"!==a.type){if(Eb(a,!0)&&a.preventDefault(),Da("pointerDown"),F){var b=e.arraySearch(mb,a.pointerId,"id");b<0&&(b=mb.length),mb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Mb(a),d=c.length;_=null,cb(),V&&1!==d||(V=ha=!0,e.bind(window,p,f),S=ka=ia=T=$=Y=W=X=!1,ga=null,Da("firstTouchStart",c),Ma(oa,pa),na.x=na.y=0,Ma(kb,c[0]),Ma(lb,kb),nb.x=ta.x*ra,ob=[{x:kb.x,y:kb.y}],Q=P=Ea(),Sa(s,!0),zb(),Ab()),!aa&&d>1&&!fa&&!$&&(t=s,X=!1,aa=W=!0,na.y=na.x=0,Ma(oa,pa),Ma(hb,c[0]),Ma(ib,c[1]),Gb(hb,ib,vb),ub.x=Math.abs(vb.x)-pa.x,ub.y=Math.abs(vb.y)-pa.y,ba=ca=yb(hb,ib))}}},Pb=function(a){if(a.preventDefault(),F){var b=e.arraySearch(mb,a.pointerId,"id");if(b>-1){var c=mb[b];c.x=a.pageX,c.y=a.pageY}}if(V){var d=Mb(a);if(ga||Y||aa)_=d;else if(tb.x!==ta.x*ra)ga="h";else{var f=Math.abs(d[0].x-kb.x)-Math.abs(d[0].y-kb.y);Math.abs(f)>=gb&&(ga=f>0?"h":"v",_=d)}}},Qb=function(){if(_){var a=_.length;if(0!==a)if(Ma(hb,_[0]),jb.x=hb.x-kb.x,jb.y=hb.y-kb.y,aa&&a>1){if(kb.x=hb.x,kb.y=hb.y,!jb.x&&!jb.y&&wb(_[1],ib))return;Ma(ib,_[1]),X||(X=!0,Da("zoomGestureStarted"));var b=yb(hb,ib),c=Vb(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ka=!0);var d=1,e=Ta(),g=Ua();if(c<e)if(i.pinchToClose&&!ka&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Fa(j),Da("onPinchClose",j),ia=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);d<0&&(d=0),ba=b,Gb(hb,ib,rb),na.x+=rb.x-vb.x,na.y+=rb.y-vb.y,Ma(vb,rb),pa.x=La("x",c),pa.y=La("y",c),S=c>s,s=c,Ha()}else{if(!ga)return;if(ha&&(ha=!1,Math.abs(jb.x)>=gb&&(jb.x-=_[0].x-lb.x),Math.abs(jb.y)>=gb&&(jb.y-=_[0].y-lb.y)),kb.x=hb.x,kb.y=hb.y,0===jb.x&&0===jb.y)return;if("v"===ga&&i.closeOnVerticalDrag&&!Bb()){na.y+=jb.y,pa.y+=jb.y;var k=Ib();return T=!0,Da("onVerticalDrag",k),Fa(k),void Ha()}Hb(Ea(),hb.x,hb.y),Y=!0,da=f.currItem.bounds;var l=Nb("x",jb);l||(Nb("y",jb),Na(pa),Ha())}}},Rb=function(a){if(N.isOldAndroid){if(U&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(U),U=setTimeout(function(){U=0},600))}Da("pointerUp"),Eb(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(mb,a.pointerId,"id");if(c>-1)if(b=mb.splice(c,1)[0],navigator.msPointerEnabled){var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}else b.type=a.pointerType||"mouse"}var g,h=Mb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return _=null,!0;1===j&&Ma(lb,h[0]),0!==j||ga||fa||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Da("touchRelease",a,b));var k=-1;if(0===j&&(V=!1,e.unbind(window,p,f),zb(),aa?k=0:sb!==-1&&(k=Ea()-sb)),sb=1===j?Ea():-1,g=k!==-1&&k<150?"zoom":"swipe",aa&&j<2&&(aa=!1,1===j&&(g="zoomPointerUp"),Da("zoomGestureEnded")),_=null,Y||X||fa||T)if(cb(),R||(R=Sb()),R.calculateSwipeSpeed("x"),T){var l=Ib();if(l<i.verticalDragRange)f.close();else{var m=pa.y,n=ja;db("verticalDrag",0,1,300,e.easing.cubic.out,function(a){pa.y=(f.currItem.initialPosition.y-m)*a+m,Fa((1-n)*a+n),Ha()}),Da("onVerticalDrag",1)}}else{if(($||fa)&&0===j){var o=Ub(g,R);if(o)return;g="zoomPointerUp"}if(!fa)return"swipe"!==g?void Wb():void(!$&&s>f.currItem.fitRatio&&Tb(R))}},Sb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){ob.length>1?(a=Ea()-Q+50,b=ob[ob.length-2][d]):(a=Ea()-P,b=lb[d]),c.lastFlickOffset[d]=kb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(pa[a]>da.min[a]?c.backAnimDestination[a]=da.min[a]:pa[a]<da.max[a]&&(c.backAnimDestination[a]=da.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,db("bounceZoomPan"+a,pa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){pa[a]=b,Ha()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,pa[a]+=c.distanceOffset[a])},panAnimLoop:function(){if($a.zoomPan&&($a.zoomPan.raf=H(c.panAnimLoop),c.now=Ea(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ha(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05))return pa.x=Math.round(pa.x),pa.y=Math.round(pa.y),Ha(),void ab("zoomPan")}};return c},Tb=function(a){return a.calculateSwipeSpeed("y"),da=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(bb("zoomPan"),a.lastNow=Ea(),void a.panAnimLoop())},Ub=function(a,b){var c;fa||(qb=m);var d;if("swipe"===a){var g=kb.x-lb.x,h=b.lastFlickDist.x<10;g>fb&&(h||b.lastFlickOffset.x>20)?d=-1:g<-fb&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,m<0?(m=i.loop?ac()-1:0,j=!0):m>=ac()&&(m=i.loop?0:ac()-1,j=!0),j&&!i.loop||(ua+=d,ra-=d,c=!0));var k,l=ta.x*ra,n=Math.abs(l-tb.x);return c||l>tb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,qb===m&&(c=!1),fa=!0,Da("mainScrollAnimStart"),db("mainScroll",tb.x,l,k,e.easing.cubic.out,Ka,function(){cb(),fa=!1,qb=-1,(c||qb!==m)&&f.updateCurrItem(),Da("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Vb=function(a){return 1/ca*a*t},Wb=function(){var a=s,b=Ta(),c=Ua();s<b?a=b:s>c&&(a=c);var d,g=1,h=ja;return ia&&!S&&!ka&&s<b?(f.close(),!0):(ia&&(d=function(a){Fa((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};za("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.msPointerEnabled?a("MSPointer","Down","Move","Up","Cancel"):a("pointer","down","move","up","cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Ob,r[B]=Pb,r[C]=Rb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Xb,Yb,Zb,$b,_b,ac,bc,cc=function(b,c,d,g){Xb&&clearTimeout(Xb),$b=!0,Zb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){ab("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Fa(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Da("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),$b=!1};if(!j||!h||void 0===h.x)return Da("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),a.style.opacity=d?0:1,Fa(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,pa.x=h.x,pa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ha()),bb("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Xb=setTimeout(function(){if(Da("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:pa.x,y:pa.y},l=s,m=ja,n=function(b){1===b?(s=f,pa.x=h.x,pa.y=h.y-M):(s=(f-l)*b+l,pa.x=(h.x-i.x)*b+i.x,pa.y=(h.y-M-i.y)*b+i.y),Ha(),g?a.style.opacity=1-b:Fa(m-b*m)};c?db("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Xb=setTimeout(k,j+20))}else s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),Fa(1),g?a.style.opacity=1:Fa(1),Xb=setTimeout(k,j+20)},d?25:90)};n()},dc={},ec=[],fc={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Yb.length}},gc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},hc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((dc.x-b)/2),d.center.y=Math.round((dc.y-c)/2)+a.vGap.top,d.max.x=b>dc.x?Math.round(dc.x-b):d.center.x,d.max.y=c>dc.y?Math.round(dc.y-c)+a.vGap.top:d.center.y,d.min.x=b>dc.x?0:d.center.x,d.min.y=c>dc.y?a.vGap.top:d.center.y},ic=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Da("parseVerticalMargin",a)),dc.x=b.x,dc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=dc.x/a.w,f=dc.y/a.h;a.fitRatio=e<f?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=gc())}if(!c)return;return hc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=gc(),a.initialPosition=a.bounds.center,a.bounds},jc=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,mc(b,d,b===f.currItem&&ya),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},kc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},lc=function(a,b){if(a.src&&a.loadError&&a.container)return b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0},mc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},nc=function(){if(ec.length){for(var a,b=0;b<ec.length;b++)a=ec[b],a.holder.index===a.index&&jc(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);ec=[]}};za("Controller",{publicMethods:{lazyLoadItem:function(a){a=Aa(a);var b=_b(a);b&&(!b.loaded&&!b.loading||x)&&(Da("gettingData",a,b),b.src&&kc(b))},initController:function(){e.extend(i,fc,!0),f.items=Yb=c,_b=f.getItemAt,ac=i.getNumItemsFn,bc=i.loop,ac()<3&&(i.loop=!1),Ca("beforeChange",function(a){var b,c=i.preload,d=null===a||a>=0,e=Math.min(c[0],ac()),g=Math.min(c[1],ac());for(b=1;b<=(d?g:e);b++)f.lazyLoadItem(m+b);for(b=1;b<=(d?e:g);b++)f.lazyLoadItem(m-b)}),Ca("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ca("mainScrollAnimComplete",nc),Ca("initialZoomInEnd",nc),Ca("destroy",function(){for(var a,b=0;b<Yb.length;b++)a=Yb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);ec=null})},getItemAt:function(a){return a>=0&&(void 0!==Yb[a]&&Yb[a])},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=Aa(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Da("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),lc(g),ic(g,qa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,mc(g,d),jc(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(lc(c,!0))return c.loadComplete=c.img=null,ic(c,qa),Ia(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!$b&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(fa||$b)?ec.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):jc(b,c,h,c.img,fa||$b,!0)}c.loadComplete=null,c.img=null,Da("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),mc(g,l),h.appendChild(l),g.placeholder=l}g.loading||kc(g),f.allowProgressiveImg()&&(!Zb&&N.transform?ec.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):jc(b,g,h,g.img,!0,!0))}Zb||b!==m?Ia(g):(ea=h.style,cc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var oc,pc={},qc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};za("Tap",{publicMethods:{initTap:function(){Ca("firstTouchStart",f.onTapStart),Ca("touchRelease",f.onTapRelease),Ca("destroy",function(){pc={},oc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(oc),oc=null)},onTapRelease:function(a,b){if(b&&!Y&&!W&&!_a){var c=b;if(oc&&(clearTimeout(oc),oc=null,xb(c,pc)))return void Da("doubleTap",c);if("mouse"===b.type)return void qc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void qc(a,b);Ma(pc,c),oc=setTimeout(function(){qc(a,b),oc=null},300)}}}});var rc;za("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ca("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){rc={};var c="wheel mousewheel DOMMouseScroll";Ca("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ca("unbindEvents",function(){rc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),s<1?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ca("resize",g),Ca("afterChange",g),Ca("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ca("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||_a||V?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),rc.x=0,"deltaX"in a)1===a.deltaMode?(rc.x=18*a.deltaX,rc.y=18*a.deltaY):(rc.x=a.deltaX,rc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(rc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?rc.y=-.16*a.wheelDeltaY:rc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;rc.y=a.detail}Sa(s,!0);var b=pa.x-rc.x,c=pa.y-rc.y;(i.modal||b<=da.min.x&&b>=da.max.x&&c<=da.min.y&&c>=da.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:qa.x/2+sa.x,y:qa.y/2+sa.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec={history:!0,galleryUID:1},Fc=function(){return Cc.hash.substring(1)},Gc=function(){sc&&clearTimeout(sc),uc&&clearTimeout(uc)},Hc=function(){var a=Fc(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Yb.length;c++)if(Yb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Ic=function(){if(uc&&clearTimeout(uc),_a||V)return void(uc=setTimeout(Ic,500));vc?clearTimeout(tc):vc=!0;var a=m+1,b=_b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=yc+"&gid="+i.galleryUID+"&pid="+a;zc||Cc.hash.indexOf(c)===-1&&(Bc=!0);var d=Cc.href.split("#")[0]+"#"+c;Dc?"#"+c!==window.location.hash&&history[zc?"replaceState":"pushState"]("",document.title,d):zc?Cc.replace(d):Cc.hash=c,zc=!0,tc=setTimeout(function(){vc=!1},60)};za("History",{publicMethods:{initHistory:function(){if(e.extend(i,Ec,!0),i.history){Cc=window.location,Bc=!1,Ac=!1,zc=!1,yc=Fc(),Dc="pushState"in history,yc.indexOf("gid=")>-1&&(yc=yc.split("&gid=")[0],yc=yc.split("?gid=")[0]),Ca("afterChange",f.updateURL),Ca("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){xc=!0,Ac||(Bc?history.back():yc?Cc.hash=yc:Dc?history.pushState("",document.title,Cc.pathname+Cc.search):Cc.hash=""),Gc()};Ca("unbindEvents",function(){l&&a()}),Ca("destroy",function(){xc||a()}),Ca("firstUpdate",function(){m=Hc().pid});var b=yc.indexOf("pid=");b>-1&&(yc=yc.substring(0,b),"&"===yc.slice(-1)&&(yc=yc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Fc()===yc?(Ac=!0,void f.close()):void(vc||(wc=!0,f.goTo(Hc().pid),wc=!1))},updateURL:function(){Gc(),wc||(zc?sc=setTimeout(Ic,800):Ic())}}}),e.extend(f,eb)};return a});

/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),!!c.href&&(!!c.hasAttribute("download")||(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1))},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&a<.95?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&b<.9?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;g<f;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
})();
(function vendorLodash(){
  // lodash.core.min.js

  /**
   * @license
   * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
   * Build: `lodash core -o ./dist/lodash.core.js`
   */
  ;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
  }function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
  u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
  }return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
  f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
    var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
      !r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
  return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
  })){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
    var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
      return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
  for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
  }function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
    var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
  thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
      return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
      n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
      n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
  return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
  }),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
      r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
      return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
      t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
  a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);
})();
(function vendorCookies(){
  !function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});
})();

var Events = new EventEmitter3();
Events.trigger = Events.emit; // alias

// Youtube API callback
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  VideoTT.playerBuild();
  theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
  WAU.Video.loadVideos('youtube');
}

window.WAU = window.WAU || {};

WAU.Video = (function () {
  var videos = {};

  var hosts = {
    html5: 'html5',
    youtube: 'youtube'
  };

  function init(videoContainer, sectionId, flkty, videoAudio) {
    var videoElement = videoContainer.querySelector('iframe');

    if (!videoElement) {
      var videoElement = videoContainer.querySelector('video');
    }

    if (!videoElement) {
      return;
    }

    const mediaId = videoContainer.dataset.videoId;

    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this, flkty, videoAudio);
      }
    };

    var video = videos[mediaId];

    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: 'video-ui',
            version: '1.0',
            onLoad: setupPlyrVideos
          }
        ]);
        theme.LibraryLoader.load('plyrShopifyStyles');
        break;
      case hosts.youtube:
        theme.LibraryLoader.load('youtubeSdk', setupYouTubeVideos);
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }

    loadVideos(hosts.html5);
  }

  function setupYouTubeVideos() {

    if (!window.YT.Player) return;

    loadVideos(hosts.youtube);
  }

  function createPlayer(video, flkty, videoAudio) {

    if (video.player) {
      return;
    }

    switch (video.host) {
      case hosts.html5:

        if ( videoAudio == 'off' ) {
          var muted = true;
        } else {
          var muted = false;
        }

        video.player = new Shopify.Plyr(video.element, {
          muted: muted,
          hideControlsOnPause: false,
          autoplay: false,
          settings: {loop: false},
          tooltips: { controls: true, seek: true }
        });
        video.player.on('play', function() {
          flkty.stopPlayer();
        });
        video.player.on('ended', function() {
          flkty.playPlayer();
        });

        flkty.on( 'change', function( index ) {
          video.player.pause();
        });

        break;
      case hosts.youtube:
        var videoId = video.container.dataset.videoId;

        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: onPlayerStateChange,
            onReady: onPlayerReady
          }
        });

        function onPlayerReady(event) {
          if ( videoAudio == 'off' ) {
            event.target.mute();
          }
          flkty.on( 'change', function( index ) {
            event.target.stopVideo();
          });
        }

        function onPlayerStateChange(event) {
           if (event.data == 1) {
             flkty.stopPlayer();
           }
           if (event.data == 0) {
             flkty.playPlayer();
           }
         }
        break;
    }
  }

  function hostFromVideoElement(video) {

    if (video.tagName === 'VIDEO') {
      return hosts.html5;
    }

    if (video.tagName === 'IFRAME') {
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ) {
        return hosts.youtube;
      }
    }
    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) continue;

        if (video.host === hosts.html5) {
          video.element.setAttribute('controls', 'controls');
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.sectionId === sectionId) {
          if (video.player) video.player.destroy();
          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };
})();

WAU.Slideout = (function () {

	/*
	 * Elements
	 */
	var wrapper = undefined;

	/*
	 * @description - Makes sure that the ESC Key works to close the menus.
	 */
	document.addEventListener('keyup', function (event) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeActiveSlideout();
		}
	});

	document.addEventListener('click', function (event) {
		if (event.target === document.querySelector(".js-slideout-overlay")) {
			closeActiveSlideout();
		}
	});

	/*
	 * @description - Closes the currently active slide.
	 */
	function closeActiveSlideout() {
			// Find the open slideout.
			const activeSlideout = document.querySelector('.slideout--active');
			const activeSlideoutName = activeSlideout.getAttribute('data-wau-slideout');
			const opener = document.querySelector('.js-slideout-open[data-wau-slideout-target="' + activeSlideoutName + '"]');
			const direction = opener.getAttribute('data-slideout-direction');
			close(direction, opener);
	}

	/*
	 * @description - Checks if the slideout is currently open or not.
	 * @return Boolean
	 */
	function isOpen() {
		wrapper = document.querySelector(".js-slideout-toggle-wrapper");
		return wrapper.classList.contains("slideout-left--open") || wrapper.classList.contains("slideout-right--open");
	}

	/*
	 * @description - Open a specific slideout in a specific direction.
	 * @param direction:String - the drction to open the slideout in.
	 * @param targetSlideoutEl:Node - The slideout element that will be opened.
	 */
	function open(direction, targetSlideoutEl, opener) {
		wrapper.classList.add("slideout-" + direction + "--open");
		wrapper.classList.remove("slideout-" + direction + "--closed");
		targetSlideoutEl.classList.add('slideout--active');

		opener.setAttribute("aria-expanded", "true");

    // Fix body wrapper so no scrolling on mobile
    let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);

    // Set tabindex so it will tab slideout
    targetSlideoutEl.querySelectorAll('*').forEach((item, i) => {
      item.setAttribute('tabIndex', '0');
    });

    wrapper.style.overflow = 'hidden';
    wrapper.style.position = 'fixed';
    wrapper.style.top = `-${scrollPosition}px`;
    wrapper.style.width = '100%';
	}

	/*
	 * @description - Closes all slideouts. Puts a11y focus back on the original opener.
	 * @param opener:Node - the opener element.
	 */
	function close(direction, openerEl) {
		const activeOpenSlideouts = document.querySelectorAll('.slideout--active');
		const openers = document.querySelectorAll(".js-slideout-open");
		const closers = document.querySelectorAll(".js-slideout-close");

		// Close the slideout.
		wrapper.classList.remove("slideout-" + direction + "--open");
		wrapper.classList.add("slideout-" + direction + "--closed");

		// Close all active drawers. This is incase there is more than 1 slide on a direction.
		activeOpenSlideouts.forEach(function (activeSlideoutDrawer) {
			activeSlideoutDrawer.classList.remove('slideout--active');

      // Set tabindex so it skips hidden slideout
      activeSlideoutDrawer.querySelectorAll('*').forEach((item, i) => {
        item.setAttribute('tabIndex', '-1');
      });
		});

		// Makes sure aria-expanded false is added to all the open and close buttons.
		openers.forEach(function (opener) {
			opener.setAttribute('aria-expanded', 'false');
		});

		closers.forEach(function (closer) {
			closer.setAttribute('aria-expanded', 'false');
		});

		openerEl.focus();

    // Fix body wrapper so no scrolling on mobile
    let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);

    wrapper.style.removeProperty('overflow');
    wrapper.style.removeProperty('position');
    wrapper.style.removeProperty('top');
    wrapper.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
	}

	/*
	 * @description - Closes a specific slideout given the name in data-wau-slideout attribute
	 * @return void
	 */
	function closeByName(name) {
		const closer = document.querySelector('[data-wau-slideout-target="' + name + '"]');
		const direction = closer.getAttribute('data-slideout-direction');
		const opener = document.querySelector('.js-slideout-open[data-wau-slideout-target="' + name + '"]');
		close(direction, opener);
	}

	/*
	 * @description - Opens a specific slideout given the name in data-wau-slideout attribute
	 * @return void
	 */
	function openByName(name) {
		const opener = document.querySelector('[data-wau-slideout-target="' + name + '"]')
		const direction = opener.getAttribute('data-slideout-direction');
		const targetSlideoutEl = document.querySelector('[data-wau-slideout="' + name + '"]');
		open(direction, targetSlideoutEl, opener);
	}

  /*
   * @description - Creates a new close button inside created modal.
   * @param name:String - An explicit name to refer to the modal by on a trigger.
   */
  function createCloser(name, direction) {
    const closeDiv = document.createElement('div');
    const button = document.createElement('button');
    const icon = document.createElement('div');

    closeDiv.classList.add('slideout__trigger--close');
    closeDiv.classList.add('slideout__trigger-'+ name +'__wrapper');
    closeDiv.classList.add('slideout__trigger-general-slideout');

    button.classList.add('slideout__trigger-'+ name);
    button.classList.add('js-slideout-close');
    button.setAttribute('data-slideout-direction', direction);
    button.setAttribute('aria-controls', 'slideout-'+ name);
    button.setAttribute('aria-label', 'Close slideout');
    icon.classList.add('icn-close');
    button.appendChild(icon);

    closeDiv.appendChild(button);

    return closeDiv;
  }

	/*
	 * @description - Creates a new aside element to be used as a slideout.
	 * @param direction:String - the direction that the slideout will open in. "left" or "right"
	 * @param name:String - An explicit name to refer to the slideout by on a trigger.
	 * @param wrapperEl:Node - An element that can be explicitly passed in as the wrapper element.
	 */
	function createSlideoutEl(direction, name, wrapperEl) {

    const aside = document.createElement('aside');
    const innerDiv = document.createElement('div');
    const innerContentDiv = document.createElement('div');
    const opener = document.querySelector('[data-wau-slideout-target="' + name + '"]');
    const content = document.querySelector('[data-wau-slideout-content="' + name + '"]');
    const generatedId = "slideout-" + name;

		wrapperEl = wrapperEl || wrapper;


    // Create outer wrapper
    aside.classList.add('slideout');
    aside.classList.add('slideout__drawer-' + direction);
    aside.setAttribute('data-wau-slideout', name);
    aside.setAttribute('id', generatedId); // setting an id here so that we can set the aria-controls attribute on the opener.

    // Create inner wrapper and move content to it
    innerDiv.classList.add('slideout__inner-wrapper');
    innerDiv.classList.add('slideout__general-slide__wrapper');
    innerContentDiv.innerHTML = content.innerHTML;
    innerContentDiv.classList.add('slideout__inner-content-container');

		// Empty content so no conflict
		content.innerHTML = '';

    // Add close button to Inner
		if ( content.dataset.wauSlideoutButton && content.dataset.wauSlideoutButton == 'true' ) {
			let closeDiv = createCloser(name, direction);
			innerDiv.prepend(closeDiv);
		}

    // Add inner wrapper to outer wrapper
    aside.appendChild(innerDiv);
    innerDiv.appendChild(innerContentDiv);

		opener.setAttribute('aria-controls', generatedId);
		wrapperEl.appendChild(aside);

		return aside;
	}

	/*
	 * @description - Empties inner wrapper of slideout and replaces content with previous content
	 */
	function reloadSlideoutContents(name) {
		const content = document.querySelector('[data-wau-slideout-content="' + name + '"]');
		const drawer = document.querySelector('aside[data-wau-slideout="' + name + '"]');
		const innerWrapper = drawer.querySelector('.slideout__inner-content-container');

		innerWrapper.innerHTML = content.innerHTML;
	}

	/*
	 * @description - Initializes the plugin by adding all of the appropriate event listeners.
	 */
  function init(name) {
 		if (typeof name === "undefined") {
 			console.log("The Slideout must have an associated name.");
 			return;
 		}

 		wrapper = document.querySelector('.js-slideout-toggle-wrapper');

 		const slideoutOpeners = document.querySelectorAll('.js-slideout-open[data-wau-slideout-target="' + name + '"]');

 		let slideoutTargetEl = undefined;

    slideoutOpeners.forEach((slideoutOpener, i) => {
      const slideoutDirection = slideoutOpener.getAttribute('data-slideout-direction');

      if (slideoutOpener) {
        slideoutTargetEl = document.querySelector(`aside[data-wau-slideout=${name}]`);
      }

      if (!slideoutTargetEl) {
        slideoutTargetEl = createSlideoutEl(slideoutDirection, name, wrapper);
      }

			// Trigger event for outside functions to listen and use
			Events.trigger('slideout:active:' + name);

      // Set slideout tabindex no tabbing when closed
      slideoutTargetEl.querySelectorAll('*').forEach((item, i) => {
        item.setAttribute('tabIndex', '-1');
      });

      slideoutOpener.addEventListener('click', function () {
       open(slideoutDirection, slideoutTargetEl, slideoutOpener);
      });

    });

    const slideoutClosers = document.querySelectorAll('.js-slideout-close');

 		slideoutClosers.forEach((slideoutCloser, i) => {
 			const slideoutCloseDirection = slideoutCloser.getAttribute('data-slideout-direction');
 			slideoutCloser.addEventListener('click', function () {
 				close(slideoutCloseDirection, slideoutCloser);
 			});
 		});
 	}


	const privateFunctions = {
		openByName,
		closeByName,
		createSlideoutEl,
		reloadSlideoutContents
	};

	let returnObj = {};

	returnObj.init = init;

	/*
	 * @description - Gives WAU.Slideout external access to the internal functions for use in Shopify Events.
	 */
	Object.keys(privateFunctions).forEach(function (pf) {
		returnObj['_' + pf] = privateFunctions[pf];
	});

	return returnObj;

}());

WAU.Modal = (function () {

	/*
	 * Elements
	 */
	var wrapper = undefined;

	/*
	 * @description - Makes sure that the ESC Key works to close the menus.
	 */
	document.addEventListener('keyup', function (event) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeActiveModal();
		}
	});

	document.addEventListener('click', function (event) {
		if (event.target === document.querySelector(".js-modal-overlay")) {
			closeActiveModal();
		}
	});

	/*
	 * @description - Closes the currently active modal.
	 */
	function closeActiveModal() {
			// Find the open modal.
			const activeModal = document.querySelector('.modal--active');
			const activeModalName = activeModal.getAttribute('data-wau-modal');
      const closer = activeModal.querySelector('.js-modal-close');

      close(closer);
	}

	/*
	 * @description - Checks if the modal is currently open or not.
	 * @return Boolean
	 */
	function isOpen() {
		wrapper = document.querySelector(".js-modal-toggle-wrapper");
		return wrapper.classList.contains("modal--open");
	}

	/*
	 * @description - Open a specific modal.
	 * @param targetSlideoutEl:Node - The modal element that will be opened.
	 */
	function open(targetModalEl, opener) {
    // Fix body wrapper so no scrolling on mobile
    let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);
    wrapper.style.width = '100%';

    // Stop from scrolling to top
    targetModalEl.style.top = `calc(${scrollPosition}px + 10vh)`;

		wrapper.classList.add("modal--open");
		wrapper.classList.remove("modal--closed");
		targetModalEl.classList.add('modal--active');

    // Add specific modal type class
    if ( targetModalEl.getAttribute("data-wau-modal") ) {
      var elClass = targetModalEl.getAttribute("data-wau-modal"),
          elClass = "modal-" + elClass + "--open";
      wrapper.classList.add(elClass);
    }

		opener.setAttribute("aria-expanded", "true");
	}

	/*
	 * @description - Closes all modals. Puts a11y focus back on the original opener.
	 * @param opener:Node - the opener element.
	 */
	function close(openerEl) {
		const activeOpenModals = document.querySelectorAll('.modal--active');
		const openers = document.querySelectorAll(".js-modal-open");
		const closers = document.querySelectorAll(".js-modal-close");

    // Remove content if quickview
    if (openerEl.getAttribute("aria-controls") == 'modal-quickview') {
      document.querySelector('.js-quickview-content').innerHTML = '';
    }

		// Close the Modal.
		wrapper.classList.remove("modal--open");
		wrapper.classList.add("modal--closed");

		// Close all active modals. This is incase there is more than 1..
		activeOpenModals.forEach(function (activeModalDrawer) {
      // Remove specific modal type class
      if ( activeModalDrawer.getAttribute("data-wau-modal") ) {
        var elClass = activeModalDrawer.getAttribute("data-wau-modal"),
            elClass = "modal-" + elClass + "--open";
        wrapper.classList.remove(elClass);
      }

      activeModalDrawer.classList.remove('modal--active');
		});

		// Makes sure aria-expanded false is added to all the open and close buttons.
		openers.forEach(function (opener) {
			opener.setAttribute('aria-expanded', 'false');
		});

		closers.forEach(function (closer) {
			closer.setAttribute('aria-expanded', 'false');
		});

    wrapper.style.removeProperty('overflow');
    wrapper.style.removeProperty('position');
    wrapper.style.removeProperty('padding-right');
    wrapper.style.removeProperty('top');
    wrapper.style.removeProperty('width');
	}

	/*
	 * @description - Closes a specific modal given the name in data-wau-slideout attribute
	 * @return void
	 */
	function closeByName(name) {
		const closer = document.querySelector('[data-wau-modal-target="' + name + '"]');
		const opener = document.querySelector('.js-modal-open[data-wau-modal-target="' + name + '"]');
		close(opener);
	}

	/*
	 * @description - Opens a specific modal given the name in data-wau-slideout attribute
	 * @return void
	 */
	function openByName(name) {
		const opener = document.querySelector('[data-wau-modal-target="' + name + '"]');
		const targetModalEl = document.querySelector('[data-wau-modal="' + name + '"]');

		open(targetModalEl, opener);
	}

  /*
   * @description - Creates a new close button inside created modal.
   * @param name:String - An explicit name to refer to the modal by on a trigger.
   */
  function createCloser(name) {
    const closeDiv = document.createElement('div');
    const button = document.createElement('button');
    const icon = document.createElement('div');

    closeDiv.classList.add('slideout__trigger--close');
		closeDiv.classList.add('slideout__trigger-'+ name +'__wrapper');
    closeDiv.classList.add('slideout__trigger-general-modal__wrapper');

    button.classList.add('slideout__trigger-'+ name);
    button.classList.add('slideout__trigger-general-modal');
    button.classList.add('js-modal-close');
    button.setAttribute('aria-controls', 'modal-'+ name);
    button.setAttribute('aria-label', 'Close modal');
    icon.classList.add('icn-close');
    button.appendChild(icon);

    closeDiv.appendChild(button);

    return closeDiv;
  }

	/*
	 * @description - Creates a new div element to be used as a modal.
	 * @param name:String - An explicit name to refer to the modal by on a trigger.
	 * @param wrapperEl:Node - An element that can be explicitly passed in as the wrapper element.
	 */
	function createModalEl(name, wrapperEl) {
		const div = document.createElement('div');
    const innerDiv = document.createElement('div');
    const innerContentDiv = document.createElement('div');
		const opener = document.querySelector('[data-wau-modal-target="' + name + '"]');
    const content = document.querySelector('[data-wau-modal-content="' + name + '"]');
		const generatedId = "modal-" + name;

		wrapperEl = wrapperEl || wrapper;

    // Create outer wrapper
		div.classList.add('modal');
		div.classList.add('modal__container');
		div.setAttribute('data-wau-modal', name);
		div.setAttribute('id', generatedId); // setting an id here so that we can set the aria-controls attribute on the opener.

    // Create inner wrapper and move content to it
    innerDiv.classList.add('modal__inner-wrapper');
    innerDiv.classList.add('modal__general-modal__wrapper');
    innerContentDiv.innerHTML = content.innerHTML;
    innerContentDiv.classList.add('modal__inner-content-container');

    // Add close button to Inner
    let closeDiv = createCloser(name);
    innerDiv.prepend(closeDiv);

    // Add inner wrapper to outer wrapper
    div.appendChild(innerDiv);
    innerDiv.appendChild(innerContentDiv);

		opener.setAttribute('aria-controls', generatedId);
		wrapperEl.appendChild(div);

		return div;
	}

	/*
	 * @description - Initializes the plugin by adding all of the appropriate event listeners.
	 */
	function init(name) {

		if (typeof name === "undefined") {
			console.log("The Modal must have an associated name.");
			return;
		}

		wrapper = document.querySelector('.js-modal-toggle-wrapper');

		const modalOpeners = document.querySelectorAll('.js-modal-open[data-wau-modal-target="' + name + '"]');

		let modalTargetEl = undefined;

		if (modalOpeners) {
			modalTargetEl = document.querySelector(`div[data-wau-modal=${name}]`);
		}

		if (!modalTargetEl) {
			modalTargetEl = createModalEl(name, wrapper);
		}

    modalOpeners.forEach((modalOpener, i) => {
      modalOpener.addEventListener('click', function() {
        open(modalTargetEl, modalOpener);
      });
    });

    const modalClosers = document.querySelectorAll('.js-modal-close');
    modalClosers.forEach(function(modalCloser) {
      modalCloser.addEventListener('click', function() {
        close(modalCloser);
      });
    });

	}

	const privateFunctions = {
		openByName,
		closeByName,
		createModalEl
	};

	let returnObj = {};

	returnObj.init = init;

	/*
	 * @description - Gives WAU.Slideout external access to the internal functions for use in Shopify Events.
	 */
	Object.keys(privateFunctions).forEach(function (pf) {
		returnObj['_' + pf] = privateFunctions[pf];
	});

	return returnObj;

}());

WAU.Accordion = (function () {

  const classes = {
    show: "is-active",
    open: "js-accordion-is-open",
    mobileNavAccordion: "js-accordion-mobile-nav"
  };

  const selectors = {
    accordion: ".js-accordion",
    accordionItem: '.c-accordion__item',
    accordionLink: ".js-accordion-link",
    accordionHeader: ".js-accordion-header",
    accordionPanel: ".c-accordion__panel"
  };

  const publicAPIs = {};

  /*
   * @description strips class period
   */
  const stripClassPeriod = function(className) {
    if (!className) return;
    return className.split('.')[1];
  }

  /*
   * @description returns class naem
   */
  publicAPIs.getConfigClass = function (className) {
    if (!className) return;
    if (classes[className] && classes[className] != '') {
      return classes[className];
    } else {
      return false;
    }
  };

  /*
   * @description Hides an accordion item
   */
  publicAPIs.hide = function (target) {

    target.setAttribute("aria-expanded", "false");

    const panel = document.querySelector(
      `#${target.getAttribute("aria-controls")}`
    );

    panel.setAttribute("hidden", "");

    panel.classList.remove(classes.show);

    // 350 matches the CSS transition timing
    setTimeout(function(){
      panel.style.display = "none";
    }, 350);
  };


  /*
   * @description Shows an accordion item
   */
  publicAPIs.show = function (target, allowMultiple) {

    const panel = document.querySelector(
      `#${target.getAttribute("aria-controls")}`
    );

    const parentElement = target.closest(panel.getAttribute("data-parent"));

    const allowMultipleFlag = allowMultiple || parentElement
      .hasAttribute("data-accordion-allow-multiple") ? true : false;

    const isMobileNav = parentElement.classList.contains(classes.mobileNavAccordion);

    if (!allowMultipleFlag && panel.hasAttribute("data-parent")) {

      let childSelector = '';

      if (isMobileNav) {
        childSelector = ':scope > li > [aria-expanded="true"]';
      } else {
        childSelector = ':scope > [aria-expanded="true"]';
      }

      if (!childSelector) {
        return;
      }

      const activePanels = target
        .closest(panel.getAttribute("data-parent"))
        .querySelectorAll(
        childSelector
      );

      if (!activePanels) {
        return;
      }

      activePanels.forEach(function (element) {
        publicAPIs.hide(element);
      });
    }

    target.setAttribute("aria-expanded", "true");

    panel.removeAttribute("hidden");

    panel.style.display = "block";

    setTimeout(function(){
      panel.classList.add(classes.show);
    }, 10);

  };

  /*
   * @description Toggle showing and hiding an accordion item
   */
  publicAPIs.toggle = function (target, allowMultiple) {

    if (target.getAttribute("aria-expanded") == "true") {
      publicAPIs.hide(target);
      return;
    } else {
      publicAPIs.show(target, allowMultiple);
    }
  };

  /*
   * @description Initialize function
   */
  publicAPIs.init = function () {

    // Hide add accordion panels
    document.querySelectorAll(`[data-toggle="accordion"]:not(.${classes.open})`).forEach(function(element, index) {
      publicAPIs.hide(element);
    });

    // Add keyboard accessibility events
    document.addEventListener('keydown', function(event) {
      let target = event.target;
      const key = event.code;
      const disablePageScroll = false;
      const pageScrollOptions = disablePageScroll ? {preventScroll: true} : {preventScroll: false};
      const isDropDownArrow = target.classList.contains('dropdown-arrow');

      if (target.classList.contains(stripClassPeriod(selectors.accordionHeader)) ||
          target.classList.contains(stripClassPeriod(selectors.accordionLink)) ||
          isDropDownArrow ) {

        if (key == 'ArrowUp' || key == 'ArrowDown') {

          const isMobile = target.closest(selectors.accordion).classList.contains(classes.mobileNavAccordion) ? true : false;

          const accordionSelector = isMobile ? `:scope > li > ${selectors.accordionLink}` : `:scope > ${selectors.accordionHeader}`;

          const accordions = target.closest(selectors.accordion).querySelectorAll(accordionSelector);

          if (isMobile && isDropDownArrow) {
            target.previousElementSibling.focus(pageScrollOptions);
            return;
          }

          let indexPlace;
          accordions.forEach(function(element, index) {
            if (element == target) {
              indexPlace = index;
            }
          });
          const direction = key == 'PageDown' || key == 'ArrowDown' ? 1 : -1;
          const length = accordions.length;
          const newIndex = (indexPlace + length + direction) % length;

          accordions[newIndex].focus(pageScrollOptions);
        }
      }
    });

    document.addEventListener("click", function (event) {

      const target = event.target.matches('[data-toggle="accordion"]') ? event.target : event.target.closest('[data-toggle="accordion"]');

      if (!target) {
        return false;
      }

      publicAPIs.toggle(target);

      event.preventDefault();
    });
  };

  return publicAPIs;

})();

WAU.ProductGridVideo = {
  init: function init() {
    document.querySelectorAll('.js-bg-video-wrapper').forEach(function(element){
      WAU.ProductGridVideo.initVideo(element);
    });
  },
  initVideo: function initVideo(element) {
    var selectorId = element.dataset.productId,
        videoUrl = element.dataset.videoUrl,
        selector = '.js-bg-video-' + selectorId + ':not(.is-active)';

    var el = document.querySelector(selector);

    if (!el) {
      return false;
    }

    var options = {
      mp4: videoUrl,
    }
    var instance = new vidbg(selector, options);

    el.classList.add('is-active');

    document.addEventListener("shopify:section:unload", function(event) {
      WAU.ProductGridVideo.destroyVideo(instance);
    });
    document.addEventListener("shopify:section:select", function(event) {
      WAU.ProductGridVideo.reinitVideo(selector, options);
    });

    WAU.ProductGridVideo.addIntersectionObserver(instance);

  },
  addIntersectionObserver: function addIntersectionObserver(instance) {
    if (!instance) {
      console.error('No instance provided to the function.');
      return false;
    }
    if ('IntersectionObserver' in window) {

      const target = instance.videoEl;

      if (!target) {
        console.error('Error. not a valid target to observe.');
        return false;
      }

      function callback(entries, observer) {
        entries.forEach(entry => {
          // If intersection
          if (entry.isIntersecting) {
            if (!instance.isVideoPlaying()) {
              instance.playVideo();
            }
          } else {
            if (instance.isVideoPlaying()) {
              instance.pauseVideo();
            }
          }
        });
      };

      function observeElementHandler(event) {
        let observer = new IntersectionObserver(callback);
        observer.observe(target);
        target.removeEventListener('playing', observeElementHandler);
      };

      target.addEventListener('playing', observeElementHandler);
    } else {
      console.log('Intersection observer API not supported in this browser.');
    }
  },
  destroyVideo: function destroyVideo(element) {
    element.destroy();
  },
  reinitVideo: function reinitVideo(selector, options) {
    var instance = new vidbg(selector, options);
    return instance;
  }
}

/*============================================================================
 Theme Functions
==============================================================================*/
// sections.js
window.theme = window.theme || {};

theme.a11yHelpers = (function () {

	let alreadySetUpKeyEvents = false;

	/*
	 * @description - Sets up the aria-expanded property to true and false on hover.
	 */
	function setUpAriaExpansion() {
		const ariaExpandEls = document.querySelectorAll('.js-aria-expand');

		ariaExpandEls.forEach(function (ariaExpandEl) {
			ariaExpandEl.addEventListener('mouseover', function (event) {
				ariaExpandEl.setAttribute('aria-expanded', 'true');
		});

			ariaExpandEl.addEventListener('mouseout', function (event) {
				ariaExpandEl.setAttribute('aria-expanded', 'false');
			});
		});
	}

		/*
	 * @description - Takes a parent element and focuses on the next focusable element inside of there.
	 */
	function focusOnElement(parent) {
		var focussableElements = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';

		const elementToFocusOn = parent.querySelector(focussableElements);

		if (elementToFocusOn) {
			elementToFocusOn.focus();
		}

	}

	function findFocusableElement(parent, element, direction) {
		const focusableElementSelectors = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
		const focusableElements = parent.querySelectorAll(focusableElementSelectors);
		const numOfFocusableElements = focusableElements.length;

		var elementIndex = 0;

		for (let i = 0; i < focusableElements.length; i += 1) {
			let currentElement = focusableElements[i];

			if (currentElement === element) {
				elementIndex = i;
			}
		}

		if (direction === 'next') {
			if (elementIndex === (numOfFocusableElements - 1)) {
				return focusableElements[0];
			} else {
				return focusableElements[elementIndex + 1];
			}
		}

		if (direction === 'prev') {
			if (elementIndex === 0) {
				return focusableElements[numOfFocusableElements - 1];
			} else {
				return focusableElements[elementIndex - 1];
			}
		}
	}

	/*
	 * @description - Takes a parent and a dom node and returns the next element that is focusable that is not the current element.
	 * @param parent:DOMNode
	 * @param element:DOMNode
	 * @return DOMNode
	 */
	function findNextFocusableElement(parent, element) {
		return findFocusableElement(parent, element, 'next');
	}

	function findPreviousFocusableElement(parent, element) {
		return findFocusableElement(parent, element, 'prev');
	}

		/*
	 * @description - Enables accessible keyboard navigation throughout the navigation menus.
	 */
	function setUpAccessibleNavigationMenus() {

		function closeDropdownMenus() {
			const activeMenuItems = document.querySelectorAll('.navigation__menuitem--active');
			activeMenuItems.forEach(function (activeMenuItem) {
				activeMenuItem.classList.remove('navigation__menuitem--active');
				activeMenuItem.setAttribute('aria-expanded', 'false');
			});
		}

		function closeNestedDropdownMenus() {
			//remove the class that makes the dropdown show... the active class
			const nestedDropdowns = document.querySelectorAll(".js-menuitem-with-nested-dropdown");

			nestedDropdowns.forEach(function (nestedDropdown) {
				nestedDropdown.classList.remove("dropdown__menuitem--active");
				nestedDropdown.setAttribute('aria-expanded', 'false');
			});

		}

		function closeNestedMegaMenuDropdownMenus() {
			const nestedDropdowns = document.querySelectorAll(".js-megamenu-listitem-with-nested-dropdown");

			nestedDropdowns.forEach(function (nestedDropdown) {
				nestedDropdown.classList.remove("megamenu__listitem--active");
				nestedDropdown.setAttribute('aria-expanded', 'false');
			});
		}

		function addEdgeToDropdown(dropdown) {
			setTimeout(function () {
				if (theme.DOMHelpers.isElementPastEdge(dropdown)) {
					dropdown.classList.add("dropdown--edge");
				} else {
					dropdown.classList.remove("dropdown--edge");
				}
			}, 0);
		}

		if (!alreadySetUpKeyEvents) {
			document.addEventListener('keyup', function (event) {
				if (event.key === 'Escape') {
					const openNestedDropdownMenus = document.querySelectorAll(".dropdown__menuitem--active"),
								openDropdownMenus = document.querySelectorAll(".navigation__menuitem--active"),
								openMegaMenuNestedDropdownMenus = document.querySelectorAll(".megamenu__listitem--active");

					event.preventDefault();

					if (openNestedDropdownMenus.length >= 1) {
						closeNestedDropdownMenus();
						return;
					}

					if (openMegaMenuNestedDropdownMenus.length >= 1){
						closeNestedMegaMenuDropdownMenus();
						return;
					}

					if (openDropdownMenus.length >= 1) {
						closeDropdownMenus();
						return;
					}

				}
			});
		}

		if (!alreadySetUpKeyEvents) {
			document.addEventListener('keydown', function (event) {
				if (event.key === 'Enter') {

					if (document.activeElement.classList.contains("js-open-dropdown-on-key") || document.activeElement.parentNode.classList.contains("js-menuitem-with-nested-dropdown") || document.activeElement.parentNode.classList.contains("js-megamenu-listitem-with-nested-dropdown")) {
						event.stopPropagation();
						event.preventDefault();
					}

					if (document.activeElement.parentNode.classList.contains("navigation__menuitem--active")) {
						closeDropdownMenus();
						return;
					}

					if (document.activeElement.parentNode.classList.contains("dropdown__menuitem--active")) {
						closeNestedDropdownMenus();
						return;
					}

					if (document.activeElement.parentNode.classList.contains("megamenu__listitem--active")) {
						closeNestedMegaMenuDropdownMenus();
						return;
					}

					if (document.activeElement.classList.contains("js-open-dropdown-on-key")) {
            closeDropdownMenus();
						document.activeElement.parentNode.classList.add("navigation__menuitem--active"); // Show the menu by adding the appropriate class.
						return;
					}

					if (document.activeElement.parentNode.classList.contains("js-menuitem-with-nested-dropdown")) {
            closeNestedDropdownMenus();
						document.activeElement.parentNode.classList.add("dropdown__menuitem--active");
						addEdgeToDropdown(document.activeElement.parentNode);
						return;
					}

					if (document.activeElement.parentNode.classList.contains("js-megamenu-listitem-with-nested-dropdown")) {
						document.activeElement.parentNode.classList.add("megamenu__listitem--active");
						addEdgeToDropdown(document.activeElement.parentNode);
						return;
					}

				}
			});
		}

		alreadySetUpKeyEvents = true;

	}

	return {
		setUpAriaExpansion: setUpAriaExpansion,
		setUpAccessibleNavigationMenus: setUpAccessibleNavigationMenus,
		focusOnElement: focusOnElement
	}

}());

theme.DOMHelpers = (function () {

  /*
   * @description - Determines if an element is off screen or not.
   * @param element:<Node> - A DOMNode
   * @return Boolean
   */
  function isElementPastEdge(element) {
    const bounding = element.getBoundingClientRect(),
          l = bounding.left,
          w = bounding.width,
          docH = document.documentElement.clientHeight,
          docW = document.documentElement.clientWidth;

    return (l + w >= docW);
  }

  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {NodeList} options.tables - Elements of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */

   function wrapTable(options) {
     options.tables.forEach(function(table) {
       var wrapper = document.createElement('div');
       wrapper.classList.add(options.tableWrapperClass);
       table.parentNode.insertBefore(wrapper, table);
       wrapper.appendChild(table);
     });
   }

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {NodeList} options.iframes - Elements of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
   function wrapIframe(options) {
     options.iframes.forEach(function(iframe) {
       var wrapper = document.createElement('div');
       wrapper.classList.add(options.iframeWrapperClass);
       iframe.parentNode.insertBefore(wrapper, iframe);
       wrapper.appendChild(iframe);
       iframe.src = iframe.src;
     });
   }

   // Check if an element is out of bounds
   function isOutOfBounds(elem) {

    if (!elem) {
      console.log('Error. Must provide element to check out of bounds');
      return false;
    }

    // Get element's bounding.
    var bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    var out = {};
    out.left = bounding.left < 0;
    out.leftAmount = bounding.left;
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.rightAmount = bounding.right - (window.innerWidth || document.documentElement.clientWidth);

    return out;

   };

   /*
    * @description - Adjust element's x (horizontal) position to be on screen
    * @param element: <node> - A DOM element
    * @param number:         - How much padding to add
    * @return Boolean
    */
   function adjustElementXPosition(element, padding) {
       const bounding = element.getBoundingClientRect(),
             l = bounding.left,
             w = bounding.width,
             docH = document.documentElement.clientHeight,
             docW = document.documentElement.clientWidth;

       const adjustAmount = (l + w) - docW;
       if (adjustAmount > 0) {
         element.style.transform = `translateX(-${adjustAmount + padding}px)`;
         return true;
       } else {
         return false;
       }
   }

   return {
    isOutOfBounds: isOutOfBounds,
 		isElementPastEdge: isElementPastEdge,
    wrapIframe: wrapIframe,
    wrapTable: wrapTable,
    adjustElementXPosition: adjustElementXPosition
 	};

}());

theme.Helpers = (function() {
  var touchDevice = false;
  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function animateCSS(element, animation, prefix = 'animate__') {
    return new Promise(function(resolve, reject) {

      const animationName = `${prefix}${animation}`;
      // const node = document.querySelector(element);
      const node = element;

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
  }

  function Toggle(id) {
    var element = document.getElementById(id);
    if ( element.classList.contains('animate-hide') ) {
      element.classList.remove("animate-hide", "fadeOut");
      element.classList.add("animate-show", "fadeIn");
      element.style.visibility = "visible";
    } else {
	  element.classList.remove("animate-show", "fadeIn");
      element.classList.add("animate-hide", "fadeOut");
      element.style.visibility = "hidden";
    }
  }

  function toggleClass(id, className) {
    var element = document.getElementById(id);
    if (!element) return false;
    if ( element.classList.contains(className) ) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }

  function Accordion(container, tlink, submenu) {

    let accorContent = container.querySelector(submenu);
    if ( !container.querySelector(tlink) ) return false;

    container.querySelector(tlink).addEventListener('click', function(event) {
      event.preventDefault();

      // Toggle class on label and update a11y
      if ( this.classList.contains('closed') ) {
        this.classList.remove('closed');
        this.parentElement.classList.remove('closed');
        this.setAttribute('aria-expanded', 'true');
      } else {
        this.classList.add('closed');
        this.parentElement.classList.add('closed');
        this.setAttribute('aria-expanded', 'false');
      }

      // Show content
      if ( accorContent.classList.contains('closed') ) {
        accorContent.classList.remove("closed");
        accorContent.style.display = "block";
      } else {
        accorContent.classList.add("closed");
        accorContent.style.display = "none";
      }

    });
  }

  function fadeOut(el){
    el.style.opacity = 1;

    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

  }

  function formatMoney(cents, format) {
    const moneyFormat = '${{amount}}';

    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || moneyFormat;

    function formatWithDelimiters(
      number,
      precision = 2,
      thousands = ',',
      decimal = '.'
    ) {
      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        `$1${thousands}`
      );
      const centsAmount = parts[1] ? decimal + parts[1] : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch,
    debounce: debounce,
    animateCSS: animateCSS,
    Toggle: Toggle,
    toggleClass: toggleClass,
    Accordion: Accordion,
    fadeOut: fadeOut,
    fadeIn: fadeIn,
    getScrollbarWidth: getScrollbarWidth,
    formatMoney: formatMoney
  };
})();

/*============================================================================
  Shopify loading library
==============================================================================*/

theme.LibraryLoader = (function() {
  var types = {
    link: 'link',
    script: 'script'
  };

  var status = {
    requested: 'requested',
    loaded: 'loaded'
  };

  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

  var libraries = {
    youtubeSdk: {
      tagId: 'youtube-sdk',
      src: 'https://www.youtube.com/iframe_api',
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: 'shopify-model-viewer-ui-styles',
      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) return;
    if (library.status === status.requested) return;

    callback = callback || function() {};
    if (library.status === status.loaded) {
      callback();
      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement('script');
    tag.src = library.src;
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement('link');
    tag.href = library.src;
    tag.rel = 'stylesheet';
    tag.type = 'text/css';
    tag.addEventListener('load', function() {
      library.status = status.loaded;
      callback();
    });
    return tag;
  }

  return {
    load: load
  };
})();

/*============================================================================
  Section Loading
==============================================================================*/
theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  document.addEventListener(
    'shopify:section:load',
    this._onSectionLoad.bind(this)
  );
  document.addEventListener(
    'shopify:section:unload',
    this._onSectionUnload.bind(this)
  );
  document.addEventListener(
    'shopify:section:select',
    this._onSelect.bind(this)
  );
  document.addEventListener(
    'shopify:section:deselect',
    this._onDeselect.bind(this)
  );
  document.addEventListener(
    'shopify:block:select',
    this._onBlockSelect.bind(this)
  );
  document.addEventListener(
    'shopify:block:deselect',
    this._onBlockDeselect.bind(this)
  );
};

theme.Sections.prototype = Object.assign({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var id = container.getAttribute('data-section-id');
    var type = container.getAttribute('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = Object.assign(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = document.querySelector(
      '[data-section-id="' + evt.detail.sectionId + '"]'
    );

    if (container) {
      this._createInstance(container);
    }

    if (AOS) {
      AOS.refreshHard();
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = this.instances.filter(function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (typeof instance.onUnload === 'function') {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onSelect === 'function'
    ) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onDeselect === 'function'
    ) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockSelect === 'function'
    ) {
      instance.onBlockSelect(evt);
    }
    if (AOS) {
      AOS.refreshHard();
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockDeselect === 'function'
    ) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    document.querySelectorAll('[data-section-type="' + type + '"]').forEach(
      function(container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

theme.Disclosure = (function() {
  var selectors = {
    disclosureForm: '[data-disclosure-form]',
    disclosureList: '[data-disclosure-list]',
    disclosureToggle: '[data-disclosure-toggle]',
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };

  var classes = {
    listVisible: 'disclosure-list--visible'
  };

  function Disclosure(disclosure) {
    this.container = disclosure;
    this._cacheSelectors();
    this._setupListeners();
  }

  Disclosure.prototype = Object.assign({}, Disclosure.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        disclosureForm: this.container.closest(selectors.disclosureForm),
        disclosureList: this.container.querySelector(selectors.disclosureList),
        disclosureToggle: this.container.querySelector(
          selectors.disclosureToggle
        ),
        disclosureInput: this.container.querySelector(
          selectors.disclosureInput
        ),
        disclosureOptions: this.container.querySelectorAll(
          selectors.disclosureOptions
        )
      };
    },

    _setupListeners: function() {
      this.eventHandlers = this._setupEventHandlers();

      this.cache.disclosureToggle.addEventListener(
        'click',
        this.eventHandlers.toggleList
      );

      this.cache.disclosureOptions.forEach(function(disclosureOption) {
        disclosureOption.addEventListener(
          'click',
          this.eventHandlers.connectOptions
        );
      }, this);

      this.container.addEventListener(
        'keyup',
        this.eventHandlers.onDisclosureKeyUp
      );

      this.cache.disclosureList.addEventListener(
        'focusout',
        this.eventHandlers.onDisclosureListFocusOut
      );

      this.cache.disclosureToggle.addEventListener(
        'focusout',
        this.eventHandlers.onDisclosureToggleFocusOut
      );

      document.body.addEventListener('click', this.eventHandlers.onBodyClick);
    },

    _setupEventHandlers: function() {
      return {
        connectOptions: this._connectOptions.bind(this),
        toggleList: this._toggleList.bind(this),
        onBodyClick: this._onBodyClick.bind(this),
        onDisclosureKeyUp: this._onDisclosureKeyUp.bind(this),
        onDisclosureListFocusOut: this._onDisclosureListFocusOut.bind(this),
        onDisclosureToggleFocusOut: this._onDisclosureToggleFocusOut.bind(this)
      };
    },

    _connectOptions: function(event) {
      event.preventDefault();

      this._submitForm(event.currentTarget.dataset.value);
    },

    _onDisclosureToggleFocusOut: function(event) {
      var disclosureLostFocus =
        this.container.contains(event.relatedTarget) === false;

      if (disclosureLostFocus) {
        this._hideList();
      }
    },

    _onDisclosureListFocusOut: function(event) {
      var childInFocus = event.currentTarget.contains(event.relatedTarget);

      var isVisible = this.cache.disclosureList.classList.contains(
        classes.listVisible
      );

      if (isVisible && !childInFocus) {
        this._hideList();
      }
    },

    _onDisclosureKeyUp: function(event) {
      if (event.which !== 27) return;
      this._hideList();
      this.cache.disclosureToggle.focus();
    },

    _onBodyClick: function(event) {
      var isOption = this.container.contains(event.target);
      var isVisible = this.cache.disclosureList.classList.contains(
        classes.listVisible
      );

      if (isVisible && !isOption) {
        this._hideList();
      }
    },

    _submitForm: function(value) {
      this.cache.disclosureInput.value = value;
      this.cache.disclosureForm.submit();
    },

    _hideList: function() {
      this.cache.disclosureList.classList.remove(classes.listVisible);
      this.cache.disclosureToggle.setAttribute('aria-expanded', false);
    },

    _toggleList: function() {
      var ariaExpanded =
        this.cache.disclosureToggle.getAttribute('aria-expanded') === 'true';
      this.cache.disclosureList.classList.toggle(classes.listVisible);
      this.cache.disclosureToggle.setAttribute('aria-expanded', !ariaExpanded);
    },

    destroy: function() {
      this.cache.disclosureToggle.removeEventListener(
        'click',
        this.eventHandlers.toggleList
      );

      this.cache.disclosureOptions.forEach(function(disclosureOption) {
        disclosureOption.removeEventListener(
          'click',
          this.eventHandlers.connectOptions
        );
      }, this);

      this.container.removeEventListener(
        'keyup',
        this.eventHandlers.onDisclosureKeyUp
      );

      this.cache.disclosureList.removeEventListener(
        'focusout',
        this.eventHandlers.onDisclosureListFocusOut
      );

      this.cache.disclosureToggle.removeEventListener(
        'focusout',
        this.eventHandlers.onDisclosureToggleFocusOut
      );

      document.body.removeEventListener(
        'click',
        this.eventHandlers.onBodyClick
      );
    }
  });

  return Disclosure;
})();

/*============================================================================
  Other
==============================================================================*/
  var mobile = window.matchMedia('(max-width: 740px)');
  var tablet = window.matchMedia('(max-width: 979px) and (min-width: 741px)');
  var desktop = window.matchMedia('(min-width: 980px)');

document.addEventListener('DOMContentLoaded', function(){

  /* Initialize Accordions */
  WAU.Accordion.init();

  AOS.init({
    easing: 'ease-out-quad',
    once: false,
    mirror: false,
    offset: 50
  });

  /* Initiate AOS Scrolling after Lazysizes loads */
  document.addEventListener('lazybeforeunveil', function(e){
    AOS.init();
  });
  document.addEventListener('shopify:block:select', function(e){
    AOS.refreshHard();
  });

  (function initModals() {
    if (document.querySelector('[data-wau-modal-content="contact-form"]')) {
      WAU.Modal.init("contact-form");
    }

    if (document.querySelector('[data-wau-modal-content="create-customer"]')) {
      WAU.Modal.init("create-customer");
    }

    if (document.querySelector('[data-wau-modal-content="recover-password"]')) {
      WAU.Modal.init("recover-password");
    }

    if (document.querySelector('[data-wau-modal-content="new-address"]')) {
      WAU.Modal.init("new-address");
    }

    var modals = document.querySelectorAll('[data-wau-modal-content]');
    if (!modals) return false;
    modals.forEach((item, i) => {
      var contentType = item.dataset.wauModalContent;
      if (contentType.includes("edit-address")) {
      WAU.Modal.init(item.dataset.wauModalContent);
      }
    });
  })();

  (function scrollUp(){
    if (window.IntersectionObserver) {
      var target = document.querySelector("footer");

      var scrollToTopBtn = document.querySelector(".scrollup");
      var rootElement = document.documentElement;

      if ( !scrollToTopBtn ) return false;

      function callback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            scrollToTopBtn.classList.add("showBtn")
          } else {
            scrollToTopBtn.classList.remove("showBtn")
          }
        });
      }

      function scrollToTop() {
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);

      let observer = new IntersectionObserver(callback);
      observer.observe(target);
    }
  })();

  (function helperRteFormat() {
    theme.DOMHelpers.wrapIframe({
      iframes: document.querySelectorAll('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]'),
      iframeWrapperClass: 'videoWrapper'
    });

    theme.DOMHelpers.wrapTable({
      tables: document.querySelectorAll('.rte table'),
      tableWrapperClass: 'rte__table-wrapper'
    });
  })();

  (function fixFlickityTouch() {
    /* Fix for touch bug on Flickity */
      var touchingCarousel = false,
        touchStartCoords;

      document.body.addEventListener('touchstart', function(e) {
        if (e.target.closest('.flickity-slider')) {
          touchingCarousel = true;
        } else {
          touchingCarousel = false;
          return;
        }

        touchStartCoords = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        }
      });

      document.body.addEventListener('touchmove', function(e) {
        if (!(touchingCarousel && e.cancelable)) {
          return;
        }

        var moveVector = {
          x: e.touches[0].pageX - touchStartCoords.x,
          y: e.touches[0].pageY - touchStartCoords.y
        };

        if (Math.abs(moveVector.x) > 7)
          e.preventDefault()

      }, {passive: false});
  })();

  // Show Hide Function
  function Toggle(show, hide) {
    var show = document.getElementById(show);
    show.classList.remove("hide");
    show.classList.add("show");
    show.style.display = 'block';

    var hide = document.getElementById(hide);
    hide.classList.remove("show");
    hide.classList.add("hide");
    hide.style.display='none';
  }

  window.addEventListener('touchstart', function onFirstTouch() {
    Events.trigger("device:touchstart");
    window.removeEventListener('touchstart', onFirstTouch, false);
  });

  /**
   * Function adjusts the disclosure lists so they appear within the window
   */
  (function adjustDisclosureListsPastEdge() {

    if ( theme.DOMHelpers.isElementPastEdge === undefined
         || theme.DOMHelpers.adjustElementXPosition === undefined ) {
      console.log('Error. Missing helper functions');
      return;
    }

    // Add event delegation
    document.addEventListener('click', event => {

      // Get the event target
      let target = event.target;

      // Bail if target does not contain disclosure class
      if (!target.classList.contains('disclosure__toggle')) {
        return;
      }

      // Get closest .disclosure element
      let parentEl = target.closest('.disclosure');

      // Get the disclosure list element
      let disclosureList = parentEl.querySelector('.disclosure-list');

      // If the element is past the edge then adjust the elements
      // position.
      if (theme.DOMHelpers.isElementPastEdge(disclosureList)) {
        theme.DOMHelpers.adjustElementXPosition(disclosureList, 10);
        return;
      }

    })
  })();

  (function initPredictiveSearch() {

    class PredictiveSearch extends HTMLElement {
      constructor() {
        super();

        this.featureDetections();

        this.routesPredictiveSearchURL = this.dataset.routes;
        this.showOnlyProducts = this.dataset.showOnlyProducts;
        this.resultsPerResource = this.dataset.resultsPerResource;
        this.inputSelector = this.dataset.inputSelector;
        this.resultsSelector = this.dataset.resultsSelector;

        // this.input = this.querySelector('input[type="search"]');
        this.input = this.querySelector(this.inputSelector) ? this.querySelector(this.inputSelector) : this.querySelector('input[type="search"]');

        // this.predictiveSearchResults = this.querySelector('#predictive-search');
        this.predictiveSearchResults = this.querySelector(this.resultsSelector) ? this.querySelector(this.resultsSelector) : this.querySelector('#predictive-search');

        this.input.addEventListener('input', theme.Helpers.debounce((event) => {
          this.onChange(event);
        }, 300).bind(this));


      }

      featureDetections() {
        if (
           ! this.isFunction(theme.Helpers.debounce)
          ) {
          console.log('Error. Missing debouce theme helper method for predictive search.');
          return false;
        }
        if (
          ! window.fetch
        ) {
          console.log('Error. Web browser does not support fetch required for predictive search');
          return false;
        }
      }

      getTypeOf(value) {
        return Object.prototype.toString.call(value);
      }

      isFunction(value) {
        return this.getTypeOf(value) === '[object Function]';
      }

      onChange() {
        const searchTerm = this.input.value.trim();

        if (!searchTerm.length) {
          this.close();
          return;
        }

        this.getSearchResults(searchTerm);
      }

      getSearchResults(searchTerm) {

        let resourceTypes = (this.showOnlyProducts === 'true') ? 'product' : 'product,collection,article,page';
        let resourceLimit = this.resultsPerResource;
        const SECTION_ID = 'predictive-search';

        fetch(`${this.routesPredictiveSearchURL}?q=${searchTerm}&resources[type]=${resourceTypes}&resources[limit]=${resourceLimit}&section_id=${SECTION_ID}`)
          .then((response) => {
            if (!response.ok) {
              var error = new Error(response.status);
              this.close();
              throw error;
            }

            return response.text();
          })
          .then((text) => {
            const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
            this.predictiveSearchResults.innerHTML = resultsMarkup;
            this.open();
          })
          .catch((error) => {
            this.close();
            throw error;
          });
      }

      open() {
        WAU.ProductGridVideo.init();
        if (typeof theme.Helpers.fadeIn === 'function') {
          theme.Helpers.fadeIn(this.predictiveSearchResults);
        } else {
          this.predictiveSearchResults.style.display = 'block';
        }
      }

      close() {
        if (typeof theme.Helpers.fadeOut === 'function') {
          theme.Helpers.fadeOut(this.predictiveSearchResults);
        } else {
          this.predictiveSearchResults.style.display = 'none';
        }
      }
    }

    customElements.define('predictive-search', PredictiveSearch);
  })();
});

/*============================================================================
 Shopify Functions
==============================================================================*/
Shopify.theme.cart = (function (exports) {
  'use strict';

  function getDefaultRequestConfig() {
    return JSON.parse(
      JSON.stringify({
        credentials: 'same-origin',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;'
        }
      })
    );
  }

  function fetchJSON(url, config) {
    return fetch(url, config).then(function(response) {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    });
  }

  function cart() {
    return fetchJSON('/cart.js', getDefaultRequestConfig());
  }

  function cartAdd(id, quantity, properties) {
    var config = getDefaultRequestConfig();

    config.method = 'POST';
    config.body = JSON.stringify({
      id: id,
      quantity: quantity,
      properties: properties
    });

    return fetchJSON('/cart/add.js', config);
  }

  async function  cartAddFromForm(formData) {
    var config = getDefaultRequestConfig();
    delete config.headers['Content-Type'];

    config.method = 'POST';
    config.body = formData;
    if(autoAddToCart){
      const prods = [
          {
            id: autoAddToCart,
            quantity: 1
          }
        ];

      let formDatax =  new FormData();

      formDatax.append('form_type','product');
      formDatax.append('utf8','✓');
      formDatax.append('quantity',1);
      formDatax.append('id',autoAddToCart);

      const data = {
        method: 'POST',  
        body: formDatax 
      }
      try {
        const extraAdd = await fetch('/cart/add.js', data);
        if (extraAdd){

          const normalAdd = fetchJSON('/cart/add.js', config);

         
            return normalAdd;
          
          
        }

      } catch (error) {
        console.log(error)
      }

      

       

    } else {
      return fetchJSON('/cart/add.js', config);
    }

  }



  function cartChange(line, options) {
    var config = getDefaultRequestConfig();

    options = options || {};

    config.method = 'POST';
    config.body = JSON.stringify({
      line: line,
      quantity: options.quantity,
      properties: options.properties
    });

    return fetchJSON('/cart/change.js', config);
  }

  function cartClear() {
    var config = getDefaultRequestConfig();
    config.method = 'POST';

    return fetchJSON('/cart/clear.js', config);
  }

  function cartUpdate(body) {
    var config = getDefaultRequestConfig();

    config.method = 'POST';
    config.body = JSON.stringify(body);

    return fetchJSON('/cart/update.js', config);
  }

  function cartShippingRates() {
    return fetchJSON('/cart/shipping_rates.json', getDefaultRequestConfig());
  }

  function key(key) {
    if (typeof key !== 'string' || key.split(':').length !== 2) {
      throw new TypeError(
        'Theme Cart: Provided key value is not a string with the format xxx:xxx'
      );
    }
  }

  function quantity(quantity) {
    if (typeof quantity !== 'number' || isNaN(quantity)) {
      throw new TypeError(
        'Theme Cart: An object which specifies a quantity or properties value is required'
      );
    }
  }

  function id(id) {
    if (typeof id !== 'number' || isNaN(id)) {
      throw new TypeError('Theme Cart: Variant ID must be a number');
    }
  }

  function properties(properties) {
    if (typeof properties !== 'object') {
      throw new TypeError('Theme Cart: Properties must be an object');
    }
  }

  function form(form) {
    if (!(form instanceof HTMLFormElement)) {
      throw new TypeError('Theme Cart: Form must be an instance of HTMLFormElement');
    }
  }

  function options(options) {
    if (typeof options !== 'object') {
      throw new TypeError('Theme Cart: Options must be an object');
    }

    if (
      typeof options.quantity === 'undefined' &&
      typeof options.properties === 'undefined'
    ) {
      throw new Error(
        'Theme Cart: You muse define a value for quantity or properties'
      );
    }

    if (typeof options.quantity !== 'undefined') {
      quantity(options.quantity);
    }

    if (typeof options.properties !== 'undefined') {
      properties(options.properties);
    }
  }

  /**
   * Cart Template Script
   * ------------------------------------------------------------------------------
   * A file that contains scripts highly couple code to the Cart template.
   *
   * @namespace cart
   */

  /**
   * Returns the state object of the cart
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function getState() {
    return cart().then(function(cart) {
      Events.trigger("cart:ready", cart)
    });
  }

  /**
   * Returns the object of the cart
   * @returns {Promise} Resolves with the object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function getCart() {
    return cart().then(function(cart) {
      return cart;
    });
  }

  /**
   * Returns the index of the cart line item
   * @param {string} key The unique key of the line item
   * @returns {Promise} Resolves with the index number of the line item
   */
  function getItemIndex(key$$1) {
    key(key$$1);

    return cart().then(function(state) {
      var index = -1;

      state.items.forEach(function(item, i) {
        index = item.key === key$$1 ? i + 1 : index;
      });

      if (index === -1) {
        return Promise.reject(
          new Error('Theme Cart: Unable to match line item with provided key')
        );
      }

      return index;
    });
  }

  /**
   * Fetches the line item object
   * @param {string} key The unique key of the line item
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function getItem(key$$1) {
    key(key$$1);

    return cart().then(function(state) {
      var lineItem = null;

      state.items.forEach(function(item) {
        lineItem = item.key === key$$1 ? item : lineItem;
      });

      if (lineItem === null) {
        return Promise.reject(
          new Error('Theme Cart: Unable to match line item with provided key')
        );
      }
      return lineItem;
    });
  }

  /**
   * Add a new line item to the cart
   * @param {number} id The variant's unique ID
   * @param {object} options Optional values to pass to /cart/add.js
   * @param {number} options.quantity The quantity of items to be added to the cart
   * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function addItem(id$$1, options$$1) {
    options$$1 = options$$1 || {};

    id(id$$1);

    return cartAdd(id$$1, options$$1.quantity, options$$1.properties);
  }

  /**
   * Add a new line item to the cart from a product form
   * @param {object} form DOM element which is equal to the <form> node
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function addItemFromForm(form$$1) {
    form(form$$1);

    var formData = new FormData(form$$1);
    id(parseInt(formData.get('id'), 10));

    return cartAddFromForm(formData);
  }

  /**
   * Changes the quantity and/or properties of an existing line item.
   * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
   * @param {object} options Optional values to pass to /cart/add.js
   * @param {number} options.quantity The quantity of items to be added to the cart
   * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function updateItem(key$$1, options$$1) {
    key(key$$1);
    options(options$$1);

    return getItemIndex(key$$1).then(function(line) {
      return cartChange(line, options$$1);
    });
  }

  /**
   * Removes a line item from the cart
   * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function removeItem(key$$1) {
    key(key$$1);

    return getItemIndex(key$$1).then(function(line) {
      return cartChange(line, { quantity: 0 });
    });
  }

  /**
   * Sets all quantities of all line items in the cart to zero. This does not remove cart attributes nor the cart note.
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function clearItems() {
    return cartClear().then(function() {
      Events.trigger("cart:clear");
    });
  }

  /**
   * Gets all cart attributes
   * @returns {Promise} Resolves with the cart attributes object
   */
  function getAttributes() {
    return cart().then(function(state) {
      return state.attributes;
    });
  }

  /**
   * Sets all cart attributes
   * @returns {Promise} Resolves with the cart state object
   */
  function updateAttributes(attributes) {
    return cartUpdate({ attributes: attributes });
  }

  /**
   * Clears all cart attributes
   * @returns {Promise} Resolves with the cart state object
   */
  function clearAttributes() {
    return getAttributes().then(function(attributes) {
      for (var key$$1 in attributes) {
        attributes[key$$1] = '';
      }
      return updateAttributes(attributes);
    });
  }

  /**
   * Gets cart note
   * @returns {Promise} Resolves with the cart note string
   */
  function getNote() {
    return cart().then(function(state) {
      return state.note;
    });
  }

  /**
   * Sets cart note
   * @returns {Promise} Resolves with the cart state object
   */
  function updateNote(note) {
    return cartUpdate({ note: note });
  }

  /**
   * Clears cart note
   * @returns {Promise} Resolves with the cart state object
   */
  function clearNote() {
    return cartUpdate({ note: '' });
  }

  /**
   * Get estimated shipping rates.
   * @returns {Promise} Resolves with response of /cart/shipping_rates.json (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-shipping-rates)
   */
  function getShippingRates() {
    return cartShippingRates();
  }

  exports.getState = getState;
  exports.getCart = getCart;
  exports.getItemIndex = getItemIndex;
  exports.getItem = getItem;
  exports.addItem = addItem;
  exports.addItemFromForm = addItemFromForm;
  exports.updateItem = updateItem;
  exports.removeItem = removeItem;
  exports.clearItems = clearItems;
  exports.getAttributes = getAttributes;
  exports.updateAttributes = updateAttributes;
  exports.clearAttributes = clearAttributes;
  exports.getNote = getNote;
  exports.updateNote = updateNote;
  exports.clearNote = clearNote;
  exports.getShippingRates = getShippingRates;

  return exports;

}({}));

Shopify.theme.ajaxCart = {
  init: function init() {
    let config = document.getElementById('cart-config');
    if ( !config ) return false;
    config = JSON.parse(config.innerHTML || '{}');

    var selectors = {
      cartTrigger: '.js-mini-cart-trigger',
      cartPageLoader: '.ajax-cart__page-wrapper .js-mini-cart-loader',
      addToCart: '.js-ajax-submit'
    };

    // Init carts
    this.initializeAjaxCart(config);

    // Set No Js Cart or Remove
		if (config.cart_action == 'no_js_cart') {
			if ( document.querySelector('.js-ajax-cart-content') ) {
				document.querySelector('.js-ajax-cart-content').remove();
			}
		} else {
			if ( document.querySelector('.js-ajax-cart-content-nojs') ){
				document.querySelector('.js-ajax-cart-content-nojs').remove();
			}
		}

    // Init cart type
    if (config.cart_action == 'drawer') {
      WAU.Slideout.init("ajax-cart");
    } else if (config.cart_action == 'modal_cart')  {
      WAU.Modal.init("ajax-cart");
    }

    // Override add to cart form
    document.querySelectorAll(selectors.addToCart).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var addToCartForm = this.closest('form');
        Shopify.theme.ajaxCart.addToCart(addToCartForm, element.parentNode, config, false);

        return false;
      });
    });

    // Update cart page on load
    if (document.querySelector('body').classList.contains('template-cart')) {
      Shopify.theme.cart.getCart().then(Cart => {
        Shopify.theme.ajaxCart.updateView(config, Cart);

        // Remove page loader
        setTimeout(function(){
          theme.Helpers.fadeOut(document.querySelector(selectors.cartPageLoader));

          //Remove dynamic buttons from drawer or model if on cart page
          if (document.querySelectorAll('#dynamic-checkout-cart').length == 2) document.querySelectorAll('#dynamic-checkout-cart')[1].remove();
        }, 800);

      });
    }

    // On cart trigger click
    let cartTriggers = document.querySelectorAll(selectors.cartTrigger);
    cartTriggers.forEach((item, i) => {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        // Open drawer
        Shopify.theme.cart.getCart().then(Cart => {

          Shopify.theme.ajaxCart.updateView(config, Cart);

          if (config.cart_action == 'drawer') {
            Shopify.theme.ajaxCart.showDrawer(config);
          } else if (config.cart_action == 'modal_cart')  {
            Shopify.theme.ajaxCart.showModal(config);
          } else {
            window.location.href = config.cart_url;
          }

        });

        return false;
      });
    });
  },
  cartEvents: function cartEvents(config) {
    var selectors = {
      cartDrawerRemove: '.js-cart-remove',
      cartDrawerQty: '[data-item-qty]',
      cartDrawerQtyDecrease: '[data-ajax-qty-decrease]',
      cartDrawerQtyIncrease: '[data-ajax-qty-increase]',
      cartNote: '.js-cart-note'
    };

    // Cart Events
    var cartDrawerQtyElems = document.querySelectorAll(selectors.cartDrawerQty);

    if (cartDrawerQtyElems.length === 0) {
      return false;
    }

    cartDrawerQtyElems.forEach((element, i) => {
      element.addEventListener('change', function(e) {
        e.preventDefault();

        var quantity = parseInt(this.value),
            itemKey = this.dataset.itemKey,
            itemMax = this.dataset.limit,
            lineElement = element.closest('.ajax-cart__cart-item');

        // Set new quantity
        element.value = quantity;

        // Adjust cart object
        setTimeout(function() {

          if (quantity === 0) {
            Shopify.theme.ajaxCart.removeFromCart(itemKey, config);
          } else {
            Shopify.theme.ajaxCart.checkLimit(itemMax, quantity, lineElement, config);
            Shopify.theme.cart.updateItem(itemKey, {quantity}).then(state => {
              Shopify.theme.ajaxCart.updateView(config, state);
            });
          }
        }, 250);
        return false;
      }); // End add event listener
    }); // End of querySelectorAll
    document.querySelectorAll(selectors.cartDrawerRemove).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var itemKey = this.dataset.itemKey;

        Shopify.theme.ajaxCart.removeFromCart(itemKey, config);

        return false;
      });
    });
    document.querySelectorAll(selectors.cartDrawerQtyDecrease).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.nextElementSibling.value === '1' ) {
          var itemKey = this.dataset.itemKey;
          Shopify.theme.ajaxCart.removeFromCart(itemKey, config);
        } else {
          var itemId = this.dataset.ajaxQtyDecrease;
          Shopify.theme.ajaxCart.adjustQty(-1, itemId, config);
        }

        return false;
      });
    });
    document.querySelectorAll(selectors.cartDrawerQtyIncrease).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var itemId = this.dataset.ajaxQtyIncrease;
        Shopify.theme.ajaxCart.adjustQty(+1, itemId, config);

        return false;
      });
    });
    document.querySelectorAll(selectors.cartNote).forEach((element, i) => {

      element.addEventListener('blur', (event) => {
        let note = element.value;
        Shopify.theme.cart.updateNote(note).then(state => {
          Shopify.theme.ajaxCart.updateView(config, state);
        });
      });

    });

    // Reinit shipping calc
    if ( config.show_calculator ) {
      setTimeout(function(){
        Shopify.theme.shippingCalculator.init();
      }, 1000);
    }

    // Restart Payment buttons
    if (Shopify && Shopify.StorefrontExpressButtons) {
      Shopify.StorefrontExpressButtons.initialize();
    }
  },
  showDrawer: function showDrawer(config) {
    if (config.cart_action != 'drawer') return false;

    WAU.Slideout._openByName("ajax-cart");

    // Remove drawer loader
    setTimeout(function(){
      theme.Helpers.fadeOut(document.querySelector('.ajax-cart__drawer-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  hideDrawer: function hideDrawer(config) {
    if (config.cart_action != 'drawer') return false;

    WAU.Slideout._closeByName("ajax-cart");

    // Show drawer loader
    setTimeout(function(){
      theme.Helpers.fadeIn(document.querySelector('.ajax-cart__drawer-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  showModal: function showModal(config) {
    if (config.cart_action != 'modal_cart') return false;

    WAU.Modal._openByName("ajax-cart");

    // Show modal loader
    setTimeout(function(){
      theme.Helpers.fadeOut(document.querySelector('.ajax-cart__modal-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  hideModal: function hideModal(config) {
    if (config.cart_action != 'modal_cart') return false;

    WAU.Modal._closeByName("ajax-cart");

    // Show modal loader
    setTimeout(function(){
      theme.Helpers.fadeIn(document.querySelector('.ajax-cart__modal-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  removeFromCart: function removeFromCart(itemKey, config, callback) {
    Shopify.theme.cart.removeItem(itemKey).then(state => {
      Shopify.theme.ajaxCart.updateView(config, state);
    });
  },
  adjustQty: function adjustQty(value, itemId, config) {

    var selectors = {
      lineItem: '.item_' + itemId,
      updatesItem: '.updates_' + itemId
    };

    // Update Line Item
    document.querySelectorAll(selectors.lineItem).forEach((element, i) => {
      elementInput = element.querySelector(selectors.updatesItem),
      key = elementInput.dataset.itemKey,
      max = elementInput.dataset.limit,
      quantity = parseInt(elementInput.value) + parseInt(value);

      // Check limit to prevent over adding
      if (Shopify.theme.ajaxCart.checkLimit(max, quantity, element, config)) return false;

      // Check new qty to prevent going lower than 1
      if (quantity === 0 ) return false;

      // Set new quantity
      elementInput.value = quantity;

      // Adjust cart object
      setTimeout(function() {
        Shopify.theme.cart.updateItem(key, { quantity }).then(state => {
          Shopify.theme.ajaxCart.updateView(config, state);
        });
      }, 250);

    });
  },
  checkLimit: function checkLimit(max, quantity, element, config) {
    // Check limit to prevent over adding
    if (max != '' && quantity > max) {

      let cartNote = document.createElement('div');

      cartNote.classList.add('mini-cart__cart-note');
      cartNote.innerHTML = '<p><b>' + config.cart_error +'</b>&nbsp;&nbsp;' + config.update_qty_error + '</p>';

      let adjacentElement = element.querySelector('.js-item-quantity');
      let parentElement = adjacentElement.parentNode;

      parentElement.appendChild(cartNote, adjacentElement);

      setTimeout(function() {
        theme.Helpers.fadeOut(cartNote);
        parentElement.removeChild(cartNote);
      }, 2000);

      return true;
    }
  },
  addToCart: function addToCart(addToCartForm, formContext, config, isQuickview) {
    var selectors = {
      addToCart: '.js-ajax-submit',
      cartAddedMsg: '.js-added-msg'
    }

    let context;

    if ( isQuickview ) {
      context = document.querySelector('.js-quickview-content');
    } else {
      context = formContext;
    }

    // Disable add to cart button temporarily
    context.querySelector(selectors.addToCart).value = config.adding_to_cart;
    context.querySelector(selectors.addToCart).classList.add('disabled');
    context.querySelector(selectors.addToCart).getAttribute('disabled', 'disabled');

    Shopify.theme.cart.addItemFromForm(addToCartForm).then(item => {
      // Re-enable add to cart button
      context.querySelector(selectors.addToCart).value = config.added_to_cart;
      context.querySelector(selectors.addToCart).classList.remove('disabled');
      context.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');

      setTimeout(function(){
        context.querySelector(selectors.addToCart).value = config.add_to_cart;
      }, 3000);

      Shopify.theme.cart.getCart().then(Cart => {

        if ( isQuickview && config.cart_added_event != 'product_page') {
          Shopify.theme.quickview.hideModal();
        } else if ( isQuickview && config.cart_added_event == 'product_page') {
          theme.Helpers.fadeIn(context.querySelector(selectors.cartAddedMsg));

          setTimeout(function(){
            theme.Helpers.fadeOut(context.querySelector(selectors.cartAddedMsg));
          }, 3000);
        }

        if (config.cart_action == 'drawer' && config.cart_added_event == 'go_to_active_cart') {
          Shopify.theme.ajaxCart.showDrawer(config);
        } else if (config.cart_action == 'modal_cart' && config.cart_added_event == 'go_to_active_cart' )  {
          Shopify.theme.ajaxCart.showModal(config);
        } else if (config.cart_action == 'page_only' && config.cart_added_event == 'go_to_active_cart' )  {
          window.location.href = config.cart_url;
        } else if ( config.cart_added_event == 'product_page' ) {
          theme.Helpers.fadeIn(context.querySelector(selectors.cartAddedMsg));

          setTimeout(function(){
            theme.Helpers.fadeOut(context.querySelector(selectors.cartAddedMsg));
          }, 3000);
        } else {
          window.location.href = config.cart_url;
        }

        Shopify.theme.ajaxCart.updateView(config, Cart);
      });
    }).catch(error => {
      if (error.status == 422) {

        // Show error msg
        theme.Helpers.fadeIn(context.querySelector('.js-error-msg'));

        // Re-enable add to cart button
        context.querySelector(selectors.addToCart).value = config.add_to_cart;
        context.querySelector(selectors.addToCart).classList.remove('disabled');
        context.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');

        setTimeout(function(){
          theme.Helpers.fadeOut(context.querySelector('.js-error-msg'));
        }, 3000);
      } else {
        console.log(error)
      }
    });
  },
  getAjaxCart: function getAjaxCart(response) {
    const el = document.createElement('div');
    el.innerHTML = response;

    const responseOptions = JSON.parse(el.querySelector('[data-options]').innerHTML);
    const htmls = el.querySelectorAll('[data-html]');

    let html = {};
    if (htmls.length === 1 && htmls[0].getAttribute('data-html') === '') {
      html = htmls[0].innerHTML;
    } else {
      for (let i = 0; i < htmls.length; i++) {
        html[htmls[i].getAttribute('data-html')] = htmls[i].innerHTML;
      }
    }
    let options = responseOptions;

    return html;
  },
  initializeAjaxCart: function initializeAjaxCart(config) {
    let data, url;
    url = config.cart_url + '/?view=ajax';

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.ajaxCart.getAjaxCart(response);

      // Replace cart content
      document.querySelectorAll('.js-ajax-cart-content').forEach((item, i) => {
        item.innerHTML = html.content;
      });

    }).then(response => {
      // Init shipping calc
      if ( config.show_calculator ) {
        setTimeout(function(){
          Shopify.theme.shippingCalculator.init();
        }, 1000);
      }
    }).catch(error => {
      console.log(error)
    });
  },
  updateView: function updateView(config, Cart) {
    let data, url;
    url = config.cart_url + '/?view=ajax';

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.ajaxCart.getAjaxCart(response);

      var selectors = {
        cartContent: '.js-ajax-cart-content',
        cartEmpty: '.js-cart-empty',
        cartForm: '.js-cart-form',
        cartAccordion: '.js-cart-accordion',
        cartCount: '.js-cart-count'
      };

      if (Cart.item_count === 0) {
        // Hide form
        document.querySelectorAll(selectors.cartForm).forEach((item, i) => {
          item.classList.add('hide');
        });
        // Show empty msg
        document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
          item.classList.remove('hide');
        });
        // Update cart count
        document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
          item.innerHTML = '0';
        });
      } else {
        // Hide empty msg
        document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
          item.classList.add('hide');
        });
        // Update cart count
        document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
          item.innerHTML = Cart.item_count;
        });
        // Replace cart page and drawer content
        document.querySelectorAll(selectors.cartContent).forEach((item, i) => {
          item.innerHTML = html.content;
        });
        // Reload accordions
        document.querySelectorAll(selectors.cartAccordion).forEach((item, i) => {
          theme.Helpers.Accordion(item, '.tlink.has_sub_menu a', '.accordion-content.sub');
          theme.Helpers.Accordion(item, '.tlink2.has_sub_menu a', '.accordion-content2.sub');
        });

        // Reload events
        Shopify.theme.ajaxCart.cartEvents(config);
      }


      // Set Cart Loaded
      setTimeout(function(){
        document.querySelector('body').classList.add('cart-loaded');

        //Remove dynamic buttons from drawer or model if on cart page
        if (document.querySelectorAll('#dynamic-checkout-cart').length == 2) document.querySelectorAll('#dynamic-checkout-cart')[1].remove();
      }, 500);

    })
    .catch(error => {
      console.log(error)
    });
  }
}

Shopify.theme.shippingCalculator = {
  init: function init() {
    var config = document.getElementById('cart-config');
    if ( !config ) return false;
    var config = JSON.parse(config.innerHTML || '{}');

    var selectors = {
      container: '.js-shipping-calc-wrapper',
      submitButton: '.js-shipping-calc-submit',
      addressZip: '.js-shipping-calc-address-zip',
      addressCountry: '.js-shipping-calc-address-country',
      addressProvince: '.js-shipping-calc-address-province',
      addressProvinceLabel: '.js-shipping-calc-address-province-label',
      response: '.js-shipping-calc-response'
    }

    let calculators = document.querySelectorAll(selectors.container);

    calculators.forEach((element, i) => {
      element.classList.add("shipping-calculator-" + i)
    });

    let container = document.querySelector('.shipping-calculator-0');

    if (!document.querySelector('body').classList.contains('template-cart')) return false;

    // Initialize observer on shipping address.
    new Shopify.CountryProvinceSelector('address_country', 'address_province', {
      hideElement: 'address_province_container'
    } );

    // Updating province label.
    var countriesSelect = container.querySelector(selectors.addressCountry);
    var addressProvinceLabelEl = container.querySelector(selectors.addressProvinceLabel);

    if (typeof Countries !== 'undefined') {
      Countries.updateProvinceLabel(countriesSelect.val(),addressProvinceLabelEl);
      countriesSelect.change(function() {
        Countries.updateProvinceLabel(countriesSelect.val(),addressProvinceLabelEl);
      });
    }

    // When any of the calculator buttons is clicked, get rates.
    let button = container.querySelector(selectors.submitButton);

    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Disabling all buttons.
      Shopify.theme.shippingCalculator.disableButtons(config, container);

      // Hiding response.
      container.querySelector(selectors.response).style.display = 'none';

      // Reading shipping address for submission.
      let shippingAddress = {};
      shippingAddress.zip = container.querySelector(selectors.addressZip).value || '';
      shippingAddress.country = container.querySelector(selectors.addressCountry).value || '';
      shippingAddress.province = container.querySelector(selectors.addressProvince).value || '';

      Shopify.theme.shippingCalculator.getRates(config, shippingAddress, container);
    });
  },
  enableButtons: function enableButtons(config, container) {
    var selectors = {
      submitButton: '.js-shipping-calc-submit'
    }
    container.querySelector(selectors.submitButton).removeAttribute('disabled');
    container.querySelector(selectors.submitButton).classList.remove('disabled');
    container.querySelector(selectors.submitButton).value = config.calculator_submit;
  },
  disableButtons: function disableButtons(config, container) {
    var selectors = {
      submitButton: '.js-shipping-calc-submit'
    }
    container.querySelector(selectors.submitButton).setAttribute('disabled', 'disabled');
    container.querySelector(selectors.submitButton).classList.add('disabled');
    container.querySelector(selectors.submitButton).value = config.calculator_calculating;
  },
  getRates: function getRates(config, shipping_address, container) {

    let url = '/cart/shipping_rates.json?shipping_address%5Bzip%5D=' + shipping_address.zip + '&shipping_address%5Bcountry%5D=' + shipping_address.country + '&shipping_address%5Bprovince%5D=' + shipping_address.province;

    fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(response => {
      if ( !response.shipping_rates ) {
        Shopify.theme.shippingCalculator.onError(response, config, container);
      } else {
        let rates = response.shipping_rates;
        Shopify.theme.shippingCalculator.onRatesUpdate(rates, shipping_address, config, container);
      }
    }).catch(error => {
      Shopify.theme.shippingCalculator.onError(error, config, container);
    });

  },
  onError: function onError(error, config, container) {

    // Re-enable calculate shipping buttons.
    Shopify.theme.shippingCalculator.enableButtons(config, container);

    let feedback = config.calculator_error + ' ' + Object.keys(error)[0] + ' ' + Object.values(error)[0];

    // Update calculator.
    Shopify.theme.shippingCalculator.render( { rates: [], errorFeedback: feedback, success: false }, container, config );

    container.querySelector('.js-shipping-calc-rates').style.display = "none";
    container.querySelector('.js-shipping-calc-response').style.display = "block";
  },
  onRatesUpdate: function onRatesUpdate(rates, shipping_address, config, container) {
    // Re-enable calculate shipping buttons.
    Shopify.theme.shippingCalculator.enableButtons(config, container);

    // Formatting shipping address.
    var readable_address = '';
    if (shipping_address.zip) readable_address += shipping_address.zip + ', ';
    if (shipping_address.province) readable_address += shipping_address.province + ', ';
    readable_address += shipping_address.country;

    if ( !rates ) return false;

    // Format rates for moneyFormat
    rates.forEach((rate, i) => {
      rate.price = Shopify.theme.shippingCalculator.formatRate(rate.price, config);
    });

    // Show rates and feedback.
    Shopify.theme.shippingCalculator.render( { rates: rates, address: readable_address, success:true }, container, config );

  },
  formatRate: function formatRate(ratePrice, config) {

    let formatDollarsToCents = function(value) {
        value = (value + '').replace(/[^\d.-]/g, '');
        if (value && value.includes('.')) {
            value = value.substring(0, value.indexOf('.') + 3);
        }
        return value ? Math.round(parseFloat(value) * 100) : 0;
    }
    let cents = formatDollarsToCents(ratePrice);

    return Theme.helpers.formatMoney(cents, config.money_format);
  },
  render: function render(response, container, config) {
    let rateFeedback = document.querySelector('.js-shipping-calc-rates-feedback'),
        rateList = document.querySelector('.js-shipping-calc-rates');

    // Empty feedback
    rateFeedback.innerHTML = '';

    // Update feedback
    if (response.rates.length > 1) {
      rateFeedback.innerHTML = config.shipping_multi_rate_one + response.rates.length + config.shipping_multi_rate_two + response.address + config.shipping_multi_rate_three + response.rates[0].price;
    } else if (response.rates.length === 1){
      rateFeedback.innerHTML = config.shipping_single_rate + response.address;
    } else {
      rateFeedback.innerHTML = config.shipping_no_destination;
    }

    // Empty rates
    rateList.innerHTML = '';

    // Update rates
    response.rates.forEach((rate, i) => {
      const rateLI = document.createElement('li');
      rateLI.classList.add('shipping-calc__rate');
      rateLI.innerHTML = rate.name + ' at ' + rate.price;
      rateList.appendChild(rateLI)
    });

    container.querySelector('.js-shipping-calc-rates').style.display = "block";
    document.querySelector('.js-shipping-calc-response').style.display = "block";
  }
}

Shopify.theme.quickview = {
  init: function init() {

    var selectors = {
      quickviewButton: '.js-quickview-trigger'
    }

    this.handleEvents();

  },
  handleEvents: () => {
    var selectors = {
      quickviewButton: '.js-quickview-trigger'
    }

    document.addEventListener('click', (event) => {

      let element = event.target.matches(selectors.quickviewButton) ? event.target : event.target.closest(selectors.quickviewButton);

      if (!element || !element.matches(selectors.quickviewButton)) {
        return false;
      }

      event.preventDefault();

      WAU.Modal.init("quickview");

      let productURL = element.dataset.productUrl;
      let cleanProductURL = Shopify.theme.quickview.cleanUrl(productURL, 'variant');

      Shopify.theme.quickview.getTemplate(cleanProductURL);
    });
  },
  formatTemplate: function getAjaxCart(response) {
    const el = document.createElement('div');
    el.innerHTML = response;

    const htmls = el.querySelectorAll('[data-html]');

    let html = {};
    if (htmls.length === 1 && htmls[0].getAttribute('data-html') === '') {
      html = htmls[0].innerHTML;
    } else {
      for (let i = 0; i < htmls.length; i++) {
        html[htmls[i].getAttribute('data-html')] = htmls[i].innerHTML;
      }
    }

    return html;
  },
  showModal: function showModal() {

    WAU.Modal._openByName("quickview");
  },
  hideModal: function hideModal() {

    document.querySelector('.js-quickview-content').innerHTML = '';

    WAU.Modal._closeByName("quickview");
  },
  cleanUrl: function cleanUrl(url, key) {
    return url.split('?')[0] + '?view=quick';
  },
  getTemplate: function getTemplate(productUrl) {
    let data, url;
    url = productUrl;

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.quickview.formatTemplate(response);

      // Replace modal content
      document.querySelector('.js-quickview-content').innerHTML = html.content;

    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Trigger quickview event
      theme.Product(context);

    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Load Payment Buttons
      if (context.dataset.paymentButton == 'true' && Shopify.PaymentButton) {
        Shopify.PaymentButton.init()
      }
    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Trigger event for add to cart
      context.querySelector('.js-ajax-submit').addEventListener('click', function (e) {
        e.preventDefault();

        var addToCartForm = this.closest('form');

        let cartConfig = document.getElementById('cart-config');
        if ( !cartConfig ) return false;
        cartConfig = JSON.parse(cartConfig.innerHTML || '{}');

        Shopify.theme.ajaxCart.addToCart(addToCartForm, null, cartConfig, true);

        return false;
      });
    }).then(response => {

      // Show modal
      Shopify.theme.quickview.showModal();

    })
    .catch(error => {
      console.log(error)
    });
  }
}

Shopify.theme.quickview.init();
Shopify.theme.ajaxCart.init();

// Reinit cart on section events
document.addEventListener('shopify:section:load', function(event){
  Shopify.theme.ajaxCart.init();
});

const ViewedProducts = (function() {


  let Constructor = function(params) {
    const publicAPIs = {};

    // default configs
    var config = {
      howManyToShow: 3,
      howManyToStoreInMemory: 30,
      wrapperId: "recently-viewed-products",
      onComplete: null,
    };

    // array containing recently viewed products
    var productHandleQueue = [];

    // wrapper element that displays the products
    var wrapper = null;

    // variable to keep track of how many products have been shown
    var shown = 0;

    // Handle cookie related operations
    var cookie = {
      configuration: {
        expires: 90,
        path: "/",
        domain: window.location.hostname,
      },
      name: "shopify_recently_viewed",
      write: function(recentlyViewed) {
        Cookies.set(this.name, recentlyViewed.join(" "), this.configuration);
      },
      read: function() {
        var recentlyViewed = [];
        var cookieValue = Cookies.get(this.name);
        if (cookieValue !== undefined && cookieValue !== '') {
          recentlyViewed = cookieValue.split(" ");
        }
        return recentlyViewed;
      },
      destroy: function() {
        Cookies.remove(this.name, null, this.configuration);
      },
      remove: function(productHandle) {
        var recentlyViewed = this.read();
        var position = recentlyViewed.indexOf(productHandle);
        if (position !== -1) {
          recentlyViewed.splice(position, 1);
          this.write(recentlyViewed);
        }
      },
    };

    // Reveal wrapper element and show recently viewed products and run call back if provided one.
    var finalize = function() {
      // Check if any products were shown.
      if (shown > 0) {

        // Remove hidden class if it exists
        if (wrapper.classList.contains('recently-viewed-products--hidden')) {
          wrapper.classList.remove('recently-viewed-products--hidden');
        }

        // If we have a callback.
        if (config.onComplete) {
          try {
            config.onComplete();
          } catch (error) {}
        }
      } else {
        console.log('No recently viewed products to show');
        return false;
      }
    };

    // Format the product listing template by converting it into a DOM node, determining it's CSS grid classes and then wrapping it with those classes
    var formatTemplate = (product) => {

      // Check if the product data was passed
      if (!product) {
        console.log('Error. Must provide a valid product in order to format it');
        return false;
      }

      //
      // Convert the product into a node.
      //

      // Parse the product HTML into a DOM node.
      var parser = new DOMParser();
      var doc = parser.parseFromString(product, 'text/html');

      // Get the template element.
      var template = doc.querySelector('[data-html="listing"]');

      // Check if we have a valid template element.
      if (!template) {
        console.log('Error. Could not find template elment.');
        return false;
      }

      //
      // Wrap the product in a div with grid classes.
      //

      // Create div element
      let productWrap = document.createElement('div');


      // Apply classes
      productWrap.classList.add('product', 'product-index', 'recently-viewed-products__product', 'js-product-listing');

      // Append product in wrapper element
      productWrap.appendChild(template.content);

      // Return the final product template
      return productWrap;
    };


    // Use fetch api to get product data and add it to the list
    var moveAlong = function() {

      if (productHandleQueue.length && shown < config.howManyToShow) {

        // Build fetch url
        let furl = `/products/${productHandleQueue[0]}?view=listing`;

        // Fetch the product data
        fetch(furl)
          .then((response) => {
            // Convert data to text
            return response.text();
          })
          .then((response) => {

            // Get the formated product node with the data
            let product = formatTemplate(response);

            // Append the product to the wrapper element
            wrapper.appendChild(product);

            // Remove first element from the array
            productHandleQueue.shift();

            // Increment shown
            shown++;

            // Recursively call function
            moveAlong();
          })
          .catch((error) => {
            // Log error
            console.log(error.message);
            // Remove first product from the array from the cookie
            cookie.remove(productHandleQueue[0]);
            productHandleQueue.shift();
            moveAlong();
          });
      } else {
        finalize();
      }
    };

    publicAPIs.showRecentlyViewed = function(params) {
      var params = params || {};

      // Update defaults.
      config = Object.assign(config, params);

      // Reset
      shown = 0;
      productHandleQueue = [];
      wrapper = null;
      template = null;

      // Read cookie.
      productHandleQueue = cookie.read();

      // Get the wrapper element
      wrapper = document.getElementById(config.wrapperId);

      // If we have any to show.
      if (config.howManyToShow && wrapper) {
        // Getting each product with an Ajax call and rendering it on the page.
        moveAlong();
      }
    };
    publicAPIs.getConfig = function() {
      return config;
    };
    publicAPIs.clearList = function() {
      cookie.destroy();
    };
    publicAPIs.getCount = function() {
      let productHandleQueue = cookie.read();
      return productHandleQueue.length;
    };

    publicAPIs.showRecentlyViewed(params);

    return publicAPIs;
  };

  return Constructor;
})();


Shopify.RecordViewedProducts = (function() {

  // default configs
  var config = {
    howManyToShow: 3,
    howManyToStoreInMemory: 30,
    wrapperId: "recently-viewed-products",
    onComplete: null,
  };

  // array containing recently viewed products
  var productHandleQueue = [];

  // wrapper element that displays the products
  var wrapper = null;

  // variable to keep track of how many products have been shown
  var shown = 0;

  // Handle cookie related operations
  var cookie = {
    configuration: {
      expires: 90,
      path: "/",
      domain: window.location.hostname,
    },
    name: "shopify_recently_viewed",
    write: function(recentlyViewed) {
      Cookies.set(this.name, recentlyViewed.join(" "), this.configuration);
    },
    read: function() {
      var recentlyViewed = [];
      var cookieValue = Cookies.get(this.name);
      if (cookieValue !== undefined && cookieValue !== '') {
        recentlyViewed = cookieValue.split(" ");
      }
      return recentlyViewed;
    },
    destroy: function() {
      Cookies.remove(this.name, null, this.configuration);
    },
    remove: function(productHandle) {
      var recentlyViewed = this.read();
      var position = recentlyViewed.indexOf(productHandle);
      if (position !== -1) {
        recentlyViewed.splice(position, 1);
        this.write(recentlyViewed);
      }
    },
  };

  return {
    getConfig: function() {
      return config;
    },
    clearList: function() {
      cookie.destroy();
    },
    getCount: function() {
      let productHandleQueue = cookie.read();
      return productHandleQueue.length;
    },
    recordRecentlyViewed: function(params) {

      var params = params || {};

      // Update defaults.
      config = Object.assign(config, params);

      // Read cookie.
      var recentlyViewed = cookie.read();

      // If we are on a product page.
      if (window.location.pathname.indexOf("/products/") !== -1) {

        // What is the product handle on this page.
        var urlPathname = new URL(window.location).pathname;
        var urlArray = decodeURIComponent(urlPathname).split('/');
        var productHandle = urlArray[urlArray.indexOf('products') + 1];
        if (!productHandle) {
          console.log('Error, no product handle found.');
          return false;
        }

        // In what position is that product in memory.
        var position = recentlyViewed.indexOf(productHandle);


        // If not in memory. (product handle was not found in the recentlyv)
        if (position === -1) {

          // Add product at the start of the list.
          recentlyViewed.unshift(productHandle);

          // Only keep what we need.
          recentlyViewed = recentlyViewed.splice(
            0,
            config.howManyToStoreInMemory
          );
        } else {
          recentlyViewed.splice(position, 1);
          recentlyViewed.unshift(productHandle);
        }

        // Update cookie.
        cookie.write(recentlyViewed);
      }
    },
  };
})();


/*============================================================================
  Product Modules
==============================================================================*/
theme.ProductForm = function (context, sectionId, events, Product) {
  var prodForm = context.querySelector(`#product-form-${sectionId}`);
  var config = JSON.parse(prodForm.dataset.productForm || '{}');
  var selector, varSelectors, options, variant;

  (function back_in_stock() {
    var element = context.querySelector(".js-back-in-stock"),
        form = context.querySelector('.js-back-in-stock-form');

    if ( !element ) {
      return false;
    }
    events.on("variantchange", function (variant) {
      if ( !variant.available ) {
         element.style.display = 'block';
         document.getElementById("hidden_variant").value = 'SKU: ' + variant.sku;
         document.getElementById("hidden_title").value = 'Variant: ' + variant.title;
       } else {
         element.style.display = 'none';
       }
    });

    element.addEventListener("click", function(event) {
      event.preventDefault();
      theme.Helpers.fadeIn(form);
    });

    document.addEventListener('click', function (event) {
      if (event.target === element || element.contains(event.target) || event.target === form || form.contains(event.target)) {
      } else {
        theme.Helpers.fadeOut(form);
      }
    });

  })();

  context.querySelectorAll('.formVariantId').forEach((item, i) => {
    item.setAttribute('name', 'id');
  });

  (function quantity() {
    var elements = context.querySelectorAll("[name=quantity]");

    elements.forEach((element, i) => {
      events.on("quantitycontrol:click", change);
      events.on("variantchange", reset);

      function change(value) {
        var quantity = parseInt(element.value) + value;

        if ( quantity < 1 ) {
          return false;
        }

        element.value = quantity;
      }
      function reset() {
        element.value = 1;
      }
    });
  })();

  (function quantity_controls() {
    Control(".quantity-control-up", 1);
    Control(".quantity-control-down", -1);

    function Control(selector, value) {
      var element = context.querySelector(selector);

      if ( !element ) {
        return false;
      }

      element.addEventListener("click", function (event) {
        event.preventDefault();
        events.trigger("quantitycontrol:click", value);
      });
    }
  })();

  (function sale_icon() {
    const acceptedFormats = {
      "icon": "icon",
      "percentage": "percentage",
      "amount": "amount"
    };
    const selectors = {
      salePriceBadge: ".price__badge.price__badge--sale"
    };
    const settings = {
      debugging: false
    };

    const saleIconEl = context.querySelector(selectors.salePriceBadge);
    const dataFormat = context.dataset.saleFormat;
    const savingsString = config.savings;

    if (typeof money !== 'function' && settings.debugging) {
      console.log('sale_icon:: Error. Money helper function is not available.');
      return false;
    }

    if (dataFormat == acceptedFormats.icon && settings.debugging) {
      console.log('sale_icon:: Error. Format does not match an accepted format.');
      return false;
    }

    if (!config && settings.debugging) {
      console.log('sale_icon:: Error. Do not have access to the config object for translations.');
      return false;
    }

    if (!saleIconEl && settings.debugging) {
      console.log('sale_icon:: Error. No Sale icon element to work with.');
      return false;
    }

    function salePercentage(variant) {
      const difference = variant.compare_at_price - variant.price;
      const differencePercentage = Math.floor((difference / variant.compare_at_price) * 100);
      return differencePercentage + '%';
    };

    function saleAmount(variant) {
      const difference = variant.compare_at_price - variant.price;
      return money(difference);
    };

    function showDiscount(variant, format, string, regex = /{{ savings }}/i) {

      if (!variant) {
        console.log('Error. No variant passed into function.');
        return false;
      }
      if (!format) {
        console.log('Error. No format was passed into function.');
        return false;
      }
      if (!string) {
        console.log('Error. No string passed into function.');
        return false;
      }

      switch (format) {
        case acceptedFormats.percentage:
          return string.replace(regex, salePercentage(variant));
          break;
        case acceptedFormats.amount:
          return string.replace(regex, saleAmount(variant));
          break;
      };
    };

    function updateSaleIcon(variant) {
      if ( variant.compare_at_price > variant.price ) {
        saleIconEl.innerHTML = showDiscount(variant, dataFormat, savingsString);
      }
    }

    events.on("variantchange", updateSaleIcon);
  })();

  (function variantInventoryQuantity() {

    const classes = {
      variantStockLevels: 'js-variant-stock-levels',
      variantStockLevelsMessage: 'js-variant-stock-levels__message',
      hide: 'visually-hidden'
    };
    const selectors = {
      variantStockLevels: '.' + classes.variantStockLevels,
      variantStockLevelsMessage: '.' + classes.variantStockLevelsMessage,
      variantStockLevelsTheshold: 'data-variant-stock-level-threshold'
    };
    const DEFAULT_LIMIT = 11;
    const variantStockLevelEl = context.querySelector(selectors.variantStockLevels);
    const variantStockLevelMessageEl = context.querySelector(selectors.variantStockLevelsMessage);

    if (!variantStockLevelEl) {
      return false;
    }

    const stockLevelThreshold = variantStockLevelEl.getAttribute(selectors.variantStockLevelsTheshold) !== undefined ? parseInt(variantStockLevelEl.dataset.stockLevelThreshold, 10) : DEFAULT_LIMIT;

    const checkFadeSupport = () => typeof theme.Helpers.fadeIn === 'function' && typeof theme.Helpers.fadeOut === 'function';

    const showElement = (element) => {
      if (!element) return;
      element.classList.remove(classes.hide);
      if (checkFadeSupport) {
        theme.Helpers.fadeIn(element);
      }
    };

    const hideElement = (element) => {
      if (!element) return;
      if (checkFadeSupport) {
        theme.Helpers.fadeOut(element);
      }
      // element.classList.add(classes.hide);
    };

    const getMessage = (config, quantity, regex = /{{ count }}/) => {
      if (quantity == 1) {
        if (config.only_left.one.includes(regex.source)) {
          return config.only_left.one.replace(regex, quantity);
        } else {
          return config.only_left.one;
        }
      } else {
        if (config.only_left.one.includes(regex.source)) {
          return config.only_left.other.replace(regex, quantity);
        } else {
          return config.only_left.other;
        }
      }
    };

    events.on("variantchange", (variant) => {
      if (variant.inventory_management && variant.inventory_quantity < stockLevelThreshold && variant.inventory_quantity > 0) {
        variantStockLevelMessageEl.innerHTML = getMessage(config, variant.inventory_quantity);
        showElement(variantStockLevelEl);
      } else {
        hideElement(variantStockLevelEl);
      }
    });
    events.on("variantunavailable", (variant) => {
      hideElement(variantStockLevelEl);
    });
  })();

  (function properties() {
    var elements = context.querySelectorAll("[data-product-property]");

    elements.forEach((element, i) => {
      newProperty(element);

      element.addEventListener('change', function(event) {
        var propertyId = element.dataset.propertyId,
          propertyInput = context.querySelector(`.formProperty-${propertyId}`);

          updatePropertyValue(element, propertyInput)

      });
    });

  })();

  if ( Product.variants.length == 1 ) {
    if ( context.querySelector('[data-store-availability-container]') ) {
      events.trigger("storeavailability:variant", Product.variants[0].id, Product.title);
    }
    return false;
  }

  if (config.featured_product) {
    var prodSelector = 'fp-product-select-' + context.dataset.sectionId;
  } else if (config.quickview) {
    var prodSelector = "qv-product-select-" + Product.id;
  } else {
    var prodSelector = 'product-select-' + Product.id;
  }

  // variant only js below
  if ( Product.has_only_default_variant ) return false;

  varSelectors = context.querySelectorAll('.js-variant-selector');

  varSelectors.forEach((item, i) => {
    item.addEventListener("change", function (event) {
      event.preventDefault();

      if ( config.swatches == 'swatches' ) {
        const swatches = Array.from(varSelectors);
        options = swatches.map((swatch) => {
          return Array.from(swatch.querySelectorAll('input')).find((radio) => radio.checked).value;
        });
      } else {
        options = Array.from(context.querySelectorAll('select.js-variant-selector'), (select) => select.value);
      }

      variant = Product.variants.find((variant) => {
        return !variant.options.map((option, index) => {
          return options[index] === option;
        }).includes(false);
      });

      variantEvents(context, variant, config);
    });
  });

  (function store_availability(context) {

    if ( !context.querySelector('[data-store-availability-container]') ) return false;
    var id = context.querySelector('[data-store-availability-container]').dataset.variantId;
    var title = context.querySelector('[data-store-availability-container]').dataset.productTitle;
    updateContent(id, title, context);

    events.on("storeavailability:variant", function(id, title, context) {
      updateContent(id, title, context)
    });

    function updateContent(id, title, context) {

      const container = context.querySelector('[data-store-availability-container]');
      const variantSectionUrl =
        '/variants/' + id + '/?section_id=pickup-availability';
      container.innerHTML = '';

      fetch(variantSectionUrl)
        .then(function(response) {
          return response.text();
        })
        .then(function(storeAvailabilityHTML) {

          if (storeAvailabilityHTML.trim() === '') {
            return;
          }

          container.innerHTML = storeAvailabilityHTML;
          container.innerHTML = container.firstElementChild.innerHTML;

          container.style.opacity = 1;
          container.style.visibility = "visible";

          container.querySelector('.store-availability-container').classList.remove('fadeOut');
          container.querySelector('.store-availability-container').style.display = "block";

          events.on("storeavailability:unavailable", function() {
            container.querySelector('.store-availability-container').classList.add('fadeOut')
            container.querySelector('.store-availability-container').style.display = "none";
          });

          if ( document.querySelector('[data-pick-up-available="false"]') ) {
            container.style.display = "none";
            return false;
          } else {
            container.style.display = "block";
          }

          const source = document.getElementById("StoreAvailabilityModal");

          const slideoutContainer = document.querySelector(".js-slideout-toggle-wrapper");
          const slideoutAside = document.getElementById('slideout-store-availability');

          if ( slideoutAside ) {
            slideoutAside.innerHTML = "";
            slideoutAside.appendChild(source);
          } else {
            const newSlideout = WAU.Slideout._createSlideoutEl("right", "store-availability", slideoutContainer);
            newSlideout.appendChild(source);
          }

          WAU.Slideout.init("store-availability");

          const storeAvailabilityModalProductTitle = document.querySelector('[data-store-availability-modal-product-title]');
          storeAvailabilityModalProductTitle.textContent = title;

        })
        .catch(function(err) {
          console.log(err.message);
        });
      }
  })(context);

  (function swatches() {
     var elements = context.querySelectorAll("[type=radio]");
     var states = {
       sold_out: function (element) {
         element.parentElement.classList.add("soldout");
       },
       available: function (element) {
         element.parentElement.classList.remove("soldout");
       }
     };

     events.on("variantunavailable", set_unavailable);

     elements.forEach(Swatch);

     var swatchLabel = context.querySelectorAll(".swatches__form--label");
     swatchLabel.forEach(selectInput);

     function set_unavailable() {
       var selected = {};
       var selected_elements = document.querySelectorAll("[type=radio]:checked");

       selected_elements.forEach(function (element) {
         var option = "option" + element.getAttribute("data-position");
         var value = element.value;
         selected[option] = value;
       });
       elements.forEach(function (element) {
         var available = false;
         var current_option = "option" + element.getAttribute("data-position");
         var current_value = element.value;
         var other_options = ["option1", "option2", "option3"].filter(function (option) {
           return selected[option] && option != current_option;
         });
         Product.variants.forEach(function (variant) {
           if ( !variant.available ) {
             return;
           }
           if ( variant[current_option] != current_value ) {
             return;
           }
           if ( variant[other_options[0]] == selected[other_options[0]] && variant[other_options[1]] == selected[other_options[1]] ) {
             available = true;
             return;
           }
         });
         if ( available ) {
           states.available(element);
         } else {
           states.sold_out(element);
         }
       });
     }
     function Swatch(element) {
       var option_position = element.getAttribute("data-position");
       var current_option = "option" + option_position;
       var other_options = ["option1", "option2", "option3"].filter(function (option) {
         return option != current_option;
       });
       element.addEventListener("change", function (event) {
         var selectedLabel = context.querySelector('#selected-option-' + option_position);
         selectedLabel.innerHTML = element.value;
         events.trigger("swatch:change:" + option_position, element.value);
       });
       events.on("variantchange:option" + option_position + ":" + element.value, select);
       events.on("variantchange", set_availability);
       function select() {
         element.checked = true;
       }
       function set_availability(current_variant) {
         var available = false;
         Product.variants.forEach(function (variant) {
           if ( !variant.available ) {
             return;
           }
           if ( variant[current_option] != element.value ) {
             return;
           }
           if ( variant[other_options[0]] != current_variant[other_options[0]] ) {
             return;
           }
           if ( variant[other_options[1]] != current_variant[other_options[1]] ) {
             return;
           }
           available = true;
         });
         if ( available ) {
           states.available(element);
         } else {
           states.sold_out(element);
         }
       }
     }
     function selectInput(element) {
        element.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            const input = event.target.parentNode.querySelector(".swatches__form--input");
            input.click();
          }
        });
      }
   })();

  (function price() {
    var element = context.querySelector(".price__regular .price-item--regular");

    if ( !element ) return false;

    events.on("variantchange", function (variant) {
      var price = money(variant.price);
      element.innerHTML = price;

      events.on("variantunavailable", function (variant) {
        price = config.unavailable;
        element.innerHTML = price;
      });
    });
  })();

  (function price_classes() {
    var element = context.querySelector("[data-price]");

    events.on("variantchange", function (variant) {
      if ( variant.available && variant.compare_at_price > variant.price ) {
        element.classList.add('price--on-sale');
        element.classList.remove('price--sold-out');
      } else if ( !variant.available && variant.compare_at_price > variant.price ) {
        element.classList.add('price--sold-out');
        element.classList.add('price--on-sale');
      } else if ( !variant.available ) {
        element.classList.add('price--sold-out');
        element.classList.remove('price--on-sale');
      } else {
        element.classList.remove('price--on-sale');
        element.classList.remove('price--sold-out');
      }

      if (variant.unit_price_measurement) {
        element.classList.add('price--unit-available');
      } else {
        element.classList.remove('price--unit-available');
      }
    });

  })();

  (function unit_price() {
      var element = context.querySelector("[data-unit-price]");
      var wrapper = context.querySelector(".price__unit");

      if ( !element ) return false;

      events.on("variantchange", function (variant) {
        var unitPrice = "";

        if (variant.unit_price) {
          unitPrice =
            theme.Helpers.formatMoney(variant.unit_price, config.money_format); +
            ' ' +
            config.unit_price_separator +
            ' ' +
            getBaseUnit(variant);

            wrapper.style.display = "flex";
        } else {
          wrapper.style.display = "none";
        }

        element.innerHTML = unitPrice;
      });
    })();

  (function compare_price() {
    var saleEl = context.querySelector(".price__sale .price-item--sale");
    var regEl = context.querySelector(".price__sale .price-item--regular");

    if ( !saleEl ) return false;

    events.on("variantchange", function (variant) {
      var salePrice = "",
          regPrice = "";

      if ( variant.compare_at_price > variant.price ) {
        regPrice = money(variant.compare_at_price);
        salePrice = money(variant.price);
      }

      saleEl.innerHTML = salePrice;
      regEl.innerHTML = regPrice;
    });
  })();

  (function sku() {
    var element = context.querySelector(".js-product-sku");

    if ( !element ) {
      return false;
    }

    events.on("variantchange", function (variant) {
      var variant_sku = variant.sku;

      element.innerHTML = variant_sku;

      if ( variant_sku === "" ) {
        context.querySelector(".js-product-sku-container").classList.add('hide');
      } else {
        context.querySelector(".js-product-sku-container").classList.remove('hide');
      }

    });
  })();

  (function add_to_cart() {
    var element = context.querySelector(".js-ajax-submit");

    if ( !element ) return false;

    events.on("variantchange", function (variant) {
      var text = config.button;
      var disabled = false;

      if ( !variant.available ) {
        text = config.sold_out;
        disabled = true;
      }

      element.value = text;
      element.disabled = disabled;
    });

    events.on("variantunavailable", function () {
      element.value = config.unavailable;
      element.disabled = true;
    });
  })();

  (function shop_pay() {
    const element = context.querySelector('#product-form-installment');

    if (!element) return false;

    const input = element.querySelector('input[name="id"]');
    const selectId = element.querySelector('select[name="id"]');

    events.on("variantchange", function (variant) {
      selectId.value = parseInt(variant.id);
      input.value = variant.id;
      selectId.dispatchEvent(new Event('change', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  })();

  (function smart_payment_buttons() {
    var element = context.querySelector(".shopify-payment-button");

    if ( !element ) return false;

    events.on("variantchange", function (variant) {
      if ( !variant.available ) {
         element.style.display = 'none';
       } else {
         element.style.display = 'block';
       }
    });
  })();

  (function selling_plans() {
      var element = context.querySelector('[name="selling_plan"]');

      if ( !element ) return false;

      // Add selling plan input to submit form
      var submitForm = context.querySelector('.js-prod-form-submit');
      var input = document.createElement("input");
        input.name = "selling_plan";
        input.type = "hidden";
        input.className = "js-selling-plan";
        submitForm.appendChild(input);

      //Update selling plan input on select change
      element.addEventListener('change', function(event) {
        input.value = event.target.value;
      });
    })();

  function money(cents) {
    return theme.Helpers.formatMoney(cents, config.money_format);
  }

  function getBaseUnit(variant) {
   return variant.unit_price_measurement.reference_value === 1
     ? variant.unit_price_measurement.reference_unit
     : variant.unit_price_measurement.reference_value +
         variant.unit_price_measurement.reference_unit;
 }

  function variantEvents(context, variant, config) {
    if ( !variant ) {
     events.trigger("variantunavailable", config);
     events.trigger("storeavailability:unavailable");
     return;
    }

    if ( Product.variants.length == 1 ) {
     if ( !variant.available ) {
       var element = context.querySelector(".product-price");
       element.innerHTML = config.sold_out;
     }
     return;
    }

    events.trigger("variantchange", variant, config);
    events.trigger("variantchange:option1:" + variant.option1);
    events.trigger("variantchange:option2:" + variant.option2);
    events.trigger("variantchange:option3:" + variant.option3);

    if ( context.querySelector('[data-store-availability-container]') ) {
     events.trigger("storeavailability:variant", variant.id, Product.title, context);
    }

    if ( variant.featured_media ) {
     Events.trigger("variantchange:image", variant.featured_media.id, context);
    }

    if ( config.enable_history ) historyState(variant, context);

    updateVariantInput(variant, context);
  }

  function historyState(variant, context) {
    if ( !variant ) return;
    window.history.replaceState({ }, '', `${context.dataset.url}?variant=${variant.id}`);
  }

  function updateVariantInput(variant, context) {
    context.querySelectorAll('.formVariantId').forEach((item, i) => {
      item.setAttribute('name', 'id');
      item.value = variant.id;
      item.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  function newProperty(element) {
    var form = context.querySelector('.js-prod-form-submit'),
    propertyName = element.name,
    propertyValue = element.value,
    propertyId = element.dataset.propertyId;

    var input = document.createElement("input");
    input.type = "hidden";
    input.className = "formProperty-" + propertyId;
    input.value = propertyValue;
    input.name = propertyName;
    input.required = element.required;
    input.setAttribute('data-product-property-form', '');
    form.appendChild(input); // put it into the DOM
  }

  function updatePropertyValue(element, input) {
    var propertyValue = element.value;

    if ( !input ) return false;
    input.value = propertyValue;
    input.required = element.required;
  }
}

theme.ProductScrollGallery = (function () {
  function init(context, sectionId, events, Product) {
    let config = JSON.parse(context.querySelector('.js-product-gallery').dataset.galleryConfig || '{}'),
        main = context.querySelector('.js-carousel-main');

    if ( !main ) return false;

    /* If mobile trigger gallery */
    Events.on("mediaquery:mobile", function() {
      theme.ProductScrollGallery.enableCarousel(main, config, context);
    });
    Events.on("mediaquery:tablet", function() {
      theme.ProductScrollGallery.enableCarousel(main, config, context);
    });

    /* If click to enlarge */
    if ( config.clickToEnlarge ) theme.ProductScrollGallery.enlargePhoto(context);

    /* Trigger Scroll Form */
    theme.ProductScrollGallery.scrollForm(context);

    /* Trigger Scroll To on Variant Change */
    Events.on('variantchange:image', function(id, context){
      if ( context.dataset.sectionId === "quickview" ) return false;
      if ( id === null ) return false;
      /* Select new image in flickity */
      let main = context.querySelector('.js-carousel-main'),
          el = main.querySelector("[data-image-id='" + id + "']"),
          index = el.dataset.slideIndex;

      if ( desktop.matches ) {
        theme.ProductScrollGallery.scrollToImage(index, context, el);
      }
    });

    /* Update active element on media click */
    if (mobile.matches) return false;
    context.querySelectorAll('.product-media-container').forEach((item, i) => {
      item.addEventListener('YTVideoStart', function() {
        theme.ProductScrollGallery.switchMedia(item.dataset.mediaNumber, context);
      });
      document.body.addEventListener('click', function (event) {
        if (item.contains(event.target)) {
          theme.ProductScrollGallery.switchMedia(item.dataset.mediaNumber, context);
        }
      });
    });
  }

  function enableCarousel(main, config, context) {
    let initialEl = main.querySelector("[data-image-id='" + context.dataset.initialVariant + "']"),
        initialIndex;

    if ( initialEl ) {
      initialIndex = initialEl.dataset.slideIndex;
    } else {
      initialIndex = 0;
    }

    if (config.navStyle == 'dots') {
      var dots = true,
          arrows = false;
    } else {
      var dots = false,
          arrows = true;
    }

    var flkty = new Flickity( main, {
      // options
      fade: true,
      wrapAround: true,
      cellAlign: 'left',
      draggable: true,
      contain: true,
      pageDots: dots,
      prevNextButtons: arrows,
      autoPlay: false,
      selectedAttraction: 0.01,
      dragThreshold: 5,
      accessibility: false,
      adaptiveHeight: false,
      imagesLoaded: true,
      initialIndex: initialIndex,
      on: {
        ready: function() {
          let id = this.selectedElement.dataset.imageId;

          /* Fade in */
          context.querySelector('.js-product-gallery').style.visibility = "visible";
        },
        change: function() {
          /* Set focus control on change */
          theme.ProductScrollGallery.removeFocus(context);
          theme.ProductScrollGallery.addFocus(this.selectedElement, context);

          /* Set media */
          theme.ProductScrollGallery.switchMedia(this.selectedElement.dataset.imageId, context);

          /* Allow model drag */
          if ( this.selectedElement.classList.contains('model-slide') ) {
            if ( this.isDraggable ) {
              /* Turn off drag for model usage */
              this.options.draggable = !this.options.draggable;
              this.updateDraggable();
            }
          }
        }
      }
    });

    theme.ProductScrollGallery.galleryEvents(flkty, main, config, context);
  }

  function disableCarousel(flkty) {
    flkty.destroy();
  }

  function galleryEvents(flkty, main, config, context) {

    /* On Variant Change and Initial Load */
    Events.on('variantchange:image', function(id, context){
      if ( context.dataset.sectionId === "quickview" ) return false;
      if ( id === null ) return false;

      /* Select new image in flickity */
      let main = context.querySelector('.js-carousel-main'),
          el = main.querySelector("[data-image-id='" + id + "']"),
          index = el.dataset.slideIndex;

      theme.ProductScrollGallery.switchMedia(id, context);

      if ( desktop.matches ) {
        theme.ProductScrollGallery.scrollToImage(index, context, el);
      } else {
        flkty.select( index );
      }
    });

    Events.on("mediaquery:desktop", function() {
      theme.ProductScrollGallery.disableCarousel(flkty);
      theme.ProductScrollGallery.scrollForm(context);
    });

    Events.on("editor:section:select", function() {
      if ( desktop.matches ) {
        theme.ProductScrollGallery.disableCarousel(flkty);
        theme.ProductScrollGallery.scrollForm(context);
      } else {
        theme.ProductScrollGallery.enableCarousel(main, config, context);
      }
    });

  }

  function removeFocus(context) {
    let main;

    if ( context ) {
      main = context;
    } else {
      main = context.querySelector('.js-carousel-main');
    }

    /* Set all elements to no tab */
    context.querySelectorAll('.js-carousel-main *').forEach((item, i) => {
      item.setAttribute('tabIndex', '-1');
      item.blur();
    });

    let buttonContents = context.querySelectorAll('.flickity-button *');
    buttonContents.forEach((item, i) => {
      item.setAttribute('tabIndex', '-1');
      item.classList.add('js-hide-focus')
    });

    if (main.classList.contains('.flickity-enabled')) {
      main.setAttribute('tabIndex', '-1');
      main.classList.add('js-hide-focus');
    }

  }

  function addFocus(current, context) {
    /* Set current element to tab */
    if ( current.classList.contains('image-slide') ) {
      current.querySelector('img').setAttribute("tabIndex", "0");
    } else if ( current.classList.contains('video-slide') ) {
      current.querySelectorAll('.plyr__controls *').forEach((item, i) => {
        item.setAttribute("tabIndex", "0");
      });
    } else if ( current.classList.contains('external_video-slide') ) {
      current.querySelector('iframe').setAttribute("tabIndex", "0");
    } else if ( current.classList.contains('model-slide') ) {
      current.querySelectorAll('.shopify-model-viewer-ui__controls-area *').forEach((item, i) => {
        item.setAttribute("tabIndex", "0");
      });
    }
  }

  function scrollForm(context) {
    var HHeight = document.querySelector('header').offsetHeight;
    var OffSet = Number(HHeight) + Number(20);

    stickybits(".is_sticky", { stickyBitStickyOffset: OffSet });

    var stickyEl = document.querySelectorAll('.is_sticky');

    if ( !stickyEl ) {
      return false;
    }
  }

  function scrollToImage(index, context, currentItem) {
    let elements = context.querySelectorAll('.js-product-image-item');

    elements.forEach((item, i) => {
      item.classList.remove('selected');
    });

    if ( !currentItem ) return false;
    currentItem.classList.add('selected');

    if ( document.querySelector('body').classList.contains("template-index") ) {
      currentItem.scrollIntoView();
    } else {
      let headerHeight = document.querySelector('header').offsetHeight;

      document.documentElement.scrollTo({
        top: currentItem.offsetTop - headerHeight + 250,
        left: 0,
        behavior: 'smooth'
      });
    }

  }

  function enlargePhoto(context) {

    let buttons = context.querySelectorAll('a.zoom_btn');

    if ( !buttons ) return false;

    buttons.forEach((button, i) => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        var btn = event.target;
        openPhotoSwipe(i);
      });
    });

    var openPhotoSwipe = function(index) {
      var pswpElement = document.querySelectorAll('.pswp')[0];

      let images = context.querySelectorAll('.js-image-slide');

      if ( images.length < 2 ) {
        var arrows = false;
      } else {
        var arrows = true;
      }

      let items = [];
      images.forEach((image, i) => {
        let imageTag = image.querySelector('.product__image');

        let item = {
          src: imageTag.getAttribute('data-zoom-src'),
          w: imageTag.getAttribute('data-width'),
          h: imageTag.getAttribute('data-height')
        }
        items.push(item);
      });

      var options = {
        index: index,
        arrowEl: arrows,
        captionEl: false,
        closeOnScroll: false,
        counterEl: false,
        history: false,
        fullscreenEl: false,
        preloaderEl: false,
        shareEl: false,
        tapToClose: false,
        getThumbBoundsFn: function(index) {
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var thumbnail = context.querySelector('.product__image');
          var rect = thumbnail.getBoundingClientRect();
          return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
        }
      };

      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();

      gallery.listen('afterChange', function() {
        var flkty = Flickity.data('.js-carousel-main');
        if (!flkty) return false;
        var newIndex = gallery.getCurrentIndex();
        flkty.select (newIndex);
      });

    };
  }

  function switchMedia(mediaId, context) {
    let main = context.querySelector('.js-carousel-main'),
        currentMedia = main.querySelector('[data-product-single-media-wrapper]:not(.inactive)'),
        newMedia = main.querySelector('[data-product-single-media-wrapper]' + "[data-thumbnail-id='product-template-" + mediaId +"']"),
        otherMedia = main.querySelectorAll('[data-product-single-media-wrapper]' + ":not([data-thumbnail-id='product-template-" + mediaId + "'])");

    if ( currentMedia ) {
      currentMedia.dispatchEvent(
        new CustomEvent('mediaHidden', {
          bubbles: true,
          cancelable: true
        })
      );
    }
    if ( newMedia ) {
      newMedia.classList.add('active-slide');
      newMedia.classList.remove('inactive');
      newMedia.dispatchEvent(
        new CustomEvent('mediaVisible', {
          bubbles: true,
          cancelable: true
        })
      );
    }
    if ( otherMedia ) {
      otherMedia.forEach(
        function(el) {
          el.classList.add('inactive');
          el.classList.remove('active-slide');
        }.bind(this)
      );
    }
  }

  return {
    init: init,
    enableCarousel: enableCarousel,
    disableCarousel: disableCarousel,
    galleryEvents: galleryEvents,
    addFocus: addFocus,
    removeFocus: removeFocus,
    scrollForm: scrollForm,
    scrollToImage: scrollToImage,
    enlargePhoto: enlargePhoto,
    switchMedia: switchMedia
  };
})();

theme.ProductGallery = (function () {
  function init(context, sectionId, events, Product) {
    let config = JSON.parse(context.querySelector('.js-product-gallery').dataset.galleryConfig || '{}'),
        main = context.querySelector('.js-carousel-main'),
        carouselNav = context.querySelector('.js-thumb-carousel-nav');

    if ( !main ) return false;

    this.mainSlider(main, carouselNav, config, context);

    /* Trigger Sticky images */
    theme.ProductGallery.stickyImages(context);

    if (carouselNav) {
      if ( config.thumbPosition == 'bottom' && config.thumbSlider == true ) this.thumbSlider(carouselNav, main, context);
    }

    if ( config.clickToEnlarge ) theme.ProductGallery.enlargePhoto(context);
  }

  function mainSlider(main, carouselNav, config, context) {
    if (!config.mainSlider) return false;

    let initialEl = main.querySelector("[data-image-id='" + context.dataset.initialVariant + "']"),
        initialIndex;

    if ( initialEl ) {
      initialIndex = initialEl.dataset.slideIndex;
    } else {
      initialIndex = 0;
    }

    if (config.navStyle == 'dots') {
      var dots = true,
          arrows = false;
    } else {
      var dots = false,
          arrows = true;
    }

    var flkty = new Flickity( main, {
      // options
      fade: true,
      wrapAround: true,
      cellAlign: 'left',
      draggable: true,
      contain: true,
      pageDots: dots,
      prevNextButtons: arrows,
      autoPlay: false,
      accessibility: false,
      selectedAttraction: 0.01,
      dragThreshold: 5,
      adaptiveHeight: true,
      imagesLoaded: true,
      initialIndex: initialIndex,
      on: {
        ready: function() {
          let id = this.selectedElement.dataset.imageId;

          /* Fade in */
          context.querySelector('.js-product-gallery').style.visibility = "visible";
        },
        change: function() {
          /* Set focus control on change */
          theme.ProductGallery.removeFocus(context);
          theme.ProductGallery.addFocus(this.selectedElement, context);

          /* Set media */
          theme.ProductGallery.setActiveThumbnail(this.selectedElement.dataset.imageId, this.selectedElement, context);
          theme.ProductGallery.switchMedia(this.selectedElement.dataset.imageId, context);

          /* Allow model drag */
          if ( this.selectedElement.classList.contains('model-slide') ) {
            if ( this.isDraggable ) {
              /* Turn off drag for model usage */
              this.options.draggable = !this.options.draggable;
              this.updateDraggable();
            }
          }
        }
      }
    });

    theme.ProductGallery.galleryEvents(flkty, context);

    if ( carouselNav ) theme.ProductGallery.thumbnails(flkty, carouselNav, config, context);
  }

  function thumbSlider(wrapper, main, context) {
    var flktyThumbs = new Flickity( wrapper, {
      // options
      asNavFor: main,
      wrapAround: false,
      groupCells: true,
      cellAlign: 'left',
      draggable: false,
      contain: true,
      imagesLoaded: true,
      pageDots: false,
      autoPlay: false,
      selectedAttraction: 0.01,
      dragThreshold: 5,
      accessibility: false
    });
  }

  function thumbnails(flkty, carouselNav, config, context) {
    if ( !carouselNav ) return false;

    let thumbs = carouselNav.querySelectorAll('.js-thumb-item');

    if ( !thumbs ) return false;

    /* on thumbnail click and key enter */
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', function(event){
        event.preventDefault();

        let index = this.dataset.slideIndex,
            el = carouselNav.querySelectorAll('.js-thumb-item')[index],
            mediaId = this.dataset.imageId;

        /* Update classes & aria */
        theme.ProductGallery.setActiveThumbnail(mediaId, el, context);
        theme.ProductGallery.switchMedia(mediaId, context);

        /* move thumb slider to position */
        theme.ProductGallery.setThumbPos(this, carouselNav);

        /* change slide */
        flkty.select( index );

      });

      thumb.addEventListener('keypress', function(event){
        event.preventDefault();

        if(event.which == 13){ //Enter key pressed

          let index = this.dataset.slideIndex,
              el = carouselNav.querySelectorAll('.js-thumb-item')[index],
              mediaId = this.dataset.imageId;

          /* Update classes & aria */
          theme.ProductGallery.setActiveThumbnail(mediaId, el, context);
          theme.ProductGallery.switchMedia(mediaId, context);

          /* move thumb slider to position */
          theme.ProductGallery.setThumbPos(this, carouselNav);

          /* change slide */
          flkty.select( index );

        }
      });
    });

  }

  function setThumbPos(selected, carouselNav) {

    carouselNav.scrollTo({
      top: selected.offsetTop - 20,
      left: 0,
      behavior: 'smooth'
    });
  }

  function galleryEvents(flkty, context) {
    /* On Variant Change and Initial Load */
    Events.on('variantchange:image', function(id, context){
      if ( id === null ) return false;

      /* Select new image in flickity */
      var main, el, index, curFlkty;

      main = context.querySelector('.js-carousel-main');
      el = main.querySelector("[data-image-id='" + id + "']");
      index = el.dataset.slideIndex;

      theme.ProductGallery.setActiveThumbnail(id, el, context);
      theme.ProductGallery.switchMedia(id, context);

      curFlkty = Flickity.data( main );
      curFlkty.select( index );
    });

    Events.on("mediaquery:desktop", function() {
      theme.ProductGallery.stickyImages(context);
    });

    Events.on("editor:section:select", function() {
      if ( desktop.matches ) {
        theme.ProductGallery.stickyImages(context);
      }
    });

  }

  function removeFocus(context) {
    let main;

    if ( context ) {
      main = context;
    } else {
      main = context.querySelector('.js-carousel-main');
    }

    /* Set all elements to no tab */
    context.querySelectorAll('.js-carousel-main *').forEach((item, i) => {
      item.setAttribute('tabIndex', '-1');
      item.blur();
    });

    let buttonContents = context.querySelectorAll('.flickity-button *');
    buttonContents.forEach((item, i) => {
      item.setAttribute('tabIndex', '-1');
      item.classList.add('js-hide-focus')
    });

    if (main.classList.contains('.flickity-enabled')) {
      main.setAttribute('tabIndex', '-1');
      main.classList.add('js-hide-focus');
    }

  }

  function addFocus(current, context) {
    /* Set current element to tab */
    if ( current.classList.contains('image-slide') ) {
      current.querySelector('img').setAttribute("tabIndex", "0");
    } else if ( current.classList.contains('video-slide') ) {
      current.querySelectorAll('.plyr__controls *').forEach((item, i) => {
        item.setAttribute("tabIndex", "0");
      });
    } else if ( current.classList.contains('external_video-slide') ) {
      current.querySelector('iframe').setAttribute("tabIndex", "0");
    } else if ( current.classList.contains('model-slide') ) {
      current.querySelectorAll('.shopify-model-viewer-ui__controls-area *').forEach((item, i) => {
        item.setAttribute("tabIndex", "0");
      });
    }
  }

  function enlargePhoto(context) {

    let buttons = context.querySelectorAll('a.zoom_btn');

    if ( !buttons ) return false;
    buttons.forEach((button, i) => {
      button.addEventListener('click', function (event) {
    	event.preventDefault();
      var btn = event.target,
          index = btn.getAttribute('data-ps-slide-index'),
          index = parseInt(index,10);
      openPhotoSwipe(index);
      });
    });

    var openPhotoSwipe = function(index) {
      var pswpElement = document.querySelectorAll('.pswp')[0];

      let images = context.querySelectorAll('#slider .slides.carousel-main .image-slide');

      if ( images.length < 2 ) {
        var arrows = false;
      } else {
        var arrows = true;
      }

      let items = [];
      images.forEach((image, i) => {
        let imageTag = image.querySelector('.product__image');

        let item = {
          src: imageTag.getAttribute('data-zoom-src'),
          w: imageTag.getAttribute('data-width'),
          h: imageTag.getAttribute('data-height')
        }
        items.push(item);
      });

      var options = {
        index: index,
        arrowEl: arrows,
        captionEl: false,
        closeOnScroll: false,
        counterEl: false,
        history: false,
        fullscreenEl: false,
        preloaderEl: false,
        shareEl: false,
        tapToClose: false,
        getThumbBoundsFn: function(index) {
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var thumbnail = context.querySelector('.product__image');
          var rect = thumbnail.getBoundingClientRect();
          return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
        }
      };

      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();

      gallery.listen('afterChange', function() {
        var flkty = Flickity.data('.slides.carousel-main');
        var newIndex = gallery.getCurrentIndex();
        let sliderImage = context.querySelector(`[data-ps-slide-index="${newIndex}"]`);
        let newNewIndex = parseInt(sliderImage.dataset.index, 10);
        flkty.select(newNewIndex);
      });

    };
  }

  function switchMedia(mediaId, context) {
    let main = context.querySelector('.js-carousel-main'),
        currentMedia = main.querySelector('[data-product-single-media-wrapper]:not(.inactive)'),
        newMedia = main.querySelector('[data-product-single-media-wrapper]' + "[data-thumbnail-id='product-template-" + mediaId +"']"),
        otherMedia = main.querySelectorAll('[data-product-single-media-wrapper]' + ":not([data-thumbnail-id='product-template-" + mediaId + "'])");

    currentMedia.dispatchEvent(
      new CustomEvent('mediaHidden', {
        bubbles: true,
        cancelable: true
      })
    );

    newMedia.classList.add('active-slide');
    newMedia.classList.remove('inactive');
    newMedia.dispatchEvent(
      new CustomEvent('mediaVisible', {
        bubbles: true,
        cancelable: true
      })
    );

    otherMedia.forEach(
      function(el) {
        el.classList.add('inactive');
        el.classList.remove('active-slide');
      }.bind(this)
    );
  }

   function setActiveThumbnail(mediaId, el, context) {

    let main = context.querySelector('.js-carousel-main'),
        carouselNav = context.querySelector('.js-thumb-carousel-nav');

    if (typeof mediaId === 'undefined') {
      mediaId = main.querySelector('[data-product-single-media-wrapper]:not(.hide)').dataset.mediaId;
    }

    if ( carouselNav ) {
      /* remove selected class from all */
      carouselNav.querySelectorAll('.js-thumb-item').forEach((item, i) => {
        item.classList.remove('is-nav-selected');
        item.classList.remove('active-slide');
        item.removeAttribute('aria-current');
      });
    }

    /* add selected class */
    let thumbActive = context.querySelector(".js-thumb-item[data-image-id='" + mediaId + "']");
    if ( thumbActive ) {
      thumbActive.classList.add('is-nav-selected');
      thumbActive.classList.add('active-slide');
      thumbActive.setAttribute('aria-current', true);
    }
  }

  function stickyImages(context) {
    var HHeight = document.querySelector('header').offsetHeight;
    var OffSet = Number(HHeight) + Number(20);

    stickybits(".is_sticky", { stickyBitStickyOffset: OffSet });

    var stickyEl = document.querySelectorAll('.is_sticky');

    if ( !stickyEl ) {
      return false;
    }
  }

  return {
    init: init,
    mainSlider: mainSlider,
    thumbSlider: thumbSlider,
    thumbnails: thumbnails,
    setThumbPos: setThumbPos,
    galleryEvents: galleryEvents,
    stickyImages: stickyImages,
    removeFocus: removeFocus,
    addFocus: addFocus,
    enlargePhoto: enlargePhoto,
    switchMedia: switchMedia,
    setActiveThumbnail: setActiveThumbnail
  };

})();

theme.ProductVideo = (function(context, sectionId) {
  var videos = {};

  var hosts = {
    html5: 'html5',
    youtube: 'youtube'
  };

  var selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]'
  };

  var attributes = {
    enableVideoLooping: 'enable-video-looping',
    videoId: 'video-id'
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer) {
      return;
    }

    var videoElement = videoContainer.querySelector('iframe, video');

    if (!videoElement) {
      return;
    }

    var mediaId = videoContainer.getAttribute('data-media-id');

    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this);
      }
    };

    var video = videos[mediaId];

    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: 'video-ui',
            version: '1.0',
            onLoad: setupPlyrVideos
          }
        ]);
        theme.LibraryLoader.load('plyrShopifyStyles');
        break;
      case hosts.youtube:
        theme.LibraryLoader.load('youtubeSdk', setupYouTubeVideos);
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }

    loadVideos(hosts.html5);
  }

  function setupYouTubeVideos() {
    if (!window.YT.Player) return;

    loadVideos(hosts.youtube);
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }

    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );

    var enableLooping = productMediaWrapper.getAttribute(
      'data-' + attributes.enableVideoLooping
    ) === 'true';

    switch (video.host) {
      case hosts.html5:
        // eslint-disable-next-line no-undef
        video.player = new Shopify.Plyr(video.element, {
          loop: { active: enableLooping },
          muted: true,
          hideControlsOnPause: true,
          tooltips: { controls: false, seek: true }
        });
        video.player.on('ready', event => {
          video.container.querySelector('.plyr--full-ui').setAttribute('tabindex', '-1');
          video.container.querySelectorAll('.plyr--full-ui *').forEach((item, i) => {
            item.setAttribute('tabindex', '-1');
          });

        });
        video.player.on('play', event => {
          video.container.querySelectorAll('.plyr__controls *').forEach((item, i) => {
            item.setAttribute("tabIndex", "0");
          });
        });
        break;
      case hosts.youtube:
      var videoId = productMediaWrapper.getAttribute(
        'data-' + attributes.videoId
      );

        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: function(event) {
              if (event.data === 0 && enableLooping) event.target.seekTo(0);

              if (event.data === 1) {
                productMediaWrapper.dispatchEvent(
                  new CustomEvent('YTVideoStart', {
                    bubbles: true,
                    cancelable: true
                  })
                );
              }
            },
            onReady: function(event) {
              video.player.mute();
            }
          }
        });
        break;
    }

    var pauseVideo = function() {
      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.pause();
      }

      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }
    };

    productMediaWrapper.addEventListener('mediaHidden', pauseVideo);
    productMediaWrapper.addEventListener('xrLaunch', pauseVideo);

    productMediaWrapper.addEventListener('mediaHidden xrLaunch', function() {

      if (!video.player) return;

      if (video.host === hosts.html5) {
        video.player.pause();
      }
      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }

    });

    productMediaWrapper.addEventListener('mediaVisible', function() {

      if (theme.Helpers.isTouch()) return;

      if (!video.player) return;

      if (video.host === hosts.html5) {
        if (desktop.matches) {
          video.player.play();
        }
      }

      if (video.host === hosts.youtube && video.player.playVideo) {
        if (desktop.matches) {
          video.player.playVideo();
        }
      }
    });

  }

  function hostFromVideoElement(video) {
    if (video.tagName === 'VIDEO') {
      return hosts.html5;
    }

    if (video.tagName === 'IFRAME') {
      if (
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
          video.src
        )
      ) {
        return hosts.youtube;
      }
    }
    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) continue;

        if (video.host === hosts.html5) {
          video.element.setAttribute('controls', 'controls');
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.sectionId === sectionId) {
          if (video.player) video.player.destroy();
          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };

})();

theme.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId) {
     modelJsonSections[sectionId] = {
       loaded: false
     };

     modelViewerContainers.forEach(function(modelViewerContainer, index) {
       var mediaId = modelViewerContainer.getAttribute('data-media-id');
       var modelViewerElement = modelViewerContainer.querySelector(
         'model-viewer'
       );
       var modelId = modelViewerElement.getAttribute('data-model-id');

       if (index === 0) {
         var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
         var xrButton = mediaGroup.querySelector(selectors.xrButton);
         xrButtons[sectionId] = {
           element: xrButton,
           defaultId: modelId
         };
       }

       models[mediaId] = {
         modelId: modelId,
         sectionId: sectionId,
         container: modelViewerContainer,
         element: modelViewerElement
       };
     });

     window.Shopify.loadFeatures([
       {
         name: 'shopify-xr',
         version: '1.0',
         onLoad: setupShopifyXr
       },
       {
         name: 'model-viewer-ui',
         version: '1.0',
         onLoad: setupModelViewerUi
       }
     ]);
     theme.LibraryLoader.load('modelViewerUiStyles');
   }

  function setupShopifyXr(errors) {
    if (errors) return;

    if (!window.ShopifyXR) {
     document.addEventListener('shopify_xr_initialized', function() {
       setupShopifyXr();
     });
     return;
    }

    for (var sectionId in modelJsonSections) {
     if (modelJsonSections.hasOwnProperty(sectionId)) {
       var modelSection = modelJsonSections[sectionId];

       if (modelSection.loaded) continue;
       var modelJson = document.querySelector('#ModelJson-' + sectionId);

       window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
       modelSection.loaded = true;
     }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) return;

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];
    model.container.addEventListener('mediaVisible', function() {
      xrButton.element.setAttribute('data-shopify-model3d-id', model.modelId);
      if (mobile.matches) return;
      model.modelViewerUi.play();
    });

    model.container.addEventListener('mediaHidden', function() {
      xrButton.element.setAttribute(
        'data-shopify-model3d-id',
        xrButton.defaultId
      );
      model.modelViewerUi.pause();
    });

    model.container.addEventListener('xrLaunch', function() {
      model.modelViewerUi.pause();
    });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

theme.ProductSPIBanner = (function() {

  const defaults = {
    spiTagName: 'SHOPIFY-PAYMENT-TERMS',
    spiBannerSelector: '.product-form-installment'
  };
  let spiBannerActivated = false;

  const removeMargins = function(element) {
    if (!element) {
      console.log('Error. Must provide an element to remove margins from.');
      return false;
    }
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
  };

  const checkForTag = function(tag, element) {
    if (!tag) {
      console.log('Error. Must provide a tag to test against.');
      return false;
    }
    if (!element) {
      console.log('Error. Must provide an element to loop through.');
      return false;
    }
    if (element.children.length > 0) {
      for (let i = 0; i < element.children.length; i++) {
        if (element.children[i].tagName === tag) {
          return true;
          break;
        }
      }
    }
    return false;
  }

  return {
    init: function(context, options) {

      var settings = Object.assign({}, defaults, options);

      let spiBanner = context.querySelector(settings.spiBannerSelector);

      if (checkForTag(settings.spiTagName, spiBanner)) {
        spiBannerActivated = true;
      };

      if (!spiBannerActivated) {
        removeMargins(spiBanner);
      }
    }
  }
})();

theme.Product = (function () {
  function Product(context) {
    var events = new EventEmitter3();
        events.trigger = events.emit; // alias

    var productJson = context.querySelector('.product-json');

    if ( !productJson ) {
      return false;
    }

    var Product = productJson.innerHTML,
        Product = JSON.parse(Product || '{}');

    var sectionId = context.dataset.sectionId;

    // Record if on a product page
    if (document.body.classList.contains('template-product')) {
      Shopify.RecordViewedProducts.recordRecentlyViewed();
    }
    // Find all the modals and initialize them
    let productModals = context.querySelectorAll('[data-wau-modal-content]');
    if (productModals.length > 0) {
      productModals.forEach(modal => {
        WAU.Modal.init(modal.dataset.wauModalContent);
      });
    }

    if ( context.querySelector(".product-form-installment") ) {
      theme.ProductSPIBanner.init(context);
    }

    if ( context.querySelector("[data-static-gallery]") ) {
      theme.ProductGallery.init(context, sectionId, events, Product);
    }

    if ( context.querySelector("[data-scroll-gallery]") ) {
      theme.ProductScrollGallery.init(context, sectionId, events, Product);
    }

    if ( context.querySelector("[data-product-form]") ) {
      theme.ProductForm(context, sectionId, events, Product);
    }

    context.querySelectorAll("[data-product-media-type-video]").forEach(function (context, sectionId) {
      theme.ProductVideo.init(context, sectionId);
    });

    /* Product media */
    let modelViewerElements = context.querySelectorAll('[data-product-media-type-model]');

    if (modelViewerElements.length > 0) {
      theme.ProductModel.init(modelViewerElements, sectionId);
    }

    var self = this;

    document.addEventListener('shopify_xr_launch', function() {
      var currentMedia = document.querySelector('[data-product-single-media-wrapper]:not(.inactive)', self);

      currentMedia.dispatchEvent(
        new CustomEvent('xrLaunch', {
          bubbles: true,
          cancelable: true
        })
      );
    });
  }

  document.addEventListener('shopify:section:load', function(event){
    if (event.target.querySelector('[data-section-type="product__section"]')) return Product;
  });

  return Product;
})();

theme.ProductRecommendations = (function () {
  function ProductRecommendations() {
    var loadProductRecommendationsIntoSection = function() {
      // Look for an element with class 'product-recommendations'
      var container = document.querySelector(".js-product-rec-wrapper");

			if ( !container ) return false;

      var baseUrl = container.dataset.baseUrl;

      if (container === null) { return; }
      // Read product id from data attribute
      var productId = container.dataset.productId;
      var sectionId = container.dataset.sectionId;

      // Build request URL
      var recommendationsSectionUrl = baseUrl + '?section_id=' + sectionId + '&product_id=' + productId;

			fetch(recommendationsSectionUrl)
      .then(function(response) {
        return response.text();
      })
      .then(function(productHtml) {
        if (productHtml.trim() === '') return;

        container.innerHTML = productHtml;
        container.innerHTML = container.firstElementChild.innerHTML;

        WAU.ProductGridVideo.init();
      });
    }

    document.addEventListener("shopify:section:select", function(event) {
      if (event.detail.sectionId.includes('product-recommendations')) {
        loadProductRecommendationsIntoSection();
      }
    });

    // Fetching the recommendations on page load
    loadProductRecommendationsIntoSection();

  }

  return ProductRecommendations;
})();

/*======================================================
  Recently Viewed
========================================================*/

theme.RecentlyViewed = (function() {

  /**
   * Initializes the recently viewed section. Only works on once per page.
   * @param {Node} container section container element
   */
  function RecentlyViewed(container) {

    // Check for container
    if (!container) {
      console.log('Error. Recently viewed section must be provided a container in order to work.');
      return false;
    }

    //
    // Get data- attribute information.
    //

    // Get how many products to show variable.
    const DEFAULT_LIMIT = 6;

    // Get the data-limit value or set to default limit (6).
    const limit = container.dataset.limit ? container.dataset.limit : DEFAULT_LIMIT;

    const grid = container.dataset.grid;

    // Get the data-carousel value or set to false (boolean)
    const carousel = container.dataset.carousel ? container.dataset.carousel : false;

    // If data-carousel attribute is set to a string "true", then convert to the "true" boolean value otherwise return "false" boolean
    const carouselEnabled = (carousel === 'true');

    const wrapperId = container.dataset.wrapperId;

    //
    // Helper functions
    //

    /**
     * Callback function to reveal the entire section
     * @param  {String} wrapperId wrapper element
     * @todo use container instead of wrapper?
     */
    const revealOuterWrapper = (wrapperId = 'recently-viewed') => {

      // Bail if not wrapper Id
      if (!wrapperId) {
        console.log('Error. must provide a wrapperId as an argument.');
        return false;
      }

      // Get the wrapper element
      let wrapper = document.getElementById(wrapperId);

      // Bail if no wrapper element was found
      if (!wrapper) {
        console.log('Error. No wrapper element was found.');
        return false;
      }

      // If the fadeIn helper method is not available then simply
      // change to display block. Otherwise use the fadeIn helper
      // method to display the section.
      if (typeof theme.Helpers.fadeIn === undefined) {
        wrapper.style.display = 'block';
      } else if (typeof theme.Helpers.fadeIn === 'function') {
        theme.Helpers.fadeIn(wrapper);
      }
    };


    /**
     * Initialize the Flickity carousel.
     * @todo pass in container instead of using querySelector
     */
    const initCarousel = (wrapperId) => {

      if (!wrapperId) {
        console.log('Error. Must provide a wrapper element to initialze the carousel on.');
        return false;
      }

      // Get the carousel element
      const carousel = document.getElementById(wrapperId);

      // Bail if it does not exists.
      if (!carousel) {
        console.log('Error. No carousel element for recently viewed products found!');
        return false;
      }

      // Get config object from data- attribute
      const flktyData = carousel.dataset.flickityConfig;

      // Convert to a JSON object
      const flktyOptions = JSON.parse(flktyData);

      // If there are more products to show than what the products per row or "grid" option then there is enough to wrapAround, show prevNext buttons.
      if (Shopify.RecordViewedProducts.getCount() > grid) {
        flktyOptions.wrapAround = true;
        flktyOptions.prevNextButtons = true;
        flktyOptions.draggable = true;
      };

      // Initiate Flickity
      new Flickity(carousel, flktyOptions);
    };

    /**
     * Functions to run when showRecentlyViewed is done
     * @param  {boolean} carousel  determine sif using in a carousel or not
     * @param  {node} container container element
     * @param  {string} wrapperId ID of the wrapper inside the container that displays the products
     * @return {[type]}           [description]
     * @todo add checks
     */
    const afterComplete = (carousel, container, wrapperId) => {

      revealOuterWrapper(container.id);

      // If carousel is enabled
      if (carousel === true) {

        // Initialize the carousel
        initCarousel(wrapperId, this.container);
      }

      // Re-initialize Quickview
      Shopify.theme.quickview.init();
      WAU.ProductGridVideo.init();

      // Initialize the color swatches
      // WAU.ProductColorSwatches.init(container, 200);
    };

    const viewedProduct = new ViewedProducts({
      howManyToShow: limit,
      wrapperId: wrapperId,
      onComplete: afterComplete.bind(this, carouselEnabled, container, wrapperId)
    });
  };

  return RecentlyViewed;
})();


/*============================================================================
  Announcement Bar
==============================================================================*/
var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.AnnouncementBar = (function() {
  function AnnouncementBar(container) {

    // elements
		const searchTrigger = document.querySelector(".js-search-trigger"),
					searchReveal = document.querySelector(".js-search-reveal"),
					currencySelector = document.querySelector(".shopify-currency-form select");

          /* lang and currency disclosure */
          this.container = container;
          this.cache = {};
          this.cacheSelectors();

          if (this.cache.localeDisclosure) {
            this.localeDisclosure = new theme.Disclosure(this.cache.localeDisclosure);
          }

          if (this.cache.currencyDisclosure) {
            this.currencyDisclosure = new theme.Disclosure(this.cache.currencyDisclosure);
          }

  WAU.Slideout.init("search-sidebar");

  }

  AnnouncementBar.prototype = _.assignIn({}, AnnouncementBar.prototype, {
    cacheSelectors: function() {
      this.cache = {
        localeDisclosure: this.container.querySelector(selectors.disclosureLocale),
        currencyDisclosure: this.container.querySelector(selectors.disclosureCurrency)
      };
    },
    onUnload: function() {
      if (this.cache.localeDisclosure) {
        this.localeDisclosure.destroy();
      }

      if (this.cache.currencyDisclosure) {
        this.currencyDisclosure.destroy();
      }
    }
  });
  return AnnouncementBar;
})();


/*============================================================================
  Header
==============================================================================*/

theme.Header = (function() {
  function Header(container) {
		// elements
		const menuItemsWithNestedDropdowns = document.querySelectorAll(".js-menuitem-with-nested-dropdown"),
					doubleTapToGoItems = document.querySelectorAll(".js-doubletap-to-go"),
					header = document.querySelector('header'),
          topBar = document.querySelector(".js-top-bar"),
					phantomEl = document.querySelector(".js-phantom"),
					scrollHeader = document.querySelector("header.scrollheader"),
          content = document.querySelector("body.template-index .page-wrap");

		// properties
		let headerHeight = header.clientHeight;
        amountToScroll = (topBar.clientHeight === 0) ? headerHeight : topBar.clientHeight;

		const isStickyHeader = header.getAttribute('data-sticky'),
					isCoverHeader = phantomEl.classList.contains('ignore-this'),
          isOverlayHeader = header.classList.contains('overlap__section');

    if (window.ResizeObserver) {

  		// This is to make sure the header / sticky updates in the theme editor when the editor changes from mobile to desktop.
  		const resizeObserver = new ResizeObserver(entries => {
  			headerHeight = header.clientHeight;
  			phantomEl.style.height = headerHeight + "px";
        amountToScroll = topBar.clientHeight;
  		});

  		resizeObserver.observe(header);
    }

    function makeNavigationSticky() {
			if (window.pageYOffset > amountToScroll && isStickyHeader === 'true') {
				header.classList.add("scrolling");
				phantomEl.classList.add('phantom--show');
				phantomEl.style.height = headerHeight + "px";
			} else {
				if (!isCoverHeader) {
					phantomEl.classList.remove('phantom--show');
					phantomEl.classList.add('phantom--hidden');
				}
				header.classList.remove("scrolling");
			 }

       if (isOverlayHeader) {
         const transformHeight = "-" + headerHeight + "px";
         content.style.transform = "translateY("+ transformHeight +")";
       }
		}

		document.addEventListener('scroll', function (event) {
			makeNavigationSticky();
		});

		makeNavigationSticky();
		theme.a11yHelpers.setUpAriaExpansion();
		theme.a11yHelpers.setUpAccessibleNavigationMenus();

		/*
		 * Making sure that nested dropdowns are properly placed in the correct place if they're offscreen.
		 */
		menuItemsWithNestedDropdowns.forEach(function (menuItem) {
			menuItem.addEventListener('mouseenter', function (event) {
				const nestedDropdown = menuItem.querySelector(".js-dropdown-nested");
				if (nestedDropdown) {
					if (theme.DOMHelpers.isElementPastEdge(nestedDropdown)) {
						nestedDropdown.classList.add("dropdown--edge");
					}
				}
			});
		});

		function closeMenu(activeClass) {
			document.querySelectorAll(`[data-active-class="${activeClass}"]`).forEach(function (activeMenu) {
				activeMenu.classList.remove(activeClass);
			});
		}

		doubleTapToGoItems.forEach(function (doubleTapItem) {

			let preventClick = false,
					prevEventTarget = undefined;

			const activeClass = doubleTapItem.getAttribute('data-active-class');

      Events.on("device:touchstart", function() {
        preventClick = true;
      });

			doubleTapItem.addEventListener('click', function (event) {
				if (preventClick) {
					event.preventDefault();
				}
			});

			doubleTapItem.addEventListener('touchstart', function (event) {

				event.target.setAttribute("aria-expanded", "false");
				closeMenu(activeClass);

				if (prevEventTarget === event.target) {
					preventClick = false;
				} else {
					event.target.classList.toggle(activeClass);
					event.target.setAttribute("aria-expanded", "true");
				}

				prevEventTarget = event.target;

			});

		});

    WAU.Slideout.init("search-sidebar");

  }
  Header.prototype = _.assignIn({}, Header.prototype, {
    onSelect: function () {
      WAU.Slideout.init("mobile-navigation");
    }
  });
  return Header;
})();

/*============================================================================
  Featured collection section
==============================================================================*/
theme.FeaturedCollection = (function() {
  function FeaturedCollection(container) {


    const Carousels = document.querySelectorAll('.js-carousel');
    if ( !Carousels ) {
      return false;
    }
    Carousels.forEach(Carousel => {
      const flktyData = Carousel.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
          new Flickity(Carousel, flktyOptions);
    });

    document.addEventListener('shopify:section:unload', function(event){

      const Carousel = event.target.closest('.js-carousel');
      if ( !Carousel ) {
        return false;
      }

      const flkty = Flickity.data( Carousel );
      flkty.destroy()

    });

    document.addEventListener('shopify:section:load', function(event){

      const Carousel = event.target.closest('.js-carousel');
      if ( !Carousel ) {
        return false;
      }
      const flktyData = Carousel.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
          new Flickity('.js-carousel', flktyOptions);

    });

  }
  return FeaturedCollection;
})();


/*======================================================
  Slideshow Section
========================================================*/
theme.Slideshow = (function() {
  function Slideshow(container) {
    const sectionId = container.dataset.sectionId;

    var slideshows = document.querySelectorAll('.js-slideshow');

    slideshows.forEach(Slideshow => {
      const iframes = Slideshow.querySelector('.js-embed-player'),
            lazyImages = Slideshow.querySelector('.js-slideshow-slide'),
            lazyCounter = 0,
            videoAudio = Slideshow.dataset.videoAudio,
            sliderControls = Slideshow.dataset.sliderControls;

      // Init Slideshow
      const flktyData = Slideshow.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
      let flkty = new Flickity(Slideshow, flktyOptions);

      const updateCells = function() {
        flkty.cells.forEach(function(cell, i) {
          if (cell.element == flkty.selectedElement) {
            const videoType = cell.element.dataset.slideType;
            const videoAudio = cell.element.dataset.videoAudio;

            if (videoType == 'youtube') {
              // Init and Play Video
              WAU.Video.init(cell.element, sectionId, flkty, videoAudio);

            } else if (videoType == 'video') {
              // Init and Play Video
              WAU.Video.init(cell.element, sectionId, flkty, videoAudio);
            }
            return;
          }
        });
      }

      updateCells();

      flkty.on("change", (e) => {
        updateCells();
      });

    });

  }

  return Slideshow;
})();

theme.Slideshow.prototype = _.assignIn({}, theme.Slideshow.prototype, {

  onLoad: function(event) {
    const Slideshow = event.target.closest('.js-slideshow');
    const flktyData = Slideshow.getAttribute('data-flickity');
    const flktyOptions = JSON.parse(flktyData);
        new Flickity('.slideshow', flktyOptions);
  },

  onBlockSelect: function(event) {
   const Slideshow = event.target.closest('.js-slideshow');
   const flkty = Flickity.data( Slideshow );
   const Slide = event.target.getAttribute("data-slider-index");
   flkty.select( Slide )
   flkty.pausePlayer()
  },

  onBlockDeselect: function() {
    const Slideshow = event.target.closest('.js-slideshow');
    const flkty = Flickity.data( Slideshow );
    flkty.unpausePlayer()
  }
});

/*============================================================================
  Testimonials section
==============================================================================*/
theme.Testimonials = (function() {
  function Testimonials(container) {


    const Carousels = document.querySelectorAll('.js-carousel');
    if ( !Carousels ) {
      return false;
    }
    Carousels.forEach(Carousel => {
      const flktyData = Carousel.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
          new Flickity(Carousel, flktyOptions);
    });

    document.addEventListener('shopify:section:unload', function(event){

      const Carousel = event.target.closest('.js-carousel');
      if ( !Carousel ) {
        return false;
      }

      const flkty = Flickity.data( Carousel );
      flkty.destroy()

    });

    document.addEventListener('shopify:section:load', function(event){

      const Carousel = event.target.closest('.js-carousel');
      if ( !Carousel ) {
        return false;
      }
      const flktyData = Carousel.getAttribute('data-flickity');
      const flktyOptions = JSON.parse(flktyData);
          new Flickity('.js-carousel', flktyOptions);

    });

  }
  return Testimonials;
})();


/*============================================================================
  Map Section
==============================================================================*/
theme.Maps = (function() {

  var google_api_loaded = false;

  function Map(container) {

    var events = new EventEmitter3();
    events.trigger = events.emit; // alias

    window.gm_authFailure = function () {
      google_api_loaded = false;

      if ( Shopify.designMode ) {
        events.trigger("gmauthfailure:themeeditor");
      } else {
        events.trigger("gmauthfailure");
      }
    };

    var config = container.querySelector("[data-map-config]").innerHTML,
        config = JSON.parse(config);

    if ( !config.api_key ) {
      return false;
    }

    (function section_container() {
      var element = container;

      events.on("gmauthfailure:themeeditor", error);
      events.on("map:error", error);

      function error() {
        element.classList.add("map-section-load-error");
      }
    })();

    (function background_image() {
      var element = container.querySelector("[data-bg-image]");

      events.on("render:success", hide);

      function hide() {
        element.remove();
      }
    })();

    (function overlay() {
      var element = container.querySelector("[data-map-overlay]");

      events.on("gmauthfailure:themeeditor", error);
      events.on("map:error", error);

      function error(message) {
        message = message || config.auth_error;
        element.innerHTML = '<div class="map-section-error errors text-center">' + message + '</div>';
      }
    })();

    (function map() {
      var element = container.querySelector("[data-map]");

      events.on("ready", geolocate);

      function geolocate() {

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: config.address }, function(results, status) {

          if ( status == google.maps.GeocoderStatus.OK ) {
            render(results);
          } else {
            error(status);
          }
        });
      }

      function render(results) {
        element.innerHTML = "";

        var map = new google.maps.Map(element, {
          zoom: config.zoom,
          center: results[0].geometry.location,
          draggable: false,
          clickableIcons: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          styles: config.styles,
          disableDefaultUI: true
        });

        var center = map.getCenter();

        new google.maps.Marker({
          map: map,
          position: center
        });

        google.maps.event.addDomListener(window, "resize", function() {
          theme.Helpers.debounce(function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
          }, 250);
        });

        document.addEventListener('shopify:section:unload', function() {
          google.maps.event.clearListeners(map, "resize");
        });

        events.trigger("render:success");
      }

      function error(status) {
        var message = config.address_error;

        switch (status) {
          case 'ZERO_RESULTS':
            message = config.address_no_results;
            break;
          case 'OVER_QUERY_LIMIT':
            message = config.address_query_limit;
            break;
          case 'REQUEST_DENIED':
            message = config.auth_error;
            break;
        }

        if ( Shopify.designMode ) {
          events.trigger("map:error", message);
        }
      }
    })();

    if ( google_api_loaded ) {
      events.trigger("ready");
    } else {
      const getScript = url => new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.async = true

        script.onerror = reject

        script.onload = script.onreadystatechange = function() {
          const loadState = this.readyState

          if (loadState && loadState !== 'loaded' && loadState !== 'complete') return

          script.onload = script.onreadystatechange = null

          resolve()
        }

        document.head.appendChild(script)
      })

      getScript("https://maps.googleapis.com/maps/api/js?key=" + config.api_key)
      .then(() => {
        google_api_loaded = true;
        events.trigger("ready");
      })
      .catch(() => {
        events.trigger("map:error", 'Could not load map with API key. Check billing with Google.');
        console.error('Could not load script with api given')
      })
    }
  }

  Map.prototype = _.assignIn({}, Map.prototype, {});

  return Map;
})();

/*============================================================================
  Scrolling announcements
==============================================================================*/
theme.ScrollingAnnouncements = (function() {
  function ScrollingAnnouncements(container) {

    // Bail if no container element.
    if (!container) {
      console.log('Error. Container element required for scrolling slideshow.');
      return false;
    }

    // Get the announcement bar slider element (contains the
    // flickity config data).
    var announcementSlider = container.querySelector('.scrolling__announcements--carousel');

    // Bail if not announcement slider element.
    if ( !announcementSlider ) {
      console.log('Error. Could not find announcement slider element with Flickity data.');
      return false;
    }

    // Get the Flickity config data.
    var flktyData = announcementSlider.getAttribute('data-flickity-config');
    // Parse into an readable object.
    var flktyOptions = JSON.parse(flktyData);
    // Initialize Flickity.
    new Flickity(announcementSlider, flktyOptions);
  }

  return ScrollingAnnouncements;
})();

theme.ScrollingAnnouncements.prototype = _.assignIn({}, theme.ScrollingAnnouncements.prototype, {

  onBlockSelect: (event) => {
    var announcementSlider = event.target.closest('.scrolling__announcements--carousel');
    var flkty = Flickity.data( announcementSlider );
    var Slide = event.target.getAttribute("data-slider-index");
    flkty.select( Slide )
    flkty.pausePlayer()
  },
  onBlockDeselect: (event) => {
    var announcementSlider = event.target.closest('.scrolling__announcements--carousel')
    var flkty = Flickity.data( announcementSlider );
    flkty.unpausePlayer();
  },
});

/*============================================================================
  Accordion toggle on mobile navigation
==============================================================================*/
theme.mobileNav = (function() {

  function mobileNav(container) {
    var sectionId = container.dataset.sectionId;

		WAU.Slideout.init("mobile-navigation");

  }

  mobileNav.prototype = _.assignIn({}, mobileNav.prototype, {
    onSelect: function() {
			WAU.Slideout._openByName("mobile-navigation");
    },
    onDeselect: function() {
			WAU.Slideout._closeByName("mobile-navigation");
    },
    onBlockSelect: function() {
			WAU.Slideout._openByName("mobile-navigation");
    }
  });

  return mobileNav;

})();

/*============================================================================
  Collection
==============================================================================*/
theme.Collection = (function() {
  function Collection(container) {

    if ( container.querySelector("[data-collection-filters]") ) {
      theme.CollectionFilters.init(container, container.dataset.sectionId);
    }

  }
  Collection.prototype = _.assignIn({}, Collection.prototype, {});

  return Collection;
})();

theme.CollectionFilters = {
	init: function init(container, sectionId) {
		if ( container.querySelector("[data-collection-filters-hz]") || container.querySelector("[data-collection-sort-by]") ) {
			theme.CollectionFilters.horizontalFilters();
			theme.CollectionFilters.currentFilters();
		}
    if ( container.querySelector("[data-collection-sidebar-filters]") ) {
      WAU.Slideout.init("collection-sidebar");

      theme.CollectionFilters.sidebarFilters();
      theme.CollectionFilters.stickySidebar();
    }
    if ( container.querySelector("[data-collection-filters-price-range]") ) {
      theme.CollectionFilters.priceRange();
      theme.CollectionFilters.priceSlider();
    }
    if ( container.querySelector("[data-collection-infinite-scroll]") ) {
      theme.CollectionFilters.infiniteScroll();
    }

		this.filterData = [];

	},
	horizontalFilters: function horizontalFilters() {
		const listFilters = document.querySelectorAll('.js-hz-filter');
		listFilters.forEach((item, i) => {
			const inputField = item.querySelector('.js-hz-filter-input');
			const dropdown = item.querySelector('.js-hz-filter-list');
			const dropdownArray = [... item.querySelectorAll('li')];

			let valueArray = [];

			dropdownArray.forEach(item => {
				let searchLabel = item.querySelector('.js-hz-filter-label');
				if ( !searchLabel ) return false;
				valueArray.push(searchLabel.textContent);
			});

			const closeDropdown = () => {
				dropdown.classList.remove('open');
			}

			inputField.addEventListener('input', () => {
				dropdown.classList.add('open');
				let inputValue = inputField.value.toLowerCase();
				let valueSubstring;
				if (inputValue.length > 0) {
					for (let j = 0; j < valueArray.length; j++) {
						if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
							dropdownArray[j].classList.add('closed');
						} else {
							dropdownArray[j].classList.remove('closed');
						}
					}
				} else {
					for (let i = 0; i < dropdownArray.length; i++) {
						dropdownArray[i].classList.remove('closed');
					}
				}
			});

			dropdownArray.forEach(item => {
				item.addEventListener('click', (evt) => {

					if ( item.querySelector('input[type="checkbox"]').checked ) {
						item.classList.remove('current');
						item.querySelector('input[type="checkbox"]').checked = false;
					} else {
						item.classList.add('current');
						item.querySelector('input[type="checkbox"]').checked = true;
					}

          if ( item.getAttribute('data-placeholder') ) {
						inputField.placeholder = item.dataset.placeholder;
					}

					const formData = new FormData(inputField.closest('form'));
			    const searchParams = new URLSearchParams(formData).toString();

			    theme.CollectionFilters.renderPage(searchParams);

					dropdownArray.forEach(dropdown => {
						dropdown.classList.add('closed');
					});
				});
			})

			inputField.addEventListener('focus', () => {
				 inputField.placeholder = inputField.dataset.genericPlaceholder;
				 inputField.classList.add('active');
				 dropdown.classList.add('open');
				 dropdownArray.forEach(dropdown => {
					 dropdown.classList.remove('closed');
				 });
			});

			inputField.addEventListener('blur', () => {
				inputField.placeholder = inputField.dataset.placeholder;
				inputField.classList.remove('active');
				dropdown.classList.remove('open');
			});

			document.addEventListener('click', (evt) => {
				const isDropdown = dropdown.contains(evt.target);
				const isInput = inputField.contains(evt.target);
				if (!isDropdown && !isInput) {
					dropdown.classList.remove('open');
				}
			});
		});
    // Show / hide dropdown filters
    const showFilters = document.querySelector('.js-show-filters');

    if (!showFilters) return false;

    showFilters.addEventListener('click', function(event){
     event.preventDefault();
     theme.Helpers.toggleClass("collection__filter-wrapper", "open");
    });
	},
	priceRange: function priceRange() {
		// Add filter to urlParm after text input changes
		const filters = document.querySelectorAll('.js-filter-range-input');
		if (filters.length > 0) {
			filters.forEach((item, i) => {
				item.addEventListener('change', function(event){
					setTimeout(function() {
						const formData = new FormData(item.closest('form'));
						const searchParams = new URLSearchParams(formData).toString();

						theme.CollectionFilters.renderPage(searchParams);

					}, 1000);
				});
			});
		}

		// Open/close horizontal price range filter
		const filterButtons = document.querySelectorAll('.js-hz-filter-price-trigger');

		filterButtons.forEach((item, i) => {
			// Show or hide dropdown when clicking
			document.addEventListener('click', function(event){
				const dropdown = item.nextElementSibling;
				const isTrigger = event.target.classList.contains('js-hz-filter-price-trigger');
				const isDropdown = dropdown.contains(event.target);

				// Prevent default on button
				if (isTrigger) {
					event.preventDefault();
				}

				// Hide dropdown on off click
				if (!isDropdown && !isTrigger) {
					item.classList.remove('active');
					dropdown.style.display = 'none';
				}

				// Only show dropdown if clicked Trigger
				if (!isTrigger) return false;

				if (dropdown.style.display == 'inline-block') {
					item.classList.remove('active');
					dropdown.style.display = 'none';
				} else {
					item.classList.add('active');
					dropdown.style.display = 'inline-block';
				}

			});

			// Show dropdown when tabbing on
			let mouseDown = false;

			item.addEventListener('mousedown', () => {
				mouseDown = true;
			});

			item.addEventListener('mouseup', () => {
				mouseDown = false;
			});

			item.addEventListener('focus', (event) => {
				if (!mouseDown) {
					const dropdown = event.target.nextElementSibling;
					item.classList.add('active');
					dropdown.style.display = 'inline-block';
				}
			});

			// Hide dropdown when tabbing off
			document.addEventListener('keyup', (event) => {
				if (event.keyCode == 9) {
					const dropdown = document.querySelector('.js-hz-filter-price-dropdown');

					if (!document.querySelector('.js-hz-filter-price').contains(event.target)) {
						item.classList.remove('active');
						dropdown.style.display = 'none';
					}
				}
			});
		});
	},
  priceSlider: function priceSlider() {
    var parents = document.querySelectorAll(".js-price-range");

    if ( !parents ) return false;

    parents.forEach((parent, i) => {
      var rangeS = parent.querySelectorAll("input[type=range]"),
          numberS = parent.querySelectorAll("input[type=number]");

      rangeS.forEach(function(el) {
        el.oninput = function() {
          var slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);

          var slide1Dec = (Math.round(slide1 * 100) / 100).toFixed(2),
              slide2Dec = (Math.round(slide2 * 100) / 100).toFixed(2);

          if (parseFloat(slide1Dec) > parseFloat(slide2Dec)) { [slide1Dec, slide2Dec] = [slide2Dec, slide1Dec] }

          numberS[0].value = slide1Dec;
          numberS[1].value = slide2Dec;
        }
      });

      rangeS[0].onchange = function() {
        numberS[0].dispatchEvent(new Event('change', { bubbles: true }));
      }
      rangeS[1].onchange = function() {
        numberS[1].dispatchEvent(new Event('change', { bubbles: true }));
      }

      numberS.forEach(function(el) {
        el.oninput = function() {
          var number1 = parseFloat(numberS[0].value),
              number2 = parseFloat(numberS[1].value);

          var number1Dec = (Math.round(number1 * 100) / 100).toFixed(2),
              number2Dec = (Math.round(number2 * 100) / 100).toFixed(2);

          if (number1Dec > number2Dec) {
            var tmp = number1Dec;
            numberS[0].value = number2Dec;
            numberS[1].value = tmp;
          }

          rangeS[0].value = number1Dec;
          rangeS[1].value = number2Dec;

        }
      });
    });
  },
	currentFilters: function currentFilters() {
		const filters = document.querySelectorAll('.js-current-filter');

		filters.forEach((item, i) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				theme.CollectionFilters.onActiveFilterClick(event);
			});
		});
	},
	sidebarFilters: function sidebarFilters() {
		const filters = document.querySelectorAll('.js-collection-side-filter');

		filters.forEach((item, i) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();

				if ( item.querySelector('input[type="checkbox"]').checked ) {
					item.classList.remove('current');
					item.querySelector('input[type="checkbox"]').checked = false;
				} else {
					item.classList.add('current');
					item.querySelector('input[type="checkbox"]').checked = true;
				}

				const formData = new FormData(item.closest('form'));
				const searchParams = new URLSearchParams(formData).toString();

				theme.CollectionFilters.renderPage(searchParams);
			});
		});
	},
  stickySidebar: function stickySidebar() {
    if ( window.innerWidth > 980 ) {
      stickySidebar();
    }
    document.addEventListener('load resize orientationchange', function() {
       if ( window.innerWidth > 980 ) {
         stickySidebar();
       }
     });
    document.addEventListener('shopify:section:load', function(event){
      if ( window.innerWidth > 980 ) {
        stickySidebar();
      }
    });

    function stickySidebar(){
      var stickyEl = document.querySelectorAll('.is_sticky');
      if ( !stickyEl ) return false;

      const header = document.querySelector('header'),
            HHeight = header.clientHeight;
            OffSet = Number(HHeight) + Number(10);
      stickybits(".is_sticky", { stickyBitStickyOffset: OffSet });
    }
  },
  infiniteScroll: function infiniteScroll() {
    if ( !document.querySelector('.paginate_next') ) return;

    let elem = document.querySelector("[data-collection-infinite-scroll]");

    if ( !elem ) return false;

    let infScroll = new InfiniteScroll( elem, {
      path: '.paginate_next',
      // options
      append: '.is_infinite .product-index',
      hideNav: '#pagination',
      history: false
    });
  },
	renderFilters: function renderFilters() {
    if ( document.querySelector("[data-collection-filters-hz]") || document.querySelector("[data-collection-sort-by]") ) {
			theme.CollectionFilters.horizontalFilters();
			theme.CollectionFilters.currentFilters();
		}
    if ( document.querySelector("[data-collection-sidebar-filters]") ) {
      WAU.Slideout._reloadSlideoutContents("collection-sidebar");
			WAU.Slideout.init("collection-sidebar");

      theme.CollectionFilters.sidebarFilters();
      theme.CollectionFilters.stickySidebar();
    }
    if ( document.querySelector("[data-collection-filters-price-range]") ) {
      theme.CollectionFilters.priceRange();
      theme.CollectionFilters.priceSlider();
    }
    if ( document.querySelector("[data-collection-infinite-scroll]") ) {
      theme.CollectionFilters.infiniteScroll();
    }
    if ( document.querySelector("[data-collection-sort-by]") ) {
			if ( document.querySelector("[data-collection-sort-by]").querySelector('.current') ) {
        const placeholder = document.querySelector("[data-collection-sort-by]").querySelector('.current').dataset.placeholder;
        document.querySelector("[data-collection-sort-by]").querySelector('.js-hz-filter-input').placeholder = placeholder;
      }
		}
    Shopify.theme.quickview.init();
    WAU.ProductGridVideo.init();
	},
	renderSectionFromFetch: function renderSectionFromFetch(url, section) {
		fetch(url)
			.then(response => response.text())
			.then((responseText) => {
				const html = responseText;
				this.filterData = [...this.filterData, { html, url }];
				theme.CollectionFilters.renderProductGrid(html);
				theme.CollectionFilters.renderFilters();
			});
	},
	renderSectionFromCache: function renderSectionFromCache(filterDataUrl, section) {
		const html = this.filterData.find(filterDataUrl).html;
		theme.CollectionFilters.renderProductGrid(html);
		theme.CollectionFilters.renderFilters();
	},
	renderPage: function renderPage(searchParams, updateURLHash = true) {
		const sections = theme.CollectionFilters.getSections();

    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = element => element.url === url;

      this.filterData.some(filterDataUrl) ?
        theme.CollectionFilters.renderSectionFromCache(filterDataUrl, section) :
        theme.CollectionFilters.renderSectionFromFetch(url, section);
    });

    if (updateURLHash) theme.CollectionFilters.updateURLHash(searchParams);
	},
	renderProductGrid: function renderProductGrid(html) {
    const innerHTML = new DOMParser()
      .parseFromString(html, 'text/html')
      .getElementById('CollectionProductGrid').innerHTML;

    document.getElementById('CollectionProductGrid').innerHTML = innerHTML;
	},
	onActiveFilterClick: function onActiveFilterClick(event) {
		event.preventDefault();
		theme.CollectionFilters.renderPage(new URL(event.currentTarget.href).searchParams.toString());
	},
	updateURLHash: function updateURLHash(searchParams) {
		history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
	},
	getSections: function getSections() {
    return [
      {
        id: 'main-collection-product-grid',
        section: document.getElementById('main-collection-product-grid').dataset.id,
      }
    ]
  }
}

/*======================================================
  Search Page
========================================================*/
theme.Search = (function() {
  function Search(container) {

    if ( container.querySelector("[data-search-filters]") ) {
      theme.SearchFilters.init(container, container.dataset.sectionId);
    }

  }
  Search.prototype = _.assignIn({}, Search.prototype, {});

  return Search;
})();

theme.SearchFilters = {
	init: function init(container, sectionId) {
    theme.SearchFilters.horizontalFilters();
    theme.SearchFilters.currentFilters();

		if ( container.querySelector("[data-search-filters-price-range]") ) {
			theme.SearchFilters.priceRange();
      theme.SearchFilters.priceSlider();
		}

		this.filterData = [];
	},
	horizontalFilters: function horizontalFilters() {
		const listFilters = document.querySelectorAll('.js-hz-filter');
		listFilters.forEach((item, i) => {
			const inputField = item.querySelector('.js-hz-filter-input');
			const dropdown = item.querySelector('.js-hz-filter-list');
			const dropdownArray = [... item.querySelectorAll('li')];

			let valueArray = [];

			dropdownArray.forEach(item => {
				let searchLabel = item.querySelector('.js-hz-filter-label');
				if ( !searchLabel ) return false;
				valueArray.push(searchLabel.textContent);
			});

			const closeDropdown = () => {
				dropdown.classList.remove('open');
			}

			inputField.addEventListener('input', () => {
				dropdown.classList.add('open');
				let inputValue = inputField.value.toLowerCase();
				let valueSubstring;
				if (inputValue.length > 0) {
					for (let j = 0; j < valueArray.length; j++) {
						if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
							dropdownArray[j].classList.add('closed');
						} else {
							dropdownArray[j].classList.remove('closed');
						}
					}
				} else {
					for (let i = 0; i < dropdownArray.length; i++) {
						dropdownArray[i].classList.remove('closed');
					}
				}
			});

			dropdownArray.forEach(item => {
				item.addEventListener('click', (evt) => {

					if ( item.querySelector('input[type="checkbox"]').checked ) {
						item.classList.remove('current');
						item.querySelector('input[type="checkbox"]').checked = false;
					} else {
						item.classList.add('current');
						item.querySelector('input[type="checkbox"]').checked = true;
					}

          if ( item.getAttribute('data-placeholder') ) {
						inputField.placeholder = item.dataset.placeholder;
					}

					const formData = new FormData(inputField.closest('form'));
			    const searchParams = new URLSearchParams(formData).toString();



					dropdownArray.forEach(dropdown => {
						dropdown.classList.add('closed');
					});
				});
			})

			inputField.addEventListener('focus', () => {
				 inputField.placeholder = inputField.dataset.genericPlaceholder;
				 inputField.classList.add('active');
				 dropdown.classList.add('open');
				 dropdownArray.forEach(dropdown => {
					 dropdown.classList.remove('closed');
				 });
			});

			inputField.addEventListener('blur', () => {
				inputField.placeholder = inputField.dataset.placeholder;
				inputField.classList.remove('active');
				dropdown.classList.remove('open');
			});

			document.addEventListener('click', (evt) => {
				const isDropdown = dropdown.contains(evt.target);
				const isInput = inputField.contains(evt.target);
				if (!isDropdown && !isInput) {
					dropdown.classList.remove('open');
				}
			});
		});
	},
	priceRange: function priceRange() {
		// Add filter to urlParm after text input changes
		const filters = document.querySelectorAll('.js-filter-range-input');
		if (filters.length > 0) {
			filters.forEach((item, i) => {
				item.addEventListener('change', function(event){
					setTimeout(function() {
						const formData = new FormData(item.closest('form'));
						const searchParams = new URLSearchParams(formData).toString();
            var searchString = window.location.search.toString(),
                searchString = searchString.replace('?', '');

            theme.SearchFilters.renderPage(searchString + '&' + searchParams);

					}, 1000);
				});
			});
		}

		// Open/close horizontal price range filter
		const filterButtons = document.querySelectorAll('.js-hz-filter-price-trigger');

		filterButtons.forEach((item, i) => {
			// Show or hide dropdown when clicking
			document.addEventListener('click', function(event){
				const dropdown = item.nextElementSibling;
				const isTrigger = event.target.classList.contains('js-hz-filter-price-trigger');
				const isDropdown = dropdown.contains(event.target);

				// Prevent default on button
				if (isTrigger) {
					event.preventDefault();
				}

				// Hide dropdown on off click
				if (!isDropdown && !isTrigger) {
					item.classList.remove('active');
					dropdown.style.display = 'none';
				}

				// Only show dropdown if clicked Trigger
				if (!isTrigger) return false;

				if (dropdown.style.display == 'inline-block') {
					item.classList.remove('active');
					dropdown.style.display = 'none';
				} else {
					item.classList.add('active');
					dropdown.style.display = 'inline-block';
				}

			});

			// Show dropdown when tabbing on
			let mouseDown = false;

			item.addEventListener('mousedown', () => {
				mouseDown = true;
			});

			item.addEventListener('mouseup', () => {
				mouseDown = false;
			});

			item.addEventListener('focus', (event) => {
				if (!mouseDown) {
					const dropdown = event.target.nextElementSibling;
					item.classList.add('active');
					dropdown.style.display = 'inline-block';
				}
			});

			// Hide dropdown when tabbing off
			document.addEventListener('keyup', (event) => {
				if (event.keyCode == 9) {
					const dropdown = document.querySelector('.js-hz-filter-price-dropdown');

					if (!document.querySelector('.js-hz-filter-price').contains(event.target)) {
						item.classList.remove('active');
						dropdown.style.display = 'none';
					}
				}
			});
		});
	},
  priceSlider: function priceSlider() {
    var parents = document.querySelectorAll(".js-price-range");

    if ( !parents ) return false;

    parents.forEach((parent, i) => {
      var rangeS = parent.querySelectorAll("input[type=range]"),
          numberS = parent.querySelectorAll("input[type=number]");

      rangeS.forEach(function(el) {
        el.oninput = function() {
          var slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);

          var slide1Dec = (Math.round(slide1 * 100) / 100).toFixed(2),
              slide2Dec = (Math.round(slide2 * 100) / 100).toFixed(2);

          if (parseFloat(slide1Dec) > parseFloat(slide2Dec)) { [slide1Dec, slide2Dec] = [slide2Dec, slide1Dec] }

          numberS[0].value = slide1Dec;
          numberS[1].value = slide2Dec;
        }
      });

      rangeS[0].onchange = function() {
        numberS[0].dispatchEvent(new Event('change', { bubbles: true }));
      }
      rangeS[1].onchange = function() {
        numberS[1].dispatchEvent(new Event('change', { bubbles: true }));
      }

      numberS.forEach(function(el) {
        el.oninput = function() {
          var number1 = parseFloat(numberS[0].value),
              number2 = parseFloat(numberS[1].value);

          var number1Dec = (Math.round(number1 * 100) / 100).toFixed(2),
              number2Dec = (Math.round(number2 * 100) / 100).toFixed(2);

          if (number1Dec > number2Dec) {
            var tmp = number1Dec;
            numberS[0].value = number2Dec;
            numberS[1].value = tmp;
          }

          rangeS[0].value = number1Dec;
          rangeS[1].value = number2Dec;

        }
      });
    });
  },
	currentFilters: function currentFilters() {
		const filters = document.querySelectorAll('.js-current-filter');

		filters.forEach((item, i) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				theme.SearchFilters.onActiveFilterClick(event);
			});
		});
	},
	renderFilters: function renderFilters() {
    theme.SearchFilters.horizontalFilters();
    theme.SearchFilters.currentFilters();

    if ( document.querySelector("[data-search-filters-price-range]") ) {
      theme.SearchFilters.priceRange();
      theme.SearchFilters.priceSlider();
    }

    Shopify.theme.quickview.init();
    WAU.ProductGridVideo.init();
	},
	renderSectionFromFetch: function renderSectionFromFetch(url, section) {
		fetch(url)
			.then(response => response.text())
			.then((responseText) => {
				const html = responseText;
				this.filterData = [...this.filterData, { html, url }];
				theme.SearchFilters.renderSearchGrid(html);
				theme.SearchFilters.renderFilters();
			});
	},
	renderSectionFromCache: function renderSectionFromCache(filterDataUrl, section) {
		const html = this.filterData.find(filterDataUrl).html;
		theme.SearchFilters.renderSearchGrid(html);
		theme.SearchFilters.renderFilters();
	},
	renderPage: function renderPage(searchParams, updateURLHash = true) {
		const sections = theme.SearchFilters.getSections();

    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = element => element.url === url;

      this.filterData.some(filterDataUrl) ?
        theme.SearchFilters.renderSectionFromCache(filterDataUrl, section) :
        theme.SearchFilters.renderSectionFromFetch(url, section);
    });

    if (updateURLHash) theme.SearchFilters.updateURLHash(searchParams);
	},
	renderSearchGrid: function renderSearchGrid(html) {
    const innerHTML = new DOMParser()
      .parseFromString(html, 'text/html')
      .getElementById('searchResultsWrapper').innerHTML;

    document.getElementById('searchResultsWrapper').innerHTML = innerHTML;
	},
  onActiveFilterClick: function onActiveFilterClick(event) {
    event.preventDefault();
    const searchParams = new URL(event.currentTarget.href).searchParams.toString();
    const searchString = new URL(window.location).searchParams.get('q');

    var finalSearchParams = ( searchParams ) ? searchParams : 'q=' + searchString;

    theme.SearchFilters.renderPage(finalSearchParams);
  },
	updateURLHash: function updateURLHash(searchParams) {
		history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
	},
	getSections: function getSections() {
    return [
      {
        id: 'main-search-results',
        section: document.getElementById('main-search-results').dataset.id,
      }
    ]
  }
}

/*============================================================================
  Parallax scrolling
==============================================================================*/
theme.Parallax = (function() {
  function Parallax(container) {

    var sectionId = container.dataset.sectionId;

    var Scale = container.dataset.scale;
    var image = container.querySelectorAll('img');

    var initParallaxSection = function(ParallaxSection) {
      new simpleParallax(image, {
        scale: Scale,
      	delay: .3,
        customWrapper: 'parallax-image',
      	transition: 'cubic-bezier(0,0,0,1)'
      });
    }

    initParallaxSection(image);

    document.addEventListener('shopify:section:load', function(event){
      if ( event.detail.sectionId == sectionId ) initParallaxSection(image);
    });

  }
  return Parallax;
})();

theme.Parallax.prototype = _.assignIn({}, theme.Parallax.prototype, {});

/*============================================================================
  Footer Section
==============================================================================*/
var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.Footer = (function() {
  function Footer(container) {
    this.container = container;
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.localeDisclosure) {
      this.localeDisclosure = new theme.Disclosure(this.cache.localeDisclosure);
    }

    if (this.cache.currencyDisclosure) {
      this.currencyDisclosure = new theme.Disclosure(
        this.cache.currencyDisclosure
      );
    }
  }

  Footer.prototype = _.assignIn({}, Footer.prototype, {
    cacheSelectors: function() {
      this.cache = {
        localeDisclosure: this.container.querySelector(
          selectors.disclosureLocale
        ),
        currencyDisclosure: this.container.querySelector(
          selectors.disclosureCurrency
        )
      };
    },
    onUnload: function() {
      if (this.cache.localeDisclosure) {
        this.localeDisclosure.destroy();
      }

      if (this.cache.currencyDisclosure) {
        this.currencyDisclosure.destroy();
      }
    }
  });

  return Footer;
})();

/*======================================================
  Password Page Section
========================================================*/
theme.Password = (function() {
  function Password(container) {

    window.addEventListener('DOMContentLoaded', (event) => {
			const passwordError = document.querySelector('.errors');

      if (passwordError) {
				WAU.Slideout._openByName("password");
      } else {
				return false;
			}

    });

		WAU.Slideout.init("password");

    window.addEventListener('shopify:section:select', (event) => {
      WAU.Slideout.init("password");
    });
  }

  Password.prototype = _.assignIn({}, Password.prototype, {});
  return Password;
})();


/*======================================================
  Background Video Section
========================================================*/

const VideoTT = {
  init(container) {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  },
  playerBuild() {
    let containers = document.querySelectorAll('[data-section-type="background-video"]');

    containers.forEach( function(container, i) {
      var player;
      var selector = 'js-alternative-yt-' + container.dataset.sectionId;
      var ytcontainer = container.querySelector('#js-alternative-yt-' + container.dataset.sectionId);

      if (!ytcontainer) {
      	console.warn('Warning. No ytcontainer element found. Bail.');
      	return false;
      }

      player = new YT.Player(selector, {
        videoId: ytcontainer.dataset.id,
        playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'playlist': ytcontainer.dataset.id },
        events: {
          'onReady': VideoTT.onPlayerReady
        }
      });

      let playBtn = container.querySelector('.js-play-video');

      if (!playBtn) {
        return;
      }

      playBtn.addEventListener('click', function(event) {
        player.playVideo();
        event.target.style.display = 'none';
      });
    });

  },
  onPlayerReady(event) {
   event.target.mute();
   event.target.playVideo();
  }
}


theme.BackgroundVideo = (function() {
  function BackgroundVideo(container) {

    var config = JSON.parse(container.dataset.videoConfig || '{}');
    var selectorId = config.sectionId,
        selector = '.js-bg-video-' + selectorId;

    if ( !config.mp4 ) {

      if ( container.querySelector('.js-has-yt') ) {
        VideoTT.init(container);
      }

    } else {

    var options = {
      mp4: config.mp4,
      poster: config.poster,
      overlay: config.overlay,
      overlayColor: config.overlayColor,
    };

    var attributes = {
      autoplay: true,
      controls: false,
      loop: true,
      muted: true,
      playsInline: true,
    };

    var instance = new vidbg(selector, options);

    var vid = selector + ' video',
        vid = document.querySelector(vid);
    vid.muted = true;

    }

  }

  return BackgroundVideo;
})();


theme.BackgroundVideo.prototype = _.assignIn({}, theme.BackgroundVideo.prototype, {
  onSectionLoad: (event) => {

    if (event.target.querySelector('[data-section-type="background-video"]')) {
      var container = event.target.querySelector('[data-section-type="background-video"]');

      theme.BackgroundVideo(container);

      if ( container.querySelector('.js-has-yt') ) {
        VideoTT.init(container);
      }
    }
  },
  onSelect: (event) => {
    if (event.target.querySelector('[data-section-type="background-video"]')) {
      var container = event.target.querySelector('[data-section-type="background-video"]');
      if ( container.querySelector('.js-has-yt') ) {
        VideoTT.playerBuild();
      }
    }
  }
});

/*======================================================
  Customer Account Page Section
========================================================*/
theme.CustomerAccount = (function() {

  function CustomerAccount() {

  }
  // Show Hide Function
  function Toggle(show) {
    var allDivs = document.querySelectorAll('.content-item');
    allDivs.forEach((item, i) => {
      item.style.display = "none";
    });
    var show = document.getElementById(show);
    show.style.display = 'block';
  }

  var list = document.querySelectorAll('.sidebar-nav li a[data-toggle-link]');
  list.forEach((item, i) => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('.sidebar-nav .selected').classList.remove('selected');
      Toggle(item.dataset.toggleLink);
      this.classList.add('selected');
    }, false);
  });

  CustomerAccount.prototype = _.assignIn({}, CustomerAccount.prototype, {});
  return CustomerAccount;
})();


/*======================================================
  Shop The Look
========================================================*/
theme.ShopTheLook = (function() {

  function ShopTheLook(container) {

    // Get the AOS data attribute value
    const dataAOS = container.dataset.aos;
    const PADDING = 10;

    document.addEventListener("aos:in", ({ detail }) => {
      if (detail === container) {
        setTimeout(() => {
          detail.classList.remove("aos-init");
          detail.classList.remove("aos-animate");
          detail.removeAttribute("data-aos");
        }, 2000);
      }
    });
    document.addEventListener("aos:out", ({ detail }) => {
      if (detail === container) {
        detail.classList.add("aos-init");
        detail.setAttribute("data-aos", dataAOS);
      }
    });

    // Handle product popup adjusts the product's position
    // based on if it goes out of bounds or not.
    const handleProductPopup = event => {

      // Get event target.
      let target = event.target;

      // Bail if there is no event target.
      if (!target) {
        return false;
      }

      // Bail if document element
      if (target.nodeName === '#document') {
        return false;
      }

      // Bail if target is not a hotspot
      if (!target.matches('.hotspot')) {
        return false;
      }

      // Get child product.
      let product = target.querySelector('.product-hotspot');
      // Use helper method to determine if it is out of bounds
      // or not.
      let isOut = theme.DOMHelpers.isOutOfBounds(product);

      if (isOut.left) {
        product.style.transform = `translateX(${Math.round(Math.abs(isOut.leftAmount)) + PADDING}px)`;
      }
      if (isOut.right) {
        product.style.transform = `translateX(${(Math.round(isOut.rightAmount) + (PADDING * 2)) * -1}px)`;
      }
    };

    // Get all the hotspots in the section container.
    let hotspots = container.querySelectorAll('.hotspot');

    // Check if there are hotspots
    if (hotspots.length > 0) {
      // Apply event listeners to all of them
      hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', handleProductPopup);
        hotspot.addEventListener('mouseenter', handleProductPopup);
      });
    };
  }
  ShopTheLook.prototype = _.assignIn({}, ShopTheLook.prototype, {});
  return ShopTheLook;
})();


/*======================================================
  Mailing Popup
========================================================*/
theme.MailingPopup = (function() {

  const Popup = (function() {

    const defaults = {
      selectors: {
        popupContainer: ".newsletter__popup-container",
        popupOverlay: ".newsletter__popup-overlay",
        popupCloseButton: ".newsletter__popup-container-close"
      },
      classes: {
        visible: "is-visible",
      },
      viewportWidth: 740, // Viewport must be greater than this number to open
      overlay: true,      // Enabled overlay
      defaultFrequency: 5,  // Days
      defaultPopupDelay: 5000, // Milliseconds
      cookieSetName: "popupShown", // What cookie sets
      debug: false,
      escape: true, // Listen to escape button to close the pop up
      fadeAnimation: false // Use fade functions from theme helpers
    };

    let lastFocus, popupTestMode, popupFrequency;
    const publicAPIs = {};

    /*
     * @description return the viewport width
     */
    const getViewportWidth = () => window.innerWidth || document.documentElement.clientWidth;

    /*
     * @description handle overlay click event to exit overlay
     */
    const handleOverlayEvent = (event) => {
      if (event.target === document.querySelector(`${settings.selectors.popupOverlay}.${settings.classes.visible}`)) {
          publicAPIs.close();
      }
    };

    /*
     * @description handle escape keyboard event
     */
    const handleEscapeKeyboardEvent = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        publicAPIs.close();
      }
    };

    /*
     * @description check if theme.Helper fade functions are available
     */
    const checkFadeSupport = () => typeof theme.Helpers.fadeIn === 'function' && typeof theme.Helpers.fadeOut === 'function';

    /*
     * @description checks to see if fadeAnimations option is enabled and supported
     */
    const useFadeAnimation = () => settings.fadeAnimation && checkFadeSupport();

    /*
     * @description handle close button event
     */
    const handleCloseButtonEvent = (event) => {
      publicAPIs.close(event);
    };

    /*
     * @description check if working in the theme editor
     */
    const themeEditorCheck = () => Shopify.designMode;

    /*
     * @description open the pop up
     */
    publicAPIs.open = () => {

      if (getViewportWidth() < settings.viewportWidth) {
        return;
      }

      if (settings.overlay && document.querySelector(settings.selectors.popupOverlay)) document.querySelector(settings.selectors.popupOverlay).classList.add(settings.classes.visible);

      if (document.querySelector(settings.selectors.popupContainer)) {
        if (useFadeAnimation()) {
          theme.Helpers.fadeIn(document.querySelector(settings.selectors.popupContainer));
        } else {
          document.querySelector(settings.selectors.popupContainer).style.display = "block";
        }
      }

      // Don't set cookie when inside the theme editor
      if (themeEditorCheck() !== true) {
        Cookies.set(settings.cookieSetName, 'yes', { expires: popupFrequency });
      }

      if (typeof theme.a11yHelpers.focusOnElement === 'function') {
        theme.a11yHelpers.focusOnElement(document.querySelector(settings.selectors.popupContainer));
      }
    };

    /*
     * @description close the pop up
     */
    publicAPIs.close = event => {

      if (document.querySelector(settings.selectors.popupContainer)) {
        if (useFadeAnimation()) {
          theme.Helpers.fadeOut(document.querySelector(settings.selectors.popupContainer));
        } else {
          document.querySelector(settings.selectors.popupContainer).style.display = "none";
        }
      }

      if (settings.overlay && document.querySelector(settings.selectors.popupOverlay)) document.querySelector(settings.selectors.popupOverlay).classList.remove(settings.classes.visible);

      // If there was an event passed in, prevent it from redirecting
      if (event) event.preventDefault();

      // If there is a lastFocus element then focus on it
      if (lastFocus) lastFocus.focus();
    };

    /*
     * @description initialize the pop up
     */
    publicAPIs.init = (options) => {

      settings = Object.assign({}, defaults, options);

      popupFrequency = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-frequency') ? Number(document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-frequency')) : settings.defaultFrequency;

      const popupDelayAttribute = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-delay');

      let popupDelay = Number(popupDelayAttribute) * 1000;

      const popupCloseEl = document.querySelector(settings.selectors.popupCloseButton);

      if (!popupCloseEl) {
        if (settings.debug) console.log('err. no popup close button');
      }

      const popupEnabledAttribute = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-enabled');

      const popupEnabled = popupEnabledAttribute == 'true' ? true : false;

      // Register events
      popupCloseEl.addEventListener('click', handleCloseButtonEvent)

      if (settings.escape) {
        document.addEventListener('keyup', handleEscapeKeyboardEvent);
      }

      if (settings.overlay) {
        document.addEventListener('click', handleOverlayEvent);
      }

      // Bail if working inside the theme editor
      if (themeEditorCheck() || !popupEnabled ) return;

      setTimeout(function() {

        if (themeEditorCheck() == true) {

          lastFocus = document.activeElement;

          publicAPIs.open();

        } else {

          const popUpShownCookie = Cookies.get(settings.cookieSetName);

          if (!popUpShownCookie) {
            lastFocus = document.activeElement;
            publicAPIs.open();
          }
        }
      }, popupDelay);
    };

    return publicAPIs;

  })();

  function MailingPopup(container) {
    // Initialize pop up
    Popup.init({
      selectors: {
        popupContainer: ".js-popup",
        popupOverlay: ".js-popup-overlay",
        popupCloseButton: ".js-popup-close",
      },
      fadeAnimation: true
    });
  };

  // Interact with the theme editor
  MailingPopup.prototype = _.assignIn({}, MailingPopup.prototype, {
    onSelect: function() {
      Popup.open();
    },
    onDeselect: function() {
      Popup.close();
    }
  });

  return MailingPopup;
})();



/*============================================================================
  Registering Index Sections
==============================================================================*/

document.addEventListener("DOMContentLoaded", function(){
  var sections = new theme.Sections();
  sections.register('announcement-bar-section', theme.AnnouncementBar);
  sections.register('header-section', theme.Header);
  sections.register('footer-section', theme.Footer);
  sections.register('slideshow-section', theme.Slideshow);
  sections.register('carousel-section', theme.FeaturedCollection);
  sections.register('testimonials', theme.Testimonials);
  sections.register('product__section', theme.Product);
  sections.register('product-recommendations', theme.ProductRecommendations);
  sections.register('recently-viewed', theme.RecentlyViewed);
  sections.register('mobile-navigation', theme.mobileNav);
  sections.register('collection-section', theme.Collection);
  sections.register('map', theme.Maps);
  sections.register('scrolling-announcements', theme.ScrollingAnnouncements);
  sections.register('search-section', theme.Search);
  sections.register('related-products-section', theme.RelatedProducts);
  sections.register('iwto-section', theme.Parallax);
  sections.register('shop-the-look', theme.ShopTheLook);
  sections.register('password-page', theme.Password);
  sections.register('mailing-popup', theme.MailingPopup);
  sections.register('customer-account', theme.CustomerAccount);
  sections.register('background-video', theme.BackgroundVideo);
});

/*============================================================================
  Global Events
==============================================================================*/
document.addEventListener("DOMContentLoaded", function(){
  if ( mobile.matches ) {
    Events.trigger("mediaquery:mobile");
  }

  if ( tablet.matches ) {
    Events.trigger("mediaquery:tablet");
  }

  if (desktop.matches) {
    Events.trigger("mediaquery:desktop");
  }

  window.addEventListener("resize", function () {
    if ( mobile.matches ) {
      Events.trigger("mediaquery:mobile");
    }

    if ( tablet.matches ) {
      Events.trigger("mediaquery:tablet");
    }

    if ( desktop.matches ) {
      Events.trigger("mediaquery:desktop");
    }
  });

  document.addEventListener('shopify:section:select', function(event){
    Events.trigger("editor:section:select", event);
  });

  document.addEventListener('shopify:section:deselect', function(event){
    Events.trigger("editor:section:deselect", event);
  });

  document.addEventListener('shopify:section:load', function(event){
    Events.trigger("editor:section:load", event);
  });

  document.addEventListener('shopify:section:unload', function(event){
    Events.trigger("editor:section:unload", event);
  });

  document.addEventListener('shopify:block:select', function(event){
    Events.trigger("editor:block:select", event);
  });

  document.addEventListener('shopify:block:deselect', function(event){
    Events.trigger("editor:block:deselect", event);
  });

  document.addEventListener('lazyloaded', function(e){
    Events.trigger("lazyLoad:complete");
  });

  if ( document.querySelectorAll('.js-bg-video-wrapper') ) {
    WAU.ProductGridVideo.init();
  }

});

/* Log Theme Version */
log = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(console);
    return Function.prototype.bind.apply(console.log, args);
}

log("Icon Version 8.4.1 by Underground", {bar: 1})();
