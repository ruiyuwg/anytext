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

- **Vite Environment API**: Automatically enables the new [Vite Environment API](https://nuxt.com/docs/4.x/getting-started/upgrade#migration-to-vite-environment-api) for improved build configuration
- **Normalized Page Names**: Page component names will [match their route names](https://nuxt.com/docs/4.x/getting-started/upgrade#normalized-page-component-names) for consistent `<KeepAlive>` behavior
- **`clearNuxtState` resets to defaults**: `clearNuxtState` will [reset state to its initial value](https://nuxt.com/docs/4.x/getting-started/upgrade#respect-defaults-when-clearing-usestate) instead of setting it to `undefined`
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

::tip
You can test this feature early by setting `future.compatibilityVersion: 5` (see [Testing Nuxt 5](https://nuxt.com/docs/4.x/getting-started/upgrade#testing-nuxt-5)) or by enabling it explicitly with `experimental.viteEnvironmentApi: true`.
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
