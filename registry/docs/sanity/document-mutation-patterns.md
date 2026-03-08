# Document mutation patterns

This guide describes common patterns and options you may find useful when mutating documents. If you haven’t already, take a look at the [introduction to ducument mutations](https://www.sanity.io/docs/content-lake/mutations-introduction) and the [mutate documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions) guide.

The examples below display techniques across different APIs when available, and use the following client configuration when referencing `client`.

**client.ts**

```
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '<your-project-id>',
  dataset: '<your-dataset>',
  apiVersion: '2025-12-15',
  token: '<your-token>'
})
```

## Perform a dry run

To test actions and mutations without applying the mutations, you can use the dryRun option. Set it to true to perform a “dry run”.

**Action**

```
await client.action([{
    actionType: 'sanity.action.document.create',
    publishedId: 'example-id',
    attributes: {
      _id: `drafts.example-id`,
      _type: 'article',
      title: 'Title of the document',
    },
    ifExists: 'fail',
  }], 
  // take note of the new object passed as a second value to `action`
  {
    dryRun: true,
  });
```

**Mutation**

```
const { dataset } = client.config();
await client.request({
  uri: `/data/mutate/${dataset}`,
  method: 'POST',
  body: {
    mutations: [
      {
        delete: {
          id: '123'
        }
      }
    ],
    dryRun: true
  },
});
```

## Dispatching multiple actions

The Actions API is transactional. It accepts an array of actions that will be executed in a single transaction so that either all the effects will be applied, or none of them.

**Multiple actions with client**

```
await client.action([
  {
    actionType: 'sanity.action.release.create',
    releaseId: 'custom-release-id',
    metadata: {
      title: 'new release'
    }
  },
  {
    actionType: 'sanity.action.release.schedule',
    releaseId: 'custom-release-id',
    publishAt: '2026-01-01T00:00:00.000Z',
  }
])
```

Note that you cannot mix document/version and release actions in a single trans

## Fully purging a document from the transaction history when deleting it

You can use the optional flag `purge` to request the document history to be fully purged from the Content Lake. When using this option, all transactions related to the document will be immediately removed, consistent with our [data retention policy](https://www.sanity.io/security#67486cfc1499), and no longer show on [Studio's history experience](https://www.sanity.io/docs/user-guides/history-experience), nor on the [Content Lake history API endpoint](https://www.sanity.io/docs/http-reference/history).

The purge option is available on actions and mutations that delete or discard documents.

**Action example**

```
import {createVersionId} from '@sanity/id-utils'

const documentId = 'document-id'
await client.action({
  actionType: 'sanity.action.document.version.discard',
  versionId: createVersionId('version-id', documentId),
  purge: true, // optionally pass to delete history
});
```

**Mutation example**

```json
const { dataset } = client.config();
await client.request({
  uri: `/data/mutate/${dataset}`,
  method: 'POST',
  body: {
    mutations: [
      {
        delete: {
          id: '123',
          purge: true
        }
      }
    ]
  },
});
```

## Deleting multiple documents by query

By submitting a GROQ `query` instead of an id, multiple documents can be deleted in a single mutation.

```json
const { dataset } = client.config();
await client.request({
  uri: `/data/mutate/${dataset}`,
  method: 'POST',
  body: {
    mutations: [
      {
        delete: {
          query: "*[_type == 'feature' && viewCount < $views]",
          params: {
            views: 5
          },
        }
      }
    ]
  },
});
```

Deletes all documents of type "feature" where the `visitCount` is less than 5. See the GROQ documentation for valid queries.

> \[!WARNING]
> Gotcha
> A mutation that specifies a query can only operate on up to 10,000 documents! This means that a mutation based on a query such as `*[_type == "article"]` is in fact executed as if the query were written `*[_type == "article"][0..10000]`.
> To perform mutations on larger sets of documents, you will need to split them into multiple transactions. We recommend paginating by `_id`.
> E.g., `*[_type == "article" && _id > $lastId]`. This works because GROQ will, by default, sort documents by ascending `_id`. Since each transaction returns the `_id`s of modified documents, you can use the last returned `_id` as the next `lastId` parameter.

## Patching multiple documents by query

By submitting a query instead of an id, you may patch multiple documents at once. This will reset the score and add a bonus point to any person that has more than 100 points:

```json
const { dataset } = client.config();
await client.request({
  uri: `/data/mutate/${dataset}`,
  method: 'POST',
  body: {
    mutations: [
      {
        patch: {
          query: "*[_type == 'person' && points >= $threshold]",
          params: {
            threshold: 100
          },
          dec: {
            points: 100
          },
          inc: {
            bonuses: 1
          }
        }
      }
    ]
  },
});
```

## Set your own transactionId

Mutations automatically set a transactionId, but if you need that value to be more predictable or queryable, you can define your own when dispatching actions or posting mutations. Note that the transactionId must be unique in the dataset.

**Action**

```
await client.action([{
    actionType: 'sanity.action.document.create',
    publishedId: 'example-id',
    attributes: {
      _id: `drafts.example-id`,
      _type: 'article',
      title: 'Title of the document',
    },
    ifExists: 'fail',
  }], 
  // take note of the new object passed as a second value to `action`
  {
    transactionId: 'custom-identifier',
  });
```

**Mutation**

```
const { dataset } = client.config();
await client.request({
  uri: `/data/mutate/${dataset}`,
  method: 'POST',
  body: {
    mutations: [
      {
        delete: {
          id: '123'
        }
      }
    ],
    transactionId: 'custom-transaction-id'
  },
});
```

## Learn more

To dive deeper, you can explore the reference documentation for the Actions and Mutations APIs.

#### HTTP reference

[Actions API reference](https://www.sanity.io/docs/http-reference/actions)

[Mutation API reference](https://www.sanity.io/docs/http-reference/mutation)
