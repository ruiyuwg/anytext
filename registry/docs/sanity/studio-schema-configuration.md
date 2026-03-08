# Studio schema configuration

The top level `schema` configuration accepts an object with two properties: `templates` and `types:`

- The `templates` property accepts an array of Initial Value Template configuration objects or a callback function returning the same.
- The `types` property accepts an array of schema definition objects or a callback function returning the same.

In both cases, the callback function is called with the current value as the first argument and a context object as the second. Thus, you can access schema definitions and Initial Value Templates implemented by plugins.

#### Properties

| Property | Description |
| --- | --- |
| templates | An array of initial value templates, or a callback function that resolves to the same. |
| types | An array of schema definitions or a callback function that resolves to the same. |

The `templates` property is discussed in greater detail [in this article](https://www.sanity.io/docs/studio/initial-value-templates), and a reference article can be found [here](https://www.sanity.io/docs/studio/initial-value-templates-api). The rest of this article will deal with the default set of schema types supported in the Sanity Studio.

All schema types are listed below or in the documentation menu.

[Array](https://www.sanity.io/docs/studio/array-type)

[Block](https://www.sanity.io/docs/studio/block-type)

[Boolean](https://www.sanity.io/docs/studio/boolean-type)

[Cross Dataset References](https://www.sanity.io/docs/studio/cross-dataset-references)

[Date](https://www.sanity.io/docs/studio/date-type)

[Datetime](https://www.sanity.io/docs/studio/datetime-type)

[Document](https://www.sanity.io/docs/studio/document-type)

[File](https://www.sanity.io/docs/studio/file-type)

[Geopoint](https://www.sanity.io/docs/studio/geopoint-type)

[Image](https://www.sanity.io/docs/studio/image-type)

[Number](https://www.sanity.io/docs/studio/number-type)

[Object](https://www.sanity.io/docs/studio/object-type)

[Reference](https://www.sanity.io/docs/studio/reference-type)

[Slug](https://www.sanity.io/docs/studio/slug-type)

[String](https://www.sanity.io/docs/studio/string-type)

[Span](https://www.sanity.io/docs/studio/span-type)

[Text](https://www.sanity.io/docs/studio/text-type)

[URL](https://www.sanity.io/docs/studio/url-type)

[Global Document Reference](https://www.sanity.io/docs/studio/global-document-reference-type)

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Name of any valid schema type. This will be the type of the value in the data record. |
| name \* | The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | Takes a static or a callback function that resolves to a boolean value and hides the given field based on it. You can use this property for conditional fields. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| deprecated | Marks a document type or a field as deprecated. This will render the field(s) as read-only with a visual deprecation message defined by the reason property.

Example: deprecated: { reason: 'no longer used' }

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| options | A unique set of options depending on the type. See the individual schema type references for available options. |
| validation | Enables adding one or more validation rules to the field. See the validation guide for more details, the section below for common validation methods, and the individual schema type references for additional methods. |

### Validation

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures the field exists.

Example: (Rule) => Rule.required() |
| either(\[rule, rule, ...]) | Accepts an array of rules. If any are truthy, the validation passes.

Example: (rule) => rule.either(\[rule.required().min(1), rule.custom((\_, context) => context.document?.category !== 'bicycle')]) |
| all(\[rule, rule, ...]) | Accepts an array of multiple rules, all of which must be true for the validation to pass.

Example: (rule) => rule.all(\[rule.required(), rule.custom((value, context) => { ... })]) |
| custom(value, context) | Allows for custom validation rules. Receives the field value and the context. Must return true if validation passes, or an error message if validation fails.

Example: rule => rule.custom(value => { ... }) |

**Note**: The properties listed above are common for all data types. For a more thorough description of how to use them, see the individual schema type references.

## Schema organization tips

The studio loads all schemas defined under `schema.types` in `studio.config.js`.

```javascript
//sanity.config.js
import {defineConfig} from 'sanity'

export default defineConfig({
  /* ... */
  schema: {
    types: [
      {
        title: "My Example Document Type",
        name: "exampleDocumentType",
        type: "document",
        fields: [
          {
            title: "Greeting",
            name: "greeting",
            type: "string"
          }
        ]
      }  
    ]
  }
})

```

To keep things organized, consider keeping the types array in a separate file and import it into `studio.config.js`.

```javascript
//schemaTypes.js
export const schemaTypes = [
  {
    title: "My Example Document Type",
    name: "exampleDocumentType",
    type: "document",
    fields: [
      {
        title: "Greeting",
        name: "greeting",
        type: "string"
      }
    ]
  }  
]

//sanity.config.js
import {defineConfig} from 'sanity'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  /* ... */
  schema: {
    types: schemaTypes
  }
})

```

You should also consider using the [defineType](https://reference.sanity.io/sanity/index/defineType/), [defineField](https://reference.sanity.io/sanity/index/defineField/) and [defineArrayMember](https://reference.sanity.io/sanity/index/defineArrayMember/) helper functions when working with schemas. These will give you better IDE auto-suggestions and provide type-safety when used in TypeScript files. Using these functions is *completely optional.*

```javascript
import {defineType, defineField, defineArrayMember} from 'sanity'

export const someDocumentType = defineType({
  title: "Some Document Type",
  name: "exampleDocumentType",
  type: "document",
  fields: [
    defineField({
      title: "String array",
      name: "strings",
      type: "array",
      of: [
        defineArrayMember({ type: "string" })  
      ]
    })
  ]
})  

```

## Plugins

Plugins may also provide types. They will be available in the studio exactly like studio configured types.

Using plugins to organize your code can be helpful as the studio codebase grows.

```javascript
// pluginWithSchema.js
import {definePlugin, defineType, defineField} from 'sanity'

export const pluginWithSchema = definePlugin({
  name: 'plugin-with-schema',
  schema: {
    types: [
      defineType({
        title: "Plugin object",
        name: "exampleObject",
        type: "document",
        fields: [
          defineField({
            title: "Title",
            name: "title",
            type: "string"
          })
        ]
      })    
    ]
  }
})

//sanity.config.js
import {defineConfig} from 'sanity'
import {pluginWithSchema} from './pluginWithSchema'

export default defineConfig({
  /* ... */
  plugins: [pluginWithSchema()]
})

```
