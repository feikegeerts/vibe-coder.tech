import{t as d,e as u,c as h,n as f}from"../chunks/DNu3uh7J.js";import{i as v}from"../chunks/J8LIJM8N.js";import{p as x,h as y,G as p,I as w,q as _,a5 as k,E as b,u as T,X as c,a0 as A,A as g,J as E}from"../chunks/Civgxf3a.js";import{p as I,i as M}from"../chunks/Djy73Tfv.js";function z(o,r,e,i,a){var s;x&&y();var l=(s=r.$$slots)==null?void 0:s[e],t=!1;l===!0&&(l=r.children,t=!0),l===void 0||l(o,t?()=>i:i)}var B=f('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),C=f('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),S=d('<button aria-label="Toggle theme" class="theme-toggle svelte-1htrzdr"><!></button>');function q(o,r){let e=I(r,"theme",12,"light");function i(){e(e()==="light"?"dark":"light"),document.documentElement.setAttribute("data-theme",e()),localStorage.setItem("theme",e())}var a=S(),l=p(a);{var t=n=>{var m=B();h(n,m)},s=n=>{var m=C();h(n,m)};M(l,n=>{e()==="dark"?n(t):n(s,!1)})}w(a),u("click",a,i),h(o,a)}var G=d("<!> <!>",1);function F(o,r){_(r,!1);let e=A("light");k(()=>{const t=localStorage.getItem("theme");t?c(e,t):window.matchMedia("(prefers-color-scheme: dark)").matches&&c(e,"dark"),document.documentElement.setAttribute("data-theme",g(e))}),v();var i=G(),a=b(i);z(a,r,"default",{});var l=E(a,2);q(l,{get theme(){return g(e)},set theme(t){c(e,t)},$$legacy:!0}),h(o,i),T()}export{F as component};
