-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class ListTablesRequest (1.22.2) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class ListTablesRequest.

Request message for [google.bigtable.admin.v2.BigtableTableAdmin.ListTables](/php/docs/reference/cloud-bigtable/1.22.2/Admin.V2.BigtableTableAdminClient#_Google_Cloud_Bigtable_Admin_V2_BigtableTableAdminClient__listTables__)

Generated from protobuf message `google.bigtable.admin.v2.ListTablesRequest`

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

Required. The unique name of the instance for which tables should be listed. Values are of the form `projects/{project}/instances/{instance}`.

`↳ view`

`int`  

The view to be applied to the returned tables' fields. Only NAME\_ONLY view (default) and REPLICATION\_VIEW are supported.

`↳ page_size`

`int`  

Maximum number of results per page. A page\_size of zero lets the server choose the number of items to return. A page\_size which is strictly positive will return at most that many items. A negative page\_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page\_size. If a page\_size is set in subsequent calls, it must match the page\_size given in the first request.

`↳ page_token`

`string`  

The value of `next_page_token` returned by a previous call.

### getParent

Required. The unique name of the instance for which tables should be listed.

Values are of the form `projects/{project}/instances/{instance}`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The unique name of the instance for which tables should be listed.

Values are of the form `projects/{project}/instances/{instance}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getView

The view to be applied to the returned tables' fields.

Only NAME\_ONLY view (default) and REPLICATION\_VIEW are supported.

**Returns**

**Type**

**Description**

`int`

### setView

The view to be applied to the returned tables' fields.

Only NAME\_ONLY view (default) and REPLICATION\_VIEW are supported.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPageSize

Maximum number of results per page.

A page\_size of zero lets the server choose the number of items to return. A page\_size which is strictly positive will return at most that many items. A negative page\_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page\_size. If a page\_size is set in subsequent calls, it must match the page\_size given in the first request.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Maximum number of results per page.

A page\_size of zero lets the server choose the number of items to return. A page\_size which is strictly positive will return at most that many items. A negative page\_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page\_size. If a page\_size is set in subsequent calls, it must match the page\_size given in the first request.

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

The value of `next_page_token` returned by a previous call.

**Returns**

**Type**

**Description**

`string`

### setPageToken

The value of `next_page_token` returned by a previous call.

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
