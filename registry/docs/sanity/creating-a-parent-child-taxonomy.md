# Creating a Parent/Child Taxonomy

> \[!NOTE]
> This developer guide was contributed by Simeon Griggs (Principal Educator).

Creating Parent / Child relationships in Sanity goes beyond a `parent` reference field. In this guide we'll include initial value templates, filtered document lists and guides on how to effectively use and query documents that use these taxonomy schema.

In this guide, you'll build:

- A `category` schema type with Parent documents
- A list item in the Desk Structure for each Parent to edit their Children and
- Initial value templates to make sure every new Child document begins with its Parent reference pre-filled

![Sanity Studio Desk Structure with parent/child taxonomy](https://cdn.sanity.io/images/3do82whm/next/9001d9abad6418d1958474d0c02aef03de8a18bf-2800x844.png)

## Taxonomy schema

First, you'll need a schema for our taxonomy called `category`.

This guide will focus on building a simple, two-tier parent/child hierarchy. But the ideas here could be extended further to deeper relationships.

- A **"Parent"** Category is any `category` document that does not have the `parent` field defined.
- A **"Child"** Category is any `category` document that with a parent field reference.

Add the schema below to your Studio's files:

```typescript
// ./schemas/category.js

import {defineField, defineType} from 'sanity'

// Install lucide.dev icons with "npm install lucide-react"
import {TagIcon} from 'lucide-react'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'parent',
      type: 'reference',
      to: [{type: 'category'}],
      // This ensures we cannot select other "children"
      options: {
        filter: '!defined(parent)',
      },
    }),
  ],
  // Customize the preview so parents are visualized in the studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'parent.title',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle: subtitle ? `– ${subtitle}` : ``,
    }),
  },
})

```

Don't forget to register this new schema in `sanity.config.ts`

```typescript
// ./schemas/index.ts

import category from './category'

export const schemaTypes = [
  category,
  // ...all your other schema types
]

```

## Initial Value Templates

Before setting up the Desk Structure, ensure you have [Initial Value Templates](https://www.sanity.io/docs/studio/initial-value-templates) configured in the Studio.

With the right configuration, we can create Document Lists which show all **Children** of a specific **Parent**, and when creating a new document from that list pre-fill the `parent` reference field with that same Parent!

Here's an updated `sanity.config.ts` with a new `category-child` template included.

```typescript
// ./sanity.config.ts

import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'

export default defineConfig({
  // ...all other settings
  schema: {
    // All your schema types
    types: schemaTypes,
    
    // Add this 'category child' template
    templates: (prev) => {
      const categoryChild = {
        id: 'category-child',
        title: 'Category: Child',
        schemaType: 'category',
        parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
        // This value will be passed-in from desk structure
        value: ({parentId}: {parentId: string}) => ({
          parent: {_type: 'reference', _ref: parentId},
        }),
      }
  
      return [...prev, categoryChild]
    },
  },
```

## Setup Structure Builder

[Desk Structure](https://www.sanity.io/docs/studio/structure-builder-reference) is a complex part of the Studio. The code we’ll use here is no exception.

Create a file like the below to load into the `deskTool()` plugin in `sanity.config.ts`.

Notice the `parentChild()` helper function. This has been split out so you can look through it separately.

```typescript
// ./structure/index.ts

import { StructureResolver } from 'sanity/desk'

import parentChild from './parentChild'

export const structure: StructureResolver = (S, context) => S.list()
  .title('Content')
  .items([
    parentChild('category', S, context.documentStore),
    S.divider(),
    // ...all other list items
  ])
```

The `parentChild()` helper function accepts one parameter for the schema – the type name –, but you could extend it further for reuse by including parameters for Titles, Icons, etc.

This desk structure item is more dynamic than most. It will query the `documentStore` for all parent categories and create a `S.listItem()` for each one. Inside those, it will show all category documents with that parent as a reference.

```typescript
// ./src/desk-structure/parentChild.ts

import {DocumentStore} from 'sanity'
import {SanityDocument} from '@sanity/client'
import {StructureBuilder} from 'sanity/desk'
import {map} from 'rxjs/operators'
import {TagIcon} from 'lucide-react'

export default function parentChild(
  schemaType: string,
  S: StructureBuilder,
  documentStore: DocumentStore
) {
  const filter = `_type == "${schemaType}" && !defined(parent) && !(_id in path("drafts.**"))`
  const query = `*[${filter}]{ _id, title }`
  const options = {apiVersion: `2023-01-01`}

  return S.listItem()
    .title('All')
    .icon(TagIcon)
    .child(() =>
      documentStore.listenQuery(query, {}, options).pipe(
        map((parents) =>
          S.list()
            .title('All')
            .menuItems([
              S.menuItem()
                .title('Add')
                .icon(TagIcon)
                .intent({type: 'create', params: {type: schemaType}}),
            ])
            .items([
              // Create a List Item for all documents
              // Useful for searching
              S.listItem()
                .title('All')
                .schemaType(schemaType)
                .child(() =>
                  S.documentList()
                    .schemaType(schemaType)
                    .title('Parents')
                    .filter(filter)
                    // Use this list for displaying from search results
                    .canHandleIntent(
                      (intentName, params) => intentName === 'edit' && params.type === 'category'
                    )
                    .child((id) => S.document().documentId(id).schemaType(schemaType))
                ),
              S.divider(),
              // Create a List Item for Parents
              // To display all documents that do not have parents
              S.listItem()
                .title('Parents')
                .schemaType(schemaType)
                .child(() =>
                  S.documentList()
                    .schemaType(schemaType)
                    .title('Parents')
                    .filter(filter)
                    // Use this list for creating from parents menu
                    .canHandleIntent(
                      (intentName, params) =>
                        intentName === 'create' && params.template === 'category'
                    )
                    .child((id) => S.document().documentId(id).schemaType(schemaType))
                ),
              S.divider(),
              // Create a List Item for each parent
              // To display all its child documents
              ...parents.map((parent: SanityDocument) =>
                S.listItem({
                  id: parent._id,
                  title: parent.title,
                  schemaType,
                  child: () =>
                    S.documentTypeList(schemaType)
                      .title('Children')
                      .filter(`_type == $schemaType && parent._ref == $parentId`)
                      .params({schemaType, parentId: parent._id})
                      // Use this list for creating from child menu
                      .canHandleIntent(
                        (intentName, params) =>
                          intentName === 'create' && params.template === 'category-child'
                      )
                      .initialValueTemplates([
                        S.initialValueTemplateItem('category-child', {
                          parentId: parent._id,
                        }),
                      ]),
                })
              ),
            ])
        )
      )
    )
}

```

Note that accessing the `documentStore` directly like this is uncommon and on a larger dataset may produce undesirable results.

### Pre-flight check

- Now you should be able to view and edit a list of **Parent** documents, as well as click into **Parents** individually to see a list of **Child** documents.
- Test the Initial Value Template by creating a new **Category** document while viewing a list of **Children** documents, the `parent` reference should be pre-filled.

## Using taxonomy references

Consider when using these taxonomies to restrict references to Children.

For example, in a schema of `post`, instead of an array of references where the author may add Parent and Child category references – have them select only "Child" documents.

```typescript
// ./schemas/post.ts

import {FileText} from 'lucide-react'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      options: {filter: 'defined(parent)'},
    }),
    // ...other fields
  ],
})

```

Then when querying for a post, "follow" the Child category up to retrieve its parent.

```groq
*[_type == "post"]{
  category->{
    parent->
  }
}
```

## Dynamically creating Parent and Child slugs

Each `category` document has a slug, but in a hierarchal website structure you may wish for Children to be nested inside Parents.

With some a clever GROQ function, we can do that from inside our query.

Here's a basic query for all `category` titles and slugs:

```groq
*[_type == "category"]{
  title,
  "parentSlug": parent->slug.current,
  "slug": slug.current
}
```

The response will look something like this. Which has the right data, but requires us to post-process the results to build the slug we need.

```json
[
  {
    title: "Liquorice",
    slug: "liquorice"
  },
  {
    title: "Dutch",
    parentSlug: "liquorice",
    slug: "dutch"
  }  
]
```

Instead, using the [select function](https://www.sanity.io/docs/specifications/groq-functions) in GROQ allows us to return a different value depending on a condition. In this case, whether a category has a parent field or not.

`select` works by returning whichever condition returns true first, and resolves the last item if nothing returns true.

The first condition `defined(parent)` will be true for any Child category. Otherwise, the fallback is the document's own slug.

```groq
*[_type == "category"]{
  title,
  "slug": select(
    defined(parent) => parent->slug.current + "/" + slug.current,
    slug.current
  )
}
```

This would now instead return data that looks like this:

```json
[
  {
    title: "Liquorice"
    slug: "liquorice"
  },
  {
    title: "Dutch"
    slug: "liquorice/dutch"
  }  
]
```

## Conclusion

Hierarchical document schema-like categories express the power of structured content, strong references, and GROQ queries.

Your authors should now be able to confidently create and use these taxonomical documents throughout your content!
