# Querying content

The Sanity client provides several ways to fetch content from your dataset: GROQ queries for flexible filtering and projections, direct document lookups by ID, and perspective controls for switching between published, draft, and release versions.

This article covers how to query with `client.fetch()`, use query parameters, control document versions with perspectives, and fetch documents by ID.

## Prerequisites

Before querying content, make sure you have `@sanity/client` installed and configured. See [Getting started with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started) for setup instructions. To query draft or version documents, you also need an API token with read access.

## Querying with client.fetch()

The `fetch()` method executes a [GROQ query](https://www.sanity.io/docs/content-lake/groq-introduction) against your dataset and returns the results. It accepts the query string as the first argument, an optional parameters object as the second, and an optional options object as the third.

**fetch-basics.js**

```typescript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  useCdn: true,
  apiVersion: '2026-03-01',
})

try {
  // Fetch all documents of a given type
  const posts = await client.fetch('*[_type == "post"]')

  // Fetch a single document by slug
  const post = await client.fetch(
    '*[_type == "post" && slug.current == $slug][0]',
    {slug: 'hello-world'}
  )

  // Fetch with a projection to select specific fields
  const authors = await client.fetch(`
    *[_type == "author"] {
      name,
      "postCount": count(*[_type == "post" && references(^._id)])
    }
  `)
} catch (error) {
  console.error('Query failed:', error.message)
}
```

Replace `<your-project-id>` with your Sanity project ID, which you can find in your project's management dashboard.

### Using query parameters

Query parameters prevent injection attacks and make queries reusable. Prefix parameters with `$` in the GROQ query and pass their values as the second argument to `fetch()`.

**query-parameters.ts**

```typescript
// String parameter
const result = await client.fetch(
  '*[_type == $type]',
  {type: 'post'}
)

// Multiple parameters with ordering and limit
const filtered = await client.fetch(
  '*[_type == $type && publishedAt > $date] | order(publishedAt desc) [0...$limit]',
  {
    type: 'post',
    date: '2024-01-01',
    limit: 10,
  }
)

// Array parameter
const categorized = await client.fetch(
  '*[_type == "post" && category->slug.current in $slugs]',
  {slugs: ['technology', 'design', 'development']}
)
```

## Controlling document versions with perspectives

Perspectives control which version of a document your query returns. This is how you switch between showing published content on your production site and showing [draft or release versions](https://www.sanity.io/docs/content-lake/documents) in preview environments. You can set a default perspective when creating the client or override it per query.

### Published perspective

The `published` perspective returns only published documents, excluding drafts and version documents. This is the default and is what you typically use for production sites.

**perspective-published.ts**

```typescript
const client = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  perspective: 'published', // default
  useCdn: true,
  apiVersion: '2026-03-01',
})

// Only published documents are returned
const posts = await client.fetch('*[_type == "post"]')

// Override perspective for a single query
const publishedPosts = await client.fetch(
  '*[_type == "post"]',
  {},
  {perspective: 'published'}
)
```

### Drafts perspective

The `drafts` perspective returns draft versions when they exist, falling back to published versions otherwise. Use this for preview environments where editors need to see their unpublished changes. It requires an API token and should not use the CDN, since drafts are not cached.

**perspective-drafts.ts**

```typescript
// Configure client for preview
const previewClient = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  perspective: 'drafts',
  useCdn: false, // Drafts are not cached on the CDN
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2026-03-01',
})

// Returns the draft if it exists, otherwise the published version
const posts = await previewClient.fetch('*[_type == "post"]')
```

### Raw perspective

The `raw` perspective returns every version of every matching document as separate entries: published, drafts, and release versions all appear in the results. This is useful when you need to compare versions or build custom editorial tooling that shows all document states at once.

**perspective-raw.ts**

```typescript
const rawClient = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  perspective: 'raw',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2026-03-01',
})

// Returns both published and draft versions as separate documents
const allVersions = await rawClient.fetch('*[_type == "post"]')
// Result may include: [{_id: 'post-123', ...}, {_id: 'drafts.post-123', ...}]
```

### Release perspectives

Beyond the built-in perspectives, you can query content as it would appear if a specific release were published. This uses a perspective stack, where release versions take priority over drafts, which take priority over published documents. See [perspectives](https://www.sanity.io/docs/content-lake/perspectives) for details on configuring perspective stacks with release IDs.

**perspective-release.ts**

```typescript
// Preview how content will look when a release is published
const releaseClient = client.withConfig({
  perspective: ['release-id', 'drafts'], // published is automatically added to the end
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const posts = await releaseClient.fetch('*[_type == "post"]')
```

## Fetching documents by ID

When you already have a document's ID, use `getDocument()` for a single document or `getDocuments()` for multiple documents in one request. These methods return the full document without needing a GROQ query.

**get-documents.ts**

```typescript
// Fetch a single document by ID
const post = await client.getDocument('post-123')
// Returns null if the document doesn't exist

// Fetch multiple documents in one request
const docs = await client.getDocuments(['post-123', 'post-456', 'author-789'])
// Returns an array in the same order as the input IDs
// Missing documents appear as null: [{ _id: 'post-123', ... }, null, { _id: 'author-789', ... }]

// Both methods accept an options object
const draft = await client.getDocument('post-123', {
  includeAllVersions: true,
  tag: 'post-detail',
})
```

Use `getDocuments()` when you have a list of known IDs to resolve, such as IDs stored in an external system. For fetching related documents within your dataset, a GROQ query with `references()` or joins is usually more efficient since it avoids multiple round trips.

## Visual editing

When visual editing is enabled, the client can enrich query responses with Content Source Maps, which are metadata that tracks where each piece of content came from. This powers click-to-edit overlays in Sanity Studio, allowing editors to select content on a preview page and jump directly to the corresponding field.

[Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps)

[Stega-encoding](https://www.sanity.io/docs/visual-editing/stega)

[Visual editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)

## Next steps

Now that you can fetch content, you may want to learn how to modify it. See [Creating mutations with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-mutations) for creating, patching, and deleting documents, or [Creating transactions with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-transactions) for atomic multi-document operations. For request tagging, cancellation, and other configuration, see [Advanced client patterns](https://www.sanity.io/docs/apis-and-sdks/js-client-advanced).
