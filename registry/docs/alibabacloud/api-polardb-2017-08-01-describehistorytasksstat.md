Queries task statistics in Task Center.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeHistoryTasksStat)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeHistoryTasksStat)

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

polardb:DescribeHistoryTasksStat

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

Yes

The region ID.

cn-beijing

Status

string

No

The task status. Valid values:

-   **Scheduled**: The task is waiting to be executed.
    
-   **Running**: The task is running.
    
-   **Succeed**: The task is successful.
    
-   **Cancelling**: The task is being canceled.
    
-   **Canceled**: The task is canceled.
    
-   **Waiting**: The task is waiting for a scheduled time.
    

To query tasks in multiple states, separate the states with commas (,). If you leave this parameter empty, tasks in all states are queried.

Running

InstanceId

string

No

The instance ID. This corresponds to the ins\_name parameter. You can specify up to 30 instance IDs. Separate multiple IDs with commas (,).

pc-2zed3m89cw\*\*\*

TaskId

string

No

The task ID. You can specify up to 30 task IDs. Separate multiple IDs with commas (,). If you leave this parameter empty, this parameter is not used as a filter.

ec8c4723-eac5-4f12-becb-01ac08\*\*\*\*\*\*

TaskType

string

No

The task type. This parameter is used to query tasks of a specific type. You can specify up to 30 task types. Separate multiple types with commas (,). If you leave this parameter empty, this parameter is not used as a filter.

DatabaseProxyUpgrading

FromStartTime

string

Yes

The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2025-01-02T11:31:03Z

ToStartTime

string

Yes

The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2025-01-03T12:31:03Z

FromExecTime

integer

No

The minimum running time. The query returns tasks with a running time greater than this value. Unit: seconds.

0

ToExecTime

integer

No

The maximum running time. The query returns tasks with a running time less than or equal to this value. Unit: seconds.

10

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

RequestId

string

The request ID.

45D24263-7E3A-4140-9472-\*\*\*\*\*\*\*\*\*\*\*\*

Items

array<object>

The list of tasks.

object

The details of a task.

Status

string

The task status.

-   Scheduled: The task is waiting to be executed.
    
-   Running: The task is running.
    
-   Succeed: The task is successful.
    
-   Failed: The task failed.
    
-   Cancelling: The task is being canceled.
    
-   Canceled: The task is canceled.
    
-   Waiting: The task is waiting for a scheduled time.
    

Running

TotalCount

integer

The total number of records.

13

## Examples

Success response

`JSON` format

```
{
  "RequestId": "45D24263-7E3A-4140-9472-************",
  "Items": [
    {
      "Status": "Running",
      "TotalCount": 13
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

400

Param.Invalid.TimeEndBeforeStart

Param Invalid.End time before start time.

The end time must be greater than the start time.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeHistoryTasksStat#workbench-doc-change-demo) for a complete list.
