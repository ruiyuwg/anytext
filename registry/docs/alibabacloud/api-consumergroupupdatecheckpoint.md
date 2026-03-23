Updates the checkpoint of a shard for a consumer group.

## Operation description

-   If you do not specify a consumer, you must set **forceSuccess** to **true**. Otherwise, the checkpoint cannot be updated.
-   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
-   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).

The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).

-   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](/help/en/sls/manage-a-project/) and [Manage a Logstore](/help/en/sls/manage-a-logstore).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sls/2020-12-30/ConsumerGroupUpdateCheckPoint)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sls/2020-12-30/ConsumerGroupUpdateCheckPoint)

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

log:ConsumerGroupUpdateCheckPoint

update

\*All Resources

`*`

-   log:TLSVersion

none

## Request syntax

```
POST /logstores/{logstore}/consumergroups/{consumerGroup}?type=checkpoint HTTP/1.1
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

ali-test-logstore

consumerGroup

string

Yes

The name of the consumer group.

consumer\_group\_test

consumer

string

Yes

The consumer.

consumer\_1

forceSuccess

boolean

No

Specifies whether to enable forceful updates. Valid values:

-   true
-   false

False

body

object

No

The IDs of the shards.

shard

integer

Yes

The ID of the shard.

0

checkpoint

string

Yes

The value of the checkpoint.

MTUyNDE1NTM3OTM3MzkwODQ5Ng==

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

The type of the response body.

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

## Examples

Sample success responses

`JSON`format

```
{}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode).
