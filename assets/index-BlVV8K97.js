(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zl(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const Pe={},nr=[],Ot=()=>{},iv=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),eu=t=>t.startsWith("onUpdate:"),Ke=Object.assign,tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,ge=(t,e)=>ov.call(t,e),te=Array.isArray,sr=t=>ya(t)==="[object Map]",wm=t=>ya(t)==="[object Set]",oe=t=>typeof t=="function",He=t=>typeof t=="string",Vs=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Em=t=>(Me(t)||oe(t))&&oe(t.then)&&oe(t.catch),Im=Object.prototype.toString,ya=t=>Im.call(t),av=t=>ya(t).slice(8,-1),Tm=t=>ya(t)==="[object Object]",nu=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ti=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cv=/-(\w)/g,mr=va(t=>t.replace(cv,(e,n)=>n?n.toUpperCase():"")),lv=/\B([A-Z])/g,Ms=va(t=>t.replace(lv,"-$1").toLowerCase()),Am=va(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ec=va(t=>t?`on${Am(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Oh;const Rm=()=>Oh||(Oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pr(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=He(s)?fv(s):Pr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(He(t)||Me(t))return t}const uv=/;(?![^(]*\))/g,hv=/:([^]+)/,dv=/\/\*[^]*?\*\//g;function fv(t){const e={};return t.replace(dv,"").split(uv).forEach(n=>{if(n){const s=n.split(hv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _e(t){let e="";if(He(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=_e(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pv=Zl(mv);function Sm(t){return!!t||t===""}const k=t=>He(t)?t:t==null?"":te(t)||Me(t)&&(t.toString===Im||!oe(t.toString))?JSON.stringify(t,Cm,2):String(t),Cm=(t,e)=>e&&e.__v_isRef?Cm(t,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ic(s,i)+" =>"]=r,n),{})}:wm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ic(n))}:Vs(e)?Ic(e):Me(e)&&!te(e)&&!Tm(e)?String(e):e,Ic=(t,e="")=>{var n;return Vs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Pm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function gv(t){return new Pm(t)}function _v(t,e=Ct){e&&e.active&&e.effects.push(t)}function yv(){return Ct}function vv(t){Ct&&Ct.cleanups.push(t)}let ws;class su{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,_v(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Xn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(wv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Zn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=$n,n=ws;try{return $n=!0,ws=this,this._runnings++,Vh(this),this.fn()}finally{Mh(this),this._runnings--,ws=n,$n=e}}stop(){this.active&&(Vh(this),Mh(this),this.onStop&&this.onStop(),this.active=!1)}}function wv(t){return t.value}function Vh(t){t._trackId++,t._depsLength=0}function Mh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)km(t.deps[e],t);t.deps.length=t._depsLength}}function km(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let $n=!0,sl=0;const Dm=[];function Xn(){Dm.push($n),$n=!1}function Zn(){const t=Dm.pop();$n=t===void 0?!0:t}function ru(){sl++}function iu(){for(sl--;!sl&&rl.length;)rl.shift()()}function Nm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&km(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const rl=[];function Om(t,e,n){ru();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&rl.push(s.scheduler)))}iu()}const Vm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ho=new WeakMap,Es=Symbol(""),il=Symbol("");function At(t,e,n){if($n&&ws){let s=Ho.get(t);s||Ho.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Vm(()=>s.delete(n))),Nm(ws,r)}}function vn(t,e,n,s,r,i){const o=Ho.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!Vs(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?nu(n)&&a.push(o.get("length")):(a.push(o.get(Es)),sr(t)&&a.push(o.get(il)));break;case"delete":te(t)||(a.push(o.get(Es)),sr(t)&&a.push(o.get(il)));break;case"set":sr(t)&&a.push(o.get(Es));break}ru();for(const c of a)c&&Om(c,4);iu()}function Ev(t,e){const n=Ho.get(t);return n&&n.get(e)}const Iv=Zl("__proto__,__v_isRef,__isVue"),Mm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vs)),xh=Tv();function Tv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=we(this);for(let i=0,o=this.length;i<o;i++)At(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(we)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xn(),ru();const s=we(this)[e].apply(this,n);return iu(),Zn(),s}}),t}function Av(t){Vs(t)||(t=String(t));const e=we(this);return At(e,"has",t),e.hasOwnProperty(t)}class xm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Lv:$m:i?Um:Fm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=te(e);if(!r){if(o&&ge(xh,n))return Reflect.get(xh,n,s);if(n==="hasOwnProperty")return Av}const a=Reflect.get(e,n,s);return(Vs(n)?Mm.has(n):Iv(n))||(r||At(e,"get",n),i)?a:yt(a)?o&&nu(n)?a:a.value:Me(a)?r?Bm(a):kr(a):a}}class Lm extends xm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=fi(i);if(!zo(s)&&!fi(s)&&(i=we(i),s=we(s)),!te(e)&&yt(i)&&!yt(s))return c?!1:(i.value=s,!0)}const o=te(e)&&nu(n)?Number(n)<e.length:ge(e,n),a=Reflect.set(e,n,s,r);return e===we(r)&&(o?Kn(s,i)&&vn(e,"set",n,s):vn(e,"add",n,s)),a}deleteProperty(e,n){const s=ge(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&vn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Vs(n)||!Mm.has(n))&&At(e,"has",n),s}ownKeys(e){return At(e,"iterate",te(e)?"length":Es),Reflect.ownKeys(e)}}class bv extends xm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rv=new Lm,Sv=new bv,Cv=new Lm(!0);const ou=t=>t,wa=t=>Reflect.getPrototypeOf(t);function lo(t,e,n=!1,s=!1){t=t.__v_raw;const r=we(t),i=we(e);n||(Kn(e,i)&&At(r,"get",e),At(r,"get",i));const{has:o}=wa(r),a=s?ou:n?lu:mi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function uo(t,e=!1){const n=this.__v_raw,s=we(n),r=we(t);return e||(Kn(t,r)&&At(s,"has",t),At(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ho(t,e=!1){return t=t.__v_raw,!e&&At(we(t),"iterate",Es),Reflect.get(t,"size",t)}function Lh(t){t=we(t);const e=we(this);return wa(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function Fh(t,e){e=we(e);const n=we(this),{has:s,get:r}=wa(n);let i=s.call(n,t);i||(t=we(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kn(e,o)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function Uh(t){const e=we(this),{has:n,get:s}=wa(e);let r=n.call(e,t);r||(t=we(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&vn(e,"delete",t,void 0),i}function $h(){const t=we(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function fo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=we(o),c=e?ou:t?lu:mi;return!t&&At(a,"iterate",Es),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function mo(t,e,n){return function(...s){const r=this.__v_raw,i=we(r),o=sr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ou:e?lu:mi;return!e&&At(i,"iterate",c?il:Es),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Dn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pv(){const t={get(i){return lo(this,i)},get size(){return ho(this)},has:uo,add:Lh,set:Fh,delete:Uh,clear:$h,forEach:fo(!1,!1)},e={get(i){return lo(this,i,!1,!0)},get size(){return ho(this)},has:uo,add:Lh,set:Fh,delete:Uh,clear:$h,forEach:fo(!1,!0)},n={get(i){return lo(this,i,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:fo(!0,!1)},s={get(i){return lo(this,i,!0,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=mo(i,!1,!1),n[i]=mo(i,!0,!1),e[i]=mo(i,!1,!0),s[i]=mo(i,!0,!0)}),[t,n,e,s]}const[kv,Dv,Nv,Ov]=Pv();function au(t,e){const n=e?t?Ov:Nv:t?Dv:kv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ge(n,r)&&r in s?n:s,r,i)}const Vv={get:au(!1,!1)},Mv={get:au(!1,!0)},xv={get:au(!0,!1)};const Fm=new WeakMap,Um=new WeakMap,$m=new WeakMap,Lv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uv(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(av(t))}function kr(t){return fi(t)?t:cu(t,!1,Rv,Vv,Fm)}function $v(t){return cu(t,!1,Cv,Mv,Um)}function Bm(t){return cu(t,!0,Sv,xv,$m)}function cu(t,e,n,s,r){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Uv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ni(t){return fi(t)?ni(t.__v_raw):!!(t&&t.__v_isReactive)}function fi(t){return!!(t&&t.__v_isReadonly)}function zo(t){return!!(t&&t.__v_isShallow)}function jm(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Bv(t){return Object.isExtensible(t)&&bm(t,"__v_skip",!0),t}const mi=t=>Me(t)?kr(t):t,lu=t=>Me(t)?Bm(t):t;class qm{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new su(()=>e(this._value),()=>Po(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=we(this);return(!e._cacheable||e.effect.dirty)&&Kn(e._value,e._value=e.effect.run())&&Po(e,4),Hm(e),e.effect._dirtyLevel>=2&&Po(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function jv(t,e,n=!1){let s,r;const i=oe(t);return i?(s=t,r=Ot):(s=t.get,r=t.set),new qm(s,r,i||!r,n)}function Hm(t){var e;$n&&ws&&(t=we(t),Nm(ws,(e=t.dep)!=null?e:t.dep=Vm(()=>t.dep=void 0,t instanceof qm?t:void 0)))}function Po(t,e=4,n){t=we(t);const s=t.dep;s&&Om(s,e)}function yt(t){return!!(t&&t.__v_isRef===!0)}function z(t){return zm(t,!1)}function rr(t){return zm(t,!0)}function zm(t,e){return yt(t)?t:new qv(t,e)}class qv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:mi(e)}get value(){return Hm(this),this._value}set value(e){const n=this.__v_isShallow||zo(e)||fi(e);e=n?e:we(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mi(e),Po(this,4))}}function D(t){return yt(t)?t.value:t}const Hv={get:(t,e,n)=>D(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return yt(r)&&!yt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Wm(t){return ni(t)?t:new Proxy(t,Hv)}function zv(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=Kv(t,n);return e}class Wv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(we(this._object),this._key)}}function Kv(t,e,n){const s=t[e];return yt(s)?s:new Wv(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bn(t,e,n,s){try{return s?t(...s):t()}catch(r){Ea(r,e,n)}}function Ut(t,e,n,s){if(oe(t)){const r=Bn(t,e,n,s);return r&&Em(r)&&r.catch(i=>{Ea(i,e,n)}),r}if(te(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ut(t[i],e,n,s));return r}}function Ea(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Xn(),Bn(c,null,10,[t,o,a]),Zn();return}}Gv(t,n,r,s)}function Gv(t,e,n,s=!0){console.error(t)}let pi=!1,ol=!1;const ct=[];let Gt=0;const ir=[];let On=null,fs=0;const Km=Promise.resolve();let uu=null;function Ia(t){const e=uu||Km;return t?e.then(this?t.bind(this):t):e}function Qv(t){let e=Gt+1,n=ct.length;for(;e<n;){const s=e+n>>>1,r=ct[s],i=gi(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function hu(t){(!ct.length||!ct.includes(t,pi&&t.allowRecurse?Gt+1:Gt))&&(t.id==null?ct.push(t):ct.splice(Qv(t.id),0,t),Gm())}function Gm(){!pi&&!ol&&(ol=!0,uu=Km.then(Ym))}function Yv(t){const e=ct.indexOf(t);e>Gt&&ct.splice(e,1)}function Jv(t){te(t)?ir.push(...t):(!On||!On.includes(t,t.allowRecurse?fs+1:fs))&&ir.push(t),Gm()}function Bh(t,e,n=pi?Gt+1:0){for(;n<ct.length;n++){const s=ct[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;ct.splice(n,1),n--,s()}}}function Qm(t){if(ir.length){const e=[...new Set(ir)].sort((n,s)=>gi(n)-gi(s));if(ir.length=0,On){On.push(...e);return}for(On=e,fs=0;fs<On.length;fs++)On[fs]();On=null,fs=0}}const gi=t=>t.id==null?1/0:t.id,Xv=(t,e)=>{const n=gi(t)-gi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ym(t){ol=!1,pi=!0,ct.sort(Xv);try{for(Gt=0;Gt<ct.length;Gt++){const e=ct[Gt];e&&e.active!==!1&&Bn(e,null,14)}}finally{Gt=0,ct.length=0,Qm(),pi=!1,uu=null,(ct.length||ir.length)&&Ym()}}function Zv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Pe;f&&(r=n.map(m=>He(m)?m.trim():m)),h&&(r=n.map(nl))}let a,c=s[a=Ec(e)]||s[a=Ec(mr(e))];!c&&i&&(c=s[a=Ec(Ms(e))]),c&&Ut(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ut(l,t,6,r)}}function Jm(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=Jm(l,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Me(t)&&s.set(t,null),null):(te(i)?i.forEach(c=>o[c]=null):Ke(o,i),Me(t)&&s.set(t,o),o)}function Ta(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Ms(e))||ge(t,e))}let It=null,Aa=null;function Wo(t){const e=It;return It=t,Aa=t&&t.type.__scopeId||null,e}function xs(t){Aa=t}function Ls(){Aa=null}function ew(t,e=It,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Jh(-1);const i=Wo(e);let o;try{o=t(...r)}finally{Wo(i),s._d&&Jh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Tc(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:m,ctx:v,inheritAttrs:g}=t,E=Wo(t);let S,F;try{if(n.shapeFlag&4){const W=r||s,le=W;S=Wt(l.call(le,W,u,h,m,f,v)),F=a}else{const W=e;S=Wt(W.length>1?W(h,{attrs:a,slots:o,emit:c}):W(h,null)),F=e.props?a:tw(a)}}catch(W){oi.length=0,Ea(W,t,1),S=he(Rs)}let U=S;if(F&&g!==!1){const W=Object.keys(F),{shapeFlag:le}=U;W.length&&le&7&&(i&&W.some(eu)&&(F=nw(F,i)),U=pr(U,F,!1,!0))}return n.dirs&&(U=pr(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),S=U,Wo(E),S}const tw=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},nw=(t,e)=>{const n={};for(const s in t)(!eu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function sw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?jh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ta(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?jh(s,o,l):!0:!!o;return!1}function jh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function rw({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const iw=Symbol.for("v-ndc"),ow=t=>t.__isSuspense;function aw(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Jv(t)}const cw=Symbol.for("v-scx"),lw=()=>ii(cw);function du(t,e){return fu(t,null,e)}const po={};function $t(t,e,n){return fu(t,e,n)}function fu(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=Pe){if(e&&i){const G=e;e=(...Te)=>{G(...Te),le()}}const c=lt,l=G=>s===!0?G:ms(G,s===!1?1:void 0);let u,h=!1,f=!1;if(yt(t)?(u=()=>t.value,h=zo(t)):ni(t)?(u=()=>l(t),h=!0):te(t)?(f=!0,h=t.some(G=>ni(G)||zo(G)),u=()=>t.map(G=>{if(yt(G))return G.value;if(ni(G))return l(G);if(oe(G))return Bn(G,c,2)})):oe(t)?e?u=()=>Bn(t,c,2):u=()=>(m&&m(),Ut(t,c,3,[v])):u=Ot,e&&s){const G=u;u=()=>ms(G())}let m,v=G=>{m=U.onStop=()=>{Bn(G,c,4),m=U.onStop=void 0}},g;if(Sa)if(v=Ot,e?n&&Ut(e,c,3,[u(),f?[]:void 0,v]):u(),r==="sync"){const G=lw();g=G.__watcherHandles||(G.__watcherHandles=[])}else return Ot;let E=f?new Array(t.length).fill(po):po;const S=()=>{if(!(!U.active||!U.dirty))if(e){const G=U.run();(s||h||(f?G.some((Te,Ce)=>Kn(Te,E[Ce])):Kn(G,E)))&&(m&&m(),Ut(e,c,3,[G,E===po?void 0:f&&E[0]===po?[]:E,v]),E=G)}else U.run()};S.allowRecurse=!!e;let F;r==="sync"?F=S:r==="post"?F=()=>wt(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),F=()=>hu(S));const U=new su(u,Ot,F),W=yv(),le=()=>{U.stop(),W&&tu(W.effects,U)};return e?n?S():E=U.run():r==="post"?wt(U.run.bind(U),c&&c.suspense):U.run(),g&&g.push(le),le}function uw(t,e,n){const s=this.proxy,r=He(t)?t.includes(".")?Xm(s,t):()=>s[t]:t.bind(s,s);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Fi(this),a=fu(r,i.bind(s),n);return o(),a}function Xm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ms(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))ms(t.value,e,n);else if(te(t))for(let s=0;s<t.length;s++)ms(t[s],e,n);else if(wm(t)||sr(t))t.forEach(s=>{ms(s,e,n)});else if(Tm(t))for(const s in t)ms(t[s],e,n);return t}function Is(t,e){if(It===null)return t;const n=Ca(It)||It.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Pe]=e[r];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&ms(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function cs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Xn(),Ut(c,n,8,[t.el,a,t,e]),Zn())}}/*! #__NO_SIDE_EFFECTS__ */function hw(t,e){return oe(t)?Ke({name:t.name},e,{setup:t}):t}const ko=t=>!!t.type.__asyncLoader,Zm=t=>t.type.__isKeepAlive;function dw(t,e){ep(t,"a",e)}function fw(t,e){ep(t,"da",e)}function ep(t,e,n=lt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Zm(r.parent.vnode)&&mw(s,e,n,r),r=r.parent}}function mw(t,e,n,s){const r=ba(e,t,s,!0);Dr(()=>{tu(s[e],r)},n)}function ba(t,e,n=lt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xn();const a=Fi(n),c=Ut(e,n,t,o);return a(),Zn(),c});return s?r.unshift(i):r.push(i),i}}const Rn=t=>(e,n=lt)=>(!Sa||t==="sp")&&ba(t,(...s)=>e(...s),n),pw=Rn("bm"),tp=Rn("m"),gw=Rn("bu"),_w=Rn("u"),yw=Rn("bum"),Dr=Rn("um"),vw=Rn("sp"),ww=Rn("rtg"),Ew=Rn("rtc");function Iw(t,e=lt){ba("ec",t,e)}function Qt(t,e,n,s){let r;const i=n;if(te(t)||He(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i)}else if(Me(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i)}}else r=[];return r}const al=t=>t?yp(t)?Ca(t)||t.proxy:al(t.parent):null,si=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>mu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,hu(t.update)}),$nextTick:t=>t.n||(t.n=Ia.bind(t.proxy)),$watch:t=>uw.bind(t)}),Ac=(t,e)=>t!==Pe&&!t.__isScriptSetup&&ge(t,e),Tw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ac(s,e))return o[e]=1,s[e];if(r!==Pe&&ge(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,i[e];if(n!==Pe&&ge(n,e))return o[e]=4,n[e];cl&&(o[e]=0)}}const u=si[e];let h,f;if(u)return e==="$attrs"&&At(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&ge(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ge(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ac(r,e)?(r[e]=n,!0):s!==Pe&&ge(s,e)?(s[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Pe&&ge(t,o)||Ac(e,o)||(a=i[0])&&ge(a,o)||ge(s,o)||ge(si,o)||ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qh(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cl=!0;function Aw(t){const e=mu(t),n=t.proxy,s=t.ctx;cl=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:v,activated:g,deactivated:E,beforeDestroy:S,beforeUnmount:F,destroyed:U,unmounted:W,render:le,renderTracked:G,renderTriggered:Te,errorCaptured:Ce,serverPrefetch:Ye,expose:qe,inheritAttrs:J,components:Q,directives:Z,filters:de}=e;if(l&&bw(l,s,null),o)for(const ae in o){const ce=o[ae];oe(ce)&&(s[ae]=ce.bind(n))}if(r){const ae=r.call(n,n);Me(ae)&&(t.data=kr(ae))}if(cl=!0,i)for(const ae in i){const ce=i[ae],ze=oe(ce)?ce.bind(n,n):oe(ce.get)?ce.get.bind(n,n):Ot,bt=!oe(ce)&&oe(ce.set)?ce.set.bind(n):Ot,Rt=ve({get:ze,set:bt});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:St=>Rt.value=St})}if(a)for(const ae in a)np(a[ae],s,n,ae);if(c){const ae=oe(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(ce=>{rp(ce,ae[ce])})}u&&Hh(u,t,"c");function ye(ae,ce){te(ce)?ce.forEach(ze=>ae(ze.bind(n))):ce&&ae(ce.bind(n))}if(ye(pw,h),ye(tp,f),ye(gw,m),ye(_w,v),ye(dw,g),ye(fw,E),ye(Iw,Ce),ye(Ew,G),ye(ww,Te),ye(yw,F),ye(Dr,W),ye(vw,Ye),te(qe))if(qe.length){const ae=t.exposed||(t.exposed={});qe.forEach(ce=>{Object.defineProperty(ae,ce,{get:()=>n[ce],set:ze=>n[ce]=ze})})}else t.exposed||(t.exposed={});le&&t.render===Ot&&(t.render=le),J!=null&&(t.inheritAttrs=J),Q&&(t.components=Q),Z&&(t.directives=Z)}function bw(t,e,n=Ot){te(t)&&(t=ll(t));for(const s in t){const r=t[s];let i;Me(r)?"default"in r?i=ii(r.from||s,r.default,!0):i=ii(r.from||s):i=ii(r),yt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Hh(t,e,n){Ut(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,s){const r=s.includes(".")?Xm(n,s):()=>n[s];if(He(t)){const i=e[t];oe(i)&&$t(r,i)}else if(oe(t))$t(r,t.bind(n));else if(Me(t))if(te(t))t.forEach(i=>np(i,e,n,s));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&$t(r,i,t)}}function mu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ko(c,l,o,!0)),Ko(c,e,o)),Me(e)&&i.set(e,c),c}function Ko(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ko(t,i,n,!0),r&&r.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Rw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rw={data:zh,props:Wh,emits:Wh,methods:Kr,computed:Kr,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Kr,directives:Kr,watch:Cw,provide:zh,inject:Sw};function zh(t,e){return e?t?function(){return Ke(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function Sw(t,e){return Kr(ll(t),ll(e))}function ll(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Kr(t,e){return t?Ke(Object.create(null),t,e):e}function Wh(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Ke(Object.create(null),qh(t),qh(e??{})):e}function Cw(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=gt(t[s],e[s]);return n}function sp(){return{app:null,config:{isNativeTag:iv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pw=0;function kw(t,e){return function(s,r=null){oe(s)||(s=Ke({},s)),r!=null&&!Me(r)&&(r=null);const i=sp(),o=new WeakSet;let a=!1;const c=i.app={_uid:Pw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:e0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=he(s,r);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ca(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=ri;ri=c;try{return l()}finally{ri=u}}};return c}}let ri=null;function rp(t,e){if(lt){let n=lt.provides;const s=lt.parent&&lt.parent.provides;s===n&&(n=lt.provides=Object.create(s)),n[t]=e}}function ii(t,e,n=!1){const s=lt||It;if(s||ri){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ri._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&oe(e)?e.call(s&&s.proxy):e}}const ip={},op=()=>Object.create(ip),ap=t=>Object.getPrototypeOf(t)===ip;function Dw(t,e,n,s=!1){const r={},i=op();t.propsDefaults=Object.create(null),cp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:$v(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Nw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=we(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ta(t.emitsOptions,f))continue;const m=e[f];if(c)if(ge(i,f))m!==i[f]&&(i[f]=m,l=!0);else{const v=mr(f);r[v]=ul(c,a,v,m,t,!1)}else m!==i[f]&&(i[f]=m,l=!0)}}}else{cp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=Ms(h))===h||!ge(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ul(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],l=!0)}l&&vn(t.attrs,"set","")}function cp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ti(c))continue;const l=e[c];let u;r&&ge(r,u=mr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ta(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=we(n),l=a||Pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ul(r,c,h,l[h],t,!ge(l,h))}}return o}function ul(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&oe(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=Fi(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ms(n))&&(s=!0))}return s}function lp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=h=>{c=!0;const[f,m]=lp(h,e,!0);Ke(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Me(t)&&s.set(t,nr),nr;if(te(i))for(let u=0;u<i.length;u++){const h=mr(i[u]);Kh(h)&&(o[h]=Pe)}else if(i)for(const u in i){const h=mr(u);if(Kh(h)){const f=i[u],m=o[h]=te(f)||oe(f)?{type:f}:Ke({},f);if(m){const v=Yh(Boolean,m.type),g=Yh(String,m.type);m[0]=v>-1,m[1]=g<0||v<g,(v>-1||ge(m,"default"))&&a.push(h)}}}const l=[o,a];return Me(t)&&s.set(t,l),l}function Kh(t){return t[0]!=="$"&&!ti(t)}function Gh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Qh(t,e){return Gh(t)===Gh(e)}function Yh(t,e){return te(e)?e.findIndex(n=>Qh(n,t)):oe(e)&&Qh(e,t)?0:-1}const up=t=>t[0]==="_"||t==="$stable",pu=t=>te(t)?t.map(Wt):[Wt(t)],Ow=(t,e,n)=>{if(e._n)return e;const s=ew((...r)=>pu(e(...r)),n);return s._c=!1,s},hp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(up(r))continue;const i=t[r];if(oe(i))e[r]=Ow(r,i,s);else if(i!=null){const o=pu(i);e[r]=()=>o}}},dp=(t,e)=>{const n=pu(e);t.slots.default=()=>n},Vw=(t,e)=>{const n=t.slots=op();if(t.vnode.shapeFlag&32){const s=e._;s?(Ke(n,e),bm(n,"_",s,!0)):hp(e,n)}else e&&dp(t,e)},Mw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,hp(e,r)),o=e}else e&&(dp(t,e),o={default:1});if(i)for(const a in r)!up(a)&&o[a]==null&&delete r[a]};function hl(t,e,n,s,r=!1){if(te(t)){t.forEach((f,m)=>hl(f,e&&(te(e)?e[m]:e),n,s,r));return}if(ko(s)&&!r)return;const i=s.shapeFlag&4?Ca(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,ge(h,l)&&(h[l]=null)):yt(l)&&(l.value=null)),oe(c))Bn(c,a,12,[o,u]);else{const f=He(c),m=yt(c);if(f||m){const v=()=>{if(t.f){const g=f?ge(h,c)?h[c]:u[c]:c.value;r?te(g)&&tu(g,i):te(g)?g.includes(i)||g.push(i):f?(u[c]=[i],ge(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ge(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,wt(v,n)):v()}}}const wt=aw;function xw(t){return Lw(t)}function Lw(t,e){const n=Rm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Ot,insertStaticContent:v}=t,g=(p,_,I,b=null,R=null,V=null,j=void 0,O=null,x=!!_.dynamicChildren)=>{if(p===_)return;p&&!qr(p,_)&&(b=Ws(p),St(p,R,V,!0),p=null),_.patchFlag===-2&&(x=!1,_.dynamicChildren=null);const{type:P,ref:y,shapeFlag:T}=_;switch(P){case Ra:E(p,_,I,b);break;case Rs:S(p,_,I,b);break;case Rc:p==null&&F(_,I,b,j);break;case ke:Q(p,_,I,b,R,V,j,O,x);break;default:T&1?le(p,_,I,b,R,V,j,O,x):T&6?Z(p,_,I,b,R,V,j,O,x):(T&64||T&128)&&P.process(p,_,I,b,R,V,j,O,x,os)}y!=null&&R&&hl(y,p&&p.ref,V,_||p,!_)},E=(p,_,I,b)=>{if(p==null)s(_.el=a(_.children),I,b);else{const R=_.el=p.el;_.children!==p.children&&l(R,_.children)}},S=(p,_,I,b)=>{p==null?s(_.el=c(_.children||""),I,b):_.el=p.el},F=(p,_,I,b)=>{[p.el,p.anchor]=v(p.children,_,I,b,p.el,p.anchor)},U=({el:p,anchor:_},I,b)=>{let R;for(;p&&p!==_;)R=f(p),s(p,I,b),p=R;s(_,I,b)},W=({el:p,anchor:_})=>{let I;for(;p&&p!==_;)I=f(p),r(p),p=I;r(_)},le=(p,_,I,b,R,V,j,O,x)=>{_.type==="svg"?j="svg":_.type==="math"&&(j="mathml"),p==null?G(_,I,b,R,V,j,O,x):Ye(p,_,R,V,j,O,x)},G=(p,_,I,b,R,V,j,O)=>{let x,P;const{props:y,shapeFlag:T,transition:w,dirs:M}=p;if(x=p.el=o(p.type,V,y&&y.is,y),T&8?u(x,p.children):T&16&&Ce(p.children,x,null,b,R,bc(p,V),j,O),M&&cs(p,null,b,"created"),Te(x,p,p.scopeId,j,b),y){for(const ee in y)ee!=="value"&&!ti(ee)&&i(x,ee,null,y[ee],V,p.children,b,R,xt);"value"in y&&i(x,"value",null,y.value,V),(P=y.onVnodeBeforeMount)&&zt(P,b,p)}M&&cs(p,null,b,"beforeMount");const Y=Fw(R,w);Y&&w.beforeEnter(x),s(x,_,I),((P=y&&y.onVnodeMounted)||Y||M)&&wt(()=>{P&&zt(P,b,p),Y&&w.enter(x),M&&cs(p,null,b,"mounted")},R)},Te=(p,_,I,b,R)=>{if(I&&m(p,I),b)for(let V=0;V<b.length;V++)m(p,b[V]);if(R){let V=R.subTree;if(_===V){const j=R.vnode;Te(p,j,j.scopeId,j.slotScopeIds,R.parent)}}},Ce=(p,_,I,b,R,V,j,O,x=0)=>{for(let P=x;P<p.length;P++){const y=p[P]=O?Vn(p[P]):Wt(p[P]);g(null,y,_,I,b,R,V,j,O)}},Ye=(p,_,I,b,R,V,j)=>{const O=_.el=p.el;let{patchFlag:x,dynamicChildren:P,dirs:y}=_;x|=p.patchFlag&16;const T=p.props||Pe,w=_.props||Pe;let M;if(I&&ls(I,!1),(M=w.onVnodeBeforeUpdate)&&zt(M,I,_,p),y&&cs(_,p,I,"beforeUpdate"),I&&ls(I,!0),P?qe(p.dynamicChildren,P,O,I,b,bc(_,R),V):j||ce(p,_,O,null,I,b,bc(_,R),V,!1),x>0){if(x&16)J(O,_,T,w,I,b,R);else if(x&2&&T.class!==w.class&&i(O,"class",null,w.class,R),x&4&&i(O,"style",T.style,w.style,R),x&8){const Y=_.dynamicProps;for(let ee=0;ee<Y.length;ee++){const ue=Y[ee],Ae=T[ue],rt=w[ue];(rt!==Ae||ue==="value")&&i(O,ue,Ae,rt,R,p.children,I,b,xt)}}x&1&&p.children!==_.children&&u(O,_.children)}else!j&&P==null&&J(O,_,T,w,I,b,R);((M=w.onVnodeUpdated)||y)&&wt(()=>{M&&zt(M,I,_,p),y&&cs(_,p,I,"updated")},b)},qe=(p,_,I,b,R,V,j)=>{for(let O=0;O<_.length;O++){const x=p[O],P=_[O],y=x.el&&(x.type===ke||!qr(x,P)||x.shapeFlag&70)?h(x.el):I;g(x,P,y,null,b,R,V,j,!0)}},J=(p,_,I,b,R,V,j)=>{if(I!==b){if(I!==Pe)for(const O in I)!ti(O)&&!(O in b)&&i(p,O,I[O],null,j,_.children,R,V,xt);for(const O in b){if(ti(O))continue;const x=b[O],P=I[O];x!==P&&O!=="value"&&i(p,O,P,x,j,_.children,R,V,xt)}"value"in b&&i(p,"value",I.value,b.value,j)}},Q=(p,_,I,b,R,V,j,O,x)=>{const P=_.el=p?p.el:a(""),y=_.anchor=p?p.anchor:a("");let{patchFlag:T,dynamicChildren:w,slotScopeIds:M}=_;M&&(O=O?O.concat(M):M),p==null?(s(P,I,b),s(y,I,b),Ce(_.children||[],I,y,R,V,j,O,x)):T>0&&T&64&&w&&p.dynamicChildren?(qe(p.dynamicChildren,w,I,R,V,j,O),(_.key!=null||R&&_===R.subTree)&&fp(p,_,!0)):ce(p,_,I,y,R,V,j,O,x)},Z=(p,_,I,b,R,V,j,O,x)=>{_.slotScopeIds=O,p==null?_.shapeFlag&512?R.ctx.activate(_,I,b,j,x):de(_,I,b,R,V,j,x):Ve(p,_,x)},de=(p,_,I,b,R,V,j)=>{const O=p.component=Ww(p,b,R);if(Zm(p)&&(O.ctx.renderer=os),Gw(O),O.asyncDep){if(R&&R.registerDep(O,ye),!p.el){const x=O.subTree=he(Rs);S(null,x,_,I)}}else ye(O,p,_,I,R,V,j)},Ve=(p,_,I)=>{const b=_.component=p.component;if(sw(p,_,I))if(b.asyncDep&&!b.asyncResolved){ae(b,_,I);return}else b.next=_,Yv(b.update),b.effect.dirty=!0,b.update();else _.el=p.el,b.vnode=_},ye=(p,_,I,b,R,V,j)=>{const O=()=>{if(p.isMounted){let{next:y,bu:T,u:w,parent:M,vnode:Y}=p;{const vt=mp(p);if(vt){y&&(y.el=Y.el,ae(p,y,j)),vt.asyncDep.then(()=>{p.isUnmounted||O()});return}}let ee=y,ue;ls(p,!1),y?(y.el=Y.el,ae(p,y,j)):y=Y,T&&Co(T),(ue=y.props&&y.props.onVnodeBeforeUpdate)&&zt(ue,M,y,Y),ls(p,!0);const Ae=Tc(p),rt=p.subTree;p.subTree=Ae,g(rt,Ae,h(rt.el),Ws(rt),p,R,V),y.el=Ae.el,ee===null&&rw(p,Ae.el),w&&wt(w,R),(ue=y.props&&y.props.onVnodeUpdated)&&wt(()=>zt(ue,M,y,Y),R)}else{let y;const{el:T,props:w}=_,{bm:M,m:Y,parent:ee}=p,ue=ko(_);if(ls(p,!1),M&&Co(M),!ue&&(y=w&&w.onVnodeBeforeMount)&&zt(y,ee,_),ls(p,!0),T&&ao){const Ae=()=>{p.subTree=Tc(p),ao(T,p.subTree,p,R,null)};ue?_.type.__asyncLoader().then(()=>!p.isUnmounted&&Ae()):Ae()}else{const Ae=p.subTree=Tc(p);g(null,Ae,I,b,p,R,V),_.el=Ae.el}if(Y&&wt(Y,R),!ue&&(y=w&&w.onVnodeMounted)){const Ae=_;wt(()=>zt(y,ee,Ae),R)}(_.shapeFlag&256||ee&&ko(ee.vnode)&&ee.vnode.shapeFlag&256)&&p.a&&wt(p.a,R),p.isMounted=!0,_=I=b=null}},x=p.effect=new su(O,Ot,()=>hu(P),p.scope),P=p.update=()=>{x.dirty&&x.run()};P.id=p.uid,ls(p,!0),P()},ae=(p,_,I)=>{_.component=p;const b=p.vnode.props;p.vnode=_,p.next=null,Nw(p,_.props,b,I),Mw(p,_.children,I),Xn(),Bh(p),Zn()},ce=(p,_,I,b,R,V,j,O,x=!1)=>{const P=p&&p.children,y=p?p.shapeFlag:0,T=_.children,{patchFlag:w,shapeFlag:M}=_;if(w>0){if(w&128){bt(P,T,I,b,R,V,j,O,x);return}else if(w&256){ze(P,T,I,b,R,V,j,O,x);return}}M&8?(y&16&&xt(P,R,V),T!==P&&u(I,T)):y&16?M&16?bt(P,T,I,b,R,V,j,O,x):xt(P,R,V,!0):(y&8&&u(I,""),M&16&&Ce(T,I,b,R,V,j,O,x))},ze=(p,_,I,b,R,V,j,O,x)=>{p=p||nr,_=_||nr;const P=p.length,y=_.length,T=Math.min(P,y);let w;for(w=0;w<T;w++){const M=_[w]=x?Vn(_[w]):Wt(_[w]);g(p[w],M,I,null,R,V,j,O,x)}P>y?xt(p,R,V,!0,!1,T):Ce(_,I,b,R,V,j,O,x,T)},bt=(p,_,I,b,R,V,j,O,x)=>{let P=0;const y=_.length;let T=p.length-1,w=y-1;for(;P<=T&&P<=w;){const M=p[P],Y=_[P]=x?Vn(_[P]):Wt(_[P]);if(qr(M,Y))g(M,Y,I,null,R,V,j,O,x);else break;P++}for(;P<=T&&P<=w;){const M=p[T],Y=_[w]=x?Vn(_[w]):Wt(_[w]);if(qr(M,Y))g(M,Y,I,null,R,V,j,O,x);else break;T--,w--}if(P>T){if(P<=w){const M=w+1,Y=M<y?_[M].el:b;for(;P<=w;)g(null,_[P]=x?Vn(_[P]):Wt(_[P]),I,Y,R,V,j,O,x),P++}}else if(P>w)for(;P<=T;)St(p[P],R,V,!0),P++;else{const M=P,Y=P,ee=new Map;for(P=Y;P<=w;P++){const pt=_[P]=x?Vn(_[P]):Wt(_[P]);pt.key!=null&&ee.set(pt.key,P)}let ue,Ae=0;const rt=w-Y+1;let vt=!1,as=0;const cn=new Array(rt);for(P=0;P<rt;P++)cn[P]=0;for(P=M;P<=T;P++){const pt=p[P];if(Ae>=rt){St(pt,R,V,!0);continue}let Ht;if(pt.key!=null)Ht=ee.get(pt.key);else for(ue=Y;ue<=w;ue++)if(cn[ue-Y]===0&&qr(pt,_[ue])){Ht=ue;break}Ht===void 0?St(pt,R,V,!0):(cn[Ht-Y]=P+1,Ht>=as?as=Ht:vt=!0,g(pt,_[Ht],I,null,R,V,j,O,x),Ae++)}const co=vt?Uw(cn):nr;for(ue=co.length-1,P=rt-1;P>=0;P--){const pt=Y+P,Ht=_[pt],Nh=pt+1<y?_[pt+1].el:b;cn[P]===0?g(null,Ht,I,Nh,R,V,j,O,x):vt&&(ue<0||P!==co[ue]?Rt(Ht,I,Nh,2):ue--)}}},Rt=(p,_,I,b,R=null)=>{const{el:V,type:j,transition:O,children:x,shapeFlag:P}=p;if(P&6){Rt(p.component.subTree,_,I,b);return}if(P&128){p.suspense.move(_,I,b);return}if(P&64){j.move(p,_,I,os);return}if(j===ke){s(V,_,I);for(let T=0;T<x.length;T++)Rt(x[T],_,I,b);s(p.anchor,_,I);return}if(j===Rc){U(p,_,I);return}if(b!==2&&P&1&&O)if(b===0)O.beforeEnter(V),s(V,_,I),wt(()=>O.enter(V),R);else{const{leave:T,delayLeave:w,afterLeave:M}=O,Y=()=>s(V,_,I),ee=()=>{T(V,()=>{Y(),M&&M()})};w?w(V,Y,ee):ee()}else s(V,_,I)},St=(p,_,I,b=!1,R=!1)=>{const{type:V,props:j,ref:O,children:x,dynamicChildren:P,shapeFlag:y,patchFlag:T,dirs:w}=p;if(O!=null&&hl(O,null,I,p,!0),y&256){_.ctx.deactivate(p);return}const M=y&1&&w,Y=!ko(p);let ee;if(Y&&(ee=j&&j.onVnodeBeforeUnmount)&&zt(ee,_,p),y&6)kn(p.component,I,b);else{if(y&128){p.suspense.unmount(I,b);return}M&&cs(p,null,_,"beforeUnmount"),y&64?p.type.remove(p,_,I,R,os,b):P&&(V!==ke||T>0&&T&64)?xt(P,_,I,!1,!0):(V===ke&&T&384||!R&&y&16)&&xt(x,_,I),b&&zs(p)}(Y&&(ee=j&&j.onVnodeUnmounted)||M)&&wt(()=>{ee&&zt(ee,_,p),M&&cs(p,null,_,"unmounted")},I)},zs=p=>{const{type:_,el:I,anchor:b,transition:R}=p;if(_===ke){wc(I,b);return}if(_===Rc){W(p);return}const V=()=>{r(I),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:j,delayLeave:O}=R,x=()=>j(I,V);O?O(p.el,V,x):x()}else V()},wc=(p,_)=>{let I;for(;p!==_;)I=f(p),r(p),p=I;r(_)},kn=(p,_,I)=>{const{bum:b,scope:R,update:V,subTree:j,um:O}=p;b&&Co(b),R.stop(),V&&(V.active=!1,St(j,p,_,I)),O&&wt(O,_),wt(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},xt=(p,_,I,b=!1,R=!1,V=0)=>{for(let j=V;j<p.length;j++)St(p[j],_,I,b,R)},Ws=p=>p.shapeFlag&6?Ws(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el);let Br=!1;const oo=(p,_,I)=>{p==null?_._vnode&&St(_._vnode,null,null,!0):g(_._vnode||null,p,_,null,null,null,I),Br||(Br=!0,Bh(),Qm(),Br=!1),_._vnode=p},os={p:g,um:St,m:Rt,r:zs,mt:de,mc:Ce,pc:ce,pbc:qe,n:Ws,o:t};let jr,ao;return{render:oo,hydrate:jr,createApp:kw(oo,jr)}}function bc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ls({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fp(t,e,n=!1){const s=t.children,r=e.children;if(te(s)&&te(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Vn(r[i]),a.el=o.el),n||fp(o,a)),a.type===Ra&&(a.el=o.el)}}function Uw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}const $w=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),Rs=Symbol.for("v-cmt"),Rc=Symbol.for("v-stc"),oi=[];let Lt=null;function L(t=!1){oi.push(Lt=t?null:[])}function Bw(){oi.pop(),Lt=oi[oi.length-1]||null}let _i=1;function Jh(t){_i+=t}function pp(t){return t.dynamicChildren=_i>0?Lt||nr:null,Bw(),_i>0&&Lt&&Lt.push(t),t}function $(t,e,n,s,r,i){return pp(d(t,e,n,s,r,i,!0))}function ps(t,e,n,s,r){return pp(he(t,e,n,s,r,!0))}function dl(t){return t?t.__v_isVNode===!0:!1}function qr(t,e){return t.type===e.type&&t.key===e.key}const gp=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||yt(t)||oe(t)?{i:It,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,s=0,r=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gp(e),ref:e&&Do(e),scopeId:Aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:It};return a?(gu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),_i>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const he=jw;function jw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===iw)&&(t=Rs),dl(t)){const a=pr(t,e,!0);return n&&gu(a,n),_i>0&&!i&&Lt&&(a.shapeFlag&6?Lt[Lt.indexOf(t)]=a:Lt.push(a)),a.patchFlag|=-2,a}if(Xw(t)&&(t=t.__vccOpts),e){e=qw(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=_e(a)),Me(c)&&(jm(c)&&!te(c)&&(c=Ke({},c)),e.style=Pr(c))}const o=He(t)?1:ow(t)?128:$w(t)?64:Me(t)?4:oe(t)?2:0;return d(t,e,n,s,r,o,i,!0)}function qw(t){return t?jm(t)||ap(t)?Ke({},t):t:null}function pr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?_p(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&gp(l),ref:e&&e.ref?n&&i?te(i)?i.concat(Do(e)):[i,Do(e)]:Do(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pr(t.ssContent),ssFallback:t.ssFallback&&pr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&(u.transition=c.clone(u)),u}function Jt(t=" ",e=0){return he(Ra,null,t,e)}function be(t="",e=!1){return e?(L(),ps(Rs,null,t)):he(Rs,null,t)}function Wt(t){return t==null||typeof t=="boolean"?he(Rs):te(t)?he(ke,null,t.slice()):typeof t=="object"?Vn(t):he(Ra,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pr(t)}function gu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),gu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ap(e)?e._ctx=It:r===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:It},n=32):(e=String(e),s&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function _p(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=_e([e.class,s.class]));else if(r==="style")e.style=Pr([e.style,s.style]);else if(_a(r)){const i=e[r],o=s[r];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function zt(t,e,n,s=null){Ut(t,e,7,[n,s])}const Hw=sp();let zw=0;function Ww(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Hw,i={uid:zw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(s,r),emitsOptions:Jm(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zv.bind(null,i),t.ce&&t.ce(i),i}let lt=null;const Kw=()=>lt||It;let Go,fl;{const t=Rm(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Go=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),fl=e("__VUE_SSR_SETTERS__",n=>Sa=n)}const Fi=t=>{const e=lt;return Go(t),t.scope.on(),()=>{t.scope.off(),Go(e)}},Xh=()=>{lt&&lt.scope.off(),Go(null)};function yp(t){return t.vnode.shapeFlag&4}let Sa=!1;function Gw(t,e=!1){e&&fl(e);const{props:n,children:s}=t.vnode,r=yp(t);Dw(t,n,r,e),Vw(t,s);const i=r?Qw(t,e):void 0;return e&&fl(!1),i}function Qw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tw);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Jw(t):null,i=Fi(t);Xn();const o=Bn(s,t,0,[t.props,r]);if(Zn(),i(),Em(o)){if(o.then(Xh,Xh),e)return o.then(a=>{Zh(t,a,e)}).catch(a=>{Ea(a,t,0)});t.asyncDep=o}else Zh(t,o,e)}else vp(t,e)}function Zh(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Wm(e)),vp(t,n)}let ed;function vp(t,e,n){const s=t.type;if(!t.render){if(!e&&ed&&!s.render){const r=s.template||mu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ke(Ke({isCustomElement:i,delimiters:a},o),c);s.render=ed(r,l)}}t.render=s.render||Ot}{const r=Fi(t);Xn();try{Aw(t)}finally{Zn(),r()}}}const Yw={get(t,e){return At(t,"get",""),t[e]}};function Jw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Yw),slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wm(Bv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}}))}function Xw(t){return oe(t)&&"__vccOpts"in t}const ve=(t,e)=>jv(t,e,Sa);function Zw(t,e,n){const s=arguments.length;return s===2?Me(e)&&!te(e)?dl(e)?he(t,null,[e]):he(t,e):he(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&dl(n)&&(n=[n]),he(t,e,n))}const e0="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const t0="http://www.w3.org/2000/svg",n0="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,td=Mn&&Mn.createElement("template"),s0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Mn.createElementNS(t0,t):e==="mathml"?Mn.createElementNS(n0,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{td.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=td.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},r0=Symbol("_vtc");function i0(t,e,n){const s=t[r0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nd=Symbol("_vod"),o0=Symbol("_vsh"),a0=Symbol(""),c0=/(^|;)\s*display\s*:/;function l0(t,e,n){const s=t.style,r=He(n);let i=!1;if(n&&!r){if(e)if(He(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&No(s,a,"")}else for(const o in e)n[o]==null&&No(s,o,"");for(const o in n)o==="display"&&(i=!0),No(s,o,n[o])}else if(r){if(e!==n){const o=s[a0];o&&(n+=";"+o),s.cssText=n,i=c0.test(n)}}else e&&t.removeAttribute("style");nd in t&&(t[nd]=i?s.display:"",t[o0]&&(s.display="none"))}const sd=/\s*!important$/;function No(t,e,n){if(te(n))n.forEach(s=>No(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=u0(t,e);sd.test(n)?t.setProperty(Ms(s),n.replace(sd,""),"important"):t[s]=n}}const rd=["Webkit","Moz","ms"],Sc={};function u0(t,e){const n=Sc[e];if(n)return n;let s=mr(e);if(s!=="filter"&&s in t)return Sc[e]=s;s=Am(s);for(let r=0;r<rd.length;r++){const i=rd[r]+s;if(i in t)return Sc[e]=i}return e}const id="http://www.w3.org/1999/xlink";function h0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(id,e.slice(6,e.length)):t.setAttributeNS(id,e,n);else{const i=pv(e);n==null||i&&!Sm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function d0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Js(t,e,n,s){t.addEventListener(e,n,s)}function f0(t,e,n,s){t.removeEventListener(e,n,s)}const od=Symbol("_vei");function m0(t,e,n,s,r=null){const i=t[od]||(t[od]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=p0(e);if(s){const l=i[e]=y0(s,r);Js(t,a,l,c)}else o&&(f0(t,a,o,c),i[e]=void 0)}}const ad=/(?:Once|Passive|Capture)$/;function p0(t){let e;if(ad.test(t)){e={};let s;for(;s=t.match(ad);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ms(t.slice(2)),e]}let Cc=0;const g0=Promise.resolve(),_0=()=>Cc||(g0.then(()=>Cc=0),Cc=Date.now());function y0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ut(v0(s,n.value),e,5,[s])};return n.value=t,n.attached=_0(),n}function v0(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const cd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,w0=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?i0(t,s,l):e==="style"?l0(t,n,s):_a(e)?eu(e)||m0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):E0(t,e,s,l))?d0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),h0(t,e,s,l))};function E0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&cd(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return cd(e)&&He(n)?!1:e in t}const ld=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Co(e,n):e};function I0(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pc=Symbol("_assign"),Ts={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Pc]=ld(r);const i=s||r.props&&r.props.type==="number";Js(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=nl(a)),t[Pc](a)}),n&&Js(t,"change",()=>{t.value=t.value.trim()}),e||(Js(t,"compositionstart",I0),Js(t,"compositionend",ud),Js(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Pc]=ld(i),t.composing)return;const o=(r||t.type==="number")&&!/^0\d/.test(t.value)?nl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},T0=["ctrl","shift","alt","meta"],A0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>T0.some(n=>t[`${n}Key`]&&!e.includes(n))},tn=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=A0[e[o]];if(a&&a(r,e))return}return t(r,...i)})},b0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Ms(r.key);if(e.some(o=>o===i||b0[o]===i))return t(r)})},R0=Ke({patchProp:w0},s0);let hd;function S0(){return hd||(hd=xw(R0))}const C0=(...t)=>{const e=S0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=k0(s);if(!r)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,P0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function P0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function k0(t){return He(t)?document.querySelector(t):t}var dd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},D0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(n[u],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ep(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):D0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new N0;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class N0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O0=function(t){const e=Ep(t);return Ip.encodeByteArray(e,!0)},Qo=function(t){return O0(t).replace(/\./g,"")},Tp=function(t){try{return Ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function V0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const M0=()=>V0().__FIREBASE_DEFAULTS__,x0=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tp(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return M0()||x0()||L0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ap=t=>{var e,n;return(n=(e=Pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},F0=t=>{const e=Ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bp=()=>{var t;return(t=Pa())===null||t===void 0?void 0:t.config},Rp=t=>{var e;return(e=Pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function B0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function j0(){var t;const e=(t=Pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function q0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z0(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function W0(){return!j0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K0(){try{return typeof indexedDB=="object"}catch{return!1}}function G0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Q0,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Y0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Sn(r,a,s)}}function Y0(t,e){return t.replace(J0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const J0=/\{\$([^}]+)}/g;function X0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(fd(i)&&fd(o)){if(!gr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Z0(t,e){const n=new eE(t,e);return n.subscribe.bind(n)}class eE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=kc),r.error===void 0&&(r.error=kc),r.complete===void 0&&(r.complete=kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class Ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class nE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new U0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rE(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sE(t){return t===hs?void 0:t}function rE(t){return t.instantiationMode==="EAGER"}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const oE={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},aE=me.INFO,cE={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},lE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=cE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const uE=(t,e)=>e.some(n=>t instanceof n);let md,pd;function hE(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dE(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sp=new WeakMap,ml=new WeakMap,Cp=new WeakMap,Dc=new WeakMap,yu=new WeakMap;function fE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sp.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function mE(t){if(ml.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pE(t){pl=t(pl)}function gE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Nc(this),e,...n);return Cp.set(s,e.sort?e.sort():[e]),jn(s)}:dE().includes(t)?function(...e){return t.apply(Nc(this),e),jn(Sp.get(this))}:function(...e){return jn(t.apply(Nc(this),e))}}function _E(t){return typeof t=="function"?gE(t):(t instanceof IDBTransaction&&mE(t),uE(t,hE())?new Proxy(t,pl):t)}function jn(t){if(t instanceof IDBRequest)return fE(t);if(Dc.has(t))return Dc.get(t);const e=_E(t);return e!==t&&(Dc.set(t,e),yu.set(e,t)),e}const Nc=t=>yu.get(t);function yE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const vE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],Oc=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=wE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Oc.set(e,i),i}pE(t=>({...t,get:(e,n,s)=>gd(e,n)||t.get(e,n,s),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
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
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function IE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",_d="0.10.2";/**
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
 */const Cs=new _u("@firebase/app"),TE="@firebase/app-compat",AE="@firebase/analytics-compat",bE="@firebase/analytics",RE="@firebase/app-check-compat",SE="@firebase/app-check",CE="@firebase/auth",PE="@firebase/auth-compat",kE="@firebase/database",DE="@firebase/database-compat",NE="@firebase/functions",OE="@firebase/functions-compat",VE="@firebase/installations",ME="@firebase/installations-compat",xE="@firebase/messaging",LE="@firebase/messaging-compat",FE="@firebase/performance",UE="@firebase/performance-compat",$E="@firebase/remote-config",BE="@firebase/remote-config-compat",jE="@firebase/storage",qE="@firebase/storage-compat",HE="@firebase/firestore",zE="@firebase/firestore-compat",WE="firebase",KE="10.11.1";/**
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
 */const Yo=new Map,QE=new Map,yl=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){Cs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _r(t){const e=t.name;if(yl.has(e))return Cs.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of Yo.values())yd(n,t);for(const n of QE.values())yd(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t.settings!==void 0}/**
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
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Ui("app","Firebase",YE);/**
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
 */class JE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=KE;function Pp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_l,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw qn.create("bad-app-name",{appName:String(r)});if(n||(n=bp()),!n)throw qn.create("no-options");const i=Yo.get(r);if(i){if(gr(n,i.options)&&gr(s,i.config))return i;throw qn.create("duplicate-app",{appName:r})}const o=new iE(r);for(const c of yl.values())o.addComponent(c);const a=new JE(n,s,o);return Yo.set(r,a),a}function kp(t=_l){const e=Yo.get(t);if(!e&&t===_l&&bp())return Pp();if(!e)throw qn.create("no-app",{appName:t});return e}function Hn(t,e,n){var s;let r=(s=GE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cs.warn(a.join(" "));return}_r(new Ss(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const XE="firebase-heartbeat-database",ZE=1,yi="firebase-heartbeat-store";let Vc=null;function Dp(){return Vc||(Vc=yE(XE,ZE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Vc}async function eI(t){try{const n=(await Dp()).transaction(yi),s=await n.objectStore(yi).get(Np(t));return await n.done,s}catch(e){if(e instanceof Sn)Cs.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cs.warn(n.message)}}}async function vd(t,e){try{const s=(await Dp()).transaction(yi,"readwrite");await s.objectStore(yi).put(e,Np(t)),await s.done}catch(n){if(n instanceof Sn)Cs.warn(n.message);else{const s=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cs.warn(s.message)}}}function Np(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tI=1024,nI=30*24*60*60*1e3;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wd(),{heartbeatsToSend:s,unsentEntries:r}=rI(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wd(){return new Date().toISOString().substring(0,10)}function rI(t,e=tI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ed(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ed(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K0()?G0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ed(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oI(t){_r(new Ss("platform-logger",e=>new EE(e),"PRIVATE")),_r(new Ss("heartbeat",e=>new sI(e),"PRIVATE")),Hn(gl,_d,t),Hn(gl,_d,"esm2017"),Hn("fire-js","")}oI("");function wu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Op(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aI=Op,Vp=new Ui("auth","Firebase",Op());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new _u("@firebase/auth");function cI(t,...e){Jo.logLevel<=me.WARN&&Jo.warn(`Auth (${Nr}): ${t}`,...e)}function Oo(t,...e){Jo.logLevel<=me.ERROR&&Jo.error(`Auth (${Nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw Iu(t,...e)}function Bt(t,...e){return Iu(t,...e)}function Eu(t,e,n){const s=Object.assign(Object.assign({},aI()),{[e]:n});return new Ui("auth","Firebase",s).create(e,{appName:t.name})}function wn(t){return Eu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Mt(t,"argument-error"),Eu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vp.create(t,...e)}function X(t,e,...n){if(!t)throw Iu(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function En(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uI(){return Id()==="http:"||Id()==="https:"}function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uI()||q0()||"connection"in navigator)?navigator.onLine:!0}function dI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=B0()||H0()}get(){return hI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mI=new Bi(3e4,6e4);function es(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,s,r={}){return xp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Mp.fetch()(Lp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},fI),e);try{const r=new gI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw go(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Eu(t,u,l);Mt(t,u)}}catch(r){if(r instanceof Sn)throw r;Mt(t,"network-request-failed",{message:String(r)})}}async function ji(t,e,n,s,r={}){const i=await Cn(t,e,n,s,r);return"mfaPendingCredential"in i&&Mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Tu(t.config,r):`${t.config.apiScheme}://${r}`}function pI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bt(this.auth,"network-request-failed")),mI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Bt(t,e,s);return r.customData._tokenResponse=n,r}function Td(t){return t!==void 0&&t.enterprise!==void 0}class _I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yI(t,e){return Cn(t,"GET","/v2/recaptchaConfig",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function Fp(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wI(t,e=!1){const n=Le(t),s=await n.getIdToken(e),r=Au(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ai(Mc(r.auth_time)),issuedAtTime:ai(Mc(r.iat)),expirationTime:ai(Mc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function Au(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Tp(n);return r?JSON.parse(r):(Oo("Failed to decode base64 JWT payload"),null)}catch(r){return Oo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ad(t){const e=Au(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&EI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function EI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await yr(t,Fp(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Up(i.providerUserInfo):[],a=AI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function TI(t){const e=Le(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Up(t){return t.map(e=>{var{providerId:n}=e,s=wu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){const n=await xp(t,{},async()=>{const s=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Lp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RI(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ad(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Ad(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await bI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new or;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new or,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wI(this,e)}reload(){return TI(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await yr(this,vI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:W,isAnonymous:le,providerData:G,stsTokenManager:Te}=n;X(U&&Te,e,"internal-error");const Ce=or.fromJSON(this.name,Te);X(typeof U=="string",e,"internal-error"),Nn(h,e.name),Nn(f,e.name),X(typeof W=="boolean",e,"internal-error"),X(typeof le=="boolean",e,"internal-error"),Nn(m,e.name),Nn(v,e.name),Nn(g,e.name),Nn(E,e.name),Nn(S,e.name),Nn(F,e.name);const Ye=new pn({uid:U,auth:e,email:f,emailVerified:W,displayName:h,isAnonymous:le,photoURL:v,phoneNumber:m,tenantId:g,stsTokenManager:Ce,createdAt:S,lastLoginAt:F});return G&&Array.isArray(G)&&(Ye.providerData=G.map(qe=>Object.assign({},qe))),E&&(Ye._redirectEventId=E),Ye}static async _fromIdTokenResponse(e,n,s=!1){const r=new or;r.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Xo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];X(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Up(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new or;a.updateFromIdToken(s);const c=new pn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new wl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;function gn(t){En(t instanceof Function,"Expected a class definition");let e=bd.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bd.set(t,e),e)}/**
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
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class ar{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ar(gn(Rd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||gn(Rd);const o=Vo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=pn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ar(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ar(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zp(e))return"Blackberry";if(Wp(e))return"Webos";if(bu(e))return"Safari";if((e.includes("chrome/")||jp(e))&&!e.includes("edge/"))return"Chrome";if(Hp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bp(t=nt()){return/firefox\//i.test(t)}function bu(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jp(t=nt()){return/crios\//i.test(t)}function qp(t=nt()){return/iemobile/i.test(t)}function Hp(t=nt()){return/android/i.test(t)}function zp(t=nt()){return/blackberry/i.test(t)}function Wp(t=nt()){return/webos/i.test(t)}function ka(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SI(t=nt()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CI(){return z0()&&document.documentMode===10}function Kp(t=nt()){return ka(t)||Hp(t)||Wp(t)||zp(t)||/windows phone/i.test(t)||qp(t)}function PI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=Sd(nt());break;case"Worker":n=`${Sd(nt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${s}`}/**
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
 */async function DI(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",es(t,e))}/**
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
 */class VI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cd(this),this.idTokenSubscription=new Cd(this),this.beforeStateQueue=new kI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ar.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fp(this,{idToken:e}),s=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(wn(this));const n=e?Le(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),n=new OI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await RI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ts(t){return Le(t)}class Cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Z0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(t){Da=t}function Qp(t){return Da.loadJS(t)}function xI(){return Da.recaptchaEnterpriseScript}function LI(){return Da.gapiScript}function FI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UI="recaptcha-enterprise",$I="NO_RECAPTCHA";class BI{constructor(e){this.type=UI,this.auth=ts(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{yI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new _I(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Td(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o($I)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Td(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xI();c.length!==0&&(c+=a),Qp(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Pd(t,e,n,s=!1){const r=new BI(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function El(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Pd(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pd(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){const n=vu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(gr(i,e??{}))return r;Mt(r,"already-initialized")}return n.initialize({options:e})}function qI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HI(t,e,n){const s=ts(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Yp(e),{host:o,port:a}=zI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),WI()}function Yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zI(t){const e=Yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:kd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:kd(o)}}}function kd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function GI(t,e){return ji(t,"POST","/v1/accounts:signInWithPassword",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e){return ji(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}async function YI(t,e){return ji(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Ru{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new vi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new vi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,n,"signInWithPassword",GI);case"emailLink":return QI(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,s,"signUpPassword",KI);case"emailLink":return YI(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e){return ji(t,"POST","/v1/accounts:signInWithIdp",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="http://localhost";class Ps extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ps(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,cr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cr(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(t){const e=Gr(Qr(t)).link,n=e?Gr(Qr(e)).deep_link_id:null,s=Gr(Qr(t)).deep_link_id;return(s?Gr(Qr(s)).link:null)||s||n||e||t}class Su{constructor(e){var n,s,r,i,o,a;const c=Gr(Qr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=XI((r=c.mode)!==null&&r!==void 0?r:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZI(e);try{return new Su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.providerId=Or.PROVIDER_ID}static credential(e,n){return vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Su.parseLink(n);return X(s,"argument-error"),vi._fromEmailAndCode(e,s.code,s.tenantId)}}Or.PROVIDER_ID="password";Or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qi extends Cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends qi{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ps._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends qi{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends qi{constructor(){super("twitter.com")}static credential(e,n){return Ps._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fn.credential(n,s)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e){return ji(t,"POST","/v1/accounts:signUp",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await pn._fromIdTokenResponse(e,s,r),o=Dd(s);return new ks({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Dd(s);return new ks({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Zo(e,n,s,r)}}function Jp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,i,e,s):i})}async function tT(t,e,n=!1){const s=await yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",s)}/**
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
 */async function nT(t,e,n=!1){const{auth:s}=t;if(Ft(s.app))return Promise.reject(wn(s));const r="reauthenticate";try{const i=await yr(t,Jp(s,r,e,t),n);X(i.idToken,s,"internal-error");const o=Au(i.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),ks._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(t,e,n=!1){if(Ft(t.app))return Promise.reject(wn(t));const s="signIn",r=await Jp(t,s,e),i=await ks._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function sT(t,e){return Xp(ts(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(t){const e=ts(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rT(t,e,n){if(Ft(t.app))return Promise.reject(wn(t));const s=ts(t),o=await El(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Zp(t),c}),a=await ks._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function iT(t,e,n){return Ft(t.app)?Promise.reject(wn(t)):sT(Le(t),Or.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Zp(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Pu(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Le(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await yr(s,oT(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function aT(t,e,n,s){return Le(t).onIdTokenChanged(e,n,s)}function cT(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function lT(t,e,n,s){return Le(t).onAuthStateChanged(e,n,s)}function uT(t){return Le(t).signOut()}const ea="__sak";/**
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
 */class eg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){const t=nt();return bu(t)||ka(t)}const dT=1e3,fT=10;class tg extends eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hT()&&PI(),this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);CI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tg.type="LOCAL";const mT=tg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function nn(){return window}function _T(t){nn().location.href=t}/**
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
 */function rg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function yT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wT(){return rg()?self:null}/**
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
 */const ig="firebaseLocalStorageDb",ET=1,ta="firebaseLocalStorage",og="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([ta],e?"readwrite":"readonly").objectStore(ta)}function IT(){const t=indexedDB.deleteDatabase(ig);return new Hi(t).toPromise()}function Il(){const t=indexedDB.open(ig,ET);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ta,{keyPath:og})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ta)?e(s):(s.close(),await IT(),e(await Il()))})})}async function Nd(t,e,n){const s=Oa(t,!0).put({[og]:e,value:n});return new Hi(s).toPromise()}async function TT(t,e){const n=Oa(t,!1).get(e),s=await new Hi(n).toPromise();return s===void 0?null:s.value}function Od(t,e){const n=Oa(t,!0).delete(e);return new Hi(n).toPromise()}const AT=800,bT=3;class ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(wT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yT(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await Nd(e,ea,"1"),await Od(e,ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Nd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oa(r,!1).getAll();return new Hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ag.type="LOCAL";const RT=ag;new Bi(3e4,6e4);/**
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
 */function cg(t,e){return e?gn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Du extends Ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ST(t){return Xp(t.auth,new Du(t),t.bypassAuthState)}function CT(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),nT(n,new Du(t),t.bypassAuthState)}async function PT(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),tT(n,new Du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ST;case"linkViaPopup":case"linkViaRedirect":return PT;case"reauthViaPopup":case"reauthViaRedirect":return CT;default:Mt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new Bi(2e3,1e4);async function DT(t,e,n){if(Ft(t.app))return Promise.reject(Bt(t,"operation-not-supported-in-this-environment"));const s=ts(t);lI(t,e,Cu);const r=cg(s,n);return new gs(s,"signInViaPopup",e,r).executeNotNull()}class gs extends lg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kT.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="pendingRedirect",Mo=new Map;class OT extends lg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const s=await VT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VT(t,e){const n=LT(e),s=xT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function MT(t,e){Mo.set(t._key(),e)}function xT(t){return gn(t._redirectPersistence)}function LT(t){return Vo(NT,t.config.apiKey,t.name)}async function FT(t,e,n=!1){if(Ft(t.app))return Promise.reject(wn(t));const s=ts(t),r=cg(s,e),o=await new OT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=10*60*1e3;class $T{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ug(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ug({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ug(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const KT=new Bi(3e4,6e4);function Md(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GT(t){return new Promise((e,n)=>{var s,r,i;function o(){Md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Md(),n(Bt(t,"network-request-failed"))},timeout:KT.get()})}if(!((r=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const a=FI("iframefcb");return nn()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},Qp(`${LI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xo=null,e})}let xo=null;function QT(t){return xo=xo||GT(t),xo}/**
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
 */const YT=new Bi(5e3,15e3),JT="__/auth/iframe",XT="emulator/auth/iframe",ZT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tA(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,XT):`https://${t.config.authDomain}/${JT}`,s={apiKey:e.apiKey,appName:t.name,v:Nr},r=eA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$i(s).slice(1)}`}async function nA(t){const e=await QT(t),n=nn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:tA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=nn().setTimeout(()=>{i(o)},YT.get());function c(){nn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const sA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rA=500,iA=600,oA="_blank",aA="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cA(t,e,n,s=rA,r=iA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=nt().toLowerCase();n&&(a=jp(l)?oA:n),Bp(l)&&(e=e||aA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(SI(l)&&a!=="_self")return lA(e||"",a),new xd(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new xd(h)}function lA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const uA="__/auth/handler",hA="emulator/auth/handler",dA=encodeURIComponent("fac");async function Ld(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Nr,eventId:r};if(e instanceof Cu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",X0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof qi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${dA}=${encodeURIComponent(c)}`:"";return`${fA(t)}?${$i(a).slice(1)}${l}`}function fA({config:t}){return t.emulator?Tu(t,hA):`https://${t.authDomain}/${uA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sg,this._completeRedirectFn=FT,this._overrideRedirectResult=MT}async _openPopup(e,n,s,r){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ld(e,n,s,vl(),r);return cA(e,o,ku())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ld(e,n,s,vl(),r);return _T(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(En(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nA(e),s=new $T(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kp()||bu()||ka()}}const pA=mA;var Fd="@firebase/auth",Ud="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yA(t){_r(new Ss("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},l=new VI(s,r,i,c);return qI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_r(new Ss("auth-internal",e=>{const n=ts(e.getProvider("auth").getImmediate());return(s=>new gA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Fd,Ud,_A(t)),Hn(Fd,Ud,"esm2017")}/**
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
 */const vA=5*60,wA=Rp("authIdTokenMaxAge")||vA;let $d=null;const EA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>wA)return;const r=n==null?void 0:n.token;$d!==r&&($d=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function IA(t=kp()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jI(t,{popupRedirectResolver:pA,persistence:[RT,mT,sg]}),s=Rp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=EA(i.toString());cT(n,o,()=>o(n.currentUser)),aT(n,a=>o(a))}}const r=Ap("auth");return r&&HI(n,`http://${r}`),n}function TA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Bt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",TA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yA("Browser");var AA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Nu=Nu||{},se=AA||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bA(t){return Object.prototype.hasOwnProperty.call(t,Lc)&&t[Lc]||(t[Lc]=++RA)}var Lc="closure_uid_"+(1e9*Math.random()>>>0),RA=0;function SA(t,e,n){return t.call.apply(t.bind,arguments)}function CA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=SA:ht=CA,ht.apply(null,arguments)}function _o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ns(){this.s=this.s,this.o=this.o}var PA=0;ns.prototype.s=!1;ns.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),PA!=0)&&bA(this)};ns.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ou(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Va(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var kA=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};se.addEventListener("test",n,e),se.removeEventListener("test",n,e)}catch{}return t}();function wi(t){return/^[\s\xa0]*$/.test(t)}function xa(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return xa().indexOf(t)!=-1}function Vu(t){return Vu[" "](t),t}Vu[" "]=function(){};function DA(t,e){var n=Ab;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var NA=Yt("Opera"),vr=Yt("Trident")||Yt("MSIE"),dg=Yt("Edge"),Tl=dg||vr,fg=Yt("Gecko")&&!(xa().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),OA=xa().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function mg(){var t=se.document;return t?t.documentMode:void 0}var Al;e:{var Fc="",Uc=function(){var t=xa();if(fg)return/rv:([^\);]+)(\)|;)/.exec(t);if(dg)return/Edge\/([\d\.]+)/.exec(t);if(vr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OA)return/WebKit\/(\S+)/.exec(t);if(NA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uc&&(Fc=Uc?Uc[1]:""),vr){var $c=mg();if($c!=null&&$c>parseFloat(Fc)){Al=String($c);break e}}Al=Fc}var bl;if(se.document&&vr){var jd=mg();bl=jd||parseInt(Al,10)||void 0}else bl=void 0;var VA=bl;function Ei(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fg){e:{try{Vu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ei.$.h.call(this)}}Qe(Ei,dt);var MA={2:"touch",3:"pen",4:"mouse"};Ei.prototype.h=function(){Ei.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var La="closure_listenable_"+(1e6*Math.random()|0),xA=0;function LA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++xA,this.fa=this.ia=!1}function Fa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Mu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function FA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pg(t){const e={};for(const n in t)e[n]=t[n];return e}const qd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<qd.length;i++)n=qd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Sl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Rl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=hg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Fa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var xu="closure_lm_"+(1e6*Math.random()|0),Bc={};function _g(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_g(t,e[i],n,s,r);return null}return n=wg(n),t&&t[La]?t.O(e,n,Ma(s)?!!s.capture:!!s,r):UA(t,e,n,!1,s,r)}function UA(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ma(r)?!!r.capture:!!r,a=Fu(t);if(a||(t[xu]=a=new Ua(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=$A(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)kA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(vg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $A(){function t(n){return e.call(t.src,t.listener,n)}const e=BA;return t}function yg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yg(t,e[i],n,s,r);else s=Ma(s)?!!s.capture:!!s,n=wg(n),t&&t[La]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Sl(i,n,s,r),-1<n&&(Fa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sl(e,n,s,r)),(n=-1<t?e[t]:null)&&Lu(n))}function Lu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[La])Rl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(vg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Fu(e))?(Rl(n,t),n.h==0&&(n.src=null,e[xu]=null)):Fa(t)}}}function vg(t){return t in Bc?Bc[t]:Bc[t]="on"+t}function BA(t,e){if(t.fa)t=!0;else{e=new Ei(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Lu(t),t=n.call(s,e)}return t}function Fu(t){return t=t[xu],t instanceof Ua?t:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wg(t){return typeof t=="function"?t:(t[jc]||(t[jc]=function(e){return t.handleEvent(e)}),t[jc])}function Ge(){ns.call(this),this.i=new Ua(this),this.S=this,this.J=null}Qe(Ge,ns);Ge.prototype[La]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){yg(this,t,e,n,s)};function et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var r=e;e=new dt(s,t),gg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=yo(o,s,!0,e)&&r}if(o=e.g=t,r=yo(o,s,!0,e)&&r,r=yo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=yo(o,s,!1,e)&&r}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fa(n[s]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function yo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Rl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Uu=se.JSON.stringify;class jA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qA(){var t=$u;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HA{constructor(){this.h=this.g=null}add(e,n){const s=Eg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Eg=new jA(()=>new zA,t=>t.reset());class zA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function KA(t){se.setTimeout(()=>{throw t},0)}let Ii,Ti=!1,$u=new HA,Ig=()=>{const t=se.Promise.resolve(void 0);Ii=()=>{t.then(GA)}};var GA=()=>{for(var t;t=qA();){try{t.h.call(t.g)}catch(n){KA(n)}var e=Eg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ti=!1};function $a(t,e){Ge.call(this),this.h=t||1,this.g=e||se,this.j=ht(this.qb,this),this.l=Date.now()}Qe($a,Ge);B=$a.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Bu(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}B.N=function(){$a.$.N.call(this),Bu(this),delete this.g};function ju(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function Tg(t){t.g=ju(()=>{t.g=null,t.i&&(t.i=!1,Tg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QA extends ns{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tg(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(t){ns.call(this),this.h=t,this.g={}}Qe(Ai,ns);var Hd=[];function Ag(t,e,n,s){Array.isArray(n)||(n&&(Hd[0]=n.toString()),n=Hd);for(var r=0;r<n.length;r++){var i=_g(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bg(t){Mu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lu(e)},t),t.g={}}Ai.prototype.N=function(){Ai.$.N.call(this),bg(this)};Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ba(){this.g=!0}Ba.prototype.Ea=function(){this.g=!1};function YA(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function JA(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function tr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZA(t,n)+(s?" "+s:"")})}function XA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ba.prototype.info=function(){};function ZA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Uu(n)}catch{return e}}var Fs={},zd=null;function ja(){return zd=zd||new Ge}Fs.Ta="serverreachability";function Rg(t){dt.call(this,Fs.Ta,t)}Qe(Rg,dt);function bi(t){const e=ja();et(e,new Rg(e))}Fs.STAT_EVENT="statevent";function Sg(t,e){dt.call(this,Fs.STAT_EVENT,t),this.stat=e}Qe(Sg,dt);function _t(t){const e=ja();et(e,new Sg(e,t))}Fs.Ua="timingevent";function Cg(t,e){dt.call(this,Fs.Ua,t),this.size=e}Qe(Cg,dt);function zi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qu(){}qu.prototype.h=null;function Wd(t){return t.h||(t.h=t.i())}function kg(){}var Wi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hu(){dt.call(this,"d")}Qe(Hu,dt);function zu(){dt.call(this,"c")}Qe(zu,dt);var Cl;function Ha(){}Qe(Ha,qu);Ha.prototype.g=function(){return new XMLHttpRequest};Ha.prototype.i=function(){return{}};Cl=new Ha;function Ki(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ai(this),this.P=eb,t=Tl?125:void 0,this.V=new $a(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Dg}function Dg(){this.i=null,this.g="",this.h=!1}var eb=45e3,Ng={},Pl={};B=Ki.prototype;B.setTimeout=function(t){this.P=t};function kl(t,e,n){t.L=1,t.A=Wa(In(e)),t.u=n,t.S=!0,Og(t,null)}function Og(t,e){t.G=Date.now(),Gi(t),t.B=In(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),Bg(n.i,"t",s),t.o=0,n=t.l.J,t.h=new Dg,t.g=c_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new QA(ht(t.Pa,t,t.g),t.O)),Ag(t.U,t.g,"readystatechange",t.nb),e=t.I?pg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),bi(),YA(t.j,t.v,t.B,t.m,t.W,t.u)}B.nb=function(t){t=t.target;const e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};B.Pa=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Tl||this.g&&(this.h.h||this.g.ja()||Yd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?bi(3):bi(2)),za(this);var n=this.g.da();this.ca=n;t:if(Vg(this)){var s=Yd(this.g);t="";var r=s.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_s(this),ci(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var l=a;break t}}l=null}if(n=l)tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dl(this,n);else{this.i=!1,this.s=3,_t(12),_s(this),ci(this);break e}}this.S?(Mg(this,u,o),Tl&&this.i&&u==3&&(Ag(this.U,this.V,"tick",this.mb),this.V.start())):(tr(this.j,this.m,o,null),Dl(this,o)),u==4&&_s(this),this.i&&!this.J&&(u==4?r_(this.l,this):(this.i=!1,Gi(this)))}else Eb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),_s(this),ci(this)}}}catch{}finally{}};function Vg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Mg(t,e,n){let s=!0,r;for(;!t.J&&t.o<n.length;)if(r=tb(t,n),r==Pl){e==4&&(t.s=4,_t(14),s=!1),tr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ng){t.s=4,_t(15),tr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else tr(t.j,t.m,r,null),Dl(t,r);Vg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,_t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ju(e),e.M=!0,_t(11))):(tr(t.j,t.m,n,"[Invalid Chunked Response]"),_s(t),ci(t))}B.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.o<e.length&&(za(this),Mg(this,t,e),this.i&&t!=4&&Gi(this))}};function tb(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?Pl:(n=Number(e.substring(n,s)),isNaN(n)?Ng:(s+=1,s+n>e.length?Pl:(e=e.slice(s,s+n),t.o=s+n,e)))}B.cancel=function(){this.J=!0,_s(this)};function Gi(t){t.Y=Date.now()+t.P,xg(t,t.P)}function xg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=zi(ht(t.lb,t),e)}function za(t){t.C&&(se.clearTimeout(t.C),t.C=null)}B.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(XA(this.j,this.B),this.L!=2&&(bi(),_t(17)),_s(this),this.s=2,ci(this)):xg(this,this.Y-t)};function ci(t){t.l.H==0||t.J||r_(t.l,t)}function _s(t){za(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Bu(t.V),bg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Dl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Nl(n.i,t))){if(!t.K&&Nl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ra(n),Qa(n);else break e;Yu(n),_t(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=zi(ht(n.ib,n),6e3));if(1>=Hg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ys(n,11)}else if((t.K||n.g==t)&&ra(n),!wi(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Wu(i,i.h),i.h=null))}if(s.F){const g=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,De(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=a_(s,s.J?s.pa:null,s.Y),o.K){zg(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.C&&(za(a),Gi(a)),s.g=o}else n_(s);0<n.j.length&&Ya(n)}else l[0]!="stop"&&l[0]!="close"||ys(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ys(n,7):Qu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}bi(4)}catch{}}function nb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function sb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Lg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sb(t),s=nb(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Fg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function As(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof As){this.h=t.h,na(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l;var e=t.i,n=new Ri;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kd(this,n),this.o=t.o}else t&&(e=String(t).match(Fg))?(this.h=!1,na(this,e[1]||"",!0),this.s=Yr(e[2]||""),this.g=Yr(e[3]||"",!0),sa(this,e[4]),this.l=Yr(e[5]||"",!0),Kd(this,e[6]||"",!0),this.o=Yr(e[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}As.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jr(e,Gd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jr(e,Gd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jr(n,n.charAt(0)=="/"?ab:ob,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jr(n,lb)),t.join("")};function In(t){return new As(t)}function na(t,e,n){t.j=n?Yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kd(t,e,n){e instanceof Ri?(t.i=e,ub(t.i,t.h)):(n||(e=Jr(e,cb)),t.i=new Ri(e,t.h))}function De(t,e,n){t.i.set(e,n)}function Wa(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ib),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ib(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gd=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,cb=/[#\?@]/g,lb=/#/g;function Ri(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ss(t){t.g||(t.g=new Map,t.h=0,t.i&&rb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Ri.prototype;B.add=function(t,e){ss(this),this.i=null,t=Vr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ug(t,e){ss(t),e=Vr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $g(t,e){return ss(t),e=Vr(t,e),t.g.has(e)}B.forEach=function(t,e){ss(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};B.ta=function(){ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};B.Z=function(t){ss(this);let e=[];if(typeof t=="string")$g(this,t)&&(e=e.concat(this.g.get(Vr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return ss(this),this.i=null,t=Vr(this,t),$g(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Bg(t,e,n){Ug(t,e),0<n.length&&(t.i=null,t.g.set(Vr(t,e),Ou(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Vr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ub(t,e){e&&!t.j&&(ss(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ug(this,s),Bg(this,r,n))},t)),t.j=e}var hb=class{constructor(t,e){this.g=t,this.map=e}};function jg(t){this.l=t||db,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var db=10;function qg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hg(t){return t.h?1:t.g?t.g.size:0}function Nl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wu(t,e){t.g?t.g.add(e):t.h=e}function zg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jg.prototype.cancel=function(){if(this.i=Wg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ou(t.i)}var fb=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function mb(){this.g=new fb}function pb(t,e,n){const s=n||"";try{Lg(t,function(r,i){let o=r;Ma(r)&&(o=Uu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function gb(t,e){const n=new Ba;if(se.Image){const s=new Image;s.onload=_o(vo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=_o(vo,n,s,"TestLoadImage: error",!1,e),s.onabort=_o(vo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=_o(vo,n,s,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function vo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Qi(t){this.l=t.ec||null,this.j=t.ob||!1}Qe(Qi,qu);Qi.prototype.g=function(){return new Ka(this.l,this.j)};Qi.prototype.i=function(t){return function(){return t}}({});function Ka(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ku,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Ka,Ge);var Ku=0;B=Ka.prototype;B.open=function(t,e){if(this.readyState!=Ku)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Si(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=Ku};B.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Kg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}B.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yi(this):Si(this),this.readyState==3&&Kg(this)}};B.Za=function(t){this.g&&(this.response=this.responseText=t,Yi(this))};B.Ya=function(t){this.g&&(this.response=t,Yi(this))};B.ka=function(){this.g&&Yi(this)};function Yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Si(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _b=se.JSON.parse;function Fe(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gg,this.L=this.M=!1}Qe(Fe,Ge);var Gg="",yb=/^https?$/i,vb=["POST","PUT"];B=Fe.prototype;B.Oa=function(t){this.M=t};B.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Cl.g(),this.C=this.u?Wd(this.u):Wd(Cl),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=se.FormData&&t instanceof se.FormData,!(0<=hg(vb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jg(this),0<this.B&&((this.L=wb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=ju(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qd(this,i)}};function wb(t){return vr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.ua=function(){typeof Nu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Qd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qg(t),Ga(t)}function Qg(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Ga(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ga(this,!0)),Fe.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?Yg(this):this.kb())};B.kb=function(){Yg(this)};function Yg(t){if(t.h&&typeof Nu<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)ju(t.La,0,t);else if(et(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Fg)[1]||null;!r&&se.self&&se.self.location&&(r=se.self.location.protocol.slice(0,-1)),s=!yb.test(r?r.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var i=2<Xt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Qg(t)}}finally{Ga(t)}}}}function Ga(t,e){if(t.g){Jg(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function Jg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}B.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}B.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_b(e)}};function Yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Eb(t){const e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(wi(t[s]))continue;var n=WA(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}FA(e,function(s){return s.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xg(t){let e="";return Mu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Gu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Xg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function Hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zg(t){this.Ga=0,this.j=[],this.l=new Ba,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hr("baseRetryDelayMs",5e3,t),this.hb=Hr("retryDelaySeedMs",1e4,t),this.eb=Hr("forwardChannelMaxRetries",2,t),this.xa=Hr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jg(t&&t.concurrentRequestLimit),this.Ja=new mb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=Zg.prototype;B.ra=8;B.H=1;function Qu(t){if(e_(t),t.H==3){var e=t.W++,n=In(t.I);if(De(n,"SID",t.K),De(n,"RID",e),De(n,"TYPE","terminate"),Ji(t,n),e=new Ki(t,t.l,e),e.L=2,e.A=Wa(In(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.A,n=!0),n||(e.g=c_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Gi(e)}o_(t)}function Qa(t){t.g&&(Ju(t),t.g.cancel(),t.g=null)}function e_(t){Qa(t),t.u&&(se.clearTimeout(t.u),t.u=null),ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Ya(t){if(!qg(t.i)&&!t.m){t.m=!0;var e=t.Na;Ii||Ig(),Ti||(Ii(),Ti=!0),$u.add(e,t),t.C=0}}function Ib(t,e){return Hg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zi(ht(t.Na,t,e),i_(t,t.C)),t.C++,!0)}B.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ki(this,this.l,t);let i=this.s;if(this.U&&(i?(i=pg(i),gg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=t_(this,r,e),n=In(this.I),De(n,"RID",t),De(n,"CVER",22),this.F&&De(n,"X-HTTP-Session-Id",this.F),Ji(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xg(i)))+"&"+e:this.o&&Gu(n,this.o,i)),Wu(this.i,r),this.bb&&De(n,"TYPE","init"),this.P?(De(n,"$req",e),De(n,"SID","null"),r.aa=!0,kl(r,n,null)):kl(r,n,e),this.H=2}}else this.H==3&&(t?Jd(this,t):this.j.length==0||qg(this.i)||Jd(this))};function Jd(t,e){var n;e?n=e.m:n=t.W++;const s=In(t.I);De(s,"SID",t.K),De(s,"RID",n),De(s,"AID",t.V),Ji(t,s),t.o&&t.s&&Gu(s,t.o,t.s),n=new Ki(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=t_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wu(t.i,n),kl(n,s,e)}function Ji(t,e){t.na&&Mu(t.na,function(n,s){De(e,s,n)}),t.h&&Lg({},function(n,s){De(e,s,n)})}function t_(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ht(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{pb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function n_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ii||Ig(),Ti||(Ii(),Ti=!0),$u.add(e,t),t.A=0}}function Yu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zi(ht(t.Ma,t),i_(t,t.A)),t.A++,!0)}B.Ma=function(){if(this.u=null,s_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zi(ht(this.jb,this),t)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),Qa(this),s_(this))};function Ju(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function s_(t){t.g=new Ki(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=In(t.wa);De(e,"RID","rpc"),De(e,"SID",t.K),De(e,"AID",t.V),De(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&De(e,"TO",t.qa),De(e,"TYPE","xmlhttp"),Ji(t,e),t.o&&t.s&&Gu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Wa(In(e)),n.u=null,n.S=!0,Og(n,t)}B.ib=function(){this.v!=null&&(this.v=null,Qa(this),Yu(this),_t(19))};function ra(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function r_(t,e){var n=null;if(t.g==e){ra(t),Ju(t),t.g=null;var s=2}else if(Nl(t.i,e))n=e.F,zg(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;s=ja(),et(s,new Cg(s,n)),Ya(t)}else n_(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(s==1&&Ib(t,e)||s==2&&Yu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ys(t,5);break;case 4:ys(t,10);break;case 3:ys(t,6);break;default:ys(t,2)}}}function i_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ys(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ht(t.pb,t);n||(n=new As("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||na(n,"https"),Wa(n)),gb(n.toString(),s)}else _t(2);t.H=0,t.h&&t.h.za(e),o_(t),e_(t)}B.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function o_(t){if(t.H=0,t.ma=[],t.h){const e=Wg(t.i);(e.length!=0||t.j.length!=0)&&(Bd(t.ma,e),Bd(t.ma,t.j),t.i.i.length=0,Ou(t.j),t.j.length=0),t.h.ya()}}function a_(t,e,n){var s=n instanceof As?In(n):new As(n);if(s.g!="")e&&(s.g=e+"."+s.g),sa(s,s.m);else{var r=se.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new As(null);s&&na(i,s),e&&(i.g=e),r&&sa(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&De(s,n,e),De(s,"VER",t.ra),Ji(t,s),s}function c_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Fe(new Qi({ob:n})):new Fe(t.va),e.Oa(t.J),e}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function l_(){}B=l_.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function ia(){if(vr&&!(10<=Number(VA)))throw Error("Environmental error: no available transport.")}ia.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){Ge.call(this),this.g=new Zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Mr(this)}Qe(kt,Ge);kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=a_(t,null,t.Y),Ya(t)};kt.prototype.close=function(){Qu(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Uu(t),t=n);e.j.push(new hb(e.fb++,t)),e.H==3&&Ya(e)};kt.prototype.N=function(){this.g.h=null,delete this.j,Qu(this.g),delete this.g,kt.$.N.call(this)};function u_(t){Hu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(u_,Hu);function h_(){zu.call(this),this.status=1}Qe(h_,zu);function Mr(t){this.g=t}Qe(Mr,l_);Mr.prototype.Ba=function(){et(this.g,"a")};Mr.prototype.Aa=function(t){et(this.g,new u_(t))};Mr.prototype.za=function(t){et(this.g,new h_)};Mr.prototype.ya=function(){et(this.g,"b")};function Tb(){this.blockSize=-1}function jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(jt,Tb);jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)qc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){qc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){qc(this,s),r=0;break}}this.h=r,this.i+=e};jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Re(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var Ab={};function Xu(t){return-128<=t&&128>t?DA(t,function(e){return new Re([e|0],0>e?-1:0)}):new Re([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return lr;if(0>t)return Xe(Zt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ol;return new Re(e,0)}function d_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(d_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),s=lr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Zt(Math.pow(e,i)),s=s.R(i).add(Zt(o))):(s=s.R(n),s=s.add(Zt(o)))}return s}var Ol=4294967296,lr=Xu(0),Vl=Xu(1),Xd=Xu(16777216);B=Re.prototype;B.ea=function(){if(Nt(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ol+s)*e,e*=Ol}return t};B.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_n(this))return"0";if(Nt(this))return"-"+Xe(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,s="";;){var r=aa(n,e).g;n=oa(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,_n(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};B.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function _n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}B.X=function(t){return t=oa(this,t),Nt(t)?-1:_n(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Re(n,~t.h).add(Vl)}B.abs=function(){return Nt(this)?Xe(this):this};B.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Re(n,n[n.length-1]&-2147483648?-1:0)};function oa(t,e){return t.add(Xe(e))}B.R=function(t){if(_n(this)||_n(t))return lr;if(Nt(this))return Nt(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(Nt(t))return Xe(this.R(Xe(t)));if(0>this.X(Xd)&&0>t.X(Xd))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,wo(n,2*s+2*r),n[2*s+2*r+1]+=i*c,wo(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,wo(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,wo(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Re(n,0)};function wo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function zr(t,e){this.g=t,this.h=e}function aa(t,e){if(_n(e))throw Error("division by zero");if(_n(t))return new zr(lr,lr);if(Nt(t))return e=aa(Xe(t),e),new zr(Xe(e.g),Xe(e.h));if(Nt(e))return e=aa(t,Xe(e)),new zr(Xe(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vl,s=e;0>=s.X(t);)n=Zd(n),s=Zd(s);var r=Ks(n,1),i=Ks(s,1);for(s=Ks(s,2),n=Ks(n,2);!_n(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ks(s,1),n=Ks(n,1)}return e=oa(t,r.R(e)),new zr(r,e)}for(r=lr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Zt(n),o=i.R(e);Nt(o)||0<o.X(t);)n-=s,i=Zt(n),o=i.R(e);_n(i)&&(i=Vl),r=r.add(i),t=oa(t,o)}return new zr(r,t)}B.gb=function(t){return aa(this,t).h};B.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Re(n,this.h&t.h)};B.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Re(n,this.h|t.h)};B.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Re(n,this.h^t.h)};function Zd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Re(n,t.h)}function Ks(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Re(r,t.h)}ia.prototype.createWebChannel=ia.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;qa.NO_ERROR=0;qa.TIMEOUT=8;qa.HTTP_ERROR=6;Pg.COMPLETE="complete";kg.EventType=Wi;Wi.OPEN="a";Wi.CLOSE="b";Wi.ERROR="c";Wi.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;jt.prototype.digest=jt.prototype.l;jt.prototype.reset=jt.prototype.reset;jt.prototype.update=jt.prototype.j;Re.prototype.add=Re.prototype.add;Re.prototype.multiply=Re.prototype.R;Re.prototype.modulo=Re.prototype.gb;Re.prototype.compare=Re.prototype.X;Re.prototype.toNumber=Re.prototype.ea;Re.prototype.toString=Re.prototype.toString;Re.prototype.getBits=Re.prototype.D;Re.fromNumber=Zt;Re.fromString=d_;var bb=function(){return new ia},Rb=function(){return ja()},Hc=qa,Sb=Pg,Cb=Fs,ef={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Pb=Qi,Eo=kg,kb=Fe,Db=jt,ur=Re;const tf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new _u("@firebase/firestore");function Wr(){return Ds.logLevel}function H(t,...e){if(Ds.logLevel<=me.DEBUG){const n=e.map(Zu);Ds.debug(`Firestore (${xr}): ${t}`,...n)}}function Tn(t,...e){if(Ds.logLevel<=me.ERROR){const n=e.map(Zu);Ds.error(`Firestore (${xr}): ${t}`,...n)}}function wr(t,...e){if(Ds.logLevel<=me.WARN){const n=e.map(Zu);Ds.warn(`Firestore (${xr}): ${t}`,...n)}}function Zu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${xr}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Se(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class Ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vb{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string"),new f_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ot(e)}}class Mb{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xb{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new Mb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new Lb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class m_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Ub(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Ee(t,e){return t<e?-1:t>e?1:0}function Er(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ne(0,0))}static max(){return new re(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(),s===void 0?s=e.length-n:s>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Ci{construct(e,n,s){return new Oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const $b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Ci{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return $b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Oe.fromString(e))}static fromName(e){return new K(Oe.fromString(e).popFirst(5))}static empty(){return new K(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Oe(e.slice()))}}function Bb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new Ne(n+1,0):new Ne(n,s));return new Gn(r,K.empty(),e)}function jb(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Gn(re.min(),K.empty(),-1)}static max(){return new Gn(re.max(),K.empty(),-1)}}function qb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Xi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Hb)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */function nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function p_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Je.RED,this.left=r??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Je(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new tt(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new g_("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=Gb.exec(t);if(Se(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nh(t){const e=t.mapValue.fields.__previous_value__;return th(e)?nh(e):e}function Pi(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ki&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?th(t)?4:Yb(t)?9007199254740991:10:ne()}function on(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pi(t).isEqual(Pi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Qn(r.timestampValue),a=Qn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ns(r.bytesValue).isEqual(Ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Be(r.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Be(r.integerValue)===Be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Be(r.doubleValue),a=Be(i.doubleValue);return o===a?ca(o)===ca(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Er(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(nf(o)!==nf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!on(o[c],a[c])))return!1;return!0}(t,e);default:return ne()}}function Di(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Ir(t,e){if(t===e)return 0;const n=Os(t),s=Os(e);if(n!==s)return Ee(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Be(i.integerValue||i.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return rf(t.timestampValue,e.timestampValue);case 4:return rf(Pi(t),Pi(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ns(i),c=Ns(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Ee(a[l],c[l]);if(u!==0)return u}return Ee(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ee(Be(i.latitude),Be(o.latitude));return a!==0?a:Ee(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ir(a[l],c[l]);if(u)return u}return Ee(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===To.mapValue&&o===To.mapValue)return 0;if(i===To.mapValue)return 1;if(o===To.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=Ee(c[h],u[h]);if(f!==0)return f;const m=Ir(a[c[h]],l[u[h]]);if(m!==0)return m}return Ee(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function rf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Qn(t),s=Qn(e),r=Ee(n.seconds,s.seconds);return r!==0?r:Ee(n.nanos,s.nanos)}function Tr(t){return Ml(t)}function Ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Qn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Ml(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Ml(n.fields[o])}`;return r+"}"}(t.mapValue):ne()}function of(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xl(t){return!!t&&"integerValue"in t}function sh(t){return!!t&&"arrayValue"in t}function af(t){return!!t&&"nullValue"in t}function cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lo(t){return!!t&&"mapValue"in t}function li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Us(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=li(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=li(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=li(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Lo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Us(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Et(li(this.value))}}function __(t){const e=[];return Us(t.fields,(n,s)=>{const r=new Ze([n]);if(Lo(s)){const i=__(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new at(e,0,re.min(),re.min(),re.min(),Et.empty(),0)}static newFoundDocument(e,n,s,r){return new at(e,1,n,re.min(),s,r,0)}static newNoDocument(e,n){return new at(e,2,n,re.min(),re.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,re.min(),re.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function lf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Ir(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function uf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ni{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class y_{}class je extends y_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Zb(e,n,s):n==="array-contains"?new n1(e,s):n==="in"?new s1(e,s):n==="not-in"?new r1(e,s):n==="array-contains-any"?new i1(e,s):new je(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new e1(e,s):new t1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ir(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(Ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends y_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new qt(e,n)}matches(e){return v_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function v_(t){return t.op==="and"}function w_(t){return Xb(t)&&v_(t)}function Xb(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Ll(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Tr(t.value);if(w_(t))return t.filters.map(e=>Ll(e)).join(",");{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function E_(t,e){return t instanceof je?function(s,r){return r instanceof je&&s.op===r.op&&s.field.isEqual(r.field)&&on(s.value,r.value)}(t,e):t instanceof qt?function(s,r){return r instanceof qt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&E_(o,r.filters[a]),!0):!1}(t,e):void ne()}function I_(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${Tr(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(I_).join(" ,")+"}"}(t):"Filter"}class Zb extends je{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class e1 extends je{constructor(e,n){super(e,"in",n),this.keys=T_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t1 extends je{constructor(e,n){super(e,"not-in",n),this.keys=T_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class n1 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sh(n)&&Di(n.arrayValue,this.value)}}class s1 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class r1 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Di(this.value.arrayValue,n)}}class i1 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Di(this.value.arrayValue,s))}}/**
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
 */class o1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function hf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new o1(t,e,n,s,r,i,o)}function rh(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ll(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tr(s)).join(",")),e.ue=n}return e.ue}function ih(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!E_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uf(t.startAt,e.startAt)&&uf(t.endAt,e.endAt)}function Fl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a1(t,e,n,s,r,i,o,a){return new Lr(t,e,n,s,r,i,o,a)}function Xa(t){return new Lr(t)}function df(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function A_(t){return t.collectionGroup!==null}function ui(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(Ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ni(i,s))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new Ni(Ze.keyField(),s))}return e.ce}function sn(t){const e=ie(t);return e.le||(e.le=c1(e,ui(t))),e.le}function c1(t,e){if(t.limitType==="F")return hf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Ni(r.field,i)});const n=t.endAt?new la(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new la(t.startAt.position,t.startAt.inclusive):null;return hf(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Ul(t,e){const n=t.filters.concat([e]);return new Lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $l(t,e,n){return new Lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Za(t,e){return ih(sn(t),sn(e))&&t.limitType===e.limitType}function b_(t){return`${rh(sn(t))}|lt:${t.limitType}`}function Xs(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>I_(r)).join(", ")}]`),Ja(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Tr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Tr(r)).join(",")),`Target(${s})`}(sn(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):K.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of ui(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=lf(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,ui(s),r)||s.endAt&&!function(o,a,c){const l=lf(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,ui(s),r))}(t,e)}function l1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function R_(t){return(e,n)=>{let s=!1;for(const r of ui(t)){const i=u1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function u1(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ir(c,l):ne()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Us(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return p_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new xe(K.comparator);function An(){return h1}const S_=new xe(K.comparator);function Xr(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=S_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function vs(){return hi()}function P_(){return hi()}function hi(){return new Fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const d1=new xe(K.comparator),f1=new tt(K.comparator);function fe(...t){let e=f1;for(const n of t)e=e.add(n);return e}const m1=new tt(Ee);function p1(){return m1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function D_(t){return{integerValue:""+t}}function N_(t,e){return Kb(e)?D_(e):k_(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function g1(t,e,n){return t instanceof Oi?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&th(i)&&(i=nh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ar?V_(t,e):t instanceof br?M_(t,e):function(r,i){const o=O_(r,i),a=ff(o)+ff(r.Pe);return xl(o)&&xl(r.Pe)?D_(a):k_(r.serializer,a)}(t,e)}function _1(t,e,n){return t instanceof Ar?V_(t,e):t instanceof br?M_(t,e):n}function O_(t,e){return t instanceof Vi?function(s){return xl(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Oi extends tc{}class Ar extends tc{constructor(e){super(),this.elements=e}}function V_(t,e){const n=x_(e);for(const s of t.elements)n.some(r=>on(r,s))||n.push(s);return{arrayValue:{values:n}}}class br extends tc{constructor(e){super(),this.elements=e}}function M_(t,e){let n=x_(e);for(const s of t.elements)n=n.filter(r=>!on(r,s));return{arrayValue:{values:n}}}class Vi extends tc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ff(t){return Be(t.integerValue||t.doubleValue)}function x_(t){return sh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.field=e,this.transform=n}}function y1(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Ar&&r instanceof Ar||s instanceof br&&r instanceof br?Er(s.elements,r.elements,on):s instanceof Vi&&r instanceof Vi?on(s.Pe,r.Pe):s instanceof Oi&&r instanceof Oi}(t.transform,e.transform)}class v1{constructor(e,n){this.version=e,this.transformResults=n}}class Tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rc(t.key,Tt.none()):new eo(t.key,t.data,Tt.none());{const n=t.data,s=Et.empty();let r=new tt(Ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rs(t.key,s,new Pt(r.toArray()),Tt.none())}}function w1(t,e,n){t instanceof eo?function(r,i,o){const a=r.value.clone(),c=pf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(r,i,o){if(!Fo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=pf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(F_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function di(t,e,n,s){return t instanceof eo?function(i,o,a,c){if(!Fo(i.precondition,o))return a;const l=i.value.clone(),u=gf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof rs?function(i,o,a,c){if(!Fo(i.precondition,o))return a;const l=gf(i.fieldTransforms,c,o),u=o.data;return u.setAll(F_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Fo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function E1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=O_(s.transform,r||null);i!=null&&(n===null&&(n=Et.empty()),n.set(s.field,i))}return n||null}function mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Er(s,r,(i,o)=>y1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class eo extends sc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rs extends sc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function F_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pf(t,e,n){const s=new Map;Se(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,_1(o,a,n[r]))}return s}function gf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,g1(i,o,e))}return s}class rc extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I1 extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&w1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=di(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=di(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=P_();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=L_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,(n,s)=>mf(n,s))&&Er(this.baseMutations,e.baseMutations,(n,s)=>mf(n,s))}}class oh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Se(e.mutations.length===s.length);let r=function(){return d1}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new oh(e,n,s,r)}}/**
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
 */var Ue,pe;function R1(t){switch(t){default:return ne();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function U_(t){if(t===void 0)return Tn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ue.OK:return A.OK;case Ue.CANCELLED:return A.CANCELLED;case Ue.UNKNOWN:return A.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return A.INTERNAL;case Ue.UNAVAILABLE:return A.UNAVAILABLE;case Ue.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ue.NOT_FOUND:return A.NOT_FOUND;case Ue.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ue.ABORTED:return A.ABORTED;case Ue.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ue.DATA_LOSS:return A.DATA_LOSS;default:return ne()}}(pe=Ue||(Ue={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const C1=new ur([4294967295,4294967295],0);function _f(t){const e=S1().encode(t),n=new Db;return n.update(e),new Uint8Array(n.digest())}function yf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ur([n,s],0),new ur([r,i],0)]}class ah{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Zr(`Invalid padding: ${n}`);if(s<0)throw new Zr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Zr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Zr(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ur.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(ur.fromNumber(s)));return r.compare(C1)===1&&(r=new ur([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_f(e),[s,r]=yf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ah(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=_f(e),[s,r]=yf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,to.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ic(re.min(),r,new xe(Ee),An(),fe())}}class to{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new to(s,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class $_{constructor(e,n){this.targetId=e,this.me=n}}class B_{constructor(e,n,s=mt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class vf{constructor(){this.fe=0,this.ge=Ef(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=fe(),n=fe(),s=fe();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ne()}}),new to(this.pe,this.ye,e,n,s)}ve(){this.we=!1,this.ge=Ef()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class P1{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=wf(),this.Qe=new xe(Ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.ve(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(Fl(i))if(s===0){const o=new K(i.path);this.Ue(n,o,at.newNoDocument(o,re.min()))}else Se(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Ns(s).toUint8Array()}catch(c){if(c instanceof g_)return wr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ah(o,r,i)}catch(c){return wr(c instanceof Zr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Fl(a.target)){const c=new K(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,at.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let s=fe();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new ic(e,n,this.Qe,this.ke,s);return this.ke=An(),this.qe=wf(),this.Qe=new xe(Ee),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new vf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(Ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wf(){return new xe(K.comparator)}function Ef(){return new xe(K.comparator)}const k1={asc:"ASCENDING",desc:"DESCENDING"},D1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N1={and:"AND",or:"OR"};class O1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bl(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V1(t,e){return ua(t,e.toTimestamp())}function rn(t){return Se(!!t),re.fromTimestamp(function(n){const s=Qn(n);return new Ne(s.seconds,s.nanos)}(t))}function ch(t,e){return jl(t,e).canonicalString()}function jl(t,e){const n=function(r){return new Oe(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q_(t){const e=Oe.fromString(t);return Se(G_(e)),e}function ql(t,e){return ch(t.databaseId,e.path)}function zc(t,e){const n=q_(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(z_(n))}function H_(t,e){return ch(t.databaseId,e)}function M1(t){const e=q_(t);return e.length===4?Oe.emptyPath():z_(e)}function Hl(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function If(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function x1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Se(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(Se(u===void 0||u instanceof Buffer||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:U_(l.code);return new q(u,l.message||"")}(o);n=new B_(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=zc(t,s.document.name),i=rn(s.document.updateTime),o=s.document.createTime?rn(s.document.createTime):re.min(),a=new Et({mapValue:{fields:s.document.fields}}),c=at.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Uo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=zc(t,s.document),i=s.readTime?rn(s.readTime):re.min(),o=at.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Uo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=zc(t,s.document),i=s.removedTargetIds||[];n=new Uo([],i,r,null)}else{if(!("filter"in e))return ne();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new b1(r,i),a=s.targetId;n=new $_(a,o)}}return n}function L1(t,e){let n;if(e instanceof eo)n={update:If(t,e.key,e.value)};else if(e instanceof rc)n={delete:ql(t,e.key)};else if(e instanceof rs)n={update:If(t,e.key,e.data),updateMask:W1(e.fieldMask)};else{if(!(e instanceof I1))return ne();n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ar)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof br)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ne()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:V1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function F1(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?rn(r.updateTime):rn(i);return o.isEqual(re.min())&&(o=rn(i)),new v1(o,r.transformResults||[])}(n,e))):[]}function U1(t,e){return{documents:[H_(t,e.path)]}}function $1(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=H_(t,r);const i=function(l){if(l.length!==0)return K_(qt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Zs(f.field),direction:q1(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:r}}function B1(t){let e=M1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Se(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=W_(h);return f instanceof qt&&w_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new Ni(er(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ja(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new la(m,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new la(m,f)}(n.endAt)),a1(e,r,o,i,a,"F",c,l)}function j1(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function W_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=er(n.unaryFilter.field);return je.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=er(n.unaryFilter.field);return je.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=er(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=er(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return je.create(er(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(s=>W_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function q1(t){return k1[t]}function H1(t){return D1[t]}function z1(t){return N1[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function er(t){return Ze.fromServerFormat(t.fieldPath)}function K_(t){return t instanceof je?function(n){if(n.op==="=="){if(cf(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NAN"}};if(af(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cf(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NAN"}};if(af(n.value))return{unaryFilter:{field:Zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(n.field),op:H1(n.op),value:n.value}}}(t):t instanceof qt?function(n){const s=n.getFilters().map(r=>K_(r));return s.length===1?s[0]:{compositeFilter:{op:z1(n.op),filters:s}}}(t):ne()}function W1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function G_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,s,r,i=re.min(),o=re.min(),a=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q1{constructor(){this.on=new Y1}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Gn.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class Y1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new tt(Oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new tt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Rr(0)}static Nn(){return new Rr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.changes=new Fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Z1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&di(s.mutation,r,Pt.empty(),Ne.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,fe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=fe()){const r=vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Xr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,fe()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=An();const o=hi(),a=function(){return hi()}();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof rs)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),di(u.mutation,l,u.mutation.getFieldMask(),Ne.now())):o.set(l.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new X1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=hi();let r=new xe((o,a)=>o-a),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Pt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||fe()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=P_();u.forEach(f=>{if(!i.has(f)){const m=L_(n.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):A_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(vs());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,fe())).next(u=>({batchId:a,changes:C_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=Xr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Xr();return this.indexManager.getCollectionParents(e,i).next(a=>C.forEach(a,c=>{const l=function(h,f){return new Lr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s,r).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,at.newInvalidDocument(u)))});let a=Xr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&di(u.mutation,l,Pt.empty(),Ne.now()),ec(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:rn(r.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:G1(r.bundledQuery),readTime:rn(r.readTime)}}(n)),C.resolve()}}/**
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
 */class tR{constructor(){this.overlays=new xe(K.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=vs();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=vs(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new xe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=vs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new A1(n,s));let i=this.lr.get(n);i===void 0&&(i=fe(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.hr=new tt(We.Pr),this.Ir=new tt(We.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new We(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new We(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new K(new Oe([])),s=new We(n,e),r=new We(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new K(new Oe([])),s=new We(n,e),r=new We(n,e+1);let i=fe();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class We{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return K.comparator(e.key,n.key)||Ee(e.gr,n.gr)}static Tr(e,n){return Ee(e.gr,n.gr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new tt(We.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new T1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new We(n,0),r=new We(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new tt(Ee);return n.forEach(r=>{const i=new We(r,0),o=new We(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),C.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let a=new tt(Ee);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Se(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return C.forEach(n.mutations,r=>{const i=new We(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new We(n,0),r=this.yr.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.Cr=e,this.docs=function(){return new xe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let s=An();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():at.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=An();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||qb(jb(u),s)<=0||(r.has(u.key)||ec(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ne()}vr(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new rR(this)}getSize(e){return C.resolve(this.size)}}class rR extends J1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.persistence=e,this.Fr=new Fr(n=>rh(n),ih),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Mr=0,this.Or=new lh,this.targetCount=0,this.Nr=Rr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Rr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.Lr={},this.overlays={},this.Br=new eh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new iR(this),this.indexManager=new Q1,this.remoteDocumentCache=function(r){return new sR(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new K1(n),this.Kr=new eR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Lr[e.toKey()];return s||(s=new nR(n,this.referenceDelegate),this.Lr[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){H("MemoryPersistence","Starting transaction:",e);const r=new aR(this.Br.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return C.or(Object.values(this.Lr).map(s=>()=>s.containsKey(e,n)))}}class aR extends zb{constructor(e){super(),this.currentSequenceNumber=e}}class uh{constructor(e){this.persistence=e,this.Gr=new lh,this.zr=null}static jr(e){return new uh(e)}get Hr(){if(this.zr)return this.zr;throw ne()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,s=>{const r=K.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,re.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=fe(),r=fe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hh(e,n.fromCache,s,r)}}/**
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
 */class lR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return W0()?8:Wb(nt())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Wr()<=me.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Wr()<=me.DEBUG&&H("QueryEngine","Query:",Xs(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Wr()<=me.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):C.resolve())}zi(e,n){if(df(n))return C.resolve(null);let s=sn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=$l(n,null,"F"),s=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=fe(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,$l(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,s,r){return df(n)||r.isEqual(re.min())?C.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?C.resolve(null):(Wr()<=me.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xs(n)),this.Xi(e,o,n,Bb(r,-1)).next(a=>a))})}Yi(e,n){let s=new tt(R_(e));return n.forEach((r,i)=>{ec(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Wr()<=me.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.Gi.getDocumentsMatchingQuery(e,n,Gn.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new xe(Ee),this.ns=new Fr(i=>rh(i),ih),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function hR(t,e,n,s){return new uR(t,e,n,s)}async function Q_(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=fe();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function dR(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let m=C.resolve();return f.forEach(v=>{m=m.next(()=>u.getEntry(c,v)).next(g=>{const E=l.docVersions.get(v);Se(E!==null),g.version.compareTo(E)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=fe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Y_(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function fR(t,e){const n=ie(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(mt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(g,E,S){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=An(),l=fe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(mR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!s.isEqual(re.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=r,i))}function mR(t,e,n){let s=fe(),r=fe();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=An();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:r}})}function pR(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function gR(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new Un(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function zl(t,e,n){const s=ie(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Zi(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function Tf(t,e,n){const s=ie(t);let r=re.min(),i=fe();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ie(c),f=h.ns.get(u);return f!==void 0?C.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(s,o,sn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?i:fe())).next(a=>(_R(s,l1(e),a),{documents:a,ls:i})))}function _R(t,e,n){let s=t.rs.get(e)||re.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class Af{constructor(){this.activeTargetIds=p1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yR{constructor(){this.eo=new Af,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Af,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ao=null;function Wc(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const it="WebChannelConnection";class IR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=s+"://"+n.host,this.wo=`projects/${r}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get bo(){return!1}Do(n,s,r,i,o){const a=Wc(),c=this.Co(n,s.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,r).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw wr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",r),u})}Mo(n,s,r,i,o,a){return this.Do(n,s,r,i,o)}vo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}Co(n,s){const r=wR[n];return`${this.yo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,s,r){const i=Wc();return new Promise((o,a)=>{const c=new kb;c.setWithCredentials(!0),c.listenOnce(Sb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hc.NO_ERROR:const u=c.getResponseJson();H(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Hc.TIMEOUT:H(it,`RPC '${e}' ${i} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case Hc.HTTP_ERROR:const h=c.getStatus();if(H(it,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const v=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(S)>=0?S:A.UNKNOWN}(m.status);a(new q(v,m.message))}else a(new q(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{H(it,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);H(it,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}xo(e,n,s){const r=Wc(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bb(),a=Rb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Pb({})),this.vo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");H(it,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const v=new ER({co:E=>{m?H(it,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(f||(H(it,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),H(it,`RPC '${e}' stream ${r} sending:`,E),h.send(E))},lo:()=>h.close()}),g=(E,S,F)=>{E.listen(S,U=>{try{F(U)}catch(W){setTimeout(()=>{throw W},0)}})};return g(h,Eo.EventType.OPEN,()=>{m||(H(it,`RPC '${e}' stream ${r} transport opened.`),v.Vo())}),g(h,Eo.EventType.CLOSE,()=>{m||(m=!0,H(it,`RPC '${e}' stream ${r} transport closed`),v.fo())}),g(h,Eo.EventType.ERROR,E=>{m||(m=!0,wr(it,`RPC '${e}' stream ${r} transport errored:`,E),v.fo(new q(A.UNAVAILABLE,"The operation could not be completed")))}),g(h,Eo.EventType.MESSAGE,E=>{var S;if(!m){const F=E.data[0];Se(!!F);const U=F,W=U.error||((S=U[0])===null||S===void 0?void 0:S.error);if(W){H(it,`RPC '${e}' stream ${r} received error:`,W);const le=W.status;let G=function(Ye){const qe=Ue[Ye];if(qe!==void 0)return U_(qe)}(le),Te=W.message;G===void 0&&(G=A.INTERNAL,Te="Unknown error status: "+le+" with message "+W.message),m=!0,v.fo(new q(G,Te)),h.close()}else H(it,`RPC '${e}' stream ${r} received:`,F),v.po(F)}}),g(a,Cb.STAT_EVENT,E=>{E.stat===ef.PROXY?H(it,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===ef.NOPROXY&&H(it,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.mo()},0),v}}function Kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=s,this.No=r,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),s=Math.max(0,Date.now()-this.qo),r=Math.max(0,n-s);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Wo=s,this.Go=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new J_(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.zo===n&&this.a_(s,r)},s=>{e(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.u_(r)})})}a_(e,n){const s=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{s(()=>this.listener.ho())}),this.stream.Io(()=>{s(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(r=>{s(()=>this.u_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TR extends X_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=x1(this.serializer,e),s=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?rn(o.readTime):re.min()}(e);return this.listener.l_(n,s)}h_(e){const n={};n.database=Hl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Fl(c)?{documents:U1(i,c)}:{query:$1(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=j_(i,o.resumeToken);const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=ua(i,o.snapshotVersion.toTimestamp());const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const s=j1(this.serializer,e);s&&(n.labels=s),this.r_(n)}P_(e){const n={};n.database=Hl(this.serializer),n.removeTarget=e,this.r_(n)}}class AR extends X_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=F1(e.writeResults,e.commitTime),s=rn(e.commitTime);return this.listener.d_(s,n)}return Se(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Hl(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>L1(this.serializer,s))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.V_=!1}m_(){if(this.V_)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,s,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,jl(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(A.UNKNOWN,i.toString())})}Mo(e,n,s,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,jl(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(A.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class RR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Tn(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{s.enqueueAndForget(async()=>{$s(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ie(c);l.M_.add(4),await no(l),l.N_.set("Unknown"),l.M_.delete(4),await ac(l)}(this))})}),this.N_=new RR(s,r)}}async function ac(t){if($s(t))for(const e of t.x_)await e(!0)}async function no(t){for(const e of t.x_)await e(!1)}function Z_(t,e){const n=ie(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ph(n)?mh(n):Ur(n).Zo()&&fh(n,e))}function dh(t,e){const n=ie(t),s=Ur(n);n.F_.delete(e),s.Zo()&&ey(n,e),n.F_.size===0&&(s.Zo()?s.t_():$s(n)&&n.N_.set("Unknown"))}function fh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ur(t).h_(e)}function ey(t,e){t.L_.xe(e),Ur(t).P_(e)}function mh(t){t.L_=new P1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ur(t).start(),t.N_.w_()}function ph(t){return $s(t)&&!Ur(t).Yo()&&t.F_.size>0}function $s(t){return ie(t).M_.size===0}function ty(t){t.L_=void 0}async function CR(t){t.N_.set("Online")}async function PR(t){t.F_.forEach((e,n)=>{fh(t,e)})}async function kR(t,e){ty(t),ph(t)?(t.N_.D_(e),mh(t)):t.N_.set("Unknown")}async function DR(t,e,n){if(t.N_.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.F_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.F_.delete(a),r.L_.removeTarget(a))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ha(t,s)}else if(e instanceof Uo?t.L_.Ke(e):e instanceof $_?t.L_.He(e):t.L_.We(e),!n.isEqual(re.min()))try{const s=await Y_(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(mt.EMPTY_BYTE_STRING,u.snapshotVersion)),ey(i,c);const h=new Un(u.target,c,l,u.sequenceNumber);fh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await ha(t,s)}}async function ha(t,e,n){if(!Zi(e))throw e;t.M_.add(1),await no(t),t.N_.set("Offline"),n||(n=()=>Y_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ac(t)})}function ny(t,e){return e().catch(n=>ha(t,n,e))}async function cc(t){const e=ie(t),n=Yn(e);let s=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;NR(e);)try{const r=await pR(e.localStore,s);if(r===null){e.v_.length===0&&n.t_();break}s=r.batchId,OR(e,r)}catch(r){await ha(e,r)}sy(e)&&ry(e)}function NR(t){return $s(t)&&t.v_.length<10}function OR(t,e){t.v_.push(e);const n=Yn(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function sy(t){return $s(t)&&!Yn(t).Yo()&&t.v_.length>0}function ry(t){Yn(t).start()}async function VR(t){Yn(t).R_()}async function MR(t){const e=Yn(t);for(const n of t.v_)e.E_(n.mutations)}async function xR(t,e,n){const s=t.v_.shift(),r=oh.from(s,e,n);await ny(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await cc(t)}async function LR(t,e){e&&Yn(t).T_&&await async function(s,r){if(function(o){return R1(o)&&o!==A.ABORTED}(r.code)){const i=s.v_.shift();Yn(s).e_(),await ny(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await cc(s)}}(t,e),sy(t)&&ry(t)}async function Rf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=$s(n);n.M_.add(3),await no(n),s&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ac(n)}async function FR(t,e){const n=ie(t);e?(n.M_.delete(2),await ac(n)):e||(n.M_.add(2),await no(n),n.N_.set("Unknown"))}function Ur(t){return t.B_||(t.B_=function(n,s,r){const i=ie(n);return i.m_(),new TR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:CR.bind(null,t),Io:PR.bind(null,t),Eo:kR.bind(null,t),l_:DR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),ph(t)?mh(t):t.N_.set("Unknown")):(await t.B_.stop(),ty(t))})),t.B_}function Yn(t){return t.k_||(t.k_=function(n,s,r){const i=ie(n);return i.m_(),new AR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:VR.bind(null,t),Eo:LR.bind(null,t),A_:MR.bind(null,t),d_:xR.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await cc(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new gh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _h(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Zi(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=Xr(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new hr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.q_=new xe(K.comparator)}track(e){const n=e.doc.key,s=this.q_.get(n);s?e.type!==0&&s.type===3?this.q_=this.q_.insert(n,e):e.type===3&&s.type!==1?this.q_=this.q_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.q_=this.q_.remove(n):e.type===1&&s.type===2?this.q_=this.q_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ne():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Sr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Sr(e,n,hr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Za(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class $R{constructor(){this.queries=new Fr(e=>b_(e),Za),this.onlineState="Unknown",this.z_=new Set}}async function iy(t,e){const n=ie(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.W_()&&e.G_()&&(s=2):(i=new UR,s=e.G_()?0:1);try{switch(s){case 0:i.K_=await n.onListen(r,!0);break;case 1:i.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=_h(o,`Initialization of query '${Xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&yh(n)}async function oy(t,e){const n=ie(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?r=e.G_()?0:1:!i.W_()&&e.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function BR(t,e){const n=ie(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(r)&&(s=!0);o.K_=r}}s&&yh(n)}function jR(t,e,n){const s=ie(t),r=s.queries.get(e);if(r)for(const i of r.U_)i.onError(n);s.queries.delete(e)}function yh(t){t.z_.forEach(e=>{e.next()})}var Wl,Cf;(Cf=Wl||(Wl={})).J_="default",Cf.Cache="cache";class ay{constructor(e,n,s){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=s||{}}H_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Sr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const s=n!=="Offline";return(!this.options.ra||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Wl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.key=e}}class ly{constructor(e){this.key=e}}class qR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=fe(),this.mutatedKeys=fe(),this.Ia=R_(e),this.Ta=new hr(this.Ia)}get Ea(){return this.la}da(e,n){const s=n?n.Aa:new Sf,r=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),m=ec(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),g=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;f&&m?f.data.isEqual(m.data)?v!==g&&(s.track({type:3,doc:m}),E=!0):this.Ra(f,m)||(s.track({type:2,doc:m}),E=!0,(c&&this.Ia(m,c)>0||l&&this.Ia(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),E=!0):f&&!m&&(s.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(m?(o=o.add(m),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ta:o,Aa:s,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(m,v){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return g(m)-g(v)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(s),r=r!=null&&r;const a=n&&!r?this.ma():[],c=this.Pa.size===0&&this.current&&!r?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new Sr(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Sf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=fe(),this.Ta.forEach(s=>{this.ga(s.key)&&(this.Pa=this.Pa.add(s.key))});const n=[];return e.forEach(s=>{this.Pa.has(s)||n.push(new ly(s))}),this.Pa.forEach(s=>{e.has(s)||n.push(new cy(s))}),n}pa(e){this.la=e.ls,this.Pa=fe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Sr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class HR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class zR{constructor(e){this.key=e,this.wa=!1}}class WR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Fr(a=>b_(a),Za),this.Da=new Map,this.Ca=new Set,this.va=new xe(K.comparator),this.Fa=new Map,this.Ma=new lh,this.xa={},this.Oa=new Map,this.Na=Rr.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function KR(t,e,n=!0){const s=py(t);let r;const i=s.ba.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.ya()):r=await uy(s,e,n,!0),r}async function GR(t,e){const n=py(t);await uy(n,e,!0,!1)}async function uy(t,e,n,s){const r=await gR(t.localStore,sn(e)),i=r.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return s&&(a=await QR(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&Z_(t.remoteStore,r),a}async function QR(t,e,n,s,r){t.Ba=(h,f,m)=>async function(g,E,S,F){let U=E.view.da(S);U.Zi&&(U=await Tf(g.localStore,E.query,!1).then(({documents:Te})=>E.view.da(Te,U)));const W=F&&F.targetChanges.get(E.targetId),le=F&&F.targetMismatches.get(E.targetId)!=null,G=E.view.applyChanges(U,g.isPrimaryClient,W,le);return kf(g,E.targetId,G.fa),G.snapshot}(t,h,f,m);const i=await Tf(t.localStore,e,!0),o=new qR(e,i.ls),a=o.da(i.documents),c=to.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);kf(t,n,l.fa);const u=new HR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function YR(t,e,n){const s=ie(t),r=s.ba.get(e),i=s.Da.get(r.targetId);if(i.length>1)return s.Da.set(r.targetId,i.filter(o=>!Za(o,e))),void s.ba.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await zl(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&dh(s.remoteStore,r.targetId),Kl(s,r.targetId)}).catch(Xi)):(Kl(s,r.targetId),await zl(s.localStore,r.targetId,!0))}async function JR(t,e){const n=ie(t),s=n.ba.get(e),r=n.Da.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),dh(n.remoteStore,s.targetId))}async function XR(t,e,n){const s=iS(t);try{const r=await function(o,a){const c=ie(o),l=Ne.now(),u=a.reduce((m,v)=>m.add(v.key),fe());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=An(),g=fe();return c.ss.getEntries(m,u).next(E=>{v=E,v.forEach((S,F)=>{F.isValidDocument()||(g=g.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(E=>{h=E;const S=[];for(const F of a){const U=E1(F,h.get(F.key).overlayedDocument);U!=null&&S.push(new rs(F.key,U,__(U.value.mapValue),Tt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,S,a)}).next(E=>{f=E;const S=E.applyToLocalDocumentSet(h,g);return c.documentOverlayCache.saveOverlays(m,E.batchId,S)})}).then(()=>({batchId:f.batchId,changes:C_(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new xe(Ee)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(s,r.batchId,n),await so(s,r.changes),await cc(s.remoteStore)}catch(r){const i=_h(r,"Failed to persist write");n.reject(i)}}async function hy(t,e){const n=ie(t);try{const s=await fR(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Fa.get(i);o&&(Se(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.wa=!0:r.modifiedDocuments.size>0?Se(o.wa):r.removedDocuments.size>0&&(Se(o.wa),o.wa=!1))}),await so(n,s,e)}catch(s){await Xi(s)}}function Pf(t,e,n){const s=ie(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=ie(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(l=!0)}),l&&yh(c)}(s.eventManager,e),r.length&&s.Sa.l_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZR(t,e,n){const s=ie(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Fa.get(e),i=r&&r.key;if(i){let o=new xe(K.comparator);o=o.insert(i,at.newNoDocument(i,re.min()));const a=fe().add(i),c=new ic(re.min(),new Map,new xe(Ee),o,a);await hy(s,c),s.va=s.va.remove(i),s.Fa.delete(e),vh(s)}else await zl(s.localStore,e,!1).then(()=>Kl(s,e,n)).catch(Xi)}async function eS(t,e){const n=ie(t),s=e.batch.batchId;try{const r=await dR(n.localStore,e);fy(n,s,null),dy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await so(n,r)}catch(r){await Xi(r)}}async function tS(t,e,n){const s=ie(t);try{const r=await function(o,a){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Se(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,e);fy(s,e,n),dy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await so(s,r)}catch(r){await Xi(r)}}function dy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function fy(t,e,n){const s=ie(t);let r=s.xa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.xa[s.currentUser.toKey()]=r}}function Kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Da.get(e))t.ba.delete(s),n&&t.Sa.ka(s,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(s=>{t.Ma.containsKey(s)||my(t,s)})}function my(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(dh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),vh(t))}function kf(t,e,n){for(const s of n)s instanceof cy?(t.Ma.addReference(s.key,e),nS(t,s)):s instanceof ly?(H("SyncEngine","Document no longer in limbo: "+s.key),t.Ma.removeReference(s.key,e),t.Ma.containsKey(s.key)||my(t,s.key)):ne()}function nS(t,e){const n=e.key,s=n.path.canonicalString();t.va.get(n)||t.Ca.has(s)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(s),vh(t))}function vh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new K(Oe.fromString(e)),s=t.Na.next();t.Fa.set(s,new zR(n)),t.va=t.va.insert(n,s),Z_(t.remoteStore,new Un(sn(Xa(n.path)),s,"TargetPurposeLimboResolution",eh.oe))}}async function so(t,e,n){const s=ie(t),r=[],i=[],o=[];s.ba.isEmpty()||(s.ba.forEach((a,c)=>{o.push(s.Ba(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=hh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Sa.l_(r),await async function(c,l){const u=ie(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,f=>C.forEach(f.ki,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>C.forEach(f.qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Zi(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=u.ts.get(f),v=m.snapshotVersion,g=m.withLastLimboFreeSnapshotVersion(v);u.ts=u.ts.insert(f,g)}}}(s.localStore,i))}async function sS(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const s=await Q_(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new q(A.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await so(n,s._s)}}function rS(t,e){const n=ie(t),s=n.Fa.get(e);if(s&&s.wa)return fe().add(s.key);{let r=fe();const i=n.Da.get(e);if(!i)return r;for(const o of i){const a=n.ba.get(o);r=r.unionWith(a.view.Ea)}return r}}function py(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZR.bind(null,e),e.Sa.l_=BR.bind(null,e.eventManager),e.Sa.ka=jR.bind(null,e.eventManager),e}function iS(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tS.bind(null,e),e}class Df{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hR(this.persistence,new lR,e.initialUser,this.serializer)}createPersistence(e){return new oR(uh.jr,this.serializer)}createSharedClientState(e){return new yR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sS.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $R}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),s=function(i){return new IR(i)}(e.databaseInfo);return function(i,o,a,c){return new bR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new SR(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Pf(this.syncEngine,n,0),function(){return bf.D()?new bf:new vR}())}createSyncEngine(e,n){return function(r,i,o,a,c,l,u){const h=new WR(r,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(s){const r=ie(s);H("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await no(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=m_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=_h(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Q_(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lS(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Rf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Rf(e.remoteStore,r)),t._onlineComponents=e}function cS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function lS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cS(n))throw n;wr("Error using user provided cache. Falling back to memory cache: "+n),await Gc(t,new Df)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Gc(t,new Df);return t._offlineComponents}async function _y(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Nf(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Nf(t,new oS))),t._onlineComponents}function uS(t){return _y(t).then(e=>e.syncEngine)}async function Gl(t){const e=await _y(t),n=e.eventManager;return n.onListen=KR.bind(null,e.syncEngine),n.onUnlisten=YR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JR.bind(null,e.syncEngine),n}function hS(t,e,n={}){const s=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new gy({next:f=>{o.enqueueAndForget(()=>oy(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new ay(Xa(a.path),u,{includeMetadataChanges:!0,ra:!0});return iy(i,h)}(await Gl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function vy(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dS(t,e,n,s){if(e===!0&&s===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!K.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(K.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lc(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Nb;switch(s.type){case"firstParty":return new xb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Of.get(n);s&&(H("ComponentProvider","Removing Datastore"),Of.delete(n),s.terminate())}(this),Promise.resolve()}}function fS(t,e,n,s={}){var r;const i=(t=Vt(t,uc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ot.MOCK_USER;else{a=$0(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ot(l)}t._authCredentials=new Ob(new f_(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Bs(this.firestore,e,this._query)}}class ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Wn extends Bs{constructor(e,n,s){super(e,n,Xa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new K(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function Kt(t,e,...n){if(t=Le(t),vy("collection","path",e),t instanceof uc){const s=Oe.fromString(e,...n);return Mf(s),new Wn(t,null,s)}{if(!(t instanceof ft||t instanceof Wn))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return Mf(s),new Wn(t.firestore,null,s)}}function $e(t,e,...n){if(t=Le(t),arguments.length===1&&(e=m_.newId()),vy("doc","path",e),t instanceof uc){const s=Oe.fromString(e,...n);return Vf(s),new ft(t,null,new K(s))}{if(!(t instanceof ft||t instanceof Wn))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return Vf(s),new ft(t.firestore,t instanceof Wn?t.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new J_(this,"async_queue_retry"),this.hu=()=>{const n=Kc();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new zn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Zi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Tn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.uu=!1,s))));return this.iu=n,n}enqueueAfterDelay(e,n,s){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const r=gh.createAndSchedule(this,e,n,s,i=>this.Eu(i));return this._u.push(r),r}Pu(){this.au&&ne()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Lf(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Jn extends uc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new mS}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wy(this),this._firestoreClient.terminate()}}function pS(t,e){const n=typeof t=="object"?t:kp(),s=typeof t=="string"?t:"(default)",r=vu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=F0("firestore");i&&fS(r,...i)}return r}function hc(t){return t._firestoreClient||wy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wy(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,l,u){return new Qb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new aS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cr(mt.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cr(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/^__.*__$/;class _S{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new eo(e,this.data,n,this.fieldTransforms)}}class Ey{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Iy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class dc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new dc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.wu(e),r}Su(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return da(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Iy(this.fu)&&gS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class yS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||oc(e)}Fu(e,n,s,r=!1){return new dc({fu:e,methodName:n,vu:s,path:Ze.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fc(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new yS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ty(t,e,n,s,r,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,r);bh("Data must be an object, but it was:",o,s);const a=Sy(s,o);let c,l;if(i.merge)c=new Pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Ql(e,h,n);if(!o.contains(f))throw new q(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Py(u,f)||u.push(f)}c=new Pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new _S(new Et(a),c,l)}class mc extends js{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function Ay(t,e,n){return new dc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Eh extends js{_toFieldTransform(e){return new nc(e.path,new Oi)}isEqual(e){return e instanceof Eh}}class Ih extends js{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Ay(this,e,!0),s=this.Mu.map(i=>qs(i,n)),r=new Ar(s);return new nc(e.path,r)}isEqual(e){return e instanceof Ih&&gr(this.Mu,e.Mu)}}class Th extends js{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Ay(this,e,!0),s=this.Mu.map(i=>qs(i,n)),r=new br(s);return new nc(e.path,r)}isEqual(e){return e instanceof Th&&gr(this.Mu,e.Mu)}}class Ah extends js{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Vi(e.serializer,N_(e.serializer,this.xu));return new nc(e.path,n)}isEqual(e){return e instanceof Ah&&this.xu===e.xu}}function by(t,e,n,s){const r=t.Fu(1,e,n);bh("Data must be an object, but it was:",r,s);const i=[],o=Et.empty();Us(s,(c,l)=>{const u=Rh(e,c,n);l=Le(l);const h=r.Su(u);if(l instanceof mc)i.push(u);else{const f=qs(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Pt(i);return new Ey(o,a,r.fieldTransforms)}function Ry(t,e,n,s,r,i){const o=t.Fu(1,e,n),a=[Ql(e,s,n)],c=[r];if(i.length%2!=0)throw new q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ql(e,i[f])),c.push(i[f+1]);const l=[],u=Et.empty();for(let f=a.length-1;f>=0;--f)if(!Py(l,a[f])){const m=a[f];let v=c[f];v=Le(v);const g=o.Su(m);if(v instanceof mc)l.push(m);else{const E=qs(v,g);E!=null&&(l.push(m),u.set(m,E))}}const h=new Pt(l);return new Ey(u,h,o.fieldTransforms)}function vS(t,e,n,s=!1){return qs(n,t.Fu(s?4:3,e))}function qs(t,e){if(Cy(t=Le(t)))return bh("Unsupported field value:",e,t),Sy(t,e);if(t instanceof js)return function(s,r){if(!Iy(r.fu))throw r.Du(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=qs(a,r.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Le(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return N_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ne.fromDate(s);return{timestampValue:ua(r.serializer,i)}}if(s instanceof Ne){const i=new Ne(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ua(r.serializer,i)}}if(s instanceof wh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Cr)return{bytesValue:j_(r.serializer,s._byteString)};if(s instanceof ft){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ch(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.Du(`Unsupported field value: ${lc(s)}`)}(t,e)}function Sy(t,e){const n={};return p_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Us(t,(s,r)=>{const i=qs(r,e.pu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof wh||t instanceof Cr||t instanceof ft||t instanceof js)}function bh(t,e,n){if(!Cy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=lc(n);throw s==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+s)}}function Ql(t,e,n){if((e=Le(e))instanceof ro)return e._internalPath;if(typeof e=="string")return Rh(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const wS=new RegExp("[~\\*/\\[\\]]");function Rh(t,e,n){if(e.search(wS)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ro(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(A.INVALID_ARGUMENT,a+t+c)}function Py(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ES(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ES extends ky{data(){return super.data()}}function pc(t,e){return typeof e=="string"?Rh(t,e):e instanceof ro?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sh{}class Dy extends Sh{}function ds(t,e,...n){let s=[];e instanceof Sh&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof Ch).length,a=i.filter(c=>c instanceof gc).length;if(o>1||o>0&&a>0)throw new q(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class gc extends Dy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new gc(e,n,s)}_apply(e){const n=this._parse(e);return Ny(e._query,n),new Bs(e.firestore,e.converter,Ul(e._query,n))}_parse(e){const n=fc(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new q(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Uf(h,u);const m=[];for(const v of h)m.push(Ff(c,i,v));f={arrayValue:{values:m}}}else f=Ff(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Uf(h,u),f=vS(a,o,h,u==="in"||u==="not-in");return je.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ln(t,e,n){const s=e,r=pc("where",t);return gc._create(r,s,n)}class Ch extends Sh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ch(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)Ny(o,c),o=Ul(o,c)}(e._query,n),new Bs(e.firestore,e.converter,Ul(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ph extends Dy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ph(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ni(i,o)}(e._query,this._field,this._direction);return new Bs(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Lr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function TS(t,e="asc"){const n=e,s=pc("orderBy",t);return Ph._create(s,n)}function Ff(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new q(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!A_(e)&&n.indexOf("/")!==-1)throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Oe.fromString(n));if(!K.isDocumentKey(s))throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return of(t,new K(s))}if(n instanceof ft)return of(t,n._key);throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lc(n)}.`)}function Uf(t,e){if(!Array.isArray(t)||t.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class AS{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Us(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new wh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Oe.fromString(e);Se(G_(s));const r=new ki(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vy extends ky{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(pc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $o extends Vy{data(e={}){return super.data(e)}}class bS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $o(this._firestore,this._userDataWriter,s.key,s,new ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new $o(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ei(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new $o(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ei(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:RS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t){t=Vt(t,ft);const e=Vt(t.firestore,Jn);return hS(hc(e),t._key).then(n=>xy(e,t,n))}class My extends AS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function Dt(t,e,n){t=Vt(t,ft);const s=Vt(t.firestore,Jn),r=Oy(t.converter,e,n);return _c(s,[Ty(fc(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Tt.none())])}function Bo(t,e,n,...s){t=Vt(t,ft);const r=Vt(t.firestore,Jn),i=fc(r);let o;return o=typeof(e=Le(e))=="string"||e instanceof ro?Ry(i,"updateDoc",t._key,e,n,s):by(i,"updateDoc",t._key,e),_c(r,[o.toMutation(t._key,Tt.exists(!0))])}function Qc(t){return _c(Vt(t.firestore,Jn),[new rc(t._key,Tt.none())])}function un(t,...e){var n,s,r;t=Le(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Lf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Lf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ft)l=Vt(t.firestore,Jn),u=Xa(t._key.path),c={next:h=>{e[o]&&e[o](xy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vt(t,Bs);l=Vt(h.firestore,Jn),u=h._query;const f=new My(l);c={next:m=>{e[o]&&e[o](new bS(l,f,h,m))},error:e[o+1],complete:e[o+2]},IS(t._query)}return function(f,m,v,g){const E=new gy(g),S=new ay(m,E,v);return f.asyncQueue.enqueueAndForget(async()=>iy(await Gl(f),S)),()=>{E.$a(),f.asyncQueue.enqueueAndForget(async()=>oy(await Gl(f),S))}}(hc(l),u,a,c)}function _c(t,e){return function(s,r){const i=new zn;return s.asyncQueue.enqueueAndForget(async()=>XR(await uS(s),r,i)),i.promise}(hc(t),e)}function xy(t,e,n){const s=n.docs.get(e._key),r=new My(t);return new Vy(t,r,e._key,s,new ei(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=fc(e)}set(e,n,s){this._verifyNotCommitted();const r=Yc(e,this._firestore),i=Oy(r.converter,n,s),o=Ty(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,Tt.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=Yc(e,this._firestore);let o;return o=typeof(n=Le(n))=="string"||n instanceof ro?Ry(this._dataReader,"WriteBatch.update",i._key,n,s,r):by(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Tt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Yc(e,this._firestore);return this._mutations=this._mutations.concat(new rc(n._key,Tt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yc(t,e){if((t=Le(t)).firestore!==e)throw new q(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function jo(){return new Eh("serverTimestamp")}function bs(...t){return new Ih("arrayUnion",t)}function Ly(...t){return new Th("arrayRemove",t)}function Jc(t){return new Ah("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){return hc(t=Vt(t,Jn)),new SS(t,e=>_c(t,e))}(function(e,n=!0){(function(r){xr=r})(Nr),_r(new Ss("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Jn(new Vb(s.getProvider("auth-internal")),new Fb(s.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ki(l.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Hn(tf,"4.6.1",e),Hn(tf,"4.6.1","esm2017")})();var CS="firebase",PS="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(CS,PS,"app");const kS={apiKey:"AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",authDomain:"vuechat-c27a8.firebaseapp.com",projectId:"vuechat-c27a8",storageBucket:"vuechat-c27a8.appspot.com",messagingSenderId:"713413651968",appId:"1:713413651968:web:93c490d79df8c319cf2e5"},Fy=Pp(kS),ut=IA(Fy),Ie=pS(Fy);var DS={BASE_URL:"/friendzy/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const fa=z(typeof localStorage<"u"&&localStorage.getItem("friendzyLang")||"es"),NS=typeof localStorage<"u"&&localStorage.getItem("friendzyTheme")||"naranja",ma=z(NS),Zc={es:{cargando:"Cargando...",selecciona:"Selecciona un usuario o una conversación",para_chatear:"para empezar a chatear en privado",conecta_amigos:"Conecta con amigos",conecta_inteligente:"de forma inteligente",auth_intro:"Chat en tiempo real, conoce nuevas personas y crea conexiones significativas en una plataforma segura.",feat1:"Mensajería en tiempo real",feat2:"Conoce personas de todo el mundo",feat3:"Seguridad y privacidad garantizada",stat_users:"Usuarios",stat_msgs:"Mensajes",stat_uptime:"Uptime",mobile_tagline:"Conecta con amigos de todo el mundo",bienvenido:"Bienvenido de vuelta",crea_cuenta:"Crea tu cuenta",login_sub:"Ingresa a tu cuenta para continuar",reg_sub:"Regístrate gratis y empieza a chatear",google_in:"Iniciar sesión con Google",or_email:"o con tu email",nombre:"Nombre",tu_nombre:"Tu nombre",email:"Email",contrasena:"Contraseña",iniciar_login:"Iniciar sesión",crear:"Crear cuenta",no_cuenta:"¿No tienes cuenta?",reg_gratis:"Regístrate gratis",ya_cuenta:"¿Ya tienes cuenta?",inicia_sesion:"Inicia sesión",badge_seguro:"Seguro",badge_tiempo:"Tiempo real",badge_global:"Global",err_completa:"Completa todos los campos",err_email_pass:"Email o contraseña incorrectos",err_email_used:"Este email ya está registrado",err_invalid_email:"Introduce un email válido",err_weak:"La contraseña debe tener al menos 6 caracteres",err_too_many:"Demasiados intentos. Intenta más tarde",busqueda_ph:"Buscar chats o personas...",personas_reg:"Personas registradas",no_personas:"No hay personas registradas",solicitudes:"Solicitudes",quiere_chatear:"Quiere chatear contigo",amigos:"Amigos",en_linea:"En línea",conversaciones:"Conversaciones",sin_conv:"Sin conversaciones todavía",sin_conv_sub:"Busca personas y envía una solicitud para chatear",mi_perfil:"Mi perfil",configuracion:"Configuración",cerrar_sesion:"Cerrar sesión",chat:"Chat",pendiente:"Pendiente",aceptar:"Aceptar",solicitar:"Solicitar",favoritos:"Favoritos",sin_favoritos:"Sin chats favoritos",sin_mensajes:"Sin mensajes todavía",ahora:"ahora",grabar:"Grabando · toca para terminar",nota_larga:"La nota es demasiado larga para enviarse",enviar_ph:"Escribe un mensaje...",no_mensajes:"No hay mensajes todavía",envia_primero:"¡Envía el primero!",hoy:"Hoy",ag_favoritos:"Agregar a favoritos",quitar_fav:"Quitar de favoritos",fotos_compartidas:"Fotos compartidas",sin_fotos:"No hay fotos compartidas todavía",idioma:"Idioma",tema:"Tema",naranja:"Naranja",azul:"Azul",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Tu alias en el chat",cumpleanos:"Fecha de nacimiento",guardar:"Guardar",guardado:"Guardado",cambiar_foto:"Cambiar foto",foto_nombre:"Foto de perfil",mensaje_nuevo:"Nuevo mensaje",nueva_solicitud:"Nueva solicitud de chat",quieres_chatear:"quiere chatear contigo",max_3_fotos:"Máximo 3 fotos por envío",elige_fotos:"Elige tus fotos",enviar_fotos:"Enviar fotos"},en:{cargando:"Loading...",selecciona:"Select a user or conversation",para_chatear:"to start chatting privately",conecta_amigos:"Connect with friends",conecta_inteligente:"the smart way",auth_intro:"Real-time chat, meet new people and create meaningful connections on a secure platform.",feat1:"Real-time messaging",feat2:"Meet people from all over the world",feat3:"Security and privacy guaranteed",stat_users:"Users",stat_msgs:"Messages",stat_uptime:"Uptime",mobile_tagline:"Connect with friends from everywhere",bienvenido:"Welcome back",crea_cuenta:"Create your account",login_sub:"Sign in to continue",reg_sub:"Sign up for free and start chatting",google_in:"Continue with Google",or_email:"or with your email",nombre:"Name",tu_nombre:"Your name",email:"Email",contrasena:"Password",iniciar_login:"Sign in",crear:"Create account",no_cuenta:"Do not have an account?",reg_gratis:"Sign up free",ya_cuenta:"Already have an account?",inicia_sesion:"Sign in",badge_seguro:"Secure",badge_tiempo:"Real time",badge_global:"Global",err_completa:"Complete all fields",err_email_pass:"Incorrect email or password",err_email_used:"This email is already registered",err_invalid_email:"Enter a valid email",err_weak:"Password must be at least 6 characters",err_too_many:"Too many attempts. Try again later",busqueda_ph:"Search chats or people...",personas_reg:"Registered people",no_personas:"No registered people",solicitudes:"Requests",quiere_chatear:"Wants to chat with you",amigos:"Friends",en_linea:"Online",conversaciones:"Conversations",sin_conv:"No conversations yet",sin_conv_sub:"Search people and send a request to chat",mi_perfil:"My profile",configuracion:"Settings",cerrar_sesion:"Sign out",chat:"Chat",pendiente:"Pending",aceptar:"Accept",solicitar:"Request",favoritos:"Favorites",sin_favoritos:"No favorite chats",sin_mensajes:"No messages yet",ahora:"now",grabar:"Recording · tap to finish",nota_larga:"The voice note is too long to send",enviar_ph:"Write a message...",no_mensajes:"No messages yet",envia_primero:"Send the first one!",hoy:"Today",ag_favoritos:"Add to favorites",quitar_fav:"Remove from favorites",fotos_compartidas:"Shared photos",sin_fotos:"No shared photos yet",idioma:"Language",tema:"Theme",naranja:"Orange",azul:"Blue",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Your chat alias",cumpleanos:"Birthday",guardar:"Save",guardado:"Saved",cambiar_foto:"Change photo",foto_nombre:"Profile photo",mensaje_nuevo:"New message",nueva_solicitud:"New chat request",quieres_chatear:"wants to chat with you",max_3_fotos:"Maximum 3 photos per send",elige_fotos:"Choose your photos",enviar_fotos:"Send photos"}};function OS(t){fa.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyLang",t)}function Uy(t=ma.value){const e=document.documentElement;t==="azul"?e.setAttribute("data-theme","azul"):e.removeAttribute("data-theme");const n=document.getElementById("app-favicon");if(n&&typeof import.meta<"u"&&DS){const s="/friendzy/";n.href=s+(t==="azul"?"favicon-azul.svg":"favicon.svg")}}function VS(t){ma.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyTheme",t),Uy(t)}function N(t){return(Zc[fa.value]||Zc.es)[t]??Zc.es[t]??t}const an=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},$y=t=>(xs("data-v-3dbce67b"),t=t(),Ls(),t),MS=["width","height"],xS=$y(()=>d("path",{d:"M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z",fill:"white","fill-opacity":"0.95"},null,-1)),LS=$y(()=>d("path",{d:"M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z",style:{fill:"var(--primary)"}},null,-1)),FS=[xS,LS],US={__name:"Logo",props:{className:{type:String,default:""},size:{type:String,default:"md"},showText:{type:Boolean,default:!1},variant:{type:String,default:"default"},center:{type:Boolean,default:!1}},setup(t){const e=t,s={sm:{badge:"logo-sm",text:"16px",icon:16},md:{badge:"logo-md",text:"20px",icon:20},lg:{badge:"logo-lg",text:"24px",icon:24},xl:{badge:"logo-xl",text:"30px",icon:28}}[e.size],r=e.variant==="white";return(i,o)=>(L(),$("div",{class:_e(["logo",[{center:t.center},t.className]])},[d("div",{class:_e(["logo-badge",[r?"logo-badge-white":"gradient-orange",D(s).badge]])},[(L(),$("svg",{width:D(s).icon,height:D(s).icon,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},FS,8,MS))],2),t.showText?(L(),$("span",{key:0,class:_e(["logo-text",[r?"text-white":"text-dark",D(s).text]])}," Friendzy ",2)):be("",!0)],2))}},Jl=an(US,[["__scopeId","data-v-3dbce67b"]]),$S={},BS={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},jS=d("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"},null,-1),qS=d("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"},null,-1),HS=d("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"},null,-1),zS=d("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"},null,-1),WS=[jS,qS,HS,zS];function KS(t,e){return L(),$("svg",BS,WS)}const GS=an($S,[["render",KS]]),Pn=t=>(xs("data-v-a171bb12"),t=t(),Ls(),t),QS={class:"auth"},YS={class:"auth-left"},JS=Pn(()=>d("div",{class:"auth-grid-white"},null,-1)),XS={class:"auth-left-inner"},ZS={class:"auth-left-mid"},eC=Pn(()=>d("br",null,null,-1)),tC=Pn(()=>d("span",{class:"auth-checkmark"},[d("i",{class:"mdi mdi-check"})],-1)),nC={class:"auth-stats"},sC={class:"auth-right"},rC=Pn(()=>d("div",{class:"auth-right-grid"},null,-1)),iC={class:"auth-form-wrap"},oC={class:"auth-mobile-logo"},aC={class:"auth-card"},cC={class:"auth-card-head"},lC={class:"divider"},uC={class:"fields"},hC={key:0,class:"field"},dC=["placeholder"],fC={class:"field"},mC={class:"field"},pC={key:0,class:"auth-error"},gC=Pn(()=>d("i",{class:"mdi mdi-alert-circle-outline"},null,-1)),_C=["disabled"],yC=Pn(()=>d("i",{class:"mdi mdi-arrow-right"},null,-1)),vC={class:"switch-link"},wC={class:"auth-badges"},EC={class:"auth-badge"},IC=Pn(()=>d("i",{class:"mdi mdi-shield-lock-outline"},null,-1)),TC={class:"auth-badge"},AC=Pn(()=>d("i",{class:"mdi mdi-message-text-clock-outline"},null,-1)),bC={class:"auth-badge"},RC=Pn(()=>d("i",{class:"mdi mdi-web"},null,-1)),SC={__name:"AuthScreen",setup(t){const e=z("login"),n=z(""),s=z(""),r=z(""),i=z(!1),o=z(""),a=["feat1","feat2","feat3"],c=[{value:"10K+",label:"stat_users"},{value:"50K+",label:"stat_msgs"},{value:"99%",label:"stat_uptime"}],l=m=>{e.value=m,o.value=""},u=async()=>{try{const m=new dn;await DT(ut,m)}catch(m){console.log(m)}},h=m=>{switch(m){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return N("err_email_pass");case"auth/email-already-in-use":return N("err_email_used");case"auth/invalid-email":return N("err_invalid_email");case"auth/weak-password":return N("err_weak");case"auth/too-many-requests":return N("err_too_many");default:return`Error: ${m}`}},f=async()=>{if(o.value="",!n.value.trim()||!s.value){o.value=N("err_completa");return}if(s.value.length<6){o.value=N("err_weak");return}i.value=!0;try{if(e.value==="login")await iT(ut,n.value.trim(),s.value);else{const{user:m}=await rT(ut,n.value.trim(),s.value);r.value.trim()&&await Pu(m,{displayName:r.value.trim().split(/\s+/)[0]})}}catch(m){console.log(m),o.value=h(m.code)}finally{i.value=!1}};return(m,v)=>(L(),$("main",QS,[d("section",YS,[JS,d("div",XS,[he(Jl,{size:"lg",showText:"",variant:"white"}),d("div",ZS,[d("h1",null,[Jt(k(D(N)("conecta_amigos"))+" ",1),eC,d("span",null,k(D(N)("conecta_inteligente")),1)]),d("p",null,k(D(N)("auth_intro")),1),d("ul",null,[(L(),$(ke,null,Qt(a,(g,E)=>d("li",{key:g,class:"auth-feature",style:Pr({animationDelay:.3+E*.1+"s"})},[tC,d("span",null,k(D(N)(g)),1)],4)),64))])]),d("div",nC,[(L(),$(ke,null,Qt(c,g=>d("div",{key:g.label},[d("strong",null,k(g.value),1),d("span",null,k(D(N)(g.label)),1)])),64))])])]),d("section",sC,[rC,d("div",iC,[d("div",oC,[he(Jl,{size:"xl",showText:"",center:""}),d("p",null,k(D(N)("mobile_tagline")),1)]),d("div",aC,[d("div",cC,[d("h2",null,k(e.value==="login"?D(N)("bienvenido"):D(N)("crea_cuenta")),1),d("p",null,k(e.value==="login"?D(N)("login_sub"):D(N)("reg_sub")),1)]),d("button",{class:"google-btn",type:"button",onClick:u},[he(GS),d("span",null,k(D(N)("google_in")),1)]),d("div",lC,[d("span",null,k(D(N)("or_email")),1)]),d("div",uC,[e.value==="register"?(L(),$("div",hC,[d("label",null,k(D(N)("nombre")),1),Is(d("input",{"onUpdate:modelValue":v[0]||(v[0]=g=>r.value=g),type:"text",placeholder:D(N)("tu_nombre")},null,8,dC),[[Ts,r.value]])])):be("",!0),d("div",fC,[d("label",null,k(D(N)("email")),1),Is(d("input",{"onUpdate:modelValue":v[1]||(v[1]=g=>n.value=g),type:"email",placeholder:"ejemplo@gmail.com"},null,512),[[Ts,n.value]])]),d("div",mC,[d("label",null,k(D(N)("contrasena")),1),Is(d("input",{"onUpdate:modelValue":v[2]||(v[2]=g=>s.value=g),type:"password",placeholder:"••••••••",onKeyup:wp(f,["enter"])},null,544),[[Ts,s.value]])])]),o.value?(L(),$("div",pC,[gC,d("span",null,k(o.value),1)])):be("",!0),d("button",{class:"submit-btn btn-primary",type:"button",disabled:i.value,onClick:f},[d("span",null,k(i.value?D(N)("cargando"):e.value==="login"?D(N)("iniciar_login"):D(N)("crear")),1),yC],8,_C),d("p",vC,[e.value==="login"?(L(),$(ke,{key:0},[Jt(k(D(N)("no_cuenta"))+" ",1),d("a",{href:"#",onClick:v[3]||(v[3]=tn(g=>l("register"),["prevent"]))},k(D(N)("reg_gratis")),1)],64)):(L(),$(ke,{key:1},[Jt(k(D(N)("ya_cuenta"))+" ",1),d("a",{href:"#",onClick:v[4]||(v[4]=tn(g=>l("login"),["prevent"]))},k(D(N)("inicia_sesion")),1)],64))])]),d("div",wC,[d("div",EC,[IC,d("span",null,k(D(N)("badge_seguro")),1)]),d("div",TC,[AC,d("span",null,k(D(N)("badge_tiempo")),1)]),d("div",bC,[RC,d("span",null,k(D(N)("badge_global")),1)])])])])]))}},CC=an(SC,[["__scopeId","data-v-a171bb12"]]),PC=(t,e)=>[t,e].sort().join("_"),dr=(t,e)=>t.split("_").find(n=>n!==e);let fn=null,$f=!1;function By(){const t=window.AudioContext||window.webkitAudioContext;!t||typeof window>"u"||(fn||(fn=new t),fn.state==="suspended"&&fn.resume().catch(()=>{}))}const kC=()=>{$f||($f=!0,By())};typeof window<"u"&&["pointerdown","keydown","touchstart"].forEach(t=>window.addEventListener(t,kC,{once:!0}));function Bf(){if(By(),!fn)return;const t=fn.currentTime;[660,880].forEach((e,n)=>{const s=fn.createOscillator(),r=fn.createGain(),i=t+n*.12;s.type="sine",s.frequency.value=e,r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.18,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+.35),s.connect(r),r.connect(fn.destination),s.start(i),s.stop(i+.4)})}function DC(){typeof Notification<"u"&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}function jf(t,e){if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(t,{body:e,icon:"/friendzy/favicon.svg"})}catch{}}const NC={key:0,class:"pa-img"},OC=["src","alt"],VC={__name:"PremiumAvatar",props:{src:{type:String,default:""},name:{type:String,required:!0},size:{type:String,default:"md"},online:{type:Boolean,default:void 0},showRing:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,s={sm:{avatar:"pa-size-sm",text:"pa-text-xs",status:"pa-status-sm"},md:{avatar:"pa-size-md",text:"pa-text-sm",status:"pa-status-md"},lg:{avatar:"pa-size-lg",text:"pa-text-base",status:"pa-status-lg"},xl:{avatar:"pa-size-xl",text:"pa-text-xl",status:"pa-status-xl"}}[e.size],r=["linear-gradient(135deg, #f97316, #f59e0b)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #ea580c, #ef4444)","linear-gradient(135deg, #f43f5e, #f97316)","#111827","linear-gradient(135deg, #fb923c, #eab308)"],o=r[Math.abs((c=>(c||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0))(e.name))%r.length],a=(e.name||"?").split(" ").map(c=>c[0]).slice(0,2).join("").toUpperCase();return(c,l)=>(L(),$("div",{class:_e(["pa-outer",t.className])},[d("div",{class:_e(["pa-ring",t.showRing?"avatar-ring":""])},[d("div",{class:_e(["pa-avatar",[D(s).avatar,"pa-"+t.size]])},[t.src?(L(),$("div",NC,[d("img",{src:t.src,alt:t.name},null,8,OC)])):(L(),$("div",{key:1,class:"pa-initials",style:Pr({background:D(o)})},[d("span",{class:_e(D(s).text)},k(D(a)),3)],4))],2)],2),t.online!==void 0?(L(),$("span",{key:0,class:_e(["pa-status",[D(s).status,t.online?"pa-online":"pa-offline"]])},null,2)):be("",!0)],2))}},hn=an(VC,[["__scopeId","data-v-4322e703"]]),st=t=>(xs("data-v-bfc289da"),t=t(),Ls(),t),MC={class:"sidebar"},xC={class:"sb-header"},LC=st(()=>d("i",{class:"mdi mdi-close"},null,-1)),FC=[LC],UC={class:"sb-profile-wrap"},$C={class:"sb-profile-info"},BC={class:"sb-profile-name"},jC={class:"sb-profile-email"},qC=st(()=>d("i",{class:"mdi mdi-chevron-down sb-profile-caret"},null,-1)),HC={key:0,class:"sb-menu"},zC=st(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),WC=st(()=>d("i",{class:"mdi mdi-cog-outline"},null,-1)),KC=st(()=>d("div",{class:"sb-menu-sep"},null,-1)),GC=st(()=>d("i",{class:"mdi mdi-logout"},null,-1)),QC={class:"sb-search-row"},YC={class:"sb-search"},JC=st(()=>d("i",{class:"mdi mdi-magnify sb-search-icon"},null,-1)),XC=["placeholder"],ZC={key:0,class:"sb-newchat"},eP={class:"sb-label"},tP=st(()=>d("i",{class:"mdi mdi-account-multiple-outline"},null,-1)),nP=["onClick"],sP={class:"sb-user-body"},rP={class:"sb-user-name"},iP={class:"sb-user-email"},oP=["onClick"],aP=["onClick"],cP=st(()=>d("i",{class:"mdi mdi-message-outline"},null,-1)),lP={key:0,class:"sb-empty-note"},uP={class:"sb-section"},hP={class:"sb-label"},dP=st(()=>d("i",{class:"mdi mdi-bell-outline"},null,-1)),fP={class:"sb-count sb-count-alert"},mP={class:"sb-list sb-friends"},pP={class:"conv-body"},gP={class:"conv-top"},_P={class:"conv-name"},yP={class:"conv-bottom"},vP={class:"conv-preview"},wP=["onClick"],EP=st(()=>d("i",{class:"mdi mdi-check"},null,-1)),IP=[EP],TP=["onClick"],AP=st(()=>d("i",{class:"mdi mdi-close"},null,-1)),bP=[AP],RP={class:"sb-section"},SP={class:"sb-label"},CP=st(()=>d("i",{class:"mdi mdi-heart"},null,-1)),PP={class:"sb-count"},kP={class:"sb-list sb-friends"},DP=["onClick"],NP={class:"conv-body"},OP={class:"conv-top"},VP={class:"conv-name"},MP={class:"conv-bottom"},xP={class:"conv-preview"},LP=["onClick"],FP=st(()=>d("i",{class:"mdi mdi-minus"},null,-1)),UP=[FP],$P={class:"sb-section"},BP={class:"sb-label"},jP=st(()=>d("i",{class:"mdi mdi-star"},null,-1)),qP={class:"sb-count"},HP={class:"sb-list"},zP=["onClick"],WP={class:"conv-body"},KP={class:"conv-top"},GP={class:"conv-name"},QP=st(()=>d("i",{class:"mdi mdi-star conv-star"},null,-1)),YP={class:"conv-bottom"},JP={class:"conv-preview"},XP={class:"sb-section"},ZP={class:"sb-label"},ek=st(()=>d("i",{class:"mdi mdi-message-text-outline"},null,-1)),tk={class:"sb-count"},nk={class:"sb-list"},sk=["onClick"],rk={class:"conv-body"},ik={class:"conv-top"},ok={class:"conv-name"},ak={class:"conv-right"},ck={key:0,class:"mdi mdi-star conv-star"},lk={key:1,class:"conv-badge"},uk={key:2,class:"conv-time"},hk={class:"conv-bottom"},dk={class:"conv-preview"},fk={key:0,class:"sb-empty"},mk={class:"sb-empty-sub"},pk={__name:"Conversations",props:{activeId:{type:String,default:""},isMobile:{type:Boolean,default:!1},profile:{type:Object,default:()=>({})},favorites:{type:Array,default:()=>[]}},emits:["open","close","openProfile","openSettings"],setup(t,{emit:e}){const n=e,s=t,r=ut.currentUser,i=z([]),o=z([]),a=z([]),c=z([]),l=z([]),u=z([]),h=z([]),f=z([]),m=z(""),v=z(!1),g=z(!1),E=ve(()=>s.profile.displayName||(r==null?void 0:r.displayName)||(r==null?void 0:r.email)||"Usuario"),S=(r==null?void 0:r.email)||"",F=ve(()=>s.profile.photoURL||(r==null?void 0:r.photoURL)||"");let U=null,W=null,le=null,G=null,Te=null,Ce=null,Ye=null,qe=null,J=!1,Q=!1;const Z={};tp(()=>{U=un(ds(Kt(Ie,"users")),y=>{i.value=y.docs.map(T=>T.data()).filter(T=>T.uid!==r.uid)},y=>console.error("denied:users",y.code)),W=un(ds(Kt(Ie,"conversations"),ln("participants","array-contains",r.uid)),y=>{var M,Y;const T=[],w={};if(y.forEach(ee=>{const ue=ee.data();w[ee.id]=ue,T.push({id:ee.id,...ue})}),T.sort((ee,ue)=>{var Ae,rt,vt,as;return(((rt=(Ae=ue.lastAt)==null?void 0:Ae.toMillis)==null?void 0:rt.call(Ae))??0)-(((as=(vt=ee.lastAt)==null?void 0:vt.toMillis)==null?void 0:as.call(vt))??0)}),o.value=T,!J){J=!0,y.forEach(ee=>{var ue,Ae;Z[ee.id]=((Ae=(ue=ee.data())==null?void 0:ue.unread)==null?void 0:Ae[r.uid])||0});return}y.forEach(ee=>{var vt;const ue=ee.data(),Ae=((vt=ue.unread)==null?void 0:vt[r.uid])||0,rt=Z[ee.id]||0;if(Z[ee.id]=Ae,Ae>rt&&ee.id!==s.activeId){const as=dr(ee.id,r.uid),cn=i.value.find(pt=>pt.uid===as),co=typeof ue.lastMessage=="string"?ue.lastMessage:"📷 Foto";jf(`${N("mensaje_nuevo")} de ${(cn==null?void 0:cn.displayName)||""}`,co),Bf()}}),s.activeId&&(((Y=(M=w[s.activeId])==null?void 0:M.unread)==null?void 0:Y[r.uid])||0)>0&&ze(s.activeId)},y=>console.error("denied:convs",y.code)),le=un($e(Ie,"users",r.uid),y=>{var T;a.value=((T=y.data())==null?void 0:T.friends)||[]},y=>console.error("denied:me",y.code)),G=un(ds(Kt(Ie,"requests"),ln("to","==",r.uid),ln("status","==","pending")),y=>{if(c.value=y.docs.map(T=>({id:T.id,...T.data()})),!Q){Q=!0;return}y.docChanges().forEach(T=>{if(T.type==="added"){const w=T.doc.data(),M=i.value.find(Y=>Y.uid===w.from);jf(N("nueva_solicitud"),`${(M==null?void 0:M.displayName)||"Alguien"} ${N("quieres_chatear")}`),Bf()}})},y=>console.error("denied:incoming",y.code)),Te=un(ds(Kt(Ie,"requests"),ln("from","==",r.uid),ln("status","==","pending")),y=>{l.value=y.docs.map(T=>({id:T.id,...T.data()}))},y=>console.error("denied:sent",y.code)),Ce=un(ds(Kt(Ie,"requests"),ln("from","==",r.uid),ln("status","==","accepted")),y=>{h.value=y.docs.map(T=>({id:T.id,...T.data()})),ce()},y=>console.error("denied:accOut",y.code)),Ye=un(ds(Kt(Ie,"requests"),ln("to","==",r.uid),ln("status","==","accepted")),y=>{u.value=y.docs.map(T=>({id:T.id,...T.data()})),ce()},y=>console.error("denied:accIn",y.code)),qe=y=>{y.target.closest(".sb-profile-wrap")||(v.value=!1),y.target.closest(".sb-search-row")||(g.value=!1)},document.addEventListener("click",qe),setTimeout(()=>DC(),1500)}),Dr(()=>{U==null||U(),W==null||W(),le==null||le(),G==null||G(),Te==null||Te(),Ce==null||Ce(),Ye==null||Ye(),qe&&document.removeEventListener("click",qe)});const de=()=>{v.value=!1,n("openProfile")},Ve=()=>{v.value=!1,n("openSettings")},ye=y=>s.favorites.includes(y),ae=ve(()=>o.value.filter(y=>ye(y.id))),ce=()=>{f.value=[...u.value,...h.value]},ze=y=>{Bo($e(Ie,"conversations",y),{[`unread.${r.uid}`]:0}).catch(()=>{})},bt=y=>i.value.find(T=>T.uid===y),Rt=ve(()=>c.value),St=ve(()=>{const y=new Set(a.value);return f.value.forEach(T=>{y.add(T.from===r.uid?T.to:T.from)}),y}),zs=ve(()=>i.value.filter(y=>St.value.has(y.uid))),wc=ve(()=>new Set(l.value.map(y=>y.to))),kn=y=>St.value.has(y.uid)?"friend":wc.value.has(y.uid)?"pending":Rt.value.some(T=>T.from===y.uid)?"incoming":"none",xt=y=>N(y==="pending"?"pendiente":y==="incoming"?"aceptar":"solicitar"),Ws=y=>y==="pending"?"mdi-clock-outline":y==="incoming"?"mdi-check":"mdi-account-plus-outline",Br=y=>{kn(y)==="friend"&&x(y)},oo=y=>{const T=kn(y);if(T==="incoming"){const w=Rt.value.find(M=>M.from===y.uid);w&&jr(w)}else T==="none"&&os(y)},os=async y=>{const T=`${r.uid}_${y.uid}`;await Dt($e(Ie,"requests",T),{from:r.uid,to:y.uid,status:"pending",createdAt:jo()})},jr=async y=>{const T=$e(Ie,"requests",y.id),w=$e(Ie,"users",r.uid);await Dt(T,{status:"accepted"},{merge:!0}),await Dt(w,{friends:bs(y.from)},{merge:!0});const M=i.value.find(Y=>Y.uid===y.from);await x({uid:y.from,displayName:(M==null?void 0:M.displayName)||y.from,photoURL:(M==null?void 0:M.photoURL)||""})},ao=async y=>{await Qc($e(Ie,"requests",y.id))},p=async y=>{const T=$e(Ie,"users",r.uid);await Dt(T,{friends:Ly(y.uid)},{merge:!0});const w=$e(Ie,"requests",`${y.uid}_${r.uid}`),M=await Yl(w);M.exists()&&M.data().from===y.uid&&M.data().to===r.uid&&await Qc(w);const Y=$e(Ie,"requests",`${r.uid}_${y.uid}`);(await Yl(Y)).exists()&&await Dt(Y,{status:"declined"},{merge:!0})},_=y=>{const T=dr(y.id,r.uid),w=i.value.find(M=>M.uid===T);return w?w.displayName:T},I=y=>y.lastMessage?y.lastMessage:N("sin_mensajes"),b=ve(()=>m.value.trim().toLowerCase()),R=ve(()=>b.value?o.value.filter(y=>_(y).toLowerCase().includes(b.value)):o.value),V=ve(()=>{let y=i.value;return b.value&&(y=y.filter(T=>(T.displayName||"").toLowerCase().includes(b.value)||(T.email||"").toLowerCase().includes(b.value))),y}),j=y=>{var M;const T=((M=y==null?void 0:y.toMillis)==null?void 0:M.call(y))??0;if(!T)return"";const w=Math.floor((Date.now()-T)/1e3);return w<60?N("ahora"):w<3600?`${Math.floor(w/60)}m`:w<86400?`${Math.floor(w/3600)}h`:w<604800?`${Math.floor(w/86400)}d`:new Date(T).toLocaleDateString("es-ES",{day:"numeric",month:"short"})},O=y=>{ze(y.id);const T=i.value.find(w=>w.uid===dr(y.id,r.uid));n("open",{id:y.id,other:{name:_(y),photo:(T==null?void 0:T.photoURL)||""}})},x=async y=>{const T=PC(r.uid,y.uid);g.value=!1;const w=$e(Ie,"conversations",T);try{await Dt(w,{participants:bs(r.uid,y.uid)},{merge:!0})}catch(M){console.error("startWith:conv",M.code,M.message);try{await Qc(w),await Dt(w,{participants:bs(r.uid,y.uid)},{merge:!0})}catch(Y){console.error("startWith:repair",Y.code,Y.message)}}ze(T),n("open",{id:T,other:{name:y.displayName,photo:y.photoURL||""}})},P=async()=>{try{await uT(ut)}catch(y){console.log(y)}};return(y,T)=>(L(),$("div",MC,[d("div",xC,[he(Jl,{size:"md",showText:""}),t.isMobile?(L(),$("button",{key:0,class:"icon-btn",onClick:T[0]||(T[0]=w=>y.$emit("close"))},FC)):be("",!0)]),d("div",UC,[d("button",{class:"sb-profile",onClick:T[1]||(T[1]=w=>v.value=!v.value)},[he(hn,{src:F.value,name:E.value,size:"md",online:""},null,8,["src","name"]),d("div",$C,[d("span",BC,k(E.value),1),d("span",jC,k(D(S)),1)]),qC]),v.value?(L(),$("div",HC,[d("button",{class:"sb-menu-item",onClick:de},[zC,d("span",null,k(D(N)("mi_perfil")),1)]),d("button",{class:"sb-menu-item",onClick:Ve},[WC,d("span",null,k(D(N)("configuracion")),1)]),KC,d("button",{class:"sb-menu-item sb-menu-danger",onClick:P},[GC,d("span",null,k(D(N)("cerrar_sesion")),1)])])):be("",!0)]),d("div",QC,[d("div",YC,[JC,Is(d("input",{"onUpdate:modelValue":T[2]||(T[2]=w=>m.value=w),type:"text",placeholder:D(N)("busqueda_ph"),class:"sb-search-input"},null,8,XC),[[Ts,m.value]])]),d("button",{class:"icon-btn btn-primary sb-plus",onClick:T[3]||(T[3]=w=>g.value=!g.value)},[d("i",{class:_e(["mdi",g.value?"mdi-close":"mdi-plus"])},null,2)]),g.value?(L(),$("div",ZC,[d("div",eP,[tP,d("span",null,k(D(N)("personas_reg")),1)]),(L(!0),$(ke,null,Qt(V.value,w=>(L(),$("button",{key:w.uid,class:"sb-user-item",onClick:M=>Br(w)},[he(hn,{src:w.photoURL||"",name:w.displayName,size:"md",online:!0},null,8,["src","name"]),d("div",sP,[d("span",rP,k(w.displayName),1),d("span",iP,k(w.email),1)]),kn(w)!=="friend"?(L(),$("span",{key:0,class:_e(["btn-status","btn-"+kn(w)]),onClick:tn(M=>oo(w),["stop"])},[d("i",{class:_e(["mdi",Ws(kn(w))])},null,2),d("span",null,k(xt(kn(w))),1)],10,oP)):(L(),$("span",{key:1,class:"btn-status btn-friend",onClick:tn(M=>x(w),["stop"])},[cP,d("span",null,k(D(N)("chat")),1)],8,aP))],8,nP))),128)),V.value.length===0?(L(),$("p",lP,k(D(N)("no_personas")),1)):be("",!0)])):be("",!0)]),Rt.value.length?(L(),$(ke,{key:0},[d("div",uP,[d("div",hP,[dP,d("span",null,k(D(N)("solicitudes")),1)]),d("span",fP,k(Rt.value.length),1)]),d("div",mP,[(L(!0),$(ke,null,Qt(Rt.value,w=>{var M,Y,ee;return L(),$("div",{key:w.id,class:"conv-item friend-item"},[he(hn,{src:((M=bt(w.from))==null?void 0:M.photoURL)||"",name:((Y=bt(w.from))==null?void 0:Y.displayName)||w.from,size:"lg",online:""},null,8,["src","name"]),d("div",pP,[d("div",gP,[d("span",_P,k(((ee=bt(w.from))==null?void 0:ee.displayName)||w.from),1)]),d("div",yP,[d("span",vP,k(D(N)("quiere_chatear")),1)])]),d("button",{class:"req-btn req-ok",title:"Aceptar",onClick:ue=>jr(w)},IP,8,wP),d("button",{class:"req-btn req-no",title:"Rechazar",onClick:ue=>ao(w)},bP,8,TP)])}),128))])],64)):be("",!0),zs.value.length?(L(),$(ke,{key:1},[d("div",RP,[d("div",SP,[CP,d("span",null,k(D(N)("amigos")),1)]),d("span",PP,k(zs.value.length),1)]),d("div",kP,[(L(!0),$(ke,null,Qt(zs.value,w=>(L(),$("div",{key:w.uid,class:"conv-item friend-item",onClick:M=>x(w)},[he(hn,{src:w.photoURL||"",name:w.displayName,size:"lg",online:""},null,8,["src","name"]),d("div",NP,[d("div",OP,[d("span",VP,k(w.displayName),1)]),d("div",MP,[d("span",xP,k(D(N)("en_linea")),1)])]),d("button",{class:"friend-remove",onClick:tn(M=>p(w),["stop"])},UP,8,LP)],8,DP))),128))])],64)):be("",!0),ae.value.length?(L(),$(ke,{key:2},[d("div",$P,[d("div",BP,[jP,d("span",null,k(D(N)("favoritos")),1)]),d("span",qP,k(ae.value.length),1)]),d("div",HP,[(L(!0),$(ke,null,Qt(ae.value,w=>(L(),$("button",{key:w.id,class:_e(["conv-item",{active:w.id===t.activeId}]),onClick:M=>O(w)},[he(hn,{name:_(w),size:"lg",online:""},null,8,["name"]),d("div",WP,[d("div",KP,[d("span",GP,k(_(w)),1),QP]),d("div",YP,[d("span",JP,k(I(w)),1)])])],10,zP))),128))])],64)):be("",!0),d("div",XP,[d("div",ZP,[ek,d("span",null,k(D(N)("conversaciones")),1)]),d("span",tk,k(R.value.length),1)]),d("div",nk,[(L(!0),$(ke,null,Qt(R.value,w=>{var M;return L(),$("button",{key:w.id,class:_e(["conv-item",{active:w.id===t.activeId}]),onClick:Y=>O(w)},[he(hn,{name:_(w),size:"lg",online:""},null,8,["name"]),d("div",rk,[d("div",ik,[d("span",ok,k(_(w)),1),d("span",ak,[ye(w.id)?(L(),$("i",ck)):be("",!0),(((M=w.unread)==null?void 0:M[D(r).uid])||0)>0?(L(),$("span",lk,k(w.unread[D(r).uid]),1)):(L(),$("span",uk,k(j(w.lastAt)),1))])]),d("div",hk,[d("span",dk,k(I(w)),1)])])],10,sk)}),128)),R.value.length===0?(L(),$("div",fk,[d("p",null,k(D(N)("sin_conv")),1),d("p",mk,k(D(N)("sin_conv_sub")),1)])):be("",!0)])]))}},qf=an(pk,[["__scopeId","data-v-bfc289da"]]),gk={class:"mb-max"},_k={key:0,class:"mb-audio"},yk={class:"mb-audio-head"},vk={class:"mb-audio-track"},wk={class:"mb-audio-time"},Ek=["src"],Ik={key:1,class:"mb-text"},Tk={key:2,class:"mb-image"},Ak=["src"],bk={key:0,class:"mdi mdi-check-all mb-check"},Rk={__name:"MessageBubble",props:{message:{type:Object,required:!0},isOwn:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},senderName:{type:String,default:""}},setup(t){const e=t,n=z(null),s=z(!1),r=z(0),i=ve(()=>{var h;const u=((h=e.message.time)==null?void 0:h.seconds)??0;return u?new Date(u*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),o=ve(()=>{const u=e.message.duration||0;return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}),a=()=>{const u=n.value;u&&(s.value?u.pause():u.play().catch(()=>{}),s.value=!s.value)},c=()=>{const u=n.value;!u||!u.duration||(r.value=u.currentTime/u.duration*100)},l=()=>{s.value=!1,r.value=0};return(u,h)=>(L(),$("div",{class:_e(["mb-row",t.isOwn?"mb-own":"mb-other"])},[d("div",{class:_e(["mb-avatar",t.showAvatar?"":"mb-avatar-hidden"])},[he(hn,{src:t.avatar||"",name:t.senderName,size:"sm"},null,8,["src","name"])],2),d("div",gk,[d("div",{class:_e(["mb-bubble",t.isOwn?"mb-bubble-own":"mb-bubble-other"])},[t.message.audio?(L(),$("div",_k,[d("div",yk,[d("button",{class:"mb-audio-play",onClick:a},[d("i",{class:_e(["mdi",s.value?"mdi-pause":"mdi-play"])},null,2)]),d("div",vk,[d("div",{class:"mb-audio-fill",style:Pr({width:r.value+"%"})},null,4)]),d("span",wk,k(o.value),1)]),d("audio",{ref_key:"audioRef",ref:n,src:t.message.audio,preload:"metadata",onTimeupdate:c,onEnded:l},null,40,Ek)])):t.message.text?(L(),$("p",Ik,k(t.message.text),1)):t.message.image?(L(),$("div",Tk,[d("img",{src:t.message.image,alt:"Compartida"},null,8,Ak)])):be("",!0),d("div",{class:_e(["mb-meta",t.isOwn?"mb-meta-own":""])},[d("span",null,k(i.value),1),t.isOwn?(L(),$("i",bk)):be("",!0)],2)],2)])],2))}},Sk=an(Rk,[["__scopeId","data-v-7c9f3cbe"]]),$r=t=>(xs("data-v-bef45fbe"),t=t(),Ls(),t),Ck={class:"chat-input-wrap"},Pk={key:1,class:"ci-attach"},kk=$r(()=>d("i",{class:"mdi mdi-image-outline"},null,-1)),Dk=[kk],Nk={class:"ci-picker"},Ok={class:"ci-picker-head"},Vk=$r(()=>d("i",{class:"mdi mdi-close"},null,-1)),Mk=[Vk],xk={class:"ci-picker-hint"},Lk={class:"ci-picker-grid"},Fk=["onClick"],Uk=["src"],$k={key:0,class:"ci-picker-check"},Bk=$r(()=>d("i",{class:"mdi mdi-check"},null,-1)),jk=[Bk],qk={key:1,class:"ci-picker-num"},Hk={class:"ci-picker-foot"},zk=["disabled"],Wk={class:"ci-row"},Kk={class:"ci-input-box"},Gk=["placeholder","onKeydown"],Qk=$r(()=>d("button",{class:"ci-round-btn ci-smile"},[d("i",{class:"mdi mdi-emoticon-outline"})],-1)),Yk=$r(()=>d("i",{class:"mdi mdi-send"},null,-1)),Jk=[Yk],Xk={key:3,class:"ci-recording"},Zk=$r(()=>d("span",{class:"ci-rec-dot"},null,-1)),eD={class:"ci-rec-text"},tD={class:"ci-rec-time"},nD={key:4,class:"ci-recording"},sD={class:"ci-rec-text"},rD=3e4,Gs=3,iD={__name:"FormAdd",props:{conversationId:{type:String,required:!0}},setup(t){const e=t,n=z(""),s=z(!1),r=z(!1),i=z(0),o=z(""),a=z([]),c=z(!1),l=z(null),u=z(null),h=ve(()=>a.value.filter(J=>J.selected).length),f=ve(()=>{const J=Math.floor(i.value/1e3);return`${Math.floor(J/60)}:${String(J%60).padStart(2,"0")}`}),m={media:null,recorder:null,chunks:[],timer:null,startedAt:0,type:"audio/webm"},v=()=>{const J=l.value;J&&(J.style.height="auto",J.style.height=`${Math.min(J.scrollHeight,128)}px`)},g=async()=>{const J=n.value.trim();if(!(!J||!e.conversationId))try{const Q=ut.currentUser,Z=dr(e.conversationId,Q.uid),de=$e(Ie,"conversations",e.conversationId);await Dt(de,{participants:bs(Q.uid,Z)},{merge:!0});const Ve=Xc(Ie),ye=$e(Kt(Ie,"conversations",e.conversationId,"messages"));Ve.set(ye,{text:J,time:Ne.fromDate(new Date),uid:Q.uid,displayName:Q.displayName}),Ve.update(de,{lastMessage:J,lastAt:Ne.fromDate(new Date),[`unread.${Z}`]:Jc(1)}),await Ve.commit(),n.value="",Ia(()=>v())}catch(Q){console.log(Q)}},E=()=>{var J;s.value=!1,(J=u.value)==null||J.click()},S=async J=>{const Q=[...J.target.files||[]];if(J.target.value="",!(!Q.length||!e.conversationId)){if(Q.length>Gs){a.value=Q.map((Z,de)=>({id:de,file:Z,preview:URL.createObjectURL(Z),selected:de<Gs})),c.value=!0;return}for(const Z of Q)await le(Z)}},F=J=>{const Q=a.value[J];Q&&(Q.selected?Q.selected=!1:h.value<Gs&&(Q.selected=!0))},U=()=>{a.value.forEach(J=>URL.revokeObjectURL(J.preview)),a.value=[],c.value=!1},W=async()=>{const J=a.value.filter(Q=>Q.selected);U();for(const Q of J)await le(Q.file)},le=async J=>{try{const Q=await G(J);if(!Q)return;const Z=ut.currentUser,de=dr(e.conversationId,Z.uid),Ve=$e(Ie,"conversations",e.conversationId);await Dt(Ve,{participants:bs(Z.uid,de)},{merge:!0});const ye=Xc(Ie),ae=$e(Kt(Ie,"conversations",e.conversationId,"messages"));ye.set(ae,{image:Q,text:"",time:Ne.fromDate(new Date),uid:Z.uid,displayName:Z.displayName}),ye.update(Ve,{lastMessage:"📷 Foto",lastAt:Ne.fromDate(new Date),[`unread.${de}`]:Jc(1)}),await ye.commit()}catch(Q){console.log(Q)}},G=J=>new Promise(Q=>{const Z=new FileReader;Z.onload=()=>{const de=new Image;de.onload=()=>{const ye=Math.min(1,1e3/Math.max(de.naturalWidth,de.naturalHeight)),ae=Math.max(1,Math.round(de.naturalWidth*ye)),ce=Math.max(1,Math.round(de.naturalHeight*ye)),ze=document.createElement("canvas");ze.width=ae,ze.height=ce;const bt=ze.getContext("2d");if(!bt)return Q(Z.result);bt.fillStyle="#fff",bt.fillRect(0,0,ae,ce),bt.drawImage(de,0,0,ae,ce),Q(ze.toDataURL("image/jpeg",.75))},de.onerror=()=>Q(null),de.src=Z.result},Z.onerror=()=>Q(null),Z.readAsDataURL(J)}),Te=()=>{if(r.value){Ye();return}Ce()},Ce=async()=>{if(e.conversationId)try{const J=await navigator.mediaDevices.getUserMedia({audio:!0}),Q=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"",Z=new MediaRecorder(J,{...Q?{mimeType:Q}:{},audioBitsPerSecond:24e3}),de=[];Z.ondataavailable=Ve=>{Ve.data&&Ve.data.size>0&&de.push(Ve.data)},Z.onstop=()=>{var ae;(ae=m.media)==null||ae.getTracks().forEach(ce=>ce.stop());const Ve=Math.max(1,Math.round((Date.now()-m.startedAt)/1e3)),ye=new Blob(de,{type:m.type});qe(ye,Ve)},m.media=J,m.recorder=Z,m.chunks=de,m.startedAt=Date.now(),Z.start(),m.type=Z.mimeType||Q||"audio/webm",r.value=!0,i.value=0,m.timer=setInterval(()=>{i.value=Date.now()-m.startedAt,i.value>=rD&&Ye()},250)}catch(J){console.log(J),r.value=!1}},Ye=()=>{clearInterval(m.timer),m.timer=null,r.value=!1;try{m.recorder&&m.recorder.state!=="inactive"&&m.recorder.stop()}catch(J){console.log(J)}},qe=(J,Q)=>{if(!e.conversationId)return;const Z=new FileReader;Z.onload=async()=>{try{const de=Z.result;if(typeof de!="string"||de.length>9e5){o.value=N("nota_larga"),setTimeout(()=>{o.value=""},4e3);return}const Ve=ut.currentUser,ye=dr(e.conversationId,Ve.uid),ae=$e(Ie,"conversations",e.conversationId);await Dt(ae,{participants:bs(Ve.uid,ye)},{merge:!0});const ce=Xc(Ie),ze=$e(Kt(Ie,"conversations",e.conversationId,"messages"));ce.set(ze,{audio:de,duration:Q,text:"",time:Ne.fromDate(new Date),uid:Ve.uid,displayName:Ve.displayName}),ce.update(ae,{lastMessage:"🎤 Nota de voz",lastAt:Ne.fromDate(new Date),[`unread.${ye}`]:Jc(1)}),await ce.commit()}catch(de){console.log(de)}},Z.readAsDataURL(J)};return Dr(()=>{var J;clearInterval(m.timer),(J=m.media)==null||J.getTracks().forEach(Q=>Q.stop())}),(J,Q)=>(L(),$("div",Ck,[s.value?(L(),$("div",{key:0,class:"ci-backdrop",onClick:Q[0]||(Q[0]=Z=>s.value=!1)})):be("",!0),s.value?(L(),$("div",Pk,[d("button",{class:"ci-attach-btn",onClick:E},Dk)])):be("",!0),d("input",{ref_key:"fileInput",ref:u,type:"file",accept:"image/*",multiple:"",class:"hidden",onChange:S},null,544),c.value?(L(),$("div",{key:2,class:"ci-modal",onClick:tn(U,["self"])},[d("div",Nk,[d("div",Ok,[d("h4",null,k(D(N)("elige_fotos")),1),d("span",{class:_e(["ci-picker-count",{full:h.value===Gs}])},k(h.value)+"/"+k(Gs),3),d("button",{class:"icon-btn",onClick:U},Mk)]),d("p",xk,k(D(N)("max_3_fotos")),1),d("div",Lk,[(L(!0),$(ke,null,Qt(a.value,(Z,de)=>(L(),$("div",{key:Z.id,class:_e(["ci-picker-item",{selected:Z.selected,dimmed:!Z.selected&&h.value===Gs}]),onClick:Ve=>F(de)},[d("img",{src:Z.preview,alt:"Foto"},null,8,Uk),Z.selected?(L(),$("span",$k,jk)):(L(),$("span",qk,k(de+1),1))],10,Fk))),128))]),d("div",Hk,[d("button",{class:"btn-primary ci-picker-send",disabled:h.value===0,onClick:W},k(D(N)("enviar_fotos")),9,zk)])])])):be("",!0),d("div",Wk,[d("button",{class:_e(["ci-round-btn",{active:s.value}]),onClick:Q[1]||(Q[1]=Z=>s.value=!s.value)},[d("i",{class:_e(["mdi",s.value?"mdi-close":"mdi-paperclip"])},null,2)],2),d("div",Kk,[Is(d("textarea",{ref_key:"taRef",ref:l,"onUpdate:modelValue":Q[2]||(Q[2]=Z=>n.value=Z),rows:"1",placeholder:D(N)("enviar_ph"),class:"ci-textarea",onInput:v,onKeydown:wp(tn(g,["exact","prevent"]),["enter"])},null,40,Gk),[[Ts,n.value]]),Qk]),n.value.trim()?(L(),$("button",{key:0,class:"ci-round-btn btn-primary ci-send",onClick:g},Jk)):(L(),$("button",{key:1,class:_e(["ci-round-btn ci-send btn-primary",{recording:r.value}]),onClick:Te},[d("i",{class:_e(["mdi",r.value?"mdi-stop":"mdi-microphone"])},null,2)],2))]),r.value?(L(),$("div",Xk,[Zk,d("span",eD,k(D(N)("grabar")),1),d("span",tD,k(f.value),1)])):be("",!0),o.value?(L(),$("div",nD,[d("span",sD,k(o.value),1)])):be("",!0)]))}},oD=an(iD,[["__scopeId","data-v-bef45fbe"]]),is=t=>(xs("data-v-aa70e5e5"),t=t(),Ls(),t),aD={class:"chat-main-wrap"},cD=is(()=>d("div",{class:"cm-grid"},null,-1)),lD={class:"cm-header"},uD=is(()=>d("i",{class:"mdi mdi-menu"},null,-1)),hD=[uD],dD={class:"cm-header-info"},fD=is(()=>d("span",{class:"cm-status-dot"},null,-1)),mD={class:"cm-header-actions"},pD={class:"cm-menu"},gD=is(()=>d("i",{class:"mdi mdi-dots-horizontal"},null,-1)),_D=[gD],yD={key:0,class:"cm-pop"},vD=is(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),wD=is(()=>d("i",{class:"mdi mdi-image-multiple-outline"},null,-1)),ED={key:0,class:"cm-empty"},ID=is(()=>d("i",{class:"mdi mdi-chat-processing-outline cm-empty-icon"},null,-1)),TD={class:"cm-empty-sub"},AD={class:"cm-date-pill"},bD={class:"cm-photos"},RD={class:"cm-photos-head"},SD=is(()=>d("i",{class:"mdi mdi-close"},null,-1)),CD=[SD],PD={key:0,class:"cm-photos-grid"},kD=["src","onClick"],DD={key:1,class:"cm-photos-empty"},ND=["src"],OD={__name:"Messages",props:{conversationId:{type:String,required:!0},other:{type:Object,default:()=>({})},profile:{type:Object,default:()=>({})},isFavorite:{type:Boolean,default:!1}},emits:["openDrawer","openProfile","toggleFavorite"],setup(t,{emit:e}){const n=t,s=e,r=ve(()=>{var S,F,U,W;return{uid:((S=ut.currentUser)==null?void 0:S.uid)||"",displayName:((F=n.profile)==null?void 0:F.displayName)||((U=ut.currentUser)==null?void 0:U.displayName)||((W=ut.currentUser)==null?void 0:W.email)||""}}),i=ve(()=>{var S,F;return((S=n.profile)==null?void 0:S.photoURL)||((F=ut.currentUser)==null?void 0:F.photoURL)||""}),o=z([]),a=z(null),c=z(!1),l=z(!1),u=z(""),h=ve(()=>o.value.filter(S=>S.image)),f=()=>{c.value=!1,s("openProfile")},m=()=>{c.value=!1,s("toggleFavorite",n.conversationId)},v=()=>{c.value=!1,l.value=!0};let g=null;return $t(()=>n.conversationId,S=>{if(g&&(g(),g=null),o.value=[],!S)return;const F=ds(Kt(Ie,"conversations",S,"messages"),TS("time"));g=un(F,U=>{o.value=U.docs.map(W=>({id:W.id,...W.data()})),Ia(()=>{var le;const W=(le=a.value)==null?void 0:le.lastElementChild;W&&W.scrollIntoView({behavior:"smooth",block:"end"})})})},{immediate:!0}),Dr(()=>{g==null||g()}),(S,F)=>(L(),$("div",aD,[cD,d("header",lD,[d("button",{class:"icon-btn cm-menu-btn",onClick:F[0]||(F[0]=U=>S.$emit("openDrawer"))},hD),he(hn,{src:t.other.photo||"",name:t.other.name,size:"md"},null,8,["src","name"]),d("div",dD,[d("h2",null,k(t.other.name),1),d("p",null,[fD,Jt(" "+k(D(N)("en_linea")),1)])]),d("div",mD,[d("div",pD,[d("button",{class:_e(["icon-btn",{active:c.value}]),onClick:F[1]||(F[1]=U=>c.value=!c.value)},_D,2),c.value?(L(),$("div",yD,[d("button",{class:"cm-pop-item",onClick:f},[vD,d("span",null,k(D(N)("mi_perfil")),1)]),d("button",{class:"cm-pop-item",onClick:m},[d("i",{class:_e(["mdi",t.isFavorite?"mdi-star":"mdi-star-outline"])},null,2),d("span",null,k(t.isFavorite?D(N)("quitar_fav"):D(N)("ag_favoritos")),1)]),d("button",{class:"cm-pop-item",onClick:v},[wD,d("span",null,k(D(N)("fotos_compartidas")),1)])])):be("",!0)])])]),o.value.length===0?(L(),$("div",ED,[ID,d("p",null,k(D(N)("no_mensajes")),1),d("p",TD,k(D(N)("envia_primero")),1)])):(L(),$("div",{key:1,class:"cm-list",ref_key:"listRef",ref:a},[d("div",AD,k(D(N)("hoy")),1),(L(!0),$(ke,null,Qt(o.value,(U,W)=>{var le;return L(),ps(Sk,{key:U.id,message:U,"is-own":U.uid===r.value.uid,"show-avatar":W===0||((le=o.value[W-1])==null?void 0:le.uid)!==U.uid,avatar:U.uid===r.value.uid?i.value:t.other.photo,"sender-name":U.uid===r.value.uid?r.value.displayName:t.other.name},null,8,["message","is-own","show-avatar","avatar","sender-name"])}),128))],512)),t.conversationId?(L(),ps(oD,{key:2,"conversation-id":t.conversationId},null,8,["conversation-id"])):be("",!0),l.value?(L(),$("div",{key:3,class:"cm-modal",onClick:F[3]||(F[3]=tn(U=>l.value=!1,["self"]))},[d("div",bD,[d("div",RD,[d("h4",null,k(D(N)("fotos_compartidas")),1),d("button",{class:"icon-btn",onClick:F[2]||(F[2]=U=>l.value=!1)},CD)]),h.value.length?(L(),$("div",PD,[(L(!0),$(ke,null,Qt(h.value,U=>(L(),$("img",{key:U.id,src:U.image,alt:"Foto",onClick:W=>u.value=U.image},null,8,kD))),128))])):(L(),$("p",DD,k(D(N)("sin_fotos")),1))])])):be("",!0),u.value?(L(),$("div",{key:4,class:"cm-lightbox",onClick:F[4]||(F[4]=U=>u.value="")},[d("img",{src:u.value,alt:"Foto"},null,8,ND)])):be("",!0)]))}},VD=an(OD,[["__scopeId","data-v-aa70e5e5"]]),Hs=t=>(xs("data-v-70fa2247"),t=t(),Ls(),t),MD={class:"modal-card"},xD={class:"modal-head"},LD=Hs(()=>d("i",{class:"mdi mdi-close"},null,-1)),FD=[LD],UD={class:"set-row"},$D={class:"set-label"},BD=Hs(()=>d("i",{class:"mdi mdi-translate"},null,-1)),jD={class:"set-opts"},qD=Hs(()=>d("span",{class:"set-flag"},"🇪🇸",-1)),HD=Hs(()=>d("span",{class:"set-flag"},"🇺🇸",-1)),zD={class:"set-row"},WD={class:"set-label"},KD=Hs(()=>d("i",{class:"mdi mdi-palette-outline"},null,-1)),GD={class:"set-opts"},QD=Hs(()=>d("span",{class:"swatch swatch-orange"},null,-1)),YD=Hs(()=>d("span",{class:"swatch swatch-blue"},null,-1)),JD={__name:"SettingsPanel",emits:["close"],setup(t,{emit:e}){const n=e,s=()=>setTimeout(()=>n("close"),350),r=o=>{OS(o),s()},i=o=>{VS(o),s()};return(o,a)=>(L(),$("div",{class:"modal-backdrop",onClick:a[5]||(a[5]=tn(c=>n("close"),["self"]))},[d("div",MD,[d("div",xD,[d("h3",null,k(D(N)("configuracion")),1),d("button",{class:"icon-btn",onClick:a[0]||(a[0]=c=>n("close"))},FD)]),d("div",UD,[d("div",$D,[BD,d("span",null,k(D(N)("idioma")),1)]),d("div",jD,[d("button",{class:_e(["set-opt",{active:D(fa)==="es"}]),onClick:a[1]||(a[1]=c=>r("es"))},[qD,Jt(" "+k(D(N)("espanol")),1)],2),d("button",{class:_e(["set-opt",{active:D(fa)==="en"}]),onClick:a[2]||(a[2]=c=>r("en"))},[HD,Jt(" "+k(D(N)("english")),1)],2)])]),d("div",zD,[d("div",WD,[KD,d("span",null,k(D(N)("tema")),1)]),d("div",GD,[d("button",{class:_e(["set-opt set-theme",{active:D(ma)==="naranja"}]),onClick:a[3]||(a[3]=c=>i("naranja"))},[QD,Jt(" "+k(D(N)("naranja")),1)],2),d("button",{class:_e(["set-opt set-theme",{active:D(ma)==="azul"}]),onClick:a[4]||(a[4]=c=>i("azul"))},[YD,Jt(" "+k(D(N)("azul")),1)],2)])])])]))}},XD=an(JD,[["__scopeId","data-v-70fa2247"]]),kh=t=>(xs("data-v-3bc49a19"),t=t(),Ls(),t),ZD={class:"modal-card"},eN={class:"modal-head"},tN=kh(()=>d("i",{class:"mdi mdi-close"},null,-1)),nN=[tN],sN={class:"prof-avatar-wrap"},rN=kh(()=>d("i",{class:"mdi mdi-camera-outline"},null,-1)),iN={class:"field"},oN=["placeholder"],aN={class:"field"},cN=["disabled"],lN={key:0,class:"saved-note"},uN=kh(()=>d("i",{class:"mdi mdi-check-circle"},null,-1)),hN={__name:"ProfileModal",props:{profile:{type:Object,default:()=>({})}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,r=z(""),i=z(""),o=z(""),a=z(""),c=z(null),l=z(!1),u=z(!1);$t(()=>n.profile,g=>{!g||typeof g!="object"||(r.value=g.displayName||"",i.value=g.birthday||"",o.value=g.photoURL||"",a.value=g.photoURL||"")},{immediate:!0});const h=()=>{var g;(g=c.value)==null||g.click()},f=async g=>{var F;const E=(F=g.target.files)==null?void 0:F[0];if(g.target.value="",!E)return;const S=await m(E);S&&(o.value=S,a.value=S)},m=g=>new Promise(E=>{const S=new FileReader;S.onload=()=>{const F=new Image;F.onload=()=>{const W=Math.min(1,512/Math.max(F.naturalWidth,F.naturalHeight)),le=Math.max(1,Math.round(F.naturalWidth*W)),G=Math.max(1,Math.round(F.naturalHeight*W)),Te=document.createElement("canvas");Te.width=le,Te.height=G;const Ce=Te.getContext("2d");if(!Ce)return E(S.result);Ce.fillStyle="#fff",Ce.fillRect(0,0,le,G),Ce.drawImage(F,0,0,le,G),E(Te.toDataURL("image/jpeg",.8))},F.onerror=()=>E(null),F.src=S.result},S.onerror=()=>E(null),S.readAsDataURL(g)}),v=async()=>{var E;const g=ut.currentUser;if(g){l.value=!0;try{const S={displayName:r.value.trim()||((E=g.email)==null?void 0:E.split("@")[0])||"Usuario",photoURL:o.value||"",birthday:i.value||""};await Dt($e(Ie,"users",g.uid),S,{merge:!0}),await Pu(g,{displayName:S.displayName,photoURL:S.photoURL}).catch(()=>{}),u.value=!0,setTimeout(()=>s("close"),600)}catch(S){console.log(S)}finally{l.value=!1}}};return(g,E)=>(L(),$("div",{class:"modal-backdrop",onClick:E[3]||(E[3]=tn(S=>s("close"),["self"]))},[d("div",ZD,[d("div",eN,[d("h3",null,k(D(N)("mi_perfil")),1),d("button",{class:"icon-btn",onClick:E[0]||(E[0]=S=>s("close"))},nN)]),d("div",sN,[he(hn,{src:a.value,name:r.value||"?",size:"xl"},null,8,["src","name"]),d("button",{class:"prof-photo-btn",onClick:h},[rN,d("span",null,k(D(N)("cambiar_foto")),1)]),d("input",{ref_key:"photoInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:f},null,544)]),d("div",iN,[d("label",null,k(D(N)("alias")),1),Is(d("input",{"onUpdate:modelValue":E[1]||(E[1]=S=>r.value=S),type:"text",placeholder:D(N)("alias_ph")},null,8,oN),[[Ts,r.value]])]),d("div",aN,[d("label",null,k(D(N)("cumpleanos")),1),Is(d("input",{"onUpdate:modelValue":E[2]||(E[2]=S=>i.value=S),type:"date"},null,512),[[Ts,i.value]])]),d("button",{class:"save-btn btn-primary",type:"button",disabled:l.value,onClick:v},[d("span",null,k(l.value?D(N)("cargando"):D(N)("guardar")),1)],8,cN),u.value?(L(),$("p",lN,[uN,Jt(" "+k(D(N)("guardado")),1)])):be("",!0)])]))}},dN=an(hN,[["__scopeId","data-v-3bc49a19"]]),fN={key:0,class:"app-loading"},mN=d("div",{class:"app-spinner"},null,-1),pN={key:2,class:"app-chat"},gN={class:"side-desktop"},_N={key:1,class:"side-mobile"},yN={key:3,class:"app-placeholder"},vN=d("i",{class:"mdi mdi-chat-processing-outline"},null,-1),wN=[vN],EN={class:"app-placeholder-sub"},IN={__name:"App",setup(t){Uy();const e=z(null),n=z(!1),s=z(!1),r=z(null),i=z({}),o=z(!1),a=z(!1);let c=null;const l=({id:m,other:v})=>{r.value={id:m,other:v},s.value=!1},u=ve(()=>i.value.favorites||[]),h=ve(()=>r.value?u.value.includes(r.value.id):!1),f=async m=>{const v=ut.currentUser;if(!v)return;const g=$e(Ie,"users",v.uid);try{u.value.includes(m)?await Bo(g,{favorites:Ly(m)}):await Bo(g,{favorites:bs(m)})}catch(E){console.log(E)}};return lT(ut,async m=>{if(e.value=m,n.value=!0,m){try{const v=S=>(S||"").trim().split(/\s+/)[0]||"",g=$e(Ie,"users",m.uid),E=await Yl(g);if(E.exists()){const S=E.data(),F={lastSeen:jo()},U=v(m.displayName);U&&S.displayName&&S.displayName===(m.displayName||"")&&S.displayName.includes(" ")&&S.displayName!==U&&(F.displayName=U),await Bo(g,F)}else{const S=v(m.displayName)||v(m.email);await Dt(g,{uid:m.uid,displayName:S,email:m.email,photoURL:m.photoURL||"",lastSeen:jo(),createdAt:jo()}),Pu(ut.currentUser,{displayName:S}).catch(()=>{})}}catch(v){console.error("Error registrando usuario:",v)}c==null||c(),c=un($e(Ie,"users",m.uid),v=>{i.value=v.data()||{}},v=>console.error("denied:me",v.code))}else c==null||c(),c=null}),Dr(()=>{c==null||c()}),(m,v)=>(L(),$(ke,null,[n.value?e.value?(L(),$("div",pN,[d("div",gN,[he(qf,{"active-id":r.value?r.value.id:"",profile:i.value,favorites:u.value,onOpen:l,onOpenProfile:v[0]||(v[0]=g=>a.value=!0),onOpenSettings:v[1]||(v[1]=g=>o.value=!0)},null,8,["active-id","profile","favorites"])]),s.value?(L(),$("div",{key:0,class:"overlay",onClick:v[2]||(v[2]=g=>s.value=!1)})):be("",!0),s.value?(L(),$("div",_N,[he(qf,{"active-id":r.value?r.value.id:"",profile:i.value,favorites:u.value,"is-mobile":"",onOpen:l,onClose:v[3]||(v[3]=g=>s.value=!1),onOpenProfile:v[4]||(v[4]=g=>a.value=!0),onOpenSettings:v[5]||(v[5]=g=>o.value=!0)},null,8,["active-id","profile","favorites"])])):be("",!0),r.value?(L(),ps(VD,{key:2,"conversation-id":r.value.id,other:r.value.other,profile:i.value,"is-favorite":h.value,onOpenDrawer:v[6]||(v[6]=g=>s.value=!0),onOpenProfile:v[7]||(v[7]=g=>a.value=!0),onToggleFavorite:f},null,8,["conversation-id","other","profile","is-favorite"])):(L(),$("div",yN,[d("button",{class:"app-placeholder-icon",onClick:v[8]||(v[8]=g=>s.value=!0)},wN),d("p",null,k(D(N)("selecciona")),1),d("p",EN,k(D(N)("para_chatear")),1)]))])):(L(),ps(CC,{key:1})):(L(),$("div",fN,[mN,d("span",null,k(D(N)("cargando")),1)])),o.value?(L(),ps(XD,{key:3,onClose:v[9]||(v[9]=g=>o.value=!1)})):be("",!0),a.value?(L(),ps(dN,{key:4,profile:i.value,onClose:v[10]||(v[10]=g=>a.value=!1)},null,8,["profile"])):be("",!0)],64))}};function TN(t,e){let n;function s(){n=gv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}$t(t,r=>{r&&!n?s():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),vv(()=>{n==null||n.stop()})}const en=typeof window<"u",AN=en&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function bN(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let r=0;r<s;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function Hf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),bN(t,e.split("."),n))}function jy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function zf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function el(t,e){return e.every(n=>t.hasOwnProperty(n))}function RN(t,e){const n={},s=new Set(Object.keys(t));for(const r of e)s.has(r)&&(n[r]=t[r]);return n}function SN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Wf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Kf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function CN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function bn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const r in t)s[r]=t[r];for(const r in e){const i=t[r],o=e[r];if(zf(i)&&zf(o)){s[r]=bn(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){s[r]=n(i,o);continue}s[r]=o}return s}function fr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(fr.cache.has(t))return fr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return fr.cache.set(t,e),e}fr.cache=new Map;const Qs=2.4,Gf=.2126729,Qf=.7151522,Yf=.072175,PN=.55,kN=.58,DN=.57,NN=.62,bo=.03,Jf=1.45,ON=5e-4,VN=1.25,MN=1.25,Xf=.078,Zf=12.82051282051282,Ro=.06,em=.001;function tm(t,e){const n=(t.r/255)**Qs,s=(t.g/255)**Qs,r=(t.b/255)**Qs,i=(e.r/255)**Qs,o=(e.g/255)**Qs,a=(e.b/255)**Qs;let c=n*Gf+s*Qf+r*Yf,l=i*Gf+o*Qf+a*Yf;if(c<=bo&&(c+=(bo-c)**Jf),l<=bo&&(l+=(bo-l)**Jf),Math.abs(l-c)<ON)return 0;let u;if(l>c){const h=(l**PN-c**kN)*VN;u=h<em?0:h<Xf?h-h*Zf*Ro:h-Ro}else{const h=(l**NN-c**DN)*MN;u=h>-em?0:h>-Xf?h-h*Zf*Ro:h+Ro}return u*100}const pa=.20689655172413793,xN=t=>t>pa**3?Math.cbrt(t):t/(3*pa**2)+4/29,LN=t=>t>pa?t**3:3*pa**2*(t-4/29);function qy(t){const e=xN,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Hy(t){const e=LN,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const FN=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],UN=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,$N=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],BN=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function zy(t){const e=Array(3),n=UN,s=FN;for(let r=0;r<3;++r)e[r]=Math.round(SN(n(s[r][0]*t[0]+s[r][1]*t[1]+s[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Dh(t){let{r:e,g:n,b:s}=t;const r=[0,0,0],i=BN,o=$N;e=i(e/255),n=i(n/255),s=i(s/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return r}const nm=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,jN={rgb:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),rgba:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),hsl:(t,e,n,s)=>sm({h:t,s:e,l:n,a:s}),hsla:(t,e,n,s)=>sm({h:t,s:e,l:n,a:s}),hsv:(t,e,n,s)=>Mi({h:t,s:e,v:n,a:s}),hsva:(t,e,n,s)=>Mi({h:t,s:e,v:n,a:s})};function yn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&nm.test(t)){const{groups:e}=t.match(nm),{fn:n,values:s}=e,r=s.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return jN[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),HN(e)}else if(typeof t=="object"){if(el(t,["r","g","b"]))return t;if(el(t,["h","s","l"]))return Mi(Wy(t));if(el(t,["h","s","v"]))return Mi(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Mi(t){const{h:e,s:n,v:s,a:r}=t,i=a=>{const c=(a+e/60)%6;return s-s*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function sm(t){return Mi(Wy(t))}function Wy(t){const{h:e,s:n,l:s,a:r}=t,i=s+n*Math.min(s,1-s),o=i===0?0:2-2*s/i;return{h:e,s:o,v:i,a:r}}function So(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function qN(t){let{r:e,g:n,b:s,a:r}=t;return`#${[So(e),So(n),So(s),r!==void 0?So(Math.round(r*255)):""].join("")}`}function HN(t){t=zN(t);let[e,n,s,r]=CN(t,2).map(i=>parseInt(i,16));return r=r===void 0?r:r/255,{r:e,g:n,b:s,a:r}}function zN(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Wf(Wf(t,6),8,"F")),t}function WN(t,e){const n=qy(Dh(t));return n[0]=n[0]+e*10,zy(Hy(n))}function KN(t,e){const n=qy(Dh(t));return n[0]=n[0]-e*10,zy(Hy(n))}function GN(t){const e=yn(t);return Dh(e)[1]}function QN(t){const e=Math.abs(tm(yn(0),yn(t)));return Math.abs(tm(yn(16777215),yn(t)))>Math.min(e,50)?"#fff":"#000"}function Ky(t,e){return n=>Object.keys(t).reduce((s,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?s[r]={...o,default:n[r]}:s[r]=o,e&&!s[r].source&&(s[r].source=e),s},{})}const xi=Symbol.for("vuetify:defaults");function YN(t){return z(t)}function Gy(){const t=ii(xi);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function JN(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[fr(e)])<"u"}function XN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gy();const s=yc("useDefaults");if(e=e??s.type.name??s.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=ve(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,l){var h,f,m,v;const u=Reflect.get(c,l);return l==="class"||l==="style"?[(h=r.value)==null?void 0:h[l],u].filter(g=>g!=null):typeof l=="string"&&!JN(s.vnode,l)?((f=r.value)==null?void 0:f[l])??((v=(m=n.value)==null?void 0:m.global)==null?void 0:v[l])??u:u}}),o=rr();du(()=>{if(r.value){const c=Object.entries(r.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=e2(xi,s);rp(xi,ve(()=>o.value?bn((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function io(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Ky(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(s){return RN(s,e)},t.props._as=String,t.setup=function(s,r){const i=Gy();if(!i.value)return t._setup(s,r);const{props:o,provideSubDefaults:a}=XN(s,s._as??t.name,i),c=t._setup(o,r);return a(),c}}return t}function ZN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?io:hw)(e)}function yc(t,e){const n=Kw();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Qy=0,qo=new WeakMap;function Yy(){const t=yc("getUid");if(qo.has(t))return qo.get(t);{const e=Qy++;return qo.set(t,e),e}}Yy.reset=()=>{Qy=0,qo=new WeakMap};function e2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:yc("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function t2(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=yc("useProxiedModel"),o=z(t[e]!==void 0?t[e]:n),a=fr(e),l=ve(a!==e?()=>{var h,f,m,v;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(v=i.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});TN(()=>!l.value,()=>{$t(()=>t[e],h=>{o.value=h})});const u=ve({get(){const h=t[e];return s(l.value?h:o.value)},set(h){const f=r(h),m=we(l.value?t[e]:o.value);m===f||s(m)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const n2={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},rm="$vuetify.",im=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),Jy=(t,e,n)=>function(s){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(!s.startsWith(rm))return im(s,i);const a=s.replace(rm,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=Hf(c,a,null);return u||(`${s}${t.value}`,u=Hf(l,a,null)),u||(u=s),typeof u!="string"&&(u=s),im(u,i)};function Xy(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function tl(t,e,n){const s=t2(t,e,t[e]??n.value);return s.value=t[e]??n.value,$t(n,r=>{t[e]==null&&(s.value=n.value)}),s}function Zy(t){return e=>{const n=tl(e,"locale",t.current),s=tl(e,"fallback",t.fallback),r=tl(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:r,t:Jy(n,s,r),n:Xy(n,s),provide:Zy({current:n,fallback:s,messages:r})}}}function s2(t){const e=rr((t==null?void 0:t.locale)??"en"),n=rr((t==null?void 0:t.fallback)??"en"),s=z({en:n2,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:Jy(e,n,s),n:Xy(e,n),provide:Zy({current:e,fallback:n,messages:s})}}const om=Symbol.for("vuetify:locale");function r2(t){return t.name!=null}function i2(t){const e=t!=null&&t.adapter&&r2(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:s2(t),n=a2(e,t);return{...e,...n}}function o2(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function a2(t,e){const n=z((e==null?void 0:e.rtl)??o2()),s=ve(()=>n.value[t.current.value]??!1);return{isRtl:s,rtl:n,rtlClasses:ve(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}const Li={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function c2(t,e){const n=[];let s=[];const r=ev(t),i=tv(t),o=(r.getDay()-Li[e.slice(-2).toUpperCase()]+7)%7,a=(i.getDay()-Li[e.slice(-2).toUpperCase()]+7)%7;for(let c=0;c<o;c++){const l=new Date(r);l.setDate(l.getDate()-(o-c)),s.push(l)}for(let c=1;c<=i.getDate();c++){const l=new Date(t.getFullYear(),t.getMonth(),c);s.push(l),s.length===7&&(n.push(s),s=[])}for(let c=1;c<7-a;c++){const l=new Date(i);l.setDate(l.getDate()+c),s.push(l)}return s.length>0&&n.push(s),n}function l2(t,e){const n=new Date(t);for(;n.getDay()!==(Li[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function u2(t,e){const n=new Date(t),s=((Li[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==s;)n.setDate(n.getDate()+1);return n}function ev(t){return new Date(t.getFullYear(),t.getMonth(),1)}function tv(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function h2(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const d2=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function nv(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(d2.test(t))return h2(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const am=new Date(2e3,0,2);function f2(t){const e=Li[t.slice(-2).toUpperCase()];return jy(7).map(n=>{const s=new Date(am);return s.setDate(am.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function m2(t,e,n,s){const r=nv(t)??new Date,i=s==null?void 0:s[e];if(typeof i=="function")return i(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function p2(t,e){const n=t.toJsDate(e),s=n.getFullYear(),r=Kf(String(n.getMonth()+1),2,"0"),i=Kf(String(n.getDate()),2,"0");return`${s}-${r}-${i}`}function g2(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s)}function _2(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function y2(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function v2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function w2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function E2(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function I2(t){return t.getFullYear()}function T2(t){return t.getMonth()}function A2(t){return t.getDate()}function b2(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function R2(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function S2(t){return t.getHours()}function C2(t){return t.getMinutes()}function P2(t){return new Date(t.getFullYear(),0,1)}function k2(t){return new Date(t.getFullYear(),11,31)}function D2(t,e){return ga(t,e[0])&&V2(t,e[1])}function N2(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function ga(t,e){return t.getTime()>e.getTime()}function O2(t,e){return ga(Xl(t),Xl(e))}function V2(t,e){return t.getTime()<e.getTime()}function cm(t,e){return t.getTime()===e.getTime()}function M2(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function x2(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function L2(t,e){return t.getFullYear()===e.getFullYear()}function F2(t,e,n){const s=new Date(t),r=new Date(e);switch(n){case"years":return s.getFullYear()-r.getFullYear();case"quarters":return Math.floor((s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12)/4);case"months":return s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((s.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((s.getTime()-r.getTime())/1e3);default:return s.getTime()-r.getTime()}}function U2(t,e){const n=new Date(t);return n.setHours(e),n}function $2(t,e){const n=new Date(t);return n.setMinutes(e),n}function B2(t,e){const n=new Date(t);return n.setMonth(e),n}function j2(t,e){const n=new Date(t);return n.setDate(e),n}function q2(t,e){const n=new Date(t);return n.setFullYear(e),n}function Xl(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function H2(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class z2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return nv(e)}toJsDate(e){return e}toISO(e){return p2(this,e)}parseISO(e){return g2(e)}addMinutes(e,n){return _2(e,n)}addHours(e,n){return y2(e,n)}addDays(e,n){return v2(e,n)}addWeeks(e,n){return w2(e,n)}addMonths(e,n){return E2(e,n)}getWeekArray(e){return c2(e,this.locale)}startOfWeek(e){return l2(e,this.locale)}endOfWeek(e){return u2(e,this.locale)}startOfMonth(e){return ev(e)}endOfMonth(e){return tv(e)}format(e,n){return m2(e,n,this.locale,this.formats)}isEqual(e,n){return cm(e,n)}isValid(e){return N2(e)}isWithinRange(e,n){return D2(e,n)}isAfter(e,n){return ga(e,n)}isAfterDay(e,n){return O2(e,n)}isBefore(e,n){return!ga(e,n)&&!cm(e,n)}isSameDay(e,n){return M2(e,n)}isSameMonth(e,n){return x2(e,n)}isSameYear(e,n){return L2(e,n)}setMinutes(e,n){return $2(e,n)}setHours(e,n){return U2(e,n)}setMonth(e,n){return B2(e,n)}setDate(e,n){return j2(e,n)}setYear(e,n){return q2(e,n)}getDiff(e,n,s){return F2(e,n,s)}getWeekdays(){return f2(this.locale)}getYear(e){return I2(e)}getMonth(e){return T2(e)}getDate(e){return A2(e)}getNextMonth(e){return b2(e)}getPreviousMonth(e){return R2(e)}getHours(e){return S2(e)}getMinutes(e){return C2(e)}startOfDay(e){return Xl(e)}endOfDay(e){return H2(e)}startOfYear(e){return P2(e)}endOfYear(e){return k2(e)}}const W2=Symbol.for("vuetify:date-options"),lm=Symbol.for("vuetify:date-adapter");function K2(t,e){const n=bn({adapter:z2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:G2(n,e)}}function G2(t,e){const n=kr(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return $t(e.current,s=>{n.locale=t.locale[s]??s??n.locale}),n}const um=Symbol.for("vuetify:display"),hm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Q2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hm;return bn(hm,t)};function dm(t){return en&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function fm(t){return en&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function mm(t){const e=en&&!t?window.navigator.userAgent:"ssr";function n(v){return!!e.match(v)}const s=n(/android/i),r=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:s,ios:r,cordova:i,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:h,mac:f,linux:m,touch:AN,ssr:e==="ssr"}}function Y2(t,e){const{thresholds:n,mobileBreakpoint:s}=Q2(t),r=rr(fm(e)),i=rr(mm(e)),o=kr({}),a=rr(dm(e));function c(){r.value=fm(),a.value=dm()}function l(){c(),i.value=mm()}return du(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),m=a.value<n.xl&&!(f||h||u),v=a.value<n.xxl&&!(m||f||h||u),g=a.value>=n.xxl,E=u?"xs":h?"sm":f?"md":m?"lg":v?"xl":"xxl",S=typeof s=="number"?s:n[s],F=a.value<S;o.xs=u,o.sm=h,o.md=f,o.lg=m,o.xl=v,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||m),o.smAndDown=!(f||m||v||g),o.mdAndDown=!(m||v||g),o.lgAndDown=!(v||g),o.xlAndDown=!g,o.name=E,o.height=r.value,o.width=a.value,o.mobile=F,o.mobileBreakpoint=s,o.platform=i.value,o.thresholds=n}),en&&window.addEventListener("resize",c,{passive:!0}),{...zv(o),update:l,ssr:!!e}}const J2=Symbol.for("vuetify:goto");function X2(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function Z2(t,e){return{rtl:e.isRtl,options:bn(X2(),t)}}const eO={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},tO={component:t=>Zw(sv,{...t,class:"mdi"})},nO=[String,Function,Object,Array],pm=Symbol.for("vuetify:icons"),vc=Ky({icon:{type:nO},tag:{type:String,required:!0}},"icon");ZN()({name:"VComponentIcon",props:vc(),setup(t,e){let{slots:n}=e;return()=>{const s=t.icon;return he(t.tag,null,{default:()=>{var r;return[t.icon?he(s,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}});const sO=io({name:"VSvgIcon",inheritAttrs:!1,props:vc(),setup(t,e){let{attrs:n}=e;return()=>he(t.tag,_p(n,{style:null}),{default:()=>[he("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(s=>Array.isArray(s)?he("path",{d:s[0],"fill-opacity":s[1]},null):he("path",{d:s},null)):he("path",{d:t.icon},null)])]})}});io({name:"VLigatureIcon",props:vc(),setup(t){return()=>he(t.tag,null,{default:()=>[t.icon]})}});const sv=io({name:"VClassIcon",props:vc(),setup(t){return()=>he(t.tag,{class:t.icon},null)}});function rO(){return{svg:{component:sO},class:{component:sv}}}function iO(t){const e=rO(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=tO),bn({defaultSet:n,sets:e,aliases:{...eO,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const gm=Symbol.for("vuetify:theme");function _m(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function oO(){var s,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_m();const e=_m();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(s=e.themes)==null?void 0:s.dark:(r=e.themes)==null?void 0:r.light;n[i]=bn(a,o)}return bn(e,{...t,themes:n})}function aO(t){const e=oO(t),n=z(e.defaultTheme),s=z(e.themes),r=ve(()=>{const u={};for(const[h,f]of Object.entries(s.value)){const m=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const v of e.variations.colors){const g=m.colors[v];if(g)for(const E of["lighten","darken"]){const S=E==="lighten"?WN:KN;for(const F of jy(e.variations[E],1))m.colors[`${v}-${E}-${F}`]=qN(S(yn(g),F))}}for(const v of Object.keys(m.colors)){if(/^on-[a-z]/.test(v)||m.colors[`on-${v}`])continue;const g=`on-${v}`,E=yn(m.colors[v]);m.colors[g]=QN(E)}}return u}),i=ve(()=>r.value[n.value]),o=ve(()=>{var v;const u=[];(v=i.value)!=null&&v.dark&&us(u,":root",["color-scheme: dark"]),us(u,":root",ym(i.value));for(const[g,E]of Object.entries(r.value))us(u,`.v-theme--${g}`,[`color-scheme: ${E.dark?"dark":"normal"}`,...ym(E)]);const h=[],f=[],m=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of m)/^on-[a-z]/.test(g)?us(f,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(us(h,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),us(f,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),us(f,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...h,...f),u.map((g,E)=>E===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);en&&$t(o,()=>{f.patch(a)})}else en?(h.addHeadObjs(ve(a)),du(()=>h.updateDOM())):h.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!f){const v=document.createElement("style");v.type="text/css",v.id="vuetify-theme-stylesheet",e.cspNonce&&v.setAttribute("nonce",e.cspNonce),f=v,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=en?document.getElementById("vuetify-theme-stylesheet"):null;en?$t(o,m,{immediate:!0}):m()}}const l=ve(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:s,current:i,computedThemes:r,themeClasses:l,styles:o,global:{name:n,current:i}}}function us(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function ym(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[r,i]of Object.entries(t.colors)){const o=yn(i);s.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||s.push(`--v-theme-${r}-overlay-multiplier: ${GN(i)>.18?e:n}`)}for(const[r,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?yn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${r}: ${a??i}`)}return s}function rv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=bn(e,n),{aliases:r={},components:i={},directives:o={}}=s,a=YN(s.defaults),c=Y2(s.display,s.ssr),l=aO(s.theme),u=iO(s.icons),h=i2(s.locale),f=K2(s.date,h),m=Z2(s.goTo,h);return{install:g=>{for(const E in o)g.directive(E,o[E]);for(const E in i)g.component(E,i[E]);for(const E in r)g.component(E,io({...r[E],name:E,aliasName:r[E].name}));if(l.install(g),g.provide(xi,a),g.provide(um,c),g.provide(gm,l),g.provide(pm,u),g.provide(om,h),g.provide(W2,f.options),g.provide(lm,f.instance),g.provide(J2,m),en&&s.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:E}=g;g.mount=function(){const S=E(...arguments);return Ia(()=>c.update()),g.mount=E,S}}Yy.reset(),g.mixin({computed:{$vuetify(){return kr({defaults:Ys.call(this,xi),display:Ys.call(this,um),theme:Ys.call(this,gm),icons:Ys.call(this,pm),locale:Ys.call(this,om),date:Ys.call(this,lm)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h,date:f,goTo:m}}const cO="3.6.3";rv.version=cO;function Ys(t){var s,r;const e=this.$,n=((s=e.parent)==null?void 0:s.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const lO=rv({theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FF6A00",secondary:"#F7F7F7",accent:"#FFB27D",error:"#EF4444",info:"#0EA5E9",success:"#22C55E",warning:"#F59E0B",background:"#FFFFFF",surface:"#FFFFFF"}}}}}),uO="modulepreload",hO=function(t){return"/friendzy/"+t},vm={},dO=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=hO(a),a in vm)return;vm[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":uO,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function fO(){(await dO(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Inter:100,300,400,500,600,700,800,900&display=swap"]}})}fO();C0(IN).use(lO).mount("#app");
