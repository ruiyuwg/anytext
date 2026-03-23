You can call the UpgradeClusterNodepool operation to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.

## Operation description

This operation allows you to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpgradeClusterNodepool)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpgradeClusterNodepool)

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

cs:UpgradeClusterNodepool

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{ClusterId}/nodepools/{NodepoolId}/upgrade HTTP/1.1
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

c106f377e16f34eb1808d6b9362c9\*\*\*\*

NodepoolId

string

Yes

The node pool ID.

np31da1b38983f4511b490fc62108a\*\*\*\*

body

object

No

The request body.

image\_id

string

No

The ID of the OS image used by the nodes.

aliyun\_2\_1903\_x64\_20G\_alibase\_20200529.vhd

runtime\_version

string

No

The version of the container runtime used by the nodes. You can call the [DescribeKubernetesVersionMetadata](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describekubernetesversionmetadata) operation and get the runtime version in the runtime field.

1.5.10

kubernetes\_version

string

No

The Kubernetes version used by the nodes. You can call the [DescribeKubernetesVersionMetadata](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describekubernetesversionmetadata) operation and get the Kubernetes version of the current cluster in the current\_version field.

1.22.15-aliyun.1

runtime\_type

string

No

The runtime type. You can call the [DescribeKubernetesVersionMetadata](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describekubernetesversionmetadata) operation and get the runtime information in the runtime field.

containerd

use\_replace

boolean

No

Specifies whether to perform the update by replacing the system disk. Valid values:

-   true: replaces the system disk.
-   false: does not replace the system disk.

Default value: false.

false

rolling\_policy

object

No

The rolling update configuration.

pause\_policy

string

No

The policy used to pause the update. Valid values:

-   FirstBatch: pauses after the first batch is updated.
-   EveryBatch: pauses after each batch is updated.
-   NotPause: does not pause.

NotPause

batch\_interval

integer

No

The update interval between batches takes effect only when the pause policy is set to NotPause. Unit: minutes. Valid values: 5 to 120.

5 minutes

max\_parallelism

integer

No

The maximum number of nodes per batch.

3

node\_names

array

No

The nodes you want to update. If you do not specify this parameter, all nodes in the node pool are updated by default.

string

No

The node name.

test

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

2D69A58F-345C-4FDE-88E4-BF518944\*\*\*\*

task\_id

string

The task ID.

T-5fd211e924e1d0078700xxxx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2D69A58F-345C-4FDE-88E4-BF518944****",
  "task_id": "T-5fd211e924e1d0078700xxxx"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-28

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpgradeClusterNodepool?updateTime=2024-02-28#workbench-doc-change-demo)

2024-02-06

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpgradeClusterNodepool?updateTime=2024-02-06#workbench-doc-change-demo)

2023-04-27

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpgradeClusterNodepool?updateTime=2023-04-27#workbench-doc-change-demo)
