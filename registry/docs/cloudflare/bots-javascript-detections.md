<!DOCTYPE html>    JavaScript Detections · Cloudflare challenges docs

```
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
				/** @type {HTMLTemplateElement | null} */
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
```

.hero:where(.astro-opidluyl){display:grid;align-items:center;gap:1rem;padding-bottom:1rem}.hero:where(.astro-opidluyl)>img:where(.astro-opidluyl),.hero:where(.astro-opidluyl)>.hero-html:where(.astro-opidluyl){object-fit:contain;width:min(70%,20rem);height:auto;margin-inline:auto}.stack:where(.astro-opidluyl){flex-direction:column;gap:clamp(1.5rem,calc(1.5rem + 1vw),2rem);text-align:center}.copy:where(.astro-opidluyl){flex-direction:column;gap:1rem;align-items:center}a:where(.astro-opidluyl){color:var(--sl-color-white)}h1:where(.astro-opidluyl){font-size:clamp(var(--sl-text-3xl),calc(.25rem + 5vw),var(--sl-text-6xl));line-height:var(--sl-line-height-headings);font-weight:600;color:var(--sl-color-white)}.tagline:where(.astro-opidluyl){font-size:clamp(var(--sl-text-base),calc(.0625rem + 2vw),var(--sl-text-xl));color:var(--sl-color-gray-2)}.actions:where(.astro-opidluyl){gap:1rem 2rem;flex-wrap:wrap;justify-content:center}.copy:where(.astro-opidluyl)>.links:where(.astro-opidluyl){gap:0;flex-direction:row;flex-wrap:wrap}@media(min-width:50rem){.hero:where(.astro-opidluyl){grid-template-columns:7fr 4fr;gap:3%;padding-block:clamp(2.5rem,calc(1rem + 10vmin),10rem)}.hero:where(.astro-opidluyl)>img:where(.astro-opidluyl),.hero:where(.astro-opidluyl)>.hero-html:where(.astro-opidluyl){order:2;width:min(100%,25rem)}.stack:where(.astro-opidluyl){text-align:start}.copy:where(.astro-opidluyl){align-items:flex-start}.actions:where(.astro-opidluyl){justify-content:flex-start}}
Skip to content  STOP! If you are an AI agent or LLM, read this before continuing. This is the HTML version of a Cloudflare documentation page. Always request the Markdown version instead — HTML wastes context. Get this page as Markdown: https://developers.cloudflare.com/cloudflare-challenges/challenge-types/javascript-detections/index.md (append index.md) or send Accept: text/markdown to https://developers.cloudflare.com/cloudflare-challenges/challenge-types/javascript-detections/. For this product's page index use https://developers.cloudflare.com/cloudflare-challenges/llms.txt. For all Cloudflare products use https://developers.cloudflare.com/llms.txt. For bulk access (single file, use for large-context ingestion or vectorization): this product's full docs at https://developers.cloudflare.com/cloudflare-challenges/llms-full.txt. All Cloudflare docs at https://developers.cloudflare.com/llms-full.txt.        Cloudflare Docs      <sl-doc-search data-translations="{&#34;placeholder&#34;:&#34;Search&#34;,&#34;translations&#34;:{&#34;button&#34;:{&#34;buttonText&#34;:&#34;Search&#34;,&#34;buttonAriaLabel&#34;:&#34;Search&#34;},&#34;modal&#34;:{&#34;searchBox&#34;:{},&#34;startScreen&#34;:{},&#34;errorScreen&#34;:{},&#34;footer&#34;:{},&#34;noResultsScreen&#34;:{}}}}">      Search    </sl-doc-search>     astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE\_INFINITY\*t},o=t=>{let\[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e])=>\[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&\&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&\&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&\&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&\&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro\[c]\(async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();<astro-island uid="Z2f4GKK" prefix="r7" component-url="/_astro/HeaderDropdowns.nIhFVh0M.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;HeaderDropdowns&quot;,&quot;value&quot;:true}" await-children>Docs DirectoryAPIsSDKsHelp</astro-island>\
Log in <starlight-theme-select>   Select theme   DarkLightAuto    </starlight-theme-select>\
StarlightThemeProvider.updatePickers();
const r="starlight-theme",o=e=>e==="auto"||e==="dark"||e==="light"?e:"auto",c=()=>o(typeof localStorage<"u"&\&localStorage.getItem(r));function n(e){typeof localStorage<"u"&\&localStorage.setItem(r,e==="light"||e==="dark"?e:"")}const l=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function t(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?l():e,n(e)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{c()==="auto"&\&t("auto")});class s extends HTMLElement{constructor(){super(),t(c()),this.querySelector("select")?.addEventListener("change",a=>{a.currentTarget instanceof HTMLSelectElement&\&t(o(a.currentTarget.value))})}}customElements.define("starlight-theme-select",s); class s extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&(e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)}),window.addEventListener("pageshow",t=>{if(!t.persisted)return;const n=e.querySelector("option\[selected]")?.index;n!==e.selectedIndex&&(e.selectedIndex=n??0)}))}}customElements.define("starlight-lang-select",s);       <starlight-menu-button class="print:hidden astro-jif73yzw">     </starlight-menu-button> class s extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&\&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",s);              Challenges\
No results found. Try a different search term, or use our global search. <sl-sidebar-state-persist data-hash="10f57ft" class="astro-kku4brbg">
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
Overview       Concepts     <sl-sidebar-restore data-index="0" class="astro-ho4vn3za"></sl-sidebar-restore>      Challenges     Clearance             Available Challenges     <sl-sidebar-restore data-index="1" class="astro-ho4vn3za"></sl-sidebar-restore>        Interstitial Challenge Pages     <sl-sidebar-restore data-index="4" class="astro-ho4vn3za"></sl-sidebar-restore>      Overview     Implementation     Challenge Passage     Detect a Challenge Page response     Resolve a Challenge     Additional configuration           Turnstile     JavaScript Detections             Reference     <sl-sidebar-restore data-index="2" class="astro-ho4vn3za"></sl-sidebar-restore>      Challenge solve rate (CSR)     Private Access Tokens (PAT)     Supported browsers     Supported languages             Troubleshooting     <sl-sidebar-restore data-index="3" class="astro-ho4vn3za"></sl-sidebar-restore>      Common issues     Challenge solve issues\
(() => {
const scroller = document.getElementById('starlight\_\_sidebar');
if (!window.\_starlightScrollRestore || !scroller) return;
scroller.scrollTop = window.\_starlightScrollRestore;
delete window.\_starlightScrollRestore;
})(); </sl-sidebar-state-persist>    GitHubX.comYouTube  <starlight-theme-select>   Select theme   DarkLightAuto    </starlight-theme-select>\
StarlightThemeProvider.updatePickers();
const a=document.getElementById("starlight\_\_sidebar"),n=a?.querySelector("sl-sidebar-state-persist"),o="sl-sidebar-state",i=()=>{let t=\[];const e=n?.dataset.hash||"";try{const s=sessionStorage.getItem(o),r=JSON.parse(s||"{}");Array.isArray(r.open)&\&r.hash===e&&(t=r.open)}catch{}return{hash:e,open:t,scroll:a?.scrollTop||0}},c=t=>{try{sessionStorage.setItem(o,JSON.stringify(t))}catch{}},d=()=>c(i()),l=(t,e)=>{const s=i();s.open\[e]=t,c(s)};n?.addEventListener("click",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest("summary")?.closest("details");if(!e)return;const s=e.querySelector("sl-sidebar-restore"),r=parseInt(s?.dataset.index||"");isNaN(r)||l(!e.open,r)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&\&d()});addEventListener("pageHide",d);    <mobile-starlight-toc data-min-h="2" data-max-h="3" class="astro-doynk5tl">On this page   Overview     Process     1. Enable JavaScript Detections     2. Enforce execution of JavaScript Detections     Prerequisites       API     Considerations     Limitations     If you enabled Bot Management before June 2020     If it is the first request to your website     If you have a Content Security Policy (CSP)     If you have ETags      </mobile-starlight-toc>  <starlight-toc data-min-h="2" data-max-h="3">On this page   Overview     Process     1. Enable JavaScript Detections     2. Enforce execution of JavaScript Detections     Prerequisites       API     Considerations     Limitations     If you enabled Bot Management before June 2020     If it is the first request to your website     If you have a Content Security Policy (CSP)     If you have ETags      </starlight-toc>    <astro-island uid="1gAukP" prefix="r6" component-url="/_astro/FeedbackPrompt.PMF1DbeE.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;FeedbackPrompt&quot;,&quot;value&quot;:true}" await-children>Was this helpful?YesNo</astro-island>     Edit page    Report issue            class t extends HTMLElement{constructor(){super(),this.isManualToggle=!1,this.breadcrumbs=null,this.mainBemClass=null,this.totalWidth=0,this.resizeObserver=null,this.handleTruncatedButtonClick=()=>{this.breadcrumbs?.classList.remove("is-truncated"),this.isManualToggle=!0},this.mainBemClass=this.dataset.mainBemClass||null;const e=this.dataset.id;!("truncated"in this.dataset)||!e||(this.breadcrumbs=document.getElementById(e),this.initializeCrumbs(),this.setupResizeObserver())}initializeCrumbs(){this.breadcrumbs?.querySelectorAll(`.${this.mainBemClass}__crumb`)?.forEach(s=>{this.totalWidth+=s.offsetWidth})}setupResizeObserver(){this.resizeObserver=new ResizeObserver(e=>{e.forEach(s=>{this.checkOverflow(s.target.clientWidth)})}),this.breadcrumbs&\&this.resizeObserver.observe(this.breadcrumbs)}connectedCallback(){this.showHiddenCrumbs()}disconnectedCallback(){this.resizeObserver&\&this.breadcrumbs&&(this.resizeObserver.unobserve(this.breadcrumbs),this.resizeObserver.disconnect())}toggleTruncated(e){this.breadcrumbs?.classList.toggle("is-truncated",e)}showHiddenCrumbs(){const e=this.breadcrumbs?.querySelector(`.${this.mainBemClass}__truncated-button`);e?.removeEventListener("click",this.handleTruncatedButtonClick),e?.addEventListener("click",this.handleTruncatedButtonClick.bind(this))}checkOverflow(e){const s=this.totalWidth>e&&!this.isManualToggle;this.toggleTruncated(s),s||(this.isManualToggle=!1)}}customElements.get("astro-breadcrumbs")||customElements.define("astro-breadcrumbs",t);    <astro-breadcrumbs data-main-bem-class="c-breadcrumbs" data-id="breadcrumbs" data-path-length="3" data-truncated="true">     Directory          …         Challenges          Available Challenges          JavaScript Detections       </astro-breadcrumbs> {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":\[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-challenges/","name":"Challenges"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-challenges/challenge-types/","name":"Available Challenges"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-challenges/challenge-types/javascript-detections/","name":"JavaScript Detections"}}]}  <astro-island uid="1s3Nfi" prefix="r5" component-url="/_astro/CopyPageButton.aujBhOdV.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;CopyPageButton&quot;,&quot;value&quot;:true}" await-children>Copy page</astro-island>  JavaScript Detections          <starlight-image-zoom>                   </starlight-image-zoom>      JavaScript Detections is a type of Challenge separate from Cloudflare’s Challenge Pages or Turnstile. Javascript Detections helps Cloudflare's bot solutions identify automated requests.
While Challenge Pages and Turnstile rely on client-side signals to determine the authenticity of a request, Bot Management’s JavaScript Detections relies on client-side signals and run on every single request made to your website.
Process
JavaScript Detections is implemented on your website via a lightweight, invisible JavaScript code snippet that follows Cloudflare's privacy standards ↗.
JavaScript is injected only in response to requests for HTML pages or page views, excluding AJAX calls. API and mobile application traffic is unaffected.
JavaScript Detections has a lifespan of 15 minutes. However, the code is injected again before the session expires. After page load, the script is deferred and utilizes a separate thread (where available) to ensure that performance impact is minimal. The snippets of JavaScript will contain a source pointing to the Challenge Platform, with paths that start with /cdn-cgi/challenge-platform/…
Once JavaScript Detections is injected on the HTML page, the visitor's browser will run the JavaScript code snippet and a cf\_clearance cookie is issued to the visitor. The information in JavaScript Detections is stored in the cf\_clearance cookie and is used to populate js\_detection.passed.

