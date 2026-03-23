Queries high availability (HA) logs for an instance.

## Operation description

**Note**

-   Only PolarDB for MySQL supports this operation.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeHALogs)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeHALogs)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

polardb:DescribeHALogs

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBNodeId

string

No

The node ID.

**Note**

If specified, queries the high availability (HA) switchover records of `DBNodeId`. You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to view the detailed information about all clusters under your account, including node IDs.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PageNumber

integer

No

The page number.

1

PageSize

integer

No

The number of entries to return on each page. Valid values: 5 to 50. Default value: 10.

30

StartTime

string

No

The beginning of the time range to query. The time follows the `YYYY-MM-DDThh:mm:ssZ` format (UTC time).

2020-05-01T00:00Z

EndTime

string

No

The end of the time range to query. The end time must be later than the start time. The time follows the `YYYY-MM-DDThh:mm:ssZ` format (UTC time).

2020-09-23T01:01:00Z

LogType

string

Yes

The log type.

HaSwitchLogList

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

TotalRecords

integer

The total number of records.

160

ItemsNumbers

integer

The number of items in the log list on the current page.

10

PageNumber

integer

The page number. The value is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: 1.

1

DBInstanceName

string

The instance ID.

pc-a\*\*\*\*\*\*\*\*\*\*\*\*\*

DBInstanceType

string

The instance type. Valid values:

-   **polardb\_mysql\_rw**: read-write instance.
    
-   **polardb\_mysql\_ro**: read-only instance.
    
-   **polardb\_mysql\_standby**: standby instance.
    

polardb\_mysql\_rw

HaStatus

integer

Indicates whether primary/secondary switchover records exist. Valid values:

-   **1**: No
    
-   **0**: Yes
    

1

HaLogItems

array<object>

The list of primary/secondary logs.

object

The list of primary/secondary switchover logs.

SwitchId

string

The ID of the primary/secondary switchover log.

e571f897-9b3c-4012-9470-88333832dec4

SwitchCauseCode

string

The cause code of the switchover.

Platform.Ha.AuroraService.ManualOperations

SwitchCauseDetail

string

The cause of the switchover.

Platform.Ha.ManuallyTriggered

SwitchStartTime

string

The start time of the switchover.

2025-05-20T03:09:45Z

SwitchFinishTime

string

The end time of the switchover.

2025-05-20T03:09:56Z

RequestId

string

The request ID.

6BD9CDE4-5E7B-4BF3-9BB8-83C73E\*\*\*\*\*\*

PageSize

integer

The number of entries returned per page. Valid values: 30 to 100. Default value: 30.

30

## Examples

Success response

`JSON` format

```
{
  "TotalRecords": 160,
  "ItemsNumbers": 10,
  "PageNumber": 1,
  "DBInstanceName": "pc-a*************",
  "DBInstanceType": "polardb_mysql_rw",
  "HaStatus": 1,
  "HaLogItems": [
    {
      "SwitchId": "e571f897-9b3c-4012-9470-88333832dec4",
      "SwitchCauseCode": "Platform.Ha.AuroraService.ManualOperations",
      "SwitchCauseDetail": "Platform.Ha.ManuallyTriggered",
      "SwitchStartTime": "2025-05-20T03:09:45Z",
      "SwitchFinishTime": "2025-05-20T03:09:56Z"
    }
  ],
  "RequestId": "6BD9CDE4-5E7B-4BF3-9BB8-83C73E******",
  "PageSize": 30
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeHALogs#workbench-doc-change-demo) for a complete list.
