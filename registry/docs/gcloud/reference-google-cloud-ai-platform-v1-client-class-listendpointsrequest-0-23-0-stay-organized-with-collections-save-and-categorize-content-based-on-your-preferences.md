-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class ListEndpointsRequest (0.23.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class ListEndpointsRequest.

Request message for [EndpointService.ListEndpoints](/php/docs/reference/cloud-ai-platform/0.23.0/V1.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_EndpointServiceClient__listEndpoints__).

Generated from protobuf message `google.cloud.aiplatform.v1.ListEndpointsRequest`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1

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

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`

`↳ filter`

`string`  

Optional. An expression for filtering the results of the request. For field names both snake\_case and camelCase are supported. \* `endpoint` supports = and !=. `endpoint` represents the Endpoint ID, i.e. the last segment of the Endpoint's [resource name](/php/docs/reference/cloud-ai-platform/0.23.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getName__). \* `display_name` supports = and, != \* `labels` supports general map functions that is: \* `labels.key=value` - key:value equality \* `labels.key:* or labels:key - key existence * A key including a space must be quoted.`labels."a key"`. Some examples: *`endpoint=1`*`displayName="myDisplayName"`*`labels.myKey="myValue"\`

`↳ page_size`

`int`  

Optional. The standard list page size.

`↳ page_token`

`string`  

Optional. The standard list page token. Typically obtained via [ListEndpointsResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/0.23.0/V1.ListEndpointsResponse#_Google_Cloud_AIPlatform_V1_ListEndpointsResponse__getNextPageToken__) of the previous [EndpointService.ListEndpoints](/php/docs/reference/cloud-ai-platform/0.23.0/V1.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_EndpointServiceClient__listEndpoints__) call.

`↳ read_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Optional. Mask specifying which fields to read.

`↳ order_by`

`string`  

A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: \* `display_name` \* `create_time` \* `update_time` Example: `display_name, create_time desc`.

### getParent

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}`

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

Optional. An expression for filtering the results of the request. For field names both snake\_case and camelCase are supported.

-   `endpoint` supports = and !=. `endpoint` represents the Endpoint ID, i.e. the last segment of the Endpoint's [resource name](/php/docs/reference/cloud-ai-platform/0.23.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getName__).
    -   `display_name` supports = and, !=
    -   `labels` supports general map functions that is:
        -   `labels.key=value` - key:value equality
        -   \`labels.key:\* or labels:key - key existence
        -   A key including a space must be quoted. `labels."a key"`. Some examples:
    -   `endpoint=1`
    -   `displayName="myDisplayName"`
    -   `labels.myKey="myValue"`

**Returns**

**Type**

**Description**

`string`

### setFilter

Optional. An expression for filtering the results of the request. For field names both snake\_case and camelCase are supported.

-   `endpoint` supports = and !=. `endpoint` represents the Endpoint ID, i.e. the last segment of the Endpoint's [resource name](/php/docs/reference/cloud-ai-platform/0.23.0/V1.Endpoint#_Google_Cloud_AIPlatform_V1_Endpoint__getName__).
    -   `display_name` supports = and, !=
    -   `labels` supports general map functions that is:
        -   `labels.key=value` - key:value equality
        -   \`labels.key:\* or labels:key - key existence
        -   A key including a space must be quoted. `labels."a key"`. Some examples:
    -   `endpoint=1`
    -   `displayName="myDisplayName"`
    -   `labels.myKey="myValue"`

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

Optional. The standard list page size.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. The standard list page size.

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

Optional. The standard list page token.

Typically obtained via [ListEndpointsResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/0.23.0/V1.ListEndpointsResponse#_Google_Cloud_AIPlatform_V1_ListEndpointsResponse__getNextPageToken__) of the previous [EndpointService.ListEndpoints](/php/docs/reference/cloud-ai-platform/0.23.0/V1.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_EndpointServiceClient__listEndpoints__) call.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. The standard list page token.

Typically obtained via [ListEndpointsResponse.next\_page\_token](/php/docs/reference/cloud-ai-platform/0.23.0/V1.ListEndpointsResponse#_Google_Cloud_AIPlatform_V1_ListEndpointsResponse__getNextPageToken__) of the previous [EndpointService.ListEndpoints](/php/docs/reference/cloud-ai-platform/0.23.0/V1.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_EndpointServiceClient__listEndpoints__) call.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getReadMask

Optional. Mask specifying which fields to read.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasReadMask

### clearReadMask

### setReadMask

Optional. Mask specifying which fields to read.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getOrderBy

A comma-separated list of fields to order by, sorted in ascending order.

Use "desc" after a field name for descending. Supported fields:

-   `display_name`
-   `create_time`
-   `update_time` Example: `display_name, create_time desc`.

**Returns**

**Type**

**Description**

`string`

### setOrderBy

A comma-separated list of fields to order by, sorted in ascending order.

Use "desc" after a field name for descending. Supported fields:

-   `display_name`
-   `create_time`
-   `update_time` Example: `display_name, create_time desc`.

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

Required. The resource name of the Location from which to list the Endpoints. Format: `projects/{project}/locations/{location}` Please see [Google\\Cloud\\AIPlatform\\V1\\EndpointServiceClient::locationName()](/php/docs/reference/cloud-ai-platform/0.23.0/V1.EndpointServiceClient#_Google_Cloud_AIPlatform_V1_EndpointServiceClient__locationName__) for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\AIPlatform\V1\ListEndpointsRequest](/php/docs/reference/cloud-ai-platform/0.23.0/V1.ListEndpointsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
