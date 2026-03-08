# Working with Vector Indexes

Create, manage, and optimize vector indexes for efficient similarity search.

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Vector indexes organize embeddings within a bucket with consistent dimensions and distance metrics. Each index defines how similarity searches are performed across your vectors.

## Understanding vector indexes

An index specifies:

- **Index Name** - Unique identifier within the bucket
- **Dimension** - Size of vector embeddings (e.g., 1536 for OpenAI)
- **Distance Metric** - Similarity calculation method (cosine, euclidean, or L2)
- **Data Type** - Vector format (currently `float32`)

Think of an index as a table in a traditional database. It has a schema (dimension) and a query strategy (distance metric).

## Creating indexes

### Via Dashboard

1. Open your vector bucket in the Supabase Dashboard.
2. Click **Create Index**.
3. Enter an index name (e.g., `documents-openai`).
4. Set the dimension matching your embeddings (e.g., `1536` for OpenAI's text-embedding-3-small).
5. Select the distance metric (`cosine`, `euclidean`, or `l2`).
6. Click **Create**.

### Via SDK

````
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://your-project.supabase.co', 'your-service-key')

const bucket = supabase.storage.vectors.from('embeddings')

// Create an index
const { data, error } = await bucket.createIndex({
  indexName: 'documents-openai',
  dataType: 'float32',
  dimension: 1536,
  distanceMetric: 'cosine',
})

if (error) {
  console.error('Error creating index:', error)
} else {
  console.log('Index created:', data)
}
```



```python
from supabase import create_client

supabase = create_client('https://your-project.supabase.co', 'your-service-key')

bucket = supabase.storage.vectors().from_('embeddings')

# Create an index
bucket.create_index(
    index_name='documents-openai',
    dimension=1536,
    distance_metric='cosine',
    data_type='float32'
)

print('✓ Index created: documents-openai')
```
````

### Choosing the right metric

Most modern embedding models work best with **cosine** distance:

- **OpenAI** (text-embedding-3-small, text-embedding-3-large): Cosine
- **Cohere** (embed-english-v3.0): Cosine
- **Hugging Face** (sentence-transformers): Cosine
- **Google** (text-embedding-004): Cosine
- **Llama 2** embeddings: Cosine or L2

**Tip**: Check your embedding model's documentation for the recommended distance metric.

**Important**: Creating an index with incorrect dimensions will cause insert and query operations to fail.

## Managing multiple indexes

Create multiple indexes for different use cases or embedding models:

````
```typescript
const bucket = supabase.storage.vectors.from('embeddings')

// Index for OpenAI embeddings
await bucket.createIndex({
  indexName: 'documents-openai',
  dimension: 1536,
  distanceMetric: 'cosine',
  dataType: 'float32',
})

// Index for Cohere embeddings
await bucket.createIndex({
  indexName: 'documents-cohere',
  dimension: 1024,
  distanceMetric: 'cosine',
  dataType: 'float32',
})

// Index for different use case
await bucket.createIndex({
  indexName: 'images-openai',
  dimension: 1536,
  distanceMetric: 'cosine',
  dataType: 'float32',
})

// List all indexes
const { data: indexes } = await bucket.listIndexes()
console.log('All indexes:', indexes)
```



```python
bucket = supabase.storage.vectors().from_('embeddings')

# Index for OpenAI embeddings
bucket.create_index(
    index_name='documents-openai',
    dimension=1536,
    distance_metric='cosine',
    data_type='float32'
)

# Index for Cohere embeddings
bucket.create_index(
    index_name='documents-cohere',
    dimension=1024,
    distance_metric='cosine',
    data_type='float32'
)

# Index for different use case
bucket.create_index(
    index_name='images-openai',
    dimension=1536,
    distance_metric='cosine',
    data_type='float32'
)

# List all indexes
indexes = bucket.list_indexes()
print('All indexes:', indexes)
```
````

### Use cases for multiple indexes

- **Different embedding models** - Store vectors from OpenAI, Cohere, and local models separately
- **Different domains** - Maintain separate indexes for documents, images, products, etc.
- **A/B testing** - Compare different embedding models side-by-side
- **Multi-language** - Keep language-specific embeddings separate

## Listing and inspecting indexes

### List all indexes in a bucket

````
```typescript
const bucket = supabase.storage.vectors.from('embeddings')

const { data: indexes, error } = await bucket.listIndexes()

if (!error) {
  indexes?.forEach((index) => {
    console.log(`Index: ${index.name}`)
    console.log(`  Dimension: ${index.dimension}`)
    console.log(`  Distance: ${index.distanceMetric}`)
  })
}
```



```python
bucket = supabase.storage.vectors().from_('embeddings')

indexes = bucket.list_indexes()

if indexes:
    for index in indexes.indexes:
        print(f'Index: {index.indexName}')
```
````

### Get index details

````
```typescript
const { data: indexDetails, error } = await bucket.getIndex('documents-openai')

if (!error && indexDetails) {
  console.log(`Index: ${indexDetails.name}`)
  console.log(`Created at: ${indexDetails.createdAt}`)
  console.log(`Dimension: ${indexDetails.dimension}`)
  console.log(`Distance metric: ${indexDetails.distanceMetric}`)
}
```



```python
index_details = bucket.get_index('documents-openai')

if index_details:
    print(f'Index: {index_details.index.index_name}')
    print(f'Dimension: {index_details.index.dimension}')
    print(f'Distance metric: {index_details.index.distance_metric}')
```
````

## Deleting indexes

Delete an index to free storage space:

````
```typescript
const bucket = supabase.storage.vectors.from('embeddings')

const { error } = await bucket.deleteIndex('documents-openai')

if (error) {
  console.error('Error deleting index:', error)
} else {
  console.log('Index deleted successfully')
}
```



```python
bucket = supabase.storage.vectors().from_('embeddings')

bucket.delete_index('documents-openai')

print('✓ Index deleted successfully')
```
````

### Before deleting an index

**Warning**: Deleting an index is permanent and cannot be undone.

- **Backup important data** - Export vectors before deletion if needed
- **Update applications** - Ensure no code references the deleted index
- **Check dependencies** - Verify no active queries use the index
- **Plan the deletion** - Do this during low-traffic periods

### Immutable properties

Once created, these properties **cannot be changed**:

- **Dimension** - Must create new index with different dimension
- **Distance metric** - Cannot change after creation
- **Data type** - Currently only `float32` supported

### Optimizing index performance

````
```typescript
// Good - Appropriate batch size
const batch = vectors.slice(0, 250)
await index.putVectors({ vectors: batch })

// Good - Filter metadata before query
const { data } = await index.queryVectors({
  queryVector,
  topK: 5,
  filter: { category: 'electronics' },
})

// Avoid - Single vector inserts
for (const vector of vectors) {
  await index.putVectors({ vectors: [vector] })
}

// Avoid - Returning unnecessary data
const { data } = await index.queryVectors({
  queryVector,
  topK: 1000, // Too many results
  returnData: true, // Include large embeddings
})
```



```python
# Good - Appropriate batch size
batch = vectors[:250]
index.put(batch)

# Good - Filter metadata before query
results = index.query(
    query_vector=query_vector,
    topK=5,
    filter={'category': 'electronics'}
)

# Avoid - Single vector inserts
for vector in vectors:
    index.put([vector])

# Avoid - Returning unnecessary data
results = index.query(
    query_vector=query_vector,
    topK=1000,  # Too many results
    return_data=True  # Include large embeddings
)
```
````

## Next steps

- [Store vectors in indexes](/docs/guides/storage/vector/storing-vectors)
- [Query vectors for similarity search](/docs/guides/storage/vector/querying-vectors)
- [Understand vector bucket limits](/docs/guides/storage/vector/limits)
- [Create vector buckets](/docs/guides/storage/vector/creating-vector-buckets)

# Limits

Learn how to increase Supabase file limits.

## Global file size

You can set the maximum file size across all your buckets by setting the *Global file size limit* value in your [Storage Settings](/dashboard/project/_/storage/settings). For Free projects, the limit can't exceed 50 MB. On the Pro Plan and up, you can set this value to up to 500 GB. If you need more than 500 GB, [contact us](/dashboard/support/new).

| Plan       | Max File Size Limit |
| ---------- | ------------------- |
| Free       | 50 MB               |
| Pro        | 500 GB              |
| Team       | 500 GB              |
| Enterprise | Custom              |

This option is a global limit, which applies to all your buckets.

Additionally, you can specify the maximum file size on a per [bucket level](/docs/guides/storage/buckets/creating-buckets#restricting-uploads) but it can't be higher than this global limit. As a good practice, the global limit should be set to the highest possible file size that your application accepts, with smaller per-bucket limits set as needed.

## Per bucket restrictions

You can have different restrictions on a per bucket level such as restricting the file types (e.g. `pdf`, `images`, `videos`) or the maximum file size, which should be lower than the global limit. To apply these limits on a bucket level see [Creating Buckets](/docs/guides/storage/buckets/creating-buckets#restricting-uploads).

## File name restrictions

File names can only include the following characters:

- **Alphanumeric**: `A-Z`, `a-z`, `0-9`
- **Punctuation**: `_` (underscore), `-` (hyphen), `.` (dot), `'` (apostrophe), `,` (comma)
- **Special characters**: `!`, `*`, `&`, `$`, `@`, `=`, `;`, `:`, `+`, `?`, `(`, `)`
- **Whitespace**
