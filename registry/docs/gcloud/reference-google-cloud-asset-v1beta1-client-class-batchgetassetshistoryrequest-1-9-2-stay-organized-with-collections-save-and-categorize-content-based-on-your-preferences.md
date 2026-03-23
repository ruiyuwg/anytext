-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Asset V1beta1 Client - Class BatchGetAssetsHistoryRequest (1.9.2) Stay organized with collections Save and categorize content based on your preferences.

2.3.3 (latest) 2.3.2 2.2.3 2.1.3 2.0.1 1.16.4 1.14.1 1.13.2 1.12.2 1.11.3 1.10.2 1.9.2

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Asset V1beta1 Client class BatchGetAssetsHistoryRequest.

Batch get assets history request.

Generated from protobuf message `google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest`

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

Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").

`↳ asset_names`

`string[]`  

A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.

`↳ content_type`

`int`  

Optional. The content type.

`↳ read_time_window`

`[Google\Cloud\Asset\V1beta1\TimeWindow](/php/docs/reference/cloud-asset/1.9.2/V1beta1.TimeWindow)`  

Optional. The time window for the asset history. Both start\_time and end\_time are optional and if set, it must be after 2018-10-02 UTC. If end\_time is not set, it is default to current timestamp. If start\_time is not set, the snapshot of the assets at end\_time will be returned. The returned results contain all temporal assets whose time window overlap with read\_time\_window.

### getParent

Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").

Generated from protobuf field `string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").

Generated from protobuf field `string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAssetNames

A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.

Generated from protobuf field `repeated string asset_names = 2;`

**Returns**

**Type**

**Description**

`Google\Protobuf\Internal\RepeatedField`

### setAssetNames

A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.

See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.

Generated from protobuf field `repeated string asset_names = 2;`

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getContentType

Optional. The content type.

Generated from protobuf field `.google.cloud.asset.v1beta1.ContentType content_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`int`

### setContentType

Optional. The content type.

Generated from protobuf field `.google.cloud.asset.v1beta1.ContentType content_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getReadTimeWindow

Optional. The time window for the asset history. Both start\_time and end\_time are optional and if set, it must be after 2018-10-02 UTC. If end\_time is not set, it is default to current timestamp. If start\_time is not set, the snapshot of the assets at end\_time will be returned. The returned results contain all temporal assets whose time window overlap with read\_time\_window.

Generated from protobuf field `.google.cloud.asset.v1beta1.TimeWindow read_time_window = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Google\Cloud\Asset\V1beta1\TimeWindow](/php/docs/reference/cloud-asset/1.9.2/V1beta1.TimeWindow)`

### setReadTimeWindow

Optional. The time window for the asset history. Both start\_time and end\_time are optional and if set, it must be after 2018-10-02 UTC. If end\_time is not set, it is default to current timestamp. If start\_time is not set, the snapshot of the assets at end\_time will be returned. The returned results contain all temporal assets whose time window overlap with read\_time\_window.

Generated from protobuf field `.google.cloud.asset.v1beta1.TimeWindow read_time_window = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Asset\V1beta1\TimeWindow](/php/docs/reference/cloud-asset/1.9.2/V1beta1.TimeWindow)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
