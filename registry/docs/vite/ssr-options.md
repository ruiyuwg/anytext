# SSR Options

Unless noted, the options in this section are applied to both dev and build.

## ssr.external

- **Type:** `string[] | true`
- **Related:** [SSR Externals](/guide/ssr#ssr-externals)

Externalize the given dependencies and their transitive dependencies for SSR. By default, all dependencies are externalized except for linked dependencies (for HMR). If you prefer to externalize the linked dependency, you can pass its name to this option.

If `true`, all dependencies including linked dependencies are externalized.

Note that the explicitly listed dependencies (using `string[]` type) will always take priority if they're also listed in `ssr.noExternal` (using any type).

## ssr.noExternal

- **Type:** `string | RegExp | (string | RegExp)[] | true`
- **Related:** [SSR Externals](/guide/ssr#ssr-externals)

Prevent listed dependencies from being externalized for SSR, which they will get bundled in build. By default, only linked dependencies are not externalized (for HMR). If you prefer to externalize the linked dependency, you can pass its name to the `ssr.external` option.

If `true`, no dependencies are externalized. However, dependencies explicitly listed in `ssr.external` (using `string[]` type) can take priority and still be externalized. If `ssr.target: 'node'` is set, Node.js built-ins will also be externalized by default.

Note that if both `ssr.noExternal: true` and `ssr.external: true` are configured, `ssr.noExternal` takes priority and no dependencies are externalized.

## ssr.target

- **Type:** `'node' | 'webworker'`
- **Default:** `node`

Build target for the SSR server.

## ssr.resolve.conditions

- **Type:** `string[]`
- **Default:** `['module', 'node', 'development|production']` (`defaultServerConditions`) (`['module', 'browser', 'development|production']` (`defaultClientConditions`) for `ssr.target === 'webworker'`)
- **Related:** [Resolve Conditions](./shared-options.md#resolve-conditions)

These conditions are used in the plugin pipeline, and only affect non-externalized dependencies during the SSR build. Use `ssr.resolve.externalConditions` to affect externalized imports.

## ssr.resolve.externalConditions

- **Type:** `string[]`
- **Default:** `['node']`

Conditions that are used during ssr import (including `ssrLoadModule`) of externalized direct dependencies (external dependencies imported by Vite).

When using this option, make sure to run Node with [`--conditions` flag](https://nodejs.org/docs/latest/api/cli.html#-c-condition---conditionscondition) with the same values in both dev and build to get a consistent behavior.

For example, when setting `['node', 'custom']`, you should run `NODE_OPTIONS='--conditions custom' vite` in dev and `NODE_OPTIONS="--conditions custom" node ./dist/server.js` after build.

## ssr.resolve.mainFields

- **Type:** `string[]`
- **Default:** `['module', 'jsnext:main', 'jsnext']`

List of fields in `package.json` to try when resolving a package's entry point. Note this takes lower precedence than conditional exports resolved from the `exports` field: if an entry point is successfully resolved from `exports`, the main field will be ignored. This setting only affects non-externalized dependencies.

***

# SSR Using `ModuleRunner` API

Give us feedback at [Environment API feedback discussion](https://github.com/vitejs/vite/discussions/16358)

`server.ssrLoadModule` has been replaced by importing from a [Module Runner](/guide/api-environment#modulerunner).

Affected scope: `Vite Plugin Authors`

`ModuleRunner` was first introduced in `v6.0`. The deprecation of `server.ssrLoadModule` is planned for a future major. To identify your usage, set `future.removeSsrLoadModule` to `"warn"` in your vite config.

## Motivation

The `server.ssrLoadModule(url)` only allows importing modules in the `ssr` environment and can only execute the modules in the same process as the Vite dev server. For apps with custom environments, each is associated with a `ModuleRunner` that may be running in a separate thread or process. To import modules, we now have `moduleRunner.import(url)`.

## Migration Guide

Check out the [Environment API for Frameworks Guide](../guide/api-environment-frameworks.md).

`server.ssrFixStacktrace` and `server.ssrRewriteStacktrace` does not have to be called when using the Module Runner APIs. The stack traces will be updated unless `sourcemapInterceptor` is set to `false`.

***
