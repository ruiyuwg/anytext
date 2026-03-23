## Operation description

-   After you run a command, it may not succeed. You can call this operation to query the execution result.
-   You can query the information about execution in the last two weeks. A maximum of 100,000 lines of execution information can be retained.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeInvocations)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeInvocations)

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

ecd:DescribeInvocations

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.

cn-hangzhou

InvokeId

string

No

The execution ID of the command. You can obtain the value by calling the [RunCommand](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-runcommand) operation.

t-hz0jdfwd9f\*\*\*\*

CommandType

string

No

The command type.

Valid values:

-   RunPowerShellScript: the PowerShell command.
-   RunBatScript: the Bat command.

RunPowerShellScript

InvokeStatus

string

No

The execution status of the command. The value of this parameter is determined by the execution states of the command on all participating cloud computers.

Valid values:

-   Finished: The command execution completes on all cloud computers. Alternatively, the command execution is manually stopped on some cloud computers while it completes on the others.
-   Stopped: The command execution stops.
-   Failed: The command execution failed on all cloud computers.
-   Running: Once there is a command execution in progress, the execution status defaults to Running.
-   PartialFailed: If the command execution failed on part of the cloud computers, the execution status is considered partially failed.

Finished

DesktopId

string

No

The cloud computer ID. If you specify a cloud computer, all command execution records of the cloud computer are queried.

ecd-7w78ozhjcwa3u\*\*\*\*

IncludeOutput

boolean

No

Specifies whether to return command outputs in the response.

Valid values:

-   true
-   false (default)

false

ContentEncoding

string

No

The encoding method of the command content and outputs.

Valid values:

-   Base64 (default): returns the Base64-encoded command content and command outputs.
-   PlainText: returns the original command content and outputs in plain text.

PlainText

MaxResults

integer

No

The number of entries per page.

-   Valid values: 1 to 50.
-   Default value: 10.

10

NextToken

string

No

The query token. Set the value to the NextToken value that is returned from the last call to the previous DescribeInvocations operation.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL\*\*\*\*

EndUserId

string

No

The user ID.

test1

DesktopIds

array

No

The cloud computer IDs.

**Note** The `DesktopId` parameter will be deprecated. We recommend using the DesktopIds parameter to specify cloud computer IDs instead.

string

No

The cloud computer ID.

ecd-84mztzatmipf2\*\*\*\*

IncludeInvokeDesktops

boolean

No

Specifies whether to return the execution results of the remote command on all cloud computers when executed across multiple cloud computers.

Valid values:

-   true
-   false

false

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

NextToken

string

The query token that is returned from this call.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Invocations

array<object>

The command execution records.

Invocation

object

The command execution record.

InvokeId

string

The ID of the execution.

t-hz0jdfwd9f\*\*\*\*

CommandContent

string

The Base64-encoded command content.

cnBtIC1xYSB8IGdyZXAgdnNm\*\*\*\*

CommandType

string

The type of the command.

RunPowerShellScript

InvocationStatus

string

The overall execution status of the command. The value of this parameter depends on the execution status of the command on all the involved cloud computers. Valid values:

-   Pending: The command is being verified or sent. If the execution status is Pending on at least one cloud computer, the overall status is considered Pending.
    
-   Running: The command is being executed on cloud computers. If the execution status is Running on at least one cloud computer, the overall status is considered Running.
    
-   Success: If the execution status is Success on at least one cloud computer and either Success or Stopped on all other cloud computers, the overall status is considered Success.
    
-   Failed: If the execution status is Stopped or Failed on all cloud computers, the overall status is considered Failed. If any execution status on cloud computers matches one of the following values, Failed is returned.
    
    -   Invalid: The command is invalid.
    -   Aborted: The command failed to be sent.
    -   Failed: The command is executed, but the exit code is not 0.
    -   Timeout: The command execution timed out.
    -   Error: An error occurred when the command is being executed.
-   Stopping: The command execution is being stopped. If the execution status is Stopping on at least one cloud computer, the overall status is considered Stopping.
    
-   Stopped: The command execution stops. If the execution status is Stopped on at least one cloud computer, the overall status is considered Stopped. If any execution status on cloud computers matches one of the following values, Stopped is returned.
    
    -   Cancelled: The command execution is canceled.
    -   Terminated: The command execution is terminated.
-   PartialFailed: The command execution succeeded on some cloud computers but failed on others. If the execution status on any cloud computer is Success, Failed, or Stopped, the overall status is considered PartialFailed.
    

Pending

CreationTime

string

The time when the execution task is created.

2020-12-19T09:15:46Z

EndUserId

string

The ID of the end user.

User1

InvokeDesktops

array<object>

The cloud computers on which the command is executed.

InvokeDesktop

object

The cloud computer on which the command is executed.

InvocationStatus

string

The execution progress of the command on a single cloud computer.

Success

Output

string

The command output.

