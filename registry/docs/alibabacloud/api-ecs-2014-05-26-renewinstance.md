Renews a subscription Elastic Compute Service (ECS) instance. You can specify a renewal period or renew the instance to a unified expiration date.

## Operation description

**Before you call this operation, make sure that you are familiar with the billing methods and [pricing](https://www.alibabacloud.com/product/ecs#pricing) of ECS**.

-   Make sure that your account balance or credit balance is sufficient.
-   Only subscription instances are supported. If you call this operation for a pay-as-you-go instance, an error is returned.
-   You must specify the renewal period-related parameter pair (`Period` and `PeriodUnit`) or `ExpectedRenewDay`, but not both.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RenewInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RenewInstance)

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

ecs:RenewInstance

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

0c593ea1-3bea-11e9-b96b-88e9fe637760

InstanceId

string

Yes

The ID of the instance that you want to renew.

i-bp67acfmxazb4p\*\*\*\*

Period

integer

No

The renewal period of the subscription instance. If `DedicatedHostId` is specified, the value of Period cannot exceed the subscription period of the specified dedicated host.

Valid values when PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 12.

**Note** The renewal period-related parameter pair (`Period` and `PeriodUnit`) and `ExpectedRenewDay` are mutually exclusive.

1

PeriodUnit

string

No

The unit of the renewal period. Valid values:

Month

Default value: Month.

Month

ExpectedRenewDay

integer

No

Specifies the [unified expiration date](/help/en/ecs/synchronize-the-expiration-dates-of-subscription-instances). Valid values: 1 to 28.

