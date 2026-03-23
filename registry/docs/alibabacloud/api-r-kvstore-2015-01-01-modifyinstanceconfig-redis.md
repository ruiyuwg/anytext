Modifies the parameter settings of a Tair (Redis OSS-compatible) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceConfig)

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

kvstore:ModifyInstanceConfig

update

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

-   kvstore:InstanceAofConfig
-   kvstore:TLSVersion

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

实例 ID。

r-bp1zxszhcgatnx\*\*\*\*

Config

string

Yes

需修改的实例参数，格式为 JSON，修改后的值会覆盖原来的值。例如您只希望修改**maxmemory-policy**参数为 **noeviction**，您可以传入`{"maxmemory-policy":"noeviction"}`。

**Note** 关于各参数的详细说明，请参见[参数说明](/help/en/redis/user-guide/supported-parameters)。

{"maxmemory-policy":"volatile-lru","zset-max-ziplist-entries":128,"zset-max-ziplist-value":64,"hash-max-ziplist-entries":512,"set-max-intset-entries":512}

ParamReplMode

string

No

同步模式：

-   **async**（默认）：异步
-   **semisync**：半同步

async

ParamSemisyncReplTimeout

string

No

半同步模式的降级阈值。仅半同步支持配置该参数，单位为 ms，取值范围为 10~60000，默认为 500。

**Note**-   当同步延迟超出该阈值时，同步模式会自动转为异步，当同步延迟消除后，同步模式会自动转换为半同步。
-   仅 Tair 企业版实例支持，该功能公测中。

500

ParamNoLooseSentinelEnabled

string

No

哨兵兼容模式，适用于非集群实例。取值说明：

-   **no**（默认）：未开启
-   **yes**：开启

**Note** 更多信息请参见 [Sentinel 兼容模式](/help/en/redis/user-guide/use-the-sentinel-compatible-mode-to-connect-to-an-apsaradb-for-redis-instance)。

yes

ParamSentinelCompatEnable

string

No

哨兵兼容模式，适用于集群架构代理连接模式或读写分离架构的实例，取值说明：

-   **0**（默认）：未开启
-   **1**：开启

**Note** 更多信息请参见 [Sentinel 兼容模式](/help/en/redis/user-guide/use-the-sentinel-compatible-mode-to-connect-to-an-apsaradb-for-redis-instance)。

1

ParamNoLooseSentinelPasswordFreeAccess

string

No

开启哨兵模式时，是否允许免密执行 Sentinel 相关命令，取值说明：

-   **no**（默认）：关闭。
-   **yes**：开启。开启后，可以在任意连接上免密执行 Sentinel 命令以及使用 SENTINEL 命令监听+switch-master 通道。

\*\*\*\*

ParamNoLooseSentinelPasswordFreeCommands

string

No

启用哨兵模式及 ParamNoLooseSentinelPasswordFreeAccess 参数后，可通过本参数添加额外的免密命令列表（默认为空）。

**Note**-   设置后可在任意连接上无需密码执行对应命令，请谨慎操作。
-   命令需使用小写字母，多个命令以英文逗号(,)分隔。

\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

请求 ID。

8D0C0AFC-E9CD-47A4-8395-5C31BF9B\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8D0C0AFC-E9CD-47A4-8395-5C31BF9B****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameters.Format

Specified parameters is not valid.

The parameter is invalid.

400

ParamNotSupportedForCurrentVersion

Parameter is not supported for current version.

The error message returned because modifications to parameter values are not supported for the current engine version.

403

InstanceType.NotSupport

Current instance type does not support this operation.

The current instance type does not support this operation

403

NetworkType.NotSupport

Current network type does not support this operation.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceConfig?updateTime=2025-03-25#workbench-doc-change-demo)

2024-12-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceConfig?updateTime=2024-12-11#workbench-doc-change-demo)

2024-12-03

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceConfig?updateTime=2024-12-03#workbench-doc-change-demo)

2024-11-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceConfig?updateTime=2024-11-05#workbench-doc-change-demo)
