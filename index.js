// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,g=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,g,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):s.call(e)}function N(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+N(e):N(e)+r}var U=String.fromCharCode,k=isNaN,E=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,t,e,o,a,c,s,l,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(e=r[l]))c+=e;else{if(n=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,k(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,k(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!k(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=k(a)?String(e.arg):U(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,t,e,i;for(t=[],i=0,e=j.exec(r);e;)(n=r.slice(i,j.lastIndex-e[0].length)).length&&t.push(n),t.push(F(e)),i=j.lastIndex,e=j.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){return"string"==typeof r}function x(r){var n,t,e;if(!T(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=I(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return S.apply(null,t)}var O=Object.prototype,V=O.toString,G=O.__defineGetter__,P=O.__defineSetter__,$=O.__lookupGetter__,W=O.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,n)||W.call(r,n)?(e=r.__proto__,r.__proto__=O,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,n,t.get),a&&P&&P.call(r,n,t.set),r};function M(r,n,t){H(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function C(r,n,t){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return r!=r}function R(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Z=R();function q(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y,X=Object.prototype.toString,z=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",J=q()?function(r){var n,t,e,i,o;if(null==r)return X.call(r);t=r[D],o=D,n=null!=(i=r)&&z.call(i,o);try{r[D]=void 0}catch(n){return X.call(r)}return e=X.call(r),n?r[D]=t:delete r[D],e}:function(r){return X.call(r)},K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,n,t;if("function"!=typeof Q)return!1;try{n=new Q(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr,tr=Y,er="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,or="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir([1,3.14,-3.14,NaN]),t=n,r=(er&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar,ur=nr,fr="function"==typeof Uint8Array,cr="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var r,n,t;if("function"!=typeof cr)return!1;try{n=new cr(n=[1,3.14,-3.14,256,257]),t=n,r=(fr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=ar,yr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(yr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,br={uint16:lr,uint8:pr};(hr=new br.uint16(1))[0]=4660;var gr=52===new br.uint8(hr.buffer)[0],wr=!0===gr?1:0,mr=new ur(1),Nr=new tr(mr.buffer);function Ar(r){return mr[0]=r,Nr[wr]}var Ur,kr,Er=!0===gr?1:0,_r=new ur(1),Sr=new tr(_r.buffer);function jr(r,n){return _r[0]=r,Sr[Er]=n>>>0,_r[0]}!0===gr?(Ur=1,kr=0):(Ur=0,kr=1);var Fr={HIGH:Ur,LOW:kr},Ir=new ur(1),Tr=new tr(Ir.buffer),xr=Fr.HIGH,Or=Fr.LOW;function Vr(r,n){return Tr[xr]=r,Tr[Or]=n,Ir[0]}var Gr=Number.POSITIVE_INFINITY,Pr=Number,$r=Pr.NEGATIVE_INFINITY,Wr=1023,Hr=.6931471803691238,Mr=1.9082149292705877e-10,Cr=1.4426950408889634;function Lr(r){var n,t,e,i,o,a,u,f,c,s,l,p,y;if(r===Gr||L(r))return r;if(r===$r)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=38.816242111356935){if(e)return-1;if(f>=709.782712893384)return Gr}if(a=0|Ar(f),f>.34657359027997264)f<1.0397207708399179?e?(i=r+Hr,o=-Mr,y=-1):(i=r-Hr,o=Mr,y=1):(y=e?Cr*r-.5:Cr*r+.5,i=r-(l=y|=0)*Hr,o=l*Mr),s=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*n))/(6-r*l)),0===y?r-(r*p-c):(t=Vr(Wr+y<<20,0),p=r*(p-s)-s,p-=c,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(f=1-(p-r),1024===y?f=jr(f,i=Ar(f)+(y<<20)|0):f*=t,f-1):(l=1,y<20?f=(l=jr(l,i=1072693248-(2097152>>y)|0))-(p-r):(f=r-(p+(l=jr(l,i=Wr-y<<20|0))),f+=1),f*=t))}var Rr=Math.floor;function Zr(r){return Rr(r)===r}function qr(r){return Zr(r/2)}function Yr(r){return qr(r>0?r-1:r+1)}function Xr(r){return r===Gr||r===$r}var zr,Br,Dr=Math.sqrt;function Jr(r){return Math.abs(r)}!0===gr?(zr=1,Br=0):(zr=0,Br=1);var Kr={HIGH:zr,LOW:Br},Qr=new ur(1),rn=new tr(Qr.buffer),nn=Kr.HIGH,tn=Kr.LOW;function en(r,n,t,e){return Qr[0]=r,n[e]=rn[nn],n[e+t]=rn[tn],n}function on(r){return en(r,[0,0],1,0)}C(on,"assign",en);var an=!0===gr?0:1,un=new ur(1),fn=new tr(un.buffer);function cn(r,n){return un[0]=r,fn[an]=n>>>0,un[0]}function sn(r){return 0|r}var ln=2147483647,pn=[0,0];function yn(r,n){var t,e;return on.assign(r,pn,1,0),t=pn[0],t&=ln,e=Ar(n),Vr(t|=e&=2147483648,pn[1])}var vn=1048576,dn=[1,1.5],hn=[0,.5849624872207642],bn=[0,1.350039202129749e-8];function gn(r,n,t,e){return L(r)||Xr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Jr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}C((function(r){return gn(r,[0,0],1,0)}),"assign",gn);var wn=2146435072,mn=[0,0],Nn=[0,0];function An(r,n){var t,e;return 0===n||0===r||L(r)||Xr(r)?r:(gn(r,mn,1,0),n+=mn[1],n+=function(r){var n=Ar(r);return(n=(n&wn)>>>20)-Wr|0}(r=mn[0]),n<-1074?yn(0,r):n>1023?r<0?$r:Gr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,on.assign(r,Nn,1,0),t=Nn[0],t&=2148532223,e*Vr(t|=n+Wr<<20,Nn[1])))}var Un=.6931471805599453,kn=1048575,En=1048576,_n=1083179008,Sn=1e300,jn=1e-300,Fn=[0,0],In=[0,0];function Tn(r,n){var t,e,i,o,a,u,f,c,s,l,p,y,v,d;if(L(r)||L(n))return NaN;if(on.assign(n,Fn,1,0),a=Fn[0],0===Fn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dr(r);if(-.5===n)return 1/Dr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Xr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Jr(r)<1==(n===Gr)?0:Gr}(r,n)}if(on.assign(r,Fn,1,0),o=Fn[0],0===Fn[1]){if(0===o)return function(r,n){return n===$r?Gr:n===Gr?0:n>0?Yr(n)?r:0:Yr(n)?yn(Gr,r):Gr}(r,n);if(1===r)return 1;if(-1===r&&Yr(n))return-1;if(Xr(r))return r===$r?Tn(-0,-n):n<0?0:Gr}if(r<0&&!1===Zr(n))return(r-r)/(r-r);if(i=Jr(r),t=o&ln|0,e=a&ln|0,f=a>>>31|0,u=(u=o>>>31|0)&&Yr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Ar(r)&ln)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Sn*Sn:u*jn*jn;if(t>1072693248)return 0===f?u*Sn*Sn:u*jn*jn;p=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=cn(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(In,i)}else p=function(r,n,t){var e,i,o,a,u,f,c,s,l,p,y,v,d,h,b,g,w,m,N,A,U;return m=0,t<vn&&(m-=53,t=Ar(n*=9007199254740992)),m+=(t>>20)-Wr|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=vn),a=cn(i=(g=(n=jr(n,t))-(c=dn[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=jr(0,e+=A<<18),b=(o=i*i)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),f=cn(f=3+(o=a*a)+(b+=(u=w*(g-a*f-a*(n-(f-c))))*(a+i)),0),d=(y=-7.028461650952758e-9*(l=cn(l=(g=a*f)+(w=u*f+(b-(f-3-o))*i),0))+.9617966939259756*(w-(l-g))+bn[A])-((v=cn(v=(p=.9617967009544373*l)+y+(s=hn[A])+(h=m),0))-h-s-p),r[0]=v,r[1]=d,r}(In,i,t);if(y=(l=(n-(c=cn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),on.assign(y,Fn,1,0),v=sn(Fn[0]),d=sn(Fn[1]),v>=_n){if(0!=(v-_n|d))return u*Sn*Sn;if(l+8008566259537294e-32>y-s)return u*Sn*Sn}else if((v&ln)>=1083231232){if(0!=(v-3230714880|d))return u*jn*jn;if(l<=y-s)return u*jn*jn}return y=function(r,n,t){var e,i,o,a,u,f,c,s,l,p;return l=((s=r&ln|0)>>20)-Wr|0,c=0,s>1071644672&&(i=jr(0,((c=r+(En>>l+1)>>>0)&~(kn>>(l=((c&ln)>>20)-Wr|0)))>>>0),c=(c&kn|En)>>20-l>>>0,r<0&&(c=-c),n-=i),r=sn(r=Ar(f=1-((f=(o=.6931471824645996*(i=cn(i=t+n,0)))+(a=(t-(i-n))*Un+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?An(f,c):jr(f,r)}(v,s,l),u*y}function xn(r,n,t){return L(r)||L(n)||L(t)||n<=0||t<=0?NaN:r<0?0:-Lr(-Tn(r/t,n))}function On(r){return function(){return r}}function Vn(r,n,t){H(r,n,{configurable:!1,enumerable:!1,get:t})}function Gn(r){return"number"==typeof r}C(xn,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?On(NaN):function(t){return L(t)?NaN:t<0?0:-Lr(-Tn(t/n,r))}}));var Pn=Pr.prototype.toString,$n=q();function Wn(r){return"object"==typeof r&&(r instanceof Pr||($n?function(r){try{return Pn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Hn(r){return Gn(r)||Wn(r)}function Mn(r){return Gn(r)&&r>0}function Cn(r){return Wn(r)&&r.valueOf()>0}function Ln(r){return Mn(r)||Cn(r)}C(Hn,"isPrimitive",Gn),C(Hn,"isObject",Wn),C(Ln,"isPrimitive",Mn),C(Ln,"isObject",Cn);var Rn,Zn=R(),qn=Object.prototype.toString,Yn=Object.prototype.hasOwnProperty,Xn="function"==typeof Symbol?Symbol.toStringTag:"",zn=Zn&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,o;if(null==r)return qn.call(r);t=r[Xn],o=Xn,n=null!=(i=r)&&Yn.call(i,o);try{r[Xn]=void 0}catch(n){return qn.call(r)}return e=qn.call(r),n?r[Xn]=t:delete r[Xn],e}:function(r){return qn.call(r)},Bn="function"==typeof Uint32Array,Dn="function"==typeof Uint32Array?Uint32Array:null,Jn="function"==typeof Uint32Array?Uint32Array:void 0;Rn=function(){var r,n,t;if("function"!=typeof Dn)return!1;try{n=new Dn(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Bn&&t instanceof Uint32Array||"[object Uint32Array]"===zn(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Jn:function(){throw new Error("not implemented")};var Kn,Qn=Rn,rt="function"==typeof Float64Array,nt="function"==typeof Float64Array?Float64Array:null,tt="function"==typeof Float64Array?Float64Array:void 0;Kn=function(){var r,n,t;if("function"!=typeof nt)return!1;try{n=new nt([1,3.14,-3.14,NaN]),t=n,r=(rt&&t instanceof Float64Array||"[object Float64Array]"===zn(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?tt:function(){throw new Error("not implemented")};var et,it=Kn,ot="function"==typeof Uint8Array,at="function"==typeof Uint8Array?Uint8Array:null,ut="function"==typeof Uint8Array?Uint8Array:void 0;et=function(){var r,n,t;if("function"!=typeof at)return!1;try{n=new at(n=[1,3.14,-3.14,256,257]),t=n,r=(ot&&t instanceof Uint8Array||"[object Uint8Array]"===zn(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ut:function(){throw new Error("not implemented")};var ft,ct=et,st="function"==typeof Uint16Array,lt="function"==typeof Uint16Array?Uint16Array:null,pt="function"==typeof Uint16Array?Uint16Array:void 0;ft=function(){var r,n,t;if("function"!=typeof lt)return!1;try{n=new lt(n=[1,3.14,-3.14,65536,65537]),t=n,r=(st&&t instanceof Uint16Array||"[object Uint16Array]"===zn(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var yt,vt={uint16:ft,uint8:ct};yt=function(){var r;return(r=new vt.uint16(1))[0]=4660,52===new vt.uint8(r.buffer)[0]}();var dt=yt,ht=!0===dt?1:0,bt=new it(1),gt=new Qn(bt.buffer);function wt(r){return bt[0]=r,gt[ht]}var mt=!0===dt?1:0,Nt=new it(1),At=new Qn(Nt.buffer),Ut=Number.NEGATIVE_INFINITY,kt=.6931471803691238,Et=1.9082149292705877e-10,_t=1048575;function St(r){var n,t,e,i,o,a,u,f,c,s,l,p;return 0===r?Ut:function(r){return r!=r}(r)||r<0?NaN:(o=0,(t=wt(r))<1048576&&(o-=54,t=wt(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=_t)&1048576|0)>>20|0,u=(r=function(r,n){return Nt[0]=r,At[mt]=n>>>0,Nt[0]}(r,t|1072693248^f))-1,(_t&2+t)<3?0===u?0===o?0:o*kt+o*Et:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*kt-(a-o*Et-u)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*kt-(n-(s*(n+a)+o*Et)-u)):0===o?u-s*(u-a):o*kt-(s*(u-a)-o*Et-u))))}var jt=.5772156649015329;function Ft(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:jt*(1-1/r)+St(n/r)+1}function It(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var Tt=-.16666666666666632;function xt(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(Tt+i*t):r-(i*(.5*n-e*t)-n-e*Tt)}var Ot=!0===gr?0:1,Vt=new ur(1),Gt=new tr(Vt.buffer);function Pt(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var $t=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Wt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ht=16777216,Mt=5.960464477539063e-8,Ct=Pt(20),Lt=Pt(20),Rt=Pt(20),Zt=Pt(20);function qt(r,n,t,e,i,o,a,u,f){var c,s,l,p,y,v,d,h,b;for(p=o,b=e[t],h=t,y=0;h>0;y++)s=Mt*b|0,Zt[y]=b-Ht*s|0,b=e[h-1]+s,h-=1;if(b=An(b,i),b-=8*Rr(.125*b),b-=d=0|b,l=0,i>0?(d+=y=Zt[t-1]>>24-i,Zt[t-1]-=y<<24-i,l=Zt[t-1]>>23-i):0===i?l=Zt[t-1]>>23:b>=.5&&(l=2),l>0){for(d+=1,c=0,y=0;y<t;y++)h=Zt[y],0===c?0!==h&&(c=1,Zt[y]=16777216-h):Zt[y]=16777215-h;if(i>0)switch(i){case 1:Zt[t-1]&=8388607;break;case 2:Zt[t-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=An(1,i)))}if(0===b){for(h=0,y=t-1;y>=o;y--)h|=Zt[y];if(0===h){for(v=1;0===Zt[o-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=$t[a+y],s=0,h=0;h<=u;h++)s+=r[h]*f[u+(y-h)];e[y]=s}return qt(r,n,t+=v,e,i,o,a,u,f)}}if(0===b)for(t-=1,i-=24;0===Zt[t];)t-=1,i-=24;else(b=An(b,-i))>=Ht?(s=Mt*b|0,Zt[t]=b-Ht*s|0,i+=24,Zt[t+=1]=s):Zt[t]=0|b;for(s=An(1,i),y=t;y>=0;y--)e[y]=s*Zt[y],s*=Mt;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=Wt[v]*e[y+v];Rt[t-y]=s}for(s=0,y=t;y>=0;y--)s+=Rt[y];for(n[0]=0===l?s:-s,s=Rt[0]-s,y=1;y<=t;y++)s+=Rt[y];return n[1]=0===l?s:-s,7&d}function Yt(r,n,t,e){var i,o,a,u,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=e-1),s=a+4,f=0;f<=s;f++)Ct[f]=c<0?0:$t[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Ct[a+(f-c)];Lt[f]=i}return qt(r,n,4,Lt,u,4,o,a,Ct)}var Xt=Math.round;function zt(r,n,t){var e,i,o,a,u;return o=r-1.5707963267341256*(e=Xt(.6366197723675814*r)),a=6077100506506192e-26*e,u=n>>20|0,t[0]=o-a,u-(Ar(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((i=o)-(o=i-(a=6077100506303966e-26*e))-a),t[0]=o-a,u-(Ar(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((i=o)-(o=i-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var Bt=1.5707963267341256,Dt=6077100506506192e-26,Jt=2*Dt,Kt=3*Dt,Qt=4*Dt,re=[0,0,0],ne=[0,0];function te(r,n){var t,e,i,o,a,u,f;if((i=Ar(r)&ln|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&kn)?zt(r,i,n):i<=1073928572?r>0?(f=r-Bt,n[0]=f-Dt,n[1]=f-n[0]-Dt,1):(f=r+Bt,n[0]=f+Dt,n[1]=f-n[0]+Dt,-1):r>0?(f=r-2*Bt,n[0]=f-Jt,n[1]=f-n[0]-Jt,2):(f=r+2*Bt,n[0]=f+Jt,n[1]=f-n[0]+Jt,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?zt(r,i,n):r>0?(f=r-3*Bt,n[0]=f-Kt,n[1]=f-n[0]-Kt,3):(f=r+3*Bt,n[0]=f+Kt,n[1]=f-n[0]+Kt,-3):1075388923===i?zt(r,i,n):r>0?(f=r-4*Bt,n[0]=f-Qt,n[1]=f-n[0]-Qt,4):(f=r+4*Bt,n[0]=f+Qt,n[1]=f-n[0]+Qt,-4);if(i<1094263291)return zt(r,i,n);if(i>=wn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Vt[0]=r,Gt[Ot]}(r),f=Vr(i-((e=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)re[a]=0|f,f=16777216*(f-re[a]);for(re[2]=f,o=3;0===re[o-1];)o-=1;return u=Yt(re,ne,e,o),r<0?(n[0]=-ne[0],n[1]=-ne[1],-u):(n[0]=ne[0],n[1]=ne[1],u)}var ee=[0,0],ie=3.141592653589793,oe=Math.ceil;function ae(r){return r<0?oe(r):Rr(r)}var ue=1.4426950408889634,fe=1/(1<<28);function ce(r){var n;return L(r)||r===Gr?r:r===$r?0:r>709.782712893384?Gr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<fe?1+r:function(r,n,t){var e,i,o,a;return An(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=ae(r<0?ue*r-.5:ue*r+.5)),1.9082149292705877e-10*n,n)}function se(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=ce(r),2.5066282746310007*(t=r>143.01608?(e=Tn(r,.5*r-.25))*(e/t):Tn(r,r-.5)/t)*n}function le(r,n){return n/((1+jt*r)*r)}function pe(r){var n,t,e,i;if(Zr(r)&&r<0||r===$r||L(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===$r}(r)?$r:Gr;if(r>171.61447887182297)return Gr;if(r<-170.5674972726612)return 0;if((t=Jr(r))>33)return r>=0?se(r):(n=0==(1&(e=Rr(t)))?-1:1,(i=t-e)>.5&&(i=t-(e+=1)),i=t*function(r){var n;if(n=Ar(r),(n&=ln)<=1072243195)return n<1045430272?r:xt(r,0);if(n>=wn)return NaN;switch(3&te(r,ee)){case 0:return xt(ee[0],ee[1]);case 1:return It(ee[0],ee[1]);case 2:return-xt(ee[0],ee[1]);default:return-It(ee[0],ee[1])}}(ie*i),n*ie/(Jr(i)*se(t)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return le(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return le(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function ye(r,n){var t,e,i,o,a;return L(r)||L(n)||r<=0||n<=0?NaN:(a=pe(1+1/r),o=pe(1+2/r),i=pe(1+3/r),e=pe(1+4/r),t=-6*Tn(a,4)+12*a*a*o-3*o*o-4*a*i+e,t/=Tn(o-a*a,2))}function ve(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:n*pe(1+1/r)}function de(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:n*Tn(Un,1/r)}function he(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:r<=1?0:n*Tn((r-1)/r,1/r)}function be(r,n){var t;return L(r)||L(n)||r<=0||n<=0?NaN:(t=ve(r,n),n*n*pe(1+2/r)-t*t)}function ge(r,n){var t,e,i,o;return L(r)||L(n)||r<=0||n<=0?NaN:(o=ve(r,n),t=be(r,n),e=Dr(t),i=pe(1+3/r)*Tn(n,3),i-=3*o*t+Tn(o,3),i/=Tn(e,3))}function we(r,n){var t;return L(r)||L(n)||r<=0||n<=0?NaN:(t=pe(1+1/r),n*Dr(pe(1+2/r)-t*t))}var me=.6931471803691238,Ne=1.9082149292705877e-10;function Ae(r){var n,t,e,i,o,a,u,f,c,s;if(r<-1||L(r))return NaN;if(-1===r)return $r;if(r===Gr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(o=(s=((t=Ar(c=1+r))>>20)-Wr)>0?1-(c-r):r-(c-1),o/=c):(s=((t=Ar(c=r))>>20)-Wr,o=0),(t&=1048575)<434334?c=jr(c,1072693248|t):(s+=1,c=jr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*me+(o+=s*Ne):s*me-((f=n*(1-.6666666666666666*i))-(s*Ne+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-a*(n+f)):s*me-(n-(a*(n+f)+(s*Ne+o))-i))}var Ue=.6931471803691238,ke=1.9082149292705877e-10,Ee=1048575;function _e(r){var n,t,e,i,o,a,u,f,c,s,l,p;return 0===r?$r:L(r)||r<0?NaN:(o=0,(t=Ar(r))<1048576&&(o-=54,t=Ar(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-Wr|0,o+=(f=614244+(t&=Ee)&1048576|0)>>20|0,u=(r=jr(r,t|1072693248^f))-1,(Ee&2+t)<3?0===u?0===o?0:o*Ue+o*ke:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Ue-(a-o*ke-u)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Ue-(n-(s*(n+a)+o*ke)-u)):0===o?u-s*(u-a):o*Ue-(s*(u-a)-o*ke-u))))}var Se=-.6931471805599453;function je(r,n,t){var e;return L(n)||L(t)||n<=0||t<=0?NaN:r<0?$r:(e=-Tn(r/t,n))<Se?Ae(-ce(e)):_e(-Lr(e))}function Fe(r,n,t){var e;return L(n)||L(t)||n<=0||t<=0?NaN:r<0||r===Gr||r===$r?$r:0===r?1===n?_e(n/t):$r:(e=r/t,_e(n/t)+(n-1)*_e(e)-Tn(e,n))}C(je,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?On(NaN):function(t){var e;return L(t)?NaN:t<0?$r:(e=-Tn(t/n,r))<Se?Ae(-ce(e)):_e(-Lr(e))}})),C(Fe,"factory",(function(r,n){var t;return L(r)||L(n)||r<=0||n<=0?On(NaN):(t=_e(r/n),function(e){var i;return e<0||e===Gr||e===$r?$r:0===e?1===r?_e(r/n):$r:t+(r-1)*_e(i=e/n)-Tn(i,r)})}));var Ie=2220446049250313e-31;function Te(r,n,t){var e,i,o,a;if(L(r)||L(n)||L(t)||n<=0||t<=0)return NaN;i=1,o=1,a=0;do{i+=e=0==(o*=r*t/(a+=1))?0:o*pe(1+a/n)}while(e/i>Ie);return i}function xe(r,n,t){var e;return L(n)||L(t)||n<=0||t<=0?NaN:r<0||r===Gr||r===$r?0:0===r?1===n?n/t:0:n/t*Tn(e=r/t,n-1)*ce(-Tn(e,n))}function Oe(r,n,t){return L(n)||L(t)||L(r)||n<=0||t<=0||r<0||r>1?NaN:t*Tn(-_e(1-r),1/n)}function Ve(){var r,n;if(!(this instanceof Ve))return 0===arguments.length?new Ve:new Ve(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Mn(n=arguments[0]))throw new TypeError(x("invalid argument. Shape parameter must be a positive number. Value: `%s`.",n));if(!Mn(r))throw new TypeError(x("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=1,r=1;return H(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Mn(r))throw new TypeError(x("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),H(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Mn(n))throw new TypeError(x("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}C(Te,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?On(NaN):function(t){var e,i,o,a;if(L(t))return NaN;i=1,o=1,a=0;do{e=0==(o*=t*n/(a+=1))?0:o*pe(1+a/r),i+=e}while(e/i>Ie);return i}})),C(xe,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?On(NaN):function(t){var e,i;return t<0||t===Gr||t===$r?0:0===t?1===r?r/n:0:(i=Tn(e=t/n,r-1),r/n*i*ce(-Tn(e,r)))}})),C(Oe,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?On(NaN):function(t){return L(t)||t<0||t>1?NaN:n*Tn(-_e(1-t),1/r)}})),Vn(Ve.prototype,"entropy",(function(){return Ft(this.k,this.lambda)})),Vn(Ve.prototype,"kurtosis",(function(){return ye(this.k,this.lambda)})),Vn(Ve.prototype,"mean",(function(){return ve(this.k,this.lambda)})),Vn(Ve.prototype,"median",(function(){return de(this.k,this.lambda)})),Vn(Ve.prototype,"mode",(function(){return he(this.k,this.lambda)})),Vn(Ve.prototype,"skewness",(function(){return ge(this.k,this.lambda)})),Vn(Ve.prototype,"stdev",(function(){return we(this.k,this.lambda)})),Vn(Ve.prototype,"variance",(function(){return be(this.k,this.lambda)})),C(Ve.prototype,"cdf",(function(r){return xn(r,this.k,this.lambda)})),C(Ve.prototype,"logcdf",(function(r){return je(r,this.k,this.lambda)})),C(Ve.prototype,"logpdf",(function(r){return Fe(r,this.k,this.lambda)})),C(Ve.prototype,"mgf",(function(r){return Te(r,this.k,this.lambda)})),C(Ve.prototype,"pdf",(function(r){return xe(r,this.k,this.lambda)})),C(Ve.prototype,"quantile",(function(r){return Oe(r,this.k,this.lambda)}));var Ge={};return M(Ge,"cdf",xn),M(Ge,"Weibull",Ve),M(Ge,"entropy",Ft),M(Ge,"kurtosis",ye),M(Ge,"logcdf",je),M(Ge,"logpdf",Fe),M(Ge,"mean",ve),M(Ge,"median",de),M(Ge,"mgf",Te),M(Ge,"mode",he),M(Ge,"pdf",xe),M(Ge,"quantile",Oe),M(Ge,"skewness",ge),M(Ge,"stdev",we),M(Ge,"variance",be),Ge},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).weibull=n();
//# sourceMappingURL=index.js.map
