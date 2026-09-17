(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Re={},ts=[],kt=()=>{},iv=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zl=t=>t.startsWith("onUpdate:"),ze=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,me=(t,e)=>ov.call(t,e),ee=Array.isArray,ns=t=>ga(t)==="[object Map]",wm=t=>ga(t)==="[object Set]",ie=t=>typeof t=="function",Be=t=>typeof t=="string",Vr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Em=t=>(De(t)||ie(t))&&ie(t.then)&&ie(t.catch),Im=Object.prototype.toString,ga=t=>Im.call(t),av=t=>ga(t).slice(8,-1),Tm=t=>ga(t)==="[object Object]",tu=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cv=/-(\w)/g,fs=_a(t=>t.replace(cv,(e,n)=>n?n.toUpperCase():"")),lv=/\B([A-Z])/g,Mr=_a(t=>t.replace(lv,"-$1").toLowerCase()),Am=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),wc=_a(t=>t?`on${Am(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Ro=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nh;const Rm=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cs(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?fv(r):Cs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||De(t))return t}const uv=/;(?![^(]*\))/g,hv=/:([^]+)/,dv=/\/\*[^]*?\*\//g;function fv(t){const e={};return t.replace(dv,"").split(uv).forEach(n=>{if(n){const r=n.split(hv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ye(t){let e="";if(Be(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=ye(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pv=Xl(mv);function Sm(t){return!!t||t===""}const N=t=>Be(t)?t:t==null?"":ee(t)||De(t)&&(t.toString===Im||!ie(t.toString))?JSON.stringify(t,Cm,2):String(t),Cm=(t,e)=>e&&e.__v_isRef?Cm(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ec(r,i)+" =>"]=s,n),{})}:wm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ec(n))}:Vr(e)?Ec(e):De(e)&&!ee(e)&&!Tm(e)?String(e):e,Ec=(t,e="")=>{var n;return Vr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Pm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function gv(t){return new Pm(t)}function _v(t,e=At){e&&e.active&&e.effects.push(t)}function yv(){return At}function vv(t){At&&At.cleanups.push(t)}let wr;class nu{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,_v(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Xn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(wv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Zn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=$n,n=wr;try{return $n=!0,wr=this,this._runnings++,Oh(this),this.fn()}finally{Vh(this),this._runnings--,wr=n,$n=e}}stop(){this.active&&(Oh(this),Vh(this),this.onStop&&this.onStop(),this.active=!1)}}function wv(t){return t.value}function Oh(t){t._trackId++,t._depsLength=0}function Vh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)km(t.deps[e],t);t.deps.length=t._depsLength}}function km(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let $n=!0,nl=0;const Dm=[];function Xn(){Dm.push($n),$n=!1}function Zn(){const t=Dm.pop();$n=t===void 0?!0:t}function ru(){nl++}function su(){for(nl--;!nl&&rl.length;)rl.shift()()}function Nm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&km(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const rl=[];function Om(t,e,n){ru();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&rl.push(r.scheduler)))}su()}const Vm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},jo=new WeakMap,Er=Symbol(""),sl=Symbol("");function Et(t,e,n){if($n&&wr){let r=jo.get(t);r||jo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Vm(()=>r.delete(n))),Nm(wr,s)}}function _n(t,e,n,r,s,i){const o=jo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Vr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?tu(n)&&a.push(o.get("length")):(a.push(o.get(Er)),ns(t)&&a.push(o.get(sl)));break;case"delete":ee(t)||(a.push(o.get(Er)),ns(t)&&a.push(o.get(sl)));break;case"set":ns(t)&&a.push(o.get(Er));break}ru();for(const c of a)c&&Om(c,4);su()}function Ev(t,e){const n=jo.get(t);return n&&n.get(e)}const Iv=Xl("__proto__,__v_isRef,__isVue"),Mm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vr)),Mh=Tv();function Tv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let i=0,o=this.length;i<o;i++)Et(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(pe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xn(),ru();const r=pe(this)[e].apply(this,n);return su(),Zn(),r}}),t}function Av(t){Vr(t)||(t=String(t));const e=pe(this);return Et(e,"has",t),e.hasOwnProperty(t)}class xm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Lv:$m:i?Um:Fm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ee(e);if(!s){if(o&&me(Mh,n))return Reflect.get(Mh,n,r);if(n==="hasOwnProperty")return Av}const a=Reflect.get(e,n,r);return(Vr(n)?Mm.has(n):Iv(n))||(s||Et(e,"get",n),i)?a:pt(a)?o&&tu(n)?a:a.value:De(a)?s?Bm(a):Ps(a):a}}class Lm extends xm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=hi(i);if(!qo(r)&&!hi(r)&&(i=pe(i),r=pe(r)),!ee(e)&&pt(i)&&!pt(r))return c?!1:(i.value=r,!0)}const o=ee(e)&&tu(n)?Number(n)<e.length:me(e,n),a=Reflect.set(e,n,r,s);return e===pe(s)&&(o?Kn(r,i)&&_n(e,"set",n,r):_n(e,"add",n,r)),a}deleteProperty(e,n){const r=me(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Vr(n)||!Mm.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ee(e)?"length":Er),Reflect.ownKeys(e)}}class bv extends xm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rv=new Lm,Sv=new bv,Cv=new Lm(!0);const iu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function ao(t,e,n=!1,r=!1){t=t.__v_raw;const s=pe(t),i=pe(e);n||(Kn(e,i)&&Et(s,"get",e),Et(s,"get",i));const{has:o}=ya(s),a=r?iu:n?cu:di;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function co(t,e=!1){const n=this.__v_raw,r=pe(n),s=pe(t);return e||(Kn(t,s)&&Et(r,"has",t),Et(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lo(t,e=!1){return t=t.__v_raw,!e&&Et(pe(t),"iterate",Er),Reflect.get(t,"size",t)}function xh(t){t=pe(t);const e=pe(this);return ya(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function Lh(t,e){e=pe(e);const n=pe(this),{has:r,get:s}=ya(n);let i=r.call(n,t);i||(t=pe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Kn(e,o)&&_n(n,"set",t,e):_n(n,"add",t,e),this}function Fh(t){const e=pe(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&_n(e,"delete",t,void 0),i}function Uh(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&_n(t,"clear",void 0,void 0),n}function uo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=pe(o),c=e?iu:t?cu:di;return!t&&Et(a,"iterate",Er),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ho(t,e,n){return function(...r){const s=this.__v_raw,i=pe(s),o=ns(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?iu:e?cu:di;return!e&&Et(i,"iterate",c?sl:Er),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Dn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pv(){const t={get(i){return ao(this,i)},get size(){return lo(this)},has:co,add:xh,set:Lh,delete:Fh,clear:Uh,forEach:uo(!1,!1)},e={get(i){return ao(this,i,!1,!0)},get size(){return lo(this)},has:co,add:xh,set:Lh,delete:Fh,clear:Uh,forEach:uo(!1,!0)},n={get(i){return ao(this,i,!0)},get size(){return lo(this,!0)},has(i){return co.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:uo(!0,!1)},r={get(i){return ao(this,i,!0,!0)},get size(){return lo(this,!0)},has(i){return co.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ho(i,!1,!1),n[i]=ho(i,!0,!1),e[i]=ho(i,!1,!0),r[i]=ho(i,!0,!0)}),[t,n,e,r]}const[kv,Dv,Nv,Ov]=Pv();function ou(t,e){const n=e?t?Ov:Nv:t?Dv:kv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(me(n,s)&&s in r?n:r,s,i)}const Vv={get:ou(!1,!1)},Mv={get:ou(!1,!0)},xv={get:ou(!0,!1)};const Fm=new WeakMap,Um=new WeakMap,$m=new WeakMap,Lv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uv(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(av(t))}function Ps(t){return hi(t)?t:au(t,!1,Rv,Vv,Fm)}function $v(t){return au(t,!1,Cv,Mv,Um)}function Bm(t){return au(t,!0,Sv,xv,$m)}function au(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Uv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ei(t){return hi(t)?ei(t.__v_raw):!!(t&&t.__v_isReactive)}function hi(t){return!!(t&&t.__v_isReadonly)}function qo(t){return!!(t&&t.__v_isShallow)}function jm(t){return t?!!t.__v_raw:!1}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Bv(t){return Object.isExtensible(t)&&bm(t,"__v_skip",!0),t}const di=t=>De(t)?Ps(t):t,cu=t=>De(t)?Bm(t):t;class qm{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new nu(()=>e(this._value),()=>So(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=pe(this);return(!e._cacheable||e.effect.dirty)&&Kn(e._value,e._value=e.effect.run())&&So(e,4),Hm(e),e.effect._dirtyLevel>=2&&So(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function jv(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new qm(r,s,i||!s,n)}function Hm(t){var e;$n&&wr&&(t=pe(t),Nm(wr,(e=t.dep)!=null?e:t.dep=Vm(()=>t.dep=void 0,t instanceof qm?t:void 0)))}function So(t,e=4,n){t=pe(t);const r=t.dep;r&&Om(r,e)}function pt(t){return!!(t&&t.__v_isRef===!0)}function G(t){return zm(t,!1)}function rs(t){return zm(t,!0)}function zm(t,e){return pt(t)?t:new qv(t,e)}class qv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:di(e)}get value(){return Hm(this),this._value}set value(e){const n=this.__v_isShallow||qo(e)||hi(e);e=n?e:pe(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:di(e),So(this,4))}}function O(t){return pt(t)?t.value:t}const Hv={get:(t,e,n)=>O(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pt(s)&&!pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Wm(t){return ei(t)?t:new Proxy(t,Hv)}function zv(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=Kv(t,n);return e}class Wv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(pe(this._object),this._key)}}function Kv(t,e,n){const r=t[e];return pt(r)?r:new Wv(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bn(t,e,n,r){try{return r?t(...r):t()}catch(s){va(s,e,n)}}function Lt(t,e,n,r){if(ie(t)){const s=Bn(t,e,n,r);return s&&Em(s)&&s.catch(i=>{va(i,e,n)}),s}if(ee(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Lt(t[i],e,n,r));return s}}function va(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Xn(),Bn(c,null,10,[t,o,a]),Zn();return}}Gv(t,n,s,r)}function Gv(t,e,n,r=!0){console.error(t)}let fi=!1,il=!1;const it=[];let Wt=0;const ss=[];let On=null,fr=0;const Km=Promise.resolve();let lu=null;function wa(t){const e=lu||Km;return t?e.then(this?t.bind(this):t):e}function Qv(t){let e=Wt+1,n=it.length;for(;e<n;){const r=e+n>>>1,s=it[r],i=mi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function uu(t){(!it.length||!it.includes(t,fi&&t.allowRecurse?Wt+1:Wt))&&(t.id==null?it.push(t):it.splice(Qv(t.id),0,t),Gm())}function Gm(){!fi&&!il&&(il=!0,lu=Km.then(Ym))}function Yv(t){const e=it.indexOf(t);e>Wt&&it.splice(e,1)}function Jv(t){ee(t)?ss.push(...t):(!On||!On.includes(t,t.allowRecurse?fr+1:fr))&&ss.push(t),Gm()}function $h(t,e,n=fi?Wt+1:0){for(;n<it.length;n++){const r=it[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;it.splice(n,1),n--,r()}}}function Qm(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>mi(n)-mi(r));if(ss.length=0,On){On.push(...e);return}for(On=e,fr=0;fr<On.length;fr++)On[fr]();On=null,fr=0}}const mi=t=>t.id==null?1/0:t.id,Xv=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ym(t){il=!1,fi=!0,it.sort(Xv);try{for(Wt=0;Wt<it.length;Wt++){const e=it[Wt];e&&e.active!==!1&&Bn(e,null,14)}}finally{Wt=0,it.length=0,Qm(),fi=!1,lu=null,(it.length||ss.length)&&Ym()}}function Zv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Re;f&&(s=n.map(m=>Be(m)?m.trim():m)),h&&(s=n.map(tl))}let a,c=r[a=wc(e)]||r[a=wc(fs(e))];!c&&i&&(c=r[a=wc(Mr(e))]),c&&Lt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Lt(l,t,6,s)}}function Jm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=Jm(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(De(t)&&r.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):ze(o,i),De(t)&&r.set(t,o),o)}function Ea(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Mr(e))||me(t,e))}let vt=null,Ia=null;function Ho(t){const e=vt;return vt=t,Ia=t&&t.type.__scopeId||null,e}function xr(t){Ia=t}function Lr(){Ia=null}function ew(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yh(-1);const i=Ho(e);let o;try{o=t(...s)}finally{Ho(i),r._d&&Yh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ic(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:m,ctx:v,inheritAttrs:g}=t,E=Ho(t);let S,F;try{if(n.shapeFlag&4){const K=s||r,ce=K;S=Ht(l.call(ce,K,u,h,m,f,v)),F=a}else{const K=e;S=Ht(K.length>1?K(h,{attrs:a,slots:o,emit:c}):K(h,null)),F=e.props?a:tw(a)}}catch(K){si.length=0,va(K,t,1),S=le(Rr)}let $=S;if(F&&g!==!1){const K=Object.keys(F),{shapeFlag:ce}=$;K.length&&ce&7&&(i&&K.some(Zl)&&(F=nw(F,i)),$=ms($,F,!1,!0))}return n.dirs&&($=ms($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),S=$,Ho(E),S}const tw=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},nw=(t,e)=>{const n={};for(const r in t)(!Zl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ea(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bh(r,o,l):!0:!!o;return!1}function Bh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ea(n,i))return!0}return!1}function sw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const iw=Symbol.for("v-ndc"),ow=t=>t.__isSuspense;function aw(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Jv(t)}const cw=Symbol.for("v-scx"),lw=()=>ri(cw);function hu(t,e){return du(t,null,e)}const fo={};function Ft(t,e,n){return du(t,e,n)}function du(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Re){if(e&&i){const V=e;e=(...z)=>{V(...z),ce()}}const c=ot,l=V=>r===!0?V:mr(V,r===!1?1:void 0);let u,h=!1,f=!1;if(pt(t)?(u=()=>t.value,h=qo(t)):ei(t)?(u=()=>l(t),h=!0):ee(t)?(f=!0,h=t.some(V=>ei(V)||qo(V)),u=()=>t.map(V=>{if(pt(V))return V.value;if(ei(V))return l(V);if(ie(V))return Bn(V,c,2)})):ie(t)?e?u=()=>Bn(t,c,2):u=()=>(m&&m(),Lt(t,c,3,[v])):u=kt,e&&r){const V=u;u=()=>mr(V())}let m,v=V=>{m=$.onStop=()=>{Bn(V,c,4),m=$.onStop=void 0}},g;if(ba)if(v=kt,e?n&&Lt(e,c,3,[u(),f?[]:void 0,v]):u(),s==="sync"){const V=lw();g=V.__watcherHandles||(V.__watcherHandles=[])}else return kt;let E=f?new Array(t.length).fill(fo):fo;const S=()=>{if(!(!$.active||!$.dirty))if(e){const V=$.run();(r||h||(f?V.some((z,Y)=>Kn(z,E[Y])):Kn(V,E)))&&(m&&m(),Lt(e,c,3,[V,E===fo?void 0:f&&E[0]===fo?[]:E,v]),E=V)}else $.run()};S.allowRecurse=!!e;let F;s==="sync"?F=S:s==="post"?F=()=>_t(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),F=()=>uu(S));const $=new nu(u,kt,F),K=yv(),ce=()=>{$.stop(),K&&eu(K.effects,$)};return e?n?S():E=$.run():s==="post"?_t($.run.bind($),c&&c.suspense):$.run(),g&&g.push(ce),ce}function uw(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Xm(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=xi(this),a=du(s,i.bind(r),n);return o(),a}function Xm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function mr(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pt(t))mr(t.value,e,n);else if(ee(t))for(let r=0;r<t.length;r++)mr(t[r],e,n);else if(wm(t)||ns(t))t.forEach(r=>{mr(r,e,n)});else if(Tm(t))for(const r in t)mr(t[r],e,n);return t}function Ir(t,e){if(vt===null)return t;const n=Ra(vt)||vt.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Re]=e[s];i&&(ie(i)&&(i={mounted:i,updated:i}),i.deep&&mr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Xn(),Lt(c,n,8,[t.el,a,t,e]),Zn())}}/*! #__NO_SIDE_EFFECTS__ */function hw(t,e){return ie(t)?ze({name:t.name},e,{setup:t}):t}const Co=t=>!!t.type.__asyncLoader,Zm=t=>t.type.__isKeepAlive;function dw(t,e){ep(t,"a",e)}function fw(t,e){ep(t,"da",e)}function ep(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ta(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zm(s.parent.vnode)&&mw(r,e,n,s),s=s.parent}}function mw(t,e,n,r){const s=Ta(e,t,r,!0);ks(()=>{eu(r[e],s)},n)}function Ta(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xn();const a=xi(n),c=Lt(e,n,t,o);return a(),Zn(),c});return r?s.unshift(i):s.push(i),i}}const bn=t=>(e,n=ot)=>(!ba||t==="sp")&&Ta(t,(...r)=>e(...r),n),pw=bn("bm"),tp=bn("m"),gw=bn("bu"),_w=bn("u"),yw=bn("bum"),ks=bn("um"),vw=bn("sp"),ww=bn("rtg"),Ew=bn("rtc");function Iw(t,e=ot){Ta("ec",t,e)}function ln(t,e,n,r){let s;const i=n;if(ee(t)||Be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i)}}else s=[];return s}const ol=t=>t?yp(t)?Ra(t)||t.proxy:ol(t.parent):null,ti=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ol(t.parent),$root:t=>ol(t.root),$emit:t=>t.emit,$options:t=>fu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,uu(t.update)}),$nextTick:t=>t.n||(t.n=wa.bind(t.proxy)),$watch:t=>uw.bind(t)}),Tc=(t,e)=>t!==Re&&!t.__isScriptSetup&&me(t,e),Tw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tc(r,e))return o[e]=1,r[e];if(s!==Re&&me(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&me(l,e))return o[e]=3,i[e];if(n!==Re&&me(n,e))return o[e]=4,n[e];al&&(o[e]=0)}}const u=ti[e];let h,f;if(u)return e==="$attrs"&&Et(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&me(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,me(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tc(s,e)?(s[e]=n,!0):r!==Re&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&me(t,o)||Tc(e,o)||(a=i[0])&&me(a,o)||me(r,o)||me(ti,o)||me(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jh(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let al=!0;function Aw(t){const e=fu(t),n=t.proxy,r=t.ctx;al=!1,e.beforeCreate&&qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:v,activated:g,deactivated:E,beforeDestroy:S,beforeUnmount:F,destroyed:$,unmounted:K,render:ce,renderTracked:V,renderTriggered:z,errorCaptured:Y,serverPrefetch:oe,expose:ue,inheritAttrs:Oe,components:$e,directives:je,filters:St}=e;if(l&&bw(l,r,null),o)for(const Ae in o){const we=o[Ae];ie(we)&&(r[Ae]=we.bind(n))}if(s){const Ae=s.call(n,n);De(Ae)&&(t.data=Ps(Ae))}if(al=!0,i)for(const Ae in i){const we=i[Ae],Ot=ie(we)?we.bind(n,n):ie(we.get)?we.get.bind(n,n):kt,Pn=!ie(we)&&ie(we.set)?we.set.bind(n):kt,It=ge({get:Ot,set:Pn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>It.value,set:Tt=>It.value=Tt})}if(a)for(const Ae in a)np(a[Ae],r,n,Ae);if(c){const Ae=ie(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(we=>{sp(we,Ae[we])})}u&&qh(u,t,"c");function qe(Ae,we){ee(we)?we.forEach(Ot=>Ae(Ot.bind(n))):we&&Ae(we.bind(n))}if(qe(pw,h),qe(tp,f),qe(gw,m),qe(_w,v),qe(dw,g),qe(fw,E),qe(Iw,Y),qe(Ew,V),qe(ww,z),qe(yw,F),qe(ks,K),qe(vw,oe),ee(ue))if(ue.length){const Ae=t.exposed||(t.exposed={});ue.forEach(we=>{Object.defineProperty(Ae,we,{get:()=>n[we],set:Ot=>n[we]=Ot})})}else t.exposed||(t.exposed={});ce&&t.render===kt&&(t.render=ce),Oe!=null&&(t.inheritAttrs=Oe),$e&&(t.components=$e),je&&(t.directives=je)}function bw(t,e,n=kt){ee(t)&&(t=cl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=ri(s.from||r,s.default,!0):i=ri(s.from||r):i=ri(s),pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qh(t,e,n){Lt(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,r){const s=r.includes(".")?Xm(n,r):()=>n[r];if(Be(t)){const i=e[t];ie(i)&&Ft(s,i)}else if(ie(t))Ft(s,t.bind(n));else if(De(t))if(ee(t))t.forEach(i=>np(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Ft(s,i,t)}}function fu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>zo(c,l,o,!0)),zo(c,e,o)),De(e)&&i.set(e,c),c}function zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&zo(t,i,n,!0),s&&s.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Rw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rw={data:Hh,props:zh,emits:zh,methods:zs,computed:zs,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:zs,directives:zs,watch:Cw,provide:Hh,inject:Sw};function Hh(t,e){return e?t?function(){return ze(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Sw(t,e){return zs(cl(t),cl(e))}function cl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function zs(t,e){return t?ze(Object.create(null),t,e):e}function zh(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:ze(Object.create(null),jh(t),jh(e??{})):e}function Cw(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function rp(){return{app:null,config:{isNativeTag:iv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pw=0;function kw(t,e){return function(r,s=null){ie(r)||(r=ze({},r)),s!=null&&!De(s)&&(s=null);const i=rp(),o=new WeakSet;let a=!1;const c=i.app={_uid:Pw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:e0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=le(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ra(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=ni;ni=c;try{return l()}finally{ni=u}}};return c}}let ni=null;function sp(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function ri(t,e,n=!1){const r=ot||vt;if(r||ni){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ni._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}const ip={},op=()=>Object.create(ip),ap=t=>Object.getPrototypeOf(t)===ip;function Dw(t,e,n,r=!1){const s={},i=op();t.propsDefaults=Object.create(null),cp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$v(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Nw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=pe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ea(t.emitsOptions,f))continue;const m=e[f];if(c)if(me(i,f))m!==i[f]&&(i[f]=m,l=!0);else{const v=fs(f);s[v]=ll(c,a,v,m,t,!1)}else m!==i[f]&&(i[f]=m,l=!0)}}}else{cp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=Mr(h))===h||!me(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ll(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!me(e,h))&&(delete i[h],l=!0)}l&&_n(t.attrs,"set","")}function cp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Zs(c))continue;const l=e[c];let u;s&&me(s,u=fs(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ea(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=pe(n),l=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ll(s,c,h,l[h],t,!me(l,h))}}return o}function ll(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ie(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=xi(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Mr(n))&&(r=!0))}return r}function lp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[f,m]=lp(h,e,!0);ze(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return De(t)&&r.set(t,ts),ts;if(ee(i))for(let u=0;u<i.length;u++){const h=fs(i[u]);Wh(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=fs(u);if(Wh(h)){const f=i[u],m=o[h]=ee(f)||ie(f)?{type:f}:ze({},f);if(m){const v=Qh(Boolean,m.type),g=Qh(String,m.type);m[0]=v>-1,m[1]=g<0||v<g,(v>-1||me(m,"default"))&&a.push(h)}}}const l=[o,a];return De(t)&&r.set(t,l),l}function Wh(t){return t[0]!=="$"&&!Zs(t)}function Kh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Gh(t,e){return Kh(t)===Kh(e)}function Qh(t,e){return ee(e)?e.findIndex(n=>Gh(n,t)):ie(e)&&Gh(e,t)?0:-1}const up=t=>t[0]==="_"||t==="$stable",mu=t=>ee(t)?t.map(Ht):[Ht(t)],Ow=(t,e,n)=>{if(e._n)return e;const r=ew((...s)=>mu(e(...s)),n);return r._c=!1,r},hp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(up(s))continue;const i=t[s];if(ie(i))e[s]=Ow(s,i,r);else if(i!=null){const o=mu(i);e[s]=()=>o}}},dp=(t,e)=>{const n=mu(e);t.slots.default=()=>n},Vw=(t,e)=>{const n=t.slots=op();if(t.vnode.shapeFlag&32){const r=e._;r?(ze(n,e),bm(n,"_",r,!0)):hp(e,n)}else e&&dp(t,e)},Mw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,hp(e,s)),o=e}else e&&(dp(t,e),o={default:1});if(i)for(const a in s)!up(a)&&o[a]==null&&delete s[a]};function ul(t,e,n,r,s=!1){if(ee(t)){t.forEach((f,m)=>ul(f,e&&(ee(e)?e[m]:e),n,r,s));return}if(Co(r)&&!s)return;const i=r.shapeFlag&4?Ra(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Be(l)?(u[l]=null,me(h,l)&&(h[l]=null)):pt(l)&&(l.value=null)),ie(c))Bn(c,a,12,[o,u]);else{const f=Be(c),m=pt(c);if(f||m){const v=()=>{if(t.f){const g=f?me(h,c)?h[c]:u[c]:c.value;s?ee(g)&&eu(g,i):ee(g)?g.includes(i)||g.push(i):f?(u[c]=[i],me(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,me(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,_t(v,n)):v()}}}const _t=aw;function xw(t){return Lw(t)}function Lw(t,e){const n=Rm();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=kt,insertStaticContent:v}=t,g=(p,_,I,b=null,R=null,M=null,j=void 0,k=null,L=!!_.dynamicChildren)=>{if(p===_)return;p&&!Bs(p,_)&&(b=Wr(p),Tt(p,R,M,!0),p=null),_.patchFlag===-2&&(L=!1,_.dynamicChildren=null);const{type:P,ref:y,shapeFlag:T}=_;switch(P){case Aa:E(p,_,I,b);break;case Rr:S(p,_,I,b);break;case bc:p==null&&F(_,I,b,j);break;case ke:$e(p,_,I,b,R,M,j,k,L);break;default:T&1?ce(p,_,I,b,R,M,j,k,L):T&6?je(p,_,I,b,R,M,j,k,L):(T&64||T&128)&&P.process(p,_,I,b,R,M,j,k,L,or)}y!=null&&R&&ul(y,p&&p.ref,M,_||p,!_)},E=(p,_,I,b)=>{if(p==null)r(_.el=a(_.children),I,b);else{const R=_.el=p.el;_.children!==p.children&&l(R,_.children)}},S=(p,_,I,b)=>{p==null?r(_.el=c(_.children||""),I,b):_.el=p.el},F=(p,_,I,b)=>{[p.el,p.anchor]=v(p.children,_,I,b,p.el,p.anchor)},$=({el:p,anchor:_},I,b)=>{let R;for(;p&&p!==_;)R=f(p),r(p,I,b),p=R;r(_,I,b)},K=({el:p,anchor:_})=>{let I;for(;p&&p!==_;)I=f(p),s(p),p=I;s(_)},ce=(p,_,I,b,R,M,j,k,L)=>{_.type==="svg"?j="svg":_.type==="math"&&(j="mathml"),p==null?V(_,I,b,R,M,j,k,L):oe(p,_,R,M,j,k,L)},V=(p,_,I,b,R,M,j,k)=>{let L,P;const{props:y,shapeFlag:T,transition:w,dirs:x}=p;if(L=p.el=o(p.type,M,y&&y.is,y),T&8?u(L,p.children):T&16&&Y(p.children,L,null,b,R,Ac(p,M),j,k),x&&cr(p,null,b,"created"),z(L,p,p.scopeId,j,b),y){for(const Z in y)Z!=="value"&&!Zs(Z)&&i(L,Z,null,y[Z],M,p.children,b,R,Vt);"value"in y&&i(L,"value",null,y.value,M),(P=y.onVnodeBeforeMount)&&qt(P,b,p)}x&&cr(p,null,b,"beforeMount");const J=Fw(R,w);J&&w.beforeEnter(L),r(L,_,I),((P=y&&y.onVnodeMounted)||J||x)&&_t(()=>{P&&qt(P,b,p),J&&w.enter(L),x&&cr(p,null,b,"mounted")},R)},z=(p,_,I,b,R)=>{if(I&&m(p,I),b)for(let M=0;M<b.length;M++)m(p,b[M]);if(R){let M=R.subTree;if(_===M){const j=R.vnode;z(p,j,j.scopeId,j.slotScopeIds,R.parent)}}},Y=(p,_,I,b,R,M,j,k,L=0)=>{for(let P=L;P<p.length;P++){const y=p[P]=k?Vn(p[P]):Ht(p[P]);g(null,y,_,I,b,R,M,j,k)}},oe=(p,_,I,b,R,M,j)=>{const k=_.el=p.el;let{patchFlag:L,dynamicChildren:P,dirs:y}=_;L|=p.patchFlag&16;const T=p.props||Re,w=_.props||Re;let x;if(I&&lr(I,!1),(x=w.onVnodeBeforeUpdate)&&qt(x,I,_,p),y&&cr(_,p,I,"beforeUpdate"),I&&lr(I,!0),P?ue(p.dynamicChildren,P,k,I,b,Ac(_,R),M):j||we(p,_,k,null,I,b,Ac(_,R),M,!1),L>0){if(L&16)Oe(k,_,T,w,I,b,R);else if(L&2&&T.class!==w.class&&i(k,"class",null,w.class,R),L&4&&i(k,"style",T.style,w.style,R),L&8){const J=_.dynamicProps;for(let Z=0;Z<J.length;Z++){const ae=J[Z],Ee=T[ae],tt=w[ae];(tt!==Ee||ae==="value")&&i(k,ae,Ee,tt,R,p.children,I,b,Vt)}}L&1&&p.children!==_.children&&u(k,_.children)}else!j&&P==null&&Oe(k,_,T,w,I,b,R);((x=w.onVnodeUpdated)||y)&&_t(()=>{x&&qt(x,I,_,p),y&&cr(_,p,I,"updated")},b)},ue=(p,_,I,b,R,M,j)=>{for(let k=0;k<_.length;k++){const L=p[k],P=_[k],y=L.el&&(L.type===ke||!Bs(L,P)||L.shapeFlag&70)?h(L.el):I;g(L,P,y,null,b,R,M,j,!0)}},Oe=(p,_,I,b,R,M,j)=>{if(I!==b){if(I!==Re)for(const k in I)!Zs(k)&&!(k in b)&&i(p,k,I[k],null,j,_.children,R,M,Vt);for(const k in b){if(Zs(k))continue;const L=b[k],P=I[k];L!==P&&k!=="value"&&i(p,k,P,L,j,_.children,R,M,Vt)}"value"in b&&i(p,"value",I.value,b.value,j)}},$e=(p,_,I,b,R,M,j,k,L)=>{const P=_.el=p?p.el:a(""),y=_.anchor=p?p.anchor:a("");let{patchFlag:T,dynamicChildren:w,slotScopeIds:x}=_;x&&(k=k?k.concat(x):x),p==null?(r(P,I,b),r(y,I,b),Y(_.children||[],I,y,R,M,j,k,L)):T>0&&T&64&&w&&p.dynamicChildren?(ue(p.dynamicChildren,w,I,R,M,j,k),(_.key!=null||R&&_===R.subTree)&&fp(p,_,!0)):we(p,_,I,y,R,M,j,k,L)},je=(p,_,I,b,R,M,j,k,L)=>{_.slotScopeIds=k,p==null?_.shapeFlag&512?R.ctx.activate(_,I,b,j,L):St(_,I,b,R,M,j,L):rn(p,_,L)},St=(p,_,I,b,R,M,j)=>{const k=p.component=Ww(p,b,R);if(Zm(p)&&(k.ctx.renderer=or),Gw(k),k.asyncDep){if(R&&R.registerDep(k,qe),!p.el){const L=k.subTree=le(Rr);S(null,L,_,I)}}else qe(k,p,_,I,R,M,j)},rn=(p,_,I)=>{const b=_.component=p.component;if(rw(p,_,I))if(b.asyncDep&&!b.asyncResolved){Ae(b,_,I);return}else b.next=_,Yv(b.update),b.effect.dirty=!0,b.update();else _.el=p.el,b.vnode=_},qe=(p,_,I,b,R,M,j)=>{const k=()=>{if(p.isMounted){let{next:y,bu:T,u:w,parent:x,vnode:J}=p;{const gt=mp(p);if(gt){y&&(y.el=J.el,Ae(p,y,j)),gt.asyncDep.then(()=>{p.isUnmounted||k()});return}}let Z=y,ae;lr(p,!1),y?(y.el=J.el,Ae(p,y,j)):y=J,T&&Ro(T),(ae=y.props&&y.props.onVnodeBeforeUpdate)&&qt(ae,x,y,J),lr(p,!0);const Ee=Ic(p),tt=p.subTree;p.subTree=Ee,g(tt,Ee,h(tt.el),Wr(tt),p,R,M),y.el=Ee.el,Z===null&&sw(p,Ee.el),w&&_t(w,R),(ae=y.props&&y.props.onVnodeUpdated)&&_t(()=>qt(ae,x,y,J),R)}else{let y;const{el:T,props:w}=_,{bm:x,m:J,parent:Z}=p,ae=Co(_);if(lr(p,!1),x&&Ro(x),!ae&&(y=w&&w.onVnodeBeforeMount)&&qt(y,Z,_),lr(p,!0),T&&io){const Ee=()=>{p.subTree=Ic(p),io(T,p.subTree,p,R,null)};ae?_.type.__asyncLoader().then(()=>!p.isUnmounted&&Ee()):Ee()}else{const Ee=p.subTree=Ic(p);g(null,Ee,I,b,p,R,M),_.el=Ee.el}if(J&&_t(J,R),!ae&&(y=w&&w.onVnodeMounted)){const Ee=_;_t(()=>qt(y,Z,Ee),R)}(_.shapeFlag&256||Z&&Co(Z.vnode)&&Z.vnode.shapeFlag&256)&&p.a&&_t(p.a,R),p.isMounted=!0,_=I=b=null}},L=p.effect=new nu(k,kt,()=>uu(P),p.scope),P=p.update=()=>{L.dirty&&L.run()};P.id=p.uid,lr(p,!0),P()},Ae=(p,_,I)=>{_.component=p;const b=p.vnode.props;p.vnode=_,p.next=null,Nw(p,_.props,b,I),Mw(p,_.children,I),Xn(),$h(p),Zn()},we=(p,_,I,b,R,M,j,k,L=!1)=>{const P=p&&p.children,y=p?p.shapeFlag:0,T=_.children,{patchFlag:w,shapeFlag:x}=_;if(w>0){if(w&128){Pn(P,T,I,b,R,M,j,k,L);return}else if(w&256){Ot(P,T,I,b,R,M,j,k,L);return}}x&8?(y&16&&Vt(P,R,M),T!==P&&u(I,T)):y&16?x&16?Pn(P,T,I,b,R,M,j,k,L):Vt(P,R,M,!0):(y&8&&u(I,""),x&16&&Y(T,I,b,R,M,j,k,L))},Ot=(p,_,I,b,R,M,j,k,L)=>{p=p||ts,_=_||ts;const P=p.length,y=_.length,T=Math.min(P,y);let w;for(w=0;w<T;w++){const x=_[w]=L?Vn(_[w]):Ht(_[w]);g(p[w],x,I,null,R,M,j,k,L)}P>y?Vt(p,R,M,!0,!1,T):Y(_,I,b,R,M,j,k,L,T)},Pn=(p,_,I,b,R,M,j,k,L)=>{let P=0;const y=_.length;let T=p.length-1,w=y-1;for(;P<=T&&P<=w;){const x=p[P],J=_[P]=L?Vn(_[P]):Ht(_[P]);if(Bs(x,J))g(x,J,I,null,R,M,j,k,L);else break;P++}for(;P<=T&&P<=w;){const x=p[T],J=_[w]=L?Vn(_[w]):Ht(_[w]);if(Bs(x,J))g(x,J,I,null,R,M,j,k,L);else break;T--,w--}if(P>T){if(P<=w){const x=w+1,J=x<y?_[x].el:b;for(;P<=w;)g(null,_[P]=L?Vn(_[P]):Ht(_[P]),I,J,R,M,j,k,L),P++}}else if(P>w)for(;P<=T;)Tt(p[P],R,M,!0),P++;else{const x=P,J=P,Z=new Map;for(P=J;P<=w;P++){const dt=_[P]=L?Vn(_[P]):Ht(_[P]);dt.key!=null&&Z.set(dt.key,P)}let ae,Ee=0;const tt=w-J+1;let gt=!1,ar=0;const sn=new Array(tt);for(P=0;P<tt;P++)sn[P]=0;for(P=x;P<=T;P++){const dt=p[P];if(Ee>=tt){Tt(dt,R,M,!0);continue}let jt;if(dt.key!=null)jt=Z.get(dt.key);else for(ae=J;ae<=w;ae++)if(sn[ae-J]===0&&Bs(dt,_[ae])){jt=ae;break}jt===void 0?Tt(dt,R,M,!0):(sn[jt-J]=P+1,jt>=ar?ar=jt:gt=!0,g(dt,_[jt],I,null,R,M,j,k,L),Ee++)}const oo=gt?Uw(sn):ts;for(ae=oo.length-1,P=tt-1;P>=0;P--){const dt=J+P,jt=_[dt],Dh=dt+1<y?_[dt+1].el:b;sn[P]===0?g(null,jt,I,Dh,R,M,j,k,L):gt&&(ae<0||P!==oo[ae]?It(jt,I,Dh,2):ae--)}}},It=(p,_,I,b,R=null)=>{const{el:M,type:j,transition:k,children:L,shapeFlag:P}=p;if(P&6){It(p.component.subTree,_,I,b);return}if(P&128){p.suspense.move(_,I,b);return}if(P&64){j.move(p,_,I,or);return}if(j===ke){r(M,_,I);for(let T=0;T<L.length;T++)It(L[T],_,I,b);r(p.anchor,_,I);return}if(j===bc){$(p,_,I);return}if(b!==2&&P&1&&k)if(b===0)k.beforeEnter(M),r(M,_,I),_t(()=>k.enter(M),R);else{const{leave:T,delayLeave:w,afterLeave:x}=k,J=()=>r(M,_,I),Z=()=>{T(M,()=>{J(),x&&x()})};w?w(M,J,Z):Z()}else r(M,_,I)},Tt=(p,_,I,b=!1,R=!1)=>{const{type:M,props:j,ref:k,children:L,dynamicChildren:P,shapeFlag:y,patchFlag:T,dirs:w}=p;if(k!=null&&ul(k,null,I,p,!0),y&256){_.ctx.deactivate(p);return}const x=y&1&&w,J=!Co(p);let Z;if(J&&(Z=j&&j.onVnodeBeforeUnmount)&&qt(Z,_,p),y&6)kn(p.component,I,b);else{if(y&128){p.suspense.unmount(I,b);return}x&&cr(p,null,_,"beforeUnmount"),y&64?p.type.remove(p,_,I,R,or,b):P&&(M!==ke||T>0&&T&64)?Vt(P,_,I,!1,!0):(M===ke&&T&384||!R&&y&16)&&Vt(L,_,I),b&&zr(p)}(J&&(Z=j&&j.onVnodeUnmounted)||x)&&_t(()=>{Z&&qt(Z,_,p),x&&cr(p,null,_,"unmounted")},I)},zr=p=>{const{type:_,el:I,anchor:b,transition:R}=p;if(_===ke){vc(I,b);return}if(_===bc){K(p);return}const M=()=>{s(I),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:j,delayLeave:k}=R,L=()=>j(I,M);k?k(p.el,M,L):L()}else M()},vc=(p,_)=>{let I;for(;p!==_;)I=f(p),s(p),p=I;s(_)},kn=(p,_,I)=>{const{bum:b,scope:R,update:M,subTree:j,um:k}=p;b&&Ro(b),R.stop(),M&&(M.active=!1,Tt(j,p,_,I)),k&&_t(k,_),_t(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Vt=(p,_,I,b=!1,R=!1,M=0)=>{for(let j=M;j<p.length;j++)Tt(p[j],_,I,b,R)},Wr=p=>p.shapeFlag&6?Wr(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el);let Us=!1;const so=(p,_,I)=>{p==null?_._vnode&&Tt(_._vnode,null,null,!0):g(_._vnode||null,p,_,null,null,null,I),Us||(Us=!0,$h(),Qm(),Us=!1),_._vnode=p},or={p:g,um:Tt,m:It,r:zr,mt:St,mc:Y,pc:we,pbc:ue,n:Wr,o:t};let $s,io;return{render:so,hydrate:$s,createApp:kw(so,$s)}}function Ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fp(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vn(s[i]),a.el=o.el),n||fp(o,a)),a.type===Aa&&(a.el=o.el)}}function Uw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}const $w=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),bc=Symbol.for("v-stc"),si=[];let Mt=null;function U(t=!1){si.push(Mt=t?null:[])}function Bw(){si.pop(),Mt=si[si.length-1]||null}let pi=1;function Yh(t){pi+=t}function pp(t){return t.dynamicChildren=pi>0?Mt||ts:null,Bw(),pi>0&&Mt&&Mt.push(t),t}function q(t,e,n,r,s,i){return pp(d(t,e,n,r,s,i,!0))}function pr(t,e,n,r,s){return pp(le(t,e,n,r,s,!0))}function hl(t){return t?t.__v_isVNode===!0:!1}function Bs(t,e){return t.type===e.type&&t.key===e.key}const gp=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||pt(t)||ie(t)?{i:vt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gp(e),ref:e&&Po(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vt};return a?(pu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),pi>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const le=jw;function jw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iw)&&(t=Rr),hl(t)){const a=ms(t,e,!0);return n&&pu(a,n),pi>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(Xw(t)&&(t=t.__vccOpts),e){e=qw(e);let{class:a,style:c}=e;a&&!Be(a)&&(e.class=ye(a)),De(c)&&(jm(c)&&!ee(c)&&(c=ze({},c)),e.style=Cs(c))}const o=Be(t)?1:ow(t)?128:$w(t)?64:De(t)?4:ie(t)?2:0;return d(t,e,n,r,s,o,i,!0)}function qw(t){return t?jm(t)||ap(t)?ze({},t):t:null}function ms(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?_p(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&gp(l),ref:e&&e.ref?n&&i?ee(i)?i.concat(Po(e)):[i,Po(e)]:Po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ms(t.ssContent),ssFallback:t.ssFallback&&ms(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&(u.transition=c.clone(u)),u}function Gt(t=" ",e=0){return le(Aa,null,t,e)}function Ie(t="",e=!1){return e?(U(),pr(Rr,null,t)):le(Rr,null,t)}function Ht(t){return t==null||typeof t=="boolean"?le(Rr):ee(t)?le(ke,null,t.slice()):typeof t=="object"?Vn(t):le(Aa,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ms(t)}function pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ap(e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[Gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function _p(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ye([e.class,r.class]));else if(s==="style")e.style=Cs([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){Lt(t,e,7,[n,r])}const Hw=rp();let zw=0;function Ww(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Hw,i={uid:zw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,s),emitsOptions:Jm(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zv.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const Kw=()=>ot||vt;let Wo,dl;{const t=Rm(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Wo=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),dl=e("__VUE_SSR_SETTERS__",n=>ba=n)}const xi=t=>{const e=ot;return Wo(t),t.scope.on(),()=>{t.scope.off(),Wo(e)}},Jh=()=>{ot&&ot.scope.off(),Wo(null)};function yp(t){return t.vnode.shapeFlag&4}let ba=!1;function Gw(t,e=!1){e&&dl(e);const{props:n,children:r}=t.vnode,s=yp(t);Dw(t,n,s,e),Vw(t,r);const i=s?Qw(t,e):void 0;return e&&dl(!1),i}function Qw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tw);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Jw(t):null,i=xi(t);Xn();const o=Bn(r,t,0,[t.props,s]);if(Zn(),i(),Em(o)){if(o.then(Jh,Jh),e)return o.then(a=>{Xh(t,a,e)}).catch(a=>{va(a,t,0)});t.asyncDep=o}else Xh(t,o,e)}else vp(t,e)}function Xh(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Wm(e)),vp(t,n)}let Zh;function vp(t,e,n){const r=t.type;if(!t.render){if(!e&&Zh&&!r.render){const s=r.template||fu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ze(ze({isCustomElement:i,delimiters:a},o),c);r.render=Zh(s,l)}}t.render=r.render||kt}{const s=xi(t);Xn();try{Aw(t)}finally{Zn(),s()}}}const Yw={get(t,e){return Et(t,"get",""),t[e]}};function Jw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Yw),slots:t.slots,emit:t.emit,expose:e}}function Ra(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wm(Bv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ti)return ti[n](t)},has(e,n){return n in e||n in ti}}))}function Xw(t){return ie(t)&&"__vccOpts"in t}const ge=(t,e)=>jv(t,e,ba);function Zw(t,e,n){const r=arguments.length;return r===2?De(e)&&!ee(e)?hl(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hl(n)&&(n=[n]),le(t,e,n))}const e0="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const t0="http://www.w3.org/2000/svg",n0="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,ed=Mn&&Mn.createElement("template"),r0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Mn.createElementNS(t0,t):e==="mathml"?Mn.createElementNS(n0,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ed.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=ed.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},s0=Symbol("_vtc");function i0(t,e,n){const r=t[s0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const td=Symbol("_vod"),o0=Symbol("_vsh"),a0=Symbol(""),c0=/(^|;)\s*display\s*:/;function l0(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ko(r,a,"")}else for(const o in e)n[o]==null&&ko(r,o,"");for(const o in n)o==="display"&&(i=!0),ko(r,o,n[o])}else if(s){if(e!==n){const o=r[a0];o&&(n+=";"+o),r.cssText=n,i=c0.test(n)}}else e&&t.removeAttribute("style");td in t&&(t[td]=i?r.display:"",t[o0]&&(r.display="none"))}const nd=/\s*!important$/;function ko(t,e,n){if(ee(n))n.forEach(r=>ko(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=u0(t,e);nd.test(n)?t.setProperty(Mr(r),n.replace(nd,""),"important"):t[r]=n}}const rd=["Webkit","Moz","ms"],Rc={};function u0(t,e){const n=Rc[e];if(n)return n;let r=fs(e);if(r!=="filter"&&r in t)return Rc[e]=r;r=Am(r);for(let s=0;s<rd.length;s++){const i=rd[s]+r;if(i in t)return Rc[e]=i}return e}const sd="http://www.w3.org/1999/xlink";function h0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n);else{const i=pv(e);n==null||i&&!Sm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function d0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Yr(t,e,n,r){t.addEventListener(e,n,r)}function f0(t,e,n,r){t.removeEventListener(e,n,r)}const id=Symbol("_vei");function m0(t,e,n,r,s=null){const i=t[id]||(t[id]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=p0(e);if(r){const l=i[e]=y0(r,s);Yr(t,a,l,c)}else o&&(f0(t,a,o,c),i[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function p0(t){let e;if(od.test(t)){e={};let r;for(;r=t.match(od);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let Sc=0;const g0=Promise.resolve(),_0=()=>Sc||(g0.then(()=>Sc=0),Sc=Date.now());function y0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Lt(v0(r,n.value),e,5,[r])};return n.value=t,n.attached=_0(),n}function v0(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,w0=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?i0(t,r,l):e==="style"?l0(t,n,r):pa(e)?Zl(e)||m0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):E0(t,e,r,l))?d0(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),h0(t,e,r,l))};function E0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Be(n)?!1:e in t}const cd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Ro(e,n):e};function I0(t){t.target.composing=!0}function ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cc=Symbol("_assign"),Tr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Cc]=cd(s);const i=r||s.props&&s.props.type==="number";Yr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=tl(a)),t[Cc](a)}),n&&Yr(t,"change",()=>{t.value=t.value.trim()}),e||(Yr(t,"compositionstart",I0),Yr(t,"compositionend",ld),Yr(t,"change",ld))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Cc]=cd(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?tl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},T0=["ctrl","shift","alt","meta"],A0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>T0.some(n=>t[`${n}Key`]&&!e.includes(n))},yn=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=A0[e[o]];if(a&&a(s,e))return}return t(s,...i)})},b0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Mr(s.key);if(e.some(o=>o===i||b0[o]===i))return t(s)})},R0=ze({patchProp:w0},r0);let ud;function S0(){return ud||(ud=xw(R0))}const C0=(...t)=>{const e=S0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=k0(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,P0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function P0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function k0(t){return Be(t)?document.querySelector(t):t}var hd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},D0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ep(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):D0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new N0;const f=i<<2|a>>4;if(r.push(f),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class N0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O0=function(t){const e=Ep(t);return Ip.encodeByteArray(e,!0)},Ko=function(t){return O0(t).replace(/\./g,"")},Tp=function(t){try{return Ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const M0=()=>V0().__FIREBASE_DEFAULTS__,x0=()=>{if(typeof process>"u"||typeof hd>"u")return;const t=hd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tp(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return M0()||x0()||L0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ap=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},F0=t=>{const e=Ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bp=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config},Rp=t=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function B0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function j0(){var t;const e=(t=Sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function q0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z0(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function W0(){return!j0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K0(){try{return typeof indexedDB=="object"}catch{return!1}}function G0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Q0,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Y0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Rn(s,a,r)}}function Y0(t,e){return t.replace(J0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const J0=/\{\$([^}]+)}/g;function X0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dd(i)&&dd(o)){if(!ps(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Z0(t,e){const n=new eE(t,e);return n.subscribe.bind(n)}class eE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pc),s.error===void 0&&(s.error=Pc),s.complete===void 0&&(s.complete=Pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class nE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new U0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rE(t){return t===hr?void 0:t}function sE(t){return t.instantiationMode==="EAGER"}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const oE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},aE=de.INFO,cE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},lE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const uE=(t,e)=>e.some(n=>t instanceof n);let fd,md;function hE(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dE(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sp=new WeakMap,fl=new WeakMap,Cp=new WeakMap,kc=new WeakMap,_u=new WeakMap;function fE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sp.set(n,t)}).catch(()=>{}),_u.set(e,t),e}function mE(t){if(fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fl.set(t,e)}let ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pE(t){ml=t(ml)}function gE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return Cp.set(r,e.sort?e.sort():[e]),jn(r)}:dE().includes(t)?function(...e){return t.apply(Dc(this),e),jn(Sp.get(this))}:function(...e){return jn(t.apply(Dc(this),e))}}function _E(t){return typeof t=="function"?gE(t):(t instanceof IDBTransaction&&mE(t),uE(t,hE())?new Proxy(t,ml):t)}function jn(t){if(t instanceof IDBRequest)return fE(t);if(kc.has(t))return kc.get(t);const e=_E(t);return e!==t&&(kc.set(t,e),_u.set(e,t)),e}const Dc=t=>_u.get(t);function yE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const vE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],Nc=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nc.get(e))return Nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Nc.set(e,i),i}pE(t=>({...t,get:(e,n,r)=>pd(e,n)||t.get(e,n,r),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
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
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pl="@firebase/app",gd="0.10.2";/**
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
 */const Cr=new gu("@firebase/app"),TE="@firebase/app-compat",AE="@firebase/analytics-compat",bE="@firebase/analytics",RE="@firebase/app-check-compat",SE="@firebase/app-check",CE="@firebase/auth",PE="@firebase/auth-compat",kE="@firebase/database",DE="@firebase/database-compat",NE="@firebase/functions",OE="@firebase/functions-compat",VE="@firebase/installations",ME="@firebase/installations-compat",xE="@firebase/messaging",LE="@firebase/messaging-compat",FE="@firebase/performance",UE="@firebase/performance-compat",$E="@firebase/remote-config",BE="@firebase/remote-config-compat",jE="@firebase/storage",qE="@firebase/storage-compat",HE="@firebase/firestore",zE="@firebase/firestore-compat",WE="firebase",KE="10.11.1";/**
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
 */const gl="[DEFAULT]",GE={[pl]:"fire-core",[TE]:"fire-core-compat",[bE]:"fire-analytics",[AE]:"fire-analytics-compat",[SE]:"fire-app-check",[RE]:"fire-app-check-compat",[CE]:"fire-auth",[PE]:"fire-auth-compat",[kE]:"fire-rtdb",[DE]:"fire-rtdb-compat",[NE]:"fire-fn",[OE]:"fire-fn-compat",[VE]:"fire-iid",[ME]:"fire-iid-compat",[xE]:"fire-fcm",[LE]:"fire-fcm-compat",[FE]:"fire-perf",[UE]:"fire-perf-compat",[$E]:"fire-rc",[BE]:"fire-rc-compat",[jE]:"fire-gcs",[qE]:"fire-gcs-compat",[HE]:"fire-fst",[zE]:"fire-fst-compat","fire-js":"fire-js",[WE]:"fire-js-all"};/**
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
 */const Go=new Map,QE=new Map,_l=new Map;function _d(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(_l.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;_l.set(e,t);for(const n of Go.values())_d(n,t);for(const n of QE.values())_d(n,t);return!0}function yu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t.settings!==void 0}/**
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
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Li("app","Firebase",YE);/**
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
 */class JE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=KE;function Pp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=bp()),!n)throw qn.create("no-options");const i=Go.get(s);if(i){if(ps(n,i.options)&&ps(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new iE(s);for(const c of _l.values())o.addComponent(c);const a=new JE(n,r,o);return Go.set(s,a),a}function kp(t=gl){const e=Go.get(t);if(!e&&t===gl&&bp())return Pp();if(!e)throw qn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let s=(r=GE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}gs(new Sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XE="firebase-heartbeat-database",ZE=1,gi="firebase-heartbeat-store";let Oc=null;function Dp(){return Oc||(Oc=yE(XE,ZE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function eI(t){try{const n=(await Dp()).transaction(gi),r=await n.objectStore(gi).get(Np(t));return await n.done,r}catch(e){if(e instanceof Rn)Cr.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function yd(t,e){try{const r=(await Dp()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,Np(t)),await r.done}catch(n){if(n instanceof Rn)Cr.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function Np(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tI=1024,nI=30*24*60*60*1e3;class rI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:s}=sI(this._heartbeatsCache.heartbeats),i=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vd(){return new Date().toISOString().substring(0,10)}function sI(t,e=tI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K0()?G0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oI(t){gs(new Sr("platform-logger",e=>new EE(e),"PRIVATE")),gs(new Sr("heartbeat",e=>new rI(e),"PRIVATE")),Hn(pl,gd,t),Hn(pl,gd,"esm2017"),Hn("fire-js","")}oI("");function vu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Op(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aI=Op,Vp=new Li("auth","Firebase",Op());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new gu("@firebase/auth");function cI(t,...e){Qo.logLevel<=de.WARN&&Qo.warn(`Auth (${Ds}): ${t}`,...e)}function Do(t,...e){Qo.logLevel<=de.ERROR&&Qo.error(`Auth (${Ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Eu(t,...e)}function Ut(t,...e){return Eu(t,...e)}function wu(t,e,n){const r=Object.assign(Object.assign({},aI()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return wu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nt(t,"argument-error"),wu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vp.create(t,...e)}function X(t,e,...n){if(!t)throw Eu(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Do(e),new Error(e)}function wn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uI(){return Ed()==="http:"||Ed()==="https:"}function Ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=B0()||H0()}get(){return hI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mI=new Ui(3e4,6e4);function er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return xp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Mp.fetch()(Lp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fI),e);try{const s=new gI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wu(t,u,l);Nt(t,u)}}catch(s){if(s instanceof Rn)throw s;Nt(t,"network-request-failed",{message:String(s)})}}async function $i(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Iu(t.config,s):`${t.config.apiScheme}://${s}`}function pI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),mI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ut(t,e,r);return s.customData._tokenResponse=n,s}function Id(t){return t!==void 0&&t.enterprise!==void 0}class _I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yI(t,e){return Sn(t,"GET","/v2/recaptchaConfig",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function Fp(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wI(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=Tu(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ii(Vc(s.auth_time)),issuedAtTime:ii(Vc(s.iat)),expirationTime:ii(Vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function Tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tp(n);return s?JSON.parse(s):(Do("Failed to decode base64 JWT payload"),null)}catch(s){return Do("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Td(t){const e=Tu(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&EI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _s(t,Fp(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Up(i.providerUserInfo):[],a=AI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function TI(t){const e=Ve(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Up(t){return t.map(e=>{var{providerId:n}=e,r=vu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){const n=await xp(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Lp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RI(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Td(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Td(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new is;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wI(this,e)}reload(){return TI(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await _s(this,vI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:K,isAnonymous:ce,providerData:V,stsTokenManager:z}=n;X($&&z,e,"internal-error");const Y=is.fromJSON(this.name,z);X(typeof $=="string",e,"internal-error"),Nn(h,e.name),Nn(f,e.name),X(typeof K=="boolean",e,"internal-error"),X(typeof ce=="boolean",e,"internal-error"),Nn(m,e.name),Nn(v,e.name),Nn(g,e.name),Nn(E,e.name),Nn(S,e.name),Nn(F,e.name);const oe=new fn({uid:$,auth:e,email:f,emailVerified:K,displayName:h,isAnonymous:ce,photoURL:v,phoneNumber:m,tenantId:g,stsTokenManager:Y,createdAt:S,lastLoginAt:F});return V&&Array.isArray(V)&&(oe.providerData=V.map(ue=>Object.assign({},ue))),E&&(oe._redirectEventId=E),oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Up(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new is;a.updateFromIdToken(r);const c=new fn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Map;function mn(t){wn(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
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
 */class $p{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$p.type="NONE";const bd=$p;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(mn(bd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||mn(bd);const o=No(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=fn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new os(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new os(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zp(e))return"Blackberry";if(Wp(e))return"Webos";if(Au(e))return"Safari";if((e.includes("chrome/")||jp(e))&&!e.includes("edge/"))return"Chrome";if(Hp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bp(t=Ze()){return/firefox\//i.test(t)}function Au(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jp(t=Ze()){return/crios\//i.test(t)}function qp(t=Ze()){return/iemobile/i.test(t)}function Hp(t=Ze()){return/android/i.test(t)}function zp(t=Ze()){return/blackberry/i.test(t)}function Wp(t=Ze()){return/webos/i.test(t)}function Ca(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SI(t=Ze()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CI(){return z0()&&document.documentMode===10}function Kp(t=Ze()){return Ca(t)||Hp(t)||Wp(t)||zp(t)||/windows phone/i.test(t)||qp(t)}function PI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=Rd(Ze());break;case"Worker":n=`${Rd(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
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
 */class kI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DI(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",er(t,e))}/**
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
 */const NI=6;class OI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sd(this),this.idTokenSubscription=new Sd(this),this.beforeStateQueue=new kI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fp(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(vn(this));const n=e?Ve(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),n=new OI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tr(t){return Ve(t)}class Sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Z0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(t){Pa=t}function Qp(t){return Pa.loadJS(t)}function xI(){return Pa.recaptchaEnterpriseScript}function LI(){return Pa.gapiScript}function FI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UI="recaptcha-enterprise",$I="NO_RECAPTCHA";class BI{constructor(e){this.type=UI,this.auth=tr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{yI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new _I(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Id(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o($I)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Id(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xI();c.length!==0&&(c+=a),Qp(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Cd(t,e,n,r=!1){const s=new BI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Cd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Cd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){const n=yu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ps(i,e??{}))return s;Nt(s,"already-initialized")}return n.initialize({options:e})}function qI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HI(t,e,n){const r=tr(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Yp(e),{host:o,port:a}=zI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),WI()}function Yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zI(t){const e=Yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pd(o)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function KI(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e){return $i(t,"POST","/v1/accounts:signInWithPassword",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}async function YI(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends bu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wl(e,n,"signInWithPassword",GI);case"emailLink":return QI(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wl(e,r,"signUpPassword",KI);case"emailLink":return YI(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return $i(t,"POST","/v1/accounts:signInWithIdp",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="http://localhost";class Pr extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(t){const e=Ws(Ks(t)).link,n=e?Ws(Ks(e)).deep_link_id:null,r=Ws(Ks(t)).deep_link_id;return(r?Ws(Ks(r)).link:null)||r||n||e||t}class Ru{constructor(e){var n,r,s,i,o,a;const c=Ws(Ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=XI((s=c.mode)!==null&&s!==void 0?s:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZI(e);try{return new Ru(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return _i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ru.parseLink(n);return X(r,"argument-error"),_i._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bi extends Su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Bi{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Bi{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Bi{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e){return $i(t,"POST","/v1/accounts:signUp",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=kd(r);return new kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=kd(r);return new kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Rn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Jo(e,n,r,s)}}function Jp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,r):i})}async function tT(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
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
 */async function nT(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(vn(r));const s="reauthenticate";try{const i=await _s(t,Jp(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Tu(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),kr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(t,e,n=!1){if(xt(t.app))return Promise.reject(vn(t));const r="signIn",s=await Jp(t,r,e),i=await kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rT(t,e){return Xp(tr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(t){const e=tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sT(t,e,n){if(xt(t.app))return Promise.reject(vn(t));const r=tr(t),o=await wl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Zp(t),c}),a=await kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function iT(t,e,n){return xt(t.app)?Promise.reject(vn(t)):rT(Ve(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _s(r,oT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aT(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function cT(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function lT(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function uT(t){return Ve(t).signOut()}const Xo="__sak";/**
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
 */class eg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){const t=Ze();return Au(t)||Ca(t)}const dT=1e3,fT=10;class tg extends eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hT()&&PI(),this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);CI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tg.type="LOCAL";const mT=tg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends eg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ng.type="SESSION";const rg=ng;/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await pT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Pu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function _T(t){Xt().location.href=t}/**
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
 */function sg(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function yT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wT(){return sg()?self:null}/**
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
 */const ig="firebaseLocalStorageDb",ET=1,Zo="firebaseLocalStorage",og="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function IT(){const t=indexedDB.deleteDatabase(ig);return new ji(t).toPromise()}function El(){const t=indexedDB.open(ig,ET);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:og})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await IT(),e(await El()))})})}async function Dd(t,e,n){const r=Da(t,!0).put({[og]:e,value:n});return new ji(r).toPromise()}async function TT(t,e){const n=Da(t,!1).get(e),r=await new ji(n).toPromise();return r===void 0?null:r.value}function Nd(t,e){const n=Da(t,!0).delete(e);return new ji(n).toPromise()}const AT=800,bT=3;class ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await El(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(wT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yT(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await El();return await Dd(e,Xo,"1"),await Nd(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ag.type="LOCAL";const RT=ag;new Ui(3e4,6e4);/**
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
 */function cg(t,e){return e?mn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ku extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ST(t){return Xp(t.auth,new ku(t),t.bypassAuthState)}function CT(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),nT(n,new ku(t),t.bypassAuthState)}async function PT(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),tT(n,new ku(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ST;case"linkViaPopup":case"linkViaRedirect":return PT;case"reauthViaPopup":case"reauthViaRedirect":return CT;default:Nt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new Ui(2e3,1e4);async function DT(t,e,n){if(xt(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=tr(t);lI(t,e,Su);const s=cg(r,n);return new gr(r,"signInViaPopup",e,s).executeNotNull()}class gr extends lg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kT.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="pendingRedirect",Oo=new Map;class OT extends lg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await VT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VT(t,e){const n=LT(e),r=xT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function MT(t,e){Oo.set(t._key(),e)}function xT(t){return mn(t._redirectPersistence)}function LT(t){return No(NT,t.config.apiKey,t.name)}async function FT(t,e,n=!1){if(xt(t.app))return Promise.reject(vn(t));const r=tr(t),s=cg(r,e),o=await new OT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=10*60*1e3;class $T{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ug(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ug({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ug(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HT=/^https?/;async function zT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jT(t);for(const n of e)try{if(WT(n))return}catch{}Nt(t,"unauthorized-domain")}function WT(t){const e=yl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HT.test(n))return!1;if(qT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const KT=new Ui(3e4,6e4);function Vd(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GT(t){return new Promise((e,n)=>{var r,s,i;function o(){Vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vd(),n(Ut(t,"network-request-failed"))},timeout:KT.get()})}if(!((s=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)o();else{const a=FI("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},Qp(`${LI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function QT(t){return Vo=Vo||GT(t),Vo}/**
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
 */const YT=new Ui(5e3,15e3),JT="__/auth/iframe",XT="emulator/auth/iframe",ZT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tA(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Iu(e,XT):`https://${t.config.authDomain}/${JT}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=eA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fi(r).slice(1)}`}async function nA(t){const e=await QT(t),n=Xt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:tA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=Xt().setTimeout(()=>{i(o)},YT.get());function c(){Xt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const rA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sA=500,iA=600,oA="_blank",aA="http://localhost";class Md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cA(t,e,n,r=sA,s=iA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rA),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ze().toLowerCase();n&&(a=jp(l)?oA:n),Bp(l)&&(e=e||aA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(SI(l)&&a!=="_self")return lA(e||"",a),new Md(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new Md(h)}function lA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uA="__/auth/handler",hA="emulator/auth/handler",dA=encodeURIComponent("fac");async function xd(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof Su){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",X0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Bi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${dA}=${encodeURIComponent(c)}`:"";return`${fA(t)}?${Fi(a).slice(1)}${l}`}function fA({config:t}){return t.emulator?Iu(t,hA):`https://${t.authDomain}/${uA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rg,this._completeRedirectFn=FT,this._overrideRedirectResult=MT}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xd(e,n,r,yl(),s);return cA(e,o,Pu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xd(e,n,r,yl(),s);return _T(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nA(e),r=new $T(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kp()||Au()||Ca()}}const pA=mA;var Ld="@firebase/auth",Fd="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yA(t){gs(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},l=new VI(r,s,i,c);return qI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gs(new Sr("auth-internal",e=>{const n=tr(e.getProvider("auth").getImmediate());return(r=>new gA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Ld,Fd,_A(t)),Hn(Ld,Fd,"esm2017")}/**
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
 */const vA=5*60,wA=Rp("authIdTokenMaxAge")||vA;let Ud=null;const EA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wA)return;const s=n==null?void 0:n.token;Ud!==s&&(Ud=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function IA(t=kp()){const e=yu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jI(t,{popupRedirectResolver:pA,persistence:[RT,mT,rg]}),r=Rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=EA(i.toString());cT(n,o,()=>o(n.currentUser)),aT(n,a=>o(a))}}const s=Ap("auth");return s&&HI(n,`http://${s}`),n}function TA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ut("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yA("Browser");var AA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Du=Du||{},ne=AA||self;function Na(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Oa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bA(t){return Object.prototype.hasOwnProperty.call(t,xc)&&t[xc]||(t[xc]=++RA)}var xc="closure_uid_"+(1e9*Math.random()>>>0),RA=0;function SA(t,e,n){return t.call.apply(t.bind,arguments)}function CA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=SA:ct=CA,ct.apply(null,arguments)}function po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function nr(){this.s=this.s,this.o=this.o}var PA=0;nr.prototype.s=!1;nr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),PA!=0)&&bA(this)};nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Nu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $d(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Na(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var kA=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ne.addEventListener("test",n,e),ne.removeEventListener("test",n,e)}catch{}return t}();function yi(t){return/^[\s\xa0]*$/.test(t)}function Va(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return Va().indexOf(t)!=-1}function Ou(t){return Ou[" "](t),t}Ou[" "]=function(){};function DA(t,e){var n=Ab;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var NA=Kt("Opera"),ys=Kt("Trident")||Kt("MSIE"),dg=Kt("Edge"),Il=dg||ys,fg=Kt("Gecko")&&!(Va().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),OA=Va().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function mg(){var t=ne.document;return t?t.documentMode:void 0}var Tl;e:{var Lc="",Fc=function(){var t=Va();if(fg)return/rv:([^\);]+)(\)|;)/.exec(t);if(dg)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OA)return/WebKit\/(\S+)/.exec(t);if(NA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fc&&(Lc=Fc?Fc[1]:""),ys){var Uc=mg();if(Uc!=null&&Uc>parseFloat(Lc)){Tl=String(Uc);break e}}Tl=Lc}var Al;if(ne.document&&ys){var Bd=mg();Al=Bd||parseInt(Tl,10)||void 0}else Al=void 0;var VA=Al;function vi(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fg){e:{try{Ou(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vi.$.h.call(this)}}Ke(vi,lt);var MA={2:"touch",3:"pen",4:"mouse"};vi.prototype.h=function(){vi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ma="closure_listenable_"+(1e6*Math.random()|0),xA=0;function LA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++xA,this.fa=this.ia=!1}function xa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Vu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function FA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pg(t){const e={};for(const n in t)e[n]=t[n];return e}const jd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<jd.length;i++)n=jd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function La(t){this.src=t,this.g={},this.h=0}La.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function bl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=hg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Mu="closure_lm_"+(1e6*Math.random()|0),$c={};function _g(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_g(t,e[i],n,r,s);return null}return n=wg(n),t&&t[Ma]?t.O(e,n,Oa(r)?!!r.capture:!!r,s):UA(t,e,n,!1,r,s)}function UA(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Oa(s)?!!s.capture:!!s,a=Lu(t);if(a||(t[Mu]=a=new La(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=$A(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(vg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $A(){function t(n){return e.call(t.src,t.listener,n)}const e=BA;return t}function yg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)yg(t,e[i],n,r,s);else r=Oa(r)?!!r.capture:!!r,n=wg(n),t&&t[Ma]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rl(i,n,r,s),-1<n&&(xa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rl(e,n,r,s)),(n=-1<t?e[t]:null)&&xu(n))}function xu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ma])bl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Lu(e))?(bl(n,t),n.h==0&&(n.src=null,e[Mu]=null)):xa(t)}}}function vg(t){return t in $c?$c[t]:$c[t]="on"+t}function BA(t,e){if(t.fa)t=!0;else{e=new vi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xu(t),t=n.call(r,e)}return t}function Lu(t){return t=t[Mu],t instanceof La?t:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wg(t){return typeof t=="function"?t:(t[Bc]||(t[Bc]=function(e){return t.handleEvent(e)}),t[Bc])}function We(){nr.call(this),this.i=new La(this),this.S=this,this.J=null}Ke(We,nr);We.prototype[Ma]=!0;We.prototype.removeEventListener=function(t,e,n,r){yg(this,t,e,n,r)};function Je(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var s=e;e=new lt(r,t),gg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=go(o,r,!0,e)&&s}if(o=e.g=t,s=go(o,r,!0,e)&&s,s=go(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=go(o,r,!1,e)&&s}We.prototype.N=function(){if(We.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)xa(n[r]);delete t.g[e],t.h--}}this.J=null};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&bl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Fu=ne.JSON.stringify;class jA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qA(){var t=Uu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HA{constructor(){this.h=this.g=null}add(e,n){const r=Eg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Eg=new jA(()=>new zA,t=>t.reset());class zA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function KA(t){ne.setTimeout(()=>{throw t},0)}let wi,Ei=!1,Uu=new HA,Ig=()=>{const t=ne.Promise.resolve(void 0);wi=()=>{t.then(GA)}};var GA=()=>{for(var t;t=qA();){try{t.h.call(t.g)}catch(n){KA(n)}var e=Eg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ei=!1};function Fa(t,e){We.call(this),this.h=t||1,this.g=e||ne,this.j=ct(this.qb,this),this.l=Date.now()}Ke(Fa,We);B=Fa.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Je(this,"tick"),this.ga&&($u(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $u(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}B.N=function(){Fa.$.N.call(this),$u(this),delete this.g};function Bu(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Tg(t){t.g=Bu(()=>{t.g=null,t.i&&(t.i=!1,Tg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QA extends nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tg(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(t){nr.call(this),this.h=t,this.g={}}Ke(Ii,nr);var qd=[];function Ag(t,e,n,r){Array.isArray(n)||(n&&(qd[0]=n.toString()),n=qd);for(var s=0;s<n.length;s++){var i=_g(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bg(t){Vu(t.g,function(e,n){this.g.hasOwnProperty(n)&&xu(e)},t),t.g={}}Ii.prototype.N=function(){Ii.$.N.call(this),bg(this)};Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ua(){this.g=!0}Ua.prototype.Ea=function(){this.g=!1};function YA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function JA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZA(t,n)+(r?" "+r:"")})}function XA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ua.prototype.info=function(){};function ZA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Fu(n)}catch{return e}}var Fr={},Hd=null;function $a(){return Hd=Hd||new We}Fr.Ta="serverreachability";function Rg(t){lt.call(this,Fr.Ta,t)}Ke(Rg,lt);function Ti(t){const e=$a();Je(e,new Rg(e))}Fr.STAT_EVENT="statevent";function Sg(t,e){lt.call(this,Fr.STAT_EVENT,t),this.stat=e}Ke(Sg,lt);function mt(t){const e=$a();Je(e,new Sg(e,t))}Fr.Ua="timingevent";function Cg(t,e){lt.call(this,Fr.Ua,t),this.size=e}Ke(Cg,lt);function qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Ba={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ju(){}ju.prototype.h=null;function zd(t){return t.h||(t.h=t.i())}function kg(){}var Hi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qu(){lt.call(this,"d")}Ke(qu,lt);function Hu(){lt.call(this,"c")}Ke(Hu,lt);var Sl;function ja(){}Ke(ja,ju);ja.prototype.g=function(){return new XMLHttpRequest};ja.prototype.i=function(){return{}};Sl=new ja;function zi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ii(this),this.P=eb,t=Il?125:void 0,this.V=new Fa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Dg}function Dg(){this.i=null,this.g="",this.h=!1}var eb=45e3,Ng={},Cl={};B=zi.prototype;B.setTimeout=function(t){this.P=t};function Pl(t,e,n){t.L=1,t.A=Ha(En(e)),t.u=n,t.S=!0,Og(t,null)}function Og(t,e){t.G=Date.now(),Wi(t),t.B=En(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Bg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Dg,t.g=c_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new QA(ct(t.Pa,t,t.g),t.O)),Ag(t.U,t.g,"readystatechange",t.nb),e=t.I?pg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ti(),YA(t.j,t.v,t.B,t.m,t.W,t.u)}B.nb=function(t){t=t.target;const e=this.M;e&&Qt(t)==3?e.l():this.Pa(t)};B.Pa=function(t){try{if(t==this.g)e:{const u=Qt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Il||this.g&&(this.h.h||this.g.ja()||Qd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ti(3):Ti(2)),qa(this);var n=this.g.da();this.ca=n;t:if(Vg(this)){var r=Qd(this.g);t="";var s=r.length,i=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),oi(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yi(a)){var l=a;break t}}l=null}if(n=l)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,n);else{this.i=!1,this.s=3,mt(12),_r(this),oi(this);break e}}this.S?(Mg(this,u,o),Il&&this.i&&u==3&&(Ag(this.U,this.V,"tick",this.mb),this.V.start())):(es(this.j,this.m,o,null),kl(this,o)),u==4&&_r(this),this.i&&!this.J&&(u==4?s_(this.l,this):(this.i=!1,Wi(this)))}else Eb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),_r(this),oi(this)}}}catch{}finally{}};function Vg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Mg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=tb(t,n),s==Cl){e==4&&(t.s=4,mt(14),r=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ng){t.s=4,mt(15),es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else es(t.j,t.m,s,null),kl(t,s);Vg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yu(e),e.M=!0,mt(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),_r(t),oi(t))}B.mb=function(){if(this.g){var t=Qt(this.g),e=this.g.ja();this.o<e.length&&(qa(this),Mg(this,t,e),this.i&&t!=4&&Wi(this))}};function tb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Cl:(n=Number(e.substring(n,r)),isNaN(n)?Ng:(r+=1,r+n>e.length?Cl:(e=e.slice(r,r+n),t.o=r+n,e)))}B.cancel=function(){this.J=!0,_r(this)};function Wi(t){t.Y=Date.now()+t.P,xg(t,t.P)}function xg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=qi(ct(t.lb,t),e)}function qa(t){t.C&&(ne.clearTimeout(t.C),t.C=null)}B.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(XA(this.j,this.B),this.L!=2&&(Ti(),mt(17)),_r(this),this.s=2,oi(this)):xg(this,this.Y-t)};function oi(t){t.l.H==0||t.J||s_(t.l,t)}function _r(t){qa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,$u(t.V),bg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function kl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dl(n.i,t))){if(!t.K&&Dl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)na(n),Ka(n);else break e;Qu(n),mt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=qi(ct(n.ib,n),6e3));if(1>=Hg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else yr(n,11)}else if((t.K||n.g==t)&&na(n),!yi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(zu(i,i.h),i.h=null))}if(r.F){const g=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Se(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=a_(r,r.J?r.pa:null,r.Y),o.K){zg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(qa(a),Wi(a)),r.g=o}else n_(r);0<n.j.length&&Ga(n)}else l[0]!="stop"&&l[0]!="close"||yr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?yr(n,7):Gu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ti(4)}catch{}}function nb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Na(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Na(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Lg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Na(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rb(t),r=nb(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Fg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ar(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ar){this.h=t.h,ea(this,t.j),this.s=t.s,this.g=t.g,ta(this,t.m),this.l=t.l;var e=t.i,n=new Ai;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wd(this,n),this.o=t.o}else t&&(e=String(t).match(Fg))?(this.h=!1,ea(this,e[1]||"",!0),this.s=Gs(e[2]||""),this.g=Gs(e[3]||"",!0),ta(this,e[4]),this.l=Gs(e[5]||"",!0),Wd(this,e[6]||"",!0),this.o=Gs(e[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}Ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qs(e,Kd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qs(e,Kd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qs(n,n.charAt(0)=="/"?ab:ob,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qs(n,lb)),t.join("")};function En(t){return new Ar(t)}function ea(t,e,n){t.j=n?Gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ta(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wd(t,e,n){e instanceof Ai?(t.i=e,ub(t.i,t.h)):(n||(e=Qs(e,cb)),t.i=new Ai(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Ha(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ib),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ib(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kd=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,cb=/[#\?@]/g,lb=/#/g;function Ai(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rr(t){t.g||(t.g=new Map,t.h=0,t.i&&sb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Ai.prototype;B.add=function(t,e){rr(this),this.i=null,t=Os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ug(t,e){rr(t),e=Os(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $g(t,e){return rr(t),e=Os(t,e),t.g.has(e)}B.forEach=function(t,e){rr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};B.ta=function(){rr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};B.Z=function(t){rr(this);let e=[];if(typeof t=="string")$g(this,t)&&(e=e.concat(this.g.get(Os(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return rr(this),this.i=null,t=Os(this,t),$g(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Bg(t,e,n){Ug(t,e),0<n.length&&(t.i=null,t.g.set(Os(t,e),Nu(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ub(t,e){e&&!t.j&&(rr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ug(this,r),Bg(this,s,n))},t)),t.j=e}var hb=class{constructor(t,e){this.g=t,this.map=e}};function jg(t){this.l=t||db,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var db=10;function qg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hg(t){return t.h?1:t.g?t.g.size:0}function Dl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zu(t,e){t.g?t.g.add(e):t.h=e}function zg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jg.prototype.cancel=function(){if(this.i=Wg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Nu(t.i)}var fb=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function mb(){this.g=new fb}function pb(t,e,n){const r=n||"";try{Lg(t,function(s,i){let o=s;Oa(s)&&(o=Fu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function gb(t,e){const n=new Ua;if(ne.Image){const r=new Image;r.onload=po(_o,n,r,"TestLoadImage: loaded",!0,e),r.onerror=po(_o,n,r,"TestLoadImage: error",!1,e),r.onabort=po(_o,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=po(_o,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _o(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ki(t){this.l=t.ec||null,this.j=t.ob||!1}Ke(Ki,ju);Ki.prototype.g=function(){return new za(this.l,this.j)};Ki.prototype.i=function(t){return function(){return t}}({});function za(t,e){We.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Wu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(za,We);var Wu=0;B=za.prototype;B.open=function(t,e){if(this.readyState!=Wu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=Wu};B.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Kg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}B.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gi(this):bi(this),this.readyState==3&&Kg(this)}};B.Za=function(t){this.g&&(this.response=this.responseText=t,Gi(this))};B.Ya=function(t){this.g&&(this.response=t,Gi(this))};B.ka=function(){this.g&&Gi(this)};function Gi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _b=ne.JSON.parse;function Me(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gg,this.L=this.M=!1}Ke(Me,We);var Gg="",yb=/^https?$/i,vb=["POST","PUT"];B=Me.prototype;B.Oa=function(t){this.M=t};B.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sl.g(),this.C=this.u?zd(this.u):zd(Sl),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Gd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=hg(vb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jg(this),0<this.B&&((this.L=wb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Bu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Gd(this,i)}};function wb(t){return ys&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.ua=function(){typeof Du<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Gd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qg(t),Wa(t)}function Qg(t){t.F||(t.F=!0,Je(t,"complete"),Je(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Wa(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wa(this,!0)),Me.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?Yg(this):this.kb())};B.kb=function(){Yg(this)};function Yg(t){if(t.h&&typeof Du<"u"&&(!t.C[1]||Qt(t)!=4||t.da()!=2)){if(t.v&&Qt(t)==4)Bu(t.La,0,t);else if(Je(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Fg)[1]||null;!s&&ne.self&&ne.self.location&&(s=ne.self.location.protocol.slice(0,-1)),r=!yb.test(s?s.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var i=2<Qt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Qg(t)}}finally{Wa(t)}}}}function Wa(t,e){if(t.g){Jg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}B.isActive=function(){return!!this.g};function Qt(t){return t.g?t.g.readyState:0}B.da=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_b(e)}};function Qd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Eb(t){const e={};t=(t.g&&2<=Qt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(yi(t[r]))continue;var n=WA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}FA(e,function(r){return r.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xg(t){let e="";return Vu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ku(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zg(t){this.Ga=0,this.j=[],this.l=new Ua,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=js("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=js("baseRetryDelayMs",5e3,t),this.hb=js("retryDelaySeedMs",1e4,t),this.eb=js("forwardChannelMaxRetries",2,t),this.xa=js("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jg(t&&t.concurrentRequestLimit),this.Ja=new mb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=Zg.prototype;B.ra=8;B.H=1;function Gu(t){if(e_(t),t.H==3){var e=t.W++,n=En(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Qi(t,n),e=new zi(t,t.l,e),e.L=2,e.A=Ha(En(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.A,n=!0),n||(e.g=c_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Wi(e)}o_(t)}function Ka(t){t.g&&(Yu(t),t.g.cancel(),t.g=null)}function e_(t){Ka(t),t.u&&(ne.clearTimeout(t.u),t.u=null),na(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Ga(t){if(!qg(t.i)&&!t.m){t.m=!0;var e=t.Na;wi||Ig(),Ei||(wi(),Ei=!0),Uu.add(e,t),t.C=0}}function Ib(t,e){return Hg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qi(ct(t.Na,t,e),i_(t,t.C)),t.C++,!0)}B.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new zi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=pg(i),gg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=t_(this,s,e),n=En(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Qi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xg(i)))+"&"+e:this.o&&Ku(n,this.o,i)),zu(this.i,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.aa=!0,Pl(s,n,null)):Pl(s,n,e),this.H=2}}else this.H==3&&(t?Yd(this,t):this.j.length==0||qg(this.i)||Yd(this))};function Yd(t,e){var n;e?n=e.m:n=t.W++;const r=En(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),Qi(t,r),t.o&&t.s&&Ku(r,t.o,t.s),n=new zi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=t_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),zu(t.i,n),Pl(n,r,e)}function Qi(t,e){t.na&&Vu(t.na,function(n,r){Se(e,r,n)}),t.h&&Lg({},function(n,r){Se(e,r,n)})}function t_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ct(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{pb(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function n_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wi||Ig(),Ei||(wi(),Ei=!0),Uu.add(e,t),t.A=0}}function Qu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qi(ct(t.Ma,t),i_(t,t.A)),t.A++,!0)}B.Ma=function(){if(this.u=null,r_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qi(ct(this.jb,this),t)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),Ka(this),r_(this))};function Yu(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function r_(t){t.g=new zi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Qi(t,e),t.o&&t.s&&Ku(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ha(En(e)),n.u=null,n.S=!0,Og(n,t)}B.ib=function(){this.v!=null&&(this.v=null,Ka(this),Qu(this),mt(19))};function na(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function s_(t,e){var n=null;if(t.g==e){na(t),Yu(t),t.g=null;var r=2}else if(Dl(t.i,e))n=e.F,zg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=$a(),Je(r,new Cg(r,n)),Ga(t)}else n_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&Ib(t,e)||r==2&&Qu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:yr(t,5);break;case 4:yr(t,10);break;case 3:yr(t,6);break;default:yr(t,2)}}}function i_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function yr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ct(t.pb,t);n||(n=new Ar("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||ea(n,"https"),Ha(n)),gb(n.toString(),r)}else mt(2);t.H=0,t.h&&t.h.za(e),o_(t),e_(t)}B.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function o_(t){if(t.H=0,t.ma=[],t.h){const e=Wg(t.i);(e.length!=0||t.j.length!=0)&&($d(t.ma,e),$d(t.ma,t.j),t.i.i.length=0,Nu(t.j),t.j.length=0),t.h.ya()}}function a_(t,e,n){var r=n instanceof Ar?En(n):new Ar(n);if(r.g!="")e&&(r.g=e+"."+r.g),ta(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ar(null);r&&ea(i,r),e&&(i.g=e),s&&ta(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),Qi(t,r),r}function c_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Me(new Ki({ob:n})):new Me(t.va),e.Oa(t.J),e}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function l_(){}B=l_.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function ra(){if(ys&&!(10<=Number(VA)))throw Error("Environmental error: no available transport.")}ra.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){We.call(this),this.g=new Zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!yi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vs(this)}Ke(Rt,We);Rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=a_(t,null,t.Y),Ga(t)};Rt.prototype.close=function(){Gu(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fu(t),t=n);e.j.push(new hb(e.fb++,t)),e.H==3&&Ga(e)};Rt.prototype.N=function(){this.g.h=null,delete this.j,Gu(this.g),delete this.g,Rt.$.N.call(this)};function u_(t){qu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(u_,qu);function h_(){Hu.call(this),this.status=1}Ke(h_,Hu);function Vs(t){this.g=t}Ke(Vs,l_);Vs.prototype.Ba=function(){Je(this.g,"a")};Vs.prototype.Aa=function(t){Je(this.g,new u_(t))};Vs.prototype.za=function(t){Je(this.g,new h_)};Vs.prototype.ya=function(){Je(this.g,"b")};function Tb(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke($t,Tb);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}$t.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)jc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){jc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){jc(this,r),s=0;break}}this.h=s,this.i+=e};$t.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Ab={};function Ju(t){return-128<=t&&128>t?DA(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Yt(t){if(isNaN(t)||!isFinite(t))return cs;if(0>t)return Qe(Yt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nl;return new Te(e,0)}function d_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(d_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yt(Math.pow(e,8)),r=cs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Yt(Math.pow(e,i)),r=r.R(i).add(Yt(o))):(r=r.R(n),r=r.add(Yt(o)))}return r}var Nl=4294967296,cs=Ju(0),Ol=Ju(1),Jd=Ju(16777216);B=Te.prototype;B.ea=function(){if(Pt(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nl+r)*e,e*=Nl}return t};B.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pn(this))return"0";if(Pt(this))return"-"+Qe(this).toString(t);for(var e=Yt(Math.pow(t,6)),n=this,r="";;){var s=ia(n,e).g;n=sa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,pn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};B.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}B.X=function(t){return t=sa(this,t),Pt(t)?-1:pn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(Ol)}B.abs=function(){return Pt(this)?Qe(this):this};B.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function sa(t,e){return t.add(Qe(e))}B.R=function(t){if(pn(this)||pn(t))return cs;if(Pt(this))return Pt(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(Pt(t))return Qe(this.R(Qe(t)));if(0>this.X(Jd)&&0>t.X(Jd))return Yt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,yo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,yo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,yo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,yo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function yo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qs(t,e){this.g=t,this.h=e}function ia(t,e){if(pn(e))throw Error("division by zero");if(pn(t))return new qs(cs,cs);if(Pt(t))return e=ia(Qe(t),e),new qs(Qe(e.g),Qe(e.h));if(Pt(e))return e=ia(t,Qe(e)),new qs(Qe(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ol,r=e;0>=r.X(t);)n=Xd(n),r=Xd(r);var s=Kr(n,1),i=Kr(r,1);for(r=Kr(r,2),n=Kr(n,2);!pn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Kr(r,1),n=Kr(n,1)}return e=sa(t,s.R(e)),new qs(s,e)}for(s=cs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Yt(n),o=i.R(e);Pt(o)||0<o.X(t);)n-=r,i=Yt(n),o=i.R(e);pn(i)&&(i=Ol),s=s.add(i),t=sa(t,o)}return new qs(s,t)}B.gb=function(t){return ia(this,t).h};B.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};B.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};B.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function Xd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function Kr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}ra.prototype.createWebChannel=ra.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Ba.NO_ERROR=0;Ba.TIMEOUT=8;Ba.HTTP_ERROR=6;Pg.COMPLETE="complete";kg.EventType=Hi;Hi.OPEN="a";Hi.CLOSE="b";Hi.ERROR="c";Hi.MESSAGE="d";We.prototype.listen=We.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Yt;Te.fromString=d_;var bb=function(){return new ra},Rb=function(){return $a()},qc=Ba,Sb=Pg,Cb=Fr,Zd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Pb=Ki,vo=kg,kb=Me,Db=$t,ls=Te;const ef="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new gu("@firebase/firestore");function Hs(){return Dr.logLevel}function W(t,...e){if(Dr.logLevel<=de.DEBUG){const n=e.map(Xu);Dr.debug(`Firestore (${Ms}): ${t}`,...n)}}function In(t,...e){if(Dr.logLevel<=de.ERROR){const n=e.map(Xu);Dr.error(`Firestore (${Ms}): ${t}`,...n)}}function vs(t,...e){if(Dr.logLevel<=de.WARN){const n=e.map(Xu);Dr.warn(`Firestore (${Ms}): ${t}`,...n)}}function Xu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function be(t,e){t||te()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class f_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class Ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vb{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new f_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new rt(e)}}class Mb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Mb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new Lb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ub(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ce(0,0))}static max(){return new re(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Ri{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const $b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Ri{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return $b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Pe.fromString(e))}static fromName(e){return new Q(Pe.fromString(e).popFirst(5))}static empty(){return new Q(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Pe(e.slice()))}}function Bb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Gn(s,Q.empty(),e)}function jb(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(re.min(),Q.empty(),-1)}static max(){return new Gn(re.max(),Q.empty(),-1)}}function qb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Yi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Hb)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Wb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zu.oe=-1;function Qa(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function Kb(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function p_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nf(this.data.getIterator())}getIteratorFrom(e){return new nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Xe(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new g_("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Gb.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function th(t){const e=t.mapValue.fields.__previous_value__;return eh(e)?th(e):e}function Si(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ci&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eh(t)?4:Yb(t)?9007199254740991:10:te()}function tn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Si(t).isEqual(Si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qn(s.timestampValue),a=Qn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?oa(o)===oa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(tf(o)!==tf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!tn(o[c],a[c])))return!1;return!0}(t,e);default:return te()}}function Pi(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),c=Fe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return rf(t.timestampValue,e.timestampValue);case 4:return rf(Si(t),Si(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Nr(i),c=Nr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=_e(a[l],c[l]);if(u!==0)return u}return _e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=_e(Fe(i.latitude),Fe(o.latitude));return a!==0?a:_e(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Es(a[l],c[l]);if(u)return u}return _e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Eo.mapValue&&o===Eo.mapValue)return 0;if(i===Eo.mapValue)return 1;if(o===Eo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=_e(c[h],u[h]);if(f!==0)return f;const m=Es(a[c[h]],l[u[h]]);if(m!==0)return m}return _e(c.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function rf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Qn(t),r=Qn(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Is(t){return Vl(t)}function Vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vl(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function sf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ml(t){return!!t&&"integerValue"in t}function nh(t){return!!t&&"arrayValue"in t}function of(t){return!!t&&"nullValue"in t}function af(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ai(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(ai(this.value))}}function __(t){const e=[];return Ur(t.fields,(n,r)=>{const s=new Ye([n]);if(Mo(r)){const i=__(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,re.min(),re.min(),re.min(),yt.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,re.min(),re.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,re.min(),re.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function cf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class y_{}class Ue extends y_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Zb(e,n,r):n==="array-contains"?new n1(e,r):n==="in"?new r1(e,r):n==="not-in"?new s1(e,r):n==="array-contains-any"?new i1(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e1(e,r):new t1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends y_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Bt(e,n)}matches(e){return v_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function v_(t){return t.op==="and"}function w_(t){return Xb(t)&&v_(t)}function Xb(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function xl(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(w_(t))return t.filters.map(e=>xl(e)).join(",");{const e=t.filters.map(n=>xl(n)).join(",");return`${t.op}(${e})`}}function E_(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&E_(o,s.filters[a]),!0):!1}(t,e):void te()}function I_(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof Bt?function(n){return n.op.toString()+" {"+n.getFilters().map(I_).join(" ,")+"}"}(t):"Filter"}class Zb extends Ue{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class e1 extends Ue{constructor(e,n){super(e,"in",n),this.keys=T_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t1 extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=T_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class n1 extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nh(n)&&Pi(n.arrayValue,this.value)}}class r1 extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pi(this.value.arrayValue,n)}}class s1 extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pi(this.value.arrayValue,n)}}class i1 extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pi(this.value.arrayValue,r))}}/**
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
 */class o1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function uf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new o1(t,e,n,r,s,i,o)}function rh(t){const e=se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ue=n}return e.ue}function sh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!E_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lf(t.startAt,e.startAt)&&lf(t.endAt,e.endAt)}function Ll(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a1(t,e,n,r,s,i,o,a){return new xs(t,e,n,r,s,i,o,a)}function Ya(t){return new xs(t)}function hf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function A_(t){return t.collectionGroup!==null}function ci(t){const e=se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Xe(Ye.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ki(i,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new ki(Ye.keyField(),r))}return e.ce}function Zt(t){const e=se(t);return e.le||(e.le=c1(e,ci(t))),e.le}function c1(t,e){if(t.limitType==="F")return uf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ki(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return uf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fl(t,e){const n=t.filters.concat([e]);return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ul(t,e,n){return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ja(t,e){return sh(Zt(t),Zt(e))&&t.limitType===e.limitType}function b_(t){return`${rh(Zt(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>I_(s)).join(", ")}]`),Qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function Xa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=cf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ci(r),s)||r.endAt&&!function(o,a,c){const l=cf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ci(r),s))}(t,e)}function l1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function R_(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=u1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function u1(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Es(c,l):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return p_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new Ne(Q.comparator);function Tn(){return h1}const S_=new Ne(Q.comparator);function Ys(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=S_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return li()}function P_(){return li()}function li(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const d1=new Ne(Q.comparator),f1=new Xe(Q.comparator);function he(...t){let e=f1;for(const n of t)e=e.add(n);return e}const m1=new Xe(_e);function p1(){return m1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function D_(t){return{integerValue:""+t}}function N_(t,e){return Kb(e)?D_(e):k_(t,e)}/**
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
 */class Za{constructor(){this._=void 0}}function g1(t,e,n){return t instanceof Di?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eh(i)&&(i=th(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ts?V_(t,e):t instanceof As?M_(t,e):function(s,i){const o=O_(s,i),a=df(o)+df(s.Pe);return Ml(o)&&Ml(s.Pe)?D_(a):k_(s.serializer,a)}(t,e)}function _1(t,e,n){return t instanceof Ts?V_(t,e):t instanceof As?M_(t,e):n}function O_(t,e){return t instanceof Ni?function(r){return Ml(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Di extends Za{}class Ts extends Za{constructor(e){super(),this.elements=e}}function V_(t,e){const n=x_(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class As extends Za{constructor(e){super(),this.elements=e}}function M_(t,e){let n=x_(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class Ni extends Za{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function df(t){return Fe(t.integerValue||t.doubleValue)}function x_(t){return nh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.field=e,this.transform=n}}function y1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ts&&s instanceof Ts||r instanceof As&&s instanceof As?ws(r.elements,s.elements,tn):r instanceof Ni&&s instanceof Ni?tn(r.Pe,s.Pe):r instanceof Di&&s instanceof Di}(t.transform,e.transform)}class v1{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tc{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nc(t.key,wt.none()):new Xi(t.key,t.data,wt.none());{const n=t.data,r=yt.empty();let s=new Xe(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new sr(t.key,r,new bt(s.toArray()),wt.none())}}function w1(t,e,n){t instanceof Xi?function(s,i,o){const a=s.value.clone(),c=mf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=mf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(F_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ui(t,e,n,r){return t instanceof Xi?function(i,o,a,c){if(!xo(i.precondition,o))return a;const l=i.value.clone(),u=pf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof sr?function(i,o,a,c){if(!xo(i.precondition,o))return a;const l=pf(i.fieldTransforms,c,o),u=o.data;return u.setAll(F_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function E1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=O_(r.transform,s||null);i!=null&&(n===null&&(n=yt.empty()),n.set(r.field,i))}return n||null}function ff(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ws(r,s,(i,o)=>y1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends tc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sr extends tc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function F_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mf(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,_1(o,a,n[s]))}return r}function pf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,g1(i,o,e))}return r}class nc extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I1 extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&w1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=L_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>ff(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>ff(n,r))}}class ih{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return d1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ih(e,n,r,s)}}/**
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
 */var xe,fe;function R1(t){switch(t){default:return te();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function U_(t){if(t===void 0)return In("GRPC error has no .code"),A.UNKNOWN;switch(t){case xe.OK:return A.OK;case xe.CANCELLED:return A.CANCELLED;case xe.UNKNOWN:return A.UNKNOWN;case xe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case xe.INTERNAL:return A.INTERNAL;case xe.UNAVAILABLE:return A.UNAVAILABLE;case xe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case xe.NOT_FOUND:return A.NOT_FOUND;case xe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case xe.ABORTED:return A.ABORTED;case xe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case xe.DATA_LOSS:return A.DATA_LOSS;default:return te()}}(fe=xe||(xe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const C1=new ls([4294967295,4294967295],0);function gf(t){const e=S1().encode(t),n=new Db;return n.update(e),new Uint8Array(n.digest())}function _f(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ls([n,r],0),new ls([s,i],0)]}class oh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ls.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ls.fromNumber(r)));return s.compare(C1)===1&&(s=new ls([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=gf(e),[r,s]=_f(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new oh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=gf(e),[r,s]=_f(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(re.min(),s,new Ne(_e),Tn(),he())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class $_{constructor(e,n){this.targetId=e,this.me=n}}class B_{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class yf{constructor(){this.fe=0,this.ge=wf(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=he(),n=he(),r=he();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Zi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=wf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class P1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=vf(),this.Qe=new Ne(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ll(i))if(r===0){const o=new Q(i.path);this.Ue(n,o,st.newNoDocument(o,re.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Nr(r).toUint8Array()}catch(c){if(c instanceof g_)return vs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new oh(o,s,i)}catch(c){return vs(c instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Ll(a.target)){const c=new Q(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,st.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=he();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new rc(e,n,this.Qe,this.ke,r);return this.ke=Tn(),this.qe=vf(),this.Qe=new Ne(_e),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new yf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vf(){return new Ne(Q.comparator)}function wf(){return new Ne(Q.comparator)}const k1={asc:"ASCENDING",desc:"DESCENDING"},D1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N1={and:"AND",or:"OR"};class O1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||Qa(e)?e:{value:e}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V1(t,e){return ca(t,e.toTimestamp())}function en(t){return be(!!t),re.fromTimestamp(function(n){const r=Qn(n);return new Ce(r.seconds,r.nanos)}(t))}function ah(t,e){return Bl(t,e).canonicalString()}function Bl(t,e){const n=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q_(t){const e=Pe.fromString(t);return be(G_(e)),e}function jl(t,e){return ah(t.databaseId,e.path)}function Hc(t,e){const n=q_(e);if(n.get(1)!==t.databaseId.projectId)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(z_(n))}function H_(t,e){return ah(t.databaseId,e)}function M1(t){const e=q_(t);return e.length===4?Pe.emptyPath():z_(e)}function ql(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z_(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ef(t,e,n){return{name:jl(t,e),fields:n.value.mapValue.fields}}function x1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(be(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(be(u===void 0||u instanceof Buffer||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:U_(l.code);return new H(u,l.message||"")}(o);n=new B_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hc(t,r.document.name),i=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):re.min(),a=new yt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Lo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hc(t,r.document),i=r.readTime?en(r.readTime):re.min(),o=st.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hc(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new b1(s,i),a=r.targetId;n=new $_(a,o)}}return n}function L1(t,e){let n;if(e instanceof Xi)n={update:Ef(t,e.key,e.value)};else if(e instanceof nc)n={delete:jl(t,e.key)};else if(e instanceof sr)n={update:Ef(t,e.key,e.data),updateMask:W1(e.fieldMask)};else{if(!(e instanceof I1))return te();n={verify:jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ts)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof As)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:V1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function F1(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?en(s.updateTime):en(i);return o.isEqual(re.min())&&(o=en(i)),new v1(o,s.transformResults||[])}(n,e))):[]}function U1(t,e){return{documents:[H_(t,e.path)]}}function $1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=H_(t,s);const i=function(l){if(l.length!==0)return K_(Bt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Xr(f.field),direction:q1(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=$l(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:s}}function B1(t){let e=M1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=W_(h);return f instanceof Bt&&w_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new ki(Zr(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Qa(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new aa(m,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new aa(m,f)}(n.endAt)),a1(e,s,o,i,a,"F",c,l)}function j1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function W_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bt.create(n.compositeFilter.filters.map(r=>W_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function q1(t){return k1[t]}function H1(t){return D1[t]}function z1(t){return N1[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return Ye.fromServerFormat(t.fieldPath)}function K_(t){return t instanceof Ue?function(n){if(n.op==="=="){if(af(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(of(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(af(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(of(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:H1(n.op),value:n.value}}}(t):t instanceof Bt?function(n){const r=n.getFilters().map(s=>K_(s));return r.length===1?r[0]:{compositeFilter:{op:z1(n.op),filters:r}}}(t):te()}function W1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function G_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,s,i=re.min(),o=re.min(),a=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.ut=e}}function G1(t){const e=B1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ul(e,e.limit,"L"):e}/**
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
 */class Q1{constructor(){this.on=new Y1}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Gn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class Y1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new bs(0)}static Nn(){return new bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Z1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ui(r.mutation,s,bt.empty(),Ce.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ys();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tn();const o=li(),a=function(){return li()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof sr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ui(u.mutation,l,u.mutation.getFieldMask(),Ce.now())):o.set(l.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new X1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=li();let s=new Ne((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||bt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=P_();u.forEach(f=>{if(!i.has(f)){const m=L_(n.get(f),r.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):A_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(vr());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:C_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,i).next(a=>C.forEach(a,c=>{const l=function(h,f){return new xs(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,st.newInvalidDocument(u)))});let a=Ys();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&ui(u.mutation,l,bt.empty(),Ce.now()),Xa(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:G1(s.bundledQuery),readTime:en(s.readTime)}}(n)),C.resolve()}}/**
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
 */class tR{constructor(){this.overlays=new Ne(Q.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=vr(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=vr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new A1(n,r));let i=this.lr.get(n);i===void 0&&(i=he(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.hr=new Xe(He.Pr),this.Ir=new Xe(He.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new He(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new He(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Q(new Pe([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Q(new Pe([])),r=new He(n,e),s=new He(n,e+1);let i=he();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Q.comparator(e.key,n.key)||_e(e.gr,n.gr)}static Tr(e,n){return _e(e.gr,n.gr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Xe(He.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new T1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(_e);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),C.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new He(new Q(i),0);let a=new Xe(_e);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return C.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new He(n,0),s=this.yr.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.Cr=e,this.docs=function(){return new Ne(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||qb(jb(u),r)<=0||(s.has(u.key)||Xa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sR(this)}getSize(e){return C.resolve(this.size)}}class sR extends J1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.persistence=e,this.Fr=new Ls(n=>rh(n),sh),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ch,this.targetCount=0,this.Nr=bs.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.Lr={},this.overlays={},this.Br=new Zu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new iR(this),this.indexManager=new Q1,this.remoteDocumentCache=function(s){return new rR(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new K1(n),this.Kr=new eR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new nR(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new aR(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return C.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class aR extends zb{constructor(e){super(),this.currentSequenceNumber=e}}class lh{constructor(e){this.persistence=e,this.Gr=new ch,this.zr=null}static jr(e){return new lh(e)}get Hr(){if(this.zr)return this.zr;throw te()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,r=>{const s=Q.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uh(e,n.fromCache,r,s)}}/**
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
 */class lR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return W0()?8:Wb(Ze())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Hs()<=de.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Hs()<=de.DEBUG&&W("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Hs()<=de.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):C.resolve())}zi(e,n){if(hf(n))return C.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ul(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Ul(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return hf(n)||s.isEqual(re.min())?C.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?C.resolve(null):(Hs()<=de.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(n)),this.Xi(e,o,n,Bb(s,-1)).next(a=>a))})}Yi(e,n){let r=new Xe(R_(e));return n.forEach((s,i)=>{Xa(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Hs()<=de.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Gn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ne(_e),this.ns=new Ls(i=>rh(i),sh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function hR(t,e,n,r){return new uR(t,e,n,r)}async function Q_(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function dR(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let m=C.resolve();return f.forEach(v=>{m=m.next(()=>u.getEntry(c,v)).next(g=>{const E=l.docVersions.get(v);be(E!==null),g.version.compareTo(E)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Y_(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function fR(t,e){const n=se(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ht.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(g,E,S){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=Tn(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(mR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(re.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function mR(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function pR(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gR(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Hl(t,e,n){const r=se(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function If(t,e,n){const r=se(t);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=se(c),f=h.ns.get(u);return f!==void 0?C.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,Zt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:he())).next(a=>(_R(r,l1(e),a),{documents:a,ls:i})))}function _R(t,e,n){let r=t.rs.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Tf{constructor(){this.activeTargetIds=p1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yR{constructor(){this.eo=new Tf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Tf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Af{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Io=null;function zc(){return Io===null?Io=function(){return 268435456+Math.round(2147483648*Math.random())}():Io++,"0x"+Io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const nt="WebChannelConnection";class IR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(n,r,s,i,o){const a=zc(),c=this.Co(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,s).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Mo(n,r,s,i,o,a){return this.Do(n,r,s,i,o)}vo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Co(n,r){const s=wR[n];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,s){const i=zc();return new Promise((o,a)=>{const c=new kb;c.setWithCredentials(!0),c.listenOnce(Sb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case qc.NO_ERROR:const u=c.getResponseJson();W(nt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case qc.TIMEOUT:W(nt,`RPC '${e}' ${i} timed out`),a(new H(A.DEADLINE_EXCEEDED,"Request time out"));break;case qc.HTTP_ERROR:const h=c.getStatus();if(W(nt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const v=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(S)>=0?S:A.UNKNOWN}(m.status);a(new H(v,m.message))}else a(new H(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(A.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{W(nt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);W(nt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}xo(e,n,r){const s=zc(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bb(),a=Rb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Pb({})),this.vo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");W(nt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const v=new ER({co:E=>{m?W(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(f||(W(nt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),W(nt,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},lo:()=>h.close()}),g=(E,S,F)=>{E.listen(S,$=>{try{F($)}catch(K){setTimeout(()=>{throw K},0)}})};return g(h,vo.EventType.OPEN,()=>{m||(W(nt,`RPC '${e}' stream ${s} transport opened.`),v.Vo())}),g(h,vo.EventType.CLOSE,()=>{m||(m=!0,W(nt,`RPC '${e}' stream ${s} transport closed`),v.fo())}),g(h,vo.EventType.ERROR,E=>{m||(m=!0,vs(nt,`RPC '${e}' stream ${s} transport errored:`,E),v.fo(new H(A.UNAVAILABLE,"The operation could not be completed")))}),g(h,vo.EventType.MESSAGE,E=>{var S;if(!m){const F=E.data[0];be(!!F);const $=F,K=$.error||((S=$[0])===null||S===void 0?void 0:S.error);if(K){W(nt,`RPC '${e}' stream ${s} received error:`,K);const ce=K.status;let V=function(oe){const ue=xe[oe];if(ue!==void 0)return U_(ue)}(ce),z=K.message;V===void 0&&(V=A.INTERNAL,z="Unknown error status: "+ce+" with message "+K.message),m=!0,v.fo(new H(V,z)),h.close()}else W(nt,`RPC '${e}' stream ${s} received:`,F),v.po(F)}}),g(a,Cb.STAT_EVENT,E=>{E.stat===Zd.PROXY?W(nt,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===Zd.NOPROXY&&W(nt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.mo()},0),v}}function Wc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){return new O1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new J_(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===n&&this.a_(r,s)},r=>{e(()=>{const s=new H(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TR extends X_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=x1(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?en(o.readTime):re.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=ql(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ll(c)?{documents:U1(i,c)}:{query:$1(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=j_(i,o.resumeToken);const l=$l(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=ca(i,o.snapshotVersion.toTimestamp());const l=$l(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=j1(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=ql(this.serializer),n.removeTarget=e,this.r_(n)}}class AR extends X_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=F1(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.d_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=ql(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>L1(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,Bl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(A.UNKNOWN,i.toString())})}Mo(e,n,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Bl(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(A.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class RR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(In(n),this.y_=!1):W("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{$r(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=se(c);l.M_.add(4),await eo(l),l.N_.set("Unknown"),l.M_.delete(4),await ic(l)}(this))})}),this.N_=new RR(r,s)}}async function ic(t){if($r(t))for(const e of t.x_)await e(!0)}async function eo(t){for(const e of t.x_)await e(!1)}function Z_(t,e){const n=se(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),mh(n)?fh(n):Fs(n).Zo()&&dh(n,e))}function hh(t,e){const n=se(t),r=Fs(n);n.F_.delete(e),r.Zo()&&ey(n,e),n.F_.size===0&&(r.Zo()?r.t_():$r(n)&&n.N_.set("Unknown"))}function dh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).h_(e)}function ey(t,e){t.L_.xe(e),Fs(t).P_(e)}function fh(t){t.L_=new P1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.N_.w_()}function mh(t){return $r(t)&&!Fs(t).Yo()&&t.F_.size>0}function $r(t){return se(t).M_.size===0}function ty(t){t.L_=void 0}async function CR(t){t.N_.set("Online")}async function PR(t){t.F_.forEach((e,n)=>{dh(t,e)})}async function kR(t,e){ty(t),mh(t)?(t.N_.D_(e),fh(t)):t.N_.set("Unknown")}async function DR(t,e,n){if(t.N_.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Lo?t.L_.Ke(e):e instanceof $_?t.L_.He(e):t.L_.We(e),!n.isEqual(re.min()))try{const r=await Y_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(ht.EMPTY_BYTE_STRING,u.snapshotVersion)),ey(i,c);const h=new Un(u.target,c,l,u.sequenceNumber);dh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Ji(e))throw e;t.M_.add(1),await eo(t),t.N_.set("Offline"),n||(n=()=>Y_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ic(t)})}function ny(t,e){return e().catch(n=>la(t,n,e))}async function oc(t){const e=se(t),n=Yn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;NR(e);)try{const s=await pR(e.localStore,r);if(s===null){e.v_.length===0&&n.t_();break}r=s.batchId,OR(e,s)}catch(s){await la(e,s)}ry(e)&&sy(e)}function NR(t){return $r(t)&&t.v_.length<10}function OR(t,e){t.v_.push(e);const n=Yn(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function ry(t){return $r(t)&&!Yn(t).Yo()&&t.v_.length>0}function sy(t){Yn(t).start()}async function VR(t){Yn(t).R_()}async function MR(t){const e=Yn(t);for(const n of t.v_)e.E_(n.mutations)}async function xR(t,e,n){const r=t.v_.shift(),s=ih.from(r,e,n);await ny(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await oc(t)}async function LR(t,e){e&&Yn(t).T_&&await async function(r,s){if(function(o){return R1(o)&&o!==A.ABORTED}(s.code)){const i=r.v_.shift();Yn(r).e_(),await ny(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oc(r)}}(t,e),ry(t)&&sy(t)}async function bf(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=$r(n);n.M_.add(3),await eo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ic(n)}async function FR(t,e){const n=se(t);e?(n.M_.delete(2),await ic(n)):e||(n.M_.add(2),await eo(n),n.N_.set("Unknown"))}function Fs(t){return t.B_||(t.B_=function(n,r,s){const i=se(n);return i.m_(),new TR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:CR.bind(null,t),Io:PR.bind(null,t),Eo:kR.bind(null,t),l_:DR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),mh(t)?fh(t):t.N_.set("Unknown")):(await t.B_.stop(),ty(t))})),t.B_}function Yn(t){return t.k_||(t.k_=function(n,r,s){const i=se(n);return i.m_(),new AR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:VR.bind(null,t),Eo:LR.bind(null,t),A_:MR.bind(null,t),d_:xR.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await oc(t)):(await t.k_.stop(),t.v_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ph(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gh(t,e){if(In("AsyncQueue",`${e}: ${t}`),Ji(t))return new H(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.q_=new Ne(Q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):te():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rs(e,n,us.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class $R{constructor(){this.queries=new Ls(e=>b_(e),Ja),this.onlineState="Unknown",this.z_=new Set}}async function iy(t,e){const n=se(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new UR,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=gh(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&_h(n)}async function oy(t,e){const n=se(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BR(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&_h(n)}function jR(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function _h(t){t.z_.forEach(e=>{e.next()})}var zl,Sf;(Sf=zl||(zl={})).J_="default",Sf.Cache="cache";class ay{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==zl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.key=e}}class ly{constructor(e){this.key=e}}class qR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=he(),this.mutatedKeys=he(),this.Ia=R_(e),this.Ta=new us(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Rf,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),m=Xa(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),g=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;f&&m?f.data.isEqual(m.data)?v!==g&&(r.track({type:3,doc:m}),E=!0):this.Ra(f,m)||(r.track({type:2,doc:m}),E=!0,(c&&this.Ia(m,c)>0||l&&this.Ia(m,l)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),E=!0):f&&!m&&(r.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(m?(o=o.add(m),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(m,v){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return g(m)-g(v)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new Rs(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Rf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=he(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new ly(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new cy(r))}),n}pa(e){this.la=e.ls,this.Pa=he();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Rs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class HR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zR{constructor(e){this.key=e,this.wa=!1}}class WR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ls(a=>b_(a),Ja),this.Da=new Map,this.Ca=new Set,this.va=new Ne(Q.comparator),this.Fa=new Map,this.Ma=new ch,this.xa={},this.Oa=new Map,this.Na=bs.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function KR(t,e,n=!0){const r=py(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await uy(r,e,n,!0),s}async function GR(t,e){const n=py(t);await uy(n,e,!0,!1)}async function uy(t,e,n,r){const s=await gR(t.localStore,Zt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await QR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Z_(t.remoteStore,s),a}async function QR(t,e,n,r,s){t.Ba=(h,f,m)=>async function(g,E,S,F){let $=E.view.da(S);$.Zi&&($=await If(g.localStore,E.query,!1).then(({documents:z})=>E.view.da(z,$)));const K=F&&F.targetChanges.get(E.targetId),ce=F&&F.targetMismatches.get(E.targetId)!=null,V=E.view.applyChanges($,g.isPrimaryClient,K,ce);return Pf(g,E.targetId,V.fa),V.snapshot}(t,h,f,m);const i=await If(t.localStore,e,!0),o=new qR(e,i.ls),a=o.da(i.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Pf(t,n,l.fa);const u=new HR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function YR(t,e,n){const r=se(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Ja(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hh(r.remoteStore,s.targetId),Wl(r,s.targetId)}).catch(Yi)):(Wl(r,s.targetId),await Hl(r.localStore,s.targetId,!0))}async function JR(t,e){const n=se(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hh(n.remoteStore,r.targetId))}async function XR(t,e,n){const r=iS(t);try{const s=await function(o,a){const c=se(o),l=Ce.now(),u=a.reduce((m,v)=>m.add(v.key),he());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=Tn(),g=he();return c.ss.getEntries(m,u).next(E=>{v=E,v.forEach((S,F)=>{F.isValidDocument()||(g=g.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(E=>{h=E;const S=[];for(const F of a){const $=E1(F,h.get(F.key).overlayedDocument);$!=null&&S.push(new sr(F.key,$,__($.value.mapValue),wt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,S,a)}).next(E=>{f=E;const S=E.applyToLocalDocumentSet(h,g);return c.documentOverlayCache.saveOverlays(m,E.batchId,S)})}).then(()=>({batchId:f.batchId,changes:C_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new Ne(_e)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(r,s.batchId,n),await to(r,s.changes),await oc(r.remoteStore)}catch(s){const i=gh(s,"Failed to persist write");n.reject(i)}}async function hy(t,e){const n=se(t);try{const r=await fR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?be(o.wa):s.removedDocuments.size>0&&(be(o.wa),o.wa=!1))}),await to(n,r,e)}catch(r){await Yi(r)}}function Cf(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=se(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(l=!0)}),l&&_h(c)}(r.eventManager,e),s.length&&r.Sa.l_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZR(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Ne(Q.comparator);o=o.insert(i,st.newNoDocument(i,re.min()));const a=he().add(i),c=new rc(re.min(),new Map,new Ne(_e),o,a);await hy(r,c),r.va=r.va.remove(i),r.Fa.delete(e),yh(r)}else await Hl(r.localStore,e,!1).then(()=>Wl(r,e,n)).catch(Yi)}async function eS(t,e){const n=se(t),r=e.batch.batchId;try{const s=await dR(n.localStore,e);fy(n,r,null),dy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Yi(s)}}async function tS(t,e,n){const r=se(t);try{const s=await function(o,a){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(be(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);fy(r,e,n),dy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Yi(s)}}function dy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function fy(t,e,n){const r=se(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||my(t,r)})}function my(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(hh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),yh(t))}function Pf(t,e,n){for(const r of n)r instanceof cy?(t.Ma.addReference(r.key,e),nS(t,r)):r instanceof ly?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||my(t,r.key)):te()}function nS(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Ca.add(r),yh(t))}function yh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Q(Pe.fromString(e)),r=t.Na.next();t.Fa.set(r,new zR(n)),t.va=t.va.insert(n,r),Z_(t.remoteStore,new Un(Zt(Ya(n.path)),r,"TargetPurposeLimboResolution",Zu.oe))}}async function to(t,e,n){const r=se(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,c)=>{o.push(r.Ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=uh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(c,l){const u=se(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,f=>C.forEach(f.ki,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>C.forEach(f.qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Ji(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=u.ts.get(f),v=m.snapshotVersion,g=m.withLastLimboFreeSnapshotVersion(v);u.ts=u.ts.insert(f,g)}}}(r.localStore,i))}async function rS(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Q_(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new H(A.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r._s)}}function sS(t,e){const n=se(t),r=n.Fa.get(e);if(r&&r.wa)return he().add(r.key);{let s=he();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function py(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZR.bind(null,e),e.Sa.l_=BR.bind(null,e.eventManager),e.Sa.ka=jR.bind(null,e.eventManager),e}function iS(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tS.bind(null,e),e}class kf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hR(this.persistence,new lR,e.initialUser,this.serializer)}createPersistence(e){return new oR(lh.jr,this.serializer)}createSharedClientState(e){return new yR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rS.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $R}()}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=function(i){return new IR(i)}(e.databaseInfo);return function(i,o,a,c){return new bR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new SR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Cf(this.syncEngine,n,0),function(){return Af.D()?new Af:new vR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new WR(s,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=se(r);W("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await eo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=m_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Q_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Df(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lS(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>bf(e.remoteStore,s)),t._onlineComponents=e}function cS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function lS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cS(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new kf)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new kf);return t._offlineComponents}async function _y(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Df(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Df(t,new oS))),t._onlineComponents}function uS(t){return _y(t).then(e=>e.syncEngine)}async function Kl(t){const e=await _y(t),n=e.eventManager;return n.onListen=KR.bind(null,e.syncEngine),n.onUnlisten=YR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JR.bind(null,e.syncEngine),n}function hS(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new gy({next:f=>{o.enqueueAndForget(()=>oy(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new H(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new H(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new ay(Ya(a.path),u,{includeMetadataChanges:!0,ra:!0});return iy(i,h)}(await Kl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Nf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t,e,n){if(!n)throw new H(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dS(t,e,n,r){if(e===!0&&r===!0)throw new H(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Of(t){if(!Q.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(Q.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ac(t);throw new H(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nb;switch(r.type){case"firstParty":return new xb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nf.get(n);r&&(W("ComponentProvider","Removing Datastore"),Nf.delete(n),r.terminate())}(this),Promise.resolve()}}function fS(t,e,n,r={}){var s;const i=(t=Dt(t,cc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=rt.MOCK_USER;else{a=$0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new rt(l)}t._authCredentials=new Ob(new f_(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Wn extends Br{constructor(e,n,r){super(e,n,Ya(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new Q(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function zt(t,e,...n){if(t=Ve(t),vy("collection","path",e),t instanceof cc){const r=Pe.fromString(e,...n);return Vf(r),new Wn(t,null,r)}{if(!(t instanceof ut||t instanceof Wn))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Vf(r),new Wn(t.firestore,null,r)}}function Le(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=m_.newId()),vy("doc","path",e),t instanceof cc){const r=Pe.fromString(e,...n);return Of(r),new ut(t,null,new Q(r))}{if(!(t instanceof ut||t instanceof Wn))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Of(r),new ut(t.firestore,t instanceof Wn?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new J_(this,"async_queue_retry"),this.hu=()=>{const n=Wc();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new zn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Ji(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=ph.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&te()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function xf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Jn extends cc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new mS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wy(this),this._firestoreClient.terminate()}}function pS(t,e){const n=typeof t=="object"?t:kp(),r=typeof t=="string"?t:"(default)",s=yu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=F0("firestore");i&&fS(s,...i)}return s}function lc(t){return t._firestoreClient||wy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Qb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new aS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(ht.fromBase64String(e))}catch(n){throw new H(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/^__.*__$/;class _S{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xi(e,this.data,n,this.fieldTransforms)}}class Ey{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Iy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class uc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new uc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ua(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Iy(this.fu)&&gS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class yS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}Fu(e,n,r,s=!1){return new uc({fu:e,methodName:n,vu:r,path:Ye.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hc(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new yS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ty(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);Ah("Data must be an object, but it was:",o,r);const a=Sy(r,o);let c,l;if(i.merge)c=new bt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Gl(e,h,n);if(!o.contains(f))throw new H(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Py(u,f)||u.push(f)}c=new bt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new _S(new yt(a),c,l)}class dc extends jr{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function Ay(t,e,n){return new uc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wh extends jr{_toFieldTransform(e){return new ec(e.path,new Di)}isEqual(e){return e instanceof wh}}class Eh extends jr{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Ay(this,e,!0),r=this.Mu.map(i=>qr(i,n)),s=new Ts(r);return new ec(e.path,s)}isEqual(e){return e instanceof Eh&&ps(this.Mu,e.Mu)}}class Ih extends jr{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Ay(this,e,!0),r=this.Mu.map(i=>qr(i,n)),s=new As(r);return new ec(e.path,s)}isEqual(e){return e instanceof Ih&&ps(this.Mu,e.Mu)}}class Th extends jr{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Ni(e.serializer,N_(e.serializer,this.xu));return new ec(e.path,n)}isEqual(e){return e instanceof Th&&this.xu===e.xu}}function by(t,e,n,r){const s=t.Fu(1,e,n);Ah("Data must be an object, but it was:",s,r);const i=[],o=yt.empty();Ur(r,(c,l)=>{const u=bh(e,c,n);l=Ve(l);const h=s.Su(u);if(l instanceof dc)i.push(u);else{const f=qr(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new bt(i);return new Ey(o,a,s.fieldTransforms)}function Ry(t,e,n,r,s,i){const o=t.Fu(1,e,n),a=[Gl(e,r,n)],c=[s];if(i.length%2!=0)throw new H(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Gl(e,i[f])),c.push(i[f+1]);const l=[],u=yt.empty();for(let f=a.length-1;f>=0;--f)if(!Py(l,a[f])){const m=a[f];let v=c[f];v=Ve(v);const g=o.Su(m);if(v instanceof dc)l.push(m);else{const E=qr(v,g);E!=null&&(l.push(m),u.set(m,E))}}const h=new bt(l);return new Ey(u,h,o.fieldTransforms)}function vS(t,e,n,r=!1){return qr(n,t.Fu(r?4:3,e))}function qr(t,e){if(Cy(t=Ve(t)))return Ah("Unsupported field value:",e,t),Sy(t,e);if(t instanceof jr)return function(r,s){if(!Iy(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=qr(a,s.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return N_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:ca(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(r instanceof vh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:j_(s.serializer,r._byteString)};if(r instanceof ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ah(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ac(r)}`)}(t,e)}function Sy(t,e){const n={};return p_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,s)=>{const i=qr(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof vh||t instanceof Ss||t instanceof ut||t instanceof jr)}function Ah(t,e,n){if(!Cy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ac(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Gl(t,e,n){if((e=Ve(e))instanceof no)return e._internalPath;if(typeof e=="string")return bh(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const wS=new RegExp("[~\\*/\\[\\]]");function bh(t,e,n){if(e.search(wS)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new no(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new H(A.INVALID_ARGUMENT,a+t+c)}function Py(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ES(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ES extends ky{data(){return super.data()}}function fc(t,e){return typeof e=="string"?bh(t,e):e instanceof no?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rh{}class Dy extends Rh{}function dr(t,e,...n){let r=[];e instanceof Rh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Sh).length,a=i.filter(c=>c instanceof mc).length;if(o>1||o>0&&a>0)throw new H(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class mc extends Dy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new mc(e,n,r)}_apply(e){const n=this._parse(e);return Ny(e._query,n),new Br(e.firestore,e.converter,Fl(e._query,n))}_parse(e){const n=hc(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new H(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ff(h,u);const m=[];for(const v of h)m.push(Lf(c,i,v));f={arrayValue:{values:m}}}else f=Lf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ff(h,u),f=vS(a,o,h,u==="in"||u==="not-in");return Ue.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function on(t,e,n){const r=e,s=fc("where",t);return mc._create(s,r,n)}class Sh extends Rh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Ny(o,c),o=Fl(o,c)}(e._query,n),new Br(e.firestore,e.converter,Fl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ch extends Dy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ch(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ki(i,o)}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new xs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function TS(t,e="asc"){const n=e,r=fc("orderBy",t);return Ch._create(r,n)}function Lf(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new H(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!A_(e)&&n.indexOf("/")!==-1)throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!Q.isDocumentKey(r))throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sf(t,new Q(r))}if(n instanceof ut)return sf(t,n._key);throw new H(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(n)}.`)}function Ff(t,e){if(!Array.isArray(t)||t.length===0)throw new H(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class AS{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new vh(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=th(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);be(G_(r));const s=new Ci(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vy extends ky{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends Vy{data(e={}){return super.data(e)}}class bS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:RS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){t=Dt(t,ut);const e=Dt(t.firestore,Jn);return hS(lc(e),t._key).then(n=>xy(e,t,n))}class My extends AS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function Ct(t,e,n){t=Dt(t,ut);const r=Dt(t.firestore,Jn),s=Oy(t.converter,e,n);return pc(r,[Ty(hc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,wt.none())])}function Uo(t,e,n,...r){t=Dt(t,ut);const s=Dt(t.firestore,Jn),i=hc(s);let o;return o=typeof(e=Ve(e))=="string"||e instanceof no?Ry(i,"updateDoc",t._key,e,n,r):by(i,"updateDoc",t._key,e),pc(s,[o.toMutation(t._key,wt.exists(!0))])}function Gc(t){return pc(Dt(t.firestore,Jn),[new nc(t._key,wt.none())])}function an(t,...e){var n,r,s;t=Ve(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ut)l=Dt(t.firestore,Jn),u=Ya(t._key.path),c={next:h=>{e[o]&&e[o](xy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Dt(t,Br);l=Dt(h.firestore,Jn),u=h._query;const f=new My(l);c={next:m=>{e[o]&&e[o](new bS(l,f,h,m))},error:e[o+1],complete:e[o+2]},IS(t._query)}return function(f,m,v,g){const E=new gy(g),S=new ay(m,E,v);return f.asyncQueue.enqueueAndForget(async()=>iy(await Kl(f),S)),()=>{E.$a(),f.asyncQueue.enqueueAndForget(async()=>oy(await Kl(f),S))}}(lc(l),u,a,c)}function pc(t,e){return function(r,s){const i=new zn;return r.asyncQueue.enqueueAndForget(async()=>XR(await uS(r),s,i)),i.promise}(lc(t),e)}function xy(t,e,n){const r=n.docs.get(e._key),s=new My(t);return new Vy(t,s,e._key,r,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=hc(e)}set(e,n,r){this._verifyNotCommitted();const s=Qc(e,this._firestore),i=Oy(s.converter,n,r),o=Ty(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,wt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Qc(e,this._firestore);let o;return o=typeof(n=Ve(n))=="string"||n instanceof no?Ry(this._dataReader,"WriteBatch.update",i._key,n,r,s):by(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,wt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Qc(e,this._firestore);return this._mutations=this._mutations.concat(new nc(n._key,wt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qc(t,e){if((t=Ve(t)).firestore!==e)throw new H(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function $o(){return new wh("serverTimestamp")}function br(...t){return new Eh("arrayUnion",t)}function Ly(...t){return new Ih("arrayRemove",t)}function Yc(t){return new Th("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){return lc(t=Dt(t,Jn)),new SS(t,e=>pc(t,e))}(function(e,n=!0){(function(s){Ms=s})(Ds),gs(new Sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Jn(new Vb(r.getProvider("auth-internal")),new Fb(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ci(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Hn(ef,"4.6.1",e),Hn(ef,"4.6.1","esm2017")})();var CS="firebase",PS="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(CS,PS,"app");const kS={apiKey:"AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",authDomain:"vuechat-c27a8.firebaseapp.com",projectId:"vuechat-c27a8",storageBucket:"vuechat-c27a8.appspot.com",messagingSenderId:"713413651968",appId:"1:713413651968:web:93c490d79df8c319cf2e5"},Fy=Pp(kS),at=IA(Fy),ve=pS(Fy);var DS={BASE_URL:"/friendzy/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ha=G(typeof localStorage<"u"&&localStorage.getItem("friendzyLang")||"es"),NS=typeof localStorage<"u"&&localStorage.getItem("friendzyTheme")||"naranja",da=G(NS),Xc={es:{cargando:"Cargando...",selecciona:"Selecciona un usuario o una conversación",para_chatear:"para empezar a chatear en privado",conecta_amigos:"Conecta con amigos",conecta_inteligente:"de forma inteligente",auth_intro:"Chat en tiempo real, conoce nuevas personas y crea conexiones significativas en una plataforma segura.",feat1:"Mensajería en tiempo real",feat2:"Conoce personas de todo el mundo",feat3:"Seguridad y privacidad garantizada",stat_users:"Usuarios",stat_msgs:"Mensajes",stat_uptime:"Uptime",mobile_tagline:"Conecta con amigos de todo el mundo",bienvenido:"Bienvenido de vuelta",crea_cuenta:"Crea tu cuenta",login_sub:"Ingresa a tu cuenta para continuar",reg_sub:"Regístrate gratis y empieza a chatear",google_in:"Iniciar sesión con Google",or_email:"o con tu email",nombre:"Nombre",tu_nombre:"Tu nombre",email:"Email",contrasena:"Contraseña",iniciar_login:"Iniciar sesión",crear:"Crear cuenta",no_cuenta:"¿No tienes cuenta?",reg_gratis:"Regístrate gratis",ya_cuenta:"¿Ya tienes cuenta?",inicia_sesion:"Inicia sesión",badge_seguro:"Seguro",badge_tiempo:"Tiempo real",badge_global:"Global",err_completa:"Completa todos los campos",err_email_pass:"Email o contraseña incorrectos",err_email_used:"Este email ya está registrado",err_invalid_email:"Introduce un email válido",err_weak:"La contraseña debe tener al menos 6 caracteres",err_too_many:"Demasiados intentos. Intenta más tarde",busqueda_ph:"Buscar chats o personas...",personas_reg:"Personas registradas",no_personas:"No hay personas registradas",solicitudes:"Solicitudes",quiere_chatear:"Quiere chatear contigo",amigos:"Amigos",en_linea:"En línea",conversaciones:"Conversaciones",sin_conv:"Sin conversaciones todavía",sin_conv_sub:"Busca personas y envía una solicitud para chatear",mi_perfil:"Mi perfil",configuracion:"Configuración",cerrar_sesion:"Cerrar sesión",chat:"Chat",pendiente:"Pendiente",aceptar:"Aceptar",solicitar:"Solicitar",favoritos:"Favoritos",sin_favoritos:"Sin chats favoritos",sin_mensajes:"Sin mensajes todavía",ahora:"ahora",grabar:"Grabando · toca para terminar",nota_larga:"La nota es demasiado larga para enviarse",enviar_ph:"Escribe un mensaje...",no_mensajes:"No hay mensajes todavía",envia_primero:"¡Envía el primero!",hoy:"Hoy",ag_favoritos:"Agregar a favoritos",quitar_fav:"Quitar de favoritos",fotos_compartidas:"Fotos compartidas",sin_fotos:"No hay fotos compartidas todavía",idioma:"Idioma",tema:"Tema",naranja:"Naranja",azul:"Azul",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Tu alias en el chat",cumpleanos:"Fecha de nacimiento",guardar:"Guardar",guardado:"Guardado",cambiar_foto:"Cambiar foto",foto_nombre:"Foto de perfil",mensaje_nuevo:"Nuevo mensaje",nueva_solicitud:"Nueva solicitud de chat",quieres_chatear:"quiere chatear contigo",max_3_fotos:"Máximo 3 fotos por envío"},en:{cargando:"Loading...",selecciona:"Select a user or conversation",para_chatear:"to start chatting privately",conecta_amigos:"Connect with friends",conecta_inteligente:"the smart way",auth_intro:"Real-time chat, meet new people and create meaningful connections on a secure platform.",feat1:"Real-time messaging",feat2:"Meet people from all over the world",feat3:"Security and privacy guaranteed",stat_users:"Users",stat_msgs:"Messages",stat_uptime:"Uptime",mobile_tagline:"Connect with friends from everywhere",bienvenido:"Welcome back",crea_cuenta:"Create your account",login_sub:"Sign in to continue",reg_sub:"Sign up for free and start chatting",google_in:"Continue with Google",or_email:"or with your email",nombre:"Name",tu_nombre:"Your name",email:"Email",contrasena:"Password",iniciar_login:"Sign in",crear:"Create account",no_cuenta:"Do not have an account?",reg_gratis:"Sign up free",ya_cuenta:"Already have an account?",inicia_sesion:"Sign in",badge_seguro:"Secure",badge_tiempo:"Real time",badge_global:"Global",err_completa:"Complete all fields",err_email_pass:"Incorrect email or password",err_email_used:"This email is already registered",err_invalid_email:"Enter a valid email",err_weak:"Password must be at least 6 characters",err_too_many:"Too many attempts. Try again later",busqueda_ph:"Search chats or people...",personas_reg:"Registered people",no_personas:"No registered people",solicitudes:"Requests",quiere_chatear:"Wants to chat with you",amigos:"Friends",en_linea:"Online",conversaciones:"Conversations",sin_conv:"No conversations yet",sin_conv_sub:"Search people and send a request to chat",mi_perfil:"My profile",configuracion:"Settings",cerrar_sesion:"Sign out",chat:"Chat",pendiente:"Pending",aceptar:"Accept",solicitar:"Request",favoritos:"Favorites",sin_favoritos:"No favorite chats",sin_mensajes:"No messages yet",ahora:"now",grabar:"Recording · tap to finish",nota_larga:"The voice note is too long to send",enviar_ph:"Write a message...",no_mensajes:"No messages yet",envia_primero:"Send the first one!",hoy:"Today",ag_favoritos:"Add to favorites",quitar_fav:"Remove from favorites",fotos_compartidas:"Shared photos",sin_fotos:"No shared photos yet",idioma:"Language",tema:"Theme",naranja:"Orange",azul:"Blue",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Your chat alias",cumpleanos:"Birthday",guardar:"Save",guardado:"Saved",cambiar_foto:"Change photo",foto_nombre:"Profile photo",mensaje_nuevo:"New message",nueva_solicitud:"New chat request",quieres_chatear:"wants to chat with you",max_3_fotos:"Maximum 3 photos per send"}};function OS(t){ha.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyLang",t)}function Uy(t=da.value){const e=document.documentElement;t==="azul"?e.setAttribute("data-theme","azul"):e.removeAttribute("data-theme");const n=document.getElementById("app-favicon");if(n&&typeof import.meta<"u"&&DS){const r="/friendzy/";n.href=r+(t==="azul"?"favicon-azul.svg":"favicon.svg")}}function VS(t){da.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyTheme",t),Uy(t)}function D(t){return(Xc[ha.value]||Xc.es)[t]??Xc.es[t]??t}const nn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$y=t=>(xr("data-v-3dbce67b"),t=t(),Lr(),t),MS=["width","height"],xS=$y(()=>d("path",{d:"M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z",fill:"white","fill-opacity":"0.95"},null,-1)),LS=$y(()=>d("path",{d:"M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z",style:{fill:"var(--primary)"}},null,-1)),FS=[xS,LS],US={__name:"Logo",props:{className:{type:String,default:""},size:{type:String,default:"md"},showText:{type:Boolean,default:!1},variant:{type:String,default:"default"},center:{type:Boolean,default:!1}},setup(t){const e=t,r={sm:{badge:"logo-sm",text:"16px",icon:16},md:{badge:"logo-md",text:"20px",icon:20},lg:{badge:"logo-lg",text:"24px",icon:24},xl:{badge:"logo-xl",text:"30px",icon:28}}[e.size],s=e.variant==="white";return(i,o)=>(U(),q("div",{class:ye(["logo",[{center:t.center},t.className]])},[d("div",{class:ye(["logo-badge",[s?"logo-badge-white":"gradient-orange",O(r).badge]])},[(U(),q("svg",{width:O(r).icon,height:O(r).icon,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},FS,8,MS))],2),t.showText?(U(),q("span",{key:0,class:ye(["logo-text",[s?"text-white":"text-dark",O(r).text]])}," Friendzy ",2)):Ie("",!0)],2))}},Yl=nn(US,[["__scopeId","data-v-3dbce67b"]]),$S={},BS={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},jS=d("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"},null,-1),qS=d("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"},null,-1),HS=d("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"},null,-1),zS=d("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"},null,-1),WS=[jS,qS,HS,zS];function KS(t,e){return U(),q("svg",BS,WS)}const GS=nn($S,[["render",KS]]),Cn=t=>(xr("data-v-27721a8b"),t=t(),Lr(),t),QS={class:"auth"},YS={class:"auth-left"},JS=Cn(()=>d("div",{class:"auth-grid-white"},null,-1)),XS={class:"auth-left-inner"},ZS={class:"auth-left-mid"},eC=Cn(()=>d("br",null,null,-1)),tC=Cn(()=>d("span",{class:"auth-checkmark"},[d("i",{class:"mdi mdi-check"})],-1)),nC={class:"auth-stats"},rC={class:"auth-right"},sC=Cn(()=>d("div",{class:"auth-right-grid"},null,-1)),iC={class:"auth-form-wrap"},oC={class:"auth-mobile-logo"},aC={class:"auth-card"},cC={class:"auth-card-head"},lC={class:"divider"},uC={class:"fields"},hC={key:0,class:"field"},dC=["placeholder"],fC={class:"field"},mC={class:"field"},pC={key:0,class:"auth-error"},gC=Cn(()=>d("i",{class:"mdi mdi-alert-circle-outline"},null,-1)),_C=["disabled"],yC=Cn(()=>d("i",{class:"mdi mdi-arrow-right"},null,-1)),vC={class:"switch-link"},wC={class:"auth-badges"},EC={class:"auth-badge"},IC=Cn(()=>d("i",{class:"mdi mdi-shield-lock-outline"},null,-1)),TC={class:"auth-badge"},AC=Cn(()=>d("i",{class:"mdi mdi-message-text-clock-outline"},null,-1)),bC={class:"auth-badge"},RC=Cn(()=>d("i",{class:"mdi mdi-web"},null,-1)),SC={__name:"AuthScreen",setup(t){const e=G("login"),n=G(""),r=G(""),s=G(""),i=G(!1),o=G(""),a=["feat1","feat2","feat3"],c=[{value:"10K+",label:"stat_users"},{value:"50K+",label:"stat_msgs"},{value:"99%",label:"stat_uptime"}],l=m=>{e.value=m,o.value=""},u=async()=>{try{const m=new un;await DT(at,m)}catch(m){console.log(m)}},h=m=>{switch(m){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return D("err_email_pass");case"auth/email-already-in-use":return D("err_email_used");case"auth/invalid-email":return D("err_invalid_email");case"auth/weak-password":return D("err_weak");case"auth/too-many-requests":return D("err_too_many");default:return`Error: ${m}`}},f=async()=>{if(o.value="",!n.value.trim()||!r.value){o.value=D("err_completa");return}if(r.value.length<6){o.value=D("err_weak");return}i.value=!0;try{if(e.value==="login")await iT(at,n.value.trim(),r.value);else{const{user:m}=await sT(at,n.value.trim(),r.value);s.value.trim()&&await Cu(m,{displayName:s.value.trim().split(/\s+/)[0]})}}catch(m){console.log(m),o.value=h(m.code)}finally{i.value=!1}};return(m,v)=>(U(),q("main",QS,[d("section",YS,[JS,d("div",XS,[le(Yl,{size:"lg",showText:"",variant:"white"}),d("div",ZS,[d("h1",null,[Gt(N(O(D)("conecta_amigos"))+" ",1),eC,d("span",null,N(O(D)("conecta_inteligente")),1)]),d("p",null,N(O(D)("auth_intro")),1),d("ul",null,[(U(),q(ke,null,ln(a,(g,E)=>d("li",{key:g,class:"auth-feature",style:Cs({animationDelay:.3+E*.1+"s"})},[tC,d("span",null,N(O(D)(g)),1)],4)),64))])]),d("div",nC,[(U(),q(ke,null,ln(c,g=>d("div",{key:g.label},[d("strong",null,N(g.value),1),d("span",null,N(O(D)(g.label)),1)])),64))])])]),d("section",rC,[sC,d("div",iC,[d("div",oC,[le(Yl,{size:"xl",showText:"",center:""}),d("p",null,N(O(D)("mobile_tagline")),1)]),d("div",aC,[d("div",cC,[d("h2",null,N(e.value==="login"?O(D)("bienvenido"):O(D)("crea_cuenta")),1),d("p",null,N(e.value==="login"?O(D)("login_sub"):O(D)("reg_sub")),1)]),d("button",{class:"google-btn",type:"button",onClick:u},[le(GS),d("span",null,N(O(D)("google_in")),1)]),d("div",lC,[d("span",null,N(O(D)("or_email")),1)]),d("div",uC,[e.value==="register"?(U(),q("div",hC,[d("label",null,N(O(D)("nombre")),1),Ir(d("input",{"onUpdate:modelValue":v[0]||(v[0]=g=>s.value=g),type:"text",placeholder:O(D)("tu_nombre")},null,8,dC),[[Tr,s.value]])])):Ie("",!0),d("div",fC,[d("label",null,N(O(D)("email")),1),Ir(d("input",{"onUpdate:modelValue":v[1]||(v[1]=g=>n.value=g),type:"email",placeholder:"tu@email.com"},null,512),[[Tr,n.value]])]),d("div",mC,[d("label",null,N(O(D)("contrasena")),1),Ir(d("input",{"onUpdate:modelValue":v[2]||(v[2]=g=>r.value=g),type:"password",placeholder:"••••••••",onKeyup:wp(f,["enter"])},null,544),[[Tr,r.value]])])]),o.value?(U(),q("div",pC,[gC,d("span",null,N(o.value),1)])):Ie("",!0),d("button",{class:"submit-btn btn-primary",type:"button",disabled:i.value,onClick:f},[d("span",null,N(i.value?O(D)("cargando"):e.value==="login"?O(D)("iniciar_login"):O(D)("crear")),1),yC],8,_C),d("p",vC,[e.value==="login"?(U(),q(ke,{key:0},[Gt(N(O(D)("no_cuenta"))+" ",1),d("a",{href:"#",onClick:v[3]||(v[3]=yn(g=>l("register"),["prevent"]))},N(O(D)("reg_gratis")),1)],64)):(U(),q(ke,{key:1},[Gt(N(O(D)("ya_cuenta"))+" ",1),d("a",{href:"#",onClick:v[4]||(v[4]=yn(g=>l("login"),["prevent"]))},N(O(D)("inicia_sesion")),1)],64))])]),d("div",wC,[d("div",EC,[IC,d("span",null,N(O(D)("badge_seguro")),1)]),d("div",TC,[AC,d("span",null,N(O(D)("badge_tiempo")),1)]),d("div",bC,[RC,d("span",null,N(O(D)("badge_global")),1)])])])])]))}},CC=nn(SC,[["__scopeId","data-v-27721a8b"]]),PC=(t,e)=>[t,e].sort().join("_"),hs=(t,e)=>t.split("_").find(n=>n!==e);let hn=null,Uf=!1;function By(){const t=window.AudioContext||window.webkitAudioContext;!t||typeof window>"u"||(hn||(hn=new t),hn.state==="suspended"&&hn.resume().catch(()=>{}))}const kC=()=>{Uf||(Uf=!0,By())};typeof window<"u"&&["pointerdown","keydown","touchstart"].forEach(t=>window.addEventListener(t,kC,{once:!0}));function $f(){if(By(),!hn)return;const t=hn.currentTime;[660,880].forEach((e,n)=>{const r=hn.createOscillator(),s=hn.createGain(),i=t+n*.12;r.type="sine",r.frequency.value=e,s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.18,i+.02),s.gain.exponentialRampToValueAtTime(1e-4,i+.35),r.connect(s),s.connect(hn.destination),r.start(i),r.stop(i+.4)})}function DC(){typeof Notification<"u"&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}function Bf(t,e){if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(t,{body:e,icon:"/friendzy/favicon.svg"})}catch{}}const NC={key:0,class:"pa-img"},OC=["src","alt"],VC={__name:"PremiumAvatar",props:{src:{type:String,default:""},name:{type:String,required:!0},size:{type:String,default:"md"},online:{type:Boolean,default:void 0},showRing:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,r={sm:{avatar:"pa-size-sm",text:"pa-text-xs",status:"pa-status-sm"},md:{avatar:"pa-size-md",text:"pa-text-sm",status:"pa-status-md"},lg:{avatar:"pa-size-lg",text:"pa-text-base",status:"pa-status-lg"},xl:{avatar:"pa-size-xl",text:"pa-text-xl",status:"pa-status-xl"}}[e.size],s=["linear-gradient(135deg, #f97316, #f59e0b)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #ea580c, #ef4444)","linear-gradient(135deg, #f43f5e, #f97316)","#111827","linear-gradient(135deg, #fb923c, #eab308)"],o=s[Math.abs((c=>(c||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0))(e.name))%s.length],a=(e.name||"?").split(" ").map(c=>c[0]).slice(0,2).join("").toUpperCase();return(c,l)=>(U(),q("div",{class:ye(["pa-outer",t.className])},[d("div",{class:ye(["pa-ring",t.showRing?"avatar-ring":""])},[d("div",{class:ye(["pa-avatar",[O(r).avatar,"pa-"+t.size]])},[t.src?(U(),q("div",NC,[d("img",{src:t.src,alt:t.name},null,8,OC)])):(U(),q("div",{key:1,class:"pa-initials",style:Cs({background:O(o)})},[d("span",{class:ye(O(r).text)},N(O(a)),3)],4))],2)],2),t.online!==void 0?(U(),q("span",{key:0,class:ye(["pa-status",[O(r).status,t.online?"pa-online":"pa-offline"]])},null,2)):Ie("",!0)],2))}},cn=nn(VC,[["__scopeId","data-v-4322e703"]]),et=t=>(xr("data-v-bfc289da"),t=t(),Lr(),t),MC={class:"sidebar"},xC={class:"sb-header"},LC=et(()=>d("i",{class:"mdi mdi-close"},null,-1)),FC=[LC],UC={class:"sb-profile-wrap"},$C={class:"sb-profile-info"},BC={class:"sb-profile-name"},jC={class:"sb-profile-email"},qC=et(()=>d("i",{class:"mdi mdi-chevron-down sb-profile-caret"},null,-1)),HC={key:0,class:"sb-menu"},zC=et(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),WC=et(()=>d("i",{class:"mdi mdi-cog-outline"},null,-1)),KC=et(()=>d("div",{class:"sb-menu-sep"},null,-1)),GC=et(()=>d("i",{class:"mdi mdi-logout"},null,-1)),QC={class:"sb-search-row"},YC={class:"sb-search"},JC=et(()=>d("i",{class:"mdi mdi-magnify sb-search-icon"},null,-1)),XC=["placeholder"],ZC={key:0,class:"sb-newchat"},eP={class:"sb-label"},tP=et(()=>d("i",{class:"mdi mdi-account-multiple-outline"},null,-1)),nP=["onClick"],rP={class:"sb-user-body"},sP={class:"sb-user-name"},iP={class:"sb-user-email"},oP=["onClick"],aP=["onClick"],cP=et(()=>d("i",{class:"mdi mdi-message-outline"},null,-1)),lP={key:0,class:"sb-empty-note"},uP={class:"sb-section"},hP={class:"sb-label"},dP=et(()=>d("i",{class:"mdi mdi-bell-outline"},null,-1)),fP={class:"sb-count sb-count-alert"},mP={class:"sb-list sb-friends"},pP={class:"conv-body"},gP={class:"conv-top"},_P={class:"conv-name"},yP={class:"conv-bottom"},vP={class:"conv-preview"},wP=["onClick"],EP=et(()=>d("i",{class:"mdi mdi-check"},null,-1)),IP=[EP],TP=["onClick"],AP=et(()=>d("i",{class:"mdi mdi-close"},null,-1)),bP=[AP],RP={class:"sb-section"},SP={class:"sb-label"},CP=et(()=>d("i",{class:"mdi mdi-heart"},null,-1)),PP={class:"sb-count"},kP={class:"sb-list sb-friends"},DP=["onClick"],NP={class:"conv-body"},OP={class:"conv-top"},VP={class:"conv-name"},MP={class:"conv-bottom"},xP={class:"conv-preview"},LP=["onClick"],FP=et(()=>d("i",{class:"mdi mdi-minus"},null,-1)),UP=[FP],$P={class:"sb-section"},BP={class:"sb-label"},jP=et(()=>d("i",{class:"mdi mdi-star"},null,-1)),qP={class:"sb-count"},HP={class:"sb-list"},zP=["onClick"],WP={class:"conv-body"},KP={class:"conv-top"},GP={class:"conv-name"},QP=et(()=>d("i",{class:"mdi mdi-star conv-star"},null,-1)),YP={class:"conv-bottom"},JP={class:"conv-preview"},XP={class:"sb-section"},ZP={class:"sb-label"},ek=et(()=>d("i",{class:"mdi mdi-message-text-outline"},null,-1)),tk={class:"sb-count"},nk={class:"sb-list"},rk=["onClick"],sk={class:"conv-body"},ik={class:"conv-top"},ok={class:"conv-name"},ak={class:"conv-right"},ck={key:0,class:"mdi mdi-star conv-star"},lk={key:1,class:"conv-badge"},uk={key:2,class:"conv-time"},hk={class:"conv-bottom"},dk={class:"conv-preview"},fk={key:0,class:"sb-empty"},mk={class:"sb-empty-sub"},pk={__name:"Conversations",props:{activeId:{type:String,default:""},isMobile:{type:Boolean,default:!1},profile:{type:Object,default:()=>({})},favorites:{type:Array,default:()=>[]}},emits:["open","close","openProfile","openSettings"],setup(t,{emit:e}){const n=e,r=t,s=at.currentUser,i=G([]),o=G([]),a=G([]),c=G([]),l=G([]),u=G([]),h=G([]),f=G([]),m=G(""),v=G(!1),g=G(!1),E=ge(()=>r.profile.displayName||(s==null?void 0:s.displayName)||(s==null?void 0:s.email)||"Usuario"),S=(s==null?void 0:s.email)||"",F=ge(()=>r.profile.photoURL||(s==null?void 0:s.photoURL)||"");let $=null,K=null,ce=null,V=null,z=null,Y=null,oe=null,ue=null,Oe=!1,$e=!1;const je={};tp(()=>{$=an(dr(zt(ve,"users")),y=>{i.value=y.docs.map(T=>T.data()).filter(T=>T.uid!==s.uid)},y=>console.error("denied:users",y.code)),K=an(dr(zt(ve,"conversations"),on("participants","array-contains",s.uid)),y=>{var x,J;const T=[],w={};if(y.forEach(Z=>{const ae=Z.data();w[Z.id]=ae,T.push({id:Z.id,...ae})}),T.sort((Z,ae)=>{var Ee,tt,gt,ar;return(((tt=(Ee=ae.lastAt)==null?void 0:Ee.toMillis)==null?void 0:tt.call(Ee))??0)-(((ar=(gt=Z.lastAt)==null?void 0:gt.toMillis)==null?void 0:ar.call(gt))??0)}),o.value=T,!Oe){Oe=!0,y.forEach(Z=>{var ae,Ee;je[Z.id]=((Ee=(ae=Z.data())==null?void 0:ae.unread)==null?void 0:Ee[s.uid])||0});return}y.forEach(Z=>{var gt;const ae=Z.data(),Ee=((gt=ae.unread)==null?void 0:gt[s.uid])||0,tt=je[Z.id]||0;if(je[Z.id]=Ee,Ee>tt&&Z.id!==r.activeId){const ar=hs(Z.id,s.uid),sn=i.value.find(dt=>dt.uid===ar),oo=typeof ae.lastMessage=="string"?ae.lastMessage:"📷 Foto";Bf(`${D("mensaje_nuevo")} de ${(sn==null?void 0:sn.displayName)||""}`,oo),$f()}}),r.activeId&&(((J=(x=w[r.activeId])==null?void 0:x.unread)==null?void 0:J[s.uid])||0)>0&&Ot(r.activeId)},y=>console.error("denied:convs",y.code)),ce=an(Le(ve,"users",s.uid),y=>{var T;a.value=((T=y.data())==null?void 0:T.friends)||[]},y=>console.error("denied:me",y.code)),V=an(dr(zt(ve,"requests"),on("to","==",s.uid),on("status","==","pending")),y=>{if(c.value=y.docs.map(T=>({id:T.id,...T.data()})),!$e){$e=!0;return}y.docChanges().forEach(T=>{if(T.type==="added"){const w=T.doc.data(),x=i.value.find(J=>J.uid===w.from);Bf(D("nueva_solicitud"),`${(x==null?void 0:x.displayName)||"Alguien"} ${D("quieres_chatear")}`),$f()}})},y=>console.error("denied:incoming",y.code)),z=an(dr(zt(ve,"requests"),on("from","==",s.uid),on("status","==","pending")),y=>{l.value=y.docs.map(T=>({id:T.id,...T.data()}))},y=>console.error("denied:sent",y.code)),Y=an(dr(zt(ve,"requests"),on("from","==",s.uid),on("status","==","accepted")),y=>{h.value=y.docs.map(T=>({id:T.id,...T.data()})),we()},y=>console.error("denied:accOut",y.code)),oe=an(dr(zt(ve,"requests"),on("to","==",s.uid),on("status","==","accepted")),y=>{u.value=y.docs.map(T=>({id:T.id,...T.data()})),we()},y=>console.error("denied:accIn",y.code)),ue=y=>{y.target.closest(".sb-profile-wrap")||(v.value=!1),y.target.closest(".sb-search-row")||(g.value=!1)},document.addEventListener("click",ue),setTimeout(()=>DC(),1500)}),ks(()=>{$==null||$(),K==null||K(),ce==null||ce(),V==null||V(),z==null||z(),Y==null||Y(),oe==null||oe(),ue&&document.removeEventListener("click",ue)});const St=()=>{v.value=!1,n("openProfile")},rn=()=>{v.value=!1,n("openSettings")},qe=y=>r.favorites.includes(y),Ae=ge(()=>o.value.filter(y=>qe(y.id))),we=()=>{f.value=[...u.value,...h.value]},Ot=y=>{Uo(Le(ve,"conversations",y),{[`unread.${s.uid}`]:0}).catch(()=>{})},Pn=y=>i.value.find(T=>T.uid===y),It=ge(()=>c.value),Tt=ge(()=>{const y=new Set(a.value);return f.value.forEach(T=>{y.add(T.from===s.uid?T.to:T.from)}),y}),zr=ge(()=>i.value.filter(y=>Tt.value.has(y.uid))),vc=ge(()=>new Set(l.value.map(y=>y.to))),kn=y=>Tt.value.has(y.uid)?"friend":vc.value.has(y.uid)?"pending":It.value.some(T=>T.from===y.uid)?"incoming":"none",Vt=y=>D(y==="pending"?"pendiente":y==="incoming"?"aceptar":"solicitar"),Wr=y=>y==="pending"?"mdi-clock-outline":y==="incoming"?"mdi-check":"mdi-account-plus-outline",Us=y=>{kn(y)==="friend"&&L(y)},so=y=>{const T=kn(y);if(T==="incoming"){const w=It.value.find(x=>x.from===y.uid);w&&$s(w)}else T==="none"&&or(y)},or=async y=>{const T=`${s.uid}_${y.uid}`;await Ct(Le(ve,"requests",T),{from:s.uid,to:y.uid,status:"pending",createdAt:$o()})},$s=async y=>{const T=Le(ve,"requests",y.id),w=Le(ve,"users",s.uid);await Ct(T,{status:"accepted"},{merge:!0}),await Ct(w,{friends:br(y.from)},{merge:!0});const x=i.value.find(J=>J.uid===y.from);await L({uid:y.from,displayName:(x==null?void 0:x.displayName)||y.from,photoURL:(x==null?void 0:x.photoURL)||""})},io=async y=>{await Gc(Le(ve,"requests",y.id))},p=async y=>{const T=Le(ve,"users",s.uid);await Ct(T,{friends:Ly(y.uid)},{merge:!0});const w=Le(ve,"requests",`${y.uid}_${s.uid}`),x=await Ql(w);x.exists()&&x.data().from===y.uid&&x.data().to===s.uid&&await Gc(w);const J=Le(ve,"requests",`${s.uid}_${y.uid}`);(await Ql(J)).exists()&&await Ct(J,{status:"declined"},{merge:!0})},_=y=>{const T=hs(y.id,s.uid),w=i.value.find(x=>x.uid===T);return w?w.displayName:T},I=y=>y.lastMessage?y.lastMessage:D("sin_mensajes"),b=ge(()=>m.value.trim().toLowerCase()),R=ge(()=>b.value?o.value.filter(y=>_(y).toLowerCase().includes(b.value)):o.value),M=ge(()=>{let y=i.value;return b.value&&(y=y.filter(T=>(T.displayName||"").toLowerCase().includes(b.value)||(T.email||"").toLowerCase().includes(b.value))),y}),j=y=>{var x;const T=((x=y==null?void 0:y.toMillis)==null?void 0:x.call(y))??0;if(!T)return"";const w=Math.floor((Date.now()-T)/1e3);return w<60?D("ahora"):w<3600?`${Math.floor(w/60)}m`:w<86400?`${Math.floor(w/3600)}h`:w<604800?`${Math.floor(w/86400)}d`:new Date(T).toLocaleDateString("es-ES",{day:"numeric",month:"short"})},k=y=>{Ot(y.id);const T=i.value.find(w=>w.uid===hs(y.id,s.uid));n("open",{id:y.id,other:{name:_(y),photo:(T==null?void 0:T.photoURL)||""}})},L=async y=>{const T=PC(s.uid,y.uid);g.value=!1;const w=Le(ve,"conversations",T);try{await Ct(w,{participants:br(s.uid,y.uid)},{merge:!0})}catch(x){console.error("startWith:conv",x.code,x.message);try{await Gc(w),await Ct(w,{participants:br(s.uid,y.uid)},{merge:!0})}catch(J){console.error("startWith:repair",J.code,J.message)}}Ot(T),n("open",{id:T,other:{name:y.displayName,photo:y.photoURL||""}})},P=async()=>{try{await uT(at)}catch(y){console.log(y)}};return(y,T)=>(U(),q("div",MC,[d("div",xC,[le(Yl,{size:"md",showText:""}),t.isMobile?(U(),q("button",{key:0,class:"icon-btn",onClick:T[0]||(T[0]=w=>y.$emit("close"))},FC)):Ie("",!0)]),d("div",UC,[d("button",{class:"sb-profile",onClick:T[1]||(T[1]=w=>v.value=!v.value)},[le(cn,{src:F.value,name:E.value,size:"md",online:""},null,8,["src","name"]),d("div",$C,[d("span",BC,N(E.value),1),d("span",jC,N(O(S)),1)]),qC]),v.value?(U(),q("div",HC,[d("button",{class:"sb-menu-item",onClick:St},[zC,d("span",null,N(O(D)("mi_perfil")),1)]),d("button",{class:"sb-menu-item",onClick:rn},[WC,d("span",null,N(O(D)("configuracion")),1)]),KC,d("button",{class:"sb-menu-item sb-menu-danger",onClick:P},[GC,d("span",null,N(O(D)("cerrar_sesion")),1)])])):Ie("",!0)]),d("div",QC,[d("div",YC,[JC,Ir(d("input",{"onUpdate:modelValue":T[2]||(T[2]=w=>m.value=w),type:"text",placeholder:O(D)("busqueda_ph"),class:"sb-search-input"},null,8,XC),[[Tr,m.value]])]),d("button",{class:"icon-btn btn-primary sb-plus",onClick:T[3]||(T[3]=w=>g.value=!g.value)},[d("i",{class:ye(["mdi",g.value?"mdi-close":"mdi-plus"])},null,2)]),g.value?(U(),q("div",ZC,[d("div",eP,[tP,d("span",null,N(O(D)("personas_reg")),1)]),(U(!0),q(ke,null,ln(M.value,w=>(U(),q("button",{key:w.uid,class:"sb-user-item",onClick:x=>Us(w)},[le(cn,{src:w.photoURL||"",name:w.displayName,size:"md",online:!0},null,8,["src","name"]),d("div",rP,[d("span",sP,N(w.displayName),1),d("span",iP,N(w.email),1)]),kn(w)!=="friend"?(U(),q("span",{key:0,class:ye(["btn-status","btn-"+kn(w)]),onClick:yn(x=>so(w),["stop"])},[d("i",{class:ye(["mdi",Wr(kn(w))])},null,2),d("span",null,N(Vt(kn(w))),1)],10,oP)):(U(),q("span",{key:1,class:"btn-status btn-friend",onClick:yn(x=>L(w),["stop"])},[cP,d("span",null,N(O(D)("chat")),1)],8,aP))],8,nP))),128)),M.value.length===0?(U(),q("p",lP,N(O(D)("no_personas")),1)):Ie("",!0)])):Ie("",!0)]),It.value.length?(U(),q(ke,{key:0},[d("div",uP,[d("div",hP,[dP,d("span",null,N(O(D)("solicitudes")),1)]),d("span",fP,N(It.value.length),1)]),d("div",mP,[(U(!0),q(ke,null,ln(It.value,w=>{var x,J,Z;return U(),q("div",{key:w.id,class:"conv-item friend-item"},[le(cn,{src:((x=Pn(w.from))==null?void 0:x.photoURL)||"",name:((J=Pn(w.from))==null?void 0:J.displayName)||w.from,size:"lg",online:""},null,8,["src","name"]),d("div",pP,[d("div",gP,[d("span",_P,N(((Z=Pn(w.from))==null?void 0:Z.displayName)||w.from),1)]),d("div",yP,[d("span",vP,N(O(D)("quiere_chatear")),1)])]),d("button",{class:"req-btn req-ok",title:"Aceptar",onClick:ae=>$s(w)},IP,8,wP),d("button",{class:"req-btn req-no",title:"Rechazar",onClick:ae=>io(w)},bP,8,TP)])}),128))])],64)):Ie("",!0),zr.value.length?(U(),q(ke,{key:1},[d("div",RP,[d("div",SP,[CP,d("span",null,N(O(D)("amigos")),1)]),d("span",PP,N(zr.value.length),1)]),d("div",kP,[(U(!0),q(ke,null,ln(zr.value,w=>(U(),q("div",{key:w.uid,class:"conv-item friend-item",onClick:x=>L(w)},[le(cn,{src:w.photoURL||"",name:w.displayName,size:"lg",online:""},null,8,["src","name"]),d("div",NP,[d("div",OP,[d("span",VP,N(w.displayName),1)]),d("div",MP,[d("span",xP,N(O(D)("en_linea")),1)])]),d("button",{class:"friend-remove",onClick:yn(x=>p(w),["stop"])},UP,8,LP)],8,DP))),128))])],64)):Ie("",!0),Ae.value.length?(U(),q(ke,{key:2},[d("div",$P,[d("div",BP,[jP,d("span",null,N(O(D)("favoritos")),1)]),d("span",qP,N(Ae.value.length),1)]),d("div",HP,[(U(!0),q(ke,null,ln(Ae.value,w=>(U(),q("button",{key:w.id,class:ye(["conv-item",{active:w.id===t.activeId}]),onClick:x=>k(w)},[le(cn,{name:_(w),size:"lg",online:""},null,8,["name"]),d("div",WP,[d("div",KP,[d("span",GP,N(_(w)),1),QP]),d("div",YP,[d("span",JP,N(I(w)),1)])])],10,zP))),128))])],64)):Ie("",!0),d("div",XP,[d("div",ZP,[ek,d("span",null,N(O(D)("conversaciones")),1)]),d("span",tk,N(R.value.length),1)]),d("div",nk,[(U(!0),q(ke,null,ln(R.value,w=>{var x;return U(),q("button",{key:w.id,class:ye(["conv-item",{active:w.id===t.activeId}]),onClick:J=>k(w)},[le(cn,{name:_(w),size:"lg",online:""},null,8,["name"]),d("div",sk,[d("div",ik,[d("span",ok,N(_(w)),1),d("span",ak,[qe(w.id)?(U(),q("i",ck)):Ie("",!0),(((x=w.unread)==null?void 0:x[O(s).uid])||0)>0?(U(),q("span",lk,N(w.unread[O(s).uid]),1)):(U(),q("span",uk,N(j(w.lastAt)),1))])]),d("div",hk,[d("span",dk,N(I(w)),1)])])],10,rk)}),128)),R.value.length===0?(U(),q("div",fk,[d("p",null,N(O(D)("sin_conv")),1),d("p",mk,N(O(D)("sin_conv_sub")),1)])):Ie("",!0)])]))}},jf=nn(pk,[["__scopeId","data-v-bfc289da"]]),gk={class:"mb-max"},_k={key:0,class:"mb-audio"},yk={class:"mb-audio-head"},vk={class:"mb-audio-track"},wk={class:"mb-audio-time"},Ek=["src"],Ik={key:1,class:"mb-text"},Tk={key:2,class:"mb-image"},Ak=["src"],bk={key:0,class:"mdi mdi-check-all mb-check"},Rk={__name:"MessageBubble",props:{message:{type:Object,required:!0},isOwn:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},senderName:{type:String,default:""}},setup(t){const e=t,n=G(null),r=G(!1),s=G(0),i=ge(()=>{var h;const u=((h=e.message.time)==null?void 0:h.seconds)??0;return u?new Date(u*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),o=ge(()=>{const u=e.message.duration||0;return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}),a=()=>{const u=n.value;u&&(r.value?u.pause():u.play().catch(()=>{}),r.value=!r.value)},c=()=>{const u=n.value;!u||!u.duration||(s.value=u.currentTime/u.duration*100)},l=()=>{r.value=!1,s.value=0};return(u,h)=>(U(),q("div",{class:ye(["mb-row",t.isOwn?"mb-own":"mb-other"])},[d("div",{class:ye(["mb-avatar",t.showAvatar?"":"mb-avatar-hidden"])},[le(cn,{src:t.avatar||"",name:t.senderName,size:"sm"},null,8,["src","name"])],2),d("div",gk,[d("div",{class:ye(["mb-bubble",t.isOwn?"mb-bubble-own":"mb-bubble-other"])},[t.message.audio?(U(),q("div",_k,[d("div",yk,[d("button",{class:"mb-audio-play",onClick:a},[d("i",{class:ye(["mdi",r.value?"mdi-pause":"mdi-play"])},null,2)]),d("div",vk,[d("div",{class:"mb-audio-fill",style:Cs({width:s.value+"%"})},null,4)]),d("span",wk,N(o.value),1)]),d("audio",{ref_key:"audioRef",ref:n,src:t.message.audio,preload:"metadata",onTimeupdate:c,onEnded:l},null,40,Ek)])):t.message.text?(U(),q("p",Ik,N(t.message.text),1)):t.message.image?(U(),q("div",Tk,[d("img",{src:t.message.image,alt:"Compartida"},null,8,Ak)])):Ie("",!0),d("div",{class:ye(["mb-meta",t.isOwn?"mb-meta-own":""])},[d("span",null,N(i.value),1),t.isOwn?(U(),q("i",bk)):Ie("",!0)],2)],2)])],2))}},Sk=nn(Rk,[["__scopeId","data-v-7c9f3cbe"]]),gc=t=>(xr("data-v-a2b18056"),t=t(),Lr(),t),Ck={class:"chat-input-wrap"},Pk={key:1,class:"ci-attach"},kk=gc(()=>d("i",{class:"mdi mdi-image-outline"},null,-1)),Dk=[kk],Nk={class:"ci-row"},Ok={class:"ci-input-box"},Vk=["placeholder","onKeydown"],Mk=gc(()=>d("button",{class:"ci-round-btn ci-smile"},[d("i",{class:"mdi mdi-emoticon-outline"})],-1)),xk=gc(()=>d("i",{class:"mdi mdi-send"},null,-1)),Lk=[xk],Fk={key:2,class:"ci-recording"},Uk=gc(()=>d("span",{class:"ci-rec-dot"},null,-1)),$k={class:"ci-rec-text"},Bk={class:"ci-rec-time"},jk={key:3,class:"ci-recording"},qk={class:"ci-rec-text"},Hk={key:4,class:"ci-recording"},zk={class:"ci-rec-text"},Wk=3e4,qf=3,Kk={__name:"FormAdd",props:{conversationId:{type:String,required:!0}},setup(t){const e=t,n=G(""),r=G(!1),s=G(!1),i=G(0),o=G(""),a=G(""),c=G(null),l=G(null),u=ge(()=>{const V=Math.floor(i.value/1e3);return`${Math.floor(V/60)}:${String(V%60).padStart(2,"0")}`}),h={media:null,recorder:null,chunks:[],timer:null,startedAt:0,type:"audio/webm"},f=()=>{const V=c.value;V&&(V.style.height="auto",V.style.height=`${Math.min(V.scrollHeight,128)}px`)},m=async()=>{const V=n.value.trim();if(!(!V||!e.conversationId))try{const z=at.currentUser,Y=hs(e.conversationId,z.uid),oe=Le(ve,"conversations",e.conversationId);await Ct(oe,{participants:br(z.uid,Y)},{merge:!0});const ue=Jc(ve),Oe=Le(zt(ve,"conversations",e.conversationId,"messages"));ue.set(Oe,{text:V,time:Ce.fromDate(new Date),uid:z.uid,displayName:z.displayName}),ue.update(oe,{lastMessage:V,lastAt:Ce.fromDate(new Date),[`unread.${Y}`]:Yc(1)}),await ue.commit(),n.value="",wa(()=>f())}catch(z){console.log(z)}},v=()=>{var V;r.value=!1,(V=l.value)==null||V.click()},g=async V=>{const z=[...V.target.files||[]];if(V.target.value="",!(!z.length||!e.conversationId)){z.length>qf&&(a.value=D("max_3_fotos"),setTimeout(()=>{a.value=""},4e3));for(const Y of z.slice(0,qf))await E(Y)}},E=async V=>{try{const z=await S(V);if(!z)return;const Y=at.currentUser,oe=hs(e.conversationId,Y.uid),ue=Le(ve,"conversations",e.conversationId);await Ct(ue,{participants:br(Y.uid,oe)},{merge:!0});const Oe=Jc(ve),$e=Le(zt(ve,"conversations",e.conversationId,"messages"));Oe.set($e,{image:z,text:"",time:Ce.fromDate(new Date),uid:Y.uid,displayName:Y.displayName}),Oe.update(ue,{lastMessage:"📷 Foto",lastAt:Ce.fromDate(new Date),[`unread.${oe}`]:Yc(1)}),await Oe.commit()}catch(z){console.log(z)}},S=V=>new Promise(z=>{const Y=new FileReader;Y.onload=()=>{const oe=new Image;oe.onload=()=>{const Oe=Math.min(1,1e3/Math.max(oe.naturalWidth,oe.naturalHeight)),$e=Math.max(1,Math.round(oe.naturalWidth*Oe)),je=Math.max(1,Math.round(oe.naturalHeight*Oe)),St=document.createElement("canvas");St.width=$e,St.height=je;const rn=St.getContext("2d");if(!rn)return z(Y.result);rn.fillStyle="#fff",rn.fillRect(0,0,$e,je),rn.drawImage(oe,0,0,$e,je),z(St.toDataURL("image/jpeg",.75))},oe.onerror=()=>z(null),oe.src=Y.result},Y.onerror=()=>z(null),Y.readAsDataURL(V)}),F=()=>{if(s.value){K();return}$()},$=async()=>{if(e.conversationId)try{const V=await navigator.mediaDevices.getUserMedia({audio:!0}),z=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"",Y=new MediaRecorder(V,{...z?{mimeType:z}:{},audioBitsPerSecond:24e3}),oe=[];Y.ondataavailable=ue=>{ue.data&&ue.data.size>0&&oe.push(ue.data)},Y.onstop=()=>{var $e;($e=h.media)==null||$e.getTracks().forEach(je=>je.stop());const ue=Math.max(1,Math.round((Date.now()-h.startedAt)/1e3)),Oe=new Blob(oe,{type:h.type});ce(Oe,ue)},h.media=V,h.recorder=Y,h.chunks=oe,h.startedAt=Date.now(),Y.start(),h.type=Y.mimeType||z||"audio/webm",s.value=!0,i.value=0,h.timer=setInterval(()=>{i.value=Date.now()-h.startedAt,i.value>=Wk&&K()},250)}catch(V){console.log(V),s.value=!1}},K=()=>{clearInterval(h.timer),h.timer=null,s.value=!1;try{h.recorder&&h.recorder.state!=="inactive"&&h.recorder.stop()}catch(V){console.log(V)}},ce=(V,z)=>{if(!e.conversationId)return;const Y=new FileReader;Y.onload=async()=>{try{const oe=Y.result;if(typeof oe!="string"||oe.length>9e5){o.value=D("nota_larga"),setTimeout(()=>{o.value=""},4e3);return}const ue=at.currentUser,Oe=hs(e.conversationId,ue.uid),$e=Le(ve,"conversations",e.conversationId);await Ct($e,{participants:br(ue.uid,Oe)},{merge:!0});const je=Jc(ve),St=Le(zt(ve,"conversations",e.conversationId,"messages"));je.set(St,{audio:oe,duration:z,text:"",time:Ce.fromDate(new Date),uid:ue.uid,displayName:ue.displayName}),je.update($e,{lastMessage:"🎤 Nota de voz",lastAt:Ce.fromDate(new Date),[`unread.${Oe}`]:Yc(1)}),await je.commit()}catch(oe){console.log(oe)}},Y.readAsDataURL(V)};return ks(()=>{var V;clearInterval(h.timer),(V=h.media)==null||V.getTracks().forEach(z=>z.stop())}),(V,z)=>(U(),q("div",Ck,[r.value?(U(),q("div",{key:0,class:"ci-backdrop",onClick:z[0]||(z[0]=Y=>r.value=!1)})):Ie("",!0),r.value?(U(),q("div",Pk,[d("button",{class:"ci-attach-btn",onClick:v},Dk)])):Ie("",!0),d("input",{ref_key:"fileInput",ref:l,type:"file",accept:"image/*",multiple:"",class:"hidden",onChange:g},null,544),d("div",Nk,[d("button",{class:ye(["ci-round-btn",{active:r.value}]),onClick:z[1]||(z[1]=Y=>r.value=!r.value)},[d("i",{class:ye(["mdi",r.value?"mdi-close":"mdi-paperclip"])},null,2)],2),d("div",Ok,[Ir(d("textarea",{ref_key:"taRef",ref:c,"onUpdate:modelValue":z[2]||(z[2]=Y=>n.value=Y),rows:"1",placeholder:O(D)("enviar_ph"),class:"ci-textarea",onInput:f,onKeydown:wp(yn(m,["exact","prevent"]),["enter"])},null,40,Vk),[[Tr,n.value]]),Mk]),n.value.trim()?(U(),q("button",{key:0,class:"ci-round-btn btn-primary ci-send",onClick:m},Lk)):(U(),q("button",{key:1,class:ye(["ci-round-btn ci-send btn-primary",{recording:s.value}]),onClick:F},[d("i",{class:ye(["mdi",s.value?"mdi-stop":"mdi-microphone"])},null,2)],2))]),s.value?(U(),q("div",Fk,[Uk,d("span",$k,N(O(D)("grabar")),1),d("span",Bk,N(u.value),1)])):Ie("",!0),o.value?(U(),q("div",jk,[d("span",qk,N(o.value),1)])):Ie("",!0),a.value?(U(),q("div",Hk,[d("span",zk,N(a.value),1)])):Ie("",!0)]))}},Gk=nn(Kk,[["__scopeId","data-v-a2b18056"]]),ir=t=>(xr("data-v-aa70e5e5"),t=t(),Lr(),t),Qk={class:"chat-main-wrap"},Yk=ir(()=>d("div",{class:"cm-grid"},null,-1)),Jk={class:"cm-header"},Xk=ir(()=>d("i",{class:"mdi mdi-menu"},null,-1)),Zk=[Xk],eD={class:"cm-header-info"},tD=ir(()=>d("span",{class:"cm-status-dot"},null,-1)),nD={class:"cm-header-actions"},rD={class:"cm-menu"},sD=ir(()=>d("i",{class:"mdi mdi-dots-horizontal"},null,-1)),iD=[sD],oD={key:0,class:"cm-pop"},aD=ir(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),cD=ir(()=>d("i",{class:"mdi mdi-image-multiple-outline"},null,-1)),lD={key:0,class:"cm-empty"},uD=ir(()=>d("i",{class:"mdi mdi-chat-processing-outline cm-empty-icon"},null,-1)),hD={class:"cm-empty-sub"},dD={class:"cm-date-pill"},fD={class:"cm-photos"},mD={class:"cm-photos-head"},pD=ir(()=>d("i",{class:"mdi mdi-close"},null,-1)),gD=[pD],_D={key:0,class:"cm-photos-grid"},yD=["src","onClick"],vD={key:1,class:"cm-photos-empty"},wD=["src"],ED={__name:"Messages",props:{conversationId:{type:String,required:!0},other:{type:Object,default:()=>({})},profile:{type:Object,default:()=>({})},isFavorite:{type:Boolean,default:!1}},emits:["openDrawer","openProfile","toggleFavorite"],setup(t,{emit:e}){const n=t,r=e,s=ge(()=>{var S,F,$,K;return{uid:((S=at.currentUser)==null?void 0:S.uid)||"",displayName:((F=n.profile)==null?void 0:F.displayName)||(($=at.currentUser)==null?void 0:$.displayName)||((K=at.currentUser)==null?void 0:K.email)||""}}),i=ge(()=>{var S,F;return((S=n.profile)==null?void 0:S.photoURL)||((F=at.currentUser)==null?void 0:F.photoURL)||""}),o=G([]),a=G(null),c=G(!1),l=G(!1),u=G(""),h=ge(()=>o.value.filter(S=>S.image)),f=()=>{c.value=!1,r("openProfile")},m=()=>{c.value=!1,r("toggleFavorite",n.conversationId)},v=()=>{c.value=!1,l.value=!0};let g=null;return Ft(()=>n.conversationId,S=>{if(g&&(g(),g=null),o.value=[],!S)return;const F=dr(zt(ve,"conversations",S,"messages"),TS("time"));g=an(F,$=>{o.value=$.docs.map(K=>({id:K.id,...K.data()})),wa(()=>{var ce;const K=(ce=a.value)==null?void 0:ce.lastElementChild;K&&K.scrollIntoView({behavior:"smooth",block:"end"})})})},{immediate:!0}),ks(()=>{g==null||g()}),(S,F)=>(U(),q("div",Qk,[Yk,d("header",Jk,[d("button",{class:"icon-btn cm-menu-btn",onClick:F[0]||(F[0]=$=>S.$emit("openDrawer"))},Zk),le(cn,{src:t.other.photo||"",name:t.other.name,size:"md"},null,8,["src","name"]),d("div",eD,[d("h2",null,N(t.other.name),1),d("p",null,[tD,Gt(" "+N(O(D)("en_linea")),1)])]),d("div",nD,[d("div",rD,[d("button",{class:ye(["icon-btn",{active:c.value}]),onClick:F[1]||(F[1]=$=>c.value=!c.value)},iD,2),c.value?(U(),q("div",oD,[d("button",{class:"cm-pop-item",onClick:f},[aD,d("span",null,N(O(D)("mi_perfil")),1)]),d("button",{class:"cm-pop-item",onClick:m},[d("i",{class:ye(["mdi",t.isFavorite?"mdi-star":"mdi-star-outline"])},null,2),d("span",null,N(t.isFavorite?O(D)("quitar_fav"):O(D)("ag_favoritos")),1)]),d("button",{class:"cm-pop-item",onClick:v},[cD,d("span",null,N(O(D)("fotos_compartidas")),1)])])):Ie("",!0)])])]),o.value.length===0?(U(),q("div",lD,[uD,d("p",null,N(O(D)("no_mensajes")),1),d("p",hD,N(O(D)("envia_primero")),1)])):(U(),q("div",{key:1,class:"cm-list",ref_key:"listRef",ref:a},[d("div",dD,N(O(D)("hoy")),1),(U(!0),q(ke,null,ln(o.value,($,K)=>{var ce;return U(),pr(Sk,{key:$.id,message:$,"is-own":$.uid===s.value.uid,"show-avatar":K===0||((ce=o.value[K-1])==null?void 0:ce.uid)!==$.uid,avatar:$.uid===s.value.uid?i.value:t.other.photo,"sender-name":$.uid===s.value.uid?s.value.displayName:t.other.name},null,8,["message","is-own","show-avatar","avatar","sender-name"])}),128))],512)),t.conversationId?(U(),pr(Gk,{key:2,"conversation-id":t.conversationId},null,8,["conversation-id"])):Ie("",!0),l.value?(U(),q("div",{key:3,class:"cm-modal",onClick:F[3]||(F[3]=yn($=>l.value=!1,["self"]))},[d("div",fD,[d("div",mD,[d("h4",null,N(O(D)("fotos_compartidas")),1),d("button",{class:"icon-btn",onClick:F[2]||(F[2]=$=>l.value=!1)},gD)]),h.value.length?(U(),q("div",_D,[(U(!0),q(ke,null,ln(h.value,$=>(U(),q("img",{key:$.id,src:$.image,alt:"Foto",onClick:K=>u.value=$.image},null,8,yD))),128))])):(U(),q("p",vD,N(O(D)("sin_fotos")),1))])])):Ie("",!0),u.value?(U(),q("div",{key:4,class:"cm-lightbox",onClick:F[4]||(F[4]=$=>u.value="")},[d("img",{src:u.value,alt:"Foto"},null,8,wD)])):Ie("",!0)]))}},ID=nn(ED,[["__scopeId","data-v-aa70e5e5"]]),Hr=t=>(xr("data-v-70fa2247"),t=t(),Lr(),t),TD={class:"modal-card"},AD={class:"modal-head"},bD=Hr(()=>d("i",{class:"mdi mdi-close"},null,-1)),RD=[bD],SD={class:"set-row"},CD={class:"set-label"},PD=Hr(()=>d("i",{class:"mdi mdi-translate"},null,-1)),kD={class:"set-opts"},DD=Hr(()=>d("span",{class:"set-flag"},"🇪🇸",-1)),ND=Hr(()=>d("span",{class:"set-flag"},"🇺🇸",-1)),OD={class:"set-row"},VD={class:"set-label"},MD=Hr(()=>d("i",{class:"mdi mdi-palette-outline"},null,-1)),xD={class:"set-opts"},LD=Hr(()=>d("span",{class:"swatch swatch-orange"},null,-1)),FD=Hr(()=>d("span",{class:"swatch swatch-blue"},null,-1)),UD={__name:"SettingsPanel",emits:["close"],setup(t,{emit:e}){const n=e,r=()=>setTimeout(()=>n("close"),350),s=o=>{OS(o),r()},i=o=>{VS(o),r()};return(o,a)=>(U(),q("div",{class:"modal-backdrop",onClick:a[5]||(a[5]=yn(c=>n("close"),["self"]))},[d("div",TD,[d("div",AD,[d("h3",null,N(O(D)("configuracion")),1),d("button",{class:"icon-btn",onClick:a[0]||(a[0]=c=>n("close"))},RD)]),d("div",SD,[d("div",CD,[PD,d("span",null,N(O(D)("idioma")),1)]),d("div",kD,[d("button",{class:ye(["set-opt",{active:O(ha)==="es"}]),onClick:a[1]||(a[1]=c=>s("es"))},[DD,Gt(" "+N(O(D)("espanol")),1)],2),d("button",{class:ye(["set-opt",{active:O(ha)==="en"}]),onClick:a[2]||(a[2]=c=>s("en"))},[ND,Gt(" "+N(O(D)("english")),1)],2)])]),d("div",OD,[d("div",VD,[MD,d("span",null,N(O(D)("tema")),1)]),d("div",xD,[d("button",{class:ye(["set-opt set-theme",{active:O(da)==="naranja"}]),onClick:a[3]||(a[3]=c=>i("naranja"))},[LD,Gt(" "+N(O(D)("naranja")),1)],2),d("button",{class:ye(["set-opt set-theme",{active:O(da)==="azul"}]),onClick:a[4]||(a[4]=c=>i("azul"))},[FD,Gt(" "+N(O(D)("azul")),1)],2)])])])]))}},$D=nn(UD,[["__scopeId","data-v-70fa2247"]]),Ph=t=>(xr("data-v-3bc49a19"),t=t(),Lr(),t),BD={class:"modal-card"},jD={class:"modal-head"},qD=Ph(()=>d("i",{class:"mdi mdi-close"},null,-1)),HD=[qD],zD={class:"prof-avatar-wrap"},WD=Ph(()=>d("i",{class:"mdi mdi-camera-outline"},null,-1)),KD={class:"field"},GD=["placeholder"],QD={class:"field"},YD=["disabled"],JD={key:0,class:"saved-note"},XD=Ph(()=>d("i",{class:"mdi mdi-check-circle"},null,-1)),ZD={__name:"ProfileModal",props:{profile:{type:Object,default:()=>({})}},emits:["close"],setup(t,{emit:e}){const n=t,r=e,s=G(""),i=G(""),o=G(""),a=G(""),c=G(null),l=G(!1),u=G(!1);Ft(()=>n.profile,g=>{!g||typeof g!="object"||(s.value=g.displayName||"",i.value=g.birthday||"",o.value=g.photoURL||"",a.value=g.photoURL||"")},{immediate:!0});const h=()=>{var g;(g=c.value)==null||g.click()},f=async g=>{var F;const E=(F=g.target.files)==null?void 0:F[0];if(g.target.value="",!E)return;const S=await m(E);S&&(o.value=S,a.value=S)},m=g=>new Promise(E=>{const S=new FileReader;S.onload=()=>{const F=new Image;F.onload=()=>{const K=Math.min(1,512/Math.max(F.naturalWidth,F.naturalHeight)),ce=Math.max(1,Math.round(F.naturalWidth*K)),V=Math.max(1,Math.round(F.naturalHeight*K)),z=document.createElement("canvas");z.width=ce,z.height=V;const Y=z.getContext("2d");if(!Y)return E(S.result);Y.fillStyle="#fff",Y.fillRect(0,0,ce,V),Y.drawImage(F,0,0,ce,V),E(z.toDataURL("image/jpeg",.8))},F.onerror=()=>E(null),F.src=S.result},S.onerror=()=>E(null),S.readAsDataURL(g)}),v=async()=>{var E;const g=at.currentUser;if(g){l.value=!0;try{const S={displayName:s.value.trim()||((E=g.email)==null?void 0:E.split("@")[0])||"Usuario",photoURL:o.value||"",birthday:i.value||""};await Ct(Le(ve,"users",g.uid),S,{merge:!0}),await Cu(g,{displayName:S.displayName,photoURL:S.photoURL}).catch(()=>{}),u.value=!0,setTimeout(()=>r("close"),600)}catch(S){console.log(S)}finally{l.value=!1}}};return(g,E)=>(U(),q("div",{class:"modal-backdrop",onClick:E[3]||(E[3]=yn(S=>r("close"),["self"]))},[d("div",BD,[d("div",jD,[d("h3",null,N(O(D)("mi_perfil")),1),d("button",{class:"icon-btn",onClick:E[0]||(E[0]=S=>r("close"))},HD)]),d("div",zD,[le(cn,{src:a.value,name:s.value||"?",size:"xl"},null,8,["src","name"]),d("button",{class:"prof-photo-btn",onClick:h},[WD,d("span",null,N(O(D)("cambiar_foto")),1)]),d("input",{ref_key:"photoInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:f},null,544)]),d("div",KD,[d("label",null,N(O(D)("alias")),1),Ir(d("input",{"onUpdate:modelValue":E[1]||(E[1]=S=>s.value=S),type:"text",placeholder:O(D)("alias_ph")},null,8,GD),[[Tr,s.value]])]),d("div",QD,[d("label",null,N(O(D)("cumpleanos")),1),Ir(d("input",{"onUpdate:modelValue":E[2]||(E[2]=S=>i.value=S),type:"date"},null,512),[[Tr,i.value]])]),d("button",{class:"save-btn btn-primary",type:"button",disabled:l.value,onClick:v},[d("span",null,N(l.value?O(D)("cargando"):O(D)("guardar")),1)],8,YD),u.value?(U(),q("p",JD,[XD,Gt(" "+N(O(D)("guardado")),1)])):Ie("",!0)])]))}},eN=nn(ZD,[["__scopeId","data-v-3bc49a19"]]),tN={key:0,class:"app-loading"},nN=d("div",{class:"app-spinner"},null,-1),rN={key:2,class:"app-chat"},sN={class:"side-desktop"},iN={key:1,class:"side-mobile"},oN={key:3,class:"app-placeholder"},aN=d("i",{class:"mdi mdi-chat-processing-outline"},null,-1),cN=[aN],lN={class:"app-placeholder-sub"},uN={__name:"App",setup(t){Uy();const e=G(null),n=G(!1),r=G(!1),s=G(null),i=G({}),o=G(!1),a=G(!1);let c=null;const l=({id:m,other:v})=>{s.value={id:m,other:v},r.value=!1},u=ge(()=>i.value.favorites||[]),h=ge(()=>s.value?u.value.includes(s.value.id):!1),f=async m=>{const v=at.currentUser;if(!v)return;const g=Le(ve,"users",v.uid);try{u.value.includes(m)?await Uo(g,{favorites:Ly(m)}):await Uo(g,{favorites:br(m)})}catch(E){console.log(E)}};return lT(at,async m=>{if(e.value=m,n.value=!0,m){try{const v=S=>(S||"").trim().split(/\s+/)[0]||"",g=Le(ve,"users",m.uid),E=await Ql(g);if(E.exists()){const S=E.data(),F={lastSeen:$o()},$=v(m.displayName);$&&S.displayName&&S.displayName===(m.displayName||"")&&S.displayName.includes(" ")&&S.displayName!==$&&(F.displayName=$),await Uo(g,F)}else{const S=v(m.displayName)||v(m.email);await Ct(g,{uid:m.uid,displayName:S,email:m.email,photoURL:m.photoURL||"",lastSeen:$o(),createdAt:$o()}),Cu(at.currentUser,{displayName:S}).catch(()=>{})}}catch(v){console.error("Error registrando usuario:",v)}c==null||c(),c=an(Le(ve,"users",m.uid),v=>{i.value=v.data()||{}},v=>console.error("denied:me",v.code))}else c==null||c(),c=null}),ks(()=>{c==null||c()}),(m,v)=>(U(),q(ke,null,[n.value?e.value?(U(),q("div",rN,[d("div",sN,[le(jf,{"active-id":s.value?s.value.id:"",profile:i.value,favorites:u.value,onOpen:l,onOpenProfile:v[0]||(v[0]=g=>a.value=!0),onOpenSettings:v[1]||(v[1]=g=>o.value=!0)},null,8,["active-id","profile","favorites"])]),r.value?(U(),q("div",{key:0,class:"overlay",onClick:v[2]||(v[2]=g=>r.value=!1)})):Ie("",!0),r.value?(U(),q("div",iN,[le(jf,{"active-id":s.value?s.value.id:"",profile:i.value,favorites:u.value,"is-mobile":"",onOpen:l,onClose:v[3]||(v[3]=g=>r.value=!1),onOpenProfile:v[4]||(v[4]=g=>a.value=!0),onOpenSettings:v[5]||(v[5]=g=>o.value=!0)},null,8,["active-id","profile","favorites"])])):Ie("",!0),s.value?(U(),pr(ID,{key:2,"conversation-id":s.value.id,other:s.value.other,profile:i.value,"is-favorite":h.value,onOpenDrawer:v[6]||(v[6]=g=>r.value=!0),onOpenProfile:v[7]||(v[7]=g=>a.value=!0),onToggleFavorite:f},null,8,["conversation-id","other","profile","is-favorite"])):(U(),q("div",oN,[d("button",{class:"app-placeholder-icon",onClick:v[8]||(v[8]=g=>r.value=!0)},cN),d("p",null,N(O(D)("selecciona")),1),d("p",lN,N(O(D)("para_chatear")),1)]))])):(U(),pr(CC,{key:1})):(U(),q("div",tN,[nN,d("span",null,N(O(D)("cargando")),1)])),o.value?(U(),pr($D,{key:3,onClose:v[9]||(v[9]=g=>o.value=!1)})):Ie("",!0),a.value?(U(),pr(eN,{key:4,profile:i.value,onClose:v[10]||(v[10]=g=>a.value=!1)},null,8,["profile"])):Ie("",!0)],64))}};function hN(t,e){let n;function r(){n=gv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}Ft(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),vv(()=>{n==null||n.stop()})}const Jt=typeof window<"u",dN=Jt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function fN(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function Hf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),fN(t,e.split("."),n))}function jy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function zf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Zc(t,e){return e.every(n=>t.hasOwnProperty(n))}function mN(t,e){const n={},r=new Set(Object.keys(t));for(const s of e)r.has(s)&&(n[s]=t[s]);return n}function pN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Wf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Kf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function gN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function An(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(zf(i)&&zf(o)){r[s]=An(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function ds(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ds.cache.has(t))return ds.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ds.cache.set(t,e),e}ds.cache=new Map;const Gr=2.4,Gf=.2126729,Qf=.7151522,Yf=.072175,_N=.55,yN=.58,vN=.57,wN=.62,To=.03,Jf=1.45,EN=5e-4,IN=1.25,TN=1.25,Xf=.078,Zf=12.82051282051282,Ao=.06,em=.001;function tm(t,e){const n=(t.r/255)**Gr,r=(t.g/255)**Gr,s=(t.b/255)**Gr,i=(e.r/255)**Gr,o=(e.g/255)**Gr,a=(e.b/255)**Gr;let c=n*Gf+r*Qf+s*Yf,l=i*Gf+o*Qf+a*Yf;if(c<=To&&(c+=(To-c)**Jf),l<=To&&(l+=(To-l)**Jf),Math.abs(l-c)<EN)return 0;let u;if(l>c){const h=(l**_N-c**yN)*IN;u=h<em?0:h<Xf?h-h*Zf*Ao:h-Ao}else{const h=(l**wN-c**vN)*TN;u=h>-em?0:h>-Xf?h-h*Zf*Ao:h+Ao}return u*100}const fa=.20689655172413793,AN=t=>t>fa**3?Math.cbrt(t):t/(3*fa**2)+4/29,bN=t=>t>fa?t**3:3*fa**2*(t-4/29);function qy(t){const e=AN,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Hy(t){const e=bN,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const RN=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],SN=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,CN=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],PN=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function zy(t){const e=Array(3),n=SN,r=RN;for(let s=0;s<3;++s)e[s]=Math.round(pN(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function kh(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=PN,o=CN;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}const nm=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,kN={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>rm({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>rm({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>Oi({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>Oi({h:t,s:e,v:n,a:r})};function gn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&nm.test(t)){const{groups:e}=t.match(nm),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return kN[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),NN(e)}else if(typeof t=="object"){if(Zc(t,["r","g","b"]))return t;if(Zc(t,["h","s","l"]))return Oi(Wy(t));if(Zc(t,["h","s","v"]))return Oi(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Oi(t){const{h:e,s:n,v:r,a:s}=t,i=a=>{const c=(a+e/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function rm(t){return Oi(Wy(t))}function Wy(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function bo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function DN(t){let{r:e,g:n,b:r,a:s}=t;return`#${[bo(e),bo(n),bo(r),s!==void 0?bo(Math.round(s*255)):""].join("")}`}function NN(t){t=ON(t);let[e,n,r,s]=gN(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function ON(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Wf(Wf(t,6),8,"F")),t}function VN(t,e){const n=qy(kh(t));return n[0]=n[0]+e*10,zy(Hy(n))}function MN(t,e){const n=qy(kh(t));return n[0]=n[0]-e*10,zy(Hy(n))}function xN(t){const e=gn(t);return kh(e)[1]}function LN(t){const e=Math.abs(tm(gn(0),gn(t)));return Math.abs(tm(gn(16777215),gn(t)))>Math.min(e,50)?"#fff":"#000"}function Ky(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const Vi=Symbol.for("vuetify:defaults");function FN(t){return G(t)}function Gy(){const t=ri(Vi);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function UN(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[ds(e)])<"u"}function $N(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gy();const r=_c("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=ge(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,l){var h,f,m,v;const u=Reflect.get(c,l);return l==="class"||l==="style"?[(h=s.value)==null?void 0:h[l],u].filter(g=>g!=null):typeof l=="string"&&!UN(r.vnode,l)?((f=s.value)==null?void 0:f[l])??((v=(m=n.value)==null?void 0:m.global)==null?void 0:v[l])??u:u}}),o=rs();hu(()=>{if(s.value){const c=Object.entries(s.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=jN(Vi,r);sp(Vi,ge(()=>o.value?An((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function ro(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Ky(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return mN(r,e)},t.props._as=String,t.setup=function(r,s){const i=Gy();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:a}=$N(r,r._as??t.name,i),c=t._setup(o,s);return a(),c}}return t}function BN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?ro:hw)(e)}function _c(t,e){const n=Kw();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Qy=0,Bo=new WeakMap;function Yy(){const t=_c("getUid");if(Bo.has(t))return Bo.get(t);{const e=Qy++;return Bo.set(t,e),e}}Yy.reset=()=>{Qy=0,Bo=new WeakMap};function jN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_c("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function qN(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=_c("useProxiedModel"),o=G(t[e]!==void 0?t[e]:n),a=ds(e),l=ge(a!==e?()=>{var h,f,m,v;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(v=i.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});hN(()=>!l.value,()=>{Ft(()=>t[e],h=>{o.value=h})});const u=ge({get(){const h=t[e];return r(l.value?h:o.value)},set(h){const f=s(h),m=pe(l.value?t[e]:o.value);m===f||r(m)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const HN={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},sm="$vuetify.",im=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),Jy=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(sm))return im(r,i);const a=r.replace(sm,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=Hf(c,a,null);return u||(`${r}${t.value}`,u=Hf(l,a,null)),u||(u=r),typeof u!="string"&&(u=r),im(u,i)};function Xy(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function el(t,e,n){const r=qN(t,e,t[e]??n.value);return r.value=t[e]??n.value,Ft(n,s=>{t[e]==null&&(r.value=n.value)}),r}function Zy(t){return e=>{const n=el(e,"locale",t.current),r=el(e,"fallback",t.fallback),s=el(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:Jy(n,r,s),n:Xy(n,r),provide:Zy({current:n,fallback:r,messages:s})}}}function zN(t){const e=rs((t==null?void 0:t.locale)??"en"),n=rs((t==null?void 0:t.fallback)??"en"),r=G({en:HN,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:Jy(e,n,r),n:Xy(e,n),provide:Zy({current:e,fallback:n,messages:r})}}const om=Symbol.for("vuetify:locale");function WN(t){return t.name!=null}function KN(t){const e=t!=null&&t.adapter&&WN(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:zN(t),n=QN(e,t);return{...e,...n}}function GN(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function QN(t,e){const n=G((e==null?void 0:e.rtl)??GN()),r=ge(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:ge(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}const Mi={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function YN(t,e){const n=[];let r=[];const s=ev(t),i=tv(t),o=(s.getDay()-Mi[e.slice(-2).toUpperCase()]+7)%7,a=(i.getDay()-Mi[e.slice(-2).toUpperCase()]+7)%7;for(let c=0;c<o;c++){const l=new Date(s);l.setDate(l.getDate()-(o-c)),r.push(l)}for(let c=1;c<=i.getDate();c++){const l=new Date(t.getFullYear(),t.getMonth(),c);r.push(l),r.length===7&&(n.push(r),r=[])}for(let c=1;c<7-a;c++){const l=new Date(i);l.setDate(l.getDate()+c),r.push(l)}return r.length>0&&n.push(r),n}function JN(t,e){const n=new Date(t);for(;n.getDay()!==(Mi[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function XN(t,e){const n=new Date(t),r=((Mi[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function ev(t){return new Date(t.getFullYear(),t.getMonth(),1)}function tv(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function ZN(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const e2=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function nv(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(e2.test(t))return ZN(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const am=new Date(2e3,0,2);function t2(t){const e=Mi[t.slice(-2).toUpperCase()];return jy(7).map(n=>{const r=new Date(am);return r.setDate(am.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function n2(t,e,n,r){const s=nv(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=s.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function r2(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Kf(String(n.getMonth()+1),2,"0"),i=Kf(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function s2(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function i2(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function o2(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function a2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function c2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function l2(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function u2(t){return t.getFullYear()}function h2(t){return t.getMonth()}function d2(t){return t.getDate()}function f2(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function m2(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function p2(t){return t.getHours()}function g2(t){return t.getMinutes()}function _2(t){return new Date(t.getFullYear(),0,1)}function y2(t){return new Date(t.getFullYear(),11,31)}function v2(t,e){return ma(t,e[0])&&I2(t,e[1])}function w2(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function ma(t,e){return t.getTime()>e.getTime()}function E2(t,e){return ma(Jl(t),Jl(e))}function I2(t,e){return t.getTime()<e.getTime()}function cm(t,e){return t.getTime()===e.getTime()}function T2(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function A2(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function b2(t,e){return t.getFullYear()===e.getFullYear()}function R2(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function S2(t,e){const n=new Date(t);return n.setHours(e),n}function C2(t,e){const n=new Date(t);return n.setMinutes(e),n}function P2(t,e){const n=new Date(t);return n.setMonth(e),n}function k2(t,e){const n=new Date(t);return n.setDate(e),n}function D2(t,e){const n=new Date(t);return n.setFullYear(e),n}function Jl(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function N2(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class O2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return nv(e)}toJsDate(e){return e}toISO(e){return r2(this,e)}parseISO(e){return s2(e)}addMinutes(e,n){return i2(e,n)}addHours(e,n){return o2(e,n)}addDays(e,n){return a2(e,n)}addWeeks(e,n){return c2(e,n)}addMonths(e,n){return l2(e,n)}getWeekArray(e){return YN(e,this.locale)}startOfWeek(e){return JN(e,this.locale)}endOfWeek(e){return XN(e,this.locale)}startOfMonth(e){return ev(e)}endOfMonth(e){return tv(e)}format(e,n){return n2(e,n,this.locale,this.formats)}isEqual(e,n){return cm(e,n)}isValid(e){return w2(e)}isWithinRange(e,n){return v2(e,n)}isAfter(e,n){return ma(e,n)}isAfterDay(e,n){return E2(e,n)}isBefore(e,n){return!ma(e,n)&&!cm(e,n)}isSameDay(e,n){return T2(e,n)}isSameMonth(e,n){return A2(e,n)}isSameYear(e,n){return b2(e,n)}setMinutes(e,n){return C2(e,n)}setHours(e,n){return S2(e,n)}setMonth(e,n){return P2(e,n)}setDate(e,n){return k2(e,n)}setYear(e,n){return D2(e,n)}getDiff(e,n,r){return R2(e,n,r)}getWeekdays(){return t2(this.locale)}getYear(e){return u2(e)}getMonth(e){return h2(e)}getDate(e){return d2(e)}getNextMonth(e){return f2(e)}getPreviousMonth(e){return m2(e)}getHours(e){return p2(e)}getMinutes(e){return g2(e)}startOfDay(e){return Jl(e)}endOfDay(e){return N2(e)}startOfYear(e){return _2(e)}endOfYear(e){return y2(e)}}const V2=Symbol.for("vuetify:date-options"),lm=Symbol.for("vuetify:date-adapter");function M2(t,e){const n=An({adapter:O2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:x2(n,e)}}function x2(t,e){const n=Ps(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Ft(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const um=Symbol.for("vuetify:display"),hm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},L2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hm;return An(hm,t)};function dm(t){return Jt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function fm(t){return Jt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function mm(t){const e=Jt&&!t?window.navigator.userAgent:"ssr";function n(v){return!!e.match(v)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:h,mac:f,linux:m,touch:dN,ssr:e==="ssr"}}function F2(t,e){const{thresholds:n,mobileBreakpoint:r}=L2(t),s=rs(fm(e)),i=rs(mm(e)),o=Ps({}),a=rs(dm(e));function c(){s.value=fm(),a.value=dm()}function l(){c(),i.value=mm()}return hu(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),m=a.value<n.xl&&!(f||h||u),v=a.value<n.xxl&&!(m||f||h||u),g=a.value>=n.xxl,E=u?"xs":h?"sm":f?"md":m?"lg":v?"xl":"xxl",S=typeof r=="number"?r:n[r],F=a.value<S;o.xs=u,o.sm=h,o.md=f,o.lg=m,o.xl=v,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||m),o.smAndDown=!(f||m||v||g),o.mdAndDown=!(m||v||g),o.lgAndDown=!(v||g),o.xlAndDown=!g,o.name=E,o.height=s.value,o.width=a.value,o.mobile=F,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),Jt&&window.addEventListener("resize",c,{passive:!0}),{...zv(o),update:l,ssr:!!e}}const U2=Symbol.for("vuetify:goto");function $2(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function B2(t,e){return{rtl:e.isRtl,options:An($2(),t)}}const j2={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},q2={component:t=>Zw(rv,{...t,class:"mdi"})},H2=[String,Function,Object,Array],pm=Symbol.for("vuetify:icons"),yc=Ky({icon:{type:H2},tag:{type:String,required:!0}},"icon");BN()({name:"VComponentIcon",props:yc(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return le(t.tag,null,{default:()=>{var s;return[t.icon?le(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}});const z2=ro({name:"VSvgIcon",inheritAttrs:!1,props:yc(),setup(t,e){let{attrs:n}=e;return()=>le(t.tag,_p(n,{style:null}),{default:()=>[le("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?le("path",{d:r[0],"fill-opacity":r[1]},null):le("path",{d:r},null)):le("path",{d:t.icon},null)])]})}});ro({name:"VLigatureIcon",props:yc(),setup(t){return()=>le(t.tag,null,{default:()=>[t.icon]})}});const rv=ro({name:"VClassIcon",props:yc(),setup(t){return()=>le(t.tag,{class:t.icon},null)}});function W2(){return{svg:{component:z2},class:{component:rv}}}function K2(t){const e=W2(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=q2),An({defaultSet:n,sets:e,aliases:{...j2,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const gm=Symbol.for("vuetify:theme");function _m(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function G2(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_m();const e=_m();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=An(a,o)}return An(e,{...t,themes:n})}function Q2(t){const e=G2(t),n=G(e.defaultTheme),r=G(e.themes),s=ge(()=>{const u={};for(const[h,f]of Object.entries(r.value)){const m=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const v of e.variations.colors){const g=m.colors[v];if(g)for(const E of["lighten","darken"]){const S=E==="lighten"?VN:MN;for(const F of jy(e.variations[E],1))m.colors[`${v}-${E}-${F}`]=DN(S(gn(g),F))}}for(const v of Object.keys(m.colors)){if(/^on-[a-z]/.test(v)||m.colors[`on-${v}`])continue;const g=`on-${v}`,E=gn(m.colors[v]);m.colors[g]=LN(E)}}return u}),i=ge(()=>s.value[n.value]),o=ge(()=>{var v;const u=[];(v=i.value)!=null&&v.dark&&ur(u,":root",["color-scheme: dark"]),ur(u,":root",ym(i.value));for(const[g,E]of Object.entries(s.value))ur(u,`.v-theme--${g}`,[`color-scheme: ${E.dark?"dark":"normal"}`,...ym(E)]);const h=[],f=[],m=new Set(Object.values(s.value).flatMap(g=>Object.keys(g.colors)));for(const g of m)/^on-[a-z]/.test(g)?ur(f,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(ur(h,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),ur(f,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),ur(f,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...h,...f),u.map((g,E)=>E===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);Jt&&Ft(o,()=>{f.patch(a)})}else Jt?(h.addHeadObjs(ge(a)),hu(()=>h.updateDOM())):h.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!f){const v=document.createElement("style");v.type="text/css",v.id="vuetify-theme-stylesheet",e.cspNonce&&v.setAttribute("nonce",e.cspNonce),f=v,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=Jt?document.getElementById("vuetify-theme-stylesheet"):null;Jt?Ft(o,m,{immediate:!0}):m()}}const l=ge(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:l,styles:o,global:{name:n,current:i}}}function ur(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function ym(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=gn(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${xN(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?gn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}function sv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=An(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=FN(r.defaults),c=F2(r.display,r.ssr),l=Q2(r.theme),u=K2(r.icons),h=KN(r.locale),f=M2(r.date,h),m=B2(r.goTo,h);return{install:g=>{for(const E in o)g.directive(E,o[E]);for(const E in i)g.component(E,i[E]);for(const E in s)g.component(E,ro({...s[E],name:E,aliasName:s[E].name}));if(l.install(g),g.provide(Vi,a),g.provide(um,c),g.provide(gm,l),g.provide(pm,u),g.provide(om,h),g.provide(V2,f.options),g.provide(lm,f.instance),g.provide(U2,m),Jt&&r.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:E}=g;g.mount=function(){const S=E(...arguments);return wa(()=>c.update()),g.mount=E,S}}Yy.reset(),g.mixin({computed:{$vuetify(){return Ps({defaults:Qr.call(this,Vi),display:Qr.call(this,um),theme:Qr.call(this,gm),icons:Qr.call(this,pm),locale:Qr.call(this,om),date:Qr.call(this,lm)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h,date:f,goTo:m}}const Y2="3.6.3";sv.version=Y2;function Qr(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const J2=sv({theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FF6A00",secondary:"#F7F7F7",accent:"#FFB27D",error:"#EF4444",info:"#0EA5E9",success:"#22C55E",warning:"#F59E0B",background:"#FFFFFF",surface:"#FFFFFF"}}}}}),X2="modulepreload",Z2=function(t){return"/friendzy/"+t},vm={},eO=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=Z2(a),a in vm)return;vm[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":X2,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function tO(){(await eO(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Inter:100,300,400,500,600,700,800,900&display=swap"]}})}tO();C0(uN).use(J2).mount("#app");
