Attaches a pay-as-you-go data disk or a system disk to an Elastic Compute Service (ECS) instance.

## Operation description

Take note of the following items:

-   The ECS instance and the disk must reside in the same zone.
    
-   The disk must be in the **Unattached** (`Available`) state.
    
-   When you attach the disk as a data disk to an ECS instance, take note of the following items:
    
    -   The ECS instance must be in the **Running** (`Running`) or **Stopped** (`Stopped`) state.
    -   If the disk was separately purchased, the billing method of the disk must be pay-as-you-go.
    -   If the disk is a system disk that was detached from an ECS instance, no limits apply to the billing method of the disk.
    -   If the disk is an elastic ephemeral disk that was detached from an ECS instance, the disk can be attached only to the instance.
-   When you attach the disk as the system disk to an ECS instance, take note of the following items:
    
    -   The ECS instance must be the original instance from which the system disk was detached.
    -   The ECS instance must be in the **Stopped** (`Stopped`) state.
    -   You must configure logon credentials for the ECS instance.
    -   The disk cannot be an elastic ephemeral disk.
    -   For more information about how to attach a system disk, see [Detach or attach a system disk](/help/en/ecs/user-guide/detach-or-attach-a-system-disk).
-   If the response contains `{"OperationLocks": {"LockReason" : "security"}}` when you query information about an ECS instance, the instance is locked for security reasons. No operations are allowed on the instance.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachDisk)

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

ecs:AttachDisk

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

-   ecs:LoginAsNonRoot
-   ecs:PasswordCustomized

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

The ID of the instance to which you want to attach the disk.

i-bp1dq5lozx5f4pmd\*\*\*\*

DiskId

string

Yes

The ID of the disk. The disk specified by `DiskId` and the instance specified by `InstanceId` must reside in the same zone.

**Note** For information about the limits on attaching a data disk and a system disk, see the "Usage notes" section of this topic.

d-bp1j4l5axzdy6ftk\*\*\*\*

Device

string

No

The device name of the disk.

**Note** This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.

testDeviceName

DeleteWithInstance

boolean

No

Specifies whether to release the disk when the instance is released. Valid values:

-   true: releases the disk when the instance is released.
-   false: does not release the disk when the instance is released. The disk is retained as a pay-as-you-go data disk.

Default value: false.

When you specify this parameter, take note of the following items:

-   If `OperationLocks` in the DescribeInstances response contains `"LockReason" : "security"` for the instance to which the disk is attached, the instance is locked for security reasons. Regardless of whether you set `DeleteWithInstance` to `false`, the DeleteWithInstance setting is ignored, and the disk is released when the instance is released.
-   If you want to attach an `elastic ephemeral disk`, you must set `DeleteWithInstance` to `true`.
-   You cannot specify DeleteWithInstance for disks for which the multi-attach feature is enabled.

false

Bootable

boolean

No

Specifies whether to attach the disk as the system disk. Valid values:

-   true: attaches the disk as the system disk.
-   false: does not attach the disk as the system disk.

Default value: false.

**Note** You can set `Bootable` to true only if the instance does not have a system disk.

false

Password

string

No

The password that is set when you attach the system disk. The password is applicable only to the administrator and root users. The password must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:

```
()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
```

For Windows instances, passwords cannot start with a forward slash (/).

**Note** If `Password` is configured, we recommend that you send requests over HTTPS to prevent password leaks.

EcsV587!

KeyPairName

string

No

The name of the SSH key pair that you bind to the Linux instance when you attach the system disk.

-   Windows instances do not support logons based on SSH key pairs. The `Password` parameter takes effect even if the KeyPairName parameter is specified.
-   For Linux instances, the username and password-based logon method is disabled by default.

KeyPairTestName

Force

boolean

No

Specifies whether to force attach the disk to the instance. Valid values:

-   true: force attaches the disk to the instance.
-   false: does not force attach the disk to the instance.

Default value: false.

**Note** You can set this parameter to true only for Regional Enterprise SSDs (ESSDs) (cloud\_regional\_disk\_auto).

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

InvalidDevice.Malformed

The specified device is not valid.

The specified disk device name does not exist.

400

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

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

The instance type of the specified instance does not support hot attach disk.

The instance to which the disk is attached does not support the hot swapping of disks.

400

DiskCategory.OperationNotSupported

The operation is not supported to the specified disk due to its disk category.

The specified disk category does not support this operation.

400

InvalidOperation.InstanceTypeNotSupport

The specified disk which has kms key should only attach to ioOptimized instance.

The specified instance is invalid. You can set Key Management Service (KMS) keys only for I/O optimized instances.

400

InvalidDisk.DiskNotBootable

The specified disk is not a bootable disk, can not be attached as system disk.

\-

400

InvalidInstance.NotOriginInstance

The specified disk can not attached to other instance as system disk.

\-

400

InvalidParameterForce.DiskCategoryNotSupported

The specified disk category does not support force attach operation.

The specified disk category does not support force attach operation.

400

InvalidParameterForce.PrepaidDiskNotSupported

The prepaid disk does not support force attach operation.

The prepaid disk does not support force attach operation.

400

InvalidParameterForce.MultiAttachDiskNotSupported

The multi attach disk does not support force attach operation.

The multi attach disk does not support force attach operation.

400

InvalidParameterForce.RegionNotSupported

The specified region does not support force attach operation.

