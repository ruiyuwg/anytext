Creates a custom image. After you call this operation to create a custom image, you can call the RunInstances operation to create Elastic Compute Service (ECS) instances from the custom image or call the ReplaceSystemDisk operation to replace system disks by using the custom image.

## Operation description

### [](#considerations)[](#)Considerations

-   This operation is an asynchronous operation. After a request to create a custom image is sent, an image ID is returned but the creation of the custom image is in progress. You can call the [DescribeImage](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimages) operation to query the status of the custom image. When the status of the custom image is `Available` in the response, the image is created and available. For more information, see [Overview of custom images](/help/en/ecs/user-guide/overview-36).
-   If the response contains {"OperationLocks": {"LockReason" : "security"}} when you query information about an ECS instance, the instance is locked for security reasons, and you cannot create a custom image from the instance.
-   To optimize the image, we recommend that you specify `DetectionStrategy` when you create a custom image. For information about the image check feature, see [Overview](/help/en/ecs/user-guide/detect-custom-images-and-repair) .

You can call the CreateImage operation to create a custom image by using one of the following methods. The following request parameters are prioritized in descending order: InstanceId, DiskDeviceMapping, and SnapshotId. If your request contains two or more of these parameters, the custom image is created based on the parameter that has a higher priority.

-   **Create a custom image from an instance**. Specify an instance ID (`InstanceId`).
    
    -   The ECS instance must be in the Running (`Running`) or Stopped (`Stopped`) state.
    -   After the CreateImage operation is called, a snapshot is created for each cloud disk of the instance.
    
    \*\*
    
    **Note** When you create a custom image from a running ECS instance, cache data may not be written to disks. In this case, the data of the custom image may be slightly different from the data of the instance. Before you create a custom image from the instance, we recommend that you stop the instance by calling the StopInstancesoperation.
    
-   **Create a custom image from a snapshot. The specified snapshot must be created after July 15, 2013.**
    
    -   **Create a custom image from a system disk snapshot of an ECS instance**. You need to only specify the ID of the system disk snapshot by using `SnapshotId`.
        
    -   **Create a custom image from a system disk snapshot and data disk snapshots of an ECS instance**. You need to establish data association between the disks by specifying `DiskDeviceMapping`.
        
        -   You can specify only one snapshot to create the system disk in the custom image.
        -   You can specify up to 16 snapshots to use to create data disks in the custom image. If you do not specify `DiskDeviceMapping.N.SnapshotId`, an empty data disk with the default capacity is created.

**Note** When an ECS instance is released, the system disk of the instance is converted to a pay-as-you-go data disk. You cannot create a custom image from the snapshot of this disk. You must create a custom image from the snapshot of this disk before the instance is released.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateImage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateImage)

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

ecs:CreateImage

