## Behavior

### Default Fields

There are two default `meta` tags that are always added even if a route doesn't define metadata:

- The [meta charset tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta#attr-charset) sets the character encoding for the website.
- The [meta viewport tag](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag) sets the viewport width and scale for the website to adjust for different devices.

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

> **Good to know**: You can overwrite the default [`viewport`](/docs/app/api-reference/functions/generate-metadata#viewport) meta tag.

### Streaming metadata

Streaming metadata allows Next.js to render and send the initial UI to the browser, without waiting for `generateMetadata` to complete.

When `generateMetadata` resolves, the resulting metadata tags are appended to the `<body>` tag. We have verified that metadata is interpreted correctly by bots that execute JavaScript and inspect the full DOM (e.g. `Googlebot`).

For **HTML-limited bots** that can’t execute JavaScript (e.g. `facebookexternalhit`), metadata continues to block page rendering. The resulting metadata will be available in the `<head>` tag.

Next.js automatically detects **HTML-limited bots** by looking at the User Agent header. You can use the [`htmlLimitedBots`](/docs/app/api-reference/config/next-config-js/htmlLimitedBots) option in your Next.js config file to override the default [User Agent list](https://github.com/vercel/next.js/blob/canary/packages/next/src/shared/lib/router/utils/html-bots.ts).

To fully disable streaming metadata:

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const config: NextConfig = {
  htmlLimitedBots: /.*/,
}

export default config
```

```js filename="next.config.js" switcher
module.exports = {
  htmlLimitedBots: /.*/,
}
```

Streaming metadata improves perceived performance by reducing [TTFB](https://developer.mozilla.org/docs/Glossary/Time_to_first_byte) and can help lowering [LCP](https://developer.mozilla.org/docs/Glossary/Largest_contentful_paint) time.

Overriding `htmlLimitedBots` could lead to longer response times. Streaming metadata is an advanced feature, and the default should be sufficient for most cases.

### With Cache Components

When [Cache Components](/docs/app/getting-started/cache-components) is enabled, `generateMetadata` follows the same rules as other components. If metadata accesses runtime data (`cookies()`, `headers()`, `params`, `searchParams`) or performs uncached data fetching, it defers to request time.

How Next.js handles this depends on the rest of your page:

- **If other parts also defer to request time**: Prerendering generates a static shell, and metadata streams in with other deferred content.
- **If the page or layout is otherwise fully prerenderable**: Next.js requires an explicit choice: cache the data if possible, or signal that deferred rendering is intentional.

Streaming metadata at runtime while the rest of the page is fully prerenderable is not common. To ensure this behavior is intentional, an error is raised indicating which page or layout needs to be handled.

To resolve this, you have two options. If metadata depends on external data but not runtime data, use `use cache`:

```tsx filename="app/page.tsx" highlight={2}
export async function generateMetadata() {
  'use cache'
  const { title, description } = await db.query('site-metadata')
  return { title, description }
}
```

If metadata genuinely requires runtime data, add a dynamic marker component to your page:

```tsx filename="app/page.tsx" highlight={11-14,19,31}
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import { connection } from 'next/server'

export async function generateMetadata() {
  const token = (await cookies()).get('token')?.value
  // ... use token to fetch personalized metadata
  return { title: 'Personalized Title' }
}

const Connection = async () => {
  await connection()
  return null
}

async function DynamicMarker() {
  return (
    <Suspense>
      <Connection />
    </Suspense>
  )
}

export default function Page() {
  // DO NOT place await connection() here
  // doing so prevents the article tag content from
  // being included in the static shell
  return (
    <>
      <article>Static content</article>
      <DynamicMarker />
    </>
  )
}
```

The `DynamicMarker` component renders nothing but tells Next.js the page has intentional dynamic content. By wrapping it in Suspense, the static content still prerenders normally.

### Ordering

Metadata is evaluated in order, starting from the root segment down to the segment closest to the final `page.js` segment. For example:

1. `app/layout.tsx` (Root Layout)
2. `app/blog/layout.tsx` (Nested Blog Layout)
3. `app/blog/[slug]/page.tsx` (Blog Page)

### Merging

Following the [evaluation order](#ordering), Metadata objects exported from multiple segments in the same route are **shallowly** merged together to form the final metadata output of a route. Duplicate keys are **replaced** based on their ordering.

This means metadata with nested fields such as [`openGraph`](/docs/app/api-reference/functions/generate-metadata#opengraph) and [`robots`](/docs/app/api-reference/functions/generate-metadata#robots) that are defined in an earlier segment are **overwritten** by the last segment to define them.

#### Overwriting fields

```jsx filename="app/layout.js"
export const metadata = {
  title: 'Acme',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
}
```

```jsx filename="app/blog/page.js"
export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
  },
}

// Output:
// <title>Blog</title>
// <meta property="og:title" content="Blog" />
```

In the example above:

- `title` from `app/layout.js` is **replaced** by `title` in `app/blog/page.js`.
- All `openGraph` fields from `app/layout.js` are **replaced** in `app/blog/page.js` because `app/blog/page.js` sets `openGraph` metadata. Note the absence of `openGraph.description`.

If you'd like to share some nested fields between segments while overwriting others, you can pull them out into a separate variable:

```jsx filename="app/shared-metadata.js"
export const openGraphImage = { images: ['http://...'] }
```

```jsx filename="app/page.js"
import { openGraphImage } from './shared-metadata'

export const metadata = {
  openGraph: {
    ...openGraphImage,
    title: 'Home',
  },
}
```

```jsx filename="app/about/page.js"
import { openGraphImage } from '../shared-metadata'

export const metadata = {
  openGraph: {
    ...openGraphImage,
    title: 'About',
  },
}
```

In the example above, the OG image is shared between `app/layout.js` and `app/about/page.js` while the titles are different.

#### Inheriting fields

```jsx filename="app/layout.js"
export const metadata = {
  title: 'Acme',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
}
```

```jsx filename="app/about/page.js"
export const metadata = {
  title: 'About',
}

// Output:
// <title>About</title>
// <meta property="og:title" content="Acme" />
// <meta property="og:description" content="Acme is a..." />
```

**Notes**

- `title` from `app/layout.js` is **replaced** by `title` in `app/about/page.js`.
- All `openGraph` fields from `app/layout.js` are **inherited** in `app/about/page.js` because `app/about/page.js` doesn't set `openGraph` metadata.

## Version History

| Version   | Changes                                                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `v15.2.0` | Introduced streaming support to `generateMetadata`.                                                                                                     |
| `v13.2.0` | `viewport`, `themeColor`, and `colorScheme` deprecated in favor of the [`viewport` configuration](/docs/app/api-reference/functions/generate-viewport). |
| `v13.2.0` | `metadata` and `generateMetadata` introduced.                                                                                                           |

## Next Steps

View all the Metadata API options.

- [Metadata Files](/docs/app/api-reference/file-conventions/metadata)
  - API documentation for the metadata file conventions.
- [generateViewport](/docs/app/api-reference/functions/generate-viewport)
  - API Reference for the generateViewport function.
- [Cache Components](/docs/app/getting-started/cache-components)
  - Learn how to use Cache Components and combine the benefits of static and dynamic rendering.
- [cacheComponents](/docs/app/api-reference/config/next-config-js/cacheComponents)
  - Learn how to enable the cacheComponents flag in Next.js.

# generateSitemaps
