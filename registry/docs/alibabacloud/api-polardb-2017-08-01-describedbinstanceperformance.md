Queries the performance monitoring data for a compute node.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBInstancePerformance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBInstancePerformance)

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

polardb:DescribeDBInstancePerformance

get

\*DBCluster

`acs:polardb:*:{#accountId}:{#resource-type}/{#resource-id}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBInstanceId

string

Yes

The node ID.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

Key

string

No

The performance metrics. Separate multiple metrics with commas (,). For more information, see [Performance parameters](/help/en/polardb/polardb-for-mysql/performance-metric-monitoring).

PolarDBCPUForPCU,PolarDBPCU,PolarDBMemoryForPCU,PolarDBQPSTPS,PolarDBConnections

StartTime

string

Yes

The start time of the query. The time is in the yyyy-MM-ddTHH:mmZ format in UTC.

2022-11-15T16:00Z

EndTime

string

Yes

The end time of the query. The time is in the yyyy-MM-ddTHH:mmZ format in UTC.

2020-01-15T17:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The list of monitoring data for the compute node.

PerformanceKeys

object

PerformanceItem

array<object>

The list of monitoring data for the compute node.

object

The monitoring data of the compute node.

MetricName

string

The name of the performance metric.

mean\_data\_size

Measurement

string

The performance metric.

PolarDBDiskUsage

Points

object

PerformanceItemValue

array<object>

The list of performance parameters for the compute node.

object

Value

string

The value of the performance parameter for the compute node.

12.33

Timestamp

integer

The point in time when the monitoring metric was collected. The value is a UNIX timestamp. Unit: milliseconds (ms).

1737424822

DBVersion

string

The MySQL version number. Valid values:

-   **5.6**
    
-   **5.7**
    
-   **8.0**
    

5.6

EndTime

string

The end time of the query. The time is in the `yyyy-MM-ddTHH:mmZ` format in UTC.

2020-09-23T01:01Z

RequestId

string

The request ID.

F2A9EFA7-915F-4572-8299-85A307\*\*\*\*\*\*

DBInstanceId

string

The node ID.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

StartTime

string

The start time of the query. The time is in the `yyyy-MM-ddTHH:mmZ` format in UTC.

2020-09-23T01:01Z

DBType

string

The database engine type. Valid values:

-   **MySQL**
    
-   **PostgreSQL**
    
-   **Oracle**
    

MySQL

Engine

string

The database engine type.

POLARDB

## Examples

Success response

`JSON` format

```
{
  "PerformanceKeys": {
    "PerformanceItem": [
      {
        "MetricName": "mean_data_size",
        "Measurement": "PolarDBDiskUsage",
        "Points": {
          "PerformanceItemValue": [
            {
              "Value": "12.33",
              "Timestamp": 1737424822
            }
          ]
        }
      }
    ]
  },
  "DBVersion": "5.6",
  "EndTime": "2020-09-23T01:01Z",
  "RequestId": "F2A9EFA7-915F-4572-8299-85A307******",
  "DBInstanceId": "pi-*************",
  "StartTime": "2020-09-23T01:01Z",
  "DBType": "MySQL",
  "Engine": "POLARDB"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidKey.Malformed

The specified parameter Key is not valid.

The specified parameter key is invalid.

400

InvalidEndTime.Malformed

The specified parameter EndTime is not valid.

The specified EndTime parameter is invalid.

400

InvalidStartTime.Malformed

The specified parameter StartTime is not valid.

The specified StartTime parameter is invalid.

400

InvalidParameterCombination

The end time must be greater than the start time.

The end time must be later than the start time.

404

InvalidDBNodeId.NotFound

The DBNodeId provided does not exist in our records.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBInstancePerformance#workbench-doc-change-demo) for a complete list.
