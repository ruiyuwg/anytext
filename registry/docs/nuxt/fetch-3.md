# $fetch

Nuxt uses [ofetch](https://github.com/unjs/ofetch){rel=""nofollow""} to expose globally the `$fetch` helper for making HTTP requests within your Vue app or API routes.

::tip{icon="i-lucide-rocket"}
During server-side rendering, calling `$fetch` to fetch your internal [API routes](https://nuxt.com/docs/3.x/directory-structure/server) will directly call the relevant function (emulating the request), **saving an additional API call**.
::

::note{color="blue" icon="i-lucide-info"}
Using `$fetch` in components without wrapping it with [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) causes fetching the data twice: initially on the server, then again on the client-side during hydration, because `$fetch` does not transfer state from the server to the client. Thus, the fetch will be executed on both sides because the client has to get the data again.
::

## Usage

We recommend using [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) or [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) + `$fetch` to prevent double data fetching when fetching the component data.

```vue [app.vue]
<script setup lang="ts">
// During SSR data is fetched twice, once on the server and once on the client.
const dataTwice = await $fetch('/api/item')

// During SSR data is fetched only on the server side and transferred to the client.
const { data } = await useAsyncData('item', () => $fetch('/api/item'))

// You can also useFetch as shortcut of useAsyncData + $fetch
const { data } = await useFetch('/api/item')
</script>
```

:read-more{to="https://nuxt.com/docs/3.x/getting-started/data-fetching"}

You can use `$fetch` in any methods that are executed only on client-side.

```vue [pages/contact.vue]
<script setup lang="ts">
async function contactForm () {
  await $fetch('/api/contact', {
    method: 'POST',
    body: { hello: 'world' },
  })
}
</script>

<template>
  <button @click="contactForm">
    Contact
  </button>
</template>
```

::tip
`$fetch` is the preferred way to make HTTP calls in Nuxt instead of [@nuxt/http](https://github.com/nuxt/http){rel=""nofollow""} and [@nuxtjs/axios](https://github.com/nuxt-community/axios-module){rel=""nofollow""} that are made for Nuxt 2.
::

::note
If you use `$fetch` to call an (external) HTTPS URL with a self-signed certificate in development, you will need to set `NODE_TLS_REJECT_UNAUTHORIZED=0` in your environment.
::

### Passing Headers and Cookies

When we call `$fetch` in the browser, user headers like `cookie` will be directly sent to the API.

However, during Server-Side Rendering, due to security risks such as \**Server-Side Request Forgery (SSRF)*\* or **Authentication Misuse**, the `$fetch` wouldn't include the user's browser cookies, nor pass on cookies from the fetch response.

::code-group

```vue [pages/index.vue]
<script setup lang="ts">
// This will NOT forward headers or cookies during SSR
const { data } = await useAsyncData(() => $fetch('/api/cookies'))
</script>
```

```ts [server/api/cookies.ts]
export default defineEventHandler((event) => {
  const foo = getCookie(event, 'foo')
  // ... Do something with the cookie
})
```

::

If you need to forward headers and cookies on the server, you must manually pass them:

```vue [pages/index.vue]
<script setup lang="ts">
// This will forward the user's headers and cookies to `/api/cookies`
const requestFetch = useRequestFetch()
const { data } = await useAsyncData(() => requestFetch('/api/cookies'))
</script>
```

However, when calling `useFetch` with a relative URL on the server, Nuxt will use [`useRequestFetch`](https://nuxt.com/docs/3.x/api/composables/use-request-fetch) to proxy headers and cookies (with the exception of headers not meant to be forwarded, like `host`).

# abortNavigation

::warning
`abortNavigation` is only usable inside a [route middleware handler](https://nuxt.com/docs/3.x/directory-structure/middleware).
::

## Type

```ts [Signature]
export function abortNavigation (err?: Error | string): false
```

## Parameters

### `err`

- **Type**: [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error){rel=""nofollow""} | `string`:br Optional error to be thrown by `abortNavigation`.

## Examples

The example below shows how you can use `abortNavigation` in a route middleware to prevent unauthorized route access:

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user')

  if (!user.value.isAuthorized) {
    return abortNavigation()
  }

  if (to.path !== '/edit-post') {
    return navigateTo('/edit-post')
  }
})
```

### `err` as a String

You can pass the error as a string:

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user')

  if (!user.value.isAuthorized) {
    return abortNavigation('Insufficient permissions.')
  }
})
```

### `err` as an Error Object

You can pass the error as an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error){rel=""nofollow""} object, e.g. caught by the `catch`-block:

```ts [middleware/auth.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  try {
    /* code that might throw an error */
  } catch (err) {
    return abortNavigation(err)
  }
})
```
