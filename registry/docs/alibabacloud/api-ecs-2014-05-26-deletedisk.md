Deletes a pay-as-you-go data disk. The data disk can be a basic disk, an ultra disk, a standard SSD, or an Enterprise SSD (ESSD).

## Operation description

When you call this operation, take note of the following items:

-   Manual snapshots of the disk are retained.
-   You can call the [ModifyDiskAttribute](/help/en/ecs/api-modifydiskattribute) operation to configure whether to retain automatic snapshots of the disk or release the snapshots along with the disk. We recommend that you delete the snapshots that are no longer needed to maintain a sufficient quota for new automatic snapshots.
-   The disk must be in the Unattached (Available) state.
-   If the specified DiskId parameter does not exist, the request is ignored.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteDisk)

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

ecs:DeleteDisk

delete

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

The ID of the disk that you want to release.

d-bp14k9cxvr5uzy5\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

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

InvalidRegionId.MalFormed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

403

IncorrectDiskStatus

The current disk status does not support this operation.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

DiskNotPortable

The specified disk is not a portable disk.

The specified disk is not removable.

403

DiskTypeViolation

The specified disk is a system disk and cannot support the operation.

The specified disk is a system disk and cannot be detached.

403

DiskCreatingSnapshot

The operation is denied due to a snapshot of the specified disk is not completed yet.

A snapshot is being created for the specified disk.

403

IncorrectDiskStatus.Initializing

The current disk status does not support this operation.

The specified disk is in an invalid status. Check if the disk is in a usable status.

403

DiskStillAttached

The disk is still attached to the disk.

The specified disk is still attached to an instance.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

InvalidDiskStatus.DeleteProtection

The specified disk is under delete protection, can not be deleted.

Release protection is enabled for the specified disk and the disk cannot be released. Possible cause: The disk was detached from an instance on which it was previously used as the system disk but was retained as a data disk. This disk cannot be released before the instance is released.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-10

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteDisk?updateTime=2024-12-10#workbench-doc-change-demo)
