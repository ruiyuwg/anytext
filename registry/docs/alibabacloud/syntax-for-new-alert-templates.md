The new alerting feature of Simple Log Service supports the syntax that is used by the new alert templates and the syntax that is used by the original alert templates. This topic describes the syntax that is used by the new alert templates.

## Overview

Compared with the original alert templates, the new alert templates use a Python-like syntax to provide more flexible, advanced custom rendering logic, optimized customization of notification content, and optimized customization of notification styles. For example, the new alert templates can escape Markdown characters in alert notifications. The new alert templates provide the following advantages over the original alert templates:

-   The new alert templates can dynamically render alert notifications based on the severity levels of alerts and can use different colored fonts to distinguish alerts of different severity levels.
    
-   The new alert templates can iteratively render alert query results into a list or a table in an email.
    
-   The new alert templates can invoke functions to encode or decode fields in Base64 and run arithmetic operations on numeric values.
    

The syntax for the new alert templates is fully compatible and can be used with the syntax for the original alert templates. However, the syntax for the new alert templates uses different types, values, and styles for alert attributes than the syntax for the original alert templates. Therefore, we recommend that you do not simultaneously use the syntax for the new alert templates and the syntax for the original alert templates. We recommend that you use the syntax for the new alert templates.

## Quick start

This section provides example notification content that can be defined in the new alert templates.

-   Alert content:
    
    ```
    {
        "alert_id": "test-alert",
        "alert_name": "PV/UV Alert",
        "project": "project-1",
        "status": "firing",
        "severity": 6,
        "labels": {
            "app": "nginx",
            "host": "host-1"
        },
        "results": [
            {
                "project": "project-1",
                "logstore": "logstore-1",
                "query": "* | select count(*) as pv"
            },
            {
                "project": "project-2",
                "logstore": "logstore-2",
                "query": "* | select count(distinct user_id) as uv"
            }
        ]
    }
    ```
    
-   Alert template configuration:
    
    ```
    - Alert ID: {{ alert.alert_id }}
    - Alert Name: {{ alert.alert_name }}
    - Project: {{ alert.project }}
    - Status: {% if alert.status == "firing" %}FIRING{% else %}RESOLVED{% endif %}
    - Labels:
    {%- for key, val in alert.labels.items() %}
        - {{ key }}: {{ val }}
    {%- endfor %}
    - Query: {{ alert.results[0].query }}
    ```
    
-   Output result:
    
    ```
    - Alert ID: test-alert
    - Alert Name: PV/UV Alert
    - Project: project-1
    - Status: FIRING
    - Labels:
        - app: nginx
        - host: host-1
    - Query: * | select count(*) as pv
    ```
    

## Basic syntax

### Data types

The following table describes the data types that are supported by the Python-like syntax for the new alert templates.

**Data type**

**Description**

Number

The supported numbers are integers and floating-point numbers. Examples: 3 and -1.

String

Each string must be enclosed in a pair of single quotation marks ('') or double quotation marks (""). Examples: "foo" and 'bar'.

If a string contains special characters, a backslash (\\) must be used to escape the special characters. For example, `\foo` must be escaped into `"\\foo"`.

Boolean

The supported Boolean values are True and False.

Null

None.

List

A list can be referred to as an array or a slice in other programming languages. Example: \['foo', 'bar'\].

Dictionary

A dictionary can be referred to as an object in other programming languages. Example: {'foo': 'bar'}.

### Delimiters

**Delimiter**

**Use scenario**

**Example**

`{{ }}`

Used to mark the start and end of a variable or an expression.

-   Number: `{{ 123 }}`
    
-   String: `{{ "abc" }} or {{ 'xyz' }}`
    
    Each string must be enclosed in a pair of double quotation marks ("") or single quotation marks ('').
    
-   Variable: `{{ alert.alert_name }}`
    
-   Expression: `{{ alert.project + '/' + alert.alert_id }}`
    

`{% %}`

Used to mark the start and end of a statement.

`{% if alert.status == 'firing' %}FIRING{% else %}RESOLVED{% endif %`}

`{# #}`

Used to mark the start and end of a comment. Comments are not included in the content of an alert notification.

`{# this is a comment #}`

### Removal of empty strings

By default, when you use delimiters to mark the start and end of an expression, Simple Log Service ignores the spaces between a delimiter and the expression inside the delimiters. For example, Simple Log Service renders both `{{ 23 }} < {{ 45 }}` and `{{23}} < {{45}}` into `23 < 45`. However, Simple Log Service retains the empty strings such as spaces, tabs, and line feeds outside the delimiters. For example, Simple Log Service renders `{{ 23 }} < {{ 45 }}` into `23 < 45` rather than `23<45`.

If you want to remove unnecessary empty strings to the left and right of a delimiter, you can add a hyphen (-) to the left or right of the delimiter. For example, Simple Log Service renders `{{ 23 -}} < {{- 45 }}` into `23<45`.

