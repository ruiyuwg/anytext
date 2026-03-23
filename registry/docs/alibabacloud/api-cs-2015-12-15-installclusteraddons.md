Installs a component by specifying the name and version of the component. To enhance Kubernetes capabilities, you can install a variety of components in Container Service for Kubernetes (ACK) clusters, such as fully-managed core components and application, logging and monitoring, network, storage, and security group components.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/InstallClusterAddons)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/InstallClusterAddons)

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

cs:InstallClusterAddons

create

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

-   cs:AddonNames

none

## Request syntax

```
POST /clusters/{ClusterId}/components/install HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

ClusterId

string

Yes

集群 ID。

c82e6987e2961451182edacd74faf\*\*\*\*

body

array<object>

No

请求体参数。

ags-metrics-collector

object

No

组件详情。

name

string

Yes

组件名称。您可以通过 [ListAddons](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-listaddons) 接口查询可用组件的信息，包括组件名称及版本等。

logtail-ds

version

string

Yes

组件版本。您可以通过 [ListAddons](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-listaddons) 接口查询可用组件的信息，包括组件名称及版本等。

v1.7.3.0-aliyun

config

string

No

组件自定义参数，使用 JSON 字符串编码。

{\\"IngressDashboardEnabled\\":\\"true\\",\\"sls\_project\_name\\":\\"your\_sls\_project\_name\\"}

## Response parameters

Parameter

Type

Description

Example

object

cluster\_id

string

集群 ID。

c82e6987e2961451182edacd74faf\*\*\*\*

task\_id

string

任务 ID。

T-5a54309c80282e39ea0\*\*\*\*

request\_id

string

请求 ID。

687C5BAA-D103-4993-884B-C35E4314\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c82e6987e2961451182edacd74faf****",
  "task_id": "T-5a54309c80282e39ea0****",
  "request_id": "687C5BAA-D103-4993-884B-C35E4314****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-12

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/InstallClusterAddons?updateTime=2024-12-12#workbench-doc-change-demo)
