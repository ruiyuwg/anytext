Changes the instance type of a subscription Elastic Compute Service (ECS) instance. You can upgrade or downgrade the instance type. The new instance type takes effect for the entire lifecycle of the subscription ECS instance.

## Operation description

**Before you call this operation, make sure that you are familiar with the billing methods, [prices](https://www.alibabacloud.com/zh/pricing-calculator#/commodity/vm_intl) , and [rules for unsubscribing from resources](/help/en/user-center/refund-rules) of ECS.**

ModifyPrepayInstanceSpec is an asynchronous operation. After a request is sent, wait for 5 to 10 seconds for the instance type change to complete. Before you change the instance type of a subscription ECS instance, call the [DescribeResourcesModification](/help/en/ecs/api-describeresourcesmodification) operation to query the instance types to which you can change the instance.

**Considerations**

-   Before you change the instance type of an expired instance, you must renew the instance.
    
-   When you downgrade the instance type of a subscription ECS instance, take note of the following items:
    
    -   The instance must be in the **Stopped** (`Stopped`) state.
    -   The price difference is refunded to the payment account that you used. Redeemed vouchers are not refundable.
    -   The new instance type takes effect only after you [start the instance](/help/en/ecs/user-guide/start-an-instance).
-   When you upgrade the instance type of a subscription ECS instance, take note of the following items:
    
    -   The instance must be in the **Stopped** (`Stopped`) or **Running** (`Running`) state.
    -   The new instance type takes effect only after you [start the instance](/help/en/ecs/user-guide/start-an-instance) or [restart the instance](/help/en/ecs/user-guide/restart-instances).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyPrepayInstanceSpec)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyPrepayInstanceSpec)

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

ecs:ModifyPrepayInstanceSpec

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

The instance ID.

i-bp67acfmxazb4ph\*\*\*\*

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceType

string

Yes

The new instance type. For information about available instance types, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation.

ecs.g5.xlarge

OperatorType

string

No

The type of the change to the instance. Valid values:

**Note** This parameter is optional. The system can automatically determine whether the instance change is an upgrade or a downgrade. If you want to specify this parameter, refer to the following valid values of the parameter.

-   upgrade: upgrades the instance type. Make sure that the balance in your account is sufficient.
-   downgrade: downgrades the instance type. When the new instance type specified by the `InstanceType` parameter has lower specifications than the current instance type, set `OperatorType` to downgrade.

**Note** You can refer to the preceding usage notes on how to upgrade or downgrade the instance type.

upgrade

ClientToken

string

No

The client token that you want to use to ensure the idempotency of the request. You can use the client to generate the value, but make sure that the value is unique among different requests. This value allows only ASCII characters and is up to 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](/help/en/ecs/developer-reference/how-to-ensure-idempotence)

123e4567-e89b-12d3-a456-426655440000

AutoPay

boolean

No

Specifies whether to enable automatic payment when you upgrade the instance type. Valid values:

-   true: The payment is automatically completed.
-   false: An order is generated but no payment is made.

Default value: true.

**Note**

-   Make sure that your account balance is sufficient. Otherwise, your order becomes invalid and must be canceled.
    
-   If your account balance is insufficient, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can log on to the ECS console to pay for the order.
    
-   If you set `OperatorType` to `downgrade`, `AutoPay` is ignored.
    

true

MigrateAcrossZone

boolean

No

Specifies whether to allow cross-cluster instance type upgrade. Valid values:

-   true
-   false

Default value: false.

When you set `MigrateAcrossZone` to `true` and you upgrade the instance type of an instance based on the returned information, take note of the following items:

Instance that resides in the classic network:

-   For [retired instance types](/help/en/ecs/user-guide/retired-instance-types), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the private IP address, disk device names, and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\* such as xvda and xvdb, and ultra disks (cloud\_efficiency) and standard SSDs (cloud\_ssd) are identified as vd\* such as vda and vdb.
-   For [instance families available for purchase](/help/en/ecs/user-guide/overview-of-instance-families), when the instance type of an instance is changed, the private IP address of the instance changes.

Instance that resides in a virtual private cloud (VPC): For [retired instance types](/help/en/ecs/user-guide/retired-instance-types), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the disk device names and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\* such as xvda and xvdb, and ultra disks (cloud\_efficiency) and standard SSDs (cloud\_ssd) are identified as vd\* such as vda and vdb.

false

SystemDisk.Category

string

No

The new category of the system disk. Valid values:

-   cloud\_efficiency: utra disk
-   cloud\_ssd: standard SSD

**Note** This parameter takes effect on an instance only when you change from a [retired instance type](/help/en/ecs/user-guide/retired-instance-types) to an instance type in an [instance family available for purchase](/help/en/ecs/user-guide/overview-of-instance-families) and upgrade the instance from a non-I/O optimized instance type to an I/O optimized instance type.

cloud\_efficiency

RebootTime

string

No

The restart time of the instance. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2018-01-01T12:05Z

EndTime

string

No

