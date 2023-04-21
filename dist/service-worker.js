/* Qwik Service Worker */
const appBundles=[["q-0c222002.js",[1,13],["BN0XWboDYVI","xYL1qOwPyDI"]],["q-0dce7f5a.js",[]],["q-241c5ee1.js",[1,13]],["q-3d0b7c9d.js",[1,2,13],["J4V2qsF7Yxo"]],["q-45aab3b6.js",[]],["q-50d2f5a2.js",[1]],["q-5a678eec.js",[1,13],["AKetNByE5TM","KnNE9eL0qfc"]],["q-6822bb7e.js",[1]],["q-6bbf7623.js",[1],["VkLNXphUh5s"]],["q-70f6a09a.js",[1,13],["A7x0w7F9Kf8","HU55RV7VfPc","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-8df13cdd.js",[1,13],["zrbrqoaqXSY"]],["q-92e331f8.js",[1,13],["Lt6Bfsq45SI","tXNG0OiN3X4"]],["q-9daa6840.js",[1]],["q-a549e9f6.js",[1],["3sccYCDd1Z0"]],["q-cbc1db23.js",[1,13]],["q-d700d05a.js",[1]],["q-deef2686.js",[1],["X2IARVKdsXs"]],["q-e3888c9b.js",[1]],["q-ee119fed.js",[1,13],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-f3a2acf9.js",[1,13],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-f76f7558.js",[1]],["q-f9236d8e.js",[1],["A5bZC7WO00A"]]];
const libraryBundleIds=[18];
const linkBundles=[[/^\/$/,[14,8,5,0]],[/^\/demo\/flower\/?$/,[14,8,7,9]],[/^\/demo\/todolist\/?$/,[14,8,2,3]],[/^\/hindi\/ch3\/?$/,[14,8,12,16]],[/^\/hindi\/?$/,[14,8,20,11]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