-   The `{{-`, `{{%-`, and `{#-` delimiters are used to remove all empty strings to the left of a delimiter.
    
-   The `-}}`, `-%}`, and `-%}` delimiters are used to remove all empty strings to the right of a delimiter.
    

**Important**

-   No spaces are allowed between the hyphen (-) and the delimiter for which the hyphen (-) is added. For example, Simple Log Service considers the hyphen (-) in `{{- 3 }}` valid and renders the number into `3`. However, Simple Log Service considers the hyphen (-) in `{{ - 3 }}` invalid and renders the number into `-3`.
    
-   The hyphen (-) is valid only for the spaces outside delimiters and does not affect the spaces inside delimiters. For example, Simple Log Service renders `{{ "hello " }} {{- "world"}}` into `hello world`.
    

### Conditional statements

Conditional flows are used to evaluate the values of parameters and the results of logical expressions. Simple Log Service can render data based on conditional flows.

-   If the `if` clause is followed by a constant or a regular variable, Simple Log Service evaluates the constant or the value of the regular variable to true or false. Simple Log Service evaluates all Boolean values `false`, numbers `0`, empty strings `""`, empty values `null`, empty arrays `[]`, and empty objects `{}` to false and evaluates all the other values to true.
    
-   If the `if` clause is followed by a logical expression, Simple Log Service evaluates the result of the logical expression to true or false. For example, `{{ if alert.severity >= 8 }}` is used to evaluate whether the severity level of an alert is greater than or equal to 8.
    

The following table describes the conditional flows that are supported by the new alert templates.

**Control flow**

**Example**

if

```
{% if alert.severity >= 8 %}
Critical alert
{% endif %}
```

if-else

```
{% if alert.severity >= 8 %}
Critical alert
{% else %}
Normal alert
{% endif %}
```

if-elif

```
{% if alert.severity >= 8 %}
Critical alert
{% elif alert.severity >= 4 %}
Normal alert
{% endif %}
```

if-elif-else

```
{% if alert.severity >= 8 %}
Critical alert
{% elif alert.severity >= 4 %}
Normal alert
{% else %}
Notification
{% endif %}
```

Nested statement

```
{% if alert.severity >= 8 %}
Critical alert
{% else %}
{% if alert.severity >= 4 %}
Normal alert
{% else %}
Notification
{% endif %}
{% endif %}
```

### Iterations

Loop statements are used to perform iterative operations on arrays and objects. The following table describes the loop statements that are supported by the new alert templates.

**Loop statement**

**Example**

Loop statements on arrays

```
{% for result in alert.results %}
{{ result }}
{% endfor %}
```

Loop statements with subscripts on arrays

