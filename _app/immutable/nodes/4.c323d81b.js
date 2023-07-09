import{s as ee,c as ne,u as ae,g as re,d as oe,n as H}from"../chunks/scheduler.e108d1fd.js";import{S as te,i as se,g as b,s as P,m as J,h as v,j as M,c as A,n as K,f as h,k as d,a as j,y as _,o as O,d as k,t as D,z as le,x as N,A as I,r as V,u as z,v as q,w as x}from"../chunks/index.def5398c.js";function W(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const ce=a=>({}),X=a=>({});function Y(a,e,s){const t=a.slice();return t[6]=e[s],t}function Z(a){let e,s,t,o,i="/";return{c(){e=b("span"),s=J(a[0]),t=P(),o=b("span"),o.textContent=i,this.h()},l(l){e=v(l,"SPAN",{class:!0});var m=M(e);s=K(m,a[0]),m.forEach(h),t=A(l),o=v(l,"SPAN",{class:!0,["data-svelte-h"]:!0}),N(o)!=="svelte-1hr14pk"&&(o.textContent=i),this.h()},h(){d(e,"class","project-title-author"),d(o,"class","project-title-slash")},m(l,m){j(l,e,m),_(e,s),j(l,t,m),j(l,o,m)},p(l,m){m&1&&O(s,l[0])},d(l){l&&(h(e),h(t),h(o))}}}function y(a){let e,s=a[6]+"",t,o;return{c(){e=b("p"),t=J(s),this.h()},l(i){e=v(i,"P",{badge:!0,class:!0});var l=M(e);t=K(l,s),l.forEach(h),this.h()},h(){d(e,"badge",o=a[6]),d(e,"class","badge"),I(e,"badge-css",a[6]==="css"),I(e,"badge-js",a[6]==="js"),I(e,"badge-svelte",a[6]==="svelte"),I(e,"badge-java",a[6]==="java"),I(e,"badge-minecraft",a[6]==="minecraft")},m(i,l){j(i,e,l),_(e,t)},p(i,l){l&2&&s!==(s=i[6]+"")&&O(t,s),l&2&&o!==(o=i[6])&&d(e,"badge",o),l&2&&I(e,"badge-css",i[6]==="css"),l&2&&I(e,"badge-js",i[6]==="js"),l&2&&I(e,"badge-svelte",i[6]==="svelte"),l&2&&I(e,"badge-java",i[6]==="java"),l&2&&I(e,"badge-minecraft",i[6]==="minecraft")},d(i){i&&h(e)}}}function ie(a){let e,s,t,o,i,l,m,g,$,w,C,p=a[0]&&Z(a),E=W(a[1]),f=[];for(let c=0;c<E.length;c+=1)f[c]=y(Y(a,E,c));const R=a[5].description,u=ne(R,a,a[4],X);return{c(){e=b("article"),s=b("div"),t=b("h1"),p&&p.c(),o=P(),i=b("a"),l=J(a[2]),m=P(),g=b("div");for(let c=0;c<f.length;c+=1)f[c].c();$=P(),w=b("div"),u&&u.c(),this.h()},l(c){e=v(c,"ARTICLE",{class:!0});var r=M(e);s=v(r,"DIV",{class:!0});var n=M(s);t=v(n,"H1",{class:!0});var S=M(t);p&&p.l(S),o=A(S),i=v(S,"A",{href:!0,class:!0});var B=M(i);l=K(B,a[2]),B.forEach(h),S.forEach(h),m=A(n),g=v(n,"DIV",{class:!0});var F=M(g);for(let T=0;T<f.length;T+=1)f[T].l(F);F.forEach(h),n.forEach(h),$=A(r),w=v(r,"DIV",{class:!0});var G=M(w);u&&u.l(G),G.forEach(h),r.forEach(h),this.h()},h(){d(i,"href",a[3]),d(i,"class","project-title-name"),d(t,"class","project-title"),d(g,"class","project-badges"),d(s,"class","project-title-wrapper"),d(w,"class","project-content"),d(e,"class","project-card")},m(c,r){j(c,e,r),_(e,s),_(s,t),p&&p.m(t,null),_(t,o),_(t,i),_(i,l),_(s,m),_(s,g);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(g,null);_(e,$),_(e,w),u&&u.m(w,null),C=!0},p(c,[r]){if(c[0]?p?p.p(c,r):(p=Z(c),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!C||r&4)&&O(l,c[2]),(!C||r&8)&&d(i,"href",c[3]),r&2){E=W(c[1]);let n;for(n=0;n<E.length;n+=1){const S=Y(c,E,n);f[n]?f[n].p(S,r):(f[n]=y(S),f[n].c(),f[n].m(g,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=E.length}u&&u.p&&(!C||r&16)&&ae(u,R,c,c[4],C?oe(R,c[4],r,ce):re(c[4]),X)},i(c){C||(k(u,c),C=!0)},o(c){D(u,c),C=!1},d(c){c&&h(e),p&&p.d(),le(f,c),u&&u.d(c)}}}function fe(a,e,s){let{$$slots:t={},$$scope:o}=e,{author:i}=e,{badges:l=[]}=e,{name:m}=e,{url:g}=e;return a.$$set=$=>{"author"in $&&s(0,i=$.author),"badges"in $&&s(1,l=$.badges),"name"in $&&s(2,m=$.name),"url"in $&&s(3,g=$.url),"$$scope"in $&&s(4,o=$.$$scope)},[i,l,m,g,o,t]}class L extends te{constructor(e){super(),se(this,e,fe,ie,ee,{author:0,badges:1,name:2,url:3})}}function pe(a){let e,s="A simple note-taking application for the web.";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{slot:!0,["data-svelte-h"]:!0}),N(e)!=="svelte-1b89yqf"&&(e.textContent=s),this.h()},h(){d(e,"slot","description")},m(t,o){j(t,e,o)},p:H,d(t){t&&h(e)}}}function he(a){let e,s="My personal page.";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{slot:!0,["data-svelte-h"]:!0}),N(e)!=="svelte-1ogo1j2"&&(e.textContent=s),this.h()},h(){d(e,"slot","description")},m(t,o){j(t,e,o)},p:H,d(t){t&&h(e)}}}function ue(a){let e,s='A "more fun" web page, where I experiment with design and project ideas.';return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{slot:!0,["data-svelte-h"]:!0}),N(e)!=="svelte-wjd5fm"&&(e.textContent=s),this.h()},h(){d(e,"slot","description")},m(t,o){j(t,e,o)},p:H,d(t){t&&h(e)}}}function de(a){let e,s="A CSS theme designed around simplicity. Lead by my friend, I occasionally contribute :)";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{slot:!0,["data-svelte-h"]:!0}),N(e)!=="svelte-5yyw5y"&&(e.textContent=s),this.h()},h(){d(e,"slot","description")},m(t,o){j(t,e,o)},p:H,d(t){t&&h(e)}}}function me(a){let e,s="A Minecraft user interface library.";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{slot:!0,["data-svelte-h"]:!0}),N(e)!=="svelte-1mbmho8"&&(e.textContent=s),this.h()},h(){d(e,"slot","description")},m(t,o){j(t,e,o)},p:H,d(t){t&&h(e)}}}function ge(a){let e,s="A website which generates startup scripts for a Minecraft server.";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{slot:!0,["data-svelte-h"]:!0}),N(e)!=="svelte-sl3axz"&&(e.textContent=s),this.h()},h(){d(e,"slot","description")},m(t,o){j(t,e,o)},p:H,d(t){t&&h(e)}}}function $e(a){let e,s="A Minecraft minigame that's been developed off-and-on for the past 3-ish years.";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=v(t,"P",{slot:!0,["data-svelte-h"]:!0}),N(e)!=="svelte-wrkwyw"&&(e.textContent=s),this.h()},h(){d(e,"slot","description")},m(t,o){j(t,e,o)},p:H,d(t){t&&h(e)}}}function _e(a){let e,s,t,o,i,l,m,g,$,w,C,p,E,f,R,u,c;return s=new L({props:{author:"webcrawls",name:"pomo",badges:["svelte","js","css"],url:"https://github.com/webcrawls/pomo",$$slots:{description:[pe]},$$scope:{ctx:a}}}),o=new L({props:{name:"webcrawls.github.io",badges:["svelte","js","css"],url:"https://github.com/webcrawls/webcrawls.github.io",$$slots:{description:[he]},$$scope:{ctx:a}}}),l=new L({props:{name:"webcrawls.neocities.org",badges:["svelte","js","css","11ty"],url:"https://webcrawls.neocities.org",$$slots:{description:[ue]},$$scope:{ctx:a}}}),g=new L({props:{author:"apocrypha",name:"apocrypha.css",badges:["css"],url:"https://github.com/apocryphaCSS/apocrypha.css",$$slots:{description:[de]},$$scope:{ctx:a}}}),w=new L({props:{author:"incendo",name:"interfaces",badges:["minecraft","java"],url:"https://github.com/incendo/interfaces",$$slots:{description:[me]},$$scope:{ctx:a}}}),p=new L({props:{author:"startmc",name:"startmc.sh",badges:["minecraft","svelte","js","css"],url:"https://github.com/startmc/startmc.sh",$$slots:{description:[ge]},$$scope:{ctx:a}}}),f=new L({props:{author:"webcrawls",name:"bonk",badges:["minecraft","java","🎮"],url:"https://github.com/webcrawls/bonk",$$slots:{description:[$e]},$$scope:{ctx:a}}}),u=new L({props:{name:"RandomSpawnPlus",badges:["minecraft"],url:"https://www.spigotmc.org/resources/randomspawnplus-optimized-wild-and-random-spawn-1-8-x-1-15-x.69586/"}}),{c(){e=b("div"),V(s.$$.fragment),t=P(),V(o.$$.fragment),i=P(),V(l.$$.fragment),m=P(),V(g.$$.fragment),$=P(),V(w.$$.fragment),C=P(),V(p.$$.fragment),E=P(),V(f.$$.fragment),R=P(),V(u.$$.fragment),this.h()},l(r){e=v(r,"DIV",{class:!0});var n=M(e);z(s.$$.fragment,n),t=A(n),z(o.$$.fragment,n),i=A(n),z(l.$$.fragment,n),m=A(n),z(g.$$.fragment,n),$=A(n),z(w.$$.fragment,n),C=A(n),z(p.$$.fragment,n),E=A(n),z(f.$$.fragment,n),R=A(n),z(u.$$.fragment,n),n.forEach(h),this.h()},h(){d(e,"class","projects")},m(r,n){j(r,e,n),q(s,e,null),_(e,t),q(o,e,null),_(e,i),q(l,e,null),_(e,m),q(g,e,null),_(e,$),q(w,e,null),_(e,C),q(p,e,null),_(e,E),q(f,e,null),_(e,R),q(u,e,null),c=!0},p(r,[n]){const S={};n&1&&(S.$$scope={dirty:n,ctx:r}),s.$set(S);const B={};n&1&&(B.$$scope={dirty:n,ctx:r}),o.$set(B);const F={};n&1&&(F.$$scope={dirty:n,ctx:r}),l.$set(F);const G={};n&1&&(G.$$scope={dirty:n,ctx:r}),g.$set(G);const T={};n&1&&(T.$$scope={dirty:n,ctx:r}),w.$set(T);const Q={};n&1&&(Q.$$scope={dirty:n,ctx:r}),p.$set(Q);const U={};n&1&&(U.$$scope={dirty:n,ctx:r}),f.$set(U)},i(r){c||(k(s.$$.fragment,r),k(o.$$.fragment,r),k(l.$$.fragment,r),k(g.$$.fragment,r),k(w.$$.fragment,r),k(p.$$.fragment,r),k(f.$$.fragment,r),k(u.$$.fragment,r),c=!0)},o(r){D(s.$$.fragment,r),D(o.$$.fragment,r),D(l.$$.fragment,r),D(g.$$.fragment,r),D(w.$$.fragment,r),D(p.$$.fragment,r),D(f.$$.fragment,r),D(u.$$.fragment,r),c=!1},d(r){r&&h(e),x(s),x(o),x(l),x(g),x(w),x(p),x(f),x(u)}}}class we extends te{constructor(e){super(),se(this,e,null,_e,ee,{})}}export{we as component};
