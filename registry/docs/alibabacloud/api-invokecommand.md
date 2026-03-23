Specify parameters such as CommandId, InstanceId, and ResourceGroupId to trigger a Cloud Assistant command for one or more ECS instances.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   The ECS instances on which you want to run the Cloud Assistant command must meet the following requirements. If multiple ECS instances are specified and one of the instances does not meet the requirements for running the command, the call fails. You must specify instances that meet the requirements and call the InvokeCommand operation again.
    
    -   The instances are in the Running (`Running`) state. You can call the [DescribeInstances](/help/en/ecs/api-describeinstances) operation to query the status of instances.
    -   Cloud Assistant Agent is installed on the instances. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
    -   If the command is a PowerShell command, make sure that the instances have the PowerShell module configured.
-   You can configure the command to run only once on the instances.
    
-   You can configure the command to run on the instances based on a schedule.
    
    -   The schedule is specified by Frequency. The results of each execution of the command do not affect the next execution of the command.
    -   When you use a cron expression to specify a schedule, you can specify a time zone based on your business requirements. If you do not specify a time zone, the schedule is determined by the system time of the instances. Make sure that the time or time zone of the instances meets your business requirements. For more information, see [Manage the time synchronization service](/help/en/ecs/user-guide/alibaba-cloud-ntp-server/).
    
    To ensure that scheduled tasks can run as expected, make sure that the version of Cloud Assistant Agent is not earlier than the following versions. A scheduled task can run a command at a fixed interval, only once at a specific time, or at specific times based on a cron expression in a specified year or time zone. If the ClientNeedUpgrade error code is returned, you must upgrade Cloud Assistant Agent to the latest version. For more information, see [Upgrade or disable upgrades for Cloud Assistant Agent](/help/en/ecs/user-guide/upgrade-or-disable-upgrades-for-the-cloud-assistant-agent).
    
    -   Linux: 2.2.3.282
    -   Windows: 2.1.3.282
-   Command executions may fail due to instance status exceptions, network exceptions, or exceptions on Cloud Assistant Agent. If a command execution fails, no execution information is generated. For more information, see [Check execution results and troubleshoot common issues](/help/en/ecs/user-guide/check-execution-results-and-troubleshoot-common-issues).
    
-   If you enable the custom parameter feature when you create the command, you must specify custom parameters (`Parameters`) to run the command.
    
-   Before you run the command on instances, especially new instances, we recommend that you call the [DescribeCloudAssistantStatus](/help/en/ecs/api-describecloudassistantstatus) operation to query the status of Cloud Assistant Agent on the instances and run the command when the value of CloudAssistantStatus in the response is true for the instances.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/InvokeCommand)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/InvokeCommand)

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

ecs:InvokeCommand

update

\*Command

