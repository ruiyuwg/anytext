# IDs and Paths

## IDs

Every document in a Sanity dataset must have an ID that identifies it, an arbitrary string of maximum 128 characters made up of the characters `a-zA-Z0-9._-`.  Note that an ID cannot start with a `-` (dash) character, and must not have more than one consecutive `.` character. E.g. `-abcde-12345` would be an invalid ID, as would -`a..bcde-12345`.

The ID is specified in the document’s `_id` property, and must be unique within the dataset. The ID cannot be modified once a document is created, since it is used to track the document’s history and relations.

The Sanity Studio automatically generates a random [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) for new documents (e.g. `189bc292-e41b-42a0-91b5-bfaa33a34af2`), and does not allow you to specify an ID yourself.

> \[!WARNING]
> Gotcha
> For technical reasons, every document ID ever written to a dataset will be retained in our systems until the dataset is deleted, even if the document itself is deleted. For this reason, we strongly recommend you never put personal data or other sensitive data in document IDs.

IDs with multiple segments separated by periods must not include the segment `versions` unless it is the first segment. When the first segment is `versions` the ID must have at least three segments. For example, `versions.abc.xyz` is permitted, but `versions.abc` and  `abc.versions.bar` are not. These restrictions are due to internal implementation requirements.

> \[!WARNING]
> Gotcha
> We advise against using our APIs to create document IDs prefixed with `drafts.` or `versions.` as these are used internally. Such documents may react with platform functionality in unexpected ways.
> See the chapter on Using custom IDs for more.

## Paths

IDs are also considered *paths*, separated by periods.

Sanity also uses paths for storing various internal data in your datasets. For example, internal objects like groups are stored under the `_.` path, and the content studio stores draft documents under the `drafts.` path and Content Release version documents under the `versions.` path.

GROQ provides a `path()` function that allows you to filter documents by path, such as fetching all drafts with `_id in path("drafts.*")` or fetching all versions with `_id in path("versions.**")`. In path expressions, `*` is taken to mean “anything up to the next period”, while `**` means “anything including periods”. The `*` and `**` wildcards are only available at the end of the string. For matching mid-string, use [match](https://www.sanity.io/docs/specifications/groq-operators) instead. The `path()` function currently only works with the `_id` attribute, since it requires special indexing.

To work with drafts, versions, and document ID paths we recommend using the [@sanity/id-utils](https://github.com/sanity-io/id-utils) helper library.

> \[!WARNING]
> Gotcha
> The default, fixed access control rules give unauthenticated users read access to documents under the root path only, which means that it is not possible to make documents under a sub-path (i.e. containing a `.` in the ID) publicly available.

## Using custom IDs

The Content Lake and Studio automatically generate unique identifiers for documents. These system-generated `_id` values are designed to ensure consistency and prevent conflicts across your dataset.
There is **no way to override the default ID logic**, but you can theoretically set custom ID strings for documents created via our APIs or the client.

While it might be tempting to create custom IDs for documents, we recommend a more flexible approach, which offers several key advantages and generally scales better.

\*\*Instead of attempting to override the native ID system, create a custom field in your schema to store your preferred identifier. \*\*

```typescript
// product.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'customId',
      title: 'Custom Identifier',
      type: 'string',
      initialValue: () => yourCustomIdGenerator()
    })
  ]
})
```

By following these guidelines, you can effectively manage document identifiers while maintaining flexibility and adhering to Sanity.io's best practices.

> \[!NOTE]
> Any document ID containing a dot is considered private and has restricted accessibility
> All documents that contain a `.` in their \_id can only be accessed when a user is logged in or a valid authentication token is provided for client and HTTP API calls (minimum `read` permission required).
> The root path (also known as the published ID) is accessible without authentication, while all subpaths are private (such as drafts `drafts.<publishedId>` or releases `versions.<release-name>.<publishedId>`).

### Generating Sanity UUIDs

If you need to generate IDs in a script or function which are compatible with Sanity's system, you can use `uuid()` from the  `@sanity/uuid` package.

```typescript
import {uuid} from '@sanity/uuid'

// Generate a unique ID compatible with Sanity's system
const newDocumentId = uuid()
```
