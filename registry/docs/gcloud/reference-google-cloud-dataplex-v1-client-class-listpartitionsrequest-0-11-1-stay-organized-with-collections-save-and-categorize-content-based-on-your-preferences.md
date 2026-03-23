-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataplex V1 Client - Class ListPartitionsRequest (0.11.1) Stay organized with collections Save and categorize content based on your preferences.

1.12.0 (latest) 1.11.0 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1 0.16.1 0.15.1 0.14.0 0.13.0 0.12.0 0.11.1 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.1 0.4.0 0.3.0 0.2.3 0.1.6

Reference documentation and code samples for the Google Cloud Dataplex V1 Client class ListPartitionsRequest.

List metadata partitions request.

Generated from protobuf message `google.cloud.dataplex.v1.ListPartitionsRequest`

## Namespace

Google \\ Cloud \\ Dataplex \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The resource name of the parent entity: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`.

`↳ page_size`

`int`  

Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.

`↳ page_token`

`string`  

Optional. Page token received from a previous `ListPartitions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitions` must match the call that provided the page token.

`↳ filter`

`string`  

Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: - logic operators: AND, OR - comparison operators: <, >, >=, <= ,=, != - LIKE operators: - The right hand of a LIKE operator supports "." and "_" for wildcard searches, for example "value1 LIKE "._oo._" - parenthetical grouping: ( ) Sample filter expression: \`?filter="key1 < value1 OR key2 > value2" \*\*Notes:_\* - Keys to the left of operators are case insensitive. - Partition results are sorted first by creation time, then by lexicographic order. - Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.

### getParent

Required. The resource name of the parent entity: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name of the parent entity: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPageSize

Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPageToken

Optional. Page token received from a previous `ListPartitions` call.

Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitions` must match the call that provided the page token.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. Page token received from a previous `ListPartitions` call.

Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitions` must match the call that provided the page token.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFilter

Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax:

-   logic operators: AND, OR
-   comparison operators: <, >, >=, <= ,=, !=
-   LIKE operators:
    -   The right hand of a LIKE operator supports "." and "_" for wildcard searches, for example "value1 LIKE "._oo.\*"
-   parenthetical grouping: ( ) Sample filter expression: \`?filter="key1 < value1 OR key2 > value2" **Notes:**
-   Keys to the left of operators are case insensitive.
    
-   Partition results are sorted first by creation time, then by lexicographic order.
    
-   Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.

**Returns**

**Type**

**Description**

`string`

### setFilter

Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax:

-   logic operators: AND, OR
-   comparison operators: <, >, >=, <= ,=, !=
-   LIKE operators:
    -   The right hand of a LIKE operator supports "." and "_" for wildcard searches, for example "value1 LIKE "._oo.\*"
-   parenthetical grouping: ( ) Sample filter expression: \`?filter="key1 < value1 OR key2 > value2" **Notes:**
-   Keys to the left of operators are case insensitive.
    
-   Partition results are sorted first by creation time, then by lexicographic order.
    
-   Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`parent`

`string`  

Required. The resource name of the parent entity: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`. Please see [Google\\Cloud\\Dataplex\\V1\\MetadataServiceClient::entityName()](/php/docs/reference/cloud-dataplex/0.11.1/V1.MetadataServiceClient#_Google_Cloud_Dataplex_V1_MetadataServiceClient__entityName__) for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dataplex\V1\ListPartitionsRequest](/php/docs/reference/cloud-dataplex/0.11.1/V1.ListPartitionsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
