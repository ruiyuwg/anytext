Cancels O\\\\\\&M events at a time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/CancelActiveOperationTasks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/CancelActiveOperationTasks)

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

polardb:CancelActiveOperationTasks

delete

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

**Note**

-   You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the region information about all clusters within a specified account.
    
-   If you do not specify this parameter, scheduled tasks on your clusters that are deployed in all regions are queried.
    

cn-beijing

TaskIds

string

Yes

The IDs of O&M events that are canceled at a time. Separate multiple IDs with commas (,).

2355,2352

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

25C70FF3-D49B-594D-BECE-0DE2BA1D8BBB

TaskIds

string

The IDs of O&M events that are canceled at a time. Separate multiple IDs with commas (,).

2355,2352

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "25C70FF3-D49B-594D-BECE-0DE2BA1D8BBB",
  "TaskIds": "2355,2352"
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

IncorrectTaskType

Current task does not support this operation.

This operation is not supported while the task is in the current state.

400

RequiredParam.NotFound

Required input param is not found.

The specified parameter does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
