<!DOCTYPE html>Introduction | TanStack Virtual Docs(function(){try{var t=localStorage.getItem('theme')||'auto';var v=['light','dark','auto'].includes(t)?t:'auto';if(v==='auto'){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}else{document.documentElement.classList.add(v)}}catch(e){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}})()

```
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5N57KQT4');
    window.googletag = window.googletag || { cmd: [] };
```

googletag.cmd.push(function () {
googletag.pubads().set("page\_url", "https://tanstack.com/ ");
});TanStackVirtual v3v3<a href="/cli/latest" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
         bg-gradient-to-r from-indigo-600 to-violet-700
         hover:from-indigo-500 hover:to-violet-600
         text-white text-xs font-medium
         shadow-sm hover:shadow-md
         transition-all duration-200">AlphaTry TanStack CLISearch... KAuto<a href="/login" class="flex items-center gap-1 rounded-md px-2 py-1.5
         bg-black dark:bg-white text-white dark:text-black
         hover:bg-gray-800 dark:hover:bg-gray-200
         transition-colors duration-200 text-xs font-medium">Log InStartRCStartRCRouterRouterQueryQueryTableTableDBbetaDBbetaAIalphaAIalphaFormnewFormnewVirtualVirtualPacerbetaPacerbetaHotkeysalphaHotkeysalphaStorealphaStorealphaDevtoolsalphaDevtoolsalphaCLIalphaCLIalphaIntentalphaIntentalphaMore LibrariesMore LibrariesBuilderAlphaBuilderAlphaFeedBetaFeedBetaMaintainersMaintainersPartnersPartnersShowcaseShowcaseBlogBlogLearnNEWLearnNEWSupportSupportStatsStatsDiscordDiscordMerchMerchGitHubGitHubEthosEthosTenetsTenetsBrand GuideBrand Guide<div class="
       min-h-[calc(100dvh-var(--navbar-height))]
       flex flex-col sm:flex-row
       w-full transition-all duration-300
       [overflow-x:clip]"><div class="sm:hidden bg-white/50 sticky top-[var(--navbar-height)]
 max-h-[calc(100dvh-var(--navbar-height))] overflow-y-auto z-20 dark:bg-black/60 backdrop-blur-lg">DocsPartnersReactLatestSearch... KMenuHomeFrameworksContributorsNPM StatsGitHub Discord Getting StartedIntroductionInstallationReact VirtualCore APIsVirtualizerVirtualItemExamplesFixedVariableDynamicPaddingStickyInfinite ScrollSmooth ScrollTableWindowlatestReactLatestMenuHomeFrameworksContributorsNPM StatsGitHub Discord Getting StartedIntroductionInstallationReact VirtualCore APIsVirtualizerVirtualItemExamplesFixedVariableDynamicPaddingStickyInfinite ScrollSmooth ScrollTableWindowAI/LLM: This documentation page is available in plain markdown format at/virtual/latest/docs/introduction.mdLearn about TanStack AdsHide AdsGetting StartedIntroductionCopy pageTanStack Virtual is a headless UI utility for virtualizing long lists of elements in JS/TS, React, Vue, Svelte, Solid, Lit, and Angular. It is not a component therefore does not ship with or render any markup or styles for you. While this requires a bit of markup and styles from you, you will retain 100% control over your styles, design and implementation.
The Virtualizer
At the heart of TanStack Virtual is the Virtualizer. Virtualizers can be oriented on either the vertical (default) or horizontal axes which makes it possible to achieve vertical, horizontal and even grid-like virtualization by combining the two axis configurations together.
Here is just a quick example of what it looks like to virtualize a long list within a div using TanStack Virtual in React:
tsximport { useVirtualizer } from '@tanstack/react-virtual';

function App() {
// The scrollable element for your list
const parentRef = React.useRef(null)

// The virtualizer
const rowVirtualizer = useVirtualizer({
count: 10000,
getScrollElement: () => parentRef.current,
estimateSize: () => 35,
})

return (
<>
{/\* The scrollable element for your list */}
\<div
ref={parentRef}
style={{
height: `400px`,
overflow: 'auto', // Make it scroll!
}}
\>
{/* The large inner element to hold all of the items */}
\<div
style={{
height: `${rowVirtualizer.getTotalSize()}px`,
width: '100%',
position: 'relative',
}}
\>
{/* Only the visible items in the virtualizer, manually positioned to be in view \*/}
{rowVirtualizer.getVirtualItems().map((virtualItem) => (
\<div
key={virtualItem.key}
style={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: `${virtualItem.size}px`,
transform: `translateY(${virtualItem.start}px)`,
}}
\>
Row {virtualItem.index}
\</div>
))}
\</div>
\</div>
\</>
)
}

