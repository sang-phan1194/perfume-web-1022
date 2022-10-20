function xS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),RS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),PS=Symbol.for("react.strict_mode"),bS=Symbol.for("react.profiler"),OS=Symbol.for("react.provider"),LS=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),MS=Symbol.for("react.suspense"),US=Symbol.for("react.memo"),FS=Symbol.for("react.lazy"),Tm=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ev=Object.assign,_v={};function zi(t,e,n){this.props=t,this.context=e,this.refs=_v,this.updater=n||wv}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sv(){}Sv.prototype=zi.prototype;function nf(t,e,n){this.props=t,this.context=e,this.refs=_v,this.updater=n||wv}var rf=nf.prototype=new Sv;rf.constructor=nf;Ev(rf,zi.prototype);rf.isPureReactComponent=!0;var Cm=Array.isArray,kv=Object.prototype.hasOwnProperty,sf={current:null},Tv={key:!0,ref:!0,__self:!0,__source:!0};function Cv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kv.call(e,r)&&!Tv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:sf.current}}function VS(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function of(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function jS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Im=/\/+/g;function Tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jS(""+t.key):e.toString(36)}function Pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case RS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tc(o,0):r,Cm(i)?(n="",t!=null&&(n=t.replace(Im,"$&/")+"/"),Pa(i,e,n,"",function(u){return u})):i!=null&&(of(i)&&(i=VS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Im,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Tc(s,a);o+=Pa(s,e,n,l,i)}else if(l=BS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Tc(s,a++),o+=Pa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oa(t,e,n){if(t==null)return t;var r=[],i=0;return Pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var et={current:null},ba={transition:null},HS={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:ba,ReactCurrentOwner:sf};W.Children={map:oa,forEach:function(t,e,n){oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oa(t,function(){e++}),e},toArray:function(t){return oa(t,function(e){return e})||[]},only:function(t){if(!of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=zi;W.Fragment=DS;W.Profiler=bS;W.PureComponent=nf;W.StrictMode=PS;W.Suspense=MS;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HS;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ev({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kv.call(e,l)&&!Tv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:LS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OS,_context:t},t.Consumer=t};W.createElement=Cv;W.createFactory=function(t){var e=Cv.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:$S,render:t}};W.isValidElement=of;W.lazy=function(t){return{$$typeof:FS,_payload:{_status:-1,_result:t},_init:zS}};W.memo=function(t,e){return{$$typeof:US,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=ba.transition;ba.transition={};try{t()}finally{ba.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return et.current.useCallback(t,e)};W.useContext=function(t){return et.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return et.current.useDeferredValue(t)};W.useEffect=function(t,e){return et.current.useEffect(t,e)};W.useId=function(){return et.current.useId()};W.useImperativeHandle=function(t,e,n){return et.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return et.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return et.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return et.current.useMemo(t,e)};W.useReducer=function(t,e,n){return et.current.useReducer(t,e,n)};W.useRef=function(t){return et.current.useRef(t)};W.useState=function(t){return et.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return et.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return et.current.useTransition()};W.version="18.2.0";(function(t){t.exports=W})(x);const Yl=AS(x.exports),Th=xS({__proto__:null,default:Yl},[x.exports]);var Ch={},af={exports:{}},vt={},Iv={exports:{}},Nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,V){var j=D.length;D.push(V);e:for(;0<j;){var pe=j-1>>>1,Ce=D[pe];if(0<i(Ce,V))D[pe]=V,D[j]=Ce,j=pe;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var V=D[0],j=D.pop();if(j!==V){D[0]=j;e:for(var pe=0,Ce=D.length,ia=Ce>>>1;pe<ia;){var dr=2*(pe+1)-1,kc=D[dr],fr=dr+1,sa=D[fr];if(0>i(kc,j))fr<Ce&&0>i(sa,kc)?(D[pe]=sa,D[fr]=j,pe=fr):(D[pe]=kc,D[dr]=j,pe=dr);else if(fr<Ce&&0>i(sa,j))D[pe]=sa,D[fr]=j,pe=fr;else break e}}return V}function i(D,V){var j=D.sortIndex-V.sortIndex;return j!==0?j:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=D)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(D){if(w=!1,v(D),!y)if(n(l)!==null)y=!0,_c(I);else{var V=n(u);V!==null&&Sc(E,V.startTime-D)}}function I(D,V){y=!1,w&&(w=!1,g(P),P=-1),m=!0;var j=d;try{for(v(V),h=n(l);h!==null&&(!(h.expirationTime>V)||D&&!Rt());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,d=h.priorityLevel;var Ce=pe(h.expirationTime<=V);V=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&r(l),v(V)}else r(l);h=n(l)}if(h!==null)var ia=!0;else{var dr=n(u);dr!==null&&Sc(E,dr.startTime-V),ia=!1}return ia}finally{h=null,d=j,m=!1}}var N=!1,A=null,P=-1,Y=5,H=-1;function Rt(){return!(t.unstable_now()-H<Y)}function os(){if(A!==null){var D=t.unstable_now();H=D;var V=!0;try{V=A(!0,D)}finally{V?as():(N=!1,A=null)}}else N=!1}var as;if(typeof p=="function")as=function(){p(os)};else if(typeof MessageChannel<"u"){var km=new MessageChannel,NS=km.port2;km.port1.onmessage=os,as=function(){NS.postMessage(null)}}else as=function(){_(os,0)};function _c(D){A=D,N||(N=!0,as())}function Sc(D,V){P=_(function(){D(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,_c(I))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var j=d;d=V;try{return D()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=d;d=D;try{return V()}finally{d=j}},t.unstable_scheduleCallback=function(D,V,j){var pe=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?pe+j:pe):j=pe,D){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=j+Ce,D={id:c++,callback:V,priorityLevel:D,startTime:j,expirationTime:Ce,sortIndex:-1},j>pe?(D.sortIndex=j,e(u,D),n(l)===null&&D===n(u)&&(w?(g(P),P=-1):w=!0,Sc(E,j-pe))):(D.sortIndex=Ce,e(l,D),y||m||(y=!0,_c(I))),D},t.unstable_shouldYield=Rt,t.unstable_wrapCallback=function(D){var V=d;return function(){var j=d;d=V;try{return D.apply(this,arguments)}finally{d=j}}}})(Nv);(function(t){t.exports=Nv})(Iv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv=x.exports,mt=Iv.exports;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Av=new Set,qs={};function Hr(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(qs[t]=e,t=0;t<e.length;t++)Av.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=Object.prototype.hasOwnProperty,qS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},xm={};function WS(t){return Ih.call(xm,t)?!0:Ih.call(Nm,t)?!1:qS.test(t)?xm[t]=!0:(Nm[t]=!0,!1)}function KS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GS(t,e,n,r){if(e===null||typeof e>"u"||KS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lf=/[\-:]([a-z])/g;function uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lf,uf);$e[e]=new tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lf,uf);$e[e]=new tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lf,uf);$e[e]=new tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new tt(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GS(e,n,i,r)&&(n=null),r||i===null?WS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Nh=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),ff=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),Pv=Symbol.for("react.offscreen"),Am=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,Cc;function vs(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Ic=!1;function Nc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vs(t):""}function QS(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case Nh:return"Profiler";case hf:return"StrictMode";case xh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dv:return(t.displayName||"Context")+".Consumer";case Rv:return(t._context.displayName||"Context")+".Provider";case df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ff:return e=t.displayName||null,e!==null?e:Rh(t.type)||"Memo";case An:e=t._payload,t=t._init;try{return Rh(t(e))}catch{}}return null}function XS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rh(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YS(t){var e=bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=YS(t))}function Ov(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dh(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Rm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lv(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function Ph(t,e){Lv(t,e);var n=Zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,Zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ws(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zn(n)}}function $v(t,e){var n=Zn(e.value),r=Zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,Uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JS=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(t){JS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),As[e]=As[t]})});function Fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||As.hasOwnProperty(t)&&As[t]?(""+e).trim():e+"px"}function Bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ZS=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $h(t,e){if(e){if(ZS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=null;function pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fh=null,mi=null,gi=null;function Om(t){if(t=Do(t)){if(typeof Fh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=nu(e),Fh(t.stateNode,t.type,e))}}function Vv(t){mi?gi?gi.push(t):gi=[t]:mi=t}function jv(){if(mi){var t=mi,e=gi;if(gi=mi=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function zv(t,e){return t(e)}function Hv(){}var xc=!1;function qv(t,e,n){if(xc)return t(e,n);xc=!0;try{return zv(t,e,n)}finally{xc=!1,(mi!==null||gi!==null)&&(Hv(),jv())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Bh=!1;if(gn)try{var us={};Object.defineProperty(us,"passive",{get:function(){Bh=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{Bh=!1}function ek(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Rs=!1,Za=null,el=!1,Vh=null,tk={onError:function(t){Rs=!0,Za=t}};function nk(t,e,n,r,i,s,o,a,l){Rs=!1,Za=null,ek.apply(tk,arguments)}function rk(t,e,n,r,i,s,o,a,l){if(nk.apply(this,arguments),Rs){if(Rs){var u=Za;Rs=!1,Za=null}else throw Error(k(198));el||(el=!0,Vh=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lm(t){if(qr(t)!==t)throw Error(k(188))}function ik(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lm(i),t;if(s===r)return Lm(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Kv(t){return t=ik(t),t!==null?Gv(t):null}function Gv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gv(t);if(e!==null)return e;t=t.sibling}return null}var Qv=mt.unstable_scheduleCallback,$m=mt.unstable_cancelCallback,sk=mt.unstable_shouldYield,ok=mt.unstable_requestPaint,me=mt.unstable_now,ak=mt.unstable_getCurrentPriorityLevel,mf=mt.unstable_ImmediatePriority,Xv=mt.unstable_UserBlockingPriority,tl=mt.unstable_NormalPriority,lk=mt.unstable_LowPriority,Yv=mt.unstable_IdlePriority,Jl=null,Wt=null;function uk(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:dk,ck=Math.log,hk=Math.LN2;function dk(t){return t>>>=0,t===0?32:31-(ck(t)/hk|0)|0}var ca=64,ha=4194304;function Es(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Es(a):(s&=o,s!==0&&(r=Es(s)))}else o=n&~i,o!==0?r=Es(o):s!==0&&(r=Es(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function fk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=fk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jv(){var t=ca;return ca<<=1,(ca&4194240)===0&&(ca=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function mk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Zv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var e0,yf,t0,n0,r0,zh=!1,da=[],jn=null,zn=null,Hn=null,Gs=new Map,Qs=new Map,Dn=[],gk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(t,e){switch(t){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Do(e),e!==null&&yf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yk(t,e,n,r,i){switch(e){case"focusin":return jn=cs(jn,t,e,n,r,i),!0;case"dragenter":return zn=cs(zn,t,e,n,r,i),!0;case"mouseover":return Hn=cs(Hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gs.set(s,cs(Gs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qs.set(s,cs(Qs.get(s)||null,t,e,n,r,i)),!0}return!1}function i0(t){var e=vr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wv(n),e!==null){t.blockedOn=e,r0(t.priority,function(){t0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uh=r,n.target.dispatchEvent(r),Uh=null}else return e=Do(n),e!==null&&yf(e),t.blockedOn=n,!1;e.shift()}return!0}function Um(t,e,n){Oa(t)&&n.delete(e)}function vk(){zh=!1,jn!==null&&Oa(jn)&&(jn=null),zn!==null&&Oa(zn)&&(zn=null),Hn!==null&&Oa(Hn)&&(Hn=null),Gs.forEach(Um),Qs.forEach(Um)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,zh||(zh=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,vk)))}function Xs(t){function e(i){return hs(i,t)}if(0<da.length){hs(da[0],t);for(var n=1;n<da.length;n++){var r=da[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jn!==null&&hs(jn,t),zn!==null&&hs(zn,t),Hn!==null&&hs(Hn,t),Gs.forEach(e),Qs.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&Dn.shift()}var yi=In.ReactCurrentBatchConfig,rl=!0;function wk(t,e,n,r){var i=J,s=yi.transition;yi.transition=null;try{J=1,vf(t,e,n,r)}finally{J=i,yi.transition=s}}function Ek(t,e,n,r){var i=J,s=yi.transition;yi.transition=null;try{J=4,vf(t,e,n,r)}finally{J=i,yi.transition=s}}function vf(t,e,n,r){if(rl){var i=Hh(t,e,n,r);if(i===null)Fc(t,e,r,il,n),Mm(t,r);else if(yk(i,t,e,n,r))r.stopPropagation();else if(Mm(t,r),e&4&&-1<gk.indexOf(t)){for(;i!==null;){var s=Do(i);if(s!==null&&e0(s),s=Hh(t,e,n,r),s===null&&Fc(t,e,r,il,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fc(t,e,r,null,n)}}var il=null;function Hh(t,e,n,r){if(il=null,t=pf(r),t=vr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ak()){case mf:return 1;case Xv:return 4;case tl:case lk:return 16;case Yv:return 536870912;default:return 16}default:return 16}}var Fn=null,wf=null,La=null;function o0(){if(La)return La;var t,e=wf,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return La=i.slice(t,1<r?1-r:void 0)}function $a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Fm(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fa:Fm,this.isPropagationStopped=Fm,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=wt(Hi),Ro=he({},Hi,{view:0,detail:0}),_k=wt(Ro),Rc,Dc,ds,Zl=he({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(Rc=t.screenX-ds.screenX,Dc=t.screenY-ds.screenY):Dc=Rc=0,ds=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Bm=wt(Zl),Sk=he({},Zl,{dataTransfer:0}),kk=wt(Sk),Tk=he({},Ro,{relatedTarget:0}),Pc=wt(Tk),Ck=he({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ik=wt(Ck),Nk=he({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xk=wt(Nk),Ak=he({},Hi,{data:0}),Vm=wt(Ak),Rk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pk[t])?!!e[t]:!1}function _f(){return bk}var Ok=he({},Ro,{key:function(t){if(t.key){var e=Rk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?$a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lk=wt(Ok),$k=he({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=wt($k),Mk=he({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),Uk=wt(Mk),Fk=he({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bk=wt(Fk),Vk=he({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jk=wt(Vk),zk=[9,13,27,32],Sf=gn&&"CompositionEvent"in window,Ds=null;gn&&"documentMode"in document&&(Ds=document.documentMode);var Hk=gn&&"TextEvent"in window&&!Ds,a0=gn&&(!Sf||Ds&&8<Ds&&11>=Ds),zm=String.fromCharCode(32),Hm=!1;function l0(t,e){switch(t){case"keyup":return zk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function qk(t,e){switch(t){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(Hm=!0,zm);case"textInput":return t=e.data,t===zm&&Hm?null:t;default:return null}}function Wk(t,e){if(ti)return t==="compositionend"||!Sf&&l0(t,e)?(t=o0(),La=wf=Fn=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a0&&e.locale!=="ko"?null:e.data;default:return null}}var Kk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kk[t.type]:e==="textarea"}function c0(t,e,n,r){Vv(r),e=sl(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ps=null,Ys=null;function Gk(t){_0(t,0)}function eu(t){var e=ii(t);if(Ov(e))return t}function Qk(t,e){if(t==="change")return e}var h0=!1;if(gn){var bc;if(gn){var Oc="oninput"in document;if(!Oc){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),Oc=typeof Wm.oninput=="function"}bc=Oc}else bc=!1;h0=bc&&(!document.documentMode||9<document.documentMode)}function Km(){Ps&&(Ps.detachEvent("onpropertychange",d0),Ys=Ps=null)}function d0(t){if(t.propertyName==="value"&&eu(Ys)){var e=[];c0(e,Ys,t,pf(t)),qv(Gk,e)}}function Xk(t,e,n){t==="focusin"?(Km(),Ps=e,Ys=n,Ps.attachEvent("onpropertychange",d0)):t==="focusout"&&Km()}function Yk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Ys)}function Jk(t,e){if(t==="click")return eu(e)}function Zk(t,e){if(t==="input"||t==="change")return eu(e)}function eT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:eT;function Js(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ih.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qm(t,e){var n=Gm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gm(n)}}function f0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p0(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tT(t){var e=p0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qm(n,s);var o=Qm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nT=gn&&"documentMode"in document&&11>=document.documentMode,ni=null,qh=null,bs=null,Wh=!1;function Xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wh||ni==null||ni!==Ja(r)||(r=ni,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&Js(bs,r)||(bs=r,r=sl(qh,"onSelect"),0<r.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Lc={},m0={};gn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function tu(t){if(Lc[t])return Lc[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return Lc[t]=e[n];return t}var g0=tu("animationend"),y0=tu("animationiteration"),v0=tu("animationstart"),w0=tu("transitionend"),E0=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){E0.set(t,e),Hr(e,[t])}for(var $c=0;$c<Ym.length;$c++){var Mc=Ym[$c],rT=Mc.toLowerCase(),iT=Mc[0].toUpperCase()+Mc.slice(1);ar(rT,"on"+iT)}ar(g0,"onAnimationEnd");ar(y0,"onAnimationIteration");ar(v0,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(w0,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sT=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function Jm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rk(r,e,void 0,t),t.currentTarget=null}function _0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Jm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Jm(i,a,u),s=l}}}if(el)throw t=Vh,el=!1,Vh=null,t}function re(t,e){var n=e[Yh];n===void 0&&(n=e[Yh]=new Set);var r=t+"__bubble";n.has(r)||(S0(e,t,2,!1),n.add(r))}function Uc(t,e,n){var r=0;e&&(r|=4),S0(n,t,r,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[ma]){t[ma]=!0,Av.forEach(function(n){n!=="selectionchange"&&(sT.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ma]||(e[ma]=!0,Uc("selectionchange",!1,e))}}function S0(t,e,n,r){switch(s0(e)){case 1:var i=wk;break;case 4:i=Ek;break;default:i=vf}n=i.bind(null,e,n,t),i=void 0,!Bh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}qv(function(){var u=s,c=pf(n),h=[];e:{var d=E0.get(t);if(d!==void 0){var m=Ef,y=t;switch(t){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":m=Lk;break;case"focusin":y="focus",m=Pc;break;case"focusout":y="blur",m=Pc;break;case"beforeblur":case"afterblur":m=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Uk;break;case g0:case y0:case v0:m=Ik;break;case w0:m=Bk;break;case"scroll":m=_k;break;case"wheel":m=jk;break;case"copy":case"cut":case"paste":m=xk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=jm}var w=(e&4)!==0,_=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=Ks(p,g),E!=null&&w.push(eo(p,E,v)))),_)break;p=p.return}0<w.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Uh&&(y=n.relatedTarget||n.fromElement)&&(vr(y)||y[yn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?vr(y):null,y!==null&&(_=qr(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Bm,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=jm,E="onPointerLeave",g="onPointerEnter",p="pointer"),_=m==null?d:ii(m),v=y==null?d:ii(y),d=new w(E,p+"leave",m,n,c),d.target=_,d.relatedTarget=v,E=null,vr(c)===u&&(w=new w(g,p+"enter",y,n,c),w.target=v,w.relatedTarget=_,E=w),_=E,m&&y)t:{for(w=m,g=y,p=0,v=w;v;v=Qr(v))p++;for(v=0,E=g;E;E=Qr(E))v++;for(;0<p-v;)w=Qr(w),p--;for(;0<v-p;)g=Qr(g),v--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=Qr(w),g=Qr(g)}w=null}else w=null;m!==null&&Zm(h,d,m,w,!1),y!==null&&_!==null&&Zm(h,_,y,w,!0)}}e:{if(d=u?ii(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=Qk;else if(qm(d))if(h0)I=Zk;else{I=Yk;var N=Xk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=Jk);if(I&&(I=I(t,u))){c0(h,I,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&bh(d,"number",d.value)}switch(N=u?ii(u):window,t){case"focusin":(qm(N)||N.contentEditable==="true")&&(ni=N,qh=u,bs=null);break;case"focusout":bs=qh=ni=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,Xm(h,n,c);break;case"selectionchange":if(nT)break;case"keydown":case"keyup":Xm(h,n,c)}var A;if(Sf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ti?l0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(a0&&n.locale!=="ko"&&(ti||P!=="onCompositionStart"?P==="onCompositionEnd"&&ti&&(A=o0()):(Fn=c,wf="value"in Fn?Fn.value:Fn.textContent,ti=!0)),N=sl(u,P),0<N.length&&(P=new Vm(P,t,null,n,c),h.push({event:P,listeners:N}),A?P.data=A:(A=u0(n),A!==null&&(P.data=A)))),(A=Hk?qk(t,n):Wk(t,n))&&(u=sl(u,"onBeforeInput"),0<u.length&&(c=new Vm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}_0(h,e)})}function eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ks(t,n),s!=null&&r.unshift(eo(t,s,i)),s=Ks(t,e),s!=null&&r.push(eo(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ks(n,s),l!=null&&o.unshift(eo(n,l,a))):i||(l=Ks(n,s),l!=null&&o.push(eo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oT=/\r\n?/g,aT=/\u0000|\uFFFD/g;function eg(t){return(typeof t=="string"?t:""+t).replace(oT,`
`).replace(aT,"")}function ga(t,e,n){if(e=eg(e),eg(t)!==e&&n)throw Error(k(425))}function ol(){}var Kh=null,Gh=null;function Qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,lT=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,uT=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(cT)}:Xh;function cT(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),jt="__reactFiber$"+qi,to="__reactProps$"+qi,yn="__reactContainer$"+qi,Yh="__reactEvents$"+qi,hT="__reactListeners$"+qi,dT="__reactHandles$"+qi;function vr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ng(t);t!==null;){if(n=t[jt])return n;t=ng(t)}return e}t=n,n=t.parentNode}return null}function Do(t){return t=t[jt]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function nu(t){return t[to]||null}var Jh=[],si=-1;function lr(t){return{current:t}}function ie(t){0>si||(t.current=Jh[si],Jh[si]=null,si--)}function te(t,e){si++,Jh[si]=t.current,t.current=e}var er={},Ke=lr(er),at=lr(!1),Rr=er;function Ni(t,e){var n=t.type.contextTypes;if(!n)return er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function al(){ie(at),ie(Ke)}function rg(t,e,n){if(Ke.current!==er)throw Error(k(168));te(Ke,e),te(at,n)}function k0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,XS(t)||"Unknown",i));return he({},n,r)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Rr=Ke.current,te(Ke,t),te(at,at.current),!0}function ig(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=k0(t,e,Rr),r.__reactInternalMemoizedMergedChildContext=t,ie(at),ie(Ke),te(Ke,t)):ie(at),te(at,n)}var rn=null,ru=!1,Vc=!1;function T0(t){rn===null?rn=[t]:rn.push(t)}function fT(t){ru=!0,T0(t)}function ur(){if(!Vc&&rn!==null){Vc=!0;var t=0,e=J;try{var n=rn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rn=null,ru=!1}catch(i){throw rn!==null&&(rn=rn.slice(t+1)),Qv(mf,ur),i}finally{J=e,Vc=!1}}return null}var oi=[],ai=0,ul=null,cl=0,_t=[],St=0,Dr=null,on=1,an="";function pr(t,e){oi[ai++]=cl,oi[ai++]=ul,ul=t,cl=e}function C0(t,e,n){_t[St++]=on,_t[St++]=an,_t[St++]=Dr,Dr=t;var r=on;t=an;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-$t(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function Tf(t){t.return!==null&&(pr(t,1),C0(t,1,0))}function Cf(t){for(;t===ul;)ul=oi[--ai],oi[ai]=null,cl=oi[--ai],oi[ai]=null;for(;t===Dr;)Dr=_t[--St],_t[St]=null,an=_t[--St],_t[St]=null,on=_t[--St],_t[St]=null}var ft=null,ht=null,oe=!1,Ot=null;function I0(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,ht=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,ht=null,!0):!1;default:return!1}}function Zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(oe){var e=ht;if(e){var n=e;if(!sg(t,e)){if(Zh(t))throw Error(k(418));e=qn(n.nextSibling);var r=ft;e&&sg(t,e)?I0(r,n):(t.flags=t.flags&-4097|2,oe=!1,ft=t)}}else{if(Zh(t))throw Error(k(418));t.flags=t.flags&-4097|2,oe=!1,ft=t}}}function og(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function ya(t){if(t!==ft)return!1;if(!oe)return og(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qh(t.type,t.memoizedProps)),e&&(e=ht)){if(Zh(t))throw N0(),Error(k(418));for(;e;)I0(t,e),e=qn(e.nextSibling)}if(og(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ht=qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ht=null}}else ht=ft?qn(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=ht;t;)t=qn(t.nextSibling)}function xi(){ht=ft=null,oe=!1}function If(t){Ot===null?Ot=[t]:Ot.push(t)}var pT=In.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var hl=lr(null),dl=null,li=null,Nf=null;function xf(){Nf=li=dl=null}function Af(t){var e=hl.current;ie(hl),t._currentValue=e}function td(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vi(t,e){dl=t,Nf=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(st=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(Nf!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(dl===null)throw Error(k(308));li=t,dl.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var wr=null;function Rf(t){wr===null?wr=[t]:wr.push(t)}function x0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rf(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Rf(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function Ma(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gf(t,n)}}function ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=he({},h,d);break e;case 2:Rn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=h}}function lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var R0=new xv.Component().refs;function nd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Je(),i=Gn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Mt(e,t,i,r),Ma(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Je(),i=Gn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Mt(e,t,i,r),Ma(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Je(),r=Gn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,r),e!==null&&(Mt(e,t,r,n),Ma(e,t,r))}};function ug(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Js(n,r)||!Js(i,s):!0}function D0(t,e,n){var r=!1,i=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=lt(e)?Rr:Ke.current,r=e.contextTypes,s=(r=r!=null)?Ni(t,i):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=R0,Df(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=lt(e)?Rr:Ke.current,i.context=Ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&iu.enqueueReplaceState(i,i.state,null),fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===R0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function va(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hg(t){var e=t._init;return e(t._payload)}function P0(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Qn(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,E){return p===null||p.tag!==6?(p=Gc(v,g.mode,E),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,E){var I=v.type;return I===ei?c(g,p,v.props.children,E,v.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===An&&hg(I)===p.type)?(E=i(p,v.props),E.ref=fs(g,p,v),E.return=g,E):(E=za(v.type,v.key,v.props,null,g.mode,E),E.ref=fs(g,p,v),E.return=g,E)}function u(g,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Qc(v,g.mode,E),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,E,I){return p===null||p.tag!==7?(p=Cr(v,g.mode,E,I),p.return=g,p):(p=i(p,v),p.return=g,p)}function h(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Gc(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case aa:return v=za(p.type,p.key,p.props,null,g.mode,v),v.ref=fs(g,null,p),v.return=g,v;case Zr:return p=Qc(p,g.mode,v),p.return=g,p;case An:var E=p._init;return h(g,E(p._payload),v)}if(ws(p)||ls(p))return p=Cr(p,g.mode,v,null),p.return=g,p;va(g,p)}return null}function d(g,p,v,E){var I=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(g,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case aa:return v.key===I?l(g,p,v,E):null;case Zr:return v.key===I?u(g,p,v,E):null;case An:return I=v._init,d(g,p,I(v._payload),E)}if(ws(v)||ls(v))return I!==null?null:c(g,p,v,E,null);va(g,v)}return null}function m(g,p,v,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(p,g,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case aa:return g=g.get(E.key===null?v:E.key)||null,l(p,g,E,I);case Zr:return g=g.get(E.key===null?v:E.key)||null,u(p,g,E,I);case An:var N=E._init;return m(g,p,v,N(E._payload),I)}if(ws(E)||ls(E))return g=g.get(v)||null,c(p,g,E,I,null);va(p,E)}return null}function y(g,p,v,E){for(var I=null,N=null,A=p,P=p=0,Y=null;A!==null&&P<v.length;P++){A.index>P?(Y=A,A=null):Y=A.sibling;var H=d(g,A,v[P],E);if(H===null){A===null&&(A=Y);break}t&&A&&H.alternate===null&&e(g,A),p=s(H,p,P),N===null?I=H:N.sibling=H,N=H,A=Y}if(P===v.length)return n(g,A),oe&&pr(g,P),I;if(A===null){for(;P<v.length;P++)A=h(g,v[P],E),A!==null&&(p=s(A,p,P),N===null?I=A:N.sibling=A,N=A);return oe&&pr(g,P),I}for(A=r(g,A);P<v.length;P++)Y=m(A,g,P,v[P],E),Y!==null&&(t&&Y.alternate!==null&&A.delete(Y.key===null?P:Y.key),p=s(Y,p,P),N===null?I=Y:N.sibling=Y,N=Y);return t&&A.forEach(function(Rt){return e(g,Rt)}),oe&&pr(g,P),I}function w(g,p,v,E){var I=ls(v);if(typeof I!="function")throw Error(k(150));if(v=I.call(v),v==null)throw Error(k(151));for(var N=I=null,A=p,P=p=0,Y=null,H=v.next();A!==null&&!H.done;P++,H=v.next()){A.index>P?(Y=A,A=null):Y=A.sibling;var Rt=d(g,A,H.value,E);if(Rt===null){A===null&&(A=Y);break}t&&A&&Rt.alternate===null&&e(g,A),p=s(Rt,p,P),N===null?I=Rt:N.sibling=Rt,N=Rt,A=Y}if(H.done)return n(g,A),oe&&pr(g,P),I;if(A===null){for(;!H.done;P++,H=v.next())H=h(g,H.value,E),H!==null&&(p=s(H,p,P),N===null?I=H:N.sibling=H,N=H);return oe&&pr(g,P),I}for(A=r(g,A);!H.done;P++,H=v.next())H=m(A,g,P,H.value,E),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?P:H.key),p=s(H,p,P),N===null?I=H:N.sibling=H,N=H);return t&&A.forEach(function(os){return e(g,os)}),oe&&pr(g,P),I}function _(g,p,v,E){if(typeof v=="object"&&v!==null&&v.type===ei&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case aa:e:{for(var I=v.key,N=p;N!==null;){if(N.key===I){if(I=v.type,I===ei){if(N.tag===7){n(g,N.sibling),p=i(N,v.props.children),p.return=g,g=p;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===An&&hg(I)===N.type){n(g,N.sibling),p=i(N,v.props),p.ref=fs(g,N,v),p.return=g,g=p;break e}n(g,N);break}else e(g,N);N=N.sibling}v.type===ei?(p=Cr(v.props.children,g.mode,E,v.key),p.return=g,g=p):(E=za(v.type,v.key,v.props,null,g.mode,E),E.ref=fs(g,p,v),E.return=g,g=E)}return o(g);case Zr:e:{for(N=v.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Qc(v,g.mode,E),p.return=g,g=p}return o(g);case An:return N=v._init,_(g,p,N(v._payload),E)}if(ws(v))return y(g,p,v,E);if(ls(v))return w(g,p,v,E);va(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Gc(v,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return _}var Ai=P0(!0),b0=P0(!1),Po={},Kt=lr(Po),no=lr(Po),ro=lr(Po);function Er(t){if(t===Po)throw Error(k(174));return t}function Pf(t,e){switch(te(ro,e),te(no,t),te(Kt,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lh(e,t)}ie(Kt),te(Kt,e)}function Ri(){ie(Kt),ie(no),ie(ro)}function O0(t){Er(ro.current);var e=Er(Kt.current),n=Lh(e,t.type);e!==n&&(te(no,t),te(Kt,n))}function bf(t){no.current===t&&(ie(Kt),ie(no))}var ue=lr(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function Of(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var Ua=In.ReactCurrentDispatcher,zc=In.ReactCurrentBatchConfig,Pr=0,ce=null,Ee=null,Ne=null,ml=!1,Os=!1,io=0,mT=0;function Be(){throw Error(k(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function $f(t,e,n,r,i,s){if(Pr=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?wT:ET,t=n(r,i),Os){s=0;do{if(Os=!1,io=0,25<=s)throw Error(k(301));s+=1,Ne=Ee=null,e.updateQueue=null,Ua.current=_T,t=n(r,i)}while(Os)}if(Ua.current=gl,e=Ee!==null&&Ee.next!==null,Pr=0,Ne=Ee=ce=null,ml=!1,e)throw Error(k(300));return t}function Mf(){var t=io!==0;return io=0,t}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ce.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function xt(){if(Ee===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Ne===null?ce.memoizedState:Ne.next;if(e!==null)Ne=e,Ee=t;else{if(t===null)throw Error(k(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ne===null?ce.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function so(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=xt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ce.lanes|=c,br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ut(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=xt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function L0(){}function $0(t,e){var n=ce,r=xt(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Uf(F0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,oo(9,U0.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(k(349));(Pr&30)!==0||M0(n,e,i)}return i}function M0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U0(t,e,n,r){e.value=n,e.getSnapshot=r,B0(e)&&V0(t)}function F0(t,e,n){return n(function(){B0(e)&&V0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function V0(t){var e=vn(t,1);e!==null&&Mt(e,t,1,-1)}function dg(t){var e=Vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=vT.bind(null,ce,t),[e.memoizedState,t]}function oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function j0(){return xt().memoizedState}function Fa(t,e,n,r){var i=Vt();ce.flags|=t,i.memoizedState=oo(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&Lf(r,o.deps)){i.memoizedState=oo(e,n,s,r);return}}ce.flags|=t,i.memoizedState=oo(1|e,n,s,r)}function fg(t,e){return Fa(8390656,8,t,e)}function Uf(t,e){return su(2048,8,t,e)}function z0(t,e){return su(4,2,t,e)}function H0(t,e){return su(4,4,t,e)}function q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W0(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,q0.bind(null,e,t),n)}function Ff(){}function K0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Q0(t,e,n){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n):(Ut(n,e)||(n=Jv(),ce.lanes|=n,br|=n,t.baseState=!0),e)}function gT(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=zc.transition;zc.transition={};try{t(!1),e()}finally{J=n,zc.transition=r}}function X0(){return xt().memoizedState}function yT(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(t))J0(e,n);else if(n=x0(t,e,n,r),n!==null){var i=Je();Mt(n,t,r,i),Z0(n,e,r)}}function vT(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(t))J0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ut(a,o)){var l=e.interleaved;l===null?(i.next=i,Rf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=x0(t,e,i,r),n!==null&&(i=Je(),Mt(n,t,r,i),Z0(n,e,r))}}function Y0(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function J0(t,e){Os=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gf(t,n)}}var gl={readContext:Nt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},wT={readContext:Nt,useCallback:function(t,e){return Vt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:fg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=Vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yT.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=Vt();return t={current:t},e.memoizedState=t},useState:dg,useDebugValue:Ff,useDeferredValue:function(t){return Vt().memoizedState=t},useTransition:function(){var t=dg(!1),e=t[0];return t=gT.bind(null,t[1]),Vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=Vt();if(oe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),xe===null)throw Error(k(349));(Pr&30)!==0||M0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fg(F0.bind(null,r,s,t),[t]),r.flags|=2048,oo(9,U0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vt(),e=xe.identifierPrefix;if(oe){var n=an,r=on;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ET={readContext:Nt,useCallback:K0,useContext:Nt,useEffect:Uf,useImperativeHandle:W0,useInsertionEffect:z0,useLayoutEffect:H0,useMemo:G0,useReducer:Hc,useRef:j0,useState:function(){return Hc(so)},useDebugValue:Ff,useDeferredValue:function(t){var e=xt();return Q0(e,Ee.memoizedState,t)},useTransition:function(){var t=Hc(so)[0],e=xt().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:$0,useId:X0,unstable_isNewReconciler:!1},_T={readContext:Nt,useCallback:K0,useContext:Nt,useEffect:Uf,useImperativeHandle:W0,useInsertionEffect:z0,useLayoutEffect:H0,useMemo:G0,useReducer:qc,useRef:j0,useState:function(){return qc(so)},useDebugValue:Ff,useDeferredValue:function(t){var e=xt();return Ee===null?e.memoizedState=t:Q0(e,Ee.memoizedState,t)},useTransition:function(){var t=qc(so)[0],e=xt().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:$0,useId:X0,unstable_isNewReconciler:!1};function Di(t,e){try{var n="",r=e;do n+=QS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ST=typeof WeakMap=="function"?WeakMap:Map;function e1(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vl||(vl=!0,pd=r),id(t,e)},n}function t1(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ST;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$T.bind(null,t,e,n),e.then(t,t))}function mg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var kT=In.ReactCurrentOwner,st=!1;function Xe(t,e,n,r){e.child=t===null?b0(e,null,n,r):Ai(e,t.child,n,r)}function yg(t,e,n,r,i){n=n.render;var s=e.ref;return vi(e,i),r=$f(t,e,n,r,s,i),n=Mf(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(oe&&n&&Tf(e),e.flags|=1,Xe(t,e,r,i),e.child)}function vg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,n1(t,e,s,r,i)):(t=za(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Js,n(o,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=Qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function n1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Js(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(st=!0);else return e.lanes=t.lanes,wn(t,e,i)}return sd(t,e,n,r,i)}function r1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(ci,ct),ct|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(ci,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(ci,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(ci,ct),ct|=r;return Xe(t,e,i,n),e.child}function i1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,r,i){var s=lt(n)?Rr:Ke.current;return s=Ni(e,s),vi(e,i),n=$f(t,e,n,r,s,i),r=Mf(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(oe&&r&&Tf(e),e.flags|=1,Xe(t,e,n,i),e.child)}function wg(t,e,n,r,i){if(lt(n)){var s=!0;ll(e)}else s=!1;if(vi(e,i),e.stateNode===null)Ba(t,e),D0(e,n,r),rd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nt(u):(u=lt(n)?Rr:Ke.current,u=Ni(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cg(e,o,r,u),Rn=!1;var d=e.memoizedState;o.state=d,fl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||at.current||Rn?(typeof c=="function"&&(nd(e,n,c,r),l=e.memoizedState),(a=Rn||ug(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,A0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nt(l):(l=lt(n)?Rr:Ke.current,l=Ni(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&cg(e,o,r,l),Rn=!1,d=e.memoizedState,o.state=d,fl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||at.current||Rn?(typeof m=="function"&&(nd(e,n,m,r),y=e.memoizedState),(u=Rn||ug(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return od(t,e,n,r,s,i)}function od(t,e,n,r,i,s){i1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ig(e,n,!1),wn(t,e,s);r=e.stateNode,kT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,a,s)):Xe(t,e,a,s),e.memoizedState=r.state,i&&ig(e,n,!0),e.child}function s1(t){var e=t.stateNode;e.pendingContext?rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rg(t,e.context,!1),Pf(t,e.containerInfo)}function Eg(t,e,n,r,i){return xi(),If(i),e.flags|=256,Xe(t,e,n,r),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function o1(t,e,n){var r=e.pendingProps,i=ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(ue,i&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ld(n),e.memoizedState=ad,t):Bf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qn(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ld(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ad,r}return s=t.child,t=s.sibling,r=Qn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bf(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wa(t,e,n,r){return r!==null&&If(r),Ai(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wc(Error(k(422))),wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lu({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ai(e,t.child,null,o),e.child.memoizedState=ld(o),e.memoizedState=ad,s);if((e.mode&1)===0)return wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Wc(s,r,void 0),wa(t,e,o,r)}if(a=(o&t.childLanes)!==0,st||a){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),Mt(r,t,i,-1))}return Wf(),r=Wc(Error(k(421))),wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ht=qn(i.nextSibling),ft=e,oe=!0,Ot=null,t!==null&&(_t[St++]=on,_t[St++]=an,_t[St++]=Dr,on=t.id,an=t.overflow,Dr=e),e=Bf(e,r.children),e.flags|=4096,e)}function _g(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),td(t.return,e,n)}function Kc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function a1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Xe(t,e,r.children,n),r=ue.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_g(t,n,e);else if(t.tag===19)_g(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(ue,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CT(t,e,n){switch(e.tag){case 3:s1(e),xi();break;case 5:O0(e);break;case 1:lt(e.type)&&ll(e);break;case 4:Pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(ue,ue.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?o1(t,e,n):(te(ue,ue.current&1),t=wn(t,e,n),t!==null?t.sibling:null);te(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return a1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ue,ue.current),r)break;return null;case 22:case 23:return e.lanes=0,r1(t,e,n)}return wn(t,e,n)}var l1,ud,u1,c1;l1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ud=function(){};u1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Er(Kt.current);var s=null;switch(n){case"input":i=Dh(t,i),r=Dh(t,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=Oh(t,i),r=Oh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ol)}$h(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};c1=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IT(t,e,n){var r=e.pendingProps;switch(Cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(e),null;case 1:return lt(e.type)&&al(),Ve(e),null;case 3:return r=e.stateNode,Ri(),ie(at),ie(Ke),Of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ot!==null&&(yd(Ot),Ot=null))),ud(t,e),Ve(e),null;case 5:bf(e);var i=Er(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)u1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ve(e),null}if(t=Er(Kt.current),ya(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[to]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<_s.length;i++)re(_s[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Rm(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Pm(r,s),re("invalid",r)}$h(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ga(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ga(r.textContent,a,t),i=["children",""+a]):qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":la(r),Dm(r,s,!0);break;case"textarea":la(r),bm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ol)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jt]=e,t[to]=r,l1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mh(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<_s.length;i++)re(_s[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":Rm(t,r),i=Dh(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),re("invalid",t);break;case"textarea":Pm(t,r),i=Oh(t,r),re("invalid",t);break;default:i=r}$h(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Uv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ws(t,l):typeof l=="number"&&Ws(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&cf(t,s,l,o))}switch(n){case"input":la(t),Dm(t,r,!1);break;case"textarea":la(t),bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ve(e),null;case 6:if(t&&e.stateNode!=null)c1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Er(ro.current),Er(Kt.current),ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return Ve(e),null;case 13:if(ie(ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&ht!==null&&(e.mode&1)!==0&&(e.flags&128)===0)N0(),xi(),e.flags|=98560,s=!1;else if(s=ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[jt]=e}else xi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ve(e),s=!1}else Ot!==null&&(yd(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ue.current&1)!==0?_e===0&&(_e=3):Wf())),e.updateQueue!==null&&(e.flags|=4),Ve(e),null);case 4:return Ri(),ud(t,e),t===null&&Zs(e.stateNode.containerInfo),Ve(e),null;case 10:return Af(e.type._context),Ve(e),null;case 17:return lt(e.type)&&al(),Ve(e),null;case 19:if(ie(ue),s=e.memoizedState,s===null)return Ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(_e!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=pl(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(ue,ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>Pi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Ve(e),null}else 2*me()-s.renderingStartTime>Pi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=ue.current,te(ue,r?n&1|2:n&1),e):(Ve(e),null);case 22:case 23:return qf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ct&1073741824)!==0&&(Ve(e),e.subtreeFlags&6&&(e.flags|=8192)):Ve(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function NT(t,e){switch(Cf(e),e.tag){case 1:return lt(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ri(),ie(at),ie(Ke),Of(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(ie(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ue),null;case 4:return Ri(),null;case 10:return Af(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var Ea=!1,ze=!1,xT=typeof WeakSet=="function"?WeakSet:Set,R=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function cd(t,e,n){try{n()}catch(r){de(t,e,r)}}var Sg=!1;function AT(t,e){if(Kh=rl,t=p0(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gh={focusedElem:t,selectionRange:n},rl=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Pt(e.type,w),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){de(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return y=Sg,Sg=!1,y}function Ls(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cd(e,n,s)}i=i.next}while(i!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h1(t){var e=t.alternate;e!==null&&(t.alternate=null,h1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[to],delete e[Yh],delete e[hT],delete e[dT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function d1(t){return t.tag===5||t.tag===3||t.tag===4}function kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(r!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}var De=null,bt=!1;function Nn(t,e,n){for(n=n.child;n!==null;)f1(t,e,n),n=n.sibling}function f1(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:ze||ui(n,e);case 6:var r=De,i=bt;De=null,Nn(t,e,n),De=r,bt=i,De!==null&&(bt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(bt?(t=De,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),Xs(t)):Bc(De,n.stateNode));break;case 4:r=De,i=bt,De=n.stateNode.containerInfo,bt=!0,Nn(t,e,n),De=r,bt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&cd(n,e,o),i=i.next}while(i!==r)}Nn(t,e,n);break;case 1:if(!ze&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,e,a)}Nn(t,e,n);break;case 21:Nn(t,e,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Nn(t,e,n),ze=r):Nn(t,e,n);break;default:Nn(t,e,n)}}function Tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xT),e.forEach(function(r){var i=UT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,bt=!1;break e;case 3:De=a.stateNode.containerInfo,bt=!0;break e;case 4:De=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(De===null)throw Error(k(160));f1(s,o,i),De=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){de(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p1(e,t),e=e.sibling}function p1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Bt(t),r&4){try{Ls(3,t,t.return),ou(3,t)}catch(w){de(t,t.return,w)}try{Ls(5,t,t.return)}catch(w){de(t,t.return,w)}}break;case 1:Dt(e,t),Bt(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(Dt(e,t),Bt(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(w){de(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lv(i,s),Mh(a,o);var u=Mh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Bv(i,h):c==="dangerouslySetInnerHTML"?Uv(i,h):c==="children"?Ws(i,h):cf(i,c,h,u)}switch(a){case"input":Ph(i,s);break;case"textarea":$v(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?pi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?pi(i,!!s.multiple,s.defaultValue,!0):pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[to]=s}catch(w){de(t,t.return,w)}}break;case 6:if(Dt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){de(t,t.return,w)}}break;case 3:if(Dt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(w){de(t,t.return,w)}break;case 4:Dt(e,t),Bt(t);break;case 13:Dt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zf=me())),r&4&&Tg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ze=(u=ze)||c,Dt(e,t),ze=u):Dt(e,t),Bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ls(4,d,d.return);break;case 1:ui(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){de(r,n,w)}}break;case 5:ui(d,d.return);break;case 22:if(d.memoizedState!==null){Ig(h);continue}}m!==null?(m.return=d,R=m):Ig(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fv("display",o))}catch(w){de(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){de(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dt(e,t),Bt(t),r&4&&Tg(t);break;case 21:break;default:Dt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(d1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ws(i,""),r.flags&=-33);var s=kg(t);fd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=kg(t);dd(t,a,o);break;default:throw Error(k(161))}}catch(l){de(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RT(t,e,n){R=t,m1(t)}function m1(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ea;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ze;a=Ea;var u=ze;if(Ea=o,(ze=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Ng(i):l!==null?(l.return=o,R=l):Ng(i);for(;s!==null;)R=s,m1(s),s=s.sibling;R=i,Ea=a,ze=u}Cg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,R=s):Cg(t)}}function Cg(t){for(;R!==null;){var e=R;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ze||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Xs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ze||e.flags&512&&hd(e)}catch(d){de(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Ig(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Ng(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){de(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){de(e,i,l)}}var s=e.return;try{hd(e)}catch(l){de(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){de(e,o,l)}}}catch(l){de(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var DT=Math.ceil,yl=In.ReactCurrentDispatcher,Vf=In.ReactCurrentOwner,It=In.ReactCurrentBatchConfig,G=0,xe=null,ve=null,Oe=0,ct=0,ci=lr(0),_e=0,ao=null,br=0,au=0,jf=0,$s=null,it=null,zf=0,Pi=1/0,nn=null,vl=!1,pd=null,Kn=null,_a=!1,Bn=null,wl=0,Ms=0,md=null,Va=-1,ja=0;function Je(){return(G&6)!==0?me():Va!==-1?Va:Va=me()}function Gn(t){return(t.mode&1)===0?1:(G&2)!==0&&Oe!==0?Oe&-Oe:pT.transition!==null?(ja===0&&(ja=Jv()),ja):(t=J,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t)}function Mt(t,e,n,r){if(50<Ms)throw Ms=0,md=null,Error(k(185));Ao(t,n,r),((G&2)===0||t!==xe)&&(t===xe&&((G&2)===0&&(au|=n),_e===4&&Pn(t,Oe)),ut(t,r),n===1&&G===0&&(e.mode&1)===0&&(Pi=me()+500,ru&&ur()))}function ut(t,e){var n=t.callbackNode;pk(t,e);var r=nl(t,t===xe?Oe:0);if(r===0)n!==null&&$m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$m(n),e===1)t.tag===0?fT(xg.bind(null,t)):T0(xg.bind(null,t)),uT(function(){(G&6)===0&&ur()}),n=null;else{switch(Zv(r)){case 1:n=mf;break;case 4:n=Xv;break;case 16:n=tl;break;case 536870912:n=Yv;break;default:n=tl}n=k1(n,g1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function g1(t,e){if(Va=-1,ja=0,(G&6)!==0)throw Error(k(327));var n=t.callbackNode;if(wi()&&t.callbackNode!==n)return null;var r=nl(t,t===xe?Oe:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=El(t,r);else{e=r;var i=G;G|=2;var s=v1();(xe!==t||Oe!==e)&&(nn=null,Pi=me()+500,Tr(t,e));do try{OT();break}catch(a){y1(t,a)}while(1);xf(),yl.current=s,G=i,ve!==null?e=0:(xe=null,Oe=0,e=_e)}if(e!==0){if(e===2&&(i=jh(t),i!==0&&(r=i,e=gd(t,i))),e===1)throw n=ao,Tr(t,0),Pn(t,r),ut(t,me()),n;if(e===6)Pn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!PT(i)&&(e=El(t,r),e===2&&(s=jh(t),s!==0&&(r=s,e=gd(t,s))),e===1))throw n=ao,Tr(t,0),Pn(t,r),ut(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:mr(t,it,nn);break;case 3:if(Pn(t,r),(r&130023424)===r&&(e=zf+500-me(),10<e)){if(nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xh(mr.bind(null,t,it,nn),e);break}mr(t,it,nn);break;case 4:if(Pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DT(r/1960))-r,10<r){t.timeoutHandle=Xh(mr.bind(null,t,it,nn),r);break}mr(t,it,nn);break;case 5:mr(t,it,nn);break;default:throw Error(k(329))}}}return ut(t,me()),t.callbackNode===n?g1.bind(null,t):null}function gd(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=El(t,e),t!==2&&(e=it,it=n,e!==null&&yd(e)),t}function yd(t){it===null?it=t:it.push.apply(it,t)}function PT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e){for(e&=~jf,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function xg(t){if((G&6)!==0)throw Error(k(327));wi();var e=nl(t,0);if((e&1)===0)return ut(t,me()),null;var n=El(t,e);if(t.tag!==0&&n===2){var r=jh(t);r!==0&&(e=r,n=gd(t,r))}if(n===1)throw n=ao,Tr(t,0),Pn(t,e),ut(t,me()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,it,nn),ut(t,me()),null}function Hf(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Pi=me()+500,ru&&ur())}}function Or(t){Bn!==null&&Bn.tag===0&&(G&6)===0&&wi();var e=G;G|=1;var n=It.transition,r=J;try{if(It.transition=null,J=1,t)return t()}finally{J=r,It.transition=n,G=e,(G&6)===0&&ur()}}function qf(){ct=ci.current,ie(ci)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lT(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Ri(),ie(at),ie(Ke),Of();break;case 5:bf(r);break;case 4:Ri();break;case 13:ie(ue);break;case 19:ie(ue);break;case 10:Af(r.type._context);break;case 22:case 23:qf()}n=n.return}if(xe=t,ve=t=Qn(t.current,null),Oe=ct=e,_e=0,ao=null,jf=au=br=0,it=$s=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wr=null}return t}function y1(t,e){do{var n=ve;try{if(xf(),Ua.current=gl,ml){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ml=!1}if(Pr=0,Ne=Ee=ce=null,Os=!1,io=0,Vf.current=null,n===null||n.return===null){_e=1,ao=e,ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=mg(o);if(m!==null){m.flags&=-257,gg(m,o,a,s,e),m.mode&1&&pg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if((e&1)===0){pg(s,u,e),Wf();break e}l=Error(k(426))}}else if(oe&&a.mode&1){var _=mg(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),gg(_,o,a,s,e),If(Di(l,a));break e}}s=l=Di(l,a),_e!==4&&(_e=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=e1(s,l,e);ag(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Kn===null||!Kn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=t1(s,a,e);ag(s,E);break e}}s=s.return}while(s!==null)}E1(n)}catch(I){e=I,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function v1(){var t=yl.current;return yl.current=gl,t===null?gl:t}function Wf(){(_e===0||_e===3||_e===2)&&(_e=4),xe===null||(br&268435455)===0&&(au&268435455)===0||Pn(xe,Oe)}function El(t,e){var n=G;G|=2;var r=v1();(xe!==t||Oe!==e)&&(nn=null,Tr(t,e));do try{bT();break}catch(i){y1(t,i)}while(1);if(xf(),G=n,yl.current=r,ve!==null)throw Error(k(261));return xe=null,Oe=0,_e}function bT(){for(;ve!==null;)w1(ve)}function OT(){for(;ve!==null&&!sk();)w1(ve)}function w1(t){var e=S1(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?E1(t):ve=e,Vf.current=null}function E1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=IT(n,e,ct),n!==null){ve=n;return}}else{if(n=NT(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,ve=null;return}}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);_e===0&&(_e=5)}function mr(t,e,n){var r=J,i=It.transition;try{It.transition=null,J=1,LT(t,e,n,r)}finally{It.transition=i,J=r}return null}function LT(t,e,n,r){do wi();while(Bn!==null);if((G&6)!==0)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mk(t,s),t===xe&&(ve=xe=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||_a||(_a=!0,k1(tl,function(){return wi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=It.transition,It.transition=null;var o=J;J=1;var a=G;G|=4,Vf.current=null,AT(t,n),p1(n,t),tT(Gh),rl=!!Kh,Gh=Kh=null,t.current=n,RT(n),ok(),G=a,J=o,It.transition=s}else t.current=n;if(_a&&(_a=!1,Bn=t,wl=i),s=t.pendingLanes,s===0&&(Kn=null),uk(n.stateNode),ut(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vl)throw vl=!1,t=pd,pd=null,t;return(wl&1)!==0&&t.tag!==0&&wi(),s=t.pendingLanes,(s&1)!==0?t===md?Ms++:(Ms=0,md=t):Ms=0,ur(),null}function wi(){if(Bn!==null){var t=Zv(wl),e=It.transition,n=J;try{if(It.transition=null,J=16>t?16:t,Bn===null)var r=!1;else{if(t=Bn,Bn=null,wl=0,(G&6)!==0)throw Error(k(331));var i=G;for(G|=4,R=t.current;R!==null;){var s=R,o=s.child;if((R.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ls(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,m=c.return;if(h1(c),c===u){R=null;break}if(d!==null){d.return=m,R=d;break}R=m}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}R=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ls(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,R=g;break e}R=s.return}}var p=t.current;for(R=p;R!==null;){o=R;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,R=v;else e:for(o=p;R!==null;){if(a=R,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(I){de(a,a.return,I)}if(a===o){R=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,R=E;break e}R=a.return}}if(G=i,ur(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{J=n,It.transition=e}}return!1}function Ag(t,e,n){e=Di(n,e),e=e1(t,e,1),t=Wn(t,e,1),e=Je(),t!==null&&(Ao(t,1,e),ut(t,e))}function de(t,e,n){if(t.tag===3)Ag(t,t,n);else for(;e!==null;){if(e.tag===3){Ag(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Di(n,t),t=t1(e,t,1),e=Wn(e,t,1),t=Je(),e!==null&&(Ao(e,1,t),ut(e,t));break}}e=e.return}}function $T(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Je(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(Oe&n)===n&&(_e===4||_e===3&&(Oe&130023424)===Oe&&500>me()-zf?Tr(t,0):jf|=n),ut(t,e)}function _1(t,e){e===0&&((t.mode&1)===0?e=1:(e=ha,ha<<=1,(ha&130023424)===0&&(ha=4194304)));var n=Je();t=vn(t,e),t!==null&&(Ao(t,e,n),ut(t,n))}function MT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_1(t,n)}function UT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),_1(t,n)}var S1;S1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)st=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return st=!1,CT(t,e,n);st=(t.flags&131072)!==0}else st=!1,oe&&(e.flags&1048576)!==0&&C0(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(t,e),t=e.pendingProps;var i=Ni(e,Ke.current);vi(e,n),i=$f(null,e,r,t,i,n);var s=Mf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,ll(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Df(e),i.updater=iu,e.stateNode=i,i._reactInternals=e,rd(e,r,t,n),e=od(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Tf(e),Xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BT(r),t=Pt(r,t),i){case 0:e=sd(null,e,r,t,n);break e;case 1:e=wg(null,e,r,t,n);break e;case 11:e=yg(null,e,r,t,n);break e;case 14:e=vg(null,e,r,Pt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),wg(t,e,r,i,n);case 3:e:{if(s1(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,A0(t,e),fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Di(Error(k(423)),e),e=Eg(t,e,r,n,i);break e}else if(r!==i){i=Di(Error(k(424)),e),e=Eg(t,e,r,n,i);break e}else for(ht=qn(e.stateNode.containerInfo.firstChild),ft=e,oe=!0,Ot=null,n=b0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=wn(t,e,n);break e}Xe(t,e,r,n)}e=e.child}return e;case 5:return O0(e),t===null&&ed(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qh(r,i)?o=null:s!==null&&Qh(r,s)&&(e.flags|=32),i1(t,e),Xe(t,e,o,n),e.child;case 6:return t===null&&ed(e),null;case 13:return o1(t,e,n);case 4:return Pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):Xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),yg(t,e,r,i,n);case 7:return Xe(t,e,e.pendingProps,n),e.child;case 8:return Xe(t,e,e.pendingProps.children,n),e.child;case 12:return Xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(hl,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!at.current){e=wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),td(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vi(e,n),i=Nt(i),r=r(i),e.flags|=1,Xe(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),vg(t,e,r,i,n);case 15:return n1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Ba(t,e),e.tag=1,lt(r)?(t=!0,ll(e)):t=!1,vi(e,n),D0(e,r,i),rd(e,r,i,n),od(null,e,r,!0,t,n);case 19:return a1(t,e,n);case 22:return r1(t,e,n)}throw Error(k(156,e.tag))};function k1(t,e){return Qv(t,e)}function FT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new FT(t,e,n,r)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BT(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===df)return 11;if(t===ff)return 14}return 2}function Qn(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Cr(n.children,i,s,e);case hf:o=8,i|=8;break;case Nh:return t=Ct(12,n,e,i|2),t.elementType=Nh,t.lanes=s,t;case xh:return t=Ct(13,n,e,i),t.elementType=xh,t.lanes=s,t;case Ah:return t=Ct(19,n,e,i),t.elementType=Ah,t.lanes=s,t;case Pv:return lu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rv:o=10;break e;case Dv:o=9;break e;case df:o=11;break e;case ff:o=14;break e;case An:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=Pv,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gf(t,e,n,r,i,s,o,a,l){return t=new VT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),t}function jT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function T1(t){if(!t)return er;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(lt(n))return k0(t,n,e)}return e}function C1(t,e,n,r,i,s,o,a,l){return t=Gf(n,r,!0,t,i,s,o,a,l),t.context=T1(null),n=t.current,r=Je(),i=Gn(n),s=hn(r,i),s.callback=e!=null?e:null,Wn(n,s,i),t.current.lanes=i,Ao(t,i,r),ut(t,r),t}function uu(t,e,n,r){var i=e.current,s=Je(),o=Gn(i);return n=T1(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(i,e,o),t!==null&&(Mt(t,i,o,s),Ma(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Rg(t,e),(t=t.alternate)&&Rg(t,e)}function zT(){return null}var I1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xf(t){this._internalRoot=t}cu.prototype.render=Xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));uu(t,e,null,null)};cu.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){uu(null,t,null,null)}),e[yn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=n0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&i0(t)}};function Yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function HT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_l(o);s.call(u)}}var o=C1(e,r,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[yn]=o.current,Zs(t.nodeType===8?t.parentNode:t),Or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_l(l);a.call(u)}}var l=Gf(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=l,t[yn]=l.current,Zs(t.nodeType===8?t.parentNode:t),Or(function(){uu(e,l,n,r)}),l}function du(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_l(o);a.call(l)}}uu(e,o,t,i)}else o=HT(n,e,t,i,r);return _l(o)}e0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Es(e.pendingLanes);n!==0&&(gf(e,n|1),ut(e,me()),(G&6)===0&&(Pi=me()+500,ur()))}break;case 13:Or(function(){var r=vn(t,1);if(r!==null){var i=Je();Mt(r,t,1,i)}}),Qf(t,1)}};yf=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=Je();Mt(e,t,134217728,n)}Qf(t,134217728)}};t0=function(t){if(t.tag===13){var e=Gn(t),n=vn(t,e);if(n!==null){var r=Je();Mt(n,t,e,r)}Qf(t,e)}};n0=function(){return J};r0=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Fh=function(t,e,n){switch(e){case"input":if(Ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nu(r);if(!i)throw Error(k(90));Ov(r),Ph(r,i)}}}break;case"textarea":$v(t,n);break;case"select":e=n.value,e!=null&&pi(t,!!n.multiple,e,!1)}};zv=Hf;Hv=Or;var qT={usingClientEntryPoint:!1,Events:[Do,ii,nu,Vv,jv,Hf]},ms={findFiberByHostInstance:vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},WT={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kv(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||zT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{Jl=Sa.inject(WT),Wt=Sa}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qT;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yf(e))throw Error(k(200));return jT(t,e,null,n)};vt.createRoot=function(t,e){if(!Yf(t))throw Error(k(299));var n=!1,r="",i=I1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gf(t,1,!1,null,null,n,!1,r,i),t[yn]=e.current,Zs(t.nodeType===8?t.parentNode:t),new Xf(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Kv(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return Or(t)};vt.hydrate=function(t,e,n){if(!hu(e))throw Error(k(200));return du(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!Yf(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=I1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[yn]=e.current,Zs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cu(e)};vt.render=function(t,e,n){if(!hu(e))throw Error(k(200));return du(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!hu(t))throw Error(k(40));return t._reactRootContainer?(Or(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1};vt.unstable_batchedUpdates=Hf;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return du(t,e,n,!1,r)};vt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=vt})(af);var Pg=af.exports;Ch.createRoot=Pg.createRoot,Ch.hydrateRoot=Pg.hydrateRoot;/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sl.apply(this,arguments)}var Vn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vn||(Vn={}));const bg="popstate";function KT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return vd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wd(i)}return QT(e,n,null,t)}function GT(){return Math.random().toString(36).substr(2,8)}function Og(t){return{usr:t.state,key:t.key}}function vd(t,e,n,r){return n===void 0&&(n=null),Sl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wi(e):e,{state:n,key:e&&e.key||r||GT()})}function wd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vn.Pop,l=null;function u(){a=Vn.Pop,l&&l({action:a,location:d.location})}function c(m,y){a=Vn.Push;let w=vd(d.location,m,y);n&&n(w,m);let _=Og(w),g=d.createHref(w);try{o.pushState(_,"",g)}catch{i.location.assign(g)}s&&l&&l({action:a,location:w})}function h(m,y){a=Vn.Replace;let w=vd(d.location,m,y);n&&n(w,m);let _=Og(w),g=d.createHref(w);o.replaceState(_,"",g),s&&l&&l({action:a,location:w})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bg,u),l=m,()=>{i.removeEventListener(bg,u),l=null}},createHref(m){return e(i,m)},push:c,replace:h,go(m){return o.go(m)}};return d}var Lg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lg||(Lg={}));function XT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Wi(e):e,i=x1(r.pathname||"/",n);if(i==null)return null;let s=N1(t);YT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=oC(s[a],i);return o}function N1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Ze(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=Xn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),N1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:iC(a,i.index),routesMeta:l})}),e}function YT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JT=/^:\w+$/,ZT=3,eC=2,tC=1,nC=10,rC=-2,$g=t=>t==="*";function iC(t,e){let n=t.split("/"),r=n.length;return n.some($g)&&(r+=rC),e&&(r+=eC),n.filter(i=>!$g(i)).reduce((i,s)=>i+(JT.test(s)?ZT:s===""?tC:nC),r)}function sC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=aC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Xn([i,c.pathname]),pathnameBase:dC(Xn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Xn([i,c.pathnameBase]))}return s}function aC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=uC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),A1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function uC(t,e){try{return decodeURIComponent(t)}catch(n){return A1(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function x1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function A1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Wi(t):t;return{pathname:n?n.startsWith("/")?n:hC(n,e):e,search:fC(r),hash:pC(i)}}function hC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function R1(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?Wi(t):Sl({},t),s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=cC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),dC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class mC{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function gC(t){return t instanceof mC}var fu={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yC=x.exports,vC=Symbol.for("react.element"),wC=Symbol.for("react.fragment"),EC=Object.prototype.hasOwnProperty,_C=yC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SC={key:!0,ref:!0,__self:!0,__source:!0};function D1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EC.call(e,r)&&!SC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vC,type:t,key:s,ref:o,props:i,_owner:_C.current}}pu.Fragment=wC;pu.jsx=D1;pu.jsxs=D1;(function(t){t.exports=pu})(fu);const Ht=fu.exports.Fragment,f=fu.exports.jsx,S=fu.exports.jsxs;/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ed(){return Ed=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ed.apply(this,arguments)}function kC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const TC=typeof Object.is=="function"?Object.is:kC,{useState:CC,useEffect:IC,useLayoutEffect:NC,useDebugValue:xC}=Th;function AC(t,e,n){const r=e(),[{inst:i},s]=CC({inst:{value:r,getSnapshot:e}});return NC(()=>{i.value=r,i.getSnapshot=e,Xc(i)&&s({inst:i})},[t,r,e]),IC(()=>(Xc(i)&&s({inst:i}),t(()=>{Xc(i)&&s({inst:i})})),[t]),xC(r),r}function Xc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!TC(n,r)}catch{return!0}}function RC(t,e,n){return e()}const DC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PC=!DC,bC=PC?RC:AC;"useSyncExternalStore"in Th&&(t=>t.useSyncExternalStore)(Th);const OC=x.exports.createContext(null),LC=x.exports.createContext(null),Jf=x.exports.createContext(null),Zf=x.exports.createContext(null),mu=x.exports.createContext(null),Ki=x.exports.createContext({outlet:null,matches:[]}),P1=x.exports.createContext(null);function $C(t,e){let{relative:n}=e===void 0?{}:e;Gi()||Ze(!1);let{basename:r,navigator:i}=x.exports.useContext(Zf),{hash:s,pathname:o,search:a}=O1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Gi(){return x.exports.useContext(mu)!=null}function gu(){return Gi()||Ze(!1),x.exports.useContext(mu).location}function b1(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function bo(){Gi()||Ze(!1);let{basename:t,navigator:e}=x.exports.useContext(Zf),{matches:n}=x.exports.useContext(Ki),{pathname:r}=gu(),i=JSON.stringify(b1(n).map(a=>a.pathnameBase)),s=x.exports.useRef(!1);return x.exports.useEffect(()=>{s.current=!0}),x.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=R1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Xn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function MC(){let{matches:t}=x.exports.useContext(Ki),e=t[t.length-1];return e?e.params:{}}function O1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.exports.useContext(Ki),{pathname:i}=gu(),s=JSON.stringify(b1(r).map(o=>o.pathnameBase));return x.exports.useMemo(()=>R1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function UC(t,e){Gi()||Ze(!1);let n=x.exports.useContext(Jf),{matches:r}=x.exports.useContext(Ki),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=gu(),l;if(e){var u;let y=typeof e=="string"?Wi(e):e;o==="/"||((u=y.pathname)==null?void 0:u.startsWith(o))||Ze(!1),l=y}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=XT(t,{pathname:h}),m=jC(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Xn([o,y.pathname]),pathnameBase:y.pathnameBase==="/"?o:Xn([o,y.pathnameBase])})),r,n||void 0);return e?f(mu.Provider,{value:{location:Ed({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Vn.Pop},children:m}):m}function FC(){let t=HC(),e=gC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return S(Ht,{children:[f("h2",{children:"Unhandled Thrown Error!"}),f("h3",{style:{fontStyle:"italic"},children:e}),n?f("pre",{style:i,children:n}):null,f("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),S("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",f("code",{style:s,children:"errorElement"})," props on\xA0",f("code",{style:s,children:"<Route>"})]})]})}class BC extends x.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?f(P1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function VC(t){let{routeContext:e,match:n,children:r}=t,i=x.exports.useContext(OC);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),f(Ki.Provider,{value:e,children:r})}function jC(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ze(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||f(FC,{}):null,c=()=>f(VC,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?f(BC,{location:n.location,component:u,error:l,children:c()}):c()},null)}var _d;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(_d||(_d={}));function zC(t){let e=x.exports.useContext(Jf);return e||Ze(!1),e}function HC(){var t;let e=x.exports.useContext(P1),n=zC(_d.UseRouteError),r=x.exports.useContext(Ki),i=r.matches[r.matches.length-1];return e||(r||Ze(!1),i.route.id||Ze(!1),(t=n.errors)==null?void 0:t[i.route.id])}function qC(t){let{to:e,replace:n,state:r,relative:i}=t;Gi()||Ze(!1);let s=x.exports.useContext(Jf),o=bo();return x.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function tn(t){Ze(!1)}function WC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vn.Pop,navigator:s,static:o=!1}=t;Gi()&&Ze(!1);let a=e.replace(/^\/*/,"/"),l=x.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Wi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=x.exports.useMemo(()=>{let w=x1(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return y==null?null:f(Zf.Provider,{value:l,children:f(mu.Provider,{children:n,value:{location:y,navigationType:i}})})}function KC(t){let{children:e,location:n}=t,r=x.exports.useContext(LC),i=r&&!e?r.router.routes:Sd(e);return UC(i,n)}var Mg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Mg||(Mg={}));new Promise(()=>{});function Sd(t,e){e===void 0&&(e=[]);let n=[];return x.exports.Children.forEach(t,(r,i)=>{if(!x.exports.isValidElement(r))return;if(r.type===x.exports.Fragment){n.push.apply(n,Sd(r.props.children,e));return}r.type!==tn&&Ze(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Sd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function GC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XC(t,e){return t.button===0&&(!e||e==="_self")&&!QC(t)}const YC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function JC(t){let{basename:e,children:n,window:r}=t,i=x.exports.useRef();i.current==null&&(i.current=KT({window:r,v5Compat:!0}));let s=i.current,[o,a]=x.exports.useState({action:s.action,location:s.location});return x.exports.useLayoutEffect(()=>s.listen(a),[s]),f(WC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const sn=x.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=GC(e,YC),d=$C(u,{relative:i}),m=ZC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(w){r&&r(w),w.defaultPrevented||m(w)}return f("a",{...h,href:d,onClick:s?r:y,ref:n,target:l})});function ZC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=bo(),l=gu(),u=O1(t,{relative:o});return x.exports.useCallback(c=>{if(XC(c,n)){c.preventDefault();let h=r!==void 0?r:wd(l)===wd(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var L1={exports:{}},$1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=x.exports;function eI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tI=typeof Object.is=="function"?Object.is:eI,nI=bi.useState,rI=bi.useEffect,iI=bi.useLayoutEffect,sI=bi.useDebugValue;function oI(t,e){var n=e(),r=nI({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return iI(function(){i.value=n,i.getSnapshot=e,Yc(i)&&s({inst:i})},[t,n,e]),rI(function(){return Yc(i)&&s({inst:i}),t(function(){Yc(i)&&s({inst:i})})},[t]),sI(n),n}function Yc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tI(t,n)}catch{return!0}}function aI(t,e){return e()}var lI=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?aI:oI;$1.useSyncExternalStore=bi.useSyncExternalStore!==void 0?bi.useSyncExternalStore:lI;(function(t){t.exports=$1})(L1);var M1={exports:{}},U1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=x.exports,uI=L1.exports;function cI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hI=typeof Object.is=="function"?Object.is:cI,dI=uI.useSyncExternalStore,fI=yu.useRef,pI=yu.useEffect,mI=yu.useMemo,gI=yu.useDebugValue;U1.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=fI(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=mI(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var y=o.value;if(i(y,m))return h=y}return h=m}if(y=h,hI(c,m))return y;var w=r(m);return i!==void 0&&i(y,w)?y:(c=m,h=w)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=dI(t,s[0],s[1]);return pI(function(){o.hasValue=!0,o.value=a},[a]),gI(a),a};(function(t){t.exports=U1})(M1);function yI(t){t()}let F1=yI;const vI=t=>F1=t,wI=()=>F1,tr=x.exports.createContext(null);function B1(){return x.exports.useContext(tr)}const EI=()=>{throw new Error("uSES not initialized!")};let V1=EI;const _I=t=>{V1=t},SI=(t,e)=>t===e;function kI(t=tr){const e=t===tr?B1:()=>x.exports.useContext(t);return function(r,i=SI){const{store:s,subscription:o,getServerState:a}=e(),l=V1(o.addNestedSub,s.getState,a||s.getState,r,i);return x.exports.useDebugValue(l),l}}const vu=kI();var j1={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=typeof Symbol=="function"&&Symbol.for,ep=Re?Symbol.for("react.element"):60103,tp=Re?Symbol.for("react.portal"):60106,wu=Re?Symbol.for("react.fragment"):60107,Eu=Re?Symbol.for("react.strict_mode"):60108,_u=Re?Symbol.for("react.profiler"):60114,Su=Re?Symbol.for("react.provider"):60109,ku=Re?Symbol.for("react.context"):60110,np=Re?Symbol.for("react.async_mode"):60111,Tu=Re?Symbol.for("react.concurrent_mode"):60111,Cu=Re?Symbol.for("react.forward_ref"):60112,Iu=Re?Symbol.for("react.suspense"):60113,TI=Re?Symbol.for("react.suspense_list"):60120,Nu=Re?Symbol.for("react.memo"):60115,xu=Re?Symbol.for("react.lazy"):60116,CI=Re?Symbol.for("react.block"):60121,II=Re?Symbol.for("react.fundamental"):60117,NI=Re?Symbol.for("react.responder"):60118,xI=Re?Symbol.for("react.scope"):60119;function Et(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ep:switch(t=t.type,t){case np:case Tu:case wu:case _u:case Eu:case Iu:return t;default:switch(t=t&&t.$$typeof,t){case ku:case Cu:case xu:case Nu:case Su:return t;default:return e}}case tp:return e}}}function z1(t){return Et(t)===Tu}Z.AsyncMode=np;Z.ConcurrentMode=Tu;Z.ContextConsumer=ku;Z.ContextProvider=Su;Z.Element=ep;Z.ForwardRef=Cu;Z.Fragment=wu;Z.Lazy=xu;Z.Memo=Nu;Z.Portal=tp;Z.Profiler=_u;Z.StrictMode=Eu;Z.Suspense=Iu;Z.isAsyncMode=function(t){return z1(t)||Et(t)===np};Z.isConcurrentMode=z1;Z.isContextConsumer=function(t){return Et(t)===ku};Z.isContextProvider=function(t){return Et(t)===Su};Z.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ep};Z.isForwardRef=function(t){return Et(t)===Cu};Z.isFragment=function(t){return Et(t)===wu};Z.isLazy=function(t){return Et(t)===xu};Z.isMemo=function(t){return Et(t)===Nu};Z.isPortal=function(t){return Et(t)===tp};Z.isProfiler=function(t){return Et(t)===_u};Z.isStrictMode=function(t){return Et(t)===Eu};Z.isSuspense=function(t){return Et(t)===Iu};Z.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===wu||t===Tu||t===_u||t===Eu||t===Iu||t===TI||typeof t=="object"&&t!==null&&(t.$$typeof===xu||t.$$typeof===Nu||t.$$typeof===Su||t.$$typeof===ku||t.$$typeof===Cu||t.$$typeof===II||t.$$typeof===NI||t.$$typeof===xI||t.$$typeof===CI)};Z.typeOf=Et;(function(t){t.exports=Z})(j1);var H1=j1.exports,AI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},RI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},q1={};q1[H1.ForwardRef]=AI;q1[H1.Memo]=RI;var DI={exports:{}},ee={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=Symbol.for("react.element"),ip=Symbol.for("react.portal"),Au=Symbol.for("react.fragment"),Ru=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),Pu=Symbol.for("react.provider"),bu=Symbol.for("react.context"),PI=Symbol.for("react.server_context"),Ou=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),Uu=Symbol.for("react.lazy"),bI=Symbol.for("react.offscreen"),W1;W1=Symbol.for("react.module.reference");function At(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case rp:switch(t=t.type,t){case Au:case Du:case Ru:case Lu:case $u:return t;default:switch(t=t&&t.$$typeof,t){case PI:case bu:case Ou:case Uu:case Mu:case Pu:return t;default:return e}}case ip:return e}}}ee.ContextConsumer=bu;ee.ContextProvider=Pu;ee.Element=rp;ee.ForwardRef=Ou;ee.Fragment=Au;ee.Lazy=Uu;ee.Memo=Mu;ee.Portal=ip;ee.Profiler=Du;ee.StrictMode=Ru;ee.Suspense=Lu;ee.SuspenseList=$u;ee.isAsyncMode=function(){return!1};ee.isConcurrentMode=function(){return!1};ee.isContextConsumer=function(t){return At(t)===bu};ee.isContextProvider=function(t){return At(t)===Pu};ee.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===rp};ee.isForwardRef=function(t){return At(t)===Ou};ee.isFragment=function(t){return At(t)===Au};ee.isLazy=function(t){return At(t)===Uu};ee.isMemo=function(t){return At(t)===Mu};ee.isPortal=function(t){return At(t)===ip};ee.isProfiler=function(t){return At(t)===Du};ee.isStrictMode=function(t){return At(t)===Ru};ee.isSuspense=function(t){return At(t)===Lu};ee.isSuspenseList=function(t){return At(t)===$u};ee.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Au||t===Du||t===Ru||t===Lu||t===$u||t===bI||typeof t=="object"&&t!==null&&(t.$$typeof===Uu||t.$$typeof===Mu||t.$$typeof===Pu||t.$$typeof===bu||t.$$typeof===Ou||t.$$typeof===W1||t.getModuleId!==void 0)};ee.typeOf=At;(function(t){t.exports=ee})(DI);function OI(){const t=wI();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Ug={notify(){},get:()=>[]};function LI(t,e){let n,r=Ug;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=OI())}function u(){n&&(n(),n=void 0,r.clear(),r=Ug)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const $I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MI=$I?x.exports.useLayoutEffect:x.exports.useEffect;function UI({store:t,context:e,children:n,serverState:r}){const i=x.exports.useMemo(()=>{const a=LI(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=x.exports.useMemo(()=>t.getState(),[t]);return MI(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),f((e||tr).Provider,{value:i,children:n})}function K1(t=tr){const e=t===tr?B1:()=>x.exports.useContext(t);return function(){const{store:r}=e();return r}}const FI=K1();function BI(t=tr){const e=t===tr?FI:K1(t);return function(){return e().dispatch}}const Fu=BI();_I(M1.exports.useSyncExternalStoreWithSelector);vI(af.exports.unstable_batchedUpdates);const G1=Yl.createContext({}),Q1=!0;function VI({baseColor:t,highlightColor:e,width:n,height:r,borderRadius:i,circle:s,direction:o,duration:a,enableAnimation:l=Q1}){const u={};return o==="rtl"&&(u["--animation-direction"]="reverse"),typeof a=="number"&&(u["--animation-duration"]=`${a}s`),l||(u["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(u.width=n),(typeof r=="string"||typeof r=="number")&&(u.height=r),(typeof i=="string"||typeof i=="number")&&(u.borderRadius=i),s&&(u.borderRadius="50%"),typeof t<"u"&&(u["--base-color"]=t),typeof e<"u"&&(u["--highlight-color"]=e),u}function kt({count:t=1,wrapper:e,className:n,containerClassName:r,containerTestId:i,circle:s=!1,style:o,...a}){var l,u,c;const h=Yl.useContext(G1),d={...a};for(const[v,E]of Object.entries(a))typeof E>"u"&&delete d[v];const m={...h,...d,circle:s},y={...o,...VI(m)};let w="react-loading-skeleton";n&&(w+=` ${n}`);const _=(l=m.inline)!==null&&l!==void 0?l:!1,g=[],p=Math.ceil(t);for(let v=0;v<p;v++){let E=y;if(p>t&&v===p-1){const N=(u=E.width)!==null&&u!==void 0?u:"100%",A=t%1,P=typeof N=="number"?N*A:`calc(${N} * ${A})`;E={...E,width:P}}const I=f("span",{className:w,style:E,children:"\u200C"},v);_?g.push(I):g.push(S(Ht,{children:[I,f("br",{})]}))}return f("span",{className:r,"data-testid":i,"aria-live":"polite","aria-busy":(c=m.enableAnimation)!==null&&c!==void 0?c:Q1,children:e?g.map((v,E)=>f(e,{children:v},E)):g})}function jI({children:t,...e}){return f(G1.Provider,{value:e,children:t})}function Lt(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function nr(t){return!!t&&!!t[se]}function En(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===YI}(t)||Array.isArray(t)||!!t[qg]||!!t.constructor[qg]||sp(t)||op(t))}function Lr(t,e,n){n===void 0&&(n=!1),Qi(t)===0?(n?Object.keys:_i)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Qi(t){var e=t[se];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:sp(t)?2:op(t)?3:0}function Ei(t,e){return Qi(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function zI(t,e){return Qi(t)===2?t.get(e):t[e]}function X1(t,e,n){var r=Qi(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function Y1(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function sp(t){return QI&&t instanceof Map}function op(t){return XI&&t instanceof Set}function gr(t){return t.o||t.t}function ap(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Z1(t);delete e[se];for(var n=_i(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function lp(t,e){return e===void 0&&(e=!1),up(t)||nr(t)||!En(t)||(Qi(t)>1&&(t.set=t.add=t.clear=t.delete=HI),Object.freeze(t),e&&Lr(t,function(n,r){return lp(r,!0)},!0)),t}function HI(){Lt(2)}function up(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Gt(t){var e=Id[t];return e||Lt(18,t),e}function qI(t,e){Id[t]||(Id[t]=e)}function kd(){return lo}function Jc(t,e){e&&(Gt("Patches"),t.u=[],t.s=[],t.v=e)}function kl(t){Td(t),t.p.forEach(WI),t.p=null}function Td(t){t===lo&&(lo=t.l)}function Fg(t){return lo={p:[],l:lo,h:t,m:!0,_:0}}function WI(t){var e=t[se];e.i===0||e.i===1?e.j():e.O=!0}function Zc(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||Gt("ES5").S(e,t,r),r?(n[se].P&&(kl(e),Lt(4)),En(t)&&(t=Tl(e,t),e.l||Cl(e,t)),e.u&&Gt("Patches").M(n[se].t,t,e.u,e.s)):t=Tl(e,n,[]),kl(e),e.u&&e.v(e.u,e.s),t!==J1?t:void 0}function Tl(t,e,n){if(up(e))return e;var r=e[se];if(!r)return Lr(e,function(s,o){return Bg(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Cl(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=ap(r.k):r.o;Lr(r.i===3?new Set(i):i,function(s,o){return Bg(t,r,i,s,o,n)}),Cl(t,i,!1),n&&t.u&&Gt("Patches").R(r,n,t.u,t.s)}return r.o}function Bg(t,e,n,r,i,s){if(nr(i)){var o=Tl(t,i,s&&e&&e.i!==3&&!Ei(e.D,r)?s.concat(r):void 0);if(X1(n,r,o),!nr(o))return;t.m=!1}if(En(i)&&!up(i)){if(!t.h.F&&t._<1)return;Tl(t,i),e&&e.A.l||Cl(t,i)}}function Cl(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&lp(e,n)}function eh(t,e){var n=t[se];return(n?gr(n):t)[e]}function Vg(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function bn(t){t.P||(t.P=!0,t.l&&bn(t.l))}function th(t){t.o||(t.o=ap(t.t))}function Cd(t,e,n){var r=sp(e)?Gt("MapSet").N(e,n):op(e)?Gt("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:kd(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=uo;o&&(l=[a],u=Ss);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Gt("ES5").J(e,n);return(n?n.A:kd()).p.push(r),r}function KI(t){return nr(t)||Lt(22,t),function e(n){if(!En(n))return n;var r,i=n[se],s=Qi(n);if(i){if(!i.P&&(i.i<4||!Gt("ES5").K(i)))return i.t;i.I=!0,r=jg(n,s),i.I=!1}else r=jg(n,s);return Lr(r,function(o,a){i&&zI(i.t,o)===a||X1(r,o,e(a))}),s===3?new Set(r):r}(t)}function jg(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return ap(t)}function GI(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[se];return uo.get(l,s)},set:function(l){var u=this[se];uo.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][se];if(!a.P)switch(a.i){case 5:r(a)&&bn(a);break;case 4:n(a)&&bn(a)}}}function n(s){for(var o=s.t,a=s.k,l=_i(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==se){var h=o[c];if(h===void 0&&!Ei(o,c))return!0;var d=a[c],m=d&&d[se];if(m?m.t!==h:!Y1(d,h))return!0}}var y=!!o[se];return l.length!==_i(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};qI("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),m=0;m<h.length;m++)Object.defineProperty(d,""+m,t(m,!0));return d}var y=Z1(h);delete y[se];for(var w=_i(y),_=0;_<w.length;_++){var g=w[_];y[g]=t(g,c||!!y[g].enumerable)}return Object.create(Object.getPrototypeOf(h),y)}(a,s),u={i:a?5:4,A:o?o.A:kd(),P:!1,I:!1,D:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,se,{value:u,writable:!0}),l},S:function(s,o,a){a?nr(o)&&o[se].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[se];if(c){var h=c.t,d=c.k,m=c.D,y=c.i;if(y===4)Lr(d,function(v){v!==se&&(h[v]!==void 0||Ei(h,v)?m[v]||l(d[v]):(m[v]=!0,bn(c)))}),Lr(h,function(v){d[v]!==void 0||Ei(d,v)||(m[v]=!1,bn(c))});else if(y===5){if(r(c)&&(bn(c),m.length=!0),d.length<h.length)for(var w=d.length;w<h.length;w++)m[w]=!1;else for(var _=h.length;_<d.length;_++)m[_]=!0;for(var g=Math.min(d.length,h.length),p=0;p<g;p++)d.hasOwnProperty(p)||(m[p]=!0),m[p]===void 0&&l(d[p])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var zg,lo,cp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",QI=typeof Map<"u",XI=typeof Set<"u",Hg=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",J1=cp?Symbol.for("immer-nothing"):((zg={})["immer-nothing"]=!0,zg),qg=cp?Symbol.for("immer-draftable"):"__$immer_draftable",se=cp?Symbol.for("immer-state"):"__$immer_state",YI=""+Object.prototype.constructor,_i=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Z1=Object.getOwnPropertyDescriptors||function(t){var e={};return _i(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Id={},uo={get:function(t,e){if(e===se)return t;var n=gr(t);if(!Ei(n,e))return function(i,s,o){var a,l=Vg(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!En(r)?r:r===eh(t.t,e)?(th(t),t.o[e]=Cd(t.A.h,r,t)):r},has:function(t,e){return e in gr(t)},ownKeys:function(t){return Reflect.ownKeys(gr(t))},set:function(t,e,n){var r=Vg(gr(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=eh(gr(t),e),s=i==null?void 0:i[se];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(Y1(n,i)&&(n!==void 0||Ei(t.t,e)))return!0;th(t),bn(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return eh(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,th(t),bn(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=gr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){Lt(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Lt(12)}},Ss={};Lr(uo,function(t,e){Ss[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ss.deleteProperty=function(t,e){return Ss.set.call(this,t,e,void 0)},Ss.set=function(t,e,n){return uo.set.call(this,t[0],e,n,t[0])};var JI=function(){function t(n){var r=this;this.g=Hg,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(w){var _=this;w===void 0&&(w=a);for(var g=arguments.length,p=Array(g>1?g-1:0),v=1;v<g;v++)p[v-1]=arguments[v];return l.produce(w,function(E){var I;return(I=s).call.apply(I,[_,E].concat(p))})}}var u;if(typeof s!="function"&&Lt(6),o!==void 0&&typeof o!="function"&&Lt(7),En(i)){var c=Fg(r),h=Cd(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?kl(c):Td(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(w){return Jc(c,o),Zc(w,c)},function(w){throw kl(c),w}):(Jc(c,o),Zc(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===J1&&(u=void 0),r.F&&lp(u,!0),o){var m=[],y=[];Gt("Patches").M(i,u,m,y),o(m,y)}return u}Lt(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(m){return i.apply(void 0,[m].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){En(n)||Lt(8),nr(n)&&(n=KI(n));var r=Fg(this),i=Cd(this,n,void 0);return i[se].C=!0,Td(r),i},e.finishDraft=function(n,r){var i=n&&n[se],s=i.A;return Jc(s,r),Zc(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!Hg&&Lt(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Gt("Patches").$;return nr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),gt=new JI,ew=gt.produce;gt.produceWithPatches.bind(gt);gt.setAutoFreeze.bind(gt);gt.setUseProxies.bind(gt);gt.applyPatches.bind(gt);gt.createDraft.bind(gt);gt.finishDraft.bind(gt);function ZI(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Wg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wg(Object(n),!0).forEach(function(r){ZI(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function je(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Gg=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),nh=function(){return Math.random().toString(36).substring(7).split("").join(".")},Il={INIT:"@@redux/INIT"+nh(),REPLACE:"@@redux/REPLACE"+nh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nh()}};function eN(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function tw(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(je(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(je(1));return n(tw)(t,e)}if(typeof t!="function")throw new Error(je(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(je(3));return s}function h(w){if(typeof w!="function")throw new Error(je(4));if(l)throw new Error(je(5));var _=!0;return u(),a.push(w),function(){if(!!_){if(l)throw new Error(je(6));_=!1,u();var p=a.indexOf(w);a.splice(p,1),o=null}}}function d(w){if(!eN(w))throw new Error(je(7));if(typeof w.type>"u")throw new Error(je(8));if(l)throw new Error(je(9));try{l=!0,s=i(s,w)}finally{l=!1}for(var _=o=a,g=0;g<_.length;g++){var p=_[g];p()}return w}function m(w){if(typeof w!="function")throw new Error(je(10));i=w,d({type:Il.REPLACE})}function y(){var w,_=h;return w={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(je(11));function v(){p.next&&p.next(c())}v();var E=_(v);return{unsubscribe:E}}},w[Gg]=function(){return this},w}return d({type:Il.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:m},r[Gg]=y,r}function tN(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Il.INIT});if(typeof r>"u")throw new Error(je(12));if(typeof n(void 0,{type:Il.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(je(13))})}function nN(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{tN(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var m=s[d],y=n[m],w=l[m],_=y(w,u);if(typeof _>"u")throw u&&u.type,new Error(je(14));h[m]=_,c=c||_!==w}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Nl(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function rN(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(je(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Nl.apply(void 0,a)(i.dispatch),Kg(Kg({},i),{},{dispatch:s})}}}function nw(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var rw=nw();rw.withExtraArgument=nw;const Qg=rw;var iN=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var xl=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},sN=Object.defineProperty,Xg=Object.getOwnPropertySymbols,oN=Object.prototype.hasOwnProperty,aN=Object.prototype.propertyIsEnumerable,Yg=function(t,e,n){return e in t?sN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},co=function(t,e){for(var n in e||(e={}))oN.call(e,n)&&Yg(t,n,e[n]);if(Xg)for(var r=0,i=Xg(e);r<i.length;r++){var n=i[r];aN.call(e,n)&&Yg(t,n,e[n])}return t},lN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Nl:Nl.apply(null,arguments)};function uN(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var cN=function(t){iN(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,xl([void 0],n[0].concat(this)))):new(e.bind.apply(e,xl([void 0],n.concat(this))))},e}(Array);function Nd(t){return En(t)?ew(t,function(){}):t}function hN(t){return typeof t=="boolean"}function dN(){return function(e){return fN(e)}}function fN(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new cN;return n&&(hN(n)?r.push(Qg):r.push(Qg.withExtraArgument(n.extraArgument))),r}var pN=!0;function mN(t){var e=dN(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,m;if(typeof i=="function")m=i;else if(uN(i))m=nN(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(e));var w=rN.apply(void 0,y),_=Nl;l&&(_=lN(co({trace:!pN},typeof l=="object"&&l)));var g=[w];Array.isArray(d)?g=xl([w],d):typeof d=="function"&&(g=d(g));var p=_.apply(void 0,g);return tw(m,c,p)}function ho(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return co(co({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function iw(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function gN(t){return typeof t=="function"}function yN(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?iw(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(gN(t))l=function(){return Nd(t())};else{var u=Nd(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var m=xl([s[d.type]],o.filter(function(y){var w=y.matcher;return w(d)}).map(function(y){var w=y.reducer;return w}));return m.filter(function(y){return!!y}).length===0&&(m=[a]),m.reduce(function(y,w){if(w)if(nr(y)){var _=y,g=w(_,d);return g===void 0?y:g}else{if(En(y))return ew(y,function(p){return w(p,d)});var g=w(y,d);if(g===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return y},h)}return c.getInitialState=l,c}function vN(t,e){return t+"/"+e}function sw(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Nd(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=vN(e,c),m,y;"reducer"in h?(m=h.reducer,y=h.prepare):m=h,s[c]=m,o[d]=m,a[c]=y?ho(d,y):ho(d)});function l(){var c=typeof t.extraReducers=="function"?iw(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,m=c[1],y=m===void 0?[]:m,w=c[2],_=w===void 0?void 0:w,g=co(co({},d),o);return yN(n,g,y,_)}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var hp="listenerMiddleware";ho(hp+"/add");ho(hp+"/removeAll");ho(hp+"/remove");GI();const wN=localStorage.getItem("savedListItem")||"[]",rh=t=>{localStorage.setItem("savedListItem",JSON.stringify(t))},ow=sw({name:"cart",initialState:{itemList:JSON.parse(wN)},reducers:{add_item:(t,e)=>{const n=[...t.itemList];let r=n.findIndex(i=>i.productName===e.payload.productName);r>-1?n[r].itemCount+=e.payload.itemCount:n.push(e.payload),rh(n),t.itemList=[...n]},minus_item:(t,e)=>{const n=[...t.itemList];n[e.payload].itemCount-=1,rh(n),t.itemList=[...n]},remove_item:(t,e)=>{const n=[...t.itemList].filter(r=>r.productName!==e.payload);rh(n),t.itemList=[...n]}}}),{add_item:dp,minus_item:EN,remove_item:_N}=ow.actions,SN=ow.reducer,aw=sw({name:"toastMess",initialState:{status:!1,type:""},reducers:{addToCart:t=>{t.status=!0,t.type="addToCart"},likeItem:t=>{t.status=!0,t.type="like"},deleteFromCart:t=>{t.status=!0,t.type="deleteFromCart"},autoHide:t=>{t.status=!1,t.type=""}}}),{addToCart:lw,likeItem:kN,deleteFromCart:TN,autoHide:CN}=aw.actions,IN=aw.reducer,NN=mN({reducer:{cart:SN,toastMess:IN}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},AN=function(t){const e=uw(t);return cw.encodeByteArray(e,!0)},hw=function(t){return AN(t).replace(/\./g,"")},RN=function(t){try{return cw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function bN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ON(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LN(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $N(){return typeof indexedDB=="object"}function MN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UN,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,r)}}function FN(t,e){return t.replace(BN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BN=/\{\$([^}]+)}/g;function VN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Al(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jg(s)&&Jg(o)){if(!Al(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ts(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jN(t,e){const n=new zN(t,e);return n.subscribe.bind(n)}class zN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ih),i.error===void 0&&(i.error=ih),i.complete===void 0&&(i.complete=ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KN(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WN(t){return t===yr?void 0:t}function KN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const QN={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},XN=Q.INFO,YN={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},JN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fp{constructor(e){this.name=e,this._logLevel=XN,this._logHandler=JN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const ZN=(t,e)=>e.some(n=>t instanceof n);let Zg,ey;function ex(){return Zg||(Zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tx(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dw=new WeakMap,xd=new WeakMap,fw=new WeakMap,sh=new WeakMap,pp=new WeakMap;function nx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dw.set(n,t)}).catch(()=>{}),pp.set(e,t),e}function rx(t){if(xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xd.set(t,e)}let Ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ix(t){Ad=t(Ad)}function sx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return fw.set(r,e.sort?e.sort():[e]),Yn(r)}:tx().includes(t)?function(...e){return t.apply(oh(this),e),Yn(dw.get(this))}:function(...e){return Yn(t.apply(oh(this),e))}}function ox(t){return typeof t=="function"?sx(t):(t instanceof IDBTransaction&&rx(t),ZN(t,ex())?new Proxy(t,Ad):t)}function Yn(t){if(t instanceof IDBRequest)return nx(t);if(sh.has(t))return sh.get(t);const e=ox(t);return e!==t&&(sh.set(t,e),pp.set(e,t)),e}const oh=t=>pp.get(t);function ax(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const lx=["get","getKey","getAll","getAllKeys","count"],ux=["put","add","delete","clear"],ah=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ux.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ah.set(e,s),s}ix(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rd="@firebase/app",ny="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new fp("@firebase/app"),dx="@firebase/app-compat",fx="@firebase/analytics-compat",px="@firebase/analytics",mx="@firebase/app-check-compat",gx="@firebase/app-check",yx="@firebase/auth",vx="@firebase/auth-compat",wx="@firebase/database",Ex="@firebase/database-compat",_x="@firebase/functions",Sx="@firebase/functions-compat",kx="@firebase/installations",Tx="@firebase/installations-compat",Cx="@firebase/messaging",Ix="@firebase/messaging-compat",Nx="@firebase/performance",xx="@firebase/performance-compat",Ax="@firebase/remote-config",Rx="@firebase/remote-config-compat",Dx="@firebase/storage",Px="@firebase/storage-compat",bx="@firebase/firestore",Ox="@firebase/firestore-compat",Lx="firebase",$x="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="[DEFAULT]",Mx={[Rd]:"fire-core",[dx]:"fire-core-compat",[px]:"fire-analytics",[fx]:"fire-analytics-compat",[gx]:"fire-app-check",[mx]:"fire-app-check-compat",[yx]:"fire-auth",[vx]:"fire-auth-compat",[wx]:"fire-rtdb",[Ex]:"fire-rtdb-compat",[_x]:"fire-fn",[Sx]:"fire-fn-compat",[kx]:"fire-iid",[Tx]:"fire-iid-compat",[Cx]:"fire-fcm",[Ix]:"fire-fcm-compat",[Nx]:"fire-perf",[xx]:"fire-perf-compat",[Ax]:"fire-rc",[Rx]:"fire-rc-compat",[Dx]:"fire-gcs",[Px]:"fire-gcs-compat",[bx]:"fire-fst",[Ox]:"fire-fst-compat","fire-js":"fire-js",[Lx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map,Dd=new Map;function Ux(t,e){try{t.container.addComponent(e)}catch(n){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(Dd.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;Dd.set(e,t);for(const n of Rl.values())Ux(n,t);return!0}function Bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ur=new Oo("app","Firebase",Fx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=$x;function Vx(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pw,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ur.create("bad-app-name",{appName:String(r)});const i=Rl.get(r);if(i){if(Al(t,i.options)&&Al(n,i.config))return i;throw Ur.create("duplicate-app",{appName:r})}const s=new GN(r);for(const a of Dd.values())s.addComponent(a);const o=new Bx(t,n,s);return Rl.set(r,o),o}function mp(t=pw){const e=Rl.get(t);if(!e)throw Ur.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=Mx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(a.join(" "));return}Mr(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="firebase-heartbeat-database",zx=1,fo="firebase-heartbeat-store";let lh=null;function mw(){return lh||(lh=ax(jx,zx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fo)}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),lh}async function Hx(t){var e;try{return(await mw()).transaction(fo).objectStore(fo).get(gw(t))}catch(n){if(n instanceof en)$r.warn(n.message);else{const r=Ur.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});$r.warn(r.message)}}}async function ry(t,e){var n;try{const i=(await mw()).transaction(fo,"readwrite");return await i.objectStore(fo).put(e,gw(t)),i.done}catch(r){if(r instanceof en)$r.warn(r.message);else{const i=Ur.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});$r.warn(i.message)}}}function gw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=1024,Wx=30*24*60*60*1e3;class Kx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Wx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iy(),{heartbeatsToSend:n,unsentEntries:r}=Gx(this._heartbeatsCache.heartbeats),i=hw(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iy(){return new Date().toISOString().substring(0,10)}function Gx(t,e=qx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $N()?MN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sy(t){return hw(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){Mr(new rr("platform-logger",e=>new cx(e),"PRIVATE")),Mr(new rr("heartbeat",e=>new Kx(e),"PRIVATE")),Qt(Rd,ny,t),Qt(Rd,ny,"esm2017"),Qt("fire-js","")}Xx("");function gp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yx=yw,vw=new Oo("auth","Firebase",yw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new fp("@firebase/auth");function Ha(t,...e){oy.logLevel<=Q.ERROR&&oy.error(`Auth (${Xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw yp(t,...e)}function Xt(t,...e){return yp(t,...e)}function Jx(t,e,n){const r=Object.assign(Object.assign({},Yx()),{[e]:n});return new Oo("auth","Firebase",r).create(e,{appName:t.name})}function yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vw.create(t,...e)}function M(t,e,...n){if(!t)throw yp(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ha(e),new Error(e)}function _n(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;function un(t){_n(t instanceof Function,"Expected a class definition");let e=ay.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ay.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t,e){const n=Bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Al(s,e!=null?e:{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function eA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tA(){return ly()==="http:"||ly()==="https:"}function ly(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tA()||bN()||"connection"in navigator)?navigator.onLine:!0}function rA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=PN()||ON()}get(){return nA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new $o(3e4,6e4);function Mo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yi(t,e,n,r,i={}){return Ew(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ww.fetch()(_w(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ew(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iA),e);try{const i=new oA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ka(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jx(t,c,u);Ft(t,c)}}catch(i){if(i instanceof en)throw i;Ft(t,"network-request-failed")}}async function Uo(t,e,n,r,i={}){const s=await Yi(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _w(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vp(t.config,i):`${t.config.apiScheme}://${i}`}class oA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),sA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e){return Yi(t,"POST","/v1/accounts:delete",e)}async function lA(t,e){return Yi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uA(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=wp(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(uh(i.auth_time)),issuedAtTime:Us(uh(i.iat)),expirationTime:Us(uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uh(t){return Number(t)*1e3}function wp(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=RN(r);return s?JSON.parse(s):(Ha("Failed to decode base64 JWT payload"),null)}catch(s){return Ha("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function cA(t){const e=wp(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&hA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oi(t,lA(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mA(s.providerUserInfo):[],a=pA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function fA(t){const e=Me(t);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mA(t){return t.map(e=>{var{providerId:n}=e,r=gp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e){const n=await Ew(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_w(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ww.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new po;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uA(this,e)}reload(){return fA(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oi(this,aA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:I,providerData:N,stsTokenManager:A}=n;M(v&&A,e,"internal-error");const P=po.fromJSON(this.name,A);M(typeof v=="string",e,"internal-error"),xn(h,e.name),xn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof I=="boolean",e,"internal-error"),xn(m,e.name),xn(y,e.name),xn(w,e.name),xn(_,e.name),xn(g,e.name),xn(p,e.name);const Y=new Ir({uid:v,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:P,createdAt:g,lastLoginAt:p});return N&&Array.isArray(N)&&(Y.providerData=N.map(H=>Object.assign({},H))),_&&(Y._redirectEventId=_),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new po;i.updateFromServerResponse(n);const s=new Ir({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kw.type="NONE";const uy=kw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qa(this.userKey,i.apiKey,s),this.fullPersistenceKey=qa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Si(un(uy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||un(uy);const o=qa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ir._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Si(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xw(e))return"Blackberry";if(Aw(e))return"Webos";if(Ep(e))return"Safari";if((e.includes("chrome/")||Cw(e))&&!e.includes("edge/"))return"Chrome";if(Nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tw(t=Ge()){return/firefox\//i.test(t)}function Ep(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cw(t=Ge()){return/crios\//i.test(t)}function Iw(t=Ge()){return/iemobile/i.test(t)}function Nw(t=Ge()){return/android/i.test(t)}function xw(t=Ge()){return/blackberry/i.test(t)}function Aw(t=Ge()){return/webos/i.test(t)}function Vu(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yA(t=Ge()){var e;return Vu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vA(){return LN()&&document.documentMode===10}function Rw(t=Ge()){return Vu(t)||Nw(t)||Aw(t)||xw(t)||/windows phone/i.test(t)||Iw(t)}function wA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e=[]){let n;switch(t){case"Browser":n=cy(Ge());break;case"Worker":n=`${cy(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hy(this),this.idTokenSubscription=new hy(this),this.beforeStateQueue=new EA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Dl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ju(t){return Me(t)}class hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=jN(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function SA(t,e){return Yi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e){return Uo(t,"POST","/v1/accounts:signInWithPassword",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){return Uo(t,"POST","/v1/accounts:signInWithEmailLink",Mo(t,e))}async function CA(t,e){return Uo(t,"POST","/v1/accounts:signInWithEmailLink",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends _p{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return kA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TA(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return SA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CA(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e){return Uo(t,"POST","/v1/accounts:signInWithIdp",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="http://localhost";class Fr extends _p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:IA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xA(t){const e=ks(Ts(t)).link,n=e?ks(Ts(e)).deep_link_id:null,r=ks(Ts(t)).deep_link_id;return(r?ks(Ts(r)).link:null)||r||n||e||t}class Sp{constructor(e){var n,r,i,s,o,a;const l=ks(Ts(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=NA((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xA(e);try{return new Sp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sp.parseLink(n);return M(r,"argument-error"),mo._fromEmailAndCode(e,r.code,r.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Pw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Fo{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Fo{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Fo{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return Uo(t,"POST","/v1/accounts:signUp",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ir._fromIdTokenResponse(e,r,i),o=dy(r);return new Br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dy(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pl(e,n,r,i)}}function bw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pl._fromErrorAndOperation(t,s,e,r):s})}async function RA(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Oi(t,bw(i,s,e,t),n);M(o.idToken,i,"internal-error");const a=wp(o.idToken);M(a,i,"internal-error");const{sub:l}=a;return M(t.uid===l,i,"user-mismatch"),Br._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ft(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(t,e,n=!1){const r="signIn",i=await bw(t,r,e),s=await Br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PA(t,e){return Ow(ju(t),e)}async function bA(t,e,n){const r=ju(t),i=await AA(r,{returnSecureToken:!0,email:e,password:n}),s=await Br._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function OA(t,e,n){return PA(Me(t),Ji.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e){return Yi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Me(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Oi(r,LA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MA(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function UA(t){return Me(t).signOut()}const bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(){const t=Ge();return Ep(t)||Vu(t)}const BA=1e3,VA=10;class $w extends Lw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FA()&&wA(),this.fallbackToPolling=Rw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$w.type="LOCAL";const jA=$w;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends Lw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mw.type="SESSION";const Uw=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await zA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=kp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function qA(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function WA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GA(){return Fw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firebaseLocalStorageDb",QA=1,Ol="firebaseLocalStorage",Vw="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hu(t,e){return t.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function XA(){const t=indexedDB.deleteDatabase(Bw);return new Bo(t).toPromise()}function bd(){const t=indexedDB.open(Bw,QA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ol,{keyPath:Vw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ol)?e(r):(r.close(),await XA(),e(await bd()))})})}async function fy(t,e,n){const r=Hu(t,!0).put({[Vw]:e,value:n});return new Bo(r).toPromise()}async function YA(t,e){const n=Hu(t,!1).get(e),r=await new Bo(n).toPromise();return r===void 0?null:r.value}function py(t,e){const n=Hu(t,!0).delete(e);return new Bo(n).toPromise()}const JA=800,ZA=3;class jw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zu._getInstance(GA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WA(),!this.activeServiceWorker)return;this.sender=new HA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bd();return await fy(e,bl,"1"),await py(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>py(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hu(i,!1).getAll();return new Bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jw.type="LOCAL";const eR=jw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tR().appendChild(r)})}function rR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t,e){return e?un(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp extends _p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sR(t){return Ow(t.auth,new Tp(t),t.bypassAuthState)}function oR(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),DA(n,new Tp(t),t.bypassAuthState)}async function aR(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),RA(n,new Tp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return oR;default:Ft(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new $o(2e3,1e4);class hi extends zw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lR.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="pendingRedirect",Wa=new Map;class cR extends zw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await hR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hR(t,e){const n=pR(e),r=fR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dR(t,e){Wa.set(t._key(),e)}function fR(t){return un(t._redirectPersistence)}function pR(t){return qa(uR,t.config.apiKey,t.name)}async function mR(t,e,n=!1){const r=ju(t),i=iR(r,e),o=await new cR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=10*60*1e3;class yR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gR&&this.cachedEventUids.clear(),this.cachedEventUids.has(my(e))}saveEventToCache(e){this.cachedEventUids.add(my(e)),this.lastProcessedEventTime=Date.now()}}function my(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(t,e={}){return Yi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_R=/^https?/;async function SR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wR(t);for(const n of e)try{if(kR(n))return}catch{}Ft(t,"unauthorized-domain")}function kR(t){const e=Pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_R.test(n))return!1;if(ER.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new $o(3e4,6e4);function gy(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CR(t){return new Promise((e,n)=>{var r,i,s;function o(){gy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gy(),n(Xt(t,"network-request-failed"))},timeout:TR.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const a=rR("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},nR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function IR(t){return Ka=Ka||CR(t),Ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new $o(5e3,15e3),xR="__/auth/iframe",AR="emulator/auth/iframe",RR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PR(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vp(e,AR):`https://${t.config.authDomain}/${xR}`,r={apiKey:e.apiKey,appName:t.name,v:Xi},i=DR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Lo(r).slice(1)}`}async function bR(t){const e=await IR(t),n=Yt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:PR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},NR.get());function l(){Yt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LR=500,$R=600,MR="_blank",UR="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FR(t,e,n,r=LR,i=$R){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ge().toLowerCase();n&&(a=Cw(u)?MR:n),Tw(u)&&(e=e||UR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(yA(u)&&a!=="_self")return BR(e||"",a),new yy(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new yy(h)}function BR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="__/auth/handler",jR="emulator/auth/handler";function vy(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xi,eventId:i};if(e instanceof Pw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Fo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${zR(t)}?${Lo(a).slice(1)}`}function zR({config:t}){return t.emulator?vp(t,jR):`https://${t.authDomain}/${VR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="webStorageSupport";class HR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uw,this._completeRedirectFn=mR,this._overrideRedirectResult=dR}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=vy(e,n,r,Pd(),i);return FR(e,o,kp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),qA(vy(e,n,r,Pd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bR(e),r=new yR(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ch,{type:ch},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ch];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rw()||Ep()||Vu()}}const qR=HR;var wy="@firebase/auth",Ey="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GR(t){Mr(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dw(t)},c=new _A(a,l,u);return eA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new rr("auth-internal",e=>{const n=ju(e.getProvider("auth").getImmediate());return(r=>new WR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(wy,Ey,KR(t)),Qt(wy,Ey,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t=mp()){const e=Bu(t,"auth");return e.isInitialized()?e.getImmediate():Zx(t,{popupRedirectResolver:qR,persistence:[eR,jA,Uw]})}GR("Browser");var XR="firebase",YR="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(XR,YR,"app");var JR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Cp=Cp||{},U=JR||self;function Ll(){}function qu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZR(t){return Object.prototype.hasOwnProperty.call(t,hh)&&t[hh]||(t[hh]=++eD)}var hh="closure_uid_"+(1e9*Math.random()>>>0),eD=0;function tD(t,e,n){return t.call.apply(t.bind,arguments)}function nD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=tD:qe=nD,qe.apply(null,arguments)}function Ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function cr(){this.s=this.s,this.o=this.o}var rD=0;cr.prototype.s=!1;cr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rD!=0)&&ZR(this)};cr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ip(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _y(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var iD=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",Ll,e),U.removeEventListener("test",Ll,e)}catch{}return t}();function $l(t){return/^[\s\xa0]*$/.test(t)}var Sy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dh(t,e){return t<e?-1:t>e?1:0}function Wu(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return Wu().indexOf(t)!=-1}function Np(t){return Np[" "](t),t}Np[" "]=Ll;function sD(t){var e=lD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var oD=zt("Opera"),Li=zt("Trident")||zt("MSIE"),Ww=zt("Edge"),Od=Ww||Li,Kw=zt("Gecko")&&!(Wu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),aD=Wu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function Gw(){var t=U.document;return t?t.documentMode:void 0}var Ml;e:{var fh="",ph=function(){var t=Wu();if(Kw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ww)return/Edge\/([\d\.]+)/.exec(t);if(Li)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aD)return/WebKit\/(\S+)/.exec(t);if(oD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ph&&(fh=ph?ph[1]:""),Li){var mh=Gw();if(mh!=null&&mh>parseFloat(fh)){Ml=String(mh);break e}}Ml=fh}var lD={};function uD(){return sD(function(){let t=0;const e=Sy(String(Ml)).split("."),n=Sy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=dh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||dh(i[2].length==0,s[2].length==0)||dh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ld;if(U.document&&Li){var ky=Gw();Ld=ky||parseInt(Ml,10)||void 0}else Ld=void 0;var cD=Ld;function go(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kw){e:{try{Np(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&go.X.h.call(this)}}Fe(go,We);var hD={2:"touch",3:"pen",4:"mouse"};go.prototype.h=function(){go.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jo="closure_listenable_"+(1e6*Math.random()|0),dD=0;function fD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++dD,this.ba=this.ea=!1}function Ku(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Qw(t){const e={};for(const n in t)e[n]=t[n];return e}const Ty="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ty.length;s++)n=Ty[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gu(t){this.src=t,this.g={},this.h=0}Gu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Md(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fD(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function $d(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=qw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ku(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Md(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Ap="closure_lm_"+(1e6*Math.random()|0),gh={};function Yw(t,e,n,r,i){if(r&&r.once)return Zw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yw(t,e[s],n,r,i);return null}return n=Pp(n),t&&t[jo]?t.N(e,n,Vo(r)?!!r.capture:!!r,i):Jw(t,e,n,!1,r,i)}function Jw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Vo(i)?!!i.capture:!!i,a=Dp(t);if(a||(t[Ap]=a=new Gu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pD(){function t(n){return e.call(t.src,t.listener,n)}const e=mD;return t}function Zw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zw(t,e[s],n,r,i);return null}return n=Pp(n),t&&t[jo]?t.O(e,n,Vo(r)?!!r.capture:!!r,i):Jw(t,e,n,!0,r,i)}function eE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eE(t,e[s],n,r,i);else r=Vo(r)?!!r.capture:!!r,n=Pp(n),t&&t[jo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Md(s,n,r,i),-1<n&&(Ku(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Dp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Md(e,n,r,i)),(n=-1<t?e[t]:null)&&Rp(n))}function Rp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[jo])$d(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Dp(e))?($d(n,t),n.h==0&&(n.src=null,e[Ap]=null)):Ku(t)}}}function tE(t){return t in gh?gh[t]:gh[t]="on"+t}function mD(t,e){if(t.ba)t=!0;else{e=new go(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Rp(t),t=n.call(r,e)}return t}function Dp(t){return t=t[Ap],t instanceof Gu?t:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pp(t){return typeof t=="function"?t:(t[yh]||(t[yh]=function(e){return t.handleEvent(e)}),t[yh])}function Ae(){cr.call(this),this.i=new Gu(this),this.P=this,this.I=null}Fe(Ae,cr);Ae.prototype[jo]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){eE(this,t,e,n,r)};function Le(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var i=e;e=new We(r,t),Xw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ca(o,r,!0,e)&&i}if(o=e.g=t,i=Ca(o,r,!0,e)&&i,i=Ca(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ca(o,r,!1,e)&&i}Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ku(n[r]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ca(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&$d(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var bp=U.JSON.stringify;function gD(){var t=iE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yD{constructor(){this.h=this.g=null}add(e,n){const r=nE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var nE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vD,t=>t.reset());class vD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wD(t){U.setTimeout(()=>{throw t},0)}function rE(t,e){Ud||ED(),Fd||(Ud(),Fd=!0),iE.add(t,e)}var Ud;function ED(){var t=U.Promise.resolve(void 0);Ud=function(){t.then(_D)}}var Fd=!1,iE=new yD;function _D(){for(var t;t=gD();){try{t.h.call(t.g)}catch(n){wD(n)}var e=nE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fd=!1}function Qu(t,e){Ae.call(this),this.h=t||1,this.g=e||U,this.j=qe(this.kb,this),this.l=Date.now()}Fe(Qu,Ae);b=Qu.prototype;b.ca=!1;b.R=null;b.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Le(this,"tick"),this.ca&&(Op(this),this.start()))}};b.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Op(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}b.M=function(){Qu.X.M.call(this),Op(this),delete this.g};function Lp(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function sE(t){t.g=Lp(()=>{t.g=null,t.i&&(t.i=!1,sE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SD extends cr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sE(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yo(t){cr.call(this),this.h=t,this.g={}}Fe(yo,cr);var Cy=[];function oE(t,e,n,r){Array.isArray(n)||(n&&(Cy[0]=n.toString()),n=Cy);for(var i=0;i<n.length;i++){var s=Yw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function aE(t){xp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rp(e)},t),t.g={}}yo.prototype.M=function(){yo.X.M.call(this),aE(this)};yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xu(){this.g=!0}Xu.prototype.Aa=function(){this.g=!1};function kD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function TD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function di(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ID(t,n)+(r?" "+r:"")})}function CD(t,e){t.info(function(){return"TIMEOUT: "+e})}Xu.prototype.info=function(){};function ID(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bp(n)}catch{return e}}var Wr={},Iy=null;function Yu(){return Iy=Iy||new Ae}Wr.Oa="serverreachability";function lE(t){We.call(this,Wr.Oa,t)}Fe(lE,We);function vo(t){const e=Yu();Le(e,new lE(e))}Wr.STAT_EVENT="statevent";function uE(t,e){We.call(this,Wr.STAT_EVENT,t),this.stat=e}Fe(uE,We);function Ye(t){const e=Yu();Le(e,new uE(e,t))}Wr.Pa="timingevent";function cE(t,e){We.call(this,Wr.Pa,t),this.size=e}Fe(cE,We);function zo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Ju={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},hE={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $p(){}$p.prototype.h=null;function Ny(t){return t.h||(t.h=t.i())}function dE(){}var Ho={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Mp(){We.call(this,"d")}Fe(Mp,We);function Up(){We.call(this,"c")}Fe(Up,We);var Bd;function Zu(){}Fe(Zu,$p);Zu.prototype.g=function(){return new XMLHttpRequest};Zu.prototype.i=function(){return{}};Bd=new Zu;function qo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new yo(this),this.O=ND,t=Od?125:void 0,this.T=new Qu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new fE}function fE(){this.i=null,this.g="",this.h=!1}var ND=45e3,Vd={},Ul={};b=qo.prototype;b.setTimeout=function(t){this.O=t};function jd(t,e,n){t.K=1,t.v=tc(Sn(e)),t.s=n,t.P=!0,pE(t,null)}function pE(t,e){t.F=Date.now(),Wo(t),t.A=Sn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),SE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new fE,t.g=zE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new SD(qe(t.Ka,t,t.g),t.N)),oE(t.S,t.g,"readystatechange",t.hb),e=t.H?Qw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vo(),kD(t.j,t.u,t.A,t.m,t.U,t.s)}b.hb=function(t){t=t.target;const e=this.L;e&&cn(t)==3?e.l():this.Ka(t)};b.Ka=function(t){try{if(t==this.g)e:{const c=cn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Od||this.g&&(this.h.h||this.g.fa()||Dy(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?vo(3):vo(2)),ec(this);var n=this.g.aa();this.Y=n;t:if(mE(this)){var r=Dy(this.g);t="";var i=r.length,s=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),Fs(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,TD(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$l(a)){var u=a;break t}}u=null}if(n=u)di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zd(this,n);else{this.i=!1,this.o=3,Ye(12),_r(this),Fs(this);break e}}this.P?(gE(this,c,o),Od&&this.i&&c==3&&(oE(this.S,this.T,"tick",this.gb),this.T.start())):(di(this.j,this.m,o,null),zd(this,o)),c==4&&_r(this),this.i&&!this.I&&(c==4?FE(this.l,this):(this.i=!1,Wo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),_r(this),Fs(this)}}}catch{}finally{}};function mE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=xD(t,n),i==Ul){e==4&&(t.o=4,Ye(14),r=!1),di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vd){t.o=4,Ye(15),di(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else di(t.j,t.m,i,null),zd(t,i);mE(t)&&i!=Ul&&i!=Vd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qp(e),e.K=!0,Ye(11))):(di(t.j,t.m,n,"[Invalid Chunked Response]"),_r(t),Fs(t))}b.gb=function(){if(this.g){var t=cn(this.g),e=this.g.fa();this.C<e.length&&(ec(this),gE(this,t,e),this.i&&t!=4&&Wo(this))}};function xD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ul:(n=Number(e.substring(n,r)),isNaN(n)?Vd:(r+=1,r+n>e.length?Ul:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,_r(this)};function Wo(t){t.V=Date.now()+t.O,yE(t,t.O)}function yE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zo(qe(t.fb,t),e)}function ec(t){t.B&&(U.clearTimeout(t.B),t.B=null)}b.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(CD(this.j,this.A),this.K!=2&&(vo(),Ye(17)),_r(this),this.o=2,Fs(this)):yE(this,this.V-t)};function Fs(t){t.l.G==0||t.I||FE(t.l,t)}function _r(t){ec(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Op(t.T),aE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function zd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hd(n.h,t))){if(!t.J&&Hd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Vl(n),ic(n);else break e;Hp(n),Ye(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=zo(qe(n.bb,n),6e3));if(1>=CE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Sr(n,11)}else if((t.J||n.g==t)&&Vl(n),!$l(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Fp(s,s.h),s.h=null))}if(r.D){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,ae(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=jE(r,r.H?r.ka:null,r.V),o.J){IE(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(ec(a),Wo(a)),r.g=o}else ME(r);0<n.i.length&&sc(n)}else u[0]!="stop"&&u[0]!="close"||Sr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Sr(n,7):zp(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}vo(4)}catch{}}function AD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function RD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RD(t),r=AD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var wE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Nr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nr){this.h=e!==void 0?e:t.h,Fl(this,t.j),this.s=t.s,this.g=t.g,Bl(this,t.m),this.l=t.l,e=t.i;var n=new wo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xy(this,n),this.o=t.o}else t&&(n=String(t).match(wE))?(this.h=!!e,Fl(this,n[1]||"",!0),this.s=Cs(n[2]||""),this.g=Cs(n[3]||"",!0),Bl(this,n[4]),this.l=Cs(n[5]||"",!0),xy(this,n[6]||"",!0),this.o=Cs(n[7]||"")):(this.h=!!e,this.i=new wo(null,this.h))}Nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Is(e,Ay,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Is(e,Ay,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Is(n,n.charAt(0)=="/"?OD:bD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Is(n,$D)),t.join("")};function Sn(t){return new Nr(t)}function Fl(t,e,n){t.j=n?Cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xy(t,e,n){e instanceof wo?(t.i=e,MD(t.i,t.h)):(n||(e=Is(e,LD)),t.i=new wo(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function tc(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Is(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ay=/[#\/\?@]/g,bD=/[#\?:]/g,OD=/[#\?]/g,LD=/[#\?@]/g,$D=/#/g;function wo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hr(t){t.g||(t.g=new Map,t.h=0,t.i&&DD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=wo.prototype;b.add=function(t,e){hr(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function EE(t,e){hr(t),e=Zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _E(t,e){return hr(t),e=Zi(t,e),t.g.has(e)}b.forEach=function(t,e){hr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.oa=function(){hr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.W=function(t){hr(this);let e=[];if(typeof t=="string")_E(this,t)&&(e=e.concat(this.g.get(Zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return hr(this),this.i=null,t=Zi(this,t),_E(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function SE(t,e,n){EE(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),Ip(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MD(t,e){e&&!t.j&&(hr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(EE(this,r),SE(this,i,n))},t)),t.j=e}var UD=class{constructor(t,e){this.h=t,this.g=e}};function kE(t){this.l=t||FD,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FD=10;function TE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function CE(t){return t.h?1:t.g?t.g.size:0}function Hd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fp(t,e){t.g?t.g.add(e):t.h=e}function IE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kE.prototype.cancel=function(){if(this.i=NE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function NE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ip(t.i)}function Bp(){}Bp.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Bp.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function BD(){this.g=new Bp}function VD(t,e,n){const r=n||"";try{vE(t,function(i,s){let o=i;Vo(i)&&(o=bp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jD(t,e){const n=new Xu;if(U.Image){const r=new Image;r.onload=Ta(Ia,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ta(Ia,n,r,"TestLoadImage: error",!1,e),r.onabort=Ta(Ia,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ta(Ia,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ia(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ko(t){this.l=t.$b||null,this.j=t.ib||!1}Fe(Ko,$p);Ko.prototype.g=function(){return new nc(this.l,this.j)};Ko.prototype.i=function(t){return function(){return t}}({});function nc(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(nc,Ae);var Vp=0;b=nc.prototype;b.open=function(t,e){if(this.readyState!=Vp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Eo(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Go(this)),this.readyState=Vp};b.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xE(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function xE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}b.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Go(this):Eo(this),this.readyState==3&&xE(this)}};b.Ua=function(t){this.g&&(this.response=this.responseText=t,Go(this))};b.Ta=function(t){this.g&&(this.response=t,Go(this))};b.ga=function(){this.g&&Go(this)};function Go(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Eo(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zD=U.JSON.parse;function we(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=AE,this.K=this.L=!1}Fe(we,Ae);var AE="",HD=/^https?$/i,qD=["POST","PUT"];b=we.prototype;b.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bd.g(),this.C=this.u?Ny(this.u):Ny(Bd),this.g.onreadystatechange=qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ry(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=qw(qD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{PE(this),0<this.B&&((this.K=WD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.qa,this)):this.A=Lp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ry(this,s)}};function WD(t){return Li&&uD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.qa=function(){typeof Cp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Ry(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,RE(t),rc(t)}function RE(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),rc(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rc(this,!0)),we.X.M.call(this)};b.Ha=function(){this.s||(this.F||this.v||this.l?DE(this):this.eb())};b.eb=function(){DE(this)};function DE(t){if(t.h&&typeof Cp<"u"&&(!t.C[1]||cn(t)!=4||t.aa()!=2)){if(t.v&&cn(t)==4)Lp(t.Ha,0,t);else if(Le(t,"readystatechange"),cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(wE)[1]||null;if(!i&&U.self&&U.self.location){var s=U.self.location.protocol;i=s.substr(0,s.length-1)}r=!HD.test(i?i.toLowerCase():"")}n=r}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",RE(t)}}finally{rc(t)}}}}function rc(t,e){if(t.g){PE(t);const n=t.g,r=t.C[0]?Ll:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=r}catch{}}}function PE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function cn(t){return t.g?t.g.readyState:0}b.aa=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};b.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zD(e)}};function Dy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case AE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ea=function(){return this.m};b.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function bE(t){let e="";return xp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function jp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function OE(t){this.Ca=0,this.i=[],this.j=new Xu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=gs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=gs("baseRetryDelayMs",5e3,t),this.ab=gs("retryDelaySeedMs",1e4,t),this.Za=gs("forwardChannelMaxRetries",2,t),this.ta=gs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kE(t&&t.concurrentRequestLimit),this.Fa=new BD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}b=OE.prototype;b.ma=8;b.G=1;function zp(t){if(LE(t),t.G==3){var e=t.U++,n=Sn(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),Qo(t,n),e=new qo(t,t.j,e,void 0),e.K=2,e.v=tc(Sn(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=zE(e.l,null),e.g.da(e.v)),e.F=Date.now(),Wo(e)}VE(t)}function ic(t){t.g&&(qp(t),t.g.cancel(),t.g=null)}function LE(t){ic(t),t.u&&(U.clearTimeout(t.u),t.u=null),Vl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function sc(t){TE(t.h)||t.m||(t.m=!0,rE(t.Ja,t),t.C=0)}function KD(t,e){return CE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=zo(qe(t.Ja,t,e),BE(t,t.C)),t.C++,!0)}b.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new qo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Qw(s),Xw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$E(this,i,e),n=Sn(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),Qo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(bE(s)))+"&"+e:this.o&&jp(n,this.o,s)),Fp(this.h,i),this.Xa&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),i.Z=!0,jd(i,n,null)):jd(i,n,e),this.G=2}}else this.G==3&&(t?Py(this,t):this.i.length==0||TE(this.h)||Py(this))};function Py(t,e){var n;e?n=e.m:n=t.U++;const r=Sn(t.F);ae(r,"SID",t.I),ae(r,"RID",n),ae(r,"AID",t.T),Qo(t,r),t.o&&t.s&&jp(r,t.o,t.s),n=new qo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$E(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Fp(t.h,n),jd(n,r,e)}function Qo(t,e){t.ia&&xp(t.ia,function(n,r){ae(e,r,n)}),t.l&&vE({},function(n,r){ae(e,r,n)})}function $E(t,e,n){n=Math.min(t.i.length,n);var r=t.l?qe(t.l.Qa,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{VD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function ME(t){t.g||t.u||(t.Z=1,rE(t.Ia,t),t.A=0)}function Hp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zo(qe(t.Ia,t),BE(t,t.A)),t.A++,!0)}b.Ia=function(){if(this.u=null,UE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zo(qe(this.cb,this),t)}};b.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ye(10),ic(this),UE(this))};function qp(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function UE(t){t.g=new qo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Sn(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),Qo(t,e),t.o&&t.s&&jp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=tc(Sn(e)),n.s=null,n.P=!0,pE(n,t)}b.bb=function(){this.v!=null&&(this.v=null,ic(this),Hp(this),Ye(19))};function Vl(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function FE(t,e){var n=null;if(t.g==e){Vl(t),qp(t),t.g=null;var r=2}else if(Hd(t.h,e))n=e.D,IE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Yu(),Le(r,new cE(r,n)),sc(t)}else ME(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&KD(t,e)||r==2&&Hp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Sr(t,5);break;case 4:Sr(t,10);break;case 3:Sr(t,6);break;default:Sr(t,2)}}}function BE(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Sr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=qe(t.jb,t);n||(n=new Nr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||Fl(n,"https"),tc(n)),jD(n.toString(),r)}else Ye(2);t.G=0,t.l&&t.l.va(e),VE(t),LE(t)}b.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function VE(t){if(t.G=0,t.la=[],t.l){const e=NE(t.h);(e.length!=0||t.i.length!=0)&&(_y(t.la,e),_y(t.la,t.i),t.h.i.length=0,Ip(t.i),t.i.length=0),t.l.ua()}}function jE(t,e,n){var r=n instanceof Nr?Sn(n):new Nr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Bl(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Nr(null,void 0);r&&Fl(s,r),e&&(s.g=e),i&&Bl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ae(r,n,e),ae(r,"VER",t.ma),Qo(t,r),r}function zE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new Ko({ib:!0})):new we(t.ra),e.L=t.H,e}function HE(){}b=HE.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Qa=function(){};function jl(){if(Li&&!(10<=Number(cD)))throw Error("Environmental error: no available transport.")}jl.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Ae.call(this),this.g=new OE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!$l(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$l(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new es(this)}Fe(yt,Ae);yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=jE(t,null,t.V),sc(t)};yt.prototype.close=function(){zp(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bp(t),t=n);e.i.push(new UD(e.$a++,t)),e.G==3&&sc(e)};yt.prototype.M=function(){this.g.l=null,delete this.j,zp(this.g),delete this.g,yt.X.M.call(this)};function qE(t){Mp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(qE,Mp);function WE(){Up.call(this),this.status=1}Fe(WE,Up);function es(t){this.g=t}Fe(es,HE);es.prototype.xa=function(){Le(this.g,"a")};es.prototype.wa=function(t){Le(this.g,new qE(t))};es.prototype.va=function(t){Le(this.g,new WE)};es.prototype.ua=function(){Le(this.g,"b")};jl.prototype.createWebChannel=jl.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Ju.NO_ERROR=0;Ju.TIMEOUT=8;Ju.HTTP_ERROR=6;hE.COMPLETE="complete";dE.EventType=Ho;Ho.OPEN="a";Ho.CLOSE="b";Ho.ERROR="c";Ho.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Na;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Ra;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;var GD=function(){return new jl},QD=function(){return Yu()},vh=Ju,XD=hE,YD=Wr,by={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},JD=Ko,Na=dE,ZD=we;const Oy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new fp("@firebase/firestore");function Ly(){return Vr.logLevel}function O(t,...e){if(Vr.logLevel<=Q.DEBUG){const n=e.map(Wp);Vr.debug(`Firestore (${ts}): ${t}`,...n)}}function kn(t,...e){if(Vr.logLevel<=Q.ERROR){const n=e.map(Wp);Vr.error(`Firestore (${ts}): ${t}`,...n)}}function $y(t,...e){if(Vr.logLevel<=Q.WARN){const n=e.map(Wp);Vr.warn(`Firestore (${ts}): ${t}`,...n)}}function Wp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function ne(t,e){t||F()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class nP{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new eP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new nt(e)}}class rP{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class iP{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new rP(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oP{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.A=n.token,new sP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=aP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Se(0,0))}static max(){return new z(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _o?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends _o{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const lP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends _o{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return lP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(le.fromString(e))}static fromName(e){return new L(le.fromString(e).popFirst(5))}static empty(){return new L(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new le(e.slice()))}}function uP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new ir(i,L.empty(),e)}function cP(t){return new ir(t.readTime,t.key,-1)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(z.min(),L.empty(),-1)}static max(){return new ir(z.max(),L.empty(),-1)}}function hP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==dP)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kp.at=-1;class Te{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Pe.RED,this.left=i!=null?i:Pe.EMPTY,this.right=s!=null?s:Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uy(this.data.getIterator())}getIteratorFrom(e){return new Uy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class Uy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new ke(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ue(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const pP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(ne(!!t),typeof t=="string"){let e=0;const n=pP.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function XE(t){const e=t.mapValue.fields.__previous_value__;return QE(e)?XE(e):e}function So(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}function oc(t){return t==null}function zl(t){return t===0&&1/t==-1/0}function gP(t){return typeof t=="number"&&Number.isInteger(t)&&!zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?QE(t)?4:yP(t)?9007199254740991:10:F()}function Zt(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=sr(r.timestampValue),o=sr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Mi(r.bytesValue).isEqual(Mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ye(r.doubleValue),o=ye(i.doubleValue);return s===o?zl(s)===zl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(My(s)!==My(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Zt(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function To(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Ui(t,e){if(t===e)return 0;const n=jr(t),r=jr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ye(i.integerValue||i.doubleValue),a=ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fy(t.timestampValue,e.timestampValue);case 4:return Fy(So(t),So(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Mi(i),a=Mi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(ye(i.latitude),ye(s.latitude));return o!==0?o:X(ye(i.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ui(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Aa.mapValue&&s===Aa.mapValue)return 0;if(i===Aa.mapValue)return 1;if(s===Aa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const d=Ui(o[a[c]],l[u[c]]);if(d!==0)return d}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function Fy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=sr(t),r=sr(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function Ti(t){return qd(t)}function qd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=sr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=qd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${qd(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function Wd(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function By(t){return!!t&&"nullValue"in t}function Vy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ga(t){return!!t&&"mapValue"in t}function Bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ns(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Bs(this.value))}}function YE(t){const e=[];return ns(t.fields,(n,r)=>{const i=new He([n]);if(Ga(r)){const s=YE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new be(e,0,z.min(),z.min(),Tt.empty(),0)}static newFoundDocument(e,n,r){return new be(e,1,n,z.min(),r,0)}static newNoDocument(e,n){return new be(e,2,n,z.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,z.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function jy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vP(t,e,n,r,i,s,o)}function Qp(t){const e=B(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ti(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ti(r)).join(",")),e.ht=n}return e.ht}function wP(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ti(r.value)}`;var r}).join(", ")}]`),oc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ti(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ti(n)).join(",")),`Target(${e})`}function Xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!NP(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Zt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hy(t.startAt,e.startAt)&&Hy(t.endAt,e.endAt)}function Kd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ot extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new EP(e,n,r):n==="array-contains"?new kP(e,r):n==="in"?new TP(e,r):n==="not-in"?new CP(e,r):n==="array-contains-any"?new IP(e,r):new ot(e,n,r)}static lt(e,n,r){return n==="in"?new _P(e,r):new SP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ui(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.ft(Ui(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class EP extends ot{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.ft(n)}}class _P extends ot{constructor(e,n){super(e,"in",n),this.keys=JE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SP extends ot{constructor(e,n){super(e,"not-in",n),this.keys=JE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function JE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class kP extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&To(n.arrayValue,this.value)}}class TP extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class CP extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class IP extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}class Hl{constructor(e,n){this.position=e,this.inclusive=n}}class Vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function NP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function zy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ui(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function xP(t,e,n,r,i,s,o,a){return new ac(t,e,n,r,i,s,o,a)}function Yp(t){return new ac(t)}function qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AP(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function RP(t){for(const e of t.filters)if(e.dt())return e.field;return null}function DP(t){return t.collectionGroup!==null}function Co(t){const e=B(t);if(e._t===null){e._t=[];const n=RP(e),r=AP(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Vs(n)),e._t.push(new Vs(He.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Vs(He.keyField(),s))}}}return e._t}function Tn(t){const e=B(t);if(!e.wt)if(e.limitType==="F")e.wt=jy(e.path,e.collectionGroup,Co(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Co(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Vs(s.field,o))}const r=e.endAt?new Hl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Hl(e.startAt.position,e.startAt.inclusive):null;e.wt=jy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Gd(t,e,n){return new ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return Xp(Tn(t),Tn(e))&&t.limitType===e.limitType}function ZE(t){return`${Qp(Tn(t))}|lt:${t.limitType}`}function Qd(t){return`Query(target=${wP(Tn(t))}; limitType=${t.limitType})`}function Jp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=zy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Co(n),r)||n.endAt&&!function(i,s,o){const a=zy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Co(n),r))}(t,e)}function PP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function e_(t){return(e,n)=>{let r=!1;for(const i of Co(t)){const s=bP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bP(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ui(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zl(e)?"-0":e}}function n_(t){return{integerValue:""+t}}function OP(t,e){return gP(e)?n_(e):t_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this._=void 0}}function LP(t,e,n){return t instanceof ql?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Io?i_(t,e):t instanceof No?s_(t,e):function(r,i){const s=r_(r,i),o=Wy(s)+Wy(r.yt);return Wd(s)&&Wd(r.yt)?n_(o):t_(r.It,o)}(t,e)}function $P(t,e,n){return t instanceof Io?i_(t,e):t instanceof No?s_(t,e):n}function r_(t,e){return t instanceof Wl?Wd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ql extends uc{}class Io extends uc{constructor(e){super(),this.elements=e}}function i_(t,e){const n=o_(e);for(const r of t.elements)n.some(i=>Zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class No extends uc{constructor(e){super(),this.elements=e}}function s_(t,e){let n=o_(e);for(const r of t.elements)n=n.filter(i=>!Zt(i,r));return{arrayValue:{values:n}}}class Wl extends uc{constructor(e,n){super(),this.It=e,this.yt=n}}function Wy(t){return ye(t.integerValue||t.doubleValue)}function o_(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Io&&r instanceof Io||n instanceof No&&r instanceof No?$i(n.elements,r.elements,Zt):n instanceof Wl&&r instanceof Wl?Zt(n.yt,r.yt):n instanceof ql&&r instanceof ql}(t.transform,e.transform)}class UP{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function a_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new u_(t.key,fn.none()):new Jo(t.key,t.data,fn.none());{const n=t.data,r=Tt.empty();let i=new ke(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kr(t.key,r,new Jt(i.toArray()),fn.none())}}function FP(t,e,n){t instanceof Jo?function(r,i,s){const o=r.value.clone(),a=Gy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(r,i,s){if(!Qa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Gy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(l_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function js(t,e,n,r){return t instanceof Jo?function(i,s,o,a){if(!Qa(i.precondition,s))return o;const l=i.value.clone(),u=Qy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(i,s,o,a){if(!Qa(i.precondition,s))return o;const l=Qy(i.fieldTransforms,a,s),u=s.data;return u.setAll(l_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Qa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function BP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=r_(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function Ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&$i(n,r,(i,s)=>MP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends cc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends cc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gy(t,e,n){const r=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$P(o,a,n[i]))}return r}function Qy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,LP(s,o,e))}return r}class u_ extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VP extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,K;function zP(t){switch(t){default:return F();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function c_(t){if(t===void 0)return kn("GRPC error has no .code"),T.UNKNOWN;switch(t){case ge.OK:return T.OK;case ge.CANCELLED:return T.CANCELLED;case ge.UNKNOWN:return T.UNKNOWN;case ge.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ge.INTERNAL:return T.INTERNAL;case ge.UNAVAILABLE:return T.UNAVAILABLE;case ge.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ge.NOT_FOUND:return T.NOT_FOUND;case ge.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ge.ABORTED:return T.ABORTED;case ge.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ge.DATA_LOSS:return T.DATA_LOSS;default:return F()}}(K=ge||(ge={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new Te(L.comparator);function Cn(){return HP}const h_=new Te(L.comparator);function Ns(...t){let e=h_;for(const n of t)e=e.insert(n.key,n);return e}function d_(t){let e=h_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return zs()}function f_(){return zs()}function zs(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qP=new Te(L.comparator),WP=new ke(L.comparator);function q(...t){let e=WP;for(const n of t)e=e.add(n);return e}const KP=new ke(X);function p_(){return KP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n)),new hc(z.min(),r,p_(),Cn(),q())}}class Zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Zo(Ue.EMPTY_BYTE_STRING,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class m_{constructor(e,n){this.targetId=e,this.At=n}}class g_{constructor(e,n,r=Ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xy{constructor(){this.Rt=0,this.bt=Jy(),this.Pt=Ue.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=q(),n=q(),r=q();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new Zo(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Jy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class GP{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Cn(),this.qt=Yy(),this.Kt=new ke(X)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Kd(s))if(r===0){const o=new L(s.path);this.jt(n,o,be.newNoDocument(o,z.min()))}else ne(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Kd(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,be.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.Kt,this.Ut,r);return this.Ut=Cn(),this.qt=Yy(),this.Kt=new ke(X),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Xy,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ke(X),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Xy),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Yy(){return new Te(L.comparator)}function Jy(){return new Te(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class YP{constructor(e,n){this.databaseId=e,this.gt=n}}function Kl(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(t,e){return t.gt?e.toBase64():e.toUint8Array()}function JP(t,e){return Kl(t,e.toTimestamp())}function pn(t){return ne(!!t),z.fromTimestamp(function(e){const n=sr(e);return new Se(n.seconds,n.nanos)}(t))}function Zp(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function v_(t){const e=le.fromString(t);return ne(__(e)),e}function Xd(t,e){return Zp(t.databaseId,e.path)}function wh(t,e){const n=v_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(w_(n))}function Yd(t,e){return Zp(t.databaseId,e)}function ZP(t){const e=v_(t);return e.length===4?le.emptyPath():w_(e)}function Jd(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function w_(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zy(t,e,n){return{name:Xd(t,e),fields:n.value.mapValue.fields}}function eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ne(u===void 0||typeof u=="string"),Ue.fromBase64String(u||"")):(ne(u===void 0||u instanceof Uint8Array),Ue.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:c_(l.code);return new $(u,l.message||"")}(o);n=new g_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wh(t,r.document.name),s=pn(r.document.updateTime),o=new Tt({mapValue:{fields:r.document.fields}}),a=be.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Xa(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wh(t,r.document),s=r.readTime?pn(r.readTime):z.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wh(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new jP(i),o=r.targetId;n=new m_(o,s)}}return n}function tb(t,e){let n;if(e instanceof Jo)n={update:Zy(t,e.key,e.value)};else if(e instanceof u_)n={delete:Xd(t,e.key)};else if(e instanceof Kr)n={update:Zy(t,e.key,e.data),updateMask:hb(e.fieldMask)};else{if(!(e instanceof VP))return F();n={verify:Xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ql)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Io)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof No)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wl)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function nb(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?pn(r.updateTime):pn(i);return s.isEqual(z.min())&&(s=pn(i)),new UP(s,r.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[Yd(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Yd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Vy(h.value))return{unaryFilter:{field:Xr(h.field),op:"IS_NAN"}};if(By(h.value))return{unaryFilter:{field:Xr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Vy(h.value))return{unaryFilter:{field:Xr(h.field),op:"IS_NOT_NAN"}};if(By(h.value))return{unaryFilter:{field:Xr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(h.field),op:lb(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Xr(c.field),direction:ab(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||oc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sb(t){let e=ZP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ne(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=E_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Vs(fi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,oc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Hl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Hl(d,h)}(n.endAt)),xP(e,i,o,s,a,"F",l,u)}function ob(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function E_(t){return t?t.unaryFilter!==void 0?[cb(t)]:t.fieldFilter!==void 0?[ub(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>E_(e)).reduce((e,n)=>e.concat(n)):F():[]}function ab(t){return QP[t]}function lb(t){return XP[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function fi(t){return He.fromServerFormat(t.fieldPath)}function ub(t){return ot.create(fi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}function cb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fi(t.unaryFilter.field);return ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fi(t.unaryFilter.field);return ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fi(t.unaryFilter.field);return ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fi(t.unaryFilter.field);return ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}function hb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function __(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&FP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=a_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,r)=>Ky(n,r))&&$i(this.baseMutations,e.baseMutations,(n,r)=>Ky(n,r))}}class em{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ne(e.mutations.length===r.length);let i=qP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new em(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Ue.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.re=e}}function mb(t){const e=sb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.Ye=new yb}addToCollectionParentIndex(e,n){return this.Ye.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(ir.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class yb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ke(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Fi(0)}static vn(){return new Fi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&js(r.mutation,i,Jt.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Cn();const o=zs(),a=zs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Kr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),js(c.mutation,u,c.mutation.getFieldMask(),Se.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new wb(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zs();let i=new Te((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Jt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=f_();c.forEach(d=>{if(!s.has(d)){const m=a_(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(kr());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:d_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ns();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new ac(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,be.newInvalidDocument(u)))});let o=Ns();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&js(u.mutation,l,Jt.empty(),Se.now()),Jp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):C.resolve(be.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return C.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:pn(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:mb(r.bundledQuery),readTime:pn(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.overlays=new Te(L.comparator),this.es=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=kr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=kr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fb(n,r));let s=this.es.get(n);s===void 0&&(s=q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.ns=new ke(Ie.ss),this.rs=new ke(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new le([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new le([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||X(e._s,n._s)}static os(e,n){return X(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ke(Ie.ss)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new db(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(X);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),C.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new L(s),0);let a=new ke(X);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),C.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return C.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ie(n,0),i=this.gs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.Es=e,this.docs=new Te(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),C.resolve(r)}getAllFromCollection(e,n,r){let i=Cn();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||hP(cP(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,i){F()}As(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Cb(this)}getSize(e){return C.resolve(this.size)}}class Cb extends vb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.persistence=e,this.Rs=new rs(n=>Qp(n),Xp),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tm,this.targetCount=0,this.vs=Fi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),C.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Fi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Dn(n),C.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Kp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ib(this),this.indexManager=new gb,this.remoteDocumentCache=function(r){return new Tb(r)}(r=>this.referenceDelegate.xs(r)),this.It=new pb(n),this.Ns=new _b(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Sb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new kb(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new xb(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return C.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class xb extends fP{constructor(e){super(),this.currentSequenceNumber=e}}class nm{constructor(e){this.persistence=e,this.Fs=new tm,this.$s=null}static Bs(e){return new nm(e)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),C.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return C.or([()=>C.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(qy(n))return C.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gd(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Gd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return qy(n)||i.isEqual(z.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(Ly()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qd(n)),this.Bi(e,o,n,uP(i,-1)))})}Fi(e,n){let r=new ke(e_(e));return n.forEach((i,s)=>{Jp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Ly()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Qd(n)),this.Ni.getDocumentsMatchingQuery(e,n,ir.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Te(X),this.qi=new rs(s=>Qp(s),Xp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Eb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Db(t,e,n,r){return new Rb(t,e,n,r)}async function S_(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Pb(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=C.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const w=l.docVersions.get(m);ne(w!==null),y.version.compareTo(w)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function k_(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function bb(t,e){const n=B(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Ue.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,w,_){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=Cn(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Ob(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function Ob(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Lb(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $b(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new xr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Zd(t,e,n){const r=B(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function ev(t,e,n){const r=B(t);let i=z.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=B(a),h=c.qi.get(u);return h!==void 0?C.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Tn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:q())).next(a=>(Mb(r,PP(e),a),{documents:a,Hi:s})))}function Mb(t,e,n){let r=z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class tv{constructor(){this.activeTargetIds=p_()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ub{constructor(){this.Lr=new tv,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new tv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);O("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw $y("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ts,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=Bb[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new ZD;a.listenOnce(XD.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case vh.NO_ERROR:const u=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(u)),s(u);break;case vh.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case vh.HTTP_ERROR:const c=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(h.status);o(new $(d,h.message))}else o(new $(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(T.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=GD(),o=QD(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new JD({})),this.ho(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new Vb({Hr:y=>{h?O("Connection","Not sending because WebChannel is closed:",y):(c||(O("Connection","Opening WebChannel transport."),u.open(),c=!0),O("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),m=(y,w,_)=>{y.listen(w,g=>{try{_(g)}catch(p){setTimeout(()=>{throw p},0)}})};return m(u,Na.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),m(u,Na.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),m(u,Na.EventType.ERROR,y=>{h||(h=!0,$y("Connection","WebChannel transport errored:",y),d.io(new $(T.UNAVAILABLE,"The operation could not be completed")))}),m(u,Na.EventType.MESSAGE,y=>{var w;if(!h){const _=y.data[0];ne(!!_);const g=_,p=g.error||((w=g[0])===null||w===void 0?void 0:w.error);if(p){O("Connection","WebChannel received error:",p);const v=p.status;let E=function(N){const A=ge[N];if(A!==void 0)return c_(A)}(v),I=p.message;E===void 0&&(E=T.INTERNAL,I="Unknown error status: "+v+" with message "+p.message),h=!0,d.io(new $(E,I)),u.close()}else O("Connection","WebChannel received:",_),d.ro(_)}}),m(o,YD.STAT_EVENT,y=>{y.stat===by.PROXY?O("Connection","Detected buffering proxy"):y.stat===by.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Eh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){return new YP(t,!0)}class T_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new T_(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new $(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zb extends C_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=eb(this.It,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?pn(s.readTime):z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Jd(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Kd(a)?{documents:rb(i,a)}:{query:ib(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=y_(i,s.resumeToken):s.snapshotVersion.compareTo(z.min())>0&&(o.readTime=Kl(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=ob(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Jd(this.It),n.removeTarget=e,this.Bo(n)}}class Hb extends C_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=nb(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.Zo(r,n)}return ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Jd(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tb(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class Wb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(kn(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l._u.add(4),await ea(l),l.gu.set("Unknown"),l._u.delete(4),await fc(l)}(this))})}),this.gu=new Wb(r,i)}}async function fc(t){if(Gr(t))for(const e of t.wu)await e(!0)}async function ea(t){for(const e of t.wu)await e(!1)}function I_(t,e){const n=B(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),om(n)?sm(n):is(n).ko()&&im(n,e))}function N_(t,e){const n=B(t),r=is(n);n.du.delete(e),r.ko()&&x_(n,e),n.du.size===0&&(r.ko()?r.Fo():Gr(n)&&n.gu.set("Unknown"))}function im(t,e){t.yu.Ot(e.targetId),is(t).zo(e)}function x_(t,e){t.yu.Ot(e),is(t).Ho(e)}function sm(t){t.yu=new GP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),is(t).start(),t.gu.uu()}function om(t){return Gr(t)&&!is(t).No()&&t.du.size>0}function Gr(t){return B(t)._u.size===0}function A_(t){t.yu=void 0}async function Gb(t){t.du.forEach((e,n)=>{im(t,e)})}async function Qb(t,e){A_(t),om(t)?(t.gu.hu(e),sm(t)):t.gu.set("Unknown")}async function Xb(t,e,n){if(t.gu.set("Online"),e instanceof g_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gl(t,r)}else if(e instanceof Xa?t.yu.Gt(e):e instanceof m_?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(z.min()))try{const r=await k_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Ue.EMPTY_BYTE_STRING,l.snapshotVersion)),x_(i,a);const u=new xr(l.target,a,1,l.sequenceNumber);im(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Gl(t,r)}}async function Gl(t,e,n){if(!Yo(e))throw e;t._u.add(1),await ea(t),t.gu.set("Offline"),n||(n=()=>k_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await fc(t)})}function R_(t,e){return e().catch(n=>Gl(t,n,e))}async function pc(t){const e=B(t),n=or(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Yb(e);)try{const i=await Lb(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,Jb(e,i)}catch(i){await Gl(e,i)}D_(e)&&P_(e)}function Yb(t){return Gr(t)&&t.fu.length<10}function Jb(t,e){t.fu.push(e);const n=or(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function D_(t){return Gr(t)&&!or(t).No()&&t.fu.length>0}function P_(t){or(t).start()}async function Zb(t){or(t).eu()}async function eO(t){const e=or(t);for(const n of t.fu)e.Xo(n.mutations)}async function tO(t,e,n){const r=t.fu.shift(),i=em.from(r,e,n);await R_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pc(t)}async function nO(t,e){e&&or(t).Yo&&await async function(n,r){if(i=r.code,zP(i)&&i!==T.ABORTED){const s=n.fu.shift();or(n).Oo(),await R_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await pc(n)}var i}(t,e),D_(t)&&P_(t)}async function rv(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n._u.add(3),await ea(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await fc(n)}async function rO(t,e){const n=B(t);e?(n._u.delete(2),await fc(n)):e||(n._u.add(2),await ea(n),n.gu.set("Unknown"))}function is(t){return t.pu||(t.pu=function(e,n,r){const i=B(e);return i.su(),new zb(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Gb.bind(null,t),Zr:Qb.bind(null,t),Wo:Xb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),om(t)?sm(t):t.gu.set("Unknown")):(await t.pu.stop(),A_(t))})),t.pu}function or(t){return t.Iu||(t.Iu=function(e,n,r){const i=B(e);return i.su(),new Hb(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Zb.bind(null,t),Zr:nO.bind(null,t),tu:eO.bind(null,t),Zo:tO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await pc(t)):(await t.Iu.stop(),t.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new am(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lm(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Yo(t))return new $(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.Tu=new Te(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):F():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Bi(e,n,Ci.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.Au=void 0,this.listeners=[]}}class sO{constructor(){this.queries=new rs(e=>ZE(e),lc),this.onlineState="Unknown",this.Ru=new Set}}async function b_(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new iO),i)try{s.Au=await n.onListen(r)}catch(o){const a=lm(o,`Initialization of query '${Qd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&um(n)}async function O_(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function oO(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&um(n)}function aO(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function um(t){t.Ru.forEach(e=>{e.next()})}class L_{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.key=e}}class M_{constructor(e){this.key=e}}class lO{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=q(),this.mutatedKeys=q(),this.Ku=e_(e),this.Gu=new Ci(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new iv,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Jp(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;d&&m?d.data.isEqual(m.data)?y!==w&&(r.track({type:3,doc:m}),_=!0):this.zu(d,m)||(r.track({type:2,doc:m}),_=!0,(l&&this.Ku(m,l)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),_=!0):d&&!m&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(m?(o=o.add(m),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return m(h)-m(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Bi(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new iv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=q(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new M_(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new $_(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=q();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Bi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class uO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cO{constructor(e){this.key=e,this.ec=!1}}class hO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new rs(a=>ZE(a),lc),this.ic=new Map,this.rc=new Set,this.oc=new Te(L.comparator),this.uc=new Map,this.cc=new tm,this.ac={},this.hc=new Map,this.lc=Fi.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function dO(t,e){const n=SO(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await $b(n.localStore,Tn(e));n.isPrimaryClient&&I_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await fO(n,e,r,a==="current")}return i}async function fO(t,e,n,r){t.dc=(c,h,d)=>async function(m,y,w,_){let g=y.view.ju(w);g.$i&&(g=await ev(m.localStore,y.query,!1).then(({documents:E})=>y.view.ju(E,g)));const p=_&&_.targetChanges.get(y.targetId),v=y.view.applyChanges(g,m.isPrimaryClient,p);return ov(m,y.targetId,v.Yu),v.snapshot}(t,c,h,d);const i=await ev(t.localStore,e,!0),s=new lO(e,i.Hi),o=s.ju(i.documents),a=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);ov(t,n,l.Yu);const u=new uO(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function pO(t,e){const n=B(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!lc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),N_(n.remoteStore,r.targetId),ef(n,r.targetId)}).catch(Xo)):(ef(n,r.targetId),await Zd(n.localStore,r.targetId,!0))}async function mO(t,e,n){const r=kO(t);try{const i=await function(s,o){const a=B(s),l=Se.now(),u=o.reduce((d,m)=>d.add(m.key),q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Cn(),y=q();return a.Gi.getEntries(d,u).next(w=>{m=w,m.forEach((_,g)=>{g.isValidDocument()||(y=y.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(w=>{c=w;const _=[];for(const g of o){const p=BP(g,c.get(g.key).overlayedDocument);p!=null&&_.push(new Kr(g.key,p,YE(p.value.mapValue),fn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(w=>{h=w;const _=w.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,_)})}).then(()=>({batchId:h.batchId,changes:d_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Te(X)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await ta(r,i.changes),await pc(r.remoteStore)}catch(i){const s=lm(i,"Failed to persist write");n.reject(s)}}async function U_(t,e){const n=B(t);try{const r=await bb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ne(o.ec):i.removedDocuments.size>0&&(ne(o.ec),o.ec=!1))}),await ta(n,r,e)}catch(r){await Xo(r)}}function sv(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=B(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&um(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gO(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Te(L.comparator);o=o.insert(s,be.newNoDocument(s,z.min()));const a=q().add(s),l=new hc(z.min(),new Map,new ke(X),o,a);await U_(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),cm(r)}else await Zd(r.localStore,e,!1).then(()=>ef(r,e,n)).catch(Xo)}async function yO(t,e){const n=B(t),r=e.batch.batchId;try{const i=await Pb(n.localStore,e);B_(n,r,null),F_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,i)}catch(i){await Xo(i)}}async function vO(t,e,n){const r=B(t);try{const i=await function(s,o){const a=B(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ne(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);B_(r,e,n),F_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,i)}catch(i){await Xo(i)}}function F_(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function B_(t,e,n){const r=B(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function ef(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||V_(t,r)})}function V_(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(N_(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),cm(t))}function ov(t,e,n){for(const r of n)r instanceof $_?(t.cc.addReference(r.key,e),wO(t,r)):r instanceof M_?(O("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||V_(t,r.key)):F()}function wO(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.rc.add(r),cm(t))}function cm(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new L(le.fromString(e)),r=t.lc.next();t.uc.set(r,new cO(n)),t.oc=t.oc.insert(n,r),I_(t.remoteStore,new xr(Tn(Yp(n.path)),r,2,Kp.at))}}async function ta(t,e,n){const r=B(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=rm.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=B(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>C.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Yo(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function EO(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await S_(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new $(T.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.ji)}}function _O(t,e){const n=B(t),r=n.uc.get(e);if(r&&r.ec)return q().add(r.key);{let i=q();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function SO(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=U_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_O.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gO.bind(null,e),e.nc.Wo=oO.bind(null,e.eventManager),e.nc._c=aO.bind(null,e.eventManager),e}function kO(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vO.bind(null,e),e}class TO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=dc(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return Db(this.persistence,new Ab,e.initialUser,this.It)}gc(e){return new Nb(nm.Bs,this.It)}mc(e){return new Ub}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EO.bind(null,this.syncEngine),await rO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sO}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new jb(i));var i;return function(s,o,a,l){return new qb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>sv(this.syncEngine,a,0),o=nv.C()?new nv:new Fb,new Kb(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new hO(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ea(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=KE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function NO(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await S_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function xO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AO(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>rv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>rv(e.remoteStore,s)),t.onlineComponents=e}async function AO(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await NO(t,new TO)),t.offlineComponents}async function z_(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await xO(t,new CO)),t.onlineComponents}function RO(t){return z_(t).then(e=>e.syncEngine)}async function H_(t){const e=await z_(t),n=e.eventManager;return n.onListen=dO.bind(null,e.syncEngine),n.onUnlisten=pO.bind(null,e.syncEngine),n}function DO(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new j_({next:h=>{s.enqueueAndForget(()=>O_(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new $(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new $(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new L_(Yp(o.path),u,{includeMetadataChanges:!0,Nu:!0});return b_(i,c)}(await H_(t),t.asyncQueue,e,n,r)),r.promise}function PO(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new j_({next:h=>{s.enqueueAndForget(()=>O_(i,c)),h.fromCache&&a.source==="server"?l.reject(new $(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new L_(o,u,{includeMetadataChanges:!0,Nu:!0});return b_(i,c)}(await H_(t),t.asyncQueue,e,n,r)),r.promise}const av=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,e,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bO(t,e,n,r){if(e===!0&&r===!0)throw new $(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lv(t){if(!L.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uv(t){if(L.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hm(t);throw new $(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tP;switch(n.type){case"gapi":const r=n.client;return new iP(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=av.get(e);n&&(O("ComponentProvider","Removing Datastore"),av.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class mc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mc(this.firestore,e,this._query)}}class Jn extends mc{constructor(e,n,r){super(e,n,Yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new L(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function W_(t,e,...n){if(t=Me(t),q_("collection","path",e),t instanceof dm){const r=le.fromString(e,...n);return uv(r),new Jn(t,null,r)}{if(!(t instanceof pt||t instanceof Jn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return uv(r),new Jn(t.firestore,null,r)}}function K_(t,e,...n){if(t=Me(t),arguments.length===1&&(e=KE.R()),q_("doc","path",e),t instanceof dm){const r=le.fromString(e,...n);return lv(r),new pt(t,null,new L(r))}{if(!(t instanceof pt||t instanceof Jn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return lv(r),new pt(t.firestore,t instanceof Jn?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new T_(this,"async_queue_retry"),this.jc=()=>{const n=Eh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Eh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new dn;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Yo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=am.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&F()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class gc extends dm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new OO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||G_(this),this._firestoreClient.terminate()}}function LO(t,e){const n=typeof t=="object"?t:mp(),r=typeof t=="string"?t:e||"(default)";return Bu(n,"firestore").getImmediate({identifier:r})}function fm(t){return t._firestoreClient||G_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function G_(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new mP(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new IO(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(Ue.fromBase64String(e))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ji(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=/^__.*__$/;class MO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}function X_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class gm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new gm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Ql(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(X_(this.na)&&$O.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class UO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||dc(e)}fa(e,n,r,i=!1){return new gm({na:e,methodName:n,la:r,path:He.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function FO(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new UO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BO(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);eS("Data must be an object, but it was:",o,r);const a=J_(r,o);let l,u;if(s.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=VO(e,h,n);if(!o.contains(d))throw new $(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zO(c,d)||c.push(d)}l=new Jt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new MO(new Tt(a),l,u)}function Y_(t,e){if(Z_(t=Me(t)))return eS("Unsupported field value:",e,t),J_(t,e);if(t instanceof Q_)return function(n,r){if(!X_(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Y_(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return OP(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Se.fromDate(n);return{timestampValue:Kl(r.It,i)}}if(n instanceof Se){const i=new Se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Kl(r.It,i)}}if(n instanceof mm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ji)return{bytesValue:y_(r.It,n._byteString)};if(n instanceof pt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${hm(n)}`)}(t,e)}function J_(t,e){const n={};return GE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,(r,i)=>{const s=Y_(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Z_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof mm||t instanceof ji||t instanceof pt||t instanceof Q_)}function eS(t,e,n){if(!Z_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=hm(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function VO(t,e,n){if((e=Me(e))instanceof pm)return e._internalPath;if(typeof e=="string")return tS(t,e);throw Ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const jO=new RegExp("[~\\*/\\[\\]]");function tS(t,e,n){if(e.search(jO)>=0)throw Ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pm(...e.split("."))._internalPath}catch{throw Ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(T.INVALID_ARGUMENT,a+t+l)}function zO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HO extends nS{data(){return super.data()}}function rS(t,e){return typeof e=="string"?tS(t,e):e instanceof pm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iS extends nS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ya extends iS{data(e={}){return super.data(e)}}class qO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ya(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ya(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:WO(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{convertValue(e,n="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return ns(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mm(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=XE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=sr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);ne(__(r));const i=new ko(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){t=Vi(t,pt);const e=Vi(t.firestore,gc);return DO(fm(e),t._key).then(n=>ZO(e,t,n))}class sS extends GO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function oS(t){t=Vi(t,mc);const e=Vi(t.firestore,gc),n=fm(e),r=new sS(e);return KO(t._query),PO(n,t._query).then(i=>new qO(e,r,t,i))}function YO(t,e,n){t=Vi(t,pt);const r=Vi(t.firestore,gc),i=QO(t.converter,e,n);return JO(r,[BO(FO(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fn.none())])}function JO(t,e){return function(n,r){const i=new dn;return n.asyncQueue.enqueueAndForget(async()=>mO(await RO(n),r,i)),i.promise}(fm(t),e)}function ZO(t,e,n){const r=n.docs.get(e._key),i=new sS(t);return new iS(t,i,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ts=n})(Xi),Mr(new rr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new gc(new nP(n.getProvider("auth-internal")),new oP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Qt(Oy,"3.5.0",t),Qt(Oy,"3.5.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firebasestorage.googleapis.com",lS="storageBucket",eL=2*60*1e3,tL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends en{constructor(e,n){super(_h(e),`Firebase Storage: ${n} (${_h(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}_codeEquals(e){return _h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _h(t){return"storage/"+t}function ym(){const t="An unknown error occurred, please check the error payload for server response.";return new fe("unknown",t)}function nL(t){return new fe("object-not-found","Object '"+t+"' does not exist.")}function rL(t){return new fe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function iL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe("unauthenticated",t)}function sL(){return new fe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function oL(t){return new fe("unauthorized","User does not have permission to access '"+t+"'.")}function aL(){return new fe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function uS(){return new fe("canceled","User canceled the upload/download.")}function lL(t){return new fe("invalid-url","Invalid URL '"+t+"'.")}function uL(t){return new fe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function cL(){return new fe("no-default-bucket","No default bucket found. Did you set the '"+lS+"' property when initializing the app?")}function cS(){return new fe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function hL(){return new fe("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function dL(){return new fe("no-download-url","The given file does not have any download URLs.")}function tf(t){return new fe("invalid-argument",t)}function hS(){return new fe("app-deleted","The Firebase app was deleted.")}function fL(t){return new fe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hs(t,e){return new fe("invalid-format","String does not match format '"+t+"': "+e)}function ys(t){throw new fe("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=dt.makeFromUrl(e,n)}catch{return new dt(e,"")}if(r.path==="")return r;throw uL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},w=n===aS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${_}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const I=v[E],N=I.regex.exec(e);if(N){const A=N[I.indices.bucket];let P=N[I.indices.path];P||(P=""),r=new dt(A,P),I.postModify(r);break}}if(r==null)throw lL(e);return r}}class pL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(m,l())},_)}function d(){s&&clearTimeout(s)}function m(_,...g){if(u){d();return}if(_){d(),c.call(null,_,...g);return}if(l()||o){d(),c.call(null,_,...g);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let y=!1;function w(_){y||(y=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function gL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(t){return t!==void 0}function vL(t){return typeof t=="function"}function wL(t){return typeof t=="object"&&!Array.isArray(t)}function yc(t){return typeof t=="string"||t instanceof String}function hv(t){return vm()&&t instanceof Blob}function vm(){return typeof Blob<"u"}function dv(t,e,n,r){if(r<e)throw tf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function dS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ar||(Ar={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ra(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ar.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===Ar.ABORT;r(!1,new Ra(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ra(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());yL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ym();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?hS():uS();o(l)}else{const l=aL();o(l)}};this.canceled_?n(!1,new Ra(!1,null,!0)):this.backoffId_=mL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Ra{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _L(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function SL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function kL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CL(t,e,n,r,i,s){const o=dS(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return kL(l,e),_L(l,n),SL(l,s),TL(l,r),new EL(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function NL(...t){const e=IL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vm())return new Blob(t);throw new fe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function xL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sh{constructor(e,n){this.data=e,this.contentType=n||null}}function RL(t,e){switch(t){case qt.RAW:return new Sh(fS(e));case qt.BASE64:case qt.BASE64URL:return new Sh(pS(t,e));case qt.DATA_URL:return new Sh(PL(e),bL(e))}throw ym()}function fS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function DL(t){let e;try{e=decodeURIComponent(t)}catch{throw Hs(qt.DATA_URL,"Malformed data URL.")}return fS(e)}function pS(t,e){switch(t){case qt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Hs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case qt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Hs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=AL(e)}catch{throw Hs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class mS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Hs(qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=OL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PL(t){const e=new mS(t);return e.base64?pS(qt.BASE64,e.rest):DL(e.rest)}function bL(t){return new mS(t).contentType}function OL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){let r=0,i="";hv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(hv(this.data_)){const r=this.data_,i=xL(r,e,n);return i===null?null:new Un(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Un(r,!0)}}static getBlob(...e){if(vm()){const n=e.map(r=>r instanceof Un?r.data_:r);return new Un(NL.apply(null,n))}else{const n=e.map(o=>yc(o)?RL(qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Un(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t){let e;try{e=JSON.parse(t)}catch{return null}return wL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $L(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function yS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(t,e){return e}class Qe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ML}}let Da=null;function UL(t){return!yc(t)||t.length<2?t:yS(t)}function vS(){if(Da)return Da;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(s,o){return UL(o)}const n=new Qe("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Qe("size");return i.xform=r,t.push(i),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),Da=t,Da}function FL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function BL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return FL(r,t),r}function wS(t,e,n){const r=gS(e);return r===null?null:BL(t,r,n)}function VL(t,e,n,r){const i=gS(e);if(i===null||!yc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=na(d,n,r),y=dS({alt:"media",token:u});return m+y})[0]}function ES(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ss{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){if(!t)throw ym()}function wm(t,e){function n(r,i){const s=wS(t,i,e);return mn(s!==null),s}return n}function jL(t,e){function n(r,i){const s=wS(t,i,e);return mn(s!==null),VL(s,i,t.host,t._protocol)}return n}function ra(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=sL():i=iL():n.getStatus()===402?i=rL(t.bucket):n.getStatus()===403?i=oL(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function _S(t){const e=ra(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=nL(t.path)),s.serverResponse=i.serverResponse,s}return n}function zL(t,e,n){const r=e.fullServerUrl(),i=na(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ss(i,s,wm(t,n),o);return a.errorHandler=_S(e),a}function HL(t,e,n){const r=e.fullServerUrl(),i=na(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ss(i,s,jL(t,n),o);return a.errorHandler=_S(e),a}function qL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function SS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qL(null,e)),r}function WL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let E=0;E<2;E++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=SS(e,r,i),c=ES(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=Un.getBlob(h,r,d);if(m===null)throw cS();const y={name:u.fullPath},w=na(s,t.host,t._protocol),_="POST",g=t.maxUploadRetryTime,p=new ss(w,_,wm(t,n),g);return p.urlParams=y,p.headers=o,p.body=m.uploadData(),p.errorHandler=ra(e),p}class Xl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Em(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{mn(!1)}return mn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function KL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=SS(e,r,i),a={name:o.fullPath},l=na(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ES(o,n),d=t.maxUploadRetryTime;function m(w){Em(w);let _;try{_=w.getResponseHeader("X-Goog-Upload-URL")}catch{mn(!1)}return mn(yc(_)),_}const y=new ss(l,u,m,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=ra(e),y}function GL(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Em(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{mn(!1)}h||mn(!1);const d=Number(h);return mn(!isNaN(d)),new Xl(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ss(n,o,s,a);return l.headers=i,l.errorHandler=ra(e),l}const fv=256*1024;function QL(t,e,n,r,i,s,o,a){const l=new Xl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw hL();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c,y={"X-Goog-Upload-Command":c===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},w=r.slice(h,d);if(w===null)throw cS();function _(E,I){const N=Em(E,["active","final"]),A=l.current+c,P=r.size();let Y;return N==="final"?Y=wm(e,s)(E,I):Y=null,new Xl(A,P,N==="final",Y)}const g="POST",p=e.maxUploadRetryTime,v=new ss(n,g,_,p);return v.headers=y,v.body=w.uploadData(),v.progressCallback=a||null,v.errorHandler=ra(t),v}const rt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function kh(t){switch(t){case"running":case"pausing":case"canceling":return rt.RUNNING;case"paused":return rt.PAUSED;case"success":return rt.SUCCESS;case"canceled":return rt.CANCELED;case"error":return rt.ERROR;default:return rt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r){if(vL(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class YL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ar.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ar.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ar.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ys("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class JL extends YL{initXhr(){this.xhr_.responseType="text"}}function Jr(){return new JL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=vS(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=KL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=GL(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Jr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=fv*this._chunkMultiplier,n=new Xl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=QL(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Jr,i,s);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){fv*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=zL(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=WL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=uS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=kh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new XL(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(kh(this._state)){case rt.SUCCESS:Yr(this._resolve.bind(null,this.snapshot))();break;case rt.CANCELED:case rt.ERROR:const n=this._reject;Yr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(kh(this._state)){case rt.RUNNING:case rt.PAUSED:e.next&&Yr(e.next.bind(e,this.snapshot))();break;case rt.SUCCESS:e.complete&&Yr(e.complete.bind(e))();break;case rt.CANCELED:case rt.ERROR:e.error&&Yr(e.error.bind(e,this._error))();break;default:e.error&&Yr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this._service=e,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zr(e,n)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yS(this._location.path)}get storage(){return this._service}get parent(){const e=LL(this._location.path);if(e===null)return null;const n=new dt(this._location.bucket,e);return new zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fL(e)}}function e$(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ZL(t,new Un(e),n)}function t$(t){t._throwIfRoot("getDownloadURL");const e=HL(t.storage,t._location,vS());return t.storage.makeRequestWithTokens(e,Jr).then(n=>{if(n===null)throw dL();return n})}function n$(t,e){const n=$L(t._location.path,e),r=new dt(t._location.bucket,n);return new zr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(t){return/^[A-Za-z]+:\/\//.test(t)}function i$(t,e){return new zr(t,e)}function kS(t,e){if(t instanceof _m){const n=t;if(n._bucket==null)throw cL();const r=new zr(n,n._bucket);return e!=null?kS(r,e):r}else return e!==void 0?n$(t,e):t}function s$(t,e){if(e&&r$(e)){if(t instanceof _m)return i$(t,e);throw tf("To use ref(service, url), the first argument must be a Storage instance.")}else return kS(t,e)}function pv(t,e){const n=e==null?void 0:e[lS];return n==null?null:dt.makeFromBucketSpec(n,t)}class _m{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=aS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eL,this._maxUploadRetryTime=tL,this._requests=new Set,i!=null?this._bucket=dt.makeFromBucketSpec(i,this._host):this._bucket=pv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=pv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zr(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new pL(hS());{const s=CL(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const mv="@firebase/storage",gv="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="storage";function o$(t,e,n){return t=Me(t),e$(t,e,n)}function a$(t){return t=Me(t),t$(t)}function l$(t,e){return t=Me(t),s$(t,e)}function u$(t=mp(),e){return t=Me(t),Bu(t,TS).getImmediate({identifier:e})}function c$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new _m(n,r,i,e,Xi)}function h$(){Mr(new rr(TS,c$,"PUBLIC").setMultipleInstances(!0)),Qt(mv,gv,""),Qt(mv,gv,"esm2017")}h$();const d$={apiKey:"AIzaSyDJLTSOi7VjGZ3IYRPak2yfBZIee20nbrw",authDomain:"perfume-website-58714.firebaseapp.com",projectId:"perfume-website-58714",storageBucket:"perfume-website-58714.appspot.com",messagingSenderId:"549051584716",appId:"1:549051584716:web:b72494bb16d0f71552f269"},f$=Vx(d$),vc=LO(),p$=u$(),wc=QR(f$),Sm=x.exports.createContext(),m$=({children:t})=>{const[e,n]=x.exports.useState({});return x.exports.useEffect(()=>{const r=MA(wc,i=>{n(i)});return()=>{r()}}),f(Sm.Provider,{value:{currentUser:e},children:t})};const CS="/assets/logo.c2186f0b.png";const g$=()=>{const[t,e]=x.exports.useState(!1),r=vu(i=>i.cart.itemList).reduce((i,s)=>i+s.itemCount,0);return S("div",{className:"header",children:[f("button",{className:"toggle-btn",onClick:()=>e(!t),children:f("i",{className:"bi bi-list"})}),f(sn,{to:"/",children:f("img",{src:CS,alt:"page-logo"})}),S("div",{className:t?"horizontal-menu":"vertical-menu",children:[S("div",{className:"pages-group",children:[f("button",{className:"toggle-btn",onClick:()=>e(!t),children:f("i",{className:"bi bi-x-lg"})}),f("span",{children:f(sn,{to:"/",children:"Home"})}),f("span",{children:f(sn,{to:"/reviews",children:"Reviews"})}),f("span",{children:f(sn,{to:"/contact",children:"Contact"})})]}),S("div",{className:"icon-group",children:[f("span",{children:f("i",{className:"bi bi-bookmark-heart"})}),f("span",{children:f(sn,{to:"/userInfos",children:f("i",{className:"bi bi-person"})})}),f("span",{className:"cart-icon",children:S(sn,{to:"/cart",children:[f("i",{className:"bi bi-cart"}),f("small",{children:r})]})})]})]})]})},y$="/assets/facebookLink.1c2fa2f2.png";const v$=()=>S("div",{className:"footer",children:[S("div",{className:"main-info",children:[S("div",{className:"info",children:[f("img",{src:CS,alt:"page-logo"}),f("h3",{children:"H\u1ED8 KINH DOANH SSS'cent"}),f("p",{children:"GPKD s\u1ED1: 58A8087124"}),f("p",{children:"Ng\xE0y c\u1EA5p: 02/10/2022"}),f("p",{children:"C\u1EA5p b\u1EDFi: UBND TP XYZ"}),S("ul",{children:[S("li",{children:[f("span",{children:f("i",{className:"bi bi-geo-alt"})}),f("span",{className:"text",children:"77 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, P.7, Qu\u1EA3ng Nam"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-telephone"})}),f("span",{className:"text",children:"0966445267"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-envelope"})}),f("span",{className:"text",children:"support@mail.com.vn"})]})]})]}),S("div",{className:"customer-policy",children:[f("h3",{children:"H\u1ED6 TR\u1EE2 KH\xC1CH H\xC0NG"}),S("ul",{children:[S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"Ch\xEDnh s\xE1ch v\u1EADn chuy\u1EC3n"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"Ch\xEDnh s\xE1ch \u0111\u1ED5i tr\u1EA3"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"H\xECnh th\u1EE9c thanh to\xE1n"})]})]})]}),S("div",{className:"customer-policy",children:[f("h3",{children:"H\u01AF\u1EDANG D\u1EAAN"}),S("ul",{children:[S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"H\u01B0\u1EDBng d\u1EABn mua h\xE0ng"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"H\u01B0\u1EDBng d\u1EABn thanh to\xE1n"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"H\u01B0\u1EDBng d\u1EABn giao nh\u1EADn"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-chevron-right"})}),f("span",{className:"text",children:"\u0110i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5"})]})]})]}),S("div",{className:"fblink",children:[f("h3",{children:"K\u1EBET N\u1ED0I TR\xCAN FACEBOOK"}),f("a",{href:"https://www.facebook.com/",target:"_blank",children:f("img",{src:y$,alt:"fblink"})})]})]}),f("div",{className:"line"}),S("div",{className:"other-info",children:[f("p",{children:"2020 - B\u1EA3n quy\u1EC1n thu\u1ED9c v\u1EC1 Chi\u1EBFt N\u01B0\u1EDBc Hoa Chuy\xEAn N\u01B0\u1EDBc Hoa Chi\u1EBFt Ch\xEDnh H\xE3ng - Cung c\u1EA5p b\u1EDFi ABCD"}),S("div",{className:"social-media",children:[f("span",{children:f("i",{className:"bi bi-facebook"})}),f("span",{children:f("i",{className:"bi bi-chat"})}),f("span",{children:f("i",{className:"bi bi-telephone"})})]})]})]}),w$="/assets/slide-1.2dfcb74f.jpg",E$="/assets/slide-2.ea486c05.jpg",_$="/assets/slide-3.ae6a81b1.png",Ec=({bannerNum:t})=>S("div",{className:"carousel",children:[t===1&&f("div",{children:f("img",{src:w$,loading:"lazy"})}),t===2&&f("div",{children:f("img",{src:E$,loading:"lazy"})}),t===3&&f("div",{children:f("img",{src:_$,loading:"lazy"})})]});const yv=({index:t,productData:e})=>{const{productName:n,brandName:r,productPrice:i,productPhoto:s}=e,o=Fu(),a=bo();return S("div",{className:"product",children:[f("img",{src:s,alt:"productPhoto",loading:"lazy"}),S("div",{className:"btn-group",children:[S("span",{onClick:()=>a(`/product-detail/${t}`),children:[f("small",{children:"View product"}),f("i",{className:"bi bi-three-dots"})]}),S("span",{onClick:l=>{l.stopPropagation(),o(dp({itemCount:1,productName:n,brandName:r,productPrice:i,productPhoto:s})),o(lw())},children:[f("small",{children:"Add to cart"}),f("i",{className:"bi bi-cart-plus"})]}),S("span",{onClick:l=>{l.stopPropagation(),o(kN())},children:[f("small",{children:"Favorite"}),f("i",{className:"bi bi-heart"})]})]}),f(sn,{to:`/product-detail/${t}`,children:f("span",{className:"product-name",children:n})}),f("span",{className:"product-price",children:`${new Intl.NumberFormat().format(i)} VND`})]})},IS=t=>{const[e,n]=x.exports.useState([]),[r,i]=x.exports.useState(!0);return x.exports.useEffect(()=>{let s=!0;return(async()=>{const a=[],l=await oS(W_(vc,`${t}`));s&&(l.forEach(u=>{a.push({id:u.id,productData:u.data()})}),n(a),i(!1))})(),()=>{s=!1}},[]),{isLoading:r,datas:e,setDatas:n}},vv=({count:t})=>Array(t).fill(0).map((e,n)=>S("div",{className:"product-skeleton",children:[f(kt,{style:{width:"16rem",height:"16rem"}}),f("span",{children:f(kt,{style:{width:"12rem",height:"1.5rem"}})}),f("span",{children:f(kt,{style:{width:"10rem",height:"1.5rem"}})})]},n)),S$=()=>{const{isLoading:t,datas:e,setDatas:n}=IS("products"),[r,i]=x.exports.useState(!1),s=async o=>{const a=[];(await oS(W_(vc,"products"))).forEach(u=>{a.push({id:u.id,productData:u.data()})}),o.length>1?n([...a].filter(u=>u.productData.productName.toLowerCase().includes(o.toLocaleLowerCase()))):n(a)};return S(Ht,{children:[f(Ec,{bannerNum:1}),S("div",{className:"homepage",children:[S("div",{className:"sort-btn-group",children:[S("button",{onClick:()=>n([...e].sort((o,a)=>o.productData.productName.localeCompare(a.productData.productName))),children:[f("i",{className:"bi bi-sort-alpha-down"}),"T\xEAn s\u1EA3n ph\u1EA9m"]}),S("button",{onClick:()=>n([...e].sort((o,a)=>a.productData.productName.localeCompare(o.productData.productName))),children:[f("i",{className:"bi bi-sort-alpha-up"}),"T\xEAn s\u1EA3n ph\u1EA9m"]}),S("button",{onClick:()=>n([...e].sort((o,a)=>o.productData.productPrice-a.productData.productPrice)),children:[f("i",{className:"bi bi-sort-alpha-down"}),"Gi\xE1 s\u1EA3n ph\u1EA9m"]}),S("button",{onClick:()=>n([...e].sort((o,a)=>a.productData.productPrice-o.productData.productPrice)),children:[f("i",{className:"bi bi-sort-alpha-up"}),"Gi\xE1 s\u1EA3n ph\u1EA9m"]}),f("button",{className:"search-btn",onClick:()=>i(!r),children:f("i",{className:"bi bi-search"})}),r&&f("input",{type:"text",onChange:o=>s(o.target.value),placeholder:"Nh\u1EADp n\u1ED9i dung t\xECm ki\u1EBFm...",autoFocus:!0})]}),S("h2",{children:["N\u01AF\u1EDAC HOA DESIGNER NAM"," ",S("small",{children:["C\xF3"," ",[...e].filter(o=>o.productData.productCategory==="Designer Nam").length," ","s\u1EA3n ph\u1EA9m"]})," "]}),f("div",{className:"products-container",children:t?f(vv,{count:9}):[...e].filter(o=>o.productData.productCategory==="Designer Nam").map(o=>f(yv,{index:o.id,productData:o.productData},o.id))}),S("h2",{children:["N\u01AF\u1EDAC HOA NICHE NAM"," ",S("small",{children:["C\xF3"," ",[...e].filter(o=>o.productData.productCategory==="Niche Nam").length," ","s\u1EA3n ph\u1EA9m"]})]}),f("div",{className:"products-container",children:t?f(vv,{count:9}):[...e].filter(o=>o.productData.productCategory==="Niche Nam").map(o=>f(yv,{index:o.id,productData:o.productData},o.id))})]})]})},k$=({id:t,postData:e})=>S("div",{className:"review-post",children:[f("div",{className:"post-info",children:f("img",{src:e.postPhoto,loading:"lazy"})}),S("div",{className:"post-detail",children:[f("p",{children:e.title}),S("span",{children:[S("small",{children:["Ng\xE0y vi\u1EBFt: ",new Date(+t).toString()," "]}),f("div",{className:"yLine"}),f("small",{children:"Vi\u1EBFt b\u1EDFi: SS'Scent"})]}),S("p",{children:[e.desc+"..."," ",f("a",{children:"Xem ti\u1EBFp"})," "]})]})]});const T$=({count:t})=>Array(t).fill(0).map((e,n)=>S("div",{className:"post-skeleton",children:[f("div",{className:"post-info",children:f(kt,{height:"19rem"})}),S("div",{className:"post-detail",children:[f(kt,{width:"100%",height:"2.5rem"}),f(kt,{width:"30%",style:{marginTop:"1rem"}}),f("p",{children:f(kt,{height:"10rem"})})]})]},n)),C$=()=>{const{isLoading:t,datas:e}=IS("posts");return S("div",{className:"reviews-page",children:[f(Ec,{bannerNum:3}),f("div",{className:"reviews-container",children:t?f(T$,{count:8}):[...e].map(n=>f(k$,{id:n.id,postData:n.productData},n.id))})]})};const I$=()=>S(Ht,{children:[f(Ec,{bannerNum:2}),S("div",{className:"contact-wrapper",children:[S("div",{className:"contact-info",children:[f("p",{children:"SSS'cent"}),f("p",{children:"SSS'cent \u0111\u01B0\u1EE3c th\xE0nh l\u1EADp v\xE0o n\u0103m 2017, hi\u1EC7n \u0111ang l\xE0 nh\xE0 ph\xE2n ph\u1ED1i ch\xEDnh h\xE3ng c\u1EE7a c\xE1c nh\xE3n h\xE0ng l\u1EDBn nh\u01B0 Versace, Creed, Salvatore Ferragamo, Carolina Herrera, Jean Paul Gaultier v..v T\u1EA1i SSS'cent, t\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m \u0111\u1EC1u l\xE0 h\xE0ng ch\xEDnh h\xE3ng v\xE0 kh\xE1ch h\xE0ng s\u1EBD \u0111\u01B0\u1EE3c h\u1EADu m\xE3i \u1EDF m\u1EE9c cao nh\u1EA5t."}),f("p",{children:"C\u1EECA H\xC0NG CH\xCDNH"}),S("ul",{children:[S("li",{children:[f("span",{children:f("i",{className:"bi bi-geo-alt"})}),f("span",{className:"text",children:"77 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, P.7, Qu\u1EA3ng Nam"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-telephone"})}),f("span",{className:"text",children:"0966445267"})]}),S("li",{children:[f("span",{children:f("i",{className:"bi bi-envelope"})}),f("span",{className:"text",children:"support@mail.com.vn"})]})]}),f("div",{className:"line"}),f("h4",{children:"G\u1EECI PH\u1EA2N H\u1ED2I CHO CH\xDANG T\xD4I"}),S("form",{className:"contact-form",children:[f("input",{type:"text",placeholder:"T\xEAn c\u1EE7a b\u1EA1n"}),f("input",{type:"email",placeholder:"Email c\u1EE7a b\u1EA1n"}),f("textarea",{name:"",id:"",cols:"30",rows:"15",placeholder:"Nh\u1EADp n\u1ED9i dung"}),f("button",{type:"submit",children:"G\u1EEDi ph\u1EA3n h\u1ED3i"})]})]}),f("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.074102839984!2d106.71713771452045!3d10.728767963005986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f894320f91b%3A0xb6c098e537ce0abe!2sCrescent%20Mall!5e0!3m2!1svi!2s!4v1664773119904!5m2!1svi!2s",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})]});const N$=()=>{const[t,e]=x.exports.useState(!1),n=bo();return S("div",{className:"form-wrapper",children:[S("h2",{children:[f("span",{children:f("i",{className:"bi bi-person-fill"})})," ","\u0110\u0102NG K\xCD T\xC0I KHO\u1EA2N"]}),S("form",{onSubmit:async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value,a=i.target[2].value,l=i.target[3].files[0];try{const u=await bA(wc,o,a),c=l$(p$,l.name);o$(c,l).then(h=>{a$(h.ref).then(async d=>{try{await $A(u.user,{displayName:s,photoURL:d}),await YO(K_(vc,"userInfos",u.user.uid),{name:s,email:o,photoURL:d,favoriteList:[],cart:[]}),alert("\u0110\u0103ng k\xED t\xE0i kho\u1EA3n th\xE0nh c\xF4ng, nh\u1EA5n OK \u0111\u1EC3 ti\u1EBFp t\u1EE5c!"),n("/login")}catch{e(!0)}})})}catch{e(!0)}},children:[f("input",{type:"text",placeholder:"T\xEAn c\u1EE7a b\u1EA1n",required:!0}),f("input",{type:"text",placeholder:"Email",required:!0}),f("input",{type:"password",placeholder:"Password",required:!0}),f("input",{id:"file",type:"file",required:!0}),S("label",{htmlFor:"file",children:[f("i",{className:"bi bi-card-image"})," Th\xEAm \u1EA3nh \u0111\u1EA1i di\u1EC7n"]}),f("button",{type:"submit",children:"\u0110\u0103ng K\xED"})]}),S("span",{children:["B\u1EA1n \u0111\xE3 c\xF3 t\xE0i kho\u1EA3n? B\u1EA5m v\xE0o \u0111\xE2y \u0111\u1EC3 ",f(sn,{to:"/login",children:" \u0111\u0103ng nh\u1EADp"})]}),t&&f("small",{style:{color:"red",opacity:1},children:"C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i th\xF4ng tin \u0111\xE3 nh\u1EADp!"})]})},x$=()=>{const[t,e]=x.exports.useState(!1),n=bo();return S("div",{className:"form-wrapper",children:[S("h2",{children:[f("span",{children:f("i",{className:"bi bi-box-arrow-in-right"})})," ","\u0110\u0102NG NH\u1EACP"]}),f("small",{children:"Vui l\xF2ng \u0111\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c"}),S("form",{onSubmit:async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value;try{await OA(wc,s,o).then(a=>alert("\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng, nh\u1EA5n OK \u0111\u1EC3 ti\u1EBFp t\u1EE5c!")),n("/userInfos")}catch{e(!0)}},children:[f("input",{type:"text",placeholder:"Nh\u1EADp email \u0111\u0103ng k\xED",required:!0}),f("input",{type:"password",placeholder:"Nh\u1EADp m\u1EADt kh\u1EA9u",required:!0}),f("button",{type:"submit",children:"\u0110\u0103ng Nh\u1EADp"})]}),S("span",{children:["B\u1EA1n ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? B\u1EA5m v\xE0o \u0111\xE2y \u0111\u1EC3"," ",f(sn,{to:"/register",children:" \u0111\u0103ng k\xED"})]}),t&&f("small",{style:{color:"red",opacity:1},children:"C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i t\xE0i kho\u1EA3n ho\u1EB7c m\u1EADt kh\u1EA9u."})]})};const A$=({id:t,data:e})=>{const[n,r]=x.exports.useState(e.itemCount),i=Fu(),s=()=>{i(dp({...e,itemCount:1})),r(e.itemCount+1)},o=()=>{n>1&&(r(e.itemCount-1),i(EN(t)))},a=()=>{i(_N(e.productName)),i(TN())};return S("div",{className:"cartItem",children:[S("div",{className:"itemInfo",children:[f("img",{src:e.productPhoto,alt:""}),f("span",{className:"product-name",children:e.productName})]}),S("div",{className:"quantity",children:[S("div",{className:"btn-group",children:[f("button",{onClick:o,className:"minus-btn",children:f("i",{className:"bi bi-dash-lg"})}),f("span",{children:e.itemCount}),f("button",{onClick:s,className:"add-btn",children:f("i",{className:"bi bi-plus-lg"})}),f("button",{onClick:a,className:"delete-btn",children:f("i",{className:"bi bi-trash"})})]}),f("span",{children:"T\xECnh tr\u1EA1ng: C\xF2n h\xE0ng"}),f("span",{className:"product-price",children:`T\u1ED5ng ti\u1EC1n: ${new Intl.NumberFormat().format(e.productPrice*e.itemCount)} VND`})]})]})},R$=()=>{const{itemList:t}=vu(n=>n.cart),e=[...t].reduce((n,r)=>n+r.itemCount*r.productPrice,0);return S("div",{className:"cart",children:[t.length!==0?f("div",{className:"cartItem-wrapper",children:t.map((n,r)=>f(A$,{id:r,data:n},r))}):f("p",{children:"B\u1EA1n ch\u01B0a c\xF3 s\u1EA3n ph\u1EA9m n\xE0o trong gi\u1ECF h\xE0ng!"}),t.length!==0?S("div",{className:"purchase-info",children:[f("span",{children:"Ph\xED v\u1EADn chuy\u1EC3n: 0 VND"}),f("span",{children:`Ph\xED s\u1EA3n ph\u1EA9m: ${new Intl.NumberFormat().format(e)} VND`}),f("span",{children:"M\xE3 gi\u1EA3m gi\xE1: - 0 VND"}),f("div",{className:"line"}),f("span",{children:`T\u1ED5ng thanh to\xE1n: ${new Intl.NumberFormat().format(e)} VND`}),S("button",{className:"checkout-btn",children:[f("i",{className:"bi bi-cart4"})," Thanh To\xE1n"]})]}):null]})};const D$=()=>{const{index:t}=MC(),[e,n]=x.exports.useState({}),[r,i]=x.exports.useState(1),[s,o]=x.exports.useState(!0),a=Fu(),l=()=>{a(dp({itemCount:r,...e})),a(lw())};return x.exports.useEffect(()=>((async()=>{const c=K_(vc,"products",t),h=await XO(c);let d={};h.exists()?(d={...h.data()},n(d),o(!1)):console.log("No such product!")})(),()=>{}),[]),S("div",{className:"product-detail-wrapper",children:[f(Ec,{}),S("div",{className:"product-detail",children:[S("div",{className:"quantity",children:[s?f(kt,{style:{width:"30rem",height:"30rem"}}):f("img",{src:e.productPhoto,loading:"lazy"}),S("div",{className:"btn-group",children:[f("button",{onClick:()=>{r>1&&i(r-1)},className:"minus-btn",children:f("i",{className:"bi bi-dash-lg"})}),f("span",{children:r}),f("button",{onClick:()=>i(r+1),className:"add-btn",children:f("i",{className:"bi bi-plus-lg"})}),f("button",{onClick:l,className:"addToCart-btn",children:"Add To Cart"})]})]}),S("div",{className:"product-info",children:[s?f(kt,{style:{width:"25rem",height:"2rem",borderRadius:"7px"}}):f("p",{children:e.productName}),s?f(kt,{style:{width:"12rem",height:"2rem",borderRadius:"7px"}}):S("span",{children:["H\xE3ng s\u1EA3n xu\u1EA5t: ",e.brandName]}),f("span",{children:"Lo\u1EA1i: N\u01B0\u1EDBc hoa nam"}),f("span",{children:"T\xECnh tr\u1EA1ng: C\xF2n h\xE0ng"}),f("hr",{}),s?S(Ht,{children:[f(kt,{style:{width:"12rem",height:"2rem",borderRadius:"7px"}}),f(kt,{style:{width:"15rem",height:"2rem",borderRadius:"7px"}})]}):S(Ht,{children:[S("span",{className:"price",children:["Gi\xE1:",` ${new Intl.NumberFormat().format(e.productPrice)} VND`]}),S("span",{className:"price",children:["T\u1ED5ng c\u1ED9ng:",` ${new Intl.NumberFormat().format(e.productPrice*r)} VND`]})]}),f("span",{children:"Mi\u1EC5n ph\xED v\u1EADn chuy\u1EC3n cho \u0111\u01A1n h\u01A1n gi\xE1 tr\u1ECB tr\xEAn 750.000VN\u0110"}),f("small",{children:"Dung t\xEDch"}),f("span",{className:"volume",children:"100ML"}),f("span",{children:"M\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m:"}),f("p",{className:"desc",children:e.productDesc}),f("hr",{}),f("h5",{children:"CAM K\u1EBET KHI MUA S\u1EAEM"}),S("span",{children:[f("i",{className:"bi bi-award"})," T\u01B0 v\u1EA5n nhi\u1EC7t t\xECnh v\xE0 t\u1EADn t\xE2m."," "]}),S("span",{children:[f("i",{className:"bi bi-award"})," \u0110\u1EA3m b\u1EA3o ngu\u1ED3n g\u1ED1c v\xE0 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m."," "]}),S("span",{children:[f("i",{className:"bi bi-award"})," Mi\u1EC5n ph\xED \u0111\u1ED5i tr\u1EA3 n\u1EBFu s\u1EA3n ph\u1EA9m c\xF3 v\u1EA5n \u0111\u1EC1."," "]})]})]})]})};const P$=()=>{const{currentUser:t}=x.exports.useContext(Sm);return S("div",{className:"userInfos",children:[S("div",{className:"img-group",children:[f("span",{children:"\u1EA2nh \u0111\u1EA1i di\u1EC7n"}),f("img",{src:t.photoURL,alt:"userAvatar"})]}),S("div",{className:"main-info",children:[S("span",{children:["T\xEAn: ",t.displayName]}),S("span",{children:["Email: ",t.email]}),S("span",{children:["S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:"," ",S("small",{children:[" ",t.phoneNumber||"Ch\u01B0a c\u1EADp nh\u1EADt"]})]}),S("small",{children:["L\xE0 th\xE0nh vi\xEAn t\u1EEB:"," ",t.metadata.creationTime.substring(0,16)]}),S("small",{children:["\u0110\u0103ng nh\u1EADt l\u1EA7n cu\u1ED1i:"," ",t.metadata.lastSignInTime.substring(0)]}),S("div",{className:"btn-group",children:[S("button",{onClick:()=>UA(wc),children:[" ",f("i",{className:"bi bi-box-arrow-left"})," \u0110\u0103ng xu\u1EA5t"]}),S("button",{id:"edit-info",children:[f("i",{className:"bi bi-pencil-square"}),f("span",{children:" Ch\u1EC9nh s\u1EEDa th\xF4ng tin"})]})]})]})]})};const b$=()=>{const t=Fu(),{status:e,type:n}=vu(r=>r.toastMess);return x.exports.useEffect(()=>{const r=setTimeout(()=>t(CN()),1e3);return()=>{clearTimeout(r)}},[e,n]),S(Ht,{children:[n==="addToCart"&&f(Ht,{children:S("div",{className:"toast-wrapper addToCart",children:[f("span",{children:f("i",{className:"bi bi-bag-check"})}),f("p",{children:"\u0110\xE3 th\xEAm s\u1EA3n ph\u1EA9m v\xE0o gi\u1ECF h\xE0ng"})]})}),n==="like"&&f(Ht,{children:S("div",{className:"toast-wrapper like",children:[f("span",{children:f("i",{className:"bi bi-heart"})}),f("p",{children:"\u0110\xE3 th\xEAm s\u1EA3n ph\u1EA9m v\xE0o y\xEAu th\xEDch"})]})}),n==="deleteFromCart"&&f(Ht,{children:S("div",{className:"toast-wrapper delete",children:[f("span",{children:f("i",{className:"bi bi-cart-x"})}),f("p",{children:"\u0110\xE3 x\xF3a s\u1EA3n ph\u1EA9m kh\u1ECFi gi\u1ECF h\xE0ng"})]})})]})};function O$(){const{status:t}=vu(r=>r.toastMess),{currentUser:e}=x.exports.useContext(Sm);return S("div",{className:"app-wrapper",children:[f(g$,{}),t&&f(b$,{}),S(KC,{children:[f(tn,{path:"/",element:f(S$,{})}),f(tn,{path:"/reviews",element:f(C$,{})}),f(tn,{path:"/contact",element:f(I$,{})}),f(tn,{path:"/userInfos",element:f(({children:r})=>e?r:f(qC,{to:"/login"}),{children:f(P$,{})})}),f(tn,{path:"/login",element:f(x$,{})}),f(tn,{path:"/register",element:f(N$,{})}),f(tn,{path:"/cart",element:f(R$,{})}),f(tn,{path:"/product-detail/:index",element:f(D$,{})})]}),f(v$,{})]})}Ch.createRoot(document.getElementById("root")).render(f(m$,{children:f(Yl.StrictMode,{children:f(JC,{children:f(UI,{store:NN,children:f(jI,{baseColor:"#e9ecef",highlightColor:"#ffffff",borderRadius:"7px",children:f(O$,{})})})})})}));
