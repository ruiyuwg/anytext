Creates an image template. Image templates can be used to create images.

## Operation description

## [](#usage-notes)[](#)Usage notes

You can use image templates to customize image content and create images across regions and accounts. Take note of the following items:

-   You can create only custom image templates.
-   You can specify only a public image, a custom image, a shared image, or an image family as the source image when you create an image template.
-   When you use an image template to create an image, multiple intermediate instances are created. You are charged for the intermediate instances on a pay-as-you-go basis. For more information, see [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1).

When you use `BuildContent` to specify the build content in an image template, take note of the following items:

-   The `FROM` command is deprecated. Regardless of whether you specify the `FROM` command in `BuildContent`, the system uses the source image specified by `BaseImageType` and `BaseImage`. BaseImageType specifies the type of the source image and BaseImage specifies the source image.
-   The size of BuildContent cannot exceed 16 KB. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](/help/en/ecs/user-guide/commands-supported-by-image-builder).

For more information, see [Image Builder](/help/en/ecs/user-guide/overview-33/).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateImagePipeline)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateImagePipeline)

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

ecs:CreateImagePipeline

create

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/*`

none

-   ram:CreateServiceLinkedRole

## Request parameters

Parameter

Type

Required

Description

Example

Tag

array<object>

No

The tags to add to the template.

object

No

The tag to add to the template.

Key

string

No

The key of tag N. Valid values of N: 1 to 20. You cannot specify empty strings as tag keys. The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value must be 0 to 128 characters in length. It cannot start with `acs:` or contain `http://` or `https://`.

TestValue

RegionId

string

Yes

The ID of the region. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group.

rg-bp67acfmxazb4p\*\*\*\*

AddAccount

array

No

The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. You can specify up to 20 account IDs.

long

No

The ID of Alibaba Cloud account N to which to share the image that will be created based on the image template. Valid values of N: 1 to 20.

1234567890

ToRegionId

array

No

The IDs of regions to which you want to distribute the image that is created based on the image template. You can specify up to 20 region IDs.

If you do not specify this parameter, the image is created only in the current region.

string

No

The ID of region N to which to distribute the image that will be created based on the image template. Valid values of N: 1 to 20.

If you do not specify this parameter, the image is created only in the current region.

cn-hangzhou

BaseImageType

string

Yes

The type of the source image. Valid values:

-   IMAGE: image
-   IMAGE\_FAMILY: image family
-   OSS: Object Storage Service (OSS) object

IMAGE

BaseImage

string

No

The source image.

-   If you set `BaseImageType` to IMAGE, set BaseImage to the ID of a custom image.
-   If you set `BaseImageType` to IMAGE\_FAMILY, set BaseImage to the name of an image family.
-   If you set `BaseImageType` to OSS, you do not need to specify BaseImage.

m-bp67acfmxazb4p\*\*\*\*

Name

string

No

The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

**Note** If you do not specify `Name`, the return value of `ImagePipelineId` is used.

testImagePipeline

Description

string

No

The description of the image template. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.

This is description.

ImageName`deprecated`

string

No

The name prefix of the image created based on the image template.

**Note** This parameter is no longer used. We recommend that you use ImageOptions.ImageName.

testImageName

VSwitchId

string

No

The ID of the vSwitch.

If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see [Limits and quotas](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud).

vsw-bp67acfmxazb4p\*\*\*\*

InstanceType

string

No

The instance type. You can call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) to query instance types.

If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.

ecs.g6.large

SystemDiskSize

integer

No

The system disk size of the intermediate instance. Unit: GiB. Valid values: 20 to 500.

Default value: 40.

40

InternetMaxBandwidthOut

integer

No

The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit/s. Valid values: 0 to 100.

Default value: 0.

0

DeleteInstanceOnFailure

boolean

No

Specifies whether to release the intermediate instance when the image cannot be created. Valid values:

-   true
-   false

Default value: true.

**Note** If the intermediate instance cannot be started, the instance is released by default.

true

BuildContent

string

No

The build content in the image template. The content cannot exceed 16 KB in size. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](/help/en/ecs/user-guide/commands-supported-by-image-builder).

FROM IMAGE:m-bp67acfmxazb4p\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.\*\*\*\* For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

RepairMode

string

No

The repair mode of the image template.

Valid values:

-   Standard: the standard mode.
    
    Supported check items in Linux operating systems:
    
    -   GUESTOS.CloudInit
    -   GUESTOS.Dhcp
    -   GUESTOS.Virtio
    -   GUESTOS.OnlineResizeFS
    -   GUESTOS.Grub
    -   GUESTOS.Fstab
    
    Supported check items in Windows operating systems:
    
    -   GUESTOS.Virtio
    -   GUESTOS.Update
    -   GUESTOS.Hotfix
    -   GUESTOS.Server

**Note** As the check and repair capabilities continue to improve, the number of check items may increase. For more information about check items, see [Overview of image check](/help/en/ecs/user-guide/detect-custom-images-and-repair).

null

ImageFamily`deprecated`

string

No

The family of the image created based on the image template.

**Note** This parameter is no longer used. We recommend that you use ImageOptions.ImageFamily.

null

TestContent

string

No

The test content in the image template. The content cannot exceed 16 KB in size. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](/help/en/ecs/user-guide/commands-supported-by-image-builder).

null

ImportImageOptions

object

No

The attributes and settings of the image that you want to import. If you set `BaseImageType` to OSS, you must specify this parameter.

Architecture

string

No

The system architecture of the system disk. If you specify a data disk snapshot to create the system disk of the image, use Architecture to specify the system architecture of the system disk. Valid values:

-   x86\_64
-   arm64

Default value: x86\_64.

x86\_64

OSType

string

No

The operating system type. Valid value:

-   windows
-   linux

Default value: linux.

linux

Platform

string

No

The version of the operating system. Valid values:

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
-   Other Windows

Default value: Others Linux when the operating system type is linux, and Other Windows when the operating system type is windows.

Aliyun

BootMode

string

No

The new boot mode of the image. Valid values:

-   BIOS: BIOS mode
-   UEFI: Unified Extensible Firmware Interface (UEFI) mode

Default value: BIOS. If you set Architecture to `arm64`, set this parameter to UEFI.

**Note** Before you specify this parameter, make sure that you are familiar with the boot modes supported by the image. If you specify a boot mode that is not supported by the image, ECS instances created from the image cannot start as expected. For information about the boot modes of images, see the [Boot modes of images](/help/en/ecs/user-guide/instance-startup-mode#b9caa9b8bb1wf) section of the "Best practices for ECS instance boot modes" topic.

BIOS

LicenseType

string

No

The type of the license to use to activate the operating system after the image is imported. Valid values:

-   Auto: ECS detects the operating system of the image and allocates a license to the operating system. In this mode, the system first checks whether a license allocated by an official Alibaba Cloud channel is available for the operating system version specified by `Platform`. If a license allocated by an official Alibaba Cloud channel is available for the operating system version, the system allocates the license to the imported image. If no such license is available, the Bring Your Own License (BYOL) mode is used.
-   Aliyun: The license allocated by an official Alibaba Cloud channel for the operating system version specified by `Platform` is used.
-   BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.

Default value: Auto.

Auto

DiskDeviceMappings

array<object>

No

The information of disks from which the custom images are created.

-   When the N value is 1, this parameter creates a custom image from the system disk.
-   When the N value is an integer in the range of 2 to 17, this parameter creates a custom image from a data disk.

object

No

OSSBucket

string

No

The Object Storage Service (OSS) bucket where the image file is stored.

ecsimageos

OSSObject

string

No

The name (key) of the object that the image file is stored as in the OSS bucket.

CentOS\_5.4\_32.raw

Format

string

No

The format of the source image. Valid values:

-   RAW
-   VHD
-   QCOW2

This parameter is empty by default, which indicates that the system checks the format of the image and uses the check result as the value of this parameter.

RAW

DiskImageSize

integer

No

The size of disk N in the custom image after the source image is imported.

You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the source image file. Unit: GiB. Valid values:

-   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
-   When the N value is an integer in the range of 2 to 17, this parameter creates a custom image from a data disk. Valid values: 1 to 2048.

After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.

40

Features

object

No

The attributes of the image.

NvmeSupport

string

No

Specifies whether the imported source image supports the Non-Volatile Memory Express (NVMe) protocol. Valid value:

-   supported Instances created from the image also support the NVMe protocol.
-   unsupported Instances created from the image do not support the NVMe protocol.

Default value: unsupported.

supported

RetainImportedImage

boolean

No

**Note** This parameter is in invitational preview.

false

NvmeSupport`deprecated`

string

No

Specifies whether the image created based on the image template supports the NVMe protocol.

**Note** This parameter is no longer used. We recommend that you use ImageOptions.ImageFeatures.NvmeSupport.

auto

AdvancedOptions

object

No

The advanced settings.

RetainCloudAssistant

boolean

No

Specifies whether to retain Cloud Assistant Agent that is installed during the image building process. During the image building process, the system automatically installs Cloud Assistant Agent on the intermediate instance to run commands. You can choose whether to retain Cloud Assistant Agent that is installed during the image building process in the new image. Valid values:

-   true
-   false

Default value: false.

**Note** The setting of this parameter does not affect Cloud Assistant Agent that comes with your image.

true

ImageNameSuffix

string

No

Specifies whether to disable the feature that automatically adds a suffix to the name of the image created based on the image template. Valid value:

-   disable

disable

ImageOptions

object

No

The attributes of the image created based on the image template.

ImageName

string

No

The prefix of the image name. The prefix must be 2 to 64 characters in length. The prefix must start with a letter and cannot start with `http://` or `https://`. The prefix can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

The system generates the final image name that consists of the specified prefix and the ID of the build task (`ExecutionId`) in the format of `{ImageName}_{ExecutionId}`.

testImageName

ImageFamily

string

No

The image family. The image family name must be 2 to 128 characters in length. The name must start with a letter and cannot start with acs: or aliyun. The name cannot contain http:// or https:// and can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

family

Description

string

No

The description of the image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This is description.

ImageFeatures

object

No

The feature attributes of the image.

NvmeSupport

string

No

Specifies whether the image created based on the image template supports the NVMe protocol. Valid values:

-   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
-   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
-   auto: The system automatically detects whether the image supports the NVMe protocol. The system automatically detects whether the NVMe driver is installed on your image before the new image is built. If you install or uninstall the NVMe driver during the image building process, the detection result may be incorrect. We recommend that you set the value to supported or unsupported based on the image building content.

auto

ImageTags

array<object>

No

The tags to add to the image.

object

No

Key

string

No

The key of tag N to add to the image. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N to add to the image. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

ImagePipelineId

string

The ID of the image template.

ip-2ze5tsl5bp6nf2b3\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "ImagePipelineId": "ip-2ze5tsl5bp6nf2b3****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidSourceInstance.NotFound

The specified source instance is not found.

The specified source instance is not found.

400

InvalidName.Malformed

%s

\-

400

InvalidDescription.Malformed

%s

\-

400

InvalidImageName.Malformed

%s

\-

400

InvalidBaseImageType.NotSupportedValue

%s

\-

400

InvalidSystemDiskSize.NotSupportedValue

%s

\-

400

InvalidInternetMaxBandwidthOut.NotSupportedValue

%s

\-

400

InvalidAddAccountSize.ExceededMaxNumber

%s

\-

400

InvalidToRegionIdSize.ExceededMaxNumber

%s

\-

400

InvalidBuildContent.LengthExceeded

%s

\-

400

InvalidImageTemplateCommandSize.ExceededMaxNumber

%s

\-

400

DuplicatedCommand.FROM

%s

\-

400

InvalidCommandOrder.FROM

%s

\-

400

InvalidImageTemplateCommand.NotSupported

%s

\-

400

InvalidCommandContent.RUN

%s

\-

400

InvalidCommandContent.ENV

%s

\-

400

InvalidCommandContent.WORKDIR

%s

\-

400

InvalidCommandContent.COPY

%s

\-

400

InvalidCommandContent.USER

%s

\-

400

InvalidCommandContent.FROM

%s

\-

400

InvalidCommandContent.CMD

%s

\-

400

InvalidCommandContent.ENTRYPOINT

%s

\-

400

QuotaExceed.ImagePipeline

%s.

The image template quota of your account in this region is used up.

400

NoPermission

%s.

This operation is not allowed. Apply for the permissions required to perform the operation.

400

EmptyCommandContent.LABEL

%s.

If the LABEL command exists in the template, you must specify LABEL.

400

EmptyCommandContent.ENV

%s.

If the ENV command exists in the template, you must specify ENV.

400

EmptyCommandContent.ENTRYPOINT

%s.

If the ENTRYPOINT command exists in the template, you must specify ENTRYPOINT.

400

EmptyCommandContent.CMD

%s.

If the CMD command exists in the template, you must specify CMD.

400

EmptyCommandContent.COPY

%s.

If the COPY command exists in the template, you must specify COPY.

400

EmptyCommandContent.WORKDIR

%s.

If the WORKDIR command exists in the template, you must specify WORKDIR.

400

NotEmptyCommandContent.RESTART

%s.

If the RESTART command exists in the template, you must specify RESTART.

400

EmptyCommandContent.USER

%s.

If the USER command exists in the template, you must specify USER.

400

EmptyCommandContent.RUN

%s.

If the RUN command exists in the template, you must specify RUN.

400

InvalidImage.OsTypeUnsupported

The specified base image does not support image building.

\-

400

InvalidParameter.BuildContent

%s.

The build content is invalid.

400

InvalidParameter.TestContent

%s.

The test content is invalid.

400

InvalidImageComponent.NotSupported

%s.

The specified image component is not available.

400

InvalidParameterCombination

%s.

Invalid combination of parameters.

400

InvalidParameter.RepairMode

The specified parameter RepairMode is invalid.

\-

400

InvalidImageFamily.Malformed

The format of the specified image family is invalid.

The format of the specified image family is invalid.

400

InvalidImage.ImageOwnerAliasUnsupported

The specified base image does not support distributing.

The specified base image does not support distributing.

400

InvalidParameter.ImportImageOptionsArchitecture

The specified parameter ImportImageOptions.Architecture is invalid. The correct value should be in \[%s\].

The specified parameter ImportImageOptionsArchitecture is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidParameter.ImportImageOptionsOSType

The specified parameter ImportImageOptions.OSType is invalid. The correct value should be in \[%s\].

The specified parameter ImportImageOptions.OSType is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidParameter.ImportImageOptionsBootMode

The specified parameter ImportImageOptions.BootMode is invalid. The correct value should be in \[%s\].

The specified parameter ImportImageOptions.BootMode is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidImportImageOptionsDiskDeviceMappings.LengthLimitExceeded

The length of the specified parameter ImportImageOptions.DiskDeviceMappings exceeds the limit(17).

The specified parameter ImportImageOptions.DiskDeviceMappings length exceeds the limit, the maximum length is 17.

400

InvalidParameter.ImportImageOptionsDiskDeviceMappingsOSSObject

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSObject is invalid. OSSObject supports up to 1023 characters, and cannot start with http:// or https://.

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSObject is invalid. OSSObject supports up to 1023 characters, and cannot start with "http://" or "https://".

400

InvalidParameter.ImportImageOptionsDiskDeviceMappingsOSSBucket

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSBucket is invalid. OSSBucket supports up to 63 characters, only lowercase letters, numbers, and dashes are allowed, and cannot start or end with a dash.

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSBucket is invalid. OSSBucket supports up to 63 characters, only lowercase letters, numbers, and dashes are allowed, and cannot start or end with a dash.

400

InvalidParameter.ImportImageOptionsPlatform

The specified parameter ImportImageOptions.Platform is invalid. The correct value should be in \[%s\].

The specified parameter ImportImageOptions.Platform is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidParameter.ImportImageOptionsLicenseType

The specified parameter ImportImageOptions.LicenseType is invalid. The correct value should be in \[%s\].

The specified parameter ImportImageOptions.LicenseType is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidParameter.ImportImageOptionsFeaturesNvmeSupport

The specified parameter ImportImageOptions.Features.NvmeSupport is invalid. The correct value should be in \[%s\].

The specified parameter ImportImageOptions.Features.NvmeSupport is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidParameter.NvmeSupport

The specified parameter NvmeSupport is invalid. The correct value should be in \[%s\].

The specified parameter NvmeSupport is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidParameter.ImportImageOptionsDiskDeviceMappingsFormat

The specified parameter ImportImageOptions.DiskDeviceMappings.Format is invalid. The correct value should be in \[%s\].

The specified parameter ImportImageOptions.DiskDeviceMappings.Format is invalid. The correct value can refer to the error message or the document to fill in.

400

InvalidOperation.DiskImageSizeExceeded

The disk size exceeds the limit. Please check the specified parameter ImportImageOptions.DiskDeviceMappings.DiskImageSize and ImportImageOptions.DiskDeviceMappings.OSSObject. Ensure that each of them is between 1 and 2048 in size.

The disk size exceeds the limit. Please check the specified parameter ImportImageOptions.DiskDeviceMappings.DiskImageSize and ImportImageOptions.DiskDeviceMappings.OSSObject. Ensure that each of them is between 1 and 2048 in size.

400

InvalidImageOptions.Description

The specified parameter ImageOptions.Description is invalid. The length should be between 2 to 256 characters, and cannot start with http:// or https://.

The specified parameter ImageOptions.Description is invalid. The length should be between 2 to 256 characters, and cannot start with http:// or https://.

400

InvalidImageName.Duplicated

The specified image name is already in use in the target region. Please try a different one.

The specified image name is already in use in the target region. Please try another one.

400

InvalidImage.NotSupportRepair

The specified base image does not support repair.

The specified base image does not support repair.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.N.Key is not valid. Tag keys cannot be empty or null, support up to 128 characters, cannot start with "aliyun" or "acs:", and cannot contain "http://" or "https://".

The specified Tag.N.Key is not valid. Tag keys cannot be empty or null, support up to 128 characters, cannot start with "aliyun" or "acs:", and cannot contain "http://" or "https://".

400

InvalidTagValue.Malformed

The specified Tag.N.Value is not valid. Tag values support up to 128 characters, and cannot contain "http://" or "https://".

The specified Tag.N.Value is not valid. Tag values support up to 128 characters, and cannot contain "http://" or "https://".

400

InvalidAdvancedOptions.ImageNameSuffix

The specified parameter AdvancedOptions.ImageNameSuffix is invalid. The correct value should be in \[%s\].

The specified parameter AdvancedOptions.ImageNameSuffix is invalid. The correct enumeration value can be obtained by referring to the error message.

403

ImagePipeline.NotSupportWindowsInstance

Image pipeline does not support windows instance at this time.

\-

403

InvalidOSSObject.NotAuthorized

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is not allowed to be accessed.

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is not allowed to be accessed.

403

InvalidOperation.NoPermissionCreateServiceLinkedRole

You are not authorized to create Service-linked role. The system will automatically create it when the API is called for the first time. Check your RAM policies, and ensure that you are using the correct credentials.

You are not authorized to create Service-linked role. The system will automatically create it when the API is called for the first time. Check your RAM policies, and ensure that you are using the correct credentials.

403

InvalidOSSObject.NeedRestore

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is an archived object and needs to be restored first.

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is an archived object and needs to be restored first.

403

InvalidOperation.NoRightAccessOSS

ECS service is not authorized to access your OSS. Check your RAM roles and policies, and ensure that ecs.aliyuncs.com is authorized to assume AliyunECSImageImportDefaultRole.

ECS service is not authorized to access your OSS. Check your RAM roles and policies, and ensure that "ecs.aliyuncs.com" is authorized to assume "AliyunECSImageImportDefaultRole".

403

InvalidOperation.OSSObjectIsImporting

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is importing.

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is importing.

404

InvalidImage.NotFound

%s

\-

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

ImageComponent.NotFound

%s.

The specified image component ID is not found.

404

InvalidInstanceType.NotFound

The specified instance type does not exist.

The specified InstanceType parameter does not exist.

404

InvalidVSwitchId.NotFound

The specified VSwitchId does not exist.

The specified VSwitchId does not exist

404

InvalidRegionId.NotFound

%s

The specified region ID does not exist.

404

InvalidImportImageOptionsDiskDeviceMappingsOSSObject.NotFound

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is not found in this region.

The specified ImportImageOptions.DiskDeviceMappings.OSSObject is not found in the current region.

404

MissingParameter.RepairMode

The specified parameter RepairMode is missing.

The specified parameter RepairMode is missing.

404

MissingParameter.ImportImageOptions

The specified parameter ImportImageOptions is missing.

The specified parameter ImportImageOptions is missing.

404

MissingParameter.ImportImageOptionsDiskDeviceMappingsOSSObject

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSObject is missing.

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSObject is missing.

404

MissingParameter.ImportImageOptionsDiskDeviceMappingsOSSBucket

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSBucket is missing.

The specified parameter ImportImageOptions.DiskDeviceMappings.OSSBucket is missing.

404

MissingParameter.ImageOptionsDiskDeviceMappings

The specified parameter ImportImageOptions.DiskDeviceMappings is missing.

The specified parameter ImportImageOptions.DiskDeviceMappings is missing.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-28

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImagePipeline?updateTime=2025-02-28#workbench-doc-change-demo)

2025-01-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImagePipeline?updateTime=2025-01-13#workbench-doc-change-demo)

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImagePipeline?updateTime=2024-12-26#workbench-doc-change-demo)

2024-10-10

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImagePipeline?updateTime=2024-10-10#workbench-doc-change-demo)

2023-03-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateImagePipeline?updateTime=2023-03-28#workbench-doc-change-demo)
