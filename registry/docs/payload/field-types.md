## Field Types

Payload provides a wide variety of built-in Field Types, each with its own unique properties and behaviors that determine which values it can accept, how it is presented in the API, and how it will be rendered in the [Admin Panel](../admin/overview).

To configure fields, use the `fields` property in your [Collection](../configuration/collections) or [Global](../configuration/globals) config:

```ts
import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'pages',
  // highlight-start
  fields: [
    {
      name: 'field',
      type: 'text',
    },
  ],
  // highlight-end
}
```

**Reminder:** Each field is an object with at least the `type` property. This
matches the field to its corresponding Field Type. [More
details](#field-options).

There are three main categories of fields in Payload:

- [Data Fields](#data-fields)
- [Presentational Fields](#presentational-fields)
- [Virtual Fields](#virtual-fields)

To begin writing fields, first determine which [Field Type](#field-types) best supports your application. Then author your field accordingly using the [Field Options](#field-options) for your chosen field type.

### Data Fields

Data Fields are used to store data in the [Database](../database/overview). All Data Fields have a `name` property. This is the key that will be used to store the field's value.

Here are the available Data Fields:

- [Array](./array) - for repeating content, supports nested fields
- [Blocks](./blocks) - for block-based content, supports nested fields
- [Checkbox](./checkbox) - saves boolean true / false values
- [Code](./code) - renders a code editor interface that saves a string
- [Date](./date) - renders a date picker and saves a timestamp
- [Email](./email) - ensures the value is a properly formatted email address
- [Group](./group) - nests fields within a keyed object
- [JSON](./json) - renders a JSON editor interface that saves a JSON object
- [Number](./number) - saves numeric values
- [Point](./point) - for location data, saves geometric coordinates
- [Radio](./radio) - renders a radio button group that allows only one value to be selected
- [Relationship](./relationship) - assign relationships to other collections
- [Rich Text](./rich-text) - renders a fully extensible rich text editor
- [Select](./select) - renders a dropdown / picklist style value selector
- [Tabs (Named)](./tabs) - similar to group, but renders nested fields within a tabbed layout
- [Text](./text) - simple text input that saves a string
- [Textarea](./textarea) - similar to text, but allows for multi-line input
- [Upload](./upload) - allows local file and image upload

### Presentational Fields

Presentational Fields do not store data in the database. Instead, they are used to organize and present other fields in the [Admin Panel](../admin/overview), or to add custom UI components.

Here are the available Presentational Fields:

- [Collapsible](../fields/collapsible) - nests fields within a collapsible component
- [Row](../fields/row) - aligns fields horizontally
- [Tabs (Unnamed)](../fields/tabs) - nests fields within a tabbed layout. It is not presentational if the tab has a name.
- [Group (Unnamed)](../fields/group) - nests fields within a keyed object. It is not presentational if the group has a name.
- [UI](../fields/ui) - blank field for custom UI components

### Virtual Fields

Virtual fields display data that is not stored in the database, but is computed or derived from other fields.

Here are the available Virtual Fields:

- [Join](../fields/join) - achieves two-way data binding between fields

  **Tip:** Don't see a built-in field type that you need? Build it! Using a
  combination of [Field Validations](#validation) and [Custom
  Components](../custom-components/overview), you can override the entirety of
  how a component functions within the [Admin Panel](../admin/overview) to
  effectively create your own field type.
