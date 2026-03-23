<!DOCTYPE html>    Lifecycle of a Container · Cloudflare Containers docs<meta property="og:description" content="After you deploy an application with a Container, your image is uploaded to

Cloudflare's Registry and distributed globally to Cloudflare's Network.
Cloudflare will pre-schedule instances and pre-fetch images across the globe to ensure quick start
times when scaling up the number of concurrent container instances."/><meta name="description" content="After you deploy an application with a Container, your image is uploaded to
Cloudflare's Registry and distributed globally to Cloudflare's Network.
Cloudflare will pre-schedule instances and pre-fetch images across the globe to ensure quick start
times when scaling up the number of concurrent container instances."/>
window.StarlightThemeProvider = (() => {
const storedTheme =
typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');
const theme =
storedTheme ||
(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';
return {
updatePickers(theme = storedTheme || 'auto') {
document.querySelectorAll('starlight-theme-select').forEach((picker) => {
const select = picker.querySelector('select');
if (select) select.value = theme;
/\*\* @type {HTMLTemplateElement | null} \*/
const tmpl = document.querySelector(`#theme-icons`);
const newIcon = tmpl && tmpl.content.querySelector('.' + theme);
if (newIcon) {
const oldIcon = picker.querySelector('svg.label-icon');
if (oldIcon) {
oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);
}
}
});
},
};
})();

