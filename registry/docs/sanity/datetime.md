# Datetime

An ISO-8601 formatted string containing date and time stored in UTC. E.g. `2017-02-12T09:15:00Z`. See the [DatetimeDefinition](https://reference.sanity.io/sanity/index/DatetimeDefinition/) reference for the full type definition.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to datetime. |
| name \* | Required. The field name. This will be the key in the data record. |
| title | Human readable label for the field. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. |
| readOnly | If set to true, this field will not be editable in the content studio. You can also return a callback function to use it as a conditional field. |
| description | Short description to editors how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal datetime string or a resolver function that returns either a literal datetime string value or a promise resolving to a datetime string value. |
| components | Lets you provide custom components to override the studio defaults in various contexts. The components available are field, input, item, preview. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message defined by the single required reason property.

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| placeholder | Placeholder text shown in the input when it has no value. |

## Options ([DatetimeOptions](https://reference.sanity.io/sanity/index/DatetimeOptions/))

#### Properties

| Property | Description |
| --- | --- |
| dateFormat | Controls how the date input field formats the displayed date. Use any valid Moment format option. Default is YYYY-MM-DD. |
| timeFormat | Controls how the time input field formats the displayed date. Use any valid Moment format option. Default is HH:mm. |
| timeStep | Number of minutes between each entry in the time input. Default is 15 which lets the user choose between 09:00, 09:15, 09:30 and so on. |
| allowTimeZoneSwitch | Determines whether the user is allowed to set a personalized time zone for viewing and interacting with the field in Studio. Defaults to true. |
| displayTimeZone | Set a specific time zone to be used when viewing and interacting with the field in Studio. Expects a string in the shape of a valid time zone identifier. Note: the timestamp stored in the dataset is always UTC. |

## Validation ([DatetimeRule](https://reference.sanity.io/sanity/index/DatetimeRule/))

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| min(minDate) | Minimum date (inclusive). minDate should be in ISO 8601 format. |
| max(maxDate) | Maximum date (inclusive). maxDate should be in ISO 8601 format. |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

The date+time is represented as a string in a *simplified* extended ISO format ([ISO 8601](http://en.wikipedia.org/wiki/ISO_8601)). This is the same format as [date.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) and **date.toJSON()** returns.

Input

```javascript
{
  title: 'Launch Scheduled At',
  name: 'launchAt',
  type: 'datetime'
}
```

Response

```json
{
  "launchAt": "2017-02-12T09:15:00Z"
}
```

## Example: All options set

```javascript
{
  title: 'Launch Scheduled At',
  name: 'launchAt',
  type: 'datetime',
  options: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    timeStep: 15,
    allowTimeZoneSwitch: true, // default value, could be omitted
    displayTimeZone: 'Europe/Berlin'
  }
}
```