The specified region does not support force attach operation.

400

OperationConflict.DisksAttachingParallellyExceed

The number of disks attaching parallelly exceeds the limit.

The number of disks attaching parallelly exceeds the limit.

403

InstanceDiskLimitExceeded

The amount of the disk on instance in question reach its limits.

The specified instance has reached the maximum number of disks that can be attached to it.

403

InvalidDevice.InUse

The specified device has been occupied.

The specified device has been occupied.

403

DiskNotPortable

The specified disk is not a portable disk.

The specified disk is not removable.

403

InstanceLockedForSecurity

The instance is locked due to security.

The operation is not supported while the instance is locked for security reasons.

403

ResourcesNotInSameZone

The specified instance and disk are not in the same zone.

The specified instance and disk are not in the same zone.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

DiskInArrears

The specified operation is denied as your disk owing fee.

Your account has overdue payments for the specified disk.

403

DiskError

IncorrectDiskStatus.

The disk state is invalid.

403

DiskId.ValueNotSupported

The specified parameter diskid is not supported.

The specified EBS device category does not support the operation.

403

DiskId.StatusNotSupported

The specified disk status is not supported.

The disk is in a state that does not support the current operation.

403

IncorrectInstanceStatus.NotSupportESSD

The operation is not supported in this status, please reboot the instance.

\-

403

IncorrectDiskStatus

The operation is not supported in this status.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK needs to be enabled.

The customer master key (CMK) is not enabled when KMSKeyId is specified for an encrypted disk. You can call the DescribeKey operation of KMS to query information about the specified CMK.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK needs to be added ECS tag.

\-

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

DependencyViolation.WindowsInstance

The instance image is windows, cannot use ssh key pair to login.

\-

403

InvalidInstanceType.NotSupportDiskCategory

The instanceType of the specified instance does not support this disk category.

The instance type does not support the current disk category. Try another instance type. For information about the disk categories supported by instance types, see the instance family documentation.

403

InvalidInstanceType.NotSupportPL0

The instanceType of the specified instance does not support PL0 of cloud\_essd.

\-

403

InvalidInstanceType.NvmeRequired

The instanceType of the specified instance requires nvme protocol.

The instance type of the specified instance requires the NVMe protocol.

403

InvalidInstanceType.NvmeUnsupported

The instanceType of the specified instance does not support nvme protocol.

The instance type of the specified instance does not support the NVMe protocol.

403

InvalidInstanceType.NotSupportMultiAttachDisk

The instanceType of the specified instance does not support multi attach disk.

Disks for which the multi-attach feature is enabled cannot be attached to instances of the specified instance type.

403

DiskAttachedNumberExceeded

The attaching times of the specified disk exceeded.

The specified disk has reached the maximum number of instances to which it can be attached.

403

InvalidOperation.CanNotAttachMultiAttachDiskAsSystemDisk

Multi attach disk can not be attached as system disk.

Disks for which the multi-attach feature is enabled cannot be attached as system disks.

403

DeleteWithInstance.Conflict

Multi attach disk cannot be set to DeleteWithInstance attribute.

Disks for which the multi-attach feature is enabled do not support the DeleteWithInstance attribute.

403

InvalidParameter.DeleteWithInstance

The DeleteWithInstance for the elastic ephemeral disk must be set to true.

The DeleteWithInstance for the elastic ephemeral disk must be set to true.

403

InvalidOperation.OtherInstanceUnsupported

The elastic ephemeral disk can only be attached to the instance it was last mounted on, please check the disk's system tag to get the last associated instance.

The elastic ephemeral disk can only be attached to the instance it was last mounted on, please check the disk's system tag to get the last associated instance.

403

InvalidInstance.ZoneConflict

The force attach operation is not supported when both the current and target instances are in the same zone.

Forced mount requires that the current instance and the target instance are in different zones

403

InvalidParameter.AllEmpty

The current operation requires either a password or a keyPairName to must be provided. Please ensure that at least one of them is not empty.

The current operation requires either a password or a keyPairName to must be provided. Please ensure that at least one of them is not empty.

403

IncorrectDiskStatus

The current status of the disk does not support this operation. The expected disk status is Available.

The current state of the disk does not support this operation. The expected disk state is Available.

403

InvalidOperation.DiskQueueNumberNotEnough

The number of disk queues on the instance is not enough.

The number of disk queues on the instance is not enough.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidDisk.InUse

The specified disk has been occupied.

The specified disk is already in use.

404

InvalidKMSKeyId.NotFound

The KMS key used by the disk does not exist.

The KMS key used by the disk does not exist.

404

InvalidInstanceId.NotFound

The InstanceId provided does not exist in our records.

The specified instance does not exist. Check whether the instance ID is correct.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2026-01-28#workbench-doc-change-demo)

2025-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2025-12-25#workbench-doc-change-demo)

2025-10-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2025-10-21#workbench-doc-change-demo)

2025-01-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2025-01-14#workbench-doc-change-demo)

2025-01-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2025-01-06#workbench-doc-change-demo)

2024-12-30

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2024-12-30#workbench-doc-change-demo)

2024-11-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2024-11-27#workbench-doc-change-demo)

2024-07-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2024-07-08#workbench-doc-change-demo)

2024-05-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2024-05-08#workbench-doc-change-demo)

2023-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachDisk?updateTime=2023-11-24#workbench-doc-change-demo)