The end time of the temporary change. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2018-01-01T12:05Z

RebootWhenFinished

boolean

No

Specifies whether to restart the instance immediately after the instance type is changed. Valid values:

-   true
-   false

Default value: false.

**Note** If the instance is in the **Stopped** state, the instance remains in the Stopped state and no operations are performed, regardless of whether `RebootWhenFinished` is set to true.

false

ModifyMode

string

No

**Note** This parameter is not publicly available.

Enumeration Value:

-   Online
-   Offline

null

Disk

array<object>

No

**Note** This parameter is not publicly available.

object

No

DiskId

string

No

**Note** This parameter is not publicly available.

null

Category

string

No

**Note** This parameter is not publicly available.

null

PerformanceLevel

string

No

**Note** This parameter is not publicly available.

null

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

The ID of the request.

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

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

InvalidBillingMethod.ValueNotSupported

The operation is not permitted due to an invalid billing method of the instance.

The operation is not supported due to the invalid instance billing method.

400

InvalidInstance.PurchaseNotFound

The specified instance has no purchase history.

The order record for the instance does not exist.

400

InvalidInstance.UnpaidOrder

The specified instance has unpaid order.

The specified instance has a purchase order not paid for.

400

InvalidInstanceType.NotSupported

The specified InstanceType is not Supported.

The specified InstanceType parameter is invalid.

400

OrderCreationFailed

Order creation failed, please check your params and try it again later.

\-

400

Throttling

You have made too many requests within a short time; your request is denied due to request throttling.

\-

400

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

400

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

400

InvalidRebootTime.MalFormed

The specified rebootTime is not valid.

The specified RebootTime parameter is invalid.

400

InvalidRebootTime.ValueNotSupported

The specified RebootTime is not valid.

The specified RebootTime is invalid.

400

IdempotenceParamNotMatch

Request uses a client token in a previous request but is not identical to that request.

This request and the previous request contain the same client token but different other parameters.

400

IdempotenceParamNotMatch

%s

The idempotent parameters do not match.

400

InvalidInstanceChargeType.ValueNotSupported

%s

The specified InstanceChargeType parameter is invalid.

400

InvalidStatus.NotStopped

Instance status must be stopped.

\-

400

InvalidAction

%s

The operation is invalid.

400

InstanceDowngrade.QuotaExceed

Quota of instance downgrade is exceed.

The maximum number of configuration downgrades allowed for the instance has been reached.

400

InvalidInstanceType.ValueNotSupported

%s

The operation is not supported by the specified instance type.

400

InvalidParameter

%s

The specified parameter is invalid.

400

OperationDenied

The current user does not support this operation.

Your account does not support this operation.

400

LastOrderProcessing

The previous order is still processing, please try again later.

The order is being processed. Try again later.

400

InvalidOperation.VpcHasEnabledAdvancedNetworkFeature

The specified vpc has enabled advanced network feature.

Advanced features are enabled for the specified VPC. You cannot create low-specification instances in the VPC.

400

InvalidAction.WithActiveElasticUpgrade

The instance has active Elastic Upgrade.

The operation is not supported while the instance are being temporarily upgraded. The instance goes through a temporary configuration upgrade if the EndTime parameter is specified to call the ModifyPrepayInstanceSpec operation.

400

InstanceTypeNotSupported.TooManyDisksAttached

%s

\-

400

QuotaExceed.DiskCapacity

The used capacity of disk type has exceeded the quota in the zone, %s.

The capacity of disks that belong to the specified disk category exceeds the quota limit for the zone.

400

MissingParameter.DiskCategory

The specified parameter Disk.Category can not be null when Disk.DiskId is specified.

\-

400

InvalidParameter.DiskCategory

The specified parameter Disk.Category is not valid.

\-

400

InvalidPerformanceLevel.Malformed

The specified parameter Disk.n.PerformanceLevel is not valid.

\-

400

InvalidSystemDiskCategory.NotMatchInstanceType

The system disk category does not match the instance type.

\-

400

QuotaExceed.RufundVcpu

The maximum number of refunded vcpu is exceeded: %s .

The maximum number of refund vCPUs is exceeded. For more information about the amount, see the return value of the %s placeholder in the error message.

400

NoPermission.Price

The operation requires price permission. Please either apply for permission from your main account, or set the parameter AutoPay as true.

This operation requires price permission. Please apply for permission to your master account, or set the parameter AutoPay to true for automatic payment.

400

NoPermission.Refund

The operation requires refund permission. Please apply for permission from your main account.

This account does not have permission to operate refund, and the main account needs to authorize refund-related permissions.

400

InvalidInstanceStatus

The current status of the instance does not support this operation.

The instance is in a state that does not support the current operation.

400

InvalidOperation.InstanceRenewWithDowngradeInPlan

The operation is denied due to the specified instance has renew with downgrade record in plan.

There are renewal downgrade orders that have not yet taken effect. This operation is not allowed before the order takes effect.

400

InvalidOperation.OnlineModificationUnsupported

