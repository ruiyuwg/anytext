Modifies the attributes of a custom image, such as the image family, name, boot mode, and status and whether the image supports the Non-Volatile Memory Express (NVMe) protocol. When you call this operation, you can specify parameters, such as ImageId and ImageFamily, in the request.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyImageAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyImageAttribute)

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

ecs:ModifyImageAttribute

update

\*Image

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

The region ID of the custom image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ImageId

string

Yes

The ID of the custom image.

m-bp18ygjuqnwhechc\*\*\*\*

ImageName

string

No

The name of the custom image. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with acs: or aliyun. [It cannot contain http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-).](http://https://%E3%80%82%E3%80%81%EF%BC%88.%EF%BC%89%E3%80%81%EF%BC%88:%EF%BC%89%E3%80%81%EF%BC%88_%EF%BC%89%EF%BC%88-%EF%BC%89%E3%80%82)

By default, this parameter is empty. In this case, the original name is retained.

testImageName

Status

string

No

The new state of the custom image. Valid values:

-   Deprecated: puts the image into the Deprecated state. If the custom image is shared, you must unshare it before you can put it into the Deprecated state. Images in the Deprecated state cannot be shared or copied, but can be used to create instances or replace system disks.
-   Available: puts the image into the Available state. You can restore an image from the Deprecated state to the Available state.

**Note** If you want to roll back a custom image in the image family to a previous version, you can put the latest available custom image into the Deprecated state. If no custom images are in the Available state within the image family, an image family cannot be used to create instances. Proceed with caution if only a single custom image is in the Available state within the image family.

Deprecated

ImageFamily

string

No

The name of the image family. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with acs: or aliyun. [It cannot contain http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-).](http://https://%E3%80%82%E3%80%81%EF%BC%88.%EF%BC%89%E3%80%81%EF%BC%88:%EF%BC%89%E3%80%81%EF%BC%88_%EF%BC%89%EF%BC%88-%EF%BC%89%E3%80%82)

By default, this parameter is empty.

hangzhou-daily-update

BootMode

string

No

The new boot mode of the image. Valid values:

-   BIOS: BIOS mode
-   UEFI: Unified Extensible Firmware Interface (UEFI) mode
-   UEFI-Preferred: BIOS mode and UEFI mode

**Note** Before you change this parameter, make sure that you are familiar with the boot modes supported by the image. If you specify a boot mode that is not supported by the image, ECS instances created from the image cannot start as expected. For information about the boot modes of images, see the [Boot modes of custom images](/help/en/ecs/user-guide/instance-startup-mode#b9caa9b8bb1wf) section of the "Best practices for ECS instance boot modes" topic.

BIOS

LicenseType

string

No

The type of the license that is used to activate the operating system after the image is imported. Set the value to BYOL.

BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.

Auto

Description

string

No

The new description of the custom image. The description must be 2 to 256 characters in length It cannot start with [http:// or https://.](http://https://%E3%80%82)

This parameter is empty by default, which specifies that the original description is retained.

testDescription

Features

object

No

The attributes of the custom image.

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

The image metadata access mode. Valid values:

-   v1: You cannot set the image metadata access mode to security hardening when you create instances from the image.
    
-   v2: You can set the image metadata access mode to security hardening when you create instances from the image.
    
    \*\*
    
    **Note** You cannot change the value of ImdsSupport from v2 to v1 for an image. To change the value of ImdsSupport from v2 to v1 for an image, use the snapshots associated with the image to create an image and set ImdsSupport to v1 for the new image.
    

v2

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidImageName.Malformed

Image names must be between 2 and 128 characters long, using either English or Chinese characters. The name must start with a letter or a Chinese character, and can include numbers, colons, underscores and hyphens.

The length of the image name is 2 to 128 English or Chinese characters. It must start with an uppercase letter or a Chinese character and can contain numbers, colons (:), underscores (\_), or dashes (-).

400

MissingParameter

The input parameter "RegionId" that is mandatory for processing this request is not supplied.

\-

400

InvalidImageName.Duplicated

The specified Image name has already bean used.

\-

400

InvalidDescription.Malformed

The specified description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

ImageQuotaFull.ImageFamily

The specified image family has exceeded max number of images for one image family.

\-

400

InvalidImageFamily.Malformed

The specified parameter "ImageFamily" is malformed.

\-

400

ImageFamilyQuotaFull

The specified region has exceeded max number of image family.

\-

400

InvalidBootMode.NotSupport

The specified parameter BootMode is not supported.

\-

400

InvalidLicenseType.NotSupported

The specified parameter LicenseType is not supported.

\-

400

InvalidBootMode.NotSupport

The specified parameter BootMode is not supported for current image architecture.

The current image architecture does not support setting this boot mode.

400

InvalidParameter.FeaturesImdsSupport

The specified parameter Features.ImdsSupport is not supported.

The specified parameter Features.ImdsSupport is not supported.

403

ImageStatus.NotAvailable

The specified image status is not available.

\-

403

ImageStatus.NotDeprecated

The specified image status is not deprecated.

The specified image is not in the Deprecated state.

403

ImageUseShared

The specified image has been shared to others, please remove shared accounts first.

\-

403

OperationDeined.ImageUsingByInstance

The boot mode of the image cannot be modified because it has associated instances.

The boot mode of the image cannot be modified while the image has associated instances.

403

InvalidOperation.FeaturesImdsSupportNotMatch

The specified parameter Features.ImdsSupport can not be set to v1 from v2.

The specified parameter Features.ImdsSupport can not be set to v1 from v2.

403

InvalidStatus.ImageIsCreating

The operation cannot be performed because the image is creating. Please wait until the creation is complete and try again.

The operation cannot be performed because the image is creating. Please wait until the creation is complete and try again.

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageAttribute?updateTime=2025-04-29#workbench-doc-change-demo)

2025-04-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageAttribute?updateTime=2025-04-01#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageAttribute?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageAttribute?updateTime=2024-12-17#workbench-doc-change-demo)

2024-12-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageAttribute?updateTime=2024-12-05#workbench-doc-change-demo)

2022-11-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageAttribute?updateTime=2022-11-30#workbench-doc-change-demo)
