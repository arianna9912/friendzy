(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ru(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const ke={},rr=[],Mt=()=>{},lv=()=>!1,Ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),iu=t=>t.startsWith("onUpdate:"),Je=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uv=Object.prototype.hasOwnProperty,Ee=(t,e)=>uv.call(t,e),ne=Array.isArray,ir=t=>Ia(t)==="[object Map]",Rm=t=>Ia(t)==="[object Set]",le=t=>typeof t=="function",Ge=t=>typeof t=="string",Ls=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Sm=t=>(xe(t)||le(t))&&le(t.then)&&le(t.catch),Cm=Object.prototype.toString,Ia=t=>Cm.call(t),hv=t=>Ia(t).slice(8,-1),Pm=t=>Ia(t)==="[object Object]",au=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dv=/-(\w)/g,_r=Ta(t=>t.replace(dv,(e,n)=>n?n.toUpperCase():"")),fv=/\B([A-Z])/g,Fs=Ta(t=>t.replace(fv,"-$1").toLowerCase()),km=Ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),bc=Ta(t=>t?`on${km(t)}`:""),Yn=(t,e)=>!Object.is(t,e),No=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Dm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ol=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uh;const Nm=()=>Uh||(Uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nr(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ge(s)?_v(s):Nr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ge(t)||xe(t))return t}const mv=/;(?![^(]*\))/g,pv=/:([^]+)/,gv=/\/\*[^]*?\*\//g;function _v(t){const e={};return t.replace(gv,"").split(mv).forEach(n=>{if(n){const s=n.split(pv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fe(t){let e="";if(Ge(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=fe(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vv=ru(yv);function Om(t){return!!t||t===""}const O=t=>Ge(t)?t:t==null?"":ne(t)||xe(t)&&(t.toString===Cm||!le(t.toString))?JSON.stringify(t,Vm,2):String(t),Vm=(t,e)=>e&&e.__v_isRef?Vm(t,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Rc(s,i)+" =>"]=r,n),{})}:Rm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rc(n))}:Ls(e)?Rc(e):xe(e)&&!ne(e)&&!Pm(e)?String(e):e,Rc=(t,e="")=>{var n;return Ls(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class Mm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function wv(t){return new Mm(t)}function Ev(t,e=Pt){e&&e.active&&e.effects.push(t)}function Iv(){return Pt}function Tv(t){Pt&&Pt.cleanups.push(t)}let As;class cu{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ev(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ts();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Av(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ns()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=jn,n=As;try{return jn=!0,As=this,this._runnings++,$h(this),this.fn()}finally{Bh(this),this._runnings--,As=n,jn=e}}stop(){this.active&&($h(this),Bh(this),this.onStop&&this.onStop(),this.active=!1)}}function Av(t){return t.value}function $h(t){t._trackId++,t._depsLength=0}function Bh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)xm(t.deps[e],t);t.deps.length=t._depsLength}}function xm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let jn=!0,al=0;const Lm=[];function ts(){Lm.push(jn),jn=!1}function ns(){const t=Lm.pop();jn=t===void 0?!0:t}function lu(){al++}function uu(){for(al--;!al&&cl.length;)cl.shift()()}function Fm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&xm(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const cl=[];function Um(t,e,n){lu();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&cl.push(s.scheduler)))}uu()}const $m=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ko=new WeakMap,bs=Symbol(""),ll=Symbol("");function St(t,e,n){if(jn&&As){let s=Ko.get(t);s||Ko.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=$m(()=>s.delete(n))),Fm(As,r)}}function yn(t,e,n,s,r,i){const o=Ko.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!Ls(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?au(n)&&a.push(o.get("length")):(a.push(o.get(bs)),ir(t)&&a.push(o.get(ll)));break;case"delete":ne(t)||(a.push(o.get(bs)),ir(t)&&a.push(o.get(ll)));break;case"set":ir(t)&&a.push(o.get(bs));break}lu();for(const c of a)c&&Um(c,4);uu()}function bv(t,e){const n=Ko.get(t);return n&&n.get(e)}const Rv=ru("__proto__,__v_isRef,__isVue"),Bm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ls)),jh=Sv();function Sv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ae(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts(),lu();const s=Ae(this)[e].apply(this,n);return uu(),ns(),s}}),t}function Cv(t){Ls(t)||(t=String(t));const e=Ae(this);return St(e,"has",t),e.hasOwnProperty(t)}class jm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Bv:Wm:i?zm:Hm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ne(e);if(!r){if(o&&Ee(jh,n))return Reflect.get(jh,n,s);if(n==="hasOwnProperty")return Cv}const a=Reflect.get(e,n,s);return(Ls(n)?Bm.has(n):Rv(n))||(r||St(e,"get",n),i)?a:wt(a)?o&&au(n)?a:a.value:xe(a)?r?Km(a):Or(a):a}}class qm extends jm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=pi(i);if(!Go(s)&&!pi(s)&&(i=Ae(i),s=Ae(s)),!ne(e)&&wt(i)&&!wt(s))return c?!1:(i.value=s,!0)}const o=ne(e)&&au(n)?Number(n)<e.length:Ee(e,n),a=Reflect.set(e,n,s,r);return e===Ae(r)&&(o?Yn(s,i)&&yn(e,"set",n,s):yn(e,"add",n,s)),a}deleteProperty(e,n){const s=Ee(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&yn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ls(n)||!Bm.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",ne(e)?"length":bs),Reflect.ownKeys(e)}}class Pv extends jm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kv=new qm,Dv=new Pv,Nv=new qm(!0);const hu=t=>t,Aa=t=>Reflect.getPrototypeOf(t);function mo(t,e,n=!1,s=!1){t=t.__v_raw;const r=Ae(t),i=Ae(e);n||(Yn(e,i)&&St(r,"get",e),St(r,"get",i));const{has:o}=Aa(r),a=s?hu:n?mu:gi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function po(t,e=!1){const n=this.__v_raw,s=Ae(n),r=Ae(t);return e||(Yn(t,r)&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function go(t,e=!1){return t=t.__v_raw,!e&&St(Ae(t),"iterate",bs),Reflect.get(t,"size",t)}function qh(t){t=Ae(t);const e=Ae(this);return Aa(e).has.call(e,t)||(e.add(t),yn(e,"add",t,t)),this}function Hh(t,e){e=Ae(e);const n=Ae(this),{has:s,get:r}=Aa(n);let i=s.call(n,t);i||(t=Ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Yn(e,o)&&yn(n,"set",t,e):yn(n,"add",t,e),this}function zh(t){const e=Ae(this),{has:n,get:s}=Aa(e);let r=n.call(e,t);r||(t=Ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&yn(e,"delete",t,void 0),i}function Wh(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function _o(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Ae(o),c=e?hu:t?mu:gi;return!t&&St(a,"iterate",bs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function yo(t,e,n){return function(...s){const r=this.__v_raw,i=Ae(r),o=ir(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?hu:e?mu:gi;return!e&&St(i,"iterate",c?ll:bs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Dn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ov(){const t={get(i){return mo(this,i)},get size(){return go(this)},has:po,add:qh,set:Hh,delete:zh,clear:Wh,forEach:_o(!1,!1)},e={get(i){return mo(this,i,!1,!0)},get size(){return go(this)},has:po,add:qh,set:Hh,delete:zh,clear:Wh,forEach:_o(!1,!0)},n={get(i){return mo(this,i,!0)},get size(){return go(this,!0)},has(i){return po.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:_o(!0,!1)},s={get(i){return mo(this,i,!0,!0)},get size(){return go(this,!0)},has(i){return po.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:_o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yo(i,!1,!1),n[i]=yo(i,!0,!1),e[i]=yo(i,!1,!0),s[i]=yo(i,!0,!0)}),[t,n,e,s]}const[Vv,Mv,xv,Lv]=Ov();function du(t,e){const n=e?t?Lv:xv:t?Mv:Vv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ee(n,r)&&r in s?n:s,r,i)}const Fv={get:du(!1,!1)},Uv={get:du(!1,!0)},$v={get:du(!0,!1)};const Hm=new WeakMap,zm=new WeakMap,Wm=new WeakMap,Bv=new WeakMap;function jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qv(t){return t.__v_skip||!Object.isExtensible(t)?0:jv(hv(t))}function Or(t){return pi(t)?t:fu(t,!1,kv,Fv,Hm)}function Hv(t){return fu(t,!1,Nv,Uv,zm)}function Km(t){return fu(t,!0,Dv,$v,Wm)}function fu(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=qv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function si(t){return pi(t)?si(t.__v_raw):!!(t&&t.__v_isReactive)}function pi(t){return!!(t&&t.__v_isReadonly)}function Go(t){return!!(t&&t.__v_isShallow)}function Gm(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function zv(t){return Object.isExtensible(t)&&Dm(t,"__v_skip",!0),t}const gi=t=>xe(t)?Or(t):t,mu=t=>xe(t)?Km(t):t;class Qm{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new cu(()=>e(this._value),()=>Oo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Ae(this);return(!e._cacheable||e.effect.dirty)&&Yn(e._value,e._value=e.effect.run())&&Oo(e,4),Ym(e),e.effect._dirtyLevel>=2&&Oo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Wv(t,e,n=!1){let s,r;const i=le(t);return i?(s=t,r=Mt):(s=t.get,r=t.set),new Qm(s,r,i||!r,n)}function Ym(t){var e;jn&&As&&(t=Ae(t),Fm(As,(e=t.dep)!=null?e:t.dep=$m(()=>t.dep=void 0,t instanceof Qm?t:void 0)))}function Oo(t,e=4,n){t=Ae(t);const s=t.dep;s&&Um(s,e)}function wt(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return Jm(t,!1)}function or(t){return Jm(t,!0)}function Jm(t,e){return wt(t)?t:new Kv(t,e)}class Kv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ae(e),this._value=n?e:gi(e)}get value(){return Ym(this),this._value}set value(e){const n=this.__v_isShallow||Go(e)||pi(e);e=n?e:Ae(e),Yn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gi(e),Oo(this,4))}}function D(t){return wt(t)?t.value:t}const Gv={get:(t,e,n)=>D(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return wt(r)&&!wt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Xm(t){return si(t)?t:new Proxy(t,Gv)}function Qv(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Jv(t,n);return e}class Yv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return bv(Ae(this._object),this._key)}}function Jv(t,e,n){const s=t[e];return wt(s)?s:new Yv(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,s){try{return s?t(...s):t()}catch(r){ba(r,e,n)}}function jt(t,e,n,s){if(le(t)){const r=qn(t,e,n,s);return r&&Sm(r)&&r.catch(i=>{ba(i,e,n)}),r}if(ne(t)){const r=[];for(let i=0;i<t.length;i++)r.push(jt(t[i],e,n,s));return r}}function ba(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ts(),qn(c,null,10,[t,o,a]),ns();return}}Xv(t,n,r,s)}function Xv(t,e,n,s=!0){console.error(t)}let _i=!1,ul=!1;const ht=[];let Xt=0;const ar=[];let On=null,_s=0;const Zm=Promise.resolve();let pu=null;function Ra(t){const e=pu||Zm;return t?e.then(this?t.bind(this):t):e}function Zv(t){let e=Xt+1,n=ht.length;for(;e<n;){const s=e+n>>>1,r=ht[s],i=yi(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function gu(t){(!ht.length||!ht.includes(t,_i&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?ht.push(t):ht.splice(Zv(t.id),0,t),ep())}function ep(){!_i&&!ul&&(ul=!0,pu=Zm.then(np))}function ew(t){const e=ht.indexOf(t);e>Xt&&ht.splice(e,1)}function tw(t){ne(t)?ar.push(...t):(!On||!On.includes(t,t.allowRecurse?_s+1:_s))&&ar.push(t),ep()}function Kh(t,e,n=_i?Xt+1:0){for(;n<ht.length;n++){const s=ht[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;ht.splice(n,1),n--,s()}}}function tp(t){if(ar.length){const e=[...new Set(ar)].sort((n,s)=>yi(n)-yi(s));if(ar.length=0,On){On.push(...e);return}for(On=e,_s=0;_s<On.length;_s++)On[_s]();On=null,_s=0}}const yi=t=>t.id==null?1/0:t.id,nw=(t,e)=>{const n=yi(t)-yi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function np(t){ul=!1,_i=!0,ht.sort(nw);try{for(Xt=0;Xt<ht.length;Xt++){const e=ht[Xt];e&&e.active!==!1&&qn(e,null,14)}}finally{Xt=0,ht.length=0,tp(),_i=!1,pu=null,(ht.length||ar.length)&&np()}}function sw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ke;f&&(r=n.map(p=>Ge(p)?p.trim():p)),h&&(r=n.map(ol))}let a,c=s[a=bc(e)]||s[a=bc(_r(e))];!c&&i&&(c=s[a=bc(Fs(e))]),c&&jt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(l,t,6,r)}}function sp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!le(t)){const c=l=>{const u=sp(l,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(xe(t)&&s.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):Je(o,i),xe(t)&&s.set(t,o),o)}function Sa(t,e){return!t||!Ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Fs(e))||Ee(t,e))}let bt=null,Ca=null;function Qo(t){const e=bt;return bt=t,Ca=t&&t.type.__scopeId||null,e}function ss(t){Ca=t}function rs(){Ca=null}function rw(t,e=bt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&sd(-1);const i=Qo(e);let o;try{o=t(...r)}finally{Qo(i),s._d&&sd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Sc(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:p,ctx:w,inheritAttrs:g}=t,v=Qo(t);let k,C;try{if(n.shapeFlag&4){const F=r||s,W=F;k=Yt(l.call(W,F,u,h,p,f,w)),C=a}else{const F=e;k=Yt(F.length>1?F(h,{attrs:a,slots:o,emit:c}):F(h,null)),C=e.props?a:iw(a)}}catch(F){ai.length=0,ba(F,t,1),k=pe(Ps)}let L=k;if(C&&g!==!1){const F=Object.keys(C),{shapeFlag:W}=L;F.length&&W&7&&(i&&F.some(iu)&&(C=ow(C,i)),L=yr(L,C,!1,!0))}return n.dirs&&(L=yr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),k=L,Qo(v),k}const iw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ea(n))&&((e||(e={}))[n]=t[n]);return e},ow=(t,e)=>{const n={};for(const s in t)(!iu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function aw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Gh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Sa(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gh(s,o,l):!0:!!o;return!1}function Gh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Sa(n,i))return!0}return!1}function cw({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const lw=Symbol.for("v-ndc"),uw=t=>t.__isSuspense;function hw(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):tw(t)}const dw=Symbol.for("v-scx"),fw=()=>oi(dw);function _u(t,e){return yu(t,null,e)}const vo={};function qt(t,e,n){return yu(t,e,n)}function yu(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=ke){if(e&&i){const U=e;e=(...se)=>{U(...se),W()}}const c=dt,l=U=>s===!0?U:ys(U,s===!1?1:void 0);let u,h=!1,f=!1;if(wt(t)?(u=()=>t.value,h=Go(t)):si(t)?(u=()=>l(t),h=!0):ne(t)?(f=!0,h=t.some(U=>si(U)||Go(U)),u=()=>t.map(U=>{if(wt(U))return U.value;if(si(U))return l(U);if(le(U))return qn(U,c,2)})):le(t)?e?u=()=>qn(t,c,2):u=()=>(p&&p(),jt(t,c,3,[w])):u=Mt,e&&s){const U=u;u=()=>ys(U())}let p,w=U=>{p=L.onStop=()=>{qn(U,c,4),p=L.onStop=void 0}},g;if(Da)if(w=Mt,e?n&&jt(e,c,3,[u(),f?[]:void 0,w]):u(),r==="sync"){const U=fw();g=U.__watcherHandles||(U.__watcherHandles=[])}else return Mt;let v=f?new Array(t.length).fill(vo):vo;const k=()=>{if(!(!L.active||!L.dirty))if(e){const U=L.run();(s||h||(f?U.some((se,_e)=>Yn(se,v[_e])):Yn(U,v)))&&(p&&p(),jt(e,c,3,[U,v===vo?void 0:f&&v[0]===vo?[]:v,w]),v=U)}else L.run()};k.allowRecurse=!!e;let C;r==="sync"?C=k:r==="post"?C=()=>Tt(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),C=()=>gu(k));const L=new cu(u,Mt,C),F=Iv(),W=()=>{L.stop(),F&&ou(F.effects,L)};return e?n?k():v=L.run():r==="post"?Tt(L.run.bind(L),c&&c.suspense):L.run(),g&&g.push(W),W}function mw(t,e,n){const s=this.proxy,r=Ge(t)?t.includes(".")?rp(s,t):()=>s[t]:t.bind(s,s);let i;le(e)?i=e:(i=e.handler,n=e);const o=$i(this),a=yu(r,i.bind(s),n);return o(),a}function rp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ys(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,wt(t))ys(t.value,e,n);else if(ne(t))for(let s=0;s<t.length;s++)ys(t[s],e,n);else if(Rm(t)||ir(t))t.forEach(s=>{ys(s,e,n)});else if(Pm(t))for(const s in t)ys(t[s],e,n);return t}function Rs(t,e){if(bt===null)return t;const n=Na(bt)||bt.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=ke]=e[r];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&ys(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ds(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ts(),jt(c,n,8,[t.el,a,t,e]),ns())}}/*! #__NO_SIDE_EFFECTS__ */function pw(t,e){return le(t)?Je({name:t.name},e,{setup:t}):t}const Vo=t=>!!t.type.__asyncLoader,ip=t=>t.type.__isKeepAlive;function gw(t,e){op(t,"a",e)}function _w(t,e){op(t,"da",e)}function op(t,e,n=dt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Pa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ip(r.parent.vnode)&&yw(s,e,n,r),r=r.parent}}function yw(t,e,n,s){const r=Pa(e,t,s,!0);Us(()=>{ou(s[e],r)},n)}function Pa(t,e,n=dt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts();const a=$i(n),c=jt(e,n,t,o);return a(),ns(),c});return s?r.unshift(i):r.push(i),i}}const bn=t=>(e,n=dt)=>(!Da||t==="sp")&&Pa(t,(...s)=>e(...s),n),vw=bn("bm"),vu=bn("m"),ww=bn("bu"),Ew=bn("u"),Iw=bn("bum"),Us=bn("um"),Tw=bn("sp"),Aw=bn("rtg"),bw=bn("rtc");function Rw(t,e=dt){Pa("ec",t,e)}function Ut(t,e,n,s){let r;const i=n;if(ne(t)||Ge(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i)}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i)}}else r=[];return r}const hl=t=>t?Tp(t)?Na(t)||t.proxy:hl(t.parent):null,ri=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hl(t.parent),$root:t=>hl(t.root),$emit:t=>t.emit,$options:t=>wu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,gu(t.update)}),$nextTick:t=>t.n||(t.n=Ra.bind(t.proxy)),$watch:t=>mw.bind(t)}),Cc=(t,e)=>t!==ke&&!t.__isScriptSetup&&Ee(t,e),Sw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Cc(s,e))return o[e]=1,s[e];if(r!==ke&&Ee(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Ee(l,e))return o[e]=3,i[e];if(n!==ke&&Ee(n,e))return o[e]=4,n[e];dl&&(o[e]=0)}}const u=ri[e];let h,f;if(u)return e==="$attrs"&&St(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&Ee(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Ee(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Cc(r,e)?(r[e]=n,!0):s!==ke&&Ee(s,e)?(s[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&Ee(t,o)||Cc(e,o)||(a=i[0])&&Ee(a,o)||Ee(s,o)||Ee(ri,o)||Ee(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qh(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dl=!0;function Cw(t){const e=wu(t),n=t.proxy,s=t.ctx;dl=!1,e.beforeCreate&&Yh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:w,activated:g,deactivated:v,beforeDestroy:k,beforeUnmount:C,destroyed:L,unmounted:F,render:W,renderTracked:U,renderTriggered:se,errorCaptured:_e,serverPrefetch:qe,expose:Ue,inheritAttrs:Z,components:J,directives:te,filters:me}=e;if(l&&Pw(l,s,null),o)for(const he in o){const ue=o[he];le(ue)&&(s[he]=ue.bind(n))}if(r){const he=r.call(n,n);xe(he)&&(t.data=Or(he))}if(dl=!0,i)for(const he in i){const ue=i[he],He=le(ue)?ue.bind(n,n):le(ue.get)?ue.get.bind(n,n):Mt,_t=!le(ue)&&le(ue.set)?ue.set.bind(n):Mt,Kt=Ie({get:He,set:_t});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:It=>Kt.value=It})}if(a)for(const he in a)ap(a[he],s,n,he);if(c){const he=le(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ue=>{lp(ue,he[ue])})}u&&Yh(u,t,"c");function be(he,ue){ne(ue)?ue.forEach(He=>he(He.bind(n))):ue&&he(ue.bind(n))}if(be(vw,h),be(vu,f),be(ww,p),be(Ew,w),be(gw,g),be(_w,v),be(Rw,_e),be(bw,U),be(Aw,se),be(Iw,C),be(Us,F),be(Tw,qe),ne(Ue))if(Ue.length){const he=t.exposed||(t.exposed={});Ue.forEach(ue=>{Object.defineProperty(he,ue,{get:()=>n[ue],set:He=>n[ue]=He})})}else t.exposed||(t.exposed={});W&&t.render===Mt&&(t.render=W),Z!=null&&(t.inheritAttrs=Z),J&&(t.components=J),te&&(t.directives=te)}function Pw(t,e,n=Mt){ne(t)&&(t=fl(t));for(const s in t){const r=t[s];let i;xe(r)?"default"in r?i=oi(r.from||s,r.default,!0):i=oi(r.from||s):i=oi(r),wt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Yh(t,e,n){jt(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ap(t,e,n,s){const r=s.includes(".")?rp(n,s):()=>n[s];if(Ge(t)){const i=e[t];le(i)&&qt(r,i)}else if(le(t))qt(r,t.bind(n));else if(xe(t))if(ne(t))t.forEach(i=>ap(i,e,n,s));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&qt(r,i,t)}}function wu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Yo(c,l,o,!0)),Yo(c,e,o)),xe(e)&&i.set(e,c),c}function Yo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Yo(t,i,n,!0),r&&r.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=kw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kw={data:Jh,props:Xh,emits:Xh,methods:Gr,computed:Gr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Gr,directives:Gr,watch:Nw,provide:Jh,inject:Dw};function Jh(t,e){return e?t?function(){return Je(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function Dw(t,e){return Gr(fl(t),fl(e))}function fl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Gr(t,e){return t?Je(Object.create(null),t,e):e}function Xh(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Je(Object.create(null),Qh(t),Qh(e??{})):e}function Nw(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function cp(){return{app:null,config:{isNativeTag:lv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ow=0;function Vw(t,e){return function(s,r=null){le(s)||(s=Je({},s)),r!=null&&!xe(r)&&(r=null);const i=cp(),o=new WeakSet;let a=!1;const c=i.app={_uid:Ow++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:r0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&le(l.install)?(o.add(l),l.install(c,...u)):le(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=pe(s,r);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Na(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=ii;ii=c;try{return l()}finally{ii=u}}};return c}}let ii=null;function lp(t,e){if(dt){let n=dt.provides;const s=dt.parent&&dt.parent.provides;s===n&&(n=dt.provides=Object.create(s)),n[t]=e}}function oi(t,e,n=!1){const s=dt||bt;if(s||ii){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ii._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&le(e)?e.call(s&&s.proxy):e}}const up={},hp=()=>Object.create(up),dp=t=>Object.getPrototypeOf(t)===up;function Mw(t,e,n,s=!1){const r={},i=hp();t.propsDefaults=Object.create(null),fp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Hv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function xw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Sa(t.emitsOptions,f))continue;const p=e[f];if(c)if(Ee(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const w=_r(f);r[w]=ml(c,a,w,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{fp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!Ee(e,h)&&((u=Fs(h))===h||!Ee(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ml(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Ee(e,h))&&(delete i[h],l=!0)}l&&yn(t.attrs,"set","")}function fp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ni(c))continue;const l=e[c];let u;r&&Ee(r,u=_r(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Sa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Ae(n),l=a||ke;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ml(r,c,h,l[h],t,!Ee(l,h))}}return o}function ml(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Ee(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&le(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=$i(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Fs(n))&&(s=!0))}return s}function mp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!le(t)){const u=h=>{c=!0;const[f,p]=mp(h,e,!0);Je(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return xe(t)&&s.set(t,rr),rr;if(ne(i))for(let u=0;u<i.length;u++){const h=_r(i[u]);Zh(h)&&(o[h]=ke)}else if(i)for(const u in i){const h=_r(u);if(Zh(h)){const f=i[u],p=o[h]=ne(f)||le(f)?{type:f}:Je({},f);if(p){const w=nd(Boolean,p.type),g=nd(String,p.type);p[0]=w>-1,p[1]=g<0||w<g,(w>-1||Ee(p,"default"))&&a.push(h)}}}const l=[o,a];return xe(t)&&s.set(t,l),l}function Zh(t){return t[0]!=="$"&&!ni(t)}function ed(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function td(t,e){return ed(t)===ed(e)}function nd(t,e){return ne(e)?e.findIndex(n=>td(n,t)):le(e)&&td(e,t)?0:-1}const pp=t=>t[0]==="_"||t==="$stable",Eu=t=>ne(t)?t.map(Yt):[Yt(t)],Lw=(t,e,n)=>{if(e._n)return e;const s=rw((...r)=>Eu(e(...r)),n);return s._c=!1,s},gp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(pp(r))continue;const i=t[r];if(le(i))e[r]=Lw(r,i,s);else if(i!=null){const o=Eu(i);e[r]=()=>o}}},_p=(t,e)=>{const n=Eu(e);t.slots.default=()=>n},Fw=(t,e)=>{const n=t.slots=hp();if(t.vnode.shapeFlag&32){const s=e._;s?(Je(n,e),Dm(n,"_",s,!0)):gp(e,n)}else e&&_p(t,e)},Uw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,gp(e,r)),o=e}else e&&(_p(t,e),o={default:1});if(i)for(const a in r)!pp(a)&&o[a]==null&&delete r[a]};function pl(t,e,n,s,r=!1){if(ne(t)){t.forEach((f,p)=>pl(f,e&&(ne(e)?e[p]:e),n,s,r));return}if(Vo(s)&&!r)return;const i=s.shapeFlag&4?Na(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ge(l)?(u[l]=null,Ee(h,l)&&(h[l]=null)):wt(l)&&(l.value=null)),le(c))qn(c,a,12,[o,u]);else{const f=Ge(c),p=wt(c);if(f||p){const w=()=>{if(t.f){const g=f?Ee(h,c)?h[c]:u[c]:c.value;r?ne(g)&&ou(g,i):ne(g)?g.includes(i)||g.push(i):f?(u[c]=[i],Ee(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,Ee(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Tt(w,n)):w()}}}const Tt=hw;function $w(t){return Bw(t)}function Bw(t,e){const n=Nm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Mt,insertStaticContent:w}=t,g=(m,_,E,b=null,R=null,V=null,j=void 0,M=null,$=!!_.dynamicChildren)=>{if(m===_)return;m&&!Hr(m,_)&&(b=Gs(m),It(m,R,V,!0),m=null),_.patchFlag===-2&&($=!1,_.dynamicChildren=null);const{type:P,ref:H,shapeFlag:X}=_;switch(P){case ka:v(m,_,E,b);break;case Ps:k(m,_,E,b);break;case kc:m==null&&C(_,E,b,j);break;case De:J(m,_,E,b,R,V,j,M,$);break;default:X&1?W(m,_,E,b,R,V,j,M,$):X&6?te(m,_,E,b,R,V,j,M,$):(X&64||X&128)&&P.process(m,_,E,b,R,V,j,M,$,kn)}H!=null&&R&&pl(H,m&&m.ref,V,_||m,!_)},v=(m,_,E,b)=>{if(m==null)s(_.el=a(_.children),E,b);else{const R=_.el=m.el;_.children!==m.children&&l(R,_.children)}},k=(m,_,E,b)=>{m==null?s(_.el=c(_.children||""),E,b):_.el=m.el},C=(m,_,E,b)=>{[m.el,m.anchor]=w(m.children,_,E,b,m.el,m.anchor)},L=({el:m,anchor:_},E,b)=>{let R;for(;m&&m!==_;)R=f(m),s(m,E,b),m=R;s(_,E,b)},F=({el:m,anchor:_})=>{let E;for(;m&&m!==_;)E=f(m),r(m),m=E;r(_)},W=(m,_,E,b,R,V,j,M,$)=>{_.type==="svg"?j="svg":_.type==="math"&&(j="mathml"),m==null?U(_,E,b,R,V,j,M,$):qe(m,_,R,V,j,M,$)},U=(m,_,E,b,R,V,j,M)=>{let $,P;const{props:H,shapeFlag:X,transition:y,dirs:I}=m;if($=m.el=o(m.type,V,H&&H.is,H),X&8?u($,m.children):X&16&&_e(m.children,$,null,b,R,Pc(m,V),j,M),I&&ds(m,null,b,"created"),se($,m,m.scopeId,j,b),H){for(const K in H)K!=="value"&&!ni(K)&&i($,K,null,H[K],V,m.children,b,R,Ft);"value"in H&&i($,"value",null,H.value,V),(P=H.onVnodeBeforeMount)&&Gt(P,b,m)}I&&ds(m,null,b,"beforeMount");const T=jw(R,y);T&&y.beforeEnter($),s($,_,E),((P=H&&H.onVnodeMounted)||T||I)&&Tt(()=>{P&&Gt(P,b,m),T&&y.enter($),I&&ds(m,null,b,"mounted")},R)},se=(m,_,E,b,R)=>{if(E&&p(m,E),b)for(let V=0;V<b.length;V++)p(m,b[V]);if(R){let V=R.subTree;if(_===V){const j=R.vnode;se(m,j,j.scopeId,j.slotScopeIds,R.parent)}}},_e=(m,_,E,b,R,V,j,M,$=0)=>{for(let P=$;P<m.length;P++){const H=m[P]=M?Vn(m[P]):Yt(m[P]);g(null,H,_,E,b,R,V,j,M)}},qe=(m,_,E,b,R,V,j)=>{const M=_.el=m.el;let{patchFlag:$,dynamicChildren:P,dirs:H}=_;$|=m.patchFlag&16;const X=m.props||ke,y=_.props||ke;let I;if(E&&fs(E,!1),(I=y.onVnodeBeforeUpdate)&&Gt(I,E,_,m),H&&ds(_,m,E,"beforeUpdate"),E&&fs(E,!0),P?Ue(m.dynamicChildren,P,M,E,b,Pc(_,R),V):j||ue(m,_,M,null,E,b,Pc(_,R),V,!1),$>0){if($&16)Z(M,_,X,y,E,b,R);else if($&2&&X.class!==y.class&&i(M,"class",null,y.class,R),$&4&&i(M,"style",X.style,y.style,R),$&8){const T=_.dynamicProps;for(let K=0;K<T.length;K++){const ce=T[K],de=X[ce],Pe=y[ce];(Pe!==de||ce==="value")&&i(M,ce,de,Pe,R,m.children,E,b,Ft)}}$&1&&m.children!==_.children&&u(M,_.children)}else!j&&P==null&&Z(M,_,X,y,E,b,R);((I=y.onVnodeUpdated)||H)&&Tt(()=>{I&&Gt(I,E,_,m),H&&ds(_,m,E,"updated")},b)},Ue=(m,_,E,b,R,V,j)=>{for(let M=0;M<_.length;M++){const $=m[M],P=_[M],H=$.el&&($.type===De||!Hr($,P)||$.shapeFlag&70)?h($.el):E;g($,P,H,null,b,R,V,j,!0)}},Z=(m,_,E,b,R,V,j)=>{if(E!==b){if(E!==ke)for(const M in E)!ni(M)&&!(M in b)&&i(m,M,E[M],null,j,_.children,R,V,Ft);for(const M in b){if(ni(M))continue;const $=b[M],P=E[M];$!==P&&M!=="value"&&i(m,M,P,$,j,_.children,R,V,Ft)}"value"in b&&i(m,"value",E.value,b.value,j)}},J=(m,_,E,b,R,V,j,M,$)=>{const P=_.el=m?m.el:a(""),H=_.anchor=m?m.anchor:a("");let{patchFlag:X,dynamicChildren:y,slotScopeIds:I}=_;I&&(M=M?M.concat(I):I),m==null?(s(P,E,b),s(H,E,b),_e(_.children||[],E,H,R,V,j,M,$)):X>0&&X&64&&y&&m.dynamicChildren?(Ue(m.dynamicChildren,y,E,R,V,j,M),(_.key!=null||R&&_===R.subTree)&&yp(m,_,!0)):ue(m,_,E,H,R,V,j,M,$)},te=(m,_,E,b,R,V,j,M,$)=>{_.slotScopeIds=M,m==null?_.shapeFlag&512?R.ctx.activate(_,E,b,j,$):me(_,E,b,R,V,j,$):Me(m,_,$)},me=(m,_,E,b,R,V,j)=>{const M=m.component=Yw(m,b,R);if(ip(m)&&(M.ctx.renderer=kn),Xw(M),M.asyncDep){if(R&&R.registerDep(M,be),!m.el){const $=M.subTree=pe(Ps);k(null,$,_,E)}}else be(M,m,_,E,R,V,j)},Me=(m,_,E)=>{const b=_.component=m.component;if(aw(m,_,E))if(b.asyncDep&&!b.asyncResolved){he(b,_,E);return}else b.next=_,ew(b.update),b.effect.dirty=!0,b.update();else _.el=m.el,b.vnode=_},be=(m,_,E,b,R,V,j)=>{const M=()=>{if(m.isMounted){let{next:H,bu:X,u:y,parent:I,vnode:T}=m;{const et=vp(m);if(et){H&&(H.el=T.el,he(m,H,j)),et.asyncDep.then(()=>{m.isUnmounted||M()});return}}let K=H,ce;fs(m,!1),H?(H.el=T.el,he(m,H,j)):H=T,X&&No(X),(ce=H.props&&H.props.onVnodeBeforeUpdate)&&Gt(ce,I,H,T),fs(m,!0);const de=Sc(m),Pe=m.subTree;m.subTree=de,g(Pe,de,h(Pe.el),Gs(Pe),m,R,V),H.el=de.el,K===null&&cw(m,de.el),y&&Tt(y,R),(ce=H.props&&H.props.onVnodeUpdated)&&Tt(()=>Gt(ce,I,H,T),R)}else{let H;const{el:X,props:y}=_,{bm:I,m:T,parent:K}=m,ce=Vo(_);if(fs(m,!1),I&&No(I),!ce&&(H=y&&y.onVnodeBeforeMount)&&Gt(H,K,_),fs(m,!0),X&&ho){const de=()=>{m.subTree=Sc(m),ho(X,m.subTree,m,R,null)};ce?_.type.__asyncLoader().then(()=>!m.isUnmounted&&de()):de()}else{const de=m.subTree=Sc(m);g(null,de,E,b,m,R,V),_.el=de.el}if(T&&Tt(T,R),!ce&&(H=y&&y.onVnodeMounted)){const de=_;Tt(()=>Gt(H,K,de),R)}(_.shapeFlag&256||K&&Vo(K.vnode)&&K.vnode.shapeFlag&256)&&m.a&&Tt(m.a,R),m.isMounted=!0,_=E=b=null}},$=m.effect=new cu(M,Mt,()=>gu(P),m.scope),P=m.update=()=>{$.dirty&&$.run()};P.id=m.uid,fs(m,!0),P()},he=(m,_,E)=>{_.component=m;const b=m.vnode.props;m.vnode=_,m.next=null,xw(m,_.props,b,E),Uw(m,_.children,E),ts(),Kh(m),ns()},ue=(m,_,E,b,R,V,j,M,$=!1)=>{const P=m&&m.children,H=m?m.shapeFlag:0,X=_.children,{patchFlag:y,shapeFlag:I}=_;if(y>0){if(y&128){_t(P,X,E,b,R,V,j,M,$);return}else if(y&256){He(P,X,E,b,R,V,j,M,$);return}}I&8?(H&16&&Ft(P,R,V),X!==P&&u(E,X)):H&16?I&16?_t(P,X,E,b,R,V,j,M,$):Ft(P,R,V,!0):(H&8&&u(E,""),I&16&&_e(X,E,b,R,V,j,M,$))},He=(m,_,E,b,R,V,j,M,$)=>{m=m||rr,_=_||rr;const P=m.length,H=_.length,X=Math.min(P,H);let y;for(y=0;y<X;y++){const I=_[y]=$?Vn(_[y]):Yt(_[y]);g(m[y],I,E,null,R,V,j,M,$)}P>H?Ft(m,R,V,!0,!1,X):_e(_,E,b,R,V,j,M,$,X)},_t=(m,_,E,b,R,V,j,M,$)=>{let P=0;const H=_.length;let X=m.length-1,y=H-1;for(;P<=X&&P<=y;){const I=m[P],T=_[P]=$?Vn(_[P]):Yt(_[P]);if(Hr(I,T))g(I,T,E,null,R,V,j,M,$);else break;P++}for(;P<=X&&P<=y;){const I=m[X],T=_[y]=$?Vn(_[y]):Yt(_[y]);if(Hr(I,T))g(I,T,E,null,R,V,j,M,$);else break;X--,y--}if(P>X){if(P<=y){const I=y+1,T=I<H?_[I].el:b;for(;P<=y;)g(null,_[P]=$?Vn(_[P]):Yt(_[P]),E,T,R,V,j,M,$),P++}}else if(P>y)for(;P<=X;)It(m[P],R,V,!0),P++;else{const I=P,T=P,K=new Map;for(P=T;P<=y;P++){const tt=_[P]=$?Vn(_[P]):Yt(_[P]);tt.key!=null&&K.set(tt.key,P)}let ce,de=0;const Pe=y-T+1;let et=!1,us=0;const Ct=new Array(Pe);for(P=0;P<Pe;P++)Ct[P]=0;for(P=I;P<=X;P++){const tt=m[P];if(de>=Pe){It(tt,R,V,!0);continue}let Nt;if(tt.key!=null)Nt=K.get(tt.key);else for(ce=T;ce<=y;ce++)if(Ct[ce-T]===0&&Hr(tt,_[ce])){Nt=ce;break}Nt===void 0?It(tt,R,V,!0):(Ct[Nt-T]=P+1,Nt>=us?us=Nt:et=!0,g(tt,_[Nt],E,null,R,V,j,M,$),de++)}const hs=et?qw(Ct):rr;for(ce=hs.length-1,P=Pe-1;P>=0;P--){const tt=T+P,Nt=_[tt],fo=tt+1<H?_[tt+1].el:b;Ct[P]===0?g(null,Nt,E,fo,R,V,j,M,$):et&&(ce<0||P!==hs[ce]?Kt(Nt,E,fo,2):ce--)}}},Kt=(m,_,E,b,R=null)=>{const{el:V,type:j,transition:M,children:$,shapeFlag:P}=m;if(P&6){Kt(m.component.subTree,_,E,b);return}if(P&128){m.suspense.move(_,E,b);return}if(P&64){j.move(m,_,E,kn);return}if(j===De){s(V,_,E);for(let X=0;X<$.length;X++)Kt($[X],_,E,b);s(m.anchor,_,E);return}if(j===kc){L(m,_,E);return}if(b!==2&&P&1&&M)if(b===0)M.beforeEnter(V),s(V,_,E),Tt(()=>M.enter(V),R);else{const{leave:X,delayLeave:y,afterLeave:I}=M,T=()=>s(V,_,E),K=()=>{X(V,()=>{T(),I&&I()})};y?y(V,T,K):K()}else s(V,_,E)},It=(m,_,E,b=!1,R=!1)=>{const{type:V,props:j,ref:M,children:$,dynamicChildren:P,shapeFlag:H,patchFlag:X,dirs:y}=m;if(M!=null&&pl(M,null,E,m,!0),H&256){_.ctx.deactivate(m);return}const I=H&1&&y,T=!Vo(m);let K;if(T&&(K=j&&j.onVnodeBeforeUnmount)&&Gt(K,_,m),H&6)Ac(m.component,E,b);else{if(H&128){m.suspense.unmount(E,b);return}I&&ds(m,null,_,"beforeUnmount"),H&64?m.type.remove(m,_,E,R,kn,b):P&&(V!==De||X>0&&X&64)?Ft(P,_,E,!1,!0):(V===De&&X&384||!R&&H&16)&&Ft($,_,E),b&&co(m)}(T&&(K=j&&j.onVnodeUnmounted)||I)&&Tt(()=>{K&&Gt(K,_,m),I&&ds(m,null,_,"unmounted")},E)},co=m=>{const{type:_,el:E,anchor:b,transition:R}=m;if(_===De){Pn(E,b);return}if(_===kc){F(m);return}const V=()=>{r(E),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(m.shapeFlag&1&&R&&!R.persisted){const{leave:j,delayLeave:M}=R,$=()=>j(E,V);M?M(m.el,V,$):$()}else V()},Pn=(m,_)=>{let E;for(;m!==_;)E=f(m),r(m),m=E;r(_)},Ac=(m,_,E)=>{const{bum:b,scope:R,update:V,subTree:j,um:M}=m;b&&No(b),R.stop(),V&&(V.active=!1,It(j,m,_,E)),M&&Tt(M,_),Tt(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Ft=(m,_,E,b=!1,R=!1,V=0)=>{for(let j=V;j<m.length;j++)It(m[j],_,E,b,R)},Gs=m=>m.shapeFlag&6?Gs(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el);let qr=!1;const lo=(m,_,E)=>{m==null?_._vnode&&It(_._vnode,null,null,!0):g(_._vnode||null,m,_,null,null,null,E),qr||(qr=!0,Kh(),tp(),qr=!1),_._vnode=m},kn={p:g,um:It,m:Kt,r:co,mt:me,mc:_e,pc:ue,pbc:Ue,n:Gs,o:t};let uo,ho;return{render:lo,hydrate:uo,createApp:Vw(lo,uo)}}function Pc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yp(t,e,n=!1){const s=t.children,r=e.children;if(ne(s)&&ne(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Vn(r[i]),a.el=o.el),n||yp(o,a)),a.type===ka&&(a.el=o.el)}}function qw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vp(e)}const Hw=t=>t.__isTeleport,De=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),Ps=Symbol.for("v-cmt"),kc=Symbol.for("v-stc"),ai=[];let $t=null;function x(t=!1){ai.push($t=t?null:[])}function zw(){ai.pop(),$t=ai[ai.length-1]||null}let vi=1;function sd(t){vi+=t}function wp(t){return t.dynamicChildren=vi>0?$t||rr:null,zw(),vi>0&&$t&&$t.push(t),t}function B(t,e,n,s,r,i){return wp(d(t,e,n,s,r,i,!0))}function vs(t,e,n,s,r){return wp(pe(t,e,n,s,r,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function Hr(t,e){return t.type===e.type&&t.key===e.key}const Ep=({key:t})=>t??null,Mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||wt(t)||le(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,s=0,r=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ep(e),ref:e&&Mo(e),scopeId:Ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:bt};return a?(Iu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),vi>0&&!o&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const pe=Ww;function Ww(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===lw)&&(t=Ps),gl(t)){const a=yr(t,e,!0);return n&&Iu(a,n),vi>0&&!i&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(n0(t)&&(t=t.__vccOpts),e){e=Kw(e);let{class:a,style:c}=e;a&&!Ge(a)&&(e.class=fe(a)),xe(c)&&(Gm(c)&&!ne(c)&&(c=Je({},c)),e.style=Nr(c))}const o=Ge(t)?1:uw(t)?128:Hw(t)?64:xe(t)?4:le(t)?2:0;return d(t,e,n,s,r,o,i,!0)}function Kw(t){return t?Gm(t)||dp(t)?Je({},t):t:null}function yr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Ip(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ep(l),ref:e&&e.ref?n&&i?ne(i)?i.concat(Mo(e)):[i,Mo(e)]:Mo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&(u.transition=c.clone(u)),u}function en(t=" ",e=0){return pe(ka,null,t,e)}function Te(t="",e=!1){return e?(x(),vs(Ps,null,t)):pe(Ps,null,t)}function Yt(t){return t==null||typeof t=="boolean"?pe(Ps):ne(t)?pe(De,null,t.slice()):typeof t=="object"?Vn(t):pe(ka,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yr(t)}function Iu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Iu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!dp(e)?e._ctx=bt:r===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),s&64?(n=16,e=[en(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ip(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=fe([e.class,s.class]));else if(r==="style")e.style=Nr([e.style,s.style]);else if(Ea(r)){const i=e[r],o=s[r];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Gt(t,e,n,s=null){jt(t,e,7,[n,s])}const Gw=cp();let Qw=0;function Yw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Gw,i={uid:Qw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mp(s,r),emitsOptions:sp(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sw.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Jw=()=>dt||bt;let Jo,_l;{const t=Nm(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),_l=e("__VUE_SSR_SETTERS__",n=>Da=n)}const $i=t=>{const e=dt;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},rd=()=>{dt&&dt.scope.off(),Jo(null)};function Tp(t){return t.vnode.shapeFlag&4}let Da=!1;function Xw(t,e=!1){e&&_l(e);const{props:n,children:s}=t.vnode,r=Tp(t);Mw(t,n,r,e),Fw(t,s);const i=r?Zw(t,e):void 0;return e&&_l(!1),i}function Zw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sw);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?t0(t):null,i=$i(t);ts();const o=qn(s,t,0,[t.props,r]);if(ns(),i(),Sm(o)){if(o.then(rd,rd),e)return o.then(a=>{id(t,a,e)}).catch(a=>{ba(a,t,0)});t.asyncDep=o}else id(t,o,e)}else Ap(t,e)}function id(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Xm(e)),Ap(t,n)}let od;function Ap(t,e,n){const s=t.type;if(!t.render){if(!e&&od&&!s.render){const r=s.template||wu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=od(r,l)}}t.render=s.render||Mt}{const r=$i(t);ts();try{Cw(t)}finally{ns(),r()}}}const e0={get(t,e){return St(t,"get",""),t[e]}};function t0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,e0),slots:t.slots,emit:t.emit,expose:e}}function Na(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xm(zv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ri)return ri[n](t)},has(e,n){return n in e||n in ri}}))}function n0(t){return le(t)&&"__vccOpts"in t}const Ie=(t,e)=>Wv(t,e,Da);function s0(t,e,n){const s=arguments.length;return s===2?xe(e)&&!ne(e)?gl(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gl(n)&&(n=[n]),pe(t,e,n))}const r0="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const i0="http://www.w3.org/2000/svg",o0="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,ad=Mn&&Mn.createElement("template"),a0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Mn.createElementNS(i0,t):e==="mathml"?Mn.createElementNS(o0,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ad.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=ad.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},c0=Symbol("_vtc");function l0(t,e,n){const s=t[c0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cd=Symbol("_vod"),u0=Symbol("_vsh"),h0=Symbol(""),d0=/(^|;)\s*display\s*:/;function f0(t,e,n){const s=t.style,r=Ge(n);let i=!1;if(n&&!r){if(e)if(Ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xo(s,a,"")}else for(const o in e)n[o]==null&&xo(s,o,"");for(const o in n)o==="display"&&(i=!0),xo(s,o,n[o])}else if(r){if(e!==n){const o=s[h0];o&&(n+=";"+o),s.cssText=n,i=d0.test(n)}}else e&&t.removeAttribute("style");cd in t&&(t[cd]=i?s.display:"",t[u0]&&(s.display="none"))}const ld=/\s*!important$/;function xo(t,e,n){if(ne(n))n.forEach(s=>xo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=m0(t,e);ld.test(n)?t.setProperty(Fs(s),n.replace(ld,""),"important"):t[s]=n}}const ud=["Webkit","Moz","ms"],Dc={};function m0(t,e){const n=Dc[e];if(n)return n;let s=_r(e);if(s!=="filter"&&s in t)return Dc[e]=s;s=km(s);for(let r=0;r<ud.length;r++){const i=ud[r]+s;if(i in t)return Dc[e]=i}return e}const hd="http://www.w3.org/1999/xlink";function p0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hd,e.slice(6,e.length)):t.setAttributeNS(hd,e,n);else{const i=vv(e);n==null||i&&!Om(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function g0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Om(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Zs(t,e,n,s){t.addEventListener(e,n,s)}function _0(t,e,n,s){t.removeEventListener(e,n,s)}const dd=Symbol("_vei");function y0(t,e,n,s,r=null){const i=t[dd]||(t[dd]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=v0(e);if(s){const l=i[e]=I0(s,r);Zs(t,a,l,c)}else o&&(_0(t,a,o,c),i[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function v0(t){let e;if(fd.test(t)){e={};let s;for(;s=t.match(fd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fs(t.slice(2)),e]}let Nc=0;const w0=Promise.resolve(),E0=()=>Nc||(w0.then(()=>Nc=0),Nc=Date.now());function I0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(T0(s,n.value),e,5,[s])};return n.value=t,n.attached=E0(),n}function T0(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const md=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,A0=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?l0(t,s,l):e==="style"?f0(t,n,s):Ea(e)?iu(e)||y0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b0(t,e,s,l))?g0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),p0(t,e,s,l))};function b0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&md(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return md(e)&&Ge(n)?!1:e in t}const pd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>No(e,n):e};function R0(t){t.target.composing=!0}function gd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oc=Symbol("_assign"),Ss={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Oc]=pd(r);const i=s||r.props&&r.props.type==="number";Zs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ol(a)),t[Oc](a)}),n&&Zs(t,"change",()=>{t.value=t.value.trim()}),e||(Zs(t,"compositionstart",R0),Zs(t,"compositionend",gd),Zs(t,"change",gd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Oc]=pd(i),t.composing)return;const o=(r||t.type==="number")&&!/^0\d/.test(t.value)?ol(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},S0=["ctrl","shift","alt","meta"],C0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>S0.some(n=>t[`${n}Key`]&&!e.includes(n))},je=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=C0[e[o]];if(a&&a(r,e))return}return t(r,...i)})},P0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Fs(r.key);if(e.some(o=>o===i||P0[o]===i))return t(r)})},k0=Je({patchProp:A0},a0);let _d;function D0(){return _d||(_d=$w(k0))}const N0=(...t)=>{const e=D0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=V0(s);if(!r)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,O0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function O0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function V0(t){return Ge(t)?document.querySelector(t):t}var yd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},M0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):M0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new x0;const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const w=l<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class x0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L0=function(t){const e=Rp(t);return Sp.encodeByteArray(e,!0)},Xo=function(t){return L0(t).replace(/\./g,"")},Cp=function(t){try{return Sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function F0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const U0=()=>F0().__FIREBASE_DEFAULTS__,$0=()=>{if(typeof process>"u"||typeof yd>"u")return;const t=yd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},B0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cp(t[1]);return e&&JSON.parse(e)},Oa=()=>{try{return U0()||$0()||B0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pp=t=>{var e,n;return(n=(e=Oa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},j0=t=>{const e=Pp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kp=()=>{var t;return(t=Oa())===null||t===void 0?void 0:t.config},Dp=t=>{var e;return(e=Oa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function H0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function z0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function W0(){var t;const e=(t=Oa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function K0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function G0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q0(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y0(){return!W0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function J0(){try{return typeof indexedDB=="object"}catch{return!1}}function X0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="FirebaseError";class Rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Z0,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?eE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Rn(r,a,s)}}function eE(t,e){return t.replace(tE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const tE=/\{\$([^}]+)}/g;function nE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(vd(i)&&vd(o)){if(!vr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Qr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sE(t,e){const n=new rE(t,e);return n.subscribe.bind(n)}class rE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");iE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Vc),r.error===void 0&&(r.error=Vc),r.complete===void 0&&(r.complete=Vc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}/**
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
 */const ps="[DEFAULT]";/**
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
 */class oE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new q0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cE(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aE(t){return t===ps?void 0:t}function cE(t){return t.instantiationMode==="EAGER"}/**
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
 */class lE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const uE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},hE=ye.INFO,dE={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},fE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=dE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tu{constructor(e){this.name=e,this._logLevel=hE,this._logHandler=fE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const mE=(t,e)=>e.some(n=>t instanceof n);let wd,Ed;function pE(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return Ed||(Ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Np=new WeakMap,yl=new WeakMap,Op=new WeakMap,Mc=new WeakMap,Au=new WeakMap;function _E(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Np.set(n,t)}).catch(()=>{}),Au.set(e,t),e}function yE(t){if(yl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yl.set(t,e)}let vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vE(t){vl=t(vl)}function wE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xc(this),e,...n);return Op.set(s,e.sort?e.sort():[e]),Hn(s)}:gE().includes(t)?function(...e){return t.apply(xc(this),e),Hn(Np.get(this))}:function(...e){return Hn(t.apply(xc(this),e))}}function EE(t){return typeof t=="function"?wE(t):(t instanceof IDBTransaction&&yE(t),mE(t,pE())?new Proxy(t,vl):t)}function Hn(t){if(t instanceof IDBRequest)return _E(t);if(Mc.has(t))return Mc.get(t);const e=EE(t);return e!==t&&(Mc.set(t,e),Au.set(e,t)),e}const xc=t=>Au.get(t);function IE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Hn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Hn(o.result),c.oldVersion,c.newVersion,Hn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const TE=["get","getKey","getAll","getAllKeys","count"],AE=["put","add","delete","clear"],Lc=new Map;function Id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=AE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||TE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Lc.set(e,i),i}vE(t=>({...t,get:(e,n,s)=>Id(e,n)||t.get(e,n,s),has:(e,n)=>!!Id(e,n)||t.has(e,n)}));/**
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
 */class bE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function RE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wl="@firebase/app",Td="0.10.2";/**
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
 */const Ds=new Tu("@firebase/app"),SE="@firebase/app-compat",CE="@firebase/analytics-compat",PE="@firebase/analytics",kE="@firebase/app-check-compat",DE="@firebase/app-check",NE="@firebase/auth",OE="@firebase/auth-compat",VE="@firebase/database",ME="@firebase/database-compat",xE="@firebase/functions",LE="@firebase/functions-compat",FE="@firebase/installations",UE="@firebase/installations-compat",$E="@firebase/messaging",BE="@firebase/messaging-compat",jE="@firebase/performance",qE="@firebase/performance-compat",HE="@firebase/remote-config",zE="@firebase/remote-config-compat",WE="@firebase/storage",KE="@firebase/storage-compat",GE="@firebase/firestore",QE="@firebase/firestore-compat",YE="firebase",JE="10.11.1";/**
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
 */const El="[DEFAULT]",XE={[wl]:"fire-core",[SE]:"fire-core-compat",[PE]:"fire-analytics",[CE]:"fire-analytics-compat",[DE]:"fire-app-check",[kE]:"fire-app-check-compat",[NE]:"fire-auth",[OE]:"fire-auth-compat",[VE]:"fire-rtdb",[ME]:"fire-rtdb-compat",[xE]:"fire-fn",[LE]:"fire-fn-compat",[FE]:"fire-iid",[UE]:"fire-iid-compat",[$E]:"fire-fcm",[BE]:"fire-fcm-compat",[jE]:"fire-perf",[qE]:"fire-perf-compat",[HE]:"fire-rc",[zE]:"fire-rc-compat",[WE]:"fire-gcs",[KE]:"fire-gcs-compat",[GE]:"fire-fst",[QE]:"fire-fst-compat","fire-js":"fire-js",[YE]:"fire-js-all"};/**
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
 */const Zo=new Map,ZE=new Map,Il=new Map;function Ad(t,e){try{t.container.addComponent(e)}catch(n){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(Il.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;Il.set(e,t);for(const n of Zo.values())Ad(n,t);for(const n of ZE.values())Ad(n,t);return!0}function bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t.settings!==void 0}/**
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
 */const eI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Bi("app","Firebase",eI);/**
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
 */class tI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=JE;function Vp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:El,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw zn.create("bad-app-name",{appName:String(r)});if(n||(n=kp()),!n)throw zn.create("no-options");const i=Zo.get(r);if(i){if(vr(n,i.options)&&vr(s,i.config))return i;throw zn.create("duplicate-app",{appName:r})}const o=new lE(r);for(const c of Il.values())o.addComponent(c);const a=new tI(n,s,o);return Zo.set(r,a),a}function Mp(t=El){const e=Zo.get(t);if(!e&&t===El&&kp())return Vp();if(!e)throw zn.create("no-app",{appName:t});return e}function Wn(t,e,n){var s;let r=(s=XE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(a.join(" "));return}wr(new ks(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const nI="firebase-heartbeat-database",sI=1,wi="firebase-heartbeat-store";let Fc=null;function xp(){return Fc||(Fc=IE(nI,sI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Fc}async function rI(t){try{const n=(await xp()).transaction(wi),s=await n.objectStore(wi).get(Lp(t));return await n.done,s}catch(e){if(e instanceof Rn)Ds.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ds.warn(n.message)}}}async function bd(t,e){try{const s=(await xp()).transaction(wi,"readwrite");await s.objectStore(wi).put(e,Lp(t)),await s.done}catch(n){if(n instanceof Rn)Ds.warn(n.message);else{const s=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ds.warn(s.message)}}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iI=1024,oI=30*24*60*60*1e3;class aI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=oI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rd(),{heartbeatsToSend:s,unsentEntries:r}=cI(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rd(){return new Date().toISOString().substring(0,10)}function cI(t,e=iI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Sd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Sd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J0()?X0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sd(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uI(t){wr(new ks("platform-logger",e=>new bE(e),"PRIVATE")),wr(new ks("heartbeat",e=>new aI(e),"PRIVATE")),Wn(wl,Td,t),Wn(wl,Td,"esm2017"),Wn("fire-js","")}uI("");function Ru(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Fp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=Fp,Up=new Bi("auth","Firebase",Fp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Tu("@firebase/auth");function dI(t,...e){ea.logLevel<=ye.WARN&&ea.warn(`Auth (${Vr}): ${t}`,...e)}function Lo(t,...e){ea.logLevel<=ye.ERROR&&ea.error(`Auth (${Vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw Cu(t,...e)}function Ht(t,...e){return Cu(t,...e)}function Su(t,e,n){const s=Object.assign(Object.assign({},hI()),{[e]:n});return new Bi("auth","Firebase",s).create(e,{appName:t.name})}function vn(t){return Su(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Lt(t,"argument-error"),Su(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Up.create(t,...e)}function ee(t,e,...n){if(!t)throw Cu(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lo(e),new Error(e)}function wn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mI(){return Cd()==="http:"||Cd()==="https:"}function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mI()||K0()||"connection"in navigator)?navigator.onLine:!0}function gI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=z0()||G0()}get(){return pI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new qi(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,s,r={}){return Bp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ji(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$p.fetch()(jp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},_I),e);try{const r=new wI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Su(t,u,l);Lt(t,u)}}catch(r){if(r instanceof Rn)throw r;Lt(t,"network-request-failed",{message:String(r)})}}async function Hi(t,e,n,s,r={}){const i=await Sn(t,e,n,s,r);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Pu(t.config,r):`${t.config.apiScheme}://${r}`}function vI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),yI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ht(t,e,s);return r.customData._tokenResponse=n,r}function Pd(t){return t!==void 0&&t.enterprise!==void 0}class EI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function II(t,e){return Sn(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function qp(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AI(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=ku(s);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ci(Uc(r.auth_time)),issuedAtTime:ci(Uc(r.iat)),expirationTime:ci(Uc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function ku(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cp(n);return r?JSON.parse(r):(Lo("Failed to decode base64 JWT payload"),null)}catch(r){return Lo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function kd(t){const e=ku(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rn&&bI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function bI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Er(t,qp(n,{idToken:s}));ee(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hp(i.providerUserInfo):[],a=CI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Al(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function SI(t){const e=$e(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Hp(t){return t.map(e=>{var{providerId:n}=e,s=Ru(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e){const n=await Bp(t,{},async()=>{const s=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=jp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$p.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kI(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=kd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await PI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new cr;return s&&(ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Al(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Er(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AI(this,e)}reload(){return SI(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await Er(this,TI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:F,isAnonymous:W,providerData:U,stsTokenManager:se}=n;ee(L&&se,e,"internal-error");const _e=cr.fromJSON(this.name,se);ee(typeof L=="string",e,"internal-error"),Nn(h,e.name),Nn(f,e.name),ee(typeof F=="boolean",e,"internal-error"),ee(typeof W=="boolean",e,"internal-error"),Nn(p,e.name),Nn(w,e.name),Nn(g,e.name),Nn(v,e.name),Nn(k,e.name),Nn(C,e.name);const qe=new mn({uid:L,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:W,photoURL:w,phoneNumber:p,tenantId:g,stsTokenManager:_e,createdAt:k,lastLoginAt:C});return U&&Array.isArray(U)&&(qe.providerData=U.map(Ue=>Object.assign({},Ue))),v&&(qe._redirectEventId=v),qe}static async _fromIdTokenResponse(e,n,s=!1){const r=new cr;r.updateFromServerResponse(n);const i=new mn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ee(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Hp(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new cr;a.updateFromIdToken(s);const c=new mn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Al(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new Map;function pn(t){wn(t instanceof Function,"Expected a class definition");let e=Dd.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dd.set(t,e),e)}/**
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
 */class zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zp.type="NONE";const Nd=zp;/**
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
 */function Fo(t,e,n){return`firebase:${t}:${e}:${n}`}class lr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Fo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new lr(pn(Nd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||pn(Nd);const o=Fo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=mn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new lr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new lr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yp(e))return"Blackberry";if(Jp(e))return"Webos";if(Du(e))return"Safari";if((e.includes("chrome/")||Kp(e))&&!e.includes("edge/"))return"Chrome";if(Qp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wp(t=at()){return/firefox\//i.test(t)}function Du(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kp(t=at()){return/crios\//i.test(t)}function Gp(t=at()){return/iemobile/i.test(t)}function Qp(t=at()){return/android/i.test(t)}function Yp(t=at()){return/blackberry/i.test(t)}function Jp(t=at()){return/webos/i.test(t)}function Va(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DI(t=at()){var e;return Va(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NI(){return Q0()&&document.documentMode===10}function Xp(t=at()){return Va(t)||Qp(t)||Jp(t)||Yp(t)||/windows phone/i.test(t)||Gp(t)}function OI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e=[]){let n;switch(t){case"Browser":n=Od(at());break;case"Worker":n=`${Od(at())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
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
 */class VI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function MI(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",is(t,e))}/**
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
 */const xI=6;class LI{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vd(this),this.idTokenSubscription=new Vd(this),this.beforeStateQueue=new VI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qp(this,{idToken:e}),s=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(vn(this));const n=e?$e(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MI(this),n=new LI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await kI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return $e(t)}class Vd{constructor(e){this.auth=e,this.observer=null,this.addObserver=sE(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UI(t){Ma=t}function eg(t){return Ma.loadJS(t)}function $I(){return Ma.recaptchaEnterpriseScript}function BI(){return Ma.gapiScript}function jI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qI="recaptcha-enterprise",HI="NO_RECAPTCHA";class zI{constructor(e){this.type=qI,this.auth=os(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{II(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new EI(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Pd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(HI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Pd(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$I();c.length!==0&&(c+=a),eg(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Md(t,e,n,s=!1){const r=new zI(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bl(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Md(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Md(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t,e){const n=bu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(vr(i,e??{}))return r;Lt(r,"already-initialized")}return n.initialize({options:e})}function KI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function GI(t,e,n){const s=os(t);ee(s._canInitEmulator,s,"emulator-config-failed"),ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=tg(e),{host:o,port:a}=QI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),YI()}function tg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QI(t){const e=tg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:xd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:xd(o)}}}function xd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function JI(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){return Hi(t,"POST","/v1/accounts:signInWithPassword",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}async function eT(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Nu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,n,"signInWithPassword",XI);case"emailLink":return ZI(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,s,"signUpPassword",JI);case"emailLink":return eT(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e){return Hi(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="http://localhost";class Ns extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ru(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ns(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ur(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}buildRequest(){const e={requestUri:tT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sT(t){const e=Qr(Yr(t)).link,n=e?Qr(Yr(e)).deep_link_id:null,s=Qr(Yr(t)).deep_link_id;return(s?Qr(Yr(s)).link:null)||s||n||e||t}class Ou{constructor(e){var n,s,r,i,o,a;const c=Qr(Yr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=nT((r=c.mode)!==null&&r!==void 0?r:null);ee(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sT(e);try{return new Ou(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ou.parseLink(n);return ee(s,"argument-error"),Ei._fromEmailAndCode(e,s.code,s.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zi extends Vu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends zi{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends zi{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends zi{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fn.credential(n,s)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(t,e){return Hi(t,"POST","/v1/accounts:signUp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await mn._fromIdTokenResponse(e,s,r),o=Ld(s);return new Os({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ld(s);return new Os({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Rn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new na(e,n,s,r)}}function ng(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,s):i})}async function iT(t,e,n=!1){const s=await Er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Os._forOperation(t,"link",s)}/**
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
 */async function oT(t,e,n=!1){const{auth:s}=t;if(Bt(s.app))return Promise.reject(vn(s));const r="reauthenticate";try{const i=await Er(t,ng(s,r,e,t),n);ee(i.idToken,s,"internal-error");const o=ku(i.idToken);ee(o,s,"internal-error");const{sub:a}=o;return ee(t.uid===a,s,"user-mismatch"),Os._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e,n=!1){if(Bt(t.app))return Promise.reject(vn(t));const s="signIn",r=await ng(t,s,e),i=await Os._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function aT(t,e){return sg(os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cT(t,e,n){if(Bt(t.app))return Promise.reject(vn(t));const s=os(t),o=await bl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&rg(t),c}),a=await Os._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function lT(t,e,n){return Bt(t.app)?Promise.reject(vn(t)):aT($e(t),Mr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&rg(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=$e(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Er(s,uT(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function hT(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function dT(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function fT(t,e,n,s){return $e(t).onAuthStateChanged(e,n,s)}function mT(t){return $e(t).signOut()}const sa="__sak";/**
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
 */class ig{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){const t=at();return Du(t)||Va(t)}const gT=1e3,_T=10;class og extends ig{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pT()&&OI(),this.fallbackToPolling=Xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);NI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_T):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}og.type="LOCAL";const yT=og;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends ig{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ag.type="SESSION";const cg=ag;/**
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
 */function vT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new xa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=xu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function ET(t){rn().location.href=t}/**
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
 */function lg(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function IT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AT(){return lg()?self:null}/**
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
 */const ug="firebaseLocalStorageDb",bT=1,ra="firebaseLocalStorage",hg="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([ra],e?"readwrite":"readonly").objectStore(ra)}function RT(){const t=indexedDB.deleteDatabase(ug);return new Wi(t).toPromise()}function Rl(){const t=indexedDB.open(ug,bT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ra,{keyPath:hg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ra)?e(s):(s.close(),await RT(),e(await Rl()))})})}async function Fd(t,e,n){const s=La(t,!0).put({[hg]:e,value:n});return new Wi(s).toPromise()}async function ST(t,e){const n=La(t,!1).get(e),s=await new Wi(n).toPromise();return s===void 0?null:s.value}function Ud(t,e){const n=La(t,!0).delete(e);return new Wi(n).toPromise()}const CT=800,PT=3;class dg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(AT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IT(),!this.activeServiceWorker)return;this.sender=new wT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rl();return await Fd(e,sa,"1"),await Ud(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ST(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ud(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=La(r,!1).getAll();return new Wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dg.type="LOCAL";const kT=dg;new qi(3e4,6e4);/**
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
 */function fg(t,e){return e?pn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lu extends Nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DT(t){return sg(t.auth,new Lu(t),t.bypassAuthState)}function NT(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),oT(n,new Lu(t),t.bypassAuthState)}async function OT(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),iT(n,new Lu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DT;case"linkViaPopup":case"linkViaRedirect":return OT;case"reauthViaPopup":case"reauthViaRedirect":return NT;default:Lt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new qi(2e3,1e4);async function MT(t,e,n){if(Bt(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const s=os(t);fI(t,e,Vu);const r=fg(s,n);return new ws(s,"signInViaPopup",e,r).executeNotNull()}class ws extends mg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VT.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="pendingRedirect",Uo=new Map;class LT extends mg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const s=await FT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FT(t,e){const n=BT(e),s=$T(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function UT(t,e){Uo.set(t._key(),e)}function $T(t){return pn(t._redirectPersistence)}function BT(t){return Fo(xT,t.config.apiKey,t.name)}async function jT(t,e,n=!1){if(Bt(t.app))return Promise.reject(vn(t));const s=os(t),r=fg(s,e),o=await new LT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=10*60*1e3;class HT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!pg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qT&&this.cachedEventUids.clear(),this.cachedEventUids.has($d(e))}saveEventToCache(e){this.cachedEventUids.add($d(e)),this.lastProcessedEventTime=Date.now()}}function $d(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GT=/^https?/;async function QT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WT(t);for(const n of e)try{if(YT(n))return}catch{}Lt(t,"unauthorized-domain")}function YT(t){const e=Tl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!GT.test(n))return!1;if(KT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const JT=new qi(3e4,6e4);function Bd(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XT(t){return new Promise((e,n)=>{var s,r,i;function o(){Bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bd(),n(Ht(t,"network-request-failed"))},timeout:JT.get()})}if(!((r=(s=rn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const a=jI("iframefcb");return rn()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},eg(`${BI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $o=null,e})}let $o=null;function ZT(t){return $o=$o||XT(t),$o}/**
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
 */const eA=new qi(5e3,15e3),tA="__/auth/iframe",nA="emulator/auth/iframe",sA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pu(e,nA):`https://${t.config.authDomain}/${tA}`,s={apiKey:e.apiKey,appName:t.name,v:Vr},r=rA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ji(s).slice(1)}`}async function oA(t){const e=await ZT(t),n=rn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:iA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=rn().setTimeout(()=>{i(o)},eA.get());function c(){rn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const aA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cA=500,lA=600,uA="_blank",hA="http://localhost";class jd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dA(t,e,n,s=cA,r=lA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},aA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=at().toLowerCase();n&&(a=Kp(l)?uA:n),Wp(l)&&(e=e||hA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,w])=>`${f}${p}=${w},`,"");if(DI(l)&&a!=="_self")return fA(e||"",a),new jd(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new jd(h)}function fA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mA="__/auth/handler",pA="emulator/auth/handler",gA=encodeURIComponent("fac");async function qd(t,e,n,s,r,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vr,eventId:r};if(e instanceof Vu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof zi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${gA}=${encodeURIComponent(c)}`:"";return`${_A(t)}?${ji(a).slice(1)}${l}`}function _A({config:t}){return t.emulator?Pu(t,pA):`https://${t.authDomain}/${mA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="webStorageSupport";class yA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cg,this._completeRedirectFn=jT,this._overrideRedirectResult=UT}async _openPopup(e,n,s,r){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qd(e,n,s,Tl(),r);return dA(e,o,xu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await qd(e,n,s,Tl(),r);return ET(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(wn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await oA(e),s=new HT(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[$c];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xp()||Du()||Va()}}const vA=yA;var Hd="@firebase/auth",zd="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IA(t){wr(new ks("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zp(t)},l=new FI(s,r,i,c);return KI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),wr(new ks("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(s=>new wA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(Hd,zd,EA(t)),Wn(Hd,zd,"esm2017")}/**
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
 */const TA=5*60,AA=Dp("authIdTokenMaxAge")||TA;let Wd=null;const bA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>AA)return;const r=n==null?void 0:n.token;Wd!==r&&(Wd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function RA(t=Mp()){const e=bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WI(t,{popupRedirectResolver:vA,persistence:[kT,yT,cg]}),s=Dp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=bA(i.toString());dT(n,o,()=>o(n.currentUser)),hT(n,a=>o(a))}}const r=Pp("auth");return r&&GI(n,`http://${r}`),n}function SA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ht("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",SA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IA("Browser");var CA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,Fu=Fu||{},ie=CA||self;function Fa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ua(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PA(t){return Object.prototype.hasOwnProperty.call(t,Bc)&&t[Bc]||(t[Bc]=++kA)}var Bc="closure_uid_"+(1e9*Math.random()>>>0),kA=0;function DA(t,e,n){return t.call.apply(t.bind,arguments)}function NA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=DA:ft=NA,ft.apply(null,arguments)}function Eo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function as(){this.s=this.s,this.o=this.o}var OA=0;as.prototype.s=!1;as.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OA!=0)&&PA(this)};as.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Kd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fa(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var VA=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ie.addEventListener("test",n,e),ie.removeEventListener("test",n,e)}catch{}return t}();function Ii(t){return/^[\s\xa0]*$/.test(t)}function $a(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Zt(t){return $a().indexOf(t)!=-1}function $u(t){return $u[" "](t),t}$u[" "]=function(){};function MA(t,e){var n=Cb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xA=Zt("Opera"),Ir=Zt("Trident")||Zt("MSIE"),_g=Zt("Edge"),Sl=_g||Ir,yg=Zt("Gecko")&&!($a().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge"))&&!(Zt("Trident")||Zt("MSIE"))&&!Zt("Edge"),LA=$a().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge");function vg(){var t=ie.document;return t?t.documentMode:void 0}var Cl;e:{var jc="",qc=function(){var t=$a();if(yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(_g)return/Edge\/([\d\.]+)/.exec(t);if(Ir)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LA)return/WebKit\/(\S+)/.exec(t);if(xA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qc&&(jc=qc?qc[1]:""),Ir){var Hc=vg();if(Hc!=null&&Hc>parseFloat(jc)){Cl=String(Hc);break e}}Cl=jc}var Pl;if(ie.document&&Ir){var Gd=vg();Pl=Gd||parseInt(Cl,10)||void 0}else Pl=void 0;var FA=Pl;function Ti(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yg){e:{try{$u(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ti.$.h.call(this)}}Ze(Ti,mt);var UA={2:"touch",3:"pen",4:"mouse"};Ti.prototype.h=function(){Ti.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ba="closure_listenable_"+(1e6*Math.random()|0),$A=0;function BA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++$A,this.fa=this.ia=!1}function ja(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function jA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function wg(t){const e={};for(const n in t)e[n]=t[n];return e}const Qd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Eg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Qd.length;i++)n=Qd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qa(t){this.src=t,this.g={},this.h=0}qa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Dl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new BA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function kl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=gg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ja(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var ju="closure_lm_"+(1e6*Math.random()|0),zc={};function Ig(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ig(t,e[i],n,s,r);return null}return n=bg(n),t&&t[Ba]?t.O(e,n,Ua(s)?!!s.capture:!!s,r):qA(t,e,n,!1,s,r)}function qA(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ua(r)?!!r.capture:!!r,a=Hu(t);if(a||(t[ju]=a=new qa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=HA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)VA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ag(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HA(){function t(n){return e.call(t.src,t.listener,n)}const e=zA;return t}function Tg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tg(t,e[i],n,s,r);else s=Ua(s)?!!s.capture:!!s,n=bg(n),t&&t[Ba]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Dl(i,n,s,r),-1<n&&(ja(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dl(e,n,s,r)),(n=-1<t?e[t]:null)&&qu(n))}function qu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ba])kl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ag(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Hu(e))?(kl(n,t),n.h==0&&(n.src=null,e[ju]=null)):ja(t)}}}function Ag(t){return t in zc?zc[t]:zc[t]="on"+t}function zA(t,e){if(t.fa)t=!0;else{e=new Ti(e,this);var n=t.listener,s=t.la||t.src;t.ia&&qu(t),t=n.call(s,e)}return t}function Hu(t){return t=t[ju],t instanceof qa?t:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function bg(t){return typeof t=="function"?t:(t[Wc]||(t[Wc]=function(e){return t.handleEvent(e)}),t[Wc])}function Xe(){as.call(this),this.i=new qa(this),this.S=this,this.J=null}Ze(Xe,as);Xe.prototype[Ba]=!0;Xe.prototype.removeEventListener=function(t,e,n,s){Tg(this,t,e,n,s)};function it(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var r=e;e=new mt(s,t),Eg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Io(o,s,!0,e)&&r}if(o=e.g=t,r=Io(o,s,!0,e)&&r,r=Io(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Io(o,s,!1,e)&&r}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ja(n[s]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Xe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Io(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&kl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var zu=ie.JSON.stringify;class WA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function KA(){var t=Wu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GA{constructor(){this.h=this.g=null}add(e,n){const s=Rg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Rg=new WA(()=>new QA,t=>t.reset());class QA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function YA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function JA(t){ie.setTimeout(()=>{throw t},0)}let Ai,bi=!1,Wu=new GA,Sg=()=>{const t=ie.Promise.resolve(void 0);Ai=()=>{t.then(XA)}};var XA=()=>{for(var t;t=KA();){try{t.h.call(t.g)}catch(n){JA(n)}var e=Rg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bi=!1};function Ha(t,e){Xe.call(this),this.h=t||1,this.g=e||ie,this.j=ft(this.qb,this),this.l=Date.now()}Ze(Ha,Xe);q=Ha.prototype;q.ga=!1;q.T=null;q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(Ku(this),this.start()))}};q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ku(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}q.N=function(){Ha.$.N.call(this),Ku(this),delete this.g};function Gu(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function Cg(t){t.g=Gu(()=>{t.g=null,t.i&&(t.i=!1,Cg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ZA extends as{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cg(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){as.call(this),this.h=t,this.g={}}Ze(Ri,as);var Yd=[];function Pg(t,e,n,s){Array.isArray(n)||(n&&(Yd[0]=n.toString()),n=Yd);for(var r=0;r<n.length;r++){var i=Ig(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function kg(t){Bu(t.g,function(e,n){this.g.hasOwnProperty(n)&&qu(e)},t),t.g={}}Ri.prototype.N=function(){Ri.$.N.call(this),kg(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function za(){this.g=!0}za.prototype.Ea=function(){this.g=!1};function eb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function tb(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function sr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sb(t,n)+(s?" "+s:"")})}function nb(t,e){t.info(function(){return"TIMEOUT: "+e})}za.prototype.info=function(){};function sb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return zu(n)}catch{return e}}var $s={},Jd=null;function Wa(){return Jd=Jd||new Xe}$s.Ta="serverreachability";function Dg(t){mt.call(this,$s.Ta,t)}Ze(Dg,mt);function Si(t){const e=Wa();it(e,new Dg(e))}$s.STAT_EVENT="statevent";function Ng(t,e){mt.call(this,$s.STAT_EVENT,t),this.stat=e}Ze(Ng,mt);function vt(t){const e=Wa();it(e,new Ng(e,t))}$s.Ua="timingevent";function Og(t,e){mt.call(this,$s.Ua,t),this.size=e}Ze(Og,mt);function Ki(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Ka={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qu(){}Qu.prototype.h=null;function Xd(t){return t.h||(t.h=t.i())}function Mg(){}var Gi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yu(){mt.call(this,"d")}Ze(Yu,mt);function Ju(){mt.call(this,"c")}Ze(Ju,mt);var Nl;function Ga(){}Ze(Ga,Qu);Ga.prototype.g=function(){return new XMLHttpRequest};Ga.prototype.i=function(){return{}};Nl=new Ga;function Qi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ri(this),this.P=rb,t=Sl?125:void 0,this.V=new Ha(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xg}function xg(){this.i=null,this.g="",this.h=!1}var rb=45e3,Lg={},Ol={};q=Qi.prototype;q.setTimeout=function(t){this.P=t};function Vl(t,e,n){t.L=1,t.A=Ya(En(e)),t.u=n,t.S=!0,Fg(t,null)}function Fg(t,e){t.G=Date.now(),Yi(t),t.B=En(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),Wg(n.i,"t",s),t.o=0,n=t.l.J,t.h=new xg,t.g=f_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new ZA(ft(t.Pa,t,t.g),t.O)),Pg(t.U,t.g,"readystatechange",t.nb),e=t.I?wg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Si(),eb(t.j,t.v,t.B,t.m,t.W,t.u)}q.nb=function(t){t=t.target;const e=this.M;e&&tn(t)==3?e.l():this.Pa(t)};q.Pa=function(t){try{if(t==this.g)e:{const u=tn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sl||this.g&&(this.h.h||this.g.ja()||nf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Si(3):Si(2)),Qa(this);var n=this.g.da();this.ca=n;t:if(Ug(this)){var s=nf(this.g);t="";var r=s.length,i=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Es(this),li(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,tb(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ii(a)){var l=a;break t}}l=null}if(n=l)sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ml(this,n);else{this.i=!1,this.s=3,vt(12),Es(this),li(this);break e}}this.S?($g(this,u,o),Sl&&this.i&&u==3&&(Pg(this.U,this.V,"tick",this.mb),this.V.start())):(sr(this.j,this.m,o,null),Ml(this,o)),u==4&&Es(this),this.i&&!this.J&&(u==4?l_(this.l,this):(this.i=!1,Yi(this)))}else bb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Es(this),li(this)}}}catch{}finally{}};function Ug(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function $g(t,e,n){let s=!0,r;for(;!t.J&&t.o<n.length;)if(r=ib(t,n),r==Ol){e==4&&(t.s=4,vt(14),s=!1),sr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Lg){t.s=4,vt(15),sr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else sr(t.j,t.m,r,null),Ml(t,r);Ug(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,vt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sh(e),e.M=!0,vt(11))):(sr(t.j,t.m,n,"[Invalid Chunked Response]"),Es(t),li(t))}q.mb=function(){if(this.g){var t=tn(this.g),e=this.g.ja();this.o<e.length&&(Qa(this),$g(this,t,e),this.i&&t!=4&&Yi(this))}};function ib(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?Ol:(n=Number(e.substring(n,s)),isNaN(n)?Lg:(s+=1,s+n>e.length?Ol:(e=e.slice(s,s+n),t.o=s+n,e)))}q.cancel=function(){this.J=!0,Es(this)};function Yi(t){t.Y=Date.now()+t.P,Bg(t,t.P)}function Bg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ki(ft(t.lb,t),e)}function Qa(t){t.C&&(ie.clearTimeout(t.C),t.C=null)}q.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(nb(this.j,this.B),this.L!=2&&(Si(),vt(17)),Es(this),this.s=2,li(this)):Bg(this,this.Y-t)};function li(t){t.l.H==0||t.J||l_(t.l,t)}function Es(t){Qa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ku(t.V),kg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ml(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xl(n.i,t))){if(!t.K&&xl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)aa(n),Za(n);else break e;nh(n),vt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ki(ft(n.ib,n),6e3));if(1>=Qg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Is(n,11)}else if((t.K||n.g==t)&&aa(n),!Ii(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xu(i,i.h),i.h=null))}if(s.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,Ne(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=d_(s,s.J?s.pa:null,s.Y),o.K){Yg(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.C&&(Qa(a),Yi(a)),s.g=o}else a_(s);0<n.j.length&&ec(n)}else l[0]!="stop"&&l[0]!="close"||Is(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Is(n,7):th(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Si(4)}catch{}}function ob(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ab(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function jg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ab(t),s=ob(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Cs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Cs){this.h=t.h,ia(this,t.j),this.s=t.s,this.g=t.g,oa(this,t.m),this.l=t.l;var e=t.i,n=new Ci;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zd(this,n),this.o=t.o}else t&&(e=String(t).match(qg))?(this.h=!1,ia(this,e[1]||"",!0),this.s=Jr(e[2]||""),this.g=Jr(e[3]||"",!0),oa(this,e[4]),this.l=Jr(e[5]||"",!0),Zd(this,e[6]||"",!0),this.o=Jr(e[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}Cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xr(e,ef,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xr(e,ef,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xr(n,n.charAt(0)=="/"?hb:ub,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xr(n,fb)),t.join("")};function En(t){return new Cs(t)}function ia(t,e,n){t.j=n?Jr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zd(t,e,n){e instanceof Ci?(t.i=e,mb(t.i,t.h)):(n||(e=Xr(e,db)),t.i=new Ci(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Ya(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ef=/[#\/\?@]/g,ub=/[#\?:]/g,hb=/[#\?]/g,db=/[#\?@]/g,fb=/#/g;function Ci(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cs(t){t.g||(t.g=new Map,t.h=0,t.i&&cb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=Ci.prototype;q.add=function(t,e){cs(this),this.i=null,t=xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hg(t,e){cs(t),e=xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zg(t,e){return cs(t),e=xr(t,e),t.g.has(e)}q.forEach=function(t,e){cs(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};q.ta=function(){cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};q.Z=function(t){cs(this);let e=[];if(typeof t=="string")zg(this,t)&&(e=e.concat(this.g.get(xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return cs(this),this.i=null,t=xr(this,t),zg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Wg(t,e,n){Hg(t,e),0<n.length&&(t.i=null,t.g.set(xr(t,e),Uu(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mb(t,e){e&&!t.j&&(cs(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Hg(this,s),Wg(this,r,n))},t)),t.j=e}var pb=class{constructor(t,e){this.g=t,this.map=e}};function Kg(t){this.l=t||gb,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gb=10;function Gg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qg(t){return t.h?1:t.g?t.g.size:0}function xl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xu(t,e){t.g?t.g.add(e):t.h=e}function Yg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Kg.prototype.cancel=function(){if(this.i=Jg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Uu(t.i)}var _b=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function yb(){this.g=new _b}function vb(t,e,n){const s=n||"";try{jg(t,function(r,i){let o=r;Ua(r)&&(o=zu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function wb(t,e){const n=new za;if(ie.Image){const s=new Image;s.onload=Eo(To,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Eo(To,n,s,"TestLoadImage: error",!1,e),s.onabort=Eo(To,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Eo(To,n,s,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function To(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ji(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(Ji,Qu);Ji.prototype.g=function(){return new Ja(this.l,this.j)};Ji.prototype.i=function(t){return function(){return t}}({});function Ja(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Zu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Ja,Xe);var Zu=0;q=Ja.prototype;q.open=function(t,e){if(this.readyState!=Zu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pi(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=Zu};q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Xg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xi(this):Pi(this),this.readyState==3&&Xg(this)}};q.Za=function(t){this.g&&(this.response=this.responseText=t,Xi(this))};q.Ya=function(t){this.g&&(this.response=t,Xi(this))};q.ka=function(){this.g&&Xi(this)};function Xi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pi(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Eb=ie.JSON.parse;function Be(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zg,this.L=this.M=!1}Ze(Be,Xe);var Zg="",Ib=/^https?$/i,Tb=["POST","PUT"];q=Be.prototype;q.Oa=function(t){this.M=t};q.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nl.g(),this.C=this.u?Xd(this.u):Xd(Nl),this.g.onreadystatechange=ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){tf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ie.FormData&&t instanceof ie.FormData,!(0<=gg(Tb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{n_(this),0<this.B&&((this.L=Ab(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.ua,this)):this.A=Gu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){tf(this,i)}};function Ab(t){return Ir&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.ua=function(){typeof Fu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function tf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,e_(t),Xa(t)}function e_(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Xa(this))};q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xa(this,!0)),Be.$.N.call(this)};q.La=function(){this.s||(this.G||this.v||this.l?t_(this):this.kb())};q.kb=function(){t_(this)};function t_(t){if(t.h&&typeof Fu<"u"&&(!t.C[1]||tn(t)!=4||t.da()!=2)){if(t.v&&tn(t)==4)Gu(t.La,0,t);else if(it(t,"readystatechange"),tn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(qg)[1]||null;!r&&ie.self&&ie.self.location&&(r=ie.self.location.protocol.slice(0,-1)),s=!Ib.test(r?r.toLowerCase():"")}n=s}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var i=2<tn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",e_(t)}}finally{Xa(t)}}}}function Xa(t,e){if(t.g){n_(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=s}catch{}}}function n_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}q.isActive=function(){return!!this.g};function tn(t){return t.g?t.g.readyState:0}q.da=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Eb(e)}};function nf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Zg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function bb(t){const e={};t=(t.g&&2<=tn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ii(t[s]))continue;var n=YA(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}jA(e,function(s){return s.join(", ")})}q.Ia=function(){return this.m};q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function s_(t){let e="";return Bu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function eh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=s_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function zr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function r_(t){this.Ga=0,this.j=[],this.l=new za,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zr("baseRetryDelayMs",5e3,t),this.hb=zr("retryDelaySeedMs",1e4,t),this.eb=zr("forwardChannelMaxRetries",2,t),this.xa=zr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Kg(t&&t.concurrentRequestLimit),this.Ja=new yb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}q=r_.prototype;q.ra=8;q.H=1;function th(t){if(i_(t),t.H==3){var e=t.W++,n=En(t.I);if(Ne(n,"SID",t.K),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Zi(t,n),e=new Qi(t,t.l,e),e.L=2,e.A=Ya(En(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.A,n=!0),n||(e.g=f_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Yi(e)}h_(t)}function Za(t){t.g&&(sh(t),t.g.cancel(),t.g=null)}function i_(t){Za(t),t.u&&(ie.clearTimeout(t.u),t.u=null),aa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function ec(t){if(!Gg(t.i)&&!t.m){t.m=!0;var e=t.Na;Ai||Sg(),bi||(Ai(),bi=!0),Wu.add(e,t),t.C=0}}function Rb(t,e){return Qg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ki(ft(t.Na,t,e),u_(t,t.C)),t.C++,!0)}q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Qi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=wg(i),Eg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=o_(this,r,e),n=En(this.I),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),Zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(s_(i)))+"&"+e:this.o&&eh(n,this.o,i)),Xu(this.i,r),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),r.aa=!0,Vl(r,n,null)):Vl(r,n,e),this.H=2}}else this.H==3&&(t?sf(this,t):this.j.length==0||Gg(this.i)||sf(this))};function sf(t,e){var n;e?n=e.m:n=t.W++;const s=En(t.I);Ne(s,"SID",t.K),Ne(s,"RID",n),Ne(s,"AID",t.V),Zi(t,s),t.o&&t.s&&eh(s,t.o,t.s),n=new Qi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=o_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xu(t.i,n),Vl(n,s,e)}function Zi(t,e){t.na&&Bu(t.na,function(n,s){Ne(e,s,n)}),t.h&&jg({},function(n,s){Ne(e,s,n)})}function o_(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ft(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{vb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function a_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ai||Sg(),bi||(Ai(),bi=!0),Wu.add(e,t),t.A=0}}function nh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ki(ft(t.Ma,t),u_(t,t.A)),t.A++,!0)}q.Ma=function(){if(this.u=null,c_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ki(ft(this.jb,this),t)}};q.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,vt(10),Za(this),c_(this))};function sh(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function c_(t){t.g=new Qi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.K),Ne(e,"AID",t.V),Ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ne(e,"TO",t.qa),Ne(e,"TYPE","xmlhttp"),Zi(t,e),t.o&&t.s&&eh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ya(En(e)),n.u=null,n.S=!0,Fg(n,t)}q.ib=function(){this.v!=null&&(this.v=null,Za(this),nh(this),vt(19))};function aa(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function l_(t,e){var n=null;if(t.g==e){aa(t),sh(t),t.g=null;var s=2}else if(xl(t.i,e))n=e.F,Yg(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;s=Wa(),it(s,new Og(s,n)),ec(t)}else a_(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(s==1&&Rb(t,e)||s==2&&nh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Is(t,5);break;case 4:Is(t,10);break;case 3:Is(t,6);break;default:Is(t,2)}}}function u_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Is(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ft(t.pb,t);n||(n=new Cs("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||ia(n,"https"),Ya(n)),wb(n.toString(),s)}else vt(2);t.H=0,t.h&&t.h.za(e),h_(t),i_(t)}q.pb=function(t){t?(this.l.info("Successfully pinged google.com"),vt(2)):(this.l.info("Failed to ping google.com"),vt(1))};function h_(t){if(t.H=0,t.ma=[],t.h){const e=Jg(t.i);(e.length!=0||t.j.length!=0)&&(Kd(t.ma,e),Kd(t.ma,t.j),t.i.i.length=0,Uu(t.j),t.j.length=0),t.h.ya()}}function d_(t,e,n){var s=n instanceof Cs?En(n):new Cs(n);if(s.g!="")e&&(s.g=e+"."+s.g),oa(s,s.m);else{var r=ie.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Cs(null);s&&ia(i,s),e&&(i.g=e),r&&oa(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Ne(s,n,e),Ne(s,"VER",t.ra),Zi(t,s),s}function f_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Be(new Ji({ob:n})):new Be(t.va),e.Oa(t.J),e}q.isActive=function(){return!!this.h&&this.h.isActive(this)};function m_(){}q=m_.prototype;q.Ba=function(){};q.Aa=function(){};q.za=function(){};q.ya=function(){};q.isActive=function(){return!0};q.Va=function(){};function ca(){if(Ir&&!(10<=Number(FA)))throw Error("Environmental error: no available transport.")}ca.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){Xe.call(this),this.g=new r_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Lr(this)}Ze(Dt,Xe);Dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=d_(t,null,t.Y),ec(t)};Dt.prototype.close=function(){th(this.g)};Dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zu(t),t=n);e.j.push(new pb(e.fb++,t)),e.H==3&&ec(e)};Dt.prototype.N=function(){this.g.h=null,delete this.j,th(this.g),delete this.g,Dt.$.N.call(this)};function p_(t){Yu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(p_,Yu);function g_(){Ju.call(this),this.status=1}Ze(g_,Ju);function Lr(t){this.g=t}Ze(Lr,m_);Lr.prototype.Ba=function(){it(this.g,"a")};Lr.prototype.Aa=function(t){it(this.g,new p_(t))};Lr.prototype.za=function(t){it(this.g,new g_)};Lr.prototype.ya=function(){it(this.g,"b")};function Sb(){this.blockSize=-1}function zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(zt,Sb);zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Kc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Kc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Kc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Kc(this,s),r=0;break}}this.h=r,this.i+=e};zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Se(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var Cb={};function rh(t){return-128<=t&&128>t?MA(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function nn(t){if(isNaN(t)||!isFinite(t))return hr;if(0>t)return st(nn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ll;return new Se(e,0)}function __(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(__(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nn(Math.pow(e,8)),s=hr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=nn(Math.pow(e,i)),s=s.R(i).add(nn(o))):(s=s.R(n),s=s.add(nn(o)))}return s}var Ll=4294967296,hr=rh(0),Fl=rh(1),rf=rh(16777216);q=Se.prototype;q.ea=function(){if(Vt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ll+s)*e,e*=Ll}return t};q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(Vt(this))return"-"+st(this).toString(t);for(var e=nn(Math.pow(t,6)),n=this,s="";;){var r=ua(n,e).g;n=la(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,gn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Vt(t){return t.h==-1}q.X=function(t){return t=la(this,t),Vt(t)?-1:gn(t)?0:1};function st(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Se(n,~t.h).add(Fl)}q.abs=function(){return Vt(this)?st(this):this};q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function la(t,e){return t.add(st(e))}q.R=function(t){if(gn(this)||gn(t))return hr;if(Vt(this))return Vt(t)?st(this).R(st(t)):st(st(this).R(t));if(Vt(t))return st(this.R(st(t)));if(0>this.X(rf)&&0>t.X(rf))return nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Ao(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Ao(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Ao(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Ao(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Se(n,0)};function Ao(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Wr(t,e){this.g=t,this.h=e}function ua(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new Wr(hr,hr);if(Vt(t))return e=ua(st(t),e),new Wr(st(e.g),st(e.h));if(Vt(e))return e=ua(t,st(e)),new Wr(st(e.g),e.h);if(30<t.g.length){if(Vt(t)||Vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fl,s=e;0>=s.X(t);)n=of(n),s=of(s);var r=Qs(n,1),i=Qs(s,1);for(s=Qs(s,2),n=Qs(n,2);!gn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Qs(s,1),n=Qs(n,1)}return e=la(t,r.R(e)),new Wr(r,e)}for(r=hr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=nn(n),o=i.R(e);Vt(o)||0<o.X(t);)n-=s,i=nn(n),o=i.R(e);gn(i)&&(i=Fl),r=r.add(i),t=la(t,o)}return new Wr(r,t)}q.gb=function(t){return ua(this,t).h};q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Se(n,this.h&t.h)};q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Se(n,this.h|t.h)};q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Se(n,this.h^t.h)};function of(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Se(n,t.h)}function Qs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(r,t.h)}ca.prototype.createWebChannel=ca.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;Ka.NO_ERROR=0;Ka.TIMEOUT=8;Ka.HTTP_ERROR=6;Vg.COMPLETE="complete";Mg.EventType=Gi;Gi.OPEN="a";Gi.CLOSE="b";Gi.ERROR="c";Gi.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;zt.prototype.digest=zt.prototype.l;zt.prototype.reset=zt.prototype.reset;zt.prototype.update=zt.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=nn;Se.fromString=__;var Pb=function(){return new ca},kb=function(){return Wa()},Gc=Ka,Db=Vg,Nb=$s,af={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ob=Ji,bo=Mg,Vb=Be,Mb=zt,dr=Se;const cf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vs=new Tu("@firebase/firestore");function Kr(){return Vs.logLevel}function G(t,...e){if(Vs.logLevel<=ye.DEBUG){const n=e.map(ih);Vs.debug(`Firestore (${Fr}): ${t}`,...n)}}function In(t,...e){if(Vs.logLevel<=ye.ERROR){const n=e.map(ih);Vs.error(`Firestore (${Fr}): ${t}`,...n)}}function Tr(t,...e){if(Vs.logLevel<=ye.WARN){const n=e.map(ih);Vs.warn(`Firestore (${Fr}): ${t}`,...n)}}function ih(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function Ce(t,e){t||re()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class Lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fb{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ce(typeof s.accessToken=="string"),new y_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new lt(e)}}class Ub{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $b{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new Ub(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new Bb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=qb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function Ar(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Oe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Oe(0,0))}static max(){return new oe(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,s){n===void 0?n=0:n>e.length&&re(),s===void 0?s=e.length-n:s>e.length-n&&re(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends ki{construct(e,n,s){return new Ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new z(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const Hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends ki{construct(e,n,s){return new rt(e,n,s)}static isValidIdentifier(e){return Hb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new z(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new z(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ve.fromString(e))}static fromName(e){return new Y(Ve.fromString(e).popFirst(5))}static empty(){return new Y(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ve(e.slice()))}}function zb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(s===1e9?new Oe(n+1,0):new Oe(n,s));return new Jn(r,Y.empty(),e)}function Wb(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Jn(oe.min(),Y.empty(),-1)}static max(){return new Jn(oe.max(),Y.empty(),-1)}}function Kb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Gb)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Yb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function to(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}oh.oe=-1;function tc(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function Jb(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function w_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??nt.RED,this.left=r??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new nt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return nt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,s,r,i){return this}insert(e,n,s){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uf(this.data.getIterator())}getIteratorFrom(e){return new uf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class uf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new kt([])}unionWith(e){let n=new ot(rt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class E_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new E_("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const Xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=Xb.exec(t);if(Ce(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ch(t){const e=t.mapValue.fields.__previous_value__;return ah(e)?ch(e):e}function Di(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ah(t)?4:e1(t)?9007199254740991:10:re()}function cn(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Di(t).isEqual(Di(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Xn(r.timestampValue),a=Xn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ms(r.bytesValue).isEqual(Ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return We(r.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(r.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return We(r.integerValue)===We(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=We(r.doubleValue),a=We(i.doubleValue);return o===a?ha(o)===ha(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ar(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(lf(o)!==lf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!cn(o[c],a[c])))return!1;return!0}(t,e);default:return re()}}function Oi(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function br(t,e){if(t===e)return 0;const n=xs(t),s=xs(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=We(i.integerValue||i.doubleValue),c=We(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return hf(t.timestampValue,e.timestampValue);case 4:return hf(Di(t),Di(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ms(i),c=Ms(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Re(a[l],c[l]);if(u!==0)return u}return Re(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Re(We(i.latitude),We(o.latitude));return a!==0?a:Re(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=br(a[l],c[l]);if(u)return u}return Re(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=Re(c[h],u[h]);if(f!==0)return f;const p=br(a[c[h]],l[u[h]]);if(p!==0)return p}return Re(c.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function hf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Xn(t),s=Xn(e),r=Re(n.seconds,s.seconds);return r!==0?r:Re(n.nanos,s.nanos)}function Rr(t){return Ul(t)}function Ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Xn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Ul(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Ul(n.fields[o])}`;return r+"}"}(t.mapValue):re()}function df(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $l(t){return!!t&&"integerValue"in t}function lh(t){return!!t&&"arrayValue"in t}function ff(t){return!!t&&"nullValue"in t}function mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ui(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function e1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(n)}setAll(e){let n=rt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ui(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Bo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Bs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new At(ui(this.value))}}function I_(t){const e=[];return Bs(t.fields,(n,s)=>{const r=new rt([n]);if(Bo(s)){const i=I_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,oe.min(),oe.min(),oe.min(),At.empty(),0)}static newFoundDocument(e,n,s,r){return new ut(e,1,n,oe.min(),s,r,0)}static newNoDocument(e,n){return new ut(e,2,n,oe.min(),oe.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,oe.min(),oe.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function pf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),n.key):s=br(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function gf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function t1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class T_{}class Ke extends T_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new s1(e,n,s):n==="array-contains"?new o1(e,s):n==="in"?new a1(e,s):n==="not-in"?new c1(e,s):n==="array-contains-any"?new l1(e,s):new Ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new r1(e,s):new i1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(br(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(br(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends T_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return A_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function A_(t){return t.op==="and"}function b_(t){return n1(t)&&A_(t)}function n1(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Bl(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Rr(t.value);if(b_(t))return t.filters.map(e=>Bl(e)).join(",");{const e=t.filters.map(n=>Bl(n)).join(",");return`${t.op}(${e})`}}function R_(t,e){return t instanceof Ke?function(s,r){return r instanceof Ke&&s.op===r.op&&s.field.isEqual(r.field)&&cn(s.value,r.value)}(t,e):t instanceof Wt?function(s,r){return r instanceof Wt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&R_(o,r.filters[a]),!0):!1}(t,e):void re()}function S_(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Rr(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(S_).join(" ,")+"}"}(t):"Filter"}class s1 extends Ke{constructor(e,n,s){super(e,n,s),this.key=Y.fromName(s.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class r1 extends Ke{constructor(e,n){super(e,"in",n),this.keys=C_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class i1 extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=C_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function C_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Y.fromName(s.referenceValue))}class o1 extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lh(n)&&Oi(n.arrayValue,this.value)}}class a1 extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oi(this.value.arrayValue,n)}}class c1 extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oi(this.value.arrayValue,n)}}class l1 extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Oi(this.value.arrayValue,s))}}/**
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
 */class u1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function _f(t,e=null,n=[],s=[],r=null,i=null,o=null){return new u1(t,e,n,s,r,i,o)}function uh(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Bl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rr(s)).join(",")),e.ue=n}return e.ue}function hh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!t1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!R_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gf(t.startAt,e.startAt)&&gf(t.endAt,e.endAt)}function jl(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function h1(t,e,n,s,r,i,o,a){return new Ur(t,e,n,s,r,i,o,a)}function nc(t){return new Ur(t)}function yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function P_(t){return t.collectionGroup!==null}function hi(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(rt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Vi(i,s))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Vi(rt.keyField(),s))}return e.ce}function on(t){const e=ae(t);return e.le||(e.le=d1(e,hi(t))),e.le}function d1(t,e){if(t.limitType==="F")return _f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Vi(r.field,i)});const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return _f(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function ql(t,e){const n=t.filters.concat([e]);return new Ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hl(t,e,n){return new Ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return hh(on(t),on(e))&&t.limitType===e.limitType}function k_(t){return`${uh(on(t))}|lt:${t.limitType}`}function er(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>S_(r)).join(", ")}]`),tc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Rr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Rr(r)).join(",")),`Target(${s})`}(on(t))}; limitType=${t.limitType})`}function rc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Y.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of hi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=pf(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,hi(s),r)||s.endAt&&!function(o,a,c){const l=pf(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,hi(s),r))}(t,e)}function f1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function D_(t){return(e,n)=>{let s=!1;for(const r of hi(t)){const i=m1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function m1(t,e,n){const s=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?br(c,l):re()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Bs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return w_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=new Fe(Y.comparator);function Tn(){return p1}const N_=new Fe(Y.comparator);function Zr(...t){let e=N_;for(const n of t)e=e.insert(n.key,n);return e}function O_(t){let e=N_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ts(){return di()}function V_(){return di()}function di(){return new $r(t=>t.toString(),(t,e)=>t.isEqual(e))}const g1=new Fe(Y.comparator),_1=new ot(Y.comparator);function ge(...t){let e=_1;for(const n of t)e=e.add(n);return e}const y1=new ot(Re);function v1(){return y1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function x_(t){return{integerValue:""+t}}function L_(t,e){return Jb(e)?x_(e):M_(t,e)}/**
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
 */class ic{constructor(){this._=void 0}}function w1(t,e,n){return t instanceof Mi?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ah(i)&&(i=ch(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Sr?U_(t,e):t instanceof Cr?$_(t,e):function(r,i){const o=F_(r,i),a=vf(o)+vf(r.Pe);return $l(o)&&$l(r.Pe)?x_(a):M_(r.serializer,a)}(t,e)}function E1(t,e,n){return t instanceof Sr?U_(t,e):t instanceof Cr?$_(t,e):n}function F_(t,e){return t instanceof xi?function(s){return $l(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Mi extends ic{}class Sr extends ic{constructor(e){super(),this.elements=e}}function U_(t,e){const n=B_(e);for(const s of t.elements)n.some(r=>cn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Cr extends ic{constructor(e){super(),this.elements=e}}function $_(t,e){let n=B_(e);for(const s of t.elements)n=n.filter(r=>!cn(r,s));return{arrayValue:{values:n}}}class xi extends ic{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vf(t){return We(t.integerValue||t.doubleValue)}function B_(t){return lh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.field=e,this.transform=n}}function I1(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Sr&&r instanceof Sr||s instanceof Cr&&r instanceof Cr?Ar(s.elements,r.elements,cn):s instanceof xi&&r instanceof xi?cn(s.Pe,r.Pe):s instanceof Mi&&r instanceof Mi}(t.transform,e.transform)}class T1{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function j_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cc(t.key,Rt.none()):new no(t.key,t.data,Rt.none());{const n=t.data,s=At.empty();let r=new ot(rt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ls(t.key,s,new kt(r.toArray()),Rt.none())}}function A1(t,e,n){t instanceof no?function(r,i,o){const a=r.value.clone(),c=Ef(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(r,i,o){if(!jo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ef(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(q_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fi(t,e,n,s){return t instanceof no?function(i,o,a,c){if(!jo(i.precondition,o))return a;const l=i.value.clone(),u=If(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof ls?function(i,o,a,c){if(!jo(i.precondition,o))return a;const l=If(i.fieldTransforms,c,o),u=o.data;return u.setAll(q_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function b1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=F_(s.transform,r||null);i!=null&&(n===null&&(n=At.empty()),n.set(s.field,i))}return n||null}function wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ar(s,r,(i,o)=>I1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class no extends ac{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ls extends ac{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function q_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ef(t,e,n){const s=new Map;Ce(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,E1(o,a,n[r]))}return s}function If(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,w1(i,o,e))}return s}class cc extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class R1 extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&A1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=V_();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=j_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(n,s)=>wf(n,s))&&Ar(this.baseMutations,e.baseMutations,(n,s)=>wf(n,s))}}class dh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ce(e.mutations.length===s.length);let r=function(){return g1}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new dh(e,n,s,r)}}/**
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
 */class C1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class P1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ve;function k1(t){switch(t){default:return re();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function H_(t){if(t===void 0)return In("GRPC error has no .code"),A.UNKNOWN;switch(t){case ze.OK:return A.OK;case ze.CANCELLED:return A.CANCELLED;case ze.UNKNOWN:return A.UNKNOWN;case ze.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ze.INTERNAL:return A.INTERNAL;case ze.UNAVAILABLE:return A.UNAVAILABLE;case ze.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ze.NOT_FOUND:return A.NOT_FOUND;case ze.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ze.ABORTED:return A.ABORTED;case ze.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ze.DATA_LOSS:return A.DATA_LOSS;default:return re()}}(ve=ze||(ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function D1(){return new TextEncoder}/**
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
 */const N1=new dr([4294967295,4294967295],0);function Tf(t){const e=D1().encode(t),n=new Mb;return n.update(e),new Uint8Array(n.digest())}function Af(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,s],0),new dr([r,i],0)]}class fh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ei(`Invalid padding: ${n}`);if(s<0)throw new ei(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ei(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ei(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=dr.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(dr.fromNumber(s)));return r.compare(N1)===1&&(r=new dr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tf(e),[s,r]=Af(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Tf(e),[s,r]=Af(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ei extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new lc(oe.min(),r,new Fe(Re),Tn(),ge())}}class so{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new so(s,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class z_{constructor(e,n){this.targetId=e,this.me=n}}class W_{constructor(e,n,s=gt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class bf{constructor(){this.fe=0,this.ge=Sf(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),s=ge();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:re()}}),new so(this.pe,this.ye,e,n,s)}ve(){this.we=!1,this.ge=Sf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class O1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=Rf(),this.Qe=new Fe(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.ve(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(jl(i))if(s===0){const o=new Y(i.path);this.Ue(n,o,ut.newNoDocument(o,oe.min()))}else Ce(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Ms(s).toUint8Array()}catch(c){if(c instanceof E_)return Tr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new fh(o,r,i)}catch(c){return Tr(c instanceof ei?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&jl(a.target)){const c=new Y(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ut.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let s=ge();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new lc(e,n,this.Qe,this.ke,s);return this.ke=Tn(),this.qe=Rf(),this.Qe=new Fe(Re),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Rf(){return new Fe(Y.comparator)}function Sf(){return new Fe(Y.comparator)}const V1={asc:"ASCENDING",desc:"DESCENDING"},M1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},x1={and:"AND",or:"OR"};class L1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zl(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function fa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function F1(t,e){return fa(t,e.toTimestamp())}function an(t){return Ce(!!t),oe.fromTimestamp(function(n){const s=Xn(n);return new Oe(s.seconds,s.nanos)}(t))}function mh(t,e){return Wl(t,e).canonicalString()}function Wl(t,e){const n=function(r){return new Ve(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function G_(t){const e=Ve.fromString(t);return Ce(Z_(e)),e}function Kl(t,e){return mh(t.databaseId,e.path)}function Qc(t,e){const n=G_(e);if(n.get(1)!==t.databaseId.projectId)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Y_(n))}function Q_(t,e){return mh(t.databaseId,e)}function U1(t){const e=G_(t);return e.length===4?Ve.emptyPath():Y_(e)}function Gl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Y_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cf(t,e,n){return{name:Kl(t,e),fields:n.value.mapValue.fields}}function $1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ce(u===void 0||typeof u=="string"),gt.fromBase64String(u||"")):(Ce(u===void 0||u instanceof Buffer||u instanceof Uint8Array),gt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:H_(l.code);return new z(u,l.message||"")}(o);n=new W_(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qc(t,s.document.name),i=an(s.document.updateTime),o=s.document.createTime?an(s.document.createTime):oe.min(),a=new At({mapValue:{fields:s.document.fields}}),c=ut.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new qo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Qc(t,s.document),i=s.readTime?an(s.readTime):oe.min(),o=ut.newNoDocument(r,i),a=s.removedTargetIds||[];n=new qo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Qc(t,s.document),i=s.removedTargetIds||[];n=new qo([],i,r,null)}else{if(!("filter"in e))return re();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new P1(r,i),a=s.targetId;n=new z_(a,o)}}return n}function B1(t,e){let n;if(e instanceof no)n={update:Cf(t,e.key,e.value)};else if(e instanceof cc)n={delete:Kl(t,e.key)};else if(e instanceof ls)n={update:Cf(t,e.key,e.data),updateMask:Y1(e.fieldMask)};else{if(!(e instanceof R1))return re();n={verify:Kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Sr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xi)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:F1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function j1(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?an(r.updateTime):an(i);return o.isEqual(oe.min())&&(o=an(i)),new T1(o,r.transformResults||[])}(n,e))):[]}function q1(t,e){return{documents:[Q_(t,e.path)]}}function H1(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Q_(t,r);const i=function(l){if(l.length!==0)return X_(Wt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:tr(f.field),direction:K1(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=zl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:r}}function z1(t){let e=U1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ce(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=J_(h);return f instanceof Wt&&b_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(w){return new Vi(nr(w.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,tc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new da(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new da(p,f)}(n.endAt)),h1(e,r,o,i,a,"F",c,l)}function W1(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function J_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=nr(n.unaryFilter.field);return Ke.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=nr(n.unaryFilter.field);return Ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nr(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=nr(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(nr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(s=>J_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function K1(t){return V1[t]}function G1(t){return M1[t]}function Q1(t){return x1[t]}function tr(t){return{fieldPath:t.canonicalString()}}function nr(t){return rt.fromServerFormat(t.fieldPath)}function X_(t){return t instanceof Ke?function(n){if(n.op==="=="){if(mf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NAN"}};if(ff(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mf(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NAN"}};if(ff(n.value))return{unaryFilter:{field:tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(n.field),op:G1(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const s=n.getFilters().map(r=>X_(r));return s.length===1?s[0]:{compositeFilter:{op:Q1(n.op),filters:s}}}(t):re()}function Y1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Z_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,s,r,i=oe.min(),o=oe.min(),a=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.ut=e}}function X1(t){const e=z1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hl(e,e.limit,"L"):e}/**
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
 */class Z1{constructor(){this.on=new eR}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Jn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class eR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ot(Ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ot(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Pr(0)}static Nn(){return new Pr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&fi(s.mutation,r,kt.empty(),Oe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ge()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ge()){const r=Ts();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Zr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ts();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ge()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Tn();const o=di(),a=function(){return di()}();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ls)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),fi(u.mutation,l,u.mutation.getFieldMask(),Oe.now())):o.set(l.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new nR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=di();let r=new Fe((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||kt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ge()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=V_();u.forEach(f=>{if(!i.has(f)){const p=j_(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):P_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(Ts());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ge())).next(u=>({batchId:a,changes:O_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(s=>{let r=Zr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Zr();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,c=>{const l=function(h,f){return new Ur(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s,r).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ut.newInvalidDocument(u)))});let a=Zr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&fi(u.mutation,l,kt.empty(),Oe.now()),rc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:an(r.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:X1(r.bundledQuery),readTime:an(r.readTime)}}(n)),S.resolve()}}/**
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
 */class iR{constructor(){this.overlays=new Fe(Y.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ts();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=Ts(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Fe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ts(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ts(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new C1(n,s));let i=this.lr.get(n);i===void 0&&(i=ge(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.hr=new ot(Qe.Pr),this.Ir=new ot(Qe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Qe(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new Y(new Ve([])),s=new Qe(n,e),r=new Qe(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Y(new Ve([])),s=new Qe(n,e),r=new Qe(n,e+1);let i=ge();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Y.comparator(e.key,n.key)||Re(e.gr,n.gr)}static Tr(e,n){return Re(e.gr,n.gr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ot(Qe.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new S1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),r=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ot(Re);return n.forEach(r=>{const i=new Qe(r,0),o=new Qe(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),S.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new Y(i),0);let a=new ot(Re);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ce(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return S.forEach(n.mutations,r=>{const i=new Qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Qe(n,0),r=this.yr.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.Cr=e,this.docs=function(){return new Fe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let s=Tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ut.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Tn();const o=n.path,a=new Y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Kb(Wb(u),s)<=0||(r.has(u.key)||rc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){re()}vr(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new cR(this)}getSize(e){return S.resolve(this.size)}}class cR extends tR{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.persistence=e,this.Fr=new $r(n=>uh(n),hh),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ph,this.targetCount=0,this.Nr=Pr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Pr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n){this.Lr={},this.overlays={},this.Br=new oh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new lR(this),this.indexManager=new Z1,this.remoteDocumentCache=function(r){return new aR(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new J1(n),this.Kr=new rR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Lr[e.toKey()];return s||(s=new oR(n,this.referenceDelegate),this.Lr[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){G("MemoryPersistence","Starting transaction:",e);const r=new hR(this.Br.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Lr).map(s=>()=>s.containsKey(e,n)))}}class hR extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class gh{constructor(e){this.persistence=e,this.Gr=new ph,this.zr=null}static jr(e){return new gh(e)}get Hr(){if(this.zr)return this.zr;throw re()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,s=>{const r=Y.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,oe.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=ge(),r=ge();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new _h(e,n.fromCache,s,r)}}/**
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
 */class dR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return Y0()?8:Yb(at())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new dR;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Kr()<=ye.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",er(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Kr()<=ye.DEBUG&&G("QueryEngine","Query:",er(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Kr()<=ye.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",er(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):S.resolve())}zi(e,n){if(yf(n))return S.resolve(null);let s=on(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Hl(n,null,"F"),s=on(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ge(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Hl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,s,r){return yf(n)||r.isEqual(oe.min())?S.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?S.resolve(null):(Kr()<=ye.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),er(n)),this.Xi(e,o,n,zb(r,-1)).next(a=>a))})}Yi(e,n){let s=new ot(D_(e));return n.forEach((r,i)=>{rc(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Kr()<=ye.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",er(n)),this.Gi.getDocumentsMatchingQuery(e,n,Jn.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new Fe(Re),this.ns=new $r(i=>uh(i),hh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function pR(t,e,n,s){return new mR(t,e,n,s)}async function ey(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ge();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function gR(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=S.resolve();return f.forEach(w=>{p=p.next(()=>u.getEntry(c,w)).next(g=>{const v=l.docVersions.get(w);Ce(v!==null),g.version.compareTo(v)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ge();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ty(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function _R(t,e){const n=ae(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(gt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,v,k){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=Tn(),l=ge();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(yR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!s.isEqual(oe.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=r,i))}function yR(t,e,n){let s=ge(),r=ge();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:r}})}function vR(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function wR(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new $n(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Ql(t,e,n){const s=ae(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!to(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function Pf(t,e,n){const s=ae(t);let r=oe.min(),i=ge();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ae(c),f=h.ns.get(u);return f!==void 0?S.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(s,o,on(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:oe.min(),n?i:ge())).next(a=>(ER(s,f1(e),a),{documents:a,ls:i})))}function ER(t,e,n){let s=t.rs.get(e)||oe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class kf{constructor(){this.activeTargetIds=v1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IR{constructor(){this.eo=new kf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new kf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TR{ro(e){}shutdown(){}}/**
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
 */class Df{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Co=null;function Yc(){return Co===null?Co=function(){return 268435456+Math.round(2147483648*Math.random())}():Co++,"0x"+Co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class RR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=s+"://"+n.host,this.wo=`projects/${r}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get bo(){return!1}Do(n,s,r,i,o){const a=Yc(),c=this.Co(n,s.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,r).then(u=>(G("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Tr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",r),u})}Mo(n,s,r,i,o,a){return this.Do(n,s,r,i,o)}vo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}Co(n,s){const r=AR[n];return`${this.yo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,s,r){const i=Yc();return new Promise((o,a)=>{const c=new Vb;c.setWithCredentials(!0),c.listenOnce(Db.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Gc.NO_ERROR:const u=c.getResponseJson();G(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Gc.TIMEOUT:G(ct,`RPC '${e}' ${i} timed out`),a(new z(A.DEADLINE_EXCEEDED,"Request time out"));break;case Gc.HTTP_ERROR:const h=c.getStatus();if(G(ct,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const w=function(v){const k=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(k)>=0?k:A.UNKNOWN}(p.status);a(new z(w,p.message))}else a(new z(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(A.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{G(ct,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);G(ct,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}xo(e,n,s){const r=Yc(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Pb(),a=kb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Ob({})),this.vo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");G(ct,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const w=new bR({co:v=>{p?G(ct,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(f||(G(ct,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),G(ct,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},lo:()=>h.close()}),g=(v,k,C)=>{v.listen(k,L=>{try{C(L)}catch(F){setTimeout(()=>{throw F},0)}})};return g(h,bo.EventType.OPEN,()=>{p||(G(ct,`RPC '${e}' stream ${r} transport opened.`),w.Vo())}),g(h,bo.EventType.CLOSE,()=>{p||(p=!0,G(ct,`RPC '${e}' stream ${r} transport closed`),w.fo())}),g(h,bo.EventType.ERROR,v=>{p||(p=!0,Tr(ct,`RPC '${e}' stream ${r} transport errored:`,v),w.fo(new z(A.UNAVAILABLE,"The operation could not be completed")))}),g(h,bo.EventType.MESSAGE,v=>{var k;if(!p){const C=v.data[0];Ce(!!C);const L=C,F=L.error||((k=L[0])===null||k===void 0?void 0:k.error);if(F){G(ct,`RPC '${e}' stream ${r} received error:`,F);const W=F.status;let U=function(qe){const Ue=ze[qe];if(Ue!==void 0)return H_(Ue)}(W),se=F.message;U===void 0&&(U=A.INTERNAL,se="Unknown error status: "+W+" with message "+F.message),p=!0,w.fo(new z(U,se)),h.close()}else G(ct,`RPC '${e}' stream ${r} received:`,C),w.po(C)}}),g(a,Nb.STAT_EVENT,v=>{v.stat===af.PROXY?G(ct,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===af.NOPROXY&&G(ct,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.mo()},0),w}}function Jc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new L1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=s,this.No=r,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),s=Math.max(0,Date.now()-this.qo),r=Math.max(0,n-s);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Wo=s,this.Go=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new ny(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.zo===n&&this.a_(s,r)},s=>{e(()=>{const r=new z(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.u_(r)})})}a_(e,n){const s=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{s(()=>this.listener.ho())}),this.stream.Io(()=>{s(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(r=>{s(()=>this.u_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SR extends sy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=$1(this.serializer,e),s=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?an(o.readTime):oe.min()}(e);return this.listener.l_(n,s)}h_(e){const n={};n.database=Gl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=jl(c)?{documents:q1(i,c)}:{query:H1(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=K_(i,o.resumeToken);const l=zl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=fa(i,o.snapshotVersion.toTimestamp());const l=zl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const s=W1(this.serializer,e);s&&(n.labels=s),this.r_(n)}P_(e){const n={};n.database=Gl(this.serializer),n.removeTarget=e,this.r_(n)}}class CR extends sy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=j1(e.writeResults,e.commitTime),s=an(e.commitTime);return this.listener.d_(s,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Gl(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>B1(this.serializer,s))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.V_=!1}m_(){if(this.V_)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,s,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,Wl(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(A.UNKNOWN,i.toString())})}Mo(e,n,s,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Wl(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(A.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class kR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(In(n),this.y_=!1):G("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{s.enqueueAndForget(async()=>{js(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ae(c);l.M_.add(4),await ro(l),l.N_.set("Unknown"),l.M_.delete(4),await hc(l)}(this))})}),this.N_=new kR(s,r)}}async function hc(t){if(js(t))for(const e of t.x_)await e(!0)}async function ro(t){for(const e of t.x_)await e(!1)}function ry(t,e){const n=ae(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Eh(n)?wh(n):Br(n).Zo()&&vh(n,e))}function yh(t,e){const n=ae(t),s=Br(n);n.F_.delete(e),s.Zo()&&iy(n,e),n.F_.size===0&&(s.Zo()?s.t_():js(n)&&n.N_.set("Unknown"))}function vh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Br(t).h_(e)}function iy(t,e){t.L_.xe(e),Br(t).P_(e)}function wh(t){t.L_=new O1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Br(t).start(),t.N_.w_()}function Eh(t){return js(t)&&!Br(t).Yo()&&t.F_.size>0}function js(t){return ae(t).M_.size===0}function oy(t){t.L_=void 0}async function NR(t){t.N_.set("Online")}async function OR(t){t.F_.forEach((e,n)=>{vh(t,e)})}async function VR(t,e){oy(t),Eh(t)?(t.N_.D_(e),wh(t)):t.N_.set("Unknown")}async function MR(t,e,n){if(t.N_.set("Online"),e instanceof W_&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.F_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.F_.delete(a),r.L_.removeTarget(a))}(t,e)}catch(s){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ma(t,s)}else if(e instanceof qo?t.L_.Ke(e):e instanceof z_?t.L_.He(e):t.L_.We(e),!n.isEqual(oe.min()))try{const s=await ty(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(gt.EMPTY_BYTE_STRING,u.snapshotVersion)),iy(i,c);const h=new $n(u.target,c,l,u.sequenceNumber);vh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){G("RemoteStore","Failed to raise snapshot:",s),await ma(t,s)}}async function ma(t,e,n){if(!to(e))throw e;t.M_.add(1),await ro(t),t.N_.set("Offline"),n||(n=()=>ty(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await hc(t)})}function ay(t,e){return e().catch(n=>ma(t,n,e))}async function dc(t){const e=ae(t),n=Zn(e);let s=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;xR(e);)try{const r=await vR(e.localStore,s);if(r===null){e.v_.length===0&&n.t_();break}s=r.batchId,LR(e,r)}catch(r){await ma(e,r)}cy(e)&&ly(e)}function xR(t){return js(t)&&t.v_.length<10}function LR(t,e){t.v_.push(e);const n=Zn(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function cy(t){return js(t)&&!Zn(t).Yo()&&t.v_.length>0}function ly(t){Zn(t).start()}async function FR(t){Zn(t).R_()}async function UR(t){const e=Zn(t);for(const n of t.v_)e.E_(n.mutations)}async function $R(t,e,n){const s=t.v_.shift(),r=dh.from(s,e,n);await ay(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await dc(t)}async function BR(t,e){e&&Zn(t).T_&&await async function(s,r){if(function(o){return k1(o)&&o!==A.ABORTED}(r.code)){const i=s.v_.shift();Zn(s).e_(),await ay(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await dc(s)}}(t,e),cy(t)&&ly(t)}async function Nf(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const s=js(n);n.M_.add(3),await ro(n),s&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await hc(n)}async function jR(t,e){const n=ae(t);e?(n.M_.delete(2),await hc(n)):e||(n.M_.add(2),await ro(n),n.N_.set("Unknown"))}function Br(t){return t.B_||(t.B_=function(n,s,r){const i=ae(n);return i.m_(),new SR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:NR.bind(null,t),Io:OR.bind(null,t),Eo:VR.bind(null,t),l_:MR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),Eh(t)?wh(t):t.N_.set("Unknown")):(await t.B_.stop(),oy(t))})),t.B_}function Zn(t){return t.k_||(t.k_=function(n,s,r){const i=ae(n);return i.m_(),new CR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:FR.bind(null,t),Eo:BR.bind(null,t),A_:UR.bind(null,t),d_:$R.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await dc(t)):(await t.k_.stop(),t.v_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ih(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Th(t,e){if(In("AsyncQueue",`${e}: ${t}`),to(t))return new z(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Y.comparator(n.key,s.key):(n,s)=>Y.comparator(n.key,s.key),this.keyedMap=Zr(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new fr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Of{constructor(){this.q_=new Fe(Y.comparator)}track(e){const n=e.doc.key,s=this.q_.get(n);s?e.type!==0&&s.type===3?this.q_=this.q_.insert(n,e):e.type===3&&s.type!==1?this.q_=this.q_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.q_=this.q_.remove(n):e.type===1&&s.type===2?this.q_=this.q_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):re():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,s)=>{e.push(s)}),e}}class kr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new kr(e,n,fr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class HR{constructor(){this.queries=new $r(e=>k_(e),sc),this.onlineState="Unknown",this.z_=new Set}}async function uy(t,e){const n=ae(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.W_()&&e.G_()&&(s=2):(i=new qR,s=e.G_()?0:1);try{switch(s){case 0:i.K_=await n.onListen(r,!0);break;case 1:i.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=Th(o,`Initialization of query '${er(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Ah(n)}async function hy(t,e){const n=ae(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?r=e.G_()?0:1:!i.W_()&&e.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function zR(t,e){const n=ae(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(r)&&(s=!0);o.K_=r}}s&&Ah(n)}function WR(t,e,n){const s=ae(t),r=s.queries.get(e);if(r)for(const i of r.U_)i.onError(n);s.queries.delete(e)}function Ah(t){t.z_.forEach(e=>{e.next()})}var Yl,Vf;(Vf=Yl||(Yl={})).J_="default",Vf.Cache="cache";class dy{constructor(e,n,s){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=s||{}}H_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new kr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const s=n!=="Offline";return(!this.options.ra||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Yl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.key=e}}class my{constructor(e){this.key=e}}class KR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=D_(e),this.Ta=new fr(this.Ia)}get Ea(){return this.la}da(e,n){const s=n?n.Aa:new Of,r=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=rc(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?w!==g&&(s.track({type:3,doc:p}),v=!0):this.Ra(f,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Ia(p,c)>0||l&&this.Ia(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ta:o,Aa:s,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(p,w){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return g(p)-g(w)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(s),r=r!=null&&r;const a=n&&!r?this.ma():[],c=this.Pa.size===0&&this.current&&!r?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new kr(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Of,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(s=>{this.ga(s.key)&&(this.Pa=this.Pa.add(s.key))});const n=[];return e.forEach(s=>{this.Pa.has(s)||n.push(new my(s))}),this.Pa.forEach(s=>{e.has(s)||n.push(new fy(s))}),n}pa(e){this.la=e.ls,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return kr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class GR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class QR{constructor(e){this.key=e,this.wa=!1}}class YR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new $r(a=>k_(a),sc),this.Da=new Map,this.Ca=new Set,this.va=new Fe(Y.comparator),this.Fa=new Map,this.Ma=new ph,this.xa={},this.Oa=new Map,this.Na=Pr.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function JR(t,e,n=!0){const s=wy(t);let r;const i=s.ba.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.ya()):r=await py(s,e,n,!0),r}async function XR(t,e){const n=wy(t);await py(n,e,!0,!1)}async function py(t,e,n,s){const r=await wR(t.localStore,on(e)),i=r.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return s&&(a=await ZR(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&ry(t.remoteStore,r),a}async function ZR(t,e,n,s,r){t.Ba=(h,f,p)=>async function(g,v,k,C){let L=v.view.da(k);L.Zi&&(L=await Pf(g.localStore,v.query,!1).then(({documents:se})=>v.view.da(se,L)));const F=C&&C.targetChanges.get(v.targetId),W=C&&C.targetMismatches.get(v.targetId)!=null,U=v.view.applyChanges(L,g.isPrimaryClient,F,W);return xf(g,v.targetId,U.fa),U.snapshot}(t,h,f,p);const i=await Pf(t.localStore,e,!0),o=new KR(e,i.ls),a=o.da(i.documents),c=so.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);xf(t,n,l.fa);const u=new GR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function eS(t,e,n){const s=ae(t),r=s.ba.get(e),i=s.Da.get(r.targetId);if(i.length>1)return s.Da.set(r.targetId,i.filter(o=>!sc(o,e))),void s.ba.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Ql(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&yh(s.remoteStore,r.targetId),Jl(s,r.targetId)}).catch(eo)):(Jl(s,r.targetId),await Ql(s.localStore,r.targetId,!0))}async function tS(t,e){const n=ae(t),s=n.ba.get(e),r=n.Da.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),yh(n.remoteStore,s.targetId))}async function nS(t,e,n){const s=lS(t);try{const r=await function(o,a){const c=ae(o),l=Oe.now(),u=a.reduce((p,w)=>p.add(w.key),ge());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let w=Tn(),g=ge();return c.ss.getEntries(p,u).next(v=>{w=v,w.forEach((k,C)=>{C.isValidDocument()||(g=g.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,w)).next(v=>{h=v;const k=[];for(const C of a){const L=b1(C,h.get(C.key).overlayedDocument);L!=null&&k.push(new ls(C.key,L,I_(L.value.mapValue),Rt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,k,a)}).next(v=>{f=v;const k=v.applyToLocalDocumentSet(h,g);return c.documentOverlayCache.saveOverlays(p,v.batchId,k)})}).then(()=>({batchId:f.batchId,changes:O_(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new Fe(Re)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(s,r.batchId,n),await io(s,r.changes),await dc(s.remoteStore)}catch(r){const i=Th(r,"Failed to persist write");n.reject(i)}}async function gy(t,e){const n=ae(t);try{const s=await _R(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Fa.get(i);o&&(Ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.wa=!0:r.modifiedDocuments.size>0?Ce(o.wa):r.removedDocuments.size>0&&(Ce(o.wa),o.wa=!1))}),await io(n,s,e)}catch(s){await eo(s)}}function Mf(t,e,n){const s=ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(l=!0)}),l&&Ah(c)}(s.eventManager,e),r.length&&s.Sa.l_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sS(t,e,n){const s=ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Fa.get(e),i=r&&r.key;if(i){let o=new Fe(Y.comparator);o=o.insert(i,ut.newNoDocument(i,oe.min()));const a=ge().add(i),c=new lc(oe.min(),new Map,new Fe(Re),o,a);await gy(s,c),s.va=s.va.remove(i),s.Fa.delete(e),bh(s)}else await Ql(s.localStore,e,!1).then(()=>Jl(s,e,n)).catch(eo)}async function rS(t,e){const n=ae(t),s=e.batch.batchId;try{const r=await gR(n.localStore,e);yy(n,s,null),_y(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await io(n,r)}catch(r){await eo(r)}}async function iS(t,e,n){const s=ae(t);try{const r=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ce(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,e);yy(s,e,n),_y(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await io(s,r)}catch(r){await eo(r)}}function _y(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function yy(t,e,n){const s=ae(t);let r=s.xa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.xa[s.currentUser.toKey()]=r}}function Jl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Da.get(e))t.ba.delete(s),n&&t.Sa.ka(s,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(s=>{t.Ma.containsKey(s)||vy(t,s)})}function vy(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(yh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),bh(t))}function xf(t,e,n){for(const s of n)s instanceof fy?(t.Ma.addReference(s.key,e),oS(t,s)):s instanceof my?(G("SyncEngine","Document no longer in limbo: "+s.key),t.Ma.removeReference(s.key,e),t.Ma.containsKey(s.key)||vy(t,s.key)):re()}function oS(t,e){const n=e.key,s=n.path.canonicalString();t.va.get(n)||t.Ca.has(s)||(G("SyncEngine","New document in limbo: "+n),t.Ca.add(s),bh(t))}function bh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Y(Ve.fromString(e)),s=t.Na.next();t.Fa.set(s,new QR(n)),t.va=t.va.insert(n,s),ry(t.remoteStore,new $n(on(nc(n.path)),s,"TargetPurposeLimboResolution",oh.oe))}}async function io(t,e,n){const s=ae(t),r=[],i=[],o=[];s.ba.isEmpty()||(s.ba.forEach((a,c)=>{o.push(s.Ba(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=_h.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Sa.l_(r),await async function(c,l){const u=ae(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,f=>S.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>S.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!to(h))throw h;G("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.ts.get(f),w=p.snapshotVersion,g=p.withLastLimboFreeSnapshotVersion(w);u.ts=u.ts.insert(f,g)}}}(s.localStore,i))}async function aS(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const s=await ey(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new z(A.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await io(n,s._s)}}function cS(t,e){const n=ae(t),s=n.Fa.get(e);if(s&&s.wa)return ge().add(s.key);{let r=ge();const i=n.Da.get(e);if(!i)return r;for(const o of i){const a=n.ba.get(o);r=r.unionWith(a.view.Ea)}return r}}function wy(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sS.bind(null,e),e.Sa.l_=zR.bind(null,e.eventManager),e.Sa.ka=WR.bind(null,e.eventManager),e}function lS(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iS.bind(null,e),e}class Lf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pR(this.persistence,new fR,e.initialUser,this.serializer)}createPersistence(e){return new uR(gh.jr,this.serializer)}createSharedClientState(e){return new IR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aS.bind(null,this.syncEngine),await jR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HR}()}createDatastore(e){const n=uc(e.databaseInfo.databaseId),s=function(i){return new RR(i)}(e.databaseInfo);return function(i,o,a,c){return new PR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new DR(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Mf(this.syncEngine,n,0),function(){return Df.D()?new Df:new TR}())}createSyncEngine(e,n){return function(r,i,o,a,c,l,u){const h=new YR(r,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(s){const r=ae(s);G("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await ro(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=v_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Th(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ey(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ff(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fS(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Nf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Nf(e.remoteStore,r)),t._onlineComponents=e}function dS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dS(n))throw n;Tr("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new Lf)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Xc(t,new Lf);return t._offlineComponents}async function Iy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Ff(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Ff(t,new uS))),t._onlineComponents}function mS(t){return Iy(t).then(e=>e.syncEngine)}async function Xl(t){const e=await Iy(t),n=e.eventManager;return n.onListen=JR.bind(null,e.syncEngine),n.onUnlisten=eS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tS.bind(null,e.syncEngine),n}function pS(t,e,n={}){const s=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Ey({next:f=>{o.enqueueAndForget(()=>hy(i,h));const p=f.docs.has(a);!p&&f.fromCache?l.reject(new z(A.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&c&&c.source==="server"?l.reject(new z(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new dy(nc(a.path),u,{includeMetadataChanges:!0,ra:!0});return uy(i,h)}(await Xl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Ty(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e,n){if(!n)throw new z(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gS(t,e,n,s){if(e===!0&&s===!0)throw new z(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $f(t){if(!Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bf(t){if(Y.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fc(t);throw new z(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new z(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ty((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new xb;switch(s.type){case"firstParty":return new $b(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new z(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Uf.get(n);s&&(G("ComponentProvider","Removing Datastore"),Uf.delete(n),s.terminate())}(this),Promise.resolve()}}function _S(t,e,n,s={}){var r;const i=(t=xt(t,mc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=lt.MOCK_USER;else{a=H0(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new z(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new lt(l)}t._authCredentials=new Lb(new y_(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class Gn extends qs{constructor(e,n,s){super(e,n,nc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new Y(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function Jt(t,e,...n){if(t=$e(t),Ay("collection","path",e),t instanceof mc){const s=Ve.fromString(e,...n);return Bf(s),new Gn(t,null,s)}{if(!(t instanceof pt||t instanceof Gn))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ve.fromString(e,...n));return Bf(s),new Gn(t.firestore,null,s)}}function Le(t,e,...n){if(t=$e(t),arguments.length===1&&(e=v_.newId()),Ay("doc","path",e),t instanceof mc){const s=Ve.fromString(e,...n);return $f(s),new pt(t,null,new Y(s))}{if(!(t instanceof pt||t instanceof Gn))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ve.fromString(e,...n));return $f(s),new pt(t.firestore,t instanceof Gn?t.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new ny(this,"async_queue_retry"),this.hu=()=>{const n=Jc();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Kn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!to(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw In("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.uu=!1,s))));return this.iu=n,n}enqueueAfterDelay(e,n,s){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const r=Ih.createAndSchedule(this,e,n,s,i=>this.Eu(i));return this._u.push(r),r}Pu(){this.au&&re()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function qf(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class es extends mc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new yS}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||by(this),this._firestoreClient.terminate()}}function vS(t,e){const n=typeof t=="object"?t:Mp(),s=typeof t=="string"?t:"(default)",r=bu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=j0("firestore");i&&_S(r,...i)}return r}function pc(t){return t._firestoreClient||by(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function by(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,l,u){return new Zb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ty(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new hS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dr(gt.fromBase64String(e))}catch(n){throw new z(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dr(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=/^__.*__$/;class ES{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new no(e,this.data,n,this.fieldTransforms)}}class Ry{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ls(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class gc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new gc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.wu(e),r}Su(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:s,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return pa(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Sy(this.fu)&&wS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class IS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||uc(e)}Fu(e,n,s,r=!1){return new gc({fu:e,methodName:n,vu:s,path:rt.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _c(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new IS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cy(t,e,n,s,r,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,r);Dh("Data must be an object, but it was:",o,s);const a=Ny(s,o);let c,l;if(i.merge)c=new kt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Zl(e,h,n);if(!o.contains(f))throw new z(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Vy(u,f)||u.push(f)}c=new kt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ES(new At(a),c,l)}class yc extends Hs{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function Py(t,e,n){return new gc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sh extends Hs{_toFieldTransform(e){return new oc(e.path,new Mi)}isEqual(e){return e instanceof Sh}}class Ch extends Hs{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Py(this,e,!0),s=this.Mu.map(i=>zs(i,n)),r=new Sr(s);return new oc(e.path,r)}isEqual(e){return e instanceof Ch&&vr(this.Mu,e.Mu)}}class Ph extends Hs{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Py(this,e,!0),s=this.Mu.map(i=>zs(i,n)),r=new Cr(s);return new oc(e.path,r)}isEqual(e){return e instanceof Ph&&vr(this.Mu,e.Mu)}}class kh extends Hs{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new xi(e.serializer,L_(e.serializer,this.xu));return new oc(e.path,n)}isEqual(e){return e instanceof kh&&this.xu===e.xu}}function ky(t,e,n,s){const r=t.Fu(1,e,n);Dh("Data must be an object, but it was:",r,s);const i=[],o=At.empty();Bs(s,(c,l)=>{const u=Nh(e,c,n);l=$e(l);const h=r.Su(u);if(l instanceof yc)i.push(u);else{const f=zs(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new kt(i);return new Ry(o,a,r.fieldTransforms)}function Dy(t,e,n,s,r,i){const o=t.Fu(1,e,n),a=[Zl(e,s,n)],c=[r];if(i.length%2!=0)throw new z(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Zl(e,i[f])),c.push(i[f+1]);const l=[],u=At.empty();for(let f=a.length-1;f>=0;--f)if(!Vy(l,a[f])){const p=a[f];let w=c[f];w=$e(w);const g=o.Su(p);if(w instanceof yc)l.push(p);else{const v=zs(w,g);v!=null&&(l.push(p),u.set(p,v))}}const h=new kt(l);return new Ry(u,h,o.fieldTransforms)}function TS(t,e,n,s=!1){return zs(n,t.Fu(s?4:3,e))}function zs(t,e){if(Oy(t=$e(t)))return Dh("Unsupported field value:",e,t),Ny(t,e);if(t instanceof Hs)return function(s,r){if(!Sy(r.fu))throw r.Du(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=zs(a,r.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=$e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return L_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Oe.fromDate(s);return{timestampValue:fa(r.serializer,i)}}if(s instanceof Oe){const i=new Oe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fa(r.serializer,i)}}if(s instanceof Rh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Dr)return{bytesValue:K_(r.serializer,s._byteString)};if(s instanceof pt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mh(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.Du(`Unsupported field value: ${fc(s)}`)}(t,e)}function Ny(t,e){const n={};return w_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bs(t,(s,r)=>{const i=zs(r,e.pu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Oy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Rh||t instanceof Dr||t instanceof pt||t instanceof Hs)}function Dh(t,e,n){if(!Oy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=fc(n);throw s==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+s)}}function Zl(t,e,n){if((e=$e(e))instanceof oo)return e._internalPath;if(typeof e=="string")return Nh(t,e);throw pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const AS=new RegExp("[~\\*/\\[\\]]");function Nh(t,e,n){if(e.search(AS)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oo(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new z(A.INVALID_ARGUMENT,a+t+c)}function Vy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bS extends My{data(){return super.data()}}function vc(t,e){return typeof e=="string"?Nh(t,e):e instanceof oo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oh{}class xy extends Oh{}function gs(t,e,...n){let s=[];e instanceof Oh&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof Vh).length,a=i.filter(c=>c instanceof wc).length;if(o>1||o>0&&a>0)throw new z(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class wc extends xy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new wc(e,n,s)}_apply(e){const n=this._parse(e);return Ly(e._query,n),new qs(e.firestore,e.converter,ql(e._query,n))}_parse(e){const n=_c(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){zf(h,u);const p=[];for(const w of h)p.push(Hf(c,i,w));f={arrayValue:{values:p}}}else f=Hf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||zf(h,u),f=TS(a,o,h,u==="in"||u==="not-in");return Ke.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function un(t,e,n){const s=e,r=vc("where",t);return wc._create(r,s,n)}class Vh extends Oh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)Ly(o,c),o=ql(o,c)}(e._query,n),new qs(e.firestore,e.converter,ql(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mh extends xy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mh(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new z(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new z(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vi(i,o)}(e._query,this._field,this._direction);return new qs(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Ur(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function SS(t,e="asc"){const n=e,s=vc("orderBy",t);return Mh._create(s,n)}function Hf(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new z(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!P_(e)&&n.indexOf("/")!==-1)throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ve.fromString(n));if(!Y.isDocumentKey(s))throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return df(t,new Y(s))}if(n instanceof pt)return df(t,n._key);throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(n)}.`)}function zf(t,e){if(!Array.isArray(t)||t.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ly(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class CS{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Bs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Rh(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ch(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ve.fromString(e);Ce(Z_(s));const r=new Ni(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uy extends My{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ho extends Uy{data(e={}){return super.data(e)}}class PS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ti(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ho(this._firestore,this._userDataWriter,s.key,s,new ti(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Ho(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ti(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ho(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ti(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:kS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){t=xt(t,pt);const e=xt(t.firestore,es);return pS(pc(e),t._key).then(n=>By(e,t,n))}class $y extends CS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Ot(t,e,n){t=xt(t,pt);const s=xt(t.firestore,es),r=Fy(t.converter,e,n);return Ec(s,[Cy(_c(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Rt.none())])}function mr(t,e,n,...s){t=xt(t,pt);const r=xt(t.firestore,es),i=_c(r);let o;return o=typeof(e=$e(e))=="string"||e instanceof oo?Dy(i,"updateDoc",t._key,e,n,s):ky(i,"updateDoc",t._key,e),Ec(r,[o.toMutation(t._key,Rt.exists(!0))])}function Zc(t){return Ec(xt(t.firestore,es),[new cc(t._key,Rt.none())])}function Qt(t,...e){var n,s,r;t=$e(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||qf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(qf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof pt)l=xt(t.firestore,es),u=nc(t._key.path),c={next:h=>{e[o]&&e[o](By(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xt(t,qs);l=xt(h.firestore,es),u=h._query;const f=new $y(l);c={next:p=>{e[o]&&e[o](new PS(l,f,h,p))},error:e[o+1],complete:e[o+2]},RS(t._query)}return function(f,p,w,g){const v=new Ey(g),k=new dy(p,v,w);return f.asyncQueue.enqueueAndForget(async()=>uy(await Xl(f),k)),()=>{v.$a(),f.asyncQueue.enqueueAndForget(async()=>hy(await Xl(f),k))}}(pc(l),u,a,c)}function Ec(t,e){return function(s,r){const i=new Kn;return s.asyncQueue.enqueueAndForget(async()=>nS(await mS(s),r,i)),i.promise}(pc(t),e)}function By(t,e,n){const s=n.docs.get(e._key),r=new $y(t);return new Uy(t,r,e._key,s,new ti(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=_c(e)}set(e,n,s){this._verifyNotCommitted();const r=el(e,this._firestore),i=Fy(r.converter,n,s),o=Cy(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,Rt.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=el(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof oo?Dy(this._dataReader,"WriteBatch.update",i._key,n,s,r):ky(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Rt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=el(e,this._firestore);return this._mutations=this._mutations.concat(new cc(n._key,Rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function el(t,e){if((t=$e(t)).firestore!==e)throw new z(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function pr(){return new Sh("serverTimestamp")}function Qn(...t){return new Ch("arrayUnion",t)}function xh(...t){return new Ph("arrayRemove",t)}function tl(t){return new kh("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return pc(t=xt(t,es)),new DS(t,e=>Ec(t,e))}(function(e,n=!0){(function(r){Fr=r})(Vr),wr(new ks("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new es(new Fb(s.getProvider("auth-internal")),new jb(s.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(l.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Wn(cf,"4.6.1",e),Wn(cf,"4.6.1","esm2017")})();var NS="firebase",OS="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(NS,OS,"app");const VS={apiKey:"AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",authDomain:"vuechat-c27a8.firebaseapp.com",projectId:"vuechat-c27a8",storageBucket:"vuechat-c27a8.appspot.com",messagingSenderId:"713413651968",appId:"1:713413651968:web:93c490d79df8c319cf2e5"},jy=Vp(VS),Ye=RA(jy),we=vS(jy);let zo=null,ga="";const tu=t=>ga?mr(Le(we,"users",ga),t).catch(()=>{}):Promise.resolve();function MS(t){mi(!1),ga=t,tu({online:!0,lastSeen:pr()}),zo=setInterval(()=>{tu({online:!0,lastSeen:pr()})},15e3)}function mi(t){zo&&(clearInterval(zo),zo=null);const e=t?tu({online:!1}):Promise.resolve();return ga="",e}var xS={BASE_URL:"/friendzy/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const _a=Q(typeof localStorage<"u"&&localStorage.getItem("friendzyLang")||"es"),LS=typeof localStorage<"u"&&localStorage.getItem("friendzyTheme")||"naranja",ya=Q(LS),sl={es:{cargando:"Cargando...",selecciona:"Selecciona un usuario o una conversación",para_chatear:"para empezar a chatear en privado",conecta_amigos:"Conecta con amigos",conecta_inteligente:"de forma inteligente",auth_intro:"Chat en tiempo real, conoce nuevas personas y crea conexiones significativas en una plataforma segura.",feat1:"Mensajería en tiempo real",feat2:"Conoce personas de todo el mundo",feat3:"Seguridad y privacidad garantizada",stat_users:"Usuarios",stat_msgs:"Mensajes",stat_uptime:"Uptime",mobile_tagline:"Conecta con amigos de todo el mundo",bienvenido:"Bienvenido de vuelta",crea_cuenta:"Crea tu cuenta",login_sub:"Ingresa a tu cuenta para continuar",reg_sub:"Regístrate gratis y empieza a chatear",google_in:"Iniciar sesión con Google",or_email:"o con tu email",nombre:"Nombre",tu_nombre:"Tu nombre",email:"Email",contrasena:"Contraseña",iniciar_login:"Iniciar sesión",crear:"Crear cuenta",no_cuenta:"¿No tienes cuenta?",reg_gratis:"Regístrate gratis",ya_cuenta:"¿Ya tienes cuenta?",inicia_sesion:"Inicia sesión",badge_seguro:"Seguro",badge_tiempo:"Tiempo real",badge_global:"Global",err_completa:"Completa todos los campos",err_email_pass:"Email o contraseña incorrectos",err_email_used:"Este email ya está registrado",err_invalid_email:"Introduce un email válido",err_weak:"La contraseña debe tener al menos 6 caracteres",err_too_many:"Demasiados intentos. Intenta más tarde",busqueda_ph:"Buscar chats o personas...",personas_reg:"Personas registradas",no_personas:"No hay personas registradas",solicitudes:"Solicitudes",quiere_chatear:"Quiere chatear contigo",amigos:"Amigos",en_linea:"En línea",desconectado:"Desconectado",conversaciones:"Conversaciones",sin_conv:"Sin conversaciones todavía",sin_conv_sub:"Busca personas y envía una solicitud para chatear",mi_perfil:"Mi perfil",configuracion:"Configuración",cerrar_sesion:"Cerrar sesión",chat:"Chat",pendiente:"Pendiente",aceptar:"Aceptar",solicitar:"Solicitar",favoritos:"Favoritos",sin_favoritos:"Sin chats favoritos",sin_mensajes:"Sin mensajes todavía",ahora:"ahora",grabar:"Grabando · toca para terminar",nota_larga:"La nota es demasiado larga para enviarse",enviar_ph:"Escribe un mensaje...",no_mensajes:"No hay mensajes todavía",envia_primero:"¡Envía el primero!",hoy:"Hoy",ag_favoritos:"Agregar a favoritos",quitar_fav:"Quitar de favoritos",fotos_compartidas:"Fotos compartidas",sin_fotos:"No hay fotos compartidas todavía",idioma:"Idioma",tema:"Tema",naranja:"Naranja",azul:"Azul",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Tu alias en el chat",cumpleanos:"Fecha de nacimiento",guardar:"Guardar",guardado:"Guardado",cambiar_foto:"Cambiar foto",foto_nombre:"Foto de perfil",mensaje_nuevo:"Nuevo mensaje",nueva_solicitud:"Nueva solicitud de chat",quieres_chatear:"quiere chatear contigo",max_3_fotos:"Máximo 3 fotos por envío",elige_fotos:"Elige tus fotos",enviar_fotos:"Enviar fotos",reaccionar:"Reaccionar"},en:{cargando:"Loading...",selecciona:"Select a user or conversation",para_chatear:"to start chatting privately",conecta_amigos:"Connect with friends",conecta_inteligente:"the smart way",auth_intro:"Real-time chat, meet new people and create meaningful connections on a secure platform.",feat1:"Real-time messaging",feat2:"Meet people from all over the world",feat3:"Security and privacy guaranteed",stat_users:"Users",stat_msgs:"Messages",stat_uptime:"Uptime",mobile_tagline:"Connect with friends from everywhere",bienvenido:"Welcome back",crea_cuenta:"Create your account",login_sub:"Sign in to continue",reg_sub:"Sign up for free and start chatting",google_in:"Continue with Google",or_email:"or with your email",nombre:"Name",tu_nombre:"Your name",email:"Email",contrasena:"Password",iniciar_login:"Sign in",crear:"Create account",no_cuenta:"Do not have an account?",reg_gratis:"Sign up free",ya_cuenta:"Already have an account?",inicia_sesion:"Sign in",badge_seguro:"Secure",badge_tiempo:"Real time",badge_global:"Global",err_completa:"Complete all fields",err_email_pass:"Incorrect email or password",err_email_used:"This email is already registered",err_invalid_email:"Enter a valid email",err_weak:"Password must be at least 6 characters",err_too_many:"Too many attempts. Try again later",busqueda_ph:"Search chats or people...",personas_reg:"Registered people",no_personas:"No registered people",solicitudes:"Requests",quiere_chatear:"Wants to chat with you",amigos:"Friends",en_linea:"Online",desconectado:"Offline",conversaciones:"Conversations",sin_conv:"No conversations yet",sin_conv_sub:"Search people and send a request to chat",mi_perfil:"My profile",configuracion:"Settings",cerrar_sesion:"Sign out",chat:"Chat",pendiente:"Pending",aceptar:"Accept",solicitar:"Request",favoritos:"Favorites",sin_favoritos:"No favorite chats",sin_mensajes:"No messages yet",ahora:"now",grabar:"Recording · tap to finish",nota_larga:"The voice note is too long to send",enviar_ph:"Write a message...",no_mensajes:"No messages yet",envia_primero:"Send the first one!",hoy:"Today",ag_favoritos:"Add to favorites",quitar_fav:"Remove from favorites",fotos_compartidas:"Shared photos",sin_fotos:"No shared photos yet",idioma:"Language",tema:"Theme",naranja:"Orange",azul:"Blue",espanol:"Español",english:"English",alias:"Alias",alias_ph:"Your chat alias",cumpleanos:"Birthday",guardar:"Save",guardado:"Saved",cambiar_foto:"Change photo",foto_nombre:"Profile photo",mensaje_nuevo:"New message",nueva_solicitud:"New chat request",quieres_chatear:"wants to chat with you",max_3_fotos:"Maximum 3 photos per send",elige_fotos:"Choose your photos",enviar_fotos:"Send photos",reaccionar:"React"}};function FS(t){_a.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyLang",t)}function qy(t=ya.value){const e=document.documentElement;t==="azul"?e.setAttribute("data-theme","azul"):e.removeAttribute("data-theme");const n=document.getElementById("app-favicon");if(n&&typeof import.meta<"u"&&xS){const s="/friendzy/";n.href=s+(t==="azul"?"favicon-azul.svg":"favicon.svg")}}function US(t){ya.value=t,typeof localStorage<"u"&&localStorage.setItem("friendzyTheme",t),qy(t)}function N(t){return(sl[_a.value]||sl.es)[t]??sl.es[t]??t}const ln=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Hy=t=>(ss("data-v-3dbce67b"),t=t(),rs(),t),$S=["width","height"],BS=Hy(()=>d("path",{d:"M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z",fill:"white","fill-opacity":"0.95"},null,-1)),jS=Hy(()=>d("path",{d:"M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z",style:{fill:"var(--primary)"}},null,-1)),qS=[BS,jS],HS={__name:"Logo",props:{className:{type:String,default:""},size:{type:String,default:"md"},showText:{type:Boolean,default:!1},variant:{type:String,default:"default"},center:{type:Boolean,default:!1}},setup(t){const e=t,s={sm:{badge:"logo-sm",text:"16px",icon:16},md:{badge:"logo-md",text:"20px",icon:20},lg:{badge:"logo-lg",text:"24px",icon:24},xl:{badge:"logo-xl",text:"30px",icon:28}}[e.size],r=e.variant==="white";return(i,o)=>(x(),B("div",{class:fe(["logo",[{center:t.center},t.className]])},[d("div",{class:fe(["logo-badge",[r?"logo-badge-white":"gradient-orange",D(s).badge]])},[(x(),B("svg",{width:D(s).icon,height:D(s).icon,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},qS,8,$S))],2),t.showText?(x(),B("span",{key:0,class:fe(["logo-text",[r?"text-white":"text-dark",D(s).text]])}," Friendzy ",2)):Te("",!0)],2))}},nu=ln(HS,[["__scopeId","data-v-3dbce67b"]]),zS={},WS={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},KS=d("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"},null,-1),GS=d("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"},null,-1),QS=d("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"},null,-1),YS=d("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"},null,-1),JS=[KS,GS,QS,YS];function XS(t,e){return x(),B("svg",WS,JS)}const ZS=ln(zS,[["render",XS]]),Cn=t=>(ss("data-v-a171bb12"),t=t(),rs(),t),eC={class:"auth"},tC={class:"auth-left"},nC=Cn(()=>d("div",{class:"auth-grid-white"},null,-1)),sC={class:"auth-left-inner"},rC={class:"auth-left-mid"},iC=Cn(()=>d("br",null,null,-1)),oC=Cn(()=>d("span",{class:"auth-checkmark"},[d("i",{class:"mdi mdi-check"})],-1)),aC={class:"auth-stats"},cC={class:"auth-right"},lC=Cn(()=>d("div",{class:"auth-right-grid"},null,-1)),uC={class:"auth-form-wrap"},hC={class:"auth-mobile-logo"},dC={class:"auth-card"},fC={class:"auth-card-head"},mC={class:"divider"},pC={class:"fields"},gC={key:0,class:"field"},_C=["placeholder"],yC={class:"field"},vC={class:"field"},wC={key:0,class:"auth-error"},EC=Cn(()=>d("i",{class:"mdi mdi-alert-circle-outline"},null,-1)),IC=["disabled"],TC=Cn(()=>d("i",{class:"mdi mdi-arrow-right"},null,-1)),AC={class:"switch-link"},bC={class:"auth-badges"},RC={class:"auth-badge"},SC=Cn(()=>d("i",{class:"mdi mdi-shield-lock-outline"},null,-1)),CC={class:"auth-badge"},PC=Cn(()=>d("i",{class:"mdi mdi-message-text-clock-outline"},null,-1)),kC={class:"auth-badge"},DC=Cn(()=>d("i",{class:"mdi mdi-web"},null,-1)),NC={__name:"AuthScreen",setup(t){const e=Q("login"),n=Q(""),s=Q(""),r=Q(""),i=Q(!1),o=Q(""),a=["feat1","feat2","feat3"],c=[{value:"10K+",label:"stat_users"},{value:"50K+",label:"stat_msgs"},{value:"99%",label:"stat_uptime"}],l=p=>{e.value=p,o.value=""},u=async()=>{try{const p=new hn;await MT(Ye,p)}catch(p){console.log(p)}},h=p=>{switch(p){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return N("err_email_pass");case"auth/email-already-in-use":return N("err_email_used");case"auth/invalid-email":return N("err_invalid_email");case"auth/weak-password":return N("err_weak");case"auth/too-many-requests":return N("err_too_many");default:return`Error: ${p}`}},f=async()=>{if(o.value="",!n.value.trim()||!s.value){o.value=N("err_completa");return}if(s.value.length<6){o.value=N("err_weak");return}i.value=!0;try{if(e.value==="login")await lT(Ye,n.value.trim(),s.value);else{const{user:p}=await cT(Ye,n.value.trim(),s.value);r.value.trim()&&await Mu(p,{displayName:r.value.trim().split(/\s+/)[0]})}}catch(p){console.log(p),o.value=h(p.code)}finally{i.value=!1}};return(p,w)=>(x(),B("main",eC,[d("section",tC,[nC,d("div",sC,[pe(nu,{size:"lg",showText:"",variant:"white"}),d("div",rC,[d("h1",null,[en(O(D(N)("conecta_amigos"))+" ",1),iC,d("span",null,O(D(N)("conecta_inteligente")),1)]),d("p",null,O(D(N)("auth_intro")),1),d("ul",null,[(x(),B(De,null,Ut(a,(g,v)=>d("li",{key:g,class:"auth-feature",style:Nr({animationDelay:.3+v*.1+"s"})},[oC,d("span",null,O(D(N)(g)),1)],4)),64))])]),d("div",aC,[(x(),B(De,null,Ut(c,g=>d("div",{key:g.label},[d("strong",null,O(g.value),1),d("span",null,O(D(N)(g.label)),1)])),64))])])]),d("section",cC,[lC,d("div",uC,[d("div",hC,[pe(nu,{size:"xl",showText:"",center:""}),d("p",null,O(D(N)("mobile_tagline")),1)]),d("div",dC,[d("div",fC,[d("h2",null,O(e.value==="login"?D(N)("bienvenido"):D(N)("crea_cuenta")),1),d("p",null,O(e.value==="login"?D(N)("login_sub"):D(N)("reg_sub")),1)]),d("button",{class:"google-btn",type:"button",onClick:u},[pe(ZS),d("span",null,O(D(N)("google_in")),1)]),d("div",mC,[d("span",null,O(D(N)("or_email")),1)]),d("div",pC,[e.value==="register"?(x(),B("div",gC,[d("label",null,O(D(N)("nombre")),1),Rs(d("input",{"onUpdate:modelValue":w[0]||(w[0]=g=>r.value=g),type:"text",placeholder:D(N)("tu_nombre")},null,8,_C),[[Ss,r.value]])])):Te("",!0),d("div",yC,[d("label",null,O(D(N)("email")),1),Rs(d("input",{"onUpdate:modelValue":w[1]||(w[1]=g=>n.value=g),type:"email",placeholder:"ejemplo@gmail.com"},null,512),[[Ss,n.value]])]),d("div",vC,[d("label",null,O(D(N)("contrasena")),1),Rs(d("input",{"onUpdate:modelValue":w[2]||(w[2]=g=>s.value=g),type:"password",placeholder:"••••••••",onKeyup:bp(f,["enter"])},null,544),[[Ss,s.value]])])]),o.value?(x(),B("div",wC,[EC,d("span",null,O(o.value),1)])):Te("",!0),d("button",{class:"submit-btn btn-primary",type:"button",disabled:i.value,onClick:f},[d("span",null,O(i.value?D(N)("cargando"):e.value==="login"?D(N)("iniciar_login"):D(N)("crear")),1),TC],8,IC),d("p",AC,[e.value==="login"?(x(),B(De,{key:0},[en(O(D(N)("no_cuenta"))+" ",1),d("a",{href:"#",onClick:w[3]||(w[3]=je(g=>l("register"),["prevent"]))},O(D(N)("reg_gratis")),1)],64)):(x(),B(De,{key:1},[en(O(D(N)("ya_cuenta"))+" ",1),d("a",{href:"#",onClick:w[4]||(w[4]=je(g=>l("login"),["prevent"]))},O(D(N)("inicia_sesion")),1)],64))])]),d("div",bC,[d("div",RC,[SC,d("span",null,O(D(N)("badge_seguro")),1)]),d("div",CC,[PC,d("span",null,O(D(N)("badge_tiempo")),1)]),d("div",kC,[DC,d("span",null,O(D(N)("badge_global")),1)])])])])]))}},OC=ln(NC,[["__scopeId","data-v-a171bb12"]]),VC=(t,e)=>[t,e].sort().join("_"),Bn=(t,e)=>t.split("_").find(n=>n!==e);let dn=null,Wf=!1;function zy(){const t=window.AudioContext||window.webkitAudioContext;!t||typeof window>"u"||(dn||(dn=new t),dn.state==="suspended"&&dn.resume().catch(()=>{}))}const MC=()=>{Wf||(Wf=!0,zy())};typeof window<"u"&&["pointerdown","keydown","touchstart"].forEach(t=>window.addEventListener(t,MC,{once:!0}));function Kf(){if(zy(),!dn)return;const t=dn.currentTime;[660,880].forEach((e,n)=>{const s=dn.createOscillator(),r=dn.createGain(),i=t+n*.12;s.type="sine",s.frequency.value=e,r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.18,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+.35),s.connect(r),r.connect(dn.destination),s.start(i),s.stop(i+.4)})}function xC(){typeof Notification<"u"&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}function Gf(t,e){if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(t,{body:e,icon:"/friendzy/favicon.svg"})}catch{}}const LC={key:0,class:"pa-img"},FC=["src","alt"],UC={__name:"PremiumAvatar",props:{src:{type:String,default:""},name:{type:String,required:!0},size:{type:String,default:"md"},online:{type:Boolean,default:void 0},showRing:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,s={sm:{avatar:"pa-size-sm",text:"pa-text-xs",status:"pa-status-sm"},md:{avatar:"pa-size-md",text:"pa-text-sm",status:"pa-status-md"},lg:{avatar:"pa-size-lg",text:"pa-text-base",status:"pa-status-lg"},xl:{avatar:"pa-size-xl",text:"pa-text-xl",status:"pa-status-xl"}}[e.size],r=["linear-gradient(135deg, #f97316, #f59e0b)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #ea580c, #ef4444)","linear-gradient(135deg, #f43f5e, #f97316)","#111827","linear-gradient(135deg, #fb923c, #eab308)"],o=r[Math.abs((c=>(c||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0))(e.name))%r.length],a=(e.name||"?").split(" ").map(c=>c[0]).slice(0,2).join("").toUpperCase();return(c,l)=>(x(),B("div",{class:fe(["pa-outer",t.className])},[d("div",{class:fe(["pa-ring",t.showRing?"avatar-ring":""])},[d("div",{class:fe(["pa-avatar",[D(s).avatar,"pa-"+t.size]])},[t.src?(x(),B("div",LC,[d("img",{src:t.src,alt:t.name,draggable:"false",onContextmenu:l[0]||(l[0]=je(()=>{},["prevent"])),onDragstart:l[1]||(l[1]=je(()=>{},["prevent"]))},null,40,FC)])):(x(),B("div",{key:1,class:"pa-initials",style:Nr({background:D(o)})},[d("span",{class:fe(D(s).text)},O(D(a)),3)],4))],2)],2),t.online!==void 0?(x(),B("span",{key:0,class:fe(["pa-status",[D(s).status,t.online?"pa-online":"pa-offline"]])},null,2)):Te("",!0)],2))}},Un=ln(UC,[["__scopeId","data-v-fc1b44dd"]]),Et=t=>(ss("data-v-fde28e5c"),t=t(),rs(),t),$C={class:"sidebar"},BC={class:"sb-header"},jC=Et(()=>d("i",{class:"mdi mdi-close"},null,-1)),qC=[jC],HC={class:"sb-profile-wrap"},zC={class:"sb-profile-info"},WC={class:"sb-profile-name"},KC={class:"sb-profile-email"},GC=Et(()=>d("i",{class:"mdi mdi-chevron-down sb-profile-caret"},null,-1)),QC={key:0,class:"sb-menu"},YC=Et(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),JC=Et(()=>d("i",{class:"mdi mdi-cog-outline"},null,-1)),XC=Et(()=>d("div",{class:"sb-menu-sep"},null,-1)),ZC=Et(()=>d("i",{class:"mdi mdi-logout"},null,-1)),eP={class:"sb-search-row"},tP={class:"sb-search"},nP=Et(()=>d("i",{class:"mdi mdi-magnify sb-search-icon"},null,-1)),sP=["placeholder"],rP={key:0,class:"sb-newchat"},iP={class:"sb-label"},oP=Et(()=>d("i",{class:"mdi mdi-account-multiple-outline"},null,-1)),aP=["onClick"],cP={class:"sb-user-body"},lP={class:"sb-user-name"},uP=["onClick"],hP=["onClick"],dP=Et(()=>d("i",{class:"mdi mdi-message-outline"},null,-1)),fP={key:0,class:"sb-empty-note"},mP={class:"sb-section"},pP={class:"sb-label"},gP=Et(()=>d("i",{class:"mdi mdi-bell-outline"},null,-1)),_P={class:"sb-count sb-count-alert"},yP={class:"sb-list sb-friends"},vP={class:"conv-body"},wP={class:"conv-top"},EP={class:"conv-name"},IP={class:"conv-bottom"},TP={class:"conv-preview"},AP=["onClick"],bP=Et(()=>d("i",{class:"mdi mdi-check"},null,-1)),RP=[bP],SP=["onClick"],CP=Et(()=>d("i",{class:"mdi mdi-close"},null,-1)),PP=[CP],kP={class:"sb-section"},DP={class:"sb-label"},NP=Et(()=>d("i",{class:"mdi mdi-heart"},null,-1)),OP={class:"sb-count"},VP={class:"sb-list sb-friends"},MP=["onClick"],xP={class:"conv-body"},LP={class:"conv-top"},FP={class:"conv-name"},UP={class:"conv-bottom"},$P={class:"conv-preview"},BP=["onClick"],jP=Et(()=>d("i",{class:"mdi mdi-minus"},null,-1)),qP=[jP],HP={class:"sb-section"},zP={class:"sb-label"},WP=Et(()=>d("i",{class:"mdi mdi-message-text-outline"},null,-1)),KP={class:"sb-count"},GP={class:"sb-list"},QP=["onClick"],YP={class:"conv-body"},JP={class:"conv-top"},XP={class:"conv-name"},ZP={class:"conv-right"},ek={key:0,class:"mdi mdi-star conv-star"},tk={key:1,class:"conv-badge"},nk={key:2,class:"conv-time"},sk={class:"conv-bottom"},rk={class:"conv-preview"},ik={key:0,class:"sb-empty"},ok={class:"sb-empty-sub"},ak=25e3,ck={__name:"Conversations",props:{activeId:{type:String,default:""},isMobile:{type:Boolean,default:!1},profile:{type:Object,default:()=>({})},favorites:{type:Array,default:()=>[]}},emits:["open","close","openProfile","openSettings"],setup(t,{emit:e}){const n=e,s=t,r=Ye.currentUser,i=Q([]),o=Q([]),a=Q([]),c=Q([]),l=Q([]),u=Q([]),h=Q([]),f=Q([]),p=Q(""),w=Q(!1),g=Q(!1),v=Ie(()=>s.profile.displayName||(r==null?void 0:r.displayName)||(r==null?void 0:r.email)||"Usuario"),k=(r==null?void 0:r.email)||"",C=Ie(()=>s.profile.photoURL||(r==null?void 0:r.photoURL)||"");let L=null,F=null,W=null,U=null,se=null,_e=null,qe=null,Ue=null,Z=!1,J=!1;const te={};vu(()=>{L=Qt(gs(Jt(we,"users")),y=>{i.value=y.docs.map(I=>I.data()).filter(I=>I.uid!==r.uid)},y=>console.error("denied:users",y.code)),F=Qt(gs(Jt(we,"conversations"),un("participants","array-contains",r.uid)),y=>{var K,ce;const I=[],T={};if(y.forEach(de=>{const Pe=de.data();T[de.id]=Pe,I.push({id:de.id,...Pe})}),I.sort((de,Pe)=>{var et,us,Ct,hs;return(((us=(et=Pe.lastAt)==null?void 0:et.toMillis)==null?void 0:us.call(et))??0)-(((hs=(Ct=de.lastAt)==null?void 0:Ct.toMillis)==null?void 0:hs.call(Ct))??0)}),o.value=I,!Z){Z=!0,y.forEach(de=>{var Pe,et;te[de.id]=((et=(Pe=de.data())==null?void 0:Pe.unread)==null?void 0:et[r.uid])||0});return}y.forEach(de=>{var Ct;const Pe=de.data(),et=((Ct=Pe.unread)==null?void 0:Ct[r.uid])||0,us=te[de.id]||0;if(te[de.id]=et,et>us&&de.id!==s.activeId){const hs=Bn(de.id,r.uid),tt=i.value.find(fo=>fo.uid===hs),Nt=typeof Pe.lastMessage=="string"?Pe.lastMessage:"📷 Foto";Gf(`${N("mensaje_nuevo")} de ${(tt==null?void 0:tt.displayName)||""}`,Nt),Kf()}}),s.activeId&&(((ce=(K=T[s.activeId])==null?void 0:K.unread)==null?void 0:ce[r.uid])||0)>0&&ue(s.activeId)},y=>console.error("denied:convs",y.code)),W=Qt(Le(we,"users",r.uid),y=>{var I;a.value=((I=y.data())==null?void 0:I.friends)||[]},y=>console.error("denied:me",y.code)),U=Qt(gs(Jt(we,"requests"),un("to","==",r.uid),un("status","==","pending")),y=>{if(c.value=y.docs.map(I=>({id:I.id,...I.data()})),!J){J=!0;return}y.docChanges().forEach(I=>{if(I.type==="added"){const T=I.doc.data(),K=i.value.find(ce=>ce.uid===T.from);Gf(N("nueva_solicitud"),`${(K==null?void 0:K.displayName)||"Alguien"} ${N("quieres_chatear")}`),Kf()}})},y=>console.error("denied:incoming",y.code)),se=Qt(gs(Jt(we,"requests"),un("from","==",r.uid),un("status","==","pending")),y=>{l.value=y.docs.map(I=>({id:I.id,...I.data()}))},y=>console.error("denied:sent",y.code)),_e=Qt(gs(Jt(we,"requests"),un("from","==",r.uid),un("status","==","accepted")),y=>{h.value=y.docs.map(I=>({id:I.id,...I.data()})),he()},y=>console.error("denied:accOut",y.code)),qe=Qt(gs(Jt(we,"requests"),un("to","==",r.uid),un("status","==","accepted")),y=>{u.value=y.docs.map(I=>({id:I.id,...I.data()})),he()},y=>console.error("denied:accIn",y.code)),Ue=y=>{y.target.closest(".sb-profile-wrap")||(w.value=!1),y.target.closest(".sb-search-row")||(g.value=!1)},document.addEventListener("click",Ue),setTimeout(()=>xC(),1500)}),Us(()=>{L==null||L(),F==null||F(),W==null||W(),U==null||U(),se==null||se(),_e==null||_e(),qe==null||qe(),Ue&&document.removeEventListener("click",Ue)});const me=()=>{w.value=!1,n("openProfile")},Me=()=>{w.value=!1,n("openSettings")},be=y=>s.favorites.includes(y),he=()=>{f.value=[...u.value,...h.value]},ue=y=>{mr(Le(we,"conversations",y),{[`unread.${r.uid}`]:0}).catch(()=>{})},He=y=>i.value.find(I=>I.uid===y),_t=Ie(()=>c.value),Kt=Ie(()=>{const y=new Set(a.value);return f.value.forEach(I=>{y.add(I.from===r.uid?I.to:I.from)}),y}),It=Ie(()=>i.value.filter(y=>Kt.value.has(y.uid))),co=Ie(()=>new Set(l.value.map(y=>y.to))),Pn=y=>Kt.value.has(y.uid)?"friend":co.value.has(y.uid)?"pending":_t.value.some(I=>I.from===y.uid)?"incoming":"none",Ac=y=>N(y==="pending"?"pendiente":y==="incoming"?"aceptar":"solicitar"),Ft=y=>y==="pending"?"mdi-clock-outline":y==="incoming"?"mdi-check":"mdi-account-plus-outline",Gs=y=>{Pn(y)==="friend"&&H(y)},qr=y=>{const I=Pn(y);if(I==="incoming"){const T=_t.value.find(K=>K.from===y.uid);T&&kn(T)}else I==="none"&&lo(y)},lo=async y=>{const I=`${r.uid}_${y.uid}`;await Ot(Le(we,"requests",I),{from:r.uid,to:y.uid,status:"pending",createdAt:pr()})},kn=async y=>{const I=Le(we,"requests",y.id),T=Le(we,"users",r.uid);await Ot(I,{status:"accepted"},{merge:!0}),await Ot(T,{friends:Qn(y.from)},{merge:!0});const K=i.value.find(ce=>ce.uid===y.from);await H({uid:y.from,displayName:(K==null?void 0:K.displayName)||y.from,photoURL:(K==null?void 0:K.photoURL)||""})},uo=async y=>{await Zc(Le(we,"requests",y.id))},ho=async y=>{const I=Le(we,"users",r.uid);await Ot(I,{friends:xh(y.uid)},{merge:!0});const T=Le(we,"requests",`${y.uid}_${r.uid}`),K=await eu(T);K.exists()&&K.data().from===y.uid&&K.data().to===r.uid&&await Zc(T);const ce=Le(we,"requests",`${r.uid}_${y.uid}`);(await eu(ce)).exists()&&await Ot(ce,{status:"declined"},{merge:!0})},m=y=>{const I=E(y);return I?I.displayName:Bn(y.id,r.uid)},_=y=>{var I,T;return!!(y&&y.online&&y.lastSeen&&Date.now()-(((T=(I=y.lastSeen).toMillis)==null?void 0:T.call(I))||0)<ak)},E=y=>i.value.find(I=>I.uid===Bn(y.id,r.uid)),b=y=>_(E(y)),R=y=>y.lastMessage?y.lastMessage:N("sin_mensajes"),V=Ie(()=>p.value.trim().toLowerCase()),j=Ie(()=>V.value?o.value.filter(y=>m(y).toLowerCase().includes(V.value)):o.value),M=Ie(()=>{let y=i.value;return V.value&&(y=y.filter(I=>(I.displayName||"").toLowerCase().includes(V.value))),y}),$=y=>{var K;const I=((K=y==null?void 0:y.toMillis)==null?void 0:K.call(y))??0;if(!I)return"";const T=Math.floor((Date.now()-I)/1e3);return T<60?N("ahora"):T<3600?`${Math.floor(T/60)}m`:T<86400?`${Math.floor(T/3600)}h`:T<604800?`${Math.floor(T/86400)}d`:new Date(I).toLocaleDateString("es-ES",{day:"numeric",month:"short"})},P=y=>{ue(y.id);const I=i.value.find(T=>T.uid===Bn(y.id,r.uid));n("open",{id:y.id,other:{name:m(y),photo:(I==null?void 0:I.photoURL)||""}})},H=async y=>{const I=VC(r.uid,y.uid);g.value=!1;const T=Le(we,"conversations",I);try{await Ot(T,{participants:Qn(r.uid,y.uid)},{merge:!0})}catch(K){console.error("startWith:conv",K.code,K.message);try{await Zc(T),await Ot(T,{participants:Qn(r.uid,y.uid)},{merge:!0})}catch(ce){console.error("startWith:repair",ce.code,ce.message)}}ue(I),n("open",{id:I,other:{name:y.displayName,photo:y.photoURL||""}})},X=async()=>{try{await mi(!0),await mT(Ye)}catch(y){console.log(y)}};return(y,I)=>(x(),B("div",$C,[d("div",BC,[pe(nu,{size:"md",showText:""}),t.isMobile?(x(),B("button",{key:0,class:"icon-btn",onClick:I[0]||(I[0]=T=>y.$emit("close"))},qC)):Te("",!0)]),d("div",HC,[d("button",{class:"sb-profile",onClick:I[1]||(I[1]=T=>w.value=!w.value)},[pe(Un,{src:C.value,name:v.value,size:"md",online:""},null,8,["src","name"]),d("div",zC,[d("span",WC,O(v.value),1),d("span",KC,O(D(k)),1)]),GC]),w.value?(x(),B("div",QC,[d("button",{class:"sb-menu-item",onClick:me},[YC,d("span",null,O(D(N)("mi_perfil")),1)]),d("button",{class:"sb-menu-item",onClick:Me},[JC,d("span",null,O(D(N)("configuracion")),1)]),XC,d("button",{class:"sb-menu-item sb-menu-danger",onClick:X},[ZC,d("span",null,O(D(N)("cerrar_sesion")),1)])])):Te("",!0)]),d("div",eP,[d("div",tP,[nP,Rs(d("input",{"onUpdate:modelValue":I[2]||(I[2]=T=>p.value=T),type:"text",placeholder:D(N)("busqueda_ph"),class:"sb-search-input"},null,8,sP),[[Ss,p.value]])]),d("button",{class:"icon-btn btn-primary sb-plus",onClick:I[3]||(I[3]=T=>g.value=!g.value)},[d("i",{class:fe(["mdi",g.value?"mdi-close":"mdi-plus"])},null,2)]),g.value?(x(),B("div",rP,[d("div",iP,[oP,d("span",null,O(D(N)("personas_reg")),1)]),(x(!0),B(De,null,Ut(M.value,T=>(x(),B("button",{key:T.uid,class:"sb-user-item",onClick:K=>Gs(T)},[pe(Un,{src:T.photoURL||"",name:T.displayName,size:"md",online:_(T)},null,8,["src","name","online"]),d("div",cP,[d("span",lP,O(T.displayName),1)]),Pn(T)!=="friend"?(x(),B("span",{key:0,class:fe(["btn-status","btn-"+Pn(T)]),onClick:je(K=>qr(T),["stop"])},[d("i",{class:fe(["mdi",Ft(Pn(T))])},null,2),d("span",null,O(Ac(Pn(T))),1)],10,uP)):(x(),B("span",{key:1,class:"btn-status btn-friend",onClick:je(K=>H(T),["stop"])},[dP,d("span",null,O(D(N)("chat")),1)],8,hP))],8,aP))),128)),M.value.length===0?(x(),B("p",fP,O(D(N)("no_personas")),1)):Te("",!0)])):Te("",!0)]),_t.value.length?(x(),B(De,{key:0},[d("div",mP,[d("div",pP,[gP,d("span",null,O(D(N)("solicitudes")),1)]),d("span",_P,O(_t.value.length),1)]),d("div",yP,[(x(!0),B(De,null,Ut(_t.value,T=>{var K,ce,de;return x(),B("div",{key:T.id,class:"conv-item friend-item"},[pe(Un,{src:((K=He(T.from))==null?void 0:K.photoURL)||"",name:((ce=He(T.from))==null?void 0:ce.displayName)||T.from,size:"lg",online:!!He(T.from)&&_(He(T.from))},null,8,["src","name","online"]),d("div",vP,[d("div",wP,[d("span",EP,O(((de=He(T.from))==null?void 0:de.displayName)||T.from),1)]),d("div",IP,[d("span",TP,O(D(N)("quiere_chatear")),1)])]),d("button",{class:"req-btn req-ok",title:"Aceptar",onClick:Pe=>kn(T)},RP,8,AP),d("button",{class:"req-btn req-no",title:"Rechazar",onClick:Pe=>uo(T)},PP,8,SP)])}),128))])],64)):Te("",!0),It.value.length?(x(),B(De,{key:1},[d("div",kP,[d("div",DP,[NP,d("span",null,O(D(N)("amigos")),1)]),d("span",OP,O(It.value.length),1)]),d("div",VP,[(x(!0),B(De,null,Ut(It.value,T=>(x(),B("div",{key:T.uid,class:"conv-item friend-item",onClick:K=>H(T)},[pe(Un,{src:T.photoURL||"",name:T.displayName,size:"lg",online:_(T)},null,8,["src","name","online"]),d("div",xP,[d("div",LP,[d("span",FP,O(T.displayName),1)]),d("div",UP,[d("span",$P,O(_(T)?D(N)("en_linea"):D(N)("desconectado")),1)])]),d("button",{class:"friend-remove",onClick:je(K=>ho(T),["stop"])},qP,8,BP)],8,MP))),128))])],64)):Te("",!0),d("div",HP,[d("div",zP,[WP,d("span",null,O(D(N)("conversaciones")),1)]),d("span",KP,O(j.value.length),1)]),d("div",GP,[(x(!0),B(De,null,Ut(j.value,T=>{var K;return x(),B("button",{key:T.id,class:fe(["conv-item",{active:T.id===t.activeId}]),onClick:ce=>P(T)},[pe(Un,{name:m(T),size:"lg",online:b(T)},null,8,["name","online"]),d("div",YP,[d("div",JP,[d("span",XP,O(m(T)),1),d("span",ZP,[be(T.id)?(x(),B("i",ek)):Te("",!0),(((K=T.unread)==null?void 0:K[D(r).uid])||0)>0?(x(),B("span",tk,O(T.unread[D(r).uid]),1)):(x(),B("span",nk,O($(T.lastAt)),1))])]),d("div",sk,[d("span",rk,O(R(T)),1)])])],10,QP)}),128)),j.value.length===0?(x(),B("div",ik,[d("p",null,O(D(N)("sin_conv")),1),d("p",ok,O(D(N)("sin_conv_sub")),1)])):Te("",!0)])]))}},Qf=ln(ck,[["__scopeId","data-v-fde28e5c"]]),lk=t=>(ss("data-v-750ffae4"),t=t(),rs(),t),uk={class:"mb-max"},hk={key:0,class:"mb-audio"},dk={class:"mb-audio-head"},fk={class:"mb-audio-track"},mk={class:"mb-audio-time"},pk=["src"],gk={key:1,class:"mb-text"},_k={key:2,class:"mb-image"},yk=["src"],vk=["title"],wk=lk(()=>d("i",{class:"mdi mdi-emoticon-plus-outline"},null,-1)),Ek=[wk],Ik={key:1,class:"mdi mdi-check-all mb-check"},Tk=["onClick"],Ak=["onClick"],bk={class:"mb-react-emoji"},Rk={key:0,class:"mb-react-count"},Sk={__name:"MessageBubble",props:{message:{type:Object,required:!0},isOwn:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},senderName:{type:String,default:""},conversationId:{type:String,default:""}},setup(t){const e=t,n=["👍","❤️","😂","😮","😢","🔥"],s=Q(null),r=Q(!1),i=Q(0),o=Q(!1),a=Q(null),c=Ie(()=>{var C;return((C=Ye.currentUser)==null?void 0:C.uid)||""}),l=C=>{o.value&&a.value&&!a.value.contains(C.target)&&(o.value=!1)};vu(()=>document.addEventListener("click",l)),Us(()=>document.removeEventListener("click",l));const u=()=>{e.conversationId&&(o.value=!o.value)},h=Ie(()=>{const C=e.message.reactions||{};return Object.entries(C).map(([L,F])=>({emoji:L,uidList:Array.isArray(F)?F:[]})).filter(L=>L.uidList.length>0).map(L=>({emoji:L.emoji,count:L.uidList.length,mine:L.uidList.includes(c.value)}))}),f=async C=>{var U;o.value=!1;const L=c.value;if(!L||!e.conversationId||!e.message.id)return;const F=((U=e.message.reactions)==null?void 0:U[C])||[],W=Array.isArray(F)&&F.includes(L);try{await mr(Le(we,"conversations",e.conversationId,"messages",e.message.id),{[`reactions.${C}`]:W?xh(L):Qn(L)})}catch(se){console.log("reaction",se)}},p=Ie(()=>{var L;const C=((L=e.message.time)==null?void 0:L.seconds)??0;return C?new Date(C*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),w=Ie(()=>{const C=e.message.duration||0;return`${Math.floor(C/60)}:${String(C%60).padStart(2,"0")}`}),g=()=>{const C=s.value;C&&(r.value?C.pause():C.play().catch(()=>{}),r.value=!r.value)},v=()=>{const C=s.value;!C||!C.duration||(i.value=C.currentTime/C.duration*100)},k=()=>{r.value=!1,i.value=0};return(C,L)=>(x(),B("div",{class:fe(["mb-row",t.isOwn?"mb-own":"mb-other"]),ref_key:"rowRef",ref:a},[d("div",{class:fe(["mb-avatar",t.showAvatar?"":"mb-avatar-hidden"])},[pe(Un,{src:t.avatar||"",name:t.senderName,size:"sm"},null,8,["src","name"])],2),d("div",uk,[d("div",{class:fe(["mb-bubble",t.isOwn?"mb-bubble-own":"mb-bubble-other"]),onClick:u},[t.message.audio?(x(),B("div",hk,[d("div",dk,[d("button",{class:"mb-audio-play",onClick:je(g,["stop"])},[d("i",{class:fe(["mdi",r.value?"mdi-pause":"mdi-play"])},null,2)]),d("div",fk,[d("div",{class:"mb-audio-fill",style:Nr({width:i.value+"%"})},null,4)]),d("span",mk,O(w.value),1)]),d("audio",{ref_key:"audioRef",ref:s,src:t.message.audio,preload:"metadata",onTimeupdate:v,onEnded:k},null,40,pk)])):t.message.text?(x(),B("p",gk,O(t.message.text),1)):t.message.image?(x(),B("div",_k,[d("img",{src:t.message.image,alt:"Compartida",draggable:"false",onContextmenu:L[0]||(L[0]=je(()=>{},["prevent"])),onDragstart:L[1]||(L[1]=je(()=>{},["prevent"]))},null,40,yk)])):Te("",!0),d("div",{class:fe(["mb-meta",t.isOwn?"mb-meta-own":""])},[t.conversationId?(x(),B("button",{key:0,class:fe(["mb-react-trigger",{active:o.value}]),title:D(N)("reaccionar"),onClick:L[2]||(L[2]=je(F=>o.value=!o.value,["stop"]))},Ek,10,vk)):Te("",!0),d("span",null,O(p.value),1),t.isOwn?(x(),B("i",Ik)):Te("",!0)],2),o.value?(x(),B("div",{key:3,class:fe(["mb-react-picker",t.isOwn?"mb-picker-own":""]),onClick:L[3]||(L[3]=je(()=>{},["stop"]))},[(x(),B(De,null,Ut(n,F=>d("button",{key:F,class:"mb-react-opt",onClick:W=>f(F)},O(F),9,Tk)),64))],2)):Te("",!0)],2),h.value.length?(x(),B("div",{key:0,class:fe(["mb-reactions",t.isOwn?"mb-reactions-own":""])},[(x(!0),B(De,null,Ut(h.value,F=>(x(),B("button",{key:F.emoji,class:fe(["mb-react-chip",{mine:F.mine}]),onClick:W=>f(F.emoji)},[d("span",bk,O(F.emoji),1),F.count>1?(x(),B("span",Rk,O(F.count),1)):Te("",!0)],10,Ak))),128))],2)):Te("",!0)])],2))}},Ck=ln(Sk,[["__scopeId","data-v-750ffae4"]]),jr=t=>(ss("data-v-bef45fbe"),t=t(),rs(),t),Pk={class:"chat-input-wrap"},kk={key:1,class:"ci-attach"},Dk=jr(()=>d("i",{class:"mdi mdi-image-outline"},null,-1)),Nk=[Dk],Ok={class:"ci-picker"},Vk={class:"ci-picker-head"},Mk=jr(()=>d("i",{class:"mdi mdi-close"},null,-1)),xk=[Mk],Lk={class:"ci-picker-hint"},Fk={class:"ci-picker-grid"},Uk=["onClick"],$k=["src"],Bk={key:0,class:"ci-picker-check"},jk=jr(()=>d("i",{class:"mdi mdi-check"},null,-1)),qk=[jk],Hk={key:1,class:"ci-picker-num"},zk={class:"ci-picker-foot"},Wk=["disabled"],Kk={class:"ci-row"},Gk={class:"ci-input-box"},Qk=["placeholder","onKeydown"],Yk=jr(()=>d("button",{class:"ci-round-btn ci-smile"},[d("i",{class:"mdi mdi-emoticon-outline"})],-1)),Jk=jr(()=>d("i",{class:"mdi mdi-send"},null,-1)),Xk=[Jk],Zk={key:3,class:"ci-recording"},eD=jr(()=>d("span",{class:"ci-rec-dot"},null,-1)),tD={class:"ci-rec-text"},nD={class:"ci-rec-time"},sD={key:4,class:"ci-recording"},rD={class:"ci-rec-text"},iD=3e4,Ys=3,oD={__name:"FormAdd",props:{conversationId:{type:String,required:!0}},setup(t){const e=t,n=Q(""),s=Q(!1),r=Q(!1),i=Q(0),o=Q(""),a=Q([]),c=Q(!1),l=Q(null),u=Q(null),h=Ie(()=>a.value.filter(Z=>Z.selected).length),f=Ie(()=>{const Z=Math.floor(i.value/1e3);return`${Math.floor(Z/60)}:${String(Z%60).padStart(2,"0")}`}),p={media:null,recorder:null,chunks:[],timer:null,startedAt:0,type:"audio/webm"},w=()=>{const Z=l.value;Z&&(Z.style.height="auto",Z.style.height=`${Math.min(Z.scrollHeight,128)}px`)},g=async()=>{const Z=n.value.trim();if(!(!Z||!e.conversationId))try{const J=Ye.currentUser,te=Bn(e.conversationId,J.uid),me=Le(we,"conversations",e.conversationId);await Ot(me,{participants:Qn(J.uid,te)},{merge:!0});const Me=nl(we),be=Le(Jt(we,"conversations",e.conversationId,"messages"));Me.set(be,{text:Z,time:Oe.fromDate(new Date),uid:J.uid,displayName:J.displayName}),Me.update(me,{lastMessage:Z,lastAt:Oe.fromDate(new Date),[`unread.${te}`]:tl(1)}),await Me.commit(),n.value="",Ra(()=>w())}catch(J){console.log(J)}},v=()=>{var Z;s.value=!1,(Z=u.value)==null||Z.click()},k=async Z=>{const J=[...Z.target.files||[]];if(Z.target.value="",!(!J.length||!e.conversationId)){if(J.length>Ys){a.value=J.map((te,me)=>({id:me,file:te,preview:URL.createObjectURL(te),selected:me<Ys})),c.value=!0;return}for(const te of J)await W(te)}},C=Z=>{const J=a.value[Z];J&&(J.selected?J.selected=!1:h.value<Ys&&(J.selected=!0))},L=()=>{a.value.forEach(Z=>URL.revokeObjectURL(Z.preview)),a.value=[],c.value=!1},F=async()=>{const Z=a.value.filter(J=>J.selected);L();for(const J of Z)await W(J.file)},W=async Z=>{try{const J=await U(Z);if(!J)return;const te=Ye.currentUser,me=Bn(e.conversationId,te.uid),Me=Le(we,"conversations",e.conversationId);await Ot(Me,{participants:Qn(te.uid,me)},{merge:!0});const be=nl(we),he=Le(Jt(we,"conversations",e.conversationId,"messages"));be.set(he,{image:J,text:"",time:Oe.fromDate(new Date),uid:te.uid,displayName:te.displayName}),be.update(Me,{lastMessage:"📷 Foto",lastAt:Oe.fromDate(new Date),[`unread.${me}`]:tl(1)}),await be.commit()}catch(J){console.log(J)}},U=Z=>new Promise(J=>{const te=new FileReader;te.onload=()=>{const me=new Image;me.onload=()=>{const be=Math.min(1,1e3/Math.max(me.naturalWidth,me.naturalHeight)),he=Math.max(1,Math.round(me.naturalWidth*be)),ue=Math.max(1,Math.round(me.naturalHeight*be)),He=document.createElement("canvas");He.width=he,He.height=ue;const _t=He.getContext("2d");if(!_t)return J(te.result);_t.fillStyle="#fff",_t.fillRect(0,0,he,ue),_t.drawImage(me,0,0,he,ue),J(He.toDataURL("image/jpeg",.75))},me.onerror=()=>J(null),me.src=te.result},te.onerror=()=>J(null),te.readAsDataURL(Z)}),se=()=>{if(r.value){qe();return}_e()},_e=async()=>{if(e.conversationId)try{const Z=await navigator.mediaDevices.getUserMedia({audio:!0}),J=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"",te=new MediaRecorder(Z,{...J?{mimeType:J}:{},audioBitsPerSecond:24e3}),me=[];te.ondataavailable=Me=>{Me.data&&Me.data.size>0&&me.push(Me.data)},te.onstop=()=>{var he;(he=p.media)==null||he.getTracks().forEach(ue=>ue.stop());const Me=Math.max(1,Math.round((Date.now()-p.startedAt)/1e3)),be=new Blob(me,{type:p.type});Ue(be,Me)},p.media=Z,p.recorder=te,p.chunks=me,p.startedAt=Date.now(),te.start(),p.type=te.mimeType||J||"audio/webm",r.value=!0,i.value=0,p.timer=setInterval(()=>{i.value=Date.now()-p.startedAt,i.value>=iD&&qe()},250)}catch(Z){console.log(Z),r.value=!1}},qe=()=>{clearInterval(p.timer),p.timer=null,r.value=!1;try{p.recorder&&p.recorder.state!=="inactive"&&p.recorder.stop()}catch(Z){console.log(Z)}},Ue=(Z,J)=>{if(!e.conversationId)return;const te=new FileReader;te.onload=async()=>{try{const me=te.result;if(typeof me!="string"||me.length>9e5){o.value=N("nota_larga"),setTimeout(()=>{o.value=""},4e3);return}const Me=Ye.currentUser,be=Bn(e.conversationId,Me.uid),he=Le(we,"conversations",e.conversationId);await Ot(he,{participants:Qn(Me.uid,be)},{merge:!0});const ue=nl(we),He=Le(Jt(we,"conversations",e.conversationId,"messages"));ue.set(He,{audio:me,duration:J,text:"",time:Oe.fromDate(new Date),uid:Me.uid,displayName:Me.displayName}),ue.update(he,{lastMessage:"🎤 Nota de voz",lastAt:Oe.fromDate(new Date),[`unread.${be}`]:tl(1)}),await ue.commit()}catch(me){console.log(me)}},te.readAsDataURL(Z)};return Us(()=>{var Z;clearInterval(p.timer),(Z=p.media)==null||Z.getTracks().forEach(J=>J.stop())}),(Z,J)=>(x(),B("div",Pk,[s.value?(x(),B("div",{key:0,class:"ci-backdrop",onClick:J[0]||(J[0]=te=>s.value=!1)})):Te("",!0),s.value?(x(),B("div",kk,[d("button",{class:"ci-attach-btn",onClick:v},Nk)])):Te("",!0),d("input",{ref_key:"fileInput",ref:u,type:"file",accept:"image/*",multiple:"",class:"hidden",onChange:k},null,544),c.value?(x(),B("div",{key:2,class:"ci-modal",onClick:je(L,["self"])},[d("div",Ok,[d("div",Vk,[d("h4",null,O(D(N)("elige_fotos")),1),d("span",{class:fe(["ci-picker-count",{full:h.value===Ys}])},O(h.value)+"/"+O(Ys),3),d("button",{class:"icon-btn",onClick:L},xk)]),d("p",Lk,O(D(N)("max_3_fotos")),1),d("div",Fk,[(x(!0),B(De,null,Ut(a.value,(te,me)=>(x(),B("div",{key:te.id,class:fe(["ci-picker-item",{selected:te.selected,dimmed:!te.selected&&h.value===Ys}]),onClick:Me=>C(me)},[d("img",{src:te.preview,alt:"Foto"},null,8,$k),te.selected?(x(),B("span",Bk,qk)):(x(),B("span",Hk,O(me+1),1))],10,Uk))),128))]),d("div",zk,[d("button",{class:"btn-primary ci-picker-send",disabled:h.value===0,onClick:F},O(D(N)("enviar_fotos")),9,Wk)])])])):Te("",!0),d("div",Kk,[d("button",{class:fe(["ci-round-btn",{active:s.value}]),onClick:J[1]||(J[1]=te=>s.value=!s.value)},[d("i",{class:fe(["mdi",s.value?"mdi-close":"mdi-paperclip"])},null,2)],2),d("div",Gk,[Rs(d("textarea",{ref_key:"taRef",ref:l,"onUpdate:modelValue":J[2]||(J[2]=te=>n.value=te),rows:"1",placeholder:D(N)("enviar_ph"),class:"ci-textarea",onInput:w,onKeydown:bp(je(g,["exact","prevent"]),["enter"])},null,40,Qk),[[Ss,n.value]]),Yk]),n.value.trim()?(x(),B("button",{key:0,class:"ci-round-btn btn-primary ci-send",onClick:g},Xk)):(x(),B("button",{key:1,class:fe(["ci-round-btn ci-send btn-primary",{recording:r.value}]),onClick:se},[d("i",{class:fe(["mdi",r.value?"mdi-stop":"mdi-microphone"])},null,2)],2))]),r.value?(x(),B("div",Zk,[eD,d("span",tD,O(D(N)("grabar")),1),d("span",nD,O(f.value),1)])):Te("",!0),o.value?(x(),B("div",sD,[d("span",rD,O(o.value),1)])):Te("",!0)]))}},aD=ln(oD,[["__scopeId","data-v-bef45fbe"]]),Ws=t=>(ss("data-v-3a49f298"),t=t(),rs(),t),cD={class:"chat-main-wrap"},lD=Ws(()=>d("div",{class:"cm-grid"},null,-1)),uD={class:"cm-header"},hD=Ws(()=>d("i",{class:"mdi mdi-menu"},null,-1)),dD=[hD],fD={class:"cm-header-info"},mD={class:"cm-header-actions"},pD={class:"cm-menu"},gD=Ws(()=>d("i",{class:"mdi mdi-dots-horizontal"},null,-1)),_D=[gD],yD={key:0,class:"cm-pop"},vD=Ws(()=>d("i",{class:"mdi mdi-account-circle-outline"},null,-1)),wD=Ws(()=>d("i",{class:"mdi mdi-image-multiple-outline"},null,-1)),ED={key:0,class:"cm-empty"},ID=Ws(()=>d("i",{class:"mdi mdi-chat-processing-outline cm-empty-icon"},null,-1)),TD={class:"cm-empty-sub"},AD={class:"cm-date-pill"},bD={class:"cm-photos"},RD={class:"cm-photos-head"},SD=Ws(()=>d("i",{class:"mdi mdi-close"},null,-1)),CD=[SD],PD={key:0,class:"cm-photos-grid"},kD=["src","onClick"],DD={key:1,class:"cm-photos-empty"},ND=["src"],OD=25e3,VD={__name:"Messages",props:{conversationId:{type:String,required:!0},other:{type:Object,default:()=>({})},profile:{type:Object,default:()=>({})},isFavorite:{type:Boolean,default:!1}},emits:["openDrawer","openProfile","toggleFavorite"],setup(t,{emit:e}){const n=t,s=e,r=Ie(()=>{var F,W,U,se;return{uid:((F=Ye.currentUser)==null?void 0:F.uid)||"",displayName:((W=n.profile)==null?void 0:W.displayName)||((U=Ye.currentUser)==null?void 0:U.displayName)||((se=Ye.currentUser)==null?void 0:se.email)||""}}),i=Ie(()=>{var F,W;return((F=n.profile)==null?void 0:F.photoURL)||((W=Ye.currentUser)==null?void 0:W.photoURL)||""}),o=Q([]),a=Q(null),c=Q(!1),l=Q(!1),u=Q(""),h=Q(!1),f=Ie(()=>o.value.filter(F=>F.image)),p=()=>{c.value=!1,s("openProfile")},w=()=>{c.value=!1,s("toggleFavorite",n.conversationId)},g=()=>{c.value=!1,l.value=!0};let v=null,k=null;const C=F=>{var U;if(k==null||k(),k=null,h.value=!1,!F)return;const W=Bn(F,((U=Ye.currentUser)==null?void 0:U.uid)||"");W&&(k=Qt(Le(we,"users",W),se=>{var qe,Ue;const _e=se.data()||{};h.value=!!(_e.online&&_e.lastSeen&&Date.now()-(((Ue=(qe=_e.lastSeen).toMillis)==null?void 0:Ue.call(qe))||0)<OD)},()=>{}))},L=F=>{if(v&&(v(),v=null),o.value=[],!F)return;const W=gs(Jt(we,"conversations",F,"messages"),SS("time"));v=Qt(W,U=>{o.value=U.docs.map(se=>({id:se.id,...se.data()})),Ra(()=>{var _e;const se=(_e=a.value)==null?void 0:_e.lastElementChild;se&&se.scrollIntoView({behavior:"smooth",block:"end"})})})};return qt(()=>n.conversationId,F=>{L(F),C(F)},{immediate:!0}),Us(()=>{v==null||v(),k==null||k()}),(F,W)=>(x(),B("div",cD,[lD,d("header",uD,[d("button",{class:"icon-btn cm-menu-btn",onClick:W[0]||(W[0]=U=>F.$emit("openDrawer"))},dD),pe(Un,{src:t.other.photo||"",name:t.other.name,size:"md"},null,8,["src","name"]),d("div",fD,[d("h2",null,O(t.other.name),1),d("p",null,[d("span",{class:fe(["cm-status-dot",{"cm-status-offline":!h.value}])},null,2),en(" "+O(h.value?D(N)("en_linea"):D(N)("desconectado")),1)])]),d("div",mD,[d("div",pD,[d("button",{class:fe(["icon-btn",{active:c.value}]),onClick:W[1]||(W[1]=U=>c.value=!c.value)},_D,2),c.value?(x(),B("div",yD,[d("button",{class:"cm-pop-item",onClick:p},[vD,d("span",null,O(D(N)("mi_perfil")),1)]),d("button",{class:"cm-pop-item",onClick:w},[d("i",{class:fe(["mdi",t.isFavorite?"mdi-star":"mdi-star-outline"])},null,2),d("span",null,O(t.isFavorite?D(N)("quitar_fav"):D(N)("ag_favoritos")),1)]),d("button",{class:"cm-pop-item",onClick:g},[wD,d("span",null,O(D(N)("fotos_compartidas")),1)])])):Te("",!0)])])]),o.value.length===0?(x(),B("div",ED,[ID,d("p",null,O(D(N)("no_mensajes")),1),d("p",TD,O(D(N)("envia_primero")),1)])):(x(),B("div",{key:1,class:"cm-list",ref_key:"listRef",ref:a},[d("div",AD,O(D(N)("hoy")),1),(x(!0),B(De,null,Ut(o.value,(U,se)=>{var _e;return x(),vs(Ck,{key:U.id,message:U,"is-own":U.uid===r.value.uid,"show-avatar":se===0||((_e=o.value[se-1])==null?void 0:_e.uid)!==U.uid,avatar:U.uid===r.value.uid?i.value:t.other.photo,"sender-name":U.uid===r.value.uid?r.value.displayName:t.other.name,"conversation-id":t.conversationId},null,8,["message","is-own","show-avatar","avatar","sender-name","conversation-id"])}),128))],512)),t.conversationId?(x(),vs(aD,{key:2,"conversation-id":t.conversationId},null,8,["conversation-id"])):Te("",!0),l.value?(x(),B("div",{key:3,class:"cm-modal",onClick:W[5]||(W[5]=je(U=>l.value=!1,["self"]))},[d("div",bD,[d("div",RD,[d("h4",null,O(D(N)("fotos_compartidas")),1),d("button",{class:"icon-btn",onClick:W[2]||(W[2]=U=>l.value=!1)},CD)]),f.value.length?(x(),B("div",PD,[(x(!0),B(De,null,Ut(f.value,U=>(x(),B("img",{key:U.id,src:U.image,alt:"Foto",draggable:"false",onClick:se=>u.value=U.image,onContextmenu:W[3]||(W[3]=je(()=>{},["prevent"])),onDragstart:W[4]||(W[4]=je(()=>{},["prevent"]))},null,40,kD))),128))])):(x(),B("p",DD,O(D(N)("sin_fotos")),1))])])):Te("",!0),u.value?(x(),B("div",{key:4,class:"cm-lightbox",onClick:W[8]||(W[8]=U=>u.value="")},[d("img",{src:u.value,alt:"Foto",draggable:"false",onContextmenu:W[6]||(W[6]=je(()=>{},["prevent"])),onDragstart:W[7]||(W[7]=je(()=>{},["prevent"]))},null,40,ND)])):Te("",!0)]))}},MD=ln(VD,[["__scopeId","data-v-3a49f298"]]),Ks=t=>(ss("data-v-70fa2247"),t=t(),rs(),t),xD={class:"modal-card"},LD={class:"modal-head"},FD=Ks(()=>d("i",{class:"mdi mdi-close"},null,-1)),UD=[FD],$D={class:"set-row"},BD={class:"set-label"},jD=Ks(()=>d("i",{class:"mdi mdi-translate"},null,-1)),qD={class:"set-opts"},HD=Ks(()=>d("span",{class:"set-flag"},"🇪🇸",-1)),zD=Ks(()=>d("span",{class:"set-flag"},"🇺🇸",-1)),WD={class:"set-row"},KD={class:"set-label"},GD=Ks(()=>d("i",{class:"mdi mdi-palette-outline"},null,-1)),QD={class:"set-opts"},YD=Ks(()=>d("span",{class:"swatch swatch-orange"},null,-1)),JD=Ks(()=>d("span",{class:"swatch swatch-blue"},null,-1)),XD={__name:"SettingsPanel",emits:["close"],setup(t,{emit:e}){const n=e,s=()=>setTimeout(()=>n("close"),350),r=o=>{FS(o),s()},i=o=>{US(o),s()};return(o,a)=>(x(),B("div",{class:"modal-backdrop",onClick:a[5]||(a[5]=je(c=>n("close"),["self"]))},[d("div",xD,[d("div",LD,[d("h3",null,O(D(N)("configuracion")),1),d("button",{class:"icon-btn",onClick:a[0]||(a[0]=c=>n("close"))},UD)]),d("div",$D,[d("div",BD,[jD,d("span",null,O(D(N)("idioma")),1)]),d("div",qD,[d("button",{class:fe(["set-opt",{active:D(_a)==="es"}]),onClick:a[1]||(a[1]=c=>r("es"))},[HD,en(" "+O(D(N)("espanol")),1)],2),d("button",{class:fe(["set-opt",{active:D(_a)==="en"}]),onClick:a[2]||(a[2]=c=>r("en"))},[zD,en(" "+O(D(N)("english")),1)],2)])]),d("div",WD,[d("div",KD,[GD,d("span",null,O(D(N)("tema")),1)]),d("div",QD,[d("button",{class:fe(["set-opt set-theme",{active:D(ya)==="naranja"}]),onClick:a[3]||(a[3]=c=>i("naranja"))},[YD,en(" "+O(D(N)("naranja")),1)],2),d("button",{class:fe(["set-opt set-theme",{active:D(ya)==="azul"}]),onClick:a[4]||(a[4]=c=>i("azul"))},[JD,en(" "+O(D(N)("azul")),1)],2)])])])]))}},ZD=ln(XD,[["__scopeId","data-v-70fa2247"]]),Lh=t=>(ss("data-v-3bc49a19"),t=t(),rs(),t),eN={class:"modal-card"},tN={class:"modal-head"},nN=Lh(()=>d("i",{class:"mdi mdi-close"},null,-1)),sN=[nN],rN={class:"prof-avatar-wrap"},iN=Lh(()=>d("i",{class:"mdi mdi-camera-outline"},null,-1)),oN={class:"field"},aN=["placeholder"],cN={class:"field"},lN=["disabled"],uN={key:0,class:"saved-note"},hN=Lh(()=>d("i",{class:"mdi mdi-check-circle"},null,-1)),dN={__name:"ProfileModal",props:{profile:{type:Object,default:()=>({})}},emits:["close"],setup(t,{emit:e}){const n=t,s=e,r=Q(""),i=Q(""),o=Q(""),a=Q(""),c=Q(null),l=Q(!1),u=Q(!1);qt(()=>n.profile,g=>{!g||typeof g!="object"||(r.value=g.displayName||"",i.value=g.birthday||"",o.value=g.photoURL||"",a.value=g.photoURL||"")},{immediate:!0});const h=()=>{var g;(g=c.value)==null||g.click()},f=async g=>{var C;const v=(C=g.target.files)==null?void 0:C[0];if(g.target.value="",!v)return;const k=await p(v);k&&(o.value=k,a.value=k)},p=g=>new Promise(v=>{const k=new FileReader;k.onload=()=>{const C=new Image;C.onload=()=>{const F=Math.min(1,512/Math.max(C.naturalWidth,C.naturalHeight)),W=Math.max(1,Math.round(C.naturalWidth*F)),U=Math.max(1,Math.round(C.naturalHeight*F)),se=document.createElement("canvas");se.width=W,se.height=U;const _e=se.getContext("2d");if(!_e)return v(k.result);_e.fillStyle="#fff",_e.fillRect(0,0,W,U),_e.drawImage(C,0,0,W,U),v(se.toDataURL("image/jpeg",.8))},C.onerror=()=>v(null),C.src=k.result},k.onerror=()=>v(null),k.readAsDataURL(g)}),w=async()=>{var v;const g=Ye.currentUser;if(g){l.value=!0;try{const k={displayName:r.value.trim()||((v=g.email)==null?void 0:v.split("@")[0])||"Usuario",photoURL:o.value||"",birthday:i.value||""};await Ot(Le(we,"users",g.uid),k,{merge:!0}),await Mu(g,{displayName:k.displayName,photoURL:k.photoURL}).catch(()=>{}),u.value=!0,setTimeout(()=>s("close"),600)}catch(k){console.log(k)}finally{l.value=!1}}};return(g,v)=>(x(),B("div",{class:"modal-backdrop",onClick:v[3]||(v[3]=je(k=>s("close"),["self"]))},[d("div",eN,[d("div",tN,[d("h3",null,O(D(N)("mi_perfil")),1),d("button",{class:"icon-btn",onClick:v[0]||(v[0]=k=>s("close"))},sN)]),d("div",rN,[pe(Un,{src:a.value,name:r.value||"?",size:"xl"},null,8,["src","name"]),d("button",{class:"prof-photo-btn",onClick:h},[iN,d("span",null,O(D(N)("cambiar_foto")),1)]),d("input",{ref_key:"photoInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:f},null,544)]),d("div",oN,[d("label",null,O(D(N)("alias")),1),Rs(d("input",{"onUpdate:modelValue":v[1]||(v[1]=k=>r.value=k),type:"text",placeholder:D(N)("alias_ph")},null,8,aN),[[Ss,r.value]])]),d("div",cN,[d("label",null,O(D(N)("cumpleanos")),1),Rs(d("input",{"onUpdate:modelValue":v[2]||(v[2]=k=>i.value=k),type:"date"},null,512),[[Ss,i.value]])]),d("button",{class:"save-btn btn-primary",type:"button",disabled:l.value,onClick:w},[d("span",null,O(l.value?D(N)("cargando"):D(N)("guardar")),1)],8,lN),u.value?(x(),B("p",uN,[hN,en(" "+O(D(N)("guardado")),1)])):Te("",!0)])]))}},fN=ln(dN,[["__scopeId","data-v-3bc49a19"]]),mN={key:0,class:"app-loading"},pN=d("div",{class:"app-spinner"},null,-1),gN={key:2,class:"app-chat"},_N={class:"side-desktop"},yN={key:1,class:"side-mobile"},vN={key:3,class:"app-placeholder"},wN=d("i",{class:"mdi mdi-chat-processing-outline"},null,-1),EN=[wN],IN={class:"app-placeholder-sub"},TN={__name:"App",setup(t){qy();const e=()=>mi(!0);typeof window<"u"&&window.addEventListener("pagehide",e);const n=Q(null),s=Q(!1),r=Q(!1),i=Q(null),o=Q({}),a=Q(!1),c=Q(!1);let l=null;const u=({id:w,other:g})=>{i.value={id:w,other:g},r.value=!1},h=Ie(()=>o.value.favorites||[]),f=Ie(()=>i.value?h.value.includes(i.value.id):!1),p=async w=>{const g=Ye.currentUser;if(!g)return;const v=Le(we,"users",g.uid);try{h.value.includes(w)?await mr(v,{favorites:xh(w)}):await mr(v,{favorites:Qn(w)})}catch(k){console.log(k)}};return fT(Ye,async w=>{if(n.value=w,s.value=!0,w){MS(w.uid);try{const g=C=>(C||"").trim().split(/\s+/)[0]||"",v=Le(we,"users",w.uid),k=await eu(v);if(k.exists()){const C=k.data(),L={lastSeen:pr(),online:!0},F=g(w.displayName);F&&C.displayName&&C.displayName===(w.displayName||"")&&C.displayName.includes(" ")&&C.displayName!==F&&(L.displayName=F),await mr(v,L)}else{const C=g(w.displayName)||g(w.email);await Ot(v,{uid:w.uid,displayName:C,email:w.email,photoURL:w.photoURL||"",online:!0,lastSeen:pr(),createdAt:pr()}),Mu(Ye.currentUser,{displayName:C}).catch(()=>{})}}catch(g){console.error("Error registrando usuario:",g)}l==null||l(),l=Qt(Le(we,"users",w.uid),g=>{o.value=g.data()||{}},g=>console.error("denied:me",g.code))}else mi(!1),l==null||l(),l=null}),Us(()=>{typeof window<"u"&&window.removeEventListener("pagehide",e),mi(!1),l==null||l()}),(w,g)=>(x(),B(De,null,[s.value?n.value?(x(),B("div",gN,[d("div",_N,[pe(Qf,{"active-id":i.value?i.value.id:"",profile:o.value,favorites:h.value,onOpen:u,onOpenProfile:g[0]||(g[0]=v=>c.value=!0),onOpenSettings:g[1]||(g[1]=v=>a.value=!0)},null,8,["active-id","profile","favorites"])]),r.value?(x(),B("div",{key:0,class:"overlay",onClick:g[2]||(g[2]=v=>r.value=!1)})):Te("",!0),r.value?(x(),B("div",yN,[pe(Qf,{"active-id":i.value?i.value.id:"",profile:o.value,favorites:h.value,"is-mobile":"",onOpen:u,onClose:g[3]||(g[3]=v=>r.value=!1),onOpenProfile:g[4]||(g[4]=v=>c.value=!0),onOpenSettings:g[5]||(g[5]=v=>a.value=!0)},null,8,["active-id","profile","favorites"])])):Te("",!0),i.value?(x(),vs(MD,{key:2,"conversation-id":i.value.id,other:i.value.other,profile:o.value,"is-favorite":f.value,onOpenDrawer:g[6]||(g[6]=v=>r.value=!0),onOpenProfile:g[7]||(g[7]=v=>c.value=!0),onToggleFavorite:p},null,8,["conversation-id","other","profile","is-favorite"])):(x(),B("div",vN,[d("button",{class:"app-placeholder-icon",onClick:g[8]||(g[8]=v=>r.value=!0)},EN),d("p",null,O(D(N)("selecciona")),1),d("p",IN,O(D(N)("para_chatear")),1)]))])):(x(),vs(OC,{key:1})):(x(),B("div",mN,[pN,d("span",null,O(D(N)("cargando")),1)])),a.value?(x(),vs(ZD,{key:3,onClose:g[9]||(g[9]=v=>a.value=!1)})):Te("",!0),c.value?(x(),vs(fN,{key:4,profile:o.value,onClose:g[10]||(g[10]=v=>c.value=!1)},null,8,["profile"])):Te("",!0)],64))}};function AN(t,e){let n;function s(){n=wv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}qt(t,r=>{r&&!n?s():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),Tv(()=>{n==null||n.stop()})}const sn=typeof window<"u",bN=sn&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function RN(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let r=0;r<s;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function Yf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),RN(t,e.split("."),n))}function Wy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function Jf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function rl(t,e){return e.every(n=>t.hasOwnProperty(n))}function SN(t,e){const n={},s=new Set(Object.keys(t));for(const r of e)s.has(r)&&(n[r]=t[r]);return n}function CN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Xf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Zf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function PN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function An(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const r in t)s[r]=t[r];for(const r in e){const i=t[r],o=e[r];if(Jf(i)&&Jf(o)){s[r]=An(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){s[r]=n(i,o);continue}s[r]=o}return s}function gr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(gr.cache.has(t))return gr.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return gr.cache.set(t,e),e}gr.cache=new Map;const Js=2.4,em=.2126729,tm=.7151522,nm=.072175,kN=.55,DN=.58,NN=.57,ON=.62,Po=.03,sm=1.45,VN=5e-4,MN=1.25,xN=1.25,rm=.078,im=12.82051282051282,ko=.06,om=.001;function am(t,e){const n=(t.r/255)**Js,s=(t.g/255)**Js,r=(t.b/255)**Js,i=(e.r/255)**Js,o=(e.g/255)**Js,a=(e.b/255)**Js;let c=n*em+s*tm+r*nm,l=i*em+o*tm+a*nm;if(c<=Po&&(c+=(Po-c)**sm),l<=Po&&(l+=(Po-l)**sm),Math.abs(l-c)<VN)return 0;let u;if(l>c){const h=(l**kN-c**DN)*MN;u=h<om?0:h<rm?h-h*im*ko:h-ko}else{const h=(l**ON-c**NN)*xN;u=h>-om?0:h>-rm?h-h*im*ko:h+ko}return u*100}const va=.20689655172413793,LN=t=>t>va**3?Math.cbrt(t):t/(3*va**2)+4/29,FN=t=>t>va?t**3:3*va**2*(t-4/29);function Ky(t){const e=LN,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Gy(t){const e=FN,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const UN=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],$N=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,BN=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],jN=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Qy(t){const e=Array(3),n=$N,s=UN;for(let r=0;r<3;++r)e[r]=Math.round(CN(n(s[r][0]*t[0]+s[r][1]*t[1]+s[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Fh(t){let{r:e,g:n,b:s}=t;const r=[0,0,0],i=jN,o=BN;e=i(e/255),n=i(n/255),s=i(s/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return r}const cm=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,qN={rgb:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),rgba:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),hsl:(t,e,n,s)=>lm({h:t,s:e,l:n,a:s}),hsla:(t,e,n,s)=>lm({h:t,s:e,l:n,a:s}),hsv:(t,e,n,s)=>Li({h:t,s:e,v:n,a:s}),hsva:(t,e,n,s)=>Li({h:t,s:e,v:n,a:s})};function _n(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&cm.test(t)){const{groups:e}=t.match(cm),{fn:n,values:s}=e,r=s.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return qN[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),zN(e)}else if(typeof t=="object"){if(rl(t,["r","g","b"]))return t;if(rl(t,["h","s","l"]))return Li(Yy(t));if(rl(t,["h","s","v"]))return Li(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Li(t){const{h:e,s:n,v:s,a:r}=t,i=a=>{const c=(a+e/60)%6;return s-s*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function lm(t){return Li(Yy(t))}function Yy(t){const{h:e,s:n,l:s,a:r}=t,i=s+n*Math.min(s,1-s),o=i===0?0:2-2*s/i;return{h:e,s:o,v:i,a:r}}function Do(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function HN(t){let{r:e,g:n,b:s,a:r}=t;return`#${[Do(e),Do(n),Do(s),r!==void 0?Do(Math.round(r*255)):""].join("")}`}function zN(t){t=WN(t);let[e,n,s,r]=PN(t,2).map(i=>parseInt(i,16));return r=r===void 0?r:r/255,{r:e,g:n,b:s,a:r}}function WN(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Xf(Xf(t,6),8,"F")),t}function KN(t,e){const n=Ky(Fh(t));return n[0]=n[0]+e*10,Qy(Gy(n))}function GN(t,e){const n=Ky(Fh(t));return n[0]=n[0]-e*10,Qy(Gy(n))}function QN(t){const e=_n(t);return Fh(e)[1]}function YN(t){const e=Math.abs(am(_n(0),_n(t)));return Math.abs(am(_n(16777215),_n(t)))>Math.min(e,50)?"#fff":"#000"}function Jy(t,e){return n=>Object.keys(t).reduce((s,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?s[r]={...o,default:n[r]}:s[r]=o,e&&!s[r].source&&(s[r].source=e),s},{})}const Fi=Symbol.for("vuetify:defaults");function JN(t){return Q(t)}function Xy(){const t=oi(Fi);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function XN(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[gr(e)])<"u"}function ZN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xy();const s=Ic("useDefaults");if(e=e??s.type.name??s.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=Ie(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,l){var h,f,p,w;const u=Reflect.get(c,l);return l==="class"||l==="style"?[(h=r.value)==null?void 0:h[l],u].filter(g=>g!=null):typeof l=="string"&&!XN(s.vnode,l)?((f=r.value)==null?void 0:f[l])??((w=(p=n.value)==null?void 0:p.global)==null?void 0:w[l])??u:u}}),o=or();_u(()=>{if(r.value){const c=Object.entries(r.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=t2(Fi,s);lp(Fi,Ie(()=>o.value?An((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function ao(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Jy(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(s){return SN(s,e)},t.props._as=String,t.setup=function(s,r){const i=Xy();if(!i.value)return t._setup(s,r);const{props:o,provideSubDefaults:a}=ZN(s,s._as??t.name,i),c=t._setup(o,r);return a(),c}}return t}function e2(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?ao:pw)(e)}function Ic(t,e){const n=Jw();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Zy=0,Wo=new WeakMap;function ev(){const t=Ic("getUid");if(Wo.has(t))return Wo.get(t);{const e=Zy++;return Wo.set(t,e),e}}ev.reset=()=>{Zy=0,Wo=new WeakMap};function t2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ic("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function n2(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=Ic("useProxiedModel"),o=Q(t[e]!==void 0?t[e]:n),a=gr(e),l=Ie(a!==e?()=>{var h,f,p,w;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(f=i.vnode.props)!=null&&f.hasOwnProperty(a))&&((p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)||(w=i.vnode.props)!=null&&w.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,f;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)))});AN(()=>!l.value,()=>{qt(()=>t[e],h=>{o.value=h})});const u=Ie({get(){const h=t[e];return s(l.value?h:o.value)},set(h){const f=r(h),p=Ae(l.value?t[e]:o.value);p===f||s(p)===h||(o.value=f,i==null||i.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const s2={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},um="$vuetify.",hm=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),tv=(t,e,n)=>function(s){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(!s.startsWith(um))return hm(s,i);const a=s.replace(um,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=Yf(c,a,null);return u||(`${s}${t.value}`,u=Yf(l,a,null)),u||(u=s),typeof u!="string"&&(u=s),hm(u,i)};function nv(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function il(t,e,n){const s=n2(t,e,t[e]??n.value);return s.value=t[e]??n.value,qt(n,r=>{t[e]==null&&(s.value=n.value)}),s}function sv(t){return e=>{const n=il(e,"locale",t.current),s=il(e,"fallback",t.fallback),r=il(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:r,t:tv(n,s,r),n:nv(n,s),provide:sv({current:n,fallback:s,messages:r})}}}function r2(t){const e=or((t==null?void 0:t.locale)??"en"),n=or((t==null?void 0:t.fallback)??"en"),s=Q({en:s2,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:tv(e,n,s),n:nv(e,n),provide:sv({current:e,fallback:n,messages:s})}}const dm=Symbol.for("vuetify:locale");function i2(t){return t.name!=null}function o2(t){const e=t!=null&&t.adapter&&i2(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:r2(t),n=c2(e,t);return{...e,...n}}function a2(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function c2(t,e){const n=Q((e==null?void 0:e.rtl)??a2()),s=Ie(()=>n.value[t.current.value]??!1);return{isRtl:s,rtl:n,rtlClasses:Ie(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}const Ui={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function l2(t,e){const n=[];let s=[];const r=rv(t),i=iv(t),o=(r.getDay()-Ui[e.slice(-2).toUpperCase()]+7)%7,a=(i.getDay()-Ui[e.slice(-2).toUpperCase()]+7)%7;for(let c=0;c<o;c++){const l=new Date(r);l.setDate(l.getDate()-(o-c)),s.push(l)}for(let c=1;c<=i.getDate();c++){const l=new Date(t.getFullYear(),t.getMonth(),c);s.push(l),s.length===7&&(n.push(s),s=[])}for(let c=1;c<7-a;c++){const l=new Date(i);l.setDate(l.getDate()+c),s.push(l)}return s.length>0&&n.push(s),n}function u2(t,e){const n=new Date(t);for(;n.getDay()!==(Ui[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function h2(t,e){const n=new Date(t),s=((Ui[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==s;)n.setDate(n.getDate()+1);return n}function rv(t){return new Date(t.getFullYear(),t.getMonth(),1)}function iv(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function d2(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const f2=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function ov(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(f2.test(t))return d2(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const fm=new Date(2e3,0,2);function m2(t){const e=Ui[t.slice(-2).toUpperCase()];return Wy(7).map(n=>{const s=new Date(fm);return s.setDate(fm.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function p2(t,e,n,s){const r=ov(t)??new Date,i=s==null?void 0:s[e];if(typeof i=="function")return i(r,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function g2(t,e){const n=t.toJsDate(e),s=n.getFullYear(),r=Zf(String(n.getMonth()+1),2,"0"),i=Zf(String(n.getDate()),2,"0");return`${s}-${r}-${i}`}function _2(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s)}function y2(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function v2(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function w2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function E2(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function I2(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function T2(t){return t.getFullYear()}function A2(t){return t.getMonth()}function b2(t){return t.getDate()}function R2(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function S2(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function C2(t){return t.getHours()}function P2(t){return t.getMinutes()}function k2(t){return new Date(t.getFullYear(),0,1)}function D2(t){return new Date(t.getFullYear(),11,31)}function N2(t,e){return wa(t,e[0])&&M2(t,e[1])}function O2(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function wa(t,e){return t.getTime()>e.getTime()}function V2(t,e){return wa(su(t),su(e))}function M2(t,e){return t.getTime()<e.getTime()}function mm(t,e){return t.getTime()===e.getTime()}function x2(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function L2(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function F2(t,e){return t.getFullYear()===e.getFullYear()}function U2(t,e,n){const s=new Date(t),r=new Date(e);switch(n){case"years":return s.getFullYear()-r.getFullYear();case"quarters":return Math.floor((s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12)/4);case"months":return s.getMonth()-r.getMonth()+(s.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((s.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((s.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((s.getTime()-r.getTime())/1e3);default:return s.getTime()-r.getTime()}}function $2(t,e){const n=new Date(t);return n.setHours(e),n}function B2(t,e){const n=new Date(t);return n.setMinutes(e),n}function j2(t,e){const n=new Date(t);return n.setMonth(e),n}function q2(t,e){const n=new Date(t);return n.setDate(e),n}function H2(t,e){const n=new Date(t);return n.setFullYear(e),n}function su(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function z2(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class W2{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return ov(e)}toJsDate(e){return e}toISO(e){return g2(this,e)}parseISO(e){return _2(e)}addMinutes(e,n){return y2(e,n)}addHours(e,n){return v2(e,n)}addDays(e,n){return w2(e,n)}addWeeks(e,n){return E2(e,n)}addMonths(e,n){return I2(e,n)}getWeekArray(e){return l2(e,this.locale)}startOfWeek(e){return u2(e,this.locale)}endOfWeek(e){return h2(e,this.locale)}startOfMonth(e){return rv(e)}endOfMonth(e){return iv(e)}format(e,n){return p2(e,n,this.locale,this.formats)}isEqual(e,n){return mm(e,n)}isValid(e){return O2(e)}isWithinRange(e,n){return N2(e,n)}isAfter(e,n){return wa(e,n)}isAfterDay(e,n){return V2(e,n)}isBefore(e,n){return!wa(e,n)&&!mm(e,n)}isSameDay(e,n){return x2(e,n)}isSameMonth(e,n){return L2(e,n)}isSameYear(e,n){return F2(e,n)}setMinutes(e,n){return B2(e,n)}setHours(e,n){return $2(e,n)}setMonth(e,n){return j2(e,n)}setDate(e,n){return q2(e,n)}setYear(e,n){return H2(e,n)}getDiff(e,n,s){return U2(e,n,s)}getWeekdays(){return m2(this.locale)}getYear(e){return T2(e)}getMonth(e){return A2(e)}getDate(e){return b2(e)}getNextMonth(e){return R2(e)}getPreviousMonth(e){return S2(e)}getHours(e){return C2(e)}getMinutes(e){return P2(e)}startOfDay(e){return su(e)}endOfDay(e){return z2(e)}startOfYear(e){return k2(e)}endOfYear(e){return D2(e)}}const K2=Symbol.for("vuetify:date-options"),pm=Symbol.for("vuetify:date-adapter");function G2(t,e){const n=An({adapter:W2,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:Q2(n,e)}}function Q2(t,e){const n=Or(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return qt(e.current,s=>{n.locale=t.locale[s]??s??n.locale}),n}const gm=Symbol.for("vuetify:display"),_m={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Y2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_m;return An(_m,t)};function ym(t){return sn&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function vm(t){return sn&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function wm(t){const e=sn&&!t?window.navigator.userAgent:"ssr";function n(w){return!!e.match(w)}const s=n(/android/i),r=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),h=n(/win/i),f=n(/mac/i),p=n(/linux/i);return{android:s,ios:r,cordova:i,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:h,mac:f,linux:p,touch:bN,ssr:e==="ssr"}}function J2(t,e){const{thresholds:n,mobileBreakpoint:s}=Y2(t),r=or(vm(e)),i=or(wm(e)),o=Or({}),a=or(ym(e));function c(){r.value=vm(),a.value=ym()}function l(){c(),i.value=wm()}return _u(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,f=a.value<n.lg&&!(h||u),p=a.value<n.xl&&!(f||h||u),w=a.value<n.xxl&&!(p||f||h||u),g=a.value>=n.xxl,v=u?"xs":h?"sm":f?"md":p?"lg":w?"xl":"xxl",k=typeof s=="number"?s:n[s],C=a.value<k;o.xs=u,o.sm=h,o.md=f,o.lg=p,o.xl=w,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||f),o.xlAndUp=!(u||h||f||p),o.smAndDown=!(f||p||w||g),o.mdAndDown=!(p||w||g),o.lgAndDown=!(w||g),o.xlAndDown=!g,o.name=v,o.height=r.value,o.width=a.value,o.mobile=C,o.mobileBreakpoint=s,o.platform=i.value,o.thresholds=n}),sn&&window.addEventListener("resize",c,{passive:!0}),{...Qv(o),update:l,ssr:!!e}}const X2=Symbol.for("vuetify:goto");function Z2(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function eO(t,e){return{rtl:e.isRtl,options:An(Z2(),t)}}const tO={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},nO={component:t=>s0(av,{...t,class:"mdi"})},sO=[String,Function,Object,Array],Em=Symbol.for("vuetify:icons"),Tc=Jy({icon:{type:sO},tag:{type:String,required:!0}},"icon");e2()({name:"VComponentIcon",props:Tc(),setup(t,e){let{slots:n}=e;return()=>{const s=t.icon;return pe(t.tag,null,{default:()=>{var r;return[t.icon?pe(s,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}});const rO=ao({name:"VSvgIcon",inheritAttrs:!1,props:Tc(),setup(t,e){let{attrs:n}=e;return()=>pe(t.tag,Ip(n,{style:null}),{default:()=>[pe("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(s=>Array.isArray(s)?pe("path",{d:s[0],"fill-opacity":s[1]},null):pe("path",{d:s},null)):pe("path",{d:t.icon},null)])]})}});ao({name:"VLigatureIcon",props:Tc(),setup(t){return()=>pe(t.tag,null,{default:()=>[t.icon]})}});const av=ao({name:"VClassIcon",props:Tc(),setup(t){return()=>pe(t.tag,{class:t.icon},null)}});function iO(){return{svg:{component:rO},class:{component:av}}}function oO(t){const e=iO(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=nO),An({defaultSet:n,sets:e,aliases:{...tO,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const Im=Symbol.for("vuetify:theme");function Tm(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function aO(){var s,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Tm();const e=Tm();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(s=e.themes)==null?void 0:s.dark:(r=e.themes)==null?void 0:r.light;n[i]=An(a,o)}return An(e,{...t,themes:n})}function cO(t){const e=aO(t),n=Q(e.defaultTheme),s=Q(e.themes),r=Ie(()=>{const u={};for(const[h,f]of Object.entries(s.value)){const p=u[h]={...f,colors:{...f.colors}};if(e.variations)for(const w of e.variations.colors){const g=p.colors[w];if(g)for(const v of["lighten","darken"]){const k=v==="lighten"?KN:GN;for(const C of Wy(e.variations[v],1))p.colors[`${w}-${v}-${C}`]=HN(k(_n(g),C))}}for(const w of Object.keys(p.colors)){if(/^on-[a-z]/.test(w)||p.colors[`on-${w}`])continue;const g=`on-${w}`,v=_n(p.colors[w]);p.colors[g]=YN(v)}}return u}),i=Ie(()=>r.value[n.value]),o=Ie(()=>{var w;const u=[];(w=i.value)!=null&&w.dark&&ms(u,":root",["color-scheme: dark"]),ms(u,":root",Am(i.value));for(const[g,v]of Object.entries(r.value))ms(u,`.v-theme--${g}`,[`color-scheme: ${v.dark?"dark":"normal"}`,...Am(v)]);const h=[],f=[],p=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of p)/^on-[a-z]/.test(g)?ms(f,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(ms(h,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),ms(f,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),ms(f,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...h,...f),u.map((g,v)=>v===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);sn&&qt(o,()=>{f.patch(a)})}else sn?(h.addHeadObjs(Ie(a)),_u(()=>h.updateDOM())):h.addHeadObjs(a());else{let p=function(){if(typeof document<"u"&&!f){const w=document.createElement("style");w.type="text/css",w.id="vuetify-theme-stylesheet",e.cspNonce&&w.setAttribute("nonce",e.cspNonce),f=w,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=sn?document.getElementById("vuetify-theme-stylesheet"):null;sn?qt(o,p,{immediate:!0}):p()}}const l=Ie(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:s,current:i,computedThemes:r,themeClasses:l,styles:o,global:{name:n,current:i}}}function ms(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function Am(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[r,i]of Object.entries(t.colors)){const o=_n(i);s.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||s.push(`--v-theme-${r}-overlay-multiplier: ${QN(i)>.18?e:n}`)}for(const[r,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?_n(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${r}: ${a??i}`)}return s}function cv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=An(e,n),{aliases:r={},components:i={},directives:o={}}=s,a=JN(s.defaults),c=J2(s.display,s.ssr),l=cO(s.theme),u=oO(s.icons),h=o2(s.locale),f=G2(s.date,h),p=eO(s.goTo,h);return{install:g=>{for(const v in o)g.directive(v,o[v]);for(const v in i)g.component(v,i[v]);for(const v in r)g.component(v,ao({...r[v],name:v,aliasName:r[v].name}));if(l.install(g),g.provide(Fi,a),g.provide(gm,c),g.provide(Im,l),g.provide(Em,u),g.provide(dm,h),g.provide(K2,f.options),g.provide(pm,f.instance),g.provide(X2,p),sn&&s.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:v}=g;g.mount=function(){const k=v(...arguments);return Ra(()=>c.update()),g.mount=v,k}}ev.reset(),g.mixin({computed:{$vuetify(){return Or({defaults:Xs.call(this,Fi),display:Xs.call(this,gm),theme:Xs.call(this,Im),icons:Xs.call(this,Em),locale:Xs.call(this,dm),date:Xs.call(this,pm)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h,date:f,goTo:p}}const lO="3.6.3";cv.version=lO;function Xs(t){var s,r;const e=this.$,n=((s=e.parent)==null?void 0:s.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const uO=cv({theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FF6A00",secondary:"#F7F7F7",accent:"#FFB27D",error:"#EF4444",info:"#0EA5E9",success:"#22C55E",warning:"#F59E0B",background:"#FFFFFF",surface:"#FFFFFF"}}}}}),hO="modulepreload",dO=function(t){return"/friendzy/"+t},bm={},fO=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=dO(a),a in bm)return;bm[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":hO,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function mO(){(await fO(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Inter:100,300,400,500,600,700,800,900&display=swap"]}})}mO();N0(TN).use(uO).mount("#app");
