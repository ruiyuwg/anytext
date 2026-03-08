# URL

A string which represents a URL. See the [UrlDefinition](https://reference.sanity.io/sanity/index/UrlDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to url. |
| name \* | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value that will be used when using this type to create new values. Can be either the literal value or a resolver function that returns either the literal value or a promise that resolves to the initial value. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| components | Lets you provide custom components to override the studio defaults in various contexts. |
| placeholder | Placeholder text shown in the input when it has no value. |

## Options ([UrlOptions](https://reference.sanity.io/sanity/index/UrlOptions/))

## Validation ([UrlRule](https://reference.sanity.io/sanity/index/UrlRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| uri(options) | scheme - String, RegExp or Array of schemes to allow (default: \['http', 'https']).

allowRelative - Whether or not to allow relative URLs (default: false).

relativeOnly - Whether to only allow relative URLs (default: false). |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

The URL type is basically just a string input, but the rendered HTML input field will have the `type` attribute set to `url`, like so:

```html
<input type="url">
```

Input

```javascript
{
  title: 'Image URL',
  name: 'imageUrl',
  type: 'url'
}
```

Response

```json
{"imageUrl": "https://example.com/img.jpg"}
```

To allow more protocols than http/https, you can specify validation options:

```javascript
{
  title: 'Link',
  name: 'href',
  type: 'url',
  validation: Rule => Rule.uri({
    scheme: ['http', 'https', 'mailto', 'tel']
  })
}
```
