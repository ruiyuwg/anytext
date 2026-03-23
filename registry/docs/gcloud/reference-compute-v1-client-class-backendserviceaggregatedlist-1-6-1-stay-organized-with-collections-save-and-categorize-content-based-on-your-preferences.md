-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class BackendServiceAggregatedList (1.6.1) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class BackendServiceAggregatedList.

Contains a list of BackendServicesScopedList.

Generated from protobuf message `google.cloud.compute.v1.BackendServiceAggregatedList`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ id`

`string`  

\[Output Only\] Unique identifier for the resource; defined by the server.

`↳ items`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

A list of BackendServicesScopedList resources.

`↳ kind`

`string`  

Type of resource.

`↳ next_page_token`

`string`  

\[Output Only\] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.

`↳ self_link`

`string`  

\[Output Only\] Server-defined URL for this resource.

`↳ unreachables`

`array`  

\[Output Only\] Unreachable resources.

`↳ warning`

`[Google\Cloud\Compute\V1\Warning](/php/docs/reference/cloud-compute/1.6.1/V1.Warning)`  

\[Output Only\] Informational warning message.

### getId

\[Output Only\] Unique identifier for the resource; defined by the server.

**Returns**

**Type**

**Description**

`string`

### hasId

### clearId

### setId

\[Output Only\] Unique identifier for the resource; defined by the server.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getItems

A list of BackendServicesScopedList resources.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setItems

A list of BackendServicesScopedList resources.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getKind

Type of resource.

**Returns**

**Type**

**Description**

`string`

### hasKind

### clearKind

### setKind

Type of resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

\[Output Only\] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.

**Returns**

**Type**

**Description**

`string`

### hasNextPageToken

### clearNextPageToken

### setNextPageToken

\[Output Only\] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSelfLink

\[Output Only\] Server-defined URL for this resource.

**Returns**

**Type**

**Description**

`string`

### hasSelfLink

### clearSelfLink

### setSelfLink

\[Output Only\] Server-defined URL for this resource.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUnreachables

\[Output Only\] Unreachable resources.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setUnreachables

\[Output Only\] Unreachable resources.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getWarning

\[Output Only\] Informational warning message.

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\Warning](/php/docs/reference/cloud-compute/1.6.1/V1.Warning)|null`

### hasWarning

### clearWarning

### setWarning

\[Output Only\] Informational warning message.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\Warning](/php/docs/reference/cloud-compute/1.6.1/V1.Warning)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
