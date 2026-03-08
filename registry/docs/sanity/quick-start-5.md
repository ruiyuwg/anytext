# Quick start

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Transform is a Sanity Agent Action that lets you programmatically run schema-aware AI transformations on Sanity documents. You can run instructions from anywhere you can execute code, such as Sanity Functions, custom components, webhook listeners, CI/CD pipelines, migration scripts, and more.

In this guide, you'll use Transform to run a find/replace style instruction on content across multiple fields in a document. You'll use `@sanity/client` to create the instructions (you can also make requests using the [HTTP API](https://www.sanity.io/docs/http-reference/agent-actions) directly).

**Prerequisites**:

- `@sanity/client` v7.1.0 or higher and an environment to run client requests.
- API Version `vX` is required for any requests to the Agent Actions APIs.
- Optional: In Node.js v23.6 and above, you can run the TypeScript examples below without additional servers or build processes. Alternatively, you can use [earlier versions with an experimental flag](https://nodejs.org/en/learn/typescript/run-natively). Converting the examples to JavaScript is okay too.
- `sanity` CLI v3.88.0 or later.
- A Sanity project for testing. The examples below use details from the sample "Movies" studio schema that you can select when initializing a new project.- A read/write API token to authenticate requests.
- A valid `projectId` and `dataset` name.

## Obtain a schema ID

Transform requires an uploaded schema. If you've deployed recently, you can check for a list of uploaded schemas by running the `schema list` command. If you don't see a schema or want to deploy the latest version, redeploy your studio to Sanity or deploy the schema.

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
    dataset: '<dataset-name>', // such as 'production'
    apiVersion: 'vX',
    token: '<editor-token>'
})
```

If you're already using the client elsewhere in an application, you can reuse its base configuration. If you need to adjust the token and/or API version, use the `withConfig` method to create a new client based on your existing one. For example:

```typescript
// ...
const transformClient = client.withConfig({
  token: '<your-token>',
})
```

## Transform a document

Transform uses the [concept of an instruction](https://www.sanity.io/docs/agent-actions/instructions)\*. \*This is where you tell Transform what to do with the content in a document. In the simplest form, `transform` takes the following settings:

- `schemaId`: The ID of your schema.
- `documentId`: The `documentId` is defines both the source and the target document. This lets you run the transformation in-place. You can provide a published ID, draft ID, or a version ID.
- `instruction`: The instruction is where you tell the system how to act.

In this example, we create an instruction that changes the term "Alien" or "Aliens" in a movie document to "lifeform from outer space" and "lifeforms from outer space".

> \[!TIP]
> Get a document ID
> This example uses the existing document details to rewrite the title. Obtain the document ID from your studio by selecting **Inspect** from the **"..."** menu in the document title bar, querying the document in [Vision](https://www.sanity.io/docs/content-lake/the-vision-plugin), or querying it with client.fetch().

Update the code to include the following instruction, and change the document ID to a valid ID in your project, and the instruction to one that matches your content:

```typescript
await client.agent.action.transform({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client the ID of the document to transform.
  documentId: "<document-id>",

  // Provide an instruction, or prompt.
  instruction: "Change all instances of 'Alien' to 'Lifeform from another planet'. Match the case of the existing text.",
});
```

This code reads each field in the document and runs the instruction against them.

> \[!WARNING]
> Gotcha
> Depending on your schema, you may find that Transform doesn't interact with images or connect references. To enable these features, you'll need additional schema changes. See the guides below to configure each feature.
>
> - [Enable image generation](https://www.sanity.io/docs/agent-actions/agent-actions-image-generation)
> - [Add support for references](https://www.sanity.io/docs/agent-actions/generate-add-references)

Run the code to see Transform edit the document and update the content. In the case of the example, it updated the movie's title and updated parts of the description.

> \[!TIP]
> Protip
> With the latest version of Node.js, you can run TypeScript files directly from your terminal. Run `node instruction.ts`, replacing instruction with the path to your file.

## Create a new document with advanced parameters.

Transform can also create new documents based on the content in the source. If you want to create new documents from scratch, give [Generate a try instead](https://www.sanity.io/docs/agent-actions/generate-quickstart).

In this step we'll modify the code from the previous example so that it will create a new document that uses the original document as the source, and we'll pass in parameters.

- Add `targetDocument`: This takes an operation type, `create`, and optionally an ID.
- Add `instructionParams`: The parameters can have any `$key` name you like. This example uses the field and const parameter types. Field targets a specific field in the source document, which, in this example is the title field. The const type uses a shorthand syntax to set it like a string.
- Update the instruction: Include the newly defined parameters, and prefix them with `$`. In the example, these are `$title` and `$new`.
- Add a `target` paths (optional): This example also adds explicit targets. Instead of affecting the whole document, only the paths set in `target` will see changes.

```typescript
const docId = "<existing-document-id>";
await client.agent.action.transform({
  schemaId: "your-schema-id",
  // documentId is equivalent to targetDocument: {operation: 'edit', _id: docId }
  documentId: docId,
  targetDocument: {
    operation: 'create'
  },
  instruction: "Replace every instance of $title with $new. Match the case of the existing text.",
  instructionParams: {
    title: {
      type: "field",
      path: "title",
    },
    new: "lifeforms from outer space"
  },
  target: [
    { path: ['title'] },
    { path: ['overview'] },
  ]
});
```

Field-type instruction parameters expect a path leading to fields in the document. In this case, it uses the title field to read the title.

> \[!TIP]
> Protip
> You may wonder why we're using `instructionParams` to pass variables when we could use string interpolation or other methods to build the instruction string. By using `instructionParams` and then passing them to the instruction with the `$key` syntax, Generate has more control over how it shapes and sends your requests to the LLMs.

Another approach is to use a GROQ-type query and capture the whole or parts of other documents as context.

```typescript
await client.agent.action.transform({
  // ...
  instructionParams: {
    title: {
      type: "groq",
      query: `*[_id == "some-other-document-id"].title`,
    },
  },
  // ...
});
```

GROQ-type instruction parameters take a GROQ query and pass the result to the parameter. In this case, it passes the titles of other movie documents in our dataset.

> \[!TIP]
> Protip
> If you want to pass an individual document, you can use the `document` type param. For example: `thisDocument: { type: 'document', documentId: '<document-id>'}`. If you omit the Id, the parameter will be set to the current document.

This example also introduces the `target` parameter, and its child `path`. Target lets you explicitly tell the instruction which fields to write to. This is a really powerful field, and can even take field-level `instruction` requests. Check out more examples of `target` in [the cheat sheet](https://www.sanity.io/docs/agent-actions/generate-cheatsheet).

Run the example to see a new draft populate for your document.

## Next steps

These examples run once, but you can loop over multiple documents, build multi-step workflows, custom components, and much more. The resources below provide additional examples and details.

[Create images with Agent Actions](https://www.sanity.io/docs/agent-actions/agent-actions-image-generation)

[Targets and paths](https://www.sanity.io/docs/agent-actions/targets-paths)

[Agent Actions patterns](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet)

[Operations](https://www.sanity.io/docs/agent-actions/operations)
