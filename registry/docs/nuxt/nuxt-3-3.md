# Nuxt 3.3

## ✨ Local module development DX

We've landed a raft of changes to enable local modules and improve DX.

We now auto-scan your [`~/modules`](https://nuxt.com/docs/guide/directory-structure/modules) folder and register top level files there as modules in your project ([#19394](https://github.com/nuxt/nuxt/pull/19394){rel=""nofollow""}).

When these files are changed, we'll automatically restart the nuxt server.

```diff
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
-   '~/modules/purge-comments'
  ]
})
```

We also now expose `nuxt/kit` for easy access to kit composables in your local project without having to install `@nuxt/kit` ([#19422](https://github.com/nuxt/nuxt/pull/19422){rel=""nofollow""}).

[Read the documentation about local modules](https://nuxt.com/docs/guide/directory-structure/modules).

## ♻️ Restarting Nuxt

You can add files to the `watch` array to automatically restart the server ([#19530](https://github.com/nuxt/nuxt/pull/19530){rel=""nofollow""}). This is likely to be particularly useful for module authors. You can also trigger a restart of the Nuxt server with the new `restart` hook ([#19084](https://github.com/nuxt/nuxt/pull/19084){rel=""nofollow""}).

## 🔥 Performance improvements

We've increased static asset maxAge to 1 year as a matter of best practice ([#19335](https://github.com/nuxt/nuxt/pull/19335){rel=""nofollow""}), and support tree-shaking more of your build ([#19508](https://github.com/nuxt/nuxt/pull/19508){rel=""nofollow""}).

![nuxt-performance-improvements](https://nuxt.com/assets/blog/nuxt-performance-improvements.png){.rounded-lg.border.border-gray-700}

We also now support preloading [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) with a route in object-syntax ([#19120](https://github.com/nuxt/nuxt/pull/19120){rel=""nofollow""}):

```html
<NuxtLink :to="{ name: 'home', query: { year: '2023' } }">Home</NuxtLink>
```

We also track how long it takes each module you use to perform its setup, and warn if it takes too long. You can see all these values by running your dev server with `DEBUG=1` ([#18648](https://github.com/nuxt/nuxt/pull/18648){rel=""nofollow""}).

```sh
DEBUG=1 npx nuxt dev
ℹ Module pages took 1.5ms to setup.
ℹ Module meta took 3.15ms to setup
ℹ Module components took 4.5ms to setup.
...
```

You can also opt-in to some of Nuxt's internal optimisations by configuring composables to be treeshaken in a particular environment ([#19383](https://github.com/nuxt/nuxt/pull/19383){rel=""nofollow""}) or to have magic keys automatically injected ([#19490](https://github.com/nuxt/nuxt/pull/19490){rel=""nofollow""}).

## 🐛 Error handling

We now handle chunk errors by default ([#19086](https://github.com/nuxt/nuxt/pull/19086){rel=""nofollow""}), meaning if your site updates with a redeploy, **we automatically handle reloading it on navigation**.

To disable this behavior, set `experimental.emitRouteChunkError` option to `'manual'` and handle it yourself with the new [`reloadNuxtApp`](https://nuxt.com/docs/api/utils/reload-nuxt-app){rel=""nofollow""} composable. Learn more how we implemented in our [chunk-reload.client.ts plugin](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/plugins/chunk-reload.client.ts){rel=""nofollow""}.

You can also set `experimental.restoreState` to preserve some of your app state across reloads:

```ts [nuxt.config.ts]
defineNuxtConfig({
  experimental: {
    restoreState: true
  }
})
```

We also have a new experimental error handling component: [`<NuxtClientFallback>`](https://nuxt.com/docs/api/components/nuxt-client-fallback) ([#8216](https://github.com/nuxt/framework/pull/8216){rel=""nofollow""}) which can capture errors rendering on server, replace them with fallback content, and granularly trigger rerendering the part with an error on the client. This can be enabled with `experimental.clientFallback` - feedback very welcome!

## ⚡️ Head improvements

We've migrated to use [unhead](https://github.com/unjs/unhead){rel=""nofollow""} directly ([#19519](https://github.com/nuxt/nuxt/pull/19519){rel=""nofollow""}) - and automatically tree-shake server-only head composables like `useServerHead` from your client build ([#19576](https://github.com/nuxt/nuxt/pull/19576){rel=""nofollow""}), meaning you can have great SEO without needing to include meta tag logic that's relevant only for crawlers in your client build.

There's also a new [`useHeadSafe`](https://nuxt.com/docs/api/composables/use-head-safe) composable that handles sanitising untrusted user input ([#19548](https://github.com/nuxt/nuxt/pull/19548){rel=""nofollow""}).

## 🪵 Better logging in browser DevTools

Working with the Chrome DevTools team, we've landed a couple of features across the unjs + Nuxt ecosystem meaning we now have first-class support for hiding Nuxt internal stack traces from logs in your (Chromium-based, for now) browser [#19243](https://github.com/nuxt/nuxt/pull/19243){rel=""nofollow""}. We also landed a couple of improvements with stacktraces involving Nuxt hooks ([unjs/hookable#69](https://github.com/unjs/hookable/pull/69){rel=""nofollow""} and [unjs/hookable#68](https://github.com/unjs/hookable/pull/68){rel=""nofollow""}) implementing [`console.createTask`](https://developer.chrome.com/blog/devtools-modern-web-debugging/#linked-stack-traces){rel=""nofollow""}.

| Before                                                                                                                                                  | After                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![before-nuxt-console-improvements](https://user-images.githubusercontent.com/28706372/220933126-56d9a0e5-e846-4958-a40a-e528a48bcb32.png){width="529"} | ![after-nuxt-console-improvements](https://user-images.githubusercontent.com/28706372/220932932-932f193b-59a6-4385-8796-a62dcfd59c20.png){width="534"} |

## 💪 Type improvements

Types for server API routes are now more correct - with non-serialisable types stripped out of the return type ([unjs/nitro#1002](https://github.com/unjs/nitro/pull/1002){rel=""nofollow""}).

We also now type more of `NuxtApp` and correctly type unknown injections for greater type-safety ([#19643](https://github.com/nuxt/nuxt/pull/19643){rel=""nofollow""}).

And if you were struggling with correct types when using `transform` + `default` with Nuxt data fetching composables, fear no more - we now infer the types correctly ([#19487](https://github.com/nuxt/nuxt/pull/19487){rel=""nofollow""}).

## ⚗️ Nitro enhancements

This release comes with Nitro v2.3, which brings lots of improvements of its own. Check out [the release](https://github.com/unjs/nitro/releases/tag/v2.3.0){rel=""nofollow""} for more info.

We now support [`useAppConfig`](https://nuxt.com/docs/api/composables/use-app-config) in nitro server routes ([#19489](https://github.com/nuxt/nuxt/pull/19489){rel=""nofollow""}) - a long-awaited change. Now [`useAppConfig`](https://nuxt.com/docs/api/composables/use-app-config) is consistently available throughout your app for non-runtime configuration from layers, modules, etc.

We've also added a `nitro:build:public-assets` hook to allow modifying assets output from nitro's prerender/build phase ([#19638](https://github.com/nuxt/nuxt/pull/19638){rel=""nofollow""}).

## 🛠️ Build changes

As part of moving towards [first-class support for PNP and pnpm support without `--shamefully-hoist`](https://github.com/nuxt/nuxt/issues/14146){rel=""nofollow""}, we've dropped support for some internal (deprecated) utilities using CJS resolve patterns ([#19537](https://github.com/nuxt/nuxt/pull/19537){rel=""nofollow""} and [#19608](https://github.com/nuxt/nuxt/pull/19608){rel=""nofollow""}).

We also now resolve dependencies like `nuxt`, `@nuxt/kit` and more using ESM search-paths. We'll be keeping a close eye on this.

We're also preparing the groundwork for support of new TypeScript Node16 module resolution ([#19606](https://github.com/nuxt/nuxt/issues/19606){rel=""nofollow""}), and as part of this have changed the format of our runtime output (using `.js` instead of `.mjs` extensions, providing `types` fields for subpath exports, and more).

## 🗺️ Custom config schema (advanced)

We've been testing out an experimental feature to allow modules and users to extend the Nuxt config schema ([#15592](https://github.com/nuxt/nuxt/issues/15592){rel=""nofollow""}), and we've now enabled this by default ([#19172](https://github.com/nuxt/nuxt/pull/19172){rel=""nofollow""}). We expect this will be particularly useful for module and layer/theme authors, and should result in some nicer DX for their users.

## Changelog

See the full changelog by [comparing the changes](https://github.com/nuxt/nuxt/compare/v3.2.3...v3.3.0){rel=""nofollow""} or checkout the [release on GitHub](https://github.com/nuxt/nuxt/releases/tag/v3.3.0){rel=""nofollow""}.

We would like to thank all the 28 contributors who helped on this release 💚