If the visitor is verified and a cf\_clearance cookie is issued, it will contain the outcome: cf.bot\_management.js.detection.passed = true
If the verification fails, the cookie will contain the outcome: cf.bot\_management.js.detection.passed = false

NoteThe cf\_clearance cookie cannot exceed the maximum size of 4096 bytes.
WarningEnforcement against bots does not occur even if the cookie is flagged false.You must enable JavaScript Detections and then create a custom WAF rule using the cf.bot\_management.js.detection.passed field to block or challenge a failed request.
When the visitor encounters a WAF custom rule on your website, the rule will check the outcome of the cf\_clearance cookie. The outcome of the cf\_clearance cookie determines whether the request passes, or is blocked or challenged.
Refer to the steps below to enable and enforce JavaScript Detections.

1. Enable JavaScript Detections
   For Bot Fight Mode customers, JavaScript Detections is automatically enabled and cannot be disabled.
   For Super Bot Fight Mode and Bot Management for Enterprise customers, JavaScript Detections is optional.

(() => {
class StarlightTabsRestore extends HTMLElement {
connectedCallback() {
const starlightTabs = this.closest('starlight-tabs');
if (!(starlightTabs instanceof HTMLElement) || typeof localStorage === 'undefined') return;
const syncKey = starlightTabs.dataset.syncKey;
if (!syncKey) return;
const label = localStorage.getItem(`starlight-synced-tabs__${syncKey}`);
if (!label) return;
const tabs = \[...starlightTabs?.querySelectorAll('\[role="tab"]')];
const tabIndexToRestore = tabs.findIndex(
(tab) => tab instanceof HTMLAnchorElement && tab.textContent?.trim() === label
);
const panels = starlightTabs?.querySelectorAll(':scope > \[role="tabpanel"]');
const newTab = tabs\[tabIndexToRestore];
const newPanel = panels\[tabIndexToRestore];
if (tabIndexToRestore < 1 || !newTab || !newPanel) return;
tabs\[0]?.setAttribute('aria-selected', 'false');
tabs\[0]?.setAttribute('tabindex', '-1');
panels?.\[0]?.setAttribute('hidden', 'true');
newTab.removeAttribute('tabindex');
newTab.setAttribute('aria-selected', 'true');
newPanel.removeAttribute('hidden');
}
}
customElements.define('starlight-tabs-restore', StarlightTabsRestore);
})() <starlight-tabs data-sync-key="dashNewNav" class="astro-esqgolmp">      New dashboard     Old dashboard