The enumerate function is used to perform iterative operations on the subscripts of an array. For more information about the enumerate function, see [Built-in functions in alert templates](/help/en/sls/built-in-functions-in-alert-templates#table-w4c-pa7-8l7).

```
{% for index, result in enumerate(alert.results) %}
{{ index }}: {{ result }}
{% endfor %}
```

Subscripts start at position 0 by default. You can use the start parameter in the enumerate function to define the start subscript and the end subscript. Example:

```
{% for index, result in enumerate(alert.results, start=1) %}
{{ index }}: {{ result }}
{% endfor %}
```

Loop statements on objects

The items() function is used to iteratively convert an object into an array of key-value pairs that are in the `Key:Value` format.

```
{% for key, val in alert.labels.items() %}
{{ key }}: {{ val }}
{% endfor %}
```

Nested statements

```
{% for result in alert.fire_results %}
{% for key, val in result.items() %}
{{ key }}: {{ val }}
{% endfor %}
{% endfor %}
```

### Escape characters

If you do not want Simple Log Service to parse or render strings such as `{{` that consist of special characters, you can escape the strings. For example, the following alert template configuration specifies to retain all content between `{% raw %}` and `{% endraw %}`:

-   Alert template configuration
    
    ```
    {% raw %}
    {% for result in alert.results %}
    {{ result }}
    {% endfor %}
    {% endraw %}
    ```
    
-   Result
    
    ```
    {% for result in alert.results %}
    {{ result }}
    {% endfor %}
    ```
    

### Functions

Alert templates provide built-in functions. You can use the built-in functions to flexibly configure the formats and styles of alert notifications. For more information, see [Built-in functions in alert templates](/help/en/sls/built-in-functions-in-alert-templates#concept-2116231).

For example, if you want Simple Log Service to push alert notifications in the JSON format by using a webhook URL, you must specify the following alert template configuration:

-   Query statement with a line feed included
    
    ```
    * |
    select count(*) as cnt
    ```
    
-   Comparison between different alert template configurations
    
    **Item**
    
    **Alert template**
    
    **Result**
    
    **Remarks**
    
    No functions used
    
    ```
    {
        "query": "{{ alert.results[0].query }}"
    }
    ```
    
    ```
    {
        "query": "* |
    select count(*) as pv"
    }
    ```
    
    The JSON format is invalid.
    
    The quote function used
    
    ```
    {
        "query": {{ quote(alert.results[0].query) }}
    }
    ```
    
    ```
    {
        "query": "* | \nselect count(*) as pv"
    }
    ```
    
    The JSON format is valid.
    

### Filters

If nested functions such as `{{ block(to_list(alert.labels)) }}` are used, edits to notification content are laborious. In this situation, you can use filters to edit notification content. Filters use vertical bars (|) as operators and can be invoked by using method chaining. In most cases, you can specify filters in the `{{ xxx | filiter1 | filter2 | ... }}` format. For example, `{{ blockquote(to_list(alert.labels)) }}` is equivalent to `{{ alert.labels | to_list | blockquote }}`.

Before you specify filters in a built-in function, you must check that the built-in function supports filters. Most of the built-in functions that are available in the new alert templates support filters. For more information, see [Built-in functions in alert templates](/help/en/sls/built-in-functions-in-alert-templates#concept-2116231).

**Important**

-   If no parameters are specified in a built-in function, you cannot specify filters in the built-in function.
    
-   If only a single parameter is specified in a built-in function, we recommend that you specify filters in the built-in function. In this situation, the built-in function is in the `{{ arg | fn }}` format. For example, `{{ abs(-1) }}` is equivalent to `{{ -1 | abs }}`.
    
-   If multiple parameters are specified in a built-in function and all specified parameters except the first parameter can be set to the default values, you can specify filters in the built-in function. If multiple parameters are specified in a built-in function and you want to specify a value for each of the parameters, we recommend that you do not specify filters in the built-in function.
    

### Operators

The following table describes the operators that are supported by the new alert templates. For more information about the priorities of the operators, see [Operator precedence](https://docs.python.org/zh-cn/3/reference/expressions.html#operator-precedence).

**Category**

**Operator**

**Description**

Arithmetic operations

+

Performs an addition operation.

\-

Performs a subtraction operation.

\*

Performs a multiplication operation.

/

Performs a division operation. The return value is a floating-point number.

//

Performs a division operation. The return value is an integer.

%

Performs a modulo operation.

Comparative operations

\==

Evaluates whether a value is equal to another value.

!=

Evaluates whether a value is not equal to another value.

\>

Evaluates whether a value is greater than another value.

\>=

Evaluates whether a value is greater than or equal to another value.

<

Evaluates whether a value is less than another value.

<=

Evaluates whether a value is less than or equal to another value.

Logical operations

and

Specifies an AND relation.

or

Specifies an OR relation.

not

Specifies a NOT In relation.

Other operations

in

Evaluates whether a value is included in another value and returns a Boolean value. The values that you specify can be arrays, objects, or strings.

-   Array: `{{ 1 in [1, 2, 3] }}`
    
-   Object: `{{ "foo" in {"foo": "bar" } }}`
    
-   String: `{{ "ll" in "hello" }}`
    

()

Specifies a combination of operations. Example: {{ a > b and (a > c or b > c) }}.

## Alert variables

In the new alert templates, alert variables are in the `alert.xxx` format. For example, the `alert.project` variable is a valid alert variable. For more information, see [Variables in new alert templates](/help/en/sls/variables-in-new-alert-templates#concept-2116230).

## Configuration examples

-   Example 1: Display the information about each alert based on the status of the alert.
    
    After an alert is triggered, the information such as the status, severity level, and result of the alert is provided. When an alert is cleared, only the status of the alert is provided.
    
    -   The following alert template configuration does not include functions:
        
        ```
        {% if alert.status == "firing" %}
        - Status: <font color="#E03C39">Firing</font>
        - Severity level: {{ alert.severity | format_severity }}
        - Results: {{ alert.results | to_json }}
        {% else %}
        - Status: <font color="#72C140">Cleared</font>
        {% endif %}
        ```
        
    -   The following alert template configuration includes functions:
        
        The format\_status function and the format\_severity function are used to simplify the alert template configuration:
        
        ```
        - Status: {{ alert.status | format_status }}
        {% if alert.status == "firing" %}
        - Severity level: {{ alert.severity | format_severity }}
        - Results: {{ alert.results | to_json }}
        {% endif %}
        ```
        
-   Example 2: Display the information about each alert in a structured format.
    
    The labels of each alert are converted into an array in the Markdown format.
    
    -   The following alert template configuration does not include functions:
        
        ```
        - Project: {{ alert.project }}
        - Alert name: {{ alert.alert_name }}
        - Label:
        {%- for key, val in alert.labels.items() %}
        > - {{ key }}: {{ val }}
        {%- endfor %}
        ```
        
    -   The following alert template configuration includes functions:
        
        The to\_list function and the blockquote function are used to simplify the alert template configuration.
        
        ```
        - Project: {{ alert.project }}
        - Alert name: {{ alert.alert_name }}
        - Label:
        {{ alert.labels | to_list | blockquote }}
        ```
