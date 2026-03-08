# Mutate documents with actions

The Actions API is the preferred way to programmatically interact with Sanity documents. It lets you dispatch multiple actions in a single transaction, in an interface that is higher-level than the Mutations API.

You can interact with the Actions API with:

- The official Sanity JavaScript client (`@sanity/client`).
- The [Actions HTTP API](https://www.sanity.io/docs/http-reference/actions).

This guide covers some common actions and workflows. For a full list of available actions and their properties, see the [Actions API reference documentation](https://www.sanity.io/docs/http-reference/actions).

Prerequisites:

- `@sanity/client` v7.13.2 or later: All examples use the Sanity client, either directly or exported through Sanity Studio or SDK (see configuration below).
- `@sanity/id-utils` v1.0 or later (optional): Many examples use this helper library to generate unique identifiers.
- Release and version actions require setting your `apiVersion` to `2025-02-19` or later.

The examples below use the official JavaScript client. When any code blocks reference `client`, this refers to a configured Sanity client. For example:

**@sanity/client**

```
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  apiVersion: '2025-12-15',
  token: '<your-token>'
})
```

**Studio**

```
import {useClient} from 'sanity' // If you're using Sanity Studio

const client = useClient({apiVersion: '2025-12-16'})
```

**SDK**

```
import {useClient} from '@sanity/sdk-react' // If you're using App SDK

const client = useClient({apiVersion: '2025-12-16'})
```

Mutating documents requires a token with permission to modify the documents. [Learn more about tokens and authenticating requests here](https://www.sanity.io/docs/content-lake/http-auth).

## Actions and transactions

The Actions API bundles one or more actions into a single transaction. Both the client’s `action` method and the HTTP API return a `transactionId` that you can use with the [History API](https://www.sanity.io/docs/http-reference/history) to identify a transaction in a document’s history.

Transactions work on an all-or-nothing system. If any one action fails in the transaction, the whole transaction will fail. [Learn more about transactions](https://www.sanity.io/docs/content-lake/transactions).

## Documents and the action workflow

When working with actions, it's helpful to understand what a Sanity [document](https://www.sanity.io/docs/content-lake/documents) *is*. Drafts, versions, and published documents are all individual documents. They're linked by a shared identifier. For example:

- Published document: `my-document-id`
- Draft document: `drafts.my-document-id`
- Version document: `versions.release-id.my-document-id`

With this in mind, actions like creating or editing a document refer to the individual document.

Actions follow the document lifecycle from Sanity Studio.

1. Create a draft or version.
2. Make edits to the document.
3. Publish the document (or release, in the case of version documents).

By dispatching multiple actions in a single transaction, you combine some or all of these steps.

> \[!NOTE]
> What are versions?
> Version documents are unique to the [Content Release](https://www.sanity.io/docs/studio/content-releases-configuration) and [Scheduled Drafts](https://www.sanity.io/docs/studio/scheduled-drafts) features. The Actions API treats both drafts and versions similarly, with the key difference being that versions need an associated Content Release. Learn more about the [different document types](https://www.sanity.io/docs/content-lake/documents).

## Document actions

### Create a new document

Creating a new document isn't the same as publishing a new document. Using the workflow described earlier, you must create a draft or version first.

The `sanity.action.document.create` action requires a `publishedId`, even though the published document doesn't exist yet. This ensures that the draft or version links up correctly with the future published document.

To create a `publishedId`, you can create one yourself or use the [@sanity/id-utils](https://github.com/sanity-io/id-utils) helper library. If you choose not to use the library, make sure your drafts and version identifiers match the [patterns described here](https://www.sanity.io/docs/content-lake/ids).

The following examples create a new draft / version based off of an automatically generated identifier.

**Draft**

```
import {createPublishedId, createDraftId} from '@sanity/id-utils'

const documentId = createPublishedId()
await client.action({
  actionType: 'sanity.action.document.create',
  publishedId: documentId,
  attributes: {
    _id: createDraftId(documentId),
    _type: 'article',
    title: 'Title of the document',
  },
  // Throws an error if the published document already exists. 
  // Set to ignore to fail silently.
  ifExists: 'fail', 
});
```

**Version**

```
import {createPublishedId, createVersionId} from '@sanity/id-utils'

const documentId = createPublishedId()
await client.action({
  actionType: 'sanity.action.document.create',
  publishedId: documentId,
  attributes: {
    _id: createVersionId('yourReleaseName', documentId),
    _type: 'article',
    title: 'Title of the document',
  },
  ifExists: 'fail',
});
```

The `attributes` key takes an object of the initial document properties. It requires at least and `_id` and `_type`, but you can supply a full document shape.

This action is only for new documents that don't have a published version. For drafts or versions of an existing document, use the `sanity.action.document.version.create` action.

### Create a draft/version document with edits

Use the `sanity.action.document.edit` action to apply a [Patch](https://www.sanity.io/docs/content-lake/http-patches) operation as part of creating a draft or version. The action copies over the published version,

**Draft**

```
import {createDraftId} from '@sanity/id-utils'

await client.action({
  actionType: 'sanity.action.document.edit',
  publishedId: documentId,
  draftId: createDraftId(documentId),
  patch: {
    set: {
      title: 'new title'
    }
  }
});
```

**Version**

```
import {createDraftId} from '@sanity/id-utils'

const {dataset} = client.config()

await client.request({
  uri: `/data/actions/${dataset}`,
  method: 'POST',
  body: {
    actions: [{
      actionType: 'sanity.action.document.edit',
      publishedId: 'published-document-id',
      versionId: createVersionId('release-id', 'published-document-id'),
      patch: {
        set: {
          title: 'new title'
        }
      }
    }],
  },
});
```

> \[!NOTE]
> At the time of publication, v7.13 of the client's `action` method does not support versions with `sanity.action.document.edit`. The included example uses the Actions API directly instead.

### Publish a draft document

Use the `sanity.action.document.publish` action to publish, or promote, a draft document into a published document.

**Publish a draft document**

```
import {createDraftId} from '@sanity/id-utils'

const documentId = 'an-existing-document-id'
await client.action({
  actionType: 'sanity.action.document.publish',
  publishedId: documentId,
  draftId: createDraftId(documentId),
});
```

This updates or creates a document with an ID of `an-existing-document-id` with the contents of the draft (`drafts.an-existing-document-id`, obscured above by the helper function). It then deletes the draft document.

> \[!NOTE]
> Where's the version example?
> You can't publish version documents. Instead, use the `sanity.action.release.publish` action to publish the release that the version is a part of.

### Unpublish a document

Use the `sanity.action.document.unpublish` action to unpublish a published document. It requires a `draftId`. If no draft exists, the action copies the contents of the published document to the draft. If a draft already exists, the contents of the published document is discarded.

**Unpublish document**

```
import {createDraftId} from '@sanity/id-utils'

const documentId = 'an-existing-document-id'
await client.action({
  actionType: 'sanity.action.document.unpublish',
  draftId: createDraftId(documentId),
  publishedId: documentId,
});
```

### Delete a published document and all drafts and versions

Use the `sanity.action.document.delete` action to delete a document and it’s versions. This action requires you to explicitly supply any draft or version identifiers. If you only want to delete the published version, use the unpublish action instead.

**Delete document**

```
import {createDraftId} from '@sanity/id-utils'

const documentId = 'an-existing-document-id'
await client.action({
  actionType: 'sanity.action.document.delete',
  publishedId: documentId,
  includeDrafts: [createDraftId(documentId)],
  // purge: true // set purge to true to delete all history for document
});
```

**Delete document (HTTP request)**

```
import {createDraftId, createVersionId} from '@sanity/id-utils'

const documentId = 'an-existing-document-id'
await client.request({
  uri: `/data/actions/${dataset}`,
  method: 'POST',
  body: {
    actions: [{
      actionType: 'sanity.action.document.delete',
      publishedId: documentId,
      includeVersions: [createDraftId(documentId), createVersionId('target-release-id', documentId)],
    }],
  },
});
```

> \[!NOTE]
> The shorthand `client.action` method on the client has not renamed `includeDrafts` yet, but you can add versionIds to the `includeDrafts` array alongside the draftId.
> Alternatively, see the HTTP example to use the raw action directly.

## Version actions

Version actions are a layer on top of document actions that allow you to mutate version and draft documents.

### Create a draft/version of an existing document

Use the `sanity.action.document.version.create` action to create a draft or version of an existing document, with the existing content intact.

These examples use the `baseId` to define the source document, and the `versionId` to define the target. For example, setting the source to a draftId and the version to a versionId will create a version document with the. contents from draft.

**Draft from published**

```
import {createDraftId} from '@sanity/id-utils'

const documentId = 'published-document-id'

await client.action({
  actionType: 'sanity.action.document.version.create',
  publishedId: documentId,
  baseId: documentId,
  versionId: createDraftId(documentId)
});
```

**Version from published**

```
import {createVersionId} from '@sanity/id-utils'

const documentId = 'published-document-id'

await client.action({
  actionType: 'sanity.action.document.version.create',
  publishedId: documentId,
  baseId: documentId,
  versionId: createVersionId(documentId)
});
```

**Version from draft**

```
import {createDraftId, createVersionId} from '@sanity/id-utils'

const documentId = 'published-document-id'

await client.action({
  actionType: 'sanity.action.document.version.create',
  publishedId: documentId,
  baseId: createDraftId(documentId),
  versionId: createVersionId(documentId)
});
```

If you prefer to make edits to the document as part of creating a version or draft, you may prefer the `sanity.action.document.edit` action.

### Discard a version or draft document

Use the `sanity.action.document.version.discard` action to discard a version or draft document. This works like discarding a draft or version in the Sanity Studio interface. If used with the `purge` option, editing history for that draft/version will be removed.

**Discard a version or draft**

```
import {createVersionId} from '@sanity/id-utils'

const documentId = 'document-id'
await client.action({
  actionType: 'sanity.action.document.version.discard',
  versionId: createVersionId('rRU0cStZz', documentId),
  // purge: true, // optionally pass to delete history
});
```

### Replace a version document

Use the `sanity.action.document.version.replace` action to replace an existing version or draft. This action accepts a `document` with at least an `_id` and `_type`. It replaces the draft or version matching the `_id` completely, so any missing properties will be left undefined in the document.

The following example replaces a version, but providing a draft-style ID (with a `draft.` prefix or with the `createDraftId` helper) will work for drafts as well.

**Replace a version**

```
import {createVersionId} from '@sanity/id-utils'

const documentId = 'document-id'
await client.action({
  actionType: 'sanity.action.document.version.replace',
  document: {
    _id: createVersionId('release-id', documentId),
    _type: 'article',
    title: 'new title'
  }
});
```

### Set a version to unpublish

Use the `sanity.action.document.version.unpublish` action to set a version document to unpublish when the release runs. This is the programatic equivalent of selecting the “[Unpublish when releasing](https://www.sanity.io/docs/user-guides/content-releases)” action from the content releases interface.

**Set version to unpublish**

```
import {createVersionId} from '@sanity/id-utils'

const documentId = 'an-existing-document-id'
await client.action({
  actionType: 'sanity.action.document.version.unpublish',
  publishedId: documentId,
  versionId: createVersionId('release-id', documentId),
});
```

> \[!NOTE]
> The version document doesn’t need to exist to run this action. If a version document matching `versionId` exists, the special attribute `_system.delete` is set to `true`. If not, a copy of the `publishedId` document is created, again with `_system.delete` set to `true`, for use by the release.

## Release actions

Release actions allow you to programmatically control [Content Releases](https://www.sanity.io/docs/apis-and-sdks/content-releases-api) and [Scheduled Drafts](https://www.sanity.io/docs/studio/scheduled-drafts). They mutate release documents, but don’t control version documents in the release. To add or or manipulate documents in a release, use the [Version actions above](https://www.sanity.io/docs/content-lake/dispatch-actions).

### Create a new release

Use the `sanity.action.release.create` action to create a new release. You must supply a new releaseId that hasn’t been used in your current retention period.

**Create a release with metadata**

```
await client.action({
  actionType: 'sanity.action.release.create',
  releaseId: 'custom-release-id',
  metadata: {
    title: 'New release',
    description: 'Example content release',
    releaseType: 'undecided'
  }
})
```

**Create a release**

```
await client.action({
  actionType: 'sanity.action.release.create',
  releaseId: 'custom-release-id',
})
```

> \[!NOTE]
> This action is useful when bundling multiple actions into a single transaction, but if you only need to create a single release, the `client.releases` method can help by autogenerating an identifier for you. See the [Content Releases API cheatsheet](https://www.sanity.io/docs/apis-and-sdks/content-releases-cheat-sheet) for an example.

### Edit a release

Use the `sanity.action.release.edit` action to mutate the release metadata. It uses [Patch operations](https://www.sanity.io/docs/content-lake/http-patches).

**Edit a release**

```
await client.action({
  actionType: 'sanity.action.release.edit',
  releaseId: releaseId,
  patch: {
    set: {
      metadata: {
        title: 'new title'
      }
    }
  }
})
```

### Publish a release

Use the `sanity.action.release.publish` action to publish a release. This is also how you publish version documents, as they must be part of a release.

**Publish a release**

```
await client.action({
  actionType: 'sanity.action.release.publish',
  releaseId: 'release-id',
});
```

### Schedule a release

Use the `sanity.action.release.schedule` action to schedule a release for publish. It requires an existing `releaseId` and a UTC timestamp. Scheduling a release locks the documents associated with the release.

**Schedule a release**

```
await client.action({
  actionType: 'sanity.action.release.schedule',
  releaseId: 'release-id',
  publishAt: '2026-01-01T00:00:00.000Z',
})
```

### Unschedule a release

Use the `sanity.action.release.unschedule` action to unschedule a release for publish. This returns the release to the active and unlocked, editable state. This may fail if another release is scheduled to be published after this one and has a reference to a document created by this one.

**Unschedule a release**

```
await client.action({
  actionType: 'sanity.action.release.unschedule',
  releaseId: 'release-id',
})
```

### Archive a release

Use the `sanity.action.release.archive` action to archive, and effectively remove, an active release. The version documents in the releases are deleted and therefore no longer queryable, but last version can still be accessed using [document history endpoint](https://www.sanity.io/docs/archive/history-api) as long as they are still in your retention period.

**Archive a release**

```
await client.action({
  actionType: 'sanity.action.release.archive',
  releaseId: 'release-id',
});
```

### Unarchive a release

Use the `sanity.action.release.unarchive` action to restore an archived release. This is only possible during your retention period.

**Archive a release**

```
await client.action({
  actionType: 'sanity.action.release.unarchive',
  releaseId: 'release-id',
});
```

### Delete a release

Use the `sanity.action.release.delete` action to delete an archived or published release. To remove active, unpublished releases, from your releases list [use the archive action](https://www.sanity.io/docs/content-lake/dispatch-actions).

**Delete a release**

```
await client.action({
  actionType: 'sanity.action.release.delete',
  releaseId: 'release-id',
});
```
