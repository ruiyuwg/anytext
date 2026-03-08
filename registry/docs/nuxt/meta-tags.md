# Meta Tags

If you need to access the component state with `head`, you should migrate to using [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) .

If you need to use the Options API, there is a `head()` method you can use when you use `defineNuxtComponent`.

## Migration

### Set `bridge.meta`

```js
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    meta: true,
    nitro: false, // If migration to Nitro is complete, set to true
  },
})
```

### Update head properties

In your `nuxt.config`, rename `head` to `app.head`. (Note that objects no longer have a `hid` key for deduplication.)

::code-group

```ts [Nuxt 2]
export default {
  head: {
    titleTemplate: '%s - Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
  },
}
```

```ts [Nuxt 3]
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Meta description' },
      ],
    },
  },
})
```

::

## `useHead` Composables

Nuxt Bridge provides a new Nuxt 3 meta API that can be accessed with a new [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) composable.

```vue
<script setup lang="ts">
useHead({
  title: 'My Nuxt App',
})
</script>
```

::tip
This [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) composable uses `@unhead/vue` under the hood (rather than `vue-meta`) to manipulate your `<head>`.
::

::warning
We recommend not using the native Nuxt 2 `head()` properties in addition to [`useHead`](https://nuxt.com/docs/4.x/api/composables/use-head) , as they may conflict.
::

For more information on how to use this composable, see [the docs](https://nuxt.com/docs/4.x/getting-started/seo-meta).

## Options API

```vue
<script>
// if using options API `head` method you must use `defineNuxtComponent`
export default defineNuxtComponent({
  head (nuxtApp) {
    // `head` receives the nuxt app but cannot access the component instance
    return {
      meta: [{
        name: 'description',
        content: 'This is my page description.',
      }],
    }
  },
})
</script>
```

::warning
Possible breaking change: `head` receives the nuxt app but cannot access the component instance. If the code in your `head` tries to access the data object through `this` or `this.$data`, you will need to migrate to the `useHead` composable.
::

## Title Template

If you want to use a function (for full control), then this cannot be set in your nuxt.config, and it is recommended instead to set it within your `/layouts` directory.

```vue [app/layouts/default.vue]
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
  },
})
</script>
```

# Runtime Config

::warning
When using `runtimeConfig` option, [nitro](https://nuxt.com/docs/4.x/bridge/nitro) must have been configured.
::

## Update Runtime Config

Nuxt 3 approaches runtime config differently than Nuxt 2, using a new combined `runtimeConfig` option.

First, you'll need to combine your `publicRuntimeConfig` and `privateRuntimeConfig` properties into a new one called `runtimeConfig`, with the public config within a key called `public`.

```diff
// nuxt.config.js
- privateRuntimeConfig: {
-   apiKey: process.env.NUXT_API_KEY || 'super-secret-key'
- },
- publicRuntimeConfig: {
-   websiteURL: 'https://public-data.com'
- }
+ runtimeConfig: {
+   apiKey: process.env.NUXT_API_KEY || 'super-secret-key',
+   public: {
+     websiteURL: 'https://public-data.com'
+   }
+ }
```

This also means that when you need to access public runtime config, it's behind a property called `public`. If you use public runtime config, you'll need to update your code.

```diff
// MyWidget.vue
- <div>Website: {{ $config.websiteURL }}</div>
+ <div>Website: {{ $config.public.websiteURL }}</div>
```

# Nitro

## Remove Modules

- Remove `@nuxt/nitro`: Bridge injects same functionality

## Update Config

```ts [nuxt.config.ts]
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    nitro: true,
  },
})
```

## Update Your Scripts

You will also need to update your scripts within your `package.json` to reflect the fact that Nuxt will now produce a Nitro server as build output.

### Install Nuxi

Install `nuxi` as a development dependency:

::code-group{sync="pm"}

```bash [npm]
npm install -D nuxi
```

```bash [yarn]
yarn add --dev nuxi
```

```bash [pnpm]
pnpm add -D nuxi
```

```bash [bun]
bun add -D nuxi
```

```bash [deno]
deno add -D npm:nuxi
```

::

### Nuxi

Nuxt 3 introduced the new Nuxt CLI command [`nuxi`](https://nuxt.com/docs/4.x/api/commands/add). Update your scripts as follows to leverage the better support from Nuxt Bridge:

```diff
{
  "scripts": {
-   "dev": "nuxt",
+   "dev": "nuxi dev",
-   "build": "nuxt build",
+   "build": "nuxi build",
-   "start": "nuxt start",
+   "start": "nuxi preview"
  }
}
```

::tip
If `nitro: false`, use the `nuxt2` command.
::

### Static Target

If you have set `target: 'static'` in your `nuxt.config` then you need to ensure that you update your build script to be `nuxi generate`.

```json [package.json]
{
  "scripts": {
    "build": "nuxi generate"
  }
}
```

### Server Target

For all other situations, you can use the `nuxi build` command.

```json [package.json]
{
  "scripts": {
    "build": "nuxi build",
    "start": "nuxi preview"
  }
}
```

## Exclude Built Nitro Folder From Git

Add the folder `.output` to the `.gitignore` file.

## Ensure Everything Goes Well

✔️ Try with `nuxi dev` and `nuxi build` (or `nuxi generate`) to see if everything goes well.

# Vite

::warning
When using `vite`, [nitro](https://nuxt.com/docs/4.x/bridge/nitro) must have been configured.
::

## Remove Modules

- Remove `nuxt-vite`: Bridge enables same functionality

## Update Config

```ts [nuxt.config.ts]
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    vite: true,
    nitro: true,
  },
})
```

## Configuration

```ts [nuxt.config.ts]
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  vite: {
    // Config for Vite
  },
})
```

# Overview

There are significant changes when migrating a Nuxt 2 app to Nuxt 3, although you can expect migration to become more straightforward as we move toward a stable release.

::note
This migration guide is under progress to align with the development of Nuxt 3.
::

Some of these significant changes include:

1. Moving from Vue 2 to Vue 3, including defaulting to the Composition API and script setup.
2. Moving from webpack 4 and Babel to Vite or webpack 5 and esbuild.
3. Moving from a runtime Nuxt dependency to a minimal, standalone server compiled with nitropack.

::tip
If you need to remain on Nuxt 2, but want to benefit from Nuxt 3 features in Nuxt 2, you can alternatively check out [how to get started with Bridge](https://nuxt.com/docs/4.x/bridge/overview).
::

## Next Steps

- Learn about differences in [configuration](https://nuxt.com/docs/4.x/migration/configuration)

# Build Tooling

We use the following build tools by default:

- [Vite](https://vite.dev){rel=""nofollow""} or [webpack](https://webpack.js.org){rel=""nofollow""}
- [Rollup](https://rollupjs.org){rel=""nofollow""}
- [PostCSS](https://postcss.org){rel=""nofollow""}
- [esbuild](https://esbuild.github.io){rel=""nofollow""}

For this reason, most of your previous `build` configuration in `nuxt.config` will now be ignored, including any custom babel configuration.

If you need to configure any of Nuxt's build tools, you can do so in your `nuxt.config`, using the new top-level `vite`, `webpack` and `postcss` keys.

In addition, Nuxt ships with TypeScript support.

:read-more{to="https://nuxt.com/docs/4.x/guide/concepts/typescript"}

## Steps

1. Remove `@nuxt/typescript-build` and `@nuxt/typescript-runtime` from your dependencies and modules.
2. Remove any unused babel dependencies from your project.
3. Remove any explicit core-js dependencies.
4. Migrate `require` to `import`.

# Server

In a built Nuxt 3 application, there is no runtime Nuxt dependency. That means your site will be highly performant, and ultra-slim. But it also means you can no longer hook into runtime Nuxt server hooks.

:read-more{to="https://nuxt.com/docs/4.x/guide/concepts/server-engine"}

## Steps

1. Remove the `render` key in your `nuxt.config`.
2. Any files in `~~/server/api` and `~~/server/middleware` will be automatically registered; you can remove them from your `serverMiddleware` array.
3. Update any other items in your `serverMiddleware` array to point to files or npm packages directly, rather than using inline functions.

:read-more{to="https://nuxt.com/docs/4.x/directory-structure/server"}

:read-more{to="https://nuxt.com/docs/4.x/guide/going-further/hooks#server-hooks-runtime"}
