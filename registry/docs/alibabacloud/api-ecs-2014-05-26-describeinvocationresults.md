Queries the execution results of one or more Cloud Assistant commands on Elastic Compute Service (ECS) instances.

## Operation description

DescribeInvocationResults

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInvocationResults)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInvocationResults)

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

ecs:DescribeInvocationResults

get

Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

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

$.parameters\[11\].schema.items.description

cn-hangzhou

ResourceGroupId

string

No

$.parameters\[11\].schema.items.example

rg-bp67acfmxazb4p\*\*\*\*

InvokeId

string

No

$.parameters\[11\].schema.items.enumValueTitles

t-hz0jdfwd9f\*\*\*\*

InstanceId

string

No

$.parameters\[11\].schema.description

i-bp1i7gg30r52z2em\*\*\*\*

CommandId

string

No

$.parameters\[11\].schema.example

c-hz0jdfwcsr\*\*\*\*

InvokeRecordStatus

string

No

$.parameters\[11\].schema.enumValueTitles

Running

IncludeHistory

boolean

No

{ "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE\*\*\*\*\*", "Invocation" : { "InvocationResults" : { "InvocationResult" : \[ { "Dropped" : 0, "InvocationStatus" : "Success", "InstanceId" : "i-bp1i7gg30r52z2em\*\*\*\*", "ExitCode" : 0, "ErrorInfo" : "the specified instance does not exists", "StartTime" : "2019-12-20T06:15:55Z", "Repeats" : 0, "InvokeRecordStatus" : "Running", "FinishedTime" : "2019-12-20T06:15:56Z", "Output" : "MTU6MzA6MDEK", "CommandId" : "c-hz0jdfwcsr\*\*\*\*", "ErrorCode" : "InstanceNotExists", "InvokeId" : "t-hz0jdfwd9f\*\*\*\*", "StopTime" : "2020-01-19T09:15:47Z", "ContainerId":"ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea\*\*\*\*", "ContainerName":"test-container",  
"Tags": \[ { "TagKey": "owner", "TagValue": "zhangsan" } \] } \] }, "TotalCount" : 1, "PageSize" : 1, "PageNumber" : 1 } }

false

ContentEncoding

string

No

473469C7-AA6F-4DC5-B3DB-A3DC0DE\*\*\*\*\* 0 Success i-bp1i7gg30r52z2em\*\*\*\* 0 the specified instance does not exists 2019-12-20T06:15:55Z 0 Running 2019-12-20T06:15:56Z

MTU6MzA6MDEK

c-hz0jdfwcsr\*\*\*\* InstanceNotExists t-hz0jdfwd9f\*\*\*\* 2020-01-19T09:15:47Z ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea\*\*\*\* test-container owner zhangsan 1 1 1

PlainText

PageNumber

long

No

