-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Migration Center V1 Client - Class UpdateGroupRequest (0.3.1) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.2 1.0.3 0.4.5 0.3.1 0.2.0 0.1.0

Reference documentation and code samples for the Google Cloud Migration Center V1 Client class UpdateGroupRequest.

A request to update a group.

Generated from protobuf message `google.cloud.migrationcenter.v1.UpdateGroupRequest`

## Namespace

Google \\ Cloud \\ MigrationCenter \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ update_mask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update. The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single \* value in the mask lets you to overwrite all fields.

`↳ group`

`[Google\Cloud\MigrationCenter\V1\Group](/php/docs/reference/cloud-migrationcenter/0.3.1/V1.Group)`  

Required. The group resource being updated.

`↳ request_id`

`string`  

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

### getUpdateMask

Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update.

The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single \* value in the mask lets you to overwrite all fields.

**Returns**

**Type**

**Description**

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)|null`

### hasUpdateMask

### clearUpdateMask

### setUpdateMask

Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update.

The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single \* value in the mask lets you to overwrite all fields.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

**Returns**

**Type**

**Description**

`$this`

### getGroup

Required. The group resource being updated.

**Returns**

**Type**

**Description**

`[Google\Cloud\MigrationCenter\V1\Group](/php/docs/reference/cloud-migrationcenter/0.3.1/V1.Group)|null`

### hasGroup

### clearGroup

### setGroup

Required. The group resource being updated.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\MigrationCenter\V1\Group](/php/docs/reference/cloud-migrationcenter/0.3.1/V1.Group)`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.

For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).

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

**Parameters**

**Name**

**Description**

`group`

`[Google\Cloud\MigrationCenter\V1\Group](/php/docs/reference/cloud-migrationcenter/0.3.1/V1.Group)`  

Required. The group resource being updated.

`updateMask`

`[Google\Protobuf\FieldMask](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/FieldMask)`  

Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update. The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single \* value in the mask lets you to overwrite all fields.

**Returns**

**Type**

**Description**

`[Google\Cloud\MigrationCenter\V1\UpdateGroupRequest](/php/docs/reference/cloud-migrationcenter/0.3.1/V1.UpdateGroupRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
