# deps

- **Type:** `{ optimizer?, ... }`

Handling for dependencies resolution.

## deps.optimizer

- **Type:** `{ ssr?, client? }`
- **See also:** [Dep Optimization Options](https://vitejs.dev/config/dep-optimization-options.html)

Enable dependency optimization. If you have a lot of tests, this might improve their performance.

When Vitest encounters the external library listed in `include`, it will be bundled into a single file using esbuild and imported as a whole module. This is good for several reasons:

- Importing packages with a lot of imports is expensive. By bundling them into one file we can save a lot of time
- Importing UI libraries is expensive because they are not meant to run inside Node.js
- Your `alias` configuration is now respected inside bundled packages
- Code in your tests is running closer to how it's running in the browser

Be aware that only packages in `deps.optimizer?.[mode].include` option are bundled (some plugins populate this automatically, like Svelte). You can read more about available options in [Vite](https://vitejs.dev/config/dep-optimization-options.html) docs (Vitest doesn't support `disable` and `noDiscovery` options). By default, Vitest uses `optimizer.client` for `jsdom` and `happy-dom` environments, and `optimizer.ssr` for `node` and `edge` environments.

This options also inherits your `optimizeDeps` configuration (for web Vitest will extend `optimizeDeps`, for ssr - `ssr.optimizeDeps`). If you redefine `include`/`exclude` option in `deps.optimizer` it will extend your `optimizeDeps` when running tests. Vitest automatically removes the same options from `include`, if they are listed in `exclude`.

You will not be able to edit your `node_modules` code for debugging, since the code is actually located in your `cacheDir` or `test.cache.dir` directory. If you want to debug with `console.log` statements, edit it directly or force rebundling with `deps.optimizer?.[mode].force` option.

### deps.optimizer.{mode}.enabled

- **Type:** `boolean`
- **Default:** `false`

Enable dependency optimization.

## deps.client

- **Type:** `{ transformAssets?, ... }`

Options that are applied to external files when the environment is set to `client`. By default, `jsdom` and `happy-dom` use `client` environment, while `node` and `edge` environments use `ssr`, so these options will have no affect on files inside those environments.

Usually, files inside `node_modules` are externalized, but these options also affect files in [`server.deps.external`](#server-deps-external).

### deps.client.transformAssets

- **Type:** `boolean`
- **Default:** `true`

Should Vitest process assets (.png, .svg, .jpg, etc) files and resolve them like Vite does in the browser.

This module will have a default export equal to the path to the asset, if no query is specified.

At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.

### deps.client.transformCss

- **Type:** `boolean`
- **Default:** `true`

Should Vitest process CSS (.css, .scss, .sass, etc) files and resolve them like Vite does in the browser.

If CSS files are disabled with [`css`](#css) options, this option will just silence `ERR_UNKNOWN_FILE_EXTENSION` errors.

At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.

### deps.client.transformGlobPattern

- **Type:** `RegExp | RegExp[]`
- **Default:** `[]`

Regexp pattern to match external files that should be transformed.

By default, files inside `node_modules` are externalized and not transformed, unless it's CSS or an asset, and corresponding option is not disabled.

At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.

## deps.interopDefault

- **Type:** `boolean`
- **Default:** `true`

Interpret CJS module's default as named exports. Some dependencies only bundle CJS modules and don't use named exports that Node.js can statically analyze when a package is imported using `import` syntax instead of `require`. When importing such dependencies in Node environment using named exports, you will see this error:

```
import { read } from 'fs-jetpack';
         ^^^^
SyntaxError: Named export 'read' not found. The requested module 'fs-jetpack' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export.
```

Vitest doesn't do static analysis, and cannot fail before your running code, so you will most likely see this error when running tests, if this feature is disabled:

```
TypeError: createAsyncThunk is not a function
TypeError: default is not a function
```

By default, Vitest assumes you are using a bundler to bypass this and will not fail, but you can disable this behaviour manually, if your code is not processed.

## deps.moduleDirectories

- **Type:** `string[]`
- **Default**: `['node_modules']`

A list of directories that should be treated as module directories. This config option affects the behavior of [`vi.mock`](/api/vi#vi-mock): when no factory is provided and the path of what you are mocking matches one of the `moduleDirectories` values, Vitest will try to resolve the mock by looking for a `__mocks__` folder in the [root](#root) of the project.

This option will also affect if a file should be treated as a module when externalizing dependencies. By default, Vitest imports external modules with native Node.js bypassing Vite transformation step.

Setting this option will *override* the default, if you wish to still search `node_modules` for packages include it along with any other options:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    deps: {
      moduleDirectories: ['node_modules', path.resolve('../../packages')],
    }
  },
})
```

***

# diff

- **Type:** `string`
- **CLI:** `--diff=<path>`

`DiffOptions` object or a path to a module which exports `DiffOptions`. Useful if you want to customize diff display.

For example, as a config object:

```ts
import { defineConfig } from 'vitest/config'
import c from 'picocolors'

export default defineConfig({
  test: {
    diff: {
      aIndicator: c.bold('--'),
      bIndicator: c.bold('++'),
      omitAnnotationLines: true,
    },
  },
})
```

Or as a module:

```ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    diff: './vitest.diff.ts',
  },
})
```

```ts [vitest.diff.ts]
import type { DiffOptions } from 'vitest'
import c from 'picocolors'

export default {
  aIndicator: c.bold('--'),
  bIndicator: c.bold('++'),
  omitAnnotationLines: true,
} satisfies DiffOptions
```

## diff.expand

- **Type**: `boolean`
- **Default**: `true`
- **CLI:** `--diff.expand=false`

Expand all common lines.

## diff.truncateThreshold

- **Type**: `number`
- **Default**: `0`
- **CLI:** `--diff.truncateThreshold=<path>`

The maximum length of diff result to be displayed. Diffs above this threshold will be truncated.
Truncation won't take effect with default value 0.

## diff.truncateAnnotation

- **Type**: `string`
- **Default**: `'... Diff result is truncated'`
- **CLI:** `--diff.truncateAnnotation=<annotation>`

Annotation that is output at the end of diff result if it's truncated.

## diff.truncateAnnotationColor

- **Type**: `DiffOptionsColor = (arg: string) => string`
- **Default**: `noColor = (string: string): string => string`

Color of truncate annotation, default is output with no color.

## diff.printBasicPrototype

- **Type**: `boolean`
- **Default**: `false`

Print basic prototype `Object` and `Array` in diff output

## diff.maxDepth

- **Type**: `number`
- **Default**: `20` (or `8` when comparing different types)

Limit the depth to recurse when printing nested objects

***

# dir

- **Type:** `string`
- **CLI:** `--dir=<path>`
- **Default:** same as `root`

Base directory to scan for the test files. You can specify this option to speed up test discovery if your root covers the whole project

***

# disableConsoleIntercept

- **Type:** `boolean`
- **CLI:** `--disableConsoleIntercept`
- **Default:** `false`

By default, Vitest automatically intercepts console logging during tests for extra formatting of test file, test title, etc.

This is also required for console log preview on Vitest UI.

However, disabling such interception might help when you want to debug a code with normal synchronous terminal console logging.

This option has no effect on [browser tests](/guide/browser/) since Vitest preserves original logging in browser devtools.

***

# env

- **Type:** `Partial<NodeJS.ProcessEnv>`

Environment variables available on `process.env` and `import.meta.env` during tests. These variables will not be available in the main process (in `globalSetup`, for example).

***
