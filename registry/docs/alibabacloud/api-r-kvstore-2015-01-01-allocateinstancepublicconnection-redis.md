Applies for a public endpoint for a Tair (Redis OSS-compatible) instance.

## Operation description

You can also apply for public endpoints in the ApsaraDB for Redis console. For more information, see [Use a public endpoint to connect to an ApsaraDB for Redis instance](/help/en/redis/user-guide/use-a-public-endpoint-to-connect-to-an-apsaradb-for-redis-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/AllocateInstancePublicConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/AllocateInstancePublicConnection)

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

kvstore:AllocateInstancePublicConnection

create

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

ConnectionStringPrefix

string

Yes

The prefix of the public endpoint. The prefix must start with a lowercase letter and can contain lowercase letters and digits. The prefix can be 8 to 40 characters in length.

**Note** The endpoint is in the `<prefix>.redis.rds.aliyuncs.com` format.

r-bp1zxszhcgatnx\*\*\*\*

Port

string

Yes

The service port number of the instance. Valid values: **1024** to **65535**.

6379

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

20C8341E-B5AD-4B24-BD82-D73241522ABF

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "20C8341E-B5AD-4B24-BD82-D73241522ABF"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingInstanceId

InstanceId is mandatory for this action.

\-

400

MissingConnectionString

ConnectionStringPrefix is mandatory for this action.

\-

400

MissingPort

Port is mandatory for this action.

\-

400

NetTypeExists

Specified net type already existed.

The specified network type already exists

400

InvalidConnectionString.Format

Specified connection string is not valid.

The connection string is invalid. Use a different one.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/AllocateInstancePublicConnection?updateTime=2024-02-26#workbench-doc-change-demo)
