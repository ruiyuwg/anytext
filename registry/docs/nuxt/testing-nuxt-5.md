## Testing Nuxt 5

Nuxt 5 is **currently in development**. Until the release, it is possible to test many of Nuxt 5's breaking changes from Nuxt version 4.2+.

### Opting in to Nuxt 5

First, upgrade Nuxt to the [latest release](https://github.com/nuxt/nuxt/releases){rel=""nofollow""}.

Then you can set your `future.compatibilityVersion` to match Nuxt 5 behavior:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 5,
  },
})
```

When you set your `future.compatibilityVersion` to `5`, defaults throughout your Nuxt configuration will change to opt in to Nuxt v5 behavior, including:

- **Vite Environment API**: Uses the new [Vite Environment API](https://nuxt.com/docs/4.x/getting-started/upgrade#migration-to-vite-environment-api) for improved build configuration
- **Normalized Page Names**: Page component names will [match their route names](https://nuxt.com/docs/4.x/getting-started/upgrade#normalized-page-component-names) for consistent `<KeepAlive>` behavior
- **`clearNuxtState` resets to defaults**: `clearNuxtState` will [reset state to its initial value](https://nuxt.com/docs/4.x/getting-started/upgrade#respect-defaults-when-clearing-usestate) instead of setting it to `undefined`
- **Non-async `callHook`**: [`callHook` may return `void`](https://nuxt.com/docs/4.x/getting-started/upgrade#non-async-callhook) instead of always returning a `Promise`
- Other Nuxt 5 improvements and changes as they become available

::note
This section is subject to change until the final release, so please check back here regularly if you are testing Nuxt 5 using `future.compatibilityVersion: 5`.
::

Breaking or significant changes will be noted below along with migration steps for backward/forward compatibility.

### Migration to Vite Environment API

🚦 **Impact Level**: Medium

#### What Changed

Nuxt 5 migrates to Vite 6's new [Environment API](https://vite.dev/guide/api-environment){rel=""nofollow""}, which formalizes the concept of environments and provides better control over configuration per environment.

Previously, Nuxt used separate client and server Vite configurations. Now, Nuxt uses a shared Vite configuration with environment-specific plugins that use the `applyToEnvironment()` method to target specific environments.

::note
The Vite Environment API is always enabled in Nuxt 5. The `experimental.viteEnvironmentApi` option has been removed.
::

**Key changes:**

1. **Deprecated environment-specific `extendViteConfig()`**: The `server` and `client` options in `extendViteConfig()` are deprecated and will show warnings when used.
2. **Changed plugin registration**: Vite plugins registered with `addVitePlugin()` and only targeting one environment (by passing `server: false` or `client: false`) will not have their `config` or `configResolved` hooks called.
3. **Shared configuration**: The `vite:extendConfig` and `vite:configResolved` hooks now work with a shared configuration rather than separate client/server configs.

#### Reasons for Change

The Vite Environment API provides:

- Better consistency between development and production builds
- More granular control over environment-specific configuration
- Improved performance and plugin architecture
- Support for custom environments beyond just client and server

#### Migration Steps

##### 1. Migrate to use Vite plugins

We would recommend you use a Vite plugin instead of `extendViteConfig`, `vite:configResolved` and `vite:extendConfig`.

```ts
// Before
extendViteConfig((config) => {
  config.optimizeDeps.include.push('my-package')
}, { server: false })

nuxt.hook('vite:extendConfig' /* or vite:configResolved */, (config, { isClient }) => {
  if (isClient) {
    config.optimizeDeps.include.push('my-package')
  }
})

// After
addVitePlugin(() => ({
  name: 'my-plugin',
  config (config) {
    // you can set global vite configuration here
  },
  configResolved (config) {
    // you can access the fully resolved vite configuration here
  },
  configEnvironment (name, config) {
    // you can set environment-specific vite configuration here
    if (name === 'client') {
      config.optimizeDeps ||= {}
      config.optimizeDeps.include ||= []
      config.optimizeDeps.include.push('my-package')
    }
  },
  applyToEnvironment (environment) {
    return environment.name === 'client'
  },
}))
```

##### 2. Migrate Vite plugins to use environments

Instead of using `addVitePlugin` with `server: false` or `client: false`, you can instead use the new `applyToEnvironment` hook within your plugin.

```ts
// Before
addVitePlugin(() => ({
  name: 'my-plugin',
  config (config) {
    config.optimizeDeps.include.push('my-package')
  },
}), { client: false })

