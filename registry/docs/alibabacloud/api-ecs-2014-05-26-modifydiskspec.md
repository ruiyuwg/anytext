Changes the disk category of a cloud disk or the performance level of an Enterprise SSD (ESSD). You cannot change the disk categories of Regional ESSDs, basic disks, elastic ephemeral disks, and local disks.

## Operation description

To minimize impacts on your business, change the disk categories or performance levels of cloud disks during off-peak hours.

Take note of the following items:

-   To change the performance level of an ESSD, take note of the following items:
    
    -   If the ESSD is a subscription ESSD, you can only upgrade its performance level.
    -   If the ESSD is a pay-as-you-go ESSD, you can upgrade or downgrade its performance level. However, you cannot downgrade the performance level to PL0.
    -   The ESSD must be in the **In Use** (In\_Use) or **Unattached** (Available) state.
    -   If the ESSD is attached to an Elastic Compute Service (ECS) instance, the instance must be in the **Running** (Running) or **Stopped** (Stopped) state. The instance cannot be in the Expired state or stopped due to an overdue payment.
    -   If you cannot upgrade the performance level of an ESSD due to the capacity limit, extend the ESSD by calling the [ResizeDisk](/help/en/ecs/api-resizedisk) operation and then try again. For more information, see [ESSDs](/help/en/ecs/user-guide/essds) .
-   For information about the limits on changing the disk category of a cloud disk, see [Change the category of a disk](/help/en/ecs/user-guide/change-the-category-of-a-disk#section_s4a_to0_1jx).
    
-   For the disk categories to which cloud disks of each disk category can be changed, see [Change the category of a disk](/help/en/ecs/user-guide/change-the-category-of-a-disk#eb8bb54032nho).
    

After the disk category of a cloud disk is changed, the billing of the cloud disk has the following changes:

-   If the cloud disk is a pay-as-you-go disk, you are charged for the disk based on the new disk category.
-   If the cloud disk is a subscription disk, you may be charged additionally based on the price difference between the old and new disk categories and the remaining days of the billing cycle, starting from 00:00 the next day until the end of the subscription period.

For information about the billing of cloud disks, see [Block storage devices](/help/en/ecs/block-storage-devices).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskSpec)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskSpec)

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

ecs:ModifyDiskSpec

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DiskId

string

Yes

The disk ID.

d-bp131n0q38u3a4zi\*\*\*\*

PerformanceLevel

string

No

The new performance level of the ESSD. Valid values:

-   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: An ESSD delivers up to 1,000,000 random read/write IOPS.

Default value: PL1.

PL2

DiskCategory

string

No

The new disk category of the cloud disk. Valid values:

-   cloud\_essd: ESSD
-   cloud\_auto: ESSD AutoPL disk
-   cloud\_ssd: standard SSD
-   cloud\_efficiency: utra disk

This parameter is empty by default, which indicates that the disk category is not changed.

**Note**

-   The preceding values are listed in descending order of disk performance. Subscription disks cannot be downgraded.

cloud\_essd

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

ProvisionedIops

long

No

The provisioned read/write IOPS of the ESSD AutoPL disk.

Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.

Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

**Note** This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks) and [Modify the performance configurations of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk).

50000

PerformanceControlOptions

object

No

The disk performance specifications.

IOPS

integer

No

The new IOPS rate of the cloud disk. You can modify the IOPS rate of only cloud disks in dedicated block storage clusters.

Valid values: 900 to maximum IOPS per disk (with an increment of 100).

For more information, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance).

2000

Throughput

integer

No

The new throughput of the cloud disk. You can change the throughput of only cloud disks in dedicated block storage clusters. Unit: MB/s.

Valid values: 60 to maximum throughput per disk.

For more information, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance).

200

Recover

string

No

Specifies whether to reset the IOPS rate and throughput of the cloud disk. This parameter takes effect only when the cloud disk belongs to a dedicated block storage cluster.

