import{c as Oe}from"../chunks/CodeTags.8f9c4c7f.js";import{g as Be,P as Ce}from"../chunks/ProjectCardsGrid.18dca715.js";import{S as pe,i as ge,s as he,k as u,q as _,l as f,m,r as y,h as i,b as Y,F as n,u as He,Y as R,o as qe,y as _e,z as ye,n as l,A as ve,g as J,d as K,B as xe,a as I,c as w,_ as Ae,f as Fe,v as Ge}from"../chunks/index.51b48ffe.js";async function Ue({params:a}){const e=await Oe.fetch(Be`*[_type == "project"] | order(sortOrder asc)`);return e?(console.log("Projects found"),console.log(e),{projects:e}):(console.log("No projects found"),{status:500,body:new Error("Internal Server Error in Sanity load function. No projects found")})}const lt=Object.freeze(Object.defineProperty({__proto__:null,load:Ue},Symbol.toStringTag,{value:"Module"}));function ze(a){let e;return{c(){e=_(" ")},l(t){e=y(t," ")},m(t,r){Y(t,e,r)},p:R,d(t){t&&i(e)}}}function Re(a){let e;return{c(){e=_(a[1])},l(t){e=y(t,a[1])},m(t,r){Y(t,e,r)},p(t,r){r&2&&He(e,t[1])},d(t){t&&i(e)}}}function Ye(a){let e,t;function r(c,d){return c[2]?Re:ze}let s=r(a),o=s(a);return{c(){e=u("span"),t=_(a[0]),o.c()},l(c){e=f(c,"SPAN",{});var d=m(e);t=y(d,a[0]),o.l(d),d.forEach(i)},m(c,d){Y(c,e,d),n(e,t),o.m(e,null)},p(c,[d]){d&1&&He(t,c[0]),s===(s=r(c))&&o?o.p(c,d):(o.d(1),o=s(c),o&&(o.c(),o.m(e,null)))},i:R,o:R,d(c){c&&i(e),o.d()}}}const me=150,Me=2e3,Je=75;let Ke=500;function Le(a,e,t){let{text:r=["Testing","Testing2","Testing3"]}=e,s="",o=0,c=0,d=!1,g="│",k=!0;qe(async()=>{T()});async function V(){d?(g=="│"?(t(1,g=""),t(2,k=!1)):(t(1,g="│"),t(2,k=!0)),setTimeout(V,Ke)):(t(1,g="│"),t(2,k=!0))}async function T(){c<r[o].length?(t(0,s+=r[o].charAt(c)),c++,setTimeout(T,me)):o<r.length-1?(d=!0,V(),await new Promise(v=>setTimeout(v,Me)),d=!1,await H(),o++,c=0,setTimeout(T,me)):(d=!0,V(),await new Promise(v=>setTimeout(v,Me)),d=!1,await H(),o=0,c=0,setTimeout(T,me))}async function H(){for(;s.length>0;)t(0,s=s.slice(0,-1)),await new Promise(v=>setTimeout(v,Je))}return a.$$set=v=>{"text"in v&&t(3,r=v.text)},[s,g,k,r]}class Qe extends pe{constructor(e){super(),ge(this,e,Le,Ye,he,{text:3})}}function We(a){let e,t,r;return t=new Qe({props:{text:a[0]}}),{c(){e=u("code"),_e(t.$$.fragment),this.h()},l(s){e=f(s,"CODE",{class:!0});var o=m(e);ye(t.$$.fragment,o),o.forEach(i),this.h()},h(){l(e,"class","code")},m(s,o){Y(s,e,o),ve(t,e,null),r=!0},p(s,[o]){const c={};o&1&&(c.text=s[0]),t.$set(c)},i(s){r||(J(t.$$.fragment,s),r=!0)},o(s){K(t.$$.fragment,s),r=!1},d(s){s&&i(e),xe(t)}}}function Xe(a,e,t){let{text:r=["Testing","Testing2","Testing3"]}=e;return a.$$set=s=>{"text"in s&&t(0,r=s.text)},[r]}class Ze extends pe{constructor(e){super(),ge(this,e,Xe,We,he,{text:0})}}function et(a){let e,t;return{c(){e=u("p"),t=_("Error: No projects found...")},l(r){e=f(r,"P",{});var s=m(e);t=y(s,"Error: No projects found..."),s.forEach(i)},m(r,s){Y(r,e,s),n(e,t)},p:R,i:R,o:R,d(r){r&&i(e)}}}function tt(a){let e,t;return e=new Ce({props:{projects:a[0].projects}}),{c(){_e(e.$$.fragment)},l(r){ye(e.$$.fragment,r)},m(r,s){ve(e,r,s),t=!0},p(r,s){const o={};s&1&&(o.projects=r[0].projects),e.$set(o)},i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){K(e.$$.fragment,r),t=!1},d(r){xe(e,r)}}}function rt(a){let e,t,r,s,o,c,d,g,k,V,T,H,v,Z,A,ee,O,te,re,B,M,se,ne,C,j,be,oe,q,S,Ie,ae,D,F,le,ce,G,ie,ue,E,U,fe,de,x,b,L;A=new Ze({props:{text:["Full Stack Developer","Informatics Student","Tech Enthusiast","E-Sports Player"]}});const we=[tt,et],P=[];function Ee(p,h){return p[0].projects&&p[0].projects.length?0:1}return x=Ee(a),b=P[x]=we[x](a),{c(){e=u("div"),t=u("div"),r=u("div"),s=u("div"),o=u("p"),c=_("Hi there 👋 I'm"),d=I(),g=u("h1"),k=_("Magnus "),V=u("br"),T=_(" Alexander "),H=u("br"),v=_(" Strømseng"),Z=I(),_e(A.$$.fragment),ee=I(),O=u("p"),te=_("I'm a Fullstack Developer and Informatics Student from Norway."),re=I(),B=u("a"),M=u("button"),se=_("Hire me"),ne=I(),C=u("div"),j=u("img"),oe=I(),q=u("div"),S=u("img"),ae=I(),D=u("div"),F=u("h3"),le=_("About Me"),ce=I(),G=u("p"),ie=_(`I'm a 21 year old Informatics student from Oslo, Norway. I'm currently in my 3rd year of my\r
			bachelor's degree at the Norwegian University of Technology and Science. I'm passionate about\r
			technology and I love to learn new things. I'm also a big fan of open source software and I\r
			try to contribute to open source projects whenever I can.`),ue=I(),E=u("div"),U=u("h3"),fe=_("Projects"),de=I(),b.c(),this.h()},l(p){e=f(p,"DIV",{class:!0});var h=m(e);t=f(h,"DIV",{class:!0});var $=m(t);r=f($,"DIV",{class:!0});var N=m(r);s=f(N,"DIV",{class:!0});var Q=m(s);o=f(Q,"P",{class:!0});var ke=m(o);c=y(ke,"Hi there 👋 I'm"),ke.forEach(i),d=w(Q),g=f(Q,"H1",{class:!0});var z=m(g);k=y(z,"Magnus "),V=f(z,"BR",{}),T=y(z," Alexander "),H=f(z,"BR",{}),v=y(z," Strømseng"),z.forEach(i),Q.forEach(i),Z=w(N),ye(A.$$.fragment,N),ee=w(N),O=f(N,"P",{class:!0});var Te=m(O);te=y(Te,"I'm a Fullstack Developer and Informatics Student from Norway."),Te.forEach(i),re=w(N),B=f(N,"A",{href:!0});var je=m(B);M=f(je,"BUTTON",{type:!0,class:!0});var Se=m(M);se=y(Se,"Hire me"),Se.forEach(i),je.forEach(i),N.forEach(i),ne=w($),C=f($,"DIV",{class:!0});var De=m(C);j=f(De,"IMG",{src:!0,class:!0,alt:!0,srcset:!0}),De.forEach(i),$.forEach(i),oe=w(h),q=f(h,"DIV",{class:!0});var Pe=m(q);S=f(Pe,"IMG",{src:!0,class:!0,alt:!0,srcset:!0}),Pe.forEach(i),ae=w(h),D=f(h,"DIV",{class:!0});var W=m(D);F=f(W,"H3",{class:!0});var $e=m(F);le=y($e,"About Me"),$e.forEach(i),ce=w(W),G=f(W,"P",{class:!0});var Ne=m(G);ie=y(Ne,`I'm a 21 year old Informatics student from Oslo, Norway. I'm currently in my 3rd year of my\r
			bachelor's degree at the Norwegian University of Technology and Science. I'm passionate about\r
			technology and I love to learn new things. I'm also a big fan of open source software and I\r
			try to contribute to open source projects whenever I can.`),Ne.forEach(i),W.forEach(i),ue=w(h),E=f(h,"DIV",{class:!0});var X=m(E);U=f(X,"H3",{class:!0});var Ve=m(U);fe=y(Ve,"Projects"),Ve.forEach(i),de=w(X),b.l(X),X.forEach(i),h.forEach(i),this.h()},h(){l(o,"class",""),l(g,"class","h1 text-6xl sm:text-7xl"),l(s,"class",""),l(O,"class","text-xl my-2 max-w-xs"),l(M,"type","button"),l(M,"class","btn variant-filled-primary"),l(B,"href","mailto: magnus.stromseng+work@gmail.com"),l(r,"class","w-full w-fit"),Ae(j.src,be="/images/v6.svg")||l(j,"src",be),l(j,"class","hidden lg:block"),l(j,"alt",""),l(j,"srcset",""),l(C,"class","w-[400px] invert justify-normal content-normal hidden lg:flex"),l(t,"class","mt-24 mb-44 sm:flex sm:flex-col-2"),Ae(S.src,Ie="/images/v6.svg")||l(S,"src",Ie),l(S,"class",""),l(S,"alt",""),l(S,"srcset",""),l(q,"class","w-full invert justify-normal content-normal flex lg:hidden"),l(F,"class","h3"),l(G,"class","text-l"),l(D,"class","w-full gap-2"),l(U,"class","h3"),l(E,"class","flex flex-col gap-2"),l(e,"class","px-5 sm:px-20 md:px-40 xl:px-76 2xl:px-96 flex flex-col gap-10")},m(p,h){Y(p,e,h),n(e,t),n(t,r),n(r,s),n(s,o),n(o,c),n(s,d),n(s,g),n(g,k),n(g,V),n(g,T),n(g,H),n(g,v),n(r,Z),ve(A,r,null),n(r,ee),n(r,O),n(O,te),n(r,re),n(r,B),n(B,M),n(M,se),n(t,ne),n(t,C),n(C,j),n(e,oe),n(e,q),n(q,S),n(e,ae),n(e,D),n(D,F),n(F,le),n(D,ce),n(D,G),n(G,ie),n(e,ue),n(e,E),n(E,U),n(U,fe),n(E,de),P[x].m(E,null),L=!0},p(p,[h]){let $=x;x=Ee(p),x===$?P[x].p(p,h):(Ge(),K(P[$],1,1,()=>{P[$]=null}),Fe(),b=P[x],b?b.p(p,h):(b=P[x]=we[x](p),b.c()),J(b,1),b.m(E,null))},i(p){L||(J(A.$$.fragment,p),J(b),L=!0)},o(p){K(A.$$.fragment,p),K(b),L=!1},d(p){p&&i(e),xe(A),P[x].d()}}}function st(a,e,t){let{data:r}=e;return a.$$set=s=>{"data"in s&&t(0,r=s.data)},a.$$.update=()=>{a.$$.dirty&1&&console.log("sanity data",r)},[r]}class ct extends pe{constructor(e){super(),ge(this,e,st,rt,he,{data:0})}}export{ct as component,lt as universal};