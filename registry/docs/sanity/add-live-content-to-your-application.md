# Add live content to your application

The Live Content API enables you to deliver live content experiences without the complexity and infrastructure requirements traditionally found in real-time apps.

The next-sanity library offers the most seamless integration with the API. The JavaScript client offers helper utilities to get you started, but you'll need to build additional functionality.

## Next.js

Enable live content with only a few lines of code with next-sanity.

### Prerequisites:

- A new or existing Sanity project.
- Add your front end or deployment target's  to the projects [CORS origins](https://www.sanity.io/docs/content-lake/cors). This is found in the project's API section at [sanity.io/manage](https://sanity.io/manage).
- A Next.js application built with the [app router architecture](https://nextjs.org/docs/app/building-your-application/routing#the-app-router). The Live Content features in `next-sanity` do not support app built with pages router.

### Install and configure the client

You can install, setup, and configure Sanity in your existing Next.js project with `init`.

```sh
npx sanity@latest init
```

The `init` command will guide you through linking your project.

Alternatively, install the package or update it to the latest version if you have an earlier version.

```sh
npm install next-sanity@latest
```

Next, confirm that you have an existing Sanity client configured.

```typescript
// src/sanity/lib/client.ts
import { createClient } from "next-sanity";

import { dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "v2021-03-25",
  useCdn: true
});
```

### Create the live utilities

Create a live utility file and configure the `sanityFetch` helper and `SanityLive` component by passing in your local Sanity client and a token. `defineLive` requires a browser and server token in order to fetch draft content when using Draft Mode. If you aren't using visual editing or draft previews, you can omit the token.

```typescript
// src/sanity/lib/live.ts

import { defineLive } from "next-sanity/live";
// import your local configured client
import { client } from "@/sanity/lib/client";

// set your viewer token
const token = process.env.SANITY_API_READ_TOKEN
if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN")
}

// export the sanityFetch helper and the SanityLive component
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
```

> \[!NOTE]
> Tokens
> Tokens passed to defineLive need [viewer access rights](https://www.sanity.io/docs/user-guides/roles) in order to fetch draft content.
> The token for `serverToken` and `browserToken` can be the same. The `browserToken` is only used when Draft Mode is enabled and initiated by Presentation Tool or Vercel Toolbar.

### Fetch your queries

Whenever you need to query data in your Sanity dataset, import the `sanityFetch` helper and call it as you would any Sanity client by passing in a GROQ query and any query parameters.

```typescript
import { sanityFetch } from "@/sanity/lib/live"
import { POST_QUERY } from "./queries.ts"

const {data: post} = await sanityFetch({query: POST_QUERY, params: {}})
```

In this example, the `data` response is destructured to `post` and `sanityFetch` receives a GROQ query and an optional `params` object.

### Enable the SanityLive component

The final step to enable the Live Content API is adding the `SanityLive` React component. It listens for changes in your data and works with your `sanityFetch` queries to efficiently update content . Include it in application so it renders on any page that needs live content.

> \[!WARNING]
> Embedded studios
> The approach below adds the SanityLive component to the root layout. If you’re using an embedded studio—one that renders on a route in your Next.js app—you should only include SanityLive and VisualEditing components in your content layouts.
> Including SanityLive in your studio route can cause unexpected reloads.

In this example, it lives just before the closing body tag in the `RootLayout` component.

```tsx
// app/layout.tsx

import { SanityLive } from "@/sanity/lib/live"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
```

### Next steps

- For more on how to incorporate the Live Content API in your Next.js application, as well as how to set up Visual Editing and Draft Previews, check out the [next-sanity](https://github.com/sanity-io/next-sanity/blob/main/packages/next-sanity/README.md#live-content-api) readme.
- Level up with [Work-ready Next.js](https://www.sanity.io/learn/track/work-ready-next-js) on Sanity Learn.
- Dive into the [Sanity + Next.js example application](https://github.com/sanity-io/next.js/tree/canary/examples/cms-sanity).

Looking for even more ways to incorporate Sanity and Next.js? Explore the ecosystem of guides, plugins, and starter templates available on the [Exchange](https://sanity.io/exchange).

## Create your own integration

If there isn't an official library for your framework that enables live content, you need to create your own integration to use the Live Content API. We've created a collection of examples in the Live Content API Examples repository on GitHub. It's a good starting point for working with custom implementations.

[Live Content API Examples](https://github.com/sanity-io/lcapi-examples)

Below, you'll find a minimal example using the Sanity JS client.

### Prerequisites:

- A new or existing Sanity project.
- Add your front end or deployment target's  to the projects [CORS origins](https://www.sanity.io/docs/content-lake/cors). This is found in the project's API section at [sanity.io/manage](https://sanity.io/manage).

### Install and configure the client

First, install the latest version of the client.

```
npm install @sanity/client@latest
```

Configure your `@sanity/client` with your project settings and the latest API version:

```typescript
const client = createClient({ 
  projectId: "your-project-id", 
  dataset: "your-dataset", 
  apiVersion: "v2021-03-25",
  useCdn: true
})
```

### How it works

Here's a high-level overview of how the Live Content API works:

1. Every response from the content lake now includes \*sync tags. \*If you want to keep that content up to date in real time, you need to store the tags.
2. Then you can subscribe to a stream of live updates by calling the `client.live.events()` method. This will return an Observable that emits events whenever the content in the dataset changes.
3. Whenever you receive an event, you can check if any of the event tags match the sync tags from content you want to keep up to date.
4. If there is a match, you can refetch the content using the event ID as the `lastLiveEventId` argument in your `client.fetch` call. This ensures that you always get the latest version of the content from the CDN, avoiding any stale data.

### Minimal example

Here is a minimal example running in the console. It keeps a single, pre-defined, document in sync using sync tags:

```typescript
import { createClient } from "@sanity/client"

// Create the client instance
const client = createClient({ 
  projectId: "your-project-id", 
  dataset: "your-dataset", 
  apiVersion: "v2021-03-25", 
  useCdn: true
})

const query = "*[slug.current == $slug][0]"
const slug = "were-doing-it-live"

let syncTags = []

function render(lastLiveEventId?: string) {
  // Query the content lake
  client.fetch(
    query, 
    { slug }, 
    { filterResponse: false, lastLiveEventId }
  ).then(
    (res) => { 
      // 3. Store the syncTags and "render" the data 
      syncTags = res.syncTags 
      const data = res.result 
      console.log(data)
    })
}

// Kick off initial render
render()


// Subscribe to live updates
const subscription = client.live.events().subscribe(
  (event) => { 
    // Check if incoming tags match saved sync tags 
    if (event.type === "message" && event.tags.some((tag) => syncTags.includes(tag))) { 
      // Refetch with ID to get latest data
      render(event.id)
    }
    if (event.type === "restart") {
      // A restart event is sent when the `lastLiveEventId` we've been given earlier is no longer usable
      render()
    }
})

// Later, unsubscribe when no longer needed (such as on unmount)
// subscription.unsubscribe()
```

In this example:

1. We create a Sanity client instance with the necessary configuration.
2. We define a query to fetch posts and execute it, setting `filterResponse: false` to get the syncTags along with the result.
3. We store the returned syncTags and render the initial data.
4. We subscribe to live updates using `client.live.events()`.
5. Whenever an update event is received, we check if any of its tags match our stored syncTags.
6. If there's a match, we refetch the data, passing the event ID as `lastLiveEventId` to get the latest version.
7. We update the stored syncTags and re-render with the fresh data.
8. Finally, we unsubscribe from the live updates when no longer needed.

This pattern allows your application to efficiently keep its content in sync with the latest changes in your Sanity dataset. For additional examples, including listening for drafts, see the [JS client documentation](https://github.com/sanity-io/client?tab=readme-ov-file#listening-to-live-content-updates).

Learn more about the underpinnings of the Live Content API and sync tags by exploring the [Live reference docs](https://www.sanity.io/docs/http-reference/live).
