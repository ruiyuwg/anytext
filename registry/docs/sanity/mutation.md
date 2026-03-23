# Mutation

The Mutation API is a low-level interface for creating, modifying, and deleting documents in Content Lake. If you’re new to mutating documents, learn more in the [document mutation introduction](https://www.sanity.io/docs/content-lake/mutations-introduction).

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- Manipulating documents requires read+write access permission for the affected document type. In most cases, this includes the Editor, Developer, or Administrator roles.

## Mutation Types

The API supports several types of mutations:

- create: Creates a new document with a specified or generated ID.
- createOrReplace: Creates a new document or replaces an existing one.
- createIfNotExists: Creates a document only if it doesn't already exist.
- delete: Removes documents by ID or GROQ query.
- patch: Updates existing documents with various operations.

### Create Mutation

Creates a new document. The rules for the new document's identifier are:

- If \_id is missing, a new random unique ID is generated.
- If \_id ends with '.', it is used as a prefix for a new random unique ID.
- If \_id is present, it is used as-is.

The operation will fail if a document by the provided ID already exists.

### CreateOrReplace Mutation

Creates a new document or replaces an existing one. If the document already exists:

- If the type is the same, the document will be completely replaced.
- If the type is different, it will act as a delete then create.
- If the document has hard references pointing to it, changing its type is not allowed.

### CreateIfNotExists Mutation

Creates a new document, but will silently fail if the document already exists.
Otherwise identical to create mutation.

### Delete Mutation

Deletes a document. Can delete by ID or by GROQ query.
The operation is considered successful even if the document did not exist.

When using a query to delete multiple documents:

- The query can only operate on up to 10,000 documents.
- For larger sets, split into multiple transactions.
- Recommended to paginate by \_id using queries like `*[_type == "article" && _id > $lastId]`.

### Patch Mutation

Updates an existing document's contents through targeted changes. A patch will fail if the document does not exist. Can patch by ID or by GROQ query.

If multiple patches are included, the order of execution is:

1. set
2. setIfMissing
3. unset
4. inc
5. dec
6. insert

[Get started with patches](https://www.sanity.io/docs/content-lake/http-patches).

> \[!NOTE]
> While you can use the HTTP API endpoint directly, we recommend using a client library.

# Query

The Query API lets you query Sanity Content Lake with GROQ.

You can also send queries to the CDN endpoint for edge-cached results:

```text
https://{projectId}.apicdn.sanity.io/v{YYYY-MM-DD}/data/query/{dataset}
```

Note: While you can use the HTTP API endpoint directly, we recommend using a client library if you can.

## Authentication

- Requests to drafts, versions, or content in private datasets must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# Scheduling

The Scheduling API allows you to schedule documents using the legacy scheduling feature.

> \[!WARNING]
> This API is deprecated
> The Scheduling API was officially deprecated with the release of Scheduled Drafts. We suggest using [Scheduled Drafts](https://www.sanity.io/docs/studio/scheduled-drafts) alongside the [Actions API](https://www.sanity.io/docs/http-reference/actions), or moving to [Content Releases](https://www.sanity.io/docs/apis-and-sdks/content-releases-api).

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

## Rate / API limits

- The Scheduling API has the following limits:
- 100 requests per minute per project.
- 1000 requests per hour per project.

## Status and error codes

The API uses standard HTTP status codes:

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 429: Too Many Requests

## Publishing rules

- Documents must exist in the dataset
- Documents must be valid according to their schema
- Documents must not be locked by another user

## Specifying dates

All dates must be in UTC format with a Z suffix, corresponding to the UTC+00:00 time zone.

Format: `YYYY-MM-DDTHH:mm:ss.sssZ`

Example: `2077-12-25T07:45:00.000Z`

## Schedules and your dataset

- Schedules are created in a specific dataset.
- Schedules can only publish/unpublish documents in that dataset.
- Schedules can be filtered by dataset.
- Schedules can be cancelled before they execute.

## Other caveats

- Only schedules with a `scheduled` state can be marked as `cancelled`.
- It's not possible to cancel already completed schedules.
- A schedule cannot have its state changed once in a `cancelled` state.
- Multiple schedule IDs can be specified as a comma-separated list when running schedules.

Note: While you can use the HTTP API endpoint directly, we recommend using a client library if you can.

# Webhooks

The Webhooks API allows you to programmatically interact with and monitor webhooks.

#### Want to get started?

[GROQ-powered webhooks](https://www.sanity.io/docs/content-lake/webhooks)

[Webhook Best Practices](https://www.sanity.io/docs/content-lake/webhook-best-practices)

In addition to webhooks, you can also react to document changes with [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction).

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).
- Manipulating documents requires read+write access permission for the affected document type. In most cases, this includes the Editor, Developer, or Administrator roles.

## Webhook types

Sanity provides two types of webhooks, transaction and document. Document webhooks are preferred because they are more flexible and powerful.

### Document

A document webhook triggers every time a document is created, updated, or deleted. If a transaction updates 3 documents, 3 webhooks will be executed. Document webhook also allows for more granular filtering and customizable payloads with GROQ.

### Transaction

A transaction webhook triggers once per dataset, meaning if you batch together multiple document mutations in one transaction only one webhook will be executed.

# Agent Actions

The Agent Actions API allows you full access to Agent Actions through an HTTP endpoint instead of the Sanity client. We highly suggest using this only in situations where you cannot otherwise use the client.

> \[!NOTE]
> Experimental feature
> Agent Actions are experimental and the API may change at any time. This API requires using `vX` for the API version.

#### Want to get started?

[Agent Actions](https://www.sanity.io/docs/agent-actions)

## Authentication

All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

# Embeddings Index

The Embeddings Index API allows you to create, manage, and query embeddings indexes for semantic search in your Sanity project.

> \[!TIP]
> Deprecation notice
> The **Embeddings Index API** is deprecated and will be sunset in a future release. We recommend migrating to the new **Embeddings** feature, now natively available within Sanity datasets.
> The new Embeddings feature offers a more integrated experience with improved performance and full support going forward. No new features or fixes will be made to this package.
> **Migrate today:** [Dataset Embeddings documentation](https://www.sanity.io/docs/content-lake/dataset-embeddings)
> If you have questions or need migration support, please open a discussion or reach out in the [Sanity Community](https://snty.link/community).

*This is a paid feature, available on the Growth plan.*

Note: Using this feature requires Sanity to send data to OpenAI and Pinecone to store vector interpretations of documents.

#### Want to get started?

[Embeddings index introduction](https://www.sanity.io/docs/content-lake/embeddings-index-api-overview)

## Authentication

- All requests must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth).

## Known limitations

- Creating an embeddings index for very large datasets can be slow.
- The Embeddings Index HTTP API rate limit depends on the OpenAI rate limit, which sets a cap for the HTTP API at about 8,000 tokens per minute.
- The embeddings-index API does not support dataset aliases—you must use the real dataset name in all requests.

# Content Agent

# Media Library

The Media Library API lets you programmatically interact with assets in your organization’s Media Library.

#### Want to get started?

[Media Library Introduction](https://www.sanity.io/docs/media-library/introduction)

[Upload assets programmatically](https://www.sanity.io/docs/media-library/upload-assets)

## Authentication

- All requests to private data must be [authenticated](https://www.sanity.io/docs/content-lake/http-auth). Requests to public information, like public assets, are available without an authentication token.
- Manipulating documents requires read+write access permission for Media Library.
