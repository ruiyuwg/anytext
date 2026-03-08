# Document Handles

In this article, we’ll describe what Document Handles ( `DocumentHandle`, see their type definition [here](https://reference.sanity.io/_sanity/sdk/index/DocumentHandle/)) are, why they’re useful, and how to work with them.

## What is a Document Handle?

In short, a `DocumentHandle` is a 'stub' of a document — a small piece of metadata, encoded in a JavaScript object, that acts as a reference to a complete document in your dataset(s).

It looks like this:

**documentHandle.ts**

```typescript
const myDocumentHandle = {
  documentId: 'my-document-id',
  documentType: 'article'
}
```

This lightweight representation serves several important purposes:

- **Performance**: Loading just the handles instead of full documents reduces initial data transfer and improves application responsiveness
- **Flexibility**: Handles can be passed to other hooks that load only the specific document data needed for a particular view or operation
- **Real-time Updates**: The SDK can efficiently track changes to documents by monitoring their handles

A Document Handle may also contain optional information about the project and dataset it originates from; in that case, it would look like this:

**documentHandle.ts**

```typescript
const myDocumentHandle = {
  documentId: 'my-document-id',
  documentType: 'author',
  dataset: 'dataset-name',
  projectId: 'my-project-id'
}
```

Therefore, for a document in a given dataset that looks (in part) like this:

**result.json**

```json
{
  "_id": "123456-abcdef",
  "_type": "book",
  "title": "Into the Cool",
  "publisher": "The University of Chicago Press",
  "pages": 378,
  "…": "…"
}
```

…the corresponding Document Handle would look like this:

**result.json**

```json
{
  documentId: "123456-abcdef",
  documentType: "book"
}
```

## Why are Document Handles used?

Hooks like [useDocuments](https://reference.sanity.io/_sanity/sdk-react/exports/useDocuments/) and [usePaginatedDocuments](https://reference.sanity.io/_sanity/sdk-react/exports/usePaginatedDocuments/) can return potentially large numbers of documents matching your specified parameters. If these hooks were to return every matching document in its entirety, this could end up being a potentially performance heavy operation, which could thus slow down your application and result in a poor user experience. Additionally, you may not need each returned document in its entirety to begin with — perhaps, for example, you just want to render a document preview, or one or two arbitrary fields of a document, or to simply get a count of documents matching your parameters.

This is where the concept of Document Handles comes in. By returning a small amount of metadata for each document instead of unfurling every returned document, hooks like `useDocuments` can respond as fast as possible, allowing your application to remain snappy.

Of course, unless you’re just looking to get a count of documents matching the parameters you pass to these hooks, Document Handles aren't incredibly useful on their own. This is by design — they’re only meant to serve as references to documents which can then be consumed by more specialized hooks, such as [useDocumentProjection](https://reference.sanity.io/_sanity/sdk-react/exports/useDocumentProjection/), [useDocument](https://reference.sanity.io/_sanity/sdk-react/exports/useDocument/), and many more hooks provided by the SDK. These specialized hooks are designed to consume document handles and emit only the document content you request, which also delivers huge performance benefits. Other hooks, such as [useDocumentEvent](https://reference.sanity.io/_sanity/sdk-react/exports/useDocumentEvent/) and [useDocumentPermissions](https://reference.sanity.io/_sanity/sdk-react/exports/useDocumentPermissions/) have no need to know the contents of a document — instead, they use the provided Document Handle to reference a document and retrieve information pertaining to that document.

In short, Document Handles promote deferring the retrieval of document contents until such time as those contents are actually needed by your application.

## Using your own Document Handles

You’re not limited to using Document Handles returned by hooks like `useDocuments` — if it suits your use case (for example: if you know the document ID and type of the document you want to reference), you can certainly write and use your own Document Handles.

### Creating Handles Manually

You can create a handle simply by defining an object that matches the DocumentHandle interface:

**myHandle.tsx**

```tsx
import {useDocumentSyncStatus, type DocumentHandle} from '@sanity/sdk-react'

const myDocumentHandle: DocumentHandle = {
  documentId: 'my-document-id',
  documentType: 'book',
}

const documentSynced = useDocumentSyncStatus(myDocumentHandle)
```

### Using the `createDocumentHandle` Helper (Recommended with Typegen)

The SDK also provides helper functions like `createDocumentHandle` for creating handles.

**myHandle.tsx**

```tsx
import {createDocumentHandle} from '@sanity/sdk' // Or specific package import

const myDocumentHandle = createDocumentHandle({
  documentId: 'my-document-id',
  documentType: 'book',
})
```

While creating handles as plain objects works fine, using the `createDocumentHandle` helper (or similar helpers like `createDatasetHandle`) is recommended, **especially if you are using** [sanity typegen](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen).

Why? When [using the SDK hooks with Typegen](https://reference.sanity.dev/_sanity/sdk-react/Typescript_with_TypeGen_\(experimental\)/), the hooks can provide much richer type information if they know the *specific* literal type of the `documentType` (e.g., knowing it's exactly `'book'`, not just any `string`). The `createDocumentHandle` function helps TypeScript capture this literal type automatically.

If you prefer not to use the helper function when working with Typegen, you can achieve the same result by using `as const` when defining the handle object:

**myHandle.tsx**

```
import {type DocumentHandle} from '@sanity/sdk' // Or specific package import

const myDocumentHandle = {
  documentId: 'my-document-id',
  documentType: 'book',
} as const // <-- Using 'as const' captures the literal type 'book'

// Now, myDocumentHandle.documentType is typed as 'book', not string
```

Using either `createDocumentHandle` or `as const` ensures that subsequent hooks like `useDocument` or `useDocumentProjection` can correctly infer types based on the specific `documentType` provided in the handle when Typegen is enabled.

## An example

Let’s say you’d like to get all of the documents of type `'author'` from a dataset. In your Sanity application, you could use the `useDocuments` hook to do that:

**AuthorList.tsx**

```tsx
import {useDocuments} from '@sanity/sdk-react'

export function AuthorList() {
  const {data: authors} = useDocuments({documentType: 'author'})
}
```

At this point, the `authors` variable contains an array of Document Handles, which, because we’re filtering for only the `author` content type, will look like this:

**result.json**

```json
{ documentId: 'the-document-id', documentType: 'author' }
```

With this information, we could render the number of authors in the dataset — for example:

**AuthorList.tsx**

```tsx
import {useDocuments} from '@sanity/sdk-react'

export function AuthorList() {
  const {data: authors} = useDocuments({documentType: 'author'})

  return <p>There are currently {authors.length} authors in our dataset.</p>
}
```

If we wanted to instead render content from each of these documents — for example, the author’s name — we’d then need to provide each Document Handle to a different hook — for example, `useDocumentProjection`. Note how the document handle is [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in the arguments to the `useDocumentProjection` hook below:

**AuthorDetails.tsx**

```tsx
import {useDocumentProjection, type DocumentHandle, type useDocumentProjectionResults} from '@sanity/sdk-react'

interface NameProjection {
  name: string
}

// The AuthorDetails component will accept a Document Handle for its `document` prop
export function AuthorDetails({document}: {document: DocumentHandle}) {
  const {data}: useDocumentProjectionResults<NameProjection> = useDocumentProjection({
    ...document,
    projection: '{ name }',
  })

  return <p>The author's name is {data.name}</p>
}
```

With this in place, we can then use our `AuthorDetails` component with our previously created `AuthorList` component, and pass along the Document Handles to each instance of the `AuthorDetails` component:

**AuthorList.tsx**

```tsx
import {useDocuments} from '@sanity/sdk-react'

import AuthorDetails from './AuthorDetails.tsx'

export function AuthorList() {
  const { data: authors } = useDocuments({documentType: 'author'})

  return (
    <>
      <p>There are {authors.length} authors in our dataset! Here they are:</p>
      <ul>
        {authors.map(author => (
          <li key={author.documentId}>
            <AuthorDetails document={author} />
          </li>
        )}
      </ul>
    </>
  )
}
```

We’ve now both retrieved a list of Document Handles, and used each of them in a dedicated component with a hook that consumes Document Handles. No matter how many authors there are in our dataset, nor how many fields might exist on our author type, this will keep our application performing as fast as possible by separating the concerns of retrieving author type documents (or rather, Document Handles) and retrieving data from those documents.
