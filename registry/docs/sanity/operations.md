# Operations

Agent Actions use the `targetDocument` property to establish how they write to your dataset.

> \[!TIP]
> Generate and Patch support initial values
> Generate and Patch operations also allow for the `initialValues` property. With it, you can set initial values similar to how you would with [initial values templates](https://www.sanity.io/docs/studio/initial-value-templates). See the Generate examples below.

## Default behavior

By default, **Agent Actions will never mutate a published document**. Whenever you supply a published ID, the action creates a draft first before applying any changes. If a draft already exists, it will use the existing draft as the source.

To change this behavior, you can supply `forcePublishedWrite: true` to the action request. For example:

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'publishedId',
  targetDocument: {
    operation: 'edit',
    _id: 'publishedId'
  },
  forcePublishedWrite: true,
  instruction: 'Replace "Create" with "Canvas"',
})
```

Documents that use `liveEdit: true` in their schema are treated as `forcePublishedWrite: true` by default.

For content release version documents, the operations will only create version documents when a version ID is paired with an operation that creates a new document.

> \[!TIP]
> Check the returned \_id for clarity
> You can check the returned `_id` of the response as needed to confirm the document's published state. This pairs well with the helper functions in [@sanity/id-utils](https://github.com/sanity-io/id-utils) to confirm various document types.

## Operation types

### `edit`

Requires an `_id` for an existing document. This is the verbose version of omitting  `targetDocument` and only relying on `documentId`.

**Transform**

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'drafts.id',
  targetDocument: {
    operation: 'edit',
    _id: 'drafts.id'
  },
  instruction: 'Replace "Create" with "Canvas"',
})
```

**Generate**

```
await client.agent.action.generate({
  schemaId: 'your-schema-id',

  // In generate, `edit` is equivalent to using `documentId`
  // without a targetDocument.
  targetDocument: {
    operation: 'edit',
    _id: 'drafts.id',
    
  },
  instruction: 'Create a blog post about Sanity, the Content Operating System',
})
```

**Translate**

```
await client.agent.action.translate({
  schemaId: 'your-schema-id',
  documentId: 'fromLanguageDoc.id',
  
  targetDocument: {
    operation: 'edit',
    _id: 'draft.id'
  },
  
  fromLanguage: { id: 'en-GB',title: 'English' },
  toLanguage: { id: 'no-NB', title: 'Norwegian Bokmål' },
}
```

**Patch**

```
await client.agent.action.patch({
  schemaId: 'sanity.workspace.schema.production',
  targetDocument: {
    operation: 'edit',
    _id: 'documentId'
  },
  target: {path: 'title', operation: 'set', value: 'New title'}
})
```

### `create`

The `_id` is optional. If omitted, a draft document is created. You can provide a valid version ID as the `_id` to create a release version of a document.

**Transform**

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'document-id',
  targetDocument: {
    operation: 'create',
    _id: 'new-document-id' // optional
  },
  instruction: 'Replace "Create" with "Canvas"',
})
```

**Generate**

```
await client.agent.action.generate({
  schemaId: 'your-schema-id',
  
  targetDocument: {
    operation: 'create',
    _type: 'post',
    _id: '<document-id>', // optional
    // Use initialValues to set fields when the document is created.
    initialValues: {
      author: {
        _type: 'reference',
        _ref: '<author-reference-id>'
      }
    }
    
  },
  instruction: 'Create a blog post about Sanity, the Content Operating System',
})
```

**Translate**

```
await client.agent.action.translate({
  schemaId: 'your-schema-id',
  documentId: 'fromLanguageDoc.id',
  
  targetDocument: {
    operation: 'create',
    _id: 'toLanguage.id' // optional
  },
  
  fromLanguage: { id: 'en-GB',title: 'English' },
  toLanguage: { id: 'no-NB', title: 'Norwegian Bokmål' },
}
```

**Patch**

```
await client.agent.action.patch({
  schemaId: 'sanity.workspace.schema.production',
  targetDocument: {
    operation: 'create',
    type: '_documentType',
    _id: 'documentId'
  },
  target: {path: 'title', operation: 'set', value: 'New title'}
})
```

### `createOrReplace`

If you provide an existing `_id`, the new document will override it. If the provided `_id` doesn't exist, the Agent Action will create a new document with that ID.

**Transform**

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'document-id',
  targetDocument: {
    operation: 'createOrReplace',
    _id: 'new-document-id'
  },
  instruction: 'Replace "Create" with "Canvas"',
})
```

**Generate**

```
await client.agent.action.generate({
  schemaId: 'your-schema-id',
  
  targetDocument: {
    operation: 'createOrReplace',
    _type: 'post',
    _id: '<document-id>', // if the ID doesn't exist, a new document is created with the ID. If it does, the new document will replace the old.
    // Optional: Use initialValues to set fields when the document is created.
    initialValues: {
      author: {
        _type: 'reference',
        _ref: '<author-reference-id>'
      }
    }
    
  },
  instruction: 'Create a blog post about Sanity, the Content Operating System',
})
```

**Translate**

```
await client.agent.action.translate({
  schemaId: 'your-schema-id',
  documentId: 'fromLanguageDoc.id',
  
  targetDocument: {
    operation: 'createOrReplace',
    _id: 'toLanguage.id'
  },
  
  fromLanguage: { id: 'en-GB',title: 'English' },
  toLanguage: { id: 'no-NB', title: 'Norwegian Bokmål' },
}
```

**Patch**

```
await client.agent.action.patch({
  schemaId: 'your-schema-id',
  targetDocument: {
    operation: 'createOrReplace',
    type: '_documentType',
    _id: 'documentId'
  },
  target: {path: 'title', operation: 'set', value: 'New title'}
})
```

### `createIfNotExists`

If the provided `_id` does not exist, a document is created using the `documentId` as the source. If it does exist, it used the provided `_id` document as the source.

**Transform**

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'document-id',
  targetDocument: {
    operation: 'createIfNotExists',
    _id: 'new-document-id'
  },
  instruction: 'Replace "Create" with "Canvas"',
})
```

**Generate**

```
await client.agent.action.generate({
  schemaId: 'your-schema-id',
  
  targetDocument: {
    operation: 'createIfNotExists',
    _type: 'post',
    _id: '<document-id>', // if the ID doesn't exist, a new document is created with the ID.
    // Optional: Use initialValues to set fields when the document is created.
    initialValues: {
      author: {
        _type: 'reference',
        _ref: '<author-reference-id>'
      }
    }
    
  },
  instruction: 'Create a blog post about Sanity, the Content Operating System',
})
```

**Translate**

```
await client.agent.action.translate({
  schemaId: 'your-schema-id',
  documentId: 'fromLanguageDoc.id',
  
  targetDocument: {
    operation: 'createIfNotExists',
    _id: 'toLanguage.id'
  },
  
  fromLanguage: { id: 'en-GB',title: 'English' },
  toLanguage: { id: 'no-NB', title: 'Norwegian Bokmål' },
}
```

**Patch**

```
await client.agent.action.patch({
  schemaId: 'your-schema-id',
  targetDocument: {
    operation: 'createIfNotExists',
    type: '_documentType',
    _id: 'documentId'
  },
  target: {path: 'title', operation: 'set', value: 'New title'}
})
```
