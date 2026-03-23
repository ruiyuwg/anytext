# Listening to content updates

Whether you are building a live dashboard, a preview environment for editors, or a site that stays current without manual redeployment, the Sanity JavaScript client gives you two approaches for keeping content in sync: the Live Content API and query listeners.

[The Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) is the recommended approach for most applications. It scales well, works with CDN caching, and is designed for production use. [Query listeners](https://www.sanity.io/docs/content-lake/realtime-updates) provide a lower-level event stream that includes mutation details and previous document revisions.

## Prerequisites

This guide assumes you have already installed and configured `@sanity/client`. See [Getting started with @sanity/client](https://www.sanity.io/docs/js-client-getting-started) for setup instructions.

## Real-time updates with the Live Content API

The Live Content API uses a tag-based system to notify your application when relevant content changes. Instead of streaming full documents on every mutation, it sends lightweight sync tag events. Your application stores these tags and uses them to determine when to refetch data.

This approach works well with CDN caching and scales to high traffic volumes. If you are building a website or application that displays content to end users, use the Live Content API.

#### Using a framework like Next.js?

The next-sanity library offers a turnkey integration with the Live Content API that handles sync tags, revalidation, and draft mode automatically.
[Live Content API overview](https://www.sanity.io/docs/content-lake/live-content-api)

### How it works

The Live Content API follows a three-step pattern:

1. Fetch content with `client.fetch()` and store the sync tags returned in the response.
2. Subscribe to live events using `client.live.events()`.
3. When an event arrives whose tags match your stored tags, refetch the content to get the latest version.

The following example demonstrates this pattern. It fetches a single document, stores the sync tags, and refetches whenever a matching live event arrives.

```typescript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  apiVersion: '2026-03-01',
  useCdn: true,
})

const query = '*[_type == "post" && slug.current == $slug][0]'
const params = {slug: 'hello-world'}

// Store sync tags from the initial fetch
let syncTags: string[] = []

async function render(lastLiveEventId?: string) {
  const response = await client.fetch(query, params, {
    // Required: returns the full response object including syncTags
    filterResponse: false,
    lastLiveEventId,
  })

  syncTags = response.syncTags
  const data = response.result
  console.log(data)
}

// Initial fetch
render()

// Subscribe to live events
const subscription = client.live.events().subscribe({
  next: (event) => {
    if (
      event.type === 'message' &&
      event.tags.some((tag) => syncTags.includes(tag))
    ) {
      // A matching tag means our content changed, so refetch
      render(event.id)
    }

    if (event.type === 'restart') {
      // Restart events mean we should refetch without an event ID
      render()
    }
  },
  error: (err) => {
    console.error('Live event stream error:', err)
  },
})

// Unsubscribe when no longer needed
// subscription.unsubscribe()
```

Setting `filterResponse: false` is essential. Without it, `fetch()` returns only the query result and you will not receive the `syncTags` needed to connect your fetched content to the live event stream.

### Event types

The `client.live.events()` method returns an Observable that emits the following event types:

- `message`: Carries sync tags that you compare against your stored tags. If any match, your content has changed.
- `restart`: The event stream has reset. Refetch all content without passing a `lastLiveEventId`.
- `welcome`: Connection established successfully.
- `reconnect`: The client reconnected after a temporary disconnection.
- `goaway`: The connection was rejected, for example because connection limits were reached. Consider falling back to polling.

### Listening for draft changes

To receive live updates for draft content, pass `includeDrafts: true` to the `events()` method. The client must be configured with an authentication token that has at minimum a viewer role.

```typescript
const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  apiVersion: '2026-03-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const subscription = client.live
  .events({includeDrafts: true})
  .subscribe((event) => {
    if (event.type === 'message') {
      // Check tags and refetch as needed
    }
  })
```

## Listening to queries with client.listen()

The `listen()` method opens a server-sent event (SSE) stream that notifies your application whenever documents matching a GROQ query are created, updated, or deleted. Unlike the Live Content API, listeners give you direct access to the mutation data and the affected document, making them useful for backend workflows and editorial tools.

For frontend applications serving content to end users, the Live Content API is a better fit. It handles CDN caching efficiently and scales to high connection counts. Use `client.listen()` when you need mutation-level detail or are building server-side processes that react to content changes.

```typescript
const query = '*[_type == "comment" && authorId != $ownerId]'
const params = {ownerId: 'bikeOwnerUserId'}

const subscription = client.listen(query, params).subscribe((update) => {
  const comment = update.result
  console.log(`${comment.author} commented: ${comment.text}`)
})

// Unsubscribe when no longer needed
subscription.unsubscribe()
```

The `listen()` method returns an Observable. Call `.subscribe()` to start receiving events, and `.unsubscribe()` to stop. By default, each event includes a `result` property with the document after the mutation is applied. For delete mutations, `result` is not present.

### Understanding listener events

Each event includes a `transition` field that tells you what happened:

- `appear`: A document now matches the query, either because it was created or updated to match.
- `update`: An already-matching document was modified.
- `disappear`: A document no longer matches, either because it was deleted or modified to fall out of scope.

```typescript
client.listen('*[_type == "post"]').subscribe((update) => {
  switch (update.transition) {
    case 'appear':
      console.log('New post:', update.result)
      break

    case 'update':
      console.log('Post updated:', update.result)
      break

    case 'disappear':
      console.log('Post removed:', update.documentId)
      break
  }
})
```

### Listener options

The third argument to `listen()` accepts several options that control what data each event includes.

```typescript
const subscription = client.listen(
  '*[_type == "post"]',
  {},
  {
    // Include the document before the mutation was applied
    includePreviousRevision: true,

    // Include the raw mutations that caused the change
    includeMutations: true,

    // Set to false to omit the result document (saves bandwidth)
    includeResult: true,

    // Control visibility: 'query' (default), 'sync', or 'async'
    visibility: 'query',

    // Filter which event types to receive
    events: ['welcome', 'mutation', 'reconnect'],

    // Tag for request logs
    tag: 'post-listener',
  }
).subscribe((update) => {
  if (update.previous) {
    console.log('Before:', update.previous.title)
    console.log('After:', update.result.title)
  }
})
```

Setting `includeResult: false` reduces bandwidth when you only need to know that a change occurred. Combining `includePreviousRevision: true` with `includeMutations: true` gives you a complete before-and-after picture along with the specific operations that were applied.

## Choosing between the Live Content API and listeners

Use the Live Content API when you are building a website or application that displays content to users. It works with the CDN, scales efficiently, and integrates with framework-specific libraries like next-sanity. If you need the content on screen to update when an editor publishes, this is the right choice.

Use `client.listen()` when you need detailed mutation data, previous document revisions, or are building server-side automation such as triggering external systems on content changes. Listeners give you fine-grained control over the event stream at the cost of managing more complexity yourself.

## Common issues

**Sync tags are undefined or empty.** Make sure you pass `filterResponse: false` to `client.fetch()`. Without this option, the response only contains the query result and the sync tags are not included.

**Live events are not arriving.** Verify that your API version is `2021-03-25` or later and that your frontend domain is listed in the project's CORS origins at [sanity.io/manage](https://www.sanity.io/manage).

**Listener does not return draft documents.** Draft documents are only visible to authenticated clients. Pass a token when creating the client and set `useCdn: false`.

**Receiving a goaway event.** This means the live connection was closed, usually because connection limits were reached. Implement a polling fallback: periodically call `client.fetch()` on a timer instead of relying on the event stream.

## Next steps

- Read the [Live Content API overview](https://www.sanity.io/docs/content-lake/live-content-api) to understand how sync tags, caching, and usage limits work together.
- Follow the [live content guide](https://www.sanity.io/docs/developer-guides/live-content-guide) for framework-specific setup, including Next.js with next-sanity.
- Explore the [Live Content API reference](https://www.sanity.io/docs/archive/live-api-reference) for the full HTTP API details and event stream specification.
- Browse the [live content examples on GitHub](https://github.com/sanity-io/client#live-content) for custom integration patterns beyond Next.js.

# Request tags for filtering logs

Request tags help you identify and filter API requests in your project's request logs. This is valuable for debugging, monitoring performance, and understanding how your application uses the API.

You can set tags at the client level or per request:

**example.ts**

```typescript
import {createClient} from '@sanity/client'

// Set default tag on client
const client = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  apiVersion: '2026-03-01',
  requestTagPrefix: 'myapp', // Prefix for all requests
})

// Tag individual queries
const posts = await client.fetch(
  '*[_type == "post"]',
  {},
  {tag: 'homepage-posts'}
)
// Request appears in logs as: myapp.homepage-posts

// Tag getDocument requests
const post = await client.getDocument('post-123', {
  tag: 'post-detail'
})

// Tag listeners
const subscription = client.listen(
  '*[_type == "post"]',
  {},
  {tag: 'realtime-posts'}
).subscribe(update => {
  // ...
})
```

Tags appear in your project's API request logs in the Sanity management console, where you can filter and analyze request patterns, identify slow queries, and debug issues.
