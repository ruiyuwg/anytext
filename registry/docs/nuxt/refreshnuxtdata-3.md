# refreshNuxtData

`refreshNuxtData` is used to refetch all or specific `asyncData` instances, including those from [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data), [`useLazyAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-lazy-async-data), [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch), and [`useLazyFetch`](https://nuxt.com/docs/3.x/api/composables/use-lazy-fetch).

::note
If your component is cached by `<KeepAlive>` and enters a deactivated state, the `asyncData` inside the component will still be refetched until the component is unmounted.
::

## Type

```ts [Signature]
export function refreshNuxtData (keys?: string | string[])
```

## Parameters

- `keys`: A single string or an array of strings as `keys` that are used to fetch the data. This parameter is **optional**. All [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) keys are re-fetched when no `keys` are explicitly specified.

## Return Values

`refreshNuxtData` returns a promise, resolving when all or specific `asyncData` instances have been refreshed.

## Examples

### Refresh All Data

This example below refreshes all data being fetched using `useAsyncData` and `useFetch` in Nuxt application.

```vue [pages/some-page.vue]
<script setup lang="ts">
const refreshing = ref(false)

async function refreshAll () {
  refreshing.value = true
  try {
    await refreshNuxtData()
  } finally {
    refreshing.value = false
  }
}
</script>

<template>
  <div>
    <button
      :disabled="refreshing"
      @click="refreshAll"
    >
      Refetch All Data
    </button>
  </div>
</template>
```

### Refresh Specific Data

This example below refreshes only data where the key matches to `count` and `user`.

```vue [pages/some-page.vue]
<script setup lang="ts">
const refreshing = ref(false)

async function refresh () {
  refreshing.value = true
  try {
    // you could also pass an array of keys to refresh multiple data
    await refreshNuxtData(['count', 'user'])
  } finally {
    refreshing.value = false
  }
}
</script>

<template>
  <div v-if="refreshing">
    Loading
  </div>
  <button @click="refresh">
    Refresh
  </button>
</template>
```

::note
If you have access to the `asyncData` instance, it is recommended to use its `refresh` or `execute` method as the preferred way to refetch the data.
::

:read-more{to="https://nuxt.com/docs/3.x/getting-started/data-fetching"}

# reloadNuxtApp

::note
`reloadNuxtApp` will perform a hard reload of your app, re-requesting a page and its dependencies from the server.
::

By default, it will also save the current `state` of your app (that is, any state you could access with `useState`).

::read-more

You can enable experimental restoration of this state by enabling the `experimental.restoreState` option in your `nuxt.config` file.
::

## Type

```ts [Signature]
export function reloadNuxtApp (options?: ReloadNuxtAppOptions)

interface ReloadNuxtAppOptions {
  ttl?: number
  force?: boolean
  path?: string
  persistState?: boolean
}
```

### `options` (optional)

**Type**: `ReloadNuxtAppOptions`

An object accepting the following properties:

- `path` (optional) :br**Type**: `string`:br**Default**: `window.location.pathname`:br The path to reload (defaulting to the current path). If this is different from the current window location it
  will trigger a navigation and add an entry in the browser history.
- `ttl` (optional) :br**Type**: `number`:br**Default**: `10000`:br The number of milliseconds in which to ignore future reload requests. If called again within this time period,
  `reloadNuxtApp` will not reload your app to avoid reload loops.
- `force` (optional) :br**Type**: `boolean`:br**Default**: `false`:br This option allows bypassing reload loop protection entirely, forcing a reload even if one has occurred within
  the previously specified TTL.
- `persistState` (optional) :br**Type**: `boolean`:br**Default**: `false`:br Whether to dump the current Nuxt state to sessionStorage (as `nuxt:reload:state`). By default this will have no
  effect on reload unless `experimental.restoreState` is also set, or unless you handle restoring the state yourself.

# setPageLayout

::important
`setPageLayout` allows you to dynamically change the layout of a page. It relies on access to the Nuxt context and therefore can only be called within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context).
::

```ts [middleware/custom-layout.ts]
export default defineNuxtRouteMiddleware((to) => {
  // Set the layout on the route you are navigating _to_
  setPageLayout('other')
})
```

## Passing Props to Layouts

You can pass props to the layout by providing an object as the second argument:

```ts [middleware/admin-layout.ts]
export default defineNuxtRouteMiddleware((to) => {
  setPageLayout('admin', {
    sidebar: true,
    title: 'Dashboard',
  })
})
```

The layout can then receive these props:

```vue [layouts/admin.vue]
<script setup lang="ts">
const props = defineProps<{
  sidebar?: boolean
  title?: string
}>()
</script>

<template>
  <div>
    <aside v-if="sidebar">
      Sidebar
    </aside>
    <main>
      <h1>{{ title }}</h1>
      <slot />
    </main>
  </div>
</template>
```

::note
If you choose to set the layout dynamically on the server side, you *must* do so before the layout is rendered by Vue (that is, within a plugin or route middleware) to avoid a hydration mismatch.
::

# setResponseStatus

Nuxt provides composables and utilities for first-class server-side-rendering support.

`setResponseStatus` sets the status (and optionally the statusText) of the response.

::important
`setResponseStatus` can only be called in the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context).
::

```ts
const event = useRequestEvent()

// event will be undefined in the browser
if (event) {
  // Set the status code to 404 for a custom 404 page
  setResponseStatus(event, 404)

  // Set the status message as well
  setResponseStatus(event, 404, 'Page Not Found')
}
```

::note
In the browser, `setResponseStatus` will have no effect.
::

:read-more{to="https://nuxt.com/docs/3.x/getting-started/error-handling"}

# showError

Within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context) you can use `showError` to show an error.

**Parameters:**

- `error`: `string | Error | Partial<{ cause, data, message, name, stack, status, statusText }>`

```ts
showError('😱 Oh no, an error has been thrown.')
showError({
  status: 404,
  statusText: 'Page Not Found',
})
```

The error is set in the state using [`useError()`](https://nuxt.com/docs/3.x/api/composables/use-error) to create a reactive and SSR-friendly shared error state across components.

::tip
`showError` calls the `app:error` hook.
::

:read-more{to="https://nuxt.com/docs/3.x/getting-started/error-handling"}

# updateAppConfig

::note
Updates the [`app.config`](https://nuxt.com/docs/3.x/directory-structure/app-config) using deep assignment. Existing (nested) properties will be preserved.
::

## Usage

```js
import { updateAppConfig, useAppConfig } from '#imports'

const appConfig = useAppConfig() // { foo: 'bar' }

const newAppConfig = { foo: 'baz' }
updateAppConfig(newAppConfig)

console.log(appConfig) // { foo: 'baz' }
```

:read-more{to="https://nuxt.com/docs/3.x/directory-structure/app-config"}