Let's dig into some more examples!Edit on GitHubPreviousNPM StatsNextInstallationLearn about TanStack AdsHide Ads<div class="w-full sm:w-[300px] shrink-0 sm:sticky
       sm:top-[var(--navbar-height)]
       ">PartnersBecome a Partner<a href="https://coderabbit.link/tanstack?utm_source=tanstack&amp;via=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:100%;flex-grow:1;flex-shrink:0"><a href="https://www.cloudflare.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:86%;flex-grow:1;flex-shrink:0"><a href="https://ag-grid.com/react-data-grid/?utm_source=reacttable&amp;utm_campaign=githubreacttable" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:50%;flex-grow:1;flex-shrink:0"><a href="https://serpapi.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:41%;flex-grow:1;flex-shrink:0"><a href="https://netlify.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:34%;flex-grow:1;flex-shrink:0"><a href="https://neon.tech?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:30%;flex-grow:1;flex-shrink:0"><a href="https://workos.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:31%;flex-grow:1;flex-shrink:0"><a href="https://go.clerk.com/wOwHtuJ" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:29%;flex-grow:1;flex-shrink:0"><a href="https://convex.dev?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:29%;flex-grow:1;flex-shrink:0"><a href="https://electric-sql.com" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:28%;flex-grow:1;flex-shrink:0"><a href="https://powersync.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:14%;flex-grow:1;flex-shrink:0"><a href="https://sentry.io?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:23%;flex-grow:1;flex-shrink:0"><a href="https://railway.com/?utm_medium=sponsor&amp;utm_source=oss&amp;utm_campaign=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:14%;flex-grow:1;flex-shrink:0"><a href="https://www.prisma.io/?utm_source=tanstack&amp;via=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:14%;flex-grow:1;flex-shrink:0"><a href="https://strapi.link/tanstack-start" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:7%;flex-grow:1;flex-shrink:0"><a href="https://www.unkey.com/?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:5%;flex-grow:1;flex-shrink:0">Learn about TanStack AdsHide Ads(self.$R=self.$R||{})\["tsr"]=\[];self.$\_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&\&this.streamEnded&&(delete self.$\_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:\[]};
