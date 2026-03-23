Creates a Cloud Assistant command, which can be a Shell, PowerShell, or batch command.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   You can create commands of the following types:
    
    -   Batch commands (RunBatScript), applicable to Windows instances
    -   PowerShell commands (RunPowerShellScript), applicable to Windows instances
    -   Shell commands (RunShellScript), applicable to Linux instances
-   You can specify the Timeout parameter to set the maximum timeout period for executions of a command on Elastic Compute Service (ECS) instances. If an execution times out, [Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent) forcefully terminates the command process by canceling the process ID (PID) of the command.
    
    -   For a one-time task, when the execution times out, the state of the command ( [InvokeRecordStatus](/help/en/ecs/api-describeinvocationresults) ) becomes Failed.
        
    -   For a scheduled task, take note of the following items:
        
        -   The timeout period takes effect on each execution.
        -   When an execution times out, the state ( [InvokeRecordStatus](/help/en/ecs/api-describeinvocationresults) ) of the command becomes Failed.
        -   The timeout of one execution does not affect the subsequent executions.
-   You can retain up to 500 to 50,000 Cloud Assistant commands in each region. You can also apply for a quota increase. For information about how to query and increase quotas, see [Manage quotas](/help/en/ecs/user-guide/quota-management).
    
-   You can use WorkingDir to specify the execution directory of a Cloud Assistant command. For Linux instances, the default execution directory of Cloud Assistant commands is the home directory of the root user, which is `/root`. For Windows instances, the default execution directory of Cloud Assistant commands is the directory where the Cloud Assistant Agent process resides, such as `C:\Windows\System32`.
    
-   You can enable the custom parameter feature for a Cloud Assistant command by setting EnableParameter to true. When you set CommandContent, you can define custom parameters in the {{parameter}} format. Then, when the [InvokeCommand](/help/en/ecs/api-invokecommand) operation is called, the key-value pairs of custom parameters are passed in. For example, if a command is `echo {{name}}`, the Parameters parameter can be used to pass in the `<name, Jack>` key-value pair when the InvokeCommand operation is called. The name key of the custom parameter is automatically replaced by the paired Jack value to generate a new command. As a result, the `echo Jack` command is run.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateCommand)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateCommand)

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

ecs:CreateCommand

create

\*Command

`acs:ecs:{#regionId}:{#accountId}:command/*`

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

The ID of the region in which to create the command. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Name

string

Yes

The name of the command. The name supports all character sets and can be up to 128 characters in length.

testName

Description

string

No

The description of the command. The description supports all character sets and can be up to 512 characters in length.

testDescription

Type

string

Yes

The command type. Valid values:

-   RunBatScript: batch commands. These commands are applicable to Windows instances.
-   RunPowerShellScript: PowerShell commands. These commands are applicable to Windows instances.
-   RunShellScript: shell commands. These commands are applicable to Linux instances.

RunShellScript

CommandContent

string

Yes

The Base64-encoded content of the command. Take note of the following items:

-   The value must be Base64-encoded and cannot exceed 18 KB in size.
    
-   You can use custom parameters in the command content. To enable the custom parameter feature, you must set `EnableParameter` to true.
    
    -   Custom parameters are defined in the `{{}}` format. Within `{{}}`, the spaces and line feeds before and after the parameter names are ignored.
    -   You can specify up to 20 custom parameters.
    -   A custom parameter name can contain only letters, digits, underscores (\_), and hyphens (-). The name is case-insensitive. The ACS:: prefix cannot be used to specify non-built-in environment parameters.
    -   Each custom parameter name can be up to 64 bytes in length.
