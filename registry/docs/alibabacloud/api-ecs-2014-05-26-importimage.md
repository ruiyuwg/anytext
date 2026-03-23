Imports an on-premise image to Elastic Compute Service (ECS). The imported image exists as a custom image in the destination region. You can use the imported image to create ECS instances by calling the RunInstances operation or replace the system disk of an ECS instance by calling the ReplaceSystemDisk operation.

## Operation description

### [](#usage-notes)[](#)Usage notes

Take note of the following items:

-   Before you import an image, you must upload the image to an Object Storage Service (OSS) bucket. For more information, see [Upload objects](/help/en/oss/getting-started/upload-objects-16).
    
-   In specific scenarios, you may want to create a custom image based on the operating system data of a source server, import the image to Alibaba Cloud, and then create an ECS instance from the image. The source server can be a physical server, a virtual machine, or a cloud host. If the virtio driver is not installed on the source server, the created ECS instance may be unable to start. To prevent this issue, verify that the virtio driver is installed on the source server before you import the image to Alibaba Cloud. For more information, see [Install the virtio driver](/help/en/ecs/user-guide/install-the-virtio-driver).
    
-   Before you import images for the first time, you must use Resource Access Management (RAM) to authorize ECS to access your OSS buckets. If ECS is not authorized to access your OSS buckets, the `NoSetRoletoECSServiceAccount` or `InvalidOperation.CloudBoxImageImportRoleRequired` error code is returned when you call the ImportImage operation. The authorization configuration varies based on whether the image files are imported from a cloud box.
    
    -   **If the image files are not imported from a cloud box**, you can complete the authorization on the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/?spm=5176.2020520101image.0.0.2ffa4df57kSoHX#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunECSImageImportDefaultRole%22%2C%20%22TemplateId%22%3A%20%22ECSImportRole%22%7D%2C%20%22request2%22%3A%20%7B%22RoleName%22%3A%20%22AliyunECSImageExportDefaultRole%22%2C%20%22TemplateId%22%3A%20%22ECSExportRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//ecs.console.alibabacloud.com/%22%2C%20%22Service%22%3A%20%22ECS%22%7D) page of the RAM console. You can also complete the authorization by using a RAM role and RAM policies. The following example shows the policies and permissions required for specific steps in the authorization procedure. For more information, see [Control access to ECS resources by using RAM users](/help/en/ecs/user-guide/control-access-to-resources-by-using-ram-users).
        
        1.  Create a RAM role named `AliyunECSImageImportDefaultRole`. You must use this exact role name. Otherwise, the image cannot be imported. Configure the following trust policy for the role:
            
            ```
            {
            	"Statement": [
            	{
            		"Action": "sts:AssumeRole",
            		"Effect": "Allow",
            		"Principal": {
            		"Service": [
            			"ecs.aliyuncs.com"
            		]
            		}
            	}
            ],
            	"Version": "1"
            }
            ```
            
        2.  Attach the `AliyunECSImageImportRolePolicy` system policy to the RAM role. You can also create a custom policy that contains the following content and attach the policy to the role:
            
            ```
            
            {
            	"Version": "1",
            	"Statement": [
            	{
            		"Action": [
            				"oss:GetObject",
            				"oss:GetBucketLocation",
            				"oss:GetBucketInfo"
            	],
            			"Resource": "*",
            			"Effect": "Allow"
            			}
            	]
            }
            ```
            
    -   **If the image files are imported from a cloud box**, you can complete the authorization on the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fecs.console.alibabacloud.com%2F%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunECSCloudBoxImageImportDefaultRole%22%2C%22TemplateId%22%3A%22AliyunECSCloudBoxImageImportDefaultRole%22%7D%5D%2C%22Service%22%3A%22ECS%22%7D%5D%7D) page of the RAM console. You can also complete the authorization by using a RAM role and RAM policies. The following example shows the policies and permissions required for specific steps in the authorization procedure. For more information, see [Control access to ECS resources by using RAM users](/help/en/ecs/user-guide/control-access-to-resources-by-using-ram-users).
        
        1.  Create a RAM role named `AliyunECSCloudBoxImageImportDefaultRole`. You must use this exact role name. Otherwise, the image cannot be imported. Configure the following trust policy for the role:
            
            ```
            {
            	"Statement": [
            	{
            		"Action": "sts:AssumeRole",
            		"Effect": "Allow",
            		"Principal": {
            		"Service": [
            			"ecs.aliyuncs.com"
            		]
            		}
            	}
            ],
            	"Version": "1"
            }
            ```
            
        2.  Attach the `AliyunECSCloudBoxImageImportRolePolicy` system policy to the RAM role. You can also create a custom policy that contains the following content and attach the policy to the role:
            
            ```
            
            {
            	"Version": "1",
            	"Statement": [
            	{
            		"Action": [
            				"oss-cloudbox:GetObject",
            				"oss-cloudbox:GetBucketLocation",
            				"oss-cloudbox:GetBucketInfo"
            	],
            			"Resource": "*",
            			"Effect": "Allow"
            			}
            	]
            }
            ```
            
