Creates a snapshot for a cloud disk.

## Operation description

The local snapshot feature is replaced by the instant access feature. Take note of the following items:

-   If you have used the local snapshot feature before December 14, 2020, you can use `Category`.
-   If you have not used the local snapshot feature before December 14, 2020, new snapshots of your Enterprise SSD (ESSD) series disks are instantly available after creation without the need for additional configurations, regardless of whether the snapshots are manually or automatically created. ESSD-series disks include ESSDs, ESSD AutoPL disks, ESSD Entry disks, and Regional ESSDs. InstantAccess, InstantAccessRetentionDays, and DisableInstantAccess that are related to the instant access feature no longer take effect in API operations. Available is added to the DescribeSnapshots and DescribeSnapshotGroups operations to indicate whether snapshots are available.

Prerequisites:

-   Elastic Compute Service (ECS) Snapshot is activated. For more information, see [Activate ECS Snapshot](/help/en/ecs/user-guide/activate-ecs-snapshot).
    
-   The disk for which you want to create a snapshot is in the **In\_use** or **Available** state. Take note of the following items:
    
    -   If the disk is in the **In\_use** state, make sure that the ECS instance to which the disk is attached is in the **Running** or **Stopped** state.
    -   If the disk is in the **Available** state, make sure that the disk was attached to an ECS instance. Snapshots cannot be created for disks that have never been attached to an ECS instance.
    -   When you use a disk to create a dynamic extended volume or a RAID array, we recommend that you create a snapshot-consistent group and enable the application-consistent snapshot feature to back up data. When a business system involves multiple disks, you can create a snapshot-consistent group to ensure a consistent write order and the crash consistency of business system data. For more information, see [Create a snapshot-consistent group](/help/en/ecs/user-guide/create-a-snapshot-consistent-group) and [Create application-consistent snapshots](/help/en/ecs/user-guide/create-application-consistent-snapshots-in-the-ecs-console/).

When you create a snapshot, take note of the following items:

-   We recommend that you create snapshots during off-peak hours because snapshot creation degrades disk I/O performance by up to 10% and slows down data reads and writes.
    
-   If a snapshot is being created, you cannot use this snapshot to create a custom image by calling the [CreateImage](/help/en/ecs/api-createimage) operation.
    
-   If operations are performed on the disk and incremental data is generated when a snapshot is being created, the incremental data is not included in the snapshot.
    
-   When a snapshot is being created for a disk that is attached to an ECS instance, do not perform operations that change the status of the instance, such as stopping or restarting the instance. Otherwise, the snapshot may fail to be created.
    
-   You cannot resize a disk for which a snapshot is being created. Wait until the snapshot is created before you resize the disk.
    
-   You can create snapshots for a disk that is in the **Expired** (`Expired`) state. If the release time scheduled for a disk arrives while a snapshot is being created for the disk, the snapshot is in the **Creating** (`Creating`) state and is deleted when the disk is released.
    
-   After you create snapshots, you are charged snapshot storage fees per region based on the total size of the snapshots that are stored in the region. For more information, see [Snapshots](/help/en/ecs/snapshots-1) .
    
-   In the following scenarios, you cannot create snapshots for a disk:
    
    -   The number of manual snapshots of the disk has reached 256.
    -   A snapshot is being created for the disk.
    -   If the response contains `{"OperationLocks": {"LockReason" : "security"}}` when you query information about an ECS instance, the instance is locked for security reasons and no operations are allowed on the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateSnapshot)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateSnapshot)

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

ecs:CreateSnapshot

