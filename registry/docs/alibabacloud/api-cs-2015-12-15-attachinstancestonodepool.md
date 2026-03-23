Adds existing nodes to a specific node pool. You can add existing ECS instances to a specific node pool in a Container Service for Kubernetes (ACK) cluster as worker nodes. You can also add removed worker nodes back to the node pool.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/AttachInstancesToNodePool)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/AttachInstancesToNodePool)

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

cs:AttachInstancesToNodePool

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{ClusterId}/nodepools/{NodepoolId}/attach HTTP/1.1
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

c82e6987e2961451182edacd74faf\*\*\*\*

NodepoolId

string

Yes

The node pool ID.

np31da1b38983f4511b490fc62108a\*\*\*\*

body

object

No

The request body.

instances

array

No

The IDs of the instances to be added.

string

No

The ID of the instance to be added.

i-2zed0sswuau6o89b\*\*\*\*

password

string

No

The SSH password that is used to log on to the instance.

Hello1234

format\_disk

boolean

No

Specifies whether to store container data and images on data disks. Valid values:

-   `true`: stores container data and images on data disks.
-   `false`: does not store container data or images on data disks.

Default value: `false`.

How to mount a data disk:

-   If the ECS instances are already mounted with data disks and the file system of the last data disk is not initialized, the system automatically formats this data disk to ext4 and mounts it to /var/lib/docker and /var/lib/kubelet.
-   If no data disk is attached to the ECS instances, the system does not purchase a new data disk.

**Note** If you choose to store container data and images on a data disk and the data disk is already mounted to the ECS instance, the existing data on the data disk will be cleared. You can back up the disk to avoid data loss.

false

keep\_instance\_name

boolean

No

Specifies whether to retain the instance name. Valid values:

-   `true`: retains the instance name.
-   `false`: does not retain the instance name.

Default value: `true`.

true

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

request\_id

string

The request ID.

D7631D83-6E98-1949-B665-766A62xxxxxx

task\_id

string

The task ID.

T-5a54309c80282e39ea00002f

## Examples

Sample success responses

`JSON`format

```
{
  "request_id": "D7631D83-6E98-1949-B665-766A62xxxxxx",
  "task_id": "T-5a54309c80282e39ea00002f"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-21

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/AttachInstancesToNodePool?updateTime=2023-07-21#workbench-doc-change-demo)
