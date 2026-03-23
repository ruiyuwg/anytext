-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Bare Metal Solution V2 Client - Class ListNetworksRequest (0.3.2) Stay organized with collections Save and categorize content based on your preferences.

1.1.3 (latest) 1.1.2 1.0.5 0.6.5 0.5.2 0.4.0 0.3.2 0.2.8

Reference documentation and code samples for the Google Cloud Bare Metal Solution V2 Client class ListNetworksRequest.

Message for requesting a list of networks.

Generated from protobuf message `google.cloud.baremetalsolution.v2.ListNetworksRequest`

## Namespace

Google \\ Cloud \\ BareMetalSolution \\ V2

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

Required. Parent value for ListNetworksRequest.

`↳ page_size`

`int`  

Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.

`↳ page_token`

`string`  

A token identifying a page of results from the server.

`↳ filter`

`string`  

List filter.

### getParent

Required. Parent value for ListNetworksRequest.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. Parent value for ListNetworksRequest.

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

Requested page size. The server might return fewer items than requested.

If unspecified, server will pick an appropriate default.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Requested page size. The server might return fewer items than requested.

If unspecified, server will pick an appropriate default.

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

A token identifying a page of results from the server.

**Returns**

**Type**

**Description**

`string`

### setPageToken

A token identifying a page of results from the server.

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

List filter.

**Returns**

**Type**

**Description**

`string`

### setFilter

List filter.

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

Required. Parent value for ListNetworksRequest. Please see [Google\\Cloud\\BareMetalSolution\\V2\\BareMetalSolutionClient::locationName()](/php/docs/reference/cloud-bare-metal-solution/0.3.2/V2.BareMetalSolutionClient#_Google_Cloud_BareMetalSolution_V2_BareMetalSolutionClient__locationName__) for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\BareMetalSolution\V2\ListNetworksRequest](/php/docs/reference/cloud-bare-metal-solution/0.3.2/V2.ListNetworksRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