create

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/*`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

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

The region ID of the custom image that you want to create. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

SnapshotId

string

No

The ID of the snapshot from which to create the custom image.

**Note** To create a custom image from only a system disk snapshot of an ECS instance, you can specify this parameter or `DiskDeviceMapping.N.SnapshotId` to specify the snapshot ID. If you add data disk snapshots, you can use only `DiskDeviceMapping.N.SnapshotId` to specify snapshots.

s-bp17441ohwkdca0\*\*\*\*

InstanceId

string

No

The ID of the ECS instance from which to create the custom image. To create a custom image from an ECS instance, you must specify this parameter.

i-bp1g6zv0ce8oghu7\*\*\*\*

ImageName

string

No

The name of the custom image. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

TestCentOS

ImageFamily

string

No

The name of the image family. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with acs: or aliyun. The name cannot contain http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

hangzhou-daily-update

ImageVersion

string

No

The image version.

**Note** If you specify an ECS instance that runs an Alibaba Cloud Marketplace image or a custom image derived from an Alibaba Cloud Marketplace image by using `InstanceId`, you must leave this parameter empty or set this parameter to the `ImageVersion` value of the image run by the specified ECS instance.

2017011017

Description

string

No

The image description. The description must be 2 to 256 characters in length and cannot start with [http:// or https://.](http://https://%E3%80%82)

ImageTestDescription

Platform

string

No

The operating system distribution for the system disk in the custom image. If you specify a data disk snapshot to create the system disk of the custom image, use Platform to specify the operating system distribution for the system disk. Valid values:

-   Aliyun
-   Anolis
-   CentOS
-   Ubuntu
-   CoreOS
-   SUSE
-   Debian
-   OpenSUSE
-   FreeBSD
-   RedHat
-   Kylin
-   UOS
-   Fedora
-   Fedora CoreOS
-   CentOS Stream
-   AlmaLinux
-   Rocky Linux
-   Gentoo
-   Customized Linux
-   Others Linux
-   Windows Server 2022
-   Windows Server 2019
-   Windows Server 2016
-   Windows Server 2012
-   Windows Server 2008
-   Windows Server 2003

Default value: Others Linux.

CentOS

BootMode

string

No

The boot mode of the image. Valid values:

-   BIOS: BIOS mode
-   UEFI: Unified Extensible Firmware Interface (UEFI) mode
-   UEFI-Preferred (default): BIOS mode and UEFI mode

**Note** Before you specify this parameter, make sure that you are familiar with the boot modes supported by the image. If you specify a boot mode that is not supported by the image, ECS instances created from the image cannot start as expected. For information about the boot modes of images, see the [Boot modes of images](/help/en/ecs/user-guide/instance-startup-mode#b9caa9b8bb1wf) section of the "Best practices for ECS instance boot modes" topic.

BIOS

Architecture

string

No

The system architecture of the system disk. If you specify a data disk snapshot to create the system disk of the custom image, use Architecture to specify the system architecture of the system disk. Valid values:

-   i386
-   x86\_64
-   arm64

Default value: x86\_64.

x86\_64

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

ResourceGroupId

string

No

The ID of the resource group to which to assign the custom image. If you leave this parameter empty, the image is assigned to the default resource group.

**Note** If you call the CreateImage operation as a Resource Access Management (RAM) user who does not have permissions on the default resource group and leave `ResourceGroupId` empty, the `Forbidden: User not authorized to operate on the specified resource` error message is returned. You must specify the ID of a resource group on which the RAM user has permissions or grant the RAM user permissions on the default resource group, and then call the CreateImage operation again.

rg-bp67acfmxazb4p\*\*\*\*

DiskDeviceMapping

array<object>

No

Details of the disks and snapshots from which the custom image is created. If you want to create a custom image based on a system disk snapshot and data disk snapshots, use this parameter to specify the snapshots.

object

No

Details of the disk and snapshot from which the custom image is created.

SnapshotId

string

No

The ID of the snapshot.

s-bp17441ohwkdca0\*\*\*\*

Size

integer

No

The size of disk N in the custom image. Unit: GiB. The valid values and default value of DiskDeviceMapping.N.Size vary based on the value of DiskDeviceMapping.N.SnapshotId.

-   If you leave DiskDeviceMapping.N.SnapshotId empty, DiskDeviceMapping.N.Size has the following valid values and default values:
    
    -   For basic disks, the valid values range from 5 to 2000, and the default value is 5.
    -   For other disks, the valid values range from 20 to 32768, and the default value is 20.
-   If you specify DiskDeviceMapping.N.SnapshotId, the value of DiskDeviceMapping.N.Size must be greater than or equal to the size of the specified snapshot. The default value of DiskDeviceMapping.N.Size is the size of the specified snapshot.
    

2000

Device

string

No

The device name of disk N in the custom image. Valid values:

-   The device name of the system disk must be /dev/xvda.
-   The device names of the data disks are unique and range from /dev/xvdb to /dev/xvdz in alphabetical order.

/dev/vdb

DiskType

string

No

The type of disk N in the custom image. You can specify this parameter to create the system disk of the custom image from a data disk snapshot. If you do not specify this parameter, the disk type is determined by the corresponding snapshot. Valid values:

-   system: system disk. You can specify only one snapshot to use to create the system disk in the custom image.
-   data: data disk. You can specify up to 16 snapshots to use to create data disks in the custom image.

system

Tag

array<object>

No

The tags.

object

No

The information about the tag.

key

string

No

The tag key of the custom image.

**Note** This parameter will be deprecated in the future. We recommend that you use the Tag.N.key parameter to ensure future compatibility.

null

Key

string

No

The key of tag N of the custom image. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.

KeyTest

Value

string

No

The value of tag N of the custom image. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.

ValueTest

value

string

No

The tag value of the custom image.

**Note** This parameter will be deprecated in the future. We recommend that you use the Tag.N.Value parameter to ensure future compatibility.

null

DetectionStrategy

string

No

The mode in which to check the custom image. If you do not specify this parameter, the image is not checked. Only the standard check mode is supported.

**Note** This parameter is supported for most Linux and Windows operating system versions. For information about image check items and operating system limits for image check, see [Overview of image check](/help/en/ecs/user-guide/detect-custom-images-and-repair) and [Operating system limits for image check](/help/en/ecs/user-guide/operating-system-limits-for-image-check).

Standard

Features

object

No

The attributes of the custom image.

ImdsSupport

string

No

The image metadata access mode. Valid values:

-   v1: You cannot set the image metadata access mode to security hardening when you create instances from the image.
-   v2: You can set the image metadata access mode to security hardening when you create instances from the image.

When you use a snapshot to create instances, the default value is set to 1. If you use an instance to create an image, the value of the ImdsSupport parameter is used by default.

v2

## Response parameters

Parameter

Type

Description

Example

object

ImageId

string

The image ID.

m-bp146shijn7hujku\*\*\*\*

RequestId

string

The request ID.

C8B26B44-0189-443E-9816-\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "ImageId": "m-bp146shijn7hujku****",
  "RequestId": "C8B26B44-0189-443E-9816-*******"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidImageName.Malformed

The specified Image name is wrongly formed.

The specified image name is invalid. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with acs: or aliyun. It can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-). It cannot contain http:// or https://.

400

InvalidImageName.Duplicated

The specified image name is already in use.

The specified image name is already in use.

400

InvalidDescription.Malformed

The specified description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

InvalidImageName.Malformed

Image names must be between 2 and 128 characters long, using either English or Chinese characters. The name must start with a letter or a Chinese character, and can include numbers, colons, underscores and hyphens.

The length of the image name is 2 to 128 English or Chinese characters. It must start with an uppercase letter or a Chinese character and can contain numbers, colons (:), underscores (\_), or dashes (-).

400

InvalidImageVersion.Malformed

The specified ImageVersion is wrongly formed.

The specified image version is invalid, or you are not authorized to use the snapshot.

400

IncorrectInstanceStatus

The current status of the instance does not support this operation.

The instance is in a state that does not support the current operation.

400

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

400

InvalidDevice.Malformed

The specified parameter DiskDeviceMapping.n.Device is not valid.

The specified DiskDeviceMapping.N.Device parameter is invalid.

400

MissingParameter

The input parameter SnapshotId or InstanceId or DiskDeviceMapping that is mandatory for processing this request is not supplied.

The SnapshotId, InstanceId, and DiskDeviceMapping parameters are required.

400

InvalidSize.ValueNotSupported

The specified parameter DiskDeviceMapping.n.Size beyond the permitted range.

The specified DiskDeviceMapping.N.Size parameter is out of range.

400

InvalidDevice.InUse

The specified parameter DiskDeviceMapping.n.Device has been occupied.

Device names specified in the DiskDeviceMapping.N.Device value are already in use.

400

OperationDenied

The specified parameter DiskDeviceMapping.n.SnapshotId does not contain system disk snapshot.

The specified DiskDeviceMapping.N.SnapshotID parameter does not contain a system disk snapshot ID.

400

OperationDenied

The specified parameter DiskDeviceMapping.n.SnapshotId contains two or more system disk snapshots.

The specified DiskDeviceMapping.N.SnapshotID value already contains a system disk snapshot ID.

400

InvalidDiskCategory.CreateImage

The specified diskCategory is not allowed to create image.

Disks of the specified category cannot be used to create custom images.

400

InvalidArchitecture.Malformed

The specified Architecture is wrongly formed.

The specified Architecture parameter is invalid.

400

InvalidPlatform.Malformed

The specified Platform is wrongly formed.

\-

400

OperationDenied

Not support creating system image from an encrypted snapshot/disk.

An encrypted disk or snapshot cannot be used to create custom images.

400

InvalidParameter.AllEmpty

%s

The required parameters are not specified.

400

InvalidParameter.DiskType

The specified disk type which has kms key can't convert to system disk.

\-

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

InvalidInstance.NotFoundSystemDisk

The specified instance does not have system disk.

\-

400

InvalidImageFamily.Malformed

The format of the specified image family is invalid.

The format of the specified image family is invalid.

400

ImageQuotaExceed.ImageFamily

The specified image family exceeds the maximum number of images for one image family.

\-

400

ImageFamilyQuotaExceed

The number of image families exceeds the limit in the region.

\-

400

InvalidDiskType.ValueNotSupported

The specified disk type is not supported.

The specified disk type is not supported.

400

IdempotenceParamNotMatch

Request uses a client token in a previous request but is not identical to that request.

This request and the previous request contain the same client token but different other parameters.

400

OperationDenied

Shared snapshots do not support creating images.

Shared snapshots do not support creating custom images.

400

InvalidBootMode.NotSupport

The specified parameter BootMode is not supported for current image architecture.

The current image architecture does not support setting this boot mode.

400

InvalidParameter.FeaturesImdsSupport

The specified parameter Features.ImdsSupport is not supported.

The specified parameter Features.ImdsSupport is not supported.

400

InvalidImageName.Duplicated

The specified Image name has already bean used.

\-

400

InvalidOperation.DiskCategoryUnsupported

The current category of the disk does not support this operation.

The disk type does not support the current operation.

400

AccountForbidden.CreateOrder

Order cannot be created due to abnormal account.

\-

403

IncorrectDiskStatus.NeverAttached

The specified disk has never been attached to instance.

\-

403

InvalidSnapshotId.NotReady

The current status of the DiskDeviceMapping.n.SnapshotId or SnapshotId does not support this operation.

The current disk has a snapshot being created, please try again later.

403

InvalidSnapshot.TooOld

This operation is denied because the specified snapshot by DiskDeviceMapping.n.SnapshotId or SnapshotId is created before 2013-07-15.

The operation is denied because the snapshot specified by the DiskDeviceMapping.N.SnapshotId or SnapshotId parameter was created before July 15, 2013.

403

OperationDenied

The specified snapshot is not allowed to create image.

The specified snapshot cannot be used to create images.

403

QuotaExceed.Image

The Image Quota exceeds.

The custom image quota has been used up.

403

OperationDenied

The specified snapshot is not from system disk.

The specified snapshot is not a system disk snapshot.

403

InvalidParamter.Conflict

The specified same token is trying to make requests with different parameters.

The same token is used to make requests that contain different parameters.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidAccountStatus.SnapshotServiceUnavailable

Snapshot service has not been opened yet.

The operation is not supported while the snapshot service is not activated.

403

UserNotInTheWhiteList

The user is not in the white list of create image by data disk snapshot.

You are not authorized to create an image based on data disk snapshots. Try again when you are authorized to do so.

403

IncorrectDiskStatus.Invalid

Device status is invalid, please restart instance and try again.

The device is in an invalid state. Restart the instance and try again.

403

OperationDenied.InvalidSnapshotCategory

%s

This type of snapshot does not support the operation.

403

QuotaExceed.Snapshot

The snapshot quota exceeds.

The maximum number of snapshots has been reached. Delete snapshots that are no longer needed and try again.

403

IncorrectDiskStatus.Transferring

The specified device is transferring, you can retry after the process is finished.

The specified disk is being migrated. Wait until the migration is complete and try again.

403

IncorrectDiskStatus

The current disk status does not support this operation.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

InvalidSystemSnapshot.Missing

%s

\-

403

IncorrectDiskStatus.CreatingSnapshot

A previous snapshot creation is in process.

A previous snapshot creation task is in process. Please try again later.

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

QuotaExceed.Tags

%s

The number of specified tags exceeds the upper limit. %s is a variable. An error message is dynamically returned based on call conditions.

403

InvalidSnapshotCategory.NotSupportImageCreation

The specified snapshot category does not support create image.

\-

403

TooManySnapshot.Unfinished

There are too many snapshots being created, please wait for them to be created done.

\-

403

HibernationConfigured.InstanceOperationForbidden

The operation is not permitted due to limit of the hibernation configured instance.

The operation cannot be performed due to the limitations of instances for which the instance hibernation feature is enabled.

403

SnapshotNotReady

The specified snapshot is not ready.

The specified snapshot is being created and cannot be used to create images.

403

IncorrectInstanceStatus.NeedRestart

The instance needs to be restarted after adding a disk in a shutdown status.

If you have attached disks to an instance in the Stopped state, you must start the instance before you can create a custom image from the instance.

403

QuotaExceed.ConcurrentSnapshotQuota

The number of snapshots being created for the disk %s has exceeded the concurrent quota (%s). Please wait for the previous snapshots to complete before trying again.

The number of snapshots being created for this disk has exceeded the concurrent quota. Please wait for the previous snapshots to complete before trying again.

403

InvalidOperation.SnapshotStorageLocationUnsupported

Snapshots with storage location in CloudBox do not support the current operation.

The snapshot of the storage location in the CloudBox does not support the current operation.

404

InvalidSnapshotId.NotFound

The specified SnapshotId does not exist.

The specified snapshot ID does not exist.

404

InvalidInstanceId.NotFound

The specified instance %s does not exist.

The specified instance does not exist.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

500

InternalError

The process of creating snapshot has failed due to some unknown error.

The snapshot cannot be created.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2026-01-07#workbench-doc-change-demo)

2025-04-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2025-04-29#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2025-02-27#workbench-doc-change-demo)

2025-01-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2025-01-16#workbench-doc-change-demo)

2024-12-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2024-12-05#workbench-doc-change-demo)

2024-10-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2024-10-22#workbench-doc-change-demo)

2024-06-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2024-06-12#workbench-doc-change-demo)

2024-05-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2024-05-09#workbench-doc-change-demo)

2021-06-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImage?updateTime=2021-06-17#workbench-doc-change-demo)