-   You can specify built-in environment parameters as custom parameters in a command. When you run the command, Cloud Assistant automatically uses the environment parameter values for the custom parameters. You can specify the following built-in environment variables:
    
    -   `{{ACS::RegionId}}`: the region ID.
        
    -   `{{ACS::AccountId}}`: the UID of the Alibaba Cloud account.
        
    -   `{{ACS::InstanceId}}`: the instance ID. If you want to run the command on multiple instances and specify `{{ACS::InstanceId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
        
        -   Linux: 2.2.3.309
        -   Windows: 2.1.3.309
    -   `{{ACS::InstanceName}}`: the instance name. If you want to run the command on multiple instances and specify `{{ACS::InstanceName}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
        
        -   Linux: 2.2.3.344
        -   Windows: 2.1.3.344
    -   `{{ACS::InvokeId}}`: the ID of the task. If you want to specify `{{ACS::InvokeId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
        
        -   Linux: 2.2.3.309
        -   Windows: 2.1.3.309
    -   `{{ACS::CommandId}}`: the command ID. If you want to call the [RunCommand](/help/en/ecs/api-runcommand) operation to run the command and specify `{{ACS::CommandId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
        
        -   Linux: 2.2.3.309
        -   Windows: 2.1.3.309

ZWNobyAxMjM=

WorkingDir

string

No

The execution path of the command on ECS instances. The value can be up to 200 characters in length.

Default values:

-   For Linux instance, the default value is the home directory of the root user, which is the `/root` directory.
-   For Windows instances, the default value is the directory where the Cloud Assistant Agent process resides, such as `C:\Windows\System32\`.

**Note** If you set WorkingDir to a directory other than default ones, make sure that the directory exists on the instances.

/root/

Timeout

long

No

he maximum timeout period for the command execution on the instance. Unit: seconds. When a command that you created cannot be run, the command times out. When a command execution times out, Cloud Assistant Agent forcefully terminates the command process by canceling the PID.

Default value: 60.

60

EnableParameter

boolean

No

Specifies whether to use custom parameters in the command.

Default value: false.

false

ContentEncoding

string

No

The encoding mode of the command content (CommandContent). Valid values:

-   PlainText: The command content is not encoded.
-   Base64: The command content is Base64-encoded.

Default value: Base64.

**Note** If the specified value of this parameter is invalid, Base64 is used by default.

PlainText

ResourceGroupId

string

No

The ID of the resource group to which to assign the command.

rg-123\*\*\*\*\*\*

Launcher

string

No

The launcher for script execution. The value cannot exceed 1 KB in length.

python3 -u {{ACS::ScriptFileName|Ext(".py")}}

Tag

array<object>

No

The tags to add to the command.

object

No

Tag N to add to the command.

Key

string

No

The key of tag N. Valid values of N: 1 to 20. The tag key cannot be an empty string.

If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags, call [ListTagResources](/help/en/ecs/api-listtagresources) operation.

The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string.

It can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

CommandId

string

The ID of the command.

c-7d2a745b412b4601b2d47f6a768d\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "CommandId": "c-7d2a745b412b4601b2d47f6a768d****",
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

CmdParam.EmptyKey

You must specify the parameter names.

Some required parameters are not specified.

400

CmdParam.InvalidParamName

Invalid parameter name. The name can contain only lowercase letters (a to z), uppercase letters (A to Z), numbers (0 to 9), hyphens (-), and underscores (\_).

The custom parameter name is invalid. A custom parameter name can contain only letters, digits, underscores (\_), and hyphens (-).

400

CmdContent.DecodeError

The CommandContent can not be base64 decoded.

\-

400

InvalidParameter.WorkingDir

The specified parameter WorkingDir is not valid.

\-

403

CmdContent.ExceedLimit

The length of the command content exceeds the upper limit.

The length of command content exceeds the upper limit.

403

CmdName.ExceedLimit

The length of the command name exceeds the upper limit.

The length of the command name exceeds the upper limit.

403

CmdDesc.ExceedLimit

The length of the command description exceeds the upper limit.

The length of the command description exceeds the upper limit.

403

CmdCount.ExceedQuota

The total number of commands in the current region exceeds the quota.

The maximum number of Cloud Assistant commands in the current region has been exceeded.

403

CmdParamCount.ExceedLimit

The maximum number of custom parameters is exceeded.

The number of specified parameters exceeds the upper limit.

403

CmdParamName.ExceedLimit

The maximum length of a parameter name is exceeded.

The length of the custom parameter name exceeds the upper limit.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

403

InvalidStatus.ResourceGroup

You cannot perform an operation on a resource group that is being created or deleted.

Operation not allowed while resource group is being created or deleted.

403

InvalidParameterCharacter.CommandName

The command Name contains illegal characters.

The command Name contains illegal characters.

403

InvalidParameterCharacter.CommandDescription

The command Description contains illegal characters.

The command Description contains illegal characters.

403

InvalidParameterCharacter.CommandWorkingDir

The command WorkingDir contains illegal characters.

The command WorkingDir contains illegal characters.

403

InvalidLauncher.LengthLimitExceeded

The length of the parameter Launcher exceeds the limit of 1 KB characters.

The length of the argument Launcher exceeds the limit of 1 KB characters.

403

InvalidTimeout.ExceedLimit

The specified parameter Timeout exceeds the upper limit.

\-

404

InvalidCmdType.NotFound

The specified command type does not exist.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateCommand?updateTime=2025-12-09#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateCommand?updateTime=2024-12-05#workbench-doc-change-demo)

2024-10-21

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateCommand?updateTime=2024-10-21#workbench-doc-change-demo)

2024-05-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateCommand?updateTime=2024-05-11#workbench-doc-change-demo)

2023-10-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateCommand?updateTime=2023-10-24#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateCommand?updateTime=2023-05-12#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateCommand?updateTime=2022-02-25#workbench-doc-change-demo)
