-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class GetTableRequest (2.0.1) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class GetTableRequest.

Request message for google.bigtable.admin.v2.BigtableTableAdmin.GetTable

Generated from protobuf message `google.bigtable.admin.v2.GetTableRequest`

## Namespace

Google \\ Cloud \\ Bigtable \\ Admin \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The unique name of the requested table. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.

`↳ view`

`int`  

The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.

### getName

Required. The unique name of the requested table.

Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The unique name of the requested table.

Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.

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

The view to be applied to the returned table's fields.

Defaults to `SCHEMA_VIEW` if unspecified.

**Returns**

**Type**

**Description**

`int`

### setView

The view to be applied to the returned table's fields.

Defaults to `SCHEMA_VIEW` if unspecified.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. The unique name of the requested table. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. Please see Google\\Cloud\\Bigtable\\Admin\\V2\\BigtableTableAdminClient::tableName() for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Bigtable\Admin\V2\GetTableRequest](/php/docs/reference/cloud-bigtable/2.0.1/Admin.V2.GetTableRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
