### Corrected Module Loading Order in Layers

🚦 **Impact Level**: Minimal

#### What Changed

The order in which modules are loaded when using [Nuxt layers](https://nuxt.com/docs/3.x/guide/going-further/layers) has been corrected. Previously, modules from the project root were loaded before modules from extended layers, which was the reverse of the expected behavior.

Now modules are loaded in the correct order:

1. **Layer modules first** (in extend order - deeper layers first)
2. **Project modules last** (highest priority)

This affects both:

- Modules defined in the `modules` array in `nuxt.config.ts`
- Auto-discovered modules from the `modules/` directory

#### Reasons for Change

This change ensures that:

- Extended layers have lower priority than the consuming project
- Module execution order matches the intuitive layer inheritance pattern
- Module configuration and hooks work as expected in multi-layer setups

#### Migration Steps

**Most projects will not need changes**, as this corrects the loading order to match expected behavior.

However, if your project was relying on the previous incorrect order, you may need to:

1. **Review module dependencies**: Check if any modules depend on specific loading order
2. **Adjust module configuration**: If modules were configured to work around the incorrect order
3. **Test thoroughly**: Ensure all functionality works as expected with the corrected order

Example of the new correct order:

```ts
// Layer: my-layer/nuxt.config.ts
export default defineNuxtConfig({
  modules: ['layer-module-1', 'layer-module-2'],
})

// Project: nuxt.config.ts
export default defineNuxtConfig({
  extends: ['./my-layer'],
  modules: ['project-module-1', 'project-module-2'],
})

// Loading order (corrected):
// 1. layer-module-1
// 2. layer-module-2
// 3. project-module-1 (can override layer modules)
// 4. project-module-2 (can override layer modules)
```

If you encounter issues with module order dependencies due to needing to register a hook, consider using the [`modules:done` hook](https://nuxt.com/docs/3.x/guide/modules#custom-hooks) for modules that need to call a hook. This is run after all other modules have been loaded, which means it is safe to use.

👉 See [PR #31507](https://github.com/nuxt/nuxt/pull/31507){rel=""nofollow""} and [issue #25719](https://github.com/nuxt/nuxt/issues/25719){rel=""nofollow""} for more details.

### Deduplication of Route Metadata

🚦 **Impact Level**: Minimal

#### What Changed

It's possible to set some route metadata using `definePageMeta`, such as the `name`, `path`, and so on. Previously these were available both on the route and on route metadata (for example, `route.name` and `route.meta.name`).

Now, they are only accessible on the route object.

#### Reasons for Change

This is a result of enabling `experimental.scanPageMeta` by default, and is a performance optimization.

#### Migration Steps

The migration should be straightforward:

```diff
  const route = useRoute()
  
- console.log(route.meta.name)
+ console.log(route.name)
```

### Normalized Component Names

🚦 **Impact Level**: Moderate

Vue will now generate component names that match the Nuxt pattern for component naming.

#### What Changed

By default, if you haven't set it manually, Vue will assign a component name that matches
the filename of the component.

```bash [Directory structure]
├─ components/
├─── SomeFolder/
├───── MyComponent.vue
```

In this case, the component name would be `MyComponent`, as far as Vue is concerned. If you wanted to use `<KeepAlive>` with it, or identify it in the Vue DevTools, you would need to use this name.

But in order to auto-import it, you would need to use `SomeFolderMyComponent`.

With this change, these two values will match, and Vue will generate a component name that matches the Nuxt pattern for component naming.

#### Migration Steps

Ensure that you use the updated name in any tests which use `findComponent` from `@vue/test-utils` and in any `<KeepAlive>` which depends on the name of your component.

Alternatively, for now, you can disable this behaviour with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    normalizeComponentNames: false,
  },
})
```

### Unhead v2

🚦 **Impact Level**: Minimal

#### What Changed

[Unhead](https://unhead.unjs.io/){rel=""nofollow""}, used to generate `<head>` tags, has been updated to version 2. While mostly compatible it includes several breaking changes
for lower-level APIs.

- Removed props: `vmid`, `hid`, `children`, `body`.
- Promise input no longer supported.
- Tags are now sorted using Capo.js by default.

#### Migration Steps

The above changes should have minimal impact on your app.

If you have issues you should verify:

- You're not using any of the removed props.

```diff
useHead({
  meta: [{ 
    name: 'description', 
    // meta tags don't need a vmid, or a key    
-   vmid: 'description' 
-   hid: 'description'
  }]
})
```

- If you're using [Template Params](https://unhead.unjs.io/docs/head/guides/plugins/template-params){rel=""nofollow""} or [Alias Tag Sorting](https://unhead.unjs.io/docs/head/guides/plugins/alias-sorting){rel=""nofollow""}, you will need to explicitly opt in to these features now.

```ts
import { AliasSortingPlugin, TemplateParamsPlugin } from '@unhead/vue/plugins'

