Re-initializes a cloud disk to the state when the cloud disk was created.

## Operation description

Take note of the following items:

-   The disk that you want to re-initialize must be in the **In Use** (`In_use`) state and the instance to which the disk is attached must be in the **Stopped** (`Stoppe`) state.
-   If an instance has never been started since it was created, the disks attached to it cannot be re-initialized.
-   If a local snapshot has been created for a disk, the disk cannot be re-initialized.
-   If a system disk is re-initialized, the disk is restored to the state of the image from which it was created. If the image has been deleted, the disk cannot be re-initialized.
-   For a data disk that was created from scratch, the disk is initialized to the empty disk state. For a data disk that is created from a snapshot, the disk is initialized to the snapshot state. If the snapshots were deleted, the disks cannot be re-initialized and an error is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReInitDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReInitDisk)

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

ecs:ReInitDisk

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

-   ecs:PasswordCustomized

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

The ID of the disk.

d-bp67acfmxazb4ph\*\*\*\*

Password

string

No

Specifies whether to reset the password of the instance when you re-initialize its system disk. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:

```
()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
```

For Windows instances, passwords cannot start with a forward slash (/).

**Note** If the `Password` parameter is specified, we recommend that you send requests over HTTPS to prevent password leaks.

EcsV587!

KeyPairName

string

No

The name of the key pair. This parameter is empty by default.

**Note** The parameter is applicable only to Linux instances. You can bind an SSH key pair to an instance as the logon credential when you re-initialize the system disk of the instance. After the SSH key pair is bound, the username and password-based logon method is disabled for the instance.

testKeyPairName

AutoStartInstance

boolean

No

Specifies whether to automatically start the instance after the disk is re-initialized. Valid values:

-   true
-   false

Default value: false.

true

SecurityEnhancementStrategy

string

No

Specifies whether to use Security Center free of charge after the system disk is re-initialized. Valid values:

-   Active: uses Security Center free of charge after the system disk is re-initialized. This value is applicable to only public images.
-   Deactive: does not use Security Center free of charge after the system disk is re-initialized. This value is applicable to all images.

Default value: Deactive.

Active

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

LoginAsNonRoot.ImageNotSupport

The specified image does not support login as non-root.

The image does not support the logons of non-root users.

400

DiskHasSnapshotsWithInstantAccessEnabled.OperationNotSupported

The operation is not supported to the specified disk that have snapshots with InstantAccess enabled.

\-

400

InvalidPassword.Malformed

The specified parameter "Password" is not valid.

\-

400

InvalidKeyPairName.NotFound

The specified KeyPairName does not exist.

The specified KeyPairName parameter does not exist.

400

DependencyViolation.IoOptimize

The specified parameter InstanceId is not valid.

The I/O optimization configuration of the instance is invalid.

400

DiskCategory.OperationNotSupported

The operation is not supported to the specified disk due to its disk category.

The specified disk category does not support this operation.

400

InvalidRegionId.MalFormed

The specified RegionId is not valid.

The specified region does not exist.

403

LoginAsNonRoot.RegionNotSupport

The specified region does not support login as non-root.

\-

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

InvalidSnapshot.TooOld

The disk is created from a snapshotId made before 2013-07-15, it cannot be re-initiated the specified disk any more since the detached first time.

Snapshots created before July 15, 2013 do not support this operation.

403

OperationDenied

The snapshot which is used to create the specified disk has been deleted.

The snapshot used to create the specified disk does not exist.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

DiskCreatingSnapshot

The operation is denied due to a snapshot of the specified disk is not completed yet.

A snapshot is being created for the specified disk.

403

SharedImageDeleted

The specified image by others shared is deleted.

The specified shared image has been deleted.

403

DependencyViolation.WindowsInstance

The instance creating is windows, cannot use ssh key pair to login.

\-

403

UserNotInTheWhiteList

The user is not in volume white list.

You are not authorized to manage the Shared Block Storage device. Submit a ticket to apply for the permissions.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK needs to be enabled.

The customer master key (CMK) is not enabled when KMSKeyId is specified for an encrypted disk. You can call the DescribeKey operation of KMS to query information about the specified CMK.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

HibernationConfigured.InstanceOperationForbidden

The operation is not permitted due to limit of the hibernation configured instance.

The operation cannot be performed due to the limitations of instances for which the instance hibernation feature is enabled.

403

InvalidOperation.MultiAttachDisk

Multi attach disk does not support this operation.

Disks for which the multi-attach feature is enabled do not support the operation.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK needs to be added ECS tag.

\-

403

InvalidSourceSnapshot

The source snapshot of the disk has been deleted and cannot support the current operation.

The source snapshot of the disk has been deleted and cannot support the current operation.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

404

InvalidDiskId.OperationNotSupported

The operation is not supported due to image not exist.

\-

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReInitDisk?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReInitDisk?updateTime=2024-12-04#workbench-doc-change-demo)

2023-08-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReInitDisk?updateTime=2023-08-25#workbench-doc-change-demo)

2021-06-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReInitDisk?updateTime=2021-06-18#workbench-doc-change-demo)
