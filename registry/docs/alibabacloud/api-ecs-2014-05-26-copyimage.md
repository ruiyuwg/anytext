Copies a custom image from one region to another region. You can copy custom images to deploy or copy Elastic Compute Service (ECS) instances across regions.

## Operation description

## [](#usage-notes)[](#)Usage notes

After you copy a custom image to the destination region, you can use the image copy (new image) to create ECS instances by calling the RunInstances operation or replace the system disks of instances by calling the ReplaceSystemDisk operation in the destination region.

Take note of the following items:

-   Only custom images that are in the `Available` state can be copied.
-   Custom images that belong to your Alibaba Cloud account can be copied across regions. Images that are shared with you by others can be copied only within the regions where the images reside.
-   When an image is being copied, the new image cannot be deleted by calling the [DeleteImage](/help/en/ecs/api-deleteimage) operation. However, you can cancel the ongoing image copy task by calling the [CancelCopyImage](/help/en/ecs/api-cancelcopyimage) operation.
-   A region supports only up to five concurrent image copy tasks. Excess image copy tasks are queued for execution.
-   You can configure `ResourceGroupId` to specify the resource group to which to assign the new image. If you do not configure `ResourceGroupId`, the new image is assigned to the default resource group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CopyImage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CopyImage)

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

ecs:CopyImage

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

DestinationImageName

string

No

The name of the new image. The name must be 2 to 128 characters in length. The name must start with a letter and cannot contain `http://` or `https://`. The name cannot start with `acs:` or `aliyun`. The name can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-).

YourImageName

DestinationDescription

string

No

The description of the image copy. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This is a description example.

ImageId

string

Yes

The ID of the source custom image.

m-bp1h46wfpjsjastc\*\*\*\*

RegionId

string

Yes

The region ID of the source custom image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DestinationRegionId

string

No

The ID of the destination region to which the source custom image is copied.

cn-shanghai

Encrypted

boolean

No

Specifies whether to encrypt the new image.

-   true
-   false

Default value: false.

false

KMSKeyId

string

No

The ID of the key used to encrypt the image copy.

e522b26d-abf6-4e0d-b5da-04b7\*\*\*\*\*\*3c

EncryptAlgorithm

string

No

**Note** This parameter is unavailable.

hide

ResourceGroupId

string

No

The ID of the resource group to which to assign the new image. If you do not specify this parameter, the new image is assigned to the default resource group.

**Note** If you call the CopyImage operation as a Resource Access Management (RAM) user who does not have the permissions to manage the default resource group and do not specify `ResourceGroupId`, the `Forbidden: User not authorized to operate on the specified resource` error message is returned. You must specify the ID of a resource group that the RAM user has the permissions to manage or grant the RAM user the permissions to manage the default resource group before you call the CopyImage operation again.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The list of tags.

object

No

The list of tags.

Key

string

No

The key of tag N of the image copy. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

TestKey

Value

string

No

The value of tag N of the image copy. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.

TestValue

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Specifies whether to check the image used by the instance supports hot migration. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

ClientToken

string

No

The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the value, but you ensure sure that the value is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

ImageId

string

The ID of the image copy.

m-bp1h46wfpjsjastd\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "ImageId": "m-bp1h46wfpjsjastd****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDescription.Malformed

The specified destination description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

SourceRegion.NotFound

The source region not found.

The specified source region does not exist.

400

DestinationRegion.NotFound

The destination region not found.

The destination region was not found.

400

IncorrectImageStatus

The image not available.

The specified image is unavailable.

400

InvalidSnapshotId.NotFound

The specified SnapshotId does not exist.

The specified snapshot ID does not exist.

400

InvalidImageName.Duplicated

The specified image name is already in use in the target region. Please try a different one.

The specified image name is already in use in the target region. Please try another one.

400

InvalidParameter.EncryptedIllegal

The specified parameter Encrypted must be true when kmsKeyId is not empty.

The encryption feature is not enabled after a Key Management Service (KMS) key ID is specified.

400

InvalidEncrypted.NotMatchEncryptAlgorithm

The specified parameter Encrypted must be true when EncryptAlgorithm is not empty.

\-

400

InvalidEncryptAlgorithm

The specified parameter EncryptAlgorithm is not valid.

\-

400

InvalidEncrypted.NotMatchKmsKeyId

The specified parameter Encrypted must be true when KmsKeyId is not empty.

\-

400

OperationDenied.CommunityImage

Community image does not support copy.

Community image does not support copy.

400

InvalidImageName.Malformed

The specified destination image name is wrongly formed.

The specified image name is invalid. For more information, see the description of the DestinationImageName parameter.

400

InvalidImageName.Malformed

Image names must be between 2 and 128 characters long, using either English or Chinese characters. The name must start with a letter or a Chinese character, and can include numbers, colons, underscores and hyphens.

The length of the image name is 2 to 128 English or Chinese characters. It must start with an uppercase letter or a Chinese character and can contain numbers, colons (:), underscores (\_), or dashes (-).

400

InvalidParameter.KmsNotEnabled

The specified operation need enable KMS.

The current operation requires opening KMS

400

OperationDenied.ImageCopyConflict

The same image cannot be copied concurrently. Please wait until the last copy is completed before performing the next operation.

