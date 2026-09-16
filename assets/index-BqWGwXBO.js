(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Re={},Zr=[],Ct=()=>{},sv=()=>!1,fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jl=t=>t.startsWith("onUpdate:"),qe=Object.assign,Xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iv=Object.prototype.hasOwnProperty,de=(t,e)=>iv.call(t,e),ee=Array.isArray,es=t=>ma(t)==="[object Map]",_m=t=>ma(t)==="[object Set]",oe=t=>typeof t=="function",$e=t=>typeof t=="string",Nr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",ym=t=>(De(t)||oe(t))&&oe(t.then)&&oe(t.catch),vm=Object.prototype.toString,ma=t=>vm.call(t),ov=t=>ma(t).slice(8,-1),wm=t=>ma(t)==="[object Object]",Zl=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},av=/-(\w)/g,hs=pa(t=>t.replace(av,(e,n)=>n?n.toUpperCase():"")),cv=/\B([A-Z])/g,Or=pa(t=>t.replace(cv,"-$1").toLowerCase()),Em=pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=pa(t=>t?`on${Em(t)}`:""),zn=(t,e)=>!Object.is(t,e),Ro=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Im=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ph;const Tm=()=>Ph||(Ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rs(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?dv(r):Rs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||De(t))return t}const lv=/;(?![^(]*\))/g,uv=/:([^]+)/,hv=/\/\*[^]*?\*\//g;function dv(t){const e={};return t.replace(hv,"").split(lv).forEach(n=>{if(n){const r=n.split(uv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pe(t){let e="";if($e(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=pe(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mv=Yl(fv);function Am(t){return!!t||t===""}const O=t=>$e(t)?t:t==null?"":ee(t)||De(t)&&(t.toString===vm||!oe(t.toString))?JSON.stringify(t,bm,2):String(t),bm=(t,e)=>e&&e.__v_isRef?bm(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[vc(r,i)+" =>"]=s,n),{})}:_m(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vc(n))}:Nr(e)?vc(e):De(e)&&!ee(e)&&!wm(e)?String(e):e,vc=(t,e="")=>{var n;return Nr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class Rm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pv(t){return new Rm(t)}function gv(t,e=Tt){e&&e.active&&e.effects.push(t)}function _v(){return Tt}function yv(t){Tt&&Tt.cleanups.push(t)}let yr;class eu{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,gv(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Yn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(vv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Jn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Fn,n=yr;try{return Fn=!0,yr=this,this._runnings++,kh(this),this.fn()}finally{Dh(this),this._runnings--,yr=n,Fn=e}}stop(){this.active&&(kh(this),Dh(this),this.onStop&&this.onStop(),this.active=!1)}}function vv(t){return t.value}function kh(t){t._trackId++,t._depsLength=0}function Dh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Sm(t.deps[e],t);t.deps.length=t._depsLength}}function Sm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Fn=!0,el=0;const Cm=[];function Yn(){Cm.push(Fn),Fn=!1}function Jn(){const t=Cm.pop();Fn=t===void 0?!0:t}function tu(){el++}function nu(){for(el--;!el&&tl.length;)tl.shift()()}function Pm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Sm(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const tl=[];function km(t,e,n){tu();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&tl.push(r.scheduler)))}nu()}const Dm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},$o=new WeakMap,vr=Symbol(""),nl=Symbol("");function vt(t,e,n){if(Fn&&yr){let r=$o.get(t);r||$o.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Dm(()=>r.delete(n))),Pm(yr,s)}}function pn(t,e,n,r,s,i){const o=$o.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Nr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Zl(n)&&a.push(o.get("length")):(a.push(o.get(vr)),es(t)&&a.push(o.get(nl)));break;case"delete":ee(t)||(a.push(o.get(vr)),es(t)&&a.push(o.get(nl)));break;case"set":es(t)&&a.push(o.get(vr));break}tu();for(const c of a)c&&km(c,4);nu()}function wv(t,e){const n=$o.get(t);return n&&n.get(e)}const Ev=Yl("__proto__,__v_isRef,__isVue"),Nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nr)),Nh=Iv();function Iv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)vt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yn(),tu();const r=fe(this)[e].apply(this,n);return nu(),Jn(),r}}),t}function Tv(t){Nr(t)||(t=String(t));const e=fe(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Om{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xv:Lm:i?xm:Mm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ee(e);if(!s){if(o&&de(Nh,n))return Reflect.get(Nh,n,r);if(n==="hasOwnProperty")return Tv}const a=Reflect.get(e,n,r);return(Nr(n)?Nm.has(n):Ev(n))||(s||vt(e,"get",n),i)?a:ft(a)?o&&Zl(n)?a:a.value:De(a)?s?Fm(a):Ss(a):a}}class Vm extends Om{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ui(i);if(!Bo(r)&&!ui(r)&&(i=fe(i),r=fe(r)),!ee(e)&&ft(i)&&!ft(r))return c?!1:(i.value=r,!0)}const o=ee(e)&&Zl(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,r,s);return e===fe(s)&&(o?zn(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),a}deleteProperty(e,n){const r=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nr(n)||!Nm.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ee(e)?"length":vr),Reflect.ownKeys(e)}}class Av extends Om{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bv=new Vm,Rv=new Av,Sv=new Vm(!0);const ru=t=>t,ga=t=>Reflect.getPrototypeOf(t);function ao(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(zn(e,i)&&vt(s,"get",e),vt(s,"get",i));const{has:o}=ga(s),a=r?ru:n?ou:hi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function co(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(zn(t,s)&&vt(r,"has",t),vt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lo(t,e=!1){return t=t.__v_raw,!e&&vt(fe(t),"iterate",vr),Reflect.get(t,"size",t)}function Oh(t){t=fe(t);const e=fe(this);return ga(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function Vh(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=ga(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?zn(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function Mh(t){const e=fe(this),{has:n,get:r}=ga(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function xh(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function uo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?ru:t?ou:hi;return!t&&vt(a,"iterate",vr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ho(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=es(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ru:e?ou:hi;return!e&&vt(i,"iterate",c?nl:vr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cv(){const t={get(i){return ao(this,i)},get size(){return lo(this)},has:co,add:Oh,set:Vh,delete:Mh,clear:xh,forEach:uo(!1,!1)},e={get(i){return ao(this,i,!1,!0)},get size(){return lo(this)},has:co,add:Oh,set:Vh,delete:Mh,clear:xh,forEach:uo(!1,!0)},n={get(i){return ao(this,i,!0)},get size(){return lo(this,!0)},has(i){return co.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:uo(!0,!1)},r={get(i){return ao(this,i,!0,!0)},get size(){return lo(this,!0)},has(i){return co.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ho(i,!1,!1),n[i]=ho(i,!0,!1),e[i]=ho(i,!1,!0),r[i]=ho(i,!0,!0)}),[t,n,e,r]}const[Pv,kv,Dv,Nv]=Cv();function su(t,e){const n=e?t?Nv:Dv:t?kv:Pv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,i)}const Ov={get:su(!1,!1)},Vv={get:su(!1,!0)},Mv={get:su(!0,!1)};const Mm=new WeakMap,xm=new WeakMap,Lm=new WeakMap,xv=new WeakMap;function Lv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fv(t){return t.__v_skip||!Object.isExtensible(t)?0:Lv(ov(t))}function Ss(t){return ui(t)?t:iu(t,!1,bv,Ov,Mm)}function Uv(t){return iu(t,!1,Sv,Vv,xm)}function Fm(t){return iu(t,!0,Rv,Mv,Lm)}function iu(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Fv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Zs(t){return ui(t)?Zs(t.__v_raw):!!(t&&t.__v_isReactive)}function ui(t){return!!(t&&t.__v_isReadonly)}function Bo(t){return!!(t&&t.__v_isShallow)}function Um(t){return t?!!t.__v_raw:!1}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function $v(t){return Object.isExtensible(t)&&Im(t,"__v_skip",!0),t}const hi=t=>De(t)?Ss(t):t,ou=t=>De(t)?Fm(t):t;class $m{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new eu(()=>e(this._value),()=>So(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return(!e._cacheable||e.effect.dirty)&&zn(e._value,e._value=e.effect.run())&&So(e,4),Bm(e),e.effect._dirtyLevel>=2&&So(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Bv(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=Ct):(r=t.get,s=t.set),new $m(r,s,i||!s,n)}function Bm(t){var e;Fn&&yr&&(t=fe(t),Pm(yr,(e=t.dep)!=null?e:t.dep=Dm(()=>t.dep=void 0,t instanceof $m?t:void 0)))}function So(t,e=4,n){t=fe(t);const r=t.dep;r&&km(r,e)}function ft(t){return!!(t&&t.__v_isRef===!0)}function G(t){return jm(t,!1)}function ts(t){return jm(t,!0)}function jm(t,e){return ft(t)?t:new jv(t,e)}class jv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:hi(e)}get value(){return Bm(this),this._value}set value(e){const n=this.__v_isShallow||Bo(e)||ui(e);e=n?e:fe(e),zn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:hi(e),So(this,4))}}function D(t){return ft(t)?t.value:t}const qv={get:(t,e,n)=>D(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qm(t){return Zs(t)?t:new Proxy(t,qv)}function Hv(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=Wv(t,n);return e}class zv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wv(fe(this._object),this._key)}}function Wv(t,e,n){const r=t[e];return ft(r)?r:new zv(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Un(t,e,n,r){try{return r?t(...r):t()}catch(s){_a(s,e,n)}}function xt(t,e,n,r){if(oe(t)){const s=Un(t,e,n,r);return s&&ym(s)&&s.catch(i=>{_a(i,e,n)}),s}if(ee(t)){const s=[];for(let i=0;i<t.length;i++)s.push(xt(t[i],e,n,r));return s}}function _a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Yn(),Un(c,null,10,[t,o,a]),Jn();return}}Kv(t,n,s,r)}function Kv(t,e,n,r=!0){console.error(t)}let di=!1,rl=!1;const st=[];let zt=0;const ns=[];let Dn=null,hr=0;const Hm=Promise.resolve();let au=null;function ya(t){const e=au||Hm;return t?e.then(this?t.bind(this):t):e}function Gv(t){let e=zt+1,n=st.length;for(;e<n;){const r=e+n>>>1,s=st[r],i=fi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function cu(t){(!st.length||!st.includes(t,di&&t.allowRecurse?zt+1:zt))&&(t.id==null?st.push(t):st.splice(Gv(t.id),0,t),zm())}function zm(){!di&&!rl&&(rl=!0,au=Hm.then(Km))}function Qv(t){const e=st.indexOf(t);e>zt&&st.splice(e,1)}function Yv(t){ee(t)?ns.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?hr+1:hr))&&ns.push(t),zm()}function Lh(t,e,n=di?zt+1:0){for(;n<st.length;n++){const r=st[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r()}}}function Wm(t){if(ns.length){const e=[...new Set(ns)].sort((n,r)=>fi(n)-fi(r));if(ns.length=0,Dn){Dn.push(...e);return}for(Dn=e,hr=0;hr<Dn.length;hr++)Dn[hr]();Dn=null,hr=0}}const fi=t=>t.id==null?1/0:t.id,Jv=(t,e)=>{const n=fi(t)-fi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Km(t){rl=!1,di=!0,st.sort(Jv);try{for(zt=0;zt<st.length;zt++){const e=st[zt];e&&e.active!==!1&&Un(e,null,14)}}finally{zt=0,st.length=0,Wm(),di=!1,au=null,(st.length||ns.length)&&Km()}}function Xv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Re;f&&(s=n.map(p=>$e(p)?p.trim():p)),h&&(s=n.map(Zc))}let a,c=r[a=yc(e)]||r[a=yc(hs(e))];!c&&i&&(c=r[a=yc(Or(e))]),c&&xt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(l,t,6,s)}}function Gm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=Gm(l,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(De(t)&&r.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):qe(o,i),De(t)&&r.set(t,o),o)}function va(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Or(e))||de(t,e))}let _t=null,wa=null;function jo(t){const e=_t;return _t=t,wa=t&&t.type.__scopeId||null,e}function Vr(t){wa=t}function Mr(){wa=null}function Zv(t,e=_t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Kh(-1);const i=jo(e);let o;try{o=t(...s)}finally{jo(i),r._d&&Kh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:p,ctx:v,inheritAttrs:g}=t,E=jo(t);let P,j;try{if(n.shapeFlag&4){const L=s||r,W=L;P=qt(l.call(W,L,u,h,p,f,v)),j=a}else{const L=e;P=qt(L.length>1?L(h,{attrs:a,slots:o,emit:c}):L(h,null)),j=e.props?a:ew(a)}}catch(L){ri.length=0,_a(L,t,1),P=ce(Ar)}let H=P;if(j&&g!==!1){const L=Object.keys(j),{shapeFlag:W}=H;L.length&&W&7&&(i&&L.some(Jl)&&(j=tw(j,i)),H=ds(H,j,!1,!0))}return n.dirs&&(H=ds(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),P=H,jo(E),P}const ew=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},tw=(t,e)=>{const n={};for(const r in t)(!Jl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Fh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!va(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Fh(r,o,l):!0:!!o;return!1}function Fh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!va(n,i))return!0}return!1}function rw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const sw=Symbol.for("v-ndc"),iw=t=>t.__isSuspense;function ow(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Yv(t)}const aw=Symbol.for("v-scx"),cw=()=>ni(aw);function lu(t,e){return uu(t,null,e)}const fo={};function Lt(t,e,n){return uu(t,e,n)}function uu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Re){if(e&&i){const U=e;e=(...Q)=>{U(...Q),W()}}const c=it,l=U=>r===!0?U:dr(U,r===!1?1:void 0);let u,h=!1,f=!1;if(ft(t)?(u=()=>t.value,h=Bo(t)):Zs(t)?(u=()=>l(t),h=!0):ee(t)?(f=!0,h=t.some(U=>Zs(U)||Bo(U)),u=()=>t.map(U=>{if(ft(U))return U.value;if(Zs(U))return l(U);if(oe(U))return Un(U,c,2)})):oe(t)?e?u=()=>Un(t,c,2):u=()=>(p&&p(),xt(t,c,3,[v])):u=Ct,e&&r){const U=u;u=()=>dr(U())}let p,v=U=>{p=H.onStop=()=>{Un(U,c,4),p=H.onStop=void 0}},g;if(Ta)if(v=Ct,e?n&&xt(e,c,3,[u(),f?[]:void 0,v]):u(),s==="sync"){const U=cw();g=U.__watcherHandles||(U.__watcherHandles=[])}else return Ct;let E=f?new Array(t.length).fill(fo):fo;const P=()=>{if(!(!H.active||!H.dirty))if(e){const U=H.run();(r||h||(f?U.some((Q,re)=>zn(Q,E[re])):zn(U,E)))&&(p&&p(),xt(e,c,3,[U,E===fo?void 0:f&&E[0]===fo?[]:E,v]),E=U)}else H.run()};P.allowRecurse=!!e;let j;s==="sync"?j=P:s==="post"?j=()=>pt(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),j=()=>cu(P));const H=new eu(u,Ct,j),L=_v(),W=()=>{H.stop(),L&&Xl(L.effects,H)};return e?n?P():E=H.run():s==="post"?pt(H.run.bind(H),c&&c.suspense):H.run(),g&&g.push(W),W}function lw(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Qm(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Mi(this),a=uu(s,i.bind(r),n);return o(),a}function Qm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function dr(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ft(t))dr(t.value,e,n);else if(ee(t))for(let r=0;r<t.length;r++)dr(t[r],e,n);else if(_m(t)||es(t))t.forEach(r=>{dr(r,e,n)});else if(wm(t))for(const r in t)dr(t[r],e,n);return t}function wr(t,e){if(_t===null)return t;const n=Aa(_t)||_t.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Re]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&dr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Yn(),xt(c,n,8,[t.el,a,t,e]),Jn())}}/*! #__NO_SIDE_EFFECTS__ */function uw(t,e){return oe(t)?qe({name:t.name},e,{setup:t}):t}const Co=t=>!!t.type.__asyncLoader,Ym=t=>t.type.__isKeepAlive;function hw(t,e){Jm(t,"a",e)}function dw(t,e){Jm(t,"da",e)}function Jm(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ym(s.parent.vnode)&&fw(r,e,n,s),s=s.parent}}function fw(t,e,n,r){const s=Ea(e,t,r,!0);Cs(()=>{Xl(r[e],s)},n)}function Ea(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Yn();const a=Mi(n),c=xt(e,n,t,o);return a(),Jn(),c});return r?s.unshift(i):s.push(i),i}}const Tn=t=>(e,n=it)=>(!Ta||t==="sp")&&Ea(t,(...r)=>e(...r),n),mw=Tn("bm"),Xm=Tn("m"),pw=Tn("bu"),gw=Tn("u"),_w=Tn("bum"),Cs=Tn("um"),yw=Tn("sp"),vw=Tn("rtg"),ww=Tn("rtc");function Ew(t,e=it){Ea("ec",t,e)}function an(t,e,n,r){let s;const i=n;if(ee(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i)}}else s=[];return s}const sl=t=>t?pp(t)?Aa(t)||t.proxy:sl(t.parent):null,ei=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sl(t.parent),$root:t=>sl(t.root),$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,cu(t.update)}),$nextTick:t=>t.n||(t.n=ya.bind(t.proxy)),$watch:t=>lw.bind(t)}),Ec=(t,e)=>t!==Re&&!t.__isScriptSetup&&de(t,e),Iw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ec(r,e))return o[e]=1,r[e];if(s!==Re&&de(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,i[e];if(n!==Re&&de(n,e))return o[e]=4,n[e];il&&(o[e]=0)}}const u=ei[e];let h,f;if(u)return e==="$attrs"&&vt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&de(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ec(s,e)?(s[e]=n,!0):r!==Re&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&de(t,o)||Ec(e,o)||(a=i[0])&&de(a,o)||de(r,o)||de(ei,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uh(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let il=!0;function Tw(t){const e=hu(t),n=t.proxy,r=t.ctx;il=!1,e.beforeCreate&&$h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:v,activated:g,deactivated:E,beforeDestroy:P,beforeUnmount:j,destroyed:H,unmounted:L,render:W,renderTracked:U,renderTriggered:Q,errorCaptured:re,serverPrefetch:Te,expose:ge,inheritAttrs:Oe,components:Ze,directives:wt,filters:Ls}=e;if(l&&Aw(l,r,null),o)for(const Ae in o){const ve=o[Ae];oe(ve)&&(r[Ae]=ve.bind(n))}if(s){const Ae=s.call(n,n);De(Ae)&&(t.data=Ss(Ae))}if(il=!0,i)for(const Ae in i){const ve=i[Ae],Nt=oe(ve)?ve.bind(n,n):oe(ve.get)?ve.get.bind(n,n):Ct,Sn=!oe(ve)&&oe(ve.set)?ve.set.bind(n):Ct,Et=ye({get:Nt,set:Sn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Et.value,set:It=>Et.value=It})}if(a)for(const Ae in a)Zm(a[Ae],r,n,Ae);if(c){const Ae=oe(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(ve=>{tp(ve,Ae[ve])})}u&&$h(u,t,"c");function Be(Ae,ve){ee(ve)?ve.forEach(Nt=>Ae(Nt.bind(n))):ve&&Ae(ve.bind(n))}if(Be(mw,h),Be(Xm,f),Be(pw,p),Be(gw,v),Be(hw,g),Be(dw,E),Be(Ew,re),Be(ww,U),Be(vw,Q),Be(_w,j),Be(Cs,L),Be(yw,Te),ee(ge))if(ge.length){const Ae=t.exposed||(t.exposed={});ge.forEach(ve=>{Object.defineProperty(Ae,ve,{get:()=>n[ve],set:Nt=>n[ve]=Nt})})}else t.exposed||(t.exposed={});W&&t.render===Ct&&(t.render=W),Oe!=null&&(t.inheritAttrs=Oe),Ze&&(t.components=Ze),wt&&(t.directives=wt)}function Aw(t,e,n=Ct){ee(t)&&(t=ol(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=ni(s.from||r,s.default,!0):i=ni(s.from||r):i=ni(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $h(t,e,n){xt(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zm(t,e,n,r){const s=r.includes(".")?Qm(n,r):()=>n[r];if($e(t)){const i=e[t];oe(i)&&Lt(s,i)}else if(oe(t))Lt(s,t.bind(n));else if(De(t))if(ee(t))t.forEach(i=>Zm(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Lt(s,i,t)}}function hu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>qo(c,l,o,!0)),qo(c,e,o)),De(e)&&i.set(e,c),c}function qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&qo(t,i,n,!0),s&&s.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=bw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bw={data:Bh,props:jh,emits:jh,methods:Hs,computed:Hs,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Hs,directives:Hs,watch:Sw,provide:Bh,inject:Rw};function Bh(t,e){return e?t?function(){return qe(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function Rw(t,e){return Hs(ol(t),ol(e))}function ol(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?qe(Object.create(null),t,e):e}function jh(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:qe(Object.create(null),Uh(t),Uh(e??{})):e}function Sw(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function ep(){return{app:null,config:{isNativeTag:sv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cw=0;function Pw(t,e){return function(r,s=null){oe(r)||(r=qe({},r)),s!=null&&!De(s)&&(s=null);const i=ep(),o=new WeakSet;let a=!1;const c=i.app={_uid:Cw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ce(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Aa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=ti;ti=c;try{return l()}finally{ti=u}}};return c}}let ti=null;function tp(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function ni(t,e,n=!1){const r=it||_t;if(r||ti){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ti._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}const np={},rp=()=>Object.create(np),sp=t=>Object.getPrototypeOf(t)===np;function kw(t,e,n,r=!1){const s={},i=rp();t.propsDefaults=Object.create(null),ip(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Uv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(va(t.emitsOptions,f))continue;const p=e[f];if(c)if(de(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const v=hs(f);s[v]=al(c,a,v,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{ip(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Or(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=al(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!de(e,h))&&(delete i[h],l=!0)}l&&pn(t.attrs,"set","")}function ip(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xs(c))continue;const l=e[c];let u;s&&de(s,u=hs(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:va(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=fe(n),l=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=al(s,c,h,l[h],t,!de(l,h))}}return o}function al(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&oe(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Mi(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}function op(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=h=>{c=!0;const[f,p]=op(h,e,!0);qe(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return De(t)&&r.set(t,Zr),Zr;if(ee(i))for(let u=0;u<i.length;u++){const h=hs(i[u]);qh(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=hs(u);if(qh(h)){const f=i[u],p=o[h]=ee(f)||oe(f)?{type:f}:qe({},f);if(p){const v=Wh(Boolean,p.type),g=Wh(String,p.type);p[0]=v>-1,p[1]=g<0||v<g,(v>-1||de(p,"default"))&&a.push(h)}}}const l=[o,a];return De(t)&&r.set(t,l),l}function qh(t){return t[0]!=="$"&&!Xs(t)}function Hh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function zh(t,e){return Hh(t)===Hh(e)}function Wh(t,e){return ee(e)?e.findIndex(n=>zh(n,t)):oe(e)&&zh(e,t)?0:-1}const ap=t=>t[0]==="_"||t==="$stable",du=t=>ee(t)?t.map(qt):[qt(t)],Nw=(t,e,n)=>{if(e._n)return e;const r=Zv((...s)=>du(e(...s)),n);return r._c=!1,r},cp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ap(s))continue;const i=t[s];if(oe(i))e[s]=Nw(s,i,r);else if(i!=null){const o=du(i);e[s]=()=>o}}},lp=(t,e)=>{const n=du(e);t.slots.default=()=>n},Ow=(t,e)=>{const n=t.slots=rp();if(t.vnode.shapeFlag&32){const r=e._;r?(qe(n,e),Im(n,"_",r,!0)):cp(e,n)}else e&&lp(t,e)},Vw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,cp(e,s)),o=e}else e&&(lp(t,e),o={default:1});if(i)for(const a in s)!ap(a)&&o[a]==null&&delete s[a]};function cl(t,e,n,r,s=!1){if(ee(t)){t.forEach((f,p)=>cl(f,e&&(ee(e)?e[p]:e),n,r,s));return}if(Co(r)&&!s)return;const i=r.shapeFlag&4?Aa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&($e(l)?(u[l]=null,de(h,l)&&(h[l]=null)):ft(l)&&(l.value=null)),oe(c))Un(c,a,12,[o,u]);else{const f=$e(c),p=ft(c);if(f||p){const v=()=>{if(t.f){const g=f?de(h,c)?h[c]:u[c]:c.value;s?ee(g)&&Xl(g,i):ee(g)?g.includes(i)||g.push(i):f?(u[c]=[i],de(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,de(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,pt(v,n)):v()}}}const pt=ow;function Mw(t){return xw(t)}function xw(t,e){const n=Tm();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Ct,insertStaticContent:v}=t,g=(m,_,I,b=null,R=null,V=null,B=void 0,k=null,x=!!_.dynamicChildren)=>{if(m===_)return;m&&!$s(m,_)&&(b=Hr(m),It(m,R,V,!0),m=null),_.patchFlag===-2&&(x=!1,_.dynamicChildren=null);const{type:C,ref:y,shapeFlag:T}=_;switch(C){case Ia:E(m,_,I,b);break;case Ar:P(m,_,I,b);break;case Tc:m==null&&j(_,I,b,B);break;case ke:Ze(m,_,I,b,R,V,B,k,x);break;default:T&1?W(m,_,I,b,R,V,B,k,x):T&6?wt(m,_,I,b,R,V,B,k,x):(T&64||T&128)&&C.process(m,_,I,b,R,V,B,k,x,sr)}y!=null&&R&&cl(y,m&&m.ref,V,_||m,!_)},E=(m,_,I,b)=>{if(m==null)r(_.el=a(_.children),I,b);else{const R=_.el=m.el;_.children!==m.children&&l(R,_.children)}},P=(m,_,I,b)=>{m==null?r(_.el=c(_.children||""),I,b):_.el=m.el},j=(m,_,I,b)=>{[m.el,m.anchor]=v(m.children,_,I,b,m.el,m.anchor)},H=({el:m,anchor:_},I,b)=>{let R;for(;m&&m!==_;)R=f(m),r(m,I,b),m=R;r(_,I,b)},L=({el:m,anchor:_})=>{let I;for(;m&&m!==_;)I=f(m),s(m),m=I;s(_)},W=(m,_,I,b,R,V,B,k,x)=>{_.type==="svg"?B="svg":_.type==="math"&&(B="mathml"),m==null?U(_,I,b,R,V,B,k,x):Te(m,_,R,V,B,k,x)},U=(m,_,I,b,R,V,B,k)=>{let x,C;const{props:y,shapeFlag:T,transition:w,dirs:M}=m;if(x=m.el=o(m.type,V,y&&y.is,y),T&8?u(x,m.children):T&16&&re(m.children,x,null,b,R,Ic(m,V),B,k),M&&or(m,null,b,"created"),Q(x,m,m.scopeId,B,b),y){for(const Z in y)Z!=="value"&&!Xs(Z)&&i(x,Z,null,y[Z],V,m.children,b,R,Ot);"value"in y&&i(x,"value",null,y.value,V),(C=y.onVnodeBeforeMount)&&jt(C,b,m)}M&&or(m,null,b,"beforeMount");const J=Lw(R,w);J&&w.beforeEnter(x),r(x,_,I),((C=y&&y.onVnodeMounted)||J||M)&&pt(()=>{C&&jt(C,b,m),J&&w.enter(x),M&&or(m,null,b,"mounted")},R)},Q=(m,_,I,b,R)=>{if(I&&p(m,I),b)for(let V=0;V<b.length;V++)p(m,b[V]);if(R){let V=R.subTree;if(_===V){const B=R.vnode;Q(m,B,B.scopeId,B.slotScopeIds,R.parent)}}},re=(m,_,I,b,R,V,B,k,x=0)=>{for(let C=x;C<m.length;C++){const y=m[C]=k?Nn(m[C]):qt(m[C]);g(null,y,_,I,b,R,V,B,k)}},Te=(m,_,I,b,R,V,B)=>{const k=_.el=m.el;let{patchFlag:x,dynamicChildren:C,dirs:y}=_;x|=m.patchFlag&16;const T=m.props||Re,w=_.props||Re;let M;if(I&&ar(I,!1),(M=w.onVnodeBeforeUpdate)&&jt(M,I,_,m),y&&or(_,m,I,"beforeUpdate"),I&&ar(I,!0),C?ge(m.dynamicChildren,C,k,I,b,Ic(_,R),V):B||ve(m,_,k,null,I,b,Ic(_,R),V,!1),x>0){if(x&16)Oe(k,_,T,w,I,b,R);else if(x&2&&T.class!==w.class&&i(k,"class",null,w.class,R),x&4&&i(k,"style",T.style,w.style,R),x&8){const J=_.dynamicProps;for(let Z=0;Z<J.length;Z++){const ae=J[Z],we=T[ae],et=w[ae];(et!==we||ae==="value")&&i(k,ae,we,et,R,m.children,I,b,Ot)}}x&1&&m.children!==_.children&&u(k,_.children)}else!B&&C==null&&Oe(k,_,T,w,I,b,R);((M=w.onVnodeUpdated)||y)&&pt(()=>{M&&jt(M,I,_,m),y&&or(_,m,I,"updated")},b)},ge=(m,_,I,b,R,V,B)=>{for(let k=0;k<_.length;k++){const x=m[k],C=_[k],y=x.el&&(x.type===ke||!$s(x,C)||x.shapeFlag&70)?h(x.el):I;g(x,C,y,null,b,R,V,B,!0)}},Oe=(m,_,I,b,R,V,B)=>{if(I!==b){if(I!==Re)for(const k in I)!Xs(k)&&!(k in b)&&i(m,k,I[k],null,B,_.children,R,V,Ot);for(const k in b){if(Xs(k))continue;const x=b[k],C=I[k];x!==C&&k!=="value"&&i(m,k,C,x,B,_.children,R,V,Ot)}"value"in b&&i(m,"value",I.value,b.value,B)}},Ze=(m,_,I,b,R,V,B,k,x)=>{const C=_.el=m?m.el:a(""),y=_.anchor=m?m.anchor:a("");let{patchFlag:T,dynamicChildren:w,slotScopeIds:M}=_;M&&(k=k?k.concat(M):M),m==null?(r(C,I,b),r(y,I,b),re(_.children||[],I,y,R,V,B,k,x)):T>0&&T&64&&w&&m.dynamicChildren?(ge(m.dynamicChildren,w,I,R,V,B,k),(_.key!=null||R&&_===R.subTree)&&up(m,_,!0)):ve(m,_,I,y,R,V,B,k,x)},wt=(m,_,I,b,R,V,B,k,x)=>{_.slotScopeIds=k,m==null?_.shapeFlag&512?R.ctx.activate(_,I,b,B,x):Ls(_,I,b,R,V,B,x):ro(m,_,x)},Ls=(m,_,I,b,R,V,B)=>{const k=m.component=zw(m,b,R);if(Ym(m)&&(k.ctx.renderer=sr),Kw(k),k.asyncDep){if(R&&R.registerDep(k,Be),!m.el){const x=k.subTree=ce(Ar);P(null,x,_,I)}}else Be(k,m,_,I,R,V,B)},ro=(m,_,I)=>{const b=_.component=m.component;if(nw(m,_,I))if(b.asyncDep&&!b.asyncResolved){Ae(b,_,I);return}else b.next=_,Qv(b.update),b.effect.dirty=!0,b.update();else _.el=m.el,b.vnode=_},Be=(m,_,I,b,R,V,B)=>{const k=()=>{if(m.isMounted){let{next:y,bu:T,u:w,parent:M,vnode:J}=m;{const mt=hp(m);if(mt){y&&(y.el=J.el,Ae(m,y,B)),mt.asyncDep.then(()=>{m.isUnmounted||k()});return}}let Z=y,ae;ar(m,!1),y?(y.el=J.el,Ae(m,y,B)):y=J,T&&Ro(T),(ae=y.props&&y.props.onVnodeBeforeUpdate)&&jt(ae,M,y,J),ar(m,!0);const we=wc(m),et=m.subTree;m.subTree=we,g(et,we,h(et.el),Hr(et),m,R,V),y.el=we.el,Z===null&&rw(m,we.el),w&&pt(w,R),(ae=y.props&&y.props.onVnodeUpdated)&&pt(()=>jt(ae,M,y,J),R)}else{let y;const{el:T,props:w}=_,{bm:M,m:J,parent:Z}=m,ae=Co(_);if(ar(m,!1),M&&Ro(M),!ae&&(y=w&&w.onVnodeBeforeMount)&&jt(y,Z,_),ar(m,!0),T&&io){const we=()=>{m.subTree=wc(m),io(T,m.subTree,m,R,null)};ae?_.type.__asyncLoader().then(()=>!m.isUnmounted&&we()):we()}else{const we=m.subTree=wc(m);g(null,we,I,b,m,R,V),_.el=we.el}if(J&&pt(J,R),!ae&&(y=w&&w.onVnodeMounted)){const we=_;pt(()=>jt(y,Z,we),R)}(_.shapeFlag&256||Z&&Co(Z.vnode)&&Z.vnode.shapeFlag&256)&&m.a&&pt(m.a,R),m.isMounted=!0,_=I=b=null}},x=m.effect=new eu(k,Ct,()=>cu(C),m.scope),C=m.update=()=>{x.dirty&&x.run()};C.id=m.uid,ar(m,!0),C()},Ae=(m,_,I)=>{_.component=m;const b=m.vnode.props;m.vnode=_,m.next=null,Dw(m,_.props,b,I),Vw(m,_.children,I),Yn(),Lh(m),Jn()},ve=(m,_,I,b,R,V,B,k,x=!1)=>{const C=m&&m.children,y=m?m.shapeFlag:0,T=_.children,{patchFlag:w,shapeFlag:M}=_;if(w>0){if(w&128){Sn(C,T,I,b,R,V,B,k,x);return}else if(w&256){Nt(C,T,I,b,R,V,B,k,x);return}}M&8?(y&16&&Ot(C,R,V),T!==C&&u(I,T)):y&16?M&16?Sn(C,T,I,b,R,V,B,k,x):Ot(C,R,V,!0):(y&8&&u(I,""),M&16&&re(T,I,b,R,V,B,k,x))},Nt=(m,_,I,b,R,V,B,k,x)=>{m=m||Zr,_=_||Zr;const C=m.length,y=_.length,T=Math.min(C,y);let w;for(w=0;w<T;w++){const M=_[w]=x?Nn(_[w]):qt(_[w]);g(m[w],M,I,null,R,V,B,k,x)}C>y?Ot(m,R,V,!0,!1,T):re(_,I,b,R,V,B,k,x,T)},Sn=(m,_,I,b,R,V,B,k,x)=>{let C=0;const y=_.length;let T=m.length-1,w=y-1;for(;C<=T&&C<=w;){const M=m[C],J=_[C]=x?Nn(_[C]):qt(_[C]);if($s(M,J))g(M,J,I,null,R,V,B,k,x);else break;C++}for(;C<=T&&C<=w;){const M=m[T],J=_[w]=x?Nn(_[w]):qt(_[w]);if($s(M,J))g(M,J,I,null,R,V,B,k,x);else break;T--,w--}if(C>T){if(C<=w){const M=w+1,J=M<y?_[M].el:b;for(;C<=w;)g(null,_[C]=x?Nn(_[C]):qt(_[C]),I,J,R,V,B,k,x),C++}}else if(C>w)for(;C<=T;)It(m[C],R,V,!0),C++;else{const M=C,J=C,Z=new Map;for(C=J;C<=w;C++){const ut=_[C]=x?Nn(_[C]):qt(_[C]);ut.key!=null&&Z.set(ut.key,C)}let ae,we=0;const et=w-J+1;let mt=!1,ir=0;const nn=new Array(et);for(C=0;C<et;C++)nn[C]=0;for(C=M;C<=T;C++){const ut=m[C];if(we>=et){It(ut,R,V,!0);continue}let Bt;if(ut.key!=null)Bt=Z.get(ut.key);else for(ae=J;ae<=w;ae++)if(nn[ae-J]===0&&$s(ut,_[ae])){Bt=ae;break}Bt===void 0?It(ut,R,V,!0):(nn[Bt-J]=C+1,Bt>=ir?ir=Bt:mt=!0,g(ut,_[Bt],I,null,R,V,B,k,x),we++)}const oo=mt?Fw(nn):Zr;for(ae=oo.length-1,C=et-1;C>=0;C--){const ut=J+C,Bt=_[ut],Ch=ut+1<y?_[ut+1].el:b;nn[C]===0?g(null,Bt,I,Ch,R,V,B,k,x):mt&&(ae<0||C!==oo[ae]?Et(Bt,I,Ch,2):ae--)}}},Et=(m,_,I,b,R=null)=>{const{el:V,type:B,transition:k,children:x,shapeFlag:C}=m;if(C&6){Et(m.component.subTree,_,I,b);return}if(C&128){m.suspense.move(_,I,b);return}if(C&64){B.move(m,_,I,sr);return}if(B===ke){r(V,_,I);for(let T=0;T<x.length;T++)Et(x[T],_,I,b);r(m.anchor,_,I);return}if(B===Tc){H(m,_,I);return}if(b!==2&&C&1&&k)if(b===0)k.beforeEnter(V),r(V,_,I),pt(()=>k.enter(V),R);else{const{leave:T,delayLeave:w,afterLeave:M}=k,J=()=>r(V,_,I),Z=()=>{T(V,()=>{J(),M&&M()})};w?w(V,J,Z):Z()}else r(V,_,I)},It=(m,_,I,b=!1,R=!1)=>{const{type:V,props:B,ref:k,children:x,dynamicChildren:C,shapeFlag:y,patchFlag:T,dirs:w}=m;if(k!=null&&cl(k,null,I,m,!0),y&256){_.ctx.deactivate(m);return}const M=y&1&&w,J=!Co(m);let Z;if(J&&(Z=B&&B.onVnodeBeforeUnmount)&&jt(Z,_,m),y&6)Cn(m.component,I,b);else{if(y&128){m.suspense.unmount(I,b);return}M&&or(m,null,_,"beforeUnmount"),y&64?m.type.remove(m,_,I,R,sr,b):C&&(V!==ke||T>0&&T&64)?Ot(C,_,I,!1,!0):(V===ke&&T&384||!R&&y&16)&&Ot(x,_,I),b&&qr(m)}(J&&(Z=B&&B.onVnodeUnmounted)||M)&&pt(()=>{Z&&jt(Z,_,m),M&&or(m,null,_,"unmounted")},I)},qr=m=>{const{type:_,el:I,anchor:b,transition:R}=m;if(_===ke){_c(I,b);return}if(_===Tc){L(m);return}const V=()=>{s(I),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(m.shapeFlag&1&&R&&!R.persisted){const{leave:B,delayLeave:k}=R,x=()=>B(I,V);k?k(m.el,V,x):x()}else V()},_c=(m,_)=>{let I;for(;m!==_;)I=f(m),s(m),m=I;s(_)},Cn=(m,_,I)=>{const{bum:b,scope:R,update:V,subTree:B,um:k}=m;b&&Ro(b),R.stop(),V&&(V.active=!1,It(B,m,_,I)),k&&pt(k,_),pt(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Ot=(m,_,I,b=!1,R=!1,V=0)=>{for(let B=V;B<m.length;B++)It(m[B],_,I,b,R)},Hr=m=>m.shapeFlag&6?Hr(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el);let Fs=!1;const so=(m,_,I)=>{m==null?_._vnode&&It(_._vnode,null,null,!0):g(_._vnode||null,m,_,null,null,null,I),Fs||(Fs=!0,Lh(),Wm(),Fs=!1),_._vnode=m},sr={p:g,um:It,m:Et,r:qr,mt:Ls,mc:re,pc:ve,pbc:ge,n:Hr,o:t};let Us,io;return{render:so,hydrate:Us,createApp:Pw(so,Us)}}function Ic({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ar({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function up(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Nn(s[i]),a.el=o.el),n||up(o,a)),a.type===Ia&&(a.el=o.el)}}function Fw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hp(e)}const Uw=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),Tc=Symbol.for("v-stc"),ri=[];let Vt=null;function F(t=!1){ri.push(Vt=t?null:[])}function $w(){ri.pop(),Vt=ri[ri.length-1]||null}let mi=1;function Kh(t){mi+=t}function dp(t){return t.dynamicChildren=mi>0?Vt||Zr:null,$w(),mi>0&&Vt&&Vt.push(t),t}function q(t,e,n,r,s,i){return dp(d(t,e,n,r,s,i,!0))}function fr(t,e,n,r,s){return dp(ce(t,e,n,r,s,!0))}function ll(t){return t?t.__v_isVNode===!0:!1}function $s(t,e){return t.type===e.type&&t.key===e.key}const fp=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||ft(t)||oe(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fp(e),ref:e&&Po(e),scopeId:wa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return a?(fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),mi>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const ce=Bw;function Bw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sw)&&(t=Ar),ll(t)){const a=ds(t,e,!0);return n&&fu(a,n),mi>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(Jw(t)&&(t=t.__vccOpts),e){e=jw(e);let{class:a,style:c}=e;a&&!$e(a)&&(e.class=pe(a)),De(c)&&(Um(c)&&!ee(c)&&(c=qe({},c)),e.style=Rs(c))}const o=$e(t)?1:iw(t)?128:Uw(t)?64:De(t)?4:oe(t)?2:0;return d(t,e,n,r,s,o,i,!0)}function jw(t){return t?Um(t)||sp(t)?qe({},t):t:null}function ds(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?mp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&fp(l),ref:e&&e.ref?n&&i?ee(i)?i.concat(Po(e)):[i,Po(e)]:Po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&(u.transition=c.clone(u)),u}function Kt(t=" ",e=0){return ce(Ia,null,t,e)}function Ie(t="",e=!1){return e?(F(),fr(Ar,null,t)):ce(Ar,null,t)}function qt(t){return t==null||typeof t=="boolean"?ce(Ar):ee(t)?ce(ke,null,t.slice()):typeof t=="object"?Nn(t):ce(Ia,null,String(t))}function Nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!sp(e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),r&64?(n=16,e=[Kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function mp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pe([e.class,r.class]));else if(s==="style")e.style=Rs([e.style,r.style]);else if(fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function jt(t,e,n,r=null){xt(t,e,7,[n,r])}const qw=ep();let Hw=0;function zw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qw,i={uid:Hw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(r,s),emitsOptions:Gm(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xv.bind(null,i),t.ce&&t.ce(i),i}let it=null;const Ww=()=>it||_t;let Ho,ul;{const t=Tm(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ho=e("__VUE_INSTANCE_SETTERS__",n=>it=n),ul=e("__VUE_SSR_SETTERS__",n=>Ta=n)}const Mi=t=>{const e=it;return Ho(t),t.scope.on(),()=>{t.scope.off(),Ho(e)}},Gh=()=>{it&&it.scope.off(),Ho(null)};function pp(t){return t.vnode.shapeFlag&4}let Ta=!1;function Kw(t,e=!1){e&&ul(e);const{props:n,children:r}=t.vnode,s=pp(t);kw(t,n,s,e),Ow(t,r);const i=s?Gw(t,e):void 0;return e&&ul(!1),i}function Gw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Iw);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Yw(t):null,i=Mi(t);Yn();const o=Un(r,t,0,[t.props,s]);if(Jn(),i(),ym(o)){if(o.then(Gh,Gh),e)return o.then(a=>{Qh(t,a,e)}).catch(a=>{_a(a,t,0)});t.asyncDep=o}else Qh(t,o,e)}else gp(t,e)}function Qh(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=qm(e)),gp(t,n)}let Yh;function gp(t,e,n){const r=t.type;if(!t.render){if(!e&&Yh&&!r.render){const s=r.template||hu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=qe(qe({isCustomElement:i,delimiters:a},o),c);r.render=Yh(s,l)}}t.render=r.render||Ct}{const s=Mi(t);Yn();try{Tw(t)}finally{Jn(),s()}}}const Qw={get(t,e){return vt(t,"get",""),t[e]}};function Yw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Qw),slots:t.slots,emit:t.emit,expose:e}}function Aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qm($v(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ei)return ei[n](t)},has(e,n){return n in e||n in ei}}))}function Jw(t){return oe(t)&&"__vccOpts"in t}const ye=(t,e)=>Bv(t,e,Ta);function Xw(t,e,n){const r=arguments.length;return r===2?De(e)&&!ee(e)?ll(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ll(n)&&(n=[n]),ce(t,e,n))}const Zw="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const e0="http://www.w3.org/2000/svg",t0="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Jh=On&&On.createElement("template"),n0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?On.createElementNS(e0,t):e==="mathml"?On.createElementNS(t0,t):On.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Jh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Jh.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},r0=Symbol("_vtc");function s0(t,e,n){const r=t[r0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xh=Symbol("_vod"),i0=Symbol("_vsh"),o0=Symbol(""),a0=/(^|;)\s*display\s*:/;function c0(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ko(r,a,"")}else for(const o in e)n[o]==null&&ko(r,o,"");for(const o in n)o==="display"&&(i=!0),ko(r,o,n[o])}else if(s){if(e!==n){const o=r[o0];o&&(n+=";"+o),r.cssText=n,i=a0.test(n)}}else e&&t.removeAttribute("style");Xh in t&&(t[Xh]=i?r.display:"",t[i0]&&(r.display="none"))}const Zh=/\s*!important$/;function ko(t,e,n){if(ee(n))n.forEach(r=>ko(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=l0(t,e);Zh.test(n)?t.setProperty(Or(r),n.replace(Zh,""),"important"):t[r]=n}}const ed=["Webkit","Moz","ms"],Ac={};function l0(t,e){const n=Ac[e];if(n)return n;let r=hs(e);if(r!=="filter"&&r in t)return Ac[e]=r;r=Em(r);for(let s=0;s<ed.length;s++){const i=ed[s]+r;if(i in t)return Ac[e]=i}return e}const td="http://www.w3.org/1999/xlink";function u0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(td,e.slice(6,e.length)):t.setAttributeNS(td,e,n);else{const i=mv(e);n==null||i&&!Am(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function h0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Am(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function d0(t,e,n,r){t.removeEventListener(e,n,r)}const nd=Symbol("_vei");function f0(t,e,n,r,s=null){const i=t[nd]||(t[nd]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=m0(e);if(r){const l=i[e]=_0(r,s);Gr(t,a,l,c)}else o&&(d0(t,a,o,c),i[e]=void 0)}}const rd=/(?:Once|Passive|Capture)$/;function m0(t){let e;if(rd.test(t)){e={};let r;for(;r=t.match(rd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let bc=0;const p0=Promise.resolve(),g0=()=>bc||(p0.then(()=>bc=0),bc=Date.now());function _0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xt(y0(r,n.value),e,5,[r])};return n.value=t,n.attached=g0(),n}function y0(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const sd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,v0=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?s0(t,r,l):e==="style"?c0(t,n,r):fa(e)?Jl(e)||f0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w0(t,e,r,l))?h0(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),u0(t,e,r,l))};function w0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&sd(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sd(e)&&$e(n)?!1:e in t}const id=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Ro(e,n):e};function E0(t){t.target.composing=!0}function od(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rc=Symbol("_assign"),Er={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Rc]=id(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Zc(a)),t[Rc](a)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",E0),Gr(t,"compositionend",od),Gr(t,"change",od))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Rc]=id(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Zc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},I0=["ctrl","shift","alt","meta"],T0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>I0.some(n=>t[`${n}Key`]&&!e.includes(n))},gn=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=T0[e[o]];if(a&&a(s,e))return}return t(s,...i)})},A0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_p=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Or(s.key);if(e.some(o=>o===i||A0[o]===i))return t(s)})},b0=qe({patchProp:v0},n0);let ad;function R0(){return ad||(ad=Mw(b0))}const S0=(...t)=>{const e=R0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=P0(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,C0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function C0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function P0(t){return $e(t)?document.querySelector(t):t}var cd={};/**
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
 */const yp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},k0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):k0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new D0;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class D0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N0=function(t){const e=yp(t);return vp.encodeByteArray(e,!0)},zo=function(t){return N0(t).replace(/\./g,"")},wp=function(t){try{return vp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function O0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V0=()=>O0().__FIREBASE_DEFAULTS__,M0=()=>{if(typeof process>"u"||typeof cd>"u")return;const t=cd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},x0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wp(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return V0()||M0()||x0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ep=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},L0=t=>{const e=Ep(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ip=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config},Tp=t=>{var e;return(e=ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class F0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function U0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),""].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function B0(){var t;const e=(t=ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function q0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H0(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function z0(){return!B0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W0(){try{return typeof indexedDB=="object"}catch{return!1}}function K0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const G0="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=G0,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Q0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new An(s,a,r)}}function Q0(t,e){return t.replace(Y0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Y0=/\{\$([^}]+)}/g;function J0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ld(i)&&ld(o)){if(!fs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ld(t){return t!==null&&typeof t=="object"}/**
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
 */function Li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function X0(t,e){const n=new Z0(t,e);return n.subscribe.bind(n)}class Z0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class tE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new F0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rE(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(t){return t===lr?void 0:t}function rE(t){return t.instantiationMode==="EAGER"}/**
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
 */class sE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const iE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},oE=ue.INFO,aE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},cE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=oE,this._logHandler=cE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const lE=(t,e)=>e.some(n=>t instanceof n);let ud,hd;function uE(){return ud||(ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hE(){return hd||(hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ap=new WeakMap,hl=new WeakMap,bp=new WeakMap,Cc=new WeakMap,pu=new WeakMap;function dE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($n(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ap.set(n,t)}).catch(()=>{}),pu.set(e,t),e}function fE(t){if(hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mE(t){dl=t(dl)}function pE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return bp.set(r,e.sort?e.sort():[e]),$n(r)}:hE().includes(t)?function(...e){return t.apply(Pc(this),e),$n(Ap.get(this))}:function(...e){return $n(t.apply(Pc(this),e))}}function gE(t){return typeof t=="function"?pE(t):(t instanceof IDBTransaction&&fE(t),lE(t,uE())?new Proxy(t,dl):t)}function $n(t){if(t instanceof IDBRequest)return dE(t);if(Cc.has(t))return Cc.get(t);const e=gE(t);return e!==t&&(Cc.set(t,e),pu.set(e,t)),e}const Pc=t=>pu.get(t);function _E(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=$n(o);return r&&o.addEventListener("upgradeneeded",c=>{r($n(o.result),c.oldVersion,c.newVersion,$n(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const yE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],kc=new Map;function dd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return kc.set(e,i),i}mE(t=>({...t,get:(e,n,r)=>dd(e,n)||t.get(e,n,r),has:(e,n)=>!!dd(e,n)||t.has(e,n)}));/**
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
 */class wE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",fd="0.10.2";/**
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
 */const Rr=new mu("@firebase/app"),IE="@firebase/app-compat",TE="@firebase/analytics-compat",AE="@firebase/analytics",bE="@firebase/app-check-compat",RE="@firebase/app-check",SE="@firebase/auth",CE="@firebase/auth-compat",PE="@firebase/database",kE="@firebase/database-compat",DE="@firebase/functions",NE="@firebase/functions-compat",OE="@firebase/installations",VE="@firebase/installations-compat",ME="@firebase/messaging",xE="@firebase/messaging-compat",LE="@firebase/performance",FE="@firebase/performance-compat",UE="@firebase/remote-config",$E="@firebase/remote-config-compat",BE="@firebase/storage",jE="@firebase/storage-compat",qE="@firebase/firestore",HE="@firebase/firestore-compat",zE="firebase",WE="10.11.1";/**
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
 */const ml="[DEFAULT]",KE={[fl]:"fire-core",[IE]:"fire-core-compat",[AE]:"fire-analytics",[TE]:"fire-analytics-compat",[RE]:"fire-app-check",[bE]:"fire-app-check-compat",[SE]:"fire-auth",[CE]:"fire-auth-compat",[PE]:"fire-rtdb",[kE]:"fire-rtdb-compat",[DE]:"fire-fn",[NE]:"fire-fn-compat",[OE]:"fire-iid",[VE]:"fire-iid-compat",[ME]:"fire-fcm",[xE]:"fire-fcm-compat",[LE]:"fire-perf",[FE]:"fire-perf-compat",[UE]:"fire-rc",[$E]:"fire-rc-compat",[BE]:"fire-gcs",[jE]:"fire-gcs-compat",[qE]:"fire-fst",[HE]:"fire-fst-compat","fire-js":"fire-js",[zE]:"fire-js-all"};/**
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
 */const Wo=new Map,GE=new Map,pl=new Map;function md(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(pl.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of Wo.values())md(n,t);for(const n of GE.values())md(n,t);return!0}function gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t.settings!==void 0}/**
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
 */const QE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new xi("app","Firebase",QE);/**
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
 */class YE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=WE;function Rp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ml,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(n||(n=Ip()),!n)throw Bn.create("no-options");const i=Wo.get(s);if(i){if(fs(n,i.options)&&fs(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const o=new sE(s);for(const c of pl.values())o.addComponent(c);const a=new YE(n,r,o);return Wo.set(s,a),a}function Sp(t=ml){const e=Wo.get(t);if(!e&&t===ml&&Ip())return Rp();if(!e)throw Bn.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let s=(r=KE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}ms(new br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const JE="firebase-heartbeat-database",XE=1,pi="firebase-heartbeat-store";let Dc=null;function Cp(){return Dc||(Dc=_E(JE,XE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function ZE(t){try{const n=(await Cp()).transaction(pi),r=await n.objectStore(pi).get(Pp(t));return await n.done,r}catch(e){if(e instanceof An)Rr.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function pd(t,e){try{const r=(await Cp()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,Pp(t)),await r.done}catch(n){if(n instanceof An)Rr.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function Pp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eI=1024,tI=30*24*60*60*1e3;class nI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gd(),{heartbeatsToSend:r,unsentEntries:s}=rI(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gd(){return new Date().toISOString().substring(0,10)}function rI(t,e=eI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_d(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_d(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W0()?K0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _d(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function iI(t){ms(new br("platform-logger",e=>new wE(e),"PRIVATE")),ms(new br("heartbeat",e=>new nI(e),"PRIVATE")),jn(fl,fd,t),jn(fl,fd,"esm2017"),jn("fire-js","")}iI("");function _u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oI=kp,Dp=new xi("auth","Firebase",kp());/**
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
 */const Ko=new mu("@firebase/auth");function aI(t,...e){Ko.logLevel<=ue.WARN&&Ko.warn(`Auth (${Ps}): ${t}`,...e)}function Do(t,...e){Ko.logLevel<=ue.ERROR&&Ko.error(`Auth (${Ps}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw vu(t,...e)}function Ft(t,...e){return vu(t,...e)}function yu(t,e,n){const r=Object.assign(Object.assign({},oI()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function _n(t){return yu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),yu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dp.create(t,...e)}function X(t,e,...n){if(!t)throw vu(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Do(e),new Error(e)}function yn(t,e){t||un(e)}/**
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
 */function gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lI(){return yd()==="http:"||yd()==="https:"}function yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lI()||j0()||"connection"in navigator)?navigator.onLine:!0}function hI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=$0()||q0()}get(){return uI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wu(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Np{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fI=new Fi(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bn(t,e,n,r,s={}){return Op(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Li(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Np.fetch()(Vp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Op(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dI),e);try{const s=new pI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yu(t,u,l);Dt(t,u)}}catch(s){if(s instanceof An)throw s;Dt(t,"network-request-failed",{message:String(s)})}}async function Ui(t,e,n,r,s={}){const i=await bn(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wu(t.config,s):`${t.config.apiScheme}://${s}`}function mI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),fI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ft(t,e,r);return s.customData._tokenResponse=n,s}function vd(t){return t!==void 0&&t.enterprise!==void 0}class gI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _I(t,e){return bn(t,"GET","/v2/recaptchaConfig",Xn(t,e))}/**
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
 */async function yI(t,e){return bn(t,"POST","/v1/accounts:delete",e)}async function Mp(t,e){return bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vI(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=Eu(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(Nc(s.auth_time)),issuedAtTime:si(Nc(s.iat)),expirationTime:si(Nc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function Eu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const s=wp(n);return s?JSON.parse(s):(Do("Failed to decode base64 JWT payload"),null)}catch(s){return Do("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wd(t){const e=Eu(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&wI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ps(t,Mp(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xp(i.providerUserInfo):[],a=TI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function II(t){const e=Ve(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xp(t){return t.map(e=>{var{providerId:n}=e,r=_u(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AI(t,e){const n=await Op(t,{},async()=>{const r=Li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Np.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bI(t,e){return bn(t,"POST","/v2/accounts:revokeToken",Xn(t,e))}/**
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
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=wd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await AI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function kn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_u(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vI(this,e)}reload(){return II(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await ps(this,yI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,j=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:L,isAnonymous:W,providerData:U,stsTokenManager:Q}=n;X(H&&Q,e,"internal-error");const re=rs.fromJSON(this.name,Q);X(typeof H=="string",e,"internal-error"),kn(h,e.name),kn(f,e.name),X(typeof L=="boolean",e,"internal-error"),X(typeof W=="boolean",e,"internal-error"),kn(p,e.name),kn(v,e.name),kn(g,e.name),kn(E,e.name),kn(P,e.name),kn(j,e.name);const Te=new hn({uid:H,auth:e,email:f,emailVerified:L,displayName:h,isAnonymous:W,photoURL:v,phoneNumber:p,tenantId:g,stsTokenManager:re,createdAt:P,lastLoginAt:j});return U&&Array.isArray(U)&&(Te.providerData=U.map(ge=>Object.assign({},ge))),E&&(Te._redirectEventId=E),Te}static async _fromIdTokenResponse(e,n,r=!1){const s=new rs;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Go(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new rs;a.updateFromIdToken(r);const c=new hn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Ed=new Map;function dn(t){yn(t instanceof Function,"Expected a class definition");let e=Ed.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ed.set(t,e),e)}/**
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
 */class Lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lp.type="NONE";const Id=Lp;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(dn(Id),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dn(Id);const o=No(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=hn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ss(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ss(i,e,r))}}/**
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
 */function Td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jp(e))return"Blackberry";if(qp(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Up(e))&&!e.includes("edge/"))return"Chrome";if(Bp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fp(t=Je()){return/firefox\//i.test(t)}function Iu(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Up(t=Je()){return/crios\//i.test(t)}function $p(t=Je()){return/iemobile/i.test(t)}function Bp(t=Je()){return/android/i.test(t)}function jp(t=Je()){return/blackberry/i.test(t)}function qp(t=Je()){return/webos/i.test(t)}function Ra(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RI(t=Je()){var e;return Ra(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SI(){return H0()&&document.documentMode===10}function Hp(t=Je()){return Ra(t)||Bp(t)||qp(t)||jp(t)||/windows phone/i.test(t)||$p(t)}function CI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zp(t,e=[]){let n;switch(t){case"Browser":n=Td(Je());break;case"Worker":n=`${Td(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
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
 */class PI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kI(t,e={}){return bn(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
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
 */const DI=6;class NI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class OI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ad(this),this.idTokenSubscription=new Ad(this),this.beforeStateQueue=new PI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mp(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(_n(this));const n=e?Ve(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kI(this),n=new NI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zn(t){return Ve(t)}class Ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=X0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(t){Sa=t}function Wp(t){return Sa.loadJS(t)}function MI(){return Sa.recaptchaEnterpriseScript}function xI(){return Sa.gapiScript}function LI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FI="recaptcha-enterprise",UI="NO_RECAPTCHA";class $I{constructor(e){this.type=FI,this.auth=Zn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_I(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new gI(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;vd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(UI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&vd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=MI();c.length!==0&&(c+=a),Wp(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function bd(t,e,n,r=!1){const s=new $I(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await bd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function BI(t,e){const n=gu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fs(i,e??{}))return s;Dt(s,"already-initialized")}return n.initialize({options:e})}function jI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qI(t,e,n){const r=Zn(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Kp(e),{host:o,port:a}=HI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zI()}function Kp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HI(t){const e=Kp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Rd(o)}}}function Rd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function WI(t,e){return bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function KI(t,e){return Ui(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
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
 */async function GI(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function QI(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
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
 */class gi extends Tu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new gi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,n,"signInWithPassword",KI);case"emailLink":return GI(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,r,"signUpPassword",WI);case"emailLink":return QI(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function is(t,e){return Ui(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
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
 */const YI="http://localhost";class Sr extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_u(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:YI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Li(n)}return e}}/**
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
 */function JI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XI(t){const e=zs(Ws(t)).link,n=e?zs(Ws(e)).deep_link_id:null,r=zs(Ws(t)).deep_link_id;return(r?zs(Ws(r)).link:null)||r||n||e||t}class Au{constructor(e){var n,r,s,i,o,a;const c=zs(Ws(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=JI((s=c.mode)!==null&&s!==void 0?s:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XI(e);try{return new Au(n)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Au.parseLink(n);return X(r,"argument-error"),gi._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $i extends bu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends $i{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class cn extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
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
 */class Mn extends $i{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class xn extends $i{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function ZI(t,e){return Ui(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=Sd(r);return new Cr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Sd(r);return new Cr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Sd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qo extends An{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qo(e,n,r,s)}}function Gp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,i,e,r):i})}async function eT(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function tT(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(_n(r));const s="reauthenticate";try{const i=await ps(t,Gp(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Eu(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Cr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
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
 */async function Qp(t,e,n=!1){if(Mt(t.app))return Promise.reject(_n(t));const r="signIn",s=await Gp(t,r,e),i=await Cr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nT(t,e){return Qp(Zn(t),e)}/**
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
 */async function Yp(t){const e=Zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rT(t,e,n){if(Mt(t.app))return Promise.reject(_n(t));const r=Zn(t),o=await yl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Yp(t),c}),a=await Cr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function sT(t,e,n){return Mt(t.app)?Promise.reject(_n(t)):nT(Ve(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yp(t),r})}/**
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
 */async function iT(t,e){return bn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Jp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ps(r,iT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oT(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function aT(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function cT(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function lT(t){return Ve(t).signOut()}const Yo="__sak";/**
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
 */class Xp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uT(){const t=Je();return Iu(t)||Ra(t)}const hT=1e3,dT=10;class Zp extends Xp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uT()&&CI(),this.fallbackToPolling=Hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);SI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zp.type="LOCAL";const fT=Zp;/**
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
 */class eg extends Xp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eg.type="SESSION";const tg=eg;/**
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
 */function mT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await mT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
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
 */function Ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ru("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function gT(t){Jt().location.href=t}/**
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
 */function ng(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function _T(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vT(){return ng()?self:null}/**
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
 */const rg="firebaseLocalStorageDb",wT=1,Jo="firebaseLocalStorage",sg="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pa(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function ET(){const t=indexedDB.deleteDatabase(rg);return new Bi(t).toPromise()}function vl(){const t=indexedDB.open(rg,wT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:sg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await ET(),e(await vl()))})})}async function Cd(t,e,n){const r=Pa(t,!0).put({[sg]:e,value:n});return new Bi(r).toPromise()}async function IT(t,e){const n=Pa(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function Pd(t,e){const n=Pa(t,!0).delete(e);return new Bi(n).toPromise()}const TT=800,AT=3;class ig{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ng()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(vT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _T(),!this.activeServiceWorker)return;this.sender=new pT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vl();return await Cd(e,Yo,"1"),await Pd(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pa(s,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ig.type="LOCAL";const bT=ig;new Fi(3e4,6e4);/**
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
 */function og(t,e){return e?dn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Su extends Tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RT(t){return Qp(t.auth,new Su(t),t.bypassAuthState)}function ST(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),tT(n,new Su(t),t.bypassAuthState)}async function CT(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),eT(n,new Su(t),t.bypassAuthState)}/**
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
 */class ag{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RT;case"linkViaPopup":case"linkViaRedirect":return CT;case"reauthViaPopup":case"reauthViaRedirect":return ST;default:Dt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PT=new Fi(2e3,1e4);async function kT(t,e,n){if(Mt(t.app))return Promise.reject(Ft(t,"operation-not-supported-in-this-environment"));const r=Zn(t);cI(t,e,bu);const s=og(r,n);return new mr(r,"signInViaPopup",e,s).executeNotNull()}class mr extends ag{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PT.get())};e()}}mr.currentPopupAction=null;/**
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
 */const DT="pendingRedirect",Oo=new Map;class NT extends ag{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await OT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OT(t,e){const n=xT(e),r=MT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function VT(t,e){Oo.set(t._key(),e)}function MT(t){return dn(t._redirectPersistence)}function xT(t){return No(DT,t.config.apiKey,t.name)}async function LT(t,e,n=!1){if(Mt(t.app))return Promise.reject(_n(t));const r=Zn(t),s=og(r,e),o=await new NT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const FT=10*60*1e3;class UT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$T(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FT&&this.cachedEventUids.clear(),this.cachedEventUids.has(kd(e))}saveEventToCache(e){this.cachedEventUids.add(kd(e)),this.lastProcessedEventTime=Date.now()}}function kd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $T(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cg(t);default:return!1}}/**
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
 */async function BT(t,e={}){return bn(t,"GET","/v1/projects",e)}/**
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
 */const jT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qT=/^https?/;async function HT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BT(t);for(const n of e)try{if(zT(n))return}catch{}Dt(t,"unauthorized-domain")}function zT(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qT.test(n))return!1;if(jT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const WT=new Fi(3e4,6e4);function Dd(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KT(t){return new Promise((e,n)=>{var r,s,i;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(Ft(t,"network-request-failed"))},timeout:WT.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)o();else{const a=LI("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},Wp(`${xI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function GT(t){return Vo=Vo||KT(t),Vo}/**
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
 */const QT=new Fi(5e3,15e3),YT="__/auth/iframe",JT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eA(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,JT):`https://${t.config.authDomain}/${YT}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=ZT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Li(r).slice(1)}`}async function tA(t){const e=await GT(t),n=Jt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:eA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Jt().setTimeout(()=>{i(o)},QT.get());function c(){Jt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const nA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rA=500,sA=600,iA="_blank",oA="http://localhost";class Nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aA(t,e,n,r=rA,s=sA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nA),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Je().toLowerCase();n&&(a=Up(l)?iA:n),Fp(l)&&(e=e||oA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(RI(l)&&a!=="_self")return cA(e||"",a),new Nd(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new Nd(h)}function cA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lA="__/auth/handler",uA="emulator/auth/handler",hA=encodeURIComponent("fac");async function Od(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof bu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",J0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof $i){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${hA}=${encodeURIComponent(c)}`:"";return`${dA(t)}?${Li(a).slice(1)}${l}`}function dA({config:t}){return t.emulator?wu(t,uA):`https://${t.authDomain}/${lA}`}/**
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
 */const Oc="webStorageSupport";class fA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tg,this._completeRedirectFn=LT,this._overrideRedirectResult=VT}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Od(e,n,r,gl(),s);return aA(e,o,Ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Od(e,n,r,gl(),s);return gT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tA(e),r=new UT(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oc];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hp()||Iu()||Ra()}}const mA=fA;var Vd="@firebase/auth",Md="1.7.2";/**
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
 */class pA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _A(t){ms(new br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zp(t)},l=new OI(r,s,i,c);return jI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new br("auth-internal",e=>{const n=Zn(e.getProvider("auth").getImmediate());return(r=>new pA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Vd,Md,gA(t)),jn(Vd,Md,"esm2017")}/**
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
 */const yA=5*60,vA=Tp("authIdTokenMaxAge")||yA;let xd=null;const wA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vA)return;const s=n==null?void 0:n.token;xd!==s&&(xd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EA(t=Sp()){const e=gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BI(t,{popupRedirectResolver:mA,persistence:[bT,fT,tg]}),r=Tp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wA(i.toString());aT(n,o,()=>o(n.currentUser)),oT(n,a=>o(a))}}const s=Ep("auth");return s&&qI(n,`http://${s}`),n}function IA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ft("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",IA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_A("Browser");var TA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Cu=Cu||{},ne=TA||self;function ka(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Da(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AA(t){return Object.prototype.hasOwnProperty.call(t,Vc)&&t[Vc]||(t[Vc]=++bA)}var Vc="closure_uid_"+(1e9*Math.random()>>>0),bA=0;function RA(t,e,n){return t.call.apply(t.bind,arguments)}function SA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=RA:ot=SA,ot.apply(null,arguments)}function po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function er(){this.s=this.s,this.o=this.o}var CA=0;er.prototype.s=!1;er.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),CA!=0)&&AA(this)};er.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Pu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ld(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ka(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var PA=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ne.addEventListener("test",n,e),ne.removeEventListener("test",n,e)}catch{}return t}();function _i(t){return/^[\s\xa0]*$/.test(t)}function Na(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Na().indexOf(t)!=-1}function ku(t){return ku[" "](t),t}ku[" "]=function(){};function kA(t,e){var n=Tb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var DA=Wt("Opera"),gs=Wt("Trident")||Wt("MSIE"),ug=Wt("Edge"),wl=ug||gs,hg=Wt("Gecko")&&!(Na().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),NA=Na().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function dg(){var t=ne.document;return t?t.documentMode:void 0}var El;e:{var Mc="",xc=function(){var t=Na();if(hg)return/rv:([^\);]+)(\)|;)/.exec(t);if(ug)return/Edge\/([\d\.]+)/.exec(t);if(gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(NA)return/WebKit\/(\S+)/.exec(t);if(DA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xc&&(Mc=xc?xc[1]:""),gs){var Lc=dg();if(Lc!=null&&Lc>parseFloat(Mc)){El=String(Lc);break e}}El=Mc}var Il;if(ne.document&&gs){var Fd=dg();Il=Fd||parseInt(El,10)||void 0}else Il=void 0;var OA=Il;function yi(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hg){e:{try{ku(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yi.$.h.call(this)}}ze(yi,at);var VA={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oa="closure_listenable_"+(1e6*Math.random()|0),MA=0;function xA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++MA,this.fa=this.ia=!1}function Va(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Du(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function LA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function fg(t){const e={};for(const n in t)e[n]=t[n];return e}const Ud="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Ud.length;i++)n=Ud[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ma(t){this.src=t,this.g={},this.h=0}Ma.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Al(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Tl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=lg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Va(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Al(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Nu="closure_lm_"+(1e6*Math.random()|0),Fc={};function pg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)pg(t,e[i],n,r,s);return null}return n=yg(n),t&&t[Oa]?t.O(e,n,Da(r)?!!r.capture:!!r,s):FA(t,e,n,!1,r,s)}function FA(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Da(s)?!!s.capture:!!s,a=Vu(t);if(a||(t[Nu]=a=new Ma(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=UA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(_g(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UA(){function t(n){return e.call(t.src,t.listener,n)}const e=$A;return t}function gg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)gg(t,e[i],n,r,s);else r=Da(r)?!!r.capture:!!r,n=yg(n),t&&t[Oa]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Al(i,n,r,s),-1<n&&(Va(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Al(e,n,r,s)),(n=-1<t?e[t]:null)&&Ou(n))}function Ou(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Oa])Tl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_g(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vu(e))?(Tl(n,t),n.h==0&&(n.src=null,e[Nu]=null)):Va(t)}}}function _g(t){return t in Fc?Fc[t]:Fc[t]="on"+t}function $A(t,e){if(t.fa)t=!0;else{e=new yi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ou(t),t=n.call(r,e)}return t}function Vu(t){return t=t[Nu],t instanceof Ma?t:null}var Uc="__closure_events_fn_"+(1e9*Math.random()>>>0);function yg(t){return typeof t=="function"?t:(t[Uc]||(t[Uc]=function(e){return t.handleEvent(e)}),t[Uc])}function He(){er.call(this),this.i=new Ma(this),this.S=this,this.J=null}ze(He,er);He.prototype[Oa]=!0;He.prototype.removeEventListener=function(t,e,n,r){gg(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(r,t),mg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=go(o,r,!0,e)&&s}if(o=e.g=t,s=go(o,r,!0,e)&&s,s=go(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=go(o,r,!1,e)&&s}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Va(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Tl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Mu=ne.JSON.stringify;class BA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jA(){var t=xu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qA{constructor(){this.h=this.g=null}add(e,n){const r=vg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vg=new BA(()=>new HA,t=>t.reset());class HA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function WA(t){ne.setTimeout(()=>{throw t},0)}let vi,wi=!1,xu=new qA,wg=()=>{const t=ne.Promise.resolve(void 0);vi=()=>{t.then(KA)}};var KA=()=>{for(var t;t=jA();){try{t.h.call(t.g)}catch(n){WA(n)}var e=vg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wi=!1};function xa(t,e){He.call(this),this.h=t||1,this.g=e||ne,this.j=ot(this.qb,this),this.l=Date.now()}ze(xa,He);$=xa.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(Lu(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){xa.$.N.call(this),Lu(this),delete this.g};function Fu(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Eg(t){t.g=Fu(()=>{t.g=null,t.i&&(t.i=!1,Eg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GA extends er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Eg(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(t){er.call(this),this.h=t,this.g={}}ze(Ei,er);var $d=[];function Ig(t,e,n,r){Array.isArray(n)||(n&&($d[0]=n.toString()),n=$d);for(var s=0;s<n.length;s++){var i=pg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Tg(t){Du(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ou(e)},t),t.g={}}Ei.prototype.N=function(){Ei.$.N.call(this),Tg(this)};Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function La(){this.g=!0}La.prototype.Ea=function(){this.g=!1};function QA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function YA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Xr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XA(t,n)+(r?" "+r:"")})}function JA(t,e){t.info(function(){return"TIMEOUT: "+e})}La.prototype.info=function(){};function XA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Mu(n)}catch{return e}}var xr={},Bd=null;function Fa(){return Bd=Bd||new He}xr.Ta="serverreachability";function Ag(t){at.call(this,xr.Ta,t)}ze(Ag,at);function Ii(t){const e=Fa();Qe(e,new Ag(e))}xr.STAT_EVENT="statevent";function bg(t,e){at.call(this,xr.STAT_EVENT,t),this.stat=e}ze(bg,at);function dt(t){const e=Fa();Qe(e,new bg(e,t))}xr.Ua="timingevent";function Rg(t,e){at.call(this,xr.Ua,t),this.size=e}ze(Rg,at);function ji(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Ua={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Sg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Uu(){}Uu.prototype.h=null;function jd(t){return t.h||(t.h=t.i())}function Cg(){}var qi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $u(){at.call(this,"d")}ze($u,at);function Bu(){at.call(this,"c")}ze(Bu,at);var bl;function $a(){}ze($a,Uu);$a.prototype.g=function(){return new XMLHttpRequest};$a.prototype.i=function(){return{}};bl=new $a;function Hi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ei(this),this.P=ZA,t=wl?125:void 0,this.V=new xa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Pg}function Pg(){this.i=null,this.g="",this.h=!1}var ZA=45e3,kg={},Rl={};$=Hi.prototype;$.setTimeout=function(t){this.P=t};function Sl(t,e,n){t.L=1,t.A=ja(vn(e)),t.u=n,t.S=!0,Dg(t,null)}function Dg(t,e){t.G=Date.now(),zi(t),t.B=vn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Ug(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Pg,t.g=o_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new GA(ot(t.Pa,t,t.g),t.O)),Ig(t.U,t.g,"readystatechange",t.nb),e=t.I?fg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ii(),QA(t.j,t.v,t.B,t.m,t.W,t.u)}$.nb=function(t){t=t.target;const e=this.M;e&&Gt(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const u=Gt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||wl||this.g&&(this.h.h||this.g.ja()||Wd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ii(3):Ii(2)),Ba(this);var n=this.g.da();this.ca=n;t:if(Ng(this)){var r=Wd(this.g);t="";var s=r.length,i=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),ii(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_i(a)){var l=a;break t}}l=null}if(n=l)Xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cl(this,n);else{this.i=!1,this.s=3,dt(12),pr(this),ii(this);break e}}this.S?(Og(this,u,o),wl&&this.i&&u==3&&(Ig(this.U,this.V,"tick",this.mb),this.V.start())):(Xr(this.j,this.m,o,null),Cl(this,o)),u==4&&pr(this),this.i&&!this.J&&(u==4?n_(this.l,this):(this.i=!1,zi(this)))}else wb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),pr(this),ii(this)}}}catch{}finally{}};function Ng(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Og(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=eb(t,n),s==Rl){e==4&&(t.s=4,dt(14),r=!1),Xr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==kg){t.s=4,dt(15),Xr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xr(t.j,t.m,s,null),Cl(t,s);Ng(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ku(e),e.M=!0,dt(11))):(Xr(t.j,t.m,n,"[Invalid Chunked Response]"),pr(t),ii(t))}$.mb=function(){if(this.g){var t=Gt(this.g),e=this.g.ja();this.o<e.length&&(Ba(this),Og(this,t,e),this.i&&t!=4&&zi(this))}};function eb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Rl:(n=Number(e.substring(n,r)),isNaN(n)?kg:(r+=1,r+n>e.length?Rl:(e=e.slice(r,r+n),t.o=r+n,e)))}$.cancel=function(){this.J=!0,pr(this)};function zi(t){t.Y=Date.now()+t.P,Vg(t,t.P)}function Vg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ji(ot(t.lb,t),e)}function Ba(t){t.C&&(ne.clearTimeout(t.C),t.C=null)}$.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(JA(this.j,this.B),this.L!=2&&(Ii(),dt(17)),pr(this),this.s=2,ii(this)):Vg(this,this.Y-t)};function ii(t){t.l.H==0||t.J||n_(t.l,t)}function pr(t){Ba(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Lu(t.V),Tg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Cl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pl(n.i,t))){if(!t.K&&Pl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ea(n),za(n);else break e;Wu(n),dt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ji(ot(n.ib,n),6e3));if(1>=jg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else gr(n,11)}else if((t.K||n.g==t)&&ea(n),!_i(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ju(i,i.h),i.h=null))}if(r.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Se(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=i_(r,r.J?r.pa:null,r.Y),o.K){qg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ba(a),zi(a)),r.g=o}else e_(r);0<n.j.length&&Wa(n)}else l[0]!="stop"&&l[0]!="close"||gr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?gr(n,7):zu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ii(4)}catch{}}function tb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ka(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ka(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Mg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ka(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nb(t),r=tb(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var xg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ir(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ir){this.h=t.h,Xo(this,t.j),this.s=t.s,this.g=t.g,Zo(this,t.m),this.l=t.l;var e=t.i,n=new Ti;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qd(this,n),this.o=t.o}else t&&(e=String(t).match(xg))?(this.h=!1,Xo(this,e[1]||"",!0),this.s=Ks(e[2]||""),this.g=Ks(e[3]||"",!0),Zo(this,e[4]),this.l=Ks(e[5]||"",!0),qd(this,e[6]||"",!0),this.o=Ks(e[7]||"")):(this.h=!1,this.i=new Ti(null,this.h))}Ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gs(e,Hd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gs(e,Hd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gs(n,n.charAt(0)=="/"?ob:ib,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gs(n,cb)),t.join("")};function vn(t){return new Ir(t)}function Xo(t,e,n){t.j=n?Ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qd(t,e,n){e instanceof Ti?(t.i=e,lb(t.i,t.h)):(n||(e=Gs(e,ab)),t.i=new Ti(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function ja(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hd=/[#\/\?@]/g,ib=/[#\?:]/g,ob=/[#\?]/g,ab=/[#\?@]/g,cb=/#/g;function Ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Map,t.h=0,t.i&&rb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Ti.prototype;$.add=function(t,e){tr(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lg(t,e){tr(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fg(t,e){return tr(t),e=Ds(t,e),t.g.has(e)}$.forEach=function(t,e){tr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};$.ta=function(){tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};$.Z=function(t){tr(this);let e=[];if(typeof t=="string")Fg(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return tr(this),this.i=null,t=Ds(this,t),Fg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ug(t,e,n){Lg(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),Pu(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lb(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Lg(this,r),Ug(this,s,n))},t)),t.j=e}var ub=class{constructor(t,e){this.g=t,this.map=e}};function $g(t){this.l=t||hb,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hb=10;function Bg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jg(t){return t.h?1:t.g?t.g.size:0}function Pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ju(t,e){t.g?t.g.add(e):t.h=e}function qg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$g.prototype.cancel=function(){if(this.i=Hg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Pu(t.i)}var db=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function fb(){this.g=new db}function mb(t,e,n){const r=n||"";try{Mg(t,function(s,i){let o=s;Da(s)&&(o=Mu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function pb(t,e){const n=new La;if(ne.Image){const r=new Image;r.onload=po(_o,n,r,"TestLoadImage: loaded",!0,e),r.onerror=po(_o,n,r,"TestLoadImage: error",!1,e),r.onabort=po(_o,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=po(_o,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _o(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wi(t){this.l=t.ec||null,this.j=t.ob||!1}ze(Wi,Uu);Wi.prototype.g=function(){return new qa(this.l,this.j)};Wi.prototype.i=function(t){return function(){return t}}({});function qa(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(qa,He);var qu=0;$=qa.prototype;$.open=function(t,e){if(this.readyState!=qu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ai(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=qu};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function zg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ki(this):Ai(this),this.readyState==3&&zg(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Ki(this))};$.Ya=function(t){this.g&&(this.response=t,Ki(this))};$.ka=function(){this.g&&Ki(this)};function Ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ai(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gb=ne.JSON.parse;function Me(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wg,this.L=this.M=!1}ze(Me,He);var Wg="",_b=/^https?$/i,yb=["POST","PUT"];$=Me.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bl.g(),this.C=this.u?jd(this.u):jd(bl),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){zd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=lg(yb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qg(this),0<this.B&&((this.L=vb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=Fu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zd(this,i)}};function vb(t){return gs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Cu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function zd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kg(t),Ha(t)}function Kg(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Ha(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ha(this,!0)),Me.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?Gg(this):this.kb())};$.kb=function(){Gg(this)};function Gg(t){if(t.h&&typeof Cu<"u"&&(!t.C[1]||Gt(t)!=4||t.da()!=2)){if(t.v&&Gt(t)==4)Fu(t.La,0,t);else if(Qe(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(xg)[1]||null;!s&&ne.self&&ne.self.location&&(s=ne.self.location.protocol.slice(0,-1)),r=!_b.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var i=2<Gt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Kg(t)}}finally{Ha(t)}}}}function Ha(t,e){if(t.g){Qg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Qg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function Gt(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gb(e)}};function Wd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Wg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wb(t){const e={};t=(t.g&&2<=Gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(_i(t[r]))continue;var n=zA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}LA(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yg(t){let e="";return Du(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jg(t){this.Ga=0,this.j=[],this.l=new La,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Bs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Bs("baseRetryDelayMs",5e3,t),this.hb=Bs("retryDelaySeedMs",1e4,t),this.eb=Bs("forwardChannelMaxRetries",2,t),this.xa=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $g(t&&t.concurrentRequestLimit),this.Ja=new fb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=Jg.prototype;$.ra=8;$.H=1;function zu(t){if(Xg(t),t.H==3){var e=t.W++,n=vn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Gi(t,n),e=new Hi(t,t.l,e),e.L=2,e.A=ja(vn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.A,n=!0),n||(e.g=o_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),zi(e)}s_(t)}function za(t){t.g&&(Ku(t),t.g.cancel(),t.g=null)}function Xg(t){za(t),t.u&&(ne.clearTimeout(t.u),t.u=null),ea(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Wa(t){if(!Bg(t.i)&&!t.m){t.m=!0;var e=t.Na;vi||wg(),wi||(vi(),wi=!0),xu.add(e,t),t.C=0}}function Eb(t,e){return jg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ji(ot(t.Na,t,e),r_(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Hi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=fg(i),mg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zg(this,s,e),n=vn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Gi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Yg(i)))+"&"+e:this.o&&Hu(n,this.o,i)),ju(this.i,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.aa=!0,Sl(s,n,null)):Sl(s,n,e),this.H=2}}else this.H==3&&(t?Kd(this,t):this.j.length==0||Bg(this.i)||Kd(this))};function Kd(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),Gi(t,r),t.o&&t.s&&Hu(r,t.o,t.s),n=new Hi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Zg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ju(t.i,n),Sl(n,r,e)}function Gi(t,e){t.na&&Du(t.na,function(n,r){Se(e,r,n)}),t.h&&Mg({},function(n,r){Se(e,r,n)})}function Zg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ot(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{mb(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function e_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vi||wg(),wi||(vi(),wi=!0),xu.add(e,t),t.A=0}}function Wu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ji(ot(t.Ma,t),r_(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,t_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ji(ot(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),za(this),t_(this))};function Ku(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function t_(t){t.g=new Hi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Gi(t,e),t.o&&t.s&&Hu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ja(vn(e)),n.u=null,n.S=!0,Dg(n,t)}$.ib=function(){this.v!=null&&(this.v=null,za(this),Wu(this),dt(19))};function ea(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function n_(t,e){var n=null;if(t.g==e){ea(t),Ku(t),t.g=null;var r=2}else if(Pl(t.i,e))n=e.F,qg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Fa(),Qe(r,new Rg(r,n)),Wa(t)}else e_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&Eb(t,e)||r==2&&Wu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}}function r_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function gr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ot(t.pb,t);n||(n=new Ir("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Xo(n,"https"),ja(n)),pb(n.toString(),r)}else dt(2);t.H=0,t.h&&t.h.za(e),s_(t),Xg(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function s_(t){if(t.H=0,t.ma=[],t.h){const e=Hg(t.i);(e.length!=0||t.j.length!=0)&&(Ld(t.ma,e),Ld(t.ma,t.j),t.i.i.length=0,Pu(t.j),t.j.length=0),t.h.ya()}}function i_(t,e,n){var r=n instanceof Ir?vn(n):new Ir(n);if(r.g!="")e&&(r.g=e+"."+r.g),Zo(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ir(null);r&&Xo(i,r),e&&(i.g=e),s&&Zo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),Gi(t,r),r}function o_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Me(new Wi({ob:n})):new Me(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function a_(){}$=a_.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function ta(){if(gs&&!(10<=Number(OA)))throw Error("Environmental error: no available transport.")}ta.prototype.g=function(t,e){return new bt(t,e)};function bt(t,e){He.call(this),this.g=new Jg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_i(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_i(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ns(this)}ze(bt,He);bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=i_(t,null,t.Y),Wa(t)};bt.prototype.close=function(){zu(this.g)};bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mu(t),t=n);e.j.push(new ub(e.fb++,t)),e.H==3&&Wa(e)};bt.prototype.N=function(){this.g.h=null,delete this.j,zu(this.g),delete this.g,bt.$.N.call(this)};function c_(t){$u.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(c_,$u);function l_(){Bu.call(this),this.status=1}ze(l_,Bu);function Ns(t){this.g=t}ze(Ns,a_);Ns.prototype.Ba=function(){Qe(this.g,"a")};Ns.prototype.Aa=function(t){Qe(this.g,new c_(t))};Ns.prototype.za=function(t){Qe(this.g,new l_)};Ns.prototype.ya=function(){Qe(this.g,"b")};function Ib(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(Ut,Ib);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $c(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)$c(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){$c(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){$c(this,r),s=0;break}}this.h=s,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Tb={};function Gu(t){return-128<=t&&128>t?kA(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return os;if(0>t)return Ke(Qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kl;return new Ee(e,0)}function u_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(u_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),r=os,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Qt(Math.pow(e,i)),r=r.R(i).add(Qt(o))):(r=r.R(n),r=r.add(Qt(o)))}return r}var kl=4294967296,os=Gu(0),Dl=Gu(1),Gd=Gu(16777216);$=Ee.prototype;$.ea=function(){if(St(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kl+r)*e,e*=kl}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(fn(this))return"0";if(St(this))return"-"+Ke(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,r="";;){var s=ra(n,e).g;n=na(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,fn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function fn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}$.X=function(t){return t=na(this,t),St(t)?-1:fn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(Dl)}$.abs=function(){return St(this)?Ke(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function na(t,e){return t.add(Ke(e))}$.R=function(t){if(fn(this)||fn(t))return os;if(St(this))return St(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(St(t))return Ke(this.R(Ke(t)));if(0>this.X(Gd)&&0>t.X(Gd))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,yo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,yo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,yo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,yo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function yo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function js(t,e){this.g=t,this.h=e}function ra(t,e){if(fn(e))throw Error("division by zero");if(fn(t))return new js(os,os);if(St(t))return e=ra(Ke(t),e),new js(Ke(e.g),Ke(e.h));if(St(e))return e=ra(t,Ke(e)),new js(Ke(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Dl,r=e;0>=r.X(t);)n=Qd(n),r=Qd(r);var s=zr(n,1),i=zr(r,1);for(r=zr(r,2),n=zr(n,2);!fn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=zr(r,1),n=zr(n,1)}return e=na(t,s.R(e)),new js(s,e)}for(s=os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Qt(n),o=i.R(e);St(o)||0<o.X(t);)n-=r,i=Qt(n),o=i.R(e);fn(i)&&(i=Dl),s=s.add(i),t=na(t,o)}return new js(s,t)}$.gb=function(t){return ra(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Qd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function zr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}ta.prototype.createWebChannel=ta.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;Ua.NO_ERROR=0;Ua.TIMEOUT=8;Ua.HTTP_ERROR=6;Sg.COMPLETE="complete";Cg.EventType=qi;qi.OPEN="a";qi.CLOSE="b";qi.ERROR="c";qi.MESSAGE="d";He.prototype.listen=He.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=Qt;Ee.fromString=u_;var Ab=function(){return new ta},bb=function(){return Fa()},Bc=Ua,Rb=Sg,Sb=xr,Yd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Cb=Wi,vo=Cg,Pb=Me,kb=Ut,as=Ee;const Jd="@firebase/firestore";/**
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
 */let Os="10.11.1";/**
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
 */const Pr=new mu("@firebase/firestore");function qs(){return Pr.logLevel}function K(t,...e){if(Pr.logLevel<=ue.DEBUG){const n=e.map(Qu);Pr.debug(`Firestore (${Os}): ${t}`,...n)}}function wn(t,...e){if(Pr.logLevel<=ue.ERROR){const n=e.map(Qu);Pr.error(`Firestore (${Os}): ${t}`,...n)}}function _s(t,...e){if(Pr.logLevel<=ue.WARN){const n=e.map(Qu);Pr.warn(`Firestore (${Os}): ${t}`,...n)}}function Qu(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function be(t,e){t||te()}function ie(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class h_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Nb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ob{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new h_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new nt(e)}}class Vb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Vb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new xb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Fb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class d_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Fb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function ys(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Ce(0,0))}static max(){return new se(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bi{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends bi{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const Ub=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends bi{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return Ub.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new z(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Pe.fromString(e))}static fromName(e){return new Y(Pe.fromString(e).popFirst(5))}static empty(){return new Y(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Pe(e.slice()))}}function $b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Wn(s,Y.empty(),e)}function Bb(t){return new Wn(t.readTime,t.key,-1)}class Wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(se.min(),Y.empty(),-1)}static max(){return new Wn(se.max(),Y.empty(),-1)}}function jb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==qb)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function zb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Yi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yu.oe=-1;function Ka(t){return t==null}function sa(t){return t===0&&1/t==-1/0}function Wb(t){return typeof t=="number"&&Number.isInteger(t)&&!sa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function f_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zd(this.data.getIterator())}getIteratorFrom(e){return new Zd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Zd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new At([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class m_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new m_("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Kb.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function Ju(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xu(t){const e=t.mapValue.fields.__previous_value__;return Ju(e)?Xu(e):e}function Ri(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class Gb{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Si{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ju(t)?4:Qb(t)?9007199254740991:10:te()}function en(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kn(s.timestampValue),a=Kn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return kr(s.bytesValue).isEqual(kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?sa(o)===sa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Xd(o)!==Xd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!en(o[c],a[c])))return!1;return!0}(t,e);default:return te()}}function Ci(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),c=Fe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(Ri(t),Ri(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,o){const a=kr(i),c=kr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=me(a[l],c[l]);if(u!==0)return u}return me(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=me(Fe(i.latitude),Fe(o.latitude));return a!==0?a:me(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=vs(a[l],c[l]);if(u)return u}return me(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Eo.mapValue&&o===Eo.mapValue)return 0;if(i===Eo.mapValue)return 1;if(o===Eo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=me(c[h],u[h]);if(f!==0)return f;const p=vs(a[c[h]],l[u[h]]);if(p!==0)return p}return me(c.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Kn(t),r=Kn(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function ws(t){return Nl(t)}function Nl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nl(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function tf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ol(t){return!!t&&"integerValue"in t}function Zu(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function rf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(oi(this.value))}}function p_(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new Ge([n]);if(Mo(r)){const i=p_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new At(e)}/**
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
 */class rt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,se.min(),se.min(),se.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,se.min(),se.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,se.min(),se.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ia{constructor(e,n){this.position=e,this.inclusive=n}}function sf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Yb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class g_{}class Ue extends g_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Xb(e,n,r):n==="array-contains"?new t1(e,r):n==="in"?new n1(e,r):n==="not-in"?new r1(e,r):n==="array-contains-any"?new s1(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Zb(e,r):new e1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends g_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $t(e,n)}matches(e){return __(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function __(t){return t.op==="and"}function y_(t){return Jb(t)&&__(t)}function Jb(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function Vl(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(y_(t))return t.filters.map(e=>Vl(e)).join(",");{const e=t.filters.map(n=>Vl(n)).join(",");return`${t.op}(${e})`}}function v_(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&v_(o,s.filters[a]),!0):!1}(t,e):void te()}function w_(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof $t?function(n){return n.op.toString()+" {"+n.getFilters().map(w_).join(" ,")+"}"}(t):"Filter"}class Xb extends Ue{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Zb extends Ue{constructor(e,n){super(e,"in",n),this.keys=E_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class e1 extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=E_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function E_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class t1 extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zu(n)&&Ci(n.arrayValue,this.value)}}class n1 extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class r1 extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ci(this.value.arrayValue,n)}}class s1 extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}/**
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
 */class i1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function af(t,e=null,n=[],r=[],s=null,i=null,o=null){return new i1(t,e,n,r,s,i,o)}function eh(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.ue=n}return e.ue}function th(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Yb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!v_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!of(t.startAt,e.startAt)&&of(t.endAt,e.endAt)}function Ml(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function o1(t,e,n,r,s,i,o,a){return new Vs(t,e,n,r,s,i,o,a)}function Ga(t){return new Vs(t)}function cf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function I_(t){return t.collectionGroup!==null}function ai(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(Ge.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Pi(i,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Pi(Ge.keyField(),r))}return e.ce}function Xt(t){const e=ie(t);return e.le||(e.le=a1(e,ai(t))),e.le}function a1(t,e){if(t.limitType==="F")return af(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pi(s.field,i)});const n=t.endAt?new ia(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ia(t.startAt.position,t.startAt.inclusive):null;return af(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xl(t,e){const n=t.filters.concat([e]);return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ll(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qa(t,e){return th(Xt(t),Xt(e))&&t.limitType===e.limitType}function T_(t){return`${eh(Xt(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>w_(s)).join(", ")}]`),Ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ws(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function Ya(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=sf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ai(r),s)||r.endAt&&!function(o,a,c){const l=sf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ai(r),s))}(t,e)}function c1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A_(t){return(e,n)=>{let r=!1;for(const s of ai(t)){const i=l1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function l1(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?vs(c,l):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return f_(this.inner)}size(){return this.innerSize}}/**
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
 */const u1=new Ne(Y.comparator);function En(){return u1}const b_=new Ne(Y.comparator);function Qs(...t){let e=b_;for(const n of t)e=e.insert(n.key,n);return e}function R_(t){let e=b_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return ci()}function S_(){return ci()}function ci(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const h1=new Ne(Y.comparator),d1=new Ye(Y.comparator);function le(...t){let e=d1;for(const n of t)e=e.add(n);return e}const f1=new Ye(me);function m1(){return f1}/**
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
 */function C_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sa(e)?"-0":e}}function P_(t){return{integerValue:""+t}}function k_(t,e){return Wb(e)?P_(e):C_(t,e)}/**
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
 */class Ja{constructor(){this._=void 0}}function p1(t,e,n){return t instanceof ki?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ju(i)&&(i=Xu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Es?N_(t,e):t instanceof Is?O_(t,e):function(s,i){const o=D_(s,i),a=lf(o)+lf(s.Pe);return Ol(o)&&Ol(s.Pe)?P_(a):C_(s.serializer,a)}(t,e)}function g1(t,e,n){return t instanceof Es?N_(t,e):t instanceof Is?O_(t,e):n}function D_(t,e){return t instanceof Di?function(r){return Ol(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ki extends Ja{}class Es extends Ja{constructor(e){super(),this.elements=e}}function N_(t,e){const n=V_(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class Is extends Ja{constructor(e){super(),this.elements=e}}function O_(t,e){let n=V_(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class Di extends Ja{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function lf(t){return Fe(t.integerValue||t.doubleValue)}function V_(t){return Zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Xa{constructor(e,n){this.field=e,this.transform=n}}function _1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Es&&s instanceof Es||r instanceof Is&&s instanceof Is?ys(r.elements,s.elements,en):r instanceof Di&&s instanceof Di?en(r.Pe,s.Pe):r instanceof ki&&s instanceof ki}(t.transform,e.transform)}class y1{constructor(e,n){this.version=e,this.transformResults=n}}class yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Za{}function M_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ec(t.key,yt.none()):new Ji(t.key,t.data,yt.none());{const n=t.data,r=gt.empty();let s=new Ye(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new nr(t.key,r,new At(s.toArray()),yt.none())}}function v1(t,e,n){t instanceof Ji?function(s,i,o){const a=s.value.clone(),c=hf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=hf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(x_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function li(t,e,n,r){return t instanceof Ji?function(i,o,a,c){if(!xo(i.precondition,o))return a;const l=i.value.clone(),u=df(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(i,o,a,c){if(!xo(i.precondition,o))return a;const l=df(i.fieldTransforms,c,o),u=o.data;return u.setAll(x_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function w1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=D_(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ys(r,s,(i,o)=>_1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ji extends Za{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends Za{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function x_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hf(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,g1(o,a,n[s]))}return r}function df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,p1(i,o,e))}return r}class ec extends Za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E1 extends Za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class I1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&v1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=S_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=M_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>uf(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>uf(n,r))}}class nh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return h1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new nh(e,n,r,s)}}/**
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
 */class T1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class A1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xe,he;function b1(t){switch(t){default:return te();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function L_(t){if(t===void 0)return wn("GRPC error has no .code"),A.UNKNOWN;switch(t){case xe.OK:return A.OK;case xe.CANCELLED:return A.CANCELLED;case xe.UNKNOWN:return A.UNKNOWN;case xe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case xe.INTERNAL:return A.INTERNAL;case xe.UNAVAILABLE:return A.UNAVAILABLE;case xe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case xe.NOT_FOUND:return A.NOT_FOUND;case xe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case xe.ABORTED:return A.ABORTED;case xe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case xe.DATA_LOSS:return A.DATA_LOSS;default:return te()}}(he=xe||(xe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function R1(){return new TextEncoder}/**
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
 */const S1=new as([4294967295,4294967295],0);function ff(t){const e=R1().encode(t),n=new kb;return n.update(e),new Uint8Array(n.digest())}function mf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new as([n,r],0),new as([s,i],0)]}class rh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=as.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(as.fromNumber(r)));return s.compare(S1)===1&&(s=new as([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ff(e),[r,s]=mf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new rh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=ff(e),[r,s]=mf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(se.min(),s,new Ne(me),En(),le())}}class Xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xi(r,n,le(),le(),le())}}/**
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
 */class Lo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class F_{constructor(e,n){this.targetId=e,this.me=n}}class U_{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class pf{constructor(){this.fe=0,this.ge=_f(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=le(),n=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Xi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=_f()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class C1{constructor(e){this.Le=e,this.Be=new Map,this.ke=En(),this.qe=gf(),this.Qe=new Ne(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ml(i))if(r===0){const o=new Y(i.path);this.Ue(n,o,rt.newNoDocument(o,se.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=kr(r).toUint8Array()}catch(c){if(c instanceof m_)return _s("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new rh(o,s,i)}catch(c){return _s(c instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Ml(a.target)){const c=new Y(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,rt.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=le();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new tc(e,n,this.Qe,this.ke,r);return this.ke=En(),this.qe=gf(),this.Qe=new Ne(me),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new pf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new pf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gf(){return new Ne(Y.comparator)}function _f(){return new Ne(Y.comparator)}const P1={asc:"ASCENDING",desc:"DESCENDING"},k1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},D1={and:"AND",or:"OR"};class N1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fl(t,e){return t.useProto3Json||Ka(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function O1(t,e){return oa(t,e.toTimestamp())}function Zt(t){return be(!!t),se.fromTimestamp(function(n){const r=Kn(n);return new Ce(r.seconds,r.nanos)}(t))}function sh(t,e){return Ul(t,e).canonicalString()}function Ul(t,e){const n=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function B_(t){const e=Pe.fromString(t);return be(W_(e)),e}function $l(t,e){return sh(t.databaseId,e.path)}function jc(t,e){const n=B_(e);if(n.get(1)!==t.databaseId.projectId)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(q_(n))}function j_(t,e){return sh(t.databaseId,e)}function V1(t){const e=B_(t);return e.length===4?Pe.emptyPath():q_(e)}function Bl(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function q_(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yf(t,e,n){return{name:$l(t,e),fields:n.value.mapValue.fields}}function M1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(be(u===void 0||typeof u=="string"),lt.fromBase64String(u||"")):(be(u===void 0||u instanceof Buffer||u instanceof Uint8Array),lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:L_(l.code);return new z(u,l.message||"")}(o);n=new U_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jc(t,r.document.name),i=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):se.min(),a=new gt({mapValue:{fields:r.document.fields}}),c=rt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Lo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jc(t,r.document),i=r.readTime?Zt(r.readTime):se.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jc(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new A1(s,i),a=r.targetId;n=new F_(a,o)}}return n}function x1(t,e){let n;if(e instanceof Ji)n={update:yf(t,e.key,e.value)};else if(e instanceof ec)n={delete:$l(t,e.key)};else if(e instanceof nr)n={update:yf(t,e.key,e.data),updateMask:z1(e.fieldMask)};else{if(!(e instanceof E1))return te();n={verify:$l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ki)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Es)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Is)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Di)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:O1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function L1(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Zt(s.updateTime):Zt(i);return o.isEqual(se.min())&&(o=Zt(i)),new y1(o,s.transformResults||[])}(n,e))):[]}function F1(t,e){return{documents:[j_(t,e.path)]}}function U1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=j_(t,s);const i=function(l){if(l.length!==0)return z_($t.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Yr(f.field),direction:j1(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Fl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:s}}function $1(t){let e=V1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=H_(h);return f instanceof $t&&y_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new Pi(Jr(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ka(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new ia(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new ia(p,f)}(n.endAt)),o1(e,s,o,i,a,"F",c,l)}function B1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function H_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $t.create(n.compositeFilter.filters.map(r=>H_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function j1(t){return P1[t]}function q1(t){return k1[t]}function H1(t){return D1[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return Ge.fromServerFormat(t.fieldPath)}function z_(t){return t instanceof Ue?function(n){if(n.op==="=="){if(rf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(nf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(nf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:q1(n.op),value:n.value}}}(t):t instanceof $t?function(n){const r=n.getFilters().map(s=>z_(s));return r.length===1?r[0]:{compositeFilter:{op:H1(n.op),filters:r}}}(t):te()}function z1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function W_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ln{constructor(e,n,r,s,i=se.min(),o=se.min(),a=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class W1{constructor(e){this.ut=e}}function K1(t){const e=$1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ll(e,e.limit,"L"):e}/**
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
 */class G1{constructor(){this.on=new Q1}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Wn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Q1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Pe.comparator)).toArray()}}/**
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
 */class Ts{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ts(0)}static Nn(){return new Ts(-1)}}/**
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
 */class Y1{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class J1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class X1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&li(r.mutation,s,At.empty(),Ce.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=_r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Qs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=En();const o=ci(),a=function(){return ci()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof nr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),li(u.mutation,l,u.mutation.getFieldMask(),Ce.now())):o.set(l.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new J1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ci();let s=new Ne((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||At.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||le()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=S_();u.forEach(f=>{if(!i.has(f)){const p=M_(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):I_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(_r());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:R_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=Qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Qs();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,c=>{const l=function(h,f){return new Vs(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,rt.newInvalidDocument(u)))});let a=Qs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&li(u.mutation,l,At.empty(),Ce.now()),Ya(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Z1{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:K1(s.bundledQuery),readTime:Zt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class eR{constructor(){this.overlays=new Ne(Y.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=_r(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=_r(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=_r(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new T1(n,r));let i=this.lr.get(n);i===void 0&&(i=le(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class ih{constructor(){this.hr=new Ye(je.Pr),this.Ir=new Ye(je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new je(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new je(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Y(new Pe([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Y(new Pe([])),r=new je(n,e),s=new je(n,e+1);let i=le();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Y.comparator(e.key,n.key)||me(e.gr,n.gr)}static Tr(e,n){return me(e.gr,n.gr)||Y.comparator(e.key,n.key)}}/**
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
 */class tR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ye(je.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new I1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(me);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new je(new Y(i),0);let a=new Ye(me);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new je(n,0),s=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nR{constructor(e){this.Cr=e,this.docs=function(){return new Ne(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=En();const o=n.path,a=new Y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||jb(Bb(u),r)<=0||(s.has(u.key)||Ya(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rR(this)}getSize(e){return S.resolve(this.size)}}class rR extends Y1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class sR{constructor(e){this.persistence=e,this.Fr=new Ms(n=>eh(n),th),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ih,this.targetCount=0,this.Nr=Ts.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
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
 */class iR{constructor(e,n){this.Lr={},this.overlays={},this.Br=new Yu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new sR(this),this.indexManager=new G1,this.remoteDocumentCache=function(s){return new nR(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new W1(n),this.Kr=new Z1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new tR(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new oR(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class oR extends Hb{constructor(e){super(),this.currentSequenceNumber=e}}class oh{constructor(e){this.persistence=e,this.Gr=new ih,this.zr=null}static jr(e){return new oh(e)}get Hr(){if(this.zr)return this.zr;throw te()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const s=Y.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class ah{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ah(e,n.fromCache,r,s)}}/**
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
 */class aR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return z0()?8:zb(Je())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new aR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(qs()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(qs()<=ue.DEBUG&&K("QueryEngine","Query:",Qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(qs()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):S.resolve())}zi(e,n){if(cf(n))return S.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ll(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Ll(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return cf(n)||s.isEqual(se.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?S.resolve(null):(qs()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qr(n)),this.Xi(e,o,n,$b(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ye(A_(e));return n.forEach((s,i)=>{Ya(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return qs()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Qr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Wn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class lR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ne(me),this.ns=new Ms(i=>eh(i),th),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function uR(t,e,n,r){return new lR(t,e,n,r)}async function K_(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=le();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function hR(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=S.resolve();return f.forEach(v=>{p=p.next(()=>u.getEntry(c,v)).next(g=>{const E=l.docVersions.get(v);be(E!==null),g.version.compareTo(E)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=le();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function G_(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function dR(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(g,E,P){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=En(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(fR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(se.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function fR(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=En();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function mR(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pR(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function jl(t,e,n){const r=ie(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Yi(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function vf(t,e,n){const r=ie(t);let s=se.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ie(c),f=h.ns.get(u);return f!==void 0?S.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,Xt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:le())).next(a=>(gR(r,c1(e),a),{documents:a,ls:i})))}function gR(t,e,n){let r=t.rs.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class wf{constructor(){this.activeTargetIds=m1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _R{constructor(){this.eo=new wf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new wf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yR{ro(e){}shutdown(){}}/**
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
 */class Ef{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Io=null;function qc(){return Io===null?Io=function(){return 268435456+Math.round(2147483648*Math.random())}():Io++,"0x"+Io.toString(16)}/**
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
 */const vR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
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
 */const tt="WebChannelConnection";class ER extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(n,r,s,i,o){const a=qc(),c=this.Co(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,s).then(u=>(K("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw _s("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Mo(n,r,s,i,o,a){return this.Do(n,r,s,i,o)}vo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Co(n,r){const s=vR[n];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,s){const i=qc();return new Promise((o,a)=>{const c=new Pb;c.setWithCredentials(!0),c.listenOnce(Rb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bc.NO_ERROR:const u=c.getResponseJson();K(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Bc.TIMEOUT:K(tt,`RPC '${e}' ${i} timed out`),a(new z(A.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const h=c.getStatus();if(K(tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const v=function(E){const P=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(P)>=0?P:A.UNKNOWN}(p.status);a(new z(v,p.message))}else a(new z(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(A.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{K(tt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);K(tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}xo(e,n,r){const s=qc(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ab(),a=bb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Cb({})),this.vo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");K(tt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const v=new wR({co:E=>{p?K(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(f||(K(tt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),K(tt,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},lo:()=>h.close()}),g=(E,P,j)=>{E.listen(P,H=>{try{j(H)}catch(L){setTimeout(()=>{throw L},0)}})};return g(h,vo.EventType.OPEN,()=>{p||(K(tt,`RPC '${e}' stream ${s} transport opened.`),v.Vo())}),g(h,vo.EventType.CLOSE,()=>{p||(p=!0,K(tt,`RPC '${e}' stream ${s} transport closed`),v.fo())}),g(h,vo.EventType.ERROR,E=>{p||(p=!0,_s(tt,`RPC '${e}' stream ${s} transport errored:`,E),v.fo(new z(A.UNAVAILABLE,"The operation could not be completed")))}),g(h,vo.EventType.MESSAGE,E=>{var P;if(!p){const j=E.data[0];be(!!j);const H=j,L=H.error||((P=H[0])===null||P===void 0?void 0:P.error);if(L){K(tt,`RPC '${e}' stream ${s} received error:`,L);const W=L.status;let U=function(Te){const ge=xe[Te];if(ge!==void 0)return L_(ge)}(W),Q=L.message;U===void 0&&(U=A.INTERNAL,Q="Unknown error status: "+W+" with message "+L.message),p=!0,v.fo(new z(U,Q)),h.close()}else K(tt,`RPC '${e}' stream ${s} received:`,j),v.po(j)}}),g(a,Sb.STAT_EVENT,E=>{E.stat===Yd.PROXY?K(tt,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===Yd.NOPROXY&&K(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.mo()},0),v}}function Hc(){return typeof document<"u"?document:null}/**
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
 */function nc(t){return new N1(t,!0)}/**
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
 */class Q_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Y_{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new Q_(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===n&&this.a_(r,s)},r=>{e(()=>{const s=new z(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IR extends Y_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=M1(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Zt(o.readTime):se.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Bl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ml(c)?{documents:F1(i,c)}:{query:U1(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$_(i,o.resumeToken);const l=Fl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=oa(i,o.snapshotVersion.toTimestamp());const l=Fl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=B1(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Bl(this.serializer),n.removeTarget=e,this.r_(n)}}class TR extends Y_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=L1(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.d_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Bl(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>x1(this.serializer,r))};this.r_(n)}}/**
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
 */class AR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,Ul(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(A.UNKNOWN,i.toString())})}Mo(e,n,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Ul(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(A.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class bR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(wn(n),this.y_=!1):K("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class RR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ie(c);l.M_.add(4),await Zi(l),l.N_.set("Unknown"),l.M_.delete(4),await rc(l)}(this))})}),this.N_=new bR(r,s)}}async function rc(t){if(Fr(t))for(const e of t.x_)await e(!0)}async function Zi(t){for(const e of t.x_)await e(!1)}function J_(t,e){const n=ie(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),hh(n)?uh(n):xs(n).Zo()&&lh(n,e))}function ch(t,e){const n=ie(t),r=xs(n);n.F_.delete(e),r.Zo()&&X_(n,e),n.F_.size===0&&(r.Zo()?r.t_():Fr(n)&&n.N_.set("Unknown"))}function lh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).h_(e)}function X_(t,e){t.L_.xe(e),xs(t).P_(e)}function uh(t){t.L_=new C1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.N_.w_()}function hh(t){return Fr(t)&&!xs(t).Yo()&&t.F_.size>0}function Fr(t){return ie(t).M_.size===0}function Z_(t){t.L_=void 0}async function SR(t){t.N_.set("Online")}async function CR(t){t.F_.forEach((e,n)=>{lh(t,e)})}async function PR(t,e){Z_(t),hh(t)?(t.N_.D_(e),uh(t)):t.N_.set("Unknown")}async function kR(t,e,n){if(t.N_.set("Online"),e instanceof U_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await aa(t,r)}else if(e instanceof Lo?t.L_.Ke(e):e instanceof F_?t.L_.He(e):t.L_.We(e),!n.isEqual(se.min()))try{const r=await G_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(lt.EMPTY_BYTE_STRING,u.snapshotVersion)),X_(i,c);const h=new Ln(u.target,c,l,u.sequenceNumber);lh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await aa(t,r)}}async function aa(t,e,n){if(!Yi(e))throw e;t.M_.add(1),await Zi(t),t.N_.set("Offline"),n||(n=()=>G_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await rc(t)})}function ey(t,e){return e().catch(n=>aa(t,n,e))}async function sc(t){const e=ie(t),n=Gn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;DR(e);)try{const s=await mR(e.localStore,r);if(s===null){e.v_.length===0&&n.t_();break}r=s.batchId,NR(e,s)}catch(s){await aa(e,s)}ty(e)&&ny(e)}function DR(t){return Fr(t)&&t.v_.length<10}function NR(t,e){t.v_.push(e);const n=Gn(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function ty(t){return Fr(t)&&!Gn(t).Yo()&&t.v_.length>0}function ny(t){Gn(t).start()}async function OR(t){Gn(t).R_()}async function VR(t){const e=Gn(t);for(const n of t.v_)e.E_(n.mutations)}async function MR(t,e,n){const r=t.v_.shift(),s=nh.from(r,e,n);await ey(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sc(t)}async function xR(t,e){e&&Gn(t).T_&&await async function(r,s){if(function(o){return b1(o)&&o!==A.ABORTED}(s.code)){const i=r.v_.shift();Gn(r).e_(),await ey(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sc(r)}}(t,e),ty(t)&&ny(t)}async function If(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Fr(n);n.M_.add(3),await Zi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await rc(n)}async function LR(t,e){const n=ie(t);e?(n.M_.delete(2),await rc(n)):e||(n.M_.add(2),await Zi(n),n.N_.set("Unknown"))}function xs(t){return t.B_||(t.B_=function(n,r,s){const i=ie(n);return i.m_(),new IR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:SR.bind(null,t),Io:CR.bind(null,t),Eo:PR.bind(null,t),l_:kR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),hh(t)?uh(t):t.N_.set("Unknown")):(await t.B_.stop(),Z_(t))})),t.B_}function Gn(t){return t.k_||(t.k_=function(n,r,s){const i=ie(n);return i.m_(),new TR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:OR.bind(null,t),Eo:xR.bind(null,t),A_:VR.bind(null,t),d_:MR.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await sc(t)):(await t.k_.stop(),t.v_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class dh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new dh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fh(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Yi(t))return new z(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Qs(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Tf{constructor(){this.q_=new Ne(Y.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):te():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new As(e,n,cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class FR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class UR{constructor(){this.queries=new Ms(e=>T_(e),Qa),this.onlineState="Unknown",this.z_=new Set}}async function ry(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new FR,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=fh(o,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&mh(n)}async function sy(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $R(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&mh(n)}function BR(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function mh(t){t.z_.forEach(e=>{e.next()})}var ql,Af;(Af=ql||(ql={})).J_="default",Af.Cache="cache";class iy{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ql.Cache}}/**
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
 */class oy{constructor(e){this.key=e}}class ay{constructor(e){this.key=e}}class jR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=le(),this.mutatedKeys=le(),this.Ia=A_(e),this.Ta=new cs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Tf,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Ya(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?v!==g&&(r.track({type:3,doc:p}),E=!0):this.Ra(f,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.Ia(p,c)>0||l&&this.Ia(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),E=!0):f&&!p&&(r.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(p,v){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return g(p)-g(v)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new As(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Tf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=le(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new ay(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new oy(r))}),n}pa(e){this.la=e.ls,this.Pa=le();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return As.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class qR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HR{constructor(e){this.key=e,this.wa=!1}}class zR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ms(a=>T_(a),Qa),this.Da=new Map,this.Ca=new Set,this.va=new Ne(Y.comparator),this.Fa=new Map,this.Ma=new ih,this.xa={},this.Oa=new Map,this.Na=Ts.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function WR(t,e,n=!0){const r=fy(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await cy(r,e,n,!0),s}async function KR(t,e){const n=fy(t);await cy(n,e,!0,!1)}async function cy(t,e,n,r){const s=await pR(t.localStore,Xt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await GR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&J_(t.remoteStore,s),a}async function GR(t,e,n,r,s){t.Ba=(h,f,p)=>async function(g,E,P,j){let H=E.view.da(P);H.Zi&&(H=await vf(g.localStore,E.query,!1).then(({documents:Q})=>E.view.da(Q,H)));const L=j&&j.targetChanges.get(E.targetId),W=j&&j.targetMismatches.get(E.targetId)!=null,U=E.view.applyChanges(H,g.isPrimaryClient,L,W);return Rf(g,E.targetId,U.fa),U.snapshot}(t,h,f,p);const i=await vf(t.localStore,e,!0),o=new jR(e,i.ls),a=o.da(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Rf(t,n,l.fa);const u=new qR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function QR(t,e,n){const r=ie(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Qa(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await jl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ch(r.remoteStore,s.targetId),Hl(r,s.targetId)}).catch(Qi)):(Hl(r,s.targetId),await jl(r.localStore,s.targetId,!0))}async function YR(t,e){const n=ie(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ch(n.remoteStore,r.targetId))}async function JR(t,e,n){const r=sS(t);try{const s=await function(o,a){const c=ie(o),l=Ce.now(),u=a.reduce((p,v)=>p.add(v.key),le());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=En(),g=le();return c.ss.getEntries(p,u).next(E=>{v=E,v.forEach((P,j)=>{j.isValidDocument()||(g=g.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,v)).next(E=>{h=E;const P=[];for(const j of a){const H=w1(j,h.get(j.key).overlayedDocument);H!=null&&P.push(new nr(j.key,H,p_(H.value.mapValue),yt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,P,a)}).next(E=>{f=E;const P=E.applyToLocalDocumentSet(h,g);return c.documentOverlayCache.saveOverlays(p,E.batchId,P)})}).then(()=>({batchId:f.batchId,changes:R_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new Ne(me)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(r,s.batchId,n),await eo(r,s.changes),await sc(r.remoteStore)}catch(s){const i=fh(s,"Failed to persist write");n.reject(i)}}async function ly(t,e){const n=ie(t);try{const r=await dR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?be(o.wa):s.removedDocuments.size>0&&(be(o.wa),o.wa=!1))}),await eo(n,r,e)}catch(r){await Qi(r)}}function bf(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ie(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(l=!0)}),l&&mh(c)}(r.eventManager,e),s.length&&r.Sa.l_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XR(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Ne(Y.comparator);o=o.insert(i,rt.newNoDocument(i,se.min()));const a=le().add(i),c=new tc(se.min(),new Map,new Ne(me),o,a);await ly(r,c),r.va=r.va.remove(i),r.Fa.delete(e),ph(r)}else await jl(r.localStore,e,!1).then(()=>Hl(r,e,n)).catch(Qi)}async function ZR(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await hR(n.localStore,e);hy(n,r,null),uy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eo(n,s)}catch(s){await Qi(s)}}async function eS(t,e,n){const r=ie(t);try{const s=await function(o,a){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(be(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);hy(r,e,n),uy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eo(r,s)}catch(s){await Qi(s)}}function uy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function hy(t,e,n){const r=ie(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||dy(t,r)})}function dy(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ch(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ph(t))}function Rf(t,e,n){for(const r of n)r instanceof oy?(t.Ma.addReference(r.key,e),tS(t,r)):r instanceof ay?(K("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||dy(t,r.key)):te()}function tS(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(K("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ph(t))}function ph(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Y(Pe.fromString(e)),r=t.Na.next();t.Fa.set(r,new HR(n)),t.va=t.va.insert(n,r),J_(t.remoteStore,new Ln(Xt(Ga(n.path)),r,"TargetPurposeLimboResolution",Yu.oe))}}async function eo(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,c)=>{o.push(r.Ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=ah.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(c,l){const u=ie(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,f=>S.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>S.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Yi(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.ts.get(f),v=p.snapshotVersion,g=p.withLastLimboFreeSnapshotVersion(v);u.ts=u.ts.insert(f,g)}}}(r.localStore,i))}async function nS(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await K_(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new z(A.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(n,r._s)}}function rS(t,e){const n=ie(t),r=n.Fa.get(e);if(r&&r.wa)return le().add(r.key);{let s=le();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function fy(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ly.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XR.bind(null,e),e.Sa.l_=$R.bind(null,e.eventManager),e.Sa.ka=BR.bind(null,e.eventManager),e}function sS(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eS.bind(null,e),e}class Sf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return uR(this.persistence,new cR,e.initialUser,this.serializer)}createPersistence(e){return new iR(oh.jr,this.serializer)}createSharedClientState(e){return new _R}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nS.bind(null,this.syncEngine),await LR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UR}()}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=function(i){return new ER(i)}(e.databaseInfo);return function(i,o,a,c){return new AR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new RR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>bf(this.syncEngine,n,0),function(){return Ef.D()?new Ef:new yR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new zR(s,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ie(r);K("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Zi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class my{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=d_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zc(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await K_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cS(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>If(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>If(e.remoteStore,s)),t._onlineComponents=e}function aS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function cS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!aS(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await zc(t,new Sf)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await zc(t,new Sf);return t._offlineComponents}async function py(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Cf(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Cf(t,new iS))),t._onlineComponents}function lS(t){return py(t).then(e=>e.syncEngine)}async function zl(t){const e=await py(t),n=e.eventManager;return n.onListen=WR.bind(null,e.syncEngine),n.onUnlisten=QR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YR.bind(null,e.syncEngine),n}function uS(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new my({next:f=>{o.enqueueAndForget(()=>sy(i,h));const p=f.docs.has(a);!p&&f.fromCache?l.reject(new z(A.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&c&&c.source==="server"?l.reject(new z(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new iy(Ga(a.path),u,{includeMetadataChanges:!0,ra:!0});return ry(i,h)}(await zl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function gy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Pf=new Map;/**
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
 */function _y(t,e,n){if(!n)throw new z(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hS(t,e,n,r){if(e===!0&&r===!0)throw new z(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kf(t){if(!Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Df(t){if(Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Pt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new z(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Nf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Db;switch(r.type){case"firstParty":return new Mb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pf.get(n);r&&(K("ComponentProvider","Removing Datastore"),Pf.delete(n),r.terminate())}(this),Promise.resolve()}}function dS(t,e,n,r={}){var s;const i=(t=Pt(t,oc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=nt.MOCK_USER;else{a=U0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new nt(l)}t._authCredentials=new Nb(new h_(a,c))}}/**
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
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Hn extends Ur{constructor(e,n,r){super(e,n,Ga(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new Y(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function Ht(t,e,...n){if(t=Ve(t),_y("collection","path",e),t instanceof oc){const r=Pe.fromString(e,...n);return Df(r),new Hn(t,null,r)}{if(!(t instanceof ct||t instanceof Hn))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Df(r),new Hn(t.firestore,null,r)}}function Le(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=d_.newId()),_y("doc","path",e),t instanceof oc){const r=Pe.fromString(e,...n);return kf(r),new ct(t,null,new Y(r))}{if(!(t instanceof ct||t instanceof Hn))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return kf(r),new ct(t.firestore,t instanceof Hn?t.converter:null,new Y(r))}}/**
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
 */class fS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new Q_(this,"async_queue_retry"),this.hu=()=>{const n=Hc();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Hc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new qn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Yi(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=dh.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&te()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Of(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Qn extends oc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new fS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yy(this),this._firestoreClient.terminate()}}function mS(t,e){const n=typeof t=="object"?t:Sp(),r=typeof t=="string"?t:"(default)",s=gu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=L0("firestore");i&&dS(s,...i)}return s}function ac(t){return t._firestoreClient||yy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Gb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,gy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new oS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(lt.fromBase64String(e))}catch(n){throw new z(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class to{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $r{constructor(e){this._methodName=e}}/**
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
 */class gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const pS=/^__.*__$/;class gS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ji(e,this.data,n,this.fieldTransforms)}}class vy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class cc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ca(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(wy(this.fu)&&pS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class _S{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}Fu(e,n,r,s=!1){return new cc({fu:e,methodName:n,vu:r,path:Ge.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lc(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new _S(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ey(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);Eh("Data must be an object, but it was:",o,r);const a=by(r,o);let c,l;if(i.merge)c=new At(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Wl(e,h,n);if(!o.contains(f))throw new z(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Sy(u,f)||u.push(f)}c=new At(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new gS(new gt(a),c,l)}class uc extends $r{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}function Iy(t,e,n){return new cc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class _h extends $r{_toFieldTransform(e){return new Xa(e.path,new ki)}isEqual(e){return e instanceof _h}}class yh extends $r{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Iy(this,e,!0),r=this.Mu.map(i=>Br(i,n)),s=new Es(r);return new Xa(e.path,s)}isEqual(e){return e instanceof yh&&fs(this.Mu,e.Mu)}}class vh extends $r{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Iy(this,e,!0),r=this.Mu.map(i=>Br(i,n)),s=new Is(r);return new Xa(e.path,s)}isEqual(e){return e instanceof vh&&fs(this.Mu,e.Mu)}}class wh extends $r{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Di(e.serializer,k_(e.serializer,this.xu));return new Xa(e.path,n)}isEqual(e){return e instanceof wh&&this.xu===e.xu}}function Ty(t,e,n,r){const s=t.Fu(1,e,n);Eh("Data must be an object, but it was:",s,r);const i=[],o=gt.empty();Lr(r,(c,l)=>{const u=Ih(e,c,n);l=Ve(l);const h=s.Su(u);if(l instanceof uc)i.push(u);else{const f=Br(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new At(i);return new vy(o,a,s.fieldTransforms)}function Ay(t,e,n,r,s,i){const o=t.Fu(1,e,n),a=[Wl(e,r,n)],c=[s];if(i.length%2!=0)throw new z(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Wl(e,i[f])),c.push(i[f+1]);const l=[],u=gt.empty();for(let f=a.length-1;f>=0;--f)if(!Sy(l,a[f])){const p=a[f];let v=c[f];v=Ve(v);const g=o.Su(p);if(v instanceof uc)l.push(p);else{const E=Br(v,g);E!=null&&(l.push(p),u.set(p,E))}}const h=new At(l);return new vy(u,h,o.fieldTransforms)}function yS(t,e,n,r=!1){return Br(n,t.Fu(r?4:3,e))}function Br(t,e){if(Ry(t=Ve(t)))return Eh("Unsupported field value:",e,t),by(t,e);if(t instanceof $r)return function(r,s){if(!wy(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Br(a,s.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return k_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:oa(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(s.serializer,i)}}if(r instanceof gh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:$_(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ic(r)}`)}(t,e)}function by(t,e){const n={};return f_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=Br(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ry(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof gh||t instanceof bs||t instanceof ct||t instanceof $r)}function Eh(t,e,n){if(!Ry(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ic(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Wl(t,e,n){if((e=Ve(e))instanceof to)return e._internalPath;if(typeof e=="string")return Ih(t,e);throw ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const vS=new RegExp("[~\\*/\\[\\]]");function Ih(t,e,n){if(e.search(vS)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new to(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ca(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(A.INVALID_ARGUMENT,a+t+c)}function Sy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wS extends Cy{data(){return super.data()}}function hc(t,e){return typeof e=="string"?Ih(t,e):e instanceof to?e._internalPath:e._delegate._internalPath}/**
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
 */function ES(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Th{}class Py extends Th{}function ur(t,e,...n){let r=[];e instanceof Th&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ah).length,a=i.filter(c=>c instanceof dc).length;if(o>1||o>0&&a>0)throw new z(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class dc extends Py{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dc(e,n,r)}_apply(e){const n=this._parse(e);return ky(e._query,n),new Ur(e.firestore,e.converter,xl(e._query,n))}_parse(e){const n=lc(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Mf(h,u);const p=[];for(const v of h)p.push(Vf(c,i,v));f={arrayValue:{values:p}}}else f=Vf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Mf(h,u),f=yS(a,o,h,u==="in"||u==="not-in");return Ue.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function rn(t,e,n){const r=e,s=hc("where",t);return dc._create(s,r,n)}class Ah extends Th{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ah(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)ky(o,c),o=xl(o,c)}(e._query,n),new Ur(e.firestore,e.converter,xl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bh extends Py{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pi(i,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function IS(t,e="asc"){const n=e,r=hc("orderBy",t);return bh._create(r,n)}function Vf(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new z(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!I_(e)&&n.indexOf("/")!==-1)throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!Y.isDocumentKey(r))throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tf(t,new Y(r))}if(n instanceof ct)return tf(t,n._key);throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function Mf(t,e){if(!Array.isArray(t)||t.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ky(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TS{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new gh(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);be(W_(r));const s=new Si(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Dy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ny extends Cy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends Ny{data(e={}){return super.data(e)}}class AS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Js(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Js(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:bS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
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
 */function xf(t){t=Pt(t,ct);const e=Pt(t.firestore,Qn);return uS(ac(e),t._key).then(n=>Vy(e,t,n))}class Oy extends TS{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function Rt(t,e,n){t=Pt(t,ct);const r=Pt(t.firestore,Qn),s=Dy(t.converter,e,n);return fc(r,[Ey(lc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yt.none())])}function Kl(t,e,n,...r){t=Pt(t,ct);const s=Pt(t.firestore,Qn),i=lc(s);let o;return o=typeof(e=Ve(e))=="string"||e instanceof to?Ay(i,"updateDoc",t._key,e,n,r):Ty(i,"updateDoc",t._key,e),fc(s,[o.toMutation(t._key,yt.exists(!0))])}function Wc(t){return fc(Pt(t.firestore,Qn),[new ec(t._key,yt.none())])}function sn(t,...e){var n,r,s;t=Ve(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Of(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Of(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ct)l=Pt(t.firestore,Qn),u=Ga(t._key.path),c={next:h=>{e[o]&&e[o](Vy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Pt(t,Ur);l=Pt(h.firestore,Qn),u=h._query;const f=new Oy(l);c={next:p=>{e[o]&&e[o](new AS(l,f,h,p))},error:e[o+1],complete:e[o+2]},ES(t._query)}return function(f,p,v,g){const E=new my(g),P=new iy(p,E,v);return f.asyncQueue.enqueueAndForget(async()=>ry(await zl(f),P)),()=>{E.$a(),f.asyncQueue.enqueueAndForget(async()=>sy(await zl(f),P))}}(ac(l),u,a,c)}function fc(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>JR(await lS(r),s,i)),i.promise}(ac(t),e)}function Vy(t,e,n){const r=n.docs.get(e._key),s=new Oy(t);return new Ny(t,s,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class RS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=lc(e)}set(e,n,r){this._verifyNotCommitted();const s=Kc(e,this._firestore),i=Dy(s.converter,n,r),o=Ey(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,yt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Kc(e,this._firestore);let o;return o=typeof(n=Ve(n))=="string"||n instanceof to?Ay(this._dataReader,"WriteBatch.update",i._key,n,r,s):Ty(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,yt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Kc(e,this._firestore);return this._mutations=this._mutations.concat(new ec(n._key,yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Kc(t,e){if((t=Ve(t)).firestore!==e)throw new z(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function My(){return new _h("serverTimestamp")}function Tr(...t){return new yh("arrayUnion",t)}function xy(...t){return new vh("arrayRemove",t)}function Gc(t){return new wh("increment",t)}/**
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
 */function Qc(t){return ac(t=Pt(t,Qn)),new RS(t,e=>fc(t,e))}(function(e,n=!0){(function(s){Os=s})(Ps),ms(new br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Qn(new Ob(r.getProvider("auth-internal")),new Lb(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),jn(Jd,"4.6.1",e),jn(Jd,"4.6.1","esm2017")})();var SS="firebase",CS="10.11.1";/**
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
 */jn(SS,CS,"app");const PS={apiKey:"AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",authDomain:"vuechat-c27a8.firebaseapp.com",projectId:"vuechat-c27a8",storageBucket:"vuechat-c27a8.appspot.com",messagingSenderId:"713413651968",appId:"1:713413651968:web:93c490d79df8c319cf2e5"},Ly=Rp(PS),kt=EA(Ly),_e=mS(Ly);var kS={BASE_URL:"/friendzy/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const la=G(typeof localStorage<"u"&&localStorage.getItem("friendzyLang")||"es"),DS=typeof localStorage<"u"&&localStorage.getItem("friendzyTheme")||"naranja",ua=G(DS),Yc={es:{cargando:"Cargando...",selecciona:"Selecciona un usuario o una conversación",para_chatear:"para empezar a chatear en privado",conecta_amigos:"Conecta con amigos",conecta_inteligente:"de forma inteligente",auth_intro:"Chat en tiempo real, conoce nuevas personas y crea conexiones significativas en una plataforma segura.",feat1:"Mensajería en tiempo real",feat2:"Conoce personas de todo el mundo",feat3:"Seguridad y privacidad garantizada",stat_users:"Usuarios",stat_msgs:"Mensajes",stat_uptime:"Uptime",mobile_tagline:"Conecta con amigos de todo el mundo",bienvenido:"Bienvenido de vuelta",crea_cuenta:"Crea tu cuenta",login_sub:"Ingresa a tu cuenta para continuar",reg_sub:"Regístrate gratis y empieza a chatear",google_in:"Iniciar sesión con Google",or_email:"o con tu email",nombre:"Nombre",tu_nombre:"Tu nombre",email:"Email",contrasena:"Contraseña",iniciar_login:"Iniciar sesión",crear:"Crear cuenta",no_cuenta:"¿No tienes cuenta?",reg_gratis:"Regístrate gratis",ya_cuenta:"¿Ya tienes cuenta?",inicia_sesion:"Inicia sesión",badge_seguro:"Seguro",badge_tiempo:"Tiempo real",badge_global:"Global",err_completa:"Completa todos los campos",err_email_pass:"Email o contraseña incorrectos",err_email_used:"Este email ya está registrado",err_invalid_email:"Introduce un email válido",err_weak:"La contraseña debe tener al menos 6 caracteres",err_too_many:"Demasiados intentos. Intenta más tarde",busqueda_ph:"Buscar chats o personas...",personas_reg:"Personas registradas",no_personas:"No hay personas registradas",solicitudes:"Solicitudes",quiere_chatear:"Quiere chatear contigo",amigos:"Amigos",en_linea:"En línea",conversaciones:"Conversaciones",sin_conv:"Sin conversaciones todavía",sin_conv_sub:"Busca personas y envía una solicitud para chatear",mi_perfil:"Mi perfil",configuracion:"Configuración",cerrar_sesion:"Cerrar sesión",chat:"Chat",pendiente:"Pendiente",aceptar:"Aceptar",solicitar:"Solicitar",favoritos:"Favoritos",sin_favoritos:"Sin chats favoritos",sin_mensajes:"Sin mensajes todavía",ahora:"ahora",grabar:"Grabando · toca para terminar",nota_larga:"La nota es demasiado larga para enviarse",enviar_ph:"Escribe un mensaje...",no_mensajes:"No hay mensajes todavía",envia_primero:"¡Envía el primero!",hoy:"Hoy",ag_favoritos:"Agregar a favoritos",quitar_fav:"Quitar de favoritos",fotos_compartidas:"Fotos compartidas",sin_fotos:"No hay fotos compartidas todavía",idioma:"Idioma",tema:"Tema",naranja:"Naranja",azul:"Azul",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Tu alias en el chat",cumpleanos:"Fecha de nacimiento",guardar:"Guardar",guardado:"Guardado",cambiar_foto:"Cambiar foto",foto_nombre:"Foto de perfil",mensaje_nuevo:"Nuevo mensaje",nueva_solicitud:"Nueva solicitud de chat",quieres_chatear:"quiere chatear contigo"},en:{cargando:"Loading...",selecciona:"Select a user or conversation",para_chatear:"to start chatting privately",conecta_amigos:"Connect with friends",conecta_inteligente:"the smart way",auth_intro:"Real-time chat, meet new people and create meaningful connections on a secure platform.",feat1:"Real-time messaging",feat2:"Meet people from all over the world",feat3:"Security and privacy guaranteed",stat_users:"Users",stat_msgs:"Messages",stat_uptime:"Uptime",mobile_tagline:"Connect with friends from everywhere",bienvenido:"Welcome back",crea_cuenta:"Create your account",login_sub:"Sign in to continue",reg_sub:"Sign up for free and start chatting",google_in:"Continue with Google",or_email:"or with your email",nombre:"Name",tu_nombre:"Your name",email:"Email",contrasena:"Password",iniciar_login:"Sign in",crear:"Create account",no_cuenta:"Do not have an account?",reg_gratis:"Sign up free",ya_cuenta:"Already have an account?",inicia_sesion:"Sign in",badge_seguro:"Secure",badge_tiempo:"Real time",badge_global:"Global",err_completa:"Complete all fields",err_email_pass:"Incorrect email or password",err_email_used:"This email is already registered",err_invalid_email:"Enter a valid email",err_weak:"Password must be at least 6 characters",err_too_many:"Too many attempts. Try again later",busqueda_ph:"Search chats or people...",personas_reg:"Registered people",no_personas:"No registered people",solicitudes:"Requests",quiere_chatear:"Wants to chat with you",amigos:"Friends",en_linea:"Online",conversaciones:"Conversations",sin_conv:"No conversations yet",sin_conv_sub:"Search people and send a request to chat",mi_perfil:"My profile",configuracion:"Settings",cerrar_sesion:"Sign out",chat:"Chat",pendiente:"Pending",aceptar:"Accept",solicitar:"Request",favoritos:"Favorites",sin_favoritos:"No favorite chats",sin_mensajes:"No messages yet",ahora:"now",grabar:"Recording · tap to finish",nota_larga:"The voice note is too long to send",enviar_ph:"Write a message...",no_mensajes:"No messages yet",envia_primero:"Send the first one!",hoy:"Today",ag_favoritos:"Add to favorites",quitar_fav:"Remove from favorites",fotos_compartidas:"Shared photos",sin_fotos:"No shared photos yet",idioma:"Language",tema:"Theme",naranja:"Orange",azul:"Blue",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Your chat alias",cumpleanos:"Birthday",guardar:"Save",guardado:"Saved",cambiar_foto:"Change photo",foto_nombre:"Profile photo",mensaje_nuevo:"New message",nueva_solicitud:"New chat request",quieres_chatear:"wants to chat with you"}};function NS(t){la.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyLang",t)}function Fy(t=ua.value){const e=document.documentElement;t==="azul"?e.setAttribute("data-theme","azul"):e.removeAttribute("data-theme");const n=document.getElementById("app-favicon");if(n&&typeof import.meta<"u"&&kS){const r="/friendzy/";n.href=r+(t==="azul"?"favicon-azul.svg":"favicon.svg")}}function OS(t){ua.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyTheme",t),Fy(t)}function N(t){return(Yc[la.value]||Yc.es)[t]??Yc.es[t]??t}const tn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Uy=t=>(Vr("data-v-3dbce67b"),t=t(),Mr(),t),VS=["width","height"],MS=Uy(()=>d("path",{d:"M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z",fill:"white","fill-opacity":"0.95"},null,-1)),xS=Uy(()=>d("path",{d:"M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z",style:{fill:"var(--primary)"}},null,-1)),LS=[MS,xS],FS={__name:"Logo",props:{className:{type:String,default:""},size:{type:String,default:"md"},showText:{type:Boolean,default:!1},variant:{type:String,default:"default"},center:{type:Boolean,default:!1}},setup(t){const e=t,r={sm:{badge:"logo-sm",text:"16px",icon:16},md:{badge:"logo-md",text:"20px",icon:20},lg:{badge:"logo-lg",text:"24px",icon:24},xl:{badge:"logo-xl",text:"30px",icon:28}}[e.size],s=e.variant==="white";return(i,o)=>(F(),q("div",{class:pe(["logo",[{center:t.center},t.className]])},[d("div",{class:pe(["logo-badge",[s?"logo-badge-white":"gradient-orange",D(r).badge]])},[(F(),q("svg",{width:D(r).icon,height:D(r).icon,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},LS,8,VS))],2),t.showText?(F(),q("span",{key:0,class:pe(["logo-text",[s?"text-white":"text-dark",D(r).text]])}," Friendzy ",2)):Ie("",!0)],2))}},Gl=tn(FS,[["__scopeId","data-v-3dbce67b"]]),US={},$S={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},BS=d("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"},null,-1),jS=d("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"},null,-1),qS=d("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"},null,-1),HS=d("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"},null,-1),zS=[BS,jS,qS,HS];function WS(t,e){return F(),q("svg",$S,zS)}const KS=tn(US,[["render",WS]]),Rn=t=>(Vr("data-v-56a88cf7"),t=t(),Mr(),t),GS={class:"auth"},QS={class:"auth-left"},YS=Rn(()=>d("div",{class:"auth-grid-white"},null,-1)),JS={class:"auth-left-inner"},XS={class:"auth-left-mid"},ZS=Rn(()=>d("br",null,null,-1)),eC=Rn(()=>d("span",{class:"auth-checkmark"},[d("i",{class:"mdi mdi-check"})],-1)),tC={class:"auth-stats"},nC={class:"auth-right"},rC=Rn(()=>d("div",{class:"auth-right-grid"},null,-1)),sC={class:"auth-form-wrap"},iC={class:"auth-mobile-logo"},oC={class:"auth-card"},aC={class:"auth-card-head"},cC={class:"divider"},lC={class:"fields"},uC={key:0,class:"field"},hC=["placeholder"],dC={class:"field"},fC={class:"field"},mC={key:0,class:"auth-error"},pC=Rn(()=>d("i",{class:"mdi mdi-alert-circle-outline"},null,-1)),gC=["disabled"],_C=Rn(()=>d("i",{class:"mdi mdi-arrow-right"},null,-1)),yC={class:"switch-link"},vC={class:"auth-badges"},wC={class:"auth-badge"},EC=Rn(()=>d("i",{class:"mdi mdi-shield-lock-outline"},null,-1)),IC={class:"auth-badge"},TC=Rn(()=>d("i",{class:"mdi mdi-message-text-clock-outline"},null,-1)),AC={class:"auth-badge"},bC=Rn(()=>d("i",{class:"mdi mdi-web"},null,-1)),RC={__name:"AuthScreen",setup(t){const e=G("login"),n=G(""),r=G(""),s=G(""),i=G(!1),o=G(""),a=["feat1","feat2","feat3"],c=[{value:"10K+",label:"stat_users"},{value:"50K+",label:"stat_msgs"},{value:"99%",label:"stat_uptime"}],l=p=>{e.value=p,o.value=""},u=async()=>{try{const p=new cn;await kT(kt,p)}catch(p){console.log(p)}},h=p=>{switch(p){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return N("err_email_pass");case"auth/email-already-in-use":return N("err_email_used");case"auth/invalid-email":return N("err_invalid_email");case"auth/weak-password":return N("err_weak");case"auth/too-many-requests":return N("err_too_many");default:return`Error: ${p}`}},f=async()=>{if(o.value="",!n.value.trim()||!r.value){o.value=N("err_completa");return}if(r.value.length<6){o.value=N("err_weak");return}i.value=!0;try{if(e.value==="login")await sT(kt,n.value.trim(),r.value);else{const{user:p}=await rT(kt,n.value.trim(),r.value);s.value.trim()&&await Jp(p,{displayName:s.value.trim()})}}catch(p){console.log(p),o.value=h(p.code)}finally{i.value=!1}};return(p,v)=>(F(),q("main",GS,[d("section",QS,[YS,d("div",JS,[ce(Gl,{size:"lg",showText:"",variant:"white"}),d("div",XS,[d("h1",null,[Kt(O(D(N)("conecta_amigos"))+" ",1),ZS,d("span",null,O(D(N)("conecta_inteligente")),1)]),d("p",null,O(D(N)("auth_intro")),1),d("ul",null,[(F(),q(ke,null,an(a,(g,E)=>d("li",{key:g,class:"auth-feature",style:Rs({animationDelay:.3+E*.1+"s"})},[eC,d("span",null,O(D(N)(g)),1)],4)),64))])]),d("div",tC,[(F(),q(ke,null,an(c,g=>d("div",{key:g.label},[d("strong",null,O(g.value),1),d("span",null,O(D(N)(g.label)),1)])),64))])])]),d("section",nC,[rC,d("div",sC,[d("div",iC,[ce(Gl,{size:"xl",showText:"",center:""}),d("p",null,O(D(N)("mobile_tagline")),1)]),d("div",oC,[d("div",aC,[d("h2",null,O(e.value==="login"?D(N)("bienvenido"):D(N)("crea_cuenta")),1),d("p",null,O(e.value==="login"?D(N)("login_sub"):D(N)("reg_sub")),1)]),d("button",{class:"google-btn",type:"button",onClick:u},[ce(KS),d("span",null,O(D(N)("google_in")),1)]),d("div",cC,[d("span",null,O(D(N)("or_email")),1)]),d("div",lC,[e.value==="register"?(F(),q("div",uC,[d("label",null,O(D(N)("nombre")),1),wr(d("input",{"onUpdate:modelValue":v[0]||(v[0]=g=>s.value=g),type:"text",placeholder:D(N)("tu_nombre")},null,8,hC),[[Er,s.value]])])):Ie("",!0),d("div",dC,[d("label",null,O(D(N)("email")),1),wr(d("input",{"onUpdate:modelValue":v[1]||(v[1]=g=>n.value=g),type:"email",placeholder:"tu@email.com"},null,512),[[Er,n.value]])]),d("div",fC,[d("label",null,O(D(N)("contrasena")),1),wr(d("input",{"onUpdate:modelValue":v[2]||(v[2]=g=>r.value=g),type:"password",placeholder:"••••••••",onKeyup:_p(f,["enter"])},null,544),[[Er,r.value]])])]),o.value?(F(),q("div",mC,[pC,d("span",null,O(o.value),1)])):Ie("",!0),d("button",{class:"submit-btn btn-primary",type:"button",disabled:i.value,onClick:f},[d("span",null,O(i.value?D(N)("cargando"):e.value==="login"?D(N)("iniciar_login"):D(N)("crear")),1),_C],8,gC),d("p",yC,[e.value==="login"?(F(),q(ke,{key:0},[Kt(O(D(N)("no_cuenta"))+" ",1),d("a",{href:"#",onClick:v[3]||(v[3]=gn(g=>l("register"),["prevent"]))},O(D(N)("reg_gratis")),1)],64)):(F(),q(ke,{key:1},[Kt(O(D(N)("ya_cuenta"))+" ",1),d("a",{href:"#",onClick:v[4]||(v[4]=gn(g=>l("login"),["prevent"]))},O(D(N)("inicia_sesion")),1)],64))])]),d("div",vC,[d("div",wC,[EC,d("span",null,O(D(N)("badge_seguro")),1)]),d("div",IC,[TC,d("span",null,O(D(N)("badge_tiempo")),1)]),d("div",AC,[bC,d("span",null,O(D(N)("badge_global")),1)])])])])]))}},SC=tn(RC,[["__scopeId","data-v-56a88cf7"]]),CC=(t,e)=>[t,e].sort().join("_"),ls=(t,e)=>t.split("_").find(n=>n!==e);let ln=null,Lf=!1;function $y(){const t=window.AudioContext||window.webkitAudioContext;!t||typeof window>"u"||(ln||(ln=new t),ln.state==="suspended"&&ln.resume().catch(()=>{}))}const PC=()=>{Lf||(Lf=!0,$y())};typeof window<"u"&&["pointerdown","keydown","touchstart"].forEach(t=>window.addEventListener(t,PC,{once:!0}));function Ff(){if($y(),!ln)return;const t=ln.currentTime;[660,880].forEach((e,n)=>{const r=ln.createOscillator(),s=ln.createGain(),i=t+n*.12;r.type="sine",r.frequency.value=e,s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.18,i+.02),s.gain.exponentialRampToValueAtTime(1e-4,i+.35),r.connect(s),s.connect(ln.destination),r.start(i),r.stop(i+.4)})}function kC(){typeof Notification<"u"&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}function Uf(t,e){if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(t,{body:e,icon:"/friendzy/favicon.svg"})}catch{}}const DC={key:0,class:"pa-img"},NC=["src","alt"],OC={__name:"PremiumAvatar",props:{src:{type:String,default:""},name:{type:String,required:!0},size:{type:String,default:"md"},online:{type:Boolean,default:void 0},showRing:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,r={sm:{avatar:"pa-size-sm",text:"pa-text-xs",status:"pa-status-sm"},md:{avatar:"pa-size-md",text:"pa-text-sm",status:"pa-status-md"},lg:{avatar:"pa-size-lg",text:"pa-text-base",status:"pa-status-lg"},xl:{avatar:"pa-size-xl",text:"pa-text-xl",status:"pa-status-xl"}}[e.size],s=["linear-gradient(135deg, #f97316, #f59e0b)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #ea580c, #ef4444)","linear-gradient(135deg, #f43f5e, #f97316)","#111827","linear-gradient(135deg, #fb923c, #eab308)"],o=s[Math.abs((c=>(c||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0))(e.name))%s.length],a=(e.name||"?").split(" ").map(c=>c[0]).slice(0,2).join("").toUpperCase();return(c,l)=>(F(),q("div",{class:pe(["pa-outer",t.className])},[d("div",{class:pe(["pa-ring",t.showRing?"avatar-ring":""])},[d("div",{class:pe(["pa-avatar",[D(r).avatar,"pa-"+t.size]])},[t.src?(F(),q("div",DC,[d("img",{src:t.src,alt:t.name},null,8,NC)])):(F(),q("div",{key:1,class:"pa-initials",style:Rs({background:D(o)})},[d("span",{class:pe(D(r).text)},O(D(a)),3)],4))],2)],2),t.online!==void 0?(F(),q("span",{key:0,class:pe(["pa-status",[D(r).status,t.online?"pa-online":"pa-offline"]])},null,2)):Ie("",!0)],2))}},on=tn(OC,[["__scopeId","data-v-4322e703"]]),Xe=t=>(Vr("data-v-bfc289da"),t=t(),Mr(),t),VC={class:"sidebar"},MC={class:"sb-header"},xC=Xe(()=>d("i",{class:"mdi mdi-close"},null,-1)),LC=[xC],FC={class:"sb-profile-wrap"},UC={class:"sb-profile-info"},$C={class:"sb-profile-name"},BC={class:"sb-profile-email"},jC=Xe(()=>d("i",{class:"mdi mdi-chevron-down sb-profile-caret"},null,-1)),qC={key:0,class:"sb-menu"},HC=Xe(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),zC=Xe(()=>d("i",{class:"mdi mdi-cog-outline"},null,-1)),WC=Xe(()=>d("div",{class:"sb-menu-sep"},null,-1)),KC=Xe(()=>d("i",{class:"mdi mdi-logout"},null,-1)),GC={class:"sb-search-row"},QC={class:"sb-search"},YC=Xe(()=>d("i",{class:"mdi mdi-magnify sb-search-icon"},null,-1)),JC=["placeholder"],XC={key:0,class:"sb-newchat"},ZC={class:"sb-label"},eP=Xe(()=>d("i",{class:"mdi mdi-account-multiple-outline"},null,-1)),tP=["onClick"],nP={class:"sb-user-body"},rP={class:"sb-user-name"},sP={class:"sb-user-email"},iP=["onClick"],oP=["onClick"],aP=Xe(()=>d("i",{class:"mdi mdi-message-outline"},null,-1)),cP={key:0,class:"sb-empty-note"},lP={class:"sb-section"},uP={class:"sb-label"},hP=Xe(()=>d("i",{class:"mdi mdi-bell-outline"},null,-1)),dP={class:"sb-count sb-count-alert"},fP={class:"sb-list sb-friends"},mP={class:"conv-body"},pP={class:"conv-top"},gP={class:"conv-name"},_P={class:"conv-bottom"},yP={class:"conv-preview"},vP=["onClick"],wP=Xe(()=>d("i",{class:"mdi mdi-check"},null,-1)),EP=[wP],IP=["onClick"],TP=Xe(()=>d("i",{class:"mdi mdi-close"},null,-1)),AP=[TP],bP={class:"sb-section"},RP={class:"sb-label"},SP=Xe(()=>d("i",{class:"mdi mdi-heart"},null,-1)),CP={class:"sb-count"},PP={class:"sb-list sb-friends"},kP=["onClick"],DP={class:"conv-body"},NP={class:"conv-top"},OP={class:"conv-name"},VP={class:"conv-bottom"},MP={class:"conv-preview"},xP=["onClick"],LP=Xe(()=>d("i",{class:"mdi mdi-minus"},null,-1)),FP=[LP],UP={class:"sb-section"},$P={class:"sb-label"},BP=Xe(()=>d("i",{class:"mdi mdi-star"},null,-1)),jP={class:"sb-count"},qP={class:"sb-list"},HP=["onClick"],zP={class:"conv-body"},WP={class:"conv-top"},KP={class:"conv-name"},GP=Xe(()=>d("i",{class:"mdi mdi-star conv-star"},null,-1)),QP={class:"conv-bottom"},YP={class:"conv-preview"},JP={class:"sb-section"},XP={class:"sb-label"},ZP=Xe(()=>d("i",{class:"mdi mdi-message-text-outline"},null,-1)),ek={class:"sb-count"},tk={class:"sb-list"},nk=["onClick"],rk={class:"conv-body"},sk={class:"conv-top"},ik={class:"conv-name"},ok={class:"conv-right"},ak={key:0,class:"mdi mdi-star conv-star"},ck={key:1,class:"conv-badge"},lk={key:2,class:"conv-time"},uk={class:"conv-bottom"},hk={class:"conv-preview"},dk={key:0,class:"sb-empty"},fk={class:"sb-empty-sub"},mk={__name:"Conversations",props:{activeId:{type:String,default:""},isMobile:{type:Boolean,default:!1},profile:{type:Object,default:()=>({})},favorites:{type:Array,default:()=>[]}},emits:["open","close","openProfile","openSettings"],setup(t,{emit:e}){const n=e,r=t,s=kt.currentUser,i=G([]),o=G([]),a=G([]),c=G([]),l=G([]),u=G([]),h=G([]),f=G([]),p=G(""),v=G(!1),g=G(!1),E=ye(()=>r.profile.displayName||(s==null?void 0:s.displayName)||(s==null?void 0:s.email)||"Usuario"),P=(s==null?void 0:s.email)||"",j=ye(()=>r.profile.photoURL||(s==null?void 0:s.photoURL)||"");let H=null,L=null,W=null,U=null,Q=null,re=null,Te=null,ge=null,Oe=!1,Ze=!1;const wt={};Xm(()=>{H=sn(ur(Ht(_e,"users")),y=>{i.value=y.docs.map(T=>T.data()).filter(T=>T.uid!==s.uid)},y=>console.error("denied:users",y.code)),L=sn(ur(Ht(_e,"conversations"),rn("participants","array-contains",s.uid)),y=>{var M,J;const T=[],w={};if(y.forEach(Z=>{const ae=Z.data();w[Z.id]=ae,T.push({id:Z.id,...ae})}),T.sort((Z,ae)=>{var we,et,mt,ir;return(((et=(we=ae.lastAt)==null?void 0:we.toMillis)==null?void 0:et.call(we))??0)-(((ir=(mt=Z.lastAt)==null?void 0:mt.toMillis)==null?void 0:ir.call(mt))??0)}),o.value=T,!Oe){Oe=!0,y.forEach(Z=>{var ae,we;wt[Z.id]=((we=(ae=Z.data())==null?void 0:ae.unread)==null?void 0:we[s.uid])||0});return}y.forEach(Z=>{var mt;const ae=Z.data(),we=((mt=ae.unread)==null?void 0:mt[s.uid])||0,et=wt[Z.id]||0;if(wt[Z.id]=we,we>et&&Z.id!==r.activeId){const ir=ls(Z.id,s.uid),nn=i.value.find(ut=>ut.uid===ir),oo=typeof ae.lastMessage=="string"?ae.lastMessage:"📷 Foto";Uf(`${N("mensaje_nuevo")} de ${(nn==null?void 0:nn.displayName)||""}`,oo),Ff()}}),r.activeId&&(((J=(M=w[r.activeId])==null?void 0:M.unread)==null?void 0:J[s.uid])||0)>0&&Nt(r.activeId)},y=>console.error("denied:convs",y.code)),W=sn(Le(_e,"users",s.uid),y=>{var T;a.value=((T=y.data())==null?void 0:T.friends)||[]},y=>console.error("denied:me",y.code)),U=sn(ur(Ht(_e,"requests"),rn("to","==",s.uid),rn("status","==","pending")),y=>{if(c.value=y.docs.map(T=>({id:T.id,...T.data()})),!Ze){Ze=!0;return}y.docChanges().forEach(T=>{if(T.type==="added"){const w=T.doc.data(),M=i.value.find(J=>J.uid===w.from);Uf(N("nueva_solicitud"),`${(M==null?void 0:M.displayName)||"Alguien"} ${N("quieres_chatear")}`),Ff()}})},y=>console.error("denied:incoming",y.code)),Q=sn(ur(Ht(_e,"requests"),rn("from","==",s.uid),rn("status","==","pending")),y=>{l.value=y.docs.map(T=>({id:T.id,...T.data()}))},y=>console.error("denied:sent",y.code)),re=sn(ur(Ht(_e,"requests"),rn("from","==",s.uid),rn("status","==","accepted")),y=>{h.value=y.docs.map(T=>({id:T.id,...T.data()})),ve()},y=>console.error("denied:accOut",y.code)),Te=sn(ur(Ht(_e,"requests"),rn("to","==",s.uid),rn("status","==","accepted")),y=>{u.value=y.docs.map(T=>({id:T.id,...T.data()})),ve()},y=>console.error("denied:accIn",y.code)),ge=y=>{y.target.closest(".sb-profile-wrap")||(v.value=!1),y.target.closest(".sb-search-row")||(g.value=!1)},document.addEventListener("click",ge),setTimeout(()=>kC(),1500)}),Cs(()=>{H==null||H(),L==null||L(),W==null||W(),U==null||U(),Q==null||Q(),re==null||re(),Te==null||Te(),ge&&document.removeEventListener("click",ge)});const Ls=()=>{v.value=!1,n("openProfile")},ro=()=>{v.value=!1,n("openSettings")},Be=y=>r.favorites.includes(y),Ae=ye(()=>o.value.filter(y=>Be(y.id))),ve=()=>{f.value=[...u.value,...h.value]},Nt=y=>{Kl(Le(_e,"conversations",y),{[`unread.${s.uid}`]:0}).catch(()=>{})},Sn=y=>i.value.find(T=>T.uid===y),Et=ye(()=>c.value),It=ye(()=>{const y=new Set(a.value);return f.value.forEach(T=>{y.add(T.from===s.uid?T.to:T.from)}),y}),qr=ye(()=>i.value.filter(y=>It.value.has(y.uid))),_c=ye(()=>new Set(l.value.map(y=>y.to))),Cn=y=>It.value.has(y.uid)?"friend":_c.value.has(y.uid)?"pending":Et.value.some(T=>T.from===y.uid)?"incoming":"none",Ot=y=>N(y==="pending"?"pendiente":y==="incoming"?"aceptar":"solicitar"),Hr=y=>y==="pending"?"mdi-clock-outline":y==="incoming"?"mdi-check":"mdi-account-plus-outline",Fs=y=>{Cn(y)==="friend"&&x(y)},so=y=>{const T=Cn(y);if(T==="incoming"){const w=Et.value.find(M=>M.from===y.uid);w&&Us(w)}else T==="none"&&sr(y)},sr=async y=>{const T=`${s.uid}_${y.uid}`;await Rt(Le(_e,"requests",T),{from:s.uid,to:y.uid,status:"pending",createdAt:My()})},Us=async y=>{const T=Le(_e,"requests",y.id),w=Le(_e,"users",s.uid);await Rt(T,{status:"accepted"},{merge:!0}),await Rt(w,{friends:Tr(y.from)},{merge:!0});const M=i.value.find(J=>J.uid===y.from);await x({uid:y.from,displayName:(M==null?void 0:M.displayName)||y.from,photoURL:(M==null?void 0:M.photoURL)||""})},io=async y=>{await Wc(Le(_e,"requests",y.id))},m=async y=>{const T=Le(_e,"users",s.uid);await Rt(T,{friends:xy(y.uid)},{merge:!0});const w=Le(_e,"requests",`${y.uid}_${s.uid}`),M=await xf(w);M.exists()&&M.data().from===y.uid&&M.data().to===s.uid&&await Wc(w);const J=Le(_e,"requests",`${s.uid}_${y.uid}`);(await xf(J)).exists()&&await Rt(J,{status:"declined"},{merge:!0})},_=y=>{const T=ls(y.id,s.uid),w=i.value.find(M=>M.uid===T);return w?w.displayName:T},I=y=>y.lastMessage?y.lastMessage:N("sin_mensajes"),b=ye(()=>p.value.trim().toLowerCase()),R=ye(()=>b.value?o.value.filter(y=>_(y).toLowerCase().includes(b.value)):o.value),V=ye(()=>{let y=i.value;return b.value&&(y=y.filter(T=>(T.displayName||"").toLowerCase().includes(b.value)||(T.email||"").toLowerCase().includes(b.value))),y}),B=y=>{var M;const T=((M=y==null?void 0:y.toMillis)==null?void 0:M.call(y))??0;if(!T)return"";const w=Math.floor((Date.now()-T)/1e3);return w<60?N("ahora"):w<3600?`${Math.floor(w/60)}m`:w<86400?`${Math.floor(w/3600)}h`:w<604800?`${Math.floor(w/86400)}d`:new Date(T).toLocaleDateString("es-ES",{day:"numeric",month:"short"})},k=y=>{Nt(y.id);const T=i.value.find(w=>w.uid===ls(y.id,s.uid));n("open",{id:y.id,other:{name:_(y),photo:(T==null?void 0:T.photoURL)||""}})},x=async y=>{const T=CC(s.uid,y.uid);g.value=!1;const w=Le(_e,"conversations",T);try{await Rt(w,{participants:Tr(s.uid,y.uid)},{merge:!0})}catch(M){console.error("startWith:conv",M.code,M.message);try{await Wc(w),await Rt(w,{participants:Tr(s.uid,y.uid)},{merge:!0})}catch(J){console.error("startWith:repair",J.code,J.message)}}Nt(T),n("open",{id:T,other:{name:y.displayName,photo:y.photoURL||""}})},C=async()=>{try{await lT(kt)}catch(y){console.log(y)}};return(y,T)=>(F(),q("div",VC,[d("div",MC,[ce(Gl,{size:"md",showText:""}),t.isMobile?(F(),q("button",{key:0,class:"icon-btn",onClick:T[0]||(T[0]=w=>y.$emit("close"))},LC)):Ie("",!0)]),d("div",FC,[d("button",{class:"sb-profile",onClick:T[1]||(T[1]=w=>v.value=!v.value)},[ce(on,{src:j.value,name:E.value,size:"md",online:""},null,8,["src","name"]),d("div",UC,[d("span",$C,O(E.value),1),d("span",BC,O(D(P)),1)]),jC]),v.value?(F(),q("div",qC,[d("button",{class:"sb-menu-item",onClick:Ls},[HC,d("span",null,O(D(N)("mi_perfil")),1)]),d("button",{class:"sb-menu-item",onClick:ro},[zC,d("span",null,O(D(N)("configuracion")),1)]),WC,d("button",{class:"sb-menu-item sb-menu-danger",onClick:C},[KC,d("span",null,O(D(N)("cerrar_sesion")),1)])])):Ie("",!0)]),d("div",GC,[d("div",QC,[YC,wr(d("input",{"onUpdate:modelValue":T[2]||(T[2]=w=>p.value=w),type:"text",placeholder:D(N)("busqueda_ph"),class:"sb-search-input"},null,8,JC),[[Er,p.value]])]),d("button",{class:"icon-btn btn-primary sb-plus",onClick:T[3]||(T[3]=w=>g.value=!g.value)},[d("i",{class:pe(["mdi",g.value?"mdi-close":"mdi-plus"])},null,2)]),g.value?(F(),q("div",XC,[d("div",ZC,[eP,d("span",null,O(D(N)("personas_reg")),1)]),(F(!0),q(ke,null,an(V.value,w=>(F(),q("button",{key:w.uid,class:"sb-user-item",onClick:M=>Fs(w)},[ce(on,{src:w.photoURL||"",name:w.displayName,size:"md",online:!0},null,8,["src","name"]),d("div",nP,[d("span",rP,O(w.displayName),1),d("span",sP,O(w.email),1)]),Cn(w)!=="friend"?(F(),q("span",{key:0,class:pe(["btn-status","btn-"+Cn(w)]),onClick:gn(M=>so(w),["stop"])},[d("i",{class:pe(["mdi",Hr(Cn(w))])},null,2),d("span",null,O(Ot(Cn(w))),1)],10,iP)):(F(),q("span",{key:1,class:"btn-status btn-friend",onClick:gn(M=>x(w),["stop"])},[aP,d("span",null,O(D(N)("chat")),1)],8,oP))],8,tP))),128)),V.value.length===0?(F(),q("p",cP,O(D(N)("no_personas")),1)):Ie("",!0)])):Ie("",!0)]),Et.value.length?(F(),q(ke,{key:0},[d("div",lP,[d("div",uP,[hP,d("span",null,O(D(N)("solicitudes")),1)]),d("span",dP,O(Et.value.length),1)]),d("div",fP,[(F(!0),q(ke,null,an(Et.value,w=>{var M,J,Z;return F(),q("div",{key:w.id,class:"conv-item friend-item"},[ce(on,{src:((M=Sn(w.from))==null?void 0:M.photoURL)||"",name:((J=Sn(w.from))==null?void 0:J.displayName)||w.from,size:"lg",online:""},null,8,["src","name"]),d("div",mP,[d("div",pP,[d("span",gP,O(((Z=Sn(w.from))==null?void 0:Z.displayName)||w.from),1)]),d("div",_P,[d("span",yP,O(D(N)("quiere_chatear")),1)])]),d("button",{class:"req-btn req-ok",title:"Aceptar",onClick:ae=>Us(w)},EP,8,vP),d("button",{class:"req-btn req-no",title:"Rechazar",onClick:ae=>io(w)},AP,8,IP)])}),128))])],64)):Ie("",!0),qr.value.length?(F(),q(ke,{key:1},[d("div",bP,[d("div",RP,[SP,d("span",null,O(D(N)("amigos")),1)]),d("span",CP,O(qr.value.length),1)]),d("div",PP,[(F(!0),q(ke,null,an(qr.value,w=>(F(),q("div",{key:w.uid,class:"conv-item friend-item",onClick:M=>x(w)},[ce(on,{src:w.photoURL||"",name:w.displayName,size:"lg",online:""},null,8,["src","name"]),d("div",DP,[d("div",NP,[d("span",OP,O(w.displayName),1)]),d("div",VP,[d("span",MP,O(D(N)("en_linea")),1)])]),d("button",{class:"friend-remove",onClick:gn(M=>m(w),["stop"])},FP,8,xP)],8,kP))),128))])],64)):Ie("",!0),Ae.value.length?(F(),q(ke,{key:2},[d("div",UP,[d("div",$P,[BP,d("span",null,O(D(N)("favoritos")),1)]),d("span",jP,O(Ae.value.length),1)]),d("div",qP,[(F(!0),q(ke,null,an(Ae.value,w=>(F(),q("button",{key:w.id,class:pe(["conv-item",{active:w.id===t.activeId}]),onClick:M=>k(w)},[ce(on,{name:_(w),size:"lg",online:""},null,8,["name"]),d("div",zP,[d("div",WP,[d("span",KP,O(_(w)),1),GP]),d("div",QP,[d("span",YP,O(I(w)),1)])])],10,HP))),128))])],64)):Ie("",!0),d("div",JP,[d("div",XP,[ZP,d("span",null,O(D(N)("conversaciones")),1)]),d("span",ek,O(R.value.length),1)]),d("div",tk,[(F(!0),q(ke,null,an(R.value,w=>{var M;return F(),q("button",{key:w.id,class:pe(["conv-item",{active:w.id===t.activeId}]),onClick:J=>k(w)},[ce(on,{name:_(w),size:"lg",online:""},null,8,["name"]),d("div",rk,[d("div",sk,[d("span",ik,O(_(w)),1),d("span",ok,[Be(w.id)?(F(),q("i",ak)):Ie("",!0),(((M=w.unread)==null?void 0:M[D(s).uid])||0)>0?(F(),q("span",ck,O(w.unread[D(s).uid]),1)):(F(),q("span",lk,O(B(w.lastAt)),1))])]),d("div",uk,[d("span",hk,O(I(w)),1)])])],10,nk)}),128)),R.value.length===0?(F(),q("div",dk,[d("p",null,O(D(N)("sin_conv")),1),d("p",fk,O(D(N)("sin_conv_sub")),1)])):Ie("",!0)])]))}},$f=tn(mk,[["__scopeId","data-v-bfc289da"]]),pk={class:"mb-max"},gk={key:0,class:"mb-audio"},_k={class:"mb-audio-head"},yk={class:"mb-audio-track"},vk={class:"mb-audio-time"},wk=["src"],Ek={key:1,class:"mb-text"},Ik={key:2,class:"mb-image"},Tk=["src"],Ak={key:0,class:"mdi mdi-check-all mb-check"},bk={__name:"MessageBubble",props:{message:{type:Object,required:!0},isOwn:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},senderName:{type:String,default:""}},setup(t){const e=t,n=G(null),r=G(!1),s=G(0),i=ye(()=>{var h;const u=((h=e.message.time)==null?void 0:h.seconds)??0;return u?new Date(u*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),o=ye(()=>{const u=e.message.duration||0;return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}),a=()=>{const u=n.value;u&&(r.value?u.pause():u.play().catch(()=>{}),r.value=!r.value)},c=()=>{const u=n.value;!u||!u.duration||(s.value=u.currentTime/u.duration*100)},l=()=>{r.value=!1,s.value=0};return(u,h)=>(F(),q("div",{class:pe(["mb-row",t.isOwn?"mb-own":"mb-other"])},[d("div",{class:pe(["mb-avatar",t.showAvatar?"":"mb-avatar-hidden"])},[ce(on,{src:t.avatar||"",name:t.senderName,size:"sm"},null,8,["src","name"])],2),d("div",pk,[d("div",{class:pe(["mb-bubble",t.isOwn?"mb-bubble-own":"mb-bubble-other"])},[t.message.audio?(F(),q("div",gk,[d("div",_k,[d("button",{class:"mb-audio-play",onClick:a},[d("i",{class:pe(["mdi",r.value?"mdi-pause":"mdi-play"])},null,2)]),d("div",yk,[d("div",{class:"mb-audio-fill",style:Rs({width:s.value+"%"})},null,4)]),d("span",vk,O(o.value),1)]),d("audio",{ref_key:"audioRef",ref:n,src:t.message.audio,preload:"metadata",onTimeupdate:c,onEnded:l},null,40,wk)])):t.message.text?(F(),q("p",Ek,O(t.message.text),1)):t.message.image?(F(),q("div",Ik,[d("img",{src:t.message.image,alt:"Compartida"},null,8,Tk)])):Ie("",!0),d("div",{class:pe(["mb-meta",t.isOwn?"mb-meta-own":""])},[d("span",null,O(i.value),1),t.isOwn?(F(),q("i",Ak)):Ie("",!0)],2)],2)])],2))}},Rk=tn(bk,[["__scopeId","data-v-7c9f3cbe"]]),mc=t=>(Vr("data-v-d21376fe"),t=t(),Mr(),t),Sk={class:"chat-input-wrap"},Ck={key:1,class:"ci-attach"},Pk=mc(()=>d("i",{class:"mdi mdi-image-outline"},null,-1)),kk=[Pk],Dk={class:"ci-row"},Nk={class:"ci-input-box"},Ok=["placeholder","onKeydown"],Vk=mc(()=>d("button",{class:"ci-round-btn ci-smile"},[d("i",{class:"mdi mdi-emoticon-outline"})],-1)),Mk=mc(()=>d("i",{class:"mdi mdi-send"},null,-1)),xk=[Mk],Lk={key:2,class:"ci-recording"},Fk=mc(()=>d("span",{class:"ci-rec-dot"},null,-1)),Uk={class:"ci-rec-text"},$k={class:"ci-rec-time"},Bk={key:3,class:"ci-recording"},jk={class:"ci-rec-text"},qk=3e4,Hk={__name:"FormAdd",props:{conversationId:{type:String,required:!0}},setup(t){const e=t,n=G(""),r=G(!1),s=G(!1),i=G(0),o=G(""),a=G(null),c=G(null),l=ye(()=>{const L=Math.floor(i.value/1e3);return`${Math.floor(L/60)}:${String(L%60).padStart(2,"0")}`}),u={media:null,recorder:null,chunks:[],timer:null,startedAt:0,type:"audio/webm"},h=()=>{const L=a.value;L&&(L.style.height="auto",L.style.height=`${Math.min(L.scrollHeight,128)}px`)},f=async()=>{const L=n.value.trim();if(!(!L||!e.conversationId))try{const W=kt.currentUser,U=ls(e.conversationId,W.uid),Q=Le(_e,"conversations",e.conversationId);await Rt(Q,{participants:Tr(W.uid,U)},{merge:!0});const re=Qc(_e),Te=Le(Ht(_e,"conversations",e.conversationId,"messages"));re.set(Te,{text:L,time:Ce.fromDate(new Date),uid:W.uid,displayName:W.displayName}),re.update(Q,{lastMessage:L,lastAt:Ce.fromDate(new Date),[`unread.${U}`]:Gc(1)}),await re.commit(),n.value="",ya(()=>h())}catch(W){console.log(W)}},p=()=>{var L;r.value=!1,(L=c.value)==null||L.click()},v=async L=>{var U;const W=(U=L.target.files)==null?void 0:U[0];if(L.target.value="",!(!W||!e.conversationId))try{const Q=await g(W);if(!Q)return;const re=kt.currentUser,Te=ls(e.conversationId,re.uid),ge=Le(_e,"conversations",e.conversationId);await Rt(ge,{participants:Tr(re.uid,Te)},{merge:!0});const Oe=Qc(_e),Ze=Le(Ht(_e,"conversations",e.conversationId,"messages"));Oe.set(Ze,{image:Q,text:"",time:Ce.fromDate(new Date),uid:re.uid,displayName:re.displayName}),Oe.update(ge,{lastMessage:"📷 Foto",lastAt:Ce.fromDate(new Date),[`unread.${Te}`]:Gc(1)}),await Oe.commit()}catch(Q){console.log(Q)}},g=L=>new Promise(W=>{const U=new FileReader;U.onload=()=>{const Q=new Image;Q.onload=()=>{const Te=Math.min(1,1e3/Math.max(Q.naturalWidth,Q.naturalHeight)),ge=Math.max(1,Math.round(Q.naturalWidth*Te)),Oe=Math.max(1,Math.round(Q.naturalHeight*Te)),Ze=document.createElement("canvas");Ze.width=ge,Ze.height=Oe;const wt=Ze.getContext("2d");if(!wt)return W(U.result);wt.fillStyle="#fff",wt.fillRect(0,0,ge,Oe),wt.drawImage(Q,0,0,ge,Oe),W(Ze.toDataURL("image/jpeg",.75))},Q.onerror=()=>W(null),Q.src=U.result},U.onerror=()=>W(null),U.readAsDataURL(L)}),E=()=>{if(s.value){j();return}P()},P=async()=>{if(e.conversationId)try{const L=await navigator.mediaDevices.getUserMedia({audio:!0}),W=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"",U=new MediaRecorder(L,{...W?{mimeType:W}:{},audioBitsPerSecond:24e3}),Q=[];U.ondataavailable=re=>{re.data&&re.data.size>0&&Q.push(re.data)},U.onstop=()=>{var ge;(ge=u.media)==null||ge.getTracks().forEach(Oe=>Oe.stop());const re=Math.max(1,Math.round((Date.now()-u.startedAt)/1e3)),Te=new Blob(Q,{type:u.type});H(Te,re)},u.media=L,u.recorder=U,u.chunks=Q,u.startedAt=Date.now(),U.start(),u.type=U.mimeType||W||"audio/webm",s.value=!0,i.value=0,u.timer=setInterval(()=>{i.value=Date.now()-u.startedAt,i.value>=qk&&j()},250)}catch(L){console.log(L),s.value=!1}},j=()=>{clearInterval(u.timer),u.timer=null,s.value=!1;try{u.recorder&&u.recorder.state!=="inactive"&&u.recorder.stop()}catch(L){console.log(L)}},H=(L,W)=>{if(!e.conversationId)return;const U=new FileReader;U.onload=async()=>{try{const Q=U.result;if(typeof Q!="string"||Q.length>9e5){o.value=N("nota_larga"),setTimeout(()=>{o.value=""},4e3);return}const re=kt.currentUser,Te=ls(e.conversationId,re.uid),ge=Le(_e,"conversations",e.conversationId);await Rt(ge,{participants:Tr(re.uid,Te)},{merge:!0});const Oe=Qc(_e),Ze=Le(Ht(_e,"conversations",e.conversationId,"messages"));Oe.set(Ze,{audio:Q,duration:W,text:"",time:Ce.fromDate(new Date),uid:re.uid,displayName:re.displayName}),Oe.update(ge,{lastMessage:"🎤 Nota de voz",lastAt:Ce.fromDate(new Date),[`unread.${Te}`]:Gc(1)}),await Oe.commit()}catch(Q){console.log(Q)}},U.readAsDataURL(L)};return Cs(()=>{var L;clearInterval(u.timer),(L=u.media)==null||L.getTracks().forEach(W=>W.stop())}),(L,W)=>(F(),q("div",Sk,[r.value?(F(),q("div",{key:0,class:"ci-backdrop",onClick:W[0]||(W[0]=U=>r.value=!1)})):Ie("",!0),r.value?(F(),q("div",Ck,[d("button",{class:"ci-attach-btn",onClick:p},kk)])):Ie("",!0),d("input",{ref_key:"fileInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:v},null,544),d("div",Dk,[d("button",{class:pe(["ci-round-btn",{active:r.value}]),onClick:W[1]||(W[1]=U=>r.value=!r.value)},[d("i",{class:pe(["mdi",r.value?"mdi-close":"mdi-paperclip"])},null,2)],2),d("div",Nk,[wr(d("textarea",{ref_key:"taRef",ref:a,"onUpdate:modelValue":W[2]||(W[2]=U=>n.value=U),rows:"1",placeholder:D(N)("enviar_ph"),class:"ci-textarea",onInput:h,onKeydown:_p(gn(f,["exact","prevent"]),["enter"])},null,40,Ok),[[Er,n.value]]),Vk]),n.value.trim()?(F(),q("button",{key:0,class:"ci-round-btn btn-primary ci-send",onClick:f},xk)):(F(),q("button",{key:1,class:pe(["ci-round-btn ci-send btn-primary",{recording:s.value}]),onClick:E},[d("i",{class:pe(["mdi",s.value?"mdi-stop":"mdi-microphone"])},null,2)],2))]),s.value?(F(),q("div",Lk,[Fk,d("span",Uk,O(D(N)("grabar")),1),d("span",$k,O(l.value),1)])):Ie("",!0),o.value?(F(),q("div",Bk,[d("span",jk,O(o.value),1)])):Ie("",!0)]))}},zk=tn(Hk,[["__scopeId","data-v-d21376fe"]]),rr=t=>(Vr("data-v-89036623"),t=t(),Mr(),t),Wk={class:"chat-main-wrap"},Kk=rr(()=>d("div",{class:"cm-grid"},null,-1)),Gk={class:"cm-header"},Qk=rr(()=>d("i",{class:"mdi mdi-menu"},null,-1)),Yk=[Qk],Jk={class:"cm-header-info"},Xk=rr(()=>d("span",{class:"cm-status-dot"},null,-1)),Zk={class:"cm-header-actions"},eD={class:"cm-menu"},tD=rr(()=>d("i",{class:"mdi mdi-dots-horizontal"},null,-1)),nD=[tD],rD={key:0,class:"cm-pop"},sD=rr(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),iD=rr(()=>d("i",{class:"mdi mdi-image-multiple-outline"},null,-1)),oD={key:0,class:"cm-empty"},aD=rr(()=>d("i",{class:"mdi mdi-chat-processing-outline cm-empty-icon"},null,-1)),cD={class:"cm-empty-sub"},lD={class:"cm-date-pill"},uD={class:"cm-photos"},hD={class:"cm-photos-head"},dD=rr(()=>d("i",{class:"mdi mdi-close"},null,-1)),fD=[dD],mD={key:0,class:"cm-photos-grid"},pD=["src","onClick"],gD={key:1,class:"cm-photos-empty"},_D=["src"],yD={__name:"Messages",props:{conversationId:{type:String,required:!0},other:{type:Object,default:()=>({})},isFavorite:{type:Boolean,default:!1}},emits:["openDrawer","openProfile","toggleFavorite"],setup(t,{emit:e}){const n=t,r=e,s=G(kt.currentUser),i=ye(()=>{var P;return((P=s.value)==null?void 0:P.photoURL)||""}),o=G([]),a=G(null),c=G(!1),l=G(!1),u=G(""),h=ye(()=>o.value.filter(P=>P.image)),f=()=>{c.value=!1,r("openProfile")},p=()=>{c.value=!1,r("toggleFavorite",n.conversationId)},v=()=>{c.value=!1,l.value=!0};let g=null;return Lt(()=>n.conversationId,P=>{if(g&&(g(),g=null),o.value=[],!P)return;const j=ur(Ht(_e,"conversations",P,"messages"),IS("time"));g=sn(j,H=>{o.value=H.docs.map(L=>({id:L.id,...L.data()})),ya(()=>{var W;const L=(W=a.value)==null?void 0:W.lastElementChild;L&&L.scrollIntoView({behavior:"smooth",block:"end"})})})},{immediate:!0}),Cs(()=>{g==null||g()}),(P,j)=>(F(),q("div",Wk,[Kk,d("header",Gk,[d("button",{class:"icon-btn cm-menu-btn",onClick:j[0]||(j[0]=H=>P.$emit("openDrawer"))},Yk),ce(on,{src:t.other.photo||"",name:t.other.name,size:"md"},null,8,["src","name"]),d("div",Jk,[d("h2",null,O(t.other.name),1),d("p",null,[Xk,Kt(" "+O(D(N)("en_linea")),1)])]),d("div",Zk,[d("div",eD,[d("button",{class:pe(["icon-btn",{active:c.value}]),onClick:j[1]||(j[1]=H=>c.value=!c.value)},nD,2),c.value?(F(),q("div",rD,[d("button",{class:"cm-pop-item",onClick:f},[sD,d("span",null,O(D(N)("mi_perfil")),1)]),d("button",{class:"cm-pop-item",onClick:p},[d("i",{class:pe(["mdi",t.isFavorite?"mdi-star":"mdi-star-outline"])},null,2),d("span",null,O(t.isFavorite?D(N)("quitar_fav"):D(N)("ag_favoritos")),1)]),d("button",{class:"cm-pop-item",onClick:v},[iD,d("span",null,O(D(N)("fotos_compartidas")),1)])])):Ie("",!0)])])]),o.value.length===0?(F(),q("div",oD,[aD,d("p",null,O(D(N)("no_mensajes")),1),d("p",cD,O(D(N)("envia_primero")),1)])):(F(),q("div",{key:1,class:"cm-list",ref_key:"listRef",ref:a},[d("div",lD,O(D(N)("hoy")),1),(F(!0),q(ke,null,an(o.value,(H,L)=>{var W;return F(),fr(Rk,{key:H.id,message:H,"is-own":H.uid===s.value.uid,"show-avatar":L===0||((W=o.value[L-1])==null?void 0:W.uid)!==H.uid,avatar:H.uid===s.value.uid?i.value:t.other.photo,"sender-name":H.uid===s.value.uid?s.value.displayName:t.other.name},null,8,["message","is-own","show-avatar","avatar","sender-name"])}),128))],512)),t.conversationId?(F(),fr(zk,{key:2,"conversation-id":t.conversationId},null,8,["conversation-id"])):Ie("",!0),l.value?(F(),q("div",{key:3,class:"cm-modal",onClick:j[3]||(j[3]=gn(H=>l.value=!1,["self"]))},[d("div",uD,[d("div",hD,[d("h4",null,O(D(N)("fotos_compartidas")),1),d("button",{class:"icon-btn",onClick:j[2]||(j[2]=H=>l.value=!1)},fD)]),h.value.length?(F(),q("div",mD,[(F(!0),q(ke,null,an(h.value,H=>(F(),q("img",{key:H.id,src:H.image,alt:"Foto",onClick:L=>u.value=H.image},null,8,pD))),128))])):(F(),q("p",gD,O(D(N)("sin_fotos")),1))])])):Ie("",!0),u.value?(F(),q("div",{key:4,class:"cm-lightbox",onClick:j[4]||(j[4]=H=>u.value="")},[d("img",{src:u.value,alt:"Foto"},null,8,_D)])):Ie("",!0)]))}},vD=tn(yD,[["__scopeId","data-v-89036623"]]),jr=t=>(Vr("data-v-70fa2247"),t=t(),Mr(),t),wD={class:"modal-card"},ED={class:"modal-head"},ID=jr(()=>d("i",{class:"mdi mdi-close"},null,-1)),TD=[ID],AD={class:"set-row"},bD={class:"set-label"},RD=jr(()=>d("i",{class:"mdi mdi-translate"},null,-1)),SD={class:"set-opts"},CD=jr(()=>d("span",{class:"set-flag"},"🇪🇸",-1)),PD=jr(()=>d("span",{class:"set-flag"},"🇺🇸",-1)),kD={class:"set-row"},DD={class:"set-label"},ND=jr(()=>d("i",{class:"mdi mdi-palette-outline"},null,-1)),OD={class:"set-opts"},VD=jr(()=>d("span",{class:"swatch swatch-orange"},null,-1)),MD=jr(()=>d("span",{class:"swatch swatch-blue"},null,-1)),xD={__name:"SettingsPanel",emits:["close"],setup(t,{emit:e}){const n=e,r=()=>setTimeout(()=>n("close"),350),s=o=>{NS(o),r()},i=o=>{OS(o),r()};return(o,a)=>(F(),q("div",{class:"modal-backdrop",onClick:a[5]||(a[5]=gn(c=>n("close"),["self"]))},[d("div",wD,[d("div",ED,[d("h3",null,O(D(N)("configuracion")),1),d("button",{class:"icon-btn",onClick:a[0]||(a[0]=c=>n("close"))},TD)]),d("div",AD,[d("div",bD,[RD,d("span",null,O(D(N)("idioma")),1)]),d("div",SD,[d("button",{class:pe(["set-opt",{active:D(la)==="es"}]),onClick:a[1]||(a[1]=c=>s("es"))},[CD,Kt(" "+O(D(N)("espanol")),1)],2),d("button",{class:pe(["set-opt",{active:D(la)==="en"}]),onClick:a[2]||(a[2]=c=>s("en"))},[PD,Kt(" "+O(D(N)("english")),1)],2)])]),d("div",kD,[d("div",DD,[ND,d("span",null,O(D(N)("tema")),1)]),d("div",OD,[d("button",{class:pe(["set-opt set-theme",{active:D(ua)==="naranja"}]),onClick:a[3]||(a[3]=c=>i("naranja"))},[VD,Kt(" "+O(D(N)("naranja")),1)],2),d("button",{class:pe(["set-opt set-theme",{active:D(ua)==="azul"}]),onClick:a[4]||(a[4]=c=>i("azul"))},[MD,Kt(" "+O(D(N)("azul")),1)],2)])])])]))}},LD=tn(xD,[["__scopeId","data-v-70fa2247"]]),Rh=t=>(Vr("data-v-3bc49a19"),t=t(),Mr(),t),FD={class:"modal-card"},UD={class:"modal-head"},$D=Rh(()=>d("i",{class:"mdi mdi-close"},null,-1)),BD=[$D],jD={class:"prof-avatar-wrap"},qD=Rh(()=>d("i",{class:"mdi mdi-camera-outline"},null,-1)),HD={class:"field"},zD=["placeholder"],WD={class:"field"},KD=["disabled"],GD={key:0,class:"saved-note"},QD=Rh(()=>d("i",{class:"mdi mdi-check-circle"},null,-1)),YD={__name:"ProfileModal",props:{profile:{type:Object,default:()=>({})}},emits:["close"],setup(t,{emit:e}){const n=t,r=e,s=G(""),i=G(""),o=G(""),a=G(""),c=G(null),l=G(!1),u=G(!1);Lt(()=>n.profile,g=>{!g||typeof g!="object"||(s.value=g.displayName||"",i.value=g.birthday||"",o.value=g.photoURL||"",a.value=g.photoURL||"")},{immediate:!0});const h=()=>{var g;(g=c.value)==null||g.click()},f=async g=>{var j;const E=(j=g.target.files)==null?void 0:j[0];if(g.target.value="",!E)return;const P=await p(E);P&&(o.value=P,a.value=P)},p=g=>new Promise(E=>{const P=new FileReader;P.onload=()=>{const j=new Image;j.onload=()=>{const L=Math.min(1,512/Math.max(j.naturalWidth,j.naturalHeight)),W=Math.max(1,Math.round(j.naturalWidth*L)),U=Math.max(1,Math.round(j.naturalHeight*L)),Q=document.createElement("canvas");Q.width=W,Q.height=U;const re=Q.getContext("2d");if(!re)return E(P.result);re.fillStyle="#fff",re.fillRect(0,0,W,U),re.drawImage(j,0,0,W,U),E(Q.toDataURL("image/jpeg",.8))},j.onerror=()=>E(null),j.src=P.result},P.onerror=()=>E(null),P.readAsDataURL(g)}),v=async()=>{var E;const g=kt.currentUser;if(g){l.value=!0;try{const P={displayName:s.value.trim()||((E=g.email)==null?void 0:E.split("@")[0])||"Usuario",photoURL:o.value||"",birthday:i.value||""};await Rt(Le(_e,"users",g.uid),P,{merge:!0}),await Jp(g,{displayName:P.displayName,photoURL:P.photoURL}).catch(()=>{}),u.value=!0,setTimeout(()=>r("close"),600)}catch(P){console.log(P)}finally{l.value=!1}}};return(g,E)=>(F(),q("div",{class:"modal-backdrop",onClick:E[3]||(E[3]=gn(P=>r("close"),["self"]))},[d("div",FD,[d("div",UD,[d("h3",null,O(D(N)("mi_perfil")),1),d("button",{class:"icon-btn",onClick:E[0]||(E[0]=P=>r("close"))},BD)]),d("div",jD,[ce(on,{src:a.value,name:s.value||"?",size:"xl"},null,8,["src","name"]),d("button",{class:"prof-photo-btn",onClick:h},[qD,d("span",null,O(D(N)("cambiar_foto")),1)]),d("input",{ref_key:"photoInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:f},null,544)]),d("div",HD,[d("label",null,O(D(N)("alias")),1),wr(d("input",{"onUpdate:modelValue":E[1]||(E[1]=P=>s.value=P),type:"text",placeholder:D(N)("alias_ph")},null,8,zD),[[Er,s.value]])]),d("div",WD,[d("label",null,O(D(N)("cumpleanos")),1),wr(d("input",{"onUpdate:modelValue":E[2]||(E[2]=P=>i.value=P),type:"date"},null,512),[[Er,i.value]])]),d("button",{class:"save-btn btn-primary",type:"button",disabled:l.value,onClick:v},[d("span",null,O(l.value?D(N)("cargando"):D(N)("guardar")),1)],8,KD),u.value?(F(),q("p",GD,[QD,Kt(" "+O(D(N)("guardado")),1)])):Ie("",!0)])]))}},JD=tn(YD,[["__scopeId","data-v-3bc49a19"]]),XD={key:0,class:"app-loading"},ZD=d("div",{class:"app-spinner"},null,-1),eN={key:2,class:"app-chat"},tN={class:"side-desktop"},nN={key:1,class:"side-mobile"},rN={key:3,class:"app-placeholder"},sN=d("i",{class:"mdi mdi-account-plus-outline"},null,-1),iN=[sN],oN={class:"app-placeholder-sub"},aN={__name:"App",setup(t){Fy();const e=G(null),n=G(!1),r=G(!1),s=G(null),i=G({}),o=G(!1),a=G(!1);let c=null;const l=({id:p,other:v})=>{s.value={id:p,other:v},r.value=!1},u=ye(()=>i.value.favorites||[]),h=ye(()=>s.value?u.value.includes(s.value.id):!1),f=async p=>{const v=kt.currentUser;if(!v)return;const g=Le(_e,"users",v.uid);try{u.value.includes(p)?await Kl(g,{favorites:xy(p)}):await Kl(g,{favorites:Tr(p)})}catch(E){console.log(E)}};return cT(kt,async p=>{if(e.value=p,n.value=!0,p){try{await Rt(Le(_e,"users",p.uid),{uid:p.uid,displayName:p.displayName||p.email,email:p.email,photoURL:p.photoURL||"",lastSeen:My()},{merge:!0})}catch(v){console.error("Error registrando usuario:",v)}c==null||c(),c=sn(Le(_e,"users",p.uid),v=>{i.value=v.data()||{}},v=>console.error("denied:me",v.code))}else c==null||c(),c=null}),Cs(()=>{c==null||c()}),(p,v)=>(F(),q(ke,null,[n.value?e.value?(F(),q("div",eN,[d("div",tN,[ce($f,{"active-id":s.value?s.value.id:"",profile:i.value,favorites:u.value,onOpen:l,onOpenProfile:v[0]||(v[0]=g=>a.value=!0),onOpenSettings:v[1]||(v[1]=g=>o.value=!0)},null,8,["active-id","profile","favorites"])]),r.value?(F(),q("div",{key:0,class:"overlay",onClick:v[2]||(v[2]=g=>r.value=!1)})):Ie("",!0),r.value?(F(),q("div",nN,[ce($f,{"active-id":s.value?s.value.id:"",profile:i.value,favorites:u.value,"is-mobile":"",onOpen:l,onClose:v[3]||(v[3]=g=>r.value=!1),onOpenProfile:v[4]||(v[4]=g=>a.value=!0),onOpenSettings:v[5]||(v[5]=g=>o.value=!0)},null,8,["active-id","profile","favorites"])])):Ie("",!0),s.value?(F(),fr(vD,{key:2,"conversation-id":s.value.id,other:s.value.other,"is-favorite":h.value,onOpenDrawer:v[6]||(v[6]=g=>r.value=!0),onOpenProfile:v[7]||(v[7]=g=>a.value=!0),onToggleFavorite:f},null,8,["conversation-id","other","is-favorite"])):(F(),q("div",rN,[d("button",{class:"app-placeholder-btn",onClick:v[8]||(v[8]=g=>r.value=!0)},iN),d("p",null,O(D(N)("selecciona")),1),d("p",oN,O(D(N)("para_chatear")),1)]))])):(F(),fr(SC,{key:1})):(F(),q("div",XD,[ZD,d("span",null,O(D(N)("cargando")),1)])),o.value?(F(),fr(LD,{key:3,onClose:v[9]||(v[9]=g=>o.value=!1)})):Ie("",!0),a.value?(F(),fr(JD,{key:4,profile:i.value,onClose:v[10]||(v[10]=g=>a.value=!1)},null,8,["profile"])):Ie("",!0)],64))}};function cN(t,e){let n;function r(){n=pv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}Lt(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),yv(()=>{n==null||n.stop()})}const Yt=typeof window<"u",lN=Yt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function uN(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function Bf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),uN(t,e.split("."),n))}function By(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function jf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Jc(t,e){return e.every(n=>t.hasOwnProperty(n))}function hN(t,e){const n={},r=new Set(Object.keys(t));for(const s of e)r.has(s)&&(n[s]=t[s]);return n}function dN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function qf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Hf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function fN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function In(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(jf(i)&&jf(o)){r[s]=In(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function us(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(us.cache.has(t))return us.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return us.cache.set(t,e),e}us.cache=new Map;const Wr=2.4,zf=.2126729,Wf=.7151522,Kf=.072175,mN=.55,pN=.58,gN=.57,_N=.62,To=.03,Gf=1.45,yN=5e-4,vN=1.25,wN=1.25,Qf=.078,Yf=12.82051282051282,Ao=.06,Jf=.001;function Xf(t,e){const n=(t.r/255)**Wr,r=(t.g/255)**Wr,s=(t.b/255)**Wr,i=(e.r/255)**Wr,o=(e.g/255)**Wr,a=(e.b/255)**Wr;let c=n*zf+r*Wf+s*Kf,l=i*zf+o*Wf+a*Kf;if(c<=To&&(c+=(To-c)**Gf),l<=To&&(l+=(To-l)**Gf),Math.abs(l-c)<yN)return 0;let u;if(l>c){const h=(l**mN-c**pN)*vN;u=h<Jf?0:h<Qf?h-h*Yf*Ao:h-Ao}else{const h=(l**_N-c**gN)*wN;u=h>-Jf?0:h>-Qf?h-h*Yf*Ao:h+Ao}return u*100}const ha=.20689655172413793,EN=t=>t>ha**3?Math.cbrt(t):t/(3*ha**2)+4/29,IN=t=>t>ha?t**3:3*ha**2*(t-4/29);function jy(t){const e=EN,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function qy(t){const e=IN,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const TN=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],AN=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,bN=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],RN=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Hy(t){const e=Array(3),n=AN,r=TN;for(let s=0;s<3;++s)e[s]=Math.round(dN(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Sh(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=RN,o=bN;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}const Zf=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,SN={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>em({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>em({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>Ni({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>Ni({h:t,s:e,v:n,a:r})};function mn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Zf.test(t)){const{groups:e}=t.match(Zf),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return SN[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),PN(e)}else if(typeof t=="object"){if(Jc(t,["r","g","b"]))return t;if(Jc(t,["h","s","l"]))return Ni(zy(t));if(Jc(t,["h","s","v"]))return Ni(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Ni(t){const{h:e,s:n,v:r,a:s}=t,i=a=>{const c=(a+e/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function em(t){return Ni(zy(t))}function zy(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function bo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function CN(t){let{r:e,g:n,b:r,a:s}=t;return`#${[bo(e),bo(n),bo(r),s!==void 0?bo(Math.round(s*255)):""].join("")}`}function PN(t){t=kN(t);let[e,n,r,s]=fN(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function kN(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=qf(qf(t,6),8,"F")),t}function DN(t,e){const n=jy(Sh(t));return n[0]=n[0]+e*10,Hy(qy(n))}function NN(t,e){const n=jy(Sh(t));return n[0]=n[0]-e*10,Hy(qy(n))}function ON(t){const e=mn(t);return Sh(e)[1]}function VN(t){const e=Math.abs(Xf(mn(0),mn(t)));return Math.abs(Xf(mn(16777215),mn(t)))>Math.min(e,50)?"#fff":"#000"}function Wy(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const Oi=Symbol.for("vuetify:defaults");function MN(t){return G(t)}function Ky(){const t=ni(Oi);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function xN(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[us(e)])<"u"}function LN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ky();const r=pc("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=ye(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,l){var h,f,p,v;const u=Reflect.get(c,l);return l==="class"||l==="style"?[(h=s.value)==null?void 0:h[l],u].filter(g=>g!=null):typeof l=="string"&&!xN(r.vnode,l)?((f=s.value)==null?void 0:f[l])??((v=(p=n.value)==null?void 0:p.global)==null?void 0:v[l])??u:u}}),o=ts();lu(()=>{if(s.value){const c=Object.entries(s.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=UN(Oi,r);tp(Oi,ye(()=>o.value?In((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function no(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Wy(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return hN(r,e)},t.props._as=String,t.setup=function(r,s){const i=Ky();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:a}=LN(r,r._as??t.name,i),c=t._setup(o,s);return a(),c}}return t}function FN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?no:uw)(e)}function pc(t,e){const n=Ww();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Gy=0,Uo=new WeakMap;function Qy(){const t=pc("getUid");if(Uo.has(t))return Uo.get(t);{const e=Gy++;return Uo.set(t,e),e}}Qy.reset=()=>{Gy=0,Uo=new WeakMap};function UN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pc("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function $N(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=pc("useProxiedModel"),o=G(t[e]!==void 0?t[e]:n),a=us(e),l=ye(a!==e?()=>{var h,f,p,v;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)||(v=i.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});cN(()=>!l.value,()=>{Lt(()=>t[e],h=>{o.value=h})});const u=ye({get(){const h=t[e];return r(l.value?h:o.value)},set(h){const f=s(h),p=fe(l.value?t[e]:o.value);p===f||r(p)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const BN={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},tm="$vuetify.",nm=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),Yy=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(tm))return nm(r,i);const a=r.replace(tm,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=Bf(c,a,null);return u||(`${r}${t.value}`,u=Bf(l,a,null)),u||(u=r),typeof u!="string"&&(u=r),nm(u,i)};function Jy(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function Xc(t,e,n){const r=$N(t,e,t[e]??n.value);return r.value=t[e]??n.value,Lt(n,s=>{t[e]==null&&(r.value=n.value)}),r}function Xy(t){return e=>{const n=Xc(e,"locale",t.current),r=Xc(e,"fallback",t.fallback),s=Xc(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:Yy(n,r,s),n:Jy(n,r),provide:Xy({current:n,fallback:r,messages:s})}}}function jN(t){const e=ts((t==null?void 0:t.locale)??"en"),n=ts((t==null?void 0:t.fallback)??"en"),r=G({en:BN,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:Yy(e,n,r),n:Jy(e,n),provide:Xy({current:e,fallback:n,messages:r})}}const rm=Symbol.for("vuetify:locale");function qN(t){return t.name!=null}function HN(t){const e=t!=null&&t.adapter&&qN(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:jN(t),n=WN(e,t);return{...e,...n}}function zN(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function WN(t,e){const n=G((e==null?void 0:e.rtl)??zN()),r=ye(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:ye(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}const Vi={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function KN(t,e){const n=[];let r=[];const s=Zy(t),i=ev(t),o=(s.getDay()-Vi[e.slice(-2).toUpperCase()]+7)%7,a=(i.getDay()-Vi[e.slice(-2).toUpperCase()]+7)%7;for(let c=0;c<o;c++){const l=new Date(s);l.setDate(l.getDate()-(o-c)),r.push(l)}for(let c=1;c<=i.getDate();c++){const l=new Date(t.getFullYear(),t.getMonth(),c);r.push(l),r.length===7&&(n.push(r),r=[])}for(let c=1;c<7-a;c++){const l=new Date(i);l.setDate(l.getDate()+c),r.push(l)}return r.length>0&&n.push(r),n}function GN(t,e){const n=new Date(t);for(;n.getDay()!==(Vi[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function QN(t,e){const n=new Date(t),r=((Vi[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function Zy(t){return new Date(t.getFullYear(),t.getMonth(),1)}function ev(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function YN(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const JN=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function tv(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(JN.test(t))return YN(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const sm=new Date(2e3,0,2);function XN(t){const e=Vi[t.slice(-2).toUpperCase()];return By(7).map(n=>{const r=new Date(sm);return r.setDate(sm.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function ZN(t,e,n,r){const s=tv(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=s.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function e2(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Hf(String(n.getMonth()+1),2,"0"),i=Hf(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function t2(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function n2(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function r2(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function s2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function i2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function o2(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function a2(t){return t.getFullYear()}function c2(t){return t.getMonth()}function l2(t){return t.getDate()}function u2(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function h2(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function d2(t){return t.getHours()}function f2(t){return t.getMinutes()}function m2(t){return new Date(t.getFullYear(),0,1)}function p2(t){return new Date(t.getFullYear(),11,31)}function g2(t,e){return da(t,e[0])&&v2(t,e[1])}function _2(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function da(t,e){return t.getTime()>e.getTime()}function y2(t,e){return da(Ql(t),Ql(e))}function v2(t,e){return t.getTime()<e.getTime()}function im(t,e){return t.getTime()===e.getTime()}function w2(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function E2(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function I2(t,e){return t.getFullYear()===e.getFullYear()}function T2(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function A2(t,e){const n=new Date(t);return n.setHours(e),n}function b2(t,e){const n=new Date(t);return n.setMinutes(e),n}function R2(t,e){const n=new Date(t);return n.setMonth(e),n}function S2(t,e){const n=new Date(t);return n.setDate(e),n}function C2(t,e){const n=new Date(t);return n.setFullYear(e),n}function Ql(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function P2(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class k2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return tv(e)}toJsDate(e){return e}toISO(e){return e2(this,e)}parseISO(e){return t2(e)}addMinutes(e,n){return n2(e,n)}addHours(e,n){return r2(e,n)}addDays(e,n){return s2(e,n)}addWeeks(e,n){return i2(e,n)}addMonths(e,n){return o2(e,n)}getWeekArray(e){return KN(e,this.locale)}startOfWeek(e){return GN(e,this.locale)}endOfWeek(e){return QN(e,this.locale)}startOfMonth(e){return Zy(e)}endOfMonth(e){return ev(e)}format(e,n){return ZN(e,n,this.locale,this.formats)}isEqual(e,n){return im(e,n)}isValid(e){return _2(e)}isWithinRange(e,n){return g2(e,n)}isAfter(e,n){return da(e,n)}isAfterDay(e,n){return y2(e,n)}isBefore(e,n){return!da(e,n)&&!im(e,n)}isSameDay(e,n){return w2(e,n)}isSameMonth(e,n){return E2(e,n)}isSameYear(e,n){return I2(e,n)}setMinutes(e,n){return b2(e,n)}setHours(e,n){return A2(e,n)}setMonth(e,n){return R2(e,n)}setDate(e,n){return S2(e,n)}setYear(e,n){return C2(e,n)}getDiff(e,n,r){return T2(e,n,r)}getWeekdays(){return XN(this.locale)}getYear(e){return a2(e)}getMonth(e){return c2(e)}getDate(e){return l2(e)}getNextMonth(e){return u2(e)}getPreviousMonth(e){return h2(e)}getHours(e){return d2(e)}getMinutes(e){return f2(e)}startOfDay(e){return Ql(e)}endOfDay(e){return P2(e)}startOfYear(e){return m2(e)}endOfYear(e){return p2(e)}}const D2=Symbol.for("vuetify:date-options"),om=Symbol.for("vuetify:date-adapter");function N2(t,e){const n=In({adapter:k2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:O2(n,e)}}function O2(t,e){const n=Ss(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Lt(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const am=Symbol.for("vuetify:display"),cm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},V2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cm;return In(cm,t)};function lm(t){return Yt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function um(t){return Yt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function hm(t){const e=Yt&&!t?window.navigator.userAgent:"ssr";function n(v){return!!e.match(v)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),p=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:h,mac:f,linux:p,touch:lN,ssr:e==="ssr"}}function M2(t,e){const{thresholds:n,mobileBreakpoint:r}=V2(t),s=ts(um(e)),i=ts(hm(e)),o=Ss({}),a=ts(lm(e));function c(){s.value=um(),a.value=lm()}function l(){c(),i.value=hm()}return lu(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),p=a.value<n.xl&&!(f||h||u),v=a.value<n.xxl&&!(p||f||h||u),g=a.value>=n.xxl,E=u?"xs":h?"sm":f?"md":p?"lg":v?"xl":"xxl",P=typeof r=="number"?r:n[r],j=a.value<P;o.xs=u,o.sm=h,o.md=f,o.lg=p,o.xl=v,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||p),o.smAndDown=!(f||p||v||g),o.mdAndDown=!(p||v||g),o.lgAndDown=!(v||g),o.xlAndDown=!g,o.name=E,o.height=s.value,o.width=a.value,o.mobile=j,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),Yt&&window.addEventListener("resize",c,{passive:!0}),{...Hv(o),update:l,ssr:!!e}}const x2=Symbol.for("vuetify:goto");function L2(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function F2(t,e){return{rtl:e.isRtl,options:In(L2(),t)}}const U2={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},$2={component:t=>Xw(nv,{...t,class:"mdi"})},B2=[String,Function,Object,Array],dm=Symbol.for("vuetify:icons"),gc=Wy({icon:{type:B2},tag:{type:String,required:!0}},"icon");FN()({name:"VComponentIcon",props:gc(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return ce(t.tag,null,{default:()=>{var s;return[t.icon?ce(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}});const j2=no({name:"VSvgIcon",inheritAttrs:!1,props:gc(),setup(t,e){let{attrs:n}=e;return()=>ce(t.tag,mp(n,{style:null}),{default:()=>[ce("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?ce("path",{d:r[0],"fill-opacity":r[1]},null):ce("path",{d:r},null)):ce("path",{d:t.icon},null)])]})}});no({name:"VLigatureIcon",props:gc(),setup(t){return()=>ce(t.tag,null,{default:()=>[t.icon]})}});const nv=no({name:"VClassIcon",props:gc(),setup(t){return()=>ce(t.tag,{class:t.icon},null)}});function q2(){return{svg:{component:j2},class:{component:nv}}}function H2(t){const e=q2(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=$2),In({defaultSet:n,sets:e,aliases:{...U2,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const fm=Symbol.for("vuetify:theme");function mm(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function z2(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mm();const e=mm();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=In(a,o)}return In(e,{...t,themes:n})}function W2(t){const e=z2(t),n=G(e.defaultTheme),r=G(e.themes),s=ye(()=>{const u={};for(const[h,f]of Object.entries(r.value)){const p=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const v of e.variations.colors){const g=p.colors[v];if(g)for(const E of["lighten","darken"]){const P=E==="lighten"?DN:NN;for(const j of By(e.variations[E],1))p.colors[`${v}-${E}-${j}`]=CN(P(mn(g),j))}}for(const v of Object.keys(p.colors)){if(/^on-[a-z]/.test(v)||p.colors[`on-${v}`])continue;const g=`on-${v}`,E=mn(p.colors[v]);p.colors[g]=VN(E)}}return u}),i=ye(()=>s.value[n.value]),o=ye(()=>{var v;const u=[];(v=i.value)!=null&&v.dark&&cr(u,":root",["color-scheme: dark"]),cr(u,":root",pm(i.value));for(const[g,E]of Object.entries(s.value))cr(u,`.v-theme--${g}`,[`color-scheme: ${E.dark?"dark":"normal"}`,...pm(E)]);const h=[],f=[],p=new Set(Object.values(s.value).flatMap(g=>Object.keys(g.colors)));for(const g of p)/^on-[a-z]/.test(g)?cr(f,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(cr(h,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),cr(f,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),cr(f,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...h,...f),u.map((g,E)=>E===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);Yt&&Lt(o,()=>{f.patch(a)})}else Yt?(h.addHeadObjs(ye(a)),lu(()=>h.updateDOM())):h.addHeadObjs(a());else{let p=function(){if(typeof document<"u"&&!f){const v=document.createElement("style");v.type="text/css",v.id="vuetify-theme-stylesheet",e.cspNonce&&v.setAttribute("nonce",e.cspNonce),f=v,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=Yt?document.getElementById("vuetify-theme-stylesheet"):null;Yt?Lt(o,p,{immediate:!0}):p()}}const l=ye(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:l,styles:o,global:{name:n,current:i}}}function cr(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function pm(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=mn(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${ON(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?mn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}function rv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=In(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=MN(r.defaults),c=M2(r.display,r.ssr),l=W2(r.theme),u=H2(r.icons),h=HN(r.locale),f=N2(r.date,h),p=F2(r.goTo,h);return{install:g=>{for(const E in o)g.directive(E,o[E]);for(const E in i)g.component(E,i[E]);for(const E in s)g.component(E,no({...s[E],name:E,aliasName:s[E].name}));if(l.install(g),g.provide(Oi,a),g.provide(am,c),g.provide(fm,l),g.provide(dm,u),g.provide(rm,h),g.provide(D2,f.options),g.provide(om,f.instance),g.provide(x2,p),Yt&&r.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:E}=g;g.mount=function(){const P=E(...arguments);return ya(()=>c.update()),g.mount=E,P}}Qy.reset(),g.mixin({computed:{$vuetify(){return Ss({defaults:Kr.call(this,Oi),display:Kr.call(this,am),theme:Kr.call(this,fm),icons:Kr.call(this,dm),locale:Kr.call(this,rm),date:Kr.call(this,om)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h,date:f,goTo:p}}const K2="3.6.3";rv.version=K2;function Kr(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const G2=rv({theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FF6A00",secondary:"#F7F7F7",accent:"#FFB27D",error:"#EF4444",info:"#0EA5E9",success:"#22C55E",warning:"#F59E0B",background:"#FFFFFF",surface:"#FFFFFF"}}}}}),Q2="modulepreload",Y2=function(t){return"/friendzy/"+t},gm={},J2=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=Y2(a),a in gm)return;gm[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Q2,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function X2(){(await J2(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Inter:100,300,400,500,600,700,800,900&display=swap"]}})}X2();S0(aN).use(G2).mount("#app");
