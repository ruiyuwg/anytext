<!DOCTYPE html>    Configure tunnel endpoints · Cloudflare Magic Transit docs

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
Skip to content  STOP! If you are an AI agent or LLM, read this before continuing. This is the HTML version of a Cloudflare documentation page. Always request the Markdown version instead — HTML wastes context. Get this page as Markdown: https://developers.cloudflare.com/magic-transit/how-to/configure-tunnel-endpoints/index.md (append index.md) or send Accept: text/markdown to https://developers.cloudflare.com/magic-transit/how-to/configure-tunnel-endpoints/. For this product's page index use https://developers.cloudflare.com/magic-transit/llms.txt. For all Cloudflare products use https://developers.cloudflare.com/llms.txt. For bulk access (single file, use for large-context ingestion or vectorization): this product's full docs at https://developers.cloudflare.com/magic-transit/llms-full.txt. All Cloudflare docs at https://developers.cloudflare.com/llms-full.txt.        Cloudflare Docs      <sl-doc-search data-translations="{&#34;placeholder&#34;:&#34;Search&#34;,&#34;translations&#34;:{&#34;button&#34;:{&#34;buttonText&#34;:&#34;Search&#34;,&#34;buttonAriaLabel&#34;:&#34;Search&#34;},&#34;modal&#34;:{&#34;searchBox&#34;:{},&#34;startScreen&#34;:{},&#34;errorScreen&#34;:{},&#34;footer&#34;:{},&#34;noResultsScreen&#34;:{}}}}">      Search    </sl-doc-search>     astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE\_INFINITY\*t},o=t=>{let\[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e])=>\[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&\&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&\&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&\&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&\&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro\[c]\(async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();<astro-island uid="Z2f4GKK" prefix="r7" component-url="/_astro/HeaderDropdowns.nIhFVh0M.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;HeaderDropdowns&quot;,&quot;value&quot;:true}" await-children>Docs DirectoryAPIsSDKsHelp</astro-island>\
Log in <starlight-theme-select>   Select theme   DarkLightAuto    </starlight-theme-select>\
StarlightThemeProvider.updatePickers();
const r="starlight-theme",o=e=>e==="auto"||e==="dark"||e==="light"?e:"auto",c=()=>o(typeof localStorage<"u"&\&localStorage.getItem(r));function n(e){typeof localStorage<"u"&\&localStorage.setItem(r,e==="light"||e==="dark"?e:"")}const l=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function t(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?l():e,n(e)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{c()==="auto"&\&t("auto")});class s extends HTMLElement{constructor(){super(),t(c()),this.querySelector("select")?.addEventListener("change",a=>{a.currentTarget instanceof HTMLSelectElement&\&t(o(a.currentTarget.value))})}}customElements.define("starlight-theme-select",s); class s extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&(e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)}),window.addEventListener("pageshow",t=>{if(!t.persisted)return;const n=e.querySelector("option\[selected]")?.index;n!==e.selectedIndex&&(e.selectedIndex=n??0)}))}}customElements.define("starlight-lang-select",s);       <starlight-menu-button class="print:hidden astro-jif73yzw">     </starlight-menu-button> class s extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&\&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",s);              Magic Transit\
No results found. Try a different search term, or use our global search. <sl-sidebar-state-persist data-hash="004nz2f" class="astro-kku4brbg">
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
Overview     About     Get started       How to     <sl-sidebar-restore data-index="0" class="astro-ho4vn3za"></sl-sidebar-restore>      Configure tunnel endpoints     Configure routes     Configure IPv6 (beta) Beta    Advertise prefixes     Safely withdraw a BYOIP prefix     Enable Magic user roles             Network health     <sl-sidebar-restore data-index="1" class="astro-ho4vn3za"></sl-sidebar-restore>      Overview     Run endpoint health checks Beta    Check tunnel health in the dashboard     Update tunnel health checks frequency     Configure tunnel health alerts     How Cloudflare calculates tunnel health alerts ↗           DDoS protection       Analytics     <sl-sidebar-restore data-index="2" class="astro-ho4vn3za"></sl-sidebar-restore>      Overview     Network Analytics     Traceroutes     Packet captures ↗     Query Magic Transit tunnel bandwidth analytics with GraphQL     Query Magic Transit tunnel health check results with GraphQL           Network Flow     Cloudflare IPs     Magic Transit on-demand     Network Interconnect (CNI)     Alerts       Partners     <sl-sidebar-restore data-index="3" class="astro-ho4vn3za"></sl-sidebar-restore>      Kentik             Troubleshooting     <sl-sidebar-restore data-index="4" class="astro-ho4vn3za"></sl-sidebar-restore>      Troubleshoot with IPsec logs     Troubleshoot tunnel health     Troubleshoot connectivity     Troubleshoot routing and BGP             Reference     <sl-sidebar-restore data-index="5" class="astro-ho4vn3za"></sl-sidebar-restore>      Anti-replay protection     Bandwidth measurement     Egress traffic     GRE and IPsec tunnels     MTU and MSS     Reference architecture ↗     Traffic steering     Tunnel health checks     How Cloudflare calculates tunnel health alerts           Changelog     Glossary\
(() => {
const scroller = document.getElementById('starlight\_\_sidebar');
if (!window.\_starlightScrollRestore || !scroller) return;
scroller.scrollTop = window.\_starlightScrollRestore;
delete window.\_starlightScrollRestore;
})(); </sl-sidebar-state-persist>    GitHubX.comYouTube  <starlight-theme-select>   Select theme   DarkLightAuto    </starlight-theme-select>\
StarlightThemeProvider.updatePickers();
const a=document.getElementById("starlight\_\_sidebar"),n=a?.querySelector("sl-sidebar-state-persist"),o="sl-sidebar-state",i=()=>{let t=\[];const e=n?.dataset.hash||"";try{const s=sessionStorage.getItem(o),r=JSON.parse(s||"{}");Array.isArray(r.open)&\&r.hash===e&&(t=r.open)}catch{}return{hash:e,open:t,scroll:a?.scrollTop||0}},c=t=>{try{sessionStorage.setItem(o,JSON.stringify(t))}catch{}},d=()=>c(i()),l=(t,e)=>{const s=i();s.open\[e]=t,c(s)};n?.addEventListener("click",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest("summary")?.closest("details");if(!e)return;const s=e.querySelector("sl-sidebar-restore"),r=parseInt(s?.dataset.index||"");isNaN(r)||l(!e.open,r)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&\&d()});addEventListener("pageHide",d);    <mobile-starlight-toc data-min-h="2" data-max-h="3" class="astro-doynk5tl">On this page   Overview     Before you begin     Ways to onboard traffic to Cloudflare     GRE and IPsec tunnels     Network Interconnect (CNI)       Add tunnels     Bidirectional vs unidirectional health checks     Legacy bidirectional health checks       Next steps     Troubleshooting    </mobile-starlight-toc>  <starlight-toc data-min-h="2" data-max-h="3">On this page   Overview     Before you begin     Ways to onboard traffic to Cloudflare     GRE and IPsec tunnels     Network Interconnect (CNI)       Add tunnels     Bidirectional vs unidirectional health checks     Legacy bidirectional health checks       Next steps     Troubleshooting    </starlight-toc>    <astro-island uid="1gAukP" prefix="r6" component-url="/_astro/FeedbackPrompt.PMF1DbeE.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;FeedbackPrompt&quot;,&quot;value&quot;:true}" await-children>Was this helpful?YesNo</astro-island>     Edit page    Report issue            class t extends HTMLElement{constructor(){super(),this.isManualToggle=!1,this.breadcrumbs=null,this.mainBemClass=null,this.totalWidth=0,this.resizeObserver=null,this.handleTruncatedButtonClick=()=>{this.breadcrumbs?.classList.remove("is-truncated"),this.isManualToggle=!0},this.mainBemClass=this.dataset.mainBemClass||null;const e=this.dataset.id;!("truncated"in this.dataset)||!e||(this.breadcrumbs=document.getElementById(e),this.initializeCrumbs(),this.setupResizeObserver())}initializeCrumbs(){this.breadcrumbs?.querySelectorAll(`.${this.mainBemClass}__crumb`)?.forEach(s=>{this.totalWidth+=s.offsetWidth})}setupResizeObserver(){this.resizeObserver=new ResizeObserver(e=>{e.forEach(s=>{this.checkOverflow(s.target.clientWidth)})}),this.breadcrumbs&\&this.resizeObserver.observe(this.breadcrumbs)}connectedCallback(){this.showHiddenCrumbs()}disconnectedCallback(){this.resizeObserver&\&this.breadcrumbs&&(this.resizeObserver.unobserve(this.breadcrumbs),this.resizeObserver.disconnect())}toggleTruncated(e){this.breadcrumbs?.classList.toggle("is-truncated",e)}showHiddenCrumbs(){const e=this.breadcrumbs?.querySelector(`.${this.mainBemClass}__truncated-button`);e?.removeEventListener("click",this.handleTruncatedButtonClick),e?.addEventListener("click",this.handleTruncatedButtonClick.bind(this))}checkOverflow(e){const s=this.totalWidth>e&&!this.isManualToggle;this.toggleTruncated(s),s||(this.isManualToggle=!1)}}customElements.get("astro-breadcrumbs")||customElements.define("astro-breadcrumbs",t);    <astro-breadcrumbs data-main-bem-class="c-breadcrumbs" data-id="breadcrumbs" data-path-length="3" data-truncated="true">     Directory          …         Magic Transit          How to          Configure tunnel endpoints       </astro-breadcrumbs> {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":\[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/magic-transit/","name":"Magic Transit"}},{"@type":"ListItem","position":3,"item":{"@id":"/magic-transit/how-to/","name":"How to"}},{"@type":"ListItem","position":4,"item":{"@id":"/magic-transit/how-to/configure-tunnel-endpoints/","name":"Configure tunnel endpoints"}}]}  <astro-island uid="1s3Nfi" prefix="r5" component-url="/_astro/CopyPageButton.aujBhOdV.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;CopyPageButton&quot;,&quot;value&quot;:true}" await-children>Copy page</astro-island>  Configure tunnel endpoints          <starlight-image-zoom>                   </starlight-image-zoom>      Cloudflare recommends two tunnels for each ISP and network location router combination, one per Cloudflare endpoint. Cloudflare assigns two endpoint addresses to your account that you can use as the tunnel destinations on your network location's routers/endpoints. You can find these addresses in the Cloudflare dashboard under Address Space > Leased IPs ↗.
Before you begin
Before creating a tunnel, make sure you have the following information:

