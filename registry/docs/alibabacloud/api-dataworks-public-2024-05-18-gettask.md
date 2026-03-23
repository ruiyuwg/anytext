Queries the information about a task.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/GetTask)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/GetTask)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

Id

long

Yes

The task ID.

1234

ProjectEnv

string

No

The environment of the workspace. Valid values:

-   Prod: production environment
-   Dev: development environment

Prod

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

22C97E95-F023-56B5-8852-B1A77A17XXXX

Task

object

The details of the task.

Name

string

The name of the task.

SQL node

Description

string

The description of the task.

test

WorkflowId

long

The workflow ID.

1234

InstanceMode

string

The instance generation mode. Valid values:

-   T+1
-   Immediately

T+1

Type

string

The type of the task.

ODPS\_SQL

BaselineId

long

The baseline ID.

1234

Priority

integer

The priority of the task. Valid values: 1 to 8. A larger value indicates a higher priority. Default value: 1.

1

Timeout

integer

The timeout period of task running. Unit: seconds.

3600

RerunMode

string

The rerun mode. Valid values:

-   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to be run.
-   FailureAllowed: The task can be rerun only after it fails to be run.
-   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to be run.

AllAllowed

RerunTimes

integer

The number of times that the task is rerun. This parameter takes effect only if the RerunMode parameter is set to AllAllowed or FailureAllowed.

3

RerunInterval

integer

The rerun interval. Unit: seconds.

60

Script

object

The script information.

Content

string

The script content.

echo "helloWorld"

Parameters

string

The script parameters.

para1=$bizdate

Trigger

object

The method to trigger task scheduling.

Type

string

The trigger type. Valid values:

-   Scheduler: periodic scheduling
-   Manual: manual scheduling

Scheduler

Recurrence

string

The running mode of the task after it is triggered. This parameter takes effect only if the Type parameter is set to Scheduler. Valid values:

-   Pause
-   Skip
-   Normal

Normal

Cron

string

The CRON expression of the task. This parameter takes effect only if the Type parameter is set to Scheduler.

00 00 00 \* \* ?

StartTime

string

The start time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.

1970-01-01 00:00:00

EndTime

string

The end time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.

9999-01-01 00:00:00

RuntimeResource

object

The configurations of the runtime environment, such as the resource group information.

ResourceGroupId

string

The ID of the resource group for scheduling configured for task running.

S\_res\_group\_524258031846018\_1684XXXXXXXXX

Image

string

The ID of the image configured for task running.

i-xxxxxx

Cu

string

The default number of compute units (CUs) configured for task running.

0.25

DataSource

object

The information about the associated data source.

Name

string

The name of the data source.

mysql\_test

Inputs

object

The input information.

Variables

array<object>

The variables.

Variable

object

Name

string

The name of the variable.

key1

Type

string

The type. Valid values:

-   Constant: constant
-   PassThrough: node output
-   System: variable
-   NodeOutput: script output

Constant

Value

string

The value of the variable.

Value1

Outputs

object

The output information.

TaskOutputs

array<object>

The task outputs.

TaskOutput

object

Output

string

The identifier of the output.

pre.odps\_sql\_demo\_0

Variables

array<object>

The variables.

Variable

object

Name

string

The name of the variable.

key1

Type

string

The type. Valid values:

-   Constant: constant
-   PassThrough: node output
-   System: variable
-   NodeOutput: script output

Constant

Value

string

The value of the variable.

value1

Dependencies

array<object>

The dependency information.

Dependencie

object

Type

string

The dependency type. Valid values:

-   CrossCycleDependsOnChildren: cross-cycle dependency on level-1 descendant nodes
-   CrossCycleDependsOnSelf: cross-cycle dependency on the current node
-   CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes
-   Normal: same-cycle scheduling dependency

Normal

UpstreamOutput

string

The identifier of the output of the ancestor task. This parameter is returned only if `same-cycle scheduling dependencies` and the node input are configured.