;$\_TSR.router=($R=>$R\[0]={manifest:$R\[1]={routes:$R\[2]={**root**:$R\[3]={preloads:$R\[4]=\["/assets/main-BLpUAM3f.js","/assets/d3-charts-C\_pWHZ\_e.js","/assets/search-DPeAlcMs.js","/assets/icons-DFHKXUS4.js"],assets:$R\[5]=\[$R\[6]={tag:"script",attrs:$R\[7]={type:"module",async:!0},children:"import('/assets/main-BLpUAM3f.js')"}]},"/$libraryId":$R\[8]={preloads:$R\[9]=\["/assets/route-BM1blYlL.js","/assets/useMounted-q\_aRKA8j.js"]},"/$libraryId/$version":$R\[10]={preloads:$R\[11]=\["/assets/\_version-Cn\_1Fnwe.js","/assets/useLocalStorage-BK1IHjof.js","/assets/index-DXA8nvQF.js"]},"/$libraryId/$version/docs":$R\[12]={preloads:$R\[13]=\["/assets/*version.docs-Q1ra12-Q.js","/assets/DocsLayout-yFXxYAAM.js","/assets/frameworks-Cb8o9l0W.js","/assets/solid-logo-CT0JE-mv.js","/assets/LogoQueryGG-vdSraSzq.js","/assets/useQueryGGPPPDiscount-Dz6Vmyyw.js","/assets/partners-BvX3VFQs.js","/assets/AdsContext-KdS9VYu3.js","/assets/index-B3W54GeV.js","/assets/FrameworkSelect-BMasBWoM.js","/assets/Dropdown-CNqrQe7s.js","/assets/users.server-DqzYSbEt.js"]},"/$libraryId/$version/docs/$":$R\[14]={preloads:$R\[15]=\["/assets/*version.docs.*-1P05oGL*.js","/assets/Doc-lfeBU0lE.js","/assets/docs-CRqI39kb.js","/assets/DocContainer-BEmkHgoz.js","/assets/Breadcrumbs-DeP6cHlj.js","/assets/DocTitle-DEdqE1CX.js","/assets/Markdown-DivBGZsY.js","/assets/processor-DJYQWpXP.js","/assets/CodeBlock-ZSiKhi-G.js","/assets/bundle-full-CwUCBn9w.js","/assets/installCommand-Oh0cimkr.js","/assets/useMutation-DRi2yvBX.js","/assets/DocFeedbackNote-QJrnYy-U.js","/assets/docFeedback.functions-DzD8ddvB.js","/assets/docFeedback-B\_PzsLvE.js","/assets/queryOptions-CXd7YBrc.js"]}}},matches:$R\[16]=\[$R\[17]={i:"**root**/",u:1772952395372,s:"success",ssr:!0},$R\[18]={i:"/$libraryId/virtual",u:1772952395373,s:"success",ssr:!0},$R\[19]={i:"/$libraryId/$version/virtual/latest",u:1772952395387,s:"success",l:$R\[20]={config:$R\[21]={sections:$R\[22]=\[$R\[23]={label:"Getting Started",children:$R\[24]=\[$R\[25]={label:"Introduction",to:"introduction"},$R\[26]={label:"Installation",to:"installation"}],frameworks:$R\[27]=\[$R\[28]={label:"react",children:$R\[29]=\[$R\[30]={label:"React Virtual",to:"framework/react/react-virtual"}]},$R\[31]={label:"angular",children:$R\[32]=\[$R\[33]={label:"Angular Virtual",to:"framework/angular/angular-virtual"}]},$R\[34]={label:"solid",children:$R\[35]=\[$R\[36]={label:"Solid Virtual",to:"framework/solid/solid-virtual"}]},$R\[37]={label:"svelte",children:$R\[38]=\[$R\[39]={label:"Svelte Virtual",to:"framework/svelte/svelte-virtual"}]},$R\[40]={label:"vue",children:$R\[41]=\[$R\[42]={label:"Vue Virtual",to:"framework/vue/vue-virtual"}]}]},$R\[43]={label:"Core APIs",children:$R\[44]=\[$R\[45]={label:"Virtualizer",to:"api/virtualizer"},$R\[46]={label:"VirtualItem",to:"api/virtual-item"}]},$R\[47]={label:"Examples",children:$R\[48]=\[],frameworks:$R\[49]=\[$R\[50]={label:"angular",children:$R\[51]=\[$R\[52]={label:"Fixed",to:"framework/angular/examples/fixed"},$R\[53]={label:"Variable",to:"framework/angular/examples/variable"},$R\[54]={label:"Dynamic",to:"framework/angular/examples/dynamic"},$R\[55]={label:"Padding",to:"framework/angular/examples/padding"},$R\[56]={label:"Sticky",to:"framework/angular/examples/sticky"},$R\[57]={label:"Infinite Scroll",to:"framework/angular/examples/infinite-scroll"},$R\[58]={label:"Smooth Scroll",to:"framework/angular/examples/smooth-scroll"},$R\[59]={label:"Table",to:"framework/angular/examples/table"},$R\[60]={label:"Window",to:"framework/angular/examples/window"}]},$R\[61]={label:"react",children:$R\[62]=\[$R\[63]={label:"Fixed",to:"framework/react/examples/fixed"},$R\[64]={label:"Variable",to:"framework/react/examples/variable"},$R\[65]={label:"Dynamic",to:"framework/react/examples/dynamic"},$R\[66]={label:"Padding",to:"framework/react/examples/padding"},$R\[67]={label:"Sticky",to:"framework/react/examples/sticky"},$R\[68]={label:"Infinite Scroll",to:"framework/react/examples/infinite-scroll"},$R\[69]={label:"Smooth Scroll",to:"framework/react/examples/smooth-scroll"},$R\[70]={label:"Table",to:"framework/react/examples/table"},$R\[71]={label:"Window",to:"framework/react/examples/window"}]},$R\[72]={label:"svelte",children:$R\[73]=\[$R\[74]={label:"Fixed",to:"framework/svelte/examples/fixed"},$R\[75]={label:"Variable",to:"framework/svelte/examples/variable"},$R\[76]={label:"Dynamic",to:"framework/svelte/examples/dynamic"},$R\[77]={label:"Sticky",to:"framework/svelte/examples/sticky"},$R\[78]={label:"Infinite Scroll",to:"framework/svelte/examples/infinite-scroll"},$R\[79]={label:"Smooth Scroll",to:"framework/svelte/examples/smooth-scroll"},$R\[80]={label:"Table",to:"framework/svelte/examples/table"}]},$R\[81]={label:"vue",children:$R\[82]=\[$R\[83]={label:"Fixed",to:"framework/vue/examples/fixed"},$R\[84]={label:"Variable",to:"framework/vue/examples/variable"},$R\[85]={label:"Dynamic",to:"framework/vue/examples/dynamic"},$R\[86]={label:"Sticky",to:"framework/vue/examples/sticky"},$R\[87]={label:"Infinite Scroll",to:"framework/vue/examples/infinite-scroll"},$R\[88]={label:"Smooth Scroll",to:"framework/vue/examples/smooth-scroll"},$R\[89]={label:"Table",to:"framework/vue/examples/table"},$R\[90]={label:"Padding",to:"framework/vue/examples/padding"},$R\[91]={label:"Scroll Padding",to:"framework/vue/examples/scroll-padding"}]},$R\[92]={label:"lit",children:$R\[93]=\[$R\[94]={label:"Fixed",to:"framework/lit/examples/fixed"},$R\[95]={label:"Dynamic",to:"framework/lit/examples/dynamic"}]}]}]}},ssr:!0},$R\[96]={i:"/$libraryId/$version/docs/virtual/latest/docs",u:1772952395372,s:"success",ssr:!0},$R\[97]={i:"/$libraryId/$version/docs/$/virtual/latest/docs/introduction",u:1772952395390,s:"success",l:$R\[98]={title:"Introduction",description:"TanStack Virtual is a headless UI utility for virtualizing long lists of elements in JS/TS, React, Vue, Svelte, Solid, Lit, and Angular. It is not a component therefore does not ship with or render an...",filePath:"docs/introduction.md",content:"\nTanStack Virtual is a headless UI utility for virtualizing long lists of elements in JS/TS, React, Vue, Svelte, Solid, Lit, and Angular. It is not a component therefore does not ship with or render any markup or styles for you. While this requires a bit of markup and styles from you, you will retain 100% control over your styles, design and implementation.\n\n## The Virtualizer\n\nAt the heart of TanStack Virtual is the `Virtualizer`. Virtualizers can be oriented on either the vertical (default) or horizontal axes which makes it possible to achieve vertical, horizontal and even grid-like virtualization by combining the two axis configurations together.\n\nHere is just a quick example of what it looks like to virtualize a long list within a div using TanStack Virtual in React:\n\n``tsx\nimport { useVirtualizer } from '@tanstack/react-virtual';\n\nfunction App() {\n  // The scrollable element for your list\n  const parentRef = React.useRef(null)\n\n  // The virtualizer\n  const rowVirtualizer = useVirtualizer({\n    count: 10000,\n    getScrollElement: () => parentRef.current,\n    estimateSize: () => 35,\n  })\n\n  return (\n    \x3C>\n      {/* The scrollable element for your list */}\n      \x3Cdiv\n        ref={parentRef}\n        style={{\n          height: `400px`,\n          overflow: 'auto', // Make it scroll!\n        }}\n      >\n        {/* The large inner element to hold all of the items */}\n        \x3Cdiv\n          style={{\n            height: `${rowVirtualizer.getTotalSize()}px`,\n            width: '100%',\n            position: 'relative',\n          }}\n        >\n          {/* Only the visible items in the virtualizer, manually positioned to be in view */}\n          {rowVirtualizer.getVirtualItems().map((virtualItem) => (\n            \x3Cdiv\n              key={virtualItem.key}\n              style={{\n                position: 'absolute',\n                top: 0,\n                left: 0,\n                width: '100%',\n                height: `${virtualItem.size}px`,\n                transform: `translateY(${virtualItem.start}px)`,\n              }}\n            >\n              Row {virtualItem.index}\n            \x3C/div>\n          ))}\n        \x3C/div>\n      \x3C/div>\n    \x3C/>\n  )\n}\n``\n\nLet's dig into some more examples!\n",frontmatter:$R\[99]={title:"Introduction",description:"TanStack Virtual is a headless UI utility for virtualizing long lists of elements in JS/TS, React, Vue, Svelte, Solid, Lit, and Angular. It is not a component therefore does not ship with or render an..."}},ssr:!0}],lastMatchId:"/$libraryId/$version/docs/$/virtual/latest/docs/introduction",dehydratedData:$R\[100]={queryStream:$R\[101]=($R\[102]=(e) => new ReadableStream({ start: (r) => {
e.on({ next: (a) => {
try {
r.enqueue(a);
} catch (t) {
}
}, throw: (a) => {
r.error(a);
}, return: () => {
try {
r.close();
} catch (a) {
}
} });
} }))($R\[103]=($R\[104]=() => {
let e = \[], r = \[], t = true, n2 = false, a = 0, s = (l, g, S) => {
for (S = 0; S < a; S++) r\[S] && r\[S][g](l);
}, i = (l, g, S, d) => {
for (g = 0, S = e.length; g < S; g++) d = e\[g], !t && g === S - 1 ? l[n2 ? "return" : "throw"](d) : l.next(d);
}, u = (l, g) => (t && (g = a++, r\[g] = l), i(l), () => {
t && (r\[g] = r\[a], r\[a--] = void 0);
});
return { **SEROVAL\_STREAM**: true, on: (l) => u(l), next: (l) => {
t && (e.push(l), s(l, "next"));
}, throw: (l) => {
t && (e.push(l), s(l, "throw"), t = false, n2 = false, r.length = 0);
}, return: (l) => {
t && (e.push(l), s(l, "return"), t = false, n2 = true, r.length = 0);
} };
})())}})($R\["tsr"]);document.currentScript.remove()import('/assets/main-BLpUAM3f.js')($R=>$R\[103].return(void 0))($R\["tsr"]);$\_TSR.e();document.currentScript.remove()