Cloudflare endpoint addresses: The anycast IP addresses assigned to your account. You can find them in the Cloudflare dashboard under Address Space > Leased IPs ↗.
Customer endpoint IP: A public Internet routable IP address outside of the prefixes Cloudflare will advertise on your behalf (typically provided by your ISP). Not required if using Cloudflare Network Interconnect or for Stands for Internet Protocol secure. It is a group of protocols for securing connections between devices, by encrypting IP packets.
" class="border-b-2 border-dashed border-accent" tabindex="0">IPsec tunnels (unless your router uses an The protocol Cloudflare uses to create the IPsec tunnel between Cloudflare WAN and the customer\&#39;s device.
" class="border-b-2 border-dashed border-accent" tabindex="0">IKE ID of type ID\_IPV4\_ADDR).
Interface address: A /31 (recommended) or /30 subnet from RFC 1918 private IP space (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) or 169.254.240.0/20.

WarningMake sure the interface address prefixes are always within the allowed Cloudflare ranges, especially for cloud service providers that might automatically generate prefixes for you. Otherwise, the tunnel will not work.
Ways to onboard traffic to Cloudflare
GRE and IPsec tunnels
You can use GRE or IPsec tunnels to onboard your traffic to Magic Transit, and set them up through the Cloudflare dashboard or the API. If you use the API, you need your account ID and API key.
Anycast routingCloudflare uses anycast to route traffic. Anycast is a network addressing and routing method that routes incoming requests to different locations. Traffic can arrive at a different geographic location than expected. Not all requests go to the closest data center because Internet routing and peering relationships are complex, and Cloudflare optimizes for performance and reliability.
Choose between GRE and IPsec

