// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r},y=e,p=l,v=n()?y:p;var b=function(r,t,n){v(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,A=_;var h=function(r){return A.call(r)},g=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&g.call(r,t)},U="function"==typeof Symbol?Symbol.toStringTag:"",E=O,S=U,P=_;var F=h,N=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=E(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},T=j()?N:F,x=Boolean.prototype.toString;var V=T,B=function(r){try{return x.call(r),!0}catch(r){return!1}},k=j();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(k?B(r):"[object Boolean]"===V(r)))},I=m,M=G;var C=s,L=function(r){return I(r)||M(r)},R=G;C(L,"isPrimitive",m),C(L,"isObject",R);var X=L;var z=function(){return new Function("return this;")()},D="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},H="object"==typeof q?q:null;module.exports=H;var J=X.isPrimitive,K=z,Q=D,W=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!J(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return K()}if(Q)return Q;if(W)return W;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=T;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},pr=yr;var vr=function(r){return null!==r&&"object"==typeof r};s(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!pr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vr));var br=vr;var sr=T,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var Ar=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},hr=function(r){return _r(r).toLowerCase()},gr=ir()?hr:Ar;var Or=function(r){return"function"===gr(r)},Ur=Or;var Er=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Ur(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Fr=Pr.prototype.toString;var Nr=T,Tr=Pr,xr=function(r){try{return Fr.call(r),!0}catch(r){return!1}},Vr=j();var Br=function(r){return"object"==typeof r&&(r instanceof Tr||(Vr?xr(r):"[object Number]"===Nr(r)))},kr=Sr,Gr=Br;var Ir=s,Mr=function(r){return kr(r)||Gr(r)},Cr=Br;Ir(Mr,"isPrimitive",Sr),Ir(Mr,"isObject",Cr);var Lr=Mr,Rr=O;var Xr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Rr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,zr=yr;var Dr=function(r){return"object"==typeof r&&null!==r&&!zr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},Hr=T,Jr=qr;var Kr=function(r){var t=Jr(r);return t||null===t?t:"[object Function]"===Hr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Qr=Yr,Wr=Kr,Zr=Or(Object.getPrototypeOf)?Qr:Wr;var $r=Dr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=T,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Er,yt=Lr.isPrimitive,pt=Xr,vt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e,o){var u,i,a,f,c,l,y,p,v;for(f=2,i=[0,0],u=[],a=[],v=0;v<f;v++)if(u.push(arguments[v]),lt(arguments[v]))a.push(1);else{if(!yt(arguments[v]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+v+"`. Value: `"+arguments[v]+"`.");a.push(0)}if(!ct(e))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+e+"`.");if(l={invalid:NaN},arguments.length>3&&(p=vt(l,o)))throw p;if(ft(c={},"next",b),ft(c,"return",s),pt){for(v=0;v<f;v++)if(a[v]&&!ct(u[v][pt])){y=!0;break}y||ft(c,pt,d)}return y=!1,c;function b(){var r,t,n;if(y)return{done:!0};for(n=0;n<f;n++)if(a[n]){if((t=u[n].next()).done)return y=!0,t;"number"==typeof t.value?i[n]=t.value:r=!0}else i[n]=u[n];return r?{value:l.invalid,done:!1}:{value:e(i[0],i[1]),done:!1}}function s(r){return y=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var t,n;for(t=[],n=0;n<f;n++)a[n]?t.push(u[n][pt]()):t.push(u[n]);return t.push(e,l),r.apply(null,t)}},st=bt,dt=T,mt="function"==typeof Uint32Array;var wt="function"==typeof Uint32Array?Uint32Array:null,jt=function(r){return mt&&r instanceof Uint32Array||"[object Uint32Array]"===dt(r)},_t=wt;var At=function(){var r,t;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),r=jt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ht="function"==typeof Uint32Array?Uint32Array:void 0,gt=function(){throw new Error("not implemented")},Ot=At()?ht:gt,Ut=T,Et="function"==typeof Float64Array;var St="function"==typeof Float64Array?Float64Array:null,Pt=function(r){return Et&&r instanceof Float64Array||"[object Float64Array]"===Ut(r)},Ft=St;var Nt=function(){var r,t;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),r=Pt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Tt="function"==typeof Float64Array?Float64Array:void 0,xt=function(){throw new Error("not implemented")},Vt=Nt()?Tt:xt,Bt=T,kt="function"==typeof Uint8Array;var Gt="function"==typeof Uint8Array?Uint8Array:null,It=function(r){return kt&&r instanceof Uint8Array||"[object Uint8Array]"===Bt(r)},Mt=Gt;var Ct=function(){var r,t;if("function"!=typeof Mt)return!1;try{t=new Mt(t=[1,3.14,-3.14,256,257]),r=It(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Lt="function"==typeof Uint8Array?Uint8Array:void 0,Rt=function(){throw new Error("not implemented")},Xt=Ct()?Lt:Rt,zt=T,Dt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null,qt=function(r){return Dt&&r instanceof Uint16Array||"[object Uint16Array]"===zt(r)},Ht=Yt;var Jt=function(){var r,t;if("function"!=typeof Ht)return!1;try{t=new Ht(t=[1,3.14,-3.14,65536,65537]),r=qt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Kt,Qt="function"==typeof Uint16Array?Uint16Array:void 0,Wt=function(){throw new Error("not implemented")},Zt={uint16:Jt()?Qt:Wt,uint8:Xt};(Kt=new Zt.uint16(1))[0]=4660;var $t=52===new Zt.uint8(Kt.buffer)[0],rn=Ot,tn=!0===$t?1:0,nn=new Vt(1),en=new rn(nn.buffer);var on=function(r){return nn[0]=r,en[tn]},un=Ot,an=!0===$t?1:0,fn=new Vt(1),cn=new un(fn.buffer);var ln=function(r,t){return fn[0]=r,cn[an]=t>>>0,fn[0]},yn=ln;var pn=function(r){return r!=r},vn=Pr.NEGATIVE_INFINITY;var bn=on,sn=yn,dn=pn,mn=vn,wn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},jn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},_n=.6931471803691238,An=1.9082149292705877e-10;var hn=function(r){var t,n,e,o,u,i,a,f,c,l,y;return 0===r?mn:dn(r)||r<0?NaN:(o=0,(n=bn(r))<1048576&&(o-=54,n=bn(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(a=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=sn(r,n|1072693248^a))-1,(1048575&2+n)<3?0===i?0===o?0:o*_n+o*An:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*_n-(u-o*An-i)):(a=n-398458|0,f=440401-n|0,e=(l=(y=(c=i/(2+i))*c)*y)*wn(l),u=y*jn(l)+e,(a|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+u)):o*_n-(t-(c*(t+u)+o*An)-i)):0===o?i-c*(i-u):o*_n-(c*(i-u)-o*An-i))))},gn=hn;var On=function(r,t){return gn(r)/gn(t)};function Un(r,t){return st(r,t,On)}export{Un as default};
//# sourceMappingURL=mod.js.map
