# Common patterns

Generate offers an interface to enhance Sanity documents with the use of large language models (LLMs). This document showcases a collection of common patterns and concepts.

Prerequisites:

- Complete the [Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart).
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

## Common patterns

The patterns in this guide are unique to Generate, but there are more patterns shared across all Agent Actions.

[Agent Actions patterns](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet)

## Create multi-stage instructions

A single instruction is often fine for smaller tasks like updating an individual field. However, splitting instructions into multiple steps or stages for more significant tasks like writing complete documents with complex schemas returns better results.

One approach to improve the LLM success rate is to approach instructions more like a human would. For example:

1. Make a skeleton or outline by populating simple, foundational fields like title, description, and categories or topics.
2. Run instructions for more complex areas, like an article's main content field, individually by passing in the results of step 1 as field parameters.
3. Run any summarization tasks at the end for content like SEO fields, social copy, or connecting related content.

This example creates a document with an instruction and then uses the generated content to influence future instructions.

```typescript
const customTopic =
  "A multi-generational epic, but all the characters are cats.";

const { _id } = await client.agent.action.generate({
  schemaId: "your-schema-id",
  targetDocument: {operation: 'create', _type: 'movie'},
  instruction: `
    Come up with a movie idea.
    Use the information in $topic as the basis for the movie.`,
  instructionParams: {
    topic: { type: "constant", value: customTopic },
  },
  target: {
    include: ["title", "overview"],
  },
});

await client.agent.action.generate({
  schemaId: "your-schema-id",
  documentId: _id,
  instruction: `Create a poster for the movie based on the $document.`,
  path: "poster",
  instructionParams: {
    document: { type: "document" },
  },
});

await client.agent.action.generate({
  schemaId: "your-schema-id",
  documentId: _id,
  instruction: `Translate the $overview into Japanese.`,
  path: "overviewJPN",
  instructionParams: {
    overview: { type: "field", path: "overview" },
  },
});
```

## Create release versions for AI changes

You can combine Generate with Content Releases to power a safer, supervised content pipeline. This example will:

- Read details about a published document and rewrite the title based on the instructions.
- Take that document and use the Actions API to create a new version document attached to an existing release, leaving the original published version unchanged. Note: you need v7.2.0 or later of the client and API v2025-02-19 or later to use version actions.

```typescript
const releaseId = "<release-id>";
const documentId = "<published-document-id>";

// Build the version path Id by combining versions with the release name and document Id.
const versionId = `versions.${releaseId}.${documentId}`;

// Create an instruction to rewrite the title
const result = await client.agent.action.generate({
  schemaId: "your-schema-id", // replace with your schema Id
  documentId: documentId,
  noWrite: true, // only write the changed document to the `result` variable
  instruction: `
    Re-imagine the title so that it is more engaging and interesting.
    Use the information in $document to help you come up with a new title.
  `,
  instructionParams: {
    document: {
      type: "document",
    },
  },
  target: {
    path: "title",
  }
});

// Call the Actions API with the client to create a new version.
await client.action(
  {
    actionType: 'sanity.action.document.version.create',
    publishedId: documentId,
    document: {
      ...result,
      _id: versionId,
    }
  }
)
```

> \[!TIP]
> Protip
> You can use this same approach to create a draft document. The `sanity.action.document.version.create` action works the same for drafts, with one minor modification.
> Instead of `versions.releaseId.documentId`, set a draft Id with `drafts.documentId`. For example, `drafts.movie12345`.