FeatureGREIPsecEncryptionNoYesAuthenticationNoPre-shared key (PSK)Setup complexitySimplerRequires PSK exchangeBest forTrusted networks, CNI connectionsInternet-facing connections requiring encryption
Refer to Tunnels and encapsulation to learn more about the technical requirements for both tunnel types.
IPsec supported ciphers
Refer to supported ciphers for IPsec for a complete list. IPsec tunnels only support Internet Key Exchange version 2 (IKEv2).
Anti-replay protection
If you use Magic Transit and Anycast is a network addressing and routing method in which incoming requests can be routed to a variety of different locations. Anycast typically routes incoming traffic to the nearest data center with the capacity to process the request efficiently.
" class="border-b-2 border-dashed border-accent" tabindex="0">anycast IPsec tunnels, we recommend disabling anti-replay protection. Cloudflare disables this setting by default. However, you can enable it through the API or the Cloudflare dashboard for devices that do not support disabling it, including Cisco Meraki, Velocloud, and AWS VPN Gateway.
Refer to Anti-replay protection for more information on this topic, or Add IPsec tunnels to learn how to enable this feature.
Network Interconnect (CNI)
Beyond GRE and IPsec tunnels, you can also use Network Interconnect (CNI) to onboard your traffic to Magic Transit. Refer to Network Interconnect (CNI) for more information.
Add tunnels
WarningCloudflare Network Firewall rules apply to Internet Control Message Protocol (ICMP) traffic. If you enable Cloudflare Network Firewall, ensure your rules allow ICMP traffic sourced from Cloudflare public IPs. Otherwise, A probe sent by Cloudflare to check for tunnel health. If a tunnel is not considered healthy, Cloudflare reroutes traffic to one that is considered healthy.
" class="border-b-2 border-dashed border-accent" tabindex="0">health checks will fail. Refer to Cloudflare Network Firewall rules for more information.

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
})() <starlight-tabs data-sync-key="dashPlusAPI" class="astro-esqgolmp">      Dashboard     API\
Go to Connectors page.

