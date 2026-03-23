Queries the operational logs of a Tair (Redis OSS-compatible) instance.

## Operation description

For more information about how to view the operational logs of an instance in the Tair (Redis OSS-compatible) console, see [View active logs](/help/en/redis/user-guide/view-active-logs).

This operation can be called up to 100 times per minute.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeRunningLogRecords)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeRunningLogRecords)

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

kvstore:DescribeRunningLogRecords

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The ID of the node in the instance. You can set this parameter to query the operational logs of a specified node.

**Note**

-   This parameter is available only for read/write splitting and cluster instances.
    
-   If you set this parameter, you must also set the **CharacterType** parameter.
    

r-bp1zxszhcgatnx\*\*\*\*-db-0

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2018-12-03T07:01Z

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time. The time range cannot exceed one day. We recommend that you specify 1 hour. Specify the time in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2018-12-03T08:01Z

DBName

string

No

The name of the database.

0

RoleType

string

No

The role of the data shard. Default value: master. Valid values:

-   **master**: master node
-   **slave**: replica node

master

PageSize

integer

No

The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.

30

PageNumber

integer

No

The number of the page to return. The value must be an integer that is greater than **0** and less than or equal to the maximum value supported by the integer data type. Default value: **1**.

1

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmyiu4ekp\*\*\*\*

CharacterType

string

No

The shard type of the cluster instance. Valid values:

-   **proxy**: proxy node
-   **db**: data node
-   **cs**: config server node

**Note** If you set this parameter, you must also set the **NodeId** parameter.

proxy

QueryKeyword

string

No

The keyword that is used to query operational logs.

aof

OrderType

string

No

The method that is used to sort the returned log entries. Valid values:

-   **asc**: ascending order
-   **desc**: descending order

asc

## Response parameters

Parameter

Type

Description

Example

object

StartTime

string

The beginning of the time range to query.

2018-12-03T07:01Z

RequestId

string

The ID of the request.

093B8579-9264-43A0-ABA9-AA86\*\*\*\*

PageRecordCount

integer

The number of log entries returned on the current page.

5

TotalRecordCount

integer

The total number of entries returned.

5

PageSize

integer

The maximum number of entries returned on each page.

30

InstanceId

string

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

Engine

string

The type of the database engine.

Redis

PageNumber

integer

The page number of the returned page.

1

Items

array<object>

Details about the log entries.

LogRecords

object

CreateTime

string

The time when the log was generated. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2018-12-03T07:07:30Z

InstanceId

string

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

Content

string

The content of the log.

CONFIG REWRITE executed with success.

NodeId

string

The ID of the node.

**Note** If a standard instance is queried, `(null)` is returned.

r-bp1zxszhcgatnx\*\*\*\*-db-0

## Examples

Sample success responses

`JSON`format

```
{
  "StartTime": "2018-12-03T07:01Z",
  "RequestId": "093B8579-9264-43A0-ABA9-AA86****",
  "PageRecordCount": 5,
  "TotalRecordCount": 5,
  "PageSize": 30,
  "InstanceId": "r-bp1zxszhcgatnx****",
  "Engine": "Redis",
  "PageNumber": 1,
  "Items": {
    "LogRecords": [
      {
        "CreateTime": "2018-12-03T07:07:30Z",
        "InstanceId": "r-bp1zxszhcgatnx****",
        "Content": "CONFIG REWRITE executed with success.",
        "NodeId": "r-bp1zxszhcgatnx****-db-0"
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

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

\-

404

InvalidDbInstanceId.NotFound

Specified instance does not exist.

The specified instance does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeRunningLogRecords?updateTime=2025-03-25#workbench-doc-change-demo)
