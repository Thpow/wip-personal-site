var ri=Object.defineProperty;var si=(e,t,n)=>t in e?ri(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>si(e,typeof t!="symbol"?t+"":t,n);import{getNotFound as oi}from"./@qwik-city-not-found-paths.js";import{isStaticPath as os}from"./@qwik-city-static-paths.js";import{createReadStream as ai}from"node:fs";import{join as Ot,basename as ii,extname as li}from"node:path";import{fileURLToPath as ci}from"node:url";import{Http2ServerRequest as ui}from"node:http2";import{TextEncoderStream as di,TextDecoderStream as pi,WritableStream as fi,ReadableStream as mi}from"node:stream/web";import{fetch as $i,Headers as hi,Request as gi,Response as vi,FormData as bi}from"undici";import yi from"crypto";function as(e,t){let n="Server Error";return t!=null&&(typeof t.message=="string"?n=t.message:n=String(t)),"<html>"+wi(e,n)+"</html>"}function wi(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=Si(t):t="";const n=typeof t=="string"?"600px":"300px",r=e>=500?_i:ki;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var xi=/[&<>]/g,Si=e=>e.replace(xi,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),ki="#006ce9",_i="#713fc2",Ei={lax:"Lax",Lax:"Lax",None:"None",none:"None",strict:"Strict",Strict:"Strict"},Ti={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},is=(e,t,n)=>{const r=[`${e}=${t}`];typeof n.domain=="string"&&r.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?r.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?r.push(`Max-Age=${n.maxAge[0]*Ti[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?r.push(`Expires=${n.expires}`):n.expires instanceof Date&&r.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&r.push("HttpOnly"),typeof n.path=="string"&&r.push(`Path=${n.path}`);const s=Ci(n.sameSite);return s&&r.push(`SameSite=${s}`),n.secure&&r.push("Secure"),r.join("; ")};function ls(e){try{return decodeURIComponent(e)}catch{return e}}var qi=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const r of n){const s=r.indexOf("=");s!==-1&&(t[ls(r.slice(0,s).trim())]=ls(r.slice(s+1).trim()))}}return t};function Ci(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return Ei[e]}var Ye=Symbol("request-cookies"),jt=Symbol("response-cookies"),Te=Symbol("live-cookies"),to,no,ro,Ai=(ro=Ye,no=jt,to=Te,class{constructor(e){q(this,ro);q(this,no,{});q(this,to,{});q(this,"appendCounter",0);this[Ye]=qi(e),this[Te]={...this[Ye]}}get(e,t=!0){const n=this[t?Te:Ye][e];return n?{value:n,json(){return JSON.parse(n)},number(){return Number(n)}}:null}getAll(e=!0){return Object.keys(this[e?Te:Ye]).reduce((t,n)=>(t[n]=this.get(n),t),{})}has(e,t=!0){return!!this[t?Te:Ye][e]}set(e,t,n={}){this[Te][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[jt][e]=is(e,r,n)}append(e,t,n={}){this[Te][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[jt][++this.appendCounter]=is(e,r,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[Te][e]=null}headers(){return Object.values(this[jt])}}),lr=class extends Error{constructor(e,t){super(typeof t=="string"?t:void 0),this.status=e,this.data=t}},hn=class{},cr=class extends hn{},lo=class extends hn{constructor(e){super(),this.pathname=e}},cs=new WeakMap,us="qaction",Ii="qfunc",ds="qdata";function Ri(e,t){const n=ms(e),r=ps(e),s=ms(t),o=ps(t);return co(e,n,r,t,s,o)}function co(e,t,n,r,s,o){let a=null;for(;t<n;){const i=e.charCodeAt(t++),l=r.charCodeAt(s++);if(i===91){const c=uo(e,t),u=t+(c?3:0),p=Dn(e,u,n,93),f=e.substring(u,p),$=Dn(e,p+1,n,47),h=e.substring(p+1,$);t=p+1;const g=s-1;if(c){const y=zi(f,h,r,g,o,e,t+h.length+1,n);if(y)return Object.assign(a||(a={}),y)}const v=Dn(r,g,o,47,h);if(v==-1)return null;const m=r.substring(g,v);if(!c&&!h&&!m)return null;s=v,(a||(a={}))[f]=decodeURIComponent(m)}else if(i!==l&&!(isNaN(l)&&Pi(e,t)))return null}return fs(e,t)&&fs(r,s)?a||{}:null}function Pi(e,t){return e.charCodeAt(t)===91&&uo(e,t+1)}function ps(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function fs(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function ms(e){return e.charCodeAt(0)===47?1:0}function uo(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function Dn(e,t,n,r,s=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const o=s.length;for(let a=0;a<o;a++)if(e.charCodeAt(t-o+a)!==s.charCodeAt(a))return-1;return t-o}function zi(e,t,n,r,s,o,a,i){n.charCodeAt(r)===47&&r++;let l=s;const c=t+"/";for(;l>=r;){const u=co(o,a,i,n,l,s);if(u){let f=n.substring(r,Math.min(l,s));return f.endsWith(c)&&(f=f.substring(0,f.length-c.length)),u[e]=decodeURIComponent(f),u}const p=Di(n,r,c,l,r-1)+c.length;if(l===p)break;l=p}return null}function Di(e,t,n,r,s){let o=e.lastIndexOf(n,r);return o==r-n.length&&(o=e.lastIndexOf(n,r-n.length-1)),o>t?o:s}var Mi=async(e,t,n,r)=>{if(!Array.isArray(e))return null;for(const s of e){const o=s[0],a=Ri(o,r);if(!a)continue;const i=s[1],l=s[3],c=new Array(i.length),u=[];i.forEach(($,h)=>{$s($,u,g=>c[h]=g,n)});const p=Ni(t,r);let f;return $s(p,u,$=>f=$==null?void 0:$.default,n),u.length>0&&await Promise.all(u),[o,a,c,f,l]}return null},$s=(e,t,n,r)=>{if(typeof e=="function"){const s=cs.get(e);if(s)n(s);else{const o=e();typeof o.then=="function"?t.push(o.then(a=>{r!==!1&&cs.set(e,a),n(a)})):o&&n(o)}}},Ni=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},Li=e=>e&&typeof e.then=="function";function Oi(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var Yt;import("node:async_hooks").then(e=>{const t=e.AsyncLocalStorage;Yt=new t,globalThis.qcAsyncRequestStore=Yt}).catch(e=>{console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.",e)});function ji(e,t,n,r,s=!0,o="/",a){let i;const l=new Promise(u=>i=u),c=Wi(e,t,n,s,o,a,i);return{response:l,requestEv:c,completion:Yt?Yt.run(c,hs,c,r,i):hs(c,r,i)}}async function hs(e,t,n){let r=1;async function s(){try{await e.next()}catch(o){if(o instanceof cr)await e.getWritableStream().close();else if(o instanceof lo){if(r>50)throw new Error("Infinite rewrite loop");r+=1;const a=new URL(e.url);a.pathname=o.pathname;const{loadedRoute:i,requestHandlers:l}=await t(a);return e.resetRoute(i,l,a),await s()}else if(o instanceof lr){if(!e.headersSent){const a=o.status,i=e.request.headers.get("Accept");if(i&&!i.includes("text/html")){const l=e[_t];e.headers.set("Content-Type","application/qwik-json"),e.send(a,await l._serializeData(o.data,!0))}else{const l=as(o.status,o.data);e.html(a,l)}}}else if(!(o instanceof hn)){if(bn(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const a=e.getWritableStream();if(!a.locked){const i=a.getWriter();await i.write(yn.encode(as(500,"Internal Server Error"))),await i.close()}}catch{console.error("Unable to render error page")}return o}}}try{return await s()}finally{e.isDirty()||n(null)}}function gs(e,t){if(e.endsWith(ot)){const n=e.length-po+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var kt="@isQData",ot="/q-data.json",po=ot.length,fo=Symbol("RequestEvLoaders"),mo=Symbol("RequestEvMode"),$o=Symbol("RequestEvRoute"),_t=Symbol("RequestEvQwikSerializer"),ho=Symbol("RequestEvTrailingSlash"),go="@routeName",gn="@actionId",vo="@actionFormData",Ui="@nonce",bo="@rewrite";function Wi(e,t,n,r,s,o,a){const{request:i,platform:l,env:c}=e,u=new Map,p=new Ai(i.headers.get("cookie")),f=new Headers,$=new URL(i.url);$.pathname.endsWith(ot)&&($.pathname=$.pathname.slice(0,-po),r&&!$.pathname.endsWith("/")&&($.pathname+="/"),u.set(kt,!0));let h=-1,g=null,v,m=e.locale,y=200;const w=async()=>{for(h++;h<n.length;){const S=n[h],E=globalThis.qcAsyncRequestStore,I=E!=null&&E.run?E.run(_,S,_):S(_);Li(I)&&await I,h++}},b=(S,E,I=$)=>{t=S,n=E,$.pathname=I.pathname,$.search=I.search,h=-1},k=()=>{if(g!==null)throw new Error("Response already sent")},T=(S,E)=>{if(k(),typeof S=="number"){y=S;const N=_.getWritableStream().getWriter();N.write(typeof E=="string"?yn.encode(E):E),N.close()}else if(y=S.status,S.headers.forEach((I,N)=>{N.toLowerCase()!=="set-cookie"&&f.append(N,I)}),S.headers.getSetCookie().forEach(I=>{const N=I.indexOf("=");if(N===-1)return;const de=I.slice(0,N).trim(),Q=I.slice(N+1).trim();p.set(de,Q)}),S.body){const I=_.getWritableStream();S.body.pipeTo(I)}else _.getWritableStream().getWriter().close();return C()},C=()=>(h=vs,new hn),x={},_={[fo]:x,[mo]:e.mode,[ho]:r,get[$o](){return t},[_t]:o,cookie:p,headers:f,env:c,method:i.method,signal:i.signal,originalUrl:new URL($),get params(){return(t==null?void 0:t[1])??{}},get pathname(){return $.pathname},platform:l,get query(){return $.searchParams},request:i,url:$,basePathname:s,sharedMap:u,get headersSent(){return g!==null},get exited(){return h>=vs},get clientConn(){return e.getClientConn()},next:w,resetRoute:b,exit:C,cacheControl:(S,E="Cache-Control")=>{k(),f.set(E,Oi(S))},resolveValue:async S=>{const E=S.__id;if(S.__brand==="server_loader"&&!(E in x))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return x[E]},status:S=>typeof S=="number"?(k(),y=S,S):y,locale:S=>(typeof S=="string"&&(m=S),m||""),error:(S,E)=>(y=S,new lr(S,E)),redirect:(S,E)=>{if(k(),y=S,E){const I=E.replace(/([^:])\/{2,}/g,"$1/");E!==I&&console.warn(`Redirect URL ${E} is invalid, fixing to ${I}`),f.set("Location",I)}return S>301&&!f.get("Cache-Control")&&f.set("Cache-Control","no-store"),C(),new cr},rewrite:S=>{if(k(),S.startsWith("http"))throw new Error("Rewrite does not support absolute urls");return u.set(bo,!0),new lo(S.replace(/\/+/g,"/"))},defer:S=>typeof S=="function"?S:()=>S,fail:(S,E)=>(k(),y=S,{failed:!0,...E}),text:(S,E)=>(f.set("Content-Type","text/plain; charset=utf-8"),T(S,E)),html:(S,E)=>(f.set("Content-Type","text/html; charset=utf-8"),T(S,E)),parseBody:async()=>v!==void 0?v:v=Qi(_,u,o),json:(S,E)=>(f.set("Content-Type","application/json; charset=utf-8"),T(S,JSON.stringify(E))),send:T,isDirty:()=>g!==null,getWritableStream:()=>{if(g===null){if(e.mode==="dev"){const S=u.get("@serverTiming");S&&f.set("Server-Timing",S.map(E=>`${E[0]};dur=${E[1]}`).join(","))}g=e.getWritableStream(y,f,p,a,_)}return g}};return Object.freeze(_)}function vn(e){return e[fo]}function ur(e){return e[ho]}function Fi(e){return e[$o]}function bn(e){return e[mo]}var vs=Number.MAX_SAFE_INTEGER,Qi=async({request:e,method:t,query:n},r,s)=>{var o;const a=((o=e.headers.get("content-type"))==null?void 0:o.split(/[;,]/,1)[0].trim())??"";if(a==="application/x-www-form-urlencoded"||a==="multipart/form-data"){const i=await e.formData();return r.set(vo,i),Bi(i)}else{if(a==="application/json")return await e.json();if(a==="application/qwik-json"){if(t==="GET"&&n.has(ds)){const i=n.get(ds);if(i)try{return s._deserializeData(decodeURIComponent(i))}catch{}}return s._deserializeData(await e.text())}}},Bi=e=>[...e.entries()].reduce((n,[r,s])=>(r.split(".").reduce((o,a,i,l)=>{if(a.endsWith("[]")){const c=a.slice(0,-2);return o[c]=o[c]||[],o[c]=[...o[c],s]}return i<l.length-1?o[a]=o[a]||(Number.isNaN(+l[i+1])?{}:[]):o[a]=s},n),n),{});function Hi(e){const{params:t,request:n,status:r,locale:s,originalUrl:o}=e,a={};n.headers.forEach((g,v)=>a[v]=g);const i=e.sharedMap.get(gn),l=e.sharedMap.get(vo),c=e.sharedMap.get(go),u=e.sharedMap.get(Ui),p=e.request.headers,f=new URL(o.pathname+o.search,o),$=p.get("X-Forwarded-Host"),h=p.get("X-Forwarded-Proto");return $&&(f.port="",f.host=$),h&&(f.protocol=h),{url:f.href,requestHeaders:a,locale:s(),nonce:u,containerAttributes:{"q:route":c},qwikcity:{routeName:c,ev:e,params:{...t},loadedRoute:Fi(e),response:{status:r(),loaders:vn(e),action:i,formData:l}}}}var Gi=(e,t,n,r,s)=>{const o=[],a=[],i=[],l=!!(t&&Zi(t[2]));if(e&&bs(o,a,i,e,l,n),t){const c=t[0];r&&(n==="POST"||n==="PUT"||n==="PATCH"||n==="DELETE")&&(i.unshift(tl),r==="lax-proto"&&i.push(el)),l&&((n==="POST"||n==="GET")&&i.push(Ji),i.push(Xi),i.push(sl));const u=t[2];i.push(rl),bs(o,a,i,u,l,n),l&&(i.push(p=>{p.sharedMap.set(go,c)}),i.push(Yi(a,o)),i.push(s))}return i},bs=(e,t,n,r,s,o)=>{for(const a of r){typeof a.onRequest=="function"?n.push(a.onRequest):Array.isArray(a.onRequest)&&n.push(...a.onRequest);let i;switch(o){case"GET":{i=a.onGet;break}case"POST":{i=a.onPost;break}case"PUT":{i=a.onPut;break}case"PATCH":{i=a.onPatch;break}case"DELETE":{i=a.onDelete;break}case"OPTIONS":{i=a.onOptions;break}case"HEAD":{i=a.onHead;break}}if(typeof i=="function"?n.push(i):Array.isArray(i)&&n.push(...i),s)for(const l of Object.values(a))typeof l=="function"&&(l.__brand==="server_loader"?e.push(l):l.__brand==="server_action"&&t.push(l))}};function Yi(e,t){return async n=>{if(n.headersSent){n.exit();return}const{method:r}=n,s=vn(n),o=bn(n)==="dev",a=n[_t];if(o&&r==="GET"&&n.query.has(us)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),r==="POST"){const i=n.query.get(us);if(i){const l=globalThis._qwikActionsMap,c=e.find(u=>u.__id===i)??(l==null?void 0:l.get(i));if(c){n.sharedMap.set(gn,i);const u=await n.parseBody();if(!u||typeof u!="object")throw new Error(`Expected request data for the action id ${i} to be an object`);const p=await ys(n,c.__validators,u,o);if(!p.success)s[i]=n.fail(p.status??500,p.error);else{const f=o?await Jt(n,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(n,p.data,n)):await c.__qrl.call(n,p.data,n);o&&Vt(a,f,c.__qrl),s[i]=f}}}}if(t.length>0){const i=t.map(l=>{const c=l.__id;return s[c]=ys(n,l.__validators,void 0,o).then(u=>u.success?o?Jt(n,l.__qrl.getSymbol().split("_",1)[0],()=>l.__qrl.call(n,n)):l.__qrl.call(n,n):n.fail(u.status??500,u.error)).then(u=>(typeof u=="function"?s[c]=u():(o&&Vt(a,u,l.__qrl),s[c]=u),u)),s[c]});await Promise.all(i)}}}async function ys(e,t,n,r){let s={success:!0,data:n};if(t)for(const o of t)if(r?s=await Jt(e,"validator$",()=>o.validate(e,n)):s=await o.validate(e,n),s.success)n=s.data;else return s;return s}function Vi(e){return e?typeof e=="object"&&Symbol.asyncIterator in e:!1}async function Ji(e){const t=e.query.get(Ii);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const n=bn(e)==="dev",r=e[_t],s=await e.parseBody();if(Array.isArray(s)){const[o,...a]=s;if(Ki(o)&&o.getHash()===t){let i;try{n?i=await Jt(e,`server_${o.getSymbol()}`,()=>o.apply(e,a)):i=await o.apply(e,a)}catch(l){throw l instanceof lr?e.error(l.status,l.data):e.error(500,"Invalid request")}if(Vi(i)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const u of i){n&&Vt(r,u,o);const p=await r._serializeData(u,!0);if(e.signal.aborted)break;await c.write(yn.encode(`${p}
`))}c.close()}else{Vt(r,i,o),e.headers.set("Content-Type","application/qwik-json");const l=await r._serializeData(i,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function Xi(e){const t=ur(e),{basePathname:n,originalUrl:r,sharedMap:s}=e,{pathname:o,search:a}=r;if(!s.has(kt)&&o!==n&&!o.endsWith(".html")){if(t){if(!o.endsWith("/"))throw e.redirect(301,o+"/"+a)}else if(o.endsWith("/"))throw e.redirect(301,o.slice(0,o.length-1)+a)}}function Vt(e,t,n){try{e._verifySerializable(t,void 0)}catch(r){throw r instanceof Error&&n.dev&&(r.loc=n.dev),r}}var Ki=e=>typeof e=="function"&&typeof e.getSymbol=="function";function Zi(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function yo(e,t){e=new URL(e),e.pathname.endsWith(ot)&&(e.pathname=e.pathname.slice(0,-ot.length)),t?e.pathname.endsWith("/")||(e.pathname+="/"):e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1));const n=e.search.slice(1).replaceAll(/&?q(action|data|func)=[^&]+/g,"");return`${e.pathname}${n?`?${n}`:""}${e.hash}`}var yn=new TextEncoder;function el(e){wo(e,"lax-proto")}function tl(e){wo(e)}function wo(e,t){if(al(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const r=e.request.headers.get("origin"),s=e.url.origin;let o=r!==s;if(o&&t&&s.startsWith("https://")&&(r==null?void 0:r.slice(4))===s.slice(5)&&(o=!1),o)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${r}" does not match the server origin "${s}".`)}}function nl(e){return async t=>{if(t.headersSent||t.sharedMap.has(kt))return;t.request.headers.forEach((p,f)=>p);const r=t.headers;r.has("Content-Type")||r.set("Content-Type","text/html; charset=utf-8");const s=ur(t),{readable:o,writable:a}=new TextEncoderStream,i=t.getWritableStream(),l=o.pipeTo(i,{preventClose:!0}),c=a.getWriter(),u=t.status();try{const p=bn(t)==="static",f=Hi(t),$=await e({base:t.basePathname+"build/",stream:c,serverData:f,containerAttributes:{"q:render":p?"static":"",...f.containerAttributes}}),h={loaders:vn(t),action:t.sharedMap.get(gn),status:u!==200?u:200,href:yo(t.url,s)};typeof $.html=="string"&&await c.write($.html),t.sharedMap.set("qData",h)}finally{await c.ready,await c.close(),await l}await i.close()}}async function rl(e){if(!e.sharedMap.has(kt))return;try{await e.next()}catch(o){if(!(o instanceof cr))throw o}if(e.headersSent)return;const n=e.status(),r=e.headers.get("Location");if(n>=301&&n<=308&&r){const o=ol(r);if(o){e.headers.set("Location",o),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}async function sl(e){if(!e.sharedMap.has(kt)||(await e.next(),e.headersSent||e.exited))return;const n=e.status(),r=e.headers.get("Location"),s=ur(e);e.request.headers.forEach((c,u)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const o={loaders:vn(e),action:e.sharedMap.get(gn),status:n!==200?n:200,href:yo(e.url,s),redirect:r??void 0,isRewrite:e.sharedMap.get(bo)},a=e.getWritableStream().getWriter(),l=await e[_t]._serializeData(o,!0);a.write(yn.encode(l)),e.sharedMap.set("qData",o),a.close()}function ol(e){if(e.startsWith("/")){const t=ot,n=new URL(e,"http://localhost");return(n.pathname.endsWith("/")?n.pathname.slice(0,-1):n.pathname)+(t.startsWith("/")?"":"/")+t+n.search}else return}function ws(){return typeof performance<"u"?performance.now():0}async function Jt(e,t,n){const r=ws();try{return await n()}finally{const s=ws()-r;let o=e.sharedMap.get("@serverTiming");o||e.sharedMap.set("@serverTiming",o=[]),o.push([t,s])}}function al(e,...t){var n;const r=((n=e.get("content-type"))==null?void 0:n.split(/;/,1)[0].trim())??"";return t.includes(r)}async function il(e,t,n){const{render:r,qwikCityPlan:s,checkOrigin:o}=t,a=e.url.pathname,i=gs(a,s.trailingSlash),l=await xs(s,i,e.request.method,o??!0,r);if(l){const[c,u]=l;return ji(e,c,u,async f=>{const $=gs(f.pathname,s.trailingSlash),h=await xs(s,$,e.request.method,o??!0,r);if(h){const[g,v]=h;return{loadedRoute:g,requestHandlers:v}}else return{loadedRoute:null,requestHandlers:[]}},s.trailingSlash,s.basePathname,n)}return null}async function xs(e,t,n,r,s){const{routes:o,serverPlugins:a,menus:i,cacheModules:l}=e,c=await Mi(o,i,l,t),u=Gi(a,c,n,r,nl(s));return u.length>0?[c,u]:null}const ll=!0,cl=!1,Pe=e=>e&&typeof e.nodeType=="number",xo=e=>e.nodeType===9,ze=e=>e.nodeType===1,De=e=>{const t=e.nodeType;return t===1||t===111},ul=e=>{const t=e.nodeType;return t===1||t===111||t===3},he=e=>e.nodeType===111,dr=e=>e.nodeType===3,Et=e=>e.nodeType===8,Qe=(e,...t)=>fr(!1,e,...t),So=(e,...t)=>{throw fr(!1,e,...t)},pr=(e,...t)=>fr(cl,e,...t),Ss=()=>{},Wn=()=>{},dl=e=>e,fr=(e,t,...n)=>{const r=t instanceof Error?t:new Error(t);return console.error("%cQWIK ERROR","",r.message,...dl(n),r.stack),r};const wn=e=>`Code(${e}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8+e}`,W=(e,...t)=>{const n=wn(e,...t);return pr(n,...t)},pl=()=>({isServer:ll,importSymbol(e,t,n){var o;{const a=Da(n),i=(o=globalThis.__qwik_reg_symbols)==null?void 0:o.get(a);if(i)return i}if(!t)throw W(31,n);if(!e)throw W(30,t,n);const r=fl(e.ownerDocument,e,t).toString(),s=new URL(r);return s.hash="",import(s.href).then(a=>a[n])},raf:e=>new Promise(t=>{requestAnimationFrame(()=>{t(e())})}),nextTick:e=>new Promise(t=>{setTimeout(()=>{t(e())})}),chunkForSymbol:(e,t)=>[e,t??"_"]}),fl=(e,t,n)=>{const r=e.baseURI,s=new URL(t.getAttribute("q:base")??r,r);return new URL(n,s)};let mr=pl();const ko=e=>mr=e,xn=()=>mr,ie=()=>mr.isServer,Tt=e=>{const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},Ee=e=>!!e&&typeof e=="object",M=e=>Array.isArray(e),qe=e=>typeof e=="string",ee=e=>typeof e=="function",F=e=>e&&typeof e.then=="function",$r=(e,t,n)=>{try{const r=e();return F(r)?r.then(t,n):t(r)}catch(r){return n(r)}},P=(e,t)=>F(e)?e.then(t):t(e),hr=e=>e.some(F)?Promise.all(e):e,Xe=e=>e.length>0?Promise.all(e):e,_o=e=>e!=null,ml=e=>new Promise(t=>{setTimeout(t,e)}),Se=[],Y={},qt=e=>typeof document<"u"?document:e.nodeType===9?e:e.ownerDocument,$l="q:renderFn",le="q:slot",Eo="q:s",Sn="q:style",hl="q:sstyle",To="q:instance",qo=(e,t)=>e["qFuncs_"+t]||[],gl="q:id",Fn=Symbol("proxy target"),Ke=Symbol("proxy flags"),pe=Symbol("proxy manager"),O=Symbol("IMMUTABLE"),kn="_qc_",oe=(e,t,n)=>e.setAttribute(t,n),me=(e,t)=>e.getAttribute(t),gr=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),vl=e=>e.replace(/-./g,t=>t[1].toUpperCase()),bl=(e,t,n,r)=>{typeof CustomEvent=="function"&&e&&e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:r,composed:r}))},vr=(e,t,n=0)=>t.$proxyMap$.get(e)||(n!==0&&En(e,n),Ct(e,t,void 0)),Ct=(e,t,n)=>{Dt(e),t.$proxyMap$.has(e);const r=t.$subsManager$.$createManager$(n),s=new Proxy(e,new Co(t,r));return t.$proxyMap$.set(e,s),s},_n=()=>{const e={};return En(e,2),e},En=(e,t)=>{Object.defineProperty(e,Ke,{value:t,enumerable:!1})};class Co{constructor(t,n){q(this,"$containerState$");q(this,"$manager$");this.$containerState$=t,this.$manager$=n}deleteProperty(t,n){if(2&t[Ke])throw W(17);return typeof n=="string"&&delete t[n]&&(this.$manager$.$notifySubs$(M(t)?void 0:n),!0)}get(t,n){var c;if(typeof n=="symbol")return n===Fn?t:n===pe?this.$manager$:t[n];const r=t[Ke]??0,s=ae(),o=!!(1&r),a=t["$$"+n];let i,l;if(s&&(i=s.$subscriber$),!(2&r)||n in t&&!yl((c=t[O])==null?void 0:c[n])||(i=null),a?(l=a.value,i=null):l=t[n],i){const u=M(t);this.$manager$.$addSub$(i,u?void 0:n)}return o?wl(l,this.$containerState$):l}set(t,n,r){if(typeof n=="symbol")return t[n]=r,!0;const s=t[Ke]??0;if(2&s)throw W(17);const o=1&s?Dt(r):r;if(M(t))return t[n]=o,this.$manager$.$notifySubs$(),!0;const a=t[n];return t[n]=o,a!==o&&this.$manager$.$notifySubs$(n),!0}has(t,n){if(n===Fn)return!0;const r=ae();if(typeof n=="string"&&r){const o=r.$subscriber$;if(o){const a=M(t);this.$manager$.$addSub$(o,a?void 0:n)}}const s=Object.prototype.hasOwnProperty;return!!s.call(t,n)||!(typeof n!="string"||!s.call(t,"$$"+n))}ownKeys(t){if(!(2&(t[Ke]??0))){let r=null;const s=ae();s&&(r=s.$subscriber$),r&&this.$manager$.$addSub$(r)}return M(t)?Reflect.ownKeys(t):Reflect.ownKeys(t).map(r=>typeof r=="string"&&r.startsWith("$$")?r.slice(2):r)}getOwnPropertyDescriptor(t,n){const r=Reflect.getOwnPropertyDescriptor(t,n);return M(t)||typeof n=="symbol"||r&&!r.configurable?r:{enumerable:!0,configurable:!0}}}const yl=e=>e===O||V(e),wl=(e,t)=>{if(Ee(e)){if(Object.isFrozen(e))return e;const n=Dt(e);if(n!==e||Ia(n))return e;if(Tt(n)||M(n))return t.$proxyMap$.get(n)||vr(n,t,1)}return e},xl=/^(on|window:|document:)/,Ao="preventdefault:",br=e=>e.endsWith("$")&&xl.test(e),yr=e=>{if(e.length===0)return Se;if(e.length===1){const n=e[0];return[[n[0],[n[1]]]]}const t=[];for(let n=0;n<e.length;n++){const r=e[n][0];t.includes(r)||t.push(r)}return t.map(n=>[n,e.filter(r=>r[0]===n).map(r=>r[1])])},wr=(e,t,n,r)=>{if(t.endsWith("$"),t=Qn(t.slice(0,-1)),n)if(M(n)){const s=n.flat(1/0).filter(o=>o!=null).map(o=>[t,_s(o,r)]);e.push(...s)}else e.push([t,_s(n,r)]);return t},ks=["on","window:on","document:on"],Sl=["on","on-window","on-document"],Qn=e=>{let t="on";for(let n=0;n<ks.length;n++){const r=ks[n];if(e.startsWith(r)){t=Sl[n],e=e.slice(r.length);break}}return t+":"+(e=e.startsWith("-")?gr(e.slice(1)):e.toLowerCase())},_s=(e,t)=>(e.$setContainer$(t),e),kl=(e,t)=>{const n=e.$element$.attributes,r=[];for(let s=0;s<n.length;s++){const{name:o,value:a}=n.item(s);if(o.startsWith("on:")||o.startsWith("on-window:")||o.startsWith("on-document:")){const i=a.split(`
`);for(const l of i){const c=In(l,t);c.$capture$&&Ta(c,e),r.push([o,c])}}}return r},_l=(e,t=0)=>{for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Number(Math.abs(t)).toString(36)},El=(e,t)=>`${_l(e.$hash$)}-${t}`,Tl=e=>"⭐️"+e,Io=e=>{const t=e.join("|");if(t.length>0)return t},Be=()=>{const e=Dr(),t=te(e.$hostElement$,e.$renderCtx$.$static$.$containerState$),n=t.$seq$||(t.$seq$=[]),r=e.$i$++;return{val:n[r],set:s=>n[r]=s,i:r,iCtx:e,elCtx:t}},ve=e=>Object.freeze({id:gr(e)}),we=(e,t)=>{const{val:n,set:r,elCtx:s}=Be();if(n!==void 0)return;(s.$contexts$||(s.$contexts$=new Map)).set(e.id,t),r(!0)},xr=(e,t)=>{const{val:n,set:r,iCtx:s,elCtx:o}=Be();if(n!==void 0)return n;const a=Ro(e,o,s.$renderCtx$.$static$.$containerState$);if(a!==void 0)return r(a);throw W(13,e.id)},ql=(e,t)=>{var s;let n=e,r=1;for(;n&&!((s=n.hasAttribute)!=null&&s.call(n,"q:container"));){for(;n=n.previousSibling;)if(Et(n)){const o=n.__virtual;if(o){const a=o[kn];if(n===o.open)return a??te(o,t);if(a!=null&&a.$parentCtx$)return a.$parentCtx$;n=o;continue}if(n.data==="/qv")r++;else if(n.data.startsWith("qv ")&&(r--,r===0))return te(zt(n),t)}n=e.parentElement,e=n}return null},Cl=(e,t)=>(e.$parentCtx$===void 0&&(e.$parentCtx$=ql(e.$element$,t)),e.$parentCtx$),Ro=(e,t,n)=>{var o;const r=e.id;if(!t)return;let s=t;for(;s;){const a=(o=s.$contexts$)==null?void 0:o.get(r);if(a)return a;s=Cl(s,n)}},Al=ve("qk-error"),Sr=(e,t,n)=>{const r=ce(t);if(ie())throw e;{const s=Ro(Al,r,n.$static$.$containerState$);if(s===void 0)throw e;s.error=e}},Il=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexShrink","gridArea","gridRow","gridRowEnd","gridRowStart","gridColumn","gridColumnEnd","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","MozAnimationIterationCount","MozBoxFlex","msFlex","msFlexPositive","WebkitAnimationIterationCount","WebkitBoxFlex","WebkitBoxOrdinalGroup","WebkitColumnCount","WebkitColumns","WebkitFlex","WebkitFlexGrow","WebkitFlexShrink","WebkitLineClamp"]),Rl=e=>Il.has(e),Xt=(e,t,n)=>{t.$flags$&=-2,t.$flags$|=Pr,t.$slots$=[],t.li.length=0;const r=t.$element$,s=t.$componentQrl$,o=t.$props$,a=re(e.$static$.$locale$,r,void 0,"qRender"),i=a.$waitOn$=[],l=At(e);l.$cmpCtx$=t,l.$slotCtx$=void 0,a.$subscriber$=[0,r],a.$renderCtx$=e,s.$setContainer$(e.$static$.$containerState$.$containerEl$);const c=s.getFn(a);return $r(()=>c(o),u=>P(ie()?P(Xe(i),()=>P(hc(e.$static$.$containerState$,e),()=>Xe(i))):Xe(i),()=>{var p;if(t.$flags$&yt){if(!(n&&n>100))return Xt(e,t,n?n+1:1);Wn(`Infinite loop detected. Element: ${(p=t.$componentQrl$)==null?void 0:p.$symbol$}`)}return{node:u,rCtx:l}}),u=>{var p;if(u===ia){if(!(n&&n>100))return P(Xe(i),()=>Xt(e,t,n?n+1:1));Wn(`Infinite loop detected. Element: ${(p=t.$componentQrl$)==null?void 0:p.$symbol$}`)}return Sr(u,r,e),{node:Tr,rCtx:l}})},Po=(e,t)=>({$static$:{$doc$:e,$locale$:t.$serverData$.locale,$containerState$:t,$hostElements$:new Set,$operations$:[],$postOperations$:[],$roots$:[],$addSlots$:[],$rmSlots$:[],$visited$:[]},$cmpCtx$:null,$slotCtx$:void 0}),At=e=>({$static$:e.$static$,$cmpCtx$:e.$cmpCtx$,$slotCtx$:e.$slotCtx$}),kr=(e,t)=>{var n;return(n=t==null?void 0:t.$scopeIds$)!=null&&n.length?t.$scopeIds$.join(" ")+" "+Kt(e):Kt(e)},Kt=e=>{if(!e)return"";if(qe(e))return e.trim();const t=[];if(M(e))for(const n of e){const r=Kt(n);r&&t.push(r)}else for(const[n,r]of Object.entries(e))r&&t.push(n.trim());return t.join(" ")},Tn=e=>{if(e==null)return"";if(typeof e=="object"){if(M(e))throw W(0,e,"style");{const t=[];for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const r=e[n];r!=null&&typeof r!="function"&&(n.startsWith("--")?t.push(n+":"+r):t.push(gr(n)+":"+Pl(n,r)))}return t.join(";")}}return String(e)},Pl=(e,t)=>typeof t!="number"||t===0||Rl(e)?t:t+"px",gt=e=>Ie(e.$static$.$containerState$.$elementIndex$++),zo=(e,t)=>{const n=gt(e);t.$id$=n},vt=e=>V(e)?vt(e.value):e==null||typeof e=="boolean"?"":String(e);function Do(e){return e.startsWith("aria-")}const Mo=(e,t)=>!!t.key&&(!He(e)||!ee(e.type)&&e.key!=t.key),X="dangerouslySetInnerHTML",Ht="<!--qkssr-f-->";var so;so=kn;class No{constructor(t){q(this,"nodeType");q(this,so,null);this.nodeType=t}}const zl=()=>new No(9),Dl=async(e,t)=>{var g,v,m;const n=t.containerTagName,r=Zt(1).$element$,s=Nr(r,t.base??"/");s.$serverData$.locale=(g=t.serverData)==null?void 0:g.locale;const o=zl(),a=Po(o,s),i=t.beforeContent??[],l={$static$:{$contexts$:[],$headNodes$:n==="html"?i:[],$locale$:(v=t.serverData)==null?void 0:v.locale,$textNodes$:new Map},$projectedChildren$:void 0,$projectedCtxs$:void 0,$invocationContext$:void 0},c=(m=t.serverData)==null?void 0:m.locale,u=t.containerAttributes,p=u["q:render"];u["q:container"]="paused",u["q:version"]="1.15.0",u["q:render"]=(p?p+"-":"")+"ssr",u["q:base"]=t.base||"",u["q:locale"]=c,u["q:manifest-hash"]=t.manifestHash,u["q:instance"]=Ml();const f=n==="html"?[e]:[i,e];n!=="html"&&(u.class="qc📦"+(u.class?" "+u.class:""));const $=s.$serverData$={...s.$serverData$,...t.serverData};$.containerAttributes={...$.containerAttributes,...u},(l.$invocationContext$=re(c)).$renderCtx$=a;const h=d(n,null,u,f,yt|It,null);s.$hostsRendering$=new Set,await Promise.resolve().then(()=>Nl(h,a,l,t.stream,s,t))},Ml=()=>Math.random().toString(36).slice(2),Nl=async(e,t,n,r,s,o)=>{const a=o.beforeClose;return await Er(e,t,n,r,0,a?i=>{const l=a(n.$static$.$contexts$,s,!1,n.$static$.$textNodes$);return fe(l,t,n,i,0,void 0)}:void 0),t},Ll=async(e,t,n,r,s)=>{r.write(Ht);const o=e.props.children;let a;if(ee(o)){const i=o({write(l){r.write(l),r.write(Ht)}});if(F(i))return i;a=i}else a=o;for await(const i of a)await fe(i,t,n,r,s,void 0),r.write(Ht)},Lo=(e,t,n,r,s,o,a,i)=>{var g;const l=e.props,c=l["q:renderFn"];if(c)return t.$componentQrl$=c,Ul(r,s,o,t,e,a,i);let u="<!--qv"+jl(l);const p="q:s"in l,f=e.key!=null?String(e.key):null;p&&((g=r.$cmpCtx$)==null||g.$id$,u+=" q:sref="+r.$cmpCtx$.$id$),f!=null&&(u+=" q:key="+f),u+="-->",o.write(u);const $=e.props[X];if($)return o.write($),void o.write(Mn);if(n)for(const v of n)_r(v.type,v.props,o);const h=Oo(e.children,r,s,o,a);return P(h,()=>{var m;if(!p&&!i)return void o.write(Mn);let v;if(p){const y=(m=s.$projectedChildren$)==null?void 0:m[f];if(y){const[w,b]=s.$projectedCtxs$,k=At(w);k.$slotCtx$=t,s.$projectedChildren$[f]=void 0,v=fe(y,k,b,o,a)}}return i&&(v=P(v,()=>i(o))),P(v,()=>{o.write(Mn)})})},Mn="<!--/qv-->",Ol=e=>{let t="";for(const n in e){if(n===X)continue;const r=e[n];r!=null&&(t+=" "+(r===""?n:n+'="'+r+'"'))}return t},jl=e=>{let t="";for(const n in e){if(n==="children"||n===X)continue;const r=e[n];r!=null&&(t+=" "+(r===""?n:n+"="+r))}return t},_r=(e,t,n)=>{if(n.write("<"+e+Ol(t)+">"),Wo[e])return;const r=t[X];r!=null&&n.write(r),n.write(`</${e}>`)},Ul=(e,t,n,r,s,o,a)=>(Fl(e,r,s.props.props),P(Xt(e,r),i=>{const l=r.$element$,c=i.rCtx,u=re(t.$static$.$locale$,l,void 0);u.$subscriber$=[0,l],u.$renderCtx$=c;const p={$static$:t.$static$,$projectedChildren$:Wl(s.children,t),$projectedCtxs$:[e,t],$invocationContext$:u},f=[];if(r.$appendStyles$){const v=4&o?t.$static$.$headNodes$:f;for(const m of r.$appendStyles$)v.push(d("style",{[Sn]:m.styleId,[X]:m.content,hidden:""},null,null,0,null))}const $=gt(e),h=r.$scopeIds$?Io(r.$scopeIds$):void 0,g=L(s.type,{[hl]:h,[gl]:$,children:i.node},0,s.key);return r.$id$=$,t.$static$.$contexts$.push(r),Lo(g,r,f,c,p,n,o,v=>{if(r.$flags$&It){const w=Zt(1),b=w.li;b.push(...r.li),r.$flags$&=-3,w.$id$=gt(e);const k={type:"placeholder",hidden:"","q:id":w.$id$};t.$static$.$contexts$.push(w);const T=yr(b);for(const C of T){const x=Fo(C[0]);k[x]=Gr(C[1],e.$static$.$containerState$,w),Bn(x,e.$static$.$containerState$)}_r("script",k,v)}const m=p.$projectedChildren$;let y;if(m){const w=Object.keys(m).map(C=>{const x=m[C];if(x)return d("q:template",{[le]:C||!0,hidden:!0,"aria-hidden":"true"},null,x,0,null)}),[b,k]=p.$projectedCtxs$,T=At(b);T.$slotCtx$=r,y=fe(w,T,k,v,0,void 0)}return a?P(y,()=>a(v)):y})})),Wl=(e,t)=>{const n=jo(e,t);if(n===null)return;const r={};for(const s of n){let o="";He(s)&&(o=s.props[le]||""),(r[o]||(r[o]=[])).push(s)}return r},Zt=e=>{const t=new No(e);return Cn(t)},Er=(e,t,n,r,s,o)=>{var c;const a=e.type,i=t.$cmpCtx$;if(typeof a=="string"){const u=e.key,p=e.props,f=e.immutableProps||Y,$=Zt(1),h=$.$element$,g=a==="head";let v="<"+a,m=!1,y=!1,w="",b=null;const k=(x,_,S)=>{if(x==="ref")return void(_!==void 0&&(Lr(_,h),y=!0));if(br(x))return void wr($.li,x,_,void 0);if(V(_)&&(_=_e(_,S?[1,h,_,i.$element$,x]:[2,i.$element$,_,h,x]),m=!0),x===X)return void(b=_);let E;x.startsWith(Ao)&&Bn(x.slice(15),t.$static$.$containerState$);const I=x==="htmlFor"?"for":x;I==="class"||I==="className"?w=Kt(_):I==="style"?E=Tn(_):Do(I)||I==="draggable"||I==="spellcheck"?(E=_!=null?String(_):null,_=E):E=_===!1||_==null?null:String(_),E!=null&&(I==="value"&&a==="textarea"?b=Ze(E):Yl(I)||(v+=" "+(_===!0?I:I+'="'+Ze(E)+'"')))};for(const x in p){let _=!1,S;x in f?(_=!0,S=f[x],S===O&&(S=p[x])):S=p[x],k(x,S,_)}for(const x in f){if(x in p)continue;const _=f[x];_!==O&&k(x,_,!0)}const T=$.li;if(i){if((c=i.$scopeIds$)!=null&&c.length){const x=i.$scopeIds$.join(" ");w=w?`${x} ${w}`:x}i.$flags$&It&&(T.push(...i.li),i.$flags$&=-3)}if(g&&(s|=1),a in Ql&&(s|=16),a in Bl&&(s|=8),w&&(v+=' class="'+Ze(w)+'"'),T.length>0){const x=yr(T),_=!!(16&s);for(const S of x){const E=_?Fo(S[0]):S[0];v+=" "+E+'="'+Gr(S[1],t.$static$.$containerState$,$)+'"',Bn(E,t.$static$.$containerState$)}}if(u!=null&&(v+=' q:key="'+Ze(u)+'"'),y||m||T.length>0){if(y||m||Vl(T)){const x=gt(t);v+=' q:id="'+x+'"',$.$id$=x}n.$static$.$contexts$.push($)}if(1&s&&(v+=" q:head"),v+=">",r.write(v),a in Wo)return;if(b!=null)return r.write(String(b)),void r.write(`</${a}>`);a==="html"?s|=4:s&=-5,2&e.flags&&(s|=1024);const C=fe(e.children,t,n,r,s);return P(C,()=>{if(g){for(const x of n.$static$.$headNodes$)_r(x.type,x.props,r);n.$static$.$headNodes$.length=0}if(o)return P(o(r),()=>{r.write(`</${a}>`)});r.write(`</${a}>`)})}if(a===Ce){const u=Zt(111);return t.$slotCtx$?(u.$parentCtx$=t.$slotCtx$,u.$realParentCtx$=t.$cmpCtx$):u.$parentCtx$=t.$cmpCtx$,i&&i.$flags$&zr&&Jl(i,u),Lo(e,u,void 0,t,n,r,s,o)}if(a===Qo)return void r.write(e.props.data);if(a===Bo)return Ll(e,t,n,r,s);const l=ne(n.$invocationContext$,a,e.props,e.key,e.flags,e.dev);return Mo(l,e)?Er(L(Ce,{children:l},0,e.key),t,n,r,s,o):fe(l,t,n,r,s,o)},fe=(e,t,n,r,s,o)=>{var a;if(e!=null&&typeof e!="boolean"){if(!qe(e)&&typeof e!="number"){if(He(e))return Er(e,t,n,r,s,o);if(M(e))return Oo(e,t,n,r,s);if(V(e)){const i=8&s,l=(a=t.$cmpCtx$)==null?void 0:a.$element$;let c;if(l){if(!i){const u=gt(t);if(c=_e(e,1024&s?[3,"#"+u,e,"#"+u]:[4,l,e,"#"+u]),qe(c)){const p=vt(c);n.$static$.$textNodes$.set(p,u)}return r.write(`<!--t=${u}-->`),fe(c,t,n,r,s,o),void r.write("<!---->")}c=ne(n.$invocationContext$,()=>e.value)}return void r.write(Ze(vt(c)))}return F(e)?(r.write(Ht),e.then(i=>fe(i,t,n,r,s,o))):void 0}r.write(Ze(String(e)))}},Oo=(e,t,n,r,s)=>{if(e==null)return;if(!M(e))return fe(e,t,n,r,s);const o=e.length;if(o===1)return fe(e[0],t,n,r,s);if(o===0)return;let a=0;const i=[];return e.reduce((l,c,u)=>{const p=[];i.push(p);const f=fe(c,t,n,l?{write($){a===u?r.write($):p.push($)}}:r,s);if(l||F(f)){const $=()=>{a++,i.length>a&&i[a].forEach(h=>r.write(h))};return F(f)?l?Promise.all([f,l]).then($):f.then($):l.then($)}a++},void 0)},jo=(e,t)=>{if(e==null)return null;const n=Uo(e,t),r=M(n)?n:[n];return r.length===0?null:r},Uo=(e,t)=>{if(e==null)return null;if(M(e))return e.flatMap(n=>Uo(n,t));if(He(e)&&ee(e.type)&&e.type!==Qo&&e.type!==Bo&&e.type!==Ce){const n=ne(t.$invocationContext$,e.type,e.props,e.key,e.flags);return jo(n,t)}return e},Fl=(e,t,n)=>{const r=Object.keys(n),s=_n();if(t.$props$=Ct(s,e.$static$.$containerState$),r.length===0)return;const o=s[O]=n[O]??Y;for(const a of r)a!=="children"&&a!==le&&(V(o[a])?s["$$"+a]=o[a]:s[a]=n[a])},Ql={head:!0,style:!0,script:!0,link:!0,meta:!0},Bl={title:!0,style:!0,script:!0,noframes:!0,textarea:!0},Wo={area:!0,base:!0,basefont:!0,bgsound:!0,br:!0,col:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Hl=/[&<>'"]/g,Bn=(e,t)=>{t.$events$.add(ca(e))},Ze=e=>e.replace(Hl,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&#39;";default:return""}}),Gl=/[>/="'\u0009\u000a\u000c\u0020]/,Yl=e=>Gl.test(e),Vl=e=>e.some(t=>t[1].$captureRef$&&t[1].$captureRef$.length>0),Jl=(e,t)=>{const n=e.$dynamicSlots$||(e.$dynamicSlots$=[]);n.includes(t)||n.push(t)},Fo=e=>e==="on:qvisible"?"on-document:qinit":e,se=(e,t,n)=>new Yn(e,t,n),Xl=e=>{const t=e.$funcStr$;let n="";for(let r=0;r<e.$args$.length;r++)n+=`p${r},`;return`(${n})=>(${t})`},d=(e,t,n,r,s,o)=>{const a=o==null?null:String(o);return new lt(e,t||Y,n,r,s,a)},Ut=(e,t,n,r,s,o)=>{let a=null;return t&&"children"in t&&(a=t.children,delete t.children),d(e,t,n,a,r,s)},L=(e,t,n,r,s)=>{const o=r==null?null:String(r),a=t??{};if(typeof e=="string"&&O in a){const l=a[O];delete a[O];const c=a.children;delete a.children;for(const[u,p]of Object.entries(l))p!==O&&(delete a[u],a[u]=p);return d(e,null,a,c,n,r)}const i=new lt(e,a,null,a.children,n,o);return typeof e=="string"&&t&&delete t.children,i},G=(e,t,n)=>{const s=aa(()=>{const a=t.children;return typeof e=="string"&&delete t.children,a});return qe(e)&&"className"in t&&(t.class=t.className,delete t.className),new lt(e,t,null,s,0,null)};class lt{constructor(t,n,r,s,o,a=null){q(this,"type");q(this,"props");q(this,"immutableProps");q(this,"children");q(this,"flags");q(this,"key");q(this,"dev");this.type=t,this.props=n,this.immutableProps=r,this.children=s,this.flags=o,this.key=a}}const Ce=e=>e.children,He=e=>e instanceof lt,ge=e=>e.children,Tr=Symbol("skip render"),Qo=()=>null,Bo=()=>null,qr=(e,t,n)=>{const r=!(t.$flags$&Pr),s=t.$element$,o=e.$static$.$containerState$;return o.$hostsStaging$.delete(t),o.$subsManager$.$clearSub$(s),P(Xt(e,t),a=>{const i=e.$static$,l=a.rCtx,c=re(e.$static$.$locale$,s);if(i.$hostElements$.add(s),c.$subscriber$=[0,s],c.$renderCtx$=l,r&&t.$appendStyles$)for(const p of t.$appendStyles$)cu(i,p);const u=Ae(a.node,c);return P(u,p=>{const f=Kl(s,p),$=Cr(t);return P(sn(l,$,f,n),()=>{t.$vdom$=f})})})},Cr=e=>(e.$vdom$||(e.$vdom$=on(e.$element$)),e.$vdom$);class ke{constructor(t,n,r,s,o,a){q(this,"$type$");q(this,"$props$");q(this,"$immutableProps$");q(this,"$children$");q(this,"$flags$");q(this,"$key$");q(this,"$elm$",null);q(this,"$text$","");q(this,"$signal$",null);q(this,"$id$");q(this,"$dev$");this.$type$=t,this.$props$=n,this.$immutableProps$=r,this.$children$=s,this.$flags$=o,this.$key$=a,this.$id$=t+(a?":"+a:"")}}const Ho=(e,t)=>{const{key:n,type:r,props:s,children:o,flags:a,immutableProps:i}=e;let l="";if(qe(r))l=r;else{if(r!==Ce){if(ee(r)){const u=ne(t,r,s,n,a,e.dev);return Mo(u,e)?Ho(L(Ce,{children:u},0,n),t):Ae(u,t)}throw W(25,r)}l=at}let c=Se;return o!=null?P(Ae(o,t),u=>(u!==void 0&&(c=M(u)?u:[u]),new ke(l,s,i,c,a,n))):new ke(l,s,i,c,a,n)},Kl=(e,t)=>{const n=t===void 0?Se:M(t)?t:[t],r=new ke(":virtual",{},null,n,0,null);return r.$elm$=e,r},Ae=(e,t)=>{if(e!=null&&typeof e!="boolean"){if(Go(e)){const n=new ke("#text",Y,null,Se,0,null);return n.$text$=String(e),n}if(He(e))return Ho(e,t);if(V(e)){const n=new ke("#signal",Y,null,Se,0,null);return n.$signal$=e,n}if(M(e)){const n=hr(e.flatMap(r=>Ae(r,t)));return P(n,r=>r.flat(100).filter(_o))}return F(e)?e.then(n=>Ae(n,t)):e===Tr?new ke(":skipRender",Y,null,Se,0,null):void 0}},Go=e=>qe(e)||typeof e=="number",Yo=e=>{me(e,"q:container")==="paused"&&(tc(e),ac(e))},Zl=e=>{const t=qt(e),n=sc(e===t.documentElement?t.body:e,"type");if(n)return JSON.parse(rc(n.firstChild.data)||"{}")},ec=(e,t)=>{const n=JSON.parse(e);if(typeof n!="object")return null;const{_objs:r,_entry:s}=n;if(r===void 0||s===void 0)return null;let o={},a={};if(Pe(t)&&De(t)){const c=Mr(t);c&&(a=ct(c),o=c.ownerDocument)}const i=Ca(a,o);for(let c=0;c<r.length;c++){const u=r[c];qe(u)&&(r[c]=u===Rn?void 0:i.prepare(u))}const l=c=>r[$e(c)];for(const c of r)Vo(c,l,i);return l(s)},tc=e=>{if(!Qc(e))return;const t=e._qwikjson_??Zl(e);if(e._qwikjson_=null,!t)return;const n=qt(e),r=e.getAttribute(To),s=qo(n,r),o=ct(e),a=new Map,i=new Map;let l=null,c=0;const u=n.createTreeWalker(e,la);for(;l=u.nextNode();){const m=l.data;if(c===0){if(m.startsWith("qv ")){const y=ic(m);y>=0&&a.set(y,l)}else if(m.startsWith("t=")){const y=m.slice(2),w=$e(y),b=oc(l);a.set(w,b),i.set(w,b.data)}}m==="cq"?c++:m==="/cq"&&c--}const p=e.getElementsByClassName("qc📦").length!==0;e.querySelectorAll("[q\\:id]").forEach(m=>{if(p&&m.closest("[q\\:container]")!==e)return;const y=me(m,"q:id"),w=$e(y);a.set(w,m)});const f=Ca(o,n),$=new Map,h=new Set,g=m=>(typeof m=="string"&&m.length>0,$.has(m)?$.get(m):v(m)),v=m=>{if(m.startsWith("#")){const T=m.slice(1),C=$e(T);a.has(C);const x=a.get(C);if(Et(x)){if(!x.isConnected)return void $.set(m,void 0);const _=zt(x);return $.set(m,_),te(_,o),_}return ze(x)?($.set(m,x),te(x,o),x):($.set(m,x),x)}if(m.startsWith("@")){const T=m.slice(1),C=$e(T);return s[C]}if(m.startsWith("*")){const T=m.slice(1),C=$e(T);a.has(C);const x=i.get(C);return $.set(m,x),x}const y=$e(m),w=t.objs;w.length>y;let b=w[y];qe(b)&&(b=b===Rn?void 0:f.prepare(b));let k=b;for(let T=m.length-1;T>=0;T--){const C=md[m[T]];if(!C)break;k=C(k,o)}return $.set(m,k),Go(b)||h.has(y)||(h.add(y),nc(b,y,t.subs,g,o,f),Vo(b,g,f)),k};o.$elementIndex$=1e5,o.$pauseCtx$={getObject:g,meta:t.ctx,refs:t.refs},oe(e,"q:container","resumed"),bl(e,"qresume",void 0,!0)},nc=(e,t,n,r,s,o)=>{const a=n[t];if(a){const i=[];let l=0;for(const c of a)if(c.startsWith("_"))l=parseInt(c.slice(1),10);else{const u=wd(c,r);u&&i.push(u)}if(l>0&&En(e,l),!o.subs(e,i)){const c=s.$proxyMap$.get(e);c?Z(c).$addSubs$(i):Ct(e,s,i)}}},Vo=(e,t,n)=>{if(!n.fill(e,t)&&e&&typeof e=="object"){if(M(e))for(let r=0;r<e.length;r++)e[r]=t(e[r]);else if(Tt(e))for(const r in e)e[r]=t(e[r])}},rc=e=>e.replace(/\\x3C(\/?script)/gi,"<$1"),sc=(e,t)=>{let n=e.lastElementChild;for(;n;){if(n.tagName==="SCRIPT"&&me(n,t)==="qwik/json")return n;n=n.previousElementSibling}},oc=e=>{const t=e.nextSibling;if(dr(t))return t;{const n=e.ownerDocument.createTextNode("");return e.parentElement.insertBefore(n,e),n}},ac=e=>{e.qwik={pause:()=>Eu(e),state:ct(e)}},ic=e=>{const t=e.indexOf("q:id=");return t>0?$e(e.slice(t+5)):-1},be=()=>{const e=Dc();let t=e.$qrl$;if(t)t.$captureRef$;else{const n=e.$element$,r=Mr(n);t=In(decodeURIComponent(String(e.$url$)),r),Yo(r);const s=te(n,ct(r));Ta(t,s)}return t.$captureRef$},lc=(e,t)=>{try{const n=t[0],r=e.$static$;switch(n){case 1:case 2:{let s,o;n===1?(s=t[1],o=t[3]):(s=t[3],o=t[1]);const a=ce(s);if(a==null)return;const i=t[4],l=s.namespaceURI===Pt;r.$containerState$.$subsManager$.$clearSignal$(t);let c=_e(t[2],t.slice(0,-1));i==="class"?c=kr(c,ce(o)):i==="style"&&(c=Tn(c));const u=Cr(a);return i in u.$props$&&u.$props$[i]===c?void 0:(u.$props$[i]=c,Ur(r,s,i,c,l))}case 3:case 4:{const s=t[3];if(!r.$visited$.includes(s)){r.$containerState$.$subsManager$.$clearSignal$(t);const o=void 0;let a=_e(t[2],t.slice(0,-1));const i=kd();Array.isArray(a)&&(a=new lt(Ce,{},null,a,0,null));let l=Ae(a,o);if(F(l))Qe("Rendering promises in JSX signals is not supported");else{l===void 0&&(l=Ae("",o));const c=da(s),u=cc(t[1]);if(e.$cmpCtx$=te(u,e.$static$.$containerState$),c.$type$==l.$type$&&c.$key$==l.$key$&&c.$id$==l.$id$)Ve(e,c,l,0);else{const p=[],f=c.$elm$,$=We(e,l,0,p);p.length&&Qe("Rendering promises in JSX signals is not supported"),i[3]=$,tt(e.$static$,s.parentElement,$,f),f&&Fr(r,f)}}}}}}catch{}};function cc(e){for(;e;){if(De(e))return e;e=e.parentElement}throw new Error("Not found")}const uc=(e,t)=>{if(e[0]===0){const n=e[1];Rr(n)?Ar(n,t):dc(n,t)}else pc(e,t)},dc=(e,t)=>{const n=ie();n||Yo(t.$containerEl$);const r=te(e,t);if(r.$componentQrl$,!(r.$flags$&yt))if(r.$flags$|=yt,t.$hostsRendering$!==void 0)t.$hostsStaging$.add(r);else{if(n)return;t.$hostsNext$.add(r),Ir(t)}},pc=(e,t)=>{const n=t.$hostsRendering$!==void 0;t.$opsNext$.add(e),n||Ir(t)},Ar=(e,t)=>{e.$flags$&tn||(e.$flags$|=tn,t.$hostsRendering$!==void 0?t.$taskStaging$.add(e):(t.$taskNext$.add(e),Ir(t)))},Ir=e=>(e.$renderPromise$===void 0&&(e.$renderPromise$=xn().nextTick(()=>Jo(e))),e.$renderPromise$),fc=()=>{const[e]=be();Ar(e,ct(Mr(e.$el$)))},Jo=async e=>{const t=e.$containerEl$,n=qt(t);try{const r=Po(n,e),s=r.$static$,o=e.$hostsRendering$=new Set(e.$hostsNext$);e.$hostsNext$.clear(),await $c(e,r),e.$hostsStaging$.forEach(l=>{o.add(l)}),e.$hostsStaging$.clear();const a=Array.from(e.$opsNext$);e.$opsNext$.clear();const i=Array.from(o);vc(i),!e.$styleMoved$&&i.length>0&&(e.$styleMoved$=!0,(t===n.documentElement?n.body:t).querySelectorAll("style[q\\:style]").forEach(l=>{e.$styleIds$.add(me(l,Sn)),ba(s,n.head,l)}));for(const l of i){const c=l.$element$;if(!s.$hostElements$.has(c)&&l.$componentQrl$){c.isConnected,s.$roots$.push(l);try{await qr(r,l,mc(c.parentElement))}catch(u){Qe(u)}}}return a.forEach(l=>{lc(r,l)}),s.$operations$.push(...s.$postOperations$),s.$operations$.length===0?(Ms(s),void await Es(e,r)):(await nu(s),Ms(s),Es(e,r))}catch(r){Qe(r)}},mc=e=>{let t=0;return e&&(e.namespaceURI===Pt&&(t|=Ue),e.tagName==="HEAD"&&(t|=Or)),t},Es=async(e,t)=>{const n=t.$static$.$hostElements$;await gc(e,t,(r,s)=>!!(r.$flags$&Zo)&&(!s||n.has(r.$el$))),e.$hostsStaging$.forEach(r=>{e.$hostsNext$.add(r)}),e.$hostsStaging$.clear(),e.$hostsRendering$=void 0,e.$renderPromise$=void 0,e.$hostsNext$.size+e.$taskNext$.size+e.$opsNext$.size>0&&(e.$renderPromise$=Jo(e))},Hn=e=>!!(e.$flags$&ea),Ts=e=>!!(e.$flags$&ta),$c=async(e,t)=>{const n=e.$containerEl$,r=[],s=[];e.$taskNext$.forEach(o=>{Hn(o)&&(s.push(P(o.$qrl$.$resolveLazy$(n),()=>o)),e.$taskNext$.delete(o)),Ts(o)&&(r.push(P(o.$qrl$.$resolveLazy$(n),()=>o)),e.$taskNext$.delete(o))});do if(e.$taskStaging$.forEach(o=>{Hn(o)?s.push(P(o.$qrl$.$resolveLazy$(n),()=>o)):Ts(o)?r.push(P(o.$qrl$.$resolveLazy$(n),()=>o)):e.$taskNext$.add(o)}),e.$taskStaging$.clear(),s.length>0){const o=await Promise.all(s);en(o),await Promise.all(o.map(a=>nn(a,e,t))),s.length=0}while(e.$taskStaging$.size>0);if(r.length>0){const o=await Promise.all(r);en(o);for(const a of o)nn(a,e,t)}},hc=(e,t)=>{const n=e.$containerEl$,r=e.$taskStaging$;if(!r.size)return;const s=[];let o=20;const a=()=>{if(r.forEach(i=>{Hn(i)&&s.push(P(i.$qrl$.$resolveLazy$(n),()=>i))}),r.clear(),s.length>0)return Promise.all(s).then(async i=>{if(en(i),await Promise.all(i.map(l=>nn(l,e,t))),s.length=0,--o&&r.size>0)return a();o||Wn(`Infinite task loop detected. Tasks:
${Array.from(r).map(l=>`  ${l.$qrl$.$symbol$}`).join(`
`)}`)})};return a()},gc=async(e,t,n)=>{const r=[],s=e.$containerEl$;e.$taskNext$.forEach(o=>{n(o,!1)&&(o.$el$.isConnected&&r.push(P(o.$qrl$.$resolveLazy$(s),()=>o)),e.$taskNext$.delete(o))});do if(e.$taskStaging$.forEach(o=>{o.$el$.isConnected&&(n(o,!0)?r.push(P(o.$qrl$.$resolveLazy$(s),()=>o)):e.$taskNext$.add(o))}),e.$taskStaging$.clear(),r.length>0){const o=await Promise.all(r);en(o);for(const a of o)nn(a,e,t);r.length=0}while(e.$taskStaging$.size>0)},vc=e=>{e.sort((t,n)=>2&t.$element$.compareDocumentPosition(ln(n.$element$))?1:-1)},en=e=>{const t=ie();e.sort((n,r)=>t||n.$el$===r.$el$?n.$index$<r.$index$?-1:1:2&n.$el$.compareDocumentPosition(ln(r.$el$))?1:-1)},bc=(e,t)=>{Ko(Xo(e,void 0),t)},qs=(e,t)=>{Ko(Xo(e,"document"),t)},Xo=(e,t)=>{const n=t!==void 0?t+":":"";return Array.isArray(e)?e.map(r=>`${n}on-${r}`):`${n}on-${e}`},Ko=(e,t)=>{if(t){const n=Dr(),r=te(n.$hostElement$,n.$renderCtx$.$static$.$containerState$);typeof e=="string"?r.li.push([Qn(e),t]):r.li.push(...e.map(s=>[Qn(s),t])),r.$flags$|=It}},yc=e=>{const t=Mc(),n=ee(e)&&!Jr(e)?ne(void 0,e):e;return jc(n,t,0)},wc=e=>{const{val:t,set:n}=Be();return t??n(e=ee(e)&&!Jr(e)?e():e)},K=e=>wc(()=>yc(e)),Zo=1,ea=2,ta=4,tn=16,xc=(e,t)=>{const{val:n,set:r,iCtx:s,i:o,elCtx:a}=Be();if(n)return;const i=s.$renderCtx$.$static$.$containerState$,l=new qn(tn|ea,o,a.$element$,e,void 0);r(!0),e.$resolveLazy$(i.$containerEl$),a.$tasks$||(a.$tasks$=[]),a.$tasks$.push(l),Lc(s,()=>ra(l,i,s.$renderCtx$)),ie()&&Gn(l,t==null?void 0:t.eagerness)},Sc=(e,t)=>{const{val:n,set:r,i:s,iCtx:o,elCtx:a}=Be(),i=(t==null?void 0:t.strategy)??"intersection-observer";if(n)return void(ie()&&Gn(n,i));const l=new qn(Zo,s,a.$element$,e,void 0),c=o.$renderCtx$.$static$.$containerState$;a.$tasks$||(a.$tasks$=[]),a.$tasks$.push(l),r(l),Gn(l,i),ie()||(e.$resolveLazy$(c.$containerEl$),Ar(l,c))},na=e=>!!(e.$flags$&ta),kc=e=>!!(8&e.$flags$),nn=async(e,t,n)=>(e.$flags$&tn,na(e)?_c(e,t,n):kc(e)?Ec(e,t,n):ra(e,t,n)),_c=(e,t,n,r)=>{e.$flags$&=-17,bt(e);const s=re(n.$static$.$locale$,e.$el$,void 0,"qTask"),{$subsManager$:o}=t;s.$renderCtx$=n;const a=e.$qrl$.getFn(s,()=>{o.$clearSub$(e)}),i=[],l=e.$state$,c=Dt(l),u={track:(m,y)=>{if(ee(m)){const b=re();return b.$renderCtx$=n,b.$subscriber$=[0,e],ne(b,m)}const w=Z(m);return w?w.$addSub$([0,e],y):pr(wn(26),m),y?m[y]:V(m)?m.value:m},cleanup(m){i.push(m)},cache(m){let y=0;y=m==="immutable"?1/0:m,l._cache=y},previous:c._resolved};let p,f,$=!1;const h=(m,y)=>!$&&($=!0,m?($=!0,l.loading=!1,l._state="resolved",l._resolved=y,l._error=void 0,p(y)):($=!0,l.loading=!1,l._state="rejected",l._error=y,f(y)),!0);ne(s,()=>{l._state="pending",l.loading=!ie(),l.value=new Promise((m,y)=>{p=m,f=y})}),e.$destroy$=zn(()=>{$=!0,i.forEach(m=>m())});const g=$r(()=>P(r,()=>a(u)),m=>{h(!0,m)},m=>{h(!1,m)}),v=c._timeout;return v>0?Promise.race([g,ml(v).then(()=>{h(!1,new Error("timeout"))&&bt(e)})]):g},ra=(e,t,n)=>{e.$flags$&=-17,bt(e);const r=e.$el$,s=re(n.$static$.$locale$,r,void 0,"qTask");s.$renderCtx$=n;const{$subsManager$:o}=t,a=e.$qrl$.getFn(s,()=>{o.$clearSub$(e)}),i=[];e.$destroy$=zn(()=>{i.forEach(c=>c())});const l={track:(c,u)=>{if(ee(c)){const f=re();return f.$subscriber$=[0,e],ne(f,c)}const p=Z(c);return p?p.$addSub$([0,e],u):pr(wn(26),c),u?c[u]:V(c)?c.value:c},cleanup(c){i.push(c)}};return $r(()=>a(l),c=>{ee(c)&&i.push(c)},c=>{Sr(c,r,n)})},Ec=(e,t,n)=>{e.$state$,e.$flags$&=-17,bt(e);const r=e.$el$,s=re(n.$static$.$locale$,r,void 0,"qComputed");s.$subscriber$=[0,e],s.$renderCtx$=n;const{$subsManager$:o}=t,a=e.$qrl$.getFn(s,()=>{o.$clearSub$(e)}),i=c=>{aa(()=>{const u=e.$state$;u[$t]&=-3,u.untrackedValue=c,u[pe].$notifySubs$()})},l=c=>{Sr(c,r,n)};try{return P(e.$qrl$.$resolveLazy$(t.$containerEl$),()=>{const c=a();if(F(c)){const u="useComputed$: Async functions in computed tasks are deprecated and will stop working in v2. Use useTask$ or useResource$ instead.",p=new Error(u).stack;return p&&p.replace(/^Error:\s*/,""),Ss(),c.then(i,l)}i(c)})}catch(c){l(c)}},bt=e=>{const t=e.$destroy$;if(t){e.$destroy$=void 0;try{t()}catch(n){Qe(n)}}},sa=e=>{32&e.$flags$?(e.$flags$&=-33,(0,e.$qrl$)()):bt(e)},Gn=(e,t)=>{t==="visible"||t==="intersection-observer"?bc("qvisible",Nn(e)):t==="load"||t==="document-ready"?qs("qinit",Nn(e)):t!=="idle"&&t!=="document-idle"||qs("qidle",Nn(e))},Nn=e=>{const t=e.$qrl$,n=Mt(t.$chunk$,"_hW",fc,null,null,[e],t.$symbol$);return t.dev&&(n.dev=t.dev),n},Rr=e=>Ee(e)&&e instanceof qn,Tc=(e,t)=>{let n=`${Ie(e.$flags$)} ${Ie(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;return e.$state$&&(n+=` ${t(e.$state$)}`),n},qc=e=>{const[t,n,r,s,o]=e.split(" ");return new qn($e(t),$e(n),s,r,o)};class qn{constructor(t,n,r,s,o){q(this,"$flags$");q(this,"$index$");q(this,"$el$");q(this,"$qrl$");q(this,"$state$");this.$flags$=t,this.$index$=n,this.$el$=r,this.$qrl$=s,this.$state$=o}}function Cc(e){return Ac(e)&&e.nodeType===1}function Ac(e){return e&&typeof e.nodeType=="number"}const yt=1,It=2,Pr=4,zr=8,ce=e=>e[kn],te=(e,t)=>{const n=ce(e);if(n)return n;const r=Cn(e),s=me(e,"q:id");if(s){const o=t.$pauseCtx$;if(r.$id$=s,o){const{getObject:a,meta:i,refs:l}=o;if(Cc(e)){const c=l[s];c&&(r.$refMap$=c.split(" ").map(a),r.li=kl(r,t.$containerEl$))}else{const c=e.getAttribute("q:sstyle");r.$scopeIds$=c?c.split("|"):null;const u=i[s];if(u){const p=u.s,f=u.h,$=u.c,h=u.w;if(p&&(r.$seq$=p.split(" ").map(a)),h&&(r.$tasks$=h.split(" ").map(a)),$){r.$contexts$=new Map;for(const g of $.split(" ")){const[v,m]=g.split("=");r.$contexts$.set(v,a(m))}}if(f){const[g,v]=f.split(" ");if(r.$flags$=Pr,g&&(r.$componentQrl$=a(g)),v){const m=a(v);r.$props$=m,En(m,2),m[O]=Ic(m)}else r.$props$=Ct(_n(),t)}}}}}return r},Ic=e=>{const t={},n=Ge(e);for(const r in n)r.startsWith("$$")&&(t[r.slice(2)]=n[r]);return t},Cn=e=>{const t={$flags$:0,$id$:"",$element$:e,$refMap$:[],li:[],$tasks$:null,$seq$:null,$slots$:null,$scopeIds$:null,$appendStyles$:null,$props$:null,$vdom$:null,$componentQrl$:null,$contexts$:null,$dynamicSlots$:null,$parentCtx$:void 0,$realParentCtx$:void 0};return e[kn]=t,t},Rc=(e,t)=>{var n;(n=e.$tasks$)==null||n.forEach(r=>{t.$clearSub$(r),sa(r)}),e.$componentQrl$=null,e.$seq$=null,e.$tasks$=null};let nt;function Pc(e){if(nt===void 0){const t=ae();return t&&t.$locale$?t.$locale$:e}return nt}function Cs(e,t){const n=nt;try{return nt=e,t()}finally{nt=n}}function zc(e){nt=e}let mt;const ae=()=>{if(!mt){const e=typeof document<"u"&&document&&document.__q_context__;return e?M(e)?document.__q_context__=oa(e):e:void 0}return mt},Dc=()=>{const e=ae();if(!e)throw W(14);return e},Dr=()=>{const e=ae();if(!e||e.$event$!=="qRender")throw W(20);return e.$hostElement$,e.$waitOn$,e.$renderCtx$,e.$subscriber$,e},Mc=()=>Dr().$renderCtx$.$static$.$containerState$;function ne(e,t,...n){return Nc.call(this,e,t,n)}function Nc(e,t,n){const r=mt;let s;try{mt=e,s=t.apply(this,n)}finally{mt=r}return s}const Lc=(e,t)=>{const n=e.$waitOn$;if(n.length===0){const r=t();F(r)&&n.push(r)}else n.push(Promise.all(n).then(t))},oa=([e,t,n])=>{const r=e.closest("[q\\:container]"),s=(r==null?void 0:r.getAttribute("q:locale"))||void 0;return s&&zc(s),re(s,void 0,e,t,n)},re=(e,t,n,r,s)=>({$url$:s,$i$:0,$hostElement$:t,$element$:n,$event$:r,$qrl$:void 0,$waitOn$:void 0,$subscriber$:void 0,$renderCtx$:void 0,$locale$:e||(typeof r=="object"&&r&&"locale"in r?r.locale:void 0)}),Mr=e=>e.closest("[q\\:container]"),aa=e=>ne(void 0,e),As=re(void 0,void 0,void 0,"qRender"),_e=(e,t)=>(As.$subscriber$=t,ne(As,()=>e.value)),Oc=e=>{const t=ae();return t&&t.$hostElement$&&t.$renderCtx$&&(te(t.$hostElement$,t.$renderCtx$.$static$.$containerState$).$flags$|=zr),e},jc=(e,t,n,r)=>{const s=t.$subsManager$.$createManager$(r);return new wt(e,s,n)},$t=Symbol("proxy manager"),Uc=1,Wc=2,ia=Symbol("unassigned signal");class Rt{}var oo,ao,io;class wt extends(io=Rt,ao=pe,oo=$t,io){constructor(n,r,s){super();q(this,"untrackedValue");q(this,ao);q(this,oo,0);this.untrackedValue=n,this[pe]=r,this[$t]=s}valueOf(){}toString(){return`[Signal ${String(this.value)}]`}toJSON(){return{value:this.value}}get value(){var r;if(this[$t]&Wc)throw ia;const n=(r=ae())==null?void 0:r.$subscriber$;return n&&this[pe].$addSub$(n),this.untrackedValue}set value(n){const r=this[pe];r&&this.untrackedValue!==n&&(this.untrackedValue=n,r.$notifySubs$())}}class Yn extends Rt{constructor(n,r,s){super();q(this,"$func$");q(this,"$args$");q(this,"$funcStr$");this.$func$=n,this.$args$=r,this.$funcStr$=s}get value(){return this.$func$.apply(void 0,this.$args$)}}class Vn extends Rt{constructor(n,r){super();q(this,"ref");q(this,"prop");this.ref=n,this.prop=r}get[pe](){return Z(this.ref)}get value(){return this.ref[this.prop]}set value(n){this.ref[this.prop]=n}}const V=e=>e instanceof Rt,Fc=(e,t)=>{var s,o;if(!Ee(e))return e[t];if(e instanceof Rt)return e;const n=Ge(e);if(n){const a=n["$$"+t];if(a)return a;if(((s=n[O])==null?void 0:s[t])!==!0)return new Vn(e,t)}const r=(o=e[O])==null?void 0:o[t];return V(r)?r:O},U=(e,t)=>{const n=Fc(e,t);return n===O?e[t]:n},Is=Symbol("ContainerState"),ct=e=>{let t=e[Is];return t||(e[Is]=t=Nr(e,me(e,"q:base")??"/")),t},Nr=(e,t)=>{const n={};if(e){const s=e.attributes;if(s)for(let o=0;o<s.length;o++){const a=s[o];n[a.name]=a.value}}const r={$containerEl$:e,$elementIndex$:0,$styleMoved$:!1,$proxyMap$:new WeakMap,$opsNext$:new Set,$taskNext$:new Set,$taskStaging$:new Set,$hostsNext$:new Set,$hostsStaging$:new Set,$styleIds$:new Set,$events$:new Set,$serverData$:{containerAttributes:n},$base$:t,$renderPromise$:void 0,$hostsRendering$:void 0,$pauseCtx$:void 0,$subsManager$:null,$inlineFns$:new Map};return r.$subsManager$=xd(r),r},Lr=(e,t)=>{if(ee(e))return e(t);if(V(e))return ie()?e.untrackedValue=t:e.value=t;throw W(32,e)},la=128,Qc=e=>ze(e)&&e.hasAttribute("q:container"),Ie=e=>e.toString(36),$e=e=>parseInt(e,36),ca=e=>{const t=e.indexOf(":");return e&&vl(e.slice(t+1))},Pt="http://www.w3.org/2000/svg",Ue=1,Or=2,rn=[],sn=(e,t,n,r)=>{t.$elm$;const s=n.$children$;if(s.length===1&&s[0].$type$===":skipRender")return void(n.$children$=t.$children$);const o=t.$elm$;let a=an;t.$children$===rn&&o.nodeName==="HEAD"&&(a=Gc,r|=Or);const i=Bc(t,a);return i.length>0&&s.length>0?Hc(e,o,i,s,r):i.length>0&&s.length===0?jr(e.$static$,i,0,i.length-1):s.length>0?fa(e,o,null,s,0,s.length-1,r):void 0},Bc=(e,t)=>{const n=e.$children$;return n===rn?e.$children$=ua(e.$elm$,t):n},Hc=(e,t,n,r,s)=>{let o=0,a=0,i=n.length-1,l=n[0],c=n[i],u=r.length-1,p=r[0],f=r[u],$,h,g;const v=[],m=e.$static$;for(;o<=i&&a<=u;)if(l==null)l=n[++o];else if(c==null)c=n[--i];else if(p==null)p=r[++a];else if(f==null)f=r[--u];else if(l.$id$===p.$id$)v.push(Ve(e,l,p,s)),l=n[++o],p=r[++a];else if(c.$id$===f.$id$)v.push(Ve(e,c,f,s)),c=n[--i],f=r[--u];else if(l.$key$&&l.$id$===f.$id$)l.$elm$,c.$elm$,v.push(Ve(e,l,f,s)),lu(m,t,l.$elm$,c.$elm$),l=n[++o],f=r[--u];else if(c.$key$&&c.$id$===p.$id$)l.$elm$,c.$elm$,v.push(Ve(e,c,p,s)),tt(m,t,c.$elm$,l.$elm$),c=n[--i],p=r[++a];else{if($===void 0&&($=ou(n,o,i)),h=$[p.$key$],h===void 0){const w=We(e,p,s,v);tt(m,t,w,l==null?void 0:l.$elm$)}else if(g=n[h],g.$type$!==p.$type$){const w=We(e,p,s,v);P(w,b=>{tt(m,t,b,l==null?void 0:l.$elm$)})}else v.push(Ve(e,g,p,s)),n[h]=void 0,g.$elm$,tt(m,t,g.$elm$,l.$elm$);p=r[++a]}a<=u&&v.push(fa(e,t,r[u+1]==null?null:r[u+1].$elm$,r,a,u,s));let y=hr(v);return o<=i&&(y=P(y,()=>{jr(m,n,o,i)})),y},et=(e,t)=>{const n=he(e)?e.close:null,r=[];let s=e.firstChild;for(;(s=Qr(s))&&(t(s)&&r.push(s),s=s.nextSibling,s!==n););return r},ua=(e,t)=>et(e,t).map(da),da=e=>{var t;return ze(e)?((t=ce(e))==null?void 0:t.$vdom$)??on(e):on(e)},on=e=>{if(De(e)){const t=new ke(e.localName,{},null,rn,0,Xn(e));return t.$elm$=e,t}if(dr(e)){const t=new ke(e.nodeName,Y,null,rn,0,null);return t.$text$=e.data,t.$elm$=e,t}},Gc=e=>{const t=e.nodeType;return t===1?e.hasAttribute("q:head"):t===111},Jn=e=>e.nodeName==="Q:TEMPLATE",an=e=>{const t=e.nodeType;if(t===3||t===111)return!0;if(t!==1)return!1;const n=e.nodeName;return n!=="Q:TEMPLATE"&&(n==="HEAD"?e.hasAttribute("q:head"):n!=="STYLE"||!e.hasAttribute(Sn))},pa=e=>{const t={};for(const n of e){const r=Yc(n);(t[r]??(t[r]=new ke(at,{[Eo]:""},null,[],0,r))).$children$.push(n)}return t},Ve=(e,t,n,r)=>{t.$type$,n.$type$,t.$key$,n.$key$,t.$id$,n.$id$;const s=t.$elm$,o=n.$type$,a=e.$static$,i=a.$containerState$,l=e.$cmpCtx$;if(n.$elm$=s,o==="#text"){a.$visited$.push(s);const f=n.$signal$;return f&&(n.$text$=vt(_e(f,[4,l.$element$,f,s]))),void Re(a,s,"data",n.$text$)}if(o==="#signal")return;const c=n.$props$,u=n.$flags$,p=te(s,i);if(o!==at){let f=!!(r&Ue);if(f||o!=="svg"||(r|=Ue,f=!0),c!==Y){1&u||(p.li.length=0);const $=t.$props$;n.$props$=$;for(const h in c){let g=c[h];if(h!=="ref")if(br(h)){const v=wr(p.li,h,g,i.$containerEl$);ha(a,s,v)}else V(g)&&(g=_e(g,[1,l.$element$,g,s,h])),h==="class"?g=kr(g,l):h==="style"&&(g=Tn(g)),$[h]!==g&&($[h]=g,Ur(a,s,h,g,f));else g!==void 0&&Lr(g,s)}}return 2&u||(f&&o==="foreignObject"&&(r&=-2),c[X]!==void 0)||o==="textarea"?void 0:sn(e,t,n,r)}if("q:renderFn"in c){const f=c.props;tu(i,p,f);let $=!!(p.$flags$&yt);return $||p.$componentQrl$||p.$element$.hasAttribute("q:id")||(zo(e,p),p.$componentQrl$=f["q:renderFn"],p.$componentQrl$,$=!0),$?P(qr(e,p,r),()=>Rs(e,p,n,r)):Rs(e,p,n,r)}if("q:s"in c)return l.$slots$,void l.$slots$.push(n);if(X in c)Re(a,s,"innerHTML",c[X]);else if(!(2&u))return sn(e,t,n,r)},Rs=(e,t,n,r)=>{if(2&n.$flags$)return;const s=e.$static$,o=pa(n.$children$),a=$a(t);for(const i in a.slots)if(!o[i]){const l=a.slots[i],c=ua(l,an);if(c.length>0){const u=ce(l);u&&u.$vdom$&&(u.$vdom$.$children$=[]),jr(s,c,0,c.length-1)}}for(const i in a.templates){const l=a.templates[i];l&&!o[i]&&(a.templates[i]=void 0,Fr(s,l))}return hr(Object.keys(o).map(i=>{const l=o[i],c=ma(s,a,t,i,e.$static$.$containerState$),u=Cr(c),p=At(e),f=c.$element$;p.$slotCtx$=c,c.$vdom$=l,l.$elm$=f;let $=-2&r;f.isSvg&&($|=Ue);const h=s.$addSlots$.findIndex(g=>g[0]===f);return h>=0&&s.$addSlots$.splice(h,1),sn(p,u,l,$)}))},fa=(e,t,n,r,s,o,a)=>{const i=[];for(;s<=o;++s){const l=r[s],c=We(e,l,a,i);tt(e.$static$,t,c,n)}return Xe(i)},jr=(e,t,n,r)=>{for(;n<=r;++n){const s=t[n];s&&(s.$elm$,Fr(e,s.$elm$))}},ma=(e,t,n,r,s)=>{const o=t.slots[r];if(o)return te(o,s);const a=t.templates[r];if(a)return te(a,s);const i=ya(e.$doc$,r),l=Cn(i);return l.$parentCtx$=n,du(e,n.$element$,i),t.templates[r]=i,l},Yc=e=>e.$props$[le]??"",We=(e,t,n,r)=>{const s=t.$type$,o=e.$static$.$doc$,a=e.$cmpCtx$;if(s==="#text")return t.$elm$=o.createTextNode(t.$text$);if(s==="#signal"){const v=t.$signal$,m=v.value;if(He(m)){const y=Ae(m);if(V(y))throw new Error("NOT IMPLEMENTED: Promise");if(Array.isArray(y))throw new Error("NOT IMPLEMENTED: Array");{const w=We(e,y,n,r);return _e(v,4&n?[3,w,v,w]:[4,a.$element$,v,w]),t.$elm$=w}}{const y=o.createTextNode(t.$text$);return y.data=t.$text$=vt(m),_e(v,4&n?[3,y,v,y]:[4,a.$element$,v,y]),t.$elm$=y}}let i,l=!!(n&Ue);l||s!=="svg"||(n|=Ue,l=!0);const c=s===at,u=t.$props$,p=e.$static$,f=p.$containerState$;c?i=gu(o,l):s==="head"?(i=o.head,n|=Or):(i=Wr(o,s,l),n&=-3),2&t.$flags$&&(n|=4),t.$elm$=i;const $=Cn(i);if(e.$slotCtx$?($.$parentCtx$=e.$slotCtx$,$.$realParentCtx$=e.$cmpCtx$):$.$parentCtx$=e.$cmpCtx$,c){if("q:renderFn"in u){const v=u["q:renderFn"],m=_n(),y=f.$subsManager$.$createManager$(),w=new Proxy(m,new Co(f,y)),b=u.props;if(f.$proxyMap$.set(m,w),$.$props$=w,b!==Y){const T=m[O]=b[O]??Y;for(const C in b)if(C!=="children"&&C!==le){const x=T[C];V(x)?m["$$"+C]=x:m[C]=b[C]}}zo(e,$),$.$componentQrl$=v;const k=P(qr(e,$,n),()=>{let T=t.$children$;if(T.length===0)return;T.length===1&&T[0].$type$===":skipRender"&&(T=T[0].$children$);const C=$a($),x=[],_=pa(T);for(const S in _){const E=_[S],I=ma(p,C,$,S,p.$containerState$),N=At(e),de=I.$element$;N.$slotCtx$=I,I.$vdom$=E,E.$elm$=de;let Q=-2&n;de.isSvg&&(Q|=Ue);for(const R of E.$children$){const B=We(N,R,Q,x);R.$elm$,R.$elm$,ba(p,de,B)}}return Xe(x)});return F(k)&&r.push(k),i}if("q:s"in u)a.$slots$,$u(i,t.$key$),oe(i,"q:sref",a.$id$),oe(i,"q:s",""),a.$slots$.push(t),p.$addSlots$.push([i,a.$element$]);else if(X in u)return Re(p,i,"innerHTML",u[X]),i}else{if(t.$immutableProps$){const v=u!==Y?Object.fromEntries(Object.entries(t.$immutableProps$).map(([m,y])=>[m,y===O?u[m]:y])):t.$immutableProps$;Ds(p,$,a,v,l,!0)}if(u!==Y){$.$vdom$=t;const v=t.$immutableProps$?Object.fromEntries(Object.entries(u).filter(([m])=>!(m in t.$immutableProps$))):u;t.$props$=Ds(p,$,a,v,l,!1)}if(l&&s==="foreignObject"&&(l=!1,n&=-2),a){const v=a.$scopeIds$;v&&v.forEach(m=>{i.classList.add(m)}),a.$flags$&It&&($.li.push(...a.li),a.$flags$&=-3)}for(const v of $.li)ha(p,i,v[0]);if(u[X]!==void 0)return i;l&&s==="foreignObject"&&(l=!1,n&=-2)}let h=t.$children$;if(h.length===0)return i;h.length===1&&h[0].$type$===":skipRender"&&(h=h[0].$children$);const g=h.map(v=>We(e,v,n,r));for(const v of g)xt(i,v);return i},Vc=e=>{const t=e.$slots$;return t||(e.$element$.parentElement,e.$slots$=Jc(e))},$a=e=>{const t=Vc(e),n={},r={},s=Array.from(e.$element$.childNodes).filter(Jn);for(const o of t)o.$elm$,n[o.$key$??""]=o.$elm$;for(const o of s)r[me(o,le)??""]=o;return{slots:n,templates:r}},Jc=e=>{const t=e.$element$.parentElement;return wu(t,"q:sref",e.$id$).map(on)},Xc=(e,t,n)=>(Re(e,t.style,"cssText",n),!0),Ps=(e,t,n)=>(t.namespaceURI===Pt?St(e,t,"class",n):Re(e,t,"className",n),!0),zs=(e,t,n,r)=>r in t&&((t[r]!==n||r==="value"&&!t.hasAttribute(r))&&(r==="value"&&t.tagName!=="OPTION"?iu(e,t,r,n):Re(e,t,r,n)),!0),pt=(e,t,n,r)=>(St(e,t,r.toLowerCase(),n),!0),Kc=(e,t,n)=>(Re(e,t,"innerHTML",n),!0),Zc=()=>!0,eu={style:Xc,class:Ps,className:Ps,value:zs,checked:zs,href:pt,list:pt,form:pt,tabIndex:pt,download:pt,innerHTML:Zc,[X]:Kc},Ur=(e,t,n,r,s)=>{if(Do(n))return void St(e,t,n,r!=null?String(r):r);const o=eu[n];o&&o(e,t,r,n)||(s||!(n in t)?(n.startsWith(Ao)&&ga(n.slice(15)),St(e,t,n,r)):Re(e,t,n,r))},Ds=(e,t,n,r,s,o)=>{const a={},i=t.$element$;for(const l in r){let c=r[l];if(l!=="ref")if(br(l))wr(t.li,l,c,e.$containerState$.$containerEl$);else{if(V(c)&&(c=_e(c,o?[1,i,c,n.$element$,l]:[2,n.$element$,c,i,l])),l==="class"){if(c=kr(c,n),!c)continue}else l==="style"&&(c=Tn(c));a[l]=c,Ur(e,i,l,c,s)}else c!==void 0&&Lr(c,i)}return a},tu=(e,t,n)=>{let r=t.$props$;if(r||(t.$props$=r=Ct(_n(),e)),n===Y)return;const s=Z(r),o=Ge(r),a=o[O]=n[O]??Y;for(const i in n)if(i!=="children"&&i!==le&&!a[i]){const l=n[i];o[i]!==l&&(o[i]=l,s.$notifySubs$(i))}},ht=(e,t,n,r)=>{if(n.$clearSub$(e),De(e)){if(r&&e.hasAttribute("q:s"))return void t.$rmSlots$.push(e);const s=ce(e);s&&Rc(s,n);const o=he(e)?e.close:null;let a=e.firstChild;for(;(a=Qr(a))&&(ht(a,t,n,!0),a=a.nextSibling,a!==o););}},nu=async e=>{mu(e)},xt=(e,t)=>{he(t)?t.appendTo(e):e.appendChild(t)},ru=(e,t)=>{he(t)?t.remove():e.removeChild(t)},su=(e,t,n)=>{he(t)?t.insertBeforeTo(e,(n==null?void 0:n.nextSibling)??null):e.insertBefore(t,(n==null?void 0:n.nextSibling)??null)},An=(e,t,n)=>{he(t)?t.insertBeforeTo(e,ln(n)):e.insertBefore(t,ln(n))},ou=(e,t,n)=>{const r={};for(let s=t;s<=n;++s){const o=e[s].$key$;o!=null&&(r[o]=s)}return r},ha=(e,t,n)=>{n.startsWith("on:")||St(e,t,n,""),ga(n)},ga=e=>{{const t=ca(e);try{(globalThis.qwikevents||(globalThis.qwikevents=[])).push(t)}catch{}}},St=(e,t,n,r)=>{e.$operations$.push({$operation$:au,$args$:[t,n,r]})},au=(e,t,n)=>{if(n==null||n===!1)e.removeAttribute(t);else{const r=n===!0?"":String(n);oe(e,t,r)}},Re=(e,t,n,r)=>{e.$operations$.push({$operation$:va,$args$:[t,n,r]})},iu=(e,t,n,r)=>{e.$postOperations$.push({$operation$:va,$args$:[t,n,r]})},va=(e,t,n)=>{try{e[t]=n??"",n==null&&Pe(e)&&ze(e)&&e.removeAttribute(t)}catch(r){Qe(wn(6),t,{node:e,value:n},r)}},Wr=(e,t,n)=>n?e.createElementNS(Pt,t):e.createElement(t),tt=(e,t,n,r)=>(e.$operations$.push({$operation$:An,$args$:[t,n,r||null]}),n),lu=(e,t,n,r)=>(e.$operations$.push({$operation$:su,$args$:[t,n,r||null]}),n),ba=(e,t,n)=>(e.$operations$.push({$operation$:xt,$args$:[t,n]}),n),cu=(e,t)=>{e.$containerState$.$styleIds$.add(t.styleId),e.$postOperations$.push({$operation$:uu,$args$:[e.$containerState$,t]})},uu=(e,t)=>{const n=e.$containerEl$,r=qt(n),s=r.documentElement===n,o=r.head,a=r.createElement("style");oe(a,Sn,t.styleId),oe(a,"hidden",""),a.textContent=t.content,s&&o?xt(o,a):An(n,a,n.firstChild)},du=(e,t,n)=>{e.$operations$.push({$operation$:pu,$args$:[t,n]})},pu=(e,t)=>{An(e,t,e.firstChild)},Fr=(e,t)=>{De(t)&&ht(t,e,e.$containerState$.$subsManager$,!0),e.$operations$.push({$operation$:fu,$args$:[t,e]})},fu=e=>{const t=e.parentElement;t&&ru(t,e)},ya=(e,t)=>{const n=Wr(e,"q:template",!1);return oe(n,le,t),oe(n,"hidden",""),oe(n,"aria-hidden","true"),n},mu=e=>{for(const t of e.$operations$)t.$operation$.apply(void 0,t.$args$);hu(e)},Xn=e=>me(e,"q:key"),$u=(e,t)=>{t!==null&&oe(e,"q:key",t)},hu=e=>{const t=e.$containerState$.$subsManager$;for(const n of e.$rmSlots$){const r=Xn(n),s=et(n,an);if(s.length>0){const o=n.getAttribute("q:sref"),a=e.$roots$.find(i=>i.$id$===o);if(a){const i=a.$element$;if(i.isConnected)if(et(i,Jn).some(l=>me(l,le)===r))ht(n,e,t,!1);else{const l=ya(e.$doc$,r);for(const c of s)xt(l,c);An(i,l,i.firstChild)}else ht(n,e,t,!1)}else ht(n,e,t,!1)}}for(const[n,r]of e.$addSlots$){const s=Xn(n),o=et(r,Jn).find(a=>a.getAttribute(le)===s);o&&(et(o,an).forEach(a=>{xt(n,a)}),o.remove())}},Ms=()=>{},gu=(e,t)=>{const n=e.createComment("qv "),r=e.createComment("/qv");return new wa(n,r,t)},vu=e=>{if(!e)return{};const t=e.split(" ");return Object.fromEntries(t.map(n=>{const r=n.indexOf("=");return r>=0?[n.slice(0,r),Su(n.slice(r+1))]:[n,""]}))},bu=e=>{const t=[];return Object.entries(e).forEach(([n,r])=>{t.push(r?`${n}=${xu(r)}`:`${n}`)}),t.join(" ")},yu=(e,t,n)=>e.ownerDocument.createTreeWalker(e,128,{acceptNode(r){const s=zt(r);return s&&me(s,t)===n?1:2}}),wu=(e,t,n)=>{const r=yu(e,t,n),s=[];let o=null;for(;o=r.nextNode();)s.push(zt(o));return s},xu=e=>e.replace(/ /g,"+"),Su=e=>e.replace(/\+/g," "),at=":virtual";class wa{constructor(t,n,r){q(this,"open");q(this,"close");q(this,"isSvg");q(this,"ownerDocument");q(this,"_qc_",null);q(this,"nodeType",111);q(this,"localName",at);q(this,"nodeName",at);q(this,"$attributes$");q(this,"$template$");this.open=t,this.close=n,this.isSvg=r;const s=this.ownerDocument=t.ownerDocument;this.$template$=Wr(s,"template",!1),this.$attributes$=vu(t.data.slice(3)),t.data.startsWith("qv "),t.__virtual=this,n.__virtual=this}insertBefore(t,n){const r=this.parentElement;return r?r.insertBefore(t,n||this.close):this.$template$.insertBefore(t,n),t}remove(){const t=this.parentElement;if(t){const n=this.childNodes;this.$template$.childElementCount,t.removeChild(this.open);for(let r=0;r<n.length;r++)this.$template$.appendChild(n[r]);t.removeChild(this.close)}}appendChild(t){return this.insertBefore(t,null)}insertBeforeTo(t,n){const r=this.childNodes;t.insertBefore(this.open,n);for(const s of r)t.insertBefore(s,n);t.insertBefore(this.close,n),this.$template$.childElementCount}appendTo(t){this.insertBeforeTo(t,null)}get namespaceURI(){var t;return((t=this.parentElement)==null?void 0:t.namespaceURI)??""}removeChild(t){this.parentElement?this.parentElement.removeChild(t):this.$template$.removeChild(t)}getAttribute(t){return this.$attributes$[t]??null}hasAttribute(t){return t in this.$attributes$}setAttribute(t,n){this.$attributes$[t]=n,this.open.data=Ns(this.$attributes$)}removeAttribute(t){delete this.$attributes$[t],this.open.data=Ns(this.$attributes$)}matches(t){return!1}compareDocumentPosition(t){return this.open.compareDocumentPosition(t)}closest(t){const n=this.parentElement;return n?n.closest(t):null}querySelectorAll(t){const n=[];return et(this,ul).forEach(r=>{De(r)&&(r.matches(t)&&n.push(r),n.concat(Array.from(r.querySelectorAll(t))))}),n}querySelector(t){for(const n of this.childNodes)if(ze(n)){if(n.matches(t))return n;const r=n.querySelector(t);if(r!==null)return r}return null}get innerHTML(){return""}set innerHTML(t){const n=this.parentElement;n?(this.childNodes.forEach(r=>this.removeChild(r)),this.$template$.innerHTML=t,n.insertBefore(this.$template$.content,this.close)):this.$template$.innerHTML=t}get firstChild(){if(this.parentElement){const t=this.open.nextSibling;return t===this.close?null:t}return this.$template$.firstChild}get nextSibling(){return this.close.nextSibling}get previousSibling(){return this.open.previousSibling}get childNodes(){if(!this.parentElement)return Array.from(this.$template$.childNodes);const t=[];let n=this.open;for(;(n=n.nextSibling)&&n!==this.close;)t.push(n);return t}get isConnected(){return this.open.isConnected}get parentElement(){return this.open.parentElement}}const Ns=e=>`qv ${bu(e)}`,Qr=e=>{if(e==null)return null;if(Et(e)){const t=zt(e);if(t)return t}return e},ku=e=>{let t=e,n=1;for(;t=t.nextSibling;)if(Et(t)){const r=t.__virtual;if(r)t=r;else if(t.data.startsWith("qv "))n++;else if(t.data==="/qv"&&(n--,n===0))return t}},zt=e=>{var n;const t=e.__virtual;if(t)return t;if(e.data.startsWith("qv ")){const r=ku(e);return new wa(e,r,((n=e.parentElement)==null?void 0:n.namespaceURI)===Pt)}return null},ln=e=>e==null?null:he(e)?e.open:e,_u=async e=>{const t=Nr(null,null),n=Sa(t);let r;for(z(e,n,!1);(r=n.$promises$).length>0;){n.$promises$=[];const c=await Promise.allSettled(r);for(const u of c)u.status==="rejected"&&console.error(u.reason)}const s=Array.from(n.$objSet$.keys());let o=0;const a=new Map;for(const c of s)a.set(c,Ie(o)),o++;if(n.$noSerialize$.length>0){const c=a.get(void 0);for(const u of n.$noSerialize$)a.set(u,c)}const i=c=>{let u="";if(F(c)){const f=ka(c);if(!f)throw W(27,c);c=f.value,u+=f.resolved?"~":"_"}if(Ee(c)){const f=Ge(c);f&&(u+="!",c=f)}const p=a.get(c);if(p===void 0)throw W(27,c);return p+u},l=Ea(s,i,null,n,t);return JSON.stringify({_entry:i(e),_objs:l})},Eu=async e=>{const t=qt(e),n=t.documentElement,r=xo(e)?n:e;if(me(r,"q:container")==="paused")throw W(21);const s=r===t.documentElement?t.body:r,o=ct(r),a=Tu(r,zu);oe(r,"q:container","paused");for(const p of a){const f=p.$element$,$=p.li;if(p.$scopeIds$){const h=Io(p.$scopeIds$);h&&f.setAttribute("q:sstyle",h)}if(p.$id$&&f.setAttribute("q:id",p.$id$),ze(f)&&$.length>0){const h=yr($);for(const g of h)f.setAttribute(g[0],Gr(g[1],o,p))}}const i=await xa(a,o,p=>Pe(p)&&dr(p)?Nu(p,o):null),l=t.createElement("script");oe(l,"type","qwik/json"),l.textContent=Iu(JSON.stringify(i.state,void 0,void 0)),s.appendChild(l);const c=Array.from(o.$events$,p=>JSON.stringify(p)),u=t.createElement("script");return u.textContent=`(window.qwikevents||=[]).push(${c.join(", ")})`,s.appendChild(u),i},xa=async(e,t,n,r)=>{var w;const s=Sa(t);r==null||r.forEach((b,k)=>{s.$seen$.add(k)});let o=!1;for(const b of e)if(b.$tasks$)for(const k of b.$tasks$)na(k)&&s.$resources$.push(k.$state$),sa(k);for(const b of e){const k=b.$element$,T=b.li;for(const C of T)if(ze(k)){const x=C[1],_=x.$captureRef$;if(_)for(const S of _)z(S,s,!0);s.$qrls$.push(x),o=!0}}if(!o)return{state:{refs:{},ctx:{},objs:[],subs:[]},objs:[],funcs:[],qrls:[],resources:s.$resources$,mode:"static"};let a;for(;(a=s.$promises$).length>0;)s.$promises$=[],await Promise.all(a);const i=s.$elements$.length>0;if(i){for(const b of s.$deferElements$)Br(b,s,b.$element$);for(const b of e)qu(b,s)}for(;(a=s.$promises$).length>0;)s.$promises$=[],await Promise.all(a);const l=new Map,c=Array.from(s.$objSet$.keys()),u=new Map,p=b=>{let k="";if(F(b)){const x=ka(b);if(!x)return null;b=x.value,k+=x.resolved?"~":"_"}if(Ee(b)){const x=Ge(b);if(x)k+="!",b=x;else if(De(b)){const _=(S=>{let E=l.get(S);return E===void 0&&(E=Mu(S),E||console.warn("Missing ID",S),l.set(S,E)),E})(b);return _?"#"+_+k:null}}const T=u.get(b);if(T)return T+k;const C=r==null?void 0:r.get(b);return C?"*"+C:n?n(b):null},f=b=>{const k=p(b);if(k===null){if(Vr(b)){const T=Ie(u.size);return u.set(b,T),T}throw W(27,b)}return k},$=new Map;for(const b of c){const k=(w=Du(b,t))==null?void 0:w.$subs$;if(!k)continue;const T=Pa(b)??0,C=[];1&T&&C.push(T);for(const x of k){const _=x[1];x[0]===0&&Pe(_)&&he(_)&&!s.$elements$.includes(ce(_))||C.push(x)}C.length>0&&$.set(b,C)}c.sort((b,k)=>($.has(b)?0:1)-($.has(k)?0:1));let h=0;for(const b of c)u.set(b,Ie(h)),h++;if(s.$noSerialize$.length>0){const b=u.get(void 0);for(const k of s.$noSerialize$)u.set(k,b)}const g=[];for(const b of c){const k=$.get(b);if(k==null)break;g.push(k.map(T=>typeof T=="number"?`_${T}`:yd(T,p)).filter(_o))}g.length,$.size;const v=Ea(c,f,p,s,t),m={},y={};for(const b of e){const k=b.$element$,T=b.$id$,C=b.$refMap$,x=b.$props$,_=b.$contexts$,S=b.$tasks$,E=b.$componentQrl$,I=b.$seq$,N={},de=he(k)&&s.$elements$.includes(b);if(C.length>0){const Q=Fe(C,f," ");Q&&(y[T]=Q)}else if(i){let Q=!1;if(de){const R=p(x);N.h=f(E)+(R?" "+R:""),Q=!0}else{const R=p(x);R&&(N.h=" "+R,Q=!0)}if(S&&S.length>0){const R=Fe(S,p," ");R&&(N.w=R,Q=!0)}if(de&&I&&I.length>0){const R=Fe(I,f," ");N.s=R,Q=!0}if(_){const R=[];_.forEach((Lt,dt)=>{const ye=p(Lt);ye&&R.push(`${dt}=${ye}`)});const B=R.join(" ");B&&(N.c=B,Q=!0)}Q&&(m[T]=N)}}return{state:{refs:y,ctx:m,objs:v,subs:g},objs:c,funcs:s.$inlinedFunctions$,resources:s.$resources$,qrls:s.$qrls$,mode:i?"render":"listeners"}},Fe=(e,t,n)=>{let r="";for(const s of e){const o=t(s);o!==null&&(r!==""&&(r+=n),r+=o)}return r},Tu=(e,t)=>{const n=[],r=t(e);r!==void 0&&n.push(r);const s=e.ownerDocument.createTreeWalker(e,1|la,{acceptNode(o){if(Pu(o))return 2;const a=t(o);return a!==void 0&&n.push(a),3}});for(;s.nextNode(););return n},qu=(e,t)=>{var s;const n=e.$realParentCtx$||e.$parentCtx$,r=e.$props$;if(n&&r&&!_a(r)&&t.$elements$.includes(n)){const o=(s=Z(r))==null?void 0:s.$subs$,a=e.$element$;if(o)for(const[i,l]of o)i===0?(l!==a&&it(Z(r),t,!1),Pe(l)?Au(l,t):z(l,t,!0)):(z(r,t,!1),it(Z(r),t,!1))}},Sa=e=>{const t=[];return e.$inlineFns$.forEach((n,r)=>{for(;t.length<=n;)t.push("");t[n]=r}),{$containerState$:e,$seen$:new Set,$objSet$:new Set,$prefetch$:0,$noSerialize$:[],$inlinedFunctions$:t,$resources$:[],$elements$:[],$qrls$:[],$deferElements$:[],$promises$:[]}},Cu=(e,t)=>{const n=ce(e);t.$elements$.includes(n)||(t.$elements$.push(n),n.$flags$&zr?(t.$prefetch$++,Br(n,t,!0),t.$prefetch$--):t.$deferElements$.push(n))},Au=(e,t)=>{const n=ce(e);if(n){if(t.$elements$.includes(n))return;t.$elements$.push(n),Br(n,t,e)}},Br=(e,t,n)=>{if(e.$props$&&!_a(e.$props$)&&(z(e.$props$,t,n),it(Z(e.$props$),t,n)),e.$componentQrl$&&z(e.$componentQrl$,t,n),e.$seq$)for(const r of e.$seq$)z(r,t,n);if(e.$tasks$){const r=t.$containerState$.$subsManager$.$groupToManagers$;for(const s of e.$tasks$)r.has(s)&&z(s,t,n)}if(n===!0&&(Ls(e,t),e.$dynamicSlots$))for(const r of e.$dynamicSlots$)Ls(r,t)},Ls=(e,t)=>{for(;e;){if(e.$contexts$)for(const n of e.$contexts$.values())z(n,t,!0);e=e.$parentCtx$}},Iu=e=>e.replace(/<(\/?script)/gi,"\\x3C$1"),it=(e,t,n)=>{if(t.$seen$.has(e))return;t.$seen$.add(e);const r=e.$subs$;for(const s of r)if(s[0]>0&&z(s[2],t,n),n===!0){const o=s[1];Pe(o)&&he(o)?s[0]===0&&Cu(o,t):z(o,t,!0)}},Kn=Symbol(),Ru=e=>e.then(t=>(e[Kn]={resolved:!0,value:t},t),t=>(e[Kn]={resolved:!1,value:t},t)),ka=e=>e[Kn],z=(e,t,n)=>{if(e!=null){const r=typeof e;switch(r){case"function":case"object":{if(t.$seen$.has(e))return;if(t.$seen$.add(e),Ia(e))return t.$objSet$.add(void 0),void t.$noSerialize$.push(e);const s=e,o=Ge(e);if(o){const a=!(2&Pa(e=o));if(n&&a&&it(Z(s),t,n),Ra(s))return void t.$objSet$.add(e)}if(pd(e,t,n))return void t.$objSet$.add(e);if(F(e))return void t.$promises$.push(Ru(e).then(a=>{z(a,t,n)}));if(r==="object"){if(Pe(e))return;if(M(e))for(let a=0;a<e.length;a++)z(s[a],t,n);else if(Tt(e))for(const a in e)z(s[a],t,n)}break}}}t.$objSet$.add(e)},Pu=e=>ze(e)&&e.hasAttribute("q:container"),zu=e=>{const t=Qr(e);if(De(t)){const n=ce(t);if(n&&n.$id$)return n}},Du=(e,t)=>{if(!Ee(e))return;if(e instanceof wt)return Z(e);const n=t.$proxyMap$.get(e);return n?Z(n):void 0},Mu=e=>{const t=ce(e);return t?t.$id$:null},Nu=(e,t)=>{const n=e.previousSibling;if(n&&Et(n)&&n.data.startsWith("t="))return"#"+n.data.slice(2);const r=e.ownerDocument,s=Ie(t.$elementIndex$++),o=r.createComment(`t=${s}`),a=r.createComment(""),i=e.parentElement;return i.insertBefore(o,e),i.insertBefore(a,e.nextSibling),"#"+s},_a=e=>Object.keys(e).length===0;function Ea(e,t,n,r,s){return e.map(o=>{if(o===null)return null;const a=typeof o;switch(a){case"undefined":return Rn;case"number":if(!Number.isFinite(o))break;return o;case"string":if(o.charCodeAt(0)<32)break;return o;case"boolean":return o}const i=fd(o,t,r,s);if(i!==void 0)return i;if(a==="object"){if(M(o))return o.map(t);if(Tt(o)){const l={};for(const c in o)if(n){const u=n(o[c]);u!==null&&(l[c]=u)}else l[c]=t(o[c]);return l}}throw W(3,o)})}const D=(e,t,n=Se)=>Mt(null,t,e,null,null,n,null),J=(e,t=Se)=>Mt(null,e,null,null,null,t,null),Hr=(e,t={})=>{var c,u;let n=e.$symbol$,r=e.$chunk$;const s=e.$refSymbol$??n,o=xn();if(o){const p=o.chunkForSymbol(s,r,(c=e.dev)==null?void 0:c.file);p?(r=p[1],e.$refSymbol$||(n=p[0])):console.error("serializeQRL: Cannot resolve symbol",n,"in",r,(u=e.dev)==null?void 0:u.file)}if(r==null)throw W(31,e.$symbol$);if(r.startsWith("./")&&(r=r.slice(2)),_d(e))if(t.$containerState$){const p=e.resolved,f=t.$containerState$,$=p.serialized||p.toString();let h=f.$inlineFns$.get($);h===void 0&&(h=f.$inlineFns$.size,f.$inlineFns$.set($,h)),n=String(h)}else So("Sync QRL without containerState");let a=`${r}#${n}`;const i=e.$capture$,l=e.$captureRef$;return l&&l.length?t.$getObjId$?a+=`[${Fe(l,t.$getObjId$," ")}]`:t.$addRefMap$&&(a+=`[${Fe(l,t.$addRefMap$," ")}]`):i&&i.length>0&&(a+=`[${i.join(" ")}]`),a},Gr=(e,t,n)=>{n.$element$;const r={$containerState$:t,$addRefMap$:s=>Lu(n.$refMap$,s)};return Fe(e,s=>Hr(s,r),`
`)},In=(e,t)=>{const n=e.length,r=Os(e,0,"#"),s=Os(e,r,"["),o=Math.min(r,s),a=e.substring(0,o),i=r==n?r:r+1,l=i==s?"default":e.substring(i,s),c=s===n?Se:e.substring(s+1,n-1).split(" "),u=Mt(a,l,null,null,c,null,null);return t&&u.$setContainer$(t),u},Os=(e,t,n)=>{const r=e.length,s=e.indexOf(n,t==r?0:t);return s==-1?r:s},Lu=(e,t)=>{const n=e.indexOf(t);return n===-1?(e.push(t),String(e.length-1)):String(n)},Ta=(e,t)=>(e.$capture$,e.$captureRef$=e.$capture$.map(n=>{const r=parseInt(n,10),s=t.$refMap$[r];return t.$refMap$.length>r,s})),Ou=e=>({__brand:"resource",value:void 0,loading:!ie(),_resolved:void 0,_error:void 0,_state:"pending",_timeout:(e==null?void 0:e.timeout)??-1,_cache:0}),ju=e=>Ee(e)&&e.__brand==="resource",Uu=(e,t)=>{const n=e._state;return n==="resolved"?`0 ${t(e._resolved)}`:n==="pending"?"1":`2 ${t(e._error)}`},Wu=e=>{const[t,n]=e.split(" "),r=Ou(void 0);return r.value=Promise.resolve(),t==="0"?(r._state="resolved",r._resolved=n,r.loading=!1):t==="1"?(r._state="pending",r.value=new Promise(()=>{}),r.loading=!0):t==="2"&&(r._state="rejected",r._error=n,r.loading=!1),r},cn=e=>L(Ce,{[Eo]:""},0,e.name??""),Rn="";function j(e){return{$prefixCode$:e.$prefix$.charCodeAt(0),$prefixChar$:e.$prefix$,$test$:e.$test$,$serialize$:e.$serialize$,$prepare$:e.$prepare$,$fill$:e.$fill$,$collect$:e.$collect$,$subs$:e.$subs$}}const Fu=j({$prefix$:"",$test$:e=>Vr(e),$collect$:(e,t,n)=>{if(e.$captureRef$)for(const r of e.$captureRef$)z(r,t,n);t.$prefetch$===0&&t.$qrls$.push(e)},$serialize$:(e,t)=>Hr(e,{$getObjId$:t}),$prepare$:(e,t)=>In(e,t.$containerEl$),$fill$:(e,t)=>{e.$capture$&&e.$capture$.length>0&&(e.$captureRef$=e.$capture$.map(t),e.$capture$=null)}}),Qu=j({$prefix$:"",$test$:e=>Rr(e),$collect$:(e,t,n)=>{z(e.$qrl$,t,n),e.$state$&&(z(e.$state$,t,n),n===!0&&e.$state$ instanceof wt&&it(e.$state$[pe],t,!0))},$serialize$:(e,t)=>Tc(e,t),$prepare$:e=>qc(e),$fill$:(e,t)=>{e.$el$=t(e.$el$),e.$qrl$=t(e.$qrl$),e.$state$&&(e.$state$=t(e.$state$))}}),Bu=j({$prefix$:"",$test$:e=>ju(e),$collect$:(e,t,n)=>{z(e.value,t,n),z(e._resolved,t,n)},$serialize$:(e,t)=>Uu(e,t),$prepare$:e=>Wu(e),$fill$:(e,t)=>{if(e._state==="resolved")e._resolved=t(e._resolved),e.value=Promise.resolve(e._resolved);else if(e._state==="rejected"){const n=Promise.reject(e._error);n.catch(()=>null),e._error=t(e._error),e.value=n}}}),Hu=j({$prefix$:"",$test$:e=>e instanceof URL,$serialize$:e=>e.href,$prepare$:e=>new URL(e)}),Gu=j({$prefix$:"",$test$:e=>e instanceof Date,$serialize$:e=>e.toISOString(),$prepare$:e=>new Date(e)}),Yu=j({$prefix$:"\x07",$test$:e=>e instanceof RegExp,$serialize$:e=>`${e.flags} ${e.source}`,$prepare$:e=>{const t=e.indexOf(" "),n=e.slice(t+1),r=e.slice(0,t);return new RegExp(n,r)}}),Vu=j({$prefix$:"",$test$:e=>e instanceof Error,$serialize$:e=>e.message,$prepare$:e=>{const t=new Error(e);return t.stack=void 0,t}}),Ju=j({$prefix$:"",$test$:e=>!!e&&typeof e=="object"&&xo(e),$prepare$:(e,t,n)=>n}),un=Symbol("serializable-data"),Xu=j({$prefix$:"",$test$:e=>Jr(e),$serialize$:(e,t)=>{const[n]=e[un];return Hr(n,{$getObjId$:t})},$prepare$:(e,t)=>{const n=In(e,t.$containerEl$);return ue(n)},$fill$:(e,t)=>{var r;const[n]=e[un];(r=n.$capture$)!=null&&r.length&&(n.$captureRef$=n.$capture$.map(t),n.$capture$=null)}}),Ku=j({$prefix$:"",$test$:e=>e instanceof Yn,$collect$:(e,t,n)=>{if(e.$args$)for(const r of e.$args$)z(r,t,n)},$serialize$:(e,t,n)=>{const r=Xl(e);let s=n.$inlinedFunctions$.indexOf(r);return s<0&&(s=n.$inlinedFunctions$.length,n.$inlinedFunctions$.push(r)),Fe(e.$args$,t," ")+" @"+Ie(s)},$prepare$:e=>{const t=e.split(" "),n=t.slice(0,-1),r=t[t.length-1];return new Yn(r,n,r)},$fill$:(e,t)=>{e.$func$,e.$func$=t(e.$func$),e.$args$=e.$args$.map(t)}}),Zu=j({$prefix$:"",$test$:e=>e instanceof wt,$collect$:(e,t,n)=>(z(e.untrackedValue,t,n),n===!0&&!(e[$t]&Uc)&&it(e[pe],t,!0),e),$serialize$:(e,t)=>t(e.untrackedValue),$prepare$:(e,t)=>{var n;return new wt(e,(n=t==null?void 0:t.$subsManager$)==null?void 0:n.$createManager$(),0)},$subs$:(e,t)=>{e[pe].$addSubs$(t)},$fill$:(e,t)=>{e.untrackedValue=t(e.untrackedValue)}}),ed=j({$prefix$:"",$test$:e=>e instanceof Vn,$collect$(e,t,n){if(z(e.ref,t,n),Ra(e.ref)){const r=Z(e.ref);$d(t.$containerState$.$subsManager$,r,n)&&z(e.ref[e.prop],t,n)}return e},$serialize$:(e,t)=>`${t(e.ref)} ${e.prop}`,$prepare$:e=>{const[t,n]=e.split(" ");return new Vn(t,n)},$fill$:(e,t)=>{e.ref=t(e.ref)}}),td=j({$prefix$:"",$test$:e=>typeof e=="number",$serialize$:e=>String(e),$prepare$:e=>Number(e)}),nd=j({$prefix$:"",$test$:e=>e instanceof URLSearchParams,$serialize$:e=>e.toString(),$prepare$:e=>new URLSearchParams(e)}),rd=j({$prefix$:"",$test$:e=>typeof FormData<"u"&&e instanceof globalThis.FormData,$serialize$:e=>{const t=[];return e.forEach((n,r)=>{t.push(typeof n=="string"?[r,n]:[r,n.name])}),JSON.stringify(t)},$prepare$:e=>{const t=JSON.parse(e),n=new FormData;for(const[r,s]of t)n.append(r,s);return n}}),sd=j({$prefix$:"",$test$:e=>He(e),$collect$:(e,t,n)=>{z(e.children,t,n),z(e.props,t,n),z(e.immutableProps,t,n),z(e.key,t,n);let r=e.type;r===cn?r=":slot":r===ge&&(r=":fragment"),z(r,t,n)},$serialize$:(e,t)=>{let n=e.type;return n===cn?n=":slot":n===ge&&(n=":fragment"),`${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.key)} ${t(e.children)} ${e.flags}`},$prepare$:e=>{const[t,n,r,s,o,a]=e.split(" ");return new lt(t,n,r,o,parseInt(a,10),s)},$fill$:(e,t)=>{e.type=hd(t(e.type)),e.props=t(e.props),e.immutableProps=t(e.immutableProps),e.key=t(e.key),e.children=t(e.children)}}),od=j({$prefix$:"",$test$:e=>typeof e=="bigint",$serialize$:e=>e.toString(),$prepare$:e=>BigInt(e)}),ad=j({$prefix$:"",$test$:e=>e instanceof Uint8Array,$serialize$:e=>{let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replace(/=+$/,"")},$prepare$:e=>{const t=atob(e),n=new Uint8Array(t.length);let r=0;for(const s of t)n[r++]=s.charCodeAt(0);return n},$fill$:void 0}),rt=Symbol(),id=j({$prefix$:"",$test$:e=>e instanceof Set,$collect$:(e,t,n)=>{e.forEach(r=>z(r,t,n))},$serialize$:(e,t)=>Array.from(e).map(t).join(" "),$prepare$:e=>{const t=new Set;return t[rt]=e,t},$fill$:(e,t)=>{const n=e[rt];e[rt]=void 0;const r=n.length===0?[]:n.split(" ");for(const s of r)e.add(t(s))}}),ld=j({$prefix$:"",$test$:e=>e instanceof Map,$collect$:(e,t,n)=>{e.forEach((r,s)=>{z(r,t,n),z(s,t,n)})},$serialize$:(e,t)=>{const n=[];return e.forEach((r,s)=>{n.push(t(s)+" "+t(r))}),n.join(" ")},$prepare$:e=>{const t=new Map;return t[rt]=e,t},$fill$:(e,t)=>{const n=e[rt];e[rt]=void 0;const r=n.length===0?[]:n.split(" ");r.length%2;for(let s=0;s<r.length;s+=2)e.set(t(r[s]),t(r[s+1]))}}),cd=j({$prefix$:"\x1B",$test$:e=>!!qa(e)||e===Rn,$serialize$:e=>e,$prepare$:e=>e}),Pn=[Fu,Qu,Bu,Hu,Gu,Yu,Vu,Ju,Xu,Ku,Zu,ed,td,nd,rd,sd,od,id,ld,cd,ad],js=(()=>{const e=[];return Pn.forEach(t=>{const n=t.$prefixCode$;for(;e.length<n;)e.push(void 0);e.push(t)}),e})();function qa(e){if(typeof e=="string"){const t=e.charCodeAt(0);if(t<js.length)return js[t]}}const ud=Pn.filter(e=>e.$collect$),dd=e=>{for(const t of Pn)if(t.$test$(e))return!0;return!1},pd=(e,t,n)=>{for(const r of ud)if(r.$test$(e))return r.$collect$(e,t,n),!0;return!1},fd=(e,t,n,r)=>{for(const s of Pn)if(s.$test$(e)){let o=s.$prefixChar$;return s.$serialize$&&(o+=s.$serialize$(e,t,n,r)),o}if(typeof e=="string")return e},Ca=(e,t)=>{const n=new Map,r=new Map;return{prepare(s){const o=qa(s);if(o){const a=o.$prepare$(s.slice(1),e,t);return o.$fill$&&n.set(a,o),o.$subs$&&r.set(a,o),a}return s},subs(s,o){const a=r.get(s);return!!a&&(a.$subs$(s,o,e),!0)},fill(s,o){const a=n.get(s);return!!a&&(a.$fill$(s,o,e),!0)}}},md={"!":(e,t)=>t.$proxyMap$.get(e)??vr(e,t),"~":e=>Promise.resolve(e),_:e=>Promise.reject(e)},$d=(e,t,n)=>{if(typeof n=="boolean")return n;const r=e.$groupToManagers$.get(n);return!!(r&&r.length>0)&&(r.length!==1||r[0]!==t)},hd=e=>e===":slot"?cn:e===":fragment"?ge:e,gd=(e,t)=>Zn(e,new Set,"_",t),Zn=(e,t,n,r)=>{const s=Dt(e);if(s==null)return e;if(vd(s)){if(t.has(s)||(t.add(s),dd(s)))return e;const o=typeof s;switch(o){case"object":if(F(s)||Pe(s))return e;if(M(s)){let i=0;return s.forEach((l,c)=>{if(c!==i)throw W(3,s);Zn(l,t,n+"["+c+"]"),i=c+1}),e}if(Tt(s)){for(const[i,l]of Object.entries(s))Zn(l,t,n+"."+i);return e}break;case"boolean":case"string":case"number":return e}let a="";if(a=r||"Value cannot be serialized",n!=="_"&&(a+=` in ${n},`),o==="object")a+=` because it's an instance of "${e==null?void 0:e.constructor.name}". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.dev/docs/advanced/dollar/`;else if(o==="function"){const i=e.name;a+=` because it's a function named "${i}". You might need to convert it to a QRL using $(fn):

const ${i} = $(${String(e)});

Please check out https://qwik.dev/docs/advanced/qrl/ for more information.`}console.error("Trying to serialize",e),So(a)}return e},Yr=new WeakSet,Aa=new WeakSet,vd=e=>!Ee(e)&&!ee(e)||!Yr.has(e),Ia=e=>Yr.has(e),Ra=e=>Aa.has(e),zn=e=>((typeof e=="object"&&e!==null||typeof e=="function")&&Yr.add(e),e),bd=e=>(Aa.add(e),e),Dt=e=>Ee(e)?Ge(e)??e:e,Ge=e=>e[Fn],Z=e=>e[pe],Pa=e=>e[Ke],yd=(e,t)=>{const n=e[0],r=typeof e[1]=="string"?e[1]:t(e[1]);if(!r)return;let s=n+" "+r,o;if(n===0)o=e[2];else{const a=t(e[2]);if(!a)return;n<=2?(o=e[5],s+=` ${a} ${Us(t(e[3]))} ${e[4]}`):n<=4&&(o=e[4],s+=` ${a} ${typeof e[3]=="string"?e[3]:Us(t(e[3]))}`)}return o&&(s+=` ${encodeURI(o)}`),s},wd=(e,t)=>{const n=e.split(" "),r=parseInt(n[0],10);n.length>=2;const s=t(n[1]);if(!s||Rr(s)&&!s.$el$)return;const o=[r,s];return r===0?(n.length<=3,o.push(Ln(n[2]))):r<=2?(n.length===5||n.length,o.push(t(n[2]),t(n[3]),n[4],Ln(n[5]))):r<=4&&(n.length===4||n.length,o.push(t(n[2]),t(n[3]),Ln(n[4]))),o},Ln=e=>{if(e!==void 0)return decodeURI(e)},xd=e=>{const t=new Map;return{$groupToManagers$:t,$createManager$:r=>new Sd(t,e,r),$clearSub$:r=>{const s=t.get(r);if(s){for(const o of s)o.$unsubGroup$(r);t.delete(r),s.length=0}},$clearSignal$:r=>{const s=t.get(r[1]);if(s)for(const o of s)o.$unsubEntry$(r)}}};class Sd{constructor(t,n,r){q(this,"$groupToManagers$");q(this,"$containerState$");q(this,"$subs$");this.$groupToManagers$=t,this.$containerState$=n,this.$subs$=[],r&&this.$addSubs$(r)}$addSubs$(t){this.$subs$.push(...t);for(const n of this.$subs$)this.$addToGroup$(n[1],this)}$addToGroup$(t,n){let r=this.$groupToManagers$.get(t);r||this.$groupToManagers$.set(t,r=[]),r.includes(n)||r.push(n)}$unsubGroup$(t){const n=this.$subs$;for(let r=0;r<n.length;r++)n[r][1]===t&&(n.splice(r,1),r--)}$unsubEntry$(t){const[n,r,s,o]=t,a=this.$subs$;if(n===1||n===2){const i=t[4];for(let l=0;l<a.length;l++){const c=a[l];c[0]===n&&c[1]===r&&c[2]===s&&c[3]===o&&c[4]===i&&(a.splice(l,1),l--)}}else if(n===3||n===4)for(let i=0;i<a.length;i++){const l=a[i];l[0]===n&&l[1]===r&&l[2]===s&&l[3]===o&&(a.splice(i,1),i--)}}$addSub$(t,n){const r=this.$subs$,s=t[1];t[0]===0&&r.some(([o,a,i])=>o===0&&a===s&&i===n)||(r.push(za=[...t,n]),this.$addToGroup$(s,this))}$notifySubs$(t){const n=this.$subs$;for(const r of n){const s=r[r.length-1];t&&s&&s!==t||uc(r,this.$containerState$)}}}let za;function kd(){return za}const Us=e=>{if(e==null)throw Qe("must be non null",e);return e},Vr=e=>typeof e=="function"&&typeof e.getSymbol=="function",_d=e=>Vr(e)&&e.$symbol$=="<sync>",Mt=(e,t,n,r,s,o,a)=>{let i;const l=async function(...m){return await $.call(this,ae())(...m)},c=m=>(i||(i=m),i),u=m=>typeof m!="function"||!(s!=null&&s.length)&&!(o!=null&&o.length)?m:function(...y){let w=ae();if(w){const b=w.$qrl$;w.$qrl$=l;const k=w.$event$;w.$event$===void 0&&(w.$event$=this);try{return m.apply(this,y)}finally{w.$qrl$=b,w.$event$=k}}return w=re(),w.$qrl$=l,w.$event$=this,ne.call(this,w,m,...y)},p=async m=>{if(n!==null)return n;if(m&&c(m),e===""){const b=i.getAttribute(To),k=qo(i.ownerDocument,b);return l.resolved=n=k[Number(t)]}const y=qd(),w=ae();{const b=xn().importSymbol(i,e,t);n=P(b,k=>l.resolved=n=u(k))}return typeof n=="object"&&F(n)&&n.then(()=>Ed(t,w==null?void 0:w.$element$,y),b=>{console.error(`qrl ${t} failed to load`,b),n=null}),n},f=m=>n!==null?n:p(m);function $(m,y){return(...w)=>P(f(),b=>{if(!ee(b))throw W(10);if(y&&y()===!1)return;const k=h(m);return ne.call(this,k,b,...w)})}const h=m=>m==null?re():M(m)?oa(m):m,g=a??t,v=Da(g);return Object.assign(l,{getSymbol:()=>g,getHash:()=>v,getCaptured:()=>o,resolve:p,$resolveLazy$:f,$setContainer$:c,$chunk$:e,$symbol$:t,$refSymbol$:a,$hash$:v,getFn:$,$capture$:s,$captureRef$:o,dev:null,resolved:void 0}),n&&(n=P(n,m=>l.resolved=n=u(m))),l},Da=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e};const Ws=new Set,Ed=(e,t,n)=>{Ws.has(e)||(Ws.add(e),Td("qsymbol",{symbol:e,element:t,reqTime:n}))},Td=(e,t)=>{ie()||typeof document!="object"||document.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:t}))},qd=()=>ie()?0:typeof performance=="object"?performance.now():0,Cd=e=>e,Ad=function(e,t){return e.serialized=t,Mt("","<sync>",e,null,null,null,null)},ue=e=>{function t(n,r,s){const o=e.$hash$.slice(0,4)+":"+(r||"");return L(Ce,{[$l]:e,[le]:n[le],[O]:n[O],children:n.children,props:n},s,o)}return t[un]=[e],t},Jr=e=>typeof e=="function"&&e[un]!==void 0,Wt=(e,t)=>{const{val:n,set:r,iCtx:s}=Be();if(n!=null)return n;const o=ee(e)?ne(void 0,e):e;if((t==null?void 0:t.reactive)===!1)return r(o),o;{const a=vr(o,s.$renderCtx$.$static$.$containerState$,(t==null?void 0:t.deep)??!0?1:0);return r(a),a}};function Xr(e,t){var r;const n=ae();return((r=n==null?void 0:n.$renderCtx$)==null?void 0:r.$static$.$containerState$.$serverData$[e])??t}const Fs=new Map,Id=(e,t)=>{let n=Fs.get(t);return n||Fs.set(t,n=Rd(e,t)),n},Rd=(e,t)=>{const n=e.length,r=[],s=[];let o=0,a=o,i=st,l=0;for(;o<n;){const $=o;let h=e.charCodeAt(o++);h===Ud&&(o++,h=Ua);const g=Hd[i];for(let v=0;v<g.length;v++){const m=g[v],[y,w,b]=m;if((y===l||y===A||y===dn&&Gt(l)||y===er&&Bs(l))&&(w===h||w===A||w===dn&&Gt(h)||w===xe&&!Gt(h)&&h!==Zr||w===er&&Bs(h))&&(m.length==3||p(m))){if(m.length>3&&(h=e.charCodeAt(o-1)),b===H||b==Oe){b===Oe&&(i!==Ma||f()?Qs(h)||u(o-(w==xe?1:w==tr?2:0)):(Qs(h)?c(o-2):u(o-2),a++)),w===xe&&(o--,h=l);do i=s.pop()||st,i===je&&(c(o-1),a++);while(Pd(i))}else s.push(i),i===je&&b===st?(c(o-8),a=o):b===Na&&u($),i=b;break}}l=h}return c(o),r.join("");function c($){r.push(e.substring(a,$)),a=$}function u($){i===je||f()||(c($),r.push(".","⭐️",t))}function p($){let h=0;if(e.charCodeAt(o)===nr){for(let g=1;g<10;g++)if(e.charCodeAt(o+g)===nr){h=g+1;break}}e:for(let g=3;g<$.length;g++){const v=$[g];for(let m=0;m<v.length;m++)if((e.charCodeAt(o+m+h)|Fd)!==v.charCodeAt(m))continue e;return o+=v.length+h,!0}return!1}function f(){return s.indexOf(je)!==-1||s.indexOf(Kr)!==-1}},Gt=e=>e>=Ld&&e<=Od||e>=Ua&&e<=jd||e>=Qd&&e<=Bd||e>=128||e===Wd||e===nr,Qs=e=>e===Je||e===Zr||e===Wa||e===ja||Gt(e),Pd=e=>e===La||e===Kr||e===Oa||e===je,Bs=e=>e===Nd||e===zd||e===Dd||e===Md,st=0,Ma=2,je=5,Na=6,Kr=10,La=11,Oa=12,H=17,Oe=18,A=0,dn=1,xe=2,er=3,zd=9,Dd=10,Md=13,Nd=32,ja=35,tr=41,nr=45,Zr=46,Ld=48,Od=57,Je=58,Ua=65,jd=90,Wa=91,Ud=92,Wd=95,Fd=32,Qd=97,Bd=122,Le=[[A,39,14],[A,34,15],[A,47,16,"*"]],Hd=[[[A,42,Ma],[A,Wa,7],[A,Je,Na,":","before","after","first-letter","first-line"],[A,Je,je,"global"],[A,Je,3,"has","host-context","not","where","is","matches","any"],[A,Je,4],[A,dn,1],[A,Zr,1],[A,ja,1],[A,64,Kr,"keyframe"],[A,64,La,"media","supports","container"],[A,64,Oa],[A,123,13],[47,42,16],[A,59,H],[A,125,H],[A,tr,H],...Le],[[A,xe,Oe]],[[A,xe,Oe]],[[A,40,st],[A,xe,Oe]],[[A,40,8],[A,xe,Oe]],[[A,40,st],[A,xe,H]],[[A,xe,H]],[[A,93,Oe],[A,39,14],[A,34,15]],[[A,tr,H],...Le],[[A,125,H],...Le],[[A,125,H],[er,dn,1],[A,Je,je,"global"],[A,123,13],...Le],[[A,123,st],[A,59,H],...Le],[[A,59,H],[A,123,9],...Le],[[A,125,H],[A,123,13],[A,40,8],...Le],[[A,39,H]],[[A,34,H]],[[42,47,H]]],Gd=e=>{Fa(e,t=>t,!1)},ut=e=>({scopeId:"⭐️"+Fa(e,Id,!0)}),Fa=(e,t,n)=>{const{val:r,set:s,iCtx:o,i:a,elCtx:i}=Be();if(r)return r;const l=El(e,a),c=o.$renderCtx$.$static$.$containerState$;if(s(l),i.$appendStyles$||(i.$appendStyles$=[]),i.$scopeIds$||(i.$scopeIds$=[]),n&&i.$scopeIds$.push(Tl(l)),c.$styleIds$.has(l))return l;c.$styleIds$.add(l);const u=e.$resolveLazy$(c.$containerEl$),p=f=>{i.$appendStyles$,i.$appendStyles$.push({styleId:l,content:t(f,l)})};return F(u)?o.$waitOn$.push(u.then(p)):p(u),l},Hs={manifestHash:"l13ob4",core:"q-Cn9eRv09.js",preloader:"q-XYi0b4s7.js",qwikLoader:"q-CuPr1DR2.js",bundleGraphAsset:"assets/CvINPCdj-bundle-graph.json",injections:[{tag:"style",location:"head",attributes:{"data-src":"/assets/B3GDbWRg-style.css",dangerouslySetInnerHTML:`:root{--neu-base: #e0e5ec;--neu-light-shadow: #ffffff;--neu-dark-shadow: #a3b1c6;--neu-accent: #8EE53F;--neu-accent-dark: #7c3f00;--neu-text-primary: #2d3748;--neu-text-secondary: #718096;--neu-text-muted: #a0aec0;--neu-success: #48bb78;--neu-warning: #ed8936;--neu-error: #f56565;--neu-spacing-xs: .25rem;--neu-spacing-sm: .5rem;--neu-spacing-md: 1rem;--neu-spacing-lg: 1.5rem;--neu-spacing-xl: 2rem;--neu-spacing-2xl: 3rem;--neu-spacing-3xl: 4rem;--neu-radius-sm: 8px;--neu-radius-md: 12px;--neu-radius-lg: 20px;--neu-radius-xl: 30px;--neu-radius-full: 9999px;--neu-shadow-sm: 3px 3px 6px var(--neu-dark-shadow), -3px -3px 6px var(--neu-light-shadow);--neu-shadow-md: 6px 6px 12px var(--neu-dark-shadow), -6px -6px 12px var(--neu-light-shadow);--neu-shadow-lg: 9px 9px 16px var(--neu-dark-shadow), -9px -9px 16px var(--neu-light-shadow);--neu-shadow-xl: 12px 12px 24px var(--neu-dark-shadow), -12px -12px 24px var(--neu-light-shadow);--neu-shadow-inset-sm: inset 3px 3px 6px var(--neu-dark-shadow), inset -3px -3px 6px var(--neu-light-shadow);--neu-shadow-inset-md: inset 5px 5px 10px var(--neu-dark-shadow), inset -5px -5px 10px var(--neu-light-shadow);--neu-shadow-inset-lg: inset 7px 7px 14px var(--neu-dark-shadow), inset -7px -7px 14px var(--neu-light-shadow);--neu-transition-fast: .15s ease;--neu-transition-base: .3s ease;--neu-transition-slow: .5s ease;--neu-z-base: 1;--neu-z-dropdown: 10;--neu-z-sticky: 50;--neu-z-fixed: 100;--neu-z-modal: 1000;--neu-z-tooltip: 1100}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:var(--neu-base);color:var(--neu-text-primary);line-height:1.6;overflow-x:hidden}.neu-flat{background:var(--neu-base);box-shadow:var(--neu-shadow-inset-md)}.neu-raised{background:var(--neu-base);box-shadow:var(--neu-shadow-lg);transition:all var(--neu-transition-base)}.neu-raised:hover{box-shadow:var(--neu-shadow-xl);transform:translateY(-2px)}.neu-raised:active{box-shadow:var(--neu-shadow-inset-md);transform:translateY(0)}.neu-card{background:var(--neu-base);border-radius:var(--neu-radius-lg);padding:var(--neu-spacing-xl);box-shadow:var(--neu-shadow-lg);transition:all var(--neu-transition-base)}.neu-card:hover{box-shadow:var(--neu-shadow-xl);transform:translateY(-4px)}.neu-button{display:inline-flex;align-items:center;justify-content:center;padding:var(--neu-spacing-md) var(--neu-spacing-xl);border:none;border-radius:var(--neu-radius-md);background:var(--neu-base);box-shadow:var(--neu-shadow-md);color:var(--neu-text-primary);font-weight:600;font-size:1rem;cursor:pointer;transition:all var(--neu-transition-base);position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.neu-button:hover{box-shadow:var(--neu-shadow-lg);transform:translateY(-2px)}.neu-button:active{box-shadow:var(--neu-shadow-inset-sm);transform:translateY(0)}.neu-button.primary{background:linear-gradient(145deg,var(--neu-accent),var(--neu-accent-dark));color:#fff}.neu-button.primary:hover{background:linear-gradient(145deg,var(--neu-accent-dark),var(--neu-accent))}.neu-input{width:100%;padding:var(--neu-spacing-md) var(--neu-spacing-lg);border:none;border-radius:var(--neu-radius-md);background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);color:var(--neu-text-primary);font-size:1rem;transition:all var(--neu-transition-base);outline:none}.neu-input:focus{box-shadow:var(--neu-shadow-inset-md)}.neu-input::placeholder{color:var(--neu-text-muted)}.neu-badge{display:inline-block;padding:var(--neu-spacing-xs) var(--neu-spacing-md);border-radius:var(--neu-radius-full);background:var(--neu-base);box-shadow:var(--neu-shadow-sm);color:var(--neu-text-secondary);font-size:.875rem;font-weight:500;transition:all var(--neu-transition-base)}.neu-badge:hover{box-shadow:var(--neu-shadow-md);transform:scale(1.05)}.neu-progress{width:100%;height:20px;border-radius:var(--neu-radius-full);background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);overflow:hidden;position:relative}.neu-progress-bar{height:100%;border-radius:var(--neu-radius-full);background:linear-gradient(90deg,var(--neu-accent),var(--neu-accent-dark));box-shadow:2px 2px 4px #6c63ff4d;transition:width var(--neu-transition-slow)}.neu-toggle{position:relative;width:60px;height:30px;border-radius:var(--neu-radius-full);background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);cursor:pointer;transition:all var(--neu-transition-base)}.neu-toggle-slider{position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:var(--neu-base);box-shadow:var(--neu-shadow-sm);transition:all var(--neu-transition-base)}.neu-toggle.active .neu-toggle-slider{transform:translate(30px);background:var(--neu-accent)}.neu-divider{width:100%;height:2px;background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);margin:var(--neu-spacing-xl) 0;border-radius:var(--neu-radius-full)}.neu-tooltip{position:absolute;padding:var(--neu-spacing-sm) var(--neu-spacing-md);background:var(--neu-base);box-shadow:var(--neu-shadow-md);border-radius:var(--neu-radius-sm);color:var(--neu-text-primary);font-size:.875rem;white-space:nowrap;z-index:var(--neu-z-tooltip);pointer-events:none;opacity:0;transition:opacity var(--neu-transition-base)}.neu-tooltip.visible{opacity:1}.neu-text-primary{color:var(--neu-text-primary)}.neu-text-secondary{color:var(--neu-text-secondary)}.neu-text-muted{color:var(--neu-text-muted)}.neu-text-accent{color:var(--neu-accent)}.neu-bg-base{background:var(--neu-base)}.neu-bg-accent{background:var(--neu-accent)}.neu-rounded-sm{border-radius:var(--neu-radius-sm)}.neu-rounded-md{border-radius:var(--neu-radius-md)}.neu-rounded-lg{border-radius:var(--neu-radius-lg)}.neu-rounded-xl{border-radius:var(--neu-radius-xl)}.neu-rounded-full{border-radius:var(--neu-radius-full)}.neu-p-xs{padding:var(--neu-spacing-xs)}.neu-p-sm{padding:var(--neu-spacing-sm)}.neu-p-md{padding:var(--neu-spacing-md)}.neu-p-lg{padding:var(--neu-spacing-lg)}.neu-p-xl{padding:var(--neu-spacing-xl)}.neu-m-xs{margin:var(--neu-spacing-xs)}.neu-m-sm{margin:var(--neu-spacing-sm)}.neu-m-md{margin:var(--neu-spacing-md)}.neu-m-lg{margin:var(--neu-spacing-lg)}.neu-m-xl{margin:var(--neu-spacing-xl)}@media (max-width: 768px){:root{--neu-shadow-sm: 2px 2px 4px var(--neu-dark-shadow), -2px -2px 4px var(--neu-light-shadow);--neu-shadow-md: 4px 4px 8px var(--neu-dark-shadow), -4px -4px 8px var(--neu-light-shadow);--neu-shadow-lg: 6px 6px 12px var(--neu-dark-shadow), -6px -6px 12px var(--neu-light-shadow);--neu-shadow-xl: 8px 8px 16px var(--neu-dark-shadow), -8px -8px 16px var(--neu-light-shadow)}.neu-card{padding:var(--neu-spacing-lg)}}@media (prefers-reduced-motion: reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}*:focus-visible{outline:2px solid var(--neu-accent);outline-offset:2px}::selection{background:var(--neu-accent);color:#fff}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInLeft{0%{opacity:0;transform:translate(-30px)}to{opacity:1;transform:translate(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translate(30px)}to{opacity:1;transform:translate(0)}}@keyframes scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes slideInUp{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes slideInDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes shimmer{0%{background-position:-1000px 0}to{background-position:1000px 0}}@keyframes typewriter{0%{width:0}to{width:100%}}@keyframes blink{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes wave{0%,to{transform:rotate(0)}10%{transform:rotate(14deg)}20%{transform:rotate(-8deg)}30%{transform:rotate(14deg)}40%{transform:rotate(-4deg)}50%{transform:rotate(10deg)}60%{transform:rotate(0)}}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-10px)}20%,40%,60%,80%{transform:translate(10px)}}@keyframes glow{0%,to{box-shadow:0 0 5px #6c63ff80}50%{box-shadow:0 0 20px #6c63ffcc}}@keyframes morphing{0%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30%}to{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}}@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}.animate-fadeIn{animation:fadeIn .6s ease-out}.animate-fadeInUp{animation:fadeInUp .6s ease-out}.animate-fadeInDown{animation:fadeInDown .6s ease-out}.animate-fadeInLeft{animation:fadeInLeft .6s ease-out}.animate-fadeInRight{animation:fadeInRight .6s ease-out}.animate-scaleIn{animation:scaleIn .5s ease-out}.animate-slideInUp{animation:slideInUp .5s ease-out}.animate-slideInDown{animation:slideInDown .5s ease-out}.animate-pulse{animation:pulse 2s infinite}.animate-float{animation:float 3s ease-in-out infinite}.animate-rotate{animation:rotate 2s linear infinite}.animate-shimmer{animation:shimmer 2s linear infinite;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);background-size:1000px 100%}.animate-typewriter{overflow:hidden;white-space:nowrap;animation:typewriter 3s steps(40,end)}.animate-blink{animation:blink 1s infinite}.animate-wave{animation:wave 2.5s infinite;transform-origin:70% 70%;display:inline-block}.animate-bounce{animation:bounce 2s infinite}.animate-shake{animation:shake .5s}.animate-glow{animation:glow 2s ease-in-out infinite}.animate-morphing{animation:morphing 8s ease-in-out infinite}.animate-gradientShift{animation:gradientShift 3s ease infinite;background-size:200% 200%}.stagger-1{animation-delay:.1s}.stagger-2{animation-delay:.2s}.stagger-3{animation-delay:.3s}.stagger-4{animation-delay:.4s}.stagger-5{animation-delay:.5s}.stagger-6{animation-delay:.6s}.stagger-7{animation-delay:.7s}.stagger-8{animation-delay:.8s}.scroll-animate{opacity:0;transform:translateY(30px);transition:all .6s ease-out}.scroll-animate.in-view{opacity:1;transform:translateY(0)}.scroll-animate-left{opacity:0;transform:translate(-50px);transition:all .6s ease-out}.scroll-animate-left.in-view{opacity:1;transform:translate(0)}.scroll-animate-right{opacity:0;transform:translate(50px);transition:all .6s ease-out}.scroll-animate-right.in-view{opacity:1;transform:translate(0)}.scroll-animate-scale{opacity:0;transform:scale(.8);transition:all .6s ease-out}.scroll-animate-scale.in-view{opacity:1;transform:scale(1)}.hover-lift{transition:transform .3s ease}.hover-lift:hover{transform:translateY(-5px)}.hover-grow{transition:transform .3s ease}.hover-grow:hover{transform:scale(1.05)}.hover-shrink{transition:transform .3s ease}.hover-shrink:hover{transform:scale(.95)}.hover-rotate{transition:transform .3s ease}.hover-rotate:hover{transform:rotate(5deg)}.loading-spinner{width:40px;height:40px;border:4px solid var(--neu-base);border-top-color:var(--neu-accent);border-radius:50%;animation:rotate 1s linear infinite}.loading-dots{display:flex;gap:8px}.loading-dots span{width:12px;height:12px;border-radius:50%;background:var(--neu-accent);animation:bounce 1.4s ease-in-out infinite}.loading-dots span:nth-child(1){animation-delay:0s}.loading-dots span:nth-child(2){animation-delay:.2s}.loading-dots span:nth-child(3){animation-delay:.4s}.transition-all{transition:all .3s ease}.transition-transform{transition:transform .3s ease}.transition-opacity{transition:opacity .3s ease}.transition-colors{transition:background-color .3s ease,color .3s ease}.will-change-transform{will-change:transform}.will-change-opacity{will-change:opacity}.gpu-accelerated{transform:translateZ(0);backface-visibility:hidden}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth;font-size:16px}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:var(--neu-base);color:var(--neu-text-primary);line-height:1.6;overflow-x:hidden;min-height:100vh}.container{max-width:1200px;margin:0 auto;padding:0 20px}.section{padding:80px 0;position:relative}@media (max-width: 768px){.section{padding:60px 0}}h1,h2,h3,h4,h5,h6{font-weight:700;line-height:1.2;margin-bottom:1rem;color:var(--neu-text-primary)}h1{font-size:3rem}h2{font-size:2.5rem}h3{font-size:2rem}h4{font-size:1.5rem}h5{font-size:1.25rem}h6{font-size:1rem}@media (max-width: 768px){h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.5rem}h4{font-size:1.25rem}}p{margin-bottom:1rem;color:var(--neu-text-secondary)}a{color:var(--neu-accent);text-decoration:none;transition:color .3s ease}a:hover{color:var(--neu-accent-dark)}.grid{display:grid;gap:30px}.grid-cols-1{grid-template-columns:repeat(1,1fr)}.grid-cols-2{grid-template-columns:repeat(2,1fr)}.grid-cols-3{grid-template-columns:repeat(3,1fr)}.grid-cols-4{grid-template-columns:repeat(4,1fr)}@media (max-width: 1024px){.lg\\:grid-cols-3,.lg\\:grid-cols-4{grid-template-columns:repeat(2,1fr)}}@media (max-width: 768px){.md\\:grid-cols-2,.md\\:grid-cols-3,.md\\:grid-cols-4{grid-template-columns:repeat(1,1fr)}}.flex{display:flex}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:1rem}.gap-4{gap:1.5rem}.gap-5{gap:2rem}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}.font-normal{font-weight:400}.hidden{display:none}.block{display:block}.inline-block{display:inline-block}.invisible{visibility:hidden}.visible{visibility:visible}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.overflow-hidden{overflow:hidden}.overflow-auto{overflow:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.w-full{width:100%}.h-full{height:100%}.min-h-screen{min-height:100vh}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.select-none{-webkit-user-select:none;user-select:none}.select-text{-webkit-user-select:text;user-select:text}.select-all{-webkit-user-select:all;user-select:all}
`}}],mapping:{s_0NkL50ppaIg:"q-DVY92jWc.js",s_0hCi1q038Qo:"q-DVY92jWc.js",s_1xEgQnu0yC4:"q-WQzLmYkg.js",s_42RUnvGm7aU:"q-C6UxDU7U.js",s_7w8zQT0J9wQ:"q-WQzLmYkg.js",s_euptowWQvR4:"q-S3Ea4SNL.js",s_x65cA0NoyOM:"q-C2bX4TKj.js",s_1M8Ii0d2Bp4:"q-0ysPT4X6.js",s_LuZO1QS7gEs:"q-0ysPT4X6.js",s_vKy2S362iTQ:"q-0ysPT4X6.js",s_zAJbdncFBqs:"q-0ysPT4X6.js",s_Ysfvd0zsHZc:"q-CuCPhVMA.js",s_26Zk9LevwR4:"q-AspTOEMU.js",s_35YlVmV10xA:"q-BabuxKjI.js",s_qJmIgBWFER0:"q-BLJu3xCm.js",s_0vphQYqOdZI:"q-bUr5Op4A.js",s_1V8LiPxWuaU:"q-BLJu3xCm.js",s_1raneLGffO8:"q-BabuxKjI.js",s_B0lqk5IDDy4:"q-BVqzRQLD.js",s_CIpJWWhXzoM:"q-Be8prhrj.js",s_JdVX0L8bEOA:"q-WQzLmYkg.js",s_MiPVFWJLcMo:"q-BzMkidsn.js",s_ScE8eseirUA:"q-C3NOIgNE.js",s_Ubng8hDLd1Y:"q-0ysPT4X6.js",s_bmV0oH7tsks:"q-Cn9eRv09.js",s_kQDJUnc38Vs:"q-BmW025R0.js",s_p1yCGpFL1xE:"q-CuCPhVMA.js",s_pWsmcogutG8:"q-D6dO6Zq9.js",s_ropMBSBWqro:"q-DVY92jWc.js",s_tntnak2DhJ8:"q-DSt3Ntwl.js",s_K4gvalEGCME:"q-CuCPhVMA.js",s_3Vkkdid5Eow:"q-BmW025R0.js",s_5keZie0WZ7I:"q-Be8prhrj.js",s_R0z7yMvPekY:"q-BLJu3xCm.js",s_gZs8EX5SgiU:"q-DVY92jWc.js",s_tvPusS0UOeY:"q-0ysPT4X6.js",s_x09mof0NAUM:"q-WQzLmYkg.js",s_9KRx0IOCHt8:"q-BK3N2c0s.js",s_A5SCimyrjAE:"q-Dcd9EKXJ.js",s_N26RLdG0oBg:"q-CJRz6xE6.js",s_WfTOxT4IrdA:"q-CS-VNjiC.js",s_04T8x2lEfJQ:"q-WQzLmYkg.js",s_AlkI4Q6oVwQ:"q-WQzLmYkg.js",s_FdQ8zERN4uM:"q-BabuxKjI.js",s_G0PU4nT0vKs:"q-0ysPT4X6.js",s_LMfn7cFC95k:"q-0ysPT4X6.js",s_LlZXhqmUmt8:"q-DVY92jWc.js",s_PmWjL2RrvZM:"q-BzMkidsn.js",s_US0pTyQnOdc:"q-Cn9eRv09.js",s_aww2BzpANGM:"q-CuCPhVMA.js",s_kH0dZ6cEGg4:"q-WQzLmYkg.js",s_qGVD1Sz413o:"q-CuCPhVMA.js",s_uYqmvnpRTCw:"q-DVY92jWc.js",s_xe8duyQ5aaU:"q-D6dO6Zq9.js",s_zPJUEsxZLIA:"q-BabuxKjI.js",s_zpHcJzYZ88E:"q-D6dO6Zq9.js"}};/**
 * @license
 * @builder.io/qwik/server 1.15.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var Yd=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Vd="<sync>";function Qa(e,t){const n=t==null?void 0:t.mapper,r=e.symbolMapper?e.symbolMapper:(o,a,i)=>{var l;if(n){const c=pn(o),u=n[c];if(!u){if(c===Vd)return[c,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(c))return[o,"_"];if(i)return[o,`${i}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,i)}return u}};return{isServer:!0,async importSymbol(o,a,i){var f;const l=pn(i),c=(f=globalThis.__qwik_reg_symbols)==null?void 0:f.get(l);if(c)return c;let u=String(a);u.endsWith(".js")||(u+=".js");const p=Yd(u);if(!(i in p))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${u}'.`);return p[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o,a,i){return r(o,n,i)}}}async function Jd(e,t){const n=Qa(e,t);ko(n)}var pn=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},Xd="q:instance",fn={$DEBUG$:!1,$invPreloadProbability$:.65},Kd=Date.now(),Zd=/\.[mc]?js$/,Ba=0,ep=1,tp=2,np=3,rr,sr,rp=(e,t)=>({$name$:e,$state$:Zd.test(e)?Ba:np,$deps$:Ga?t==null?void 0:t.map(n=>({...n,$factor$:1})):t,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),sp=e=>{const t=new Map;let n=0;for(;n<e.length;){const r=e[n++],s=[];let o,a=1;for(;o=e[n],typeof o=="number";)o<0?a=-o/10:s.push({$name$:e[o],$importProbability$:a,$factor$:1}),n++;t.set(r,s)}return t},Ha=e=>{let t=or.get(e);if(!t){let n;if(sr){if(n=sr.get(e),!n)return;n.length||(n=void 0)}t=rp(e,n),or.set(e,t)}return t},op=(e,t)=>{t&&("debug"in t&&(fn.$DEBUG$=!!t.debug),typeof t.preloadProbability=="number"&&(fn.$invPreloadProbability$=1-t.preloadProbability)),!(rr!=null||!e)&&(rr="",sr=sp(e))},or=new Map,Ga,mn,Ya=0,Nt=[],ap=(...e)=>{console.log(`Preloader ${Date.now()-Kd}ms ${Ya}/${Nt.length} queued>`,...e)},ip=()=>{or.clear(),mn=!1,Ga=!0,Ya=0,Nt.length=0},lp=()=>{mn&&(Nt.sort((e,t)=>e.$inverseProbability$-t.$inverseProbability$),mn=!1)},cp=()=>{lp();let e=.4;const t=[];for(const n of Nt){const r=Math.round((1-n.$inverseProbability$)*10);r!==e&&(e=r,t.push(e)),t.push(n.$name$)}return t},Va=(e,t,n)=>{if(n!=null&&n.has(e))return;const r=e.$inverseProbability$;if(e.$inverseProbability$=t,!(r-e.$inverseProbability$<.01)&&(rr!=null&&e.$state$<tp&&e.$inverseProbability$<fn.$invPreloadProbability$&&(e.$state$===Ba&&(e.$state$=ep,Nt.push(e),fn.$DEBUG$&&ap(`queued ${Math.round((1-e.$inverseProbability$)*100)}%`,e.$name$)),mn=!0),e.$deps$)){n||(n=new Set),n.add(e);const s=1-e.$inverseProbability$;for(const o of e.$deps$){const a=Ha(o.$name$);if(a.$inverseProbability$===0)continue;let i;if(o.$importProbability$>.5&&(s===1||s>=.99&&ar<100))ar++,i=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,c=o.$factor$,u=l/c;i=Math.max(.02,a.$inverseProbability$*u),o.$factor$=u}Va(a,i,n)}}},Gs=(e,t)=>{const n=Ha(e);n&&n.$inverseProbability$>t&&Va(n,t)},ar,up=(e,t)=>{if(!(e!=null&&e.length))return;ar=0;let n=t?1-t:.4;if(Array.isArray(e))for(let r=e.length-1;r>=0;r--){const s=e[r];typeof s=="number"?n=1-s/10:Gs(s,n)}else Gs(e,n)};function dp(e){const t=[],n=r=>{if(r)for(const s of r)t.includes(s.url)||(t.push(s.url),s.imports&&n(s.imports))};return n(e),t}var pp=e=>{var n;const t=xn();return(n=e==null?void 0:e.qrls)==null?void 0:n.map(r=>{var i;const s=r.$refSymbol$||r.$symbol$,o=r.$chunk$,a=t.chunkForSymbol(s,o,(i=r.dev)==null?void 0:i.file);return a?a[1]:o}).filter(Boolean)};function fp(e,t,n){const r=t.prefetchStrategy;if(r===null)return[];if(!(n!=null&&n.manifest.bundleGraph))return pp(e);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const o=r.symbolsToPrefetch({manifest:n.manifest});return dp(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of(e==null?void 0:e.qrls)||[]){const a=pn(o.$refSymbol$||o.$symbol$);a&&a.length>=10&&s.add(a)}return[...s]}var mp=(e,t)=>{if(!(t!=null&&t.manifest.bundleGraph))return[...new Set(e)];ip();let n=.99;for(const r of e.slice(0,15))up(r,n),n*=.85;return cp()},ir=(e,t)=>{if(t==null)return null;const n=`${e}${t}`.split("/"),r=[];for(const s of n)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},$p=(e,t,n,r,s)=>{var l;const o=ir(e,(l=t==null?void 0:t.manifest)==null?void 0:l.preloader),a="/"+(t==null?void 0:t.manifest.bundleGraphAsset);if(o&&a&&n!==!1){const c=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;op(t==null?void 0:t.manifest.bundleGraph,c);const u=[];n!=null&&n.debug&&u.push("d:1"),n!=null&&n.maxIdlePreloads&&u.push(`P:${n.maxIdlePreloads}`),n!=null&&n.preloadProbability&&u.push(`Q:${n.preloadProbability}`);const p=u.length?`,{${u.join(",")}}`:"",f=`let b=fetch("${a}");import("${o}").then(({l})=>l(${JSON.stringify(e)},b${p}));`;r.push(G("link",{rel:"modulepreload",href:o}),G("link",{rel:"preload",href:a,as:"fetch",crossorigin:"anonymous"}),G("script",{type:"module",async:!0,dangerouslySetInnerHTML:f,nonce:s}))}const i=ir(e,t==null?void 0:t.manifest.core);i&&r.push(G("link",{rel:"modulepreload",href:i}))},hp=(e,t,n,r,s)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:a}=vp(typeof n=="boolean"?void 0:n);let i=o;const l=[],c=[],u=t==null?void 0:t.manifest.manifestHash;if(i){const h=t==null?void 0:t.manifest.preloader,g=t==null?void 0:t.manifest.core,v=mp(r,t);let m=4;const y=a*10;for(const w of v)if(typeof w=="string"){if(m<y)break;if(w===h||w===g)continue;if(c.push(w),--i===0)break}else m=w}const p=ir(e,u&&(t==null?void 0:t.manifest.preloader));let $=c.length?`${JSON.stringify(c)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(e)}+l;document.head.appendChild(e)});`:"";return p&&($+=`window.addEventListener('load',f=>{f=_=>import("${p}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),$&&l.push(G("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:$,nonce:s})),l.length>0?G(ge,{children:l}):null},gp=(e,t,n,r,s)=>{var o;if(n.preloader!==!1){const a=fp(t,n,r);if(a.length>0){const i=hp(e,r,n.preloader,a,(o=n.serverData)==null?void 0:o.nonce);i&&s.push(i)}}};function vp(e){return{...bp,...e}}var bp={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},yp='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),i=t=>{const e=[];return o.forEach((n=>e.push(...s(n,t)))),e},a=t=>{g(t),s(t,"[q\\\\:shadowroot]").forEach((t=>{const e=t.shadowRoot;e&&a(e)}))},c=t=>t&&"function"==typeof t.then;let l=!0;const f=(t,e,n=e.type)=>{let o=l;i("[on"+t+"\\\\:"+n+"]").forEach((r=>{o=!0,b(r,t,e,n)})),o||window[t.slice(1)].removeEventListener(n,"-window"===t?d:_)},p=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},u=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const i=e._qc_,a=i&&i.li.filter((t=>t[0]===s));if(a&&a.length>0){for(const t of a){const n=t[1].getFn([e,o],(()=>e.isConnected))(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",i=n.getAttribute("q:manifest-hash")||"dev",a=new URL(r,t.baseURI);for(const f of l.split("\\n")){const l=new URL(f,a),u=l.href,b=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,w;const m=f.startsWith("#"),y={qBase:r,qManifest:i,qVersion:s,href:u,symbol:b,element:e,reqTime:q};if(m){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(b)],_||(d="sync",w=Error("sym:"+b))}else{h("qsymbol",y);const t=l.href.split("#")[0];try{const e=import(t);p(n),_=(await e)[b],_||(d="no-symbol",w=Error(`${b} not in ${t}`))}catch(t){d||(d="async"),w=t}}if(!_){h("qerror",{importError:d,error:w,...y}),console.error(w);break}const g=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){h("qerror",{error:t,...y})}finally{t.__q_context__=g}}}},h=(e,n)=>{t.dispatchEvent(u(e,n))},q=t=>t.replace(/([A-Z])/g,(t=>"-"+t.toLowerCase())),_=async t=>{let e=q(t.type),n=t.target;for(f("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},d=t=>{f("-window",t,q(t.type))},w=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(a),r=1,h("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)((()=>h("qidle"))),n.has("qvisible"))){const t=i("[on\\\\:qvisible]"),e=new IntersectionObserver((t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",u("qvisible",n)))}));t.forEach((t=>e.observe(t)))}},m=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})};let y;const g=(...t)=>{l=!0,clearTimeout(y),y=setTimeout((()=>l=!1),2e4);for(const r of t)"string"==typeof r?n.has(r)||(o.forEach((t=>m(t,r,_,!0))),m(e,r,d,!0),n.add(r)):o.has(r)||(n.forEach((t=>m(r,t,_,!0))),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?g(...r):g("click","input")),e.qwikevents={events:n,roots:o,push:g},m(t,"readystatechange",w),w()}',wp=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
let doNotClean = true;
const broadcast = (infix, ev, type = ev.type) => {
  let found = doNotClean;
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    found = true;
    dispatch(el, infix, ev, type);
  });
  if (!found) {
    window[infix.slice(1)].removeEventListener(
      type,
      infix === "-window" ? processWindowEvent : processDocumentEvent
    );
  }
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  var _a;
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = (_a = win.requestIdleCallback) != null ? _a : win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
let cleanTimer;
const processEventOrNode = (...eventNames) => {
  doNotClean = true;
  clearTimeout(cleanTimer);
  cleanTimer = setTimeout(() => doNotClean = false, 2e4);
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function xp(e={}){return e.debug?wp:yp}function On(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function Sp(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var kp="<!DOCTYPE html>";async function _p(e,t){var N,de,Q;let n=t.stream,r=0,s=0,o=0,a=0,i="",l;const c=((N=t.streaming)==null?void 0:N.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=t.containerTagName??"html",p=t.containerAttributes??{},f=n,$=On(),h=Sp(t),g=Ja(t.manifest);function v(){i&&(f.write(i),i="",r=0,o++,o===1&&(a=$()))}function m(R){const B=R.length;r+=B,s+=B,i+=R}switch(c.strategy){case"disabled":n={write:m};break;case"direct":n=f;break;case"auto":let R=0,B=!1;const Lt=c.maximunChunk??0,dt=c.maximunInitialChunk??0;n={write(ye){ye==="<!--qkssr-f-->"?B||(B=!0):ye==="<!--qkssr-pu-->"?R++:ye==="<!--qkssr-po-->"?R--:m(ye),R===0&&(B||r>=(o===0?dt:Lt))&&(B=!1,v())}};break}u==="html"?n.write(kp):n.write("<!--cq-->"),g||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Jd(t,g);const y=g==null?void 0:g.manifest.injections,w=y?y.map(R=>G(R.tag,R.attributes??{})):[],b=((de=t.qwikLoader)==null?void 0:de.include)??"auto",k=g==null?void 0:g.manifest.qwikLoader;let T=!1;b!=="never"&&k&&(w.unshift(G("link",{rel:"modulepreload",href:`${h}${k}`}),G("script",{type:"module",async:!0,src:`${h}${k}`})),T=!0),$p(h,g,t.preloader,w,(Q=t.serverData)==null?void 0:Q.nonce);const C=On(),x=[];let _=0,S=0;await Dl(e,{stream:n,containerTagName:u,containerAttributes:p,serverData:t.serverData,base:h,beforeContent:w,beforeClose:async(R,B,Lt,dt)=>{var ts,ns,rs,ss;_=C();const ye=On();l=await xa(R,B,void 0,dt);const Me=[];gp(h,l,t,g,Me);const ti=JSON.stringify(l.state,void 0,void 0);if(Me.push(G("script",{type:"qwik/json",dangerouslySetInnerHTML:Tp(ti),nonce:(ts=t.serverData)==null?void 0:ts.nonce})),l.funcs.length>0){const Ne=p[Xd];Me.push(G("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Ap(Ne,l.funcs),nonce:(ns=t.serverData)==null?void 0:ns.nonce}))}const ni=!l||l.mode!=="static";if(!T&&(b==="always"||b==="auto"&&ni)){const Ne=xp({debug:t.debug});Me.push(G("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:Ne,nonce:(rs=t.serverData)==null?void 0:rs.nonce}))}const es=Array.from(B.$events$,Ne=>JSON.stringify(Ne));if(es.length>0){const Ne=`(window.qwikevents||(window.qwikevents=[])).push(${es.join(",")})`;Me.push(G("script",{dangerouslySetInnerHTML:Ne,nonce:(ss=t.serverData)==null?void 0:ss.nonce}))}return qp(x,R),S=ye(),G(ge,{children:Me})},manifestHash:(g==null?void 0:g.manifest.manifestHash)||"dev"+Ep()}),u!=="html"&&n.write("<!--/cq-->"),v();const E=l.resources.some(R=>R._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:g==null?void 0:g.manifest,size:s,isStatic:!E,timing:{render:_,snapshot:S,firstFlush:a}}}function Ep(){return Math.random().toString(36).slice(2)}function Ja(e){const t=e?{...Hs,...e}:Hs;if(!t||"mapper"in t)return t;if(t.mapping){const n={};return Object.entries(t.mapping).forEach(([r,s])=>{n[pn(r)]=[r,s]}),{mapper:n,manifest:t,injections:t.injections||[]}}}var Tp=e=>e.replace(/<(\/?script)/gi,"\\x3C$1");function qp(e,t){var n;for(const r of t){const s=(n=r.$componentQrl$)==null?void 0:n.getSymbol();s&&!e.includes(s)&&e.push(s)}}var Cp='document["qFuncs_HASH"]=';function Ap(e,t){return Cp.replace("HASH",e)+`[${t.join(`,
`)}]`}async function Ip(e){const t=Qa({},Ja(e));ko(t)}function jn(e,t){var n;return((n=t==null?void 0:t.getOrigin)==null?void 0:n.call(t,e))??(t==null?void 0:t.origin)??process.env.ORIGIN??Rp(e)}function Rp(e){const{PROTOCOL_HEADER:t,HOST_HEADER:n}=process.env,r=e.headers,s=t&&r[t]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),o=n??(e instanceof ui?":authority":"host"),a=r[o];return`${s}://${a}`}function Un(e,t){return zp(e.originalUrl||e.url||"/",t)}function Pp(e=""){return["The stream has been destroyed","write after end"].some(n=>e.includes(n))}var Ys=/^:(method|scheme|authority|path)$/i;function zp(e,t){const n=/\/\/|\\\\/g;return new URL(e.replace(n,"/"),t)}async function Dp(e,t,n,r,s){const o=new Headers,a=t.headers;try{for(const[f,$]of Object.entries(a))if(!Ys.test(f)){if(typeof $=="string")o.set(f,$);else if(Array.isArray($))for(const h of $)o.append(f,h)}}catch(f){console.error(f)}const i=async function*(){for await(const f of t)yield f},l=t.method==="HEAD"||t.method==="GET"?void 0:i(),c=new AbortController,u={method:t.method,headers:o,body:l,signal:c.signal,duplex:"half"};return n.on("close",()=>{c.abort()}),{mode:r,url:e,request:new Request(e.href,u),env:{get(f){return process.env[f]}},getWritableStream:(f,$,h)=>{n.statusCode=f;try{for(const[v,m]of $)Ys.test(v)||n.setHeader(v,m);const g=h.headers();g.length>0&&n.setHeader("Set-Cookie",g)}catch(g){console.error(g)}return new WritableStream({write(g){n.closed||n.destroyed||n.write(g,v=>{v&&!Pp(v.message)&&console.error(v)})},close(){n.end()}})},getClientConn:()=>s?s(t):{ip:t.socket.remoteAddress},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var Mp={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Np(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=$i,globalThis.Headers=hi,globalThis.Request=gi,globalThis.Response=vi,globalThis.FormData=bi),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=di,globalThis.TextDecoderStream=pi),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=fi,globalThis.ReadableStream=mi),typeof globalThis.crypto>"u"&&(globalThis.crypto=yi.webcrypto)}function Lp(e){var t;Np();const n={_deserializeData:ec,_serializeData:_u,_verifySerializable:gd};e.manifest&&Ip(e.manifest);const r=((t=e.static)==null?void 0:t.root)??Ot(ci(import.meta.url),"..","..","dist");return{router:async(i,l,c)=>{try{const u=jn(i,e),p=await Dp(Un(i,u),i,l,"server",e.getClientConn),f=await il(p,e,n);if(f){const $=await f.completion;if($)throw $;if(f.requestEv.headersSent)return}c()}catch(u){console.error(u),c(u)}},notFound:async(i,l,c)=>{try{if(!l.headersSent){const u=jn(i,e),p=Un(i,u),f=os(i.method||"GET",p)?"Not Found":oi(p.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":p.pathname}),l.end(f)}}catch(u){console.error(u),c(u)}},staticFile:async(i,l,c)=>{var u;try{const p=jn(i,e),f=Un(i,p);if(os(i.method||"GET",f)){const $=f.pathname;let h;ii($).includes(".")?h=Ot(r,$):e.qwikCityPlan.trailingSlash?h=Ot(r,$+"index.html"):h=Ot(r,$,"index.html");const g=li(h).replace(/^\./,""),v=ai(h);v.on("error",c);const m=Mp[g];m&&l.setHeader("Content-Type",m),(u=e.static)!=null&&u.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),v.pipe(l);return}return c()}catch(p){console.error(p),c(p)}}}}const Op=`
    .navbar {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--neu-base);
      border-radius: var(--neu-radius-xl);
      padding: 15px 30px;
      box-shadow: var(--neu-shadow-lg);
      z-index: var(--neu-z-fixed);
      display: flex;
      gap: 30px;
      align-items: center;
      transition: all var(--neu-transition-base);
      max-width: 90%;
      width: auto;
    }
    
    .navbar.scrolled {
      top: 10px;
      padding: 12px 25px;
      box-shadow: var(--neu-shadow-xl);
    }
    
    .nav-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    
    .nav-link {
      color: var(--neu-text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all var(--neu-transition-base);
      padding: 8px 16px;
      border-radius: var(--neu-radius-lg);
      position: relative;
      cursor: pointer;
    }
    
    .nav-link:hover {
      color: var(--neu-text-primary);
      background: var(--neu-base);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .nav-link.active {
      color: var(--neu-accent);
      background: var(--neu-base);
      box-shadow: var(--neu-shadow-inset-md);
    }
    
    .logo {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--neu-text-primary);
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
    
    .logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      border-radius: var(--neu-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      box-shadow: var(--neu-shadow-sm);
    }
    
    .menu-toggle {
      display: none;
      background: var(--neu-base);
      border: none;
      padding: 8px;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-sm);
      cursor: pointer;
      transition: all var(--neu-transition-base);
    }
    
    .menu-toggle:hover {
      box-shadow: var(--neu-shadow-md);
    }
    
    .menu-toggle:active {
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .menu-icon {
      width: 24px;
      height: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    
    .menu-icon span {
      display: block;
      height: 2px;
      width: 100%;
      background: var(--neu-text-primary);
      border-radius: 2px;
      transition: all var(--neu-transition-base);
    }
    
    .menu-toggle.open .menu-icon span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .menu-toggle.open .menu-icon span:nth-child(2) {
      opacity: 0;
    }
    
    .menu-toggle.open .menu-icon span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    
    /* Mobile Styles */
    @media (max-width: 768px) {
      .navbar {
        width: calc(100% - 40px);
        padding: 12px 20px;
        top: 10px;
      }
      
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--neu-base);
        border-radius: var(--neu-radius-lg);
        box-shadow: var(--neu-shadow-lg);
        flex-direction: column;
        padding: 20px;
        margin-top: 10px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all var(--neu-transition-base);
      }
      
      .nav-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .nav-link {
        width: 100%;
        text-align: center;
        padding: 12px;
      }
      
      .menu-toggle {
        display: block;
      }
    }
  `,jp=e=>{const[t,n]=be();t.value=e,n.value=!1;const r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth"})},Up=()=>{const[e]=be();e.value=!e.value},Wp=()=>{const e=K("home"),t=K(!1);ut(D(Op,"s_gZs8EX5SgiU"));const n=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],r=D(jp,"s_uYqmvnpRTCw",[e,t]),s=D(Up,"s_LlZXhqmUmt8",[t]);return d("nav",null,{class:"navbar"},[d("a",null,{href:"#home",class:"logo",onClick$:J("s_0NkL50ppaIg",[r])},[d("div",null,{class:"logo-icon"},"JD",3,null),d("span",null,null,"Portfolio",3,null)],3,null),d("div",null,{class:se(o=>`nav-links ${o.value?"open":""}`,[t],'`nav-links ${p0.value?"open":""}`')},n.map(o=>d("a",{href:`#${o.id}`,class:`nav-link ${e.value===o.id?"active":""}`,onClick$:J("s_0hCi1q038Qo",[r,o])},null,U(o,"label"),0,o.id)),1,null),d("button",null,{class:se(o=>`menu-toggle ${o.value?"open":""}`,[t],'`menu-toggle ${p0.value?"open":""}`'),"aria-label":"Toggle menu",onClick$:s},d("div",null,{class:"menu-icon"},[d("span",null,null,null,3,null),d("span",null,null,null,3,null),d("span",null,null,null,3,null)],3,null),3,null)],1,"R4_0")},Fp=ue(D(Wp,"s_ropMBSBWqro")),Qp=`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 20px;
      position: relative;
      overflow: hidden;
    }
    
    .hero-content {
      text-align: center;
      max-width: 900px;
      z-index: 1;
      position: relative;
    }
    
    .profile-container {
      margin-bottom: 40px;
      display: inline-block;
      position: relative;
    }
    
    .profile-image-wrapper {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: var(--neu-base);
      box-shadow: var(--neu-shadow-xl);
      padding: 10px;
      position: relative;
      overflow: hidden;
      animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    .profile-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: var(--neu-shadow-inset-md);
    }
    
    .profile-status {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      background: var(--neu-base);
      border-radius: 50%;
      box-shadow: var(--neu-shadow-md);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .status-dot {
      width: 20px;
      height: 20px;
      background: #48bb78;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.8;
      }
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      animation: fadeInUp 0.8s ease-out;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--neu-text-secondary);
      margin-bottom: 40px;
      min-height: 30px;
      font-family: 'Courier New', monospace;
    }
    
    .typewriter-text {
      display: inline-block;
      color: var(--neu-accent);
    }
    
    .cursor {
      display: inline-block;
      width: 3px;
      height: 1.25rem;
      background: var(--neu-accent);
      margin-left: 2px;
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    
    .cta-button {
      padding: 15px 35px;
      border: none;
      border-radius: var(--neu-radius-md);
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    
    .cta-button.primary {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      box-shadow: var(--neu-shadow-lg);
    }
    
    .cta-button.primary:hover {
      box-shadow: var(--neu-shadow-xl);
      transform: translateY(-2px);
    }
    
    .cta-button.secondary {
      background: var(--neu-base);
      color: var(--neu-text-primary);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .cta-button.secondary:hover {
      box-shadow: var(--neu-shadow-xl);
      transform: translateY(-2px);
    }
    
    .cta-button:active {
      transform: translateY(0);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: var(--neu-text-secondary);
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
      40% { transform: translateX(-50%) translateY(-10px); }
      60% { transform: translateX(-50%) translateY(-5px); }
    }
    
    .scroll-mouse {
      width: 30px;
      height: 50px;
      border: 2px solid var(--neu-text-secondary);
      border-radius: 25px;
      position: relative;
    }
    
    .scroll-wheel {
      width: 4px;
      height: 10px;
      background: var(--neu-text-secondary);
      border-radius: 2px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s infinite;
    }
    
    @keyframes scroll {
      0% { top: 10px; opacity: 1; }
      100% { top: 30px; opacity: 0; }
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }
      
      .profile-image-wrapper {
        width: 150px;
        height: 150px;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .cta-button {
        width: 250px;
      }
    }
  `,Bp=()=>{const e=K(""),t=K(!0);return ut(D(Qp,"s_R0z7yMvPekY")),Sc(J("s_qJmIgBWFER0",[e,t])),d("section",null,{id:"home",class:"hero-section"},d("div",null,{class:"hero-content"},[d("div",null,{class:"profile-container"},d("div",null,{class:"profile-image-wrapper"},[d("img",null,{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",alt:"Profile",class:"profile-image",width:180,height:180},null,3,null),d("div",null,{class:"profile-status"},d("div",null,{class:"status-dot"},null,3,null),3,null)],3,null),3,null),d("h1",null,{class:"hero-title animate-fadeInUp"},"John Doe",3,null),d("p",null,{class:"hero-subtitle"},[d("span",null,{class:"typewriter-text"},se(n=>n.value,[e],"p0.value"),3,null),t.value&&d("span",null,{class:"cursor"},null,3,"HJ_0")],1,null),d("div",null,{class:"cta-buttons"},[d("a",null,{href:"#projects",class:"cta-button primary"},[d("span",null,null,"View Projects",3,null),d("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M5 12h14M12 5l7 7-7 7"},null,3,null),3,null)],3,null),d("a",null,{href:"/resume.pdf",download:!0,class:"cta-button secondary"},[d("span",null,null,"Download CV",3,null),d("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"},null,3,null),3,null)],3,null)],3,null),d("div",null,{class:"scroll-indicator"},[d("div",null,{class:"scroll-mouse"},d("div",null,{class:"scroll-wheel"},null,3,null),3,null),d("span",null,null,"Scroll to explore",3,null)],3,null)],1,null),1,"HJ_1")},Hp=ue(D(Bp,"s_1V8LiPxWuaU")),Gp=[{name:"React/Next.js",level:95,category:"frontend"},{name:"TypeScript",level:90,category:"frontend"},{name:"Vue.js",level:85,category:"frontend"},{name:"HTML/CSS",level:95,category:"frontend"},{name:"Tailwind CSS",level:90,category:"frontend"},{name:"D3.js",level:80,category:"frontend"},{name:"WebGL/Three.js",level:75,category:"frontend"},{name:"Node.js",level:90,category:"backend"},{name:"Python",level:85,category:"backend"},{name:"Go",level:75,category:"backend"},{name:"GraphQL",level:85,category:"backend"},{name:"REST APIs",level:95,category:"backend"},{name:"Microservices",level:80,category:"backend"},{name:"PostgreSQL",level:85,category:"database"},{name:"MongoDB",level:80,category:"database"},{name:"Redis",level:85,category:"database"},{name:"Elasticsearch",level:75,category:"database"},{name:"Docker",level:85,category:"devops"},{name:"Kubernetes",level:75,category:"devops"},{name:"AWS",level:80,category:"devops"},{name:"CI/CD",level:85,category:"devops"},{name:"Terraform",level:70,category:"devops"},{name:"Git",level:95,category:"tools"},{name:"Linux",level:85,category:"tools"},{name:"Agile/Scrum",level:90,category:"tools"},{name:"Figma",level:70,category:"tools"},{name:"Problem Solving",level:95,category:"soft"},{name:"Team Leadership",level:85,category:"soft"},{name:"Communication",level:90,category:"soft"},{name:"Project Management",level:80,category:"soft"}],Yp=[{name:"React",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",proficiency:"expert",yearsOfExperience:5},{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",proficiency:"expert",yearsOfExperience:5},{name:"TypeScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"PostgreSQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"GraphQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",proficiency:"advanced",yearsOfExperience:3},{name:"MongoDB",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"Redis",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"Python",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",proficiency:"advanced",yearsOfExperience:4},{name:"Kubernetes",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",proficiency:"intermediate",yearsOfExperience:2},{name:"Vue.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",proficiency:"advanced",yearsOfExperience:3}],Vs=e=>Gp.filter(t=>t.category===e),ft={name:"John Doe",title:"Full-Stack Developer & System Architect",bio:`Passionate full-stack developer with 5+ years of experience building scalable web applications and distributed systems. 
        I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code.
        
        My journey in tech started with a curiosity about how things work, which evolved into a career dedicated to building 
        innovative digital solutions. I thrive in collaborative environments and enjoy mentoring junior developers while 
        continuously learning from peers.`,highlights:["5+ years of professional development experience","Led teams of up to 10 developers","Architected solutions handling millions of users","Open source contributor with 1000+ GitHub stars","Speaker at tech conferences and meetups","Mentor and technical writer"],interests:["Cloud Architecture","Machine Learning","Open Source","Technical Writing","UI/UX Design","DevOps Automation"]},Vp=`
    .about-section {
      padding: 100px 20px;
      background: transparent;
      position: relative;
    }
    
    .about-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 700;
    }
    
    .section-subtitle {
      text-align: center;
      color: var(--neu-text-secondary);
      margin-bottom: 60px;
      font-size: 1.1rem;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      margin-bottom: 80px;
    }
    
    .bio-section {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .bio-title {
      font-size: 1.8rem;
      color: var(--neu-text-primary);
      margin-bottom: 10px;
    }
    
    .bio-subtitle {
      color: var(--neu-accent);
      font-size: 1.1rem;
      margin-bottom: 30px;
    }
    
    .bio-text {
      color: var(--neu-text-secondary);
      line-height: 1.8;
      margin-bottom: 30px;
      white-space: pre-line;
    }
    
    .highlights {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .highlight-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .highlight-icon {
      width: 24px;
      height: 24px;
      background: var(--neu-accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    
    .skills-section {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .skills-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
    }
    
    .skill-category {
      margin-bottom: 30px;
    }
    
    .category-title {
      font-size: 0.9rem;
      color: var(--neu-text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 15px;
    }
    
    .skill-item {
      margin-bottom: 20px;
    }
    
    .skill-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    
    .skill-name {
      color: var(--neu-text-primary);
      font-weight: 500;
    }
    
    .skill-level {
      color: var(--neu-accent);
      font-weight: 600;
    }
    
    .skill-bar {
      height: 10px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-inset-sm);
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--neu-accent), var(--neu-accent-dark));
      border-radius: var(--neu-radius-full);
      transition: width 1s ease-out;
      box-shadow: 2px 2px 4px rgba(108, 99, 255, 0.3);
    }
    
    .tech-stack {
      margin-top: 80px;
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }
    
    .tech-card {
      padding: 25px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-md);
      text-align: center;
      transition: all var(--neu-transition-base);
      cursor: pointer;
    }
    
    .tech-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .tech-logo {
      width: 60px;
      height: 60px;
      margin: 0 auto 15px;
      filter: grayscale(20%);
      transition: filter var(--neu-transition-base);
    }
    
    .tech-card:hover .tech-logo {
      filter: grayscale(0%);
    }
    
    .tech-name {
      font-size: 0.9rem;
      color: var(--neu-text-primary);
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .tech-experience {
      font-size: 0.8rem;
      color: var(--neu-text-secondary);
    }
    
    .interests-section {
      margin-top: 60px;
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .interests-title {
      font-size: 1.3rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      text-align: center;
    }
    
    .interests-list {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
    
    .interest-tag {
      padding: 10px 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-sm);
      color: var(--neu-text-secondary);
      font-size: 0.9rem;
      transition: all var(--neu-transition-base);
    }
    
    .interest-tag:hover {
      color: var(--neu-accent);
      box-shadow: var(--neu-shadow-md);
      transform: scale(1.05);
    }
    
    /* Responsive */
    @media (max-width: 968px) {
      .about-content {
        grid-template-columns: 1fr;
      }
      
      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 20px;
      }
      
      .tech-card {
        padding: 20px;
      }
      
      .tech-logo {
        width: 50px;
        height: 50px;
      }
    }
    
    @media (max-width: 640px) {
      .section-title {
        font-size: 2rem;
      }
      
      .bio-section,
      .skills-section {
        padding: 25px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,Jp=()=>{ut(D(Vp,"s_3Vkkdid5Eow"));const e=Vs("frontend").slice(0,4),t=Vs("backend").slice(0,4);return d("section",null,{id:"about",class:"about-section"},d("div",null,{class:"about-container"},[d("h2",null,{class:"section-title animate-fadeInUp"},"About Me",3,null),d("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Passionate about building scalable solutions and creating exceptional user experiences",3,null),d("div",null,{class:"about-content"},[d("div",null,{class:"bio-section animate-fadeInLeft"},[d("h3",null,{class:"bio-title"},ft.name,3,null),d("p",null,{class:"bio-subtitle"},ft.title,3,null),d("p",null,{class:"bio-text"},ft.bio,3,null),d("div",null,{class:"highlights"},ft.highlights.slice(0,4).map((n,r)=>d("div",null,{class:"highlight-item"},[d("div",null,{class:"highlight-icon"},"✓",3,null),d("span",null,null,n,1,null)],1,r)),1,null)],1,null),d("div",null,{class:"skills-section animate-fadeInRight"},[d("h3",null,{class:"skills-title"},"Core Skills",3,null),d("div",null,{class:"skill-category"},[d("p",null,{class:"category-title"},"Frontend Development",3,null),e.map(n=>d("div",null,{class:"skill-item"},[d("div",null,{class:"skill-header"},[d("span",null,{class:"skill-name"},U(n,"name"),1,null),d("span",null,{class:"skill-level"},[U(n,"level"),"%"],1,null)],1,null),d("div",null,{class:"skill-bar"},d("div",{style:`width: ${n.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,n.name))],1,null),d("div",null,{class:"skill-category"},[d("p",null,{class:"category-title"},"Backend Development",3,null),t.map(n=>d("div",null,{class:"skill-item"},[d("div",null,{class:"skill-header"},[d("span",null,{class:"skill-name"},U(n,"name"),1,null),d("span",null,{class:"skill-level"},[U(n,"level"),"%"],1,null)],1,null),d("div",null,{class:"skill-bar"},d("div",{style:`width: ${n.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,n.name))],1,null)],1,null)],1,null),d("div",null,{class:"tech-stack"},[d("h3",null,{class:"section-title"},"Tech Stack",3,null),d("p",null,{class:"section-subtitle"},"Technologies I work with daily",3,null),d("div",null,{class:"tech-grid"},Yp.map(n=>d("div",null,{class:"tech-card animate-scaleIn"},[d("img",{src:U(n,"logo"),alt:U(n,"name")},{class:"tech-logo",loading:"lazy",width:"60",height:"60"},null,3,null),d("p",null,{class:"tech-name"},U(n,"name"),1,null),d("p",null,{class:"tech-experience"},[U(n,"yearsOfExperience")," years"],1,null)],1,n.name)),1,null)],1,null),d("div",null,{class:"interests-section"},[d("h3",null,{class:"interests-title"},"Interests & Passions",3,null),d("div",null,{class:"interests-list"},ft.interests.map(n=>d("span",null,{class:"interest-tag"},n,1,n)),1,null)],1,null)],1,null),1,"uH_0")},Xp=ue(D(Jp,"s_kQDJUnc38Vs")),Js=[{id:"ecommerce-platform",title:"E-Commerce Platform",description:"Full-stack e-commerce solution with microservices architecture, real-time inventory management, and secure payment processing",category:"fullstack",technologies:["React","Node.js","PostgreSQL","Redis","Docker","AWS","Stripe","GraphQL"],images:["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"],liveUrl:"https://demo-ecommerce.example.com",githubUrl:"https://github.com/username/ecommerce-platform",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Architecture+Diagram",description:"Microservices architecture with API Gateway, separate services for auth, products, orders, and payments. Uses event-driven communication with RabbitMQ for service coordination."},features:["Real-time inventory management with WebSocket updates","Secure payment processing with Stripe integration","Admin dashboard with analytics and reporting","Mobile-responsive design with PWA capabilities","Multi-language and multi-currency support","Advanced search with Elasticsearch"],challenges:["Implementing efficient caching strategy with Redis","Handling concurrent transactions and race conditions","Optimizing database queries for scale","Managing distributed transactions across microservices"],outcomes:["50ms average API response time","99.9% uptime over 12 months","Handles 10,000+ concurrent users","Reduced cart abandonment by 35%"]},{id:"task-management-app",title:"AI-Powered Task Management",description:"Real-time collaborative task management system with AI-powered insights, smart prioritization, and team analytics",category:"fullstack",technologies:["Vue.js","Express","MongoDB","Socket.io","TensorFlow.js","Python","FastAPI"],images:["https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"],liveUrl:"https://tasks.example.com",githubUrl:"https://github.com/username/task-management",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Event-Driven+Architecture",description:"Event-driven architecture with WebSocket connections for real-time updates, separate ML service for predictions"},features:["Real-time collaboration with conflict resolution","AI-powered task prioritization and time estimation","Kanban, Gantt, and Calendar views","Team analytics and productivity insights","Automated workflow templates","Integration with Slack, GitHub, and Jira"],challenges:["Implementing conflict-free replicated data types (CRDTs)","Real-time synchronization across devices","Training ML model for accurate task predictions","Scaling WebSocket connections"],outcomes:["30% improvement in team productivity","Used by 500+ teams globally","4.8/5 user satisfaction rating","95% accuracy in task time estimation"]},{id:"data-visualization",title:"Data Analytics Dashboard",description:"Interactive data visualization platform for business intelligence with real-time streaming and custom dashboards",category:"frontend",technologies:["D3.js","React","TypeScript","WebGL","Chart.js","Apache Kafka","ClickHouse"],images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],liveUrl:"https://analytics.example.com",githubUrl:"https://github.com/username/data-dashboard",features:["30+ interactive chart types","Real-time data streaming with WebSockets","Custom dashboard builder with drag-and-drop","Export to PDF, Excel, and PowerPoint","Collaborative annotations and sharing","Advanced filtering and drill-down capabilities"],challenges:["Rendering large datasets efficiently (1M+ points)","Creating responsive visualizations","Implementing drag-and-drop dashboard builder","Optimizing WebGL performance"],outcomes:["Renders 1M+ data points at 60fps","Reduced report generation time by 80%","Used by Fortune 500 companies","50% faster decision making"]},{id:"devops-platform",title:"DevOps Automation Platform",description:"Comprehensive CI/CD platform with infrastructure as code, monitoring, and automated deployment pipelines",category:"devops",technologies:["Go","Kubernetes","Terraform","Prometheus","Grafana","GitLab CI","Ansible"],images:["https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop"],githubUrl:"https://github.com/username/devops-platform",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=K8s+Architecture",description:"Kubernetes-based platform with GitOps workflow, automated scaling, and comprehensive monitoring stack"},features:["Automated CI/CD pipelines with GitOps","Infrastructure as Code with Terraform","Auto-scaling based on metrics","Comprehensive monitoring and alerting","Blue-green and canary deployments","Secret management with HashiCorp Vault"],challenges:["Managing multi-cloud deployments","Implementing zero-downtime deployments","Optimizing container resource allocation","Building custom Kubernetes operators"],outcomes:["90% reduction in deployment time","Zero-downtime deployments achieved","40% reduction in infrastructure costs","100+ microservices managed"]},{id:"mobile-banking",title:"Mobile Banking Application",description:"Secure mobile banking app with biometric authentication, real-time transactions, and AI-powered fraud detection",category:"mobile",technologies:["React Native","Node.js","PostgreSQL","Redis","AWS","Machine Learning","Blockchain"],images:["https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"],liveUrl:"https://apps.apple.com/app/example",githubUrl:"https://github.com/username/mobile-banking",features:["Biometric authentication (Face ID/Touch ID)","Real-time transaction processing","AI-powered fraud detection","P2P payments with QR codes","Investment portfolio management","Blockchain-based transaction verification"],challenges:["Implementing bank-grade security","Real-time fraud detection with ML","Ensuring PCI DSS compliance","Optimizing app performance and battery usage"],outcomes:["1M+ downloads in first year","4.7/5 app store rating","99.99% transaction success rate","50% reduction in fraud cases"]},{id:"social-platform",title:"Social Learning Platform",description:"Educational social network with live streaming, collaborative learning spaces, and gamification elements",category:"fullstack",technologies:["Next.js","GraphQL","PostgreSQL","Redis","WebRTC","AWS","ElasticSearch"],images:["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"],liveUrl:"https://learn.example.com",githubUrl:"https://github.com/username/social-learning",architecture:{diagram:"https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Microservices+%26+WebRTC",description:"Microservices with GraphQL federation, WebRTC for video streaming, and event-driven gamification system"},features:["Live video streaming classes","Collaborative whiteboards","Gamification with badges and leaderboards","AI-powered content recommendations","Discussion forums with real-time updates","Progress tracking and analytics"],challenges:["Scaling WebRTC for thousands of concurrent users","Implementing real-time collaborative features","Building recommendation engine","Managing video content delivery"],outcomes:["100K+ active learners","85% course completion rate","4.9/5 user satisfaction","30% improvement in learning outcomes"]}],Kp=()=>[{value:"fullstack",label:"Full Stack"},{value:"frontend",label:"Frontend"},{value:"backend",label:"Backend"},{value:"mobile",label:"Mobile"},{value:"devops",label:"DevOps"}],Zp=`
    .projects-section {
      padding: 100px 20px;
      background: linear-gradient(135deg, rgba(224, 229, 236, 0.5), var(--neu-base));
      min-height: 100vh;
    }
    
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 700;
    }
    
    .section-subtitle {
      text-align: center;
      color: var(--neu-text-secondary);
      margin-bottom: 60px;
      font-size: 1.1rem;
    }
    
    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 60px;
      flex-wrap: wrap;
    }
    
    .filter-tab {
      padding: 12px 28px;
      background: var(--neu-base);
      border: none;
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-md);
      color: var(--neu-text-secondary);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      font-size: 0.95rem;
    }
    
    .filter-tab:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: translateY(-2px);
      color: var(--neu-text-primary);
    }
    
    .filter-tab.active {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      box-shadow: var(--neu-shadow-lg);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }
    
    .project-card {
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
      overflow: hidden;
      transition: all var(--neu-transition-base);
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--neu-shadow-xl);
    }
    
    .project-image-container {
      position: relative;
      height: 220px;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--neu-transition-slow);
    }
    
    .project-card:hover .project-image {
      transform: scale(1.1);
    }
    
    .project-category {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 6px 16px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-sm);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--neu-accent);
    }
    
    .project-content {
      padding: 30px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    .project-title {
      font-size: 1.4rem;
      color: var(--neu-text-primary);
      margin-bottom: 15px;
      font-weight: 700;
    }
    
    .project-description {
      color: var(--neu-text-secondary);
      line-height: 1.6;
      margin-bottom: 20px;
      flex: 1;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 25px;
    }
    
    .tech-badge {
      padding: 5px 12px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-full);
      box-shadow: var(--neu-shadow-inset-sm);
      font-size: 0.8rem;
      color: var(--neu-text-secondary);
      font-weight: 500;
    }
    
    .project-links {
      display: flex;
      gap: 15px;
    }
    
    .project-link {
      flex: 1;
      padding: 10px 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-sm);
      color: var(--neu-text-primary);
      text-decoration: none;
      text-align: center;
      font-weight: 500;
      transition: all var(--neu-transition-base);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .project-link:hover {
      box-shadow: var(--neu-shadow-md);
      transform: translateY(-2px);
    }
    
    .project-link.primary {
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
    }
    
    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      visibility: hidden;
      transition: all var(--neu-transition-base);
    }
    
    .modal-overlay.open {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-content {
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-xl);
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      transform: scale(0.9);
      transition: transform var(--neu-transition-base);
    }
    
    .modal-overlay.open .modal-content {
      transform: scale(1);
    }
    
    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background: var(--neu-base);
      border-radius: 50%;
      box-shadow: var(--neu-shadow-md);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all var(--neu-transition-base);
    }
    
    .modal-close:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: rotate(90deg);
    }
    
    .modal-header {
      padding: 40px;
      border-bottom: 1px solid rgba(163, 177, 198, 0.2);
    }
    
    .modal-title {
      font-size: 2rem;
      color: var(--neu-text-primary);
      margin-bottom: 10px;
    }
    
    .modal-category {
      color: var(--neu-accent);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
    
    .modal-body {
      padding: 40px;
    }
    
    .modal-section {
      margin-bottom: 40px;
    }
    
    .modal-section-title {
      font-size: 1.3rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 600;
    }
    
    .feature-list {
      display: grid;
      gap: 15px;
    }
    
    .feature-item {
      display: flex;
      gap: 15px;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .feature-icon {
      width: 24px;
      height: 24px;
      background: var(--neu-accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .stat-card {
      padding: 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-md);
      text-align: center;
    }
    
    .stat-value {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--neu-accent);
      margin-bottom: 5px;
    }
    
    .stat-label {
      color: var(--neu-text-secondary);
      font-size: 0.9rem;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .filter-tabs {
        gap: 10px;
      }
      
      .filter-tab {
        padding: 10px 20px;
        font-size: 0.9rem;
      }
      
      .modal-content {
        max-height: 100vh;
        border-radius: 0;
      }
      
      .modal-header,
      .modal-body {
        padding: 25px;
      }
    }
  `,ef=e=>{const[t]=be();t.value=e},tf=e=>{const[t,n]=be();n.value=e,t.value=!0},nf=()=>{const[e,t]=be();e.value=!1,setTimeout(()=>{t.value=null},300)},rf=()=>{const e=K("all"),t=K(null),n=K(!1);ut(D(Zp,"s_x09mof0NAUM"));const r=[{value:"all",label:"All Projects"},...Kp()],s=e.value==="all"?Js:Js.filter(l=>l.category===e.value),o=D(ef,"s_04T8x2lEfJQ",[e]),a=D(tf,"s_kH0dZ6cEGg4",[n,t]),i=D(nf,"s_AlkI4Q6oVwQ",[n,t]);return d("section",null,{id:"projects",class:"projects-section"},d("div",null,{class:"projects-container"},[d("h2",null,{class:"section-title animate-fadeInUp"},"Featured Projects",3,null),d("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Explore my portfolio of full-stack applications and technical solutions",3,null),d("div",null,{class:"filter-tabs animate-fadeInUp stagger-2"},r.map(l=>d("button",{class:`filter-tab ${e.value===l.value?"active":""}`,onClick$:J("s_1xEgQnu0yC4",[l,o])},null,U(l,"label"),0,l.value)),1,null),d("div",null,{class:"projects-grid"},s.map((l,c)=>d("div",{class:`project-card animate-fadeInUp stagger-${Math.min(c+3,8)}`,onClick$:J("s_7w8zQT0J9wQ",[a,l])},null,[d("div",null,{class:"project-image-container"},[d("img",{src:l.images[0],alt:U(l,"title")},{class:"project-image",loading:"lazy",width:"800",height:"600"},null,3,null),d("span",null,{class:"project-category"},U(l,"category"),1,null)],1,null),d("div",null,{class:"project-content"},[d("h3",null,{class:"project-title"},U(l,"title"),1,null),d("p",null,{class:"project-description"},U(l,"description"),1,null),d("div",null,{class:"project-tech"},[l.technologies.slice(0,4).map(u=>d("span",null,{class:"tech-badge"},u,1,u)),l.technologies.length>4&&d("span",null,{class:"tech-badge"},["+",l.technologies.length-4],1,"m6_0")],1,null),d("div",null,{class:"project-links"},[l.liveUrl&&d("a",{href:U(l,"liveUrl")},{class:"project-link primary",target:"_blank",rel:"noopener noreferrer",onClick$:J("s_x65cA0NoyOM")},[d("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"},null,3,null),3,null),"Live Demo"],3,"m6_1"),l.githubUrl&&d("a",{href:U(l,"githubUrl")},{class:"project-link",target:"_blank",rel:"noopener noreferrer",onClick$:J("s_euptowWQvR4")},[d("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},d("path",null,{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},null,3,null),3,null),"GitHub"],3,"m6_2")],1,null)],1,null)],0,l.id)),1,null),d("div",null,{class:se(l=>`modal-overlay ${l.value?"open":""}`,[n],'`modal-overlay ${p0.value?"open":""}`'),onClick$:i},t.value&&d("div",null,{class:"modal-content",onClick$:J("s_42RUnvGm7aU")},[d("button",null,{class:"modal-close",onClick$:i},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",null,{x1:"18",y1:"6",x2:"6",y2:"18"},null,3,null),d("line",null,{x1:"6",y1:"6",x2:"18",y2:"18"},null,3,null)],3,null),3,null),d("div",null,{class:"modal-header"},[d("h3",null,{class:"modal-title"},se(l=>l.value.title,[t],"p0.value.title"),3,null),d("span",null,{class:"modal-category"},se(l=>l.value.category,[t],"p0.value.category"),3,null)],3,null),d("div",null,{class:"modal-body"},[d("div",null,{class:"modal-section"},[d("h4",null,{class:"modal-section-title"},"Key Features",3,null),d("div",null,{class:"feature-list"},t.value.features.map(l=>d("div",null,{class:"feature-item"},[d("div",null,{class:"feature-icon"},"✓",3,null),d("span",null,null,l,1,null)],1,l)),1,null)],1,null),d("div",null,{class:"modal-section"},[d("h4",null,{class:"modal-section-title"},"Project Outcomes",3,null),d("div",null,{class:"stats-grid"},t.value.outcomes.map(l=>{const[c,...u]=l.split(" ");return d("div",null,{class:"stat-card"},[d("div",null,{class:"stat-value"},c,1,null),d("div",null,{class:"stat-label"},u.join(" "),1,null)],1,l)}),1,null)],1,null),d("div",null,{class:"modal-section"},[d("h4",null,{class:"modal-section-title"},"Technical Challenges",3,null),d("div",null,{class:"feature-list"},t.value.challenges.map(l=>d("div",null,{class:"feature-item"},[d("div",null,{class:"feature-icon"},"💡",3,null),d("span",null,null,l,1,null)],1,l)),1,null)],1,null)],1,null)],1,"m6_3"),1,null)],1,null),1,"m6_4")},sf=ue(D(rf,"s_JdVX0L8bEOA")),of=[{name:"GitHub",url:"https://github.com/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,color:"#333"},{name:"LinkedIn",url:"https://linkedin.com/in/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>`,color:"#0077B5"},{name:"Twitter",url:"https://twitter.com/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>`,color:"#1DA1F2"},{name:"Email",url:"mailto:john.doe@example.com",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    </svg>`,color:"#EA4335"},{name:"Stack Overflow",url:"https://stackoverflow.com/users/123456/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"/>
    </svg>`,color:"#F48024"},{name:"Dev.to",url:"https://dev.to/johndoe",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
    </svg>`,color:"#0A0A0A"}],Ft={email:"john.doe@example.com",phone:"+1 (555) 123-4567",location:"San Francisco, CA",availability:"Available for freelance projects"},af=`
    .contact-section {
      padding: 100px 20px;
      background: transparent;
      min-height: 100vh;
    }
    
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 700;
    }
    
    .section-subtitle {
      text-align: center;
      color: var(--neu-text-secondary);
      margin-bottom: 60px;
      font-size: 1.1rem;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
    
    .contact-info {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .info-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
      font-weight: 600;
    }
    
    .info-item {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 25px;
      padding: 20px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      border-radius: var(--neu-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    
    .info-details {
      flex: 1;
    }
    
    .info-label {
      font-size: 0.9rem;
      color: var(--neu-text-muted);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .info-value {
      color: var(--neu-text-primary);
      font-weight: 500;
    }
    
    .social-links {
      margin-top: 40px;
    }
    
    .social-title {
      font-size: 1.2rem;
      color: var(--neu-text-primary);
      margin-bottom: 20px;
      font-weight: 600;
    }
    
    .social-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-md);
      color: var(--neu-text-secondary);
      text-decoration: none;
      transition: all var(--neu-transition-base);
    }
    
    .social-link:hover {
      box-shadow: var(--neu-shadow-lg);
      transform: translateY(-3px);
      color: var(--neu-accent);
    }
    
    .social-link svg {
      width: 24px;
      height: 24px;
    }
    
    .contact-form {
      padding: 40px;
      background: var(--neu-base);
      border-radius: var(--neu-radius-lg);
      box-shadow: var(--neu-shadow-lg);
    }
    
    .form-title {
      font-size: 1.5rem;
      color: var(--neu-text-primary);
      margin-bottom: 30px;
      font-weight: 600;
    }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    .form-label {
      display: block;
      color: var(--neu-text-primary);
      font-weight: 500;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }
    
    .form-input,
    .form-textarea {
      width: 100%;
      padding: 15px 20px;
      background: var(--neu-base);
      border: none;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-inset-sm);
      color: var(--neu-text-primary);
      font-size: 1rem;
      font-family: inherit;
      transition: all var(--neu-transition-base);
      outline: none;
    }
    
    .form-input:focus,
    .form-textarea:focus {
      box-shadow: var(--neu-shadow-inset-md);
    }
    
    .form-input::placeholder,
    .form-textarea::placeholder {
      color: var(--neu-text-muted);
    }
    
    .form-textarea {
      resize: vertical;
      min-height: 150px;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .form-submit {
      width: 100%;
      padding: 18px 40px;
      background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
      color: white;
      border: none;
      border-radius: var(--neu-radius-md);
      box-shadow: var(--neu-shadow-lg);
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all var(--neu-transition-base);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .form-submit:hover:not(:disabled) {
      box-shadow: var(--neu-shadow-xl);
      transform: translateY(-2px);
    }
    
    .form-submit:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--neu-shadow-md);
    }
    
    .form-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .submit-status {
      margin-top: 20px;
      padding: 15px;
      border-radius: var(--neu-radius-md);
      text-align: center;
      font-weight: 500;
      animation: fadeIn 0.3s ease-out;
    }
    
    .submit-status.success {
      background: rgba(72, 187, 120, 0.1);
      color: var(--neu-success);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .submit-status.error {
      background: rgba(245, 101, 101, 0.1);
      color: var(--neu-error);
      box-shadow: var(--neu-shadow-inset-sm);
    }
    
    .availability-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(72, 187, 120, 0.1);
      color: var(--neu-success);
      border-radius: var(--neu-radius-full);
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: 20px;
    }
    
    .availability-dot {
      width: 8px;
      height: 8px;
      background: var(--neu-success);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    
    /* Loading Spinner */
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    /* Responsive */
    @media (max-width: 968px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 640px) {
      .contact-info,
      .contact-form {
        padding: 25px;
      }
      
      .social-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `,lf=async e=>{const[t,n,r]=be();e.preventDefault(),n.value=!0,r.value="idle",await new Promise(s=>setTimeout(s,2e3)),console.log("Form submitted:",t.value),n.value=!1,r.value="success",setTimeout(()=>{t.value={name:"",email:"",subject:"",message:""},r.value="idle"},3e3)},cf=(e,t)=>{const[n]=be();n.value={...n.value,[e]:t}},uf=()=>{const e=K({name:"",email:"",subject:"",message:""}),t=K(!1),n=K("idle");ut(D(af,"s_tvPusS0UOeY"));const r=D(lf,"s_LMfn7cFC95k",[e,t,n]),s=D(cf,"s_G0PU4nT0vKs",[e]);return d("section",null,{id:"contact",class:"contact-section"},d("div",null,{class:"contact-container"},[d("h2",null,{class:"section-title animate-fadeInUp"},"Get In Touch",3,null),d("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Let's discuss your next project or collaboration opportunity",3,null),d("div",null,{class:"contact-content"},[d("div",null,{class:"contact-info animate-fadeInLeft"},[d("h3",null,{class:"info-title"},"Contact Information",3,null),d("div",null,{class:"info-item"},[d("div",null,{class:"info-icon"},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,3,null),3,null),3,null),d("div",null,{class:"info-details"},[d("p",null,{class:"info-label"},"Email",3,null),d("p",null,{class:"info-value"},Ft.email,3,null)],3,null)],3,null),d("div",null,{class:"info-item"},[d("div",null,{class:"info-icon"},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"},null,3,null),3,null),3,null),d("div",null,{class:"info-details"},[d("p",null,{class:"info-label"},"Phone",3,null),d("p",null,{class:"info-value"},Ft.phone,3,null)],3,null)],3,null),d("div",null,{class:"info-item"},[d("div",null,{class:"info-icon"},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",null,{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"},null,3,null),d("circle",null,{cx:"12",cy:"10",r:"3"},null,3,null)],3,null),3,null),d("div",null,{class:"info-details"},[d("p",null,{class:"info-label"},"Location",3,null),d("p",null,{class:"info-value"},Ft.location,3,null)],3,null)],3,null),d("div",null,{class:"availability-badge"},[d("span",null,{class:"availability-dot"},null,3,null),Ft.availability],3,null),d("div",null,{class:"social-links"},[d("h4",null,{class:"social-title"},"Connect With Me",3,null),d("div",null,{class:"social-grid"},of.map(o=>d("a",{href:U(o,"url"),title:U(o,"name"),dangerouslySetInnerHTML:U(o,"icon")},{target:"_blank",rel:"noopener noreferrer",class:"social-link"},null,3,o.name)),1,null)],1,null)],1,null),d("div",null,{class:"contact-form animate-fadeInRight"},[d("h3",null,{class:"form-title"},"Send Me a Message",3,null),d("form",null,{onSubmit$:r},[d("div",null,{class:"form-row"},[d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"name"},"Your Name",3,null),d("input",null,{type:"text",id:"name",class:"form-input",placeholder:"John Smith",value:se(o=>o.value.name,[e],"p0.value.name"),required:!0,onInput$:J("s_vKy2S362iTQ",[s])},null,3,null)],3,null),d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"email"},"Email Address",3,null),d("input",null,{type:"email",id:"email",class:"form-input",placeholder:"john@example.com",value:se(o=>o.value.email,[e],"p0.value.email"),required:!0,onInput$:J("s_LuZO1QS7gEs",[s])},null,3,null)],3,null)],3,null),d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"subject"},"Subject",3,null),d("input",null,{type:"text",id:"subject",class:"form-input",placeholder:"Project Inquiry",value:se(o=>o.value.subject,[e],"p0.value.subject"),required:!0,onInput$:J("s_zAJbdncFBqs",[s])},null,3,null)],3,null),d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"message"},"Message",3,null),d("textarea",null,{id:"message",class:"form-textarea",placeholder:"Tell me about your project...",value:se(o=>o.value.message,[e],"p0.value.message"),required:!0,onInput$:J("s_1M8Ii0d2Bp4",[s])},null,3,null)],3,null),d("button",null,{type:"submit",class:"form-submit",disabled:se(o=>o.value,[t],"p0.value")},t.value?L(ge,{children:[d("span",null,{class:"spinner"},null,3,null),"Sending..."]},3,"Db_0"):L(ge,{children:["Send Message",d("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",null,{x1:"22",y1:"2",x2:"11",y2:"13"},null,3,null),d("polygon",null,{points:"22 2 15 22 11 13 2 9 22 2"},null,3,null)],3,null)]},3,"Db_1"),1,null),n.value==="success"&&d("div",null,{class:"submit-status success"},"✓ Message sent successfully! I'll get back to you soon.",3,"Db_2"),n.value==="error"&&d("div",null,{class:"submit-status error"},"✗ Something went wrong. Please try again or email me directly.",3,"Db_3")],1,null)],1,null)],1,null)],1,null),1,"Db_4")},df=ue(D(uf,"s_Ubng8hDLd1Y")),pf=()=>L(ge,{children:[L(Fp,null,3,"i8_0"),d("main",null,null,[L(Hp,null,3,"i8_1"),L(Xp,null,3,"i8_2"),L(sf,null,3,"i8_3"),L(df,null,3,"i8_4")],1,null)]},1,"i8_5"),ff=ue(D(pf,"s_B0lqk5IDDy4")),mf={title:"John Doe - Full-Stack Developer Portfolio",meta:[{name:"description",content:"Full-Stack Developer specializing in scalable web applications, microservices architecture, and innovative digital solutions. View my projects and get in touch."},{name:"keywords",content:"full-stack developer, web development, React, Node.js, TypeScript, portfolio, software engineer"},{property:"og:title",content:"John Doe - Full-Stack Developer Portfolio"},{property:"og:description",content:"Explore my portfolio of full-stack projects, from e-commerce platforms to data visualization dashboards."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"John Doe - Full-Stack Developer Portfolio"},{name:"twitter:description",content:"Full-Stack Developer specializing in scalable web applications and innovative digital solutions."}]},$f=Object.freeze(Object.defineProperty({__proto__:null,default:ff,head:mf},Symbol.toStringTag,{value:"Module"})),hf=[],gf=[["/",[()=>$f],"/",["q-BT0Uw01w.js"]]],vf=[],bf=!0,yf="/",wf=!0,xf={routes:gf,serverPlugins:hf,menus:vf,trailingSlash:bf,basePathname:yf,cacheModules:wf},Sf=ve("qc-s"),kf=ve("qc-c"),Xa=ve("qc-ic"),Ka=ve("qc-h"),Za=ve("qc-l"),_f=ve("qc-n"),Ef=ve("qc-a"),Tf=ve("qc-ir"),qf=ve("qc-p"),Cf=Cd(J("s_9KRx0IOCHt8")),Af=()=>{if(!Xr("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");Oc();const t=xr(Xa);if(t.value&&t.value.length>0){const n=t.value.length;let r=null;for(let s=n-1;s>=0;s--)t.value[s].default&&(r=L(t.value[s].default,{children:r},1,"ni_0"));return L(ge,{children:[r,d("script",{"document:onQCInit$":Cf,"document:onQInit$":Ad(()=>{((s,o)=>{var a;if(!s._qcs&&o.scrollRestoration==="manual"){s._qcs=!0;const i=(a=o.state)==null?void 0:a._qCityScroll;i&&s.scrollTo(i.x,i.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"ni_1")]},1,"ni_2")}return Tr},If=ue(D(Af,"s_ScE8eseirUA")),Rf=(e,t)=>new URL(e,t.href),Xs=(e,t)=>e.origin===t.origin,Ks=e=>e.endsWith("/")?e:e+"/",Pf=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&Ks(e)===Ks(t)},zf=(e,t)=>e.search===t.search,$n=(e,t)=>zf(e,t)&&Pf(e,t),Df=e=>e&&typeof e.then=="function",Mf=(e,t,n,r)=>{const s=ei(),a={head:s,withLocale:i=>Cs(r,i),resolveValue:i=>{const l=i.__id;if(i.__brand==="server_loader"&&!(l in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=e.loaders[l];if(Df(c))throw new Error("Loaders returning a promise can not be resolved for the head function.");return c},...t};for(let i=n.length-1;i>=0;i--){const l=n[i]&&n[i].head;l&&(typeof l=="function"?Zs(s,Cs(r,()=>l(a))):typeof l=="object"&&Zs(s,l))}return a.head},Zs=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),Qt(e.meta,t.meta),Qt(e.links,t.links),Qt(e.styles,t.styles),Qt(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},Qt=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const r=e.findIndex(s=>s.key===n.key);if(r>-1){e[r]=n;continue}}e.push(n)}},ei=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Nf=()=>xr(Ka),Lf=()=>xr(Za),Of=()=>zn(Xr("qwikcity")),eo={},Bt={navCount:0},jf=":root{view-transition-name:none}",Uf=e=>{},Wf=async(e,t)=>{const[n,r,s,o]=be(),{type:a="link",forceReload:i=e===void 0,replaceState:l=!1,scroll:c=!0}=typeof t=="object"?t:{forceReload:t};Bt.navCount++;const u=s.value.dest,p=e===void 0?u:typeof e=="number"?e:Rf(e,o.url);if(eo.$cbs$&&(i||typeof p=="number"||!$n(p,u)||!Xs(p,u))){const f=Bt.navCount,$=await Promise.all([...eo.$cbs$.values()].map(h=>h(p)));if(f!==Bt.navCount||$.some(Boolean)){f===Bt.navCount&&a==="popstate"&&history.pushState(null,"",u);return}}if(typeof p!="number"&&Xs(p,u)&&!(!i&&$n(p,u)))return s.value={type:a,dest:p,forceReload:i,replaceState:l,scroll:c},n.value=void 0,o.isNavigating=!0,new Promise(f=>{r.r=f})},Ff=({track:e})=>{const[t,n,r,s,o,a,i,l,c,u,p]=be();async function f(){const[h,g]=e(()=>[u.value,t.value]),v=Pc(""),m=p.url,y=g?"form":h.type;h.replaceState;let w,b,k=null;if(w=new URL(h.dest,p.url),k=o.loadedRoute,b=o.response,k){const[T,C,x,_]=k,S=x,E=S[S.length-1];h.dest.search&&$n(w,m)&&(w.search=h.dest.search),$n(w,m)||(p.prevUrl=m),p.url=w,p.params={...C},u.untrackedValue={type:y,dest:w};const I=Mf(b,p,S,v);n.headings=E.headings,n.menu=_,r.value=zn(S),s.links=I.links,s.meta=I.meta,s.styles=I.styles,s.scripts=I.scripts,s.title=I.title,s.frontmatter=I.frontmatter}}return f()},Qf=e=>{Gd(D(jf,"s_K4gvalEGCME"));const t=Of();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=Xr("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(t.ev.originalUrl.pathname!==t.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const r=new URL(n),s=Wt({url:r,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),o={},a=bd(Wt(t.response.loaders,{deep:!1})),i=K({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),l=Wt(ei),c=Wt({headings:void 0,menu:void 0}),u=K(),p=t.response.action,f=p?t.response.loaders[p]:void 0,$=K(f?{id:p,data:t.response.formData,output:{result:f,status:t.response.status}}:void 0),h=D(Uf,"s_qGVD1Sz413o"),g=D(Wf,"s_aww2BzpANGM",[$,o,i,s]);return we(kf,c),we(Xa,u),we(Ka,l),we(Za,s),we(_f,g),we(Sf,a),we(Ef,$),we(Tf,i),we(qf,h),xc(D(Ff,"s_Ysfvd0zsHZc",[$,c,u,l,t,g,a,o,e,i,s])),L(cn,null,3,"ni_3")},Bf=ue(D(Qf,"s_p1yCGpFL1xE")),Hf=()=>{const e=Nf(),t=Lf();return L(ge,{children:[d("title",null,null,e.title,1,null),d("link",null,{rel:"canonical",href:se(n=>n.url.href,[t],"p0.url.href")},null,3,null),d("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),d("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(n=>Ut("meta",{...n},null,0,n.key)),e.links.map(n=>Ut("link",{...n},null,0,n.key)),e.styles.map(n=>{var r;return Ut("style",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)}),e.scripts.map(n=>{var r;return Ut("script",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key)})]},1,"0D_0")},Gf=ue(D(Hf,"s_0vphQYqOdZI")),Yf=`
    .background-shapes {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: -1;
      pointer-events: none;
    }
    
    .shape {
      position: absolute;
      border-radius: 50%;
      transform-style: preserve-3d;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
    }
    
    /* Kiwi skin texture sphere */
    .kiwi-skin {
      background: 
        radial-gradient(ellipse at 30% 30%, #8B4513 0%, #7c3f00 40%, #5D2F00 100%);
      position: relative;
      overflow: hidden;
    }
    
    .kiwi-skin::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: 
        repeating-conic-gradient(from 0deg at 50% 50%, 
          transparent 0deg, 
          rgba(139, 69, 19, 0.1) 2deg, 
          transparent 4deg, 
          transparent 6deg),
        repeating-radial-gradient(circle at 50% 50%, 
          transparent 0px, 
          rgba(92, 51, 23, 0.2) 2px, 
          transparent 4px);
      transform: rotate(45deg);
      mix-blend-mode: multiply;
    }
    
    .kiwi-skin::after {
      content: '';
      position: absolute;
      top: 10%;
      left: 10%;
      width: 40%;
      height: 40%;
      background: radial-gradient(ellipse at center, 
        rgba(255, 255, 255, 0.3) 0%, 
        transparent 70%);
      filter: blur(10px);
    }
    
    /* Kiwi fruit interior sphere */
    .kiwi-fruit {
      background: 
        radial-gradient(circle at center, 
          #F5F5DC 0%, 
          #F5F5DC 5%, 
          #8EE53F 5.5%, 
          #7FD63F 40%, 
          #6BC63F 70%, 
          #5AB63F 100%);
      position: relative;
      overflow: hidden;
      box-shadow: 
        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
        inset 20px 20px 40px rgba(255, 255, 255, 0.2);
    }
    
    .kiwi-fruit::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      background: 
        repeating-conic-gradient(from 0deg at 50% 50%, 
          transparent 0deg, 
          rgba(0, 0, 0, 0.05) 10deg, 
          transparent 10deg, 
          transparent 20deg);
    }
    
    /* Seeds pattern */
    .kiwi-fruit::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 20% 30%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 40% 20%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 60% 40%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 30% 60%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 70% 30%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 50% 70%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 80% 60%, #2C2C2C 1.5px, transparent 1.5px),
        radial-gradient(circle at 25% 80%, #2C2C2C 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, #2C2C2C 1.5px, transparent 1.5px);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      opacity: 0.6;
    }
    
    /* Individual sphere styles */
    .shape-1 {
      width: 350px;
      height: 350px;
      top: 10%;
      left: -100px;
      animation: float 20s ease-in-out infinite, rotate 30s linear infinite;
      opacity: 0.7;
    }
    
    .shape-2 {
      width: 280px;
      height: 280px;
      bottom: 15%;
      right: -80px;
      animation: float 18s ease-in-out infinite reverse, rotate 25s linear infinite reverse;
      opacity: 0.6;
    }
    
    .shape-3 {
      width: 200px;
      height: 200px;
      top: 50%;
      left: 15%;
      animation: float 15s ease-in-out infinite, rotate 20s linear infinite;
      opacity: 0.8;
    }
    
    .shape-4 {
      width: 250px;
      height: 250px;
      top: 20%;
      right: 20%;
      animation: float 22s ease-in-out infinite reverse, rotate 28s linear infinite reverse;
      opacity: 0.7;
    }
    
    .shape-5 {
      width: 180px;
      height: 180px;
      bottom: 30%;
      left: 30%;
      animation: float 17s ease-in-out infinite, rotate 23s linear infinite;
      opacity: 0.6;
    }
    
    .shape-6 {
      width: 300px;
      height: 300px;
      top: 70%;
      right: 10%;
      animation: float 25s ease-in-out infinite reverse, rotate 35s linear infinite reverse;
      opacity: 0.5;
    }
    
    @keyframes float {
      0%, 100% { 
        transform: translateY(0) translateX(0) scale(1);
      }
      25% {
        transform: translateY(-30px) translateX(20px) scale(1.05);
      }
      50% { 
        transform: translateY(20px) translateX(-10px) scale(0.95);
      }
      75% {
        transform: translateY(-10px) translateX(-20px) scale(1.02);
      }
    }
    
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .shape-1 { width: 250px; height: 250px; }
      .shape-2 { width: 200px; height: 200px; }
      .shape-3 { width: 150px; height: 150px; }
      .shape-4 { width: 180px; height: 180px; }
      .shape-5 { width: 130px; height: 130px; }
      .shape-6 { width: 220px; height: 220px; }
    }
    
    @media (max-width: 480px) {
      .shape-1 { width: 180px; height: 180px; }
      .shape-2 { width: 150px; height: 150px; }
      .shape-3 { width: 100px; height: 100px; }
      .shape-4 { width: 130px; height: 130px; }
      .shape-5 { width: 90px; height: 90px; }
      .shape-6 { width: 160px; height: 160px; }
    }
  `,Vf=()=>(ut(D(Yf,"s_5keZie0WZ7I")),d("div",null,{class:"background-shapes"},[d("div",null,{class:"shape shape-1 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-2 kiwi-fruit"},null,3,null),d("div",null,{class:"shape shape-3 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-4 kiwi-fruit"},null,3,null),d("div",null,{class:"shape shape-5 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-6 kiwi-fruit"},null,3,null)],3,"70_0")),Jf=ue(D(Vf,"s_CIpJWWhXzoM")),Xf=()=>L(Bf,{children:[d("head",null,null,[d("meta",null,{charset:"utf-8"},null,3,null),d("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"vp_0"),L(Gf,null,3,"vp_1")],1,null),d("body",null,{lang:"en"},[L(Jf,null,3,"vp_2"),L(If,null,3,"vp_3")],1,null)]},1,"vp_4"),Kf=ue(D(Xf,"s_tntnak2DhJ8"));function Zf(e){return _p(L(Kf,null,3,"Qb_0"),{...e,containerAttributes:{lang:"en-us",...e.containerAttributes},serverData:{...e.serverData}})}const dm=Lp({render:Zf,qwikCityPlan:xf});export{dm as default};
