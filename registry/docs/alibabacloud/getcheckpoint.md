Queries the checkpoints of a shard from which data is consumed by a consumer group.

## Operation description

Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sls/2020-12-30/GetCheckPoint)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sls/2020-12-30/GetCheckPoint)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request syntax

```
GET /logstores/{logstore}/consumergroups/{consumerGroup} HTTP/1.1
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

test-logstore

consumerGroup

string

Yes

The name of the consumer group.

consumer-group-1

shard

integer

No

The shard ID.

-   If the specified shard does not exist, an empty list is returned.
-   If no shard ID is specified, the checkpoints of all shards are returned.

1

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

The format in which the response body is returned. Valid values: application/json and application/x-protobuf.

application/json

Content-Length

string

The length of the response body.

0

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

array<object>

The checkpoints of the shard from which data is consumed by a consumer group.

object

shard

integer

The shard ID.

0

checkpoint

string

The value of the checkpoint.

MTUyNDE1NTM3OTM3MzkwODQ5Ng==

updateTime

long

The time when the checkpoint was last updated. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1524224984800922

consumer

string

The consumer at the checkpoint.

consumer\_1

## Examples

Sample success responses

`JSON`format

```
[
  {
    "shard": 0,
    "checkpoint": "MTUyNDE1NTM3OTM3MzkwODQ5Ng==",
    "updateTime": 1524224984800922,
    "consumer": "consumer_1"
  }
]
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode).
