# Deleting documents

The `@sanity/client` library provides methods for deleting documents individually by ID or in bulk using a query. This guide covers both approaches.

## Prerequisites

Deleting requires an authenticated client with a write token. See [Getting started with @sanity/client](https://www.sanity.io/docs/js-client-getting-started) for setup instructions.

## Delete by ID

Use `client.delete()` to remove a single document by its ID:

**delete-by-id.js**

```typescript
// Delete a single document
const result = await client.delete('post-123')
console.log('Deleted document:', result.documentId)

// Delete a draft document
await client.delete('drafts.post-456')

// Delete with error handling
try {
  await client.delete('post-789')
  console.log('Document deleted successfully')
} catch (error) {
  if (error.statusCode === 404) {
    console.log('Document not found')
  } else {
    console.error('Delete failed:', error.message)
  }
}
```

## Delete by query

For bulk deletions, query for documents and delete them in a transaction. This ensures all deletions succeed or fail together:

**delete-by-query.js**

```typescript
// Query for documents to delete
const query = '*[_type == "post" && publishedAt < $cutoffDate]'
const params = {cutoffDate: '2020-01-01'}

const docsToDelete = await client.fetch(query, params)

if (docsToDelete.length === 0) {
  console.log('No documents to delete')
} else {
  // Build transaction with all deletions
  const transaction = docsToDelete.reduce(
    (tx, doc) => tx.delete(doc._id),
    client.transaction()
  )

  // Execute the transaction
  const result = await transaction.commit()
  console.log(`Deleted ${result.results.length} documents`)
}
```

> \[!WARNING]
> Always test your query before deleting. Use client.fetch() to verify which documents match your query, then proceed with deletion. Deleted documents cannot be recovered unless you have backups.

The bulk deletion example uses `client.transaction()` to delete all matching documents atomically. Learn more about transactions in [Transactions](https://www.sanity.io/docs/js-client-transactions).