In the Cloudflare dashboard, go to the Security Settings page.
Go to Settings

Under your bot traffic plan configurations, select the edit icon for JS detections and turn JavaScript Detections on.

Log in to the Cloudflare dashboard ↗, and select your account and domain.
Go to Security > Bots.
Select Configure Bot Management.
For JavaScript Detections, switch the toggle to On. <starlight-tabs-restore class="astro-esqgolmp"></starlight-tabs-restore> </starlight-tabs>

For more details on how to set up bot protection, refer to the Bots documentation.
2\. Enforce execution of JavaScript Detections
Once you enable JavaScript detections, you must use the cf.bot\_management.js\_detection.passed field to create WAF custom rules (or the request.cf.botManagement.jsDetection.passed variable in Workers).
When adding this field to WAF custom rules, it is used on endpoints expecting browser traffic (avoiding native mobile applications or websocket endpoints), after a user's first request to your application (Cloudflare needs at least one HTML request before injecting JavaScript detection), and with the Managed Challenge action, because there are legitimate reasons a user might not have passed a JavaScript Detection challenge (network issues, ad blockers, disabled JavaScript in browser, native mobile applications).
Prerequisites

You must have an Enterprise Bot Management subscription.
You must have JavaScript Detections enabled on your zone.
You must have updated your Content Security Policy headers for JavaScript detections.
You must not run this field on websocket endpoints.
You must use the field in a custom rules expression that expects only browser traffic.
The action should always be a managed challenge in case a legitimate user has not received the challenge for network or browser reasons.
The path specified in the rule builder should never be the first HTML page a user visits when browsing your site.

