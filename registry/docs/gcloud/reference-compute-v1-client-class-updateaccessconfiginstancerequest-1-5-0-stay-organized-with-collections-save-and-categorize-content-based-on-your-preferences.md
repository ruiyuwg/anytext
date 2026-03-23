-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class UpdateAccessConfigInstanceRequest (1.5.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class UpdateAccessConfigInstanceRequest.

A request message for Instances.UpdateAccessConfig. See the method description for details.

Generated from protobuf message `google.cloud.compute.v1.UpdateAccessConfigInstanceRequest`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ access_config_resource`

`[Google\Cloud\Compute\V1\AccessConfig](/php/docs/reference/cloud-compute/1.5.0/V1.AccessConfig)`  

The body resource for this request

`↳ instance`

`string`  

The instance name for this request.

`↳ network_interface`

`string`  

The name of the network interface where the access config is attached.

`↳ project`

`string`  

Project ID for this request.

`↳ request_id`

`string`  

An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).

`↳ zone`

`string`  

The name of the zone for this request.

### getAccessConfigResource

The body resource for this request

Generated from protobuf field `.google.cloud.compute.v1.AccessConfig access_config_resource = 387825552 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Google\Cloud\Compute\V1\AccessConfig](/php/docs/reference/cloud-compute/1.5.0/V1.AccessConfig)|null`

### hasAccessConfigResource

### clearAccessConfigResource

### setAccessConfigResource

The body resource for this request

Generated from protobuf field `.google.cloud.compute.v1.AccessConfig access_config_resource = 387825552 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Compute\V1\AccessConfig](/php/docs/reference/cloud-compute/1.5.0/V1.AccessConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getInstance

The instance name for this request.

Generated from protobuf field `string instance = 18257045 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`string`

### setInstance

The instance name for this request.

Generated from protobuf field `string instance = 18257045 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNetworkInterface

The name of the network interface where the access config is attached.

Generated from protobuf field `string network_interface = 365387880 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`string`

### setNetworkInterface

The name of the network interface where the access config is attached.

Generated from protobuf field `string network_interface = 365387880 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProject

Project ID for this request.

Generated from protobuf field `string project = 227560217 [(.google.api.field_behavior) = REQUIRED, (.google.cloud.operation_request_field) = "project"];`

**Returns**

**Type**

**Description**

`string`

### setProject

Project ID for this request.

Generated from protobuf field `string project = 227560217 [(.google.api.field_behavior) = REQUIRED, (.google.cloud.operation_request_field) = "project"];`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).

Generated from protobuf field `optional string request_id = 37109963;`

**Returns**

**Type**

**Description**

`string`

### hasRequestId

### clearRequestId

### setRequestId

An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).

Generated from protobuf field `optional string request_id = 37109963;`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getZone

The name of the zone for this request.

Generated from protobuf field `string zone = 3744684 [(.google.api.field_behavior) = REQUIRED, (.google.cloud.operation_request_field) = "zone"];`

**Returns**

**Type**

**Description**

`string`

### setZone

The name of the zone for this request.

Generated from protobuf field `string zone = 3744684 [(.google.api.field_behavior) = REQUIRED, (.google.cloud.operation_request_field) = "zone"];`

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
