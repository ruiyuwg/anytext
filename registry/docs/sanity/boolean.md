# Boolean

A boolean, `true` or `false`. See the [BooleanDefinition](https://reference.sanity.io/sanity/index/BooleanDefinition/) reference for the full type definition.

![Screenshot of a boolean field in Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/5780e4036ae661fa86d2749813f81af0ee1dd841-3456x2100.png)

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to boolean. |
| name \* | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal value or a resolver function that returns either a literal value or a promise resolving to the initial value. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |

## Options ([BooleanOptions](https://reference.sanity.io/sanity/index/BooleanOptions/))

#### Properties

| Property | Description |
| --- | --- |
| layout | Either switch (default) or checkbox

This lets you control the visual appearance of the input. By default the input for boolean fields will display as a switch, but you can also make it appear as a checkbox. |

## Validation ([BooleanRule](https://reference.sanity.io/sanity/index/BooleanRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

Input

```javascript
{
  title: 'Has the movie been released?',
  name: 'released',
  type: 'boolean'
}
```

Response

```json
{
  "_type": "movie",
  "released": true,
  ...
}
```

New documents are created without schema-defined fields. This means that a boolean field in your schema will not immediately result in documents containing the boolean key. The key must be assigned a value for it to appear in a document. Make sure your front-end code treats a missing boolean value as false.

> \[!TIP]
> Protip
> In GROQ you can handle missing booleans and false values equally like this `*[_type == 'story' && featured != true]` which would match stories where featured is false or missing (or to be fair, any other value that is not `true`).
