Modifies the execution information of a Cloud Assistant scheduled command task, including modifying the content and execution frequency of the command and adding Elastic Compute Service (ECS) instances or Alibaba Cloud managed instances to the command task.

## Operation description

-   You can modify the execution information of a task that runs a command in one of the following modes. To query the execution mode of a command, you can call the [DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations) operation and check the `RepeatMode` value in the response.
    
    -   Period: The task runs the command on a schedule.
    -   NextRebootOnly: The task runs the command the next time the associated instances start.
    -   EveryReboot: The task runs the command every time the associated instances start.
-   You can modify the execution information of a command task in one of the following execution states. To query the execution status of a command, you can call the [DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations) operation and check the `InvocationStatus` value.
    
    -   Pending: The command is being verified or sent. When the execution state on at least one instance is Pending, the overall execution state is Pending.
    -   Running: The command is being run on instances. When the execution state on at least one instance is Running, the overall execution state is Running.
    -   Scheduled: The command that is set to run on a schedule is sent and waiting to be run. When the execution state on at least one instance is Scheduled, the overall execution state is Scheduled.
    -   Stopping: The command task is being stopped. When the execution state on at least one instance is Stopping, the overall execution state is Stopping.
-   Before you modify the execution information of a scheduled task, such as the command content, custom parameters, and execution frequency, make sure that the version of Cloud Assistant Agent on the ECS instances or managed instances associated with the task is later than the following versions:
    
    -   Linux: 2.2.3.541
    -   Windows: 2.1.3.541
    -   If the `InvalidOperation.CloudAssistantVersionUnsupported` error code is returned in the response, update Cloud Assistant Agent to the latest version.
-   You cannot modify `CommandContent` for a common Cloud Assistant command.
    
-   If you modify the `CommandContent` value of a command and set `KeepCommand` to `true` when you call the [InvokeCommand](/help/en/ecs/api-invokecommand) or [RunCommand](/help/en/ecs/api-runcommand) operation to run the command, a new command is added and retained. The new command consumes the quota for Cloud Assistant commands. You can retain up to 500 to 50,000 Cloud Assistant commands in each region. You can apply for a quota increase. For information about how to query and increase quotas, see [Manage quotas](/help/en/ecs/user-guide/quota-management).
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInvocationAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInvocationAttribute)

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

ecs:ModifyInvocationAttribute

update

\*Invocation

`acs:ecs:{#regionId}:{#accountId}:invocation/{#invocationId}`

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

The region ID.

cn-hangzhou

InstanceId

array

No

The IDs of the ECS instances or managed instances that you want to add to the scheduled command task.

string

No

The ID of the ECS instance or managed instance that you want to add to the scheduled command task. The total number of instances in the scheduled command task after you add ECS instances or managed instances cannot exceed 100.

i-bp1i7gg30r52z2em\*\*\*\*

InvokeId

string

Yes

The execution ID of the command.

t-hz0jdfwd9f\*\*\*\*

CommandContent

string

No

The content of the command after modification. The command content can be plaintext or Base64-encoded. Take note of the following items:

-   You can specify whether to retain the command after the command is run when you created the command. If you specified to retain the command, the Base64-encoded command content cannot exceed 18 KB in size. If you specified not to retain the command, the Base64-encoded command content cannot exceed 24 KB in size.
    
-   If the command content is Base64-encoded, set `ContentEncoding` to Base64.
    
-   If you set `EnableParameter` to true, the custom parameter feature is enabled and you can configure custom parameters based on the following rules:
    
    -   You can define custom parameters in the `{{}}` format. Within `{{}}`, the spaces and line feeds before and after the parameter names are ignored.
    -   The number of custom parameters cannot exceed 20.
    -   A custom parameter name can contain letters, digits, underscores (\_), and hyphens (-). The name is case-insensitive. The ACS:: prefix cannot be used to specify non-built-in environment parameters.
    -   Each custom parameter name cannot exceed 64 bytes in length.
