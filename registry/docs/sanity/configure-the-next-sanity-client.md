# Configure the next-sanity client

The Sanity client is the foundation for all data fetching in a Next.js + Sanity application. This reference covers the base setup and explains what each feature layer adds to it. See the [Sanity and Next.js introduction](https://www.sanity.io/docs/nextjs/introduction) for installation and getting started details.

## Base configuration

The minimal client for fetching published content:

**src/sanity/lib/client.ts**

```typescript
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
```

This is enough for basic content fetching in Server Components. The sections below explain each option and how to extend this configuration.

### Environment variables

Centralize your project configuration in an `env.ts` file:

**src/sanity/env.ts**

```typescript
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-01'
```

The `NEXT_PUBLIC_` prefix makes these values available in client-side code. This is safe because project ID and dataset name are not sensitive. They're visible in any API request your frontend makes.

The `assertValue` helper fails fast with a clear error if an environment variable is missing. This catches misconfiguration at startup instead of producing cryptic errors at runtime.

Set these values in `.env.local` for local development and in your hosting provider's environment for production. See the [next-sanity overview](https://www.sanity.io/docs/nextjs/introduction) for the full installation walkthrough.

### useCdn: choosing between CDN and API

Sanity offers a CDN for read queries that caches API responses at the edge. Whether to use it depends on your fetching context:

##### useCdn decision matrix

| Scenario | useCdn | Why |
| --- | --- | --- |
| Client-side fetches (useEffect, user interactions) | true | Fast cached responses, reduces API load |
| High-traffic SSR (e.g., personalized feeds) | true | Prevents API rate limiting under load |
| Static generation (generateStaticParams) | false | Need guaranteed-fresh data at build time |
| ISR webhook handlers | false | Must bypass CDN to get the latest content |
| Preview or Draft Mode | false | Must see unpublished drafts |
| Tag-based revalidation with webhooks | false | Revalidated pages must fetch fresh data |

When in doubt, start with `useCdn: true` and switch to `false` for specific use cases using per-request overrides.

## Feature layers

The base configuration works for basic fetching. When you enable additional features, the client configuration grows. Here's what each feature adds and why.

### Visual Editing (stega overlays)

To enable click-to-edit overlays in the Presentation Tool, add the `stega` option:

**src/sanity/lib/client.ts**

```typescript
// src/sanity/lib/client.ts

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: '/studio',
  },
})
```

The `stega` option embeds invisible characters in string fields that the Presentation Tool uses to map rendered text back to its source document and field. The `studioUrl` tells the overlay where to open the editor.

> \[!WARNING]
> Never allow stega in metadata
> When generating metadata for SEO (`generateMetadata`, `generateSitemaps`), use `stega: false` or clean the data with `stegaClean()` from `@sanity/client/stega`. Invisible characters in title or meta tags will break search indexing.

See [Visual Editing with Next.js App Router](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router) for the full setup.

### Live Content API

To enable real-time content updates and automatic cache revalidation, configure `defineLive` with a token:

**src/sanity/lib/live.ts**

```typescript
// src/sanity/lib/live.ts

import { defineLive } from 'next-sanity/live'
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN
if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
```

`defineLive` takes your base client and returns a `sanityFetch` function that handles caching and revalidation automatically, plus a `<SanityLive />` component that listens for real-time updates.

The token needs Viewer role permissions to fetch draft content. The same token can be used for both `serverToken` and `browserToken`. Per the `next-sanity` implementation, the `browserToken` is only sent to the browser when Draft Mode is enabled. Draft Mode can only be initiated by the Presentation Tool or the Vercel Toolbar, so the token is not exposed to regular visitors.

See the [Live Content guide](https://www.sanity.io/docs/developer-guides/live-content-guide) or the [Visual Editing guide](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router) for the full setup including `<SanityLive />` placement and Draft Mode configuration.

### Recommended production setup (both features)

For a production application with both Visual Editing and Live Content, the complete configuration looks like this:

**src/sanity/lib/client.ts**

```typescript
// src/sanity/lib/client.ts

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: '/studio',
  },
})
```

**src/sanity/lib/live.ts**

```typescript
// src/sanity/lib/live.ts

import { defineLive } from 'next-sanity/live'
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN
if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
```

## Per-request overrides

Use `client.withConfig()` to create a client variant with different options for specific use cases:

```typescript
// Bypass CDN for static generation
const freshClient = client.withConfig({ useCdn: false })

// Add a token for authenticated server-side requests
const authClient = client.withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
})

// Disable stega for metadata generation
const metadataClient = client.withConfig({ stega: false })
```

`withConfig()` returns a new client instance. The original client is unchanged.

## Next steps

- [Query content](https://www.sanity.io/docs/nextjs/query-content-nextjs) with the `next-sanity` client.
- [Live Content guide](https://www.sanity.io/docs/developer-guides/live-content-guide): full defineLive setup with SanityLive and Draft Mode.
- [Visual Editing with Next.js](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router): complete Visual Editing setup for App router.
- [next-sanity reference documentation](https://reference.sanity.io/next-sanity/).
