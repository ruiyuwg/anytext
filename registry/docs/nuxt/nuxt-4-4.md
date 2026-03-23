# Nuxt 4.4

## 🏭 `createUseFetch` and `createUseAsyncData`

You can now create **custom instances** of `useFetch` and `useAsyncData` with your own default options ([#32300](https://github.com/nuxt/nuxt/pull/32300){rel=""nofollow""}).

```ts [composables/api.ts]
// Simple defaults
export const useClientFetch = createUseFetch({
  server: false,
})

// Dynamic defaults with full control over merging
export const useApiFetch = createUseFetch((currentOptions) => {
  const runtimeConfig = useRuntimeConfig()

  return {
    ...currentOptions,
    baseURL: currentOptions.baseURL ?? runtimeConfig.public.baseApiUrl,
  }
})
```

Then use them exactly like `useFetch` – they're fully typed and support all the same options:

```vue [pages/dashboard.vue]
<script setup lang="ts">
// Uses your baseURL from runtimeConfig automatically
const { data: users } = await useApiFetch('/users')
</script>
```

When you pass a plain object, your usage options automatically override the defaults. When you pass a function, you get full control over how options are merged – which means you can compose interceptors, headers, and other complex options however you need.

Under the hood, this is powered by a new Nuxt ad-hoc module that scans your composables directory and automatically registers your custom instances for key injection – so they work seamlessly with SSR, just like `useAsyncData` and `useFetch`.

There's also `createUseAsyncData` for the same pattern with `useAsyncData`.

:read-more{to="https://nuxt.com/docs/api/composables/create-use-async-data"}

## 🗺️ Vue Router v5

We've upgraded to [vue-router v5](https://github.com/vuejs/router){rel=""nofollow""} ([#34181](https://github.com/nuxt/nuxt/pull/34181){rel=""nofollow""}), which removes the dependency on `unplugin-vue-router`. This is the first major vue-router upgrade since Nuxt 3, and it comes with a bunch of improvements under the hood.

For most apps, this should be a transparent upgrade. If you're using `unplugin-vue-router` directly, you can remove it from your dependencies.

The next step will be taking typed routes out of experimental status. 👀

## 💪 Typed Layout Props in `definePageMeta`

You can now pass props to your layouts directly from `definePageMeta` ([#34262](https://github.com/nuxt/nuxt/pull/34262){rel=""nofollow""}). This means your layouts can be parameterised per-page without needing to use `provide`/`inject` or other workarounds. Check out the [updated docs](https://nuxt.com/docs/guide/directory-structure/layouts#layout-props) for the full details.

```ts [pages/dashboard.vue]
definePageMeta({
  layout: {
    name: 'panel',
    props: {
      sidebar: true,
      title: 'Dashboard',
    },
  },
})
```

Even better – the props are **fully typed** ([#34409](https://github.com/nuxt/nuxt/pull/34409){rel=""nofollow""}). If your layout defines props, you'll get autocomplete and type-checking in `definePageMeta`.

```vue [layouts/panel.vue]
<script setup lang="ts">
defineProps<{
  sidebar?: boolean
  title?: string
}>()
</script>
```

:read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}

## 🗣️ `useAnnouncer` Composable

Accessibility got a major boost with the new `useAnnouncer` composable and `<NuxtAnnouncer>` component ([#34318](https://github.com/nuxt/nuxt/pull/34318){rel=""nofollow""}). While `useRouteAnnouncer` handles page navigation for screen readers, many apps need to announce **dynamic in-page changes** – form submissions, loading states, search results, and more.

::code-group

```vue [app.vue]
<template>
  <NuxtAnnouncer />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

```vue [components/ContactForm.vue]
<script setup lang="ts">
const { polite, assertive } = useAnnouncer()

async function submitForm() {
  try {
    await $fetch('/api/contact', { method: 'POST', body: formData })
    polite('Message sent successfully')
  }
  catch (error) {
    assertive('Error: Failed to send message')
  }
}
</script>
```

::

::note
This is part of our [accessibility roadmap](https://github.com/nuxt/nuxt/issues/23255){rel=""nofollow""}. You don't need to use it everywhere – for many interactions, moving focus to new content or using native form validation is sufficient. `useAnnouncer` is most useful when content changes dynamically without a corresponding focus change.
::

:read-more{to="https://nuxt.com/docs/api/composables/use-announcer"}

## 🚀 Migrate to `unrouting`

We've migrated Nuxt's file-system route generation to [`unrouting`](https://github.com/unjs/unrouting){rel=""nofollow""} ([#34316](https://github.com/nuxt/nuxt/pull/34316){rel=""nofollow""}), which uses a trie data structure for constructing routes. The cold start is roughly the same (~8ms vs ~6ms for large apps), but dev server changes are **up to 28x faster** when you're not adding/removing pages, and ~15% faster even when you are.

This also makes route generation more deterministic – it's no longer sensitive to page file ordering.

## 🍫 Smarter Payload Handling for Cached Routes

When a cached route (ISR/SWR) is rendered at runtime with payload extraction enabled, the browser immediately fetches `_payload.json` as a second request – which triggers a full SSR re-render of the same page. In serverless environments, this can spin up a second lambda before the first response has even finished streaming.

This release addresses this with two changes ([#34410](https://github.com/nuxt/nuxt/pull/34410){rel=""nofollow""}):

1. A new `payloadExtraction: 'client'` mode that inlines the full payload in the initial HTML response while still generating `_payload.json` for client-side navigation
2. A runtime in-memory LRU payload cache so that `_payload.json` requests can be served without a full re-render

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: 'client',
  },
})
```

::note
`payloadExtraction: 'client'` will become the default with `compatibilityVersion: 5`. The runtime cache is active for all users.
::

:read-more{to="https://nuxt.com/docs/guide/going-further/experimental-features#payloadextraction"}

## 🍪 `refresh` Option for `useCookie`

If you're using cookies for session management, you've probably run into the problem of needing to extend a cookie's expiration without changing its value. The new `refresh` option makes this simple ([#33814](https://github.com/nuxt/nuxt/pull/33814){rel=""nofollow""}):

```ts
const session = useCookie('session-id', {
  maxAge: 60 * 60,
  refresh: true,
})

// Extends expiration each time, even with the same value
session.value = session.value
```

:read-more{to="https://nuxt.com/docs/api/composables/use-cookie"}

## ♻️ `useState` Reset to Default

`useState` and `clearNuxtState` now support resetting to the initial value instead of clearing to `undefined` ([#33527](https://github.com/nuxt/nuxt/pull/33527){rel=""nofollow""}). This aligns with how `useAsyncData` handles resets and is more intuitive for state management.

```ts
const count = useState('counter', () => 0)
count.value = 42

// Resets to 0 (the init value), not undefined
clearNuxtState('counter')
```

:read-more{to="https://nuxt.com/docs/api/utils/clear-nuxt-state"}

## 🕵️‍♂️ Better Import Protection

Inspired by features in [TanStack Start](https://tanstack.com/start/latest/docs/framework/react/guide/import-protection){rel=""nofollow""}, import protection now shows **suggestions** and a full **trace** of where a problematic import originated ([#34454](https://github.com/nuxt/nuxt/pull/34454){rel=""nofollow""}). This makes it much easier to debug why a server-only import ended up in your client bundle.

For example, if you accidentally import from a server route in a component:

![More useful import protection error](https://nuxt.com/assets/blog/import-protection.png)

The trace shows the import chain (the component was imported from a page), the exact line of code, and actionable suggestions for how to fix it.

We plan to continue work on improving our error messages. 🪵

## 🔮 View Transitions Types

You can now define [view transition types](https://developer.chrome.com/blog/view-transitions-update-io24#view-transition-types){rel=""nofollow""} in Nuxt's experimental view transitions support ([#31982](https://github.com/nuxt/nuxt/pull/31982){rel=""nofollow""}). This lets you use different transition styles for different navigation patterns (forwards vs. backwards, tabs vs. pages, etc.).

:read-more{to="https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental"}

## 💡 Improved `optimizeDeps` Hints

When Vite discovers new dependencies at runtime and triggers page reloads, Nuxt now shows a clear, copy-pasteable `nuxt.config.ts` snippet to pre-bundle them ([#34320](https://github.com/nuxt/nuxt/pull/34320){rel=""nofollow""}). It also warns about unresolvable entries at startup.

## 🏷️ Normalised Page Component Names (Experimental)

A new experimental option normalises page component names to match route names ([#33513](https://github.com/nuxt/nuxt/pull/33513){rel=""nofollow""}), which can help with consistency in devtools and debugging.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  experimental: {
    normalizeComponentNames: true,
  },
})
```

:read-more{to="https://nuxt.com/docs/guide/going-further/experimental-features#normalizecomponentnames"}

## ⚡ Build Profiling

Ever wondered where your build time goes? You can now get a detailed performance breakdown of your Nuxt builds ([#34468](https://github.com/nuxt/nuxt/pull/34468){rel=""nofollow""}, [nuxt/cli#1243](https://github.com/nuxt/cli/pull/1243){rel=""nofollow""}):

```bash
nuxt build --profile
```

This produces a report showing duration, RSS delta, and heap delta for every build phase, module, and bundler plugin:

![Build timings report printed to console](https://nuxt.com/assets/blog/build-profiler.png)

It also profiles individual modules and bundler plugins, making it easy to spot bottlenecks. Three output formats are written:

- **Chrome Trace** (`.nuxt/perf-trace.json`) – open in `chrome://tracing` or Perfetto for a visual timeline
- **JSON report** (`.nuxt/perf-report.json`) – machine-readable data for tracking over time
- **CPU profile** (`nuxt-build.cpuprofile`) – open in Chrome DevTools or VS Code for flame graphs

For even more detail, use `--profile=verbose` to print timing breakdowns to the console.

:read-more{to="https://nuxt.com/docs/api/commands/build"}

We'll be using this feature to make Nuxt even faster – and if performance is something you care about, this might be a good opportunity to contribute!

## 🔥 Performance Improvements

- **14,000x faster module ID parsing** – replaced `new URL()` + regex chain with a single `indexOf` + slice ([#34451](https://github.com/nuxt/nuxt/pull/34451){rel=""nofollow""})
- **Disabled NuxtLink visibility prefetching in dev** – stops Vite from discovering and reloading deps unnecessarily during development ([#34325](https://github.com/nuxt/nuxt/pull/34325){rel=""nofollow""})

## ⬆︎ Upgrading

Our recommendation for upgrading is to run:

```sh
npx nuxt upgrade --dedupe
```

This will deduplicate your lockfile and help ensure you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

::tip
Check out our [upgrade guide](https://nuxt.com/docs/getting-started/upgrade) if upgrading from an older version.
::

## 👉 Full Release Notes

::read-more

Read the full release notes of Nuxt `v4.4.0`.
::

Thank you to all of the many contributors to this release! 💚
