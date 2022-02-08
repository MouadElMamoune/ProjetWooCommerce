!function(){var t={54166:function(t,e){"use strict";var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,a=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function c(){o(s)}function a(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),u=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},h=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},f=b(0,0,0,0);function l(t){return parseFloat(t)||0}function d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+l(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return f;var r=h(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=l(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=l(r.width),a=l(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=d(r,"left","right")+o),Math.round(a+s)!==n&&(a-=d(r,"top","bottom")+s)),!function(t){return t===h(t).document.documentElement}(t)){var u=Math.round(c+o)-e,p=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(p)&&(a-=p)}return b(i.left,i.top,c,a)}var v="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof h(t).SVGGraphicsElement}:function(t){return t instanceof h(t).SVGElement&&"function"==typeof t.getBBox};function _(t){return r?v(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):p(t):f}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),w=function(t,e){var n,r,i,o,s,c,a,h=(r=(n=e).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),u(a,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),a);u(this,{target:t,contentRect:h})},y=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new w(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),g="undefined"!=typeof WeakMap?new WeakMap:new n,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new y(e,n,this);g.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){var e;return(e=g.get(this))[t].apply(e,arguments)}}));var O=void 0!==i.ResizeObserver?i.ResizeObserver:E;e.Z=O},28526:function(t,e,n){"use strict";n.d(e,{q3:function(){return r}});const r=4},17265:function(t,e,n){"use strict";n.d(e,{iN:function(){return s}});var r=n(69307),i=n(28526);function o(t,e){const n=(e-t.reduce(((t,e)=>t+e),0))/t.length;return t.map((t=>t+n))}function s(t,e){return function(t,e,n){let[s,f]=e;const l=r.Platform.select({web:()=>t.childElementCount,native:()=>t.length})(),d=1/s*(n-i.q3*(l-1)-f);return function(t,e){let{rawHeight:n,rowWidth:s}=e;const f=c(t),l=f.map((t=>{const e=r.Platform.select({web:()=>t.childElementCount,native:()=>t.length})();return(n-i.q3*(e-1))*u(t)[0]})),d=o(l,s);f.forEach(((t,e)=>{const s=l[e],c=d[e],u=r.Platform.select({web:()=>t.childElementCount,native:()=>t.length})();!function(t,e){let{colHeight:n,width:i,rawWidth:s}=e;const c=o(a(t).map((t=>s/h(t))),n);r.Platform.select({web:()=>{Array.from(t.children).forEach(((t,e)=>{const n=c[e];t.setAttribute("style",`height:${n}px;width:${i}px;`)}))}})()}(t,{colHeight:n-i.q3*(u-1),width:c,rawWidth:s})}));return d.map((t=>parseFloat(t/s*100).toFixed(5)))}(t,{rawHeight:d,rowWidth:n-i.q3*(l-1)})}(t,function(t){return c(t).map(u).reduce(((t,e)=>{let[n,r]=t,[i,o]=e;return[n+i,r+o]}),[0,0])}(t),e)}function c(t){return r.Platform.select({web:()=>Array.from(t.querySelectorAll(".tiled-gallery__col")),native:()=>t})()}function a(t){return r.Platform.select({web:()=>Array.from(t.querySelectorAll(".tiled-gallery__item > img, .tiled-gallery__item > a > img")),native:()=>t.map((t=>t.props))})()}function u(t){const e=a(t),n=e.length,r=1/e.map(h).reduce(((t,e)=>t+1/e),0);return[r,r*n||1]}function h(t){const e=r.Platform.select({web:()=>parseInt(t.dataset.width,10),native:()=>t.width})(),n=r.Platform.select({web:()=>parseInt(t.dataset.height,10),native:()=>t.height})();return e&&!Number.isNaN(e)&&n&&!Number.isNaN(n)?e/n:1}},57836:function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},47701:function(t){"use strict";t.exports=window.wp.domReady},69307:function(t){"use strict";t.exports=window.wp.element}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"}(),function(){"use strict";n(57836)}(),function(){"use strict";var t=n(47701),e=n.n(t),r=n(54166),i=n(17265);function o(t){o.pendingRaf&&cancelAnimationFrame(o.pendingRaf),o.pendingRaf=requestAnimationFrame((()=>{o.pendingRaf=null;for(const e of t){const{width:t}=e.contentRect;Array.from(e.target.querySelectorAll(".tiled-gallery__row")).forEach((e=>(0,i.iN)(e,t)))}}))}const s=()=>{const t=Array.from(document.querySelectorAll(".wp-block-jetpack-tiled-gallery.is-style-rectangular > .tiled-gallery__gallery,.wp-block-jetpack-tiled-gallery.is-style-columns > .tiled-gallery__gallery"));if(0===t.length)return;const e=new r.Z(o);t.forEach((t=>{"true"!==t.getAttribute("data-jetpack-block-initialized")&&(e.observe(t),t.setAttribute("data-jetpack-block-initialized","true"))}))};"undefined"!=typeof window&&e()(s)}()}();