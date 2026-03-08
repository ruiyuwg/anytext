<!DOCTYPE html>Overview | TanStack Intent Docs(function(){try{var t=localStorage.getItem('theme')||'auto';var v=['light','dark','auto'].includes(t)?t:'auto';if(v==='auto'){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}else{document.documentElement.classList.add(v)}}catch(e){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}})()

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
});TanStackIntent v0v0<a href="/cli/latest" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
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
 max-h-[calc(100dvh-var(--navbar-height))] overflow-y-auto z-20 dark:bg-black/60 backdrop-blur-lg">DocsPartnersLatestSearch... KMenuHomeContributorsNPM StatsGitHub Discord Getting StartedOverviewlatestLatestMenuHomeContributorsNPM StatsGitHub Discord Getting StartedOverviewAI/LLM: This documentation page is available in plain markdown format at/intent/latest/docs/overview.mdLearn about TanStack AdsHide AdsGetting StartedOn this pageOverviewCopy page@tanstack/intent is a CLI for library maintainers to generate, validate, and ship Agent Skills alongside their npm packages.
The problem
Your docs are good. Your types are solid. Your agent still gets it wrong.
Docs target humans who browse. Types check individual API calls but can't encode intent. Training data snapshots the ecosystem as it was, mixing versions with no way to tell which applies. Once a breaking change ships, models develop a permanent split-brain — training data contains both versions forever with no way to disambiguate.
The ecosystem already moves toward agent-readable knowledge — Cursor rules, CLAUDE.md files, skills directories. But delivery is stuck in copy-paste: hunt for a community-maintained rules file, paste it into your config, repeat for every tool. No versioning, no update path, no staleness signal.
Skills: versioned knowledge in npm
A skill is a short, versioned document that tells agents how to use a specific capability of your library — correct patterns, common mistakes, and when to apply them. Skills ship inside your npm package and travel with the tool via npm update — not the model's training cutoff, not community-maintained rules files, not prompt snippets in READMEs. Versioned knowledge the maintainer owns, updated when the package updates.
Each skill declares its source docs. When those docs change, the CLI flags the skill for review. One source of truth, one derived artifact that stays in sync.
The Agent Skills spec is an open standard already adopted by VS Code, GitHub Copilot, OpenAI Codex, Cursor, Claude Code, Goose, Amp, and others.
For library consumers
Set up skill-to-task mappings in your project's agent config files (CLAUDE.md, .cursorrules, etc.):
shnpx @tanstack/intent@latest install

No per-library setup. No hunting for rules files. Install the package, run npx @tanstack/intent@latest install, and the agent understands the tool. Update the package, and skills update too.
List available skills from installed packages:
shnpx @tanstack/intent@latest list

For library maintainers
Generate skills for your library by telling your AI coding agent to run:
shnpx @tanstack/intent@latest scaffold

This walks the agent through domain discovery, skill tree generation, and skill creation — one step at a time with your review at each stage.
Validate your skill files:
shnpx @tanstack/intent@latest validate

Check for skills that have fallen behind their sources:
shnpx @tanstack/intent@latest stale

Copy CI workflow templates into your repo so validation and staleness checks run on every push:
shnpx @tanstack/intent@latest setup-github-actions

Keeping skills current
The real risk with any derived artifact is staleness. npx @tanstack/intent@latest stale flags skills whose source docs have changed, and CI templates catch drift before it ships.
The feedback loop runs both directions. npx @tanstack/intent@latest feedback lets users submit structured reports when a skill produces wrong output — which skill, which version, what broke. That context flows back to the maintainer, and the fix ships to everyone on the next npm update. Every support interaction produces an artifact that prevents the same class of problem for all future users — not just the one who reported it.
CLI Commands

