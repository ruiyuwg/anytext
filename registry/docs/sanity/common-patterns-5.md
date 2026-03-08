# Common patterns

Transform offers an interface to enhance Sanity documents using large language models (LLMs). This document showcases a collection of common patterns and concepts.

Prerequisites:

- Complete the [Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart).
- `@sanity/client` v7.1.0 or higher and an environment to run client requests.
- API version vX or later for any requests using Generate.

Many examples in this document use `@sanity/client` and expect that you've installed and configured it for your project. If your client is named something other than `client`, update the code examples accordingly.

Here's an example of the client implementation:

```typescript
// client.ts
import { createClient } from "@sanity/client";
export const client = createClient({
  projectId: '<project-id>',
  dataset: '<dataset-name>',
  useCdn: 'true',
  apiVersion: 'vX',
  token: '<read-write-token>'
})
```

Then, import `client` before using the examples below.

## Edit a full document

Perform in-place edits on a document. This will not create a new document. Providing a published `documentId` will update the published document.

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'drafts.id',
  instruction: 'Replace "Create" with "Canvas"',
})
```

## Edit part of a document

Perform an in-place edit on only part of a document.

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'drafts.id',   
  instruction: 'Replace "Create" with "Canvas"',
  target: {path: ['body']} // only transforms body (and any sub-fields/items)
})
```

## Multiple instruction parameters

This instruction pulls one paramater from a GROQ query, and another from a field, `year`, in the source document and creates a new draft with the changes.

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'document-id',
  targetDocument: {
    operation: 'create',
  },
  instruction: 'Add $fieldValue to every instance of $groqTitle',
  instructionParams: {
    groqTitle: {
      type: 'groq',
      query: '*[_id==$id].title',
      params: {
        id: 'abc123'
      }
    },
    fieldValue: {
      type: 'field',
      path: 'year'
    }
  }
})
```

## Apply instructions to individual fields

This transformation has a top-level instruction, but sets an individual instruction for the title field using `target`.

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'document-id',
  targetDocument: {
    operation: 'create',
  },
  instruction: 'Replace "$old" with "$new"',
  instructionParams: {
    new: 'lifeform from another planet',
    old: 'alien'
  },
  target: [
    {
      path: ['title'],
      instruction: 'Replace "$old" with "$new". Use title-case.'
    },
    { path: 'body' } // anything in or below 'body' uses the default instruction.
  ]
})
```

Learn more about targeting individual fields in the [Target and paths](https://www.sanity.io/docs/agent-actions/targets-paths) documentation.

## Create captions and alt text with Transform

Transform has a special operation type that you can apply to individual fields that helps describe the contents of an image asset.

This example creates a draft of the document defined in `documentId`, then describes the image asset adjacent to the `['image', 'alt']` field.

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'document-id',
  instruction: 'Describe the image in one to two sentences.',
  target: [{
    path: ['image', 'alt'],
    operation: {
      type: 'image-description'
    }
  }]
});
```

Learn more about Transform's `image-description` operation in the [Target and paths](https://www.sanity.io/docs/agent-actions/targets-paths) documentation.

## Transform an image

Transform can even change images. Describe the instruction and target the asset itself. For example:

```
await client.agent.action.transform({
  schemaId: 'your-schema-id',
  documentId: 'document-id',
  instruction: 'Add cats to this image.',
  target: {
    path: ['mainImage', 'asset'],
  }
});
```

Learn more about `target` in the [common Agent Action patterns guide](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet).
