# Date

An ISO-8601 formatted string containing date. E.g. `2017-02-12`. See the [DateDefinition](https://reference.sanity.io/sanity/index/DateDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Required. Value must be set to date. |
| name \* | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| placeholder | Placeholder text that appear within the input when it is empty. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal date string value or a resolver function that returns either a literal date string value or a promise resolving to the initial date string value. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |

## Options ([DateOptions](https://reference.sanity.io/sanity/index/DateOptions/))

#### Properties

| Property | Description |
| --- | --- |
| dateFormat | Controls how the date input field formats the displayed date. Use any valid Moment format option. Default is YYYY-MM-DD. |

## Validation ([DateRule](https://reference.sanity.io/sanity/index/DateRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| custom(fn) | Creates a custom validation rule. |
| min(minDate) | Minimum date (inclusive). minDate should be in ISO 8601 format. |
| max(maxDate) | Maximum date (inclusive). maxDate should be in ISO 8601 format. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

![Screenshot of Date field with a title, description, and value.](https://cdn.sanity.io/images/3do82whm/next/a4780c2c8594ddb523fcf824d3cff6c011be05e9-1152x500.png)

The stored date is represented as a string in compliance with [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) (often described as `YYYY-MM-DD`).

> \[!TIP]
> Protip
> If you need to store information about both date and time, use the [datetime](https://www.sanity.io/docs/datetime-type) type instead.

Input

```javascript
{
  title: 'Release date',
  name: 'releaseDate',
  type: 'date'
}
```

Response

```json
{
  "releaseDate": "2017-02-12"
}
```

### Example: All options set

```javascript
{
  title: 'Release date',
  name: 'releaseDate',
  type: 'date',
  options: {
    dateFormat: 'YYYY-MM-DD',
    calendarTodayLabel: 'Today'
  }
}
```