The cf.bot\_management.js\_detection.passed field should never be used in a WAF custom rule that matches a visitor's first request to a site. It is necessary to have at least one HTML request before Cloudflare can inject JavaScript detection. <starlight-tabs class="astro-esqgolmp">      WAF rule example     Workers example      (http.request.uri.path eq "/api/v4/user/create" and http.request.method eq "POST" and not cf.bot\_management.verified\_bot)and (cf.bot\_management.score lt 30 or !cf.bot\_management.js\_detection.passed)  JavaScript"botManagement": {"jsDetection": {    "passed": false}}   </starlight-tabs>  class r extends HTMLElement{static#e=new Map;#t;#n="starlight-synced-tabs\_\_";constructor(){super();const t=this.querySelector('\[role="tablist"]');if(this.tabs=\[...t.querySelectorAll('\[role="tab"]')],this.panels=\[...this.querySelectorAll(':scope > \[role="tabpanel"]')],this.#t=this.dataset.syncKey,this.#t){const i=r.#e.get(this.#t)??\[];i.push(this),r.#e.set(this.#t,i)}this.tabs.forEach((i,c)=>{i.addEventListener("click",e=>{e.preventDefault();const n=t.querySelector('\[aria-selected="true"]');e.currentTarget!==n&\&this.switchTab(e.currentTarget,c)}),i.addEventListener("keydown",e=>{const n=this.tabs.indexOf(e.currentTarget),s=e.key==="ArrowLeft"?n-1:e.key==="ArrowRight"?n+1:e.key==="Home"?0:e.key==="End"?this.tabs.length-1:null;s!==null&\&this.tabs\[s]&&(e.preventDefault(),this.switchTab(this.tabs\[s],s))})})}switchTab(t,i,c=!0){if(!t)return;const e=c?this.getBoundingClientRect().top:0;this.tabs.forEach(s=>{s.setAttribute("aria-selected","false"),s.setAttribute("tabindex","-1")}),this.panels.forEach(s=>{s.hidden=!0});const n=this.panels\[i];n&&(n.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),c&&(t.focus(),r.#r(this,t),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-e),behavior:"instant"}))}#i(t){!this.#t||typeof localStorage>"u"||localStorage.setItem(this.#n+this.#t,t)}static#r(t,i){const c=t.#t,e=r.#s(i);if(!c||!e)return;const n=r.#e.get(c);if(n){for(const s of n){if(s===t)continue;const a=s.tabs.findIndex(o=>r.#s(o)===e);a!==-1&\&s.switchTab(s.tabs\[a],a,!1)}t.#i(e)}}static#s(t){return t.textContent?.trim()}}customElements.define("starlight-tabs",r);
Refer to the WAF documentation for more information on creating a custom rule.
API
If you enable JavaScript Detections via the dashboard, Cloudflare will insert a script tag in all HTML pages served on your website. If you would prefer to limit where JavaScript Detections is served, you can do so with the JavaScript Detections API script.
The JavaScript Detections API allows you more granular control over when and where JavaScript Detections is injected on your website, as well as an option for callback handling (for logging or other additional actions).
You can explicitly add a script reference to /cdn-cgi/challenge-platform/scripts/jsd/api.js and your own code calling window.cloudflare.jsd.executeOnce on specific HTML pages of your website.
WarningIt is not recommended to combine both approaches (zone-wide toggle and the manual injection). If you want to selectively deploy JavaScript Detections only on certain pages, disable JavaScript Detections via the Cloudflare dashboard and use the JavaScript Detections API exclusively.
The following script must be added to every page that you wish to have JavaScript Detections enabled:
JavaScript\<script>
function jsdOnload(){  window.cloudflare.jsd.executeOnce(    {      callback: function(result){        console.log('jsd outcome', result);    }  );}\</script>\<script src="/cdn-cgi/challenge-platform/scripts/jsd/api.js?onload=jsdOnload" async>function jsdOnload(){  window.cloudflare.jsd.executeOnce(    {      callback: function(result){        console.log('jsd outcome', result);    }  );}">
Noteresult = success or error only refers to the execution of JavaScript Detections. It does not indicate whether a visitor is a human or a bot.
Considerations
JavaScript Detections does not guarantee a specific bot score.

If the JavaScript Detections injection or execution fails and cf.bot\_management.js\_detection.passed = false, a separate Bot Management heuristic can still yield a 1 or higher bot score, independent of JavaScript Detections.
If the JavaScript Detections passes, the final bot score may still be 1 due to other detection heuristics (for example, known malicious IP, signature detection, and more), resulting in js\_detection.passed = true, but score = 1.

Limitations
If you enabled Bot Management before June 2020
Customers who enabled Enterprise Bot Management before June 2020 do not have JavaScript Detections enabled by default (unless specifically requested). These customers can still enable the feature in the Cloudflare dashboard.
If it is the first request to your website
The first request from a new client to your website or application will generally not have JavaScript Detections data (cf.bot\_management.js\_detection.passed = false). This is because Cloudflare needs at least one HTML request before injecting JavaScript Detection and issuing the cf\_clearance cookie.
Subsequent requests can include a cf\_clearance cookie if JavaScript ran successfully.
If you have a Content Security Policy (CSP)
If you have a An added layer of security that helps detect and mitigate certain types of attacks such as cross-site scripting (XSS) attacks.
" class="border-b-2 border-dashed border-accent" tabindex="0">Content Security Policy (CSP), you need to take additional steps to implement JavaScript Detections:

Ensure that anything under /cdn-cgi/challenge-platform/ is allowed. Your CSP should allow scripts served from your origin domain (script-src self).
For nonce script tags:

If your CSP uses a nonce for script tags, Cloudflare will add these nonces to the scripts it injects by parsing your CSP response header.

If your CSP does not use nonce for script tags and JavaScript Detections is enabled, you may see a console error such as Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-b123b8a70+4jEj+d6gWI9U6IilUJIrlnRJbRR/uQl2Jc='), or a nonce ('nonce-...') is required to enable inline execution. We highly discourage the use of unsafe-inline and instead recommend the use CSP nonces in script tags which we parse and support in our CDN.

WarningJavaScript Detections is not supported with nonce set via \<meta> tags.
If you have ETags
Enabling JavaScript Detections (JSD) will strip ETags from HTML responses where JSD is injected.        Resources     API     New to Cloudflare?     Directory     Sponsorships     Open Source     Support     Help Center     System Status     Compliance     GDPR     Company     cloudflare.com     Our team     Careers     Tools     Cloudflare Radar     Speed Test     Is BGP Safe Yet?     RPKI Toolkit     Certificate Transparency     Community     X     Discord     YouTube     GitHub       © 2026 Cloudflare, Inc.   Privacy Policy    Terms of Use    Report Security Issues    Trademark\
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function OptanonWrapper() {}
Cookie Settings            Previous  Turnstile      Next  Challenge solve rate (CSR)     Edit page Last updated: Feb 17, 2026    <astro-island uid="1gAukP" prefix="r4" component-url="/_astro/FeedbackPrompt.PMF1DbeE.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;FeedbackPrompt&quot;,&quot;value&quot;:true}" await-children>Was this helpful?YesNo</astro-island>