-   When the `IncludeOutput` parameter is set to false, the output is not returned.
-   When the `ContentEncoding` parameter is set to Base64, the output is returned as a Base64-encoded string.

OutPutTestmsg

CreationTime

string

The time when the command execution was performed.

2020-12-20T06:15:54Z

UpdateTime

string

The time when the execution status was updated.

2020-12-25T06:15:56Z

Repeats

integer

The number of times the command has been executed on the cloud computer.

0

DesktopId

string

The cloud computer ID.

ecd-7w78ozhjcwa3u\*\*\*\*

Dropped

integer

The size of the text that is truncated and discarded when the Output value exceeds 24 KB in size.

0

StartTime

string

The start time of the command execution.

2020-12-20T06:15:55Z

StopTime

string

The stop time of the command execution (StopInvocatio).

2020-12-25T09:15:47Z

FinishTime

string

The time when the command execution ended.

2020-12-20T06:15:56Z

ExitCode

long

The exit code of the execution.

0

ErrorCode

string

The code explaining why the command failed to be sent or executed. Valid values:

-   Null: The command is executed successfully.
-   InstanceNotExists: The specified cloud computer does not exist or is released.
-   InstanceReleased: The cloud computer is released during the execution.
-   InstanceNotRunning: The cloud computer is not running during the execution.
-   CommandNotApplicable: The command cannot be executed on the specified cloud computer.
-   ClientNotRunning: The Cloud Assistant agent is not running.
-   ClientNotResponse: The Cloud Assistant agent does not respond.
-   ClientIsUpgrading: The Cloud Assistant agent is being updated.
-   ClientNeedUpgrade: The Cloud Assistant agent needs to be updated.
-   DeliveryTimeout: The command sending times out.
-   ExecutionTimeout: The command execution times out.
-   ExecutionException: An exception occurs when the command is being executed.
-   ExecutionInterrupted: The command execution is interrupted.
-   ExitCodeNonzero: The command execution completes, but the exit code is not 0.

InstanceNotExists

ErrorInfo

string

The message explaining why the command failed to be sent or executed. Valid values:

-   Null: The command is executed successfully.
-   the specified instance does not exists: The specified cloud computer does not exist or is released.
-   the instance has released when create task: The cloud computer is released during the execution.
-   the instance is not running when create task: The cloud computer is not running during the execution.
-   the command is not applicable: The command cannot be executed on the specified cloud computer.
-   the aliyun service is not running on the instance: The Cloud Assistant agent is not running.
-   the aliyun service in the instance does not response: The Cloud Assistant agent does not respond.
-   the aliyun service in the instance is upgrading now: The Cloud Assistant agent is being updated.
-   the aliyun service in the instance need upgrade: The Cloud Assistant agent needs to be updated.
-   the command delivery has been timeout: The command sending times out.
-   the command execution has been timeout: The command execution times out.
-   the command execution got an exception: An exception occurs when the command is being executed.
-   the command execution has been interrupted: The command execution is interrupted.
-   the command execution exit code is not zero: The command execution completes, but the exit code is not 0.

The specified instance does not exist.

DesktopName

string

The cloud computer name.

demo1234

InvokeDesktopCount

integer

The total number of cloud computers on which the command is executed.

1

InvokeDesktopSucceedCount

integer

The total number of cloud computers on which the command execution succeeds.

1

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Invocations": [
    {
      "InvokeId": "t-hz0jdfwd9f****",
      "CommandContent": "cnBtIC1xYSB8IGdyZXAgdnNm****",
      "CommandType": "RunPowerShellScript",
      "InvocationStatus": "Pending",
      "CreationTime": "2020-12-19T09:15:46Z",
      "EndUserId": "User1",
      "InvokeDesktops": [
        {
          "InvocationStatus": "Success",
          "Output": "OutPutTestmsg",
          "CreationTime": "2020-12-20T06:15:54Z",
          "UpdateTime": "2020-12-25T06:15:56Z",
          "Repeats": 0,
          "DesktopId": "ecd-7w78ozhjcwa3u****",
          "Dropped": 0,
          "StartTime": "2020-12-20T06:15:55Z",
          "StopTime": "2020-12-25T09:15:47Z",
          "FinishTime": "2020-12-20T06:15:56Z",
          "ExitCode": 0,
          "ErrorCode": "InstanceNotExists",
          "ErrorInfo": "The specified instance does not exist.",
          "DesktopName": "demo1234"
        }
      ],
      "InvokeDesktopCount": 1,
      "InvokeDesktopSucceedCount": 1
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-13

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeInvocations?updateTime=2024-08-13#workbench-doc-change-demo)

2023-05-18

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeInvocations?updateTime=2023-05-18#workbench-doc-change-demo)

2022-10-18

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeInvocations?updateTime=2022-10-18#workbench-doc-change-demo)

2022-09-29

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeInvocations?updateTime=2022-09-29#workbench-doc-change-demo)
