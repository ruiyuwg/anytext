# Route Segment Config

The Route Segment Config options allow you to configure the behavior of a [Page](/docs/app/api-reference/file-conventions/page), [Layout](/docs/app/api-reference/file-conventions/layout), or [Route Handler](/docs/app/api-reference/file-conventions/route) by directly exporting the following variables:

| Option                                                                                             | Type                                                 | Default                    |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------- |
| [`dynamicParams`](/docs/app/api-reference/file-conventions/route-segment-config/dynamicParams)     | `boolean`                                            | `true`                     |
| [`runtime`](/docs/app/api-reference/file-conventions/route-segment-config/runtime)                 | `'nodejs' \| 'edge'`                                 | `'nodejs'`                 |
| [`preferredRegion`](/docs/app/api-reference/file-conventions/route-segment-config/preferredRegion) | `'auto' \| 'global' \| 'home' \| string \| string[]` | `'auto'`                   |
| [`maxDuration`](/docs/app/api-reference/file-conventions/route-segment-config/maxDuration)         | `number`                                             | Set by deployment platform |

## Version History

| Version      |                                                                                                                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `v16.0.0`    | `dynamic`, `dynamicParams`, `revalidate`, and `fetchCache` removed when [Cache Components](/docs/app/api-reference/config/next-config-js/cacheComponents) is enabled. See [Caching and Revalidating (Previous Model)](/docs/app/guides/caching-without-cache-components#route-segment-config). |
| `v16.0.0`    | `export const experimental_ppr = true` removed. A [codemod](/docs/app/guides/upgrading/codemods#remove-experimental_ppr-route-segment-config-from-app-router-pages-and-layouts) is available.                                                                                                  |
| `v15.0.0-RC` | `export const runtime = "experimental-edge"` deprecated. A [codemod](/docs/app/guides/upgrading/codemods#transform-app-router-route-segment-config-runtime-value-from-experimental-edge-to-edge) is available.                                                                                 |

- [dynamicParams](/docs/app/api-reference/file-conventions/route-segment-config/dynamicParams)
- [maxDuration](/docs/app/api-reference/file-conventions/route-segment-config/maxDuration)
- [preferredRegion](/docs/app/api-reference/file-conventions/route-segment-config/preferredRegion)
- [runtime](/docs/app/api-reference/file-conventions/route-segment-config/runtime)

# dynamicParams

# dynamicParams

The `dynamicParams` option allows you to control what happens when a dynamic segment is visited that was not generated with [generateStaticParams](/docs/app/api-reference/functions/generate-static-params).

```tsx filename="layout.tsx | page.tsx" switcher
export const dynamicParams = true // true | false
```

```js filename="layout.js | page.js | route.js" switcher
export const dynamicParams = true // true | false
```

- **`true`** (default): Dynamic route segments not included in `generateStaticParams` are generated at request time.
- **`false`**: Dynamic route segments not included in `generateStaticParams` will return a 404.

> **Good to know**:
>
> - This option replaces the `fallback: true | false | blocking` option of `getStaticPaths` in the `pages` directory.
> - `dynamicParams` is not available when [Cache Components](/docs/app/api-reference/config/next-config-js/cacheComponents) is enabled.

# maxDuration

# maxDuration

The `maxDuration` option allows you to set the maximum execution time (in seconds) for server-side logic in a route segment. Deployment platforms can use `maxDuration` from the Next.js build output to add specific execution limits.

```tsx filename="layout.tsx | page.tsx | route.ts" switcher
export const maxDuration = 5
```

```js filename="layout.js | page.js | route.js" switcher
export const maxDuration = 5
```

## Server Actions

If using [Server Actions](/docs/app/getting-started/mutating-data), set the `maxDuration` at the page level to change the default timeout of all Server Actions used on the page.

## Version History

| Version    | Changes                   |
| ---------- | ------------------------- |
| `v13.4.10` | `maxDuration` introduced. |

# preferredRegion

# preferredRegion

The `preferredRegion` option allows you to specify the preferred deployment region for a route segment. This value is passed to your deployment platform.

```tsx filename="layout.tsx | page.tsx | route.ts" switcher
export const preferredRegion = // string || string[]
```

```js filename="layout.js | page.js | route.js" switcher
export const preferredRegion = // string || string[]
```

- **`string`**: Deploy the route to a specific region. Available region codes are platform-specific. For example, `'iad1'`.
- **`string[]`**: Deploy the route to multiple specific regions. The route is deployed to **all** listed regions, not a single one chosen from the list. For example, `['iad1', 'sfo1']`.

> **Good to know**:
>
> - If a `preferredRegion` is not specified, it will inherit the option of the nearest parent layout. The root layout defaults to `'auto'`.
> - A child segment's value overrides the parent, values are not merged.
> - Next.js passes the region values through to the deployment platform. The exact behavior and available region codes are platform-specific. Refer to your deployment platform's documentation for supported values.

## Vercel

If deploying Next.js on Vercel, regions are only supported if `export const runtime = 'edge'` is set. The following options can be passed:

- **`'auto'`** (default): Uses the default region.
- **`'global'`**: Prefer deploying the route to all availableregions.
- **`'home'`**: Prefer deploying the route to the home region.

If an unsupported value is passed, an error will be thrown.

# runtime

# runtime

The `runtime` option allows you to select the JavaScript runtime used for rendering your route.

```tsx filename="layout.tsx | page.tsx | route.ts" switcher
export const runtime = 'nodejs'
// 'nodejs' | 'edge'
```

```js filename="layout.js | page.js | route.js" switcher
export const runtime = 'nodejs'
// 'nodejs' | 'edge'
```

- **`'nodejs'`** (default)
- **`'edge'`**

> **Good to know**:
>
> - Using `runtime: 'edge'` is **not supported** for Cache Components.
> - This option cannot be used in [Proxy](/docs/app/api-reference/file-conventions/proxy).

# Functions
