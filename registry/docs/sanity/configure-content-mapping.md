# Configure content mapping

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Content mapping between [Sanity Canvas](https://sanity.io/create) and [Sanity Studio](https://www.sanity.io/studio) is an excellent addition to every content team's toolbox. It grants the best of both worlds:

- A free-form creative writing space with a context-aware writing assistant for the ideation phase
- A powerful studio for structured content operations when it's time to put that content to work

All without content teams wasting precious time and bandwidth copying and pasting their work from one place to the other.

Visit the [introduction to content mapping](https://www.sanity.io/docs/canvas/canvas-content-mapping) to learn more about how content mapping works once implemented. Read on to learn how to set it up.

## Enable content mapping in Sanity Studio

Getting your studio ready for content mapping requires that you make your schema available to Canvas by storing a copy in your dataset. For most users, this should be a simple task of updating your studio and deploying it, but if your case is more complex you might want to consult [this article](https://www.sanity.io/docs/apis-and-sdks/schema-deployment) which goes into all the details.

For Sanity-hosted studios:

- Make sure your project is updated to `v3.88.1` or later of Sanity Studio. `@latest` is always recommended!
- Deploy your studio by running the command  `npx sanity deploy`
- If your studio is embedded or self-hosted, follow [this guide](https://www.sanity.io/docs/dashboard/dashboard-configure) on getting set up for content mapping by onboarding your studio to Dashboard correctly.

## Configuring Schemas for Content Mapping

To tailor how Canvas handles your studio schema, you can use the `options.canvasApp` configuration that has been added to all schema types.

This configuration allows you to:

- Exclude specific types or fields from appearing in Canvas using `options.canvasApp.exclude`
- Provide additional context to the mapping agent about the intended purpose of a type or field using `options.canvasApp.purpose`

> \[!TIP]
> Protip
> Excluding fields that aren't useful to edit in Canvas is beneficial in more than one way! You'll deliver a cleaner and more intuitive experience to your content team, *and* you'll avoid problems that can occur in Canvas when faced with overly complex schemas. The number of fields handled by content mapping is hard capped at 1000. If your document schema runs up against this limit, consider excluding certain fields.
> Be particularly diligent with your exclusions for schemas that:
>
> - Are really big
> - Have a high number of types
> - Have big arrays of several different types

### Excluding Types and Fields

To prevent a document type from being selectable in Canvas, set the `exclude` option to `true`:

**policy-type.ts**

```typescript
import {defineType} from 'sanity'

export default defineType({
  name: 'policy',
  type: 'document',
  description: 'Super-sensitive stuff',
  options: {
    canvasApp: {
      exclude: true
    },
  },
  fields: [
    // ...
  ]
});
```

Similarly, you can exclude specific fields within a document type by setting `options.canvasApp.exclude` to `true` on the field level:

**article-type.ts**

```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  type: 'document',
  fields: [
    defineField({
    name: 'internalNotes',
    type: 'text',
    options: {
      canvasApp: { exclude: true }
      }
    }),
    // ...     
  ]
});
```

In this example, the `article` type is still available in Canvas, but the `internalNotes` field will not be shown or possible to target for mapping.

### Adding Context with Purpose

The `options.canvasApp.purpose` option allows you to provide additional context to the mapping agent about the intended purpose or usage of a specific type or field. This can help the agent make more accurate decisions when mapping content from Canvas to your studio schema.

For example, if you have a `tags` field in your schema that’s intended specifically for SEO keywords rather than general content categorization, you can clarify this using the purpose option:

**article-type.ts**

```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  type: 'document',
  fields: [
    {
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        canvasApp: {
          purpose: 'SEO keywords to improve search visibility, not general categorization tags.',
        },
      },
    },
    // ...
  ],
})

```

Consider using the `purpose` option when added clarity would be helpful. Often, the automatic mapping will get it right, so give it a try first and add `purpose` details only if needed to refine the mapping.

# Build with AI

#### Supercharge your workflow

[Get started with Sanity and AI](https://www.sanity.io/docs/ai/ai-quickstart)

[Sanity MCP server](https://www.sanity.io/docs/ai/mcp-server)

[Agent Toolkit](https://github.com/sanity-io/agent-toolkit)

#### Add AI to your Sanity Apps

[Agent Context](https://www.sanity.io/docs/ai/agent-context)

[Explore Agent Actions](https://www.sanity.io/docs/agent-actions)

[Add AI Assist to Studio](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist)
