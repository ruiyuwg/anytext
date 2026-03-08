# Overview

::note
If you're starting a fresh Nuxt 3 project, please skip this section and go to [Nuxt 3 Installation](https://nuxt.com/docs/4.x/getting-started/introduction).
::

::warning
Nuxt Bridge provides identical features to Nuxt 3 ([docs](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)) but there are some limitations, notably that [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch) composables are not available. Please read the rest of this page for details.
::

Bridge is a forward-compatibility layer that allows you to experience many of the new Nuxt 3 features by simply installing and enabling a Nuxt module.

Using Nuxt Bridge, you can make sure your project is (almost) ready for Nuxt 3 and you can gradually proceed with the transition to Nuxt 3.

## First Step

### Upgrade Nuxt 2

Make sure your dev server (`nuxt dev`) isn't running, remove any package lock files (`package-lock.json` and `yarn.lock`), and install the latest Nuxt 2 version:

```diff [package.json]
- "nuxt": "^2.16.3"
+ "nuxt": "^2.17.3"
```

Then, reinstall your dependencies:

::code-group{sync="pm"}

```bash [npm]
npm install
```

```bash [yarn]
yarn install
```

```bash [pnpm]
pnpm install
```

```bash [bun]
bun install
```

```bash [deno]
deno install
```

::

::note
Once the installation is complete, make sure both development and production builds are working as expected before proceeding.
::

### Install Nuxt Bridge

Install `@nuxt/bridge` and `nuxi` as development dependencies:

::code-group{sync="pm"}

```bash [npm]
npm install -D @nuxt/bridge nuxi
```

```bash [yarn]
yarn add --dev @nuxt/bridge nuxi
```

```bash [pnpm]
pnpm add -D @nuxt/bridge nuxi
```

```bash [bun]
bun add -D @nuxt/bridge nuxi
```

```bash [deno]
deno add -D npm:@nuxt/bridge npm:nuxi
```

::

### Update `nuxt.config`

Please make sure to avoid any CommonJS syntax such as `module.exports`, `require` or `require.resolve` in your config file. It will soon be deprecated and unsupported.

You can use static `import`, dynamic `import()` and `export default` instead. Using TypeScript by renaming to [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) is also possible and recommended.

```ts [nuxt.config.ts]
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: false,
})
```

### Update Commands

The `nuxt` command should now be changed to the `nuxt2` command.

```diff
{
  "scripts": {
-   "dev": "nuxt",
+   "dev": "nuxt2",
-   "build": "nuxt build",
+   "build": "nuxt2 build",
-   "start": "nuxt start",
+   "start": "nuxt2 start"
  }
}
```

Try running `nuxt2` once here. You will see that the application works as before.

(If 'bridge' is set to false, your application will operate without any changes as before.)

## Upgrade Steps

With Nuxt Bridge, the migration to Nuxt 3 can proceed in steps.
The below `Upgrade Steps` does not need to be done all at once.

- [TypeScript](https://nuxt.com/docs/4.x/bridge/typescript)
- [Migrate Legacy Composition API](https://nuxt.com/docs/4.x/bridge/bridge-composition-api)
- [Plugins and Middleware](https://nuxt.com/docs/4.x/bridge/plugins-and-middleware)
- [Migrate New Composition API](https://nuxt.com/docs/4.x/bridge/nuxt3-compatible-api)
- [Meta Tags](https://nuxt.com/docs/4.x/bridge/meta)
- [Runtime Config](https://nuxt.com/docs/4.x/bridge/runtime-config)
- [Nitro](https://nuxt.com/docs/4.x/bridge/nitro)
- [Vite](https://nuxt.com/docs/4.x/bridge/vite)

## Migrate from CommonJS to ESM

Nuxt 3 natively supports TypeScript and ECMAScript Modules. Please check [Native ES Modules](https://nuxt.com/docs/4.x/guide/concepts/esm) for more info and upgrading.

# Configuration

## Feature Flags

You can optionally disable some features from bridge or opt-in to less stable ones. In normal circumstances, it is always best to stick with defaults!

You can check [bridge/src/module.ts](https://github.com/nuxt/bridge/blob/main/packages/bridge/src/module.ts){rel=""nofollow""} for latest defaults.

```ts [nuxt.config.ts]
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {

    // -- Opt-in features --

    // Use Vite as the bundler instead of webpack 4
    // vite: true,

    // Enable Nuxt 3 compatible useHead
    // meta: true,

    // Enable definePageMeta macro
    // macros: {
    //   pageMeta: true
    // },

    // Enable transpiling TypeScript with esbuild
    // typescript: {
    //   esbuild: true
    // },

    // -- Default features --

    // Use legacy server instead of Nitro
    // nitro: false,

    // Disable Nuxt 3 compatible `nuxtApp` interface
    // app: false,

    // Disable Composition API support
    // capi: false,

    // ... or just disable legacy Composition API support
    // capi: {
    //   legacy: false
    // },

    // Do not transpile modules
    // transpile: false,

    // Disable <script setup> support
    // scriptSetup: false,

    // Disable composables auto importing
    // imports: false,

    // Do not warn about module incompatibilities
    // constraints: false
  },

  vite: {
    // Config for Vite
  },
})
```

## Migration of each option

### router.base

```diff
export default defineNuxtConfig({
- router: {
-   base: '/my-app/'
- }
+ app: {
+   baseURL: '/my-app/'
+ }
})
```

### build.publicPath

```diff
export default defineNuxtConfig({
- build: {
-   publicPath: 'https://my-cdn.net'
- }
+ app: {
+   cdnURL: 'https://my-cdn.net'
+ }
})
```

# TypeScript

## Remove Modules

- Remove `@nuxt/typescript-build`: Bridge enables same functionality
- Remove `@nuxt/typescript-runtime` and `nuxt-ts`: Nuxt 2 has built-in runtime support

### Set `bridge.typescript`

```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    typescript: true,
    nitro: false, // If migration to Nitro is complete, set to true
  },
})
```

## Update `tsconfig.json`

If you are using TypeScript, you can edit your `tsconfig.json` to benefit from auto-generated Nuxt types:

```diff [tsconfig.json]
{
+ "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    ...
  }
}
```

::note
As `.nuxt/tsconfig.json` is generated and not checked into version control, you'll need to generate that file before running your tests. Add `nuxi prepare` as a step before your tests, otherwise you'll see `TS5083: Cannot read file '~/.nuxt/tsconfig.json'`

For modern Nuxt projects, we recommend using [TypeScript project references](https://nuxt.com/docs/4.x/directory-structure/tsconfig) instead of directly extending `.nuxt/tsconfig.json`.
::

::note
Keep in mind that all options extended from `./.nuxt/tsconfig.json` will be overwritten by the options defined in your `tsconfig.json`.
Overwriting options such as `"compilerOptions.paths"` with your own configuration will lead TypeScript to not factor in the module resolutions from `./.nuxt/tsconfig.json`. This can lead to module resolutions such as `#imports` not being recognized.

In case you need to extend options provided by `./.nuxt/tsconfig.json` further, you can use the `alias` property within your `nuxt.config`. `nuxi` will pick them up and extend `./.nuxt/tsconfig.json` accordingly.
::
