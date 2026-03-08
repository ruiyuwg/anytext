# Number

A number. See the [NumberDefinition](https://reference.sanity.io/sanity/index/NumberDefinition/) reference for the full type definition.

![A current popularity indicator with a number field](https://cdn.sanity.io/images/3do82whm/next/6a8dc39442ae4dbc12c8579c0dd2c3d54b778c48-1152x474.png)

Any number, e.g. `900`, `900.0`, `9E+2` or `9.0E+2`.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to number. |
| name \* | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal number value or a resolver function that returns either a literal number value or a promise resolving to a number value. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| placeholder | Placeholder text shown in the input when it has no value. |

## Options ([NumberOptions](https://reference.sanity.io/sanity/index/NumberOptions/))

#### Properties

| Property | Description |
| --- | --- |
| list | A list of predefined values that the user may pick from. The array can include numeric values \[1, 2] or objects \[{value: 1, title: 'One'}, ...]. |
| layout | Controls how the items defined in the list option are presented. If set to 'radio' the list will render radio buttons. If set to 'dropdown' you'll get a dropdown menu instead. Default is dropdown. |
| direction | Controls how radio buttons are lined up. Use direction: 'horizontal|vertical' to render radio buttons in a row or a column. Default is vertical. Will only take effect if the layout option is set to radio. |

## Validation ([NumberRule](https://reference.sanity.io/sanity/index/NumberRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| min(minNumber) | Minimum value (inclusive). |
| max(maxNumber) | Maximum value (inclusive). |
| lessThan(limit) | Value must be less than the given limit. |
| greaterThan(limit) | Value must be greater than the given limit. |
| integer() | Value must be an integer (no decimals). |
| precision(limit) | Specifies the maximum number of decimal places allowed. |
| positive() | Requires the number to be positive (>= 0). |
| negative() | Requires the number to be negative (< 0). |
| custom(fn) | Create a custom validation. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

Input

```javascript
{
  title: 'Current popularity',
  name: 'popularity',
  type: 'number'
}

```

Response

```json
{
  "_type": "movie",
  "popularity": 12.5,
  ...
}
```

> \[!WARNING]
> Gotcha
> Never use `number` for storing a phone-number. Minimize pain down the road and use `string` instead.
