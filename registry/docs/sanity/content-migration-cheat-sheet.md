# Content migration cheat sheet

Below are content migration code snippets you can copy-paste and fit for your purposes. Requires familiarity with Sanity's schema and content migration tooling.

[Introduction to schema change management](https://www.sanity.io/docs/content-lake/schema-and-content-migrations)

[Important considerations for schema and content migrations](https://www.sanity.io/docs/content-lake/important-considerations-for-schema-and-content-migrations)

[Reference docs for working with content migrations in the CLI](https://www.sanity.io/docs/cli-reference/cli-migration)

[Reference docs for running validations in the CLI](https://www.sanity.io/docs/cli-reference/documents)

[TypeScript reference for sanity/migration](https://www.sanity.io/docs/reference/api/sanity/migrate/append)

## Rename a field in a document

```typescript
import {defineMigration, at, setIfMissing, unset} from 'sanity/migrate'

export default defineMigration({
  title: 'Rename field from "oldFieldName" to "newFieldName"',
  migrate: {
    document(doc, context) {
      return [
        at('newFieldName', setIfMissing(doc.oldFieldName)),
        at('oldFieldName', unset())
      ]
    }
  }
})

```

## Add a field with default value to all documents missing the field

Note: This example uses [an async generator pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) (`*migrate`) to read out the document ID (`_id`) one by one and return the patch. This prevents the script from loading all documents into memory.

```typescript
import {defineMigration, patch, at, setIfMissing} from 'sanity/migrate'

export default defineMigration({
  title: 'Add title field with default value',
  // documentTypes: ['post', 'article'], // only apply to certain document types
  async *migrate(documents, context) {
    for await (const document of documents()) {
      yield patch(document._id, [
        at('title', setIfMissing('Default title')),
      ])
    }
  }
})

```

## Migrate a reference field into an array of references

```tsx
import { defineMigration, at, setIfMissing, append, unset} from 'sanity/migrate'

export default defineMigration({
  title: 'Convert a reference field into an array of references',
	documentTypes: ['product'],
	filter: 'defined(category) && !defined(categories)',
  migrate: {
    document(product) {
      return [
        at('categories', setIfMissing([])),
        // use `prepend()` to insert at the start of the category array
        at('categories', append(product.category)),
        at('category', unset())
      ]
    }
  }
})

```

## Convert a string field into a Portable Text array

```typescript
import {pathsAreEqual, stringToPath} from 'sanity'
import {defineMigration, set} from 'sanity/migrate'

const targetPath = stringToPath('some.path')

export default defineMigration({
  title: 'Convert a string into a Portable Text array',

  migrate: {
    string(node, path, ctx) {
      if (pathsAreEqual(path, targetPath)) {
        return set([
          {
            style: 'normal',
            _type: 'block',
            children: [
              {
                _type: 'span',
                marks: [],
                text: node,
              },
            ],
            markDefs: [],
          },
        ])
      }
    },
  },
})

```

## Convert a Portable Text field into plain text

```typescript
import {pathsAreEqual, stringToPath, type PortableTextBlock} from 'sanity'
import {defineMigration, set} from 'sanity/migrate'

// if the portable text field is nested, specify the full path to it
const targetPath = stringToPath('some.path')

function toPlainText(blocks: PortableTextBlock[]) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return (block.children as {text: string}[]).map((child) => child.text).join('')
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  )
}
export default defineMigration({
  title: 'A Portable Text field into plain text (only supporting top-leve',
  documentTypes: ['pt_allTheBellsAndWhistles'],

  migrate: {
    // eslint-disable-next-line consistent-return
    array(node, path, ctx) {
      if (pathsAreEqual(path, targetPath)) {
        return set(toPlainText(node as PortableTextBlock[]))
      }
    },
  },
})

```

## Migrate inline objects into references

This example shows how to convert an inline object in an array field into a new document and replace the array item with a reference to that new document.

You can also use this in Portable Text fields and use `.filter({_type}) => _type == "blockType")` to convert only specific custom blocks.

```tsx
// npm install lodash
import {deburr} from 'lodash'
import {at, createIfNotExists, defineMigration, replace, patch} from 'sanity/migrate'

/**
 * if you want to make sure you don't create many duplicated
 * documents from the same pet, you can generate an ID for it 
 * that will be shared for all pets with the same name
 **/
function getPetId(pet: {name: string}) {
  return `pet-${deburr(pet.name.toLowerCase())}`
}

export default defineMigration({
  title: 'Convert an inline object in an array into a document and reference to it',
  documentTypes: ['human'],
  filter: 'defined(pets) && count(pets[]._ref) > 0',
  migrate: {
    document(human) {
      const currentPets = human.pets
      // migrate any pet object to a new document
      if (Array.isArray(currentPets) && currentPets.length > 0) {
        return currentPets
          // skip pets that have already been converted to a reference
          .filter((pet) => !pet._ref)
          .flatMap((pet) => {
            const petId = getPetId(pet)

            // avoid carrying over the array _key to the pet document
            const {_key, ...petAttributes} = pet

            return [
              createIfNotExists({
                _id: petId,
                _type: 'pet',
                ...petAttributes,
              }),
							patch(human._id, at(['pets'], replace([{_type: 'reference', _ref: petId}], {_key}))),
            ]
          })
      }
    },
  },
})

```

## Delete all documents by its type

```typescript
import {at, defineMigration, del, setIfMissing, unset} from 'sanity/migrate'

export default defineMigration({
  title: 'Delete posts and pages',
  documentTypes: ['post', 'page'],
  migrate: {
    document(doc) {
      // Note: If a document has incoming strong references, it can't be deleted by this script.
      return del(doc._id)
    },
  },
})

```

## Migrate a document type

The `_id` and `_type` attributes/fields on *documents* are *immutable; t*hey can't be changed with a mutation like other fields once they are set. There is no straightforward way to change these using the content migration tooling.

The most controlled way of approaching the migration of a document `_type` and `_id` is to:

1. Export your dataset.
2. Update all target documents with new `_id` and `_type` values.
3. Update references in the dataset to point to the new document `_id` values.
4. Import the modified export file(s).
5. Delete the old documents.

### Export and update

First export the data, update it locally, then import it back to Sanity.

1. Export your dataset (`sanity dataset export <dataset>, `add `--no-assets` if you're not planning to do anything with these)
2. Untar the export file (`tar -xzvf <dataset>.tar.gz`)
3. Open the NDJSON of your dataset (`<dataset>.ndjson`)
4. Use your method of choice to find and replace all the suitable document information in the NDJSON file.
5. Optional: If you plan to import into a clean dataset, you can delete all of the old documents from the NDJSON file. If you're importing back into the same dataset, deleting the documents from the NDJSON file won't delete them from the existing data.
6. Re-import your dataset with the `--replace` flag (`sanity dataset import <dataset>.ndjson <dataset> --replace`)

> \[!NOTE]
> Only changing the type?
> If you're only changing the type and want to keep the `_id` values, you may want to perform the migration described in the next step before importing the modified ndjson file. Otherwise, you'll run into problems attempting to override the existing `_id` for each document.

### Create a migration to remove old documents

If you're editing an existing dataset, you'll need to remove the old documents with a migration. If you're replacing every document matching a type, you can use the `documentTypes` without a filter. Otherwise, you'll want to filter by additional criteria like a list of `_id` values.

```typescript
import { defineMigration, delete_ } from "sanity/migrate";

export default defineMigration({
  title: "Delete documents",
  documentTypes: ["oldType"],
  // and/or filter just the affected documents.
  // You may wish to import these dynamically.
  filter: "_id in ['id1', 'id2']",

  migrate: {
    document(doc) {
      return delete_(doc._id);
    },
  },
});
```

Always ensure you have a backup of your dataset and triple-check before changing content in production.

## Delete file assets over a certain file size

This migration will attempt to delete any file asset metadata documents over 50MB in size. Deleting the metadata document will also delete the asset from your dataset.

- Update `documentTypes` to include `sanity.imageAsset` to remove images
- Update `filter` to adjust the maximum file size (in bytes)
- **Note:** The migration will fail if there are any references to the metadata document. The second `filter` example will filter out any large file assets already referenced by other documents.

```typescript
import { defineMigration, delete_ } from "sanity/migrate";

export default defineMigration({
  title: "Delete large files",
  documentTypes: ["sanity.fileAsset"],
  // Size is greater than 50MB
  filter: "size > 50000000",
  // Additionally only target unreferenced assets
  // filter: "size > 50000000 && count(*[references(^._id)]) == 0",

  migrate: {
    document(doc) {
      return delete_(doc._id);
    },
  },
});
```

## Migrate a string to a localized i18n array

This migration migrates string fields to an array of localized fields compatible with the [sanity-plugin-internationalized-array](https://github.com/sanity-io/sanity-plugin-internationalized-array) plugin. Follow the plugin's instructions for installation and setup, then update and run the migration below to   to match your field and document types.

**index.ts**

```
import {at, set, defineMigration} from 'sanity/migrate'

export default defineMigration({
  title: 'i18n-array',
  documentTypes: ["post"], // update with your document types

  migrate: {
    document(doc, context) {
      // update with your field path instead of 'greeting'
      if (doc.greeting && typeof doc.greeting === 'string') {
        return at('greeting', set([
          {
            _key: 'en',
            _type: 'internationalizedArrayStringValue',
            value: doc.greeting,
          },
          // optionally, automate translation and add additional
          // languages in the same shape as above.
        ]))
      }
    },
  },
})

```

**Shape Before**

```json
{
  "greeting": "Hello"
}
```

**Shape After**

```json
{
  "greeting": [
    {
      "_key": "en",
      "_type": "internationalizedArrayStringValue",
      "value": "Hello"
    }
  ]
}
```

## Backfill missing initial values

This migration fills empty `publishedAt` fields with the `_createdAt` value from the document. Patterns like this are useful for backfilling fields that may have started without an `initialValue` set in the schema, but evolved to need one.

**index.ts**

```
import {at, defineMigration, setIfMissing} from 'sanity/migrate'

export default defineMigration({
  title: 'backfill-initial',
  // update with your target documents and add any filters
  documentTypes: ["post"],

  migrate: {
    document(doc) {
      // update with your field path and value
      return at('publishedAt', setIfMissing(doc._createdAt))
    },
  },
})

```

We don't recommend reading the schema manifest to retrieve initial values, as it is not a stable shape. For often-used initial values that require computation, it may be helpful to export a function and import it where needed—including in the migration file.

## Sort array by reference property

It's generally best to adjust the order of items in an array with [GROQ's sorting abilities](https://www.sanity.io/docs/specifications/groq-pipeline-components). In instances where you want to change the order of the data directly, you can use a migration.

The `document` and `array` methods are both capable of sorting an array. This example uses `document`. Due to the way documents store references, you'll need to follow the references in order to retrieve additional details. This example orders by `name`.

Query the document, then use a sort function to re-order the array. There are many ways to do this, but make sure to keep the `_key` values aligned with the correct `_ref` values.

**index.ts**

```
import {at, defineMigration, set} from 'sanity/migrate'

const AUTHORS_QUERY = `*[_id == $id] { authors[]->{_id, name}}`

interface Author {
  _id: string
  name: string
}

interface AuthorReference {
  _type: 'reference'
  _ref: string
  _key: string
}

function sortReferenceByName(references: AuthorReference[], authors: Author[]): AuthorReference[] {
  // sort the authors by name, match the author _id to the reference _ref, and return the sorted references
  // Build a map for quick lookup of author names by _id
  const authorNameMap = new Map(authors.map(author => [author._id, author.name || '']))
  return references.sort((a, b) => {
    const nameA = authorNameMap.get(a._ref) || ''
    const nameB = authorNameMap.get(b._ref) || ''
    return nameA.localeCompare(nameB)
  })

}

export default defineMigration({
  title: 'order reference array',
  documentTypes: ["post"],

  migrate: {
    async document(doc, context) {
      if (!doc.authors) {
        return
      }
      const response = await context.client.fetch(AUTHORS_QUERY, {id: doc._id})    
      const sortedReferences = sortReferenceByName(doc.authors as AuthorReference[], response[0].authors as Author[])
      return at('authors', set(sortedReferences))
    }
  },
})

```

## Deduplicate arrays

Use the `array` method and an array filtering method to remove duplicates from an array.

Here are two methods for deduping the same array of tags. You can further enhance the check in the second example to accommodate arrays of objects instead of strings.

**Using Set**

```
import {defineMigration, set} from 'sanity/migrate'
const PATH_NAME = 'tags'
export default defineMigration({
  title: 'dedupe arrays',
  documentTypes: ["post"],
  migrate: {
    array(node, path, context) {
      if (path.includes(PATH_NAME)) {
        const cleanArray = [...new Set(node)]
        return set(cleanArray)
      }
    },
  },
})

```

**Using reduce**

```
import {defineMigration, set} from 'sanity/migrate'
const PATH_NAME = 'tags'
export default defineMigration({
  title: 'dedupe arrays',
  documentTypes: ["post"],
  migrate: {
    array(node, path, context) {
      if (path.includes(PATH_NAME)) {
        const cleanArray = node.reduce((acc: string[], item: string) => {
          if (!acc.includes(item)) {
            acc.push(item)
          }
          return acc
        }, [])
        return set(cleanArray)
      }
    },
  },
})

```

You can limit the filtering to specific arrays by validating the path, like in the example above, or omit the condition to apply it to all arrays.

## Convert URLs to reference links

It's common during a migration to end up with many traditional annotation links that could be references to documents in your dataset. This migration is often run after importing documents, as they'll need to exist and have IDs that you can reference.

This example is a simplified version of one we use in our documentation dataset to pick up any stray URLs that should really be references. It looks for `link` annotations in the `content` field of `post` documents.

**index.ts**

```
import {defineMigration, MigrationContext, set} from 'sanity/migrate'

// A helper to take a URL and context, then find an associated document matching it
async function getReference(url: URL, context: MigrationContext): Promise<string | false> {
  // Only look for published documents
  const publishedClient = context.client.withConfig({apiVersion: '2025-09-30', perspective: 'published' })

  const { pathname } = url
  // Clean up the URL over a few steps to pull the slug
  const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  const segments = cleanPath.split('/')
  const slug = segments[segments.length - 1]
  // search by slug
  const query = `*[_type == "post" && slug.current == $slug]`
  const post = await publishedClient.fetch(query, {slug})
  if (post) {
    // return just the _id to use as a reference
    return post._id as string
  }
  return false

}

export default defineMigration({
  title: 'link to internal',
  documentTypes: ["post"],

  migrate: {
    async object(node, path, context) {
      if (!path.includes('content')) return

      // Confirm the object is the type of link you want to edit.
      // Check type, confirm it's not internal, and confirm it has a URL.
      if (node._type === 'link' && node?.isInternal !== true && node?.url) {

        // Parse the URL. Set a base URL if you ever use relative links.
        const originalUrl = URL.parse(node?.url as string, 'https://your-domain.com')

        // if the URL didn't parse, return
        if (originalUrl === null) return

        // confirm it meets your criteria, such as subdomain, etc.
        // For example, check if it's on your hostname
        if (originalUrl.hostname === 'your-domain.com' || originalUrl.hostname === 'www.your-domain.com') {
          const reference = await getReference(originalUrl, context)
          if (reference) {
            // if the reference is found, replace the existing internal link
            // with a new reference link
            return set({
              // preserve the original _key value.
              _key: node._key,
              _type: 'link',
              isInternal: true,
              reference: {
                _ref: reference,
                _type: 'reference',
              }
            })
          }
        }
      }
    },
  },
})

```

If you anticipate a large quantity of repeated links, you'll want to use a form of caching to avoid making new API calls for links you already have reference data for.

## Migrate using content releases

Running a migration in-place requires coordination between your dataset, Studio, and front end. You can help remove some of the complexity of this by migrating changes into a content release instead of writing directly to the existing documents.

This example makes a small schema change, but the principle applies to entire document rewrites as well.

First create a new release and obtain the release name. Learn more about release documents in the [content releases API documentation](https://www.sanity.io/docs/apis-and-sdks/content-releases-api). Then use the release name to create version documents in the release as shown below.

**index.ts**

```
import {defineMigration, createOrReplace} from 'sanity/migrate'
const RELEASE_ID = 'release-id'

export default defineMigration({
  title: 'content release migration',
  documentTypes: ["post"],
  // Only run on published documents. If you use drafts, you may want to omit draft documents as well.
  filter: `!(_id in path('versions.**'))`,
  migrate: {
    async document(doc, context) {
      const newDoc = {
        _type: 'post',
        _id: `versions.${RELEASE_ID}.${doc._id}`,
        title: doc.title,
        content: doc.body,
        // other new, updated, or fields you want to carry over
      }
      return [createOrReplace(newDoc)]
    },
    
  },
})

```

This example uses `createOrReplace`, but you can also use `createIfNotExists` if you don't want to overwrite any existing version documents.

## Shift portable text block headings

Sometimes you allow editors to use headings that aren't intended. You can resolve this on the front-end, but you can also edit blocks directly. This example shifts all headings inside a portable text block down a level.

**index.ts**

```
import {defineMigration, set} from 'sanity/migrate'

export default defineMigration({
  title: 'shift-headings',
  documentTypes: ["post"],

  migrate: {
    object(node, path, context) {
      if (node._type === 'block') {
        if (node.style === 'h1') {
          return set({
            ...node,
            _type: 'block',
            style: 'h2',
          })
        }
        if (node.style === 'h2') {
          return set({
            ...node,
            _type: 'block',
            style: 'h3',
          })
        }
        if (node.style === 'h3') {
          return set({
            ...node,
            _type: 'block',
            style: 'h4',
          })
        }
        if (node.style === 'h4') {
          return set({
            ...node,
            _type: 'block',
            style: 'h5',
          })
        }
      }
    },
  },
})
```

## Correct incorrect heading nesting

Much like the shifted heading migration above, this example aims to fix mismatched heading hierarchy. By using `array` and checking the path, we can narrow to only include a portable text (block) array. Adjust your conditional checks as needed for your schema.

This example ensures that headings cannot skip. For example, and H4 cannot exist without an H3 before it.

**index.ts**

```
import {defineMigration, set} from 'sanity/migrate'

const levelMap = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
}

export default defineMigration({
  title: 'correct-headings',
  documentTypes: ["post"],

  migrate: {
    array(node, path, context) {
      if (path.includes('content') && node.length > 1) {
        // The current level, starting at h1 (1)
        let level = 1
        const newNodes = node.map((item: any, index: number) => {
          // Check if the block is a heading
          if (Object.keys(levelMap).includes(item.style)) {
            // for headings to start at h2, as we want to use a separate field for h1 titles
            if (levelMap[item.style] === 1) {
              level = 2
            // If the block's level is more than 1 greater than the current level,
            // shift it to be one level higher than current level instead.
            } else if (levelMap[item.style] > level + 1) {
              level++
            // If the block's level is less than the current level or the same level,
            // set level to current block's level. We can't know for sure how far back it it should go.
            } else {
              level = levelMap[item.style]
            } 
            return {
              ...item,
              style: `h${level}`,
            }
          } else {
            // non-headings are returned as normal
            return item
          }
        })
        return set(newNodes)
      }
    },
  },
})

```

This logic can't infer intent, so it only corrects skipped headings, but doesn't know when to break out of a nested hierarchy.
