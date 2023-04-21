import{setServerPlatform as de}from"@builder.io/qwik/server";import{getNotFound as ue}from"./@qwik-city-not-found-paths.js";import{isStaticPath as pe}from"./@qwik-city-static-paths.js";import{createReadStream as me}from"fs";import{join as U,extname as he}from"path";import{fileURLToPath as ge}from"url";import{Http2ServerRequest as ye}from"http2";import{TextEncoderStream as we,TextDecoderStream as be,WritableStream as Se,ReadableStream as xe}from"stream/web";import{fetch as ve,Headers as Re,Request as Te,Response as ke,FormData as Ae}from"undici";import _e from"crypto";import{_deserializeData as De,_serializeData as Pe,_verifySerializable as We}from"@builder.io/qwik";import Me from"./@qwik-city-plan.mjs";import{r as He,m as Oe}from"./assets/entry.ssr-441fa84f.mjs";import L from"express";import{fileURLToPath as je}from"node:url";import{join as X}from"node:path";import"./assets/index.qwik-b5ce703c.mjs";import"@builder.io/qwik/jsx-runtime";var V=class extends Error{constructor(e,t){super(t),this.status=e}};function $e(e,t){let a="Server Error";return t!=null&&(typeof t.message=="string"?a=t.message:a=String(t)),"<html>"+Z(e,a)+"</html>"}function Z(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=Le(t):t="";const a=typeof t=="string"?"600px":"300px",r=e>=500?ze:Ie;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${a}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var Ce=/[&<>]/g,Le=e=>e.replace(Ce,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),Ie="#006ce9",ze="#713fc2",q={lax:"Lax",none:"None",strict:"Strict"},Ue={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},qe=(e,t,a)=>{const r=[`${e}=${t}`];return typeof a.domain=="string"&&r.push(`Domain=${a.domain}`),typeof a.maxAge=="number"?r.push(`Max-Age=${a.maxAge}`):Array.isArray(a.maxAge)?r.push(`Max-Age=${a.maxAge[0]*Ue[a.maxAge[1]]}`):typeof a.expires=="number"||typeof a.expires=="string"?r.push(`Expires=${a.expires}`):a.expires instanceof Date&&r.push(`Expires=${a.expires.toUTCString()}`),a.httpOnly&&r.push("HttpOnly"),typeof a.path=="string"&&r.push(`Path=${a.path}`),a.sameSite&&q[a.sameSite]&&r.push(`SameSite=${q[a.sameSite]}`),a.secure&&r.push("Secure"),r.join("; ")},Fe=e=>{const t={};if(typeof e=="string"&&e!==""){const a=e.split(";");for(const r of a){const i=r.split("=");i.length>1&&(t[decodeURIComponent(i[0].trim())]=decodeURIComponent(i[1].trim()))}}return t},_=Symbol("request-cookies"),C=Symbol("response-cookies"),ee,Ne=class{constructor(e){this[ee]={},this[_]=Fe(e)}get(e){const t=this[_][e];return t?{value:t,json(){return JSON.parse(t)},number(){return Number(t)}}:null}getAll(){return Object.keys(this[_]).reduce((e,t)=>(e[t]=this.get(t),e),{})}has(e){return!!this[_][e]}set(e,t,a={}){const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[C][e]=qe(e,r,a)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0})}headers(){return Object.values(this[C])}};ee=C;var D=class{},P=class extends D{},F=new WeakMap,Qe="qaction",Ee="qfunc";function Be(e){const{url:t,params:a,request:r,status:i,locale:c}=e,n={};r.headers.forEach((o,f)=>n[f]=o);const s=e.sharedMap.get(H),l=e.sharedMap.get(se),d=e.sharedMap.get(nt);return{url:new URL(t.pathname+t.search,t).href,requestHeaders:n,locale:c(),nonce:d,qwikcity:{params:{...a},loadedRoute:st(e),response:{status:i(),loaders:O(e),action:s,formData:l}}}}var Ge=(e,t,a,r)=>{const i=[],c=[],n=[],s=!!(t&&Ve(t[1]));return e&&N(i,c,n,e,s,a),t&&(s&&(a==="POST"&&(n.unshift(Ze),n.push(Ke)),n.push(Ye),n.push(tt)),N(i,c,n,t[1],s,a),s&&(i.length+E.length>0&&n.push(E(i,c)),n.push(r))),n},N=(e,t,a,r,i,c)=>{for(const n of r){typeof n.onRequest=="function"?a.push(n.onRequest):Array.isArray(n.onRequest)&&a.push(...n.onRequest);let s;switch(c){case"GET":{s=n.onGet;break}case"POST":{s=n.onPost;break}case"PUT":{s=n.onPut;break}case"PATCH":{s=n.onPatch;break}case"DELETE":{s=n.onDelete;break}case"OPTIONS":{s=n.onOptions;break}case"HEAD":{s=n.onHead;break}}if(typeof s=="function"?a.push(s):Array.isArray(s)&&a.push(...s),i){const l=Object.values(n).filter(o=>Q(o,"server_loader"));e.push(...l);const d=Object.values(n).filter(o=>Q(o,"server_action"));t.push(...d)}}},Q=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function E(e,t){return async a=>{if(a.headersSent){a.exit();return}const{method:r}=a,i=O(a),c=a[M];if(r==="POST"){const n=a.query.get(Qe);if(n){const s=globalThis._qwikActionsMap,l=t.find(d=>d.__id===n)??(s==null?void 0:s.get(n));if(l){a.sharedMap.set(H,n);const d=await a.parseBody();if(!d||typeof d!="object")throw new Error("Expected request data to be an object");const o=await B(a,l.__validators,d);if(!o.success)i[n]=a.fail(o.status??500,o.error);else{const f=await l.__qrl(o.data,a);l.__qrl,i[n]=f}}}}e.length>0&&await Promise.all(e.map(n=>{const s=n.__id;return i[s]=B(a,n.__validators,void 0).then(l=>l.success?n.__qrl(a):a.fail(l.status??500,l.error)).then(l=>(typeof l=="function"?i[s]=l():(n.__qrl,i[s]=l),l))}))}}async function B(e,t,a){let r={success:!0,data:a};if(t)for(const i of t)if(r=await i.validate(e,a),r.success)a=r.data;else return r;return r}function Je(e){return e&&typeof e=="object"&&Symbol.asyncIterator in e}async function Ke(e){const t=e.query.get(Ee);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const a=e[M],r=await e.parseBody();if(Array.isArray(r)){const[i,...c]=r;if(Xe(i)&&i.getHash()===t){const n=await i.apply(e,c);if(Je(n)){e.headers.set("Content-Type","text/event-stream");const s=e.getWritableStream().getWriter();for await(const l of n){e.headers.set("Content-Type","application/qwik-json");const d=await a._serializeData(l,!0);s.write(W.encode(`event: qwik
data: ${d}

`))}s.close()}else e.headers.set("Content-Type","application/qwik-json"),e.send(200,await a._serializeData(n,!0));return}}throw e.error(500,"Invalid request")}}function Ye(e){const t=I(e),{basePathname:a,pathname:r,url:i}=e;if(!ce(r)&&r!==a&&!r.endsWith(".html")){if(t){if(!r.endsWith("/"))throw e.redirect(302,r+"/"+i.search)}else if(r.endsWith("/"))throw e.redirect(302,r.slice(0,r.length-1)+i.search)}}var Xe=e=>typeof e=="function"&&typeof e.getSymbol=="function";function Ve(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function te(e,t){return e.pathname.endsWith(S)?e.pathname.slice(0,-S.length+(t?1:0))+e.search:e.pathname}var W=new TextEncoder;function Ze({url:e,request:t,error:a}){let r=t.headers.get("origin"),i=e.origin;if(r!==i)throw a(403,`Cross-site ${t.method} form submissions are forbidden`)}function et(e){return async t=>{if(t.headersSent||t.pathname.endsWith(S))return;t.request.headers.forEach((f,m)=>f);const r=t.headers;r.has("Content-Type")||r.set("Content-Type","text/html; charset=utf-8");const i=I(t),{readable:c,writable:n}=new TextEncoderStream,s=t.getWritableStream(),l=c.pipeTo(s,{preventClose:!0}),d=n.getWriter(),o=t.status();try{const f=oe(t)==="static",m=await e({base:t.basePathname+"build/",stream:d,serverData:Be(t),containerAttributes:{["q:render"]:f?"static":""}}),p={loaders:O(t),action:t.sharedMap.get(H),status:o!==200?o:200,href:te(t.url,i)};(typeof m).html==="string"&&await d.write(m.html),t.sharedMap.set("qData",p)}finally{await d.ready,await d.close(),await l}await s.close()}}async function tt(e){if(ce(e.pathname)){try{await e.next()}catch(o){if(!(o instanceof P))throw o}if(e.headersSent||e.exited)return;const a=e.status(),r=e.headers.get("Location"),i=I(e);if(a>=301&&a<=308&&r){const o=at(r);if(o){e.headers.set("Location",o),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}e.request.headers.forEach((o,f)=>o),e.headers.set("Content-Type","application/json; charset=utf-8");const n={loaders:O(e),action:e.sharedMap.get(H),status:a!==200?a:200,href:te(e.url,i),redirect:r??void 0},s=e.getWritableStream().getWriter(),d=await e[M]._serializeData(n,!0);s.write(W.encode(d)),e.sharedMap.set("qData",n),s.close()}}function at(e){if(e.startsWith("/")){const t=S,a=new URL(e,"http://localhost");return(a.pathname.endsWith("/")?a.pathname.slice(0,-1):a.pathname)+(t.startsWith("/")?"":"/")+t+a.search}else return}function rt(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),t.join(", ")}var ae=Symbol("RequestEvLoaders"),re=Symbol("RequestEvMode"),ne=Symbol("RequestEvRoute"),M=Symbol("RequestEvQwikSerializer"),ie=Symbol("RequestEvTrailingSlash"),H="@actionId",se="@actionFormData",nt="@nonce";function it(e,t,a,r=!0,i="/",c,n){const{request:s,platform:l,env:d}=e,o=new Ne(s.headers.get("cookie")),f=new Headers,m=new URL(s.url);let p=-1,y=null,g,R=e.locale,w=200;const fe=async()=>{for(p++;p<a.length;){const u=a[p],h=u(b);h instanceof Promise&&await h,p++}},x=()=>{if(y!==null)throw new Error("Response already sent")},T=(u,h)=>{if(x(),typeof u=="number"){w=u;const A=b.getWritableStream().getWriter();A.write(typeof h=="string"?W.encode(h):h),A.close()}else if(w=u.status,u.headers.forEach((k,A)=>{f.append(A,k)}),u.body){const k=b.getWritableStream();u.body.pipeTo(k)}else{if(w>=300&&w<400)return new P;b.getWritableStream().getWriter().close()}return new D},j={},z=new Map,b={[ae]:j,[re]:e.mode,[ie]:r,[ne]:t,[M]:c,cookie:o,headers:f,env:d,method:s.method,params:(t==null?void 0:t[0])??{},pathname:m.pathname,platform:l,query:m.searchParams,request:s,url:m,basePathname:i,sharedMap:z,get headersSent(){return y!==null},get exited(){return p>=G},next:fe,exit:()=>(p=G,new D),cacheControl:u=>{x(),f.set("Cache-Control",rt(u))},resolveValue:async u=>{const h=u.__id;if(u.__brand==="server_loader"&&!(h in j))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return j[h]},status:u=>typeof u=="number"?(x(),w=u,u):w,locale:u=>(typeof u=="string"&&(R=u),R||""),error:(u,h)=>(w=u,f.delete("Cache-Control"),new V(u,h)),redirect:(u,h)=>(x(),w=u,f.set("Location",h),f.delete("Cache-Control"),u>301&&f.set("Cache-Control","no-store"),new P),defer:u=>typeof u=="function"?u:()=>u,fail:(u,h)=>(x(),w=u,f.delete("Cache-Control"),{failed:!0,...h}),text:(u,h)=>(f.set("Content-Type","text/plain; charset=utf-8"),T(u,h)),html:(u,h)=>(f.set("Content-Type","text/html; charset=utf-8"),T(u,h)),parseBody:async()=>g!==void 0?g:g=ot(b.request,z,c),json:(u,h)=>(f.set("Content-Type","application/json; charset=utf-8"),T(u,JSON.stringify(h))),send:T,isDirty:()=>y!==null,getWritableStream:()=>(y===null&&(y=e.getWritableStream(w,f,o,n,b)),y)};return Object.freeze(b)}function O(e){return e[ae]}function I(e){return e[ie]}function st(e){return e[ne]}function oe(e){return e[re]}var G=999999999,ot=async(e,t,a)=>{var r;const i=e.clone(),c=((r=e.headers.get("content-type"))==null?void 0:r.split(/[;,]/,1)[0].trim())??"";if(c==="application/x-www-form-urlencoded"||c==="multipart/form-data"){const n=await i.formData();return t.set(se,n),ct(n)}else{if(c==="application/json")return await i.json();if(c==="application/qwik-json")return a._deserializeData(await i.text())}},ct=e=>{const t={};return e.forEach((a,r)=>{const i=r.split(".").filter(n=>n);let c=t;for(let n=0;n<i.length;n++){let s=i[n];n===i.length-1?s.endsWith("[]")?(s=s.slice(0,-2),c[s]=c[s]||[],c[s].push(a)):c[s]=a:c=c[s]={...c[s]}}}),t};function lt(e,t,a,r=!0,i="/",c){let n;const s=new Promise(d=>n=d),l=it(e,t,a,r,i,c,n);return{response:s,requestEv:l,completion:ft(l,n)}}async function ft(e,t){try{await e.next()}catch(a){if(a instanceof P)await e.getWritableStream().close();else if(a instanceof V){if(console.error(a),!e.headersSent){const r=$e(a.status,a);e.html(a.status,r)}}else if(!(a instanceof D)){if(oe(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const r=e.getWritableStream();if(!r.locked){const i=r.getWriter();await i.write(W.encode(Z(500,"Internal Server Error"))),await i.close()}}catch{console.error("Unable to render error page")}return a}}finally{e.isDirty()||t(null)}}function dt(e,t){if(e.endsWith(S)){const a=e.length-ut+(t?1:0);e=e.slice(0,a),e===""&&(e="/")}return e}var ce=e=>e.endsWith(S),S="/q-data.json",ut=S.length,pt=async(e,t,a,r)=>{if(Array.isArray(e))for(const i of e){const c=i[0].exec(r);if(c){const n=i[1],s=ht(i[2],c),l=i[4],d=new Array(n.length),o=[],f=mt(t,r);let m;return n.forEach((p,y)=>{J(p,o,g=>d[y]=g,a)}),J(f,o,p=>m=p==null?void 0:p.default,a),o.length>0&&await Promise.all(o),[s,d,m,l]}}return null},J=(e,t,a,r)=>{if(typeof e=="function"){const i=F.get(e);if(i)a(i);else{const c=e();typeof c.then=="function"?t.push(c.then(n=>{r!==!1&&F.set(e,n),a(n)})):c&&a(c)}}},mt=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const a=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(a)return a[1]}},ht=(e,t)=>{const a={};if(e)for(let r=0;r<e.length;r++){const i=(t==null?void 0:t[r+1])??"",c=i.endsWith("/")?i.slice(0,-1):i;a[e[r]]=decodeURIComponent(c)}return a};async function gt(e,t,a){const{render:r,qwikCityPlan:i}=t,{routes:c,serverPlugins:n,menus:s,cacheModules:l,trailingSlash:d,basePathname:o}=i,f=e.url.pathname,m=dt(f,d),p=await yt(n,c,s,l,m,e.request.method,r);return p?lt(e,p[0],p[1],d,o,a):null}async function yt(e,t,a,r,i,c,n){const s=await pt(t,a,r,i),l=Ge(e,s,c,et(n));return l.length>0?[s,l]:null}var{ORIGIN:wt,PROTOCOL_HEADER:K,HOST_HEADER:bt}=process.env;function St(e){const t=e.headers,a=K&&t[K]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),r=bt??(e instanceof ye?":authority":"host"),i=t[r];return`${a}://${i}`}function $(e){const t=wt??St(e);return new URL(e.originalUrl||e.url||"/",t)}async function xt(e,t,a,r){const i=new Headers,c=t.headers;for(const o in c){const f=c[o];if(typeof f=="string")i.set(o,f);else if(Array.isArray(f))for(const m of f)i.append(o,m)}const n=async function*(){for await(const o of t)yield o},s=t.method==="HEAD"||t.method==="GET"?void 0:n(),l={method:t.method,headers:i,body:s,duplex:"half"};return{mode:r,url:e,request:new Request(e.href,l),env:{get(o){return process.env[o]}},getWritableStream:(o,f,m)=>{a.statusCode=o,f.forEach((g,R)=>a.setHeader(R,g));const p=m.headers();return p.length>0&&a.setHeader("Set-Cookie",p),new WritableStream({write(g){a.write(g)},close(){a.end()}})},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var vt={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Rt(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=ve,globalThis.Headers=Re,globalThis.Request=Te,globalThis.Response=ke,globalThis.FormData=Ae),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=we,globalThis.TextDecoderStream=be),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=Se,globalThis.ReadableStream=xe),typeof globalThis.crypto>"u"&&(globalThis.crypto=_e.webcrypto)}function Tt(e){var t;Rt();const a={_deserializeData:De,_serializeData:Pe,_verifySerializable:We};e.manifest&&de(e.manifest);const r=((t=e.static)==null?void 0:t.root)??U(ge(import.meta.url),"..","..","dist");return{router:async(s,l,d)=>{try{const o=await xt($(s),s,l,"server"),f=await gt(o,e,a);if(f){const m=await f.completion;if(m)throw m;if(f.requestEv.headersSent)return}d()}catch(o){console.error(o),d(o)}},notFound:async(s,l,d)=>{try{if(!l.headersSent){const o=$(s),f=ue(o.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":o.pathname}),l.end(f)}}catch(o){console.error(o),d(o)}},staticFile:async(s,l,d)=>{var o;try{const f=$(s);if(pe(s.method||"GET",f)){const m=U(r,f.pathname),p=me(m),y=he(f.pathname).replace(/^\./,""),g=vt[y];g&&l.setHeader("Content-Type",g),(o=e.static)!=null&&o.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),p.on("error",d),p.pipe(l);return}return d()}catch(f){console.error(f),d(f)}}}}const le=X(je(import.meta.url),"..","..","dist"),kt=X(le,"build"),Y=process.env.PORT??3e3,{router:At,notFound:_t}=Tt({render:He,qwikCityPlan:Me,manifest:Oe}),v=L();v.use("/build",L.static(kt,{immutable:!0,maxAge:"1y"}));v.use(L.static(le,{redirect:!1}));v.use(At);v.use(_t);v.listen(Y,()=>{console.log(`Server starter: http://localhost:${Y}/`)});
