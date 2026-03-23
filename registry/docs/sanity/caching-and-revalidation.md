# Caching and revalidation

If you're using `defineLive` from `next-sanity/live`, you probably don't need this article. `defineLive` handles caching, revalidation, and real-time updates automatically. [It's the recommended approach for most applications](https://www.sanity.io/docs/developer-guides/live-content-guide).

This article is for apps that need fine-grained control over caching, are building mostly-static sites, or don't use the Live Content API. It covers how to implement manual caching strategies with Sanity and Next.js.

> \[!WARNING]
> Two functions named sanityFetch
> `defineLive` exports a `sanityFetch` that manages caching automatically. The manual `sanityFetch` helper described in this article is a different function with a different signature. Don't use both in the same project.

## Two caching layers

When your content lives in Sanity and your frontend runs on Next.js, there are two independent caching layers to reason about:

**Layer 1: the Sanity CDN.** When your client is configured with `useCdn: true`, API responses are cached at the edge. This is fast but introduces a short delay before new content is available. You control this with the `useCdn` option on your [Sanity client configuration](https://www.sanity.io/docs/nextjs/configure-sanity-client-nextjs).

**Layer 2: the Next.js data cache.** Next.js caches the results of `fetch` calls on the server. You control this with `revalidate` (time-based) and `tags` (on-demand) options passed to `fetch`. This cache persists across requests and, on some hosts like Vercel, survives redeployments.

These layers are independent. A page can show stale content because of either cache, or both. Understanding this prevents debugging headaches.

For a deeper look at how Next.js caching works, see the Next.js caching documentation.

## Choose your strategy

##### Caching strategies

| Strategy | Freshness | Complexity | Best for |
| --- | --- | --- | --- |
| Time-based | Delayed (you set the interval) | Low | Content that changes infrequently |
| Tag-based | On-demand (webhook/function-triggered) | Medium | Changes that affect many pages (authors, categories) |
| Path-based | On-demand (webhook/function-triggered) | Medium | Known URL-to-document mappings |

> \[!WARNING]
> Tags and time-based revalidation are mutually exclusive
> The `sanityFetch` helper below disables time-based revalidation when you supply tags. If you pass `tags`, the cache lives indefinitely until a webhook busts it. If you pass `revalidate`, the cache expires on a timer. Pick one strategy per query. This is by design.

## The sanityFetch helper

This wrapper around `client.fetch` sets Next.js caching options for every query:

**src/sanity/lib/client.ts**

```typescript
// src/sanity/lib/client.ts

import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  })
}
```

How the helper works:

- **Default behavior:** every query is cached for 60 seconds (`revalidate: 60`), then Next.js fetches fresh data on the next request.
- **With tags:** time-based revalidation is disabled (`revalidate` is set to `false`). The cache lives indefinitely until you call `revalidateTag()` from a webhook handler.
- **With revalidate: false:** the cache lives indefinitely. Use this with tag-based or path-based revalidation. This is the preferred setting for static sites that want to handle revalidation manually.

> \[!NOTE]
> `revalidate: 0` vs `revalidate: false`: these are different in Next.js. `0` means "revalidate on every request" (effectively no caching). `false` means "cache indefinitely until manually invalidated." Choose deliberately. See the Next.js fetch API reference for details.

## Time-based revalidation

Time-based revalidation is the simplest strategy. Set a `revalidate` interval and Next.js handles the rest.

**src/app/page.tsx**

```typescript
import { sanityFetch } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const POSTS_QUERY = defineQuery(`*[_type == "post"] | order(publishedAt desc)`)

export default async function PostIndex() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
    revalidate: 3600, // revalidate at most once per hour
  })

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={`/posts/${post?.slug.current}`}>{post?.title}</a>
        </li>
      ))}
    </ul>
  )
}
```

Guidelines for choosing a revalidate value:

##### Revalidation intervals

| Value | Behavior | Use when |
| --- | --- | --- |
| 30–60 | Revalidate every 30–60 seconds | Content changes frequently (news, live scores) |
| 3600 | Revalidate once per hour | Content changes a few times per day |
| 86400 | Revalidate once per day | Content rarely changes (about pages, legal text) |
| false | Never revalidate automatically | You're using tag-based or path-based revalidation |

Time-based revalidation works well for most applications. If you need faster updates for specific content, combine it with path-based revalidation for those routes.

## Tag-based revalidation

Tag-based revalidation gives you fine-grained control. Instead of revalidating on a timer, you tag queries and invalidate specific tags when content changes.

### Tagging queries

Pass a `tags` array to `sanityFetch`:

```typescript
const posts = await sanityFetch({
  query: POSTS_QUERY,
  tags: ['post'],
})

const authors = await sanityFetch({
  query: AUTHORS_QUERY,
  tags: ['author'],
})

// This query depends on both types
const postsWithAuthors = await sanityFetch({
  query: POSTS_WITH_AUTHORS_QUERY,
  tags: ['post', 'author'],
})
```

When you tag a query, Next.js associates the cached response with those tags. Calling `revalidateTag('post')` invalidates all cached queries tagged with `'post'`, including `postsWithAuthors` above.

### Busting tags with webhooks

To trigger `revalidateTag()` when content changes in Sanity, set up a webhook handler or Sanity Function. See [Validating Sanity webhooks in Next.js](https://www.sanity.io/docs/nextjs/validating-sanity-webhooks-nextjs) for the complete implementation.

The short version: create an API route that receives webhook payloads from Sanity, validates the signature, and calls `revalidateTag(body._type)`.

## Path-based revalidation

Path-based revalidation lets you revalidate specific routes by URL path. Use it when you have a clear mapping between documents and routes.

When a Sanity document changes, a webhook or function sends the affected path to your Next.js API route, which calls `revalidatePath()`:

```typescript
// In your webhook handler:
revalidatePath('/posts/my-post')
```

This evicts the cached page at `/posts/my-post`. The next visitor gets a freshly rendered page.

To revalidate all routes at once:

```typescript
revalidatePath('/', 'layout')
```

This is a blunt instrument but useful as a fallback or for global content changes (site settings, navigation).

See [Validating Sanity webhooks in Next.js](https://www.sanity.io/docs/nextjs/validating-sanity-webhooks-nextjs) for the complete API route implementation, including GROQ projections that dynamically generate paths from document data.

## Debugging

When cached content isn't updating as expected, enable fetch logging in your Next.js configuration:

**next.config.ts**

```typescript
// next.config.ts

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
```

This logs every `fetch` call with the full URL, whether the response was a cache HIT or MISS, and the `revalidate` and `tags` values applied. Look for:

- **Unexpected HITs:** the cache isn't being invalidated when you expect. Check that your webhook is firing and that tags match.
- **All MISSes:** nothing is being cached. Check that `revalidate` isn't set to `0` and that you're not accidentally passing conflicting cache options.
- **Stale data after webhook fires:** the Sanity CDN may still be serving old data. Pass `true` as the third argument to `parseBody` in your webhook handler to add a propagation delay. See [Validating Sanity webhooks in Next.js](https://www.sanity.io/docs/nextjs/validating-sanity-webhooks-nextjs) for details.

## Comparison with defineLive

##### Manual caching vs defineLive

|  | Manual caching (this article) | defineLive |
| --- | --- | --- |
| Freshness | Configurable (seconds to indefinite) | Real-time |
| Setup | sanityFetch helper + webhook/function handlers | defineLive + SanityLive component |
| Complexity | Medium (you manage caching strategy) | Low (automatic) |
| Visual Editing | Requires separate setup | Built-in support |
| Best for | Static sites, fine-grained control | Most applications |

If you started with manual caching and want to upgrade to real-time updates, see the [Live Content guide](https://www.sanity.io/docs/developer-guides/live-content-guide).

## Related resources

- [Configuring the Sanity client for Next.js](https://www.sanity.io/docs/nextjs/configure-sanity-client-nextjs): base client setup and useCdn guidance.
- [Validating Sanity webhooks in Next.js](https://www.sanity.io/docs/nextjs/validating-sanity-webhooks-nextjs): webhook handler implementation for on-demand revalidation.
- [Live Content guide](https://www.sanity.io/docs/developer-guides/live-content-guide): automatic caching and real-time updates with defineLive
- [Next.js caching documentation](https://nextjs.org/docs/app/guides/caching): how the Next.js data cache works
