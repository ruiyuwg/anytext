## experimental

### `alwaysRunFetchOnKeyChange`

Whether to run `useFetch` when the key changes, even if it is set to `immediate: false` and it has not been triggered yet.

`useFetch` and `useAsyncData` will always run when the key changes if `immediate: true` or if it has been already triggered.

- **Type**: `boolean`
- **Default:** `true`

### `appManifest`

Use app manifests to respect route rules on client-side.

- **Type**: `boolean`
- **Default:** `true`

### `asyncContext`

Enable native async context to be accessible for nested composables

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt PR #20918](https://github.com/nuxt/nuxt/pull/20918){rel=""nofollow""}

### `asyncEntry`

Set to true to generate an async entry point for the Vue bundle (for module federation support).

- **Type**: `boolean`
- **Default:** `false`

### `browserDevtoolsTiming`

Enable timings for Nuxt application hooks in the performance panel of Chromium-based browsers.

This feature adds performance markers for Nuxt hooks, allowing you to track their execution time in the browser's Performance tab. This is particularly useful for debugging performance issues.

- **Type**: `boolean`
- **Default:** `false`

**Example**:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    // Enable performance markers for Nuxt hooks in browser devtools
    browserDevtoolsTiming: true
  }
})
```

**See**: [PR #29922](https://github.com/nuxt/nuxt/pull/29922){rel=""nofollow""}

**See**: [Chrome DevTools Performance API](https://developer.chrome.com/docs/devtools/performance/extension#tracks){rel=""nofollow""}

### `buildCache`

Cache Nuxt/Nitro build artifacts based on a hash of the configuration and source files.

This only works for source files within `srcDir` and `serverDir` for the Vue/Nitro parts of your app.

- **Type**: `boolean`
- **Default:** `false`

### `checkOutdatedBuildInterval`

Set the time interval (in ms) to check for new builds. Disabled when `experimental.appManifest` is `false`.

Set to `false` to disable.

- **Type**: `number`
- **Default:** `3600000`

### `chromeDevtoolsProjectSettings`

Enable integration with Chrome DevTools Workspaces for Nuxt projects.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Chrome DevTools Project Settings](https://docs.google.com/document/d/1rfKPnxsNuXhnF7AiQZhu9kIwdiMS5hnAI05HBwFuBSM){rel=""nofollow""}

### `clientFallback`

Whether to enable the experimental `<NuxtClientFallback>` component for rendering content on the client if there's an error in SSR.

- **Type**: `boolean`
- **Default:** `false`

### `clientNodeCompat`

Automatically polyfill Node.js imports in the client build using `unenv`.

- **Type**: `boolean`
- **Default:** `false`

**See**: [unenv](https://github.com/unjs/unenv){rel=""nofollow""}

### `compileTemplate`

Whether to use `lodash.template` to compile Nuxt templates.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in [the nightly release channel](https://nuxt.com/docs/guide/going-further/nightly-release-channel).

- **Type**: `boolean`
- **Default:** `true`

### `componentIslands`

Experimental component islands support with `<NuxtIsland>` and `.island.vue` files.

By default it is set to 'auto', which means it will be enabled only when there are islands, server components or server pages in your app.

- **Type**: `string`
- **Default:** `"auto"`

### `configSchema`

Config schema support

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Issue #15592](https://github.com/nuxt/nuxt/issues/15592){rel=""nofollow""}

### `cookieStore`

Enables CookieStore support to listen for cookie updates (if supported by the browser) and refresh `useCookie` ref values.

- **Type**: `boolean`
- **Default:** `true`

**See**: [CookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore){rel=""nofollow""}

### `crossOriginPrefetch`

Enable cross-origin prefetch using the Speculation Rules API.

- **Type**: `boolean`
- **Default:** `false`

### `debugModuleMutation`

Record mutations to `nuxt.options` in module context, helping to debug configuration changes made by modules during the Nuxt initialization phase.

When enabled, Nuxt will track which modules modify configuration options, making it easier to trace unexpected configuration changes.

- **Type**: `boolean`
- **Default:** `false`

**Example**:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    // Enable tracking of config mutations by modules
    debugModuleMutation: true
  }
})
```

