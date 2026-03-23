Queries the performance metrics of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancePerformance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancePerformance)

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

rds:DescribeDBInstancePerformance

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

Key

string

Yes

The performance metrics that you want to query. Separate multiple values with commas (,). You can specify up to 30 values. For more information, see [Performance parameters](/help/en/rds/developer-reference/performance-parameters).

**Note** If you set **Key** to **MySQL\_SpaceUsage** or **SQLServer\_SpaceUsage**, you can query the monitoring data within only one day.

MySQL\_Sessions

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

**Note** The time span between the beginning time and the end time must be longer than the monitoring frequency. Otherwise, this operation may return an empty array.

2012-06-08T15:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

**Note** The time span between the beginning time and the end time must be longer than the monitoring frequency. Otherwise, this operation may return an empty array.

2012-06-18T15:00Z

NodeId

string

No

The ID of the instance.

339\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

EndTime

string

The end time of the query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2012-06-19T15:00Z

StartTime

string

The start time of the query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2012-06-10T15:00Z

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxxxxx

Engine

string

The database engine of the instance.

MySQL

RequestId

string

The request ID.

A5409D02-D661-4BF3-8F3D-0A814D0574E7

PerformanceKeys

array<object>

Details of the performance metrics.

PerformanceKey

object

Key

string

The name of the performance metric.

MySQL\_Sessions

ValueFormat

string

The format in which the value of the performance metric is returned.

**Note** If a performance metric value consists of multiple fields, the values are separated with ampersands (&). Example: com\_delete&com\_insert&com\_insert\_select&com\_replace.

recv\_k&sent\_k

Unit

string

The unit of the performance metrics.

KB

Values

array<object>

The performance metric values.

PerformanceValue

object

Date

string

The date and time when the value of the performance metric was recorded. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2011-05-30T03:29:00Z

Value

string

The value of the performance metric.

0.0&13.6

## Examples

Sample success responses

`JSON`format

```
{
  "EndTime": "2012-06-19T15:00Z",
  "StartTime": "2012-06-10T15:00Z",
  "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
  "Engine": "MySQL",
  "RequestId": "A5409D02-D661-4BF3-8F3D-0A814D0574E7",
  "PerformanceKeys": {
    "PerformanceKey": [
      {
        "Key": "MySQL_Sessions",
        "ValueFormat": "recv_k&sent_k",
        "Unit": "KB",
        "Values": {
          "PerformanceValue": [
            {
              "Date": "2011-05-30T03:29:00Z",
              "Value": "0.0&13.6"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Order.ComboInstanceNotAllowOperate

A package instance is not allowed to operate independently.

A package instance is not allowed to operate independently.

400

Price.PricingPlanResultNotFound

Pricing plan price result not found.

Pricing plan price result not found.

400

Order.NoRealNameAuthentication

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the user center for real-name authentication.

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the cost and cost for real-name authentication.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancePerformance?updateTime=2024-11-20#workbench-doc-change-demo)
