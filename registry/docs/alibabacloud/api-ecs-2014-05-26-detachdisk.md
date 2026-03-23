Detaches a pay-as-you-go data disk or a system disk from an Elastic Compute Service (ECS) instance.

## Operation description

Take note of the following items:

-   This operation is an asynchronous operation. After you call the operation to detach a disk from an ECS instance, the disk is detached in approximately 1 minute.
-   If `OperationLocks` in the response contains `"LockReason" : "security"` when you query information about an instance, the instance is locked for security reasons and all operations are prohibited on the instance.
-   If you want to attach an elastic ephemeral disk that you detached from an instance, you can attach the disk only to the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachDisk)

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

ecs:DetachDisk

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

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

The ID of the ECS instance from which you want to detach the disk.

i-bp67acfmxazb4p\*\*\*\*

DiskId

string

Yes

The ID of the disk that you want to detach.

-   The disk that you want to detach must be attached to an ECS instance and in the In Use (`In_use`) state.
-   The instance from which you want to detach a data disk must be in the `Running` or `Stopped` state.
-   The instance from which you want to detach the system disk must be in the `Stopped` state.

d-bp67acfmxazb4p\*\*\*\*

DeleteWithInstance

boolean

No

Specifies whether to release the system disk or data disk when the instance from which you want to detach the disk is released. Valid values:

-   true: releases the disk when the instance is released.
-   false: does not release the disk when the instance is released. The disk is retained as a pay-as-you-go data disk.

Default value: true.

Take note of the following items:

-   You cannot specify this parameter for disks for which the multi-attach feature is enabled.
-   If a data disk is to be detached, the default value is `false`.
-   If you want to detach an `elastic ephemeral disk`, you must set `DeleteWithInstance` to `true`.

false

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

InvalidParameter

The input parameter is mandatory for processing this request is empty.

A required parameter is not specified.

400

InvalidRegionId.MalFormed

The specified RegionId is not valid.

The specified region does not exist.

400

InvalidOperation.InstanceTypeNotSupport

The instance type of the specified instance does not support hot detach disk.

\-

400

DisksDetachingOnEcsExceeded

The number of disks detaching on the instance exceeds the limit.

The number of disks being unmounted on the instance exceeds the limit

403

IncorrectDiskStatus

The current disk status does not support this operation.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

DiskNotPortable

The specified disk is not a portable disk.

The specified disk is not removable.

403

InstanceLockedForSecurity

The instance is locked due to security.

The operation is not supported while the instance is locked for security reasons.

403

DependencyViolation

The specified disk has not been attached on the specified instance.

\-

403

DiskTypeViolation

The specified disk is a system disk and cannot support the operation.

The specified disk is a system disk and cannot be detached.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

InvalidInstance.ImageCategory

The image category of the specified instance does not support detaching system disk.

The specified system disk cannot be detached from the instance while the image of the instance is in the current state. Possible cause: The image that was used to create the instance has been deleted.

403

DeleteWithInstance.Conflict

Multi attach disk cannot be set to DeleteWithInstance attribute.

Disks for which the multi-attach feature is enabled do not support the DeleteWithInstance attribute.

403

InvalidOperation.DiskCategoryUnsupported

The DetachDisk operation is not supported for elastic ephemeral disk.

The DetachDisk operation is not supported for elastic ephemeral disk.

403

InvalidParameter.DeleteWithInstance

The DeleteWithInstance for the elastic ephemeral disk must be set to true.

The DeleteWithInstance for the elastic ephemeral disk must be set to true.

403

InvalidOperation.DiskDetachingFromThisEcs

The specified disk is detaching from this ecs.

The disk is being unmounted from the current instance.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidDisk.AlreadyDetached

The specified disk has been detached.

The specified disk has been detached.

404

InvalidDiskId.OperationNotSupported

The operation is not supported due to base image not exist.

\-

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

2024-12-04

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachDisk?updateTime=2024-12-04#workbench-doc-change-demo)

2024-09-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachDisk?updateTime=2024-09-20#workbench-doc-change-demo)

2024-07-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachDisk?updateTime=2024-07-24#workbench-doc-change-demo)

2024-05-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachDisk?updateTime=2024-05-09#workbench-doc-change-demo)

2024-04-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachDisk?updateTime=2024-04-15#workbench-doc-change-demo)

2023-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachDisk?updateTime=2023-11-24#workbench-doc-change-demo)
