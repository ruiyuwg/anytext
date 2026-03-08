# Creating and updating documents

The `@sanity/client` library provides methods for creating and modifying documents in your dataset. This guide covers the create, createOrReplace, createIfNotExists, and patch methods with practical examples for each.

## Prerequisites

All mutation methods require an authenticated client with a write token and return promises that resolve with the created or updated document. See [Getting started with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started) for setup instructions.

## Creating documents with client.create()

The `create()` method creates a new document in your dataset. Sanity automatically generates a unique `_id` for the document unless you provide one.

**create-document.ts**

```typescript
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  useCdn: false,
  token: 'your-token',
  apiVersion: '2026-03-01'
})

// Create a new document
try {
  const newPost = await client.create({
    _type: 'post',
    title: 'Getting started with Sanity',
    slug: {
      _type: 'slug',
      current: 'getting-started'
    },
    publishedAt: new Date().toISOString()
  })

  console.log('Created document:', newPost._id)
} catch (error) {
  console.error('Failed to create document:', error.message)
}
```

You can also specify a custom document ID:

**create-with-id.ts**

```typescript
const newPost = await client.create({
  _id: 'post-123',
  _type: 'post',
  title: 'My custom ID post'
})
```

## Creating or replacing with client.createOrReplace()

The `createOrReplace()` method creates a new document or completely replaces an existing one if a document with the specified `_id` already exists. This is useful for idempotent operations where you want to ensure a specific document state.

**create-or-replace.ts**

```typescript
// This will create the document if it doesn't exist,
// or replace it entirely if it does
const post = await client.createOrReplace({
  _id: 'post-123',
  _type: 'post',
  title: 'Updated title',
  slug: {
    _type: 'slug',
    current: 'updated-slug'
  },
  publishedAt: new Date().toISOString()
})

console.log('Document created or replaced:', post._id)
```

> \[!WARNING]
> The `createOrReplace()` method replaces the entire document. Any fields not included in the new document will be removed. Use `patch()` if you want to update specific fields while preserving others.

## Creating if not exists with client.createIfNotExists()

The `createIfNotExists()` method creates a document only if no document with the specified `_id` exists. If the document already exists, the operation does nothing and returns the existing document.

**create-if-not-exists.ts**

```typescript
// This will only create the document if it doesn't exist
const post = await client.createIfNotExists({
  _id: 'post-123',
  _type: 'post',
  title: 'My post',
  slug: {
    _type: 'slug',
    current: 'my-post'
  }
})

// If the document already exists, it returns the existing document
// without modifying it
```

This method is particularly useful for initialization scripts or ensuring default documents exist without overwriting user modifications.

## Patching documents with client.patch()

The `patch()` method lets you update specific fields in an existing document without replacing the entire document. You can chain multiple operations together to perform complex updates.

**patch-document.ts**

```typescript
// Update specific fields in a document
const updatedPost = await client
  .patch('post-123')
  .set({title: 'Updated title'})
  .commit()

console.log('Updated document:', updatedPost)
```

The `commit()` method executes the patch operation. You can chain multiple patch operations before calling `commit()`.

### Setting fields with .set()

The `set()` method sets or overwrites field values. You can set multiple fields at once or use dot notation to set nested fields.

**set-fields.ts**

```typescript
// Set multiple fields
const result = await client
  .patch('post-123')
  .set({
    title: 'New title',
    publishedAt: new Date().toISOString(),
    'author.name': 'Jane Doe'
  })
  .commit()

// Set nested fields using dot notation
const nested = await client
  .patch('post-123')
  .set({'metadata.views': 100})
  .commit()
```

### Setting only if missing with .setIfMissing()

The `setIfMissing()` method sets field values only if the fields don't already exist or are `null`. This is useful for setting default values without overwriting existing data.

**set-if-missing.ts**

```typescript
// Set default values only if they don't exist
const result = await client
  .patch('post-123')
  .setIfMissing({
    views: 0,
    likes: 0,
    publishedAt: new Date().toISOString()
  })
  .commit()

// If 'views' already has a value, it won't be changed
// If 'views' is null or doesn't exist, it will be set to 0
```

### Removing fields with .unset()

The `unset()` method removes fields from a document. You can remove multiple fields by passing an array of field paths.

**unset-fields.ts**

```typescript
// Remove a single field
const result = await client
  .patch('post-123')
  .unset(['draft'])
  .commit()

// Remove multiple fields at once
const multiUnset = await client
  .patch('post-123')
  .unset(['draft', 'internalNotes', 'metadata.temp'])
  .commit()
```

### Incrementing and decrementing with .inc() and .dec()