The same image cannot be copied concurrently. Please wait until the last copy is completed before performing the next operation.

400

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

401

InvalidAliUid.IsNull

The aliUid must not be null.

\-

403

Forbbiden

User not authorized to operate on the specified resource.

You are not authorized to operate the specified resource.

403

QuotaExceed.Image

The number of images exceeds the limit (%s).

The number of images exceeds the limit.

403

QuotaExceed.Snapshot

The snapshot quota exceeds.

The maximum number of snapshots has been reached. Delete snapshots that are no longer needed and try again.

403

OperationDenied.ImageCopying

The image is currently being copied. Please try again later.

The image is being copied, please try again later.

403

RegionNotSupportCopy

The region not support copy.

The specified source region or destination region does not support image copying.

403

InvalidSnapshot.TooOld

This operation is denied because the specified snapshot is created before 2013-07-15.

The operation is denied because the specified snapshot was created before July 15, 2013.

403

OperationDenied

The specified snapshot is not allowed to create image.

The specified snapshot cannot be used to create images.

403

IncorrectDestinationRegion

The destination region is not equal the target region.

The source region must be different from the destination region when you copy an image across regions.

403

OperationDeined.EncryptedSnapshot

The image contains encrypted snapshots, which do not support copying.

The specified image contains encrypted snapshots and cannot be copied.

403

OperationDenied.SameRegionOnly

The image shared from others can not be copied to another region directly.

You cannot copy images shared by other Alibaba Cloud accounts to another region.

403

OperationDenied.NotPublished

The operation is denied because corresponding marketplace image is not published in destination region.

\-

403

OperationDenied.NotAuthorized

The operation is denied because corresponding marketplace image is not authorized to current user.

\-

403

OperationDeined.EncryptedSnapshot

The image contains encrypted snapshots, which do not support copying to non-encrypted ones.

The image contains encrypted snapshots and cannot be copied to non-encrypted snapshots.

403

OperationDenied.EncryptSnapshotAcrossRegion

The image do not contain encrypted snapshots, which do not support copying to encrypted ones.

\-

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

InvalidRegion.NotSupport

The specified region does not support byok.

The bring your own key (BYOK) feature is not supported in the region.

403

UserNotInTheWhiteList

The user is not in byok white list.

You are not authorized to use the bring your own key (BYOK) feature. Try again when you are authorized.

403

InvalidRegionId.NotSupportEncryptAlgorithm

The current region does not support creating encrypted disks with EncryptAlgorithm.

\-

403

OperationDenied.KmsServiceUnauthorized

The account is not authorized to kms service, please authorize it.

You are not authorized to access KMS. Apply for the permissions required to access KMS.

403

OperationDenied.NonCompliantDestinationRegion

The copy operation to the destination region is not in compliance with regulations.

The target region does not meet the security compliance requirements.

403

InvalidEncrypted.NotMatchDiskDefaultEncryption

The specified parameter Encrypted not match for your account default encryption settings.

The encryption parameter does not match the default encryption configuration for the cloud disk of the current account.

403

InvalidParameter.DataEncryptedKeyCreateFailed

Create kms data encrypted key fail. If you need further assistance, you can contact the KMS Technical Support.

Failed to create a data key using the KMS master key. Please contact the KMS attendant for further troubleshooting.

403

SizeExceed.Image

The image exceeds the maximum size. You can use the CopySnapshot API to copy your snapshots of the image and then create a new image from them.

The size of the mirror has exceeded the operational maximum. You can use the CopySnapshot API to copy the snapshot of this image to the target region, and then use the copied snapshot to create a new image.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

403

InvalidOperation.VhdImageUnsupported

The specified vhd image is not supported for this operation. Please switch to a raw image and retry.

vhd format images do not support this operation. switch to raw format images and try again.

403

InvalidOperation.CloudBoxImageCopyUnsupported

Copying CloudBox images is not supported.

CloudBox images do not support replication.

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

404

InvalidImageId.NotFound

The specified image %s does not exist.

The specified image does not exist under the current account. check whether the image id is correct.

404

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

409

InvalidOperation.Conflict

Request was denied due to conflict with a previous request, please try again later.

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

2026-01-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2026-01-06#workbench-doc-change-demo)

2025-04-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2025-04-29#workbench-doc-change-demo)

2025-04-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2025-04-18#workbench-doc-change-demo)

2025-04-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2025-04-09#workbench-doc-change-demo)

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2025-03-19#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2025-02-27#workbench-doc-change-demo)

2025-01-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2025-01-16#workbench-doc-change-demo)

2024-12-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2024-12-19#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2024-12-17#workbench-doc-change-demo)

2024-12-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2024-12-11#workbench-doc-change-demo)

2024-12-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2024-12-09#workbench-doc-change-demo)

2024-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2024-09-05#workbench-doc-change-demo)

2024-06-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2024-06-27#workbench-doc-change-demo)

2023-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2023-12-18#workbench-doc-change-demo)

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2023-10-09#workbench-doc-change-demo)

2023-08-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2023-08-23#workbench-doc-change-demo)

2023-07-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2023-07-12#workbench-doc-change-demo)

2023-03-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopyImage?updateTime=2023-03-03#workbench-doc-change-demo)
