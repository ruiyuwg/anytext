Queries the performance data of PolarProxy.

## Operation description

**Note** This operation is applicable only to PolarDB for MySQL clusters.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBProxyPerformance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBProxyPerformance)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

polardb:DescribeDBProxyPerformance

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBClusterId

string

Yes

The ID of cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBEndpointId

string

No

The ID of the endpoint.

pe-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Interval

string

No

The interval at which performance data is collected. Valid values: 5, 30, 60, 600, 1800, 3600, 86400, in seconds.

60

Type

string

No

Special metric. Set the value to tair, which indicates the PolarTair architecture.

tair

Key

string

Yes

The performance metrics that you want to query. Separate multiple indicators with commas (,). For more information, see [Performance parameters](/help/en/polardb/polardb-for-mysql/performance-metric-monitoring).

PolarProxy\_CpuUsage

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2020-09-23T01:01Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.

2020-09-24T02:08Z

DBNodeId

string

No

The ID of the node in the cluster. This parameter can be used to query the performance metrics of PolarProxy on different nodes. The following metrics are supported: PolarProxy\_DBConns, PolarProxy\_DBQps, and PolarProxy\_DBActionOps.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PerformanceKeys

array<object>

Details about the performance metrics.

PerformanceItem

object

MetricName

string

The name of the performance metric.

service\_connections\_ps

Measurement

string

The performance metric.

PolarProxy\_CpuUsage

Points

array<object>

The list of the performance metrics.

PerformanceItemValue

object

Value

string

The value of the metric.

10

Timestamp

long

The time when the metric value was collected. This value is a timestamp in milliseconds.

1600822800000

DBNodeId

string

The ID of the node.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

DBVersion

string

The version of the database engine.

8.0

EndTime

string

The end time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2020-09-23T01:01:00Z

RequestId

string

The ID of the request.

35D3E3DA-4650-407A-BFF5-59BFF1\*\*\*\*\*\*

StartTime

string

The start time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2020-09-23T01:00:00Z

DBClusterId

string

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBType

string

The type of the database engine.

MySQL

## Examples

Sample success responses

`JSON`format

```
{
  "PerformanceKeys": {
    "PerformanceItem": [
      {
        "MetricName": "service_connections_ps",
        "Measurement": "PolarProxy_CpuUsage",
        "Points": {
          "PerformanceItemValue": [
            {
              "Value": 10,
              "Timestamp": 1600822800000
            }
          ]
        },
        "DBNodeId": "pi-*************"
      }
    ]
  },
  "DBVersion": 8,
  "EndTime": "2020-09-23T01:01:00Z",
  "RequestId": "35D3E3DA-4650-407A-BFF5-59BFF1******",
  "StartTime": "2020-09-23T01:00:00Z",
  "DBClusterId": "pc-*****************",
  "DBType": "MySQL"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameterCombination

The end time must be greater than the start time.

The end time must be later than the start time.

400

InvalidStartTime.Malformed

The specified parameter StartTime is not valid.

The specified StartTime parameter is invalid.

400

InvalidEndTime.Malformed

The specified parameter EndTime is not valid.

The specified EndTime parameter is invalid.

400

InvalidKey.Malformed

The specified parameter Key is not valid.

The specified parameter key is invalid.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBEndpointId.NotFound

The DBEndpointId provided does not exist in our records.

The supplied DBEndpointId does not exist in the current record.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBProxyPerformance?updateTime=2024-08-27#workbench-doc-change-demo)

2024-03-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBProxyPerformance?updateTime=2024-03-14#workbench-doc-change-demo)

2024-03-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBProxyPerformance?updateTime=2024-03-13#workbench-doc-change-demo)

2024-02-02

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBProxyPerformance?updateTime=2024-02-02#workbench-doc-change-demo)
