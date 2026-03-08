# app.config.ts

Nuxt provides an `app/app.config.ts` config file to expose reactive configuration within your application with the ability to update it at runtime within lifecycle or using a nuxt plugin and editing it with HMR (hot-module-replacement).

You can easily provide runtime app configuration using `app.config.ts` file. It can have either of `.ts`, `.js`, or `.mjs` extensions.

```ts [app/app.config.ts] twoslash
export default defineAppConfig({
  foo: 'bar',
})
```

::caution
Do not put any secret values inside `app.config` file. It is exposed to the user client bundle.
::

::note
When configuring a custom [`srcDir`](https://nuxt.com/docs/4.x/api/nuxt-config#srcdir), make sure to place the `app.config` file at the root of the new `srcDir` path.
::

## Usage

To expose config and environment variables to the rest of your app, you will need to define configuration in `app.config` file.

```ts [app/app.config.ts] twoslash
export default defineAppConfig({
  theme: {
    primaryColor: '#ababab',
  },
})
```

We can now universally access `theme` both when server-rendering the page and in the browser using [`useAppConfig`](https://nuxt.com/docs/4.x/api/composables/use-app-config) composable.

```vue [app/pages/index.vue]
<script setup lang="ts">
const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>
```

The [`updateAppConfig`](https://nuxt.com/docs/4.x/api/utils/update-app-config) utility can be used to update the `app.config` at runtime.

```vue [app/pages/index.vue]
<script setup>
const appConfig = useAppConfig() // { foo: 'bar' }

const newAppConfig = { foo: 'baz' }

updateAppConfig(newAppConfig)

console.log(appConfig) // { foo: 'baz' }
</script>
```

::read-more{to="https://nuxt.com/docs/4.x/api/utils/update-app-config"}
Read more about the `updateAppConfig` utility.
::

## Typing App Config

Nuxt tries to automatically generate a TypeScript interface from provided app config so you won't have to type it yourself.

However, there are some cases where you might want to type it yourself. There are two possible things you might want to type.

### App Config Input

`AppConfigInput` might be used by module authors who are declaring what valid *input* options are when setting app config. This will not affect the type of `useAppConfig()`.

```ts [index.d.ts]
declare module 'nuxt/schema' {
  interface AppConfigInput {
    /** Theme configuration */
    theme?: {
      /** Primary app color */
      primaryColor?: string
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
```

### App Config Output

If you want to type the result of calling [`useAppConfig()`](https://nuxt.com/docs/4.x/api/composables/use-app-config), then you will want to extend `AppConfig`.

::warning
Be careful when typing `AppConfig` as you will overwrite the types Nuxt infers from your actually defined app config.
::

```ts [index.d.ts]
declare module 'nuxt/schema' {
  interface AppConfig {
    // This will entirely replace the existing inferred `theme` property
    theme: {
      // You might want to type this value to add more specific types than Nuxt can infer,
      // such as string literal types
      primaryColor?: 'red' | 'blue'
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
```

## Merging Strategy

Nuxt uses a custom merging strategy for the `AppConfig` within [the layers](https://nuxt.com/docs/4.x/getting-started/layers) of your application.

This strategy is implemented using a [Function Merger](https://github.com/unjs/defu#function-merger){rel=""nofollow""}, which allows defining a custom merging strategy for every key in `app.config` that has an array as value.

::note
The function merger can only be used in the extended layers and not the main `app.config` in project.
::

Here's an example of how you can use:

::code-group

```ts [layer/app/app.config.ts] twoslash
export default defineAppConfig({
  // Default array value
  array: ['hello'],
})
```

```ts [app/app.config.ts] twoslash
export default defineAppConfig({
  // Overwrite default array value by using a merger function
  array: () => ['bonjour'],
})
```

::

## Known Limitations

As of Nuxt v3.3, the `app.config.ts` file is shared with Nitro, which results in the following limitations:

1. You cannot import Vue components directly in `app.config.ts`.
2. Some auto-imports are not available in the Nitro context.

These limitations occur because Nitro processes the app config without full Vue component support.

While it's possible to use Vite plugins in the Nitro config as a workaround, this approach is not recommended:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  nitro: {
    vite: {
      plugins: [vue()],
    },
  },
})
```

::warning
Using this workaround may lead to unexpected behavior and bugs. The Vue plugin is one of many that are not available in the Nitro context.
::

Related issues:

- [Issue #19858](https://github.com/nuxt/nuxt/issues/19858){rel=""nofollow""}
- [Issue #19854](https://github.com/nuxt/nuxt/issues/19854){rel=""nofollow""}

::note
Nitro v3 will resolve these limitations by removing support for the app config.
You can track the progress in [this pull request](https://github.com/nitrojs/nitro/pull/2521){rel=""nofollow""}.
::

# error.vue

During the lifespan of your application, some errors may appear unexpectedly at runtime. In such case, we can use the `error.vue` file to override the default error files and display the error nicely.

```vue [error.vue]
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div>
    <h1>{{ error.status }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
```

::note
Although it is called an 'error page' it's not a route and shouldn't be placed in your `~/pages` directory. For the same reason, you shouldn't use `definePageMeta` within this page. That being said, you can still use layouts in the error file, by utilizing the [`NuxtLayout`](https://nuxt.com/docs/4.x/api/components/nuxt-layout) component and specifying the name of the layout.
::

The error page has a single prop - `error` which contains an error for you to handle.

The `error` object provides the following fields:

```ts
interface NuxtError {
  status: number
  fatal: boolean
  unhandled: boolean
  statusText?: string
  data?: unknown
  cause?: unknown
  // legacy/deprecated equivalent of `status`
  statusCode: number
  // legacy/deprecated equivalent of `statusText`
  statusMessage?: string
}
```

If you have an error with custom fields they will be lost; you should assign them to `data` instead:

```ts
throw createError({
  status: 404,
  statusText: 'Page Not Found',
  data: {
    myCustomField: true,
  },
})
```

# content

[Nuxt Content](https://content.nuxt.com){rel=""nofollow""} reads the `content/` directory in your project and parses `.md`, `.yml`, `.csv` and `.json` files to create a file-based CMS for your application.

- Render your content with built-in components.
- Query your content with a MongoDB-like API.
- Use your Vue components in Markdown files with the MDC syntax.
- Automatically generate your navigation.

::read-more{target="\_blank" to="https://content.nuxt.com"}
Learn more in **Nuxt Content** documentation.
::

## Enable Nuxt Content

Install the `@nuxt/content` module in your project as well as adding it to your `nuxt.config.ts` with one command:

```bash [Terminal]
npx nuxt module add content
```

## Create Content

Place your markdown files inside the `content/` directory:

```md [content/index.md]
# Hello Content
```

The module automatically loads and parses them.

## Render Content

To render content pages, add a [catch-all route](https://nuxt.com/docs/4.x/directory-structure/app/pages/#catch-all-route) using the [`<ContentRenderer>`](https://content.nuxt.com/docs/components/content-renderer){rel=""nofollow""} component:

```vue [app/pages/[...slug\\].vue]
<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div>
    <header><!-- ... --></header>

    <ContentRenderer
      v-if="page"
      :value="page"
    />

    <footer><!-- ... --></footer>
  </div>
</template>
```

## Documentation

::tip{icon="i-lucide-book"}
Head over to <https://content.nuxt.com>{rel=""nofollow""} to learn more about the Content module features, such as how to build queries and use Vue components in your Markdown files with the MDC syntax.
::
