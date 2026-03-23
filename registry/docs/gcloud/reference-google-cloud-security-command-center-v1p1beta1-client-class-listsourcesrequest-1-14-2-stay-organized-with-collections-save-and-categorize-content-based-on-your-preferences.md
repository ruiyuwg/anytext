-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V1p1beta1 Client - Class ListSourcesRequest (1.14.2) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Security Command Center V1p1beta1 Client class ListSourcesRequest.

Request message for listing sources.

Generated from protobuf message `google.cloud.securitycenter.v1p1beta1.ListSourcesRequest`

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

Required. Resource name of the parent of sources to list. Its format should be "organizations/\[organization\_id\], folders/\[folder\_id\], or projects/\[project\_id\]".

`↳ page_token`

`string`  

The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.

`↳ page_size`

`int`  

The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.

### getParent

Required. Resource name of the parent of sources to list. Its format should be "organizations/\[organization\_id\], folders/\[folder\_id\], or projects/\[project\_id\]".

**Returns**

**Type**

**Description**

`string`

### setParent

Required. Resource name of the parent of sources to list. Its format should be "organizations/\[organization\_id\], folders/\[folder\_id\], or projects/\[project\_id\]".

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPageToken

The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.

**Returns**

**Type**

**Description**

`string`

### setPageToken

The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.

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

The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.

**Returns**

**Type**

**Description**

`int`

### setPageSize

The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
