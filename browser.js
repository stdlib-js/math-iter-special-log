// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function x(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,i,a,f,l,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function O(r){var t,e,n,o;for(e=[],o=0,n=k.exec(r);n;)(t=r.slice(o,k.lastIndex-n[0].length)).length&&e.push(t),e.push(F(n)),o=k.lastIndex,n=k.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function U(r){return"string"==typeof r}function V(r){var t,e;if(!U(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[O(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return T.apply(null,t)}var I,N=Object.prototype,P=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,B=N.__lookupGetter__,R=N.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(B.call(r,t)||R.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var L=I;function G(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Z=/./;function W(r){return"boolean"==typeof r}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=M();function z(){return X&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function D(r,t){return null!=r&&q.call(r,t)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=z()?function(r){var t,e,n;if(null==r)return Y.call(r);e=r[J],t=D(r,J);try{r[J]=void 0}catch(t){return Y.call(r)}return n=Y.call(r),t?r[J]=e:delete r[J],n}:function(r){return Y.call(r)},Q=Boolean,rr=Boolean.prototype.toString,tr=z();function er(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return W(r)||er(r)}function or(){return new Function("return this;")()}G(nr,"isPrimitive",W),G(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!W(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(cr)return cr;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=ur.document&&ur.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;G(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};function gr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,o;if(("Object"===(e=K(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=pr.exec(n.toString()))return t[1]}return gr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(gr));var br="function"==typeof Z||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function hr(r){return"function"===br(r)}var vr=/./,wr="function"==typeof Object.defineProperty?Object.defineProperty:null,mr=Object.defineProperty;function jr(r){return"number"==typeof r}function Ar(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function _r(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+Ar(o):Ar(o)+r,n&&(r="-"+r)),r}var Sr=String.prototype.toLowerCase,Er=String.prototype.toUpperCase;function xr(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!jr(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=_r(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=_r(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===Er.call(r.specifier)?Er.call(e):Sr.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Tr(r){return"string"==typeof r}var kr=Math.abs,Fr=String.prototype.toLowerCase,Or=String.prototype.toUpperCase,Ur=String.prototype.replace,Vr=/e\+(\d)$/,Ir=/e-(\d)$/,Nr=/^(\d+)$/,Pr=/^(\d+)e/,$r=/\.0$/,Cr=/\.0*e/,Br=/(\..*[^0])0*e/;function Rr(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!jr(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":kr(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Ur.call(e,Br,"$1e"),e=Ur.call(e,Cr,"e"),e=Ur.call(e,$r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Ur.call(e,Vr,"e+0$1"),e=Ur.call(e,Ir,"e-0$1"),r.alternate&&(e=Ur.call(e,Nr,"$1."),e=Ur.call(e,Pr,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Or.call(r.specifier)?Or.call(e):Fr.call(e)}function Lr(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Gr(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Lr(n):Lr(n)+r}var Zr=String.fromCharCode,Wr=isNaN,Mr=Array.isArray;function Xr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function zr(r){var t,e,n,o,i,a,c,u,f;if(!Mr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Tr(n=r[u]))a+=n;else{if(t=void 0!==n.precision,!(n=Xr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Wr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Wr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=xr(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!Wr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Wr(i)?String(n.arg):Zr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=Rr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_r(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Gr(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Yr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qr(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Dr(r){var t,e,n,o;for(e=[],o=0,n=Yr.exec(r);n;)(t=r.slice(o,Yr.lastIndex-n[0].length)).length&&e.push(t),e.push(qr(n)),o=Yr.lastIndex,n=Yr.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function Hr(r){return"string"==typeof r}function Jr(r){var t,e;if(!Hr(r))throw new TypeError(Jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[Dr(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return zr.apply(null,t)}var Kr,Qr=Object.prototype,rt=Qr.toString,tt=Qr.__defineGetter__,et=Qr.__defineSetter__,nt=Qr.__lookupGetter__,ot=Qr.__lookupSetter__;Kr=function(){try{return wr({},"x",{}),!0}catch(r){return!1}}()?mr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===rt.call(r))throw new TypeError(Jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===rt.call(e))throw new TypeError(Jr("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(nt.call(r,t)||ot.call(r,t)?(n=r.__proto__,r.__proto__=Qr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&tt&&tt.call(r,t,e.get),a&&et&&et.call(r,t,e.set),r};var it=Kr;function at(r,t,e){it(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ct(r){return"boolean"==typeof r}var ut=M();function ft(){return ut&&"symbol"==typeof Symbol.toStringTag}var lt=Object.prototype.toString,st="function"==typeof Symbol?Symbol:void 0,pt="function"==typeof st?st.toStringTag:"",yt=ft()?function(r){var t,e,n;if(null==r)return lt.call(r);e=r[pt],t=D(r,pt);try{r[pt]=void 0}catch(t){return lt.call(r)}return n=lt.call(r),t?r[pt]=e:delete r[pt],n}:function(r){return lt.call(r)},gt=Boolean,dt=Boolean.prototype.toString,bt=ft();function ht(r){return"object"==typeof r&&(r instanceof gt||(bt?function(r){try{return dt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===yt(r)))}function vt(r){return ct(r)||ht(r)}function wt(){return new Function("return this;")()}at(vt,"isPrimitive",ct),at(vt,"isObject",ht);var mt="object"==typeof self?self:null,jt="object"==typeof window?window:null,At="object"==typeof globalThis?globalThis:null,_t=function(r){if(arguments.length){if(!ct(r))throw new TypeError(Jr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return wt()}if(At)return At;if(mt)return mt;if(jt)return jt;throw new Error("unexpected error. Unable to resolve global object.")}(),St=_t.document&&_t.document.childNodes,Et=Int8Array;function xt(){return/^\s*function\s*([^(]*)/i}var Tt=/^\s*function\s*([^(]*)/i;at(xt,"REGEXP",Tt);var kt=Array.isArray?Array.isArray:function(r){return"[object Array]"===yt(r)};function Ft(r){return null!==r&&"object"==typeof r}function Ot(r){var t,e,n,o;if(("Object"===(e=yt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Tt.exec(n.toString()))return t[1]}return Ft(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}at(Ft,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Jr("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!kt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ft));var Ut="function"==typeof vr||"object"==typeof Et||"function"==typeof St?function(r){return Ot(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Ot(r).toLowerCase():t};function Vt(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Ut(r)}(r.next)}function It(r){return"number"==typeof r}var Nt=Number,Pt=Nt.prototype.toString,$t=z();function Ct(r){return"object"==typeof r&&(r instanceof Nt||($t?function(r){try{return Pt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function Bt(r){return It(r)||Ct(r)}G(Bt,"isPrimitive",It),G(Bt,"isObject",Ct);var Rt,Lt="function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null,Gt=Object,Zt=Object.getPrototypeOf;Rt=hr(Object.getPrototypeOf)?Zt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Wt=Rt,Mt=Object.prototype;function Xt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=Gt(r),Wt(r))}(r),!t||!D(r,"constructor")&&D(t,"constructor")&&hr(t.constructor)&&"[object Function]"===K(t.constructor)&&D(t,"isPrototypeOf")&&hr(t.isPrototypeOf)&&(t===Mt||function(r){var t;for(t in r)if(!D(r,t))return!1;return!0}(r)))}function zt(r,t){return Xt(t)?(D(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Yt(r,t,e,n){var o,i,a,c,u,f,l,s,p;for(c=2,i=[0,0],o=[],a=[],p=0;p<c;p++)if(o.push(arguments[p]),Vt(arguments[p]))a.push(1);else{if(!It(arguments[p]))throw new TypeError(V("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",p,arguments[p]));a.push(0)}if(!hr(e))throw new TypeError(V("invalid argument. Third argument must be a function. Value: `%s`.",e));if(f={invalid:NaN},arguments.length>3&&(s=zt(f,n)))throw s;if(G(u={},"next",y),G(u,"return",g),Lt){for(p=0;p<c;p++)if(a[p]&&!hr(o[p][Lt])){l=!0;break}l||G(u,Lt,d)}return l=!1,u;function y(){var r,t,n;if(l)return{done:!0};for(n=0;n<c;n++)if(a[n]){if((t=o[n].next()).done)return l=!0,t;"number"==typeof t.value?i[n]=t.value:r=!0}else i[n]=o[n];return r?{value:f.invalid,done:!1}:{value:e(i[0],i[1]),done:!1}}function g(r){return l=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var r,t;for(r=[],t=0;t<c;t++)a[t]?r.push(o[t][Lt]()):r.push(o[t]);return r.push(e,f),Yt.apply(null,r)}}var qt,Dt=M(),Ht=Object.prototype.toString,Jt="function"==typeof Symbol?Symbol:void 0,Kt="function"==typeof Jt?Jt.toStringTag:"",Qt=Dt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Ht.call(r);e=r[Kt],t=D(r,Kt);try{r[Kt]=void 0}catch(t){return Ht.call(r)}return n=Ht.call(r),t?r[Kt]=e:delete r[Kt],n}:function(r){return Ht.call(r)},re="function"==typeof Uint32Array,te="function"==typeof Uint32Array?Uint32Array:null,ee="function"==typeof Uint32Array?Uint32Array:void 0;qt=function(){var r,t,e;if("function"!=typeof te)return!1;try{t=new te(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(re&&e instanceof Uint32Array||"[object Uint32Array]"===Qt(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var ne,oe=qt,ie="function"==typeof Float64Array,ae="function"==typeof Float64Array?Float64Array:null,ce="function"==typeof Float64Array?Float64Array:void 0;ne=function(){var r,t,e;if("function"!=typeof ae)return!1;try{t=new ae([1,3.14,-3.14,NaN]),e=t,r=(ie&&e instanceof Float64Array||"[object Float64Array]"===Qt(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ce:function(){throw new Error("not implemented")};var ue,fe=ne,le=M(),se=Object.prototype.toString,pe="function"==typeof Symbol?Symbol:void 0,ye="function"==typeof pe?pe.toStringTag:"",ge=le&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return se.call(r);e=r[ye],t=D(r,ye);try{r[ye]=void 0}catch(t){return se.call(r)}return n=se.call(r),t?r[ye]=e:delete r[ye],n}:function(r){return se.call(r)},de="function"==typeof Uint8Array,be="function"==typeof Uint8Array?Uint8Array:null,he="function"==typeof Uint8Array?Uint8Array:void 0;ue=function(){var r,t,e;if("function"!=typeof be)return!1;try{t=new be(t=[1,3.14,-3.14,256,257]),e=t,r=(de&&e instanceof Uint8Array||"[object Uint8Array]"===ge(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?he:function(){throw new Error("not implemented")};var ve,we=ue,me="function"==typeof Uint16Array,je="function"==typeof Uint16Array?Uint16Array:null,Ae="function"==typeof Uint16Array?Uint16Array:void 0;ve=function(){var r,t,e;if("function"!=typeof je)return!1;try{t=new je(t=[1,3.14,-3.14,65536,65537]),e=t,r=(me&&e instanceof Uint16Array||"[object Uint16Array]"===ge(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ae:function(){throw new Error("not implemented")};var _e,Se={uint16:ve,uint8:we};(_e=new Se.uint16(1))[0]=4660;var Ee=52===new Se.uint8(_e.buffer)[0],xe=!0===Ee?1:0,Te=new fe(1),ke=new oe(Te.buffer);function Fe(r){return Te[0]=r,ke[xe]}var Oe,Ue=M(),Ve=Object.prototype.toString,Ie="function"==typeof Symbol?Symbol:void 0,Ne="function"==typeof Ie?Ie.toStringTag:"",Pe=Ue&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Ve.call(r);e=r[Ne],t=D(r,Ne);try{r[Ne]=void 0}catch(t){return Ve.call(r)}return n=Ve.call(r),t?r[Ne]=e:delete r[Ne],n}:function(r){return Ve.call(r)},$e="function"==typeof Uint32Array,Ce="function"==typeof Uint32Array?Uint32Array:null,Be="function"==typeof Uint32Array?Uint32Array:void 0;Oe=function(){var r,t,e;if("function"!=typeof Ce)return!1;try{t=new Ce(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=($e&&e instanceof Uint32Array||"[object Uint32Array]"===Pe(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Be:function(){throw new Error("not implemented")};var Re,Le=Oe,Ge="function"==typeof Float64Array,Ze="function"==typeof Float64Array?Float64Array:null,We="function"==typeof Float64Array?Float64Array:void 0;Re=function(){var r,t,e;if("function"!=typeof Ze)return!1;try{t=new Ze([1,3.14,-3.14,NaN]),e=t,r=(Ge&&e instanceof Float64Array||"[object Float64Array]"===Pe(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?We:function(){throw new Error("not implemented")};var Me=!0===Ee?1:0,Xe=new Re(1),ze=new Le(Xe.buffer),Ye=Number.NEGATIVE_INFINITY,qe=.6931471803691238,De=1.9082149292705877e-10,He=1048575;function Je(r){var t,e,n,o,i,a,c,u,f,l,s,p;return 0===r?Ye:function(r){return r!=r}(r)||r<0?NaN:(i=0,(e=Fe(r))<1048576&&(i-=54,e=Fe(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(u=614244+(e&=He)&1048576|0)>>20|0,c=(r=function(r,t){return Xe[0]=r,ze[Me]=t>>>0,Xe[0]}(r,e|1072693248^u))-1,(He&2+e)<3?0===c?0===i?0:i*qe+i*De:(a=c*c*(.5-.3333333333333333*c),0===i?c-a:i*qe-(a-i*De-c)):(u=e-398458|0,f=440401-e|0,o=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(u|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+a)):i*qe-(t-(l*(t+a)+i*De)-c)):0===i?c-l*(c-a):i*qe-(l*(c-a)-i*De-c))))}function Ke(r,t){return Je(r)/Je(t)}return function(r,t){return Yt(r,t,Ke)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog=t();
//# sourceMappingURL=browser.js.map