After you specify this parameter, PerformanceControlOptions.IOPS and PerformanceControlOptions.Throughput do not take effect.

Set the value to All, which indicates that the IOPS rate and throughput of the cloud disk are reset to the initial values.

All

DestinationZoneId

string

No

**Note** This parameter is in invitational preview and is not publicly available.

cn-hangzhou-g

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

TaskId

string

The ID of the disk category change task.

**Note** If you only modify the performance level of an ESSD, this parameter is not returned.

t-bp67acfmxazb4p\*\*\*\*

OrderId

string

The order ID.

**Note** This parameter is returned only when the category of a subscription disk or the performance level of a subscription ESSD is modified.

20413515388\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TaskId": "t-bp67acfmxazb4p****",
  "OrderId": "20413515388****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidPerformanceLevel.Malformed

The specified parameter PerformanceLevel is not valid.

The specified PerformanceLevel parameter is invalid.

400

InvalidDiskCategory.ValueNotSupported

The specified parameter "DiskCategory" is not valid.

The specified cloud disk type DiskCategory is invalid.

400

InvalidPerformanceLevelParam.Mismatch

The specified parameter PerformanceLevel should be null when DiskCategory is not cloud\_essd.

\-

400

OperationDenied.DiskInDedicatedBlockStorageCluster

The disk in dedicated block storage cluster is not allowed to do this operation.

\-

400

IncorrectDiskStatus.ReplicationStatusNotFound

Disk replication status not found.

\-

400

IncorrectDiskStatus.InReplication

Disk already in replication.

\-

400

ProvisionedIopsForDiskCategoryUnsupported

The specified disk category does not support provisioned iops.

\-

400

InvalidProvisionedIops.LimitExceed

The provisioned iops exceeds the limit.

The filled ProvisionedIops parameter exceeds the limit.

400

QuotaExceed.DiskCapacity

The used capacity of disk type has exceeded the quota in the zone, %s.

The capacity of disks that belong to the specified disk category exceeds the quota limit for the zone.

400

MalformedParameter.PerformanceControlOptions

Parameter invalid, %s.

\-

400

InvalidPerformanceControlOptions.ModifyOperationUnsupported

The specified performance control options are conflicts with disk category or performance level or ProvisionIOPS.

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

InvalidOperation.InstanceRenewWithDowngradeInPlan

The operation is denied due to the specified instance has renew with downgrade record in plan.

There are renewal downgrade orders that have not yet taken effect. This operation is not allowed before the order takes effect.

400

InvalidOperation.InstanceStatusUnsupported

The specified instance status is not supported for this operation, expect status is Running or Stopped.

The status of the specified instance is not satisfied. The status of the instance should be Running or Stopped.

400

MissingParameter.DestinationZoneId

The parameter DestinationZoneId must be specified when modifying the disk specification from a regional disk to a zone disk.

The parameter DestinationZoneId must be specified when modifying the disk specification from a regional disk to a zone disk.

400

InvalidDestinationZoneId.Mismatch

The specified DestinationZoneId of the regional disk with 'In-use' status should remain consistent with the ZoneId of instance.

The specified DestinationZoneId of the regional disk with 'In-use' status should remain consistent with the ZoneId of instance.

400

InvalidOperation.MultiAttachRegionalDiskUnsupported

The multi-attach regional disk with 'In-use' status attached to more than one instance is not allowed to modify disk spec.

The multi-attach regional disk with 'In-use' status attached to more than one instance is not allowed to modify disk spec.

400

InvalidDestinationZoneId.DiskCategoryUnsupported

The specified disk category does not allow the DestinationZoneId parameter for this operation.

\-

403

DiskInArrears

The specified operation is denied as your disk owing fee.

Your account has overdue payments for the specified disk.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

IncorrectDiskStatus

The current disk status does not support this operation.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

DiskCreatingSnapshot

The operation is denied due to a snapshot of the specified disk is not completed yet.

A snapshot is being created for the specified disk.

403

OperationDenied

