# `this.environment` in Hooks

Give us feedback at [Environment API feedback discussion](https://github.com/vitejs/vite/discussions/16358)

Before Vite 6, only two environments were available: `client` and `ssr`. A single `options.ssr` plugin hook argument in `resolveId`, `load` and `transform` allowed plugin authors to differentiate between these two environments when processing modules in plugin hooks. In Vite 6, a Vite application can define any number of named environments as needed. We're introducing `this.environment` in the plugin context to interact with the environment of the current module in hooks.

Affected scope: `Vite Plugin Authors`

`this.environment` was introduced in `v6.0`. The deprecation of `options.ssr` is planned for a future major. At that point we'll start recommending migrating your plugins to use the new API. To identify your usage, set `future.removePluginHookSsrArgument` to `"warn"` in your vite config.

## Motivation

`this.environment` not only allow the plugin hook implementation to know the current environment name, it also gives access to the environment config options, module graph information, and transform pipeline (`environment.config`, `environment.moduleGraph`, `environment.transformRequest()`). Having the environment instance available in the context allows plugin authors to avoid the dependency of the whole dev server (typically cached at startup through the `configureServer` hook).

## Migration Guide

For the existing plugin to do a quick migration, replace the `options.ssr` argument with `this.environment.config.consumer === 'server'` in the `resolveId`, `load` and `transform` hooks:

```ts
import { Plugin } from 'vite'

export function myPlugin(): Plugin {
  return {
    name: 'my-plugin',
    resolveId(id, importer, options) {
      const isSSR = options.ssr // [!code --]
      const isSSR = this.environment.config.consumer === 'server' // [!code ++]

      if (isSSR) {
        // SSR specific logic
      } else {
        // Client specific logic
      }
    },
  }
}
```

For a more robust long term implementation, the plugin hook should handle for [multiple environments](/guide/api-environment-plugins.html#accessing-the-current-environment-in-hooks) using fine-grained environment options instead of relying on the environment name.

***

***

url: /live.md
description: >-
Vite: The Documentary re-premiere. Join the ecosystem this March 19th at 3 PM
UTC to remember the story we wrote together. And participate in the live stage
to discuss our past, present, and future. We'll be waiting for you!
-------------------------------------------------------------------

***

***

url: /acknowledgements.md
description: >-
Vite is built upon the shoulders of giants. Thank you to all the projects and
contributors that make Vite possible.
-------------------------------------

# Acknowledgements

Vite is built upon the shoulders of giants. We would like to express our gratitude to all the projects, contributors, and sponsors that make Vite possible.

## Contributors

Vite is developed by an international team of contributors. See the [Team page](/team) to meet the core team members.

We also thank all the [contributors on GitHub](https://github.com/vitejs/vite/graphs/contributors) who have helped improve Vite through code contributions, bug reports, documentation, and documentation translation.

## Sponsors

Vite's development is supported by generous sponsors. You can support Vite through [GitHub Sponsors](https://github.com/sponsors/vitejs) or [Open Collective](https://opencollective.com/vite).

## Dependencies

Vite depends on these amazing open source projects:

### Notable Dependencies

### Bundled Dependency Authors

This section is automatically generated from the `author` and `funding` fields in each package's `package.json`. If you'd like to update how your package appears here, you can update these fields in your package.

## Development Tools

Vite's development workflow is powered by these tools:

## Past Notable Dependencies

We also thank the maintainers of these projects that Vite used in previous versions:

***
