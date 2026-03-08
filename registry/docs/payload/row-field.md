# Row Field

Source: https://payloadcms.com/docs/fields/row

The Row Field is presentational-only and only affects the [Admin Panel](../admin/overview). By using it, you can arrange [Fields](./overview) next to each other horizontally.

<LightDarkImage
srcLight="https://payloadcms.com/images/docs/fields/row.png"
srcDark="https://payloadcms.com/images/docs/fields/row-dark.png"
alt="Shows a row field in the Payload Admin Panel"
caption="Admin Panel screenshot of a Row field"
/>

To add a Row Field, set the `type` to `row` in your [Field Config](./overview):

```ts
import type { Field } from 'payload'

export const MyRowField: Field = {
  // ...
  // highlight-start
  type: 'row',
  fields: [
    // ...
  ],
  // highlight-end
}
```

## Config Options

| Option          | Description                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **`fields`** \* | Array of field types to nest within this Row.                                                                             |
| **`admin`**     | Admin-specific configuration excluding `description`, `readOnly`, and `hidden`. [More details](./overview#admin-options). |
| **`custom`**    | Extension point for adding custom data (e.g. for plugins)                                                                 |

*\* An asterisk denotes that a property is required.*

## Example

```ts
import type { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  fields: [
    {
      type: 'row', // required
      fields: [
        // required
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
}
```
