(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}
function oa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.o=0;this.G=this.j=null}
function pa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
oa.prototype.v=function(a){this.i=a};
function qa(a,b){a.j={Ba:b,Fa:!0};a.h=a.o||a.m}
oa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function y(a,b,c){a.h=c;return{value:b}}
oa.prototype.s=function(a){this.h=a};
function ra(a,b,c){a.o=b;void 0!=c&&(a.m=c)}
function sa(a){a.o=0;var b=a.j.Ba;a.j=null;return b}
function ta(a){a.G=[a.j];a.o=0;a.m=0}
function ua(a){var b=a.G.splice(0)[0];(b=a.j=a.j||b)?b.Fa?a.h=a.o||a.m:void 0!=b.s&&a.m<b.s?(a.h=b.s,a.j=null):a.h=a.m:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Fa)throw b.Ba;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.v):(a.h.v(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.v):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){b=new za(new va(b));ma&&a.prototype&&ma(b,a.prototype);return b}
t("Reflect.setPrototypeOf",function(a){return a?a:ma?function(b,c){try{return ma(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&Aa(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||ma});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ta),reject:g(this.m)}};
b.prototype.Ta=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Va(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ma(g):this.o(g)}};
b.prototype.ma=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.Wa(h,g):this.o(g)};
b.prototype.m=function(g){this.v(2,g)};
b.prototype.o=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Ua();this.G()};
b.prototype.Ua=function(){var g=this;e(function(){if(g.S()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.S=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.G=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Va=function(g){var h=this.l();g.ea(h.resolve,h.reject)};
b.prototype.Wa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(x){try{l(r(x))}catch(D){m(D)}}:p}
var l,m,q=new b(function(r,p){l=r;m=p});
this.ea(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ea=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ea(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(x){return function(D){r[x]=D;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).ea(q(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ga(a){var b=Fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function C(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ha(a){return Object.prototype.hasOwnProperty.call(a,Ia)&&a[Ia]||(a[Ia]=++Ja)}
var Ia="closure_uid_"+(1E9*Math.random()>>>0),Ja=0;function Ka(a,b,c){return a.call.apply(a.bind,arguments)}
function La(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ma(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ma=Ka:Ma=La;return Ma.apply(null,arguments)}
function E(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Db=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Na(a){return a}
;function Oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Ya=b)}
F(Oa,Error);Oa.prototype.name="CustomError";function Pa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Qa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Sa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ta(a,b){b=Ra(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Ua(a){return Array.prototype.concat.apply([],arguments)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Wa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ab(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ab(a[c]);return b}
var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var db;function eb(a,b){this.h=a===fb&&b||""}
eb.prototype.Z=!0;eb.prototype.Y=function(){return this.h};
function gb(a){return new eb(fb,a)}
var fb={};gb("");var hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ib(a,b){if(b)a=a.replace(jb,"&amp;").replace(kb,"&lt;").replace(lb,"&gt;").replace(mb,"&quot;").replace(nb,"&#39;").replace(ob,"&#0;");else{if(!pb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(jb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(kb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(lb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(mb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(nb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ob,"&#0;"))}return a}
var jb=/&/g,kb=/</g,lb=/>/g,mb=/"/g,nb=/'/g,ob=/\x00/g,pb=/[\x00&<>"']/;function qb(a,b){this.h=b===rb?a:""}
n=qb.prototype;n.Z=!0;n.Y=function(){return this.h.toString()};
n.Ea=!0;n.Ca=function(){return 1};
n.toString=function(){return this.h.toString()};
var sb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),tb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,ub=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,rb={},vb=new qb("about:invalid#zClosurez",rb);var wb;a:{var xb=A.navigator;if(xb){var yb=xb.userAgent;if(yb){wb=yb;break a}}wb=""}function I(a){return-1!=wb.indexOf(a)}
;function zb(){return I("Firefox")||I("FxiOS")}
function Ab(){return(I("Chrome")||I("CriOS"))&&!I("Edge")}
;var Bb={};function Cb(a,b,c){this.h=c===Bb?a:"";this.i=b;this.Z=this.Ea=!0}
Cb.prototype.Ca=function(){return this.i};
Cb.prototype.Y=function(){return this.h.toString()};
Cb.prototype.toString=function(){return this.h.toString()};
function Db(a,b){if(void 0===db){var c=null;var d=A.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(e){A.console&&A.console.error(e.message)}db=c}else db=c}a=(c=db)?c.createHTML(a):a;return new Cb(a,b,Bb)}
;var Eb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fb(a){return a?decodeURI(a):a}
function Gb(a){return Fb(a.match(Eb)[3]||null)}
function Hb(a){var b=a.match(Eb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Ib(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ib(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Jb(a){var b=[],c;for(c in a)Ib(c,a[c],b);return b.join("&")}
var Kb=/#|$/;function Lb(a,b){var c=a.search(Kb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function J(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Mb(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Nb(a){Nb[" "](a);return a}
Nb[" "]=Ea;var Ob=I("Opera"),Pb=I("Trident")||I("MSIE"),Qb=I("Edge"),Rb=I("Gecko")&&!(-1!=wb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Sb=-1!=wb.toLowerCase().indexOf("webkit")&&!I("Edge");function Tb(){var a=A.document;return a?a.documentMode:void 0}
var Ub;a:{var Vb="",Wb=function(){var a=wb;if(Rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Qb)return/Edge\/([\d\.]+)/.exec(a);if(Pb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Sb)return/WebKit\/(\S+)/.exec(a);if(Ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wb&&(Vb=Wb?Wb[1]:"");if(Pb){var Xb=Tb();if(null!=Xb&&Xb>parseFloat(Vb)){Ub=String(Xb);break a}}Ub=Vb}var Yb=Ub,Zb;if(A.document&&Pb){var $b=Tb();Zb=$b?$b:parseInt(Yb,10)||void 0}else Zb=void 0;var ac=Zb;zb();var bc=Mb()||I("iPod"),cc=I("iPad");!I("Android")||Ab()||zb();Ab();var dc=I("Safari")&&!(Ab()||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||zb()||I("Silk")||I("Android"))&&!(Mb()||I("iPad")||I("iPod"));var ec={},fc=null;var gc={Fb:{value:!0,configurable:!0}};var hc=Object,ic=hc.freeze,jc=[];Array.isArray(jc)&&!Object.isFrozen(jc)&&Object.defineProperties(jc,gc);ic.call(hc,jc);var K=window;gb("csi.gstatic.com");gb("googleads.g.doubleclick.net");gb("pagead2.googlesyndication.com");gb("partner.googleadservices.com");gb("pubads.g.doubleclick.net");gb("securepubads.g.doubleclick.net");gb("tpc.googlesyndication.com");/*

 Copyright 2021 The Safevalues Authors
 SPDX-License-Identifier: Apache-2.0
*/
function kc(a,b){this.width=a;this.height=b}
n=kc.prototype;n.clone=function(){return new kc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function lc(a,b){Xa(b,function(c,d){c&&"object"==typeof c&&c.Z&&(c=c.Y());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function nc(a,b,c){var d=arguments,e=document,f=d[1],g=oc(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):lc(g,f));2<d.length&&pc(e,g,d);return g}
function pc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ga(f)||C(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(C(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?Va(f):f,d)}}}
function oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function qc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function rc(a){var b=sc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function tc(){var a=[];rc(function(b){a.push(b)});
return a}
var sc={qb:"allow-forms",rb:"allow-modals",sb:"allow-orientation-lock",tb:"allow-pointer-lock",ub:"allow-popups",vb:"allow-popups-to-escape-sandbox",wb:"allow-presentation",xb:"allow-same-origin",yb:"allow-scripts",zb:"allow-top-navigation",Ab:"allow-top-navigation-by-user-activation"},uc=Qa(function(){return tc()});
function vc(){var a=oc(document,"IFRAME"),b={};H(uc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var wc=(new Date).getTime();function xc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function yc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var r=g,p=0;64>p;p+=4)r[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(q<<1|q>>>31)&4294967295;q=e[0];var x=e[1],D=e[2],w=e[3],L=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=w^x&(D^w);var G=1518500249}else P=x^D^w,G=1859775393;else 60>p?(P=x&D|w&(x|D),G=2400959708):(P=x^D^w,G=3395469782);P=((q<<5|q>>>27)&4294967295)+P+L+G+r[p]&4294967295;L=w;w=D;D=(x<<30|x>>>2)&4294967295;x=q;q=P}e[0]=e[0]+q&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+w&4294967295;e[4]=e[4]+L&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],x=0,D=q.length;x<D;++x)p.push(q.charCodeAt(x));q=p}r||(r=q.length);p=0;if(0==l)for(;p+64<r;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var x=24;0<=x;x-=8)q[r++]=e[p]>>x&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ab:function(){for(var q=d(),r="",p=0;p<q.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return r}}}
;function zc(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Ac(xc(d),a,c||null)].join(" "):null}
function Ac(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Bc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Bc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Bc(a){var b=yc();b.update(a);return b.ab().toLowerCase()}
;var Cc={};function Dc(a){this.h=a||{cookie:""}}
n=Dc.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{pa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ib;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.pa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=hb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{pa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ec=new Dc("undefined"==typeof document?null:document);function Fc(a){return!!Cc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Gc(a,b,c,d){(a=A[a])||(a=(new Dc(document)).get(b));return a?zc(a,c,d):null}
function Hc(a){var b=void 0===b?!1:b;var c=xc(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Fc(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Dc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Fc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Dc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?zc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Fc(b)&&((b=Gc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Gc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ic(){this.data_=[];this.h=-1}
Ic.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ic.prototype.get=function(a){return!!this.data_[a]};
function Jc(a){-1==a.h&&(a.h=Sa(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Kc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Kc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Lc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Mc;
function Nc(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=oc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ma(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ya;c.ya=null;e()}};
return function(e){d.next={ya:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Oc(a){A.setTimeout(function(){throw a;},0)}
;function Pc(){this.i=this.h=null}
Pc.prototype.add=function(a,b){var c=Qc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Pc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Qc=new Kc(function(){return new Rc},function(a){return a.reset()});
function Rc(){this.next=this.scope=this.h=null}
Rc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Rc.prototype.reset=function(){this.next=this.scope=this.h=null};function Sc(a,b){Tc||Uc();Vc||(Tc(),Vc=!0);Wc.add(a,b)}
var Tc;function Uc(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Tc=function(){a.then(Xc)}}else Tc=function(){var b=Xc;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!I("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(Mc||(Mc=Nc()),Mc(b)):A.setImmediate(b)}}
var Vc=!1,Wc=new Pc;function Xc(){for(var a;a=Wc.remove();){try{a.h.call(a.scope)}catch(b){Oc(b)}Lc(Qc,a)}Vc=!1}
;function Yc(a,b){this.i=a[A.Symbol.iterator]();this.j=b;this.l=0}
Yc.prototype[Symbol.iterator]=function(){return this};
Yc.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value,this.l++),done:a.done}};
function Zc(a,b){return new Yc(a,b)}
;function $c(){this.blockSize=-1}
;function ad(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
F(ad,$c);ad.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function bd(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ad.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)bd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){bd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){bd(this,e);f=0;break}}this.i=f;this.l+=b}};
ad.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;bd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function cd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=dd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ed[c])c=ed[c];else{c=String(c);if(!ed[c]){var f=/function\s+([^\(]+)/m.exec(c);ed[c]=f?f[1]:"[Anonymous]"}c=ed[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function dd(a,b){b||(b={});b[fd(a)]=!0;var c=a.stack||"";(a=a.Ya)&&!b[fd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=dd(a,b));return c}
function fd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ed={};function gd(){this.j=this.j;this.m=this.m}
gd.prototype.j=!1;gd.prototype.dispose=function(){this.j||(this.j=!0,this.X())};
gd.prototype.X=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var hd="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function id(){}
id.prototype.next=function(){return id.prototype.h.call(this)};
id.prototype.h=function(){throw hd;};
id.prototype.H=function(){return this};function jd(a){if(a instanceof kd||a instanceof ld||a instanceof md)return a;if("function"==typeof a.next)return new kd(function(){return nd(a)});
if("function"==typeof a[Symbol.iterator])return new kd(function(){return a[Symbol.iterator]()});
if("function"==typeof a.H)return new kd(function(){return nd(a.H())});
throw Error("Not an iterator or iterable.");}
function nd(a){if(!(a instanceof id))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.h();break}catch(d){if(d!==hd)throw d;b=!0}return{value:c,done:b}}}}
function kd(a){this.j=a}
kd.prototype.H=function(){return new ld(this.j())};
kd.prototype[Symbol.iterator]=function(){return new md(this.j())};
kd.prototype.i=function(){return new md(this.j())};
function ld(a){this.j=a}
v(ld,id);ld.prototype.h=function(){var a=this.j.next();if(a.done)throw hd;return a.value};
ld.prototype.next=function(){return ld.prototype.h.call(this)};
ld.prototype[Symbol.iterator]=function(){return new md(this.j)};
ld.prototype.i=function(){return new md(this.j)};
function md(a){kd.call(this,function(){return a});
this.l=a}
v(md,kd);md.prototype.next=function(){return this.l.next()};function od(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof od)for(c=pd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function pd(a){qd(a);return a.h.concat()}
n=od.prototype;n.has=function(a){return rd(this.i,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||sd;qd(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function sd(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.i={};this.j=this.size=this.h.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return rd(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&qd(this),!0):!1};
function qd(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];rd(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],rd(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return rd(this.i,a)?this.i[a]:b};
n.set=function(a,b){rd(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
n.forEach=function(a,b){for(var c=pd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new od(this)};
n.keys=function(){return jd(this.H(!0)).i()};
n.values=function(){return jd(this.H(!1)).i()};
n.entries=function(){var a=this;return Zc(this.keys(),function(b){return[b,a.get(b)]})};
n.H=function(a){qd(this);var b=0,c=this.j,d=this,e=new id;e.h=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw hd;var f=d.h[b++];return a?f:d.i[f]};
e.next=e.h.bind(e);return e};
function rd(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function td(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
td.prototype.stopPropagation=function(){this.j=!0};
td.prototype.preventDefault=function(){this.defaultPrevented=!0};var ud=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",Ea,b),A.removeEventListener("test",Ea,b)}catch(c){}return a}();function vd(a,b){td.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(vd,td);var wd={2:"touch",3:"pen",4:"mouse"};
vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Rb){a:{try{Nb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:wd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&vd.K.preventDefault.call(this)};
vd.prototype.stopPropagation=function(){vd.K.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
vd.prototype.preventDefault=function(){vd.K.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xd="closure_listenable_"+(1E6*Math.random()|0);var yd=0;function zd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ia=e;this.key=++yd;this.aa=this.da=!1}
function Ad(a){a.aa=!0;a.listener=null;a.h=null;a.src=null;a.ia=null}
;function Bd(a){this.src=a;this.listeners={};this.h=0}
Bd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Cd(a,b,d,e);-1<g?(b=a[g],c||(b.da=!1)):(b=new zd(b,this.src,f,!!d,e),b.da=c,a.push(b));return b};
Bd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Cd(e,b,c,d);return-1<b?(Ad(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Dd(a,b){var c=b.type;c in a.listeners&&Ta(a.listeners[c],b)&&(Ad(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Cd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.aa&&f.listener==b&&f.capture==!!c&&f.ia==d)return e}return-1}
;var Ed="closure_lm_"+(1E6*Math.random()|0),Fd={},Gd=0;function Hd(a,b,c,d,e){if(d&&d.once)Id(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Hd(a,b[f],c,d,e);else c=Jd(c),a&&a[xd]?a.V(b,c,C(d)?!!d.capture:!!d,e):Kd(a,b,c,!1,d,e)}
function Kd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=C(e)?!!e.capture:!!e,h=Ld(a);h||(a[Ed]=h=new Bd(a));c=h.add(b,c,d,g,f);if(!c.h){d=Md();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ud||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Nd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Gd++}}
function Md(){function a(c){return b.call(a.src,a.listener,c)}
var b=Od;return a}
function Id(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Id(a,b[f],c,d,e);else c=Jd(c),a&&a[xd]?a.h.add(String(b),c,!0,C(d)?!!d.capture:!!d,e):Kd(a,b,c,!0,d,e)}
function Pd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Pd(a,b[f],c,d,e);else(d=C(d)?!!d.capture:!!d,c=Jd(c),a&&a[xd])?a.h.remove(String(b),c,d,e):a&&(a=Ld(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Cd(b,c,d,e)),(c=-1<a?b[a]:null)&&Qd(c))}
function Qd(a){if("number"!==typeof a&&a&&!a.aa){var b=a.src;if(b&&b[xd])Dd(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Nd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Gd--;(c=Ld(b))?(Dd(c,a),0==c.h&&(c.src=null,b[Ed]=null)):Ad(a)}}}
function Nd(a){return a in Fd?Fd[a]:Fd[a]="on"+a}
function Od(a,b){if(a.aa)a=!0;else{b=new vd(b,this);var c=a.listener,d=a.ia||a.src;a.da&&Qd(a);a=c.call(d,b)}return a}
function Ld(a){a=a[Ed];return a instanceof Bd?a:null}
var Rd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Jd(a){if("function"===typeof a)return a;a[Rd]||(a[Rd]=function(b){return a.handleEvent(b)});
return a[Rd]}
;function M(){gd.call(this);this.h=new Bd(this);this.ma=this;this.u=null}
F(M,gd);M.prototype[xd]=!0;M.prototype.addEventListener=function(a,b,c,d){Hd(this,a,b,c,d)};
M.prototype.removeEventListener=function(a,b,c,d){Pd(this,a,b,c,d)};
function Sd(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.ma;c=b.type||b;"string"===typeof b?b=new td(b,a):b instanceof td?b.target=b.target||a:(e=b,b=new td(c,a),cb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Td(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Td(g,c,!0,b)&&e,b.j||(e=Td(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Td(g,c,!1,b)&&e}
M.prototype.X=function(){M.K.X.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ad(d[e]);delete a.listeners[c];a.h--}}this.u=null};
M.prototype.V=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Td(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.aa&&g.capture==c){var h=g.listener,k=g.ia||g.src;g.da&&Dd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var Ud=A.JSON.stringify;function Vd(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Wd(b,2,c)},function(c){Wd(b,3,c)})}catch(c){Wd(this,3,c)}}
function Xd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Xd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Yd=new Kc(function(){return new Xd},function(a){a.reset()});
function Zd(a,b,c){var d=Yd.get();d.i=a;d.onRejected=b;d.context=c;return d}
Vd.prototype.then=function(a,b,c){return $d(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Vd.prototype.$goog_Thenable=!0;Vd.prototype.cancel=function(a){if(0==this.h){var b=new ae(a);Sc(function(){be(this,b)},this)}};
function be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ce(c),de(c,e,3,b)))}a.j=null}else Wd(a,3,b)}
function ee(a,b){a.i||2!=a.h&&3!=a.h||fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $d(a,b,c,d){var e=Zd(null,null,null);e.h=new Vd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ae?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;ee(a,e);return e.h}
Vd.prototype.G=function(a){this.h=0;Wd(this,2,a)};
Vd.prototype.S=function(a){this.h=0;Wd(this,3,a)};
function Wd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.G,f=a.S;if(d instanceof Vd){ee(d,Zd(e||Ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(C(d))try{var k=d.then;if("function"===typeof k){ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,fe(a),3!=b||c instanceof ae||he(a,c))}}
function ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fe(a){a.o||(a.o=!0,Sc(a.v,a))}
function ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Vd.prototype.v=function(){for(var a;a=ce(this);)de(this,a,this.h,this.u);this.o=!1};
function de(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ie(b,c,d);else try{b.j?b.i.call(b.context):ie(b,c,d)}catch(e){je.call(null,e)}Lc(Yd,b)}
function ie(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function he(a,b){a.m=!0;Sc(function(){a.m&&je.call(null,b)})}
var je=Oc;function ae(a){Oa.call(this,a)}
F(ae,Oa);ae.prototype.name="cancel";function N(a){gd.call(this);this.u=1;this.l=[];this.o=0;this.h=[];this.i={};this.v=!!a}
F(N,gd);n=N.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function ke(a,b,c){var d=le;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ca(a)}}
n.ca=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.h[a+1]=Ea):(c&&Ta(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.W=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];me(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.ca(c)}}return 0!=e}return!1};
function me(a,b,c){Sc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ca,this),delete this.i[a])}else this.h.length=0,this.i={}};
n.X=function(){N.K.X.call(this);this.clear();this.l.length=0};function ne(a){this.h=a}
ne.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Ud(b))};
ne.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ne.prototype.remove=function(a){this.h.remove(a)};function oe(a){this.h=a}
F(oe,ne);function pe(a){this.data=a}
function qe(a){return void 0===a||a instanceof pe?a:new pe(a)}
oe.prototype.set=function(a,b){oe.K.set.call(this,a,qe(b))};
oe.prototype.i=function(a){a=oe.K.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
oe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function re(a){this.h=a}
F(re,oe);re.prototype.set=function(a,b,c){if(b=qe(b)){if(c){if(c<Date.now()){re.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}re.K.set.call(this,a,b)};
re.prototype.i=function(a){var b=re.K.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())re.prototype.remove.call(this,a);else return b}};function se(){}
;function te(){}
F(te,se);te.prototype[Symbol.iterator]=function(){return jd(this.H(!0)).i()};
te.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ue(a){this.h=a}
F(ue,te);n=ue.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.H=function(a){var b=0,c=this.h,d=new id;d.h=function(){if(b>=c.length)throw hd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function ve(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(ve,ue);function we(a,b){this.i=a;this.h=null;var c;if(c=Pb)c=!(9<=Number(ac));if(c){xe||(xe=new od);this.h=xe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),xe.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
F(we,te);var ye={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xe=null;function ze(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ye[b]})}
n=we.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute(ze(a),b);Ae(this)};
n.get=function(a){a=this.h.getAttribute(ze(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute(ze(a));Ae(this)};
n.H=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new id;d.h=function(){if(b>=c.length)throw hd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ae(this)};
function Ae(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Be(a,b){this.i=a;this.h=b+"::"}
F(Be,te);Be.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Be.prototype.get=function(a){return this.i.get(this.h+a)};
Be.prototype.remove=function(a){this.i.remove(this.h+a)};
Be.prototype.H=function(a){var b=this.i.H(!0),c=this,d=new id;d.h=function(){for(var e=b.h();e.substr(0,c.h.length)!=c.h;)e=b.h();return a?e.substr(c.h.length):c.i.get(e)};
d.next=d.h.bind(d);return d};var Ce,De,Ee=A.window,Fe=(null===(Ce=null===Ee||void 0===Ee?void 0:Ee.yt)||void 0===Ce?void 0:Ce.config_)||(null===(De=null===Ee||void 0===Ee?void 0:Ee.ytcfg)||void 0===De?void 0:De.data_)||{};E("yt.config_",Fe);function Ge(a){for(var b=0;b<arguments.length;++b);b=arguments;1<b.length?Fe[b[0]]=b[1]:1===b.length&&Object.assign(Fe,b[0])}
function Q(a,b){return a in Fe?Fe[a]:b}
;var He=[];function Ie(a){He.forEach(function(b){return b(a)})}
function Je(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ke(b)}}:a}
function Ke(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=Q("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ge("ERRORS",e));Ie(a)}
function Le(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=Q("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ge("ERRORS",e))}
;var Me=0;E("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Me});var Ne={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Oe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ne||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Oe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Oe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Oe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=A.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Za);var Pe=A.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Pe);
function Qe(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=C(e[4])&&C(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Re(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Za){var c=Za[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Se()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[b]}}))}
var Se=Qa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Te(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Qe(a,b,c,d);if(!e){e=++Pe.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Oe(h);if(!qc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Oe(h);
h.currentTarget=a;return c.call(a,h)};
g=Je(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Se()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d]}}}
;function Ue(a,b){"function"===typeof a&&(a=Je(a));return window.setTimeout(a,b)}
function Ve(a){"function"===typeof a&&(a=Je(a));return window.setInterval(a,250)}
;var We=/^[\w.]*$/,Xe={q:!0,search_query:!0};function Ye(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ze(f[0]||""),h=Ze(f[1]||"");g in c?Array.isArray(c[g])?Wa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(Ye);k.args=[{key:l,value:f[1],query:a,method:$e==m?"unchanged":m}];Xe.hasOwnProperty(l)||Le(k)}}return c}
var $e=String(Ye);function af(a){var b=[];Xa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function bf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ye(a,"&")}
function cf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=bf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Jb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function df(a){if(!b)var b=window.location.href;var c=a.match(Eb)[1]||null,d=Gb(a);c&&d?(a=a.match(Eb),b=b.match(Eb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Gb(b)==d&&(Number(b.match(Eb)[4]||null)||null)==(Number(a.match(Eb)[4]||null)||null):!0;return a}
function Ze(a){return a&&a.match(We)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=ef(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ff(a,b){a=ef(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ef(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;function gf(){}
function hf(a,b){return jf(a,0,b)}
function kf(a,b){return jf(a,1,b)}
;function lf(){gf.apply(this,arguments)}
v(lf,gf);function mf(){lf.h||(lf.h=new lf);return lf.h}
function jf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ue(a,c||0)}
function nf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
lf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};mf();function of(a){var b=pf;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=wc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(na){h=0}e.u_his=h;K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);e.u_java=!!K.navigator&&"unknown"!==
typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length)}catch(na){}h=b.h;try{var k=h.screenX;var l=h.screenY}catch(na){}try{var m=h.outerWidth;var q=h.outerHeight}catch(na){}try{var r=h.innerWidth;var p=h.innerHeight}catch(na){}try{var x=h.screenLeft;var D=h.screenTop}catch(na){}try{r=h.innerWidth,p=h.innerHeight}catch(na){}try{var w=
h.screen.availWidth;var L=h.screen.availTop}catch(na){}k=[x,D,k,l,w,L,m,q,r,p];l=b.h.top;try{var P=(l||window).document,G="CSS1Compat"==P.compatMode?P.documentElement:P.body;var O=(new kc(G.clientWidth,G.clientHeight)).round()}catch(na){O=new kc(-12245933,-12245933)}P=O;O={};G=new Ic;A.SVGElement&&A.document.createElementNS&&G.set(0);l=vc();l["allow-top-navigation-by-user-activation"]&&G.set(1);l["allow-popups-to-escape-sandbox"]&&G.set(2);A.crypto&&A.crypto.subtle&&G.set(3);A.TextDecoder&&A.TextEncoder&&
G.set(4);G=Jc(G);O.bc=G;O.bih=P.height;O.biw=P.width;O.brdim=k.join();b=b.i;b=(O.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,O.wgl=!!K.WebGLRenderingContext,O);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pf=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return af(of(a))});Date.now();var qf="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function rf(){if(!qf)return null;var a=qf();return"open"in a?a:null}
;var sf={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},tf="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),uf=!1;
function vf(a,b){b=void 0===b?{}:b;var c=df(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in sf){var f=Q(sf[e]);!f||!c&&Gb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Gb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Gb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Gb(a))b["X-YouTube-Ad-Signals"]=af(of(void 0));return b}
function wf(a){var b=window.location.search,c=Gb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||c||!df(a)||(c=document.location.hostname);var d=Fb(a.match(Eb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=bf(b),f={};H(tf,function(g){e[g]&&(f[g]=e[g])});
return cf(a,f||{},!1)}
function xf(a,b){var c=b.format||"JSON";a=yf(a,b);var d=zf(a,b),e=!1,f=Af(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||q||r)m=Bf(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Ue(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},b.timeout)}}
function yf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=cf(a,b||{},!0);return a}
function zf(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Gb(a)&&!b.withCredentials&&Gb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=bf(e),cb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Jb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!uf&&a&&"POST"!=b.method&&(uf=!0,Ke(Error("AJAX request with postData should use POST")));return e}
function Bf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Le(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Cf(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Df(g)})}d&&Ef(e);
return e}
function Ef(a){if(C(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;gb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Db(a[b],null);a[c]=d}else Ef(a[b])}}
function Cf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Df(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Af(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Je(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=rf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=wf(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ff=bc||cc;function Gf(a){var b=wb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Hf={},If=0;
function Jf(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Gf("cobalt"))a&&(a instanceof qb||(a="object"==typeof a&&a.Z?a.Y():String(a),ub.test(a)?a=new qb(a,rb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(tb))&&sb.test(b[1])?new qb(a,rb):null)),a=a||vb,a instanceof qb&&a.constructor===qb?a=a.h:(Fa(a),a="type_error:SafeUrl"),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a instanceof Cb||(b="object"==typeof a,c=null,b&&a.Ea&&(c=a.Ca()),a=Db(ib(b&&a.Z?a.Y():String(a)),c)),a instanceof
Cb&&a.constructor===Cb?a=a.h:(Fa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(Ud(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=nc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)));else if(e)Af(a,b,"POST",e,d);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Af(a,b,"GET","",d);else{b:{try{var f=new Pa({url:a});if(f.j&&f.i||f.l){var g=Fb(a.match(Eb)[5]||null);var h=!(!g||!g.endsWith("/aclk")||
"1"!==Lb(a,"ri"));break b}}catch(k){}h=!1}h?Kf(a)?(b&&b(),c=!0):c=!1:c=!1;c||Lf(a,b)}}
function Mf(a,b,c){c=void 0===c?"":c;Kf(a,c)?b&&b():Jf(a,b,void 0,void 0,c)}
function Kf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Lf(a,b){var c=new Image,d=""+If++;Hf[d]=c;c.onload=c.onerror=function(){b&&Hf[d]&&b();delete Hf[d]};
c.src=a}
;var Nf=A.ytPubsubPubsubInstance||new N,Of=A.ytPubsubPubsubSubscribedKeys||{},Pf=A.ytPubsubPubsubTopicToKeys||{},Qf=A.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ca;N.prototype.publish=N.prototype.W;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",Nf);E("ytPubsubPubsubTopicToKeys",Pf);E("ytPubsubPubsubIsSynchronous",Qf);E("ytPubsubPubsubSubscribedKeys",Of);var Rf=window,S=Rf.ytcsi&&Rf.ytcsi.now?Rf.ytcsi.now:Rf.performance&&Rf.performance.timing&&Rf.performance.now&&Rf.performance.timing.navigationStart?function(){return Rf.performance.timing.navigationStart+Rf.performance.now()}:function(){return(new Date).getTime()};var Sf=ff("initial_gel_batch_timeout",2E3),Tf=Math.pow(2,16)-1,Uf=void 0,Vf=0,Wf=0,Xf=0,Yf=!0,Zf=A.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Zf);var $f=A.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",$f);
function ag(a,b){if("log_event"===a.endpoint){var c="";a.ga?c="visitorOnlyApprovedKey":a.L&&($f[a.L.token]=bg(a.L),c=a.L.token);var d=Zf.get(c)||[];Zf.set(c,d);d.push(a.payload);b&&(Uf=new b);a=ff("tvhtml5_logging_max_batch")||ff("web_logging_max_batch")||100;b=S();d.length>=a?cg({writeThenSend:!0},R("flush_only_full_queue")?c:void 0):10<=b-Xf&&(dg(),Xf=b)}}
function eg(a,b){if("log_event"===a.endpoint){var c="";a.ga?c="visitorOnlyApprovedKey":a.L&&($f[a.L.token]=bg(a.L),c=a.L.token);var d=new Map;d.set(c,[a.payload]);b&&(Uf=new b);return new Vd(function(e){Uf&&Uf.isReady()?fg(d,e,{bypassNetworkless:!0}):e()})}}
function cg(a,b){a=void 0===a?{}:a;new Vd(function(c){window.clearTimeout(Vf);window.clearTimeout(Wf);Wf=0;if(Uf&&Uf.isReady())if(void 0!==b){var d=new Map,e=Zf.get(b)||[];d.set(b,e);fg(d,c,a);Zf.delete(b)}else fg(Zf,c,a),Zf.clear();else dg(),c()})}
function dg(){R("web_gel_timeout_cap")&&!Wf&&(Wf=Ue(function(){cg({writeThenSend:!0})},6E4));
window.clearTimeout(Vf);var a=Q("LOGGING_BATCH_TIMEOUT",ff("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Yf&&(a=Sf);Vf=Ue(function(){cg({writeThenSend:!0})},a)}
function fg(a,b,c){var d=Uf;c=void 0===c?{}:c;var e=Math.round(S()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h=h.next().value;h=ab({context:gg(d.config_||hg())});h.events=k;(k=$f[g])&&ig(h,g,k);delete $f[g];g="visitorOnlyApprovedKey"===g;jg(h,e,g);R("always_send_and_write")&&(c.writeThenSend=!1);R("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Mf("/generate_204");kg(d,"log_event",h,{retry:!0,onSuccess:function(){f--;
f||b()},
onError:function(){f--;f||b()},
Ja:c,ga:g});Yf=!1}}
function jg(a,b,c){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID",void 0))&&((c=Q("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Tf/2)),c++,c>Tf&&(c=1),Ge("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ig(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function bg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var lg=A.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",lg);function mg(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;E("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var ng={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},og={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function pg(){var a=A.navigator;return a?a.connection:void 0}
;function qg(){return"INNERTUBE_API_KEY"in Fe&&"INNERTUBE_API_VERSION"in Fe}
function hg(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),cb:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),eb:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),gb:Q("INNERTUBE_CONTEXT_HL",void 0),fb:Q("INNERTUBE_CONTEXT_GL",void 0),hb:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",jb:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ib:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function gg(a){var b={client:{hl:a.gb,gl:a.fb,clientName:a.eb,clientVersion:a.innertubeContextClientVersion,configInfo:a.cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=Q("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=Q("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!R("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=mg()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!R("music_web_display_mode_killswitch")){var h;b.client.Ia=null!=(h=b.client.Ia)?h:{};b.client.Ia.webDisplayMode=mg()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a:{if(h=pg()){a=ng[h.type||"unknown"]||"CONN_UNKNOWN";h=ng[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=pg(),a=null!==a&&void 0!==a&&a.effectiveType?og.hasOwnProperty(a.effectiveType)?og[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(bf(Q("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function rg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Cb||Q("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Bb:b=Hc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function sg(a){a=Object.assign({},a);delete a.Authorization;var b=Hc();if(b){var c=new ad;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ga(b);void 0===c&&(c=0);if(!fc){fc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));ec[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===fc[k]&&(fc[k]=h)}}}c=ec[c];d=Array(Math.floor(b.length/3));e=c[64]||"";for(f=g=0;g<b.length-
2;g+=3){var l=b[g],m=b[g+1];k=b[g+2];h=c[l>>2];l=c[(l&3)<<4|m>>4];m=c[(m&15)<<2|k>>6];k=c[k&63];d[f++]=""+h+l+m+k}h=0;k=e;switch(b.length-g){case 2:h=b[g+1],k=c[(h&15)<<2]||e;case 1:b=b[g],d[f]=""+c[b>>2]+c[(b&3)<<4|h>>4]+k+e}a.hash=d.join("")}return a}
;function tg(a){var b=new ve;(b=b.isAvailable()?a?new Be(b,a):b:null)||(a=new we(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new re(a):null;this.i=document.domain||window.location.hostname}
tg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ud(b))}catch(f){return}else e=escape(b);b=this.i;Ec.set(""+a,e,{pa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
tg.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tg.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var ug;function vg(){ug||(ug=new tg("yt.innertube"));return ug}
function wg(a,b,c,d){if(d)return null;d=vg().get("nextId",!0)||1;var e=vg().get("requests",!0)||{};e[d]={method:a,request:b,authState:sg(c),requestTime:Math.round(S())};vg().set("nextId",d+1,86400,!0);vg().set("requests",e,86400,!0);return d}
function xg(a){var b=vg().get("requests",!0)||{};delete b[a];vg().set("requests",b,86400,!0)}
function yg(a){var b=vg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=sg(rg(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),kg(a,d.method,e,{}));delete b[c]}}vg().set("requests",b,86400,!0)}}
;var zg=B("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ca;N.prototype.publish=N.prototype.W;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",zg);E("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);var Ag=function(){var a;return function(){a||(a=new tg("ytidb"));return a}}();
function Bg(){var a;return null===(a=Ag())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function Cg(a){this.h=void 0===a?!1:a;(a=Bg())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;null!==(b=Ag())&&void 0!==b&&b.h&&(b={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(c=Ag())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0))}
Cg.prototype.isSupported=function(){return this.h};var Dg=[],Eg=!1;function Fg(a){Eg||(Dg.push({type:"ERROR",payload:a}),10<Dg.length&&Dg.shift())}
function Gg(a,b){Eg||(Dg.push({type:"EVENT",eventType:a,payload:b}),10<Dg.length&&Dg.shift())}
;function Hg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(fa(c))}
v(Hg,Error);function Ig(){try{return Jg(),!0}catch(a){return!1}}
function Jg(){if(void 0!==Q("DATASYNC_ID",void 0))return Q("DATASYNC_ID",void 0);throw new Hg("Datasync ID not set","unknown");}
;function Kg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Lg(a){return a.substr(0,a.indexOf(":"))||a}
;var T={},Mg=(T.AUTH_INVALID="No user identifier specified.",T.EXPLICIT_ABORT="Transaction was explicitly aborted.",T.IDB_NOT_SUPPORTED="IndexedDB is not supported.",T.MISSING_INDEX="Index not created.",T.MISSING_OBJECT_STORE="Object store not created.",T.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",T.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",T.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",T.QUOTA_MAYBE_EXCEEDED=
"The current transaction may have failed because of exceeding quota limitations.",T.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",T.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",T),Ng={},Og=(Ng.AUTH_INVALID="ERROR",Ng.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ng.EXPLICIT_ABORT="IGNORED",Ng.IDB_NOT_SUPPORTED="ERROR",Ng.MISSING_INDEX="WARNING",Ng.MISSING_OBJECT_STORE="ERROR",Ng.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Ng.QUOTA_EXCEEDED=
"WARNING",Ng.QUOTA_MAYBE_EXCEEDED="WARNING",Ng.UNKNOWN_ABORT="WARNING",Ng.INCOMPATIBLE_DB_VERSION="WARNING",Ng),Pg={},Qg=(Pg.AUTH_INVALID=!1,Pg.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Pg.EXPLICIT_ABORT=!1,Pg.IDB_NOT_SUPPORTED=!1,Pg.MISSING_INDEX=!1,Pg.MISSING_OBJECT_STORE=!1,Pg.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Pg.QUOTA_EXCEEDED=!1,Pg.QUOTA_MAYBE_EXCEEDED=!0,Pg.UNKNOWN_ABORT=!0,Pg.INCOMPATIBLE_DB_VERSION=!1,Pg);
function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Mg[a]:c;d=void 0===d?Og[a]:d;e=void 0===e?Qg[a]:e;Hg.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}
v(U,Hg);function Rg(a){U.call(this,"MISSING_OBJECT_STORE",{lb:a},Mg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Rg.prototype)}
v(Rg,U);function Sg(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Sg.prototype)}
v(Sg,Error);var Tg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ug(a,b,c,d){b=Lg(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof U)return e;if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(dc&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if(e instanceof Sg)return new U("MISSING_INDEX",{dbName:b,dbVersion:d,objectStore:e.objectStore,index:e.index});if("InvalidStateError"===e.name&&Tg.some(function(f){return e.message.includes(f)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
{objectStoreNames:c,
dbName:b});if("AbortError"===e.name)return new U("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},e.message);e.args=[{name:"IdbError",Hb:e.name,dbName:b,objectStoreNames:c}];e.level="WARNING";return e}
function Vg(a,b,c){return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c}})}
;function Wg(a){if(!a)throw Error();throw a;}
function Xg(a){return a}
function Yg(a){this.h=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new Yg(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={R:0};f.R<a.length;f={R:f.R},++f.R)Zg(V.resolve(a[f.R]).then(function(g){return function(h){d[g.R]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new Yg(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new Yg(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Xg,e=null!==b&&void 0!==b?b:Wg;return new V(new Yg(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){$g(c,c,d,f,g)}),c.onRejected.push(function(){ah(c,c,e,f,g)})):"FULFILLED"===c.state.status?$g(c,c,d,f,g):"REJECTED"===c.state.status&&ah(c,c,e,f,g)}))};
function Zg(a,b){a.then(void 0,b)}
function $g(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?bh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ah(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?bh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function bh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?bh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ch(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function dh(a){return new Promise(function(b,c){ch(a,b,c)})}
function W(a){return new V(new Yg(function(b,c){ch(a,b,c)}))}
;function eh(a,b){return new V(new Yg(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function fh(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
n=fh.prototype;n.add=function(a,b,c){return X(this,[a],{mode:"readwrite",D:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return X(this,[a],{mode:"readwrite",D:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return X(this,[a],{mode:"readonly",D:!0},function(c){return c.objectStore(a).count(b)})};
function gh(a,b,c){a=a.h.createObjectStore(b,c);return new hh(a)}
n.delete=function(a,b){return X(this,[a],{mode:"readwrite",D:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return X(this,[a],{mode:"readonly",D:!0},function(c){return c.objectStore(a).get(b)})};
function ih(a,b){return X(a,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(c){c=c.objectStore("LogsRequestsStore");return W(c.h.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function X(a,b,c,d){return J(a,function f(){var g=this,h,k,l,m,q,r,p,x,D,w,L,P;return z(f,function(G){switch(G.h){case 1:var O={mode:"readonly",D:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);h=O;g.transactionCount++;k=h.D?3:1;l=0;case 2:if(m){G.s(3);break}l++;q=Math.round(S());ra(G,4);r=g.h.transaction(b,h.mode);O=new jh(r);O=kh(O,d);return y(G,O,6);case 6:return p=G.i,x=Math.round(S()),lh(g,q,x,l,void 0,b.join(),h),G.return(p);case 4:D=sa(G);w=Math.round(S());
L=Ug(D,g.h.name,b.join(),g.h.version);if((P=L instanceof U&&!L.h)||l>=k)lh(g,q,w,l,L,b.join(),h),m=L;G.s(2);break;case 3:return G.return(Promise.reject(m))}})})}
function lh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Gg("QUOTA_EXCEEDED",{dbName:Lg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Gg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),mh(a,!1,d,f,b,g.tag),Fg(e)):mh(a,!0,d,f,b,g.tag)}
function mh(a,b,c,d,e,f){Gg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function hh(a){this.h=a}
n=hh.prototype;n.add=function(a,b){return W(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return W(this.h.clear()).then(function(){})};
n.count=function(a){return W(this.h.count(a))};
function nh(a,b){return oh(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?nh(this,a):W(this.h.delete(a))};
n.get=function(a){return W(this.h.get(a))};
n.index=function(a){try{return new ph(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Sg(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function oh(a,b,c){a=a.h.openCursor(b.query,b.direction);return qh(a).then(function(d){return eh(d,c)})}
function jh(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=U;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function kh(a,b){var c=new Promise(function(d,e){try{Zg(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
jh.prototype.abort=function(){this.h.abort();this.i=!0;throw new U("EXPLICIT_ABORT");};
jh.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new hh(a),this.j.set(a,b));return b};
function ph(a){this.h=a}
n=ph.prototype;n.count=function(a){return W(this.h.count(a))};
n.delete=function(a){return rh(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return W(this.h.get(a))};
n.getKey=function(a){return W(this.h.getKey(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function rh(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return qh(a).then(function(d){return eh(d,c)})}
function sh(a,b){this.request=a;this.cursor=b}
function qh(a){return W(a).then(function(b){return b?new sh(a,b):null})}
n=sh.prototype;n.advance=function(a){this.cursor.advance(a);return qh(this.request)};
n.continue=function(a){this.cursor.continue(a);return qh(this.request)};
n.delete=function(){return W(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.update=function(a){return W(this.cursor.update(a))};function th(a,b,c){return new Promise(function(d,e){function f(){r||(r=new fh(g.result,{closed:q}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.ob,m=c.upgrade,q=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Gg("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Lg(a)});var x=f(),D=new jh(g.transaction);
m&&m(x,function(w){return p.oldVersion<w&&p.newVersion>=w},D);
D.done.catch(function(w){e(w)})}catch(w){e(w)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Gg("IDB_UNEXPECTEDLY_CLOSED",{dbName:Lg(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function uh(a,b,c){c=void 0===c?{}:c;return th(a,b,c)}
function vh(a,b){b=void 0===b?{}:b;return J(this,function d(){var e,f,g;return z(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return y(h,dh(e),0)})})}
;function wh(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
wh.prototype.i=function(a,b,c){c=void 0===c?{}:c;return uh(a,b,c)};
wh.prototype.delete=function(a){a=void 0===a?{}:a;return vh(this.name,a)};
function xh(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
wh.prototype.open=function(){function a(){return J(c,function g(){var h=this,k,l,m,q,r;return z(g,function(p){switch(p.h){case 1:return ra(p,2),y(p,h.i(h.name,h.options.version,e),4);case 4:k=p.i;a:{var x=h.options;for(var D=u(Object.keys(x.ja)),w=D.next();!w.done;w=D.next()){w=w.value;var L=x.ja[w],P=void 0===L.nb?Number.MAX_VALUE:L.nb;if(k.h.version>=L.na&&!(k.h.version>=P)&&!k.h.objectStoreNames.contains(w)){x=w;break a}}x=void 0}l=x;if(void 0===l){p.s(5);break}if(h.j){p.s(6);break}h.j=!0;return y(p,
h.delete(),7);case 7:return Fg(new U("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:h.name,lb:l})),p.return(a());case 6:throw new Rg(l);case 5:return p.return(k);case 2:m=sa(p);if(m instanceof DOMException?"VersionError"!==m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"!==m.name:!(m instanceof Object&&"message"in m)||"An attempt was made to open a database using a lower version than the existing version."!==m.message){p.s(8);break}return y(p,h.i(h.name,void 0,Object.assign(Object.assign({},
e),{upgrade:void 0})),9);case 9:q=p.i;r=q.h.version;if(void 0!==h.options.version&&r>h.options.version+1)throw q.close(),h.l=!1,xh(h,r);return p.return(q);case 8:throw b(),m;}})})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw xh(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,ob:b,upgrade:this.options.upgrade};return this.h=d=a()};var yh=new wh("YtIdbMeta",{ja:{databases:{na:1}},upgrade:function(a,b){b(1)&&gh(a,"databases",{keyPath:"actualName"})}});
function zh(a){return J(this,function c(){var d;return z(c,function(e){if(1==e.h)return y(e,yh.open(),2);d=e.i;return e.return(X(d,["databases"],{D:!0,mode:"readwrite"},function(f){var g=f.objectStore("databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return W(g.h.put(a,void 0)).then(function(){})})}))})})}
function Ah(a){return J(this,function c(){var d;return z(c,function(e){if(1==e.h)return a?y(e,yh.open(),2):e.return();d=e.i;return e.return(d.delete("databases",a))})})}
function Bh(a){return J(this,function c(){var d,e;return z(c,function(f){return 1==f.h?(d=[],y(f,yh.open(),2)):3!=f.h?(e=f.i,y(f,X(e,["databases"],{D:!0,mode:"readonly"},function(g){d.length=0;return oh(g.objectStore("databases"),{},function(h){a(h.cursor.value)&&d.push(h.cursor.value);return h.continue()})}),3)):f.return(d)})})}
function Ch(){return Bh(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var Dh,Eh=new function(){}(new function(){});
function Fh(){return J(this,function b(){var c,d,e;return z(b,function(f){switch(f.h){case 1:c=Bg();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new Cg(!0));var g;if(g=Ff)g=/WebKit\/([0-9]+)/.exec(wb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(wb),g=!(g&&602<=parseInt(g[1],10)));if(g||Qb)return f.return(new Cg(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new Cg(!1))}catch(h){return f.return(new Cg(!1))}if(!("IDBTransaction"in
self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new Cg(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return y(f,zh(e),4);case 4:return y(f,Ah("yt-idb-test-do-not-use"),5);case 5:return f.return(new Cg(!0));case 2:return sa(f),f.return(new Cg(!1))}})})}
function Gh(){if(void 0!==Dh)return Dh;Eg=!0;return Dh=Fh().then(function(a){Eg=!1;return a.isSupported()})}
function Hh(){return Gh().then(function(a){return a?Eh:void 0})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Ih(a){if(!Ig())throw a=new U("AUTH_INVALID",{dbName:a}),Fg(a),a;var b=Jg();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Jh(a,b,c,d){return J(this,function f(){var g,h,k,l;return z(f,function(m){switch(m.h){case 1:return y(m,Hh(),2);case 2:g=m.i;if(!g)throw h=Vg("openDbImpl",a,b),Fg(h),h;Kg(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Ih(a);ra(m,3);return y(m,zh(k),5);case 5:return y(m,uh(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=sa(m),ra(m,7),y(m,Ah(k.actualName),9);case 9:m.h=8;m.o=0;break;case 7:sa(m);case 8:throw l;}})})}
function Kh(a,b,c){c=void 0===c?{}:c;return Jh(a,b,!1,c)}
function Lh(a,b,c){c=void 0===c?{}:c;return Jh(a,b,!0,c)}
function Mh(a,b){b=void 0===b?{}:b;return J(this,function d(){var e,f;return z(d,function(g){if(1==g.h)return y(g,Hh(),2);if(3!=g.h){e=g.i;if(!e)return g.return();Kg(a);f=Ih(a);return y(g,vh(f.actualName,b),3)}return y(g,Ah(f.actualName),0)})})}
function Nh(a,b){var c=this;a=a.map(function(d){return J(c,function f(){return z(f,function(g){return 1==g.h?y(g,vh(d.actualName,b),2):y(g,Ah(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Oh(){var a=void 0===a?{}:a;return J(this,function c(){var d,e;return z(c,function(f){if(1==f.h)return y(f,Hh(),2);if(3!=f.h){d=f.i;if(!d)return f.return();Kg("LogsDatabaseV2");return y(f,Ch(),3)}e=f.i;return y(f,Nh(e,a),0)})})}
function Ph(a,b){b=void 0===b?{}:b;return J(this,function d(){var e;return z(d,function(f){if(1==f.h)return y(f,Hh(),2);if(3!=f.h){e=f.i;if(!e)return f.return();Kg(a);return y(f,vh(a,b),3)}return y(f,Ah(a),0)})})}
;function Qh(a,b){wh.call(this,a,b);this.options=b;Kg(a)}
v(Qh,wh);function Rh(a,b){var c;return function(){c||(c=new Qh(a,b));return c}}
Qh.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.va?Lh:Kh)(a,b,Object.assign({},c))};
Qh.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.va?Ph:Mh)(this.name,a)};
function Sh(a,b){return Rh(a,b)}
;var Th;
function Uh(){if(Th)return Th();var a={};Th=Sh("LogsDatabaseV2",{ja:(a.LogsRequestsStore={na:2},a),va:!1,upgrade:function(b,c,d){c(2)&&gh(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Th()}
;function Vh(a){return J(this,function c(){var d,e,f,g;return z(c,function(h){if(1==h.h)return d={startTime:S(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},y(h,Uh().open(),2);if(3!=h.h)return e=h.i,f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:Q("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),y(h,ih(e,f),3);g=h.i;d.pb=S();Wh(d);return h.return(g)})})}
function Xh(a){return J(this,function c(){var d,e,f,g,h,k,l;return z(c,function(m){if(1==m.h)return d={startTime:S(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},y(m,Uh().open(),2);if(3!=m.h)return e=m.i,f=Q("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,S()],k=IDBKeyRange.bound(g,h),l=void 0,y(m,X(e,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(q){return rh(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},function(r){r.cursor.value&&(l=r.cursor.value,
"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
d.pb=S();Wh(d);return m.return(l)})})}
function Yh(a){return J(this,function c(){var d;return z(c,function(e){if(1==e.h)return y(e,Uh().open(),2);d=e.i;return e.return(X(d,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Zh(a){return J(this,function c(){var d;return z(c,function(e){if(1==e.h)return y(e,Uh().open(),2);d=e.i;return e.return(X(d,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,W(g.h.put(h,void 0)).then(function(){return h})):V.resolve(void 0)})}))})})}
function $h(a){return J(this,function c(){var d;return z(c,function(e){if(1==e.h)return y(e,Uh().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function ai(){return J(this,function b(){var c,d;return z(b,function(e){if(1==e.h)return y(e,Uh().open(),2);c=e.i;d=S()-2592E6;return y(e,X(c,["LogsRequestsStore"],{mode:"readwrite",D:!0},function(f){return oh(f.objectStore("LogsRequestsStore"),{},function(g){if(g.cursor.value.timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function bi(){J(this,function b(){return z(b,function(c){return y(c,Oh(),0)})})}
function Wh(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var ci={},di=Sh("ServiceWorkerLogsDatabase",{ja:(ci.SWHealthLog={na:1},ci),va:!0,upgrade:function(a,b){b(1)&&gh(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function ei(){J(this,function b(){var c,d;return z(b,function(e){if(1==e.h)return R("web_clean_sw_logs_store")?y(e,di().open(),3):e.s(0);c=e.i;d=S()-2592E6;return y(e,X(c,["SWHealthLog"],{mode:"readwrite",D:!0},function(f){return oh(f.objectStore("SWHealthLog"),{},function(g){if(g.cursor.value.timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function fi(){return J(this,function b(){var c;return z(b,function(d){if(1==d.h)return y(d,di().open(),2);c=d.i;return y(d,c.clear("SWHealthLog"),0)})})}
;var gi;function hi(){gi||(gi=new tg("yt.offline"));return gi}
function ii(a){if(R("offline_error_handling")){var b=hi().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);hi().set("errors",b,2592E3,!0)}}
;var ji=ff("network_polling_interval",3E4);function Y(){M.call(this);this.G=0;this.S=this.l=!1;this.i=this.oa();ki(this);li(this)}
v(Y,M);function mi(){if(!Y.h){var a=B("yt.networkStatusManager.instance")||new Y;E("yt.networkStatusManager.instance",a);Y.h=a}return Y.h}
n=Y.prototype;n.C=function(){return this.i};
n.P=function(a,b){a!==this.i&&((void 0===b?0:b)?this.J():this.i=a)};
n.mb=function(a){this.l=!0;if(void 0===a?0:a)this.G||ni(this)};
n.oa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.bb=function(){this.S=!0};
n.V=function(a,b){return M.prototype.V.call(this,a,b)};
function li(a){window.addEventListener("online",function(){return J(a,function c(){var d=this;return z(c,function(e){if(1==e.h)return y(e,d.J(),2);if(d.S&&R("offline_error_handling")){var f=hi().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new Hg(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Ke(h)}hi().set("errors",{},2592E3,!0)}}e.h=0})})})}
function ki(a){window.addEventListener("offline",function(){return J(a,function c(){var d=this;return z(c,function(e){return y(e,d.J(),0)})})})}
function ni(a){a.G=hf(function(){return J(a,function c(){var d=this;return z(c,function(e){if(1==e.h)return d.i?d.oa()||!d.l?e.s(3):y(e,d.J(),3):y(e,d.J(),3);ni(d);e.h=0})})},ji)}
n.J=function(a){var b=this;return this.o?this.o:this.o=new Promise(function(c){return J(b,function e(){var f,g,h,k=this;return z(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.v=kf(function(){f.abort()},a||2E4)),y(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.o=void 0;k.v&&nf(k.v);h!==k.i&&(k.i=h,k.i&&k.l?Sd(k,"ytnetworkstatus-online"):k.l&&Sd(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.s(3)}})})})};
Y.prototype.sendNetworkCheckRequest=Y.prototype.J;Y.prototype.listen=Y.prototype.V;Y.prototype.enableErrorFlushing=Y.prototype.bb;Y.prototype.getWindowStatus=Y.prototype.oa;Y.prototype.monitorNetworkStatusChange=Y.prototype.mb;Y.prototype.networkStatusHint=Y.prototype.P;Y.prototype.isNetworkAvailable=Y.prototype.C;Y.getInstance=mi;function oi(a){a=void 0===a?{}:a;M.call(this);var b=this;this.l=this.v=0;this.i=mi();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Aa);a.Ha&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.i))a.la?(this.la=a.la,c("ytnetworkstatus-online",function(){pi(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){pi(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Sd(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Sd(b,"publicytnetworkstatus-offline")}))}
v(oi,M);oi.prototype.C=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
oi.prototype.P=function(a,b){b=void 0===b?!1:b;var c=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);c&&c(a,b)};
oi.prototype.J=function(a){return J(this,function c(){var d=this,e;return z(c,function(f){return(e=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i))?f.return(e(a)):f.return(!0)})})};
function pi(a,b){a.la?a.l?(nf(a.v),a.v=kf(function(){a.o!==b&&(Sd(a,b),a.o=b,a.l=S())},a.la-(S()-a.l))):(Sd(a,b),a.o=b,a.l=S()):Sd(a,b)}
;var qi=0,ri=0,si,ti=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,databaseToken:void 0,potentialEsfErrorCounter:ri,isIdbSupported:!1};E("ytNetworklessLoggingInitializationOptions",ti);function ui(a,b){function c(d){var e=vi().C();if(!wi()||!d||e&&R("vss_networkless_bypass_write"))xi(a,b);else{var f={url:a,options:b,timestamp:S(),status:"NEW",sendCount:0};Vh(f,d).then(function(g){f.id=g;vi().C()&&yi(f)}).catch(function(g){yi(f);
vi().C()?Ke(g):ii(g)})}}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?Hh().then(function(d){c(d)}):c(zi())}
function Ai(a,b){function c(d){if(wi()&&d){var e={url:a,options:b,timestamp:S(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?$h(e.id,d):f=!0;R("vss_network_hint")&&vi().P(!0);g(h,k)};
xi(e.url,e.options);Vh(e,d).then(function(h){e.id=h;f&&$h(e.id,d)}).catch(function(h){vi().C()?Ke(h):ii(h)})}else xi(a,b)}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?Hh().then(function(d){c(d)}):c(zi())}
function Bi(){var a=this,b=zi();if(!b)throw Vg("throttleSend");qi||(qi=kf(function(){return J(a,function d(){var e;return z(d,function(f){if(1==f.h)return y(f,Xh("NEW",b),2);if(3!=f.h)return e=f.i,e?y(f,yi(e),3):(nf(qi),qi=0,f.return());qi&&(qi=0,Bi());f.h=0})})},100))}
function yi(a){return J(this,function c(){var d,e,f;return z(c,function(g){switch(g.h){case 1:d=zi();if(!d)throw e=Vg("immediateSend"),e;if(void 0===a.id){g.s(2);break}return y(g,Yh(a.id,d),3);case 3:(f=g.i)?a=f:Le(Error("The request cannot be found in the database."));case 2:var h=a.timestamp;if(!(2592E6<=S()-h)){g.s(4);break}Le(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){g.s(5);break}return y(g,$h(a.id,d),5);case 5:return g.return();case 4:a.skipRetry||
(a=Ci(a));h=a;var k,l;if(null===(l=null===(k=null===h||void 0===h?void 0:h.options)||void 0===k?void 0:k.postParams)||void 0===l?0:l.requestTimeMs)h.options.postParams.requestTimeMs=Math.round(S());a=h;if(!a){g.s(0);break}if(!a.skipRetry||void 0===a.id){g.s(8);break}return y(g,$h(a.id,d),8);case 8:xi(a.url,a.options,!!a.skipRetry),g.h=0}})})}
function Ci(a){var b=this,c=zi();if(!c)throw Vg("updateRequestHandlers");var d=a.options.onError?a.options.onError:function(){};
a.options.onError=function(f,g){return J(b,function k(){return z(k,function(l){switch(l.h){case 1:if(!((B("ytNetworklessLoggingInitializationOptions")?ti.potentialEsfErrorCounter:ri)<=ff("potential_esf_error_limit",10))){l.s(2);break}return y(l,vi().J(),3);case 3:if(vi().C())B("ytNetworklessLoggingInitializationOptions")&&ti.potentialEsfErrorCounter++,ri++;else return d(f,g),l.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){l.s(4);break}return 1>a.sendCount?y(l,Zh(a.id,c),8):y(l,$h(a.id,
c),4);case 8:kf(function(){vi().C()&&Bi()},5E3);
case 4:d(f,g),l.h=0}})})};
var e=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(f,g){return J(b,function k(){return z(k,function(l){if(1==l.h)return void 0===(null===a||void 0===a?void 0:a.id)?l.s(2):y(l,$h(a.id,c),2);R("vss_network_hint")&&vi().P(!0);e(f,g);l.h=0})})};
return a}
function vi(){si||(si=new oi({Ha:!0,Aa:!0}));return si}
function xi(a,b,c){if(R("networkless_with_beacon")){var d=["method","postBody"];if(Object.keys(b).length>d.length)c=!0;else{c=0;d=u(d);for(var e=d.next();!e.done;e=d.next())b.hasOwnProperty(e.value)&&c++;c=Object.keys(b).length!==c}c?xf(a,b):Mf(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?Jf(a):xf(a,b)}
function wi(){return B("ytNetworklessLoggingInitializationOptions")?ti.isNwlInitialized:!1}
function zi(){return B("ytNetworklessLoggingInitializationOptions")?ti.databaseToken:void 0}
;function Di(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.U=function(){};
this.now=Date.now;this.Ra=null!==(b=a.Ra)&&void 0!==b?b:100;this.Pa=null!==(c=a.Pa)&&void 0!==c?c:1;this.Ma=null!==(d=a.Ma)&&void 0!==d?d:2592E6;this.La=null!==(e=a.La)&&void 0!==e?e:12E4;this.Oa=null!==(f=a.Oa)&&void 0!==f?f:5E3;this.databaseToken=null!==(g=a.databaseToken)&&void 0!==g?g:void 0;this.ha=!!a.ha;this.fa=null!==(h=a.fa)&&void 0!==h?h:.1;this.ta=null!==(k=a.ta)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.U&&(this.U=a.U);this.F=a.F;this.Ga=a.Ga;this.A=a.A;this.B=
a.B;this.M=a.M;this.sa=a.sa;this.ra=a.ra;this.databaseToken&&(!this.F||this.F("networkless_logging"))&&Ei(this)}
function Ei(a){J(a,function c(){var d=this;return z(c,function(e){if(!d.databaseToken)return e.return();Fi(d);d.B.C()&&d.ba();d.B.V(d.sa,d.ba.bind(d));d.B.V(d.ra,d.xa.bind(d));d.h=!0;return d.ha&&Math.random()<=d.fa?y(e,d.A.Za(d.databaseToken),0):e.s(0)})})}
n=Di.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A.set(d,this.databaseToken).then(function(e){d.id=e;c.B.C()&&Gi(c,d)}).catch(function(e){Gi(c,d);
Hi(c,e)})}else this.M(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F&&this.F("nwl_skip_retry")&&(e.skipRetry=c);if(this.B.C()){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return J(d,function l(){var m=this,q;return z(l,function(r){if(1==r.h)return q=m,y(r,m.A.set(e,m.databaseToken).catch(function(p){Hi(q,p)}),2);
f(g,h);r.h=0})})}}this.M(a,b,e.skipRetry)}else this.A.set(e,this.databaseToken).catch(function(g){d.M(a,b,e.skipRetry);
Hi(d,g)})}else this.M(a,b,this.F&&this.F("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.A.T(d.id,c.databaseToken):e=!0;c.B.P&&c.F&&c.F("vss_network_hint")&&c.B.P(!0);f(g,h)};
this.M(d.url,d.options);this.A.set(d,this.databaseToken).then(function(g){d.id=g;e&&c.A.T(d.id,c.databaseToken)}).catch(function(g){Hi(c,g)})}else this.M(a,b)};
n.ba=function(){var a=this;if(!this.databaseToken)throw Vg("throttleSend");this.i||(this.i=kf(function(){return J(a,function c(){var d=this,e;return z(c,function(f){if(1==f.h)return y(f,d.A.Da("NEW",d.databaseToken),2);if(3!=f.h)return e=f.i,e?y(f,Gi(d,e),3):(d.xa(),f.return());d.i&&(d.i=0,d.ba());f.h=0})})},this.Ra))};
n.xa=function(){nf(this.i);this.i=0};
function Gi(a,b){return J(a,function d(){var e=this,f,g;return z(d,function(h){switch(h.h){case 1:if(!e.databaseToken)throw f=Vg("immediateSend"),f;if(void 0===b.id){h.s(2);break}return y(h,e.A.kb(b.id,e.databaseToken),3);case 3:(g=h.i)?b=g:e.U(Error("The request cannot be found in the database."));case 2:if(Ii(e,b,e.Ma)){h.s(4);break}e.U(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){h.s(5);break}return y(h,e.A.T(b.id,e.databaseToken),5);case 5:return h.return();
case 4:b.skipRetry||(b=Ji(e,b));if(!b){h.s(0);break}if(!b.skipRetry||void 0===b.id){h.s(8);break}return y(h,e.A.T(b.id,e.databaseToken),8);case 8:e.M(b.url,b.options,!!b.skipRetry),h.h=0}})})}
function Ji(a,b){if(!a.databaseToken)throw Vg("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){return J(a,function h(){var k=this,l;return z(h,function(m){switch(m.h){case 1:l=k;if(!(k.potentialEsfErrorCounter<=k.ta)){m.s(2);break}if(!k.B.J){m.s(3);break}return y(m,k.B.J(),3);case 3:if(k.B.C())k.potentialEsfErrorCounter++;else return c(e,f),m.return();case 2:if(void 0===(null===b||void 0===b?void 0:b.id)){m.s(5);break}return b.sendCount<k.Pa?y(m,k.A.Na(b.id,k.databaseToken),9):y(m,k.A.T(b.id,k.databaseToken),5);case 9:kf(function(){l.B.C()&&l.ba()},k.Oa);
case 5:c(e,f),m.h=0}})})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return J(a,function h(){var k=this;return z(h,function(l){if(1==l.h)return void 0===(null===b||void 0===b?void 0:b.id)?l.s(2):y(l,k.A.T(b.id,k.databaseToken),2);k.B.P&&k.F&&k.F("vss_network_hint")&&k.B.P(!0);d(e,f);l.h=0})})};
return b}
function Ii(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Fi(a){if(!a.databaseToken)throw Vg("retryQueuedRequests");a.A.Da("QUEUED",a.databaseToken).then(function(b){b&&!Ii(a,b,a.La)?kf(function(){return J(a,function d(){var e=this;return z(d,function(f){if(1==f.h)return void 0===b.id?f.s(2):y(f,e.A.Na(b.id,e.databaseToken),2);Fi(e);f.h=0})})}):a.B.C()&&a.ba()})}
function Hi(a,b){a.Sa&&!a.B.C()?a.Sa(b):a.handleError(b)}
;function Ki(){Di.call(this,{A:{Za:ai,T:$h,Da:Xh,kb:Yh,Na:Zh,set:Vh},B:new oi({Ha:!0,Aa:!0}),handleError:Ke,U:Le,M:Li,now:S,Sa:ii,Ga:mf(),sa:"publicytnetworkstatus-online",ra:"publicytnetworkstatus-offline",ha:!0,fa:.1,ta:ff("potential_esf_error_limit",10),F:R});this.ha&&Math.random()<=this.fa&&this.databaseToken&&ei();R("networkless_immediately_drop_sw_health_store")&&Mi(this);R("networkless_immediately_drop_all_requests")&&bi();Ph("LogsDatabaseV2")}
v(Ki,Di);function Ni(){var a=B("yt.networklessRequestController.instance");a||(a=new Ki,E("yt.networklessRequestController.instance",a),R("networkless_logging")&&Hh().then(function(b){a.databaseToken=b;Ei(a)}));
return a}
Ki.prototype.writeThenSend=function(a,b){b||(b={});Ig()||(this.h=!1);Di.prototype.writeThenSend.call(this,a,b)};
Ki.prototype.sendThenWrite=function(a,b,c){b||(b={});Ig()||(this.h=!1);Di.prototype.sendThenWrite.call(this,a,b,c)};
Ki.prototype.sendAndWrite=function(a,b){b||(b={});Ig()||(this.h=!1);Di.prototype.sendAndWrite.call(this,a,b)};
function Mi(a){J(a,function c(){var d=this,e,f;return z(c,function(g){e=d;if(!d.databaseToken)throw f=Vg("clearSWHealthLogsDb"),f;return g.return(fi().catch(function(h){e.handleError(h)}))})})}
function Li(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(S());if(R("networkless_with_beacon")){c=b;var e=["method","postBody"];if(Object.keys(c).length>e.length)c=!0;else{d=0;e=u(e);for(var f=e.next();!f.done;f=e.next())c.hasOwnProperty(f.value)&&d++;c=Object.keys(c).length!==d}c?xf(a,b):Mf(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?Jf(a):xf(a,b)}
;function Oi(a){var b=this;this.config_=null;a?this.config_=a:qg()&&(this.config_=hg());hf(function(){yg(b)},5E3)}
Oi.prototype.isReady=function(){!this.config_&&qg()&&(this.config_=hg());return!!this.config_};
function kg(a,b,c,d){function e(r){r=void 0===r?!1:r;var p;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||R("skip_ls_gel_retry")||(p=wg(b,c,l,k)),p)){var x=g.onSuccess,D=g.onFetchSuccess;g.onSuccess=function(w,L){xg(p);x(w,L)};
c.onFetchSuccess=function(w,L){xg(p);D(w,L)}}try{r&&d.retry&&!d.Ja.bypassNetworkless?(g.method="POST",d.Ja.writeThenSend?R("use_new_nwl")?Ni().writeThenSend(q,g):ui(q,g):R("use_new_nwl")?Ni().sendAndWrite(q,g):Ai(q,g)):(g.method="POST",g.postParams||(g.postParams={}),xf(q,g))}catch(w){if("InvalidAccessError"==w.name)p&&(xg(p),p=0),Le(Error("An extension is blocking network request."));
else throw w;}p&&hf(function(){yg(a)},5E3)}
!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Le(new Hg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Hg("innertube xhrclient not ready",b,c,d);Ke(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.hb)&&(h=f);var k=a.config_.jb||!1,l=rg(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var m={alt:"json"};a.config_.ib&&g.headers.Authorization||(m.key=a.config_.innertubeApiKey);var q=cf(""+h+f,m||{},!0);R("use_new_nwl")||wi()?Gh().then(function(r){e(r)}):e(!1)}
;function Pi(a,b){var c=void 0===c?{}:c;var d=Oi;Q("ytLoggingEventsDefaultDisabled",!1)&&Oi==Oi&&(d=null);c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||S());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=B("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&c.Qa&&(a=e.context,b=c.Qa,lg[b]=b in lg?lg[b]+1:0,a.sequence={index:lg[b],groupKey:b},c.Eb&&delete lg[c.Qa]);(c.Jb?eg:ag)({endpoint:"log_event",
payload:e,L:c.L,ga:c.ga},d)}
;var Qi=[{qa:function(a){return"Cannot read property '"+a.key+"'"},
ka:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{qa:function(a){return"Cannot call '"+a.key+"'"},
ka:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{qa:function(a){return a.key+" is not defined"},
ka:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Si={O:[],N:[{Xa:Ri,weight:500}]};function Ri(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ti(){this.N=[];this.O=[]}
var Ui;function Vi(){if(!Ui){var a=Ui=new Ti;a.O.length=0;a.N.length=0;Si.O&&a.O.push.apply(a.O,Si.O);Si.N&&a.N.push.apply(a.N,Si.N)}return Ui}
;var Wi=new N;function Xi(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yi(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yi(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yi(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yi(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zi(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=$i(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Xi(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?$i(e+".ve",f,g,h):0;d+=g;d+=$i(e,a[e],b,c);if(500<d)break}}else c[b]=aj(a),d+=c[b].length;else c[b]=aj(a),d+=c[b].length;return d}
function $i(a,b,c,d){c+="."+a;a=aj(b);d[c]=a;return c.length+a.length}
function aj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var bj=new Set,cj=0,dj=0,ej=0,fj=[],gj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var hj={};function ij(a){return hj[a]||(hj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var jj={},kj=[],le=new N,lj={};function mj(){for(var a=u(kj),b=a.next();!b.done;b=a.next())b=b.value,b()}
function nj(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[ij(b)]:a.getAttribute("data-"+b):null;return c}
function oj(a,b){for(var c=1;c<arguments.length;++c);le.W.apply(le,arguments)}
;function pj(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function qj(a,b,c){rj||(rj={},Te(window,"message",function(d){a:{if(d.origin===Z(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=rj[e.id])d.u=!0,d.u&&(H(d.o,d.sendMessage,d),d.o.length=0),d.wa(e)}e=void 0}return e}));
rj[c]=b}
var rj=null;function sj(a,b,c){this.m=this.h=this.i=null;this.j=0;this.u=!1;this.o=[];this.l=null;this.G={};if(!a)throw Error("YouTube player element ID required.");this.id=Ha(this);this.v=c;this.setup(a,b)}
n=sj.prototype;n.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
n.getIframe=function(){return this.h};
n.wa=function(a){tj(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);uj(this,a);return this};
function vj(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.v===b[0]&&uj(a,c)}}
n.destroy=function(){this.h&&this.h.id&&(jj[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);rj&&(rj[this.id]=null);this.i=null;a=this.h;for(var c in Za)Za[c][0]==a&&Re(c);this.m=this.h=null};
n.za=function(){return{}};
function wj(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.o.push(b)}
function tj(a,b,c){a.l.j||(c={target:a,data:c},a.l.W(b,c),oj(a.v+"."+b,c))}
function xj(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Z(a.i,"title"));(b=Z(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.za();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&H(["debugjs","debugcss"],function(h){var k=Lb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Z(a.i,"host")+("/embed/"+Z(a.i,"videoId"))+"?"+Jb(g);return c}
n.Ka=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function yj(a){qj(a.i,a,a.id);a.j=Ve(a.Ka.bind(a));Te(a.h,"load",function(){window.clearInterval(a.j);a.j=Ve(a.Ka.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Hb(a.src):"https://www.youtube.com"),this.i=new pj(b),c||(b=xj(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ha(this.h)),jj[this.h.id]=this,window.postMessage){this.l=new N;yj(this);b=Z(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in lj)lj.hasOwnProperty(e)&&
vj(this,e)}};
function uj(a,b){a.G[b]||(a.G[b]=!0,wj(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=Ud(a);var b=[Hb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(w){if(w.name&&"SyntaxError"===w.name){if(!(w.message&&0<w.message.indexOf("target origin ''"))){var d=void 0,e=w;d=void 0===d?{}:d;d.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&
e.level&&(d=e.level);if(R("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=cj)){g=void 0;var k=f,l=cd(e);f=l.message||"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+
": "+f)){var q=m.split("\n");q.shift();m=q.join("\n")}q=l.lineNumber||"Not available";l=l.fileName||"Not available";var r=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(r=Zi(e.args[g],"params."+g,k,r),500<=r);g++);else if(e.hasOwnProperty("params")&&e.params){var p=e.params;if("object"===typeof e.params)for(g in p){if(p[g]){var x="params."+g,D=aj(p[g]);k[x]=D;r+=x.length+D.length;if(500<r)break}}else k.params=aj(p)}if(fj.length)for(g=0;g<fj.length&&!(r=Zi(fj[g],"params.context."+
g,k,r),500<=r);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:q,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=Vi();f=u(e.O);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Gb)){e=h.weight;break a}e=u(e.N);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Xa(g)){e=f.weight;break a}e=1}g.sampleWeight=
e;e=g;g=u(Qi);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.ka[e.name])for(q=u(f.ka[e.name]),h=q.next();!h.done;h=q.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];q=l.groups;l={};for(m=0;m<q.length;m++)l[q[m]]=h[m+1],e.params["params.error."+q[m]]=h[m+1];e.message=f.qa(l);break}e.params||(e.params={});g=Vi();e.params["params.errorServiceSignature"]="msg="+g.O.length+"&cb="+g.N.length;e.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&
(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));gb("sample").constructor!==eb&&(e.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!bj.has(e.message)){"ERROR"===d?(Wi.W("handleError",e),R("record_app_crashed_web")&&0===ej&&1===e.sampleWeight&&(ej++,Pi("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),dj++):"WARNING"===d&&Wi.W("handleWarning",e);if(R("kevlar_gel_error_routing")){g=
d;l=e;b:{f=u(gj);for(h=f.next();!h.done;h=f.next())if(Gf(h.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{h={stackTrace:l.stack};l.fileName&&(h.filename=l.fileName);f=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(h.lineNumber=Number(f[0]),h.columnNumber=Number(f[1])):h.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};
"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};q={pageUrl:window.location.href,kvPairs:[]};Q("FEXP_EXPERIMENTS")&&(q.experimentIds=Q("FEXP_EXPERIMENTS"));if(l=l.params)for(m=u(Object.keys(l)),k=m.next();!k.done;k=m.next())k=k.value,q.kvPairs.push({key:"client."+k,value:String(l[k])});l=Q("SERVER_NAME",void 0);m=Q("SERVER_VERSION",void 0);l&&m&&(q.kvPairs.push({key:"server.name",value:l}),q.kvPairs.push({key:"server.version",
value:m}));f={errorMetadata:q,stackTrace:h,logMessage:f}}f&&(Pi("clientError",f),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&cg())}if(!R("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&(d.postParams.stack=f.stack);
f=u(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=Q("SERVER_NAME",void 0);f=Q("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}xf(Q("ECATCHER_REPORT_HOST","")+"/error_204",d)}try{bj.add(e.message)}catch(L){}cj++}}}}}else throw w;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function zj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Aj(a){return 0===a.search("get")||0===a.search("is")}
;function Bj(a,b){sj.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.I={};this.playerInfo={}}
v(Bj,sj);n=Bj.prototype;n.za=function(){var a=Z(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.i,"embedConfig")){if(C(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.wa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(C(a))for(var c in a)a.hasOwnProperty(c)&&(this.I[c]=a[c]);break;case "infoDelivery":Cj(this,a);break;case "initialDelivery":C(a)&&(window.clearInterval(this.j),this.playerInfo={},this.I={},Dj(this,a.apiInterface),Cj(this,a));break;default:tj(this,b,a)}};
function Cj(a,b){if(C(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Dj(a,b){H(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:zj(c)?this[c]=function(){this.playerInfo={};
this.I={};wj(this,c,arguments);return this}:Aj(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){wj(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Z(this.i,"host")+("/embed/"+Z(this.i,"videoId")),b=Number(Z(this.i,"width")),c=Number(Z(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);a=ib(a,void 0);return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.I.namespaces?a?this.I[a]?this.I[a].options||[]:[]:this.I.namespaces||[]:[]};
n.getOption=function(a,b){if(this.I.namespaces&&a&&b&&this.I[a])return this.I[a][b]};
function Ej(a){if("iframe"!==a.tagName.toLowerCase()){var b=nj(a,"videoid");b&&(b={videoId:b,width:nj(a,"width"),height:nj(a,"height")},new Bj(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return jj[a]});
E("YT.scan",mj);E("YT.subscribe",function(a,b,c){le.subscribe(a,b,c);lj[a]=!0;for(var d in jj)jj.hasOwnProperty(d)&&vj(jj[d],a)});
E("YT.unsubscribe",function(a,b,c){ke(a,b,c)});
E("YT.Player",Bj);sj.prototype.destroy=sj.prototype.destroy;sj.prototype.setSize=sj.prototype.setSize;sj.prototype.getIframe=sj.prototype.getIframe;sj.prototype.addEventListener=sj.prototype.addEventListener;Bj.prototype.getVideoEmbedCode=Bj.prototype.getVideoEmbedCode;Bj.prototype.getOptions=Bj.prototype.getOptions;Bj.prototype.getOption=Bj.prototype.getOption;
kj.push(function(a){var b=a;b||(b=document);a=Va(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ra(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Va(b);H(Ua(a,b),Ej)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||mj();var Fj=A.onYTReady;Fj&&Fj();var Gj=A.onYouTubeIframeAPIReady;Gj&&Gj();var Hj=A.onYouTubePlayerAPIReady;Hj&&Hj();}).call(this);