acs:ecs:{#regionId}:{#accountId}:command/\*

1

PageSize

long

No

acs:ecs:{#regionId}:{#accountId}:instance/\*

1

MaxResults

integer

No

FEATUREecsXZ3H4M

10

NextToken

string

No

dubbo

AAAAAdDWBF2

Tag

array<object>

No

The region ID of the command. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

object

No

The ID of the resource group. After you set this parameter, command execution results in the specified resource group are queried.

Value

string

No

The ID of the command task. You can call the [DescribeInvocations](/help/en/ecs/api-describeinvocations) operation to query the IDs of all command tasks.

TestValue

Key

string

No

The ID of the instance.

TestKey

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the command.

473469C7-AA6F-4DC5-B3DB-A3DC0DE\*\*\*\*\*

Invocation

object

The execution status of the command task. Valid values:

-   Running:
    
    -   Scheduled task: Before you stop the scheduled execution of the command, the execution state is always Running.
    -   One-time task: If the command is being run on instances, the execution state is Running.
-   Finished:
    
    -   Scheduled task: The execution state can never be Finished.
    -   One-time task: The execution is complete on all instances, or the execution is stopped on some instances and is complete on the other instances.
-   Success:
    
    -   One-time task: The execution is complete, and the exit code is 0.
    -   Scheduled task: The last execution is complete, the exit code is 0, and the specified period ends.
-   Failed:
    
    -   Scheduled task: The execution state can never be Failed.
    -   One-time task: The execution fails on all instances.
-   PartialFailed:
    
    -   Scheduled task: The execution state can never be PartialFailed.
    -   One-time task: The execution fails on some instances.
-   Stopped: The task is stopped.
    
-   Stopping: The task is being stopped.
    

PageSize

long

Specifies whether to return the results of historical scheduled executions. Valid values:

-   true: returns the results of historical scheduled executions. If you set this parameter to true, you must set InvokeId to the ID of a task that is run on a schedule (RepeatMode set to Period) or on each system startup (RepeatMode set to EveryReboot).
-   false: does not return the results of historical scheduled executions.

Default value: false.

1

PageNumber

long

The encoding mode of the `CommandContent` and `Output` values in the response. Valid values:

-   PlainText: returns the original command content and command output.
-   Base64: returns the Base64-encoded command content and command output.

Default value: Base64.

1

TotalCount

long

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

1

NextToken

string

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

AAAAAdDWBF2

InvocationResults

array<object>

The maximum number of entries per page.

Valid values: 1 to 50.

Default value: 10.

InvocationResult

object

Dropped

integer

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

0

OssOutputDelivery

string

The tags of the command task.

oss://testBucket/testPrefix

InvocationStatus

string

The tag of the command task.

Success

InstanceId

string

The value of tag N of the command task. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

i-bp1i7gg30r52z2em\*\*\*\*

ExitCode

long

The key of tag N of the command task. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

0

ErrorInfo

string

The ID of the request.

the specified instance does not exists

StartTime

string

Details about the execution results.

2019-12-20T06:15:55Z

Repeats

integer

The number of entries per page.

0

InvokeRecordStatus

string

The page number.

Running

FinishedTime

string

The total number of the commands.

2019-12-20T06:15:56Z

OssOutputUri

string

A pagination token. It can be used in the next request to retrieve a new page of results.

oss://testBucket/testPrefix/output.txt

OssOutputStatus

string

The execution results.

Finished

Username

string

The size of the Output text that was truncated and discarded because the `Output` value exceeded 24 KB in size.

test

ContainerId

string

Command to execute the Output OSS delivery configuration.

ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea\*\*\*\*

ContainerName

string

The execution status on a single instance. Valid values:

-   Pending: The command is being verified or sent.
    
-   Invalid: The specified command type or parameter is invalid.
    
-   Aborted: The command failed to be sent to the instance. To send a command to an instance, make sure that the instance is in the Running state and the command can be sent to the instance within 1 minute.
    
-   Running: The command is being run on the instance.
    
-   Success:
    
    -   One-time task: The execution was complete, and the exit code was 0.
    -   Scheduled task: The last execution was complete, the exit code was 0, and the specified period ended.
-   Failed:
    
    -   One-time task: The execution was complete, but the exit code was not 0.
    -   Scheduled task: The last execution was complete, but the exit code was not 0. The specified period was about to end.
-   Error: The execution cannot proceed due to an exception.
    
-   Timeout: The execution timed out.
    
-   Cancelled: The execution was canceled before it started.
    
-   Stopping: The command task is being stopped.
    
-   Terminated: The execution was terminated before completion.
    
-   Scheduled:
    
    -   One-time task: The execution state can never be Scheduled.
    -   Scheduled task: The command is waiting to be run.

test-container

Output

string

The instance ID.

MTU6MzA6MDEK

Launcher

string

The exit code of the command task.

-   For Linux instances, the value is the exit code of the shell command.
-   For Windows instances, the value is the exit code of the batch or PowerShell command.

python3 -u {{ACS::ScriptFileName|Ext(".py")}}

CommandId

string

The error message returned when the command failed to be sent or run. Valid values:

-   If this parameter is empty, the command was run as expected.
-   The security group rules denied access to the aliyun service.
-   The specified instance does not exist.
-   The specified instance was released during task execution.
-   The specified instance was not running during task execution.
-   The OS type of the instance does not support the specified command type.
-   The specified account does not exist.
-   The specified directory does not exist.
-   The cron expression is invalid.
-   The aliyun service is not running on the instance.
-   The aliyun service in the instance does not response.
-   The aliyun service in the instance is upgrading during task execution.
-   The aliyun service in the instance need to be upgraded to at least version to support the feature. indicates the earliest version that supports the feature. indicates the name of the feature.
-   The command delivery has been timeout.
-   The command execution has been timeout.
-   The command execution got an exception.
-   The command execution exit code is not zero.
-   The specified instance was released during task execution.

c-hz0jdfwcsr\*\*\*\*

ErrorCode

string

The time when the command started to be run on the instance.

InstanceNotExists

InvokeId

string

The number of times that the command was run on the instance.

-   If the command is set to run only once, the value is 0 or 1.
-   If the command is set to run on a schedule, the value is the number of times that the command has been run on the instance.

t-hz0jdfwd9f\*\*\*\*

TerminationMode

string

The execution status of the command. Valid values:

-   Running:
    
    -   Scheduled task: Before you stop the scheduled execution of the command, the execution state is always Running.
    -   One-time task: If the command is being run on instances, the execution state is Running.
-   Finished:
    
    -   Scheduled task: The execution state can never be Finished.
    -   One-time task: The execution was complete on all instances, or the execution was stopped on some instances and was complete on the other instances.
-   Failed:
    
    -   Scheduled task: The execution state can never be Failed.
    -   One-time task: The execution failed on all instances.
-   PartialFailed:
    
    -   Scheduled task: The execution state can never be PartialFailed.
    -   One-time task: The execution failed on some instances.
-   Stopped: The task was stopped.
    
-   Stopping: The task is being stopped.
    

ProcessTree

Tags

array<object>

The time when the command task was completed. If the command task times out, the end time is equal to the start time of the command task specified by `StartTime` plus the timeout period specified by `Timeout`.

Tag

object

The command execution Output delivers the object URI to OSS. This field is an empty string when the delivery fails or is in progress.

TagKey

string

The output delivery status of the command execution. Valid values:

-   InProgress: The delivery is in progress.
-   Finished: The delivery is complete.
-   Failed: The delivery failed.

owner

TagValue

string

The username used to run the command on the instance.

zhangsan

StopTime

string

root

2020-01-19T09:15:47Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****",
  "Invocation": {
    "PageSize": 1,
    "PageNumber": 1,
    "TotalCount": 1,
    "NextToken": "AAAAAdDWBF2",
    "InvocationResults": {
      "InvocationResult": [
        {
          "Dropped": 0,
          "OssOutputDelivery": "oss://testBucket/testPrefix",
          "InvocationStatus": "Success",
          "InstanceId": "i-bp1i7gg30r52z2em****",
          "ExitCode": 0,
          "ErrorInfo": "the specified instance does not exists",
          "StartTime": "2019-12-20T06:15:55Z",
          "Repeats": 0,
          "InvokeRecordStatus": "Running",
          "FinishedTime": "2019-12-20T06:15:56Z",
          "OssOutputUri": "oss://testBucket/testPrefix/output.txt",
          "OssOutputStatus": "Finished",
          "Username": "test",
          "ContainerId": "ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****",
          "ContainerName": "test-container",
          "Output": "MTU6MzA6MDEK",
          "Launcher": "python3 -u {{ACS::ScriptFileName|Ext(\".py\")}}",
          "CommandId": "c-hz0jdfwcsr****",
          "ErrorCode": "InstanceNotExists",
          "InvokeId": "t-hz0jdfwd9f****",
          "TerminationMode": "ProcessTree",
          "Tags": {
            "Tag": [
              {
                "TagKey": "owner",
                "TagValue": "zhangsan"
              }
            ]
          },
          "StopTime": "2020-01-19T09:15:47Z"
        }
      ]
    }
  }
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

400

NumberExceed.Tags

The Tags parameter number is exceed.

The number of tags exceeds the maximum limit.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

MissingParameter.TagKey

You must specify Tag.N.Key.

The tag key is not specified.

400

InvalidParam.PageNumber

The specified parameter is invalid.

The specified PageNumber parameter is invalid.

400

InvalidParam.PageSize

The specified parameter is invalid.

The specified PageSize parameter is invalid.

400

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

The specified parameter NextToken is illegal.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The specified parameter MaxResults is illegal.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

500

ServiceUnavailable

The request has failed due to a temporary failure of the server.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocationResults?updateTime=2024-12-05#workbench-doc-change-demo)

2024-08-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocationResults?updateTime=2024-08-01#workbench-doc-change-demo)

2024-05-14

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocationResults?updateTime=2024-05-14#workbench-doc-change-demo)

2023-12-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocationResults?updateTime=2023-12-21#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocationResults?updateTime=2023-05-12#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocationResults?updateTime=2022-02-25#workbench-doc-change-demo)
