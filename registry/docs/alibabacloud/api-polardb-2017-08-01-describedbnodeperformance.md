Queries performance data for a node in a PolarDB cluster.

## Operation description

-   If the monitoring frequency is 5 seconds:
    
    -   If the query time range is 1 hour or less, the data granularity is 5 seconds.
        
    -   If the query time range is 1 day or less, the data granularity is 1 minute.
        
    -   If the query time range is 7 days or less, the data granularity is 10 minutes.
        
    -   If the query time range is 30 days or less, the data granularity is 1 hour.
        
    -   If the query time range is more than 30 days, the data granularity is 1 day.
        
-   If the monitoring frequency is 60 seconds:
    
    -   If the query time range is 1 day or less, the data granularity is 1 minute.
        
    -   If the query time range is 7 days or less, the data granularity is 10 minutes.
        
    -   If the query time range is 30 days or less, the data granularity is 1 hour.
        
    -   If the query time range is more than 30 days, the data granularity is 1 day.
        

**Note**

The default monitoring frequency is 60 seconds. Call the [ModifyDBClusterMonitor](/help/en/polardb/polardb-for-mysql/api-modifydbclustermonitor) operation to set it to 5 seconds.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBNodePerformance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBNodePerformance)

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

polardb:DescribeDBNodePerformance

get

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBNodeId

string

Yes

The ID of the node in the PolarDB cluster.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

Interval

string

No

The granularity of the performance data. Valid values:

-   5
    
-   30
    
-   60
    
-   600
    
-   1800
    
-   3600
    
-   86400
    

60

Type

string

No

A special metric. Currently, only orca is supported.

orca

Key

string

Yes

The performance metrics to query. Separate multiple metrics with commas (,). For more information, see [Performance metrics](/help/en/polardb/polardb-for-mysql/performance-metric-monitoring).

**Note**

-   You can query a maximum of five performance metrics.
    
-   If your cluster has Serverless enabled for fixed specifications, querying PolarDBCPU or PolarDBMemory alone ignores the Interval parameter and returns performance metrics per second. To get data at your specified Interval, query multiple metrics.
    

PolarDBDiskUsage

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in Coordinated Universal Time (UTC).

2020-09-23T01:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2020-09-23T01:01Z

DBClusterId

string

No

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PerformanceKeys

object

PerformanceItem

array<object>

The list of performance data for the cluster.

array<object>

MetricName

string

The name of the performance metric.

mean\_sys\_dir\_size

Measurement

string

The performance metric.

PolarDBDiskUsage

Points

object

PerformanceItemValue

array<object>

An array of performance data.

object

Value

string

The value of the monitoring metric.

9.33

Timestamp

integer

The data point in time. The value is a UNIX timestamp. Unit: milliseconds (ms).

1600822800000

DBVersion

string

The database engine version.

8.0

EndTime

string

The end of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is in UTC.

2020-09-23T01:01:00Z

RequestId

string

The request ID.

E2FDB684-751D-424D-98B9-704BEA\*\*\*\*\*\*

StartTime

string

The beginning of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is in UTC.

2020-09-23T01:00:00Z

DBType

string

The database engine type.

MySQL

DBNodeId

string

The ID of the node in the PolarDB cluster.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "PerformanceKeys": {
    "PerformanceItem": [
      {
        "MetricName": "mean_sys_dir_size",
        "Measurement": "PolarDBDiskUsage",
        "Points": {
          "PerformanceItemValue": [
            {
              "Value": "9.33",
              "Timestamp": 1600822800000
            }
          ]
        }
      }
    ]
  },
  "DBVersion": "8.0",
  "EndTime": "2020-09-23T01:01:00Z",
  "RequestId": "E2FDB684-751D-424D-98B9-704BEA******",
  "StartTime": "2020-09-23T01:00:00Z",
  "DBType": "MySQL",
  "DBNodeId": "pi-*****************"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidStartTime.Malformed

The specified parameter StartTime is not valid.

The specified StartTime parameter is invalid.

400

InvalidKey.Malformed

The specified parameter Key is not valid.

The specified parameter key is invalid.

400

InvalidDBNodeId.Malformed

The specified parameter DBNodeId is not valid.

The specified DBNodeId parameter is invalid.

400

InvalidEndTime.Malformed

The specified parameter EndTime is not valid.

The specified EndTime parameter is invalid.

400

InvalidDateRange.Malformed

The Date Range can not more than one month.

The date range can be up to one month in length.

404

InvalidDBNodeId.NotFound

The DBNodeId provided does not exist in our records.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBNodePerformance#workbench-doc-change-demo) for a complete list.
