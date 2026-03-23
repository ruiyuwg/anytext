Queries the scheduling tasks of an auto provisioning group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupHistory)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupHistory)

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

ecs:DescribeAutoProvisioningGroupHistory

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

The region ID of the auto provisioning group.

cn-hangzhou

PageNumber

integer

No

The page number of the returned page. Pages start from page 1.

Default value: 1

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 100.

and the default value is 10.

5

AutoProvisioningGroupId

string

Yes

The ID of the auto provisioning group.

apg-bp67acfmxazb4p\*\*\*\*

StartTime

string

No

The beginning of the time range of the queried data. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2019-04-01T15:10:20Z

EndTime

string

No

The end of the time range of the queried data. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2019-06-20T15:10:20Z

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The ID of the request.

B48A12CD-1295-4A38-A8F0-0E92C937\*\*\*\*

PageNumber

integer

The page number of the returned page.

1

TotalCount

integer

The number of queried scheduling tasks in the auto provisioning group.

10

AutoProvisioningGroupHistories

array<object>

An array consisting of AutoProvisioningGroupHistory data.

AutoProvisioningGroupHistory

object

Status

string

The execution status of the single scheduling task. Valid values:

-   prepare: The scheduling task is being executed.
-   success: The scheduling task is executed.
-   failed: The scheduling task failed to be executed.

success

StartTime

string

The start time of executing the single scheduling task.

2019-04-01T15:10:20Z

TaskId

string

The ID of the scheduling task.

apg-task-bp67acfmxazb4p\*\*\*\*

LastEventTime

string

The execution time of the last instance creation performed by the single scheduling task.

2019-04-01T15:10:20Z

ActivityDetails

array<object>

An array consisting of ActivityDetail data.

ActivityDetail

object

Status

string

The execution status of instance creation performed by the single scheduling task. Valid values:

-   Successful: Instances are created.
-   Failed: Instances failed to be created.
-   InProgress: Instances are being created.
-   Warning: Some instances are created.

Successful

Detail

string

The execution details of instance creation performed by the single scheduling task.

New ECS instances "i-bp67acfmxazb4p\*\*\*\*, i-bp67acfmxazb5p\*\*\*\*" created.

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "B48A12CD-1295-4A38-A8F0-0E92C937****",
  "PageNumber": 1,
  "TotalCount": 10,
  "AutoProvisioningGroupHistories": {
    "AutoProvisioningGroupHistory": [
      {
        "Status": "success",
        "StartTime": "2019-04-01T15:10:20Z",
        "TaskId": "apg-task-bp67acfmxazb4p****",
        "LastEventTime": "2019-04-01T15:10:20Z",
        "ActivityDetails": {
          "ActivityDetail": [
            {
              "Status": "Successful",
              "Detail": "New ECS instances \"i-bp67acfmxazb4p****, i-bp67acfmxazb5p****\" created."
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

MissingParameter

The specified parameter "AutoProvisioningGroupId" should not be null.

Elastic Supply Group Id(AutoProvisioningGroupId) must be filled in.

400

MissingParamter.RegionId

The regionId should not be null.

The RegionId parameter is required.

400

InvalidParameter.periodTime

The format of startTime or endTime is invalid.

\-

403

Forbidden.RAM

User not authorized to operate on the specified resource, or this API doesn't support RAM.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
