\\\\\* If you stop the process of a command that runs only once, the executions that have started are not interrupted. The executions that have not started are canceled. \\\\\* If you stop the process of a scheduled invocation command, the executions that have started are not interrupted. However, the execution does not start in the next period.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   If you stop the process of a command that runs only once, the executions that have started are not interrupted. The executions that have not started are canceled.
-   If you stop the process of a command that runs on a schedule, the executions that have started are not interrupted. Subsequent executions are not scheduled.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/StopInvocation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/StopInvocation)

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

ecs:StopInvocation

update

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The ID of the command task. You can call the [DescribeInvocations](/help/en/ecs/api-describeinvocations) operation to query the IDs of all command tasks.

cn-hangzhou

InvokeId

string

Yes

The ID of the command task. You can call the [DescribeInvocations](/help/en/ecs/api-describeinvocations) operation to query all task IDs.

t-7d2a745b412b4601b2d47f6a768d\*\*\*\*

InstanceId

array

No

The ID of instance N on which you want to stop the process of the Cloud Assistant command. You can specify up to 50 instance IDs in each request. Valid values of N: 1 to 50.

string

No

The request ID.

i-bp67acfmxazb4p\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

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

RegionId.ApiNotSupported

The api is not supported in this region.

The API operation cannot be called in the specified region. Check whether the specified RegionId parameter is valid.

403

InstanceIds.ExceedLimit

The number of instance IDs exceeds the upper limit.

The number of specified instance IDs exceeds the upper limit.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInvokeId.NotFound

The specified invoke ID does not exist.

The specified InvokeId parameter does not exist.

404

InvalidInstanceId.NotFound

The specified parameter InstanceId does not exist.

The specified instance ID does not exist.

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInvocation?updateTime=2025-12-09#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInvocation?updateTime=2024-12-05#workbench-doc-change-demo)

2022-02-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInvocation?updateTime=2022-02-23#workbench-doc-change-demo)