Online modification of instance type is not supported for the specified instance due to its CPU topology.

\-

403

OperationDenied.NoStock

The specified instance is out of usage.

The resources of the specified instance type are insufficient.

403

InvalidUser.PassRoleForbidden

The RAM user does not have privilege to pass a role.

RAM users are not authorized to assign RAM roles.

403

ImageNotSupportInstanceType

The specified image does not support the specified InstanceType.

The specified image does not support the specified instance type.

403

InstanceType.Offline

%s

The operation is not supported while the instance type is retired or while resources of the instance type are insufficient.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InvalidParameter.InstanceId

%s

The specified InstanceId parameter is invalid.

403

OperationDenied

%s

The operation is denied.

403

ImageNotSupportInstanceType

The specified instanceType is not supported by instance with marketplace image.

The specified Alibaba Cloud Marketplace image does not support the instance type.

403

InvalidOperation.StarterPackage

StarterPackage not support modification.

\-

403

InvalidInstance.PreInstanceExpired

Instance business status is not Expired.

\-

403

InvalidInstance.EipNotSupport

The special instance with eip not support operate, please unassociate eip first.

The operation is not supported while an EIP is associated with the instance. Disassociate the EIP first.

403

OperationDenied.ImageNotValid

The specified image is not authorized.

You are not authorized to use this image.

403

OperationDenied.LocalDiskUnsupported

The configuration change is not allowed when the specified instance has local disks mounted.

Instance types cannot be changed for instances that have local disks attached.

403

OperationDenied.NoStock

The resource is out of stock in the specified zone. Please try other types, or choose other regions and zones.

The requested resources are unavailable in the specified zone. Try a different resource type or select a different region or zone.

403

InvalidOperation.EniCountExceeded

%s

\-

403

InvalidOperation.Ipv4CountExceeded

%s

The operation is valid because the maximum number of IPv4 addresses has been reached.

403

InvalidOperation.Ipv6CountExceeded

%s

The operation is valid because the maximum number of IPv6 addresses has been reached.

403

InvalidOperation.Ipv6NotSupport

%s

\-

403

InvalidOperation.Ipv4NotSupport

%s

\-

403

InvalidInstance.NotFoundSystemDisk

The specified instance has no system disk.

The specified instance does not have a system disk. Make sure that the instance has a system disk. You can call the DescribeInstances operation to query the details of the instance.

403

InvalidInstanceType.NotSupportDiskCategory

The instanceType of the specified instance does not support this disk category.

The instance type does not support the current disk category. Try another instance type. For information about the disk categories supported by instance types, see the instance family documentation.

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

InvalidResourceType.NotSupported

%s

The specified resource combination does not exist. Change to another zone or specification.

403

InvalidOperation.MaxEniQueueNumberExceeded

%s

\-

403

InvalidOperation.ExceedInstanceTypeQueueNumber

%s

The maximum number of queues for all ENIs on an instance has been exceeded. For more information, see the return value of the %s placeholder in the error message.

403

InvalidParameter.InvalidEniQueueNumber

%s

\-

403

HibernationConfigured.InstanceOperationForbidden

The operation is not permitted due to limit of the hibernation configured instance.

The operation cannot be performed due to the limitations of instances for which the instance hibernation feature is enabled.

403

InvalidOperation.MaxModifyOnlineNumberExceeded

The specified instance has reached the maximum number of modify online attempts and needs to be rebooted.

\-

403

InvalidOperation.RebootingRequired

The specified instance needs to be rebooted.

\-

403

InvalidOperation.OSTypeNotSupported

The specified OS type is not supported.

\-

403

OperationDenied.UnpaidOrder

The specified instance has unpaid order.

Your account has unpaid orders for the specified instance. You can log on to the ECS console to pay for the orders.

403

InvalidDisk.DetachedSystemDisk

The specified resource is/has a detached system disk %s , not support current operation.

\-

403

InvalidDataDiskCategory.ValueNotSupported

The specified Category of Data Disk is not valid.

The specified data disk type is not supported.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

BillingMethodNotFound

The account has not chosen any billing method.

No billing method is selected for the Alibaba Cloud account.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

ImageOrderFailed

Create marketplace image order failed.

Failed to create the Alibaba Cloud Marketplace order. Submit a ticket.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2025-12-03#workbench-doc-change-demo)

2024-10-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2024-10-14#workbench-doc-change-demo)

2023-12-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-12-14#workbench-doc-change-demo)

2023-10-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-10-18#workbench-doc-change-demo)

2023-07-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-07-28#workbench-doc-change-demo)

2023-07-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-07-21#workbench-doc-change-demo)

2023-06-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-06-28#workbench-doc-change-demo)

2023-06-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-06-28#workbench-doc-change-demo)

2023-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-05-08#workbench-doc-change-demo)

2023-04-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-04-13#workbench-doc-change-demo)

2023-04-07

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrepayInstanceSpec?updateTime=2023-04-07#workbench-doc-change-demo)
