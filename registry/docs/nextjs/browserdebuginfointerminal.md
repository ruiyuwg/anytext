# browserDebugInfoInTerminal

> This feature is currently experimental and subject to change, it is not recommended for production.

The `experimental.browserDebugInfoInTerminal` option forwards console output and runtime errors originating in the browser to the dev server terminal.

This option is disabled by default. When enabled it only works in development mode.

## Usage

Enable forwarding:

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    browserDebugInfoInTerminal: true,
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    browserDebugInfoInTerminal: true,
  },
}

module.exports = nextConfig
```

### Serialization limits

Deeply nested objects/arrays are truncated using **sensible defaults**. You can tweak these limits:

- **depthLimit**: (optional) Limit stringification depth for nested objects/arrays. Default: 5
- **edgeLimit**: (optional) Max number of properties or elements to include per object or array. Default: 100

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    browserDebugInfoInTerminal: {
      depthLimit: 5,
      edgeLimit: 100,
    },
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    browserDebugInfoInTerminal: {
      depthLimit: 5,
      edgeLimit: 100,
    },
  },
}

module.exports = nextConfig
```

### Source location

Source locations are included by default when this feature is enabled.

```tsx filename="app/page.tsx" highlight={8}
'use client'

export default function Home() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log('Hello World')
      }}
    >
      Click me
    </button>
  )
}
```

Clicking the button prints this message to the terminal.

```bash filename="Terminal"
[browser] Hello World (app/page.tsx:8:17)
```

To suppress them, set `showSourceLocation: false`.

- **showSourceLocation**: Include source location info when available.

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    browserDebugInfoInTerminal: {
      showSourceLocation: false,
    },
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    browserDebugInfoInTerminal: {
      showSourceLocation: false,
    },
  },
}

module.exports = nextConfig
```

| Version   | Changes                                              |
| --------- | ---------------------------------------------------- |
| `v15.4.0` | experimental `browserDebugInfoInTerminal` introduced |

# cacheComponents

The `cacheComponents` flag is a feature in Next.js that causes data fetching operations in the App Router to be excluded from pre-renders unless they are explicitly cached. This can be useful for optimizing the performance of dynamic data fetching in Server Components.

It is useful if your application requires fresh data fetching during runtime rather than serving from a pre-rendered cache.

It is expected to be used in conjunction with [`use cache`](/docs/app/api-reference/directives/use-cache) so that your data fetching happens at runtime by default unless you define specific parts of your application to be cached with `use cache` at the page, function, or component level.

## Usage

To enable the `cacheComponents` flag, set it to `true` in your `next.config.ts` file:

```ts filename="next.config.ts"
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
}

export default nextConfig
```

When `cacheComponents` is enabled, you can use the following cache functions and configurations:

- The [`use cache` directive](/docs/app/api-reference/directives/use-cache)
- The [`cacheLife` function](/docs/app/api-reference/config/next-config-js/cacheLife) with `use cache`
- The [`cacheTag` function](/docs/app/api-reference/functions/cacheTag)

## Notes

- While `cacheComponents` can optimize performance by ensuring fresh data fetching during runtime, it may also introduce additional latency compared to serving pre-rendered content.

## Version History

| Version | Change                                                                                                                            |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 16.0.0  | `cacheComponents` introduced. This flag controls the `ppr`, `useCache`, and `dynamicIO` flags as a single, unified configuration. |
