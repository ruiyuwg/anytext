# Create content releases

Content releases let you group document changes and publish them together. The `@sanity/client` library provides helper methods on the `client.releases` namespace for managing releases, along with top-level methods for working with document versions.

These methods require an authenticated client with a write token. See [Getting started with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started) for setup instructions.

> \[!TIP]
> For a conceptual overview of how content releases work, see the [Content Releases user guide](https://www.sanity.io/docs/user-guides/content-releases). For the underlying HTTP endpoints, see the [Content Releases API](https://www.sanity.io/docs/apis-and-sdks/content-releases-api).

## Create a release

Use `client.releases.create()` to create a new release. The method returns an object containing the `releaseId`, which you use to add document versions to the release.

**create-release.ts**

```typescript
const {releaseId} = await client.releases.create({
  metadata: {
    title: 'Spring product launch',
    releaseType: 'scheduled',
  },
})

console.log('Created release:', releaseId)
```

The `releaseType` can be `scheduled`, `asap`, or `undecided`.

## Add document versions to a release

Use `client.createVersion()` to add a new or modified document to a release. You provide the `releaseId`, the published document's ID, and the document content.

**create-version.ts**

```typescript
await client.createVersion({
  releaseId,
  publishedId: 'product-123',
  document: {
    _type: 'product',
    title: 'Updated spring collection',
    price: 59.99,
  },
})
```

This creates a versioned document with the ID `versions.<releaseId>.product-123` in your dataset. The published document remains unchanged until the release is published.

## Mark a document for unpublishing

Use `client.unpublishVersion()` to mark a document for removal when the release runs. The document stays published until the release is executed.

**unpublish-version.ts**

```typescript
await client.unpublishVersion({
  releaseId,
  publishedId: 'product-456',
})
```

## Get a release and its documents

Retrieve a release's metadata with `client.releases.get()`, and list its documents with `client.releases.getDocuments()`.

**get-release.ts**

```typescript
// Get the release metadata
const release = await client.releases.get({releaseId})
console.log(release.metadata.title) // 'Spring product launch'
console.log(release.state) // 'active'

// List all documents in the release
const documents = await client.releases.getDocuments({releaseId})
console.log(`Release contains ${documents.length} documents`)
```

## Schedule a release

Schedule a release to publish at a specific time with `client.releases.schedule()`. Pass an ISO 8601 date string as the `publishAt` value.

**schedule-release.ts**

```typescript
// Schedule the release for one hour from now
const publishAt = new Date(Date.now() + 60 * 60 * 1000).toISOString()

await client.releases.schedule({
  releaseId,
  publishAt,
})

console.log(`Release scheduled for ${publishAt}`)
```

## Delete a release after publishing

After a release has been published, you can clean it up with `client.releases.delete()`. Check the release state first to confirm it has completed successfully.

**delete-release.ts**

```typescript
const release = await client.releases.get({releaseId})

if (release.state === 'published' && !release.error) {
  await client.releases.delete({releaseId})
  console.log('Release deleted')
}
```

## Full example: create and schedule a release

Here's a complete workflow that creates a release, adds document versions, and schedules it to publish:

**full-release-workflow.ts**

```typescript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: '<your-dataset>',
  apiVersion: '2026-03-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

// 1. Create a release
const {releaseId} = await client.releases.create({
  metadata: {
    title: 'Spring product launch',
    releaseType: 'scheduled',
  },
})

// 2. Add a new version of an existing product
await client.createVersion({
  releaseId,
  publishedId: 'product-123',
  document: {
    _type: 'product',
    title: 'Updated spring jacket',
    price: 89.99,
  },
})

// 3. Mark an old product for removal
await client.unpublishVersion({
  releaseId,
  publishedId: 'product-old-winter-coat',
})

// 4. Verify the release contents
const documents = await client.releases.getDocuments({releaseId})
console.log(`Release contains ${documents.length} document(s)`)

// 5. Schedule the release
await client.releases.schedule({
  releaseId,
  publishAt: '2026-04-01T09:00:00.000Z',
})

console.log('Release scheduled for April 1')
```

## Release actions with the Actions API

The helper methods shown above use the `client.action()` method under the hood. If you need more control, you can dispatch release actions directly. This lets you archive, unarchive, and unschedule releases, as well as create, discard, and replace individual document versions.

For example, to archive and then unarchive a release:

**release-actions.ts**

```typescript
// Archive a release
await client.action({
  actionType: 'sanity.action.release.archive',
  releaseId: 'spring-launch',
})

// Unarchive it later
await client.action({
  actionType: 'sanity.action.release.unarchive',
  releaseId: 'spring-launch',
})
```

You can also manage individual document versions through actions:

**version-actions.ts**

```typescript
// Create a version of a document in a release
await client.action({
  actionType: 'sanity.action.document.version.create',
  publishedId: 'product-123',
  document: {
    _id: 'versions.spring-launch.product-123',
    _type: 'product',
  },
})

// Discard a version
await client.action({
  actionType: 'sanity.action.document.version.discard',
  versionId: 'versions.spring-launch.product-123',
})

// Replace a version's contents
await client.action({
  actionType: 'sanity.action.document.version.replace',
  document: {
    _id: 'versions.spring-launch.product-123',
    _type: 'product',
    title: 'Revised spring jacket',
    price: 79.99,
  },
})
```

For the full list of available action types and their options, see [Mutate documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions).

## Next steps

- [Content Releases user guide](https://www.sanity.io/docs/user-guides/content-releases): Learn how releases work in Sanity Studio.
- [Content Releases API](https://www.sanity.io/docs/apis-and-sdks/content-releases-api): HTTP endpoint reference for the releases API.
- [Mutate documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions): Dispatch release and version actions directly through the Actions API.
- [Release Actions](https://www.sanity.io/docs/studio/release-actions): Reference for all release action types.