**See**: [PR #30555](https://github.com/nuxt/nuxt/pull/30555){rel=""nofollow""}

### `decorators`

Enable to use experimental decorators in Nuxt and Nitro.

- **Type**: `boolean`
- **Default:** `false`

**See**: <https://github.com/tc39/proposal-decorators>{rel=""nofollow""}

### `defaults`

This allows specifying the default options for core Nuxt components and composables.

These options will likely be moved elsewhere in the future, such as into `app.config` or into the `app/` directory.

#### `nuxtLink`

##### `componentName`

- **Type**: `string`
- **Default:** `"NuxtLink"`

##### `prefetch`

- **Type**: `boolean`
- **Default:** `true`

##### `prefetchOn`

###### `visibility`

- **Type**: `boolean`
- **Default:** `true`

#### `useAsyncData`

Options that apply to `useAsyncData` (and also therefore `useFetch`)

##### `deep`

- **Type**: `boolean`
- **Default:** `true`

##### `errorValue`

- **Type**: `string`
- **Default:** `"null"`

##### `value`

- **Type**: `string`
- **Default:** `"null"`

#### `useFetch`

### `emitRouteChunkError`

Emit `app:chunkError` hook when there is an error loading vite/webpack chunks.

By default, Nuxt will also perform a reload of the new route when a chunk fails to load when navigating to a new route (`automatic`).
Setting `automatic-immediate` will lead Nuxt to perform a reload of the current route right when a chunk fails to load (instead of waiting for navigation).
You can disable automatic handling by setting this to `false`, or handle chunk errors manually by setting it to `manual`.

- **Type**: `string`
- **Default:** `"automatic"`

**See**: [Nuxt PR #19038](https://github.com/nuxt/nuxt/pull/19038){rel=""nofollow""}

### `enforceModuleCompatibility`

Whether Nuxt should stop if a Nuxt module is incompatible.

- **Type**: `boolean`
- **Default:** `false`

### `entryImportMap`

- **Type**: `boolean`
- **Default:** `true`

### `externalVue`

Externalize `vue`, `@vue/*` and `vue-router` when building.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Issue #13632](https://github.com/nuxt/nuxt/issues/13632){rel=""nofollow""}

### `extraPageMetaExtractionKeys`

Configure additional keys to extract from the page metadata when using `scanPageMeta`.

This allows modules to access additional metadata from the page metadata. It's recommended to augment the NuxtPage types with your keys.

- **Type**: `array`

### `extractAsyncDataHandlers`

- **Type**: `boolean`
- **Default:** `false`

### `granularCachedData`

Whether to call and use the result from `getCachedData` on manual refresh for `useAsyncData` and `useFetch`.

- **Type**: `boolean`
- **Default:** `false`

### `headNext`

Use new experimental head optimisations:

- Add the capo.js head plugin in order to render tags in of the head in a more performant way. - Uses the hash hydration plugin to reduce initial hydration
- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Discussion #22632](https://github.com/nuxt/nuxt/discussions/22632){rel=""nofollow""}

### `inlineRouteRules`

Allow defining `routeRules` directly within your `~/pages` directory using `defineRouteRules`.

Rules are converted (based on the path) and applied for server requests. For example, a rule defined in `~/pages/foo/bar.vue` will be applied to `/foo/bar` requests. A rule in `~/pages/foo/[id].vue` will be applied to `/foo/**` requests.
For more control, such as if you are using a custom `path` or `alias` set in the page's `definePageMeta`, you should set `routeRules` directly within your `nuxt.config`.

- **Type**: `boolean`
- **Default:** `false`

### `lazyHydration`

Enable automatic configuration of hydration strategies for `<Lazy>` components.

This feature intelligently determines when to hydrate lazy components based on visibility, idle time, or other triggers, improving performance by deferring hydration of components until they're needed.

- **Type**: `boolean`
- **Default:** `true`

**Example**:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    lazyHydration: true // Enable smart hydration strategies for Lazy components
  }
})

