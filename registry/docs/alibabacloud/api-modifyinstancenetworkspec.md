Modifies the network configurations of an Elastic Compute Service (ECS) instance, such as the public bandwidth, assignment or unassignment of a static public IP address (also known as system-assigned or auto-assigned public IP address), and billing method for network usage. You can call this operation to upgrade or downgrade the network configurations of ECS instances.

## Operation description

Take note of the following items:

-   If you upgrade the outbound public bandwidth (InternetMaxBandwidthOut) of a subscription (PrePaid) instance from 0 Mbit/s when you modify the network configurations of the instance, a static public IP address is automatically assigned to the instance.
-   If you upgrade the outbound public bandwidth (InternetMaxBandwidthOut) of a pay-as-you-go (PostPaid) instance from 0 Mbit/s when you modify the network configurations of the instance, no static public IP address is automatically assigned to the instance. In this case, to assign a static public IP address to the instance, you must set `AllocatePublicIp` to `true`.
-   You can upgrade the outbound public bandwidth (InternetMaxBandwidthOut) of an instance in the classic network from 0 Mbit/s only if the instance is in the Stopped state.

**Note** For the limits on the sum of maximum public bandwidths of ECS instances that use the pay-by-bandwidth billing method for network usage per region per Alibaba Cloud account, see the [Public bandwidth limits](/help/en/ecs/user-guide/limitations#BandwidthQuota) section of the "Limits" topic.

-   Billing:
    
    -   After the public bandwidth is upgraded, AutoPay is automatically set to true and the payment is automatically made. Make sure that your account balance is sufficient. Otherwise, your order becomes invalid and is canceled. If your account balance is insufficient, you can set AutoPay to false. In this case, when you call the ModifyInstanceNetworkSpec operation, an unpaid order is generated. Then, you can log on to the ECS console to pay for the order.
    -   After the public bandwidth is downgraded, the price difference is refunded to the payment account that you used. Vouchers or coupons that have been redeemed are not refundable.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceNetworkSpec)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceNetworkSpec)

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

ecs:ModifyInstanceNetworkSpec

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

-   ecs:AssociatePublicIpAddress

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

The ID of the instance for which you want to modify network configurations.

i-bp67acfmxazb4\*\*\*\*

InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values:

-   Valid values when the pay-by-traffic billing method for network usage is used: 0 to 100.
    
-   Valid values when the pay-by-bandwidth billing method for network usage is used:
    
    -   Valid values for subscription instances: 0 to 200.
    -   Valid values for pay-as-you-go instances: 0 to 100.

**Note** The maximum outbound bandwidth of a single instance is also limited by the **network baseline bandwidth (Gbit/s) and network burst bandwidth (Gbit/s)** of the instance type. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

10

InternetMaxBandwidthIn

integer

No

The maximum inbound bandwidth from the Internet. Unit: Mbit/s. Valid values:

-   If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
-   If the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.

10

ISP

string

No

**Note** This parameter is in invitational preview and is not publicly available.

null

NetworkChargeType

string

No

The billing method for network usage. Valid values:

-   PayByBandwidth
-   PayByTraffic

**Note** When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidth values are used as the upper limits of bandwidths instead of guaranteed values. In scenarios where demand outstrips resource supplies, these maximum bandwidths may be limited. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

PayByTraffic

AllocatePublicIp

boolean

No

Specifies whether to assign a public IP address. Valid values:

-   true
-   false

Default value: false.

false

StartTime

string

No

The start time of the temporary bandwidth upgrade. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddThh:mmZ format. The time must be in UTC and accurate to **minutes (mm)**.

2017-12-05T22:40Z

EndTime

string

No

The end time of the temporary bandwidth upgrade. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddThhZ format. The time must be in UTC and accurate to **hours** (hh).

**Note** The interval between the end time and start time of temporary bandwidth upgrade must be greater than or equal to 3 hours.

2017-12-06T22Z

AutoPay

boolean

No

Specifies whether to automatically complete the payment. Valid values:

