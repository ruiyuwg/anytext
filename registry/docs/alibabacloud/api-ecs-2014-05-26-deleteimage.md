Deletes a custom image. When you call this operation, you can specify ImageId and Force in the request.

## Operation description

For information about scenarios in which you cannot delete a custom image and the considerations related to custom image deletion, see [Delete a custom image](/help/en/ecs/user-guide/delete-a-custom-image).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteImage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteImage)

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

ecs:DeleteImage

delete

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

The ID of the image. If the specified custom image does not exist, the request is ignored.

m-bp67acfmxazb4p\*\*\*\*

Force

boolean

No

Specifies whether to forcefully delete the custom image. Valid values:

-   true: forcefully deletes the custom image, regardless of whether the image is being used by instances.
-   false: verifies that the custom image is not being used by instances and then deletes the image.

Default value: false

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

403

ImageUsingByInstance

The specified image has been used to create instances. You can use the DescribeInstances API to query these instances, or you can use the force parameter to proceed.

The specified image has already been used to create the instance. You can query these instances using the DescribeInstances API or continue with the 'force' parameter.

403

ImageUseShared

The specified image has been shared to others. You can use the DescribeImageSharePermission API to query the users who have been shared.

The specified image has been shared with other users. You can use the DescribeImageSharePermission API to query shared users.

403

OperationDenied.ImageCopying

The image is being copied. Please use the CancelCopyImage API.

The image is being copied, please use the CancelCopyImage API.

403

ImageIsImporting

The specified Image is importing.

The specified image is being imported and cannot be managed.

403

ImageIsExporting

The specified image is currently being exported. You can use the DescribeTasks API to check the status of related tasks and cancel them if needed.

The specified image is being exported. You can use the DescribeTasks API to check the task status and cancel the task if necessary.

403

ImageIsPublic

You can not delete public image, please modify it to private.

The specified image is a community image and cannot be deleted. You must call the ModifyImageSharePermission operation to unpublish the image before you can delete the image.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteImage?updateTime=2025-04-29#workbench-doc-change-demo)

2025-03-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteImage?updateTime=2025-03-18#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteImage?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteImage?updateTime=2024-12-17#workbench-doc-change-demo)