The `inc()` and `dec()` methods increment or decrement numeric field values. These operations are atomic and useful for counters, view counts, or other numeric tracking.

**increment-decrement.ts**

```typescript
// Increment a field by 1
const result = await client
  .patch('post-123')
  .inc({views: 1})
  .commit()

// Increment multiple fields by different amounts
const bulkInc = await client
  .patch('post-123')
  .inc({views: 10, likes: 5})
  .commit()

// Decrement a field
const decremented = await client
  .patch('post-123')
  .dec({stock: 1})
  .commit()
```

### Conditional patches with .ifRevisionId()

The `ifRevisionId()` method ensures that a patch only applies if the document's current revision matches the specified revision ID. This prevents race conditions and ensures you're updating the version of the document you expect.

**conditional-patch.ts**

```typescript
// First, fetch the document to get its current revision
const post = await client.getDocument('post-123')

try {
  // Only apply the patch if the revision hasn't changed
  const result = await client
    .patch('post-123')
    .ifRevisionId(post._rev)
    .set({title: 'Updated title'})
    .commit()

  console.log('Updated document:', result)
} catch (error) {
  // If the document was modified by another process,
  // the patch fails with a revision mismatch error
  console.error('Patch failed:', error.message)
}
```

This is particularly useful in collaborative environments where multiple users or processes might be updating the same document.

## Working with arrays

The patch API provides several methods for manipulating array fields, letting you add and remove items without replacing the entire array.

### Inserting items with .insert()

The `insert()` method adds items to an array at a specific position. You can insert items before or after existing items, or at the beginning or end of the array.

**insert-array-items.ts**

```typescript
// Insert at the beginning of an array
const result = await client
  .patch('post-123')
  .insert('before', 'tags[0]', ['featured'])
  .commit()

// Insert at the end of an array
const result2 = await client
  .patch('post-123')
  .insert('after', 'tags[-1]', ['trending'])
  .commit()

// Insert an object into an array (objects require a _key property)
const result3 = await client
  .patch('post-123')
  .insert('after', 'sections[-1]', [
    {_key: 'section-abc', _type: 'textSection', heading: 'New section'}
  ])
  .commit()
```

### Appending items with .append()

The `append()` method adds items to the end of an array. This is a convenient shorthand for inserting after the last item.

**append-array-items.ts**

```typescript
// Append items to an array
const result = await client
  .patch('post-123')
  .append('tags', ['javascript', 'tutorial'])
  .commit()

// Append a single item
const result2 = await client
  .patch('post-123')
  .append('categories', ['development'])
  .commit()
```

### Prepending items with .prepend()

The `prepend()` method adds items to the beginning of an array.

**prepend-array-items.ts**

```typescript
// Prepend items to an array
const result = await client
  .patch('post-123')
  .prepend('tags', ['featured', 'important'])
  .commit()

// The new items will appear at the start of the array
```

### Deleting array elements

You can remove items from arrays using the `unset()` method with array index notation. You can also use array filters to remove items that match specific criteria.

**delete-array-items.ts**

```typescript
// Remove an item by index
const result = await client
  .patch('post-123')
  .unset(['tags[2]'])
  .commit()

// Remove items matching a condition
const result2 = await client
  .patch('post-123')
  .unset(['tags[@ == "deprecated"]'])
  .commit()

// Remove all items with a specific value
const result3 = await client
  .patch('post-123')
  .unset(['categories[_ref == "cat-123"]'])
  .commit()
```

The `@` symbol represents the current array item in filter expressions. You can use comparison operators to match items based on their values or properties.

## Chaining multiple operations

You can chain multiple patch operations together to perform complex updates in a single transaction. All operations are applied atomically when you call `commit()`.

**chaining-operations.ts**

```typescript
// Perform multiple operations in one transaction
const result = await client
  .patch('post-123')
  .set({title: 'Updated title', publishedAt: new Date().toISOString()})
  .setIfMissing({views: 0})
  .inc({views: 1})
  .append('tags', ['updated'])
  .unset(['draft', 'internalNotes'])
  .commit()

// All operations succeed or fail together
```

This ensures data consistency and reduces the number of API calls needed to update a document.

## Actions

In addition to the client’s helper functions, you can also create, edit, and delete documents with the Actions.

**actions.ts**

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

Actions allow you to use the same approach used by Studio to manipulate documents. Learn more in our [guide to mutating documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions).

## Next steps

For additional settings and patterns to use alongside mutations, check the [advanced client patterns guide](https://www.sanity.io/docs/apis-and-sdks/js-client-advanced).