// In your Vue components
<template>
  <Lazy>
    <ExpensiveComponent />
  </Lazy>
</template>
```

**See**: [PR #26468](https://github.com/nuxt/nuxt/pull/26468){rel=""nofollow""}

### `localLayerAliases`

Resolve `~`, `~~`, `@` and `@@` aliases located within layers with respect to their layer source and root directories.

- **Type**: `boolean`
- **Default:** `true`

### `navigationRepaint`

Wait for a single animation frame before navigation, which gives an opportunity for the browser to repaint, acknowledging user interaction.

It can reduce INP when navigating on prerendered routes.

- **Type**: `boolean`
- **Default:** `true`

### `nitroAutoImports`

- **Type**: `boolean`
- **Default:** `true`

### `noVueServer`

Disable vue server renderer endpoint within nitro.

- **Type**: `boolean`
- **Default:** `false`

### `normalizeComponentNames`

Ensure that auto-generated Vue component names match the full component name you would use to auto-import the component.

- **Type**: `boolean`
- **Default:** `false`

### `parseErrorData`

Whether to parse `error.data` when rendering a server error page.

- **Type**: `boolean`
- **Default:** `false`

### `payloadExtraction`

When this option is enabled (by default) payload of pages that are prerendered are extracted

- **Type**: `boolean`
- **Default:** `true`

### `pendingWhenIdle`

For `useAsyncData` and `useFetch`, whether `pending` should be `true` when data has not yet started to be fetched.

- **Type**: `boolean`
- **Default:** `true`

### `polyfillVueUseHead`

Whether or not to add a compatibility layer for modules, plugins or user code relying on the old `@vueuse/head` API.

This is disabled to reduce the client-side bundle by ~0.5kb.

- **Type**: `boolean`
- **Default:** `false`

### `purgeCachedData`

Whether to clean up Nuxt static and asyncData caches on route navigation.

Nuxt will automatically purge cached data from `useAsyncData` and `nuxtApp.static.data`. This helps prevent memory leaks and ensures fresh data is loaded when needed, but it is possible to disable it.

- **Type**: `boolean`
- **Default:** `true`

**Example**:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    // Disable automatic cache cleanup (default is true)
    purgeCachedData: false
  }
})
```

