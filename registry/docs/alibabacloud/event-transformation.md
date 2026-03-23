EventBridge transforms events from the standard [CloudEvents 1.0](https://github.com/cloudevents/spec/blob/v1.0/spec.md) format into the structure that your event target expects. Configure a transformation method on each event rule to control what data reaches the target: the full event, a single extracted field, a static payload, or a custom structure assembled from event values.

## Transformation methods

EventBridge provides four transformation methods. Each gives you a different level of control over the event payload delivered to the target.

**Method**

**Behavior**

**When to use**

**Complete Event**

Delivers the full CloudEvents payload without changes

The target accepts CloudEvents natively

**Partial Event**

Extracts a single value with a JSONPath expression

The target needs only one field from the event

**Constant**

Delivers a fixed string, ignoring the event content

The event is a trigger only -- the target needs a static payload

**Template**

Extracts multiple values with JSONPath, then assembles them into a custom string or JSON structure

The target requires a specific payload format

The following examples use a sample CloudEvents event:

```
{
    "id": "7adc8c1a-645d-4476-bdef-5d6fb57f****",
    "source": "acs.oss",
    "specversion": "1.0",
    "type": "oss:ObjectCreated:PostObject",
    "datacontenttype": "application/json",
    "dataschema": "http://example.com/test.json",
    "subject": "acs:oss:cn-hangzhou:1234567:xls-papk/game_apk/123.jpg",
    "time": "2020-08-17T16:04:46.149Asia/Shanghai",
    "aliyuneventbusname": "demo-bus",
    "aliyunregionid": "Shanghai",
    "data": {
        "name": "test",
        "scope": 100
    }
}
```

### Complete Event

The entire CloudEvents payload is delivered to the target as-is. No configuration is required.

**Output:**

```
{
    "id": "7adc8c1a-645d-4476-bdef-5d6fb57f****",
    "source": "acs.oss",
    "specversion": "1.0",
    "type": "oss:ObjectCreated:PostObject",
    "datacontenttype": "application/json",
    "dataschema": "http://example.com/test.json",
    "subject": "acs:oss:cn-hangzhou:1234567:xls-papk/game_apk/123.jpg",
    "time": "2020-08-17T16:04:46.149Asia/Shanghai",
    "aliyuneventbusname": "demo-bus",
    "aliyunregionid": "Shanghai",
    "data": {
        "name": "test",
        "scope": 100
    }
}
```

### Partial Event

A single JSONPath expression extracts one value from the event.

**Configuration:**

```
$.data.name
```

**Output:**

```
test
```

**Usage notes:**

-   Only one JSONPath expression is allowed per Partial Event configuration.
    
-   The value can be up to 10,240 characters in length.
    

### Constant

A fixed string replaces the event payload. The event itself acts purely as a trigger.

**Configuration:**

```
test1
```

**Output:**

```
test1
```

**Usage notes:**

-   The value can be up to 10,240 characters in length.
    

### Template

Template is the most flexible method. It works in two parts:

1.  **Variable** -- A JSON object that maps variable names to JSONPath expressions (or fixed values). Each JSONPath expression extracts a value from the event.
    
2.  **Template** -- A string or JSON structure that references the variables with `${variableName}` syntax.
    

**Configuration:**

Variable:

```
{
    "name": "$.data.name",
    "constant": "Please deal with it timely."
}
```

Template:

```
The instance is broken, which name is ${name}, ${constant}
```

**Output:**

```
The instance is broken, which name is test, Please deal with it timely.
```

**Usage notes:**

-   Variable values can be JSONPath expressions or fixed strings.
    
-   Nested structures are not supported in variable definitions.
    
-   The variable value can be up to 10,240 characters in length.
    
-   The template value can be up to 10,240 characters in length.
    

## Template output formats

Templates support four output formats: simple strings, simple JSON, JSON with mixed variables and constants, and nested JSON. The simple string, simple JSON, and JSON with variables and constants examples use the same sample event shown above, but with `"state": "RUNNING"` in place of `"scope": 100` in the `data` field. The nested JSON example uses a different sample event.

### Simple string

Variable:

```
{
    "name": "$.data.name",
    "state": "$.data.state"
}
```

Template:

```
"name ${name} is in ${state}"
```

Output:

```
"name test is in RUNNING"
```

### Simple JSON

Variable:

```
{
    "name": "$.data.name",
    "state": "$.data.state"
}
```

Template:

```
{
    "name": "${name}",
    "state": "${state}"
}
```

Output:

```
{
    "name": "test",
    "state": "RUNNING"
}
```

### JSON with variables and constants

Combine extracted values with hardcoded constants, arrays, and different data types in a single template.

Variable:

```
{
    "name": "$.data.name",
    "state": "$.data.state"
}
```

Template:

```
{
    "name": "${name}",
    "state": [
        9,
        "${state}",
        true
    ],
    "Transformed": "Yes"
}
```

Output:

```
{
    "name": "test",
    "state": [
        9,
        "RUNNING",
        true
    ],
    "Transformed": "Yes"
}
```

### Nested JSON

To pass through nested objects or arrays from the event, reference the variable **without** quotes so that EventBridge injects the raw JSON structure.

The following example uses a different sample event:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.imm",
    "specversion": "1.0",
    "subject": "acs.imm:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "imm:FileMeta:Index",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42.179PRC",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "ProjectName": "test_project",
        "DatasetName": "test_dataset",
        "RequestId": "D2A3AE88-D17C-4CCC-B149-6651115C****",
        "StartTime": "2021-07-22T14:03:15.489885+08:00",
        "EndTime": "2021-07-22T14:05:15.489885+08:00",
        "Message": "InvalidParameter",
        "Success": false,
        "Files": [
            {
                "URI": "oss://bucket/file",
                "CustomId": "defaultId",
                "CustomLabels": {
                    "Key1": "Val1",
                    "Key2": "Val2"
                },
                "Error": "InternalError"
            }
        ]
    }
}
```

Variable:

```
{
    "ProjectName": "$.data.ProjectName",
    "Files": "$.data.Files"
}
```

Template (`${Files}` has no quotes because it references an array):

```
{
    "ProjectName": "${ProjectName}",
    "Files": ${Files}
}
```

Output:

```
{
    "ProjectName": "test_project",
    "Files": [
        {
            "URI": "oss://bucket/file",
            "CustomId": "defaultId",
            "CustomLabels": {
                "Key1": "Val1",
                "Key2": "Val2"
            },
            "Error": "InternalError"
        }
    ]
}
```

**Note**

Use `"${variableName}"` (with quotes) when the extracted value is a string. Use `${variableName}` (without quotes) when it is a JSON object or array.

## Escape functions

EventBridge provides two built-in functions for escaping special characters in template variables: `jsonEscape()` and `htmlEscape()`.

### jsonEscape()

Escapes special characters in JSON strings to prevent embedded characters from breaking the JSON structure.

Variable:

```
{
    "var": "\"abc\""
}
```

Template:

```
{
    "text": "var is ${jsonEscape(var)}"
}
```

Output:

```
{
    "text": "var is \"abc\""
}
```

### htmlEscape()

Escapes HTML special characters so they render as plain text. Use this function to prevent script injection when event data is embedded in HTML output.

Variable:

```
{
    "var": "<script>alert('unsafe');</script>"
}
```

Template:

```
<p>User Input: ${htmlEscape(var)}</p>
```

Output:

```
<p>User Input: &lt;script&gt;alert('unsafe');&lt;/script&gt;</p>
```

## Limits

**Item**

**Limit**

Partial Event value length

Up to 10,240 characters

Constant value length

Up to 10,240 characters

Template variable value length

Up to 10,240 characters

Template value length

Up to 10,240 characters

Partial Event variables per rule

1

Nested structures in variable definitions

Not supported

## Common issues

**Issue**

**Cause**

**Solution**

JSON output is malformed

A string variable is referenced without quotes, or an object/array variable is referenced with quotes

Use `"${var}"` for strings and `${var}` for objects and arrays

Variable value is empty in the output

The JSONPath expression does not match any field in the event

Verify the JSONPath expression against the actual event structure

Special characters break JSON output

The variable value contains characters such as double quotes that conflict with the JSON structure

Wrap the variable reference with `jsonEscape()`: `${jsonEscape(var)}`

HTML renders injected scripts

Event data contains HTML or JavaScript that is not escaped before embedding

Wrap the variable reference with `htmlEscape()`: `${htmlEscape(var)}`
