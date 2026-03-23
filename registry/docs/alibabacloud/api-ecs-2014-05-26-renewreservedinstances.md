Renews one or more reserved instances. When you renew reserved instances, you can specify a validity period (renewal period) and whether to enable auto-renewal for the reserved instances.

## Operation description

**Before you call this operation, make sure that you are familiar with the billing and [pricing](https://www.alibabacloud.com/zh/pricing-calculator#/commodity/vm_intl) of reserved instances.**

-   You can manually renew reserved instances or enable auto-renewal for reserved instances. For more information, see the [Renewal](/help/en/ecs/reserved-instances#53bfc50b78sta) section of the "Reserved instances" topic.
-   You can call the [DescribeReservedInstances](/help/en/ecs/api-describereservedinstances) operation to query the reserved instances that you purchased.
-   You can call this operation to enable auto-renewal for reserved instances but cannot call this operation to disable auto-renewal for reserved instances. To disable auto-renewal for a reserved instance, call the [ModifyReservedInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyreservedinstanceautorenewattribute) operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RenewReservedInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RenewReservedInstances)

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

ecs:RenewReservedInstances

create

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#ReservedInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ReservedInstanceId

array

No

The IDs of the reserved instances.

string

No

The ID of the reserved instance. You can call the [DescribeReservedInstances](/help/en/ecs/api-describereservedinstances) operation to query the IDs of reserved instances that you purchased.

You can specify up to 10 IDs of reserved instances in a single request.

ecsri-2ze53qonjqxg7r\*\*\*\*

RegionId

string

No

The region ID of the reserved instance.

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

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

Set the value to Year.

Year

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

AutoRenew

boolean

No

Specifies whether to enable auto-renewal for the reserved instance. Valid values:

-   true
-   false

Default value: false.

true

AutoRenewPeriod

integer

No

The auto-renewal duration. Unit: months. This parameter takes effect only when AutoRenew is set to true.

Valid values: 12 and 36. Default value: 12.

1

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

8C314443-AF0D-4766-9562-C83B7F1\*\*\*\*

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

2023912123\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8C314443-AF0D-4766-9562-C83B7F1****",
  "ReservedInstanceIdSets": {
    "ReservedInstanceId": [
      "ecsri-2ze53qonjqxg7r****"
    ]
  },
  "OrderId": "2023912123****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

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

OperationDenied

The specified InstanceType or Zone is not authorized for current user.

\-

400

InvalidPeriod

The specified Period or PeriodUnit is not correct.

\-

400

MissingParameter.ReservedInstanceIds

The specified ReservedInstanceIds does not exist.

\-

400

InvalidParameter.PeriodUnit

The specified PeriodUnit is invalid.

The specified PeriodUnit is invalid

400

InvalidParameter.Period

The specified Period is invalid.

\-

400

InvalidParameter.ReservedInstanceIds

The specified ReservedInstanceIds is invalid.

\-

400

InvalidPeriod.ExceededMaximumExpiration

The specified renewal period cannot exceed the maximum expiration date. We recommend you try shortening the renewal period at next attempt.

\-

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

InvalidReservedInstanceName.Malformed

The specified parameter ReservedInstanceName is invalid.

\-

403

InvalidParameter.Scope

The specified parameter 'Scope' is invalid.

\-

403

InvalidReservedInstanceStatus.ValueNotSupported

ReservedInstance status is not supported.

\-

403

InvalidReservedInstanceOfferingType.ValueNotSupported

The OfferingType is not supported.

\-

403

InvalidReservedInstanceOfferingClass.ValueNotSupported

The OfferingClass is not supported.

\-

403

MissingParameter.ZoneId

The specified zoneId should be not empty.

\-

403

MissingParameter.InstanceType

The instanceType should be not empty.

\-

403

MissingParameter.ReservedInstanceId

The ids of reservedInstance can not be empty.

\-

403

MissingParameter.ReservedInstanceConfiguration

The configurations of reservedInstance can not be empty.

\-

403

InvalidParameter.SplitOrMerge

The Many-to-many of modification is not supported.

\-

403

MissingParameter.InstanceTypeAndAmountBothEmpty

The instanceType and amount can not be both empty.

\-

403

InvalidReservedInstancePlatform.ValueNotSupported

The Platform is not supported.

\-

403

InvalidParameter.ReservedInstanceName

The reservedInstanceName is invalid.

reservedInstanceName field value is illegal

403

InvalidReservedInstanceZone.ValueNotSupported

The zoneId is not exist.

\-

403

InvalidParameter.ValueNotSupported

The instanceTypeFamily of the instance to be changed must be consistent.

\-

403

InvalidParameter.ValueNotSupported

The expiration time of the instance to be changed must be consistent.

\-

403

InvalidParameter.ValueNotSupported

The factor of instanceType is not equal.

\-

403

InvalidParameter.ValueNotSupported

The offeringClass of instance is not same.

\-

403

InvalidParameter.ValueNotSupported

The offeringType of instance is not same.

\-

403

IncorrectInstanceStatus

The status of specified reservedInstance must be active.

\-

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InvalidPlatform.ValueNotSupported

The platform of reservedInstance is invalid.

\-

403

InvalidScope.ValueNotSupported

The scope of reservedInstance is invalid, The valid value is Zone or Region.

\-

403

InvalidConfiguration.ValueNotSupported

The modification Configuration should not be empty.

\-

403

InvalidZoneId.ValueNotSupported

The specified zoneId should be same.

\-

403

InvalidParameter

The parameter is invalid.Please check it.

\-

403

InvalidInstanceAmount.ValueNotSupported

The instanceAmount is invalid.

\-

403

OperationDenied.OnlyModifyName

It is not allowed to modify the ReservedInstanceName only.

The reserved instance name cannot be separately modified.

403

InvalidReservedInstanceId.NotFound

The specified parameter ReservedInstanceId is invalid.

\-

403

ChargeTypeViolation

The operation is not permitted due to charge type of the instance.

The operation is not supported while the instance is using the current billing method.

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

InvalidZoneId.NotFound

The specified ZoneId does not exist.

The specified zone ID does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewReservedInstances?updateTime=2024-12-26#workbench-doc-change-demo)

2022-11-02

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewReservedInstances?updateTime=2022-11-02#workbench-doc-change-demo)

2022-08-12

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewReservedInstances?updateTime=2022-08-12#workbench-doc-change-demo)
