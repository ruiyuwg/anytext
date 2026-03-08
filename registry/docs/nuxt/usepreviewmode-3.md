# `usePreviewMode`

Preview mode allows you to see how your changes would be displayed on a live site without revealing them to users.

You can use the built-in `usePreviewMode` composable to access and control preview state in Nuxt. If the composable detects preview mode it will automatically force any updates necessary for [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) to rerender preview content.

```ts
const { enabled, state } = usePreviewMode()
```

## Options

### Custom `enable` check

You can specify a custom way to enable preview mode. By default the `usePreviewMode` composable will enable preview mode if there is a `preview` param in url that is equal to `true` (for example, `http://localhost:3000?preview=true`). You can wrap the `usePreviewMode` into custom composable, to keep options consistent across usages and prevent any errors.

```ts
export function useMyPreviewMode () {
  const route = useRoute()
  return usePreviewMode({
    shouldEnable: () => {
      return !!route.query.customPreview
    },
  })
}
```

### Modify default state

`usePreviewMode` will try to store the value of a `token` param from url in state. You can modify this state and it will be available for all [`usePreviewMode`](https://nuxt.com/docs/3.x/api/composables/use-preview-mode) calls.

```ts
const data1 = ref('data1')

const { enabled, state } = usePreviewMode({
  getState: (currentState) => {
    return { data1, data2: 'data2' }
  },
})
```

::note
The `getState` function will append returned values to current state, so be careful not to accidentally overwrite important state.
::

### Customize the `onEnable` and `onDisable` callbacks

By default, when `usePreviewMode` is enabled, it will call `refreshNuxtData()` to re-fetch all data from the server.

When preview mode is disabled, the composable will attach a callback to call `refreshNuxtData()` to run after a subsequent router navigation.

You can specify custom callbacks to be triggered by providing your own functions for the `onEnable` and `onDisable` options.

```ts
const { enabled, state } = usePreviewMode({
  onEnable: () => {
    console.log('preview mode has been enabled')
  },
  onDisable: () => {
    console.log('preview mode has been disabled')
  },
})
```

## Example

The example below creates a page where part of a content is rendered only in preview mode.

```vue [pages/some-page.vue]
<script setup>
const { enabled, state } = usePreviewMode()

const { data } = await useFetch('/api/preview', {
  query: {
    apiKey: state.token,
  },
})
</script>

<template>
  <div>
    Some base content
    <p v-if="enabled">
      Only preview content: {{ state.token }}
      <br>
      <button @click="enabled = false">
        disable preview mode
      </button>
    </p>
  </div>
</template>
```

Now you can generate your site and serve it:

```bash [Terminal]
npx nuxt generate
npx nuxt preview
```

Then you can see your preview page by adding the query param `preview` to the end of the page you want to see once, for example `http://localhost:3000/?preview=true`.

::note
`usePreviewMode` should be tested locally with `nuxt generate` and then `nuxt preview` rather than `nuxt dev`. (The [preview command](https://nuxt.com/docs/3.x/api/commands/preview) is not related to preview mode.)
::

# useRequestEvent

Within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context) you can use `useRequestEvent` to access the incoming request.

```ts
// Get underlying request event
const event = useRequestEvent()

// Get the URL
const url = event?.path
```

::tip
In the browser, `useRequestEvent` will return `undefined`.
::

# useRequestFetch

You can use `useRequestFetch` to forward the request context and headers when making server-side fetch requests.

When making a client-side fetch request, the browser automatically sends the necessary headers.
However, when making a request during server-side rendering, due to security considerations, we need to forward the headers manually.

::note
Headers that are **not meant to be forwarded** will **not be included** in the request. These headers include, for example:
`transfer-encoding`, `connection`, `keep-alive`, `upgrade`, `expect`, `host`, `accept`
::

::tip
The [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) composable uses `useRequestFetch` under the hood to automatically forward the request context and headers.
::

::code-group

```vue [pages/index.vue]
<script setup lang="ts">
// This will forward the user's headers to the `/api/cookies` event handler
// Result: { cookies: { foo: 'bar' } }
const requestFetch = useRequestFetch()
const { data: forwarded } = await useAsyncData(() => requestFetch('/api/cookies'))

// This will NOT forward anything
// Result: { cookies: {} }
const { data: notForwarded } = await useAsyncData((_nuxtApp, { signal }) => $fetch('/api/cookies', { signal }))
</script>
```

```ts [server/api/cookies.ts]
export default defineEventHandler((event) => {
  const cookies = parseCookies(event)

  return { cookies }
})
```

::

::tip
In the browser during client-side navigation, `useRequestFetch` will behave just like regular [`$fetch`](https://nuxt.com/docs/3.x/api/utils/dollarfetch).
::

# useRequestHeader

You can use the built-in [`useRequestHeader`](https://nuxt.com/docs/3.x/api/composables/use-request-header) composable to access any incoming request header within your pages, components, and plugins.

```ts
// Get the authorization request header
const authorization = useRequestHeader('authorization')
```

::tip
In the browser, `useRequestHeader` will return `undefined`.
::

## Example

We can use `useRequestHeader` to easily figure out if a user is authorized or not.

The example below reads the `authorization` request header to find out if a person can access a restricted resource.

```ts [middleware/authorized-only.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  if (!useRequestHeader('authorization')) {
    return navigateTo('/not-authorized')
  }
})
```

# useRequestHeaders

You can use built-in [`useRequestHeaders`](https://nuxt.com/docs/3.x/api/composables/use-request-headers) composable to access the incoming request headers within your pages, components, and plugins.

```ts
// Get all request headers
const headers = useRequestHeaders()

// Get only cookie request header
const { cookie } = useRequestHeaders(['cookie'])
```

::tip
In the browser, `useRequestHeaders` will return an empty object.
::

## Example

We can use `useRequestHeaders` to access and proxy the initial request's `authorization` header to any future internal requests during SSR.

The example below adds the `authorization` request header to an isomorphic `$fetch` call.

```vue [pages/some-page.vue]
<script setup lang="ts">
const { data } = await useFetch('/api/confidential', {
  headers: useRequestHeaders(['authorization']),
})
</script>
```

# useRequestURL

`useRequestURL` is a helper function that returns an [URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL){rel=""nofollow""} working on both server-side and client-side.

::important
When utilizing [Hybrid Rendering](https://nuxt.com/docs/3.x/guide/concepts/rendering#hybrid-rendering) with cache strategies, all incoming request headers are dropped when handling the cached responses via the [Nitro caching layer](https://nitro.build/guide/cache){rel=""nofollow""} (meaning `useRequestURL` will return `localhost` for the `host`).

You can define the [`cache.varies` option](https://nitro.build/guide/cache#options){rel=""nofollow""} to specify headers that will be considered when caching and serving the responses, such as `host` and `x-forwarded-host` for multi-tenant environments.
::

::code-group

```vue [pages/about.vue]
<script setup lang="ts">
const url = useRequestURL()
</script>

<template>
  <p>URL is: {{ url }}</p>
  <p>Path is: {{ url.pathname }}</p>
</template>
```

```html [Result in development]
<p>URL is: http://localhost:3000/about</p>
<p>Path is: /about</p>
```

::

::tip

Read about the URL instance properties on the MDN documentation.
::

# useResponseHeader

::important
This composable is available in Nuxt v3.14+.
::

You can use the built-in [`useResponseHeader`](https://nuxt.com/docs/3.x/api/composables/use-response-header) composable to set any server response header within your pages, components, and plugins.

```ts
// Set a custom response header
const header = useResponseHeader('X-My-Header')
header.value = 'my-value'
```

## Example

We can use `useResponseHeader` to easily set a response header on a per-page basis.

```vue [pages/test.vue]
<script setup>
// pages/test.vue
const header = useResponseHeader('X-My-Header')
header.value = 'my-value'
</script>

<template>
  <h1>Test page with custom header</h1>
  <p>The response from the server for this "/test" page will have a custom "X-My-Header" header.</p>
</template>
```

We can use `useResponseHeader` for example in Nuxt [middleware](https://nuxt.com/docs/3.x/directory-structure/middleware) to set a response header for all pages.

```ts [middleware/my-header-middleware.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  const header = useResponseHeader('X-My-Always-Header')
  header.value = `I'm Always here!`
})
```
