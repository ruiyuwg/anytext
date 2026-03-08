# String

![Screenshot from Sanity Studio of a string field](https://cdn.sanity.io/images/3do82whm/next/a6c032005fefd5fdfc0f5e177ea5659819dc1971-4608x2800.png)

Short string. Typically used for titles, names, and labels. If you need a basic multi-line string input, use the [text](https://www.sanity.io/docs/text-type). If you need text with markup and structured data, use [block](https://www.sanity.io/docs/block-type). See the [StringDefinition](https://reference.sanity.io/sanity/index/StringDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Required. Value must be set to string. |
| name \* | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal string value or a resolver function that returns either a literal string value or a promise resolving to the initial string value. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| components | Lets you provide custom components to override the studio defaults in various contexts. |
| placeholder | Placeholder text shown in the input when it has no value. |

## Options ([StringOptions](https://reference.sanity.io/sanity/index/StringOptions/))

#### Properties

| Property | Description |
| --- | --- |
| list | A list of predefined values that the user can choose from. The array can either include string values \['sci-fi', 'western'] or objects \[{title: 'Sci-Fi', value: 'sci-fi'}, ...].

String values will automatically be made uppercase in the Studio. To prevent this, use object values instead. |
| layout | Controls how the items defined in the list option are presented. If set to 'radio' the list will render radio buttons. If set to 'dropdown' you'll get a dropdown menu instead. Default is dropdown. |
| direction | Controls how radio buttons are lined up. Use direction: 'horizontal|vertical' to render radio buttons in a row or a column. Default is vertical. Will only take effect if the layout option is set to radio. |

## Validation ([StringRule](https://reference.sanity.io/sanity/index/StringRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| min(minLength) | Minimum length of string. |
| max(maxLength) | Maximum length of string. |
| length(exactLength) | Exact length of string. |
| uppercase() | All characters must be uppercase. |
| lowercase() | All characters must be lowercase. |
| email() | Value must be a valid email-address. |
| regex(pattern\[, options]) | String must match the given pattern.

options is an optional object, currently you can set options.name and options.invert.

Providing a name will make the message more understandable to the user ("Does not match the -pattern").

Set invert to true in order to allow any value that does NOT match the pattern. |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

## Examples

### Field configuration

```javascript
{
  title: 'Title',
  name: 'title',
  type: 'string',
  description: 'Make it catchy',
  validation: Rule => Rule.max(120).warning(`A title shouldn't be more than 120 characters.`)
}
```

### List of predefined strings

Input

```javascript
{
  title: 'Genre',
  name: 'genre',
  type: 'string',
  options: {
    list: [
      {title: 'Sci-Fi', value: 'sci-fi'},
      {title: 'Western', value: 'western'}
    ], // <-- predefined values
    layout: 'radio' // <-- defaults to 'dropdown'
  }
}
```

Response

```json
{
  "_type": "movie",
  "_id": "23407q-qwerqyt12",
  "genre": "sci-fi",
  ...
}
```

> \[!TIP]
> Protip
> Want to make a multi-select for strings? Check out [the Array schema type](https://www.sanity.io/docs/array-type) to see how you can build an array of strings, references, objects, and more.

For details on how to access the `title` value of a list in your document list preview, please see the documentation on [previewing from predefined string lists](https://www.sanity.io/docs/studio/previews-list-views).

### Setting initial value for string fields

You can use [initial values](https://www.sanity.io/guides/getting-started-with-initial-values-for-new-documents) to preset string fields on document creation:

```javascript
export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  initialValue: {
    title: 'The initial title'
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    }
  ]
}
```
