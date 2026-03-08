# In-Source Testing

Vitest provides a way to run tests within your source code along side the implementation, similar to [Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest).

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings a closer feedback loop for development.

This guide explains how to write tests inside your source code. If you need to write tests in separate test files, follow the ["Writing Tests" guide](/guide/#writing-tests).

## Setup

To get started, put a `if (import.meta.vitest)` block at the end of your source file and write some tests inside it. For example:

```ts [src/index.ts]
// the implementation
export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
```

Update the `includeSource` config for Vitest to grab the files under `src/`:

```ts [vitest.config.ts]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'], // [!code ++]
  },
})
```

Then you can start to test!

```bash
$ npx vitest
```

## Production Build

For the production build, you will need to set the `define` options in your config file, letting the bundler do the dead code elimination. For example, in Vite

```ts [vite.config.ts]
/// <reference types="vitest/config" />

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
  },
  define: { // [!code ++]
    'import.meta.vitest': 'undefined', // [!code ++]
  }, // [!code ++]
})
```

### Other Bundlers

```js [rolldown.config.js]
import { defineConfig } from 'rolldown/config'

export default defineConfig({
  transform: {
    define: { // [!code ++]
      'import.meta.vitest': 'undefined', // [!code ++]
    }, // [!code ++]
  },
})
```

Learn more: [Rolldown](https://rolldown.rs/)

```js [rollup.config.js]
import replace from '@rollup/plugin-replace' // [!code ++]

export default {
  plugins: [
    replace({ // [!code ++]
      'import.meta.vitest': 'undefined', // [!code ++]
    }) // [!code ++]
  ],
  // other options
}
```

Learn more: [Rollup](https://rollupjs.org/)

```js [build.config.js]
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  replace: { // [!code ++]
    'import.meta.vitest': 'undefined', // [!code ++]
  }, // [!code ++]
  // other options
})
```

Learn more: [unbuild](https://github.com/unjs/unbuild)

```js [webpack.config.js]
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({ // [!code ++]
      'import.meta.vitest': 'undefined', // [!code ++]
    })// [!code ++]
  ],
}
```

Learn more: [webpack](https://webpack.js.org/plugins/define-plugin/)

## TypeScript

To get TypeScript support for `import.meta.vitest`, add `vitest/importMeta` to your `tsconfig.json`:

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": [
      "vitest/importMeta" // [!code ++]
    ]
  }
}
```

Reference to [`examples/in-source-test`](https://github.com/vitest-dev/vitest/tree/main/examples/in-source-test) for the full example.

## Notes

This feature could be useful for:

- Unit testing for small-scoped functions or utilities
- Prototyping
- Inline Assertion

It's recommended to **use separate test files instead** for more complex tests like components or E2E testing.

***

# include

- **Type:** `string[]`
- **Default:** `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`
- **CLI:** `vitest [...include]`, `vitest **/*.test.js`

A list of [glob patterns](https://superchupu.dev/tinyglobby/comparison) that match your test files. These patterns are resolved relative to the [`root`](/config/root) ([`process.cwd()`](https://nodejs.org/api/process.html#processcwd) by default).

Vitest uses the [`tinyglobby`](https://www.npmjs.com/package/tinyglobby) package to resolve the globs.

When using coverage, Vitest automatically adds test files `include` patterns to coverage's default `exclude` patterns. See [`coverage.exclude`](/config/coverage#exclude).

## Example

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      './test',
      './**/*.{test,spec}.tsx?',
    ],
  },
})
```

Vitest provides reasonable defaults, so normally you wouldn't override them. A good example of defining `include` is for [test projects](/guide/projects):

```js{8,12} [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        name: 'unit',
        include: ['./test/unit/*.test.js'],
      },
      {
        name: 'e2e',
        include: ['./test/e2e/*.test.js'],
      },
    ],
  },
})
```

This option will override Vitest defaults. If you just want to extend them, use `configDefaults` from `vitest/config`:

```js{6}
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      ...configDefaults.include,
      './test',
      './**/*.{test,spec}.tsx?',
    ],
  },
})
```

***
