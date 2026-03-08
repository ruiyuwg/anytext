# Common patterns

Translate offers an interface to translate Sanity documents using large language models (LLMs). This document showcases a collection of common patterns and concepts.

Prerequisites:

- Complete the [Translate quick start](https://www.sanity.io/docs/agent-actions/translate-quickstart).
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

## Define protected phrases

Translate allows you to specify certain words or phrases that are protected and will be ignored by the translation. Supply an array of strings to the `protectedPhrases` property.

```
await client.agent.action.translate({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client the ID of the document to use as the source.
  documentId: "<document-id>",
  
  // Set the operation mode
  targetDocument: { operation: "create" },

  // Set the 'from' and 'to' language
  fromLanguage: {id: "en-US", title: "English"},
  toLanguage: {id: "el-GR", title: "Greek"},
  protectedPhrases: [
    "Sanity",
    "Media Library",
    "Agent Actions"
  ]
});
```

## Set a document's language

You may need to set a field in the new document so that it knows what language it is in. This is particularly important for routing and automation, where you may check against a field to determine its language. While we could *hope* the AI fills this in correctly, you can explicitly target the field with `languageFieldPath`. This will tell Translate to set the field to the same value as the `toLanguage` ID.

For example, if our document has a field, `language`, where editors select the document language, we would set the `languageFieldPath` to `language`.

```
await client.agent.action.translate({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client the ID of the document to use as the source.
  documentId: "<document-id>",
  
  // Set the operation mode
  targetDocument: { operation: "create" },

  // Tell Translate to set this field to the target language,
  // in this case, 'el-GR'.
  languageFieldPath: "language",

  // Set the 'from' and 'to' language
  fromLanguage: {id: "en-US", title: "English"},
  toLanguage: {id: "el-GR", title: "Greek"},
  protectedPhrases: [
    "Sanity",
    "Media Library",
    "Agent Actions"
  ]
});
```

## Common patterns

In addition to the patterns on this page, there are many common patterns that apply to all Agent Actions.

#### Explore more patterns

[Agent Actions patterns](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet)
