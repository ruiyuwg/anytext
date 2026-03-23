Queries the details of all scheduled tasks.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeScheduleTasks)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeScheduleTasks)

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

polardb:DescribeScheduleTasks

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Status

string

No

The status of the task. Valid values:

-   **pending**: The task is waiting to be executed.
    
-   **executing**: The task is being executed.
    
-   **failure**: The task failed and is waiting for a retry.
    
-   **finish**: The task is complete.
    
-   **cancel**: The task is canceled.
    
-   **expired**: The task has expired. This means the task did not start within the scheduled time window.
    
-   **rollback**: The task is being rolled back.
    

**Note**

If you do not specify this parameter, scheduled tasks in all states are returned.

finish

DBClusterId

string

No

The cluster ID.

**Note**

-   Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters in a region, including the cluster IDs.
    
-   If you do not specify this parameter, the scheduled tasks of all clusters that belong to your account are returned.
    

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

No

The region ID.

**Note**

-   Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query available regions.
    
-   If you do not specify this parameter, the scheduled tasks in all regions that belong to your account are returned.
    

cn-hangzhou

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0. Default value: **1**.

1

PageSize

integer

No

The number of entries to return on each page. Valid values: **30** (default), **50**, or **100**.

30

TaskAction

string

No

The type of the task. Valid values:

-   **CreateDBNodes**
    
-   **ModifyDBNodeClass**
    
-   **UpgradeDBClusterVersion**
    
-   **ModifyDBClusterPrimaryZone**
    

**Note**

-   Task details are returned only if you specify the `PlannedStartTime` parameter. Otherwise, the `TimerInfos` parameter is empty.
    
-   If you do not specify this parameter, scheduled tasks of all types are returned.
    

CreateDBNodes

DBClusterDescription

string

No

The cluster description.

testdb

OrderId

string

No

The order ID.

**Note**

The ID can contain only digits from 0 to 9.

20951253014\*\*\*\*

PlannedStartTime

string

No

The earliest start time of the task. The time is in UTC.

2021-01-28T12:00Z

PlannedEndTime

string

No

The latest start time of the task. The time is in UTC.

2021-01-28T12:30Z

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

Data

object

The response data.

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries on the current page.

30

TimerInfos

array<object>

The details of the scheduled tasks.

object

Action

string

The task type.

CreateDBNodes

CrontabJobId

string

The ID of the scheduled O&M task.

86293c29-a03d-4872-b625-\*\*\*\*\*\*\*\*\*\*\*

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DbClusterDescription

string

The cluster description.

test\_cluster

DbClusterStatus

string

The cluster status.

Running

OrderId

string

The order ID.

**Note**

This parameter is returned only when `Action` is set to **CreateDBNodes** or **ModifyDBNodeClass**.

208161753\*\*\*\*\*\*

PlannedEndTime

string

The latest start time of the task. The time is in UTC.

2021-01-28T12:30Z

PlannedFlashingOffTime

string

PlannedStartTime

string

The earliest start time of the task. The time is in UTC.

2021-01-28T12:00Z

PlannedTime

string

The expected start time of the task. The time is in UTC.

2021-01-28T12:16Z

Region

string

The region ID of the scheduled task.

cn-hangzhou

Status

string

The status of the task.

finish

TaskCancel

boolean

Indicates whether the scheduled task can be canceled. Valid values:

-   **true**: The task can be canceled.
    
-   **false**: The task cannot be canceled.
    

true

TaskId

string

The task ID.

53879cdb-9a00-428e-acaf-ff4cff\*\*\*\*\*\*

TotalRecordCount

integer

The total number of entries.

1

Message

string

The response message.

**Note**

If the request is successful, "Successful" is returned. If the request fails, an error message is returned.

Successful

RequestId

string

The request ID.

936C7025-27A5-4CB1-BB31-540E1F0CCA12

Success

boolean

Indicates whether the request was successful.

true

## Examples

Success response

`JSON` format

```
{
  "Data": {
    "PageNumber": 1,
    "PageSize": 30,
    "TimerInfos": [
      {
        "Action": "CreateDBNodes",
        "CrontabJobId": "86293c29-a03d-4872-b625-***********",
        "DBClusterId": "pc-**************",
        "DbClusterDescription": "test_cluster",
        "DbClusterStatus": "Running",
        "OrderId": "208161753******",
        "PlannedEndTime": "2021-01-28T12:30Z",
        "PlannedFlashingOffTime": "",
        "PlannedStartTime": "2021-01-28T12:00Z",
        "PlannedTime": "2021-01-28T12:16Z",
        "Region": "cn-hangzhou",
        "Status": "finish",
        "TaskCancel": true,
        "TaskId": "53879cdb-9a00-428e-acaf-ff4cff******"
      }
    ],
    "TotalRecordCount": 1
  },
  "Message": "Successful",
  "RequestId": "936C7025-27A5-4CB1-BB31-540E1F0CCA12",
  "Success": true
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidOrderId.Malformed

The specified parameter OrderId is not valid.

The specified order ID is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeScheduleTasks#workbench-doc-change-demo) for a complete list.
