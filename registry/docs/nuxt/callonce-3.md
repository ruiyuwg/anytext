# callOnce

::important
This utility is available since [Nuxt v3.9](https://nuxt.com/blog/v3-9).
::

## Purpose

The `callOnce` function is designed to execute a given function or block of code only once during:

- server-side rendering but not hydration
- client-side navigation

This is useful for code that should be executed only once, such as logging an event or setting up a global state.

## Usage

The default mode of `callOnce` is to run code only once. For example, if the code runs on the server it won't run again on the client. It also won't run again if you `callOnce` more than once on the client, for example by navigating back to this page.

```vue [app.vue]
<script setup lang="ts">
const websiteConfig = useState('config')

await callOnce(async () => {
  console.log('This will only be logged once')
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
})
</script>
```

It is also possible to run on every navigation while still avoiding the initial server/client double load. For this, it is possible to use the `navigation` mode:

```vue [app.vue]
<script setup lang="ts">
const websiteConfig = useState('config')

await callOnce(async () => {
  console.log('This will only be logged once and then on every client side navigation')
  websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
}, { mode: 'navigation' })
</script>
```

::important
`navigation` mode is available since [Nuxt v3.15](https://nuxt.com/blog/v3-15).
::

::tip

`callOnce` is useful in combination with the [Pinia module](https://nuxt.com/modules/pinia) to call store actions.
::

:read-more{to="https://nuxt.com/docs/3.x/getting-started/state-management"}

::warning
Note that `callOnce` doesn't return anything. You should use [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) or [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) if you want to do data fetching during SSR.
::

::note
`callOnce` is a composable meant to be called directly in a setup function, plugin, or route middleware, because it needs to add data to the Nuxt payload to avoid re-calling the function on the client when the page hydrates.
::

## Type

```ts [Signature]
export function callOnce (key?: string, fn?: (() => any | Promise<any>), options?: CallOnceOptions): Promise<void>
export function callOnce (fn?: (() => any | Promise<any>), options?: CallOnceOptions): Promise<void>

type CallOnceOptions = {
  /**
   * Execution mode for the callOnce function
   * @default 'render'
   */
  mode?: 'navigation' | 'render'
}
```

## Parameters

- `key`: A unique key ensuring that the code is run once. If you do not provide a key, then a key that is unique to the file and line number of the instance of `callOnce` will be generated for you.
- `fn`: The function to run once. It can be asynchronous.
- `options`: Setup the mode, either to re-execute on navigation (`navigation`) or just once for the lifetime of the app (`render`). Defaults to `render`.
  - `render`: Executes once during initial render (either SSR or CSR) - Default mode
  - `navigation`: Executes once during initial render and once per subsequent client-side navigation

# clearError

Within your pages, components, and plugins, you can use `clearError` to clear all errors and redirect the user.

**Parameters:**

- `options?: { redirect?: string }`

You can provide an optional path to redirect to (for example, if you want to navigate to a 'safe' page).

```ts
// Without redirect
clearError()

// With redirect
clearError({ redirect: '/homepage' })
```

Errors are set in state using [`useError()`](https://nuxt.com/docs/3.x/api/composables/use-error). The `clearError` composable will reset this state and calls the `app:error:cleared` hook with the provided options.

:read-more{to="https://nuxt.com/docs/3.x/getting-started/error-handling"}

# clearNuxtData

::note
This method is useful if you want to invalidate the data fetching for another page.
::

## Type

```ts [Signature]
export function clearNuxtData (keys?: string | string[] | ((key: string) => boolean)): void
```

## Parameters

- `keys`: One or an array of keys that are used in [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) to delete their cached data. If no keys are provided, **all data** will be invalidated.

# clearNuxtState

::note
This method is useful if you want to invalidate the state of `useState`.
::

## Type

```ts [Signature]
export function clearNuxtState (keys?: string | string[] | ((key: string) => boolean)): void
```

## Parameters

- `keys`: One or an array of keys that are used in [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) to delete their cached state. If no keys are provided, **all state** will be invalidated.

# createError

You can use this function to create an error object with additional metadata. It is usable in both the Vue and Nitro portions of your app, and is meant to be thrown.

## Parameters

- `err`: `string | { cause, data, message, name, stack, status, statusText, fatal }`

You can pass either a string or an object to the `createError` function. If you pass a string, it will be used as the error `message`, and the `status` will default to `500`. If you pass an object, you can set multiple properties of the error, such as `status`, `message`, and other error properties.

## In Vue App

If you throw an error created with `createError`:

- on server-side, it will trigger a full-screen error page which you can clear with `clearError`.
- on client-side, it will throw a non-fatal error for you to handle. If you need to trigger a full-screen error page, then you can do this by setting `fatal: true`.

### Example

```vue [pages/movies/[slug\\].vue]
<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch(`/api/movies/${route.params.slug}`)
if (!data.value) {
  throw createError({ status: 404, statusText: 'Page Not Found' })
}
</script>
```

## In API Routes

Use `createError` to trigger error handling in server API routes.

### Example

```ts [server/api/error.ts]
export default eventHandler(() => {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
  })
})
```

In API routes, using `createError` by passing an object with a short `statusText` is recommended because it can be accessed on the client side. Otherwise, a `message` passed to `createError` on an API route will not propagate to the client. Alternatively, you can use the `data` property to pass data back to the client. In any case, always consider avoiding to put dynamic user input to the message to avoid potential security issues.

:read-more{to="https://nuxt.com/docs/3.x/getting-started/error-handling"}

# defineLazyHydrationComponent

`defineLazyHydrationComponent` is a compiler macro that helps you create a component with a specific lazy hydration strategy. Lazy hydration defers hydration until components become visible or until the browser has completed more critical tasks. This can significantly reduce the initial performance cost, especially for non-essential components.

## Usage

### Visibility Strategy

Hydrates the component when it becomes visible in the viewport.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'visible',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!--
      Hydration will be triggered when
      the element(s) is 100px away from entering the viewport.
    -->
    <LazyHydrationMyComponent :hydrate-on-visible="{ rootMargin: '100px' }" />
  </div>
</template>
```

The `hydrateOnVisible` prop is optional. You can pass an object to customize the behavior of the `IntersectionObserver` under the hood.

::read-more
