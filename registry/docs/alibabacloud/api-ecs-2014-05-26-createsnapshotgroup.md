Creates a snapshot-consistent group for the disks of an Elastic Compute Service (ECS) instance. A snapshot-consistent group contains snapshots of one or more disks.

## Operation description

You can specify `InstanceId` to create a snapshot-consistent group for disks on a specific ECS instance. You can also specify `DiskId.N` to create a snapshot-consistent group for multiple disks on multiple ECS instances within the same zone.

**Note** You cannot specify both `DiskId.N` and `ExcludeDiskId.N` in the same request. If you specify `InstanceId`, you can use `DiskId.N` to specify only disks on the specified ECS instance and cannot use DiskId.N to specify disks across ECS instances.

Take note of the following items:

-   The disks for which you want to create a snapshot must be in the **In Use** (`In_use`) or **Unattached** (`Available`) state.
    
    -   If a disk is in the **In Use** (`In_use`) state, make sure that the ECS instance to which the disk is attached is in the **Running** (`Running`) or **Stopped** (`Stopped`) state.
    -   If a disk is in the **Unattached** (`Available`) state, make sure that the disk has been attached to ECS instances. Snapshots cannot be created for disks that have never been attached to an ECS instance.
-   Snapshot-consistent groups can be used to create snapshots only for Enterprise SSDs (ESSDs), ESSD AutoPL disks, and ESSD Entry disks.
    
-   A snapshot-consistent group can contain snapshots of up to 16 disks, including system disks and data disks, and cannot exceed 32 TiB in size.
    
-   Snapshots that you created are stored indefinitely until you delete the snapshots. We recommend that you delete unnecessary snapshots on a regular basis to prevent excess snapshot storage fees.
    
-   Snapshot-consistent groups cannot be created for disks for which multi-attach feature is enabled. If disks for which the multi-attach feature is enabled are attached to an ECS instance, you must specify the `ExcludeDiskId.N` parameter to exclude the disks.
    

For more information about the snapshot-consistent group feature, see [Create a snapshot-consistent group](/help/en/ecs/user-guide/create-a-snapshot-consistent-group).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateSnapshotGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateSnapshotGroup)

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

ecs:CreateSnapshotGroup

create

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#DiskId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

InstanceId

string

No

The instance ID.

i-j6ca469urv8ei629\*\*\*\*

InstantAccess

boolean

No

Specifies whether to enable the instant access feature. Valid values:

-   true
-   false

Default value: false.

**Note** This parameter is no longer used. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

false

InstantAccessRetentionDays

integer

No

The number of days for which the instant access feature is available. Unit: days. Valid values: 1 to 65535.

This parameter takes effect only when `InstantAccess` is set to true. The instant access feature is automatically disabled when the specified duration ends.

This parameter is left empty by default, which indicates that the instant access feature is automatically disabled when the instant access snapshots are released.

**Note** This parameter is no longer used. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

1

Name

string

No

The name of the snapshot-consistent group. The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (\_), hyphens (-), and colons (:). It must start with a letter and cannot start with `http://` or `https://`.

testName

Description

string

No

The description of the snapshot-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This is description.

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

StorageLocationArn

string

No

**Note** This parameter is unavailable for public use.

null

ExcludeDiskId

array

No

The IDs of the cloud disks for which you do not want to create snapshots. After you specify the IDs of cloud disks, the snapshot-consistent group that you create does not contain the snapshots of the specified cloud disks. Valid values of N: 1 to 16.

This parameter is empty by default, which indicates that snapshots are created for all disks of the instance.

**Note** This parameter cannot be set at the same time as the `DiskId.N`.

string

No

The IDs of the cloud disks for which you do not want to create snapshots. After you specify the IDs of cloud disks, the snapshot-consistent group that you create does not contain the snapshots of the specified cloud disks. Valid values of N: 1 to 16.

This parameter is empty by default, which indicates that snapshots are created for all disks of the instance.

**Note** This parameter cannot be set at the same time as the `DiskId.N`.

d-j6cf7l0ewidb78lq\*\*\*\*

DiskId

array

No

The IDs of the cloud disks for which you want to create a snapshot-consistent group. You can specify the IDs of cloud disks that are attached to multiple instances within the same zone. Valid values of N: 1 to 16. A snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.

