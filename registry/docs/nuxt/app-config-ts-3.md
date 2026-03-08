# app.config.ts

Nuxt provides an `app.config.ts` config file to expose reactive configuration within your application with the ability to update it at runtime within lifecycle or using a nuxt plugin and editing it with HMR (hot-module-replacement).

You can easily provide runtime app configuration using `app.config.ts` file. It can have either of `.ts`, `.js`, or `.mjs` extensions.

```ts [app.config.ts] twoslash
export default defineAppConfig({
  foo: 'bar',
})
```

::caution
Do not put any secret values inside `app.config` file. It is exposed to the user client bundle.
::

::note
When configuring a custom [`srcDir`](https://nuxt.com/docs/3.x/api/nuxt-config#srcdir), make sure to place the `app.config` file at the root of the new `srcDir` path.
::

## Usage

To expose config and environment variables to the rest of your app, you will need to define configuration in `app.config` file.

```ts [app.config.ts] twoslash
export default defineAppConfig({
  theme: {
    primaryColor: '#ababab',
  },
})
```

We can now universally access `theme` both when server-rendering the page and in the browser using [`useAppConfig`](https://nuxt.com/docs/3.x/api/composables/use-app-config) composable.

```vue [pages/index.vue]
<script setup lang="ts">
const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>
```

The [`updateAppConfig`](https://nuxt.com/docs/3.x/api/utils/update-app-config) utility can be used to update the `app.config` at runtime.

```vue [pages/index.vue]
<script setup>
const appConfig = useAppConfig() // { foo: 'bar' }

const newAppConfig = { foo: 'baz' }

updateAppConfig(newAppConfig)

console.log(appConfig) // { foo: 'baz' }
</script>
```

::read-more{to="https://nuxt.com/docs/3.x/api/utils/update-app-config"}
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

If you want to type the result of calling [`useAppConfig()`](https://nuxt.com/docs/3.x/api/composables/use-app-config), then you will want to extend `AppConfig`.

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

Nuxt uses a custom merging strategy for the `AppConfig` within [the layers](https://nuxt.com/docs/3.x/getting-started/layers) of your application.

This strategy is implemented using a [Function Merger](https://github.com/unjs/defu#function-merger){rel=""nofollow""}, which allows defining a custom merging strategy for every key in `app.config` that has an array as value.

::note
The function merger can only be used in the extended layers and not the main `app.config` in project.
::

Here's an example of how you can use:

::code-group

```ts [layer/app.config.ts] twoslash
export default defineAppConfig({
  // Default array value
  array: ['hello'],
})
```

```ts [app.config.ts] twoslash
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
Although it is called an 'error page' it's not a route and shouldn't be placed in your `~/pages` directory. For the same reason, you shouldn't use `definePageMeta` within this page. That being said, you can still use layouts in the error file, by utilizing the [`NuxtLayout`](https://nuxt.com/docs/3.x/api/components/nuxt-layout) component and specifying the name of the layout.
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

# nuxt.config.ts

The `nuxt.config` file extension can either be `.js`, `.ts` or `.mjs`.

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  // My Nuxt config
})
```

::tip
`defineNuxtConfig` helper is globally available without import.
::

You can explicitly import `defineNuxtConfig` from `nuxt/config` if you prefer:

```ts [nuxt.config.ts] twoslash
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // My Nuxt config
})
```

::read-more{to="https://nuxt.com/docs/3.x/api/configuration/nuxt-config"}
Discover all the available options in the **Nuxt configuration** documentation.
::

To ensure your configuration is up to date, Nuxt will make a full restart when detecting changes in the main configuration file, the [`.env`](https://nuxt.com/docs/3.x/directory-structure/env), [`.nuxtignore`](https://nuxt.com/docs/3.x/directory-structure/nuxtignore) and [`.nuxtrc`](https://nuxt.com/docs/3.x/directory-structure/nuxtrc) dotfiles.

# package.json

The minimal `package.json` of your Nuxt application should looks like:

```json [package.json]
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "nuxt": "latest",
    "vue": "latest",
    "vue-router": "latest"
  }
}
```

::read-more

Read more about the `package.json` file.
::

# tsconfig.json

Nuxt [automatically generates](https://nuxt.com/docs/3.x/guide/concepts/typescript) a `.nuxt/tsconfig.json` file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults.

Your Nuxt project should include the following `tsconfig.json` file at the root of the project:

```json [tsconfig.json]
{
  "extends": "./.nuxt/tsconfig.json"
}
```

::note
As you need to, you can customize the contents of this file. However, it is recommended that you don't overwrite `target`, `module` and `moduleResolution`.
::

::note
If you need to customize your `paths`, this will override the auto-generated path aliases. Instead, we recommend that you add any path aliases you need to the [`alias`](https://nuxt.com/docs/3.x/api/nuxt-config#alias) property within your `nuxt.config`, where they will get picked up and added to the auto-generated `tsconfig`.
::

## Extending TypeScript Configuration

You can customize the TypeScript configuration of your Nuxt project for each context (`app` and `server`) in the `nuxt.config.ts` file.

```ts [nuxt.config.ts] twoslash
// @errors: 2353
export default defineNuxtConfig({
  typescript: {
    // customize tsconfig.app.json
    tsConfig: {
      // ...
    },
  },
  nitro: {
    typescript: {
      // customize tsconfig.server.json
      tsConfig: {
        // ...
      },
    },
  },
})
```
