Updates a delivery channel in single-account mode.

## Operation description

Resource delivery supports the delivery of resource configuration change events and scheduled resource snapshots.

Scheduled resource snapshots support the following delivery scenarios:

-   Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
-   Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/UpdateDeliveryChannel)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/UpdateDeliveryChannel)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

resourcecenter:UpdateDeliveryChannel

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DeliveryChannelId

string

Yes

The ID of the delivery channel.

dc-4m6ffpkgu\*\*\*

DeliveryChannelName

string

No

The name of the delivery channel.

test-delivery-channel

DeliveryChannelDescription

string

No

The description of the delivery channel.

ResourceSnapshotDelivery

object

No

The configurations for delivery of scheduled resource snapshots.

DeliveryTime

string

No

The delivery time.

09:00Z

Enabled

string

No

Specifies whether to enable delivery of scheduled resource snapshots. Valid values:

-   true
-   false

true

TargetArn

string

No

The Alibaba Cloud Resource Name (ARN) of the delivery destination. Valid values:

-   If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a bucket whose name is prefixed with `resourcecenter-`. Example: `acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss`.
-   If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a Logstore whose name is prefixed with `resourcecenter-`. Example: `acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls`.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

TargetType

string

No

The type of the delivery destination. Valid values:

-   `OSS` for standard delivery
-   `OSS` or `SLS` for custom delivery

OSS

CustomExpression

string

No

The custom expression.

select \* from resources limit 100;

SlsProperties

object

No

The Simple Log Service configurations.

OversizedDataOssTargetArn

string

No

The ARN of the destination to which large files are delivered.

If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You need to set this parameter to the ARN of a bucket whose name is prefixed with `resourcecenter-`.

**Note** This parameter takes effect only if you use custom delivery for scheduled resource snapshots. You do not need to configure this parameter if you use standard delivery for scheduled resource snapshots.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

ResourceChangeDelivery

object

No

The configurations for delivery of resource configuration change events.

Enabled

string

No

Specifies whether to enable delivery of resource configuration change events. Valid values:

-   true
-   false

true

SlsProperties

object

No

The Simple Log Service configurations.

OversizedDataOssTargetArn

string

No

The ARN of the destination to which large files are delivered.

If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You need to set this parameter to the ARN of a bucket whose name is prefixed with `resourcecenter-`.

acs:oss:cn-hangzhou:1911422487776\*\*\*:resourcecenter-oss

TargetArn

string

No

The ARN of the delivery destination. Valid values:

-   If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a bucket whose name is prefixed with `resourcecenter-`.
-   If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a Logstore whose name is prefixed with `resourcecenter-`.

acs:log:cn-hangzhou: 1911422487776\*\*\*:project/delivery/logstore/resourcecenter-sls

TargetType

string

No

The type of the delivery destination.

Set the value to `SLS`.

SLS

DeliveryChannelFilter

object

No

The effective scope of the delivery channel.

ResourceTypes

array

No

The resource types of the delivery channel.

string

No

The resource type of the delivery channel. For more information, see [Services that work with Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).

If you want to deliver items of all resource types supported by Resource Center, set this parameter to `ALL`.

ACS::VPC::VPC

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

AD5F848D-CCDC-5464-93E1-4BA50A482\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AD5F848D-CCDC-5464-93E1-4BA50A482***"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

NoPermission.ResourceType

The operator is not permitted for this resource type.

The operator is not permitted for this resource type.

404

NotExists.DeliveryChannelId

The DeliveryChannelId does not exist.

The DeliveryChannelId does not exist.

404

MissingParameter.DeliveryName

The specified parameter DeliveryName is missing.

You must configure the DeliveryName parameter.

404

MissingParameter.OverSizedDataOssTargetArn

The specified parameter OverSizedDataOssTargetArn is missing.

The specified parameter OverSizedDataOssTargetArn is missing.

404

MissingParameter.DeliveryFilter.AccountScopes

The specified parameter DeliveryFilter.AccountScopes is missing.

The specified parameter DeliveryFilter.AccountScopes is missing.

404

MissingParameter.ResourceSnapshotDelivery.DeliveryTime

The specified parameter ResourceSnapshotDelivery.DeliveryTime is missing.

The specified parameter ResourceSnapshotDelivery.DeliveryTime is missing.

404

MissingParameter.ResourceSnapshotDelivery.TargetArn

The specified parameter ResourceSnapshotDelivery.TargetArn is missing.

The specified parameter ResourceSnapshotDelivery.TargetArn is missing.

404

MissingParameter.ResourceSnapshotDelivery.TargetType

The specified parameter ResourceSnapshotDelivery.TargetType is missing.

The specified parameter ResourceSnapshotDelivery.TargetType is missing.

404

MissingParameter.ResourceChangeDelivery.TargetArn

The specified parameter ResourceChangeDelivery.TargetArn is missing.

The specified parameter ResourceChangeDelivery.TargetArn is missing.

404

MissingParameter.ResourceChangeDelivery.TargetType

The specified parameter ResourceChangeDelivery.TargetType is missing.

The specified parameter ResourceChangeDelivery.TargetType is missing.

404

MissingParameter.ResourceSnapshotDelivery.CustomExpression

The specified parameter ResourceSnapshotDelivery.CustomExpression is missing.

The specified parameter ResourceSnapshotDelivery.CustomExpression is missing.

409

InvalidParameter.DeliveryChannelId

The specified parameter DeliveryChannelId is not valid.

The specified parameter DeliveryChannelId is not valid.

409

AlreadyExists.DeliveryName

The DeliveryName Name already exists.

The delivery name already exists.

409

InvalidParameter.DeliveryDescription

The specified parameter DeliveryDescription is not valid.

The DeliveryDescription parameter is invalid.

409

InvalidParameter.OverSizedDataOssTargetArn

The specified parameter OverSizedDataOssTargetArn is not valid.

\-

409

InvalidParameter.DeliveryFilter.AccountScopes

The specified parameter DeliveryFilter.AccountScopes is not valid.

The specified parameter DeliveryFilter.AccountScopes is not valid.

409

InvalidParameter.DeliveryFilter.ResourceTypes

The specified parameter DeliveryFilter.ResourceTypes is not valid.

The specified parameter DeliveryFilter.ResourceTypes is not valid.

409

InvalidParameter.ResourceSnapshotDelivery.TargetArn

The specified parameter ResourceSnapshotDelivery.TargetArn is not valid.

The specified parameter ResourceSnapshotDelivery.TargetArn is not valid.

409

InvalidParameter.ResourceSnapshotDelivery.DeliveryTime

The specified parameter ResourceSnapshotDelivery.DeliveryTime is not valid.

The specified parameter ResourceSnapshotDelivery.DeliveryTime is not valid.

409

InvalidParameter.ResourceSnapshotDelivery.TargetType

The specified parameter ResourceSnapshotDelivery.TargetType is not valid.

The specified parameter ResourceSnapshotDelivery.TargetType is not valid.

409

InvalidParameter.ResourceChangeDelivery.TargetArn

The specified parameter ResourceChangeDelivery.TargetArn is not valid.

The specified parameter ResourceChangeDelivery.TargetArn is not valid.

409

InvalidParameter.ResourceChangeDelivery.TargetType

The specified parameter ResourceChangeDelivery.TargetType is not valid.

The specified parameter ResourceChangeDelivery.TargetType is not valid.

409

InvalidParameter.CustomExpression

Error: %s.

Error: %s.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).
