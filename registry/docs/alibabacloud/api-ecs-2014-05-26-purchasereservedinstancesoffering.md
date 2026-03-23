Purchases a regional or zonal reserved instance to offset the bills of pay-as-you-go Elastic Compute Service (ECS) instances.

## Operation description

**Before you call this operation, make sure that you are familiar with the billing methods and [pricing](https://www.alibabacloud.com/zh/pricing-calculator#/commodity/vm_intl) of reserved instances.**

-   Before you call this operation, make sure that you are familiar with the billing rules of reserved instances. For more information, see [Reserved instances](/help/en/ecs/reserved-instances).
-   You can retain up to 20 regional reserved instances in all regions per Alibaba Cloud account.
-   You can retain up to 20 zonal reserved instances per zone per Alibaba Cloud account.

## [](#sample-requests)[](#)Sample requests

-   Purchase a one-year regional reserved instance in the China (Hangzhou) region to offset the bills of three ecs.g5.large Linux pay-as-you-go instances.

```
"RegionId":"cn-hangzhou", // Specify the China (Hangzhou) region."InstanceType":"ecs.g5.large", // Specify the instance type."Scope":"Region", // Set the scope of the reserved instance to regional."InstanceAmount":3, // Specify the reserved instance to match three pay-as-you-go instances of the same instance type."OfferingType":"All Upfront", // Specify the payment option. In this example, the default value is used, which is All Upfront."Platform":"Linux", // Specify the operating system platform of the ECS instances eligible for the reserved instance. In this example, the Linux or Unix-like operating system is used."Period":1, // Specify the term of the reserved instance. In this example, the one-year duration is used."PeriodUnit":"Year", // Set the unit of the term to year.
```

-   Purchase a two-year zonal reserved instance in Hangzhou Zone H to offset the bills of five ecs.g5.large Windows pay-as-you-go instances.

```
"RegionId":"cn-hangzhou",
"ZoneId":"cn-hangzhou-h", // Specify Hangzhou Zone H."InstanceType":"ecs.g5.large",
"Scope":"Zone", // Set the scope of the reserved instance to zonal."InstanceAmount":5, // Specify the reserved instance to match five pay-as-you-go instances of the same instance type."OfferingType":"All Upfront",
"Platform":"Windows", // Specify the operating system platform of the ECS instances eligible for the reserved instance. In this example, the Windows operating system is used."Period":2, // Specify the term of the reserved instance. In this example, the two-year duration is used."PeriodUnit":"Year", // Set the unit of the term to year.
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/PurchaseReservedInstancesOffering)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/PurchaseReservedInstancesOffering)

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

ecs:PurchaseReservedInstancesOffering

create

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The ID of the region in which to purchase a reserved instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Tag

array<object>

No

The tags to add to the reserved instance. You can add up to 20 tags.

object

No

Key

string

No

The tag key to add to the reserved instance. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The tag value to add to the reserved instance. The tag value cannot be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.

TestValue

ResourceGroupId

string

No

The ID of the resource group.

rg-bp199lyny9b3\*\*\*\*

ZoneId

string

No

The ID of the zone in which to purchase the reserved instance. This parameter takes effect and is required only if you set `Scope` to `Zone`. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

cn-hangzhou-g

ReservedInstanceName

string

No

The name of the reserved instance. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testReservedInstanceName

InstanceType

string

Yes

The instance type that the reserved instance can match.

**Note** The instance types that support reserved instances are subject to updates. For more information, see [Reserved instance overview](/help/en/ecs/user-guide/overview-6#3c1b682051vt4).

ecs.g5.large

Scope

string

No

The scope of reserved instance N. Valid values:

-   Region: regional
-   Zone: zonal

Default value: Region.

Zone

InstanceAmount

integer

No

The number of pay-as-you-go instances of the same instance type that the reserved instance can match. Valid values: 1 to 50.

Default value: 1.

3

OfferingType

string

No

The payment option of the reserved instance. Valid values:

-   No Upfront
-   Partial Upfront
-   All Upfront

Default value: All Upfront.

All Upfront

Description

string

No

The description of the reserved instance. The description can be 2 to 256 characters in length and cannot start with [http:// or https://](http://https://%E3%80%82).

This parameter is left empty by default.

testDescription

Platform

string

No

The operating system of the image used by the instance. Valid values:

-   Windows: Windows Server operating system
-   Linux: Linux and UNIX-like operating system

Default value: Linux.

Linux

Period

integer

No

The validity period of the reserved instance.

Valid values: 1 and 3.

Default value: 1.

1

PeriodUnit

string

No

The unit of the validity period of the reserved instance.

Valid value: Year.

Default value: Year.

Year

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

AutoRenew

boolean

No

Specifies whether to enable auto-renewal for the reserved instance. Valid values:

-   true
-   false (default)

true

AutoRenewPeriod

integer

No

The auto-renewal term of the reserved instance. Unit: months. This parameter takes effect only when AutoRenew is set to true.

Valid values: 12 and 36.

Default value when PeriodUnit is set to Year: 12.

1

StartTime

string

No

The time when you want the reserved instance to take effect. Specify the time in the [ISO 8601 standard](/help/en/ecs/developer-reference/iso-8601-time-format) in the `yyyy-MM-ddTHHZ` format. The time must be in UTC.

**Note** If you do not specify this parameter, the reserved instance takes effect starting on the hour when the reserved instance is purchased. For example, if you purchase a reserved instance at 13:45:35 on November 1, 2024, the reserved instance takes effect starting 13:00:00 on November 1, 2024.

2024-07-04T15Z

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

8C314443-AF0D-4766-9562-C83B7F1A3C8B

ReservedInstanceIdSets

array

The IDs of the reserved instances.

ReservedInstanceId

string

The ID of the reserved instance.

ecsri-2ze53qonjqxg7r\*\*\*\*

OrderId

string

The order ID.

23841229\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8C314443-AF0D-4766-9562-C83B7F1A3C8B",
  "ReservedInstanceIdSets": {
    "ReservedInstanceId": [
      "ecsri-2ze53qonjqxg7r****"
    ]
  },
  "OrderId": "23841229****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidStartTime.ScopeNotMatch

Zonal reservedInstance not supported for scheduled creating.

\-

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

400

InvalidDescription.Malformed

The specified parameter "Description" is not valid.

The source description can be 2 to 256 characters in length. It cannot start with http:// and https://.

400

InvalidParameter.Conflict

The specified region and cluster do not match.

The specified region and cluster do not correspond to each other.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidPeriodUnit.ValueNotSupported

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidChargeType.ValueNotSupported

ChargeType is not valid.

This billing method is not supported. Select another billing method.

400

InvalidParameter.Scope

The specified parameter 'Scope' is invalid.

\-

400

InvalidReservedInstanceStatus.ValueNotSupported

ReservedInstance status is not supported.

\-

400

InvalidReservedInstanceOfferingType.ValueNotSupported

The OfferingType is not supported.

\-

400

InvalidReservedInstanceOfferingClass.ValueNotSupported

The OfferingClass is not supported.

\-

400

MissingParameter.ZoneId

The specified zoneId should be not empty.

\-

400

MissingParameter.InstanceType

The instanceType should be not empty.

\-

400

MissingParameter.ReservedInstanceId

The ids of reservedInstance can not be empty.

\-

400

MissingParameter.ReservedInstanceConfiguration

The configurations of reservedInstance can not be empty.

\-

400

InvalidParameter.SplitOrMerge

The Many-to-many of modification is not supported.

\-

400

MissingParameter.InstanceTypeAndAmountBothEmpty

The instanceType and amount can not be both empty.

\-

400

InvalidReservedInstancePlatform.ValueNotSupported

The Platform is not supported.

\-

400

InvalidParameter.ReservedInstanceName

ReservedInstanceName is invalid.

\-

400

InvalidReservedInstanceZone.ValueNotSupported

The zoneId is not exist.

\-

400

OperationDenied

The specified InstanceType or Zone is not authorized for current user.

\-

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType beyond the permitted range.

\-

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

403

OperationDenied

The creation of Host to the specified Zone is not allowed.

Dedicated hosts cannot be created in the specified zone.

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

403

OperationDenied

Sales of this resource are temporarily suspended in the specified region; please try again later.

The requested resource is unavailable in the specified region. Try again later.

403

NodeControllerUnavailable

The Node Controller is temporarily unavailable.

The node controller is unavailable.

403

OperationDenied

The resource is out of usage.

Insufficient resource inventory

403

InvalidParameter.ResourceOwnerAccount

ResourceOwnerAccount is Invalid.

The specified ResourceOwnerAccount parameter is invalid.

403

Zone.NotOpen

The specified zone is not granted to you to buy resources yet.

You are not authorized to purchase resources in the specified zone.

403

Zone.NotOnSale

The specified zone is not available for purchase.

The requested resources are unavailable in the specified zone. Try a different instance type or select a different region or zone.

403

Account.Arrearage

Your account has been in arrears.

Your account does not have enough balance. Please add funds to your account.

403

InvalidStartTime.MalFormed

The specified StartTime is not valid.

\-

403

InvalidStartTime.NotSupported

The specified startTime is not supported.

\-

403

RegionUnauthorized

You are not authorized to perform the operation in the specified region.

You are not authorized to perform the operation in the specified region.

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

PaymentMethodNotFound

No payment method has been registered on the account.

You have not configured a payment method for your account.

404

InvalidZoneId.NotFound

The specified ZoneId does not exist.

The specified zone ID does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-24

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/PurchaseReservedInstancesOffering?updateTime=2025-02-24#workbench-doc-change-demo)

2024-12-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/PurchaseReservedInstancesOffering?updateTime=2024-12-26#workbench-doc-change-demo)

2024-08-21

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/PurchaseReservedInstancesOffering?updateTime=2024-08-21#workbench-doc-change-demo)

2022-11-02

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/PurchaseReservedInstancesOffering?updateTime=2022-11-02#workbench-doc-change-demo)
