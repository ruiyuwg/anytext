Executes an image creation task (image building task) by using an image template.

## Operation description

-   After you create an image template, you can call the StartImagePipelineExecution operation to create a pipeline task. The system creates, copies, and shares images based on the parameters configured in the image template.
-   You can execute only one pipeline task for each image template.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/StartImagePipelineExecution)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/StartImagePipelineExecution)

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

ecs:StartImagePipelineExecution

update

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

TemplateTag`deprecated`

array<object>

No

**Note** This parameter is deprecated.

object

No

Key

string

No

**Note** This parameter is deprecated.

null

Value

string

No

**Note** This parameter is deprecated.

null

Tag

array<object>

No

The tags.

object

No

Tag N.

Key

string

No

The key of tag N. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length. The tag value cannot start with `acs:` or contain `http://` or `https://`.

TestValue

ImagePipelineId

string

Yes

The ID of the image template.

ip-2ze5tsl5bp6nf2b3\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

ExecutionId

string

The ID of the image creation task.

exec-5fb8facb8ed7427c\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "ExecutionId": "exec-5fb8facb8ed7427c****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

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

403

InvalidImagePipeline.HasRunningExecution

%s

\-

403

InvalidImagePipeline.OSSObjectNotAuthorized

The ImportImageOptions.DiskDeviceMappings.OSSObject of the specified ImagePipeline is not allowed to access.

The ImportImageOptions.DiskDeviceMappings.OSSObject of the specified ImagePipeline is not allowed to access.

403

InvalidImagePipeline.OSSObjectNeedRestore

The ImportImageOptions.DiskDeviceMappings.OSSObject of the specified ImagePipeline is an archived object and needs to be restored first.

The ImportImageOptions.DiskDeviceMappings.OSSObject of the specified ImagePipeline is an archived object and needs to be restored first.

403

InvalidOperation.NoRightAccessOSS

ECS service is not authorized to access your OSS. Check your RAM roles and policies, and ensure that ecs.aliyuncs.com is authorized to assume AliyunECSImageImportDefaultRole.

ECS service is not authorized to access your OSS. Check your RAM roles and policies, and ensure that "ecs.aliyuncs.com" is authorized to assume "AliyunECSImageImportDefaultRole".

404

InvalidImagePipeline.NotFound

%s

\-

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

InvalidImage.NotFound

%s.

The specified image ID does not exist.

404

ImageComponent.NotFound

%s.

The specified image component ID is not found.

404

InvalidImagePipeline.BaseImageNotFound

The BaseImage of the specified ImagePipeline is not found.

The BaseImage of the specified ImagePipeline is not found.

404

InvalidImagePipeline.OSSObjectNotFound

The ImportImageOptions.DiskDeviceMappings.OSSObject of the specified ImagePipeline is not found in this region.

The ImportImageOptions.DiskDeviceMappings.OSSObject of the specified ImagePipeline is not found in this region.

500

StartImagePipelineExecution.Failed

Start image pipeline execution failed.

Failed to execute the image template task.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartImagePipelineExecution?updateTime=2025-01-13#workbench-doc-change-demo)

2024-12-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartImagePipelineExecution?updateTime=2024-12-19#workbench-doc-change-demo)

2024-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartImagePipelineExecution?updateTime=2024-11-07#workbench-doc-change-demo)

2024-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartImagePipelineExecution?updateTime=2024-10-10#workbench-doc-change-demo)
