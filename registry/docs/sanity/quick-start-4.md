# Quick start

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Translate is a Sanity Agent Action that lets you programmatically run schema-aware AI translations on Sanity documents. You can run translations from anywhere you can execute code, such as [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction), custom components, webhook listeners, CI/CD pipelines, migration scripts, and more.

In this guide, you'll first use Translate to convert a document into a new language. You'll use `@sanity/client` to create the translation requests (you can also make requests using the [HTTP API](https://www.sanity.io/docs/http-reference/agent-actions) directly).

**Prerequisites**:

- `@sanity/client` v7.1.0 or higher and an environment to run client requests.
- API Version `vX` is required for any requests to the Agent Actions APIs.
- Optional: In Node.js v23.6 and above, you can run the TypeScript examples below without additional servers or build processes. Alternatively, you can use [earlier versions with an experimental flag](https://nodejs.org/en/learn/typescript/run-natively). Converting the examples to JavaScript is okay too.
- `sanity` CLI v3.88.0 or later.
- A Sanity project for testing. The examples below use details from the sample "Movies" studio schema that you can select when initializing a new project.- A read/write API token to authenticate requests.
- A valid `projectId` and `dataset` name.

## Obtain a schema ID

Translate requires an uploaded schema. If you've deployed recently, you can check for a list of uploaded schemas by running the `schema list` command. If you don't see a schema or want to deploy the latest version, redeploy your studio to Sanity or deploy the schema.

**List schema**

```sh
npx sanity schema list
```

**Deploy Studio**

```sh
npx sanity deploy
```

**Deploy schema**

```sh
npx sanity schema deploy
```

Copy the schema ID, which you'll need for making Agent Action requests.

[You can learn more about schema deployment here](https://www.sanity.io/docs/apis-and-sdks/schema-deployment).

## Configure the client

Import and configure `@sanity/client` with the `projectId`, `dataset`, API `token`, and an `apiVersion` of vX.

```typescript
// instruction.ts

import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset-name>',
    apiVersion: 'vX',
    token: '<editor-token>'
})
```

If you're already using the client elsewhere in an application, you can reuse its base configuration. If you need to adjust the token and/or API version, use the `withConfig` method to create a new client based on your existing one. For example:

```typescript
// ...
const generateClient = client.withConfig({
  token: '<your-token>',
})
```

## Translate a document

It's common to want a complete, translated version of a document. To achieve this with Translate:

- Provide a source `documentId` of the original document.
- Define the `fromLanguage`. This is optional, but it avoids the AI interpreting the document as a language other than the one you expect.
- Define the `toLanguage` that you want the document translated into.
- Set the operation. Operations tell Agent Actions what to do. In this example, we'll use `create`. [Learn more about operations](https://www.sanity.io/docs/agent-actions/operations).

Here's a minimal example that uses an existing English language document to create a new translation in Greek.

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
});
```

This creates a new draft document based on the source (`documentId`).

> \[!NOTE]
> Create makes an unlinked draft
> Using the create operation with an ID in Translate creates a new, unlinked draft. This means it's not directly associated with the original document the way a draft of a published document is.

## Customize the output with style guides

If you're familiar with the other Agent Actions, `styleGuide` is Translate's version of `instruction`. It lets you add additional context and guidance beyond setting a target language.

In this example, we tell Translate to use a formal tone:

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

  styleGuide: "Use a formal tone when translating.",
});
```

You can also pass information into the style guide with `styleGuideParams`.

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

  // Use `styleGuide` instead of instruction for Translate
  styleGuide: "Use a $tone tone when translating.",
  styleGuideParams: {
    tone: 'formal'
  }
});
```

In this example, we use a `constant` type parameter to assign the string "formal" to the `tone` key. Then, we pass it into the style guide as `$tone`. This is just one type of parameter. You can do everything from including full documents to making GROQ queries. Learn more about [passing parameters into style guides](https://www.sanity.io/docs/agent-actions/instructions).

## Next steps

To learn more about what you can do with Translate, explore the other guides and resources available for [Agent Actions](https://www.sanity.io/docs/agent-actions).

#### Explore more

[Translate cheat sheet](https://www.sanity.io/docs/agent-actions/translate-cheatsheet)

[Agent Actions patterns](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet)

[Agent Actions](https://www.sanity.io/docs/http-reference/agent-actions)