CommandDescriptionnpx @tanstack/intent@latest installSet up skill-to-task mappings in agent config filesnpx @tanstack/intent@latest list \[--json]Discover intent-enabled packagesnpx @tanstack/intent@latest metaList meta-skills for library maintainersnpx @tanstack/intent@latest scaffoldPrint the guided skill generation promptnpx @tanstack/intent@latest validate \[dir]Validate SKILL.md filesnpx @tanstack/intent@latest setup-github-actionsCopy CI templates into your reponpx @tanstack/intent@latest stale \[--json]Check skills for version driftnpx @tanstack/intent@latest feedbackSubmit skill feedbackEdit on GitHubPreviousNPM StatsOn this pageThe problemSkills: versioned knowledge in npmFor library consumersFor library maintainersKeeping skills currentCLI CommandsLearn about TanStack AdsHide Ads<div class="w-full sm:w-[300px] shrink-0 sm:sticky
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
;$\_TSR.router=($R=>$R\[0]={manifest:$R\[1]={routes:$R\[2]={**root**:$R\[3]={preloads:$R\[4]=\["/assets/main-BLpUAM3f.js","/assets/d3-charts-C\_pWHZ\_e.js","/assets/search-DPeAlcMs.js","/assets/icons-DFHKXUS4.js"],assets:$R\[5]=\[$R\[6]={tag:"script",attrs:$R\[7]={type:"module",async:!0},children:"import('/assets/main-BLpUAM3f.js')"}]},"/$libraryId":$R\[8]={preloads:$R\[9]=\["/assets/route-BM1blYlL.js","/assets/useMounted-q\_aRKA8j.js"]},"/$libraryId/$version":$R\[10]={preloads:$R\[11]=\["/assets/\_version-Cn\_1Fnwe.js","/assets/useLocalStorage-BK1IHjof.js","/assets/index-DXA8nvQF.js"]},"/$libraryId/$version/docs":$R\[12]={preloads:$R\[13]=\["/assets/*version.docs-Q1ra12-Q.js","/assets/DocsLayout-yFXxYAAM.js","/assets/frameworks-Cb8o9l0W.js","/assets/solid-logo-CT0JE-mv.js","/assets/LogoQueryGG-vdSraSzq.js","/assets/useQueryGGPPPDiscount-Dz6Vmyyw.js","/assets/partners-BvX3VFQs.js","/assets/AdsContext-KdS9VYu3.js","/assets/index-B3W54GeV.js","/assets/FrameworkSelect-BMasBWoM.js","/assets/Dropdown-CNqrQe7s.js","/assets/users.server-DqzYSbEt.js"]},"/$libraryId/$version/docs/$":$R\[14]={preloads:$R\[15]=\["/assets/*version.docs.*-1P05oGL*.js","/assets/Doc-lfeBU0lE.js","/assets/docs-CRqI39kb.js","/assets/DocContainer-BEmkHgoz.js","/assets/Breadcrumbs-DeP6cHlj.js","/assets/DocTitle-DEdqE1CX.js","/assets/Markdown-DivBGZsY.js","/assets/processor-DJYQWpXP.js","/assets/CodeBlock-ZSiKhi-G.js","/assets/bundle-full-CwUCBn9w.js","/assets/installCommand-Oh0cimkr.js","/assets/useMutation-DRi2yvBX.js","/assets/DocFeedbackNote-QJrnYy-U.js","/assets/docFeedback.functions-DzD8ddvB.js","/assets/docFeedback-B\_PzsLvE.js","/assets/queryOptions-CXd7YBrc.js"]}}},matches:$R\[16]=\[$R\[17]={i:"**root**/",u:1772952649294,s:"success",ssr:!0},$R\[18]={i:"/$libraryId/intent",u:1772952649294,s:"success",ssr:!0},$R\[19]={i:"/$libraryId/$version/intent/latest",u:1772952649299,s:"success",l:$R\[20]={config:$R\[21]={sections:$R\[22]=\[$R\[23]={label:"Getting Started",children:$R\[24]=\[$R\[25]={label:"Overview",to:"overview"}]}]}},ssr:!0},$R\[26]={i:"/$libraryId/$version/docs/intent/latest/docs",u:1772952649294,s:"success",ssr:!0},$R\[27]={i:"/$libraryId/$version/docs/$/intent/latest/docs/overview",u:1772952649350,s:"success",l:$R\[28]={title:"Overview",description:"@tanstack/intent is a CLI for library maintainers to generate, validate, and ship alongside their npm packages. The problem Your docs are good. Your types are solid. Your agent still gets it wrong. Do...",filePath:"docs/overview.md",content:"\n`@tanstack/intent` is a CLI for library maintainers to generate, validate, and ship [Agent Skills](https://agentskills.io) alongside their npm packages.\n\n## The problem\n\nYour docs are good. Your types are solid. Your agent still gets it wrong.\n\nDocs target humans who browse. Types check individual API calls but can't encode intent. Training data snapshots the ecosystem as it *was*, mixing versions with no way to tell which applies. Once a breaking change ships, models develop a permanent split-brain — training data contains *both* versions forever with no way to disambiguate.\n\nThe ecosystem already moves toward agent-readable knowledge — Cursor rules, CLAUDE.md files, skills directories. But delivery is stuck in copy-paste: hunt for a community-maintained rules file, paste it into your config, repeat for every tool. No versioning, no update path, no staleness signal.\n\n## Skills: versioned knowledge in npm\n\nA skill is a short, versioned document that tells agents how to use a specific capability of your library — correct patterns, common mistakes, and when to apply them. Skills ship inside your npm package and travel with the tool via `npm update` — not the model's training cutoff, not community-maintained rules files, not prompt snippets in READMEs. Versioned knowledge the maintainer owns, updated when the package updates.\n\nEach skill declares its source docs. When those docs change, the CLI flags the skill for review. One source of truth, one derived artifact that stays in sync.\n\nThe [Agent Skills spec](https://agentskills.io) is an open standard already adopted by VS Code, GitHub Copilot, OpenAI Codex, Cursor, Claude Code, Goose, Amp, and others.\n\n## For library consumers\n\nSet up skill-to-task mappings in your project's agent config files (CLAUDE.md, .cursorrules, etc.):\n\n`bash\nnpx @tanstack/intent@latest install\n`\n\nNo per-library setup. No hunting for rules files. Install the package, run `npx @tanstack/intent@latest install`, and the agent understands the tool. Update the package, and skills update too.\n\nList available skills from installed packages:\n\n`bash\nnpx @tanstack/intent@latest list\n`\n\n## For library maintainers\n\nGenerate skills for your library by telling your AI coding agent to run:\n\n`bash\nnpx @tanstack/intent@latest scaffold\n`\n\nThis walks the agent through domain discovery, skill tree generation, and skill creation — one step at a time with your review at each stage.\n\nValidate your skill files:\n\n`bash\nnpx @tanstack/intent@latest validate\n`\n\nCheck for skills that have fallen behind their sources:\n\n`bash\nnpx @tanstack/intent@latest stale\n`\n\nCopy CI workflow templates into your repo so validation and staleness checks run on every push:\n\n`bash\nnpx @tanstack/intent@latest setup-github-actions\n`\n\n## Keeping skills current\n\nThe real risk with any derived artifact is staleness. `npx @tanstack/intent@latest stale` flags skills whose source docs have changed, and CI templates catch drift before it ships.\n\nThe feedback loop runs both directions. `npx @tanstack/intent@latest feedback` lets users submit structured reports when a skill produces wrong output — which skill, which version, what broke. That context flows back to the maintainer, and the fix ships to everyone on the next `npm update`. Every support interaction produces an artifact that prevents the same class of problem for all future users — not just the one who reported it.\n\n## CLI Commands\n\n| Command | Description |\n| --- | --- |\n| `npx @tanstack/intent@latest install` | Set up skill-to-task mappings in agent config files |\n| `npx @tanstack/intent@latest list [--json]` | Discover intent-enabled packages |\n| `npx @tanstack/intent@latest meta` | List meta-skills for library maintainers |\n| `npx @tanstack/intent@latest scaffold` | Print the guided skill generation prompt |\n| `npx @tanstack/intent@latest validate [dir]` | Validate SKILL.md files |\n| `npx @tanstack/intent@latest setup-github-actions` | Copy CI templates into your repo |\n| `npx @tanstack/intent@latest stale [--json]` | Check skills for version drift |\n| `npx @tanstack/intent@latest feedback` | Submit skill feedback |\n",frontmatter:$R\[29]={title:"Overview",description:"@tanstack/intent is a CLI for library maintainers to generate, validate, and ship alongside their npm packages. The problem Your docs are good. Your types are solid. Your agent still gets it wrong. Do..."}},ssr:!0}],lastMatchId:"/$libraryId/$version/docs/$/intent/latest/docs/overview",dehydratedData:$R\[30]={queryStream:$R\[31]=($R\[32]=(e) => new ReadableStream({ start: (r) => {
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
} }))($R\[33]=($R\[34]=() => {
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
})())}})($R\["tsr"]);document.currentScript.remove()import('/assets/main-BLpUAM3f.js')($R=>$R\[33].return(void 0))($R\["tsr"]);$\_TSR.e();document.currentScript.remove()
