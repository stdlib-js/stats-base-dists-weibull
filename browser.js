// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,b,"e"),t=p.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function k(r,n,e){var t=n-r.length;return t<0?r:r=e?r+N(t):N(t)+r}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,e,t,a,o,c,s,l,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(n=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,_(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,e,t,i;for(e=[],i=0,t=j.exec(r);t;)(n=r.slice(i,j.lastIndex-t[0].length)).length&&e.push(n),e.push(I(t)),i=j.lastIndex,t=j.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function T(r){return"string"==typeof r}function F(r){var n,e,t;if(!T(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=x(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return U.apply(null,e)}var V=Object.prototype,O=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,P=V.__lookupGetter__,W=V.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(P.call(r,n)||W.call(r,n)?(t=r.__proto__,r.__proto__=V,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,n,e.get),o&&G&&G.call(r,n,e.set),r};function M(r,n,e){H(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function C(r,n,e){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function L(r){return r!=r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q,X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"",D=Z()?function(r){var n,e,t,i,a;if(null==r)return X.call(r);e=r[B],a=B,n=null!=(i=r)&&Y.call(i,a);try{r[B]=void 0}catch(n){return X.call(r)}return t=X.call(r),n?r[B]=e:delete r[B],t}:function(r){return X.call(r)},J="function"==typeof Uint32Array,K="function"==typeof Uint32Array?Uint32Array:null,Q="function"==typeof Uint32Array?Uint32Array:void 0;q=function(){var r,n,e;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(J&&e instanceof Uint32Array||"[object Uint32Array]"===D(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,nr=q,er="function"==typeof Float64Array,tr="function"==typeof Float64Array?Float64Array:null,ir="function"==typeof Float64Array?Float64Array:void 0;rr=function(){var r,n,e;if("function"!=typeof tr)return!1;try{n=new tr([1,3.14,-3.14,NaN]),e=n,r=(er&&e instanceof Float64Array||"[object Float64Array]"===D(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=rr,ur="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,cr="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var r,n,e;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,256,257]),e=n,r=(ur&&e instanceof Uint8Array||"[object Uint8Array]"===D(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,lr=ar,pr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,yr="function"==typeof Uint16Array?Uint16Array:void 0;sr=function(){var r,n,e;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(pr&&e instanceof Uint16Array||"[object Uint16Array]"===D(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,hr={uint16:sr,uint8:lr};(dr=new hr.uint16(1))[0]=4660;var gr=52===new hr.uint8(dr.buffer)[0],br=!0===gr?1:0,wr=new or(1),mr=new nr(wr.buffer);function Nr(r){return wr[0]=r,mr[br]}var kr,Ar,_r=!0===gr?1:0,Er=new or(1),Sr=new nr(Er.buffer);function Ur(r,n){return Er[0]=r,Sr[_r]=n>>>0,Er[0]}!0===gr?(kr=1,Ar=0):(kr=0,Ar=1);var jr={HIGH:kr,LOW:Ar},Ir=new or(1),xr=new nr(Ir.buffer),Tr=jr.HIGH,Fr=jr.LOW;function Vr(r,n){return xr[Tr]=r,xr[Fr]=n,Ir[0]}var Or=Number.POSITIVE_INFINITY,$r=Number,Gr=$r.NEGATIVE_INFINITY,Pr=1023,Wr=.6931471803691238,Hr=1.9082149292705877e-10,Mr=1.4426950408889634;function Cr(r){var n,e,t,i,a,o,u,f,c,s,l,p,v;if(r===Or||L(r))return r;if(r===Gr)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return Or}if(o=0|Nr(f),f>.34657359027997264)f<1.0397207708399179?t?(i=r+Wr,a=-Hr,v=-1):(i=r-Wr,a=Hr,v=1):(v=t?Mr*r-.5:Mr*r+.5,i=r-(l=v|=0)*Wr,a=l*Hr),s=i-(r=i-a)-a;else{if(o<1016070144)return r;v=0}return u=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*n))/(6-r*l)),0===v?r-(r*p-c):(e=Vr(Pr+v<<20,0),p=r*(p-s)-s,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=Ur(f,i=Nr(f)+(v<<20)|0):f*=e,f-1):(l=1,v<20?f=(l=Ur(l,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(l=Ur(l,i=Pr-v<<20|0))),f+=1),f*=e))}var Lr=Math.floor;function Rr(r){return Lr(r)===r}function Zr(r){return Rr(r/2)}function qr(r){return Zr(r>0?r-1:r+1)}function Xr(r){return r===Or||r===Gr}var Yr,zr,Br=Math.sqrt;function Dr(r){return Math.abs(r)}!0===gr?(Yr=1,zr=0):(Yr=0,zr=1);var Jr={HIGH:Yr,LOW:zr},Kr=new or(1),Qr=new nr(Kr.buffer),rn=Jr.HIGH,nn=Jr.LOW;function en(r,n,e,t){return Kr[0]=r,n[t]=Qr[rn],n[t+e]=Qr[nn],n}function tn(r){return en(r,[0,0],1,0)}C(tn,"assign",en);var an=!0===gr?0:1,on=new or(1),un=new nr(on.buffer);function fn(r,n){return on[0]=r,un[an]=n>>>0,on[0]}function cn(r){return 0|r}var sn=2147483647,ln=[0,0];function pn(r,n){var e,t;return tn.assign(r,ln,1,0),e=ln[0],e&=sn,t=Nr(n),Vr(e|=t&=2147483648,ln[1])}var vn=1048576,yn=[1,1.5],dn=[0,.5849624872207642],hn=[0,1.350039202129749e-8];function gn(r,n,e,t){return L(r)||Xr(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Dr(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}C((function(r){return gn(r,[0,0],1,0)}),"assign",gn);var bn=2146435072,wn=[0,0],mn=[0,0];function Nn(r,n){var e,t;return 0===n||0===r||L(r)||Xr(r)?r:(gn(r,wn,1,0),n+=wn[1],n+=function(r){var n=Nr(r);return(n=(n&bn)>>>20)-Pr|0}(r=wn[0]),n<-1074?pn(0,r):n>1023?r<0?Gr:Or:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,tn.assign(r,mn,1,0),e=mn[0],e&=2148532223,t*Vr(e|=n+Pr<<20,mn[1])))}var kn=.6931471805599453,An=1048575,_n=1048576,En=1083179008,Sn=1e300,Un=1e-300,jn=[0,0],In=[0,0];function xn(r,n){var e,t,i,a,o,u,f,c,s,l,p,v,y,d;if(L(r)||L(n))return NaN;if(tn.assign(n,jn,1,0),o=jn[0],0===jn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Br(r);if(-.5===n)return 1/Br(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Xr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Dr(r)<1==(n===Or)?0:Or}(r,n)}if(tn.assign(r,jn,1,0),a=jn[0],0===jn[1]){if(0===a)return function(r,n){return n===Gr?Or:n===Or?0:n>0?qr(n)?r:0:qr(n)?pn(Or,r):Or}(r,n);if(1===r)return 1;if(-1===r&&qr(n))return-1;if(Xr(r))return r===Gr?xn(-0,-n):n<0?0:Or}if(r<0&&!1===Rr(n))return(r-r)/(r-r);if(i=Dr(r),e=a&sn|0,t=o&sn|0,f=o>>>31|0,u=(u=a>>>31|0)&&qr(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(Nr(r)&sn)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*Sn*Sn:u*Un*Un;if(e>1072693248)return 0===f?u*Sn*Sn:u*Un*Un;p=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=fn(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(In,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,y,d,h,g,b,w,m,N,k,A;return m=0,e<vn&&(m-=53,e=Nr(n*=9007199254740992)),m+=(e>>20)-Pr|0,e=1072693248|(N=1048575&e|0),N<=235662?k=0:N<767610?k=1:(k=0,m+=1,e-=vn),o=fn(i=(b=(n=Ur(n,e))-(c=yn[k]))*(w=1/(n+c)),0),t=524288+(e>>1|536870912),f=Ur(0,t+=k<<18),g=(a=i*i)*a*(0===(A=a)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=fn(f=3+(a=o*o)+(g+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),d=(v=-7.028461650952758e-9*(l=fn(l=(b=o*f)+(w=u*f+(g-(f-3-a))*i),0))+.9617966939259756*(w-(l-b))+hn[k])-((y=fn(y=(p=.9617967009544373*l)+v+(s=dn[k])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(In,i,e);if(v=(l=(n-(c=fn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),tn.assign(v,jn,1,0),y=cn(jn[0]),d=cn(jn[1]),y>=En){if(0!=(y-En|d))return u*Sn*Sn;if(l+8008566259537294e-32>v-s)return u*Sn*Sn}else if((y&sn)>=1083231232){if(0!=(y-3230714880|d))return u*Un*Un;if(l<=v-s)return u*Un*Un}return v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&sn|0)>>20)-Pr|0,c=0,s>1071644672&&(i=Ur(0,((c=r+(_n>>l+1)>>>0)&~(An>>(l=((c&sn)>>20)-Pr|0)))>>>0),c=(c&An|_n)>>20-l>>>0,r<0&&(c=-c),n-=i),r=cn(r=Nr(f=1-((f=(a=.6931471824645996*(i=fn(i=e+n,0)))+(o=(e-(i-n))*kn+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Nn(f,c):Ur(f,r)}(y,s,l),u*v}function Tn(r,n,e){return L(r)||L(n)||L(e)||n<=0||e<=0?NaN:r<0?0:-Cr(-xn(r/e,n))}function Fn(r){return function(){return r}}function Vn(r,n,e){H(r,n,{configurable:!1,enumerable:!1,get:e})}function On(r){return"number"==typeof r}C(Tn,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?Fn(NaN):function(e){return L(e)?NaN:e<0?0:-Cr(-xn(e/n,r))}}));var $n=$r.prototype.toString,Gn=Z();function Pn(r){return"object"==typeof r&&(r instanceof $r||(Gn?function(r){try{return $n.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function Wn(r){return On(r)||Pn(r)}function Hn(r){return On(r)&&r>0}function Mn(r){return Pn(r)&&r.valueOf()>0}function Cn(r){return Hn(r)||Mn(r)}C(Wn,"isPrimitive",On),C(Wn,"isObject",Pn),C(Cn,"isPrimitive",Hn),C(Cn,"isObject",Mn);var Ln=.6931471803691238,Rn=1.9082149292705877e-10,Zn=1048575;function qn(r){var n,e,t,i,a,o,u,f,c,s,l,p;return 0===r?Gr:L(r)||r<0?NaN:(a=0,(e=Nr(r))<1048576&&(a-=54,e=Nr(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-Pr|0,a+=(f=614244+(e&=Zn)&1048576|0)>>20|0,u=(r=Ur(r,e|1072693248^f))-1,(Zn&2+e)<3?0===u?0===a?0:a*Ln+a*Rn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ln-(o-a*Rn-u)):(f=e-398458|0,c=440401-e|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Ln-(n-(s*(n+o)+a*Rn)-u)):0===a?u-s*(u-o):a*Ln-(s*(u-o)-a*Rn-u))))}var Xn=.5772156649015329;function Yn(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:Xn*(1-1/r)+qn(n/r)+1}function zn(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var Bn=-.16666666666666632;function Dn(r,n){var e,t,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===n?r+t*(Bn+i*e):r-(i*(.5*n-t*e)-n-t*Bn)}var Jn=!0===gr?0:1,Kn=new or(1),Qn=new nr(Kn.buffer);function re(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var ne=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ee=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],te=16777216,ie=5.960464477539063e-8,ae=re(20),oe=re(20),ue=re(20),fe=re(20);function ce(r,n,e,t,i,a,o,u,f){var c,s,l,p,v,y,d,h,g;for(p=a,g=t[e],h=e,v=0;h>0;v++)s=ie*g|0,fe[v]=g-te*s|0,g=t[h-1]+s,h-=1;if(g=Nn(g,i),g-=8*Lr(.125*g),g-=d=0|g,l=0,i>0?(d+=v=fe[e-1]>>24-i,fe[e-1]-=v<<24-i,l=fe[e-1]>>23-i):0===i?l=fe[e-1]>>23:g>=.5&&(l=2),l>0){for(d+=1,c=0,v=0;v<e;v++)h=fe[v],0===c?0!==h&&(c=1,fe[v]=16777216-h):fe[v]=16777215-h;if(i>0)switch(i){case 1:fe[e-1]&=8388607;break;case 2:fe[e-1]&=4194303}2===l&&(g=1-g,0!==c&&(g-=Nn(1,i)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=fe[v];if(0===h){for(y=1;0===fe[a-y];y++);for(v=e+1;v<=e+y;v++){for(f[u+v]=ne[o+v],s=0,h=0;h<=u;h++)s+=r[h]*f[u+(v-h)];t[v]=s}return ce(r,n,e+=y,t,i,a,o,u,f)}}if(0===g)for(e-=1,i-=24;0===fe[e];)e-=1,i-=24;else(g=Nn(g,-i))>=te?(s=ie*g|0,fe[e]=g-te*s|0,i+=24,fe[e+=1]=s):fe[e]=0|g;for(s=Nn(1,i),v=e;v>=0;v--)t[v]=s*fe[v],s*=ie;for(v=e;v>=0;v--){for(s=0,y=0;y<=p&&y<=e-v;y++)s+=ee[y]*t[v+y];ue[e-v]=s}for(s=0,v=e;v>=0;v--)s+=ue[v];for(n[0]=0===l?s:-s,s=ue[0]-s,v=1;v<=e;v++)s+=ue[v];return n[1]=0===l?s:-s,7&d}function se(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)ae[f]=c<0?0:ne[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*ae[o+(f-c)];oe[f]=i}return ce(r,n,4,oe,u,4,a,o,ae)}var le=Math.round;function pe(r,n,e){var t,i,a,o,u;return a=r-1.5707963267341256*(t=le(.6366197723675814*r)),o=6077100506506192e-26*t,u=n>>20|0,e[0]=a-o,u-(Nr(e[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),e[0]=a-o,u-(Nr(e[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var ve=1.5707963267341256,ye=6077100506506192e-26,de=2*ye,he=3*ye,ge=4*ye,be=[0,0,0],we=[0,0];function me(r,n){var e,t,i,a,o,u,f;if((i=Nr(r)&sn|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&An)?pe(r,i,n):i<=1073928572?r>0?(f=r-ve,n[0]=f-ye,n[1]=f-n[0]-ye,1):(f=r+ve,n[0]=f+ye,n[1]=f-n[0]+ye,-1):r>0?(f=r-2*ve,n[0]=f-de,n[1]=f-n[0]-de,2):(f=r+2*ve,n[0]=f+de,n[1]=f-n[0]+de,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?pe(r,i,n):r>0?(f=r-3*ve,n[0]=f-he,n[1]=f-n[0]-he,3):(f=r+3*ve,n[0]=f+he,n[1]=f-n[0]+he,-3):1075388923===i?pe(r,i,n):r>0?(f=r-4*ve,n[0]=f-ge,n[1]=f-n[0]-ge,4):(f=r+4*ve,n[0]=f+ge,n[1]=f-n[0]+ge,-4);if(i<1094263291)return pe(r,i,n);if(i>=bn)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return Kn[0]=r,Qn[Jn]}(r),f=Vr(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)be[o]=0|f,f=16777216*(f-be[o]);for(be[2]=f,a=3;0===be[a-1];)a-=1;return u=se(be,we,t,a),r<0?(n[0]=-we[0],n[1]=-we[1],-u):(n[0]=we[0],n[1]=we[1],u)}var Ne=[0,0],ke=3.141592653589793,Ae=Math.ceil;function _e(r){return r<0?Ae(r):Lr(r)}var Ee=1.4426950408889634,Se=1/(1<<28);function Ue(r){var n;return L(r)||r===Or?r:r===Gr?0:r>709.782712893384?Or:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Se?1+r:function(r,n,e){var t,i,a,o;return Nn(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(n=_e(r<0?Ee*r-.5:Ee*r+.5)),1.9082149292705877e-10*n,n)}function je(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Ue(r),2.5066282746310007*(e=r>143.01608?(t=xn(r,.5*r-.25))*(t/e):xn(r,r-.5)/e)*n}function Ie(r,n){return n/((1+Xn*r)*r)}function xe(r){var n,e,t,i;if(Rr(r)&&r<0||r===Gr||L(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Gr}(r)?Gr:Or;if(r>171.61447887182297)return Or;if(r<-170.5674972726612)return 0;if((e=Dr(r))>33)return r>=0?je(r):(n=0==(1&(t=Lr(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=Nr(r),(n&=sn)<=1072243195)return n<1045430272?r:Dn(r,0);if(n>=bn)return NaN;switch(3&me(r,Ne)){case 0:return Dn(Ne[0],Ne[1]);case 1:return zn(Ne[0],Ne[1]);case 2:return-Dn(Ne[0],Ne[1]);default:return-zn(Ne[0],Ne[1])}}(ke*i),n*ke/(Dr(i)*je(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Ie(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Ie(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}function Te(r,n){var e,t,i,a,o;return L(r)||L(n)||r<=0||n<=0?NaN:(o=xe(1+1/r),a=xe(1+2/r),i=xe(1+3/r),t=xe(1+4/r),e=-6*xn(o,4)+12*o*o*a-3*a*a-4*o*i+t,e/=xn(a-o*o,2))}function Fe(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:n*xe(1+1/r)}function Ve(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:n*xn(kn,1/r)}function Oe(r,n){return L(r)||L(n)||r<=0||n<=0?NaN:r<=1?0:n*xn((r-1)/r,1/r)}function $e(r,n){var e;return L(r)||L(n)||r<=0||n<=0?NaN:(e=Fe(r,n),n*n*xe(1+2/r)-e*e)}function Ge(r,n){var e,t,i,a;return L(r)||L(n)||r<=0||n<=0?NaN:(a=Fe(r,n),e=$e(r,n),t=Br(e),i=xe(1+3/r)*xn(n,3),i-=3*a*e+xn(a,3),i/=xn(t,3))}function Pe(r,n){var e;return L(r)||L(n)||r<=0||n<=0?NaN:(e=xe(1+1/r),n*Br(xe(1+2/r)-e*e))}var We=.6931471803691238,He=1.9082149292705877e-10;function Me(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||L(r))return NaN;if(-1===r)return Gr;if(r===Or)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(t<9007199254740992?(a=(s=((e=Nr(c=1+r))>>20)-Pr)>0?1-(c-r):r-(c-1),a/=c):(s=((e=Nr(c=r))>>20)-Pr,a=0),(e&=1048575)<434334?c=Ur(c,1072693248|e):(s+=1,c=Ur(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*We+(a+=s*He):s*We-((f=n*(1-.6666666666666666*i))-(s*He+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*We-(n-(o*(n+f)+(s*He+a))-i))}var Ce=-.6931471805599453;function Le(r,n,e){var t;return L(n)||L(e)||n<=0||e<=0?NaN:r<0?Gr:(t=-xn(r/e,n))<Ce?Me(-Ue(t)):qn(-Cr(t))}function Re(r,n,e){var t;return L(n)||L(e)||n<=0||e<=0?NaN:r<0||r===Or||r===Gr?Gr:0===r?1===n?qn(n/e):Gr:(t=r/e,qn(n/e)+(n-1)*qn(t)-xn(t,n))}C(Le,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?Fn(NaN):function(e){var t;return L(e)?NaN:e<0?Gr:(t=-xn(e/n,r))<Ce?Me(-Ue(t)):qn(-Cr(t))}})),C(Re,"factory",(function(r,n){var e;return L(r)||L(n)||r<=0||n<=0?Fn(NaN):(e=qn(r/n),function(t){var i;return t<0||t===Or||t===Gr?Gr:0===t?1===r?qn(r/n):Gr:e+(r-1)*qn(i=t/n)-xn(i,r)})}));var Ze=2220446049250313e-31;function qe(r,n,e){var t,i,a,o;if(L(r)||L(n)||L(e)||n<=0||e<=0)return NaN;i=1,a=1,o=0;do{i+=t=0==(a*=r*e/(o+=1))?0:a*xe(1+o/n)}while(t/i>Ze);return i}function Xe(r,n,e){var t;return L(n)||L(e)||n<=0||e<=0?NaN:r<0||r===Or||r===Gr?0:0===r?1===n?n/e:0:n/e*xn(t=r/e,n-1)*Ue(-xn(t,n))}function Ye(r,n,e){return L(n)||L(e)||L(r)||n<=0||e<=0||r<0||r>1?NaN:e*xn(-qn(1-r),1/n)}function ze(){var r,n;if(!(this instanceof ze))return 0===arguments.length?new ze:new ze(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Hn(n=arguments[0]))throw new TypeError(F("invalid argument. Shape parameter must be a positive number. Value: `%s`.",n));if(!Hn(r))throw new TypeError(F("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=1,r=1;return H(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Hn(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),H(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Hn(n))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}C(qe,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?Fn(NaN):function(e){var t,i,a,o;if(L(e))return NaN;i=1,a=1,o=0;do{t=0==(a*=e*n/(o+=1))?0:a*xe(1+o/r),i+=t}while(t/i>Ze);return i}})),C(Xe,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?Fn(NaN):function(e){var t,i;return e<0||e===Or||e===Gr?0:0===e?1===r?r/n:0:(i=xn(t=e/n,r-1),r/n*i*Ue(-xn(t,r)))}})),C(Ye,"factory",(function(r,n){return L(r)||L(n)||r<=0||n<=0?Fn(NaN):function(e){return L(e)||e<0||e>1?NaN:n*xn(-qn(1-e),1/r)}})),Vn(ze.prototype,"entropy",(function(){return Yn(this.k,this.lambda)})),Vn(ze.prototype,"kurtosis",(function(){return Te(this.k,this.lambda)})),Vn(ze.prototype,"mean",(function(){return Fe(this.k,this.lambda)})),Vn(ze.prototype,"median",(function(){return Ve(this.k,this.lambda)})),Vn(ze.prototype,"mode",(function(){return Oe(this.k,this.lambda)})),Vn(ze.prototype,"skewness",(function(){return Ge(this.k,this.lambda)})),Vn(ze.prototype,"stdev",(function(){return Pe(this.k,this.lambda)})),Vn(ze.prototype,"variance",(function(){return $e(this.k,this.lambda)})),C(ze.prototype,"cdf",(function(r){return Tn(r,this.k,this.lambda)})),C(ze.prototype,"logcdf",(function(r){return Le(r,this.k,this.lambda)})),C(ze.prototype,"logpdf",(function(r){return Re(r,this.k,this.lambda)})),C(ze.prototype,"mgf",(function(r){return qe(r,this.k,this.lambda)})),C(ze.prototype,"pdf",(function(r){return Xe(r,this.k,this.lambda)})),C(ze.prototype,"quantile",(function(r){return Ye(r,this.k,this.lambda)}));var Be={};return M(Be,"cdf",Tn),M(Be,"Weibull",ze),M(Be,"entropy",Yn),M(Be,"kurtosis",Te),M(Be,"logcdf",Le),M(Be,"logpdf",Re),M(Be,"mean",Fe),M(Be,"median",Ve),M(Be,"mgf",qe),M(Be,"mode",Oe),M(Be,"pdf",Xe),M(Be,"quantile",Ye),M(Be,"skewness",Ge),M(Be,"stdev",Pe),M(Be,"variance",$e),Be},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).weibull=n();
//# sourceMappingURL=browser.js.map