`acs:ecs:{#regionId}:{#accountId}:command/{#commandId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

-   ecs:CommandRunAs

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

The region ID of the command. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group to which to assign the command executions. When you set this parameter, take note of the following items:

-   The instances specified by InstanceId.N must belong to the specified resource group.
-   After the command is run, you can call the [DescribeInvocations](/help/en/ecs/api-describeinvocations) or [DescribeInvocationResults](/help/en/ecs/api-describeinvocationresults) operation with ResourceGroupId set to query the execution results in the specified resource group.

rg-bp67acfmxazb4p\*\*\*\*

CommandId

string

Yes

The command ID. You can call the [DescribeCommands](/help/en/ecs/api-describecommands) operation to query all available command IDs.

**Note** Common Cloud Assistant commands can be run based on their names. For more information, see [View and run common Cloud Assistant commands](/help/en/ecs/user-guide/view-and-run-common-cloud-assistant-commands).

c-e996287206324975b5fbe1d\*\*\*\*

RepeatMode

string

No

Specifies how to run the command. Valid values:

-   Once: immediately runs the command.
-   Period: runs the command based on a schedule. If you set this parameter to `Period`, you must also configure the `Frequency` parameter.
-   NextRebootOnly: runs the command the next time the instance is started.
-   EveryReboot: The command is run every time the instances start.
-   DryRun: Specifies whether to perform only a dry run, without performing the actual request. The command does not take effect. The system checks the request, including the request parameters, instance execution environment, and Cloud Assistant Agent running status.

Default value:

-   If you do not specify `Frequency`, the default value is `Once`.
-   If you specify the `Frequency` parameter, `Period` is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.

Take note of the following items when you specify this property:

-   You can call the [StopInvocation](/help/en/ecs/api-stopinvocation) operation to stop the pending or scheduled executions of the command.
-   If you set this parameter to `Period` or `EveryReboot`, you can call the [DescribeInvocationResults](/help/en/ecs/api-describeinvocationresults) operation with `IncludeHistory` set to true to query the results of historical scheduled executions.

Once

Timed

boolean

No

**Note** This parameter is no longer used and does not take effect.

true

Frequency

string

No

The schedule on which to run the command. You can configure a command to run at a fixed interval based on a rate expression, run only once at a specific time, or run at specific times based on a cron expression.

-   To run a command at a fixed interval, use a rate expression to specify the interval. You can specify the interval in seconds, minutes, hours, or days. This option is suitable for scenarios in which tasks need to be executed at a fixed interval. Specify the interval in the following format: `rate(<Execution interval value><Execution interval unit>)`. For example, specify `rate(5m)` to run the command every 5 minutes. When you specify an interval, take note of the following limits:
    
    -   The interval can be anywhere from 60 seconds to 7 days, but must be longer than the timeout period of the scheduled task.
    -   The interval is the amount of time that elapses between two consecutive executions. The interval is irrelevant to the amount of time that is required to run the command once. For example, assume that you set the interval to 5 minutes and that it takes 2 minutes to run the command each time. Each time the command is run, the system waits 3 minutes before the system runs the command again.
    -   A task is not immediately executed after the task is created. For example, assume that you set the interval to 5 minutes for a task. The task begins to be executed 5 minutes after it is created.
-   To run a command only once at a specific time, specify a point in time and a time zone. Specify the point in time in the `at(yyyy-MM-dd HH:mm:ss <Time zone>)` format, which indicates `at(Year-Month-Day Hour:Minute:Second <Time zone>)`. If you do not specify a time zone, the Coordinated Universal Time (UTC) time zone is used by default. You can specify a time zone in the following forms:
    
    -   The time zone name. Examples: `Asia/Shanghai` and `America/Los_Angeles`.
    -   The time offset from GMT. Examples: `GMT+8:00` (UTC+8) and `GMT-7:00` (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
    -   The time zone abbreviation. Only UTC is supported.
    
    For example, to configure a command to run only once at 13:15:30 on June 6, 2022 (Shanghai time), set the time to `at(2022-06-06 13:15:30 Asia/Shanghai)`. To configure a command to run only once at 13:15:30 on June 6, 2022 (UTC-7), set the time to `at(2022-06-06 13:15:30 GMT-7:00)`.
    
-   To run a command at specific times, use a cron expression to define the schedule. Specify a schedule in the `<Cron expression> <Time zone>` format. The cron expression is in the `<seconds> <minutes> <hours> <day of the month> <month> <day of the week> <year (optional)>` format. The system calculates the execution times of the command based on the specified cron expression and time zone and runs the command as scheduled. If you do not specify a time zone, the system time zone of the instance on which you want to run the command is used by default. For more information about cron expressions, see [Cron expressions](/help/en/ecs/user-guide/cron-expressions). You can specify a time zone in the following forms:
    
    -   The time zone name. Examples: `Asia/Shanghai` and `America/Los_Angeles`.
    -   The time offset from GMT. Examples: `GMT+8:00` (UTC+8) and `GMT-7:00` (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
    -   The time zone abbreviation. Only UTC is supported. For example, to configure a command to run at 10:15:00 every day in 2022 (Shanghai time), set the schedule to `0 15 10 ? * * 2022 Asia/Shanghai`. To configure a command to run every half an hour from 10:00:00 to 11:30:00 every day in 2022 (UTC+8), set the schedule to `0 0/30 10-11 * * ? 2022 GMT+8:00`. To configure a command to run every 5 minutes from 14:00:00 to 14:55:00 every October every two years from 2022 in UTC, set the schedule to `0 0/5 14 * 10 ? 2022/2 UTC`.
    
    \*\*
    
    **Note** The minimum interval must be 10 seconds or more and cannot be shorter than the timeout period of scheduled executions.
    

0 \*/20 \* \* \* ?

Parameters

object

No

The key-value pairs of custom parameters to pass in when the custom parameter feature is enabled. You can specify up to 10 custom parameters.

-   Each key in a Map collection cannot be an empty string, and can be up to 64 characters in length.
-   Each value in a Map collection can be an empty string.
-   The size of the command after Base64 encoding, including the custom parameters and the original command content, cannot exceed 18 KB.
-   The custom parameter names that are specified by Parameters must be included in the custom parameter names that you specified when you created the command. You can use empty strings to represent the custom parameters that are not specified.

If you want to disable the custom parameter feature, you can leave this parameter empty.

{"name":"Jack", "accessKey":"LTAI\*\*\*\*\*\*\*\*\*\*\*\*"}

Username

string

No

The username to use to run the command on the ECS instances. The username cannot exceed 255 characters in length.

-   For Linux instances, the root username is used by default.
-   For Windows instances, the System username is used by default.

You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user. For more information, see [Run Cloud Assistant commands as a regular user](/help/en/ecs/user-guide/run-cloud-assistant-commands-as-a-regular-user).

test

WindowsPasswordName

string

No

The name of the password to use to run the command on a Windows instance. The name cannot exceed 255 characters in length.

If you do not want to use the default System user to run the command on Windows instances, specify both WindowsPasswordName and `Username`. To mitigate the risk of password leaks, the password is stored in plaintext in CloudOps Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName. For more information, see [Manage encryption parameters](/help/en/oos/getting-started/manage-encryption-parameters) and [Run Cloud Assistant commands as a regular user](/help/en/ecs/user-guide/run-cloud-assistant-commands-as-a-regular-user).

**Note** If you use the root username for Linux instances or the System username for Windows instances to run the command, you do not need to specify WindowsPasswordName.

axtSecretPassword

InstanceId

array

No

The IDs of instances on which you want to run the command. You can specify up to 100 instance IDs in each request. Valid values of N: 1 to 100.

You can apply for a quota increase in the Quota Center console. The quota name is Maximum number of instances supported for command execution.

string

No

The ID of instance N on which you want to run the command.

i-bp185dy2o3o6n\*\*\*\*

ContainerId

string

No

The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with `docker://`, `containerd://`, or `cri-o://` to specify container runtimes.

