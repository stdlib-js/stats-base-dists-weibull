// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,t=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,u=e.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===t.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&a&&a.call(r,n,f.set),r};function c(r,n,e){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function s(r,n,e){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(r){return r!=r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return p&&"symbol"==typeof Symbol.toStringTag}var y,d=Object.prototype.toString,h=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",b=v()?function(r){var n,e,t,i,a;if(null==r)return d.call(r);e=r[g],a=g,n=null!=(i=r)&&h.call(i,a);try{r[g]=void 0}catch(n){return d.call(r)}return t=d.call(r),n?r[g]=e:delete r[g],t}:function(r){return d.call(r)},w="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,N="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,e;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(w&&e instanceof Uint32Array||"[object Uint32Array]"===b(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var k,A=y,_="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;k=function(){var r,n,e;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),e=n,r=(_&&e instanceof Float64Array||"[object Float64Array]"===b(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var U,j=k,I="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,n,e;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),e=n,r=(I&&e instanceof Uint8Array||"[object Uint8Array]"===b(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var F,V=U,O="function"==typeof Uint16Array,$="function"==typeof Uint16Array?Uint16Array:null,G="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,e;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,65536,65537]),e=n,r=(O&&e instanceof Uint16Array||"[object Uint16Array]"===b(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,W={uint16:F,uint8:V};(P=new W.uint16(1))[0]=4660;var H=52===new W.uint8(P.buffer)[0],M=!0===H?1:0,C=new j(1),L=new A(C.buffer);function R(r){return C[0]=r,L[M]}var Z=!0===H?1:0,q=new j(1),X=new A(q.buffer);function Y(r,n){return q[0]=r,X[Z]=n>>>0,q[0]}var z=Number.POSITIVE_INFINITY,B=Number,D=B.NEGATIVE_INFINITY,J=1023,K=.6931471803691238,Q=1.9082149292705877e-10,rr=1.4426950408889634;function nr(r){var n,e,t,i,a,o,u,f,c,s,p,v;if(r===z||l(r))return r;if(r===D)return-1;if(0===r)return r;if(r<0?(e=!0,u=-r):(e=!1,u=r),u>=38.816242111356935){if(e)return-1;if(u>=709.782712893384)return z}if(a=0|R(u),u>.34657359027997264)u<1.0397207708399179?e?(t=r+K,i=-Q,v=-1):(t=r-K,i=Q,v=1):(v=e?rr*r-.5:rr*r+.5,t=r-(s=v|=0)*K,i=s*Q),c=t-(r=t-i)-i;else{if(a<1016070144)return r;v=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((o-(s=3-o*n))/(6-r*s)),0===v?r-(r*p-f):(p=r*(p-c)-c,p-=f,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(u=Y(u=1-(p-r),t=R(u)+(v<<20)|0))-1:(s=1,v<20?u=(s=Y(s,t=1072693248-(2097152>>v)|0))-(p-r):(u=r-(p+(s=Y(s,t=J-v<<20|0))),u+=1),Y(u,t=R(u)+(v<<20)|0)))}var er=Math.floor;function tr(r){return er(r)===r}function ir(r){return tr(r/2)}function ar(r){return ir(r>0?r-1:r+1)}function or(r){return r===z||r===D}var ur,fr,cr=Math.sqrt;function sr(r){return Math.abs(r)}!0===H?(ur=1,fr=0):(ur=0,fr=1);var lr={HIGH:ur,LOW:fr},pr=new j(1),vr=new A(pr.buffer),yr=lr.HIGH,dr=lr.LOW;function hr(r,n,e,t){return pr[0]=r,n[t]=vr[yr],n[t+e]=vr[dr],n}function gr(r){return hr(r,[0,0],1,0)}s(gr,"assign",hr);var br=!0===H?0:1,wr=new j(1),mr=new A(wr.buffer);function Nr(r,n){return wr[0]=r,mr[br]=n>>>0,wr[0]}function kr(r){return 0|r}var Ar,_r,Er=2147483647;!0===H?(Ar=1,_r=0):(Ar=0,_r=1);var Sr={HIGH:Ar,LOW:_r},Ur=new j(1),jr=new A(Ur.buffer),Ir=Sr.HIGH,xr=Sr.LOW;function Tr(r,n){return jr[Ir]=r,jr[xr]=n,Ur[0]}var Fr=[0,0];function Vr(r,n){var e,t;return gr.assign(r,Fr,1,0),e=Fr[0],e&=Er,t=R(n),Tr(e|=t&=2147483648,Fr[1])}var Or=1048576,$r=[1,1.5],Gr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];function Wr(r,n,e,t){return l(r)||or(r)?(n[t]=r,n[t+e]=0,n):0!==r&&sr(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}s((function(r){return Wr(r,[0,0],1,0)}),"assign",Wr);var Hr=[0,0],Mr=[0,0];function Cr(r,n){var e,t;return 0===n||0===r||l(r)||or(r)?r:(Wr(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=R(r);return(n=(2146435072&n)>>>20)-J|0}(r=Hr[0]),n<-1074?Vr(0,r):n>1023?r<0?D:z:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,gr.assign(r,Mr,1,0),e=Mr[0],e&=2148532223,t*Tr(e|=n+J<<20,Mr[1])))}var Lr=.6931471805599453,Rr=1048575,Zr=1048576,qr=1083179008,Xr=1e300,Yr=1e-300,zr=[0,0],Br=[0,0];function Dr(r,n){var e,t,i,a,o,u,f,c,s,p,v,y,d,h;if(l(r)||l(n))return NaN;if(gr.assign(n,zr,1,0),o=zr[0],0===zr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return cr(r);if(-.5===n)return 1/cr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(or(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:sr(r)<1==(n===z)?0:z}(r,n)}if(gr.assign(r,zr,1,0),a=zr[0],0===zr[1]){if(0===a)return function(r,n){return n===D?z:n===z?0:n>0?ar(n)?r:0:ar(n)?Vr(z,r):z}(r,n);if(1===r)return 1;if(-1===r&&ar(n))return-1;if(or(r))return r===D?Dr(-0,-n):n<0?0:z}if(r<0&&!1===tr(n))return(r-r)/(r-r);if(i=sr(r),e=a&Er|0,t=o&Er|0,f=o>>>31|0,u=(u=a>>>31|0)&&ar(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(R(r)&Er)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*Xr*Xr:u*Yr*Yr;if(e>1072693248)return 0===f?u*Xr*Xr:u*Yr*Yr;v=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Nr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(Br,i)}else v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,y,d,h,g,b,w,m,N,k,A;return m=0,e<Or&&(m-=53,e=R(n*=9007199254740992)),m+=(e>>20)-J|0,e=1072693248|(N=1048575&e|0),N<=235662?k=0:N<767610?k=1:(k=0,m+=1,e-=Or),o=Nr(i=(b=(n=Y(n,e))-(c=$r[k]))*(w=1/(n+c)),0),t=524288+(e>>1|536870912),f=Y(0,t+=k<<18),g=(a=i*i)*a*(0===(A=a)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=Nr(f=3+(a=o*o)+(g+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),d=(v=-7.028461650952758e-9*(l=Nr(l=(b=o*f)+(w=u*f+(g-(f-3-a))*i),0))+.9617966939259756*(w-(l-b))+Pr[k])-((y=Nr(y=(p=.9617967009544373*l)+v+(s=Gr[k])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(Br,i,e);if(y=(p=(n-(c=Nr(n,0)))*v[0]+n*v[1])+(s=c*v[0]),gr.assign(y,zr,1,0),d=kr(zr[0]),h=kr(zr[1]),d>=qr){if(0!=(d-qr|h))return u*Xr*Xr;if(p+8008566259537294e-32>y-s)return u*Xr*Xr}else if((d&Er)>=1083231232){if(0!=(d-3230714880|h))return u*Yr*Yr;if(p<=y-s)return u*Yr*Yr}return y=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Er|0)>>20)-J|0,c=0,s>1071644672&&(i=Y(0,((c=r+(Zr>>l+1)>>>0)&~(Rr>>(l=((c&Er)>>20)-J|0)))>>>0),c=(c&Rr|Zr)>>20-l>>>0,r<0&&(c=-c),n-=i),r=kr(r=R(f=1-((f=(a=.6931471824645996*(i=Nr(i=e+n,0)))+(o=(e-(i-n))*Lr+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Cr(f,c):Y(f,r)}(d,s,p),u*y}function Jr(r,n,e){return l(r)||l(n)||l(e)||n<=0||e<=0?NaN:r<0?0:-nr(-Dr(r/e,n))}function Kr(r){return function(){return r}}function Qr(r,n,e){f(r,n,{configurable:!1,enumerable:!1,get:e})}function rn(r){return"number"==typeof r}s(Jr,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Kr(NaN):function(e){return l(e)?NaN:e<0?0:-nr(-Dr(e/n,r))}}));var nn=B.prototype.toString,en=v();function tn(r){return"object"==typeof r&&(r instanceof B||(en?function(r){try{return nn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function an(r){return rn(r)||tn(r)}function on(r){return rn(r)&&r>0}function un(r){return tn(r)&&r.valueOf()>0}function fn(r){return on(r)||un(r)}s(an,"isPrimitive",rn),s(an,"isObject",tn),s(fn,"isPrimitive",on),s(fn,"isObject",un);var cn=.6931471803691238,sn=1.9082149292705877e-10,ln=1048575;function pn(r){var n,e,t,i,a,o,u,f,c,s,p,v;return 0===r?D:l(r)||r<0?NaN:(a=0,(e=R(r))<1048576&&(a-=54,e=R(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-J|0,a+=(f=614244+(e&=ln)&1048576|0)>>20|0,u=(r=Y(r,e|1072693248^f))-1,(ln&2+e)<3?0===u?0===a?0:a*cn+a*sn:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*cn-(o-a*sn-u)):(f=e-398458|0,c=440401-e|0,i=(p=(v=(s=u/(2+u))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),t=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*cn-(n-(s*(n+o)+a*sn)-u)):0===a?u-s*(u-o):a*cn-(s*(u-o)-a*sn-u))))}var vn=.5772156649015329;function yn(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:vn*(1-1/r)+pn(n/r)+1}function dn(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var hn=-.16666666666666632;function gn(r,n){var e,t,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===n?r+t*(hn+i*e):r-(i*(.5*n-t*e)-n-t*hn)}var bn=!0===H?0:1,wn=new j(1),mn=new A(wn.buffer);function Nn(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var kn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],An=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],_n=16777216,En=5.960464477539063e-8,Sn=Nn(20),Un=Nn(20),jn=Nn(20),In=Nn(20);function xn(r,n,e,t,i,a,o,u,f){var c,s,l,p,v,y,d,h,g;for(p=a,g=t[e],h=e,v=0;h>0;v++)s=En*g|0,In[v]=g-_n*s|0,g=t[h-1]+s,h-=1;if(g=Cr(g,i),g-=8*er(.125*g),g-=d=0|g,l=0,i>0?(d+=v=In[e-1]>>24-i,In[e-1]-=v<<24-i,l=In[e-1]>>23-i):0===i?l=In[e-1]>>23:g>=.5&&(l=2),l>0){for(d+=1,c=0,v=0;v<e;v++)h=In[v],0===c?0!==h&&(c=1,In[v]=16777216-h):In[v]=16777215-h;if(i>0)switch(i){case 1:In[e-1]&=8388607;break;case 2:In[e-1]&=4194303}2===l&&(g=1-g,0!==c&&(g-=Cr(1,i)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=In[v];if(0===h){for(y=1;0===In[a-y];y++);for(v=e+1;v<=e+y;v++){for(f[u+v]=kn[o+v],s=0,h=0;h<=u;h++)s+=r[h]*f[u+(v-h)];t[v]=s}return xn(r,n,e+=y,t,i,a,o,u,f)}}if(0===g)for(e-=1,i-=24;0===In[e];)e-=1,i-=24;else(g=Cr(g,-i))>=_n?(s=En*g|0,In[e]=g-_n*s|0,i+=24,In[e+=1]=s):In[e]=0|g;for(s=Cr(1,i),v=e;v>=0;v--)t[v]=s*In[v],s*=En;for(v=e;v>=0;v--){for(s=0,y=0;y<=p&&y<=e-v;y++)s+=An[y]*t[v+y];jn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=jn[v];for(n[0]=0===l?s:-s,s=jn[0]-s,v=1;v<=e;v++)s+=jn[v];return n[1]=0===l?s:-s,7&d}function Tn(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Sn[f]=c<0?0:kn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Sn[o+(f-c)];Un[f]=i}return xn(r,n,4,Un,u,4,a,o,Sn)}var Fn=Math.round;function Vn(r,n,e){var t,i,a,o,u;return a=r-1.5707963267341256*(t=Fn(.6366197723675814*r)),o=6077100506506192e-26*t,u=n>>20|0,e[0]=a-o,u-(R(e[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),e[0]=a-o,u-(R(e[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var On=1.5707963267341256,$n=6077100506506192e-26,Gn=2*$n,Pn=3*$n,Wn=4*$n,Hn=[0,0,0],Mn=[0,0];function Cn(r,n){var e,t,i,a,o,u,f;if((i=2147483647&R(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Vn(r,i,n):i<=1073928572?r>0?(f=r-On,n[0]=f-$n,n[1]=f-n[0]-$n,1):(f=r+On,n[0]=f+$n,n[1]=f-n[0]+$n,-1):r>0?(f=r-2*On,n[0]=f-Gn,n[1]=f-n[0]-Gn,2):(f=r+2*On,n[0]=f+Gn,n[1]=f-n[0]+Gn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Vn(r,i,n):r>0?(f=r-3*On,n[0]=f-Pn,n[1]=f-n[0]-Pn,3):(f=r+3*On,n[0]=f+Pn,n[1]=f-n[0]+Pn,-3):1075388923===i?Vn(r,i,n):r>0?(f=r-4*On,n[0]=f-Wn,n[1]=f-n[0]-Wn,4):(f=r+4*On,n[0]=f+Wn,n[1]=f-n[0]+Wn,-4);if(i<1094263291)return Vn(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return wn[0]=r,mn[bn]}(r),f=Tr(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)Hn[o]=0|f,f=16777216*(f-Hn[o]);for(Hn[2]=f,a=3;0===Hn[a-1];)a-=1;return u=Tn(Hn,Mn,t,a),r<0?(n[0]=-Mn[0],n[1]=-Mn[1],-u):(n[0]=Mn[0],n[1]=Mn[1],u)}var Ln=[0,0],Rn=3.141592653589793,Zn=Math.ceil;function qn(r){return r<0?Zn(r):er(r)}var Xn=1.4426950408889634,Yn=1/(1<<28);function zn(r){var n;return l(r)||r===z?r:r===D?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Yn?1+r:function(r,n,e){var t,i,a,o;return Cr(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(n=qn(r<0?Xn*r-.5:Xn*r+.5)),1.9082149292705877e-10*n,n)}function Bn(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=zn(r),2.5066282746310007*(e=r>143.01608?(t=Dr(r,.5*r-.25))*(t/e):Dr(r,r-.5)/e)*n}function Dn(r,n){return n/((1+vn*r)*r)}function Jn(r){var n,e,t,i;if(tr(r)&&r<0||r===D||l(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===D}(r)?D:z;if(r>171.61447887182297)return z;if(r<-170.5674972726612)return 0;if((e=sr(r))>33)return r>=0?Bn(r):(n=0==(1&(t=er(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=R(r),(n&=2147483647)<=1072243195)return n<1045430272?r:gn(r,0);if(n>=2146435072)return NaN;switch(3&Cn(r,Ln)){case 0:return gn(Ln[0],Ln[1]);case 1:return dn(Ln[0],Ln[1]);case 2:return-gn(Ln[0],Ln[1]);default:return-dn(Ln[0],Ln[1])}}(Rn*i),n*Rn/(sr(i)*Bn(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Dn(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Dn(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}function Kn(r,n){var e,t,i,a,o;return l(r)||l(n)||r<=0||n<=0?NaN:(o=Jn(1+1/r),a=Jn(1+2/r),i=Jn(1+3/r),t=Jn(1+4/r),e=-6*Dr(o,4)+12*o*o*a-3*a*a-4*o*i+t,e/=Dr(a-o*o,2))}function Qn(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:n*Jn(1+1/r)}function re(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:n*Dr(Lr,1/r)}function ne(r,n){return l(r)||l(n)||r<=0||n<=0?NaN:r<=1?0:n*Dr((r-1)/r,1/r)}function ee(r,n){var e;return l(r)||l(n)||r<=0||n<=0?NaN:(e=Qn(r,n),n*n*Jn(1+2/r)-e*e)}function te(r,n){var e,t,i,a;return l(r)||l(n)||r<=0||n<=0?NaN:(a=Qn(r,n),e=ee(r,n),t=cr(e),i=Jn(1+3/r)*Dr(n,3),i-=3*a*e+Dr(a,3),i/=Dr(t,3))}function ie(r,n){var e;return l(r)||l(n)||r<=0||n<=0?NaN:(e=Jn(1+1/r),n*cr(Jn(1+2/r)-e*e))}var ae=.6931471803691238,oe=1.9082149292705877e-10;function ue(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||l(r))return NaN;if(-1===r)return D;if(r===z)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(t<9007199254740992?(a=(s=((e=R(c=1+r))>>20)-J)>0?1-(c-r):r-(c-1),a/=c):(s=((e=R(c=r))>>20)-J,a=0),(e&=1048575)<434334?c=Y(c,1072693248|e):(s+=1,c=Y(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*ae+(a+=s*oe):s*ae-((f=n*(1-.6666666666666666*i))-(s*oe+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*ae-(n-(o*(n+f)+(s*oe+a))-i))}var fe=-.6931471805599453;function ce(r,n,e){var t;return l(n)||l(e)||n<=0||e<=0?NaN:r<0?D:(t=-Dr(r/e,n))<fe?ue(-zn(t)):pn(-nr(t))}function se(r,n,e){var t;return l(n)||l(e)||n<=0||e<=0?NaN:r<0||r===z||r===D?D:0===r?1===n?pn(n/e):D:(t=r/e,pn(n/e)+(n-1)*pn(t)-Dr(t,n))}s(ce,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Kr(NaN):function(e){var t;return l(e)?NaN:e<0?D:(t=-Dr(e/n,r))<fe?ue(-zn(t)):pn(-nr(t))}})),s(se,"factory",(function(r,n){var e;return l(r)||l(n)||r<=0||n<=0?Kr(NaN):(e=pn(r/n),function(t){var i;return t<0||t===z||t===D?D:0===t?1===r?pn(r/n):D:e+(r-1)*pn(i=t/n)-Dr(i,r)})}));var le=2220446049250313e-31;function pe(r,n,e){var t,i,a,o;if(l(r)||l(n)||l(e)||n<=0||e<=0)return NaN;i=1,a=1,o=0;do{i+=t=0==(a*=r*e/(o+=1))?0:a*Jn(1+o/n)}while(t/i>le);return i}function ve(r,n,e){var t;return l(n)||l(e)||n<=0||e<=0?NaN:r<0||r===z||r===D?0:0===r?1===n?n/e:0:n/e*Dr(t=r/e,n-1)*zn(-Dr(t,n))}function ye(r,n,e){return l(n)||l(e)||l(r)||n<=0||e<=0||r<0||r>1?NaN:e*Dr(-pn(1-r),1/n)}function de(r){return"number"==typeof r}function he(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function ge(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+he(i):he(i)+r,t&&(r="-"+r)),r}s(pe,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Kr(NaN):function(e){var t,i,a,o;if(l(e))return NaN;i=1,a=1,o=0;do{t=0==(a*=e*n/(o+=1))?0:a*Jn(1+o/r),i+=t}while(t/i>le);return i}})),s(ve,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Kr(NaN):function(e){var t,i;return e<0||e===z||e===D?0:0===e?1===r?r/n:0:(i=Dr(t=e/n,r-1),r/n*i*zn(-Dr(t,r)))}})),s(ye,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Kr(NaN):function(e){return l(e)||e<0||e>1?NaN:n*Dr(-pn(1-e),1/r)}}));var be=String.prototype.toLowerCase,we=String.prototype.toUpperCase;function me(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!de(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=ge(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=ge(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===we.call(r.specifier)?we.call(e):be.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Ne(r){return"string"==typeof r}var ke=Math.abs,Ae=String.prototype.toLowerCase,_e=String.prototype.toUpperCase,Ee=String.prototype.replace,Se=/e\+(\d)$/,Ue=/e-(\d)$/,je=/^(\d+)$/,Ie=/^(\d+)e/,xe=/\.0$/,Te=/\.0*e/,Fe=/(\..*[^0])0*e/;function Ve(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!de(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":ke(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=Ee.call(e,Fe,"$1e"),e=Ee.call(e,Te,"e"),e=Ee.call(e,xe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Ee.call(e,Se,"e+0$1"),e=Ee.call(e,Ue,"e-0$1"),r.alternate&&(e=Ee.call(e,je,"$1."),e=Ee.call(e,Ie,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===_e.call(r.specifier)?_e.call(e):Ae.call(e)}function Oe(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function $e(r,n,e){var t=n-r.length;return t<0?r:r=e?r+Oe(t):Oe(t)+r}var Ge=String.fromCharCode,Pe=isNaN,We=Array.isArray;function He(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Me(r){var n,e,t,i,a,o,u,f,c;if(!We(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Ne(t=r[f]))o+=t;else{if(n=void 0!==t.precision,!(t=He(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),e=t.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Pe(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Pe(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=me(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!Pe(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Pe(a)?String(t.arg):Ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=Ve(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ge(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=$e(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Ce=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Le(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Re(r){var n,e,t,i;for(e=[],i=0,t=Ce.exec(r);t;)(n=r.slice(i,Ce.lastIndex-t[0].length)).length&&e.push(n),e.push(Le(t)),i=Ce.lastIndex,t=Ce.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function Ze(r){return"string"==typeof r}function qe(r){var n,e,t;if(!Ze(r))throw new TypeError(qe("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Re(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return Me.apply(null,e)}function Xe(){var r,n;if(!(this instanceof Xe))return 0===arguments.length?new Xe:new Xe(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!on(n=arguments[0]))throw new TypeError(qe("invalid argument. Shape parameter must be a positive number. Value: `%s`.",n));if(!on(r))throw new TypeError(qe("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=1,r=1;return f(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!on(r))throw new TypeError(qe("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),f(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!on(n))throw new TypeError(qe("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}Qr(Xe.prototype,"entropy",(function(){return yn(this.k,this.lambda)})),Qr(Xe.prototype,"kurtosis",(function(){return Kn(this.k,this.lambda)})),Qr(Xe.prototype,"mean",(function(){return Qn(this.k,this.lambda)})),Qr(Xe.prototype,"median",(function(){return re(this.k,this.lambda)})),Qr(Xe.prototype,"mode",(function(){return ne(this.k,this.lambda)})),Qr(Xe.prototype,"skewness",(function(){return te(this.k,this.lambda)})),Qr(Xe.prototype,"stdev",(function(){return ie(this.k,this.lambda)})),Qr(Xe.prototype,"variance",(function(){return ee(this.k,this.lambda)})),s(Xe.prototype,"cdf",(function(r){return Jr(r,this.k,this.lambda)})),s(Xe.prototype,"logcdf",(function(r){return ce(r,this.k,this.lambda)})),s(Xe.prototype,"logpdf",(function(r){return se(r,this.k,this.lambda)})),s(Xe.prototype,"mgf",(function(r){return pe(r,this.k,this.lambda)})),s(Xe.prototype,"pdf",(function(r){return ve(r,this.k,this.lambda)})),s(Xe.prototype,"quantile",(function(r){return ye(r,this.k,this.lambda)}));var Ye={};return c(Ye,"cdf",Jr),c(Ye,"Weibull",Xe),c(Ye,"entropy",yn),c(Ye,"kurtosis",Kn),c(Ye,"logcdf",ce),c(Ye,"logpdf",se),c(Ye,"mean",Qn),c(Ye,"median",re),c(Ye,"mgf",pe),c(Ye,"mode",ne),c(Ye,"pdf",ve),c(Ye,"quantile",ye),c(Ye,"skewness",te),c(Ye,"stdev",ie),c(Ye,"variance",ee),Ye},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).weibull=n();
//# sourceMappingURL=browser.js.map