.hero:where(.astro-opidluyl){display:grid;align-items:center;gap:1rem;padding-bottom:1rem}.hero:where(.astro-opidluyl)>img:where(.astro-opidluyl),.hero:where(.astro-opidluyl)>.hero-html:where(.astro-opidluyl){object-fit:contain;width:min(70%,20rem);height:auto;margin-inline:auto}.stack:where(.astro-opidluyl){flex-direction:column;gap:clamp(1.5rem,calc(1.5rem + 1vw),2rem);text-align:center}.copy:where(.astro-opidluyl){flex-direction:column;gap:1rem;align-items:center}a:where(.astro-opidluyl){color:var(--sl-color-white)}h1:where(.astro-opidluyl){font-size:clamp(var(--sl-text-3xl),calc(.25rem + 5vw),var(--sl-text-6xl));line-height:var(--sl-line-height-headings);font-weight:600;color:var(--sl-color-white)}.tagline:where(.astro-opidluyl){font-size:clamp(var(--sl-text-base),calc(.0625rem + 2vw),var(--sl-text-xl));color:var(--sl-color-gray-2)}.actions:where(.astro-opidluyl){gap:1rem 2rem;flex-wrap:wrap;justify-content:center}.copy:where(.astro-opidluyl)>.links:where(.astro-opidluyl){gap:0;flex-direction:row;flex-wrap:wrap}@media(min-width:50rem){.hero:where(.astro-opidluyl){grid-template-columns:7fr 4fr;gap:3%;padding-block:clamp(2.5rem,calc(1rem + 10vmin),10rem)}.hero:where(.astro-opidluyl)>img:where(.astro-opidluyl),.hero:where(.astro-opidluyl)>.hero-html:where(.astro-opidluyl){order:2;width:min(100%,25rem)}.stack:where(.astro-opidluyl){text-align:start}.copy:where(.astro-opidluyl){align-items:flex-start}.actions:where(.astro-opidluyl){justify-content:flex-start}}
Skip to content  STOP! If you are an AI agent or LLM, read this before continuing. This is the HTML version of a Cloudflare documentation page. Always request the Markdown version instead — HTML wastes context. Get this page as Markdown: https://developers.cloudflare.com/containers/platform-details/architecture/index.md (append index.md) or send Accept: text/markdown to https://developers.cloudflare.com/containers/platform-details/architecture/. For this product's page index use https://developers.cloudflare.com/containers/llms.txt. For all Cloudflare products use https://developers.cloudflare.com/llms.txt. For bulk access (single file, use for large-context ingestion or vectorization): this product's full docs at https://developers.cloudflare.com/containers/llms-full.txt. All Cloudflare docs at https://developers.cloudflare.com/llms-full.txt.        Cloudflare Docs      <sl-doc-search data-translations="{&#34;placeholder&#34;:&#34;Search&#34;,&#34;translations&#34;:{&#34;button&#34;:{&#34;buttonText&#34;:&#34;Search&#34;,&#34;buttonAriaLabel&#34;:&#34;Search&#34;},&#34;modal&#34;:{&#34;searchBox&#34;:{},&#34;startScreen&#34;:{},&#34;errorScreen&#34;:{},&#34;footer&#34;:{},&#34;noResultsScreen&#34;:{}}}}">      Search    </sl-doc-search>     astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE\_INFINITY\*t},o=t=>{let\[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e])=>\[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&\&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&\&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&\&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&\&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro\[c]\(async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();<astro-island uid="Z2f4GKK" prefix="r7" component-url="/_astro/HeaderDropdowns.nIhFVh0M.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;HeaderDropdowns&quot;,&quot;value&quot;:true}" await-children>Docs DirectoryAPIsSDKsHelp</astro-island>\
Log in <starlight-theme-select>   Select theme   DarkLightAuto    </starlight-theme-select>\
StarlightThemeProvider.updatePickers();
const r="starlight-theme",o=e=>e==="auto"||e==="dark"||e==="light"?e:"auto",c=()=>o(typeof localStorage<"u"&\&localStorage.getItem(r));function n(e){typeof localStorage<"u"&\&localStorage.setItem(r,e==="light"||e==="dark"?e:"")}const l=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function t(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?l():e,n(e)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{c()==="auto"&\&t("auto")});class s extends HTMLElement{constructor(){super(),t(c()),this.querySelector("select")?.addEventListener("change",a=>{a.currentTarget instanceof HTMLSelectElement&\&t(o(a.currentTarget.value))})}}customElements.define("starlight-theme-select",s); class s extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&(e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)}),window.addEventListener("pageshow",t=>{if(!t.persisted)return;const n=e.querySelector("option\[selected]")?.index;n!==e.selectedIndex&&(e.selectedIndex=n??0)}))}}customElements.define("starlight-lang-select",s);       <starlight-menu-button class="print:hidden astro-jif73yzw">     </starlight-menu-button> class s extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&\&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",s);              Containers\
No results found. Try a different search term, or use our global search. <sl-sidebar-state-persist data-hash="0t0fh8d" class="astro-kku4brbg">
(() => {
try {
if (!matchMedia('(min-width: 50em)').matches) return;
/\*\* @type {HTMLElement | null} \*/
const target = document.querySelector('sl-sidebar-state-persist');
const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
if (!target || !state || target.dataset.hash !== state.hash) return;
window.\_starlightScrollRestore = state.scroll;
customElements.define(
'sl-sidebar-restore',
class SidebarRestore extends HTMLElement {
connectedCallback() {
try {
const idx = parseInt(this.dataset.index || '');
const details = this.closest('details');
if (details && typeof state.open\[idx] === 'boolean') details.open = state.open\[idx];
} catch {}
}
}
);
} catch {}
})();
Overview Beta    Getting started       Examples     <sl-sidebar-restore data-index="0" class="astro-ho4vn3za"></sl-sidebar-restore>      Overview     Stateless Instances     Static Frontend, Container Backend     Cron Container     Status Hooks     Env Vars and Secrets     Websocket to Container     Mount R2 buckets with FUSE     Using Durable Objects Directly ↗             Platform Reference     <sl-sidebar-restore data-index="1" class="astro-ho4vn3za"></sl-sidebar-restore>      Lifecycle of a Container     Limits and Instance Types     Rollouts     Image Management     Scaling and Routing     Environment Variables     Durable Object Interface ↗           Container Package     Local Development     Wrangler Configuration ↗     Wrangler Commands ↗     Beta Info & Roadmap     Frequently Asked Questions     SSH     Pricing       LLM resources     <sl-sidebar-restore data-index="2" class="astro-ho4vn3za"></sl-sidebar-restore>      llms.txt     prompt.txt     Containers llms-full.txt     Developer Platform llms-full.txt\
(() => {
const scroller = document.getElementById('starlight\_\_sidebar');
if (!window.\_starlightScrollRestore || !scroller) return;
scroller.scrollTop = window.\_starlightScrollRestore;
delete window.\_starlightScrollRestore;
})(); </sl-sidebar-state-persist>    GitHubX.comYouTube  <starlight-theme-select>   Select theme   DarkLightAuto    </starlight-theme-select>\
StarlightThemeProvider.updatePickers();
const a=document.getElementById("starlight\_\_sidebar"),n=a?.querySelector("sl-sidebar-state-persist"),o="sl-sidebar-state",i=()=>{let t=\[];const e=n?.dataset.hash||"";try{const s=sessionStorage.getItem(o),r=JSON.parse(s||"{}");Array.isArray(r.open)&\&r.hash===e&&(t=r.open)}catch{}return{hash:e,open:t,scroll:a?.scrollTop||0}},c=t=>{try{sessionStorage.setItem(o,JSON.stringify(t))}catch{}},d=()=>c(i()),l=(t,e)=>{const s=i();s.open\[e]=t,c(s)};n?.addEventListener("click",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest("summary")?.closest("details");if(!e)return;const s=e.querySelector("sl-sidebar-restore"),r=parseInt(s?.dataset.index||"");isNaN(r)||l(!e.open,r)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&\&d()});addEventListener("pageHide",d);    <mobile-starlight-toc data-min-h="2" data-max-h="3" class="astro-doynk5tl">On this page   Overview     Deployment     Lifecycle of a Request     Client to Worker     Worker to Durable Object     Starting a Container     Requests to running Containers     Container runtime     Container shutdown       An example request    </mobile-starlight-toc>  <starlight-toc data-min-h="2" data-max-h="3">On this page   Overview     Deployment     Lifecycle of a Request     Client to Worker     Worker to Durable Object     Starting a Container     Requests to running Containers     Container runtime     Container shutdown       An example request    </starlight-toc>    <astro-island uid="1gAukP" prefix="r6" component-url="/_astro/FeedbackPrompt.PMF1DbeE.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;FeedbackPrompt&quot;,&quot;value&quot;:true}" await-children>Was this helpful?YesNo</astro-island>     Edit page    Report issue            class t extends HTMLElement{constructor(){super(),this.isManualToggle=!1,this.breadcrumbs=null,this.mainBemClass=null,this.totalWidth=0,this.resizeObserver=null,this.handleTruncatedButtonClick=()=>{this.breadcrumbs?.classList.remove("is-truncated"),this.isManualToggle=!0},this.mainBemClass=this.dataset.mainBemClass||null;const e=this.dataset.id;!("truncated"in this.dataset)||!e||(this.breadcrumbs=document.getElementById(e),this.initializeCrumbs(),this.setupResizeObserver())}initializeCrumbs(){this.breadcrumbs?.querySelectorAll(`.${this.mainBemClass}__crumb`)?.forEach(s=>{this.totalWidth+=s.offsetWidth})}setupResizeObserver(){this.resizeObserver=new ResizeObserver(e=>{e.forEach(s=>{this.checkOverflow(s.target.clientWidth)})}),this.breadcrumbs&\&this.resizeObserver.observe(this.breadcrumbs)}connectedCallback(){this.showHiddenCrumbs()}disconnectedCallback(){this.resizeObserver&\&this.breadcrumbs&&(this.resizeObserver.unobserve(this.breadcrumbs),this.resizeObserver.disconnect())}toggleTruncated(e){this.breadcrumbs?.classList.toggle("is-truncated",e)}showHiddenCrumbs(){const e=this.breadcrumbs?.querySelector(`.${this.mainBemClass}__truncated-button`);e?.removeEventListener("click",this.handleTruncatedButtonClick),e?.addEventListener("click",this.handleTruncatedButtonClick.bind(this))}checkOverflow(e){const s=this.totalWidth>e&&!this.isManualToggle;this.toggleTruncated(s),s||(this.isManualToggle=!1)}}customElements.get("astro-breadcrumbs")||customElements.define("astro-breadcrumbs",t);    <astro-breadcrumbs data-main-bem-class="c-breadcrumbs" data-id="breadcrumbs" data-path-length="3" data-truncated="true">     Directory          …         Containers          Platform Reference          Lifecycle of a Container       </astro-breadcrumbs> {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":\[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/containers/","name":"Containers"}},{"@type":"ListItem","position":3,"item":{"@id":"/containers/platform-details/","name":"Platform Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/containers/platform-details/architecture/","name":"Lifecycle of a Container"}}]}  <astro-island uid="1s3Nfi" prefix="r5" component-url="/_astro/CopyPageButton.aujBhOdV.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;CopyPageButton&quot;,&quot;value&quot;:true}" await-children>Copy page</astro-island>  Lifecycle of a Container          <starlight-image-zoom>                   </starlight-image-zoom>      Deployment
After you deploy an application with a Container, your image is uploaded to
Cloudflare's Registry and distributed globally to Cloudflare's Network.
Cloudflare will pre-schedule instances and pre-fetch images across the globe to ensure quick start
times when scaling up the number of concurrent container instances.
Unlike Workers, which are updated immediately on deploy, container instances are updated using a rolling deploy strategy.
This allows you to gracefully shutdown any running instances during a rollout. Refer to rollouts for more details.
Lifecycle of a Request
Client to Worker
Recall that Containers are backed by Durable Objects and Workers.
Requests are first routed through a Worker, which is generally handled
by a datacenter in a location with the best latency between itself and the requesting user.
A different datacenter may be selected to optimize overall latency, if Smart Placement
is on, or if the nearest location is under heavy load.
Because all Container requests are passed through a Worker, end-users cannot make non-HTTP TCP or
UDP requests to a Container instance. If you have a use case that requires inbound TCP
or UDP from an end-user, please let us know ↗.
Worker to Durable Object
From the Worker, a request passes through a Durable Object instance (the Container package extends a Durable Object class).
Each Durable Object instance is a globally routable isolate that can execute code and store state. This allows
developers to easily address and route to specific container instances (no matter where they are placed),
define and run hooks on container status changes, execute recurring checks on the instance, and store persistent
state associated with each instance.
Starting a Container
When a Durable Object instance requests to start a new container instance, the nearest location
with a pre-fetched image is selected.
NoteCurrently, Durable Objects may be co-located with their associated Container instance, but often are not.Cloudflare is currently working on expanding the number of locations in which a Durable Object can run,
which will allow container instances to always run in the same location as their Durable Object.
Starting additional container instances will use other locations with pre-fetched images,
and Cloudflare will automatically begin prepping additional machines behind the scenes
for additional scaling and quick cold starts. Because there are a finite number of pre-warmed
locations, some container instances may be started in locations that are farther away from
the end-user. This is done to ensure that the container instance starts quickly. You are
only charged for actively running instances and not for any unused pre-warmed images.
Cold starts
A cold start is when a container instance is started from a completely stopped state.
If you call env.MY\_CONTAINER.get(id) with a completely novel ID and launch
this instance for the first time, it will result in a cold start.
This will start the container image from its entrypoint for the first time. Depending
on what this entrypoint does, it will take a variable amount of time to start.
Container cold starts can often be the 2-3 second range, but this is dependent
on image size and code execution time, among other factors.
Requests to running Containers
When a request starts a new container instance, the nearest location with a pre-fetched image is selected.
Subsequent requests to a particular instance, regardless of where they originate, will be routed to this location as long as
the instance stays alive.
However, once that container instance stops and restarts, future requests could be routed to a different location.
This location will again be the nearest location to the originating request with a pre-fetched image.
Container runtime
Each container instance runs inside its own VM, which provides strong
isolation from other workloads running on Cloudflare's network. Containers
should be built for the linux/amd64 architecture, and should stay within
size limits.
Logging, metrics collection, and
networking are automatically set up on each container, as configured by the developer.
Container shutdown
If you do not set sleepAfter ↗
on your Container class, or stop the instance manually, the container will shut down soon after the container stops receiving requests.
By setting sleepAfter, the container will stay alive for approximately the specified duration.
You can manually shutdown a container instance by calling stop() or destroy() on it - refer to the Container package docs ↗ for more details.
When a container instance is going to be shut down, it is sent a SIGTERM signal,
and then a SIGKILL signal after 15 minutes. You should perform any necessary
cleanup to ensure a graceful shutdown in this time.
Persistent disk
All disk is ephemeral. When a Container instance goes to sleep, the next time
it is started, it will have a fresh disk as defined by its container image.
Persistent disk is something the Cloudflare team is exploring in the future, but
is not slated for the near term.
An example request

