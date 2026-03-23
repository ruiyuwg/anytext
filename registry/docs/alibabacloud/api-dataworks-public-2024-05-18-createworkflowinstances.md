Creates a workflow instance, such as a data backfill workflow instance, based on configurations.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/CreateWorkflowInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/CreateWorkflowInstances)

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

dataworks:CreateWorkflowInstances

create

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

ProjectId

long

Yes

The project ID.

100

EnvType

string

No

The project environment. Valid values:

-   Prod
-   Dev

Prod

WorkflowId

long

Yes

The ID of the workflow to which the instance belongs. This parameter is set to 1 for auto triggered tasks.

1

Name

string

Yes

The name.

WorkflowInstance1

Periods

object

No

The configuration of the data backfilling period.

BizDates

array<object>

Yes

The data timestamps. You can specify up to seven data timestamps.

object

No

StartBizDate

string

Yes

The data timestamp at which the data starts to be backfilled. Configure this parameter in the `yyyy-mm-dd` format.

2024-11-20

EndBizDate

string

Yes

The data timestamp at which data is no longer backfilled. Configure this parameter in the `yyyy-mm-dd` format.

2024-11-24

StartTime

string

No

The start time of data backfill. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. Default value: 00:00:00.

If you configure this parameter, you must also configure the EndTime parameter.

00:00:00

EndTime

string

No

The end time of data backfill. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. Default value: 23:59:59.

If you configure this parameter, you must also configure the StartTime parameter.

23:59:59

Type

string

Yes

The type of the workflow instance. Valid values:

-   SupplementData: Data backfill. The usage of RootTaskIds and IncludeTaskIds varies based on the backfill mode. See the description of the DefaultRunProperties.Mode parameter.
-   ManualWorkflow: Manually triggered workflow. WorkflowId is required for a manual workflow. RootTaskIds is optional. If not specified, the system uses the default root task list of the manual workflow.
-   Manual: Manual task. You only need to specify RootTaskIds. This is the list of manual tasks to run.
-   SmokeTest: Smoke test. You only need to specify RootTaskIds. This is the list of test tasks to run.
-   TriggerWorkflow: Triggered Workflow You must specify the WorkflowId of the triggered workflow. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the entire workflow runs.

SupplementData

WorkflowParameters

string

No

The workflow parameters. This parameter takes effect when a specific workflow is specified (`WorkflowId != 1`). For scheduled workflows and triggered workflows, the format is key=value, and these parameters have lower priority than task parameters. For manual workflows, the format is JSON, and these parameters have higher priority than task parameters.

{ "key1": "value1", "key2": "value2" }

TaskParameters

string

No

The task-specific parameters. The value is in the JSON format. The key specifies the task ID. You can call the GetTask operation to obtain the format of the value by querying the script parameters.

{ "1001": "key1=val2 key2=val2", "1002": "key1=val2 key2=val2" }

AutoStartEnabled

boolean

No

The default value is true.

true

DefaultRunProperties

object

No

The runtime configuration.

RootTaskIds

array

No

The list of root task IDs.

-   When Type is set to SupplementData, RootTaskIds is required unless Mode is set to Chain.
-   When Type is set to ManualWorkflow, RootTaskIds is optional. If it is not specified, the default root nodes of the manual workflow are used.
-   When Type is set to Manual, RootTaskIds is required and specifies the list of manual tasks to run.
-   When Type is set to SmokeTest, RootTaskIds is required and specifies the list of test tasks to run.

RootTaskId

long

No

The task ID.

1234

IncludeTaskIds

array

No

The IDs of the tasks to run.

IncludeTaskId

long

No

The task ID.

1234

ExcludeTaskIds

array

No

The IDs of the tasks not to run.

ExcludeTaskId

long

No

The task ID.

4321

IncludeProjectIds

array

No

The IDs of the projects to run.

IncludeProjectId

long

No

The project ID.

100

ExcludeProjectIds

array

No

The IDs of the projects not to run.

ExcludeProjectId

long

No

The project ID.

