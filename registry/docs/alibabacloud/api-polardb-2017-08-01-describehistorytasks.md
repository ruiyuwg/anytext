Retrieves a list of historical administrative tasks for PolarDB for MySQL instances, such as parameter changes, and instance restarts.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeHistoryTasks)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeHistoryTasks)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

polardb:DescribeHistoryTasks

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region ID.

**Note**

For more information, see [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3).

cn-beijing

PageSize

integer

No

The number of records per page. Valid values: 10 to 100. Default value: 10.

10

PageNumber

integer

No

The page number. Valid values: positive integers. Default value: 1.

1

InstanceType

string

No

Currently, only Instance is supported.

Instance

Status

string

No

The task status. Valid values:

-   **Scheduled**: waiting for execution
    
-   **Running**: executing
    
-   **Succeed**: executed successfully
    
-   **Cancelling**: stopping
    
-   **Canceled**: stopped
    
-   **Waiting**: waiting for preset time
    

You can provide a comma-separated list. Default value: empty, which indicates all statuses.

Running

InstanceId

string

No

The resource ID to filter by. You can provide a comma-separated list of up to 30 IDs. Default value: empty, indicating no restriction. AI 翻译 bad case，冗余 2 倍长度

**Note**

Currently, only PolarDB cluster IDs are supported.

pc-2zed3m89cw\*\*\*

TaskId

string

No

The task ID. You can provide a comma-separated list of up to 30 IDs. Default value: empty, indicating no restriction.

t-0mqi38ho0cgjv\*\*\*

TaskType

string

No

The task type. You can provide a comma-separated list of up to 30 task types. Default value: empty, indicating no restriction.

ChangeVariable

FromStartTime

string

Yes

The start of the time range to query, based on task start time. The time follows the ISO8601 standard and must be in `UTC+0` time. Format: `yyyy-MM-ddTHH:mm:ssZ`.

The earliest supported time is 30 days ago. If the specified time is more than 30 days ago, it will be automatically converted to 30 days ago. AI 翻译： start v.s beginning

2025-01-02T11:31:03Z

ToStartTime

string

Yes

The end of the time range to query, based on task start time. The time follows the ISO8601 standard and must be in `UTC+0` time. Format: `yyyy-MM-ddTHH:mm:ssZ`.

2025-01-03T11:31:03Z

FromExecTime

integer

No

The minimum task execution time in seconds. Filters for tasks that took longer than this value. Default value: 0.AI 翻译： minimum value of v.s minimum; 中文：in seconds 应该放第一句。

0

ToExecTime

integer

No

The maximum task execution time in seconds. Filters for tasks that took less than this value. Default value: 0.

0

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Details of the returned parameters.

PageNumber

integer

The page number of the query result.

1

RequestId

string

The unique ID of the request.

F90D7C14-2D1C-5B88-9CD1-23AB2CF89\*\*\*

PageSize

integer

The number of records per page.

10

TotalCount

string

The total number of tasks that meet the conditions, regardless of paging factors. AI 翻译：改为正面表达 before:The total number of tasks that meet the conditions, regardless of paging factors. after: The total number of tasks that match the filter criteria, across all pages.

2

Items

array<object>

The list of tasks.

object

The task object.

Status

string

The final status of the task.这应该是一个终态，原翻译 The task status

-   Scheduled: waiting for execution
    
-   Running: executing
    
-   Succeed: executed successfully
    
-   Failed: execution failed
    
-   Cancelling: stopping
    
-   Canceled: stopped
    
-   Waiting: waiting for preset time
    

Succeed

TaskId

string

The task ID.

t-0mqt8qhnw04ipz0\*\*\*

CurrentStepName

string

The name of the current step being executed. If this parameter is empty, the task has not started.

finish\_task

StartTime

string

The start time of the task.

2025-03-03T07:25:16Z

EndTime

string

The end time of the task.

2025-03-03T07:30:57Z

TaskType

string

The task type.

ChangeVariable

RemainTime

integer

The estimated remaining execution time, in seconds (s).

**Note**

This value is for reference only. The actual execution time prevails.

0

Progress

number

The completion progress of the task, from 0.0 to 100.0.AI 翻译 bad case：仅仅翻译中文，没有读上下文代码。原翻译 the current progress，但实际是一个数值，写法应该不一样。

100.0

RegionId

string

The region ID.

cn-beijing

InstanceType

string

The resource type.

Instance

InstanceId

string

The resource ID.

pc-2zed3m89cw\*\*\*

InstanceName

string

The resource name.

pc-2zed3m89cw\*\*\*

DbType

string

The database type.

polardb\_mysql

Product

string

The product.

polardb

TaskDetail

string

The task details.

{\\"steps\\":\[{\\"step\_name\\":\\"init\_task\\"},{\\"step\_name\\":\\"exec\_task\\"},{\\"step\_name\\":\\"finish\_task\\"}\]}

ReasonCode

string

The reason for initiating the current task.

""

ActionInfo

string

The allowed operation information.

**Note**

This feature is not supported yet.

{}

Uid

string

The UID of the account that owns the resource.翻译对比：The UID of the account that owns the resource. v.s The user ID to which the resource belongs.同样是从句，version A 更清晰、易懂

1816563541899\*\*\*

CallerSource

string

The request source. Valid values:

-   **System**: system
    
-   **User**: user
    

User

CallerUid

string

The ID of the requesting user. If `CallerSource` is `User`, this is the user's UID.AI 翻译"when"和"if"的用法，原翻译：When CallerSource is User, this parameter represents the user UID.

1816563541899\*\*\*

## Examples

Success response

`JSON` format

```
{
  "PageNumber": 1,
  "RequestId": "F90D7C14-2D1C-5B88-9CD1-23AB2CF89***",
  "PageSize": 10,
  "TotalCount": "2",
  "Items": [
    {
      "Status": "Succeed",
      "TaskId": "t-0mqt8qhnw04ipz0***",
      "CurrentStepName": "finish_task",
      "StartTime": "2025-03-03T07:25:16Z",
      "EndTime": "2025-03-03T07:30:57Z",
      "TaskType": "ChangeVariable",
      "RemainTime": 0,
      "Progress": 100,
      "RegionId": "cn-beijing",
      "InstanceType": "Instance",
      "InstanceId": "pc-2zed3m89cw***",
      "InstanceName": "pc-2zed3m89cw***",
      "DbType": "polardb_mysql",
      "Product": "polardb",
      "TaskDetail": "{\\\"steps\\\":[{\\\"step_name\\\":\\\"init_task\\\"},{\\\"step_name\\\":\\\"exec_task\\\"},{\\\"step_name\\\":\\\"finish_task\\\"}]}",
      "ReasonCode": "\"\"",
      "ActionInfo": "{}",
      "Uid": "1816563541899***",
      "CallerSource": "User",
      "CallerUid": "1816563541899***"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Param.Invalid

The parameter is invalid.

The parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeHistoryTasks#workbench-doc-change-demo) for a complete list.
