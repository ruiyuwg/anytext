# Get started

The @sanity/client library is the official JavaScript client for interacting with Sanity's APIs. It provides a type-safe way to query and mutate your content from any JavaScript environment, including browsers, Node.js, Deno, Bun, and edge runtimes.

With @sanity/client, you can:

- [Query content](https://www.sanity.io/docs/apis-and-sdks/js-client-querying) using GROQ to fetch exactly the data you need.
- [Mutate documents](https://www.sanity.io/docs/apis-and-sdks/js-client-mutations) by creating, updating, patching, and deleting content programmatically.
- [Upload assets](https://www.sanity.io/docs/apis-and-sdks/js-client-assets) like images and files to your Sanity project.
- [Listen to real-time updates](https://www.sanity.io/docs/apis-and-sdks/js-client-realtime) and react to changes in your content as they happen.

## Requirements

To use the client, you need:

- A JavaScript runtime: Node.js 18+, modern browsers, Bun, Deno, or edge runtimes.
- A Sanity project with a project ID and dataset name.
- An API token (optional, required only for authenticated requests like mutations or accessing private datasets).

> \[!TIP]
> If you want to use the client library with a framework, we have optimized versions for [Next.js](https://github.com/sanity-io/next-sanity), [Astro](https://github.com/sanity-io/sanity-astro), or [SvelteKit](https://github.com/sanity-io/sanity-sveltekit).

## Installation

Install `@sanity/client` using your preferred package manager:

**CLI**

```sh
npm install @sanity/client
```

## Basic client setup

Create a client instance using the `createClient()` function with your project configuration:

**sanity.ts**

```typescript
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})
```

## Query with the client

Retrieving your content from Content Lake is often done with `client.fetch`.

**sanity.ts**

```typescript
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

const QUERY = `*[_type == "post"]`

try {
  const posts = await client.fetch(QUERY)
  console.log(posts)
} catch (error) {
  console.error('Query failed:', error.message)
}
```

You can learn more about fetching content in our [querying content guide](https://www.sanity.io/docs/apis-and-sdks/js-client-querying).

## Common configuration options

The client accepts several configuration options to customize its behavior. Here are the most commonly used options:

#### Properties

| Property | Description |
| --- | --- |
| projectId \* | Your Sanity project ID. You can find this at sanity.io/manage. |
| dataset \* | The dataset name. Common values are production, staging, or development. |
| useCdn | When set to true, queries use Sanity’s global CDN for faster response times and lower latency. Set to false when you need the freshest data or are performing mutations. Default is true. |
| apiVersion \* | Specifies which version of the Sanity API to use. Set to a YYYY-MM-DD format. This ensures your application continues to work as expected when the API evolves. Learn more about API versions. |
| token | An authentication token for accessing private datasets or performing mutations. You can create tokens in your project settings. |

Additional configuration options can be found in the [client reference documentation](https://reference.sanity.io/_sanity/client/index/ClientConfig/).

## Build on configuration with `withConfig`

You can extend the functionality of an existing client and change some values as needed with `withConfig`.

**sanity.ts**

```typescript
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: false, // set to false when used with token
  apiVersion: '2026-03-01',
  token: 'your-auth-token'
})

const draftClient = client.withConfig({
  perspective: 'drafts'
})

```

## Use within Studio

You can use the client within Studio components by importing [useClient](https://reference.sanity.io/sanity/index/useClient/). It comes pre-configured with settings passed down from the containing Studio components. Note that this method requires that you set an API version.

```typescript
import {useClient} from 'sanity'

const client = useClient({
  apiVersion: '2026-03-01'
})
```

## Environment-specific examples

The `@sanity/client` library works across different JavaScript environments. Here are examples for common setups:

**ESM (ES Modules)**

```javascript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

// Query for documents
const posts = await client.fetch('*[_type == "post"]')
console.log(posts)
```

**CommonJS**

```javascript
const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

// Query for documents
client.fetch('*[_type == "post"]').then((posts) => {
  console.log(posts)
})
```

**TypeScript**

```typescript
import {createClient, type SanityClient} from '@sanity/client'

interface Post {
  _id: string
  _type: 'post'
  title: string
  slug: {current: string}
}

const client: SanityClient = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

// Query with type safety
const posts = await client.fetch<Post[]>('*[_type == "post"]')
console.log(posts)
```

**Next.js App Router**

```typescript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false, // Server components can use fresh data
  apiVersion: '2026-03-01',
})

export default async function Page() {
  const posts = await client.fetch('*[_type == "post"]')
  
  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  )
}
```

**Bun**

```javascript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

const posts = await client.fetch('*[_type == "post"]')
console.log(posts)
```

**Deno**

```typescript
import {createClient} from 'npm:@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

const posts = await client.fetch('*[_type == "post"]')
console.log(posts)
```

**Edge Runtime**

```javascript
import {createClient} from '@sanity/client'

export const config = {
  runtime: 'edge',
}

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

export default async function handler(request) {
  const posts = await client.fetch('*[_type == "post"]')
  return new Response(JSON.stringify(posts), {
    headers: {'content-type': 'application/json'},
  })
}
```

**Browser ESM CDN**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Sanity Client Example</title>
</head>
<body>
  <div id="posts"></div>
  
  <script type="module">
    import {createClient} from 'https://esm.sh/@sanity/client'
    
    const client = createClient({
      projectId: 'your-project-id',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2026-03-01',
    })
    
    const posts = await client.fetch('*[_type == "post"]')
    document.getElementById('posts').innerHTML = posts
      .map(post => `<h2>${post.title}</h2>`)
      .join('')
  </script>
</body>
</html>
```

**UMD**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Sanity Client UMD Example</title>
  <script src="https://unpkg.com/@sanity/client/dist/index.browser.js"></script>
</head>
<body>
  <div id="posts"></div>
  
  <script>
    var client = sanityClient.createClient({
      projectId: 'your-project-id',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2026-03-01',
    })
    
    client.fetch('*[_type == "post"]').then(function(posts) {
      document.getElementById('posts').innerHTML = posts
        .map(function(post) { return '<h2>' + post.title + '</h2>' })
        .join('')
    })
  </script>
</body>
</html>
```