Take note of the following items:

-   If this parameter is specified, Cloud Assistant runs the command in the specified container of the instance.
    
-   If this parameter is specified, the command can run only on Linux instances on which Cloud Assistant Agent 2.2.3.344 or later is installed.
    
    -   For information about how to query the version of Cloud Assistant Agent, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
    -   For information about how to upgrade Cloud Assistant Agent, see [Upgrade or disable upgrades for Cloud Assistant Agent](/help/en/ecs/user-guide/upgrade-or-disable-upgrades-for-the-cloud-assistant-agent).
-   If this parameter is specified, the `Username` parameter that is specified in a request to call this operation and the `WorkingDir` parameter that is specified in a request to call the [CreateCommand](/help/en/ecs/api-createcommand) operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container. For more information, see [Use Cloud Assistant to run commands in containers](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).
    
-   If this parameter is specified, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to `#!/usr/bin/python` at the beginning of a script to specify a script interpreter. For more information, see [Use Cloud Assistant to run commands in containers](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).
    

ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea\*\*\*\*

ContainerName

string

No

The name of the container.

Take note of the following items:

-   If this parameter is specified, Cloud Assistant runs the command in the specified container of the instance.
    
-   If this parameter is specified, the command can run only on Linux instances on which Cloud Assistant Agent 2.2.3.344 or later is installed.
    
    -   For information about how to query the version of Cloud Assistant Agent, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
    -   For information about how to upgrade Cloud Assistant Agent, see [Upgrade or disable upgrades for Cloud Assistant Agent](/help/en/ecs/user-guide/upgrade-or-disable-upgrades-for-the-cloud-assistant-agent).
