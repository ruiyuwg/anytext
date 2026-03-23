Queries the details of operation and maintenance events for instances.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActiveOperationTasks)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeActiveOperationTasks)

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

polardb:DescribeActiveOperationTasks

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

The region ID of the pending event.

**Note**

You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query available regions.

cn-beijing

TaskType

string

No

The type of the pending event task. Valid values:

-   **DatabaseSoftwareUpgrading**: database software upgrade
    
-   **DatabaseHardwareMaintenance**: hardware maintenance and upgrade
    
-   **DatabaseStorageUpgrading**: database storage upgrade
    
-   **DatabaseProxyUpgrading**: proxy minor version upgrade
    
-   **all**: queries the details of all types of pending events
    

**Note**

When `Region` is set to **all**, `TaskType` must also be set to **all**.

DatabaseProxyUpgrading

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30** (default)
    
-   **50**
    
-   **100**
    

30

PageNumber

integer

No

The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 1.

1

DBType

string

No

The database engine type. Valid values:

-   **MySQL**
    
-   **PostgreSQL**
    
-   **Oracle**
    

MySQL

Status

integer

No

The task status. Valid values:

-   \-1: all tasks.
    
-   3: pending tasks.
    
-   4: tasks in progress.
    
-   5: successfully completed tasks.
    
-   6: failed tasks.
    
-   7: canceled tasks.
    

\-1

DBClusterId

string

No

The cluster ID.

**Note**

You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query detailed information about all clusters under your account, including cluster IDs.

pc-3ns\*\*\*\*\*\*\*\*\*\*\*d5d

AllowChange

integer

No

Specifies whether to allow time modification. Valid values:

-   **\-1** (default): all.
    
-   **0**: returns only tasks that do not allow time modification.
    
-   **1**: returns only tasks that allow time modification.
    

\-1

AllowCancel

integer

No

Specifies whether to allow cancellation. Valid values:

-   **\-1** (default): all.
    
-   **0**: returns only tasks that do not allow cancellation.
    
-   **1**: returns only tasks that allow cancellation.
    

\-1

ChangeLevel

string

No

The task level. Valid values:

-   **all** (default): all.
    
-   **S0**: returns tasks at the abnormal repair level.
    
-   **S1**: returns tasks at the system maintenance level.
    

all

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalRecordCount

integer

The number of task records returned.

1

RequestId

string

The request ID.

FAF88508-D5F8-52B1-8824-262601769E31

PageSize

integer

The number of entries returned per page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: **30**.

30

PageNumber

integer

The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 1.

1

Items

array<object>

The list of O&M tasks.

object

The list of O&M tasks.

Status

integer

The task status. Valid values:

-   0: indicates waiting for notification.
    
-   1: indicates retry notification.
    
-   2: indicates waiting for user-specified time.
    
-   3: indicates waiting for processing.
    
-   4: indicates in progress.
    
-   5: indicates successfully completed.
    
-   6: indicates failed.
    
-   7: indicates canceled.
    

3

PrepareInterval

string

The preparation time required between the start time and the switch time. Format: HH:mm:ss.

04:00:00

Deadline

string

The latest deadline for the adjustable range of task execution time. Format: YYYY-MM-DDTHH:mm:ssZ.

2020-06-11T15:59:59Z

DBType

string

The database engine type. Valid values:

-   **MySQL**
    
-   **PostgreSQL**
    
-   **Oracle**
    

MySQL

TaskType

string

The type of the pending event task. Valid values:

-   **DatabaseSoftwareUpgrading**: database software upgrade.
    
-   **DatabaseHardwareMaintenance**: hardware maintenance and upgrade.
    
-   **DatabaseStorageUpgrading**: database storage upgrade.
    
-   **DatabaseProxyUpgrading**: proxy minor version upgrade.
    
-   **all**: queries the details of all types of pending events.
    

DatabaseSoftwareUpgrading

StartTime

string

The time when the background task is executed. Format: YYYY-MM-DDTHH:mm:ssZ.

2023-05-19T02:48:17Z

DBVersion

string

The kernel version number.

8.0

ModifiedTime

string

