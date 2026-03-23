Deletes a specified snapshot. If you call this operation to delete a snapshot that is being created, the associated snapshot creation task is also canceled.

## Operation description

Take note of the following items:

-   If the snapshot does not exist, the request is ignored.
-   If the snapshot has been used to create custom images, the snapshot cannot be deleted. You need to call the [DeleteImage](/help/en/ecs/api-deleteimage) operation to delete the custom images before you can delete the snapshot.
-   If the snapshot has been used to create disks and `Force` is not specified or is set to `false`, the snapshot cannot be deleted directly. If you want to delete the snapshot, set `Force` to true to forcibly delete the snapshot. The disks created from the snapshot cannot be re-initialized after the snapshot is forcibly deleted.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteSnapshot)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteSnapshot)

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

ecs:DeleteSnapshot

delete

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

none

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

The snapshot ID.

s-bp1c0doj0taqyzzl\*\*\*\*

Force

boolean

No

Specifies whether to force delete the snapshot that has been used to create cloud disks. Valid values:

-   true: force deletes the snapshot. After the snapshot is force deleted, the cloud disks created from the snapshot cannot be re-initialized.
-   false: does not force delete the snapshot.

Default value: false.

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

MissingParameter

The input parameter SnapshotId that is mandatory for processing this request is not supplied.

The SnapshotId parameter is required.

400

IncorrectDiskStatus.CreatingSnapshot

A previous snapshot creation is in process.

A previous snapshot creation task is in process. Please try again later.

403

SnapshotCreatedImage

The snapshot has been used to create user defined image(s).

The snapshot has been used to create custom images and cannot be deleted. The snapshot can be deleted only after the created custom images are deleted (DeleteImage).

403

SnapshotCreatedDisk

The snapshot has been used to create disk(s).

The specified snapshot has been used to create disks, and cannot be deleted when the Force parameter is left empty or set to false. If you do want to delete the snapshot, set the Force parameter to true to force delete the snapshot. The disks created from the snapshot cannot be re-initialized after the snapshot is force deleted.

403

Operation.Conflict

The operation may conflicts with others, please retry later.

This operation conflicts with another operation. Try again later.

403

InvalidOperation.RelatedSnapshotNotFinished

The related standard snapshot is not finished.

The snapshot associated with the current snapshot has not completed. Please try again later.

403

SnapshotCreatedDisk

The snapshot that you are trying to delete is in use by one or more disks.

The snapshot that you are attempting to delete has been used to create one or more disks.

403

InvalidOperation.DeleteSharedSnapshotUnsupported

The current snapshot shares authorization with other users. Please revoke the shared authorization through resource management first.

The current snapshot is used by other users with the shared authorization. Use Resource Management to revoke the authorization before performing the operation.

403

InvalidOperation.ResourceManagedByCloudProduct

The current operation is not supported because the resource is managed by a cloud product. Please contact the relevant cloud product to confirm the reason.

This operation is not supported because the resource is managed by cloud products. Contact the corresponding cloud product to confirm the reason.

404

InvalidSnapshotId.NotFound

The specified snapshot is not found.

The specified Snapshot does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteSnapshot?updateTime=2025-12-25#workbench-doc-change-demo)

2025-05-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteSnapshot?updateTime=2025-05-23#workbench-doc-change-demo)

2025-03-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteSnapshot?updateTime=2025-03-18#workbench-doc-change-demo)

2024-12-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteSnapshot?updateTime=2024-12-04#workbench-doc-change-demo)

2024-10-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteSnapshot?updateTime=2024-10-16#workbench-doc-change-demo)

2023-11-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteSnapshot?updateTime=2023-11-08#workbench-doc-change-demo)