-   If this parameter is specified, the `Username` parameter that is specified in a request to call this operation and the `WorkingDir` parameter that is specified in a request to call the [CreateCommand](/help/en/ecs/api-createcommand) operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container. For more information, see [Use Cloud Assistant to run commands in containers](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).
    
-   If this parameter is specified, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to `#!/usr/bin/python` at the beginning of a script to specify a script interpreter. For more information, see [Use Cloud Assistant to run commands in containers](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).
    

test-container

Timeout

long

No

The timeout period for the command execution. Unit: seconds.

-   The timeout period cannot be less than 10 seconds.
-   A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.
-   If you do not specify this parameter, the timeout period that is specified when the command is created is used.
-   This timeout period is applicable only to this execution. The timeout period of the command is not modified.

60

Tag

array<object>

No

The tags of the command.

object

No

The tags of the command.

Key

string

No

The key of tag N to add to the command task. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N to add to the command task. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-42665544\*\*\*\*

ResourceTag

array<object>

No

The tags of the instance. If you do not specify InstanceId.N, the command is run on the instances that have the specified tags.

object

No

Tag N of the instance. If you do not specify InstanceId.N, the command is run on the instances that have the specified tags.

Key

string

No

The key of tag N of the instance.

Take note of the following items:

-   This parameter and InstanceId.N are mutually exclusive.
-   Valid values of N: 1 to 10. The tag key cannot be an empty string.
-   The number of instances that have the specified tags cannot exceed 100. If more than 100 instances have the specified tags, we recommend that you use batch tags such as batch: b1 to group the instances into batches of up to 100 instances.
-   The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N of the instance.

Take note of the following items:

-   Valid values of N: 1 to 10.
-   The tag value can be an empty string.
-   The tag value can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

TerminationMode

string

No

Specifies how to stop the command task when a command execution is manually stopped or times out. Valid values:

-   Process: stops the process of the command.
-   ProcessTree: stops the process tree of the command. In this case, the process of the command and all subprocesses of the process are stopped.

ProcessTree

Launcher

string

No

The launcher for script execution. The value cannot exceed 1 KB in length.

python3 -u {{ACS::ScriptFileName|Ext(".py")}}

WorkingDir

string

No

The execution path of the command on ECS instances. The value can be up to 200 characters in length.

-   If you do not specify this parameter, the execution path specified when the command is created is used.
-   This execution path is applicable only to this task. The execution path of the command is not changed.

/home/user

## Response parameters

Parameter

Type

Description

Example

object

InvokeId

string

The ID of the command task.

t-7d2a745b412b4601b2d47f6a768d\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "InvokeId": "t-7d2a745b412b4601b2d47f6a768d****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
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

InvalidParameter.WorkingDir

The specified parameter WorkingDir is not valid.

\-

400

MissingParam.InstanceId

The parameter instanceId is missing or empty.

\-

400

InvalidContainerId.Malformed

The specified parameter ContainerId is not valid.

The specified container ID is invalid.

400

InvalidContainerName.Malformed

The specified parameter ContainerName is not valid.

The specified container name is invalid.

400

InvalidClientToken.Malformed

The specified parameter clientToken is not valid.

\-

400

InvalidInstance.NotMatch

The specified instance type does not match the command.

The specified command cannot be run on the specified instance. Check whether the state of the instance meets the conditions for running the command.

400

MissingParam.Frequency

The frequency must be specified when you create a timed task.

The Frequency parameter is required when you create a recurring task.

400

InvalidParam.Frequency

The specified frequency is invalid.

The specified Frequency parameter is invalid.

400

Parameter.MissingValue

The parameter value of this command is required.

The required parameter is not specified.

400

Parameter.Disabled

Parameters cannot be passed in when the command customization function is disabled.

Do not specify Parameters when you disable the custom parameter feature.

400

InvalidParameter.Parameters

The specified parameter Parameters is not valid.

\-

400

NumberExceed.ResourceTags

The maximum number of ResourceTags is exceeded.

\-

400

MissingParameter.ResourceTagKey

