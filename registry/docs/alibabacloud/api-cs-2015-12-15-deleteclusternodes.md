Removes nodes from a Container Service for Kubernetes (ACK) cluster when they are no longer required through the DeleteClusterNodes interface. When removing nodes, you can specify whether to release the Elastic Compute Service (ECS) instances and drain the nodes.

## Operation description

-   Use this API or the [ACK console](https://cs.console.alibabacloud.com) for node removal. Do not remove a node by running the `kubectl delete node` command.
-   Never directly release or remove ECS instances through the ECS or Auto Scaling console/APIs. Renew subscription ECS instances before they expire. Violations may cause node termination and removal from the ACK console.
-   If a node pool has the Expected Nodes parameter configured, the node pool automatically scales other ECS instances to maintain the expected number of nodes.
-   When you remove a node, the pods on the node are migrated to other nodes. To prevent service interruptions, remove nodes during off-peak hours. Unexpected risks may arise during node removal. Back up the data in advance.
-   ACK drains the node during node removal. Make sure that other nodes in the cluster have sufficient resources to host the evicted pods.
-   To ensure the pods on the node you want to remove can be successfully scheduled to other nodes, check whether the node affinity rules and scheduling policies of the pods meet the requirements.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/DeleteClusterNodes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/DeleteClusterNodes)

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

cs:DeleteClusterNodes

delete

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{ClusterId}/nodes HTTP/1.1
DELETE /clusters/{ClusterId}/nodes HTTP/1.1POST /clusters/{ClusterId}/nodes HTTP/1.1
DELETE /clusters/{ClusterId}/nodes HTTP/1.1
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

The cluster ID.

c850429a2287b4d968e27e87a4921\*\*\*\*

body

object

No

The request body.

drain\_node

boolean

No

Specifies whether to remove all pods from the nodes you want to remove. Valid values:

-   `true`: removes all pods automatically.
-   `false`: skips removing pods.

Default value: `false`

true

release\_node

boolean

No

Specifies whether to release the ECS instances. Valid values:

-   `true`: releases the ECS instances.
-   `false`: retains the ECS instances.

Default value: `false`

\*\*

**Notes** Unsupported for subscription ECS instances.

true

nodes

array

Yes

The list of nodes to remove. You must specify the node names used in the cluster, for example, `cn-hangzhou.192.168.xx.xx`.

string

No

The node name.

cn-chengdu.192.168.0.70

## Response parameters

Parameter

Type

Description

Example

object

The response body.

cluster\_id

string

The cluster ID.

c104d5d5f301c4e2a8ee578c37bc\*\*\*\*

request\_id

string

The request ID.

A9891419-D125-4D89-AFCA-68846675E2F7

task\_id

string

The ID of the task.

T-60fea8ad2e277f0879000ae9

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c104d5d5f301c4e2a8ee578c37bc****",
  "request_id": "A9891419-D125-4D89-AFCA-68846675E2F7",
  "task_id": "T-60fea8ad2e277f0879000ae9"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
