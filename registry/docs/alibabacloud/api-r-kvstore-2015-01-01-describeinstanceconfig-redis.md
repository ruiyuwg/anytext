Queries the default parameter configurations of a Tair (Redis OSS-compatible) instance.

## Operation description

This operation is available only for instances that use cloud disks.

**Note** You can call the [DescribeParameters](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeparameters-redis) operation to query the parameter settings of instances that use local disks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeInstanceConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeInstanceConfig)

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

kvstore:DescribeInstanceConfig

get

\*All Resources

`*`

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

The instance ID. You can call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Config

string

The parameter settings of the instance. For more information, see [Parameter overview and configuration guide](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/).

{\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"list-max-ziplist-entries\\":512,\\"list-max-ziplist-value\\":64,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}

RequestId

string

The request ID.

4E2C08F6-2D11-4ECD-9A4C-27EF2D3D\*\*\*\*

ParamReplMode

string

The synchronization mode.

-   **semisync**
-   **async**

async

ParamReplTimeout

string

The degradation threshold time of the semi-synchronous replication mode. This parameter is required only when semi-synchronous replication is enabled. Unit: milliseconds. Valid values: 10 to 60000.

\*\*\*\*

ParamNoLooseSentinelEnabled

string

The Sentinel-compatible mode, which is applicable to non-cluster instances. For more information about the parameter, see the relevant documentation.

\*\*\*\*

ParamSentinelCompatEnable

string

The Sentinel-compatible mode, which is applicable to cluster instances in proxy mode or read/write splitting instances. For more information about the parameter, see the relevant documentation.

1

ParamNoLooseSentinelPasswordFreeAccess

string

Indicates whether Sentinel commands can be run without requiring a password when the Sentinel mode is enabled. Valid values: Valid values: yes and no. Default value: no. After you set this parameter to yes, you can run Sentinel commands in a virtual private cloud (VPC) without the need to enable the password-free access feature.

no

ParamNoLooseSentinelPasswordFreeCommands

string

After you enable the Sentinel mode and set the ParamNoLooseSentinelPasswordFreeAccess parameter to yes, you can use this parameter to specify an additional list of commands that can be run without requiring a password. By default, this parameter is empty. After you configure this parameter, you can run the specified commands without a password on any connection. Proceed with caution. The commands must be written in lowercase letters. Multiple commands are separated by commas (,).

\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Config": "{\\\"EvictionPolicy\\\":\\\"volatile-lru\\\",\\\"hash-max-ziplist-entries\\\":512,\\\"zset-max-ziplist-entries\\\":128,\\\"list-max-ziplist-entries\\\":512,\\\"list-max-ziplist-value\\\":64,\\\"zset-max-ziplist-value\\\":64,\\\"set-max-intset-entries\\\":512,\\\"hash-max-ziplist-value\\\":64}",
  "RequestId": "4E2C08F6-2D11-4ECD-9A4C-27EF2D3D****",
  "ParamReplMode": "async",
  "ParamReplTimeout": "****",
  "ParamNoLooseSentinelEnabled": "****",
  "ParamSentinelCompatEnable": 1,
  "ParamNoLooseSentinelPasswordFreeAccess": "no",
  "ParamNoLooseSentinelPasswordFreeCommands": "****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceConfig?updateTime=2025-03-25#workbench-doc-change-demo)

2024-12-11

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceConfig?updateTime=2024-12-11#workbench-doc-change-demo)

2024-12-03

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceConfig?updateTime=2024-12-03#workbench-doc-change-demo)

2024-11-05

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceConfig?updateTime=2024-11-05#workbench-doc-change-demo)
