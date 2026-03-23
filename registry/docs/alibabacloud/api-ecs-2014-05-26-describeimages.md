Queries image resources that you can use. You can specify parameters, such as ImageId, ActionType, and Filter, in the request.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   You can query your custom images, public images provided by Alibaba Cloud, Alibaba Cloud Marketplace images, and shared images from other Alibaba Cloud accounts.
-   This is a paginated query. The response contains the total number of available images and the images on the returned page. By default,10 entries are displayed on each page.
-   When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter formats](/help/en/cli/parameter-format-overview).
-   If you set ImageOwnerAlias to system or others when you call the DescribeImages operation to query public images that are provided by Alibaba Cloud or shared images, Resource Access Management (RAM) policies are ignored in the request. For more information, see [RAM authorization](/help/en/doc-detail/25497.html).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImages)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImages)

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

ecs:DescribeImages

get

Image

`acs:ecs:{#regionId}:{#accountId}:image/*`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

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

The region ID of the image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Status

string

No

The status of the image. By default, if you do not specify this parameter, only images in the Available state are returned. Valid values:

-   Creating: The image is being created.
-   Waiting: The image is waiting to be processed.
-   Available: The image is available.
-   UnAvailable: The image is unavailable.
-   CreateFailed: The image fails to be created.
-   Deprecated: The image is no longer used.

Default value: Available. You can specify multiple values for this parameter. Separate the values with commas (,).

Available

ImageId

string

No

The ID of the image.

**Naming rules for image IDs**

-   IDs of public images are named after the operating system version numbers, architectures, languages, and release dates of the images. For example, the ID of a Windows Server 2008 R2 Enterprise 64-bit (English) public image is win2008r2\_64\_ent\_sp1\_en-us\_40G\_alibase\_20190318.vhd.
-   IDs of custom images, shared images, Alibaba Cloud Marketplace images, and community images start with m.

m-bp1g7004ksh0oeuc\*\*\*\*

ShowExpired

boolean

No

Specifies whether the subscription image has expired.

false

SnapshotId

string

No

The ID of the snapshot used to create the custom image.

s-bp17ot2q7x72ggtw\*\*\*\*

ImageName

string

No

The image name. Fuzzy match is supported.

testImageName

ImageFamily

string

No

The name of the image family. You can set this parameter to query images of the specified image family.

This parameter is empty by default.

**Note** For information about image families that are associated with Alibaba Cloud official images, see [Overview of public images](/help/en/ecs/user-guide/public-mirroring-overview/).

hangzhou-daily-update

ImageOwnerAlias

string

No

The image source. Valid values:

-   system: images that are provided by Alibaba Cloud and are not released in Alibaba Cloud Marketplace, which are different from public images in the Elastic Compute Service (ECS) console.
    
-   self: your custom images
    
-   others: shared images (images shared by other Alibaba Cloud accounts) and community images (publicly available custom images that are published by other Alibaba Cloud accounts). Take note of the following items:
    
    -   To query community images, you must set IsPublic to true.
    -   To query shared images, you must set IsPublic to false or leave IsPublic empty.
-   marketplace: images released by Alibaba Cloud or independent software vendors (ISVs) in the Alibaba Cloud Marketplace, which must be purchased together with ECS instances. Take note of the billing details of the images.
    

This parameter is empty by default.

**Note** By default, this parameter is empty, which indicates that the following images are queried: public images provided by Alibaba Cloud, custom images in your repository, shared images from other Alibaba Cloud accounts, and community images that are published by other Alibaba Cloud accounts.

self

InstanceType

string

No

The instance type for which the image can be used.

ecs.g5.large

IsSupportIoOptimized

boolean

No

Specifies whether the image can be used on I/O optimized instances.

true

IsSupportCloudinit

boolean

No

Specifies whether the image supports cloud-init.

true

OSType

string

No

The operating system type of the image. Valid values:

-   windows
-   linux

linux

Architecture

string

No

The architecture of the image. Valid values:

-   i386
-   x86\_64
-   arm64

i386

PageNumber

integer

No

The page number to return.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

1

Usage

string

No

Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:

-   instance: The image is already in use and running on an ECS instance.
-   none: The image is idle.

instance

DryRun

boolean

No

Specifies whether to perform only a dry run without performing the actual request.

-   true: performs only a dry run. The system checks whether your AccessKey pair is valid, whether RAM users are granted required permissions, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

ActionType

string

No

The scenario in which the image is used. Valid values:

-   CreateEcs: instance creation
-   ChangeOS: replacement of the system disk or OS