Go to Connectors\
From the IPsec/GRE tunnels tab, select Create a tunnel.
On the Add tunnels page, choose either a GRE tunnel or IPsec tunnel.

In Name, give your tunnel a descriptive name. This name must be unique, cannot contain spaces or special characters, and cannot be shared with other tunnels.
(Optional) Give your tunnel a description in Description.
In IPv4 Interface address, enter the internal IP address for your tunnel along with the interface's prefix length (/31 or /30). This is used to route traffic through the tunnel on the Cloudflare side. We recommend using a /31 subnet, as it provides the most efficient use of IP address space.
Expand the section below for your tunnel type to complete the configuration: GRE tunnel

In Customer GRE endpoint, enter your router's public IP address. You do not need this value if you use a physical or virtual connection like Cloudflare Network Interconnect because Cloudflare provides it.

In Cloudflare GRE endpoint, enter one of the anycast addresses assigned to your account. You can find them in Leased IPs ↗.

(Optional) Leave the default values for TTL and MTU, or customize them for your network.

(Optional) Configure health check settings. Expand the following to learn more about each option:
Health check options

Tunnel health checks: Enabled by default. If you disable tunnel health checks, your tunnels appear 100% down in your tunnel health dashboard even when working. Cloudflare keeps sending traffic through the tunnel without the means to detect if the tunnel goes down. You must set up your own system to detect down tunnels, as Cloudflare cannot warn you about down tunnels. Refer to Tunnel health checks for more information.
Health check rate: If you keep tunnel health checks enabled, choose a health check rate for your tunnel. Available options are Low, Medium, and High.
Health check type: Defaults to Reply and to creating an ICMP (Internet Control Message Protocol) reply. If your firewall drops this type of packet because it assumes the packet is an attack, change this option to Request which creates an ICMP request. Refer to Tunnel health checks for more information.
Health check direction: Defaults to unidirectional for Magic Transit. Refer to Bidirectional vs unidirectional health checks for more details.
Health check target: The customer end of the tunnel. This field is only visible when Health check direction is set to Unidirectional.

(Optional) We recommend you test your tunnel before officially adding it. To test the tunnel, select Test tunnels.

To add multiple tunnels, select Add GRE tunnel for each new tunnel.

After adding your tunnel information, select Add tunnels.

(Optional) Select Allow BGP (Border Gateway Protocol) peering (beta) if you want to dynamically exchange routes between your network and Cloudflare. This feature requires Unified Routing (beta).  BGP is recommended for environments with frequently changing routes or when you need automatic failover. Refer to Configure BGP routes for more information.

IPsec tunnel

(Optional) In Customer endpoint, enter your router's public IP address. This value is only required if your router uses an IKE ID of type ID\_IPV4\_ADDR.

In Cloudflare endpoint, enter one of the anycast addresses assigned to your account. You can find them in Leased IPs ↗.

(Optional) Configure health check settings. Expand the following to learn more about each option:
Health check options

Tunnel health checks: Enabled by default. If you disable tunnel health checks, your tunnels appear 100% down in your tunnel health dashboard even when working. Cloudflare keeps sending traffic through the tunnel without the means to detect if the tunnel goes down. You must set up your own system to detect down tunnels, as Cloudflare cannot warn you about down tunnels. Refer to Tunnel health checks for more information.
Health check rate: If you keep tunnel health checks enabled, choose a health check rate for your tunnel. Available options are Low, Medium, and High.
Health check type: Defaults to Reply and to creating an ICMP (Internet Control Message Protocol) reply. If your firewall drops this type of packet because it assumes the packet is an attack, change this option to Request which creates an ICMP request. Refer to Tunnel health checks for more information.
Health check direction: Defaults to unidirectional for Magic Transit. Refer to Bidirectional vs unidirectional health checks for more details.
Health check target: The customer end of the tunnel. This field is only visible when Health check direction is set to Unidirectional.

