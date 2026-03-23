# typecheck

Options for configuring [typechecking](/guide/testing-types) test environment.

## typecheck.enabled

- **Type**: `boolean`
- **Default**: `false`
- **CLI**: `--typecheck`, `--typecheck.enabled`

Enable typechecking alongside your regular tests.

## typecheck.only

- **Type**: `boolean`
- **Default**: `false`
- **CLI**: `--typecheck.only`

Run only typecheck tests, when typechecking is enabled. When using CLI, this option will automatically enable typechecking.

## typecheck.checker

- **Type**: `'tsc' | 'vue-tsc' | string`
- **Default**: `tsc`

What tools to use for type checking. Vitest will spawn a process with certain parameters for easier parsing, depending on the type. Checker should implement the same output format as `tsc`.

You need to have a package installed to use typechecker:

- `tsc` requires `typescript` package
- `vue-tsc` requires `vue-tsc` package

You can also pass down a path to custom binary or command name that produces the same output as `tsc --noEmit --pretty false`.

## typecheck.include

- **Type**: `string[]`
- **Default**: `['**/*.{test,spec}-d.?(c|m)[jt]s?(x)']`

Glob pattern for files that should be treated as test files

## typecheck.exclude

- **Type**: `string[]`
- **Default**: `['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**']`

Glob pattern for files that should not be treated as test files

## typecheck.allowJs

- **Type**: `boolean`
- **Default**: `false`

Check JS files that have `@ts-check` comment. If you have it enabled in tsconfig, this will not overwrite it.

## typecheck.ignoreSourceErrors

- **Type**: `boolean`
- **Default**: `false`

Do not fail, if Vitest found errors outside the test files. This will not show you non-test errors at all.

By default, if Vitest finds source error, it will fail test suite.

## typecheck.tsconfig

- **Type**: `string`
- **Default**: *tries to find closest tsconfig.json*

Path to custom tsconfig, relative to the project root.

## typecheck.spawnTimeout

- **Type**: `number`
- **Default**: `10_000`

Minimum time in milliseconds it takes to spawn the typechecker.

***

# ui&#x20;

- **Type:** `boolean`
- **Default:** `false`
- **CLI:** `--ui`, `--ui=false`

Enable [Vitest UI](/guide/ui).

This features requires a [`@vitest/ui`](https://npmx.dev/package/@vitest/ui) package to be installed. If you do not have it already, Vitest will install it when you run the test command for the first time.

Make sure that your UI server is not exposed to the network. Since Vitest 4.1 setting [`api.host`](/config/api) to anything other than `localhost` will disable the buttons to save the code or run any tests for security reasons, effectively making UI a readonly reporter.

***

# unstubEnvs

- **Type:** `boolean`
- **Default:** `false`

Should Vitest automatically call [`vi.unstubAllEnvs()`](/api/vi#vi-unstuballenvs) before each test.

```js [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    unstubEnvs: true,
  },
})
```

Be aware that this option may cause problems with async [concurrent tests](/api/test#test-concurrent). If enabled, the completion of one test will restore all the values changed with [`vi.stubEnv`](/api/vi#vi-stubenv), including those currently being used by other tests in progress.

***

# unstubGlobals

- **Type:** `boolean`
- **Default:** `false`

Should Vitest automatically call [`vi.unstubAllGlobals()`](/api/vi#vi-unstuballglobals) before each test.

```js [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    unstubGlobals: true,
  },
})
```

Be aware that this option may cause problems with async [concurrent tests](/api/test#test-concurrent). If enabled, the completion of one test will restore all global values that were changed with [`vi.stubGlobal`](/api/vi#vi-stubglobal), including those currently being used by other tests in progress.

***

```ts
function import<T>(moduleId: string): Promise<T>
```

***

# update

- **Type:** `boolean | 'new' | 'all' | 'none'`
- **Default:** `false`
- **CLI:** `-u`, `--update`, `--update=false`, `--update=new`, `--update=none`

Define snapshot update behavior.

- `true` or `'all'`: updates all changed snapshots and deletes obsolete ones
- `new`: generates new snapshots without changing or deleting obsolete ones
- `none`: does not write snapshots and fails on snapshot mismatches, missing snapshots, and obsolete snapshots

When `update` is `false` (the default), Vitest resolves snapshot update mode by environment:

- Local runs (non-CI): works same as `new`
- CI runs (`process.env.CI` is truthy): works same as `none`

***

# Using Plugins

Vitest can be extended using plugins, similar to how Vite plugins work. This allows you to enhance and customize Vitest's functionality by using the same API and concepts of Vite plugins.

For detailed guidance on how to write plugins, you can refer to the [Vite plugin documentation](https://vitejs.dev/guide/api-plugin).

***

# Vi

Vitest provides utility functions to help you out through its `vi` helper. You can access it globally (when [globals configuration](/config/globals) is enabled), or import it from `vitest` directly:

```js
import { vi } from 'vitest'
```
