var sn=Array.isArray,fn=Array.prototype.indexOf,zn=Array.from,Jn=Object.defineProperty,V=Object.getOwnPropertyDescriptor,un=Object.getOwnPropertyDescriptors,on=Object.prototype,_n=Array.prototype,Pt=Object.getPrototypeOf,Rt=Object.isExtensible;const Qn=()=>{};function te(t){return t()}function St(t){for(var e=0;e<t.length;e++)t[e]()}const R=2,Ct=4,it=8,gt=16,k=32,Y=64,et=128,T=256,rt=512,g=1024,P=2048,H=4096,j=8192,ot=16384,cn=32768,Ft=65536,ne=1<<17,vn=1<<19,Mt=1<<20,pt=1<<21,G=Symbol("$state"),ee=Symbol("legacy props");function qt(t){return t===this.v}function hn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function jt(t){return!hn(t,this.v)}function pn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function dn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function wn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function yn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function re(){throw new Error("https://svelte.dev/e/hydration_failed")}function le(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function En(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function gn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function ae(){X=!0}const se=1,fe=2,ue=16,ie=1,oe=2,_e=4,ce=8,ve=16,he=1,pe=2,Tn="[",xn="[!",An="]",Lt={},y=Symbol();function bn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function Dt(t){p=t}function de(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};X&&!e&&(p.l={s:null,u:null,r1:[],r2:mt(!1)}),Nn(()=>{r.d=!0})}function we(t){const e=p;if(e!==null){const i=e.e;if(i!==null){var n=h,r=v;e.e=null;try{for(var l=0;l<i.length;l++){var a=i[l];st(a.effect),L(a.reaction),Zt(a.fn)}}finally{st(n),L(r)}}p=e.p,e.m=!0}return{}}function _t(){return!X||p!==null&&p.l===null}function q(t){if(typeof t!="object"||t===null||G in t)return t;const e=Pt(t);if(e!==on&&e!==_n)return t;var n=new Map,r=sn(t),l=I(0),a=v,i=u=>{var s=v;L(a);var f=u();return L(s),f};return r&&n.set("length",I(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&En();var _=n.get(s);return _===void 0?(_=i(()=>I(f.value)),n.set(s,_)):O(_,i(()=>q(f.value))),!0},deleteProperty(u,s){var f=n.get(s);if(f===void 0)s in u&&n.set(s,i(()=>I(y)));else{if(r&&typeof s=="string"){var _=n.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&O(_,o)}O(f,y),kt(l)}return!0},get(u,s,f){var x;if(s===G)return t;var _=n.get(s),o=s in u;if(_===void 0&&(!o||(x=V(u,s))!=null&&x.writable)&&(_=i(()=>I(q(o?u[s]:y))),n.set(s,_)),_!==void 0){var c=B(_);return c===y?void 0:c}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var _=n.get(s);_&&(f.value=B(_))}else if(f===void 0){var o=n.get(s),c=o==null?void 0:o.v;if(o!==void 0&&c!==y)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(u,s){var c;if(s===G)return!0;var f=n.get(s),_=f!==void 0&&f.v!==y||Reflect.has(u,s);if(f!==void 0||h!==null&&(!_||(c=V(u,s))!=null&&c.writable)){f===void 0&&(f=i(()=>I(_?q(u[s]):y)),n.set(s,f));var o=B(f);if(o===y)return!1}return _},set(u,s,f,_){var bt;var o=n.get(s),c=s in u;if(r&&s==="length")for(var x=f;x<o.v;x+=1){var Q=n.get(x+"");Q!==void 0?O(Q,y):x in u&&(Q=i(()=>I(y)),n.set(x+"",Q))}o===void 0?(!c||(bt=V(u,s))!=null&&bt.writable)&&(o=i(()=>I(void 0)),O(o,i(()=>q(f))),n.set(s,o)):(c=o.v!==y,O(o,i(()=>q(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(_,f),!c){if(r&&typeof s=="string"){var At=n.get("length"),ht=Number(s);Number.isInteger(ht)&&ht>=At.v&&O(At,ht+1)}kt(l)}return!0},ownKeys(u){B(l);var s=Reflect.ownKeys(u).filter(o=>{var c=n.get(o);return c===void 0||c.v!==y});for(var[f,_]of n)_.v!==y&&!(f in u)&&s.push(f);return s},setPrototypeOf(){gn()}})}function kt(t,e=1){O(t,t.v+e)}const Z=new Map;function mt(t,e){var n={f:0,v:t,reactions:null,equals:qt,rv:0,wv:0};return n}function I(t,e){const n=mt(t);return tn(n),n}function ye(t,e=!1){var r;const n=mt(t);return e||(n.equals=jt),X&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function O(t,e,n=!1){v!==null&&!b&&_t()&&(v.f&(R|gt))!==0&&!(w!=null&&w.includes(t))&&mn();let r=n?q(e):e;return Rn(t,r)}function Rn(t,e){if(!t.equals(e)){var n=t.v;z?Z.set(t,e):Z.set(t,n),t.v=e,t.wv=en(),Yt(t,P),_t()&&h!==null&&(h.f&g)!==0&&(h.f&(k|Y))===0&&(m===null?Yn([t]):m.push(t))}return e}function Yt(t,e){var n=t.reactions;if(n!==null)for(var r=_t(),l=n.length,a=0;a<l;a++){var i=n[a],u=i.f;(u&P)===0&&(!r&&i===h||(D(i,e),(u&(g|T))!==0&&((u&R)!==0?Yt(i,H):vt(i))))}}function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function Ee(t){C=t}let A;function $(t){if(t===null)throw Ht(),Lt;return A=t}function ge(){return $(M(A))}function me(t){if(C){if(M(A)!==null)throw Ht(),Lt;A=t}}function Te(t=1){if(C){for(var e=t,n=A;e--;)n=M(n);A=n}}function xe(){for(var t=0,e=A;;){if(e.nodeType===8){var n=e.data;if(n===An){if(t===0)return e;t-=1}else(n===Tn||n===xn)&&(t+=1)}var r=M(e);e.remove(),e=r}}var It,Dn,Ut,Bt;function Ae(){if(It===void 0){It=window,Dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Ut=V(e,"firstChild").get,Bt=V(e,"nextSibling").get,Rt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Rt(n)&&(n.__t=void 0)}}function dt(t=""){return document.createTextNode(t)}function wt(t){return Ut.call(t)}function M(t){return Bt.call(t)}function be(t,e){if(!C)return wt(t);var n=wt(A);if(n===null)n=A.appendChild(dt());else if(e&&n.nodeType!==3){var r=dt();return n==null||n.before(r),$(r),r}return $(n),n}function Re(t,e){if(!C){var n=wt(t);return n instanceof Comment&&n.data===""?M(n):n}return A}function De(t,e=1,n=!1){let r=C?A:t;for(var l;e--;)l=r,r=M(r);if(!C)return r;var a=r==null?void 0:r.nodeType;if(n&&a!==3){var i=dt();return r===null?l==null||l.after(i):r.before(i),$(i),i}return $(r),r}function ke(t){t.textContent=""}function Tt(t){var e=R|P,n=v!==null&&(v.f&R)!==0?v:null;return h===null||n!==null&&(n.f&T)!==0?e|=T:h.f|=Mt,{ctx:p,deps:null,effects:null,equals:qt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function Ie(t){const e=Tt(t);return tn(e),e}function Oe(t){const e=Tt(t);return e.equals=jt,e}function Vt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)F(e[n])}}function kn(t){for(var e=t.parent;e!==null;){if((e.f&R)===0)return e;e=e.parent}return null}function In(t){var e,n=h;st(kn(t));try{Vt(t),e=ln(t)}finally{st(n)}return e}function Gt(t){var e=In(t),n=(N||(t.f&T)!==0)&&t.deps!==null?H:g;D(t,n),t.equals(e)||(t.v=e,t.wv=en())}function Kt(t){h===null&&v===null&&wn(),v!==null&&(v.f&T)!==0&&h===null&&dn(),z&&pn()}function On(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function U(t,e,n,r=!0){var l=h,a={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{xt(a),a.f|=cn}catch(s){throw F(a),s}else e!==null&&vt(a);var i=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Mt|et))===0;if(!i&&r&&(l!==null&&On(a,l),v!==null&&(v.f&R)!==0)){var u=v;(u.effects??(u.effects=[])).push(a)}return a}function Nn(t){const e=U(it,null,!1);return D(e,g),e.teardown=t,e}function Pn(t){Kt();var e=h!==null&&(h.f&k)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Zt(t);return r}}function Ne(t){return Kt(),Sn(t)}function Pe(t){const e=U(Y,t,!0);return(n={})=>new Promise(r=>{n.outro?Mn(e,()=>{F(e),r(void 0)}):(F(e),r(void 0))})}function Zt(t){return U(Ct,t,!1)}function Sn(t){return U(it,t,!0)}function Se(t,e=[],n=Tt){const r=e.map(n);return Cn(()=>t(...r.map(B)))}function Cn(t,e=0){return U(it|gt|e,t,!0)}function Ce(t,e=!0){return U(it|k,t,!0,e)}function $t(t){var e=t.teardown;if(e!==null){const n=z,r=v;Nt(!0),L(null);try{e.call(null)}finally{Nt(n),L(r)}}}function Wt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&Y)!==0?n.parent=null:F(n,e),n=r}}function Fn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&k)===0&&F(e),e=n}}function F(t,e=!0){var n=!1;if((e||(t.f&vn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:M(r);r.remove(),r=a}n=!0}Wt(t,e&&!n),ut(t,0),D(t,ot);var i=t.transitions;if(i!==null)for(const s of i)s.stop();$t(t);var u=t.parent;u!==null&&u.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Mn(t,e){var n=[];zt(t,n,!0),qn(n,()=>{F(t),e&&e()})}function qn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var l of t)l.out(r)}else e()}function zt(t,e,n){if((t.f&j)===0){if(t.f^=j,t.transitions!==null)for(const i of t.transitions)(i.is_global||n)&&e.push(i);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&Ft)!==0||(r.f&k)!==0;zt(r,e,a?n:!1),r=l}}}function Fe(t){Jt(t,!0)}function Jt(t,e){if((t.f&j)!==0){t.f^=j,(t.f&g)===0&&(t.f^=g),J(t)&&(D(t,P),vt(t));for(var n=t.first;n!==null;){var r=n.next,l=(n.f&Ft)!==0||(n.f&k)!==0;Jt(n,l?e:!1),n=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&a.in()}}let W=[],yt=[];function Qt(){var t=W;W=[],St(t)}function jn(){var t=yt;yt=[],St(t)}function Me(t){W.length===0&&queueMicrotask(Qt),W.push(t)}function Ot(){W.length>0&&Qt(),yt.length>0&&jn()}let nt=!1,lt=!1,at=null,S=!1,z=!1;function Nt(t){z=t}let K=[];let v=null,b=!1;function L(t){v=t}let h=null;function st(t){h=t}let w=null;function Ln(t){w=t}function tn(t){v!==null&&v.f&pt&&(w===null?Ln([t]):w.push(t))}let d=null,E=0,m=null;function Yn(t){m=t}let nn=1,ft=0,N=!1;function en(){return++nn}function J(t){var o;var e=t.f;if((e&P)!==0)return!0;if((e&H)!==0){var n=t.deps,r=(e&T)!==0;if(n!==null){var l,a,i=(e&rt)!==0,u=r&&h!==null&&!N,s=n.length;if(i||u){var f=t,_=f.parent;for(l=0;l<s;l++)a=n[l],(i||!((o=a==null?void 0:a.reactions)!=null&&o.includes(f)))&&(a.reactions??(a.reactions=[])).push(f);i&&(f.f^=rt),u&&_!==null&&(_.f&T)===0&&(f.f^=T)}for(l=0;l<s;l++)if(a=n[l],J(a)&&Gt(a),a.wv>t.wv)return!0}(!r||h!==null&&!N)&&D(t,g)}return!1}function Hn(t,e){for(var n=e;n!==null;){if((n.f&et)!==0)try{n.fn(t);return}catch{n.f^=et}n=n.parent}throw nt=!1,t}function Un(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function ct(t,e,n,r){if(nt){if(n===null&&(nt=!1),Un(e))throw t;return}n!==null&&(nt=!0);{Hn(t,e);return}}function rn(t,e,n=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];w!=null&&w.includes(t)||((a.f&R)!==0?rn(a,e,!1):e===a&&(n?D(a,P):(a.f&g)!==0&&D(a,H),vt(a)))}}function ln(t){var x;var e=d,n=E,r=m,l=v,a=N,i=w,u=p,s=b,f=t.f;d=null,E=0,m=null,N=(f&T)!==0&&(b||!S||v===null),v=(f&(k|Y))===0?t:null,w=null,Dt(t.ctx),b=!1,ft++,t.f|=pt;try{var _=(0,t.fn)(),o=t.deps;if(d!==null){var c;if(ut(t,E),o!==null&&E>0)for(o.length=E+d.length,c=0;c<d.length;c++)o[E+c]=d[c];else t.deps=o=d;if(!N)for(c=E;c<o.length;c++)((x=o[c]).reactions??(x.reactions=[])).push(t)}else o!==null&&E<o.length&&(ut(t,E),o.length=E);if(_t()&&m!==null&&!b&&o!==null&&(t.f&(R|H|P))===0)for(c=0;c<m.length;c++)rn(m[c],t);return l!==t&&(ft++,m!==null&&(r===null?r=m:r.push(...m))),_}finally{d=e,E=n,m=r,v=l,N=a,w=i,Dt(u),b=s,t.f^=pt}}function Bn(t,e){let n=e.reactions;if(n!==null){var r=fn.call(n,t);if(r!==-1){var l=n.length-1;l===0?n=e.reactions=null:(n[r]=n[l],n.pop())}}n===null&&(e.f&R)!==0&&(d===null||!d.includes(e))&&(D(e,H),(e.f&(T|rt))===0&&(e.f^=rt),Vt(e),ut(e,0))}function ut(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Bn(t,n[r])}function xt(t){var e=t.f;if((e&ot)===0){D(t,g);var n=h,r=p,l=S;h=t,S=!0;try{(e&gt)!==0?Fn(t):Wt(t),$t(t);var a=ln(t);t.teardown=typeof a=="function"?a:null,t.wv=nn;var i=t.deps,u}catch(s){ct(s,t,n,r||t.ctx)}finally{S=l,h=n}}}function Vn(){try{yn()}catch(t){if(at!==null)ct(t,at,null);else throw t}}function an(){var t=S;try{var e=0;for(S=!0;K.length>0;){e++>1e3&&Vn();var n=K,r=n.length;K=[];for(var l=0;l<r;l++){var a=Kn(n[l]);Gn(a)}Z.clear()}}finally{lt=!1,S=t,at=null}}function Gn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ot|j))===0)try{J(r)&&(xt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(l){ct(l,r,null,r.ctx)}}}function vt(t){lt||(lt=!0,queueMicrotask(an));for(var e=at=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(Y|k))!==0){if((n&g)===0)return;e.f^=g}}K.push(e)}function Kn(t){for(var e=[],n=t;n!==null;){var r=n.f,l=(r&(k|Y))!==0,a=l&&(r&g)!==0;if(!a&&(r&j)===0){if((r&Ct)!==0)e.push(n);else if(l)n.f^=g;else{var i=v;try{v=n,J(n)&&xt(n)}catch(f){ct(f,n,null,n.ctx)}finally{v=i}}var u=n.first;if(u!==null){n=u;continue}}var s=n.parent;for(n=n.next;n===null&&s!==null;)n=s.next,s=s.parent}return e}function Zn(t){var e;for(Ot();K.length>0;)lt=!0,an(),Ot();return e}async function qe(){await Promise.resolve(),Zn()}function B(t){var e=t.f,n=(e&R)!==0;if(v!==null&&!b){if(!(w!=null&&w.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,d===null&&r!==null&&r[E]===t?E++:d===null?d=[t]:(!N||!d.includes(t))&&d.push(t))}}else if(n&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&T)===0&&(l.f^=T)}return n&&(l=t,J(l)&&Gt(l)),z&&Z.has(t)?Z.get(t):t.v}function $n(t){var e=b;try{return b=!0,t()}finally{b=e}}const Wn=-7169;function D(t,e){t.f=t.f&Wn|e}function je(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(G in t)Et(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&G in n&&Et(n)}}}function Et(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Et(t[r],e)}catch{}const n=Pt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=un(n);for(let l in r){const a=r[l].get;if(a)try{a.call(t)}catch{}}}}}function Le(t){p===null&&bn(),X&&p.l!==null?Xn(p).m.push(t):Pn(()=>{const e=$n(t);if(typeof e=="function")return e})}function Xn(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}export{oe as $,B as A,je as B,Tt as C,ae as D,Re as E,Se as F,be as G,Tn as H,me as I,De as J,Cn as K,Ft as L,xn as M,xe as N,Fe as O,Mn as P,V as Q,le as R,ne as S,Oe as T,y as U,jt as V,q as W,O as X,G as Y,ee as Z,X as _,M as a,ye as a0,ce as a1,_e as a2,ve as a3,ie as a4,Le as a5,L as a6,st as a7,v as a8,Nn as a9,Me as aa,Jn as ab,sn as ac,Dn as ad,he as ae,pe as af,Zt as ag,Sn as ah,Zn as ai,I as aj,qe as ak,Ie as al,mt as am,j as an,fe as ao,Rn as ap,zt as aq,qn as ar,F as as,se as at,ue as au,Te as av,Qn as aw,hn as ax,Lt as b,$ as c,A as d,An as e,Ht as f,wt as g,ge as h,Ae as i,re as j,ke as k,zn as l,Pe as m,dt as n,Ce as o,C as p,de as q,p as r,Ee as s,h as t,we as u,Ne as v,Pn as w,St as x,$n as y,te as z};
