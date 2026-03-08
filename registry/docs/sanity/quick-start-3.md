# Quick start

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Generate lets you programmatically run schema-aware AI instructions on Sanity documents. You can run instructions from anywhere you can execute code, such as cloud functions, webhook listeners, CI/CD pipelines, migration scripts, and more.

In this guide, you'll use Generate to create a document and write content based on your instructions. You'll use `@sanity/client` to create the instructions (you can also make requests using the [HTTP API](https://www.sanity.io/docs/http-reference/agent-actions) directly).

**Prerequisites**:

- `@sanity/client` v7.1.0 or higher and an environment to run client requests.
- In Node.js v23.6 and above, you can run the TypeScript examples below without additional servers or build processes. Alternatively, you can use [earlier versions with an experimental flag](https://nodejs.org/en/learn/typescript/run-natively).
- `sanity` CLI v3.88.0 or higher.
- A Sanity project for testing. The examples below use details from the sample "Movies" studio schema that you can select when initializing a new project.- A read/write API token to authenticate requests.
- A valid `projectId` and `dataset` name.

## Obtain a schema ID

Generate requires an uploaded schema. If you've deployed recently, you can check for a list of uploaded schemas by running the `schema list` command. If you don't see a schema or want to deploy the latest version, redeploy your studio to Sanity or deploy the schema.

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
    dataset: '<datset-name>', // such as 'production'
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

## Create an instruction

[Instructions](https://www.sanity.io/docs/agent-actions/instructions) describe the content to target and the actions to take upon that content. They can create new documents or update existing ones. In the simplest form, `generate` takes the following settings:

- `targetDocument` or `documentId`: The `targetDocument` setting defines an `operation`. Setting `documentId` is shorthand for using `targetDocument` with the `edit` operation.
- `instruction`: The instruction you want to send to Generate.
- `schemaId`: The ID of your schema.

In this example, we'll create an instruction that adds a new movie to our movie database.

Update the code to include the following instruction:

```typescript
await client.agent.action.generate({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client to create a new 'movie' document type.
  targetDocument: { operation: "create", _type: "movie" },

  // Provide an instruction, or prompt.
  instruction: "Write the details for a movie titled $title.",

  // Optionally, provide any params for the instruction.
  // You can access them with the $key syntax.
  instructionParams: {
    title: { type: "constant", value: "Sanity: The Content Operating System" },
  },
});
```

This code creates a new draft document of the `movie` type, then tells Generate to write details about the movie. In this case, rather than directly telling the AI in the instructions that the title should be "Sanity: The Content Operating System", `instructionParams` is used to pass it in as the `$title` parameter.

> \[!WARNING]
> Gotcha
> Depending on your schema, you may find that the instruction doesn't generate images or connect references. To enable these features, you'll need additional schema changes. See the guides below to configure each feature.
>
> - [Enable image generation](https://www.sanity.io/docs/agent-actions/agent-actions-image-generation)
> - [Add support for references](https://www.sanity.io/docs/agent-actions/generate-add-references)

Run the code to see Generate add a new movie titled "Sanity: The Content Operating System" to your dataset.

> \[!TIP]
> Protip
> With the latest version of Node.js, you can run TypeScript files directly from your terminal. Run `node instruction.ts`, replacing instruction with the path to your file.

By default, the `create` operation creates a draft. If you want the instruction to create a published document, provide an `_id` to `targetDocument` in addition to the `_type` and `operation`.

> \[!TIP]
> Protip
> You may wonder why we're using `instructionParams` to pass variables when we could use string interpolation or other methods to build the instruction string. By using `instructionParams` and then passing them to the instruction with the `$key` syntax, Generate has more control over how it shapes and sends your requests to the LLMs.

## Modify an existing document

To update an existing document, set the `documentId` or use the edit operation with `targetDocument: { operation: "edit", _id: "<document-id>" }`.

This example uses the existing document details to rewrite the title. Obtain the document ID from your studio by selecting **Inspect** from the **"..."** menu in the document title bar, querying the document in [Vision](https://www.sanity.io/docs/content-lake/the-vision-plugin), or querying it with client.fetch().

```typescript
const docId = "<existing-document-id>";
await client.agent.action.generate({
  schemaId: "your-schema-id",
  // documentId is equivalent to targetDocument: {operation: 'edit', _id: docId }
  documentId: docId,
  instruction: `
    Update the title based on the details about the movie.
    Use the information in $details to come up with the new title.
  `,
  instructionParams: {
    details: {
      type: "field",
      path: "overview",
    },
  },
  target: {
    path: "title",
  }
});
```

In addition to swapping the `targetDocument` property for `documentId`, this example also has a new `instructionParams`.

As with the previous title example, you can name these keys whatever you like. The `details` key in this instance is a `field` type, and just like `title` in the earlier example, you can reference it in the instructions with a $ prefix (`$details`).

Field-type instruction parameters expect a path leading to fields in the document. In this case, it uses the overview field to read a summary of the movie that the instruction can use as context.

Another approach is to use a GROQ-type query and capture the whole or parts of other documents as context.

```typescript
await client.agent.action.generate({
  schemaId: "your-schema-id",
  documentId: "<existing-document-id>",
  instruction: `
    Update the title so that it aligns closer to the other movie titles.
    Use the information in $background to come up with the new title.
  `,
  instructionParams: {
    background: {
      type: "groq",
      query: `*[_type == "movie"].title`,
    },
  },
  target: {
    path: "title",
  }
});
```

GROQ-type instruction parameters take a GROQ query and pass the result to the parameter. In this case, it passes the titles of other movie documents in our dataset.

> \[!TIP]
> Protip
> If you want to pass an individual document, you can use the `document` type param. For example: `thisDocument: { type: 'document', documentId: '<document-id>'}`. If you omit the Id, the parameter will be set to the current document.

This example also introduces the `target` parameter, and its child `path`. Target lets you explicitly tell the instruction which fields to write to. Check out more examples of `target` in [the cheat sheet](https://www.sanity.io/docs/agent-actions/generate-cheatsheet).

When you run either of the examples above, they will respond with an updated document, including a new title based on other titles in the movie project.

## Next steps

These examples run once, but you can loop over multiple documents, build multi-step workflows, and much more. The resources below provide additional examples and details.

[Create images with Generate](https://www.sanity.io/docs/agent-actions/agent-actions-image-generation)

[Enable references in Generate](https://www.sanity.io/docs/agent-actions/generate-add-references)

[Generate cheat sheet](https://www.sanity.io/docs/agent-actions/generate-cheatsheet)

[Agent Actions](https://www.sanity.io/docs/http-reference/agent-actions)