export default defineNuxtPlugin({
  setup () {
    const unhead = injectHead()
    unhead.use(TemplateParamsPlugin)
    unhead.use(AliasSortingPlugin)
  },
})
```

While not required it's recommended to update any imports from `@unhead/vue` to `#imports` or `nuxt/app`.

```diff
-import { useHead } from '@unhead/vue'
+import { useHead } from '#imports'
```

If you still have issues you may revert to the v1 behavior by enabling the `head.legacy` config.

```ts
export default defineNuxtConfig({
  unhead: {
    legacy: true,
  },
})
```

### New DOM Location for SPA Loading Screen

🚦 **Impact Level**: Minimal

#### What Changed

When rendering a client-only page (with `ssr: false`), we optionally render a loading screen (from `~/app/spa-loading-template.html` - note that this has also changed to `~/spa-loading-template.html` in Nuxt 4), within the Nuxt app root:

```html
<div id="__nuxt">
  <!-- spa loading template -->
</div>
```

Now, we default to rendering the template alongside the Nuxt app root:

```html
<div id="__nuxt"></div>
<!-- spa loading template -->
```

#### Reasons for Change

This allows the spa loading template to remain in the DOM until the Vue app suspense resolves, preventing a flash of white.

#### Migration Steps

If you were targeting the spa loading template with CSS or `document.queryElement` you will need to update your selectors. For this purpose you can use the new `app.spaLoaderTag` and `app.spaLoaderAttrs` configuration options.

Alternatively, you can revert to the previous behaviour with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    spaLoadingTemplateLocation: 'within',
  },
})
```

### Parsed `error.data`

🚦 **Impact Level**: Minimal

It was possible to throw an error with a `data` property, but this was not parsed. Now, it is parsed and made available in the `error` object. Although a fix, this is technically a breaking change if you were relying on the previous behavior and parsing it manually.

#### Migration Steps

Update your custom `error.vue` to remove any additional parsing of `error.data`:

```diff
  <script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError
  })

- const data = JSON.parse(error.data)
+ const data = error.data
  </script>
```

Alternatively, you can disable this change:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    parseErrorData: false,
  },
})
```

### More Granular Inline Styles

🚦 **Impact Level**: Moderate

Nuxt will now only inline styles for Vue components, not global CSS.

#### What Changed

Previously, Nuxt would inline all CSS, including global styles, and remove `<link>` elements to separate CSS files. Now, Nuxt will only do this for Vue components (which previously produced separate chunks of CSS). We think this is a better balance of reducing separate network requests (just as before, there will not be separate requests for individual `.css` files per-page or per-component on the initial load), as well as allowing caching of a single global CSS file and reducing the document download size of the initial request.

#### Migration Steps

This feature is fully configurable and you can revert to the previous behavior by setting `inlineStyles: true` to inline global CSS as well as per-component CSS.

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  features: {
    inlineStyles: true,
  },
})
```

### Scan Page Meta After Resolution

🚦 **Impact Level**: Minimal

#### What Changed

We now scan page metadata (defined in `definePageMeta`) *after* calling the `pages:extend` hook rather than before.

#### Reasons for Change

This was to allow scanning metadata for pages that users wanted to add in `pages:extend`. We still offer an opportunity to change or override page metadata in a new `pages:resolved` hook.

#### Migration Steps

If you want to override page metadata, do that in `pages:resolved` rather than in `pages:extend`.

```diff
  export default defineNuxtConfig({
    hooks: {
-     'pages:extend'(pages) {
+     'pages:resolved'(pages) {
        const myPage = pages.find(page => page.path === '/')
        myPage.meta ||= {}
        myPage.meta.layout = 'overridden-layout'
      }
    }
  })
```

Alternatively, you can revert to the previous behaviour with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    scanPageMeta: true,
  },
})
```

### Shared Prerender Data

🚦 **Impact Level**: Medium

#### What Changed

We enabled a previously experimental feature to share data from `useAsyncData` and `useFetch` calls, across different pages. See [original PR](https://github.com/nuxt/nuxt/pull/24894){rel=""nofollow""}.

#### Reasons for Change

This feature automatically shares payload *data* between pages that are prerendered. This can result in a significant performance improvement when prerendering sites that use `useAsyncData` or `useFetch` and fetch the same data in different pages.

For example, if your site requires a `useFetch` call for every page (for example, to get navigation data for a menu, or site settings from a CMS), this data would only be fetched once when prerendering the first page that uses it, and then cached for use when prerendering other pages.

#### Migration Steps

Make sure that any unique key of your data is always resolvable to the same data. For example, if you are using `useAsyncData` to fetch data related to a particular page, you should provide a key that uniquely matches that data. (`useFetch` should do this automatically for you.)

```ts [pages/test/[slug\\].vue]
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

Alternatively, you can disable this feature with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    sharedPrerenderData: false,
  },
})
```

### Default `data` and `error` values in `useAsyncData` and `useFetch`

🚦 **Impact Level**: Minimal

#### What Changed

`data` and `error` objects returned from `useAsyncData` will now default to `undefined`.

#### Reasons for Change

Previously `data` was initialized to `null` but reset in `clearNuxtData` to `undefined`. `error` was initialized to `null`. This change is to bring greater consistency.

#### Migration Steps

If you were checking if `data.value` or `error.value` were `null`, you can update these checks to check for `undefined` instead.

::tip
You can automate this step by running `npx codemod@latest nuxt/4/default-data-error-value`
::

If you encounter any issues you can revert back to the previous behavior with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    defaults: {
      useAsyncData: {
        value: 'null',
        errorValue: 'null',
      },
    },
  },
})
```

Please report an issue if you are doing this, as we do not plan to keep this as configurable.

### Removal of deprecated `boolean` values for `dedupe` option when calling `refresh` in `useAsyncData` and `useFetch`

🚦 **Impact Level**: Minimal

#### What Changed

Previously it was possible to pass `dedupe: boolean` to `refresh`. These were aliases of `cancel` (`true`) and `defer` (`false`).

```ts [app.vue] twoslash
// @errors: 2322
const { refresh } = await useAsyncData(() => Promise.resolve({ message: 'Hello, Nuxt!' }))

