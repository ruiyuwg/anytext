Queries the details of one or more image templates.

## Operation description

You can use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the previous call to the `DescribeImagePipelines` operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImagePipelines)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImagePipelines)

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

ecs:DescribeImagePipelines

get

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/*`

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#imagepipelineId}`

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

The region ID of the image template. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of how this parameter is set.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags of the image template.

object

No

The value of tag N of the image template. Valid values of N: 1 to 20.

Key

string

No

The key of tag N. Valid values of N: 1 to 20.

TestKey

Value

string

No

The value of tag N. Valid values of N: 1 to 20.

TestValue

Name

string

No

The name of the image template.

testImagePipeline

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page. Valid values: 1 to 500

Default value: 50.

50

ImagePipelineId

array

No

The IDs of image templates. Valid values of N: 1 to 20.

string

No

The ID of image template N. Valid values of N: 1 to 20.

ip-2ze5tsl5bp6nf2b3\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. For information about how to use the return value, see the "Usage notes" section of this topic.

AAAAAdDWBF2\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of image templates returned.

1

MaxResults

integer

The number of entries per page.

50

ImagePipeline

array<object>

Details of the image templates.

ImagePipelineSet

object

CreationTime

string

The time when the image template was created.

2020-11-24T06:00:00Z

DeleteInstanceOnFailure

boolean

Indicates whether to release the intermediate instance when the image fails to be created.

true

InstanceType

string

The instance type.

ecs.g6.large

InternetMaxBandwidthOut

integer

The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit/s.

0

ImagePipelineId

string

The ID of the image template.

ip-2ze5tsl5bp6nf2b3\*\*\*\*

VSwitchId

string

The ID of the vSwitch in the virtual private cloud (VPC).

vsw-bp67acfmxazb4p\*\*\*\*

SystemDiskSize

integer

The system disk size of the intermediate instance. Unit: GiB

40

Description

string

The description of the image template.

This is description.

BaseImage

string

The source image.

-   When `BaseImageType` is set to IMAGE, the value of this parameter is the ID of a custom image.
-   When `BaseImageType` is set to IMAGE\_FAMILY, the value of this parameter is the name of an image family.

m-bp67acfmxazb4p\*\*\*\*

ResourceGroupId

string

The ID of the resource group.

rg-bp67acfmxazb4p\*\*\*\*

ImageName`deprecated`

string

The name prefix of the image created based on the image template.

**Note** This parameter is no longer used. We recommend that you use ImageOptions.ImageName.

testImageName

BaseImageType

string

The type of the source image. Valid values:

-   IMAGE: custom image
-   IMAGE\_FAMILY: image family

IMAGE

Name

string

The name of the image template.

testImagePipeline

BuildContent

string

The content of the image template.

FROM IMAGE:m-bp67acfmxazb4p\*\*\*\*

Tags

array<object>

The tags of the image template.

Tag

object

TagValue

string

The value of the tag.

TestValue

TagKey

string

The key of the tag.

TestKey

ToRegionIds

array

The IDs of regions to which to distribute the image that will be created based on the image template.

ToRegionId

string

The ID of the region to which to distribute the image that will be created based on the image template.

\["cn-hangzhou"\]

AddAccounts

array

The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.

AddAccount

string

The ID of the Alibaba Cloud account to which to share the image that will be created based on the image template.

\["1234567890"\]

RepairMode

string

The repair mode of the image template.

Valid values:

-   Standard: the standard mode

null

TestContent

string

The content of the image test template.

null

ImageFamily`deprecated`

string

The family of the image created based on the image template.

**Note** This parameter is no longer used. We recommend that you use ImageOptions.ImageFamily.

null

NvmeSupport`deprecated`

string

Indicates whether the image created based on the image template supports the Non-Volatile Memory Express (NVMe) protocol.

**Note** This parameter is no longer used. We recommend that you use ImageOptions.ImageFeatures.NvmeSupport.

auto

ImportImageOptions

object

The attributes and settings of the imported image.

Architecture

string

The operating system architecture. Valid values:

-   x86\_64
-   arm64

x86\_64

OSType

string

The operating system type. Valid values:

-   windows: Windows operating systems
-   linux: Linux operating systems

linux

Platform

string

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

Aliyun

BootMode

string

The boot mode of the image. Valid values:

-   BIOS: BIOS mode
-   UEFI: Unified Extensible Firmware Interface (UEFI) mode

BIOS

LicenseType

string

The type of the license to use to activate the operating system after the image is imported. Valid values:

-   Auto: ECS detects the operating system of the image and allocates a license to the operating system In this mode, the system first checks whether a license allocated by an official Alibaba Cloud channel is specified in the `Platform`. If a license allocated by an official Alibaba Cloud channel is specified, the system allocates the license to the imported image. If no such license is specified, the Bring Your Own License (BYOL) mode is used.
-   Aliyun: The license allocated through an official Alibaba Cloud channel is used for the operating system distribution specified by `Platform`.
-   BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.

Auto

DiskDeviceMappings

array<object>

The information of disks from which the custom images are created.

-   When the value of N is 1, a custom image is created from the system disk.
-   When the value of N is an integer in the range of 2 to 17, a custom image is created from a data disk.

DiskDeviceMapping

object

OSSBucket

string

The Object Storage Service (OSS) bucket where the image file is stored.

ecsimageos

OSSObject

string

The name (key) of the object that the image file is stored as in the OSS bucket.

CentOS\_5.4\_32.raw

Format

string

The format of the image. Valid values:

-   RAW
-   VHD
-   QCOW2

RAW

DiskImageSize

integer

The size of disk N in the custom image after the image is imported.

You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the source image file. Unit: GiB. Valid values:

-   When N is set to 1, this parameter indicates the size of the system disk in the custom image. Valid values: 1 to 2048.
-   When N is set to an integer in the range of 2 to 17, this parameter indicates the size of a data disk in the custom image. Valid values: 1 to 2048.

After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.

40

Features

object

The attributes of the custom image.

NvmeSupport

string

Indicates whether the image supports the NVMe protocol. Valid values:

-   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
-   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.

supported

RetainImportedImage

boolean

**Note** This parameter is in invitational preview.

false

AdvancedOptions

object

The advanced settings.

RetainCloudAssistant

boolean

Indicates whether to retain Cloud Assistant. During the image building process, the system automatically installs Cloud Assistant in the intermediate instance to run commands. You can choose whether to retain Cloud Assistant in the new image created based on the image template. Valid values:

-   true: retains Cloud Assistant.
-   false: does not retain Cloud Assistant.

**Note** This parameter does not affect Cloud Assistant that comes with your image.

true

ImageNameSuffix

string

Indicates whether to disable the feature that automatically adds a suffix to the name of the image created based on the image template. Valid value:

-   disable

disable

ImageOptions

object

The attributes of the image created based on the image template.

ImageName

string

The prefix of the image name.

imageName

ImageFamily

string

The image family.

family

Description

string

The description of the image.

description.

ImageFeatures

object

The feature attributes of the image.

NvmeSupport

string

Indicates whether the image supports the NVMe protocol. Valid values:

-   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
-   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
-   auto: The system automatically checks whether the image supports the NVMe protocol. The system automatically checks whether the NVMe driver is installed on your image before the image is built. If you install or uninstall the NVMe driver during the image building task, the check result may be incorrect. We recommend that you set the value to supported or unsupported based on the image building content.

auto

ImageTags

array<object>

The tags of the image.

ImageTag

object

TagKey

string

The tag key of the image.

testKey

TagValue

string

The tag value of the image.

testValue

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAdDWBF2****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "MaxResults": 50,
  "ImagePipeline": {
    "ImagePipelineSet": [
      {
        "CreationTime": "2020-11-24T06:00:00Z",
        "DeleteInstanceOnFailure": true,
        "InstanceType": "ecs.g6.large",
        "InternetMaxBandwidthOut": 0,
        "ImagePipelineId": "ip-2ze5tsl5bp6nf2b3****",
        "VSwitchId": "vsw-bp67acfmxazb4p****",
        "SystemDiskSize": 40,
        "Description": "This is description.",
        "BaseImage": "m-bp67acfmxazb4p****",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "ImageName": "testImageName",
        "BaseImageType": "IMAGE",
        "Name": "testImagePipeline",
        "BuildContent": "FROM IMAGE:m-bp67acfmxazb4p****",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        },
        "ToRegionIds": {
          "ToRegionId": [
            [
              "cn-hangzhou"
            ]
          ]
        },
        "AddAccounts": {
          "AddAccount": [
            [
              1234567890
            ]
          ]
        },
        "RepairMode": null,
        "TestContent": null,
        "ImageFamily": null,
        "NvmeSupport": "auto",
        "ImportImageOptions": {
          "Architecture": "x86_64",
          "OSType": "linux",
          "Platform": "Aliyun",
          "BootMode": "BIOS",
          "LicenseType": "Auto",
          "DiskDeviceMappings": {
            "DiskDeviceMapping": [
              {
                "OSSBucket": "ecsimageos",
                "OSSObject": "CentOS_5.4_32.raw",
                "Format": "RAW",
                "DiskImageSize": 40
              }
            ]
          },
          "Features": {
            "NvmeSupport": "supported",
            "ImdsSupport": ""
          },
          "RetainImportedImage": false,
          "RetentionStrategy": "",
          "ImageName": "",
          "Description": "",
          "RoleName": "",
          "ImportImageTags": {
            "ImportImageTag": [
              {
                "Key": "",
                "Value": ""
              }
            ]
          }
        },
        "AdvancedOptions": {
          "RetainCloudAssistant": true,
          "ImageNameSuffix": "disable"
        },
        "ImageOptions": {
          "ImageName": "imageName",
          "ImageFamily": "family",
          "Description": "description.",
          "ImageFeatures": {
            "NvmeSupport": "auto"
          },
          "ImageTags": {
            "ImageTag": [
              {
                "TagKey": "testKey",
                "TagValue": "testValue"
              }
            ]
          }
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidImagePipelineIdSize.ExceededMaxNumber

%s

The number of specified ImagePipelineId.N parameters exceeds the upper limit. Valid values of N: 1 to 20.

400

InvalidName.Malformed

%s

\-

403

Invalid.NextToken

The specified NextToken is not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-28

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImagePipelines?updateTime=2025-02-28#workbench-doc-change-demo)

2025-01-13

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImagePipelines?updateTime=2025-01-13#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImagePipelines?updateTime=2024-12-17#workbench-doc-change-demo)

2024-10-10

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImagePipelines?updateTime=2024-10-10#workbench-doc-change-demo)
