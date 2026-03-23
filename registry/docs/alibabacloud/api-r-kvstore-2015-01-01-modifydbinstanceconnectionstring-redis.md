Changes the endpoint or port number of a Tair (Redis OSS-compatible) instance.

## Operation description

You can also modify the endpoint or port number of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Change the endpoint or port number of an instance](/help/en/redis/user-guide/change-the-endpoint-or-port-number-of-an-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyDBInstanceConnectionString)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyDBInstanceConnectionString)

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

kvstore:ModifyDBInstanceConnectionString

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

DBInstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

NewConnectionString

string

No

The prefix of the new endpoint. Specify the endpoint in the `<prefix>.redis.rds.aliyuncs.com` format. The prefix must be 8 to 40 characters in length and can contain lowercase letters and digits. It must start with a lowercase letter.

**Note** You must specify one of the **NewConnectionString** and **Port** parameters.

standardredis

CurrentConnectionString

string

Yes

The current endpoint of the instance.

r-bp1zxszhcgatnx\*\*\*\*.redis.rds.aliyuncs.com

Port

string

No

The port number of the instance. Valid values: **1024** to **65535**.

**Note** You must specify one of the **NewConnectionString** and **Port** parameters.

6379

IPType

string

No

The network type of the endpoint. Valid values:

-   **Private**: internal network
-   **Public**: Internet

Public

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

1790D68A-465C-44E3-BC24-9732652961F9

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1790D68A-465C-44E3-BC24-9732652961F9"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NewConnectionStringNotSupport

Specified newConnectionString is not supported.

\-

400

InvalidIPType.Format

Specified parameter IPType is not supported.

\-

400

InvalidConnectionStringOrPort.Duplicate

Specified connection string or port want to be modified is the same with current net type.

The connection string or port already exists.

400

InvalidConnectionString.Format

Specified connection string is not valid.

The connection string is invalid. Use a different one.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyDBInstanceConnectionString?updateTime=2025-03-25#workbench-doc-change-demo)
