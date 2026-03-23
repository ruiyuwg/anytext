-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Batch V1 Client - Class ListJobsRequest (0.17.0) Stay organized with collections Save and categorize content based on your preferences.

1.4.1 (latest) 1.4.0 1.3.1 1.2.2 1.1.7 1.0.3 0.17.0 0.16.10 0.15.0 0.14.0 0.13.1 0.12.1 0.11.3 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.2 0.4.0 0.3.0 0.2.2

Reference documentation and code samples for the Google Cloud Batch V1 Client class ListJobsRequest.

ListJob Request.

Generated from protobuf message `google.cloud.batch.v1.ListJobsRequest`

## Namespace

Google \\ Cloud \\ Batch \\ V1

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

Parent path.

`↳ filter`

`string`  

List filter.

`↳ order_by`

`string`  

Optional. Sort results. Supported are "name", "name desc", "create\_time", and "create\_time desc".

`↳ page_size`

`int`  

Page size.

`↳ page_token`

`string`  

Page token.

### getParent

Parent path.

**Returns**

**Type**

**Description**

`string`

### setParent

Parent path.

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

### getOrderBy

Optional. Sort results. Supported are "name", "name desc", "create\_time", and "create\_time desc".

**Returns**

**Type**

**Description**

`string`

### setOrderBy

Optional. Sort results. Supported are "name", "name desc", "create\_time", and "create\_time desc".

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

Page size.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Page size.

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

Page token.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Page token.

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

Parent path.

**Returns**

**Type**

**Description**

`[Google\Cloud\Batch\V1\ListJobsRequest](/php/docs/reference/cloud-batch/0.17.0/V1.ListJobsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