200

Mode

string

No

The data backfill mode. Default value: ManualSelection. Required when Type is set to SupplementData.

-   General: You can specify only one value for `RootTaskIds`. The `IncludeTaskIds` parameter is optional. If it's not specified, it defaults to including `RootTaskIds`.
-   ManualSelection: You can specify multiple values for `RootTaskIds`. The `IncludeTaskIds` parameter is optional. If it is not specified, it defaults to including `RootTaskIds`.
-   Chain: If you set the Mode parameter to Chain, leave the `RootTaskIds` parameter empty and set the `IncludeTaskIds` parameter to the start task ID and the end task ID.
-   AllDownstream: Only one `RootTaskId` can be specified.

ManualSelection

Analysis

object

No

The analysis configuration. Required when Type = SupplementData.

Enabled

boolean

No

Specifies whether to enable the analysis feature. Required when Type = SupplementData.

true

Blocked

boolean

No

Specifies whether to block execution if the analysis fails. Required when Type = SupplementData.

true

RunPolicy

object

No

The run policy. If the parameter is left empty, the task configuration is used.

StartTime

string

No

The start time of running. Configure this parameter in the `hh:mm:ss` format (24-hour clock). This parameter is required if you configure the RunPolicy parameter.

00:00:00

EndTime

string

No

The end time of running. Configure this parameter in the `hh:mm:ss` format (24-hour clock). This parameter is required if you configure the RunPolicy parameter. Valid values:

23:59:59

Type

string

No

The time period type. This parameter is required if you configure the RunPolicy parameter. Valid values:

-   Daily
-   Weekend

Daily

Immediately

boolean

No

Specifies whether a task whose scheduled run time is in the future can be run immediately. Default value: false.

false

Alert

object

No

The alert settings.

Type

string

No

The alerting policy. Valid values:

-   Success: Alerts on success.
-   Failure: Alerts on failure.
-   SuccessFailure: Alerts on both success and failure.

Succes

NoticeType

string

No

The alert notification method. Valid values:

-   Sms: SMS only.
-   Mail: Mail only.
-   SmsMail: SMS and mail.

Sms

Parallelism

integer

No

The task concurrency. Values from 2 to 10 indicate concurrency. A value of 1 indicates sequential execution. Required when Type = SupplementData.

2

Order

string

No

The execution order. Default value: Asc.

-   Asc: ascending by business date.
-   Desc: descending by business date.

Asc

RuntimeResource

string

No

The custom scheduling resource group ID. If left empty, the task configuration is used.

S\_res\_group\_524258031846018\_1684XXXXXXXXX

Priority

integer

No

The execution priority, range: 1–11. A higher value indicates higher priority.

1

PriorityWeightStrategy

string

No

The priority weighting policy.

-   `Disable` (default): Do not enable.
-   `Upstream`: The priority is based on the total weight of upstream nodes. The deeper the hierarchy, the higher the weight.

Upstream

Comment

string

No

The reason for the creation.

create for test

Tags

array<object>

No

The task tag list.

Tag

object

No

Value

string

No

The tag value.

tagValue

Key

string

No

The tag key.

tagKey

TagCreationPolicy

string

No

The tag creation policy. Valid values:

-   Append: New tags are added on top of the existing tags of the manual workflow.
-   Overwrite: Existing tags of the manual workflow are not inherited. New tags are created directly.

Append

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request. It is used to locate logs and troubleshoot problems.

22C97E95-F023-56B5-8852-B1A77A17XXXX

OperationId

string

The ID of the operation. You can use this field to query the results of the creation operation through the GetCreateWorkflowInstancesResult interface.

e15ad21c-b0e9-4792-8f55-b037xxxxxxxx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "22C97E95-F023-56B5-8852-B1A77A17XXXX",
  "OperationId": "e15ad21c-b0e9-4792-8f55-b037xxxxxxxx"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-27

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/dataworks-public/2024-05-18/CreateWorkflowInstances?updateTime=2025-02-27#workbench-doc-change-demo)
