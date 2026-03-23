Modifies the parameters of a Cloud Assistant command.

## Operation description

You can modify a command when it is run. After the command is modified, the new command content applies to subsequent executions.

You cannot modify the command type. For example, you cannot change a shell command (RunShellScript) to a batch command (RunBatScript).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyCommand)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyCommand)

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

ecs:ModifyCommand

update

\*Command

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

The region ID of the command. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

CommandId

string

Yes

The command ID. You can call the [DescribeCommands](/help/en/ecs/api-describecommands) operation to query all available command IDs.

c-hz01272yr52\*\*\*\*

Name

string

No

The command name. The name supports all character sets and can be up to 128 characters in length.

test-CommandName

Description

string

No

The command description. The description supports all character sets and can be up to 512 characters in length.

This is description.

CommandContent

string

No

**Note** This parameter is no longer used and does not take effect.

echo

WorkingDir

string

No

The working directory of the command. The value can be up to 200 characters in length.

/home/

Timeout

long

No

The maximum timeout period for the command to be run on the instance. Unit: seconds. When a command cannot run within the specified time range, the command times out. Then, the command process is forcibly terminated by canceling the process ID (PID) of the command.

120

Launcher

string

No

The launcher for script execution. The value cannot exceed 1 KB in length.

python3 -u {{ACS::ScriptFileName|Ext(".py")}}

## Response parameters

Parameter

Type

Description

Example

object

The ID of the request.

RequestId

string

The ID of the request.

0DE9B41E-EF0D-40A0-BB43-37749C5BDA9C

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0DE9B41E-EF0D-40A0-BB43-37749C5BDA9C"
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

403

CmdName.Readonly

The command name is readonly after publishing.

The command is published and cannot have its name changed.

403

CmdName.ExceedLimit

The length of the command name exceeds the upper limit.

The length of the command name exceeds the upper limit.

403

CmdContent.ExceedLimit

The length of the command content exceeds the upper limit.

The length of command content exceeds the upper limit.

403

CmdDesc.ExceedLimit

The length of the command description exceeds the upperlimit.

The length of the command description exceeds the upper limit.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

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

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidCmdId.NotFound

The specified command ID does not exist.

The specified CommandId parameter is invalid. Check the parameter value. You can call the DescribeCommands operation to query all available command IDs.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCommand?updateTime=2025-12-09#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCommand?updateTime=2024-12-05#workbench-doc-change-demo)

2024-10-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCommand?updateTime=2024-10-29#workbench-doc-change-demo)

2024-05-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCommand?updateTime=2024-05-11#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCommand?updateTime=2023-05-12#workbench-doc-change-demo)

2022-02-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCommand?updateTime=2022-02-23#workbench-doc-change-demo)

2022-02-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCommand?updateTime=2022-02-23#workbench-doc-change-demo)