NoteIPsec tunnels will not function without a pre-shared key (PSK).

If you do not have a pre-shared key yet:

Select Add pre-shared key later.
(Optional) We recommend you test your tunnel configuration before officially adding it. To test the tunnel, select Test tunnels.
Select Add tunnels.
The Cloudflare dashboard loads the list of tunnels you have configured. The IPsec tunnel you just created displays a warning triangle icon to indicate it is not yet functional. Select Edit.
Choose Generate a new pre-shared key > Update and generate a pre-shared key. Save the key to a safe place, and select Done.

If you already have a pre-shared key:

Select Use my own pre-shared key.
Paste your key in Your pre-shared key.
(Optional) We recommend you test your tunnel before officially adding it. To test the tunnel, select Test tunnels.
Select Add tunnels.

(Optional) Enable Replay protection if you have devices that do not support disabling it. Refer to Anti-replay protection for more information.

To add multiple tunnels, select Add IPsec tunnel for each new tunnel.

After adding your tunnel information, select Add tunnels.

(Optional) Select Allow BGP (Border Gateway Protocol) peering (beta) if you want to dynamically exchange routes between your network and Cloudflare. This feature requires Unified Routing (beta).  BGP is recommended for environments with frequently changing routes or when you need automatic failover. Refer to Configure BGP routes for more information.

NoteYou will need your account ID and API token to use the API. GRE tunnel
Create a POST request using the API to create a GRE tunnel. Required API token permissions

At least one of the following token permissions
is required:
Magic WAN WriteMagic Transit Write Create a GRE tunnelcurl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT\_ID/magic/gre\_tunnels" \  --request POST \  --header "Authorization: Bearer $CLOUDFLARE\_API\_TOKEN" \  --json '{    "name": "\<TUNNEL\_NAME>",    "description": "\<TUNNEL\_DESCRIPTION>",    "interface\_address": "\<INTERFACE\_ADDRESS>",    "cloudflare\_gre\_endpoint": "\<CLOUDFLARE\_ENDPOINT>",    "customer\_gre\_endpoint": "\<CUSTOMER\_ENDPOINT>"  }'",    "description": "\<TUNNEL\_DESCRIPTION>",    "interface\_address": "\<INTERFACE\_ADDRESS>",    "cloudflare\_gre\_endpoint": "\<CLOUDFLARE\_ENDPOINT>",    "customer\_gre\_endpoint": "\<CUSTOMER\_ENDPOINT>"  }'">.expressive-code:has(figure.code-output){margin-top:0.25rem !important}.expressive-code .code-output > pre{background:var(--sl-color-gray-6) !important}.expressive-code .code-output > pre > code{transition:opacity 0.5s ease}.expressive-code .code-output > pre > code:hover{opacity:0.5}{  "errors": \[    {      "code": 1000,      "message": "message"    }  ],  "messages": \[    {      "code": 1000,      "message": "message"    }  ],  "result": {    "gre\_tunnels": \[      {        "cloudflare\_gre\_endpoint": "\<IP\_ADDRESS>",        "customer\_gre\_endpoint": "\<IP\_ADDRESS>",        "interface\_address": "\<INTERFACE\_CIDR>",        "name": "\<TUNNEL\_NAME>",        "description": "\<TUNNEL\_DESCRIPTION>",        "health\_check": {          "direction": "unidirectional",          "enabled": true,          "rate": "low",          "type": "reply"        },        "mtu": 0,        "ttl": 0      }    ]  },  "success": true}",        "customer\_gre\_endpoint": "\<IP\_ADDRESS>",        "interface\_address": "\<INTERFACE\_CIDR>",        "name": "\<TUNNEL\_NAME>",        "description": "\<TUNNEL\_DESCRIPTION>",        "health\_check": {          "direction": "unidirectional",          "enabled": true,          "rate": "low",          "type": "reply"        },        "mtu": 0,        "ttl": 0      }    ]  },  "success": true}">  IPsec tunnel

