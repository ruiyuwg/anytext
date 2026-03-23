Applies for a private endpoint for a Tair (Redis OSS-compatible) instance.

## Operation description

Clients can bypass proxy nodes and use private endpoints to connect to cluster instances. This is similar to the connection to native Redis clusters. The direct connection mode can reduce communication overheads and the response time of Tair (Redis OSS-compatible).

To call this operation, make sure that the instance meets the following requirements:

-   The instance is a cluster instance.
-   The instance is deployed in classic mode.
-   The instance is deployed in a virtual private cloud (VPC). If the instance is deployed in the classic network, you can call the [SwitchNetwork](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-switchnetwork-redis) operation to change the network type to VPC.
-   SSL encryption is disabled for the instance. If SSL encryption is enabled, you can call the [ModifyInstanceSSL](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancessl-redis) operation to disable SSL encryption.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/AllocateDirectConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/AllocateDirectConnection)

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

kvstore:AllocateDirectConnection

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

ConnectionString

string

No

The prefix of the private endpoint. The prefix must start with a lowercase letter and can contain lowercase letters and digits. The prefix must be 8 to 40 characters in length.

redisdirect123

Port

string

No

The port number of the instance. Valid values: **1024** to **65535**. Default value: **6379**.

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

5D622714-AEDD-4609-9167-F5DDD3D1\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5D622714-AEDD-4609-9167-F5DDD3D1****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NetTypeExists

Specified net type already existed

\-

400

InvalidConnType

Specified DB instance conn type is not valid.

\-

400

TaskHasExist

The task already exists.

The task already exists.

400

ConnectionStringAlreadyExists

Specified connection string already exists in the Aliyun RDS.

\-

400

InvalidConnectionString.Format

Specified connection string is not valid.

The connection string is invalid. Use a different one.

400

DirectConnectionAlreadyExists

Specified instance direct connection already exists.

\-

400

InvalidVPCParamGroup

Specified vpc param group is not valid.

\-

400

InvalidConnectionString

ConnectionString is invalid, valid regex: ^\\w+$

The prefix of the endpoint is invalid. The prefix must start with a lowercase letter and can contain lowercase letters and digits. The prefix can be 8 to 40 characters in length.

403

UnsupportedEngineVersion

Current engine version does not support operations.

\-

403

IncorrectMinorVersion

Current engine minor version does not support operations.

The operation is not supported by the minor version of the instance. Update the instance to the latest minor version and try again.

403

InstanceStatus.NotSupport

Instance status does not support this operation.

The error message returned because the operation is not supported while the instance is in the current state.

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

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/AllocateDirectConnection?updateTime=2025-03-25#workbench-doc-change-demo)