pre.odps\_sql\_demo\_0

UpstreamTaskId

string

The ancestor task ID. This parameter is returned only if `cross-cycle scheduling dependencies` or `same-cycle scheduling dependencies` and the node input are not configured.

1234

SubTasks

object

The configurations of the subtasks, such as a do-while node.

SubTasks

array<object>

The subtasks.

SubTask

object

Name

string

The name of the task.

SQL node

Description

string

The description of the task.

test

WorkflowId

long

The ID of the workflow to which the task belongs.

1234

Type

string

The type of the task.

ODPS\_SQL

BaselineId

long

The baseline ID.

The baseline ID.

Priority

integer

The priority of the task. Valid values: 1 to 8. A larger value indicates a higher priority. Default value: 1.

1

Timeout

integer

The timeout period of task running. Unit: seconds.

3600

RerunMode

string

The rerun mode. Valid values:

-   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to be run.
-   FailureAllowed: The task can be rerun only after it fails to be run.
-   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to be run.

AllAllowed

RerunTimes

integer

The number of times that the task is rerun. This parameter takes effect only if the RerunMode parameter is set to AllAllowed or FailureAllowed.

3

RerunInterval

integer

The rerun interval. Unit: seconds.

180

Trigger

object

The method to trigger task scheduling.

Type

string

The trigger type. Valid values:

-   Scheduler: periodic scheduling
-   Manual: manual scheduling

Scheduler

Recurrence

string

The running mode of the task after it is triggered. This parameter takes effect only if the Type parameter is set to Scheduler. Valid values:

-   Pause
-   Skip
-   Normal

Normal

Cron

string

The CRON expression of the task. This parameter takes effect only if the Type parameter is set to Scheduler.

00 00 00 \* \* ?

StartTime

string

The start time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.

1970-01-01 00:00:00

EndTime

string

The end time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler.

9999-01-01 00:00:00

RuntimeResource

object

The runtime environment configuration of the task, such as the resource group.

ResourceGroupId

string

The ID of the resource group for scheduling configured for task running.

S\_res\_group\_524258031846018\_1684XXXXXXXXX

Image

string

The ID of the image configured for task running.

i-xxxxxx

Cu

string

The default number of CUs configured for task running.

0.25

DataSource

object

The information about the associated data source.

Name

string

The name of the data source.

mysql\_test

Id

long

The task ID.

1234

ProjectId

long

The workspace ID.

100

ProjectEnv`deprecated`

string

The environment of the workspace. This parameter is deprecated and replaced by the EnvType parameter. Valid values:

-   Prod: production environment
-   Dev: development environment

Prod

EnvType

string

The environment of the workspace. Valid values:

-   Prod: production environment
-   Dev: development environment

Prod

Owner

string

The account ID of the task owner.

1000

CreateTime

long

The creation time.

1710239005403

ModifyTime

long

The modification time.

1710239005403

CreateUser

string

The account ID of the creator.

1000

ModifyUser

string

The account ID of the modifier.

1000

Type

string

The type of the subtask. Valid values:

-   DoWhile: do-while node
-   Combined: node group
-   ForEach: for-each node

Combined

Tags

array<object>

The tags.

Tag

object

Key

string

The tag key.

key1

Value

string

The tag value.

value1

Id

long

The instance ID.

1234

ProjectId

long

The workspace ID.

100

ProjectEnv`deprecated`

string

The environment of the workspace. This parameter is deprecated and replaced by the EnvType parameter. Valid values:

-   Prod: production environment
-   Dev: development environment

Prod

EnvType

string

The environment of the workspace. Valid values:

-   Prod: production environment
-   Dev: development environment

Prod

Owner

string

The account ID of the task owner.

1000

CreateTime

long

The creation time.

1710239005403

ModifyTime

long

The modification time.

1710239005403

CreateUser

string