Create a POST request using the API to create an IPsec tunnel.
Note that in the example, replay protection is disabled by default. You can enable it with the flag "replay\_protection": true for each IPsec tunnel, if the devices you use do not support disabling this feature. If you have already created IPsec tunnels, update them with a PUT request. Refer to Anti-replay protection for more information on this topic.
Required API token permissions

At least one of the following token permissions
is required:
Magic WAN WriteMagic Transit Write Create an IPsec tunnelcurl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT\_ID/magic/ipsec\_tunnels" \  --request POST \  --header "Authorization: Bearer $CLOUDFLARE\_API\_TOKEN" \  --json '{    "name": "\<TUNNEL\_NAME>",    "description": "\<TUNNEL\_DESCRIPTION>",    "interface\_address": "\<INTERFACE\_ADDRESS>",    "cloudflare\_endpoint": "\<CLOUDFLARE\_ENDPOINT>",    "customer\_endpoint": "\<CUSTOMER\_ENDPOINT>"  }'",    "description": "\<TUNNEL\_DESCRIPTION>",    "interface\_address": "\<INTERFACE\_ADDRESS>",    "cloudflare\_endpoint": "\<CLOUDFLARE\_ENDPOINT>",    "customer\_endpoint": "\<CUSTOMER\_ENDPOINT>"  }'">
{  "errors": \[    {      "code": 1000,      "message": "message"    }  ],  "messages": \[    {      "code": 1000,      "message": "message"    }  ],  "result": {    "ipsec\_tunnels": \[      {        "id": "\<IPSEC\_TUNNEL\_ID>",        "interface\_address": "\<INTERFACE\_CIDR>",        "name": "\<TUNNEL\_NAME>",        "cloudflare\_endpoint": "\<IP\_ADDRESS>",        "customer\_endpoint": "\<IP\_ADDRESS>",        "description": "\<TUNNEL\_DESCRIPTION>",        "health\_check": {          "direction": "unidirectional",          "enabled": true,          "rate": "low",          "type": "reply"        },        "psk\_metadata": {},        "replay\_protection": false      }    ]  },  "success": true}",        "interface\_address": "\<INTERFACE\_CIDR>",        "name": "\<TUNNEL\_NAME>",        "cloudflare\_endpoint": "\<IP\_ADDRESS>",        "customer\_endpoint": "\<IP\_ADDRESS>",        "description": "\<TUNNEL\_DESCRIPTION>",        "health\_check": {          "direction": "unidirectional",          "enabled": true,          "rate": "low",          "type": "reply"        },        "psk\_metadata": {},        "replay\_protection": false      }    ]  },  "success": true}">
Take note of the tunnel id value. We will use it to generate a pre-shared key (PSK).

Create a POST request to generate a PSK. Use the tunnel id value you received from the previous command.
Required API token permissions

At least one of the following token permissions
is required:
Magic WAN WriteMagic Transit Write Generate Pre Shared Key (PSK) for IPsec tunnelscurl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT\_ID/magic/ipsec\_tunnels/$IPSEC\_TUNNEL\_ID/psk\_generate" \  --request POST \  --header "Authorization: Bearer $CLOUDFLARE\_API\_TOKEN"
{  "result": {    "ipsec\_id": "\<IPSEC\_ID>",    "ipsec\_tunnel\_id": "\<IPSEC\_TUNNEL\_ID>",    "psk": "\<PSK\_CODE>",    "psk\_metadata": {      "last\_generated\_on": "2025-03-13T14:28:47.054317925Z"    }  },  "success": true,  "errors": \[],  "messages": \[]}",    "ipsec\_tunnel\_id": "\<IPSEC\_TUNNEL\_ID>",    "psk": "\<PSK\_CODE>",    "psk\_metadata": {      "last\_generated\_on": "2025-03-13T14:28:47.054317925Z"    }  },  "success": true,  "errors": \[],  "messages": \[]}">
Take note of your psk value.

Create a PUT request to update your IPsec tunnel with the PSK.
Terminal windowcurl "https://api.cloudflare.com/client/v4/accounts/%7Baccount\_id%7D/magic/ipsec\_tunnels/%7Bipsec\_tunnel\_id%7D" \  --request PUT \  --json '{    "psk": "\<PSK\_VALUE>"  }'"  }'">

