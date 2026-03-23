Installs components onto the nodes within a specified node pool. This API supports custom configurations and allows you to target specific nodes for the installation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/InstallNodePoolComponents)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/InstallNodePoolComponents)

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

cs:InstallNodePoolComponents

none

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{clusterId}/nodepools/{nodePoolId}/components HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

clusterId

string

No

The ID of the cluster.

c82e6987e2961451182edacd74faf\*\*\*\*

nodePoolId

string

No

The ID of the node pool.

np7c4fa4a5f1ce412b849\*\*\*\*

body

object

No

Request body parameters

components

array<object>

No

A list of node components to be installed.

object

No

The configuration of a single component.

name

string

Yes

The name of the component.

kubelet

version

string

No

The version of the component.

1.28.9-aliyun.1

config

object

No

The configuration details for the component.

customConfig

object

No

Custom parameters for the component.

string

No

A specific configuration key

cpuCFSQuota

rollingPolicy

object

No

Configuration for the rolling update process.

maxParallelism

long

No

The maximum number of nodes that can be updated concurrently in each batch. Default: 1.

1

pausePolicy

string

No

The strategy for automatic pausing during the update process. Valid values: NotPause, FirstBatchPause, EveryBatchPause.

NotPause

batchInterval

long

No

The time interval between update batches, in seconds.

0

nodeNames

array

No

A list of specific node names where the component should be installed. If not specified, the component will be installed on all nodes in the node pool.

string

No

The name of a specific node.

cn-hangzhou.10.2xxx

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

requestId

string

The unique ID of the request.

49511F2D-D56A-5C24-B9AE-C8491E09B\*\*\*

taskId

string

The task ID.

T-67d7ec016ce37c0106000\*\*\*

clusterId

string

The ID of the asynchronous task. You can use this ID to track the installation progress.

c8155823d057948c69a\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "requestId": "49511F2D-D56A-5C24-B9AE-C8491E09B***",
  "taskId": "T-67d7ec016ce37c0106000***",
  "clusterId": "c8155823d057948c69a****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-29

Add Operation

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/InstallNodePoolComponents?updateTime=2025-12-29#workbench-doc-change-demo)