// After
addVitePlugin(() => ({
  name: 'my-plugin',
  config (config) {
    // you can set global vite configuration here
  },
  configResolved (config) {
    // you can access the fully resolved vite configuration here
  },
  configEnvironment (name, config) {
    // you can set environment-specific vite configuration here
    if (name === 'client') {
      config.optimizeDeps ||= {}
      config.optimizeDeps.include ||= []
      config.optimizeDeps.include.push('my-package')
    }
  },
  applyToEnvironment (environment) {
    return environment.name === 'client'
  },
}))
```

::read-more{target="\_blank" to="https://vite.dev/guide/api-environment"}
Learn more about Vite's Environment API
::

### Migration to Vite 8

🚦 **Impact Level**: Medium

#### What Changed

Nuxt 5 upgrades from Vite 7 to [Vite 8](https://main.vite.dev/guide/migration){rel=""nofollow""}, which replaces esbuild and Rollup with [Rolldown](https://rolldown.rs){rel=""nofollow""} as the underlying bundler. This brings significantly faster builds but includes several breaking changes.

::note
Unlike the Vite Environment API migration, this change cannot be opted into early with `future.compatibilityVersion: 5`. If you want to test Vite 8 compatibility ahead of time, you can add a `"vite": "^8.0.0-beta.15"` resolution override in your `package.json`.
::

Most of the migration is handled by Nuxt internally, but there are some user-facing changes to be aware of:

- **`vite.esbuild` and `vite.optimizeDeps.esbuildOptions`** are deprecated in favour of `vite.oxc` and `vite.optimizeDeps.rolldownOptions`. Vite 8 converts these automatically for now, but they will be removed in the future.
- **`build.rollupOptions`** is deprecated in favour of `build.rolldownOptions`.
- **CommonJS interop behaviour** has changed. If you import CJS modules, review the [Vite 8 migration guide](https://main.vite.dev/guide/migration#consistent-commonjs-interop){rel=""nofollow""} for details.

::read-more{target="\_blank" to="https://main.vite.dev/guide/migration"}
See the full Vite 8 migration guide for all breaking changes and migration steps.
::

### Non-Async `callHook`

🚦 **Impact Level**: Minimal

#### What Changed

With the upgrade to [hookable v6](https://github.com/unjs/hookable){rel=""nofollow""}, `callHook` may now return `void` instead of always returning `Promise<void>`. This is a significant performance improvement that avoids unnecessary `Promise` allocations when there are no registered hooks or all hooks are synchronous.

By default (with `compatibilityVersion: 4`), Nuxt wraps `callHook` with `Promise.resolve()` so that existing `.then()` and `.catch()` chaining continues to work. With `compatibilityVersion: 5`, this wrapper is removed.

::tip
This affects both build-time Nuxt hooks (used by Nuxt modules) and runtime Nuxt hooks (which you might use in your application code).
::

#### Reasons for Change

Hookable v6's `callHook` is 20-40x faster because it avoids creating a `Promise` when one is not needed. This benefits applications with many hook call sites.

#### Migration Steps

If you or your modules use `callHook` with `.then()` or `.catch()` chaining, switch to `await`:

```diff
- nuxtApp.callHook('my:hook', data).then(() => { ... })
+ await nuxtApp.callHook('my:hook', data)
```

```diff
- nuxtApp.hooks.callHook('my:hook', data).catch(err => { ... })
+ try { await nuxtApp.hooks.callHook('my:hook', data) } catch (err) { ... }
```

::tip
You can test this feature early by setting `future.compatibilityVersion: 5` (see [Testing Nuxt 5](https://nuxt.com/docs/4.x/getting-started/upgrade#testing-nuxt-5)) or by enabling it explicitly with `experimental.asyncCallHook: false`.
::

Alternatively, you can ensure `callHook` always returns a `Promise` with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    asyncCallHook: true,
  },
})
```

## Migrating to Nuxt 4

Nuxt 4 includes significant improvements and changes. This guide will help you migrate your existing Nuxt 3 application to Nuxt 4.

First, upgrade to Nuxt 4:

::code-group{sync="pm"}

```bash [npm]
npm install nuxt@^4.0.0
```

```bash [yarn]
yarn add nuxt@^4.0.0
```

```bash [pnpm]
pnpm add nuxt@^4.0.0
```

```bash [bun]
bun add nuxt@^4.0.0
```

```bash [deno]
deno add npm:nuxt@^4.0.0
```

::

After upgrading, most Nuxt 4 behaviors are now the default. However, some features can still be configured if you need to maintain backward compatibility during your migration.

The following sections detail the key changes and migrations needed when upgrading to Nuxt 4.

Breaking or significant changes are documented below along with migration steps and available configuration options.

### Migrating Using Codemods

To facilitate the upgrade process, we have collaborated with the [Codemod](https://github.com/codemod/codemod){rel=""nofollow""} team to automate many migration steps with some open-source codemods.

::note
If you encounter any issues, please report them to the Codemod team with `npx codemod feedback` 🙏
::

For a complete list of Nuxt 4 codemods, detailed information on each, their source, and various ways to run them, visit the [Codemod Registry](https://app.codemod.com/registry){rel=""nofollow""}.

You can run all the codemods mentioned in this guide using the following `codemod` recipe:

::code-group

```bash [npm]
# Using pinned version due to https://github.com/codemod/codemod/issues/1710
npx codemod@0.18.7 nuxt/4/migration-recipe
```

```bash [yarn]
# Using pinned version due to https://github.com/codemod/codemod/issues/1710
yarn dlx codemod@0.18.7 nuxt/4/migration-recipe
```

```bash [pnpm]
# Using pinned version due to https://github.com/codemod/codemod/issues/1710
pnpm dlx codemod@0.18.7 nuxt/4/migration-recipe
```

```bash [bun]
# Using pinned version due to https://github.com/codemod/codemod/issues/1710
bun x codemod@0.18.7 nuxt/4/migration-recipe
```

```bash [deno]
# Using pinned version due to https://github.com/codemod/codemod/issues/1710
deno x codemod@0.18.7 nuxt/4/migration-recipe
```

::

This command will execute all codemods in sequence, with the option to deselect any that you do not wish to run. Each codemod is also listed below alongside its respective change and can be executed independently.
