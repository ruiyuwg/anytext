-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Bigtable V2 Client - Class CreateAuthorizedViewRequest (1.32.1) Stay organized with collections Save and categorize content based on your preferences.

2.21.1 (latest) 2.21.0 2.20.2 2.19.2 2.18.0 2.17.1 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.9.1 2.8.0 2.7.0 2.6.3 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.1 1.32.1 1.31.1 1.30.0 1.29.2 1.28.3 1.27.0 1.26.2 1.25.0 1.24.1 1.23.0 1.22.2 1.21.1 1.20.3

Reference documentation and code samples for the Cloud Bigtable V2 Client class CreateAuthorizedViewRequest.

The request for CreateAuthorizedView

Generated from protobuf message `google.bigtable.admin.v2.CreateAuthorizedViewRequest`

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

`↳ parent`

`string`  

Required. This is the name of the table the AuthorizedView belongs to. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.

`↳ authorized_view_id`

`string`  

Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The `authorized_view_id` appended to `parent` forms the full AuthorizedView name of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorized_view}`.

`↳ authorized_view`

`[Google\Cloud\Bigtable\Admin\V2\AuthorizedView](/php/docs/reference/cloud-bigtable/1.32.1/Admin.V2.AuthorizedView)`  

Required. The AuthorizedView to create.

### getParent

Required. This is the name of the table the AuthorizedView belongs to.

Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. This is the name of the table the AuthorizedView belongs to.

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

### getAuthorizedViewId

Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The `authorized_view_id` appended to `parent` forms the full AuthorizedView name of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorized_view}`.

**Returns**

**Type**

**Description**

`string`

### setAuthorizedViewId

Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The `authorized_view_id` appended to `parent` forms the full AuthorizedView name of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorized_view}`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAuthorizedView

Required. The AuthorizedView to create.

**Returns**

**Type**

**Description**

`[Google\Cloud\Bigtable\Admin\V2\AuthorizedView](/php/docs/reference/cloud-bigtable/1.32.1/Admin.V2.AuthorizedView)|null`

### hasAuthorizedView

### clearAuthorizedView

### setAuthorizedView

Required. The AuthorizedView to create.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Bigtable\Admin\V2\AuthorizedView](/php/docs/reference/cloud-bigtable/1.32.1/Admin.V2.AuthorizedView)`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. This is the name of the table the AuthorizedView belongs to. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. Please see Google\\Cloud\\Bigtable\\Admin\\V2\\BigtableTableAdminClient::tableName() for help formatting this field.

`authorizedView`

`[Google\Cloud\Bigtable\Admin\V2\AuthorizedView](/php/docs/reference/cloud-bigtable/1.32.1/Admin.V2.AuthorizedView)`  

Required. The AuthorizedView to create.

`authorizedViewId`

`string`  

Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The `authorized_view_id` appended to `parent` forms the full AuthorizedView name of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorized_view}`.

**Returns**

**Type**

**Description**

`[Google\Cloud\Bigtable\Admin\V2\CreateAuthorizedViewRequest](/php/docs/reference/cloud-bigtable/1.32.1/Admin.V2.CreateAuthorizedViewRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
