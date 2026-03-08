# Text

A basic string expected to contain multiple lines. Typically used for a summary, short bio etc. If you need text with markup and structured data, use [block text](https://www.sanity.io/docs/block-type). See the [TextDefinition](https://reference.sanity.io/sanity/index/TextDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to text. |
| name \* | Required. The field name. This will be the key in the data record. |
| rows | Controls the number of rows/lines in the rendered textarea. Default number of rows: 10. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal string value or a resolver function that returns either a literal string value or a promise resolving to the string initial value. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| components | Lets you provide custom components to override the studio defaults in various contexts. |
| placeholder | Placeholder text shown in the input when it has no value. |

## Options ([TextOptions](https://reference.sanity.io/sanity/index/TextOptions/))

## Validation ([TextRule](https://reference.sanity.io/sanity/index/TextRule/))

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

Input

```javascript
{
  title: 'Description',
  name: 'description',
  type: 'text'
}
```

Response

```json
{
  "_type": "movie",
  "_id": "23407q-qwerqyt12",
  "description": "...rather long text here....\n  yes.. long",
  ...
}
```
