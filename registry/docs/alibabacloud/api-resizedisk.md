Resizes a system disk or a data disk.

## Operation description

**Note** Before you call this operation to resize a disk, you must check the partition format of the disk. If the format is MBR, you cannot resize the file to more than 2TiB. Otherwise, data loss may occur. If you want to resize an MBR partition, we recommend creating and mounting a data disk in the GPT partition format, and then copy the existing data to the new data disk. For more information, see [Resize a disk to extend the disk capacity](/help/en/doc-detail/44986.html).

-   The disk types that can be resized include basic disks (`cloud` ), ultra disks (`cloud_efficiency` ), SSDs (`cloud_ssd` ), Enterprise SSDs (ESSDs)(`cloud_essd` ), ESSD AutoPL disks (cloud\_auto), standard elastic ephemeral disks (elastic\_ephemeral\_disk\_standard), premium elastic ephemeral disks (elastic\_ephemeral\_disk\_premium), and Regional ESSDs (cloud\_regional\_disk\_auto).
    
-   You cannot resize a cloud disk when a snapshot is being created for the disk. Wait until the snapshot is created before you resize the cloud disk.
    
-   You cannot call this operation to extend partitions or file systems. You must manually allocate partitions and file systems after the resize cloud disk capacity. For more information, see [Extend partitions and file systems (Linux)](/help/en/ecs/user-guide/resize-linux-cloud-disks#bb3b1f02e51pj) and [Extend partitions and file systems (windows)](/help/en/ecs/user-guide/resize-windows-cloud-disks#a9f9b78f3fujb).
    
-   If the multi-attach feature is enabled for a cloud disk, you can resize the disk online or offline. Make sure that the ECS instances to which the disk is attached meet the following requirements:
    
    -   If you want to resize the disk online, the ECS instances must be in the **Running** state.\`\`
    -   If you want to resize the disk offline, the ECS instances must be in the **Running** or **Stopped** state.\`\`\`\`
-   The cloud disk that you want to resize must meet the following requirements:
    
    -   The disk is in the In Use (`In Use`) or Unattached (`Available`) state.
    -   (Recommended) Snapshots are created for the disk to back up disk data. For information about how to create snapshots for a disk, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot).
    -   If the disk is a new data disk, initialize the disk before you resize the disk. For more information, see [Overview](/help/en/ecs/user-guide/overview-27) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ResizeDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ResizeDisk)

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

ecs:ResizeDisk

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

The ID of the disk. You can call the [DescribeDisks](/help/en/ecs/api-describedisks) operation to query available disk IDs.

d-bp67acfmxazb4p\*\*\*\*

Type

string

No

The method that you want to use to resize the disk. Valid values:

-   offline (default): resizes the disk offline. After resizing a disk offline, you must [restart the instance](/help/en/ecs/user-guide/restart-instances) in the console or call an API operation [RebootInstance](/help/en/ecs/api-rebootinstance) make the operation take effect.
-   online: resizes the disk online without the need to restart the instance. You can resize ultra disks, standard SSDs, ESSDs, and elastic ephemeral disks online.

offline

NewSize

integer

Yes

The new disk capacity. Unit: GiB. Valid values:

-   System disk:
    
    -   Basic disk (cloud): 20 to 500.
        
    -   ESSD (cloud\_essd): The valid values vary based on the performance level of the ESSD.
        
        -   Valid values when SystemDisk.PerformanceLevel is set to PL0: 1 to 2048.
        -   Valid values when SystemDisk.PerformanceLevel is set to PL1: 20 to 2048.
        -   Valid values when SystemDisk.PerformanceLevel is set to PL2: 461 to 2048.
        -   Valid values when SystemDisk.PerformanceLevel is set to PL3: 1261 to 2048.
    -   ESSD AutoPL disk: 1 to 2048.
        
    -   Other disk categories: 20 to 2048.
        
-   Data disk:
    
    -   Ultra disk (cloud\_efficiency): 20 to 32768.
        
    -   Standard SSD (cloud\_ssd): 20 to 32768.
        
    -   ESSD (cloud\_essd): The valid values vary based on the performance level of the ESSD.\`\` To query the performance level of an ESSD, call the [DescribeDisks](/help/en/ecs/api-describedisks) operation to query disk information and check the `PerformanceLevel` value in the response.
        
        -   PL0 ESSD: 1 to 65536.
        -   PL1 ESSD: 20 to 65536.
        -   PL2 ESSD: 461 to 65536.
        -   PL3 ESSD: 1261 to 65536.
    -   Basic disk (cloud): 5 to 2000.
        
    -   ESSD AutoPL disk (cloud\_auto): 1 to 65536.
        
    -   Standard elastic ephemeral disk (elastic\_ephemeral\_disk\_standard): 64 to 8192.
        
    -   Premium elastic ephemeral disk (elastic\_ephemeral\_disk\_premium): 64 to 8192.
        

**Note** The new disk capacity must be larger than the original disk capacity. Otherwise, an error is reported.

1900

ClientToken

string

No

The new disk capacity. Unit: GiB. Valid values:

-   For a system disk:
    
    -   Basic disk (cloud): 20 to 500.
        
    -   ESSD (cloud\_essd): The valid values vary based on the performance level of the ESSD.
        
        -   PL0 ESSD: 1 to 2048.
        -   PL1 ESSD: 20 to 2048.
        -   PL2 ESSD: 461 to 2048.
        -   PL3 ESSD: 1261 to 2048.
    -   ESSD AutoPL disk: 1 to 2048.
        
    -   Other disk categories: 20 to 2048.
        
-   For a data disk:
    
    -   Ultra disk (cloud\_efficiency): 20 to 32768.
        
    -   Standard SSD (cloud\_ssd): 20 to 32768.
        
    -   ESSD (cloud\_essd): The valid values vary based on the performance level of the ESSD.\`\` To query the performance level of an ESSD, call the [DescribeDisks](/help/en/ecs/api-describedisks) operation to query disk information and check the `PerformanceLevel` value in the response.
        
        -   PL0 ESSD: 1 to 65536.
        -   PL1 ESSD: 20 to 65536.
        -   PL2 ESSD: 461 to 65536.
        -   PL3 ESSD: 1261 to 65536.
    -   Basic disk (cloud): 5 to 2000.
        
    -   ESSD AutoPL disk (cloud\_auto): 1 to 65536.
        
    -   Standard elastic ephemeral disk (elastic\_ephemeral\_disk\_standard): 64 to 8192.
        
    -   Premium elastic ephemeral disk (elastic\_ephemeral\_disk\_premium): 64 to 8192.
        

**Note** The new disk capacity must be larger than the original disk capacity. Otherwise, an error is reported.

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

OrderId

string

The ID of the request.

20413515388\*\*\*\*

RequestId

string

The ID of the request.

F3CD6886-D8D0-4FEE-B93E-1B732396\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "OrderId": "20413515388****",
  "RequestId": "F3CD6886-D8D0-4FEE-B93E-1B732396****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDataDiskSize.ValueNotSupported

The specified DataDisk.n.Size beyond the permitted range, or the capacity of snapshot exceeds the size limit of the specified disk category.

The specified DataDisk.N.Size parameter is invalid or the snapshot size exceeds the maximum capacity allowed for the specified disk category.

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

400

IncompleteParamter

Some fields can not be null in this request.

Some required parameters are not specified.

400

InvalidRegionId.MalFormed

The specified RegionId is not valid.

The specified region does not exist.

400

InvalidParam.Type

The specified type is not supported.

The specified Type parameter is invalid.

400

LastOrderProcessing

The previous order is still processing, please try again later.

The order is being processed. Try again later.

400

InvalidStatus.Upgrading

The instance which the disk attachs is upgrading; please try again later.

\-

400

InvalidSystemDiskSize.ImageNotSupportResize

The image of the instance does not support resize.

\-

400

InvalidSystemDiskSize.ImageNotSupportResize

The specified image does not support resize.

The specified image does not support resizing.

400

InvalidDisk.DetachedSystemDisk

The specified disk is a detached system disk, does not support this operation.

\-

400

OperationDenied.NotEnoughCapacity

The capacity of the current dedicated block storage cluster is not enough to expand.

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

QuotaExceed.DiskCapacity

The used capacity of disk type has exceeded the quota in the zone, %s.

The capacity of disks that belong to the specified disk category exceeds the quota limit for the zone.

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

InvalidSystemDiskSize.ValueNotSupported

The specified system disk size is invalid.

The specified system disk size is invalid.

400

OperationDenied.UnfinishedOrder

The current instance has unfinished refundOrder, this operation is denied.

\-

400

AccountForbidden.CreateOrder

Order cannot be created due to abnormal account.

\-

403

OperationDenied

The type of the disk does not support the operation.

The disk category does not support the specified operation.

403

OperationDenied

The status of the disk or the instance that the disk is attaching with does not support the operation.

The disk or instance is in a state that does not support the current operation.

403

InvalidDiskSize.TooSmall

Specified new disk size is less than the original disk size.

The specified new disk capacity is smaller than the original disk capacity.

403

InvalidDiskSize.TooLarge

Specified new disk size is beyond the permitted range.

The size of the new disk is beyond the permitted range.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

DiskError

Incorrect disk status.

\-

403

DiskInArrears

The specified operation is denied as your disk owing fee.

Your account has overdue payments for the specified disk.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

DiskCreatingSnapshot

The operation is denied due to a snapshot of the specified disk is not completed yet.

A snapshot is being created for the specified disk.

403

InvalidDiskSize

Specified new disk size is less than or equal the original disk size.

The new disk size must be greater than the original disk size.

403

Operation.Conflict

The operation may conflicts with others.

The operation conflicts with other operations.

403

InstanceLockedForSecurity

The instance is locked due to security.

The operation is not supported while the instance is locked for security reasons.

403

IncorrectDiskStatus

The current disk status does not support this operation.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

InvalidDiskCategory.NotSupported

The specified disk category is not supported.

The specified disk category does not support this operation.

403

InvalidRegion.NotSupport

The specified region does not support resize online.

Online resizing is not supported in the region.

403

InvalidDiskCategory.NotSupported

The specified disk category does not support resize online.

\-

403

IncorrectInstanceStatus

The current status of the resource does not support resize online.

\-

403

InvalidInstanceStatus.NotRunning

The status of instance to which the disk attachs must be running when resizing online.

The instance to which the disk is attached is not in the Running state when you resize the disk online.

403

IncorrectDiskStatus

The current status of the resource does not support resize online.

Disk status does not support online resizing

403

InvalidOperation.InstanceTypeNotSupportOnlineResize

The instance type of the specified instance does not support resize online.

\-

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

InstanceSpecModification.NotEffective

The instance which the disk attachs has been reserved for making a spec modification and not taken effective in the current contract period.

\-

403

InvalidDiskSize.NotSupportResizeOnline

The current size of the resource does not support resize online.

\-

403

SecurityRisk.3DVerification

We have detected a security risk with your default credit or debit card. Please proceed with verification via the link in your email.

\-

403

QuotaExceeded.PostpaidDataDiskCapacity

The quota of postpaid data disk capacity exceeds.

The used capacity of the pay-as-you-go disk reaches the quota limit.

403

InvalidOperation.MultiAttachDiskNotSupportResizeOnline

Multi attach disk does not support resize online.

Disks for which the multi-attach feature is enabled cannot be resized online.

403

InvalidDataDiskSize.ValueNotSupported

The specified data disk size is not valid. The disk size must be larger than the original size.

The specified data disk size is not valid. The disk size must be larger than the original size.

403

InvalidDataDiskCategory.ValueNotSupported

The specified Category of Data Disk is not valid.

The specified data disk type is not supported.

403

OperationDenied

The specified InstanceType or Zone is not available or not authorized.

The specified instance type or zone is unavailable or you are not authorized to use the specified instance type or access the specified zone.

403

InvalidDiskSize.NotSupportMultiAttachDisk

The specified disk size exceeds the maximum limit 65536 for enabling multi-attach.

The specified disk size exceeds the maximum limit 65536 for enabling multi-attach.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidInstanceId.NotFound

The InstanceId provided does not exist in our records.

The specified instance does not exist. Check whether the instance ID is correct.

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

2026-01-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2026-01-13#workbench-doc-change-demo)

2025-12-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2025-12-29#workbench-doc-change-demo)

2025-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2025-12-25#workbench-doc-change-demo)

2025-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2025-05-08#workbench-doc-change-demo)

2025-04-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2025-04-10#workbench-doc-change-demo)

2025-04-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2025-04-08#workbench-doc-change-demo)

2024-12-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2024-12-30#workbench-doc-change-demo)

2024-12-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2024-12-04#workbench-doc-change-demo)

2024-08-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2024-08-23#workbench-doc-change-demo)

2023-10-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2023-10-18#workbench-doc-change-demo)

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2023-10-09#workbench-doc-change-demo)

2023-05-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ResizeDisk?updateTime=2023-05-16#workbench-doc-change-demo)
