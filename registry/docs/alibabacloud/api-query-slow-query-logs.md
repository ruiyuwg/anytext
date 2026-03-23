Queries the slow log details of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#precautions)Precautions

The response parameters returned by this operation are updated every minute.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeSlowLogRecords)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeSlowLogRecords)

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

rds:DescribeSlowLogRecords

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

The ID of the instance. You can call the [DescribeDBInstances](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstances) operation to query the ID of the instance.

rm-uf6wjk5\*\*\*\*\*\*

SQLHASH

string

No

The unique ID of the SQL statement. The ID is used to obtain the slow query logs of the SQL statement.

U2FsdGVk\*\*\*\*

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2020-06-17T16:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-ddTHH:mm:ssZ_ format. The time must be in UTC.\*\*

**Note** The end time must be later than the start time.

2020-06-18T16:00Z

DBName

string

No

The name of the database.

RDS\_MySQL

PageSize

integer

No

The number of entries per page. Valid value: **30 to 200**. Default value: **30**.

30

PageNumber

integer

No

The page number. Pages start from page 1. Default value: 1.

1

NodeId

string

No

The ID of the node.

**Note** This parameter is available only for instances that run RDS Cluster Edition. You can specify this parameter to query the logs of a specified node. If this parameter is not specified, the logs of the primary node are returned by default.

rn-p1fm78s90x5\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PageRecordCount

integer

The number of SQL log reports on the current page.

1

RequestId

string

The ID of the request.

4DBB1BB0-E5D8-4D41-B1C9-142364DB\*\*\*\*

TotalRecordCount

integer

The total number of entries returned.

1

DBInstanceId

string

The ID of the instance.

rm-uf6wjk5\*\*\*\*\*\*\*

Engine

string

The type of the database engine.

MySQL

PageNumber

integer

The page number.

1

Items

array<object>

An array that consists of the information about each slow log.

SQLSlowRecord

object

Information about slow query log.

HostAddress

string

The name and IP address of the client that is connected to the database.

xxx\[xxx\] @ \[1xx.xxx.xxx.xx\]

RowsAffectedCount

long

The number of affected rows.

**Note** This parameter is returned only for instances that run SQL Server.

34

QueryTimes

long

The execution duration of the query. Unit: seconds.

2

SQLText

string

The details of the SQL statement.

select sleep(2)

CpuTime

long

The duration during which the SQL statement is processed by the CPU. Unit: milliseconds.

**Note** This parameter is returned only for instances that run SQL Server.

0.002

QueryTimeMS

long

The execution duration of the query. Unit: milliseconds.

2001

ApplicationName

string

The name of the application that is connected to the instance.

**Note** This parameter is returned only for instances that run SQL Server.

example

LockTimes

long

The lock duration of the query. Unit: seconds.

0

ExecutionStartTime

string

The time when the execution of the SQL statement started. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2020-06-18T01:40:44Z

LogicalIORead

long

The number of logical reads.

**Note** This parameter is returned only for instances that run SQL Server.

383

WriteIOCount

long

The number of I/O writes.

**Note** This parameter is returned only for instances that run SQL Server.

22

PhysicalIORead

long

The number of physical reads.

**Note** This parameter is returned only for instances that run SQL Server.

200

ReturnRowCounts

long

The number of rows returned.

1

ParseRowCounts

long

The number of parsed rows.

1

DBName

string

The name of the database.

testDB

ClientHostName

string

The hostname of the client.

**Note** This parameter is returned only for instances that run SQL Server.

example

UserName

string

The name of the user.

**Note** This parameter is returned only for instances that run SQL Server.

user

LastRowsAffectedCount

long

The number of rows that are affected by the last SQL statement.

**Note** This parameter is returned only for instances that run SQL Server.

2

SQLHash

string

The unique ID of the SQL statement.

U2FsdGVk\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageRecordCount": 1,
  "RequestId": "4DBB1BB0-E5D8-4D41-B1C9-142364DB****",
  "TotalRecordCount": 1,
  "DBInstanceId": "rm-uf6wjk5*******",
  "Engine": "MySQL",
  "PageNumber": 1,
  "Items": {
    "SQLSlowRecord": [
      {
        "HostAddress": "xxx[xxx] @  [1xx.xxx.xxx.xx]",
        "RowsAffectedCount": 34,
        "QueryTimes": 2,
        "SQLText": "select sleep(2)",
        "CpuTime": 0.002,
        "QueryTimeMS": 2001,
        "ApplicationName": "example",
        "LockTimes": 0,
        "ExecutionStartTime": "2020-06-18T01:40:44Z",
        "LogicalIORead": 383,
        "WriteIOCount": 22,
        "PhysicalIORead": 200,
        "ReturnRowCounts": 1,
        "ParseRowCounts": 1,
        "DBName": "testDB",
        "ClientHostName": "example",
        "UserName": "user",
        "LastRowsAffectedCount": 2,
        "SQLHash": "U2FsdGVk****"
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

InvalidSearchTimeRange

search time range cannot be longer than a month.

The interval between the end time that is specified by the EndTime parameter and the start time that is specified by the StartTime parameter must be less than 31 days. Check the values of these parameters.

400

IO.Exception

IO exception, retry later.

An I/O error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeSlowLogRecords?updateTime=2024-11-18#workbench-doc-change-demo)

2023-06-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeSlowLogRecords?updateTime=2023-06-06#workbench-doc-change-demo)

2023-06-02

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeSlowLogRecords?updateTime=2023-06-02#workbench-doc-change-demo)
