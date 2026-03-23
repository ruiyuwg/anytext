# Introduction to schemas

Schemas are the foundation of how content is structured, stored, and presented in the Sanity ecosystem. This guide will help you understand what schemas are, how they work, and how to use them effectively in your Sanity projects.

## What is a schema?

The schema consists of simple JavaScript (or TypeScript) objects that define your content model. They describe the structure, relationships, and constraints of your content, allowing you to create a tailored content management experience.

While the Content Lake itself is schema-less (providing flexibility for content storage), the schema control how content is organized and can be used to:

- [Generate TypeScript types](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen) for your projects
- Generate user-friendly content forms for [Sanity Studio](https://www.sanity.io/docs/studio/schemas-and-forms)
- Define metadata fields (Aspects) for assets in [the Media Library](https://www.sanity.io/docs/media-library)
- Enable apps like [Canvas](https://www.sanity.io/docs/canvas/configure-content-mapping) to transform free-form documents to structured content
- Power agent actions through well-defined content structures

## Where schemas live

Traditionally, schemas have been defined within Sanity Studio projects, and this remains the primary location for schema definitions. However, the Sanity ecosystem has evolved to use schemas in other contexts:

- **Sanity Studio**: The main place for defining document types and field structures.
- **Media Library**: Uses schemas (called Aspects) to define sets metadata fields for assets.
- **Content Mapping**: Uses a schema to map free-form content from Canvas to a structured document in Content Lake, so it can be edited in the Studio and other apps.
- **Agent Actions**: Schemas provide the structure needed for AI agents to work with your content.

As the Sanity Content Operating System evolves, schemas will remain a central component that bridges the gap between the schema-less Content Lake and the structured interfaces used to create and manage content.

## How to design schemas

Schemas in Sanity represent your content model(s), which should be a reflection of your organization's unique business reality. When designing your schema, it's crucial to align it with how your teams actually work and think about content, rather than forcing teams to adapt to rigid technical structures. A well-designed schema considers the mental models of content creators, the workflows they follow, and the relationships between different content types in your business domain.

By mapping your schema to these real-world considerations, you create a more intuitive content management experience that reduces friction, improves adoption, and ultimately leads to better content outcomes.

Remember that schemas can evolve over time as your business needs change—start with the core concepts that matter most to your teams, then iterate and expand as you learn more about how your content model performs in practice.

## Your schemas will change

Schemas naturally evolve as your business requirements change, content strategies mature, and new channels emerge. Sanity embraces this reality by providing robust tooling to manage schema migrations and content transformations. The Content Lake's schema-less architecture gives you the flexibility to modify your content model without rebuilding your entire database.

The schema migration tooling allow you to programmatically transform existing content to match new schema structures and run your validation rules against your whole dataset. Rather than treating schema changes as exceptional events, Sanity's approach acknowledges them as a normal part of the content lifecycle.

## Anatomy of schemas

### Content model or schema

Your overall content model (or schema) is the complete collection of document types and field definitions that make up your content structure. Think of it as the blueprint for your content.

### Document types

Document types are collections of documents used to build standalone pieces of content. You can think of them as similar to tables in SQL databases. A document type:

- Consists of multiple fields
- Has revision history
- Can have copies to represent published, draft, and version states
- Can have indexed and queryable references between them

**Note**: Document types can be whatever you need them to be and don't have to map directly to "a page" or "a post". It can also be "project," "person," "product," and "place."

> \[!WARNING]
> Don't use document types as field types
> A document type should not be used directly as a field type. If you want to link to a document, use a [reference](https://www.sanity.io/docs/studio/reference-type) field. If you want to embed fields inline, use an [object](https://www.sanity.io/docs/studio/object-type) instead.
> Document types carry system fields (`_id`, `_rev`, `_createdAt`, `_updatedAt`) that have no meaning when embedded inside another document. Using a document type as a field type can also cause issues with TypeGen.
> Sanity Studio displays a warning in the console if it detects this pattern in your schema.

### Field types

Field types are the building blocks of your schema that define what kind of data can be stored in each field. Sanity comes with a variety of built-in field types that you can use to model your content:

- **String**: For text content like titles, names, and descriptions
- **Number**: For numerical values
- **Boolean**: For true/false values
- **Date** and **DateTime**: For temporal data
- **Image** and **File**: For media assets
- **Reference**: For creating relationships between documents
- **Array**: For repeatable lists of other field types
- **Object**: For grouping related fields together
- **Block**: When used in an array, it gives you block content with Portable Text
- **Slug**: For URL-friendly strings
- **Geopoint**: For geographical coordinates

You can also create custom field types by combining existing types or extending them with custom validation and input components.

#### Field hoisting

While you can define custom field types "inline" in the document type definition's `fields` array, we recommend isolating them in their own files, importing them to the `schemas` array in the configuration, and then use them in your document types by referencing their `name` as the `type`.

> \[!TIP]
> Standardize and reuse custom fields
> It's good practice to reuse and standardize custom fields. It makes it easier and more predictable to work on projects as they evolve, and what to expect in the data that comes out of your queries. You can also use GROQ projections to reshape data as you need it for specific contexts without having to change the content model.

## Example: Your first schema type

The easiest place to start with a schema is declaring it in the root configuration for your Sanity Studio project, typically in a file named `sanity.config.ts`.

While you can declare schemas inline in the configuration, the common practice is to organize them in external files and import them into the `schema.types` array.

Here's a simple example of a schema for a `person` document type:

**schemaType/person.ts**

```
import { defineType, defineField } from 'sanity'

export const personType = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string'
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image'
    })
  ]
})
```

**schemaTypes/index.ts**

```
import { person } from './person'

export const schemaTypes = [person]
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: '<your-project-id>',
  dataset: '<your-dataset>',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
```

This schema type definition creates a "Person" document type with fields for a name (string) and portrait (image), which Sanity Studio will automatically transform into appropriate form inputs. In this example, we use the helper function `defineType` and `defineField` which are there to help you validate that the schema is correctly configured and will give you autocomplete for available options.

## Advanced schema features

### Schema deployment

To make your schemas available across the Sanity ecosystem (for content mapping, agent actions, etc.), you need to deploy them:

1. Ensure your Studio is updated to the latest version
2. Create a deploy token with the appropriate permissions
3. Run the command: `npx sanity@latest schema deploy`

This stores your schemas as system documents (of type `_system.schema`) in your dataset at the workspace level. If you have multiple workspaces, each will have its own schema. These deployed schemas are essential for:

- Content mapping between Sanity Canvas and Content Lake so it can be edited in Sanity Studio
- Enabling agent actions to work with your content
- Other integrations that need to understand your content structure

### Schemas for Media Library (Aspects)

The Media Library uses schemas (called Aspects) to define metadata fields for assets. These aspects help organize and categorize assets across your organization.

## Conclusion

Schemas are a powerful tool in the Sanity ecosystem, providing structure and organization to your content while maintaining flexibility. Whether you're building a simple blog or a complex content platform, understanding how to effectively use schemas will help you create a tailored content management experience for your team.

By designing schemas that reflect your organization's business reality and leveraging features like schema deployment, you can create a cohesive content experience across all Sanity tools and integrations.

#### Related articles

[How Queries Work – GROQ](https://www.sanity.io/docs/content-lake/how-queries-work)

[Schema Deployment](https://www.sanity.io/docs/apis-and-sdks/schema-deployment)

[Document](https://www.sanity.io/docs/studio/document-type)

[Schema](https://www.sanity.io/docs/studio/schema-types)
