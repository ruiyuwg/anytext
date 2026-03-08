# server&#x20;

Before Vitest 4, this option was used to define the configuration for the `vite-node` server.

At the moment, this option allows you to configure the inlining and externalization mechanisms, along with the module runner debugging configuration.

These options should be used only as the last resort to improve performance by externalizing auto-inlined dependencies or to fix issues by inlining invalid external dependencies.

Normally, Vitest should do this automatically.

## deps

### external

- **Type:** `(string | RegExp)[]`
- **Default:** files inside [`moduleDirectories`](/config/deps#moduledirectories)

Specifies modules that should not be transformed by Vite and should instead be processed directly by the engine. These modules are imported via native dynamic `import` and bypass both transformation and resolution phases.

```js [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    server: {
      deps: {
        external: ['react'],
      },
    },
  },
})
```

External modules and their dependencies are not present in the module graph and will not trigger test restarts when they change.

Typically, packages under `node_modules` are externalized.

If a string is provided, it is first normalized by prefixing the `/node_modules/` or other [`moduleDirectories`](/config/deps#moduledirectories) segments (for example, `'react'` becomes `/node_modules/react/`), and the resulting string is then matched against the full file path. For example, package `@company/some-name` located inside `packages/some-name` should be specified as `some-name`, and `packages` should be included in `deps.moduleDirectories`.

If a `RegExp` is provided, it is matched against the full file path.

### inline

- **Type:** `(string | RegExp)[] | true`
- **Default:** everything that is not externalized

Specifies modules that should be transformed and resolved by Vite. These modules are run by Vite's [module runner](https://vite.dev/guide/api-environment-runtimes#modulerunner).

Typically, your source files are inlined.

If a string is provided, it is first normalized by prefixing the `/node_modules/` or other [`moduleDirectories`](/config/deps#moduledirectories) segments (for example, `'react'` becomes `/node_modules/react/`), and the resulting string is then matched against the full file path. For example, package `@company/some-name` located inside `packages/some-name` should be specified as `some-name`, and `packages` should be included in `deps.moduleDirectories`.

If a `RegExp` is provided, it is matched against the full file path.

### fallbackCJS

- **Type:** `boolean`
- **Default:** `false`

When a dependency is a valid ESM package, try to guess the cjs version based on the path. This might be helpful, if a dependency has the wrong ESM file.

This might potentially cause some misalignment if a package has different logic in ESM and CJS mode.

***

# setupFiles

- **Type:** `string | string[]`

Paths to setup files resolved relative to the [`root`](/config/root). They will run before each *test file* in the same process. By default, all test files run in parallel, but you can configure it with [`sequence.setupFiles`](/config/sequence#sequence-setupfiles) option.

Vitest will ignore any exports from these files.

Note that setup files are executed in the same process as tests, unlike [`globalSetup`](/config/globalsetup) that runs once in the main thread before any test worker is created.

Editing a setup file will automatically trigger a rerun of all tests.

If you have a heavy process running in the background, you can use `process.env.VITEST_POOL_ID` (integer-like string) inside to distinguish between workers and spread the workload.

If [isolation](/config/isolate) is disabled, imported modules are cached, but the setup file itself is executed again before each test file, meaning that you are accessing the same global object before each test file. Make sure you are not doing the same thing more than necessary.

For example, you may rely on a global variable:

```ts
import { config } from '@some-testing-lib'

if (!globalThis.setupInitialized) {
  config.plugins = [myCoolPlugin]
  computeHeavyThing()
  globalThis.setupInitialized = true
}

// hooks reset before each test file
afterEach(() => {
  cleanup()
})

globalThis.resetBeforeEachTest = true
```

***

# silent

- **Type:** `boolean | 'passed-only'`
- **Default:** `false`
- **CLI:** `--silent`, `--silent=false`

Silent console output from tests.

Use `'passed-only'` to see logs from failing tests only. Logs from failing tests are printed after a test has finished.

***

# slowTestThreshold&#x20;

- **Type**: `number`
- **Default**: `300`
- **CLI**: `--slow-test-threshold=<number>`, `--slowTestThreshold=<number>`

The number of milliseconds after which a test or suite is considered slow and reported as such in the results.

***