To use this parameter, you must [specify a unified expiration date for the ECS instance](/help/en/ecs/synchronize-the-expiration-dates-of-subscription-instances#694cb636c0rp6). The value of this parameter must be the same as the specified unified expiration date. Otherwise, the call fails.

**Note** You must specify the renewal period-related parameter pair (`Period` and `PeriodUnit`) or `ExpectedRenewDay`, but not both.

5

## Response parameters

Parameter

Type

Description

Example

object

OrderId

string

The order ID.

1234567890

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "OrderId": 1234567890,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInternetChargeType.ValueNotSupported

The specified InternetChargeType is not valid.

The specified InternetChargeType parameter is invalid.

400

InvalidInstanceType.NotSupported

The specified InstanceType is not Supported.

The specified InstanceType parameter is invalid.

400

InvalidParameter

The specified parameter "InternetMaxBandwidthOut" is not valid.

\-

400

InvalidInstanceChargeType.NotFound

The InstanceChargeType does not exist in our records.

The specified instance billing method does not exist.

400

InvalidRebootTime.Malformed

The specified RebootTime is not valid.

The specified RebootTime parameter is invalid.

400

InvalidRebootTime.ValueNotSupported

The specified RebootTime is out of the permitted range.

The specified restart time is invalid.

400

IdempotenceParamNotMatch

Request uses a client token in a previous request but is not identical to that request.

This request and the previous request contain the same client token but different other parameters.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

InvalidInstanceType.codeUnauthorized

The specified InstanceType is not authorized.

The specified InstanceType parameter is invalid.

400

InvalidInternetChargeType.InstanceNotSupported

The specified instance which is in vpc is not support the parameter InternetChargeType.

The specified billing method for network usage is not supported by the specified instance of the VPC type.

400

InvalidPeriod

The specified period is not valid.

The specified period is invalid.

400

MissingParamter

The specified parameter "Period" is not null.

\-

400

Upgrade.NotSupported

Upgrade operation is not supported.

The upgrade operation is invalid.

400

OperationDenied

Specified instance is in VPC.

The instance resides in a VPC.

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

400

InvalidParameter

The specified parameter " InternetMaxBandwidthOut " is not valid.

\-

400

DependencyViolation.InstanceType

Current instancetype cannot be changed to the specified one.

The current instance type cannot be changed to the specified one.

400

InvalidPeriodUnit.ValueNotSupported

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

400

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist.

\-

400

InvalidDedicatedHostStatus.NotSupport

Operation denied due to dedicated host status.

\-

400

IncorrectDedicatedHostStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

400

InvalidPeriod.ExceededDedicatedHost

Instance expired date can't exceed dedicated host expired date.

\-

400

InvalidStatus.Upgrading

The instance is upgrading; please try again later.

The instance is being upgraded. Try again later.

400

InvalidPeriod.ExceededMaximumExpirationDate

The specified renewal period cannot exceed the maximum expiration date. We recommend you try shortening the renewal period at next attempt.

The specified renewal period exceeds the maximum allowed value. We recommend that you shorten the renewal period at your next attempt.

400

LastOrderProcessing

The previous order is still processing, please try again later.

The order is being processed. Try again later.

400

Idempotence.Processing

The previous request is still processing, please try again later.

The request is being processed. Try again later.

400

OperationDenied

The current user does not support this operation.

Your account does not support this operation.

400

InvalidLoanOrderStatus.Uncompleted

Any unpaid order must be cancelled before you try this action again. The scheduled unpaid order is a loan order that cannot be auto cancelled. For more information, visit the loan management center.

\-

400

OperationDenied.UnfinishedOrder

The current instance has unfinished refundOrder, this operation is denied.

\-

400

InvalidPeriod.NotFound

The specified period and expectedRenewDay cannot both be empty.

\-

400

InvalidExpectedRenewDay.StarterPackageNotSupported

The specified starterPackage cannot support renew with expectedRenewDay.

\-

400

InvalidParam.ExpectedRenewDay

The specified param ExpectedRenewDay is not valid.

\-

400

QuotaExceed.AlignInstance

The maximum number of align operations is exceeded.

\-

400

InvalidExpectedRenewDay.Conflict

The specified expectedRenewDay is in conflict with period.

\-

400

InvalidExpectedRenewDay.Conflict

The specified expectedRenewDay is in conflict with periodUnit.

\-

400

InvalidExpectedRenewDay.ValueNotSupported

The specified parameter ExpectedRenewDay is not valid.

\-

400

OperationDenied.AbnormalInstanceInfo

The current renewable operation is not supported due to abnormal information of the instance, please submit ticket to process.

\-

400

NoPermission.Price

The operation requires price permission. Please either apply for permission from your main account, or set the parameter AutoPay as true.

This operation requires price permission. Please apply for permission to your master account, or set the parameter AutoPay to true for automatic payment.

400

InvalidOperation.ClassicNetworkTypeNotSupported

The classic network instance does not support this operation.

Sorry, the instance you renewed based on the classic network architecture cannot be renewed. You need to migrate to a VPC for normal renewal.

403

ChargeTypeViolation

The operation is not permitted due to charge type of the instance.

The operation is not supported while the instance is using the current billing method.

403

Diskcategory.Mismatch

The disk specified to convert to portable is not allowed due to the disk category does not support.

The specified disk cannot be converted to a removable disk due to disk category constraints.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceSpecModification.NotEffective

The specified instance has been reserved for making a spec modification and not taken effective in the current contract period.

The specified instance is retained due to the instance type change. The instance type change cannot take effect during the current contract period.

403

LastTokenProcessing

The last token request is processing.

A token request is being processed. Try again later.

403

Instance.UnPaidOrder

The specified instance has unpaid order.

Your account has unpaid orders for the instance.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InvalidDisk.NotAllowed

The specified disk is not allowed to be converted to portable.

The specified disk cannot be converted to a removable disk.

403

InstanceTypeNotSupported

The specified zone does not offer the specified instancetype.

The specified instance type is not supported in the specified zone.

403

InvalidChargeType.NotSupported

The chargeType of the instance does not support this operation.

The operation is not supported while the instance is using the current billing method.

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone, try other types of resources or other regions and zones.

The requested resources are sold out in the specified zone. Try another instance type or zone.

403

OperationDenied.ImageNotValid

The specified image is not authorized.

You are not authorized to use this image.

403

OperationDenied.NoStock

The resource is out of usage.

The instance is not in the Running state. Start the instance or check whether the specified operation is valid.

403

InvalidPeriod.StarterPackage

This instance was created by using a Starter Package plan and can only be renewed monthly, not yearly.

The instance was created in a Starter Package plan and can only be automatically renewed on a monthly basis.

403

RenewDateNotSupported.StarterPackage

This instance was created by using a Starter Package plan and can only be renewed three days before it expires.

\-

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-21

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewInstance?updateTime=2025-01-21#workbench-doc-change-demo)

2024-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewInstance?updateTime=2024-10-30#workbench-doc-change-demo)

2022-08-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RenewInstance?updateTime=2022-08-24#workbench-doc-change-demo)
