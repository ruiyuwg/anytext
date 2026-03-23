Changes the billing method of dedicated hosts.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostsChargeType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDedicatedHostsChargeType)

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

ecs:ModifyDedicatedHostsChargeType

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

DedicatedHostIds

string

Yes

The IDs of the dedicated hosts. The value can be a JSON array that consists of up to 20 dedicated host IDs. Separate the IDs with commas (,).

\["dh-bp181e5064b5sotr\*\*\*\*","dh-bp18064b5sotrr9c\*\*\*\*"\]

RegionId

string

Yes

The region ID of the dedicated hosts. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Period

integer

No

The renewal duration of the subscription dedicated hosts. Valid values:

-   If you set `PeriodUnit` to Week, valid values of `Period` are 1, 2, 3, and 4.
-   If you set `PeriodUnit` to Month, valid values of `Period` are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.

1

PeriodUnit

string

No

The unit of the renewal duration specified by `Period`. Valid values:

-   Week
-   Month

Default value: Month.

Month

DryRun

boolean

No

Specifies whether to perform only a dry run. Valid value:

-   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Indicates whether the nfs volume is set to the read-only mode. Default value: false.

false

AutoPay

boolean

No

Specifies whether to automatically complete the payment. Valid value:

-   true: The payment is automatically completed. Ensure that your account balance is sufficient. Otherwise, your order becomes invalid and must be canceled.
-   false: An order is generated but no payment is made.

Default value: true.

**Note** If you do not have sufficient balance in your account, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can pay for the order.

false

DedicatedHostChargeType

string

No

The new billing method for the dedicated host. Valid value:

-   PrePaid: changes the billing method from pay-as-you-go to subscription.
-   PostPaid: changes the billing method from subscription to pay-as-you-go.

Default value: PrePaid.

PrePaid

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

e4567-e89b-12d3-a456-426655440000

DetailFee

boolean

No

Specifies whether to return the billing details of the order when the billing method is changed from subscription to pay-as-you-go.

Indicates whether the nfs volume is set to the read-only mode. Default value: false.

false

## Response parameters

Parameter

Type

Description

Example

object

OrderId

string

The ID of the order. This is returned only when the payment method is changed to subscription.

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

The IDs of the dedicated hosts.

dh-bp181e5064b5sotrr\*\*\*\*

Currency

string

The unit of currency for the bill.

Alibaba Cloud China site (aliyun.com): CNY

Alibaba Cloud International site (alibabacloud.com): USD

CNY

Fee

string

The charged amount.

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
        "InstanceId": "dh-bp181e5064b5sotrr****",
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

InvalidSystemDiskCategory.ValueNotSupported

%s

The specified system disk category is invalid.

400

InvalidAccountStatus.PayAmountLimitExceeded

Your account is being restricted, due to no default payment method is set or you has not being authorized.

\-

400

QuotaExceed.AfterpayInstance

The maximum number of Pay-As-You-Go instances is exceeded.

\-

400

QuotaExceed.RufundVcpu

The maximum number of refunded vcpu is exceeded: %s .

The maximum number of refund vCPUs is exceeded. For more information about the amount, see the return value of the %s placeholder in the error message.

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

404

InvalidInstanceId.NotFound

The specified instanceId does not exist.

The specified instance does not exist.

404

InvalidDedicatedHostId.NotFound

The specified Dedicated Host does not exist.

The specified dedicated host does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDedicatedHostsChargeType?updateTime=2025-11-24#workbench-doc-change-demo)

2023-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDedicatedHostsChargeType?updateTime=2023-11-24#workbench-doc-change-demo)
