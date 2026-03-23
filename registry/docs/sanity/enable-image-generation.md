# Enable image generation

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

This guide takes you through the steps required to enable image generation with  Generate or Transform.

Prerequisites\*\*:\*\*

- Complete the [Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart) or [Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart).
- If using the AI assist plugin approach, you'll need access to your Studio codebase.

There are two ways to generate images with Agent Actions. You can either explicitly target the image's asset with the `target` property, or you can enable the AI assist plugin along with image prompts in your schema.

This guide assumes you have a configured Sanity client. The examples for both approaches use the following configuration and reference `client`:

```
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '<project-id>',
  dataset: '<datset-name>',
  apiVersion: 'vX',
  token: '<editor-token>'
})
```

## Explicit targets

Generating images with the explicit targets approach requires instructions that directly target an image asset, but doesn't require a schema change and limits generation to agent actions.

> \[!TIP]
> Image generation is asynchronous
> The API returns a success status before images are fully generated. Studios will show an in-progress status as if a user were uploading an image, but it won't be available until it completes. This results in asset references that aren't updated until after the image generation completes. Keep this in mind if you rely on the returned asset data at the time of generation.

Both Generate and Transform use the `target` key to narrow instructions down to a specific field or fields.

To allow the actions to create or update an image, your request needs to target the image's `asset` field directly. In this example, the target provides a direct path to the asset.

**Generate**

```
await client.agent.action.generate({
  documentId: 'someDocumentId',
  schemaId: 'your-schema-id',
  instruction: 'Create an image about cats wrangling project managers.',
  target: {path: ['image', 'asset']}
})
```

**Transform**

```
await client.agent.action.transform({
  documentId: 'someDocumentId',
  schemaId: 'your-schema-id',
  instruction: 'Change the image to cats wrangling project managers.',
  target: {path: ['image', 'asset']}
})
```

You can also target related fields at the same time, such as the image alt text.

**Generate**

```
await client.agent.action.generate({
  documentId: 'someDocumentId',
  schemaId: 'your-schema-id',
  instruction: 'Create an image about cats wrangling project managers.',
  target: [
    {path: ['image', 'alt']},
    {path: ['image', 'asset']}
  ]
})
```

**Transform**

```
await client.agent.action.transform({
  documentId: 'someDocumentId',
  schemaId: 'your-schema-id',
  instruction: 'Change the image to an image about cats wrangling project managers.',
  target: [
    {path: ['image', 'alt']},
    {path: ['image', 'asset']}
  ]
})
```

This approach doesn't require you to write image-only instructions. You can provide instructions that apply to multiple field types. In this instance, the instruction is more generic and `include` is used alongside the asset path in `target`.

**Generate**

```
await client.agent.action.generate({
  documentId: 'someDocumentId',
  schemaId: 'your-schema-id',
  instruction: 'Create content about cats wrangling project managers.',
  target: [
    {include: ['title', 'description', 'body', 'image']},
    {path: ['image', 'asset']},
  ]
})
```

**Transform**

```
await client.agent.action.transform({
  documentId: 'someDocumentId',
  schemaId: 'your-schema-id',
  instruction: 'Create content about cats wrangling project managers.',
  target: [
    {include: ['title', 'description', 'body', 'image']},
    {path: ['image', 'asset']},
  ]
})
```

Transform can perform path-level instructions. This allows you to apply specific image updates when transforming a document.

**Transform**

```
await client.agent.action.transform({
  documentId: 'someDocumentId',
  schemaId: 'your-schema-id',
  instruction: 'Create content about cats wrangling project managers.',
  target: {
    path: ['image'], 
    include: [
      {path: 'asset', instruction: 'Make it a blue dog.'},
      'alt',
    ]
  }
})
```

See additional target examples in the [common patterns guide](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet).

## AI Assist

The AI assist method allows for less-specific instructions, but requires modifying your Studio's schema and installing the [AI Assist plugin](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist).

If you have previously set up the AI Assist plugin and used it to generate images within Sanity Studio, you can skip the setup and configuration steps.

### Install the AI Assist plugin

While Generate doesn't require the Assist plugin to operate, the plugin provides type completion and enables presence in your studio when Assist is actively updating a document or field.

```sh
npm install sanity@latest @sanity/assist@latest
```

Next, import and add the plugin to your studio config's `plugins` array.

```tsx
import { defineConfig } from 'sanity'
import { assist } from '@sanity/assist'
/* other imports */

export default defineConfig({
  /* other config */
  plugins: [
    /* other plugins */
    assist(),
  ]
})
```

### Enable instructions for image fields

