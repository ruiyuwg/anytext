# Actions

The Actions API is a higher-level alternative to the Mutations API. It is used by Studio in the course of regular authoring workflows, but can also be used directly. All requests must be authenticated.

#### Want to get started?

[Mutate documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions)

[Introduction to document mutations](https://www.sanity.io/docs/content-lake/mutations-introduction)

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- Manipulating documents requires read+write access permission for the affected document type. In most cases, this includes the Editor, Developer, or Administrator roles.

## Actions types

Actions are identified by their `actionType`. For a complete list of properties to supply to each action, select the action type in the [actions property](https://www.sanity.io#actions-requestbody-application-json-actions) below.

### Document Actions

Document actions use an `actionType` that begins with `sanity.action.document`.

Most of the action types take a `versionId`, referring to the draft or release version, and a `publishedId`, referring to the published version of the document.

The `versionId` must have either `drafts.` or `versions.<release>.` as a prefix, and the portion following that prefix must match `publishedId`.

- `sanity.action.document.create`: Creates a new document in the dataset.
- `sanity.action.document.delete`: Deletes a document from the dataset.
- `sanity.action.document.edit`: Modifies an existing document using a patch.
- `sanity.action.document.publish`: Publishes a document, making it available in the published perspective.
- `sanity.action.document.unpublish`: Unpublishes a document, removing it from the published perspective.
- `sanity.action.document.discard`: \[DEPRECATED] Discards a document (use version actions instead)
- `sanity.action.document.replaceDraft`: \[DEPRECATED] Replaces a draft document (use version actions instead)

### Version Actions

Version actions use an `actionType` starting with `sanity.action.document.version`.

These actions operate solely on the versions of documents. They follow the same authoring model of `sanity.action.document` actions by requiring a `publishedId`, referring to the published version of the document. This is true even if the published version does not yet exist, such as when starting a draft or version of a new document.

- `sanity.action.document.version.create`: Creates a new version of a document associated with a release.
- `sanity.action.document.version.discard`: Discards a version of a document, optionally purging its history.
- `sanity.action.document.version.replace`: Replaces an existing version of a document.
- `sanity.action.document.version.unpublish`: Marks a version for unpublishing when the associated release is published.

### Release Actions

Release actions use an `actionType` starting with `sanity.action.release`.

Use release actions to interact with [Content Releases](https://www.sanity.io/docs/studio/content-releases-configuration) and [Scheduled Drafts](https://www.sanity.io/docs/studio/scheduled-drafts).

- `sanity.action.release.create`: Creates a new release with optional metadata.
- `sanity.action.release.edit`: Modifies the metadata of an existing release.
- `sanity.action.release.publish`: Publishes all documents in a release.
- `sanity.action.release.archive`: Archives a release, removing it from active releases.
- `sanity.action.release.unarchive`: Restores an archived release to its pre-archived state.
- `sanity.action.release.schedule`: Schedules a release for publishing at a future time.
- `sanity.action.release.unschedule`: Cancels a scheduled release.
- `sanity.action.release.delete`: Deletes a published or archived release.
- `sanity.action.release.import`: Imports a release document.

> \[!NOTE]
> You can not mix different types of actions, such as release and document actions, in a single transaction.

# Assets

Use the Assets API to upload and manage assets in your Content Lake datasets. For assets stored in Media Library, use the [Media Library API](https://www.sanity.io/docs/http-reference/media-library).

#### Want to get started with assets?

[Assets](https://www.sanity.io/docs/content-lake/assets)

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# Copy

The Copy API, also known as Cloud Clone, allows you to make a copy of an existing dataset. It offers an alternative to exporting and importing a dataset.

#### Want to get started?

[How to use Cloud Clone for datasets](https://www.sanity.io/docs/content-lake/how-to-use-cloud-clone-for-datasets)

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# Backups

The Backups API allows you to manage your saved backups.

#### Want to get started?

[Backups](https://www.sanity.io/docs/content-lake/backups)

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# Doc

Use the Doc API with caution as it bypasses caching and can lead to unexpected usage. Prefer the [Query API](https://www.sanity.io/docs/http-reference/query) for traditional fetching.

# Export

The Export API allows you to export all the non-deleted documents in a dataset, including drafts and asset documents.

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# History

The History API lets you request document revisions by a timestamp or a revision ID.

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- To read transactions for a document, you must have read access to the document's current version.
- If your document is in a private dataset you must be authenticated.

# Jobs

The Jobs API allows you to monitor and manage processes running inside Sanity's infrastructure.

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# Listen

The listen endpoint can be used to receive events whenever documents are modified. This endpoint follows the server-sent events protocol using the mime-type text/event-stream. The backend will hold the connection open and stream events as they occur for any documents matching the GROQ query.

> \[!NOTE]
> In most cases, you should use the [Live Content API](https://www.sanity.io/docs/http-reference/live) instead for new projects.

## Authentication

- Any requests to private datasets must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# Live

The Live Content API (LCAPI) is the underlying API that powers components like `<SanityLive>` and other *Live by default* functionality.

It allows you to subscribe to a stream of sync tags as they become invalid, which you can then match up with the tags returned by the [Query API](https://www.sanity.io/docs/http-reference/query), or in queries made with the Sanity client.

#### Want to get started?

[Live Content API](https://www.sanity.io/docs/content-lake/live-content-api)

[Add live content to your application](https://www.sanity.io/docs/developer-guides/live-content-guide)

## Authentication

- [Authentication](https://www.sanity.io/docs/content-lake/http-auth) is not required for public data.
- Requests that use the `includeAllDocuments` option require a viewer token as noted below.
