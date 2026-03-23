Modifies the switching time of scheduled O\\\\\\&M events for an instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyActiveOperationTasks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyActiveOperationTasks)

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

polardb:ModifyActiveOperationTasks

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

The region ID.

**Note** You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the region information about all clusters within a specified account.

cn-beijing

TaskIds

string

Yes

The task IDs.

11111,22222

SwitchTime

string

Yes

The scheduled switching time that you want to specify. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

-   The time that is specified by this parameter cannot be later than the latest execution time.
    
-   You can call the DescribeActiveOperationTasks operation and check the return value of the Deadline parameter for the latest execution time.
    

2023-04-25T06:00:00Z

ImmediateStart

integer

No

Specifies whether to immediately start scheduling. Valid values:

-   0: No. This is the default value.
-   1: Yes.

**Note**

-   If you set this parameter to 0, you must specify the SwitchTime parameter.
    
-   If you set this parameter to 1, the SwitchTime parameter does not take effect. In this case, the start time of the event is set to the current time, and the system determines the switching time based on the start time. Scheduling is started immediately, which is a prerequisite for the switchover. Then, the switchover is performed. You can call the DescribeActiveOperationTasks operation and check the return value of the PrepareInterval parameter for the preparation time.
    

0

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

42CD2EF5-D77E-5AD4-961B-159330D98286

TaskIds

string

The task IDs.

11111,22222

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "42CD2EF5-D77E-5AD4-961B-159330D98286",
  "TaskIds": "11111,22222"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

StartTimeBeforeNow

The start time should be later than current time.

The specified time parameter is invalid. The start time must be earlier than the end time.

400

TaskHasStarted

Task has started.

The task has started.

400

IncorrectTaskStatus

Certain task's status does not support this operation.

\-

400

IncorrectTaskType

Current task does not support this operation.

This operation is not supported while the task is in the current state.

400

RequiredParam.NotFound

Required input param is not found.

The specified parameter does not exist.

400

TaskModifyError

Part of the tasks cannot be modified.

Part of the tasks cannot be modified. Please try again later.

400

SwitchTimeAfterDeadline

The switch time should be earlier than deadline.

The specified time parameter is invalid. The switchover time must be earlier than the end time.

400

InvalidTime.Format

InvalidTime.Format Specified time is not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
