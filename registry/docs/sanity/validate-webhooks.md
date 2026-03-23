# Validate webhooks

When content changes in Sanity, you can use [webhooks](https://www.sanity.io/docs/content-lake/webhooks) to revalidate cached pages in your Next.js application on demand. The `next-sanity` toolkit includes `parseBody`, a utility that validates webhook signatures and parses payloads, so you can build secure revalidation handlers with minimal code.

This guide covers two revalidation patterns:

- **Path-based revalidation**: revalidate specific routes when a document changes
- **Tag-based revalidation**: revalidate all pages that depend on a document type

Both patterns work with App Router and Pages Router API routes.

> \[!NOTE]
> **Before you start:** this guide covers the mechanism for webhook-based revalidation. If you're deciding which caching strategy to use (time-based, tag-based, or path-based), see [Caching and revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs).

## Prerequisites

- A Next.js application with [next-sanity](https://www.sanity.io/docs/nextjs/introduction) configured.
- A Sanity project with permission to create webhooks.
- A shared secret for webhook signature validation.

### Set up the shared secret

Create a `SANITY_REVALIDATE_SECRET` environment variable with a random string. This secret must match in both your Sanity webhook configuration and your Next.js application.

**.env.local**

```sh
# .env.local
SANITY_REVALIDATE_SECRET=<your-random-secret-string>
```

Add the same value to your hosting provider's environment variables (Vercel, Netlify, etc.).

## The `parseBody` utility

`parseBody` from `next-sanity/webhook` handles signature validation and payload parsing in one call:

```typescript
import { parseBody } from 'next-sanity/webhook'

const { isValidSignature, body } = await parseBody<MyPayloadType>(
  request,
  secret,
  waitForContentLakeEvent
)
```

The function accepts three arguments:

| Argument | Type | Description |
| --- | --- | --- |
| request | Request | The incoming webhook request |
| secret | string | Your SANITY\_REVALIDATE\_SECRET value |
| waitForContentLakeEvent | boolean (optional) | When true, adds a short delay before returning. This gives the Content Lake time to propagate changes, preventing your revalidation from fetching stale data. Defaults to false. |

`parseBody` returns an object with:

- `isValidSignature`: `true` if the webhook request was signed with the correct secret
- `body`: the parsed webhook payload, typed as the generic you provide

> \[!NOTE]
> Set `waitForContentLakeEvent` to `true` if your client uses `useCdn: true`. The CDN may serve stale data for a few seconds after a mutation. The delay ensures your revalidated pages fetch fresh content. See [Caching and revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs) for more on how the Sanity CDN and Next.js data cache interact.

## Path-based revalidation

Use path-based revalidation when you know which routes correspond to which documents. For example, a blog post at `/posts/my-post` maps directly to a Sanity document with `slug.current === 'my-post'`.

### Create the API route

**src/app/api/revalidate-path/route.ts**

```typescript
// src/app/api/revalidate-path/route.ts

import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = {
  path?: string
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        'Missing environment variable SANITY_REVALIDATE_SECRET',
        { status: 500 }
      )
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // wait for Content Lake propagation
    )

    if (!isValidSignature) {
      return new Response(
        JSON.stringify({ message: 'Invalid signature', isValidSignature, body }),
        { status: 401 }
      )
    }

    if (!body?.path) {
      return new Response(
        JSON.stringify({ message: 'Bad Request', body }),
        { status: 400 }
      )
    }

    revalidatePath(body.path)

    return NextResponse.json({
      message: `Revalidated path: ${body.path}`,
      body,
    })
  } catch (err: unknown) {
    console.error(err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(message, { status: 500 })
  }
}
```

### Configure the webhook projection

The webhook needs to send a `path` value that matches your Next.js routes. Use a GROQ projection with the select() function to generate paths dynamically:

```groq
{
  "path": select(
    _type == "post" => "/posts/" + slug.current,
    "/" + slug.current
  )
}
```

Extend this pattern for your own document types and route structure:

```groq
{
  "path": select(
    _type == "post" => "/posts/" + slug.current,
    _type == "author" => "/authors/" + slug.current,
    _type == "category" => "/categories/" + slug.current,
    "/" + slug.current
  )
}
```

> \[!NOTE]
> To revalidate all routes on demand, create an API route that calls `revalidatePath('/', 'layout')`. This is a blunt instrument, but useful as a fallback.

## Tag-based revalidation

Use tag-based revalidation when a single document change affects many pages. For example, updating an author's name should revalidate every post that displays it.

Tag-based revalidation has two parts:

- **Tagging queries**: when fetching data, you associate queries with tags (covered in [Caching and revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs))
- **Busting tags**: when content changes, a webhook calls `revalidateTag()` to invalidate all queries with that tag

This section covers the webhook side.

### Create the API route

**src/app/api/revalidate-tag/route.ts**

```typescript
// src/app/api/revalidate-tag/route.ts

import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = {
  _type: string
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        'Missing environment variable SANITY_REVALIDATE_SECRET',
        { status: 500 }
      )
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // wait for Content Lake propagation
    )

    if (!isValidSignature) {
      return new Response(
        JSON.stringify({ message: 'Invalid signature', isValidSignature, body }),
        { status: 401 }
      )
    }

    if (!body?._type) {
      return new Response(
        JSON.stringify({ message: 'Bad Request', body }),
        { status: 400 }
      )
    }

    revalidateTag(body._type)

    return NextResponse.json({ body })
  } catch (err: unknown) {
    console.error(err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(message, { status: 500 })
  }
}
```

### How tags connect to queries

When you fetch data using the manual `sanityFetch` helper with tags:

```typescript
const posts = await sanityFetch({
  query: POSTS_QUERY,
  tags: ['post', 'author'],
})
```

Next.js associates the cached response with both the `post` and `author` tags. When the webhook fires for a document with `_type === 'post'`, calling `revalidateTag('post')` invalidates all cached queries tagged with `'post'`.

See [Caching and revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs) for the full `sanityFetch` helper implementation and tagging patterns.

### Configure the webhook projection

For tag-based revalidation, the projection is simple. You only need the document type:

```groq
{_type}
```

## Setting up the webhook in Sanity

Configure the webhook in your Sanity project dashboard:

| Field | Path-based | Tag-based |
| --- | --- | --- |
| URL | https://your-domain.com/api/revalidate-path | https://your-domain.com/api/revalidate-tag |
| Events | Create, Update, Delete | Create, Update, Delete |
| Filter | \_type in \["post", "author"] | \_type in \["post", "author"] |
| Projection | {"path": select(...)} | {\_type} |
| Secret | Your SANITY\_REVALIDATE\_SECRET | Your SANITY\_REVALIDATE\_SECRET |
| HTTP method | POST | POST |

Adjust the filter to include the document types your application uses.

### Quick setup with webhook templates

Use these shareable templates to create pre-configured webhooks in your Sanity project:

- [Path-based revalidation webhook template](https://www.sanity.io/manage/webhooks/share?name=Path-based+Revalidation+Hook+for+Next.js\&description=1.+Replace+URL+with+the+preview+or+production+URL+for+your+revalidation+handler+in+your+Next.js+app%0A2.%C2%A0Insert%2Freplace+the+document+types+you+want+to+be+able+to+make+tags+for+in+the+Filter+array%0A3.%C2%A0Make+a+Secret+that+you+also+add+to+your+app%27s+environment+variables+%28SANITY_REVALIDATE_SECRET%29%0A%0AFor+complete+instructions%2C+see+the+README+on%3A%0Ahttps%3A%2F%2Fgithub.com%2Fsanity-io%2Fnext-sanity\&url=https%3A%2F%2FYOUR-PRODUCTION-URL.TLD%2Fapi%2Frevalidate-path\&on=create\&on=update\&on=delete\&filter=_type+in+%5B%22post%22%2C+%22home%22%2C+%22OTHER_DOCUMENT_TYPES%22%5D\&projection=%7B%0A++%22path%22%3A+select%28%0A++++_type+%3D%3D+%22post%22+%3D%3E+%22%2Fposts%2F%22+%2B+slug.current%2C%0A++++slug.current%0A++%29%0A%7D\&httpMethod=POST\&apiVersion=v2021-03-25\&includeDrafts=\&headers=%7B%7D)
- [Tag-based revalidation webhook template](https://www.sanity.io/manage/webhooks/share?name=Tag-based+Revalidation+Hook+for+Next.js+13+\&description=1.+Replace+URL+with+the+preview+or+production+URL+for+your+revalidation+handler+in+your+Next.js+app%0A2.%C2%A0Insert%2Freplace+the+document+types+you+want+to+be+able+to+make+tags+for+in+the+Filter+array%0A3.%C2%A0Make+a+Secret+that+you+also+add+to+your+app%27s+environment+variables+%28SANITY_REVALIDATE_SECRET%29%0A%0AFor+complete+instructions%2C+see+the+README+on%3A%0Ahttps%3A%2F%2Fgithub.com%2Fsanity-io%2Fnext-sanity\&url=https%3A%2F%2FYOUR-PRODUCTION-URL.TLD%2Fapi%2Frevalidate-tag\&on=create\&on=update\&on=delete\&filter=_type+in+%5B%22post%22%2C+%22home%22%2C+%22OTHER_DOCUMENT_TYPE%22%5D\&projection=%7B_type%7D\&httpMethod=POST\&apiVersion=v2021-03-25\&includeDrafts=\&headers=%7B%7D)

After importing a template, update the URL to point to your deployed application and set the secret.

## Security

Webhook endpoints are publicly accessible URLs. Follow these practices to keep them secure:

- **Always validate signatures.** Never skip the `parseBody` validation step, even in development. An unvalidated endpoint lets anyone trigger revalidation (or worse, if you add write operations later).
- **Use a strong secret.** Generate a random string of at least 32 characters. Tools like `openssl rand -base64 32` work well.
- **Keep the secret out of version control.** Use `.env.local` for local development and your hosting provider's secrets management for production.
- **Consider rate limiting.** In production, add rate limiting to your revalidation endpoints to prevent abuse. Most hosting providers offer this at the infrastructure level.

## Pages Router

Webhook revalidation works with Pages Router API routes. The Live Content API is App Router only, but webhook-based revalidation is available on both routers.

The key differences from the App Router examples above:

- API routes live in `pages/api/` instead of `src/app/api/`
- The handler receives `req` and `res` objects instead of a `Request`
- Use `res.revalidate()` instead of importing `revalidatePath` from `next/cache`

**pages/api/revalidate-path.ts**

```typescript
// pages/api/revalidate-path.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = {
  path?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return res.status(500).json({
        message: 'Missing environment variable SANITY_REVALIDATE_SECRET',
      })
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true
    )

    if (!isValidSignature) {
      return res.status(401).json({
        message: 'Invalid signature',
        isValidSignature,
        body,
      })
    }

    if (!body?.path) {
      return res.status(400).json({ message: 'Bad Request', body })
    }

    await res.revalidate(body.path)

    return res.status(200).json({
      message: `Revalidated path: ${body.path}`,
      body,
    })
  } catch (err: unknown) {
    console.error(err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return res.status(500).json({ message })
  }
}
```

> \[!NOTE]
> Pages Router doesn't support `revalidateTag`. For tag-based patterns, you'll need to map document types to paths and use `res.revalidate(path)` instead. This means tag-based revalidation in Pages Router effectively becomes path-based.

## Related resources

- [Caching and revalidation in Next.js](https://www.sanity.io/docs/nextjs/caching-and-revalidation-in-nextjs): choosing a caching strategy and implementing the sanityFetch helper.
- [GROQ-powered webhooks](https://www.sanity.io/docs/content-lake/webhooks): configuring webhooks in the Sanity dashboard.
- [GROQ Functions Reference](https://www.sanity.io/docs/specifications/groq-functions): reference for select() and other functions used in webhook projections.
- [next-sanity overview](https://www.sanity.io/docs/nextjs/introduction): what the toolkit includes and how to get started.
