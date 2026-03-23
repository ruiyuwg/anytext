Changes the type of a snapshot. You can call this operation to convert a standard snapshot into an archive snapshot.

## Operation description

-   Archived snapshots cannot be restored to standard snapshots.
-   You can archive only standard snapshots that have been retained for at least 14 days.
-   You cannot archive snapshots that are shared to you, snapshots managed by Cloud Backup, or snapshots in cloud boxes.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySnapshotCategory)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySnapshotCategory)

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

ecs:ModifySnapshotCategory

update

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

-   ecs:tag

none

## Request parameters

Parameter

Type

Required

Description

Example

SnapshotId

string

Yes

The ID of the snapshot.

s-123\*\*sd

Category

string

No

The type of the snapshot.

-   Archive: archive snapshot

Archive

RetentionDays

integer

No

The retention period of the snapshot. Unit: days. The retention period started at the point in time when the snapshot was created. You can archive only standard snapshots that have been retained for at least 14 days.

After the snapshot is archived, the minimum retention period (also called minimum archive period) is 60 days. When you calculate the retention period of archived snapshots, you must deduct the retention period of standard snapshots. If you delete the snapshot within 60 days after the snapshot is archived, you are charged archive tier storage fees for the snapshot for 60 days. For more information about the billing of snapshots, see [Snapshots](/help/en/ecs/snapshots-1) .

Value range \[74,65536\]

**Note** If you do not specify this parameter, the snapshot is permanently retained.

60

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

B48A12CD-1295-4A38-A8F0-0E92C937\*\*\*\*

TaskId

string

The ID of the archive task. You can call the DescribeTasks operation to query the status and progress of the archive task.

t-dxh34xds\*\*d

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "B48A12CD-1295-4A38-A8F0-0E92C937****",
  "TaskId": "t-dxh34xds**d"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidRetentionDays.Malformed

The specified RetentionDays is not valid.

The specified RetentionDays parameter is invalid.

400

InvalidOperation.DecreaseRetentionDaysUnsupported

The requested operation to decrease retention days for the snapshot is not supported.

\-

400

InvalidSnapshotId.NotReady

The specified snapshot has not completed yet.

The specified snapshot is being created.

400

InvalidOperation.ArchiveSharedSnapshotUnsupported

The specified shared snapshot is not support archive.

Snapshots whose source is shared cannot be archived.

400

InvalidOperation.ArchiveCloudBoxSnapshotUnsupported

The specified snapshot in CloudBox is not support archive.

Snapshots stored in the cloud box do not support archiving.

400

InvalidStatus.SnapshotUnfinished

The specified unfinished snapshot is not support archive.

Archiving is not supported for incomplete snapshots.

400

InvalidStatus.SnapshotAgeLimit

The specified snapshot created within 14 days is not support archive.

Archiving is not supported for snapshots that are less than 14 days old.

400

InvalidStatus.SnapshotInArchive

The specified snapshot is currently being archived.

Specifies that the snapshot is being archived.

400

InvalidParameter.SnapshotCategory

The specified parameter category is invalid.

The specified parameter category is invalid

400

InvalidRetentionDays.LessThanLockExpiredTime

The specified parameter RetentionDays is invalid. The RetentionDays should be greater than the snapshot LockExpiredTime.

The specified parameter RetentionDays is invalid. The RetentionDays should be greater than the snapshot LockExpiredTime.

403

InvalidOperation.ResourceManagedByCloudProduct

The current operation is not supported because the resource is managed by a cloud product. Please contact the relevant cloud product to confirm the reason.

This operation is not supported because the resource is managed by cloud products. Contact the corresponding cloud product to confirm the reason.

403

InvalidOperation.InstantAccessEnabledUnsupport

The specified snapshot with legacy Instant Access enabled does not support archive.

The specified snapshot with legacy Instant Access enabled does not support archive.

403

InvalidOperation.EncryptedSnapshotUnsupport

Archiving encrypted snapshots is not currently supported.

Archiving encrypted snapshots is not supported

403

QuotaExceed.ConcurrentArchiveSnapshotQuota

The number of concurrent archiving tasks associated with the disk of the current snapshot has exceeded the quota limit. Please try again later.

The number of parallel archive tasks associated with the current snapshot exceeds the quota limit. Try again later.

403

InvalidOperation.DefaultFreeSnapshotNotSupport

The specified snapshot is a default free snapshot and does not support this operation.

The specified snapshot is a default free snapshot and does not support the current operation.

404

InvalidSnapshotId.NotFound

The specified SnapshotId does not exist.

The specified snapshot ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotCategory?updateTime=2026-01-07#workbench-doc-change-demo)

2025-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySnapshotCategory?updateTime=2025-12-25#workbench-doc-change-demo)