-   You can specify built-in environment parameters as custom parameters. Then, when you run the command, these parameters are automatically specified by Cloud Assistant. You can specify the following built-in environment parameters:
    
    -   `{{ACS::RegionId}}`: the region ID.
        
    -   `{{ACS::AccountId}}`: the UID of the Alibaba Cloud account.
        
    -   `{{ACS::InstanceId}}`: the instance ID. If you want to specify `{{ACS::InstanceId}}` as a built-in environment variable, make sure that the Cloud Assistant Agent version is not earlier than the following ones:
        
        -   Linux: 2.2.3.309
        -   Windows: 2.1.3.309
    -   `{{ACS::InstanceName}}`: the instance name. When the command is run on multiple instances, if you want to specify `{{ACS::InstanceName}}` as a built-in environment variable, make sure that the Cloud Assistant Agent version is not earlier than the following ones:
        
        -   Linux: 2.2.3.344
        -   Windows: 2.1.3.344
    -   `{{ACS::InvokeId}}`: the ID of the task. If you want to specify `{{ACS::InvokeId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following ones:
        
        -   Linux: 2.2.3.309
        -   Windows: 2.1.3.309
    -   `{{ACS::CommandId}}`: the command ID. If you want to specify `{{ACS::CommandId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following ones:
        
        -   Linux: 2.2.3.309
        -   Windows: 2.1.3.309

ZWNobyAxMjM=

EnableParameter

boolean

No

Specifies whether to include custom parameters in the command.

-   If you want to enable the custom parameter feature, or configure `Parameters` to modify the custom parameters in the command, set EnableParameter to `true`.
-   If you do not want to configure `Parameters` to modify the custom parameters in the command, leave EnableParameter empty or set it to `false`.

false

Parameters

object

No

The key-value pairs of the custom parameters that are passed in if custom parameters are included in the command.

You can specify 0 to 10 custom parameters. Take note of the following items:

-   The key of a custom parameter can be up to 64 characters in length and cannot be an empty string.
-   The value of a custom parameter can be an empty string.
-   If you specified to retain the command when you create the command task, the total size of the custom parameters and original command content that are encoded in Base64 cannot exceed 18 KB. If you specified not to retain the command when you create the command task, the total size of the custom parameters and original command content that are encoded in Base64 cannot exceed 24 KB.
-   The custom parameter names that are specified by Parameters must be included in the custom parameter names that you specified when you created the command. You can use empty strings to represent the parameters that are not passed in.

This parameter is empty by default, which indicates not to modify the key-value pairs of the custom parameters.

{"name":"Jack", "accessKey":"LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*"}

Frequency

string

No

The frequency at which to run the command. This parameter takes effect only when `RepeatMode` is set to `Period`. You can configure a command to run at a fixed interval based on a rate expression, run only once at a specific point in time, or run at designated points in time based on a cron expression.

-   To run the command at a fixed interval, use a rate expression to specify the interval. You can specify the interval in seconds, minutes, hours, or days. This option is suitable for scenarios in which tasks need to be executed at a fixed interval. Specify the interval in the following format: `rate(<Execution interval value> <Execution interval unit>)`. For example, specify `rate(5m)` to run the command every 5 minutes. Take note of the following limits when you specify an interval:
    
    -   The specified interval must be in the range of 60 seconds to 7 days and must be longer than the timeout period specified when you created the scheduled task.
    -   The interval is the amount of time that elapses between two consecutive executions. The interval is irrelevant to the amount of time that is required to run the command once. For example, you set the interval to 5 minutes and the command requires 2 minutes to run once. Each time the command running is complete, the system waits 3 minutes instead of 5 minutes before the system runs the command again.
    -   The point in time at which the command is run the next time is calculated based on the creation time of the task (the [CreationTime](/help/en/ecs/api-describeinvocations) value returned by the `DescribeInvocations` operation) and the modified execution interval.
-   To run a command only once at a specific time, specify a point in time and a time zone. Specify the point in time in the `at(yyyy-MM-dd HH:mm:ss <Time zone>)` format, which indicates `at(Year-Month-Day Hours:Minutes:Seconds <Time zone>)`. If you do not specify a time zone, the Coordinated Universal Time (UTC) time zone is used by default. You can specify a time zone in the following forms:
    
    -   The time zone name. Examples: `Asia/Shanghai` and `America/Los_Angeles`.
    -   The time offset from GMT. Examples: `GMT+8:00` (UTC+8) and `GMT-7:00` (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
    -   The time zone abbreviation. Only UTC is supported.
    
    For example, to configure a command to run only once at 13:15:30 on June 6, 2022 (Shanghai time), set the time to `at(2022-06-06 13:15:30 Asia/Shanghai)`. To configure a command to run only once at 13:15:30 on June 6, 2022 (UTC-7), set the time to `at(2022-06-06 13:15:30 GMT-7:00)`.
    
-   To run a command at designated points in time, use a cron expression to define the schedule. Specify a schedule in the `<Cron expression> <Time zone>` format. The cron expression is in the `<Seconds> <Minutes> <Hours> <Day of the month> <Month> <Day of the week> <Year (optional)>` format. The system calculates the execution times of the command based on the specified cron expression and time zone and runs the command as scheduled. If you do not specify a time zone, the system time zones of the instances on which you want to run the command are used by default. For information about cron expressions, see [Cron expressions](/help/en/ecs/user-guide/cron-expressions). You can specify the time zone in the following forms:
    
    -   The time zone name. Examples: `Asia/Shanghai` and `America/Los_Angeles`.
    -   The time offset from GMT. Examples: `GMT+8:00` (UTC+8) and `GMT-7:00` (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
    -   The time zone abbreviation. Only UTC is supported. For example, to configure a command to run at 10:15:00 every day in 2022 (Shanghai time), set the schedule to `0 15 10 ? * * 2022 Asia/Shanghai`. To configure a command to run every half an hour from 10:00:00 to 11:30:00 every day in 2022 (UTC+8), set the schedule to `0 0/30 10-11 * * ? 2022 GMT+8:00`. To configure a command to run every 5 minutes from 14:00:00 to 14:55:00 every October every two years from 2022 in UTC, set the schedule to `0 0/5 14 * 10 ? 2022/2 UTC`.
    
    \*\*
    
    **Note** The minimum interval must be 10 seconds or longer and cannot be shorter than the timeout period of scheduled executions.
    

0 \*/20 \* \* \* \*

ContentEncoding

string

No

The encoding mode of the command content that is specified by `CommandContent`. Valid values (case-insensitive):

-   PlainText: The command content is not encoded.
-   Base64: The command content is encoded in Base64.

Default value: PlainText. If the value is invalid, the PlainText mode is used.

PlainText

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

CommandId

string

The command ID.

-   A new command is added and the `CommandId` value of the new command is returned only when `CommandContent` is changed.
-   No new command is added and the `CommandId` value of the command that is running is returned if `CommandContent` is not changed.
-   If you set `KeepCommand` to `true` when you called the [InvokeCommand](/help/en/ecs/api-invokecommand) or [RunCommand](/help/en/ecs/api-runcommand) operation, a new command is added and retained. Otherwise, commands related to the task are deleted after all executions of the task are complete or the task is manually stopped.

c-hz01272yr52\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "CommandId": "c-hz01272yr52****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.Frequency

The specified parameter Frequency is not valid.

The specified parameter Frequency is illegal.

400

InvalidParameters.KeyDuplicate

The key in the parameter Parameters cannot be duplicated.

Keys in parameter Parameters cannot be duplicated.

400

InvalidParameters.KeyNotMatch

The key in the parameter Parameters do not match those defined when creating the command.

The key in the parameter Parameters does not match the one defined when the command was created.

400

InvalidParameters.KeyMalformed

The key in the parameter Parameters is not valid.

\-

400

InvalidParameters.KeyEmpty

The key in the parameter Parameters cannot be empty.

The key in the parameter Parameters cannot be empty.

400

InvalidCommandContent.DecodeError

The specified parameter CommandContent can not be Base64 decoded.

Parameter CommandContent cannot be Base64 decoded.

403

InvalidInstanceId.OSTypeUnsupported

The OS type of the instance corresponding to the parameter InstanceId does not support the specified command type.

\-

403

InvalidOperation.RepeatModeUnsupported

The operation is not supported for current repeat mode of invocation.

\-

403

InvalidOperation.InvokeAlreadyFinished

The operation is not supported for finished invocation.

The operation is not supported for completed tasks.

403

InvalidOperation.CloudAssistantVersionUnsupported

The operation is not supported for current CloudAssistant version of instance.

\-

403

InvalidOperation.ModifyPublicCommandUnsupported

Modification of the content of Public Command is not supported.

Modifying the contents of public commands is not supported.

403

InvalidCommandContent.LengthLimitExceeded

The length of the parameter CommandContent exceeds the limit of %s KB characters.

\-

403

InvalidParameters.CountLimitExceeded

The count of the parameter Parameters exceeds the limit of 10.

The number of parameter Parameters exceeds the limit of 10.

403

InvalidParameters.KeyLengthLimitExceeded

The length of the key in the parameter Parameters exceeds the limit of 64 characters.

\-

403

InvalidInstanceId.CountLimitExceeded

The count of the parameter InstanceId exceeds the limit of %s.

\-

403

CommandLimitExceeded

The count of command in current region exceeds the limit of %s.

\-

403

InvalidParameters.ValueTypeUnsupported

The type of the value in the parameter Parameters is not supported.

The type of the value Parameters the parameter is not supported.

404

InvalidInvokeId.NotFound

The specified parameter InvokeId does not exist.

The specified command execution ID does not exist.

404

InvalidInstanceId.NotFound

The specified parameter InstanceId does not exist.

The specified instance ID does not exist.

404

InvalidRegionId.NotFound

The specified parameter RegionId does not exist.

\-

404

InvalidCommandId.NotFound

The specified CommandId does not exist.

\-

500

InternalError

An error occurred when you dispatched the request.

An error occurred while sending the request, please try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInvocationAttribute?updateTime=2025-12-10#workbench-doc-change-demo)

2024-12-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInvocationAttribute?updateTime=2024-12-05#workbench-doc-change-demo)

2024-04-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInvocationAttribute?updateTime=2024-04-03#workbench-doc-change-demo)