-   You cannot delete an image that is being imported. However, you can call the [CancelTask](/help/en/ecs/api-canceltask) operation to cancel the image import task.
    
-   You can import an image only to the same region as the OSS bucket to which the image file is uploaded.
    
-   The valid values of N in `DiskDeviceMapping.N` range from 1 to 17. When N is set to 1, the disk is a system disk. When N is set to a value from 2 to 17, the disk is a data disk. When N is set to a value greater than 17, parameters prefixed with DiskDeviceMapping.N are ignored.
    
-   When you set `Architecture` to `arm64` or when you set `Platform` to `CentOS Stream`, `Anolis`, `AlmaLinux`, `UOS`, `Kylin`, or `Rocky Linux`, take note of the following items:
    
    -   To ensure that the password can be set or the key pair can be modified for an imported image, make sure that the image meets the following requirements before you import it:
        
        -   The kernel of the operating system supports the `CONFIG_FW_CFG_SYSFS` feature. By default, Linux community kernel 4.6 and later and CentOS kernel 3.10.0-826.el7 and later support the CONFIG\_FW\_CFG\_SYSFS feature. You can run the `grep -nr CONFIG_FW_CFG_SYSFS /boot/config-$(uname -r)` command on the source server of the image. If the command output contains `CONFIG_FW_CFG_SYSFS=y`, the kernel of the image supports the `CONFIG_FW_CFG_SYSFS` feature.
        -   Alibaba Cloud cloud-init of the latest version is installed on the operating system. If the version of cloud-init is 19.1, the minor version must be 19.1.3 or later. If the version of cloud-init is 0.7.6a in some early versions of operating systems, the minor version must be 0.7.6a15 or later. For more information, see [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init).
        -   The operating system supports the SHA-512 encryption algorithm.
    -   If you want an imported image to support the resizing of disks and file systems, make sure that the image meets the following requirements before you import it:
        
        -   The kernel version of the operating system is later than 3.6.
        -   The image supports the growpart command. To support this command, you must install the `cloud-utils-growpart` package. The methods of installing the package vary based on operating systems. For more information, see [Extend the partitions and file systems of disks on a Linux instance](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-disks-on-a-linux-instance).
        -   The image supports the resize2fs command. To support this command, you must install the `e2fsprogs` package. By default, the package is installed on the operating system. If the package is not installed, install it.
        -   Alibaba Cloud cloud-init of the latest version is installed on the operating system. If the version of cloud-init is 19.1, the minor version must be 19.1.3 or later. If the version of cloud-init is 0.7.6a in some early versions of operating systems, the minor version must be 0.7.6a15 or later. For more information, see [Install cloud-init](/help/en/ecs/user-guide/install-cloud-init).
-   If the image that you want to import uses the Arm64 architecture, configure the real-time clock (RTC) to use the Coordinated Universal Time (UTC) time standard. For more information, see [Linux time and time zones](/help/en/ecs/linux-time-and-time-zones).
    
-   When you import images, we recommend that you specify DetectionStrategy. This way, you can optimize the images based on the image check results. For more information, see [Overview of image check](/help/en/ecs/user-guide/detect-custom-images-and-repair).
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ImportImage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ImportImage)

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

ecs:ImportImage