{  "result": {    "modified": true,    "modified\_ipsec\_tunnel": {      "id": "\<IPSEC\_ID>",      "interface\_address": "\<IPSEC\_CIDR>",      "created\_on": "2025-03-13T14:28:21.139535Z",      "modified\_on": "2025-03-13T14:33:26.09683Z",      "name": "\<TUNNEL\_NAME>",      "cloudflare\_endpoint": "\<IP\_ADDRESS>",      "customer\_endpoint": "\<IP\_ADDRESS>",      "remote\_identities": {        "hex\_id": "",        "fqdn\_id": "",        "user\_id": ""      },      "psk\_metadata": {        "last\_generated\_on": "2025-03-13T14:28:47.054318Z"      },      "description": "\<TUNNEL\_DESCRIPTION>",      "health\_check": {        "enabled": true,        "target": "",        "type": "reply",        "rate": "mid",        "direction": "unidirectional"      }    }  },  "success": true,  "errors": \[],  "messages": \[]}",      "interface\_address": "\<IPSEC\_CIDR>",      "created\_on": "2025-03-13T14:28:21.139535Z",      "modified\_on": "2025-03-13T14:33:26.09683Z",      "name": "\<TUNNEL\_NAME>",      "cloudflare\_endpoint": "\<IP\_ADDRESS>",      "customer\_endpoint": "\<IP\_ADDRESS>",      "remote\_identities": {        "hex\_id": "",        "fqdn\_id": "",        "user\_id": ""      },      "psk\_metadata": {        "last\_generated\_on": "2025-03-13T14:28:47.054318Z"      },      "description": "\<TUNNEL\_DESCRIPTION>",      "health\_check": {        "enabled": true,        "target": "",        "type": "reply",        "rate": "mid",        "direction": "unidirectional"      }    }  },  "success": true,  "errors": \[],  "messages": \[]}">
Use the psk value from step 3 to configure the IPsec tunnel on your equipment as well.
Configure bidirectional health checks
Bidirectional health checks are available for GRE and IPsec tunnels. For Magic Transit this option defaults to unidirectional.You can change this setting via the API with "bidirectional" or "unidirectional":Terminal windowcurl "https://api.cloudflare.com/client/v4/accounts/%7Baccount\_id%7D/magic/ipsec\_tunnels/%7Bipsec\_tunnel\_id%7D" \  --request PUT \  --json '{    "health\_check": {        "direction": "bidirectional"    }  }'{  "result": {    "modified": true,    "modified\_ipsec\_tunnel": {      "id": "\<IPSEC\_ID>",      "interface\_address": "\<IPSEC\_CIDR>",      "created\_on": "2025-03-13T14:28:21.139535Z",      "modified\_on": "2025-03-13T14:33:26.09683Z",      "name": "\<TUNNEL\_NAME>",      "cloudflare\_endpoint": "\<IP\_ADDRESS>",      "customer\_endpoint": "\<IP\_ADDRESS>",      "remote\_identities": {        "hex\_id": "",        "fqdn\_id": "",        "user\_id": ""      },      "psk\_metadata": {        "last\_generated\_on": "2025-03-13T14:28:47.054318Z"      },      "description": "\<TUNNEL\_DESCRIPTION>",      "health\_check": {        "enabled": true,        "target": "",        "type": "reply",        "rate": "mid",        "direction": "bidirectional"      }    }  },  "success": true,  "errors": \[],  "messages": \[]}",      "interface\_address": "\<IPSEC\_CIDR>",      "created\_on": "2025-03-13T14:28:21.139535Z",      "modified\_on": "2025-03-13T14:33:26.09683Z",      "name": "\<TUNNEL\_NAME>",      "cloudflare\_endpoint": "\<IP\_ADDRESS>",      "customer\_endpoint": "\<IP\_ADDRESS>",      "remote\_identities": {        "hex\_id": "",        "fqdn\_id": "",        "user\_id": ""      },      "psk\_metadata": {        "last\_generated\_on": "2025-03-13T14:28:47.054318Z"      },      "description": "\<TUNNEL\_DESCRIPTION>",      "health\_check": {        "enabled": true,        "target": "",        "type": "reply",        "rate": "mid",        "direction": "bidirectional"      }    }  },  "success": true,  "errors": \[],  "messages": \[]}">   <starlight-tabs-restore class="astro-esqgolmp"></starlight-tabs-restore> </starlight-tabs>  class r extends HTMLElement{static#e=new Map;#t;#n="starlight-synced-tabs\_\_";constructor(){super();const t=this.querySelector('\[role="tablist"]');if(this.tabs=\[...t.querySelectorAll('\[role="tab"]')],this.panels=\[...this.querySelectorAll(':scope > \[role="tabpanel"]')],this.#t=this.dataset.syncKey,this.#t){const i=r.#e.get(this.#t)??\[];i.push(this),r.#e.set(this.#t,i)}this.tabs.forEach((i,c)=>{i.addEventListener("click",e=>{e.preventDefault();const n=t.querySelector('\[aria-selected="true"]');e.currentTarget!==n&\&this.switchTab(e.currentTarget,c)}),i.addEventListener("keydown",e=>{const n=this.tabs.indexOf(e.currentTarget),s=e.key==="ArrowLeft"?n-1:e.key==="ArrowRight"?n+1:e.key==="Home"?0:e.key==="End"?this.tabs.length-1:null;s!==null&\&this.tabs\[s]&&(e.preventDefault(),this.switchTab(this.tabs\[s],s))})})}switchTab(t,i,c=!0){if(!t)return;const e=c?this.getBoundingClientRect().top:0;this.tabs.forEach(s=>{s.setAttribute("aria-selected","false"),s.setAttribute("tabindex","-1")}),this.panels.forEach(s=>{s.hidden=!0});const n=this.panels\[i];n&&(n.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),c&&(t.focus(),r.#r(this,t),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-e),behavior:"instant"}))}#i(t){!this.#t||typeof localStorage>"u"||localStorage.setItem(this.#n+this.#t,t)}static#r(t,i){const c=t.#t,e=r.#s(i);if(!c||!e)return;const n=r.#e.get(c);if(n){for(const s of n){if(s===t)continue;const a=s.tabs.findIndex(o=>r.#s(o)===e);a!==-1&\&s.switchTab(s.tabs\[a],a,!1)}t.#i(e)}}static#s(t){return t.textContent?.trim()}}customElements.define("starlight-tabs",r);
Bidirectional vs unidirectional health checks
To check for tunnel health, Cloudflare sends a health check probe consisting of ICMP (Internet Control Message Protocol) reply packets ↗ to your network. Cloudflare needs to receive these probes to know if your tunnel is healthy.

Cloudflare defaults to unidirectional health checks for Magic Transit (direct server return), and bidirectional health checks for Cloudflare WAN. However, routing unidirectional ICMP reply packets over the Internet to Cloudflare is sometimes subject to drops by intermediate network devices, such as stateful firewalls. Magic Transit customers with egress traffic can modify this setting to bidirectional.
If you are a Magic Transit customer with egress traffic, refer to Magic Transit egress traffic for more information on the technical aspects you need to consider to create a successful connection to Cloudflare.
Legacy bidirectional health checks
For customers using the legacy health check system with a public IP range, Cloudflare recommends:

Configuring the tunnel health check target IP address to one within the 172.64.240.252/30 prefix range.
Applying a policy-based route that matches packets ↗ with a source IP address equal to the configured tunnel health check target (for example 172.64.240.253/32), and route them over the tunnel back to Cloudflare.

Next steps
Now that you have set up your tunnel endpoints, you need to configure routes to direct your traffic through Cloudflare. You have two routing options:

Static routes: Best for simple, stable networks where routes rarely change. You manually define each route.
BGP peering: Best for dynamic environments with frequently changing routes, multiple prefixes, or when you need automatic failover. Requires enabling BGP on your tunnel during creation.

Refer to Configure routes for detailed instructions on both options.

Troubleshooting
If you experience issues with your tunnels:

For tunnel health check problems, refer to Troubleshoot tunnel health.
For IPsec tunnel establishment issues, refer to Troubleshoot with IPsec logs.
Resources     API     New to Cloudflare?     Directory     Sponsorships     Open Source     Support     Help Center     System Status     Compliance     GDPR     Company     cloudflare.com     Our team     Careers     Tools     Cloudflare Radar     Speed Test     Is BGP Safe Yet?     RPKI Toolkit     Certificate Transparency     Community     X     Discord     YouTube     GitHub       © 2026 Cloudflare, Inc.   Privacy Policy    Terms of Use    Report Security Issues    Trademark\
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function OptanonWrapper() {}
Cookie Settings            Previous  Get started      Next  Configure routes     Edit page Last updated: Feb 4, 2026    <astro-island uid="1gAukP" prefix="r4" component-url="/_astro/FeedbackPrompt.PMF1DbeE.js" component-export="default" renderer-url="/_astro/client.g8QBsImB.js" props="{}" ssr client="idle" opts="{&quot;name&quot;:&quot;FeedbackPrompt&quot;,&quot;value&quot;:true}" await-children>Was this helpful?YesNo</astro-island>