-   true: After you modify the bandwidth configurations, the payment is automatically completed. Make sure that your account balance is sufficient before you set AutoPay to true. If your account balance is insufficient, your order cannot be paid in the ECS console and becomes invalid. You must cancel the order.
-   false: After you modify the bandwidth configurations, an order is generated but the payment is not automatically completed. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, you can log on to the [ECS console](https://ecs.console.alibabacloud.com) to pay for the order.

Default value: true.

true

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

OrderId

string

The order ID.

123457890

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "OrderId": 123457890,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInternetMaxBandwidthIn.ValueNotSupported

The specified InternetMaxBandwidthIn is beyond the permitted range.

The specified maximum inbound public bandwidth exceeds the maximum allowed value.

400

InvalidInternetMaxBandwidthOut.ValueNotSupported

The specified InternetMaxBandwidthOut is beyond the permitted range.

The specified maximum outbound public bandwidth exceeds the maximum allowed value.

400

OperationDenied

Specified instance is in VPC.

The instance resides in a VPC.

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidStartTime.ValueNotSupported

The specified StartTime is out of the permitted range.

The specified start time is invalid.

400

InvalidEndTime.ValueNotSupported

The specified EndTime is out of the permitted range.

The specified end time is invalid.

400

ChargeTypeViolation

The operation is not permitted due to billing method of the instance.

\-

400

InvalidStartTime.ValueNotSupported

%s

The specified parameter StartTime cannot be earlier than the current time.

400

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

400

InvalidEndTime.ValueNotSupported

%s

The specified EndTime is invalid.

400

InvalidInternetChargeType.ValueNotSupported

The specified InternetChargeType is invalid.

The specified InternetChargeType parameter is invalid.

400

DecreasedBandwidthNotAllowed

%s

The bandwidth downgrade operation is invalid.

400

BandwidthUpgradeDenied.EipBoundInstance

The specified VPC instance has bound EIP, temporary bandwidth upgrade is denied.

The instance is associated with an EIP and cannot have its bandwidth temporarily upgraded.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

Throttling

Request was denied due to request throttling, please try again after 5 minutes.

\-

400

InvalidInstanceStatus.NotStopped

The specified Instance status is not Stopped.

The specified instance is not in the Stopped state.

400

InvalidAction

Specified action is not valid.

The operation is invalid.

400

IpAllocationError

Allocate public ip failed.

A public IP address cannot be assigned.

400

InvalidParam.AllocatePublicIp

The specified param AllocatePublicIp is invalid.

The specified AllocatePublicIp parameter is invalid.

400

InstanceDowngrade.QuotaExceed

Quota of instance downgrade is exceed.

The maximum number of configuration downgrades allowed for the instance has been reached.

400

InvalidBandwidth.ValueNotSupported

Instance upgrade bandwidth of temporary not allow less then existed.

\-

400

InvalidInstanceStatus

The specified instance status does not support this action.

The instance is in a state that does not support the current operation.

400

InvalidInstance.UnPaidOrder

Unpaid order exists in your account, please complete or cancel the payment in the expense center.

Your account has an unpaid order. Pay for the order and try again.

400

OperationDenied

After downgrade, you cannot upgrade or downgrade your instances again in the remaining time of the current billing cycle.

After you downgrade the configurations of the instance, you cannot upgrade or downgrade the configurations again until the new billing cycle starts.

400

InvalidInternetChargeType.ValueNotSupported

%s

The specified InternetChargeType parameter is invalid.

400

LastOrderProcessing

The previous order is still processing, please try again later.

The order is being processed. Try again later.

400

OperationDenied

The current user does not support this operation.

Your account does not support this operation.

400

LastRequestProcessing

The previous request is still processing, please try again later.

\-

400

InvalidStartTime.BeyondLifeCycle

The specified start time exceeds the expiration time.

The specified start time StartTime be greater than the expiration time of the resource

400

InvalidEndTime.BeyondLifeCycle

The specified end time exceeds the expiration time.

The end time parameter (EndTime) is beyond the lifetime of the resource.

400

InvalidPayMethod.SyncPaymentNotSupport

Synchronous payment is not supported. Use another payment method.

Synchronous payment is not supported. Please select another payment method.

400

InvalidBandwidthOut.LessThanZero

The bandwidth must be larger than 0 when specifying isp.

\-

400

InvalidParameter.BandwidthBiggerThanBaseBandwidth

%s

\-

400

InvalidAction.WithActiveElasticUpgrade

The instance has active Elastic Upgrade.

The operation is not supported while the instance are being temporarily upgraded. The instance goes through a temporary configuration upgrade if the EndTime parameter is specified to call the ModifyPrepayInstanceSpec operation.

400

InvalidParameter.CloudboxNotSupported

%s

\-

400

InvalidParameter.Bandwidth

%s

The specified bandwidth value is invalid.

400

NoPermission.Price

The operation requires price permission. Please either apply for permission from your main account, or set the parameter AutoPay as true.

This operation requires price permission. Please apply for permission to your master account, or set the parameter AutoPay to true for automatic payment.

400

NoPermission.Refund

The operation requires refund permission. Please apply for permission from your main account.

This account does not have permission to operate refund, and the main account needs to authorize refund-related permissions.

400

InvalidParameter.DedicatedRegionNotSupported

The specified action is rejected because the specified ECS instance in the dedicated region does not support public IP.

Parameter error codes not supported in the dedicated region

400

InvalidOperation.InstanceStatusUnsupported

The specified instance status is not supported for this operation, expect status is Running or Stopped.

The status of the specified instance is not satisfied. The status of the instance should be Running or Stopped.

400

QuotaExceeded.InternetBandwidth

%s.

Under your current account, the public network bandwidth of the Pay-As-You-Go ECS instance charged by fixed bandwidth exceeds the total bandwidth quota limit.

400

UnsupportedIspNetworkChargeType

The network charge type is not supported when specifying ISP.

The network charge type is not supported when specifying ISP.

400

IncorrectInstanceStatus

Current instance status does not support this operation.

The instance is in a state that does not support the current operation.

400

TaskConflict

The operation is too frequent, please wait a moment and try again.

\-

403

IncorrectInstanceStatus

The current status of the instance does not support this operation.

The instance is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

OperationDenied

The operation is denied due to the instance is PrePaid.

Subscription instances do not support this operation.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidInstance.UnPaidOrder

The specified Instance has unpaid order.

The specified instance has a purchase order not paid for.

403

InvalidInstance.InstanceNotSupported

The special vpc instance with eip not need bandwidth.

The instance resides in a VPC and is associated with an EIP. You cannot specify a public bandwidth for the instance.

403

InvalidInstanceStatus

The current status of the instance does not support this operation.

The instance is in a state that does not support the current operation.

403

InvalidOperation.StarterPackage

StarterPackage not support modification.

\-

403

NAT\_PUBLIC\_IP\_BINDING\_FAILED

Binding nat public ip failed.

\-

403

InvalidInstance.EipNotSupport

The specified instance with eip is not supported, please unassociate eip first.

The operation is not supported while an EIP is associated with the instance. Disassociate the EIP first.

403

InvalidInstance.NatPortMapNotSupport

The special instance with nat port map not support operate, please remove nat port map first.

\-

403

OperationDenied.UnpaidOrder

The specified instance has unpaid order.

Your account has unpaid orders for the specified instance. You can log on to the ECS console to pay for the orders.

403

Mayi.InternalError

The request processing has failed due to some unknown error.

\-

403

InvalidNetworkType.ValueNotSupported

The specified parameter NetworkType is not valid.

The specified NetworkType parameter is invalid.

403

OperationDenied.ImageNotValid

The specified image is not authorized.

You are not authorized to use this image.

403

InvalidInstanceChargeType.ValueNotSupported

The specified parameter ChargeType is not valid.

\-

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InvalidIspType.ValueNotSupported

%s

\-

403

UnsupportedIspChargeType

%s

The billing type does not support the service provider (ISP) for this account.

403

UnsupportedIspClassicNetwork

%s

\-

403

InvalidIspBandwidthOut

%s

\-

403

UnsupportedChangeIsp

%s

\-

403

InvalidIspUID

%s

\-

403

UnsupportedIspRegion

%s

\-

403

BandIncreaseNotSupportIsp

%s

\-

403

SecurityRisk.3DVerification

We have detected a security risk with your default credit or debit card. Please proceed with verification via the link in your email.

\-

403

InvalidOperation.PublicIpAddressNoStock

The public IP address for the specified Region or ChargeType of the instance is out of stock. Please try another Region or ChargeType.

Under the conditions of the specified region or payment type, the public IP address inventory of the instance is insufficient. Please try another region or payment type.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

500

Image.OrderFailed

Create marketplace image order failed.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-14

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2025-03-14#workbench-doc-change-demo)

2025-03-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2025-03-13#workbench-doc-change-demo)

2024-12-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2024-12-02#workbench-doc-change-demo)

2024-09-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2024-09-27#workbench-doc-change-demo)

2024-09-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2024-09-23#workbench-doc-change-demo)

2024-01-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2024-01-30#workbench-doc-change-demo)

2024-01-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2024-01-08#workbench-doc-change-demo)

2023-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkSpec?updateTime=2023-10-10#workbench-doc-change-demo)