The account ID of the creator.

1000

ModifyUser

string

The account ID of the modifier.

1000

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "22C97E95-F023-56B5-8852-B1A77A17XXXX",
  "Task": {
    "Name": "SQL node",
    "Description": "test",
    "WorkflowId": 1234,
    "InstanceMode": "T+1",
    "Type": "ODPS_SQL",
    "BaselineId": 1234,
    "Priority": 1,
    "Timeout": 3600,
    "RerunMode": "AllAllowed",
    "RerunTimes": 3,
    "RerunInterval": 60,
    "Script": {
      "Content": "echo \"helloWorld\"",
      "Parameters": "para1=$bizdate"
    },
    "Trigger": {
      "Type": "Scheduler",
      "Recurrence": "Normal",
      "Cron": "00 00 00 * * ?",
      "StartTime": "1970-01-01 00:00:00",
      "EndTime": "9999-01-01 00:00:00"
    },
    "RuntimeResource": {
      "ResourceGroupId": "S_res_group_524258031846018_1684XXXXXXXXX",
      "Image": "i-xxxxxx\n",
      "Cu": 0.25
    },
    "DataSource": {
      "Name": "mysql_test"
    },
    "Inputs": {
      "Variables": [
        {
          "Name": "key1",
          "Type": "Constant\n",
          "Value": "Value1\n"
        }
      ]
    },
    "Outputs": {
      "TaskOutputs": [
        {
          "Output": "pre.odps_sql_demo_0"
        }
      ],
      "Variables": [
        {
          "Name": "key1",
          "Type": "Constant\n",
          "Value": "value1"
        }
      ]
    },
    "Dependencies": [
      {
        "Type": "Normal",
        "UpstreamOutput": "pre.odps_sql_demo_0",
        "UpstreamTaskId": 1234
      }
    ],
    "SubTasks": {
      "SubTasks": [
        {
          "Name": "SQL node",
          "Description": "test",
          "WorkflowId": 1234,
          "Type": "ODPS_SQL\n",
          "BaselineId": 0,
          "Priority": 1,
          "Timeout": 3600,
          "RerunMode": "AllAllowed",
          "RerunTimes": 3,
          "RerunInterval": 180,
          "Trigger": {
            "Type": "Scheduler",
            "Recurrence": "Normal\n",
            "Cron": "00 00 00 * * ?\n",
            "StartTime": "1970-01-01 00:00:00\n",
            "EndTime": "9999-01-01 00:00:00\n"
          },
          "RuntimeResource": {
            "ResourceGroupId": "S_res_group_524258031846018_1684XXXXXXXXX",
            "Image": "i-xxxxxx",
            "Cu": 0.25
          },
          "DataSource": {
            "Name": "mysql_test\n"
          },
          "Id": 1234,
          "ProjectId": 100,
          "ProjectEnv": "Prod",
          "EnvType": "Prod",
          "Owner": 1000,
          "CreateTime": 1710239005403,
          "ModifyTime": 1710239005403,
          "CreateUser": 1000,
          "ModifyUser": 1000
        }
      ],
      "Type": "Combined"
    },
    "Tags": [
      {
        "Key": "key1",
        "Value": "value1"
      }
    ],
    "Id": 1234,
    "ProjectId": 100,
    "ProjectEnv": "Prod",
    "EnvType": "Prod",
    "Owner": 1000,
    "CreateTime": 1710239005403,
    "ModifyTime": 1710239005403,
    "CreateUser": 1000,
    "ModifyUser": 1000
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-21

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/dataworks-public/2024-05-18/GetTask?updateTime=2025-01-21#workbench-doc-change-demo)

2025-01-07

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/dataworks-public/2024-05-18/GetTask?updateTime=2025-01-07#workbench-doc-change-demo)

2024-11-20

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/dataworks-public/2024-05-18/GetTask?updateTime=2024-11-20#workbench-doc-change-demo)
