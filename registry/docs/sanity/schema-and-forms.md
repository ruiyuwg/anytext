# Schema and forms

You write schemas in plain JavaScript (or TypeScript) objects that let you describe your content model in Sanity Studio. The studio creates the forms and inputs needed to create and edit your content and stores it as structured content in [your dataset in the schema-less Content Lake database](https://www.sanity.io/docs/content-lake/datasets).

[Schema types reference](https://www.sanity.io/docs/studio/schema-types)

[Introduction to schemas](https://www.sanity.io/docs/apis-and-sdks/introduction-to-schemas)

## Anatomy of Schemas:

**Content model or Schema**: More of a conceptual thing like a diagram that details documents and their schema types or attributes present in a studio

**Document Types:** A collection of schema types used to build a standalone piece of content that typically consist of multiple fields, has a revision history, can be published, drafted, and can have queryable references between them.

> \[!WARNING]
> Gotcha
> *Document types can be whatever you like, and does not have to map to “a page” or “a post”*.

**Form:** The order and structure of the schema types used for a document

**Schema types:** Catch-all for attributes used on a form to make a document and maps to `schema.types` in the config API. Sometimes we use “field types” to talk about the same concept.

### Schemas are Content Models

![A diagram of a schema that describes its parts, Content or Document Types and these types are made of field or schema types. ](https://cdn.sanity.io/images/3do82whm/next/d64b5188da8e1f9d53f2aefab79ac0a1160e1f62-882x372.png)

When we talk about a schema or the content model, we are referring to all the document types created for a studio. All document types are made of schema/field types. In short form:

#### Schema —> All Document Types —> Use Schema/Field Types

### Example: Your first schema

Schemas are declared in the root configuration for your Sanity Studio project, typically found in a file named `sanity.config.js`.

```javascript
// ./sanity.config.js

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'my-studio',

  projectId: '<project-id>',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})

```

You *can* declare your schemas inline in the configuration as an array of JavaScript objects, but the more common practice is to put your schemas in external files and import them into the `schema.types`-array.

The default studio setup when you create a new project in the CLI will include a folder at the root level called `schemas` with a single file called `index.js`. This file exports an array, which – depending on whether you started from a template or with a clean project – might be empty or might already contain some schemas.

## Example schema

Let's look at an example schema for a `person` content type. We'll add a `string` field for the name of the person and an `image` field for a headshot.

```javascript
// ./schemas/person.js

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full name',
      type: 'string',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
  ]
}
```

We then import our schema into our main schema file (`./schemas/index.js`) and add it to the schema array.

```javascript
// ./schemas/index.js
import person from './person'

export const schemaTypes = [person]
```

The studio will now let you create a new "Person", and provide the form inputs needed to equip your person with a name and a photo.

![Studio screenshot showing a form with a string input for "Full name" and an image input for "Portrait"](https://cdn.sanity.io/images/3do82whm/next/dfb34aef1e43072e1a8cacd82ab35870c2df7693-800x791.png)

Your studio comes with a range of default schema types, such as the ones we just used to create this document, and these types can be combined to create an endless amount of data structures.
