// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,g=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,b,"$1e"),t=l.call(t,g,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,d,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function w(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var N=String.fromCharCode,k=isNaN,A=Array.isArray;function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function E(r){var n,e,t,a,o,f,c,s,l,p,v,d,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(n=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,l=0;l<e.length;l++)switch(a=e.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,k(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,d=t.padRight,y=void 0,(y=v-p.length)<0?p:p=d?p+w(y):w(y)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(U(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function I(r){var n,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return E.apply(null,n)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,V=x.__defineSetter__,O=x.__lookupGetter__,$=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(O.call(r,n)||$.call(r,n)?(t=r.__proto__,r.__proto__=x,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(r,n,e.get),o&&V&&V.call(r,n,e.set),r};function P(r,n,e){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function W(r,n,e){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function H(r){return r!=r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function C(){return M&&"symbol"==typeof Symbol.toStringTag}var L,R=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,X="function"==typeof q?q.toStringTag:"",Y=C()?function(r){var n,e,t,i,a;if(null==r)return R.call(r);e=r[X],a=X,n=null!=(i=r)&&Z.call(i,a);try{r[X]=void 0}catch(n){return R.call(r)}return t=R.call(r),n?r[X]=e:delete r[X],t}:function(r){return R.call(r)},z="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D="function"==typeof Uint32Array?Uint32Array:void 0;L=function(){var r,n,e;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(z&&e instanceof Uint32Array||"[object Uint32Array]"===Y(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=L,Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;J=function(){var r,n,e;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,NaN]),e=n,r=(Q&&e instanceof Float64Array||"[object Float64Array]"===Y(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er,tr=J,ir="function"==typeof Uint8Array,ar="function"==typeof Uint8Array?Uint8Array:null,or="function"==typeof Uint8Array?Uint8Array:void 0;er=function(){var r,n,e;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),e=n,r=(ir&&e instanceof Uint8Array||"[object Uint8Array]"===Y(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=er,cr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,lr="function"==typeof Uint16Array?Uint16Array:void 0;ur=function(){var r,n,e;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(cr&&e instanceof Uint16Array||"[object Uint16Array]"===Y(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,vr={uint16:ur,uint8:fr};(pr=new vr.uint16(1))[0]=4660;var dr=52===new vr.uint8(pr.buffer)[0],yr=!0===dr?1:0,hr=new tr(1),gr=new K(hr.buffer);function br(r){return hr[0]=r,gr[yr]}var mr,wr,Nr=!0===dr?1:0,kr=new tr(1),Ar=new K(kr.buffer);function _r(r,n){return kr[0]=r,Ar[Nr]=n>>>0,kr[0]}!0===dr?(mr=1,wr=0):(mr=0,wr=1);var Er={HIGH:mr,LOW:wr},Sr=new tr(1),Ur=new K(Sr.buffer),jr=Er.HIGH,Ir=Er.LOW;function xr(r,n){return Ur[jr]=r,Ur[Ir]=n,Sr[0]}var Tr=Number.POSITIVE_INFINITY,Fr=Number,Vr=Fr.NEGATIVE_INFINITY,Or=1023,$r=.34657359027997264,Gr=709.782712893384,Pr=.6931471803691238,Wr=1.9082149292705877e-10,Hr=1.4426950408889634,Mr=38.816242111356935,Cr=1.0397207708399179;function Lr(r){var n,e,t,i,a,o,u,f,c,s,l,p,v;if(r===Tr||H(r))return r;if(r===Vr)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=Mr){if(t)return-1;if(f>=Gr)return Tr}if(o=0|br(f),f>$r)f<Cr?t?(i=r+Pr,a=-Wr,v=-1):(i=r-Pr,a=Wr,v=1):(v=t?Hr*r-.5:Hr*r+.5,i=r-(l=v|=0)*Pr,a=l*Wr),s=i-(r=i-a)-a;else{if(o<1016070144)return r;v=0}return u=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*n))/(6-r*l)),0===v?r-(r*p-c):(e=xr(Or+v<<20,0),p=r*(p-s)-s,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=_r(f,i=br(f)+(v<<20)|0):f*=e,f-1):(l=1,v<20?f=(l=_r(l,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(l=_r(l,i=Or-v<<20|0))),f+=1),f*=e))}var Rr=Math.floor;function Zr(r){return Rr(r)===r}function qr(r){return Zr(r/2)}function Xr(r){return qr(r>0?r-1:r+1)}function Yr(r){return r===Tr||r===Vr}var zr,Br,Dr=Math.sqrt;function Jr(r){return Math.abs(r)}!0===dr?(zr=1,Br=0):(zr=0,Br=1);var Kr={HIGH:zr,LOW:Br},Qr=new tr(1),rn=new K(Qr.buffer),nn=Kr.HIGH,en=Kr.LOW;function tn(r,n,e,t){return Qr[0]=r,n[t]=rn[nn],n[t+e]=rn[en],n}function an(r){return tn(r,[0,0],1,0)}W(an,"assign",tn);var on=!0===dr?0:1,un=new tr(1),fn=new K(un.buffer);function cn(r,n){return un[0]=r,fn[on]=n>>>0,un[0]}function sn(r){return 0|r}var ln=2147483647,pn=2147483648,vn=[0,0];function dn(r,n){var e,t;return an.assign(r,vn,1,0),e=vn[0],e&=ln,t=br(n),xr(e|=t&=pn,vn[1])}var yn=1072693247,hn=1e300,gn=1e-300,bn=1048575,mn=1048576,wn=1072693248,Nn=536870912,kn=524288,An=20,_n=9007199254740992,En=.9617966939259756,Sn=.9617967009544373,Un=-7.028461650952758e-9,jn=[1,1.5],In=[0,.5849624872207642],xn=[0,1.350039202129749e-8],Tn=1.4426950408889634,Fn=1.4426950216293335,Vn=1.9259629911266175e-8,On=1023,$n=-1023,Gn=-1074,Pn=22250738585072014e-324,Wn=4503599627370496;function Hn(r,n,e,t){return H(r)||Yr(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Jr(r)<Pn?(n[t]=r*Wn,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}W((function(r){return Hn(r,[0,0],1,0)}),"assign",Hn);var Mn=2146435072,Cn=2220446049250313e-31,Ln=2148532223,Rn=[0,0],Zn=[0,0];function qn(r,n){var e,t;return 0===n||0===r||H(r)||Yr(r)?r:(Hn(r,Rn,1,0),r=Rn[0],n+=Rn[1],n+=function(r){var n=br(r);return(n=(n&Mn)>>>20)-Or|0}(r),n<Gn?dn(0,r):n>On?r<0?Vr:Tr:(n<=$n?(n+=52,t=Cn):t=1,an.assign(r,Zn,1,0),e=Zn[0],e&=Ln,t*xr(e|=n+Or<<20,Zn[1])))}var Xn=.6931471805599453,Yn=1048575,zn=1048576,Bn=1071644672,Dn=20,Jn=.6931471824645996,Kn=-1.904654299957768e-9,Qn=1072693247,re=1105199104,ne=1139802112,ee=1083179008,te=1072693248,ie=1083231232,ae=3230714880,oe=31,ue=1e300,fe=1e-300,ce=8008566259537294e-32,se=[0,0],le=[0,0];function pe(r,n){var e,t,i,a,o,u,f,c,s,l,p,v,d,y;if(H(r)||H(n))return NaN;if(an.assign(n,se,1,0),o=se[0],0===se[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dr(r);if(-.5===n)return 1/Dr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Yr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Jr(r)<1==(n===Tr)?0:Tr}(r,n)}if(an.assign(r,se,1,0),a=se[0],0===se[1]){if(0===a)return function(r,n){return n===Vr?Tr:n===Tr?0:n>0?Xr(n)?r:0:Xr(n)?dn(Tr,r):Tr}(r,n);if(1===r)return 1;if(-1===r&&Xr(n))return-1;if(Yr(r))return r===Vr?pe(-0,-n):n<0?0:Tr}if(r<0&&!1===Zr(n))return(r-r)/(r-r);if(i=Jr(r),e=a&ln|0,t=o&ln|0,f=o>>>oe|0,u=(u=a>>>oe|0)&&Xr(n)?-1:1,t>re){if(t>ne)return function(r,n){return(br(r)&ln)<=yn?n<0?hn*hn:gn*gn:n>0?hn*hn:gn*gn}(r,n);if(e<Qn)return 1===f?u*ue*ue:u*fe*fe;if(e>te)return 0===f?u*ue*ue:u*fe*fe;p=function(r,n){var e,t,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*Vn-a*Tn)-((t=cn(t=(o=Fn*i)+u,0))-o),r[0]=t,r[1]=e,r}(le,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,d,y,h,g,b,m,w,N,k,A;return w=0,e<mn&&(w-=53,e=br(n*=_n)),w+=(e>>An)-Or|0,e=(N=e&bn|0)|wn|0,N<=235662?k=0:N<767610?k=1:(k=0,w+=1,e-=mn),o=cn(i=(b=(n=_r(n,e))-(c=jn[k]))*(m=1/(n+c)),0),t=(e>>1|Nn)+kn,f=_r(0,t+=k<<18),g=(a=i*i)*a*(0===(A=a)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=cn(f=3+(a=o*o)+(g+=(u=m*(b-o*f-o*(n-(f-c))))*(o+i)),0),l=cn(l=(b=o*f)+(m=u*f+(g-(f-3-a))*i),0),p=Sn*l,y=(v=Un*l+(m-(l-b))*En+xn[k])-((d=cn(d=p+v+(s=In[k])+(h=w),0))-h-s-p),r[0]=d,r[1]=y,r}(le,i,e);if(v=(l=(n-(c=cn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),an.assign(v,se,1,0),d=sn(se[0]),y=sn(se[1]),d>=ee){if(0!=(d-ee|y))return u*ue*ue;if(l+ce>v-s)return u*ue*ue}else if((d&ln)>=ie){if(0!=(d-ae|y))return u*fe*fe;if(l<=v-s)return u*fe*fe}return v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&ln|0)>>Dn)-Or|0,c=0,s>Bn&&(i=_r(0,((c=r+(zn>>l+1)>>>0)&~(Yn>>(l=((c&ln)>>Dn)-Or|0)))>>>0),c=(c&Yn|zn)>>Dn-l>>>0,r<0&&(c=-c),n-=i),r=sn(r=br(f=1-((f=(a=(i=cn(i=e+n,0))*Jn)+(o=(e-(i-n))*Xn+i*Kn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Dn>>>0)>>Dn<=0?qn(f,c):_r(f,r)}(d,s,l),u*v}function ve(r,n,e){return H(r)||H(n)||H(e)||n<=0||e<=0?NaN:r<0?0:-Lr(-pe(r/e,n))}function de(r){return function(){return r}}function ye(r,n,e){G(r,n,{configurable:!1,enumerable:!1,get:e})}function he(r){return"number"==typeof r}W(ve,"factory",(function(r,n){return H(r)||H(n)||r<=0||n<=0?de(NaN):function(e){return H(e)?NaN:e<0?0:-Lr(-pe(e/n,r))}}));var ge=Fr.prototype.toString,be=C();function me(r){return"object"==typeof r&&(r instanceof Fr||(be?function(r){try{return ge.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function we(r){return he(r)||me(r)}function Ne(r){return he(r)&&r>0}function ke(r){return me(r)&&r.valueOf()>0}function Ae(r){return Ne(r)||ke(r)}W(we,"isPrimitive",he),W(we,"isObject",me),W(Ae,"isPrimitive",Ne),W(Ae,"isObject",ke);var _e=.6931471803691238,Ee=1.9082149292705877e-10,Se=0x40000000000000,Ue=.3333333333333333,je=1048575,Ie=2146435072,xe=1048576,Te=1072693248;function Fe(r){var n,e,t,i,a,o,u,f,c,s,l,p;return 0===r?Vr:H(r)||r<0?NaN:(a=0,(e=br(r))<xe&&(a-=54,e=br(r*=Se)),e>=Ie?r+r:(a+=(e>>20)-Or|0,a+=(f=614244+(e&=je)&1048576|0)>>20|0,u=(r=_r(r,e|f^Te))-1,(je&2+e)<3?0===u?0===a?0:a*_e+a*Ee:(o=u*u*(.5-Ue*u),0===a?u-o:a*_e-(o-a*Ee-u)):(f=e-398458|0,c=440401-e|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*_e-(n-(s*(n+o)+a*Ee)-u)):0===a?u-s*(u-o):a*_e-(s*(u-o)-a*Ee-u))))}var Ve=.5772156649015329;function Oe(r,n){return H(r)||H(n)||r<=0||n<=0?NaN:Ve*(1-1/r)+Fe(n/r)+1}function $e(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var Ge=-.16666666666666632,Pe=.00833333333332249,We=-.0001984126982985795,He=27557313707070068e-22,Me=-2.5050760253406863e-8,Ce=1.58969099521155e-10;function Le(r,n){var e,t,i;return e=Pe+(i=r*r)*(We+i*He)+i*(i*i)*(Me+i*Ce),t=i*r,0===n?r+t*(Ge+i*e):r-(i*(.5*n-t*e)-n-t*Ge)}var Re=!0===dr?0:1,Ze=new tr(1),qe=new K(Ze.buffer);function Xe(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ze=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Be=16777216,De=5.960464477539063e-8,Je=Xe(20),Ke=Xe(20),Qe=Xe(20),rt=Xe(20);function nt(r,n,e,t,i,a,o,u,f){var c,s,l,p,v,d,y,h,g;for(p=a,g=t[e],h=e,v=0;h>0;v++)s=De*g|0,rt[v]=g-Be*s|0,g=t[h-1]+s,h-=1;if(g=qn(g,i),g-=8*Rr(.125*g),g-=y=0|g,l=0,i>0?(y+=v=rt[e-1]>>24-i,rt[e-1]-=v<<24-i,l=rt[e-1]>>23-i):0===i?l=rt[e-1]>>23:g>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<e;v++)h=rt[v],0===c?0!==h&&(c=1,rt[v]=16777216-h):rt[v]=16777215-h;if(i>0)switch(i){case 1:rt[e-1]&=8388607;break;case 2:rt[e-1]&=4194303}2===l&&(g=1-g,0!==c&&(g-=qn(1,i)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=rt[v];if(0===h){for(d=1;0===rt[a-d];d++);for(v=e+1;v<=e+d;v++){for(f[u+v]=Ye[o+v],s=0,h=0;h<=u;h++)s+=r[h]*f[u+(v-h)];t[v]=s}return nt(r,n,e+=d,t,i,a,o,u,f)}}if(0===g)for(e-=1,i-=24;0===rt[e];)e-=1,i-=24;else(g=qn(g,-i))>=Be?(s=De*g|0,rt[e]=g-Be*s|0,i+=24,rt[e+=1]=s):rt[e]=0|g;for(s=qn(1,i),v=e;v>=0;v--)t[v]=s*rt[v],s*=De;for(v=e;v>=0;v--){for(s=0,d=0;d<=p&&d<=e-v;d++)s+=ze[d]*t[v+d];Qe[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Qe[v];for(n[0]=0===l?s:-s,s=Qe[0]-s,v=1;v<=e;v++)s+=Qe[v];return n[1]=0===l?s:-s,7&y}function et(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Je[f]=c<0?0:Ye[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Je[o+(f-c)];Ke[f]=i}return nt(r,n,4,Ke,u,4,a,o,Je)}var tt=Math.round,it=.6366197723675814,at=1.5707963267341256,ot=6077100506506192e-26,ut=6077100506303966e-26,ft=20222662487959506e-37,ct=20222662487111665e-37,st=84784276603689e-45,lt=2047;function pt(r,n,e){var t,i,a,o,u;return a=r-(t=tt(r*it))*at,o=t*ot,u=n>>20|0,e[0]=a-o,u-(br(e[0])>>20&lt)>16&&(o=t*ft-((i=a)-(a=i-(o=t*ut))-o),e[0]=a-o,u-(br(e[0])>>20&lt)>49&&(o=t*st-((i=a)-(a=i-(o=t*ct))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var vt=0,dt=16777216,yt=1.5707963267341256,ht=6077100506506192e-26,gt=2*ht,bt=3*ht,mt=4*ht,wt=598523,Nt=1072243195,kt=1073928572,At=1074752122,_t=1074977148,Et=1075183036,St=1075388923,Ut=1075594811,jt=1094263291,It=[0,0,0],xt=[0,0];function Tt(r,n){var e,t,i,a,o,u,f;if((i=br(r)&ln|0)<=Nt)return n[0]=r,n[1]=0,0;if(i<=At)return(i&Yn)===wt?pt(r,i,n):i<=kt?r>0?(f=r-yt,n[0]=f-ht,n[1]=f-n[0]-ht,1):(f=r+yt,n[0]=f+ht,n[1]=f-n[0]+ht,-1):r>0?(f=r-2*yt,n[0]=f-gt,n[1]=f-n[0]-gt,2):(f=r+2*yt,n[0]=f+gt,n[1]=f-n[0]+gt,-2);if(i<=Ut)return i<=Et?i===_t?pt(r,i,n):r>0?(f=r-3*yt,n[0]=f-bt,n[1]=f-n[0]-bt,3):(f=r+3*yt,n[0]=f+bt,n[1]=f-n[0]+bt,-3):i===St?pt(r,i,n):r>0?(f=r-4*yt,n[0]=f-mt,n[1]=f-n[0]-mt,4):(f=r+4*yt,n[0]=f+mt,n[1]=f-n[0]+mt,-4);if(i<jt)return pt(r,i,n);if(i>=Mn)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return Ze[0]=r,qe[Re]}(r),f=xr(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)It[o]=0|f,f=(f-It[o])*dt;for(It[2]=f,a=3;It[a-1]===vt;)a-=1;return u=et(It,xt,t,a),r<0?(n[0]=-xt[0],n[1]=-xt[1],-u):(n[0]=xt[0],n[1]=xt[1],u)}var Ft=1072243195,Vt=1045430272,Ot=[0,0],$t=3.141592653589793,Gt=2.5066282746310007,Pt=Math.ceil;function Wt(r){return r<0?Pt(r):Rr(r)}var Ht=.6931471803691238,Mt=1.9082149292705877e-10,Ct=1.4426950408889634,Lt=709.782712893384,Rt=-745.1332191019411,Zt=1/(1<<28),qt=-Zt;function Xt(r){var n;return H(r)||r===Tr?r:r===Vr?0:r>Lt?Tr:r<Rt?0:r>qt&&r<Zt?1+r:function(r,n,e){var t,i,a,o;return qn(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-(n=Wt(r<0?Ct*r-.5:Ct*r+.5))*Ht,n*Mt,n)}var Yt=143.01608;function zt(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Xt(r),e=r>Yt?(t=pe(r,.5*r-.25))*(t/e):pe(r,r-.5)/e,Gt*e*n}function Bt(r,n){return n/((1+Ve*r)*r)}function Dt(r){var n,e,t,i;if(Zr(r)&&r<0||r===Vr||H(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Vr}(r)?Vr:Tr;if(r>171.61447887182297)return Tr;if(r<-170.5674972726612)return 0;if((e=Jr(r))>33)return r>=0?zt(r):(n=0==(1&(t=Rr(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=br(r),(n&=ln)<=Ft)return n<Vt?r:Le(r,0);if(n>=Mn)return NaN;switch(3&Tt(r,Ot)){case 0:return Le(Ot[0],Ot[1]);case 1:return $e(Ot[0],Ot[1]);case 2:return-Le(Ot[0],Ot[1]);default:return-$e(Ot[0],Ot[1])}}($t*i),n*$t/(Jr(i)*zt(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Bt(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Bt(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}function Jt(r,n){var e,t,i,a,o;return H(r)||H(n)||r<=0||n<=0?NaN:(o=Dt(1+1/r),a=Dt(1+2/r),i=Dt(1+3/r),t=Dt(1+4/r),e=-6*pe(o,4)+12*o*o*a-3*a*a-4*o*i+t,e/=pe(a-o*o,2))}function Kt(r,n){return H(r)||H(n)||r<=0||n<=0?NaN:n*Dt(1+1/r)}function Qt(r,n){return H(r)||H(n)||r<=0||n<=0?NaN:n*pe(Xn,1/r)}function ri(r,n){return H(r)||H(n)||r<=0||n<=0?NaN:r<=1?0:n*pe((r-1)/r,1/r)}function ni(r,n){var e;return H(r)||H(n)||r<=0||n<=0?NaN:(e=Kt(r,n),n*n*Dt(1+2/r)-e*e)}function ei(r,n){var e,t,i,a;return H(r)||H(n)||r<=0||n<=0?NaN:(a=Kt(r,n),e=ni(r,n),t=Dr(e),i=Dt(1+3/r)*pe(n,3),i-=3*a*e+pe(a,3),i/=pe(t,3))}function ti(r,n){var e;return H(r)||H(n)||r<=0||n<=0?NaN:(e=Dt(1+1/r),n*Dr(Dt(1+2/r)-e*e))}var ii=.6931471803691238,ai=1.9082149292705877e-10,oi=.41421356237309503,ui=-.2928932188134525,fi=1.862645149230957e-9,ci=5551115123125783e-32,si=9007199254740992,li=.6666666666666666;function pi(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||H(r))return NaN;if(-1===r)return Vr;if(r===Tr)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<oi){if(t<fi)return t<ci?r:r-r*r*.5;r>ui&&(s=0,i=r,e=1)}return 0!==s&&(t<si?(a=(s=((e=br(c=1+r))>>20)-Or)>0?1-(c-r):r-(c-1),a/=c):(s=((e=br(c=r))>>20)-Or,a=0),(e&=1048575)<434334?c=_r(c,1072693248|e):(s+=1,c=_r(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*ii+(a+=s*ai):s*ii-((f=n*(1-li*i))-(s*ai+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*ii-(n-(o*(n+f)+(s*ai+a))-i))}var vi=-.6931471805599453;function di(r,n,e){var t;return H(n)||H(e)||n<=0||e<=0?NaN:r<0?Vr:(t=-pe(r/e,n))<vi?pi(-Xt(t)):Fe(-Lr(t))}function yi(r,n,e){var t;return H(n)||H(e)||n<=0||e<=0?NaN:r<0||r===Tr||r===Vr?Vr:0===r?1===n?Fe(n/e):Vr:(t=r/e,Fe(n/e)+(n-1)*Fe(t)-pe(t,n))}W(di,"factory",(function(r,n){return H(r)||H(n)||r<=0||n<=0?de(NaN):function(e){var t;return H(e)?NaN:e<0?Vr:(t=-pe(e/n,r))<vi?pi(-Xt(t)):Fe(-Lr(t))}})),W(yi,"factory",(function(r,n){var e;return H(r)||H(n)||r<=0||n<=0?de(NaN):(e=Fe(r/n),function(t){var i;return t<0||t===Tr||t===Vr?Vr:0===t?1===r?Fe(r/n):Vr:e+(r-1)*Fe(i=t/n)-pe(i,r)})}));var hi=2220446049250313e-31;function gi(r,n,e){var t,i,a,o;if(H(r)||H(n)||H(e)||n<=0||e<=0)return NaN;i=1,a=1,o=0;do{i+=t=0==(a*=r*e/(o+=1))?0:a*Dt(1+o/n)}while(t/i>hi);return i}function bi(r,n,e){var t;return H(n)||H(e)||n<=0||e<=0?NaN:r<0||r===Tr||r===Vr?0:0===r?1===n?n/e:0:n/e*pe(t=r/e,n-1)*Xt(-pe(t,n))}function mi(r,n,e){return H(n)||H(e)||H(r)||n<=0||e<=0||r<0||r>1?NaN:e*pe(-Fe(1-r),1/n)}function wi(){var r,n;if(!(this instanceof wi))return 0===arguments.length?new wi:new wi(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Ne(n=arguments[0]))throw new TypeError(I("invalid argument. Shape parameter must be a positive number. Value: `%s`.",n));if(!Ne(r))throw new TypeError(I("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=1,r=1;return G(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Ne(r))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),G(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Ne(n))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}W(gi,"factory",(function(r,n){return H(r)||H(n)||r<=0||n<=0?de(NaN):function(e){var t,i,a,o;if(H(e))return NaN;i=1,a=1,o=0;do{i+=t=0==(a*=e*n/(o+=1))?0:a*Dt(1+o/r)}while(t/i>hi);return i}})),W(bi,"factory",(function(r,n){return H(r)||H(n)||r<=0||n<=0?de(NaN):function(e){var t,i;return e<0||e===Tr||e===Vr?0:0===e?1===r?r/n:0:(i=pe(t=e/n,r-1),r/n*i*Xt(-pe(t,r)))}})),W(mi,"factory",(function(r,n){return H(r)||H(n)||r<=0||n<=0?de(NaN):function(e){return H(e)||e<0||e>1?NaN:n*pe(-Fe(1-e),1/r)}})),ye(wi.prototype,"entropy",(function(){return Oe(this.k,this.lambda)})),ye(wi.prototype,"kurtosis",(function(){return Jt(this.k,this.lambda)})),ye(wi.prototype,"mean",(function(){return Kt(this.k,this.lambda)})),ye(wi.prototype,"median",(function(){return Qt(this.k,this.lambda)})),ye(wi.prototype,"mode",(function(){return ri(this.k,this.lambda)})),ye(wi.prototype,"skewness",(function(){return ei(this.k,this.lambda)})),ye(wi.prototype,"stdev",(function(){return ti(this.k,this.lambda)})),ye(wi.prototype,"variance",(function(){return ni(this.k,this.lambda)})),W(wi.prototype,"cdf",(function(r){return ve(r,this.k,this.lambda)})),W(wi.prototype,"logcdf",(function(r){return di(r,this.k,this.lambda)})),W(wi.prototype,"logpdf",(function(r){return yi(r,this.k,this.lambda)})),W(wi.prototype,"mgf",(function(r){return gi(r,this.k,this.lambda)})),W(wi.prototype,"pdf",(function(r){return bi(r,this.k,this.lambda)})),W(wi.prototype,"quantile",(function(r){return mi(r,this.k,this.lambda)}));var Ni={};return P(Ni,"cdf",ve),P(Ni,"Weibull",wi),P(Ni,"entropy",Oe),P(Ni,"kurtosis",Jt),P(Ni,"logcdf",di),P(Ni,"logpdf",yi),P(Ni,"mean",Kt),P(Ni,"median",Qt),P(Ni,"mgf",gi),P(Ni,"mode",ri),P(Ni,"pdf",bi),P(Ni,"quantile",mi),P(Ni,"skewness",ei),P(Ni,"stdev",ti),P(Ni,"variance",ni),Ni},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).weibull=n();
//# sourceMappingURL=browser.js.map
