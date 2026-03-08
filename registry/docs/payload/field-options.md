## Field Options

All fields require at least the `type` property. This matches the field to its corresponding [Field Type](#field-types) to determine its appearance and behavior within the [Admin Panel](../admin/overview). Each Field Type has its own unique set of options based on its own type.

To set a field's type, use the `type` property in your Field Config:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text', // highlight-line
  name: 'myField',
}
```

For a full list of configuration options, see the documentation for each
[Field Type](#field-types).

### Field Names

All [Data Fields](#data-fields) require a `name` property. This is the key that will be used to store and retrieve the field's value in the database. This property must be unique amongst this field's siblings.

To set a field's name, use the `name` property in your Field Config:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField', // highlight-line
}
```

Payload reserves various field names for internal use. Using reserved field names will result in your field being sanitized from the config.

The following field names are forbidden and cannot be used:

- `__v`
- `salt`
- `hash`
- `file`
- `status` - with Postgres Adapter and when drafts are enabled

### Field-level Hooks

In addition to being able to define [Hooks](../hooks/overview) on a document-level, you can define extremely granular logic field-by-field.

To define Field-level Hooks, use the `hooks` property in your Field Config:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  // highlight-start
  hooks: {
    // ...
  },
  // highlight-end
}
```

For full details on Field-level Hooks, see the [Field Hooks](../hooks/fields) documentation.

### Field-level Access Control

In addition to being able to define [Access Control](../access-control/overview) on a document-level, you can define extremely granular permissions field-by-field.

To define Field-level Access Control, use the `access` property in your Field Config:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  // highlight-start
  access: {
    // ...
  },
  // highlight-end
}
```

For full details on Field-level Access Control, see the [Field Access Control](../access-control/fields) documentation.

### Default Values

Fields can be optionally prefilled with initial values. This is used in both the [Admin Panel](../admin/overview) as well as API requests to populate missing or undefined field values during the `create` or `update` operations.

To set a field's default value, use the `defaultValue` property in your Field Config:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  defaultValue: 'Hello, World!', // highlight-line
}
```

Default values can be defined as a static value or a function that returns a value. When a `defaultValue` is defined statically, Payload's [Database Adapters](../database/overview) will apply it to the database schema or models.

Functions can be written to make use of the following argument properties:

- `user` - the authenticated user object
- `locale` - the currently selected locale string
- `req` - the `PayloadRequest` object

Here is an example of a `defaultValue` function:

```ts
import type { Field } from 'payload'

const translation: {
  en: 'Written by'
  es: 'Escrito por'
}

export const myField: Field = {
  name: 'attribution',
  type: 'text',
  // highlight-start
  defaultValue: ({ user, locale, req }) =>
    `${translation[locale]} ${user.name}`,
  // highlight-end
}
```

**Tip:** You can use async `defaultValue` functions to fill fields with data
from API requests or Local API using `req.payload`.

### Validation

Fields are automatically validated based on their [Field Type](#field-types) and other [Field Options](#field-options) such as `required` or `min` and `max` value constraints. If needed, however, field validations can be customized or entirely replaced by providing your own custom validation functions.

To set a custom field validation function, use the `validate` property in your Field Config:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  validate: (value) => Boolean(value) || 'This field is required', // highlight-line
}
```

Custom validation functions should return either `true` or a `string` representing the error message to display in API responses.

The following arguments are provided to the `validate` function:

| Argument | Description                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| `value`  | The value of the field being validated.                                         |
| `ctx`    | An object with additional data and context. [More details](#validation-context) |

#### Validation Context

The `ctx` argument contains full document data, sibling field data, the current operation, and other useful information such as currently authenticated user:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  // highlight-start
  validate: (val, { user }) =>
    Boolean(user) || 'You must be logged in to save this field',
  // highlight-end
}
```

The following additional properties are provided in the `ctx` object:

| Property      | Description                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`        | An object containing the full collection or global document currently being edited.                                                                          |
| `siblingData` | An object containing document data that is scoped to only fields within the same parent of this field.                                                       |
| `operation`   | Will be `create` or `update` depending on the UI action or API call.                                                                                         |
| `path`        | The full path to the field in the schema, represented as an array of string segments, including array indexes. I.e `['group', 'myArray', '1', 'textField']`. |
| `id`          | The `id` of the current document being edited. `id` is `undefined` during the `create` operation.                                                            |
| `req`         | The current HTTP request object. Contains `payload`, `user`, etc.                                                                                            |
| `event`       | Either `onChange` or `submit` depending on the current action. Used as a performance opt-in. [More details](#validation-performance).                        |

#### Localized and Built-in Error Messages

You can return localized error messages by utilizing the translation function provided in the `req` object:

```ts
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  validate: (value, { req: { t } }) =>
    Boolean(value) || t('validation:required'), // highlight-line
}
```

This way you can use [Custom Translations](../configuration/i18n#custom-translations) as well as Payload's built in error messages (like `validation:required` used in the example above). For a full list of available translation strings, see the [english translation file](https://github.com/payloadcms/payload/blob/main/packages/translations/src/languages/en.ts) of Payload.

#### Reusing Default Field Validations

When using custom validation functions, Payload will use yours in place of the default. However, you might want to simply augment the default validation with your own custom logic.

To reuse default field validations, call them from within your custom validation function:

```ts
import { text } from 'payload/shared'

const field: Field = {
  name: 'notBad',
  type: 'text',
  validate: (val, args) => {
    if (val === 'bad') return 'This cannot be "bad"'
    return text(val, args) // highlight-line
  },
}
```

Here is a list of all default field validation functions:

```ts
import {
  array,
  blocks,
  checkbox,
  code,
  date,
  email,
  json,
  number,
  point,
  radio,
  relationship,
  richText,
  select,
  tabs,
  text,
  textarea,
  upload,
} from 'payload/shared'
```

#### Validation Performance

When writing async or computationally heavy validation functions, it is important to consider the performance implications. Within the Admin Panel, validations are executed on every change to the field, so they should be as lightweight as possible and only run when necessary.

If you need to perform expensive validations, such as querying the database, consider using the `event` property in the `ctx` object to only run that particular validation on form submission.

To write asynchronous validation functions, use the `async` keyword to define your function:

```ts
import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  fields: [
    {
      name: 'customerNumber',
      type: 'text',
      // highlight-start
      validate: async (val, { event }) => {
        if (event === 'onChange') {
          return true
        }

        // only perform expensive validation when the form is submitted
        const response = await fetch(`https://your-api.com/customers/${val}`)

        if (response.ok) {
          return true
        }

        return 'The customer number provided does not match any customers within our records.'
      },
      // highlight-end
    },
  ],
}
```

For more performance tips, see the [Performance
documentation](../performance/overview).

## Custom ID Fields

All [Collections](../configuration/collections) automatically generate their own ID field. If needed, you can override this behavior by providing an explicit ID field to your config. This field should either be required or have a hook to generate the ID dynamically.

To define a custom ID field, add a top-level field with the `name` property set to `id`:

```ts
import type { CollectionConfig } from 'payload'

export const MyCollection: CollectionConfig = {
  // ...
  fields: [
    {
      name: 'id', // highlight-line
      required: true,
      type: 'number',
    },
  ],
}
```

**Reminder:** The Custom ID Fields can only be of type [`Number`](./number) or
[`Text`](./text). Custom ID fields with type `text` must not contain `/` or
`.` characters.
