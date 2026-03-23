Queries the logs of a PolarDB cluster, such as primary/secondary failover logs.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBLogFiles)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBLogFiles)

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

polardb:DescribeDBLogFiles

list

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

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

DBNodeId

string

No

The ID of the node in the PolarDB cluster.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the integer data type. The default value is **1**.

1

PageSize

integer

No

The number of entries to return on each page. Valid values: 5 to 50. Default value: 10.

10

StartTime

string

No

The start of the time range to query. Specify the time in the YYYY-MM-DDThh:mm:ssZ format. The time is in Coordinated Universal Time (UTC). The start time must be earlier than the current time.

2023-08-20T16:00:00Z

EndTime

string

No

The end of the time range to query. The end time must be later than the start time. Specify the time in the YYYY-MM-DDThh:mm:ssZ format. The time is in UTC.

2023-09-20T16:00:00Z

LogType

string

Yes

The log type. Valid value:

-   **HaSwitchLogList**: the list of primary/secondary failover logs
    

**Valid values:**

-   HaSwitchLogList :
    
    HaSwitchLogList
    

HaSwitchLogList

DescribeSimulateSwitchMode

string

No

SimulateListId

string

No

SimulateStatusList

string

No

SimulateModeList

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalRecords

integer

The total number of entries.

160

ItemsNumbers

integer

The number of items in the log list on the current page.

10

PageNumber

integer

The page number. The value is an integer that is greater than 0 and does not exceed the maximum value of the integer data type. The default value is 1.

6

DBInstanceName

string

The instance ID.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBInstanceType

string

The instance type. Valid values:

-   **polardb\_mysql\_rw**: read-write instance.
    
-   **polardb\_mysql\_ro**: read-only instance.
    
-   **polardb\_mysql\_standby**: standby instance.
    

polardb\_mysql\_rw

HaStatus

integer

Indicates whether a primary/secondary failover record exists. Valid values:

-   **1**: No
    
-   **0**: Yes
    

1

HaLogItems

array<object>

The list of primary/secondary failover logs.

object

SwitchId

string

The ID of the primary/secondary failover log.

e571f897-9b3c-4012-9470-88333832dec4

FromDBType

string

The instance type before the switch. Valid values:

-   **polardb\_mysql\_rw**: read-write instance.
    
-   **polardb\_mysql\_ro**: read-only instance.
    
-   **polardb\_mysql\_standby**: standby instance.
    

SwitchCauseCode

string

The reason for the switch.

SwitchCauseDetail

string

SwitchStartTime

string

The start time of the switch.

SwitchFinishTime

string

The end time of the switch.

TotalSessions

integer

The total number of sessions during the switch.

AffectedSessions

integer

The number of affected sessions during the switch.

SwitchType

integer

The switch type.

0

RequestId

string

The request ID.

24A1990B-4F6E-482B-B8CB-75C612\*\*\*\*\*\*

PageSize

integer

The number of entries returned per page. Valid values: 5 to 50. Default value: 10.

10

SwitchListItems

array<object>

object

SimulateListId

string

SimulateMode

string

SimulateStatus

string

StartTime

string

EndTime

string

EventStartTime

string

EventFinishTime

string

SimulateTaskId

string

DBNodeCrashList

array

string

SwitchLogItems

array<object>

object

SimulateListId

string

SimulateLogId

string

DBInstanceId

string

SrcDbType

string

DstDbType

string

SimulateStatus

string

EventStartTime

string

EventFinishTime

string

SwitchStepItems

array<object>

object

StepName

string

StartTime

string

SimulatePhase

string

EndTime

string

TimeCost

string

IsSuccess

string

SwitchStepItems

array<object>

object

SimulatePhase

string

StepName

string

StartTime

string

EndTime

string

TimeCost

string

IsSuccess

string

DBNodeId

string

FaultInjectionType

string

SwitchLogItems

array<object>

object

SimulateListId

string

Simulatecode

string

DBInstanceId

string

SrcDbType

string

DstDbType

string

SimulateStatus

string

EventStartTime

string

EventFinishTime

string

SwitchStepItems

array<object>

object

StepName

string

StepMsg

string

StartTime

string

EndTime

string

TimeCost

string

IsSuccess

string

SimulatePhase

string

DBNodeId

string

## Examples

Success response

`JSON` format

```
{
  "TotalRecords": 160,
  "ItemsNumbers": 10,
  "PageNumber": 6,
  "DBInstanceName": "pi-****************",
  "DBInstanceType": "polardb_mysql_rw",
  "HaStatus": 1,
  "HaLogItems": [
    {
      "SwitchId": "e571f897-9b3c-4012-9470-88333832dec4",
      "FromDBType": "",
      "SwitchCauseCode": "",
      "SwitchCauseDetail": "",
      "SwitchStartTime": "",
      "SwitchFinishTime": "",
      "TotalSessions": 0,
      "AffectedSessions": 0,
      "SwitchType": 0
    }
  ],
  "RequestId": "24A1990B-4F6E-482B-B8CB-75C612******",
  "PageSize": 10,
  "SwitchListItems": [
    {
      "SimulateListId": "",
      "SimulateMode": "",
      "SimulateStatus": "",
      "StartTime": "",
      "EndTime": "",
      "EventStartTime": "",
      "EventFinishTime": "",
      "SimulateTaskId": "",
      "DBNodeCrashList": [
        ""
      ],
      "SwitchLogItems": [
        {
          "SimulateListId": "",
          "SimulateLogId": "",
          "DBInstanceId": "",
          "SrcDbType": "",
          "DstDbType": "",
          "SimulateStatus": "",
          "EventStartTime": "",
          "EventFinishTime": "",
          "SwitchStepItems": [
            {
              "StepName": "",
              "StartTime": "",
              "SimulatePhase": "",
              "EndTime": "",
              "TimeCost": "",
              "IsSuccess": ""
            }
          ]
        }
      ],
      "SwitchStepItems": [
        {
          "SimulatePhase": "",
          "StepName": "",
          "StartTime": "",
          "EndTime": "",
          "TimeCost": "",
          "IsSuccess": "",
          "DBNodeId": ""
        }
      ],
      "FaultInjectionType": ""
    }
  ],
  "SwitchLogItems": [
    {
      "SimulateListId": "",
      "Simulatecode": "",
      "DBInstanceId": "",
      "SrcDbType": "",
      "DstDbType": "",
      "SimulateStatus": "",
      "EventStartTime": "",
      "EventFinishTime": "",
      "SwitchStepItems": [
        {
          "StepName": "",
          "StepMsg": "",
          "StartTime": "",
          "EndTime": "",
          "TimeCost": "",
          "IsSuccess": "",
          "SimulatePhase": "",
          "DBNodeId": ""
        }
      ]
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

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

400

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

The specified PageSize parameter is invalid.

400

InvalidPageNumber.Malformed

The specified parameter PageNumber is not valid.

The specified PageNumber parameter is invalid.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBLogFiles#workbench-doc-change-demo) for a complete list.
