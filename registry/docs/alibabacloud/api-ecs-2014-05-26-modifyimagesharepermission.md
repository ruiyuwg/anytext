Modifies the share permissions on an image. You can share your custom images with other Alibaba Cloud accounts or publish the images as community images.

## Operation description

Before you call this operation, read [Share a custom image](/help/en/ecs/user-guide/share-a-custom-image/).

When you call this operation, take note of the following sharing rules:

-   **Sharing limits**: You can share only the custom images created in your Alibaba Cloud account to other Alibaba Cloud accounts. A custom image can be shared to up to 50 Alibaba Cloud accounts. You can share a custom image to up to 10 Alibaba Cloud accounts at a time.
-   **Impacts on an instance**: If an instance was created ( [RunInstances](/help/en/ecs/api-runinstances) ) from a shared image, you cannot re-initialize the system disk of the instance ( [ReInitDisk](/help/en/ecs/api-reinitdisk) ) after the image owner unshares or deletes the image ( [DeleteImage](/help/en/ecs/api-deleteimage) ).

**Note** You can share images encrypted by using customer master keys (CMKs) but cannot share images encrypted by using service keys. When you share an image encrypted by using a service key, an error is reported. If you want to share an image encrypted by using a service key, call the CopyImage operation to copy the image and change the encryption key of the image copy to a CMK.

When you publish or unpublish a community image, take note of the following items:

-   **Responsibilities and agreement**: Alibaba Cloud provides only the platform on which community images can be published and managed. The owner of a community image is responsible for the quality and updates of the image. Make sure that you acknowledge and agree to the Community Image Agreement. Otherwise, you cannot publish community images. For more information, see [Publish a community image](/help/en/doc-detail/208370.html).
-   **Encryption limits**: You cannot publish encrypted images as community images.
-   **Openness**: Community images are publicly available. A community image is available to all Alibaba Cloud accounts in the region where the image resides.
-   **Feature limits**: You cannot share, export, or copy community images.
-   **Unpublication impacts**: After you unpublish a community image, the image is no longer available to other Alibaba Cloud accounts. If an image is shared to other Alibaba Cloud accounts before it is unpublished, the image remains available to the accounts.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyImageSharePermission)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyImageSharePermission)

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

ecs:ModifyImageSharePermission

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

The ID of the shared custom image.

**Note** You can share images encrypted by using CMKs but cannot share images encrypted by using service keys. When you share an image encrypted by using a service key, an error is reported.

m-bp18ygjuqnwhechc\*\*\*\*

LaunchPermission

string

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

AddAccount

array

No

The IDs of Alibaba Cloud accounts to which you want to share the custom image. Valid values of N: 1 to 10. If you specify more than 10 Alibaba Cloud account IDs, the system processes only the first 10 account IDs. The excess account IDs are ignored.

string

No

The ID of Alibaba Cloud account N to which you want to share the custom image.

1234567890

RemoveAccount

array

No

The IDs of Alibaba Cloud accounts from which you want to unshare the custom image. Valid values of N: 1 to 10. If you specify more than 10 Alibaba Cloud account IDs, the system processes only the first 10 account IDs. The excess account IDs are ignored.

string

No

The ID of Alibaba Cloud account N from which you want to unshare the custom image.

1234567890

IsPublic

boolean

No

Specifies whether to publish or unpublish a community image. Valid values:

-   true: publishes the custom image as a community image.
-   false: unpublishes a community image. The unpublish operation takes effect only on community images.

Default value: false.

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

MissingParameter

The input parameter "RegionId" that is mandatory for processing this request is not supplied.

\-

400

InvalidGroup.Malformed

The specified Group is wrongly formed.

\-

400

UnnecessaryParameter.LaunchPermission

The specified parameter "LaunchPermission" is unnecessary if paramter "AddAccounts" or "RemoveAccounts" exist.

\-

400

InvalidParameter.LaunchPermission

The specified parameter "LaunchPermission" is invalid.

\-

400

ForbiddenParameter.LaunchPermission

The specified parameter "LaunchPermission" is forbidden for current account.

\-

403

AssumeRoleError

Requires a RAM role of AliyunECSShareEncryptImageDefaultRole before sharing encrypted image.

Before you share encrypted images, make sure that the AliyunECSShareEncryptImageDefaultRole RAM role is attached to your account.

403

ImageDescription.ContainsSensitiveWords

The specified image description contains sensitive words.

\-

403

ImageName.ContainsSensitiveWords

The specified image name contains sensitive words.

\-

403

Image.Public

The specified image is public image.

\-

403

CurrentRegion.NotSupportPublicImage

Public image is not supported for current region.

\-

403

Image.NotPublic

The specified image is not public image.

The specified image is not published as a community image and cannot be unpublished.

403

OperationDeined.FullImage

The encrypted image contains multiple snapshots, which do not support share.

\-

403

QuotaExceed.ShareImage

The shared Image Quota exceeds.

The maximum number of custom images that can be shared has been reached.

403

QuotaExceed.ShareImageUser

The shared Image user Quota exceeds.

The maximum number of accounts to which a single image can be shared is exceeded.

403

InvalidImageId.BidMismatch

Cannot share the image with users %s of other sites.

You cannot share images to users in other sites.

403

OperationDeined.EncryptedSnapshot

The image contains encrypted snapshots, which do not support share.

The specified image contains encrypted snapshots and cannot be shared.

403

OperationDenied.InvalidImageStatus

The specified image cannot be shared when it is deprecated.

\-

403

PublicImageAgreement.NotSigned

The current account has not signed "Community Image Terms of Service".

You have not signed the Community Image Terms of Service.

403

InvalidParameter.IsPublic

The specified parameter IsPublic is conflicted with other parameters.

The specified parameter IsPublic conflict with another parameter.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidOperation.ServiceKeyEncryptedImageUnsupported

The specified service key encrypted image is not supported for this operation. Please switch to a CMK (Customer Master Key) encrypted image and retry.

Service key mirroring does not support this operation. Replace the CMK key and try again.

404

InvalidImageId.NotFound

The specified ImageId does not exist.

The specified image does not exist in this account. Check whether the image ID is correct.

404

InvalidAccount.NotFound

The specified account %s in parameter "AddAccount.n" or "RemoveAccount.n" does not exist.

The account in the AddAccount or RemoveAccount does not exist.

404

InvalidAccount.Forbbiden

The specified Account does not yourself.

You are attempting to share the image to your own account.

404

InvalidAccount.NotFound

The specified parameter "AddAccount.n" or "RemoveAccount.n" does not exist.

The account specified by the AddAccount and RemoveAccount parameters does not exist.

404

InvalidImageId.NotFound

The specified image %s does not exist.

The specified image does not exist under the current account. check whether the image id is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2025-04-29#workbench-doc-change-demo)

2025-04-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2025-04-03#workbench-doc-change-demo)

2025-03-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2025-03-13#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2024-12-17#workbench-doc-change-demo)

2023-12-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2023-12-11#workbench-doc-change-demo)

2023-04-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2023-04-19#workbench-doc-change-demo)

2023-04-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2023-04-10#workbench-doc-change-demo)

2021-06-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyImageSharePermission?updateTime=2021-06-23#workbench-doc-change-demo)
