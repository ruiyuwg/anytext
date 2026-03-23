Event patterns define the criteria that incoming events must meet before EventBridge routes them to a target. When events arrive from diverse sources with varying structures, you need a way to select only the events relevant to your downstream processing. An event pattern is a JSON object that specifies the fields and values to match. EventBridge compares each incoming event against the pattern and forwards only matched events.

A pattern must share the same nested structure as the events it matches.

## Supported operators

The following table summarizes all pattern operators. Each operator is wrapped in an array as the field value.

**Operator**

**Matches when...**

**Syntax example**

Exact value

Field equals the specified string

`"source": ["acs.oss"]`

`prefix`

Field value starts with the string

`"source": [{"prefix": "acs."}]`

`suffix`

Field value ends with the string

`"subject": [{"suffix": ".jpg"}]`

`contains`

Field value includes the string

`"type": [{"contains": "Normal"}]`

`anything-but`

Field value does not equal the string, number, or set

`"state": [{"anything-but": "initializing"}]`

`anything-but` + `prefix`

Field value does not start with the string

`"state": [{"anything-but": {"prefix": "init"}}]`

`numeric`

Field value falls within a numeric range

`"c-count": [{"numeric": [">", 0, "<=", 5]}]`

`cidr`

IP address falls within a CIDR block (IPv4 only)

`"source-ip": [{"cidr": "10.0.0.0/24"}]`

`exists`

Field exists or does not exist in the event

`"state": [{"exists": false}]`

Empty string

Field equals an empty string

`"eventVersion": [""]`

Null

Field is null

`"responseElements": [null]`

## How matching works

EventBridge evaluates patterns using two logical operators:

-   **AND across keys**: All keys in the pattern must match. If a pattern specifies both `source` and `type`, the event must match both.
    
-   **OR across values in an array**: Each key's value is an array. If the array contains multiple values, the event matches if any value matches.
    

Additional matching rules:

-   The event must contain every field specified in the pattern. Extra fields in the event are ignored.
    
-   Matching is character-by-character and case-sensitive. EventBridge does not modify strings during evaluation.
    
-   All values must be valid JSON: strings in double quotes (`""`), unquoted keywords (`true`, `false`, `null`), or numeric values.
    

## Exact value match

Match events where a field equals a specific value. Wrap the value in an array.

The following pattern matches events where `source` is `acs.oss`:

```
{
    "source": [
        "acs.oss"
    ]
}
```

