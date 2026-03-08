# navigateTo

## Usage

`navigateTo` is available on both server side and client side. It can be used within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context), or directly, to perform page navigation.

::warning
Make sure to always use `await` or `return` on result of `navigateTo` when calling it.
::

::note
`navigateTo` cannot be used within Nitro routes. To perform a server-side redirect in Nitro routes, use [`sendRedirect`](https://h3.dev/utils/response#redirectlocation-status-statustext){rel=""nofollow""} instead.
::

### Within a Vue Component

```vue
<script setup lang="ts">
// passing 'to' as a string
await navigateTo('/search')

// ... or as a route object
await navigateTo({ path: '/search' })

// ... or as a route object with query parameters
await navigateTo({
  path: '/search',
  query: {
    page: 1,
    sort: 'asc',
  },
})
</script>
```

### Within Route Middleware

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/search') {
    // setting the redirect code to '301 Moved Permanently'
    return navigateTo('/search', { redirectCode: 301 })
  }
})
```

When using `navigateTo` within route middleware, you must **return its result** to ensure the middleware execution flow works correctly.

For example, the following implementation **will not work as expected**:

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/search') {
    // ❌ This will not work as expected
    navigateTo('/search', { redirectCode: 301 })
    return
  }
})
```

In this case, `navigateTo` will be executed but not returned, which may lead to unexpected behavior.

:read-more{to="https://nuxt.com/docs/3.x/directory-structure/middleware"}

### Navigating to an External URL

The `external` parameter in `navigateTo` influences how navigating to URLs is handled:

- **Without `external: true`**:
  - Internal URLs navigate as expected.
  - External URLs throw an error.
- **With `external: true`**:
  - Internal URLs navigate with a full-page reload.
  - External URLs navigate as expected.

#### Example

```vue
<script setup lang="ts">
// will throw an error;
// navigating to an external URL is not allowed by default
await navigateTo('https://nuxt.com')

// will redirect successfully with the 'external' parameter set to 'true'
await navigateTo('https://nuxt.com', {
  external: true,
})
</script>
```

### Opening a Page in a New Tab

```vue
<script setup lang="ts">
// will open 'https://nuxt.com' in a new tab
await navigateTo('https://nuxt.com', {
  open: {
    target: '_blank',
    windowFeatures: {
      width: 500,
      height: 500,
    },
  },
})
</script>
```

## Type

```ts [Signature]
export function navigateTo (
  to: RouteLocationRaw | undefined | null,
  options?: NavigateToOptions,
): Promise<void | NavigationFailure | false> | false | void | RouteLocationRaw

interface NavigateToOptions {
  replace?: boolean
  redirectCode?: number
  external?: boolean
  open?: OpenOptions
}

type OpenOptions = {
  target: string
  windowFeatures?: OpenWindowFeatures
}

type OpenWindowFeatures = {
  popup?: boolean
  noopener?: boolean
  noreferrer?: boolean
} & XOR<{ width?: number }, { innerWidth?: number }>
  & XOR<{ height?: number }, { innerHeight?: number }>
  & XOR<{ left?: number }, { screenX?: number }>
  & XOR<{ top?: number }, { screenY?: number }>
```

## Parameters

### `to`