create

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/*`

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

The ID of the cloud disk.

d-bp1s5fnvk4gn2tws0\*\*\*\*

SnapshotName

string

No

The name of the snapshot. The name must be 2 to 128 characters in length and start with a letter. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

**Note** The name cannot start with http:// or https://. The name cannot start with `auto` because the names of automatic snapshots start with auto.

testSnapshotName

Description

string

No

The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

By default, this parameter is left empty.

testDescription

RetentionDays

integer

No

The retention period of the snapshot. Unit: days. Valid values: 1 to 65536. After the retention period ends, the snapshot is automatically released.

This parameter is left empty by default, which indicates that the snapshot is not automatically released.

30

Category

string

No

The category of the snapshot. Valid values:

-   Standard: standard snapshot
-   Flash: local snapshot

**Note** This parameter is no longer used. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

Standard

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

ResourceGroupId

string

No

The snapshot type. Valid values:

-   Standard: standard snapshot
-   Flash: local snapshot

**Note** This parameter will be removed in the future. We recommend that you use the `InstantAccess` parameter to ensure future compatibility. This parameter and the `InstantAccess` parameter cannot be specified at the same time. For more information, see the "Description" section of this topic.

rg-bp67acfmxazb4p\*\*\*\*

InstantAccess

boolean

No

Specifies whether to enable the instant access feature. Valid values:

-   true: enables the instant access feature. This feature can be enabled only for ESSDs.
-   false: does not enable the instant access feature. If InstantAccess is set to false, a standard snapshot is created.

Default value: false.

**Note** This parameter is no longer used. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

false

InstantAccessRetentionDays

integer

No

The validity period of the instant access feature. When the validity period ends, the feature is disabled and the instant access snapshot is automatically released. This parameter takes effect only when `InstantAccess` is set to true. Unit: days. Valid values: 1 to 65535.

By default, the value of this parameter is the same as that of `RetentionDays`.

**Note** This parameter is no longer used. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

1

Tag

array<object>

No

The tags to add to the snapshot.

object

No

The tag to add to the snapshot.

key

string

No

The tag key to add to the snapshot.

**Note** This parameter will be removed in the future. We recommend that you use the Tag.N.key parameter to ensure future compatibility.

null

Key

string

No

The key of tag N to add to the snapshot. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N to add to the snapshot. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

value

string

No

The tag value to add to the snapshot.

**Note** This parameter will be removed in the future. We recommend that you use the Tag.N.Value parameter to ensure future compatibility.

null

StorageLocationArn

string

No

**Note** This parameter is unavailable for public use.

null

## Response parameters

Parameter

Type

Description

Example

object

SnapshotId

string

The ID of the snapshot.

s-bp17441ohwka0yuh\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "SnapshotId": "s-bp17441ohwka0yuh****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

400

InvalidSnapshotName.Malformed

The specified SnapshotName is wrongly formed.

The format of the specified snapshot name is invalid.

400

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

400

DiskCategory.OperationNotSupported

The type of the specified disk does not support creating a snapshot.

The operation is not supported by the current disk category.

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

CreateSnapshot.Failed

The process of creating snapshot is failed.

Failed to create the snapshot.

403

Throttling

Request was denied due to user flow control.

\-

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

The specified disk status invalid, restart instance and try again.

The state of the specified disk is invalid. Restart the instance and try again.

403

IncorrectDiskType.NotSupport

The specified device type is not supported.

The specified disk type does not support the operation.

403

IncorrectDiskStatus.Transferring

The specified device is transferring, you can retry after the process is finished.

The specified disk is being migrated. Wait until the migration is complete and try again.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

ECS tags must be added to the CMK.

ECS tags must be added to the CMK.

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

InvalidAction.Unauthorized

The specified action is not valid.

The specified operation is invalid.

403

InvalidRegion.NotSupportSnapshotInstantAccessRegion

The snapshot InstantAccess is not supported for this region.

\-

403

InvalidCategoryAndInstantAccess.Malformed

The snapshot Category and InstantAccess can't be used together.

\-

403

DISK\_HAS\_CREATING\_SNAPSHOT

The operation cannot be performed while a snapshot is being created for the disk.

The operation cannot be performed while a snapshot is being created for the disk.

403

HibernationConfigured.InstanceOperationForbidden

The operation is not permitted due to limit of the hibernation configured instance.

The operation cannot be performed due to the limitations of instances for which the instance hibernation feature is enabled.

403

QuotaExceed.SnapshotQuota

The quota is insufficient, please contact your channel partner to increase the quota.

The quota is insufficient. Contact your channel partner to request a quota increase.

403

InvalidInstantAccessRetentionDays.Malformed

The specified InstantAccessRetentionDays is not valid.

\-

403

CloudBoxNotSupportSnapshotWithInstantAccess

The specified disk in CloudBox does not support to create a snapshot with InstantAccess.

\-

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance to order postpaid product.

Your account balance should not be less than 100 yuan to order postpaid product. Please recharge before ordering.

403

InvalidOperation.UnfinishedEncryptedSnapshotCopy

This disk has unfinished encrypted copy snapshots in the target region.

The cloud disk has unfinished encrypted snapshot copy tasks.

403

QuotaExceed.ConcurrentSnapshotQuota

The number of snapshots being created for the disk %s has exceeded the concurrent quota (%s). Please wait for the previous snapshots to complete before trying again.

The number of snapshots being created for this disk has exceeded the concurrent quota. Please wait for the previous snapshots to complete before trying again.

403

InvalidClientToken.Malformed

The specified clientToken is improperly formatted. It must contain only ASCII characters and must not exceed 64 characters in length.

The specified clientToken is improperly formatted. It must contain only ASCII characters and must not exceed 64 characters in length.

403

InvalidParameter.UnauthorizedStorageLocationArn

The operation has failed due to lack of permission for the specified "StorageLocationArn". Please use a resource with appropriate permission for the operation.

The current operation failed because the specified StorageLocationArn has insufficient permissions. Contact the administrator of the resource to obtain the operation permissions.

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

2025-01-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshot?updateTime=2025-01-03#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshot?updateTime=2024-12-17#workbench-doc-change-demo)

2024-10-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshot?updateTime=2024-10-22#workbench-doc-change-demo)

2024-10-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshot?updateTime=2024-10-08#workbench-doc-change-demo)

2023-08-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshot?updateTime=2023-08-01#workbench-doc-change-demo)

2023-03-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshot?updateTime=2023-03-30#workbench-doc-change-demo)

2023-03-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSnapshot?updateTime=2023-03-22#workbench-doc-change-demo)