Image generation in schemas works by having Instruct write an image prompt to a text field, then using the field's contents to generate the image. Having an explicit field for the prompt allows content editors to view it and make changes. One way to set this up is to create a new field as part of your images. For example

```typescript
defineField({
  name: 'image',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      type: 'text',
      name: 'instruction',
      title: 'Image Prompt',
    })
  ],
  options: {
    hotspot: true,
    aiAssist: {
      imageInstructionField: 'instruction',
    }
  },
}),
```

This code creates a new `instruction` text field that Generate will use to write an image prompt. It also configures the AI Assist plugin and Generate to recognize that field and associate it with the parent `image`.

You must implement this pattern for any images you'd like AI Assist to interact with.

### Deploy the updated schema

Deploy the updated schema. Do this by deploying the Studio to sanity with `sanity deploy` or with `sanity schema deploy` command.

```sh
sanity schema deploy
```

Note the resulting `schemaId` if you haven't previously used this workspace/dataset combination with Generate.

### Write an image generation instruction

Once you've stored your schema, create a script with your function.

> \[!TIP]
> Protip
> For this guide, we'll follow the same pattern from the Quickstart of using Node.js to invoke a TypeScript file. We'll also rely on the starter movie schema and dataset available through `sanity init`. Modify document types and fields as you follow along to fit your schema.

First, set up your client.

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

Next, create a new instruction.

```typescript
// instruction.ts
// ...client setup

await client.agent.action.generate({
  schemaId: 'your-schema-id',
  targetDocument: {operation: 'create', _type: 'movie'},
  instruction: `
    Come up with an idea for a movie. 
    Give it a title and overview.
    Generate a poster image based on the overview and title.
  `,
})
```

This instruction doesn't explicitly call out the image fields, but that's okay. Generate is good at finding fields and intuiting what you mean. If you want to be more explicit, you can set a target path. Let's look at an example that reads an existing movie document and then targets the poster image field to generate the image.

```typescript
// instruction.ts

// ..client setup

const docId = 'your-movie-id'
await client.agent.action.generate({
  schemaId: 'your-schema-id',
  documentId: docId,
  instruction: `
    Add a poster image for this movie.
    Use the information in $background to come up with the image.
  `,
  instructionParams: {
    background: {
      type: 'document'
    },
  },
  target: {
    path: 'poster'
  }
})
```

The code in this example does the following:

- It uses `documentId` instead of `targetDocument` to update an existing document.
- It sets the `path` to `poster`, which is the image in the movie schema. Setting the path tells Assist to apply the instruction to that field.
- It uses a document-type instruction parameter to query the details of the existing document.

Earlier, we mentioned that Assist writes an image prompt to the specific text field in the image, but in this example, we're targeting `poster`. This code works because the Agent Actions can navigate to children of the supplied path and use the fields it needs to generate the image.

## Additional resources

[Generate overview](https://www.sanity.io/docs/agent-actions/generate-quickstart)

[Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart)

[Agent Actions patterns](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet)

[Common patterns and use cases](https://www.sanity.io/docs/agent-actions/generate-cheatsheet)

# Enable date and datetime support

Agent Actions can interact with `date` and `datetime` field types by adding time and location details to each request.

**Prerequisites:**

- Complete any of the Agent Actions quick start guides, or be familiar with making requests through the actions.
- API version `vX` and `@sanity/client` version `7.1.0` or higher.

## Include `localeSettings` in the request

To support natural language and relative time, the instruction needs to know the localized language you're using and the timezone it should use as a baseline for phrases like "tomorrow" or "three hours from now."

The following code:

1. Sets up a client.
2. Creates an instruction to change a `datetime` field at the path `publishedAt` and configures the locale settings.

This example uses Generate, but the same `localSettings` apply to all Agent Actions.

```typescript
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "<project-id>",
  dataset: "<dataset-name>",
  apiVersion: "vX",
  token: "<editor-token>",
});

await client.agent.action.generate({
  schemaId: "<schema-id>",
  documentId: "<document-id>",
  instruction: `
    Set the publishedAt date to the thirty first of October, 2025 at midnight.
  `,
  target: { path: "publishedAt" },
  localeSettings: {
    locale: "en-US",
    timeZone: "America/Los_Angeles",
  },
});
```

The `localeSettings` requires:

- `locale`: A BCP 47 locale identifier, such as `en-US` or `no-NO`. [Learn more about the specification](https://en.wikipedia.org/wiki/IETF_language_tag).
- `timeZone`: A IANA time zone identifier, such as `America/New_York` or `Europe/Berlin`. [Learn more about the supported values](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

These settings enable the Agent Actions to understand the intended meaning behind natural language times and dates, and then apply them to `date` and `datetime` fields in a predictable way.
