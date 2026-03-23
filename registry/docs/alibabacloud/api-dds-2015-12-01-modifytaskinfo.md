Modifies the information of a task in the task center for an ApsaraDB for MongoDB instance.

## Operation description

The actions performed by this operation for a task vary based on the current state of the task. The supported actions for a task can be obtained from the value of the actionInfo parameter in the DescribeHistoryTasks operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyTaskInfo)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyTaskInfo)

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

dds:ModifyTaskInfo

update

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the region ID.

cn-hangzhou

TaskId

string

Yes

The task ID. Separate multiple IDs with commas (,). You can specify up to 10 task IDs.

t-83br18hlpdrw3uxxxx

StepName

string

Yes

The name of the step visible to the user.

exec\_task

TaskAction

string

Yes

The action name that corresponds to the state described in the actionInfo parameter of the [DescribeHistoryTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describehistorytasks) operation.

modifySwitchTime

ActionParams

string

No

A action-related parameter. This parameter can be extended based on your business requirements. This parameter value varies with the value of the TaskAction parameter.

{\\"recoverMode\\":\\"immediate\\"}

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

6163731A-XXXX-XXXX-B934-3388DE70C217

ErrorTaskId

string

The ID of the failed task. The operation returns results after a task fails.

""

SuccessCount

string

The number of successful tasks.

1

ErrorCode

string

The error code for the failed task. It is the same as that of the ModifyTaskInfo operation.

""

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6163731A-XXXX-XXXX-B934-3388DE70C217",
  "ErrorTaskId": "",
  "SuccessCount": 1,
  "ErrorCode": ""
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-08

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyTaskInfo?updateTime=2024-04-08#workbench-doc-change-demo)
