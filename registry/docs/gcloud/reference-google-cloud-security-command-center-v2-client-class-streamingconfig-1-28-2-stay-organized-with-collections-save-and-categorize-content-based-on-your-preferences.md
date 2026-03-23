-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V2 Client - Class StreamingConfig (1.28.2) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

Reference documentation and code samples for the Google Cloud Security Command Center V2 Client class StreamingConfig.

The config for streaming-based notifications, which send each event as soon as it is detected.

Generated from protobuf message `google.cloud.securitycenter.v2.NotificationConfig.StreamingConfig`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V2 \\ NotificationConfig

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ filter`

`string`  

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: \* `=` for all value types. \* `>`, `<`, `>=`, `<=` for integer values. \* `:`, meaning substring matching, for strings. The supported value types are: \* string literals in quotes. \* integer literals without quotes. \* boolean literals `true` and `false` without quotes.

### getFilter

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`.

Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are:

-   `=` for all value types.
-   `>`, `<`, `>=`, `<=` for integer values.
-   `:`, meaning substring matching, for strings. The supported value types are:
-   string literals in quotes.
-   integer literals without quotes.
-   boolean literals `true` and `false` without quotes.

**Returns**

**Type**

**Description**

`string`

### setFilter

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`.

Restrictions have the form `<field> <operator> <value>` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are:

-   `=` for all value types.
-   `>`, `<`, `>=`, `<=` for integer values.
-   `:`, meaning substring matching, for strings. The supported value types are:
-   string literals in quotes.
-   integer literals without quotes.
-   boolean literals `true` and `false` without quotes.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
