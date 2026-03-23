Queries available custom images that are most recently created in a specific image family.

## Operation description

## [](#usage-notes)[](#)Usage notes

If no available image exists in a specific image family, the response is empty.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageFromFamily)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageFromFamily)

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

ecs:DescribeImageFromFamily

get

\*All Resources

`*`

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

The ID of the region in which to create the custom image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ImageFamily

string

Yes

The family name of the image that you want to use to create the instances.

You can configure image families for custom images, public images, community images, and shared images. For more information, see [Overview of image families](/help/en/ecs/user-guide/overview-37).

hangzhou-daily-update

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

Image

object

The image information.

CreationTime

string

The time when the image was created.

2018-01-10T01:01:10Z

Status

string

The state of the image. Valid values:

-   UnAvailable
-   Available
-   Creating
-   CreateFailed

Available

ImageFamily

string

The name of the image family.

testImageFamily

Progress

string

The image creation progress in percentage.

100

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

The alias of the image owner. Valid values:

-   system: public images provided by Alibaba Cloud
-   self: your custom images
-   others: shared images from other Alibaba Cloud accounts
-   marketplace: Alibaba Cloud Marketplace images

self

IsSupportCloudinit

boolean

Indicates whether cloud-init is supported.

true

ImageVersion

string

The image version.

2

Usage

string

Indicates whether the image has been used to create ECS instances. Valid values:

-   instance: The image was used to create one or more ECS instances.
-   none: The image was not used to create ECS instances.

none

IsSelfShared

string

Indicates whether the custom image was shared to other Alibaba Cloud accounts.

true

Description

string

The description of the volume.

testDescription

Size

integer

The size of the image. Unit: GiB.

80

Platform

string

The operating system.

Aliyun

ImageName

string

The name of the image.

testImageName

OSName

string

The display name of the operating system in Chinese.

Alibaba Cloud Linux 2.1903

ImageId

string

The image ID.

m-bp1g7004ksh0oeuc\*\*\*\*

OSType

string

The type of the operating system. Valid values:

-   windows
-   linux

linux

IsSubscribed

boolean

Indicates whether you have subscribed to the service terms of the image product corresponding to the image product code.

false

ProductCode

string

The product code of the Alibaba Cloud Marketplace image.

jxsc00\*\*\*\*

Architecture

string

The architecture of the image. Valid values:

-   i386
-   x86\_64

x86\_64

DiskDeviceMappings

array<object>

The mappings between the disk and the snapshot in the image.

DiskDeviceMapping

object

Type

string

The image type.

custom

ImportOSSBucket

string

The OSS bucket that contains the imported image file.

testEcsImport

SnapshotId

string

The snapshot ID.

s-bp17ot2q7x72ggtw\*\*\*\*

ImportOSSObject

string

The OSS object to which the imported image belongs.

imageImport

Size

string

The size of the disk. Unit: GiB.

80

Device

string

The device name of the disk. Example: /dev/xvdb.

**Note** This parameter will be removed in the future. To ensure compatibility, we recommend that you use other parameters.

/dev/xvdb

Format

string

The image format.

qcow2

Tags

array<object>

The tags of the image.

Tag

object

TagValue

string

The tag value of the custom image.

TestValue

TagKey

string

The tag key of the custom image.

TestKey

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Image": {
    "CreationTime": "2018-01-10T01:01:10Z",
    "Status": "Available",
    "ImageFamily": "testImageFamily",
    "Progress": 100,
    "IsCopied": false,
    "IsSupportIoOptimized": true,
    "ImageOwnerAlias": "self",
    "IsSupportCloudinit": true,
    "ImageVersion": 2,
    "Usage": "none",
    "IsSelfShared": true,
    "Description": "testDescription",
    "Size": 80,
    "Platform": "Aliyun",
    "ImageName": "testImageName",
    "OSName": "Alibaba Cloud Linux 2.1903",
    "ImageId": "m-bp1g7004ksh0oeuc****",
    "OSType": "linux",
    "IsSubscribed": false,
    "ProductCode": "jxsc00****",
    "Architecture": "x86_64",
    "DiskDeviceMappings": {
      "DiskDeviceMapping": [
        {
          "Type": "custom",
          "ImportOSSBucket": "testEcsImport",
          "SnapshotId": "s-bp17ot2q7x72ggtw****",
          "ImportOSSObject": "imageImport",
          "Size": 80,
          "Device": "/dev/xvdb",
          "Format": "qcow2"
        }
      ]
    },
    "Tags": {
      "Tag": [
        {
          "TagValue": "TestValue",
          "TagKey": "TestKey"
        }
      ]
    }
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

InvalidUser.Unauthorized

The user is not authorized.

The account you are currently using does not have permission.

404

InvalidRegionId.NotFound

The RegionId provided does not exist.

The specified region does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageFromFamily?updateTime=2025-11-07#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageFromFamily?updateTime=2024-12-17#workbench-doc-change-demo)
