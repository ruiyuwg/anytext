Retrieves the performance metrics of an AI container.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAIDBClusterPerformance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAIDBClusterPerformance)

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

polardb:DescribeAIDBClusterPerformance

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

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters under your account, including the cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Key

string

Yes

The name of the metric.

PolarDBAIModelCall

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.

2025-09-17T02:18:00Z

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.

2025-09-23T01:01:00Z

Interval

string

No

The time granularity of the data to retrieve. Valid values: **60** (minutes) and **3600** (hours).

-   If you set **Interval** to **60**, you can query data from the last month. The maximum time range for a single query is 7 days.
    
-   If you set **Interval** to **3600**, you can query data from the last month. The maximum time range for a single query is 7 days.
    

60

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response schema.

PerformanceKeys

array<object>

The details of the instance performance parameters.

object

A list of cluster performance data.

Measurement

string

The performance metric.

PolarDBAIModelCall

MetricName

string

The name of the specific performance metric.

model\_input\_amount

Points

array<object>

The array of performance data.

object

A performance data point.

Value

string

The value of the metric.

42.38

Timestamp

integer

The UNIX timestamp that indicates when the metric was collected. Unit: milliseconds.

1724206183

DBNodeId

string

The ID of the cluster node.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

DBVersion

string

The version number of the database AI engine.

Example: 3.0

3.0

EndTime

string

The end of the time range that was queried. The time is in the `YYYY-MM-DDThh:mmZ` format and is in UTC.

2022-11-16T16:00Z

RequestId

string

The request ID.

D0CEC6AC-7760-409A-A0D5-E6CD86\*\*\*\*\*\*

StartTime

string

The beginning of the time range that was queried. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is in UTC.

2022-11-15T16:00Z

DBClusterId

string

The ID of the database cluster.

pc-a\*\*\*\*\*\*\*\*\*\*\*\*

DBType

string

The type of the database engine. Only **polardb\_ai** is supported.

polardb\_ai

ApiKey

string

The API key for the model service.

xxx

Interval

string

The time granularity of the performance data. Valid values:

-   60
    
-   3600
    

60

## Examples

Success response

`JSON` format

```
{
  "PerformanceKeys": [
    {
      "Measurement": "PolarDBAIModelCall",
      "MetricName": "model_input_amount",
      "Points": [
        {
          "Value": "42.38",
          "Timestamp": 1724206183
        }
      ],
      "DBNodeId": "pi-*************"
    }
  ],
  "DBVersion": "3.0",
  "EndTime": "2022-11-16T16:00Z",
  "RequestId": "D0CEC6AC-7760-409A-A0D5-E6CD86******",
  "StartTime": "2022-11-15T16:00Z",
  "DBClusterId": "pc-a************",
  "DBType": "polardb_ai",
  "ApiKey": "xxx",
  "Interval": "60"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBNodeId.Malformed

The specified parameter DBNodeId is not valid.

The specified DBNodeId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeAIDBClusterPerformance#workbench-doc-change-demo) for a complete list.
