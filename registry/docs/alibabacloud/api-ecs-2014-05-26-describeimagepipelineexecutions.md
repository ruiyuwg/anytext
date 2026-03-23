Queries the details of an image creation task.

## Operation description

The status of the image creation task. Valid values:

-   PREPARING: Resources, such as intermediate instances, are being created.
-   REPAIRING: The source image is being repaired.
-   BUILDING: The user-defined commands are being run and an image is being created.
-   TESTING: The user-defined test commands are being run.
-   DISTRIBUTING: The created image is being copied and shared.
-   RELEASING: The temporary resources generated during the image creation process are being released.
-   SUCCESS The image creation task is completed.
-   PARTITION\_SUCCESS: The image creation task is partially completed. The image is created, but exceptions may occur when the image was copied or shared or when temporary resources were released.
-   FAILED: The image creation task fails.
-   TEST\_FAILED: The image is created, but the test fails.
-   CANCELLING: The image creation task is being canceled.
-   CANCELLED: The image creation task is canceled.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImagePipelineExecutions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImagePipelineExecutions)

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

ecs:DescribeImagePipelineExecutions

get

\*ImagePipelineExecution

`acs:ecs:{#regionId}:{#accountId}:imagepipelineexecution/*`

\*ImagePipelineExecution

`acs:ecs:{#regionId}:{#accountId}:imagepipelineexecution/{#ImagePipelineExecutionId}`

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/*`

\*ImagePipeline

`acs:ecs:{#regionId}:{#accountId}:imagepipeline/{#ImagePipelineId}`

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

Tag

array<object>

No

The tags of the image creation task.

object

No

Tag N of the image creation task.

Key

string

No

The key of tag N of the image creation task. Valid values of N: 1 to 20.

TestKey

Value

string

No

null

TestValue

ImagePipelineId

string

No

The value of tag N of the image creation task. Valid values of N: 1 to 20.

ip-2ze5tsl5bp6nf2b3\*\*\*\*

ExecutionId

string

No

null

exec-5fb8facb8ed7427c\*\*\*\*

Status

string

No

The ID of the image template.

BUILDING

NextToken

string

No

The ID of the image creation task.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The status of the image creation task. You can specify multiple values. Separate the values with commas (,). Example: `BUILDING,DISTRIBUTING`. Valid values:

-   PREPARING: Resources, such as the intermediate instance, are being created.
-   REPAIRING: The source image is being repaired.
-   BUILDING: The user-defined commands are being run and an image is being created.
-   TESTING: The user-defined test commands are being run.
-   DISTRIBUTING: The created image is being copied and shared.
-   RELEASING: The temporary resources generated during the image creation process are being released.
-   SUCCESS: The image creation task is completed.
-   PARTITION\_SUCCESS: The image creation task is partially completed. The image is created, but exceptions may occur when the image was copied or shared or when temporary resources were released.
-   FAILED: The image creation task fails.
-   TEST\_FAILED: The image is created, but the test fails.
-   CANCELLING: The image creation task is being canceled.
-   CANCELLED: The image creation task is canceled.

**Note** If you leave this parameter empty, all image creation tasks are queried regardless of task status.

50

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

AAAAAdDWBF2\*\*\*\*

RequestId

string

The maximum number of entries per page. Valid values: 1 to 500

Default value: 50.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. For information about how to use the returned value, see the "Usage notes" section in this topic.

1

MaxResults

integer

The request ID.

50

ImagePipelineExecution

array<object>

The total number of returned image components.

ImagePipelineExecutionSet

object

The maximum number of entries per page.

CreationTime

string

Details of the image creation tasks.

2020-11-24T06:00:00Z

ImagePipelineId

string

Details of the image creation task.

ip-2ze5tsl5bp6nf2b3\*\*\*\*

Status

string

The time when the image creation task was created.

BUILDING

ModifiedTime

string

The ID of the image template.

2020-11-25T06:00:00Z

ResourceGroupId

string

The status of the image creation task. Valid values:

-   PREPARING: Resources, such as intermediate instances, are being created.
-   REPAIRING: The source image is being repaired.
-   BUILDING: The user-defined commands are being run and an image is being created.
-   TESTING: The user-defined test commands are being run.
-   DISTRIBUTING: The created image is being copied and shared.
-   RELEASING: The temporary resources generated during the image creation process are being released.
-   SUCCESS The image creation task is completed.
-   PARTITION\_SUCCESS: The image creation task is partially completed. The image is created, but exceptions may occur when the image was copied or shared or when temporary resources were released.
-   FAILED: The image creation task fails.
-   TEST\_FAILED: The image is created, but the test fails.
-   CANCELLING: The image creation task is being canceled.
-   CANCELLED: The image creation task is canceled.

rg-bp67acfmxazb4p\*\*\*\*

Message

string

The last modification time of the image creation task.

Create transition vpc "vpc-2ze70rc7093j9idu6\*\*\*\*" success!

ImageId

string

The ID of the resource group.

m-bp67acfmxazb4p\*\*\*\*

ExecutionId

string

The data returned.

exec-5fb8facb8ed7427c\*\*\*\*

Tags

array<object>

The ID of the image.

Tag

object

The ID of the image creation task.

TagValue

string

The tags of the image creation task.

TestKey

TagKey

string

The tag of the image creation task.

TestValue

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAdDWBF2****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "MaxResults": 50,
  "ImagePipelineExecution": {
    "ImagePipelineExecutionSet": [
      {
        "CreationTime": "2020-11-24T06:00:00Z",
        "ImagePipelineId": "ip-2ze5tsl5bp6nf2b3****",
        "Status": "BUILDING",
        "ModifiedTime": "2020-11-25T06:00:00Z",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "Message": "Create transition vpc \"vpc-2ze70rc7093j9idu6****\" success!",
        "ImageId": "m-bp67acfmxazb4p****",
        "ExecutionId": "exec-5fb8facb8ed7427c****",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestKey",
              "TagKey": "TestValue"
            }
          ]
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

InvalidParameter.Status

%s

\-

400

MissingParameter.ImagePipelineId

The specified parameter ImagePipelineId should not be empty.

The specified parameter ImagePipelineId should not be empty.

400

InvalidExecutionId.SizeExceeded

ExecutionId list exceeds maximum size of %s. Current size is %s.

The ExecutionId list size you set exceeds the maximum allowed.

403

Invalid.NextToken

The specified NextToken is not valid.

\-

404

InvalidImagePipeline.NotFound

%s

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-10-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImagePipelineExecutions?updateTime=2025-10-31#workbench-doc-change-demo)

2024-12-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImagePipelineExecutions?updateTime=2024-12-25#workbench-doc-change-demo)

2023-04-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImagePipelineExecutions?updateTime=2023-04-04#workbench-doc-change-demo)