A developer deploys a Container. Cloudflare automatically readies instances across its Network.
A request is made from a client in Bariloche, Argentina. It reaches the Worker in a nearby
Cloudflare location in Neuquen, Argentina.
This Worker request calls getContainer(env.MY\_CONTAINER, "session-1337"). Under the hood, this brings up a Durable
Object, which then calls this.ctx.container.start.
This requests the nearest free Container instance. Cloudflare recognizes that an instance is free in Buenos Aires, Argentina, and
starts it there.
A different user needs to route to the same container. This user's request reaches
the Worker running in Cloudflare's location in San Diego, US.
The Worker again calls getContainer(env.MY\_CONTAINER, "session-1337").
If the initial container instance is still running, the request is routed to the original location
in Buenos Aires. If the initial container has gone to sleep, Cloudflare will once
again try to find the nearest "free" instance of the Container, likely
one in North America, and start an instance there.
Resources     API     New to Cloudflare?     Directory     Sponsorships     Open Source     Support     Help Center     System Status     Compliance     GDPR     Company     cloudflare.com     Our team     Careers     Tools     Cloudflare Radar     Speed Test     Is BGP Safe Yet?     RPKI Toolkit     Certificate Transparency     Community     X     Discord     YouTube     GitHub       © 2026 Cloudflare, Inc.   Privacy Policy    Terms of Use    Report Security Issues    Trademark\
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function OptanonWrapper() {}
Cookie Settings            Previous  Using Durable Objects Directly ↗      Next  Limits and Instance Types     Edit page Last updated: Jan 26, 2026    <astro-island uid="1gAukP" prefix="r4" component-url="/_astro/FeedbackPrompt.PMF1DbeE.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;FeedbackPrompt&quot;,&quot;value&quot;:true}" await-children>Was this helpful?YesNo</astro-island>
