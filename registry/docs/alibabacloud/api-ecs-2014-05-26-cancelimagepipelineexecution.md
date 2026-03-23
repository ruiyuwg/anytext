Cancels an image building task.

## Operation description

Before you call the CancelImagePipelineExecution operation, make sure that the image building task to be canceled is in the BUILDING, PREPARING, or REPAIRING state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CancelImagePipelineExecution)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CancelImagePipelineExecution)

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

ecs:CancelImagePipelineExecution

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

TemplateTag

array<object>

No

**Note** This parameter is not publicly available.

object

No

**Note** This parameter is not publicly available.

Key

string

No

**Note** This parameter is not publicly available.

null

Value

string

No

**Note** This parameter is not publicly available.

null

ExecutionId

string

Yes

The ID of the image building task.

exec-5fb8facb8ed7427c\*\*\*\*

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

InvalidStatus.CancelFailed

Failed to cancel execution,status is success, failed or cancelled.

\-

403

InvalidStatus.ImagePipelineExecution

%s

\-

404

InvalidImagePipelineExecution.NotFound

The specified image pipeline execution does not exist!

\-

404

InvalidImagePipelineExecutionId.NotFound

The specified ImagePipelineExecutionId does not exist.

The specified ImagePipelineExecutionId resource does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CancelImagePipelineExecution?updateTime=2025-11-24#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CancelImagePipelineExecution?updateTime=2024-12-17#workbench-doc-change-demo)

2021-06-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CancelImagePipelineExecution?updateTime=2021-06-17#workbench-doc-change-demo)
