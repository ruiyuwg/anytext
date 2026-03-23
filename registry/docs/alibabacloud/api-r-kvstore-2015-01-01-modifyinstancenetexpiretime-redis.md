Extends the retention period of the classic network endpoint of a Tair (Redis OSS-compatible) instance. You can call this operation after you change the network type of the Tair (Redis OSS-compatible) instance from classic network to Virtual Private Cloud (VPC) with the classic network endpoint retained.

## Operation description

You can also perform this operation in the Tair (Redis OSS-compatible) console. For more information, see [Change the expiration time for the endpoint of the classic network](/help/en/redis/user-guide/modify-the-expiration-date-of-a-classic-network-endpoint).

**Note** For more information about how to switch the network type of a Tair (Redis OSS-compatible) instance from classic network to VPC, see [SwitchNetwork](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-switchnetwork-redis) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceNetExpireTime)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceNetExpireTime)

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

kvstore:ModifyInstanceNetExpireTime

update

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

ConnectionString

string

Yes

The endpoint of the classic network.

r-bp1zxszhcgatnx\*\*\*\*.redis.rds.aliyuncs.com

ClassicExpiredDays

integer

Yes

The extension period to retain the classic network endpoint of the instance. Unit: days. Valid values: **14**, **30**, **60**, and **120**.

14

## Response parameters

Parameter

Type

Description

Example

object

InstanceId

string

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

RequestId

string

The ID of the request.

9C4AF387-1EA3-4C84-8013-3F6B973EDDF5

NetInfoItems

array<object>

Details about the extension period for which the classic network endpoint of the instance is retained.

NetInfoItem

object

The classic network information about the instance.

Port

string

The port number that is used to connect to the instance.

6379

DBInstanceNetType

string

The network type of the instance. The returned value is **Classic**.

Classic

ConnectionString

string

The endpoint of the classic network.

r-bp1zxszhcgatnx\*\*\*\*.redis.rds.aliyuncs.com

ExpiredTime

string

The expiration time of the classic network endpoint.

2019-08-01T09:29:18Z

IPAddress

string

The IP address of the instance in the classic network.

100.118.142.\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "InstanceId": "r-bp1zxszhcgatnx****",
  "RequestId": "9C4AF387-1EA3-4C84-8013-3F6B973EDDF5",
  "NetInfoItems": {
    "NetInfoItem": [
      {
        "Port": 6379,
        "DBInstanceNetType": "Classic",
        "ConnectionString": "r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com",
        "ExpiredTime": "2019-08-01T09:29:18Z",
        "IPAddress": "100.118.142.***"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

400

ClassicExpiredDaysError

The ClassicExpiredDays can not set to 0.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceNetExpireTime?updateTime=2025-03-25#workbench-doc-change-demo)
