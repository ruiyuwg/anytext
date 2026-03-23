Queries the performance data of a PolarDB cluster.

## Operation description

-   If the monitoring frequency is once every 5 seconds:
    
    -   If the query time range is 1 hour or less, the data granularity is 5 seconds.
        
    -   If the query time range is 1 day or less, the data granularity is 1 minute.
        
    -   If the query time range is 7 days or less, the data granularity is 10 minutes.
        
    -   If the query time range is 30 days or less, the data granularity is 1 hour.
        
    -   If the query time range is more than 30 days, the data granularity is 1 day.
        
-   If the monitoring frequency is once every 60 seconds:
    
    -   If the query time range is 1 day or less, the data granularity is 1 minute.
        
    -   If the query time range is 7 days or less, the data granularity is 10 minutes.
        
    -   If the query time range is 30 days or less, the data granularity is 1 hour.
        
    -   If the query time range is more than 30 days, the data granularity is 1 day.
        

**Note**

The default monitoring frequency is once every 60 seconds. You can call the [ModifyDBClusterMonitor](/help/en/polardb/polardb-for-mysql/api-modifydbclustermonitor) operation to set the frequency to once every 5 seconds.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterPerformance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterPerformance)

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

polardb:DescribeDBClusterPerformance

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

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Type

string

No

The query type.

orca

Key

string

Yes

The performance metrics that you want to query. Separate multiple metrics with commas (,). For more information, see [Performance parameters](/help/en/polardb/polardb-for-mysql/performance-metric-monitoring).

**Note**

Specify up to five performance metrics.

PolarDBDiskUsage

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2020-09-23T01:01Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2020-09-23T01:00Z

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

A list of cluster performance data.

object

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

An array of performance data.

object

Value

string

The value of the monitoring metric.

42.38

Timestamp

integer

The point in time when the metric was collected. The value is a UNIX timestamp. Unit: milliseconds.

1600822800000

DBNodeId

string

The ID of the database cluster node.

**Note**

This parameter is not returned when the `Key` parameter is set to `PolarDBDiskUsage`.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

DBVersion

string

The compatible database version.

8.0

EndTime

string

The end of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.

2020-09-23T01:01:00Z

RequestId

string

The request ID.

35D3E3DA-4650-407A-BFF5-59BFF1\*\*\*\*\*\*

StartTime

string

The beginning of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is displayed in UTC.

2020-09-23T01:00:00Z

DBClusterId

string

The database cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBType

string

The compatible database type.

MySQL

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
              "Value": "42.38",
              "Timestamp": 1600822800000
            }
          ]
        },
        "DBNodeId": "pi-*************"
      }
    ]
  },
  "DBVersion": "8.0",
  "EndTime": "2020-09-23T01:01:00Z",
  "RequestId": "35D3E3DA-4650-407A-BFF5-59BFF1******",
  "StartTime": "2020-09-23T01:00:00Z",
  "DBClusterId": "pc-*****************",
  "DBType": "MySQL"
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

400

InvalidDateRange.Malformed

The Date Range can not more than one month.

The date range can be up to one month in length.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClusterPerformance#workbench-doc-change-demo) for a complete list.
