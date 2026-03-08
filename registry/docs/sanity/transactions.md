# Transactions

Document updates in Sanity are called mutations, and a group of one or more mutations are executed as a single unit called a transaction. Transactions are submitted through mutations, as groups of actions in the Actions API, and a few other places throughout the Sanity ecosystem. They may look like the following:

**Actions with client**

```
// import a configured client and id helpers
import {client} from './client'
import {createPublishedId, createDraftId, createVersionId} from '@sanity/id-utils'

const { dataset } = client.config();
  const documentId = createPublishedId();
  const transaction = await client.request({
    uri: `/data/actions/${dataset}`,
    method: 'POST',
    body: {
      actions: [
        {
          actionType: 'sanity.action.document.create',
          publishedId: documentId,
          document: {
            _type: 'post',
            _id: createDraftId(documentId),
            title: 'new title',
          }
        },
        {
          actionType: 'sanity.action.document.publish',
          publishedId: documentId,
          draftId: createDraftId(documentId)
        },
        {
          actionType: 'sanity.action.document.edit',
          publishedId: documentId,
          versionId: createVersionId('rRU0cStZz', documentId),
          patch: {
            set: {
              title: 'new title 2'
            }
          }
        },
      ]
    }
  });
```

**Mutations**

```json
{
   "mutations":[
      {
         "create":{
            "_id":"alien",
            "_type":"movie",
            "title":"Alien"
         }
      },
      {
         "patch":{
            "id":"alien",
            "set":{
               "year":1979,
               "genre":"Science Fiction"
            }
         }
      },
      {
         "delete":{
            "id":"blade-runner"
         }
      }
   ]
}
```

Transactions are atomic: either all of the mutations succeed or they all fail.

All transactions are recorded in an internal transaction log. This log is available through the [document history API](https://www.sanity.io/docs/http-reference/history). Once a transaction is committed, any [real-time listeners](https://www.sanity.io/docs/content-lake/realtime-updates) will be notified about the changes.

## Eventual Consistency

Internally, the Sanity data store consists of two main components: a document store where transactions are executed, and a search store where GROQ queries are executed. Document changes are continuously synced between the document and search stores, but this happens outside of transactions, so there is a delay between a transaction being committed and the changes being visible to queries.

As a result, transactions are strongly consistent (they always see the latest data), but queries are eventually consistent (they may see outdated data, but will eventually see the latest data given enough time). Under normal circumstances the convergence time for queries is generally short (less than 1 second), but during operational anomalies such as network failures or heavy load it can be much longer.

> \[!WARNING]
> Gotcha
> Transactions using the `query` parameter are not strongly consistent, since the query is first executed against the search store, which may see outdated data.

When submitting transactions, the `visibility` parameter can be used to control how documents should be synced to the search store. `sync` (the default) causes the transaction request to return only after both the transaction has been committed and the changes have been synced to the search store. `async` causes the request to return once the transaction has been committed, and then syncs the changes to the search store afterwards (typically within a second). `deferred` causes the request to return once the transaction has been committed, but does not trigger syncing to the search store at all, and instead relies on a background process to sync the changes at a later time (within seconds to minutes) - this allows for much higher throughput when submitting a large number of mutations.

> \[!WARNING]
> Gotcha
> By default, real-time listeners receive change notifications as soon as a transaction has been committed, but before changes have been synced to the search store. This means that a listening client running a GROQ query in response to a change will usually not see the updated document in the query result. The client can specify `visibility=query` for the listener to receive notifications after they have been synced to the search store, when possible.

## ACID Compliance

Sanity transactions are ACID-compliant, which means that they have the following properties:

- **Atomicity:** the transaction constitutes a single unit, such that either all of its mutations succeed or they all fail.
- **Consistency:** if a transaction succeeds then the resulting documents are guaranteed to satisfy all data store constraints, i.e. the transaction cannot leave the data in an inconsistent state. For example, this guarantees that there cannot exist two documents with the same ID. Note that this is a different concept than eventual consistency as described above.

> \[!WARNING]
> Gotcha
> Sanity schemas are currently only enforced client-side by the Sanity studio, and thus the consistency guarantees do not extend to constraints specified in the schema. Non-studio clients may submit data which does not satisfy the schema, and schema changes may leave old data which no longer satisfies the new schema.

- **Isolation:** transactions have [repeatable read isolation](https://en.wikipedia.org/wiki/Isolation_\(database_systems\)#Repeatable_reads) via exclusive locks. When a document is first accessed by a transaction it is locked, blocking concurrent transactions from both reading and writing the document until the initial transaction completes. Since locks are acquired on first access and not on transaction start, it is possible for a mutation to see the effects of a concurrent transaction that was committed after the current transaction began but before the document was accessed and locked.

> \[!WARNING]
> Gotcha
> When using the `query` option for mutations, the mutation first executes the given GROQ query against the search store, and then executes mutations against the matching documents. Since the search store is eventually consistent, it is possible for the query to return outdated results, which can cause the mutations to incorrectly affect or ignore documents that have recently been modified. This effectively reduces the transaction isolation level to [read committed](https://en.wikipedia.org/wiki/Isolation_\(database_systems\)#Read_committed), and can cause multiple data anomalies including lost updates, non-repeatable reads, phantom reads, and write skew.

- **Durability:** once a transaction succeeds, it is guaranteed to have been written to disk. However, it is not guaranteed to have been replicated to other servers. This means it is possible to lose a transaction in the rare scenario where a primary server crashes and is replaced by a replica server after the transaction has been committed but before it has been replicated.

## Concurrency Control

Transactions use exclusive locks to prevent concurrent transactions from interfering with each other (see description of transaction isolation above). However, clients often use read-write cycles that run a GROQ query and then submit transactions based on the results. This pattern does not have the same isolation guarantees as transactions. For example, if a different client writes a value after our client has read a document but before our client writes its new value, then the value that the other client wrote may be lost (an anomaly known as a lost update).

Clients can use optimistic locking to prevent these kinds of data anomalies. `patch` mutations take an optional `ifRevisionID` parameter containing a document revision ID (typically from the document's `_rev` attribute), and are only accepted if the given revision ID matches the document's current revision ID. If a different client has modified the document in the meanwhile then the mutation will be rejected with a `409 Conflict` HTTP status code, allowing the client to fetch the updated document and retry the operation with fresh data. Optimistic locking will also guard against submitting mutations based on outdated query results caused by the data store's eventual consistency model.