async function refreshData () {
  await refresh({ dedupe: true })
}
```

#### Reasons for Change

These aliases were removed, for greater clarity.

The issue came up when adding `dedupe` as an option to `useAsyncData`, and we removed the boolean values as they ended up being *opposites*.

`refresh({ dedupe: false })` meant **do not *cancel* existing requests in favour of this new one**. But passing `dedupe: true` within the options of `useAsyncData` means \**do not make any new requests if there is an existing pending request.*\* (See [PR](https://github.com/nuxt/nuxt/pull/24564#pullrequestreview-1764584361){rel=""nofollow""}.)

#### Migration Steps

The migration should be straightforward:

```diff
  const { refresh } = await useAsyncData(async () => ({ message: 'Hello, Nuxt 3!' }))
  
  async function refreshData () {
-   await refresh({ dedupe: true })
+   await refresh({ dedupe: 'cancel' })

-   await refresh({ dedupe: false })
+   await refresh({ dedupe: 'defer' })
  }
```

::tip
You can automate this step by running `npx codemod@latest nuxt/4/deprecated-dedupe-value`
::

### Respect defaults when clearing `data` in `useAsyncData` and `useFetch`

🚦 **Impact Level**: Minimal

#### What Changed

If you provide a custom `default` value for `useAsyncData`, this will now be used when calling `clear` or `clearNuxtData` and it will be reset to its default value rather than simply unset.

#### Reasons for Change

Often users set an appropriately empty value, such as an empty array, to avoid the need to check for `null`/`undefined` when iterating over it. This should be respected when resetting/clearing the data.

#### Migration Steps

If you encounter any issues you can revert back to the previous behavior, for now, with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    resetAsyncDataToUndefined: true,
  },
})
```

Please report an issue if you are doing so, as we do not plan to keep this as configurable.

### Alignment of `pending` value in `useAsyncData` and `useFetch`

🚦 **Impact Level**: Medium

The `pending` object returned from `useAsyncData`, `useFetch`, `useLazyAsyncData` and `useLazyFetch` is now a computed property that is `true` only when `status` is also pending.

#### What Changed

Now, when `immediate: false` is passed, `pending` will be `false` until the first request is made. This is a change from the previous behavior, where `pending` was always `true` until the first request was made.

#### Reasons for Change

This aligns the meaning of `pending` with the `status` property, which is also `pending` when the request is in progress.

#### Migration Steps

If you rely on the `pending` property, ensure that your logic accounts for the new behavior where `pending` will only be `true` when the status is also pending.

```diff
  <template>
-   <div v-if="!pending">
+   <div v-if="status === 'success'">
      <p>Data: {{ data }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  <script setup lang="ts">
  const { data, pending, execute, status } = await useAsyncData(() => fetch('/api/data'), {
    immediate: false
  })
  onMounted(() => execute())
  </script>
```

