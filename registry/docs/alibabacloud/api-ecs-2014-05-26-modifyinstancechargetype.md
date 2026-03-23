Changes the billing method of Elastic Compute Service (ECS) instances in batches.

## Operation description

### [](#precautions)[](#)Precautions

-   Before you call this operation, make sure that you are familiar with the [subscription](/help/en/ecs/subscription) and [pay-as-you-go](/help/en/ecs/pay-as-you-go-1) billing methods and [pricing](https://www.alibabacloud.com/product/ecs#pricing) of ECS.
-   The instances must be in the **Running** (`Running`) or **Stopped** (`Stopped`) state, and you have no overdue payments for the instances.
-   After you change the billing method, the payment is automatically completed. Make sure that the balance in your account is sufficient. Otherwise, your order becomes invalid and is canceled. If your account balance is insufficient, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can log on to the [ECS console](https://ecs.console.alibabacloud.com/) to pay for the order.

### [](#considerations)[](#)Considerations

-   **Change the billing method from subscription to pay-as-you-go**:
    
    -   After you change the billing method of an instance from subscription to pay-as-you-go, the new billing method remains in effect for the remaining lifecycle of the instance. The price difference is refunded to the payment account that you used. Vouchers that have been redeemed are not refundable.
    -   **Refund rule**: You have a quota for the total refund amount each month, and unused balance of this quota is not carried forward into the next month. After you use up the refund quota of the current month, you can change the billing method only in the next month. The refund amount incurred when you change the billing method is calculated based on the following formula: **Number of vCPUs × (Number of remaining days × 24 ± Number of remaining or elapsed hours)**. For more information, see [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1).
-   **Change the billing method from pay-as-you-go to subscription**:
    
    -   You can change the billing method of all data disks attached to an instance from pay-as-you-go to subscription.
    -   This operation cannot be called for a pay-as-you-go instance that has an automatic release time set. For more information, see [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceChargeType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceChargeType)

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

ecs:ModifyInstanceChargeType

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

InstanceIds

string

Yes

The instance IDs. The value can be a JSON array that consists of up to 20 instance IDs. Separate the instance IDs with commas (,).

\["i-bp67acfmxazb4p\*\*\*\*","i-bp67acfmxazb4d\*\*\*\*"\]

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Period

integer

No

The renewal duration of the subscription instance. If the instance is hosted on a dedicated host, the renewal duration of the instance cannot exceed the subscription duration of the dedicated host. Valid values:

Valid values when `PeriodUnit` is set to Month: `1, 2, 3, 4, 5, 6, 7, 8, 9, and 12`.

1

PeriodUnit

string

No

The unit of the renewal duration specified by `Period`. Valid values:

Month

Default value: Month.

Month

IncludeDataDisks

boolean

No

Specifies whether to change the billing method of all data disks on the instance from pay-as-you-go to subscription. Valid values:

-   true
-   false

Default value: false.

false

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

AutoPay

boolean

No

Specifies whether to automatically complete the payment. Valid values:

-   true: enables automatic payment. Maintain a sufficient account balance. Otherwise, your order becomes invalid and is canceled.
-   false: disables automatic payment. An order is generated but no payment is made.

Default value: true.

**Note** If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, you can log on to the ECS console to pay for the order.

false

InstanceChargeType

string

No

The new billing method of the instance. Valid values:

-   PrePaid: subscription
-   PostPaid: pay-as-you-go

Default value: PrePaid.

PrePaid

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

IsDetailFee

boolean

No

Specifies whether to return cost details of the order after the billing method is changed from subscription to pay-as-you-go. Valid values:

-   true
-   false

Default value: false.

false

## Response parameters

Parameter

Type

Description

Example

object

OrderId

string

The order ID.

20413515388\*\*\*\*

RequestId

string

The request ID.

B61C08E5-403A-46A2-96C1-F7B1216DB10C

FeeOfInstances

array<object>

Details about the charges for the order.

FeeOfInstance

object

InstanceId

string

The instance ID.

i-bp67acfmxazb4p\*\*\*\*

Currency

string

The unit of currency for the bill.

Alibaba Cloud China site (aliyun.com): CNY.

Alibaba Cloud International site (alibabacloud.com): USD.

CNY

Fee

string

The cost value.

0

## Examples

Sample success responses

`JSON`format

```
{
  "OrderId": "20413515388****",
  "RequestId": "B61C08E5-403A-46A2-96C1-F7B1216DB10C",
  "FeeOfInstances": {
    "FeeOfInstance": [
      {
        "InstanceId": "i-bp67acfmxazb4p****",
        "Currency": "CNY",
        "Fee": 0
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstance.UnpaidOrder

%s

\-

400

Throttling

Request was denied due to request throttling, try again later.

Requests are too frequent due to resource or account dimensions, please try again later.

400

InstanceHasProcessingConvertOrder

%s

\-

400

InvalidParameter.InstanceIds

The specified InstanceIds are invalid.

The specified instance is invalid.

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidStatus.ValueNotSupported

%s

The resource is in a state that does not support the current operation.

400

InvalidInstanceChargeType.ValueNotSupported

%s

The specified InstanceChargeType parameter is invalid.

400

InvalidSpotStrategy

The specified spotStrategy is not valid.

The specified SpotStrategy parameter is invalid.

400

ExpiredInstance

The specified instance has expired.

\-

400

InstancesIdQuotaExceed

The maximum number of Instances is exceeded.

\-

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

InvalidInstance.UnpaidOrder

The specified instance has unpaid order.

The specified instance has a purchase order not paid for.

400

InvalidInternetChargeType.ValueNotSupported

%s

The specified InternetChargeType parameter is invalid.

400

ReleaseTimeHaveBeenSet

The specified instance has been set released time.

An automatic release time has been set for the specified instance.

400

Throttling

Request was denied due to request throttling, please try again after 5 minutes.

\-

400

Throttling

%s

Your request is being throttled.

400

QuotaExceed.AfterpayInstance

The maximum number of Pay-As-You-Go instances is exceeded: %s.

\-

400

InvalidParameter.Bandwidth

%s

The specified bandwidth value is invalid.

400

QuotaExceed.RufundVcpu

The maximum number of refund vcpu is exceeded: %s.

\-

400

InvalidPeriod.UnitMismatch

The specified Period must be correlated with the PeriodUnit.

The specified Period value must fall within the valid value range that is determined based on the PeriodUnit parameter.

400

InvalidImageType.NotSupported

%s

\-

400

InvalidPeriod.ExceededDedicatedHost

Instance expired date can't exceed dedicated host expired date.

\-

400

InvalidMarketImageChargeType.NotSupport

The specified chargeType of marketImage is unsupported.

The billing method of the Alibaba Cloud Marketplace image is not supported.

400

InvalidSystemDiskCategory.ValueNotSupported

%s

The specified system disk category is invalid.

400

InvalidAccountStatus.PayAmountLimitExceeded

Your account is being restricted, due to no default payment method is set or you has not being authorized.

\-

400

InvalidInstance.NotFoundSystemDisk

The specified instance has no system disk.

The specified instance does not have a system disk. Make sure that the instance has a system disk. You can call the DescribeInstances operation to query the details of the instance.

400

AccountForbidden.ProductCreationLimited

The commodity must be officially operated by Aliyun and in pay-as-you-go billing method.

\-

400

Invalid.PrivatePoolOptions.MatchCriteria

Target mode does not support this operation.

The operation is not supported while the PrivatePoolOptions.MatchCriteria parameter is set to Target.

400

InvalidPeriod

The specified period is not valid.

The specified period is invalid.

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

QuotaExceeded.InternetBandwidth

%s.

Under your current account, the public network bandwidth of the Pay-As-You-Go ECS instance charged by fixed bandwidth exceeds the total bandwidth quota limit.

403

InvalidInstance.TempBandwidthUpgrade

Cannot switch to Pay-As-You-Go during the period of temporary bandwidth upgrade.

You cannot change the billing method of the instance to pay-as-you-go during the temporary bandwidth upgrade period.

403

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

403

InstanceType.Offline

%s

The operation is not supported while the instance type is retired or while resources of the instance type are insufficient.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

403

InvalidParameter.NotMatch

%s

A specified parameter is invalid. Check whether parameter conflicts exist.

403

InvalidAction

%s

The operation is invalid.

403

QuotaExceed.PostPaidDisk

Living postPaid disks quota exceeded.

\-

403

ImageNotSupportInstanceType

The specified instanceType is not supported by instance with marketplace image.

The specified Alibaba Cloud Marketplace image does not support the instance type.

403

InvalidInstanceType.PhasedOut

This instanceType is no longer offered.

The specified instance type is retired.

403

RealNameAuthenticationError

Your account has not passed the real-name authentication yet.

You have not completed real-name verification. Complete real-name verification and try again.

403

InvalidOperation.NotSupport

Instance on dedicated host not support modify charge type.

\-

403

QuotaExceed.ElasticQuota

No additional quota is available for the specified ECS instance type.

The maximum number of instances of the specified instance type in the region has been reached. Reduce the quantity of instances that you want to purchase or try another region or instance type. Alternatively, you can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type.

The maximum number of instances of the specified instance type in the region has been reached. Reduce the quantity of instances that you want to purchase or try another region or instance type. Alternatively, you can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.

The maximum number of vCPUs for all instance types has been reached. You can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type, or the number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.

The maximum number of instances of the specified instance type in the region has been reached, or the maximum number of vCPUs for all instance types has been reached. You can go to the ECS console or Quota Center to request a quota increase.

403

PeriodNotSupported.InstanceOnManagedPrivateSpace

The instance on ManagedPrivateSpace is not supported to modify chargeType.

\-

403

UnsupportedIspChargeType

%s

The billing type does not support the service provider (ISP) for this account.

404

InvalidInstanceId.NotFound

The specified instanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceChargeType?updateTime=2026-01-07#workbench-doc-change-demo)

2025-10-29

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceChargeType?updateTime=2025-10-29#workbench-doc-change-demo)

2024-09-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceChargeType?updateTime=2024-09-27#workbench-doc-change-demo)

2023-07-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceChargeType?updateTime=2023-07-21#workbench-doc-change-demo)
