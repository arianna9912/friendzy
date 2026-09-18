(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zl(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const Pe={},rr=[],Ot=()=>{},iv=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),eu=t=>t.startsWith("onUpdate:"),Je=Object.assign,tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,we=(t,e)=>ov.call(t,e),te=Array.isArray,ir=t=>ya(t)==="[object Map]",Em=t=>ya(t)==="[object Set]",le=t=>typeof t=="function",Ge=t=>typeof t=="string",Ls=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Im=t=>(xe(t)||le(t))&&le(t.then)&&le(t.catch),Tm=Object.prototype.toString,ya=t=>Tm.call(t),av=t=>ya(t).slice(8,-1),Am=t=>ya(t)==="[object Object]",nu=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cv=/-(\w)/g,pr=va(t=>t.replace(cv,(e,n)=>n?n.toUpperCase():"")),lv=/\B([A-Z])/g,Fs=va(t=>t.replace(lv,"-$1").toLowerCase()),bm=va(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ec=va(t=>t?`on${bm(t)}`:""),Jn=(t,e)=>!Object.is(t,e),ko=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vh;const Sm=()=>Vh||(Vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kr(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ge(s)?fv(s):kr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ge(t)||xe(t))return t}const uv=/;(?![^(]*\))/g,hv=/:([^]+)/,dv=/\/\*[^]*?\*\//g;function fv(t){const e={};return t.replace(dv,"").split(uv).forEach(n=>{if(n){const s=n.split(hv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function de(t){let e="";if(Ge(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=de(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pv=Zl(mv);function Cm(t){return!!t||t===""}const N=t=>Ge(t)?t:t==null?"":te(t)||xe(t)&&(t.toString===Tm||!le(t.toString))?JSON.stringify(t,Pm,2):String(t),Pm=(t,e)=>e&&e.__v_isRef?Pm(t,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ic(s,i)+" =>"]=r,n),{})}:Em(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ic(n))}:Ls(e)?Ic(e):xe(e)&&!te(e)&&!Am(e)?String(e):e,Ic=(t,e="")=>{var n;return Ls(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class km{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function gv(t){return new km(t)}function _v(t,e=St){e&&e.active&&e.effects.push(t)}function yv(){return St}function vv(t){St&&St.cleanups.push(t)}let As;class su{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,_v(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ns();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(wv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ss()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=qn,n=As;try{return qn=!0,As=this,this._runnings++,Mh(this),this.fn()}finally{xh(this),this._runnings--,As=n,qn=e}}stop(){this.active&&(Mh(this),xh(this),this.onStop&&this.onStop(),this.active=!1)}}function wv(t){return t.value}function Mh(t){t._trackId++,t._depsLength=0}function xh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Dm(t.deps[e],t);t.deps.length=t._depsLength}}function Dm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let qn=!0,sl=0;const Nm=[];function ns(){Nm.push(qn),qn=!1}function ss(){const t=Nm.pop();qn=t===void 0?!0:t}function ru(){sl++}function iu(){for(sl--;!sl&&rl.length;)rl.shift()()}function Om(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Dm(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const rl=[];function Vm(t,e,n){ru();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&rl.push(s.scheduler)))}iu()}const Mm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ho=new WeakMap,bs=Symbol(""),il=Symbol("");function Rt(t,e,n){if(qn&&As){let s=Ho.get(t);s||Ho.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Mm(()=>s.delete(n))),Om(As,r)}}function vn(t,e,n,s,r,i){const o=Ho.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!Ls(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?nu(n)&&a.push(o.get("length")):(a.push(o.get(bs)),ir(t)&&a.push(o.get(il)));break;case"delete":te(t)||(a.push(o.get(bs)),ir(t)&&a.push(o.get(il)));break;case"set":ir(t)&&a.push(o.get(bs));break}ru();for(const c of a)c&&Vm(c,4);iu()}function Ev(t,e){const n=Ho.get(t);return n&&n.get(e)}const Iv=Zl("__proto__,__v_isRef,__isVue"),xm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ls)),Lh=Tv();function Tv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ae(this);for(let i=0,o=this.length;i<o;i++)Rt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ns(),ru();const s=Ae(this)[e].apply(this,n);return iu(),ss(),s}}),t}function Av(t){Ls(t)||(t=String(t));const e=Ae(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class Lm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Lv:Bm:i?$m:Um).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=te(e);if(!r){if(o&&we(Lh,n))return Reflect.get(Lh,n,s);if(n==="hasOwnProperty")return Av}const a=Reflect.get(e,n,s);return(Ls(n)?xm.has(n):Iv(n))||(r||Rt(e,"get",n),i)?a:vt(a)?o&&nu(n)?a:a.value:xe(a)?r?jm(a):Dr(a):a}}class Fm extends Lm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=mi(i);if(!zo(s)&&!mi(s)&&(i=Ae(i),s=Ae(s)),!te(e)&&vt(i)&&!vt(s))return c?!1:(i.value=s,!0)}const o=te(e)&&nu(n)?Number(n)<e.length:we(e,n),a=Reflect.set(e,n,s,r);return e===Ae(r)&&(o?Jn(s,i)&&vn(e,"set",n,s):vn(e,"add",n,s)),a}deleteProperty(e,n){const s=we(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&vn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ls(n)||!xm.has(n))&&Rt(e,"has",n),s}ownKeys(e){return Rt(e,"iterate",te(e)?"length":bs),Reflect.ownKeys(e)}}class bv extends Lm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rv=new Fm,Sv=new bv,Cv=new Fm(!0);const ou=t=>t,wa=t=>Reflect.getPrototypeOf(t);function ho(t,e,n=!1,s=!1){t=t.__v_raw;const r=Ae(t),i=Ae(e);n||(Jn(e,i)&&Rt(r,"get",e),Rt(r,"get",i));const{has:o}=wa(r),a=s?ou:n?lu:pi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function fo(t,e=!1){const n=this.__v_raw,s=Ae(n),r=Ae(t);return e||(Jn(t,r)&&Rt(s,"has",t),Rt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function mo(t,e=!1){return t=t.__v_raw,!e&&Rt(Ae(t),"iterate",bs),Reflect.get(t,"size",t)}function Fh(t){t=Ae(t);const e=Ae(this);return wa(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function Uh(t,e){e=Ae(e);const n=Ae(this),{has:s,get:r}=wa(n);let i=s.call(n,t);i||(t=Ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Jn(e,o)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function $h(t){const e=Ae(this),{has:n,get:s}=wa(e);let r=n.call(e,t);r||(t=Ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&vn(e,"delete",t,void 0),i}function Bh(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function po(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Ae(o),c=e?ou:t?lu:pi;return!t&&Rt(a,"iterate",bs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function go(t,e,n){return function(...s){const r=this.__v_raw,i=Ae(r),o=ir(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ou:e?lu:pi;return!e&&Rt(i,"iterate",c?il:bs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Nn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pv(){const t={get(i){return ho(this,i)},get size(){return mo(this)},has:fo,add:Fh,set:Uh,delete:$h,clear:Bh,forEach:po(!1,!1)},e={get(i){return ho(this,i,!1,!0)},get size(){return mo(this)},has:fo,add:Fh,set:Uh,delete:$h,clear:Bh,forEach:po(!1,!0)},n={get(i){return ho(this,i,!0)},get size(){return mo(this,!0)},has(i){return fo.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:po(!0,!1)},s={get(i){return ho(this,i,!0,!0)},get size(){return mo(this,!0)},has(i){return fo.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=go(i,!1,!1),n[i]=go(i,!0,!1),e[i]=go(i,!1,!0),s[i]=go(i,!0,!0)}),[t,n,e,s]}const[kv,Dv,Nv,Ov]=Pv();function au(t,e){const n=e?t?Ov:Nv:t?Dv:kv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(we(n,r)&&r in s?n:s,r,i)}const Vv={get:au(!1,!1)},Mv={get:au(!1,!0)},xv={get:au(!0,!1)};const Um=new WeakMap,$m=new WeakMap,Bm=new WeakMap,Lv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uv(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(av(t))}function Dr(t){return mi(t)?t:cu(t,!1,Rv,Vv,Um)}function $v(t){return cu(t,!1,Cv,Mv,$m)}function jm(t){return cu(t,!0,Sv,xv,Bm)}function cu(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Uv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function si(t){return mi(t)?si(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function zo(t){return!!(t&&t.__v_isShallow)}function qm(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Bv(t){return Object.isExtensible(t)&&Rm(t,"__v_skip",!0),t}const pi=t=>xe(t)?Dr(t):t,lu=t=>xe(t)?jm(t):t;class Hm{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new su(()=>e(this._value),()=>Do(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Jn(e._value,e._value=e.effect.run())&&Do(e,4),zm(e),e.effect._dirtyLevel>=2&&Do(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function jv(t,e,n=!1){let s,r;const i=le(t);return i?(s=t,r=Ot):(s=t.get,r=t.set),new Hm(s,r,i||!r,n)}function zm(t){var e;qn&&As&&(t=Ae(t),Om(As,(e=t.dep)!=null?e:t.dep=Mm(()=>t.dep=void 0,t instanceof Hm?t:void 0)))}function Do(t,e=4,n){t=Ae(t);const s=t.dep;s&&Vm(s,e)}function vt(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return Wm(t,!1)}function or(t){return Wm(t,!0)}function Wm(t,e){return vt(t)?t:new qv(t,e)}class qv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:pi(e)}get value(){return zm(this),this._value}set value(e){const n=this.__v_isShallow||zo(e)||mi(e);e=n?e:Ae(e),Jn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pi(e),Do(this,4))}}function k(t){return vt(t)?t.value:t}const Hv={get:(t,e,n)=>k(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return vt(r)&&!vt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Km(t){return si(t)?t:new Proxy(t,Hv)}function zv(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=Kv(t,n);return e}class Wv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(Ae(this._object),this._key)}}function Kv(t,e,n){const s=t[e];return vt(s)?s:new Wv(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(t,e,n,s){try{return s?t(...s):t()}catch(r){Ea(r,e,n)}}function Bt(t,e,n,s){if(le(t)){const r=Hn(t,e,n,s);return r&&Im(r)&&r.catch(i=>{Ea(i,e,n)}),r}if(te(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Bt(t[i],e,n,s));return r}}function Ea(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ns(),Hn(c,null,10,[t,o,a]),ss();return}}Gv(t,n,r,s)}function Gv(t,e,n,s=!0){console.error(t)}let gi=!1,ol=!1;const lt=[];let Zt=0;const ar=[];let Vn=null,gs=0;const Gm=Promise.resolve();let uu=null;function Ia(t){const e=uu||Gm;return t?e.then(this?t.bind(this):t):e}function Qv(t){let e=Zt+1,n=lt.length;for(;e<n;){const s=e+n>>>1,r=lt[s],i=_i(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function hu(t){(!lt.length||!lt.includes(t,gi&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?lt.push(t):lt.splice(Qv(t.id),0,t),Qm())}function Qm(){!gi&&!ol&&(ol=!0,uu=Gm.then(Jm))}function Yv(t){const e=lt.indexOf(t);e>Zt&&lt.splice(e,1)}function Jv(t){te(t)?ar.push(...t):(!Vn||!Vn.includes(t,t.allowRecurse?gs+1:gs))&&ar.push(t),Qm()}function jh(t,e,n=gi?Zt+1:0){for(;n<lt.length;n++){const s=lt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;lt.splice(n,1),n--,s()}}}function Ym(t){if(ar.length){const e=[...new Set(ar)].sort((n,s)=>_i(n)-_i(s));if(ar.length=0,Vn){Vn.push(...e);return}for(Vn=e,gs=0;gs<Vn.length;gs++)Vn[gs]();Vn=null,gs=0}}const _i=t=>t.id==null?1/0:t.id,Xv=(t,e)=>{const n=_i(t)-_i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Jm(t){ol=!1,gi=!0,lt.sort(Xv);try{for(Zt=0;Zt<lt.length;Zt++){const e=lt[Zt];e&&e.active!==!1&&Hn(e,null,14)}}finally{Zt=0,lt.length=0,Ym(),gi=!1,uu=null,(lt.length||ar.length)&&Jm()}}function Zv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Pe;f&&(r=n.map(m=>Ge(m)?m.trim():m)),h&&(r=n.map(nl))}let a,c=s[a=Ec(e)]||s[a=Ec(pr(e))];!c&&i&&(c=s[a=Ec(Fs(e))]),c&&Bt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(l,t,6,r)}}function Xm(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!le(t)){const c=l=>{const u=Xm(l,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(xe(t)&&s.set(t,null),null):(te(i)?i.forEach(c=>o[c]=null):Je(o,i),xe(t)&&s.set(t,o),o)}function Ta(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Fs(e))||we(t,e))}let At=null,Aa=null;function Wo(t){const e=At;return At=t,Aa=t&&t.type.__scopeId||null,e}function rs(t){Aa=t}function is(){Aa=null}function e0(t,e=At,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Xh(-1);const i=Wo(e);let o;try{o=t(...r)}finally{Wo(i),s._d&&Xh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Tc(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:m,ctx:E,inheritAttrs:g}=t,y=Wo(t);let w,x;try{if(n.shapeFlag&4){const q=r||s,W=q;w=Jt(l.call(W,q,u,h,m,f,E)),x=a}else{const q=e;w=Jt(q.length>1?q(h,{attrs:a,slots:o,emit:c}):q(h,null)),x=e.props?a:t0(a)}}catch(q){ai.length=0,Ea(q,t,1),w=me(Ps)}let K=w;if(x&&g!==!1){const q=Object.keys(x),{shapeFlag:W}=K;q.length&&W&7&&(i&&q.some(eu)&&(x=n0(x,i)),K=gr(K,x,!1,!0))}return n.dirs&&(K=gr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),w=K,Wo(y),w}const t0=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},n0=(t,e)=>{const n={};for(const s in t)(!eu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function s0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?qh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ta(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?qh(s,o,l):!0:!!o;return!1}function qh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function r0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const i0=Symbol.for("v-ndc"),o0=t=>t.__isSuspense;function a0(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Jv(t)}const c0=Symbol.for("v-scx"),l0=()=>oi(c0);function du(t,e){return fu(t,null,e)}const _o={};function jt(t,e,n){return fu(t,e,n)}function fu(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=Pe){if(e&&i){const L=e;e=(...ie)=>{L(...ie),W()}}const c=ut,l=L=>s===!0?L:_s(L,s===!1?1:void 0);let u,h=!1,f=!1;if(vt(t)?(u=()=>t.value,h=zo(t)):si(t)?(u=()=>l(t),h=!0):te(t)?(f=!0,h=t.some(L=>si(L)||zo(L)),u=()=>t.map(L=>{if(vt(L))return L.value;if(si(L))return l(L);if(le(L))return Hn(L,c,2)})):le(t)?e?u=()=>Hn(t,c,2):u=()=>(m&&m(),Bt(t,c,3,[E])):u=Ot,e&&s){const L=u;u=()=>_s(L())}let m,E=L=>{m=K.onStop=()=>{Hn(L,c,4),m=K.onStop=void 0}},g;if(Sa)if(E=Ot,e?n&&Bt(e,c,3,[u(),f?[]:void 0,E]):u(),r==="sync"){const L=l0();g=L.__watcherHandles||(L.__watcherHandles=[])}else return Ot;let y=f?new Array(t.length).fill(_o):_o;const w=()=>{if(!(!K.active||!K.dirty))if(e){const L=K.run();(s||h||(f?L.some((ie,ge)=>Jn(ie,y[ge])):Jn(L,y)))&&(m&&m(),Bt(e,c,3,[L,y===_o?void 0:f&&y[0]===_o?[]:y,E]),y=L)}else K.run()};w.allowRecurse=!!e;let x;r==="sync"?x=w:r==="post"?x=()=>It(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),x=()=>hu(w));const K=new su(u,Ot,x),q=yv(),W=()=>{K.stop(),q&&tu(q.effects,K)};return e?n?w():y=K.run():r==="post"?It(K.run.bind(K),c&&c.suspense):K.run(),g&&g.push(W),W}function u0(t,e,n){const s=this.proxy,r=Ge(t)?t.includes(".")?Zm(s,t):()=>s[t]:t.bind(s,s);let i;le(e)?i=e:(i=e.handler,n=e);const o=Ui(this),a=fu(r,i.bind(s),n);return o(),a}function Zm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function _s(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,vt(t))_s(t.value,e,n);else if(te(t))for(let s=0;s<t.length;s++)_s(t[s],e,n);else if(Em(t)||ir(t))t.forEach(s=>{_s(s,e,n)});else if(Am(t))for(const s in t)_s(t[s],e,n);return t}function Rs(t,e){if(At===null)return t;const n=Ca(At)||At.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Pe]=e[r];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&_s(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function hs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ns(),Bt(c,n,8,[t.el,a,t,e]),ss())}}/*! #__NO_SIDE_EFFECTS__ */function h0(t,e){return le(t)?Je({name:t.name},e,{setup:t}):t}const No=t=>!!t.type.__asyncLoader,ep=t=>t.type.__isKeepAlive;function d0(t,e){tp(t,"a",e)}function f0(t,e){tp(t,"da",e)}function tp(t,e,n=ut){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ep(r.parent.vnode)&&m0(s,e,n,r),r=r.parent}}function m0(t,e,n,s){const r=ba(e,t,s,!0);Nr(()=>{tu(s[e],r)},n)}function ba(t,e,n=ut,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ns();const a=Ui(n),c=Bt(e,n,t,o);return a(),ss(),c});return s?r.unshift(i):r.push(i),i}}const Rn=t=>(e,n=ut)=>(!Sa||t==="sp")&&ba(t,(...s)=>e(...s),n),p0=Rn("bm"),np=Rn("m"),g0=Rn("bu"),_0=Rn("u"),y0=Rn("bum"),Nr=Rn("um"),v0=Rn("sp"),w0=Rn("rtg"),E0=Rn("rtc");function I0(t,e=ut){ba("ec",t,e)}function Ft(t,e,n,s){let r;const i=n;if(te(t)||Ge(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i)}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i)}}else r=[];return r}const al=t=>t?vp(t)?Ca(t)||t.proxy:al(t.parent):null,ri=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>mu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,hu(t.update)}),$nextTick:t=>t.n||(t.n=Ia.bind(t.proxy)),$watch:t=>u0.bind(t)}),Ac=(t,e)=>t!==Pe&&!t.__isScriptSetup&&we(t,e),T0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ac(s,e))return o[e]=1,s[e];if(r!==Pe&&we(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&we(l,e))return o[e]=3,i[e];if(n!==Pe&&we(n,e))return o[e]=4,n[e];cl&&(o[e]=0)}}const u=ri[e];let h,f;if(u)return e==="$attrs"&&Rt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&we(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,we(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ac(r,e)?(r[e]=n,!0):s!==Pe&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Pe&&we(t,o)||Ac(e,o)||(a=i[0])&&we(a,o)||we(s,o)||we(ri,o)||we(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hh(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cl=!0;function A0(t){const e=mu(t),n=t.proxy,s=t.ctx;cl=!1,e.beforeCreate&&zh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:E,activated:g,deactivated:y,beforeDestroy:w,beforeUnmount:x,destroyed:K,unmounted:q,render:W,renderTracked:L,renderTriggered:ie,errorCaptured:ge,serverPrefetch:je,expose:Fe,inheritAttrs:X,components:J,directives:ee,filters:fe}=e;if(l&&b0(l,s,null),o)for(const he in o){const ue=o[he];le(ue)&&(s[he]=ue.bind(n))}if(r){const he=r.call(n,n);xe(he)&&(t.data=Dr(he))}if(cl=!0,i)for(const he in i){const ue=i[he],qe=le(ue)?ue.bind(n,n):le(ue.get)?ue.get.bind(n,n):Ot,pt=!le(ue)&&le(ue.set)?ue.set.bind(n):Ot,Wt=Ee({get:qe,set:pt});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Et=>Wt.value=Et})}if(a)for(const he in a)sp(a[he],s,n,he);if(c){const he=le(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ue=>{ip(ue,he[ue])})}u&&zh(u,t,"c");function be(he,ue){te(ue)?ue.forEach(qe=>he(qe.bind(n))):ue&&he(ue.bind(n))}if(be(p0,h),be(np,f),be(g0,m),be(_0,E),be(d0,g),be(f0,y),be(I0,ge),be(E0,L),be(w0,ie),be(y0,x),be(Nr,q),be(v0,je),te(Fe))if(Fe.length){const he=t.exposed||(t.exposed={});Fe.forEach(ue=>{Object.defineProperty(he,ue,{get:()=>n[ue],set:qe=>n[ue]=qe})})}else t.exposed||(t.exposed={});W&&t.render===Ot&&(t.render=W),X!=null&&(t.inheritAttrs=X),J&&(t.components=J),ee&&(t.directives=ee)}function b0(t,e,n=Ot){te(t)&&(t=ll(t));for(const s in t){const r=t[s];let i;xe(r)?"default"in r?i=oi(r.from||s,r.default,!0):i=oi(r.from||s):i=oi(r),vt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function zh(t,e,n){Bt(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sp(t,e,n,s){const r=s.includes(".")?Zm(n,s):()=>n[s];if(Ge(t)){const i=e[t];le(i)&&jt(r,i)}else if(le(t))jt(r,t.bind(n));else if(xe(t))if(te(t))t.forEach(i=>sp(i,e,n,s));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&jt(r,i,t)}}function mu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ko(c,l,o,!0)),Ko(c,e,o)),xe(e)&&i.set(e,c),c}function Ko(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ko(t,i,n,!0),r&&r.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=R0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const R0={data:Wh,props:Kh,emits:Kh,methods:Kr,computed:Kr,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Kr,directives:Kr,watch:C0,provide:Wh,inject:S0};function Wh(t,e){return e?t?function(){return Je(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function S0(t,e){return Kr(ll(t),ll(e))}function ll(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function Kr(t,e){return t?Je(Object.create(null),t,e):e}function Kh(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Je(Object.create(null),Hh(t),Hh(e??{})):e}function C0(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=_t(t[s],e[s]);return n}function rp(){return{app:null,config:{isNativeTag:iv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P0=0;function k0(t,e){return function(s,r=null){le(s)||(s=Je({},s)),r!=null&&!xe(r)&&(r=null);const i=rp(),o=new WeakSet;let a=!1;const c=i.app={_uid:P0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ew,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&le(l.install)?(o.add(l),l.install(c,...u)):le(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=me(s,r);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ca(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=ii;ii=c;try{return l()}finally{ii=u}}};return c}}let ii=null;function ip(t,e){if(ut){let n=ut.provides;const s=ut.parent&&ut.parent.provides;s===n&&(n=ut.provides=Object.create(s)),n[t]=e}}function oi(t,e,n=!1){const s=ut||At;if(s||ii){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ii._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&le(e)?e.call(s&&s.proxy):e}}const op={},ap=()=>Object.create(op),cp=t=>Object.getPrototypeOf(t)===op;function D0(t,e,n,s=!1){const r={},i=ap();t.propsDefaults=Object.create(null),lp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:$v(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function N0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ta(t.emitsOptions,f))continue;const m=e[f];if(c)if(we(i,f))m!==i[f]&&(i[f]=m,l=!0);else{const E=pr(f);r[E]=ul(c,a,E,m,t,!1)}else m!==i[f]&&(i[f]=m,l=!0)}}}else{lp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!we(e,h)&&((u=Fs(h))===h||!we(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ul(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!we(e,h))&&(delete i[h],l=!0)}l&&vn(t.attrs,"set","")}function lp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ni(c))continue;const l=e[c];let u;r&&we(r,u=pr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ta(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Ae(n),l=a||Pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ul(r,c,h,l[h],t,!we(l,h))}}return o}function ul(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&le(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=Ui(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Fs(n))&&(s=!0))}return s}function up(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!le(t)){const u=h=>{c=!0;const[f,m]=up(h,e,!0);Je(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return xe(t)&&s.set(t,rr),rr;if(te(i))for(let u=0;u<i.length;u++){const h=pr(i[u]);Gh(h)&&(o[h]=Pe)}else if(i)for(const u in i){const h=pr(u);if(Gh(h)){const f=i[u],m=o[h]=te(f)||le(f)?{type:f}:Je({},f);if(m){const E=Jh(Boolean,m.type),g=Jh(String,m.type);m[0]=E>-1,m[1]=g<0||E<g,(E>-1||we(m,"default"))&&a.push(h)}}}const l=[o,a];return xe(t)&&s.set(t,l),l}function Gh(t){return t[0]!=="$"&&!ni(t)}function Qh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Yh(t,e){return Qh(t)===Qh(e)}function Jh(t,e){return te(e)?e.findIndex(n=>Yh(n,t)):le(e)&&Yh(e,t)?0:-1}const hp=t=>t[0]==="_"||t==="$stable",pu=t=>te(t)?t.map(Jt):[Jt(t)],O0=(t,e,n)=>{if(e._n)return e;const s=e0((...r)=>pu(e(...r)),n);return s._c=!1,s},dp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(hp(r))continue;const i=t[r];if(le(i))e[r]=O0(r,i,s);else if(i!=null){const o=pu(i);e[r]=()=>o}}},fp=(t,e)=>{const n=pu(e);t.slots.default=()=>n},V0=(t,e)=>{const n=t.slots=ap();if(t.vnode.shapeFlag&32){const s=e._;s?(Je(n,e),Rm(n,"_",s,!0)):dp(e,n)}else e&&fp(t,e)},M0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,dp(e,r)),o=e}else e&&(fp(t,e),o={default:1});if(i)for(const a in r)!hp(a)&&o[a]==null&&delete r[a]};function hl(t,e,n,s,r=!1){if(te(t)){t.forEach((f,m)=>hl(f,e&&(te(e)?e[m]:e),n,s,r));return}if(No(s)&&!r)return;const i=s.shapeFlag&4?Ca(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ge(l)?(u[l]=null,we(h,l)&&(h[l]=null)):vt(l)&&(l.value=null)),le(c))Hn(c,a,12,[o,u]);else{const f=Ge(c),m=vt(c);if(f||m){const E=()=>{if(t.f){const g=f?we(h,c)?h[c]:u[c]:c.value;r?te(g)&&tu(g,i):te(g)?g.includes(i)||g.push(i):f?(u[c]=[i],we(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,we(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,It(E,n)):E()}}}const It=a0;function x0(t){return L0(t)}function L0(t,e){const n=Sm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Ot,insertStaticContent:E}=t,g=(p,_,T,S=null,R=null,O=null,$=void 0,V=null,F=!!_.dynamicChildren)=>{if(p===_)return;p&&!qr(p,_)&&(S=Ks(p),Et(p,R,O,!0),p=null),_.patchFlag===-2&&(F=!1,_.dynamicChildren=null);const{type:C,ref:H,shapeFlag:v}=_;switch(C){case Ra:y(p,_,T,S);break;case Ps:w(p,_,T,S);break;case Rc:p==null&&x(_,T,S,$);break;case ke:J(p,_,T,S,R,O,$,V,F);break;default:v&1?W(p,_,T,S,R,O,$,V,F):v&6?ee(p,_,T,S,R,O,$,V,F):(v&64||v&128)&&C.process(p,_,T,S,R,O,$,V,F,Dn)}H!=null&&R&&hl(H,p&&p.ref,O,_||p,!_)},y=(p,_,T,S)=>{if(p==null)s(_.el=a(_.children),T,S);else{const R=_.el=p.el;_.children!==p.children&&l(R,_.children)}},w=(p,_,T,S)=>{p==null?s(_.el=c(_.children||""),T,S):_.el=p.el},x=(p,_,T,S)=>{[p.el,p.anchor]=E(p.children,_,T,S,p.el,p.anchor)},K=({el:p,anchor:_},T,S)=>{let R;for(;p&&p!==_;)R=f(p),s(p,T,S),p=R;s(_,T,S)},q=({el:p,anchor:_})=>{let T;for(;p&&p!==_;)T=f(p),r(p),p=T;r(_)},W=(p,_,T,S,R,O,$,V,F)=>{_.type==="svg"?$="svg":_.type==="math"&&($="mathml"),p==null?L(_,T,S,R,O,$,V,F):je(p,_,R,O,$,V,F)},L=(p,_,T,S,R,O,$,V)=>{let F,C;const{props:H,shapeFlag:v,transition:I,dirs:A}=p;if(F=p.el=o(p.type,O,H&&H.is,H),v&8?u(F,p.children):v&16&&ge(p.children,F,null,S,R,bc(p,O),$,V),A&&hs(p,null,S,"created"),ie(F,p,p.scopeId,$,S),H){for(const se in H)se!=="value"&&!ni(se)&&i(F,se,null,H[se],O,p.children,S,R,xt);"value"in H&&i(F,"value",null,H.value,O),(C=H.onVnodeBeforeMount)&&Qt(C,S,p)}A&&hs(p,null,S,"beforeMount");const j=F0(R,I);j&&I.beforeEnter(F),s(F,_,T),((C=H&&H.onVnodeMounted)||j||A)&&It(()=>{C&&Qt(C,S,p),j&&I.enter(F),A&&hs(p,null,S,"mounted")},R)},ie=(p,_,T,S,R)=>{if(T&&m(p,T),S)for(let O=0;O<S.length;O++)m(p,S[O]);if(R){let O=R.subTree;if(_===O){const $=R.vnode;ie(p,$,$.scopeId,$.slotScopeIds,R.parent)}}},ge=(p,_,T,S,R,O,$,V,F=0)=>{for(let C=F;C<p.length;C++){const H=p[C]=V?Mn(p[C]):Jt(p[C]);g(null,H,_,T,S,R,O,$,V)}},je=(p,_,T,S,R,O,$)=>{const V=_.el=p.el;let{patchFlag:F,dynamicChildren:C,dirs:H}=_;F|=p.patchFlag&16;const v=p.props||Pe,I=_.props||Pe;let A;if(T&&ds(T,!1),(A=I.onVnodeBeforeUpdate)&&Qt(A,T,_,p),H&&hs(_,p,T,"beforeUpdate"),T&&ds(T,!0),C?Fe(p.dynamicChildren,C,V,T,S,bc(_,R),O):$||ue(p,_,V,null,T,S,bc(_,R),O,!1),F>0){if(F&16)X(V,_,v,I,T,S,R);else if(F&2&&v.class!==I.class&&i(V,"class",null,I.class,R),F&4&&i(V,"style",v.style,I.style,R),F&8){const j=_.dynamicProps;for(let se=0;se<j.length;se++){const ae=j[se],Ie=v[ae],Ue=I[ae];(Ue!==Ie||ae==="value")&&i(V,ae,Ie,Ue,R,p.children,T,S,xt)}}F&1&&p.children!==_.children&&u(V,_.children)}else!$&&C==null&&X(V,_,v,I,T,S,R);((A=I.onVnodeUpdated)||H)&&It(()=>{A&&Qt(A,T,_,p),H&&hs(_,p,T,"updated")},S)},Fe=(p,_,T,S,R,O,$)=>{for(let V=0;V<_.length;V++){const F=p[V],C=_[V],H=F.el&&(F.type===ke||!qr(F,C)||F.shapeFlag&70)?h(F.el):T;g(F,C,H,null,S,R,O,$,!0)}},X=(p,_,T,S,R,O,$)=>{if(T!==S){if(T!==Pe)for(const V in T)!ni(V)&&!(V in S)&&i(p,V,T[V],null,$,_.children,R,O,xt);for(const V in S){if(ni(V))continue;const F=S[V],C=T[V];F!==C&&V!=="value"&&i(p,V,C,F,$,_.children,R,O,xt)}"value"in S&&i(p,"value",T.value,S.value,$)}},J=(p,_,T,S,R,O,$,V,F)=>{const C=_.el=p?p.el:a(""),H=_.anchor=p?p.anchor:a("");let{patchFlag:v,dynamicChildren:I,slotScopeIds:A}=_;A&&(V=V?V.concat(A):A),p==null?(s(C,T,S),s(H,T,S),ge(_.children||[],T,H,R,O,$,V,F)):v>0&&v&64&&I&&p.dynamicChildren?(Fe(p.dynamicChildren,I,T,R,O,$,V),(_.key!=null||R&&_===R.subTree)&&mp(p,_,!0)):ue(p,_,T,H,R,O,$,V,F)},ee=(p,_,T,S,R,O,$,V,F)=>{_.slotScopeIds=V,p==null?_.shapeFlag&512?R.ctx.activate(_,T,S,$,F):fe(_,T,S,R,O,$,F):Ve(p,_,F)},fe=(p,_,T,S,R,O,$)=>{const V=p.component=W0(p,S,R);if(ep(p)&&(V.ctx.renderer=Dn),G0(V),V.asyncDep){if(R&&R.registerDep(V,be),!p.el){const F=V.subTree=me(Ps);w(null,F,_,T)}}else be(V,p,_,T,R,O,$)},Ve=(p,_,T)=>{const S=_.component=p.component;if(s0(p,_,T))if(S.asyncDep&&!S.asyncResolved){he(S,_,T);return}else S.next=_,Yv(S.update),S.effect.dirty=!0,S.update();else _.el=p.el,S.vnode=_},be=(p,_,T,S,R,O,$)=>{const V=()=>{if(p.isMounted){let{next:H,bu:v,u:I,parent:A,vnode:j}=p;{const Lt=pp(p);if(Lt){H&&(H.el=j.el,he(p,H,$)),Lt.asyncDep.then(()=>{p.isUnmounted||V()});return}}let se=H,ae;ds(p,!1),H?(H.el=j.el,he(p,H,$)):H=j,v&&ko(v),(ae=H.props&&H.props.onVnodeBeforeUpdate)&&Qt(ae,A,H,j),ds(p,!0);const Ie=Tc(p),Ue=p.subTree;p.subTree=Ie,g(Ue,Ie,h(Ue.el),Ks(Ue),p,R,O),H.el=Ie.el,se===null&&r0(p,Ie.el),I&&It(I,R),(ae=H.props&&H.props.onVnodeUpdated)&&It(()=>Qt(ae,A,H,j),R)}else{let H;const{el:v,props:I}=_,{bm:A,m:j,parent:se}=p,ae=No(_);if(ds(p,!1),A&&ko(A),!ae&&(H=I&&I.onVnodeBeforeMount)&&Qt(H,se,_),ds(p,!0),v&&uo){const Ie=()=>{p.subTree=Tc(p),uo(v,p.subTree,p,R,null)};ae?_.type.__asyncLoader().then(()=>!p.isUnmounted&&Ie()):Ie()}else{const Ie=p.subTree=Tc(p);g(null,Ie,T,S,p,R,O),_.el=Ie.el}if(j&&It(j,R),!ae&&(H=I&&I.onVnodeMounted)){const Ie=_;It(()=>Qt(H,se,Ie),R)}(_.shapeFlag&256||se&&No(se.vnode)&&se.vnode.shapeFlag&256)&&p.a&&It(p.a,R),p.isMounted=!0,_=T=S=null}},F=p.effect=new su(V,Ot,()=>hu(C),p.scope),C=p.update=()=>{F.dirty&&F.run()};C.id=p.uid,ds(p,!0),C()},he=(p,_,T)=>{_.component=p;const S=p.vnode.props;p.vnode=_,p.next=null,N0(p,_.props,S,T),M0(p,_.children,T),ns(),jh(p),ss()},ue=(p,_,T,S,R,O,$,V,F=!1)=>{const C=p&&p.children,H=p?p.shapeFlag:0,v=_.children,{patchFlag:I,shapeFlag:A}=_;if(I>0){if(I&128){pt(C,v,T,S,R,O,$,V,F);return}else if(I&256){qe(C,v,T,S,R,O,$,V,F);return}}A&8?(H&16&&xt(C,R,O),v!==C&&u(T,v)):H&16?A&16?pt(C,v,T,S,R,O,$,V,F):xt(C,R,O,!0):(H&8&&u(T,""),A&16&&ge(v,T,S,R,O,$,V,F))},qe=(p,_,T,S,R,O,$,V,F)=>{p=p||rr,_=_||rr;const C=p.length,H=_.length,v=Math.min(C,H);let I;for(I=0;I<v;I++){const A=_[I]=F?Mn(_[I]):Jt(_[I]);g(p[I],A,T,null,R,O,$,V,F)}C>H?xt(p,R,O,!0,!1,v):ge(_,T,S,R,O,$,V,F,v)},pt=(p,_,T,S,R,O,$,V,F)=>{let C=0;const H=_.length;let v=p.length-1,I=H-1;for(;C<=v&&C<=I;){const A=p[C],j=_[C]=F?Mn(_[C]):Jt(_[C]);if(qr(A,j))g(A,j,T,null,R,O,$,V,F);else break;C++}for(;C<=v&&C<=I;){const A=p[v],j=_[I]=F?Mn(_[I]):Jt(_[I]);if(qr(A,j))g(A,j,T,null,R,O,$,V,F);else break;v--,I--}if(C>v){if(C<=I){const A=I+1,j=A<H?_[A].el:S;for(;C<=I;)g(null,_[C]=F?Mn(_[C]):Jt(_[C]),T,j,R,O,$,V,F),C++}}else if(C>I)for(;C<=v;)Et(p[C],R,O,!0),C++;else{const A=C,j=C,se=new Map;for(C=j;C<=I;C++){const gt=_[C]=F?Mn(_[C]):Jt(_[C]);gt.key!=null&&se.set(gt.key,C)}let ae,Ie=0;const Ue=I-j+1;let Lt=!1,Kt=0;const Gt=new Array(Ue);for(C=0;C<Ue;C++)Gt[C]=0;for(C=A;C<=v;C++){const gt=p[C];if(Ie>=Ue){Et(gt,R,O,!0);continue}let kt;if(gt.key!=null)kt=se.get(gt.key);else for(ae=j;ae<=I;ae++)if(Gt[ae-j]===0&&qr(gt,_[ae])){kt=ae;break}kt===void 0?Et(gt,R,O,!0):(Gt[kt-j]=C+1,kt>=Kt?Kt=kt:Lt=!0,g(gt,_[kt],T,null,R,O,$,V,F),Ie++)}const Gs=Lt?U0(Gt):rr;for(ae=Gs.length-1,C=Ue-1;C>=0;C--){const gt=j+C,kt=_[gt],Oh=gt+1<H?_[gt+1].el:S;Gt[C]===0?g(null,kt,T,Oh,R,O,$,V,F):Lt&&(ae<0||C!==Gs[ae]?Wt(kt,T,Oh,2):ae--)}}},Wt=(p,_,T,S,R=null)=>{const{el:O,type:$,transition:V,children:F,shapeFlag:C}=p;if(C&6){Wt(p.component.subTree,_,T,S);return}if(C&128){p.suspense.move(_,T,S);return}if(C&64){$.move(p,_,T,Dn);return}if($===ke){s(O,_,T);for(let v=0;v<F.length;v++)Wt(F[v],_,T,S);s(p.anchor,_,T);return}if($===Rc){K(p,_,T);return}if(S!==2&&C&1&&V)if(S===0)V.beforeEnter(O),s(O,_,T),It(()=>V.enter(O),R);else{const{leave:v,delayLeave:I,afterLeave:A}=V,j=()=>s(O,_,T),se=()=>{v(O,()=>{j(),A&&A()})};I?I(O,j,se):se()}else s(O,_,T)},Et=(p,_,T,S=!1,R=!1)=>{const{type:O,props:$,ref:V,children:F,dynamicChildren:C,shapeFlag:H,patchFlag:v,dirs:I}=p;if(V!=null&&hl(V,null,T,p,!0),H&256){_.ctx.deactivate(p);return}const A=H&1&&I,j=!No(p);let se;if(j&&(se=$&&$.onVnodeBeforeUnmount)&&Qt(se,_,p),H&6)wc(p.component,T,S);else{if(H&128){p.suspense.unmount(T,S);return}A&&hs(p,null,_,"beforeUnmount"),H&64?p.type.remove(p,_,T,R,Dn,S):C&&(O!==ke||v>0&&v&64)?xt(C,_,T,!1,!0):(O===ke&&v&384||!R&&H&16)&&xt(F,_,T),S&&ao(p)}(j&&(se=$&&$.onVnodeUnmounted)||A)&&It(()=>{se&&Qt(se,_,p),A&&hs(p,null,_,"unmounted")},T)},ao=p=>{const{type:_,el:T,anchor:S,transition:R}=p;if(_===ke){kn(T,S);return}if(_===Rc){q(p);return}const O=()=>{r(T),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:$,delayLeave:V}=R,F=()=>$(T,O);V?V(p.el,O,F):F()}else O()},kn=(p,_)=>{let T;for(;p!==_;)T=f(p),r(p),p=T;r(_)},wc=(p,_,T)=>{const{bum:S,scope:R,update:O,subTree:$,um:V}=p;S&&ko(S),R.stop(),O&&(O.active=!1,Et($,p,_,T)),V&&It(V,_),It(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},xt=(p,_,T,S=!1,R=!1,O=0)=>{for(let $=O;$<p.length;$++)Et(p[$],_,T,S,R)},Ks=p=>p.shapeFlag&6?Ks(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el);let jr=!1;const co=(p,_,T)=>{p==null?_._vnode&&Et(_._vnode,null,null,!0):g(_._vnode||null,p,_,null,null,null,T),jr||(jr=!0,jh(),Ym(),jr=!1),_._vnode=p},Dn={p:g,um:Et,m:Wt,r:ao,mt:fe,mc:ge,pc:ue,pbc:Fe,n:Ks,o:t};let lo,uo;return{render:co,hydrate:lo,createApp:k0(co,lo)}}function bc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ds({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function F0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mp(t,e,n=!1){const s=t.children,r=e.children;if(te(s)&&te(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Mn(r[i]),a.el=o.el),n||mp(o,a)),a.type===Ra&&(a.el=o.el)}}function U0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}const $0=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),Ps=Symbol.for("v-cmt"),Rc=Symbol.for("v-stc"),ai=[];let Ut=null;function M(t=!1){ai.push(Ut=t?null:[])}function B0(){ai.pop(),Ut=ai[ai.length-1]||null}let yi=1;function Xh(t){yi+=t}function gp(t){return t.dynamicChildren=yi>0?Ut||rr:null,B0(),yi>0&&Ut&&Ut.push(t),t}function U(t,e,n,s,r,i){return gp(d(t,e,n,s,r,i,!0))}function ys(t,e,n,s,r){return gp(me(t,e,n,s,r,!0))}function dl(t){return t?t.__v_isVNode===!0:!1}function qr(t,e){return t.type===e.type&&t.key===e.key}const _p=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||vt(t)||le(t)?{i:At,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,s=0,r=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&Oo(e),scopeId:Aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:At};return a?(gu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),yi>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const me=j0;function j0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===i0)&&(t=Ps),dl(t)){const a=gr(t,e,!0);return n&&gu(a,n),yi>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(X0(t)&&(t=t.__vccOpts),e){e=q0(e);let{class:a,style:c}=e;a&&!Ge(a)&&(e.class=de(a)),xe(c)&&(qm(c)&&!te(c)&&(c=Je({},c)),e.style=kr(c))}const o=Ge(t)?1:o0(t)?128:$0(t)?64:xe(t)?4:le(t)?2:0;return d(t,e,n,s,r,o,i,!0)}function q0(t){return t?qm(t)||cp(t)?Je({},t):t:null}function gr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?yp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&_p(l),ref:e&&e.ref?n&&i?te(i)?i.concat(Oo(e)):[i,Oo(e)]:Oo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&(u.transition=c.clone(u)),u}function tn(t=" ",e=0){return me(Ra,null,t,e)}function Te(t="",e=!1){return e?(M(),ys(Ps,null,t)):me(Ps,null,t)}function Jt(t){return t==null||typeof t=="boolean"?me(Ps):te(t)?me(ke,null,t.slice()):typeof t=="object"?Mn(t):me(Ra,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function gu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),gu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!cp(e)?e._ctx=At:r===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:At},n=32):(e=String(e),s&64?(n=16,e=[tn(e)]):n=8);t.children=e,t.shapeFlag|=n}function yp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=de([e.class,s.class]));else if(r==="style")e.style=kr([e.style,s.style]);else if(_a(r)){const i=e[r],o=s[r];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Qt(t,e,n,s=null){Bt(t,e,7,[n,s])}const H0=rp();let z0=0;function W0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||H0,i={uid:z0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new km(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(s,r),emitsOptions:Xm(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zv.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const K0=()=>ut||At;let Go,fl;{const t=Sm(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Go=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),fl=e("__VUE_SSR_SETTERS__",n=>Sa=n)}const Ui=t=>{const e=ut;return Go(t),t.scope.on(),()=>{t.scope.off(),Go(e)}},Zh=()=>{ut&&ut.scope.off(),Go(null)};function vp(t){return t.vnode.shapeFlag&4}let Sa=!1;function G0(t,e=!1){e&&fl(e);const{props:n,children:s}=t.vnode,r=vp(t);D0(t,n,r,e),V0(t,s);const i=r?Q0(t,e):void 0;return e&&fl(!1),i}function Q0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,T0);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?J0(t):null,i=Ui(t);ns();const o=Hn(s,t,0,[t.props,r]);if(ss(),i(),Im(o)){if(o.then(Zh,Zh),e)return o.then(a=>{ed(t,a,e)}).catch(a=>{Ea(a,t,0)});t.asyncDep=o}else ed(t,o,e)}else wp(t,e)}function ed(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Km(e)),wp(t,n)}let td;function wp(t,e,n){const s=t.type;if(!t.render){if(!e&&td&&!s.render){const r=s.template||mu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=td(r,l)}}t.render=s.render||Ot}{const r=Ui(t);ns();try{A0(t)}finally{ss(),r()}}}const Y0={get(t,e){return Rt(t,"get",""),t[e]}};function J0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Y0),slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Km(Bv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ri)return ri[n](t)},has(e,n){return n in e||n in ri}}))}function X0(t){return le(t)&&"__vccOpts"in t}const Ee=(t,e)=>jv(t,e,Sa);function Z0(t,e,n){const s=arguments.length;return s===2?xe(e)&&!te(e)?dl(e)?me(t,null,[e]):me(t,e):me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&dl(n)&&(n=[n]),me(t,e,n))}const ew="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const tw="http://www.w3.org/2000/svg",nw="http://www.w3.org/1998/Math/MathML",xn=typeof document<"u"?document:null,nd=xn&&xn.createElement("template"),sw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?xn.createElementNS(tw,t):e==="mathml"?xn.createElementNS(nw,t):xn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{nd.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=nd.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},rw=Symbol("_vtc");function iw(t,e,n){const s=t[rw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sd=Symbol("_vod"),ow=Symbol("_vsh"),aw=Symbol(""),cw=/(^|;)\s*display\s*:/;function lw(t,e,n){const s=t.style,r=Ge(n);let i=!1;if(n&&!r){if(e)if(Ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vo(s,a,"")}else for(const o in e)n[o]==null&&Vo(s,o,"");for(const o in n)o==="display"&&(i=!0),Vo(s,o,n[o])}else if(r){if(e!==n){const o=s[aw];o&&(n+=";"+o),s.cssText=n,i=cw.test(n)}}else e&&t.removeAttribute("style");sd in t&&(t[sd]=i?s.display:"",t[ow]&&(s.display="none"))}const rd=/\s*!important$/;function Vo(t,e,n){if(te(n))n.forEach(s=>Vo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=uw(t,e);rd.test(n)?t.setProperty(Fs(s),n.replace(rd,""),"important"):t[s]=n}}const id=["Webkit","Moz","ms"],Sc={};function uw(t,e){const n=Sc[e];if(n)return n;let s=pr(e);if(s!=="filter"&&s in t)return Sc[e]=s;s=bm(s);for(let r=0;r<id.length;r++){const i=id[r]+s;if(i in t)return Sc[e]=i}return e}const od="http://www.w3.org/1999/xlink";function hw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n);else{const i=pv(e);n==null||i&&!Cm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function dw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Cm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Zs(t,e,n,s){t.addEventListener(e,n,s)}function fw(t,e,n,s){t.removeEventListener(e,n,s)}const ad=Symbol("_vei");function mw(t,e,n,s,r=null){const i=t[ad]||(t[ad]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=pw(e);if(s){const l=i[e]=yw(s,r);Zs(t,a,l,c)}else o&&(fw(t,a,o,c),i[e]=void 0)}}const cd=/(?:Once|Passive|Capture)$/;function pw(t){let e;if(cd.test(t)){e={};let s;for(;s=t.match(cd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fs(t.slice(2)),e]}let Cc=0;const gw=Promise.resolve(),_w=()=>Cc||(gw.then(()=>Cc=0),Cc=Date.now());function yw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Bt(vw(s,n.value),e,5,[s])};return n.value=t,n.attached=_w(),n}function vw(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ww=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?iw(t,s,l):e==="style"?lw(t,n,s):_a(e)?eu(e)||mw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ew(t,e,s,l))?dw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),hw(t,e,s,l))};function Ew(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ld(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ld(e)&&Ge(n)?!1:e in t}const ud=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>ko(e,n):e};function Iw(t){t.target.composing=!0}function hd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pc=Symbol("_assign"),Ss={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Pc]=ud(r);const i=s||r.props&&r.props.type==="number";Zs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=nl(a)),t[Pc](a)}),n&&Zs(t,"change",()=>{t.value=t.value.trim()}),e||(Zs(t,"compositionstart",Iw),Zs(t,"compositionend",hd),Zs(t,"change",hd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Pc]=ud(i),t.composing)return;const o=(r||t.type==="number")&&!/^0\d/.test(t.value)?nl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Tw=["ctrl","shift","alt","meta"],Aw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tw.some(n=>t[`${n}Key`]&&!e.includes(n))},We=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=Aw[e[o]];if(a&&a(r,e))return}return t(r,...i)})},bw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ep=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Fs(r.key);if(e.some(o=>o===i||bw[o]===i))return t(r)})},Rw=Je({patchProp:ww},sw);let dd;function Sw(){return dd||(dd=x0(Rw))}const Cw=(...t)=>{const e=Sw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=kw(s);if(!r)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Pw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Pw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kw(t){return Ge(t)?document.querySelector(t):t}var fd={};/**
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
 */const Ip=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Dw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(n[u],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Nw;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const E=l<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ow=function(t){const e=Ip(t);return Tp.encodeByteArray(e,!0)},Qo=function(t){return Ow(t).replace(/\./g,"")},Ap=function(t){try{return Tp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mw=()=>Vw().__FIREBASE_DEFAULTS__,xw=()=>{if(typeof process>"u"||typeof fd>"u")return;const t=fd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ap(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return Mw()||xw()||Lw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=Pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fw=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Rp=()=>{var t;return(t=Pa())===null||t===void 0?void 0:t.config},Sp=t=>{var e;return(e=Pa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function jw(){var t;const e=(t=Pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zw(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ww(){return!jw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kw(){try{return typeof indexedDB=="object"}catch{return!1}}function Gw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qw="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qw,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Yw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Sn(r,a,s)}}function Yw(t,e){return t.replace(Jw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jw=/\{\$([^}]+)}/g;function Xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _r(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(md(i)&&md(o)){if(!_r(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function md(t){return t!==null&&typeof t=="object"}/**
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
 */function Bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zw(t,e){const n=new eE(t,e);return n.subscribe.bind(n)}class eE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=kc),r.error===void 0&&(r.error=kc),r.complete===void 0&&(r.complete=kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class ks{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class nE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Uw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rE(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sE(t){return t===ms?void 0:t}function rE(t){return t.instantiationMode==="EAGER"}/**
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
 */class iE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const oE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},aE=_e.INFO,cE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},lE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=cE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const uE=(t,e)=>e.some(n=>t instanceof n);let pd,gd;function hE(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dE(){return gd||(gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cp=new WeakMap,ml=new WeakMap,Pp=new WeakMap,Dc=new WeakMap,yu=new WeakMap;function fE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cp.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function mE(t){if(ml.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pE(t){pl=t(pl)}function gE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Nc(this),e,...n);return Pp.set(s,e.sort?e.sort():[e]),zn(s)}:dE().includes(t)?function(...e){return t.apply(Nc(this),e),zn(Cp.get(this))}:function(...e){return zn(t.apply(Nc(this),e))}}function _E(t){return typeof t=="function"?gE(t):(t instanceof IDBTransaction&&mE(t),uE(t,hE())?new Proxy(t,pl):t)}function zn(t){if(t instanceof IDBRequest)return fE(t);if(Dc.has(t))return Dc.get(t);const e=_E(t);return e!==t&&(Dc.set(t,e),yu.set(e,t)),e}const Nc=t=>yu.get(t);function yE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=zn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(zn(o.result),c.oldVersion,c.newVersion,zn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const vE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],Oc=new Map;function _d(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=wE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Oc.set(e,i),i}pE(t=>({...t,get:(e,n,s)=>_d(e,n)||t.get(e,n,s),has:(e,n)=>!!_d(e,n)||t.has(e,n)}));/**
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
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function IE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",yd="0.10.2";/**
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
 */const Ds=new _u("@firebase/app"),TE="@firebase/app-compat",AE="@firebase/analytics-compat",bE="@firebase/analytics",RE="@firebase/app-check-compat",SE="@firebase/app-check",CE="@firebase/auth",PE="@firebase/auth-compat",kE="@firebase/database",DE="@firebase/database-compat",NE="@firebase/functions",OE="@firebase/functions-compat",VE="@firebase/installations",ME="@firebase/installations-compat",xE="@firebase/messaging",LE="@firebase/messaging-compat",FE="@firebase/performance",UE="@firebase/performance-compat",$E="@firebase/remote-config",BE="@firebase/remote-config-compat",jE="@firebase/storage",qE="@firebase/storage-compat",HE="@firebase/firestore",zE="@firebase/firestore-compat",WE="firebase",KE="10.11.1";/**
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
 */const _l="[DEFAULT]",GE={[gl]:"fire-core",[TE]:"fire-core-compat",[bE]:"fire-analytics",[AE]:"fire-analytics-compat",[SE]:"fire-app-check",[RE]:"fire-app-check-compat",[CE]:"fire-auth",[PE]:"fire-auth-compat",[kE]:"fire-rtdb",[DE]:"fire-rtdb-compat",[NE]:"fire-fn",[OE]:"fire-fn-compat",[VE]:"fire-iid",[ME]:"fire-iid-compat",[xE]:"fire-fcm",[LE]:"fire-fcm-compat",[FE]:"fire-perf",[UE]:"fire-perf-compat",[$E]:"fire-rc",[BE]:"fire-rc-compat",[jE]:"fire-gcs",[qE]:"fire-gcs-compat",[HE]:"fire-fst",[zE]:"fire-fst-compat","fire-js":"fire-js",[WE]:"fire-js-all"};/**
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
 */const Yo=new Map,QE=new Map,yl=new Map;function vd(t,e){try{t.container.addComponent(e)}catch(n){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yr(t){const e=t.name;if(yl.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of Yo.values())vd(n,t);for(const n of QE.values())vd(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t.settings!==void 0}/**
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
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new $i("app","Firebase",YE);/**
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
 */class JE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=KE;function kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_l,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Wn.create("bad-app-name",{appName:String(r)});if(n||(n=Rp()),!n)throw Wn.create("no-options");const i=Yo.get(r);if(i){if(_r(n,i.options)&&_r(s,i.config))return i;throw Wn.create("duplicate-app",{appName:r})}const o=new iE(r);for(const c of yl.values())o.addComponent(c);const a=new JE(n,s,o);return Yo.set(r,a),a}function Dp(t=_l){const e=Yo.get(t);if(!e&&t===_l&&Rp())return kp();if(!e)throw Wn.create("no-app",{appName:t});return e}function Kn(t,e,n){var s;let r=(s=GE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(a.join(" "));return}yr(new ks(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const XE="firebase-heartbeat-database",ZE=1,vi="firebase-heartbeat-store";let Vc=null;function Np(){return Vc||(Vc=yE(XE,ZE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Vc}async function eI(t){try{const n=(await Np()).transaction(vi),s=await n.objectStore(vi).get(Op(t));return await n.done,s}catch(e){if(e instanceof Sn)Ds.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ds.warn(n.message)}}}async function wd(t,e){try{const s=(await Np()).transaction(vi,"readwrite");await s.objectStore(vi).put(e,Op(t)),await s.done}catch(n){if(n instanceof Sn)Ds.warn(n.message);else{const s=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ds.warn(s.message)}}}function Op(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tI=1024,nI=30*24*60*60*1e3;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:s,unsentEntries:r}=rI(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ed(){return new Date().toISOString().substring(0,10)}function rI(t,e=tI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Id(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Id(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kw()?Gw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Id(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oI(t){yr(new ks("platform-logger",e=>new EE(e),"PRIVATE")),yr(new ks("heartbeat",e=>new sI(e),"PRIVATE")),Kn(gl,yd,t),Kn(gl,yd,"esm2017"),Kn("fire-js","")}oI("");function wu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Vp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aI=Vp,Mp=new $i("auth","Firebase",Vp());/**
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
 */const Jo=new _u("@firebase/auth");function cI(t,...e){Jo.logLevel<=_e.WARN&&Jo.warn(`Auth (${Or}): ${t}`,...e)}function Mo(t,...e){Jo.logLevel<=_e.ERROR&&Jo.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw Iu(t,...e)}function qt(t,...e){return Iu(t,...e)}function Eu(t,e,n){const s=Object.assign(Object.assign({},aI()),{[e]:n});return new $i("auth","Firebase",s).create(e,{appName:t.name})}function wn(t){return Eu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Mt(t,"argument-error"),Eu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mp.create(t,...e)}function Z(t,e,...n){if(!t)throw Iu(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function En(t,e){t||mn(e)}/**
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
 */function vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uI(){return Td()==="http:"||Td()==="https:"}function Td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uI()||qw()||"connection"in navigator)?navigator.onLine:!0}function dI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=Bw()||Hw()}get(){return hI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tu(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mI=new ji(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,s,r={}){return Lp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Bi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),xp.fetch()(Fp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Lp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},fI),e);try{const r=new gI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Eu(t,u,l);Mt(t,u)}}catch(r){if(r instanceof Sn)throw r;Mt(t,"network-request-failed",{message:String(r)})}}async function qi(t,e,n,s,r={}){const i=await Cn(t,e,n,s,r);return"mfaPendingCredential"in i&&Mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Tu(t.config,r):`${t.config.apiScheme}://${r}`}function pI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),mI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=qt(t,e,s);return r.customData._tokenResponse=n,r}function Ad(t){return t!==void 0&&t.enterprise!==void 0}class _I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yI(t,e){return Cn(t,"GET","/v2/recaptchaConfig",os(t,e))}/**
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
 */async function vI(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function Up(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wI(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=Au(s);Z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ci(Mc(r.auth_time)),issuedAtTime:ci(Mc(r.iat)),expirationTime:ci(Mc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function Au(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ap(n);return r?JSON.parse(r):(Mo("Failed to decode base64 JWT payload"),null)}catch(r){return Mo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bd(t){const e=Au(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&EI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function EI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class II{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await vr(t,Up(n,{idToken:s}));Z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$p(i.providerUserInfo):[],a=AI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function TI(t){const e=$e(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function $p(t){return t.map(e=>{var{providerId:n}=e,s=wu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function bI(t,e){const n=await Lp(t,{},async()=>{const s=Bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Fp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RI(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",os(t,e))}/**
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
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=bd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await bI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new cr;return s&&(Z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function On(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wI(this,e)}reload(){return TI(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await vr(this,vI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:q,isAnonymous:W,providerData:L,stsTokenManager:ie}=n;Z(K&&ie,e,"internal-error");const ge=cr.fromJSON(this.name,ie);Z(typeof K=="string",e,"internal-error"),On(h,e.name),On(f,e.name),Z(typeof q=="boolean",e,"internal-error"),Z(typeof W=="boolean",e,"internal-error"),On(m,e.name),On(E,e.name),On(g,e.name),On(y,e.name),On(w,e.name),On(x,e.name);const je=new pn({uid:K,auth:e,email:f,emailVerified:q,displayName:h,isAnonymous:W,photoURL:E,phoneNumber:m,tenantId:g,stsTokenManager:ge,createdAt:w,lastLoginAt:x});return L&&Array.isArray(L)&&(je.providerData=L.map(Fe=>Object.assign({},Fe))),y&&(je._redirectEventId=y),je}static async _fromIdTokenResponse(e,n,s=!1){const r=new cr;r.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Xo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];Z(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$p(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new cr;a.updateFromIdToken(s);const c=new pn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new wl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Rd=new Map;function gn(t){En(t instanceof Function,"Expected a class definition");let e=Rd.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rd.set(t,e),e)}/**
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
 */class Bp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bp.type="NONE";const Sd=Bp;/**
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
 */function xo(t,e,n){return`firebase:${t}:${e}:${n}`}class lr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=xo(this.userKey,r.apiKey,i),this.fullPersistenceKey=xo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new lr(gn(Sd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||gn(Sd);const o=xo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=pn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new lr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new lr(i,e,s))}}/**
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
 */function Cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wp(e))return"Blackberry";if(Kp(e))return"Webos";if(bu(e))return"Safari";if((e.includes("chrome/")||qp(e))&&!e.includes("edge/"))return"Chrome";if(zp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jp(t=it()){return/firefox\//i.test(t)}function bu(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qp(t=it()){return/crios\//i.test(t)}function Hp(t=it()){return/iemobile/i.test(t)}function zp(t=it()){return/android/i.test(t)}function Wp(t=it()){return/blackberry/i.test(t)}function Kp(t=it()){return/webos/i.test(t)}function ka(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SI(t=it()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CI(){return zw()&&document.documentMode===10}function Gp(t=it()){return ka(t)||zp(t)||Kp(t)||Wp(t)||/windows phone/i.test(t)||Hp(t)}function PI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qp(t,e=[]){let n;switch(t){case"Browser":n=Cd(it());break;case"Worker":n=`${Cd(it())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${s}`}/**
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
 */class kI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function DI(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",os(t,e))}/**
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
 */const NI=6;class OI{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class VI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pd(this),this.idTokenSubscription=new Pd(this),this.beforeStateQueue=new kI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Up(this,{idToken:e}),s=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(wn(this));const n=e?$e(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),n=new OI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await RI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function as(t){return $e(t)}class Pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zw(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(t){Da=t}function Yp(t){return Da.loadJS(t)}function xI(){return Da.recaptchaEnterpriseScript}function LI(){return Da.gapiScript}function FI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UI="recaptcha-enterprise",$I="NO_RECAPTCHA";class BI{constructor(e){this.type=UI,this.auth=as(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{yI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new _I(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ad(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o($I)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ad(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xI();c.length!==0&&(c+=a),Yp(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function kd(t,e,n,s=!1){const r=new BI(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function El(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await kd(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kd(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function jI(t,e){const n=vu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(_r(i,e??{}))return r;Mt(r,"already-initialized")}return n.initialize({options:e})}function qI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HI(t,e,n){const s=as(t);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Jp(e),{host:o,port:a}=zI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),WI()}function Jp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zI(t){const e=Jp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Dd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Dd(o)}}}function Dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function KI(t,e){return Cn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function GI(t,e){return qi(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
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
 */async function QI(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function YI(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
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
 */class wi extends Ru{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new wi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new wi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,n,"signInWithPassword",GI);case"emailLink":return QI(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,s,"signUpPassword",KI);case"emailLink":return YI(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ur(t,e){return qi(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
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
 */const JI="http://localhost";class Ns extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ns(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ur(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bi(n)}return e}}/**
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
 */function XI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(t){const e=Gr(Qr(t)).link,n=e?Gr(Qr(e)).deep_link_id:null,s=Gr(Qr(t)).deep_link_id;return(s?Gr(Qr(s)).link:null)||s||n||e||t}class Su{constructor(e){var n,s,r,i,o,a;const c=Gr(Qr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=XI((r=c.mode)!==null&&r!==void 0?r:null);Z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZI(e);try{return new Su(n)}catch{return null}}}/**
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
 */class Vr{constructor(){this.providerId=Vr.PROVIDER_ID}static credential(e,n){return wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Su.parseLink(n);return Z(s,"argument-error"),wi._fromEmailAndCode(e,s.code,s.tenantId)}}Vr.PROVIDER_ID="password";Vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hi extends Cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends Hi{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class Fn extends Hi{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Un extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Un.credential(n,s)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */async function eT(t,e){return qi(t,"POST","/v1/accounts:signUp",os(t,e))}/**
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
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await pn._fromIdTokenResponse(e,s,r),o=Nd(s);return new Os({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Nd(s);return new Os({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Nd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zo extends Sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Zo(e,n,s,r)}}function Xp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,i,e,s):i})}async function tT(t,e,n=!1){const s=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Os._forOperation(t,"link",s)}/**
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
 */async function nT(t,e,n=!1){const{auth:s}=t;if($t(s.app))return Promise.reject(wn(s));const r="reauthenticate";try{const i=await vr(t,Xp(s,r,e,t),n);Z(i.idToken,s,"internal-error");const o=Au(i.idToken);Z(o,s,"internal-error");const{sub:a}=o;return Z(t.uid===a,s,"user-mismatch"),Os._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mt(s,"user-mismatch"),i}}/**
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
 */async function Zp(t,e,n=!1){if($t(t.app))return Promise.reject(wn(t));const s="signIn",r=await Xp(t,s,e),i=await Os._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function sT(t,e){return Zp(as(t),e)}/**
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
 */async function eg(t){const e=as(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rT(t,e,n){if($t(t.app))return Promise.reject(wn(t));const s=as(t),o=await El(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&eg(t),c}),a=await Os._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function iT(t,e,n){return $t(t.app)?Promise.reject(wn(t)):sT($e(t),Vr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&eg(t),s})}/**
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
 */async function oT(t,e){return Cn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Pu(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=$e(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vr(s,oT(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function aT(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function cT(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function lT(t,e,n,s){return $e(t).onAuthStateChanged(e,n,s)}function uT(t){return $e(t).signOut()}const ea="__sak";/**
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
 */class tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function hT(){const t=it();return bu(t)||ka(t)}const dT=1e3,fT=10;class ng extends tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hT()&&PI(),this.fallbackToPolling=Gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);CI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ng.type="LOCAL";const mT=ng;/**
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
 */class sg extends tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sg.type="SESSION";const rg=sg;/**
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
 */function pT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await pT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function ku(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ku("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function on(){return window}function _T(t){on().location.href=t}/**
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
 */function ig(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function yT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wT(){return ig()?self:null}/**
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
 */const og="firebaseLocalStorageDb",ET=1,ta="firebaseLocalStorage",ag="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([ta],e?"readwrite":"readonly").objectStore(ta)}function IT(){const t=indexedDB.deleteDatabase(og);return new zi(t).toPromise()}function Il(){const t=indexedDB.open(og,ET);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ta,{keyPath:ag})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ta)?e(s):(s.close(),await IT(),e(await Il()))})})}async function Od(t,e,n){const s=Oa(t,!0).put({[ag]:e,value:n});return new zi(s).toPromise()}async function TT(t,e){const n=Oa(t,!1).get(e),s=await new zi(n).toPromise();return s===void 0?null:s.value}function Vd(t,e){const n=Oa(t,!0).delete(e);return new zi(n).toPromise()}const AT=800,bT=3;class cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(wT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yT(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await Od(e,ea,"1"),await Vd(e,ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Od(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oa(r,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cg.type="LOCAL";const RT=cg;new ji(3e4,6e4);/**
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
 */function lg(t,e){return e?gn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Du extends Ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ST(t){return Zp(t.auth,new Du(t),t.bypassAuthState)}function CT(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),nT(n,new Du(t),t.bypassAuthState)}async function PT(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),tT(n,new Du(t),t.bypassAuthState)}/**
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
 */class ug{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ST;case"linkViaPopup":case"linkViaRedirect":return PT;case"reauthViaPopup":case"reauthViaRedirect":return CT;default:Mt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kT=new ji(2e3,1e4);async function DT(t,e,n){if($t(t.app))return Promise.reject(qt(t,"operation-not-supported-in-this-environment"));const s=as(t);lI(t,e,Cu);const r=lg(s,n);return new vs(s,"signInViaPopup",e,r).executeNotNull()}class vs extends ug{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kT.get())};e()}}vs.currentPopupAction=null;/**
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
 */const NT="pendingRedirect",Lo=new Map;class OT extends ug{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const s=await VT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VT(t,e){const n=LT(e),s=xT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function MT(t,e){Lo.set(t._key(),e)}function xT(t){return gn(t._redirectPersistence)}function LT(t){return xo(NT,t.config.apiKey,t.name)}async function FT(t,e,n=!1){if($t(t.app))return Promise.reject(wn(t));const s=as(t),r=lg(s,e),o=await new OT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const UT=10*60*1e3;class $T{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(e))}saveEventToCache(e){this.cachedEventUids.add(Md(e)),this.lastProcessedEventTime=Date.now()}}function Md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(t);default:return!1}}/**
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
 */async function jT(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
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
 */const qT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HT=/^https?/;async function zT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jT(t);for(const n of e)try{if(WT(n))return}catch{}Mt(t,"unauthorized-domain")}function WT(t){const e=vl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!HT.test(n))return!1;if(qT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const KT=new ji(3e4,6e4);function xd(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GT(t){return new Promise((e,n)=>{var s,r,i;function o(){xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xd(),n(qt(t,"network-request-failed"))},timeout:KT.get()})}if(!((r=(s=on().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=on().gapi)===null||i===void 0)&&i.load)o();else{const a=FI("iframefcb");return on()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},Yp(`${LI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function QT(t){return Fo=Fo||GT(t),Fo}/**
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
 */const YT=new ji(5e3,15e3),JT="__/auth/iframe",XT="emulator/auth/iframe",ZT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tA(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,XT):`https://${t.config.authDomain}/${JT}`,s={apiKey:e.apiKey,appName:t.name,v:Or},r=eA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Bi(s).slice(1)}`}async function nA(t){const e=await QT(t),n=on().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:tA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=on().setTimeout(()=>{i(o)},YT.get());function c(){on().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const sA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rA=500,iA=600,oA="_blank",aA="http://localhost";class Ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cA(t,e,n,s=rA,r=iA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=it().toLowerCase();n&&(a=qp(l)?oA:n),jp(l)&&(e=e||aA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,E])=>`${f}${m}=${E},`,"");if(SI(l)&&a!=="_self")return lA(e||"",a),new Ld(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Ld(h)}function lA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const uA="__/auth/handler",hA="emulator/auth/handler",dA=encodeURIComponent("fac");async function Fd(t,e,n,s,r,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Or,eventId:r};if(e instanceof Cu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Hi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${dA}=${encodeURIComponent(c)}`:"";return`${fA(t)}?${Bi(a).slice(1)}${l}`}function fA({config:t}){return t.emulator?Tu(t,hA):`https://${t.authDomain}/${uA}`}/**
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
 */const xc="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rg,this._completeRedirectFn=FT,this._overrideRedirectResult=MT}async _openPopup(e,n,s,r){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fd(e,n,s,vl(),r);return cA(e,o,ku())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Fd(e,n,s,vl(),r);return _T(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(En(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nA(e),s=new $T(e);return n.register("authEvent",r=>(Z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gp()||bu()||ka()}}const pA=mA;var Ud="@firebase/auth",$d="1.7.2";/**
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
 */class gA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _A(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yA(t){yr(new ks("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qp(t)},l=new VI(s,r,i,c);return qI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),yr(new ks("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(s=>new gA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Ud,$d,_A(t)),Kn(Ud,$d,"esm2017")}/**
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
 */const vA=5*60,wA=Sp("authIdTokenMaxAge")||vA;let Bd=null;const EA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>wA)return;const r=n==null?void 0:n.token;Bd!==r&&(Bd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function IA(t=Dp()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jI(t,{popupRedirectResolver:pA,persistence:[RT,mT,rg]}),s=Sp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=EA(i.toString());cT(n,o,()=>o(n.currentUser)),aT(n,a=>o(a))}}const r=bp("auth");return r&&HI(n,`http://${r}`),n}function TA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",TA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yA("Browser");var AA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Nu=Nu||{},re=AA||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bA(t){return Object.prototype.hasOwnProperty.call(t,Lc)&&t[Lc]||(t[Lc]=++RA)}var Lc="closure_uid_"+(1e9*Math.random()>>>0),RA=0;function SA(t,e,n){return t.call.apply(t.bind,arguments)}function CA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=SA:ht=CA,ht.apply(null,arguments)}function vo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function cs(){this.s=this.s,this.o=this.o}var PA=0;cs.prototype.s=!1;cs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),PA!=0)&&bA(this)};cs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ou(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function jd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Va(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var kA=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};re.addEventListener("test",n,e),re.removeEventListener("test",n,e)}catch{}return t}();function Ei(t){return/^[\s\xa0]*$/.test(t)}function xa(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return xa().indexOf(t)!=-1}function Vu(t){return Vu[" "](t),t}Vu[" "]=function(){};function DA(t,e){var n=Ab;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var NA=en("Opera"),wr=en("Trident")||en("MSIE"),fg=en("Edge"),Tl=fg||wr,mg=en("Gecko")&&!(xa().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),OA=xa().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function pg(){var t=re.document;return t?t.documentMode:void 0}var Al;e:{var Fc="",Uc=function(){var t=xa();if(mg)return/rv:([^\);]+)(\)|;)/.exec(t);if(fg)return/Edge\/([\d\.]+)/.exec(t);if(wr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OA)return/WebKit\/(\S+)/.exec(t);if(NA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uc&&(Fc=Uc?Uc[1]:""),wr){var $c=pg();if($c!=null&&$c>parseFloat(Fc)){Al=String($c);break e}}Al=Fc}var bl;if(re.document&&wr){var qd=pg();bl=qd||parseInt(Al,10)||void 0}else bl=void 0;var VA=bl;function Ii(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mg){e:{try{Vu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ii.$.h.call(this)}}Ze(Ii,dt);var MA={2:"touch",3:"pen",4:"mouse"};Ii.prototype.h=function(){Ii.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var La="closure_listenable_"+(1e6*Math.random()|0),xA=0;function LA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++xA,this.fa=this.ia=!1}function Fa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Mu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function FA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function gg(t){const e={};for(const n in t)e[n]=t[n];return e}const Hd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _g(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Hd.length;i++)n=Hd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Sl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Rl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=dg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Fa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var xu="closure_lm_"+(1e6*Math.random()|0),Bc={};function yg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)yg(t,e[i],n,s,r);return null}return n=Eg(n),t&&t[La]?t.O(e,n,Ma(s)?!!s.capture:!!s,r):UA(t,e,n,!1,s,r)}function UA(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ma(r)?!!r.capture:!!r,a=Fu(t);if(a||(t[xu]=a=new Ua(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=$A(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)kA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $A(){function t(n){return e.call(t.src,t.listener,n)}const e=BA;return t}function vg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)vg(t,e[i],n,s,r);else s=Ma(s)?!!s.capture:!!s,n=Eg(n),t&&t[La]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Sl(i,n,s,r),-1<n&&(Fa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sl(e,n,s,r)),(n=-1<t?e[t]:null)&&Lu(n))}function Lu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[La])Rl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Fu(e))?(Rl(n,t),n.h==0&&(n.src=null,e[xu]=null)):Fa(t)}}}function wg(t){return t in Bc?Bc[t]:Bc[t]="on"+t}function BA(t,e){if(t.fa)t=!0;else{e=new Ii(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Lu(t),t=n.call(s,e)}return t}function Fu(t){return t=t[xu],t instanceof Ua?t:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eg(t){return typeof t=="function"?t:(t[jc]||(t[jc]=function(e){return t.handleEvent(e)}),t[jc])}function Xe(){cs.call(this),this.i=new Ua(this),this.S=this,this.J=null}Ze(Xe,cs);Xe.prototype[La]=!0;Xe.prototype.removeEventListener=function(t,e,n,s){vg(this,t,e,n,s)};function st(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var r=e;e=new dt(s,t),_g(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=wo(o,s,!0,e)&&r}if(o=e.g=t,r=wo(o,s,!0,e)&&r,r=wo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=wo(o,s,!1,e)&&r}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fa(n[s]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Xe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function wo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Rl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Uu=re.JSON.stringify;class jA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qA(){var t=$u;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HA{constructor(){this.h=this.g=null}add(e,n){const s=Ig.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ig=new jA(()=>new zA,t=>t.reset());class zA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function KA(t){re.setTimeout(()=>{throw t},0)}let Ti,Ai=!1,$u=new HA,Tg=()=>{const t=re.Promise.resolve(void 0);Ti=()=>{t.then(GA)}};var GA=()=>{for(var t;t=qA();){try{t.h.call(t.g)}catch(n){KA(n)}var e=Ig;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ai=!1};function $a(t,e){Xe.call(this),this.h=t||1,this.g=e||re,this.j=ht(this.qb,this),this.l=Date.now()}Ze($a,Xe);B=$a.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),st(this,"tick"),this.ga&&(Bu(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}B.N=function(){$a.$.N.call(this),Bu(this),delete this.g};function ju(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Ag(t){t.g=ju(()=>{t.g=null,t.i&&(t.i=!1,Ag(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QA extends cs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ag(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(t){cs.call(this),this.h=t,this.g={}}Ze(bi,cs);var zd=[];function bg(t,e,n,s){Array.isArray(n)||(n&&(zd[0]=n.toString()),n=zd);for(var r=0;r<n.length;r++){var i=yg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rg(t){Mu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lu(e)},t),t.g={}}bi.prototype.N=function(){bi.$.N.call(this),Rg(this)};bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ba(){this.g=!0}Ba.prototype.Ea=function(){this.g=!1};function YA(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function JA(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function sr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZA(t,n)+(s?" "+s:"")})}function XA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ba.prototype.info=function(){};function ZA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Uu(n)}catch{return e}}var Us={},Wd=null;function ja(){return Wd=Wd||new Xe}Us.Ta="serverreachability";function Sg(t){dt.call(this,Us.Ta,t)}Ze(Sg,dt);function Ri(t){const e=ja();st(e,new Sg(e))}Us.STAT_EVENT="statevent";function Cg(t,e){dt.call(this,Us.STAT_EVENT,t),this.stat=e}Ze(Cg,dt);function yt(t){const e=ja();st(e,new Cg(e,t))}Us.Ua="timingevent";function Pg(t,e){dt.call(this,Us.Ua,t),this.size=e}Ze(Pg,dt);function Wi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qu(){}qu.prototype.h=null;function Kd(t){return t.h||(t.h=t.i())}function Dg(){}var Ki={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hu(){dt.call(this,"d")}Ze(Hu,dt);function zu(){dt.call(this,"c")}Ze(zu,dt);var Cl;function Ha(){}Ze(Ha,qu);Ha.prototype.g=function(){return new XMLHttpRequest};Ha.prototype.i=function(){return{}};Cl=new Ha;function Gi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new bi(this),this.P=eb,t=Tl?125:void 0,this.V=new $a(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ng}function Ng(){this.i=null,this.g="",this.h=!1}var eb=45e3,Og={},Pl={};B=Gi.prototype;B.setTimeout=function(t){this.P=t};function kl(t,e,n){t.L=1,t.A=Wa(In(e)),t.u=n,t.S=!0,Vg(t,null)}function Vg(t,e){t.G=Date.now(),Qi(t),t.B=In(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),jg(n.i,"t",s),t.o=0,n=t.l.J,t.h=new Ng,t.g=l_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new QA(ht(t.Pa,t,t.g),t.O)),bg(t.U,t.g,"readystatechange",t.nb),e=t.I?gg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ri(),YA(t.j,t.v,t.B,t.m,t.W,t.u)}B.nb=function(t){t=t.target;const e=this.M;e&&nn(t)==3?e.l():this.Pa(t)};B.Pa=function(t){try{if(t==this.g)e:{const u=nn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Tl||this.g&&(this.h.h||this.g.ja()||Jd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ri(3):Ri(2)),za(this);var n=this.g.da();this.ca=n;t:if(Mg(this)){var s=Jd(this.g);t="";var r=s.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),li(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ei(a)){var l=a;break t}}l=null}if(n=l)sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dl(this,n);else{this.i=!1,this.s=3,yt(12),ws(this),li(this);break e}}this.S?(xg(this,u,o),Tl&&this.i&&u==3&&(bg(this.U,this.V,"tick",this.mb),this.V.start())):(sr(this.j,this.m,o,null),Dl(this,o)),u==4&&ws(this),this.i&&!this.J&&(u==4?i_(this.l,this):(this.i=!1,Qi(this)))}else Eb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),ws(this),li(this)}}}catch{}finally{}};function Mg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function xg(t,e,n){let s=!0,r;for(;!t.J&&t.o<n.length;)if(r=tb(t,n),r==Pl){e==4&&(t.s=4,yt(14),s=!1),sr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Og){t.s=4,yt(15),sr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else sr(t.j,t.m,r,null),Dl(t,r);Mg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,yt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ju(e),e.M=!0,yt(11))):(sr(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),li(t))}B.mb=function(){if(this.g){var t=nn(this.g),e=this.g.ja();this.o<e.length&&(za(this),xg(this,t,e),this.i&&t!=4&&Qi(this))}};function tb(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?Pl:(n=Number(e.substring(n,s)),isNaN(n)?Og:(s+=1,s+n>e.length?Pl:(e=e.slice(s,s+n),t.o=s+n,e)))}B.cancel=function(){this.J=!0,ws(this)};function Qi(t){t.Y=Date.now()+t.P,Lg(t,t.P)}function Lg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Wi(ht(t.lb,t),e)}function za(t){t.C&&(re.clearTimeout(t.C),t.C=null)}B.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(XA(this.j,this.B),this.L!=2&&(Ri(),yt(17)),ws(this),this.s=2,li(this)):Lg(this,this.Y-t)};function li(t){t.l.H==0||t.J||i_(t.l,t)}function ws(t){za(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Bu(t.V),Rg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Dl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Nl(n.i,t))){if(!t.K&&Nl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ra(n),Qa(n);else break e;Yu(n),yt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wi(ht(n.ib,n),6e3));if(1>=zg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Es(n,11)}else if((t.K||n.g==t)&&ra(n),!Ei(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Wu(i,i.h),i.h=null))}if(s.F){const g=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,De(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=c_(s,s.J?s.pa:null,s.Y),o.K){Wg(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.C&&(za(a),Qi(a)),s.g=o}else s_(s);0<n.j.length&&Ya(n)}else l[0]!="stop"&&l[0]!="close"||Es(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Es(n,7):Qu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ri(4)}catch{}}function nb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function sb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Fg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sb(t),s=nb(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Ug=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Cs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Cs){this.h=t.h,na(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l;var e=t.i,n=new Si;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gd(this,n),this.o=t.o}else t&&(e=String(t).match(Ug))?(this.h=!1,na(this,e[1]||"",!0),this.s=Yr(e[2]||""),this.g=Yr(e[3]||"",!0),sa(this,e[4]),this.l=Yr(e[5]||"",!0),Gd(this,e[6]||"",!0),this.o=Yr(e[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jr(e,Qd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jr(e,Qd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jr(n,n.charAt(0)=="/"?ab:ob,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jr(n,lb)),t.join("")};function In(t){return new Cs(t)}function na(t,e,n){t.j=n?Yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gd(t,e,n){e instanceof Si?(t.i=e,ub(t.i,t.h)):(n||(e=Jr(e,cb)),t.i=new Si(e,t.h))}function De(t,e,n){t.i.set(e,n)}function Wa(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ib),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ib(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qd=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,cb=/[#\?@]/g,lb=/#/g;function Si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ls(t){t.g||(t.g=new Map,t.h=0,t.i&&rb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Si.prototype;B.add=function(t,e){ls(this),this.i=null,t=Mr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $g(t,e){ls(t),e=Mr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bg(t,e){return ls(t),e=Mr(t,e),t.g.has(e)}B.forEach=function(t,e){ls(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};B.ta=function(){ls(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};B.Z=function(t){ls(this);let e=[];if(typeof t=="string")Bg(this,t)&&(e=e.concat(this.g.get(Mr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return ls(this),this.i=null,t=Mr(this,t),Bg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jg(t,e,n){$g(t,e),0<n.length&&(t.i=null,t.g.set(Mr(t,e),Ou(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Mr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ub(t,e){e&&!t.j&&(ls(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&($g(this,s),jg(this,r,n))},t)),t.j=e}var hb=class{constructor(t,e){this.g=t,this.map=e}};function qg(t){this.l=t||db,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var db=10;function Hg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zg(t){return t.h?1:t.g?t.g.size:0}function Nl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wu(t,e){t.g?t.g.add(e):t.h=e}function Wg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qg.prototype.cancel=function(){if(this.i=Kg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ou(t.i)}var fb=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function mb(){this.g=new fb}function pb(t,e,n){const s=n||"";try{Fg(t,function(r,i){let o=r;Ma(r)&&(o=Uu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function gb(t,e){const n=new Ba;if(re.Image){const s=new Image;s.onload=vo(Eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=vo(Eo,n,s,"TestLoadImage: error",!1,e),s.onabort=vo(Eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=vo(Eo,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Eo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Yi(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(Yi,qu);Yi.prototype.g=function(){return new Ka(this.l,this.j)};Yi.prototype.i=function(t){return function(){return t}}({});function Ka(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ku,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Ka,Xe);var Ku=0;B=Ka.prototype;B.open=function(t,e){if(this.readyState!=Ku)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ci(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=Ku};B.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Gg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}B.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ji(this):Ci(this),this.readyState==3&&Gg(this)}};B.Za=function(t){this.g&&(this.response=this.responseText=t,Ji(this))};B.Ya=function(t){this.g&&(this.response=t,Ji(this))};B.ka=function(){this.g&&Ji(this)};function Ji(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ci(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ci(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _b=re.JSON.parse;function Be(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qg,this.L=this.M=!1}Ze(Be,Xe);var Qg="",yb=/^https?$/i,vb=["POST","PUT"];B=Be.prototype;B.Oa=function(t){this.M=t};B.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Cl.g(),this.C=this.u?Kd(this.u):Kd(Cl),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Yd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=re.FormData&&t instanceof re.FormData,!(0<=dg(vb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xg(this),0<this.B&&((this.L=wb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=ju(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Yd(this,i)}};function wb(t){return wr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.ua=function(){typeof Nu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Yd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yg(t),Ga(t)}function Yg(t){t.F||(t.F=!0,st(t,"complete"),st(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),Ga(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ga(this,!0)),Be.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?Jg(this):this.kb())};B.kb=function(){Jg(this)};function Jg(t){if(t.h&&typeof Nu<"u"&&(!t.C[1]||nn(t)!=4||t.da()!=2)){if(t.v&&nn(t)==4)ju(t.La,0,t);else if(st(t,"readystatechange"),nn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Ug)[1]||null;!r&&re.self&&re.self.location&&(r=re.self.location.protocol.slice(0,-1)),s=!yb.test(r?r.toLowerCase():"")}n=s}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var i=2<nn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Yg(t)}}finally{Ga(t)}}}}function Ga(t,e){if(t.g){Xg(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=s}catch{}}}function Xg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}B.isActive=function(){return!!this.g};function nn(t){return t.g?t.g.readyState:0}B.da=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_b(e)}};function Jd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Qg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Eb(t){const e={};t=(t.g&&2<=nn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ei(t[s]))continue;var n=WA(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}FA(e,function(s){return s.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zg(t){let e="";return Mu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Gu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Zg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function Hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function e_(t){this.Ga=0,this.j=[],this.l=new Ba,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hr("baseRetryDelayMs",5e3,t),this.hb=Hr("retryDelaySeedMs",1e4,t),this.eb=Hr("forwardChannelMaxRetries",2,t),this.xa=Hr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qg(t&&t.concurrentRequestLimit),this.Ja=new mb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=e_.prototype;B.ra=8;B.H=1;function Qu(t){if(t_(t),t.H==3){var e=t.W++,n=In(t.I);if(De(n,"SID",t.K),De(n,"RID",e),De(n,"TYPE","terminate"),Xi(t,n),e=new Gi(t,t.l,e),e.L=2,e.A=Wa(In(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.A,n=!0),n||(e.g=l_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Qi(e)}a_(t)}function Qa(t){t.g&&(Ju(t),t.g.cancel(),t.g=null)}function t_(t){Qa(t),t.u&&(re.clearTimeout(t.u),t.u=null),ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Ya(t){if(!Hg(t.i)&&!t.m){t.m=!0;var e=t.Na;Ti||Tg(),Ai||(Ti(),Ai=!0),$u.add(e,t),t.C=0}}function Ib(t,e){return zg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wi(ht(t.Na,t,e),o_(t,t.C)),t.C++,!0)}B.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Gi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=gg(i),_g(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=n_(this,r,e),n=In(this.I),De(n,"RID",t),De(n,"CVER",22),this.F&&De(n,"X-HTTP-Session-Id",this.F),Xi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Zg(i)))+"&"+e:this.o&&Gu(n,this.o,i)),Wu(this.i,r),this.bb&&De(n,"TYPE","init"),this.P?(De(n,"$req",e),De(n,"SID","null"),r.aa=!0,kl(r,n,null)):kl(r,n,e),this.H=2}}else this.H==3&&(t?Xd(this,t):this.j.length==0||Hg(this.i)||Xd(this))};function Xd(t,e){var n;e?n=e.m:n=t.W++;const s=In(t.I);De(s,"SID",t.K),De(s,"RID",n),De(s,"AID",t.V),Xi(t,s),t.o&&t.s&&Gu(s,t.o,t.s),n=new Gi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=n_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wu(t.i,n),kl(n,s,e)}function Xi(t,e){t.na&&Mu(t.na,function(n,s){De(e,s,n)}),t.h&&Fg({},function(n,s){De(e,s,n)})}function n_(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ht(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{pb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function s_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ti||Tg(),Ai||(Ti(),Ai=!0),$u.add(e,t),t.A=0}}function Yu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wi(ht(t.Ma,t),o_(t,t.A)),t.A++,!0)}B.Ma=function(){if(this.u=null,r_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wi(ht(this.jb,this),t)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),Qa(this),r_(this))};function Ju(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function r_(t){t.g=new Gi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=In(t.wa);De(e,"RID","rpc"),De(e,"SID",t.K),De(e,"AID",t.V),De(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&De(e,"TO",t.qa),De(e,"TYPE","xmlhttp"),Xi(t,e),t.o&&t.s&&Gu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Wa(In(e)),n.u=null,n.S=!0,Vg(n,t)}B.ib=function(){this.v!=null&&(this.v=null,Qa(this),Yu(this),yt(19))};function ra(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function i_(t,e){var n=null;if(t.g==e){ra(t),Ju(t),t.g=null;var s=2}else if(Nl(t.i,e))n=e.F,Wg(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;s=ja(),st(s,new Pg(s,n)),Ya(t)}else s_(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(s==1&&Ib(t,e)||s==2&&Yu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Es(t,5);break;case 4:Es(t,10);break;case 3:Es(t,6);break;default:Es(t,2)}}}function o_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Es(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ht(t.pb,t);n||(n=new Cs("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||na(n,"https"),Wa(n)),gb(n.toString(),s)}else yt(2);t.H=0,t.h&&t.h.za(e),a_(t),t_(t)}B.pb=function(t){t?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function a_(t){if(t.H=0,t.ma=[],t.h){const e=Kg(t.i);(e.length!=0||t.j.length!=0)&&(jd(t.ma,e),jd(t.ma,t.j),t.i.i.length=0,Ou(t.j),t.j.length=0),t.h.ya()}}function c_(t,e,n){var s=n instanceof Cs?In(n):new Cs(n);if(s.g!="")e&&(s.g=e+"."+s.g),sa(s,s.m);else{var r=re.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Cs(null);s&&na(i,s),e&&(i.g=e),r&&sa(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&De(s,n,e),De(s,"VER",t.ra),Xi(t,s),s}function l_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Be(new Yi({ob:n})):new Be(t.va),e.Oa(t.J),e}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function u_(){}B=u_.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function ia(){if(wr&&!(10<=Number(VA)))throw Error("Environmental error: no available transport.")}ia.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Xe.call(this),this.g=new e_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ei(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ei(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xr(this)}Ze(Pt,Xe);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=c_(t,null,t.Y),Ya(t)};Pt.prototype.close=function(){Qu(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Uu(t),t=n);e.j.push(new hb(e.fb++,t)),e.H==3&&Ya(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,Qu(this.g),delete this.g,Pt.$.N.call(this)};function h_(t){Hu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(h_,Hu);function d_(){zu.call(this),this.status=1}Ze(d_,zu);function xr(t){this.g=t}Ze(xr,u_);xr.prototype.Ba=function(){st(this.g,"a")};xr.prototype.Aa=function(t){st(this.g,new h_(t))};xr.prototype.za=function(t){st(this.g,new d_)};xr.prototype.ya=function(){st(this.g,"b")};function Tb(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(Ht,Tb);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)qc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){qc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){qc(this,s),r=0;break}}this.h=r,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Se(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var Ab={};function Xu(t){return-128<=t&&128>t?DA(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function sn(t){if(isNaN(t)||!isFinite(t))return hr;if(0>t)return tt(sn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ol;return new Se(e,0)}function f_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return tt(f_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sn(Math.pow(e,8)),s=hr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=sn(Math.pow(e,i)),s=s.R(i).add(sn(o))):(s=s.R(n),s=s.add(sn(o)))}return s}var Ol=4294967296,hr=Xu(0),Vl=Xu(1),Zd=Xu(16777216);B=Se.prototype;B.ea=function(){if(Nt(this))return-tt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ol+s)*e,e*=Ol}return t};B.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_n(this))return"0";if(Nt(this))return"-"+tt(this).toString(t);for(var e=sn(Math.pow(t,6)),n=this,s="";;){var r=aa(n,e).g;n=oa(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,_n(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};B.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function _n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}B.X=function(t){return t=oa(this,t),Nt(t)?-1:_n(t)?0:1};function tt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Se(n,~t.h).add(Vl)}B.abs=function(){return Nt(this)?tt(this):this};B.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function oa(t,e){return t.add(tt(e))}B.R=function(t){if(_n(this)||_n(t))return hr;if(Nt(this))return Nt(t)?tt(this).R(tt(t)):tt(tt(this).R(t));if(Nt(t))return tt(this.R(tt(t)));if(0>this.X(Zd)&&0>t.X(Zd))return sn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Io(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Io(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Io(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Io(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Se(n,0)};function Io(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function zr(t,e){this.g=t,this.h=e}function aa(t,e){if(_n(e))throw Error("division by zero");if(_n(t))return new zr(hr,hr);if(Nt(t))return e=aa(tt(t),e),new zr(tt(e.g),tt(e.h));if(Nt(e))return e=aa(t,tt(e)),new zr(tt(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vl,s=e;0>=s.X(t);)n=ef(n),s=ef(s);var r=Qs(n,1),i=Qs(s,1);for(s=Qs(s,2),n=Qs(n,2);!_n(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Qs(s,1),n=Qs(n,1)}return e=oa(t,r.R(e)),new zr(r,e)}for(r=hr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=sn(n),o=i.R(e);Nt(o)||0<o.X(t);)n-=s,i=sn(n),o=i.R(e);_n(i)&&(i=Vl),r=r.add(i),t=oa(t,o)}return new zr(r,t)}B.gb=function(t){return aa(this,t).h};B.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Se(n,this.h&t.h)};B.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Se(n,this.h|t.h)};B.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Se(n,this.h^t.h)};function ef(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Se(n,t.h)}function Qs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(r,t.h)}ia.prototype.createWebChannel=ia.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;qa.NO_ERROR=0;qa.TIMEOUT=8;qa.HTTP_ERROR=6;kg.COMPLETE="complete";Dg.EventType=Ki;Ki.OPEN="a";Ki.CLOSE="b";Ki.ERROR="c";Ki.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=sn;Se.fromString=f_;var bb=function(){return new ia},Rb=function(){return ja()},Hc=qa,Sb=kg,Cb=Us,tf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Pb=Yi,To=Dg,kb=Be,Db=Ht,dr=Se;const nf="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Lr="10.11.1";/**
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
 */const Vs=new _u("@firebase/firestore");function Wr(){return Vs.logLevel}function G(t,...e){if(Vs.logLevel<=_e.DEBUG){const n=e.map(Zu);Vs.debug(`Firestore (${Lr}): ${t}`,...n)}}function Tn(t,...e){if(Vs.logLevel<=_e.ERROR){const n=e.map(Zu);Vs.error(`Firestore (${Lr}): ${t}`,...n)}}function Er(t,...e){if(Vs.logLevel<=_e.WARN){const n=e.map(Zu);Vs.warn(`Firestore (${Lr}): ${t}`,...n)}}function Zu(t){if(typeof t=="string")return t;try{/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Ce(t,e){t||ne()}function ce(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class m_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class Ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vb{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ce(typeof s.accessToken=="string"),new m_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new at(e)}}class Mb{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xb{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new Mb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new Lb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class p_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Ub(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function Ir(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ne(0,0))}static max(){return new oe(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pi{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(),s===void 0?s=e.length-n:s>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Pi{construct(e,n,s){return new Oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new z(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const $b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Pi{construct(e,n,s){return new nt(e,n,s)}static isValidIdentifier(e){return $b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new z(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new z(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Oe.fromString(e))}static fromName(e){return new Y(Oe.fromString(e).popFirst(5))}static empty(){return new Y(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Oe(e.slice()))}}function Bb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(s===1e9?new Ne(n+1,0):new Ne(n,s));return new Xn(r,Y.empty(),e)}function jb(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Xn(oe.min(),Y.empty(),-1)}static max(){return new Xn(oe.max(),Y.empty(),-1)}}function qb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const Hb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Hb)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class eh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}eh.oe=-1;function Ja(t){return t==null}function ca(t){return t===0&&1/t==-1/0}function Kb(t){return typeof t=="number"&&Number.isInteger(t)&&!ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function g_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ao(this.root,e,this.comparator,!0)}}class Ao{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??et.RED,this.left=r??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new et(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,s,r,i){return this}insert(e,n,s){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rf(this.data.getIterator())}getIteratorFrom(e){return new rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new rt(nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ir(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class __ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new __("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=Gb.exec(t);if(Ce(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nh(t){const e=t.mapValue.fields.__previous_value__;return th(e)?nh(e):e}function ki(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class Qb{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?th(t)?4:Yb(t)?9007199254740991:10:ne()}function ln(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Zn(r.timestampValue),a=Zn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ms(r.bytesValue).isEqual(Ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ze(r.doubleValue),a=ze(i.doubleValue);return o===a?ca(o)===ca(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ir(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(sf(o)!==sf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ln(o[c],a[c])))return!1;return!0}(t,e);default:return ne()}}function Ni(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Tr(t,e){if(t===e)return 0;const n=xs(t),s=xs(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),c=ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return of(t.timestampValue,e.timestampValue);case 4:return of(ki(t),ki(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ms(i),c=Ms(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Re(a[l],c[l]);if(u!==0)return u}return Re(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Re(ze(i.latitude),ze(o.latitude));return a!==0?a:Re(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Tr(a[l],c[l]);if(u)return u}return Re(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===bo.mapValue&&o===bo.mapValue)return 0;if(i===bo.mapValue)return 1;if(o===bo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=Re(c[h],u[h]);if(f!==0)return f;const m=Tr(a[c[h]],l[u[h]]);if(m!==0)return m}return Re(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function of(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Zn(t),s=Zn(e),r=Re(n.seconds,s.seconds);return r!==0?r:Re(n.nanos,s.nanos)}function Ar(t){return Ml(t)}function Ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Zn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Ml(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Ml(n.fields[o])}`;return r+"}"}(t.mapValue):ne()}function af(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xl(t){return!!t&&"integerValue"in t}function sh(t){return!!t&&"arrayValue"in t}function cf(t){return!!t&&"nullValue"in t}function lf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ui(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(n)}setAll(e){let n=nt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ui(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Uo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){$s(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Tt(ui(this.value))}}function y_(t){const e=[];return $s(t.fields,(n,s)=>{const r=new nt([n]);if(Uo(s)){const i=y_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ct(e)}/**
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
 */class ct{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,oe.min(),oe.min(),oe.min(),Tt.empty(),0)}static newFoundDocument(e,n,s,r){return new ct(e,1,n,oe.min(),s,r,0)}static newNoDocument(e,n){return new ct(e,2,n,oe.min(),oe.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,oe.min(),oe.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function uf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),n.key):s=Tr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function hf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class v_{}class Ke extends v_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Zb(e,n,s):n==="array-contains"?new n1(e,s):n==="in"?new s1(e,s):n==="not-in"?new r1(e,s):n==="array-contains-any"?new i1(e,s):new Ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new e1(e,s):new t1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Tr(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(Tr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends v_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zt(e,n)}matches(e){return w_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function w_(t){return t.op==="and"}function E_(t){return Xb(t)&&w_(t)}function Xb(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Ll(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Ar(t.value);if(E_(t))return t.filters.map(e=>Ll(e)).join(",");{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function I_(t,e){return t instanceof Ke?function(s,r){return r instanceof Ke&&s.op===r.op&&s.field.isEqual(r.field)&&ln(s.value,r.value)}(t,e):t instanceof zt?function(s,r){return r instanceof zt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&I_(o,r.filters[a]),!0):!1}(t,e):void ne()}function T_(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Ar(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(T_).join(" ,")+"}"}(t):"Filter"}class Zb extends Ke{constructor(e,n,s){super(e,n,s),this.key=Y.fromName(s.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class e1 extends Ke{constructor(e,n){super(e,"in",n),this.keys=A_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t1 extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=A_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function A_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Y.fromName(s.referenceValue))}class n1 extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sh(n)&&Ni(n.arrayValue,this.value)}}class s1 extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class r1 extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class i1 extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ni(this.value.arrayValue,s))}}/**
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
 */class o1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function df(t,e=null,n=[],s=[],r=null,i=null,o=null){return new o1(t,e,n,s,r,i,o)}function rh(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ll(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ar(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ar(s)).join(",")),e.ue=n}return e.ue}function ih(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!I_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hf(t.startAt,e.startAt)&&hf(t.endAt,e.endAt)}function Fl(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a1(t,e,n,s,r,i,o,a){return new Fr(t,e,n,s,r,i,o,a)}function Xa(t){return new Fr(t)}function ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function b_(t){return t.collectionGroup!==null}function hi(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Oi(i,s))}),n.has(nt.keyField().canonicalString())||e.ce.push(new Oi(nt.keyField(),s))}return e.ce}function an(t){const e=ce(t);return e.le||(e.le=c1(e,hi(t))),e.le}function c1(t,e){if(t.limitType==="F")return df(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Oi(r.field,i)});const n=t.endAt?new la(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new la(t.startAt.position,t.startAt.inclusive):null;return df(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Ul(t,e){const n=t.filters.concat([e]);return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $l(t,e,n){return new Fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Za(t,e){return ih(an(t),an(e))&&t.limitType===e.limitType}function R_(t){return`${rh(an(t))}|lt:${t.limitType}`}function er(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>T_(r)).join(", ")}]`),Ja(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Ar(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Ar(r)).join(",")),`Target(${s})`}(an(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Y.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of hi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=uf(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,hi(s),r)||s.endAt&&!function(o,a,c){const l=uf(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,hi(s),r))}(t,e)}function l1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S_(t){return(e,n)=>{let s=!1;for(const r of hi(t)){const i=u1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function u1(t,e,n){const s=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Tr(c,l):ne()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne()}}/**
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
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return g_(this.inner)}size(){return this.innerSize}}/**
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
 */const h1=new Le(Y.comparator);function An(){return h1}const C_=new Le(Y.comparator);function Xr(...t){let e=C_;for(const n of t)e=e.insert(n.key,n);return e}function P_(t){let e=C_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Is(){return di()}function k_(){return di()}function di(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const d1=new Le(Y.comparator),f1=new rt(Y.comparator);function pe(...t){let e=f1;for(const n of t)e=e.add(n);return e}const m1=new rt(Re);function p1(){return m1}/**
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
 */function D_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function N_(t){return{integerValue:""+t}}function O_(t,e){return Kb(e)?N_(e):D_(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function g1(t,e,n){return t instanceof Vi?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&th(i)&&(i=nh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof br?M_(t,e):t instanceof Rr?x_(t,e):function(r,i){const o=V_(r,i),a=mf(o)+mf(r.Pe);return xl(o)&&xl(r.Pe)?N_(a):D_(r.serializer,a)}(t,e)}function _1(t,e,n){return t instanceof br?M_(t,e):t instanceof Rr?x_(t,e):n}function V_(t,e){return t instanceof Mi?function(s){return xl(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Vi extends tc{}class br extends tc{constructor(e){super(),this.elements=e}}function M_(t,e){const n=L_(e);for(const s of t.elements)n.some(r=>ln(r,s))||n.push(s);return{arrayValue:{values:n}}}class Rr extends tc{constructor(e){super(),this.elements=e}}function x_(t,e){let n=L_(e);for(const s of t.elements)n=n.filter(r=>!ln(r,s));return{arrayValue:{values:n}}}class Mi extends tc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function mf(t){return ze(t.integerValue||t.doubleValue)}function L_(t){return sh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class nc{constructor(e,n){this.field=e,this.transform=n}}function y1(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof br&&r instanceof br||s instanceof Rr&&r instanceof Rr?Ir(s.elements,r.elements,ln):s instanceof Mi&&r instanceof Mi?ln(s.Pe,r.Pe):s instanceof Vi&&r instanceof Vi}(t.transform,e.transform)}class v1{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function F_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rc(t.key,bt.none()):new to(t.key,t.data,bt.none());{const n=t.data,s=Tt.empty();let r=new rt(nt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new us(t.key,s,new Ct(r.toArray()),bt.none())}}function w1(t,e,n){t instanceof to?function(r,i,o){const a=r.value.clone(),c=gf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof us?function(r,i,o){if(!$o(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=gf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(U_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fi(t,e,n,s){return t instanceof to?function(i,o,a,c){if(!$o(i.precondition,o))return a;const l=i.value.clone(),u=_f(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof us?function(i,o,a,c){if(!$o(i.precondition,o))return a;const l=_f(i.fieldTransforms,c,o),u=o.data;return u.setAll(U_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return $o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function E1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=V_(s.transform,r||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(s.field,i))}return n||null}function pf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ir(s,r,(i,o)=>y1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends sc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class us extends sc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function U_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function gf(t,e,n){const s=new Map;Ce(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,_1(o,a,n[r]))}return s}function _f(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,g1(i,o,e))}return s}class rc extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I1 extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class T1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&w1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=k_();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=F_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Ir(this.mutations,e.mutations,(n,s)=>pf(n,s))&&Ir(this.baseMutations,e.baseMutations,(n,s)=>pf(n,s))}}class oh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ce(e.mutations.length===s.length);let r=function(){return d1}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new oh(e,n,s,r)}}/**
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
 */class A1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class b1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,ye;function R1(t){switch(t){default:return ne();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function $_(t){if(t===void 0)return Tn("GRPC error has no .code"),b.UNKNOWN;switch(t){case He.OK:return b.OK;case He.CANCELLED:return b.CANCELLED;case He.UNKNOWN:return b.UNKNOWN;case He.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case He.INTERNAL:return b.INTERNAL;case He.UNAVAILABLE:return b.UNAVAILABLE;case He.UNAUTHENTICATED:return b.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case He.NOT_FOUND:return b.NOT_FOUND;case He.ALREADY_EXISTS:return b.ALREADY_EXISTS;case He.PERMISSION_DENIED:return b.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case He.ABORTED:return b.ABORTED;case He.OUT_OF_RANGE:return b.OUT_OF_RANGE;case He.UNIMPLEMENTED:return b.UNIMPLEMENTED;case He.DATA_LOSS:return b.DATA_LOSS;default:return ne()}}(ye=He||(He={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function S1(){return new TextEncoder}/**
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
 */const C1=new dr([4294967295,4294967295],0);function yf(t){const e=S1().encode(t),n=new Db;return n.update(e),new Uint8Array(n.digest())}function vf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,s],0),new dr([r,i],0)]}class ah{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Zr(`Invalid padding: ${n}`);if(s<0)throw new Zr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Zr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Zr(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=dr.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(dr.fromNumber(s)));return r.compare(C1)===1&&(r=new dr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yf(e),[s,r]=vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ah(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=yf(e),[s,r]=vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ic{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ic(oe.min(),r,new Le(Re),An(),pe())}}class no{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new no(s,n,pe(),pe(),pe())}}/**
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
 */class Bo{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class B_{constructor(e,n){this.targetId=e,this.me=n}}class j_{constructor(e,n,s=mt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class wf{constructor(){this.fe=0,this.ge=If(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=pe(),n=pe(),s=pe();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ne()}}),new no(this.pe,this.ye,e,n,s)}ve(){this.we=!1,this.ge=If()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class P1{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=Ef(),this.Qe=new Le(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.ve(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(Fl(i))if(s===0){const o=new Y(i.path);this.Ue(n,o,ct.newNoDocument(o,oe.min()))}else Ce(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Ms(s).toUint8Array()}catch(c){if(c instanceof __)return Er("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ah(o,r,i)}catch(c){return Er(c instanceof Zr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Fl(a.target)){const c=new Y(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ct.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let s=pe();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new ic(e,n,this.Qe,this.ke,s);return this.ke=An(),this.qe=Ef(),this.Qe=new Le(Re),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new wf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ef(){return new Le(Y.comparator)}function If(){return new Le(Y.comparator)}const k1={asc:"ASCENDING",desc:"DESCENDING"},D1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N1={and:"AND",or:"OR"};class O1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bl(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function q_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V1(t,e){return ua(t,e.toTimestamp())}function cn(t){return Ce(!!t),oe.fromTimestamp(function(n){const s=Zn(n);return new Ne(s.seconds,s.nanos)}(t))}function ch(t,e){return jl(t,e).canonicalString()}function jl(t,e){const n=function(r){return new Oe(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function H_(t){const e=Oe.fromString(t);return Ce(Q_(e)),e}function ql(t,e){return ch(t.databaseId,e.path)}function zc(t,e){const n=H_(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(W_(n))}function z_(t,e){return ch(t.databaseId,e)}function M1(t){const e=H_(t);return e.length===4?Oe.emptyPath():W_(e)}function Hl(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tf(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function x1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ce(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(Ce(u===void 0||u instanceof Buffer||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?b.UNKNOWN:$_(l.code);return new z(u,l.message||"")}(o);n=new j_(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=zc(t,s.document.name),i=cn(s.document.updateTime),o=s.document.createTime?cn(s.document.createTime):oe.min(),a=new Tt({mapValue:{fields:s.document.fields}}),c=ct.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Bo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=zc(t,s.document),i=s.readTime?cn(s.readTime):oe.min(),o=ct.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=zc(t,s.document),i=s.removedTargetIds||[];n=new Bo([],i,r,null)}else{if(!("filter"in e))return ne();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new b1(r,i),a=s.targetId;n=new B_(a,o)}}return n}function L1(t,e){let n;if(e instanceof to)n={update:Tf(t,e.key,e.value)};else if(e instanceof rc)n={delete:ql(t,e.key)};else if(e instanceof us)n={update:Tf(t,e.key,e.data),updateMask:W1(e.fieldMask)};else{if(!(e instanceof I1))return ne();n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ne()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:V1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function F1(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?cn(r.updateTime):cn(i);return o.isEqual(oe.min())&&(o=cn(i)),new v1(o,r.transformResults||[])}(n,e))):[]}function U1(t,e){return{documents:[z_(t,e.path)]}}function $1(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=z_(t,r);const i=function(l){if(l.length!==0)return G_(zt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:tr(f.field),direction:q1(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:r}}function B1(t){let e=M1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ce(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=K_(h);return f instanceof zt&&E_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(E){return new Oi(nr(E.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ja(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new la(m,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new la(m,f)}(n.endAt)),a1(e,r,o,i,a,"F",c,l)}function j1(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=nr(n.unaryFilter.field);return Ke.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=nr(n.unaryFilter.field);return Ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nr(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=nr(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(nr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(s=>K_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function q1(t){return k1[t]}function H1(t){return D1[t]}function z1(t){return N1[t]}function tr(t){return{fieldPath:t.canonicalString()}}function nr(t){return nt.fromServerFormat(t.fieldPath)}function G_(t){return t instanceof Ke?function(n){if(n.op==="=="){if(lf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NAN"}};if(cf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NAN"}};if(cf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(n.field),op:H1(n.op),value:n.value}}}(t):t instanceof zt?function(n){const s=n.getFilters().map(r=>G_(r));return s.length===1?s[0]:{compositeFilter:{op:z1(n.op),filters:s}}}(t):ne()}function W1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Bn{constructor(e,n,s,r,i=oe.min(),o=oe.min(),a=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class K1{constructor(e){this.ut=e}}function G1(t){const e=B1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$l(e,e.limit,"L"):e}/**
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
 */class Q1{constructor(){this.on=new Y1}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Xn.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class Y1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new rt(Oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new rt(Oe.comparator)).toArray()}}/**
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
 */class Sr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Sr(0)}static Nn(){return new Sr(-1)}}/**
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
 */class J1{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class X1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Z1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&fi(s.mutation,r,Ct.empty(),Ne.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,pe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=pe()){const r=Is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Xr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,pe()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=An();const o=di(),a=function(){return di()}();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof us)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),fi(u.mutation,l,u.mutation.getFieldMask(),Ne.now())):o.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new X1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=di();let r=new Le((o,a)=>o-a),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ct.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||pe()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=k_();u.forEach(f=>{if(!i.has(f)){const m=F_(n.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):b_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(Is());let a=-1,c=i;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,pe())).next(u=>({batchId:a,changes:P_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(s=>{let r=Xr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Xr();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,c=>{const l=function(h,f){return new Fr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s,r).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ct.newInvalidDocument(u)))});let a=Xr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&fi(u.mutation,l,Ct.empty(),Ne.now()),ec(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class eR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:cn(r.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:G1(r.bundledQuery),readTime:cn(r.readTime)}}(n)),P.resolve()}}/**
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
 */class tR{constructor(){this.overlays=new Le(Y.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Is();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=Is(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Le((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Is(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Is(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return P.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new A1(n,s));let i=this.lr.get(n);i===void 0&&(i=pe(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
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
 */class lh{constructor(){this.hr=new rt(Qe.Pr),this.Ir=new rt(Qe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Qe(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new Y(new Oe([])),s=new Qe(n,e),r=new Qe(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Y(new Oe([])),s=new Qe(n,e),r=new Qe(n,e+1);let i=pe();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Y.comparator(e.key,n.key)||Re(e.gr,n.gr)}static Tr(e,n){return Re(e.gr,n.gr)||Y.comparator(e.key,n.key)}}/**
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
 */class nR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new rt(Qe.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new T1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),r=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new rt(Re);return n.forEach(r=>{const i=new Qe(r,0),o=new Qe(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),P.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new Y(i),0);let a=new rt(Re);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ce(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return P.forEach(n.mutations,r=>{const i=new Qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Qe(n,0),r=this.yr.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sR{constructor(e){this.Cr=e,this.docs=function(){return new Le(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let s=An();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ct.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=An();const o=n.path,a=new Y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||qb(jb(u),s)<=0||(r.has(u.key)||ec(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ne()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new rR(this)}getSize(e){return P.resolve(this.size)}}class rR extends J1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class iR{constructor(e){this.persistence=e,this.Fr=new Ur(n=>rh(n),ih),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Mr=0,this.Or=new lh,this.targetCount=0,this.Nr=Sr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Sr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
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
 */class oR{constructor(e,n){this.Lr={},this.overlays={},this.Br=new eh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new iR(this),this.indexManager=new Q1,this.remoteDocumentCache=function(r){return new sR(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new K1(n),this.Kr=new eR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Lr[e.toKey()];return s||(s=new nR(n,this.referenceDelegate),this.Lr[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){G("MemoryPersistence","Starting transaction:",e);const r=new aR(this.Br.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return P.or(Object.values(this.Lr).map(s=>()=>s.containsKey(e,n)))}}class aR extends zb{constructor(e){super(),this.currentSequenceNumber=e}}class uh{constructor(e){this.persistence=e,this.Gr=new lh,this.zr=null}static jr(e){return new uh(e)}get Hr(){if(this.zr)return this.zr;throw ne()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,s=>{const r=Y.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,oe.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class hh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=pe(),r=pe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hh(e,n.fromCache,s,r)}}/**
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
 */class cR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return Ww()?8:Wb(it())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Wr()<=_e.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",er(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(Wr()<=_e.DEBUG&&G("QueryEngine","Query:",er(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Wr()<=_e.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",er(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):P.resolve())}zi(e,n){if(ff(n))return P.resolve(null);let s=an(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=$l(n,null,"F"),s=an(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=pe(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,$l(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,s,r){return ff(n)||r.isEqual(oe.min())?P.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?P.resolve(null):(Wr()<=_e.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),er(n)),this.Xi(e,o,n,Bb(r,-1)).next(a=>a))})}Yi(e,n){let s=new rt(S_(e));return n.forEach((r,i)=>{ec(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Wr()<=_e.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",er(n)),this.Gi.getDocumentsMatchingQuery(e,n,Xn.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class uR{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new Le(Re),this.ns=new Ur(i=>rh(i),ih),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function hR(t,e,n,s){return new uR(t,e,n,s)}async function Y_(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=pe();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function dR(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let m=P.resolve();return f.forEach(E=>{m=m.next(()=>u.getEntry(c,E)).next(g=>{const y=l.docVersions.get(E);Ce(y!==null),g.version.compareTo(y)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=pe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function J_(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function fR(t,e){const n=ce(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(mt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(g,y,w){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=An(),l=pe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(mR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!s.isEqual(oe.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=r,i))}function mR(t,e,n){let s=pe(),r=pe();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=An();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:r}})}function pR(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function gR(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new Bn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function zl(t,e,n){const s=ce(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!eo(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function Af(t,e,n){const s=ce(t);let r=oe.min(),i=pe();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ce(c),f=h.ns.get(u);return f!==void 0?P.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(s,o,an(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:oe.min(),n?i:pe())).next(a=>(_R(s,l1(e),a),{documents:a,ls:i})))}function _R(t,e,n){let s=t.rs.get(e)||oe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class bf{constructor(){this.activeTargetIds=p1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yR{constructor(){this.eo=new bf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new bf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vR{ro(e){}shutdown(){}}/**
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
 */class Rf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ro=null;function Wc(){return Ro===null?Ro=function(){return 268435456+Math.round(2147483648*Math.random())}():Ro++,"0x"+Ro.toString(16)}/**
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
 */const wR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ER{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
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
 */const ot="WebChannelConnection";class IR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=s+"://"+n.host,this.wo=`projects/${r}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get bo(){return!1}Do(n,s,r,i,o){const a=Wc(),c=this.Co(n,s.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,r).then(u=>(G("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Er("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",r),u})}Mo(n,s,r,i,o,a){return this.Do(n,s,r,i,o)}vo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}Co(n,s){const r=wR[n];return`${this.yo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,s,r){const i=Wc();return new Promise((o,a)=>{const c=new kb;c.setWithCredentials(!0),c.listenOnce(Sb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hc.NO_ERROR:const u=c.getResponseJson();G(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Hc.TIMEOUT:G(ot,`RPC '${e}' ${i} timed out`),a(new z(b.DEADLINE_EXCEEDED,"Request time out"));break;case Hc.HTTP_ERROR:const h=c.getStatus();if(G(ot,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const E=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(w)>=0?w:b.UNKNOWN}(m.status);a(new z(E,m.message))}else a(new z(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(b.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{G(ot,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);G(ot,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}xo(e,n,s){const r=Wc(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bb(),a=Rb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Pb({})),this.vo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");G(ot,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const E=new ER({co:y=>{m?G(ot,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(f||(G(ot,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),G(ot,`RPC '${e}' stream ${r} sending:`,y),h.send(y))},lo:()=>h.close()}),g=(y,w,x)=>{y.listen(w,K=>{try{x(K)}catch(q){setTimeout(()=>{throw q},0)}})};return g(h,To.EventType.OPEN,()=>{m||(G(ot,`RPC '${e}' stream ${r} transport opened.`),E.Vo())}),g(h,To.EventType.CLOSE,()=>{m||(m=!0,G(ot,`RPC '${e}' stream ${r} transport closed`),E.fo())}),g(h,To.EventType.ERROR,y=>{m||(m=!0,Er(ot,`RPC '${e}' stream ${r} transport errored:`,y),E.fo(new z(b.UNAVAILABLE,"The operation could not be completed")))}),g(h,To.EventType.MESSAGE,y=>{var w;if(!m){const x=y.data[0];Ce(!!x);const K=x,q=K.error||((w=K[0])===null||w===void 0?void 0:w.error);if(q){G(ot,`RPC '${e}' stream ${r} received error:`,q);const W=q.status;let L=function(je){const Fe=He[je];if(Fe!==void 0)return $_(Fe)}(W),ie=q.message;L===void 0&&(L=b.INTERNAL,ie="Unknown error status: "+W+" with message "+q.message),m=!0,E.fo(new z(L,ie)),h.close()}else G(ot,`RPC '${e}' stream ${r} received:`,x),E.po(x)}}),g(a,Cb.STAT_EVENT,y=>{y.stat===tf.PROXY?G(ot,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===tf.NOPROXY&&G(ot,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{E.mo()},0),E}}function Kc(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new O1(t,!0)}/**
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
 */class X_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=s,this.No=r,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),s=Math.max(0,Date.now()-this.qo),r=Math.max(0,n-s);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Z_{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Wo=s,this.Go=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new X_(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.zo===n&&this.a_(s,r)},s=>{e(()=>{const r=new z(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.u_(r)})})}a_(e,n){const s=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{s(()=>this.listener.ho())}),this.stream.Io(()=>{s(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(r=>{s(()=>this.u_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TR extends Z_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=x1(this.serializer,e),s=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?cn(o.readTime):oe.min()}(e);return this.listener.l_(n,s)}h_(e){const n={};n.database=Hl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Fl(c)?{documents:U1(i,c)}:{query:$1(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=q_(i,o.resumeToken);const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=ua(i,o.snapshotVersion.toTimestamp());const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const s=j1(this.serializer,e);s&&(n.labels=s),this.r_(n)}P_(e){const n={};n.database=Hl(this.serializer),n.removeTarget=e,this.r_(n)}}class AR extends Z_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=F1(e.writeResults,e.commitTime),s=cn(e.commitTime);return this.listener.d_(s,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Hl(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>L1(this.serializer,s))};this.r_(n)}}/**
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
 */class bR extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.V_=!1}m_(){if(this.V_)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,s,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,jl(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(b.UNKNOWN,i.toString())})}Mo(e,n,s,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,jl(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(b.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class RR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Tn(n),this.y_=!1):G("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class SR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{s.enqueueAndForget(async()=>{Bs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ce(c);l.M_.add(4),await so(l),l.N_.set("Unknown"),l.M_.delete(4),await ac(l)}(this))})}),this.N_=new RR(s,r)}}async function ac(t){if(Bs(t))for(const e of t.x_)await e(!0)}async function so(t){for(const e of t.x_)await e(!1)}function ey(t,e){const n=ce(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ph(n)?mh(n):$r(n).Zo()&&fh(n,e))}function dh(t,e){const n=ce(t),s=$r(n);n.F_.delete(e),s.Zo()&&ty(n,e),n.F_.size===0&&(s.Zo()?s.t_():Bs(n)&&n.N_.set("Unknown"))}function fh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$r(t).h_(e)}function ty(t,e){t.L_.xe(e),$r(t).P_(e)}function mh(t){t.L_=new P1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),$r(t).start(),t.N_.w_()}function ph(t){return Bs(t)&&!$r(t).Yo()&&t.F_.size>0}function Bs(t){return ce(t).M_.size===0}function ny(t){t.L_=void 0}async function CR(t){t.N_.set("Online")}async function PR(t){t.F_.forEach((e,n)=>{fh(t,e)})}async function kR(t,e){ny(t),ph(t)?(t.N_.D_(e),mh(t)):t.N_.set("Unknown")}async function DR(t,e,n){if(t.N_.set("Online"),e instanceof j_&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.F_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.F_.delete(a),r.L_.removeTarget(a))}(t,e)}catch(s){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ha(t,s)}else if(e instanceof Bo?t.L_.Ke(e):e instanceof B_?t.L_.He(e):t.L_.We(e),!n.isEqual(oe.min()))try{const s=await J_(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(mt.EMPTY_BYTE_STRING,u.snapshotVersion)),ty(i,c);const h=new Bn(u.target,c,l,u.sequenceNumber);fh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){G("RemoteStore","Failed to raise snapshot:",s),await ha(t,s)}}async function ha(t,e,n){if(!eo(e))throw e;t.M_.add(1),await so(t),t.N_.set("Offline"),n||(n=()=>J_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ac(t)})}function sy(t,e){return e().catch(n=>ha(t,n,e))}async function cc(t){const e=ce(t),n=es(e);let s=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;NR(e);)try{const r=await pR(e.localStore,s);if(r===null){e.v_.length===0&&n.t_();break}s=r.batchId,OR(e,r)}catch(r){await ha(e,r)}ry(e)&&iy(e)}function NR(t){return Bs(t)&&t.v_.length<10}function OR(t,e){t.v_.push(e);const n=es(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function ry(t){return Bs(t)&&!es(t).Yo()&&t.v_.length>0}function iy(t){es(t).start()}async function VR(t){es(t).R_()}async function MR(t){const e=es(t);for(const n of t.v_)e.E_(n.mutations)}async function xR(t,e,n){const s=t.v_.shift(),r=oh.from(s,e,n);await sy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await cc(t)}async function LR(t,e){e&&es(t).T_&&await async function(s,r){if(function(o){return R1(o)&&o!==b.ABORTED}(r.code)){const i=s.v_.shift();es(s).e_(),await sy(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await cc(s)}}(t,e),ry(t)&&iy(t)}async function Sf(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const s=Bs(n);n.M_.add(3),await so(n),s&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ac(n)}async function FR(t,e){const n=ce(t);e?(n.M_.delete(2),await ac(n)):e||(n.M_.add(2),await so(n),n.N_.set("Unknown"))}function $r(t){return t.B_||(t.B_=function(n,s,r){const i=ce(n);return i.m_(),new TR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:CR.bind(null,t),Io:PR.bind(null,t),Eo:kR.bind(null,t),l_:DR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),ph(t)?mh(t):t.N_.set("Unknown")):(await t.B_.stop(),ny(t))})),t.B_}function es(t){return t.k_||(t.k_=function(n,s,r){const i=ce(n);return i.m_(),new AR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:VR.bind(null,t),Eo:LR.bind(null,t),A_:MR.bind(null,t),d_:xR.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await cc(t)):(await t.k_.stop(),t.v_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class gh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new gh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _h(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),eo(t))return new z(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Y.comparator(n.key,s.key):(n,s)=>Y.comparator(n.key,s.key),this.keyedMap=Xr(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new fr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new fr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Cf{constructor(){this.q_=new Le(Y.comparator)}track(e){const n=e.doc.key,s=this.q_.get(n);s?e.type!==0&&s.type===3?this.q_=this.q_.insert(n,e):e.type===3&&s.type!==1?this.q_=this.q_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.q_=this.q_.remove(n):e.type===1&&s.type===2?this.q_=this.q_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ne():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Cr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cr(e,n,fr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Za(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class UR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class $R{constructor(){this.queries=new Ur(e=>R_(e),Za),this.onlineState="Unknown",this.z_=new Set}}async function oy(t,e){const n=ce(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.W_()&&e.G_()&&(s=2):(i=new UR,s=e.G_()?0:1);try{switch(s){case 0:i.K_=await n.onListen(r,!0);break;case 1:i.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=_h(o,`Initialization of query '${er(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&yh(n)}async function ay(t,e){const n=ce(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?r=e.G_()?0:1:!i.W_()&&e.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function BR(t,e){const n=ce(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(r)&&(s=!0);o.K_=r}}s&&yh(n)}function jR(t,e,n){const s=ce(t),r=s.queries.get(e);if(r)for(const i of r.U_)i.onError(n);s.queries.delete(e)}function yh(t){t.z_.forEach(e=>{e.next()})}var Wl,Pf;(Pf=Wl||(Wl={})).J_="default",Pf.Cache="cache";class cy{constructor(e,n,s){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=s||{}}H_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Cr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const s=n!=="Offline";return(!this.options.ra||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Wl.Cache}}/**
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
 */class ly{constructor(e){this.key=e}}class uy{constructor(e){this.key=e}}class qR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=pe(),this.mutatedKeys=pe(),this.Ia=S_(e),this.Ta=new fr(this.Ia)}get Ea(){return this.la}da(e,n){const s=n?n.Aa:new Cf,r=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),m=ec(this.query,h)?h:null,E=!!f&&this.mutatedKeys.has(f.key),g=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;f&&m?f.data.isEqual(m.data)?E!==g&&(s.track({type:3,doc:m}),y=!0):this.Ra(f,m)||(s.track({type:2,doc:m}),y=!0,(c&&this.Ia(m,c)>0||l&&this.Ia(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),y=!0):f&&!m&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(m?(o=o.add(m),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ta:o,Aa:s,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(m,E){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return g(m)-g(E)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(s),r=r!=null&&r;const a=n&&!r?this.ma():[],c=this.Pa.size===0&&this.current&&!r?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new Cr(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Cf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=pe(),this.Ta.forEach(s=>{this.ga(s.key)&&(this.Pa=this.Pa.add(s.key))});const n=[];return e.forEach(s=>{this.Pa.has(s)||n.push(new uy(s))}),this.Pa.forEach(s=>{e.has(s)||n.push(new ly(s))}),n}pa(e){this.la=e.ls,this.Pa=pe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Cr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class HR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class zR{constructor(e){this.key=e,this.wa=!1}}class WR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ur(a=>R_(a),Za),this.Da=new Map,this.Ca=new Set,this.va=new Le(Y.comparator),this.Fa=new Map,this.Ma=new lh,this.xa={},this.Oa=new Map,this.Na=Sr.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function KR(t,e,n=!0){const s=gy(t);let r;const i=s.ba.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.ya()):r=await hy(s,e,n,!0),r}async function GR(t,e){const n=gy(t);await hy(n,e,!0,!1)}async function hy(t,e,n,s){const r=await gR(t.localStore,an(e)),i=r.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return s&&(a=await QR(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&ey(t.remoteStore,r),a}async function QR(t,e,n,s,r){t.Ba=(h,f,m)=>async function(g,y,w,x){let K=y.view.da(w);K.Zi&&(K=await Af(g.localStore,y.query,!1).then(({documents:ie})=>y.view.da(ie,K)));const q=x&&x.targetChanges.get(y.targetId),W=x&&x.targetMismatches.get(y.targetId)!=null,L=y.view.applyChanges(K,g.isPrimaryClient,q,W);return Df(g,y.targetId,L.fa),L.snapshot}(t,h,f,m);const i=await Af(t.localStore,e,!0),o=new qR(e,i.ls),a=o.da(i.documents),c=no.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Df(t,n,l.fa);const u=new HR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function YR(t,e,n){const s=ce(t),r=s.ba.get(e),i=s.Da.get(r.targetId);if(i.length>1)return s.Da.set(r.targetId,i.filter(o=>!Za(o,e))),void s.ba.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await zl(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&dh(s.remoteStore,r.targetId),Kl(s,r.targetId)}).catch(Zi)):(Kl(s,r.targetId),await zl(s.localStore,r.targetId,!0))}async function JR(t,e){const n=ce(t),s=n.ba.get(e),r=n.Da.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),dh(n.remoteStore,s.targetId))}async function XR(t,e,n){const s=iS(t);try{const r=await function(o,a){const c=ce(o),l=Ne.now(),u=a.reduce((m,E)=>m.add(E.key),pe());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=An(),g=pe();return c.ss.getEntries(m,u).next(y=>{E=y,E.forEach((w,x)=>{x.isValidDocument()||(g=g.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,E)).next(y=>{h=y;const w=[];for(const x of a){const K=E1(x,h.get(x.key).overlayedDocument);K!=null&&w.push(new us(x.key,K,y_(K.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,w,a)}).next(y=>{f=y;const w=y.applyToLocalDocumentSet(h,g);return c.documentOverlayCache.saveOverlays(m,y.batchId,w)})}).then(()=>({batchId:f.batchId,changes:P_(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new Le(Re)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(s,r.batchId,n),await ro(s,r.changes),await cc(s.remoteStore)}catch(r){const i=_h(r,"Failed to persist write");n.reject(i)}}async function dy(t,e){const n=ce(t);try{const s=await fR(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Fa.get(i);o&&(Ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.wa=!0:r.modifiedDocuments.size>0?Ce(o.wa):r.removedDocuments.size>0&&(Ce(o.wa),o.wa=!1))}),await ro(n,s,e)}catch(s){await Zi(s)}}function kf(t,e,n){const s=ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=ce(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(l=!0)}),l&&yh(c)}(s.eventManager,e),r.length&&s.Sa.l_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZR(t,e,n){const s=ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Fa.get(e),i=r&&r.key;if(i){let o=new Le(Y.comparator);o=o.insert(i,ct.newNoDocument(i,oe.min()));const a=pe().add(i),c=new ic(oe.min(),new Map,new Le(Re),o,a);await dy(s,c),s.va=s.va.remove(i),s.Fa.delete(e),vh(s)}else await zl(s.localStore,e,!1).then(()=>Kl(s,e,n)).catch(Zi)}async function eS(t,e){const n=ce(t),s=e.batch.batchId;try{const r=await dR(n.localStore,e);my(n,s,null),fy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ro(n,r)}catch(r){await Zi(r)}}async function tS(t,e,n){const s=ce(t);try{const r=await function(o,a){const c=ce(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ce(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,e);my(s,e,n),fy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ro(s,r)}catch(r){await Zi(r)}}function fy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function my(t,e,n){const s=ce(t);let r=s.xa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.xa[s.currentUser.toKey()]=r}}function Kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Da.get(e))t.ba.delete(s),n&&t.Sa.ka(s,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(s=>{t.Ma.containsKey(s)||py(t,s)})}function py(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(dh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),vh(t))}function Df(t,e,n){for(const s of n)s instanceof ly?(t.Ma.addReference(s.key,e),nS(t,s)):s instanceof uy?(G("SyncEngine","Document no longer in limbo: "+s.key),t.Ma.removeReference(s.key,e),t.Ma.containsKey(s.key)||py(t,s.key)):ne()}function nS(t,e){const n=e.key,s=n.path.canonicalString();t.va.get(n)||t.Ca.has(s)||(G("SyncEngine","New document in limbo: "+n),t.Ca.add(s),vh(t))}function vh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Y(Oe.fromString(e)),s=t.Na.next();t.Fa.set(s,new zR(n)),t.va=t.va.insert(n,s),ey(t.remoteStore,new Bn(an(Xa(n.path)),s,"TargetPurposeLimboResolution",eh.oe))}}async function ro(t,e,n){const s=ce(t),r=[],i=[],o=[];s.ba.isEmpty()||(s.ba.forEach((a,c)=>{o.push(s.Ba(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=hh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Sa.l_(r),await async function(c,l){const u=ce(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(l,f=>P.forEach(f.ki,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>P.forEach(f.qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!eo(h))throw h;G("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=u.ts.get(f),E=m.snapshotVersion,g=m.withLastLimboFreeSnapshotVersion(E);u.ts=u.ts.insert(f,g)}}}(s.localStore,i))}async function sS(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const s=await Y_(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new z(b.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ro(n,s._s)}}function rS(t,e){const n=ce(t),s=n.Fa.get(e);if(s&&s.wa)return pe().add(s.key);{let r=pe();const i=n.Da.get(e);if(!i)return r;for(const o of i){const a=n.ba.get(o);r=r.unionWith(a.view.Ea)}return r}}function gy(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZR.bind(null,e),e.Sa.l_=BR.bind(null,e.eventManager),e.Sa.ka=jR.bind(null,e.eventManager),e}function iS(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tS.bind(null,e),e}class Nf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hR(this.persistence,new lR,e.initialUser,this.serializer)}createPersistence(e){return new oR(uh.jr,this.serializer)}createSharedClientState(e){return new yR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sS.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $R}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),s=function(i){return new IR(i)}(e.databaseInfo);return function(i,o,a,c){return new bR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new SR(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kf(this.syncEngine,n,0),function(){return Rf.D()?new Rf:new vR}())}createSyncEngine(e,n){return function(r,i,o,a,c,l,u){const h=new WR(r,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(s){const r=ce(s);G("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await so(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class _y{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class aS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=at.UNAUTHENTICATED,this.clientId=p_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=_h(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gc(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Y_(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Of(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lS(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Sf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Sf(e.remoteStore,r)),t._onlineComponents=e}function cS(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function lS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cS(n))throw n;Er("Error using user provided cache. Falling back to memory cache: "+n),await Gc(t,new Nf)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Gc(t,new Nf);return t._offlineComponents}async function yy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Of(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Of(t,new oS))),t._onlineComponents}function uS(t){return yy(t).then(e=>e.syncEngine)}async function Gl(t){const e=await yy(t),n=e.eventManager;return n.onListen=KR.bind(null,e.syncEngine),n.onUnlisten=YR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JR.bind(null,e.syncEngine),n}function hS(t,e,n={}){const s=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new _y({next:f=>{o.enqueueAndForget(()=>ay(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new z(b.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new z(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new cy(Xa(a.path),u,{includeMetadataChanges:!0,ra:!0});return oy(i,h)}(await Gl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function vy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Vf=new Map;/**
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
 */function wy(t,e,n){if(!n)throw new z(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dS(t,e,n,s){if(e===!0&&s===!0)throw new z(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mf(t){if(!Y.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xf(t){if(Y.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lc(t);throw new z(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Lf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new z(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Nb;switch(s.type){case"firstParty":return new xb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new z(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Vf.get(n);s&&(G("ComponentProvider","Removing Datastore"),Vf.delete(n),s.terminate())}(this),Promise.resolve()}}function fS(t,e,n,s={}){var r;const i=(t=Vt(t,uc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=at.MOCK_USER;else{a=$w(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new z(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(l)}t._authCredentials=new Ob(new m_(a,c))}}/**
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
 */class js{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Qn extends js{constructor(e,n,s){super(e,n,Xa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new Y(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function Xt(t,e,...n){if(t=$e(t),wy("collection","path",e),t instanceof uc){const s=Oe.fromString(e,...n);return xf(s),new Qn(t,null,s)}{if(!(t instanceof ft||t instanceof Qn))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return xf(s),new Qn(t.firestore,null,s)}}function Me(t,e,...n){if(t=$e(t),arguments.length===1&&(e=p_.newId()),wy("doc","path",e),t instanceof uc){const s=Oe.fromString(e,...n);return Mf(s),new ft(t,null,new Y(s))}{if(!(t instanceof ft||t instanceof Qn))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return Mf(s),new ft(t.firestore,t instanceof Qn?t.converter:null,new Y(s))}}/**
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
 */class mS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new X_(this,"async_queue_retry"),this.hu=()=>{const n=Kc();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Gn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!eo(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Tn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.uu=!1,s))));return this.iu=n,n}enqueueAfterDelay(e,n,s){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const r=gh.createAndSchedule(this,e,n,s,i=>this.Eu(i));return this._u.push(r),r}Pu(){this.au&&ne()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Ff(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ts extends uc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new mS}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ey(this),this._firestoreClient.terminate()}}function pS(t,e){const n=typeof t=="object"?t:Dp(),s=typeof t=="string"?t:"(default)",r=vu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Fw("firestore");i&&fS(r,...i)}return r}function hc(t){return t._firestoreClient||Ey(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ey(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,l,u){return new Qb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,vy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new aS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class Pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pr(mt.fromBase64String(e))}catch(n){throw new z(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pr(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class io{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */const gS=/^__.*__$/;class _S{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}class Iy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class dc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new dc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.wu(e),r}Su(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return da(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Ty(this.fu)&&gS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class yS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||oc(e)}Fu(e,n,s,r=!1){return new dc({fu:e,methodName:n,vu:s,path:nt.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fc(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new yS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ay(t,e,n,s,r,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,r);bh("Data must be an object, but it was:",o,s);const a=Cy(s,o);let c,l;if(i.merge)c=new Ct(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Ql(e,h,n);if(!o.contains(f))throw new z(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ky(u,f)||u.push(f)}c=new Ct(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new _S(new Tt(a),c,l)}class mc extends qs{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function by(t,e,n){return new dc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Eh extends qs{_toFieldTransform(e){return new nc(e.path,new Vi)}isEqual(e){return e instanceof Eh}}class Ih extends qs{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=by(this,e,!0),s=this.Mu.map(i=>Hs(i,n)),r=new br(s);return new nc(e.path,r)}isEqual(e){return e instanceof Ih&&_r(this.Mu,e.Mu)}}class Th extends qs{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=by(this,e,!0),s=this.Mu.map(i=>Hs(i,n)),r=new Rr(s);return new nc(e.path,r)}isEqual(e){return e instanceof Th&&_r(this.Mu,e.Mu)}}class Ah extends qs{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Mi(e.serializer,O_(e.serializer,this.xu));return new nc(e.path,n)}isEqual(e){return e instanceof Ah&&this.xu===e.xu}}function Ry(t,e,n,s){const r=t.Fu(1,e,n);bh("Data must be an object, but it was:",r,s);const i=[],o=Tt.empty();$s(s,(c,l)=>{const u=Rh(e,c,n);l=$e(l);const h=r.Su(u);if(l instanceof mc)i.push(u);else{const f=Hs(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Ct(i);return new Iy(o,a,r.fieldTransforms)}function Sy(t,e,n,s,r,i){const o=t.Fu(1,e,n),a=[Ql(e,s,n)],c=[r];if(i.length%2!=0)throw new z(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ql(e,i[f])),c.push(i[f+1]);const l=[],u=Tt.empty();for(let f=a.length-1;f>=0;--f)if(!ky(l,a[f])){const m=a[f];let E=c[f];E=$e(E);const g=o.Su(m);if(E instanceof mc)l.push(m);else{const y=Hs(E,g);y!=null&&(l.push(m),u.set(m,y))}}const h=new Ct(l);return new Iy(u,h,o.fieldTransforms)}function vS(t,e,n,s=!1){return Hs(n,t.Fu(s?4:3,e))}function Hs(t,e){if(Py(t=$e(t)))return bh("Unsupported field value:",e,t),Cy(t,e);if(t instanceof qs)return function(s,r){if(!Ty(r.fu))throw r.Du(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Hs(a,r.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=$e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return O_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ne.fromDate(s);return{timestampValue:ua(r.serializer,i)}}if(s instanceof Ne){const i=new Ne(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ua(r.serializer,i)}}if(s instanceof wh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pr)return{bytesValue:q_(r.serializer,s._byteString)};if(s instanceof ft){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ch(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.Du(`Unsupported field value: ${lc(s)}`)}(t,e)}function Cy(t,e){const n={};return g_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(s,r)=>{const i=Hs(r,e.pu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Py(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof wh||t instanceof Pr||t instanceof ft||t instanceof qs)}function bh(t,e,n){if(!Py(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=lc(n);throw s==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+s)}}function Ql(t,e,n){if((e=$e(e))instanceof io)return e._internalPath;if(typeof e=="string")return Rh(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const wS=new RegExp("[~\\*/\\[\\]]");function Rh(t,e,n){if(e.search(wS)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new io(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new z(b.INVALID_ARGUMENT,a+t+c)}function ky(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Dy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ES(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ES extends Dy{data(){return super.data()}}function pc(t,e){return typeof e=="string"?Rh(t,e):e instanceof io?e._internalPath:e._delegate._internalPath}/**
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
 */function IS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sh{}class Ny extends Sh{}function ps(t,e,...n){let s=[];e instanceof Sh&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof Ch).length,a=i.filter(c=>c instanceof gc).length;if(o>1||o>0&&a>0)throw new z(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class gc extends Ny{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new gc(e,n,s)}_apply(e){const n=this._parse(e);return Oy(e._query,n),new js(e.firestore,e.converter,Ul(e._query,n))}_parse(e){const n=fc(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){$f(h,u);const m=[];for(const E of h)m.push(Uf(c,i,E));f={arrayValue:{values:m}}}else f=Uf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||$f(h,u),f=vS(a,o,h,u==="in"||u==="not-in");return Ke.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function hn(t,e,n){const s=e,r=pc("where",t);return gc._create(r,s,n)}class Ch extends Sh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ch(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)Oy(o,c),o=Ul(o,c)}(e._query,n),new js(e.firestore,e.converter,Ul(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ph extends Ny{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ph(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oi(i,o)}(e._query,this._field,this._direction);return new js(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Fr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function TS(t,e="asc"){const n=e,s=pc("orderBy",t);return Ph._create(s,n)}function Uf(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new z(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!b_(e)&&n.indexOf("/")!==-1)throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Oe.fromString(n));if(!Y.isDocumentKey(s))throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return af(t,new Y(s))}if(n instanceof ft)return af(t,n._key);throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lc(n)}.`)}function $f(t,e){if(!Array.isArray(t)||t.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Oy(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class AS{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return $s(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new wh(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Oe.fromString(e);Ce(Q_(s));const r=new Di(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Vy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class My extends Dy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(pc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class jo extends My{data(e={}){return super.data(e)}}class bS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new jo(this._firestore,this._userDataWriter,s.key,s,new ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new jo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ei(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new jo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ei(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:RS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function Yl(t){t=Vt(t,ft);const e=Vt(t.firestore,ts);return hS(hc(e),t._key).then(n=>Ly(e,t,n))}class xy extends AS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function Dt(t,e,n){t=Vt(t,ft);const s=Vt(t.firestore,ts),r=Vy(t.converter,e,n);return _c(s,[Ay(fc(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,bt.none())])}function Ts(t,e,n,...s){t=Vt(t,ft);const r=Vt(t.firestore,ts),i=fc(r);let o;return o=typeof(e=$e(e))=="string"||e instanceof io?Sy(i,"updateDoc",t._key,e,n,s):Ry(i,"updateDoc",t._key,e),_c(r,[o.toMutation(t._key,bt.exists(!0))])}function Qc(t){return _c(Vt(t.firestore,ts),[new rc(t._key,bt.none())])}function Yt(t,...e){var n,s,r;t=$e(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ff(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ff(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ft)l=Vt(t.firestore,ts),u=Xa(t._key.path),c={next:h=>{e[o]&&e[o](Ly(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vt(t,js);l=Vt(h.firestore,ts),u=h._query;const f=new xy(l);c={next:m=>{e[o]&&e[o](new bS(l,f,h,m))},error:e[o+1],complete:e[o+2]},IS(t._query)}return function(f,m,E,g){const y=new _y(g),w=new cy(m,y,E);return f.asyncQueue.enqueueAndForget(async()=>oy(await Gl(f),w)),()=>{y.$a(),f.asyncQueue.enqueueAndForget(async()=>ay(await Gl(f),w))}}(hc(l),u,a,c)}function _c(t,e){return function(s,r){const i=new Gn;return s.asyncQueue.enqueueAndForget(async()=>XR(await uS(s),r,i)),i.promise}(hc(t),e)}function Ly(t,e,n){const s=n.docs.get(e._key),r=new xy(t);return new My(t,r,e._key,s,new ei(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class SS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=fc(e)}set(e,n,s){this._verifyNotCommitted();const r=Yc(e,this._firestore),i=Vy(r.converter,n,s),o=Ay(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,bt.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=Yc(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof io?Sy(this._dataReader,"WriteBatch.update",i._key,n,s,r):Ry(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Yc(e,this._firestore);return this._mutations=this._mutations.concat(new rc(n._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yc(t,e){if((t=$e(t)).firestore!==e)throw new z(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function ti(){return new Eh("serverTimestamp")}function Yn(...t){return new Ih("arrayUnion",t)}function kh(...t){return new Th("arrayRemove",t)}function Jc(t){return new Ah("increment",t)}/**
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
 */function Xc(t){return hc(t=Vt(t,ts)),new SS(t,e=>_c(t,e))}(function(e,n=!0){(function(r){Lr=r})(Or),yr(new ks("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new ts(new Vb(s.getProvider("auth-internal")),new Fb(s.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(l.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Kn(nf,"4.6.1",e),Kn(nf,"4.6.1","esm2017")})();var CS="firebase",PS="10.11.1";/**
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
 */Kn(CS,PS,"app");const kS={apiKey:"AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",authDomain:"vuechat-c27a8.firebaseapp.com",projectId:"vuechat-c27a8",storageBucket:"vuechat-c27a8.appspot.com",messagingSenderId:"713413651968",appId:"1:713413651968:web:93c490d79df8c319cf2e5"},Fy=kp(kS),Ye=IA(Fy),ve=pS(Fy);var DS={BASE_URL:"/friendzy/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const fa=Q(typeof localStorage<"u"&&localStorage.getItem("friendzyLang")||"es"),NS=typeof localStorage<"u"&&localStorage.getItem("friendzyTheme")||"naranja",ma=Q(NS),Zc={es:{cargando:"Cargando...",selecciona:"Selecciona un usuario o una conversación",para_chatear:"para empezar a chatear en privado",conecta_amigos:"Conecta con amigos",conecta_inteligente:"de forma inteligente",auth_intro:"Chat en tiempo real, conoce nuevas personas y crea conexiones significativas en una plataforma segura.",feat1:"Mensajería en tiempo real",feat2:"Conoce personas de todo el mundo",feat3:"Seguridad y privacidad garantizada",stat_users:"Usuarios",stat_msgs:"Mensajes",stat_uptime:"Uptime",mobile_tagline:"Conecta con amigos de todo el mundo",bienvenido:"Bienvenido de vuelta",crea_cuenta:"Crea tu cuenta",login_sub:"Ingresa a tu cuenta para continuar",reg_sub:"Regístrate gratis y empieza a chatear",google_in:"Iniciar sesión con Google",or_email:"o con tu email",nombre:"Nombre",tu_nombre:"Tu nombre",email:"Email",contrasena:"Contraseña",iniciar_login:"Iniciar sesión",crear:"Crear cuenta",no_cuenta:"¿No tienes cuenta?",reg_gratis:"Regístrate gratis",ya_cuenta:"¿Ya tienes cuenta?",inicia_sesion:"Inicia sesión",badge_seguro:"Seguro",badge_tiempo:"Tiempo real",badge_global:"Global",err_completa:"Completa todos los campos",err_email_pass:"Email o contraseña incorrectos",err_email_used:"Este email ya está registrado",err_invalid_email:"Introduce un email válido",err_weak:"La contraseña debe tener al menos 6 caracteres",err_too_many:"Demasiados intentos. Intenta más tarde",busqueda_ph:"Buscar chats o personas...",personas_reg:"Personas registradas",no_personas:"No hay personas registradas",solicitudes:"Solicitudes",quiere_chatear:"Quiere chatear contigo",amigos:"Amigos",en_linea:"En línea",desconectado:"Desconectado",conversaciones:"Conversaciones",sin_conv:"Sin conversaciones todavía",sin_conv_sub:"Busca personas y envía una solicitud para chatear",mi_perfil:"Mi perfil",configuracion:"Configuración",cerrar_sesion:"Cerrar sesión",chat:"Chat",pendiente:"Pendiente",aceptar:"Aceptar",solicitar:"Solicitar",favoritos:"Favoritos",sin_favoritos:"Sin chats favoritos",sin_mensajes:"Sin mensajes todavía",ahora:"ahora",grabar:"Grabando · toca para terminar",nota_larga:"La nota es demasiado larga para enviarse",enviar_ph:"Escribe un mensaje...",no_mensajes:"No hay mensajes todavía",envia_primero:"¡Envía el primero!",hoy:"Hoy",ag_favoritos:"Agregar a favoritos",quitar_fav:"Quitar de favoritos",fotos_compartidas:"Fotos compartidas",sin_fotos:"No hay fotos compartidas todavía",idioma:"Idioma",tema:"Tema",naranja:"Naranja",azul:"Azul",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Tu alias en el chat",cumpleanos:"Fecha de nacimiento",guardar:"Guardar",guardado:"Guardado",cambiar_foto:"Cambiar foto",foto_nombre:"Foto de perfil",mensaje_nuevo:"Nuevo mensaje",nueva_solicitud:"Nueva solicitud de chat",quieres_chatear:"quiere chatear contigo",max_3_fotos:"Máximo 3 fotos por envío",elige_fotos:"Elige tus fotos",enviar_fotos:"Enviar fotos",reaccionar:"Reaccionar"},en:{cargando:"Loading...",selecciona:"Select a user or conversation",para_chatear:"to start chatting privately",conecta_amigos:"Connect with friends",conecta_inteligente:"the smart way",auth_intro:"Real-time chat, meet new people and create meaningful connections on a secure platform.",feat1:"Real-time messaging",feat2:"Meet people from all over the world",feat3:"Security and privacy guaranteed",stat_users:"Users",stat_msgs:"Messages",stat_uptime:"Uptime",mobile_tagline:"Connect with friends from everywhere",bienvenido:"Welcome back",crea_cuenta:"Create your account",login_sub:"Sign in to continue",reg_sub:"Sign up for free and start chatting",google_in:"Continue with Google",or_email:"or with your email",nombre:"Name",tu_nombre:"Your name",email:"Email",contrasena:"Password",iniciar_login:"Sign in",crear:"Create account",no_cuenta:"Do not have an account?",reg_gratis:"Sign up free",ya_cuenta:"Already have an account?",inicia_sesion:"Sign in",badge_seguro:"Secure",badge_tiempo:"Real time",badge_global:"Global",err_completa:"Complete all fields",err_email_pass:"Incorrect email or password",err_email_used:"This email is already registered",err_invalid_email:"Enter a valid email",err_weak:"Password must be at least 6 characters",err_too_many:"Too many attempts. Try again later",busqueda_ph:"Search chats or people...",personas_reg:"Registered people",no_personas:"No registered people",solicitudes:"Requests",quiere_chatear:"Wants to chat with you",amigos:"Friends",en_linea:"Online",desconectado:"Offline",conversaciones:"Conversations",sin_conv:"No conversations yet",sin_conv_sub:"Search people and send a request to chat",mi_perfil:"My profile",configuracion:"Settings",cerrar_sesion:"Sign out",chat:"Chat",pendiente:"Pending",aceptar:"Accept",solicitar:"Request",favoritos:"Favorites",sin_favoritos:"No favorite chats",sin_mensajes:"No messages yet",ahora:"now",grabar:"Recording · tap to finish",nota_larga:"The voice note is too long to send",enviar_ph:"Write a message...",no_mensajes:"No messages yet",envia_primero:"Send the first one!",hoy:"Today",ag_favoritos:"Add to favorites",quitar_fav:"Remove from favorites",fotos_compartidas:"Shared photos",sin_fotos:"No shared photos yet",idioma:"Language",tema:"Theme",naranja:"Orange",azul:"Blue",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Your chat alias",cumpleanos:"Birthday",guardar:"Save",guardado:"Saved",cambiar_foto:"Change photo",foto_nombre:"Profile photo",mensaje_nuevo:"New message",nueva_solicitud:"New chat request",quieres_chatear:"wants to chat with you",max_3_fotos:"Maximum 3 photos per send",elige_fotos:"Choose your photos",enviar_fotos:"Send photos",reaccionar:"React"}};function OS(t){fa.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyLang",t)}function Uy(t=ma.value){const e=document.documentElement;t==="azul"?e.setAttribute("data-theme","azul"):e.removeAttribute("data-theme");const n=document.getElementById("app-favicon");if(n&&typeof import.meta<"u"&&DS){const s="/friendzy/";n.href=s+(t==="azul"?"favicon-azul.svg":"favicon.svg")}}function VS(t){ma.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyTheme",t),Uy(t)}function D(t){return(Zc[fa.value]||Zc.es)[t]??Zc.es[t]??t}const un=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},$y=t=>(rs("data-v-3dbce67b"),t=t(),is(),t),MS=["width","height"],xS=$y(()=>d("path",{d:"M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z",fill:"white","fill-opacity":"0.95"},null,-1)),LS=$y(()=>d("path",{d:"M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z",style:{fill:"var(--primary)"}},null,-1)),FS=[xS,LS],US={__name:"Logo",props:{className:{type:String,default:""},size:{type:String,default:"md"},showText:{type:Boolean,default:!1},variant:{type:String,default:"default"},center:{type:Boolean,default:!1}},setup(t){const e=t,s={sm:{badge:"logo-sm",text:"16px",icon:16},md:{badge:"logo-md",text:"20px",icon:20},lg:{badge:"logo-lg",text:"24px",icon:24},xl:{badge:"logo-xl",text:"30px",icon:28}}[e.size],r=e.variant==="white";return(i,o)=>(M(),U("div",{class:de(["logo",[{center:t.center},t.className]])},[d("div",{class:de(["logo-badge",[r?"logo-badge-white":"gradient-orange",k(s).badge]])},[(M(),U("svg",{width:k(s).icon,height:k(s).icon,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},FS,8,MS))],2),t.showText?(M(),U("span",{key:0,class:de(["logo-text",[r?"text-white":"text-dark",k(s).text]])}," Friendzy ",2)):Te("",!0)],2))}},Jl=un(US,[["__scopeId","data-v-3dbce67b"]]),$S={},BS={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},jS=d("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"},null,-1),qS=d("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"},null,-1),HS=d("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"},null,-1),zS=d("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"},null,-1),WS=[jS,qS,HS,zS];function KS(t,e){return M(),U("svg",BS,WS)}const GS=un($S,[["render",KS]]),Pn=t=>(rs("data-v-a171bb12"),t=t(),is(),t),QS={class:"auth"},YS={class:"auth-left"},JS=Pn(()=>d("div",{class:"auth-grid-white"},null,-1)),XS={class:"auth-left-inner"},ZS={class:"auth-left-mid"},eC=Pn(()=>d("br",null,null,-1)),tC=Pn(()=>d("span",{class:"auth-checkmark"},[d("i",{class:"mdi mdi-check"})],-1)),nC={class:"auth-stats"},sC={class:"auth-right"},rC=Pn(()=>d("div",{class:"auth-right-grid"},null,-1)),iC={class:"auth-form-wrap"},oC={class:"auth-mobile-logo"},aC={class:"auth-card"},cC={class:"auth-card-head"},lC={class:"divider"},uC={class:"fields"},hC={key:0,class:"field"},dC=["placeholder"],fC={class:"field"},mC={class:"field"},pC={key:0,class:"auth-error"},gC=Pn(()=>d("i",{class:"mdi mdi-alert-circle-outline"},null,-1)),_C=["disabled"],yC=Pn(()=>d("i",{class:"mdi mdi-arrow-right"},null,-1)),vC={class:"switch-link"},wC={class:"auth-badges"},EC={class:"auth-badge"},IC=Pn(()=>d("i",{class:"mdi mdi-shield-lock-outline"},null,-1)),TC={class:"auth-badge"},AC=Pn(()=>d("i",{class:"mdi mdi-message-text-clock-outline"},null,-1)),bC={class:"auth-badge"},RC=Pn(()=>d("i",{class:"mdi mdi-web"},null,-1)),SC={__name:"AuthScreen",setup(t){const e=Q("login"),n=Q(""),s=Q(""),r=Q(""),i=Q(!1),o=Q(""),a=["feat1","feat2","feat3"],c=[{value:"10K+",label:"stat_users"},{value:"50K+",label:"stat_msgs"},{value:"99%",label:"stat_uptime"}],l=m=>{e.value=m,o.value=""},u=async()=>{try{const m=new dn;await DT(Ye,m)}catch(m){console.log(m)}},h=m=>{switch(m){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return D("err_email_pass");case"auth/email-already-in-use":return D("err_email_used");case"auth/invalid-email":return D("err_invalid_email");case"auth/weak-password":return D("err_weak");case"auth/too-many-requests":return D("err_too_many");default:return`Error: ${m}`}},f=async()=>{if(o.value="",!n.value.trim()||!s.value){o.value=D("err_completa");return}if(s.value.length<6){o.value=D("err_weak");return}i.value=!0;try{if(e.value==="login")await iT(Ye,n.value.trim(),s.value);else{const{user:m}=await rT(Ye,n.value.trim(),s.value);r.value.trim()&&await Pu(m,{displayName:r.value.trim().split(/\s+/)[0]})}}catch(m){console.log(m),o.value=h(m.code)}finally{i.value=!1}};return(m,E)=>(M(),U("main",QS,[d("section",YS,[JS,d("div",XS,[me(Jl,{size:"lg",showText:"",variant:"white"}),d("div",ZS,[d("h1",null,[tn(N(k(D)("conecta_amigos"))+" ",1),eC,d("span",null,N(k(D)("conecta_inteligente")),1)]),d("p",null,N(k(D)("auth_intro")),1),d("ul",null,[(M(),U(ke,null,Ft(a,(g,y)=>d("li",{key:g,class:"auth-feature",style:kr({animationDelay:.3+y*.1+"s"})},[tC,d("span",null,N(k(D)(g)),1)],4)),64))])]),d("div",nC,[(M(),U(ke,null,Ft(c,g=>d("div",{key:g.label},[d("strong",null,N(g.value),1),d("span",null,N(k(D)(g.label)),1)])),64))])])]),d("section",sC,[rC,d("div",iC,[d("div",oC,[me(Jl,{size:"xl",showText:"",center:""}),d("p",null,N(k(D)("mobile_tagline")),1)]),d("div",aC,[d("div",cC,[d("h2",null,N(e.value==="login"?k(D)("bienvenido"):k(D)("crea_cuenta")),1),d("p",null,N(e.value==="login"?k(D)("login_sub"):k(D)("reg_sub")),1)]),d("button",{class:"google-btn",type:"button",onClick:u},[me(GS),d("span",null,N(k(D)("google_in")),1)]),d("div",lC,[d("span",null,N(k(D)("or_email")),1)]),d("div",uC,[e.value==="register"?(M(),U("div",hC,[d("label",null,N(k(D)("nombre")),1),Rs(d("input",{"onUpdate:modelValue":E[0]||(E[0]=g=>r.value=g),type:"text",placeholder:k(D)("tu_nombre")},null,8,dC),[[Ss,r.value]])])):Te("",!0),d("div",fC,[d("label",null,N(k(D)("email")),1),Rs(d("input",{"onUpdate:modelValue":E[1]||(E[1]=g=>n.value=g),type:"email",placeholder:"ejemplo@gmail.com"},null,512),[[Ss,n.value]])]),d("div",mC,[d("label",null,N(k(D)("contrasena")),1),Rs(d("input",{"onUpdate:modelValue":E[2]||(E[2]=g=>s.value=g),type:"password",placeholder:"••••••••",onKeyup:Ep(f,["enter"])},null,544),[[Ss,s.value]])])]),o.value?(M(),U("div",pC,[gC,d("span",null,N(o.value),1)])):Te("",!0),d("button",{class:"submit-btn btn-primary",type:"button",disabled:i.value,onClick:f},[d("span",null,N(i.value?k(D)("cargando"):e.value==="login"?k(D)("iniciar_login"):k(D)("crear")),1),yC],8,_C),d("p",vC,[e.value==="login"?(M(),U(ke,{key:0},[tn(N(k(D)("no_cuenta"))+" ",1),d("a",{href:"#",onClick:E[3]||(E[3]=We(g=>l("register"),["prevent"]))},N(k(D)("reg_gratis")),1)],64)):(M(),U(ke,{key:1},[tn(N(k(D)("ya_cuenta"))+" ",1),d("a",{href:"#",onClick:E[4]||(E[4]=We(g=>l("login"),["prevent"]))},N(k(D)("inicia_sesion")),1)],64))])]),d("div",wC,[d("div",EC,[IC,d("span",null,N(k(D)("badge_seguro")),1)]),d("div",TC,[AC,d("span",null,N(k(D)("badge_tiempo")),1)]),d("div",bC,[RC,d("span",null,N(k(D)("badge_global")),1)])])])])]))}},CC=un(SC,[["__scopeId","data-v-a171bb12"]]),PC=(t,e)=>[t,e].sort().join("_"),jn=(t,e)=>t.split("_").find(n=>n!==e);let fn=null,Bf=!1;function By(){const t=window.AudioContext||window.webkitAudioContext;!t||typeof window>"u"||(fn||(fn=new t),fn.state==="suspended"&&fn.resume().catch(()=>{}))}const kC=()=>{Bf||(Bf=!0,By())};typeof window<"u"&&["pointerdown","keydown","touchstart"].forEach(t=>window.addEventListener(t,kC,{once:!0}));function jf(){if(By(),!fn)return;const t=fn.currentTime;[660,880].forEach((e,n)=>{const s=fn.createOscillator(),r=fn.createGain(),i=t+n*.12;s.type="sine",s.frequency.value=e,r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.18,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+.35),s.connect(r),r.connect(fn.destination),s.start(i),s.stop(i+.4)})}function DC(){typeof Notification<"u"&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}function qf(t,e){if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(t,{body:e,icon:"/friendzy/favicon.svg"})}catch{}}const NC={key:0,class:"pa-img"},OC=["src","alt"],VC={__name:"PremiumAvatar",props:{src:{type:String,default:""},name:{type:String,required:!0},size:{type:String,default:"md"},online:{type:Boolean,default:void 0},showRing:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,s={sm:{avatar:"pa-size-sm",text:"pa-text-xs",status:"pa-status-sm"},md:{avatar:"pa-size-md",text:"pa-text-sm",status:"pa-status-md"},lg:{avatar:"pa-size-lg",text:"pa-text-base",status:"pa-status-lg"},xl:{avatar:"pa-size-xl",text:"pa-text-xl",status:"pa-status-xl"}}[e.size],r=["linear-gradient(135deg, #f97316, #f59e0b)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #ea580c, #ef4444)","linear-gradient(135deg, #f43f5e, #f97316)","#111827","linear-gradient(135deg, #fb923c, #eab308)"],o=r[Math.abs((c=>(c||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0))(e.name))%r.length],a=(e.name||"?").split(" ").map(c=>c[0]).slice(0,2).join("").toUpperCase();return(c,l)=>(M(),U("div",{class:de(["pa-outer",t.className])},[d("div",{class:de(["pa-ring",t.showRing?"avatar-ring":""])},[d("div",{class:de(["pa-avatar",[k(s).avatar,"pa-"+t.size]])},[t.src?(M(),U("div",NC,[d("img",{src:t.src,alt:t.name,draggable:"false",onContextmenu:l[0]||(l[0]=We(()=>{},["prevent"])),onDragstart:l[1]||(l[1]=We(()=>{},["prevent"]))},null,40,OC)])):(M(),U("div",{key:1,class:"pa-initials",style:kr({background:k(o)})},[d("span",{class:de(k(s).text)},N(k(a)),3)],4))],2)],2),t.online!==void 0?(M(),U("span",{key:0,class:de(["pa-status",[k(s).status,t.online?"pa-online":"pa-offline"]])},null,2)):Te("",!0)],2))}},$n=un(VC,[["__scopeId","data-v-fc1b44dd"]]),wt=t=>(rs("data-v-b294583e"),t=t(),is(),t),MC={class:"sidebar"},xC={class:"sb-header"},LC=wt(()=>d("i",{class:"mdi mdi-close"},null,-1)),FC=[LC],UC={class:"sb-profile-wrap"},$C={class:"sb-profile-info"},BC={class:"sb-profile-name"},jC={class:"sb-profile-email"},qC=wt(()=>d("i",{class:"mdi mdi-chevron-down sb-profile-caret"},null,-1)),HC={key:0,class:"sb-menu"},zC=wt(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),WC=wt(()=>d("i",{class:"mdi mdi-cog-outline"},null,-1)),KC=wt(()=>d("div",{class:"sb-menu-sep"},null,-1)),GC=wt(()=>d("i",{class:"mdi mdi-logout"},null,-1)),QC={class:"sb-search-row"},YC={class:"sb-search"},JC=wt(()=>d("i",{class:"mdi mdi-magnify sb-search-icon"},null,-1)),XC=["placeholder"],ZC={key:0,class:"sb-newchat"},eP={class:"sb-label"},tP=wt(()=>d("i",{class:"mdi mdi-account-multiple-outline"},null,-1)),nP=["onClick"],sP={class:"sb-user-body"},rP={class:"sb-user-name"},iP=["onClick"],oP=["onClick"],aP=wt(()=>d("i",{class:"mdi mdi-message-outline"},null,-1)),cP={key:0,class:"sb-empty-note"},lP={class:"sb-section"},uP={class:"sb-label"},hP=wt(()=>d("i",{class:"mdi mdi-bell-outline"},null,-1)),dP={class:"sb-count sb-count-alert"},fP={class:"sb-list sb-friends"},mP={class:"conv-body"},pP={class:"conv-top"},gP={class:"conv-name"},_P={class:"conv-bottom"},yP={class:"conv-preview"},vP=["onClick"],wP=wt(()=>d("i",{class:"mdi mdi-check"},null,-1)),EP=[wP],IP=["onClick"],TP=wt(()=>d("i",{class:"mdi mdi-close"},null,-1)),AP=[TP],bP={class:"sb-section"},RP={class:"sb-label"},SP=wt(()=>d("i",{class:"mdi mdi-heart"},null,-1)),CP={class:"sb-count"},PP={class:"sb-list sb-friends"},kP=["onClick"],DP={class:"conv-body"},NP={class:"conv-top"},OP={class:"conv-name"},VP={class:"conv-bottom"},MP={class:"conv-preview"},xP=["onClick"],LP=wt(()=>d("i",{class:"mdi mdi-minus"},null,-1)),FP=[LP],UP={class:"sb-section"},$P={class:"sb-label"},BP=wt(()=>d("i",{class:"mdi mdi-message-text-outline"},null,-1)),jP={class:"sb-count"},qP={class:"sb-list"},HP=["onClick"],zP={class:"conv-body"},WP={class:"conv-top"},KP={class:"conv-name"},GP={class:"conv-right"},QP={key:0,class:"mdi mdi-star conv-star"},YP={key:1,class:"conv-badge"},JP={key:2,class:"conv-time"},XP={class:"conv-bottom"},ZP={class:"conv-preview"},ek={key:0,class:"sb-empty"},tk={class:"sb-empty-sub"},nk=3e4,sk={__name:"Conversations",props:{activeId:{type:String,default:""},isMobile:{type:Boolean,default:!1},profile:{type:Object,default:()=>({})},favorites:{type:Array,default:()=>[]}},emits:["open","close","openProfile","openSettings"],setup(t,{emit:e}){const n=e,s=t,r=Ye.currentUser,i=Q([]),o=Q([]),a=Q([]),c=Q([]),l=Q([]),u=Q([]),h=Q([]),f=Q([]),m=Q(""),E=Q(!1),g=Q(!1),y=Ee(()=>s.profile.displayName||(r==null?void 0:r.displayName)||(r==null?void 0:r.email)||"Usuario"),w=(r==null?void 0:r.email)||"",x=Ee(()=>s.profile.photoURL||(r==null?void 0:r.photoURL)||"");let K=null,q=null,W=null,L=null,ie=null,ge=null,je=null,Fe=null,X=!1,J=!1;const ee={};np(()=>{K=Yt(ps(Xt(ve,"users")),v=>{i.value=v.docs.map(I=>I.data()).filter(I=>I.uid!==r.uid)},v=>console.error("denied:users",v.code)),q=Yt(ps(Xt(ve,"conversations"),hn("participants","array-contains",r.uid)),v=>{var j,se;const I=[],A={};if(v.forEach(ae=>{const Ie=ae.data();A[ae.id]=Ie,I.push({id:ae.id,...Ie})}),I.sort((ae,Ie)=>{var Ue,Lt,Kt,Gt;return(((Lt=(Ue=Ie.lastAt)==null?void 0:Ue.toMillis)==null?void 0:Lt.call(Ue))??0)-(((Gt=(Kt=ae.lastAt)==null?void 0:Kt.toMillis)==null?void 0:Gt.call(Kt))??0)}),o.value=I,!X){X=!0,v.forEach(ae=>{var Ie,Ue;ee[ae.id]=((Ue=(Ie=ae.data())==null?void 0:Ie.unread)==null?void 0:Ue[r.uid])||0});return}v.forEach(ae=>{var Kt;const Ie=ae.data(),Ue=((Kt=Ie.unread)==null?void 0:Kt[r.uid])||0,Lt=ee[ae.id]||0;if(ee[ae.id]=Ue,Ue>Lt&&ae.id!==s.activeId){const Gt=jn(ae.id,r.uid),Gs=i.value.find(kt=>kt.uid===Gt),gt=typeof Ie.lastMessage=="string"?Ie.lastMessage:"📷 Foto";qf(`${D("mensaje_nuevo")} de ${(Gs==null?void 0:Gs.displayName)||""}`,gt),jf()}}),s.activeId&&(((se=(j=A[s.activeId])==null?void 0:j.unread)==null?void 0:se[r.uid])||0)>0&&ue(s.activeId)},v=>console.error("denied:convs",v.code)),W=Yt(Me(ve,"users",r.uid),v=>{var I;a.value=((I=v.data())==null?void 0:I.friends)||[]},v=>console.error("denied:me",v.code)),L=Yt(ps(Xt(ve,"requests"),hn("to","==",r.uid),hn("status","==","pending")),v=>{if(c.value=v.docs.map(I=>({id:I.id,...I.data()})),!J){J=!0;return}v.docChanges().forEach(I=>{if(I.type==="added"){const A=I.doc.data(),j=i.value.find(se=>se.uid===A.from);qf(D("nueva_solicitud"),`${(j==null?void 0:j.displayName)||"Alguien"} ${D("quieres_chatear")}`),jf()}})},v=>console.error("denied:incoming",v.code)),ie=Yt(ps(Xt(ve,"requests"),hn("from","==",r.uid),hn("status","==","pending")),v=>{l.value=v.docs.map(I=>({id:I.id,...I.data()}))},v=>console.error("denied:sent",v.code)),ge=Yt(ps(Xt(ve,"requests"),hn("from","==",r.uid),hn("status","==","accepted")),v=>{h.value=v.docs.map(I=>({id:I.id,...I.data()})),he()},v=>console.error("denied:accOut",v.code)),je=Yt(ps(Xt(ve,"requests"),hn("to","==",r.uid),hn("status","==","accepted")),v=>{u.value=v.docs.map(I=>({id:I.id,...I.data()})),he()},v=>console.error("denied:accIn",v.code)),Fe=v=>{v.target.closest(".sb-profile-wrap")||(E.value=!1),v.target.closest(".sb-search-row")||(g.value=!1)},document.addEventListener("click",Fe),setTimeout(()=>DC(),1500)}),Nr(()=>{K==null||K(),q==null||q(),W==null||W(),L==null||L(),ie==null||ie(),ge==null||ge(),je==null||je(),Fe&&document.removeEventListener("click",Fe)});const fe=()=>{E.value=!1,n("openProfile")},Ve=()=>{E.value=!1,n("openSettings")},be=v=>s.favorites.includes(v),he=()=>{f.value=[...u.value,...h.value]},ue=v=>{Ts(Me(ve,"conversations",v),{[`unread.${r.uid}`]:0}).catch(()=>{})},qe=v=>i.value.find(I=>I.uid===v),pt=Ee(()=>c.value),Wt=Ee(()=>{const v=new Set(a.value);return f.value.forEach(I=>{v.add(I.from===r.uid?I.to:I.from)}),v}),Et=Ee(()=>i.value.filter(v=>Wt.value.has(v.uid))),ao=Ee(()=>new Set(l.value.map(v=>v.to))),kn=v=>Wt.value.has(v.uid)?"friend":ao.value.has(v.uid)?"pending":pt.value.some(I=>I.from===v.uid)?"incoming":"none",wc=v=>D(v==="pending"?"pendiente":v==="incoming"?"aceptar":"solicitar"),xt=v=>v==="pending"?"mdi-clock-outline":v==="incoming"?"mdi-check":"mdi-account-plus-outline",Ks=v=>{kn(v)==="friend"&&C(v)},jr=v=>{const I=kn(v);if(I==="incoming"){const A=pt.value.find(j=>j.from===v.uid);A&&Dn(A)}else I==="none"&&co(v)},co=async v=>{const I=`${r.uid}_${v.uid}`;await Dt(Me(ve,"requests",I),{from:r.uid,to:v.uid,status:"pending",createdAt:ti()})},Dn=async v=>{const I=Me(ve,"requests",v.id),A=Me(ve,"users",r.uid);await Dt(I,{status:"accepted"},{merge:!0}),await Dt(A,{friends:Yn(v.from)},{merge:!0});const j=i.value.find(se=>se.uid===v.from);await C({uid:v.from,displayName:(j==null?void 0:j.displayName)||v.from,photoURL:(j==null?void 0:j.photoURL)||""})},lo=async v=>{await Qc(Me(ve,"requests",v.id))},uo=async v=>{const I=Me(ve,"users",r.uid);await Dt(I,{friends:kh(v.uid)},{merge:!0});const A=Me(ve,"requests",`${v.uid}_${r.uid}`),j=await Yl(A);j.exists()&&j.data().from===v.uid&&j.data().to===r.uid&&await Qc(A);const se=Me(ve,"requests",`${r.uid}_${v.uid}`);(await Yl(se)).exists()&&await Dt(se,{status:"declined"},{merge:!0})},p=v=>{const I=T(v);return I?I.displayName:jn(v.id,r.uid)},_=v=>{var I,A;return!!(v&&v.online&&v.lastSeen&&Date.now()-(((A=(I=v.lastSeen).toMillis)==null?void 0:A.call(I))||0)<nk)},T=v=>i.value.find(I=>I.uid===jn(v.id,r.uid)),S=v=>v.lastMessage?v.lastMessage:D("sin_mensajes"),R=Ee(()=>m.value.trim().toLowerCase()),O=Ee(()=>R.value?o.value.filter(v=>p(v).toLowerCase().includes(R.value)):o.value),$=Ee(()=>{let v=i.value;return R.value&&(v=v.filter(I=>(I.displayName||"").toLowerCase().includes(R.value))),v}),V=v=>{var j;const I=((j=v==null?void 0:v.toMillis)==null?void 0:j.call(v))??0;if(!I)return"";const A=Math.floor((Date.now()-I)/1e3);return A<60?D("ahora"):A<3600?`${Math.floor(A/60)}m`:A<86400?`${Math.floor(A/3600)}h`:A<604800?`${Math.floor(A/86400)}d`:new Date(I).toLocaleDateString("es-ES",{day:"numeric",month:"short"})},F=v=>{ue(v.id);const I=i.value.find(A=>A.uid===jn(v.id,r.uid));n("open",{id:v.id,other:{name:p(v),photo:(I==null?void 0:I.photoURL)||""}})},C=async v=>{const I=PC(r.uid,v.uid);g.value=!1;const A=Me(ve,"conversations",I);try{await Dt(A,{participants:Yn(r.uid,v.uid)},{merge:!0})}catch(j){console.error("startWith:conv",j.code,j.message);try{await Qc(A),await Dt(A,{participants:Yn(r.uid,v.uid)},{merge:!0})}catch(se){console.error("startWith:repair",se.code,se.message)}}ue(I),n("open",{id:I,other:{name:v.displayName,photo:v.photoURL||""}})},H=async()=>{try{await Ts(Me(ve,"users",r.uid),{online:!1}).catch(()=>{}),await uT(Ye)}catch(v){console.log(v)}};return(v,I)=>(M(),U("div",MC,[d("div",xC,[me(Jl,{size:"md",showText:""}),t.isMobile?(M(),U("button",{key:0,class:"icon-btn",onClick:I[0]||(I[0]=A=>v.$emit("close"))},FC)):Te("",!0)]),d("div",UC,[d("button",{class:"sb-profile",onClick:I[1]||(I[1]=A=>E.value=!E.value)},[me($n,{src:x.value,name:y.value,size:"md",online:""},null,8,["src","name"]),d("div",$C,[d("span",BC,N(y.value),1),d("span",jC,N(k(w)),1)]),qC]),E.value?(M(),U("div",HC,[d("button",{class:"sb-menu-item",onClick:fe},[zC,d("span",null,N(k(D)("mi_perfil")),1)]),d("button",{class:"sb-menu-item",onClick:Ve},[WC,d("span",null,N(k(D)("configuracion")),1)]),KC,d("button",{class:"sb-menu-item sb-menu-danger",onClick:H},[GC,d("span",null,N(k(D)("cerrar_sesion")),1)])])):Te("",!0)]),d("div",QC,[d("div",YC,[JC,Rs(d("input",{"onUpdate:modelValue":I[2]||(I[2]=A=>m.value=A),type:"text",placeholder:k(D)("busqueda_ph"),class:"sb-search-input"},null,8,XC),[[Ss,m.value]])]),d("button",{class:"icon-btn btn-primary sb-plus",onClick:I[3]||(I[3]=A=>g.value=!g.value)},[d("i",{class:de(["mdi",g.value?"mdi-close":"mdi-plus"])},null,2)]),g.value?(M(),U("div",ZC,[d("div",eP,[tP,d("span",null,N(k(D)("personas_reg")),1)]),(M(!0),U(ke,null,Ft($.value,A=>(M(),U("button",{key:A.uid,class:"sb-user-item",onClick:j=>Ks(A)},[me($n,{src:A.photoURL||"",name:A.displayName,size:"md",online:_(A)},null,8,["src","name","online"]),d("div",sP,[d("span",rP,N(A.displayName),1)]),kn(A)!=="friend"?(M(),U("span",{key:0,class:de(["btn-status","btn-"+kn(A)]),onClick:We(j=>jr(A),["stop"])},[d("i",{class:de(["mdi",xt(kn(A))])},null,2),d("span",null,N(wc(kn(A))),1)],10,iP)):(M(),U("span",{key:1,class:"btn-status btn-friend",onClick:We(j=>C(A),["stop"])},[aP,d("span",null,N(k(D)("chat")),1)],8,oP))],8,nP))),128)),$.value.length===0?(M(),U("p",cP,N(k(D)("no_personas")),1)):Te("",!0)])):Te("",!0)]),pt.value.length?(M(),U(ke,{key:0},[d("div",lP,[d("div",uP,[hP,d("span",null,N(k(D)("solicitudes")),1)]),d("span",dP,N(pt.value.length),1)]),d("div",fP,[(M(!0),U(ke,null,Ft(pt.value,A=>{var j,se,ae;return M(),U("div",{key:A.id,class:"conv-item friend-item"},[me($n,{src:((j=qe(A.from))==null?void 0:j.photoURL)||"",name:((se=qe(A.from))==null?void 0:se.displayName)||A.from,size:"lg",online:!!qe(A.from)&&_(qe(A.from))},null,8,["src","name","online"]),d("div",mP,[d("div",pP,[d("span",gP,N(((ae=qe(A.from))==null?void 0:ae.displayName)||A.from),1)]),d("div",_P,[d("span",yP,N(k(D)("quiere_chatear")),1)])]),d("button",{class:"req-btn req-ok",title:"Aceptar",onClick:Ie=>Dn(A)},EP,8,vP),d("button",{class:"req-btn req-no",title:"Rechazar",onClick:Ie=>lo(A)},AP,8,IP)])}),128))])],64)):Te("",!0),Et.value.length?(M(),U(ke,{key:1},[d("div",bP,[d("div",RP,[SP,d("span",null,N(k(D)("amigos")),1)]),d("span",CP,N(Et.value.length),1)]),d("div",PP,[(M(!0),U(ke,null,Ft(Et.value,A=>(M(),U("div",{key:A.uid,class:"conv-item friend-item",onClick:j=>C(A)},[me($n,{src:A.photoURL||"",name:A.displayName,size:"lg",online:_(A)},null,8,["src","name","online"]),d("div",DP,[d("div",NP,[d("span",OP,N(A.displayName),1)]),d("div",VP,[d("span",MP,N(_(A)?k(D)("en_linea"):k(D)("desconectado")),1)])]),d("button",{class:"friend-remove",onClick:We(j=>uo(A),["stop"])},FP,8,xP)],8,kP))),128))])],64)):Te("",!0),d("div",UP,[d("div",$P,[BP,d("span",null,N(k(D)("conversaciones")),1)]),d("span",jP,N(O.value.length),1)]),d("div",qP,[(M(!0),U(ke,null,Ft(O.value,A=>{var j;return M(),U("button",{key:A.id,class:de(["conv-item",{active:A.id===t.activeId}]),onClick:se=>F(A)},[me($n,{name:p(A),size:"lg",online:""},null,8,["name"]),d("div",zP,[d("div",WP,[d("span",KP,N(p(A)),1),d("span",GP,[be(A.id)?(M(),U("i",QP)):Te("",!0),(((j=A.unread)==null?void 0:j[k(r).uid])||0)>0?(M(),U("span",YP,N(A.unread[k(r).uid]),1)):(M(),U("span",JP,N(V(A.lastAt)),1))])]),d("div",XP,[d("span",ZP,N(S(A)),1)])])],10,HP)}),128)),O.value.length===0?(M(),U("div",ek,[d("p",null,N(k(D)("sin_conv")),1),d("p",tk,N(k(D)("sin_conv_sub")),1)])):Te("",!0)])]))}},Hf=un(sk,[["__scopeId","data-v-b294583e"]]),rk=t=>(rs("data-v-b8f53b0a"),t=t(),is(),t),ik={class:"mb-max"},ok={key:0,class:"mb-audio"},ak={class:"mb-audio-head"},ck={class:"mb-audio-track"},lk={class:"mb-audio-time"},uk=["src"],hk={key:1,class:"mb-text"},dk={key:2,class:"mb-image"},fk=["src"],mk=["onClick"],pk={class:"mb-react-emoji"},gk={key:0,class:"mb-react-count"},_k=["title"],yk=rk(()=>d("i",{class:"mdi mdi-emoticon-plus-outline"},null,-1)),vk=[yk],wk={key:1,class:"mdi mdi-check-all mb-check"},Ek=["onClick"],Ik={__name:"MessageBubble",props:{message:{type:Object,required:!0},isOwn:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},senderName:{type:String,default:""},conversationId:{type:String,default:""}},setup(t){const e=t,n=["👍","❤️","😂","😮","😢","🔥"],s=Q(null),r=Q(!1),i=Q(0),o=Q(!1),a=Ee(()=>{var g;return((g=Ye.currentUser)==null?void 0:g.uid)||""}),c=Ee(()=>{const g=e.message.reactions||{};return Object.entries(g).map(([y,w])=>({emoji:y,uidList:Array.isArray(w)?w:[]})).filter(y=>y.uidList.length>0).map(y=>({emoji:y.emoji,count:y.uidList.length,mine:y.uidList.includes(a.value)}))}),l=async g=>{var K;o.value=!1;const y=a.value;if(!y||!e.conversationId||!e.message.id)return;const w=((K=e.message.reactions)==null?void 0:K[g])||[],x=Array.isArray(w)&&w.includes(y);try{await Ts(Me(ve,"conversations",e.conversationId,"messages",e.message.id),{[`reactions.${g}`]:x?kh(y):Yn(y)})}catch(q){console.log("reaction",q)}},u=Ee(()=>{var y;const g=((y=e.message.time)==null?void 0:y.seconds)??0;return g?new Date(g*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),h=Ee(()=>{const g=e.message.duration||0;return`${Math.floor(g/60)}:${String(g%60).padStart(2,"0")}`}),f=()=>{const g=s.value;g&&(r.value?g.pause():g.play().catch(()=>{}),r.value=!r.value)},m=()=>{const g=s.value;!g||!g.duration||(i.value=g.currentTime/g.duration*100)},E=()=>{r.value=!1,i.value=0};return(g,y)=>(M(),U("div",{class:de(["mb-row",t.isOwn?"mb-own":"mb-other"])},[d("div",{class:de(["mb-avatar",t.showAvatar?"":"mb-avatar-hidden"])},[me($n,{src:t.avatar||"",name:t.senderName,size:"sm"},null,8,["src","name"])],2),d("div",ik,[d("div",{class:de(["mb-bubble",t.isOwn?"mb-bubble-own":"mb-bubble-other"])},[t.message.audio?(M(),U("div",ok,[d("div",ak,[d("button",{class:"mb-audio-play",onClick:f},[d("i",{class:de(["mdi",r.value?"mdi-pause":"mdi-play"])},null,2)]),d("div",ck,[d("div",{class:"mb-audio-fill",style:kr({width:i.value+"%"})},null,4)]),d("span",lk,N(h.value),1)]),d("audio",{ref_key:"audioRef",ref:s,src:t.message.audio,preload:"metadata",onTimeupdate:m,onEnded:E},null,40,uk)])):t.message.text?(M(),U("p",hk,N(t.message.text),1)):t.message.image?(M(),U("div",dk,[d("img",{src:t.message.image,alt:"Compartida",draggable:"false",onContextmenu:y[0]||(y[0]=We(()=>{},["prevent"])),onDragstart:y[1]||(y[1]=We(()=>{},["prevent"]))},null,40,fk)])):Te("",!0),c.value.length?(M(),U("div",{key:3,class:de(["mb-reactions",t.isOwn?"mb-reactions-own":""])},[(M(!0),U(ke,null,Ft(c.value,w=>(M(),U("button",{key:w.emoji,class:de(["mb-react-chip",{mine:w.mine}]),onClick:x=>l(w.emoji)},[d("span",pk,N(w.emoji),1),w.count>1?(M(),U("span",gk,N(w.count),1)):Te("",!0)],10,mk))),128))],2)):Te("",!0),d("div",{class:de(["mb-meta",t.isOwn?"mb-meta-own":""])},[t.conversationId?(M(),U("button",{key:0,class:de(["mb-react-trigger",{active:o.value}]),title:k(D)("reaccionar"),onClick:y[2]||(y[2]=We(w=>o.value=!o.value,["stop"]))},vk,10,_k)):Te("",!0),d("span",null,N(u.value),1),t.isOwn?(M(),U("i",wk)):Te("",!0)],2),o.value?(M(),U("div",{key:4,class:de(["mb-react-picker",t.isOwn?"mb-picker-own":""]),onClick:y[3]||(y[3]=We(()=>{},["stop"]))},[(M(),U(ke,null,Ft(n,w=>d("button",{key:w,class:"mb-react-opt",onClick:x=>l(w)},N(w),9,Ek)),64))],2)):Te("",!0)],2)])],2))}},Tk=un(Ik,[["__scopeId","data-v-b8f53b0a"]]),Br=t=>(rs("data-v-bef45fbe"),t=t(),is(),t),Ak={class:"chat-input-wrap"},bk={key:1,class:"ci-attach"},Rk=Br(()=>d("i",{class:"mdi mdi-image-outline"},null,-1)),Sk=[Rk],Ck={class:"ci-picker"},Pk={class:"ci-picker-head"},kk=Br(()=>d("i",{class:"mdi mdi-close"},null,-1)),Dk=[kk],Nk={class:"ci-picker-hint"},Ok={class:"ci-picker-grid"},Vk=["onClick"],Mk=["src"],xk={key:0,class:"ci-picker-check"},Lk=Br(()=>d("i",{class:"mdi mdi-check"},null,-1)),Fk=[Lk],Uk={key:1,class:"ci-picker-num"},$k={class:"ci-picker-foot"},Bk=["disabled"],jk={class:"ci-row"},qk={class:"ci-input-box"},Hk=["placeholder","onKeydown"],zk=Br(()=>d("button",{class:"ci-round-btn ci-smile"},[d("i",{class:"mdi mdi-emoticon-outline"})],-1)),Wk=Br(()=>d("i",{class:"mdi mdi-send"},null,-1)),Kk=[Wk],Gk={key:3,class:"ci-recording"},Qk=Br(()=>d("span",{class:"ci-rec-dot"},null,-1)),Yk={class:"ci-rec-text"},Jk={class:"ci-rec-time"},Xk={key:4,class:"ci-recording"},Zk={class:"ci-rec-text"},eD=3e4,Ys=3,tD={__name:"FormAdd",props:{conversationId:{type:String,required:!0}},setup(t){const e=t,n=Q(""),s=Q(!1),r=Q(!1),i=Q(0),o=Q(""),a=Q([]),c=Q(!1),l=Q(null),u=Q(null),h=Ee(()=>a.value.filter(X=>X.selected).length),f=Ee(()=>{const X=Math.floor(i.value/1e3);return`${Math.floor(X/60)}:${String(X%60).padStart(2,"0")}`}),m={media:null,recorder:null,chunks:[],timer:null,startedAt:0,type:"audio/webm"},E=()=>{const X=l.value;X&&(X.style.height="auto",X.style.height=`${Math.min(X.scrollHeight,128)}px`)},g=async()=>{const X=n.value.trim();if(!(!X||!e.conversationId))try{const J=Ye.currentUser,ee=jn(e.conversationId,J.uid),fe=Me(ve,"conversations",e.conversationId);await Dt(fe,{participants:Yn(J.uid,ee)},{merge:!0});const Ve=Xc(ve),be=Me(Xt(ve,"conversations",e.conversationId,"messages"));Ve.set(be,{text:X,time:Ne.fromDate(new Date),uid:J.uid,displayName:J.displayName}),Ve.update(fe,{lastMessage:X,lastAt:Ne.fromDate(new Date),[`unread.${ee}`]:Jc(1)}),await Ve.commit(),n.value="",Ia(()=>E())}catch(J){console.log(J)}},y=()=>{var X;s.value=!1,(X=u.value)==null||X.click()},w=async X=>{const J=[...X.target.files||[]];if(X.target.value="",!(!J.length||!e.conversationId)){if(J.length>Ys){a.value=J.map((ee,fe)=>({id:fe,file:ee,preview:URL.createObjectURL(ee),selected:fe<Ys})),c.value=!0;return}for(const ee of J)await W(ee)}},x=X=>{const J=a.value[X];J&&(J.selected?J.selected=!1:h.value<Ys&&(J.selected=!0))},K=()=>{a.value.forEach(X=>URL.revokeObjectURL(X.preview)),a.value=[],c.value=!1},q=async()=>{const X=a.value.filter(J=>J.selected);K();for(const J of X)await W(J.file)},W=async X=>{try{const J=await L(X);if(!J)return;const ee=Ye.currentUser,fe=jn(e.conversationId,ee.uid),Ve=Me(ve,"conversations",e.conversationId);await Dt(Ve,{participants:Yn(ee.uid,fe)},{merge:!0});const be=Xc(ve),he=Me(Xt(ve,"conversations",e.conversationId,"messages"));be.set(he,{image:J,text:"",time:Ne.fromDate(new Date),uid:ee.uid,displayName:ee.displayName}),be.update(Ve,{lastMessage:"📷 Foto",lastAt:Ne.fromDate(new Date),[`unread.${fe}`]:Jc(1)}),await be.commit()}catch(J){console.log(J)}},L=X=>new Promise(J=>{const ee=new FileReader;ee.onload=()=>{const fe=new Image;fe.onload=()=>{const be=Math.min(1,1e3/Math.max(fe.naturalWidth,fe.naturalHeight)),he=Math.max(1,Math.round(fe.naturalWidth*be)),ue=Math.max(1,Math.round(fe.naturalHeight*be)),qe=document.createElement("canvas");qe.width=he,qe.height=ue;const pt=qe.getContext("2d");if(!pt)return J(ee.result);pt.fillStyle="#fff",pt.fillRect(0,0,he,ue),pt.drawImage(fe,0,0,he,ue),J(qe.toDataURL("image/jpeg",.75))},fe.onerror=()=>J(null),fe.src=ee.result},ee.onerror=()=>J(null),ee.readAsDataURL(X)}),ie=()=>{if(r.value){je();return}ge()},ge=async()=>{if(e.conversationId)try{const X=await navigator.mediaDevices.getUserMedia({audio:!0}),J=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"",ee=new MediaRecorder(X,{...J?{mimeType:J}:{},audioBitsPerSecond:24e3}),fe=[];ee.ondataavailable=Ve=>{Ve.data&&Ve.data.size>0&&fe.push(Ve.data)},ee.onstop=()=>{var he;(he=m.media)==null||he.getTracks().forEach(ue=>ue.stop());const Ve=Math.max(1,Math.round((Date.now()-m.startedAt)/1e3)),be=new Blob(fe,{type:m.type});Fe(be,Ve)},m.media=X,m.recorder=ee,m.chunks=fe,m.startedAt=Date.now(),ee.start(),m.type=ee.mimeType||J||"audio/webm",r.value=!0,i.value=0,m.timer=setInterval(()=>{i.value=Date.now()-m.startedAt,i.value>=eD&&je()},250)}catch(X){console.log(X),r.value=!1}},je=()=>{clearInterval(m.timer),m.timer=null,r.value=!1;try{m.recorder&&m.recorder.state!=="inactive"&&m.recorder.stop()}catch(X){console.log(X)}},Fe=(X,J)=>{if(!e.conversationId)return;const ee=new FileReader;ee.onload=async()=>{try{const fe=ee.result;if(typeof fe!="string"||fe.length>9e5){o.value=D("nota_larga"),setTimeout(()=>{o.value=""},4e3);return}const Ve=Ye.currentUser,be=jn(e.conversationId,Ve.uid),he=Me(ve,"conversations",e.conversationId);await Dt(he,{participants:Yn(Ve.uid,be)},{merge:!0});const ue=Xc(ve),qe=Me(Xt(ve,"conversations",e.conversationId,"messages"));ue.set(qe,{audio:fe,duration:J,text:"",time:Ne.fromDate(new Date),uid:Ve.uid,displayName:Ve.displayName}),ue.update(he,{lastMessage:"🎤 Nota de voz",lastAt:Ne.fromDate(new Date),[`unread.${be}`]:Jc(1)}),await ue.commit()}catch(fe){console.log(fe)}},ee.readAsDataURL(X)};return Nr(()=>{var X;clearInterval(m.timer),(X=m.media)==null||X.getTracks().forEach(J=>J.stop())}),(X,J)=>(M(),U("div",Ak,[s.value?(M(),U("div",{key:0,class:"ci-backdrop",onClick:J[0]||(J[0]=ee=>s.value=!1)})):Te("",!0),s.value?(M(),U("div",bk,[d("button",{class:"ci-attach-btn",onClick:y},Sk)])):Te("",!0),d("input",{ref_key:"fileInput",ref:u,type:"file",accept:"image/*",multiple:"",class:"hidden",onChange:w},null,544),c.value?(M(),U("div",{key:2,class:"ci-modal",onClick:We(K,["self"])},[d("div",Ck,[d("div",Pk,[d("h4",null,N(k(D)("elige_fotos")),1),d("span",{class:de(["ci-picker-count",{full:h.value===Ys}])},N(h.value)+"/"+N(Ys),3),d("button",{class:"icon-btn",onClick:K},Dk)]),d("p",Nk,N(k(D)("max_3_fotos")),1),d("div",Ok,[(M(!0),U(ke,null,Ft(a.value,(ee,fe)=>(M(),U("div",{key:ee.id,class:de(["ci-picker-item",{selected:ee.selected,dimmed:!ee.selected&&h.value===Ys}]),onClick:Ve=>x(fe)},[d("img",{src:ee.preview,alt:"Foto"},null,8,Mk),ee.selected?(M(),U("span",xk,Fk)):(M(),U("span",Uk,N(fe+1),1))],10,Vk))),128))]),d("div",$k,[d("button",{class:"btn-primary ci-picker-send",disabled:h.value===0,onClick:q},N(k(D)("enviar_fotos")),9,Bk)])])])):Te("",!0),d("div",jk,[d("button",{class:de(["ci-round-btn",{active:s.value}]),onClick:J[1]||(J[1]=ee=>s.value=!s.value)},[d("i",{class:de(["mdi",s.value?"mdi-close":"mdi-paperclip"])},null,2)],2),d("div",qk,[Rs(d("textarea",{ref_key:"taRef",ref:l,"onUpdate:modelValue":J[2]||(J[2]=ee=>n.value=ee),rows:"1",placeholder:k(D)("enviar_ph"),class:"ci-textarea",onInput:E,onKeydown:Ep(We(g,["exact","prevent"]),["enter"])},null,40,Hk),[[Ss,n.value]]),zk]),n.value.trim()?(M(),U("button",{key:0,class:"ci-round-btn btn-primary ci-send",onClick:g},Kk)):(M(),U("button",{key:1,class:de(["ci-round-btn ci-send btn-primary",{recording:r.value}]),onClick:ie},[d("i",{class:de(["mdi",r.value?"mdi-stop":"mdi-microphone"])},null,2)],2))]),r.value?(M(),U("div",Gk,[Qk,d("span",Yk,N(k(D)("grabar")),1),d("span",Jk,N(f.value),1)])):Te("",!0),o.value?(M(),U("div",Xk,[d("span",Zk,N(o.value),1)])):Te("",!0)]))}},nD=un(tD,[["__scopeId","data-v-bef45fbe"]]),zs=t=>(rs("data-v-f4dd8247"),t=t(),is(),t),sD={class:"chat-main-wrap"},rD=zs(()=>d("div",{class:"cm-grid"},null,-1)),iD={class:"cm-header"},oD=zs(()=>d("i",{class:"mdi mdi-menu"},null,-1)),aD=[oD],cD={class:"cm-header-info"},lD={class:"cm-header-actions"},uD={class:"cm-menu"},hD=zs(()=>d("i",{class:"mdi mdi-dots-horizontal"},null,-1)),dD=[hD],fD={key:0,class:"cm-pop"},mD=zs(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),pD=zs(()=>d("i",{class:"mdi mdi-image-multiple-outline"},null,-1)),gD={key:0,class:"cm-empty"},_D=zs(()=>d("i",{class:"mdi mdi-chat-processing-outline cm-empty-icon"},null,-1)),yD={class:"cm-empty-sub"},vD={class:"cm-date-pill"},wD={class:"cm-photos"},ED={class:"cm-photos-head"},ID=zs(()=>d("i",{class:"mdi mdi-close"},null,-1)),TD=[ID],AD={key:0,class:"cm-photos-grid"},bD=["src","onClick"],RD={key:1,class:"cm-photos-empty"},SD=["src"],CD=3e4,PD={__name:"Messages",props:{conversationId:{type:String,required:!0},other:{type:Object,default:()=>({})},profile:{type:Object,default:()=>({})},isFavorite:{type:Boolean,default:!1}},emits:["openDrawer","openProfile","toggleFavorite"],setup(t,{emit:e}){const n=t,s=e,r=Ee(()=>{var q,W,L,ie;return{uid:((q=Ye.currentUser)==null?void 0:q.uid)||"",displayName:((W=n.profile)==null?void 0:W.displayName)||((L=Ye.currentUser)==null?void 0:L.displayName)||((ie=Ye.currentUser)==null?void 0:ie.email)||""}}),i=Ee(()=>{var q,W;return((q=n.profile)==null?void 0:q.photoURL)||((W=Ye.currentUser)==null?void 0:W.photoURL)||""}),o=Q([]),a=Q(null),c=Q(!1),l=Q(!1),u=Q(""),h=Q(!1),f=Ee(()=>o.value.filter(q=>q.image)),m=()=>{c.value=!1,s("openProfile")},E=()=>{c.value=!1,s("toggleFavorite",n.conversationId)},g=()=>{c.value=!1,l.value=!0};let y=null,w=null;const x=q=>{var L;if(w==null||w(),w=null,h.value=!1,!q)return;const W=jn(q,((L=Ye.currentUser)==null?void 0:L.uid)||"");W&&(w=Yt(Me(ve,"users",W),ie=>{var je,Fe;const ge=ie.data()||{};h.value=!!(ge.online&&ge.lastSeen&&Date.now()-(((Fe=(je=ge.lastSeen).toMillis)==null?void 0:Fe.call(je))||0)<CD)},()=>{}))},K=q=>{if(y&&(y(),y=null),o.value=[],!q)return;const W=ps(Xt(ve,"conversations",q,"messages"),TS("time"));y=Yt(W,L=>{o.value=L.docs.map(ie=>({id:ie.id,...ie.data()})),Ia(()=>{var ge;const ie=(ge=a.value)==null?void 0:ge.lastElementChild;ie&&ie.scrollIntoView({behavior:"smooth",block:"end"})})})};return jt(()=>n.conversationId,q=>{K(q),x(q)},{immediate:!0}),Nr(()=>{y==null||y(),w==null||w()}),(q,W)=>(M(),U("div",sD,[rD,d("header",iD,[d("button",{class:"icon-btn cm-menu-btn",onClick:W[0]||(W[0]=L=>q.$emit("openDrawer"))},aD),me($n,{src:t.other.photo||"",name:t.other.name,size:"md"},null,8,["src","name"]),d("div",cD,[d("h2",null,N(t.other.name),1),d("p",null,[d("span",{class:de(["cm-status-dot",{"cm-status-offline":!h.value}])},null,2),tn(" "+N(h.value?k(D)("en_linea"):k(D)("desconectado")),1)])]),d("div",lD,[d("div",uD,[d("button",{class:de(["icon-btn",{active:c.value}]),onClick:W[1]||(W[1]=L=>c.value=!c.value)},dD,2),c.value?(M(),U("div",fD,[d("button",{class:"cm-pop-item",onClick:m},[mD,d("span",null,N(k(D)("mi_perfil")),1)]),d("button",{class:"cm-pop-item",onClick:E},[d("i",{class:de(["mdi",t.isFavorite?"mdi-star":"mdi-star-outline"])},null,2),d("span",null,N(t.isFavorite?k(D)("quitar_fav"):k(D)("ag_favoritos")),1)]),d("button",{class:"cm-pop-item",onClick:g},[pD,d("span",null,N(k(D)("fotos_compartidas")),1)])])):Te("",!0)])])]),o.value.length===0?(M(),U("div",gD,[_D,d("p",null,N(k(D)("no_mensajes")),1),d("p",yD,N(k(D)("envia_primero")),1)])):(M(),U("div",{key:1,class:"cm-list",ref_key:"listRef",ref:a},[d("div",vD,N(k(D)("hoy")),1),(M(!0),U(ke,null,Ft(o.value,(L,ie)=>{var ge;return M(),ys(Tk,{key:L.id,message:L,"is-own":L.uid===r.value.uid,"show-avatar":ie===0||((ge=o.value[ie-1])==null?void 0:ge.uid)!==L.uid,avatar:L.uid===r.value.uid?i.value:t.other.photo,"sender-name":L.uid===r.value.uid?r.value.displayName:t.other.name,"conversation-id":t.conversationId},null,8,["message","is-own","show-avatar","avatar","sender-name","conversation-id"])}),128))],512)),t.conversationId?(M(),ys(nD,{key:2,"conversation-id":t.conversationId},null,8,["conversation-id"])):Te("",!0),l.value?(M(),U("div",{key:3,class:"cm-modal",onClick:W[5]||(W[5]=We(L=>l.value=!1,["self"]))},[d("div",wD,[d("div",ED,[d("h4",null,N(k(D)("fotos_compartidas")),1),d("button",{class:"icon-btn",onClick:W[2]||(W[2]=L=>l.value=!1)},TD)]),f.value.length?(M(),U("div",AD,[(M(!0),U(ke,null,Ft(f.value,L=>(M(),U("img",{key:L.id,src:L.image,alt:"Foto",draggable:"false",onClick:ie=>u.value=L.image,onContextmenu:W[3]||(W[3]=We(()=>{},["prevent"])),onDragstart:W[4]||(W[4]=We(()=>{},["prevent"]))},null,40,bD))),128))])):(M(),U("p",RD,N(k(D)("sin_fotos")),1))])])):Te("",!0),u.value?(M(),U("div",{key:4,class:"cm-lightbox",onClick:W[8]||(W[8]=L=>u.value="")},[d("img",{src:u.value,alt:"Foto",draggable:"false",onContextmenu:W[6]||(W[6]=We(()=>{},["prevent"])),onDragstart:W[7]||(W[7]=We(()=>{},["prevent"]))},null,40,SD)])):Te("",!0)]))}},kD=un(PD,[["__scopeId","data-v-f4dd8247"]]),Ws=t=>(rs("data-v-70fa2247"),t=t(),is(),t),DD={class:"modal-card"},ND={class:"modal-head"},OD=Ws(()=>d("i",{class:"mdi mdi-close"},null,-1)),VD=[OD],MD={class:"set-row"},xD={class:"set-label"},LD=Ws(()=>d("i",{class:"mdi mdi-translate"},null,-1)),FD={class:"set-opts"},UD=Ws(()=>d("span",{class:"set-flag"},"🇪🇸",-1)),$D=Ws(()=>d("span",{class:"set-flag"},"🇺🇸",-1)),BD={class:"set-row"},jD={class:"set-label"},qD=Ws(()=>d("i",{class:"mdi mdi-palette-outline"},null,-1)),HD={class:"set-opts"},zD=Ws(()=>d("span",{class:"swatch swatch-orange"},null,-1)),WD=Ws(()=>d("span",{class:"swatch swatch-blue"},null,-1)),KD={__name:"SettingsPanel",emits:["close"],setup(t,{emit:e}){const n=e,s=()=>setTimeout(()=>n("close"),350),r=o=>{OS(o),s()},i=o=>{VS(o),s()};return(o,a)=>(M(),U("div",{class:"modal-backdrop",onClick:a[5]||(a[5]=We(c=>n("close"),["self"]))},[d("div",DD,[d("div",ND,[d("h3",null,N(k(D)("configuracion")),1),d("button",{class:"icon-btn",onClick:a[0]||(a[0]=c=>n("close"))},VD)]),d("div",MD,[d("div",xD,[LD,d("span",null,N(k(D)("idioma")),1)]),d("div",FD,[d("button",{class:de(["set-opt",{active:k(fa)==="es"}]),onClick:a[1]||(a[1]=c=>r("es"))},[UD,tn(" "+N(k(D)("espanol")),1)],2),d("button",{class:de(["set-opt",{active:k(fa)==="en"}]),onClick:a[2]||(a[2]=c=>r("en"))},[$D,tn(" "+N(k(D)("english")),1)],2)])]),d("div",BD,[d("div",jD,[qD,d("span",null,N(k(D)("tema")),1)]),d("div",HD,[d("button",{class:de(["set-opt set-theme",{active:k(ma)==="naranja"}]),onClick:a[3]||(a[3]=c=>i("naranja"))},[zD,tn(" "+N(k(D)("naranja")),1)],2),d("button",{class:de(["set-opt set-theme",{active:k(ma)==="azul"}]),onClick:a[4]||(a[4]=c=>i("azul"))},[WD,tn(" "+N(k(D)("azul")),1)],2)])])])]))}},GD=un(KD,[["__scopeId","data-v-70fa2247"]]),Dh=t=>(rs("data-v-3bc49a19"),t=t(),is(),t),QD={class:"modal-card"},YD={class:"modal-head"},JD=Dh(()=>d("i",{class:"mdi mdi-close"},null,-1)),XD=[JD],ZD={class:"prof-avatar-wrap"},eN=Dh(()=>d("i",{class:"mdi mdi-camera-outline"},null,-1)),tN={class:"field"},nN=["placeholder"],sN={class:"field"},rN=["disabled"],iN={key:0,class:"saved-note"},oN=Dh(()=>d("i",{class:"mdi mdi-check-circle"},null,-1)),aN={__name:"ProfileModal",props:{profile:{type:Object,default:()=>({})}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,r=Q(""),i=Q(""),o=Q(""),a=Q(""),c=Q(null),l=Q(!1),u=Q(!1);jt(()=>n.profile,g=>{!g||typeof g!="object"||(r.value=g.displayName||"",i.value=g.birthday||"",o.value=g.photoURL||"",a.value=g.photoURL||"")},{immediate:!0});const h=()=>{var g;(g=c.value)==null||g.click()},f=async g=>{var x;const y=(x=g.target.files)==null?void 0:x[0];if(g.target.value="",!y)return;const w=await m(y);w&&(o.value=w,a.value=w)},m=g=>new Promise(y=>{const w=new FileReader;w.onload=()=>{const x=new Image;x.onload=()=>{const q=Math.min(1,512/Math.max(x.naturalWidth,x.naturalHeight)),W=Math.max(1,Math.round(x.naturalWidth*q)),L=Math.max(1,Math.round(x.naturalHeight*q)),ie=document.createElement("canvas");ie.width=W,ie.height=L;const ge=ie.getContext("2d");if(!ge)return y(w.result);ge.fillStyle="#fff",ge.fillRect(0,0,W,L),ge.drawImage(x,0,0,W,L),y(ie.toDataURL("image/jpeg",.8))},x.onerror=()=>y(null),x.src=w.result},w.onerror=()=>y(null),w.readAsDataURL(g)}),E=async()=>{var y;const g=Ye.currentUser;if(g){l.value=!0;try{const w={displayName:r.value.trim()||((y=g.email)==null?void 0:y.split("@")[0])||"Usuario",photoURL:o.value||"",birthday:i.value||""};await Dt(Me(ve,"users",g.uid),w,{merge:!0}),await Pu(g,{displayName:w.displayName,photoURL:w.photoURL}).catch(()=>{}),u.value=!0,setTimeout(()=>s("close"),600)}catch(w){console.log(w)}finally{l.value=!1}}};return(g,y)=>(M(),U("div",{class:"modal-backdrop",onClick:y[3]||(y[3]=We(w=>s("close"),["self"]))},[d("div",QD,[d("div",YD,[d("h3",null,N(k(D)("mi_perfil")),1),d("button",{class:"icon-btn",onClick:y[0]||(y[0]=w=>s("close"))},XD)]),d("div",ZD,[me($n,{src:a.value,name:r.value||"?",size:"xl"},null,8,["src","name"]),d("button",{class:"prof-photo-btn",onClick:h},[eN,d("span",null,N(k(D)("cambiar_foto")),1)]),d("input",{ref_key:"photoInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:f},null,544)]),d("div",tN,[d("label",null,N(k(D)("alias")),1),Rs(d("input",{"onUpdate:modelValue":y[1]||(y[1]=w=>r.value=w),type:"text",placeholder:k(D)("alias_ph")},null,8,nN),[[Ss,r.value]])]),d("div",sN,[d("label",null,N(k(D)("cumpleanos")),1),Rs(d("input",{"onUpdate:modelValue":y[2]||(y[2]=w=>i.value=w),type:"date"},null,512),[[Ss,i.value]])]),d("button",{class:"save-btn btn-primary",type:"button",disabled:l.value,onClick:E},[d("span",null,N(l.value?k(D)("cargando"):k(D)("guardar")),1)],8,rN),u.value?(M(),U("p",iN,[oN,tn(" "+N(k(D)("guardado")),1)])):Te("",!0)])]))}},cN=un(aN,[["__scopeId","data-v-3bc49a19"]]),lN={key:0,class:"app-loading"},uN=d("div",{class:"app-spinner"},null,-1),hN={key:2,class:"app-chat"},dN={class:"side-desktop"},fN={key:1,class:"side-mobile"},mN={key:3,class:"app-placeholder"},pN=d("i",{class:"mdi mdi-chat-processing-outline"},null,-1),gN=[pN],_N={class:"app-placeholder-sub"},yN={__name:"App",setup(t){Uy();const e=Q(null),n=Q(!1),s=Q(!1),r=Q(null),i=Q({}),o=Q(!1),a=Q(!1);let c=null,l=null;const u=y=>{h(),l=setInterval(()=>{Ts(Me(ve,"users",y),{lastSeen:ti(),online:!0}).catch(()=>{})},15e3)},h=()=>{l&&(clearInterval(l),l=null)},f=({id:y,other:w})=>{r.value={id:y,other:w},s.value=!1},m=Ee(()=>i.value.favorites||[]),E=Ee(()=>r.value?m.value.includes(r.value.id):!1),g=async y=>{const w=Ye.currentUser;if(!w)return;const x=Me(ve,"users",w.uid);try{m.value.includes(y)?await Ts(x,{favorites:kh(y)}):await Ts(x,{favorites:Yn(y)})}catch(K){console.log(K)}};return lT(Ye,async y=>{if(e.value=y,n.value=!0,y){u(y.uid);try{const w=q=>(q||"").trim().split(/\s+/)[0]||"",x=Me(ve,"users",y.uid),K=await Yl(x);if(K.exists()){const q=K.data(),W={lastSeen:ti(),online:!0},L=w(y.displayName);L&&q.displayName&&q.displayName===(y.displayName||"")&&q.displayName.includes(" ")&&q.displayName!==L&&(W.displayName=L),await Ts(x,W)}else{const q=w(y.displayName)||w(y.email);await Dt(x,{uid:y.uid,displayName:q,email:y.email,photoURL:y.photoURL||"",online:!0,lastSeen:ti(),createdAt:ti()}),Pu(Ye.currentUser,{displayName:q}).catch(()=>{})}}catch(w){console.error("Error registrando usuario:",w)}c==null||c(),c=Yt(Me(ve,"users",y.uid),w=>{i.value=w.data()||{}},w=>console.error("denied:me",w.code))}else h(),c==null||c(),c=null}),Nr(()=>{h(),c==null||c()}),(y,w)=>(M(),U(ke,null,[n.value?e.value?(M(),U("div",hN,[d("div",dN,[me(Hf,{"active-id":r.value?r.value.id:"",profile:i.value,favorites:m.value,onOpen:f,onOpenProfile:w[0]||(w[0]=x=>a.value=!0),onOpenSettings:w[1]||(w[1]=x=>o.value=!0)},null,8,["active-id","profile","favorites"])]),s.value?(M(),U("div",{key:0,class:"overlay",onClick:w[2]||(w[2]=x=>s.value=!1)})):Te("",!0),s.value?(M(),U("div",fN,[me(Hf,{"active-id":r.value?r.value.id:"",profile:i.value,favorites:m.value,"is-mobile":"",onOpen:f,onClose:w[3]||(w[3]=x=>s.value=!1),onOpenProfile:w[4]||(w[4]=x=>a.value=!0),onOpenSettings:w[5]||(w[5]=x=>o.value=!0)},null,8,["active-id","profile","favorites"])])):Te("",!0),r.value?(M(),ys(kD,{key:2,"conversation-id":r.value.id,other:r.value.other,profile:i.value,"is-favorite":E.value,onOpenDrawer:w[6]||(w[6]=x=>s.value=!0),onOpenProfile:w[7]||(w[7]=x=>a.value=!0),onToggleFavorite:g},null,8,["conversation-id","other","profile","is-favorite"])):(M(),U("div",mN,[d("button",{class:"app-placeholder-icon",onClick:w[8]||(w[8]=x=>s.value=!0)},gN),d("p",null,N(k(D)("selecciona")),1),d("p",_N,N(k(D)("para_chatear")),1)]))])):(M(),ys(CC,{key:1})):(M(),U("div",lN,[uN,d("span",null,N(k(D)("cargando")),1)])),o.value?(M(),ys(GD,{key:3,onClose:w[9]||(w[9]=x=>o.value=!1)})):Te("",!0),a.value?(M(),ys(cN,{key:4,profile:i.value,onClose:w[10]||(w[10]=x=>a.value=!1)},null,8,["profile"])):Te("",!0)],64))}};function vN(t,e){let n;function s(){n=gv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}jt(t,r=>{r&&!n?s():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),vv(()=>{n==null||n.stop()})}const rn=typeof window<"u",wN=rn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function EN(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let r=0;r<s;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function zf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),EN(t,e.split("."),n))}function jy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function Wf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function el(t,e){return e.every(n=>t.hasOwnProperty(n))}function IN(t,e){const n={},s=new Set(Object.keys(t));for(const r of e)s.has(r)&&(n[r]=t[r]);return n}function TN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Kf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Gf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function AN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function bn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const r in t)s[r]=t[r];for(const r in e){const i=t[r],o=e[r];if(Wf(i)&&Wf(o)){s[r]=bn(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){s[r]=n(i,o);continue}s[r]=o}return s}function mr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(mr.cache.has(t))return mr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return mr.cache.set(t,e),e}mr.cache=new Map;const Js=2.4,Qf=.2126729,Yf=.7151522,Jf=.072175,bN=.55,RN=.58,SN=.57,CN=.62,So=.03,Xf=1.45,PN=5e-4,kN=1.25,DN=1.25,Zf=.078,em=12.82051282051282,Co=.06,tm=.001;function nm(t,e){const n=(t.r/255)**Js,s=(t.g/255)**Js,r=(t.b/255)**Js,i=(e.r/255)**Js,o=(e.g/255)**Js,a=(e.b/255)**Js;let c=n*Qf+s*Yf+r*Jf,l=i*Qf+o*Yf+a*Jf;if(c<=So&&(c+=(So-c)**Xf),l<=So&&(l+=(So-l)**Xf),Math.abs(l-c)<PN)return 0;let u;if(l>c){const h=(l**bN-c**RN)*kN;u=h<tm?0:h<Zf?h-h*em*Co:h-Co}else{const h=(l**CN-c**SN)*DN;u=h>-tm?0:h>-Zf?h-h*em*Co:h+Co}return u*100}const pa=.20689655172413793,NN=t=>t>pa**3?Math.cbrt(t):t/(3*pa**2)+4/29,ON=t=>t>pa?t**3:3*pa**2*(t-4/29);function qy(t){const e=NN,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Hy(t){const e=ON,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const VN=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],MN=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,xN=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],LN=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function zy(t){const e=Array(3),n=MN,s=VN;for(let r=0;r<3;++r)e[r]=Math.round(TN(n(s[r][0]*t[0]+s[r][1]*t[1]+s[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Nh(t){let{r:e,g:n,b:s}=t;const r=[0,0,0],i=LN,o=xN;e=i(e/255),n=i(n/255),s=i(s/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return r}const sm=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,FN={rgb:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),rgba:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),hsl:(t,e,n,s)=>rm({h:t,s:e,l:n,a:s}),hsla:(t,e,n,s)=>rm({h:t,s:e,l:n,a:s}),hsv:(t,e,n,s)=>xi({h:t,s:e,v:n,a:s}),hsva:(t,e,n,s)=>xi({h:t,s:e,v:n,a:s})};function yn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&sm.test(t)){const{groups:e}=t.match(sm),{fn:n,values:s}=e,r=s.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return FN[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),$N(e)}else if(typeof t=="object"){if(el(t,["r","g","b"]))return t;if(el(t,["h","s","l"]))return xi(Wy(t));if(el(t,["h","s","v"]))return xi(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function xi(t){const{h:e,s:n,v:s,a:r}=t,i=a=>{const c=(a+e/60)%6;return s-s*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function rm(t){return xi(Wy(t))}function Wy(t){const{h:e,s:n,l:s,a:r}=t,i=s+n*Math.min(s,1-s),o=i===0?0:2-2*s/i;return{h:e,s:o,v:i,a:r}}function Po(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function UN(t){let{r:e,g:n,b:s,a:r}=t;return`#${[Po(e),Po(n),Po(s),r!==void 0?Po(Math.round(r*255)):""].join("")}`}function $N(t){t=BN(t);let[e,n,s,r]=AN(t,2).map(i=>parseInt(i,16));return r=r===void 0?r:r/255,{r:e,g:n,b:s,a:r}}function BN(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Kf(Kf(t,6),8,"F")),t}function jN(t,e){const n=qy(Nh(t));return n[0]=n[0]+e*10,zy(Hy(n))}function qN(t,e){const n=qy(Nh(t));return n[0]=n[0]-e*10,zy(Hy(n))}function HN(t){const e=yn(t);return Nh(e)[1]}function zN(t){const e=Math.abs(nm(yn(0),yn(t)));return Math.abs(nm(yn(16777215),yn(t)))>Math.min(e,50)?"#fff":"#000"}function Ky(t,e){return n=>Object.keys(t).reduce((s,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?s[r]={...o,default:n[r]}:s[r]=o,e&&!s[r].source&&(s[r].source=e),s},{})}const Li=Symbol.for("vuetify:defaults");function WN(t){return Q(t)}function Gy(){const t=oi(Li);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function KN(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[mr(e)])<"u"}function GN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gy();const s=yc("useDefaults");if(e=e??s.type.name??s.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=Ee(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,l){var h,f,m,E;const u=Reflect.get(c,l);return l==="class"||l==="style"?[(h=r.value)==null?void 0:h[l],u].filter(g=>g!=null):typeof l=="string"&&!KN(s.vnode,l)?((f=r.value)==null?void 0:f[l])??((E=(m=n.value)==null?void 0:m.global)==null?void 0:E[l])??u:u}}),o=or();du(()=>{if(r.value){const c=Object.entries(r.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=YN(Li,s);ip(Li,Ee(()=>o.value?bn((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function oo(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Ky(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(s){return IN(s,e)},t.props._as=String,t.setup=function(s,r){const i=Gy();if(!i.value)return t._setup(s,r);const{props:o,provideSubDefaults:a}=GN(s,s._as??t.name,i),c=t._setup(o,r);return a(),c}}return t}function QN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?oo:h0)(e)}function yc(t,e){const n=K0();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Qy=0,qo=new WeakMap;function Yy(){const t=yc("getUid");if(qo.has(t))return qo.get(t);{const e=Qy++;return qo.set(t,e),e}}Yy.reset=()=>{Qy=0,qo=new WeakMap};function YN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:yc("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function JN(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=yc("useProxiedModel"),o=Q(t[e]!==void 0?t[e]:n),a=mr(e),l=Ee(a!==e?()=>{var h,f,m,E;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(E=i.vnode.props)!=null&&E.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});vN(()=>!l.value,()=>{jt(()=>t[e],h=>{o.value=h})});const u=Ee({get(){const h=t[e];return s(l.value?h:o.value)},set(h){const f=r(h),m=Ae(l.value?t[e]:o.value);m===f||s(m)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const XN={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},im="$vuetify.",om=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),Jy=(t,e,n)=>function(s){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(!s.startsWith(im))return om(s,i);const a=s.replace(im,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=zf(c,a,null);return u||(`${s}${t.value}`,u=zf(l,a,null)),u||(u=s),typeof u!="string"&&(u=s),om(u,i)};function Xy(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function tl(t,e,n){const s=JN(t,e,t[e]??n.value);return s.value=t[e]??n.value,jt(n,r=>{t[e]==null&&(s.value=n.value)}),s}function Zy(t){return e=>{const n=tl(e,"locale",t.current),s=tl(e,"fallback",t.fallback),r=tl(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:r,t:Jy(n,s,r),n:Xy(n,s),provide:Zy({current:n,fallback:s,messages:r})}}}function ZN(t){const e=or((t==null?void 0:t.locale)??"en"),n=or((t==null?void 0:t.fallback)??"en"),s=Q({en:XN,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:Jy(e,n,s),n:Xy(e,n),provide:Zy({current:e,fallback:n,messages:s})}}const am=Symbol.for("vuetify:locale");function e2(t){return t.name!=null}function t2(t){const e=t!=null&&t.adapter&&e2(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:ZN(t),n=s2(e,t);return{...e,...n}}function n2(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function s2(t,e){const n=Q((e==null?void 0:e.rtl)??n2()),s=Ee(()=>n.value[t.current.value]??!1);return{isRtl:s,rtl:n,rtlClasses:Ee(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}const Fi={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function r2(t,e){const n=[];let s=[];const r=ev(t),i=tv(t),o=(r.getDay()-Fi[e.slice(-2).toUpperCase()]+7)%7,a=(i.getDay()-Fi[e.slice(-2).toUpperCase()]+7)%7;for(let c=0;c<o;c++){const l=new Date(r);l.setDate(l.getDate()-(o-c)),s.push(l)}for(let c=1;c<=i.getDate();c++){const l=new Date(t.getFullYear(),t.getMonth(),c);s.push(l),s.length===7&&(n.push(s),s=[])}for(let c=1;c<7-a;c++){const l=new Date(i);l.setDate(l.getDate()+c),s.push(l)}return s.length>0&&n.push(s),n}function i2(t,e){const n=new Date(t);for(;n.getDay()!==(Fi[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function o2(t,e){const n=new Date(t),s=((Fi[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==s;)n.setDate(n.getDate()+1);return n}function ev(t){return new Date(t.getFullYear(),t.getMonth(),1)}function tv(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function a2(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const c2=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function nv(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(c2.test(t))return a2(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const cm=new Date(2e3,0,2);function l2(t){const e=Fi[t.slice(-2).toUpperCase()];return jy(7).map(n=>{const s=new Date(cm);return s.setDate(cm.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function u2(t,e,n,s){const r=nv(t)??new Date,i=s==null?void 0:s[e];if(typeof i=="function")return i(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function h2(t,e){const n=t.toJsDate(e),s=n.getFullYear(),r=Gf(String(n.getMonth()+1),2,"0"),i=Gf(String(n.getDate()),2,"0");return`${s}-${r}-${i}`}function d2(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s)}function f2(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function m2(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function p2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function g2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function _2(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function y2(t){return t.getFullYear()}function v2(t){return t.getMonth()}function w2(t){return t.getDate()}function E2(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function I2(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function T2(t){return t.getHours()}function A2(t){return t.getMinutes()}function b2(t){return new Date(t.getFullYear(),0,1)}function R2(t){return new Date(t.getFullYear(),11,31)}function S2(t,e){return ga(t,e[0])&&k2(t,e[1])}function C2(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function ga(t,e){return t.getTime()>e.getTime()}function P2(t,e){return ga(Xl(t),Xl(e))}function k2(t,e){return t.getTime()<e.getTime()}function lm(t,e){return t.getTime()===e.getTime()}function D2(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function N2(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function O2(t,e){return t.getFullYear()===e.getFullYear()}function V2(t,e,n){const s=new Date(t),r=new Date(e);switch(n){case"years":return s.getFullYear()-r.getFullYear();case"quarters":return Math.floor((s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12)/4);case"months":return s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((s.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((s.getTime()-r.getTime())/1e3);default:return s.getTime()-r.getTime()}}function M2(t,e){const n=new Date(t);return n.setHours(e),n}function x2(t,e){const n=new Date(t);return n.setMinutes(e),n}function L2(t,e){const n=new Date(t);return n.setMonth(e),n}function F2(t,e){const n=new Date(t);return n.setDate(e),n}function U2(t,e){const n=new Date(t);return n.setFullYear(e),n}function Xl(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function $2(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class B2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return nv(e)}toJsDate(e){return e}toISO(e){return h2(this,e)}parseISO(e){return d2(e)}addMinutes(e,n){return f2(e,n)}addHours(e,n){return m2(e,n)}addDays(e,n){return p2(e,n)}addWeeks(e,n){return g2(e,n)}addMonths(e,n){return _2(e,n)}getWeekArray(e){return r2(e,this.locale)}startOfWeek(e){return i2(e,this.locale)}endOfWeek(e){return o2(e,this.locale)}startOfMonth(e){return ev(e)}endOfMonth(e){return tv(e)}format(e,n){return u2(e,n,this.locale,this.formats)}isEqual(e,n){return lm(e,n)}isValid(e){return C2(e)}isWithinRange(e,n){return S2(e,n)}isAfter(e,n){return ga(e,n)}isAfterDay(e,n){return P2(e,n)}isBefore(e,n){return!ga(e,n)&&!lm(e,n)}isSameDay(e,n){return D2(e,n)}isSameMonth(e,n){return N2(e,n)}isSameYear(e,n){return O2(e,n)}setMinutes(e,n){return x2(e,n)}setHours(e,n){return M2(e,n)}setMonth(e,n){return L2(e,n)}setDate(e,n){return F2(e,n)}setYear(e,n){return U2(e,n)}getDiff(e,n,s){return V2(e,n,s)}getWeekdays(){return l2(this.locale)}getYear(e){return y2(e)}getMonth(e){return v2(e)}getDate(e){return w2(e)}getNextMonth(e){return E2(e)}getPreviousMonth(e){return I2(e)}getHours(e){return T2(e)}getMinutes(e){return A2(e)}startOfDay(e){return Xl(e)}endOfDay(e){return $2(e)}startOfYear(e){return b2(e)}endOfYear(e){return R2(e)}}const j2=Symbol.for("vuetify:date-options"),um=Symbol.for("vuetify:date-adapter");function q2(t,e){const n=bn({adapter:B2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:H2(n,e)}}function H2(t,e){const n=Dr(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return jt(e.current,s=>{n.locale=t.locale[s]??s??n.locale}),n}const hm=Symbol.for("vuetify:display"),dm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},z2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:dm;return bn(dm,t)};function fm(t){return rn&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function mm(t){return rn&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function pm(t){const e=rn&&!t?window.navigator.userAgent:"ssr";function n(E){return!!e.match(E)}const s=n(/android/i),r=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:s,ios:r,cordova:i,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:h,mac:f,linux:m,touch:wN,ssr:e==="ssr"}}function W2(t,e){const{thresholds:n,mobileBreakpoint:s}=z2(t),r=or(mm(e)),i=or(pm(e)),o=Dr({}),a=or(fm(e));function c(){r.value=mm(),a.value=fm()}function l(){c(),i.value=pm()}return du(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),m=a.value<n.xl&&!(f||h||u),E=a.value<n.xxl&&!(m||f||h||u),g=a.value>=n.xxl,y=u?"xs":h?"sm":f?"md":m?"lg":E?"xl":"xxl",w=typeof s=="number"?s:n[s],x=a.value<w;o.xs=u,o.sm=h,o.md=f,o.lg=m,o.xl=E,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||m),o.smAndDown=!(f||m||E||g),o.mdAndDown=!(m||E||g),o.lgAndDown=!(E||g),o.xlAndDown=!g,o.name=y,o.height=r.value,o.width=a.value,o.mobile=x,o.mobileBreakpoint=s,o.platform=i.value,o.thresholds=n}),rn&&window.addEventListener("resize",c,{passive:!0}),{...zv(o),update:l,ssr:!!e}}const K2=Symbol.for("vuetify:goto");function G2(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function Q2(t,e){return{rtl:e.isRtl,options:bn(G2(),t)}}const Y2={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},J2={component:t=>Z0(sv,{...t,class:"mdi"})},X2=[String,Function,Object,Array],gm=Symbol.for("vuetify:icons"),vc=Ky({icon:{type:X2},tag:{type:String,required:!0}},"icon");QN()({name:"VComponentIcon",props:vc(),setup(t,e){let{slots:n}=e;return()=>{const s=t.icon;return me(t.tag,null,{default:()=>{var r;return[t.icon?me(s,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}});const Z2=oo({name:"VSvgIcon",inheritAttrs:!1,props:vc(),setup(t,e){let{attrs:n}=e;return()=>me(t.tag,yp(n,{style:null}),{default:()=>[me("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(s=>Array.isArray(s)?me("path",{d:s[0],"fill-opacity":s[1]},null):me("path",{d:s},null)):me("path",{d:t.icon},null)])]})}});oo({name:"VLigatureIcon",props:vc(),setup(t){return()=>me(t.tag,null,{default:()=>[t.icon]})}});const sv=oo({name:"VClassIcon",props:vc(),setup(t){return()=>me(t.tag,{class:t.icon},null)}});function eO(){return{svg:{component:Z2},class:{component:sv}}}function tO(t){const e=eO(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=J2),bn({defaultSet:n,sets:e,aliases:{...Y2,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const _m=Symbol.for("vuetify:theme");function ym(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function nO(){var s,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ym();const e=ym();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(s=e.themes)==null?void 0:s.dark:(r=e.themes)==null?void 0:r.light;n[i]=bn(a,o)}return bn(e,{...t,themes:n})}function sO(t){const e=nO(t),n=Q(e.defaultTheme),s=Q(e.themes),r=Ee(()=>{const u={};for(const[h,f]of Object.entries(s.value)){const m=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const E of e.variations.colors){const g=m.colors[E];if(g)for(const y of["lighten","darken"]){const w=y==="lighten"?jN:qN;for(const x of jy(e.variations[y],1))m.colors[`${E}-${y}-${x}`]=UN(w(yn(g),x))}}for(const E of Object.keys(m.colors)){if(/^on-[a-z]/.test(E)||m.colors[`on-${E}`])continue;const g=`on-${E}`,y=yn(m.colors[E]);m.colors[g]=zN(y)}}return u}),i=Ee(()=>r.value[n.value]),o=Ee(()=>{var E;const u=[];(E=i.value)!=null&&E.dark&&fs(u,":root",["color-scheme: dark"]),fs(u,":root",vm(i.value));for(const[g,y]of Object.entries(r.value))fs(u,`.v-theme--${g}`,[`color-scheme: ${y.dark?"dark":"normal"}`,...vm(y)]);const h=[],f=[],m=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of m)/^on-[a-z]/.test(g)?fs(f,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(fs(h,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),fs(f,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),fs(f,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...h,...f),u.map((g,y)=>y===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);rn&&jt(o,()=>{f.patch(a)})}else rn?(h.addHeadObjs(Ee(a)),du(()=>h.updateDOM())):h.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!f){const E=document.createElement("style");E.type="text/css",E.id="vuetify-theme-stylesheet",e.cspNonce&&E.setAttribute("nonce",e.cspNonce),f=E,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=rn?document.getElementById("vuetify-theme-stylesheet"):null;rn?jt(o,m,{immediate:!0}):m()}}const l=Ee(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:s,current:i,computedThemes:r,themeClasses:l,styles:o,global:{name:n,current:i}}}function fs(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function vm(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[r,i]of Object.entries(t.colors)){const o=yn(i);s.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||s.push(`--v-theme-${r}-overlay-multiplier: ${HN(i)>.18?e:n}`)}for(const[r,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?yn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${r}: ${a??i}`)}return s}function rv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=bn(e,n),{aliases:r={},components:i={},directives:o={}}=s,a=WN(s.defaults),c=W2(s.display,s.ssr),l=sO(s.theme),u=tO(s.icons),h=t2(s.locale),f=q2(s.date,h),m=Q2(s.goTo,h);return{install:g=>{for(const y in o)g.directive(y,o[y]);for(const y in i)g.component(y,i[y]);for(const y in r)g.component(y,oo({...r[y],name:y,aliasName:r[y].name}));if(l.install(g),g.provide(Li,a),g.provide(hm,c),g.provide(_m,l),g.provide(gm,u),g.provide(am,h),g.provide(j2,f.options),g.provide(um,f.instance),g.provide(K2,m),rn&&s.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:y}=g;g.mount=function(){const w=y(...arguments);return Ia(()=>c.update()),g.mount=y,w}}Yy.reset(),g.mixin({computed:{$vuetify(){return Dr({defaults:Xs.call(this,Li),display:Xs.call(this,hm),theme:Xs.call(this,_m),icons:Xs.call(this,gm),locale:Xs.call(this,am),date:Xs.call(this,um)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h,date:f,goTo:m}}const rO="3.6.3";rv.version=rO;function Xs(t){var s,r;const e=this.$,n=((s=e.parent)==null?void 0:s.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const iO=rv({theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FF6A00",secondary:"#F7F7F7",accent:"#FFB27D",error:"#EF4444",info:"#0EA5E9",success:"#22C55E",warning:"#F59E0B",background:"#FFFFFF",surface:"#FFFFFF"}}}}}),oO="modulepreload",aO=function(t){return"/friendzy/"+t},wm={},cO=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=aO(a),a in wm)return;wm[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":oO,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function lO(){(await cO(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Inter:100,300,400,500,600,700,800,900&display=swap"]}})}lO();Cw(yN).use(iO).mount("#app");
