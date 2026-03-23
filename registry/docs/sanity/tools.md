# Tools

[Introduction to tools](https://www.sanity.io/docs/studio/studio-tools)

[Tools cheat sheet](https://www.sanity.io/docs/studio/tools-cheat-sheet)

The most commonly familiar tool is the Structure tool (formerly called "Desk tool"), which lets you browse and edit documents. You can install tools with plugins or create your own. Tools also control the top-level Studio routing.

The `tools` config property accepts an array of appropriately shaped objects (Tool) or a callback function returning the same. The callback function receives an array of existing tools and a context object as arguments.

## Tool Properties

#### Properties

| Property | Description |
| --- | --- |
| name \* | Unique identifier for the tool |
| title \* | Title for the tool. This is what will show up in the navbar. |
| component | The root component for your tool. This is what shows up in the main work area of your studio. |
| router | Router for the tool. See Router in the API explorer. |
| options | Optional configuration object. Passed as arguments to the tool when invoked. |
| getIntentState | Gets the state for the given intent. |
| canHandleIntent |  |

### Tool Context Properties

These are the properties received in the second argument of the callback function.

#### Properties

| Property | Description |
| --- | --- |
| dataset | Name of the current dataset |
| projectId | Unique ID for the project |
| schema | The schema registry of your project. Use \`schema.get("schemaTypeName") to retrieve any schema by name. |
| currentUser | An object with info about the currently logged in user. |
| getClient | Callback function that returns a configured client |

### Example

```javascript
// in dev-tool.tsx
import { ToolIcon } from '@sanity/icons'
import { Card, Text } from '@sanity/ui'

const MyCoolComponent = (props) => {
  return (
    <Card padding={4} tone="positive">
      <Text>I am a very useful tool.</Text>
    </Card>
  )
}

export const devTool = (config?: any) => ({
  name: 'dev-tool',
  title: 'Dev Tool',
  component: MyCoolComponent,
  ...config,
})

// in sanity.config.ts
import { defineConfig } from 'sanity'
import { devTool } from './dev-tool'
//... more setup

export default defineConfig({
  projectId: '<projectId>',
  dataset: '<your-dataset>',
  tools: [
    myTool(
       // overrides the default tool title
      {title: 'My better title'}
      ),
    ],
  // ... more config
})
```

# Initial Value Templates

> \[!NOTE]
> To learn more about templates and how to assign them default values to prepopulate a document, see the [introduction to initial value templates](https://www.sanity.io/docs/studio/initial-value-templates).

defaults(): array

Returns an array of all the default templates - one for each document type defined in the schema. Use this to combine your own templates with the default ones.

template(config): function

Creates a new initial value template with the given configuration. Returns a template builder function which can be used to customize the template.

## Parameters

#### Properties

| Property | Description |
| --- | --- |
| id \* | An id used to identify the template. You will often refer to this ID when configuring which initial value templates are available in a given context. Must be unique. |
| title \* | The title of the template, used for display purposes. |
| description | An optional description, used to clarify the purpose of the template. |
| schemaType \* | The name of the schema type the template applies to. |
| value \* | The actual initial value to use, or a function that resolves to one.

The function receives an object of any defined parameters as the first argument and should return either a plain object value or a promise which resolves to one. |
| parameters | An array of parameters the template expects to receive. Follows the same format as fields within a schema type.

Note that only the property name is currently used - validation is not performed, nor is type checking. Parameters should still define the type for future compatiblity. |
| icon | An optional react component to use as the icon for this template |

# Help and troubleshooting

#### Most popular

[Studio v3 to v4](https://www.sanity.io/docs/help/v3-to-v4)

[React 19 and Sanity](https://www.sanity.io/docs/help/react-19)

[React Compiler and Sanity](https://www.sanity.io/docs/help/react-compiler)

[CLI errors](https://www.sanity.io/docs/help/cli-errors)

[Object type has a invalid value for fields](https://www.sanity.io/docs/help/schema-object-fields-invalid)

[API versioning in Javascript Client](https://www.sanity.io/docs/help/js-client-api-version)

# Array items resolve to same JSON type

This warning appears when you have an array type where multiple members resolve to the same underlying JSON type (e.g., both string and text resolve to JSON type "string"). When Sanity stores array data, it uses the JSON type to serialize values. If multiple array members share the same JSON type, Sanity cannot distinguish between them at runtime. For example, if an array allows both string and text items, there's no way to know which type a given string value was originally intended to be when reading the data back.

## Example of problematic schema

**schema.ts**

```
defineField({
  name: 'content',
  type: 'array',
  of: [
    {type: 'string', name: 'heading'},
    {type: 'text', name: 'paragraph'},  // Both resolve to JSON "string"
  ],
})
```

Both string and text (as well as url and email) resolve to the JSON type "string". This means we have no way to tell them apart when the document is read.

### How to fix

You have two options:

- \*\*Option 1: \*\*Use only one primitive type per JSON typeIf you only need one string-based type in your array, remove the duplicate:

**schema.ts**

```
defineField({
  name: 'content',
  type: 'array',
  of: [
    {type: 'string'},
  ],
})
```

- **Option 2:** Wrap primitives in object typesIf you need different string-based inputs with different behaviors, wrap them in named object types:

**schema.ts**

```
defineField({
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'heading',
      title: 'Heading',
      fields: [{name: 'value', type: 'string'}],
    },
    {
      type: 'object',
      name: 'paragraph',
      title: 'Paragraph',
      fields: [{name: 'value', type: 'text'}],
    },
  ],
})
```

- This gives each item a distinct \_type property that Sanity can use to distinguish between them.