**Type**: [`RouteLocationRaw`](https://router.vuejs.org/api/interfaces/routelocationoptions){rel=""nofollow""} | `undefined` | `null`

**Default**: `'/'`

`to` can be a plain string or a route object to redirect to. When passed as `undefined` or `null`, it will default to `'/'`.

#### Example

```ts
// Passing the URL directly will redirect to the '/blog' page
await navigateTo('/blog')

// Using the route object, will redirect to the route with the name 'blog'
await navigateTo({ name: 'blog' })

// Redirects to the 'product' route while passing a parameter (id = 1) using the route object.
await navigateTo({ name: 'product', params: { id: 1 } })
```

### `options` (optional)

**Type**: `NavigateToOptions`

An object accepting the following properties:

- `replace`
  - **Type**: `boolean`
  - **Default**: `false`
  - By default, `navigateTo` pushes the given route into the Vue Router's instance on the client side. :br This behavior can be changed by setting `replace` to `true`, to indicate that given route should be replaced.
- `redirectCode`
  - **Type**: `number`
  - **Default**: `302`
  - `navigateTo` redirects to the given path and sets the redirect code to [`302 Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302){rel=""nofollow""} by default when the redirection takes place on the server side. :br This default behavior can be modified by providing different `redirectCode`. Commonly, [`301 Moved Permanently`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301){rel=""nofollow""} can be used for permanent redirections.
- `external`
  - **Type**: `boolean`
  - **Default**: `false`
  - Allows navigating to an external URL when set to `true`. Otherwise, `navigateTo` will throw an error, as external navigation is not allowed by default.
- `open`
  - **Type**: `OpenOptions`
  - Allows navigating to the URL using the [open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open){rel=""nofollow""} method of the window. This option is only applicable on the client side and will be ignored on the server side. :br An object accepting the following properties:
  - `target`
    - **Type**: `string`
    - **Default**: `'_blank'`
    - A string, without whitespace, specifying the name of the browsing context the resource is being loaded into.
  - `windowFeatures`
    - **Type**: `OpenWindowFeatures`
    - An object accepting the following properties:
      | Property                  | Type      | Description                                                                                    |
      | ------------------------- | --------- | ---------------------------------------------------------------------------------------------- |
      | `popup`                   | `boolean` | Requests a minimal popup window instead of a new tab, with UI features decided by the browser. |
      | `width` or `innerWidth`   | `number`  | Specifies the content area's width (minimum 100 pixels), including scrollbars.                 |
      | `height` or `innerHeight` | `number`  | Specifies the content area's height (minimum 100 pixels), including scrollbars.                |
      | `left` or `screenX`       | `number`  | Sets the horizontal position of the new window relative to the left edge of the screen.        |
      | `top` or `screenY`        | `number`  | Sets the vertical position of the new window relative to the top edge of the screen.           |
      | `noopener`                | `boolean` | Prevents the new window from accessing the originating window via `window.opener`.             |
      | `noreferrer`              | `boolean` | Prevents the Referer header from being sent and implicitly enables `noopener`.                 |
      :brRefer to the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#windowfeatures){rel=""nofollow""} for more detailed information on the **windowFeatures** properties.

# onBeforeRouteLeave

::read-more

# Vue Router Docs

::

# onBeforeRouteUpdate

::read-more

# Vue Router Docs

::

# onNuxtReady

::important
`onNuxtReady` only runs on the client-side. :br
It is ideal for running code that should not block the initial rendering of your app.
::

```ts [plugins/ready.client.ts]
export default defineNuxtPlugin(() => {
  onNuxtReady(async () => {
    const myAnalyticsLibrary = await import('my-big-analytics-library')
    // do something with myAnalyticsLibrary
  })
})
```

It is 'safe' to run even after your app has initialized. In this case, then the code will be registered to run in the next idle callback.

# prefetchComponents

Prefetching component downloads the code in the background, this is based on the assumption that the component will likely be used for rendering, enabling the component to load instantly if and when the user requests it. The component is downloaded and cached for anticipated future use without the user making an explicit request for it.

Use `prefetchComponents` to manually prefetch individual components that have been registered globally in your Nuxt app. By default Nuxt registers these as async components. You must use the Pascal-cased version of the component name.

```ts
await prefetchComponents('MyGlobalComponent')

await prefetchComponents(['MyGlobalComponent1', 'MyGlobalComponent2'])
```

::note
Current implementation behaves exactly the same as [`preloadComponents`](https://nuxt.com/docs/3.x/api/utils/preload-components) by preloading components instead of just prefetching we are working to improve this behavior.
::

::note
On server, `prefetchComponents` will have no effect.
::

# preloadComponents

Preloading components loads components that your page will need very soon, which you want to start loading early in rendering lifecycle. This ensures they are available earlier and are less likely to block the page's render, improving performance.

Use `preloadComponents` to manually preload individual components that have been registered globally in your Nuxt app. By default Nuxt registers these as async components. You must use the Pascal-cased version of the component name.

```ts
await preloadComponents('MyGlobalComponent')

await preloadComponents(['MyGlobalComponent1', 'MyGlobalComponent2'])
```

::note
On server, `preloadComponents` will have no effect.
::

# preloadRouteComponents

Preloading routes loads the components of a given route that the user might navigate to in future. This ensures that the components are available earlier and less likely to block the navigation, improving performance.

::tip{icon="i-lucide-rocket"}
Nuxt already automatically preloads the necessary routes if you're using the `NuxtLink` component.
::

:read-more{to="https://nuxt.com/docs/3.x/api/components/nuxt-link"}

## Example

Preload a route when using `navigateTo`.

```ts
// we don't await this async function, to avoid blocking rendering
// this component's setup function
preloadRouteComponents('/dashboard')

const submit = async () => {
  const results = await $fetch('/api/authentication')

  if (results.token) {
    await navigateTo('/dashboard')
  }
}
```

:read-more{to="https://nuxt.com/docs/3.x/api/utils/navigate-to"}

::note
On server, `preloadRouteComponents` will have no effect.
::

# prerenderRoutes

When prerendering, you can hint to Nitro to prerender additional paths, even if their URLs do not show up in the HTML of the generated page.

::important
`prerenderRoutes` can only be called within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context).
::

::note
`prerenderRoutes` has to be executed during prerendering. If the `prerenderRoutes` is used in dynamic pages/routes which are not prerendered, then it will not be executed.
::

```ts
const route = useRoute()

prerenderRoutes('/')
prerenderRoutes(['/', '/about'])
```

::note
In the browser, or if called outside prerendering, `prerenderRoutes` will have no effect.
::

You can even prerender API routes which is particularly useful for full statically generated sites (SSG) because you can then `$fetch` data as if you have an available server!

```ts
prerenderRoutes('/api/content/article/name-of-article')

// Somewhere later in App
const articleContent = await $fetch('/api/content/article/name-of-article', {
  responseType: 'json',
})
```

::warning
Prerendered API routes in production may not return the expected response headers, depending on the provider you deploy to. For example, a JSON response might be served with an `application/octet-stream` content type.
Always manually set `responseType` when fetching prerendered API routes.
::

# refreshCookie

::important
This utility is available since [Nuxt v3.10](https://nuxt.com/blog/v3-10).
::

## Purpose

The `refreshCookie` function is designed to refresh cookie value returned by `useCookie`.

This is useful for updating the `useCookie` ref when we know the new cookie value has been set in the browser.

## Usage

```vue [app.vue]
<script setup lang="ts">
const tokenCookie = useCookie('token')

const login = async (username, password) => {
  const token = await $fetch('/api/token', { /** ... */ }) // Sets `token` cookie on response
  refreshCookie('token')
}

const loggedIn = computed(() => !!tokenCookie.value)
</script>
```

::note

Since [Nuxt v3.12.0](https://github.com/nuxt/nuxt/releases/tag/v3.12.0){rel=""nofollow""}, the experimental `cookieStore` option is enabled by default. It automatically refreshes the `useCookie` value when cookies change in the browser.
::

## Type

```ts [Signature]
export function refreshCookie (name: string): void
```
