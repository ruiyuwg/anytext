# Common patterns

Agent Actions offer an interface to enhance Sanity documents with the use of large language models (LLMs). This document showcases a collection of common patterns and concepts that apply to all Agent Actions.

Prerequisites:

- Complete the quick start for one or more of the Agent Actions.
- `@sanity/client` v7.1.0 or later and an environment to run client requests.
- API version vX or later for any requests using Agent Actions.

#### Quick starts

[Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart)

[Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart)

[Translate quick start](https://www.sanity.io/docs/agent-actions/translate-quickstart)

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

Then, import `client` in your code before using the examples below.

> \[!NOTE]
> Multiple action examples
> Some examples in this guide are for specific Agent Actions, so the code may differ slightly. For instance, Translate doesn't have an `instruction` concept in the same way Generate does, but the techniques in each example are the same regardless of action.

## Use `noWrite` to avoid mutations

The `noWrite` property prevents the instruction from writing changes to your dataset. This is useful when creating in-memory documents, previewing changes, or working with multiple requests before making a final write. You could even use it to combine multiple Agent Actions.

All Agent Actions support the `noWrite` option.

**Generate**

```typescript
const response = await client.agent.action.generate({
  schemaId: "your-schema-id",
  noWrite: true,
  targetDocument: {operation: 'create', _type: 'movie'},
  instruction: "Write the details for a movie titled $title.",
  instructionParams: {
    title: { type: "constant", value: "Sanity: The Content Operating System" },
  },
});
console.log(response);

```

**Transform**

```
const response = await client.agent.action.transform({
  schemaId: "your-schema-id",
  noWrite: true,
  documentId: '<source-document-id>',
  instruction: "Replace every instance of 'Create' with 'Canvas'",
});
console.log(response);

```

**Translate**

```
const response = await client.agent.action.translate({
  schemaId: 'your-schema-id',
  documentId: '<source-document-id>', 
  noWrite: true,
  fromLanguage: { id: 'en-GB',title: 'English' },
  toLanguage: { id: 'no-NB', title: 'Norwegian Bokmål' },
})
```

Instead of creating or modifying a document in your dataset, this code returns the document to the `response` constant and logs it to the console.

Keep in mind that these requests still count against your usage limits.

## Enable read/write on conditional fields

By default, Agent Actions ignore [conditional](https://www.sanity.io/docs/studio/conditional-fields) `readOnly` and `hidden` fields. You can allow actions to interact with these fields by setting the `conditionalPaths` parameter. The examples below use the `generate` syntax, but the `conditionalPaths` configuration is the same across all actions.

To enable access to all hidden and readOnly fields across your schema, use the following to change the default behavior:

```typescript
await client.agent.action.generate({
  schemaId: 'your-schema-id',
  targetDocument: {operation: 'create', _type: '<document-type>'},
  instruction: `<insert instruction here>`,
  instructionParams: { ... },
  conditionalPaths: {
    defaultReadOnly: false,
    defaultHidden: false
  }
})
```

You can also limit read/write to specific `paths`. Add additional paths to the array as needed.

```typescript
await client.agent.action.generate({
  schemaId: 'your-schema-id',
  targetDocument: {operation: 'create', _type: '<document-type>'},
  instruction: `<insert instruction here>`,
  instructionParams: { ... },
  conditionalPaths: {
    paths: [
      {
        path: 'secretPathName',
        readOnly: false,
        hidden: false,
      }
    ]
  }
})
```

## Asynchronously modify multiple documents

The `async` parameter helps initiate instructions and move on. Asynchronous calls to actions return a document ID rather than the complete document shape. In this example:

- We loop through the IDs of documents from a GROQ request.
- `async` is set to true to enable asynchronous requests.
- The instruction rewrites the title of each document.

```typescript
const ids = await client.fetch(`*[_type == 'movie' ][0...5] { _id }`);

for (const id of ids) {
  await client.agent.action.generate({
    schemaId: "your-schema-id",
    documentId: id._id,
    instruction: `Re-imagine the title, $title, so that it is more engaging and interesting.`,
    async: true,
    path: "title",
    instructionParams: {
      title: {
        type: "field",
        path: "title",
      },
    },
  });
}
```

> \[!TIP]
> Protip
> We're calling this an asynchronous call, but we're also using `await`. That's because the asynchronous call happens behind the scenes. We aren't waiting on the AI to finish and Content Lake to update. Instead, we're waiting on the underlying request to Sanity to respond that it initiated those actions.

Note that you can't combine `async` and `noWrite`, as `noWrite` would require the request to wait for a response from the AI.

## Target specific fields

Restrict the fields that actions can write to by setting a single `path` or multiple `include` fields in the `target` parameter.

To write to a single path, or all child paths of a single parent, use the `target` property with `path`.

```typescript
await client.agent.action.generate({
  schemaId: "your-schema-id",
  targetDocument: {operation: 'create', _type: 'movie'},
  instruction: `Your instruction here.`,
  // ... other properties
  target: {
    path: "body", // set to whichever field or fieldset you like. Ex. 'title', 'name', etc.
  }
});
```

To define specific fields, use `include`. They will be relative to a path, if set, or the document if not set. In the example below, they are relative to the document.

```typescript
await client.agent.action.generate({
  schemaId: "your-schema-id",
  targetDocument: {operation: 'create', _type: 'movie'},
  instruction: `Your instruction here.`,
  // ... other properties
  target: {
    include: ["title", "overview", "poster"],
  },
});
```

You can also do the same to exclude any paths you want to block the instruction from mutating.

```typescript
await client.agent.action.generate({
  schemaId: 'your-schema-id',
  targetDocument: {operation: 'create', _type: 'movie'},
  instruction: `Your instruction here.`,
  // ... other properties
  target: {
    exclude: ['humanOnlyField']
  }
})
```

### Target patterns

The following are an assortment of examples using `target` and its options. For Transform and Translate, omit the Generate instruction and add the source `documentId` property.

```typescript
/*
using path
this sets 'title' field
*/
{
 targetDocument: {operation: 'create', _type: 'article'},
 schemaId: 'your-schema-id',
 instruction: 'A title for an article about dogs',
 target: {path: ['title']}
}

/*
using include
 this sets:
 - title
 - description 
 */
{
 targetDocument: {operation: 'create', _type: 'article'},
 schemaId: 'your-schema-id',
 instruction: 'Stuff about dogs',
 target: {include: ['title', 'description']},
}

/*
 this sets:
 - objectField.title
 - objectField.description 
*/
{
 targetDocument: {operation: 'create', _type: 'article'},
 schemaId: 'your-schema-id',
 instruction: 'Stuff about dogs',
 target: {path: ['objectField'], include: ['title', 'description']}
}


/*
multiple target paths
 this sets:
 - objectField.title
 - objectField.description
 - people[_key=="someKey"].name //ie, the name of a single item in the people array 
*/
{
 targetDocument: {operation: 'create', _type: 'article'},
 schemaId: 'your-schema-id',
 instruction: 'Stuff about dogs',
 target: [
    {path: ['objectField'], include: ['title', 'description']},
    {path: ['people', {_key: 'someKey'}], include: ['name']}
 ]
}

/* 
Deeply nested fields from a common target path.
This sets:
 - objectField.nestedObject.title
 - objectField.otherObject.deeplyNested 
   - all its children(assuming deeplyNested is an object)
*/
{
 targetDocument: {operation: 'create', _type: 'article'},
 schemaId: 'your-schema-id',
 instruction: 'Stuff about dogs',
 target: {
	 path: 'objectField', 
	 include: [
		 {path: ['nestedObject', 'title']}, 
		 {path: ['otherObject', 'deeplyNested']} 
	 ]
 }
}
```

## Agent Actions in field actions

Agent Actions can leverage custom AI Assist field actions to create on-demand features for content editors directly in Studio. Learn more in the [custom field actions documentation](https://www.sanity.io/docs/studio/ai-assist-field-actions), or jump right into the [field action patterns](https://www.sanity.io/docs/studio/field-actions-patterns).
