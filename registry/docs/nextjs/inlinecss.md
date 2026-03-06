# inlineCss

> This feature is currently experimental and subject to change, it is not recommended for production.

## Usage

Experimental support for inlining CSS in the `<head>`. When this flag is enabled, all places where we normally generate a `<link>` tag will instead have a generated `<style>` tag.

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    inlineCss: true,
  },
}

module.exports = nextConfig
```

## Trade-Offs

- **Enable** if you use atomic CSS (like Tailwind) and want to optimize first-load performance for new visitors
- **Skip** if returning visitors are common and you want them to benefit from cached stylesheets

### When Inline CSS Helps

Normally, the browser must download HTML, parse it, discover CSS `<link>` tags, then request stylesheets before it can render. Inlining [eliminates this request waterfall](https://web.dev/learn/performance/optimize-resource-loading#inline_critical_css), so that styles arrive with the HTML, so the browser can render immediately.

This benefit is strongest with:

- **First-time visitors**: Since CSS files are render-blocking, inlining eliminates the initial download delay that first-time visitors experience. Returning visitors with cached stylesheets won't see this benefit.

- **Performance metrics**: By removing additional network requests for CSS files, inlining can significantly improve [First Contentful Paint (FCP)](https://web.dev/articles/fcp) and [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp).

- **Slow connections**: For users on high-latency networks, each additional request adds delay. Inlining reduces round trips, which matters most when connections are slow.

- **Atomic CSS (Tailwind)**: Utility-first frameworks generate only the classes you use, keeping CSS small. The styles for a page don't grow proportionally with page complexity—they're typically compact regardless of how much UI you build. This makes inlining practical since you get the performance benefit without significantly bloating HTML.

### When External CSS is Better

Inlined styles cannot be cached separately from HTML. Every page load re-downloads the same CSS.

This trade-off matters most with:

- **Returning visitors**: Users who visit your site repeatedly would benefit from cached external stylesheets. With inlining, they re-download styles on every visit.

- **Large CSS bundles**: External stylesheets cache independently and load efficiently on modern infrastructure. Inlined CSS arrives with every HTML response, increasing [Time to First Byte (TTFB)](https://web.dev/articles/ttfb) and preventing browsers from caching styles separately. This trade-off works for small CSS (atomic frameworks like Tailwind), but adds overhead for larger bundles (component libraries like Bootstrap or Material UI).

- **Many pages sharing styles**: External stylesheets cached on one page speed up navigation to other pages. Inlined styles provide no cross-page caching benefit.

> **Good to know**:
>
> This feature is currently experimental and has some known limitations:
>
> - CSS inlining is applied globally and cannot be configured on a per-page basis
> - Styles are duplicated during initial page load - once within `<style>` tags for SSR and once in the RSC payload
> - When navigating to statically rendered pages, styles will use `<link>` tags instead of inline CSS to avoid duplication
> - This feature is not available in development mode and only works in production builds

# isolatedDevBuild

> This feature is currently experimental and subject to change, it is not recommended for production.

The experimental `isolatedDevBuild` option separates development and production build outputs into different directories. When enabled, the development server (`next dev`) writes its output to `.next/dev` instead of `.next`, preventing conflicts when running `next dev` and `next build` concurrently.

This is especially helpful when automated tools (for example, AI agents) run `next build` to validate changes while your development server is running, ensuring the dev server is not affected by changes made by the build process.

This feature is **enabled by default** to keep development and production outputs separate and prevent conflicts.

## Configuration

To opt out of this feature, set `isolatedDevBuild` to `false` in your configuration:

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    isolatedDevBuild: false, // defaults to true
  },
}

export default nextConfig
```

```js filename="next.config.mjs" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    isolatedDevBuild: false, // defaults to true
  },
}

export default nextConfig
```

## Version History

| Version   | Changes                                        |
| --------- | ---------------------------------------------- |
| `v16.0.0` | `experimental.isolatedDevBuild` is introduced. |

# logging

## Options

### Fetching

You can configure the logging level and whether the full URL is logged to the console when running Next.js in development mode.

Currently, `logging` only applies to data fetching using the `fetch` API. It does not yet apply to other logs inside of Next.js.

```js filename="next.config.js"
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

Any `fetch` requests that are restored from the [Server Components HMR cache](/docs/app/api-reference/config/next-config-js/serverComponentsHmrCache) are not logged by default. However, this can be enabled by setting `logging.fetches.hmrRefreshes` to `true`.

```js filename="next.config.js"
module.exports = {
  logging: {
    fetches: {
      hmrRefreshes: true,
    },
  },
}
```

### Incoming Requests

By default all the incoming requests will be logged in the console during development. You can use the `incomingRequests` option to decide which requests to ignore.
Since this is only logged in development, this option doesn't affect production builds.

```js filename="next.config.js"
module.exports = {
  logging: {
    incomingRequests: {
      ignore: [/\api\/v1\/health/],
    },
  },
}
```

Or you can disable incoming request logging by setting `incomingRequests` to `false`.

```js filename="next.config.js"
module.exports = {
  logging: {
    incomingRequests: false,
  },
}
```

### Disabling Logging

In addition, you can disable the development logging by setting `logging` to `false`.

```js filename="next.config.js"
module.exports = {
  logging: false,
}
```

# mdxRs

> This feature is currently experimental and subject to change, it is not recommended for production.

For experimental use with `@next/mdx`. Compiles MDX files using the new Rust compiler.

```js filename="next.config.js"
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
}

module.exports = withMDX(nextConfig)
```

# onDemandEntries

Next.js exposes some options that give you some control over how the server will dispose or keep in memory built pages in development.

To change the defaults, open `next.config.js` and add the `onDemandEntries` config:

```js filename="next.config.js"
module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}
```

# optimizePackageImports

> This feature is currently experimental and subject to change, it is not recommended for production.

Some packages can export hundreds or thousands of modules, which can cause performance issues in development and production.

Adding a package to `experimental.optimizePackageImports` will only load the modules you are actually using, while still giving you the convenience of writing import statements with many named exports.

```js filename="next.config.js"
module.exports = {
  experimental: {
    optimizePackageImports: ['package-name'],
  },
}
```

The following libraries are optimized by default:

- `lucide-react`
- `date-fns`
- `lodash-es`
- `ramda`
- `antd`
- `react-bootstrap`
- `ahooks`
- `@ant-design/icons`
- `@headlessui/react`
- `@headlessui-float/react`
- `@heroicons/react/20/solid`
- `@heroicons/react/24/solid`
- `@heroicons/react/24/outline`
- `@visx/visx`
- `@tremor/react`
- `rxjs`
- `@mui/material`
- `@mui/icons-material`
- `recharts`
- `react-use`
- `@material-ui/core`
- `@material-ui/icons`
- `@tabler/icons-react`
- `mui-core`
- `react-icons/*`
- `effect`
- `@effect/*`
