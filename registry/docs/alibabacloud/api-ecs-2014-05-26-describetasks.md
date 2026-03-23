Queries the progress of one or more asynchronous tasks.

## Operation description

## [](#debugging)Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ecs&api=DescribeTasks&type=RPC&version=2014-05-26)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeTasks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeTasks)

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

ecs:DescribeTasks

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

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

TaskIds

string

No

The task IDs. You can specify up to 100 task IDs at a time. Separate the task IDs with commas (,).

t-bp1hvgwromzv32iq\*\*\*\*,t-bp179lofu2pv768w\*\*\*\*

TaskAction

string

No

The name of the operation that generates the task. Valid values:

-   ImportImage
-   ExportImage
-   RedeployInstance
-   ModifyDiskSpec
-   ArchiveSnapshot

ImportImage

TaskStatus

string

No

The task status. Valid values:

-   Finished
-   Processing
-   Failed

This parameter is left empty by default.

**Note** The system only queries tasks in the Finished, Processing, and Failed states and ignores other values.

Finished

StartTime

string

No

The beginning of the time range to query. The time range refers to the period of time during which the task is created. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2020-11-23T15:10:00Z

EndTime

string

No

The end of the time range to query. The time range refers to the period of time during which the task is created. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2020-11-23T15:16:00Z

ResourceIds

array

No

The IDs of the resources associated with the task. Valid values of N: 1 to 100.

string

No

The ID of resource N. Valid values of N: 1 to 100.

-   If you set TaskAction to ImportImage or ExportImage, specify an image ID as a resource ID.
-   If you set TaskAction to RedeployInstance, specify the ID of an Elastic Compute Service (ECS) instance as a resource ID.
-   If you set TaskAction to ModifyDiskSpec, specify a disk ID as a resource ID.

m-bp1i8huqm5u7\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

10

PageNumber

integer

The page number.

1

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of entries returned.

1

RegionId

string

The region ID.

cn-hangzhou

TaskSet

array<object>

Details about the tasks.

Task

object

CreationTime

string

The time when the task was created.

2020-11-24T12:50Z

TaskStatus

string

The task status.

Finished

FinishedTime

string

The time when the task ended.

2020-11-24T12:50Z

SupportCancel

string

Indicates whether the task can be canceled.

true

TaskId

string

The task ID.

t-bp1hvgwromzv32iq\*\*\*\*

TaskAction

string

The name of the operation that generates the task.

ImportImage

ResourceId

string

The resource ID.

m-bp1i8huqm5u7\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "PageNumber": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "RegionId": "cn-hangzhou",
  "TaskSet": {
    "Task": [
      {
        "CreationTime": "2020-11-24T12:50Z",
        "TaskStatus": "Finished",
        "FinishedTime": "2020-11-24T12:50Z",
        "SupportCancel": true,
        "TaskId": "t-bp1hvgwromzv32iq****",
        "TaskAction": "ImportImage",
        "ResourceId": "m-bp1i8huqm5u7****"
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

MissingParameter

An input parameter "RegionId" that is mandatory for processing the request is not supplied.

\-

400

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