Take note of the following:

-   You cannot specify both the DiskId.N and `ExcludeDiskId.N` parameters in the same request.
-   If you specify `InstanceId`, you can specify the IDs of cloud disks that are attached only to the specified instance. You cannot specify the IDs of cloud disks that are attached to multiple instances.

string

No

The IDs of the cloud disks for which you want to create a snapshot-consistent group. You can specify the IDs of cloud disks that are attached to multiple instances within the same zone. Valid values of N: 1 to 16. A snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.

Take note of the following:

-   You cannot specify both the DiskId.N and `ExcludeDiskId.N` parameters in the same request.
-   If you specify `InstanceId`, you can specify the IDs of cloud disks that are attached only to the specified instance. You cannot specify the IDs of cloud disks that are attached to multiple instances.

d-bp1bcpqxahucdrcn\*\*\*\*

Tag

array<object>

No

The list of tags.

object

No

Key

string

No

The key of tag N of the snapshot-consistent group. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N of the snapshot-consistent group. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.

TestValue

ResourceGroupId

string

No

The ID of the resource group to which the snapshot-consistent group belongs.

rg-bp67acfmxazb4p\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

SnapshotGroupId

string

The ID of the snapshot-consistent group.

ssg-j6ciyh3k52qp7ovm\*\*\*\*

RequestId

string

The request ID.

01ABBD93-1ABB-4D92-B496-1A3D20EC0697

## Examples

Sample success responses

`JSON`format

