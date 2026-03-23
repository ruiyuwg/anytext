Converts the billing method of a data disk attached to a subscription ECS instance between pay-as-you-go and subscription.

## Operation description

For information about how to change the billing method of cloud disks, see [Change the billing methods of a disk](/help/en/ecs/switch-the-billing-method-of-a-disk).

Take note of the following items:

-   Only pay-as-you-go disks can be attached to pay-as-you-go instances, and the billing methods of the disks cannot be changed.
-   The instance to which data disks are attached cannot be in the Stopped state due to expiration.
-   The price difference is refunded to the payment account that you used. Vouchers that have been redeemed are nonrefundable.
-   You cannot change the billing method again within 5 minutes of a successful change.

After you change the billing method, the payment (if any) is automatically completed. Maintain sufficient balance in your account. Otherwise, your order becomes invalid and must be canceled. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, log on to the **Expenses and Costs console**, go to the [Orders page](https://usercenter2-intl.console.alibabacloud.com/order/list), and pay for the order.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskChargeType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskChargeType)

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

ecs:ModifyDiskChargeType

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

InstanceId

string

Yes

The ID of the instance to which disks are attached.

i-bp1i778bq705cvx1\*\*\*\*

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DiskIds

string

Yes

The IDs of disks. The value is a JSON array that consists of up to 16 disk IDs. Separate the disk IDs with commas (,).

\[“d-bp67acfmxazb4ph\*\*\*\*”, “d-bp67acfmxazb4pi\*\*\*\*”, … “d-bp67acfmxazb4pj\*\*\*\*”\]

AutoPay

boolean

No

Specifies whether to automatically complete the payment. Valid values:

-   true (default): The payment is automatically completed. Maintain sufficient balance in your account. Otherwise, your order becomes invalid and must be canceled.
-   false: An order is generated but no payment is made. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, log on to the **Expenses and Costs console**, go to the [Orders page](https://usercenter2-intl.console.alibabacloud.com/order/list), and pay for the order.

true

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

DiskChargeType

string

No

The new billing method of the disk. Valid values:

-   PrePaid (default): changes the billing method from pay-as-you-go to subscription.
-   PostPaid: changes the billing method from subscription to pay-as-you-go.

**Note** When you change the billing method of a pay-as-you-go disk to subscription, the billing cycle of the disk is automatically synchronized with that of the associated ECS instance.

PostPaid

## Response parameters

Parameter

Type

Description

Example

object

OrderId

string

The ID of the order.

1234567890

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "OrderId": 1234567890,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
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

InvalidInstanceType.ValueNotSupported

The specified InstanceType is not supported.

The specified instance type is not supported. Try another instance type.

400

MissingParameter.RegionId

RegionId should not be null.

The RegionId parameter is required.

400

MissingParameter.InstanceIdNotSupported

InstanceId should not be null.

The InstanceId parameter is required.

400

ChargeTypeViolation

The operation is not permitted due to charge type of the instance.

The operation is not supported while the instance is using the current billing method.

400

InvalidInstanceId.Released

The specified Instance is not exist.

The specified instance does not exist. Check whether the instance ID is correct.

400

InvalidInstance.PurchaseNotFound

The specified Instance has no purchase.

The specified instance cannot be purchased.

400

InvalidInstance.UnPaidOrder

The specified Instance has unpaid order.

The specified instance has a purchase order not paid for.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

Account.Arrearage

Your account has been in arrears.

Your account does not have enough balance. Please add funds to your account.

400

Idempotence.SignatureMismatch

There is a idempotence signature mismatch between this and last request.

The ClientToken value is the same in the current and previous requests but the other parameters in these requests do not match.

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not Supported.

You are not authorized to use the instance type.

400

OrderCreationFailed

Create Order failed, please check your parameters and try it later.

\-

400

Throttling

Request was denied due to request throttling, please try again after 5 minutes.

\-

400

InstanceDowngrade.QuotaExceed

Quota of instance downgrade is exceed.

The maximum number of configuration downgrades allowed for the instance has been reached.

400

ChargeTypeViolation

The operation is not permitted due to charge type of the disk.

\-

400

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

400

InvalidDisk.DetachedSystemDisk

The specified disk is a detached system disk, does not support this operation.

\-

400

LastOrderProcessing

The previous order is still processing, please try again later.

The order is being processed. Try again later.

400

InvalidAction.WithActiveElasticUpgrade

The instance has active Elastic Upgrade.

The operation is not supported while the instance are being temporarily upgraded. The instance goes through a temporary configuration upgrade if the EndTime parameter is specified to call the ModifyPrepayInstanceSpec operation.

400

DISK\_IN\_DEDICATED\_BLOCK\_STORAGE\_CLUSTER

The disk in dedicated block storage cluster is not allowed to do this operation.

\-

400

NoPermission.Price

The operation requires price permission. Please either apply for permission from your main account, or set the parameter AutoPay as true.

This operation requires price permission. Please apply for permission to your master account, or set the parameter AutoPay to true for automatic payment.

400

NoPermission.Refund

The operation requires refund permission. Please apply for permission from your main account.

This account does not have permission to operate refund, and the main account needs to authorize refund-related permissions.

400

InvalidOperation.DiskMustAttachedToInstance

The specified data disks must have been attached to this instance.

The specified disk must have been attached to this instance.

400

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

400

InvalidOrder.Overdue

The specified account has overdue orders.

Your account has an overdue payment. You must complete the payment before you can purchase more instances.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidInstanceChargeType.NotFound

The chargeType of the instance does not support this operation.

The operation is not supported while the instance is using the current billing method.

403

InvalidOperation.MultiAttachDisk

Multi attach disk does not support this operation.

Disks for which the multi-attach feature is enabled do not support the operation.

403

InvalidOperation.UnpaidOrder

The specified instance has unpaid orders and does not support the current operation.

The specified instance has unpaid orders and does not support the current operation.

404

InvalidRegionId.NotFound

The RegionId provided does not exist.

The specified region does not exist.

404

PaymentMethodNotFound

No billing method has been registered on the account.

\-

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

InvalidRamRole.NotFound

The specified parameter "RAMRoleName" does not exist.

\-

404

InvalidDiskIds.NotFound

Some of the specified data disks do not exist.

Some disks specified by the DiskIds parameter do not exist.

404

InvalidDiskIds.NotPortable

The specified DiskId is not portable.

The specified disk is not removable.

404

InvalidDataDiskSize.ValueNotSupported

The specified parameter "Size" is not supported.

\-

404

InvalidAction.NotSupported

The specified action is not supported.

The specified API operation is not supported.

404

InvalidInstanceStatus.NotSupported

The status of the specified instance is invalid.

The instance is in a state that does not support the current operation.

404

InvalidInstanceId.NOT\_FOUND

The specified instance is not exist.

The specified instance does not exist.

404

InvalidDiskIds.NotPortable

The specified disk is not portable.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2025-12-25#workbench-doc-change-demo)

2025-04-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2025-04-10#workbench-doc-change-demo)

2025-04-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2025-04-07#workbench-doc-change-demo)

2025-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2025-03-21#workbench-doc-change-demo)

2025-03-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2025-03-11#workbench-doc-change-demo)

2025-02-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2025-02-26#workbench-doc-change-demo)

2024-12-10

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2024-12-10#workbench-doc-change-demo)

2024-11-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskChargeType?updateTime=2024-11-27#workbench-doc-change-demo)
