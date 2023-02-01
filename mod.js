// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,e=Object.prototype,t=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,u=e.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===t.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&a&&a.call(r,n,f.set),r};function c(r,n,e){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function s(r,n,e){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(r){return r!=r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=v()?function(r){var n,e,t,i,a;if(null==r)return y.call(r);e=r[d],a=d,n=null!=(i=r)&&h.call(i,a);try{r[d]=void 0}catch(n){return y.call(r)}return t=y.call(r),n?r[d]=e:delete r[d],t}:function(r){return y.call(r)},b="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var m,N="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,e;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(b&&e instanceof Uint32Array||"[object Uint32Array]"===g(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var k=m,A="function"==typeof Float64Array;var _="function"==typeof Float64Array?Float64Array:null;var E,S="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,e;if("function"!=typeof _)return!1;try{n=new _([1,3.14,-3.14,NaN]),e=n,r=(A&&e instanceof Float64Array||"[object Float64Array]"===g(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var U=E,I="function"==typeof Uint8Array;var j="function"==typeof Uint8Array?Uint8Array:null;var x,F="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,n,e;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,256,257]),e=n,r=(I&&e instanceof Uint8Array||"[object Uint8Array]"===g(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T=x,V="function"==typeof Uint16Array;var O="function"==typeof Uint16Array?Uint16Array:null;var $,G="function"==typeof Uint16Array?Uint16Array:void 0;$=function(){var r,n,e;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,65536,65537]),e=n,r=(V&&e instanceof Uint16Array||"[object Uint16Array]"===g(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,W={uint16:$,uint8:T};(P=new W.uint16(1))[0]=4660;var H=52===new W.uint8(P.buffer)[0],M=!0===H?1:0,C=new U(1),L=new k(C.buffer);function R(r){return C[0]=r,L[M]}var Z=!0===H?1:0,q=new U(1),X=new k(q.buffer);function Y(r,n){return q[0]=r,X[Z]=n>>>0,q[0]}var z=Number.POSITIVE_INFINITY,B=Number,D=B.NEGATIVE_INFINITY;var J=.6931471803691238,K=1.9082149292705877e-10;function Q(r){var n,e,t,i,a,o,u,f,c,s,p,v;if(r===z||l(r))return r;if(r===D)return-1;if(0===r)return r;if(r<0?(e=!0,u=-r):(e=!1,u=r),u>=38.816242111356935){if(e)return-1;if(u>=709.782712893384)return z}if(a=0|R(u),u>.34657359027997264)u<1.0397207708399179?e?(t=r+J,i=-K,v=-1):(t=r-J,i=K,v=1):(v=e?1.4426950408889634*r-.5:1.4426950408889634*r+.5,t=r-(s=v|=0)*J,i=s*K),c=t-(r=t-i)-i;else{if(a<1016070144)return r;v=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((o-(s=3-o*n))/(6-r*s)),0===v?r-(r*p-f):(p=r*(p-c)-c,p-=f,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(u=Y(u=1-(p-r),t=R(u)+(v<<20)|0))-1:(s=1,v<20?u=(s=Y(s,t=1072693248-(2097152>>v)|0))-(p-r):(u=r-(p+(s=Y(s,t=1023-v<<20|0))),u+=1),Y(u,t=R(u)+(v<<20)|0)))}var rr=Math.floor;function nr(r){return rr(r)===r}function er(r){return nr(r/2)}function tr(r){return er(r>0?r-1:r+1)}function ir(r){return r===z||r===D}var ar,or,ur=Math.sqrt;function fr(r){return Math.abs(r)}!0===H?(ar=1,or=0):(ar=0,or=1);var cr={HIGH:ar,LOW:or},sr=new U(1),lr=new k(sr.buffer),pr=cr.HIGH,vr=cr.LOW;function yr(r,n,e,t){return sr[0]=r,n[t]=lr[pr],n[t+e]=lr[vr],n}function hr(r){return yr(r,[0,0],1,0)}s(hr,"assign",yr);var dr=!0===H?0:1,gr=new U(1),br=new k(gr.buffer);function wr(r,n){return gr[0]=r,br[dr]=n>>>0,gr[0]}function mr(r){return 0|r}var Nr,kr;!0===H?(Nr=1,kr=0):(Nr=0,kr=1);var Ar={HIGH:Nr,LOW:kr},_r=new U(1),Er=new k(_r.buffer),Sr=Ar.HIGH,Ur=Ar.LOW;function Ir(r,n){return Er[Sr]=r,Er[Ur]=n,_r[0]}var jr=[0,0];function xr(r,n){var e,t;return hr.assign(r,jr,1,0),e=jr[0],e&=2147483647,t=R(n),Ir(e|=t&=2147483648,jr[1])}var Fr=[1,1.5],Tr=[0,.5849624872207642],Vr=[0,1.350039202129749e-8];function Or(r,n,e,t){return l(r)||ir(r)?(n[t]=r,n[t+e]=0,n):0!==r&&fr(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}s((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var $r=[0,0],Gr=[0,0];function Pr(r,n){var e,t;return 0===n||0===r||l(r)||ir(r)?r:(Or(r,$r,1,0),n+=$r[1],n+=function(r){var n=R(r);return(n=(2146435072&n)>>>20)-1023|0}(r=$r[0]),n<-1074?xr(0,r):n>1023?r<0?D:z:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,hr.assign(r,Gr,1,0),e=Gr[0],e&=2148532223,t*Ir(e|=n+1023<<20,Gr[1])))}var Wr=.6931471805599453;var Hr=1e300,Mr=[0,0],Cr=[0,0];function Lr(r,n){var e,t,i,a,o,u,f,c,s,p,v,y,h,d;if(l(r)||l(n))return NaN;if(hr.assign(n,Mr,1,0),o=Mr[0],0===Mr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ur(r);if(-.5===n)return 1/ur(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ir(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:fr(r)<1==(n===z)?0:z}(r,n)}if(hr.assign(r,Mr,1,0),a=Mr[0],0===Mr[1]){if(0===a)return function(r,n){return n===D?z:n===z?0:n>0?tr(n)?r:0:tr(n)?xr(z,r):z}(r,n);if(1===r)return 1;if(-1===r&&tr(n))return-1;if(ir(r))return r===D?Lr(-0,-n):n<0?0:z}if(r<0&&!1===nr(n))return(r-r)/(r-r);if(i=fr(r),e=2147483647&a|0,t=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&tr(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&R(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*Hr*Hr:1e-300*u*1e-300;if(e>1072693248)return 0===f?u*Hr*Hr:1e-300*u*1e-300;v=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=wr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(Cr,i)}else v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,y,h,d,g,b,w,m,N,k,A;return m=0,e<1048576&&(m-=53,e=R(n*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(N=1048575&e|0),N<=235662?k=0:N<767610?k=1:(k=0,m+=1,e-=1048576),o=wr(i=(b=(n=Y(n,e))-(c=Fr[k]))*(w=1/(n+c)),0),t=524288+(e>>1|536870912),f=Y(0,t+=k<<18),g=(a=i*i)*a*(0===(A=a)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=wr(f=3+(a=o*o)+(g+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),h=(v=-7.028461650952758e-9*(l=wr(l=(b=o*f)+(w=u*f+(g-(f-3-a))*i),0))+.9617966939259756*(w-(l-b))+Vr[k])-((y=wr(y=(p=.9617967009544373*l)+v+(s=Tr[k])+(d=m),0))-d-s-p),r[0]=y,r[1]=h,r}(Cr,i,e);if(y=(p=(n-(c=wr(n,0)))*v[0]+n*v[1])+(s=c*v[0]),hr.assign(y,Mr,1,0),h=mr(Mr[0]),d=mr(Mr[1]),h>=1083179008){if(0!=(h-1083179008|d))return u*Hr*Hr;if(p+8008566259537294e-32>y-s)return u*Hr*Hr}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|d))return 1e-300*u*1e-300;if(p<=y-s)return 1e-300*u*1e-300}return y=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),n-=a=Y(0,t)),r=mr(r=R(c=1-((c=(o=.6931471824645996*(a=wr(a=e+n,0)))+(u=(e-(a-n))*Wr+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?Pr(c,s):Y(c,r)}(h,s,p),u*y}function Rr(r,n,e){return l(r)||l(n)||l(e)||n<=0||e<=0?NaN:r<0?0:-Q(-Lr(r/e,n))}function Zr(r){return function(){return r}}function qr(r,n,e){f(r,n,{configurable:!1,enumerable:!1,get:e})}function Xr(r){return"number"==typeof r}s(Rr,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Zr(NaN):function(e){if(l(e))return NaN;if(e<0)return 0;return-Q(-Lr(e/n,r))}}));var Yr=B.prototype.toString;var zr=v();function Br(r){return"object"==typeof r&&(r instanceof B||(zr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function Dr(r){return Xr(r)||Br(r)}function Jr(r){return Xr(r)&&r>0}function Kr(r){return Br(r)&&r.valueOf()>0}function Qr(r){return Jr(r)||Kr(r)}s(Dr,"isPrimitive",Xr),s(Dr,"isObject",Br),s(Qr,"isPrimitive",Jr),s(Qr,"isObject",Kr);var rn=.6931471803691238,nn=1.9082149292705877e-10;function en(r){var n,e,t,i,a,o,u,f,c,s,p,v;return 0===r?D:l(r)||r<0?NaN:(a=0,(e=R(r))<1048576&&(a-=54,e=R(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-1023|0,a+=(f=(e&=1048575)+614244&1048576|0)>>20|0,u=(r=Y(r,e|1072693248^f))-1,(1048575&2+e)<3?0===u?0===a?0:a*rn+a*nn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*rn-(o-a*nn-u)):(f=e-398458|0,c=440401-e|0,i=(p=(v=(s=u/(2+u))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),t=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*rn-(n-(s*(n+o)+a*nn)-u)):0===a?u-s*(u-o):a*rn-(s*(u-o)-a*nn-u))))}var tn=.5772156649015329;function an(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:tn*(1-1/r)+en(n/r)+1}function on(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var un=-.16666666666666632;function fn(r,n){var e,t,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===n?r+t*(un+i*e):r-(i*(.5*n-t*e)-n-t*un)}var cn=!0===H?0:1,sn=new U(1),ln=new k(sn.buffer);function pn(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var vn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hn=5.960464477539063e-8,dn=pn(20),gn=pn(20),bn=pn(20),wn=pn(20);function mn(r,n,e,t,i,a,o,u,f){var c,s,l,p,v,y,h,d,g;for(p=a,g=t[e],d=e,v=0;d>0;v++)s=hn*g|0,wn[v]=g-16777216*s|0,g=t[d-1]+s,d-=1;if(g=Pr(g,i),g-=8*rr(.125*g),g-=h=0|g,l=0,i>0?(h+=v=wn[e-1]>>24-i,wn[e-1]-=v<<24-i,l=wn[e-1]>>23-i):0===i?l=wn[e-1]>>23:g>=.5&&(l=2),l>0){for(h+=1,c=0,v=0;v<e;v++)d=wn[v],0===c?0!==d&&(c=1,wn[v]=16777216-d):wn[v]=16777215-d;if(i>0)switch(i){case 1:wn[e-1]&=8388607;break;case 2:wn[e-1]&=4194303}2===l&&(g=1-g,0!==c&&(g-=Pr(1,i)))}if(0===g){for(d=0,v=e-1;v>=a;v--)d|=wn[v];if(0===d){for(y=1;0===wn[a-y];y++);for(v=e+1;v<=e+y;v++){for(f[u+v]=vn[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return mn(r,n,e+=y,t,i,a,o,u,f)}}if(0===g)for(e-=1,i-=24;0===wn[e];)e-=1,i-=24;else(g=Pr(g,-i))>=16777216?(s=hn*g|0,wn[e]=g-16777216*s|0,i+=24,wn[e+=1]=s):wn[e]=0|g;for(s=Pr(1,i),v=e;v>=0;v--)t[v]=s*wn[v],s*=hn;for(v=e;v>=0;v--){for(s=0,y=0;y<=p&&y<=e-v;y++)s+=yn[y]*t[v+y];bn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=bn[v];for(n[0]=0===l?s:-s,s=bn[0]-s,v=1;v<=e;v++)s+=bn[v];return n[1]=0===l?s:-s,7&h}function Nn(r,n,e,t){var i,a,o,u,f,c,s;for(4,(a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)dn[f]=c<0?0:vn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*dn[o+(f-c)];gn[f]=i}return 4,mn(r,n,4,gn,u,4,a,o,dn)}var kn=Math.round;function An(r,n,e){var t,i,a,o,u;return a=r-1.5707963267341256*(t=kn(.6366197723675814*r)),o=6077100506506192e-26*t,u=n>>20|0,e[0]=a-o,u-(R(e[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),e[0]=a-o,u-(R(e[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var _n=1.5707963267341256,En=6077100506506192e-26,Sn=2*En,Un=4*En,In=[0,0,0],jn=[0,0];function xn(r,n){var e,t,i,a,o,u,f;if((i=2147483647&R(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?An(r,i,n):i<=1073928572?r>0?(f=r-_n,n[0]=f-En,n[1]=f-n[0]-En,1):(f=r+_n,n[0]=f+En,n[1]=f-n[0]+En,-1):r>0?(f=r-2*_n,n[0]=f-Sn,n[1]=f-n[0]-Sn,2):(f=r+2*_n,n[0]=f+Sn,n[1]=f-n[0]+Sn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?An(r,i,n):r>0?(f=r-3*_n,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*_n,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===i?An(r,i,n):r>0?(f=r-4*_n,n[0]=f-Un,n[1]=f-n[0]-Un,4):(f=r+4*_n,n[0]=f+Un,n[1]=f-n[0]+Un,-4);if(i<1094263291)return An(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return sn[0]=r,ln[cn]}(r),f=Ir(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)In[o]=0|f,f=16777216*(f-In[o]);for(In[2]=f,a=3;0===In[a-1];)a-=1;return u=Nn(In,jn,t,a),r<0?(n[0]=-jn[0],n[1]=-jn[1],-u):(n[0]=jn[0],n[1]=jn[1],u)}var Fn=[0,0];var Tn=3.141592653589793,Vn=Math.ceil;function On(r){return r<0?Vn(r):rr(r)}function $n(r){var n;return l(r)||r===z?r:r===D?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,e){var t,i,a,o;return Pr(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(n=On(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Gn(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=$n(r),2.5066282746310007*(e=r>143.01608?(t=Lr(r,.5*r-.25))*(t/e):Lr(r,r-.5)/e)*n}function Pn(r,n){return n/((1+tn*r)*r)}function Wn(r){var n,e,t,i;if(nr(r)&&r<0||r===D||l(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===D}(r)?D:z;if(r>171.61447887182297)return z;if(r<-170.5674972726612)return 0;if((e=fr(r))>33)return r>=0?Gn(r):(n=0==(1&(t=rr(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=R(r),(n&=2147483647)<=1072243195)return n<1045430272?r:fn(r,0);if(n>=2146435072)return NaN;switch(3&xn(r,Fn)){case 0:return fn(Fn[0],Fn[1]);case 1:return on(Fn[0],Fn[1]);case 2:return-fn(Fn[0],Fn[1]);default:return-on(Fn[0],Fn[1])}}(Tn*i),n*Tn/(fr(i)*Gn(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Pn(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Pn(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}function Hn(r,n){var e,t,i,a,o;return l(r)||l(n)||r<=0||n<=0?NaN:(o=Wn(1+1/r),a=Wn(1+2/r),i=Wn(1+3/r),t=Wn(1+4/r),e=-6*Lr(o,4)+12*o*o*a-3*a*a-4*o*i+t,e/=Lr(a-o*o,2))}function Mn(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:n*Wn(1+1/r)}function Cn(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:n*Lr(Wr,1/r)}function Ln(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:r<=1?0:n*Lr((r-1)/r,1/r)}function Rn(r,n){var e;return l(r)||l(n)||r<=0||n<=0?NaN:(e=Mn(r,n),n*n*Wn(1+2/r)-e*e)}function Zn(r,n){var e,t,i,a;return l(r)||l(n)||r<=0||n<=0?NaN:(a=Mn(r,n),e=Rn(r,n),t=ur(e),i=Wn(1+3/r)*Lr(n,3),i-=3*a*e+Lr(a,3),i/=Lr(t,3))}function qn(r,n){var e;return l(r)||l(n)||r<=0||n<=0?NaN:(e=Wn(1+1/r),n*ur(Wn(1+2/r)-e*e))}var Xn=.6931471803691238,Yn=1.9082149292705877e-10;function zn(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||l(r))return NaN;if(-1===r)return D;if(r===z)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(t<9007199254740992?(a=(s=((e=R(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((e=R(c=r))>>20)-1023,a=0),(e&=1048575)<434334?c=Y(c,1072693248|e):(s+=1,c=Y(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*Xn+(a+=s*Yn):s*Xn-((f=n*(1-.6666666666666666*i))-(s*Yn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*Xn-(n-(o*(n+f)+(s*Yn+a))-i))}function Bn(r,n,e){var t;return l(n)||l(e)||n<=0||e<=0?NaN:r<0?D:(t=-Lr(r/e,n))<-.6931471805599453?zn(-$n(t)):en(-Q(t))}function Dn(r,n,e){var t;return l(n)||l(e)||n<=0||e<=0?NaN:r<0||r===z||r===D?D:0===r?1===n?en(n/e):D:(t=r/e,en(n/e)+(n-1)*en(t)-Lr(t,n))}s(Bn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Zr(NaN):function(e){var t;if(l(e))return NaN;if(e<0)return D;return(t=-Lr(e/n,r))<-.6931471805599453?zn(-$n(t)):en(-Q(t))}})),s(Dn,"factory",(function(r,n){var e;return l(r)||l(n)||r<=0||n<=0?Zr(NaN):(e=en(r/n),function(t){var i;if(t<0)return D;if(t===z||t===D)return D;if(0===t)return 1===r?en(r/n):D;return e+(r-1)*en(i=t/n)-Lr(i,r)})}));function Jn(r,n,e){var t,i,a,o;if(l(r)||l(n)||l(e)||n<=0||e<=0)return NaN;i=1,a=1,o=0;do{i+=t=0===(a*=r*e/(o+=1))?0:a*Wn(1+o/n)}while(t/i>2220446049250313e-31);return i}function Kn(r,n,e){var t;return l(n)||l(e)||n<=0||e<=0?NaN:r<0||r===z||r===D?0:0===r?1===n?n/e:0:n/e*Lr(t=r/e,n-1)*$n(-Lr(t,n))}function Qn(r,n,e){return l(n)||l(e)||l(r)||n<=0||e<=0||r<0||r>1?NaN:e*Lr(-en(1-r),1/n)}function re(r){return"number"==typeof r}function ne(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function ee(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+ne(i):ne(i)+r,t&&(r="-"+r)),r}s(Jn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Zr(NaN):function(e){var t,i,a,o;if(l(e))return NaN;i=1,a=1,o=0;do{t=0===(a*=e*n/(o+=1))?0:a*Wn(1+o/r),i+=t}while(t/i>2220446049250313e-31);return i}})),s(Kn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Zr(NaN):function(e){var t,i;if(e<0)return 0;if(e===z||e===D)return 0;if(0===e)return 1===r?r/n:0;return i=Lr(t=e/n,r-1),r/n*i*$n(-Lr(t,r))}})),s(Qn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Zr(NaN):function(e){if(l(e)||e<0||e>1)return NaN;return n*Lr(-en(1-e),1/r)}}));var te=String.prototype.toLowerCase,ie=String.prototype.toUpperCase;function ae(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!re(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=ee(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=ee(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===ie.call(r.specifier)?ie.call(e):te.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function oe(r){return"string"==typeof r}var ue=Math.abs,fe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase,se=String.prototype.replace,le=/e\+(\d)$/,pe=/e-(\d)$/,ve=/^(\d+)$/,ye=/^(\d+)e/,he=/\.0$/,de=/\.0*e/,ge=/(\..*[^0])0*e/;function be(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!re(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":ue(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=se.call(e,ge,"$1e"),e=se.call(e,de,"e"),e=se.call(e,he,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=se.call(e,le,"e+0$1"),e=se.call(e,pe,"e-0$1"),r.alternate&&(e=se.call(e,ve,"$1."),e=se.call(e,ye,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===ce.call(r.specifier)?ce.call(e):fe.call(e)}function we(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function me(r,n,e){var t=n-r.length;return t<0?r:r=e?r+we(t):we(t)+r}var Ne=String.fromCharCode,ke=isNaN,Ae=Array.isArray;function _e(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Ee(r){var n,e,t,i,a,o,u,f,c;if(!Ae(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(oe(t=r[f]))o+=t;else{if(n=void 0!==t.precision,!(t=_e(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),e=t.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,ke(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,ke(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=ae(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!ke(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ke(a)?String(t.arg):Ne(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=be(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ee(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=me(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Se=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ue(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Ie(r){var n,e,t,i;for(e=[],i=0,t=Se.exec(r);t;)(n=r.slice(i,Se.lastIndex-t[0].length)).length&&e.push(n),e.push(Ue(t)),i=Se.lastIndex,t=Se.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function je(r){return"string"==typeof r}function xe(r){var n,e,t;if(!je(r))throw new TypeError(xe("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Ie(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return Ee.apply(null,e)}function Fe(){var r,n;if(!(this instanceof Fe))return 0===arguments.length?new Fe:new Fe(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Jr(n=arguments[0]))throw new TypeError(xe("invalid argument. Shape parameter must be a positive number. Value: `%s`.",n));if(!Jr(r))throw new TypeError(xe("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=1,r=1;return f(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Jr(r))throw new TypeError(xe("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),f(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Jr(n))throw new TypeError(xe("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}qr(Fe.prototype,"entropy",(function(){return an(this.k,this.lambda)})),qr(Fe.prototype,"kurtosis",(function(){return Hn(this.k,this.lambda)})),qr(Fe.prototype,"mean",(function(){return Mn(this.k,this.lambda)})),qr(Fe.prototype,"median",(function(){return Cn(this.k,this.lambda)})),qr(Fe.prototype,"mode",(function(){return Ln(this.k,this.lambda)})),qr(Fe.prototype,"skewness",(function(){return Zn(this.k,this.lambda)})),qr(Fe.prototype,"stdev",(function(){return qn(this.k,this.lambda)})),qr(Fe.prototype,"variance",(function(){return Rn(this.k,this.lambda)})),s(Fe.prototype,"cdf",(function(r){return Rr(r,this.k,this.lambda)})),s(Fe.prototype,"logcdf",(function(r){return Bn(r,this.k,this.lambda)})),s(Fe.prototype,"logpdf",(function(r){return Dn(r,this.k,this.lambda)})),s(Fe.prototype,"mgf",(function(r){return Jn(r,this.k,this.lambda)})),s(Fe.prototype,"pdf",(function(r){return Kn(r,this.k,this.lambda)})),s(Fe.prototype,"quantile",(function(r){return Qn(r,this.k,this.lambda)}));var Te={};c(Te,"cdf",Rr),c(Te,"Weibull",Fe),c(Te,"entropy",an),c(Te,"kurtosis",Hn),c(Te,"logcdf",Bn),c(Te,"logpdf",Dn),c(Te,"mean",Mn),c(Te,"median",Cn),c(Te,"mgf",Jn),c(Te,"mode",Ln),c(Te,"pdf",Kn),c(Te,"quantile",Qn),c(Te,"skewness",Zn),c(Te,"stdev",qn),c(Te,"variance",Rn);export{Fe as Weibull,Rr as cdf,Te as default,an as entropy,Hn as kurtosis,Bn as logcdf,Dn as logpdf,Mn as mean,Cn as median,Jn as mgf,Ln as mode,Kn as pdf,Qn as quantile,Zn as skewness,qn as stdev,Rn as variance};
//# sourceMappingURL=mod.js.map
