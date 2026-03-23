Converts the static public IP address of an Elastic Compute Service (ECS) instance that resides in a virtual private cloud (VPC) into an elastic IP address (EIP). Static public IP addresses are the public IP addresses that are automatically assigned to ECS instances.

## Operation description

## [](#usage-notes)[](#)Usage notes

After a public IP address is converted into an EIP, the EIP is billed separately. Make sure that you fully understand the billing methods of EIPs. For more information, see [Billing overview](/help/en/eip/billing-overview).

When you call this operation, make sure that the ECS instance meets the following requirements:

-   The instance is in the **Stopped** (`Stopped`) or **Running** (`Running`) state.
-   The instance has no EIPs associated.
-   The instance has no configuration change tasks that have not taken effect.
-   The public bandwidth of the instance is not 0 Mbit/s.
-   If the instance is a subscription instance, the billing method for network usage of the instance must be `pay-by-traffic`. The public IP address of a subscription instance that uses the `pay-by-bandwidth` billing method for network usage cannot be converted into an EIP. This requirement does not apply to pay-as-you-go instances. For more information, see [Change the billing method for network usage](/help/en/ecs/change-the-billing-method-for-network-usage-1).
-   If the instance is a subscription instance that resides in a VPC, the instance does not expire within 24 hours.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ConvertNatPublicIpToEip)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ConvertNatPublicIpToEip)

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

ecs:ConvertNatPublicIpToEip

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

The ID of the instance whose public IP address you want to convert into an EIP.

i-bp171jr36ge2ulvk\*\*\*\*

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.CloudboxNotSupport

This operation is denied, because the specified ECS instance which is in the Cloudbox dose not support PublicIp or Eip.

\-

400

InvalidParameter.CloudboxNotSupported

%s

\-

400

OperationDenied.DedicatedRegionNotSupported

This operation is denied, because the specified ECS instance which is in the dedicated region dose not support PublicIp or Eip.

error of api not supported by the exclusive cloud

403

InvalidInstanceId.PlanedChange

%s

Your operation is invalid because a configuration change has been scheduled for the specified instance.

403

InvalidEndTime.OperateNotSupport

%s

The instance is in a state that does not support the current operation.

403

InvalidInstanceStatus.Released

%s

The operation is invalid. Check the state of the instance.

403

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

403

OperationDenied

%s

The operation is denied.

403

InvalidInstance.ZeroBandwidth

%s

\-

403

InvalidInternetChargeType.ValueNotSupported

%s

The specified InternetChargeType parameter is invalid.

403

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

403

MaxEIPQuotaExceeded

The number of EIP exceeds the limit per region.

The maximum number of EIPs in the current region has been reached.

403

Forbidden.InvalidPublicBandwidth

The specified instance public bandwidth is less than 1M.

The specified public bandwidth value of the instance is invalid.

403

InvalidInstance.OverduePayment

The special instance due to overdue payment,this operation is not supported.

Your account has overdue payments. Add funds to your account and try again.

403

EIPMaxBandwidthExceeded

The bandwidth of instance exceeds the limitation of EIP in this region.

\-

403

IncorrectInstanceStatus

The special instance status not support this operate!

\-

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

Forbidden.RiskControl

This operation is forbidden by Aliyun RiskControl system.

The operation is forbidden by the risk control system.

403

UnsupportedPublicIpWithIsp

%s

\-

404

InvalidInstance.IpAddressMissing

%s

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ConvertNatPublicIpToEip?updateTime=2026-01-28#workbench-doc-change-demo)

2023-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ConvertNatPublicIpToEip?updateTime=2023-10-10#workbench-doc-change-demo)