**Sample event** (matched):

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
    "data": {
        "name": "test",
        "scope": 100
    }
}
```

## Prefix match

Match events where a field value starts with a specified string. Use the `prefix` operator.

The following pattern matches events where `source` starts with `acs.`:

```
{
    "source": [
        {
            "prefix": "acs."
        }
    ]
}
```

## Suffix match

Match events where a field value ends with a specified string. Use the `suffix` operator.

The following pattern combines prefix and suffix conditions. An event matches if the `subject` value starts with the specified prefix, OR ends with `.txt`, OR ends with `.jpg`:

```
{
    "subject": [
        {
            "prefix": "acs:oss:cn-hangzhou:1234567:xls-papk/"
        },
        {
            "suffix": ".txt"
        },
        {
            "suffix": ".jpg"
        }
    ]
}
```

> Multiple values in the same array are evaluated with OR logic. An event matches if any single condition in the array is satisfied.

## Contains match

Match events where a field value includes a specified substring. Use the `contains` operator.

**Single substring**

The following pattern matches events where `type` contains `Normal`:

```
{
    "type": [
        {
            "contains": "Normal"
        }
    ]
}
```

An event with `"type": "UserNormalEvent"` matches. An event with `"type": "UserErrorEvent"` does not.

**Multiple substrings (OR)**

The following pattern matches events where `type` contains `Normal` or `Error`:

```
{
    "type": [
        {
            "contains": "Normal"
        },
        {
            "contains": "Error"
        }
    ]
}
```

An event with `"type": "UserNormalEvent"` matches. An event with `"type": "UserErrorEvent"` also matches. An event with `"type": "UserOtherEvent"` does not.

## Exclusion match (anything-but)

Match events where a field value does NOT equal specified values. The `anything-but` operator supports strings, numbers, arrays, and prefix-based exclusions.

### Exclude a single string

The following pattern matches events where `data.state` is not `initializing`:

```
{
    "data": {
        "state": [
            {
                "anything-but": "initializing"
            }
        ]
    }
}
```

### Exclude a single number

The following pattern matches events where `data.x-limit` is not `123`:

```
{
    "data": {
        "x-limit": [
            {
                "anything-but": 123
            }
        ]
    }
}
```

> To combine multiple exclusions with AND logic, apply `anything-but` conditions to different fields in the same pattern. The event must satisfy every exclusion to match.

### Exclude multiple strings

The following pattern matches events where `data.state` is neither `stopped` nor `overloaded`:

```
{
    "data": {
        "state": [
            {
                "anything-but": [
                    "stopped",
                    "overloaded"
                ]
            }
        ]
    }
}
```

An event with `"state": "terminated"` matches. An event with `"state": "stopped"` does not.

### Exclude multiple numbers

The following pattern matches events where `data.x-limit` is not `100`, `200`, or `300`:

```
{
    "data": {
        "x-limit": [
            {
                "anything-but": [
                    100,
                    200,
                    300
                ]
            }
        ]
    }
}
```

### Exclude by prefix

The following pattern matches events where `data.state` does not start with `init`:

```
{
    "data": {
        "state": [
            {
                "anything-but": {
                    "prefix": "init"
                }
            }
        ]
    }
}
```

An event with `"state": "pending"` matches. An event with `"state": "initializing"` does not.

### Exclude a specific event source

The following pattern matches events not originating from Elastic Compute Service (ECS):

```
{
    "source": [
        {
            "anything-but": [
                "acs.ecs"
            ]
        }
    ]
}
```

### Exclude all Alibaba Cloud service events

The following pattern matches only events from custom applications by excluding all sources prefixed with `acs.`:

```
{
    "source": [
        {
            "anything-but": {
                "prefix": "acs."
            }
        }
    ]
}
```

## Numeric match

Match events where a numeric field equals a specific value or falls within a range. Use the `numeric` operator with one or more comparison operators: `=`, `>`, `<`, `<=`. Specify a range by pairing two operators.

The following pattern matches events where:

-   `data.c-count` is greater than 0 and less than or equal to 5
    
-   `data.d-count` is less than 10
    
-   `data.x-limit` equals 301.8
    

```
{
    "data": {
        "c-count": [
            {
                "numeric": [
                    ">",
                    0,
                    "<=",
                    5
                ]
            }
        ],
        "d-count": [
            {
                "numeric": [
                    "<",
                    10
                ]
            }
        ],
        "x-limit": [
            {
                "numeric": [
                    "=",
                    301.8
                ]
            }
        ]
    }
}
```

**Important**

Numeric matching supports values between -1.0e9 and +1.0e9, with precision up to 15 digits and 6 decimal places. Values must be in JSON numeric format.

## IP address match

Match events where an IP address field falls within a CIDR block. Use the `cidr` operator on a field in the `data` object. Only IPv4 addresses are supported.

The following pattern matches events where `data.source-ip` is in the `10.0.0.0/24` subnet:

```
{
    "data": {
        "source-ip": [
            {
                "cidr": "10.0.0.0/24"
            }
        ]
    }
}
```

An event with `"source-ip": "10.0.0.123"` matches. An event with `"source-ip": "192.168.0.123"` does not.

## Null and empty string match

### Empty string

Match events where a field equals an empty string (`""`):

```
{
    "data": {
        "eventVersion": [
            ""
        ]
    }
}
```

### Null value

Match events where a field is `null`:

```
{
    "data": {
        "responseElements": [
            null
        ]
    }
}
```

> A null value and an empty string are different. A pattern matching `""` does not match `null`, and a pattern matching `null` does not match `""`.

## Field existence match

Match events based on whether a field exists in the `data` object. Use the `exists` operator.

The following pattern matches events where the `data.state` field does not exist:

```
{
    "data": {
        "state": [
            {
                "exists": false
            }
        ]
    }
}
```

Set `"exists": true` to match events where the field exists.

## Array match

Pattern values are arrays. When an event field is also an array, EventBridge checks whether the two arrays have any common elements (set intersection). If the intersection is non-empty, the event matches.

The following pattern matches events where `subject` equals one of three specified values:

```
{
    "subject": [
        "acs:oss:cn-hangzhou:1234567:xls-papk/game_apk/123.jpg",
        "acs:oss:cn-hangzhou:1112223:xls-papk/game_apk/123.jpg",
        "acs:oss:cn-hangzhou:4455667:xls-papk/game_apk/123.jpg"
    ]
}
```

If the event's `subject` is a single string matching any of the three values, the event matches. If the event's `subject` is an array, the event matches when at least one element overlaps with the pattern array.

## Combined conditions

Combine multiple operators in a single pattern to build precise filters. EventBridge applies AND logic across all keys.

The following pattern combines prefix, exclusion, CIDR, and numeric matching:

```
{
    "source": [
        {
            "prefix": "acs."
        }
    ],
    "data": {
        "state": [
            {
                "anything-but": "initializing"
            }
        ],
        "source-ip": [
            {
                "cidr": "10.0.0.0/24"
            }
        ],
        "c-count": [
            {
                "numeric": [
                    ">",
                    0,
                    "<=",
                    5
                ]
            }
        ],
        "d-count": [
            {
                "numeric": [
                    "<",
                    10
                ]
            }
        ],
        "x-limit": [
            {
                "anything-but": [
                    100,
                    200,
                    300
                ]
            }
        ]
    }
}
```

An event matches only when ALL of the following are true:

-   `source` starts with `acs.`
    
-   `data.state` is not `initializing`
    
-   `data.source-ip` falls within `10.0.0.0/24`
    
-   `data.c-count` is greater than 0 and at most 5
    
-   `data.d-count` is less than 10
    
-   `data.x-limit` is not 100, 200, or 300
    

## Limits

**Item**

**Limit**

Numeric value range

\-1.0e9 to +1.0e9

Numeric precision

Up to 15 digits, 6 decimal places

IP address matching

IPv4 only
