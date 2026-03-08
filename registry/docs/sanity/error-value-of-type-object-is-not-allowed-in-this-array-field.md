# Error: Value of type "object" is not allowed in this array field

Missing Name Error for Inline Object Definitions

**Toast error message**

```text
Error message:
"Invalid clipboard item
Value of type "object" is not allowed in this array field"
```

## What this error means

This error occurs when your inline `object` definition is missing a `name` property. Even though these inline types are locally scoped and may not be reused elsewhere in your schema, Sanity still requires them to have a name.

## Why names are required

Inline object types need names to support essential Sanity features, including:

- Copy and paste functionality
- GraphQL schema generation
- TypeGen and schema extraction
- Content migrations
- Studio functionality

## How to fix this issue

1. **Add a name property** to your inline object definition in your schema
2. **Migrate existing content** to match the updated schema structure

### Example

**Before (causes error)**

```
{
  type: 'object',
  fields: [
    // your fields
  ]
}

```

**After (fixed):**

```
// helper function optional but very useful 
defineArrayMember({
  name: 'myInlineObject',
  type: 'object',
  fields: [
    // your fields
  ]
})
```

## Migration script example

After adding names to your inline objects, you'll need to migrate existing content to include the `_type` property. Here's an example migration script:

**unnamedObjectMigration.ts**

```
import { at, defineMigration, setIfMissing } from 'sanity/migrate'

export default defineMigration({
  title: 'Add missing _type to anonymous inline objects',
  documentTypes: ['yourDocumentType'], // Replace with your actual document type
  migrate: {
    document(doc, context) {
      const arrayField = doc.yourArrayField as {
        title: string
        _key: string
        _type?: string
      }[]
      
      if (
        doc.yourArrayField &&
        arrayField.some((item) => item._type === undefined)
      ) {
        return arrayField
          .filter((item) => item._type === undefined)
          .map((item) => {
            return at(
              ['yourArrayField', { _key: item._key }, '_type'],
              setIfMissing('yourObjectName'), // Use the name you added to your schema
            )
          })
      }
    },
  },
})
```

### Key points for the migration:

- Replace `yourDocumentType` with the document type containing the anonymous objects
- Replace `yourArrayField` with the name of your array field
- Replace `yourObjectName` with the name you assigned to your inline object
- The migration finds items missing the `_type` property and adds it using `setIfMissing()`
- **Keep migration scopes as small as possible** since you never know in the data what an inline object is, because it does not have a `name`

# AVIF

Images that have the query parameter `auto` set to `format` ([see documentation](https://www.sanity.io/docs/apis-and-sdks/image-urls)) and are requested from a browser that supports the AVIF format will usually get an AVIF returned. There are a few exceptions/quirks:

- The *first few requests* for an AVIF *may* get the "second best option" (WebP if supported, otherwise PNG/JPG depending on the source image). Subsequent requests will *eventually* get an AVIF back. This is done to ensure a speedy response, since encoding AVIFs is a slow process.
- Image requests made prior to the rollout of the AVIF support may already be cached in our CDN and will not return an AVIF response until they expire/fall out of the cache.

In other words: if you are not seeing AVIF images being returned, don't worry —  they should *eventually* return AVIF. You can use `curl` to verify the behavior:

```sh
# Replace the URL with an actual URL from your project.
# Remember to include `?auto=format`!
curl -sS -I \
  -H 'accept: image/avif,image/webp,image/*' \
  'https://cdn.sanity.io/images/:projectId/:dataset/:filename?auto=format' \
  | grep 'content-type:'
```

On the first request, you will likely see `image/webp` returned. After waiting 30 seconds, run the same command again, and you should see `image/avif`. If you don't, wait a little longer and retry. If you still do not see AVIF, ensure that the accept header includes `image/avif` (before other formats) and that the query parameters includes `auto=format`.

## Reporting issues

If you encounter any issues, send an email to [avif@sanity.io](https://www.sanity.iomailto:avif@sanity.io?subject=AVIF%20issue) with comprehensive details on the issue.
