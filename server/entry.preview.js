var ra=Object.defineProperty;var sa=(e,t,n)=>t in e?ra(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>sa(e,typeof t!="symbol"?t+"":t,n);import{getNotFound as oa}from"./@qwik-city-not-found-paths.js";import{isStaticPath as is}from"./@qwik-city-static-paths.js";import{createReadStream as ia}from"node:fs";import{join as jt,basename as aa,extname as la}from"node:path";import{fileURLToPath as ca}from"node:url";import{Http2ServerRequest as ua}from"node:http2";import{TextEncoderStream as da,TextDecoderStream as pa,WritableStream as ma,ReadableStream as fa}from"node:stream/web";import{fetch as ha,Headers as $a,Request as ga,Response as va,FormData as xa}from"undici";import ba from"crypto";function as(e,t){let n="Server Error";return t!=null&&(typeof t.message=="string"?n=t.message:n=String(t)),"<html>"+ya(e,n)+"</html>"}function ya(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=Sa(t):t="";const n=typeof t=="string"?"600px":"300px",r=e>=500?_a:ka;return`
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
`}var wa=/[&<>]/g,Sa=e=>e.replace(wa,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),ka="#006ce9",_a="#713fc2",Ea={lax:"Lax",Lax:"Lax",None:"None",none:"None",strict:"Strict",Strict:"Strict"},Aa={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},ls=(e,t,n)=>{const r=[`${e}=${t}`];typeof n.domain=="string"&&r.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?r.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?r.push(`Max-Age=${n.maxAge[0]*Aa[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?r.push(`Expires=${n.expires}`):n.expires instanceof Date&&r.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&r.push("HttpOnly"),typeof n.path=="string"&&r.push(`Path=${n.path}`);const s=Ia(n.sameSite);return s&&r.push(`SameSite=${s}`),n.secure&&r.push("Secure"),r.join("; ")};function cs(e){try{return decodeURIComponent(e)}catch{return e}}var Ca=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const r of n){const s=r.indexOf("=");s!==-1&&(t[cs(r.slice(0,s).trim())]=cs(r.slice(s+1).trim()))}}return t};function Ia(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return Ea[e]}var Ye=Symbol("request-cookies"),Ut=Symbol("response-cookies"),Ae=Symbol("live-cookies"),to,no,ro,qa=(ro=Ye,no=Ut,to=Ae,class{constructor(e){C(this,ro);C(this,no,{});C(this,to,{});C(this,"appendCounter",0);this[Ye]=Ca(e),this[Ae]={...this[Ye]}}get(e,t=!0){const n=this[t?Ae:Ye][e];return n?{value:n,json(){return JSON.parse(n)},number(){return Number(n)}}:null}getAll(e=!0){return Object.keys(this[e?Ae:Ye]).reduce((t,n)=>(t[n]=this.get(n),t),{})}has(e,t=!0){return!!this[t?Ae:Ye][e]}set(e,t,n={}){this[Ae][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[Ut][e]=ls(e,r,n)}append(e,t,n={}){this[Ae][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[Ut][++this.appendCounter]=ls(e,r,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[Ae][e]=null}headers(){return Object.values(this[Ut])}}),cr=class extends Error{constructor(e,t){super(typeof t=="string"?t:void 0),this.status=e,this.data=t}},$n=class{},ur=class extends $n{},lo=class extends $n{constructor(e){super(),this.pathname=e}},us=new WeakMap,ds="qaction",Ta="qfunc",ps="qdata";function za(e,t){const n=hs(e),r=ms(e),s=hs(t),o=ms(t);return co(e,n,r,t,s,o)}function co(e,t,n,r,s,o){let i=null;for(;t<n;){const a=e.charCodeAt(t++),l=r.charCodeAt(s++);if(a===91){const c=uo(e,t),u=t+(c?3:0),p=Dn(e,u,n,93),m=e.substring(u,p),h=Dn(e,p+1,n,47),$=e.substring(p+1,h);t=p+1;const g=s-1;if(c){const b=Ra(m,$,r,g,o,e,t+$.length+1,n);if(b)return Object.assign(i||(i={}),b)}const v=Dn(r,g,o,47,$);if(v==-1)return null;const f=r.substring(g,v);if(!c&&!$&&!f)return null;s=v,(i||(i={}))[m]=decodeURIComponent(f)}else if(a!==l&&!(isNaN(l)&&Pa(e,t)))return null}return fs(e,t)&&fs(r,s)?i||{}:null}function Pa(e,t){return e.charCodeAt(t)===91&&uo(e,t+1)}function ms(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function fs(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function hs(e){return e.charCodeAt(0)===47?1:0}function uo(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function Dn(e,t,n,r,s=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const o=s.length;for(let i=0;i<o;i++)if(e.charCodeAt(t-o+i)!==s.charCodeAt(i))return-1;return t-o}function Ra(e,t,n,r,s,o,i,a){n.charCodeAt(r)===47&&r++;let l=s;const c=t+"/";for(;l>=r;){const u=co(o,i,a,n,l,s);if(u){let m=n.substring(r,Math.min(l,s));return m.endsWith(c)&&(m=m.substring(0,m.length-c.length)),u[e]=decodeURIComponent(m),u}const p=Da(n,r,c,l,r-1)+c.length;if(l===p)break;l=p}return null}function Da(e,t,n,r,s){let o=e.lastIndexOf(n,r);return o==r-n.length&&(o=e.lastIndexOf(n,r-n.length-1)),o>t?o:s}var Na=async(e,t,n,r)=>{if(!Array.isArray(e))return null;for(const s of e){const o=s[0],i=za(o,r);if(!i)continue;const a=s[1],l=s[3],c=new Array(a.length),u=[];a.forEach((h,$)=>{$s(h,u,g=>c[$]=g,n)});const p=Ma(t,r);let m;return $s(p,u,h=>m=h==null?void 0:h.default,n),u.length>0&&await Promise.all(u),[o,i,c,m,l]}return null},$s=(e,t,n,r)=>{if(typeof e=="function"){const s=us.get(e);if(s)n(s);else{const o=e();typeof o.then=="function"?t.push(o.then(i=>{r!==!1&&us.set(e,i),n(i)})):o&&n(o)}}},Ma=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},Oa=e=>e&&typeof e.then=="function";function La(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var Jt;import("node:async_hooks").then(e=>{const t=e.AsyncLocalStorage;Jt=new t,globalThis.qcAsyncRequestStore=Jt}).catch(e=>{console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.",e)});function ja(e,t,n,r,s=!0,o="/",i){let a;const l=new Promise(u=>a=u),c=Fa(e,t,n,s,o,i,a);return{response:l,requestEv:c,completion:Jt?Jt.run(c,gs,c,r,a):gs(c,r,a)}}async function gs(e,t,n){let r=1;async function s(){try{await e.next()}catch(o){if(o instanceof ur)await e.getWritableStream().close();else if(o instanceof lo){if(r>50)throw new Error("Infinite rewrite loop");r+=1;const i=new URL(e.url);i.pathname=o.pathname;const{loadedRoute:a,requestHandlers:l}=await t(i);return e.resetRoute(a,l,i),await s()}else if(o instanceof cr){if(!e.headersSent){const i=o.status,a=e.request.headers.get("Accept");if(a&&!a.includes("text/html")){const l=e[Et];e.headers.set("Content-Type","application/qwik-json"),e.send(i,await l._serializeData(o.data,!0))}else{const l=as(o.status,o.data);e.html(i,l)}}}else if(!(o instanceof $n)){if(xn(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const i=e.getWritableStream();if(!i.locked){const a=i.getWriter();await a.write(bn.encode(as(500,"Internal Server Error"))),await a.close()}}catch{console.error("Unable to render error page")}return o}}}try{return await s()}finally{e.isDirty()||n(null)}}function vs(e,t){if(e.endsWith(ot)){const n=e.length-po+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var _t="@isQData",ot="/q-data.json",po=ot.length,mo=Symbol("RequestEvLoaders"),fo=Symbol("RequestEvMode"),ho=Symbol("RequestEvRoute"),Et=Symbol("RequestEvQwikSerializer"),$o=Symbol("RequestEvTrailingSlash"),go="@routeName",gn="@actionId",vo="@actionFormData",Ua="@nonce",xo="@rewrite";function Fa(e,t,n,r,s,o,i){const{request:a,platform:l,env:c}=e,u=new Map,p=new qa(a.headers.get("cookie")),m=new Headers,h=new URL(a.url);h.pathname.endsWith(ot)&&(h.pathname=h.pathname.slice(0,-po),r&&!h.pathname.endsWith("/")&&(h.pathname+="/"),u.set(_t,!0));let $=-1,g=null,v,f=e.locale,b=200;const y=async()=>{for($++;$<n.length;){const S=n[$],E=globalThis.qcAsyncRequestStore,T=E!=null&&E.run?E.run(_,S,_):S(_);Oa(T)&&await T,$++}},x=(S,E,T=h)=>{t=S,n=E,h.pathname=T.pathname,h.search=T.search,$=-1},k=()=>{if(g!==null)throw new Error("Response already sent")},A=(S,E)=>{if(k(),typeof S=="number"){b=S;const O=_.getWritableStream().getWriter();O.write(typeof E=="string"?bn.encode(E):E),O.close()}else if(b=S.status,S.headers.forEach((T,O)=>{O.toLowerCase()!=="set-cookie"&&m.append(O,T)}),S.headers.getSetCookie().forEach(T=>{const O=T.indexOf("=");if(O===-1)return;const de=T.slice(0,O).trim(),Q=T.slice(O+1).trim();p.set(de,Q)}),S.body){const T=_.getWritableStream();S.body.pipeTo(T)}else _.getWritableStream().getWriter().close();return I()},I=()=>($=xs,new $n),w={},_={[mo]:w,[fo]:e.mode,[$o]:r,get[ho](){return t},[Et]:o,cookie:p,headers:m,env:c,method:a.method,signal:a.signal,originalUrl:new URL(h),get params(){return(t==null?void 0:t[1])??{}},get pathname(){return h.pathname},platform:l,get query(){return h.searchParams},request:a,url:h,basePathname:s,sharedMap:u,get headersSent(){return g!==null},get exited(){return $>=xs},get clientConn(){return e.getClientConn()},next:y,resetRoute:x,exit:I,cacheControl:(S,E="Cache-Control")=>{k(),m.set(E,La(S))},resolveValue:async S=>{const E=S.__id;if(S.__brand==="server_loader"&&!(E in w))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return w[E]},status:S=>typeof S=="number"?(k(),b=S,S):b,locale:S=>(typeof S=="string"&&(f=S),f||""),error:(S,E)=>(b=S,new cr(S,E)),redirect:(S,E)=>{if(k(),b=S,E){const T=E.replace(/([^:])\/{2,}/g,"$1/");E!==T&&console.warn(`Redirect URL ${E} is invalid, fixing to ${T}`),m.set("Location",T)}return S>301&&!m.get("Cache-Control")&&m.set("Cache-Control","no-store"),I(),new ur},rewrite:S=>{if(k(),S.startsWith("http"))throw new Error("Rewrite does not support absolute urls");return u.set(xo,!0),new lo(S.replace(/\/+/g,"/"))},defer:S=>typeof S=="function"?S:()=>S,fail:(S,E)=>(k(),b=S,{failed:!0,...E}),text:(S,E)=>(m.set("Content-Type","text/plain; charset=utf-8"),A(S,E)),html:(S,E)=>(m.set("Content-Type","text/html; charset=utf-8"),A(S,E)),parseBody:async()=>v!==void 0?v:v=Qa(_,u,o),json:(S,E)=>(m.set("Content-Type","application/json; charset=utf-8"),A(S,JSON.stringify(E))),send:A,isDirty:()=>g!==null,getWritableStream:()=>{if(g===null){if(e.mode==="dev"){const S=u.get("@serverTiming");S&&m.set("Server-Timing",S.map(E=>`${E[0]};dur=${E[1]}`).join(","))}g=e.getWritableStream(b,m,p,i,_)}return g}};return Object.freeze(_)}function vn(e){return e[mo]}function dr(e){return e[$o]}function Wa(e){return e[ho]}function xn(e){return e[fo]}var xs=Number.MAX_SAFE_INTEGER,Qa=async({request:e,method:t,query:n},r,s)=>{var o;const i=((o=e.headers.get("content-type"))==null?void 0:o.split(/[;,]/,1)[0].trim())??"";if(i==="application/x-www-form-urlencoded"||i==="multipart/form-data"){const a=await e.formData();return r.set(vo,a),Ba(a)}else{if(i==="application/json")return await e.json();if(i==="application/qwik-json"){if(t==="GET"&&n.has(ps)){const a=n.get(ps);if(a)try{return s._deserializeData(decodeURIComponent(a))}catch{}}return s._deserializeData(await e.text())}}},Ba=e=>[...e.entries()].reduce((n,[r,s])=>(r.split(".").reduce((o,i,a,l)=>{if(i.endsWith("[]")){const c=i.slice(0,-2);return o[c]=o[c]||[],o[c]=[...o[c],s]}return a<l.length-1?o[i]=o[i]||(Number.isNaN(+l[a+1])?{}:[]):o[i]=s},n),n),{});function Ha(e){const{params:t,request:n,status:r,locale:s,originalUrl:o}=e,i={};n.headers.forEach((g,v)=>i[v]=g);const a=e.sharedMap.get(gn),l=e.sharedMap.get(vo),c=e.sharedMap.get(go),u=e.sharedMap.get(Ua),p=e.request.headers,m=new URL(o.pathname+o.search,o),h=p.get("X-Forwarded-Host"),$=p.get("X-Forwarded-Proto");return h&&(m.port="",m.host=h),$&&(m.protocol=$),{url:m.href,requestHeaders:i,locale:s(),nonce:u,containerAttributes:{"q:route":c},qwikcity:{routeName:c,ev:e,params:{...t},loadedRoute:Wa(e),response:{status:r(),loaders:vn(e),action:a,formData:l}}}}var Ga=(e,t,n,r,s)=>{const o=[],i=[],a=[],l=!!(t&&Za(t[2]));if(e&&bs(o,i,a,e,l,n),t){const c=t[0];r&&(n==="POST"||n==="PUT"||n==="PATCH"||n==="DELETE")&&(a.unshift(tl),r==="lax-proto"&&a.push(el)),l&&((n==="POST"||n==="GET")&&a.push(Va),a.push(Ka),a.push(sl));const u=t[2];a.push(rl),bs(o,i,a,u,l,n),l&&(a.push(p=>{p.sharedMap.set(go,c)}),a.push(Ya(i,o)),a.push(s))}return a},bs=(e,t,n,r,s,o)=>{for(const i of r){typeof i.onRequest=="function"?n.push(i.onRequest):Array.isArray(i.onRequest)&&n.push(...i.onRequest);let a;switch(o){case"GET":{a=i.onGet;break}case"POST":{a=i.onPost;break}case"PUT":{a=i.onPut;break}case"PATCH":{a=i.onPatch;break}case"DELETE":{a=i.onDelete;break}case"OPTIONS":{a=i.onOptions;break}case"HEAD":{a=i.onHead;break}}if(typeof a=="function"?n.push(a):Array.isArray(a)&&n.push(...a),s)for(const l of Object.values(i))typeof l=="function"&&(l.__brand==="server_loader"?e.push(l):l.__brand==="server_action"&&t.push(l))}};function Ya(e,t){return async n=>{if(n.headersSent){n.exit();return}const{method:r}=n,s=vn(n),o=xn(n)==="dev",i=n[Et];if(o&&r==="GET"&&n.query.has(ds)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),r==="POST"){const a=n.query.get(ds);if(a){const l=globalThis._qwikActionsMap,c=e.find(u=>u.__id===a)??(l==null?void 0:l.get(a));if(c){n.sharedMap.set(gn,a);const u=await n.parseBody();if(!u||typeof u!="object")throw new Error(`Expected request data for the action id ${a} to be an object`);const p=await ys(n,c.__validators,u,o);if(!p.success)s[a]=n.fail(p.status??500,p.error);else{const m=o?await Kt(n,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(n,p.data,n)):await c.__qrl.call(n,p.data,n);o&&Vt(i,m,c.__qrl),s[a]=m}}}}if(t.length>0){const a=t.map(l=>{const c=l.__id;return s[c]=ys(n,l.__validators,void 0,o).then(u=>u.success?o?Kt(n,l.__qrl.getSymbol().split("_",1)[0],()=>l.__qrl.call(n,n)):l.__qrl.call(n,n):n.fail(u.status??500,u.error)).then(u=>(typeof u=="function"?s[c]=u():(o&&Vt(i,u,l.__qrl),s[c]=u),u)),s[c]});await Promise.all(a)}}}async function ys(e,t,n,r){let s={success:!0,data:n};if(t)for(const o of t)if(r?s=await Kt(e,"validator$",()=>o.validate(e,n)):s=await o.validate(e,n),s.success)n=s.data;else return s;return s}function Ja(e){return e?typeof e=="object"&&Symbol.asyncIterator in e:!1}async function Va(e){const t=e.query.get(Ta);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const n=xn(e)==="dev",r=e[Et],s=await e.parseBody();if(Array.isArray(s)){const[o,...i]=s;if(Xa(o)&&o.getHash()===t){let a;try{n?a=await Kt(e,`server_${o.getSymbol()}`,()=>o.apply(e,i)):a=await o.apply(e,i)}catch(l){throw l instanceof cr?e.error(l.status,l.data):e.error(500,"Invalid request")}if(Ja(a)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const u of a){n&&Vt(r,u,o);const p=await r._serializeData(u,!0);if(e.signal.aborted)break;await c.write(bn.encode(`${p}
`))}c.close()}else{Vt(r,a,o),e.headers.set("Content-Type","application/qwik-json");const l=await r._serializeData(a,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function Ka(e){const t=dr(e),{basePathname:n,originalUrl:r,sharedMap:s}=e,{pathname:o,search:i}=r;if(!s.has(_t)&&o!==n&&!o.endsWith(".html")){if(t){if(!o.endsWith("/"))throw e.redirect(301,o+"/"+i)}else if(o.endsWith("/"))throw e.redirect(301,o.slice(0,o.length-1)+i)}}function Vt(e,t,n){try{e._verifySerializable(t,void 0)}catch(r){throw r instanceof Error&&n.dev&&(r.loc=n.dev),r}}var Xa=e=>typeof e=="function"&&typeof e.getSymbol=="function";function Za(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function bo(e,t){e=new URL(e),e.pathname.endsWith(ot)&&(e.pathname=e.pathname.slice(0,-ot.length)),t?e.pathname.endsWith("/")||(e.pathname+="/"):e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1));const n=e.search.slice(1).replaceAll(/&?q(action|data|func)=[^&]+/g,"");return`${e.pathname}${n?`?${n}`:""}${e.hash}`}var bn=new TextEncoder;function el(e){yo(e,"lax-proto")}function tl(e){yo(e)}function yo(e,t){if(il(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const r=e.request.headers.get("origin"),s=e.url.origin;let o=r!==s;if(o&&t&&s.startsWith("https://")&&(r==null?void 0:r.slice(4))===s.slice(5)&&(o=!1),o)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${r}" does not match the server origin "${s}".`)}}function nl(e){return async t=>{if(t.headersSent||t.sharedMap.has(_t))return;t.request.headers.forEach((p,m)=>p);const r=t.headers;r.has("Content-Type")||r.set("Content-Type","text/html; charset=utf-8");const s=dr(t),{readable:o,writable:i}=new TextEncoderStream,a=t.getWritableStream(),l=o.pipeTo(a,{preventClose:!0}),c=i.getWriter(),u=t.status();try{const p=xn(t)==="static",m=Ha(t),h=await e({base:t.basePathname+"build/",stream:c,serverData:m,containerAttributes:{"q:render":p?"static":"",...m.containerAttributes}}),$={loaders:vn(t),action:t.sharedMap.get(gn),status:u!==200?u:200,href:bo(t.url,s)};typeof h.html=="string"&&await c.write(h.html),t.sharedMap.set("qData",$)}finally{await c.ready,await c.close(),await l}await a.close()}}async function rl(e){if(!e.sharedMap.has(_t))return;try{await e.next()}catch(o){if(!(o instanceof ur))throw o}if(e.headersSent)return;const n=e.status(),r=e.headers.get("Location");if(n>=301&&n<=308&&r){const o=ol(r);if(o){e.headers.set("Location",o),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}async function sl(e){if(!e.sharedMap.has(_t)||(await e.next(),e.headersSent||e.exited))return;const n=e.status(),r=e.headers.get("Location"),s=dr(e);e.request.headers.forEach((c,u)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const o={loaders:vn(e),action:e.sharedMap.get(gn),status:n!==200?n:200,href:bo(e.url,s),redirect:r??void 0,isRewrite:e.sharedMap.get(xo)},i=e.getWritableStream().getWriter(),l=await e[Et]._serializeData(o,!0);i.write(bn.encode(l)),e.sharedMap.set("qData",o),i.close()}function ol(e){if(e.startsWith("/")){const t=ot,n=new URL(e,"http://localhost");return(n.pathname.endsWith("/")?n.pathname.slice(0,-1):n.pathname)+(t.startsWith("/")?"":"/")+t+n.search}else return}function ws(){return typeof performance<"u"?performance.now():0}async function Kt(e,t,n){const r=ws();try{return await n()}finally{const s=ws()-r;let o=e.sharedMap.get("@serverTiming");o||e.sharedMap.set("@serverTiming",o=[]),o.push([t,s])}}function il(e,...t){var n;const r=((n=e.get("content-type"))==null?void 0:n.split(/;/,1)[0].trim())??"";return t.includes(r)}async function al(e,t,n){const{render:r,qwikCityPlan:s,checkOrigin:o}=t,i=e.url.pathname,a=vs(i,s.trailingSlash),l=await Ss(s,a,e.request.method,o??!0,r);if(l){const[c,u]=l;return ja(e,c,u,async m=>{const h=vs(m.pathname,s.trailingSlash),$=await Ss(s,h,e.request.method,o??!0,r);if($){const[g,v]=$;return{loadedRoute:g,requestHandlers:v}}else return{loadedRoute:null,requestHandlers:[]}},s.trailingSlash,s.basePathname,n)}return null}async function Ss(e,t,n,r,s){const{routes:o,serverPlugins:i,menus:a,cacheModules:l}=e,c=await Na(o,a,l,t),u=Ga(i,c,n,r,nl(s));return u.length>0?[c,u]:null}const ll=!0,cl=!1,Pe=e=>e&&typeof e.nodeType=="number",wo=e=>e.nodeType===9,Re=e=>e.nodeType===1,De=e=>{const t=e.nodeType;return t===1||t===111},ul=e=>{const t=e.nodeType;return t===1||t===111||t===3},ge=e=>e.nodeType===111,pr=e=>e.nodeType===3,At=e=>e.nodeType===8,Qe=(e,...t)=>fr(!1,e,...t),So=(e,...t)=>{throw fr(!1,e,...t)},mr=(e,...t)=>fr(cl,e,...t),ks=()=>{},Wn=()=>{},dl=e=>e,fr=(e,t,...n)=>{const r=t instanceof Error?t:new Error(t);return console.error("%cQWIK ERROR","",r.message,...dl(n),r.stack),r};const yn=e=>`Code(${e}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8+e}`,F=(e,...t)=>{const n=yn(e,...t);return mr(n,...t)},pl=()=>({isServer:ll,importSymbol(e,t,n){var o;{const i=Di(n),a=(o=globalThis.__qwik_reg_symbols)==null?void 0:o.get(i);if(a)return a}if(!t)throw F(31,n);if(!e)throw F(30,t,n);const r=ml(e.ownerDocument,e,t).toString(),s=new URL(r);return s.hash="",import(s.href).then(i=>i[n])},raf:e=>new Promise(t=>{requestAnimationFrame(()=>{t(e())})}),nextTick:e=>new Promise(t=>{setTimeout(()=>{t(e())})}),chunkForSymbol:(e,t)=>[e,t??"_"]}),ml=(e,t,n)=>{const r=e.baseURI,s=new URL(t.getAttribute("q:base")??r,r);return new URL(n,s)};let hr=pl();const ko=e=>hr=e,wn=()=>hr,le=()=>hr.isServer,Ct=e=>{const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},Ee=e=>!!e&&typeof e=="object",M=e=>Array.isArray(e),Ce=e=>typeof e=="string",Z=e=>typeof e=="function",W=e=>e&&typeof e.then=="function",$r=(e,t,n)=>{try{const r=e();return W(r)?r.then(t,n):t(r)}catch(r){return n(r)}},P=(e,t)=>W(e)?e.then(t):t(e),gr=e=>e.some(W)?Promise.all(e):e,Ke=e=>e.length>0?Promise.all(e):e,_o=e=>e!=null,fl=e=>new Promise(t=>{setTimeout(t,e)}),Se=[],Y={},It=e=>typeof document<"u"?document:e.nodeType===9?e:e.ownerDocument,hl="q:renderFn",ce="q:slot",Eo="q:s",Sn="q:style",$l="q:sstyle",Ao="q:instance",Co=(e,t)=>e["qFuncs_"+t]||[],gl="q:id",Qn=Symbol("proxy target"),Xe=Symbol("proxy flags"),pe=Symbol("proxy manager"),L=Symbol("IMMUTABLE"),kn="_qc_",ie=(e,t,n)=>e.setAttribute(t,n),he=(e,t)=>e.getAttribute(t),vr=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),vl=e=>e.replace(/-./g,t=>t[1].toUpperCase()),xl=(e,t,n,r)=>{typeof CustomEvent=="function"&&e&&e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:r,composed:r}))},xr=(e,t,n=0)=>t.$proxyMap$.get(e)||(n!==0&&En(e,n),qt(e,t,void 0)),qt=(e,t,n)=>{Nt(e),t.$proxyMap$.has(e);const r=t.$subsManager$.$createManager$(n),s=new Proxy(e,new Io(t,r));return t.$proxyMap$.set(e,s),s},_n=()=>{const e={};return En(e,2),e},En=(e,t)=>{Object.defineProperty(e,Xe,{value:t,enumerable:!1})};class Io{constructor(t,n){C(this,"$containerState$");C(this,"$manager$");this.$containerState$=t,this.$manager$=n}deleteProperty(t,n){if(2&t[Xe])throw F(17);return typeof n=="string"&&delete t[n]&&(this.$manager$.$notifySubs$(M(t)?void 0:n),!0)}get(t,n){var c;if(typeof n=="symbol")return n===Qn?t:n===pe?this.$manager$:t[n];const r=t[Xe]??0,s=ae(),o=!!(1&r),i=t["$$"+n];let a,l;if(s&&(a=s.$subscriber$),!(2&r)||n in t&&!bl((c=t[L])==null?void 0:c[n])||(a=null),i?(l=i.value,a=null):l=t[n],a){const u=M(t);this.$manager$.$addSub$(a,u?void 0:n)}return o?yl(l,this.$containerState$):l}set(t,n,r){if(typeof n=="symbol")return t[n]=r,!0;const s=t[Xe]??0;if(2&s)throw F(17);const o=1&s?Nt(r):r;if(M(t))return t[n]=o,this.$manager$.$notifySubs$(),!0;const i=t[n];return t[n]=o,i!==o&&this.$manager$.$notifySubs$(n),!0}has(t,n){if(n===Qn)return!0;const r=ae();if(typeof n=="string"&&r){const o=r.$subscriber$;if(o){const i=M(t);this.$manager$.$addSub$(o,i?void 0:n)}}const s=Object.prototype.hasOwnProperty;return!!s.call(t,n)||!(typeof n!="string"||!s.call(t,"$$"+n))}ownKeys(t){if(!(2&(t[Xe]??0))){let r=null;const s=ae();s&&(r=s.$subscriber$),r&&this.$manager$.$addSub$(r)}return M(t)?Reflect.ownKeys(t):Reflect.ownKeys(t).map(r=>typeof r=="string"&&r.startsWith("$$")?r.slice(2):r)}getOwnPropertyDescriptor(t,n){const r=Reflect.getOwnPropertyDescriptor(t,n);return M(t)||typeof n=="symbol"||r&&!r.configurable?r:{enumerable:!0,configurable:!0}}}const bl=e=>e===L||J(e),yl=(e,t)=>{if(Ee(e)){if(Object.isFrozen(e))return e;const n=Nt(e);if(n!==e||Ti(n))return e;if(Ct(n)||M(n))return t.$proxyMap$.get(n)||xr(n,t,1)}return e},wl=/^(on|window:|document:)/,qo="preventdefault:",br=e=>e.endsWith("$")&&wl.test(e),yr=e=>{if(e.length===0)return Se;if(e.length===1){const n=e[0];return[[n[0],[n[1]]]]}const t=[];for(let n=0;n<e.length;n++){const r=e[n][0];t.includes(r)||t.push(r)}return t.map(n=>[n,e.filter(r=>r[0]===n).map(r=>r[1])])},wr=(e,t,n,r)=>{if(t.endsWith("$"),t=Bn(t.slice(0,-1)),n)if(M(n)){const s=n.flat(1/0).filter(o=>o!=null).map(o=>[t,Es(o,r)]);e.push(...s)}else e.push([t,Es(n,r)]);return t},_s=["on","window:on","document:on"],Sl=["on","on-window","on-document"],Bn=e=>{let t="on";for(let n=0;n<_s.length;n++){const r=_s[n];if(e.startsWith(r)){t=Sl[n],e=e.slice(r.length);break}}return t+":"+(e=e.startsWith("-")?vr(e.slice(1)):e.toLowerCase())},Es=(e,t)=>(e.$setContainer$(t),e),kl=(e,t)=>{const n=e.$element$.attributes,r=[];for(let s=0;s<n.length;s++){const{name:o,value:i}=n.item(s);if(o.startsWith("on:")||o.startsWith("on-window:")||o.startsWith("on-document:")){const a=i.split(`
`);for(const l of a){const c=Tn(l,t);c.$capture$&&Ai(c,e),r.push([o,c])}}}return r},_l=(e,t=0)=>{for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Number(Math.abs(t)).toString(36)},El=(e,t)=>`${_l(e.$hash$)}-${t}`,Al=e=>"⭐️"+e,To=e=>{const t=e.join("|");if(t.length>0)return t},Be=()=>{const e=Nr(),t=ee(e.$hostElement$,e.$renderCtx$.$static$.$containerState$),n=t.$seq$||(t.$seq$=[]),r=e.$i$++;return{val:n[r],set:s=>n[r]=s,i:r,iCtx:e,elCtx:t}},ve=e=>Object.freeze({id:vr(e)}),ye=(e,t)=>{const{val:n,set:r,elCtx:s}=Be();if(n!==void 0)return;(s.$contexts$||(s.$contexts$=new Map)).set(e.id,t),r(!0)},Sr=(e,t)=>{const{val:n,set:r,iCtx:s,elCtx:o}=Be();if(n!==void 0)return n;const i=zo(e,o,s.$renderCtx$.$static$.$containerState$);if(i!==void 0)return r(i);throw F(13,e.id)},Cl=(e,t)=>{var s;let n=e,r=1;for(;n&&!((s=n.hasAttribute)!=null&&s.call(n,"q:container"));){for(;n=n.previousSibling;)if(At(n)){const o=n.__virtual;if(o){const i=o[kn];if(n===o.open)return i??ee(o,t);if(i!=null&&i.$parentCtx$)return i.$parentCtx$;n=o;continue}if(n.data==="/qv")r++;else if(n.data.startsWith("qv ")&&(r--,r===0))return ee(Dt(n),t)}n=e.parentElement,e=n}return null},Il=(e,t)=>(e.$parentCtx$===void 0&&(e.$parentCtx$=Cl(e.$element$,t)),e.$parentCtx$),zo=(e,t,n)=>{var o;const r=e.id;if(!t)return;let s=t;for(;s;){const i=(o=s.$contexts$)==null?void 0:o.get(r);if(i)return i;s=Il(s,n)}},ql=ve("qk-error"),kr=(e,t,n)=>{const r=ue(t);if(le())throw e;{const s=zo(ql,r,n.$static$.$containerState$);if(s===void 0)throw e;s.error=e}},Tl=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexShrink","gridArea","gridRow","gridRowEnd","gridRowStart","gridColumn","gridColumnEnd","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","MozAnimationIterationCount","MozBoxFlex","msFlex","msFlexPositive","WebkitAnimationIterationCount","WebkitBoxFlex","WebkitBoxOrdinalGroup","WebkitColumnCount","WebkitColumns","WebkitFlex","WebkitFlexGrow","WebkitFlexShrink","WebkitLineClamp"]),zl=e=>Tl.has(e),Xt=(e,t,n)=>{t.$flags$&=-2,t.$flags$|=Rr,t.$slots$=[],t.li.length=0;const r=t.$element$,s=t.$componentQrl$,o=t.$props$,i=ne(e.$static$.$locale$,r,void 0,"qRender"),a=i.$waitOn$=[],l=Tt(e);l.$cmpCtx$=t,l.$slotCtx$=void 0,i.$subscriber$=[0,r],i.$renderCtx$=e,s.$setContainer$(e.$static$.$containerState$.$containerEl$);const c=s.getFn(i);return $r(()=>c(o),u=>P(le()?P(Ke(a),()=>P($c(e.$static$.$containerState$,e),()=>Ke(a))):Ke(a),()=>{var p;if(t.$flags$&bt){if(!(n&&n>100))return Xt(e,t,n?n+1:1);Wn(`Infinite loop detected. Element: ${(p=t.$componentQrl$)==null?void 0:p.$symbol$}`)}return{node:u,rCtx:l}}),u=>{var p;if(u===ai){if(!(n&&n>100))return P(Ke(a),()=>Xt(e,t,n?n+1:1));Wn(`Infinite loop detected. Element: ${(p=t.$componentQrl$)==null?void 0:p.$symbol$}`)}return kr(u,r,e),{node:Cr,rCtx:l}})},Po=(e,t)=>({$static$:{$doc$:e,$locale$:t.$serverData$.locale,$containerState$:t,$hostElements$:new Set,$operations$:[],$postOperations$:[],$roots$:[],$addSlots$:[],$rmSlots$:[],$visited$:[]},$cmpCtx$:null,$slotCtx$:void 0}),Tt=e=>({$static$:e.$static$,$cmpCtx$:e.$cmpCtx$,$slotCtx$:e.$slotCtx$}),_r=(e,t)=>{var n;return(n=t==null?void 0:t.$scopeIds$)!=null&&n.length?t.$scopeIds$.join(" ")+" "+Zt(e):Zt(e)},Zt=e=>{if(!e)return"";if(Ce(e))return e.trim();const t=[];if(M(e))for(const n of e){const r=Zt(n);r&&t.push(r)}else for(const[n,r]of Object.entries(e))r&&t.push(n.trim());return t.join(" ")},An=e=>{if(e==null)return"";if(typeof e=="object"){if(M(e))throw F(0,e,"style");{const t=[];for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const r=e[n];r!=null&&typeof r!="function"&&(n.startsWith("--")?t.push(n+":"+r):t.push(vr(n)+":"+Pl(n,r)))}return t.join(";")}}return String(e)},Pl=(e,t)=>typeof t!="number"||t===0||zl(e)?t:t+"px",gt=e=>Te(e.$static$.$containerState$.$elementIndex$++),Ro=(e,t)=>{const n=gt(e);t.$id$=n},vt=e=>J(e)?vt(e.value):e==null||typeof e=="boolean"?"":String(e);function Do(e){return e.startsWith("aria-")}const No=(e,t)=>!!t.key&&(!He(e)||!Z(e.type)&&e.key!=t.key),V="dangerouslySetInnerHTML",Gt="<!--qkssr-f-->";var so;so=kn;class Mo{constructor(t){C(this,"nodeType");C(this,so,null);this.nodeType=t}}const Rl=()=>new Mo(9),Dl=async(e,t)=>{var g,v,f;const n=t.containerTagName,r=en(1).$element$,s=Or(r,t.base??"/");s.$serverData$.locale=(g=t.serverData)==null?void 0:g.locale;const o=Rl(),i=Po(o,s),a=t.beforeContent??[],l={$static$:{$contexts$:[],$headNodes$:n==="html"?a:[],$locale$:(v=t.serverData)==null?void 0:v.locale,$textNodes$:new Map},$projectedChildren$:void 0,$projectedCtxs$:void 0,$invocationContext$:void 0},c=(f=t.serverData)==null?void 0:f.locale,u=t.containerAttributes,p=u["q:render"];u["q:container"]="paused",u["q:version"]="1.15.0",u["q:render"]=(p?p+"-":"")+"ssr",u["q:base"]=t.base||"",u["q:locale"]=c,u["q:manifest-hash"]=t.manifestHash,u["q:instance"]=Nl();const m=n==="html"?[e]:[a,e];n!=="html"&&(u.class="qc📦"+(u.class?" "+u.class:""));const h=s.$serverData$={...s.$serverData$,...t.serverData};h.containerAttributes={...h.containerAttributes,...u},(l.$invocationContext$=ne(c)).$renderCtx$=i;const $=d(n,null,u,m,bt|zt,null);s.$hostsRendering$=new Set,await Promise.resolve().then(()=>Ml($,i,l,t.stream,s,t))},Nl=()=>Math.random().toString(36).slice(2),Ml=async(e,t,n,r,s,o)=>{const i=o.beforeClose;return await Ar(e,t,n,r,0,i?a=>{const l=i(n.$static$.$contexts$,s,!1,n.$static$.$textNodes$);return me(l,t,n,a,0,void 0)}:void 0),t},Ol=async(e,t,n,r,s)=>{r.write(Gt);const o=e.props.children;let i;if(Z(o)){const a=o({write(l){r.write(l),r.write(Gt)}});if(W(a))return a;i=a}else i=o;for await(const a of i)await me(a,t,n,r,s,void 0),r.write(Gt)},Oo=(e,t,n,r,s,o,i,a)=>{var g;const l=e.props,c=l["q:renderFn"];if(c)return t.$componentQrl$=c,Ul(r,s,o,t,e,i,a);let u="<!--qv"+jl(l);const p="q:s"in l,m=e.key!=null?String(e.key):null;p&&((g=r.$cmpCtx$)==null||g.$id$,u+=" q:sref="+r.$cmpCtx$.$id$),m!=null&&(u+=" q:key="+m),u+="-->",o.write(u);const h=e.props[V];if(h)return o.write(h),void o.write(Nn);if(n)for(const v of n)Er(v.type,v.props,o);const $=Lo(e.children,r,s,o,i);return P($,()=>{var f;if(!p&&!a)return void o.write(Nn);let v;if(p){const b=(f=s.$projectedChildren$)==null?void 0:f[m];if(b){const[y,x]=s.$projectedCtxs$,k=Tt(y);k.$slotCtx$=t,s.$projectedChildren$[m]=void 0,v=me(b,k,x,o,i)}}return a&&(v=P(v,()=>a(o))),P(v,()=>{o.write(Nn)})})},Nn="<!--/qv-->",Ll=e=>{let t="";for(const n in e){if(n===V)continue;const r=e[n];r!=null&&(t+=" "+(r===""?n:n+'="'+r+'"'))}return t},jl=e=>{let t="";for(const n in e){if(n==="children"||n===V)continue;const r=e[n];r!=null&&(t+=" "+(r===""?n:n+"="+r))}return t},Er=(e,t,n)=>{if(n.write("<"+e+Ll(t)+">"),Fo[e])return;const r=t[V];r!=null&&n.write(r),n.write(`</${e}>`)},Ul=(e,t,n,r,s,o,i)=>(Wl(e,r,s.props.props),P(Xt(e,r),a=>{const l=r.$element$,c=a.rCtx,u=ne(t.$static$.$locale$,l,void 0);u.$subscriber$=[0,l],u.$renderCtx$=c;const p={$static$:t.$static$,$projectedChildren$:Fl(s.children,t),$projectedCtxs$:[e,t],$invocationContext$:u},m=[];if(r.$appendStyles$){const v=4&o?t.$static$.$headNodes$:m;for(const f of r.$appendStyles$)v.push(d("style",{[Sn]:f.styleId,[V]:f.content,hidden:""},null,null,0,null))}const h=gt(e),$=r.$scopeIds$?To(r.$scopeIds$):void 0,g=N(s.type,{[$l]:$,[gl]:h,children:a.node},0,s.key);return r.$id$=h,t.$static$.$contexts$.push(r),Oo(g,r,m,c,p,n,o,v=>{if(r.$flags$&zt){const y=en(1),x=y.li;x.push(...r.li),r.$flags$&=-3,y.$id$=gt(e);const k={type:"placeholder",hidden:"","q:id":y.$id$};t.$static$.$contexts$.push(y);const A=yr(x);for(const I of A){const w=Wo(I[0]);k[w]=Yr(I[1],e.$static$.$containerState$,y),Hn(w,e.$static$.$containerState$)}Er("script",k,v)}const f=p.$projectedChildren$;let b;if(f){const y=Object.keys(f).map(I=>{const w=f[I];if(w)return d("q:template",{[ce]:I||!0,hidden:!0,"aria-hidden":"true"},null,w,0,null)}),[x,k]=p.$projectedCtxs$,A=Tt(x);A.$slotCtx$=r,b=me(y,A,k,v,0,void 0)}return i?P(b,()=>i(v)):b})})),Fl=(e,t)=>{const n=jo(e,t);if(n===null)return;const r={};for(const s of n){let o="";He(s)&&(o=s.props[ce]||""),(r[o]||(r[o]=[])).push(s)}return r},en=e=>{const t=new Mo(e);return In(t)},Ar=(e,t,n,r,s,o)=>{var c;const i=e.type,a=t.$cmpCtx$;if(typeof i=="string"){const u=e.key,p=e.props,m=e.immutableProps||Y,h=en(1),$=h.$element$,g=i==="head";let v="<"+i,f=!1,b=!1,y="",x=null;const k=(w,_,S)=>{if(w==="ref")return void(_!==void 0&&(Lr(_,$),b=!0));if(br(w))return void wr(h.li,w,_,void 0);if(J(_)&&(_=_e(_,S?[1,$,_,a.$element$,w]:[2,a.$element$,_,$,w]),f=!0),w===V)return void(x=_);let E;w.startsWith(qo)&&Hn(w.slice(15),t.$static$.$containerState$);const T=w==="htmlFor"?"for":w;T==="class"||T==="className"?y=Zt(_):T==="style"?E=An(_):Do(T)||T==="draggable"||T==="spellcheck"?(E=_!=null?String(_):null,_=E):E=_===!1||_==null?null:String(_),E!=null&&(T==="value"&&i==="textarea"?x=Ze(E):Yl(T)||(v+=" "+(_===!0?T:T+'="'+Ze(E)+'"')))};for(const w in p){let _=!1,S;w in m?(_=!0,S=m[w],S===L&&(S=p[w])):S=p[w],k(w,S,_)}for(const w in m){if(w in p)continue;const _=m[w];_!==L&&k(w,_,!0)}const A=h.li;if(a){if((c=a.$scopeIds$)!=null&&c.length){const w=a.$scopeIds$.join(" ");y=y?`${w} ${y}`:w}a.$flags$&zt&&(A.push(...a.li),a.$flags$&=-3)}if(g&&(s|=1),i in Ql&&(s|=16),i in Bl&&(s|=8),y&&(v+=' class="'+Ze(y)+'"'),A.length>0){const w=yr(A),_=!!(16&s);for(const S of w){const E=_?Wo(S[0]):S[0];v+=" "+E+'="'+Yr(S[1],t.$static$.$containerState$,h)+'"',Hn(E,t.$static$.$containerState$)}}if(u!=null&&(v+=' q:key="'+Ze(u)+'"'),b||f||A.length>0){if(b||f||Jl(A)){const w=gt(t);v+=' q:id="'+w+'"',h.$id$=w}n.$static$.$contexts$.push(h)}if(1&s&&(v+=" q:head"),v+=">",r.write(v),i in Fo)return;if(x!=null)return r.write(String(x)),void r.write(`</${i}>`);i==="html"?s|=4:s&=-5,2&e.flags&&(s|=1024);const I=me(e.children,t,n,r,s);return P(I,()=>{if(g){for(const w of n.$static$.$headNodes$)Er(w.type,w.props,r);n.$static$.$headNodes$.length=0}if(o)return P(o(r),()=>{r.write(`</${i}>`)});r.write(`</${i}>`)})}if(i===Ie){const u=en(111);return t.$slotCtx$?(u.$parentCtx$=t.$slotCtx$,u.$realParentCtx$=t.$cmpCtx$):u.$parentCtx$=t.$cmpCtx$,a&&a.$flags$&Dr&&Vl(a,u),Oo(e,u,void 0,t,n,r,s,o)}if(i===Qo)return void r.write(e.props.data);if(i===Bo)return Ol(e,t,n,r,s);const l=te(n.$invocationContext$,i,e.props,e.key,e.flags,e.dev);return No(l,e)?Ar(N(Ie,{children:l},0,e.key),t,n,r,s,o):me(l,t,n,r,s,o)},me=(e,t,n,r,s,o)=>{var i;if(e!=null&&typeof e!="boolean"){if(!Ce(e)&&typeof e!="number"){if(He(e))return Ar(e,t,n,r,s,o);if(M(e))return Lo(e,t,n,r,s);if(J(e)){const a=8&s,l=(i=t.$cmpCtx$)==null?void 0:i.$element$;let c;if(l){if(!a){const u=gt(t);if(c=_e(e,1024&s?[3,"#"+u,e,"#"+u]:[4,l,e,"#"+u]),Ce(c)){const p=vt(c);n.$static$.$textNodes$.set(p,u)}return r.write(`<!--t=${u}-->`),me(c,t,n,r,s,o),void r.write("<!---->")}c=te(n.$invocationContext$,()=>e.value)}return void r.write(Ze(vt(c)))}return W(e)?(r.write(Gt),e.then(a=>me(a,t,n,r,s,o))):void 0}r.write(Ze(String(e)))}},Lo=(e,t,n,r,s)=>{if(e==null)return;if(!M(e))return me(e,t,n,r,s);const o=e.length;if(o===1)return me(e[0],t,n,r,s);if(o===0)return;let i=0;const a=[];return e.reduce((l,c,u)=>{const p=[];a.push(p);const m=me(c,t,n,l?{write(h){i===u?r.write(h):p.push(h)}}:r,s);if(l||W(m)){const h=()=>{i++,a.length>i&&a[i].forEach($=>r.write($))};return W(m)?l?Promise.all([m,l]).then(h):m.then(h):l.then(h)}i++},void 0)},jo=(e,t)=>{if(e==null)return null;const n=Uo(e,t),r=M(n)?n:[n];return r.length===0?null:r},Uo=(e,t)=>{if(e==null)return null;if(M(e))return e.flatMap(n=>Uo(n,t));if(He(e)&&Z(e.type)&&e.type!==Qo&&e.type!==Bo&&e.type!==Ie){const n=te(t.$invocationContext$,e.type,e.props,e.key,e.flags);return jo(n,t)}return e},Wl=(e,t,n)=>{const r=Object.keys(n),s=_n();if(t.$props$=qt(s,e.$static$.$containerState$),r.length===0)return;const o=s[L]=n[L]??Y;for(const i of r)i!=="children"&&i!==ce&&(J(o[i])?s["$$"+i]=o[i]:s[i]=n[i])},Ql={head:!0,style:!0,script:!0,link:!0,meta:!0},Bl={title:!0,style:!0,script:!0,noframes:!0,textarea:!0},Fo={area:!0,base:!0,basefont:!0,bgsound:!0,br:!0,col:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Hl=/[&<>'"]/g,Hn=(e,t)=>{t.$events$.add(ci(e))},Ze=e=>e.replace(Hl,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&#39;";default:return""}}),Gl=/[>/="'\u0009\u000a\u000c\u0020]/,Yl=e=>Gl.test(e),Jl=e=>e.some(t=>t[1].$captureRef$&&t[1].$captureRef$.length>0),Vl=(e,t)=>{const n=e.$dynamicSlots$||(e.$dynamicSlots$=[]);n.includes(t)||n.push(t)},Wo=e=>e==="on:qvisible"?"on-document:qinit":e,se=(e,t,n)=>new Jn(e,t,n),Kl=e=>{const t=e.$funcStr$;let n="";for(let r=0;r<e.$args$.length;r++)n+=`p${r},`;return`(${n})=>(${t})`},d=(e,t,n,r,s,o)=>{const i=o==null?null:String(o);return new lt(e,t||Y,n,r,s,i)},Ft=(e,t,n,r,s,o)=>{let i=null;return t&&"children"in t&&(i=t.children,delete t.children),d(e,t,n,i,r,s)},N=(e,t,n,r,s)=>{const o=r==null?null:String(r),i=t??{};if(typeof e=="string"&&L in i){const l=i[L];delete i[L];const c=i.children;delete i.children;for(const[u,p]of Object.entries(l))p!==L&&(delete i[u],i[u]=p);return d(e,null,i,c,n,r)}const a=new lt(e,i,null,i.children,n,o);return typeof e=="string"&&t&&delete t.children,a},G=(e,t,n)=>{const s=ii(()=>{const i=t.children;return typeof e=="string"&&delete t.children,i});return Ce(e)&&"className"in t&&(t.class=t.className,delete t.className),new lt(e,t,null,s,0,null)};class lt{constructor(t,n,r,s,o,i=null){C(this,"type");C(this,"props");C(this,"immutableProps");C(this,"children");C(this,"flags");C(this,"key");C(this,"dev");this.type=t,this.props=n,this.immutableProps=r,this.children=s,this.flags=o,this.key=i}}const Ie=e=>e.children,He=e=>e instanceof lt,fe=e=>e.children,Cr=Symbol("skip render"),Qo=()=>null,Bo=()=>null,Ir=(e,t,n)=>{const r=!(t.$flags$&Rr),s=t.$element$,o=e.$static$.$containerState$;return o.$hostsStaging$.delete(t),o.$subsManager$.$clearSub$(s),P(Xt(e,t),i=>{const a=e.$static$,l=i.rCtx,c=ne(e.$static$.$locale$,s);if(a.$hostElements$.add(s),c.$subscriber$=[0,s],c.$renderCtx$=l,r&&t.$appendStyles$)for(const p of t.$appendStyles$)cu(a,p);const u=qe(i.node,c);return P(u,p=>{const m=Xl(s,p),h=qr(t);return P(on(l,h,m,n),()=>{t.$vdom$=m})})})},qr=e=>(e.$vdom$||(e.$vdom$=an(e.$element$)),e.$vdom$);class ke{constructor(t,n,r,s,o,i){C(this,"$type$");C(this,"$props$");C(this,"$immutableProps$");C(this,"$children$");C(this,"$flags$");C(this,"$key$");C(this,"$elm$",null);C(this,"$text$","");C(this,"$signal$",null);C(this,"$id$");C(this,"$dev$");this.$type$=t,this.$props$=n,this.$immutableProps$=r,this.$children$=s,this.$flags$=o,this.$key$=i,this.$id$=t+(i?":"+i:"")}}const Ho=(e,t)=>{const{key:n,type:r,props:s,children:o,flags:i,immutableProps:a}=e;let l="";if(Ce(r))l=r;else{if(r!==Ie){if(Z(r)){const u=te(t,r,s,n,i,e.dev);return No(u,e)?Ho(N(Ie,{children:u},0,n),t):qe(u,t)}throw F(25,r)}l=it}let c=Se;return o!=null?P(qe(o,t),u=>(u!==void 0&&(c=M(u)?u:[u]),new ke(l,s,a,c,i,n))):new ke(l,s,a,c,i,n)},Xl=(e,t)=>{const n=t===void 0?Se:M(t)?t:[t],r=new ke(":virtual",{},null,n,0,null);return r.$elm$=e,r},qe=(e,t)=>{if(e!=null&&typeof e!="boolean"){if(Go(e)){const n=new ke("#text",Y,null,Se,0,null);return n.$text$=String(e),n}if(He(e))return Ho(e,t);if(J(e)){const n=new ke("#signal",Y,null,Se,0,null);return n.$signal$=e,n}if(M(e)){const n=gr(e.flatMap(r=>qe(r,t)));return P(n,r=>r.flat(100).filter(_o))}return W(e)?e.then(n=>qe(n,t)):e===Cr?new ke(":skipRender",Y,null,Se,0,null):void 0}},Go=e=>Ce(e)||typeof e=="number",Yo=e=>{he(e,"q:container")==="paused"&&(tc(e),ic(e))},Zl=e=>{const t=It(e),n=sc(e===t.documentElement?t.body:e,"type");if(n)return JSON.parse(rc(n.firstChild.data)||"{}")},ec=(e,t)=>{const n=JSON.parse(e);if(typeof n!="object")return null;const{_objs:r,_entry:s}=n;if(r===void 0||s===void 0)return null;let o={},i={};if(Pe(t)&&De(t)){const c=Mr(t);c&&(i=ct(c),o=c.ownerDocument)}const a=Ii(i,o);for(let c=0;c<r.length;c++){const u=r[c];Ce(u)&&(r[c]=u===zn?void 0:a.prepare(u))}const l=c=>r[$e(c)];for(const c of r)Jo(c,l,a);return l(s)},tc=e=>{if(!Qc(e))return;const t=e._qwikjson_??Zl(e);if(e._qwikjson_=null,!t)return;const n=It(e),r=e.getAttribute(Ao),s=Co(n,r),o=ct(e),i=new Map,a=new Map;let l=null,c=0;const u=n.createTreeWalker(e,li);for(;l=u.nextNode();){const f=l.data;if(c===0){if(f.startsWith("qv ")){const b=ac(f);b>=0&&i.set(b,l)}else if(f.startsWith("t=")){const b=f.slice(2),y=$e(b),x=oc(l);i.set(y,x),a.set(y,x.data)}}f==="cq"?c++:f==="/cq"&&c--}const p=e.getElementsByClassName("qc📦").length!==0;e.querySelectorAll("[q\\:id]").forEach(f=>{if(p&&f.closest("[q\\:container]")!==e)return;const b=he(f,"q:id"),y=$e(b);i.set(y,f)});const m=Ii(o,n),h=new Map,$=new Set,g=f=>(typeof f=="string"&&f.length>0,h.has(f)?h.get(f):v(f)),v=f=>{if(f.startsWith("#")){const A=f.slice(1),I=$e(A);i.has(I);const w=i.get(I);if(At(w)){if(!w.isConnected)return void h.set(f,void 0);const _=Dt(w);return h.set(f,_),ee(_,o),_}return Re(w)?(h.set(f,w),ee(w,o),w):(h.set(f,w),w)}if(f.startsWith("@")){const A=f.slice(1),I=$e(A);return s[I]}if(f.startsWith("*")){const A=f.slice(1),I=$e(A);i.has(I);const w=a.get(I);return h.set(f,w),w}const b=$e(f),y=t.objs;y.length>b;let x=y[b];Ce(x)&&(x=x===zn?void 0:m.prepare(x));let k=x;for(let A=f.length-1;A>=0;A--){const I=fd[f[A]];if(!I)break;k=I(k,o)}return h.set(f,k),Go(x)||$.has(b)||($.add(b),nc(x,b,t.subs,g,o,m),Jo(x,g,m)),k};o.$elementIndex$=1e5,o.$pauseCtx$={getObject:g,meta:t.ctx,refs:t.refs},ie(e,"q:container","resumed"),xl(e,"qresume",void 0,!0)},nc=(e,t,n,r,s,o)=>{const i=n[t];if(i){const a=[];let l=0;for(const c of i)if(c.startsWith("_"))l=parseInt(c.slice(1),10);else{const u=yd(c,r);u&&a.push(u)}if(l>0&&En(e,l),!o.subs(e,a)){const c=s.$proxyMap$.get(e);c?X(c).$addSubs$(a):qt(e,s,a)}}},Jo=(e,t,n)=>{if(!n.fill(e,t)&&e&&typeof e=="object"){if(M(e))for(let r=0;r<e.length;r++)e[r]=t(e[r]);else if(Ct(e))for(const r in e)e[r]=t(e[r])}},rc=e=>e.replace(/\\x3C(\/?script)/gi,"<$1"),sc=(e,t)=>{let n=e.lastElementChild;for(;n;){if(n.tagName==="SCRIPT"&&he(n,t)==="qwik/json")return n;n=n.previousElementSibling}},oc=e=>{const t=e.nextSibling;if(pr(t))return t;{const n=e.ownerDocument.createTextNode("");return e.parentElement.insertBefore(n,e),n}},ic=e=>{e.qwik={pause:()=>Eu(e),state:ct(e)}},ac=e=>{const t=e.indexOf("q:id=");return t>0?$e(e.slice(t+5)):-1},xe=()=>{const e=Dc();let t=e.$qrl$;if(t)t.$captureRef$;else{const n=e.$element$,r=Mr(n);t=Tn(decodeURIComponent(String(e.$url$)),r),Yo(r);const s=ee(n,ct(r));Ai(t,s)}return t.$captureRef$},lc=(e,t)=>{try{const n=t[0],r=e.$static$;switch(n){case 1:case 2:{let s,o;n===1?(s=t[1],o=t[3]):(s=t[3],o=t[1]);const i=ue(s);if(i==null)return;const a=t[4],l=s.namespaceURI===Rt;r.$containerState$.$subsManager$.$clearSignal$(t);let c=_e(t[2],t.slice(0,-1));a==="class"?c=_r(c,ue(o)):a==="style"&&(c=An(c));const u=qr(i);return a in u.$props$&&u.$props$[a]===c?void 0:(u.$props$[a]=c,Fr(r,s,a,c,l))}case 3:case 4:{const s=t[3];if(!r.$visited$.includes(s)){r.$containerState$.$subsManager$.$clearSignal$(t);const o=void 0;let i=_e(t[2],t.slice(0,-1));const a=kd();Array.isArray(i)&&(i=new lt(Ie,{},null,i,0,null));let l=qe(i,o);if(W(l))Qe("Rendering promises in JSX signals is not supported");else{l===void 0&&(l=qe("",o));const c=di(s),u=cc(t[1]);if(e.$cmpCtx$=ee(u,e.$static$.$containerState$),c.$type$==l.$type$&&c.$key$==l.$key$&&c.$id$==l.$id$)Je(e,c,l,0);else{const p=[],m=c.$elm$,h=Fe(e,l,0,p);p.length&&Qe("Rendering promises in JSX signals is not supported"),a[3]=h,tt(e.$static$,s.parentElement,h,m),m&&Qr(r,m)}}}}}}catch{}};function cc(e){for(;e;){if(De(e))return e;e=e.parentElement}throw new Error("Not found")}const uc=(e,t)=>{if(e[0]===0){const n=e[1];Pr(n)?Tr(n,t):dc(n,t)}else pc(e,t)},dc=(e,t)=>{const n=le();n||Yo(t.$containerEl$);const r=ee(e,t);if(r.$componentQrl$,!(r.$flags$&bt))if(r.$flags$|=bt,t.$hostsRendering$!==void 0)t.$hostsStaging$.add(r);else{if(n)return;t.$hostsNext$.add(r),zr(t)}},pc=(e,t)=>{const n=t.$hostsRendering$!==void 0;t.$opsNext$.add(e),n||zr(t)},Tr=(e,t)=>{e.$flags$&nn||(e.$flags$|=nn,t.$hostsRendering$!==void 0?t.$taskStaging$.add(e):(t.$taskNext$.add(e),zr(t)))},zr=e=>(e.$renderPromise$===void 0&&(e.$renderPromise$=wn().nextTick(()=>Vo(e))),e.$renderPromise$),mc=()=>{const[e]=xe();Tr(e,ct(Mr(e.$el$)))},Vo=async e=>{const t=e.$containerEl$,n=It(t);try{const r=Po(n,e),s=r.$static$,o=e.$hostsRendering$=new Set(e.$hostsNext$);e.$hostsNext$.clear(),await hc(e,r),e.$hostsStaging$.forEach(l=>{o.add(l)}),e.$hostsStaging$.clear();const i=Array.from(e.$opsNext$);e.$opsNext$.clear();const a=Array.from(o);vc(a),!e.$styleMoved$&&a.length>0&&(e.$styleMoved$=!0,(t===n.documentElement?n.body:t).querySelectorAll("style[q\\:style]").forEach(l=>{e.$styleIds$.add(he(l,Sn)),xi(s,n.head,l)}));for(const l of a){const c=l.$element$;if(!s.$hostElements$.has(c)&&l.$componentQrl$){c.isConnected,s.$roots$.push(l);try{await Ir(r,l,fc(c.parentElement))}catch(u){Qe(u)}}}return i.forEach(l=>{lc(r,l)}),s.$operations$.push(...s.$postOperations$),s.$operations$.length===0?(Ms(s),void await As(e,r)):(await nu(s),Ms(s),As(e,r))}catch(r){Qe(r)}},fc=e=>{let t=0;return e&&(e.namespaceURI===Rt&&(t|=Ue),e.tagName==="HEAD"&&(t|=jr)),t},As=async(e,t)=>{const n=t.$static$.$hostElements$;await gc(e,t,(r,s)=>!!(r.$flags$&Zo)&&(!s||n.has(r.$el$))),e.$hostsStaging$.forEach(r=>{e.$hostsNext$.add(r)}),e.$hostsStaging$.clear(),e.$hostsRendering$=void 0,e.$renderPromise$=void 0,e.$hostsNext$.size+e.$taskNext$.size+e.$opsNext$.size>0&&(e.$renderPromise$=Vo(e))},Gn=e=>!!(e.$flags$&ei),Cs=e=>!!(e.$flags$&ti),hc=async(e,t)=>{const n=e.$containerEl$,r=[],s=[];e.$taskNext$.forEach(o=>{Gn(o)&&(s.push(P(o.$qrl$.$resolveLazy$(n),()=>o)),e.$taskNext$.delete(o)),Cs(o)&&(r.push(P(o.$qrl$.$resolveLazy$(n),()=>o)),e.$taskNext$.delete(o))});do if(e.$taskStaging$.forEach(o=>{Gn(o)?s.push(P(o.$qrl$.$resolveLazy$(n),()=>o)):Cs(o)?r.push(P(o.$qrl$.$resolveLazy$(n),()=>o)):e.$taskNext$.add(o)}),e.$taskStaging$.clear(),s.length>0){const o=await Promise.all(s);tn(o),await Promise.all(o.map(i=>rn(i,e,t))),s.length=0}while(e.$taskStaging$.size>0);if(r.length>0){const o=await Promise.all(r);tn(o);for(const i of o)rn(i,e,t)}},$c=(e,t)=>{const n=e.$containerEl$,r=e.$taskStaging$;if(!r.size)return;const s=[];let o=20;const i=()=>{if(r.forEach(a=>{Gn(a)&&s.push(P(a.$qrl$.$resolveLazy$(n),()=>a))}),r.clear(),s.length>0)return Promise.all(s).then(async a=>{if(tn(a),await Promise.all(a.map(l=>rn(l,e,t))),s.length=0,--o&&r.size>0)return i();o||Wn(`Infinite task loop detected. Tasks:
${Array.from(r).map(l=>`  ${l.$qrl$.$symbol$}`).join(`
`)}`)})};return i()},gc=async(e,t,n)=>{const r=[],s=e.$containerEl$;e.$taskNext$.forEach(o=>{n(o,!1)&&(o.$el$.isConnected&&r.push(P(o.$qrl$.$resolveLazy$(s),()=>o)),e.$taskNext$.delete(o))});do if(e.$taskStaging$.forEach(o=>{o.$el$.isConnected&&(n(o,!0)?r.push(P(o.$qrl$.$resolveLazy$(s),()=>o)):e.$taskNext$.add(o))}),e.$taskStaging$.clear(),r.length>0){const o=await Promise.all(r);tn(o);for(const i of o)rn(i,e,t);r.length=0}while(e.$taskStaging$.size>0)},vc=e=>{e.sort((t,n)=>2&t.$element$.compareDocumentPosition(cn(n.$element$))?1:-1)},tn=e=>{const t=le();e.sort((n,r)=>t||n.$el$===r.$el$?n.$index$<r.$index$?-1:1:2&n.$el$.compareDocumentPosition(cn(r.$el$))?1:-1)},xc=(e,t)=>{Xo(Ko(e,void 0),t)},Is=(e,t)=>{Xo(Ko(e,"document"),t)},Ko=(e,t)=>{const n=t!==void 0?t+":":"";return Array.isArray(e)?e.map(r=>`${n}on-${r}`):`${n}on-${e}`},Xo=(e,t)=>{if(t){const n=Nr(),r=ee(n.$hostElement$,n.$renderCtx$.$static$.$containerState$);typeof e=="string"?r.li.push([Bn(e),t]):r.li.push(...e.map(s=>[Bn(s),t])),r.$flags$|=zt}},bc=e=>{const t=Nc(),n=Z(e)&&!Kr(e)?te(void 0,e):e;return jc(n,t,0)},yc=e=>{const{val:t,set:n}=Be();return t??n(e=Z(e)&&!Kr(e)?e():e)},K=e=>yc(()=>bc(e)),Zo=1,ei=2,ti=4,nn=16,wc=(e,t)=>{const{val:n,set:r,iCtx:s,i:o,elCtx:i}=Be();if(n)return;const a=s.$renderCtx$.$static$.$containerState$,l=new Cn(nn|ei,o,i.$element$,e,void 0);r(!0),e.$resolveLazy$(a.$containerEl$),i.$tasks$||(i.$tasks$=[]),i.$tasks$.push(l),Oc(s,()=>ri(l,a,s.$renderCtx$)),le()&&Yn(l,t==null?void 0:t.eagerness)},Sc=(e,t)=>{const{val:n,set:r,i:s,iCtx:o,elCtx:i}=Be(),a=(t==null?void 0:t.strategy)??"intersection-observer";if(n)return void(le()&&Yn(n,a));const l=new Cn(Zo,s,i.$element$,e,void 0),c=o.$renderCtx$.$static$.$containerState$;i.$tasks$||(i.$tasks$=[]),i.$tasks$.push(l),r(l),Yn(l,a),le()||(e.$resolveLazy$(c.$containerEl$),Tr(l,c))},ni=e=>!!(e.$flags$&ti),kc=e=>!!(8&e.$flags$),rn=async(e,t,n)=>(e.$flags$&nn,ni(e)?_c(e,t,n):kc(e)?Ec(e,t,n):ri(e,t,n)),_c=(e,t,n,r)=>{e.$flags$&=-17,xt(e);const s=ne(n.$static$.$locale$,e.$el$,void 0,"qTask"),{$subsManager$:o}=t;s.$renderCtx$=n;const i=e.$qrl$.getFn(s,()=>{o.$clearSub$(e)}),a=[],l=e.$state$,c=Nt(l),u={track:(f,b)=>{if(Z(f)){const x=ne();return x.$renderCtx$=n,x.$subscriber$=[0,e],te(x,f)}const y=X(f);return y?y.$addSub$([0,e],b):mr(yn(26),f),b?f[b]:J(f)?f.value:f},cleanup(f){a.push(f)},cache(f){let b=0;b=f==="immutable"?1/0:f,l._cache=b},previous:c._resolved};let p,m,h=!1;const $=(f,b)=>!h&&(h=!0,f?(h=!0,l.loading=!1,l._state="resolved",l._resolved=b,l._error=void 0,p(b)):(h=!0,l.loading=!1,l._state="rejected",l._error=b,m(b)),!0);te(s,()=>{l._state="pending",l.loading=!le(),l.value=new Promise((f,b)=>{p=f,m=b})}),e.$destroy$=Rn(()=>{h=!0,a.forEach(f=>f())});const g=$r(()=>P(r,()=>i(u)),f=>{$(!0,f)},f=>{$(!1,f)}),v=c._timeout;return v>0?Promise.race([g,fl(v).then(()=>{$(!1,new Error("timeout"))&&xt(e)})]):g},ri=(e,t,n)=>{e.$flags$&=-17,xt(e);const r=e.$el$,s=ne(n.$static$.$locale$,r,void 0,"qTask");s.$renderCtx$=n;const{$subsManager$:o}=t,i=e.$qrl$.getFn(s,()=>{o.$clearSub$(e)}),a=[];e.$destroy$=Rn(()=>{a.forEach(c=>c())});const l={track:(c,u)=>{if(Z(c)){const m=ne();return m.$subscriber$=[0,e],te(m,c)}const p=X(c);return p?p.$addSub$([0,e],u):mr(yn(26),c),u?c[u]:J(c)?c.value:c},cleanup(c){a.push(c)}};return $r(()=>i(l),c=>{Z(c)&&a.push(c)},c=>{kr(c,r,n)})},Ec=(e,t,n)=>{e.$state$,e.$flags$&=-17,xt(e);const r=e.$el$,s=ne(n.$static$.$locale$,r,void 0,"qComputed");s.$subscriber$=[0,e],s.$renderCtx$=n;const{$subsManager$:o}=t,i=e.$qrl$.getFn(s,()=>{o.$clearSub$(e)}),a=c=>{ii(()=>{const u=e.$state$;u[ht]&=-3,u.untrackedValue=c,u[pe].$notifySubs$()})},l=c=>{kr(c,r,n)};try{return P(e.$qrl$.$resolveLazy$(t.$containerEl$),()=>{const c=i();if(W(c)){const u="useComputed$: Async functions in computed tasks are deprecated and will stop working in v2. Use useTask$ or useResource$ instead.",p=new Error(u).stack;return p&&p.replace(/^Error:\s*/,""),ks(),c.then(a,l)}a(c)})}catch(c){l(c)}},xt=e=>{const t=e.$destroy$;if(t){e.$destroy$=void 0;try{t()}catch(n){Qe(n)}}},si=e=>{32&e.$flags$?(e.$flags$&=-33,(0,e.$qrl$)()):xt(e)},Yn=(e,t)=>{t==="visible"||t==="intersection-observer"?xc("qvisible",Mn(e)):t==="load"||t==="document-ready"?Is("qinit",Mn(e)):t!=="idle"&&t!=="document-idle"||Is("qidle",Mn(e))},Mn=e=>{const t=e.$qrl$,n=Mt(t.$chunk$,"_hW",mc,null,null,[e],t.$symbol$);return t.dev&&(n.dev=t.dev),n},Pr=e=>Ee(e)&&e instanceof Cn,Ac=(e,t)=>{let n=`${Te(e.$flags$)} ${Te(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;return e.$state$&&(n+=` ${t(e.$state$)}`),n},Cc=e=>{const[t,n,r,s,o]=e.split(" ");return new Cn($e(t),$e(n),s,r,o)};class Cn{constructor(t,n,r,s,o){C(this,"$flags$");C(this,"$index$");C(this,"$el$");C(this,"$qrl$");C(this,"$state$");this.$flags$=t,this.$index$=n,this.$el$=r,this.$qrl$=s,this.$state$=o}}function Ic(e){return qc(e)&&e.nodeType===1}function qc(e){return e&&typeof e.nodeType=="number"}const bt=1,zt=2,Rr=4,Dr=8,ue=e=>e[kn],ee=(e,t)=>{const n=ue(e);if(n)return n;const r=In(e),s=he(e,"q:id");if(s){const o=t.$pauseCtx$;if(r.$id$=s,o){const{getObject:i,meta:a,refs:l}=o;if(Ic(e)){const c=l[s];c&&(r.$refMap$=c.split(" ").map(i),r.li=kl(r,t.$containerEl$))}else{const c=e.getAttribute("q:sstyle");r.$scopeIds$=c?c.split("|"):null;const u=a[s];if(u){const p=u.s,m=u.h,h=u.c,$=u.w;if(p&&(r.$seq$=p.split(" ").map(i)),$&&(r.$tasks$=$.split(" ").map(i)),h){r.$contexts$=new Map;for(const g of h.split(" ")){const[v,f]=g.split("=");r.$contexts$.set(v,i(f))}}if(m){const[g,v]=m.split(" ");if(r.$flags$=Rr,g&&(r.$componentQrl$=i(g)),v){const f=i(v);r.$props$=f,En(f,2),f[L]=Tc(f)}else r.$props$=qt(_n(),t)}}}}}return r},Tc=e=>{const t={},n=Ge(e);for(const r in n)r.startsWith("$$")&&(t[r.slice(2)]=n[r]);return t},In=e=>{const t={$flags$:0,$id$:"",$element$:e,$refMap$:[],li:[],$tasks$:null,$seq$:null,$slots$:null,$scopeIds$:null,$appendStyles$:null,$props$:null,$vdom$:null,$componentQrl$:null,$contexts$:null,$dynamicSlots$:null,$parentCtx$:void 0,$realParentCtx$:void 0};return e[kn]=t,t},zc=(e,t)=>{var n;(n=e.$tasks$)==null||n.forEach(r=>{t.$clearSub$(r),si(r)}),e.$componentQrl$=null,e.$seq$=null,e.$tasks$=null};let nt;function Pc(e){if(nt===void 0){const t=ae();return t&&t.$locale$?t.$locale$:e}return nt}function qs(e,t){const n=nt;try{return nt=e,t()}finally{nt=n}}function Rc(e){nt=e}let ft;const ae=()=>{if(!ft){const e=typeof document<"u"&&document&&document.__q_context__;return e?M(e)?document.__q_context__=oi(e):e:void 0}return ft},Dc=()=>{const e=ae();if(!e)throw F(14);return e},Nr=()=>{const e=ae();if(!e||e.$event$!=="qRender")throw F(20);return e.$hostElement$,e.$waitOn$,e.$renderCtx$,e.$subscriber$,e},Nc=()=>Nr().$renderCtx$.$static$.$containerState$;function te(e,t,...n){return Mc.call(this,e,t,n)}function Mc(e,t,n){const r=ft;let s;try{ft=e,s=t.apply(this,n)}finally{ft=r}return s}const Oc=(e,t)=>{const n=e.$waitOn$;if(n.length===0){const r=t();W(r)&&n.push(r)}else n.push(Promise.all(n).then(t))},oi=([e,t,n])=>{const r=e.closest("[q\\:container]"),s=(r==null?void 0:r.getAttribute("q:locale"))||void 0;return s&&Rc(s),ne(s,void 0,e,t,n)},ne=(e,t,n,r,s)=>({$url$:s,$i$:0,$hostElement$:t,$element$:n,$event$:r,$qrl$:void 0,$waitOn$:void 0,$subscriber$:void 0,$renderCtx$:void 0,$locale$:e||(typeof r=="object"&&r&&"locale"in r?r.locale:void 0)}),Mr=e=>e.closest("[q\\:container]"),ii=e=>te(void 0,e),Ts=ne(void 0,void 0,void 0,"qRender"),_e=(e,t)=>(Ts.$subscriber$=t,te(Ts,()=>e.value)),Lc=e=>{const t=ae();return t&&t.$hostElement$&&t.$renderCtx$&&(ee(t.$hostElement$,t.$renderCtx$.$static$.$containerState$).$flags$|=Dr),e},jc=(e,t,n,r)=>{const s=t.$subsManager$.$createManager$(r);return new yt(e,s,n)},ht=Symbol("proxy manager"),Uc=1,Fc=2,ai=Symbol("unassigned signal");class Pt{}var oo,io,ao;class yt extends(ao=Pt,io=pe,oo=ht,ao){constructor(n,r,s){super();C(this,"untrackedValue");C(this,io);C(this,oo,0);this.untrackedValue=n,this[pe]=r,this[ht]=s}valueOf(){}toString(){return`[Signal ${String(this.value)}]`}toJSON(){return{value:this.value}}get value(){var r;if(this[ht]&Fc)throw ai;const n=(r=ae())==null?void 0:r.$subscriber$;return n&&this[pe].$addSub$(n),this.untrackedValue}set value(n){const r=this[pe];r&&this.untrackedValue!==n&&(this.untrackedValue=n,r.$notifySubs$())}}class Jn extends Pt{constructor(n,r,s){super();C(this,"$func$");C(this,"$args$");C(this,"$funcStr$");this.$func$=n,this.$args$=r,this.$funcStr$=s}get value(){return this.$func$.apply(void 0,this.$args$)}}class Vn extends Pt{constructor(n,r){super();C(this,"ref");C(this,"prop");this.ref=n,this.prop=r}get[pe](){return X(this.ref)}get value(){return this.ref[this.prop]}set value(n){this.ref[this.prop]=n}}const J=e=>e instanceof Pt,Wc=(e,t)=>{var s,o;if(!Ee(e))return e[t];if(e instanceof Pt)return e;const n=Ge(e);if(n){const i=n["$$"+t];if(i)return i;if(((s=n[L])==null?void 0:s[t])!==!0)return new Vn(e,t)}const r=(o=e[L])==null?void 0:o[t];return J(r)?r:L},U=(e,t)=>{const n=Wc(e,t);return n===L?e[t]:n},zs=Symbol("ContainerState"),ct=e=>{let t=e[zs];return t||(e[zs]=t=Or(e,he(e,"q:base")??"/")),t},Or=(e,t)=>{const n={};if(e){const s=e.attributes;if(s)for(let o=0;o<s.length;o++){const i=s[o];n[i.name]=i.value}}const r={$containerEl$:e,$elementIndex$:0,$styleMoved$:!1,$proxyMap$:new WeakMap,$opsNext$:new Set,$taskNext$:new Set,$taskStaging$:new Set,$hostsNext$:new Set,$hostsStaging$:new Set,$styleIds$:new Set,$events$:new Set,$serverData$:{containerAttributes:n},$base$:t,$renderPromise$:void 0,$hostsRendering$:void 0,$pauseCtx$:void 0,$subsManager$:null,$inlineFns$:new Map};return r.$subsManager$=wd(r),r},Lr=(e,t)=>{if(Z(e))return e(t);if(J(e))return le()?e.untrackedValue=t:e.value=t;throw F(32,e)},li=128,Qc=e=>Re(e)&&e.hasAttribute("q:container"),Te=e=>e.toString(36),$e=e=>parseInt(e,36),ci=e=>{const t=e.indexOf(":");return e&&vl(e.slice(t+1))},Rt="http://www.w3.org/2000/svg",Ue=1,jr=2,sn=[],on=(e,t,n,r)=>{t.$elm$;const s=n.$children$;if(s.length===1&&s[0].$type$===":skipRender")return void(n.$children$=t.$children$);const o=t.$elm$;let i=ln;t.$children$===sn&&o.nodeName==="HEAD"&&(i=Gc,r|=jr);const a=Bc(t,i);return a.length>0&&s.length>0?Hc(e,o,a,s,r):a.length>0&&s.length===0?Ur(e.$static$,a,0,a.length-1):s.length>0?mi(e,o,null,s,0,s.length-1,r):void 0},Bc=(e,t)=>{const n=e.$children$;return n===sn?e.$children$=ui(e.$elm$,t):n},Hc=(e,t,n,r,s)=>{let o=0,i=0,a=n.length-1,l=n[0],c=n[a],u=r.length-1,p=r[0],m=r[u],h,$,g;const v=[],f=e.$static$;for(;o<=a&&i<=u;)if(l==null)l=n[++o];else if(c==null)c=n[--a];else if(p==null)p=r[++i];else if(m==null)m=r[--u];else if(l.$id$===p.$id$)v.push(Je(e,l,p,s)),l=n[++o],p=r[++i];else if(c.$id$===m.$id$)v.push(Je(e,c,m,s)),c=n[--a],m=r[--u];else if(l.$key$&&l.$id$===m.$id$)l.$elm$,c.$elm$,v.push(Je(e,l,m,s)),lu(f,t,l.$elm$,c.$elm$),l=n[++o],m=r[--u];else if(c.$key$&&c.$id$===p.$id$)l.$elm$,c.$elm$,v.push(Je(e,c,p,s)),tt(f,t,c.$elm$,l.$elm$),c=n[--a],p=r[++i];else{if(h===void 0&&(h=ou(n,o,a)),$=h[p.$key$],$===void 0){const y=Fe(e,p,s,v);tt(f,t,y,l==null?void 0:l.$elm$)}else if(g=n[$],g.$type$!==p.$type$){const y=Fe(e,p,s,v);P(y,x=>{tt(f,t,x,l==null?void 0:l.$elm$)})}else v.push(Je(e,g,p,s)),n[$]=void 0,g.$elm$,tt(f,t,g.$elm$,l.$elm$);p=r[++i]}i<=u&&v.push(mi(e,t,r[u+1]==null?null:r[u+1].$elm$,r,i,u,s));let b=gr(v);return o<=a&&(b=P(b,()=>{Ur(f,n,o,a)})),b},et=(e,t)=>{const n=ge(e)?e.close:null,r=[];let s=e.firstChild;for(;(s=Br(s))&&(t(s)&&r.push(s),s=s.nextSibling,s!==n););return r},ui=(e,t)=>et(e,t).map(di),di=e=>{var t;return Re(e)?((t=ue(e))==null?void 0:t.$vdom$)??an(e):an(e)},an=e=>{if(De(e)){const t=new ke(e.localName,{},null,sn,0,Xn(e));return t.$elm$=e,t}if(pr(e)){const t=new ke(e.nodeName,Y,null,sn,0,null);return t.$text$=e.data,t.$elm$=e,t}},Gc=e=>{const t=e.nodeType;return t===1?e.hasAttribute("q:head"):t===111},Kn=e=>e.nodeName==="Q:TEMPLATE",ln=e=>{const t=e.nodeType;if(t===3||t===111)return!0;if(t!==1)return!1;const n=e.nodeName;return n!=="Q:TEMPLATE"&&(n==="HEAD"?e.hasAttribute("q:head"):n!=="STYLE"||!e.hasAttribute(Sn))},pi=e=>{const t={};for(const n of e){const r=Yc(n);(t[r]??(t[r]=new ke(it,{[Eo]:""},null,[],0,r))).$children$.push(n)}return t},Je=(e,t,n,r)=>{t.$type$,n.$type$,t.$key$,n.$key$,t.$id$,n.$id$;const s=t.$elm$,o=n.$type$,i=e.$static$,a=i.$containerState$,l=e.$cmpCtx$;if(n.$elm$=s,o==="#text"){i.$visited$.push(s);const m=n.$signal$;return m&&(n.$text$=vt(_e(m,[4,l.$element$,m,s]))),void ze(i,s,"data",n.$text$)}if(o==="#signal")return;const c=n.$props$,u=n.$flags$,p=ee(s,a);if(o!==it){let m=!!(r&Ue);if(m||o!=="svg"||(r|=Ue,m=!0),c!==Y){1&u||(p.li.length=0);const h=t.$props$;n.$props$=h;for(const $ in c){let g=c[$];if($!=="ref")if(br($)){const v=wr(p.li,$,g,a.$containerEl$);$i(i,s,v)}else J(g)&&(g=_e(g,[1,l.$element$,g,s,$])),$==="class"?g=_r(g,l):$==="style"&&(g=An(g)),h[$]!==g&&(h[$]=g,Fr(i,s,$,g,m));else g!==void 0&&Lr(g,s)}}return 2&u||(m&&o==="foreignObject"&&(r&=-2),c[V]!==void 0)||o==="textarea"?void 0:on(e,t,n,r)}if("q:renderFn"in c){const m=c.props;tu(a,p,m);let h=!!(p.$flags$&bt);return h||p.$componentQrl$||p.$element$.hasAttribute("q:id")||(Ro(e,p),p.$componentQrl$=m["q:renderFn"],p.$componentQrl$,h=!0),h?P(Ir(e,p,r),()=>Ps(e,p,n,r)):Ps(e,p,n,r)}if("q:s"in c)return l.$slots$,void l.$slots$.push(n);if(V in c)ze(i,s,"innerHTML",c[V]);else if(!(2&u))return on(e,t,n,r)},Ps=(e,t,n,r)=>{if(2&n.$flags$)return;const s=e.$static$,o=pi(n.$children$),i=hi(t);for(const a in i.slots)if(!o[a]){const l=i.slots[a],c=ui(l,ln);if(c.length>0){const u=ue(l);u&&u.$vdom$&&(u.$vdom$.$children$=[]),Ur(s,c,0,c.length-1)}}for(const a in i.templates){const l=i.templates[a];l&&!o[a]&&(i.templates[a]=void 0,Qr(s,l))}return gr(Object.keys(o).map(a=>{const l=o[a],c=fi(s,i,t,a,e.$static$.$containerState$),u=qr(c),p=Tt(e),m=c.$element$;p.$slotCtx$=c,c.$vdom$=l,l.$elm$=m;let h=-2&r;m.isSvg&&(h|=Ue);const $=s.$addSlots$.findIndex(g=>g[0]===m);return $>=0&&s.$addSlots$.splice($,1),on(p,u,l,h)}))},mi=(e,t,n,r,s,o,i)=>{const a=[];for(;s<=o;++s){const l=r[s],c=Fe(e,l,i,a);tt(e.$static$,t,c,n)}return Ke(a)},Ur=(e,t,n,r)=>{for(;n<=r;++n){const s=t[n];s&&(s.$elm$,Qr(e,s.$elm$))}},fi=(e,t,n,r,s)=>{const o=t.slots[r];if(o)return ee(o,s);const i=t.templates[r];if(i)return ee(i,s);const a=bi(e.$doc$,r),l=In(a);return l.$parentCtx$=n,du(e,n.$element$,a),t.templates[r]=a,l},Yc=e=>e.$props$[ce]??"",Fe=(e,t,n,r)=>{const s=t.$type$,o=e.$static$.$doc$,i=e.$cmpCtx$;if(s==="#text")return t.$elm$=o.createTextNode(t.$text$);if(s==="#signal"){const v=t.$signal$,f=v.value;if(He(f)){const b=qe(f);if(J(b))throw new Error("NOT IMPLEMENTED: Promise");if(Array.isArray(b))throw new Error("NOT IMPLEMENTED: Array");{const y=Fe(e,b,n,r);return _e(v,4&n?[3,y,v,y]:[4,i.$element$,v,y]),t.$elm$=y}}{const b=o.createTextNode(t.$text$);return b.data=t.$text$=vt(f),_e(v,4&n?[3,b,v,b]:[4,i.$element$,v,b]),t.$elm$=b}}let a,l=!!(n&Ue);l||s!=="svg"||(n|=Ue,l=!0);const c=s===it,u=t.$props$,p=e.$static$,m=p.$containerState$;c?a=gu(o,l):s==="head"?(a=o.head,n|=jr):(a=Wr(o,s,l),n&=-3),2&t.$flags$&&(n|=4),t.$elm$=a;const h=In(a);if(e.$slotCtx$?(h.$parentCtx$=e.$slotCtx$,h.$realParentCtx$=e.$cmpCtx$):h.$parentCtx$=e.$cmpCtx$,c){if("q:renderFn"in u){const v=u["q:renderFn"],f=_n(),b=m.$subsManager$.$createManager$(),y=new Proxy(f,new Io(m,b)),x=u.props;if(m.$proxyMap$.set(f,y),h.$props$=y,x!==Y){const A=f[L]=x[L]??Y;for(const I in x)if(I!=="children"&&I!==ce){const w=A[I];J(w)?f["$$"+I]=w:f[I]=x[I]}}Ro(e,h),h.$componentQrl$=v;const k=P(Ir(e,h,n),()=>{let A=t.$children$;if(A.length===0)return;A.length===1&&A[0].$type$===":skipRender"&&(A=A[0].$children$);const I=hi(h),w=[],_=pi(A);for(const S in _){const E=_[S],T=fi(p,I,h,S,p.$containerState$),O=Tt(e),de=T.$element$;O.$slotCtx$=T,T.$vdom$=E,E.$elm$=de;let Q=-2&n;de.isSvg&&(Q|=Ue);for(const z of E.$children$){const B=Fe(O,z,Q,w);z.$elm$,z.$elm$,xi(p,de,B)}}return Ke(w)});return W(k)&&r.push(k),a}if("q:s"in u)i.$slots$,hu(a,t.$key$),ie(a,"q:sref",i.$id$),ie(a,"q:s",""),i.$slots$.push(t),p.$addSlots$.push([a,i.$element$]);else if(V in u)return ze(p,a,"innerHTML",u[V]),a}else{if(t.$immutableProps$){const v=u!==Y?Object.fromEntries(Object.entries(t.$immutableProps$).map(([f,b])=>[f,b===L?u[f]:b])):t.$immutableProps$;Ns(p,h,i,v,l,!0)}if(u!==Y){h.$vdom$=t;const v=t.$immutableProps$?Object.fromEntries(Object.entries(u).filter(([f])=>!(f in t.$immutableProps$))):u;t.$props$=Ns(p,h,i,v,l,!1)}if(l&&s==="foreignObject"&&(l=!1,n&=-2),i){const v=i.$scopeIds$;v&&v.forEach(f=>{a.classList.add(f)}),i.$flags$&zt&&(h.li.push(...i.li),i.$flags$&=-3)}for(const v of h.li)$i(p,a,v[0]);if(u[V]!==void 0)return a;l&&s==="foreignObject"&&(l=!1,n&=-2)}let $=t.$children$;if($.length===0)return a;$.length===1&&$[0].$type$===":skipRender"&&($=$[0].$children$);const g=$.map(v=>Fe(e,v,n,r));for(const v of g)wt(a,v);return a},Jc=e=>{const t=e.$slots$;return t||(e.$element$.parentElement,e.$slots$=Vc(e))},hi=e=>{const t=Jc(e),n={},r={},s=Array.from(e.$element$.childNodes).filter(Kn);for(const o of t)o.$elm$,n[o.$key$??""]=o.$elm$;for(const o of s)r[he(o,ce)??""]=o;return{slots:n,templates:r}},Vc=e=>{const t=e.$element$.parentElement;return yu(t,"q:sref",e.$id$).map(an)},Kc=(e,t,n)=>(ze(e,t.style,"cssText",n),!0),Rs=(e,t,n)=>(t.namespaceURI===Rt?St(e,t,"class",n):ze(e,t,"className",n),!0),Ds=(e,t,n,r)=>r in t&&((t[r]!==n||r==="value"&&!t.hasAttribute(r))&&(r==="value"&&t.tagName!=="OPTION"?au(e,t,r,n):ze(e,t,r,n)),!0),pt=(e,t,n,r)=>(St(e,t,r.toLowerCase(),n),!0),Xc=(e,t,n)=>(ze(e,t,"innerHTML",n),!0),Zc=()=>!0,eu={style:Kc,class:Rs,className:Rs,value:Ds,checked:Ds,href:pt,list:pt,form:pt,tabIndex:pt,download:pt,innerHTML:Zc,[V]:Xc},Fr=(e,t,n,r,s)=>{if(Do(n))return void St(e,t,n,r!=null?String(r):r);const o=eu[n];o&&o(e,t,r,n)||(s||!(n in t)?(n.startsWith(qo)&&gi(n.slice(15)),St(e,t,n,r)):ze(e,t,n,r))},Ns=(e,t,n,r,s,o)=>{const i={},a=t.$element$;for(const l in r){let c=r[l];if(l!=="ref")if(br(l))wr(t.li,l,c,e.$containerState$.$containerEl$);else{if(J(c)&&(c=_e(c,o?[1,a,c,n.$element$,l]:[2,n.$element$,c,a,l])),l==="class"){if(c=_r(c,n),!c)continue}else l==="style"&&(c=An(c));i[l]=c,Fr(e,a,l,c,s)}else c!==void 0&&Lr(c,a)}return i},tu=(e,t,n)=>{let r=t.$props$;if(r||(t.$props$=r=qt(_n(),e)),n===Y)return;const s=X(r),o=Ge(r),i=o[L]=n[L]??Y;for(const a in n)if(a!=="children"&&a!==ce&&!i[a]){const l=n[a];o[a]!==l&&(o[a]=l,s.$notifySubs$(a))}},$t=(e,t,n,r)=>{if(n.$clearSub$(e),De(e)){if(r&&e.hasAttribute("q:s"))return void t.$rmSlots$.push(e);const s=ue(e);s&&zc(s,n);const o=ge(e)?e.close:null;let i=e.firstChild;for(;(i=Br(i))&&($t(i,t,n,!0),i=i.nextSibling,i!==o););}},nu=async e=>{fu(e)},wt=(e,t)=>{ge(t)?t.appendTo(e):e.appendChild(t)},ru=(e,t)=>{ge(t)?t.remove():e.removeChild(t)},su=(e,t,n)=>{ge(t)?t.insertBeforeTo(e,(n==null?void 0:n.nextSibling)??null):e.insertBefore(t,(n==null?void 0:n.nextSibling)??null)},qn=(e,t,n)=>{ge(t)?t.insertBeforeTo(e,cn(n)):e.insertBefore(t,cn(n))},ou=(e,t,n)=>{const r={};for(let s=t;s<=n;++s){const o=e[s].$key$;o!=null&&(r[o]=s)}return r},$i=(e,t,n)=>{n.startsWith("on:")||St(e,t,n,""),gi(n)},gi=e=>{{const t=ci(e);try{(globalThis.qwikevents||(globalThis.qwikevents=[])).push(t)}catch{}}},St=(e,t,n,r)=>{e.$operations$.push({$operation$:iu,$args$:[t,n,r]})},iu=(e,t,n)=>{if(n==null||n===!1)e.removeAttribute(t);else{const r=n===!0?"":String(n);ie(e,t,r)}},ze=(e,t,n,r)=>{e.$operations$.push({$operation$:vi,$args$:[t,n,r]})},au=(e,t,n,r)=>{e.$postOperations$.push({$operation$:vi,$args$:[t,n,r]})},vi=(e,t,n)=>{try{e[t]=n??"",n==null&&Pe(e)&&Re(e)&&e.removeAttribute(t)}catch(r){Qe(yn(6),t,{node:e,value:n},r)}},Wr=(e,t,n)=>n?e.createElementNS(Rt,t):e.createElement(t),tt=(e,t,n,r)=>(e.$operations$.push({$operation$:qn,$args$:[t,n,r||null]}),n),lu=(e,t,n,r)=>(e.$operations$.push({$operation$:su,$args$:[t,n,r||null]}),n),xi=(e,t,n)=>(e.$operations$.push({$operation$:wt,$args$:[t,n]}),n),cu=(e,t)=>{e.$containerState$.$styleIds$.add(t.styleId),e.$postOperations$.push({$operation$:uu,$args$:[e.$containerState$,t]})},uu=(e,t)=>{const n=e.$containerEl$,r=It(n),s=r.documentElement===n,o=r.head,i=r.createElement("style");ie(i,Sn,t.styleId),ie(i,"hidden",""),i.textContent=t.content,s&&o?wt(o,i):qn(n,i,n.firstChild)},du=(e,t,n)=>{e.$operations$.push({$operation$:pu,$args$:[t,n]})},pu=(e,t)=>{qn(e,t,e.firstChild)},Qr=(e,t)=>{De(t)&&$t(t,e,e.$containerState$.$subsManager$,!0),e.$operations$.push({$operation$:mu,$args$:[t,e]})},mu=e=>{const t=e.parentElement;t&&ru(t,e)},bi=(e,t)=>{const n=Wr(e,"q:template",!1);return ie(n,ce,t),ie(n,"hidden",""),ie(n,"aria-hidden","true"),n},fu=e=>{for(const t of e.$operations$)t.$operation$.apply(void 0,t.$args$);$u(e)},Xn=e=>he(e,"q:key"),hu=(e,t)=>{t!==null&&ie(e,"q:key",t)},$u=e=>{const t=e.$containerState$.$subsManager$;for(const n of e.$rmSlots$){const r=Xn(n),s=et(n,ln);if(s.length>0){const o=n.getAttribute("q:sref"),i=e.$roots$.find(a=>a.$id$===o);if(i){const a=i.$element$;if(a.isConnected)if(et(a,Kn).some(l=>he(l,ce)===r))$t(n,e,t,!1);else{const l=bi(e.$doc$,r);for(const c of s)wt(l,c);qn(a,l,a.firstChild)}else $t(n,e,t,!1)}else $t(n,e,t,!1)}}for(const[n,r]of e.$addSlots$){const s=Xn(n),o=et(r,Kn).find(i=>i.getAttribute(ce)===s);o&&(et(o,ln).forEach(i=>{wt(n,i)}),o.remove())}},Ms=()=>{},gu=(e,t)=>{const n=e.createComment("qv "),r=e.createComment("/qv");return new yi(n,r,t)},vu=e=>{if(!e)return{};const t=e.split(" ");return Object.fromEntries(t.map(n=>{const r=n.indexOf("=");return r>=0?[n.slice(0,r),Su(n.slice(r+1))]:[n,""]}))},xu=e=>{const t=[];return Object.entries(e).forEach(([n,r])=>{t.push(r?`${n}=${wu(r)}`:`${n}`)}),t.join(" ")},bu=(e,t,n)=>e.ownerDocument.createTreeWalker(e,128,{acceptNode(r){const s=Dt(r);return s&&he(s,t)===n?1:2}}),yu=(e,t,n)=>{const r=bu(e,t,n),s=[];let o=null;for(;o=r.nextNode();)s.push(Dt(o));return s},wu=e=>e.replace(/ /g,"+"),Su=e=>e.replace(/\+/g," "),it=":virtual";class yi{constructor(t,n,r){C(this,"open");C(this,"close");C(this,"isSvg");C(this,"ownerDocument");C(this,"_qc_",null);C(this,"nodeType",111);C(this,"localName",it);C(this,"nodeName",it);C(this,"$attributes$");C(this,"$template$");this.open=t,this.close=n,this.isSvg=r;const s=this.ownerDocument=t.ownerDocument;this.$template$=Wr(s,"template",!1),this.$attributes$=vu(t.data.slice(3)),t.data.startsWith("qv "),t.__virtual=this,n.__virtual=this}insertBefore(t,n){const r=this.parentElement;return r?r.insertBefore(t,n||this.close):this.$template$.insertBefore(t,n),t}remove(){const t=this.parentElement;if(t){const n=this.childNodes;this.$template$.childElementCount,t.removeChild(this.open);for(let r=0;r<n.length;r++)this.$template$.appendChild(n[r]);t.removeChild(this.close)}}appendChild(t){return this.insertBefore(t,null)}insertBeforeTo(t,n){const r=this.childNodes;t.insertBefore(this.open,n);for(const s of r)t.insertBefore(s,n);t.insertBefore(this.close,n),this.$template$.childElementCount}appendTo(t){this.insertBeforeTo(t,null)}get namespaceURI(){var t;return((t=this.parentElement)==null?void 0:t.namespaceURI)??""}removeChild(t){this.parentElement?this.parentElement.removeChild(t):this.$template$.removeChild(t)}getAttribute(t){return this.$attributes$[t]??null}hasAttribute(t){return t in this.$attributes$}setAttribute(t,n){this.$attributes$[t]=n,this.open.data=Os(this.$attributes$)}removeAttribute(t){delete this.$attributes$[t],this.open.data=Os(this.$attributes$)}matches(t){return!1}compareDocumentPosition(t){return this.open.compareDocumentPosition(t)}closest(t){const n=this.parentElement;return n?n.closest(t):null}querySelectorAll(t){const n=[];return et(this,ul).forEach(r=>{De(r)&&(r.matches(t)&&n.push(r),n.concat(Array.from(r.querySelectorAll(t))))}),n}querySelector(t){for(const n of this.childNodes)if(Re(n)){if(n.matches(t))return n;const r=n.querySelector(t);if(r!==null)return r}return null}get innerHTML(){return""}set innerHTML(t){const n=this.parentElement;n?(this.childNodes.forEach(r=>this.removeChild(r)),this.$template$.innerHTML=t,n.insertBefore(this.$template$.content,this.close)):this.$template$.innerHTML=t}get firstChild(){if(this.parentElement){const t=this.open.nextSibling;return t===this.close?null:t}return this.$template$.firstChild}get nextSibling(){return this.close.nextSibling}get previousSibling(){return this.open.previousSibling}get childNodes(){if(!this.parentElement)return Array.from(this.$template$.childNodes);const t=[];let n=this.open;for(;(n=n.nextSibling)&&n!==this.close;)t.push(n);return t}get isConnected(){return this.open.isConnected}get parentElement(){return this.open.parentElement}}const Os=e=>`qv ${xu(e)}`,Br=e=>{if(e==null)return null;if(At(e)){const t=Dt(e);if(t)return t}return e},ku=e=>{let t=e,n=1;for(;t=t.nextSibling;)if(At(t)){const r=t.__virtual;if(r)t=r;else if(t.data.startsWith("qv "))n++;else if(t.data==="/qv"&&(n--,n===0))return t}},Dt=e=>{var n;const t=e.__virtual;if(t)return t;if(e.data.startsWith("qv ")){const r=ku(e);return new yi(e,r,((n=e.parentElement)==null?void 0:n.namespaceURI)===Rt)}return null},cn=e=>e==null?null:ge(e)?e.open:e,_u=async e=>{const t=Or(null,null),n=Si(t);let r;for(R(e,n,!1);(r=n.$promises$).length>0;){n.$promises$=[];const c=await Promise.allSettled(r);for(const u of c)u.status==="rejected"&&console.error(u.reason)}const s=Array.from(n.$objSet$.keys());let o=0;const i=new Map;for(const c of s)i.set(c,Te(o)),o++;if(n.$noSerialize$.length>0){const c=i.get(void 0);for(const u of n.$noSerialize$)i.set(u,c)}const a=c=>{let u="";if(W(c)){const m=ki(c);if(!m)throw F(27,c);c=m.value,u+=m.resolved?"~":"_"}if(Ee(c)){const m=Ge(c);m&&(u+="!",c=m)}const p=i.get(c);if(p===void 0)throw F(27,c);return p+u},l=Ei(s,a,null,n,t);return JSON.stringify({_entry:a(e),_objs:l})},Eu=async e=>{const t=It(e),n=t.documentElement,r=wo(e)?n:e;if(he(r,"q:container")==="paused")throw F(21);const s=r===t.documentElement?t.body:r,o=ct(r),i=Au(r,Ru);ie(r,"q:container","paused");for(const p of i){const m=p.$element$,h=p.li;if(p.$scopeIds$){const $=To(p.$scopeIds$);$&&m.setAttribute("q:sstyle",$)}if(p.$id$&&m.setAttribute("q:id",p.$id$),Re(m)&&h.length>0){const $=yr(h);for(const g of $)m.setAttribute(g[0],Yr(g[1],o,p))}}const a=await wi(i,o,p=>Pe(p)&&pr(p)?Mu(p,o):null),l=t.createElement("script");ie(l,"type","qwik/json"),l.textContent=Tu(JSON.stringify(a.state,void 0,void 0)),s.appendChild(l);const c=Array.from(o.$events$,p=>JSON.stringify(p)),u=t.createElement("script");return u.textContent=`(window.qwikevents||=[]).push(${c.join(", ")})`,s.appendChild(u),a},wi=async(e,t,n,r)=>{var y;const s=Si(t);r==null||r.forEach((x,k)=>{s.$seen$.add(k)});let o=!1;for(const x of e)if(x.$tasks$)for(const k of x.$tasks$)ni(k)&&s.$resources$.push(k.$state$),si(k);for(const x of e){const k=x.$element$,A=x.li;for(const I of A)if(Re(k)){const w=I[1],_=w.$captureRef$;if(_)for(const S of _)R(S,s,!0);s.$qrls$.push(w),o=!0}}if(!o)return{state:{refs:{},ctx:{},objs:[],subs:[]},objs:[],funcs:[],qrls:[],resources:s.$resources$,mode:"static"};let i;for(;(i=s.$promises$).length>0;)s.$promises$=[],await Promise.all(i);const a=s.$elements$.length>0;if(a){for(const x of s.$deferElements$)Hr(x,s,x.$element$);for(const x of e)Cu(x,s)}for(;(i=s.$promises$).length>0;)s.$promises$=[],await Promise.all(i);const l=new Map,c=Array.from(s.$objSet$.keys()),u=new Map,p=x=>{let k="";if(W(x)){const w=ki(x);if(!w)return null;x=w.value,k+=w.resolved?"~":"_"}if(Ee(x)){const w=Ge(x);if(w)k+="!",x=w;else if(De(x)){const _=(S=>{let E=l.get(S);return E===void 0&&(E=Nu(S),E||console.warn("Missing ID",S),l.set(S,E)),E})(x);return _?"#"+_+k:null}}const A=u.get(x);if(A)return A+k;const I=r==null?void 0:r.get(x);return I?"*"+I:n?n(x):null},m=x=>{const k=p(x);if(k===null){if(Vr(x)){const A=Te(u.size);return u.set(x,A),A}throw F(27,x)}return k},h=new Map;for(const x of c){const k=(y=Du(x,t))==null?void 0:y.$subs$;if(!k)continue;const A=Pi(x)??0,I=[];1&A&&I.push(A);for(const w of k){const _=w[1];w[0]===0&&Pe(_)&&ge(_)&&!s.$elements$.includes(ue(_))||I.push(w)}I.length>0&&h.set(x,I)}c.sort((x,k)=>(h.has(x)?0:1)-(h.has(k)?0:1));let $=0;for(const x of c)u.set(x,Te($)),$++;if(s.$noSerialize$.length>0){const x=u.get(void 0);for(const k of s.$noSerialize$)u.set(k,x)}const g=[];for(const x of c){const k=h.get(x);if(k==null)break;g.push(k.map(A=>typeof A=="number"?`_${A}`:bd(A,p)).filter(_o))}g.length,h.size;const v=Ei(c,m,p,s,t),f={},b={};for(const x of e){const k=x.$element$,A=x.$id$,I=x.$refMap$,w=x.$props$,_=x.$contexts$,S=x.$tasks$,E=x.$componentQrl$,T=x.$seq$,O={},de=ge(k)&&s.$elements$.includes(x);if(I.length>0){const Q=We(I,m," ");Q&&(b[A]=Q)}else if(a){let Q=!1;if(de){const z=p(w);O.h=m(E)+(z?" "+z:""),Q=!0}else{const z=p(w);z&&(O.h=" "+z,Q=!0)}if(S&&S.length>0){const z=We(S,p," ");z&&(O.w=z,Q=!0)}if(de&&T&&T.length>0){const z=We(T,m," ");O.s=z,Q=!0}if(_){const z=[];_.forEach((Lt,dt)=>{const be=p(Lt);be&&z.push(`${dt}=${be}`)});const B=z.join(" ");B&&(O.c=B,Q=!0)}Q&&(f[A]=O)}}return{state:{refs:b,ctx:f,objs:v,subs:g},objs:c,funcs:s.$inlinedFunctions$,resources:s.$resources$,qrls:s.$qrls$,mode:a?"render":"listeners"}},We=(e,t,n)=>{let r="";for(const s of e){const o=t(s);o!==null&&(r!==""&&(r+=n),r+=o)}return r},Au=(e,t)=>{const n=[],r=t(e);r!==void 0&&n.push(r);const s=e.ownerDocument.createTreeWalker(e,1|li,{acceptNode(o){if(Pu(o))return 2;const i=t(o);return i!==void 0&&n.push(i),3}});for(;s.nextNode(););return n},Cu=(e,t)=>{var s;const n=e.$realParentCtx$||e.$parentCtx$,r=e.$props$;if(n&&r&&!_i(r)&&t.$elements$.includes(n)){const o=(s=X(r))==null?void 0:s.$subs$,i=e.$element$;if(o)for(const[a,l]of o)a===0?(l!==i&&at(X(r),t,!1),Pe(l)?qu(l,t):R(l,t,!0)):(R(r,t,!1),at(X(r),t,!1))}},Si=e=>{const t=[];return e.$inlineFns$.forEach((n,r)=>{for(;t.length<=n;)t.push("");t[n]=r}),{$containerState$:e,$seen$:new Set,$objSet$:new Set,$prefetch$:0,$noSerialize$:[],$inlinedFunctions$:t,$resources$:[],$elements$:[],$qrls$:[],$deferElements$:[],$promises$:[]}},Iu=(e,t)=>{const n=ue(e);t.$elements$.includes(n)||(t.$elements$.push(n),n.$flags$&Dr?(t.$prefetch$++,Hr(n,t,!0),t.$prefetch$--):t.$deferElements$.push(n))},qu=(e,t)=>{const n=ue(e);if(n){if(t.$elements$.includes(n))return;t.$elements$.push(n),Hr(n,t,e)}},Hr=(e,t,n)=>{if(e.$props$&&!_i(e.$props$)&&(R(e.$props$,t,n),at(X(e.$props$),t,n)),e.$componentQrl$&&R(e.$componentQrl$,t,n),e.$seq$)for(const r of e.$seq$)R(r,t,n);if(e.$tasks$){const r=t.$containerState$.$subsManager$.$groupToManagers$;for(const s of e.$tasks$)r.has(s)&&R(s,t,n)}if(n===!0&&(Ls(e,t),e.$dynamicSlots$))for(const r of e.$dynamicSlots$)Ls(r,t)},Ls=(e,t)=>{for(;e;){if(e.$contexts$)for(const n of e.$contexts$.values())R(n,t,!0);e=e.$parentCtx$}},Tu=e=>e.replace(/<(\/?script)/gi,"\\x3C$1"),at=(e,t,n)=>{if(t.$seen$.has(e))return;t.$seen$.add(e);const r=e.$subs$;for(const s of r)if(s[0]>0&&R(s[2],t,n),n===!0){const o=s[1];Pe(o)&&ge(o)?s[0]===0&&Iu(o,t):R(o,t,!0)}},Zn=Symbol(),zu=e=>e.then(t=>(e[Zn]={resolved:!0,value:t},t),t=>(e[Zn]={resolved:!1,value:t},t)),ki=e=>e[Zn],R=(e,t,n)=>{if(e!=null){const r=typeof e;switch(r){case"function":case"object":{if(t.$seen$.has(e))return;if(t.$seen$.add(e),Ti(e))return t.$objSet$.add(void 0),void t.$noSerialize$.push(e);const s=e,o=Ge(e);if(o){const i=!(2&Pi(e=o));if(n&&i&&at(X(s),t,n),zi(s))return void t.$objSet$.add(e)}if(pd(e,t,n))return void t.$objSet$.add(e);if(W(e))return void t.$promises$.push(zu(e).then(i=>{R(i,t,n)}));if(r==="object"){if(Pe(e))return;if(M(e))for(let i=0;i<e.length;i++)R(s[i],t,n);else if(Ct(e))for(const i in e)R(s[i],t,n)}break}}}t.$objSet$.add(e)},Pu=e=>Re(e)&&e.hasAttribute("q:container"),Ru=e=>{const t=Br(e);if(De(t)){const n=ue(t);if(n&&n.$id$)return n}},Du=(e,t)=>{if(!Ee(e))return;if(e instanceof yt)return X(e);const n=t.$proxyMap$.get(e);return n?X(n):void 0},Nu=e=>{const t=ue(e);return t?t.$id$:null},Mu=(e,t)=>{const n=e.previousSibling;if(n&&At(n)&&n.data.startsWith("t="))return"#"+n.data.slice(2);const r=e.ownerDocument,s=Te(t.$elementIndex$++),o=r.createComment(`t=${s}`),i=r.createComment(""),a=e.parentElement;return a.insertBefore(o,e),a.insertBefore(i,e.nextSibling),"#"+s},_i=e=>Object.keys(e).length===0;function Ei(e,t,n,r,s){return e.map(o=>{if(o===null)return null;const i=typeof o;switch(i){case"undefined":return zn;case"number":if(!Number.isFinite(o))break;return o;case"string":if(o.charCodeAt(0)<32)break;return o;case"boolean":return o}const a=md(o,t,r,s);if(a!==void 0)return a;if(i==="object"){if(M(o))return o.map(t);if(Ct(o)){const l={};for(const c in o)if(n){const u=n(o[c]);u!==null&&(l[c]=u)}else l[c]=t(o[c]);return l}}throw F(3,o)})}const D=(e,t,n=Se)=>Mt(null,t,e,null,null,n,null),oe=(e,t=Se)=>Mt(null,e,null,null,null,t,null),Gr=(e,t={})=>{var c,u;let n=e.$symbol$,r=e.$chunk$;const s=e.$refSymbol$??n,o=wn();if(o){const p=o.chunkForSymbol(s,r,(c=e.dev)==null?void 0:c.file);p?(r=p[1],e.$refSymbol$||(n=p[0])):console.error("serializeQRL: Cannot resolve symbol",n,"in",r,(u=e.dev)==null?void 0:u.file)}if(r==null)throw F(31,e.$symbol$);if(r.startsWith("./")&&(r=r.slice(2)),_d(e))if(t.$containerState$){const p=e.resolved,m=t.$containerState$,h=p.serialized||p.toString();let $=m.$inlineFns$.get(h);$===void 0&&($=m.$inlineFns$.size,m.$inlineFns$.set(h,$)),n=String($)}else So("Sync QRL without containerState");let i=`${r}#${n}`;const a=e.$capture$,l=e.$captureRef$;return l&&l.length?t.$getObjId$?i+=`[${We(l,t.$getObjId$," ")}]`:t.$addRefMap$&&(i+=`[${We(l,t.$addRefMap$," ")}]`):a&&a.length>0&&(i+=`[${a.join(" ")}]`),i},Yr=(e,t,n)=>{n.$element$;const r={$containerState$:t,$addRefMap$:s=>Ou(n.$refMap$,s)};return We(e,s=>Gr(s,r),`
`)},Tn=(e,t)=>{const n=e.length,r=js(e,0,"#"),s=js(e,r,"["),o=Math.min(r,s),i=e.substring(0,o),a=r==n?r:r+1,l=a==s?"default":e.substring(a,s),c=s===n?Se:e.substring(s+1,n-1).split(" "),u=Mt(i,l,null,null,c,null,null);return t&&u.$setContainer$(t),u},js=(e,t,n)=>{const r=e.length,s=e.indexOf(n,t==r?0:t);return s==-1?r:s},Ou=(e,t)=>{const n=e.indexOf(t);return n===-1?(e.push(t),String(e.length-1)):String(n)},Ai=(e,t)=>(e.$capture$,e.$captureRef$=e.$capture$.map(n=>{const r=parseInt(n,10),s=t.$refMap$[r];return t.$refMap$.length>r,s})),Lu=e=>({__brand:"resource",value:void 0,loading:!le(),_resolved:void 0,_error:void 0,_state:"pending",_timeout:(e==null?void 0:e.timeout)??-1,_cache:0}),ju=e=>Ee(e)&&e.__brand==="resource",Uu=(e,t)=>{const n=e._state;return n==="resolved"?`0 ${t(e._resolved)}`:n==="pending"?"1":`2 ${t(e._error)}`},Fu=e=>{const[t,n]=e.split(" "),r=Lu(void 0);return r.value=Promise.resolve(),t==="0"?(r._state="resolved",r._resolved=n,r.loading=!1):t==="1"?(r._state="pending",r.value=new Promise(()=>{}),r.loading=!0):t==="2"&&(r._state="rejected",r._error=n,r.loading=!1),r},kt=e=>N(Ie,{[Eo]:""},0,e.name??""),zn="";function j(e){return{$prefixCode$:e.$prefix$.charCodeAt(0),$prefixChar$:e.$prefix$,$test$:e.$test$,$serialize$:e.$serialize$,$prepare$:e.$prepare$,$fill$:e.$fill$,$collect$:e.$collect$,$subs$:e.$subs$}}const Wu=j({$prefix$:"",$test$:e=>Vr(e),$collect$:(e,t,n)=>{if(e.$captureRef$)for(const r of e.$captureRef$)R(r,t,n);t.$prefetch$===0&&t.$qrls$.push(e)},$serialize$:(e,t)=>Gr(e,{$getObjId$:t}),$prepare$:(e,t)=>Tn(e,t.$containerEl$),$fill$:(e,t)=>{e.$capture$&&e.$capture$.length>0&&(e.$captureRef$=e.$capture$.map(t),e.$capture$=null)}}),Qu=j({$prefix$:"",$test$:e=>Pr(e),$collect$:(e,t,n)=>{R(e.$qrl$,t,n),e.$state$&&(R(e.$state$,t,n),n===!0&&e.$state$ instanceof yt&&at(e.$state$[pe],t,!0))},$serialize$:(e,t)=>Ac(e,t),$prepare$:e=>Cc(e),$fill$:(e,t)=>{e.$el$=t(e.$el$),e.$qrl$=t(e.$qrl$),e.$state$&&(e.$state$=t(e.$state$))}}),Bu=j({$prefix$:"",$test$:e=>ju(e),$collect$:(e,t,n)=>{R(e.value,t,n),R(e._resolved,t,n)},$serialize$:(e,t)=>Uu(e,t),$prepare$:e=>Fu(e),$fill$:(e,t)=>{if(e._state==="resolved")e._resolved=t(e._resolved),e.value=Promise.resolve(e._resolved);else if(e._state==="rejected"){const n=Promise.reject(e._error);n.catch(()=>null),e._error=t(e._error),e.value=n}}}),Hu=j({$prefix$:"",$test$:e=>e instanceof URL,$serialize$:e=>e.href,$prepare$:e=>new URL(e)}),Gu=j({$prefix$:"",$test$:e=>e instanceof Date,$serialize$:e=>e.toISOString(),$prepare$:e=>new Date(e)}),Yu=j({$prefix$:"\x07",$test$:e=>e instanceof RegExp,$serialize$:e=>`${e.flags} ${e.source}`,$prepare$:e=>{const t=e.indexOf(" "),n=e.slice(t+1),r=e.slice(0,t);return new RegExp(n,r)}}),Ju=j({$prefix$:"",$test$:e=>e instanceof Error,$serialize$:e=>e.message,$prepare$:e=>{const t=new Error(e);return t.stack=void 0,t}}),Vu=j({$prefix$:"",$test$:e=>!!e&&typeof e=="object"&&wo(e),$prepare$:(e,t,n)=>n}),un=Symbol("serializable-data"),Ku=j({$prefix$:"",$test$:e=>Kr(e),$serialize$:(e,t)=>{const[n]=e[un];return Gr(n,{$getObjId$:t})},$prepare$:(e,t)=>{const n=Tn(e,t.$containerEl$);return re(n)},$fill$:(e,t)=>{var r;const[n]=e[un];(r=n.$capture$)!=null&&r.length&&(n.$captureRef$=n.$capture$.map(t),n.$capture$=null)}}),Xu=j({$prefix$:"",$test$:e=>e instanceof Jn,$collect$:(e,t,n)=>{if(e.$args$)for(const r of e.$args$)R(r,t,n)},$serialize$:(e,t,n)=>{const r=Kl(e);let s=n.$inlinedFunctions$.indexOf(r);return s<0&&(s=n.$inlinedFunctions$.length,n.$inlinedFunctions$.push(r)),We(e.$args$,t," ")+" @"+Te(s)},$prepare$:e=>{const t=e.split(" "),n=t.slice(0,-1),r=t[t.length-1];return new Jn(r,n,r)},$fill$:(e,t)=>{e.$func$,e.$func$=t(e.$func$),e.$args$=e.$args$.map(t)}}),Zu=j({$prefix$:"",$test$:e=>e instanceof yt,$collect$:(e,t,n)=>(R(e.untrackedValue,t,n),n===!0&&!(e[ht]&Uc)&&at(e[pe],t,!0),e),$serialize$:(e,t)=>t(e.untrackedValue),$prepare$:(e,t)=>{var n;return new yt(e,(n=t==null?void 0:t.$subsManager$)==null?void 0:n.$createManager$(),0)},$subs$:(e,t)=>{e[pe].$addSubs$(t)},$fill$:(e,t)=>{e.untrackedValue=t(e.untrackedValue)}}),ed=j({$prefix$:"",$test$:e=>e instanceof Vn,$collect$(e,t,n){if(R(e.ref,t,n),zi(e.ref)){const r=X(e.ref);hd(t.$containerState$.$subsManager$,r,n)&&R(e.ref[e.prop],t,n)}return e},$serialize$:(e,t)=>`${t(e.ref)} ${e.prop}`,$prepare$:e=>{const[t,n]=e.split(" ");return new Vn(t,n)},$fill$:(e,t)=>{e.ref=t(e.ref)}}),td=j({$prefix$:"",$test$:e=>typeof e=="number",$serialize$:e=>String(e),$prepare$:e=>Number(e)}),nd=j({$prefix$:"",$test$:e=>e instanceof URLSearchParams,$serialize$:e=>e.toString(),$prepare$:e=>new URLSearchParams(e)}),rd=j({$prefix$:"",$test$:e=>typeof FormData<"u"&&e instanceof globalThis.FormData,$serialize$:e=>{const t=[];return e.forEach((n,r)=>{t.push(typeof n=="string"?[r,n]:[r,n.name])}),JSON.stringify(t)},$prepare$:e=>{const t=JSON.parse(e),n=new FormData;for(const[r,s]of t)n.append(r,s);return n}}),sd=j({$prefix$:"",$test$:e=>He(e),$collect$:(e,t,n)=>{R(e.children,t,n),R(e.props,t,n),R(e.immutableProps,t,n),R(e.key,t,n);let r=e.type;r===kt?r=":slot":r===fe&&(r=":fragment"),R(r,t,n)},$serialize$:(e,t)=>{let n=e.type;return n===kt?n=":slot":n===fe&&(n=":fragment"),`${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.key)} ${t(e.children)} ${e.flags}`},$prepare$:e=>{const[t,n,r,s,o,i]=e.split(" ");return new lt(t,n,r,o,parseInt(i,10),s)},$fill$:(e,t)=>{e.type=$d(t(e.type)),e.props=t(e.props),e.immutableProps=t(e.immutableProps),e.key=t(e.key),e.children=t(e.children)}}),od=j({$prefix$:"",$test$:e=>typeof e=="bigint",$serialize$:e=>e.toString(),$prepare$:e=>BigInt(e)}),id=j({$prefix$:"",$test$:e=>e instanceof Uint8Array,$serialize$:e=>{let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replace(/=+$/,"")},$prepare$:e=>{const t=atob(e),n=new Uint8Array(t.length);let r=0;for(const s of t)n[r++]=s.charCodeAt(0);return n},$fill$:void 0}),rt=Symbol(),ad=j({$prefix$:"",$test$:e=>e instanceof Set,$collect$:(e,t,n)=>{e.forEach(r=>R(r,t,n))},$serialize$:(e,t)=>Array.from(e).map(t).join(" "),$prepare$:e=>{const t=new Set;return t[rt]=e,t},$fill$:(e,t)=>{const n=e[rt];e[rt]=void 0;const r=n.length===0?[]:n.split(" ");for(const s of r)e.add(t(s))}}),ld=j({$prefix$:"",$test$:e=>e instanceof Map,$collect$:(e,t,n)=>{e.forEach((r,s)=>{R(r,t,n),R(s,t,n)})},$serialize$:(e,t)=>{const n=[];return e.forEach((r,s)=>{n.push(t(s)+" "+t(r))}),n.join(" ")},$prepare$:e=>{const t=new Map;return t[rt]=e,t},$fill$:(e,t)=>{const n=e[rt];e[rt]=void 0;const r=n.length===0?[]:n.split(" ");r.length%2;for(let s=0;s<r.length;s+=2)e.set(t(r[s]),t(r[s+1]))}}),cd=j({$prefix$:"\x1B",$test$:e=>!!Ci(e)||e===zn,$serialize$:e=>e,$prepare$:e=>e}),Pn=[Wu,Qu,Bu,Hu,Gu,Yu,Ju,Vu,Ku,Xu,Zu,ed,td,nd,rd,sd,od,ad,ld,cd,id],Us=(()=>{const e=[];return Pn.forEach(t=>{const n=t.$prefixCode$;for(;e.length<n;)e.push(void 0);e.push(t)}),e})();function Ci(e){if(typeof e=="string"){const t=e.charCodeAt(0);if(t<Us.length)return Us[t]}}const ud=Pn.filter(e=>e.$collect$),dd=e=>{for(const t of Pn)if(t.$test$(e))return!0;return!1},pd=(e,t,n)=>{for(const r of ud)if(r.$test$(e))return r.$collect$(e,t,n),!0;return!1},md=(e,t,n,r)=>{for(const s of Pn)if(s.$test$(e)){let o=s.$prefixChar$;return s.$serialize$&&(o+=s.$serialize$(e,t,n,r)),o}if(typeof e=="string")return e},Ii=(e,t)=>{const n=new Map,r=new Map;return{prepare(s){const o=Ci(s);if(o){const i=o.$prepare$(s.slice(1),e,t);return o.$fill$&&n.set(i,o),o.$subs$&&r.set(i,o),i}return s},subs(s,o){const i=r.get(s);return!!i&&(i.$subs$(s,o,e),!0)},fill(s,o){const i=n.get(s);return!!i&&(i.$fill$(s,o,e),!0)}}},fd={"!":(e,t)=>t.$proxyMap$.get(e)??xr(e,t),"~":e=>Promise.resolve(e),_:e=>Promise.reject(e)},hd=(e,t,n)=>{if(typeof n=="boolean")return n;const r=e.$groupToManagers$.get(n);return!!(r&&r.length>0)&&(r.length!==1||r[0]!==t)},$d=e=>e===":slot"?kt:e===":fragment"?fe:e,gd=(e,t)=>er(e,new Set,"_",t),er=(e,t,n,r)=>{const s=Nt(e);if(s==null)return e;if(vd(s)){if(t.has(s)||(t.add(s),dd(s)))return e;const o=typeof s;switch(o){case"object":if(W(s)||Pe(s))return e;if(M(s)){let a=0;return s.forEach((l,c)=>{if(c!==a)throw F(3,s);er(l,t,n+"["+c+"]"),a=c+1}),e}if(Ct(s)){for(const[a,l]of Object.entries(s))er(l,t,n+"."+a);return e}break;case"boolean":case"string":case"number":return e}let i="";if(i=r||"Value cannot be serialized",n!=="_"&&(i+=` in ${n},`),o==="object")i+=` because it's an instance of "${e==null?void 0:e.constructor.name}". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.dev/docs/advanced/dollar/`;else if(o==="function"){const a=e.name;i+=` because it's a function named "${a}". You might need to convert it to a QRL using $(fn):

const ${a} = $(${String(e)});

Please check out https://qwik.dev/docs/advanced/qrl/ for more information.`}console.error("Trying to serialize",e),So(i)}return e},Jr=new WeakSet,qi=new WeakSet,vd=e=>!Ee(e)&&!Z(e)||!Jr.has(e),Ti=e=>Jr.has(e),zi=e=>qi.has(e),Rn=e=>((typeof e=="object"&&e!==null||typeof e=="function")&&Jr.add(e),e),xd=e=>(qi.add(e),e),Nt=e=>Ee(e)?Ge(e)??e:e,Ge=e=>e[Qn],X=e=>e[pe],Pi=e=>e[Xe],bd=(e,t)=>{const n=e[0],r=typeof e[1]=="string"?e[1]:t(e[1]);if(!r)return;let s=n+" "+r,o;if(n===0)o=e[2];else{const i=t(e[2]);if(!i)return;n<=2?(o=e[5],s+=` ${i} ${Fs(t(e[3]))} ${e[4]}`):n<=4&&(o=e[4],s+=` ${i} ${typeof e[3]=="string"?e[3]:Fs(t(e[3]))}`)}return o&&(s+=` ${encodeURI(o)}`),s},yd=(e,t)=>{const n=e.split(" "),r=parseInt(n[0],10);n.length>=2;const s=t(n[1]);if(!s||Pr(s)&&!s.$el$)return;const o=[r,s];return r===0?(n.length<=3,o.push(On(n[2]))):r<=2?(n.length===5||n.length,o.push(t(n[2]),t(n[3]),n[4],On(n[5]))):r<=4&&(n.length===4||n.length,o.push(t(n[2]),t(n[3]),On(n[4]))),o},On=e=>{if(e!==void 0)return decodeURI(e)},wd=e=>{const t=new Map;return{$groupToManagers$:t,$createManager$:r=>new Sd(t,e,r),$clearSub$:r=>{const s=t.get(r);if(s){for(const o of s)o.$unsubGroup$(r);t.delete(r),s.length=0}},$clearSignal$:r=>{const s=t.get(r[1]);if(s)for(const o of s)o.$unsubEntry$(r)}}};class Sd{constructor(t,n,r){C(this,"$groupToManagers$");C(this,"$containerState$");C(this,"$subs$");this.$groupToManagers$=t,this.$containerState$=n,this.$subs$=[],r&&this.$addSubs$(r)}$addSubs$(t){this.$subs$.push(...t);for(const n of this.$subs$)this.$addToGroup$(n[1],this)}$addToGroup$(t,n){let r=this.$groupToManagers$.get(t);r||this.$groupToManagers$.set(t,r=[]),r.includes(n)||r.push(n)}$unsubGroup$(t){const n=this.$subs$;for(let r=0;r<n.length;r++)n[r][1]===t&&(n.splice(r,1),r--)}$unsubEntry$(t){const[n,r,s,o]=t,i=this.$subs$;if(n===1||n===2){const a=t[4];for(let l=0;l<i.length;l++){const c=i[l];c[0]===n&&c[1]===r&&c[2]===s&&c[3]===o&&c[4]===a&&(i.splice(l,1),l--)}}else if(n===3||n===4)for(let a=0;a<i.length;a++){const l=i[a];l[0]===n&&l[1]===r&&l[2]===s&&l[3]===o&&(i.splice(a,1),a--)}}$addSub$(t,n){const r=this.$subs$,s=t[1];t[0]===0&&r.some(([o,i,a])=>o===0&&i===s&&a===n)||(r.push(Ri=[...t,n]),this.$addToGroup$(s,this))}$notifySubs$(t){const n=this.$subs$;for(const r of n){const s=r[r.length-1];t&&s&&s!==t||uc(r,this.$containerState$)}}}let Ri;function kd(){return Ri}const Fs=e=>{if(e==null)throw Qe("must be non null",e);return e},Vr=e=>typeof e=="function"&&typeof e.getSymbol=="function",_d=e=>Vr(e)&&e.$symbol$=="<sync>",Mt=(e,t,n,r,s,o,i)=>{let a;const l=async function(...f){return await h.call(this,ae())(...f)},c=f=>(a||(a=f),a),u=f=>typeof f!="function"||!(s!=null&&s.length)&&!(o!=null&&o.length)?f:function(...b){let y=ae();if(y){const x=y.$qrl$;y.$qrl$=l;const k=y.$event$;y.$event$===void 0&&(y.$event$=this);try{return f.apply(this,b)}finally{y.$qrl$=x,y.$event$=k}}return y=ne(),y.$qrl$=l,y.$event$=this,te.call(this,y,f,...b)},p=async f=>{if(n!==null)return n;if(f&&c(f),e===""){const x=a.getAttribute(Ao),k=Co(a.ownerDocument,x);return l.resolved=n=k[Number(t)]}const b=Cd(),y=ae();{const x=wn().importSymbol(a,e,t);n=P(x,k=>l.resolved=n=u(k))}return typeof n=="object"&&W(n)&&n.then(()=>Ed(t,y==null?void 0:y.$element$,b),x=>{console.error(`qrl ${t} failed to load`,x),n=null}),n},m=f=>n!==null?n:p(f);function h(f,b){return(...y)=>P(m(),x=>{if(!Z(x))throw F(10);if(b&&b()===!1)return;const k=$(f);return te.call(this,k,x,...y)})}const $=f=>f==null?ne():M(f)?oi(f):f,g=i??t,v=Di(g);return Object.assign(l,{getSymbol:()=>g,getHash:()=>v,getCaptured:()=>o,resolve:p,$resolveLazy$:m,$setContainer$:c,$chunk$:e,$symbol$:t,$refSymbol$:i,$hash$:v,getFn:h,$capture$:s,$captureRef$:o,dev:null,resolved:void 0}),n&&(n=P(n,f=>l.resolved=n=u(f))),l},Di=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e};const Ws=new Set,Ed=(e,t,n)=>{Ws.has(e)||(Ws.add(e),Ad("qsymbol",{symbol:e,element:t,reqTime:n}))},Ad=(e,t)=>{le()||typeof document!="object"||document.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:t}))},Cd=()=>le()?0:typeof performance=="object"?performance.now():0,Id=e=>e,qd=function(e,t){return e.serialized=t,Mt("","<sync>",e,null,null,null,null)},re=e=>{function t(n,r,s){const o=e.$hash$.slice(0,4)+":"+(r||"");return N(Ie,{[hl]:e,[ce]:n[ce],[L]:n[L],children:n.children,props:n},s,o)}return t[un]=[e],t},Kr=e=>typeof e=="function"&&e[un]!==void 0,Wt=(e,t)=>{const{val:n,set:r,iCtx:s}=Be();if(n!=null)return n;const o=Z(e)?te(void 0,e):e;if((t==null?void 0:t.reactive)===!1)return r(o),o;{const i=xr(o,s.$renderCtx$.$static$.$containerState$,(t==null?void 0:t.deep)??!0?1:0);return r(i),i}};function Xr(e,t){var r;const n=ae();return((r=n==null?void 0:n.$renderCtx$)==null?void 0:r.$static$.$containerState$.$serverData$[e])??t}const Qs=new Map,Td=(e,t)=>{let n=Qs.get(t);return n||Qs.set(t,n=zd(e,t)),n},zd=(e,t)=>{const n=e.length,r=[],s=[];let o=0,i=o,a=st,l=0;for(;o<n;){const h=o;let $=e.charCodeAt(o++);$===Ud&&(o++,$=Ui);const g=Hd[a];for(let v=0;v<g.length;v++){const f=g[v],[b,y,x]=f;if((b===l||b===q||b===dn&&Yt(l)||b===tr&&Hs(l))&&(y===$||y===q||y===dn&&Yt($)||y===we&&!Yt($)&&$!==es||y===tr&&Hs($))&&(f.length==3||p(f))){if(f.length>3&&($=e.charCodeAt(o-1)),x===H||x==Le){x===Le&&(a!==Ni||m()?Bs($)||u(o-(y==we?1:y==nr?2:0)):(Bs($)?c(o-2):u(o-2),i++)),y===we&&(o--,$=l);do a=s.pop()||st,a===je&&(c(o-1),i++);while(Pd(a))}else s.push(a),a===je&&x===st?(c(o-8),i=o):x===Mi&&u(h),a=x;break}}l=$}return c(o),r.join("");function c(h){r.push(e.substring(i,h)),i=h}function u(h){a===je||m()||(c(h),r.push(".","⭐️",t))}function p(h){let $=0;if(e.charCodeAt(o)===rr){for(let g=1;g<10;g++)if(e.charCodeAt(o+g)===rr){$=g+1;break}}e:for(let g=3;g<h.length;g++){const v=h[g];for(let f=0;f<v.length;f++)if((e.charCodeAt(o+f+$)|Wd)!==v.charCodeAt(f))continue e;return o+=v.length+$,!0}return!1}function m(){return s.indexOf(je)!==-1||s.indexOf(Zr)!==-1}},Yt=e=>e>=Od&&e<=Ld||e>=Ui&&e<=jd||e>=Qd&&e<=Bd||e>=128||e===Fd||e===rr,Bs=e=>e===Ve||e===es||e===Fi||e===ji||Yt(e),Pd=e=>e===Oi||e===Zr||e===Li||e===je,Hs=e=>e===Md||e===Rd||e===Dd||e===Nd,st=0,Ni=2,je=5,Mi=6,Zr=10,Oi=11,Li=12,H=17,Le=18,q=0,dn=1,we=2,tr=3,Rd=9,Dd=10,Nd=13,Md=32,ji=35,nr=41,rr=45,es=46,Od=48,Ld=57,Ve=58,Ui=65,jd=90,Fi=91,Ud=92,Fd=95,Wd=32,Qd=97,Bd=122,Oe=[[q,39,14],[q,34,15],[q,47,16,"*"]],Hd=[[[q,42,Ni],[q,Fi,7],[q,Ve,Mi,":","before","after","first-letter","first-line"],[q,Ve,je,"global"],[q,Ve,3,"has","host-context","not","where","is","matches","any"],[q,Ve,4],[q,dn,1],[q,es,1],[q,ji,1],[q,64,Zr,"keyframe"],[q,64,Oi,"media","supports","container"],[q,64,Li],[q,123,13],[47,42,16],[q,59,H],[q,125,H],[q,nr,H],...Oe],[[q,we,Le]],[[q,we,Le]],[[q,40,st],[q,we,Le]],[[q,40,8],[q,we,Le]],[[q,40,st],[q,we,H]],[[q,we,H]],[[q,93,Le],[q,39,14],[q,34,15]],[[q,nr,H],...Oe],[[q,125,H],...Oe],[[q,125,H],[tr,dn,1],[q,Ve,je,"global"],[q,123,13],...Oe],[[q,123,st],[q,59,H],...Oe],[[q,59,H],[q,123,9],...Oe],[[q,125,H],[q,123,13],[q,40,8],...Oe],[[q,39,H]],[[q,34,H]],[[42,47,H]]],Gd=e=>{Wi(e,t=>t,!1)},ut=e=>({scopeId:"⭐️"+Wi(e,Td,!0)}),Wi=(e,t,n)=>{const{val:r,set:s,iCtx:o,i,elCtx:a}=Be();if(r)return r;const l=El(e,i),c=o.$renderCtx$.$static$.$containerState$;if(s(l),a.$appendStyles$||(a.$appendStyles$=[]),a.$scopeIds$||(a.$scopeIds$=[]),n&&a.$scopeIds$.push(Al(l)),c.$styleIds$.has(l))return l;c.$styleIds$.add(l);const u=e.$resolveLazy$(c.$containerEl$),p=m=>{a.$appendStyles$,a.$appendStyles$.push({styleId:l,content:t(m,l)})};return W(u)?o.$waitOn$.push(u.then(p)):p(u),l},Gs={manifestHash:"yrud3r",core:"q-Cn9eRv09.js",preloader:"q-XYi0b4s7.js",qwikLoader:"q-CuPr1DR2.js",bundleGraphAsset:"assets/l_cNVWxv-bundle-graph.json",injections:[{tag:"style",location:"head",attributes:{"data-src":"/assets/DkvQf-i5-style.css",dangerouslySetInnerHTML:`:root{--neu-base: #e0e5ec;--neu-light-shadow: #ffffff;--neu-dark-shadow: #a3b1c6;--neu-accent: #8EE53F;--neu-accent-dark: #7c3f00;--neu-text-primary: #2d3748;--neu-text-secondary: #718096;--neu-text-muted: #a0aec0;--neu-success: #48bb78;--neu-warning: #ed8936;--neu-error: #f56565;--neu-spacing-xs: .25rem;--neu-spacing-sm: .5rem;--neu-spacing-md: 1rem;--neu-spacing-lg: 1.5rem;--neu-spacing-xl: 2rem;--neu-spacing-2xl: 3rem;--neu-spacing-3xl: 4rem;--neu-radius-sm: 8px;--neu-radius-md: 12px;--neu-radius-lg: 20px;--neu-radius-xl: 30px;--neu-radius-full: 9999px;--neu-shadow-sm: 3px 3px 6px var(--neu-dark-shadow), -3px -3px 6px var(--neu-light-shadow);--neu-shadow-md: 6px 6px 12px var(--neu-dark-shadow), -6px -6px 12px var(--neu-light-shadow);--neu-shadow-lg: 9px 9px 16px var(--neu-dark-shadow), -9px -9px 16px var(--neu-light-shadow);--neu-shadow-xl: 12px 12px 24px var(--neu-dark-shadow), -12px -12px 24px var(--neu-light-shadow);--neu-shadow-inset-sm: inset 3px 3px 6px var(--neu-dark-shadow), inset -3px -3px 6px var(--neu-light-shadow);--neu-shadow-inset-md: inset 5px 5px 10px var(--neu-dark-shadow), inset -5px -5px 10px var(--neu-light-shadow);--neu-shadow-inset-lg: inset 7px 7px 14px var(--neu-dark-shadow), inset -7px -7px 14px var(--neu-light-shadow);--neu-transition-fast: .15s ease;--neu-transition-base: .3s ease;--neu-transition-slow: .5s ease;--neu-z-base: 1;--neu-z-dropdown: 10;--neu-z-sticky: 50;--neu-z-fixed: 100;--neu-z-modal: 1000;--neu-z-tooltip: 1100}html{scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:var(--neu-base);color:var(--neu-text-primary);line-height:1.6;overflow-x:hidden}.neu-flat{background:var(--neu-base);box-shadow:var(--neu-shadow-inset-md)}.neu-raised{background:var(--neu-base);box-shadow:var(--neu-shadow-lg);transition:all var(--neu-transition-base)}.neu-raised:hover{box-shadow:var(--neu-shadow-xl);transform:translateY(-2px)}.neu-raised:active{box-shadow:var(--neu-shadow-inset-md);transform:translateY(0)}.neu-card{background:var(--neu-base);border-radius:var(--neu-radius-lg);padding:var(--neu-spacing-xl);box-shadow:var(--neu-shadow-lg);transition:all var(--neu-transition-base)}.neu-card:hover{box-shadow:var(--neu-shadow-xl);transform:translateY(-4px)}.neu-button{display:inline-flex;align-items:center;justify-content:center;padding:var(--neu-spacing-md) var(--neu-spacing-xl);border:none;border-radius:var(--neu-radius-md);background:var(--neu-base);box-shadow:var(--neu-shadow-md);color:var(--neu-text-primary);font-weight:600;font-size:1rem;cursor:pointer;transition:all var(--neu-transition-base);position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.neu-button:hover{box-shadow:var(--neu-shadow-lg);transform:translateY(-2px)}.neu-button:active{box-shadow:var(--neu-shadow-inset-sm);transform:translateY(0)}.neu-button.primary{background:linear-gradient(145deg,var(--neu-accent),var(--neu-accent-dark));color:#fff}.neu-button.primary:hover{background:linear-gradient(145deg,var(--neu-accent-dark),var(--neu-accent))}.neu-input{width:100%;padding:var(--neu-spacing-md) var(--neu-spacing-lg);border:none;border-radius:var(--neu-radius-md);background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);color:var(--neu-text-primary);font-size:1rem;transition:all var(--neu-transition-base);outline:none}.neu-input:focus{box-shadow:var(--neu-shadow-inset-md)}.neu-input::placeholder{color:var(--neu-text-muted)}.neu-badge{display:inline-block;padding:var(--neu-spacing-xs) var(--neu-spacing-md);border-radius:var(--neu-radius-full);background:var(--neu-base);box-shadow:var(--neu-shadow-sm);color:var(--neu-text-secondary);font-size:.875rem;font-weight:500;transition:all var(--neu-transition-base)}.neu-badge:hover{box-shadow:var(--neu-shadow-md);transform:scale(1.05)}.neu-progress{width:100%;height:20px;border-radius:var(--neu-radius-full);background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);overflow:hidden;position:relative}.neu-progress-bar{height:100%;border-radius:var(--neu-radius-full);background:linear-gradient(90deg,var(--neu-accent),var(--neu-accent-dark));box-shadow:2px 2px 4px #6c63ff4d;transition:width var(--neu-transition-slow)}.neu-toggle{position:relative;width:60px;height:30px;border-radius:var(--neu-radius-full);background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);cursor:pointer;transition:all var(--neu-transition-base)}.neu-toggle-slider{position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:var(--neu-base);box-shadow:var(--neu-shadow-sm);transition:all var(--neu-transition-base)}.neu-toggle.active .neu-toggle-slider{transform:translate(30px);background:var(--neu-accent)}.neu-divider{width:100%;height:2px;background:var(--neu-base);box-shadow:var(--neu-shadow-inset-sm);margin:var(--neu-spacing-xl) 0;border-radius:var(--neu-radius-full)}.neu-tooltip{position:absolute;padding:var(--neu-spacing-sm) var(--neu-spacing-md);background:var(--neu-base);box-shadow:var(--neu-shadow-md);border-radius:var(--neu-radius-sm);color:var(--neu-text-primary);font-size:.875rem;white-space:nowrap;z-index:var(--neu-z-tooltip);pointer-events:none;opacity:0;transition:opacity var(--neu-transition-base)}.neu-tooltip.visible{opacity:1}.neu-text-primary{color:var(--neu-text-primary)}.neu-text-secondary{color:var(--neu-text-secondary)}.neu-text-muted{color:var(--neu-text-muted)}.neu-text-accent{color:var(--neu-accent)}.neu-bg-base{background:var(--neu-base)}.neu-bg-accent{background:var(--neu-accent)}.neu-rounded-sm{border-radius:var(--neu-radius-sm)}.neu-rounded-md{border-radius:var(--neu-radius-md)}.neu-rounded-lg{border-radius:var(--neu-radius-lg)}.neu-rounded-xl{border-radius:var(--neu-radius-xl)}.neu-rounded-full{border-radius:var(--neu-radius-full)}.neu-p-xs{padding:var(--neu-spacing-xs)}.neu-p-sm{padding:var(--neu-spacing-sm)}.neu-p-md{padding:var(--neu-spacing-md)}.neu-p-lg{padding:var(--neu-spacing-lg)}.neu-p-xl{padding:var(--neu-spacing-xl)}.neu-m-xs{margin:var(--neu-spacing-xs)}.neu-m-sm{margin:var(--neu-spacing-sm)}.neu-m-md{margin:var(--neu-spacing-md)}.neu-m-lg{margin:var(--neu-spacing-lg)}.neu-m-xl{margin:var(--neu-spacing-xl)}@media (max-width: 768px){:root{--neu-shadow-sm: 2px 2px 4px var(--neu-dark-shadow), -2px -2px 4px var(--neu-light-shadow);--neu-shadow-md: 4px 4px 8px var(--neu-dark-shadow), -4px -4px 8px var(--neu-light-shadow);--neu-shadow-lg: 6px 6px 12px var(--neu-dark-shadow), -6px -6px 12px var(--neu-light-shadow);--neu-shadow-xl: 8px 8px 16px var(--neu-dark-shadow), -8px -8px 16px var(--neu-light-shadow)}.neu-card{padding:var(--neu-spacing-lg)}}@media (prefers-reduced-motion: reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}*:focus-visible{outline:2px solid var(--neu-accent);outline-offset:2px}::selection{background:var(--neu-accent);color:#fff}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInLeft{0%{opacity:0;transform:translate(-30px)}to{opacity:1;transform:translate(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translate(30px)}to{opacity:1;transform:translate(0)}}@keyframes scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes slideInUp{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes slideInDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes shimmer{0%{background-position:-1000px 0}to{background-position:1000px 0}}@keyframes typewriter{0%{width:0}to{width:100%}}@keyframes blink{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes wave{0%,to{transform:rotate(0)}10%{transform:rotate(14deg)}20%{transform:rotate(-8deg)}30%{transform:rotate(14deg)}40%{transform:rotate(-4deg)}50%{transform:rotate(10deg)}60%{transform:rotate(0)}}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-10px)}20%,40%,60%,80%{transform:translate(10px)}}@keyframes glow{0%,to{box-shadow:0 0 5px #6c63ff80}50%{box-shadow:0 0 20px #6c63ffcc}}@keyframes morphing{0%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30%}to{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}}@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}.animate-fadeIn{animation:fadeIn .6s ease-out}.animate-fadeInUp{animation:fadeInUp .6s ease-out}.animate-fadeInDown{animation:fadeInDown .6s ease-out}.animate-fadeInLeft{animation:fadeInLeft .6s ease-out}.animate-fadeInRight{animation:fadeInRight .6s ease-out}.animate-scaleIn{animation:scaleIn .5s ease-out}.animate-slideInUp{animation:slideInUp .5s ease-out}.animate-slideInDown{animation:slideInDown .5s ease-out}.animate-pulse{animation:pulse 2s infinite}.animate-float{animation:float 3s ease-in-out infinite}.animate-rotate{animation:rotate 2s linear infinite}.animate-shimmer{animation:shimmer 2s linear infinite;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);background-size:1000px 100%}.animate-typewriter{overflow:hidden;white-space:nowrap;animation:typewriter 3s steps(40,end)}.animate-blink{animation:blink 1s infinite}.animate-wave{animation:wave 2.5s infinite;transform-origin:70% 70%;display:inline-block}.animate-bounce{animation:bounce 2s infinite}.animate-shake{animation:shake .5s}.animate-glow{animation:glow 2s ease-in-out infinite}.animate-morphing{animation:morphing 8s ease-in-out infinite}.animate-gradientShift{animation:gradientShift 3s ease infinite;background-size:200% 200%}.stagger-1{animation-delay:.1s}.stagger-2{animation-delay:.2s}.stagger-3{animation-delay:.3s}.stagger-4{animation-delay:.4s}.stagger-5{animation-delay:.5s}.stagger-6{animation-delay:.6s}.stagger-7{animation-delay:.7s}.stagger-8{animation-delay:.8s}.scroll-animate{opacity:0;transform:translateY(30px);transition:all .6s ease-out}.scroll-animate.in-view{opacity:1;transform:translateY(0)}.scroll-animate-left{opacity:0;transform:translate(-50px);transition:all .6s ease-out}.scroll-animate-left.in-view{opacity:1;transform:translate(0)}.scroll-animate-right{opacity:0;transform:translate(50px);transition:all .6s ease-out}.scroll-animate-right.in-view{opacity:1;transform:translate(0)}.scroll-animate-scale{opacity:0;transform:scale(.8);transition:all .6s ease-out}.scroll-animate-scale.in-view{opacity:1;transform:scale(1)}.hover-lift{transition:transform .3s ease}.hover-lift:hover{transform:translateY(-5px)}.hover-grow{transition:transform .3s ease}.hover-grow:hover{transform:scale(1.05)}.hover-shrink{transition:transform .3s ease}.hover-shrink:hover{transform:scale(.95)}.hover-rotate{transition:transform .3s ease}.hover-rotate:hover{transform:rotate(5deg)}.loading-spinner{width:40px;height:40px;border:4px solid var(--neu-base);border-top-color:var(--neu-accent);border-radius:50%;animation:rotate 1s linear infinite}.loading-dots{display:flex;gap:8px}.loading-dots span{width:12px;height:12px;border-radius:50%;background:var(--neu-accent);animation:bounce 1.4s ease-in-out infinite}.loading-dots span:nth-child(1){animation-delay:0s}.loading-dots span:nth-child(2){animation-delay:.2s}.loading-dots span:nth-child(3){animation-delay:.4s}.transition-all{transition:all .3s ease}.transition-transform{transition:transform .3s ease}.transition-opacity{transition:opacity .3s ease}.transition-colors{transition:background-color .3s ease,color .3s ease}.will-change-transform{will-change:transform}.will-change-opacity{will-change:opacity}.gpu-accelerated{transform:translateZ(0);backface-visibility:hidden}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth;font-size:16px}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:var(--neu-base);color:var(--neu-text-primary);line-height:1.6;overflow-x:hidden;min-height:100vh}.container{max-width:1200px;margin:0 auto;padding:0 20px}.section{padding:80px 0;position:relative}@media (max-width: 768px){.section{padding:60px 0}button,a,input,textarea,select{min-height:44px}*{-webkit-tap-highlight-color:rgba(108,99,255,.2);-webkit-touch-callout:none}html{-webkit-overflow-scrolling:touch;scroll-behavior:smooth}input[type=text],input[type=email],input[type=tel],input[type=password],textarea,select{font-size:16px}}@media (max-width: 768px){.animate-fadeInUp{animation:mobileSlideUp .6s ease-out forwards}.animate-fadeInLeft{animation:mobileSlideInLeft .6s ease-out forwards}.animate-fadeInRight{animation:mobileSlideInRight .6s ease-out forwards}.animate-scaleIn{animation:mobileScaleIn .4s ease-out forwards}}@keyframes mobileSlideUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes mobileSlideInLeft{0%{opacity:0;transform:translate(-30px)}to{opacity:1;transform:translate(0)}}@keyframes mobileSlideInRight{0%{opacity:0;transform:translate(30px)}to{opacity:1;transform:translate(0)}}@keyframes mobileScaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@media (max-width: 768px){.stagger-1{animation-delay:.1s}.stagger-2{animation-delay:.2s}.stagger-3{animation-delay:.3s}.stagger-4{animation-delay:.4s}.stagger-5{animation-delay:.5s}.stagger-6{animation-delay:.6s}.stagger-7{animation-delay:.7s}.stagger-8{animation-delay:.8s}}h1,h2,h3,h4,h5,h6{font-weight:700;line-height:1.2;margin-bottom:1rem;color:var(--neu-text-primary)}h1{font-size:3rem}h2{font-size:2.5rem}h3{font-size:2rem}h4{font-size:1.5rem}h5{font-size:1.25rem}h6{font-size:1rem}@media (max-width: 768px){h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.5rem}h4{font-size:1.25rem}}p{margin-bottom:1rem;color:var(--neu-text-secondary)}a{color:var(--neu-accent);text-decoration:none;transition:color .3s ease}a:hover{color:var(--neu-accent-dark)}.grid{display:grid;gap:30px}.grid-cols-1{grid-template-columns:repeat(1,1fr)}.grid-cols-2{grid-template-columns:repeat(2,1fr)}.grid-cols-3{grid-template-columns:repeat(3,1fr)}.grid-cols-4{grid-template-columns:repeat(4,1fr)}@media (max-width: 1024px){.lg\\:grid-cols-3,.lg\\:grid-cols-4{grid-template-columns:repeat(2,1fr)}}@media (max-width: 768px){.md\\:grid-cols-2,.md\\:grid-cols-3,.md\\:grid-cols-4{grid-template-columns:repeat(1,1fr)}}.flex{display:flex}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:1rem}.gap-4{gap:1.5rem}.gap-5{gap:2rem}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}.font-normal{font-weight:400}.hidden{display:none}.block{display:block}.inline-block{display:inline-block}.invisible{visibility:hidden}.visible{visibility:visible}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.overflow-hidden{overflow:hidden}.overflow-auto{overflow:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.w-full{width:100%}.h-full{height:100%}.min-h-screen{min-height:100vh}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.select-none{-webkit-user-select:none;user-select:none}.select-text{-webkit-user-select:text;user-select:text}.select-all{-webkit-user-select:all;user-select:all}
`}}],mapping:{s_0NkL50ppaIg:"q-Pu9d5k_r.js",s_0hCi1q038Qo:"q-Pu9d5k_r.js",s_1xEgQnu0yC4:"q-BFSEIcMa.js",s_42RUnvGm7aU:"q-C6UxDU7U.js",s_7w8zQT0J9wQ:"q-BFSEIcMa.js",s_x0Kaq5Nib7o:"q-BCUl09Gr.js",s_1M8Ii0d2Bp4:"q-CAfqGKbU.js",s_LuZO1QS7gEs:"q-CAfqGKbU.js",s_vKy2S362iTQ:"q-CAfqGKbU.js",s_zAJbdncFBqs:"q-CAfqGKbU.js",s_Ysfvd0zsHZc:"q-DEOsd5K1.js",s_26Zk9LevwR4:"q-AspTOEMU.js",s_35YlVmV10xA:"q-EhoNonPu.js",s_qJmIgBWFER0:"q-De5wQygM.js",s_0vphQYqOdZI:"q-CTYWeV9L.js",s_1V8LiPxWuaU:"q-De5wQygM.js",s_1raneLGffO8:"q-EhoNonPu.js",s_B0lqk5IDDy4:"q-B7GkTtdf.js",s_CIpJWWhXzoM:"q-DfpfGXJD.js",s_JdVX0L8bEOA:"q-BFSEIcMa.js",s_MiPVFWJLcMo:"q-C4yaT2rO.js",s_ScE8eseirUA:"q-D3iNs-ok.js",s_Ubng8hDLd1Y:"q-CAfqGKbU.js",s_VKFlAWJuVm8:"q-9wWr4CXv.js",s_bmV0oH7tsks:"q-Cn9eRv09.js",s_kQDJUnc38Vs:"q-C3OQPpDn.js",s_p1yCGpFL1xE:"q-DEOsd5K1.js",s_pWsmcogutG8:"q-Dg47iWOD.js",s_ropMBSBWqro:"q-Pu9d5k_r.js",s_tntnak2DhJ8:"q-BhfHM65r.js",s_K4gvalEGCME:"q-DEOsd5K1.js",s_3Vkkdid5Eow:"q-C3OQPpDn.js",s_5keZie0WZ7I:"q-DfpfGXJD.js",s_R0z7yMvPekY:"q-De5wQygM.js",s_gZs8EX5SgiU:"q-Pu9d5k_r.js",s_tvPusS0UOeY:"q-CAfqGKbU.js",s_x09mof0NAUM:"q-BFSEIcMa.js",s_9KRx0IOCHt8:"q-BK3N2c0s.js",s_A5SCimyrjAE:"q-Dcd9EKXJ.js",s_N26RLdG0oBg:"q-CJRz6xE6.js",s_WfTOxT4IrdA:"q-BlQB8mK6.js",s_04T8x2lEfJQ:"q-BFSEIcMa.js",s_AlkI4Q6oVwQ:"q-BFSEIcMa.js",s_FdQ8zERN4uM:"q-EhoNonPu.js",s_G0PU4nT0vKs:"q-CAfqGKbU.js",s_LMfn7cFC95k:"q-CAfqGKbU.js",s_LlZXhqmUmt8:"q-Pu9d5k_r.js",s_PmWjL2RrvZM:"q-C4yaT2rO.js",s_US0pTyQnOdc:"q-Cn9eRv09.js",s_aww2BzpANGM:"q-DEOsd5K1.js",s_kH0dZ6cEGg4:"q-BFSEIcMa.js",s_qGVD1Sz413o:"q-DEOsd5K1.js",s_uYqmvnpRTCw:"q-Pu9d5k_r.js",s_xe8duyQ5aaU:"q-Dg47iWOD.js",s_zPJUEsxZLIA:"q-EhoNonPu.js",s_zpHcJzYZ88E:"q-Dg47iWOD.js"}};/**
 * @license
 * @builder.io/qwik/server 1.15.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var Yd=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Jd="<sync>";function Qi(e,t){const n=t==null?void 0:t.mapper,r=e.symbolMapper?e.symbolMapper:(o,i,a)=>{var l;if(n){const c=pn(o),u=n[c];if(!u){if(c===Jd)return[c,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(c))return[o,"_"];if(a)return[o,`${a}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,a)}return u}};return{isServer:!0,async importSymbol(o,i,a){var m;const l=pn(a),c=(m=globalThis.__qwik_reg_symbols)==null?void 0:m.get(l);if(c)return c;let u=String(i);u.endsWith(".js")||(u+=".js");const p=Yd(u);if(!(a in p))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${u}'.`);return p[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(i=>{setTimeout(()=>{i(o())})}),chunkForSymbol(o,i,a){return r(o,n,a)}}}async function Vd(e,t){const n=Qi(e,t);ko(n)}var pn=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},Kd="q:instance",mn={$DEBUG$:!1,$invPreloadProbability$:.65},Xd=Date.now(),Zd=/\.[mc]?js$/,Bi=0,ep=1,tp=2,np=3,sr,or,rp=(e,t)=>({$name$:e,$state$:Zd.test(e)?Bi:np,$deps$:Gi?t==null?void 0:t.map(n=>({...n,$factor$:1})):t,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),sp=e=>{const t=new Map;let n=0;for(;n<e.length;){const r=e[n++],s=[];let o,i=1;for(;o=e[n],typeof o=="number";)o<0?i=-o/10:s.push({$name$:e[o],$importProbability$:i,$factor$:1}),n++;t.set(r,s)}return t},Hi=e=>{let t=ir.get(e);if(!t){let n;if(or){if(n=or.get(e),!n)return;n.length||(n=void 0)}t=rp(e,n),ir.set(e,t)}return t},op=(e,t)=>{t&&("debug"in t&&(mn.$DEBUG$=!!t.debug),typeof t.preloadProbability=="number"&&(mn.$invPreloadProbability$=1-t.preloadProbability)),!(sr!=null||!e)&&(sr="",or=sp(e))},ir=new Map,Gi,fn,Yi=0,Ot=[],ip=(...e)=>{console.log(`Preloader ${Date.now()-Xd}ms ${Yi}/${Ot.length} queued>`,...e)},ap=()=>{ir.clear(),fn=!1,Gi=!0,Yi=0,Ot.length=0},lp=()=>{fn&&(Ot.sort((e,t)=>e.$inverseProbability$-t.$inverseProbability$),fn=!1)},cp=()=>{lp();let e=.4;const t=[];for(const n of Ot){const r=Math.round((1-n.$inverseProbability$)*10);r!==e&&(e=r,t.push(e)),t.push(n.$name$)}return t},Ji=(e,t,n)=>{if(n!=null&&n.has(e))return;const r=e.$inverseProbability$;if(e.$inverseProbability$=t,!(r-e.$inverseProbability$<.01)&&(sr!=null&&e.$state$<tp&&e.$inverseProbability$<mn.$invPreloadProbability$&&(e.$state$===Bi&&(e.$state$=ep,Ot.push(e),mn.$DEBUG$&&ip(`queued ${Math.round((1-e.$inverseProbability$)*100)}%`,e.$name$)),fn=!0),e.$deps$)){n||(n=new Set),n.add(e);const s=1-e.$inverseProbability$;for(const o of e.$deps$){const i=Hi(o.$name$);if(i.$inverseProbability$===0)continue;let a;if(o.$importProbability$>.5&&(s===1||s>=.99&&ar<100))ar++,a=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,c=o.$factor$,u=l/c;a=Math.max(.02,i.$inverseProbability$*u),o.$factor$=u}Ji(i,a,n)}}},Ys=(e,t)=>{const n=Hi(e);n&&n.$inverseProbability$>t&&Ji(n,t)},ar,up=(e,t)=>{if(!(e!=null&&e.length))return;ar=0;let n=t?1-t:.4;if(Array.isArray(e))for(let r=e.length-1;r>=0;r--){const s=e[r];typeof s=="number"?n=1-s/10:Ys(s,n)}else Ys(e,n)};function dp(e){const t=[],n=r=>{if(r)for(const s of r)t.includes(s.url)||(t.push(s.url),s.imports&&n(s.imports))};return n(e),t}var pp=e=>{var n;const t=wn();return(n=e==null?void 0:e.qrls)==null?void 0:n.map(r=>{var a;const s=r.$refSymbol$||r.$symbol$,o=r.$chunk$,i=t.chunkForSymbol(s,o,(a=r.dev)==null?void 0:a.file);return i?i[1]:o}).filter(Boolean)};function mp(e,t,n){const r=t.prefetchStrategy;if(r===null)return[];if(!(n!=null&&n.manifest.bundleGraph))return pp(e);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const o=r.symbolsToPrefetch({manifest:n.manifest});return dp(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of(e==null?void 0:e.qrls)||[]){const i=pn(o.$refSymbol$||o.$symbol$);i&&i.length>=10&&s.add(i)}return[...s]}var fp=(e,t)=>{if(!(t!=null&&t.manifest.bundleGraph))return[...new Set(e)];ap();let n=.99;for(const r of e.slice(0,15))up(r,n),n*=.85;return cp()},lr=(e,t)=>{if(t==null)return null;const n=`${e}${t}`.split("/"),r=[];for(const s of n)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},hp=(e,t,n,r,s)=>{var l;const o=lr(e,(l=t==null?void 0:t.manifest)==null?void 0:l.preloader),i="/"+(t==null?void 0:t.manifest.bundleGraphAsset);if(o&&i&&n!==!1){const c=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;op(t==null?void 0:t.manifest.bundleGraph,c);const u=[];n!=null&&n.debug&&u.push("d:1"),n!=null&&n.maxIdlePreloads&&u.push(`P:${n.maxIdlePreloads}`),n!=null&&n.preloadProbability&&u.push(`Q:${n.preloadProbability}`);const p=u.length?`,{${u.join(",")}}`:"",m=`let b=fetch("${i}");import("${o}").then(({l})=>l(${JSON.stringify(e)},b${p}));`;r.push(G("link",{rel:"modulepreload",href:o}),G("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous"}),G("script",{type:"module",async:!0,dangerouslySetInnerHTML:m,nonce:s}))}const a=lr(e,t==null?void 0:t.manifest.core);a&&r.push(G("link",{rel:"modulepreload",href:a}))},$p=(e,t,n,r,s)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:i}=vp(typeof n=="boolean"?void 0:n);let a=o;const l=[],c=[],u=t==null?void 0:t.manifest.manifestHash;if(a){const $=t==null?void 0:t.manifest.preloader,g=t==null?void 0:t.manifest.core,v=fp(r,t);let f=4;const b=i*10;for(const y of v)if(typeof y=="string"){if(f<b)break;if(y===$||y===g)continue;if(c.push(y),--a===0)break}else f=y}const p=lr(e,u&&(t==null?void 0:t.manifest.preloader));let h=c.length?`${JSON.stringify(c)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(e)}+l;document.head.appendChild(e)});`:"";return p&&(h+=`window.addEventListener('load',f=>{f=_=>import("${p}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),h&&l.push(G("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:h,nonce:s})),l.length>0?G(fe,{children:l}):null},gp=(e,t,n,r,s)=>{var o;if(n.preloader!==!1){const i=mp(t,n,r);if(i.length>0){const a=$p(e,r,n.preloader,i,(o=n.serverData)==null?void 0:o.nonce);a&&s.push(a)}}};function vp(e){return{...xp,...e}}var xp={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},bp='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),i=t=>{const e=[];return o.forEach((n=>e.push(...s(n,t)))),e},a=t=>{g(t),s(t,"[q\\\\:shadowroot]").forEach((t=>{const e=t.shadowRoot;e&&a(e)}))},c=t=>t&&"function"==typeof t.then;let l=!0;const f=(t,e,n=e.type)=>{let o=l;i("[on"+t+"\\\\:"+n+"]").forEach((r=>{o=!0,b(r,t,e,n)})),o||window[t.slice(1)].removeEventListener(n,"-window"===t?d:_)},p=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},u=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const i=e._qc_,a=i&&i.li.filter((t=>t[0]===s));if(a&&a.length>0){for(const t of a){const n=t[1].getFn([e,o],(()=>e.isConnected))(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",i=n.getAttribute("q:manifest-hash")||"dev",a=new URL(r,t.baseURI);for(const f of l.split("\\n")){const l=new URL(f,a),u=l.href,b=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,w;const m=f.startsWith("#"),y={qBase:r,qManifest:i,qVersion:s,href:u,symbol:b,element:e,reqTime:q};if(m){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(b)],_||(d="sync",w=Error("sym:"+b))}else{h("qsymbol",y);const t=l.href.split("#")[0];try{const e=import(t);p(n),_=(await e)[b],_||(d="no-symbol",w=Error(`${b} not in ${t}`))}catch(t){d||(d="async"),w=t}}if(!_){h("qerror",{importError:d,error:w,...y}),console.error(w);break}const g=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){h("qerror",{error:t,...y})}finally{t.__q_context__=g}}}},h=(e,n)=>{t.dispatchEvent(u(e,n))},q=t=>t.replace(/([A-Z])/g,(t=>"-"+t.toLowerCase())),_=async t=>{let e=q(t.type),n=t.target;for(f("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},d=t=>{f("-window",t,q(t.type))},w=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(a),r=1,h("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)((()=>h("qidle"))),n.has("qvisible"))){const t=i("[on\\\\:qvisible]"),e=new IntersectionObserver((t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",u("qvisible",n)))}));t.forEach((t=>e.observe(t)))}},m=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})};let y;const g=(...t)=>{l=!0,clearTimeout(y),y=setTimeout((()=>l=!1),2e4);for(const r of t)"string"==typeof r?n.has(r)||(o.forEach((t=>m(t,r,_,!0))),m(e,r,d,!0),n.add(r)):o.has(r)||(n.forEach((t=>m(r,t,_,!0))),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?g(...r):g("click","input")),e.qwikevents={events:n,roots:o,push:g},m(t,"readystatechange",w),w()}',yp=`const doc = document;
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
}`;function wp(e={}){return e.debug?yp:bp}function Ln(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function Sp(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var kp="<!DOCTYPE html>";async function _p(e,t){var O,de,Q;let n=t.stream,r=0,s=0,o=0,i=0,a="",l;const c=((O=t.streaming)==null?void 0:O.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=t.containerTagName??"html",p=t.containerAttributes??{},m=n,h=Ln(),$=Sp(t),g=Vi(t.manifest);function v(){a&&(m.write(a),a="",r=0,o++,o===1&&(i=h()))}function f(z){const B=z.length;r+=B,s+=B,a+=z}switch(c.strategy){case"disabled":n={write:f};break;case"direct":n=m;break;case"auto":let z=0,B=!1;const Lt=c.maximunChunk??0,dt=c.maximunInitialChunk??0;n={write(be){be==="<!--qkssr-f-->"?B||(B=!0):be==="<!--qkssr-pu-->"?z++:be==="<!--qkssr-po-->"?z--:f(be),z===0&&(B||r>=(o===0?dt:Lt))&&(B=!1,v())}};break}u==="html"?n.write(kp):n.write("<!--cq-->"),g||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Vd(t,g);const b=g==null?void 0:g.manifest.injections,y=b?b.map(z=>G(z.tag,z.attributes??{})):[],x=((de=t.qwikLoader)==null?void 0:de.include)??"auto",k=g==null?void 0:g.manifest.qwikLoader;let A=!1;x!=="never"&&k&&(y.unshift(G("link",{rel:"modulepreload",href:`${$}${k}`}),G("script",{type:"module",async:!0,src:`${$}${k}`})),A=!0),hp($,g,t.preloader,y,(Q=t.serverData)==null?void 0:Q.nonce);const I=Ln(),w=[];let _=0,S=0;await Dl(e,{stream:n,containerTagName:u,containerAttributes:p,serverData:t.serverData,base:$,beforeContent:y,beforeClose:async(z,B,Lt,dt)=>{var ns,rs,ss,os;_=I();const be=Ln();l=await wi(z,B,void 0,dt);const Ne=[];gp($,l,t,g,Ne);const ta=JSON.stringify(l.state,void 0,void 0);if(Ne.push(G("script",{type:"qwik/json",dangerouslySetInnerHTML:Ap(ta),nonce:(ns=t.serverData)==null?void 0:ns.nonce})),l.funcs.length>0){const Me=p[Kd];Ne.push(G("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:qp(Me,l.funcs),nonce:(rs=t.serverData)==null?void 0:rs.nonce}))}const na=!l||l.mode!=="static";if(!A&&(x==="always"||x==="auto"&&na)){const Me=wp({debug:t.debug});Ne.push(G("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:Me,nonce:(ss=t.serverData)==null?void 0:ss.nonce}))}const ts=Array.from(B.$events$,Me=>JSON.stringify(Me));if(ts.length>0){const Me=`(window.qwikevents||(window.qwikevents=[])).push(${ts.join(",")})`;Ne.push(G("script",{dangerouslySetInnerHTML:Me,nonce:(os=t.serverData)==null?void 0:os.nonce}))}return Cp(w,z),S=be(),G(fe,{children:Ne})},manifestHash:(g==null?void 0:g.manifest.manifestHash)||"dev"+Ep()}),u!=="html"&&n.write("<!--/cq-->"),v();const E=l.resources.some(z=>z._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:g==null?void 0:g.manifest,size:s,isStatic:!E,timing:{render:_,snapshot:S,firstFlush:i}}}function Ep(){return Math.random().toString(36).slice(2)}function Vi(e){const t=e?{...Gs,...e}:Gs;if(!t||"mapper"in t)return t;if(t.mapping){const n={};return Object.entries(t.mapping).forEach(([r,s])=>{n[pn(r)]=[r,s]}),{mapper:n,manifest:t,injections:t.injections||[]}}}var Ap=e=>e.replace(/<(\/?script)/gi,"\\x3C$1");function Cp(e,t){var n;for(const r of t){const s=(n=r.$componentQrl$)==null?void 0:n.getSymbol();s&&!e.includes(s)&&e.push(s)}}var Ip='document["qFuncs_HASH"]=';function qp(e,t){return Ip.replace("HASH",e)+`[${t.join(`,
`)}]`}async function Tp(e){const t=Qi({},Vi(e));ko(t)}function jn(e,t){var n;return((n=t==null?void 0:t.getOrigin)==null?void 0:n.call(t,e))??(t==null?void 0:t.origin)??process.env.ORIGIN??zp(e)}function zp(e){const{PROTOCOL_HEADER:t,HOST_HEADER:n}=process.env,r=e.headers,s=t&&r[t]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),o=n??(e instanceof ua?":authority":"host"),i=r[o];return`${s}://${i}`}function Un(e,t){return Rp(e.originalUrl||e.url||"/",t)}function Pp(e=""){return["The stream has been destroyed","write after end"].some(n=>e.includes(n))}var Js=/^:(method|scheme|authority|path)$/i;function Rp(e,t){const n=/\/\/|\\\\/g;return new URL(e.replace(n,"/"),t)}async function Dp(e,t,n,r,s){const o=new Headers,i=t.headers;try{for(const[m,h]of Object.entries(i))if(!Js.test(m)){if(typeof h=="string")o.set(m,h);else if(Array.isArray(h))for(const $ of h)o.append(m,$)}}catch(m){console.error(m)}const a=async function*(){for await(const m of t)yield m},l=t.method==="HEAD"||t.method==="GET"?void 0:a(),c=new AbortController,u={method:t.method,headers:o,body:l,signal:c.signal,duplex:"half"};return n.on("close",()=>{c.abort()}),{mode:r,url:e,request:new Request(e.href,u),env:{get(m){return process.env[m]}},getWritableStream:(m,h,$)=>{n.statusCode=m;try{for(const[v,f]of h)Js.test(v)||n.setHeader(v,f);const g=$.headers();g.length>0&&n.setHeader("Set-Cookie",g)}catch(g){console.error(g)}return new WritableStream({write(g){n.closed||n.destroyed||n.write(g,v=>{v&&!Pp(v.message)&&console.error(v)})},close(){n.end()}})},getClientConn:()=>s?s(t):{ip:t.socket.remoteAddress},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var Np={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Mp(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=ha,globalThis.Headers=$a,globalThis.Request=ga,globalThis.Response=va,globalThis.FormData=xa),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=da,globalThis.TextDecoderStream=pa),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=ma,globalThis.ReadableStream=fa),typeof globalThis.crypto>"u"&&(globalThis.crypto=ba.webcrypto)}function Op(e){var t;Mp();const n={_deserializeData:ec,_serializeData:_u,_verifySerializable:gd};e.manifest&&Tp(e.manifest);const r=((t=e.static)==null?void 0:t.root)??jt(ca(import.meta.url),"..","..","dist");return{router:async(a,l,c)=>{try{const u=jn(a,e),p=await Dp(Un(a,u),a,l,"server",e.getClientConn),m=await al(p,e,n);if(m){const h=await m.completion;if(h)throw h;if(m.requestEv.headersSent)return}c()}catch(u){console.error(u),c(u)}},notFound:async(a,l,c)=>{try{if(!l.headersSent){const u=jn(a,e),p=Un(a,u),m=is(a.method||"GET",p)?"Not Found":oa(p.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":p.pathname}),l.end(m)}}catch(u){console.error(u),c(u)}},staticFile:async(a,l,c)=>{var u;try{const p=jn(a,e),m=Un(a,p);if(is(a.method||"GET",m)){const h=m.pathname;let $;aa(h).includes(".")?$=jt(r,h):e.qwikCityPlan.trailingSlash?$=jt(r,h+"index.html"):$=jt(r,h,"index.html");const g=la($).replace(/^\./,""),v=ia($);v.on("error",c);const f=Np[g];f&&l.setHeader("Content-Type",f),(u=e.static)!=null&&u.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),v.pipe(l);return}return c()}catch(p){console.error(p),c(p)}}}}const Lp=()=>N(fe,{children:N(kt,null,3,"yB_0")},1,"yB_1"),jp=re(D(Lp,"s_VKFlAWJuVm8")),Up=Object.freeze(Object.defineProperty({__proto__:null,default:jp},Symbol.toStringTag,{value:"Module"})),Fp=`
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
      background: linear-gradient(145deg, #2e7d32, #795548);
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
        width: calc(100% - 20px);
        padding: 10px 16px;
        top: 10px;
        max-width: none;
      }
      
      .logo {
        font-size: 1.1rem;
      }
      
      .logo-icon {
        width: 28px;
        height: 28px;
      }
      
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--neu-base);
        border-radius: var(--neu-radius-lg);
        box-shadow: var(--neu-shadow-xl);
        flex-direction: column;
        padding: 25px 20px;
        margin-top: 15px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .nav-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .nav-link {
        width: 100%;
        text-align: center;
        padding: 16px 20px;
        margin: 4px 0;
        font-size: 1rem;
        border-radius: var(--neu-radius-md);
        transition: all 0.2s ease;
      }
      
      .nav-link:hover {
        transform: translateX(5px);
        background: var(--neu-base);
        box-shadow: var(--neu-shadow-md);
      }
      
      .nav-link.active {
        background: linear-gradient(145deg, var(--neu-accent), var(--neu-accent-dark));
        color: white;
        box-shadow: var(--neu-shadow-md);
      }
      
      .menu-toggle {
        display: block;
        padding: 10px;
      }
      
      .menu-icon {
        width: 20px;
        height: 20px;
      }
    }
    
    /* Extra small mobile devices */
    @media (max-width: 480px) {
      .navbar {
        width: calc(100% - 16px);
        padding: 8px 12px;
      }
      
      .logo {
        font-size: 1rem;
      }
      
      .logo-icon {
        width: 24px;
        height: 24px;
      }
      
      .nav-links {
        padding: 20px 16px;
      }
      
      .nav-link {
        padding: 14px 16px;
        font-size: 0.95rem;
      }
    }
  `,Wp=e=>{const[t,n]=xe();t.value=e,n.value=!1;const r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth"})},Qp=()=>{const[e]=xe();e.value=!e.value},Bp=()=>{const e=K("home"),t=K(!1);ut(D(Fp,"s_gZs8EX5SgiU"));const n=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],r=D(Wp,"s_uYqmvnpRTCw",[e,t]),s=D(Qp,"s_LlZXhqmUmt8",[t]);return d("nav",null,{class:"navbar"},[d("a",null,{href:"#home",class:"logo",onClick$:oe("s_0NkL50ppaIg",[r])},[d("div",null,{class:"logo-icon"},"TP",3,null),d("span",null,null,"Portfolio",3,null)],3,null),d("div",null,{class:se(o=>`nav-links ${o.value?"open":""}`,[t],'`nav-links ${p0.value?"open":""}`')},n.map(o=>d("a",{href:`#${o.id}`,class:`nav-link ${e.value===o.id?"active":""}`,onClick$:oe("s_0hCi1q038Qo",[r,o])},null,U(o,"label"),0,o.id)),1,null),d("button",null,{class:se(o=>`menu-toggle ${o.value?"open":""}`,[t],'`menu-toggle ${p0.value?"open":""}`'),"aria-label":"Toggle menu",onClick$:s},d("div",null,{class:"menu-icon"},[d("span",null,null,null,3,null),d("span",null,null,null,3,null),d("span",null,null,null,3,null)],3,null),3,null)],1,"R4_0")},Hp=re(D(Bp,"s_ropMBSBWqro")),Gp=`
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
      bottom: 10px;
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
      .hero-section {
        padding: 60px 16px;
        min-height: 100vh;
      }
      
      .hero-content {
        max-width: 100%;
      }
      
      .profile-container {
        margin-bottom: 30px;
      }
      
      .profile-image-wrapper {
        width: 140px;
        height: 140px;
        padding: 8px;
      }
      
      .profile-status {
        width: 32px;
        height: 32px;
        bottom: 8px;
        right: 8px;
      }
      
      .status-dot {
        width: 16px;
        height: 16px;
      }
      
      .hero-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
        line-height: 1.1;
      }
      
      .hero-subtitle {
        font-size: 0.95rem;
        margin-bottom: 32px;
        padding: 0 10px;
        line-height: 1.5;
      }
      
      .cursor {
        height: 0.95rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-bottom: 32px;
      }
      
      .cta-button {
        width: 100%;
        max-width: 280px;
        padding: 16px 32px;
        font-size: 0.95rem;
        justify-content: center;
      }
      
      .cta-button:hover {
        transform: translateY(-1px);
      }
      
      .scroll-indicator {
        bottom: 15px;
        gap: 8px;
      }
      
      .scroll-mouse {
        width: 24px;
        height: 40px;
      }
      
      .scroll-wheel {
        width: 3px;
        height: 8px;
        top: 8px;
      }
      
      .scroll-indicator span {
        font-size: 0.8rem;
      }
    }
    
    /* Extra small mobile devices */
    @media (max-width: 480px) {
      .hero-section {
        padding: 50px 12px;
      }
      
      .profile-image-wrapper {
        width: 120px;
        height: 120px;
        padding: 6px;
      }
      
      .profile-status {
        width: 28px;
        height: 28px;
        bottom: 6px;
        right: 6px;
      }
      
      .status-dot {
        width: 14px;
        height: 14px;
      }
      
      .hero-title {
        font-size: 1.9rem;
        margin-bottom: 14px;
      }
      
      .hero-subtitle {
        font-size: 0.9rem;
        margin-bottom: 28px;
        padding: 0 8px;
      }
      
      .cursor {
        height: 0.9rem;
      }
      
      .cta-button {
        max-width: 260px;
        padding: 14px 28px;
        font-size: 0.9rem;
      }
      
      .scroll-indicator {
        bottom: 10px;
      }
      
      .scroll-indicator span {
        font-size: 0.75rem;
      }
    }
    
    /* Landscape mobile orientation */
    @media (max-width: 768px) and (orientation: landscape) {
      .hero-section {
        padding: 40px 16px;
        min-height: 100vh;
      }
      
      .profile-image-wrapper {
        width: 100px;
        height: 100px;
      }
      
      .hero-title {
        font-size: 1.8rem;
        margin-bottom: 12px;
      }
      
      .hero-subtitle {
        font-size: 0.85rem;
        margin-bottom: 24px;
      }
      
      .cta-buttons {
        flex-direction: row;
        gap: 12px;
        margin-bottom: 20px;
      }
      
      .cta-button {
        width: auto;
        max-width: 200px;
        padding: 12px 24px;
        font-size: 0.85rem;
      }
      
      .scroll-indicator {
        bottom: 10px;
      }
    }
  `,Yp=()=>{const e=K(""),t=K(!0);return ut(D(Gp,"s_R0z7yMvPekY")),Sc(oe("s_qJmIgBWFER0",[e,t])),d("section",null,{id:"home",class:"hero-section"},d("div",null,{class:"hero-content"},[d("div",null,{class:"profile-container"},d("div",null,{class:"profile-image-wrapper"},[d("img",null,{src:"/pfp.jpeg",alt:"Profile",class:"profile-image",width:"200",height:"200"},null,3,null),d("div",null,{class:"profile-status"},d("div",null,{class:"status-dot"},null,3,null),3,null)],3,null),3,null),d("h1",null,{class:"hero-title animate-fadeInUp"},"Thomas Powell",3,null),d("p",null,{class:"hero-subtitle"},[d("span",null,{class:"typewriter-text"},se(n=>n.value,[e],"p0.value"),3,null),t.value&&d("span",null,{class:"cursor"},null,3,"HJ_0")],1,null),d("div",null,{class:"cta-buttons"},[d("a",null,{href:"#projects",class:"cta-button primary"},[d("span",null,null,"View Projects",3,null),d("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M5 12h14M12 5l7 7-7 7"},null,3,null),3,null)],3,null),d("a",null,{href:"/powellthomas-resume.docx",download:!0,class:"cta-button secondary"},[d("span",null,null,"Download Resume",3,null),d("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"},null,3,null),3,null)],3,null)],3,null)],1,null),1,"HJ_1")},Jp=re(D(Yp,"s_1V8LiPxWuaU")),Vp=[{name:"HTML/CSS/JS",level:90,category:"frontend"},{name:"Flask",level:85,category:"frontend"},{name:"Web Development",level:85,category:"frontend"},{name:"Full Stack Development",level:80,category:"frontend"},{name:"Python",level:95,category:"backend"},{name:"Java",level:75,category:"backend"},{name:"C++",level:70,category:"backend"},{name:"R",level:70,category:"backend"},{name:"Machine Learning",level:80,category:"backend"},{name:"Web Automation",level:90,category:"backend"},{name:"Test Driven Development",level:85,category:"backend"},{name:"Statistical Analysis",level:0,category:"analytics",isWIP:!0},{name:"Data Visualization",level:0,category:"analytics",isWIP:!0},{name:"Business Intelligence",level:0,category:"analytics",isWIP:!0},{name:"Predictive Modeling",level:0,category:"analytics",isWIP:!0},{name:"AWS S3",level:85,category:"database"},{name:"Cloud Storage",level:80,category:"database"},{name:"Docker",level:90,category:"devops"},{name:"Kubernetes",level:85,category:"devops"},{name:"AWS",level:85,category:"devops"},{name:"Terraform",level:80,category:"devops"},{name:"CI/CD",level:90,category:"devops"},{name:"Infrastructure/Architecture",level:85,category:"devops"},{name:"Helm",level:80,category:"devops"},{name:"Git",level:95,category:"tools"},{name:"Operating Systems",level:85,category:"tools"},{name:"Networking",level:75,category:"tools"},{name:"Selenium Grid",level:90,category:"tools"},{name:"Prompt Engineering",level:80,category:"tools"},{name:"Problem Solving",level:95,category:"soft"},{name:"Communication",level:90,category:"soft"},{name:"Team Collaboration",level:90,category:"soft"},{name:"Project Management",level:85,category:"soft"}],Kp=[{name:"Python",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",proficiency:"expert",yearsOfExperience:3},{name:"R",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",proficiency:"intermediate",yearsOfExperience:1},{name:"SAS",logo:"https://www.sas.com/content/dam/SAS/en_us/image/other/logos/sas-logo-primary-rgb.svg",proficiency:"intermediate",yearsOfExperience:2},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Kubernetes",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",proficiency:"advanced",yearsOfExperience:2},{name:"AWS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Terraform",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"Java",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",proficiency:"intermediate",yearsOfExperience:2},{name:"Git",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",proficiency:"expert",yearsOfExperience:3},{name:"Flask",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"HTML5",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",proficiency:"advanced",yearsOfExperience:3},{name:"JavaScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",proficiency:"advanced",yearsOfExperience:2},{name:"C++",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",proficiency:"intermediate",yearsOfExperience:1},{name:"Linux",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",proficiency:"advanced",yearsOfExperience:3}],Fn=e=>Vp.filter(t=>t.category===e),mt={name:"Thomas Powell",title:"Technical Intern at SAS | CS & Data Science Student",bio:`I'm a Student at UNC Charlotte, deeply invested in computers and software as both a hobby and career. Graduate of the Academy of Information Technology and interning at SAS since June 2022.
        
        Currently earning both my BS in Computer Science with concentration in data science, and a MS in data science and business analytics dual track. My work at SAS focuses on quality assurance infrastructure, cloud engineering, and full-stack development.
        
        I specialize in creating automation tools, web applications, and cloud infrastructure to enable quality assurance and development teams. My projects range from selenium grid deployments to command line tools for internal APIs.`,highlights:["3+ years as Technical Intern at SAS","BS Computer Science & MS Data Science student","Second Place & Golden Hack Award at UNC Charlotte AxeHack","3.95 GPA (Undergrad) / 4.0 GPA (Graduate)","AOIT Honors Program Graduate","Experience with enterprise-scale projects"],interests:["Cloud Infrastructure","DevOps Automation","Machine Learning","Web Development","Test Automation","Containerization"]},Xp=`
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
    
    .skill-level.wip {
      color: #9ca3af;
      font-weight: 500;
    }
    
    .skill-progress.wip-progress {
      background: linear-gradient(90deg, #9ca3af, #6b7280);
      box-shadow: 2px 2px 4px rgba(156, 163, 175, 0.2);
      opacity: 0.5;
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
      .about-section {
        padding: 80px 16px;
      }
      
      .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
        margin-bottom: 60px;
      }
      
      .bio-section,
      .skills-section {
        padding: 32px;
      }
      
      .tech-stack {
        margin-top: 60px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 20px;
        margin-top: 32px;
      }
      
      .tech-card {
        padding: 20px 16px;
      }
      
      .tech-logo {
        width: 48px;
        height: 48px;
        margin-bottom: 12px;
      }
      
      .tech-name {
        font-size: 0.85rem;
      }
      
      .tech-experience {
        font-size: 0.75rem;
      }
    }
    
    @media (max-width: 768px) {
      .about-section {
        padding: 70px 16px;
      }
      
      .section-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
      }
      
      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 50px;
        padding: 0 10px;
      }
      
      .about-content {
        gap: 32px;
        margin-bottom: 50px;
      }
      
      .bio-section,
      .skills-section {
        padding: 28px 24px;
      }
      
      .bio-title {
        font-size: 1.6rem;
        margin-bottom: 8px;
      }
      
      .bio-subtitle {
        font-size: 1rem;
        margin-bottom: 24px;
      }
      
      .bio-text {
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 24px;
      }
      
      .highlight-item {
        padding: 12px;
        gap: 12px;
      }
      
      .highlight-icon {
        width: 20px;
        height: 20px;
        font-size: 0.8rem;
      }
      
      .skills-title {
        font-size: 1.4rem;
        margin-bottom: 24px;
      }
      
      .skill-category {
        margin-bottom: 24px;
      }
      
      .category-title {
        font-size: 0.85rem;
        margin-bottom: 12px;
      }
      
      .skill-item {
        margin-bottom: 16px;
      }
      
      .skill-name,
      .skill-level {
        font-size: 0.9rem;
      }
      
      .skill-bar {
        height: 8px;
      }
      
      .tech-stack {
        margin-top: 50px;
      }
      
      .tech-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 28px;
      }
      
      .tech-card {
        padding: 16px 12px;
      }
      
      .tech-logo {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
      
      .interests-section {
        margin-top: 50px;
        padding: 32px 24px;
      }
      
      .interests-title {
        font-size: 1.2rem;
        margin-bottom: 16px;
      }
      
      .interests-list {
        gap: 12px;
      }
      
      .interest-tag {
        padding: 8px 16px;
        font-size: 0.85rem;
      }
    }
    
    @media (max-width: 480px) {
      .about-section {
        padding: 60px 12px;
      }
      
      .section-title {
        font-size: 1.9rem;
      }
      
      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 8px;
      }
      
      .bio-section,
      .skills-section {
        padding: 24px 20px;
      }
      
      .bio-title {
        font-size: 1.4rem;
      }
      
      .bio-subtitle {
        font-size: 0.95rem;
      }
      
      .bio-text {
        font-size: 0.9rem;
      }
      
      .highlight-item {
        padding: 10px;
        gap: 10px;
        font-size: 0.9rem;
      }
      
      .skills-title {
        font-size: 1.3rem;
      }
      
      .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
      }
      
      .tech-card {
        padding: 14px 10px;
      }
      
      .tech-logo {
        width: 36px;
        height: 36px;
        margin-bottom: 8px;
      }
      
      .tech-name {
        font-size: 0.8rem;
      }
      
      .tech-experience {
        font-size: 0.7rem;
      }
      
      .interests-section {
        padding: 28px 20px;
      }
      
      .interests-list {
        gap: 10px;
      }
      
      .interest-tag {
        padding: 6px 14px;
        font-size: 0.8rem;
      }
    }
  `,Zp=()=>{ut(D(Xp,"s_3Vkkdid5Eow"));const e=Fn("frontend").slice(0,4),t=Fn("backend").slice(0,4),n=Fn("analytics");return d("section",null,{id:"about",class:"about-section"},d("div",null,{class:"about-container"},[d("h2",null,{class:"section-title animate-fadeInUp"},"About Me",3,null),d("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},null,3,null),d("div",null,{class:"about-content"},[d("div",null,{class:"bio-section animate-fadeInLeft"},[d("h3",null,{class:"bio-title"},mt.name,3,null),d("p",null,{class:"bio-subtitle"},mt.title,3,null),d("p",null,{class:"bio-text"},mt.bio,3,null),d("div",null,{class:"highlights"},mt.highlights.slice(0,4).map((r,s)=>d("div",null,{class:"highlight-item"},[d("div",null,{class:"highlight-icon"},"✓",3,null),d("span",null,null,r,1,null)],1,s)),1,null)],1,null),d("div",null,{class:"skills-section animate-fadeInRight"},[d("h3",null,{class:"skills-title"},"Core Skills",3,null),d("div",null,{class:"skill-category"},[d("p",null,{class:"category-title"},"Frontend Development",3,null),e.map(r=>d("div",null,{class:"skill-item"},[d("div",null,{class:"skill-header"},[d("span",null,{class:"skill-name"},U(r,"name"),1,null),d("span",null,{class:"skill-level"},[U(r,"level"),"%"],1,null)],1,null),d("div",null,{class:"skill-bar"},d("div",{style:`width: ${r.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,r.name))],1,null),d("div",null,{class:"skill-category"},[d("p",null,{class:"category-title"},"Backend Development",3,null),t.map(r=>d("div",null,{class:"skill-item"},[d("div",null,{class:"skill-header"},[d("span",null,{class:"skill-name"},U(r,"name"),1,null),d("span",null,{class:"skill-level"},[U(r,"level"),"%"],1,null)],1,null),d("div",null,{class:"skill-bar"},d("div",{style:`width: ${r.level}%`},{class:"skill-progress"},null,3,null),1,null)],1,r.name))],1,null),d("div",null,{class:"skill-category"},[d("p",null,{class:"category-title"},"Business Analytics",3,null),n.map(r=>d("div",null,{class:"skill-item"},[d("div",null,{class:"skill-header"},[d("span",null,{class:"skill-name"},U(r,"name"),1,null),d("span",null,{class:"skill-level wip"},"WIP",3,null)],1,null),d("div",null,{class:"skill-bar"},d("div",null,{class:"skill-progress wip-progress",style:"width: 0%"},null,3,null),3,null)],1,r.name))],1,null)],1,null)],1,null),d("div",null,{class:"tech-stack"},[d("h3",null,{class:"section-title"},"Tech Stack",3,null),d("p",null,{class:"section-subtitle"},"Technologies I work with daily",3,null),d("div",null,{class:"tech-grid"},Kp.map(r=>d("div",null,{class:"tech-card animate-scaleIn"},[d("img",{src:U(r,"logo"),alt:U(r,"name")},{class:"tech-logo",loading:"lazy",width:"60",height:"60"},null,3,null),d("p",null,{class:"tech-name"},U(r,"name"),1,null),d("p",null,{class:"tech-experience"},[U(r,"yearsOfExperience")," years"],1,null)],1,r.name)),1,null)],1,null),d("div",null,{class:"interests-section"},[d("h3",null,{class:"interests-title"},"Interests & Passions",3,null),d("div",null,{class:"interests-list"},mt.interests.map(r=>d("span",null,{class:"interest-tag"},r,1,r)),1,null)],1,null)],1,null),1,"uH_0")},em=re(D(Zp,"s_kQDJUnc38Vs")),Vs=[{id:"ciqe-devcontainers",title:"CIQE Development Containers",description:"Containerization of repos and projects with the CI360 team allowing for normalization of testing and development environments across teams",category:"devops",technologies:["Docker","DevContainers","AWS","Git","Kubernetes","Helm","Docker Compose"],images:["https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Immediate productivity when working with repos and projects","Automated project-specific setup for all requirements","Internal features handle AWS and Git authentication","Automatic installation of packages including auth","Security automated and connectivity to private resources","Templates with complex setup baked in for teammates"],challenges:["Creating universal devcontainer templates","Handling authentication across multiple services","Ensuring security compliance in containers","Managing versioning and updates across teams"],outcomes:["90% reduction in environment setup time","Standardized development environments","Zero manual configuration required","Adopted across multiple teams"]},{id:"qegrid-selenium",title:"QEGRID: Selenium Grid",description:"Enterprise-scale Selenium Grid deployment allowing browsers of selenium tests to run inside an internally deployed grid for better resource management",category:"devops",technologies:["Selenium","Docker","Kubernetes","Python","Java","AWS"],images:["https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"],features:["Resource connectivity and efficient handling","Run tests quicker with parallel execution","Normalization of browser versions","Standardized test runners across teams","Centralized test execution management","Scalable infrastructure for concurrent tests"],challenges:["Managing browser compatibility across versions","Optimizing resource allocation for parallel tests","Ensuring network connectivity for internal resources","Scaling to handle peak test loads"],outcomes:["70% faster test execution","Support for 100+ concurrent tests","Unified browser testing platform","Reduced infrastructure costs"]},{id:"splitstation-webapp",title:"SplitStation: Internal Webapp Tool",description:"Full-stack web application for controlling production deployment segments with complete pipeline, authentication, and tracking capabilities",category:"fullstack",technologies:["Flask","Python","HTML/CSS/JS","Docker","AWS","Azure","CloudFormation","Split.io"],images:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"],features:["Control production deployment segments","Advanced permission management system","Change tracking and audit logs","Custom interaction workflows","Full authentication and authorization","Real-time segment updates"],challenges:["Building secure authentication from scratch","Implementing complex permission hierarchies","Ensuring production safety with segment controls","Creating intuitive UI for complex operations"],outcomes:["100% adoption by QA team","Zero production incidents","50% faster segment management","Complete audit trail compliance"]},{id:"ci360-cli-tool",title:"CI360: Command Line Tool",description:"Enterprise CLI tool for interaction with internal APIs, featuring automatic proxying and simplified complex operations",category:"backend",technologies:["Python","Click","REST APIs","Docker","AWS","Internal APIs"],images:["https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop"],features:["Simplified interaction with complex internal APIs","Automatic proxying and authentication","Single command for complex operations","Pipeline deployment and distribution","Create customer identity with one command","Comprehensive error handling and logging"],challenges:["Abstracting complex API logic","Handling various authentication methods","Creating intuitive command structure","Ensuring cross-platform compatibility"],outcomes:["80% reduction in API interaction time","Adopted by 50+ developers","Eliminated manual API configuration","Standardized API interactions"]},{id:"spotify-playlist-builder",title:"Spotify Playlist Builder",description:"Award-winning web application for building Spotify playlists with swipe-based interface, developed at UNC Charlotte AxeHack",category:"fullstack",technologies:["Python","Flask","HTML","CSS","JavaScript","Spotify API"],images:["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop"],features:["Swipe-based song selection interface","Real-time playlist building","Spotify API integration","Responsive web design","User authentication with Spotify","Playlist export functionality"],challenges:["Implementing swipe gestures in web","Managing Spotify API rate limits","Creating engaging user interface","Handling real-time updates"],outcomes:["Second Place at AxeHack","Golden Hack Award winner","Built in 24-hour hackathon","Innovative UI/UX design"]},{id:"qa-automation-suite",title:"QA Infrastructure & Automation",description:"Comprehensive suite of automation tools, web apps, and cloud infrastructure to enable quality assurance across CI360 platform",category:"devops",technologies:["Python","AWS","Terraform","Docker","Kubernetes","GitHub Actions","S3"],images:["https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"],features:["Automated test archiving to S3","GitHub Actions integration","Terraform and Helm deployments","Automatic tenant permissions management","Test results visualization webapp","Complete CI/CD pipeline automation"],challenges:["Orchestrating complex deployment workflows","Managing multi-cloud resources","Ensuring test isolation and reproducibility","Scaling infrastructure based on demand"],outcomes:["95% test automation coverage","60% reduction in QA cycle time","Zero manual deployment steps","Complete test history retention"]}],tm=()=>[{value:"fullstack",label:"Full Stack"},{value:"frontend",label:"Frontend"},{value:"backend",label:"Backend"},{value:"mobile",label:"Mobile"},{value:"devops",label:"DevOps"}],nm=`
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
    @media (max-width: 968px) {
      .projects-section {
        padding: 80px 16px;
      }
      
      .projects-grid {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 32px;
      }
      
      .project-image-container {
        height: 200px;
      }
      
      .project-content {
        padding: 24px;
      }
    }
    
    @media (max-width: 768px) {
      .projects-section {
        padding: 70px 16px;
      }
      
      .section-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
      }
      
      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 50px;
        padding: 0 10px;
      }
      
      .filter-tabs {
        gap: 12px;
        margin-bottom: 50px;
        padding: 0 10px;
      }
      
      .filter-tab {
        padding: 12px 20px;
        font-size: 0.9rem;
        min-width: auto;
        flex: 1;
        max-width: 140px;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
        gap: 28px;
        margin-bottom: 50px;
      }
      
      .project-card {
        max-width: 100%;
      }
      
      .project-image-container {
        height: 180px;
      }
      
      .project-content {
        padding: 20px;
      }
      
      .project-title {
        font-size: 1.3rem;
        margin-bottom: 12px;
      }
      
      .project-description {
        font-size: 0.95rem;
        line-height: 1.5;
        margin-bottom: 16px;
      }
      
      .project-tech {
        gap: 8px;
        margin-bottom: 20px;
      }
      
      .tech-badge {
        padding: 4px 10px;
        font-size: 0.75rem;
      }
      
      .project-links {
        gap: 12px;
      }
      
      .project-link {
        padding: 12px 16px;
        font-size: 0.9rem;
      }
      
      /* Modal improvements for mobile */
      .modal-overlay {
        padding: 10px;
        align-items: flex-start;
        padding-top: 20px;
      }
      
      .modal-content {
        max-height: calc(100vh - 40px);
        border-radius: var(--neu-radius-lg);
        margin: 0;
        width: 100%;
        max-width: 100%;
      }
      
      .modal-close {
        top: 15px;
        right: 15px;
        width: 36px;
        height: 36px;
      }
      
      .modal-header {
        padding: 50px 20px 20px;
      }
      
      .modal-title {
        font-size: 1.6rem;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      
      .modal-category {
        font-size: 0.85rem;
      }
      
      .modal-body {
        padding: 20px;
      }
      
      .modal-section {
        margin-bottom: 32px;
      }
      
      .modal-section-title {
        font-size: 1.2rem;
        margin-bottom: 16px;
      }
      
      .feature-item {
        padding: 12px;
        gap: 12px;
        font-size: 0.9rem;
      }
      
      .feature-icon {
        width: 20px;
        height: 20px;
        font-size: 0.8rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
      
      .stat-card {
        padding: 16px;
      }
      
      .stat-value {
        font-size: 1.5rem;
      }
      
      .stat-label {
        font-size: 0.85rem;
      }
    }
    
    @media (max-width: 480px) {
      .projects-section {
        padding: 60px 12px;
      }
      
      .section-title {
        font-size: 1.9rem;
      }
      
      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 8px;
      }
      
      .filter-tabs {
        gap: 8px;
        padding: 0 8px;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .filter-tab {
        padding: 10px 16px;
        font-size: 0.85rem;
        min-width: 80px;
        max-width: 120px;
      }
      
      .projects-grid {
        gap: 24px;
      }
      
      .project-image-container {
        height: 160px;
      }
      
      .project-content {
        padding: 18px;
      }
      
      .project-title {
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
      
      .project-description {
        font-size: 0.9rem;
        margin-bottom: 14px;
      }
      
      .tech-badge {
        padding: 3px 8px;
        font-size: 0.7rem;
      }
      
      .project-link {
        padding: 10px 14px;
        font-size: 0.85rem;
      }
      
      /* Modal for small screens */
      .modal-overlay {
        padding: 5px;
        padding-top: 10px;
      }
      
      .modal-content {
        max-height: calc(100vh - 20px);
        border-radius: var(--neu-radius-md);
      }
      
      .modal-close {
        top: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
      }
      
      .modal-header {
        padding: 45px 16px 16px;
      }
      
      .modal-title {
        font-size: 1.4rem;
      }
      
      .modal-body {
        padding: 16px;
      }
      
      .modal-section {
        margin-bottom: 28px;
      }
      
      .modal-section-title {
        font-size: 1.1rem;
        margin-bottom: 14px;
      }
      
      .feature-item {
        padding: 10px;
        gap: 10px;
        font-size: 0.85rem;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }
      
      .stat-card {
        padding: 14px;
      }
      
      .stat-value {
        font-size: 1.3rem;
      }
      
      .stat-label {
        font-size: 0.8rem;
      }
    }
    
    /* Landscape mobile orientation */
    @media (max-width: 768px) and (orientation: landscape) {
      .projects-section {
        padding: 50px 16px;
      }
      
      .filter-tabs {
        margin-bottom: 40px;
      }
      
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      
      .project-image-container {
        height: 140px;
      }
      
      .project-content {
        padding: 16px;
      }
      
      .modal-overlay {
        padding-top: 10px;
      }
      
      .modal-content {
        max-height: calc(100vh - 20px);
      }
    }
  `,rm=e=>{const[t]=xe();t.value=e},sm=e=>{const[t,n]=xe();n.value=e,t.value=!0},om=()=>{const[e,t]=xe();e.value=!1,setTimeout(()=>{t.value=null},300)},im=()=>{const e=K("all"),t=K(null),n=K(!1);ut(D(nm,"s_x09mof0NAUM"));const r=[{value:"all",label:"All Projects"},...tm()],s=e.value==="all"?Vs:Vs.filter(l=>l.category===e.value),o=D(rm,"s_04T8x2lEfJQ",[e]),i=D(sm,"s_kH0dZ6cEGg4",[n,t]),a=D(om,"s_AlkI4Q6oVwQ",[n,t]);return d("section",null,{id:"projects",class:"projects-section"},d("div",null,{class:"projects-container"},[d("h2",null,{class:"section-title animate-fadeInUp"},"Featured Projects",3,null),d("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Explore my portfolio of full-stack applications and technical solutions",3,null),d("div",null,{class:"filter-tabs animate-fadeInUp stagger-2"},r.map(l=>d("button",{class:`filter-tab ${e.value===l.value?"active":""}`,onClick$:oe("s_1xEgQnu0yC4",[l,o])},null,U(l,"label"),0,l.value)),1,null),d("div",null,{class:"projects-grid"},s.map((l,c)=>d("div",{class:`project-card animate-fadeInUp stagger-${Math.min(c+3,8)}`,onClick$:oe("s_7w8zQT0J9wQ",[i,l])},null,[d("div",null,{class:"project-image-container"},[d("img",{src:l.images[0],alt:U(l,"title")},{class:"project-image",loading:"lazy",width:"800",height:"600"},null,3,null),d("span",null,{class:"project-category"},U(l,"category"),1,null)],1,null),d("div",null,{class:"project-content"},[d("h3",null,{class:"project-title"},U(l,"title"),1,null),d("p",null,{class:"project-description"},U(l,"description"),1,null),d("div",null,{class:"project-tech"},[l.technologies.slice(0,4).map(u=>d("span",null,{class:"tech-badge"},u,1,u)),l.technologies.length>4&&d("span",null,{class:"tech-badge"},["+",l.technologies.length-4],1,"m6_0")],1,null),d("div",null,{class:"project-links"},d("button",null,{class:"project-link primary",onClick$:oe("s_x0Kaq5Nib7o")},[d("svg",null,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M9 12h6M12 9v6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"},null,3,null),3,null),"View Details"],3,null),3,null)],1,null)],0,l.id)),1,null),d("div",null,{class:se(l=>`modal-overlay ${l.value?"open":""}`,[n],'`modal-overlay ${p0.value?"open":""}`'),onClick$:a},t.value&&d("div",null,{class:"modal-content",onClick$:oe("s_42RUnvGm7aU")},[d("button",null,{class:"modal-close",onClick$:a},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",null,{x1:"18",y1:"6",x2:"6",y2:"18"},null,3,null),d("line",null,{x1:"6",y1:"6",x2:"18",y2:"18"},null,3,null)],3,null),3,null),d("div",null,{class:"modal-header"},[d("h3",null,{class:"modal-title"},se(l=>l.value.title,[t],"p0.value.title"),3,null),d("span",null,{class:"modal-category"},se(l=>l.value.category,[t],"p0.value.category"),3,null)],3,null),d("div",null,{class:"modal-body"},[d("div",null,{class:"modal-section"},[d("h4",null,{class:"modal-section-title"},"Key Features",3,null),d("div",null,{class:"feature-list"},t.value.features.map(l=>d("div",null,{class:"feature-item"},[d("div",null,{class:"feature-icon"},"✓",3,null),d("span",null,null,l,1,null)],1,l)),1,null)],1,null),d("div",null,{class:"modal-section"},[d("h4",null,{class:"modal-section-title"},"Project Outcomes",3,null),d("div",null,{class:"stats-grid"},t.value.outcomes.map(l=>{const[c,...u]=l.split(" ");return d("div",null,{class:"stat-card"},[d("div",null,{class:"stat-value"},c,1,null),d("div",null,{class:"stat-label"},u.join(" "),1,null)],1,l)}),1,null)],1,null),d("div",null,{class:"modal-section"},[d("h4",null,{class:"modal-section-title"},"Technical Challenges",3,null),d("div",null,{class:"feature-list"},t.value.challenges.map(l=>d("div",null,{class:"feature-item"},[d("div",null,{class:"feature-icon"},"💡",3,null),d("span",null,null,l,1,null)],1,l)),1,null)],1,null)],1,null)],1,"m6_1"),1,null)],1,null),1,"m6_2")},am=re(D(im,"s_JdVX0L8bEOA")),lm=[{name:"LinkedIn",url:"https://www.linkedin.com/in/twpow/",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>`,color:"#0077B5"},{name:"Email",url:"mailto:thomas.walker.powell@gmail.com",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
    </svg>`,color:"#EA4335"},{name:"GitHub",url:"https://github.com/twpow",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,color:"#333"}],Qt={email:"thomas.walker.powell@gmail.com",phone:"(919) 593-8731",location:"Charlotte, NC",availability:"Currently interning at SAS"},cm=`
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
      .contact-section {
        padding: 80px 16px;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .contact-info,
      .contact-form {
        padding: 32px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .social-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }
    }
    
    @media (max-width: 768px) {
      .contact-section {
        padding: 70px 16px;
      }
      
      .section-title {
        font-size: 2.2rem;
        margin-bottom: 16px;
      }
      
      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 50px;
        padding: 0 10px;
      }
      
      .contact-content {
        gap: 32px;
      }
      
      .contact-info,
      .contact-form {
        padding: 28px 24px;
      }
      
      .info-title,
      .form-title {
        font-size: 1.4rem;
        margin-bottom: 24px;
      }
      
      .info-item {
        margin-bottom: 20px;
        padding: 16px;
        gap: 16px;
      }
      
      .info-icon {
        width: 44px;
        height: 44px;
      }
      
      .info-label {
        font-size: 0.85rem;
      }
      
      .info-value {
        font-size: 0.95rem;
      }
      
      .social-links {
        margin-top: 32px;
      }
      
      .social-title {
        font-size: 1.1rem;
        margin-bottom: 16px;
      }
      
      .social-grid {
        gap: 10px;
      }
      
      .social-link {
        padding: 12px;
      }
      
      .social-link svg {
        width: 20px;
        height: 20px;
      }
      
      .form-group {
        margin-bottom: 20px;
      }
      
      .form-label {
        font-size: 0.9rem;
        margin-bottom: 8px;
      }
      
      .form-input,
      .form-textarea {
        padding: 14px 18px;
        font-size: 0.95rem;
      }
      
      .form-textarea {
        min-height: 130px;
      }
      
      .form-submit {
        padding: 16px 36px;
        font-size: 1rem;
      }
      
      .availability-badge {
        margin-top: 16px;
        padding: 6px 14px;
        font-size: 0.85rem;
      }
      
      .availability-dot {
        width: 6px;
        height: 6px;
      }
    }
    
    @media (max-width: 480px) {
      .contact-section {
        padding: 60px 12px;
      }
      
      .section-title {
        font-size: 1.9rem;
      }
      
      .section-subtitle {
        font-size: 0.95rem;
        padding: 0 8px;
      }
      
      .contact-info,
      .contact-form {
        padding: 24px 20px;
      }
      
      .info-title,
      .form-title {
        font-size: 1.3rem;
        margin-bottom: 20px;
      }
      
      .info-item {
        padding: 14px;
        gap: 14px;
        margin-bottom: 16px;
      }
      
      .info-icon {
        width: 40px;
        height: 40px;
      }
      
      .info-label {
        font-size: 0.8rem;
      }
      
      .info-value {
        font-size: 0.9rem;
      }
      
      .social-links {
        margin-top: 28px;
      }
      
      .social-title {
        font-size: 1rem;
        margin-bottom: 14px;
      }
      
      .social-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
      
      .social-link {
        padding: 10px;
      }
      
      .social-link svg {
        width: 18px;
        height: 18px;
      }
      
      .form-group {
        margin-bottom: 18px;
      }
      
      .form-label {
        font-size: 0.85rem;
        margin-bottom: 6px;
      }
      
      .form-input,
      .form-textarea {
        padding: 12px 16px;
        font-size: 0.9rem;
      }
      
      .form-textarea {
        min-height: 120px;
      }
      
      .form-submit {
        padding: 14px 32px;
        font-size: 0.95rem;
      }
      
      .submit-status {
        margin-top: 16px;
        padding: 12px;
        font-size: 0.9rem;
      }
      
      .availability-badge {
        margin-top: 14px;
        padding: 5px 12px;
        font-size: 0.8rem;
      }
    }
    
    /* Landscape mobile orientation */
    @media (max-width: 768px) and (orientation: landscape) {
      .contact-section {
        padding: 50px 16px;
      }
      
      .contact-content {
        gap: 28px;
      }
      
      .contact-info,
      .contact-form {
        padding: 24px 20px;
      }
      
      .form-row {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .form-textarea {
        min-height: 100px;
      }
      
      .social-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,um=async e=>{const[t,n,r]=xe();e.preventDefault(),n.value=!0,r.value="idle",await new Promise(s=>setTimeout(s,2e3)),console.log("Form submitted:",t.value),n.value=!1,r.value="success",setTimeout(()=>{t.value={name:"",email:"",subject:"",message:""},r.value="idle"},3e3)},dm=(e,t)=>{const[n]=xe();n.value={...n.value,[e]:t}},pm=()=>{const e=K({name:"",email:"",subject:"",message:""}),t=K(!1),n=K("idle");ut(D(cm,"s_tvPusS0UOeY"));const r=D(um,"s_LMfn7cFC95k",[e,t,n]),s=D(dm,"s_G0PU4nT0vKs",[e]);return d("section",null,{id:"contact",class:"contact-section"},d("div",null,{class:"contact-container"},[d("h2",null,{class:"section-title animate-fadeInUp"},"Get In Touch",3,null),d("p",null,{class:"section-subtitle animate-fadeInUp stagger-1"},"Let's discuss your next project or collaboration opportunity",3,null),d("div",null,{class:"contact-content"},[d("div",null,{class:"contact-info animate-fadeInLeft"},[d("h3",null,{class:"info-title"},"Contact Information",3,null),d("div",null,{class:"info-item"},[d("div",null,{class:"info-icon"},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,3,null),3,null),3,null),d("div",null,{class:"info-details"},[d("p",null,{class:"info-label"},"Email",3,null),d("p",null,{class:"info-value"},Qt.email,3,null)],3,null)],3,null),d("div",null,{class:"info-item"},[d("div",null,{class:"info-icon"},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},d("path",null,{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"},null,3,null),3,null),3,null),d("div",null,{class:"info-details"},[d("p",null,{class:"info-label"},"Phone",3,null),d("p",null,{class:"info-value"},Qt.phone,3,null)],3,null)],3,null),d("div",null,{class:"info-item"},[d("div",null,{class:"info-icon"},d("svg",null,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",null,{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"},null,3,null),d("circle",null,{cx:"12",cy:"10",r:"3"},null,3,null)],3,null),3,null),d("div",null,{class:"info-details"},[d("p",null,{class:"info-label"},"Location",3,null),d("p",null,{class:"info-value"},Qt.location,3,null)],3,null)],3,null),d("div",null,{class:"availability-badge"},[d("span",null,{class:"availability-dot"},null,3,null),Qt.availability],3,null),d("div",null,{class:"social-links"},[d("h4",null,{class:"social-title"},"Connect With Me",3,null),d("div",null,{class:"social-grid"},lm.map(o=>d("a",{href:U(o,"url"),title:U(o,"name"),dangerouslySetInnerHTML:U(o,"icon")},{target:"_blank",rel:"noopener noreferrer",class:"social-link"},null,3,o.name)),1,null)],1,null)],1,null),d("div",null,{class:"contact-form animate-fadeInRight"},[d("h3",null,{class:"form-title"},"Send Me a Message",3,null),d("form",null,{onSubmit$:r},[d("div",null,{class:"form-row"},[d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"name"},"Your Name",3,null),d("input",null,{type:"text",id:"name",class:"form-input",placeholder:"John Smith",value:se(o=>o.value.name,[e],"p0.value.name"),required:!0,onInput$:oe("s_vKy2S362iTQ",[s])},null,3,null)],3,null),d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"email"},"Email Address",3,null),d("input",null,{type:"email",id:"email",class:"form-input",placeholder:"john@example.com",value:se(o=>o.value.email,[e],"p0.value.email"),required:!0,onInput$:oe("s_LuZO1QS7gEs",[s])},null,3,null)],3,null)],3,null),d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"subject"},"Subject",3,null),d("input",null,{type:"text",id:"subject",class:"form-input",placeholder:"Project Inquiry",value:se(o=>o.value.subject,[e],"p0.value.subject"),required:!0,onInput$:oe("s_zAJbdncFBqs",[s])},null,3,null)],3,null),d("div",null,{class:"form-group"},[d("label",null,{class:"form-label",for:"message"},"Message",3,null),d("textarea",null,{id:"message",class:"form-textarea",placeholder:"Tell me about your project...",value:se(o=>o.value.message,[e],"p0.value.message"),required:!0,onInput$:oe("s_1M8Ii0d2Bp4",[s])},null,3,null)],3,null),d("button",null,{type:"submit",class:"form-submit",disabled:se(o=>o.value,[t],"p0.value")},t.value?N(fe,{children:[d("span",null,{class:"spinner"},null,3,null),"Sending..."]},3,"Db_0"):N(fe,{children:["Send Message",d("svg",null,{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",null,{x1:"22",y1:"2",x2:"11",y2:"13"},null,3,null),d("polygon",null,{points:"22 2 15 22 11 13 2 9 22 2"},null,3,null)],3,null)]},3,"Db_1"),1,null),n.value==="success"&&d("div",null,{class:"submit-status success"},"✓ Message sent successfully! I'll get back to you soon.",3,"Db_2"),n.value==="error"&&d("div",null,{class:"submit-status error"},"✗ Something went wrong. Please try again or email me directly.",3,"Db_3")],1,null)],1,null)],1,null)],1,null),1,"Db_4")},mm=re(D(pm,"s_Ubng8hDLd1Y")),fm=()=>N(fe,{children:[N(Hp,null,3,"i8_0"),d("main",null,null,[N(Jp,null,3,"i8_1"),N(em,null,3,"i8_2"),N(am,null,3,"i8_3"),N(mm,null,3,"i8_4")],1,null)]},1,"i8_5"),hm=re(D(fm,"s_B0lqk5IDDy4")),$m={title:"Thomas Powell - Technical Intern & Computer Science Student",meta:[{name:"description",content:"Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development. UNC Charlotte Computer Science and Data Science student."},{name:"keywords",content:"Thomas Powell, SAS intern, cloud engineering, DevOps, full-stack developer, Python, AWS, Docker, Kubernetes, UNC Charlotte"},{property:"og:title",content:"Thomas Powell - Technical Intern & Computer Science Student"},{property:"og:description",content:"Explore my portfolio of enterprise projects at SAS, including cloud infrastructure, automation tools, and web applications."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Thomas Powell - Technical Intern & Computer Science Student"},{name:"twitter:description",content:"Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development."}]},gm=Object.freeze(Object.defineProperty({__proto__:null,default:hm,head:$m},Symbol.toStringTag,{value:"Module"})),vm=[],xm=()=>Up,bm=[["/",[xm,()=>gm],"/",["q-BQwkKZy9.js","q-CYvM70aZ.js"]]],ym=[],wm=!0,Sm="/",km=!0,_m={routes:bm,serverPlugins:vm,menus:ym,trailingSlash:wm,basePathname:Sm,cacheModules:km},Em=ve("qc-s"),Am=ve("qc-c"),Ki=ve("qc-ic"),Xi=ve("qc-h"),Zi=ve("qc-l"),Cm=ve("qc-n"),Im=ve("qc-a"),qm=ve("qc-ir"),Tm=ve("qc-p"),zm=Id(oe("s_9KRx0IOCHt8")),Pm=()=>{if(!Xr("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");Lc();const t=Sr(Ki);if(t.value&&t.value.length>0){const n=t.value.length;let r=null;for(let s=n-1;s>=0;s--)t.value[s].default&&(r=N(t.value[s].default,{children:r},1,"ni_0"));return N(fe,{children:[r,d("script",{"document:onQCInit$":zm,"document:onQInit$":qd(()=>{((s,o)=>{var i;if(!s._qcs&&o.scrollRestoration==="manual"){s._qcs=!0;const a=(i=o.state)==null?void 0:i._qCityScroll;a&&s.scrollTo(a.x,a.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"ni_1")]},1,"ni_2")}return Cr},Rm=re(D(Pm,"s_ScE8eseirUA")),Dm=(e,t)=>new URL(e,t.href),Ks=(e,t)=>e.origin===t.origin,Xs=e=>e.endsWith("/")?e:e+"/",Nm=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&Xs(e)===Xs(t)},Mm=(e,t)=>e.search===t.search,hn=(e,t)=>Mm(e,t)&&Nm(e,t),Om=e=>e&&typeof e.then=="function",Lm=(e,t,n,r)=>{const s=ea(),i={head:s,withLocale:a=>qs(r,a),resolveValue:a=>{const l=a.__id;if(a.__brand==="server_loader"&&!(l in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=e.loaders[l];if(Om(c))throw new Error("Loaders returning a promise can not be resolved for the head function.");return c},...t};for(let a=n.length-1;a>=0;a--){const l=n[a]&&n[a].head;l&&(typeof l=="function"?Zs(s,qs(r,()=>l(i))):typeof l=="object"&&Zs(s,l))}return i.head},Zs=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),Bt(e.meta,t.meta),Bt(e.links,t.links),Bt(e.styles,t.styles),Bt(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},Bt=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const r=e.findIndex(s=>s.key===n.key);if(r>-1){e[r]=n;continue}}e.push(n)}},ea=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),jm=()=>Sr(Xi),Um=()=>Sr(Zi),Fm=()=>Rn(Xr("qwikcity")),eo={},Ht={navCount:0},Wm=":root{view-transition-name:none}",Qm=e=>{},Bm=async(e,t)=>{const[n,r,s,o]=xe(),{type:i="link",forceReload:a=e===void 0,replaceState:l=!1,scroll:c=!0}=typeof t=="object"?t:{forceReload:t};Ht.navCount++;const u=s.value.dest,p=e===void 0?u:typeof e=="number"?e:Dm(e,o.url);if(eo.$cbs$&&(a||typeof p=="number"||!hn(p,u)||!Ks(p,u))){const m=Ht.navCount,h=await Promise.all([...eo.$cbs$.values()].map($=>$(p)));if(m!==Ht.navCount||h.some(Boolean)){m===Ht.navCount&&i==="popstate"&&history.pushState(null,"",u);return}}if(typeof p!="number"&&Ks(p,u)&&!(!a&&hn(p,u)))return s.value={type:i,dest:p,forceReload:a,replaceState:l,scroll:c},n.value=void 0,o.isNavigating=!0,new Promise(m=>{r.r=m})},Hm=({track:e})=>{const[t,n,r,s,o,i,a,l,c,u,p]=xe();async function m(){const[$,g]=e(()=>[u.value,t.value]),v=Pc(""),f=p.url,b=g?"form":$.type;$.replaceState;let y,x,k=null;if(y=new URL($.dest,p.url),k=o.loadedRoute,x=o.response,k){const[A,I,w,_]=k,S=w,E=S[S.length-1];$.dest.search&&hn(y,f)&&(y.search=$.dest.search),hn(y,f)||(p.prevUrl=f),p.url=y,p.params={...I},u.untrackedValue={type:b,dest:y};const T=Lm(x,p,S,v);n.headings=E.headings,n.menu=_,r.value=Rn(S),s.links=T.links,s.meta=T.meta,s.styles=T.styles,s.scripts=T.scripts,s.title=T.title,s.frontmatter=T.frontmatter}}return m()},Gm=e=>{Gd(D(Wm,"s_K4gvalEGCME"));const t=Fm();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=Xr("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(t.ev.originalUrl.pathname!==t.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const r=new URL(n),s=Wt({url:r,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),o={},i=xd(Wt(t.response.loaders,{deep:!1})),a=K({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),l=Wt(ea),c=Wt({headings:void 0,menu:void 0}),u=K(),p=t.response.action,m=p?t.response.loaders[p]:void 0,h=K(m?{id:p,data:t.response.formData,output:{result:m,status:t.response.status}}:void 0),$=D(Qm,"s_qGVD1Sz413o"),g=D(Bm,"s_aww2BzpANGM",[h,o,a,s]);return ye(Am,c),ye(Ki,u),ye(Xi,l),ye(Zi,s),ye(Cm,g),ye(Em,i),ye(Im,h),ye(qm,a),ye(Tm,$),wc(D(Hm,"s_Ysfvd0zsHZc",[h,c,u,l,t,g,i,o,e,a,s])),N(kt,null,3,"ni_3")},Ym=re(D(Gm,"s_p1yCGpFL1xE")),Jm=()=>{const e=jm(),t=Um();return N(fe,{children:[d("title",null,null,e.title,1,null),d("link",null,{rel:"canonical",href:se(n=>n.url.href,[t],"p0.url.href")},null,3,null),d("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),d("link",null,{rel:"icon",type:"image/png",href:"/ico.png"},null,3,null),e.meta.map(n=>Ft("meta",{...n},null,0,n.key)),e.links.map(n=>Ft("link",{...n},null,0,n.key)),e.styles.map(n=>{var r;return Ft("style",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)}),e.scripts.map(n=>{var r;return Ft("script",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key)})]},1,"0D_0")},Vm=re(D(Jm,"s_0vphQYqOdZI")),Km=`
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
    
    /* Additional desktop-only shapes */
    .shape-7 {
      width: 220px;
      height: 220px;
      top: 35%;
      right: 5%;
      animation: float 19s ease-in-out infinite, rotate 26s linear infinite;
      opacity: 0.4;
    }
    
    .shape-8 {
      width: 160px;
      height: 160px;
      bottom: 45%;
      right: 25%;
      animation: float 21s ease-in-out infinite reverse, rotate 29s linear infinite reverse;
      opacity: 0.6;
    }
    
    .shape-9 {
      width: 190px;
      height: 190px;
      top: 60%;
      right: 35%;
      animation: float 16s ease-in-out infinite, rotate 22s linear infinite;
      opacity: 0.5;
    }
    
    .shape-10 {
      width: 140px;
      height: 140px;
      top: 25%;
      right: 45%;
      animation: float 24s ease-in-out infinite reverse, rotate 31s linear infinite reverse;
      opacity: 0.7;
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
      
      /* Hide additional shapes on mobile */
      .shape-7, .shape-8, .shape-9, .shape-10 {
        display: none;
      }
    }
    
    @media (max-width: 480px) {
      .shape-1 { width: 180px; height: 180px; }
      .shape-2 { width: 150px; height: 150px; }
      .shape-3 { width: 100px; height: 100px; }
      .shape-4 { width: 130px; height: 130px; }
      .shape-5 { width: 90px; height: 90px; }
      .shape-6 { width: 160px; height: 160px; }
    }
  `,Xm=()=>(ut(D(Km,"s_5keZie0WZ7I")),d("div",null,{class:"background-shapes"},[d("div",null,{class:"shape shape-1 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-2 kiwi-fruit"},null,3,null),d("div",null,{class:"shape shape-3 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-4 kiwi-fruit"},null,3,null),d("div",null,{class:"shape shape-5 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-6 kiwi-fruit"},null,3,null),d("div",null,{class:"shape shape-7 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-8 kiwi-fruit"},null,3,null),d("div",null,{class:"shape shape-9 kiwi-skin"},null,3,null),d("div",null,{class:"shape shape-10 kiwi-fruit"},null,3,null)],3,"70_0")),Zm=re(D(Xm,"s_CIpJWWhXzoM")),ef=()=>N(Ym,{children:[d("head",null,null,[d("meta",null,{charset:"utf-8"},null,3,null),d("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"vp_0"),N(Vm,null,3,"vp_1")],1,null),d("body",null,{lang:"en"},[N(Zm,null,3,"vp_2"),N(Rm,null,3,"vp_3")],1,null)]},1,"vp_4"),tf=re(D(ef,"s_tntnak2DhJ8"));function nf(e){return _p(N(tf,null,3,"Qb_0"),{...e,containerAttributes:{lang:"en-us",...e.containerAttributes},serverData:{...e.serverData}})}const hf=Op({render:nf,qwikCityPlan:_m});export{hf as default};
