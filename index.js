// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,i=t.toString,a=t.__defineGetter__,o=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,e){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((s="value"in e)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=e.value,r.__proto__=c):r[n]=e.value),l="get"in e,p="set"in e,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,n,e.get),p&&o&&o.call(r,n,e.set),r};function s(r,n,e){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function l(r,n,e){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){return r!=r}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var y,h=Object.prototype.toString,g=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",m=v()?function(r){var n,e,t,i,a;if(null==r)return h.call(r);e=r[b],a=b,n=null!=(i=r)&&g.call(i,a);try{r[b]=void 0}catch(n){return h.call(r)}return t=h.call(r),n?r[b]=e:delete r[b],t}:function(r){return h.call(r)},w="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,k="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,e;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(w&&e instanceof Uint32Array||"[object Uint32Array]"===m(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var A,_=y,E="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,e;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),e=n,r=(E&&e instanceof Float64Array||"[object Float64Array]"===m(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j,x=A,I="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,e;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),e=n,r=(I&&e instanceof Uint8Array||"[object Uint8Array]"===m(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var O,V=j,P="function"==typeof Uint16Array,W="function"==typeof Uint16Array?Uint16Array:null,$="function"==typeof Uint16Array?Uint16Array:void 0;O=function(){var r,n,e;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),e=n,r=(P&&e instanceof Uint16Array||"[object Uint16Array]"===m(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var G,M={uint16:O,uint8:V};(G=new M.uint16(1))[0]=4660;var H=52===new M.uint8(G.buffer)[0],C=!0===H?1:0,L=new x(1),R=new _(L.buffer);function Z(r){return L[0]=r,R[C]}var q=!0===H?1:0,X=new x(1),Y=new _(X.buffer);function z(r,n){return X[0]=r,Y[q]=n>>>0,X[0]}var B=Number.POSITIVE_INFINITY,D=Number,J=D.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,rr=1.9082149292705877e-10,nr=1.4426950408889634;function er(r){var n,e,t,i,a,o,u,f,c,s,l,d;if(r===B||p(r))return r;if(r===J)return-1;if(0===r)return r;if(r<0?(e=!0,u=-r):(e=!1,u=r),u>=38.816242111356935){if(e)return-1;if(u>=709.782712893384)return B}if(a=0|Z(u),u>.34657359027997264)u<1.0397207708399179?e?(t=r+Q,i=-rr,d=-1):(t=r-Q,i=rr,d=1):(d=e?nr*r-.5:nr*r+.5,t=r-(s=d|=0)*Q,i=s*rr),c=t-(r=t-i)-i;else{if(a<1016070144)return r;d=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),l=f*((o-(s=3-o*n))/(6-r*s)),0===d?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===d?.5*(r-l)-.5:1===d?r<-.25?-2*(l-(r+.5)):1+2*(r-l):d<=-2||d>56?(u=z(u=1-(l-r),t=Z(u)+(d<<20)|0))-1:(s=1,d<20?u=(s=z(s,t=1072693248-(2097152>>d)|0))-(l-r):(u=r-(l+(s=z(s,t=K-d<<20|0))),u+=1),z(u,t=Z(u)+(d<<20)|0)))}var tr=Math.floor;function ir(r){return tr(r)===r}function ar(r){return ir(r/2)}function or(r){return ar(r>0?r-1:r+1)}function ur(r){return r===B||r===J}var fr,cr,sr=Math.sqrt;function lr(r){return Math.abs(r)}!0===H?(fr=1,cr=0):(fr=0,cr=1);var pr={HIGH:fr,LOW:cr},dr=new x(1),vr=new _(dr.buffer),yr=pr.HIGH,hr=pr.LOW;function gr(r,n){return dr[0]=n,r[0]=vr[yr],r[1]=vr[hr],r}function br(r,n){return 1===arguments.length?gr([0,0],r):gr(r,n)}var mr,wr,Nr=!0===H?0:1,kr=new x(1),Ar=new _(kr.buffer);function _r(r,n){return kr[0]=r,Ar[Nr]=n>>>0,kr[0]}function Er(r){return 0|r}!0===H?(mr=1,wr=0):(mr=0,wr=1);var Sr={HIGH:mr,LOW:wr},Ur=new x(1),jr=new _(Ur.buffer),xr=Sr.HIGH,Ir=Sr.LOW;function Tr(r,n){return jr[xr]=r,jr[Ir]=n,Ur[0]}var Fr=[0,0];function Or(r,n){var e,t;return br(Fr,r),e=Fr[0],e&=2147483647,t=Z(n),Tr(e|=t&=2147483648,Fr[1])}var Vr=1048576,Pr=[1,1.5],Wr=[0,.5849624872207642],$r=[0,1.350039202129749e-8];function Gr(r,n,e,t){return p(r)||ur(r)?(n[t]=r,n[t+e]=0,n):0!==r&&lr(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}l((function(r){return Gr(r,[0,0],1,0)}),"assign",Gr);var Mr=[0,0],Hr=[0,0];function Cr(r,n){var e,t;return 0===n||0===r||p(r)||ur(r)?r:(Gr(r,Mr,1,0),n+=Mr[1],n+=function(r){var n=Z(r);return(n=(2146435072&n)>>>20)-K|0}(r=Mr[0]),n<-1074?Or(0,r):n>1023?r<0?J:B:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,br(Hr,r),e=Hr[0],e&=2148532223,t*Tr(e|=n+K<<20,Hr[1])))}var Lr=.6931471805599453,Rr=2147483647,Zr=1048575,qr=1048576,Xr=2147483647,Yr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(r,n){var e,t,i,a,o,u,f,c,s,l,d,v,y,h;if(p(r)||p(n))return NaN;if(br(Dr,n),o=Dr[0],0===Dr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return sr(r);if(-.5===n)return 1/sr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ur(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:lr(r)<1==(n===B)?0:B}(r,n)}if(br(Dr,r),a=Dr[0],0===Dr[1]){if(0===a)return function(r,n){return n===J?B:n===B?0:n>0?or(n)?r:0:or(n)?Or(B,r):B}(r,n);if(1===r)return 1;if(-1===r&&or(n))return-1;if(ur(r))return r===J?Kr(-0,-n):n<0?0:B}if(r<0&&!1===ir(n))return(r-r)/(r-r);if(i=lr(r),e=a&Xr|0,t=o&Xr|0,f=o>>>31|0,u=(u=a>>>31|0)&&or(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&Z(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*zr*zr:u*Br*Br;if(e>1072693248)return 0===f?u*zr*zr:u*Br*Br;d=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=_r(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(Jr,i)}else d=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,d,v,y,h,g,b,m,w,N,k,A;return w=0,e<Vr&&(w-=53,e=Z(n*=9007199254740992)),w+=(e>>20)-K|0,e=1072693248|(N=1048575&e|0),N<=235662?k=0:N<767610?k=1:(k=0,w+=1,e-=Vr),o=_r(i=(b=(n=z(n,e))-(c=Pr[k]))*(m=1/(n+c)),0),t=524288+(e>>1|536870912),f=z(0,t+=k<<18),g=(a=i*i)*a*(0===(A=a)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=_r(f=3+(a=o*o)+(g+=(u=m*(b-o*f-o*(n-(f-c))))*(o+i)),0),y=(d=-7.028461650952758e-9*(l=_r(l=(b=o*f)+(m=u*f+(g-(f-3-a))*i),0))+.9617966939259756*(m-(l-b))+$r[k])-((v=_r(v=(p=.9617967009544373*l)+d+(s=Wr[k])+(h=w),0))-h-s-p),r[0]=v,r[1]=y,r}(Jr,i,e);if(l=(n-(c=_r(n,0)))*d[0]+n*d[1],s=c*d[0],br(Dr,v=l+s),y=Er(Dr[0]),h=Er(Dr[1]),y>=Yr){if(0!=(y-Yr|h))return u*zr*zr;if(l+8008566259537294e-32>v-s)return u*zr*zr}else if((y&Xr)>=1083231232){if(0!=(y-3230714880|h))return u*Br*Br;if(l<=v-s)return u*Br*Br}return v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Rr|0)>>20)-K|0,c=0,s>1071644672&&(i=z(0,((c=r+(qr>>l+1)>>>0)&~(Zr>>(l=((c&Rr)>>20)-K|0)))>>>0),c=(c&Zr|qr)>>20-l>>>0,r<0&&(c=-c),n-=i),r=Er(r=Z(f=1-((f=(a=.6931471824645996*(i=_r(i=e+n,0)))+(o=(e-(i-n))*Lr+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Cr(f,c):z(f,r)}(y,s,l),u*v}function Qr(r,n,e){return p(r)||p(n)||p(e)||n<=0||e<=0?NaN:r<0?0:-er(-Kr(r/e,n))}function rn(r){return function(){return r}}function nn(r,n,e){c(r,n,{configurable:!1,enumerable:!1,get:e})}function en(r){return"number"==typeof r}l(Qr,"factory",(function(r,n){return p(r)||p(n)||r<=0||n<=0?rn(NaN):function(e){return p(e)?NaN:e<0?0:-er(-Kr(e/n,r))}}));var tn=D.prototype.toString,an=v();function on(r){return"object"==typeof r&&(r instanceof D||(an?function(r){try{return tn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===m(r)))}function un(r){return en(r)||on(r)}function fn(r){return en(r)&&r>0}function cn(r){return on(r)&&r.valueOf()>0}function sn(r){return fn(r)||cn(r)}l(un,"isPrimitive",en),l(un,"isObject",on),l(sn,"isPrimitive",fn),l(sn,"isObject",cn);var ln=.6931471803691238,pn=1.9082149292705877e-10,dn=1048575;function vn(r){var n,e,t,i,a,o,u,f,c,s,l,d;return 0===r?J:p(r)||r<0?NaN:(a=0,(e=Z(r))<1048576&&(a-=54,e=Z(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-K|0,a+=(f=614244+(e&=dn)&1048576|0)>>20|0,u=(r=z(r,e|1072693248^f))-1,(dn&2+e)<3?0===u?0===a?0:a*ln+a*pn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*ln-(o-a*pn-u)):(f=e-398458|0,c=440401-e|0,i=(l=(d=(s=u/(2+u))*s)*d)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=d*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*ln-(n-(s*(n+o)+a*pn)-u)):0===a?u-s*(u-o):a*ln-(s*(u-o)-a*pn-u))))}var yn=.5772156649015329;function hn(r,n){return p(r)||p(n)||r<=0||n<=0?NaN:yn*(1-1/r)+vn(n/r)+1}function gn(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var bn=-.16666666666666632;function mn(r,n){var e,t,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===n?r+t*(bn+i*e):r-(i*(.5*n-t*e)-n-t*bn)}var wn=!0===H?0:1,Nn=new x(1),kn=new _(Nn.buffer);function An(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var _n=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],En=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sn=16777216,Un=5.960464477539063e-8,jn=An(20),xn=An(20),In=An(20),Tn=An(20);function Fn(r,n,e,t,i,a,o,u,f){var c,s,l,p,d,v,y,h,g;for(p=a,g=t[e],h=e,d=0;h>0;d++)s=Un*g|0,Tn[d]=g-Sn*s|0,g=t[h-1]+s,h-=1;if(g=Cr(g,i),g-=8*tr(.125*g),g-=y=0|g,l=0,i>0?(y+=d=Tn[e-1]>>24-i,Tn[e-1]-=d<<24-i,l=Tn[e-1]>>23-i):0===i?l=Tn[e-1]>>23:g>=.5&&(l=2),l>0){for(y+=1,c=0,d=0;d<e;d++)h=Tn[d],0===c?0!==h&&(c=1,Tn[d]=16777216-h):Tn[d]=16777215-h;if(i>0)switch(i){case 1:Tn[e-1]&=8388607;break;case 2:Tn[e-1]&=4194303}2===l&&(g=1-g,0!==c&&(g-=Cr(1,i)))}if(0===g){for(h=0,d=e-1;d>=a;d--)h|=Tn[d];if(0===h){for(v=1;0===Tn[a-v];v++);for(d=e+1;d<=e+v;d++){for(f[u+d]=_n[o+d],s=0,h=0;h<=u;h++)s+=r[h]*f[u+(d-h)];t[d]=s}return Fn(r,n,e+=v,t,i,a,o,u,f)}}if(0===g)for(e-=1,i-=24;0===Tn[e];)e-=1,i-=24;else(g=Cr(g,-i))>=Sn?(s=Un*g|0,Tn[e]=g-Sn*s|0,i+=24,Tn[e+=1]=s):Tn[e]=0|g;for(s=Cr(1,i),d=e;d>=0;d--)t[d]=s*Tn[d],s*=Un;for(d=e;d>=0;d--){for(s=0,v=0;v<=p&&v<=e-d;v++)s+=En[v]*t[d+v];In[e-d]=s}for(s=0,d=e;d>=0;d--)s+=In[d];for(n[0]=0===l?s:-s,s=In[0]-s,d=1;d<=e;d++)s+=In[d];return n[1]=0===l?s:-s,7&y}function On(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)jn[f]=c<0?0:_n[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*jn[o+(f-c)];xn[f]=i}return Fn(r,n,4,xn,u,4,a,o,jn)}var Vn=Math.round;function Pn(r,n,e){var t,i,a,o,u;return a=r-1.5707963267341256*(t=Vn(.6366197723675814*r)),o=6077100506506192e-26*t,u=n>>20|0,e[0]=a-o,u-(Z(e[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),e[0]=a-o,u-(Z(e[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var Wn=1.5707963267341256,$n=6077100506506192e-26,Gn=2*$n,Mn=3*$n,Hn=4*$n,Cn=[0,0,0],Ln=[0,0];function Rn(r,n){var e,t,i,a,o,u,f;if((i=2147483647&Z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Pn(r,i,n):i<=1073928572?r>0?(f=r-Wn,n[0]=f-$n,n[1]=f-n[0]-$n,1):(f=r+Wn,n[0]=f+$n,n[1]=f-n[0]+$n,-1):r>0?(f=r-2*Wn,n[0]=f-Gn,n[1]=f-n[0]-Gn,2):(f=r+2*Wn,n[0]=f+Gn,n[1]=f-n[0]+Gn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Pn(r,i,n):r>0?(f=r-3*Wn,n[0]=f-Mn,n[1]=f-n[0]-Mn,3):(f=r+3*Wn,n[0]=f+Mn,n[1]=f-n[0]+Mn,-3):1075388923===i?Pn(r,i,n):r>0?(f=r-4*Wn,n[0]=f-Hn,n[1]=f-n[0]-Hn,4):(f=r+4*Wn,n[0]=f+Hn,n[1]=f-n[0]+Hn,-4);if(i<1094263291)return Pn(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return Nn[0]=r,kn[wn]}(r),f=Tr(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)Cn[o]=0|f,f=16777216*(f-Cn[o]);for(Cn[2]=f,a=3;0===Cn[a-1];)a-=1;return u=On(Cn,Ln,t,a),r<0?(n[0]=-Ln[0],n[1]=-Ln[1],-u):(n[0]=Ln[0],n[1]=Ln[1],u)}var Zn=[0,0],qn=3.141592653589793,Xn=Math.ceil;function Yn(r){return r<0?Xn(r):tr(r)}var zn=1.4426950408889634,Bn=1/(1<<28);function Dn(r){var n;return p(r)||r===B?r:r===J?0:r>709.782712893384?B:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Bn?1+r:function(r,n,e){var t,i,a,o;return Cr(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(n=Yn(r<0?zn*r-.5:zn*r+.5)),1.9082149292705877e-10*n,n)}function Jn(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Dn(r),2.5066282746310007*(e=r>143.01608?(t=Kr(r,.5*r-.25))*(t/e):Kr(r,r-.5)/e)*n}function Kn(r,n){return n/((1+yn*r)*r)}function Qn(r){var n,e,t,i;if(ir(r)&&r<0||r===J||p(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===J}(r)?J:B;if(r>171.61447887182297)return B;if(r<-170.5674972726612)return 0;if((e=lr(r))>33)return r>=0?Jn(r):(n=0==(1&(t=tr(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=Z(r),(n&=2147483647)<=1072243195)return n<1045430272?r:mn(r,0);if(n>=2146435072)return NaN;switch(3&Rn(r,Zn)){case 0:return mn(Zn[0],Zn[1]);case 1:return gn(Zn[0],Zn[1]);case 2:return-mn(Zn[0],Zn[1]);default:return-gn(Zn[0],Zn[1])}}(qn*i),n*qn/(lr(i)*Jn(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Kn(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Kn(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}function re(r,n){var e,t,i,a,o;return p(r)||p(n)||r<=0||n<=0?NaN:(o=Qn(1+1/r),a=Qn(1+2/r),i=Qn(1+3/r),t=Qn(1+4/r),e=-6*Kr(o,4)+12*o*o*a-3*a*a-4*o*i+t,e/=Kr(a-o*o,2))}function ne(r,n){return p(r)||p(n)||r<=0||n<=0?NaN:n*Qn(1+1/r)}function ee(r,n){return p(r)||p(n)||r<=0||n<=0?NaN:n*Kr(Lr,1/r)}function te(r,n){return p(r)||p(n)||r<=0||n<=0?NaN:r<=1?0:n*Kr((r-1)/r,1/r)}function ie(r,n){var e;return p(r)||p(n)||r<=0||n<=0?NaN:(e=ne(r,n),n*n*Qn(1+2/r)-e*e)}function ae(r,n){var e,t,i,a;return p(r)||p(n)||r<=0||n<=0?NaN:(a=ne(r,n),e=ie(r,n),t=sr(e),i=Qn(1+3/r)*Kr(n,3),i-=3*a*e+Kr(a,3),i/=Kr(t,3))}function oe(r,n){var e;return p(r)||p(n)||r<=0||n<=0?NaN:(e=Qn(1+1/r),n*sr(Qn(1+2/r)-e*e))}var ue=.6931471803691238,fe=1.9082149292705877e-10;function ce(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return J;if(r===B)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(t<9007199254740992?(a=(s=((e=Z(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),a/=c):(s=((e=Z(c=r))>>20)-K,a=0),(e&=1048575)<434334?c=z(c,1072693248|e):(s+=1,c=z(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*ue+(a+=s*fe):s*ue-((f=n*(1-.6666666666666666*i))-(s*fe+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*ue-(n-(o*(n+f)+(s*fe+a))-i))}var se=-.6931471805599453;function le(r,n,e){var t;return p(n)||p(e)||n<=0||e<=0?NaN:r<0?J:(t=-Kr(r/e,n))<se?ce(-Dn(t)):vn(-er(t))}function pe(r,n,e){var t;return p(n)||p(e)||n<=0||e<=0?NaN:r<0||r===B||r===J?J:0===r?1===n?vn(n/e):J:(t=r/e,vn(n/e)+(n-1)*vn(t)-Kr(t,n))}l(le,"factory",(function(r,n){return p(r)||p(n)||r<=0||n<=0?rn(NaN):function(e){var t;return p(e)?NaN:e<0?J:(t=-Kr(e/n,r))<se?ce(-Dn(t)):vn(-er(t))}})),l(pe,"factory",(function(r,n){var e;return p(r)||p(n)||r<=0||n<=0?rn(NaN):(e=vn(r/n),function(t){var i;return t<0||t===B||t===J?J:0===t?1===r?vn(r/n):J:e+(r-1)*vn(i=t/n)-Kr(i,r)})}));var de=2220446049250313e-31;function ve(r,n,e){var t,i,a,o;if(p(r)||p(n)||p(e)||n<=0||e<=0)return NaN;i=1,a=1,o=0;do{i+=t=0==(a*=r*e/(o+=1))?0:a*Qn(1+o/n)}while(t/i>de);return i}function ye(r,n,e){var t;return p(n)||p(e)||n<=0||e<=0?NaN:r<0||r===B||r===J?0:0===r?1===n?n/e:0:n/e*Kr(t=r/e,n-1)*Dn(-Kr(t,n))}function he(r,n,e){return p(n)||p(e)||p(r)||n<=0||e<=0||r<0||r>1?NaN:e*Kr(-vn(1-r),1/n)}function ge(r){return"number"==typeof r}function be(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function me(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+be(i):be(i)+r,t&&(r="-"+r)),r}l(ve,"factory",(function(r,n){return p(r)||p(n)||r<=0||n<=0?rn(NaN):function(e){var t,i,a,o;if(p(e))return NaN;i=1,a=1,o=0;do{t=0==(a*=e*n/(o+=1))?0:a*Qn(1+o/r),i+=t}while(t/i>de);return i}})),l(ye,"factory",(function(r,n){return p(r)||p(n)||r<=0||n<=0?rn(NaN):function(e){var t,i;return e<0||e===B||e===J?0:0===e?1===r?r/n:0:(i=Kr(t=e/n,r-1),r/n*i*Dn(-Kr(t,r)))}})),l(he,"factory",(function(r,n){return p(r)||p(n)||r<=0||n<=0?rn(NaN):function(e){return p(e)||e<0||e>1?NaN:n*Kr(-vn(1-e),1/r)}}));var we=String.prototype.toLowerCase,Ne=String.prototype.toUpperCase;function ke(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!ge(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=me(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=me(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===Ne.call(r.specifier)?Ne.call(e):we.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Ae(r){return"string"==typeof r}var _e=Math.abs,Ee=String.prototype.toLowerCase,Se=String.prototype.toUpperCase,Ue=String.prototype.replace,je=/e\+(\d)$/,xe=/e-(\d)$/,Ie=/^(\d+)$/,Te=/^(\d+)e/,Fe=/\.0$/,Oe=/\.0*e/,Ve=/(\..*[^0])0*e/;function Pe(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!ge(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":_e(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=Ue.call(e,Ve,"$1e"),e=Ue.call(e,Oe,"e"),e=Ue.call(e,Fe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Ue.call(e,je,"e+0$1"),e=Ue.call(e,xe,"e-0$1"),r.alternate&&(e=Ue.call(e,Ie,"$1."),e=Ue.call(e,Te,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Se.call(r.specifier)?Se.call(e):Ee.call(e)}function We(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function $e(r,n,e){var t=n-r.length;return t<0?r:r=e?r+We(t):We(t)+r}var Ge=String.fromCharCode,Me=isNaN,He=Array.isArray;function Ce(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Le(r){var n,e,t,i,a,o,u,f,c;if(!He(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Ae(t=r[f]))o+=t;else{if(n=void 0!==t.precision,!(t=Ce(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),e=t.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Me(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Me(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=ke(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!Me(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Me(a)?String(t.arg):Ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=Pe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=me(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=$e(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Re=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ze(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function qe(r){var n,e,t,i;for(e=[],i=0,t=Re.exec(r);t;)(n=r.slice(i,Re.lastIndex-t[0].length)).length&&e.push(n),e.push(Ze(t)),i=Re.lastIndex,t=Re.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function Xe(r){return"string"==typeof r}function Ye(r){var n,e,t;if(!Xe(r))throw new TypeError(Ye("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=qe(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return Le.apply(null,e)}function ze(){var r,n;if(!(this instanceof ze))return 0===arguments.length?new ze:new ze(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!fn(n=arguments[0]))throw new TypeError(Ye("invalid argument. Shape parameter must be a positive number. Value: `%s`.",n));if(!fn(r))throw new TypeError(Ye("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=1,r=1;return c(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!fn(r))throw new TypeError(Ye("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),c(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!fn(n))throw new TypeError(Ye("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}nn(ze.prototype,"entropy",(function(){return hn(this.k,this.lambda)})),nn(ze.prototype,"kurtosis",(function(){return re(this.k,this.lambda)})),nn(ze.prototype,"mean",(function(){return ne(this.k,this.lambda)})),nn(ze.prototype,"median",(function(){return ee(this.k,this.lambda)})),nn(ze.prototype,"mode",(function(){return te(this.k,this.lambda)})),nn(ze.prototype,"skewness",(function(){return ae(this.k,this.lambda)})),nn(ze.prototype,"stdev",(function(){return oe(this.k,this.lambda)})),nn(ze.prototype,"variance",(function(){return ie(this.k,this.lambda)})),l(ze.prototype,"cdf",(function(r){return Qr(r,this.k,this.lambda)})),l(ze.prototype,"logcdf",(function(r){return le(r,this.k,this.lambda)})),l(ze.prototype,"logpdf",(function(r){return pe(r,this.k,this.lambda)})),l(ze.prototype,"mgf",(function(r){return ve(r,this.k,this.lambda)})),l(ze.prototype,"pdf",(function(r){return ye(r,this.k,this.lambda)})),l(ze.prototype,"quantile",(function(r){return he(r,this.k,this.lambda)}));var Be={};s(Be,"cdf",Qr),s(Be,"Weibull",ze),s(Be,"entropy",hn),s(Be,"kurtosis",re),s(Be,"logcdf",le),s(Be,"logpdf",pe),s(Be,"mean",ne),s(Be,"median",ee),s(Be,"mgf",ve),s(Be,"mode",te),s(Be,"pdf",ye),s(Be,"quantile",he),s(Be,"skewness",ae),s(Be,"stdev",oe),s(Be,"variance",ie),r.Weibull=ze,r.cdf=Qr,r.default=Be,r.entropy=hn,r.kurtosis=re,r.logcdf=le,r.logpdf=pe,r.mean=ne,r.median=ee,r.mgf=ve,r.mode=te,r.pdf=ye,r.quantile=he,r.skewness=ae,r.stdev=oe,r.variance=ie,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).weibull={});
//# sourceMappingURL=index.js.map
