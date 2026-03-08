# Creating transactions

When you need to create, update, and delete multiple documents as a single unit, transactions ensure that all changes succeed or none are applied. This prevents partial updates that could leave your content in an inconsistent state.

This article covers how to create and commit transactions, chain multiple operations, use inline patch syntax, and build standalone transactions without a client instance.

## Prerequisites

Before using transactions, make sure you have `@sanity/client` installed and configured with write access. See [Getting started with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started) for setup instructions.

## When to use transactions

Use transactions when your mutations depend on each other. For example, if you create a new category and assign it to a post in the same operation, a transaction guarantees both changes apply together. If the category creation fails, the post won't be left referencing a category that doesn't exist.

For independent mutations that don't depend on each other, individual `create()`, `patch()`, and `delete()` calls are simpler and sufficient.

## Creating and committing a transaction

Call `client.transaction()` to start a new transaction, chain your mutation operations, and call `.commit()` to execute them. All operations are applied atomically. If any operation fails, none of the changes take effect.

**transaction.js**

```typescript
try {
  const result = await client
    .transaction()
    .create({_type: 'product', title: 'New Widget'})
    .patch('product-abc', (patch) => patch.set({featured: true}))
    .delete('product-discontinued-xyz')
    .commit()

  console.log('Transaction completed:', result.transactionId)
} catch (error) {
  console.error('Transaction failed, no changes applied:', error.message)
}
```

Replace `product-abc` and `product-discontinued-xyz` with your actual document IDs.

## Chaining related operations

Transactions are most useful when operations depend on each other. This example creates a new category, assigns it to a post, and removes an old category in one atomic operation:

**chain-operations.js**

```typescript
try {
  const result = await client
    .transaction()
    .create({
      _type: 'category',
      _id: 'category-technology',
      title: 'Technology',
    })
    .patch('post-getting-started-with-sanity', (patch) =>
      patch.set({category: {_ref: 'category-technology'}})
    )
    .delete('category-legacy-tech')
    .commit()

  // Each result corresponds to the operations in order
  console.log('Created category:', result.results[0])
  console.log('Updated post:', result.results[1])
  console.log('Deleted old category:', result.results[2])
} catch (error) {
  console.error('Transaction failed:', error.message)
}
```

## Using inline patch syntax

Instead of using a callback function for patches, you can pass an object describing the patch operations directly. This is often more concise when you're setting multiple fields at once:

**inline-patch.js**

```typescript
const result = await client
  .transaction()
  .patch('post-getting-started-with-sanity', {
    set: {title: 'Updated title', publishedAt: new Date().toISOString()},
    inc: {views: 1},
    unset: ['draft'],
  })
  .patch('author-jane-doe', {
    set: {lastActive: new Date().toISOString()},
    inc: {postCount: 1},
  })
  .commit()
```

Inline patches support `set`, `unset`, `setIfMissing`, `inc`, `dec`, `insert`, and `append`.

## Building transactions without a client instance

You can construct patches and transactions independently using the `Patch` and `Transaction` classes from `@sanity/client`. This is useful when you want to build mutation logic in one place and execute it later, or pass it between functions:

**clientless.js**

```typescript
import {Patch, Transaction} from '@sanity/client'

// Build a standalone patch
const patch = new Patch('post-getting-started-with-sanity')
  .set({title: 'Updated title'})
  .inc({views: 1})

// Build a standalone transaction
const transaction = new Transaction()
  .create({_type: 'post', title: 'Hello World'})
  .patch('post-getting-started-with-sanity', (p) => p.set({updated: true}))
  .delete('post-old-draft')

// Execute either one later with a configured client
await client.mutate(patch)
await client.mutate(transaction)
```

## Next steps

For mutation options like visibility modes, dry runs, and request cancellation, see [Advanced client patterns](https://www.sanity.io/docs/apis-and-sdks/js-client-advanced). To learn more about how transactions relate to the underlying mutation API, see the [Transactions](https://www.sanity.io/docs/content-lake/transactions) reference.
