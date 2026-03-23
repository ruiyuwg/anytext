-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud AlloyDB for PostgreSQL V1alpha Client - Class ListInstancesRequest (0.8.0) Stay organized with collections Save and categorize content based on your preferences.

1.7.1 (latest) 1.7.0 1.6.3 1.5.0 1.4.1 1.3.0 1.2.0 1.1.3 1.0.0 0.10.3 0.9.0 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.1 0.1.3

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud AlloyDB for PostgreSQL V1alpha Client class ListInstancesRequest.

Message for requesting list of Instances

Generated from protobuf message `google.cloud.alloydb.v1alpha.ListInstancesRequest`

## Namespace

Google \\ Cloud \\ AlloyDb \\ V1alpha

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

Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats: \* projects/{project}/locations/-/clusters/- \* projects/{project}/locations/{region}/clusters/-

`↳ page_size`

`int`  

Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.

`↳ page_token`

`string`  

A token identifying a page of results the server should return.

`↳ filter`

`string`  

Optional. Filtering results

`↳ order_by`

`string`  

Optional. Hint for how to order the results

### getParent

Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats:

-   projects/{project}/locations/-/clusters/-
-   projects/{project}/locations/{region}/clusters/-

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats:

-   projects/{project}/locations/-/clusters/-
-   projects/{project}/locations/{region}/clusters/-

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

Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.

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

A token identifying a page of results the server should return.

**Returns**

**Type**

**Description**

`string`

### setPageToken

A token identifying a page of results the server should return.

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

Optional. Filtering results

**Returns**

**Type**

**Description**

`string`

### setFilter

Optional. Filtering results

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOrderBy

Optional. Hint for how to order the results

**Returns**

**Type**

**Description**

`string`

### setOrderBy

Optional. Hint for how to order the results

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

Last updated 2026-03-19 UTC.
