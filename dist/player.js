typeof navigator === "object" && (function () {
	'use strict';

	function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,t){var i=[],n=!0,s=!1,a=void 0;try{for(var r,o=e[Symbol.iterator]();!(n=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){s=!0,a=e;}finally{try{n||null==o.return||o.return();}finally{if(s)throw a}}return i}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var defaults={addCSS:!0,thumbWidth:15,watch:!0};function matches(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function trigger(e,t){if(e&&t){var i=new Event(t);e.dispatchEvent(i);}}var getConstructor=function(e){return null!=e?e.constructor:null},instanceOf=function(e,t){return Boolean(e&&t&&e instanceof t)},isNullOrUndefined=function(e){return null==e},isObject=function(e){return getConstructor(e)===Object},isNumber=function(e){return getConstructor(e)===Number&&!Number.isNaN(e)},isString=function(e){return getConstructor(e)===String},isBoolean=function(e){return getConstructor(e)===Boolean},isFunction=function(e){return getConstructor(e)===Function},isArray=function(e){return Array.isArray(e)},isNodeList=function(e){return instanceOf(e,NodeList)},isElement=function(e){return instanceOf(e,Element)},isEvent=function(e){return instanceOf(e,Event)},isEmpty=function(e){return isNullOrUndefined(e)||(isString(e)||isArray(e)||isNodeList(e))&&!e.length||isObject(e)&&!Object.keys(e).length},is={nullOrUndefined:isNullOrUndefined,object:isObject,number:isNumber,string:isString,boolean:isBoolean,function:isFunction,array:isArray,nodeList:isNodeList,element:isElement,event:isEvent,empty:isEmpty};function getDecimalPlaces(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}function round(e,t){if(t<1){var i=getDecimalPlaces(t);return parseFloat(e.toFixed(i))}return Math.round(e/t)*t}var RangeTouch=function(){function e(t,i){_classCallCheck(this,e),is.element(t)?this.element=t:is.string(t)&&(this.element=document.querySelector(t)),is.element(this.element)&&is.empty(this.element.rangeTouch)&&(this.config=Object.assign({},defaults,i),this.init());}return _createClass(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this);}},{key:"destroy",value:function(){e.enabled&&(this.listeners(!1),this.element.rangeTouch=null);}},{key:"listeners",value:function(e){var t=this,i=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[i](e,function(e){return t.set(e)},!1);});}},{key:"get",value:function(t){if(!e.enabled||!is.event(t))return null;var i,n=t.target,s=t.changedTouches[0],a=parseFloat(n.getAttribute("min"))||0,r=parseFloat(n.getAttribute("max"))||100,o=parseFloat(n.getAttribute("step"))||1,l=r-a,c=n.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return (i=100/c.width*(s.clientX-c.left))<0?i=0:i>100&&(i=100),i<50?i-=(100-2*i)*u:i>50&&(i+=2*(i-50)*u),a+round(l*(i/100),o)}},{key:"set",value:function(t){e.enabled&&is.event(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),trigger(t.target,"touchend"===t.type?"change":"input"));}}],[{key:"setup",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(is.empty(t)||is.string(t)?n=Array.from(document.querySelectorAll(is.string(t)?t:'input[type="range"]')):is.element(t)?n=[t]:is.nodeList(t)?n=Array.from(t):is.array(t)&&(n=t.filter(is.element)),is.empty(n))return null;var s=Object.assign({},defaults,i);is.string(t)&&s.watch&&new MutationObserver(function(i){Array.from(i).forEach(function(i){Array.from(i.addedNodes).forEach(function(i){if(is.element(i)&&matches(i,t))new e(i,s);});});}).observe(document.body,{childList:!0,subtree:!0});return n.map(function(t){return new e(t,i)})}},{key:"enabled",get:function(){return "ontouchstart"in document.documentElement}}]),e}(),getConstructor$1=function(e){return null!=e?e.constructor:null},instanceOf$1=function(e,t){return Boolean(e&&t&&e instanceof t)},isNullOrUndefined$1=function(e){return null==e},isObject$1=function(e){return getConstructor$1(e)===Object},isNumber$1=function(e){return getConstructor$1(e)===Number&&!Number.isNaN(e)},isString$1=function(e){return getConstructor$1(e)===String},isBoolean$1=function(e){return getConstructor$1(e)===Boolean},isFunction$1=function(e){return getConstructor$1(e)===Function},isArray$1=function(e){return Array.isArray(e)},isWeakMap=function(e){return instanceOf$1(e,WeakMap)},isNodeList$1=function(e){return instanceOf$1(e,NodeList)},isElement$1=function(e){return instanceOf$1(e,Element)},isTextNode=function(e){return getConstructor$1(e)===Text},isEvent$1=function(e){return instanceOf$1(e,Event)},isKeyboardEvent=function(e){return instanceOf$1(e,KeyboardEvent)},isCue=function(e){return instanceOf$1(e,window.TextTrackCue)||instanceOf$1(e,window.VTTCue)},isTrack=function(e){return instanceOf$1(e,TextTrack)||!isNullOrUndefined$1(e)&&isString$1(e.kind)},isPromise=function(e){return instanceOf$1(e,Promise)},isEmpty$1=function(e){return isNullOrUndefined$1(e)||(isString$1(e)||isArray$1(e)||isNodeList$1(e))&&!e.length||isObject$1(e)&&!Object.keys(e).length},isUrl=function(e){if(instanceOf$1(e,window.URL))return !0;if(!isString$1(e))return !1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return !isEmpty$1(new URL(t).hostname)}catch(e){return !1}},is$1={nullOrUndefined:isNullOrUndefined$1,object:isObject$1,number:isNumber$1,string:isString$1,boolean:isBoolean$1,function:isFunction$1,array:isArray$1,weakMap:isWeakMap,nodeList:isNodeList$1,element:isElement$1,textNode:isTextNode,event:isEvent$1,keyboardEvent:isKeyboardEvent,cue:isCue,track:isTrack,promise:isPromise,url:isUrl,empty:isEmpty$1},transitionEndEvent=function(){var e=document.createElement("span"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i=Object.keys(t).find(function(t){return void 0!==e.style[t]});return !!is$1.string(i)&&t[i]}();function repaint(e,t){setTimeout(function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1;}catch(e){}},t);}var browser={isIE:!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},supportsPassiveListeners=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t);}catch(e){}return e}();function toggleListener(e,t,i){var n=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!is$1.empty(t)&&is$1.function(i)){var o=t.split(" "),l=r;supportsPassiveListeners&&(l={passive:a,capture:r}),o.forEach(function(t){n&&n.eventListeners&&s&&n.eventListeners.push({element:e,type:t,callback:i,options:l}),e[s?"addEventListener":"removeEventListener"](t,i,l);});}}function on(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];toggleListener.call(this,e,t,i,!0,n,s);}function off(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];toggleListener.call(this,e,t,i,!1,n,s);}function once(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];toggleListener.call(this,e,i,function r(){off(e,i,r,s,a);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];n.apply(t,l);},!0,s,a);}function triggerEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(is$1.element(e)&&!is$1.empty(t)){var s=new CustomEvent(t,{bubbles:i,detail:Object.assign({},n,{plyr:this})});e.dispatchEvent(s);}}function unbindListeners(){this&&this.eventListeners&&(this.eventListeners.forEach(function(e){var t=e.element,i=e.type,n=e.callback,s=e.options;t.removeEventListener(i,n,s);}),this.eventListeners=[]);}function ready(){var e=this;return new Promise(function(t){return e.ready?setTimeout(t,0):on.call(e,e.elements.container,"ready",t)}).then(function(){})}function cloneDeep(e){return JSON.parse(JSON.stringify(e))}function getDeep(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}function extend(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];if(!i.length)return e;var s=i.shift();return is$1.object(s)?(Object.keys(s).forEach(function(t){is$1.object(s[t])?(Object.keys(e).includes(t)||Object.assign(e,_defineProperty({},t,{})),extend(e[t],s[t])):Object.assign(e,_defineProperty({},t,s[t]));}),extend.apply(void 0,[e].concat(i))):e}function wrap(e,t){var i=e.length?e:[e];Array.from(i).reverse().forEach(function(e,i){var n=i>0?t.cloneNode(!0):t,s=e.parentNode,a=e.nextSibling;n.appendChild(e),a?s.insertBefore(n,a):s.appendChild(n);});}function setAttributes(e,t){is$1.element(e)&&!is$1.empty(t)&&Object.entries(t).filter(function(e){var t=_slicedToArray(e,2)[1];return !is$1.nullOrUndefined(t)}).forEach(function(t){var i=_slicedToArray(t,2),n=i[0],s=i[1];return e.setAttribute(n,s)});}function createElement(e,t,i){var n=document.createElement(e);return is$1.object(t)&&setAttributes(n,t),is$1.string(i)&&(n.innerText=i),n}function insertAfter(e,t){is$1.element(e)&&is$1.element(t)&&t.parentNode.insertBefore(e,t.nextSibling);}function insertElement(e,t,i,n){is$1.element(t)&&t.appendChild(createElement(e,i,n));}function removeElement(e){is$1.nodeList(e)||is$1.array(e)?Array.from(e).forEach(removeElement):is$1.element(e)&&is$1.element(e.parentNode)&&e.parentNode.removeChild(e);}function emptyElement(e){if(is$1.element(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1;}function replaceElement(e,t){return is$1.element(t)&&is$1.element(t.parentNode)&&is$1.element(e)?(t.parentNode.replaceChild(e,t),e):null}function getAttributesFromSelector(e,t){if(!is$1.string(e)||is$1.empty(e))return {};var i={},n=extend({},t);return e.split(",").forEach(function(e){var t=e.trim(),s=t.replace(".",""),a=t.replace(/[[\]]/g,"").split("="),r=_slicedToArray(a,1)[0],o=a.length>1?a[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":is$1.string(n.class)?i.class="".concat(n.class," ").concat(s):i.class=s;break;case"#":i.id=t.replace("#","");break;case"[":i[r]=o;}}),extend(n,i)}function toggleHidden(e,t){if(is$1.element(e)){var i=t;is$1.boolean(i)||(i=!e.hidden),e.hidden=i;}}function toggleClass(e,t,i){if(is$1.nodeList(e))return Array.from(e).map(function(e){return toggleClass(e,t,i)});if(is$1.element(e)){var n="toggle";return void 0!==i&&(n=i?"add":"remove"),e.classList[n](t),e.classList.contains(t)}return !1}function hasClass(e,t){return is$1.element(e)&&e.classList.contains(t)}function matches$1(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function getElements(e){return this.elements.container.querySelectorAll(e)}function getElement(e){return this.elements.container.querySelector(e)}function trapFocus(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(is$1.element(e)){var i=getElements.call(this,"button:not(:disabled), input:not(:disabled), [tabindex]"),n=i[0],s=i[i.length-1];toggleListener.call(this,this.elements.container,"keydown",function(e){if("Tab"===e.key&&9===e.keyCode){var t=document.activeElement;t!==s||e.shiftKey?t===n&&e.shiftKey&&(s.focus(),e.preventDefault()):(n.focus(),e.preventDefault());}},t,!1);}}function setFocus(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];is$1.element(e)&&(e.focus({preventScroll:!0}),t&&toggleClass(e,this.config.classNames.tabFocus));}var defaultCodecs={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},support={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,i){var n=browser.isIPhone&&i&&support.playsinline,s=support[e]||"html5"!==t;return {api:s,ui:s&&support.rangeInput&&("video"!==e||!browser.isIPhone||n)}},pip:!(browser.isIPhone||!is$1.function(createElement("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||createElement("video").disablePictureInPicture)),airplay:is$1.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(is$1.empty(e))return !1;var t=_slicedToArray(e.split("/"),1)[0],i=e;if(!this.isHTML5||t!==this.type)return !1;Object.keys(defaultCodecs).includes(i)&&(i+='; codecs="'.concat(defaultCodecs[e],'"'));try{return Boolean(i&&this.media.canPlayType(i).replace(/no/,""))}catch(e){return !1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:function(){var e=document.createElement("input");return e.type="range","range"===e.type}(),touch:"ontouchstart"in document.documentElement,transitions:!1!==transitionEndEvent,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches};function validateRatio(e){return !!(is$1.array(e)||is$1.string(e)&&e.includes(":"))&&(is$1.array(e)?e:e.split(":")).map(Number).every(is$1.number)}function reduceAspectRatio(e){if(!is$1.array(e)||!e.every(is$1.number))return null;var t=_slicedToArray(e,2),i=t[0],n=t[1],s=function e(t,i){return 0===i?t:e(i,t%i)}(i,n);return [i/s,n/s]}function getAspectRatio(e){var t=function(e){return validateRatio(e)?e.split(":").map(Number):null},i=t(e);if(null===i&&(i=t(this.config.ratio)),null===i&&!is$1.empty(this.embed)&&is$1.array(this.embed.ratio)&&(i=this.embed.ratio),null===i&&this.isHTML5){var n=this.media;i=reduceAspectRatio([n.videoWidth,n.videoHeight]);}return i}function setAspectRatio(e){if(!this.isVideo)return {};var t=getAspectRatio.call(this,e),i=_slicedToArray(is$1.array(t)?t:[0,0],2),n=100/i[0]*i[1];if(this.elements.wrapper.style.paddingBottom="".concat(n,"%"),this.isVimeo&&this.supported.ui){var s=(240-n)/4.8;this.media.style.transform="translateY(-".concat(s,"%)");}else this.isHTML5&&this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio,null!==t);return {padding:n,ratio:t}}var html5={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(function(t){var i=t.getAttribute("type");return !!is$1.empty(i)||support.mime.call(e,i)}):[]},getQualityOptions:function(){return html5.getSources.call(this).map(function(e){return Number(e.getAttribute("size"))}).filter(Boolean)},extend:function(){if(this.isHTML5){var e=this;is$1.empty(this.config.ratio)||setAspectRatio.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=html5.getSources.call(e).find(function(t){return t.getAttribute("src")===e.source});return t&&Number(t.getAttribute("size"))},set:function(t){var i=html5.getSources.call(e).find(function(e){return Number(e.getAttribute("size"))===t});if(i){var n=e.media,s=n.currentTime,a=n.paused,r=n.preload,o=n.readyState;e.media.src=i.getAttribute("src"),("none"!==r||o)&&(e.once("loadedmetadata",function(){e.currentTime=s,a||e.play();}),e.media.load()),triggerEvent.call(e,e.media,"qualitychange",!1,{quality:t});}}});}},cancelRequests:function(){this.isHTML5&&(removeElement(html5.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"));}};function dedupe(e){return is$1.array(e)?e.filter(function(t,i){return e.indexOf(t)===i}):e}function closest(e,t){return is$1.array(e)&&e.length?e.reduce(function(e,i){return Math.abs(i-t)<Math.abs(e-t)?i:e}):null}function generateId(e){return "".concat(e,"-").concat(Math.floor(1e4*Math.random()))}function format(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return is$1.empty(e)?e:e.toString().replace(/{(\d+)}/g,function(e,t){return i[t].toString()})}function getPercentage(e,t){return 0===e||0===t||Number.isNaN(e)||Number.isNaN(t)?0:(e/t*100).toFixed(2)}function replaceAll(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"),i.toString())}function toTitleCase(){return (arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function toPascalCase(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return e=replaceAll(e,"-"," "),e=replaceAll(e,"_"," "),replaceAll(e=toTitleCase(e)," ","")}function toCamelCase(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return (e=toPascalCase(e)).charAt(0).toLowerCase()+e.slice(1)}function stripHTML(e){var t=document.createDocumentFragment(),i=document.createElement("div");return t.appendChild(i),i.innerHTML=e,t.firstChild.innerText}function getHTML(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}var resources={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},i18n={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(is$1.empty(e)||is$1.empty(t))return "";var i=getDeep(t.i18n,e);if(is$1.empty(i))return Object.keys(resources).includes(e)?resources[e]:"";var n={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(n).forEach(function(e){var t=_slicedToArray(e,2),n=t[0],s=t[1];i=replaceAll(i,n,s);}),i}},Storage=function(){function e(t){_classCallCheck(this,e),this.enabled=t.config.storage.enabled,this.key=t.config.storage.key;}return _createClass(e,[{key:"get",value:function(t){if(!e.supported||!this.enabled)return null;var i=window.localStorage.getItem(this.key);if(is$1.empty(i))return null;var n=JSON.parse(i);return is$1.string(t)&&t.length?n[t]:n}},{key:"set",value:function(t){if(e.supported&&this.enabled&&is$1.object(t)){var i=this.get();is$1.empty(i)&&(i={}),extend(i,t),window.localStorage.setItem(this.key,JSON.stringify(i));}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return !1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return !1}}}]),e}();function fetch(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise(function(i,n){try{var s=new XMLHttpRequest;if(!("withCredentials"in s))return;s.addEventListener("load",function(){if("text"===t)try{i(JSON.parse(s.responseText));}catch(e){i(s.responseText);}else i(s.response);}),s.addEventListener("error",function(){throw new Error(s.status)}),s.open("GET",e,!0),s.responseType=t,s.send();}catch(e){n(e);}})}function loadSprite(e,t){if(is$1.string(e)){var i=is$1.string(t),n=function(){return null!==document.getElementById(t)},s=function(e,t){e.innerHTML=t,i&&n()||document.body.insertAdjacentElement("afterbegin",e);};if(!i||!n()){var a=Storage.supported,r=document.createElement("div");if(r.setAttribute("hidden",""),i&&r.setAttribute("id",t),a){var o=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==o){var l=JSON.parse(o);s(r,l.content);}}fetch(e).then(function(e){is$1.empty(e)||(a&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),s(r,e));}).catch(function(){});}}}var getHours=function(e){return Math.trunc(e/60/60%60,10)},getMinutes=function(e){return Math.trunc(e/60%60,10)},getSeconds=function(e){return Math.trunc(e%60,10)};function formatTime(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!is$1.number(e))return formatTime(null,t,i);var n=function(e){return "0".concat(e).slice(-2)},s=getHours(e),a=getMinutes(e),r=getSeconds(e);return s=t||s>0?"".concat(s,":"):"","".concat(i&&e>0?"-":"").concat(s).concat(n(a),":").concat(n(r))}var controls={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||browser.isIE&&!window.svg4everybody;return {url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=getElement.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:getElements.call(this,this.config.selectors.buttons.play),pause:getElement.call(this,this.config.selectors.buttons.pause),restart:getElement.call(this,this.config.selectors.buttons.restart),rewind:getElement.call(this,this.config.selectors.buttons.rewind),fastForward:getElement.call(this,this.config.selectors.buttons.fastForward),mute:getElement.call(this,this.config.selectors.buttons.mute),pip:getElement.call(this,this.config.selectors.buttons.pip),airplay:getElement.call(this,this.config.selectors.buttons.airplay),settings:getElement.call(this,this.config.selectors.buttons.settings),captions:getElement.call(this,this.config.selectors.buttons.captions),fullscreen:getElement.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=getElement.call(this,this.config.selectors.progress),this.elements.inputs={seek:getElement.call(this,this.config.selectors.inputs.seek),volume:getElement.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:getElement.call(this,this.config.selectors.display.buffer),currentTime:getElement.call(this,this.config.selectors.display.currentTime),duration:getElement.call(this,this.config.selectors.display.duration)},is$1.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var i=controls.getIconUrl.call(this),n="".concat(i.cors?"":i.url,"#").concat(this.config.iconPrefix),s=document.createElementNS("http://www.w3.org/2000/svg","svg");setAttributes(s,extend(t,{role:"presentation",focusable:"false"}));var a=document.createElementNS("http://www.w3.org/2000/svg","use"),r="".concat(n,"-").concat(e);return "href"in a&&a.setAttributeNS("http://www.w3.org/1999/xlink","href",r),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r),s.appendChild(a),s},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=i18n.get(e,this.config);return createElement("span",Object.assign({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")}),i)},createBadge:function(e){if(is$1.empty(e))return null;var t=createElement("span",{class:this.config.classNames.menu.value});return t.appendChild(createElement("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var i=this,n=extend({},t),s=toCamelCase(e),a={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(function(e){Object.keys(n).includes(e)&&(a[e]=n[e],delete n[e]);}),"button"!==a.element||Object.keys(n).includes("type")||(n.type="button"),Object.keys(n).includes("class")?n.class.split(" ").some(function(e){return e===i.config.classNames.control})||extend(n,{class:"".concat(n.class," ").concat(this.config.classNames.control)}):n.class=this.config.classNames.control,e){case"play":a.toggle=!0,a.label="play",a.labelPressed="pause",a.icon="play",a.iconPressed="pause";break;case"mute":a.toggle=!0,a.label="mute",a.labelPressed="unmute",a.icon="volume",a.iconPressed="muted";break;case"captions":a.toggle=!0,a.label="enableCaptions",a.labelPressed="disableCaptions",a.icon="captions-off",a.iconPressed="captions-on";break;case"fullscreen":a.toggle=!0,a.label="enterFullscreen",a.labelPressed="exitFullscreen",a.icon="enter-fullscreen",a.iconPressed="exit-fullscreen";break;case"play-large":n.class+=" ".concat(this.config.classNames.control,"--overlaid"),s="play",a.label="play",a.icon="play";break;default:is$1.empty(a.label)&&(a.label=s),is$1.empty(a.icon)&&(a.icon=e);}var r=createElement(a.element);return a.toggle?(r.appendChild(controls.createIcon.call(this,a.iconPressed,{class:"icon--pressed"})),r.appendChild(controls.createIcon.call(this,a.icon,{class:"icon--not-pressed"})),r.appendChild(controls.createLabel.call(this,a.labelPressed,{class:"label--pressed"})),r.appendChild(controls.createLabel.call(this,a.label,{class:"label--not-pressed"}))):(r.appendChild(controls.createIcon.call(this,a.icon)),r.appendChild(controls.createLabel.call(this,a.label))),extend(n,getAttributesFromSelector(this.config.selectors.buttons[s],n)),setAttributes(r,n),"play"===s?(is$1.array(this.elements.buttons[s])||(this.elements.buttons[s]=[]),this.elements.buttons[s].push(r)):this.elements.buttons[s]=r,r},createRange:function(e,t){var i=createElement("input",extend(getAttributesFromSelector(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":i18n.get(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=i,controls.updateRangeFill.call(this,i),RangeTouch.setup(i),i},createProgress:function(e,t){var i=createElement("progress",extend(getAttributesFromSelector(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){i.appendChild(createElement("span",null,"0"));var n={played:"played",buffer:"buffered"}[e],s=n?i18n.get(n,this.config):"";i.innerText="% ".concat(s.toLowerCase());}return this.elements.display[e]=i,i},createTime:function(e,t){var i=getAttributesFromSelector(this.config.selectors.display[e],t),n=createElement("div",extend(i,{class:"".concat(i.class?i.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":i18n.get(e,this.config)}),"00:00");return this.elements.display[e]=n,n},bindMenuItemShortcuts:function(e,t){var i=this;on(e,"keydown keyup",function(n){if([32,38,39,40].includes(n.which)&&(n.preventDefault(),n.stopPropagation(),"keydown"!==n.type)){var s,a=matches$1(e,'[role="menuitemradio"]');if(!a&&[32,39].includes(n.which))controls.showMenuPanel.call(i,t,!0);else 32!==n.which&&(40===n.which||a&&39===n.which?(s=e.nextElementSibling,is$1.element(s)||(s=e.parentNode.firstElementChild)):(s=e.previousElementSibling,is$1.element(s)||(s=e.parentNode.lastElementChild)),setFocus.call(i,s,!0));}},!1),on(e,"keyup",function(e){13===e.which&&controls.focusFirstMenuItem.call(i,null,!0);});},createMenuItem:function(e){var t=this,i=e.value,n=e.list,s=e.type,a=e.title,r=e.badge,o=void 0===r?null:r,l=e.checked,c=void 0!==l&&l,u=getAttributesFromSelector(this.config.selectors.inputs[s]),d=createElement("button",extend(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:i})),h=createElement("span");h.innerHTML=a,is$1.element(o)&&h.appendChild(o),d.appendChild(h),Object.defineProperty(d,"checked",{enumerable:!0,get:function(){return "true"===d.getAttribute("aria-checked")},set:function(e){e&&Array.from(d.parentNode.children).filter(function(e){return matches$1(e,'[role="menuitemradio"]')}).forEach(function(e){return e.setAttribute("aria-checked","false")}),d.setAttribute("aria-checked",e?"true":"false");}}),this.listeners.bind(d,"click keyup",function(e){if(!is$1.keyboardEvent(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),d.checked=!0,s){case"language":t.currentTrack=Number(i);break;case"quality":t.quality=i;break;case"speed":t.speed=parseFloat(i);}controls.showMenuPanel.call(t,"home",is$1.keyboardEvent(e));}},s,!1),controls.bindMenuItemShortcuts.call(this,d,s),n.appendChild(d);},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return is$1.number(e)?formatTime(e,getHours(this.duration)>0,t):e},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];is$1.element(e)&&is$1.number(t)&&(e.innerText=controls.formatTime(t,i));},updateVolume:function(){this.supported.ui&&(is$1.element(this.elements.inputs.volume)&&controls.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),is$1.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume));},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;is$1.element(e)&&(e.value=t,controls.updateRangeFill.call(this,e));},updateProgress:function(e){var t=this;if(this.supported.ui&&is$1.event(e)){var i=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":i=getPercentage(this.currentTime,this.duration),"timeupdate"===e.type&&controls.setRange.call(this,this.elements.inputs.seek,i);break;case"playing":case"progress":!function(e,i){var n=is$1.number(i)?i:0,s=is$1.element(e)?e:t.elements.display.buffer;if(is$1.element(s)){s.value=n;var a=s.getElementsByTagName("span")[0];is$1.element(a)&&(a.childNodes[0].nodeValue=n);}}(this.elements.display.buffer,100*this.buffered);}}},updateRangeFill:function(e){var t=is$1.event(e)?e.target:e;if(is$1.element(t)&&"range"===t.getAttribute("type")){if(matches$1(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var i=controls.formatTime(this.currentTime),n=controls.formatTime(this.duration),s=i18n.get("seekLabel",this.config);t.setAttribute("aria-valuetext",s.replace("{currentTime}",i).replace("{duration}",n));}else if(matches$1(t,this.config.selectors.inputs.volume)){var a=100*t.value;t.setAttribute("aria-valuenow",a),t.setAttribute("aria-valuetext","".concat(a.toFixed(1),"%"));}else t.setAttribute("aria-valuenow",t.value);browser.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"));}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&is$1.element(this.elements.inputs.seek)&&is$1.element(this.elements.display.seekTooltip)&&0!==this.duration){var i="".concat(this.config.classNames.tooltip,"--visible"),n=function(e){return toggleClass(t.elements.display.seekTooltip,i,e)};if(this.touch)n(!1);else{var s=0,a=this.elements.progress.getBoundingClientRect();if(is$1.event(e))s=100/a.width*(e.pageX-a.left);else{if(!hasClass(this.elements.display.seekTooltip,i))return;s=parseFloat(this.elements.display.seekTooltip.style.left,10);}s<0?s=0:s>100&&(s=100),controls.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*s),this.elements.display.seekTooltip.style.left="".concat(s,"%"),is$1.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&n("mouseenter"===e.type);}}},timeUpdate:function(e){var t=!is$1.element(this.elements.display.duration)&&this.config.invertTime;controls.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||controls.updateProgress.call(this,e);},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return toggleHidden(this.elements.display.currentTime,!0),void toggleHidden(this.elements.progress,!0);is$1.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=is$1.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&controls.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&controls.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),controls.updateSeekTooltip.call(this);}},toggleMenuButton:function(e,t){toggleHidden(this.elements.settings.buttons[e],!t);},updateSetting:function(e,t,i){var n=this.elements.settings.panels[e],s=null,a=t;if("captions"===e)s=this.currentTrack;else{if(s=is$1.empty(i)?this[e]:i,is$1.empty(s)&&(s=this.config[e].default),!is$1.empty(this.options[e])&&!this.options[e].includes(s))return void this.debug.warn("Unsupported value of '".concat(s,"' for ").concat(e));if(!this.config[e].options.includes(s))return void this.debug.warn("Disabled value of '".concat(s,"' for ").concat(e))}if(is$1.element(a)||(a=n&&n.querySelector('[role="menu"]')),is$1.element(a)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=controls.getLabel.call(this,e,s);var r=a&&a.querySelector('[value="'.concat(s,'"]'));is$1.element(r)&&(r.checked=!0);}},getLabel:function(e,t){switch(e){case"speed":return 1===t?i18n.get("normal",this.config):"".concat(t,"&times;");case"quality":if(is$1.number(t)){var i=i18n.get("qualityLabel.".concat(t),this.config);return i.length?i:"".concat(t,"p")}return toTitleCase(t);case"captions":return captions.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(is$1.element(this.elements.settings.panels.quality)){var i=this.elements.settings.panels.quality.querySelector('[role="menu"]');is$1.array(e)&&(this.options.quality=dedupe(e).filter(function(e){return t.config.quality.options.includes(e)}));var n=!is$1.empty(this.options.quality)&&this.options.quality.length>1;if(controls.toggleMenuButton.call(this,"quality",n),emptyElement(i),controls.checkMenu.call(this),n){var s=function(e){var i=i18n.get("qualityBadge.".concat(e),t.config);return i.length?controls.createBadge.call(t,i):null};this.options.quality.sort(function(e,i){var n=t.config.quality.options;return n.indexOf(e)>n.indexOf(i)?1:-1}).forEach(function(e){controls.createMenuItem.call(t,{value:e,list:i,type:"quality",title:controls.getLabel.call(t,"quality",e),badge:s(e)});}),controls.updateSetting.call(this,"quality",i);}}},setCaptionsMenu:function(){var e=this;if(is$1.element(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),i=captions.getTracks.call(this),n=Boolean(i.length);if(controls.toggleMenuButton.call(this,"captions",n),emptyElement(t),controls.checkMenu.call(this),n){var s=i.map(function(i,n){return {value:n,checked:e.captions.toggled&&e.currentTrack===n,title:captions.getLabel.call(e,i),badge:i.language&&controls.createBadge.call(e,i.language.toUpperCase()),list:t,type:"language"}});s.unshift({value:-1,checked:!this.captions.toggled,title:i18n.get("disabled",this.config),list:t,type:"language"}),s.forEach(controls.createMenuItem.bind(this)),controls.updateSetting.call(this,"captions",t);}}},setSpeedMenu:function(e){var t=this;if(is$1.element(this.elements.settings.panels.speed)){var i=this.elements.settings.panels.speed.querySelector('[role="menu"]');is$1.array(e)?this.options.speed=e:(this.isHTML5||this.isVimeo)&&(this.options.speed=[.5,.75,1,1.25,1.5,1.75,2]),this.options.speed=this.options.speed.filter(function(e){return t.config.speed.options.includes(e)});var n=!is$1.empty(this.options.speed)&&this.options.speed.length>1;controls.toggleMenuButton.call(this,"speed",n),emptyElement(i),controls.checkMenu.call(this),n&&(this.options.speed.forEach(function(e){controls.createMenuItem.call(t,{value:e,list:i,type:"speed",title:controls.getLabel.call(t,"speed",e)});}),controls.updateSetting.call(this,"speed",i));}},checkMenu:function(){var e=this.elements.settings.buttons,t=!is$1.empty(e)&&Object.values(e).some(function(e){return !e.hidden});toggleHidden(this.elements.settings.menu,!t);},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var i=e;is$1.element(i)||(i=Object.values(this.elements.settings.panels).find(function(e){return !e.hidden}));var n=i.querySelector('[role^="menuitem"]');setFocus.call(this,n,t);}},toggleMenu:function(e){var t=this.elements.settings.popup,i=this.elements.buttons.settings;if(is$1.element(t)&&is$1.element(i)){var n=t.hidden,s=n;if(is$1.boolean(e))s=e;else if(is$1.keyboardEvent(e)&&27===e.which)s=!1;else if(is$1.event(e)){var a=is$1.function(e.composedPath)?e.composedPath()[0]:e.target,r=t.contains(a);if(r||!r&&e.target!==i&&s)return}i.setAttribute("aria-expanded",s),toggleHidden(t,!s),toggleClass(this.elements.container,this.config.classNames.menu.open,s),s&&is$1.keyboardEvent(e)?controls.focusFirstMenuItem.call(this,null,!0):s||n||setFocus.call(this,i,is$1.keyboardEvent(e));}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var i=t.scrollWidth,n=t.scrollHeight;return removeElement(t),{width:i,height:n}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(is$1.element(n)){var s=n.parentNode,a=Array.from(s.children).find(function(e){return !e.hidden});if(support.transitions&&!support.reducedMotion){s.style.width="".concat(a.scrollWidth,"px"),s.style.height="".concat(a.scrollHeight,"px");var r=controls.getMenuSize.call(this,n);on.call(this,s,transitionEndEvent,function t(i){i.target===s&&["width","height"].includes(i.propertyName)&&(s.style.width="",s.style.height="",off.call(e,s,transitionEndEvent,t));}),s.style.width="".concat(r.width,"px"),s.style.height="".concat(r.height,"px");}toggleHidden(a,!0),toggleHidden(n,!1),controls.focusFirstMenuItem.call(this,n,i);}},setDownloadUrl:function(){var e=this.elements.buttons.download;is$1.element(e)&&e.setAttribute("href",this.download);},create:function(e){var t=this,i=controls.bindMenuItemShortcuts,n=controls.createButton,s=controls.createProgress,a=controls.createRange,r=controls.createTime,o=controls.setQualityMenu,l=controls.setSpeedMenu,c=controls.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(n.call(this,"play-large"));var u=createElement("div",getAttributesFromSelector(this.config.selectors.controls.wrapper));this.elements.controls=u;var d={class:"plyr__controls__item"};return dedupe(this.config.controls).forEach(function(o){if("restart"===o&&u.appendChild(n.call(t,"restart",d)),"rewind"===o&&u.appendChild(n.call(t,"rewind",d)),"play"===o&&u.appendChild(n.call(t,"play",d)),"fast-forward"===o&&u.appendChild(n.call(t,"fast-forward",d)),"progress"===o){var l=createElement("div",{class:"".concat(d.class," plyr__progress__container")}),h=createElement("div",getAttributesFromSelector(t.config.selectors.progress));if(h.appendChild(a.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),h.appendChild(s.call(t,"buffer")),t.config.tooltips.seek){var m=createElement("span",{class:t.config.classNames.tooltip},"00:00");h.appendChild(m),t.elements.display.seekTooltip=m;}t.elements.progress=h,l.appendChild(t.elements.progress),u.appendChild(l);}if("current-time"===o&&u.appendChild(r.call(t,"currentTime",d)),"duration"===o&&u.appendChild(r.call(t,"duration",d)),"mute"===o||"volume"===o){var p=t.elements.volume;if(is$1.element(p)&&u.contains(p)||(p=createElement("div",extend({},d,{class:"".concat(d.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===o&&p.appendChild(n.call(t,"mute")),"volume"===o){var g={max:1,step:.05,value:t.config.volume};p.appendChild(a.call(t,"volume",extend(g,{id:"plyr-volume-".concat(e.id)})));}}if("captions"===o&&u.appendChild(n.call(t,"captions",d)),"settings"===o&&!is$1.empty(t.config.settings)){var f=createElement("div",extend({},d,{class:"".concat(d.class," plyr__menu").trim(),hidden:""}));f.appendChild(n.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var y=createElement("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),v=createElement("div"),b=createElement("div",{id:"plyr-settings-".concat(e.id,"-home")}),k=createElement("div",{role:"menu"});b.appendChild(k),v.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach(function(n){var s=createElement("button",extend(getAttributesFromSelector(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));i.call(t,s,n),on(s,"click",function(){c.call(t,n,!1);});var a=createElement("span",null,i18n.get(n,t.config)),r=createElement("span",{class:t.config.classNames.menu.value});r.innerHTML=e[n],a.appendChild(r),s.appendChild(a),k.appendChild(s);var o=createElement("div",{id:"plyr-settings-".concat(e.id,"-").concat(n),hidden:""}),l=createElement("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(createElement("span",{"aria-hidden":!0},i18n.get(n,t.config))),l.appendChild(createElement("span",{class:t.config.classNames.hidden},i18n.get("menuBack",t.config))),on(o,"keydown",function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0));},!1),on(l,"click",function(){c.call(t,"home",!1);}),o.appendChild(l),o.appendChild(createElement("div",{role:"menu"})),v.appendChild(o),t.elements.settings.buttons[n]=s,t.elements.settings.panels[n]=o;}),y.appendChild(v),f.appendChild(y),u.appendChild(f),t.elements.settings.popup=y,t.elements.settings.menu=f;}if("pip"===o&&support.pip&&u.appendChild(n.call(t,"pip",d)),"airplay"===o&&support.airplay&&u.appendChild(n.call(t,"airplay",d)),"download"===o){var w=extend({},d,{element:"a",href:t.download,target:"_blank"}),T=t.config.urls.download;!is$1.url(T)&&t.isEmbed&&extend(w,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(n.call(t,"download",w));}"fullscreen"===o&&u.appendChild(n.call(t,"fullscreen",d));}),this.isHTML5&&o.call(this,html5.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=controls.getIconUrl.call(this);t.cors&&loadSprite(t.url,"sprite-plyr");}this.id=Math.floor(1e4*Math.random());var i=null;this.elements.controls=null;var n={id:this.id,seektime:this.config.seekTime,title:this.config.title},s=!0;is$1.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,n)),this.config.controls||(this.config.controls=[]),is$1.element(this.config.controls)||is$1.string(this.config.controls)?i=this.config.controls:(i=controls.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:captions.getLabel.call(this)}),s=!1);var a,r=function(e){var t=e;return Object.entries(n).forEach(function(e){var i=_slicedToArray(e,2),n=i[0],s=i[1];t=replaceAll(t,"{".concat(n,"}"),s);}),t};if(s&&(is$1.string(this.config.controls)?i=r(i):is$1.element(i)&&(i.innerHTML=r(i.innerHTML))),is$1.string(this.config.selectors.controls.container)&&(a=document.querySelector(this.config.selectors.controls.container)),is$1.element(a)||(a=this.elements.container),a[is$1.element(i)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",i),is$1.element(this.elements.controls)||controls.findElements.call(this),!is$1.empty(this.elements.buttons)){var o=function(t){var i=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return hasClass(t,i)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];toggleClass(t,i,e);}});};Object.values(this.elements.buttons).filter(Boolean).forEach(function(e){is$1.array(e)||is$1.nodeList(e)?Array.from(e).filter(Boolean).forEach(o):o(e);});}if(browser.isEdge&&repaint(a),this.config.tooltips.controls){var l=this.config,c=l.classNames,u=l.selectors,d="".concat(u.controls.wrapper," ").concat(u.labels," .").concat(c.hidden),h=getElements.call(this,d);Array.from(h).forEach(function(t){toggleClass(t,e.config.classNames.hidden,!1),toggleClass(t,e.config.classNames.tooltip,!0);});}}};function parseUrl(e){var t=e;if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var i=document.createElement("a");i.href=t,t=i.href;}try{return new URL(t)}catch(e){return null}}function buildUrlParams(e){var t=new URLSearchParams;return is$1.object(e)&&Object.entries(e).forEach(function(e){var i=_slicedToArray(e,2),n=i[0],s=i[1];t.set(n,s);}),t}var captions={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!support.textTracks)is$1.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&controls.setCaptionsMenu.call(this);else{if(is$1.element(this.elements.captions)||(this.elements.captions=createElement("div",getAttributesFromSelector(this.config.selectors.captions)),insertAfter(this.elements.captions,this.elements.wrapper)),browser.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach(function(e){var t=e.getAttribute("src"),i=parseUrl(t);null!==i&&i.hostname!==window.location.href.hostname&&["http:","https:"].includes(i.protocol)&&fetch(t,"blob").then(function(t){e.setAttribute("src",window.URL.createObjectURL(t));}).catch(function(){removeElement(e);});});}var t=dedupe((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(function(e){return e.split("-")[0]})),i=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===i)i=_slicedToArray(t,1)[0];var n=this.storage.get("captions");if(is$1.boolean(n)||(n=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:n,language:i,languages:t}),this.isHTML5){var s=this.config.captions.update?"addtrack removetrack":"removetrack";on.call(this,this.media.textTracks,s,captions.update.bind(this));}setTimeout(captions.update.bind(this),0);}},update:function(){var e=this,t=captions.getTracks.call(this,!0),i=this.captions,n=i.active,s=i.language,a=i.meta,r=i.currentTrackNode,o=Boolean(t.find(function(e){return e.language===s}));this.isHTML5&&this.isVideo&&t.filter(function(e){return !a.get(e)}).forEach(function(t){e.debug.log("Track added",t),a.set(t,{default:"showing"===t.mode}),t.mode="hidden",on.call(e,t,"cuechange",function(){return captions.updateCues.call(e)});}),(o&&this.language!==s||!t.includes(r))&&(captions.setLanguage.call(this,s),captions.toggle.call(this,n&&o)),toggleClass(this.elements.container,this.config.classNames.captions.enabled,!is$1.empty(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&controls.setCaptionsMenu.call(this);},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var i=this.captions.toggled,n=this.config.classNames.captions.active,s=is$1.nullOrUndefined(e)?!i:e;if(s!==i){if(t||(this.captions.active=s,this.storage.set({captions:s})),!this.language&&s&&!t){var a=captions.getTracks.call(this),r=captions.findTrack.call(this,[this.captions.language].concat(_toConsumableArray(this.captions.languages)),!0);return this.captions.language=r.language,void captions.set.call(this,a.indexOf(r))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=s),toggleClass(this.elements.container,n,s),this.captions.toggled=s,controls.updateSetting.call(this,"captions"),triggerEvent.call(this,this.media,s?"captionsenabled":"captionsdisabled");}}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=captions.getTracks.call(this);if(-1!==e)if(is$1.number(e))if(e in i){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var n=i[e],s=(n||{}).language;this.captions.currentTrackNode=n,controls.updateSetting.call(this,"captions"),t||(this.captions.language=s,this.storage.set({language:s})),this.isVimeo&&this.embed.enableTextTrack(s),triggerEvent.call(this,this.media,"languagechange");}captions.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&captions.updateCues.call(this);}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else captions.toggle.call(this,!1,t);},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(is$1.string(e)){var i=e.toLowerCase();this.captions.language=i;var n=captions.getTracks.call(this),s=captions.findTrack.call(this,[i]);captions.set.call(this,n.indexOf(s),t);}else this.debug.warn("Invalid language argument",e);},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Array.from((this.media||{}).textTracks||[]).filter(function(i){return !e.isHTML5||t||e.captions.meta.has(i)}).filter(function(e){return ["captions","subtitles"].includes(e.kind)})},findTrack:function(e){var t,i=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=captions.getTracks.call(this),a=function(e){return Number((i.captions.meta.get(e)||{}).default)},r=Array.from(s).sort(function(e,t){return a(t)-a(e)});return e.every(function(e){return !(t=r.find(function(t){return t.language===e}))}),t||(n?r[0]:void 0)},getCurrentTrack:function(){return captions.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return !is$1.track(t)&&support.textTracks&&this.captions.toggled&&(t=captions.getCurrentTrack.call(this)),is$1.track(t)?is$1.empty(t.label)?is$1.empty(t.language)?i18n.get("enabled",this.config):e.language.toUpperCase():t.label:i18n.get("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(is$1.element(this.elements.captions))if(is$1.nullOrUndefined(e)||Array.isArray(e)){var t=e;if(!t){var i=captions.getCurrentTrack.call(this);t=Array.from((i||{}).activeCues||[]).map(function(e){return e.getCueAsHTML()}).map(getHTML);}var n=t.map(function(e){return e.trim()}).join("\n");if(n!==this.elements.captions.innerHTML){emptyElement(this.elements.captions);var s=createElement("span",getAttributesFromSelector(this.config.selectors.caption));s.innerHTML=n,this.elements.captions.appendChild(s),triggerEvent.call(this,this.media,"cuechange");}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to");}},defaults$1={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.6/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240]},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},pip={active:"picture-in-picture",inactive:"inline"},providers={html5:"html5",youtube:"youtube",vimeo:"vimeo"},types={audio:"audio",video:"video"};function getProviderByUrl(e){return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?providers.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?providers.vimeo:null}var noop=function(){},Console=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];_classCallCheck(this,e),this.enabled=window.console&&t,this.enabled&&this.log("Debugging enabled");}return _createClass(e,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):noop}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):noop}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):noop}}]),e}();function onChange(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;is$1.element(e)&&(e.pressed=this.active),triggerEvent.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0),browser.isIos||trapFocus.call(this.player,this.target,this.active);}}function toggleFallback(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",toggleClass(this.target,this.player.config.classNames.fullscreen.fallback,e),browser.isIos){var t=document.head.querySelector('meta[name="viewport"]'),i="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var n=is$1.string(t.content)&&t.content.includes(i);e?(this.cleanupViewport=!n,n||(t.content+=",".concat(i))):this.cleanupViewport&&(t.content=t.content.split(",").filter(function(e){return e.trim()!==i}).join(","));}onChange.call(this);}var Fullscreen=function(){function e(t){var i=this;_classCallCheck(this,e),this.player=t,this.prefix=e.prefix,this.property=e.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===t.config.fullscreen.fallback,on.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),function(){onChange.call(i);}),on.call(this.player,this.player.elements.container,"dblclick",function(e){is$1.element(i.player.elements.controls)&&i.player.elements.controls.contains(e.target)||i.toggle();}),this.update();}return _createClass(e,[{key:"update",value:function(){var t;this.enabled?(t=this.forceFallback?"Fallback (forced)":e.native?"Native":"Fallback",this.player.debug.log("".concat(t," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");toggleClass(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled);}},{key:"enter",value:function(){this.enabled&&(browser.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!e.native||this.forceFallback?toggleFallback.call(this,!0):this.prefix?is$1.empty(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen());}},{key:"exit",value:function(){if(this.enabled)if(browser.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!e.native||this.forceFallback)toggleFallback.call(this,!1);else if(this.prefix){if(!is$1.empty(this.prefix)){var t="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(t).concat(this.property)]();}}else(document.cancelFullScreen||document.exitFullscreen).call(document);}},{key:"toggle",value:function(){this.active?this.exit():this.enter();}},{key:"usingNative",get:function(){return e.native&&!this.forceFallback}},{key:"enabled",get:function(){return (e.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return !!this.enabled&&(!e.native||this.forceFallback?hasClass(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return browser.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return !!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(is$1.function(document.exitFullscreen))return "";var e="";return ["webkit","moz","ms"].some(function(t){return !(!is$1.function(document["".concat(t,"ExitFullscreen")])&&!is$1.function(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)}),e}},{key:"property",get:function(){return "moz"===this.prefix?"FullScreen":"Fullscreen"}}]),e}();function loadImage(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(i,n){var s=new Image,a=function(){delete s.onload,delete s.onerror,(s.naturalWidth>=t?i:n)(s);};Object.assign(s,{onload:a,onerror:a,src:e});})}var ui={addStyleHook:function(){toggleClass(this.elements.container,this.config.selectors.container.replace(".",""),!0),toggleClass(this.elements.container,this.config.classNames.uiSupported,this.supported.ui);},toggleNativeControls:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls");},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void ui.toggleNativeControls.call(this,!0);is$1.element(this.elements.controls)||(controls.inject.call(this),this.listeners.controls()),ui.toggleNativeControls.call(this),this.isHTML5&&captions.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,controls.updateVolume.call(this),controls.timeUpdate.call(this),ui.checkPlaying.call(this),toggleClass(this.elements.container,this.config.classNames.pip.supported,support.pip&&this.isHTML5&&this.isVideo),toggleClass(this.elements.container,this.config.classNames.airplay.supported,support.airplay&&this.isHTML5),toggleClass(this.elements.container,this.config.classNames.isIos,browser.isIos),toggleClass(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(function(){triggerEvent.call(e,e.media,"ready");},0),ui.setTitle.call(this),this.poster&&ui.setPoster.call(this,this.poster,!1).catch(function(){}),this.config.duration&&controls.durationUpdate.call(this);},setTitle:function(){var e=i18n.get("play",this.config);if(is$1.string(this.config.title)&&!is$1.empty(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach(function(t){t.setAttribute("aria-label",e);}),this.isEmbed){var t=getElement.call(this,"iframe");if(!is$1.element(t))return;var i=is$1.empty(this.config.title)?"video":this.config.title,n=i18n.get("frameTitle",this.config);t.setAttribute("title",n.replace("{title}",i));}},togglePoster:function(e){toggleClass(this.elements.container,this.config.classNames.posterEnabled,e);},setPoster:function(e){var t=this;return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]||!this.poster?(this.media.setAttribute("poster",e),ready.call(this).then(function(){return loadImage(e)}).catch(function(i){throw e===t.poster&&ui.togglePoster.call(t,!1),i}).then(function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),ui.togglePoster.call(t,!0),e})):Promise.reject(new Error("Poster already set"))},checkPlaying:function(e){var t=this;toggleClass(this.elements.container,this.config.classNames.playing,this.playing),toggleClass(this.elements.container,this.config.classNames.paused,this.paused),toggleClass(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(function(e){Object.assign(e,{pressed:t.playing});}),is$1.event(e)&&"timeupdate"===e.type||ui.toggleControls.call(this);},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(function(){toggleClass(t.elements.container,t.config.classNames.loading,t.loading),ui.toggleControls.call(t);},this.loading?250:0);},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var i=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||i));}}},Listeners=function(){function e(t){_classCallCheck(this,e),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this);}return _createClass(e,[{key:"handleKey",value:function(e){var t=this.player,i=t.elements,n=e.keyCode?e.keyCode:e.which,s="keydown"===e.type,a=s&&n===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&is$1.number(n)){if(s){var r=document.activeElement;if(is$1.element(r)){var o=t.config.selectors.editable;if(r!==i.inputs.seek&&matches$1(r,o))return;if(32===e.which&&matches$1(r,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(n)&&(e.preventDefault(),e.stopPropagation()),n){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:a||(t.currentTime=t.duration/10*(n-48));break;case 32:case 75:a||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:a||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:a||t.toggleCaptions();break;case 76:t.loop=!t.loop;}27===n&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=n;}else this.lastKey=null;}}},{key:"toggleMenu",value:function(e){controls.toggleMenu.call(this.player,e);}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,toggleClass(t.container,e.config.classNames.isTouch,!0);}},{key:"setTabFocus",value:function(e){var t=this.player,i=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var n,s=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||s)n=t.config.classNames.tabFocus,toggleClass(getElements.call(t,".".concat(n)),n,!1),this.focusTimer=setTimeout(function(){var e=document.activeElement;i.container.contains(e)&&toggleClass(document.activeElement,t.config.classNames.tabFocus,!0);},10);}}},{key:"global",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.player;t.config.keyboard.global&&toggleListener.call(t,window,"keydown keyup",this.handleKey,e,!1),toggleListener.call(t,document.body,"click",this.toggleMenu,e),once.call(t,document.body,"touchstart",this.firstTouch),toggleListener.call(t,document.body,"keydown focus blur",this.setTabFocus,e,!1,!0);}},{key:"container",value:function(){var e=this.player,t=e.config,i=e.elements,n=e.timers;!t.keyboard.global&&t.keyboard.focused&&on.call(e,i.container,"keydown keyup",this.handleKey,!1),on.call(e,i.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",function(t){var s=i.controls;s&&"enterfullscreen"===t.type&&(s.pressed=!1,s.hover=!1);var a=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(ui.toggleControls.call(e,!0),a=e.touch?3e3:2e3),clearTimeout(n.controls),n.controls=setTimeout(function(){return ui.toggleControls.call(e,!1)},a);});var s=function(t){if(!t)return setAspectRatio.call(e);var n=i.container.getBoundingClientRect(),s=n.width,a=n.height;return setAspectRatio.call(e,"".concat(s,":").concat(a))},a=function(){clearTimeout(n.resized),n.resized=setTimeout(s,50);};on.call(e,i.container,"enterfullscreen exitfullscreen",function(t){var n=e.fullscreen,r=n.target,o=n.usingNative;if(r===i.container&&(e.isEmbed||!is$1.empty(e.config.ratio))){var l="enterfullscreen"===t.type,c=s(l);c.padding;!function(t,i,n){if(e.isVimeo){var s=e.elements.wrapper.firstChild,a=_slicedToArray(t,2)[1],r=_slicedToArray(getAspectRatio.call(e),2),o=r[0],l=r[1];s.style.maxWidth=n?"".concat(a/l*o,"px"):null,s.style.margin=n?"0 auto":null;}}(c.ratio,0,l),o||(l?on.call(e,window,"resize",a):off.call(e,window,"resize",a));}});}},{key:"media",value:function(){var e=this,t=this.player,i=t.elements;if(on.call(t,t.media,"timeupdate seeking seeked",function(e){return controls.timeUpdate.call(t,e)}),on.call(t,t.media,"durationchange loadeddata loadedmetadata",function(e){return controls.durationUpdate.call(t,e)}),on.call(t,t.media,"canplay loadeddata",function(){toggleHidden(i.volume,!t.hasAudio),toggleHidden(i.buttons.mute,!t.hasAudio);}),on.call(t,t.media,"ended",function(){t.isHTML5&&t.isVideo&&t.config.resetOnEnd&&t.restart();}),on.call(t,t.media,"progress playing seeking seeked",function(e){return controls.updateProgress.call(t,e)}),on.call(t,t.media,"volumechange",function(e){return controls.updateVolume.call(t,e)}),on.call(t,t.media,"playing play pause ended emptied timeupdate",function(e){return ui.checkPlaying.call(t,e)}),on.call(t,t.media,"waiting canplay seeked playing",function(e){return ui.checkLoading.call(t,e)}),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var n=getElement.call(t,".".concat(t.config.classNames.video));if(!is$1.element(n))return;on.call(t,i.container,"click",function(s){([i.container,n].includes(s.target)||n.contains(s.target))&&(t.touch&&t.config.hideControls||(t.ended?(e.proxy(s,t.restart,"restart"),e.proxy(s,t.play,"play")):e.proxy(s,t.togglePlay,"play")));});}t.supported.ui&&t.config.disableContextMenu&&on.call(t,i.wrapper,"contextmenu",function(e){e.preventDefault();},!1),on.call(t,t.media,"volumechange",function(){t.storage.set({volume:t.volume,muted:t.muted});}),on.call(t,t.media,"ratechange",function(){controls.updateSetting.call(t,"speed"),t.storage.set({speed:t.speed});}),on.call(t,t.media,"qualitychange",function(e){controls.updateSetting.call(t,"quality",null,e.detail.quality);}),on.call(t,t.media,"ready qualitychange",function(){controls.setDownloadUrl.call(t);});var s=t.config.events.concat(["keyup","keydown"]).join(" ");on.call(t,t.media,s,function(e){var n=e.detail,s=void 0===n?{}:n;"error"===e.type&&(s=t.media.error),triggerEvent.call(t,i.container,e.type,!0,s);});}},{key:"proxy",value:function(e,t,i){var n=this.player,s=n.config.listeners[i],a=!0;is$1.function(s)&&(a=s.call(n,e)),a&&is$1.function(t)&&t.call(n,e);}},{key:"bind",value:function(e,t,i,n){var s=this,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.player,o=r.config.listeners[n],l=is$1.function(o);on.call(r,e,t,function(e){return s.proxy(e,i,n)},a&&!l);}},{key:"controls",value:function(){var e=this,t=this.player,i=t.elements,n=browser.isIE?"change":"input";if(i.buttons.play&&Array.from(i.buttons.play).forEach(function(i){e.bind(i,"click",t.togglePlay,"play");}),this.bind(i.buttons.restart,"click",t.restart,"restart"),this.bind(i.buttons.rewind,"click",t.rewind,"rewind"),this.bind(i.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(i.buttons.mute,"click",function(){t.muted=!t.muted;},"mute"),this.bind(i.buttons.captions,"click",function(){return t.toggleCaptions()}),this.bind(i.buttons.download,"click",function(){triggerEvent.call(t,t.media,"download");},"download"),this.bind(i.buttons.fullscreen,"click",function(){t.fullscreen.toggle();},"fullscreen"),this.bind(i.buttons.pip,"click",function(){t.pip="toggle";},"pip"),this.bind(i.buttons.airplay,"click",t.airplay,"airplay"),this.bind(i.buttons.settings,"click",function(e){e.stopPropagation(),controls.toggleMenu.call(t,e);}),this.bind(i.buttons.settings,"keyup",function(e){var i=e.which;[13,32].includes(i)&&(13!==i?(e.preventDefault(),e.stopPropagation(),controls.toggleMenu.call(t,e)):controls.focusFirstMenuItem.call(t,null,!0));},null,!1),this.bind(i.settings.menu,"keydown",function(e){27===e.which&&controls.toggleMenu.call(t,e);}),this.bind(i.inputs.seek,"mousedown mousemove",function(e){var t=i.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",n);}),this.bind(i.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",function(e){var i=e.currentTarget,n=e.keyCode?e.keyCode:e.which;if(!is$1.keyboardEvent(e)||39===n||37===n){t.lastSeekTime=Date.now();var s=i.hasAttribute("play-on-seeked"),a=["mouseup","touchend","keyup"].includes(e.type);s&&a?(i.removeAttribute("play-on-seeked"),t.play()):!a&&t.playing&&(i.setAttribute("play-on-seeked",""),t.pause());}}),browser.isIos){var s=getElements.call(t,'input[type="range"]');Array.from(s).forEach(function(t){return e.bind(t,n,function(e){return repaint(e.target)})});}this.bind(i.inputs.seek,n,function(e){var i=e.currentTarget,n=i.getAttribute("seek-value");is$1.empty(n)&&(n=i.value),i.removeAttribute("seek-value"),t.currentTime=n/i.max*t.duration;},"seek"),this.bind(i.progress,"mouseenter mouseleave mousemove",function(e){return controls.updateSeekTooltip.call(t,e)}),this.bind(i.progress,"mousemove touchmove",function(e){var i=t.previewThumbnails;i&&i.loaded&&i.startMove(e);}),this.bind(i.progress,"mouseleave click",function(){var e=t.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0);}),this.bind(i.progress,"mousedown touchstart",function(e){var i=t.previewThumbnails;i&&i.loaded&&i.startScrubbing(e);}),this.bind(i.progress,"mouseup touchend",function(e){var i=t.previewThumbnails;i&&i.loaded&&i.endScrubbing(e);}),browser.isWebkit&&Array.from(getElements.call(t,'input[type="range"]')).forEach(function(i){e.bind(i,"input",function(e){return controls.updateRangeFill.call(t,e.target)});}),t.config.toggleInvert&&!is$1.element(i.display.duration)&&this.bind(i.display.currentTime,"click",function(){0!==t.currentTime&&(t.config.invertTime=!t.config.invertTime,controls.timeUpdate.call(t));}),this.bind(i.inputs.volume,n,function(e){t.volume=e.target.value;},"volume"),this.bind(i.controls,"mouseenter mouseleave",function(e){i.controls.hover=!t.touch&&"mouseenter"===e.type;}),this.bind(i.controls,"mousedown mouseup touchstart touchend touchcancel",function(e){i.controls.pressed=["mousedown","touchstart"].includes(e.type);}),this.bind(i.controls,"focusin",function(){var n=t.config,s=t.timers;toggleClass(i.controls,n.classNames.noTransition,!0),ui.toggleControls.call(t,!0),setTimeout(function(){toggleClass(i.controls,n.classNames.noTransition,!1);},0);var a=e.touch?3e3:4e3;clearTimeout(s.controls),s.controls=setTimeout(function(){return ui.toggleControls.call(t,!1)},a);}),this.bind(i.inputs.volume,"wheel",function(e){var i=e.webkitDirectionInvertedFromDevice,n=_slicedToArray([e.deltaX,-e.deltaY].map(function(e){return i?-e:e}),2),s=n[0],a=n[1],r=Math.sign(Math.abs(s)>Math.abs(a)?s:a);t.increaseVolume(r/50);var o=t.media.volume;(1===r&&o<1||-1===r&&o>0)&&e.preventDefault();},"volume",!1);}}]),e}();function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var loadjs_umd=createCommonjsModule(function(e,t){e.exports=function(){var e=function(){},t={},i={},n={};function s(e,t){if(e){var s=n[e];if(i[e]=t,s)for(;s.length;)s[0](e,t),s.splice(0,1);}}function a(t,i){t.call&&(t={success:t}),i.length?(t.error||e)(i):(t.success||e)(t);}function r(t,i,n,s){var a,o,l=document,c=n.async,u=(n.numRetries||0)+1,d=n.before||e,h=t.replace(/^(css|img)!/,"");s=s||0,/(^css!|\.css$)/.test(t)?((o=l.createElement("link")).rel="stylesheet",o.href=h,(a="hideFocus"in o)&&o.relList&&(a=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(o=l.createElement("img")).src=h:((o=l.createElement("script")).src=t,o.async=void 0===c||c),o.onload=o.onerror=o.onbeforeload=function(e){var l=e.type[0];if(a)try{o.sheet.cssText.length||(l="e");}catch(e){18!=e.code&&(l="e");}if("e"==l){if((s+=1)<u)return r(t,i,n,s)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";i(t,l,e.defaultPrevented);},!1!==d(t,o)&&l.head.appendChild(o);}function o(e,i,n){var o,l;if(i&&i.trim&&(o=i),l=(o?n:i)||{},o){if(o in t)throw"LoadJS";t[o]=!0;}function c(t,i){!function(e,t,i){var n,s,a=(e=e.push?e:[e]).length,o=a,l=[];for(n=function(e,i,n){if("e"==i&&l.push(e),"b"==i){if(!n)return;l.push(e);}--a||t(l);},s=0;s<o;s++)r(e[s],n,i);}(e,function(e){a(l,e),t&&a({success:t,error:i},e),s(o,e);},l);}if(l.returnPromise)return new Promise(c);c();}return o.ready=function(e,t){return function(e,t){e=e.push?e:[e];var s,a,r,o=[],l=e.length,c=l;for(s=function(e,i){i.length&&o.push(e),--c||t(o);};l--;)a=e[l],(r=i[a])?s(a,r):(n[a]=n[a]||[]).push(s);}(e,function(e){a(t,e);}),o},o.done=function(e){s(e,[]);},o.reset=function(){t={},i={},n={};},o.isDefined=function(e){return e in t},o}();});function loadScript(e){return new Promise(function(t,i){loadjs_umd(e,{success:t,error:i});})}function parseId(e){if(is$1.empty(e))return null;if(is$1.number(Number(e)))return e;return e.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:e}function assurePlaybackState(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,triggerEvent.call(this,this.media,e?"play":"pause"));}var vimeo={setup:function(){var e=this;toggleClass(this.elements.wrapper,this.config.classNames.embed,!0),setAspectRatio.call(this),is$1.object(window.Vimeo)?vimeo.ready.call(this):loadScript(this.config.urls.vimeo.sdk).then(function(){vimeo.ready.call(e);}).catch(function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t);});},ready:function(){var e=this,t=this,i=t.config.vimeo,n=buildUrlParams(extend({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},i)),s=t.media.getAttribute("src");is$1.empty(s)&&(s=t.media.getAttribute(t.config.attributes.embed.id));var a=parseId(s),r=createElement("iframe"),o=format(t.config.urls.vimeo.iframe,a,n);r.setAttribute("src",o),r.setAttribute("allowfullscreen",""),r.setAttribute("allowtransparency",""),r.setAttribute("allow","autoplay");var l=createElement("div",{poster:t.poster,class:t.config.classNames.embedContainer});l.appendChild(r),t.media=replaceElement(l,t.media),fetch(format(t.config.urls.vimeo.api,a),"json").then(function(e){if(!is$1.empty(e)){var i=new URL(e[0].thumbnail_large);i.pathname="".concat(i.pathname.split("_")[0],".jpg"),ui.setPoster.call(t,i.href).catch(function(){});}}),t.embed=new window.Vimeo.Player(r,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return assurePlaybackState.call(t,!0),t.embed.play()},t.media.pause=function(){return assurePlaybackState.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0;};var c=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return c},set:function(e){var i=t.embed,n=t.media,s=t.paused,a=t.volume,r=s&&!i.hasPlayed;n.seeking=!0,triggerEvent.call(t,n,"seeking"),Promise.resolve(r&&i.setVolume(0)).then(function(){return i.setCurrentTime(e)}).then(function(){return r&&i.pause()}).then(function(){return r&&i.setVolume(a)}).catch(function(){});}});var u=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return u},set:function(e){t.embed.setPlaybackRate(e).then(function(){u=e,triggerEvent.call(t,t.media,"ratechange");}).catch(function(e){"Error"===e.name&&controls.setSpeedMenu.call(t,[]);});}});var d=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return d},set:function(e){t.embed.setVolume(e).then(function(){d=e,triggerEvent.call(t,t.media,"volumechange");});}});var h=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return h},set:function(e){var i=!!is$1.boolean(e)&&e;t.embed.setVolume(i?0:t.config.volume).then(function(){h=i,triggerEvent.call(t,t.media,"volumechange");});}});var m,p=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return p},set:function(e){var i=is$1.boolean(e)?e:t.config.loop.active;t.embed.setLoop(i).then(function(){p=i;});}}),t.embed.getVideoUrl().then(function(e){m=e,controls.setDownloadUrl.call(t);}).catch(function(t){e.debug.warn(t);}),Object.defineProperty(t.media,"currentSrc",{get:function(){return m}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then(function(i){var n=_slicedToArray(i,2),s=n[0],a=n[1];t.embed.ratio=[s,a],setAspectRatio.call(e);}),t.embed.setAutopause(t.config.autopause).then(function(e){t.config.autopause=e;}),t.embed.getVideoTitle().then(function(i){t.config.title=i,ui.setTitle.call(e);}),t.embed.getCurrentTime().then(function(e){c=e,triggerEvent.call(t,t.media,"timeupdate");}),t.embed.getDuration().then(function(e){t.media.duration=e,triggerEvent.call(t,t.media,"durationchange");}),t.embed.getTextTracks().then(function(e){t.media.textTracks=e,captions.setup.call(t);}),t.embed.on("cuechange",function(e){var i=e.cues,n=(void 0===i?[]:i).map(function(e){return stripHTML(e.text)});captions.updateCues.call(t,n);}),t.embed.on("loaded",function(){(t.embed.getPaused().then(function(e){assurePlaybackState.call(t,!e),e||triggerEvent.call(t,t.media,"playing");}),is$1.element(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1);}),t.embed.on("play",function(){assurePlaybackState.call(t,!0),triggerEvent.call(t,t.media,"playing");}),t.embed.on("pause",function(){assurePlaybackState.call(t,!1);}),t.embed.on("timeupdate",function(e){t.media.seeking=!1,c=e.seconds,triggerEvent.call(t,t.media,"timeupdate");}),t.embed.on("progress",function(e){t.media.buffered=e.percent,triggerEvent.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&triggerEvent.call(t,t.media,"canplaythrough"),t.embed.getDuration().then(function(e){e!==t.media.duration&&(t.media.duration=e,triggerEvent.call(t,t.media,"durationchange"));});}),t.embed.on("seeked",function(){t.media.seeking=!1,triggerEvent.call(t,t.media,"seeked");}),t.embed.on("ended",function(){t.media.paused=!0,triggerEvent.call(t,t.media,"ended");}),t.embed.on("error",function(e){t.media.error=e,triggerEvent.call(t,t.media,"error");}),setTimeout(function(){return ui.build.call(t)},0);}};function parseId$1(e){if(is$1.empty(e))return null;return e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:e}function assurePlaybackState$1(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,triggerEvent.call(this,this.media,e?"play":"pause"));}function getHost(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var youtube={setup:function(){var e=this;if(toggleClass(this.elements.wrapper,this.config.classNames.embed,!0),is$1.object(window.YT)&&is$1.function(window.YT.Player))youtube.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){is$1.function(t)&&t(),youtube.ready.call(e);},loadScript(this.config.urls.youtube.sdk).catch(function(t){e.debug.warn("YouTube API failed to load",t);});}},getTitle:function(e){var t=this;fetch(format(this.config.urls.youtube.api,e)).then(function(e){if(is$1.object(e)){var i=e.title,n=e.height,s=e.width;t.config.title=i,ui.setTitle.call(t),t.embed.ratio=[s,n];}setAspectRatio.call(t);}).catch(function(){setAspectRatio.call(t);});},ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(is$1.empty(t)||!t.startsWith("youtube-")){var i=e.media.getAttribute("src");is$1.empty(i)&&(i=e.media.getAttribute(this.config.attributes.embed.id));var n=parseId$1(i),s=generateId(e.provider),a=createElement("div",{id:s,poster:e.poster});e.media=replaceElement(a,e.media);var r=function(e){return "https://i.ytimg.com/vi/".concat(n,"/").concat(e,"default.jpg")};loadImage(r("maxres"),121).catch(function(){return loadImage(r("sd"),121)}).catch(function(){return loadImage(r("hq"))}).then(function(t){return ui.setPoster.call(e,t.src)}).then(function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover");}).catch(function(){});var o=e.config.youtube;e.embed=new window.YT.Player(s,{videoId:n,host:getHost(o),playerVars:extend({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},o),events:{onError:function(t){if(!e.media.error){var i=t.data,n={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[i]||"An unknown error occured";e.media.error={code:i,message:n},triggerEvent.call(e,e.media,"error");}},onPlaybackRateChange:function(t){var i=t.target;e.media.playbackRate=i.getPlaybackRate(),triggerEvent.call(e,e.media,"ratechange");},onReady:function(t){if(!is$1.function(e.media.play)){var i=t.target;youtube.getTitle.call(e,n),e.media.play=function(){assurePlaybackState$1.call(e,!0),i.playVideo();},e.media.pause=function(){assurePlaybackState$1.call(e,!1),i.pauseVideo();},e.media.stop=function(){i.stopVideo();},e.media.duration=i.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(i.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,triggerEvent.call(e,e.media,"seeking"),i.seekTo(t);}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return i.getPlaybackRate()},set:function(e){i.setPlaybackRate(e);}});var s=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return s},set:function(t){s=t,i.setVolume(100*s),triggerEvent.call(e,e.media,"volumechange");}});var a=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return a},set:function(t){var n=is$1.boolean(t)?t:a;a=n,i[n?"mute":"unMute"](),triggerEvent.call(e,e.media,"volumechange");}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return i.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}}),e.options.speed=i.getAvailablePlaybackRates(),e.supported.ui&&e.media.setAttribute("tabindex",-1),triggerEvent.call(e,e.media,"timeupdate"),triggerEvent.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval(function(){e.media.buffered=i.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&triggerEvent.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),triggerEvent.call(e,e.media,"canplaythrough"));},200),setTimeout(function(){return ui.build.call(e)},50);}},onStateChange:function(t){var i=t.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(t.data)&&(e.media.seeking=!1,triggerEvent.call(e,e.media,"seeked")),t.data){case-1:triggerEvent.call(e,e.media,"timeupdate"),e.media.buffered=i.getVideoLoadedFraction(),triggerEvent.call(e,e.media,"progress");break;case 0:assurePlaybackState$1.call(e,!1),e.media.loop?(i.stopVideo(),i.playVideo()):triggerEvent.call(e,e.media,"ended");break;case 1:e.config.autoplay||!e.media.paused||e.embed.hasPlayed?(assurePlaybackState$1.call(e,!0),triggerEvent.call(e,e.media,"playing"),e.timers.playing=setInterval(function(){triggerEvent.call(e,e.media,"timeupdate");},50),e.media.duration!==i.getDuration()&&(e.media.duration=i.getDuration(),triggerEvent.call(e,e.media,"durationchange"))):e.media.pause();break;case 2:e.muted||e.embed.unMute(),assurePlaybackState$1.call(e,!1);}triggerEvent.call(e,e.elements.container,"statechange",!1,{code:t.data});}}});}}},media={setup:function(){this.media?(toggleClass(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),toggleClass(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&toggleClass(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=createElement("div",{class:this.config.classNames.video}),wrap(this.media,this.elements.wrapper),this.elements.poster=createElement("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?html5.extend.call(this):this.isYouTube?youtube.setup.call(this):this.isVimeo&&vimeo.setup.call(this)):this.debug.warn("No media element found!");}},destroy=function(e){e.manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove();},Ads=function(){function e(t){var i=this;_classCallCheck(this,e),this.player=t,this.config=t.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(function(e,t){i.on("loaded",e),i.on("error",t);}),this.load();}return _createClass(e,[{key:"load",value:function(){var e=this;this.enabled&&(is$1.object(window.google)&&is$1.object(window.google.ima)?this.ready():loadScript(this.player.config.urls.googleIMA.sdk).then(function(){e.ready();}).catch(function(){e.trigger("error",new Error("Google IMA SDK failed to load"));}));}},{key:"ready",value:function(){var e=this;this.enabled||destroy(this),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(function(){e.clearSafetyTimer("onAdsManagerLoaded()");}),this.listeners(),this.setupIMA();}},{key:"setupIMA",value:function(){this.elements.container=createElement("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds();}},{key:"requestAds",value:function(){var e=this,t=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(t){return e.onAdsManagerLoaded(t)},!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(t){return e.onAdError(t)},!1);var i=new google.ima.AdsRequest;i.adTagUrl=this.tagUrl,i.linearAdSlotWidth=t.offsetWidth,i.linearAdSlotHeight=t.offsetHeight,i.nonLinearAdSlotWidth=t.offsetWidth,i.nonLinearAdSlotHeight=t.offsetHeight,i.forceNonLinearFullSlot=!1,i.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(i);}catch(e){this.onAdError(e);}}},{key:"pollCountdown",value:function(){var e=this;if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0]))return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(function(){var t=formatTime(Math.max(e.manager.getRemainingTime(),0)),i="".concat(i18n.get("advertisement",e.player.config)," - ").concat(t);e.elements.container.setAttribute("data-badge-text",i);},100);}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var i=new google.ima.AdsRenderingSettings;i.restoreCustomPlaybackStateOnAdBreakComplete=!0,i.enablePreloading=!0,this.manager=e.getAdsManager(this.player,i),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return t.onAdError(e)}),Object.keys(google.ima.AdEvent.Type).forEach(function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],function(e){return t.onAdEvent(e)});}),this.trigger("loaded");}}},{key:"addCuePoints",value:function(){var e=this;is$1.empty(this.cuePoints)||this.cuePoints.forEach(function(t){if(0!==t&&-1!==t&&t<e.player.duration){var i=e.player.elements.progress;if(is$1.element(i)){var n=100/e.player.duration*t,s=createElement("span",{class:e.player.config.classNames.cues});s.style.left="".concat(n.toString(),"%"),i.appendChild(s);}}});}},{key:"onAdEvent",value:function(e){var t,i=this,n=this.player.elements.container,s=e.getAd(),a=e.getAdData();switch(t=e.type,triggerEvent.call(i.player,i.player.media,"ads".concat(t.replace(/_/g,"").toLowerCase())),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),s.isLinear()||(s.width=n.offsetWidth,s.height=n.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:a.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()));}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e);}},{key:"listeners",value:function(){var e,t=this,i=this.player.elements.container;this.player.on("canplay",function(){t.addCuePoints();}),this.player.on("ended",function(){t.loader.contentComplete();}),this.player.on("timeupdate",function(){e=t.player.currentTime;}),this.player.on("seeked",function(){var i=t.player.currentTime;is$1.empty(t.cuePoints)||t.cuePoints.forEach(function(n,s){e<n&&n<i&&(t.manager.discardAdBreak(),t.cuePoints.splice(s,1));});}),window.addEventListener("resize",function(){t.manager&&t.manager.resize(i.offsetWidth,i.offsetHeight,google.ima.ViewMode.NORMAL);});}},{key:"play",value:function(){var e=this,t=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then(function(){e.manager.setVolume(e.player.volume),e.elements.displayContainer.initialize();try{e.initialized||(e.manager.init(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL),e.manager.start()),e.initialized=!0;}catch(t){e.onAdError(t);}}).catch(function(){});}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play();}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause();}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds();}},{key:"loadAds",value:function(){var e=this;this.managerPromise.then(function(){e.manager&&e.manager.destroy(),e.managerPromise=new Promise(function(t){e.on("loaded",t),e.player.debug.log(e.manager);}),e.requestAds();}).catch(function(){});}},{key:"trigger",value:function(e){for(var t=this,i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];var a=this.events[e];is$1.array(a)&&a.forEach(function(e){is$1.function(e)&&e.apply(t,n);});}},{key:"on",value:function(e,t){return is$1.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var i=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout(function(){i.cancel(),i.clearSafetyTimer("startSafetyTimer()");},e);}},{key:"clearSafetyTimer",value:function(e){is$1.nullOrUndefined(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null);}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!is$1.empty(e.publisherId)||is$1.url(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(is$1.url(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:this.publisherId};return "".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(buildUrlParams(t))}}]),e}(),parseVtt=function(e){var t=[];return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e){var i={};e.split(/\r\n|\n|\r/).forEach(function(e){if(is$1.number(i.startTime)){if(!is$1.empty(e.trim())&&is$1.empty(i.text)){var t=e.trim().split("#xywh="),n=_slicedToArray(t,1);if(i.text=n[0],t[1]){var s=_slicedToArray(t[1].split(","),4);i.x=s[0],i.y=s[1],i.w=s[2],i.h=s[3];}}}else{var a=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);a&&(i.startTime=60*Number(a[1]||0)*60+60*Number(a[2])+Number(a[3])+Number("0.".concat(a[4])),i.endTime=60*Number(a[6]||0)*60+60*Number(a[7])+Number(a[8])+Number("0.".concat(a[9])));}}),i.text&&t.push(i);}),t},PreviewThumbnails=function(){function e(t){_classCallCheck(this,e),this.player=t,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load();}return _createClass(e,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0);});}},{key:"getThumbnails",value:function(){var e=this;return new Promise(function(t){var i=e.player.config.previewThumbnails.src;if(is$1.empty(i))throw new Error("Missing previewThumbnails.src config attribute");var n=(is$1.string(i)?[i]:i).map(function(t){return e.getThumbnail(t)});Promise.all(n).then(function(){e.thumbnails.sort(function(e,t){return e.height-t.height}),e.player.debug.log("Preview thumbnails",e.thumbnails),t();});})}},{key:"getThumbnail",value:function(e){var t=this;return new Promise(function(i){fetch(e).then(function(n){var s={frames:parseVtt(n),height:null,urlPrefix:""};s.frames[0].text.startsWith("/")||s.frames[0].text.startsWith("http://")||s.frames[0].text.startsWith("https://")||(s.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var a=new Image;a.onload=function(){s.height=a.naturalHeight,s.width=a.naturalWidth,t.thumbnails.push(s),i();},a.src=s.urlPrefix+s.frames[0].text;});})}},{key:"startMove",value:function(e){if(this.loaded&&is$1.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),i=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(i/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=formatTime(this.seekTime);}this.showImageAtCurrentTime();}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0);}},{key:"startScrubbing",value:function(e){!1!==e.button&&0!==e.button||(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()));}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):once.call(this.player,this.player.media,"timeupdate",function(){e.mouseDown||e.toggleScrubbingContainer(!1);});}},{key:"listeners",value:function(){var e=this;this.player.on("play",function(){e.toggleThumbContainer(!1,!0);}),this.player.on("seeked",function(){e.toggleThumbContainer(!1);}),this.player.on("timeupdate",function(){e.lastTime=e.player.media.currentTime;});}},{key:"render",value:function(){this.elements.thumb.container=createElement("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=createElement("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=createElement("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=createElement("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),is$1.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=createElement("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);}},{key:"showImageAtCurrentTime",value:function(){var e=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var t=this.thumbnails[0].frames.findIndex(function(t){return e.seekTime>=t.startTime&&e.seekTime<=t.endTime}),i=t>=0,n=0;this.mouseDown||this.toggleThumbContainer(i),i&&(this.thumbnails.forEach(function(i,s){e.loadedImages.includes(i.frames[t].text)&&(n=s);}),t!==this.showingThumb&&(this.showingThumb=t,this.loadImage(n)));}},{key:"loadImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this.showingThumb,n=this.thumbnails[t],s=n.urlPrefix,a=n.frames[i],r=n.frames[i].text,o=s+r;if(this.currentImageElement&&this.currentImageElement.dataset.filename===r)this.showImage(this.currentImageElement,a,t,i,r,!1),this.currentImageElement.dataset.index=i,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var l=new Image;l.src=o,l.dataset.index=i,l.dataset.filename=r,this.showingThumbFilename=r,this.player.debug.log("Loading image: ".concat(o)),l.onload=function(){return e.showImage(l,a,t,i,r,!0)},this.loadingImage=l,this.removeOldImages(l);}}},{key:"showImage",value:function(e,t,i,n,s){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];this.player.debug.log("Showing thumb: ".concat(s,". num: ").concat(n,". qual: ").concat(i,". newimg: ").concat(a)),this.setImageSizeAndOffset(e,t),a&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(s)||this.loadedImages.push(s)),this.preloadNearby(n,!0).then(this.preloadNearby(n,!1)).then(this.getHigherQuality(i,e,t,s));}},{key:"removeOldImages",value:function(e){var t=this;Array.from(this.currentImageContainer.children).forEach(function(i){if("img"===i.tagName.toLowerCase()){var n=t.usingSprites?500:1e3;if(i.dataset.index!==e.dataset.index&&!i.dataset.deleting){i.dataset.deleting=!0;var s=t.currentImageContainer;setTimeout(function(){s.removeChild(i),t.player.debug.log("Removing thumb: ".concat(i.dataset.filename));},n);}}});}},{key:"preloadNearby",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(n){setTimeout(function(){var s=t.thumbnails[0].frames[e].text;if(t.showingThumbFilename===s){var a;a=i?t.thumbnails[0].frames.slice(e):t.thumbnails[0].frames.slice(0,e).reverse();var r=!1;a.forEach(function(e){var i=e.text;if(i!==s&&!t.loadedImages.includes(i)){r=!0,t.player.debug.log("Preloading thumb filename: ".concat(i));var a=t.thumbnails[0].urlPrefix+i,o=new Image;o.src=a,o.onload=function(){t.player.debug.log("Preloaded thumb filename: ".concat(i)),t.loadedImages.includes(i)||t.loadedImages.push(i),n();};}}),r||n();}},300);})}},{key:"getHigherQuality",value:function(e,t,i,n){var s=this;if(e<this.thumbnails.length-1){var a=t.naturalHeight;this.usingSprites&&(a=i.h),a<this.thumbContainerHeight&&setTimeout(function(){s.showingThumbFilename===n&&(s.player.debug.log("Showing higher quality thumb for: ".concat(n)),s.loadImage(e+1));},300);}}},{key:"toggleThumbContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(i,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null);}},{key:"toggleScrubbingContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null);}},{key:"determineContainerAutoSizing",value:function(){this.elements.thumb.imageContainer.clientHeight>20&&(this.sizeSpecifiedInCSS=!0);}},{key:"setThumbContainerSizeAndPos",value:function(){if(!this.sizeSpecifiedInCSS){var e=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(e,"px");}this.setThumbContainerPos();}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),i=this.elements.thumb.container,n=t.left-e.left+10,s=t.right-e.left-i.clientWidth-10,a=this.mousePosX-e.left-i.clientWidth/2;a<n&&(a=n),a>s&&(a=s),i.style.left="".concat(a,"px");}},{key:"setScrubbingContainerSize",value:function(){this.elements.scrubbing.container.style.width="".concat(this.player.media.clientWidth,"px"),this.elements.scrubbing.container.style.height="".concat(this.player.media.clientWidth/this.thumbAspectRatio,"px");}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var i=this.thumbContainerHeight/t.h;e.style.height="".concat(Math.floor(e.naturalHeight*i),"px"),e.style.width="".concat(Math.floor(e.naturalWidth*i),"px"),e.style.left="-".concat(t.x*i,"px"),e.style.top="-".concat(t.y*i,"px");}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?Math.floor(this.player.media.clientWidth/this.thumbAspectRatio):Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e;}}]),e}(),source={insertElements:function(e,t){var i=this;is$1.string(t)?insertElement(e,this.media,{src:t}):is$1.array(t)&&t.forEach(function(t){insertElement(e,i.media,t);});},change:function(e){var t=this;getDeep(e,"sources.length")?(html5.cancelRequests.call(this),this.destroy.call(this,function(){t.options.quality=[],removeElement(t.media),t.media=null,is$1.element(t.elements.container)&&t.elements.container.removeAttribute("class");var i=e.sources,n=e.type,s=_slicedToArray(i,1)[0],a=s.provider,r=void 0===a?providers.html5:a,o=s.src,l="html5"===r?n:"div",c="html5"===r?{}:{src:o};Object.assign(t,{provider:r,type:n,supported:support.check(n,r,t.config.playsinline),media:createElement(l,c)}),t.elements.container.appendChild(t.media),is$1.boolean(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),is$1.empty(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),ui.addStyleHook.call(t),t.isHTML5&&source.insertElements.call(t,"source",i),t.config.title=e.title,media.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&source.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&ui.build.call(t),t.isHTML5&&t.media.load(),t.previewThumbnails&&t.previewThumbnails.load(),t.fullscreen.update();},!0)):this.debug.warn("Invalid source format");}};function clamp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),i)}var Plyr=function(){function e(t,i){var n=this;if(_classCallCheck(this,e),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=support.touch,this.media=t,is$1.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||is$1.nodeList(this.media)||is$1.array(this.media))&&(this.media=this.media[0]),this.config=extend({},defaults$1,e.defaults,i||{},function(){try{return JSON.parse(n.media.getAttribute("data-plyr-config"))}catch(e){return {}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Console(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",support),!is$1.nullOrUndefined(this.media)&&is$1.element(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(support.check().api){var s=this.media.cloneNode(!0);s.autoplay=!1,this.elements.original=s;var a=this.media.tagName.toLowerCase(),r=null,o=null;switch(a){case"div":if(r=this.media.querySelector("iframe"),is$1.element(r)){if(o=parseUrl(r.getAttribute("src")),this.provider=getProviderByUrl(o.toString()),this.elements.container=this.media,this.media=r,this.elements.container.className="",o.search.length){var l=["1","true"];l.includes(o.searchParams.get("autoplay"))&&(this.config.autoplay=!0),l.includes(o.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=l.includes(o.searchParams.get("playsinline")),this.config.youtube.hl=o.searchParams.get("hl")):this.config.playsinline=!0;}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(is$1.empty(this.provider)||!Object.keys(providers).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=types.video;break;case"video":case"audio":this.type=a,this.provider=providers.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=support.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new Listeners(this),this.storage=new Storage(this),this.media.plyr=this,is$1.element(this.elements.container)||(this.elements.container=createElement("div",{tabindex:0}),wrap(this.media,this.elements.container)),ui.addStyleHook.call(this),media.setup.call(this),this.config.debug&&on.call(this,this.elements.container,this.config.events.join(" "),function(e){n.debug.log("event: ".concat(e.type));}),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&ui.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new Fullscreen(this),this.config.ads.enabled&&(this.ads=new Ads(this)),this.isHTML5&&this.config.autoplay&&setTimeout(function(){return n.play()},10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new PreviewThumbnails(this))):this.debug.error("Setup failed: no support");}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed");}return _createClass(e,[{key:"play",value:function(){var e=this;return is$1.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(function(){return e.ads.play()}).catch(function(){return e.media.play()}),this.media.play()):null}},{key:"pause",value:function(){this.playing&&is$1.function(this.media.pause)&&this.media.pause();}},{key:"togglePlay",value:function(e){(is$1.boolean(e)?e:!this.playing)?this.play():this.pause();}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):is$1.function(this.media.stop)&&this.media.stop();}},{key:"restart",value:function(){this.currentTime=0;}},{key:"rewind",value:function(e){this.currentTime=this.currentTime-(is$1.number(e)?e:this.config.seekTime);}},{key:"forward",value:function(e){this.currentTime=this.currentTime+(is$1.number(e)?e:this.config.seekTime);}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(is$1.number(e)?e:0);}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e);}},{key:"toggleCaptions",value:function(e){captions.toggle.call(this,e,!1);}},{key:"airplay",value:function(){support.airplay&&this.media.webkitShowPlaybackTargetPicker();}},{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=hasClass(this.elements.container,this.config.classNames.hideControls),i=void 0===e?void 0:!e,n=toggleClass(this.elements.container,this.config.classNames.hideControls,i);if(n&&this.config.controls.includes("settings")&&!is$1.empty(this.config.settings)&&controls.toggleMenu.call(this,!1),n!==t){var s=n?"controlshidden":"controlsshown";triggerEvent.call(this,this.media,s);}return !n}return !1}},{key:"on",value:function(e,t){on.call(this,this.elements.container,e,t);}},{key:"once",value:function(e,t){once.call(this,this.elements.container,e,t);}},{key:"off",value:function(e,t){off(this.elements.container,e,t);}},{key:"destroy",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var n=function(){document.body.style.overflow="",t.embed=null,i?(Object.keys(t.elements).length&&(removeElement(t.elements.buttons.play),removeElement(t.elements.captions),removeElement(t.elements.controls),removeElement(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),is$1.function(e)&&e()):(unbindListeners.call(t),replaceElement(t.elements.original,t.elements.container),triggerEvent.call(t,t.elements.original,"destroyed",!0),is$1.function(e)&&e.call(t.elements.original),t.ready=!1,setTimeout(function(){t.elements=null,t.media=null;},200));};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(ui.toggleNativeControls.call(this,!0),n()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&is$1.function(this.embed.destroy)&&this.embed.destroy(),n()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(n),setTimeout(n,200));}}},{key:"supports",value:function(e){return support.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===providers.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===providers.youtube}},{key:"isVimeo",get:function(){return this.provider===providers.vimeo}},{key:"isVideo",get:function(){return this.type===types.video}},{key:"isAudio",get:function(){return this.type===types.audio}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=is$1.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"));}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return is$1.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,i=is$1.number(t)&&t!==1/0?t:0;return e||i}},{key:"volume",set:function(e){var t=e;is$1.string(t)&&(t=Number(t)),is$1.number(t)||(t=this.storage.get("volume")),is$1.number(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!is$1.empty(e)&&this.muted&&t>0&&(this.muted=!1);},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;is$1.boolean(t)||(t=this.storage.get("muted")),is$1.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t;},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return !this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,i=null;is$1.number(e)&&(i=e),is$1.number(i)||(i=this.storage.get("speed")),is$1.number(i)||(i=this.config.speed.selected);var n=this.minimumSpeed,s=this.maximumSpeed;i=clamp(i,n,s),this.config.speed.selected=i,setTimeout(function(){t.media.playbackRate=i;},0);},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,_toConsumableArray(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,_toConsumableArray(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,i=this.options.quality;if(i.length){var n=[!is$1.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(is$1.number),s=!0;if(!i.includes(n)){var a=closest(i,n);this.debug.warn("Unsupported quality option: ".concat(n,", using ").concat(a," instead")),n=a,s=!1;}t.selected=n,this.media.quality=n,s&&this.storage.set({quality:n});}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=is$1.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t;},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){source.change.call(this,e);},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return is$1.url(e)?e:this.source},set:function(e){is$1.url(e)&&(this.config.urls.download=e,controls.setDownloadUrl.call(this));}},{key:"poster",set:function(e){this.isVideo?ui.setPoster.call(this,e,!1).catch(function(){}):this.debug.warn("Poster can only be set for video");},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=reduceAspectRatio(getAspectRatio.call(this));return is$1.array(e)?e.join(":"):e},set:function(e){this.isVideo?is$1.string(e)&&validateRatio(e)?(this.config.ratio=e,setAspectRatio.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video");}},{key:"autoplay",set:function(e){var t=is$1.boolean(e)?e:this.config.autoplay;this.config.autoplay=t;},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){captions.set.call(this,e,!1);},get:function(){var e=this.captions,t=e.toggled,i=e.currentTrack;return t?i:-1}},{key:"language",set:function(e){captions.setLanguage.call(this,e,!1);},get:function(){return (captions.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(support.pip){var t=is$1.boolean(e)?e:!this.pip;is$1.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?pip.active:pip.inactive),is$1.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture());}},get:function(){return support.pip?is$1.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===pip.active:null}}],[{key:"supported",value:function(e,t,i){return support.check(e,t,i)}},{key:"loadSprite",value:function(e,t){return loadSprite(e,t)}},{key:"setup",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;return is$1.string(t)?n=Array.from(document.querySelectorAll(t)):is$1.nodeList(t)?n=Array.from(t):is$1.array(t)&&(n=t.filter(is$1.element)),is$1.empty(n)?null:n.map(function(t){return new e(t,i)})}}]),e}();Plyr.defaults=cloneDeep(defaults$1);

	var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule$1(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var stringify_1 = createCommonjsModule$1(function (module, exports) {
	/*
	 json-stringify-safe
	 Like JSON.stringify, but doesn't throw on circular references.

	 Originally forked from https://github.com/isaacs/json-stringify-safe
	 version 5.0.1 on 3/8/2017 and modified to handle Errors serialization
	 and IE8 compatibility. Tests for this are in test/vendor.

	 ISC license: https://github.com/isaacs/json-stringify-safe/blob/master/LICENSE
	*/

	exports = module.exports = stringify;
	exports.getSerialize = serializer;

	function indexOf(haystack, needle) {
	  for (var i = 0; i < haystack.length; ++i) {
	    if (haystack[i] === needle) return i;
	  }
	  return -1;
	}

	function stringify(obj, replacer, spaces, cycleReplacer) {
	  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
	}

	// https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
	function stringifyError(value) {
	  var err = {
	    // These properties are implemented as magical getters and don't show up in for in
	    stack: value.stack,
	    message: value.message,
	    name: value.name
	  };

	  for (var i in value) {
	    if (Object.prototype.hasOwnProperty.call(value, i)) {
	      err[i] = value[i];
	    }
	  }

	  return err;
	}

	function serializer(replacer, cycleReplacer) {
	  var stack = [];
	  var keys = [];

	  if (cycleReplacer == null) {
	    cycleReplacer = function(key, value) {
	      if (stack[0] === value) {
	        return '[Circular ~]';
	      }
	      return '[Circular ~.' + keys.slice(0, indexOf(stack, value)).join('.') + ']';
	    };
	  }

	  return function(key, value) {
	    if (stack.length > 0) {
	      var thisPos = indexOf(stack, this);
	      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
	      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

	      if (~indexOf(stack, value)) {
	        value = cycleReplacer.call(this, key, value);
	      }
	    } else {
	      stack.push(value);
	    }

	    return replacer == null
	      ? value instanceof Error ? stringifyError(value) : value
	      : replacer.call(this, key, value);
	  };
	}
	});
	var stringify_2 = stringify_1.getSerialize;

	var _window =
	  typeof window !== 'undefined'
	    ? window
	    : typeof commonjsGlobal$1 !== 'undefined'
	      ? commonjsGlobal$1
	      : typeof self !== 'undefined'
	        ? self
	        : {};

	function isObject$2(what) {
	  return typeof what === 'object' && what !== null;
	}

	// Yanked from https://git.io/vS8DV re-used under CC0
	// with some tiny modifications
	function isError(value) {
	  switch (Object.prototype.toString.call(value)) {
	    case '[object Error]':
	      return true;
	    case '[object Exception]':
	      return true;
	    case '[object DOMException]':
	      return true;
	    default:
	      return value instanceof Error;
	  }
	}

	function isErrorEvent(value) {
	  return Object.prototype.toString.call(value) === '[object ErrorEvent]';
	}

	function isDOMError(value) {
	  return Object.prototype.toString.call(value) === '[object DOMError]';
	}

	function isDOMException(value) {
	  return Object.prototype.toString.call(value) === '[object DOMException]';
	}

	function isUndefined(what) {
	  return what === void 0;
	}

	function isFunction$2(what) {
	  return typeof what === 'function';
	}

	function isPlainObject(what) {
	  return Object.prototype.toString.call(what) === '[object Object]';
	}

	function isString$2(what) {
	  return Object.prototype.toString.call(what) === '[object String]';
	}

	function isArray$2(what) {
	  return Object.prototype.toString.call(what) === '[object Array]';
	}

	function isEmptyObject(what) {
	  if (!isPlainObject(what)) return false;

	  for (var _ in what) {
	    if (what.hasOwnProperty(_)) {
	      return false;
	    }
	  }
	  return true;
	}

	function supportsErrorEvent() {
	  try {
	    new ErrorEvent(''); // eslint-disable-line no-new
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function supportsDOMError() {
	  try {
	    new DOMError(''); // eslint-disable-line no-new
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function supportsDOMException() {
	  try {
	    new DOMException(''); // eslint-disable-line no-new
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function supportsFetch() {
	  if (!('fetch' in _window)) return false;

	  try {
	    new Headers(); // eslint-disable-line no-new
	    new Request(''); // eslint-disable-line no-new
	    new Response(); // eslint-disable-line no-new
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	// Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
	// https://caniuse.com/#feat=referrer-policy
	// It doesn't. And it throw exception instead of ignoring this parameter...
	// REF: https://github.com/getsentry/raven-js/issues/1233
	function supportsReferrerPolicy() {
	  if (!supportsFetch()) return false;

	  try {
	    // eslint-disable-next-line no-new
	    new Request('pickleRick', {
	      referrerPolicy: 'origin'
	    });
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function supportsPromiseRejectionEvent() {
	  return typeof PromiseRejectionEvent === 'function';
	}

	function wrappedCallback(callback) {
	  function dataCallback(data, original) {
	    var normalizedData = callback(data) || data;
	    if (original) {
	      return original(normalizedData) || normalizedData;
	    }
	    return normalizedData;
	  }

	  return dataCallback;
	}

	function each(obj, callback) {
	  var i, j;

	  if (isUndefined(obj.length)) {
	    for (i in obj) {
	      if (hasKey(obj, i)) {
	        callback.call(null, i, obj[i]);
	      }
	    }
	  } else {
	    j = obj.length;
	    if (j) {
	      for (i = 0; i < j; i++) {
	        callback.call(null, i, obj[i]);
	      }
	    }
	  }
	}

	function objectMerge(obj1, obj2) {
	  if (!obj2) {
	    return obj1;
	  }
	  each(obj2, function(key, value) {
	    obj1[key] = value;
	  });
	  return obj1;
	}

	/**
	 * This function is only used for react-native.
	 * react-native freezes object that have already been sent over the
	 * js bridge. We need this function in order to check if the object is frozen.
	 * So it's ok that objectFrozen returns false if Object.isFrozen is not
	 * supported because it's not relevant for other "platforms". See related issue:
	 * https://github.com/getsentry/react-native-sentry/issues/57
	 */
	function objectFrozen(obj) {
	  if (!Object.isFrozen) {
	    return false;
	  }
	  return Object.isFrozen(obj);
	}

	function truncate(str, max) {
	  if (typeof max !== 'number') {
	    throw new Error('2nd argument to `truncate` function should be a number');
	  }
	  if (typeof str !== 'string' || max === 0) {
	    return str;
	  }
	  return str.length <= max ? str : str.substr(0, max) + '\u2026';
	}

	/**
	 * hasKey, a better form of hasOwnProperty
	 * Example: hasKey(MainHostObject, property) === true/false
	 *
	 * @param {Object} host object to check property
	 * @param {string} key to check
	 */
	function hasKey(object, key) {
	  return Object.prototype.hasOwnProperty.call(object, key);
	}

	function joinRegExp(patterns) {
	  // Combine an array of regular expressions and strings into one large regexp
	  // Be mad.
	  var sources = [],
	    i = 0,
	    len = patterns.length,
	    pattern;

	  for (; i < len; i++) {
	    pattern = patterns[i];
	    if (isString$2(pattern)) {
	      // If it's a string, we need to escape it
	      // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
	      sources.push(pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
	    } else if (pattern && pattern.source) {
	      // If it's a regexp already, we want to extract the source
	      sources.push(pattern.source);
	    }
	    // Intentionally skip other cases
	  }
	  return new RegExp(sources.join('|'), 'i');
	}

	function urlencode(o) {
	  var pairs = [];
	  each(o, function(key, value) {
	    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
	  });
	  return pairs.join('&');
	}

	// borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
	// intentionally using regex and not <a/> href parsing trick because React Native and other
	// environments where DOM might not be available
	function parseUrl$1(url) {
	  if (typeof url !== 'string') return {};
	  var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

	  // coerce to undefined values to empty string so we don't get 'undefined'
	  var query = match[6] || '';
	  var fragment = match[8] || '';
	  return {
	    protocol: match[2],
	    host: match[4],
	    path: match[5],
	    relative: match[5] + query + fragment // everything minus origin
	  };
	}
	function uuid4() {
	  var crypto = _window.crypto || _window.msCrypto;

	  if (!isUndefined(crypto) && crypto.getRandomValues) {
	    // Use window.crypto API if available
	    // eslint-disable-next-line no-undef
	    var arr = new Uint16Array(8);
	    crypto.getRandomValues(arr);

	    // set 4 in byte 7
	    arr[3] = (arr[3] & 0xfff) | 0x4000;
	    // set 2 most significant bits of byte 9 to '10'
	    arr[4] = (arr[4] & 0x3fff) | 0x8000;

	    var pad = function(num) {
	      var v = num.toString(16);
	      while (v.length < 4) {
	        v = '0' + v;
	      }
	      return v;
	    };

	    return (
	      pad(arr[0]) +
	      pad(arr[1]) +
	      pad(arr[2]) +
	      pad(arr[3]) +
	      pad(arr[4]) +
	      pad(arr[5]) +
	      pad(arr[6]) +
	      pad(arr[7])
	    );
	  } else {
	    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
	    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	      var r = (Math.random() * 16) | 0,
	        v = c === 'x' ? r : (r & 0x3) | 0x8;
	      return v.toString(16);
	    });
	  }
	}

	/**
	 * Given a child DOM element, returns a query-selector statement describing that
	 * and its ancestors
	 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
	 * @param elem
	 * @returns {string}
	 */
	function htmlTreeAsString(elem) {
	  /* eslint no-extra-parens:0*/
	  var MAX_TRAVERSE_HEIGHT = 5,
	    MAX_OUTPUT_LEN = 80,
	    out = [],
	    height = 0,
	    len = 0,
	    separator = ' > ',
	    sepLength = separator.length,
	    nextStr;

	  while (elem && height++ < MAX_TRAVERSE_HEIGHT) {
	    nextStr = htmlElementAsString(elem);
	    // bail out if
	    // - nextStr is the 'html' element
	    // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
	    //   (ignore this limit if we are on the first iteration)
	    if (
	      nextStr === 'html' ||
	      (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)
	    ) {
	      break;
	    }

	    out.push(nextStr);

	    len += nextStr.length;
	    elem = elem.parentNode;
	  }

	  return out.reverse().join(separator);
	}

	/**
	 * Returns a simple, query-selector representation of a DOM element
	 * e.g. [HTMLElement] => input#foo.btn[name=baz]
	 * @param HTMLElement
	 * @returns {string}
	 */
	function htmlElementAsString(elem) {
	  var out = [],
	    className,
	    classes,
	    key,
	    attr,
	    i;

	  if (!elem || !elem.tagName) {
	    return '';
	  }

	  out.push(elem.tagName.toLowerCase());
	  if (elem.id) {
	    out.push('#' + elem.id);
	  }

	  className = elem.className;
	  if (className && isString$2(className)) {
	    classes = className.split(/\s+/);
	    for (i = 0; i < classes.length; i++) {
	      out.push('.' + classes[i]);
	    }
	  }
	  var attrWhitelist = ['type', 'name', 'title', 'alt'];
	  for (i = 0; i < attrWhitelist.length; i++) {
	    key = attrWhitelist[i];
	    attr = elem.getAttribute(key);
	    if (attr) {
	      out.push('[' + key + '="' + attr + '"]');
	    }
	  }
	  return out.join('');
	}

	/**
	 * Returns true if either a OR b is truthy, but not both
	 */
	function isOnlyOneTruthy(a, b) {
	  return !!(!!a ^ !!b);
	}

	/**
	 * Returns true if both parameters are undefined
	 */
	function isBothUndefined(a, b) {
	  return isUndefined(a) && isUndefined(b);
	}

	/**
	 * Returns true if the two input exception interfaces have the same content
	 */
	function isSameException(ex1, ex2) {
	  if (isOnlyOneTruthy(ex1, ex2)) return false;

	  ex1 = ex1.values[0];
	  ex2 = ex2.values[0];

	  if (ex1.type !== ex2.type || ex1.value !== ex2.value) return false;

	  // in case both stacktraces are undefined, we can't decide so default to false
	  if (isBothUndefined(ex1.stacktrace, ex2.stacktrace)) return false;

	  return isSameStacktrace(ex1.stacktrace, ex2.stacktrace);
	}

	/**
	 * Returns true if the two input stack trace interfaces have the same content
	 */
	function isSameStacktrace(stack1, stack2) {
	  if (isOnlyOneTruthy(stack1, stack2)) return false;

	  var frames1 = stack1.frames;
	  var frames2 = stack2.frames;

	  // Exit early if stacktrace is malformed
	  if (frames1 === undefined || frames2 === undefined) return false;

	  // Exit early if frame count differs
	  if (frames1.length !== frames2.length) return false;

	  // Iterate through every frame; bail out if anything differs
	  var a, b;
	  for (var i = 0; i < frames1.length; i++) {
	    a = frames1[i];
	    b = frames2[i];
	    if (
	      a.filename !== b.filename ||
	      a.lineno !== b.lineno ||
	      a.colno !== b.colno ||
	      a['function'] !== b['function']
	    )
	      return false;
	  }
	  return true;
	}

	/**
	 * Polyfill a method
	 * @param obj object e.g. `document`
	 * @param name method name present on object e.g. `addEventListener`
	 * @param replacement replacement function
	 * @param track {optional} record instrumentation to an array
	 */
	function fill(obj, name, replacement, track) {
	  if (obj == null) return;
	  var orig = obj[name];
	  obj[name] = replacement(orig);
	  obj[name].__raven__ = true;
	  obj[name].__orig__ = orig;
	  if (track) {
	    track.push([obj, name, orig]);
	  }
	}

	/**
	 * Join values in array
	 * @param input array of values to be joined together
	 * @param delimiter string to be placed in-between values
	 * @returns {string}
	 */
	function safeJoin(input, delimiter) {
	  if (!isArray$2(input)) return '';

	  var output = [];

	  for (var i = 0; i < input.length; i++) {
	    try {
	      output.push(String(input[i]));
	    } catch (e) {
	      output.push('[value cannot be serialized]');
	    }
	  }

	  return output.join(delimiter);
	}

	// Default Node.js REPL depth
	var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
	// 50kB, as 100kB is max payload size, so half sounds reasonable
	var MAX_SERIALIZE_EXCEPTION_SIZE = 50 * 1024;
	var MAX_SERIALIZE_KEYS_LENGTH = 40;

	function utf8Length(value) {
	  return ~-encodeURI(value).split(/%..|./).length;
	}

	function jsonSize(value) {
	  return utf8Length(JSON.stringify(value));
	}

	function serializeValue(value) {
	  if (typeof value === 'string') {
	    var maxLength = 40;
	    return truncate(value, maxLength);
	  } else if (
	    typeof value === 'number' ||
	    typeof value === 'boolean' ||
	    typeof value === 'undefined'
	  ) {
	    return value;
	  }

	  var type = Object.prototype.toString.call(value);

	  // Node.js REPL notation
	  if (type === '[object Object]') return '[Object]';
	  if (type === '[object Array]') return '[Array]';
	  if (type === '[object Function]')
	    return value.name ? '[Function: ' + value.name + ']' : '[Function]';

	  return value;
	}

	function serializeObject(value, depth) {
	  if (depth === 0) return serializeValue(value);

	  if (isPlainObject(value)) {
	    return Object.keys(value).reduce(function(acc, key) {
	      acc[key] = serializeObject(value[key], depth - 1);
	      return acc;
	    }, {});
	  } else if (Array.isArray(value)) {
	    return value.map(function(val) {
	      return serializeObject(val, depth - 1);
	    });
	  }

	  return serializeValue(value);
	}

	function serializeException(ex, depth, maxSize) {
	  if (!isPlainObject(ex)) return ex;

	  depth = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_DEPTH : depth;
	  maxSize = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_SIZE : maxSize;

	  var serialized = serializeObject(ex, depth);

	  if (jsonSize(stringify_1(serialized)) > maxSize) {
	    return serializeException(ex, depth - 1);
	  }

	  return serialized;
	}

	function serializeKeysForMessage(keys, maxLength) {
	  if (typeof keys === 'number' || typeof keys === 'string') return keys.toString();
	  if (!Array.isArray(keys)) return '';

	  keys = keys.filter(function(key) {
	    return typeof key === 'string';
	  });
	  if (keys.length === 0) return '[object has no keys]';

	  maxLength = typeof maxLength !== 'number' ? MAX_SERIALIZE_KEYS_LENGTH : maxLength;
	  if (keys[0].length >= maxLength) return keys[0];

	  for (var usedKeys = keys.length; usedKeys > 0; usedKeys--) {
	    var serialized = keys.slice(0, usedKeys).join(', ');
	    if (serialized.length > maxLength) continue;
	    if (usedKeys === keys.length) return serialized;
	    return serialized + '\u2026';
	  }

	  return '';
	}

	function sanitize(input, sanitizeKeys) {
	  if (!isArray$2(sanitizeKeys) || (isArray$2(sanitizeKeys) && sanitizeKeys.length === 0))
	    return input;

	  var sanitizeRegExp = joinRegExp(sanitizeKeys);
	  var sanitizeMask = '********';
	  var safeInput;

	  try {
	    safeInput = JSON.parse(stringify_1(input));
	  } catch (o_O) {
	    return input;
	  }

	  function sanitizeWorker(workerInput) {
	    if (isArray$2(workerInput)) {
	      return workerInput.map(function(val) {
	        return sanitizeWorker(val);
	      });
	    }

	    if (isPlainObject(workerInput)) {
	      return Object.keys(workerInput).reduce(function(acc, k) {
	        if (sanitizeRegExp.test(k)) {
	          acc[k] = sanitizeMask;
	        } else {
	          acc[k] = sanitizeWorker(workerInput[k]);
	        }
	        return acc;
	      }, {});
	    }

	    return workerInput;
	  }

	  return sanitizeWorker(safeInput);
	}

	var utils = {
	  isObject: isObject$2,
	  isError: isError,
	  isErrorEvent: isErrorEvent,
	  isDOMError: isDOMError,
	  isDOMException: isDOMException,
	  isUndefined: isUndefined,
	  isFunction: isFunction$2,
	  isPlainObject: isPlainObject,
	  isString: isString$2,
	  isArray: isArray$2,
	  isEmptyObject: isEmptyObject,
	  supportsErrorEvent: supportsErrorEvent,
	  supportsDOMError: supportsDOMError,
	  supportsDOMException: supportsDOMException,
	  supportsFetch: supportsFetch,
	  supportsReferrerPolicy: supportsReferrerPolicy,
	  supportsPromiseRejectionEvent: supportsPromiseRejectionEvent,
	  wrappedCallback: wrappedCallback,
	  each: each,
	  objectMerge: objectMerge,
	  truncate: truncate,
	  objectFrozen: objectFrozen,
	  hasKey: hasKey,
	  joinRegExp: joinRegExp,
	  urlencode: urlencode,
	  uuid4: uuid4,
	  htmlTreeAsString: htmlTreeAsString,
	  htmlElementAsString: htmlElementAsString,
	  isSameException: isSameException,
	  isSameStacktrace: isSameStacktrace,
	  parseUrl: parseUrl$1,
	  fill: fill,
	  safeJoin: safeJoin,
	  serializeException: serializeException,
	  serializeKeysForMessage: serializeKeysForMessage,
	  sanitize: sanitize
	};

	/*
	 TraceKit - Cross brower stack traces

	 This was originally forked from github.com/occ/TraceKit, but has since been
	 largely re-written and is now maintained as part of raven-js.  Tests for
	 this are in test/vendor.

	 MIT license
	*/

	var TraceKit = {
	  collectWindowErrors: true,
	  debug: false
	};

	// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
	var _window$1 =
	  typeof window !== 'undefined'
	    ? window
	    : typeof commonjsGlobal$1 !== 'undefined'
	    ? commonjsGlobal$1
	    : typeof self !== 'undefined'
	    ? self
	    : {};

	// global reference to slice
	var _slice = [].slice;
	var UNKNOWN_FUNCTION = '?';

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
	var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

	function getLocationHref() {
	  if (typeof document === 'undefined' || document.location == null) return '';
	  return document.location.href;
	}

	function getLocationOrigin() {
	  if (typeof document === 'undefined' || document.location == null) return '';

	  // Oh dear IE10...
	  if (!document.location.origin) {
	    return (
	      document.location.protocol +
	      '//' +
	      document.location.hostname +
	      (document.location.port ? ':' + document.location.port : '')
	    );
	  }

	  return document.location.origin;
	}

	/**
	 * TraceKit.report: cross-browser processing of unhandled exceptions
	 *
	 * Syntax:
	 *   TraceKit.report.subscribe(function(stackInfo) { ... })
	 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
	 *   TraceKit.report(exception)
	 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
	 *
	 * Supports:
	 *   - Firefox: full stack trace with line numbers, plus column number
	 *              on top frame; column number is not guaranteed
	 *   - Opera:   full stack trace with line and column numbers
	 *   - Chrome:  full stack trace with line and column numbers
	 *   - Safari:  line and column number for the top frame only; some frames
	 *              may be missing, and column number is not guaranteed
	 *   - IE:      line and column number for the top frame only; some frames
	 *              may be missing, and column number is not guaranteed
	 *
	 * In theory, TraceKit should work on all of the following versions:
	 *   - IE5.5+ (only 8.0 tested)
	 *   - Firefox 0.9+ (only 3.5+ tested)
	 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
	 *     Exceptions Have Stacktrace to be enabled in opera:config)
	 *   - Safari 3+ (only 4+ tested)
	 *   - Chrome 1+ (only 5+ tested)
	 *   - Konqueror 3.5+ (untested)
	 *
	 * Requires TraceKit.computeStackTrace.
	 *
	 * Tries to catch all unhandled exceptions and report them to the
	 * subscribed handlers. Please note that TraceKit.report will rethrow the
	 * exception. This is REQUIRED in order to get a useful stack trace in IE.
	 * If the exception does not reach the top of the browser, you will only
	 * get a stack trace from the point where TraceKit.report was called.
	 *
	 * Handlers receive a stackInfo object as described in the
	 * TraceKit.computeStackTrace docs.
	 */
	TraceKit.report = (function reportModuleWrapper() {
	  var handlers = [],
	    lastArgs = null,
	    lastException = null,
	    lastExceptionStack = null;

	  /**
	   * Add a crash handler.
	   * @param {Function} handler
	   */
	  function subscribe(handler) {
	    installGlobalHandler();
	    handlers.push(handler);
	  }

	  /**
	   * Remove a crash handler.
	   * @param {Function} handler
	   */
	  function unsubscribe(handler) {
	    for (var i = handlers.length - 1; i >= 0; --i) {
	      if (handlers[i] === handler) {
	        handlers.splice(i, 1);
	      }
	    }
	  }

	  /**
	   * Remove all crash handlers.
	   */
	  function unsubscribeAll() {
	    uninstallGlobalHandler();
	    handlers = [];
	  }

	  /**
	   * Dispatch stack information to all handlers.
	   * @param {Object.<string, *>} stack
	   */
	  function notifyHandlers(stack, isWindowError) {
	    var exception = null;
	    if (isWindowError && !TraceKit.collectWindowErrors) {
	      return;
	    }
	    for (var i in handlers) {
	      if (handlers.hasOwnProperty(i)) {
	        try {
	          handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
	        } catch (inner) {
	          exception = inner;
	        }
	      }
	    }

	    if (exception) {
	      throw exception;
	    }
	  }

	  var _oldOnerrorHandler, _onErrorHandlerInstalled;

	  /**
	   * Ensures all global unhandled exceptions are recorded.
	   * Supported by Gecko and IE.
	   * @param {string} msg Error message.
	   * @param {string} url URL of script that generated the exception.
	   * @param {(number|string)} lineNo The line number at which the error
	   * occurred.
	   * @param {?(number|string)} colNo The column number at which the error
	   * occurred.
	   * @param {?Error} ex The actual Error object.
	   */
	  function traceKitWindowOnError(msg, url, lineNo, colNo, ex) {
	    var stack = null;
	    // If 'ex' is ErrorEvent, get real Error from inside
	    var exception = utils.isErrorEvent(ex) ? ex.error : ex;
	    // If 'msg' is ErrorEvent, get real message from inside
	    var message = utils.isErrorEvent(msg) ? msg.message : msg;

	    if (lastExceptionStack) {
	      TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(
	        lastExceptionStack,
	        url,
	        lineNo,
	        message
	      );
	      processLastException();
	    } else if (exception && utils.isError(exception)) {
	      // non-string `exception` arg; attempt to extract stack trace

	      // New chrome and blink send along a real error object
	      // Let's just report that like a normal error.
	      // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
	      stack = TraceKit.computeStackTrace(exception);
	      notifyHandlers(stack, true);
	    } else {
	      var location = {
	        url: url,
	        line: lineNo,
	        column: colNo
	      };

	      var name = undefined;
	      var groups;

	      if ({}.toString.call(message) === '[object String]') {
	        var groups = message.match(ERROR_TYPES_RE);
	        if (groups) {
	          name = groups[1];
	          message = groups[2];
	        }
	      }

	      location.func = UNKNOWN_FUNCTION;

	      stack = {
	        name: name,
	        message: message,
	        url: getLocationHref(),
	        stack: [location]
	      };
	      notifyHandlers(stack, true);
	    }

	    if (_oldOnerrorHandler) {
	      return _oldOnerrorHandler.apply(this, arguments);
	    }

	    return false;
	  }

	  function installGlobalHandler() {
	    if (_onErrorHandlerInstalled) {
	      return;
	    }
	    _oldOnerrorHandler = _window$1.onerror;
	    _window$1.onerror = traceKitWindowOnError;
	    _onErrorHandlerInstalled = true;
	  }

	  function uninstallGlobalHandler() {
	    if (!_onErrorHandlerInstalled) {
	      return;
	    }
	    _window$1.onerror = _oldOnerrorHandler;
	    _onErrorHandlerInstalled = false;
	    _oldOnerrorHandler = undefined;
	  }

	  function processLastException() {
	    var _lastExceptionStack = lastExceptionStack,
	      _lastArgs = lastArgs;
	    lastArgs = null;
	    lastExceptionStack = null;
	    lastException = null;
	    notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
	  }

	  /**
	   * Reports an unhandled Error to TraceKit.
	   * @param {Error} ex
	   * @param {?boolean} rethrow If false, do not re-throw the exception.
	   * Only used for window.onerror to not cause an infinite loop of
	   * rethrowing.
	   */
	  function report(ex, rethrow) {
	    var args = _slice.call(arguments, 1);
	    if (lastExceptionStack) {
	      if (lastException === ex) {
	        return; // already caught by an inner catch block, ignore
	      } else {
	        processLastException();
	      }
	    }

	    var stack = TraceKit.computeStackTrace(ex);
	    lastExceptionStack = stack;
	    lastException = ex;
	    lastArgs = args;

	    // If the stack trace is incomplete, wait for 2 seconds for
	    // slow slow IE to see if onerror occurs or not before reporting
	    // this exception; otherwise, we will end up with an incomplete
	    // stack trace
	    setTimeout(
	      function() {
	        if (lastException === ex) {
	          processLastException();
	        }
	      },
	      stack.incomplete ? 2000 : 0
	    );

	    if (rethrow !== false) {
	      throw ex; // re-throw to propagate to the top level (and cause window.onerror)
	    }
	  }

	  report.subscribe = subscribe;
	  report.unsubscribe = unsubscribe;
	  report.uninstall = unsubscribeAll;
	  return report;
	})();

	/**
	 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
	 *
	 * Syntax:
	 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
	 * Returns:
	 *   s.name              - exception name
	 *   s.message           - exception message
	 *   s.stack[i].url      - JavaScript or HTML file URL
	 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
	 *   s.stack[i].args     - arguments passed to the function, if known
	 *   s.stack[i].line     - line number, if known
	 *   s.stack[i].column   - column number, if known
	 *
	 * Supports:
	 *   - Firefox:  full stack trace with line numbers and unreliable column
	 *               number on top frame
	 *   - Opera 10: full stack trace with line and column numbers
	 *   - Opera 9-: full stack trace with line numbers
	 *   - Chrome:   full stack trace with line and column numbers
	 *   - Safari:   line and column number for the topmost stacktrace element
	 *               only
	 *   - IE:       no line numbers whatsoever
	 *
	 * Tries to guess names of anonymous functions by looking for assignments
	 * in the source code. In IE and Safari, we have to guess source file names
	 * by searching for function bodies inside all page scripts. This will not
	 * work for scripts that are loaded cross-domain.
	 * Here be dragons: some function names may be guessed incorrectly, and
	 * duplicate functions may be mismatched.
	 *
	 * TraceKit.computeStackTrace should only be used for tracing purposes.
	 * Logging of unhandled exceptions should be done with TraceKit.report,
	 * which builds on top of TraceKit.computeStackTrace and provides better
	 * IE support by utilizing the window.onerror event to retrieve information
	 * about the top of the stack.
	 *
	 * Note: In IE and Safari, no stack trace is recorded on the Error object,
	 * so computeStackTrace instead walks its *own* chain of callers.
	 * This means that:
	 *  * in Safari, some methods may be missing from the stack trace;
	 *  * in IE, the topmost function in the stack trace will always be the
	 *    caller of computeStackTrace.
	 *
	 * This is okay for tracing (because you are likely to be calling
	 * computeStackTrace from the function you want to be the topmost element
	 * of the stack trace anyway), but not okay for logging unhandled
	 * exceptions (because your catch block will likely be far away from the
	 * inner function that actually caused the exception).
	 *
	 */
	TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
	  // Contents of Exception in various browsers.
	  //
	  // SAFARI:
	  // ex.message = Can't find variable: qq
	  // ex.line = 59
	  // ex.sourceId = 580238192
	  // ex.sourceURL = http://...
	  // ex.expressionBeginOffset = 96
	  // ex.expressionCaretOffset = 98
	  // ex.expressionEndOffset = 98
	  // ex.name = ReferenceError
	  //
	  // FIREFOX:
	  // ex.message = qq is not defined
	  // ex.fileName = http://...
	  // ex.lineNumber = 59
	  // ex.columnNumber = 69
	  // ex.stack = ...stack trace... (see the example below)
	  // ex.name = ReferenceError
	  //
	  // CHROME:
	  // ex.message = qq is not defined
	  // ex.name = ReferenceError
	  // ex.type = not_defined
	  // ex.arguments = ['aa']
	  // ex.stack = ...stack trace...
	  //
	  // INTERNET EXPLORER:
	  // ex.message = ...
	  // ex.name = ReferenceError
	  //
	  // OPERA:
	  // ex.message = ...message... (see the example below)
	  // ex.name = ReferenceError
	  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
	  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

	  /**
	   * Computes stack trace information from the stack property.
	   * Chrome and Gecko use this property.
	   * @param {Error} ex
	   * @return {?Object.<string, *>} Stack trace information.
	   */
	  function computeStackTraceFromStackProp(ex) {
	    if (typeof ex.stack === 'undefined' || !ex.stack) return;

	    var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
	    var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
	    // NOTE: blob urls are now supposed to always have an origin, therefore it's format
	    // which is `blob:http://url/path/with-some-uuid`, is matched by `blob.*?:\/` as well
	    var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
	    // Used to additionally parse URL/line/column from eval frames
	    var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
	    var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
	    var lines = ex.stack.split('\n');
	    var stack = [];
	    var submatch;
	    var parts;
	    var element;
	    var reference = /^(.*) is undefined$/.exec(ex.message);

	    for (var i = 0, j = lines.length; i < j; ++i) {
	      if ((parts = chrome.exec(lines[i]))) {
	        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
	        var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
	        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
	          // throw out eval line/column and use top-most line/column number
	          parts[2] = submatch[1]; // url
	          parts[3] = submatch[2]; // line
	          parts[4] = submatch[3]; // column
	        }
	        element = {
	          url: !isNative ? parts[2] : null,
	          func: parts[1] || UNKNOWN_FUNCTION,
	          args: isNative ? [parts[2]] : [],
	          line: parts[3] ? +parts[3] : null,
	          column: parts[4] ? +parts[4] : null
	        };
	      } else if ((parts = winjs.exec(lines[i]))) {
	        element = {
	          url: parts[2],
	          func: parts[1] || UNKNOWN_FUNCTION,
	          args: [],
	          line: +parts[3],
	          column: parts[4] ? +parts[4] : null
	        };
	      } else if ((parts = gecko.exec(lines[i]))) {
	        var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
	        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
	          // throw out eval line/column and use top-most line number
	          parts[3] = submatch[1];
	          parts[4] = submatch[2];
	          parts[5] = null; // no column when eval
	        } else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
	          // FireFox uses this awesome columnNumber property for its top frame
	          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
	          // so adding 1
	          // NOTE: this hack doesn't work if top-most frame is eval
	          stack[0].column = ex.columnNumber + 1;
	        }
	        element = {
	          url: parts[3],
	          func: parts[1] || UNKNOWN_FUNCTION,
	          args: parts[2] ? parts[2].split(',') : [],
	          line: parts[4] ? +parts[4] : null,
	          column: parts[5] ? +parts[5] : null
	        };
	      } else {
	        continue;
	      }

	      if (!element.func && element.line) {
	        element.func = UNKNOWN_FUNCTION;
	      }

	      if (element.url && element.url.substr(0, 5) === 'blob:') {
	        // Special case for handling JavaScript loaded into a blob.
	        // We use a synchronous AJAX request here as a blob is already in
	        // memory - it's not making a network request.  This will generate a warning
	        // in the browser console, but there has already been an error so that's not
	        // that much of an issue.
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', element.url, false);
	        xhr.send(null);

	        // If we failed to download the source, skip this patch
	        if (xhr.status === 200) {
	          var source = xhr.responseText || '';

	          // We trim the source down to the last 300 characters as sourceMappingURL is always at the end of the file.
	          // Why 300? To be in line with: https://github.com/getsentry/sentry/blob/4af29e8f2350e20c28a6933354e4f42437b4ba42/src/sentry/lang/javascript/processor.py#L164-L175
	          source = source.slice(-300);

	          // Now we dig out the source map URL
	          var sourceMaps = source.match(/\/\/# sourceMappingURL=(.*)$/);

	          // If we don't find a source map comment or we find more than one, continue on to the next element.
	          if (sourceMaps) {
	            var sourceMapAddress = sourceMaps[1];

	            // Now we check to see if it's a relative URL.
	            // If it is, convert it to an absolute one.
	            if (sourceMapAddress.charAt(0) === '~') {
	              sourceMapAddress = getLocationOrigin() + sourceMapAddress.slice(1);
	            }

	            // Now we strip the '.map' off of the end of the URL and update the
	            // element so that Sentry can match the map to the blob.
	            element.url = sourceMapAddress.slice(0, -4);
	          }
	        }
	      }

	      stack.push(element);
	    }

	    if (!stack.length) {
	      return null;
	    }

	    return {
	      name: ex.name,
	      message: ex.message,
	      url: getLocationHref(),
	      stack: stack
	    };
	  }

	  /**
	   * Adds information about the first frame to incomplete stack traces.
	   * Safari and IE require this to get complete data on the first frame.
	   * @param {Object.<string, *>} stackInfo Stack trace information from
	   * one of the compute* methods.
	   * @param {string} url The URL of the script that caused an error.
	   * @param {(number|string)} lineNo The line number of the script that
	   * caused an error.
	   * @param {string=} message The error generated by the browser, which
	   * hopefully contains the name of the object that caused the error.
	   * @return {boolean} Whether or not the stack information was
	   * augmented.
	   */
	  function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
	    var initial = {
	      url: url,
	      line: lineNo
	    };

	    if (initial.url && initial.line) {
	      stackInfo.incomplete = false;

	      if (!initial.func) {
	        initial.func = UNKNOWN_FUNCTION;
	      }

	      if (stackInfo.stack.length > 0) {
	        if (stackInfo.stack[0].url === initial.url) {
	          if (stackInfo.stack[0].line === initial.line) {
	            return false; // already in stack trace
	          } else if (
	            !stackInfo.stack[0].line &&
	            stackInfo.stack[0].func === initial.func
	          ) {
	            stackInfo.stack[0].line = initial.line;
	            return false;
	          }
	        }
	      }

	      stackInfo.stack.unshift(initial);
	      stackInfo.partial = true;
	      return true;
	    } else {
	      stackInfo.incomplete = true;
	    }

	    return false;
	  }

	  /**
	   * Computes stack trace information by walking the arguments.caller
	   * chain at the time the exception occurred. This will cause earlier
	   * frames to be missed but is the only way to get any stack trace in
	   * Safari and IE. The top frame is restored by
	   * {@link augmentStackTraceWithInitialElement}.
	   * @param {Error} ex
	   * @return {?Object.<string, *>} Stack trace information.
	   */
	  function computeStackTraceByWalkingCallerChain(ex, depth) {
	    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
	      stack = [],
	      funcs = {},
	      recursion = false,
	      parts,
	      item;

	    for (
	      var curr = computeStackTraceByWalkingCallerChain.caller;
	      curr && !recursion;
	      curr = curr.caller
	    ) {
	      if (curr === computeStackTrace || curr === TraceKit.report) {
	        // console.log('skipping internal function');
	        continue;
	      }

	      item = {
	        url: null,
	        func: UNKNOWN_FUNCTION,
	        line: null,
	        column: null
	      };

	      if (curr.name) {
	        item.func = curr.name;
	      } else if ((parts = functionName.exec(curr.toString()))) {
	        item.func = parts[1];
	      }

	      if (typeof item.func === 'undefined') {
	        try {
	          item.func = parts.input.substring(0, parts.input.indexOf('{'));
	        } catch (e) {}
	      }

	      if (funcs['' + curr]) {
	        recursion = true;
	      } else {
	        funcs['' + curr] = true;
	      }

	      stack.push(item);
	    }

	    if (depth) {
	      // console.log('depth is ' + depth);
	      // console.log('stack is ' + stack.length);
	      stack.splice(0, depth);
	    }

	    var result = {
	      name: ex.name,
	      message: ex.message,
	      url: getLocationHref(),
	      stack: stack
	    };
	    augmentStackTraceWithInitialElement(
	      result,
	      ex.sourceURL || ex.fileName,
	      ex.line || ex.lineNumber,
	      ex.message || ex.description
	    );
	    return result;
	  }

	  /**
	   * Computes a stack trace for an exception.
	   * @param {Error} ex
	   * @param {(string|number)=} depth
	   */
	  function computeStackTrace(ex, depth) {
	    var stack = null;
	    depth = depth == null ? 0 : +depth;

	    try {
	      stack = computeStackTraceFromStackProp(ex);
	      if (stack) {
	        return stack;
	      }
	    } catch (e) {
	      if (TraceKit.debug) {
	        throw e;
	      }
	    }

	    try {
	      stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
	      if (stack) {
	        return stack;
	      }
	    } catch (e) {
	      if (TraceKit.debug) {
	        throw e;
	      }
	    }
	    return {
	      name: ex.name,
	      message: ex.message,
	      url: getLocationHref()
	    };
	  }

	  computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
	  computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;

	  return computeStackTrace;
	})();

	var tracekit = TraceKit;

	/*
	 * JavaScript MD5
	 * https://github.com/blueimp/JavaScript-MD5
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * https://opensource.org/licenses/MIT
	 *
	 * Based on
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/*
	* Add integers, wrapping at 2^32. This uses 16-bit operations internally
	* to work around bugs in some JS interpreters.
	*/
	function safeAdd(x, y) {
	  var lsw = (x & 0xffff) + (y & 0xffff);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xffff);
	}

	/*
	* Bitwise rotate a 32-bit number to the left.
	*/
	function bitRotateLeft(num, cnt) {
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	/*
	* These functions implement the four basic operations the algorithm uses.
	*/
	function md5cmn(q, a, b, x, s, t) {
	  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
	}
	function md5ff(a, b, c, d, x, s, t) {
	  return md5cmn((b & c) | (~b & d), a, b, x, s, t);
	}
	function md5gg(a, b, c, d, x, s, t) {
	  return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
	}
	function md5hh(a, b, c, d, x, s, t) {
	  return md5cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5ii(a, b, c, d, x, s, t) {
	  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
	}

	/*
	* Calculate the MD5 of an array of little-endian words, and a bit length.
	*/
	function binlMD5(x, len) {
	  /* append padding */
	  x[len >> 5] |= 0x80 << (len % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var i;
	  var olda;
	  var oldb;
	  var oldc;
	  var oldd;
	  var a = 1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d = 271733878;

	  for (i = 0; i < x.length; i += 16) {
	    olda = a;
	    oldb = b;
	    oldc = c;
	    oldd = d;

	    a = md5ff(a, b, c, d, x[i], 7, -680876936);
	    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
	    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
	    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
	    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
	    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
	    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
	    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
	    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
	    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
	    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
	    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
	    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
	    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
	    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
	    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

	    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
	    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
	    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
	    b = md5gg(b, c, d, a, x[i], 20, -373897302);
	    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
	    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
	    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
	    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
	    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
	    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
	    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
	    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
	    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
	    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
	    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
	    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

	    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
	    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
	    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
	    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
	    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
	    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
	    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
	    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
	    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
	    d = md5hh(d, a, b, c, x[i], 11, -358537222);
	    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
	    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
	    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
	    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
	    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
	    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

	    a = md5ii(a, b, c, d, x[i], 6, -198630844);
	    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
	    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
	    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
	    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
	    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
	    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
	    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
	    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
	    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
	    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
	    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
	    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
	    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
	    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
	    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

	    a = safeAdd(a, olda);
	    b = safeAdd(b, oldb);
	    c = safeAdd(c, oldc);
	    d = safeAdd(d, oldd);
	  }
	  return [a, b, c, d];
	}

	/*
	* Convert an array of little-endian words to a string
	*/
	function binl2rstr(input) {
	  var i;
	  var output = '';
	  var length32 = input.length * 32;
	  for (i = 0; i < length32; i += 8) {
	    output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff);
	  }
	  return output;
	}

	/*
	* Convert a raw string to an array of little-endian words
	* Characters >255 have their high-byte silently ignored.
	*/
	function rstr2binl(input) {
	  var i;
	  var output = [];
	  output[(input.length >> 2) - 1] = undefined;
	  for (i = 0; i < output.length; i += 1) {
	    output[i] = 0;
	  }
	  var length8 = input.length * 8;
	  for (i = 0; i < length8; i += 8) {
	    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);
	  }
	  return output;
	}

	/*
	* Calculate the MD5 of a raw string
	*/
	function rstrMD5(s) {
	  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
	}

	/*
	* Calculate the HMAC-MD5, of a key and some data (raw strings)
	*/
	function rstrHMACMD5(key, data) {
	  var i;
	  var bkey = rstr2binl(key);
	  var ipad = [];
	  var opad = [];
	  var hash;
	  ipad[15] = opad[15] = undefined;
	  if (bkey.length > 16) {
	    bkey = binlMD5(bkey, key.length * 8);
	  }
	  for (i = 0; i < 16; i += 1) {
	    ipad[i] = bkey[i] ^ 0x36363636;
	    opad[i] = bkey[i] ^ 0x5c5c5c5c;
	  }
	  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
	  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
	}

	/*
	* Convert a raw string to a hex string
	*/
	function rstr2hex(input) {
	  var hexTab = '0123456789abcdef';
	  var output = '';
	  var x;
	  var i;
	  for (i = 0; i < input.length; i += 1) {
	    x = input.charCodeAt(i);
	    output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
	  }
	  return output;
	}

	/*
	* Encode a string as utf-8
	*/
	function str2rstrUTF8(input) {
	  return unescape(encodeURIComponent(input));
	}

	/*
	* Take string arguments and return either raw or hex encoded strings
	*/
	function rawMD5(s) {
	  return rstrMD5(str2rstrUTF8(s));
	}
	function hexMD5(s) {
	  return rstr2hex(rawMD5(s));
	}
	function rawHMACMD5(k, d) {
	  return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
	}
	function hexHMACMD5(k, d) {
	  return rstr2hex(rawHMACMD5(k, d));
	}

	function md5(string, key, raw) {
	  if (!key) {
	    if (!raw) {
	      return hexMD5(string);
	    }
	    return rawMD5(string);
	  }
	  if (!raw) {
	    return hexHMACMD5(key, string);
	  }
	  return rawHMACMD5(key, string);
	}

	var md5_1 = md5;

	function RavenConfigError(message) {
	  this.name = 'RavenConfigError';
	  this.message = message;
	}
	RavenConfigError.prototype = new Error();
	RavenConfigError.prototype.constructor = RavenConfigError;

	var configError = RavenConfigError;

	var wrapMethod = function(console, level, callback) {
	  var originalConsoleLevel = console[level];
	  var originalConsole = console;

	  if (!(level in console)) {
	    return;
	  }

	  var sentryLevel = level === 'warn' ? 'warning' : level;

	  console[level] = function() {
	    var args = [].slice.call(arguments);

	    var msg = utils.safeJoin(args, ' ');
	    var data = {level: sentryLevel, logger: 'console', extra: {arguments: args}};

	    if (level === 'assert') {
	      if (args[0] === false) {
	        // Default browsers message
	        msg =
	          'Assertion failed: ' + (utils.safeJoin(args.slice(1), ' ') || 'console.assert');
	        data.extra.arguments = args.slice(1);
	        callback && callback(msg, data);
	      }
	    } else {
	      callback && callback(msg, data);
	    }

	    // this fails for some browsers. :(
	    if (originalConsoleLevel) {
	      // IE9 doesn't allow calling apply on console functions directly
	      // See: https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function#answer-5473193
	      Function.prototype.apply.call(originalConsoleLevel, originalConsole, args);
	    }
	  };
	};

	var console$1 = {
	  wrapMethod: wrapMethod
	};

	/*global XDomainRequest:false */







	var isErrorEvent$1 = utils.isErrorEvent;
	var isDOMError$1 = utils.isDOMError;
	var isDOMException$1 = utils.isDOMException;
	var isError$1 = utils.isError;
	var isObject$3 = utils.isObject;
	var isPlainObject$1 = utils.isPlainObject;
	var isUndefined$1 = utils.isUndefined;
	var isFunction$3 = utils.isFunction;
	var isString$3 = utils.isString;
	var isArray$3 = utils.isArray;
	var isEmptyObject$1 = utils.isEmptyObject;
	var each$1 = utils.each;
	var objectMerge$1 = utils.objectMerge;
	var truncate$1 = utils.truncate;
	var objectFrozen$1 = utils.objectFrozen;
	var hasKey$1 = utils.hasKey;
	var joinRegExp$1 = utils.joinRegExp;
	var urlencode$1 = utils.urlencode;
	var uuid4$1 = utils.uuid4;
	var htmlTreeAsString$1 = utils.htmlTreeAsString;
	var isSameException$1 = utils.isSameException;
	var isSameStacktrace$1 = utils.isSameStacktrace;
	var parseUrl$2 = utils.parseUrl;
	var fill$1 = utils.fill;
	var supportsFetch$1 = utils.supportsFetch;
	var supportsReferrerPolicy$1 = utils.supportsReferrerPolicy;
	var serializeKeysForMessage$1 = utils.serializeKeysForMessage;
	var serializeException$1 = utils.serializeException;
	var sanitize$1 = utils.sanitize;

	var wrapConsoleMethod = console$1.wrapMethod;

	var dsnKeys = 'source protocol user pass host port path'.split(' '),
	  dsnPattern = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

	function now() {
	  return +new Date();
	}

	// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
	var _window$2 =
	  typeof window !== 'undefined'
	    ? window
	    : typeof commonjsGlobal$1 !== 'undefined' ? commonjsGlobal$1 : typeof self !== 'undefined' ? self : {};
	var _document = _window$2.document;
	var _navigator = _window$2.navigator;

	function keepOriginalCallback(original, callback) {
	  return isFunction$3(callback)
	    ? function(data) {
	        return callback(data, original);
	      }
	    : callback;
	}

	// First, check for JSON support
	// If there is no JSON, we no-op the core features of Raven
	// since JSON is required to encode the payload
	function Raven() {
	  this._hasJSON = !!(typeof JSON === 'object' && JSON.stringify);
	  // Raven can run in contexts where there's no document (react-native)
	  this._hasDocument = !isUndefined$1(_document);
	  this._hasNavigator = !isUndefined$1(_navigator);
	  this._lastCapturedException = null;
	  this._lastData = null;
	  this._lastEventId = null;
	  this._globalServer = null;
	  this._globalKey = null;
	  this._globalProject = null;
	  this._globalContext = {};
	  this._globalOptions = {
	    // SENTRY_RELEASE can be injected by https://github.com/getsentry/sentry-webpack-plugin
	    release: _window$2.SENTRY_RELEASE && _window$2.SENTRY_RELEASE.id,
	    logger: 'javascript',
	    ignoreErrors: [],
	    ignoreUrls: [],
	    whitelistUrls: [],
	    includePaths: [],
	    headers: null,
	    collectWindowErrors: true,
	    captureUnhandledRejections: true,
	    maxMessageLength: 0,
	    // By default, truncates URL values to 250 chars
	    maxUrlLength: 250,
	    stackTraceLimit: 50,
	    autoBreadcrumbs: true,
	    instrument: true,
	    sampleRate: 1,
	    sanitizeKeys: []
	  };
	  this._fetchDefaults = {
	    method: 'POST',
	    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
	    // https://caniuse.com/#feat=referrer-policy
	    // It doesn't. And it throw exception instead of ignoring this parameter...
	    // REF: https://github.com/getsentry/raven-js/issues/1233
	    referrerPolicy: supportsReferrerPolicy$1() ? 'origin' : ''
	  };
	  this._ignoreOnError = 0;
	  this._isRavenInstalled = false;
	  this._originalErrorStackTraceLimit = Error.stackTraceLimit;
	  // capture references to window.console *and* all its methods first
	  // before the console plugin has a chance to monkey patch
	  this._originalConsole = _window$2.console || {};
	  this._originalConsoleMethods = {};
	  this._plugins = [];
	  this._startTime = now();
	  this._wrappedBuiltIns = [];
	  this._breadcrumbs = [];
	  this._lastCapturedEvent = null;
	  this._keypressTimeout;
	  this._location = _window$2.location;
	  this._lastHref = this._location && this._location.href;
	  this._resetBackoff();

	  // eslint-disable-next-line guard-for-in
	  for (var method in this._originalConsole) {
	    this._originalConsoleMethods[method] = this._originalConsole[method];
	  }
	}

	/*
	 * The core Raven singleton
	 *
	 * @this {Raven}
	 */

	Raven.prototype = {
	  // Hardcode version string so that raven source can be loaded directly via
	  // webpack (using a build step causes webpack #1617). Grunt verifies that
	  // this value matches package.json during build.
	  //   See: https://github.com/getsentry/raven-js/issues/465
	  VERSION: '3.27.2',

	  debug: false,

	  TraceKit: tracekit, // alias to TraceKit

	  /*
	     * Configure Raven with a DSN and extra options
	     *
	     * @param {string} dsn The public Sentry DSN
	     * @param {object} options Set of global options [optional]
	     * @return {Raven}
	     */
	  config: function(dsn, options) {
	    var self = this;

	    if (self._globalServer) {
	      this._logDebug('error', 'Error: Raven has already been configured');
	      return self;
	    }
	    if (!dsn) return self;

	    var globalOptions = self._globalOptions;

	    // merge in options
	    if (options) {
	      each$1(options, function(key, value) {
	        // tags and extra are special and need to be put into context
	        if (key === 'tags' || key === 'extra' || key === 'user') {
	          self._globalContext[key] = value;
	        } else {
	          globalOptions[key] = value;
	        }
	      });
	    }

	    self.setDSN(dsn);

	    // "Script error." is hard coded into browsers for errors that it can't read.
	    // this is the result of a script being pulled in from an external domain and CORS.
	    globalOptions.ignoreErrors.push(/^Script error\.?$/);
	    globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);

	    // join regexp rules into one big rule
	    globalOptions.ignoreErrors = joinRegExp$1(globalOptions.ignoreErrors);
	    globalOptions.ignoreUrls = globalOptions.ignoreUrls.length
	      ? joinRegExp$1(globalOptions.ignoreUrls)
	      : false;
	    globalOptions.whitelistUrls = globalOptions.whitelistUrls.length
	      ? joinRegExp$1(globalOptions.whitelistUrls)
	      : false;
	    globalOptions.includePaths = joinRegExp$1(globalOptions.includePaths);
	    globalOptions.maxBreadcrumbs = Math.max(
	      0,
	      Math.min(globalOptions.maxBreadcrumbs || 100, 100)
	    ); // default and hard limit is 100

	    var autoBreadcrumbDefaults = {
	      xhr: true,
	      console: true,
	      dom: true,
	      location: true,
	      sentry: true
	    };

	    var autoBreadcrumbs = globalOptions.autoBreadcrumbs;
	    if ({}.toString.call(autoBreadcrumbs) === '[object Object]') {
	      autoBreadcrumbs = objectMerge$1(autoBreadcrumbDefaults, autoBreadcrumbs);
	    } else if (autoBreadcrumbs !== false) {
	      autoBreadcrumbs = autoBreadcrumbDefaults;
	    }
	    globalOptions.autoBreadcrumbs = autoBreadcrumbs;

	    var instrumentDefaults = {
	      tryCatch: true
	    };

	    var instrument = globalOptions.instrument;
	    if ({}.toString.call(instrument) === '[object Object]') {
	      instrument = objectMerge$1(instrumentDefaults, instrument);
	    } else if (instrument !== false) {
	      instrument = instrumentDefaults;
	    }
	    globalOptions.instrument = instrument;

	    tracekit.collectWindowErrors = !!globalOptions.collectWindowErrors;

	    // return for chaining
	    return self;
	  },

	  /*
	     * Installs a global window.onerror error handler
	     * to capture and report uncaught exceptions.
	     * At this point, install() is required to be called due
	     * to the way TraceKit is set up.
	     *
	     * @return {Raven}
	     */
	  install: function() {
	    var self = this;
	    if (self.isSetup() && !self._isRavenInstalled) {
	      tracekit.report.subscribe(function() {
	        self._handleOnErrorStackInfo.apply(self, arguments);
	      });

	      if (self._globalOptions.captureUnhandledRejections) {
	        self._attachPromiseRejectionHandler();
	      }

	      self._patchFunctionToString();

	      if (self._globalOptions.instrument && self._globalOptions.instrument.tryCatch) {
	        self._instrumentTryCatch();
	      }

	      if (self._globalOptions.autoBreadcrumbs) self._instrumentBreadcrumbs();

	      // Install all of the plugins
	      self._drainPlugins();

	      self._isRavenInstalled = true;
	    }

	    Error.stackTraceLimit = self._globalOptions.stackTraceLimit;
	    return this;
	  },

	  /*
	     * Set the DSN (can be called multiple time unlike config)
	     *
	     * @param {string} dsn The public Sentry DSN
	     */
	  setDSN: function(dsn) {
	    var self = this,
	      uri = self._parseDSN(dsn),
	      lastSlash = uri.path.lastIndexOf('/'),
	      path = uri.path.substr(1, lastSlash);

	    self._dsn = dsn;
	    self._globalKey = uri.user;
	    self._globalSecret = uri.pass && uri.pass.substr(1);
	    self._globalProject = uri.path.substr(lastSlash + 1);

	    self._globalServer = self._getGlobalServer(uri);

	    self._globalEndpoint =
	      self._globalServer + '/' + path + 'api/' + self._globalProject + '/store/';

	    // Reset backoff state since we may be pointing at a
	    // new project/server
	    this._resetBackoff();
	  },

	  /*
	     * Wrap code within a context so Raven can capture errors
	     * reliably across domains that is executed immediately.
	     *
	     * @param {object} options A specific set of options for this context [optional]
	     * @param {function} func The callback to be immediately executed within the context
	     * @param {array} args An array of arguments to be called with the callback [optional]
	     */
	  context: function(options, func, args) {
	    if (isFunction$3(options)) {
	      args = func || [];
	      func = options;
	      options = {};
	    }

	    return this.wrap(options, func).apply(this, args);
	  },

	  /*
	     * Wrap code within a context and returns back a new function to be executed
	     *
	     * @param {object} options A specific set of options for this context [optional]
	     * @param {function} func The function to be wrapped in a new context
	     * @param {function} _before A function to call before the try/catch wrapper [optional, private]
	     * @return {function} The newly wrapped functions with a context
	     */
	  wrap: function(options, func, _before) {
	    var self = this;
	    // 1 argument has been passed, and it's not a function
	    // so just return it
	    if (isUndefined$1(func) && !isFunction$3(options)) {
	      return options;
	    }

	    // options is optional
	    if (isFunction$3(options)) {
	      func = options;
	      options = undefined;
	    }

	    // At this point, we've passed along 2 arguments, and the second one
	    // is not a function either, so we'll just return the second argument.
	    if (!isFunction$3(func)) {
	      return func;
	    }

	    // We don't wanna wrap it twice!
	    try {
	      if (func.__raven__) {
	        return func;
	      }

	      // If this has already been wrapped in the past, return that
	      if (func.__raven_wrapper__) {
	        return func.__raven_wrapper__;
	      }
	    } catch (e) {
	      // Just accessing custom props in some Selenium environments
	      // can cause a "Permission denied" exception (see raven-js#495).
	      // Bail on wrapping and return the function as-is (defers to window.onerror).
	      return func;
	    }

	    function wrapped() {
	      var args = [],
	        i = arguments.length,
	        deep = !options || (options && options.deep !== false);

	      if (_before && isFunction$3(_before)) {
	        _before.apply(this, arguments);
	      }

	      // Recursively wrap all of a function's arguments that are
	      // functions themselves.
	      while (i--) args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];

	      try {
	        // Attempt to invoke user-land function
	        // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
	        //       means Raven caught an error invoking your application code. This is
	        //       expected behavior and NOT indicative of a bug with Raven.js.
	        return func.apply(this, args);
	      } catch (e) {
	        self._ignoreNextOnError();
	        self.captureException(e, options);
	        throw e;
	      }
	    }

	    // copy over properties of the old function
	    for (var property in func) {
	      if (hasKey$1(func, property)) {
	        wrapped[property] = func[property];
	      }
	    }
	    wrapped.prototype = func.prototype;

	    func.__raven_wrapper__ = wrapped;
	    // Signal that this function has been wrapped/filled already
	    // for both debugging and to prevent it to being wrapped/filled twice
	    wrapped.__raven__ = true;
	    wrapped.__orig__ = func;

	    return wrapped;
	  },

	  /**
	   * Uninstalls the global error handler.
	   *
	   * @return {Raven}
	   */
	  uninstall: function() {
	    tracekit.report.uninstall();

	    this._detachPromiseRejectionHandler();
	    this._unpatchFunctionToString();
	    this._restoreBuiltIns();
	    this._restoreConsole();

	    Error.stackTraceLimit = this._originalErrorStackTraceLimit;
	    this._isRavenInstalled = false;

	    return this;
	  },

	  /**
	   * Callback used for `unhandledrejection` event
	   *
	   * @param {PromiseRejectionEvent} event An object containing
	   *   promise: the Promise that was rejected
	   *   reason: the value with which the Promise was rejected
	   * @return void
	   */
	  _promiseRejectionHandler: function(event) {
	    this._logDebug('debug', 'Raven caught unhandled promise rejection:', event);
	    this.captureException(event.reason, {
	      mechanism: {
	        type: 'onunhandledrejection',
	        handled: false
	      }
	    });
	  },

	  /**
	   * Installs the global promise rejection handler.
	   *
	   * @return {raven}
	   */
	  _attachPromiseRejectionHandler: function() {
	    this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this);
	    _window$2.addEventListener &&
	      _window$2.addEventListener('unhandledrejection', this._promiseRejectionHandler);
	    return this;
	  },

	  /**
	   * Uninstalls the global promise rejection handler.
	   *
	   * @return {raven}
	   */
	  _detachPromiseRejectionHandler: function() {
	    _window$2.removeEventListener &&
	      _window$2.removeEventListener('unhandledrejection', this._promiseRejectionHandler);
	    return this;
	  },

	  /**
	   * Manually capture an exception and send it over to Sentry
	   *
	   * @param {error} ex An exception to be logged
	   * @param {object} options A specific set of options for this error [optional]
	   * @return {Raven}
	   */
	  captureException: function(ex, options) {
	    options = objectMerge$1({trimHeadFrames: 0}, options ? options : {});

	    if (isErrorEvent$1(ex) && ex.error) {
	      // If it is an ErrorEvent with `error` property, extract it to get actual Error
	      ex = ex.error;
	    } else if (isDOMError$1(ex) || isDOMException$1(ex)) {
	      // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
	      // then we just extract the name and message, as they don't provide anything else
	      // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
	      // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
	      var name = ex.name || (isDOMError$1(ex) ? 'DOMError' : 'DOMException');
	      var message = ex.message ? name + ': ' + ex.message : name;

	      return this.captureMessage(
	        message,
	        objectMerge$1(options, {
	          // neither DOMError or DOMException provide stack trace and we most likely wont get it this way as well
	          // but it's barely any overhead so we may at least try
	          stacktrace: true,
	          trimHeadFrames: options.trimHeadFrames + 1
	        })
	      );
	    } else if (isError$1(ex)) {
	      // we have a real Error object
	      ex = ex;
	    } else if (isPlainObject$1(ex)) {
	      // If it is plain Object, serialize it manually and extract options
	      // This will allow us to group events based on top-level keys
	      // which is much better than creating new group when any key/value change
	      options = this._getCaptureExceptionOptionsFromPlainObject(options, ex);
	      ex = new Error(options.message);
	    } else {
	      // If none of previous checks were valid, then it means that
	      // it's not a DOMError/DOMException
	      // it's not a plain Object
	      // it's not a valid ErrorEvent (one with an error property)
	      // it's not an Error
	      // So bail out and capture it as a simple message:
	      return this.captureMessage(
	        ex,
	        objectMerge$1(options, {
	          stacktrace: true, // if we fall back to captureMessage, default to attempting a new trace
	          trimHeadFrames: options.trimHeadFrames + 1
	        })
	      );
	    }

	    // Store the raw exception object for potential debugging and introspection
	    this._lastCapturedException = ex;

	    // TraceKit.report will re-raise any exception passed to it,
	    // which means you have to wrap it in try/catch. Instead, we
	    // can wrap it here and only re-raise if TraceKit.report
	    // raises an exception different from the one we asked to
	    // report on.
	    try {
	      var stack = tracekit.computeStackTrace(ex);
	      this._handleStackInfo(stack, options);
	    } catch (ex1) {
	      if (ex !== ex1) {
	        throw ex1;
	      }
	    }

	    return this;
	  },

	  _getCaptureExceptionOptionsFromPlainObject: function(currentOptions, ex) {
	    var exKeys = Object.keys(ex).sort();
	    var options = objectMerge$1(currentOptions, {
	      message:
	        'Non-Error exception captured with keys: ' + serializeKeysForMessage$1(exKeys),
	      fingerprint: [md5_1(exKeys)],
	      extra: currentOptions.extra || {}
	    });
	    options.extra.__serialized__ = serializeException$1(ex);

	    return options;
	  },

	  /*
	     * Manually send a message to Sentry
	     *
	     * @param {string} msg A plain message to be captured in Sentry
	     * @param {object} options A specific set of options for this message [optional]
	     * @return {Raven}
	     */
	  captureMessage: function(msg, options) {
	    // config() automagically converts ignoreErrors from a list to a RegExp so we need to test for an
	    // early call; we'll error on the side of logging anything called before configuration since it's
	    // probably something you should see:
	    if (
	      !!this._globalOptions.ignoreErrors.test &&
	      this._globalOptions.ignoreErrors.test(msg)
	    ) {
	      return;
	    }

	    options = options || {};
	    msg = msg + ''; // Make sure it's actually a string

	    var data = objectMerge$1(
	      {
	        message: msg
	      },
	      options
	    );

	    var ex;
	    // Generate a "synthetic" stack trace from this point.
	    // NOTE: If you are a Sentry user, and you are seeing this stack frame, it is NOT indicative
	    //       of a bug with Raven.js. Sentry generates synthetic traces either by configuration,
	    //       or if it catches a thrown object without a "stack" property.
	    try {
	      throw new Error(msg);
	    } catch (ex1) {
	      ex = ex1;
	    }

	    // null exception name so `Error` isn't prefixed to msg
	    ex.name = null;
	    var stack = tracekit.computeStackTrace(ex);

	    // stack[0] is `throw new Error(msg)` call itself, we are interested in the frame that was just before that, stack[1]
	    var initialCall = isArray$3(stack.stack) && stack.stack[1];

	    // if stack[1] is `Raven.captureException`, it means that someone passed a string to it and we redirected that call
	    // to be handled by `captureMessage`, thus `initialCall` is the 3rd one, not 2nd
	    // initialCall => captureException(string) => captureMessage(string)
	    if (initialCall && initialCall.func === 'Raven.captureException') {
	      initialCall = stack.stack[2];
	    }

	    var fileurl = (initialCall && initialCall.url) || '';

	    if (
	      !!this._globalOptions.ignoreUrls.test &&
	      this._globalOptions.ignoreUrls.test(fileurl)
	    ) {
	      return;
	    }

	    if (
	      !!this._globalOptions.whitelistUrls.test &&
	      !this._globalOptions.whitelistUrls.test(fileurl)
	    ) {
	      return;
	    }

	    // Always attempt to get stacktrace if message is empty.
	    // It's the only way to provide any helpful information to the user.
	    if (this._globalOptions.stacktrace || options.stacktrace || data.message === '') {
	      // fingerprint on msg, not stack trace (legacy behavior, could be revisited)
	      data.fingerprint = data.fingerprint == null ? msg : data.fingerprint;

	      options = objectMerge$1(
	        {
	          trimHeadFrames: 0
	        },
	        options
	      );
	      // Since we know this is a synthetic trace, the top frame (this function call)
	      // MUST be from Raven.js, so mark it for trimming
	      // We add to the trim counter so that callers can choose to trim extra frames, such
	      // as utility functions.
	      options.trimHeadFrames += 1;

	      var frames = this._prepareFrames(stack, options);
	      data.stacktrace = {
	        // Sentry expects frames oldest to newest
	        frames: frames.reverse()
	      };
	    }

	    // Make sure that fingerprint is always wrapped in an array
	    if (data.fingerprint) {
	      data.fingerprint = isArray$3(data.fingerprint)
	        ? data.fingerprint
	        : [data.fingerprint];
	    }

	    // Fire away!
	    this._send(data);

	    return this;
	  },

	  captureBreadcrumb: function(obj) {
	    var crumb = objectMerge$1(
	      {
	        timestamp: now() / 1000
	      },
	      obj
	    );

	    if (isFunction$3(this._globalOptions.breadcrumbCallback)) {
	      var result = this._globalOptions.breadcrumbCallback(crumb);

	      if (isObject$3(result) && !isEmptyObject$1(result)) {
	        crumb = result;
	      } else if (result === false) {
	        return this;
	      }
	    }

	    this._breadcrumbs.push(crumb);
	    if (this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs) {
	      this._breadcrumbs.shift();
	    }
	    return this;
	  },

	  addPlugin: function(plugin /*arg1, arg2, ... argN*/) {
	    var pluginArgs = [].slice.call(arguments, 1);

	    this._plugins.push([plugin, pluginArgs]);
	    if (this._isRavenInstalled) {
	      this._drainPlugins();
	    }

	    return this;
	  },

	  /*
	     * Set/clear a user to be sent along with the payload.
	     *
	     * @param {object} user An object representing user data [optional]
	     * @return {Raven}
	     */
	  setUserContext: function(user) {
	    // Intentionally do not merge here since that's an unexpected behavior.
	    this._globalContext.user = user;

	    return this;
	  },

	  /*
	     * Merge extra attributes to be sent along with the payload.
	     *
	     * @param {object} extra An object representing extra data [optional]
	     * @return {Raven}
	     */
	  setExtraContext: function(extra) {
	    this._mergeContext('extra', extra);

	    return this;
	  },

	  /*
	     * Merge tags to be sent along with the payload.
	     *
	     * @param {object} tags An object representing tags [optional]
	     * @return {Raven}
	     */
	  setTagsContext: function(tags) {
	    this._mergeContext('tags', tags);

	    return this;
	  },

	  /*
	     * Clear all of the context.
	     *
	     * @return {Raven}
	     */
	  clearContext: function() {
	    this._globalContext = {};

	    return this;
	  },

	  /*
	     * Get a copy of the current context. This cannot be mutated.
	     *
	     * @return {object} copy of context
	     */
	  getContext: function() {
	    // lol javascript
	    return JSON.parse(stringify_1(this._globalContext));
	  },

	  /*
	     * Set environment of application
	     *
	     * @param {string} environment Typically something like 'production'.
	     * @return {Raven}
	     */
	  setEnvironment: function(environment) {
	    this._globalOptions.environment = environment;

	    return this;
	  },

	  /*
	     * Set release version of application
	     *
	     * @param {string} release Typically something like a git SHA to identify version
	     * @return {Raven}
	     */
	  setRelease: function(release) {
	    this._globalOptions.release = release;

	    return this;
	  },

	  /*
	     * Set the dataCallback option
	     *
	     * @param {function} callback The callback to run which allows the
	     *                            data blob to be mutated before sending
	     * @return {Raven}
	     */
	  setDataCallback: function(callback) {
	    var original = this._globalOptions.dataCallback;
	    this._globalOptions.dataCallback = keepOriginalCallback(original, callback);
	    return this;
	  },

	  /*
	     * Set the breadcrumbCallback option
	     *
	     * @param {function} callback The callback to run which allows filtering
	     *                            or mutating breadcrumbs
	     * @return {Raven}
	     */
	  setBreadcrumbCallback: function(callback) {
	    var original = this._globalOptions.breadcrumbCallback;
	    this._globalOptions.breadcrumbCallback = keepOriginalCallback(original, callback);
	    return this;
	  },

	  /*
	     * Set the shouldSendCallback option
	     *
	     * @param {function} callback The callback to run which allows
	     *                            introspecting the blob before sending
	     * @return {Raven}
	     */
	  setShouldSendCallback: function(callback) {
	    var original = this._globalOptions.shouldSendCallback;
	    this._globalOptions.shouldSendCallback = keepOriginalCallback(original, callback);
	    return this;
	  },

	  /**
	   * Override the default HTTP transport mechanism that transmits data
	   * to the Sentry server.
	   *
	   * @param {function} transport Function invoked instead of the default
	   *                             `makeRequest` handler.
	   *
	   * @return {Raven}
	   */
	  setTransport: function(transport) {
	    this._globalOptions.transport = transport;

	    return this;
	  },

	  /*
	     * Get the latest raw exception that was captured by Raven.
	     *
	     * @return {error}
	     */
	  lastException: function() {
	    return this._lastCapturedException;
	  },

	  /*
	     * Get the last event id
	     *
	     * @return {string}
	     */
	  lastEventId: function() {
	    return this._lastEventId;
	  },

	  /*
	     * Determine if Raven is setup and ready to go.
	     *
	     * @return {boolean}
	     */
	  isSetup: function() {
	    if (!this._hasJSON) return false; // needs JSON support
	    if (!this._globalServer) {
	      if (!this.ravenNotConfiguredError) {
	        this.ravenNotConfiguredError = true;
	        this._logDebug('error', 'Error: Raven has not been configured.');
	      }
	      return false;
	    }
	    return true;
	  },

	  afterLoad: function() {
	    // TODO: remove window dependence?

	    // Attempt to initialize Raven on load
	    var RavenConfig = _window$2.RavenConfig;
	    if (RavenConfig) {
	      this.config(RavenConfig.dsn, RavenConfig.config).install();
	    }
	  },

	  showReportDialog: function(options) {
	    if (
	      !_document // doesn't work without a document (React native)
	    )
	      return;

	    options = objectMerge$1(
	      {
	        eventId: this.lastEventId(),
	        dsn: this._dsn,
	        user: this._globalContext.user || {}
	      },
	      options
	    );

	    if (!options.eventId) {
	      throw new configError('Missing eventId');
	    }

	    if (!options.dsn) {
	      throw new configError('Missing DSN');
	    }

	    var encode = encodeURIComponent;
	    var encodedOptions = [];

	    for (var key in options) {
	      if (key === 'user') {
	        var user = options.user;
	        if (user.name) encodedOptions.push('name=' + encode(user.name));
	        if (user.email) encodedOptions.push('email=' + encode(user.email));
	      } else {
	        encodedOptions.push(encode(key) + '=' + encode(options[key]));
	      }
	    }
	    var globalServer = this._getGlobalServer(this._parseDSN(options.dsn));

	    var script = _document.createElement('script');
	    script.async = true;
	    script.src = globalServer + '/api/embed/error-page/?' + encodedOptions.join('&');
	    (_document.head || _document.body).appendChild(script);
	  },

	  /**** Private functions ****/
	  _ignoreNextOnError: function() {
	    var self = this;
	    this._ignoreOnError += 1;
	    setTimeout(function() {
	      // onerror should trigger before setTimeout
	      self._ignoreOnError -= 1;
	    });
	  },

	  _triggerEvent: function(eventType, options) {
	    // NOTE: `event` is a native browser thing, so let's avoid conflicting wiht it
	    var evt, key;

	    if (!this._hasDocument) return;

	    options = options || {};

	    eventType = 'raven' + eventType.substr(0, 1).toUpperCase() + eventType.substr(1);

	    if (_document.createEvent) {
	      evt = _document.createEvent('HTMLEvents');
	      evt.initEvent(eventType, true, true);
	    } else {
	      evt = _document.createEventObject();
	      evt.eventType = eventType;
	    }

	    for (key in options)
	      if (hasKey$1(options, key)) {
	        evt[key] = options[key];
	      }

	    if (_document.createEvent) {
	      // IE9 if standards
	      _document.dispatchEvent(evt);
	    } else {
	      // IE8 regardless of Quirks or Standards
	      // IE9 if quirks
	      try {
	        _document.fireEvent('on' + evt.eventType.toLowerCase(), evt);
	      } catch (e) {
	        // Do nothing
	      }
	    }
	  },

	  /**
	   * Wraps addEventListener to capture UI breadcrumbs
	   * @param evtName the event name (e.g. "click")
	   * @returns {Function}
	   * @private
	   */
	  _breadcrumbEventHandler: function(evtName) {
	    var self = this;
	    return function(evt) {
	      // reset keypress timeout; e.g. triggering a 'click' after
	      // a 'keypress' will reset the keypress debounce so that a new
	      // set of keypresses can be recorded
	      self._keypressTimeout = null;

	      // It's possible this handler might trigger multiple times for the same
	      // event (e.g. event propagation through node ancestors). Ignore if we've
	      // already captured the event.
	      if (self._lastCapturedEvent === evt) return;

	      self._lastCapturedEvent = evt;

	      // try/catch both:
	      // - accessing evt.target (see getsentry/raven-js#838, #768)
	      // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
	      //   can throw an exception in some circumstances.
	      var target;
	      try {
	        target = htmlTreeAsString$1(evt.target);
	      } catch (e) {
	        target = '<unknown>';
	      }

	      self.captureBreadcrumb({
	        category: 'ui.' + evtName, // e.g. ui.click, ui.input
	        message: target
	      });
	    };
	  },

	  /**
	   * Wraps addEventListener to capture keypress UI events
	   * @returns {Function}
	   * @private
	   */
	  _keypressEventHandler: function() {
	    var self = this,
	      debounceDuration = 1000; // milliseconds

	    // TODO: if somehow user switches keypress target before
	    //       debounce timeout is triggered, we will only capture
	    //       a single breadcrumb from the FIRST target (acceptable?)
	    return function(evt) {
	      var target;
	      try {
	        target = evt.target;
	      } catch (e) {
	        // just accessing event properties can throw an exception in some rare circumstances
	        // see: https://github.com/getsentry/raven-js/issues/838
	        return;
	      }
	      var tagName = target && target.tagName;

	      // only consider keypress events on actual input elements
	      // this will disregard keypresses targeting body (e.g. tabbing
	      // through elements, hotkeys, etc)
	      if (
	        !tagName ||
	        (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)
	      )
	        return;

	      // record first keypress in a series, but ignore subsequent
	      // keypresses until debounce clears
	      var timeout = self._keypressTimeout;
	      if (!timeout) {
	        self._breadcrumbEventHandler('input')(evt);
	      }
	      clearTimeout(timeout);
	      self._keypressTimeout = setTimeout(function() {
	        self._keypressTimeout = null;
	      }, debounceDuration);
	    };
	  },

	  /**
	   * Captures a breadcrumb of type "navigation", normalizing input URLs
	   * @param to the originating URL
	   * @param from the target URL
	   * @private
	   */
	  _captureUrlChange: function(from, to) {
	    var parsedLoc = parseUrl$2(this._location.href);
	    var parsedTo = parseUrl$2(to);
	    var parsedFrom = parseUrl$2(from);

	    // because onpopstate only tells you the "new" (to) value of location.href, and
	    // not the previous (from) value, we need to track the value of the current URL
	    // state ourselves
	    this._lastHref = to;

	    // Use only the path component of the URL if the URL matches the current
	    // document (almost all the time when using pushState)
	    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host)
	      to = parsedTo.relative;
	    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host)
	      from = parsedFrom.relative;

	    this.captureBreadcrumb({
	      category: 'navigation',
	      data: {
	        to: to,
	        from: from
	      }
	    });
	  },

	  _patchFunctionToString: function() {
	    var self = this;
	    self._originalFunctionToString = Function.prototype.toString;
	    // eslint-disable-next-line no-extend-native
	    Function.prototype.toString = function() {
	      if (typeof this === 'function' && this.__raven__) {
	        return self._originalFunctionToString.apply(this.__orig__, arguments);
	      }
	      return self._originalFunctionToString.apply(this, arguments);
	    };
	  },

	  _unpatchFunctionToString: function() {
	    if (this._originalFunctionToString) {
	      // eslint-disable-next-line no-extend-native
	      Function.prototype.toString = this._originalFunctionToString;
	    }
	  },

	  /**
	   * Wrap timer functions and event targets to catch errors and provide
	   * better metadata.
	   */
	  _instrumentTryCatch: function() {
	    var self = this;

	    var wrappedBuiltIns = self._wrappedBuiltIns;

	    function wrapTimeFn(orig) {
	      return function(fn, t) {
	        // preserve arity
	        // Make a copy of the arguments to prevent deoptimization
	        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
	        var args = new Array(arguments.length);
	        for (var i = 0; i < args.length; ++i) {
	          args[i] = arguments[i];
	        }
	        var originalCallback = args[0];
	        if (isFunction$3(originalCallback)) {
	          args[0] = self.wrap(
	            {
	              mechanism: {
	                type: 'instrument',
	                data: {function: orig.name || '<anonymous>'}
	              }
	            },
	            originalCallback
	          );
	        }

	        // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
	        // also supports only two arguments and doesn't care what this is, so we
	        // can just call the original function directly.
	        if (orig.apply) {
	          return orig.apply(this, args);
	        } else {
	          return orig(args[0], args[1]);
	        }
	      };
	    }

	    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

	    function wrapEventTarget(global) {
	      var proto = _window$2[global] && _window$2[global].prototype;
	      if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
	        fill$1(
	          proto,
	          'addEventListener',
	          function(orig) {
	            return function(evtName, fn, capture, secure) {
	              // preserve arity
	              try {
	                if (fn && fn.handleEvent) {
	                  fn.handleEvent = self.wrap(
	                    {
	                      mechanism: {
	                        type: 'instrument',
	                        data: {
	                          target: global,
	                          function: 'handleEvent',
	                          handler: (fn && fn.name) || '<anonymous>'
	                        }
	                      }
	                    },
	                    fn.handleEvent
	                  );
	                }
	              } catch (err) {
	                // can sometimes get 'Permission denied to access property "handle Event'
	              }

	              // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
	              // so that we don't have more than one wrapper function
	              var before, clickHandler, keypressHandler;

	              if (
	                autoBreadcrumbs &&
	                autoBreadcrumbs.dom &&
	                (global === 'EventTarget' || global === 'Node')
	              ) {
	                // NOTE: generating multiple handlers per addEventListener invocation, should
	                //       revisit and verify we can just use one (almost certainly)
	                clickHandler = self._breadcrumbEventHandler('click');
	                keypressHandler = self._keypressEventHandler();
	                before = function(evt) {
	                  // need to intercept every DOM event in `before` argument, in case that
	                  // same wrapped method is re-used for different events (e.g. mousemove THEN click)
	                  // see #724
	                  if (!evt) return;

	                  var eventType;
	                  try {
	                    eventType = evt.type;
	                  } catch (e) {
	                    // just accessing event properties can throw an exception in some rare circumstances
	                    // see: https://github.com/getsentry/raven-js/issues/838
	                    return;
	                  }
	                  if (eventType === 'click') return clickHandler(evt);
	                  else if (eventType === 'keypress') return keypressHandler(evt);
	                };
	              }
	              return orig.call(
	                this,
	                evtName,
	                self.wrap(
	                  {
	                    mechanism: {
	                      type: 'instrument',
	                      data: {
	                        target: global,
	                        function: 'addEventListener',
	                        handler: (fn && fn.name) || '<anonymous>'
	                      }
	                    }
	                  },
	                  fn,
	                  before
	                ),
	                capture,
	                secure
	              );
	            };
	          },
	          wrappedBuiltIns
	        );
	        fill$1(
	          proto,
	          'removeEventListener',
	          function(orig) {
	            return function(evt, fn, capture, secure) {
	              try {
	                fn = fn && (fn.__raven_wrapper__ ? fn.__raven_wrapper__ : fn);
	              } catch (e) {
	                // ignore, accessing __raven_wrapper__ will throw in some Selenium environments
	              }
	              return orig.call(this, evt, fn, capture, secure);
	            };
	          },
	          wrappedBuiltIns
	        );
	      }
	    }

	    fill$1(_window$2, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
	    fill$1(_window$2, 'setInterval', wrapTimeFn, wrappedBuiltIns);
	    if (_window$2.requestAnimationFrame) {
	      fill$1(
	        _window$2,
	        'requestAnimationFrame',
	        function(orig) {
	          return function(cb) {
	            return orig(
	              self.wrap(
	                {
	                  mechanism: {
	                    type: 'instrument',
	                    data: {
	                      function: 'requestAnimationFrame',
	                      handler: (orig && orig.name) || '<anonymous>'
	                    }
	                  }
	                },
	                cb
	              )
	            );
	          };
	        },
	        wrappedBuiltIns
	      );
	    }

	    // event targets borrowed from bugsnag-js:
	    // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
	    var eventTargets = [
	      'EventTarget',
	      'Window',
	      'Node',
	      'ApplicationCache',
	      'AudioTrackList',
	      'ChannelMergerNode',
	      'CryptoOperation',
	      'EventSource',
	      'FileReader',
	      'HTMLUnknownElement',
	      'IDBDatabase',
	      'IDBRequest',
	      'IDBTransaction',
	      'KeyOperation',
	      'MediaController',
	      'MessagePort',
	      'ModalWindow',
	      'Notification',
	      'SVGElementInstance',
	      'Screen',
	      'TextTrack',
	      'TextTrackCue',
	      'TextTrackList',
	      'WebSocket',
	      'WebSocketWorker',
	      'Worker',
	      'XMLHttpRequest',
	      'XMLHttpRequestEventTarget',
	      'XMLHttpRequestUpload'
	    ];
	    for (var i = 0; i < eventTargets.length; i++) {
	      wrapEventTarget(eventTargets[i]);
	    }
	  },

	  /**
	   * Instrument browser built-ins w/ breadcrumb capturing
	   *  - XMLHttpRequests
	   *  - DOM interactions (click/typing)
	   *  - window.location changes
	   *  - console
	   *
	   * Can be disabled or individually configured via the `autoBreadcrumbs` config option
	   */
	  _instrumentBreadcrumbs: function() {
	    var self = this;
	    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

	    var wrappedBuiltIns = self._wrappedBuiltIns;

	    function wrapProp(prop, xhr) {
	      if (prop in xhr && isFunction$3(xhr[prop])) {
	        fill$1(xhr, prop, function(orig) {
	          return self.wrap(
	            {
	              mechanism: {
	                type: 'instrument',
	                data: {function: prop, handler: (orig && orig.name) || '<anonymous>'}
	              }
	            },
	            orig
	          );
	        }); // intentionally don't track filled methods on XHR instances
	      }
	    }

	    if (autoBreadcrumbs.xhr && 'XMLHttpRequest' in _window$2) {
	      var xhrproto = _window$2.XMLHttpRequest && _window$2.XMLHttpRequest.prototype;
	      fill$1(
	        xhrproto,
	        'open',
	        function(origOpen) {
	          return function(method, url) {
	            // preserve arity

	            // if Sentry key appears in URL, don't capture
	            if (isString$3(url) && url.indexOf(self._globalKey) === -1) {
	              this.__raven_xhr = {
	                method: method,
	                url: url,
	                status_code: null
	              };
	            }

	            return origOpen.apply(this, arguments);
	          };
	        },
	        wrappedBuiltIns
	      );

	      fill$1(
	        xhrproto,
	        'send',
	        function(origSend) {
	          return function() {
	            // preserve arity
	            var xhr = this;

	            function onreadystatechangeHandler() {
	              if (xhr.__raven_xhr && xhr.readyState === 4) {
	                try {
	                  // touching statusCode in some platforms throws
	                  // an exception
	                  xhr.__raven_xhr.status_code = xhr.status;
	                } catch (e) {
	                  /* do nothing */
	                }

	                self.captureBreadcrumb({
	                  type: 'http',
	                  category: 'xhr',
	                  data: xhr.__raven_xhr
	                });
	              }
	            }

	            var props = ['onload', 'onerror', 'onprogress'];
	            for (var j = 0; j < props.length; j++) {
	              wrapProp(props[j], xhr);
	            }

	            if ('onreadystatechange' in xhr && isFunction$3(xhr.onreadystatechange)) {
	              fill$1(
	                xhr,
	                'onreadystatechange',
	                function(orig) {
	                  return self.wrap(
	                    {
	                      mechanism: {
	                        type: 'instrument',
	                        data: {
	                          function: 'onreadystatechange',
	                          handler: (orig && orig.name) || '<anonymous>'
	                        }
	                      }
	                    },
	                    orig,
	                    onreadystatechangeHandler
	                  );
	                } /* intentionally don't track this instrumentation */
	              );
	            } else {
	              // if onreadystatechange wasn't actually set by the page on this xhr, we
	              // are free to set our own and capture the breadcrumb
	              xhr.onreadystatechange = onreadystatechangeHandler;
	            }

	            return origSend.apply(this, arguments);
	          };
	        },
	        wrappedBuiltIns
	      );
	    }

	    if (autoBreadcrumbs.xhr && supportsFetch$1()) {
	      fill$1(
	        _window$2,
	        'fetch',
	        function(origFetch) {
	          return function() {
	            // preserve arity
	            // Make a copy of the arguments to prevent deoptimization
	            // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
	            var args = new Array(arguments.length);
	            for (var i = 0; i < args.length; ++i) {
	              args[i] = arguments[i];
	            }

	            var fetchInput = args[0];
	            var method = 'GET';
	            var url;

	            if (typeof fetchInput === 'string') {
	              url = fetchInput;
	            } else if ('Request' in _window$2 && fetchInput instanceof _window$2.Request) {
	              url = fetchInput.url;
	              if (fetchInput.method) {
	                method = fetchInput.method;
	              }
	            } else {
	              url = '' + fetchInput;
	            }

	            // if Sentry key appears in URL, don't capture, as it's our own request
	            if (url.indexOf(self._globalKey) !== -1) {
	              return origFetch.apply(this, args);
	            }

	            if (args[1] && args[1].method) {
	              method = args[1].method;
	            }

	            var fetchData = {
	              method: method,
	              url: url,
	              status_code: null
	            };

	            return origFetch
	              .apply(this, args)
	              .then(function(response) {
	                fetchData.status_code = response.status;

	                self.captureBreadcrumb({
	                  type: 'http',
	                  category: 'fetch',
	                  data: fetchData
	                });

	                return response;
	              })
	              ['catch'](function(err) {
	                // if there is an error performing the request
	                self.captureBreadcrumb({
	                  type: 'http',
	                  category: 'fetch',
	                  data: fetchData,
	                  level: 'error'
	                });

	                throw err;
	              });
	          };
	        },
	        wrappedBuiltIns
	      );
	    }

	    // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
	    // to the document. Do this before we instrument addEventListener.
	    if (autoBreadcrumbs.dom && this._hasDocument) {
	      if (_document.addEventListener) {
	        _document.addEventListener('click', self._breadcrumbEventHandler('click'), false);
	        _document.addEventListener('keypress', self._keypressEventHandler(), false);
	      } else if (_document.attachEvent) {
	        // IE8 Compatibility
	        _document.attachEvent('onclick', self._breadcrumbEventHandler('click'));
	        _document.attachEvent('onkeypress', self._keypressEventHandler());
	      }
	    }

	    // record navigation (URL) changes
	    // NOTE: in Chrome App environment, touching history.pushState, *even inside
	    //       a try/catch block*, will cause Chrome to output an error to console.error
	    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
	    var chrome = _window$2.chrome;
	    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
	    var hasPushAndReplaceState =
	      !isChromePackagedApp &&
	      _window$2.history &&
	      _window$2.history.pushState &&
	      _window$2.history.replaceState;
	    if (autoBreadcrumbs.location && hasPushAndReplaceState) {
	      // TODO: remove onpopstate handler on uninstall()
	      var oldOnPopState = _window$2.onpopstate;
	      _window$2.onpopstate = function() {
	        var currentHref = self._location.href;
	        self._captureUrlChange(self._lastHref, currentHref);

	        if (oldOnPopState) {
	          return oldOnPopState.apply(this, arguments);
	        }
	      };

	      var historyReplacementFunction = function(origHistFunction) {
	        // note history.pushState.length is 0; intentionally not declaring
	        // params to preserve 0 arity
	        return function(/* state, title, url */) {
	          var url = arguments.length > 2 ? arguments[2] : undefined;

	          // url argument is optional
	          if (url) {
	            // coerce to string (this is what pushState does)
	            self._captureUrlChange(self._lastHref, url + '');
	          }

	          return origHistFunction.apply(this, arguments);
	        };
	      };

	      fill$1(_window$2.history, 'pushState', historyReplacementFunction, wrappedBuiltIns);
	      fill$1(_window$2.history, 'replaceState', historyReplacementFunction, wrappedBuiltIns);
	    }

	    if (autoBreadcrumbs.console && 'console' in _window$2 && console.log) {
	      // console
	      var consoleMethodCallback = function(msg, data) {
	        self.captureBreadcrumb({
	          message: msg,
	          level: data.level,
	          category: 'console'
	        });
	      };

	      each$1(['debug', 'info', 'warn', 'error', 'log'], function(_, level) {
	        wrapConsoleMethod(console, level, consoleMethodCallback);
	      });
	    }
	  },

	  _restoreBuiltIns: function() {
	    // restore any wrapped builtins
	    var builtin;
	    while (this._wrappedBuiltIns.length) {
	      builtin = this._wrappedBuiltIns.shift();

	      var obj = builtin[0],
	        name = builtin[1],
	        orig = builtin[2];

	      obj[name] = orig;
	    }
	  },

	  _restoreConsole: function() {
	    // eslint-disable-next-line guard-for-in
	    for (var method in this._originalConsoleMethods) {
	      this._originalConsole[method] = this._originalConsoleMethods[method];
	    }
	  },

	  _drainPlugins: function() {
	    var self = this;

	    // FIX ME TODO
	    each$1(this._plugins, function(_, plugin) {
	      var installer = plugin[0];
	      var args = plugin[1];
	      installer.apply(self, [self].concat(args));
	    });
	  },

	  _parseDSN: function(str) {
	    var m = dsnPattern.exec(str),
	      dsn = {},
	      i = 7;

	    try {
	      while (i--) dsn[dsnKeys[i]] = m[i] || '';
	    } catch (e) {
	      throw new configError('Invalid DSN: ' + str);
	    }

	    if (dsn.pass && !this._globalOptions.allowSecretKey) {
	      throw new configError(
	        'Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key'
	      );
	    }

	    return dsn;
	  },

	  _getGlobalServer: function(uri) {
	    // assemble the endpoint from the uri pieces
	    var globalServer = '//' + uri.host + (uri.port ? ':' + uri.port : '');

	    if (uri.protocol) {
	      globalServer = uri.protocol + ':' + globalServer;
	    }
	    return globalServer;
	  },

	  _handleOnErrorStackInfo: function(stackInfo, options) {
	    options = options || {};
	    options.mechanism = options.mechanism || {
	      type: 'onerror',
	      handled: false
	    };

	    // if we are intentionally ignoring errors via onerror, bail out
	    if (!this._ignoreOnError) {
	      this._handleStackInfo(stackInfo, options);
	    }
	  },

	  _handleStackInfo: function(stackInfo, options) {
	    var frames = this._prepareFrames(stackInfo, options);

	    this._triggerEvent('handle', {
	      stackInfo: stackInfo,
	      options: options
	    });

	    this._processException(
	      stackInfo.name,
	      stackInfo.message,
	      stackInfo.url,
	      stackInfo.lineno,
	      frames,
	      options
	    );
	  },

	  _prepareFrames: function(stackInfo, options) {
	    var self = this;
	    var frames = [];
	    if (stackInfo.stack && stackInfo.stack.length) {
	      each$1(stackInfo.stack, function(i, stack) {
	        var frame = self._normalizeFrame(stack, stackInfo.url);
	        if (frame) {
	          frames.push(frame);
	        }
	      });

	      // e.g. frames captured via captureMessage throw
	      if (options && options.trimHeadFrames) {
	        for (var j = 0; j < options.trimHeadFrames && j < frames.length; j++) {
	          frames[j].in_app = false;
	        }
	      }
	    }
	    frames = frames.slice(0, this._globalOptions.stackTraceLimit);
	    return frames;
	  },

	  _normalizeFrame: function(frame, stackInfoUrl) {
	    // normalize the frames data
	    var normalized = {
	      filename: frame.url,
	      lineno: frame.line,
	      colno: frame.column,
	      function: frame.func || '?'
	    };

	    // Case when we don't have any information about the error
	    // E.g. throwing a string or raw object, instead of an `Error` in Firefox
	    // Generating synthetic error doesn't add any value here
	    //
	    // We should probably somehow let a user know that they should fix their code
	    if (!frame.url) {
	      normalized.filename = stackInfoUrl; // fallback to whole stacks url from onerror handler
	    }

	    normalized.in_app = !// determine if an exception came from outside of our app
	    // first we check the global includePaths list.
	    (
	      (!!this._globalOptions.includePaths.test &&
	        !this._globalOptions.includePaths.test(normalized.filename)) ||
	      // Now we check for fun, if the function name is Raven or TraceKit
	      /(Raven|TraceKit)\./.test(normalized['function']) ||
	      // finally, we do a last ditch effort and check for raven.min.js
	      /raven\.(min\.)?js$/.test(normalized.filename)
	    );

	    return normalized;
	  },

	  _processException: function(type, message, fileurl, lineno, frames, options) {
	    var prefixedMessage = (type ? type + ': ' : '') + (message || '');
	    if (
	      !!this._globalOptions.ignoreErrors.test &&
	      (this._globalOptions.ignoreErrors.test(message) ||
	        this._globalOptions.ignoreErrors.test(prefixedMessage))
	    ) {
	      return;
	    }

	    var stacktrace;

	    if (frames && frames.length) {
	      fileurl = frames[0].filename || fileurl;
	      // Sentry expects frames oldest to newest
	      // and JS sends them as newest to oldest
	      frames.reverse();
	      stacktrace = {frames: frames};
	    } else if (fileurl) {
	      stacktrace = {
	        frames: [
	          {
	            filename: fileurl,
	            lineno: lineno,
	            in_app: true
	          }
	        ]
	      };
	    }

	    if (
	      !!this._globalOptions.ignoreUrls.test &&
	      this._globalOptions.ignoreUrls.test(fileurl)
	    ) {
	      return;
	    }

	    if (
	      !!this._globalOptions.whitelistUrls.test &&
	      !this._globalOptions.whitelistUrls.test(fileurl)
	    ) {
	      return;
	    }

	    var data = objectMerge$1(
	      {
	        // sentry.interfaces.Exception
	        exception: {
	          values: [
	            {
	              type: type,
	              value: message,
	              stacktrace: stacktrace
	            }
	          ]
	        },
	        transaction: fileurl
	      },
	      options
	    );

	    var ex = data.exception.values[0];
	    if (ex.type == null && ex.value === '') {
	      ex.value = 'Unrecoverable error caught';
	    }

	    // Move mechanism from options to exception interface
	    // We do this, as requiring user to pass `{exception:{mechanism:{ ... }}}` would be
	    // too much
	    if (!data.exception.mechanism && data.mechanism) {
	      data.exception.mechanism = data.mechanism;
	      delete data.mechanism;
	    }

	    data.exception.mechanism = objectMerge$1(
	      {
	        type: 'generic',
	        handled: true
	      },
	      data.exception.mechanism || {}
	    );

	    // Fire away!
	    this._send(data);
	  },

	  _trimPacket: function(data) {
	    // For now, we only want to truncate the two different messages
	    // but this could/should be expanded to just trim everything
	    var max = this._globalOptions.maxMessageLength;
	    if (data.message) {
	      data.message = truncate$1(data.message, max);
	    }
	    if (data.exception) {
	      var exception = data.exception.values[0];
	      exception.value = truncate$1(exception.value, max);
	    }

	    var request = data.request;
	    if (request) {
	      if (request.url) {
	        request.url = truncate$1(request.url, this._globalOptions.maxUrlLength);
	      }
	      if (request.Referer) {
	        request.Referer = truncate$1(request.Referer, this._globalOptions.maxUrlLength);
	      }
	    }

	    if (data.breadcrumbs && data.breadcrumbs.values)
	      this._trimBreadcrumbs(data.breadcrumbs);

	    return data;
	  },

	  /**
	   * Truncate breadcrumb values (right now just URLs)
	   */
	  _trimBreadcrumbs: function(breadcrumbs) {
	    // known breadcrumb properties with urls
	    // TODO: also consider arbitrary prop values that start with (https?)?://
	    var urlProps = ['to', 'from', 'url'],
	      urlProp,
	      crumb,
	      data;

	    for (var i = 0; i < breadcrumbs.values.length; ++i) {
	      crumb = breadcrumbs.values[i];
	      if (
	        !crumb.hasOwnProperty('data') ||
	        !isObject$3(crumb.data) ||
	        objectFrozen$1(crumb.data)
	      )
	        continue;

	      data = objectMerge$1({}, crumb.data);
	      for (var j = 0; j < urlProps.length; ++j) {
	        urlProp = urlProps[j];
	        if (data.hasOwnProperty(urlProp) && data[urlProp]) {
	          data[urlProp] = truncate$1(data[urlProp], this._globalOptions.maxUrlLength);
	        }
	      }
	      breadcrumbs.values[i].data = data;
	    }
	  },

	  _getHttpData: function() {
	    if (!this._hasNavigator && !this._hasDocument) return;
	    var httpData = {};

	    if (this._hasNavigator && _navigator.userAgent) {
	      httpData.headers = {
	        'User-Agent': _navigator.userAgent
	      };
	    }

	    // Check in `window` instead of `document`, as we may be in ServiceWorker environment
	    if (_window$2.location && _window$2.location.href) {
	      httpData.url = _window$2.location.href;
	    }

	    if (this._hasDocument && _document.referrer) {
	      if (!httpData.headers) httpData.headers = {};
	      httpData.headers.Referer = _document.referrer;
	    }

	    return httpData;
	  },

	  _resetBackoff: function() {
	    this._backoffDuration = 0;
	    this._backoffStart = null;
	  },

	  _shouldBackoff: function() {
	    return this._backoffDuration && now() - this._backoffStart < this._backoffDuration;
	  },

	  /**
	   * Returns true if the in-process data payload matches the signature
	   * of the previously-sent data
	   *
	   * NOTE: This has to be done at this level because TraceKit can generate
	   *       data from window.onerror WITHOUT an exception object (IE8, IE9,
	   *       other old browsers). This can take the form of an "exception"
	   *       data object with a single frame (derived from the onerror args).
	   */
	  _isRepeatData: function(current) {
	    var last = this._lastData;

	    if (
	      !last ||
	      current.message !== last.message || // defined for captureMessage
	      current.transaction !== last.transaction // defined for captureException/onerror
	    )
	      return false;

	    // Stacktrace interface (i.e. from captureMessage)
	    if (current.stacktrace || last.stacktrace) {
	      return isSameStacktrace$1(current.stacktrace, last.stacktrace);
	    } else if (current.exception || last.exception) {
	      // Exception interface (i.e. from captureException/onerror)
	      return isSameException$1(current.exception, last.exception);
	    } else if (current.fingerprint || last.fingerprint) {
	      return Boolean(current.fingerprint && last.fingerprint) &&
	        JSON.stringify(current.fingerprint) === JSON.stringify(last.fingerprint)
	    }

	    return true;
	  },

	  _setBackoffState: function(request) {
	    // If we are already in a backoff state, don't change anything
	    if (this._shouldBackoff()) {
	      return;
	    }

	    var status = request.status;

	    // 400 - project_id doesn't exist or some other fatal
	    // 401 - invalid/revoked dsn
	    // 429 - too many requests
	    if (!(status === 400 || status === 401 || status === 429)) return;

	    var retry;
	    try {
	      // If Retry-After is not in Access-Control-Expose-Headers, most
	      // browsers will throw an exception trying to access it
	      if (supportsFetch$1()) {
	        retry = request.headers.get('Retry-After');
	      } else {
	        retry = request.getResponseHeader('Retry-After');
	      }

	      // Retry-After is returned in seconds
	      retry = parseInt(retry, 10) * 1000;
	    } catch (e) {
	      /* eslint no-empty:0 */
	    }

	    this._backoffDuration = retry
	      ? // If Sentry server returned a Retry-After value, use it
	        retry
	      : // Otherwise, double the last backoff duration (starts at 1 sec)
	        this._backoffDuration * 2 || 1000;

	    this._backoffStart = now();
	  },

	  _send: function(data) {
	    var globalOptions = this._globalOptions;

	    var baseData = {
	        project: this._globalProject,
	        logger: globalOptions.logger,
	        platform: 'javascript'
	      },
	      httpData = this._getHttpData();

	    if (httpData) {
	      baseData.request = httpData;
	    }

	    // HACK: delete `trimHeadFrames` to prevent from appearing in outbound payload
	    if (data.trimHeadFrames) delete data.trimHeadFrames;

	    data = objectMerge$1(baseData, data);

	    // Merge in the tags and extra separately since objectMerge doesn't handle a deep merge
	    data.tags = objectMerge$1(objectMerge$1({}, this._globalContext.tags), data.tags);
	    data.extra = objectMerge$1(objectMerge$1({}, this._globalContext.extra), data.extra);

	    // Send along our own collected metadata with extra
	    data.extra['session:duration'] = now() - this._startTime;

	    if (this._breadcrumbs && this._breadcrumbs.length > 0) {
	      // intentionally make shallow copy so that additions
	      // to breadcrumbs aren't accidentally sent in this request
	      data.breadcrumbs = {
	        values: [].slice.call(this._breadcrumbs, 0)
	      };
	    }

	    if (this._globalContext.user) {
	      // sentry.interfaces.User
	      data.user = this._globalContext.user;
	    }

	    // Include the environment if it's defined in globalOptions
	    if (globalOptions.environment) data.environment = globalOptions.environment;

	    // Include the release if it's defined in globalOptions
	    if (globalOptions.release) data.release = globalOptions.release;

	    // Include server_name if it's defined in globalOptions
	    if (globalOptions.serverName) data.server_name = globalOptions.serverName;

	    data = this._sanitizeData(data);

	    // Cleanup empty properties before sending them to the server
	    Object.keys(data).forEach(function(key) {
	      if (data[key] == null || data[key] === '' || isEmptyObject$1(data[key])) {
	        delete data[key];
	      }
	    });

	    if (isFunction$3(globalOptions.dataCallback)) {
	      data = globalOptions.dataCallback(data) || data;
	    }

	    // Why??????????
	    if (!data || isEmptyObject$1(data)) {
	      return;
	    }

	    // Check if the request should be filtered or not
	    if (
	      isFunction$3(globalOptions.shouldSendCallback) &&
	      !globalOptions.shouldSendCallback(data)
	    ) {
	      return;
	    }

	    // Backoff state: Sentry server previously responded w/ an error (e.g. 429 - too many requests),
	    // so drop requests until "cool-off" period has elapsed.
	    if (this._shouldBackoff()) {
	      this._logDebug('warn', 'Raven dropped error due to backoff: ', data);
	      return;
	    }

	    if (typeof globalOptions.sampleRate === 'number') {
	      if (Math.random() < globalOptions.sampleRate) {
	        this._sendProcessedPayload(data);
	      }
	    } else {
	      this._sendProcessedPayload(data);
	    }
	  },

	  _sanitizeData: function(data) {
	    return sanitize$1(data, this._globalOptions.sanitizeKeys);
	  },

	  _getUuid: function() {
	    return uuid4$1();
	  },

	  _sendProcessedPayload: function(data, callback) {
	    var self = this;
	    var globalOptions = this._globalOptions;

	    if (!this.isSetup()) return;

	    // Try and clean up the packet before sending by truncating long values
	    data = this._trimPacket(data);

	    // ideally duplicate error testing should occur *before* dataCallback/shouldSendCallback,
	    // but this would require copying an un-truncated copy of the data packet, which can be
	    // arbitrarily deep (extra_data) -- could be worthwhile? will revisit
	    if (!this._globalOptions.allowDuplicates && this._isRepeatData(data)) {
	      this._logDebug('warn', 'Raven dropped repeat event: ', data);
	      return;
	    }

	    // Send along an event_id if not explicitly passed.
	    // This event_id can be used to reference the error within Sentry itself.
	    // Set lastEventId after we know the error should actually be sent
	    this._lastEventId = data.event_id || (data.event_id = this._getUuid());

	    // Store outbound payload after trim
	    this._lastData = data;

	    this._logDebug('debug', 'Raven about to send:', data);

	    var auth = {
	      sentry_version: '7',
	      sentry_client: 'raven-js/' + this.VERSION,
	      sentry_key: this._globalKey
	    };

	    if (this._globalSecret) {
	      auth.sentry_secret = this._globalSecret;
	    }

	    var exception = data.exception && data.exception.values[0];

	    // only capture 'sentry' breadcrumb is autoBreadcrumbs is truthy
	    if (
	      this._globalOptions.autoBreadcrumbs &&
	      this._globalOptions.autoBreadcrumbs.sentry
	    ) {
	      this.captureBreadcrumb({
	        category: 'sentry',
	        message: exception
	          ? (exception.type ? exception.type + ': ' : '') + exception.value
	          : data.message,
	        event_id: data.event_id,
	        level: data.level || 'error' // presume error unless specified
	      });
	    }

	    var url = this._globalEndpoint;
	    (globalOptions.transport || this._makeRequest).call(this, {
	      url: url,
	      auth: auth,
	      data: data,
	      options: globalOptions,
	      onSuccess: function success() {
	        self._resetBackoff();

	        self._triggerEvent('success', {
	          data: data,
	          src: url
	        });
	        callback && callback();
	      },
	      onError: function failure(error) {
	        self._logDebug('error', 'Raven transport failed to send: ', error);

	        if (error.request) {
	          self._setBackoffState(error.request);
	        }

	        self._triggerEvent('failure', {
	          data: data,
	          src: url
	        });
	        error = error || new Error('Raven send failed (no additional details provided)');
	        callback && callback(error);
	      }
	    });
	  },

	  _makeRequest: function(opts) {
	    // Auth is intentionally sent as part of query string (NOT as custom HTTP header) to avoid preflight CORS requests
	    var url = opts.url + '?' + urlencode$1(opts.auth);

	    var evaluatedHeaders = null;
	    var evaluatedFetchParameters = {};

	    if (opts.options.headers) {
	      evaluatedHeaders = this._evaluateHash(opts.options.headers);
	    }

	    if (opts.options.fetchParameters) {
	      evaluatedFetchParameters = this._evaluateHash(opts.options.fetchParameters);
	    }

	    if (supportsFetch$1()) {
	      evaluatedFetchParameters.body = stringify_1(opts.data);

	      var defaultFetchOptions = objectMerge$1({}, this._fetchDefaults);
	      var fetchOptions = objectMerge$1(defaultFetchOptions, evaluatedFetchParameters);

	      if (evaluatedHeaders) {
	        fetchOptions.headers = evaluatedHeaders;
	      }

	      return _window$2
	        .fetch(url, fetchOptions)
	        .then(function(response) {
	          if (response.ok) {
	            opts.onSuccess && opts.onSuccess();
	          } else {
	            var error = new Error('Sentry error code: ' + response.status);
	            // It's called request only to keep compatibility with XHR interface
	            // and not add more redundant checks in setBackoffState method
	            error.request = response;
	            opts.onError && opts.onError(error);
	          }
	        })
	        ['catch'](function() {
	          opts.onError &&
	            opts.onError(new Error('Sentry error code: network unavailable'));
	        });
	    }

	    var request = _window$2.XMLHttpRequest && new _window$2.XMLHttpRequest();
	    if (!request) return;

	    // if browser doesn't support CORS (e.g. IE7), we are out of luck
	    var hasCORS = 'withCredentials' in request || typeof XDomainRequest !== 'undefined';

	    if (!hasCORS) return;

	    if ('withCredentials' in request) {
	      request.onreadystatechange = function() {
	        if (request.readyState !== 4) {
	          return;
	        } else if (request.status === 200) {
	          opts.onSuccess && opts.onSuccess();
	        } else if (opts.onError) {
	          var err = new Error('Sentry error code: ' + request.status);
	          err.request = request;
	          opts.onError(err);
	        }
	      };
	    } else {
	      request = new XDomainRequest();
	      // xdomainrequest cannot go http -> https (or vice versa),
	      // so always use protocol relative
	      url = url.replace(/^https?:/, '');

	      // onreadystatechange not supported by XDomainRequest
	      if (opts.onSuccess) {
	        request.onload = opts.onSuccess;
	      }
	      if (opts.onError) {
	        request.onerror = function() {
	          var err = new Error('Sentry error code: XDomainRequest');
	          err.request = request;
	          opts.onError(err);
	        };
	      }
	    }

	    request.open('POST', url);

	    if (evaluatedHeaders) {
	      each$1(evaluatedHeaders, function(key, value) {
	        request.setRequestHeader(key, value);
	      });
	    }

	    request.send(stringify_1(opts.data));
	  },

	  _evaluateHash: function(hash) {
	    var evaluated = {};

	    for (var key in hash) {
	      if (hash.hasOwnProperty(key)) {
	        var value = hash[key];
	        evaluated[key] = typeof value === 'function' ? value() : value;
	      }
	    }

	    return evaluated;
	  },

	  _logDebug: function(level) {
	    // We allow `Raven.debug` and `Raven.config(DSN, { debug: true })` to not make backward incompatible API change
	    if (
	      this._originalConsoleMethods[level] &&
	      (this.debug || this._globalOptions.debug)
	    ) {
	      // In IE<10 console methods do not have their own 'apply' method
	      Function.prototype.apply.call(
	        this._originalConsoleMethods[level],
	        this._originalConsole,
	        [].slice.call(arguments, 1)
	      );
	    }
	  },

	  _mergeContext: function(key, context) {
	    if (isUndefined$1(context)) {
	      delete this._globalContext[key];
	    } else {
	      this._globalContext[key] = objectMerge$1(this._globalContext[key] || {}, context);
	    }
	  }
	};

	// Deprecations
	Raven.prototype.setUser = Raven.prototype.setUserContext;
	Raven.prototype.setReleaseContext = Raven.prototype.setRelease;

	var raven = Raven;

	/**
	 * Enforces a single instance of the Raven client, and the
	 * main entry point for Raven. If you are a consumer of the
	 * Raven library, you SHOULD load this file (vs raven.js).
	 **/



	// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
	var _window$3 =
	  typeof window !== 'undefined'
	    ? window
	    : typeof commonjsGlobal$1 !== 'undefined' ? commonjsGlobal$1 : typeof self !== 'undefined' ? self : {};
	var _Raven = _window$3.Raven;

	var Raven$1 = new raven();

	/*
	 * Allow multiple versions of Raven to be installed.
	 * Strip Raven from the global context and returns the instance.
	 *
	 * @return {Raven}
	 */
	Raven$1.noConflict = function() {
	  _window$3.Raven = _Raven;
	  return Raven$1;
	};

	Raven$1.afterLoad();

	var singleton = Raven$1;

	/**
	 * DISCLAIMER:
	 *
	 * Expose `Client` constructor for cases where user want to track multiple "sub-applications" in one larger app.
	 * It's not meant to be used by a wide audience, so pleaaase make sure that you know what you're doing before using it.
	 * Accidentally calling `install` multiple times, may result in an unexpected behavior that's very hard to debug.
	 *
	 * It's called `Client' to be in-line with Raven Node implementation.
	 *
	 * HOWTO:
	 *
	 * import Raven from 'raven-js';
	 *
	 * const someAppReporter = new Raven.Client();
	 * const someOtherAppReporter = new Raven.Client();
	 *
	 * someAppReporter.config('__DSN__', {
	 *   ...config goes here
	 * });
	 *
	 * someOtherAppReporter.config('__OTHER_DSN__', {
	 *   ...config goes here
	 * });
	 *
	 * someAppReporter.captureMessage(...);
	 * someAppReporter.captureException(...);
	 * someAppReporter.captureBreadcrumb(...);
	 *
	 * someOtherAppReporter.captureMessage(...);
	 * someOtherAppReporter.captureException(...);
	 * someOtherAppReporter.captureBreadcrumb(...);
	 *
	 * It should "just work".
	 */
	var Client = raven;
	singleton.Client = Client;

	(function () {
	  document.addEventListener('DOMContentLoaded', function () {
	    singleton.context(function () {
	      var selector = '.wplyr_player';
	      var containers = document.getElementsByClassName('wplyr_container');

	      if (window.shr) {
	        window.shr.setup({
	          count: {
	            classname: 'button__count'
	          }
	        });
	      } // Setup tab focus


	      var tabClassName = 'tab-focus'; // Remove class on blur

	      document.addEventListener('focusout', function (event) {
	        var anyContainerContains = false;

	        for (var i = 0; i < containers.length; ++i) {
	          var item = containers[i];

	          if (item.contains(event.target)) {
	            anyContainerContains = true;
	            continue;
	          }
	        }

	        if (!event.target.classList || anyContainerContains) {
	          return;
	        }

	        event.target.classList.remove(tabClassName);
	      }); // Add classname to tabbed elements

	      document.addEventListener('keydown', function (event) {
	        if (event.keyCode !== 9) {
	          return;
	        } // Delay the adding of classname until the focus has changed
	        // This event fires before the focusin event


	        setTimeout(function () {
	          var focused = document.activeElement;
	          var anyContainerFocused = false;

	          for (var i = 0; i < containers.length; ++i) {
	            var item = containers[i];

	            if (item.contains(focused)) {
	              anyContainerContains = true;
	              continue;
	            }
	          }

	          if (!focused || !focused.classList || anyContainerFocused) {
	            return;
	          }

	          focused.classList.add(tabClassName);
	        }, 10);
	      });
	      var players = Array.from(document.querySelectorAll(selector)).map(function (p) {
	        return new Plyr(p, {
	          debug: true,
	          controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume',
	          /*'captions', 'settings',*/
	          'airplay', 'fullscreen']
	        });
	      });
	      /*
	      var player = new Plyr(selector, {
	          debug: true,
	          title: 'ToyStory',
	          keyboard: {
	              global: true,
	          },
	          tooltips: {
	              controls: true,
	          },
	          captions: {
	              active: true,
	          },
	          keys: {
	              google: 'AIzaSyDrNwtN3nLH_8rjCmu5Wq3ZCm4MNAVdc0c',
	          },
	          ads: {},
	      });
	      */
	      // Expose for tinkering in the console

	      window.players = players;

	      for (var i = 0; i < players.length; i++) {
	        var player = players[i];
	        player.sourceIndex = -1;

	        for (var j = 0; j < player.elements.original.classList.length; j++) {
	          var classString = player.elements.original.classList[j];

	          if (/wplyr_video_\d+/.test(classString)) {
	            var string = classString.replace("wplyr_video_", "");
	            player.videoId = parseInt(string, 10);
	          }
	        }

	        nextSource(player)();
	        player.on('ended', nextSource(player));
	      } // Setup type toggle


	      var buttons = document.querySelectorAll('[data-source]');
	      var types = {
	        video: 'video',
	        audio: 'audio',
	        youtube: 'youtube',
	        vimeo: 'vimeo'
	      };
	      var currentType = window.location.hash.replace('#', '');
	      var historySupport = window.history && window.history.pushState; // Toggle class on an element

	      function toggleClass(element, className, state) {
	        if (element) {
	          element.classList[state ? 'add' : 'remove'](className);
	        }
	      } // Set a new source


	      function newSource(type, init) {
	        // Bail if new type isn't known, it's the current type, or current type is empty (video is default) and new type is video
	        if (!(type in types) || !init && type === currentType || !currentType.length && type === types.video) {
	          return;
	        } // Set the current type for next time


	        currentType = type; // Remove active classes

	        Array.from(buttons).forEach(function (button) {
	          return toggleClass(button.parentElement, 'active', false);
	        }); // Set active on parent

	        toggleClass(document.querySelector("[data-source=\"".concat(type, "\"]")), 'active', true); // Show cite

	        Array.from(document.querySelectorAll('.plyr__cite')).forEach(function (cite) {
	          cite.setAttribute('hidden', '');
	        });
	        document.querySelector(".plyr__cite--".concat(type)).removeAttribute('hidden');
	      } // Bind to each button


	      Array.from(buttons).forEach(function (button) {
	        button.addEventListener('click', function () {
	          var type = button.getAttribute('data-source');
	          newSource(type);

	          if (historySupport) {
	            window.history.pushState({
	              type: type
	            }, '', "#".concat(type));
	          }
	        });
	      }); // List for backwards/forwards

	      window.addEventListener('popstate', function (event) {
	        if (event.state && 'type' in event.state) {
	          newSource(event.state.type);
	        }
	      }); // On load

	      if (historySupport) {
	        var video = !currentType.length; // If there's no current type set, assume video

	        if (video) {
	          currentType = types.video;
	        } // Replace current history state


	        if (currentType in types) {
	          window.history.replaceState({
	            type: currentType
	          }, '', video ? '' : "#".concat(currentType));
	        } // If it's not video, load the source


	        if (currentType !== types.video) {
	          newSource(currentType, true);
	        }
	      }

	      function isEmpty(str) {
	        return !str || 0 === str.length;
	      }

	      function nextSource(player) {
	        return function () {
	          if (typeof window.videoSourceMap[player.videoId] !== 'undefined' && window.videoSourceMap[player.videoId].length > player.sourceIndex) {
	            do {
	              player.sourceIndex++;
	            } while (typeof window.videoSourceMap[player.videoId][player.sourceIndex] !== 'undefined' && isEmpty(window.videoSourceMap[player.videoId][player.sourceIndex].source) && window.videoSourceMap[player.videoId].length > player.sourceIndex);

	            if (window.videoSourceMap[player.videoId].length <= player.sourceIndex) {
	              player.sourceIndex = 0;
	            }

	            var source = window.videoSourceMap[player.videoId][player.sourceIndex].source;
	            var type = window.videoSourceMap[player.videoId][player.sourceIndex].type;
	            var sources = [];

	            if (type === 'youtube') {
	              sources = [{
	                src: source,
	                provider: 'youtube'
	              }];
	            } else if (type === 'video') {
	              sources = [{
	                src: source,
	                type: 'video/mp4'
	              }];
	            }

	            player.source = {
	              type: 'video',
	              sources: sources
	            };

	            if (player.sourceIndex != 0) {
	              var listener = function listener(event) {
	                player.play();
	                player.off('ready', listener);
	              };

	              player.on('ready', listener);
	            }
	          }
	        };
	      }

	      wp_wplyr_video_setup();
	    });
	  });
	})();

}());

//# sourceMappingURL=player.js.map
