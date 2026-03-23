# Query content

The `next-sanity` library wraps `@sanity/client` with helpers designed specifically for Next.js. Use it to write typed GROQ queries, fetch content in both App Router and Pages Router, and enable live content updates. It bundles:

- GROQ helpers that make TypeGen setup easier.
- Live content and visual editing tooling for fetching fresh content from different perspectives.

## Writing and typing GROQ queries

### `defineQuery`

Use `defineQuery` to write GROQ queries with TypeGen support and syntax highlighting:

**src/sanity/lib/queries.ts**

```typescript
// src/sanity/lib/queries.ts

import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)][0...12]{
    _id, title, slug
  }`
)

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    title, body, mainImage
  }`
)
```

`defineQuery` enables two things:

- **Automatic type inference**: when you pass a `defineQuery` result to `client.fetch`, TypeScript infers the return type from the query. No manual type annotations needed.
- **Syntax highlighting**: with the [Sanity VS Code extension](https://marketplace.visualstudio.com/items?itemName=sanity-io.vscode-sanity) installed, GROQ inside `defineQuery` gets full syntax highlighting.

`next-sanity` also exports a `groq` template tag for backward compatibility, but `defineQuery` is recommended for new projects.

### TypeGen setup

[Sanity TypeGen](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen) generates TypeScript types for your schema and GROQ query results. If you used `sanity init` with an embedded Studio, TypeGen is ready to use. For manual setup, see the [TypeGen documentation](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen).

## Fetching content

### Choosing a fetch method

**Recommended: defineLive's sanityFetch.** If you're using the Live Content API (most apps should), import `sanityFetch` from your `live.ts` file. This function handles caching, revalidation, and live updates automatically. See the [Visual Editing](https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router) or [Live Content guide](https://www.sanity.io/docs/developer-guides/live-content-guide).

**Alternative: manual sanityFetch helper.** For apps that don't use the Live Content API, you build a wrapper around `client.fetch` with explicit caching options. See [Caching and revalidation](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs).

**Basic: client.fetch directly.** Works for simple cases but gives you no caching control beyond Next.js defaults. See the [next-sanity client configuration](https://www.sanity.io/docs/nextjs/configure-sanity-client-nextjs) for additional settings.

### App Router

The following example uses `client.fetch` directly in a Server Component. This works for prototyping, but for production you should use one of the `sanityFetch` approaches described above:

**src/app/page.tsx**

```typescript
// src/app/page.tsx

import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export default async function PostIndex() {
  const posts = await client.fetch(POSTS_QUERY)

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

For production, replace `client.fetch` with one of the `sanityFetch` approaches described above.

### Pages Router

Use `getStaticProps` to fetch data at build time. This example includes `revalidate: 60` to enable ISR, refreshing the data every 60 seconds:

**src/pages/index.tsx**

```typescript
// src/pages/index.tsx

import type { InferGetStaticPropsType } from 'next'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export async function getStaticProps() {
  const posts = await client.fetch(POSTS_QUERY)
  return { props: { posts }, revalidate: 60 }
}

export default function PostIndex({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

> \[!NOTE]
> The Live Content API (`defineLive`, `SanityLive`) is App Router only. Pages Router apps can use `client.fetch` directly with ISR (`revalidate` in `getStaticProps`) for cache management.
