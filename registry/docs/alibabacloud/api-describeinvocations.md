Queries the execution list and states of Cloud Assistant commands.

## Operation description

DescribeInvocations

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInvocations)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInvocations)

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

ecs:DescribeInvocations

get

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

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

$.parameters\[15\].schema.items.properties.Value.description

cn-hangzhou

ResourceGroupId

string

No

$.parameters\[15\].schema.items.properties.Value.example

rg-bp67acfmxazb4p\*\*\*\*

InvokeId

string

No

$.parameters\[15\].schema.items.properties.Value.enumValueTitles

t-hz0jdfwd9f\*\*\*\*

CommandId

string

No

$.parameters\[15\].schema.items.description

c-hz0jdfwcsr\*\*\*\*

CommandName

string

No

$.parameters\[15\].schema.items.example

CommandTestName

CommandType

string

No

$.parameters\[15\].schema.items.enumValueTitles

RunShellScript

Timed

boolean

No

$.parameters\[15\].schema.description

true

InvokeStatus

string

No

$.parameters\[15\].schema.example

Finished

InstanceId

string

No

$.parameters\[15\].schema.enumValueTitles

i-bp1i7gg30r52z2em\*\*\*\*

ContentEncoding

string

No

{ "PageSize": 10, "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*", "PageNumber": 1, "TotalCount": 1, "Invocations": { "Invocation": \[ { "CreationTime": "2020-01-19T09:15:46Z", "Frequency": "0 _/20 \* \* \* _", "InvocationStatus": "Running", "RepeatMode": "Once", "CommandId": "c-hz0jdfwcsr__\*\*", "CommandType": "RunShellScript", "InvokeStatus": "Finished", "Parameters": "{}", "Timed": false, "CommandContent": "cnBtIC1xYSB8IGdyZXAgdnNm\*\*\*\*", "CommandName": "CommandTestName", "CommandDescription": "testDescription", "InvokeId": "t-hz0jdfwd9f\*\*\*\*", "Username": "root", "WorkingDir": "/home/", "Timeout": 60, "ContainerId": "ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea\*\*\*\*", "ContainerName": "test-container", "InvokeInstances": { "InvokeInstance": \[ { "CreationTime": "2019-12-20T06:15:54Z", "UpdateTime": "2020-01-19T09:15:47Z", "FinishTime": "2019-12-20T06:15:56Z", "InvocationStatus": "Success", "Repeats": 0, "InstanceId": "i-bp1i7gg30r52z2em\*\*\*\*", "Output": "OutPutTestmsg", "Dropped": 0, "StopTime": "2020-01-19T09:15:47Z", "ExitCode": 0, "StartTime": "2019-12-20T06:15:55Z", "ErrorInfo": "the specified instance does not exists", "Timed": false, "ErrorCode": "InstanceNotExists", "InstanceInvokeStatus": "Finished" } \], "Tags": \[ { "TagKey": "owner", "TagValue": "zhangsan" } \] } } \] } }

PlainText

IncludeOutput

boolean

No

10 473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\* 1 1 2020-01-19T09:15:46Z 0 \*/20 \* \* \* \* Running Once c-hz0jdfwcsr\*\*\*\* RunShellScript Finished {} false cnBtIC1xYSB8IGdyZXAgdnNm\*\*\*\* CommandTestName testDescription t-hz0jdfwd9f\*\*\*\* root /home/ 60 ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea\*\*\*\* test-container 2019-12-20T06:15:54Z 2020-01-19T09:15:47Z 2019-12-20T06:15:56Z Success 0 i-bp1i7gg30r52z2em\*\*\*\*

OutPutTestmsg

0 2020-01-19T09:15:47Z 0 2019-12-20T06:15:55Z the specified instance does not exists false InstanceNotExists Finished owner zhangsan

false

PageNumber

long

No

