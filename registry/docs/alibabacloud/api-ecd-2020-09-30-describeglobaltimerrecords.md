Queries scheduled task execution records for cloud desktops across all regions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeGlobalTimerRecords)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeGlobalTimerRecords)

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

ecd:DescribeGlobalTimerRecords

list

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

Region ID. Call [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) to list regions that support WUYING Workspace.

cn-shanghai

TimerTypes

array

No

The list of scheduled tasks.

string

No

Scheduled task type.

**Scheduled tasks:**

-   TimerBoot: Start cloud desktop on schedule
    
-   TimerShutdown: Stop cloud desktop on schedule
    
-   TimerReboot: Reboot cloud desktop on schedule
    
-   TimerReset: Reset cloud desktop on schedule
    
-   TimerMaintenance: Enter maintenance mode on schedule
    
-   TimerHibernate: Hibernate cloud desktop on schedule
    

**No-operation tasks:**

-   NoOperationShutdown: Shut down without action
    
-   NoOperationReboot: Reboot without action
    
-   NoOperationDisconnect: Disconnect without action
    
-   NoOperationHibernate: Hibernate without action
    

**Disconnect-based tasks:**

-   NoConnectShutdown: Shut down after disconnect
    
-   NoConnectHibernate: Hibernate after disconnect
    

**Valid values:**

-   NoOperationDisconnect :
    
    Disconnect on inactivity
    
-   NoConnectShutdown :
    
    Shut down on disconnection
    
-   TimerBoot :
    
    Scheduled Startup
    
-   NoOperationShutdown :
    
    Idle shutdown
    
-   NoOperationHibernate :
    
    Inactivity hibernation
    
-   NoConnectHibernate :
    
    Disconnect hibernation
    
-   TimerShutdown :
    
    Scheduled shutdown
    
-   NoOperationReboot :
    
    Automatic restart
    
-   TimerReboot :
    
    Scheduled restart
    

TimerBoot

MaxResults

string

No

Number of entries per page for paged queries.

Maximum: 100.

Default: 10.

10

NextToken

string

No

Token for the next query.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL\*\*\*\*

SearchRegionId

string

No

Region ID used to filter cloud desktop information for a specific region.

cn-shanghai

BatchId

string

No

Batch ID for scheduled task execution.

ccg-\*\*\*\*

TimerResult

string

No

Execution result of the scheduled task.

**Valid values:**

-   CONNECTED\_NOT\_RUN :
    
    The cloud computer is connected, but the scheduled task does not execute.
    
-   PAUSED :
    
    Execute a pause
    
-   COMPLETED :
    
    Completed
    
-   FAILED :
    
    Execution failed
    
-   RUNNING :
    
    Running
    
-   TERMINATED :
    
    Abort execution
    

RUNNING

GroupId

string

No

Scheduled task group ID.

ccg-0cvfvf6u1enx1\*\*\*\*

ResultCategory

string

No

Filter results by execution status.

**Valid values:**

-   SUCCEED :
    
    Execution successful
    
-   FAILED :
    
    Execution failed
    
-   RUNNING :
    
    Executing
    
-   SKIPPED :
    
    Execution skipped
    

SUCCEED

DesktopIds

array

No

List of cloud desktop IDs.

string

No

Cloud desktop ID.

ecd-84mztzatmipf2\*\*\*\*

Retryable

boolean

No

DisplayResultName

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response schema

RequestId

string

Request ID.

63740E03-1B4B-5A18-AC27-2745A4F2\*\*\*\*

NextToken

string

Token for the next query. If NextToken is empty, no more results are available.

AAAAAV3MpHK1AP0pfERHZN5pu6mnFXZiT7NdvGNgkInJ\*\*\*\*

Count

integer

Total number of entries.

2

Results

array<object>

Response data.

object

Results list.

BatchId

string

Batch ID for scheduled task execution.

ccg-0cvfvf6u1enx1\*\*\*\*

TimerType

string

Scheduled task type.

TimerBoot

TimerResult

string

Execution result of the scheduled task.

RUNNING

CreateTime

string

Record creation time.

2023-08-03T08:27:29Z

FinishTime

string

Task completion time.

2025-01-21T02:00:45Z

DesktopId

string

Cloud desktop ID.

ecd-0c951fy9arnk9\*\*\*\*

RegionId

string

Region ID.

cn-hangzhou

DesktopName

string

Cloud desktop name.

DesktopName

TimerGroupId

string

Scheduled task group ID.

ccg-xxxx

ActionType

string

Action type executed.

REBOOT

Context

string

Details about the scheduled task execution process.

{}

DisplayResultName

string

Retryable

boolean

TimerRecordId

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "63740E03-1B4B-5A18-AC27-2745A4F2****",
  "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6mnFXZiT7NdvGNgkInJ****",
  "Count": 2,
  "Results": [
    {
      "BatchId": "ccg-0cvfvf6u1enx1****",
      "TimerType": "TimerBoot",
      "TimerResult": "RUNNING",
      "CreateTime": "2023-08-03T08:27:29Z",
      "FinishTime": "2025-01-21T02:00:45Z",
      "DesktopId": "ecd-0c951fy9arnk9****",
      "RegionId": "cn-hangzhou",
      "DesktopName": "DesktopName",
      "TimerGroupId": "ccg-xxxx",
      "ActionType": "REBOOT",
      "Context": "{}",
      "DisplayResultName": "",
      "Retryable": false,
      "TimerRecordId": ""
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeGlobalTimerRecords#workbench-doc-change-demo) for a complete list.