You must specify ResourceTag.N.Key.

\-

400

InvalidResourceTagKey.Malformed

The specified ResourceTag key is not valid.

\-

400

InvalidResourceTagValue.Malformed

The specified ResourceTag value is not valid.

\-

400

Duplicate.ResourceTagKey

The ResourceTag contains duplicate keys.

\-

400

InvalidResourceTag.InstanceNotFound

InstanceIds are not found by the specified ResourceTag.

\-

400

InvalidResourceTag.ConflictWithInstanceIds

The specified param ResourceTag conflicts with InstanceId.

\-

403

InstanceIds.ExceedLimit

The number of instance IDs exceeds the upper limit.

The number of specified instance IDs exceeds the upper limit.

403

Invocation.ExceedQuota

The invocation quota in the current region has been reached for today.

The maximum daily number of commands that can be run in the specified region has been reached.

403

ParameterCount.ExceedLimit

The maximum number of parameters is exceeded.

The number of specified custom parameters exceeds the upper limit.

403

ParameterKey.ExceedLimit

The maximum length of a parameter name is exceeded.

The key length of a custom parameter exceeds the upper limit.

403

CmdContent.ExceedLimit

The maximum length of a command is exceeded.

The length of the command content exceeds the upper limit. Shorten your command.

403

ParameterKey.Duplicate

Parameter names cannot be duplicated.

A parameter that has the same name already exists. Parameter names must be unique.

403

Parameter.NotMatched

The passed-in parameters do not match the parameters defined when you created the command.

The custom parameters passed in do not match those specified when the command was created.

403

ParameterType.NotSupported

The type of parameter value is not supported.

\-

403

Username.ExceedLimit

The length of the username exceeds the upper limit.

The length of the username exceeds the upper limit.

403

WindowsPasswordName.ExceedLimit

The length of the WindowsPasswordName exceeds the upper limit.

\-

403

WindowsPasswordName.Missed

WindowsPasswordName must be specified when you create a Windows task.

\-

403

ParameterStore.NotSupported

Parameter Store is not supported in this region.

\-

403

TemporaryAccessKey.Error

The temporary accessKey is invalid.

\-

403

ParameterStore.InvalidParameters

The parameter is invalid in Parameter Store.

\-

403

ParameterStore.NoPermission

You have no access to Parameter Store.

\-

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

403

IdempotentParameterMismatch

The specified parameter has changed while using an already used clientToken.

\-

403

IdempotentProcessing

The previous idempotent request(s) is still processing.

A previous idempotent request is being processed. Try again later.

403

InvalidLauncher.LengthLimitExceeded

The length of the parameter Launcher exceeds the limit of 1 KB characters.

The length of the argument Launcher exceeds the limit of 1 KB characters.

403

InvalidParameterCharset.Parameters

The parameter Parameters contains illegal charset.

The command parameter contains an illegal character set.

404

InvalidRepeatMode.NotFound

The specified repeat mode does not exist.

The specified command execution mode does not exist.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInstance.NotFound

The specified instance does not exist.

\-

404

InvalidCmdId.NotFound

The specified command ID does not exist.

The specified CommandId parameter is invalid. Check the parameter value. You can call the DescribeCommands operation to query all available command IDs.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidTerminationMode.NotFound

The specified parameter TerminationMode does not exist.

The specified parameter TerminationMode does not exist.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2025-12-09#workbench-doc-change-demo)

2025-05-15

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2025-05-15#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2024-12-05#workbench-doc-change-demo)

2024-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2024-10-28#workbench-doc-change-demo)

2024-08-01

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2024-08-01#workbench-doc-change-demo)

2024-05-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2024-05-14#workbench-doc-change-demo)

2024-04-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2024-04-12#workbench-doc-change-demo)

2024-01-23

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2024-01-23#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2023-05-12#workbench-doc-change-demo)

2023-04-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2023-04-25#workbench-doc-change-demo)

2022-10-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2022-10-27#workbench-doc-change-demo)

2022-01-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2022-01-06#workbench-doc-change-demo)

2022-01-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InvokeCommand?updateTime=2022-01-06#workbench-doc-change-demo)