acs:ecs:{#regionId}:{#accountId}:command/\*

1

PageSize

long

No

Command

10

MaxResults

integer

No

acs:ecs:{#regionId}:{#accountId}:instance/\*

10

NextToken

string

No

Instance

AAAAAdDWBF2

RepeatMode

string

No

FEATUREecsXZ3H4M

Once

Tag

array<object>

No

dubbo

object

No

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

Value

string

No

The ID of the resource group. After you set this parameter, command execution results in the specified resource group are queried.

TestValue

Key

string

No

The command task ID.

TestKey

## Response parameters

Parameter

Type

Description

Example

object

PageSize

long

The command ID. You can call the [DescribeCommands](/help/en/ecs/api-describecommands) operation to query all available command IDs.

10

RequestId

string

The command name. If you specify both this parameter and `InstanceId`, this parameter does not take effect.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

PageNumber

long

The command type. Valid values:

-   RunBatScript: batch command, applicable to Windows instances.
-   RunPowerShellScript: PowerShell command, applicable to Windows instances.
-   RunShellScript: shell command, applicable to Linux instances.

1

TotalCount

long

Specifies whether the command is to be automatically run. Valid values:

-   true: The command is run by calling the `RunCommand` or `InvokeCommand` operation with `RepeatMode` set to `Period`, `NextRebootOnly`, or `EveryReboot`.
    
-   false: The command meets one of the following requirements:
    
    -   The command is run by calling the `RunCommand` or `InvokeCommand` operation with `RepeatMode` set to `Once`.
    -   The command task is canceled, stopped, or completed.

Default value: false.

1

NextToken

string

The overall execution status of the command task. The value of this parameter depends on the execution states of the command task on all involved instances. Valid values:

-   Running:
    
    -   Scheduled task: Before you stop the scheduled execution of the command, the overall execution state is always Running.
    -   One-time task: If the command is being run on instances, the overall execution state is Running.
-   Finished:
    
    -   Scheduled task: The overall execution state can never be Finished.
    -   One-time task: The execution is complete on all instances, or the execution is stopped on some instances and is complete on the other instances.
-   Success: If the execution state on at least one instance is Success and the execution state on the other instances is Stopped or Success, the overall execution state is Success.
    
    -   One-time task: The execution is complete, and the exit code is 0.
    -   Scheduled task: The last execution is complete, the exit code is 0, and the specified period ends.
-   Failed:
    
    -   Scheduled task: The overall execution state can never be Failed.
    -   One-time task: The execution failed on all instances.
-   Stopped: The task is stopped.
    
-   Stopping: The task is being stopped.
    
-   PartialFailed: The task fails on some instances. If you specify both this parameter and `InstanceId`, this parameter does not take effect.
    
-   Pending: The command is being verified or sent. If the execution state on at least one instance is Pending, the overall execution state is Pending.
    
-   Scheduled: The command that is set to run on a schedule is sent and waiting to be run. If the execution state on at least one instance is Scheduled, the overall execution state is Scheduled.
    

AAAAAdDWBF2

Invocations

array<object>

The ID of instance N. When you specify this parameter, the system queries all the execution records of all the commands that run on the instance.

Invocation

object

The encoding mode of the `CommandContent` and `Output` response parameters. Valid values:

-   PlainText: returns the original command content and command outputs.
-   Base64: returns the Base64-encoded command content and command outputs.

Default value: Base64.

OssOutputDelivery

string

Specifies whether to return the command outputs in the response.

-   true: The command outputs are returned. When this parameter is set to true, you must specify `InvokeId`, `InstanceId`, or both.
-   false: The command outputs are not returned.

Default value: false

oss://testBucket/testPrefix

InvocationStatus

string

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

Running

Parameters

string

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

{}

Timed

boolean

The maximum number of entries per page.

Valid values: 1 to 50.

Default value: 10.

false

CommandDescription

string

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.

testDescription

Timeout

long

The execution mode of the command. If you specify both this parameter and `InstanceId`, this parameter does not take effect. Valid values:

-   Once: The command is immediately run.
-   Period: The command is run on a schedule.
-   NextRebootOnly: The command is run the next time the instances start.
-   EveryReboot: The command is run every time the instances start.

This parameter is empty by default, which indicates that commands run in all modes are queried.

60

InvokeInstances

array<object>

The tags that are added to the command.

InvokeInstance

object

The tag that is added to the command.

Dropped

integer

The value of tag N of the command. You can specify up to 20 tag values for the command. The tag value can be an empty string. It can be up to 128 characters in length and cannot contain `http://` or `https://`.

0

InvocationStatus

string

The key of tag N of the command. You can specify up to 20 tag keys for the command. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

Success

InstanceId

string

The number of entries returned on each page.

i-bp1i7gg30r52z2em\*\*\*\*

Timed

boolean

The request ID.

false

InstanceInvokeStatus

string

The page number of the returned page.

Finished

ExitCode

long

The total number of the commands.

0

ErrorInfo

string

A pagination token. It can be used in the next request to retrieve a new page of results.

the specified instance does not exists

StartTime

string

Details about the command executions.

2019-12-20T06:15:55Z

Repeats

integer

The time when the command task was created.

0

OssOutputUri

string

Command to execute the Output OSS delivery configuration.

oss://testBucket/testPrefix/output.txt

OssOutputStatus

string

The overall execution status of the command task. The value of this parameter depends on the execution status of the command task on all the involved instances. Valid values:

-   Pending: The command is being verified or sent. When the execution state on at least one instance is Pending, the overall execution state is Pending.
    
-   Scheduled: The command that is set to run on a schedule was sent and waiting to be run. When the execution state on at least one instance is Scheduled, the overall execution state is Scheduled.
    
-   Running: The command is being run on the instances. When the execution state on at least one instance is Running, the overall execution state is Running.
    
-   Success: When the execution state on at least one instance is Success and the execution state on the other instances is Stopped or Success, the overall execution state is Success.
    
    -   One-time task: The execution was complete, and the exit code was 0.
    -   Scheduled task: The last execution was complete, the exit code was 0, and the specified period ended.
-   Failed: When the execution state on all instances is Stopped or Failed, the overall execution state is Failed. When the execution state on an instance is one of the following values, Failed is returned as the overall execution state:
    
    -   Invalid: The command is invalid.
    -   Aborted: The command failed to be sent.
    -   Failed: The execution was complete, but the exit code was not 0.
    -   Timeout: The execution timed out.
    -   Error: An error occurred while the command was being run.
-   Stopping: The command task is being stopped. When the execution state on at least one instance is Stopping, the overall execution state is Stopping.
    
-   Stopped: The task was stopped. When the execution state on all instances is Stopped, the overall execution state is Stopped. When the execution state on an instance is one of the following values, Stopped is returned as the overall execution state:
    
    -   Cancelled: The task was canceled.
    -   Terminated: The task was terminated.
-   PartialFailed: The execution was complete on some instances and failed on other instances. When the execution state is Success on some instances and is Failed or Stopped on the other instances, the overall execution state is PartialFailed.
    

**Note** `InvokeStatus` in the response functions similarly to this parameter. We recommend that you check the value of this parameter.

Finished

FinishTime

string

The custom parameters in the command.

2019-12-20T06:15:56Z

Output

string

Indicates whether the command is to be automatically run.

OutPutTestmsg

CreationTime

string

The command description.

2019-12-20T06:15:54Z

UpdateTime

string

The maximum timeout period for the command execution. Unit: seconds.

When a command cannot be run, the command execution times out. When a command execution times out, Cloud Assistant Agent forcefully terminates the command process by canceling the process ID (PID) of the command.

2020-01-19T09:15:47Z

ErrorCode

string

The instances on which the command was run.

InstanceNotExists

StopTime

string

The execution states of the command.

2020-01-19T09:15:47Z

CommandContent

string

The size of the Output text that was truncated and discarded because the Output value exceeded 24 KB in size.

cnBtIC1xYSB8IGdyZXAgdnNm\*\*\*\*

WorkingDir

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
    -   Scheduled task: The last execution was complete, but the exit code was not 0. The specified period is about to end.
-   Error: The execution cannot proceed due to an exception.
    
-   Timeout: The execution timed out.
    
-   Cancelled: The execution was canceled before it started.
    
-   Stopping: The command task is being stopped.
    
-   Terminated: The execution was terminated before completion.
    
-   Scheduled:
    
    -   One-time task: The execution state can never be Scheduled.
    -   Scheduled task: The command is waiting to be run.

/home/

RepeatMode

string

The instance ID.

Once

InvokeStatus

string

Indicates whether the command is to be automatically run.

Finished

CommandType

string

The execution status of the command on a single instance.

**Note** We recommend that you ignore this parameter and check the value of `InvocationStatus` in the response to obtain the execution status.

RunShellScript

Username

string

The exit code of the execution. Valid values:

-   For Linux instances, the value is the exit code of the shell process.
-   For Windows instances, the value is the exit code of the batch or PowerShell process.

test

ContainerId

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

ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea\*\*\*\*

ContainerName

string

The time when the command started to be run on the instance.

test-container

CreationTime

string

The number of times that the command was run on the instance.

-   If the command is set to run only once, the value is 0 or 1.
-   If the command is set to run on a schedule, the value is the number of times that the command has been run on the instance.

2020-01-19T09:15:46Z

Frequency

string

The command execution Output delivers the object URI to OSS. This field is an empty string when the delivery fails or is in progress.

0 \*/20 \* \* \* \*

Launcher

string

The output delivery status of the command execution. Valid values:

-   InProgress: The delivery is in progress.
-   Finished: The delivery is complete.
-   Failed: The delivery failed.

python3 -u {{ACS::ScriptFileName|Ext(".py")}}

CommandId

string

The time when the command process ended.

c-hz0jdfwcsr\*\*\*\*

CommandName

string

The command output.

-   If ContentEncoding is set to PlainText in the request, the original command output is returned.
-   If ContentEncoding is set to Base64 in the request, the Base64-encoded command output is returned.

CommandTestName

InvokeId

string

The time when the command task was created.

t-hz0jdfwd9f\*\*\*\*

TerminationMode

string

The time when the execution status was updated.

ProcessTree

Tags

array<object>

The error code for the failure to send or run the command. Valid values:

-   If this parameter is empty, the command is run normally.
-   InstanceNotExists: The specified instance did not exist or was released.
-   InstanceReleased: The instance is released during command execution.
-   InstanceNotRunning: The instance was not running when the command started to be run.
-   CommandNotApplicable: The command was inapplicable to the specified instance.
-   AccountNotExists: The username specified to run the command did not exist.
-   DirectoryNotExists: The specified directory did not exist.
-   BadCronExpression: The specified cron expression for the execution schedule was invalid.
-   ClientNotRunning: Cloud Assistant Agent was not running.
-   ClientNotResponse: Cloud Assistant Agent does not respond.
-   ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
-   ClientNeedUpgrade: Cloud Assistant Agent needed to be upgraded.
-   DeliveryTimeout: The request to send the command timed out.
-   ExecutionTimeout: The execution timed out.
-   ExecutionException: An exception occurred while the command was being executed.
-   ExecutionInterrupted: The command task was interrupted.
-   ExitCodeNonzero: The execution was complete, but the exit code was not 0.
-   SecurityGroupRuleDenied: Access to Cloud Assistant was denied by security group rules.
-   TaskConcurrencyLimit: The number of concurrent tasks exceeds the maximum limit.

Tag

object

The time when the command task was stopped. If you call the `StopInvocation` operation to stop the command task, the value of this parameter is the time when the operation is called.

TagKey

string

The command content.

-   If ContentEncoding is set to PlainText in the request, the original command content is returned.
-   If ContentEncoding is set to Base64 in the request, the Base64-encoded command content is returned.

owner

TagValue

string

The execution path of the command.

zhangsan

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PageNumber": 1,
  "TotalCount": 1,
  "NextToken": "AAAAAdDWBF2",
  "Invocations": {
    "Invocation": [
      {
        "OssOutputDelivery": "oss://testBucket/testPrefix",
        "InvocationStatus": "Running",
        "Parameters": {},
        "Timed": false,
        "CommandDescription": "testDescription",
        "Timeout": 60,
        "InvokeInstances": {
          "InvokeInstance": [
            {
              "Dropped": 0,
              "InvocationStatus": "Success",
              "InstanceId": "i-bp1i7gg30r52z2em****",
              "Timed": false,
              "InstanceInvokeStatus": "Finished",
              "ExitCode": 0,
              "ErrorInfo": "the specified instance does not exists",
              "StartTime": "2019-12-20T06:15:55Z",
              "Repeats": 0,
              "OssOutputUri": "oss://testBucket/testPrefix/output.txt",
              "OssOutputStatus": "Finished",
              "FinishTime": "2019-12-20T06:15:56Z",
              "Output": "OutPutTestmsg",
              "CreationTime": "2019-12-20T06:15:54Z",
              "UpdateTime": "2020-01-19T09:15:47Z",
              "ErrorCode": "InstanceNotExists",
              "StopTime": "2020-01-19T09:15:47Z"
            }
          ]
        },
        "CommandContent": "cnBtIC1xYSB8IGdyZXAgdnNm****",
        "WorkingDir": "/home/",
        "RepeatMode": "Once",
        "InvokeStatus": "Finished",
        "CommandType": "RunShellScript",
        "Username": "test",
        "ContainerId": "ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****",
        "ContainerName": "test-container",
        "CreationTime": "2020-01-19T09:15:46Z",
        "Frequency": "0 */20 * * * *",
        "Launcher": "python3 -u {{ACS::ScriptFileName|Ext(\".py\")}}",
        "CommandId": "c-hz0jdfwcsr****",
        "CommandName": "CommandTestName",
        "InvokeId": "t-hz0jdfwd9f****",
        "TerminationMode": "ProcessTree",
        "Tags": {
          "Tag": [
            {
              "TagKey": "owner",
              "TagValue": "zhangsan"
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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2024-12-05#workbench-doc-change-demo)

2024-08-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2024-08-01#workbench-doc-change-demo)

2024-05-14

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2024-05-14#workbench-doc-change-demo)

2023-12-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2023-12-21#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2023-05-12#workbench-doc-change-demo)

2022-07-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2022-07-07#workbench-doc-change-demo)

2022-06-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2022-06-22#workbench-doc-change-demo)

2021-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInvocations?updateTime=2021-05-12#workbench-doc-change-demo)