```
{
  "SnapshotGroupId": "ssg-j6ciyh3k52qp7ovm****",
  "RequestId": "01ABBD93-1ABB-4D92-B496-1A3D20EC0697"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDiskIds.NotInSameZone

The specified disks are not in the same availability zone.

\-

400

MissingParamter.InstanceId

The specified InstanceId should not be null.

\-

400

InvalidParam.ExcludeDiskIdsAndDiskIds.Conflict

The use of parameter 'ExcludeDiskIds' and 'DiskIds' at the same time is not supported.

\-

400

InvalidSnapshotName.Malformed

The specified SnapshotName is wrongly formed.

The format of the specified snapshot name is invalid.

400

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidRetentionDays.Malformed

The specified RetentionDays is not valid.

The specified RetentionDays parameter is invalid.

400

DiskCategory.OperationNotSupported

The special disk is encrypted, not support this operate.

\-

400

InvalidParameter.Name

The specified Name is invalid.

The specified Name parameter is invalid.

400

InvalidParameter.Description

The specified Description is invalid.

\-

400

DiskCategory.OperationNotSupported

The operation is not supported to the specified disk due to its disk category.

The specified disk category does not support this operation.

403

IncorrectDiskStatus.CreatingSnapshot

A previous snapshot creation is in process.

A previous snapshot creation task is in process. Please try again later.

403

InstanceLockedForSecurity

The disk attached instance is locked due to security.

The instance to which the disk is attached is locked for security reasons.

403

IncorrectDiskStatus.NeverAttached

The specified disk has never been attached to any instance.

The removable disk has never been attached to instances and its content remains unchanged.

403

QuotaExceed.Snapshot

The snapshot quota exceeds.

The maximum number of snapshots has been reached. Delete snapshots that are no longer needed and try again.

403

IncorrectDiskStatus.NeverUsed

The specified disk has never been used after creating.

The disk has never been used and its data remains unchanged.

403

CreateSnapshot.Failed

The process of creating snapshot is failed.

Failed to create the snapshot.

403

DiskInArrears

The specified operation is denied as your disk has expired.

The disk has expired due to an overdue payment.

403

DiskId.ValueNotSupported

The specified parameter diskid is not supported.

The specified EBS device category does not support the operation.

403

IncorrectDiskStatus

The current disk status does not support this operation.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidAccountStatus.SnapshotServiceUnavailable

Snapshot service has not been opened yet.

The operation is not supported while the snapshot service is not activated.

403

IncorrectVolumeStatus

The current volume status does not support this operation.

\-

403

IdempotentParameterMismatch

The specified clientToken is used.

The specified client token is already in use.

403

IncorrectDiskStatus.Invalid

The specified device status invalid, restart instance and try again.

\-

403

IncorrectDiskType.NotSupport

The specified device type is not supported.

The specified disk type does not support the operation.

403

IncorrectDiskStatus.Transferring

The specified device is transferring, you can retry after the process is finished.

The specified disk is being migrated. Wait until the migration is complete and try again.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK needs to be enabled.

The customer master key (CMK) is not enabled when KMSKeyId is specified for an encrypted disk. You can call the DescribeKey operation of KMS to query information about the specified CMK.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

IdempotentProcessing

The previous idempotent request(s) is still processing.

A previous idempotent request is being processed. Try again later.

403

InvalidSnapshotCategory.Malformed

The specified Category is not valid.

The specified Category parameter is invalid.

403

InvalidOperation.Unauthorized

The specified operation is unauthorized.

\-

403

InvalidRegion.NotSupportSnapshotInstantAccessRegion

The snapshot InstantAccess is not supported for this region.

\-

403

InvalidCategoryAndInstantAccess.Malformed

The snapshot Category and InstantAccess can't be used together.

\-

403

IncorrectDiskStatus.TooManyCreatingSnapshots

The specified disk has too many unfinished snapshots.

\-

403

InvalidRegion.NotSupport

The specified region does not support creating snapshot group.

\-

403

UserNotInTheWhiteList

The user is not in the white list of creating snapshot group.

\-

403

InvalidInstance.NoDisk

There is no disk mounted on the instance.

No disk is mounted on the instance.

403

NumberExceed.TooManyDisks

The number of all disks in the request exceeds.

The number of disks in the request exceeds the upper limit.

403

CapacityExceed.TooManyDisks

The capacity of all disks in the request exceeds.

\-

403

InvalidOperation.MultiAttachDisk

Multi attach disk does not support this operation.

Disks for which the multi-attach feature is enabled do not support the operation.

403

IncorrectDiskStatus.Invalid

The specified disk status invalid, restart instance and try again.

The state of the specified disk is invalid. Restart the instance and try again.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK needs to be added ECS tag.

\-

403

InvalidDisk.DiskCategoryInconsistent

If any specified disk is of a regional disk category, then all disks must also be of that regional disk category.

If any specified disk is of a regional disk category, then all disks must also be of that regional disk category.

403

QuotaExceed.ConcurrentSnapshotQuota

The number of snapshots being created for the disk %s has exceeded the concurrent quota (%s). Please wait for the previous snapshots to complete before trying again.

The number of snapshots being created for this disk has exceeded the concurrent quota. Please wait for the previous snapshots to complete before trying again.

403

InvalidDisk.ShareVolume

The specified diskId is invalid. The shared volume does not support creating a snapshot group.

The specified diskId is invalid. The shared volume does not support creating a snapshot group.

403

InvalidParameter.UnauthorizedStorageLocationArn

The operation has failed due to lack of permission for the specified "StorageLocationArn". Please use a resource with appropriate permission for the operation.

The current operation failed because the specified StorageLocationArn has insufficient permissions. Contact the administrator of the resource to obtain the operation permissions.

403

InvalidOperation.SnapshotStorageLocationUnsupported

Snapshots with storage location in CloudBox do not support the current operation.

The snapshot of the storage location in the CloudBox does not support the current operation.

404

InvalidDiskId.NotFound

The specified DiskId does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidDescription.Malformed

The specified description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidVolumeId.NotFound

The specified volume does not exist.

The specified Shared Block Storage device does not exist.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

InvalidKMSKeyId.NotFound

The KMS key used by the disk does not exist.

The KMS key used by the disk does not exist.

404

InvalidInstanceId.NotFound

The specified instance does not exist.

The specified instance does not exist. Check whether the instance ID is correct.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2026-01-07#workbench-doc-change-demo)

2025-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2025-10-30#workbench-doc-change-demo)

2025-04-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2025-04-29#workbench-doc-change-demo)

2024-12-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2024-12-10#workbench-doc-change-demo)

2024-12-02

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2024-12-02#workbench-doc-change-demo)

2024-11-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2024-11-04#workbench-doc-change-demo)

2024-10-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2024-10-22#workbench-doc-change-demo)

2024-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2024-05-08#workbench-doc-change-demo)

2023-08-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2023-08-25#workbench-doc-change-demo)

2023-08-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshotGroup?updateTime=2023-08-24#workbench-doc-change-demo)
