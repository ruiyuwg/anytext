# Enable references

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Agent Actions can populate reference fields with the help of the AI Assist studio plugin and the [Embeddings Index API](https://www.sanity.io/docs/content-lake/embeddings-index-api-overview). This guide will help you enable related content references for instructions.

Prerequisites:

- Complete the [Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart).
- An embeddings index connected to your project and dataset. [Follow the setup process](https://www.sanity.io/docs/content-lake/embeddings-index-api-overview) if you haven't done so already. You can also use the [Studio plugin](https://www.npmjs.com/package/@sanity/embeddings-index-ui).
- Access to your Studio codebase.

If you've previously set up the AI Assist plugin and have been using it to generate images inside Sanity Studio, you can skip the setup and configuration steps.

## Install the AI Assist plugin

While Agent Actions don't require the Assist plugin, the plugin provides type completion and enables presence in your studio when Actions are actively mutating a document or field.

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

## Enable indexing of reference fields

Generate needs to know which index to use when making connections. Add the `aiAssist.embeddingsIndex` option to any references that use the index. In our movie schema example, we've created an index called "people" that targets all documents of `_type == person`.

```typescript
 defineField({
  name: 'person',
  title: 'Person',
  type: 'reference',
  to: [{type: 'person'}],
  options: {
    aiAssist:{
      embeddingsIndex: 'people',
    }
  }
}),
```

The code above tells AI Assist and Generate to use the `people` index for this `person` reference.

With those changes, you're now set to use Assist with references.

## Create an instruction

Agent Actions can often intuit the needs of your instruction based on your schema, but it's also helpful to be explicit. These examples use Generate, but other actions support the same concept. First, set up your client if you haven't already.

```typescript
// instruction.ts

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "<project-id>",
  dataset: "<dataset-name>",
  apiVersion: "vX",
  token: "<editor-token>",
});

```

Next, create an instruction.

```typescript
// instruction.ts
// ...client setup

await client.agent.action.generate({
  schemaId: "your-schema-id",
  targetDocument: {operation: 'create', _type: 'movie'},
  instruction: `
    Come up with an idea for a movie. 
    Give it a title and overview.
    Generate a poster image based on the overview and title.
    Select cast members to be involved in the movie as the cast. Give their characters names that fit the theme.
    Assign crew members to work on the movie.
  `,
});
```

The code above creates a detailed instruction that explicitly lists the steps we want it to take. Notice that it doesn't use a GROQ query to inject information about the `person` type. Because Generate knows about your schema and has access to the index, it understands there are references for cast and crew.

If you wanted to be more explicit, perhaps to limit which people it chooses, you could combine this with a GROQ or other instruction parameters to provide more context.

Give the code, or your modified version, a try. Generate will do its best to match related references based on your instructions. Sometimes, you may need to be more explicit to help it make the best decisions.

## Related resources

[Generate images](https://www.sanity.io/docs/agent-actions/agent-actions-image-generation)

[Common use cases and patterns](https://www.sanity.io/docs/agent-actions/generate-cheatsheet)
