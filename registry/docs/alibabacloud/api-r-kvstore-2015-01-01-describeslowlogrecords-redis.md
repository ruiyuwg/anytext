Queries the slow query logs of a Tair (Redis OSS-compatible) instance that are generated within a specified period of time.

## Operation description

You can also query slow logs in the Tair (Redis OSS-compatible) console. For more information, see [Query slow logs of an instance](/help/en/redis/user-guide/view-slow-logs). This operation can be called up to 100 times per minute.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeSlowLogRecords)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeSlowLogRecords)

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

kvstore:DescribeSlowLogRecords

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

NodeId

string

No

The ID of the node in the instance. You can set this parameter to query the slow query logs of a specified node.

**Note** This parameter is available only for read/write splitting and cluster instances.

r-bp1zxszhcgatnx\*\*\*\*-db-0

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2019-03-10T14:11Z

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time. The time range cannot exceed one day. We recommend that you specify 1 hour. Specify the time in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2019-03-22T14:11Z

DBName

string

No

The name of the database.

0

PageSize

integer

No

The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.

30

PageNumber

integer

No

The number of the page to return. The value must be an integer that is greater than **0**. Default value: **1**.

1

SlowLogRecordType

string

No

The type of the slow logs. Default value: db. Valid values:

-   **proxy**: slow logs of proxy nodes
-   **db**: slow logs of data nodes

proxy

QueryKeyword

string

No

The keyword based on which slow logs are queried. You can set this parameter to a value of the string type.

keyword1

OrderType

string

No

The sorting order of the results to return. Default value: DESC. Valid values:

-   **ASC**: ascending order
-   **DESC**: descending order

ASC

OrderBy

string

No

The dimension by which to sort the results. Default value: execution\_time. Valid values:

-   **execution\_time**: sorts the results by query start time.
-   **latency**: sorts the results by query latency.

execution\_time

## Response parameters

Parameter

Type

Description

Example

object

StartTime

string

The start time of the query.

2019-03-10T13:11Z

RequestId

string

The ID of the request.

686BB8A6-BBA5-47E5-8A75-D2ADE433\*\*\*\*

PageRecordCount

integer

The number of log entries returned on the current page.

1

TotalRecordCount

integer

The total number of returned log entries.

1

PageSize

integer

The maximum number of log entries returned per page.

30

InstanceId

string

The ID of the instance.

r-bp10n\*\*\*\*\*\*\*\*

Engine

string

The database engine that the instance runs.

Redis

PageNumber

integer

The page number of the returned page.

1

Items

array<object>

The slow query log entries.

LogRecords

object

Account

string

The ID of the account.

0

ElapsedTime

long

The amount of time consumed to execute the slow query statement. Unit: microseconds.

248

Command

string

The slow query statement.

KEYS \*

DBName

string

The database name.

\-1

ExecuteTime

string

The start time when the slow query statement was executed. The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format.

2019-03-20T09:18:41Z

DataBaseName

string

The database name. This parameter serves the same purpose as the **DBName** parameter. We recommend that you use the **DBName** parameter.

\-1

NodeId

string

The node ID.

r-bp1zxszhcgatnx\*\*\*\*-db-0

AccountName

string

The username of the account.

demo

IPAddress

string

The IP address of the client.

172.16.88.\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "StartTime": "2019-03-10T13:11Z",
  "RequestId": "686BB8A6-BBA5-47E5-8A75-D2ADE433****",
  "PageRecordCount": 1,
  "TotalRecordCount": 1,
  "PageSize": 30,
  "InstanceId": "r-bp10n********",
  "Engine": "Redis",
  "PageNumber": 1,
  "Items": {
    "LogRecords": [
      {
        "Account": 0,
        "ElapsedTime": 248,
        "Command": "KEYS *",
        "DBName": -1,
        "ExecuteTime": "2019-03-20T09:18:41Z",
        "DataBaseName": -1,
        "NodeId": "r-bp1zxszhcgatnx****-db-0",
        "AccountName": "demo",
        "IPAddress": "172.16.88.***"
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

InvalidStartTime.Malformed

The Specified parameter StartTime is not valid.

\-

400

InvalidEndTime.Malformed

The Specified parameter EndTime is not valid.

The end time is invalid. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. Example: 2011-06-11T16:00Z.

400

InvalidStartTimeAndEndTime.Malformed

The end time must be later than the start time.

400

InvalidPageSize.Malformed

\-

403

IncorrectEngineVersion

Current engine version does not support operations.

The current Redis version does not support this operation. Please refer to the relevant documentation for this operation to understand the Redis version requirements for this operation.

403

ServerBusy

server busy now, please retry later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeSlowLogRecords?updateTime=2025-03-25#workbench-doc-change-demo)
