Rolls back a cloud disk to a snapshot from an earlier point in time.

## Operation description

Before you call this operation, read [Roll back a disk by using a snapshot](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot-1).

Take note of the following items:

-   The cloud disk that you want to roll back must be in the In Use (`In_use`) or Unattached (`Available`) state.
-   The instance to which the cloud disk is attached must be in the `Stopped` state. You can call the [StopInstances](/help/en/ecs/api-stopinstances) operation to stop the instance.
-   The snapshot specified by `SnapshotId` must be created from the disk specified by `DiskId`.
-   If the response contains `{"OperationLocks": {"LockReason" : "security"}}` when you query information about an instance by calling the [DescribeInstances](/help/en/ecs/api-describeinstances) operation, the instance is locked for security reasons and no operations can be performed on the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ResetDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ResetDisk)

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

ecs:ResetDisk

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

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

DiskId

string

Yes

The ID of the cloud disk that you want to roll back.

d-bp199lyny9b3\*\*\*\*

SnapshotId

string

Yes

The ID of the snapshot that you want to use to roll back the cloud disk.

s-bp199lyny9b3\*\*\*\*

DryRun

boolean

No

Specifies whether to check the validity of the request without actually making the request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and resource state limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, the rollback operation is performed.

Default value: false

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

F3CD6886-D8D0-4FEE-B93E-1B732396\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F3CD6886-D8D0-4FEE-B93E-1B732396****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DiskCategory.OperationNotSupported

The operation is not supported to the specified disk due to its disk category.

The specified disk category does not support this operation.

400

InvalidRegionId.MalFormed

The specified RegionId is not valid.

The specified region does not exist.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Your request is determined as valid when the DryRun parameter is set.

400

InternalError

The requested services is not available now. Please try again later.

An internal error has occurred. Try again later.

403

IncorrectDiskStatus

The current disk status does not support this operation.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The instance is locked due to security.

The operation is not supported while the instance is locked for security reasons.

403

InvalidParameter.Mismatch

The specified snapshot is not created from the specified disk.

An encrypted snapshot cannot be used to roll back an unencrypted disk.

403

InvalidParameter.Mismatch

Non-encrypted disk can not be reset by encrypted snapshot.

\-

403

InvalidSnapshot.TooOld

The snapshotId is created before 2013-07-15, it cannot be restored since the first time the disk detached.

Snapshots created before July 15, 2013 do not support this operation.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

OperationDenied

The specified snapshot dees not support ResetDisk.

The specified snapshot cannot be used to reset the disk.

403

InvalidSnapshotId.NotReady

The specified snapshot has not completed yet.

The specified snapshot is being created.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidAccountStatus.SnapshotServiceUnavailable

Snapshot service has not been opened yet.

The operation is not supported while the snapshot service is not activated.

403

Operation.Conflict

The operation may conflicts with others.

The operation conflicts with other operations.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK needs to be added ECS tag.

\-

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK needs to be enabled.

The customer master key (CMK) is not enabled when KMSKeyId is specified for an encrypted disk. You can call the DescribeKey operation of KMS to query information about the specified CMK.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

IncorrectDiskStatus.HasUnfinishedSnapshot

The current disk has unfinished snapshot.

\-

403

InvalidOperation.DiskResetInProgress

The operation cannot be performed because the disk has an ongoing reset task, please try again later.

The current operation cannot be performed because there is a reset task in progress on the disk, please try again later.

404

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

Disk.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidSnapshotId.NotFound

The specified SnapshotId does not exist.

The specified snapshot ID does not exist.

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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResetDisk?updateTime=2025-03-21#workbench-doc-change-demo)

2024-12-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResetDisk?updateTime=2024-12-02#workbench-doc-change-demo)

2024-11-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResetDisk?updateTime=2024-11-23#workbench-doc-change-demo)

2023-08-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResetDisk?updateTime=2023-08-25#workbench-doc-change-demo)