Alternatively, you can temporarily revert to the previous behavior with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    pendingWhenIdle: true,
  },
})
```

### Key Change Behavior in `useAsyncData` and `useFetch`

🚦 **Impact Level**: Medium

#### What Changed

When using reactive keys in `useAsyncData` or `useFetch`, Nuxt automatically refetches data when the key changes. When `immediate: false` is set, `useAsyncData` will only fetch data when the key changes if the data has already been fetched once.

Previously, `useFetch` had slightly different behavior. It would always fetch data when the key changed.

Now, `useFetch` and `useAsyncData` behave consistently - by only fetch data when the key changes if the data has already been fetched once.

#### Reasons for Change

This ensures consistent behavior between `useAsyncData` and `useFetch`, and prevents unexpected fetches. If you have set `immediate: false`, then you must call `refresh` or `execute` or data will never be fetched in `useFetch` or `useAsyncData`.

#### Migration Steps

This change should generally improve the expected behavior, but if you were expecting changing the key or options of a non-immediate `useFetch`, you now will need to trigger it manually the first time.

```diff
  const id = ref('123')
  const { data, execute } = await useFetch('/api/test', {
    query: { id },
    immediate: false
  )
+ watch(id, () => execute(), { once: true })
```

To opt out of this behavior:

```ts
// Or globally in your Nuxt config
export default defineNuxtConfig({
  experimental: {
    alwaysRunFetchOnKeyChange: true,
  },
})
```

### Shallow Data Reactivity in `useAsyncData` and `useFetch`

🚦 **Impact Level**: Minimal

The `data` object returned from `useAsyncData`, `useFetch`, `useLazyAsyncData` and `useLazyFetch` is now a `shallowRef` rather than a `ref`.

#### What Changed

When new data is fetched, anything depending on `data` will still be reactive because the entire object is replaced. But if your code changes a property *within* that data structure, this will not trigger any reactivity in your app.

#### Reasons for Change

This brings a **significant** performance improvement for deeply nested objects and arrays because Vue does not need to watch every single property/array for modification. In most cases, `data` should also be immutable.

#### Migration Steps

In most cases, no migration steps are required, but if you rely on the reactivity of the data object then you have two options:

1. You can granularly opt in to deep reactivity on a per-composable basis:
   ```diff
   - const { data } = useFetch('/api/test')
   + const { data } = useFetch('/api/test', { deep: true })
   ```
2. You can change the default behavior on a project-wide basis (not recommended):
   ```ts [nuxt.config.ts] twoslash
   export default defineNuxtConfig({
     experimental: {
       defaults: {
         useAsyncData: {
           deep: true,
         },
       },
     },
   })
   ```

::tip
If you need to, you can automate this step by running `npx codemod@latest nuxt/4/shallow-function-reactivity`
::

### Absolute Watch Paths in `builder:watch`

🚦 **Impact Level**: Minimal

#### What Changed

The Nuxt `builder:watch` hook now emits a path which is absolute rather than relative to your project `srcDir`.

#### Reasons for Change

This allows us to support watching paths which are outside your `srcDir`, and offers better support for layers and other more complex patterns.

#### Migration Steps

We have already proactively migrated the public Nuxt modules which we are aware use this hook. See [issue #25339](https://github.com/nuxt/nuxt/issues/25339){rel=""nofollow""}.

However, if you are a module author using the `builder:watch` hook and wishing to remain backwards/forwards compatible, you can use the following code to ensure that your code works the same in both Nuxt v3 and Nuxt v4:

```diff
+ import { relative, resolve } from 'node:fs'
  // ...
  nuxt.hook('builder:watch', async (event, path) => {
+   path = relative(nuxt.options.srcDir, resolve(nuxt.options.srcDir, path))
    // ...
  })
```

::tip
You can automate this step by running `npx codemod@latest nuxt/4/absolute-watch-path`
::

### Removal of `window.__NUXT__` object

#### What Changed

We are removing the global `window.__NUXT__` object after the app finishes hydration.

#### Reasons for Change

This opens the way to multi-app patterns ([#21635](https://github.com/nuxt/nuxt/issues/21635){rel=""nofollow""}) and enables us to focus on a single way to access Nuxt app data - `useNuxtApp()`.

#### Migration Steps

The data is still available, but can be accessed with `useNuxtApp().payload`:

```diff
- console.log(window.__NUXT__)
+ console.log(useNuxtApp().payload)
```

### Directory index scanning

🚦 **Impact Level**: Medium

#### What Changed

Child folders in your `middleware/` folder are also scanned for `index` files and these are now also registered as middleware in your project.

#### Reasons for Change

Nuxt scans a number of folders automatically, including `middleware/` and `plugins/`.

Child folders in your `plugins/` folder are scanned for `index` files and we wanted to make this behavior consistent between scanned directories.

#### Migration Steps

Probably no migration is necessary but if you wish to revert to previous behavior you can add a hook to filter out these middleware:

```ts
export default defineNuxtConfig({
  hooks: {
    'app:resolve' (app) {
      app.middleware = app.middleware.filter(mw => !/\/index\.[^/]+$/.test(mw.path))
    },
  },
})
```
