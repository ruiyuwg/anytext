-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Sql Admin V1beta4 Client - Class InsightsConfig (0.8.0) Stay organized with collections Save and categorize content based on your preferences.

1.8.0 (latest) 1.7.0 1.6.0 1.5.0 1.4.0 1.3.1 1.2.6 1.1.0 1.0.0 0.19.0 0.18.0 0.17.1 0.16.1 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.1 0.3.1 0.2.12

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Sql Admin V1beta4 Client class InsightsConfig.

Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.

Generated from protobuf message `google.cloud.sql.v1beta4.InsightsConfig`

## Namespace

Google \\ Cloud \\ Sql \\ V1beta4

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ query_insights_enabled`

`bool`  

Whether Query Insights feature is enabled.

`↳ record_client_address`

`bool`  

Whether Query Insights will record client address when enabled.

`↳ record_application_tags`

`bool`  

Whether Query Insights will record application tags from query when enabled.

`↳ query_string_length`

`[Google\Protobuf\Int32Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int32Value)`  

Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.

`↳ query_plans_per_minute`

`[Google\Protobuf\Int32Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int32Value)`  

Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.

### getQueryInsightsEnabled

Whether Query Insights feature is enabled.

**Returns**

**Type**

**Description**

`bool`

### setQueryInsightsEnabled

Whether Query Insights feature is enabled.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getRecordClientAddress

Whether Query Insights will record client address when enabled.

**Returns**

**Type**

**Description**

`bool`

### setRecordClientAddress

Whether Query Insights will record client address when enabled.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getRecordApplicationTags

Whether Query Insights will record application tags from query when enabled.

**Returns**

**Type**

**Description**

`bool`

### setRecordApplicationTags

Whether Query Insights will record application tags from query when enabled.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getQueryStringLength

Maximum query length stored in bytes. Default value: 1024 bytes.

Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Int32Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int32Value)|null`

### hasQueryStringLength

### clearQueryStringLength

### getQueryStringLengthValue

Returns the unboxed value from `getQueryStringLength()`

Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.

**Returns**

**Type**

**Description**

`int|null`

### setQueryStringLength

Maximum query length stored in bytes. Default value: 1024 bytes.

Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Int32Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int32Value)`  

**Returns**

**Type**

**Description**

`$this`

### setQueryStringLengthValue

Sets the field by wrapping a primitive type in a Google\\Protobuf\\Int32Value object.

Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.

**Parameter**

**Name**

**Description**

`var`

`int|null`  

**Returns**

**Type**

**Description**

`$this`

### getQueryPlansPerMinute

Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Int32Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int32Value)|null`

### hasQueryPlansPerMinute

### clearQueryPlansPerMinute

### getQueryPlansPerMinuteValue

Returns the unboxed value from `getQueryPlansPerMinute()`

Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.

**Returns**

**Type**

**Description**

`int|null`

### setQueryPlansPerMinute

Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Int32Value](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Int32Value)`  

**Returns**

**Type**

**Description**

`$this`

### setQueryPlansPerMinuteValue

Sets the field by wrapping a primitive type in a Google\\Protobuf\\Int32Value object.

Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.

**Parameter**

**Name**

**Description**

`var`

`int|null`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