The modification time. Format: YYYY-MM-DDTHH:mm:ssZ.

2020-06-09T22:00:42Z

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Region

string

The region code.

cn-hangzhou

ResultInfo

string

The execution result information.

userCancel

CreatedTime

string

The creation time. Format: YYYY-MM-DDTHH:mm:ssZ.

2020-06-09T22:00:42Z

TaskId

integer

The task ID.

107202351

SwitchTime

string

The time when the background initiates the switch operation. Format: YYYY-MM-DDTHH:mm:ssZ.

2020-06-09T22:00:00Z

CurrentAVZ

string

The current zone.

cn-beijing-h

InsComment

string

The cluster alias or cluster comment.

test

TaskTypeZh

string

The task reason in Chinese.

小版本升级

TaskTypeEn

string

The task reason in English.

Minor version update

ChangeLevel

string

The event level code. Valid values:

-   S1: system maintenance.
    
-   S0: threat fix.
    

S0

ChangeLevelZh

string

The event level (Chinese).

系统运维

ChangeLevelEn

string

The event level (English).

System maintenance

ImpactZh

string

The event impact (Chinese).

集群闪断

ImpactEn

string

The event impact (English).

Transient instance disconnection

AllowChange

integer

Indicates whether time modification is allowed. Valid values:

-   1: indicates that users are allowed to modify the time.
    
-   0: indicates that users are not allowed to modify the time.
    

0

AllowCancel

integer

Indicates whether cancellation is allowed. Valid values:

-   1: indicates that users are allowed to cancel the task.
    
-   0: indicates that cancellation is not allowed.
    

0

Impact

string

The event impact.

TransientDisconnection

DBNodeIds

array

The list of node IDs.

string

The node ID. Multiple node IDs can be entered, separated by commas (,).

pi-t4n\*\*\*\*\*\*\*\*\*\*\*0ni,pi-t4n\*\*\*\*\*\*\*\*\*\*\*334,pi-t4n\*\*\*\*\*\*\*\*\*\*\*h07,pi-t4n\*\*\*\*\*\*\*\*\*\*\*q5i

TaskParams

string

The task parameters.

{ "Action": "UpgradeDBInstance" }

## Examples

Success response

`JSON` format

```
{
  "TotalRecordCount": 1,
  "RequestId": "FAF88508-D5F8-52B1-8824-262601769E31",
  "PageSize": 30,
  "PageNumber": 1,
  "Items": [
    {
      "Status": 3,
      "PrepareInterval": "04:00:00",
      "Deadline": "2020-06-11T15:59:59Z",
      "DBType": "MySQL",
      "TaskType": "DatabaseSoftwareUpgrading",
      "StartTime": "2023-05-19T02:48:17Z",
      "DBVersion": "8.0",
      "ModifiedTime": "2020-06-09T22:00:42Z",
      "DBClusterId": "pc-*****************",
      "Region": "cn-hangzhou",
      "ResultInfo": "userCancel",
      "CreatedTime": "2020-06-09T22:00:42Z",
      "TaskId": 107202351,
      "SwitchTime": "2020-06-09T22:00:00Z",
      "CurrentAVZ": "cn-beijing-h",
      "InsComment": "test",
      "TaskTypeZh": "小版本升级",
      "TaskTypeEn": "Minor version update",
      "ChangeLevel": "S0",
      "ChangeLevelZh": "系统运维",
      "ChangeLevelEn": "System maintenance",
      "ImpactZh": "集群闪断",
      "ImpactEn": "Transient instance disconnection",
      "AllowChange": 0,
      "AllowCancel": 0,
      "Impact": "TransientDisconnection",
      "DBNodeIds": [
        "pi-t4n***********0ni,pi-t4n***********334,pi-t4n***********h07,pi-t4n***********q5i"
      ],
      "TaskParams": "{\n      \"Action\": \"UpgradeDBInstance\"\n}"
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

InvalidPageParam.Format

Page param should be a positive integer.

The page value must be a positive integer. Check and modify the value.

400

RequiredParam.NotFound

Required input param is not found.

The specified parameter does not exist.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeActiveOperationTasks#workbench-doc-change-demo) for a complete list.
