import{t as B,e as N,c as E,n as X}from"../chunks/DNu3uh7J.js";import{i as ne}from"../chunks/J8LIJM8N.js";import{c as j,p as T,g as pe,n as ge,h as be,K as Ce,A as I,T as me,M as ke,N as F,s as Y,d as J,e as we,O as le,o as oe,P as ye,l as re,ac as ce,a0 as R,am as Q,an as O,t as ee,ao as _e,ap as xe,aq as qe,k as Me,ar as Ie,as as Ae,at as Ee,au as Le,a as Te,q as ve,G as w,I as k,J as A,u as de,E as te,F as W,av as z,a5 as Ve,X as L}from"../chunks/Civgxf3a.js";import{p as D,i as U}from"../chunks/Djy73Tfv.js";import{s as K}from"../chunks/CpRrfZy6.js";function ae(a,e){return e}function Se(a,e,t,o){for(var d=[],n=e.length,u=0;u<n;u++)qe(e[u].e,d,!0);var m=n>0&&d.length===0&&t!==null;if(m){var b=t.parentNode;Me(b),b.append(t),o.clear(),V(a,e[0].prev,e[n-1].next)}Ie(d,()=>{for(var g=0;g<n;g++){var s=e[g];m||(o.delete(s.k),V(a,s.prev,s.next)),Ae(s.e,!m)}})}function se(a,e,t,o,d,n=null){var u=a,m={flags:e,items:new Map,first:null};{var b=a;u=T?j(pe(b)):b.appendChild(ge())}T&&be();var g=null,s=!1,f=me(()=>{var i=t();return ce(i)?i:i==null?[]:re(i)});Ce(()=>{var i=I(f),c=i.length;if(s&&c===0)return;s=c===0;let v=!1;if(T){var q=u.data===ke;q!==(c===0)&&(u=F(),j(u),Y(!1),v=!0)}if(T){for(var y=null,r,C=0;C<c;C++){if(J.nodeType===8&&J.data===we){u=J,v=!0,Y(!1);break}var l=i[C],h=o(l,C);r=ue(J,m,y,null,l,h,C,d,e,t),m.items.set(h,r),y=r}c>0&&j(F())}T||Ne(i,m,u,d,e,o,t),n!==null&&(c===0?g?le(g):g=oe(()=>n(u)):g!==null&&ye(g,()=>{g=null})),v&&Y(!0),I(f)}),T&&(u=J)}function Ne(a,e,t,o,d,n,u){var m=a.length,b=e.items,g=e.first,s=g,f,i=null,c=[],v=[],q,y,r,C;for(C=0;C<m;C+=1){if(q=a[C],y=n(q,C),r=b.get(y),r===void 0){var l=s?s.e.nodes_start:t;i=ue(l,e,i,i===null?e.first:i.next,q,y,C,o,d,u),b.set(y,i),c=[],v=[],s=i.next;continue}if(Be(r,q,C),(r.e.f&O)!==0&&le(r.e),r!==s){if(f!==void 0&&f.has(r)){if(c.length<v.length){var h=v[0],p;i=h.prev;var x=c[0],_=c[c.length-1];for(p=0;p<c.length;p+=1)ie(c[p],h,t);for(p=0;p<v.length;p+=1)f.delete(v[p]);V(e,x.prev,_.next),V(e,i,x),V(e,_,h),s=h,i=_,C-=1,c=[],v=[]}else f.delete(r),ie(r,s,t),V(e,r.prev,r.next),V(e,r,i===null?e.first:i.next),V(e,i,r),i=r;continue}for(c=[],v=[];s!==null&&s.k!==y;)(s.e.f&O)===0&&(f??(f=new Set)).add(s),v.push(s),s=s.next;if(s===null)continue;r=s}c.push(r),i=r,s=r.next}if(s!==null||f!==void 0){for(var M=f===void 0?[]:re(f);s!==null;)(s.e.f&O)===0&&M.push(s),s=s.next;var S=M.length;if(S>0){var G=m===0?t:null;Se(e,M,G,b)}}ee.first=e.first&&e.first.e,ee.last=i&&i.e}function Be(a,e,t,o){xe(a.v,e),a.i=t}function ue(a,e,t,o,d,n,u,m,b,g){var s=(b&Ee)!==0,f=(b&Le)===0,i=s?f?R(d):Q(d):d,c=(b&_e)===0?u:Q(u),v={i:c,v:i,k:n,a:null,e:null,prev:t,next:o};try{return v.e=oe(()=>m(a,i,c,g),T),v.e.prev=t&&t.e,v.e.next=o&&o.e,t===null?e.first=v:(t.next=v,t.e.next=v.e),o!==null&&(o.prev=v,o.e.prev=v.e),v}finally{}}function ie(a,e,t){for(var o=a.next?a.next.e.nodes_start:t,d=e?e.e.nodes_start:t,n=a.e.nodes_start;n!==o;){var u=Te(n);d.before(n),n=u}}function V(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Pe(a,e){return a==null?null:String(a)}function $(a,e,t,o){var d=a.__style;if(T||d!==e){var n=Pe(e);(!T||n!==a.getAttribute("style"))&&(n==null?a.removeAttribute("style"):a.style.cssText=n),a.__style=e}return o}function Je(a){return function(...e){var t=e[0];return t.stopPropagation(),a==null?void 0:a.apply(this,e)}}function Re(a,e){var n;var t=(n=a.$$events)==null?void 0:n[e.type],o=ce(t)?t.slice():t==null?[]:[t];for(var d of o)d.call(this,e)}var He=B('<h2 class="scanning-text svelte-ciax2i">VIBE SCANNING IN PROGRESS...</h2> <div class="progress-container svelte-ciax2i"><div class="progress-bar svelte-ciax2i"></div></div> <p class="scanning-details svelte-ciax2i"> </p>',1),We=B('<span class="emoji svelte-ciax2i"> </span>'),De=B(`<div class="emoji-rain svelte-ciax2i"></div> <h2 class="big-text wobble svelte-ciax2i">VIBE CHECK PASSED!</h2> <div class="certificate svelte-ciax2i"><p class="svelte-ciax2i">This certifies that you are</p> <h3 class="super-vibe svelte-ciax2i">SUPER VIBEY</h3> <p class="small-text svelte-ciax2i">Keep on vibin'</p></div> <div class="dad-joke-container svelte-ciax2i"><div class="joke-header svelte-ciax2i"><p class="dad-joke svelte-ciax2i"> </p> <button class="refresh-button svelte-ciax2i" title="Get another joke" aria-label="Get another joke"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="svelte-ciax2i"><path d="M23 4v6h-6" class="svelte-ciax2i"></path><path d="M1 20v-6h6" class="svelte-ciax2i"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" class="svelte-ciax2i"></path><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" class="svelte-ciax2i"></path></svg></button></div> <p class="small-text svelte-ciax2i">- Dad Bot</p></div> <button class="fun-button close-button svelte-ciax2i"><span class="button-text svelte-ciax2i">Close</span></button>`,1),ze=B('<div class="confetti svelte-ciax2i"></div>'),Ge=B('<div class="confetti-container svelte-ciax2i"></div>'),Ze=B('<div class="modal-overlay svelte-ciax2i" role="button" tabindex="0" aria-label="Close modal overlay"><div class="modal svelte-ciax2i" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-content svelte-ciax2i"><!></div></div> <!></div>');function je(a,e){ve(e,!1);let t=D(e,"vibeCheckProgress",8,0),o=D(e,"confettiActive",8,!1),d=D(e,"currentJoke",8,""),n=D(e,"closeModal",8);function u(){const l=new CustomEvent("newJoke");window.dispatchEvent(l)}const m=[...Array(10).keys()],b=[...Array(50).keys()],g=["😎","🔥","✨","🚀","🤣","👑"],s=["#fd6c6c","#5bff7f","#ffff5b","#5b8fff","#ff5bff"];ne();var f=Ze(),i=w(f),c=w(i),v=w(c);{var q=l=>{var h=He(),p=A(te(h),2),x=w(p);k(p);var _=A(p,2),M=w(_);k(_),W(()=>{$(x,`width: ${t()??""}%`),K(M,`Analyzing swagger levels... ${t()??""}%`)}),E(l,h)},y=l=>{var h=De(),p=te(h);se(p,5,()=>m,ae,(Z,P)=>{var H=We(),fe=w(H,!0);k(H),W(()=>{$(H,`animation-delay: ${I(P)*.2}s;`),K(fe,g[I(P)%g.length])}),E(Z,H)}),k(p);var x=A(p,6),_=w(x),M=w(_),S=w(M);k(M);var G=A(M,2);k(_),z(2),k(x);var he=A(x,2);W(()=>K(S,`"${d()??""}"`)),N("click",G,u),N("click",he,function(...Z){var P;(P=n())==null||P.apply(this,Z)}),E(l,h)};U(v,l=>{t()<100?l(q):l(y,!1)})}k(c),k(i);var r=A(i,2);{var C=l=>{var h=Ge();se(h,5,()=>b,ae,(p,x)=>{var _=ze();W(()=>$(_,`
            left: ${Math.random()*100}%; 
            animation-delay: ${Math.random()*3}s;
            background-color: ${s[I(x)%s.length]??""};
            width: ${5+Math.random()*10}px;
            height: ${5+Math.random()*10}px;
          `)),E(p,_)}),k(h),E(l,h)};U(r,l=>{o()&&l(C)})}k(f),N("click",i,Je(function(l){Re.call(this,e,l)})),N("keydown",i,l=>l.stopPropagation()),N("click",f,function(...l){var h;(h=n())==null||h.apply(this,l)}),N("keydown",f,l=>l.key==="Escape"&&n()()),E(a,f),de()}var Ye=X('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8lizc"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg>');function Oe(a){var e=Ye();E(a,e)}var Ke=X('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-k2o9w6"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path></svg>');function $e(a){var e=Ke();E(a,e)}var Ue=X('<svg width="256px" height="208px" viewBox="0 0 256 208" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" class="svelte-17vckr5"><title>GitHub Copilot</title><g><path d="M205.28,31.36 C219.376,46.24 225.296,66.56 227.792,95.04 C234.417867,95.04 240.5968,96.5093333 244.768,102.192 L252.56,112.752 C254.8,115.792 256,119.424 256,123.2 L256,151.888 C255.992,155.592267 254.1568,159.203467 251.168,161.392 C215.885333,187.222133 172.3496,208 128,208 C78.9344,208 29.8098667,179.726667 4.832,161.392 C1.84330667,159.203467 0.00722666667,155.592267 0,151.888 L0,123.2 C0,119.424 1.2,115.776 3.424,112.736 L11.216,102.192 C15.3891733,96.5349333 21.5953067,95.04 28.208,95.04 C30.704,66.56 36.608,46.24 50.72,31.36 C77.3312,3.1648 112.56728,0.06016 127.552142,0.00088672 L128,0 C142.72,0 178.4,2.88 205.28,31.36 Z M128.016,78.736 C124.976,78.736 121.472,78.912 117.744,79.28 C116.432,84.176 114.496,88.592 111.664,91.408 C100.464,102.608 86.96,104.336 79.728,104.336 C72.9258667,104.336 65.8005333,102.915733 59.984,99.248 C54.4816,101.056 49.1978667,103.6632 48.848,110.16 C48.2621333,122.440533 48.2112,134.709333 48.1602667,146.984 C48.1336,153.144533 48.1093333,159.3064 48.016,165.472 C48.04,169.050667 50.1978667,172.3752 53.456,173.856 C79.936,185.92 104.976,192 128.016,192 C151.024,192 176.064,185.92 202.528,173.856 C205.786133,172.3752 207.9432,169.050667 207.968,165.472 C208.285333,147.0536 208.029867,128.560267 207.152,110.16 L207.168,110.16 C206.826133,103.625867 201.520267,101.061867 196,99.248 C190.179467,102.899733 183.072533,104.336 176.272,104.336 C169.04,104.336 155.552,102.608 144.336,91.408 C141.504,88.592 139.568,84.176 138.256,79.28 C134.853333,78.9338667 131.436,78.7525333 128.016,78.736 Z M101.074933,122.666667 C106.8232,122.666667 111.4832,127.326667 111.4832,133.074933 L111.4832,152.2584 C111.4832,158.006667 106.8232,162.666667 101.074933,162.666667 C95.3266667,162.666667 90.6666667,158.006667 90.6666667,152.2584 L90.6666667,133.074933 C90.6666667,127.326667 95.3266667,122.666667 101.074933,122.666667 Z M154.408267,122.666667 C160.156533,122.666667 164.816533,127.326667 164.816533,133.074933 L164.816533,133.074933 L164.816533,152.2584 C164.816533,158.006667 160.156533,162.666667 154.408267,162.666667 C148.66,162.666667 144,158.006667 144,152.2584 L144,152.2584 L144,133.074933 C144,127.326667 148.66,122.666667 154.408267,122.666667 Z M81.44,28.32 C70.24,29.44 60.8,33.12 56,38.24 C45.6,49.6 47.84,78.4 53.76,84.48 C58.08,88.8 66.24,91.68 75.04,91.68 C81.76,91.68 94.56,90.24 105.12,79.52 C109.76,75.04 112.64,63.84 112.32,52.48 C112,43.36 109.44,35.84 105.6,32.64 C101.44,28.96 92,27.36 81.44,28.32 Z M150.4,32.64 C146.56,35.84 144,43.36 143.68,52.48 C143.36,63.84 146.24,75.04 150.88,79.52 C161.44,90.24 174.24,91.68 180.96,91.68 C189.76,91.68 197.92,88.8 202.24,84.48 C208.16,78.4 210.4,49.6 200,38.24 C195.2,33.12 185.76,29.44 174.56,28.32 C164,27.36 154.56,28.96 150.4,32.64 Z M128,56 C125.44,56 122.4,56.16 119.04,56.48 C119.36,58.24 119.52,60.16 119.68,62.24 C119.68,63.68 119.68,65.12 119.52,66.72 C122.72,66.4 125.44,66.4 128,66.4 C130.559733,66.4 133.28,66.4 136.48,66.72 C136.32,65.12 136.32,63.6802667 136.32,62.2402667 C136.48,60.1602667 136.64,58.24 136.96,56.48 C133.6,56.16 130.56,56 128,56 Z"></path></g></svg>');function Xe(a){var e=Ue();E(a,e)}var Fe=B(`<main class="svelte-1kq1thq"><div class="container svelte-1kq1thq"><h1 class="rainbow-header svelte-1kq1thq">Vibe Stack Developer</h1> <button class="vibe-button svelte-1kq1thq">Vibe Check Me</button> <h2 class="svelte-1kq1thq">What is Vibe Coding?</h2> <p class="svelte-1kq1thq"><strong class="svelte-1kq1thq">Vibe coding</strong> is the art of software development where your intuition and natural
      language guide the creation process more than rigid syntax and technical specifications.</p> <p class="svelte-1kq1thq">In the age of AI, coding is evolving from meticulously writing every line to expressing your
      intention and collaborating with AI to manifest it.</p> <p class="svelte-1kq1thq">Rather than obsessing over semicolons and brackets, vibe coding emphasizes communicating the
      essence of what you want to build. It's about setting the right tone, describing your vision
      clearly, and letting AI tools help translate your ideas into functional code.</p> <p class="svelte-1kq1thq">Vibe coding isn't about replacing traditional programming skills—it's about augmenting them
      with conversational approaches that make development more accessible and intuitive. It's
      coding by feel, by intention, by vibe.</p> <p class="svelte-1kq1thq"><em class="svelte-1kq1thq">Welcome to the future where building software is becoming as natural as having a
        conversation.</em></p> <h2 class="svelte-1kq1thq">Vibe Coder Tools</h2> <ul class="svelte-1kq1thq"><li class="svelte-1kq1thq"><!> MacBook Pro</li> <li class="svelte-1kq1thq"><!> Visual Studio Code</li> <li class="svelte-1kq1thq"><!> GitHub Copilot</li></ul> <!></div></main>`);function it(a,e){ve(e,!1);let t=R(!1),o=R(!1),d=R(0),n,u=R("");function m(){return i[Math.floor(Math.random()*i.length)]}function b(){L(u,m())}Ve(()=>(window.addEventListener("newJoke",b),()=>{window.removeEventListener("newJoke",b)}));function g(){L(d,0),L(t,!0),n=setInterval(()=>{L(d,I(d)+1),I(d)>=100&&(clearInterval(n),s())},20)}function s(){L(o,!0),L(u,m()),setTimeout(()=>{L(o,!1)},5e3)}function f(){L(t,!1),L(o,!1),clearInterval(n)}const i=["Why do programmers prefer dark mode? Because light attracts bugs!","I told my wife she was drawing her eyebrows too high. She looked surprised!","What do you call a fake noodle? An impasta!","Why don't scientists trust atoms? Because they make up everything!","How do you organize a space party? You planet!","Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!","What's the best thing about Switzerland? I don't know, but the flag is a big plus!","Why don't skeletons fight each other? They don't have the guts!","What do you call cheese that isn't yours? Nacho cheese!","I'm reading a book about anti-gravity. It's impossible to put down!","Why couldn't the bicycle stand up by itself? It was two tired!","Did you hear about the claustrophobic astronaut? He just needed a little space!","Why did the scarecrow win an award? Because he was outstanding in his field!","I would tell you a construction joke, but I'm still working on it!","Why did the coffee file a police report? It got mugged!"];ne();var c=Fe(),v=w(c),q=A(w(v),2),y=A(q,16),r=w(y),C=w(r);Oe(C),z(),k(r);var l=A(r,2),h=w(l);$e(h),z(),k(l);var p=A(l,2),x=w(p);Xe(x),z(),k(p),k(y);var _=A(y,2);{var M=S=>{je(S,{get vibeCheckProgress(){return I(d)},get confettiActive(){return I(o)},get currentJoke(){return I(u)},closeModal:f})};U(_,S=>{I(t)&&S(M)})}k(v),k(c),N("click",q,g),E(a,c),de()}export{it as component};
