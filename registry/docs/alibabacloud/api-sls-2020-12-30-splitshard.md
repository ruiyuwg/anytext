Splits a shard in the readwrite state.

## Operation description

### [](#usage-notes)Usage notes

-   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
-   Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](/help/en/sls/shard) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sls/2020-12-30/SplitShard)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sls/2020-12-30/SplitShard)

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

log:SplitShard

update

\*LogStore

`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`

-   log:TLSVersion

none

## Request syntax

```
POST /logstores/{logstore}/shards/{shard}?action=split HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

project

string

Yes

The name of the project.

ali-test-project

logstore

string

Yes

The name of the Logstore.

logstorename

shard

integer

Yes

The ID of the shard.

0

key

string

No

The position where the shard is split.

ef000000000000000000000000000000

shardCount

integer

No

The number of new shards that are generated after splitting.

2

## Response parameters

Parameter

Type

Description

Example

headers

object

Server

string

The name of the server.

nginx

Content-Type

string

The content type of the response body. Valid values: application/json and application/x-protobuf.

application/json

Content-Length

string

The content length of the response body.

20

Connection

string

Indicates whether the connection is persistent. Valid values:

-   close: The connection is non-persistent. A new TCP connection is established for each HTTP request.
-   keep-alive: The connection is persistent. After a TCP connection is established, the connection remains open, and no more time or bandwidth is consumed to establish new connections.

close

Date

string

The time when the response was returned.

Sun, 27 May 2018 08:25:04 GMT

x-log-requestid

string

The request ID.

5B0A6B60BB6EE39764D458B5

array

The shards that are returned. For example, if the shardCount parameter is set to 2, an array that consists of three shards is returned. The first shard is the original shard, and the last two shards are the new shards.

[shard](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-shard)

The shard information.

## Examples

Sample success responses

`JSON`format

```
[
  {
    "shardID": 0,
    "status": "readwrite",
    "inclusiveBeginKey": "00000000000000000000000000000000",
    "exclusiveEndKey": 8e+30,
    "serverIp": "203.0.113.10",
    "createTime": 1524222931
  }
]
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode).