**See**: [PR #31379](https://github.com/nuxt/nuxt/pull/31379){rel=""nofollow""}

### `relativeWatchPaths`

Whether to provide relative paths in the `builder:watch` hook.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in [the nightly release channel](https://nuxt.com/docs/guide/going-further/nightly-release-channel).

- **Type**: `boolean`
- **Default:** `true`

### `renderJsonPayloads`

Render JSON payloads with support for revivifying complex types.

- **Type**: `boolean`
- **Default:** `true`

### `resetAsyncDataToUndefined`

Whether `clear` and `clearNuxtData` should reset async data to its *default* value or update it to `null`/`undefined`.

- **Type**: `boolean`
- **Default:** `true`

### `respectNoSSRHeader`

Allow disabling Nuxt SSR responses by setting the `x-nuxt-no-ssr` header.

- **Type**: `boolean`
- **Default:** `false`

### `restoreState`

Whether to restore Nuxt app state from `sessionStorage` when reloading the page after a chunk error or manual `reloadNuxtApp()` call.

To avoid hydration errors, it will be applied only after the Vue app has been mounted, meaning there may be a flicker on initial load.
Consider carefully before enabling this as it can cause unexpected behavior, and consider providing explicit keys to `useState` as auto-generated keys may not match across builds.

- **Type**: `boolean`
- **Default:** `false`

### `runtimeBaseURL`

- **Type**: `boolean`
- **Default:** `false`

### `scanPageMeta`

Allow exposing some route metadata defined in `definePageMeta` at build-time to modules (alias, name, path, redirect, props, middleware).

This only works with static or strings/arrays rather than variables or conditional assignment.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Issues #24770](https://github.com/nuxt/nuxt/issues/24770){rel=""nofollow""}

### `serverAppConfig`

- **Type**: `boolean`
- **Default:** `true`

### `sharedPrerenderData`

Automatically share payload *data* between pages that are prerendered. This can result in a significant performance improvement when prerendering sites that use `useAsyncData` or `useFetch` and fetch the same data in different pages.

It is particularly important when enabling this feature to make sure that any unique key of your data is always resolvable to the same data. For example, if you are using `useAsyncData` to fetch data related to a particular page, you should provide a key that uniquely matches that data. (`useFetch` should do this automatically for you.)

- **Type**: `boolean`
- **Default:** `false`

**Example**:

```ts
// This would be unsafe in a dynamic page (e.g. `[slug].vue`) because the route slug makes a difference
// to the data fetched, but Nuxt can't know that because it's not reflected in the key.
const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`/api/my-page/${route.params.slug}`)
})
// Instead, you should use a key that uniquely identifies the data fetched.
const { data } = await useAsyncData(route.params.slug, async () => {
  return await $fetch(`/api/my-page/${route.params.slug}`)
})
```

### `spaLoadingTemplateLocation`

Keep showing the spa-loading-template until suspense:resolve

- **Type**: `string`
- **Default:** `"within"`

**See**: [Nuxt Issues #21721](https://github.com/nuxt/nuxt/issues/21721){rel=""nofollow""}

### `templateImportResolution`

Disable resolving imports into Nuxt templates from the path of the module that added the template.

By default, Nuxt attempts to resolve imports in templates relative to the module that added them. Setting this to `false` disables this behavior, which may be useful if you're experiencing resolution conflicts in certain environments.

- **Type**: `boolean`
- **Default:** `true`

**Example**:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    // Disable template import resolution from module path
    templateImportResolution: false
  }
})
```

**See**: [PR #31175](https://github.com/nuxt/nuxt/pull/31175){rel=""nofollow""}

### `templateRouteInjection`

By default the route object returned by the auto-imported `useRoute()` composable is kept in sync with the current page in view in `<NuxtPage>`. This is not true for `vue-router`'s exported `useRoute` or for the default `$route` object available in your Vue templates.

By enabling this option a mixin will be injected to keep the `$route` template object in sync with Nuxt's managed `useRoute()`.

- **Type**: `boolean`
- **Default:** `true`

### `templateUtils`

Whether to provide a legacy `templateUtils` object (with `serialize`, `importName` and `importSources`) when compiling Nuxt templates.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in [the nightly release channel](https://nuxt.com/docs/guide/going-further/nightly-release-channel).

- **Type**: `boolean`
- **Default:** `true`

### `treeshakeClientOnly`

Tree shakes contents of client-only components from server bundle.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt PR #5750](https://github.com/nuxt/framework/pull/5750){rel=""nofollow""}

### `typedPages`

Enable the new experimental typed router using [unplugin-vue-router](https://github.com/posva/unplugin-vue-router){rel=""nofollow""}.

- **Type**: `boolean`
- **Default:** `false`

### `viewTransition`

Enable View Transition API integration with client-side router.

- **Type**: `boolean`
- **Default:** `false`

**See**: [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions){rel=""nofollow""}

### `viteEnvironmentApi`

- **Type**: `boolean`
- **Default:** `false`

### `watcher`

Set an alternative watcher that will be used as the watching service for Nuxt.

Nuxt uses 'chokidar-granular' if your source directory is the same as your root directory . This will ignore top-level directories (like `node_modules` and `.git`) that are excluded from watching.
You can set this instead to `parcel` to use `@parcel/watcher`, which may improve performance in large projects or on Windows platforms.
You can also set this to `chokidar` to watch all files in your source directory.

- **Type**: `string`
- **Default:** `"chokidar"`

**See**: [chokidar](https://github.com/paulmillr/chokidar){rel=""nofollow""}

**See**: [@parcel/watcher](https://github.com/parcel-bundler/watcher){rel=""nofollow""}

### `writeEarlyHints`

Write early hints when using node server.

- **Type**: `boolean`
- **Default:** `false`

::callout
**Note**: nginx does not support 103 Early hints in the current version.
::

## extends

Extend project from multiple local or remote sources.

Value should be either a string or array of strings pointing to source directories or config path relative to current config.
You can use `github:`, `gh:` `gitlab:` or `bitbucket:`

**See**: [`c12` docs on extending config layers](https://github.com/unjs/c12#extending-config-layer-from-remote-sources){rel=""nofollow""}

**See**: [`giget` documentation](https://github.com/unjs/giget){rel=""nofollow""}

## extensions

The extensions that should be resolved by the Nuxt resolver.

- **Type**: `array`
- **Default**

```json
[
  ".js",
  ".jsx",
  ".mjs",
  ".ts",
  ".tsx",
  ".vue"
]
```

## features

Some features of Nuxt are available on an opt-in basis, or can be disabled based on your needs.

### `devLogs`

Stream server logs to the client as you are developing. These logs can be handled in the `dev:ssr-logs` hook.

If set to `silent`, the logs will not be printed to the browser console.

- **Type**: `boolean`
- **Default:** `false`

### `inlineStyles`

Inline styles when rendering HTML (currently vite only).

You can also pass a function that receives the path of a Vue component and returns a boolean indicating whether to inline the styles for that component.

- **Type**: `boolean`
- **Default:** `true`

### `noScripts`

Turn off rendering of Nuxt scripts and JS resource hints. You can also disable scripts more granularly within `routeRules`.

If set to 'production' or `true`, JS will be disabled in production mode only.

- **Type**: `boolean`
- **Default:** `false`

## future

`future` is for early opting-in to new features that will become default in a future (possibly major) version of the framework.

### `compatibilityVersion`

Enable early access to Nuxt v4 features or flags.

Setting `compatibilityVersion` to `4` changes defaults throughout your Nuxt configuration, but you can granularly re-enable Nuxt v3 behaviour when testing (see example). Please file issues if so, so that we can address in Nuxt or in the ecosystem.

- **Type**: `number`
- **Default:** `3`

**Example**:

```ts
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // To re-enable _all_ Nuxt v3 behaviour, set the following options:
  srcDir: '.',
  dir: {
    app: 'app'
  },
  experimental: {
    compileTemplate: true,
    templateUtils: true,
    relativeWatchPaths: true,
    resetAsyncDataToUndefined: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  }
})
```

### `multiApp`

This enables early access to the experimental multi-app support.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt Issue #21635](https://github.com/nuxt/nuxt/issues/21635){rel=""nofollow""}

### `typescriptBundlerResolution`

This enables 'Bundler' module resolution mode for TypeScript, which is the recommended setting for frameworks like Nuxt and Vite.

It improves type support when using modern libraries with `exports`.
You can set it to false to use the legacy 'Node' mode, which is the default for TypeScript.

- **Type**: `boolean`
- **Default:** `true`

**See**: [TypeScript PR implementing `bundler` module resolution](https://github.com/microsoft/TypeScript/pull/51669){rel=""nofollow""}

## generate

### `exclude`

This option is no longer used. Instead, use `nitro.prerender.ignore`.

- **Type**: `array`

### `routes`

The routes to generate.

If you are using the crawler, this will be only the starting point for route generation. This is often necessary when using dynamic routes.
It is preferred to use `nitro.prerender.routes`.

- **Type**: `array`

**Example**:

```js
routes: ['/users/1', '/users/2', '/users/3']
```

## hooks

Hooks are listeners to Nuxt events that are typically used in modules, but are also available in `nuxt.config`.

Internally, hooks follow a naming pattern using colons (e.g., build:done).
For ease of configuration, you can also structure them as an hierarchical object in `nuxt.config` (as below).

**Example**:

```js
import fs from 'node:fs'
import path from 'node:path'
export default {
  hooks: {
    build: {
      done(builder) {
        const extraFilePath = path.join(
          builder.nuxt.options.buildDir,
          'extra-file'
        )
        fs.writeFileSync(extraFilePath, 'Something extra')
      }
    }
  }
}
```

## ignore

More customizable than `ignorePrefix`: all files matching glob patterns specified inside the `ignore` array will be ignored in building.

- **Type**: `array`
- **Default**

```json
[
  "**/*.stories.{js,cts,mts,ts,jsx,tsx}",
  "**/*.{spec,test}.{js,cts,mts,ts,jsx,tsx}",
  "**/*.d.{cts,mts,ts}",
  "**/*.d.vue.{cts,mts,ts}",
  "**/.{pnpm-store,vercel,netlify,output,git,cache,data,direnv}",
  "/vendor",
  "**/node-compile-cache",
  "**/test-results",
  "**/*.sock",
  ".nuxt/analyze",
  ".nuxt",
  "**/-*.*"
]
```

## ignoreOptions

Pass options directly to `node-ignore` (which is used by Nuxt to ignore files).

**See**: [node-ignore](https://github.com/kaelzhang/node-ignore){rel=""nofollow""}

**Example**:

```js
ignoreOptions: {
  ignorecase: false
}
```

## ignorePrefix

Any file in `pages/`, `layouts/`, `middleware/`, and `public/` directories will be ignored during the build process if its filename starts with the prefix specified by `ignorePrefix`. This is intended to prevent certain files from being processed or served in the built application. By default, the `ignorePrefix` is set to '-', ignoring any files starting with '-'.

- **Type**: `string`
- **Default:** `"-"`

## imports

Configure how Nuxt auto-imports composables into your application.

**See**: [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/composables){rel=""nofollow""}

### `dirs`

An array of custom directories that will be auto-imported. Note that this option will not override the default directories (~/composables, ~/utils).

- **Type**: `array`

**Example**:

```js
imports: {
  // Auto-import pinia stores defined in `~/stores`
  dirs: ['stores']
}
```

### `global`

- **Type**: `boolean`
- **Default:** `false`

### `scan`

Whether to scan your `composables/` and `utils/` directories for composables to auto-import. Auto-imports registered by Nuxt or other modules, such as imports from `vue` or `nuxt`, will still be enabled.

- **Type**: `boolean`
- **Default:** `true`

## logLevel

Log level when building logs.

Defaults to 'silent' when running in CI or when a TTY is not available. This option is then used as 'silent' in Vite and 'none' in Webpack

- **Type**: `string`
- **Default:** `"info"`

## modules

Modules are Nuxt extensions which can extend its core functionality and add endless integrations.

Each module is either a string (which can refer to a package, or be a path to a file), a tuple with the module as first string and the options as a second object, or an inline module function.
Nuxt tries to resolve each item in the modules array using node require path (in `node_modules`) and then will be resolved from project `srcDir` if `~` alias is used.

- **Type**: `array`

::callout
**Note**: Modules are executed sequentially so the order is important. First, the modules defined in `nuxt.config.ts` are loaded. Then, modules found in the `modules/`
directory are executed, and they load in alphabetical order.
::

**Example**:

```js
modules: [
  // Using package name
  '@nuxtjs/axios',
  // Relative to your project srcDir
  '~/modules/awesome.js',
  // Providing options
  ['@nuxtjs/google-analytics', { ua: 'X1234567' }],
  // Inline definition
  function () {}
]
```

## modulesDir

Used to set the modules directories for path resolving (for example, webpack's `resolveLoading`, `nodeExternals` and `postcss`).

The configuration path is relative to `options.rootDir` (default is current working directory).
Setting this field may be necessary if your project is organized as a yarn workspace-styled mono-repository.

- **Type**: `array`
- **Default**

```json
[
  "/<rootDir>/node_modules"
]
```

**Example**:

```js
export default {
  modulesDir: ['../../node_modules']
}
```

## nitro

Configuration for Nitro.

**See**: [Nitro configuration docs](https://nitro.build/config/){rel=""nofollow""}

### `routeRules`

- **Type**: `object`

### `runtimeConfig`

- **Type**: `object`
- **Default**

```json
{
  "public": {},
  "app": {
    "buildId": "f90f6a12-4673-4481-a5f5-514e21c7a35b",
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_"
  }
}
```
