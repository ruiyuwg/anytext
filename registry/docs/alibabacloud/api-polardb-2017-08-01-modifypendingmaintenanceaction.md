Modifies the switching time of a pending event.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyPendingMaintenanceAction)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyPendingMaintenanceAction)

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

polardb:ModifyPendingMaintenanceAction

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

The region ID of the cluster.

**Note** You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the region ID details.

cn-hangzhou

Ids

string

Yes

The ID of the task. You can specify multiple task IDs at a time to modify the switching time of the tasks in a unified manner. The task IDs must be separated with commas (,).

111111

SwitchTime

string

Yes

The time that you specify for the background to perform the action that corresponds to the pending event. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2020-06-09T22:00:00Z

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

93061E17-B56A-4324-BC95-D0FFD2\*\*\*\*\*\*

Ids

string

The ID of the task.

111111

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "93061E17-B56A-4324-BC95-D0FFD2******",
  "Ids": 111111
}
```

## Error codes

HTTP status code

Error code

Error message

Description

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

StartTimeBeforeNow

The start time should not be earlier than the current time.

The start time cannot be earlier than the current time.

403

IncorrectTaskStatus

Certain task's status does not support this operation.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
