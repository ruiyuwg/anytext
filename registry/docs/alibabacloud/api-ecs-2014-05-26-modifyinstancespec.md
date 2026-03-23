Changes the instance type or public bandwidth of a pay-as-you-go Elastic Compute Service (ECS) instance.

## Operation description

**Before you call this operation, familiarize yourself with the billing and [pricing](https://www.alibabacloud.com/zh/pricing-calculator#/commodity/vm_intl) of ECS resources.**

Before you [change the instance type of a pay-as-you-go instance](/help/en/ecs/user-guide/change-the-instance-type-of-a-pay-as-you-go-instance), call the [DescribeResourcesModification](/help/en/ecs/api-describeresourcesmodification) operation to query compatible instance types.

**Considerations**

-   Make sure that you have no overdue payments in your account.
-   You can change only the instance type or only the public bandwidth of an ECS instance at a time. The instance type and the public bandwidth of an ECS instance cannot be changed together.
-   You can change the public bandwidth of an ECS instance only when the instance is in the **Running** (`Running`) or **Stopped** (`Stopped`) state. The change immediately takes effect.
-   You can change the instance type of an ECS instance only when the instance is in the **Stopped** (`Stopped`) state. You must [start the instance](/help/en/ecs/user-guide/start-an-instance) for the change to take effect.

**Note** A limit is imposed on the sum of public bandwidths of all ECS instances that use the pay-by-bandwidth billing method for network usage per region in an Alibaba Cloud account. For more information, see the [Public bandwidth limits](/help/en/ecs/user-guide/limitations#BandwidthQuota) section of the "Limits and quotas" topic.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceSpec)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceSpec)

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

ecs:ModifyInstanceSpec

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

The ID of the instance.

i-bp67acfmxazb4p\*\*\*\*

InstanceType

string

No

The new instance type. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) or call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the most recent instance type list.

ecs.g6.large

InternetMaxBandwidthOut

integer

No

The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.

**Note** When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

10

InternetMaxBandwidthIn

integer

No

The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:

-   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid value of this parameter ranges from 1 to 10 and the default value is 10.
-   When the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.

**Note** When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

10

Temporary.StartTime

string

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

Temporary.EndTime

string

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

Temporary.InternetMaxBandwidthOut

integer

No

**Note** This parameter is in invitational preview and is not publicly available.

0

Async

boolean

No

Specifies whether to submit an asynchronous request. Valid values:

-   true
-   false

Default value: false.

false

AllowMigrateAcrossZone

boolean

No

Specifies whether to allow cross-cluster instance type upgrade. Valid values:

-   true
-   false

Default value: false.

When you set `AllowMigrateAcrossZone` to true and upgrade the instance based on the returned information, take note of the following items:

Instance that resides in the classic network:

-   For [retired instance types](/help/en/ecs/user-guide/retired-instance-types), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the private IP address, disk device names, and software authorization codes of the instance change. For a Linux instance, basic disks (`cloud`) are identified as xvd\* such as **xvda** and **xvdb**, and ultra disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as vd\* such as **vda** and **vdb**.
-   For [instance families available for purchase](/help/en/ecs/user-guide/overview-of-instance-families), when the instance type of an instance is changed, the private IP address of the instance changes.

Instance that resides in a virtual private cloud (VPC): For [retired instance types](/help/en/ecs/user-guide/retired-instance-types), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the disk device names and software authorization codes of the instance change. For a Linux instance, basic disks (`cloud`) are identified as xvd\* such as **xvda** and **xvdb**, and ultra disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as vd\* such as **vda** and **vdb**.

false

SystemDisk.Category

string

No

The new category of the system disk. Valid values:

-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD

**Note** This parameter takes effect only when you upgrade a non-I/O optimized instance of [a retired instance type](/help/en/ecs/user-guide/retired-instance-types) to an I/O optimized instance of [an instance type available for purchase](/help/en/ecs/user-guide/overview-of-instance-families).

cloud\_ssd

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

0c593ea1-3bea-11e9-b96b-88e9fe637760

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

**Note** This parameter is in invitational preview and is not publicly available.

object

No

**Note** This parameter is in invitational preview and is not publicly available.

DiskId

string

No

**Note** This parameter is in invitational preview and is not publicly available.

null

Category

string

No

**Note** This parameter is in invitational preview and is not publicly available.

null

PerformanceLevel

string

No

**Note** This parameter is in invitational preview and is not publicly available.

null

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and unavailable ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false (default): performs a dry run and performs the actual request.

false

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

InvalidInternetChargeType.ValueNotSupported

The specified InternetChargeType is not valid.

The specified InternetChargeType parameter is invalid.

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

InvalidParameter

The specified parameter "InternetMaxBandwidthOut" is not valid.

\-

400

InvalidParameter.Mismatch

Too many parameters in one request.

The number of parameters contained in the request exceeds the upper limit.

400

BandwidthUpgradeDenied.EipBoundInstance

The specified VPC instance has bound EIP, temporary bandwidth upgrade is denied.

The instance is associated with an EIP and cannot have its bandwidth temporarily upgraded.

400

InvalidTemporary.StartTime

The specifed Temporary.StartTime is not valid.

The specified start time of the temporary upgrade period is invalid.

400

InvalidTemporary.EndTime

The specifed Temporary.EndTime is not valid.

The specified end time of the temporary upgrade period is invalid.

400

Downgrade.NotSupported

Downgrade operation is not supported.

Configuration downgrades are not supported.

400

DependencyViolation.InstanceType

The current InstanceType cannot be changed to the specified InstanceType.

\-

400

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

400

InvalidParameter.Bandwidth

The specified parameter Bandwidth is not valid.

The specified bandwidth value is invalid.

400

InvalidParameter.Conflict

The specified image does not support the specified instance type.

The specified image cannot be used for instances of the specified instance type.

400

InvalidParameter.AllowMigrateAcrossZone

The specified parameter CanMigrateAcrossZone is not valid.

The specified AllowMigrateAcrossZone parameter is invalid.

400

InvalidParam.SystemDiskCategory

The specified param SystemDisk.Category is not valid.

The specified system disk category is invalid.

400

Throttling

Request was denied due to request throttling, please try again after 5 minutes.

\-

400

InvalidInstanceStatus.NotStopped

The specified Instance status is not stopped.

The specified instance is not in the Stopped state.

400

InvalidAction

Specified action is not valid.

The operation is invalid.

400

IdempotenceParamNotMatch

There is a idempotence signature mismatch between this and last request.

This request and the previous request contain the same client token but different other parameters.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

Price.PricePlanResultNotFound

The internetMaxBandwidthIn or internetMaxBandwidthOut provided is invalid.

The specified InternetMaxBandwidthIn or InternetMaxBandwidthOut parameter is invalid.

400

InvalidAction.NotSupport

The ecs on dedicatedHost not support modify instanceType.

Instance types cannot be changed for instances hosted on dedicated hosts.

400

InvalidMarketImageStatus.NotSupported

The status of specified market image does not support this operation.

The Alibaba Cloud Marketplace image is in a state that does not support the current operation.

400

InvalidOperation.VpcHasEnabledAdvancedNetworkFeature

The specified vpc has enabled advanced network feature.

Advanced features are enabled for the specified VPC. You cannot create low-specification instances in the VPC.

400

Invalid.PrivatePoolOptions.MatchCriteria

Target mode does not support this operation.

The operation is not supported while the PrivatePoolOptions.MatchCriteria parameter is set to Target.

400

InstanceTypeNotSupported.TooManyDisksAttached

%s

\-

400

InvalidDiskCategory.NotSupported

The upgrade operation of instance does not support this category of disk.

\-

400

InvalidParameter.CloudboxNotSupported

%s

\-

400

QuotaExceed.DiskCapacity

The used capacity of disk type has exceeded the quota in the zone, %s.

The capacity of disks that belong to the specified disk category exceeds the quota limit for the zone.

400

InvalidParam.Async

The specified parameter async is not valid.

\-

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

NoPermission.Price

The operation requires price permission. Please either apply for permission from your main account, or set the parameter AutoPay as true.

This operation requires price permission. Please apply for permission to your master account, or set the parameter AutoPay to true for automatic payment.

400

InvalidParameter.DedicatedRegionNotSupported

The specified action is rejected because the specified ECS instance in the dedicated region does not support public IP.

Parameter error codes not supported in the dedicated region

400

InvalidOperation.OnlineModificationUnsupported

Online modification of instance type is not supported for the specified instance due to its CPU topology.

\-

400

QuotaExceeded.InternetBandwidth

%s.

Under your current account, the public network bandwidth of the Pay-As-You-Go ECS instance charged by fixed bandwidth exceeds the total bandwidth quota limit.

400

InvalidOperation.InstanceTypeNotSupportRss

The ECS instance type does not support Rss.

The ECS instance type does not support Rss.

403

CategoryViolation

The specified instance does not support this operation because of its disk category.

The configurations of instances that have local disks attached cannot be upgraded or downgraded.

403

InvalidStatus.ValueNotSupported

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

ChargeTypeViolation

The operation is not permitted due to charge type of the instance.

The operation is not supported while the instance is using the current billing method.

403

OperationDenied

The specified instance is out of usage.

The resources of the specified instance type are insufficient.

403

LastTokenProcessing

The last token request is processing.

A token request is being processed. Try again later.

403

InvalidInstance.UnpaidOrder

The specified instance has unpaid order.

The specified instance has a purchase order not paid for.

403

InstanceSpecModification.NotEffective

The specified instance has been reserved for making a spec modification and not taken effective in the current contract period.

The specified instance is retained due to the instance type change. The instance type change cannot take effect during the current contract period.

403

InvalidInstanceType.ValueNotSupported

The specified zone does not offer the specified instancetype.

The specified instance type is unavailable in the specified region.

403

ImageNotSupportInstanceType

The specified image do not support the InstanceType instance.

The specified image does not support the instance type.

403

InstanceType.Offline

The specified InstanceType has been offline.

The specified InstanceType has been offline.

403

InvalidParameter.NotMatch

%s

A specified parameter is invalid. Check whether parameter conflicts exist.

403

InvalidInstance.EipNotSupport

The specified instance with eip is not supported, please unassociate eip first.

The operation is not supported while an EIP is associated with the instance. Disassociate the EIP first.

403

InvalidInstance.NatPortMapNotSupport

The special instance with nat port map not support operate, please remove nat port map first.

\-

403

InvalidOperation.StarterPackage

StarterPackage not support modification.

\-

403

OperationDenied.NoStock

The resource is out of usage.

The instance is not in the Running state. Start the instance or check whether the specified operation is valid.

403

OperationDenied.UnpaidOrder

The specified instance has unpaid order.

Your account has unpaid orders for the specified instance. You can log on to the ECS console to pay for the orders.

403

OperationDenied

%s

The operation is denied.

403

InvalidOperation.EipNotSupport

The special instance with eip not support operate, please unassociate eip first.

\-

403

InvalidParameter.InternetMaxBandwidthOut

The specified parameter InternetMaxBandwidthOut is invalid.

\-

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

InvalidOperation.InstanceWithEipNotSupport

The special instance with eip not support operate, please unassociate eip first.

The operation is not supported while an EIP is associated with the instance. Disassociate the EIP first.

403

SecurityRisk.3DVerification

We have detected a security risk with your default credit or debit card. Please proceed with verification via the link in your email.

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

InvalidOperation.NotAllowed

The specified vpc %s has enabled senior network feature.

\-

403

InvalidOperation.InstanceTypeNotSupportEniTrunking

%s

\-

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

InvalidOperation.InstanceTypeNotSupportHighPerformanceTrafficMode

%s

The instance type of the specified instance does not support the NIC of the RDMA communication mode.

403

InvalidOperation.EniQueuePairNumberOverflow

%s

\-

403

InvalidOperation.HighPerformanceEniPerInstanceLimitExceeded

%s

\-

403

InvalidOperation.MaxEniQueuePairNumberExceed

%s

\-

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

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter SystemDisk.Category is not valid.

The specified SystemDisk.Category value is not supported.

403

InvalidDataDiskCategory.ValueNotSupported

The specified Category of Data Disk is not valid.

The specified data disk type is not supported.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

MissingTemporary.StartTime

Temporary.StartTime is not specified.

The start time of the temporary upgrade period must be specified.

404

MissingTemporary.EndTime

Temporary.EndTime is not specified.

The end time of the temporary upgrade period must be specified.

404

InvalidInstanceChargeType.NotFound

The InstanceChargeType does not exist in our records.

The specified instance billing method does not exist.

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

2025-12-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2025-12-03#workbench-doc-change-demo)

2025-01-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2025-01-09#workbench-doc-change-demo)

2024-09-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2024-09-27#workbench-doc-change-demo)

2024-09-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2024-09-12#workbench-doc-change-demo)

2024-02-01

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2024-02-01#workbench-doc-change-demo)

2023-12-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2023-12-14#workbench-doc-change-demo)

2023-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2023-10-10#workbench-doc-change-demo)

2023-08-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2023-08-30#workbench-doc-change-demo)

2023-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2023-05-08#workbench-doc-change-demo)

2023-04-07

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceSpec?updateTime=2023-04-07#workbench-doc-change-demo)