update

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/*`

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

The region ID of the source image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ImageName

string

No

The image name. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `acs:` or `aliyun`. The name cannot contain `http://` or `https://`. The name can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-).

ImageTestName

Description

string

No

The image description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

TestDescription

Architecture

string

No

The system architecture. Valid values:

-   i386
-   x86\_64
-   arm64

Default value: x86\_64.

x86\_64

OSType

string

No

The operating system platform. Valid values:

-   windows
-   linux

Default value: linux.

linux

Platform

string

No

The operating system distribution. Valid values:

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

Aliyun

BootMode

string

No

The boot mode of the image. Valid values:

-   BIOS
-   UEFI

Default value: BIOS. If you set `Architecture` to arm64, set this parameter to UEFI.

**Note** Make sure that you are aware of the boot modes supported by the specified image, as thehe modified boot mode needs to be supported by the image. This way, instances that use this image can start.

BIOS

RoleName

string

No

The name of the RAM role used to import the image.

AliyunECSImageImportDefaultRole

LicenseType

string

No

The type of the license used to activate the operating system after the image is imported. Valid values:

-   Auto: ECS checks the operating system of the image and allocates a license to the operating system. ECS first checks whether the operating system distribution specified by `Platform` has a license allocated through an official Alibaba Cloud channel. If yes, the allocated license is used. If no, the license that comes with the source operating system is used.
-   Aliyun: The license allocated through an official Alibaba Cloud channel is used for the operating system distribution specified by `Platform`.
-   BYOL: The license that comes with the source operating system is used. In this case, make sure that your license key is eligible for use in Alibaba Cloud.

Default value: Auto.

Auto

ResourceGroupId

string

No

The ID of the resource group to which to assign the image.

rg-bp67acfmxazb4p\*\*\*\*

DiskDeviceMapping

array<object>

No

Details about the custom images.

object

No

The information about the custom image.

DiskImSize

integer

No

The size of disk N in the custom image. Unit: GiB.

You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the imported image file. Unit: GiB. Valid values:

-   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
-   When the N value is an integer in the range of 2 to 17, this parameter specifies the size of a data disk in the custom image. Valid values: 1 to 2048.

After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.

**Note** This parameter will be removed in the future. We recommend that you use `DiskDeviceMapping.N.DiskImageSize` to ensure future compatibility.

80

Device

string

No

The device name of disk N in the custom image.

**Note** This parameter will be removed in the future. We recommend that you do not use this parameter to ensure future compatibility.

null

OSSBucket

string

No

The Object Storage Service (OSS) bucket where the image file is stored.

**Note** Before you import images for the first time, you must use RAM to authorize ECS to access your OSS buckets. If ECS is not authorized to access your OSS buckets, the `NoSetRoletoECSServiceAcount` error code is returned when you call the ImportImage operation. For more information, see **Usage notes**.

ecsimageos

Format

string

No

The format of the source image. Valid values:

-   RAW
-   VHD
-   QCOW2
-   VMDK (invitational preview)

This parameter is empty by default, which indicates that the system checks the image format and uses the check result as the value of this parameter.

QCOW2

OSSObject

string

No

The name (key) of the object that the image file is stored as in the OSS bucket.

CentOS\_5.4\_32.raw

DiskImageSize

integer

No

The size of disk N in the custom image after the source image is imported.

You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the imported image file. Unit: GiB. Valid values:

-   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
-   When the N value is an integer in the range of 2 to 17, this parameter specifies the size of a data disk in the custom image. Valid values: 1 to 2048.

After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.

80

Tag

array<object>

No

The image tags.

object

No

The information about the tags.

Key

string

No

The key of tag N of the image. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N of the image. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.

TestValue

DetectionStrategy

string

No

The mode in which to check the image. If you do not specify this parameter, the image is not checked. Only the standard check mode is supported.

**Note** This parameter is supported for most Linux and Windows operating system versions. For more information about image check items and operating system limits for image check, see [Overview](/help/en/ecs/user-guide/detect-custom-images-and-repair) and [Operating system limits for image check](/help/en/ecs/user-guide/operating-system-limits-for-image-check).

Standard

StorageLocationArn

string

No

The Alibaba Cloud Resource Name (ARN) of the cloud box, which is used to uniquely identify a storage location in the cloud.

**Note** Specify this parameter only if you import an image from OSS on CloudBox. Otherwise, you do not need to specify this parameter. For more information, see [What is OSS on CloudBox?](/help/en/oss/user-guide/oss-deployed-in-cloudbox-overview)

The ARN must be in the following format: `arn:acs:cloudbox:{RegionId}:{AliUid}:cloudbox/{CloudBoxId}`. Replace `{RegionId}` with the region ID of the cloud box, `{AliUid}` with the ID of the Alibaba Cloud account to which the cloud box belongs, and `{CloudBoxId}` with the ID of the cloud box.

arn:acs:cloudbox:cn-hangzhou:123456:cloudbox/cb-xx\*\*\*123

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

Features

object

No

The attributes of the image.

NvmeSupport

string

No

Specifies whether the image supports the Non-Volatile Memory Express (NVMe) protocol. Valid values:

-   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
-   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.

supported

ImdsSupport

string

No

The metadata access mode version of the image. Valid values:

-   v1: You cannot set the metadata access mode to security hardening when you create instances from the image.
-   v2: You can set the metadata access mode to security hardening when you create instances from the image.

Default value: v1.

v2

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

ImageId

string

The image ID.

m-bp67acfmxazb4p\*\*\*\*

TaskId

string

The image import task ID.

t-bp67acfmxazb4p\*\*\*\*

RegionId

string

The region ID.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "ImageId": "m-bp67acfmxazb4p****",
  "TaskId": "t-bp67acfmxazb4p****",
  "RegionId": "cn-hangzhou"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

UnsupportedSuffix.OSSObject

The specified OSS object suffix is not supported.

\-

400

MissingParameter

An input parameter "RegionId" that is mandatory for processing the request is not supplied.

\-

400

MissingParameter

An input parameter "DiskDeviceMapping.1.OSSBucket" that is mandatory for processing the request is not supplied.

\-

400

MissingParameter

An input parameter "DiskDeviceMapping.1.OSSObject" that is mandatory for processing the request is not supplied.

An input parameter "DiskDeviceMapping.1.OSSObject" that is mandatory for processing the request is not supplied.

400

InvalidImageName.Malformed

The specified Image name is wrongly formed.

The specified image name is invalid. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with acs: or aliyun. It can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-). It cannot contain http:// or https://.

400

InvalidOSSObject.Malformed

The specified OSS object is wrongly formed.

The specified OSS object is invalid.

400

InvalidOSSBucket.Malformed

The specified OSS bucket is wrongly formed.

\-

400

InvalidOSSObject.Size

The specified OSS object size is zero.

The specified OSSObject is empty

400

InvalidDescription.Malformed

The specified Image description is wrongly formed.

The image description is invalid.

400

InvalidArchitecture.Malformed

The specified Architecture is wrongly formed.

The specified Architecture parameter is invalid.

400

InvalidPlatform.Malformed

The specified Platform is wrongly formed.

\-

400

InvalidOSType.Malformed

The specified OSType is wrongly formed.

The specified OS type is invalid.

400

InvalidImageName.Duplicated

The destination image is exist.

The specified image name already exists.

400

InvalidImageSize

%s

The specified image size is invalid.

400

InvalidDataDiskSize

The specified DiskDeviceMapping.N.DiskImSize should be in the specified range.

The specified DiskDeviceMapping.N.DiskImSize parameter is invalid.

400

InvalidImageFormat.Malformed

The specified Image Format is wrongly formed.

The specified image format is invalid.

400

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

400

InvalidRegion.NotSupport

The specified region does not support image import or export.

The specified region does not support the operation.

400

InvalidOSSBucket.NotFound

The specified OSS bucket does not exist in this region.

The specified bucket does not exist.

400

InvalidOSSObject.NotFound

The specified OSS object does not exist in this region.

The specified OSS object does not exist.

400

InvalidOSSObject.NeedRestore

The specified OSS object is a archive object, need restore first.

\-

400

InvalidOSSBucket.NotMatched

The specified OSS bucket is incorrect, %s.

The specified DiskDeviceMapping.N.OSSBucket parameter is invalid. For more information, see the return value of the %s placeholder in the error message.

400

InvalidLicenseType.NotSupported

The specified LicenseType is not supported.

\-

400

InvalidLicenseType.BYOLOnly

Only BYOL LicenseType is supported for the current platform provided.

\-

400

InvalidOSSBucket.FlowLimit

%s

\-

400

InvalidImageFormat.RegionNotSupported

The specified image format is not supported in current region.

\-

400

InvalidBootMode.Malformed

The specified parameter "BootMode" is malformed.

\-

400

InvalidParameter.DetectionStrategy

The specified parameter DetectionStrategy is invalid.

\-

400

InvalidBootMode.NotSupport

The specified parameter BootMode is not supported for current image architecture.

The current image architecture does not support setting this boot mode.

400

DRYRUN.SUCCESS

This request is a dryrun request with successful result.

The request is checked and determined as valid.

400

InvalidClientToken.Malformed

The specified parameter clientToken is not valid.

\-

400

InvalidParameter.FeaturesImdsSupport

The specified parameter Features.ImdsSupport is not supported.

The specified parameter Features.ImdsSupport is not supported.

400

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

403

ImageIsImporting

The specified Image is importing.

The specified image is being imported and cannot be managed.

403

QuotaExceed.Image

The Image Quota exceeds.

The custom image quota has been used up.

403

ImportImageFailed

Importing image is failed, Please contact the administrator.

The image cannot be imported. Contact your system administrator.

403

UserNotInTheWhiteList

The user is not in the white list of importing image.

The user is not authorized to import image.

403

NoSetRoletoECSServiceAcount

ECS service account Have no right to access your OSS.please attach a role of access your oss to ECS service account.

The official ECS website service account does not have permissions to access your specified OSS bucket and object.

403

InvalidParameter.Malformed

The specified parameter "DiskDeviceMapping.n.Device " is not valid.

\-

403

MissingParameter.DiskDeviceMapping

The specified parameter DiskDeviceMapping is not supplied.

A parameter that starts with DiskDeviceMapping must be specified.

403

InvalidOSS.NotAuthorized

The specified OSS bucket or object is not allowed to access.

You do not have the permission to access the specified OSS bucket and object.

403

InvalidBlockSize.NotSupport

%s

\-

403

InvalidImageFormat.Malformed

%s

\-

403

ImageCheckUnsupported.WindowsImage

Image check is unsupported for windows image.

\-

403

InvalidVHDImage.IncorrectSize

The specified size of the VHD image does not meet the 'header.MaxTableEntries \* header.BlockSize' specification.

The size of the specified VHD image does not meet the header.MaxTableEntries × header.BlockSize size limit.

403

InvalidOSSBucket.EncryptUnsupported

Accessing objects from encrypted OSS bucket is not supported.

You cannot read objects from encrypted OSS buckets.

403

InvalidArchitecture.PlatformUnsupported

The OS platform you selected does not support the specified architecture.

The selected operating system does not support the specified architecture type.

403

InvalidAccountStatus.OSSDisabled

OSS is disabled due to invalid account status.

\-

403

InvalidStorageLocation.NotFound

The specified cloud box storage location %s could not be found.

The specified cloud box storage location could not be found.

403

InvalidOperation.CloudBoxImageImportRoleRequired

The role for cloud box image import is not set to the ECS service.

The role for cloud box image import is not set to the ECS service.

403

InvalidOperation.CloudBoxImageImportUnsupported

Importing cloud box images is not supported.

Importing cloud box images is not supported.

403

TagKey.Duplication

The TagKey has duplication with others, case-insensitive.

Duplicate values exist in the specified Tag.N.Key parameter. The value of this parameter is not case sensitive. Check whether duplicate parameter values are passed in.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2025-05-13#workbench-doc-change-demo)

2025-03-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2025-03-14#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2024-12-17#workbench-doc-change-demo)

2024-12-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2024-12-05#workbench-doc-change-demo)

2024-11-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2024-11-14#workbench-doc-change-demo)

2024-10-09

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2024-10-09#workbench-doc-change-demo)

2024-06-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2024-06-12#workbench-doc-change-demo)

2023-08-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2023-08-23#workbench-doc-change-demo)

2023-05-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2023-05-26#workbench-doc-change-demo)

2023-04-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2023-04-19#workbench-doc-change-demo)

2023-04-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2023-04-12#workbench-doc-change-demo)

2022-07-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2022-07-11#workbench-doc-change-demo)

2021-06-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ImportImage?updateTime=2021-06-17#workbench-doc-change-demo)
