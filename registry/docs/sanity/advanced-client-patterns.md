# Advanced client patterns

This guide covers advanced patterns for working with `@sanity/client`, including mutation options that control how changes are applied and techniques for canceling in-flight requests.

These patterns apply to any mutation method: `create()`, `patch()`, `delete()`, and `transaction().commit()`. See [Creating and updating documents](https://www.sanity.io/docs/apis-and-sdks/js-client-mutations) and [Creating transactions](https://www.sanity.io/docs/apis-and-sdks/js-client-transactions) for the basics.

## Mutation options

Control how mutations execute with options for visibility, dry runs, and array key generation. These options apply to any mutation method, not only transactions.

### Visibility: sync, async, and deferred

The visibility option controls when mutations become visible to queries:

- `sync`: The mutation completes and indexes before returning. Queries immediately see the changes. This is the default behavior.
- `async`: The mutation returns immediately but indexes in the background. Queries may not see changes right away.
- `deferred`: The mutation queues for later processing. Use this for non-critical updates or bulk operations.

**visibility.ts**

```typescript
// Sync: wait for indexing (default)
await client.create(
  {_type: 'post', title: 'Hello'},
  {visibility: 'sync'}
)

// Async: return immediately, index in background
await client.create(
  {_type: 'post', title: 'Hello'},
  {visibility: 'async'}
)

// Deferred: queue for later processing
await client.create(
  {_type: 'analytics', event: 'page_view'},
  {visibility: 'deferred'}
)

// Use async for bulk operations
const transaction = client.transaction()
for (const item of largeDataset) {
  transaction.create({_type: 'product', ...item})
}
await transaction.commit({visibility: 'async'})
```

### Dry run mode

Test mutations without applying changes using `dryRun: true`. The API validates the mutation and returns what would happen, but does not modify any documents:

**dry-run.ts**

```typescript
// Test a mutation without applying it
const result = await client.create(
  {_type: 'post', title: 'Test Post'},
  {dryRun: true}
)

console.log('Would create:', result)
// Document is not actually created

// Test a transaction
const txResult = await client
  .transaction()
  .create({_type: 'author', name: 'Jane'})
  .patch('post-123', (p) => p.set({author: 'jane-id'}))
  .commit({dryRun: true})

console.log('Transaction would execute:', txResult.results)
// No changes are applied
```

### Auto-generate array keys

By default, the client automatically generates `_key` values for array items. Disable this with `autoGenerateArrayKeys: false` if you want to provide your own keys:

**array-keys.ts**

```typescript
// Default: keys are auto-generated
await client.create({
  _type: 'post',
  title: 'Hello',
  tags: [
    {_type: 'tag', name: 'javascript'},
    {_type: 'tag', name: 'sanity'}
  ]
})
// Each tag gets a unique _key automatically

// Provide your own keys
await client.create(
  {
    _type: 'post',
    title: 'Hello',
    tags: [
      {_key: 'js-tag', _type: 'tag', name: 'javascript'},
      {_key: 'sanity-tag', _type: 'tag', name: 'sanity'}
    ]
  },
  {autoGenerateArrayKeys: false}
)
```

## Canceling requests

Cancel in-flight requests using AbortController or by unsubscribing from Observables. This is useful for cleaning up requests when components unmount or when user actions make a request obsolete.

### Using AbortController

Pass an AbortSignal to any client method to enable cancellation:

**abort-controller.ts**

```typescript
const controller = new AbortController()
const {signal} = controller

// Start a mutation
const mutationPromise = client.create(
  {_type: 'post', title: 'Hello'},
  {signal}
)

// Cancel the mutation after 1 second
setTimeout(() => {
  controller.abort()
  console.log('Mutation canceled')
}, 1000)

try {
  await mutationPromise
} catch (error) {
  if (error instanceof Error && error.name === 'AbortError') {
    console.log('Request was aborted')
  }
}

// Use with transactions
const txController = new AbortController()

const transaction = client
  .transaction()
  .create({_type: 'post', title: 'Post 1'})
  .create({_type: 'post', title: 'Post 2'})

try {
  await transaction.commit({signal: txController.signal})
} catch (error) {
  if (error instanceof Error && error.name === 'AbortError') {
    console.log('Transaction was aborted')
  }
}
```

### Unsubscribing from Observables

When using the Observable API, unsubscribe to cancel the request:

**observables.ts**

```typescript
const subscription = client
  .observable
  .create({_type: 'post', title: 'Hello'})
  .subscribe({
    next: (result) => console.log('Created:', result),
    error: (error) => console.error('Error:', error),
    complete: () => console.log('Complete')
  })

// Cancel by unsubscribing
setTimeout(() => {
  subscription.unsubscribe()
  console.log('Unsubscribed from mutation')
}, 1000)

// Use with transactions
const txSubscription = client.observable
  .transaction()
  .create({_type: 'post', title: 'Post 1'})
  .create({_type: 'post', title: 'Post 2'})
  .commit()
  .subscribe({
    next: (result) => console.log('Transaction result:', result),
    error: (error) => console.error('Transaction error:', error)
  })

// Unsubscribe to cancel
txSubscription.unsubscribe()
```

### React cleanup example

This example shows how to cancel requests when a React component unmounts:

**useCreatePost.tsx**

```typescript
import {useEffect, useState} from 'react'
import {type SanityDocument} from '@sanity/client'
import {client} from './sanityClient'

function useCreatePost(postData: Record<string, unknown>) {
  const [result, setResult] = useState<SanityDocument | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    client
      .create(postData, {signal: controller.signal})
      .then(setResult)
      .catch((err: Error) => {
        if (err.name !== 'AbortError') {
          setError(err)
        }
      })

    // Cleanup: abort request if component unmounts
    return () => controller.abort()
  }, [postData])

  return {result, error}
}
```