The type of the disk does not support the operation.

The disk category does not support the specified operation.

403

InvalidPerformanceLevel.TooLow

Specified new performance level is lower than the original performance level.

\-

403

OperationDenied.PerformanceLevelNotMatch

The specified PerformanceLevel and disk size do not match.

The specified performance level and disk size do not match.

403

UserNotInTheWhiteList

The user is not in modify disk category white list.

\-

403

InvalidRegion.NotSupport

The specified region does not support modify disk category.

\-

403

InvalidDiskCategory.ValueNotSupported

The current disk category of the resource does not support this operation.

The disk type on the specified resource does not support this operation.

403

Downgrade.NotSupported

Downgrade operation for prepay resource is not supported.

\-

403

InvalidInstanceType.NotSupportDiskCategory

The instanceType of the specified instance does not support this disk category.

The instance type does not support the current disk category. Try another instance type. For information about the disk categories supported by instance types, see the instance family documentation.

403

ModifyingDiskCategoryLimitExceed

The amount of modifying disk category exceeds the limit.

\-

403

DiskInCoolingPeriod

There is a cooling period after the disk is successfully modified.

\-

403

DiskHasFlashSnapshot

The specified disk with flash snapshots do not support modify disk category.

\-

403

NoChangeInDiskCategoryAndPerformanceLevel

There is no change between the parameters transmitted and the current.

\-

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

403

InvalidOperation.MultiAttachDisk

Multi attach disk does not support this operation.

Disks for which the multi-attach feature is enabled do not support the operation.

403

OperationDenied.DiskExpansionUnfinished

The instance has not been restarted after a previous disk expansion.

\-

403

InvalidDiskCategory.NotSupported

The specified disk category is not supported.

The specified disk category does not support this operation.

403

InvalidPerformanceParameter.DiskNotInDedicatedStorageCluster

The specified disk not in dedicated storage cluster, can not modify performance control options.

\-

403

InvalidStatus.DiskUnderPerformanceControl

The specified disk is under performance control, any modifications to the category or performance level of the specified disk are unsupported..

\-

403

InvalidStatus.DiskNotReady

This specified disk is not ready, status needs to be either In\_use or Available.

\-

403

InvalidOperation.DiskInReplicaPairsUnsupported

The disk in replication pairs does not support this operation.

The disk in replication pairs does not support this operation.

403

InvalidDisk.DetachedSystemDisk

The specified resource is/has a detached system disk %s , not support current operation.

\-

403

InvalidDiskCategory.InstanceTypeUnsupported

The current instance type does not support the specified disk category. Please check the list of disk category supported by the instance type and select an appropriate disk category for configuration.

The current instance type does not support the specified disk class. Check the list of disk types supported by the instance type and select the appropriate disk category to configure.

403

InvalidOperation.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The master key must be enabled.

403

InvalidOperation.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The master key needs to authorize the ECS service to add tags.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

404

InvalidDiskCategory.ValueUnauthorized

The specified DiskCategory is not authorized.

The disk type is unauthorized.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-12-25#workbench-doc-change-demo)

2025-05-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-05-22#workbench-doc-change-demo)

2025-05-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-05-15#workbench-doc-change-demo)

2025-04-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-04-21#workbench-doc-change-demo)

2025-04-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-04-08#workbench-doc-change-demo)

2025-03-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-03-11#workbench-doc-change-demo)

2025-01-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-01-17#workbench-doc-change-demo)

2025-01-06

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2025-01-06#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2024-12-17#workbench-doc-change-demo)

2024-08-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2024-08-23#workbench-doc-change-demo)

2024-07-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2024-07-31#workbench-doc-change-demo)

2024-01-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2024-01-29#workbench-doc-change-demo)

2023-10-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2023-10-18#workbench-doc-change-demo)

2023-05-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2023-05-16#workbench-doc-change-demo)

2023-04-17

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskSpec?updateTime=2023-04-17#workbench-doc-change-demo)
