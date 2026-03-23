# turbopack.ignoreIssue

The `turbopack.ignoreIssue` option allows you to filter out specific [Turbopack](/docs/app/api-reference/turbopack) errors and warnings so they do not appear in the CLI output or the error overlay. This is useful for suppressing known warnings that do not affect your application, such as intentionally unresolved optional dependencies.

This option is only available when using Turbopack (`next dev --turbopack`).

## Usage

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/vendor/**',
      },
    ],
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/vendor/**',
      },
    ],
  },
}

module.exports = nextConfig
```

## Options

Each rule in the `ignoreIssue` array is an object with the following fields:

| Field                         | Type               | Required | Description                                |
| ----------------------------- | ------------------ | -------- | ------------------------------------------ |
| [`path`](#path)               | `string \| RegExp` | Yes      | Matches against the file path of the issue |
| [`title`](#title)             | `string \| RegExp` | No       | Matches against the issue title            |
| [`description`](#description) | `string \| RegExp` | No       | Matches against the issue description      |

An issue is suppressed when it matches the `path` **and** all other specified fields in a rule. If only `path` is provided, any issue from a matching file is suppressed.

> **Good to know:** Issue titles and descriptions may change between Turbopack versions. The `path` field is generally stable, but is not guaranteed to remain consistent for all issue types. When possible, prefer using more specific `path` patterns over `title` or `description` matching.

### `path`

A **glob pattern** (when a string) or **regular expression** that matches against the file path where the issue originated.

```js filename="next.config.js"
module.exports = {
  turbopack: {
    ignoreIssue: [
      // Glob pattern: suppress issues from any file under vendor/
      { path: '**/vendor/**' },
      // RegExp: suppress issues from files matching a pattern
      { path: /node_modules\/legacy-lib/ },
    ],
  },
}
```

### `title`

An **exact string match** (when a string) or **regular expression** that matches against the issue title.

```js filename="next.config.js"
module.exports = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/src/**',
        title: 'Module not found',
      },
    ],
  },
}
```

### `description`

An **exact string match** (when a string) or **regular expression** that matches against the issue description.

```js filename="next.config.js"
module.exports = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/src/**',
        description: /Cannot find module 'optional-dep'/,
      },
    ],
  },
}
```

## Examples

### Suppressing warnings for optional dependencies

If your code uses `try/catch` around an optional `require()` call, Turbopack may report a "Module not found" warning. You can suppress it:

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/lib/optional-feature/**',
        title: 'Module not found',
      },
    ],
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/lib/optional-feature/**',
        title: 'Module not found',
      },
    ],
  },
}

module.exports = nextConfig
```

### Combining multiple rules

You can specify multiple rules to suppress different issues:

```js filename="next.config.js"
module.exports = {
  turbopack: {
    ignoreIssue: [
      { path: '**/vendor/**' },
      { path: '**/legacy/**', title: 'Module not found' },
      { path: /generated\//, description: /expected identifier/ },
    ],
  },
}
```

## Version History

| Version   | Changes                             |
| --------- | ----------------------------------- |
| `v16.2.0` | `turbopack.ignoreIssue` introduced. |

## Next Steps

Learn more about Turbopack configuration.

- [turbopack](/docs/app/api-reference/config/next-config-js/turbopack)
  - Configure Next.js with Turbopack-specific options
- [Turbopack](/docs/app/api-reference/turbopack)
  - Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.

# typedRoutes

# typedRoutes

> **Note**: This option has been marked as stable, so you should use `typedRoutes` instead of `experimental.typedRoutes`.

Support for [statically typed links](/docs/app/api-reference/config/typescript#statically-typed-links). This feature requires using TypeScript in your project.

```js filename="next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
}

module.exports = nextConfig
```

# typescript

# typescript

Configure TypeScript behavior with the `typescript` option in `next.config.js`:

```js filename="next.config.js"
module.exports = {
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json',
  },
}
```

## Options

| Option              | Type      | Default           | Description                                                      |
| ------------------- | --------- | ----------------- | ---------------------------------------------------------------- |
| `ignoreBuildErrors` | `boolean` | `false`           | Allow production builds to complete even with TypeScript errors. |
| `tsconfigPath`      | `string`  | `'tsconfig.json'` | Path to a custom `tsconfig.json` file.                           |

## `ignoreBuildErrors`

Next.js fails your **production build** (`next build`) when TypeScript errors are present in your project.

If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.

Note that this completely skips the TypeScript type checking step. It does not run TypeScript and suppress errors, it bypasses the check entirely.

If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.

```js filename="next.config.js"
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
```

## `tsconfigPath`

Use a different TypeScript configuration file for builds or tooling:

```js filename="next.config.js"
module.exports = {
  typescript: {
    tsconfigPath: 'tsconfig.build.json',
  },
}
```

See the [TypeScript configuration](/docs/app/api-reference/config/typescript#custom-tsconfig-path) page for more details.

# urlImports
