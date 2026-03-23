# Incoming reference decoration

Studio's inline incoming references feature allows you to define a component that will display any incoming references to the current document.

Unlike a field containing an array of references, these incoming references are not part of the document and will display automatically when new references are made.

Prerequisites:

- Studio v5.8.0 or later is required to use incoming reference fields.

## Add an inline incoming reference decoration

To add incoming references to a field in your schema, import and use the `defineIncomingReferenceDecoration` helper.

**authorSchema.ts**

```
import {defineType} from 'sanity'
import {defineIncomingReferenceField} from 'sanity/structure'

export default defineType({
  name: 'author',
  type: 'document',
  renderMembers: (members) => {
   return [
     ...members,  // Places the decoration after all existing fields.
     defineIncomingReferenceDecoration({
       name: 'incomingReferences',
       title: 'Incoming references',
       types: [{type: 'author'}],
     }),
   ]
  },
 fields: [],
})
```

This adds a component into the document that looks like the following:

![The incoming reference interface showing "Posts by this author"](https://cdn.sanity.io/images/3do82whm/next/1ef34b6c429e5c08d2b8728c383069381685da05-1334x704.png)

### Create and reference new documents

You can allow the "Create" button to pre-populate a new document with a reference to the source document.

This feature can leverage the initialValue of a new document to set the reference. On the schema for the referencing document type, use the `isIncomingReferenceCreation` helper to check if an incoming reference field is creating the new document. Then pass in the reference to the appropriate field. In this example, the `book` document type references the `author` type.

**bookSchema.ts**

```
import {defineType} from 'sanity'
import {isIncomingReferenceCreation} from 'sanity/structure'

export defineType({
  name: "book",
  fields: [
    // ...
  ],
   initialValue: (params) => {
    return {
      author: isIncomingReferenceCreation(params) ? params.reference : undefined,
    }
  },
)
```

### Add reference to existing documents

If you have existing documents that you want to search/assign to the current document, use the `onLinkDocument` option.

**index.ts**

```
import {defineType} from 'sanity'
import {defineIncomingReferenceDecoration} from 'sanity/structure'

export default defineType({
  name: 'author',
  type: 'document',
  renderMembers: (members) => {
   return [
     ...members, 
     defineIncomingReferenceDecoration({
      name: 'booksCreatedByThisAuthor',
      types: [{type: 'book'}],
      onLinkDocument: (document, reference) => {
        return {
         ...document,
         author: reference, // <-- the reference is passed to the document
        }
      },
    }),
   ]
  },
  fields: [
    defineField({type: "string", name: "name"}),
   // ...
  ]
})
```

### Create custom actions

You can also pass custom actions to the incoming reference field. This format is similar to [document actions](https://www.sanity.io/docs/studio/document-actions), but occurs in the `defineIncomingReferenceDecoration` helper. This example creates an action in `ReferenceActions.tsx` and applies it in the `actions` array.

**authorSchema.ts**

```
import {defineType} from 'sanity'
import {defineIncomingReferenceDecoration} from 'sanity/structure'
import {RemoveReferenceAction} from './ReferenceActions'

export default defineType({
  name: 'author',
  type: 'document',
  renderMembers: (members) => {
   return [
     ...members,  
     defineIncomingReferenceDecoration({
       name: 'incomingReferences',
       title: 'Incoming references',
       types: [{type: 'author'}],
       actions: [RemoveReferenceAction]
     }),
   ]
  },
 fields: [],
})
```

**ReferenceActions.tsx**

```
import {type IncomingReferenceAction} from 'sanity/structure'
import {getDraftId} from 'sanity'
import {useState} from 'react'

export const RemoveReferenceAction: IncomingReferenceAction = ({document, getClient}) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const client = getClient({apiVersion: '2025-10-01'})

  return {
    label: 'Remove reference',
    icon: TrashIcon,
    tone: 'critical',
    dialog: dialogOpen
      ? {
          type: 'confirm',
          message: 'Are you sure you want to remove the reference?',
          onCancel: () => setDialogOpen(false),
          onConfirm: async () =>
            await client.createOrReplace({
              ...document,
              _id: getDraftId(document._id),
              author: undefined, // Removes the reference from the document
            }),
        }
      : null,
    onHandle: () => setDialogOpen(true),
  }
}

```

### Support cross-dataset references

Cross-dataset references are also supported. You'll need to supply additional details as shown below.

**index.ts**

```
import {defineType} from 'sanity'
import {defineIncomingReferenceDecoration} from 'sanity/structure'

export default defineType({
  name: 'author',
  type: 'document',
  renderMembers: (members) => {
   return [
     ...members,
     defineIncomingReferenceDecoration({
       name: 'incomingReferencesCrossDataset',
       title: 'Incoming references CrossDataset',
        types: [
          {
            type: 'book',
            dataset: 'test-us',
            title: 'Book in test-us dataset',
            studioUrl: ({id, type}) => {
              return type ? `/us/intent/edit/id=${id};type=${type}` : null
            },
            preview: {
              select: {title: 'title', media: 'coverImage', subtitle: 'publicationYear'},
            },
          },
        ]
     }),
   ]
  },
 fields: [],
})

```
