import{s as j,n as P}from"../chunks/scheduler.5eba7d9c.js";import{S as A,i as E,r as b,s as v,g as _,u as I,c as C,h as d,x,v as T,a as s,d as L,t as k,f as o,w as M}from"../chunks/index.dcd23784.js";import{P as q}from"../chunks/PageTitle.160c8a9d.js";function R(h){let e,m="about me ☁️";return{c(){e=_("h1"),e.textContent=m},l(l){e=d(l,"H1",{["data-svelte-h"]:!0}),x(e)!=="svelte-1ddeq0b"&&(e.textContent=m)},m(l,i){s(l,e,i)},p:P,d(l){l&&o(e)}}}function S(h){let e,m="discord: @webcrawls",l,i,c="mail: contact at kaden.🤫",r,p,$="the don: @kaden@torontodiy.xyz";return{c(){e=_("h3"),e.textContent=m,l=v(),i=_("h3"),i.textContent=c,r=v(),p=_("h3"),p.textContent=$},l(n){e=d(n,"H3",{["data-svelte-h"]:!0}),x(e)!=="svelte-mu3lue"&&(e.textContent=m),l=C(n),i=d(n,"H3",{["data-svelte-h"]:!0}),x(i)!=="svelte-119tsli"&&(i.textContent=c),r=C(n),p=d(n,"H3",{["data-svelte-h"]:!0}),x(p)!=="svelte-y99y8p"&&(p.textContent=$)},m(n,f){s(n,e,f),s(n,l,f),s(n,i,f),s(n,r,f),s(n,p,f)},p:P,d(n){n&&(o(e),o(l),o(i),o(r),o(p))}}}function z(h){let e,m,l,i=`<p>Hello! I&#39;m Kaden, or usually <b>@webcrawls</b> online.</p> <p>I&#39;m 19, from :ca:, and love all sorts of creative endeavours.</p> <p>I spend most of my time coding, and I&#39;m currently pursuing higher education as a software
		engineer.</p> <p>You can read about some of my projects <a href="/projects">here</a>.</p>`,c,r,p="~",$,n,f=`<p>If you&#39;re looking to contact me, send me a message one one of the following platforms. I&#39;ll do
		my best to respond quickly :)</p>`,g,u,y;return e=new q({props:{$$slots:{default:[R]},$$scope:{ctx:h}}}),u=new q({props:{$$slots:{default:[S]},$$scope:{ctx:h}}}),{c(){b(e.$$.fragment),m=v(),l=_("article"),l.innerHTML=i,c=v(),r=_("h1"),r.textContent=p,$=v(),n=_("article"),n.innerHTML=f,g=v(),b(u.$$.fragment)},l(t){I(e.$$.fragment,t),m=C(t),l=d(t,"ARTICLE",{["data-svelte-h"]:!0}),x(l)!=="svelte-1kna2l0"&&(l.innerHTML=i),c=C(t),r=d(t,"H1",{["data-svelte-h"]:!0}),x(r)!=="svelte-1xe3odg"&&(r.textContent=p),$=C(t),n=d(t,"ARTICLE",{["data-svelte-h"]:!0}),x(n)!=="svelte-12v8gy6"&&(n.innerHTML=f),g=C(t),I(u.$$.fragment,t)},m(t,a){T(e,t,a),s(t,m,a),s(t,l,a),s(t,c,a),s(t,r,a),s(t,$,a),s(t,n,a),s(t,g,a),T(u,t,a),y=!0},p(t,[a]){const H={};a&1&&(H.$$scope={dirty:a,ctx:t}),e.$set(H);const w={};a&1&&(w.$$scope={dirty:a,ctx:t}),u.$set(w)},i(t){y||(L(e.$$.fragment,t),L(u.$$.fragment,t),y=!0)},o(t){k(e.$$.fragment,t),k(u.$$.fragment,t),y=!1},d(t){t&&(o(m),o(l),o(c),o(r),o($),o(n),o(g)),M(e,t),M(u,t)}}}class D extends A{constructor(e){super(),E(this,e,null,z,j,{})}}export{D as component};