CreateEcs

ResourceGroupId

string

No

The ID of the resource group to which the custom image belongs. If you specify this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be returned.

**Note** Resources in the default resource group are displayed in the response regardless of whether you specify this parameter.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags list.

object

No

Information about the tag.

key

string

No

The image tag key.

\*\*

This parameter will be removed in the future. We recommend that you use the **Tag.N.Key** parameter to ensure future compatibility.\`\`

null

Key

string

No

The tag N key of the image. Valid values of N: 1 to 20.

Up to 1,000 resources that match the specified tags can be returned in the response. To query more than 1,000 resources that match the specified tags, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The tag value of the image. Valid values of N: 1 to 20.

TestValue

value

string

No

The tag value of the custom image.

**Note** This parameter will be removed in the future. To ensure future compatibility, we recommend that you use the `Tag.N.Value` parameter.

null

Filter

array<object>

No

The filter conditions used to query resources.

object

No

Filter N used to query resources.

Key

string

No

The key of filter N used to query resources. Valid values:

-   If you set this parameter to `CreationStartTime`, you can query the resources that were created after the point in time specified by `Filter.N.Value`.
-   If you set this parameter to `CreationEndTime`, you can query the resources that were created before the point in time specified by `Filter.N.Value`.
-   If you set this parameter to `NetworkType`, you can query resources of the specified network type.

CreationStartTime

Value

string

No

The value of filter N used to query resources. Valid values:

-   When `Filter.N.Key` is set to `CreationStartTime` or `CreationEndTime`, the format is `yyyy-MM-ddTHH:mmZ` in the UTC+0 time zone.
-   When `Filter.N.Key` is set to `NetworkType`, the valid values can be `vpc` or `classic`.

2017-12-05T22:40Z

IsPublic

boolean

No

Specifies whether to query published community images. Valid values:

-   true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
-   false: queries image types other than the community images type. The specific image types to be queried are determined by the ImageOwnerAlias value.

Default value: false.

false

ImageOwnerId

long

No

The ID of the Alibaba Cloud account to which the image belongs. This parameter takes effect only if you query shared images or community images.

1234567890

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

1

PageNumber

integer

The page number returned.

1

RequestId

string

The request ID.

66189103-EDB2-43E2-BB60-BFF2B62F4EB8

TotalCount

integer

The total number of images.

1

RegionId

string

The region ID of the image.

cn-hangzhou

Images

array<object>

The information of the images.

Image

object

The information of the image.

CreationTime

string

The time when the image was created.

2019-11-15T06:07:05Z

Status

string

The state of the image. Valid values:

-   UnAvailable: The image is unavailable.
-   Available: The image is available.
-   Creating: The image is being created.
-   CreateFailed: The image failed to be created.

Available

ImageFamily

string

The name of the image family.

hangzhou-daily-update

Progress

string

The creation progress of the image. Unit: percent (%).

100%

IsCopied

boolean

Indicates whether the image is a copy of another image.

false

IsSupportIoOptimized

boolean

Indicates whether the image can be used on I/O optimized instances.

true

ImageOwnerAlias

string

The source of the image. Valid values:

-   system: a public image provided by Alibaba Cloud
-   self: a custom image that you created
-   others: a shared image from another Alibaba Cloud account or a community image published by another Alibaba Cloud account
-   marketplace: an Alibaba Cloud Marketplace image

self

IsSupportCloudinit

boolean

Indicates whether the image supports cloud-init.

true

ImageVersion

string

The version of the image.

2

Usage

string

Indicates whether the image was used to create ECS instances. Valid values:

-   instance: The image was used to create one or more ECS instances.
-   none: The image was not used to create ECS instances.

none

IsSelfShared

string

Indicates whether the custom image was shared to other Alibaba Cloud accounts.

true

Description

string

The description of the image.

Archive log for Oracle

Size

integer

The size of the image. Unit: GiB.

**Note** If the image contains data disk snapshots, this parameter indicates only the size of the system disk snapshot contained in the image.

60

ResourceGroupId

string

The ID of the resource group to which the image belongs.

rg-bp67acfmxazb4p\*\*\*\*

Platform

string

The operating system platform.

Windows Server 2016

OSNameEn

string

The display name of the operating system in English.

Windows Server 2016 Data Center Edition 64bit Chinese Edition

ImageName

string

The name of the image.

testImageName

OSName

string

The display name of the operating system in Chinese.

Windows Server 2016 Datacenter Edition 64-bit (Simplified Chinese)

ImageId

string

The ID of the image.

m-bp1g7004ksh0oeuc\*\*\*\*

OSType

string

The type of the operating system. Valid values:

-   windows
-   linux

windows

IsSubscribed

boolean

Indicates whether you accepted the Terms of Service of the image service that corresponds to the product code.

false

ProductCode

string

The Alibaba Cloud Marketplace product code of the image.

test000\*\*\*\*

Architecture

string

The architecture of the image. Valid values:

-   i386
-   x86\_64
-   arm64

x86\_64

BootMode

string

The boot mode of the image. Valid values:

-   BIOS: Basic Input/Output System (BIOS)
-   UEFI: Unified Extensible Firmware Interface (UEFI)
-   UEFI-Preferred: BIOS and UEFI

For information about the image boot modes, see [Image boot modes](/help/en/ecs/user-guide/instance-startup-mode#b9caa9b8bb1wf).

BIOS

DiskDeviceMappings

array<object>

The mappings between disks and snapshots in the image.

DiskDeviceMapping

object

The mapping between the disk and the snapshot in the image.

Type

string

The type of the image.

system

ImportOSSBucket

string

The Object Storage Service (OSS) bucket that contains the imported image file.

testEcsImport

Progress

string

The progress of the image copy task.

32%

SnapshotId

string

The ID of the snapshot.

s-bp17ot2q7x72ggtw\*\*\*\*

ImportOSSObject

string

The OSS object that corresponds to the imported image file.

imageImport

Device

string

The device name of the disk. Example: /dev/xvdb.

/dev/xvda

Size

string

The size of the disk. Unit: GiB.

60

RemainTime

integer

The remaining time of the image copy task. Unit: seconds.

233

Format

string

The format of the image.

qcow2

Encrypted

string

**Note** This parameter is in invitational preview.

true

Tags

array<object>

The tags of the image.

Tag

object

Information about the tags.

TagValue

string

The tag value of the image.

Oracle

TagKey

string

The tag key of the image.

DTS

IsPublic

boolean

Indicates whether the image is publicly available. Publicly available images include public images provided by Alibaba Cloud and custom images published as community images. Valid values:

-   true: The image is publicly available.
-   false: The image is publicly unavailable.

false

ImageOwnerId

long

The ID of the Alibaba Cloud account to which the image belongs. This parameter takes effect only if you query shared images or community images.

1234567890

LoginAsNonRootSupported

boolean

Indicates whether the image supports logons of non-root users. Valid values:

-   true: The image supports logons of non-root users.
-   false: The image does not support logons of non-root users.

false

SupplierName

string

The name of the supplier that published the community image.

TestName

DetectionOptions

object

Details about the check performed on the image.

Status

string

The state of the image check task. Valid values:

-   Processing
-   Finished

Processing

Items

array<object>

The check items.

Item

object

Information about the check items.

Name

string

The name of the check item.

Nvme

Value

string

The result of the check item.

Supported

RiskLevel

string

The severity of the risk that the check item of the imported custom image has. If the check item is at risk, this parameter is returned. If the check item is not at risk, this parameter is not returned.

Valid values:

-   High: The check item is a high-risk item that may affect the startup of the instance. We recommend that you handle the risk.
-   Medium: The check item is a medium-risk item that may affect the startup performance or configurations of the instance. We recommend that you handle the risk.

High

RiskCode

string

The risk that the check item may have.

NVMe.NotInstallded

Features

object

The feature attributes of the image.

NvmeSupport

string

Indicates whether the image supports the Non-Volatile Memory Express (NVMe) protocol. Valid values:

-   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
-   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.

supported

ImdsSupport

string

The image metadata access mode. Valid values:

-   v1: You cannot set the image metadata access mode to security hardening when you create instances from the image.
-   v2: You can set the image metadata access mode to security hardening when you create instances from the image.

[Overview of instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).

v2

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "PageNumber": 1,
  "RequestId": "66189103-EDB2-43E2-BB60-BFF2B62F4EB8",
  "TotalCount": 1,
  "RegionId": "cn-hangzhou",
  "Images": {
    "Image": [
      {
        "CreationTime": "2019-11-15T06:07:05Z",
        "Status": "Available",
        "ImageFamily": "hangzhou-daily-update",
        "Progress": "100%",
        "IsCopied": false,
        "IsSupportIoOptimized": true,
        "ImageOwnerAlias": "self",
        "IsSupportCloudinit": true,
        "ImageVersion": 2,
        "Usage": "none",
        "IsSelfShared": true,
        "Description": "Archive log for Oracle",
        "Size": 60,
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "Platform": "Windows Server 2016",
        "OSNameEn": "Windows Server  2016 Data Center Edition 64bit Chinese Edition",
        "ImageName": "testImageName",
        "OSName": "Windows Server 2016 Datacenter Edition 64-bit (Simplified Chinese)\n",
        "ImageId": "m-bp1g7004ksh0oeuc****",
        "OSType": "windows",
        "IsSubscribed": false,
        "ProductCode": "test000****",
        "Architecture": "x86_64",
        "BootMode": "BIOS",
        "DiskDeviceMappings": {
          "DiskDeviceMapping": [
            {
              "Type": "system",
              "ImportOSSBucket": "testEcsImport",
              "Progress": "32%",
              "SnapshotId": "s-bp17ot2q7x72ggtw****",
              "ImportOSSObject": "imageImport",
              "Device": "/dev/xvda",
              "Size": 60,
              "RemainTime": 233,
              "Format": "qcow2",
              "Encrypted": true
            }
          ]
        },
        "Tags": {
          "Tag": [
            {
              "TagValue": "Oracle",
              "TagKey": "DTS"
            }
          ]
        },
        "IsPublic": false,
        "ImageOwnerId": 1234567890,
        "LoginAsNonRootSupported": false,
        "SupplierName": "TestName",
        "DetectionOptions": {
          "Status": "Processing",
          "Items": {
            "Item": [
              {
                "Name": "Nvme",
                "Value": "Supported",
                "RiskLevel": "High",
                "RiskCode": "NVMe.NotInstallded"
              }
            ]
          }
        },
        "Features": {
          "NvmeSupport": "supported",
          "ImdsSupport": "v2",
          "CpuOnlineUpgrade": "supported",
          "CpuOnlineDowngrade": "supported",
          "MemoryOnlineUpgrade": "unsupported",
          "MemoryOnlineDowngrade": "unsupported"
        },
        "LicenseType": ""
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

InvalidImageOwnerAlias.ValueNotSupported

The specified ImageOwnerAlias value is not supported.

The specified ImageOwnerAlias parameter is invalid.

400

InvalidParamter

Invalid Parameter.

The specified parameter is invalid.

400

InvalidTag.Mismatch

The specified Tag.n.Key and Tag.n.Value are not match.

The specified Tag.N.Key and Tag.N.Value parameters do not correspond to each other.

400

InvalidTagCount

The specified tags are beyond the permitted range.

The number of specified tags exceeds the upper limit.

400

InvalidInstanceType.ValueNotSupported

The specified instance type %s does not exist. You can use the DescribeInstanceTypes API to query the available instance types.

The specified instance type does not exist. You can use the DescribeInstanceTypes API to query the available instance types.

400

InvalidFilterValue.NetworkType

The specified networkType value in the Filter is invalid.

The specified network type value in the filter is invalid.

400

InvalidOperation.ImageOwnerIdUnsupported

The parameter "ImageOwnerId" is not supported in this context, it is only valid when querying shared images or community images.

The ImageOwnerId parameter is not supported here and is valid only when querying shared images or community images.

400

InvalidImageOwnerAlias.PublicImageUnsupported

When querying images, the parameter ImageOwnerAlias should be others while specified parameter IsPublic is true.

When querying images, if the parameter IsPublic is true, the parameter ImageOwnerAlias must be others.

403

CurrentAccount.NotSupportPublicImage

Public image is not supported for current account.

The current user cannot use public images.

404

InvalidFilterKey.NotFound

The specified Filter Key is not found.

The specified filter key is invalid.

404

InvalidFilterValue

The specified Filter Value is not valid.

The specified filter value is invalid.

404

InvalidUsage

The specified Usage is not valid.

The specified Usage parameter is invalid.

404

InvalidOSType

The specified OSType is not valid.

The specified OSType parameter is invalid.

404

InvalidArchitecture

The specified Architecture is not valid.

The Architecture parameter is invalid.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2025-04-22#workbench-doc-change-demo)

2025-03-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2025-03-14#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-25

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2024-12-25#workbench-doc-change-demo)

2024-12-20

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2024-12-20#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2024-12-17#workbench-doc-change-demo)

2024-12-16

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2024-12-16#workbench-doc-change-demo)

2024-12-05

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2024-12-05#workbench-doc-change-demo)

2024-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2024-09-26#workbench-doc-change-demo)

2023-03-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2023-03-30#workbench-doc-change-demo)

2021-07-26

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImages?updateTime=2021-07-26#workbench-doc-change-demo)
