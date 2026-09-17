(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function eu(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const ke={},ir=[],xt=()=>{},ov=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tu=t=>t.startsWith("onUpdate:"),Xe=Object.assign,nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},av=Object.prototype.hasOwnProperty,Ee=(t,e)=>av.call(t,e),se=Array.isArray,or=t=>va(t)==="[object Map]",wm=t=>va(t)==="[object Set]",le=t=>typeof t=="function",Ke=t=>typeof t=="string",Ms=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Em=t=>(xe(t)||le(t))&&le(t.then)&&le(t.catch),Im=Object.prototype.toString,va=t=>Im.call(t),cv=t=>va(t).slice(8,-1),Tm=t=>va(t)==="[object Object]",su=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lv=/-(\w)/g,gr=wa(t=>t.replace(lv,(e,n)=>n?n.toUpperCase():"")),uv=/\B([A-Z])/g,xs=wa(t=>t.replace(uv,"-$1").toLowerCase()),Am=wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=wa(t=>t?`on${Am(t)}`:""),Yn=(t,e)=>!Object.is(t,e),Do=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},sl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Oh;const Rm=()=>Oh||(Oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dr(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ke(s)?mv(s):Dr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ke(t)||xe(t))return t}const hv=/;(?![^(]*\))/g,dv=/:([^]+)/,fv=/\/\*[^]*?\*\//g;function mv(t){const e={};return t.replace(fv,"").split(hv).forEach(n=>{if(n){const s=n.split(dv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ve(t){let e="";if(Ke(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const s=ve(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gv=eu(pv);function Sm(t){return!!t||t===""}const N=t=>Ke(t)?t:t==null?"":se(t)||xe(t)&&(t.toString===Im||!le(t.toString))?JSON.stringify(t,Cm,2):String(t),Cm=(t,e)=>e&&e.__v_isRef?Cm(t,e.value):or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Tc(s,i)+" =>"]=r,n),{})}:wm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:Ms(e)?Tc(e):xe(e)&&!se(e)&&!Tm(e)?String(e):e,Tc=(t,e="")=>{var n;return Ms(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class Pm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function _v(t){return new Pm(t)}function yv(t,e=Dt){e&&e.active&&e.effects.push(t)}function vv(){return Dt}function wv(t){Dt&&Dt.cleanups.push(t)}let Es;class ru{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,yv(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ts();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ev(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ns()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=qn,n=Es;try{return qn=!0,Es=this,this._runnings++,Vh(this),this.fn()}finally{Mh(this),this._runnings--,Es=n,qn=e}}stop(){this.active&&(Vh(this),Mh(this),this.onStop&&this.onStop(),this.active=!1)}}function Ev(t){return t.value}function Vh(t){t._trackId++,t._depsLength=0}function Mh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)km(t.deps[e],t);t.deps.length=t._depsLength}}function km(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let qn=!0,rl=0;const Dm=[];function ts(){Dm.push(qn),qn=!1}function ns(){const t=Dm.pop();qn=t===void 0?!0:t}function iu(){rl++}function ou(){for(rl--;!rl&&il.length;)il.shift()()}function Nm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&km(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const il=[];function Om(t,e,n){iu();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&il.push(s.scheduler)))}ou()}const Vm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},zo=new WeakMap,Is=Symbol(""),ol=Symbol("");function St(t,e,n){if(qn&&Es){let s=zo.get(t);s||zo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Vm(()=>s.delete(n))),Nm(Es,r)}}function En(t,e,n,s,r,i){const o=zo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!Ms(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?su(n)&&a.push(o.get("length")):(a.push(o.get(Is)),or(t)&&a.push(o.get(ol)));break;case"delete":se(t)||(a.push(o.get(Is)),or(t)&&a.push(o.get(ol)));break;case"set":or(t)&&a.push(o.get(Is));break}iu();for(const c of a)c&&Om(c,4);ou()}function Iv(t,e){const n=zo.get(t);return n&&n.get(e)}const Tv=eu("__proto__,__v_isRef,__isVue"),Mm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ms)),xh=Av();function Av(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ae(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts(),iu();const s=Ae(this)[e].apply(this,n);return ou(),ns(),s}}),t}function bv(t){Ms(t)||(t=String(t));const e=Ae(this);return St(e,"has",t),e.hasOwnProperty(t)}class xm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Fv:$m:i?Um:Fm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=se(e);if(!r){if(o&&Ee(xh,n))return Reflect.get(xh,n,s);if(n==="hasOwnProperty")return bv}const a=Reflect.get(e,n,s);return(Ms(n)?Mm.has(n):Tv(n))||(r||St(e,"get",n),i)?a:Et(a)?o&&su(n)?a:a.value:xe(a)?r?Bm(a):Nr(a):a}}class Lm extends xm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=gi(i);if(!Wo(s)&&!gi(s)&&(i=Ae(i),s=Ae(s)),!se(e)&&Et(i)&&!Et(s))return c?!1:(i.value=s,!0)}const o=se(e)&&su(n)?Number(n)<e.length:Ee(e,n),a=Reflect.set(e,n,s,r);return e===Ae(r)&&(o?Yn(s,i)&&En(e,"set",n,s):En(e,"add",n,s)),a}deleteProperty(e,n){const s=Ee(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&En(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ms(n)||!Mm.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",se(e)?"length":Is),Reflect.ownKeys(e)}}class Rv extends xm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Sv=new Lm,Cv=new Rv,Pv=new Lm(!0);const au=t=>t,Ea=t=>Reflect.getPrototypeOf(t);function fo(t,e,n=!1,s=!1){t=t.__v_raw;const r=Ae(t),i=Ae(e);n||(Yn(e,i)&&St(r,"get",e),St(r,"get",i));const{has:o}=Ea(r),a=s?au:n?uu:_i;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,s=Ae(n),r=Ae(t);return e||(Yn(t,r)&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function po(t,e=!1){return t=t.__v_raw,!e&&St(Ae(t),"iterate",Is),Reflect.get(t,"size",t)}function Lh(t){t=Ae(t);const e=Ae(this);return Ea(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function Fh(t,e){e=Ae(e);const n=Ae(this),{has:s,get:r}=Ea(n);let i=s.call(n,t);i||(t=Ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Yn(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function Uh(t){const e=Ae(this),{has:n,get:s}=Ea(e);let r=n.call(e,t);r||(t=Ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&En(e,"delete",t,void 0),i}function $h(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function go(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Ae(o),c=e?au:t?uu:_i;return!t&&St(a,"iterate",Is),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function _o(t,e,n){return function(...s){const r=this.__v_raw,i=Ae(r),o=or(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?au:e?uu:_i;return!e&&St(i,"iterate",c?ol:Is),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function On(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kv(){const t={get(i){return fo(this,i)},get size(){return po(this)},has:mo,add:Lh,set:Fh,delete:Uh,clear:$h,forEach:go(!1,!1)},e={get(i){return fo(this,i,!1,!0)},get size(){return po(this)},has:mo,add:Lh,set:Fh,delete:Uh,clear:$h,forEach:go(!1,!0)},n={get(i){return fo(this,i,!0)},get size(){return po(this,!0)},has(i){return mo.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:go(!0,!1)},s={get(i){return fo(this,i,!0,!0)},get size(){return po(this,!0)},has(i){return mo.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=_o(i,!1,!1),n[i]=_o(i,!0,!1),e[i]=_o(i,!1,!0),s[i]=_o(i,!0,!0)}),[t,n,e,s]}const[Dv,Nv,Ov,Vv]=kv();function cu(t,e){const n=e?t?Vv:Ov:t?Nv:Dv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ee(n,r)&&r in s?n:s,r,i)}const Mv={get:cu(!1,!1)},xv={get:cu(!1,!0)},Lv={get:cu(!0,!1)};const Fm=new WeakMap,Um=new WeakMap,$m=new WeakMap,Fv=new WeakMap;function Uv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $v(t){return t.__v_skip||!Object.isExtensible(t)?0:Uv(cv(t))}function Nr(t){return gi(t)?t:lu(t,!1,Sv,Mv,Fm)}function Bv(t){return lu(t,!1,Pv,xv,Um)}function Bm(t){return lu(t,!0,Cv,Lv,$m)}function lu(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=$v(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ii(t){return gi(t)?ii(t.__v_raw):!!(t&&t.__v_isReactive)}function gi(t){return!!(t&&t.__v_isReadonly)}function Wo(t){return!!(t&&t.__v_isShallow)}function jm(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function jv(t){return Object.isExtensible(t)&&bm(t,"__v_skip",!0),t}const _i=t=>xe(t)?Nr(t):t,uu=t=>xe(t)?Bm(t):t;class qm{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ru(()=>e(this._value),()=>No(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Yn(e._value,e._value=e.effect.run())&&No(e,4),Hm(e),e.effect._dirtyLevel>=2&&No(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function qv(t,e,n=!1){let s,r;const i=le(t);return i?(s=t,r=xt):(s=t.get,r=t.set),new qm(s,r,i||!r,n)}function Hm(t){var e;qn&&Es&&(t=Ae(t),Nm(Es,(e=t.dep)!=null?e:t.dep=Vm(()=>t.dep=void 0,t instanceof qm?t:void 0)))}function No(t,e=4,n){t=Ae(t);const s=t.dep;s&&Om(s,e)}function Et(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return zm(t,!1)}function ar(t){return zm(t,!0)}function zm(t,e){return Et(t)?t:new Hv(t,e)}class Hv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:_i(e)}get value(){return Hm(this),this._value}set value(e){const n=this.__v_isShallow||Wo(e)||gi(e);e=n?e:Ae(e),Yn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_i(e),No(this,4))}}function k(t){return Et(t)?t.value:t}const zv={get:(t,e,n)=>k(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Et(r)&&!Et(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Wm(t){return ii(t)?t:new Proxy(t,zv)}function Wv(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=Gv(t,n);return e}class Kv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Iv(Ae(this._object),this._key)}}function Gv(t,e,n){const s=t[e];return Et(s)?s:new Kv(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(t,e,n,s){try{return s?t(...s):t()}catch(r){Ia(r,e,n)}}function jt(t,e,n,s){if(le(t)){const r=Hn(t,e,n,s);return r&&Em(r)&&r.catch(i=>{Ia(i,e,n)}),r}if(se(t)){const r=[];for(let i=0;i<t.length;i++)r.push(jt(t[i],e,n,s));return r}}function Ia(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ts(),Hn(c,null,10,[t,o,a]),ns();return}}Qv(t,n,r,s)}function Qv(t,e,n,s=!0){console.error(t)}let yi=!1,al=!1;const dt=[];let Zt=0;const cr=[];let Mn=null,ms=0;const Km=Promise.resolve();let hu=null;function Ta(t){const e=hu||Km;return t?e.then(this?t.bind(this):t):e}function Yv(t){let e=Zt+1,n=dt.length;for(;e<n;){const s=e+n>>>1,r=dt[s],i=vi(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function du(t){(!dt.length||!dt.includes(t,yi&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?dt.push(t):dt.splice(Yv(t.id),0,t),Gm())}function Gm(){!yi&&!al&&(al=!0,hu=Km.then(Ym))}function Jv(t){const e=dt.indexOf(t);e>Zt&&dt.splice(e,1)}function Xv(t){se(t)?cr.push(...t):(!Mn||!Mn.includes(t,t.allowRecurse?ms+1:ms))&&cr.push(t),Gm()}function Bh(t,e,n=yi?Zt+1:0){for(;n<dt.length;n++){const s=dt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;dt.splice(n,1),n--,s()}}}function Qm(t){if(cr.length){const e=[...new Set(cr)].sort((n,s)=>vi(n)-vi(s));if(cr.length=0,Mn){Mn.push(...e);return}for(Mn=e,ms=0;ms<Mn.length;ms++)Mn[ms]();Mn=null,ms=0}}const vi=t=>t.id==null?1/0:t.id,Zv=(t,e)=>{const n=vi(t)-vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ym(t){al=!1,yi=!0,dt.sort(Zv);try{for(Zt=0;Zt<dt.length;Zt++){const e=dt[Zt];e&&e.active!==!1&&Hn(e,null,14)}}finally{Zt=0,dt.length=0,Qm(),yi=!1,hu=null,(dt.length||cr.length)&&Ym()}}function e0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ke;f&&(r=n.map(m=>Ke(m)?m.trim():m)),h&&(r=n.map(sl))}let a,c=s[a=Ic(e)]||s[a=Ic(gr(e))];!c&&i&&(c=s[a=Ic(xs(e))]),c&&jt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(l,t,6,r)}}function Jm(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!le(t)){const c=l=>{const u=Jm(l,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(xe(t)&&s.set(t,null),null):(se(i)?i.forEach(c=>o[c]=null):Xe(o,i),xe(t)&&s.set(t,o),o)}function Aa(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,xs(e))||Ee(t,e))}let bt=null,ba=null;function Ko(t){const e=bt;return bt=t,ba=t&&t.type.__scopeId||null,e}function Ls(t){ba=t}function Fs(){ba=null}function t0(t,e=bt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Jh(-1);const i=Ko(e);let o;try{o=t(...r)}finally{Ko(i),s._d&&Jh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ac(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:m,ctx:w,inheritAttrs:_}=t,v=Ko(t);let I,F;try{if(n.shapeFlag&4){const j=r||s,z=j;I=Jt(l.call(z,j,u,h,m,f,w)),F=a}else{const j=e;I=Jt(j.length>1?j(h,{attrs:a,slots:o,emit:c}):j(h,null)),F=e.props?a:n0(a)}}catch(j){li.length=0,Ia(j,t,1),I=de(Ss)}let G=I;if(F&&_!==!1){const j=Object.keys(F),{shapeFlag:z}=G;j.length&&z&7&&(i&&j.some(tu)&&(F=s0(F,i)),G=_r(G,F,!1,!0))}return n.dirs&&(G=_r(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),I=G,Ko(v),I}const n0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},s0=(t,e)=>{const n={};for(const s in t)(!tu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function r0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?jh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Aa(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?jh(s,o,l):!0:!!o;return!1}function jh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Aa(n,i))return!0}return!1}function i0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const o0=Symbol.for("v-ndc"),a0=t=>t.__isSuspense;function c0(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Xv(t)}const l0=Symbol.for("v-scx"),u0=()=>ci(l0);function fu(t,e){return mu(t,null,e)}const yo={};function qt(t,e,n){return mu(t,e,n)}function mu(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=ke){if(e&&i){const x=e;e=(...oe)=>{x(...oe),z()}}const c=ft,l=x=>s===!0?x:ps(x,s===!1?1:void 0);let u,h=!1,f=!1;if(Et(t)?(u=()=>t.value,h=Wo(t)):ii(t)?(u=()=>l(t),h=!0):se(t)?(f=!0,h=t.some(x=>ii(x)||Wo(x)),u=()=>t.map(x=>{if(Et(x))return x.value;if(ii(x))return l(x);if(le(x))return Hn(x,c,2)})):le(t)?e?u=()=>Hn(t,c,2):u=()=>(m&&m(),jt(t,c,3,[w])):u=xt,e&&s){const x=u;u=()=>ps(x())}let m,w=x=>{m=G.onStop=()=>{Hn(x,c,4),m=G.onStop=void 0}},_;if(Ca)if(w=xt,e?n&&jt(e,c,3,[u(),f?[]:void 0,w]):u(),r==="sync"){const x=u0();_=x.__watcherHandles||(x.__watcherHandles=[])}else return xt;let v=f?new Array(t.length).fill(yo):yo;const I=()=>{if(!(!G.active||!G.dirty))if(e){const x=G.run();(s||h||(f?x.some((oe,pe)=>Yn(oe,v[pe])):Yn(x,v)))&&(m&&m(),jt(e,c,3,[x,v===yo?void 0:f&&v[0]===yo?[]:v,w]),v=x)}else G.run()};I.allowRecurse=!!e;let F;r==="sync"?F=I:r==="post"?F=()=>Tt(I,c&&c.suspense):(I.pre=!0,c&&(I.id=c.uid),F=()=>du(I));const G=new ru(u,xt,F),j=vv(),z=()=>{G.stop(),j&&nu(j.effects,G)};return e?n?I():v=G.run():r==="post"?Tt(G.run.bind(G),c&&c.suspense):G.run(),_&&_.push(z),z}function h0(t,e,n){const s=this.proxy,r=Ke(t)?t.includes(".")?Xm(s,t):()=>s[t]:t.bind(s,s);let i;le(e)?i=e:(i=e.handler,n=e);const o=Bi(this),a=mu(r,i.bind(s),n);return o(),a}function Xm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ps(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Et(t))ps(t.value,e,n);else if(se(t))for(let s=0;s<t.length;s++)ps(t[s],e,n);else if(wm(t)||or(t))t.forEach(s=>{ps(s,e,n)});else if(Tm(t))for(const s in t)ps(t[s],e,n);return t}function Ts(t,e){if(bt===null)return t;const n=Pa(bt)||bt.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=ke]=e[r];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&ps(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ls(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ts(),jt(c,n,8,[t.el,a,t,e]),ns())}}/*! #__NO_SIDE_EFFECTS__ */function d0(t,e){return le(t)?Xe({name:t.name},e,{setup:t}):t}const Oo=t=>!!t.type.__asyncLoader,Zm=t=>t.type.__isKeepAlive;function f0(t,e){ep(t,"a",e)}function m0(t,e){ep(t,"da",e)}function ep(t,e,n=ft){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ra(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Zm(r.parent.vnode)&&p0(s,e,n,r),r=r.parent}}function p0(t,e,n,s){const r=Ra(e,t,s,!0);Or(()=>{nu(s[e],r)},n)}function Ra(t,e,n=ft,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts();const a=Bi(n),c=jt(e,n,t,o);return a(),ns(),c});return s?r.unshift(i):r.push(i),i}}const Cn=t=>(e,n=ft)=>(!Ca||t==="sp")&&Ra(t,(...s)=>e(...s),n),g0=Cn("bm"),tp=Cn("m"),_0=Cn("bu"),y0=Cn("u"),v0=Cn("bum"),Or=Cn("um"),w0=Cn("sp"),E0=Cn("rtg"),I0=Cn("rtc");function T0(t,e=ft){Ra("ec",t,e)}function en(t,e,n,s){let r;const i=n;if(se(t)||Ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i)}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i)}}else r=[];return r}const cl=t=>t?yp(t)?Pa(t)||t.proxy:cl(t.parent):null,oi=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cl(t.parent),$root:t=>cl(t.root),$emit:t=>t.emit,$options:t=>pu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,du(t.update)}),$nextTick:t=>t.n||(t.n=Ta.bind(t.proxy)),$watch:t=>h0.bind(t)}),bc=(t,e)=>t!==ke&&!t.__isScriptSetup&&Ee(t,e),A0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(bc(s,e))return o[e]=1,s[e];if(r!==ke&&Ee(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Ee(l,e))return o[e]=3,i[e];if(n!==ke&&Ee(n,e))return o[e]=4,n[e];ll&&(o[e]=0)}}const u=oi[e];let h,f;if(u)return e==="$attrs"&&St(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&Ee(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Ee(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return bc(r,e)?(r[e]=n,!0):s!==ke&&Ee(s,e)?(s[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&Ee(t,o)||bc(e,o)||(a=i[0])&&Ee(a,o)||Ee(s,o)||Ee(oi,o)||Ee(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qh(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ll=!0;function b0(t){const e=pu(t),n=t.proxy,s=t.ctx;ll=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:w,activated:_,deactivated:v,beforeDestroy:I,beforeUnmount:F,destroyed:G,unmounted:j,render:z,renderTracked:x,renderTriggered:oe,errorCaptured:pe,serverPrefetch:je,expose:Ue,inheritAttrs:ee,components:Z,directives:ne,filters:fe}=e;if(l&&R0(l,s,null),o)for(const ue in o){const he=o[ue];le(he)&&(s[ue]=he.bind(n))}if(r){const ue=r.call(n,n);xe(ue)&&(t.data=Nr(ue))}if(ll=!0,i)for(const ue in i){const he=i[ue],Ge=le(he)?he.bind(n,n):le(he.get)?he.get.bind(n,n):xt,yt=!le(he)&&le(he.set)?he.set.bind(n):xt,Ct=Te({get:Ge,set:yt});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Pt=>Ct.value=Pt})}if(a)for(const ue in a)np(a[ue],s,n,ue);if(c){const ue=le(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(he=>{rp(he,ue[he])})}u&&Hh(u,t,"c");function Ie(ue,he){se(he)?he.forEach(Ge=>ue(Ge.bind(n))):he&&ue(he.bind(n))}if(Ie(g0,h),Ie(tp,f),Ie(_0,m),Ie(y0,w),Ie(f0,_),Ie(m0,v),Ie(T0,pe),Ie(I0,x),Ie(E0,oe),Ie(v0,F),Ie(Or,j),Ie(w0,je),se(Ue))if(Ue.length){const ue=t.exposed||(t.exposed={});Ue.forEach(he=>{Object.defineProperty(ue,he,{get:()=>n[he],set:Ge=>n[he]=Ge})})}else t.exposed||(t.exposed={});z&&t.render===xt&&(t.render=z),ee!=null&&(t.inheritAttrs=ee),Z&&(t.components=Z),ne&&(t.directives=ne)}function R0(t,e,n=xt){se(t)&&(t=ul(t));for(const s in t){const r=t[s];let i;xe(r)?"default"in r?i=ci(r.from||s,r.default,!0):i=ci(r.from||s):i=ci(r),Et(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Hh(t,e,n){jt(se(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,s){const r=s.includes(".")?Xm(n,s):()=>n[s];if(Ke(t)){const i=e[t];le(i)&&qt(r,i)}else if(le(t))qt(r,t.bind(n));else if(xe(t))if(se(t))t.forEach(i=>np(i,e,n,s));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&qt(r,i,t)}}function pu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Go(c,l,o,!0)),Go(c,e,o)),xe(e)&&i.set(e,c),c}function Go(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Go(t,i,n,!0),r&&r.forEach(o=>Go(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=S0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const S0={data:zh,props:Wh,emits:Wh,methods:Qr,computed:Qr,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Qr,directives:Qr,watch:P0,provide:zh,inject:C0};function zh(t,e){return e?t?function(){return Xe(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function C0(t,e){return Qr(ul(t),ul(e))}function ul(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qr(t,e){return t?Xe(Object.create(null),t,e):e}function Wh(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Xe(Object.create(null),qh(t),qh(e??{})):e}function P0(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=vt(t[s],e[s]);return n}function sp(){return{app:null,config:{isNativeTag:ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k0=0;function D0(t,e){return function(s,r=null){le(s)||(s=Xe({},s)),r!=null&&!xe(r)&&(r=null);const i=sp(),o=new WeakSet;let a=!1;const c=i.app={_uid:k0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&le(l.install)?(o.add(l),l.install(c,...u)):le(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=de(s,r);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Pa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=ai;ai=c;try{return l()}finally{ai=u}}};return c}}let ai=null;function rp(t,e){if(ft){let n=ft.provides;const s=ft.parent&&ft.parent.provides;s===n&&(n=ft.provides=Object.create(s)),n[t]=e}}function ci(t,e,n=!1){const s=ft||bt;if(s||ai){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ai._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&le(e)?e.call(s&&s.proxy):e}}const ip={},op=()=>Object.create(ip),ap=t=>Object.getPrototypeOf(t)===ip;function N0(t,e,n,s=!1){const r={},i=op();t.propsDefaults=Object.create(null),cp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Bv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function O0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Aa(t.emitsOptions,f))continue;const m=e[f];if(c)if(Ee(i,f))m!==i[f]&&(i[f]=m,l=!0);else{const w=gr(f);r[w]=hl(c,a,w,m,t,!1)}else m!==i[f]&&(i[f]=m,l=!0)}}}else{cp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!Ee(e,h)&&((u=xs(h))===h||!Ee(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=hl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Ee(e,h))&&(delete i[h],l=!0)}l&&En(t.attrs,"set","")}function cp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ri(c))continue;const l=e[c];let u;r&&Ee(r,u=gr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Aa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Ae(n),l=a||ke;for(let u=0;u<i.length;u++){const h=i[u];n[h]=hl(r,c,h,l[h],t,!Ee(l,h))}}return o}function hl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Ee(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&le(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=Bi(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xs(n))&&(s=!0))}return s}function lp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!le(t)){const u=h=>{c=!0;const[f,m]=lp(h,e,!0);Xe(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return xe(t)&&s.set(t,ir),ir;if(se(i))for(let u=0;u<i.length;u++){const h=gr(i[u]);Kh(h)&&(o[h]=ke)}else if(i)for(const u in i){const h=gr(u);if(Kh(h)){const f=i[u],m=o[h]=se(f)||le(f)?{type:f}:Xe({},f);if(m){const w=Yh(Boolean,m.type),_=Yh(String,m.type);m[0]=w>-1,m[1]=_<0||w<_,(w>-1||Ee(m,"default"))&&a.push(h)}}}const l=[o,a];return xe(t)&&s.set(t,l),l}function Kh(t){return t[0]!=="$"&&!ri(t)}function Gh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Qh(t,e){return Gh(t)===Gh(e)}function Yh(t,e){return se(e)?e.findIndex(n=>Qh(n,t)):le(e)&&Qh(e,t)?0:-1}const up=t=>t[0]==="_"||t==="$stable",gu=t=>se(t)?t.map(Jt):[Jt(t)],V0=(t,e,n)=>{if(e._n)return e;const s=t0((...r)=>gu(e(...r)),n);return s._c=!1,s},hp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(up(r))continue;const i=t[r];if(le(i))e[r]=V0(r,i,s);else if(i!=null){const o=gu(i);e[r]=()=>o}}},dp=(t,e)=>{const n=gu(e);t.slots.default=()=>n},M0=(t,e)=>{const n=t.slots=op();if(t.vnode.shapeFlag&32){const s=e._;s?(Xe(n,e),bm(n,"_",s,!0)):hp(e,n)}else e&&dp(t,e)},x0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,hp(e,r)),o=e}else e&&(dp(t,e),o={default:1});if(i)for(const a in r)!up(a)&&o[a]==null&&delete r[a]};function dl(t,e,n,s,r=!1){if(se(t)){t.forEach((f,m)=>dl(f,e&&(se(e)?e[m]:e),n,s,r));return}if(Oo(s)&&!r)return;const i=s.shapeFlag&4?Pa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ke(l)?(u[l]=null,Ee(h,l)&&(h[l]=null)):Et(l)&&(l.value=null)),le(c))Hn(c,a,12,[o,u]);else{const f=Ke(c),m=Et(c);if(f||m){const w=()=>{if(t.f){const _=f?Ee(h,c)?h[c]:u[c]:c.value;r?se(_)&&nu(_,i):se(_)?_.includes(i)||_.push(i):f?(u[c]=[i],Ee(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,Ee(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Tt(w,n)):w()}}}const Tt=c0;function L0(t){return F0(t)}function F0(t,e){const n=Rm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=xt,insertStaticContent:w}=t,_=(p,g,E,R=null,S=null,V=null,U=void 0,O=null,L=!!g.dynamicChildren)=>{if(p===g)return;p&&!zr(p,g)&&(R=Gs(p),Pt(p,S,V,!0),p=null),g.patchFlag===-2&&(L=!1,g.dynamicChildren=null);const{type:P,ref:q,shapeFlag:Y}=g;switch(P){case Sa:v(p,g,E,R);break;case Ss:I(p,g,E,R);break;case Sc:p==null&&F(g,E,R,U);break;case De:Z(p,g,E,R,S,V,U,O,L);break;default:Y&1?z(p,g,E,R,S,V,U,O,L):Y&6?ne(p,g,E,R,S,V,U,O,L):(Y&64||Y&128)&&P.process(p,g,E,R,S,V,U,O,L,cs)}q!=null&&S&&dl(q,p&&p.ref,V,g||p,!g)},v=(p,g,E,R)=>{if(p==null)s(g.el=a(g.children),E,R);else{const S=g.el=p.el;g.children!==p.children&&l(S,g.children)}},I=(p,g,E,R)=>{p==null?s(g.el=c(g.children||""),E,R):g.el=p.el},F=(p,g,E,R)=>{[p.el,p.anchor]=w(p.children,g,E,R,p.el,p.anchor)},G=({el:p,anchor:g},E,R)=>{let S;for(;p&&p!==g;)S=f(p),s(p,E,R),p=S;s(g,E,R)},j=({el:p,anchor:g})=>{let E;for(;p&&p!==g;)E=f(p),r(p),p=E;r(g)},z=(p,g,E,R,S,V,U,O,L)=>{g.type==="svg"?U="svg":g.type==="math"&&(U="mathml"),p==null?x(g,E,R,S,V,U,O,L):je(p,g,S,V,U,O,L)},x=(p,g,E,R,S,V,U,O)=>{let L,P;const{props:q,shapeFlag:Y,transition:J,dirs:y}=p;if(L=p.el=o(p.type,V,q&&q.is,q),Y&8?u(L,p.children):Y&16&&pe(p.children,L,null,R,S,Rc(p,V),U,O),y&&ls(p,null,R,"created"),oe(L,p,p.scopeId,U,R),q){for(const T in q)T!=="value"&&!ri(T)&&i(L,T,null,q[T],V,p.children,R,S,Ut);"value"in q&&i(L,"value",null,q.value,V),(P=q.onVnodeBeforeMount)&&Qt(P,R,p)}y&&ls(p,null,R,"beforeMount");const b=U0(S,J);b&&J.beforeEnter(L),s(L,g,E),((P=q&&q.onVnodeMounted)||b||y)&&Tt(()=>{P&&Qt(P,R,p),b&&J.enter(L),y&&ls(p,null,R,"mounted")},S)},oe=(p,g,E,R,S)=>{if(E&&m(p,E),R)for(let V=0;V<R.length;V++)m(p,R[V]);if(S){let V=S.subTree;if(g===V){const U=S.vnode;oe(p,U,U.scopeId,U.slotScopeIds,S.parent)}}},pe=(p,g,E,R,S,V,U,O,L=0)=>{for(let P=L;P<p.length;P++){const q=p[P]=O?xn(p[P]):Jt(p[P]);_(null,q,g,E,R,S,V,U,O)}},je=(p,g,E,R,S,V,U)=>{const O=g.el=p.el;let{patchFlag:L,dynamicChildren:P,dirs:q}=g;L|=p.patchFlag&16;const Y=p.props||ke,J=g.props||ke;let y;if(E&&us(E,!1),(y=J.onVnodeBeforeUpdate)&&Qt(y,E,g,p),q&&ls(g,p,E,"beforeUpdate"),E&&us(E,!0),P?Ue(p.dynamicChildren,P,O,E,R,Rc(g,S),V):U||he(p,g,O,null,E,R,Rc(g,S),V,!1),L>0){if(L&16)ee(O,g,Y,J,E,R,S);else if(L&2&&Y.class!==J.class&&i(O,"class",null,J.class,S),L&4&&i(O,"style",Y.style,J.style,S),L&8){const b=g.dynamicProps;for(let T=0;T<b.length;T++){const W=b[T],ge=Y[W],Re=J[W];(Re!==ge||W==="value")&&i(O,W,ge,Re,S,p.children,E,R,Ut)}}L&1&&p.children!==g.children&&u(O,g.children)}else!U&&P==null&&ee(O,g,Y,J,E,R,S);((y=J.onVnodeUpdated)||q)&&Tt(()=>{y&&Qt(y,E,g,p),q&&ls(g,p,E,"updated")},R)},Ue=(p,g,E,R,S,V,U)=>{for(let O=0;O<g.length;O++){const L=p[O],P=g[O],q=L.el&&(L.type===De||!zr(L,P)||L.shapeFlag&70)?h(L.el):E;_(L,P,q,null,R,S,V,U,!0)}},ee=(p,g,E,R,S,V,U)=>{if(E!==R){if(E!==ke)for(const O in E)!ri(O)&&!(O in R)&&i(p,O,E[O],null,U,g.children,S,V,Ut);for(const O in R){if(ri(O))continue;const L=R[O],P=E[O];L!==P&&O!=="value"&&i(p,O,P,L,U,g.children,S,V,Ut)}"value"in R&&i(p,"value",E.value,R.value,U)}},Z=(p,g,E,R,S,V,U,O,L)=>{const P=g.el=p?p.el:a(""),q=g.anchor=p?p.anchor:a("");let{patchFlag:Y,dynamicChildren:J,slotScopeIds:y}=g;y&&(O=O?O.concat(y):y),p==null?(s(P,E,R),s(q,E,R),pe(g.children||[],E,q,S,V,U,O,L)):Y>0&&Y&64&&J&&p.dynamicChildren?(Ue(p.dynamicChildren,J,E,S,V,U,O),(g.key!=null||S&&g===S.subTree)&&fp(p,g,!0)):he(p,g,E,q,S,V,U,O,L)},ne=(p,g,E,R,S,V,U,O,L)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?S.ctx.activate(g,E,R,U,L):fe(g,E,R,S,V,U,L):Me(p,g,L)},fe=(p,g,E,R,S,V,U)=>{const O=p.component=K0(p,R,S);if(Zm(p)&&(O.ctx.renderer=cs),Q0(O),O.asyncDep){if(S&&S.registerDep(O,Ie),!p.el){const L=O.subTree=de(Ss);I(null,L,g,E)}}else Ie(O,p,g,E,S,V,U)},Me=(p,g,E)=>{const R=g.component=p.component;if(r0(p,g,E))if(R.asyncDep&&!R.asyncResolved){ue(R,g,E);return}else R.next=g,Jv(R.update),R.effect.dirty=!0,R.update();else g.el=p.el,R.vnode=g},Ie=(p,g,E,R,S,V,U)=>{const O=()=>{if(p.isMounted){let{next:q,bu:Y,u:J,parent:y,vnode:b}=p;{const qe=mp(p);if(qe){q&&(q.el=b.el,ue(p,q,U)),qe.asyncDep.then(()=>{p.isUnmounted||O()});return}}let T=q,W;us(p,!1),q?(q.el=b.el,ue(p,q,U)):q=b,Y&&Do(Y),(W=q.props&&q.props.onVnodeBeforeUpdate)&&Qt(W,y,q,b),us(p,!0);const ge=Ac(p),Re=p.subTree;p.subTree=ge,_(Re,ge,h(Re.el),Gs(Re),p,S,V),q.el=ge.el,T===null&&i0(p,ge.el),J&&Tt(J,S),(W=q.props&&q.props.onVnodeUpdated)&&Tt(()=>Qt(W,y,q,b),S)}else{let q;const{el:Y,props:J}=g,{bm:y,m:b,parent:T}=p,W=Oo(g);if(us(p,!1),y&&Do(y),!W&&(q=J&&J.onVnodeBeforeMount)&&Qt(q,T,g),us(p,!0),Y&&uo){const ge=()=>{p.subTree=Ac(p),uo(Y,p.subTree,p,S,null)};W?g.type.__asyncLoader().then(()=>!p.isUnmounted&&ge()):ge()}else{const ge=p.subTree=Ac(p);_(null,ge,E,R,p,S,V),g.el=ge.el}if(b&&Tt(b,S),!W&&(q=J&&J.onVnodeMounted)){const ge=g;Tt(()=>Qt(q,T,ge),S)}(g.shapeFlag&256||T&&Oo(T.vnode)&&T.vnode.shapeFlag&256)&&p.a&&Tt(p.a,S),p.isMounted=!0,g=E=R=null}},L=p.effect=new ru(O,xt,()=>du(P),p.scope),P=p.update=()=>{L.dirty&&L.run()};P.id=p.uid,us(p,!0),P()},ue=(p,g,E)=>{g.component=p;const R=p.vnode.props;p.vnode=g,p.next=null,O0(p,g.props,R,E),x0(p,g.children,E),ts(),Bh(p),ns()},he=(p,g,E,R,S,V,U,O,L=!1)=>{const P=p&&p.children,q=p?p.shapeFlag:0,Y=g.children,{patchFlag:J,shapeFlag:y}=g;if(J>0){if(J&128){yt(P,Y,E,R,S,V,U,O,L);return}else if(J&256){Ge(P,Y,E,R,S,V,U,O,L);return}}y&8?(q&16&&Ut(P,S,V),Y!==P&&u(E,Y)):q&16?y&16?yt(P,Y,E,R,S,V,U,O,L):Ut(P,S,V,!0):(q&8&&u(E,""),y&16&&pe(Y,E,R,S,V,U,O,L))},Ge=(p,g,E,R,S,V,U,O,L)=>{p=p||ir,g=g||ir;const P=p.length,q=g.length,Y=Math.min(P,q);let J;for(J=0;J<Y;J++){const y=g[J]=L?xn(g[J]):Jt(g[J]);_(p[J],y,E,null,S,V,U,O,L)}P>q?Ut(p,S,V,!0,!1,Y):pe(g,E,R,S,V,U,O,L,Y)},yt=(p,g,E,R,S,V,U,O,L)=>{let P=0;const q=g.length;let Y=p.length-1,J=q-1;for(;P<=Y&&P<=J;){const y=p[P],b=g[P]=L?xn(g[P]):Jt(g[P]);if(zr(y,b))_(y,b,E,null,S,V,U,O,L);else break;P++}for(;P<=Y&&P<=J;){const y=p[Y],b=g[J]=L?xn(g[J]):Jt(g[J]);if(zr(y,b))_(y,b,E,null,S,V,U,O,L);else break;Y--,J--}if(P>Y){if(P<=J){const y=J+1,b=y<q?g[y].el:R;for(;P<=J;)_(null,g[P]=L?xn(g[P]):Jt(g[P]),E,b,S,V,U,O,L),P++}}else if(P>J)for(;P<=Y;)Pt(p[P],S,V,!0),P++;else{const y=P,b=P,T=new Map;for(P=b;P<=J;P++){const Qe=g[P]=L?xn(g[P]):Jt(g[P]);Qe.key!=null&&T.set(Qe.key,P)}let W,ge=0;const Re=J-b+1;let qe=!1,kt=0;const Kt=new Array(Re);for(P=0;P<Re;P++)Kt[P]=0;for(P=y;P<=Y;P++){const Qe=p[P];if(ge>=Re){Pt(Qe,S,V,!0);continue}let It;if(Qe.key!=null)It=T.get(Qe.key);else for(W=b;W<=J;W++)if(Kt[W-b]===0&&zr(Qe,g[W])){It=W;break}It===void 0?Pt(Qe,S,V,!0):(Kt[It-b]=P+1,It>=kt?kt=It:qe=!0,_(Qe,g[It],E,null,S,V,U,O,L),ge++)}const Gt=qe?$0(Kt):ir;for(W=Gt.length-1,P=Re-1;P>=0;P--){const Qe=b+P,It=g[Qe],ho=Qe+1<q?g[Qe+1].el:R;Kt[P]===0?_(null,It,E,ho,S,V,U,O,L):qe&&(W<0||P!==Gt[W]?Ct(It,E,ho,2):W--)}}},Ct=(p,g,E,R,S=null)=>{const{el:V,type:U,transition:O,children:L,shapeFlag:P}=p;if(P&6){Ct(p.component.subTree,g,E,R);return}if(P&128){p.suspense.move(g,E,R);return}if(P&64){U.move(p,g,E,cs);return}if(U===De){s(V,g,E);for(let Y=0;Y<L.length;Y++)Ct(L[Y],g,E,R);s(p.anchor,g,E);return}if(U===Sc){G(p,g,E);return}if(R!==2&&P&1&&O)if(R===0)O.beforeEnter(V),s(V,g,E),Tt(()=>O.enter(V),S);else{const{leave:Y,delayLeave:J,afterLeave:y}=O,b=()=>s(V,g,E),T=()=>{Y(V,()=>{b(),y&&y()})};J?J(V,b,T):T()}else s(V,g,E)},Pt=(p,g,E,R=!1,S=!1)=>{const{type:V,props:U,ref:O,children:L,dynamicChildren:P,shapeFlag:q,patchFlag:Y,dirs:J}=p;if(O!=null&&dl(O,null,E,p,!0),q&256){g.ctx.deactivate(p);return}const y=q&1&&J,b=!Oo(p);let T;if(b&&(T=U&&U.onVnodeBeforeUnmount)&&Qt(T,g,p),q&6)Nn(p.component,E,R);else{if(q&128){p.suspense.unmount(E,R);return}y&&ls(p,null,g,"beforeUnmount"),q&64?p.type.remove(p,g,E,S,cs,R):P&&(V!==De||Y>0&&Y&64)?Ut(P,g,E,!1,!0):(V===De&&Y&384||!S&&q&16)&&Ut(L,g,E),R&&Ks(p)}(b&&(T=U&&U.onVnodeUnmounted)||y)&&Tt(()=>{T&&Qt(T,g,p),y&&ls(p,null,g,"unmounted")},E)},Ks=p=>{const{type:g,el:E,anchor:R,transition:S}=p;if(g===De){Ec(E,R);return}if(g===Sc){j(p);return}const V=()=>{r(E),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:U,delayLeave:O}=S,L=()=>U(E,V);O?O(p.el,V,L):L()}else V()},Ec=(p,g)=>{let E;for(;p!==g;)E=f(p),r(p),p=E;r(g)},Nn=(p,g,E)=>{const{bum:R,scope:S,update:V,subTree:U,um:O}=p;R&&Do(R),S.stop(),V&&(V.active=!1,Pt(U,p,g,E)),O&&Tt(O,g),Tt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ut=(p,g,E,R=!1,S=!1,V=0)=>{for(let U=V;U<p.length;U++)Pt(p[U],g,E,R,S)},Gs=p=>p.shapeFlag&6?Gs(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el);let qr=!1;const lo=(p,g,E)=>{p==null?g._vnode&&Pt(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,E),qr||(qr=!0,Bh(),Qm(),qr=!1),g._vnode=p},cs={p:_,um:Pt,m:Ct,r:Ks,mt:fe,mc:pe,pc:he,pbc:Ue,n:Gs,o:t};let Hr,uo;return{render:lo,hydrate:Hr,createApp:D0(lo,Hr)}}function Rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function U0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fp(t,e,n=!1){const s=t.children,r=e.children;if(se(s)&&se(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=xn(r[i]),a.el=o.el),n||fp(o,a)),a.type===Sa&&(a.el=o.el)}}function $0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}const B0=t=>t.__isTeleport,De=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Ss=Symbol.for("v-cmt"),Sc=Symbol.for("v-stc"),li=[];let $t=null;function M(t=!1){li.push($t=t?null:[])}function j0(){li.pop(),$t=li[li.length-1]||null}let wi=1;function Jh(t){wi+=t}function pp(t){return t.dynamicChildren=wi>0?$t||ir:null,j0(),wi>0&&$t&&$t.push(t),t}function $(t,e,n,s,r,i){return pp(d(t,e,n,s,r,i,!0))}function gs(t,e,n,s,r){return pp(de(t,e,n,s,r,!0))}function fl(t){return t?t.__v_isVNode===!0:!1}function zr(t,e){return t.type===e.type&&t.key===e.key}const gp=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||Et(t)||le(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,s=0,r=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gp(e),ref:e&&Vo(e),scopeId:ba,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:bt};return a?(_u(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),wi>0&&!o&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const de=q0;function q0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===o0)&&(t=Ss),fl(t)){const a=_r(t,e,!0);return n&&_u(a,n),wi>0&&!i&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(Z0(t)&&(t=t.__vccOpts),e){e=H0(e);let{class:a,style:c}=e;a&&!Ke(a)&&(e.class=ve(a)),xe(c)&&(jm(c)&&!se(c)&&(c=Xe({},c)),e.style=Dr(c))}const o=Ke(t)?1:a0(t)?128:B0(t)?64:xe(t)?4:le(t)?2:0;return d(t,e,n,s,r,o,i,!0)}function H0(t){return t?jm(t)||ap(t)?Xe({},t):t:null}function _r(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?_p(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&gp(l),ref:e&&e.ref?n&&i?se(i)?i.concat(Vo(e)):[i,Vo(e)]:Vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_r(t.ssContent),ssFallback:t.ssFallback&&_r(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&(u.transition=c.clone(u)),u}function nn(t=" ",e=0){return de(Sa,null,t,e)}function Se(t="",e=!1){return e?(M(),gs(Ss,null,t)):de(Ss,null,t)}function Jt(t){return t==null||typeof t=="boolean"?de(Ss):se(t)?de(De,null,t.slice()):typeof t=="object"?xn(t):de(Sa,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_r(t)}function _u(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),_u(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ap(e)?e._ctx=bt:r===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),s&64?(n=16,e=[nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function _p(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ve([e.class,s.class]));else if(r==="style")e.style=Dr([e.style,s.style]);else if(ya(r)){const i=e[r],o=s[r];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Qt(t,e,n,s=null){jt(t,e,7,[n,s])}const z0=sp();let W0=0;function K0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||z0,i={uid:W0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(s,r),emitsOptions:Jm(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=e0.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const G0=()=>ft||bt;let Qo,ml;{const t=Rm(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Qo=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),ml=e("__VUE_SSR_SETTERS__",n=>Ca=n)}const Bi=t=>{const e=ft;return Qo(t),t.scope.on(),()=>{t.scope.off(),Qo(e)}},Xh=()=>{ft&&ft.scope.off(),Qo(null)};function yp(t){return t.vnode.shapeFlag&4}let Ca=!1;function Q0(t,e=!1){e&&ml(e);const{props:n,children:s}=t.vnode,r=yp(t);N0(t,n,r,e),M0(t,s);const i=r?Y0(t,e):void 0;return e&&ml(!1),i}function Y0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,A0);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?X0(t):null,i=Bi(t);ts();const o=Hn(s,t,0,[t.props,r]);if(ns(),i(),Em(o)){if(o.then(Xh,Xh),e)return o.then(a=>{Zh(t,a,e)}).catch(a=>{Ia(a,t,0)});t.asyncDep=o}else Zh(t,o,e)}else vp(t,e)}function Zh(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Wm(e)),vp(t,n)}let ed;function vp(t,e,n){const s=t.type;if(!t.render){if(!e&&ed&&!s.render){const r=s.template||pu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Xe(Xe({isCustomElement:i,delimiters:a},o),c);s.render=ed(r,l)}}t.render=s.render||xt}{const r=Bi(t);ts();try{b0(t)}finally{ns(),r()}}}const J0={get(t,e){return St(t,"get",""),t[e]}};function X0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,J0),slots:t.slots,emit:t.emit,expose:e}}function Pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wm(jv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oi)return oi[n](t)},has(e,n){return n in e||n in oi}}))}function Z0(t){return le(t)&&"__vccOpts"in t}const Te=(t,e)=>qv(t,e,Ca);function ew(t,e,n){const s=arguments.length;return s===2?xe(e)&&!se(e)?fl(e)?de(t,null,[e]):de(t,e):de(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fl(n)&&(n=[n]),de(t,e,n))}const tw="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const nw="http://www.w3.org/2000/svg",sw="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,td=Ln&&Ln.createElement("template"),rw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ln.createElementNS(nw,t):e==="mathml"?Ln.createElementNS(sw,t):Ln.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{td.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=td.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},iw=Symbol("_vtc");function ow(t,e,n){const s=t[iw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nd=Symbol("_vod"),aw=Symbol("_vsh"),cw=Symbol(""),lw=/(^|;)\s*display\s*:/;function uw(t,e,n){const s=t.style,r=Ke(n);let i=!1;if(n&&!r){if(e)if(Ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Mo(s,a,"")}else for(const o in e)n[o]==null&&Mo(s,o,"");for(const o in n)o==="display"&&(i=!0),Mo(s,o,n[o])}else if(r){if(e!==n){const o=s[cw];o&&(n+=";"+o),s.cssText=n,i=lw.test(n)}}else e&&t.removeAttribute("style");nd in t&&(t[nd]=i?s.display:"",t[aw]&&(s.display="none"))}const sd=/\s*!important$/;function Mo(t,e,n){if(se(n))n.forEach(s=>Mo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hw(t,e);sd.test(n)?t.setProperty(xs(s),n.replace(sd,""),"important"):t[s]=n}}const rd=["Webkit","Moz","ms"],Cc={};function hw(t,e){const n=Cc[e];if(n)return n;let s=gr(e);if(s!=="filter"&&s in t)return Cc[e]=s;s=Am(s);for(let r=0;r<rd.length;r++){const i=rd[r]+s;if(i in t)return Cc[e]=i}return e}const id="http://www.w3.org/1999/xlink";function dw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(id,e.slice(6,e.length)):t.setAttributeNS(id,e,n);else{const i=gv(e);n==null||i&&!Sm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Zs(t,e,n,s){t.addEventListener(e,n,s)}function mw(t,e,n,s){t.removeEventListener(e,n,s)}const od=Symbol("_vei");function pw(t,e,n,s,r=null){const i=t[od]||(t[od]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=gw(e);if(s){const l=i[e]=vw(s,r);Zs(t,a,l,c)}else o&&(mw(t,a,o,c),i[e]=void 0)}}const ad=/(?:Once|Passive|Capture)$/;function gw(t){let e;if(ad.test(t)){e={};let s;for(;s=t.match(ad);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xs(t.slice(2)),e]}let Pc=0;const _w=Promise.resolve(),yw=()=>Pc||(_w.then(()=>Pc=0),Pc=Date.now());function vw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(ww(s,n.value),e,5,[s])};return n.value=t,n.attached=yw(),n}function ww(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const cd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ew=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?ow(t,s,l):e==="style"?uw(t,n,s):ya(e)?tu(e)||pw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(t,e,s,l))?fw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dw(t,e,s,l))};function Iw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&cd(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return cd(e)&&Ke(n)?!1:e in t}const ld=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Do(e,n):e};function Tw(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kc=Symbol("_assign"),As={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[kc]=ld(r);const i=s||r.props&&r.props.type==="number";Zs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=sl(a)),t[kc](a)}),n&&Zs(t,"change",()=>{t.value=t.value.trim()}),e||(Zs(t,"compositionstart",Tw),Zs(t,"compositionend",ud),Zs(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[kc]=ld(i),t.composing)return;const o=(r||t.type==="number")&&!/^0\d/.test(t.value)?sl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Aw=["ctrl","shift","alt","meta"],bw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Aw.some(n=>t[`${n}Key`]&&!e.includes(n))},Je=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=bw[e[o]];if(a&&a(r,e))return}return t(r,...i)})},Rw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=xs(r.key);if(e.some(o=>o===i||Rw[o]===i))return t(r)})},Sw=Xe({patchProp:Ew},rw);let hd;function Cw(){return hd||(hd=L0(Sw))}const Pw=(...t)=>{const e=Cw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dw(s);if(!r)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,kw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function kw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dw(t){return Ke(t)?document.querySelector(t):t}var dd={};/**
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
 */const Ep=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Nw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(n[u],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ep(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Ow;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const w=l<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vw=function(t){const e=Ep(t);return Ip.encodeByteArray(e,!0)},Yo=function(t){return Vw(t).replace(/\./g,"")},Tp=function(t){try{return Ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xw=()=>Mw().__FIREBASE_DEFAULTS__,Lw=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tp(t[1]);return e&&JSON.parse(e)},ka=()=>{try{return xw()||Lw()||Fw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ap=t=>{var e,n;return(n=(e=ka())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Uw=t=>{const e=Ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bp=()=>{var t;return(t=ka())===null||t===void 0?void 0:t.config},Rp=t=>{var e;return(e=ka())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Bw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function qw(){var t;const e=(t=ka())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ww(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kw(){return!qw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gw(){try{return typeof indexedDB=="object"}catch{return!1}}function Qw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Yw="FirebaseError";class Pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yw,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Jw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Pn(r,a,s)}}function Jw(t,e){return t.replace(Xw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Xw=/\{\$([^}]+)}/g;function Zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(fd(i)&&fd(o)){if(!yr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
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
 */function qi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Jr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eE(t,e){const n=new tE(t,e);return n.subscribe.bind(n)}class tE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");nE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Dc),r.error===void 0&&(r.error=Dc),r.complete===void 0&&(r.complete=Dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class sE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $w;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iE(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rE(t){return t===ds?void 0:t}function iE(t){return t.instantiationMode==="EAGER"}/**
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
 */class oE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const aE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},cE=_e.INFO,lE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},uE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=lE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=cE,this._logHandler=uE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const hE=(t,e)=>e.some(n=>t instanceof n);let md,pd;function dE(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sp=new WeakMap,pl=new WeakMap,Cp=new WeakMap,Nc=new WeakMap,vu=new WeakMap;function mE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sp.set(n,t)}).catch(()=>{}),vu.set(e,t),e}function pE(t){if(pl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pl.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gE(t){gl=t(gl)}function _E(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Oc(this),e,...n);return Cp.set(s,e.sort?e.sort():[e]),zn(s)}:fE().includes(t)?function(...e){return t.apply(Oc(this),e),zn(Sp.get(this))}:function(...e){return zn(t.apply(Oc(this),e))}}function yE(t){return typeof t=="function"?_E(t):(t instanceof IDBTransaction&&pE(t),hE(t,dE())?new Proxy(t,gl):t)}function zn(t){if(t instanceof IDBRequest)return mE(t);if(Nc.has(t))return Nc.get(t);const e=yE(t);return e!==t&&(Nc.set(t,e),vu.set(e,t)),e}const Oc=t=>vu.get(t);function vE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=zn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(zn(o.result),c.oldVersion,c.newVersion,zn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const wE=["get","getKey","getAll","getAllKeys","count"],EE=["put","add","delete","clear"],Vc=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=EE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Vc.set(e,i),i}gE(t=>({...t,get:(e,n,s)=>gd(e,n)||t.get(e,n,s),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
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
 */class IE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function TE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",_d="0.10.2";/**
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
 */const Ps=new yu("@firebase/app"),AE="@firebase/app-compat",bE="@firebase/analytics-compat",RE="@firebase/analytics",SE="@firebase/app-check-compat",CE="@firebase/app-check",PE="@firebase/auth",kE="@firebase/auth-compat",DE="@firebase/database",NE="@firebase/database-compat",OE="@firebase/functions",VE="@firebase/functions-compat",ME="@firebase/installations",xE="@firebase/installations-compat",LE="@firebase/messaging",FE="@firebase/messaging-compat",UE="@firebase/performance",$E="@firebase/performance-compat",BE="@firebase/remote-config",jE="@firebase/remote-config-compat",qE="@firebase/storage",HE="@firebase/storage-compat",zE="@firebase/firestore",WE="@firebase/firestore-compat",KE="firebase",GE="10.11.1";/**
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
 */const yl="[DEFAULT]",QE={[_l]:"fire-core",[AE]:"fire-core-compat",[RE]:"fire-analytics",[bE]:"fire-analytics-compat",[CE]:"fire-app-check",[SE]:"fire-app-check-compat",[PE]:"fire-auth",[kE]:"fire-auth-compat",[DE]:"fire-rtdb",[NE]:"fire-rtdb-compat",[OE]:"fire-fn",[VE]:"fire-fn-compat",[ME]:"fire-iid",[xE]:"fire-iid-compat",[LE]:"fire-fcm",[FE]:"fire-fcm-compat",[UE]:"fire-perf",[$E]:"fire-perf-compat",[BE]:"fire-rc",[jE]:"fire-rc-compat",[qE]:"fire-gcs",[HE]:"fire-gcs-compat",[zE]:"fire-fst",[WE]:"fire-fst-compat","fire-js":"fire-js",[KE]:"fire-js-all"};/**
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
 */const Jo=new Map,YE=new Map,vl=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){Ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vr(t){const e=t.name;if(vl.has(e))return Ps.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of Jo.values())yd(n,t);for(const n of YE.values())yd(n,t);return!0}function wu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t.settings!==void 0}/**
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
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new ji("app","Firebase",JE);/**
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
 */class XE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=GE;function Pp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Wn.create("bad-app-name",{appName:String(r)});if(n||(n=bp()),!n)throw Wn.create("no-options");const i=Jo.get(r);if(i){if(yr(n,i.options)&&yr(s,i.config))return i;throw Wn.create("duplicate-app",{appName:r})}const o=new oE(r);for(const c of vl.values())o.addComponent(c);const a=new XE(n,s,o);return Jo.set(r,a),a}function kp(t=yl){const e=Jo.get(t);if(!e&&t===yl&&bp())return Pp();if(!e)throw Wn.create("no-app",{appName:t});return e}function Kn(t,e,n){var s;let r=(s=QE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ps.warn(a.join(" "));return}vr(new Cs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ZE="firebase-heartbeat-database",eI=1,Ei="firebase-heartbeat-store";let Mc=null;function Dp(){return Mc||(Mc=vE(ZE,eI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ei)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function tI(t){try{const n=(await Dp()).transaction(Ei),s=await n.objectStore(Ei).get(Np(t));return await n.done,s}catch(e){if(e instanceof Pn)Ps.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ps.warn(n.message)}}}async function vd(t,e){try{const s=(await Dp()).transaction(Ei,"readwrite");await s.objectStore(Ei).put(e,Np(t)),await s.done}catch(n){if(n instanceof Pn)Ps.warn(n.message);else{const s=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ps.warn(s.message)}}}function Np(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nI=1024,sI=30*24*60*60*1e3;class rI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=sI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wd(),{heartbeatsToSend:s,unsentEntries:r}=iI(this._heartbeatsCache.heartbeats),i=Yo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wd(){return new Date().toISOString().substring(0,10)}function iI(t,e=nI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ed(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ed(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ed(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aI(t){vr(new Cs("platform-logger",e=>new IE(e),"PRIVATE")),vr(new Cs("heartbeat",e=>new rI(e),"PRIVATE")),Kn(_l,_d,t),Kn(_l,_d,"esm2017"),Kn("fire-js","")}aI("");function Eu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Op(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cI=Op,Vp=new ji("auth","Firebase",Op());/**
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
 */const Xo=new yu("@firebase/auth");function lI(t,...e){Xo.logLevel<=_e.WARN&&Xo.warn(`Auth (${Vr}): ${t}`,...e)}function xo(t,...e){Xo.logLevel<=_e.ERROR&&Xo.error(`Auth (${Vr}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw Tu(t,...e)}function Ht(t,...e){return Tu(t,...e)}function Iu(t,e,n){const s=Object.assign(Object.assign({},cI()),{[e]:n});return new ji("auth","Firebase",s).create(e,{appName:t.name})}function In(t){return Iu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ft(t,"argument-error"),Iu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vp.create(t,...e)}function te(t,e,...n){if(!t)throw Tu(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Tn(t,e){t||gn(e)}/**
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
 */function wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hI(){return Id()==="http:"||Id()==="https:"}function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hI()||Hw()||"connection"in navigator)?navigator.onLine:!0}function fI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=jw()||zw()}get(){return dI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Au(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pI=new Hi(3e4,6e4);function ss(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kn(t,e,n,s,r={}){return xp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=qi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Mp.fetch()(Lp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},mI),e);try{const r=new _I(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Iu(t,u,l);Ft(t,u)}}catch(r){if(r instanceof Pn)throw r;Ft(t,"network-request-failed",{message:String(r)})}}async function zi(t,e,n,s,r={}){const i=await kn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ft(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Au(t.config,r):`${t.config.apiScheme}://${r}`}function gI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _I{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),pI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ht(t,e,s);return r.customData._tokenResponse=n,r}function Td(t){return t!==void 0&&t.enterprise!==void 0}class yI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vI(t,e){return kn(t,"GET","/v2/recaptchaConfig",ss(t,e))}/**
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
 */async function wI(t,e){return kn(t,"POST","/v1/accounts:delete",e)}async function Fp(t,e){return kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EI(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=bu(s);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ui(xc(r.auth_time)),issuedAtTime:ui(xc(r.iat)),expirationTime:ui(xc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function bu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Tp(n);return r?JSON.parse(r):(xo("Failed to decode base64 JWT payload"),null)}catch(r){return xo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ad(t){const e=bu(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Pn&&II(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function II({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await wr(t,Fp(n,{idToken:s}));te(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Up(i.providerUserInfo):[],a=bI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new El(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function AI(t){const e=$e(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Up(t){return t.map(e=>{var{providerId:n}=e,s=Eu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function RI(t,e){const n=await xp(t,{},async()=>{const s=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Lp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SI(t,e){return kn(t,"POST","/v2/accounts:revokeToken",ss(t,e))}/**
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
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ad(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Ad(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await RI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new lr;return s&&(te(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(te(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Vn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new El(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wr(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EI(this,e)}reload(){return AI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await wr(this,wI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:G,emailVerified:j,isAnonymous:z,providerData:x,stsTokenManager:oe}=n;te(G&&oe,e,"internal-error");const pe=lr.fromJSON(this.name,oe);te(typeof G=="string",e,"internal-error"),Vn(h,e.name),Vn(f,e.name),te(typeof j=="boolean",e,"internal-error"),te(typeof z=="boolean",e,"internal-error"),Vn(m,e.name),Vn(w,e.name),Vn(_,e.name),Vn(v,e.name),Vn(I,e.name),Vn(F,e.name);const je=new _n({uid:G,auth:e,email:f,emailVerified:j,displayName:h,isAnonymous:z,photoURL:w,phoneNumber:m,tenantId:_,stsTokenManager:pe,createdAt:I,lastLoginAt:F});return x&&Array.isArray(x)&&(je.providerData=x.map(Ue=>Object.assign({},Ue))),v&&(je._redirectEventId=v),je}static async _fromIdTokenResponse(e,n,s=!1){const r=new lr;r.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];te(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Up(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new lr;a.updateFromIdToken(s);const c=new _n({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new El(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const bd=new Map;function yn(t){Tn(t instanceof Function,"Expected a class definition");let e=bd.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bd.set(t,e),e)}/**
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
 */class $p{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$p.type="NONE";const Rd=$p;/**
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
 */function Lo(t,e,n){return`firebase:${t}:${e}:${n}`}class ur{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Lo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Lo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ur(yn(Rd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||yn(Rd);const o=Lo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=_n._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ur(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ur(i,e,s))}}/**
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
 */function Sd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zp(e))return"Blackberry";if(Wp(e))return"Webos";if(Ru(e))return"Safari";if((e.includes("chrome/")||jp(e))&&!e.includes("edge/"))return"Chrome";if(Hp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bp(t=at()){return/firefox\//i.test(t)}function Ru(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jp(t=at()){return/crios\//i.test(t)}function qp(t=at()){return/iemobile/i.test(t)}function Hp(t=at()){return/android/i.test(t)}function zp(t=at()){return/blackberry/i.test(t)}function Wp(t=at()){return/webos/i.test(t)}function Da(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CI(t=at()){var e;return Da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PI(){return Ww()&&document.documentMode===10}function Kp(t=at()){return Da(t)||Hp(t)||Wp(t)||zp(t)||/windows phone/i.test(t)||qp(t)}function kI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=Sd(at());break;case"Worker":n=`${Sd(at())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
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
 */class DI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function NI(t,e={}){return kn(t,"GET","/v2/passwordPolicy",ss(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const OI=6;class VI{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:OI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class MI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cd(this),this.idTokenSubscription=new Cd(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fp(this,{idToken:e}),s=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(In(this));const n=e?$e(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NI(this),n=new VI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await SI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rs(t){return $e(t)}class Cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xI(t){Na=t}function Qp(t){return Na.loadJS(t)}function LI(){return Na.recaptchaEnterpriseScript}function FI(){return Na.gapiScript}function UI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $I="recaptcha-enterprise",BI="NO_RECAPTCHA";class jI{constructor(e){this.type=$I,this.auth=rs(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{vI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new yI(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Td(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(BI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Td(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=LI();c.length!==0&&(c+=a),Qp(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Pd(t,e,n,s=!1){const r=new jI(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Il(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Pd(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pd(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function qI(t,e){const n=wu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(yr(i,e??{}))return r;Ft(r,"already-initialized")}return n.initialize({options:e})}function HI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zI(t,e,n){const s=rs(t);te(s._canInitEmulator,s,"emulator-config-failed"),te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Yp(e),{host:o,port:a}=WI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),KI()}function Yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WI(t){const e=Yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:kd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:kd(o)}}}function kd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function GI(t,e){return kn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function QI(t,e){return zi(t,"POST","/v1/accounts:signInWithPassword",ss(t,e))}/**
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
 */async function YI(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",ss(t,e))}async function JI(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",ss(t,e))}/**
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
 */class Ii extends Su{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ii(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ii(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,n,"signInWithPassword",QI);case"emailLink":return YI(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,s,"signUpPassword",GI);case"emailLink":return JI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hr(t,e){return zi(t,"POST","/v1/accounts:signInWithIdp",ss(t,e))}/**
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
 */const XI="http://localhost";class ks extends Su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Eu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ks(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hr(e,n)}buildRequest(){const e={requestUri:XI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qi(n)}return e}}/**
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
 */function ZI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eT(t){const e=Yr(Jr(t)).link,n=e?Yr(Jr(e)).deep_link_id:null,s=Yr(Jr(t)).deep_link_id;return(s?Yr(Jr(s)).link:null)||s||n||e||t}class Cu{constructor(e){var n,s,r,i,o,a;const c=Yr(Jr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=ZI((r=c.mode)!==null&&r!==void 0?r:null);te(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eT(e);try{return new Cu(n)}catch{return null}}}/**
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
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,n){return Ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Cu.parseLink(n);return te(s,"argument-error"),Ii._fromEmailAndCode(e,s.code,s.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends Pu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends Wi{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ks._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return mn.credential(n,s)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class Un extends Wi{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class $n extends Wi{constructor(){super("twitter.com")}static credential(e,n){return ks._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $n.credential(n,s)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
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
 */async function tT(t,e){return zi(t,"POST","/v1/accounts:signUp",ss(t,e))}/**
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
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await _n._fromIdTokenResponse(e,s,r),o=Dd(s);return new Ds({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Dd(s);return new Ds({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ea extends Pn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ea(e,n,s,r)}}function Jp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,s):i})}async function nT(t,e,n=!1){const s=await wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ds._forOperation(t,"link",s)}/**
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
 */async function sT(t,e,n=!1){const{auth:s}=t;if(Bt(s.app))return Promise.reject(In(s));const r="reauthenticate";try{const i=await wr(t,Jp(s,r,e,t),n);te(i.idToken,s,"internal-error");const o=bu(i.idToken);te(o,s,"internal-error");const{sub:a}=o;return te(t.uid===a,s,"user-mismatch"),Ds._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ft(s,"user-mismatch"),i}}/**
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
 */async function Xp(t,e,n=!1){if(Bt(t.app))return Promise.reject(In(t));const s="signIn",r=await Jp(t,s,e),i=await Ds._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function rT(t,e){return Xp(rs(t),e)}/**
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
 */async function Zp(t){const e=rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iT(t,e,n){if(Bt(t.app))return Promise.reject(In(t));const s=rs(t),o=await Il(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Zp(t),c}),a=await Ds._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function oT(t,e,n){return Bt(t.app)?Promise.reject(In(t)):rT($e(t),Mr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Zp(t),s})}/**
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
 */async function aT(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ku(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=$e(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await wr(s,aT(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function cT(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function lT(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function uT(t,e,n,s){return $e(t).onAuthStateChanged(e,n,s)}function hT(t){return $e(t).signOut()}const ta="__sak";/**
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
 */class eg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dT(){const t=at();return Ru(t)||Da(t)}const fT=1e3,mT=10;class tg extends eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dT()&&kI(),this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);PI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},fT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tg.type="LOCAL";const pT=tg;/**
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
 */class ng extends eg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ng.type="SESSION";const sg=ng;/**
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
 */function gT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Oa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await gT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
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
 */function Du(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Du("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function yT(t){an().location.href=t}/**
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
 */function rg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function vT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ET(){return rg()?self:null}/**
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
 */const ig="firebaseLocalStorageDb",IT=1,na="firebaseLocalStorage",og="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function TT(){const t=indexedDB.deleteDatabase(ig);return new Ki(t).toPromise()}function Tl(){const t=indexedDB.open(ig,IT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(na,{keyPath:og})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(na)?e(s):(s.close(),await TT(),e(await Tl()))})})}async function Nd(t,e,n){const s=Va(t,!0).put({[og]:e,value:n});return new Ki(s).toPromise()}async function AT(t,e){const n=Va(t,!1).get(e),s=await new Ki(n).toPromise();return s===void 0?null:s.value}function Od(t,e){const n=Va(t,!0).delete(e);return new Ki(n).toPromise()}const bT=800,RT=3;class ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>RT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(ET()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vT(),!this.activeServiceWorker)return;this.sender=new _T(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tl();return await Nd(e,ta,"1"),await Od(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Nd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>AT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Va(r,!1).getAll();return new Ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ag.type="LOCAL";const ST=ag;new Hi(3e4,6e4);/**
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
 */function cg(t,e){return e?yn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nu extends Su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CT(t){return Xp(t.auth,new Nu(t),t.bypassAuthState)}function PT(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),sT(n,new Nu(t),t.bypassAuthState)}async function kT(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),nT(n,new Nu(t),t.bypassAuthState)}/**
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
 */class lg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CT;case"linkViaPopup":case"linkViaRedirect":return kT;case"reauthViaPopup":case"reauthViaRedirect":return PT;default:Ft(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DT=new Hi(2e3,1e4);async function NT(t,e,n){if(Bt(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const s=rs(t);uI(t,e,Pu);const r=cg(s,n);return new _s(s,"signInViaPopup",e,r).executeNotNull()}class _s extends lg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DT.get())};e()}}_s.currentPopupAction=null;/**
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
 */const OT="pendingRedirect",Fo=new Map;class VT extends lg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const s=await MT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MT(t,e){const n=FT(e),s=LT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function xT(t,e){Fo.set(t._key(),e)}function LT(t){return yn(t._redirectPersistence)}function FT(t){return Lo(OT,t.config.apiKey,t.name)}async function UT(t,e,n=!1){if(Bt(t.app))return Promise.reject(In(t));const s=rs(t),r=cg(s,e),o=await new VT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const $T=10*60*1e3;class BT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ug(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$T&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ug({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ug(t);default:return!1}}/**
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
 */async function qT(t,e={}){return kn(t,"GET","/v1/projects",e)}/**
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
 */const HT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zT=/^https?/;async function WT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qT(t);for(const n of e)try{if(KT(n))return}catch{}Ft(t,"unauthorized-domain")}function KT(t){const e=wl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zT.test(n))return!1;if(HT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const GT=new Hi(3e4,6e4);function Md(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QT(t){return new Promise((e,n)=>{var s,r,i;function o(){Md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Md(),n(Ht(t,"network-request-failed"))},timeout:GT.get()})}if(!((r=(s=an().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const a=UI("iframefcb");return an()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},Qp(`${FI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function YT(t){return Uo=Uo||QT(t),Uo}/**
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
 */const JT=new Hi(5e3,15e3),XT="__/auth/iframe",ZT="emulator/auth/iframe",eA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nA(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Au(e,ZT):`https://${t.config.authDomain}/${XT}`,s={apiKey:e.apiKey,appName:t.name,v:Vr},r=tA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${qi(s).slice(1)}`}async function sA(t){const e=await YT(t),n=an().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:nA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=an().setTimeout(()=>{i(o)},JT.get());function c(){an().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const rA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iA=500,oA=600,aA="_blank",cA="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lA(t,e,n,s=iA,r=oA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=at().toLowerCase();n&&(a=jp(l)?aA:n),Bp(l)&&(e=e||cA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,w])=>`${f}${m}=${w},`,"");if(CI(l)&&a!=="_self")return uA(e||"",a),new xd(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new xd(h)}function uA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const hA="__/auth/handler",dA="emulator/auth/handler",fA=encodeURIComponent("fac");async function Ld(t,e,n,s,r,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vr,eventId:r};if(e instanceof Pu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Wi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${fA}=${encodeURIComponent(c)}`:"";return`${mA(t)}?${qi(a).slice(1)}${l}`}function mA({config:t}){return t.emulator?Au(t,dA):`https://${t.authDomain}/${hA}`}/**
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
 */const Lc="webStorageSupport";class pA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sg,this._completeRedirectFn=UT,this._overrideRedirectResult=xT}async _openPopup(e,n,s,r){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ld(e,n,s,wl(),r);return lA(e,o,Du())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ld(e,n,s,wl(),r);return yT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Tn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sA(e),s=new BT(e);return n.register("authEvent",r=>(te(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Lc];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kp()||Ru()||Da()}}const gA=pA;var Fd="@firebase/auth",Ud="1.7.2";/**
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
 */class _A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vA(t){vr(new Cs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},l=new MI(s,r,i,c);return HI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vr(new Cs("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(s=>new _A(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Fd,Ud,yA(t)),Kn(Fd,Ud,"esm2017")}/**
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
 */const wA=5*60,EA=Rp("authIdTokenMaxAge")||wA;let $d=null;const IA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>EA)return;const r=n==null?void 0:n.token;$d!==r&&($d=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function TA(t=kp()){const e=wu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qI(t,{popupRedirectResolver:gA,persistence:[ST,pT,sg]}),s=Rp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=IA(i.toString());lT(n,o,()=>o(n.currentUser)),cT(n,a=>o(a))}}const r=Ap("auth");return r&&zI(n,`http://${r}`),n}function AA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ht("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",AA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vA("Browser");var bA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Ou=Ou||{},ie=bA||self;function Ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function RA(t){return Object.prototype.hasOwnProperty.call(t,Fc)&&t[Fc]||(t[Fc]=++SA)}var Fc="closure_uid_"+(1e9*Math.random()>>>0),SA=0;function CA(t,e,n){return t.call.apply(t.bind,arguments)}function PA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=CA:mt=PA,mt.apply(null,arguments)}function wo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function is(){this.s=this.s,this.o=this.o}var kA=0;is.prototype.s=!1;is.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kA!=0)&&RA(this)};is.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ma(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var DA=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ie.addEventListener("test",n,e),ie.removeEventListener("test",n,e)}catch{}return t}();function Ti(t){return/^[\s\xa0]*$/.test(t)}function La(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return La().indexOf(t)!=-1}function Mu(t){return Mu[" "](t),t}Mu[" "]=function(){};function NA(t,e){var n=bb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var OA=tn("Opera"),Er=tn("Trident")||tn("MSIE"),dg=tn("Edge"),Al=dg||Er,fg=tn("Gecko")&&!(La().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),VA=La().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function mg(){var t=ie.document;return t?t.documentMode:void 0}var bl;e:{var Uc="",$c=function(){var t=La();if(fg)return/rv:([^\);]+)(\)|;)/.exec(t);if(dg)return/Edge\/([\d\.]+)/.exec(t);if(Er)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VA)return/WebKit\/(\S+)/.exec(t);if(OA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($c&&(Uc=$c?$c[1]:""),Er){var Bc=mg();if(Bc!=null&&Bc>parseFloat(Uc)){bl=String(Bc);break e}}bl=Uc}var Rl;if(ie.document&&Er){var jd=mg();Rl=jd||parseInt(bl,10)||void 0}else Rl=void 0;var MA=Rl;function Ai(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fg){e:{try{Mu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ai.$.h.call(this)}}et(Ai,pt);var xA={2:"touch",3:"pen",4:"mouse"};Ai.prototype.h=function(){Ai.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fa="closure_listenable_"+(1e6*Math.random()|0),LA=0;function FA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++LA,this.fa=this.ia=!1}function Ua(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function xu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function UA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pg(t){const e={};for(const n in t)e[n]=t[n];return e}const qd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<qd.length;i++)n=qd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $a(t){this.src=t,this.g={},this.h=0}$a.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new FA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Sl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=hg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ua(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Lu="closure_lm_"+(1e6*Math.random()|0),jc={};function _g(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_g(t,e[i],n,s,r);return null}return n=wg(n),t&&t[Fa]?t.O(e,n,xa(s)?!!s.capture:!!s,r):$A(t,e,n,!1,s,r)}function $A(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=xa(r)?!!r.capture:!!r,a=Uu(t);if(a||(t[Lu]=a=new $a(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=BA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)DA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(vg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BA(){function t(n){return e.call(t.src,t.listener,n)}const e=jA;return t}function yg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yg(t,e[i],n,s,r);else s=xa(s)?!!s.capture:!!s,n=wg(n),t&&t[Fa]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cl(i,n,s,r),-1<n&&(Ua(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cl(e,n,s,r)),(n=-1<t?e[t]:null)&&Fu(n))}function Fu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fa])Sl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(vg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Uu(e))?(Sl(n,t),n.h==0&&(n.src=null,e[Lu]=null)):Ua(t)}}}function vg(t){return t in jc?jc[t]:jc[t]="on"+t}function jA(t,e){if(t.fa)t=!0;else{e=new Ai(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Fu(t),t=n.call(s,e)}return t}function Uu(t){return t=t[Lu],t instanceof $a?t:null}var qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wg(t){return typeof t=="function"?t:(t[qc]||(t[qc]=function(e){return t.handleEvent(e)}),t[qc])}function Ze(){is.call(this),this.i=new $a(this),this.S=this,this.J=null}et(Ze,is);Ze.prototype[Fa]=!0;Ze.prototype.removeEventListener=function(t,e,n,s){yg(this,t,e,n,s)};function it(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var r=e;e=new pt(s,t),gg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Eo(o,s,!0,e)&&r}if(o=e.g=t,r=Eo(o,s,!0,e)&&r,r=Eo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Eo(o,s,!1,e)&&r}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ua(n[s]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ze.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Eo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Sl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var $u=ie.JSON.stringify;class qA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function HA(){var t=Bu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zA{constructor(){this.h=this.g=null}add(e,n){const s=Eg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Eg=new qA(()=>new WA,t=>t.reset());class WA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GA(t){ie.setTimeout(()=>{throw t},0)}let bi,Ri=!1,Bu=new zA,Ig=()=>{const t=ie.Promise.resolve(void 0);bi=()=>{t.then(QA)}};var QA=()=>{for(var t;t=HA();){try{t.h.call(t.g)}catch(n){GA(n)}var e=Eg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ri=!1};function Ba(t,e){Ze.call(this),this.h=t||1,this.g=e||ie,this.j=mt(this.qb,this),this.l=Date.now()}et(Ba,Ze);B=Ba.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(ju(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ju(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}B.N=function(){Ba.$.N.call(this),ju(this),delete this.g};function qu(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function Tg(t){t.g=qu(()=>{t.g=null,t.i&&(t.i=!1,Tg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YA extends is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tg(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(t){is.call(this),this.h=t,this.g={}}et(Si,is);var Hd=[];function Ag(t,e,n,s){Array.isArray(n)||(n&&(Hd[0]=n.toString()),n=Hd);for(var r=0;r<n.length;r++){var i=_g(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bg(t){xu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fu(e)},t),t.g={}}Si.prototype.N=function(){Si.$.N.call(this),bg(this)};Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ja(){this.g=!0}ja.prototype.Ea=function(){this.g=!1};function JA(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function XA(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function sr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+eb(t,n)+(s?" "+s:"")})}function ZA(t,e){t.info(function(){return"TIMEOUT: "+e})}ja.prototype.info=function(){};function eb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return $u(n)}catch{return e}}var Us={},zd=null;function qa(){return zd=zd||new Ze}Us.Ta="serverreachability";function Rg(t){pt.call(this,Us.Ta,t)}et(Rg,pt);function Ci(t){const e=qa();it(e,new Rg(e))}Us.STAT_EVENT="statevent";function Sg(t,e){pt.call(this,Us.STAT_EVENT,t),this.stat=e}et(Sg,pt);function wt(t){const e=qa();it(e,new Sg(e,t))}Us.Ua="timingevent";function Cg(t,e){pt.call(this,Us.Ua,t),this.size=e}et(Cg,pt);function Gi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Ha={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hu(){}Hu.prototype.h=null;function Wd(t){return t.h||(t.h=t.i())}function kg(){}var Qi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zu(){pt.call(this,"d")}et(zu,pt);function Wu(){pt.call(this,"c")}et(Wu,pt);var Pl;function za(){}et(za,Hu);za.prototype.g=function(){return new XMLHttpRequest};za.prototype.i=function(){return{}};Pl=new za;function Yi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Si(this),this.P=tb,t=Al?125:void 0,this.V=new Ba(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Dg}function Dg(){this.i=null,this.g="",this.h=!1}var tb=45e3,Ng={},kl={};B=Yi.prototype;B.setTimeout=function(t){this.P=t};function Dl(t,e,n){t.L=1,t.A=Ka(An(e)),t.u=n,t.S=!0,Og(t,null)}function Og(t,e){t.G=Date.now(),Ji(t),t.B=An(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),Bg(n.i,"t",s),t.o=0,n=t.l.J,t.h=new Dg,t.g=c_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new YA(mt(t.Pa,t,t.g),t.O)),Ag(t.U,t.g,"readystatechange",t.nb),e=t.I?pg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ci(),JA(t.j,t.v,t.B,t.m,t.W,t.u)}B.nb=function(t){t=t.target;const e=this.M;e&&sn(t)==3?e.l():this.Pa(t)};B.Pa=function(t){try{if(t==this.g)e:{const u=sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Al||this.g&&(this.h.h||this.g.ja()||Yd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ci(3):Ci(2)),Wa(this);var n=this.g.da();this.ca=n;t:if(Vg(this)){var s=Yd(this.g);t="";var r=s.length,i=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),hi(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,XA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ti(a)){var l=a;break t}}l=null}if(n=l)sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nl(this,n);else{this.i=!1,this.s=3,wt(12),ys(this),hi(this);break e}}this.S?(Mg(this,u,o),Al&&this.i&&u==3&&(Ag(this.U,this.V,"tick",this.mb),this.V.start())):(sr(this.j,this.m,o,null),Nl(this,o)),u==4&&ys(this),this.i&&!this.J&&(u==4?r_(this.l,this):(this.i=!1,Ji(this)))}else Ib(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),ys(this),hi(this)}}}catch{}finally{}};function Vg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Mg(t,e,n){let s=!0,r;for(;!t.J&&t.o<n.length;)if(r=nb(t,n),r==kl){e==4&&(t.s=4,wt(14),s=!1),sr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ng){t.s=4,wt(15),sr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else sr(t.j,t.m,r,null),Nl(t,r);Vg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,wt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xu(e),e.M=!0,wt(11))):(sr(t.j,t.m,n,"[Invalid Chunked Response]"),ys(t),hi(t))}B.mb=function(){if(this.g){var t=sn(this.g),e=this.g.ja();this.o<e.length&&(Wa(this),Mg(this,t,e),this.i&&t!=4&&Ji(this))}};function nb(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?kl:(n=Number(e.substring(n,s)),isNaN(n)?Ng:(s+=1,s+n>e.length?kl:(e=e.slice(s,s+n),t.o=s+n,e)))}B.cancel=function(){this.J=!0,ys(this)};function Ji(t){t.Y=Date.now()+t.P,xg(t,t.P)}function xg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Gi(mt(t.lb,t),e)}function Wa(t){t.C&&(ie.clearTimeout(t.C),t.C=null)}B.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(ZA(this.j,this.B),this.L!=2&&(Ci(),wt(17)),ys(this),this.s=2,hi(this)):xg(this,this.Y-t)};function hi(t){t.l.H==0||t.J||r_(t.l,t)}function ys(t){Wa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ju(t.V),bg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Nl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ol(n.i,t))){if(!t.K&&Ol(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ia(n),Ya(n);else break e;Ju(n),wt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Gi(mt(n.ib,n),6e3));if(1>=Hg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vs(n,11)}else if((t.K||n.g==t)&&ia(n),!Ti(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ku(i,i.h),i.h=null))}if(s.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,Ne(s.I,s.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=a_(s,s.J?s.pa:null,s.Y),o.K){zg(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.C&&(Wa(a),Ji(a)),s.g=o}else n_(s);0<n.j.length&&Ja(n)}else l[0]!="stop"&&l[0]!="close"||vs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vs(n,7):Yu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ci(4)}catch{}}function sb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ma(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function rb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Lg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rb(t),s=sb(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Fg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ib(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function bs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bs){this.h=t.h,sa(this,t.j),this.s=t.s,this.g=t.g,ra(this,t.m),this.l=t.l;var e=t.i,n=new Pi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kd(this,n),this.o=t.o}else t&&(e=String(t).match(Fg))?(this.h=!1,sa(this,e[1]||"",!0),this.s=Xr(e[2]||""),this.g=Xr(e[3]||"",!0),ra(this,e[4]),this.l=Xr(e[5]||"",!0),Kd(this,e[6]||"",!0),this.o=Xr(e[7]||"")):(this.h=!1,this.i=new Pi(null,this.h))}bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zr(e,Gd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zr(e,Gd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zr(n,n.charAt(0)=="/"?cb:ab,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zr(n,ub)),t.join("")};function An(t){return new bs(t)}function sa(t,e,n){t.j=n?Xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ra(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kd(t,e,n){e instanceof Pi?(t.i=e,hb(t.i,t.h)):(n||(e=Zr(e,lb)),t.i=new Pi(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Ka(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ob),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ob(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gd=/[#\/\?@]/g,ab=/[#\?:]/g,cb=/[#\?]/g,lb=/[#\?@]/g,ub=/#/g;function Pi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function os(t){t.g||(t.g=new Map,t.h=0,t.i&&ib(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Pi.prototype;B.add=function(t,e){os(this),this.i=null,t=xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ug(t,e){os(t),e=xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $g(t,e){return os(t),e=xr(t,e),t.g.has(e)}B.forEach=function(t,e){os(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};B.ta=function(){os(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};B.Z=function(t){os(this);let e=[];if(typeof t=="string")$g(this,t)&&(e=e.concat(this.g.get(xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return os(this),this.i=null,t=xr(this,t),$g(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Bg(t,e,n){Ug(t,e),0<n.length&&(t.i=null,t.g.set(xr(t,e),Vu(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hb(t,e){e&&!t.j&&(os(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ug(this,s),Bg(this,r,n))},t)),t.j=e}var db=class{constructor(t,e){this.g=t,this.map=e}};function jg(t){this.l=t||fb,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fb=10;function qg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hg(t){return t.h?1:t.g?t.g.size:0}function Ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ku(t,e){t.g?t.g.add(e):t.h=e}function zg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jg.prototype.cancel=function(){if(this.i=Wg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vu(t.i)}var mb=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function pb(){this.g=new mb}function gb(t,e,n){const s=n||"";try{Lg(t,function(r,i){let o=r;xa(r)&&(o=$u(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function _b(t,e){const n=new ja;if(ie.Image){const s=new Image;s.onload=wo(Io,n,s,"TestLoadImage: loaded",!0,e),s.onerror=wo(Io,n,s,"TestLoadImage: error",!1,e),s.onabort=wo(Io,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=wo(Io,n,s,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Io(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Xi(t){this.l=t.ec||null,this.j=t.ob||!1}et(Xi,Hu);Xi.prototype.g=function(){return new Ga(this.l,this.j)};Xi.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Ga,Ze);var Gu=0;B=Ga.prototype;B.open=function(t,e){if(this.readyState!=Gu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ki(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=Gu};B.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Kg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}B.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zi(this):ki(this),this.readyState==3&&Kg(this)}};B.Za=function(t){this.g&&(this.response=this.responseText=t,Zi(this))};B.Ya=function(t){this.g&&(this.response=t,Zi(this))};B.ka=function(){this.g&&Zi(this)};function Zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ki(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ki(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var yb=ie.JSON.parse;function Be(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gg,this.L=this.M=!1}et(Be,Ze);var Gg="",vb=/^https?$/i,wb=["POST","PUT"];B=Be.prototype;B.Oa=function(t){this.M=t};B.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pl.g(),this.C=this.u?Wd(this.u):Wd(Pl),this.g.onreadystatechange=mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ie.FormData&&t instanceof ie.FormData,!(0<=hg(wb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jg(this),0<this.B&&((this.L=Eb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.ua,this)):this.A=qu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qd(this,i)}};function Eb(t){return Er&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.ua=function(){typeof Ou<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function Qd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qg(t),Qa(t)}function Qg(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Qa(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qa(this,!0)),Be.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?Yg(this):this.kb())};B.kb=function(){Yg(this)};function Yg(t){if(t.h&&typeof Ou<"u"&&(!t.C[1]||sn(t)!=4||t.da()!=2)){if(t.v&&sn(t)==4)qu(t.La,0,t);else if(it(t,"readystatechange"),sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Fg)[1]||null;!r&&ie.self&&ie.self.location&&(r=ie.self.location.protocol.slice(0,-1)),s=!vb.test(r?r.toLowerCase():"")}n=s}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var i=2<sn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Qg(t)}}finally{Qa(t)}}}}function Qa(t,e){if(t.g){Jg(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=s}catch{}}}function Jg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}B.isActive=function(){return!!this.g};function sn(t){return t.g?t.g.readyState:0}B.da=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),yb(e)}};function Yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ib(t){const e={};t=(t.g&&2<=sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ti(t[s]))continue;var n=KA(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}UA(e,function(s){return s.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xg(t){let e="";return xu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Qu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Xg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function Wr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zg(t){this.Ga=0,this.j=[],this.l=new ja,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wr("baseRetryDelayMs",5e3,t),this.hb=Wr("retryDelaySeedMs",1e4,t),this.eb=Wr("forwardChannelMaxRetries",2,t),this.xa=Wr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jg(t&&t.concurrentRequestLimit),this.Ja=new pb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=Zg.prototype;B.ra=8;B.H=1;function Yu(t){if(e_(t),t.H==3){var e=t.W++,n=An(t.I);if(Ne(n,"SID",t.K),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),eo(t,n),e=new Yi(t,t.l,e),e.L=2,e.A=Ka(An(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.A,n=!0),n||(e.g=c_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ji(e)}o_(t)}function Ya(t){t.g&&(Xu(t),t.g.cancel(),t.g=null)}function e_(t){Ya(t),t.u&&(ie.clearTimeout(t.u),t.u=null),ia(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Ja(t){if(!qg(t.i)&&!t.m){t.m=!0;var e=t.Na;bi||Ig(),Ri||(bi(),Ri=!0),Bu.add(e,t),t.C=0}}function Tb(t,e){return Hg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Gi(mt(t.Na,t,e),i_(t,t.C)),t.C++,!0)}B.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Yi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=pg(i),gg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=t_(this,r,e),n=An(this.I),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),eo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xg(i)))+"&"+e:this.o&&Qu(n,this.o,i)),Ku(this.i,r),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),r.aa=!0,Dl(r,n,null)):Dl(r,n,e),this.H=2}}else this.H==3&&(t?Jd(this,t):this.j.length==0||qg(this.i)||Jd(this))};function Jd(t,e){var n;e?n=e.m:n=t.W++;const s=An(t.I);Ne(s,"SID",t.K),Ne(s,"RID",n),Ne(s,"AID",t.V),eo(t,s),t.o&&t.s&&Qu(s,t.o,t.s),n=new Yi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=t_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ku(t.i,n),Dl(n,s,e)}function eo(t,e){t.na&&xu(t.na,function(n,s){Ne(e,s,n)}),t.h&&Lg({},function(n,s){Ne(e,s,n)})}function t_(t,e,n){n=Math.min(t.j.length,n);var s=t.h?mt(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{gb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function n_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;bi||Ig(),Ri||(bi(),Ri=!0),Bu.add(e,t),t.A=0}}function Ju(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Gi(mt(t.Ma,t),i_(t,t.A)),t.A++,!0)}B.Ma=function(){if(this.u=null,s_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Gi(mt(this.jb,this),t)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Ya(this),s_(this))};function Xu(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function s_(t){t.g=new Yi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=An(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.K),Ne(e,"AID",t.V),Ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ne(e,"TO",t.qa),Ne(e,"TYPE","xmlhttp"),eo(t,e),t.o&&t.s&&Qu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ka(An(e)),n.u=null,n.S=!0,Og(n,t)}B.ib=function(){this.v!=null&&(this.v=null,Ya(this),Ju(this),wt(19))};function ia(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function r_(t,e){var n=null;if(t.g==e){ia(t),Xu(t),t.g=null;var s=2}else if(Ol(t.i,e))n=e.F,zg(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;s=qa(),it(s,new Cg(s,n)),Ja(t)}else n_(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(s==1&&Tb(t,e)||s==2&&Ju(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:vs(t,5);break;case 4:vs(t,10);break;case 3:vs(t,6);break;default:vs(t,2)}}}function i_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=mt(t.pb,t);n||(n=new bs("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||sa(n,"https"),Ka(n)),_b(n.toString(),s)}else wt(2);t.H=0,t.h&&t.h.za(e),o_(t),e_(t)}B.pb=function(t){t?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function o_(t){if(t.H=0,t.ma=[],t.h){const e=Wg(t.i);(e.length!=0||t.j.length!=0)&&(Bd(t.ma,e),Bd(t.ma,t.j),t.i.i.length=0,Vu(t.j),t.j.length=0),t.h.ya()}}function a_(t,e,n){var s=n instanceof bs?An(n):new bs(n);if(s.g!="")e&&(s.g=e+"."+s.g),ra(s,s.m);else{var r=ie.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new bs(null);s&&sa(i,s),e&&(i.g=e),r&&ra(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Ne(s,n,e),Ne(s,"VER",t.ra),eo(t,s),s}function c_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Be(new Xi({ob:n})):new Be(t.va),e.Oa(t.J),e}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function l_(){}B=l_.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function oa(){if(Er&&!(10<=Number(MA)))throw Error("Environmental error: no available transport.")}oa.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){Ze.call(this),this.g=new Zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ti(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ti(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Lr(this)}et(Ot,Ze);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=a_(t,null,t.Y),Ja(t)};Ot.prototype.close=function(){Yu(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$u(t),t=n);e.j.push(new db(e.fb++,t)),e.H==3&&Ja(e)};Ot.prototype.N=function(){this.g.h=null,delete this.j,Yu(this.g),delete this.g,Ot.$.N.call(this)};function u_(t){zu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(u_,zu);function h_(){Wu.call(this),this.status=1}et(h_,Wu);function Lr(t){this.g=t}et(Lr,l_);Lr.prototype.Ba=function(){it(this.g,"a")};Lr.prototype.Aa=function(t){it(this.g,new u_(t))};Lr.prototype.za=function(t){it(this.g,new h_)};Lr.prototype.ya=function(){it(this.g,"b")};function Ab(){this.blockSize=-1}function zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(zt,Ab);zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Hc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Hc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Hc(this,s),r=0;break}}this.h=r,this.i+=e};zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ce(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var bb={};function Zu(t){return-128<=t&&128>t?NA(t,function(e){return new Ce([e|0],0>e?-1:0)}):new Ce([t|0],0>t?-1:0)}function rn(t){if(isNaN(t)||!isFinite(t))return dr;if(0>t)return nt(rn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Vl;return new Ce(e,0)}function d_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(d_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rn(Math.pow(e,8)),s=dr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=rn(Math.pow(e,i)),s=s.R(i).add(rn(o))):(s=s.R(n),s=s.add(rn(o)))}return s}var Vl=4294967296,dr=Zu(0),Ml=Zu(1),Xd=Zu(16777216);B=Ce.prototype;B.ea=function(){if(Mt(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Vl+s)*e,e*=Vl}return t};B.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vn(this))return"0";if(Mt(this))return"-"+nt(this).toString(t);for(var e=rn(Math.pow(t,6)),n=this,s="";;){var r=ca(n,e).g;n=aa(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,vn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};B.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Mt(t){return t.h==-1}B.X=function(t){return t=aa(this,t),Mt(t)?-1:vn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ce(n,~t.h).add(Ml)}B.abs=function(){return Mt(this)?nt(this):this};B.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Ce(n,n[n.length-1]&-2147483648?-1:0)};function aa(t,e){return t.add(nt(e))}B.R=function(t){if(vn(this)||vn(t))return dr;if(Mt(this))return Mt(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Mt(t))return nt(this.R(nt(t)));if(0>this.X(Xd)&&0>t.X(Xd))return rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,To(n,2*s+2*r),n[2*s+2*r+1]+=i*c,To(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,To(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,To(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ce(n,0)};function To(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Kr(t,e){this.g=t,this.h=e}function ca(t,e){if(vn(e))throw Error("division by zero");if(vn(t))return new Kr(dr,dr);if(Mt(t))return e=ca(nt(t),e),new Kr(nt(e.g),nt(e.h));if(Mt(e))return e=ca(t,nt(e)),new Kr(nt(e.g),e.h);if(30<t.g.length){if(Mt(t)||Mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ml,s=e;0>=s.X(t);)n=Zd(n),s=Zd(s);var r=Qs(n,1),i=Qs(s,1);for(s=Qs(s,2),n=Qs(n,2);!vn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Qs(s,1),n=Qs(n,1)}return e=aa(t,r.R(e)),new Kr(r,e)}for(r=dr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=rn(n),o=i.R(e);Mt(o)||0<o.X(t);)n-=s,i=rn(n),o=i.R(e);vn(i)&&(i=Ml),r=r.add(i),t=aa(t,o)}return new Kr(r,t)}B.gb=function(t){return ca(this,t).h};B.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ce(n,this.h&t.h)};B.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ce(n,this.h|t.h)};B.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ce(n,this.h^t.h)};function Zd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ce(n,t.h)}function Qs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ce(r,t.h)}oa.prototype.createWebChannel=oa.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Ha.NO_ERROR=0;Ha.TIMEOUT=8;Ha.HTTP_ERROR=6;Pg.COMPLETE="complete";kg.EventType=Qi;Qi.OPEN="a";Qi.CLOSE="b";Qi.ERROR="c";Qi.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;zt.prototype.digest=zt.prototype.l;zt.prototype.reset=zt.prototype.reset;zt.prototype.update=zt.prototype.j;Ce.prototype.add=Ce.prototype.add;Ce.prototype.multiply=Ce.prototype.R;Ce.prototype.modulo=Ce.prototype.gb;Ce.prototype.compare=Ce.prototype.X;Ce.prototype.toNumber=Ce.prototype.ea;Ce.prototype.toString=Ce.prototype.toString;Ce.prototype.getBits=Ce.prototype.D;Ce.fromNumber=rn;Ce.fromString=d_;var Rb=function(){return new oa},Sb=function(){return qa()},zc=Ha,Cb=Pg,Pb=Us,ef={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},kb=Xi,Ao=kg,Db=Be,Nb=zt,fr=Ce;const tf="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Fr="10.11.1";/**
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
 */const Ns=new yu("@firebase/firestore");function Gr(){return Ns.logLevel}function K(t,...e){if(Ns.logLevel<=_e.DEBUG){const n=e.map(eh);Ns.debug(`Firestore (${Fr}): ${t}`,...n)}}function bn(t,...e){if(Ns.logLevel<=_e.ERROR){const n=e.map(eh);Ns.error(`Firestore (${Fr}): ${t}`,...n)}}function Ir(t,...e){if(Ns.logLevel<=_e.WARN){const n=e.map(eh);Ns.warn(`Firestore (${Fr}): ${t}`,...n)}}function eh(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function Pe(t,e){t||re()}function ce(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class f_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ob{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mb{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new f_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new ut(e)}}class xb{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Lb{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new xb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ub{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new Fb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $b(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class m_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=$b(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function be(t,e){return t<e?-1:t>e?1:0}function Tr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Oe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Oe(0,0))}static max(){return new ae(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Di{constructor(e,n,s){n===void 0?n=0:n>e.length&&re(),s===void 0?s=e.length-n:s>e.length-n&&re(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends Di{construct(e,n,s){return new Ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const Bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Di{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return Bb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new H(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new H(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ve.fromString(e))}static fromName(e){return new X(Ve.fromString(e).popFirst(5))}static empty(){return new X(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ve(e.slice()))}}function jb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ae.fromTimestamp(s===1e9?new Oe(n+1,0):new Oe(n,s));return new Jn(r,X.empty(),e)}function qb(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Jn(ae.min(),X.empty(),-1)}static max(){return new Jn(ae.max(),X.empty(),-1)}}function Hb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function to(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==zb)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Kb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function no(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class th{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}th.oe=-1;function Xa(t){return t==null}function la(t){return t===0&&1/t==-1/0}function Gb(t){return typeof t=="number"&&Number.isInteger(t)&&!la(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function p_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??tt.RED,this.left=r??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new tt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,s,r,i){return this}insert(e,n,s){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new ot(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class g_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new g_("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=Qb.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Os(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */function nh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sh(t){const e=t.mapValue.fields.__previous_value__;return nh(e)?sh(e):e}function Ni(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class Yb{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nh(t)?4:Jb(t)?9007199254740991:10:re()}function un(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Xn(r.timestampValue),a=Xn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Os(r.bytesValue).isEqual(Os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ze(r.doubleValue),a=ze(i.doubleValue);return o===a?la(o)===la(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Tr(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(nf(o)!==nf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!un(o[c],a[c])))return!1;return!0}(t,e);default:return re()}}function Vi(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Ar(t,e){if(t===e)return 0;const n=Vs(t),s=Vs(e);if(n!==s)return be(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),c=ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return rf(t.timestampValue,e.timestampValue);case 4:return rf(Ni(t),Ni(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Os(i),c=Os(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=be(a[l],c[l]);if(u!==0)return u}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(ze(i.latitude),ze(o.latitude));return a!==0?a:be(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ar(a[l],c[l]);if(u)return u}return be(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ro.mapValue&&o===Ro.mapValue)return 0;if(i===Ro.mapValue)return 1;if(o===Ro.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=be(c[h],u[h]);if(f!==0)return f;const m=Ar(a[c[h]],l[u[h]]);if(m!==0)return m}return be(c.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function rf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Xn(t),s=Xn(e),r=be(n.seconds,s.seconds);return r!==0?r:be(n.nanos,s.nanos)}function br(t){return xl(t)}function xl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Xn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=xl(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${xl(n.fields[o])}`;return r+"}"}(t.mapValue):re()}function of(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ll(t){return!!t&&"integerValue"in t}function rh(t){return!!t&&"arrayValue"in t}function af(t){return!!t&&"nullValue"in t}function cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=di(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=di(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Jb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=di(n)}setAll(e){let n=st.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=di(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];$o(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){$s(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new At(di(this.value))}}function __(t){const e=[];return $s(t.fields,(n,s)=>{const r=new st([n]);if($o(s)){const i=__(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Nt(e)}/**
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
 */class ht{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,ae.min(),ae.min(),ae.min(),At.empty(),0)}static newFoundDocument(e,n,s,r){return new ht(e,1,n,ae.min(),s,r,0)}static newNoDocument(e,n){return new ht(e,2,n,ae.min(),ae.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ae.min(),ae.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ua{constructor(e,n){this.position=e,this.inclusive=n}}function lf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=X.comparator(X.fromName(o.referenceValue),n.key):s=Ar(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function uf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class y_{}class We extends y_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new e1(e,n,s):n==="array-contains"?new s1(e,s):n==="in"?new r1(e,s):n==="not-in"?new i1(e,s):n==="array-contains-any"?new o1(e,s):new We(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new t1(e,s):new n1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ar(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(Ar(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends y_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return v_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function v_(t){return t.op==="and"}function w_(t){return Zb(t)&&v_(t)}function Zb(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Fl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+br(t.value);if(w_(t))return t.filters.map(e=>Fl(e)).join(",");{const e=t.filters.map(n=>Fl(n)).join(",");return`${t.op}(${e})`}}function E_(t,e){return t instanceof We?function(s,r){return r instanceof We&&s.op===r.op&&s.field.isEqual(r.field)&&un(s.value,r.value)}(t,e):t instanceof Wt?function(s,r){return r instanceof Wt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&E_(o,r.filters[a]),!0):!1}(t,e):void re()}function I_(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${br(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(I_).join(" ,")+"}"}(t):"Filter"}class e1 extends We{constructor(e,n,s){super(e,n,s),this.key=X.fromName(s.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class t1 extends We{constructor(e,n){super(e,"in",n),this.keys=T_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n1 extends We{constructor(e,n){super(e,"not-in",n),this.keys=T_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>X.fromName(s.referenceValue))}class s1 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rh(n)&&Vi(n.arrayValue,this.value)}}class r1 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class i1 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class o1 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vi(this.value.arrayValue,s))}}/**
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
 */class a1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function hf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new a1(t,e,n,s,r,i,o)}function ih(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Fl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>br(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>br(s)).join(",")),e.ue=n}return e.ue}function oh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!E_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uf(t.startAt,e.startAt)&&uf(t.endAt,e.endAt)}function Ul(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ur{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function c1(t,e,n,s,r,i,o,a){return new Ur(t,e,n,s,r,i,o,a)}function Za(t){return new Ur(t)}function df(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function A_(t){return t.collectionGroup!==null}function fi(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(st.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Mi(i,s))}),n.has(st.keyField().canonicalString())||e.ce.push(new Mi(st.keyField(),s))}return e.ce}function cn(t){const e=ce(t);return e.le||(e.le=l1(e,fi(t))),e.le}function l1(t,e){if(t.limitType==="F")return hf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Mi(r.field,i)});const n=t.endAt?new ua(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ua(t.startAt.position,t.startAt.inclusive):null;return hf(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function $l(t,e){const n=t.filters.concat([e]);return new Ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bl(t,e,n){return new Ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return oh(cn(t),cn(e))&&t.limitType===e.limitType}function b_(t){return`${ih(cn(t))}|lt:${t.limitType}`}function er(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>I_(r)).join(", ")}]`),Xa(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>br(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>br(r)).join(",")),`Target(${s})`}(cn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):X.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of fi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=lf(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,fi(s),r)||s.endAt&&!function(o,a,c){const l=lf(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,fi(s),r))}(t,e)}function u1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function R_(t){return(e,n)=>{let s=!1;for(const r of fi(t)){const i=h1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function h1(t,e,n){const s=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ar(c,l):re()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return re()}}/**
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
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return p_(this.inner)}size(){return this.innerSize}}/**
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
 */const d1=new Fe(X.comparator);function Rn(){return d1}const S_=new Fe(X.comparator);function ei(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=S_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ws(){return mi()}function P_(){return mi()}function mi(){return new $r(t=>t.toString(),(t,e)=>t.isEqual(e))}const f1=new Fe(X.comparator),m1=new ot(X.comparator);function me(...t){let e=m1;for(const n of t)e=e.add(n);return e}const p1=new ot(be);function g1(){return p1}/**
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
 */function k_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(e)?"-0":e}}function D_(t){return{integerValue:""+t}}function N_(t,e){return Gb(e)?D_(e):k_(t,e)}/**
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
 */class nc{constructor(){this._=void 0}}function _1(t,e,n){return t instanceof xi?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&nh(i)&&(i=sh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Rr?V_(t,e):t instanceof Sr?M_(t,e):function(r,i){const o=O_(r,i),a=ff(o)+ff(r.Pe);return Ll(o)&&Ll(r.Pe)?D_(a):k_(r.serializer,a)}(t,e)}function y1(t,e,n){return t instanceof Rr?V_(t,e):t instanceof Sr?M_(t,e):n}function O_(t,e){return t instanceof Li?function(s){return Ll(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class xi extends nc{}class Rr extends nc{constructor(e){super(),this.elements=e}}function V_(t,e){const n=x_(e);for(const s of t.elements)n.some(r=>un(r,s))||n.push(s);return{arrayValue:{values:n}}}class Sr extends nc{constructor(e){super(),this.elements=e}}function M_(t,e){let n=x_(e);for(const s of t.elements)n=n.filter(r=>!un(r,s));return{arrayValue:{values:n}}}class Li extends nc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ff(t){return ze(t.integerValue||t.doubleValue)}function x_(t){return rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class sc{constructor(e,n){this.field=e,this.transform=n}}function v1(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Rr&&r instanceof Rr||s instanceof Sr&&r instanceof Sr?Tr(s.elements,r.elements,un):s instanceof Li&&r instanceof Li?un(s.Pe,r.Pe):s instanceof xi&&r instanceof xi}(t.transform,e.transform)}class w1{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ic(t.key,Rt.none()):new so(t.key,t.data,Rt.none());{const n=t.data,s=At.empty();let r=new ot(st.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new as(t.key,s,new Nt(r.toArray()),Rt.none())}}function E1(t,e,n){t instanceof so?function(r,i,o){const a=r.value.clone(),c=pf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(r,i,o){if(!Bo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=pf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(F_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pi(t,e,n,s){return t instanceof so?function(i,o,a,c){if(!Bo(i.precondition,o))return a;const l=i.value.clone(),u=gf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof as?function(i,o,a,c){if(!Bo(i.precondition,o))return a;const l=gf(i.fieldTransforms,c,o),u=o.data;return u.setAll(F_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function I1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=O_(s.transform,r||null);i!=null&&(n===null&&(n=At.empty()),n.set(s.field,i))}return n||null}function mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Tr(s,r,(i,o)=>v1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends rc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class as extends rc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function F_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pf(t,e,n){const s=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,y1(o,a,n[r]))}return s}function gf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,_1(i,o,e))}return s}class ic extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T1 extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&E1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=pi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=pi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=P_();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=L_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(n,s)=>mf(n,s))&&Tr(this.baseMutations,e.baseMutations,(n,s)=>mf(n,s))}}class ah{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Pe(e.mutations.length===s.length);let r=function(){return f1}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ah(e,n,s,r)}}/**
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
 */class b1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class R1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,ye;function S1(t){switch(t){default:return re();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function U_(t){if(t===void 0)return bn("GRPC error has no .code"),A.UNKNOWN;switch(t){case He.OK:return A.OK;case He.CANCELLED:return A.CANCELLED;case He.UNKNOWN:return A.UNKNOWN;case He.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case He.INTERNAL:return A.INTERNAL;case He.UNAVAILABLE:return A.UNAVAILABLE;case He.UNAUTHENTICATED:return A.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case He.NOT_FOUND:return A.NOT_FOUND;case He.ALREADY_EXISTS:return A.ALREADY_EXISTS;case He.PERMISSION_DENIED:return A.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case He.ABORTED:return A.ABORTED;case He.OUT_OF_RANGE:return A.OUT_OF_RANGE;case He.UNIMPLEMENTED:return A.UNIMPLEMENTED;case He.DATA_LOSS:return A.DATA_LOSS;default:return re()}}(ye=He||(He={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function C1(){return new TextEncoder}/**
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
 */const P1=new fr([4294967295,4294967295],0);function _f(t){const e=C1().encode(t),n=new Nb;return n.update(e),new Uint8Array(n.digest())}function yf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fr([n,s],0),new fr([r,i],0)]}class ch{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(s<0)throw new ti(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=fr.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(fr.fromNumber(s)));return r.compare(P1)===1&&(r=new fr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_f(e),[s,r]=yf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ch(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=_f(e),[s,r]=yf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ro.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new oc(ae.min(),r,new Fe(be),Rn(),me())}}class ro{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ro(s,n,me(),me(),me())}}/**
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
 */class jo{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class $_{constructor(e,n){this.targetId=e,this.me=n}}class B_{constructor(e,n,s=_t.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class vf{constructor(){this.fe=0,this.ge=Ef(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=me(),n=me(),s=me();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:re()}}),new ro(this.pe,this.ye,e,n,s)}ve(){this.we=!1,this.ge=Ef()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class k1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rn(),this.qe=wf(),this.Qe=new Fe(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.ve(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(Ul(i))if(s===0){const o=new X(i.path);this.Ue(n,o,ht.newNoDocument(o,ae.min()))}else Pe(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Os(s).toUint8Array()}catch(c){if(c instanceof g_)return Ir("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ch(o,r,i)}catch(c){return Ir(c instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Ul(a.target)){const c=new X(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ht.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let s=me();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new oc(e,n,this.Qe,this.ke,s);return this.ke=Rn(),this.qe=wf(),this.Qe=new Fe(be),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new vf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wf(){return new Fe(X.comparator)}function Ef(){return new Fe(X.comparator)}const D1={asc:"ASCENDING",desc:"DESCENDING"},N1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},O1={and:"AND",or:"OR"};class V1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jl(t,e){return t.useProto3Json||Xa(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function M1(t,e){return ha(t,e.toTimestamp())}function ln(t){return Pe(!!t),ae.fromTimestamp(function(n){const s=Xn(n);return new Oe(s.seconds,s.nanos)}(t))}function lh(t,e){return ql(t,e).canonicalString()}function ql(t,e){const n=function(r){return new Ve(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q_(t){const e=Ve.fromString(t);return Pe(G_(e)),e}function Hl(t,e){return lh(t.databaseId,e.path)}function Wc(t,e){const n=q_(e);if(n.get(1)!==t.databaseId.projectId)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(z_(n))}function H_(t,e){return lh(t.databaseId,e)}function x1(t){const e=q_(t);return e.length===4?Ve.emptyPath():z_(e)}function zl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z_(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function If(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function L1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Pe(u===void 0||typeof u=="string"),_t.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Buffer||u instanceof Uint8Array),_t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:U_(l.code);return new H(u,l.message||"")}(o);n=new B_(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Wc(t,s.document.name),i=ln(s.document.updateTime),o=s.document.createTime?ln(s.document.createTime):ae.min(),a=new At({mapValue:{fields:s.document.fields}}),c=ht.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new jo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Wc(t,s.document),i=s.readTime?ln(s.readTime):ae.min(),o=ht.newNoDocument(r,i),a=s.removedTargetIds||[];n=new jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Wc(t,s.document),i=s.removedTargetIds||[];n=new jo([],i,r,null)}else{if(!("filter"in e))return re();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new R1(r,i),a=s.targetId;n=new $_(a,o)}}return n}function F1(t,e){let n;if(e instanceof so)n={update:If(t,e.key,e.value)};else if(e instanceof ic)n={delete:Hl(t,e.key)};else if(e instanceof as)n={update:If(t,e.key,e.data),updateMask:K1(e.fieldMask)};else{if(!(e instanceof T1))return re();n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Rr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Li)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:M1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function U1(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?ln(r.updateTime):ln(i);return o.isEqual(ae.min())&&(o=ln(i)),new w1(o,r.transformResults||[])}(n,e))):[]}function $1(t,e){return{documents:[H_(t,e.path)]}}function B1(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=H_(t,r);const i=function(l){if(l.length!==0)return K_(Wt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:tr(f.field),direction:H1(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=jl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:r}}function j1(t){let e=x1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=W_(h);return f instanceof Wt&&w_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(w){return new Mi(nr(w.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Xa(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new ua(m,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new ua(m,f)}(n.endAt)),c1(e,r,o,i,a,"F",c,l)}function q1(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function W_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=nr(n.unaryFilter.field);return We.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=nr(n.unaryFilter.field);return We.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nr(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=nr(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return We.create(nr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(s=>W_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function H1(t){return D1[t]}function z1(t){return N1[t]}function W1(t){return O1[t]}function tr(t){return{fieldPath:t.canonicalString()}}function nr(t){return st.fromServerFormat(t.fieldPath)}function K_(t){return t instanceof We?function(n){if(n.op==="=="){if(cf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NAN"}};if(af(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NAN"}};if(af(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(n.field),op:z1(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const s=n.getFilters().map(r=>K_(r));return s.length===1?s[0]:{compositeFilter:{op:W1(n.op),filters:s}}}(t):re()}function K1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function G_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Bn{constructor(e,n,s,r,i=ae.min(),o=ae.min(),a=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class G1{constructor(e){this.ut=e}}function Q1(t){const e=j1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bl(e,e.limit,"L"):e}/**
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
 */class Y1{constructor(){this.on=new J1}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Jn.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class J1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ot(Ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ot(Ve.comparator)).toArray()}}/**
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
 */class Cr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Cr(0)}static Nn(){return new Cr(-1)}}/**
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
 */class X1{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Z1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&pi(s.mutation,r,Nt.empty(),Oe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,me()).next(()=>s))}getLocalViewOfDocuments(e,n,s=me()){const r=ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ei();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,me()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Rn();const o=mi(),a=function(){return mi()}();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof as)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),pi(u.mutation,l,u.mutation.getFieldMask(),Oe.now())):o.set(l.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Z1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=mi();let r=new Fe((o,a)=>o-a),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Nt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||me()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=P_();u.forEach(f=>{if(!i.has(f)){const m=L_(n.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):A_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(ws());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,me())).next(u=>({batchId:a,changes:C_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(s=>{let r=ei();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next(a=>C.forEach(a,c=>{const l=function(h,f){return new Ur(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s,r).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ht.newInvalidDocument(u)))});let a=ei();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&pi(u.mutation,l,Nt.empty(),Oe.now()),tc(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class tR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:ln(r.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:Q1(r.bundledQuery),readTime:ln(r.readTime)}}(n)),C.resolve()}}/**
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
 */class nR{constructor(){this.overlays=new Fe(X.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ws();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=ws(),i=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Fe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ws(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ws(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new b1(n,s));let i=this.lr.get(n);i===void 0&&(i=me(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
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
 */class uh{constructor(){this.hr=new ot(Ye.Pr),this.Ir=new ot(Ye.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Ye(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Ye(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new X(new Ve([])),s=new Ye(n,e),r=new Ye(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new X(new Ve([])),s=new Ye(n,e),r=new Ye(n,e+1);let i=me();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ye{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return X.comparator(e.key,n.key)||be(e.gr,n.gr)}static Tr(e,n){return be(e.gr,n.gr)||X.comparator(e.key,n.key)}}/**
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
 */class sR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ot(Ye.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ye(n,0),r=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ot(be);return n.forEach(r=>{const i=new Ye(r,0),o=new Ye(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),C.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;X.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new X(i),0);let a=new ot(be);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return C.forEach(n.mutations,r=>{const i=new Ye(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Ye(n,0),r=this.yr.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rR{constructor(e){this.Cr=e,this.docs=function(){return new Fe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let s=Rn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ht.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Rn();const o=n.path,a=new X(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Hb(qb(u),s)<=0||(r.has(u.key)||tc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){re()}vr(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new iR(this)}getSize(e){return C.resolve(this.size)}}class iR extends X1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class oR{constructor(e){this.persistence=e,this.Fr=new $r(n=>ih(n),oh),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Mr=0,this.Or=new uh,this.targetCount=0,this.Nr=Cr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Cr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
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
 */class aR{constructor(e,n){this.Lr={},this.overlays={},this.Br=new th(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new oR(this),this.indexManager=new Y1,this.remoteDocumentCache=function(r){return new rR(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new G1(n),this.Kr=new tR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Lr[e.toKey()];return s||(s=new sR(n,this.referenceDelegate),this.Lr[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){K("MemoryPersistence","Starting transaction:",e);const r=new cR(this.Br.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return C.or(Object.values(this.Lr).map(s=>()=>s.containsKey(e,n)))}}class cR extends Wb{constructor(e){super(),this.currentSequenceNumber=e}}class hh{constructor(e){this.persistence=e,this.Gr=new uh,this.zr=null}static jr(e){return new hh(e)}get Hr(){if(this.zr)return this.zr;throw re()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,s=>{const r=X.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,ae.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class dh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=me(),r=me();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class lR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return Kw()?8:Kb(at())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Gr()<=_e.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",er(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Gr()<=_e.DEBUG&&K("QueryEngine","Query:",er(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Gr()<=_e.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",er(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):C.resolve())}zi(e,n){if(df(n))return C.resolve(null);let s=cn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Bl(n,null,"F"),s=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=me(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Bl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,s,r){return df(n)||r.isEqual(ae.min())?C.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?C.resolve(null):(Gr()<=_e.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),er(n)),this.Xi(e,o,n,jb(r,-1)).next(a=>a))})}Yi(e,n){let s=new ot(R_(e));return n.forEach((r,i)=>{tc(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Gr()<=_e.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",er(n)),this.Gi.getDocumentsMatchingQuery(e,n,Jn.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class hR{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new Fe(be),this.ns=new $r(i=>ih(i),oh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function dR(t,e,n,s){return new hR(t,e,n,s)}async function Q_(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=me();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function fR(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let m=C.resolve();return f.forEach(w=>{m=m.next(()=>u.getEntry(c,w)).next(_=>{const v=l.docVersions.get(w);Pe(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=me();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Y_(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function mR(t,e){const n=ce(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(_t.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(_,v,I){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=Rn(),l=me();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(pR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!s.isEqual(ae.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=r,i))}function pR(t,e,n){let s=me(),r=me();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Rn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:r}})}function gR(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _R(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new Bn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Wl(t,e,n){const s=ce(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!no(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function Tf(t,e,n){const s=ce(t);let r=ae.min(),i=me();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ce(c),f=h.ns.get(u);return f!==void 0?C.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(s,o,cn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:ae.min(),n?i:me())).next(a=>(yR(s,u1(e),a),{documents:a,ls:i})))}function yR(t,e,n){let s=t.rs.get(e)||ae.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class Af{constructor(){this.activeTargetIds=g1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vR{constructor(){this.eo=new Af,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Af,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wR{ro(e){}shutdown(){}}/**
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
 */class bf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let So=null;function Kc(){return So===null?So=function(){return 268435456+Math.round(2147483648*Math.random())}():So++,"0x"+So.toString(16)}/**
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
 */const ER={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
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
 */const lt="WebChannelConnection";class TR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=s+"://"+n.host,this.wo=`projects/${r}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get bo(){return!1}Do(n,s,r,i,o){const a=Kc(),c=this.Co(n,s.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,r).then(u=>(K("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ir("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",r),u})}Mo(n,s,r,i,o,a){return this.Do(n,s,r,i,o)}vo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}Co(n,s){const r=ER[n];return`${this.yo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,s,r){const i=Kc();return new Promise((o,a)=>{const c=new Db;c.setWithCredentials(!0),c.listenOnce(Cb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zc.NO_ERROR:const u=c.getResponseJson();K(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case zc.TIMEOUT:K(lt,`RPC '${e}' ${i} timed out`),a(new H(A.DEADLINE_EXCEEDED,"Request time out"));break;case zc.HTTP_ERROR:const h=c.getStatus();if(K(lt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const w=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(I)>=0?I:A.UNKNOWN}(m.status);a(new H(w,m.message))}else a(new H(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(A.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{K(lt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);K(lt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}xo(e,n,s){const r=Kc(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rb(),a=Sb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new kb({})),this.vo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");K(lt,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const w=new IR({co:v=>{m?K(lt,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(f||(K(lt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),K(lt,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},lo:()=>h.close()}),_=(v,I,F)=>{v.listen(I,G=>{try{F(G)}catch(j){setTimeout(()=>{throw j},0)}})};return _(h,Ao.EventType.OPEN,()=>{m||(K(lt,`RPC '${e}' stream ${r} transport opened.`),w.Vo())}),_(h,Ao.EventType.CLOSE,()=>{m||(m=!0,K(lt,`RPC '${e}' stream ${r} transport closed`),w.fo())}),_(h,Ao.EventType.ERROR,v=>{m||(m=!0,Ir(lt,`RPC '${e}' stream ${r} transport errored:`,v),w.fo(new H(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ao.EventType.MESSAGE,v=>{var I;if(!m){const F=v.data[0];Pe(!!F);const G=F,j=G.error||((I=G[0])===null||I===void 0?void 0:I.error);if(j){K(lt,`RPC '${e}' stream ${r} received error:`,j);const z=j.status;let x=function(je){const Ue=He[je];if(Ue!==void 0)return U_(Ue)}(z),oe=j.message;x===void 0&&(x=A.INTERNAL,oe="Unknown error status: "+z+" with message "+j.message),m=!0,w.fo(new H(x,oe)),h.close()}else K(lt,`RPC '${e}' stream ${r} received:`,F),w.po(F)}}),_(a,Pb.STAT_EVENT,v=>{v.stat===ef.PROXY?K(lt,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===ef.NOPROXY&&K(lt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.mo()},0),w}}function Gc(){return typeof document<"u"?document:null}/**
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
 */function ac(t){return new V1(t,!0)}/**
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
 */class J_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=s,this.No=r,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),s=Math.max(0,Date.now()-this.qo),r=Math.max(0,n-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
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
 */class X_{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Wo=s,this.Go=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new J_(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.zo===n&&this.a_(s,r)},s=>{e(()=>{const r=new H(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.u_(r)})})}a_(e,n){const s=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{s(()=>this.listener.ho())}),this.stream.Io(()=>{s(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(r=>{s(()=>this.u_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AR extends X_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=L1(this.serializer,e),s=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?ln(o.readTime):ae.min()}(e);return this.listener.l_(n,s)}h_(e){const n={};n.database=zl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ul(c)?{documents:$1(i,c)}:{query:B1(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=j_(i,o.resumeToken);const l=jl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=ha(i,o.snapshotVersion.toTimestamp());const l=jl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const s=q1(this.serializer,e);s&&(n.labels=s),this.r_(n)}P_(e){const n={};n.database=zl(this.serializer),n.removeTarget=e,this.r_(n)}}class bR extends X_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=U1(e.writeResults,e.commitTime),s=ln(e.commitTime);return this.listener.d_(s,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=zl(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>F1(this.serializer,s))};this.r_(n)}}/**
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
 */class RR extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.V_=!1}m_(){if(this.V_)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,s,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,ql(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(A.UNKNOWN,i.toString())})}Mo(e,n,s,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,ql(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(A.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class SR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(bn(n),this.y_=!1):K("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class CR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{s.enqueueAndForget(async()=>{Bs(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ce(c);l.M_.add(4),await io(l),l.N_.set("Unknown"),l.M_.delete(4),await cc(l)}(this))})}),this.N_=new SR(s,r)}}async function cc(t){if(Bs(t))for(const e of t.x_)await e(!0)}async function io(t){for(const e of t.x_)await e(!1)}function Z_(t,e){const n=ce(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),gh(n)?ph(n):Br(n).Zo()&&mh(n,e))}function fh(t,e){const n=ce(t),s=Br(n);n.F_.delete(e),s.Zo()&&ey(n,e),n.F_.size===0&&(s.Zo()?s.t_():Bs(n)&&n.N_.set("Unknown"))}function mh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Br(t).h_(e)}function ey(t,e){t.L_.xe(e),Br(t).P_(e)}function ph(t){t.L_=new k1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Br(t).start(),t.N_.w_()}function gh(t){return Bs(t)&&!Br(t).Yo()&&t.F_.size>0}function Bs(t){return ce(t).M_.size===0}function ty(t){t.L_=void 0}async function PR(t){t.N_.set("Online")}async function kR(t){t.F_.forEach((e,n)=>{mh(t,e)})}async function DR(t,e){ty(t),gh(t)?(t.N_.D_(e),ph(t)):t.N_.set("Unknown")}async function NR(t,e,n){if(t.N_.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.F_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.F_.delete(a),r.L_.removeTarget(a))}(t,e)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await da(t,s)}else if(e instanceof jo?t.L_.Ke(e):e instanceof $_?t.L_.He(e):t.L_.We(e),!n.isEqual(ae.min()))try{const s=await Y_(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(_t.EMPTY_BYTE_STRING,u.snapshotVersion)),ey(i,c);const h=new Bn(u.target,c,l,u.sequenceNumber);mh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await da(t,s)}}async function da(t,e,n){if(!no(e))throw e;t.M_.add(1),await io(t),t.N_.set("Offline"),n||(n=()=>Y_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await cc(t)})}function ny(t,e){return e().catch(n=>da(t,n,e))}async function lc(t){const e=ce(t),n=Zn(e);let s=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;OR(e);)try{const r=await gR(e.localStore,s);if(r===null){e.v_.length===0&&n.t_();break}s=r.batchId,VR(e,r)}catch(r){await da(e,r)}sy(e)&&ry(e)}function OR(t){return Bs(t)&&t.v_.length<10}function VR(t,e){t.v_.push(e);const n=Zn(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function sy(t){return Bs(t)&&!Zn(t).Yo()&&t.v_.length>0}function ry(t){Zn(t).start()}async function MR(t){Zn(t).R_()}async function xR(t){const e=Zn(t);for(const n of t.v_)e.E_(n.mutations)}async function LR(t,e,n){const s=t.v_.shift(),r=ah.from(s,e,n);await ny(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await lc(t)}async function FR(t,e){e&&Zn(t).T_&&await async function(s,r){if(function(o){return S1(o)&&o!==A.ABORTED}(r.code)){const i=s.v_.shift();Zn(s).e_(),await ny(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await lc(s)}}(t,e),sy(t)&&ry(t)}async function Rf(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=Bs(n);n.M_.add(3),await io(n),s&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await cc(n)}async function UR(t,e){const n=ce(t);e?(n.M_.delete(2),await cc(n)):e||(n.M_.add(2),await io(n),n.N_.set("Unknown"))}function Br(t){return t.B_||(t.B_=function(n,s,r){const i=ce(n);return i.m_(),new AR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:PR.bind(null,t),Io:kR.bind(null,t),Eo:DR.bind(null,t),l_:NR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),gh(t)?ph(t):t.N_.set("Unknown")):(await t.B_.stop(),ty(t))})),t.B_}function Zn(t){return t.k_||(t.k_=function(n,s,r){const i=ce(n);return i.m_(),new bR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:MR.bind(null,t),Eo:FR.bind(null,t),A_:xR.bind(null,t),d_:LR.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await lc(t)):(await t.k_.stop(),t.v_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class _h{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new _h(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yh(t,e){if(bn("AsyncQueue",`${e}: ${t}`),no(t))return new H(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class mr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||X.comparator(n.key,s.key):(n,s)=>X.comparator(n.key,s.key),this.keyedMap=ei(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Sf{constructor(){this.q_=new Fe(X.comparator)}track(e){const n=e.doc.key,s=this.q_.get(n);s?e.type!==0&&s.type===3?this.q_=this.q_.insert(n,e):e.type===3&&s.type!==1?this.q_=this.q_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.q_=this.q_.remove(n):e.type===1&&s.type===2?this.q_=this.q_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):re():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Pr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Pr(e,n,mr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class $R{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class BR{constructor(){this.queries=new $r(e=>b_(e),ec),this.onlineState="Unknown",this.z_=new Set}}async function iy(t,e){const n=ce(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.W_()&&e.G_()&&(s=2):(i=new $R,s=e.G_()?0:1);try{switch(s){case 0:i.K_=await n.onListen(r,!0);break;case 1:i.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=yh(o,`Initialization of query '${er(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&vh(n)}async function oy(t,e){const n=ce(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?r=e.G_()?0:1:!i.W_()&&e.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function jR(t,e){const n=ce(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(r)&&(s=!0);o.K_=r}}s&&vh(n)}function qR(t,e,n){const s=ce(t),r=s.queries.get(e);if(r)for(const i of r.U_)i.onError(n);s.queries.delete(e)}function vh(t){t.z_.forEach(e=>{e.next()})}var Kl,Cf;(Cf=Kl||(Kl={})).J_="default",Cf.Cache="cache";class ay{constructor(e,n,s){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=s||{}}H_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Pr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const s=n!=="Offline";return(!this.options.ra||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Kl.Cache}}/**
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
 */class cy{constructor(e){this.key=e}}class ly{constructor(e){this.key=e}}class HR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=me(),this.mutatedKeys=me(),this.Ia=R_(e),this.Ta=new mr(this.Ia)}get Ea(){return this.la}da(e,n){const s=n?n.Aa:new Sf,r=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),m=tc(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;f&&m?f.data.isEqual(m.data)?w!==_&&(s.track({type:3,doc:m}),v=!0):this.Ra(f,m)||(s.track({type:2,doc:m}),v=!0,(c&&this.Ia(m,c)>0||l&&this.Ia(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),v=!0):f&&!m&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(m?(o=o.add(m),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ta:o,Aa:s,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(m,w){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return _(m)-_(w)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(s),r=r!=null&&r;const a=n&&!r?this.ma():[],c=this.Pa.size===0&&this.current&&!r?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new Pr(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Sf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=me(),this.Ta.forEach(s=>{this.ga(s.key)&&(this.Pa=this.Pa.add(s.key))});const n=[];return e.forEach(s=>{this.Pa.has(s)||n.push(new ly(s))}),this.Pa.forEach(s=>{e.has(s)||n.push(new cy(s))}),n}pa(e){this.la=e.ls,this.Pa=me();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Pr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class zR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class WR{constructor(e){this.key=e,this.wa=!1}}class KR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new $r(a=>b_(a),ec),this.Da=new Map,this.Ca=new Set,this.va=new Fe(X.comparator),this.Fa=new Map,this.Ma=new uh,this.xa={},this.Oa=new Map,this.Na=Cr.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function GR(t,e,n=!0){const s=py(t);let r;const i=s.ba.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.ya()):r=await uy(s,e,n,!0),r}async function QR(t,e){const n=py(t);await uy(n,e,!0,!1)}async function uy(t,e,n,s){const r=await _R(t.localStore,cn(e)),i=r.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return s&&(a=await YR(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&Z_(t.remoteStore,r),a}async function YR(t,e,n,s,r){t.Ba=(h,f,m)=>async function(_,v,I,F){let G=v.view.da(I);G.Zi&&(G=await Tf(_.localStore,v.query,!1).then(({documents:oe})=>v.view.da(oe,G)));const j=F&&F.targetChanges.get(v.targetId),z=F&&F.targetMismatches.get(v.targetId)!=null,x=v.view.applyChanges(G,_.isPrimaryClient,j,z);return kf(_,v.targetId,x.fa),x.snapshot}(t,h,f,m);const i=await Tf(t.localStore,e,!0),o=new HR(e,i.ls),a=o.da(i.documents),c=ro.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);kf(t,n,l.fa);const u=new zR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function JR(t,e,n){const s=ce(t),r=s.ba.get(e),i=s.Da.get(r.targetId);if(i.length>1)return s.Da.set(r.targetId,i.filter(o=>!ec(o,e))),void s.ba.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Wl(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&fh(s.remoteStore,r.targetId),Gl(s,r.targetId)}).catch(to)):(Gl(s,r.targetId),await Wl(s.localStore,r.targetId,!0))}async function XR(t,e){const n=ce(t),s=n.ba.get(e),r=n.Da.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),fh(n.remoteStore,s.targetId))}async function ZR(t,e,n){const s=oS(t);try{const r=await function(o,a){const c=ce(o),l=Oe.now(),u=a.reduce((m,w)=>m.add(w.key),me());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=Rn(),_=me();return c.ss.getEntries(m,u).next(v=>{w=v,w.forEach((I,F)=>{F.isValidDocument()||(_=_.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,w)).next(v=>{h=v;const I=[];for(const F of a){const G=I1(F,h.get(F.key).overlayedDocument);G!=null&&I.push(new as(F.key,G,__(G.value.mapValue),Rt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,I,a)}).next(v=>{f=v;const I=v.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(m,v.batchId,I)})}).then(()=>({batchId:f.batchId,changes:C_(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new Fe(be)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(s,r.batchId,n),await oo(s,r.changes),await lc(s.remoteStore)}catch(r){const i=yh(r,"Failed to persist write");n.reject(i)}}async function hy(t,e){const n=ce(t);try{const s=await mR(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Fa.get(i);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.wa=!0:r.modifiedDocuments.size>0?Pe(o.wa):r.removedDocuments.size>0&&(Pe(o.wa),o.wa=!1))}),await oo(n,s,e)}catch(s){await to(s)}}function Pf(t,e,n){const s=ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=ce(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(l=!0)}),l&&vh(c)}(s.eventManager,e),r.length&&s.Sa.l_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function eS(t,e,n){const s=ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Fa.get(e),i=r&&r.key;if(i){let o=new Fe(X.comparator);o=o.insert(i,ht.newNoDocument(i,ae.min()));const a=me().add(i),c=new oc(ae.min(),new Map,new Fe(be),o,a);await hy(s,c),s.va=s.va.remove(i),s.Fa.delete(e),wh(s)}else await Wl(s.localStore,e,!1).then(()=>Gl(s,e,n)).catch(to)}async function tS(t,e){const n=ce(t),s=e.batch.batchId;try{const r=await fR(n.localStore,e);fy(n,s,null),dy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await oo(n,r)}catch(r){await to(r)}}async function nS(t,e,n){const s=ce(t);try{const r=await function(o,a){const c=ce(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Pe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,e);fy(s,e,n),dy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await oo(s,r)}catch(r){await to(r)}}function dy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function fy(t,e,n){const s=ce(t);let r=s.xa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.xa[s.currentUser.toKey()]=r}}function Gl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Da.get(e))t.ba.delete(s),n&&t.Sa.ka(s,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(s=>{t.Ma.containsKey(s)||my(t,s)})}function my(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(fh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),wh(t))}function kf(t,e,n){for(const s of n)s instanceof cy?(t.Ma.addReference(s.key,e),sS(t,s)):s instanceof ly?(K("SyncEngine","Document no longer in limbo: "+s.key),t.Ma.removeReference(s.key,e),t.Ma.containsKey(s.key)||my(t,s.key)):re()}function sS(t,e){const n=e.key,s=n.path.canonicalString();t.va.get(n)||t.Ca.has(s)||(K("SyncEngine","New document in limbo: "+n),t.Ca.add(s),wh(t))}function wh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new X(Ve.fromString(e)),s=t.Na.next();t.Fa.set(s,new WR(n)),t.va=t.va.insert(n,s),Z_(t.remoteStore,new Bn(cn(Za(n.path)),s,"TargetPurposeLimboResolution",th.oe))}}async function oo(t,e,n){const s=ce(t),r=[],i=[],o=[];s.ba.isEmpty()||(s.ba.forEach((a,c)=>{o.push(s.Ba(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=dh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Sa.l_(r),await async function(c,l){const u=ce(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,f=>C.forEach(f.ki,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>C.forEach(f.qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!no(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=u.ts.get(f),w=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(w);u.ts=u.ts.insert(f,_)}}}(s.localStore,i))}async function rS(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const s=await Q_(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new H(A.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oo(n,s._s)}}function iS(t,e){const n=ce(t),s=n.Fa.get(e);if(s&&s.wa)return me().add(s.key);{let r=me();const i=n.Da.get(e);if(!i)return r;for(const o of i){const a=n.ba.get(o);r=r.unionWith(a.view.Ea)}return r}}function py(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eS.bind(null,e),e.Sa.l_=jR.bind(null,e.eventManager),e.Sa.ka=qR.bind(null,e.eventManager),e}function oS(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nS.bind(null,e),e}class Df{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ac(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dR(this.persistence,new uR,e.initialUser,this.serializer)}createPersistence(e){return new aR(hh.jr,this.serializer)}createSharedClientState(e){return new vR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rS.bind(null,this.syncEngine),await UR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BR}()}createDatastore(e){const n=ac(e.databaseInfo.databaseId),s=function(i){return new TR(i)}(e.databaseInfo);return function(i,o,a,c){return new RR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new CR(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Pf(this.syncEngine,n,0),function(){return bf.D()?new bf:new wR}())}createSyncEngine(e,n){return function(r,i,o,a,c,l,u){const h=new KR(r,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(s){const r=ce(s);K("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await io(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class gy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ut.UNAUTHENTICATED,this.clientId=m_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=yh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Q_(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uS(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Rf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Rf(e.remoteStore,r)),t._onlineComponents=e}function lS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function uS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lS(n))throw n;Ir("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new Df)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Qc(t,new Df);return t._offlineComponents}async function _y(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Nf(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Nf(t,new aS))),t._onlineComponents}function hS(t){return _y(t).then(e=>e.syncEngine)}async function Ql(t){const e=await _y(t),n=e.eventManager;return n.onListen=GR.bind(null,e.syncEngine),n.onUnlisten=JR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XR.bind(null,e.syncEngine),n}function dS(t,e,n={}){const s=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new gy({next:f=>{o.enqueueAndForget(()=>oy(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new H(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new H(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new ay(Za(a.path),u,{includeMetadataChanges:!0,ra:!0});return iy(i,h)}(await Ql(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function yy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Of=new Map;/**
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
 */function vy(t,e,n){if(!n)throw new H(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fS(t,e,n,s){if(e===!0&&s===!0)throw new H(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!X.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(X.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uc(t);throw new H(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class xf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new H(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Ob;switch(s.type){case"firstParty":return new Lb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new H(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Of.get(n);s&&(K("ComponentProvider","Removing Datastore"),Of.delete(n),s.terminate())}(this),Promise.resolve()}}function mS(t,e,n,s={}){var r;const i=(t=Lt(t,hc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ut.MOCK_USER;else{a=Bw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new H(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(l)}t._authCredentials=new Vb(new f_(a,c))}}/**
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
 */class js{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class gt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Qn extends js{constructor(e,n,s){super(e,n,Za(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new X(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function Xt(t,e,...n){if(t=$e(t),vy("collection","path",e),t instanceof hc){const s=Ve.fromString(e,...n);return Mf(s),new Qn(t,null,s)}{if(!(t instanceof gt||t instanceof Qn))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ve.fromString(e,...n));return Mf(s),new Qn(t.firestore,null,s)}}function Le(t,e,...n){if(t=$e(t),arguments.length===1&&(e=m_.newId()),vy("doc","path",e),t instanceof hc){const s=Ve.fromString(e,...n);return Vf(s),new gt(t,null,new X(s))}{if(!(t instanceof gt||t instanceof Qn))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ve.fromString(e,...n));return Vf(s),new gt(t.firestore,t instanceof Qn?t.converter:null,new X(s))}}/**
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
 */class pS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new J_(this,"async_queue_retry"),this.hu=()=>{const n=Gc();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Gn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!no(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw bn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.uu=!1,s))));return this.iu=n,n}enqueueAfterDelay(e,n,s){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const r=_h.createAndSchedule(this,e,n,s,i=>this.Eu(i));return this._u.push(r),r}Pu(){this.au&&re()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Lf(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class es extends hc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new pS}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wy(this),this._firestoreClient.terminate()}}function gS(t,e){const n=typeof t=="object"?t:kp(),s=typeof t=="string"?t:"(default)",r=wu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Uw("firestore");i&&mS(r,...i)}return r}function dc(t){return t._firestoreClient||wy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wy(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,l,u){return new Yb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new cS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kr(_t.fromBase64String(e))}catch(n){throw new H(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kr(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ao{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qs{constructor(e){this._methodName=e}}/**
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
 */class Eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const _S=/^__.*__$/;class yS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class Ey{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Iy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class fc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.wu(e),r}Su(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return fa(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Iy(this.fu)&&_S.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class vS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ac(e)}Fu(e,n,s,r=!1){return new fc({fu:e,methodName:n,vu:s,path:st.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mc(t){const e=t._freezeSettings(),n=ac(t._databaseId);return new vS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ty(t,e,n,s,r,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,r);Rh("Data must be an object, but it was:",o,s);const a=Sy(s,o);let c,l;if(i.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Yl(e,h,n);if(!o.contains(f))throw new H(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Py(u,f)||u.push(f)}c=new Nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new yS(new At(a),c,l)}class pc extends qs{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function Ay(t,e,n){return new fc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ih extends qs{_toFieldTransform(e){return new sc(e.path,new xi)}isEqual(e){return e instanceof Ih}}class Th extends qs{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Ay(this,e,!0),s=this.Mu.map(i=>Hs(i,n)),r=new Rr(s);return new sc(e.path,r)}isEqual(e){return e instanceof Th&&yr(this.Mu,e.Mu)}}class Ah extends qs{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Ay(this,e,!0),s=this.Mu.map(i=>Hs(i,n)),r=new Sr(s);return new sc(e.path,r)}isEqual(e){return e instanceof Ah&&yr(this.Mu,e.Mu)}}class bh extends qs{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Li(e.serializer,N_(e.serializer,this.xu));return new sc(e.path,n)}isEqual(e){return e instanceof bh&&this.xu===e.xu}}function by(t,e,n,s){const r=t.Fu(1,e,n);Rh("Data must be an object, but it was:",r,s);const i=[],o=At.empty();$s(s,(c,l)=>{const u=Sh(e,c,n);l=$e(l);const h=r.Su(u);if(l instanceof pc)i.push(u);else{const f=Hs(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Nt(i);return new Ey(o,a,r.fieldTransforms)}function Ry(t,e,n,s,r,i){const o=t.Fu(1,e,n),a=[Yl(e,s,n)],c=[r];if(i.length%2!=0)throw new H(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Yl(e,i[f])),c.push(i[f+1]);const l=[],u=At.empty();for(let f=a.length-1;f>=0;--f)if(!Py(l,a[f])){const m=a[f];let w=c[f];w=$e(w);const _=o.Su(m);if(w instanceof pc)l.push(m);else{const v=Hs(w,_);v!=null&&(l.push(m),u.set(m,v))}}const h=new Nt(l);return new Ey(u,h,o.fieldTransforms)}function wS(t,e,n,s=!1){return Hs(n,t.Fu(s?4:3,e))}function Hs(t,e){if(Cy(t=$e(t)))return Rh("Unsupported field value:",e,t),Sy(t,e);if(t instanceof qs)return function(s,r){if(!Iy(r.fu))throw r.Du(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Hs(a,r.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=$e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return N_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Oe.fromDate(s);return{timestampValue:ha(r.serializer,i)}}if(s instanceof Oe){const i=new Oe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ha(r.serializer,i)}}if(s instanceof Eh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof kr)return{bytesValue:j_(r.serializer,s._byteString)};if(s instanceof gt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lh(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.Du(`Unsupported field value: ${uc(s)}`)}(t,e)}function Sy(t,e){const n={};return p_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(s,r)=>{const i=Hs(r,e.pu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Eh||t instanceof kr||t instanceof gt||t instanceof qs)}function Rh(t,e,n){if(!Cy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=uc(n);throw s==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+s)}}function Yl(t,e,n){if((e=$e(e))instanceof ao)return e._internalPath;if(typeof e=="string")return Sh(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const ES=new RegExp("[~\\*/\\[\\]]");function Sh(t,e,n){if(e.search(ES)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ao(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new H(A.INVALID_ARGUMENT,a+t+c)}function Py(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ky{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IS extends ky{data(){return super.data()}}function gc(t,e){return typeof e=="string"?Sh(t,e):e instanceof ao?e._internalPath:e._delegate._internalPath}/**
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
 */function TS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ch{}class Dy extends Ch{}function fs(t,e,...n){let s=[];e instanceof Ch&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof Ph).length,a=i.filter(c=>c instanceof _c).length;if(o>1||o>0&&a>0)throw new H(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class _c extends Dy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new _c(e,n,s)}_apply(e){const n=this._parse(e);return Ny(e._query,n),new js(e.firestore,e.converter,$l(e._query,n))}_parse(e){const n=mc(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new H(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Uf(h,u);const m=[];for(const w of h)m.push(Ff(c,i,w));f={arrayValue:{values:m}}}else f=Ff(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Uf(h,u),f=wS(a,o,h,u==="in"||u==="not-in");return We.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function dn(t,e,n){const s=e,r=gc("where",t);return _c._create(r,s,n)}class Ph extends Ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ph(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)Ny(o,c),o=$l(o,c)}(e._query,n),new js(e.firestore,e.converter,$l(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kh extends Dy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kh(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new H(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new H(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mi(i,o)}(e._query,this._field,this._direction);return new js(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Ur(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function AS(t,e="asc"){const n=e,s=gc("orderBy",t);return kh._create(s,n)}function Ff(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new H(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!A_(e)&&n.indexOf("/")!==-1)throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ve.fromString(n));if(!X.isDocumentKey(s))throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return of(t,new X(s))}if(n instanceof gt)return of(t,n._key);throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(n)}.`)}function Uf(t,e){if(!Array.isArray(t)||t.length===0)throw new H(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class bS{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return $s(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Eh(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=sh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ve.fromString(e);Pe(G_(s));const r=new Oi(s.get(1),s.get(3)),i=new X(s.popFirst(5));return r.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Oy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vy extends ky{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class qo extends Vy{data(e={}){return super.data(e)}}class RS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ni(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new qo(this._firestore,this._userDataWriter,s.key,s,new ni(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new qo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ni(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new qo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ni(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:SS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function Jl(t){t=Lt(t,gt);const e=Lt(t.firestore,es);return dS(dc(e),t._key).then(n=>xy(e,t,n))}class My extends bS{constructor(e){super(),this.firestore=e}convertBytes(e){return new kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function Vt(t,e,n){t=Lt(t,gt);const s=Lt(t.firestore,es),r=Oy(t.converter,e,n);return yc(s,[Ty(mc(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Rt.none())])}function rr(t,e,n,...s){t=Lt(t,gt);const r=Lt(t.firestore,es),i=mc(r);let o;return o=typeof(e=$e(e))=="string"||e instanceof ao?Ry(i,"updateDoc",t._key,e,n,s):by(i,"updateDoc",t._key,e),yc(r,[o.toMutation(t._key,Rt.exists(!0))])}function Yc(t){return yc(Lt(t.firestore,es),[new ic(t._key,Rt.none())])}function Yt(t,...e){var n,s,r;t=$e(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Lf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Lf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof gt)l=Lt(t.firestore,es),u=Za(t._key.path),c={next:h=>{e[o]&&e[o](xy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Lt(t,js);l=Lt(h.firestore,es),u=h._query;const f=new My(l);c={next:m=>{e[o]&&e[o](new RS(l,f,h,m))},error:e[o+1],complete:e[o+2]},TS(t._query)}return function(f,m,w,_){const v=new gy(_),I=new ay(m,v,w);return f.asyncQueue.enqueueAndForget(async()=>iy(await Ql(f),I)),()=>{v.$a(),f.asyncQueue.enqueueAndForget(async()=>oy(await Ql(f),I))}}(dc(l),u,a,c)}function yc(t,e){return function(s,r){const i=new Gn;return s.asyncQueue.enqueueAndForget(async()=>ZR(await hS(s),r,i)),i.promise}(dc(t),e)}function xy(t,e,n){const s=n.docs.get(e._key),r=new My(t);return new Vy(t,r,e._key,s,new ni(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class CS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=mc(e)}set(e,n,s){this._verifyNotCommitted();const r=Jc(e,this._firestore),i=Oy(r.converter,n,s),o=Ty(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,Rt.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=Jc(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof ao?Ry(this._dataReader,"WriteBatch.update",i._key,n,s,r):by(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Rt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Jc(e,this._firestore);return this._mutations=this._mutations.concat(new ic(n._key,Rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Jc(t,e){if((t=$e(t)).firestore!==e)throw new H(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function si(){return new Ih("serverTimestamp")}function Rs(...t){return new Th("arrayUnion",t)}function Ly(...t){return new Ah("arrayRemove",t)}function Xc(t){return new bh("increment",t)}/**
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
 */function Zc(t){return dc(t=Lt(t,es)),new CS(t,e=>yc(t,e))}(function(e,n=!0){(function(r){Fr=r})(Vr),vr(new Cs("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new es(new Mb(s.getProvider("auth-internal")),new Ub(s.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(l.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Kn(tf,"4.6.1",e),Kn(tf,"4.6.1","esm2017")})();var PS="firebase",kS="10.11.1";/**
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
 */Kn(PS,kS,"app");const DS={apiKey:"AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",authDomain:"vuechat-c27a8.firebaseapp.com",projectId:"vuechat-c27a8",storageBucket:"vuechat-c27a8.appspot.com",messagingSenderId:"713413651968",appId:"1:713413651968:web:93c490d79df8c319cf2e5"},Fy=Pp(DS),rt=TA(Fy),we=gS(Fy);var NS={BASE_URL:"/friendzy/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ma=Q(typeof localStorage<"u"&&localStorage.getItem("friendzyLang")||"es"),OS=typeof localStorage<"u"&&localStorage.getItem("friendzyTheme")||"naranja",pa=Q(OS),el={es:{cargando:"Cargando...",selecciona:"Selecciona un usuario o una conversación",para_chatear:"para empezar a chatear en privado",conecta_amigos:"Conecta con amigos",conecta_inteligente:"de forma inteligente",auth_intro:"Chat en tiempo real, conoce nuevas personas y crea conexiones significativas en una plataforma segura.",feat1:"Mensajería en tiempo real",feat2:"Conoce personas de todo el mundo",feat3:"Seguridad y privacidad garantizada",stat_users:"Usuarios",stat_msgs:"Mensajes",stat_uptime:"Uptime",mobile_tagline:"Conecta con amigos de todo el mundo",bienvenido:"Bienvenido de vuelta",crea_cuenta:"Crea tu cuenta",login_sub:"Ingresa a tu cuenta para continuar",reg_sub:"Regístrate gratis y empieza a chatear",google_in:"Iniciar sesión con Google",or_email:"o con tu email",nombre:"Nombre",tu_nombre:"Tu nombre",email:"Email",contrasena:"Contraseña",iniciar_login:"Iniciar sesión",crear:"Crear cuenta",no_cuenta:"¿No tienes cuenta?",reg_gratis:"Regístrate gratis",ya_cuenta:"¿Ya tienes cuenta?",inicia_sesion:"Inicia sesión",badge_seguro:"Seguro",badge_tiempo:"Tiempo real",badge_global:"Global",err_completa:"Completa todos los campos",err_email_pass:"Email o contraseña incorrectos",err_email_used:"Este email ya está registrado",err_invalid_email:"Introduce un email válido",err_weak:"La contraseña debe tener al menos 6 caracteres",err_too_many:"Demasiados intentos. Intenta más tarde",busqueda_ph:"Buscar chats o personas...",personas_reg:"Personas registradas",no_personas:"No hay personas registradas",solicitudes:"Solicitudes",quiere_chatear:"Quiere chatear contigo",amigos:"Amigos",en_linea:"En línea",desconectado:"Desconectado",conversaciones:"Conversaciones",sin_conv:"Sin conversaciones todavía",sin_conv_sub:"Busca personas y envía una solicitud para chatear",mi_perfil:"Mi perfil",configuracion:"Configuración",cerrar_sesion:"Cerrar sesión",chat:"Chat",pendiente:"Pendiente",aceptar:"Aceptar",solicitar:"Solicitar",favoritos:"Favoritos",sin_favoritos:"Sin chats favoritos",sin_mensajes:"Sin mensajes todavía",ahora:"ahora",grabar:"Grabando · toca para terminar",nota_larga:"La nota es demasiado larga para enviarse",enviar_ph:"Escribe un mensaje...",no_mensajes:"No hay mensajes todavía",envia_primero:"¡Envía el primero!",hoy:"Hoy",ag_favoritos:"Agregar a favoritos",quitar_fav:"Quitar de favoritos",fotos_compartidas:"Fotos compartidas",sin_fotos:"No hay fotos compartidas todavía",idioma:"Idioma",tema:"Tema",naranja:"Naranja",azul:"Azul",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Tu alias en el chat",cumpleanos:"Fecha de nacimiento",guardar:"Guardar",guardado:"Guardado",cambiar_foto:"Cambiar foto",foto_nombre:"Foto de perfil",mensaje_nuevo:"Nuevo mensaje",nueva_solicitud:"Nueva solicitud de chat",quieres_chatear:"quiere chatear contigo",max_3_fotos:"Máximo 3 fotos por envío",elige_fotos:"Elige tus fotos",enviar_fotos:"Enviar fotos"},en:{cargando:"Loading...",selecciona:"Select a user or conversation",para_chatear:"to start chatting privately",conecta_amigos:"Connect with friends",conecta_inteligente:"the smart way",auth_intro:"Real-time chat, meet new people and create meaningful connections on a secure platform.",feat1:"Real-time messaging",feat2:"Meet people from all over the world",feat3:"Security and privacy guaranteed",stat_users:"Users",stat_msgs:"Messages",stat_uptime:"Uptime",mobile_tagline:"Connect with friends from everywhere",bienvenido:"Welcome back",crea_cuenta:"Create your account",login_sub:"Sign in to continue",reg_sub:"Sign up for free and start chatting",google_in:"Continue with Google",or_email:"or with your email",nombre:"Name",tu_nombre:"Your name",email:"Email",contrasena:"Password",iniciar_login:"Sign in",crear:"Create account",no_cuenta:"Do not have an account?",reg_gratis:"Sign up free",ya_cuenta:"Already have an account?",inicia_sesion:"Sign in",badge_seguro:"Secure",badge_tiempo:"Real time",badge_global:"Global",err_completa:"Complete all fields",err_email_pass:"Incorrect email or password",err_email_used:"This email is already registered",err_invalid_email:"Enter a valid email",err_weak:"Password must be at least 6 characters",err_too_many:"Too many attempts. Try again later",busqueda_ph:"Search chats or people...",personas_reg:"Registered people",no_personas:"No registered people",solicitudes:"Requests",quiere_chatear:"Wants to chat with you",amigos:"Friends",en_linea:"Online",desconectado:"Offline",conversaciones:"Conversations",sin_conv:"No conversations yet",sin_conv_sub:"Search people and send a request to chat",mi_perfil:"My profile",configuracion:"Settings",cerrar_sesion:"Sign out",chat:"Chat",pendiente:"Pending",aceptar:"Accept",solicitar:"Request",favoritos:"Favorites",sin_favoritos:"No favorite chats",sin_mensajes:"No messages yet",ahora:"now",grabar:"Recording · tap to finish",nota_larga:"The voice note is too long to send",enviar_ph:"Write a message...",no_mensajes:"No messages yet",envia_primero:"Send the first one!",hoy:"Today",ag_favoritos:"Add to favorites",quitar_fav:"Remove from favorites",fotos_compartidas:"Shared photos",sin_fotos:"No shared photos yet",idioma:"Language",tema:"Theme",naranja:"Orange",azul:"Blue",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Your chat alias",cumpleanos:"Birthday",guardar:"Save",guardado:"Saved",cambiar_foto:"Change photo",foto_nombre:"Profile photo",mensaje_nuevo:"New message",nueva_solicitud:"New chat request",quieres_chatear:"wants to chat with you",max_3_fotos:"Maximum 3 photos per send",elige_fotos:"Choose your photos",enviar_fotos:"Send photos"}};function VS(t){ma.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyLang",t)}function Uy(t=pa.value){const e=document.documentElement;t==="azul"?e.setAttribute("data-theme","azul"):e.removeAttribute("data-theme");const n=document.getElementById("app-favicon");if(n&&typeof import.meta<"u"&&NS){const s="/friendzy/";n.href=s+(t==="azul"?"favicon-azul.svg":"favicon.svg")}}function MS(t){pa.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyTheme",t),Uy(t)}function D(t){return(el[ma.value]||el.es)[t]??el.es[t]??t}const hn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},$y=t=>(Ls("data-v-3dbce67b"),t=t(),Fs(),t),xS=["width","height"],LS=$y(()=>d("path",{d:"M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z",fill:"white","fill-opacity":"0.95"},null,-1)),FS=$y(()=>d("path",{d:"M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z",style:{fill:"var(--primary)"}},null,-1)),US=[LS,FS],$S={__name:"Logo",props:{className:{type:String,default:""},size:{type:String,default:"md"},showText:{type:Boolean,default:!1},variant:{type:String,default:"default"},center:{type:Boolean,default:!1}},setup(t){const e=t,s={sm:{badge:"logo-sm",text:"16px",icon:16},md:{badge:"logo-md",text:"20px",icon:20},lg:{badge:"logo-lg",text:"24px",icon:24},xl:{badge:"logo-xl",text:"30px",icon:28}}[e.size],r=e.variant==="white";return(i,o)=>(M(),$("div",{class:ve(["logo",[{center:t.center},t.className]])},[d("div",{class:ve(["logo-badge",[r?"logo-badge-white":"gradient-orange",k(s).badge]])},[(M(),$("svg",{width:k(s).icon,height:k(s).icon,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},US,8,xS))],2),t.showText?(M(),$("span",{key:0,class:ve(["logo-text",[r?"text-white":"text-dark",k(s).text]])}," Friendzy ",2)):Se("",!0)],2))}},Xl=hn($S,[["__scopeId","data-v-3dbce67b"]]),BS={},jS={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},qS=d("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"},null,-1),HS=d("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"},null,-1),zS=d("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"},null,-1),WS=d("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"},null,-1),KS=[qS,HS,zS,WS];function GS(t,e){return M(),$("svg",jS,KS)}const QS=hn(BS,[["render",GS]]),Dn=t=>(Ls("data-v-a171bb12"),t=t(),Fs(),t),YS={class:"auth"},JS={class:"auth-left"},XS=Dn(()=>d("div",{class:"auth-grid-white"},null,-1)),ZS={class:"auth-left-inner"},eC={class:"auth-left-mid"},tC=Dn(()=>d("br",null,null,-1)),nC=Dn(()=>d("span",{class:"auth-checkmark"},[d("i",{class:"mdi mdi-check"})],-1)),sC={class:"auth-stats"},rC={class:"auth-right"},iC=Dn(()=>d("div",{class:"auth-right-grid"},null,-1)),oC={class:"auth-form-wrap"},aC={class:"auth-mobile-logo"},cC={class:"auth-card"},lC={class:"auth-card-head"},uC={class:"divider"},hC={class:"fields"},dC={key:0,class:"field"},fC=["placeholder"],mC={class:"field"},pC={class:"field"},gC={key:0,class:"auth-error"},_C=Dn(()=>d("i",{class:"mdi mdi-alert-circle-outline"},null,-1)),yC=["disabled"],vC=Dn(()=>d("i",{class:"mdi mdi-arrow-right"},null,-1)),wC={class:"switch-link"},EC={class:"auth-badges"},IC={class:"auth-badge"},TC=Dn(()=>d("i",{class:"mdi mdi-shield-lock-outline"},null,-1)),AC={class:"auth-badge"},bC=Dn(()=>d("i",{class:"mdi mdi-message-text-clock-outline"},null,-1)),RC={class:"auth-badge"},SC=Dn(()=>d("i",{class:"mdi mdi-web"},null,-1)),CC={__name:"AuthScreen",setup(t){const e=Q("login"),n=Q(""),s=Q(""),r=Q(""),i=Q(!1),o=Q(""),a=["feat1","feat2","feat3"],c=[{value:"10K+",label:"stat_users"},{value:"50K+",label:"stat_msgs"},{value:"99%",label:"stat_uptime"}],l=m=>{e.value=m,o.value=""},u=async()=>{try{const m=new mn;await NT(rt,m)}catch(m){console.log(m)}},h=m=>{switch(m){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return D("err_email_pass");case"auth/email-already-in-use":return D("err_email_used");case"auth/invalid-email":return D("err_invalid_email");case"auth/weak-password":return D("err_weak");case"auth/too-many-requests":return D("err_too_many");default:return`Error: ${m}`}},f=async()=>{if(o.value="",!n.value.trim()||!s.value){o.value=D("err_completa");return}if(s.value.length<6){o.value=D("err_weak");return}i.value=!0;try{if(e.value==="login")await oT(rt,n.value.trim(),s.value);else{const{user:m}=await iT(rt,n.value.trim(),s.value);r.value.trim()&&await ku(m,{displayName:r.value.trim().split(/\s+/)[0]})}}catch(m){console.log(m),o.value=h(m.code)}finally{i.value=!1}};return(m,w)=>(M(),$("main",YS,[d("section",JS,[XS,d("div",ZS,[de(Xl,{size:"lg",showText:"",variant:"white"}),d("div",eC,[d("h1",null,[nn(N(k(D)("conecta_amigos"))+" ",1),tC,d("span",null,N(k(D)("conecta_inteligente")),1)]),d("p",null,N(k(D)("auth_intro")),1),d("ul",null,[(M(),$(De,null,en(a,(_,v)=>d("li",{key:_,class:"auth-feature",style:Dr({animationDelay:.3+v*.1+"s"})},[nC,d("span",null,N(k(D)(_)),1)],4)),64))])]),d("div",sC,[(M(),$(De,null,en(c,_=>d("div",{key:_.label},[d("strong",null,N(_.value),1),d("span",null,N(k(D)(_.label)),1)])),64))])])]),d("section",rC,[iC,d("div",oC,[d("div",aC,[de(Xl,{size:"xl",showText:"",center:""}),d("p",null,N(k(D)("mobile_tagline")),1)]),d("div",cC,[d("div",lC,[d("h2",null,N(e.value==="login"?k(D)("bienvenido"):k(D)("crea_cuenta")),1),d("p",null,N(e.value==="login"?k(D)("login_sub"):k(D)("reg_sub")),1)]),d("button",{class:"google-btn",type:"button",onClick:u},[de(QS),d("span",null,N(k(D)("google_in")),1)]),d("div",uC,[d("span",null,N(k(D)("or_email")),1)]),d("div",hC,[e.value==="register"?(M(),$("div",dC,[d("label",null,N(k(D)("nombre")),1),Ts(d("input",{"onUpdate:modelValue":w[0]||(w[0]=_=>r.value=_),type:"text",placeholder:k(D)("tu_nombre")},null,8,fC),[[As,r.value]])])):Se("",!0),d("div",mC,[d("label",null,N(k(D)("email")),1),Ts(d("input",{"onUpdate:modelValue":w[1]||(w[1]=_=>n.value=_),type:"email",placeholder:"ejemplo@gmail.com"},null,512),[[As,n.value]])]),d("div",pC,[d("label",null,N(k(D)("contrasena")),1),Ts(d("input",{"onUpdate:modelValue":w[2]||(w[2]=_=>s.value=_),type:"password",placeholder:"••••••••",onKeyup:wp(f,["enter"])},null,544),[[As,s.value]])])]),o.value?(M(),$("div",gC,[_C,d("span",null,N(o.value),1)])):Se("",!0),d("button",{class:"submit-btn btn-primary",type:"button",disabled:i.value,onClick:f},[d("span",null,N(i.value?k(D)("cargando"):e.value==="login"?k(D)("iniciar_login"):k(D)("crear")),1),vC],8,yC),d("p",wC,[e.value==="login"?(M(),$(De,{key:0},[nn(N(k(D)("no_cuenta"))+" ",1),d("a",{href:"#",onClick:w[3]||(w[3]=Je(_=>l("register"),["prevent"]))},N(k(D)("reg_gratis")),1)],64)):(M(),$(De,{key:1},[nn(N(k(D)("ya_cuenta"))+" ",1),d("a",{href:"#",onClick:w[4]||(w[4]=Je(_=>l("login"),["prevent"]))},N(k(D)("inicia_sesion")),1)],64))])]),d("div",EC,[d("div",IC,[TC,d("span",null,N(k(D)("badge_seguro")),1)]),d("div",AC,[bC,d("span",null,N(k(D)("badge_tiempo")),1)]),d("div",RC,[SC,d("span",null,N(k(D)("badge_global")),1)])])])])]))}},PC=hn(CC,[["__scopeId","data-v-a171bb12"]]),kC=(t,e)=>[t,e].sort().join("_"),jn=(t,e)=>t.split("_").find(n=>n!==e);let pn=null,$f=!1;function By(){const t=window.AudioContext||window.webkitAudioContext;!t||typeof window>"u"||(pn||(pn=new t),pn.state==="suspended"&&pn.resume().catch(()=>{}))}const DC=()=>{$f||($f=!0,By())};typeof window<"u"&&["pointerdown","keydown","touchstart"].forEach(t=>window.addEventListener(t,DC,{once:!0}));function Bf(){if(By(),!pn)return;const t=pn.currentTime;[660,880].forEach((e,n)=>{const s=pn.createOscillator(),r=pn.createGain(),i=t+n*.12;s.type="sine",s.frequency.value=e,r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.18,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+.35),s.connect(r),r.connect(pn.destination),s.start(i),s.stop(i+.4)})}function NC(){typeof Notification<"u"&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}function jf(t,e){if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(t,{body:e,icon:"/friendzy/favicon.svg"})}catch{}}const OC={key:0,class:"pa-img"},VC=["src","alt"],MC={__name:"PremiumAvatar",props:{src:{type:String,default:""},name:{type:String,required:!0},size:{type:String,default:"md"},online:{type:Boolean,default:void 0},showRing:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,s={sm:{avatar:"pa-size-sm",text:"pa-text-xs",status:"pa-status-sm"},md:{avatar:"pa-size-md",text:"pa-text-sm",status:"pa-status-md"},lg:{avatar:"pa-size-lg",text:"pa-text-base",status:"pa-status-lg"},xl:{avatar:"pa-size-xl",text:"pa-text-xl",status:"pa-status-xl"}}[e.size],r=["linear-gradient(135deg, #f97316, #f59e0b)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #ea580c, #ef4444)","linear-gradient(135deg, #f43f5e, #f97316)","#111827","linear-gradient(135deg, #fb923c, #eab308)"],o=r[Math.abs((c=>(c||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0))(e.name))%r.length],a=(e.name||"?").split(" ").map(c=>c[0]).slice(0,2).join("").toUpperCase();return(c,l)=>(M(),$("div",{class:ve(["pa-outer",t.className])},[d("div",{class:ve(["pa-ring",t.showRing?"avatar-ring":""])},[d("div",{class:ve(["pa-avatar",[k(s).avatar,"pa-"+t.size]])},[t.src?(M(),$("div",OC,[d("img",{src:t.src,alt:t.name,draggable:"false",onContextmenu:l[0]||(l[0]=Je(()=>{},["prevent"])),onDragstart:l[1]||(l[1]=Je(()=>{},["prevent"]))},null,40,VC)])):(M(),$("div",{key:1,class:"pa-initials",style:Dr({background:k(o)})},[d("span",{class:ve(k(s).text)},N(k(a)),3)],4))],2)],2),t.online!==void 0?(M(),$("span",{key:0,class:ve(["pa-status",[k(s).status,t.online?"pa-online":"pa-offline"]])},null,2)):Se("",!0)],2))}},fn=hn(MC,[["__scopeId","data-v-fc1b44dd"]]),ct=t=>(Ls("data-v-3aee9741"),t=t(),Fs(),t),xC={class:"sidebar"},LC={class:"sb-header"},FC=ct(()=>d("i",{class:"mdi mdi-close"},null,-1)),UC=[FC],$C={class:"sb-profile-wrap"},BC={class:"sb-profile-info"},jC={class:"sb-profile-name"},qC={class:"sb-profile-email"},HC=ct(()=>d("i",{class:"mdi mdi-chevron-down sb-profile-caret"},null,-1)),zC={key:0,class:"sb-menu"},WC=ct(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),KC=ct(()=>d("i",{class:"mdi mdi-cog-outline"},null,-1)),GC=ct(()=>d("div",{class:"sb-menu-sep"},null,-1)),QC=ct(()=>d("i",{class:"mdi mdi-logout"},null,-1)),YC={class:"sb-search-row"},JC={class:"sb-search"},XC=ct(()=>d("i",{class:"mdi mdi-magnify sb-search-icon"},null,-1)),ZC=["placeholder"],eP={key:0,class:"sb-newchat"},tP={class:"sb-label"},nP=ct(()=>d("i",{class:"mdi mdi-account-multiple-outline"},null,-1)),sP=["onClick"],rP={class:"sb-user-body"},iP={class:"sb-user-name"},oP=["onClick"],aP=["onClick"],cP=ct(()=>d("i",{class:"mdi mdi-message-outline"},null,-1)),lP={key:0,class:"sb-empty-note"},uP={class:"sb-section"},hP={class:"sb-label"},dP=ct(()=>d("i",{class:"mdi mdi-bell-outline"},null,-1)),fP={class:"sb-count sb-count-alert"},mP={class:"sb-list sb-friends"},pP={class:"conv-body"},gP={class:"conv-top"},_P={class:"conv-name"},yP={class:"conv-bottom"},vP={class:"conv-preview"},wP=["onClick"],EP=ct(()=>d("i",{class:"mdi mdi-check"},null,-1)),IP=[EP],TP=["onClick"],AP=ct(()=>d("i",{class:"mdi mdi-close"},null,-1)),bP=[AP],RP={class:"sb-section"},SP={class:"sb-label"},CP=ct(()=>d("i",{class:"mdi mdi-heart"},null,-1)),PP={class:"sb-count"},kP={class:"sb-list sb-friends"},DP=["onClick"],NP={class:"conv-body"},OP={class:"conv-top"},VP={class:"conv-name"},MP={class:"conv-bottom"},xP={class:"conv-preview"},LP=["onClick"],FP=ct(()=>d("i",{class:"mdi mdi-minus"},null,-1)),UP=[FP],$P={class:"sb-section"},BP={class:"sb-label"},jP=ct(()=>d("i",{class:"mdi mdi-star"},null,-1)),qP={class:"sb-count"},HP={class:"sb-list"},zP=["onClick"],WP={class:"conv-body"},KP={class:"conv-top"},GP={class:"conv-name"},QP=ct(()=>d("i",{class:"mdi mdi-star conv-star"},null,-1)),YP={class:"conv-bottom"},JP={class:"conv-preview"},XP={class:"sb-section"},ZP={class:"sb-label"},ek=ct(()=>d("i",{class:"mdi mdi-message-text-outline"},null,-1)),tk={class:"sb-count"},nk={class:"sb-list"},sk=["onClick"],rk={class:"conv-body"},ik={class:"conv-top"},ok={class:"conv-name"},ak={class:"conv-right"},ck={key:0,class:"mdi mdi-star conv-star"},lk={key:1,class:"conv-badge"},uk={key:2,class:"conv-time"},hk={class:"conv-bottom"},dk={class:"conv-preview"},fk={key:0,class:"sb-empty"},mk={class:"sb-empty-sub"},pk=45e3,gk={__name:"Conversations",props:{activeId:{type:String,default:""},isMobile:{type:Boolean,default:!1},profile:{type:Object,default:()=>({})},favorites:{type:Array,default:()=>[]}},emits:["open","close","openProfile","openSettings"],setup(t,{emit:e}){const n=e,s=t,r=rt.currentUser,i=Q([]),o=Q([]),a=Q([]),c=Q([]),l=Q([]),u=Q([]),h=Q([]),f=Q([]),m=Q(""),w=Q(!1),_=Q(!1),v=Te(()=>s.profile.displayName||(r==null?void 0:r.displayName)||(r==null?void 0:r.email)||"Usuario"),I=(r==null?void 0:r.email)||"",F=Te(()=>s.profile.photoURL||(r==null?void 0:r.photoURL)||"");let G=null,j=null,z=null,x=null,oe=null,pe=null,je=null,Ue=null,ee=!1,Z=!1;const ne={};tp(()=>{G=Yt(fs(Xt(we,"users")),y=>{i.value=y.docs.map(b=>b.data()).filter(b=>b.uid!==r.uid)},y=>console.error("denied:users",y.code)),j=Yt(fs(Xt(we,"conversations"),dn("participants","array-contains",r.uid)),y=>{var W,ge;const b=[],T={};if(y.forEach(Re=>{const qe=Re.data();T[Re.id]=qe,b.push({id:Re.id,...qe})}),b.sort((Re,qe)=>{var kt,Kt,Gt,Qe;return(((Kt=(kt=qe.lastAt)==null?void 0:kt.toMillis)==null?void 0:Kt.call(kt))??0)-(((Qe=(Gt=Re.lastAt)==null?void 0:Gt.toMillis)==null?void 0:Qe.call(Gt))??0)}),o.value=b,!ee){ee=!0,y.forEach(Re=>{var qe,kt;ne[Re.id]=((kt=(qe=Re.data())==null?void 0:qe.unread)==null?void 0:kt[r.uid])||0});return}y.forEach(Re=>{var Gt;const qe=Re.data(),kt=((Gt=qe.unread)==null?void 0:Gt[r.uid])||0,Kt=ne[Re.id]||0;if(ne[Re.id]=kt,kt>Kt&&Re.id!==s.activeId){const Qe=jn(Re.id,r.uid),It=i.value.find(iv=>iv.uid===Qe),ho=typeof qe.lastMessage=="string"?qe.lastMessage:"📷 Foto";jf(`${D("mensaje_nuevo")} de ${(It==null?void 0:It.displayName)||""}`,ho),Bf()}}),s.activeId&&(((ge=(W=T[s.activeId])==null?void 0:W.unread)==null?void 0:ge[r.uid])||0)>0&&Ge(s.activeId)},y=>console.error("denied:convs",y.code)),z=Yt(Le(we,"users",r.uid),y=>{var b;a.value=((b=y.data())==null?void 0:b.friends)||[]},y=>console.error("denied:me",y.code)),x=Yt(fs(Xt(we,"requests"),dn("to","==",r.uid),dn("status","==","pending")),y=>{if(c.value=y.docs.map(b=>({id:b.id,...b.data()})),!Z){Z=!0;return}y.docChanges().forEach(b=>{if(b.type==="added"){const T=b.doc.data(),W=i.value.find(ge=>ge.uid===T.from);jf(D("nueva_solicitud"),`${(W==null?void 0:W.displayName)||"Alguien"} ${D("quieres_chatear")}`),Bf()}})},y=>console.error("denied:incoming",y.code)),oe=Yt(fs(Xt(we,"requests"),dn("from","==",r.uid),dn("status","==","pending")),y=>{l.value=y.docs.map(b=>({id:b.id,...b.data()}))},y=>console.error("denied:sent",y.code)),pe=Yt(fs(Xt(we,"requests"),dn("from","==",r.uid),dn("status","==","accepted")),y=>{h.value=y.docs.map(b=>({id:b.id,...b.data()})),he()},y=>console.error("denied:accOut",y.code)),je=Yt(fs(Xt(we,"requests"),dn("to","==",r.uid),dn("status","==","accepted")),y=>{u.value=y.docs.map(b=>({id:b.id,...b.data()})),he()},y=>console.error("denied:accIn",y.code)),Ue=y=>{y.target.closest(".sb-profile-wrap")||(w.value=!1),y.target.closest(".sb-search-row")||(_.value=!1)},document.addEventListener("click",Ue),setTimeout(()=>NC(),1500)}),Or(()=>{G==null||G(),j==null||j(),z==null||z(),x==null||x(),oe==null||oe(),pe==null||pe(),je==null||je(),Ue&&document.removeEventListener("click",Ue)});const fe=()=>{w.value=!1,n("openProfile")},Me=()=>{w.value=!1,n("openSettings")},Ie=y=>s.favorites.includes(y),ue=Te(()=>o.value.filter(y=>Ie(y.id))),he=()=>{f.value=[...u.value,...h.value]},Ge=y=>{rr(Le(we,"conversations",y),{[`unread.${r.uid}`]:0}).catch(()=>{})},yt=y=>i.value.find(b=>b.uid===y),Ct=Te(()=>c.value),Pt=Te(()=>{const y=new Set(a.value);return f.value.forEach(b=>{y.add(b.from===r.uid?b.to:b.from)}),y}),Ks=Te(()=>i.value.filter(y=>Pt.value.has(y.uid))),Ec=Te(()=>new Set(l.value.map(y=>y.to))),Nn=y=>Pt.value.has(y.uid)?"friend":Ec.value.has(y.uid)?"pending":Ct.value.some(b=>b.from===y.uid)?"incoming":"none",Ut=y=>D(y==="pending"?"pendiente":y==="incoming"?"aceptar":"solicitar"),Gs=y=>y==="pending"?"mdi-clock-outline":y==="incoming"?"mdi-check":"mdi-account-plus-outline",qr=y=>{Nn(y)==="friend"&&Y(y)},lo=y=>{const b=Nn(y);if(b==="incoming"){const T=Ct.value.find(W=>W.from===y.uid);T&&Hr(T)}else b==="none"&&cs(y)},cs=async y=>{const b=`${r.uid}_${y.uid}`;await Vt(Le(we,"requests",b),{from:r.uid,to:y.uid,status:"pending",createdAt:si()})},Hr=async y=>{const b=Le(we,"requests",y.id),T=Le(we,"users",r.uid);await Vt(b,{status:"accepted"},{merge:!0}),await Vt(T,{friends:Rs(y.from)},{merge:!0});const W=i.value.find(ge=>ge.uid===y.from);await Y({uid:y.from,displayName:(W==null?void 0:W.displayName)||y.from,photoURL:(W==null?void 0:W.photoURL)||""})},uo=async y=>{await Yc(Le(we,"requests",y.id))},p=async y=>{const b=Le(we,"users",r.uid);await Vt(b,{friends:Ly(y.uid)},{merge:!0});const T=Le(we,"requests",`${y.uid}_${r.uid}`),W=await Jl(T);W.exists()&&W.data().from===y.uid&&W.data().to===r.uid&&await Yc(T);const ge=Le(we,"requests",`${r.uid}_${y.uid}`);(await Jl(ge)).exists()&&await Vt(ge,{status:"declined"},{merge:!0})},g=y=>{const b=R(y);return b?b.displayName:jn(y.id,r.uid)},E=y=>{var b,T;return!!(y&&y.online&&y.lastSeen&&Date.now()-(((T=(b=y.lastSeen).toMillis)==null?void 0:T.call(b))||0)<pk)},R=y=>i.value.find(b=>b.uid===jn(y.id,r.uid)),S=y=>E(R(y)),V=y=>y.lastMessage?y.lastMessage:D("sin_mensajes"),U=Te(()=>m.value.trim().toLowerCase()),O=Te(()=>U.value?o.value.filter(y=>g(y).toLowerCase().includes(U.value)):o.value),L=Te(()=>{let y=i.value;return U.value&&(y=y.filter(b=>(b.displayName||"").toLowerCase().includes(U.value))),y}),P=y=>{var W;const b=((W=y==null?void 0:y.toMillis)==null?void 0:W.call(y))??0;if(!b)return"";const T=Math.floor((Date.now()-b)/1e3);return T<60?D("ahora"):T<3600?`${Math.floor(T/60)}m`:T<86400?`${Math.floor(T/3600)}h`:T<604800?`${Math.floor(T/86400)}d`:new Date(b).toLocaleDateString("es-ES",{day:"numeric",month:"short"})},q=y=>{Ge(y.id);const b=i.value.find(T=>T.uid===jn(y.id,r.uid));n("open",{id:y.id,other:{name:g(y),photo:(b==null?void 0:b.photoURL)||""}})},Y=async y=>{const b=kC(r.uid,y.uid);_.value=!1;const T=Le(we,"conversations",b);try{await Vt(T,{participants:Rs(r.uid,y.uid)},{merge:!0})}catch(W){console.error("startWith:conv",W.code,W.message);try{await Yc(T),await Vt(T,{participants:Rs(r.uid,y.uid)},{merge:!0})}catch(ge){console.error("startWith:repair",ge.code,ge.message)}}Ge(b),n("open",{id:b,other:{name:y.displayName,photo:y.photoURL||""}})},J=async()=>{try{await rr(Le(we,"users",r.uid),{online:!1}).catch(()=>{}),await hT(rt)}catch(y){console.log(y)}};return(y,b)=>(M(),$("div",xC,[d("div",LC,[de(Xl,{size:"md",showText:""}),t.isMobile?(M(),$("button",{key:0,class:"icon-btn",onClick:b[0]||(b[0]=T=>y.$emit("close"))},UC)):Se("",!0)]),d("div",$C,[d("button",{class:"sb-profile",onClick:b[1]||(b[1]=T=>w.value=!w.value)},[de(fn,{src:F.value,name:v.value,size:"md",online:""},null,8,["src","name"]),d("div",BC,[d("span",jC,N(v.value),1),d("span",qC,N(k(I)),1)]),HC]),w.value?(M(),$("div",zC,[d("button",{class:"sb-menu-item",onClick:fe},[WC,d("span",null,N(k(D)("mi_perfil")),1)]),d("button",{class:"sb-menu-item",onClick:Me},[KC,d("span",null,N(k(D)("configuracion")),1)]),GC,d("button",{class:"sb-menu-item sb-menu-danger",onClick:J},[QC,d("span",null,N(k(D)("cerrar_sesion")),1)])])):Se("",!0)]),d("div",YC,[d("div",JC,[XC,Ts(d("input",{"onUpdate:modelValue":b[2]||(b[2]=T=>m.value=T),type:"text",placeholder:k(D)("busqueda_ph"),class:"sb-search-input"},null,8,ZC),[[As,m.value]])]),d("button",{class:"icon-btn btn-primary sb-plus",onClick:b[3]||(b[3]=T=>_.value=!_.value)},[d("i",{class:ve(["mdi",_.value?"mdi-close":"mdi-plus"])},null,2)]),_.value?(M(),$("div",eP,[d("div",tP,[nP,d("span",null,N(k(D)("personas_reg")),1)]),(M(!0),$(De,null,en(L.value,T=>(M(),$("button",{key:T.uid,class:"sb-user-item",onClick:W=>qr(T)},[de(fn,{src:T.photoURL||"",name:T.displayName,size:"md",online:E(T)},null,8,["src","name","online"]),d("div",rP,[d("span",iP,N(T.displayName),1)]),Nn(T)!=="friend"?(M(),$("span",{key:0,class:ve(["btn-status","btn-"+Nn(T)]),onClick:Je(W=>lo(T),["stop"])},[d("i",{class:ve(["mdi",Gs(Nn(T))])},null,2),d("span",null,N(Ut(Nn(T))),1)],10,oP)):(M(),$("span",{key:1,class:"btn-status btn-friend",onClick:Je(W=>Y(T),["stop"])},[cP,d("span",null,N(k(D)("chat")),1)],8,aP))],8,sP))),128)),L.value.length===0?(M(),$("p",lP,N(k(D)("no_personas")),1)):Se("",!0)])):Se("",!0)]),Ct.value.length?(M(),$(De,{key:0},[d("div",uP,[d("div",hP,[dP,d("span",null,N(k(D)("solicitudes")),1)]),d("span",fP,N(Ct.value.length),1)]),d("div",mP,[(M(!0),$(De,null,en(Ct.value,T=>{var W,ge,Re;return M(),$("div",{key:T.id,class:"conv-item friend-item"},[de(fn,{src:((W=yt(T.from))==null?void 0:W.photoURL)||"",name:((ge=yt(T.from))==null?void 0:ge.displayName)||T.from,size:"lg",online:!!yt(T.from)&&E(yt(T.from))},null,8,["src","name","online"]),d("div",pP,[d("div",gP,[d("span",_P,N(((Re=yt(T.from))==null?void 0:Re.displayName)||T.from),1)]),d("div",yP,[d("span",vP,N(k(D)("quiere_chatear")),1)])]),d("button",{class:"req-btn req-ok",title:"Aceptar",onClick:qe=>Hr(T)},IP,8,wP),d("button",{class:"req-btn req-no",title:"Rechazar",onClick:qe=>uo(T)},bP,8,TP)])}),128))])],64)):Se("",!0),Ks.value.length?(M(),$(De,{key:1},[d("div",RP,[d("div",SP,[CP,d("span",null,N(k(D)("amigos")),1)]),d("span",PP,N(Ks.value.length),1)]),d("div",kP,[(M(!0),$(De,null,en(Ks.value,T=>(M(),$("div",{key:T.uid,class:"conv-item friend-item",onClick:W=>Y(T)},[de(fn,{src:T.photoURL||"",name:T.displayName,size:"lg",online:E(T)},null,8,["src","name","online"]),d("div",NP,[d("div",OP,[d("span",VP,N(T.displayName),1)]),d("div",MP,[d("span",xP,N(E(T)?k(D)("en_linea"):k(D)("desconectado")),1)])]),d("button",{class:"friend-remove",onClick:Je(W=>p(T),["stop"])},UP,8,LP)],8,DP))),128))])],64)):Se("",!0),ue.value.length?(M(),$(De,{key:2},[d("div",$P,[d("div",BP,[jP,d("span",null,N(k(D)("favoritos")),1)]),d("span",qP,N(ue.value.length),1)]),d("div",HP,[(M(!0),$(De,null,en(ue.value,T=>(M(),$("button",{key:T.id,class:ve(["conv-item",{active:T.id===t.activeId}]),onClick:W=>q(T)},[de(fn,{name:g(T),size:"lg",online:S(T)},null,8,["name","online"]),d("div",WP,[d("div",KP,[d("span",GP,N(g(T)),1),QP]),d("div",YP,[d("span",JP,N(V(T)),1)])])],10,zP))),128))])],64)):Se("",!0),d("div",XP,[d("div",ZP,[ek,d("span",null,N(k(D)("conversaciones")),1)]),d("span",tk,N(O.value.length),1)]),d("div",nk,[(M(!0),$(De,null,en(O.value,T=>{var W;return M(),$("button",{key:T.id,class:ve(["conv-item",{active:T.id===t.activeId}]),onClick:ge=>q(T)},[de(fn,{name:g(T),size:"lg",online:""},null,8,["name"]),d("div",rk,[d("div",ik,[d("span",ok,N(g(T)),1),d("span",ak,[Ie(T.id)?(M(),$("i",ck)):Se("",!0),(((W=T.unread)==null?void 0:W[k(r).uid])||0)>0?(M(),$("span",lk,N(T.unread[k(r).uid]),1)):(M(),$("span",uk,N(P(T.lastAt)),1))])]),d("div",hk,[d("span",dk,N(V(T)),1)])])],10,sk)}),128)),O.value.length===0?(M(),$("div",fk,[d("p",null,N(k(D)("sin_conv")),1),d("p",mk,N(k(D)("sin_conv_sub")),1)])):Se("",!0)])]))}},qf=hn(gk,[["__scopeId","data-v-3aee9741"]]),_k={class:"mb-max"},yk={key:0,class:"mb-audio"},vk={class:"mb-audio-head"},wk={class:"mb-audio-track"},Ek={class:"mb-audio-time"},Ik=["src"],Tk={key:1,class:"mb-text"},Ak={key:2,class:"mb-image"},bk=["src"],Rk={key:0,class:"mdi mdi-check-all mb-check"},Sk={__name:"MessageBubble",props:{message:{type:Object,required:!0},isOwn:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},senderName:{type:String,default:""}},setup(t){const e=t,n=Q(null),s=Q(!1),r=Q(0),i=Te(()=>{var h;const u=((h=e.message.time)==null?void 0:h.seconds)??0;return u?new Date(u*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),o=Te(()=>{const u=e.message.duration||0;return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}),a=()=>{const u=n.value;u&&(s.value?u.pause():u.play().catch(()=>{}),s.value=!s.value)},c=()=>{const u=n.value;!u||!u.duration||(r.value=u.currentTime/u.duration*100)},l=()=>{s.value=!1,r.value=0};return(u,h)=>(M(),$("div",{class:ve(["mb-row",t.isOwn?"mb-own":"mb-other"])},[d("div",{class:ve(["mb-avatar",t.showAvatar?"":"mb-avatar-hidden"])},[de(fn,{src:t.avatar||"",name:t.senderName,size:"sm"},null,8,["src","name"])],2),d("div",_k,[d("div",{class:ve(["mb-bubble",t.isOwn?"mb-bubble-own":"mb-bubble-other"])},[t.message.audio?(M(),$("div",yk,[d("div",vk,[d("button",{class:"mb-audio-play",onClick:a},[d("i",{class:ve(["mdi",s.value?"mdi-pause":"mdi-play"])},null,2)]),d("div",wk,[d("div",{class:"mb-audio-fill",style:Dr({width:r.value+"%"})},null,4)]),d("span",Ek,N(o.value),1)]),d("audio",{ref_key:"audioRef",ref:n,src:t.message.audio,preload:"metadata",onTimeupdate:c,onEnded:l},null,40,Ik)])):t.message.text?(M(),$("p",Tk,N(t.message.text),1)):t.message.image?(M(),$("div",Ak,[d("img",{src:t.message.image,alt:"Compartida",draggable:"false",onContextmenu:h[0]||(h[0]=Je(()=>{},["prevent"])),onDragstart:h[1]||(h[1]=Je(()=>{},["prevent"]))},null,40,bk)])):Se("",!0),d("div",{class:ve(["mb-meta",t.isOwn?"mb-meta-own":""])},[d("span",null,N(i.value),1),t.isOwn?(M(),$("i",Rk)):Se("",!0)],2)],2)])],2))}},Ck=hn(Sk,[["__scopeId","data-v-24c0b8db"]]),jr=t=>(Ls("data-v-bef45fbe"),t=t(),Fs(),t),Pk={class:"chat-input-wrap"},kk={key:1,class:"ci-attach"},Dk=jr(()=>d("i",{class:"mdi mdi-image-outline"},null,-1)),Nk=[Dk],Ok={class:"ci-picker"},Vk={class:"ci-picker-head"},Mk=jr(()=>d("i",{class:"mdi mdi-close"},null,-1)),xk=[Mk],Lk={class:"ci-picker-hint"},Fk={class:"ci-picker-grid"},Uk=["onClick"],$k=["src"],Bk={key:0,class:"ci-picker-check"},jk=jr(()=>d("i",{class:"mdi mdi-check"},null,-1)),qk=[jk],Hk={key:1,class:"ci-picker-num"},zk={class:"ci-picker-foot"},Wk=["disabled"],Kk={class:"ci-row"},Gk={class:"ci-input-box"},Qk=["placeholder","onKeydown"],Yk=jr(()=>d("button",{class:"ci-round-btn ci-smile"},[d("i",{class:"mdi mdi-emoticon-outline"})],-1)),Jk=jr(()=>d("i",{class:"mdi mdi-send"},null,-1)),Xk=[Jk],Zk={key:3,class:"ci-recording"},eD=jr(()=>d("span",{class:"ci-rec-dot"},null,-1)),tD={class:"ci-rec-text"},nD={class:"ci-rec-time"},sD={key:4,class:"ci-recording"},rD={class:"ci-rec-text"},iD=3e4,Ys=3,oD={__name:"FormAdd",props:{conversationId:{type:String,required:!0}},setup(t){const e=t,n=Q(""),s=Q(!1),r=Q(!1),i=Q(0),o=Q(""),a=Q([]),c=Q(!1),l=Q(null),u=Q(null),h=Te(()=>a.value.filter(ee=>ee.selected).length),f=Te(()=>{const ee=Math.floor(i.value/1e3);return`${Math.floor(ee/60)}:${String(ee%60).padStart(2,"0")}`}),m={media:null,recorder:null,chunks:[],timer:null,startedAt:0,type:"audio/webm"},w=()=>{const ee=l.value;ee&&(ee.style.height="auto",ee.style.height=`${Math.min(ee.scrollHeight,128)}px`)},_=async()=>{const ee=n.value.trim();if(!(!ee||!e.conversationId))try{const Z=rt.currentUser,ne=jn(e.conversationId,Z.uid),fe=Le(we,"conversations",e.conversationId);await Vt(fe,{participants:Rs(Z.uid,ne)},{merge:!0});const Me=Zc(we),Ie=Le(Xt(we,"conversations",e.conversationId,"messages"));Me.set(Ie,{text:ee,time:Oe.fromDate(new Date),uid:Z.uid,displayName:Z.displayName}),Me.update(fe,{lastMessage:ee,lastAt:Oe.fromDate(new Date),[`unread.${ne}`]:Xc(1)}),await Me.commit(),n.value="",Ta(()=>w())}catch(Z){console.log(Z)}},v=()=>{var ee;s.value=!1,(ee=u.value)==null||ee.click()},I=async ee=>{const Z=[...ee.target.files||[]];if(ee.target.value="",!(!Z.length||!e.conversationId)){if(Z.length>Ys){a.value=Z.map((ne,fe)=>({id:fe,file:ne,preview:URL.createObjectURL(ne),selected:fe<Ys})),c.value=!0;return}for(const ne of Z)await z(ne)}},F=ee=>{const Z=a.value[ee];Z&&(Z.selected?Z.selected=!1:h.value<Ys&&(Z.selected=!0))},G=()=>{a.value.forEach(ee=>URL.revokeObjectURL(ee.preview)),a.value=[],c.value=!1},j=async()=>{const ee=a.value.filter(Z=>Z.selected);G();for(const Z of ee)await z(Z.file)},z=async ee=>{try{const Z=await x(ee);if(!Z)return;const ne=rt.currentUser,fe=jn(e.conversationId,ne.uid),Me=Le(we,"conversations",e.conversationId);await Vt(Me,{participants:Rs(ne.uid,fe)},{merge:!0});const Ie=Zc(we),ue=Le(Xt(we,"conversations",e.conversationId,"messages"));Ie.set(ue,{image:Z,text:"",time:Oe.fromDate(new Date),uid:ne.uid,displayName:ne.displayName}),Ie.update(Me,{lastMessage:"📷 Foto",lastAt:Oe.fromDate(new Date),[`unread.${fe}`]:Xc(1)}),await Ie.commit()}catch(Z){console.log(Z)}},x=ee=>new Promise(Z=>{const ne=new FileReader;ne.onload=()=>{const fe=new Image;fe.onload=()=>{const Ie=Math.min(1,1e3/Math.max(fe.naturalWidth,fe.naturalHeight)),ue=Math.max(1,Math.round(fe.naturalWidth*Ie)),he=Math.max(1,Math.round(fe.naturalHeight*Ie)),Ge=document.createElement("canvas");Ge.width=ue,Ge.height=he;const yt=Ge.getContext("2d");if(!yt)return Z(ne.result);yt.fillStyle="#fff",yt.fillRect(0,0,ue,he),yt.drawImage(fe,0,0,ue,he),Z(Ge.toDataURL("image/jpeg",.75))},fe.onerror=()=>Z(null),fe.src=ne.result},ne.onerror=()=>Z(null),ne.readAsDataURL(ee)}),oe=()=>{if(r.value){je();return}pe()},pe=async()=>{if(e.conversationId)try{const ee=await navigator.mediaDevices.getUserMedia({audio:!0}),Z=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"",ne=new MediaRecorder(ee,{...Z?{mimeType:Z}:{},audioBitsPerSecond:24e3}),fe=[];ne.ondataavailable=Me=>{Me.data&&Me.data.size>0&&fe.push(Me.data)},ne.onstop=()=>{var ue;(ue=m.media)==null||ue.getTracks().forEach(he=>he.stop());const Me=Math.max(1,Math.round((Date.now()-m.startedAt)/1e3)),Ie=new Blob(fe,{type:m.type});Ue(Ie,Me)},m.media=ee,m.recorder=ne,m.chunks=fe,m.startedAt=Date.now(),ne.start(),m.type=ne.mimeType||Z||"audio/webm",r.value=!0,i.value=0,m.timer=setInterval(()=>{i.value=Date.now()-m.startedAt,i.value>=iD&&je()},250)}catch(ee){console.log(ee),r.value=!1}},je=()=>{clearInterval(m.timer),m.timer=null,r.value=!1;try{m.recorder&&m.recorder.state!=="inactive"&&m.recorder.stop()}catch(ee){console.log(ee)}},Ue=(ee,Z)=>{if(!e.conversationId)return;const ne=new FileReader;ne.onload=async()=>{try{const fe=ne.result;if(typeof fe!="string"||fe.length>9e5){o.value=D("nota_larga"),setTimeout(()=>{o.value=""},4e3);return}const Me=rt.currentUser,Ie=jn(e.conversationId,Me.uid),ue=Le(we,"conversations",e.conversationId);await Vt(ue,{participants:Rs(Me.uid,Ie)},{merge:!0});const he=Zc(we),Ge=Le(Xt(we,"conversations",e.conversationId,"messages"));he.set(Ge,{audio:fe,duration:Z,text:"",time:Oe.fromDate(new Date),uid:Me.uid,displayName:Me.displayName}),he.update(ue,{lastMessage:"🎤 Nota de voz",lastAt:Oe.fromDate(new Date),[`unread.${Ie}`]:Xc(1)}),await he.commit()}catch(fe){console.log(fe)}},ne.readAsDataURL(ee)};return Or(()=>{var ee;clearInterval(m.timer),(ee=m.media)==null||ee.getTracks().forEach(Z=>Z.stop())}),(ee,Z)=>(M(),$("div",Pk,[s.value?(M(),$("div",{key:0,class:"ci-backdrop",onClick:Z[0]||(Z[0]=ne=>s.value=!1)})):Se("",!0),s.value?(M(),$("div",kk,[d("button",{class:"ci-attach-btn",onClick:v},Nk)])):Se("",!0),d("input",{ref_key:"fileInput",ref:u,type:"file",accept:"image/*",multiple:"",class:"hidden",onChange:I},null,544),c.value?(M(),$("div",{key:2,class:"ci-modal",onClick:Je(G,["self"])},[d("div",Ok,[d("div",Vk,[d("h4",null,N(k(D)("elige_fotos")),1),d("span",{class:ve(["ci-picker-count",{full:h.value===Ys}])},N(h.value)+"/"+N(Ys),3),d("button",{class:"icon-btn",onClick:G},xk)]),d("p",Lk,N(k(D)("max_3_fotos")),1),d("div",Fk,[(M(!0),$(De,null,en(a.value,(ne,fe)=>(M(),$("div",{key:ne.id,class:ve(["ci-picker-item",{selected:ne.selected,dimmed:!ne.selected&&h.value===Ys}]),onClick:Me=>F(fe)},[d("img",{src:ne.preview,alt:"Foto"},null,8,$k),ne.selected?(M(),$("span",Bk,qk)):(M(),$("span",Hk,N(fe+1),1))],10,Uk))),128))]),d("div",zk,[d("button",{class:"btn-primary ci-picker-send",disabled:h.value===0,onClick:j},N(k(D)("enviar_fotos")),9,Wk)])])])):Se("",!0),d("div",Kk,[d("button",{class:ve(["ci-round-btn",{active:s.value}]),onClick:Z[1]||(Z[1]=ne=>s.value=!s.value)},[d("i",{class:ve(["mdi",s.value?"mdi-close":"mdi-paperclip"])},null,2)],2),d("div",Gk,[Ts(d("textarea",{ref_key:"taRef",ref:l,"onUpdate:modelValue":Z[2]||(Z[2]=ne=>n.value=ne),rows:"1",placeholder:k(D)("enviar_ph"),class:"ci-textarea",onInput:w,onKeydown:wp(Je(_,["exact","prevent"]),["enter"])},null,40,Qk),[[As,n.value]]),Yk]),n.value.trim()?(M(),$("button",{key:0,class:"ci-round-btn btn-primary ci-send",onClick:_},Xk)):(M(),$("button",{key:1,class:ve(["ci-round-btn ci-send btn-primary",{recording:r.value}]),onClick:oe},[d("i",{class:ve(["mdi",r.value?"mdi-stop":"mdi-microphone"])},null,2)],2))]),r.value?(M(),$("div",Zk,[eD,d("span",tD,N(k(D)("grabar")),1),d("span",nD,N(f.value),1)])):Se("",!0),o.value?(M(),$("div",sD,[d("span",rD,N(o.value),1)])):Se("",!0)]))}},aD=hn(oD,[["__scopeId","data-v-bef45fbe"]]),zs=t=>(Ls("data-v-c0645669"),t=t(),Fs(),t),cD={class:"chat-main-wrap"},lD=zs(()=>d("div",{class:"cm-grid"},null,-1)),uD={class:"cm-header"},hD=zs(()=>d("i",{class:"mdi mdi-menu"},null,-1)),dD=[hD],fD={class:"cm-header-info"},mD={class:"cm-header-actions"},pD={class:"cm-menu"},gD=zs(()=>d("i",{class:"mdi mdi-dots-horizontal"},null,-1)),_D=[gD],yD={key:0,class:"cm-pop"},vD=zs(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),wD=zs(()=>d("i",{class:"mdi mdi-image-multiple-outline"},null,-1)),ED={key:0,class:"cm-empty"},ID=zs(()=>d("i",{class:"mdi mdi-chat-processing-outline cm-empty-icon"},null,-1)),TD={class:"cm-empty-sub"},AD={class:"cm-date-pill"},bD={class:"cm-photos"},RD={class:"cm-photos-head"},SD=zs(()=>d("i",{class:"mdi mdi-close"},null,-1)),CD=[SD],PD={key:0,class:"cm-photos-grid"},kD=["src","onClick"],DD={key:1,class:"cm-photos-empty"},ND=["src"],OD=45e3,VD={__name:"Messages",props:{conversationId:{type:String,required:!0},other:{type:Object,default:()=>({})},profile:{type:Object,default:()=>({})},isFavorite:{type:Boolean,default:!1}},emits:["openDrawer","openProfile","toggleFavorite"],setup(t,{emit:e}){const n=t,s=e,r=Te(()=>{var j,z,x,oe;return{uid:((j=rt.currentUser)==null?void 0:j.uid)||"",displayName:((z=n.profile)==null?void 0:z.displayName)||((x=rt.currentUser)==null?void 0:x.displayName)||((oe=rt.currentUser)==null?void 0:oe.email)||""}}),i=Te(()=>{var j,z;return((j=n.profile)==null?void 0:j.photoURL)||((z=rt.currentUser)==null?void 0:z.photoURL)||""}),o=Q([]),a=Q(null),c=Q(!1),l=Q(!1),u=Q(""),h=Q(!1),f=Te(()=>o.value.filter(j=>j.image)),m=()=>{c.value=!1,s("openProfile")},w=()=>{c.value=!1,s("toggleFavorite",n.conversationId)},_=()=>{c.value=!1,l.value=!0};let v=null,I=null;const F=j=>{var x;if(I==null||I(),I=null,h.value=!1,!j)return;const z=jn(j,((x=rt.currentUser)==null?void 0:x.uid)||"");z&&(I=Yt(Le(we,"users",z),oe=>{var je,Ue;const pe=oe.data()||{};h.value=!!(pe.online&&pe.lastSeen&&Date.now()-(((Ue=(je=pe.lastSeen).toMillis)==null?void 0:Ue.call(je))||0)<OD)},()=>{}))},G=j=>{if(v&&(v(),v=null),o.value=[],!j)return;const z=fs(Xt(we,"conversations",j,"messages"),AS("time"));v=Yt(z,x=>{o.value=x.docs.map(oe=>({id:oe.id,...oe.data()})),Ta(()=>{var pe;const oe=(pe=a.value)==null?void 0:pe.lastElementChild;oe&&oe.scrollIntoView({behavior:"smooth",block:"end"})})})};return qt(()=>n.conversationId,j=>{G(j),F(j)},{immediate:!0}),Or(()=>{v==null||v(),I==null||I()}),(j,z)=>(M(),$("div",cD,[lD,d("header",uD,[d("button",{class:"icon-btn cm-menu-btn",onClick:z[0]||(z[0]=x=>j.$emit("openDrawer"))},dD),de(fn,{src:t.other.photo||"",name:t.other.name,size:"md"},null,8,["src","name"]),d("div",fD,[d("h2",null,N(t.other.name),1),d("p",null,[d("span",{class:ve(["cm-status-dot",{"cm-status-offline":!h.value}])},null,2),nn(" "+N(h.value?k(D)("en_linea"):k(D)("desconectado")),1)])]),d("div",mD,[d("div",pD,[d("button",{class:ve(["icon-btn",{active:c.value}]),onClick:z[1]||(z[1]=x=>c.value=!c.value)},_D,2),c.value?(M(),$("div",yD,[d("button",{class:"cm-pop-item",onClick:m},[vD,d("span",null,N(k(D)("mi_perfil")),1)]),d("button",{class:"cm-pop-item",onClick:w},[d("i",{class:ve(["mdi",t.isFavorite?"mdi-star":"mdi-star-outline"])},null,2),d("span",null,N(t.isFavorite?k(D)("quitar_fav"):k(D)("ag_favoritos")),1)]),d("button",{class:"cm-pop-item",onClick:_},[wD,d("span",null,N(k(D)("fotos_compartidas")),1)])])):Se("",!0)])])]),o.value.length===0?(M(),$("div",ED,[ID,d("p",null,N(k(D)("no_mensajes")),1),d("p",TD,N(k(D)("envia_primero")),1)])):(M(),$("div",{key:1,class:"cm-list",ref_key:"listRef",ref:a},[d("div",AD,N(k(D)("hoy")),1),(M(!0),$(De,null,en(o.value,(x,oe)=>{var pe;return M(),gs(Ck,{key:x.id,message:x,"is-own":x.uid===r.value.uid,"show-avatar":oe===0||((pe=o.value[oe-1])==null?void 0:pe.uid)!==x.uid,avatar:x.uid===r.value.uid?i.value:t.other.photo,"sender-name":x.uid===r.value.uid?r.value.displayName:t.other.name},null,8,["message","is-own","show-avatar","avatar","sender-name"])}),128))],512)),t.conversationId?(M(),gs(aD,{key:2,"conversation-id":t.conversationId},null,8,["conversation-id"])):Se("",!0),l.value?(M(),$("div",{key:3,class:"cm-modal",onClick:z[5]||(z[5]=Je(x=>l.value=!1,["self"]))},[d("div",bD,[d("div",RD,[d("h4",null,N(k(D)("fotos_compartidas")),1),d("button",{class:"icon-btn",onClick:z[2]||(z[2]=x=>l.value=!1)},CD)]),f.value.length?(M(),$("div",PD,[(M(!0),$(De,null,en(f.value,x=>(M(),$("img",{key:x.id,src:x.image,alt:"Foto",draggable:"false",onClick:oe=>u.value=x.image,onContextmenu:z[3]||(z[3]=Je(()=>{},["prevent"])),onDragstart:z[4]||(z[4]=Je(()=>{},["prevent"]))},null,40,kD))),128))])):(M(),$("p",DD,N(k(D)("sin_fotos")),1))])])):Se("",!0),u.value?(M(),$("div",{key:4,class:"cm-lightbox",onClick:z[8]||(z[8]=x=>u.value="")},[d("img",{src:u.value,alt:"Foto",draggable:"false",onContextmenu:z[6]||(z[6]=Je(()=>{},["prevent"])),onDragstart:z[7]||(z[7]=Je(()=>{},["prevent"]))},null,40,ND)])):Se("",!0)]))}},MD=hn(VD,[["__scopeId","data-v-c0645669"]]),Ws=t=>(Ls("data-v-70fa2247"),t=t(),Fs(),t),xD={class:"modal-card"},LD={class:"modal-head"},FD=Ws(()=>d("i",{class:"mdi mdi-close"},null,-1)),UD=[FD],$D={class:"set-row"},BD={class:"set-label"},jD=Ws(()=>d("i",{class:"mdi mdi-translate"},null,-1)),qD={class:"set-opts"},HD=Ws(()=>d("span",{class:"set-flag"},"🇪🇸",-1)),zD=Ws(()=>d("span",{class:"set-flag"},"🇺🇸",-1)),WD={class:"set-row"},KD={class:"set-label"},GD=Ws(()=>d("i",{class:"mdi mdi-palette-outline"},null,-1)),QD={class:"set-opts"},YD=Ws(()=>d("span",{class:"swatch swatch-orange"},null,-1)),JD=Ws(()=>d("span",{class:"swatch swatch-blue"},null,-1)),XD={__name:"SettingsPanel",emits:["close"],setup(t,{emit:e}){const n=e,s=()=>setTimeout(()=>n("close"),350),r=o=>{VS(o),s()},i=o=>{MS(o),s()};return(o,a)=>(M(),$("div",{class:"modal-backdrop",onClick:a[5]||(a[5]=Je(c=>n("close"),["self"]))},[d("div",xD,[d("div",LD,[d("h3",null,N(k(D)("configuracion")),1),d("button",{class:"icon-btn",onClick:a[0]||(a[0]=c=>n("close"))},UD)]),d("div",$D,[d("div",BD,[jD,d("span",null,N(k(D)("idioma")),1)]),d("div",qD,[d("button",{class:ve(["set-opt",{active:k(ma)==="es"}]),onClick:a[1]||(a[1]=c=>r("es"))},[HD,nn(" "+N(k(D)("espanol")),1)],2),d("button",{class:ve(["set-opt",{active:k(ma)==="en"}]),onClick:a[2]||(a[2]=c=>r("en"))},[zD,nn(" "+N(k(D)("english")),1)],2)])]),d("div",WD,[d("div",KD,[GD,d("span",null,N(k(D)("tema")),1)]),d("div",QD,[d("button",{class:ve(["set-opt set-theme",{active:k(pa)==="naranja"}]),onClick:a[3]||(a[3]=c=>i("naranja"))},[YD,nn(" "+N(k(D)("naranja")),1)],2),d("button",{class:ve(["set-opt set-theme",{active:k(pa)==="azul"}]),onClick:a[4]||(a[4]=c=>i("azul"))},[JD,nn(" "+N(k(D)("azul")),1)],2)])])])]))}},ZD=hn(XD,[["__scopeId","data-v-70fa2247"]]),Dh=t=>(Ls("data-v-3bc49a19"),t=t(),Fs(),t),eN={class:"modal-card"},tN={class:"modal-head"},nN=Dh(()=>d("i",{class:"mdi mdi-close"},null,-1)),sN=[nN],rN={class:"prof-avatar-wrap"},iN=Dh(()=>d("i",{class:"mdi mdi-camera-outline"},null,-1)),oN={class:"field"},aN=["placeholder"],cN={class:"field"},lN=["disabled"],uN={key:0,class:"saved-note"},hN=Dh(()=>d("i",{class:"mdi mdi-check-circle"},null,-1)),dN={__name:"ProfileModal",props:{profile:{type:Object,default:()=>({})}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,r=Q(""),i=Q(""),o=Q(""),a=Q(""),c=Q(null),l=Q(!1),u=Q(!1);qt(()=>n.profile,_=>{!_||typeof _!="object"||(r.value=_.displayName||"",i.value=_.birthday||"",o.value=_.photoURL||"",a.value=_.photoURL||"")},{immediate:!0});const h=()=>{var _;(_=c.value)==null||_.click()},f=async _=>{var F;const v=(F=_.target.files)==null?void 0:F[0];if(_.target.value="",!v)return;const I=await m(v);I&&(o.value=I,a.value=I)},m=_=>new Promise(v=>{const I=new FileReader;I.onload=()=>{const F=new Image;F.onload=()=>{const j=Math.min(1,512/Math.max(F.naturalWidth,F.naturalHeight)),z=Math.max(1,Math.round(F.naturalWidth*j)),x=Math.max(1,Math.round(F.naturalHeight*j)),oe=document.createElement("canvas");oe.width=z,oe.height=x;const pe=oe.getContext("2d");if(!pe)return v(I.result);pe.fillStyle="#fff",pe.fillRect(0,0,z,x),pe.drawImage(F,0,0,z,x),v(oe.toDataURL("image/jpeg",.8))},F.onerror=()=>v(null),F.src=I.result},I.onerror=()=>v(null),I.readAsDataURL(_)}),w=async()=>{var v;const _=rt.currentUser;if(_){l.value=!0;try{const I={displayName:r.value.trim()||((v=_.email)==null?void 0:v.split("@")[0])||"Usuario",photoURL:o.value||"",birthday:i.value||""};await Vt(Le(we,"users",_.uid),I,{merge:!0}),await ku(_,{displayName:I.displayName,photoURL:I.photoURL}).catch(()=>{}),u.value=!0,setTimeout(()=>s("close"),600)}catch(I){console.log(I)}finally{l.value=!1}}};return(_,v)=>(M(),$("div",{class:"modal-backdrop",onClick:v[3]||(v[3]=Je(I=>s("close"),["self"]))},[d("div",eN,[d("div",tN,[d("h3",null,N(k(D)("mi_perfil")),1),d("button",{class:"icon-btn",onClick:v[0]||(v[0]=I=>s("close"))},sN)]),d("div",rN,[de(fn,{src:a.value,name:r.value||"?",size:"xl"},null,8,["src","name"]),d("button",{class:"prof-photo-btn",onClick:h},[iN,d("span",null,N(k(D)("cambiar_foto")),1)]),d("input",{ref_key:"photoInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:f},null,544)]),d("div",oN,[d("label",null,N(k(D)("alias")),1),Ts(d("input",{"onUpdate:modelValue":v[1]||(v[1]=I=>r.value=I),type:"text",placeholder:k(D)("alias_ph")},null,8,aN),[[As,r.value]])]),d("div",cN,[d("label",null,N(k(D)("cumpleanos")),1),Ts(d("input",{"onUpdate:modelValue":v[2]||(v[2]=I=>i.value=I),type:"date"},null,512),[[As,i.value]])]),d("button",{class:"save-btn btn-primary",type:"button",disabled:l.value,onClick:w},[d("span",null,N(l.value?k(D)("cargando"):k(D)("guardar")),1)],8,lN),u.value?(M(),$("p",uN,[hN,nn(" "+N(k(D)("guardado")),1)])):Se("",!0)])]))}},fN=hn(dN,[["__scopeId","data-v-3bc49a19"]]),mN={key:0,class:"app-loading"},pN=d("div",{class:"app-spinner"},null,-1),gN={key:2,class:"app-chat"},_N={class:"side-desktop"},yN={key:1,class:"side-mobile"},vN={key:3,class:"app-placeholder"},wN=d("i",{class:"mdi mdi-chat-processing-outline"},null,-1),EN=[wN],IN={class:"app-placeholder-sub"},TN={__name:"App",setup(t){Uy();const e=Q(null),n=Q(!1),s=Q(!1),r=Q(null),i=Q({}),o=Q(!1),a=Q(!1);let c=null,l=null;const u=v=>{h(),l=setInterval(()=>{rr(Le(we,"users",v),{lastSeen:si(),online:!0}).catch(()=>{})},3e4)},h=()=>{l&&(clearInterval(l),l=null)},f=({id:v,other:I})=>{r.value={id:v,other:I},s.value=!1},m=Te(()=>i.value.favorites||[]),w=Te(()=>r.value?m.value.includes(r.value.id):!1),_=async v=>{const I=rt.currentUser;if(!I)return;const F=Le(we,"users",I.uid);try{m.value.includes(v)?await rr(F,{favorites:Ly(v)}):await rr(F,{favorites:Rs(v)})}catch(G){console.log(G)}};return uT(rt,async v=>{if(e.value=v,n.value=!0,v){u(v.uid);try{const I=j=>(j||"").trim().split(/\s+/)[0]||"",F=Le(we,"users",v.uid),G=await Jl(F);if(G.exists()){const j=G.data(),z={lastSeen:si(),online:!0},x=I(v.displayName);x&&j.displayName&&j.displayName===(v.displayName||"")&&j.displayName.includes(" ")&&j.displayName!==x&&(z.displayName=x),await rr(F,z)}else{const j=I(v.displayName)||I(v.email);await Vt(F,{uid:v.uid,displayName:j,email:v.email,photoURL:v.photoURL||"",online:!0,lastSeen:si(),createdAt:si()}),ku(rt.currentUser,{displayName:j}).catch(()=>{})}}catch(I){console.error("Error registrando usuario:",I)}c==null||c(),c=Yt(Le(we,"users",v.uid),I=>{i.value=I.data()||{}},I=>console.error("denied:me",I.code))}else h(),c==null||c(),c=null}),Or(()=>{h(),c==null||c()}),(v,I)=>(M(),$(De,null,[n.value?e.value?(M(),$("div",gN,[d("div",_N,[de(qf,{"active-id":r.value?r.value.id:"",profile:i.value,favorites:m.value,onOpen:f,onOpenProfile:I[0]||(I[0]=F=>a.value=!0),onOpenSettings:I[1]||(I[1]=F=>o.value=!0)},null,8,["active-id","profile","favorites"])]),s.value?(M(),$("div",{key:0,class:"overlay",onClick:I[2]||(I[2]=F=>s.value=!1)})):Se("",!0),s.value?(M(),$("div",yN,[de(qf,{"active-id":r.value?r.value.id:"",profile:i.value,favorites:m.value,"is-mobile":"",onOpen:f,onClose:I[3]||(I[3]=F=>s.value=!1),onOpenProfile:I[4]||(I[4]=F=>a.value=!0),onOpenSettings:I[5]||(I[5]=F=>o.value=!0)},null,8,["active-id","profile","favorites"])])):Se("",!0),r.value?(M(),gs(MD,{key:2,"conversation-id":r.value.id,other:r.value.other,profile:i.value,"is-favorite":w.value,onOpenDrawer:I[6]||(I[6]=F=>s.value=!0),onOpenProfile:I[7]||(I[7]=F=>a.value=!0),onToggleFavorite:_},null,8,["conversation-id","other","profile","is-favorite"])):(M(),$("div",vN,[d("button",{class:"app-placeholder-icon",onClick:I[8]||(I[8]=F=>s.value=!0)},EN),d("p",null,N(k(D)("selecciona")),1),d("p",IN,N(k(D)("para_chatear")),1)]))])):(M(),gs(PC,{key:1})):(M(),$("div",mN,[pN,d("span",null,N(k(D)("cargando")),1)])),o.value?(M(),gs(ZD,{key:3,onClose:I[9]||(I[9]=F=>o.value=!1)})):Se("",!0),a.value?(M(),gs(fN,{key:4,profile:i.value,onClose:I[10]||(I[10]=F=>a.value=!1)},null,8,["profile"])):Se("",!0)],64))}};function AN(t,e){let n;function s(){n=_v(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}qt(t,r=>{r&&!n?s():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),wv(()=>{n==null||n.stop()})}const on=typeof window<"u",bN=on&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function RN(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let r=0;r<s;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function Hf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),RN(t,e.split("."),n))}function jy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function zf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function tl(t,e){return e.every(n=>t.hasOwnProperty(n))}function SN(t,e){const n={},s=new Set(Object.keys(t));for(const r of e)s.has(r)&&(n[r]=t[r]);return n}function CN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Wf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Kf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function PN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function Sn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const r in t)s[r]=t[r];for(const r in e){const i=t[r],o=e[r];if(zf(i)&&zf(o)){s[r]=Sn(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){s[r]=n(i,o);continue}s[r]=o}return s}function pr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(pr.cache.has(t))return pr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return pr.cache.set(t,e),e}pr.cache=new Map;const Js=2.4,Gf=.2126729,Qf=.7151522,Yf=.072175,kN=.55,DN=.58,NN=.57,ON=.62,Co=.03,Jf=1.45,VN=5e-4,MN=1.25,xN=1.25,Xf=.078,Zf=12.82051282051282,Po=.06,em=.001;function tm(t,e){const n=(t.r/255)**Js,s=(t.g/255)**Js,r=(t.b/255)**Js,i=(e.r/255)**Js,o=(e.g/255)**Js,a=(e.b/255)**Js;let c=n*Gf+s*Qf+r*Yf,l=i*Gf+o*Qf+a*Yf;if(c<=Co&&(c+=(Co-c)**Jf),l<=Co&&(l+=(Co-l)**Jf),Math.abs(l-c)<VN)return 0;let u;if(l>c){const h=(l**kN-c**DN)*MN;u=h<em?0:h<Xf?h-h*Zf*Po:h-Po}else{const h=(l**ON-c**NN)*xN;u=h>-em?0:h>-Xf?h-h*Zf*Po:h+Po}return u*100}const ga=.20689655172413793,LN=t=>t>ga**3?Math.cbrt(t):t/(3*ga**2)+4/29,FN=t=>t>ga?t**3:3*ga**2*(t-4/29);function qy(t){const e=LN,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Hy(t){const e=FN,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const UN=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],$N=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,BN=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],jN=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function zy(t){const e=Array(3),n=$N,s=UN;for(let r=0;r<3;++r)e[r]=Math.round(CN(n(s[r][0]*t[0]+s[r][1]*t[1]+s[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Nh(t){let{r:e,g:n,b:s}=t;const r=[0,0,0],i=jN,o=BN;e=i(e/255),n=i(n/255),s=i(s/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return r}const nm=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,qN={rgb:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),rgba:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),hsl:(t,e,n,s)=>sm({h:t,s:e,l:n,a:s}),hsla:(t,e,n,s)=>sm({h:t,s:e,l:n,a:s}),hsv:(t,e,n,s)=>Fi({h:t,s:e,v:n,a:s}),hsva:(t,e,n,s)=>Fi({h:t,s:e,v:n,a:s})};function wn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&nm.test(t)){const{groups:e}=t.match(nm),{fn:n,values:s}=e,r=s.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return qN[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),zN(e)}else if(typeof t=="object"){if(tl(t,["r","g","b"]))return t;if(tl(t,["h","s","l"]))return Fi(Wy(t));if(tl(t,["h","s","v"]))return Fi(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Fi(t){const{h:e,s:n,v:s,a:r}=t,i=a=>{const c=(a+e/60)%6;return s-s*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function sm(t){return Fi(Wy(t))}function Wy(t){const{h:e,s:n,l:s,a:r}=t,i=s+n*Math.min(s,1-s),o=i===0?0:2-2*s/i;return{h:e,s:o,v:i,a:r}}function ko(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function HN(t){let{r:e,g:n,b:s,a:r}=t;return`#${[ko(e),ko(n),ko(s),r!==void 0?ko(Math.round(r*255)):""].join("")}`}function zN(t){t=WN(t);let[e,n,s,r]=PN(t,2).map(i=>parseInt(i,16));return r=r===void 0?r:r/255,{r:e,g:n,b:s,a:r}}function WN(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Wf(Wf(t,6),8,"F")),t}function KN(t,e){const n=qy(Nh(t));return n[0]=n[0]+e*10,zy(Hy(n))}function GN(t,e){const n=qy(Nh(t));return n[0]=n[0]-e*10,zy(Hy(n))}function QN(t){const e=wn(t);return Nh(e)[1]}function YN(t){const e=Math.abs(tm(wn(0),wn(t)));return Math.abs(tm(wn(16777215),wn(t)))>Math.min(e,50)?"#fff":"#000"}function Ky(t,e){return n=>Object.keys(t).reduce((s,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?s[r]={...o,default:n[r]}:s[r]=o,e&&!s[r].source&&(s[r].source=e),s},{})}const Ui=Symbol.for("vuetify:defaults");function JN(t){return Q(t)}function Gy(){const t=ci(Ui);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function XN(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[pr(e)])<"u"}function ZN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gy();const s=vc("useDefaults");if(e=e??s.type.name??s.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=Te(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,l){var h,f,m,w;const u=Reflect.get(c,l);return l==="class"||l==="style"?[(h=r.value)==null?void 0:h[l],u].filter(_=>_!=null):typeof l=="string"&&!XN(s.vnode,l)?((f=r.value)==null?void 0:f[l])??((w=(m=n.value)==null?void 0:m.global)==null?void 0:w[l])??u:u}}),o=ar();fu(()=>{if(r.value){const c=Object.entries(r.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=t2(Ui,s);rp(Ui,Te(()=>o.value?Sn((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function co(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Ky(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(s){return SN(s,e)},t.props._as=String,t.setup=function(s,r){const i=Gy();if(!i.value)return t._setup(s,r);const{props:o,provideSubDefaults:a}=ZN(s,s._as??t.name,i),c=t._setup(o,r);return a(),c}}return t}function e2(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?co:d0)(e)}function vc(t,e){const n=G0();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Qy=0,Ho=new WeakMap;function Yy(){const t=vc("getUid");if(Ho.has(t))return Ho.get(t);{const e=Qy++;return Ho.set(t,e),e}}Yy.reset=()=>{Qy=0,Ho=new WeakMap};function t2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function n2(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=vc("useProxiedModel"),o=Q(t[e]!==void 0?t[e]:n),a=pr(e),l=Te(a!==e?()=>{var h,f,m,w;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(w=i.vnode.props)!=null&&w.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});AN(()=>!l.value,()=>{qt(()=>t[e],h=>{o.value=h})});const u=Te({get(){const h=t[e];return s(l.value?h:o.value)},set(h){const f=r(h),m=Ae(l.value?t[e]:o.value);m===f||s(m)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const s2={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},rm="$vuetify.",im=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),Jy=(t,e,n)=>function(s){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(!s.startsWith(rm))return im(s,i);const a=s.replace(rm,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=Hf(c,a,null);return u||(`${s}${t.value}`,u=Hf(l,a,null)),u||(u=s),typeof u!="string"&&(u=s),im(u,i)};function Xy(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function nl(t,e,n){const s=n2(t,e,t[e]??n.value);return s.value=t[e]??n.value,qt(n,r=>{t[e]==null&&(s.value=n.value)}),s}function Zy(t){return e=>{const n=nl(e,"locale",t.current),s=nl(e,"fallback",t.fallback),r=nl(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:r,t:Jy(n,s,r),n:Xy(n,s),provide:Zy({current:n,fallback:s,messages:r})}}}function r2(t){const e=ar((t==null?void 0:t.locale)??"en"),n=ar((t==null?void 0:t.fallback)??"en"),s=Q({en:s2,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:Jy(e,n,s),n:Xy(e,n),provide:Zy({current:e,fallback:n,messages:s})}}const om=Symbol.for("vuetify:locale");function i2(t){return t.name!=null}function o2(t){const e=t!=null&&t.adapter&&i2(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:r2(t),n=c2(e,t);return{...e,...n}}function a2(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function c2(t,e){const n=Q((e==null?void 0:e.rtl)??a2()),s=Te(()=>n.value[t.current.value]??!1);return{isRtl:s,rtl:n,rtlClasses:Te(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}const $i={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function l2(t,e){const n=[];let s=[];const r=ev(t),i=tv(t),o=(r.getDay()-$i[e.slice(-2).toUpperCase()]+7)%7,a=(i.getDay()-$i[e.slice(-2).toUpperCase()]+7)%7;for(let c=0;c<o;c++){const l=new Date(r);l.setDate(l.getDate()-(o-c)),s.push(l)}for(let c=1;c<=i.getDate();c++){const l=new Date(t.getFullYear(),t.getMonth(),c);s.push(l),s.length===7&&(n.push(s),s=[])}for(let c=1;c<7-a;c++){const l=new Date(i);l.setDate(l.getDate()+c),s.push(l)}return s.length>0&&n.push(s),n}function u2(t,e){const n=new Date(t);for(;n.getDay()!==($i[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function h2(t,e){const n=new Date(t),s=(($i[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==s;)n.setDate(n.getDate()+1);return n}function ev(t){return new Date(t.getFullYear(),t.getMonth(),1)}function tv(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function d2(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const f2=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function nv(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(f2.test(t))return d2(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const am=new Date(2e3,0,2);function m2(t){const e=$i[t.slice(-2).toUpperCase()];return jy(7).map(n=>{const s=new Date(am);return s.setDate(am.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function p2(t,e,n,s){const r=nv(t)??new Date,i=s==null?void 0:s[e];if(typeof i=="function")return i(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function g2(t,e){const n=t.toJsDate(e),s=n.getFullYear(),r=Kf(String(n.getMonth()+1),2,"0"),i=Kf(String(n.getDate()),2,"0");return`${s}-${r}-${i}`}function _2(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s)}function y2(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function v2(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function w2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function E2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function I2(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function T2(t){return t.getFullYear()}function A2(t){return t.getMonth()}function b2(t){return t.getDate()}function R2(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function S2(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function C2(t){return t.getHours()}function P2(t){return t.getMinutes()}function k2(t){return new Date(t.getFullYear(),0,1)}function D2(t){return new Date(t.getFullYear(),11,31)}function N2(t,e){return _a(t,e[0])&&M2(t,e[1])}function O2(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function _a(t,e){return t.getTime()>e.getTime()}function V2(t,e){return _a(Zl(t),Zl(e))}function M2(t,e){return t.getTime()<e.getTime()}function cm(t,e){return t.getTime()===e.getTime()}function x2(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function L2(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function F2(t,e){return t.getFullYear()===e.getFullYear()}function U2(t,e,n){const s=new Date(t),r=new Date(e);switch(n){case"years":return s.getFullYear()-r.getFullYear();case"quarters":return Math.floor((s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12)/4);case"months":return s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((s.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((s.getTime()-r.getTime())/1e3);default:return s.getTime()-r.getTime()}}function $2(t,e){const n=new Date(t);return n.setHours(e),n}function B2(t,e){const n=new Date(t);return n.setMinutes(e),n}function j2(t,e){const n=new Date(t);return n.setMonth(e),n}function q2(t,e){const n=new Date(t);return n.setDate(e),n}function H2(t,e){const n=new Date(t);return n.setFullYear(e),n}function Zl(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function z2(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class W2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return nv(e)}toJsDate(e){return e}toISO(e){return g2(this,e)}parseISO(e){return _2(e)}addMinutes(e,n){return y2(e,n)}addHours(e,n){return v2(e,n)}addDays(e,n){return w2(e,n)}addWeeks(e,n){return E2(e,n)}addMonths(e,n){return I2(e,n)}getWeekArray(e){return l2(e,this.locale)}startOfWeek(e){return u2(e,this.locale)}endOfWeek(e){return h2(e,this.locale)}startOfMonth(e){return ev(e)}endOfMonth(e){return tv(e)}format(e,n){return p2(e,n,this.locale,this.formats)}isEqual(e,n){return cm(e,n)}isValid(e){return O2(e)}isWithinRange(e,n){return N2(e,n)}isAfter(e,n){return _a(e,n)}isAfterDay(e,n){return V2(e,n)}isBefore(e,n){return!_a(e,n)&&!cm(e,n)}isSameDay(e,n){return x2(e,n)}isSameMonth(e,n){return L2(e,n)}isSameYear(e,n){return F2(e,n)}setMinutes(e,n){return B2(e,n)}setHours(e,n){return $2(e,n)}setMonth(e,n){return j2(e,n)}setDate(e,n){return q2(e,n)}setYear(e,n){return H2(e,n)}getDiff(e,n,s){return U2(e,n,s)}getWeekdays(){return m2(this.locale)}getYear(e){return T2(e)}getMonth(e){return A2(e)}getDate(e){return b2(e)}getNextMonth(e){return R2(e)}getPreviousMonth(e){return S2(e)}getHours(e){return C2(e)}getMinutes(e){return P2(e)}startOfDay(e){return Zl(e)}endOfDay(e){return z2(e)}startOfYear(e){return k2(e)}endOfYear(e){return D2(e)}}const K2=Symbol.for("vuetify:date-options"),lm=Symbol.for("vuetify:date-adapter");function G2(t,e){const n=Sn({adapter:W2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:Q2(n,e)}}function Q2(t,e){const n=Nr(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return qt(e.current,s=>{n.locale=t.locale[s]??s??n.locale}),n}const um=Symbol.for("vuetify:display"),hm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Y2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hm;return Sn(hm,t)};function dm(t){return on&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function fm(t){return on&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function mm(t){const e=on&&!t?window.navigator.userAgent:"ssr";function n(w){return!!e.match(w)}const s=n(/android/i),r=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:s,ios:r,cordova:i,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:h,mac:f,linux:m,touch:bN,ssr:e==="ssr"}}function J2(t,e){const{thresholds:n,mobileBreakpoint:s}=Y2(t),r=ar(fm(e)),i=ar(mm(e)),o=Nr({}),a=ar(dm(e));function c(){r.value=fm(),a.value=dm()}function l(){c(),i.value=mm()}return fu(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),m=a.value<n.xl&&!(f||h||u),w=a.value<n.xxl&&!(m||f||h||u),_=a.value>=n.xxl,v=u?"xs":h?"sm":f?"md":m?"lg":w?"xl":"xxl",I=typeof s=="number"?s:n[s],F=a.value<I;o.xs=u,o.sm=h,o.md=f,o.lg=m,o.xl=w,o.xxl=_,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||m),o.smAndDown=!(f||m||w||_),o.mdAndDown=!(m||w||_),o.lgAndDown=!(w||_),o.xlAndDown=!_,o.name=v,o.height=r.value,o.width=a.value,o.mobile=F,o.mobileBreakpoint=s,o.platform=i.value,o.thresholds=n}),on&&window.addEventListener("resize",c,{passive:!0}),{...Wv(o),update:l,ssr:!!e}}const X2=Symbol.for("vuetify:goto");function Z2(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function eO(t,e){return{rtl:e.isRtl,options:Sn(Z2(),t)}}const tO={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},nO={component:t=>ew(sv,{...t,class:"mdi"})},sO=[String,Function,Object,Array],pm=Symbol.for("vuetify:icons"),wc=Ky({icon:{type:sO},tag:{type:String,required:!0}},"icon");e2()({name:"VComponentIcon",props:wc(),setup(t,e){let{slots:n}=e;return()=>{const s=t.icon;return de(t.tag,null,{default:()=>{var r;return[t.icon?de(s,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}});const rO=co({name:"VSvgIcon",inheritAttrs:!1,props:wc(),setup(t,e){let{attrs:n}=e;return()=>de(t.tag,_p(n,{style:null}),{default:()=>[de("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(s=>Array.isArray(s)?de("path",{d:s[0],"fill-opacity":s[1]},null):de("path",{d:s},null)):de("path",{d:t.icon},null)])]})}});co({name:"VLigatureIcon",props:wc(),setup(t){return()=>de(t.tag,null,{default:()=>[t.icon]})}});const sv=co({name:"VClassIcon",props:wc(),setup(t){return()=>de(t.tag,{class:t.icon},null)}});function iO(){return{svg:{component:rO},class:{component:sv}}}function oO(t){const e=iO(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=nO),Sn({defaultSet:n,sets:e,aliases:{...tO,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const gm=Symbol.for("vuetify:theme");function _m(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function aO(){var s,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_m();const e=_m();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(s=e.themes)==null?void 0:s.dark:(r=e.themes)==null?void 0:r.light;n[i]=Sn(a,o)}return Sn(e,{...t,themes:n})}function cO(t){const e=aO(t),n=Q(e.defaultTheme),s=Q(e.themes),r=Te(()=>{const u={};for(const[h,f]of Object.entries(s.value)){const m=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const w of e.variations.colors){const _=m.colors[w];if(_)for(const v of["lighten","darken"]){const I=v==="lighten"?KN:GN;for(const F of jy(e.variations[v],1))m.colors[`${w}-${v}-${F}`]=HN(I(wn(_),F))}}for(const w of Object.keys(m.colors)){if(/^on-[a-z]/.test(w)||m.colors[`on-${w}`])continue;const _=`on-${w}`,v=wn(m.colors[w]);m.colors[_]=YN(v)}}return u}),i=Te(()=>r.value[n.value]),o=Te(()=>{var w;const u=[];(w=i.value)!=null&&w.dark&&hs(u,":root",["color-scheme: dark"]),hs(u,":root",ym(i.value));for(const[_,v]of Object.entries(r.value))hs(u,`.v-theme--${_}`,[`color-scheme: ${v.dark?"dark":"normal"}`,...ym(v)]);const h=[],f=[],m=new Set(Object.values(r.value).flatMap(_=>Object.keys(_.colors)));for(const _ of m)/^on-[a-z]/.test(_)?hs(f,`.${_}`,[`color: rgb(var(--v-theme-${_})) !important`]):(hs(h,`.bg-${_}`,[`--v-theme-overlay-multiplier: var(--v-theme-${_}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${_})) !important`,`color: rgb(var(--v-theme-on-${_})) !important`]),hs(f,`.text-${_}`,[`color: rgb(var(--v-theme-${_})) !important`]),hs(f,`.border-${_}`,[`--v-border-color: var(--v-theme-${_})`]));return u.push(...h,...f),u.map((_,v)=>v===0?_:`    ${_}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);on&&qt(o,()=>{f.patch(a)})}else on?(h.addHeadObjs(Te(a)),fu(()=>h.updateDOM())):h.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!f){const w=document.createElement("style");w.type="text/css",w.id="vuetify-theme-stylesheet",e.cspNonce&&w.setAttribute("nonce",e.cspNonce),f=w,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=on?document.getElementById("vuetify-theme-stylesheet"):null;on?qt(o,m,{immediate:!0}):m()}}const l=Te(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:s,current:i,computedThemes:r,themeClasses:l,styles:o,global:{name:n,current:i}}}function hs(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function ym(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[r,i]of Object.entries(t.colors)){const o=wn(i);s.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||s.push(`--v-theme-${r}-overlay-multiplier: ${QN(i)>.18?e:n}`)}for(const[r,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?wn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${r}: ${a??i}`)}return s}function rv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=Sn(e,n),{aliases:r={},components:i={},directives:o={}}=s,a=JN(s.defaults),c=J2(s.display,s.ssr),l=cO(s.theme),u=oO(s.icons),h=o2(s.locale),f=G2(s.date,h),m=eO(s.goTo,h);return{install:_=>{for(const v in o)_.directive(v,o[v]);for(const v in i)_.component(v,i[v]);for(const v in r)_.component(v,co({...r[v],name:v,aliasName:r[v].name}));if(l.install(_),_.provide(Ui,a),_.provide(um,c),_.provide(gm,l),_.provide(pm,u),_.provide(om,h),_.provide(K2,f.options),_.provide(lm,f.instance),_.provide(X2,m),on&&s.ssr)if(_.$nuxt)_.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:v}=_;_.mount=function(){const I=v(...arguments);return Ta(()=>c.update()),_.mount=v,I}}Yy.reset(),_.mixin({computed:{$vuetify(){return Nr({defaults:Xs.call(this,Ui),display:Xs.call(this,um),theme:Xs.call(this,gm),icons:Xs.call(this,pm),locale:Xs.call(this,om),date:Xs.call(this,lm)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h,date:f,goTo:m}}const lO="3.6.3";rv.version=lO;function Xs(t){var s,r;const e=this.$,n=((s=e.parent)==null?void 0:s.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const uO=rv({theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FF6A00",secondary:"#F7F7F7",accent:"#FFB27D",error:"#EF4444",info:"#0EA5E9",success:"#22C55E",warning:"#F59E0B",background:"#FFFFFF",surface:"#FFFFFF"}}}}}),hO="modulepreload",dO=function(t){return"/friendzy/"+t},vm={},fO=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=dO(a),a in vm)return;vm[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":hO,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function mO(){(await fO(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Inter:100,300,400,500,600,700,800,900&display=swap"]}})}mO();Pw(TN).use(uO).mount("#app");
