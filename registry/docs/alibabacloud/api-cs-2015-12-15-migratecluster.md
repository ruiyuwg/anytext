The Container Service for Kubernetes (ACK) managed Pro cluster type is developed based on the ACK managed Basic cluster type. It inherits all benefits of ACK managed clusters, such as fully-managed control planes and control plane high availability. It further enhances reliability, security, scheduling capabilities, and offers service level agreement (SLA)-backed guarantees, making it ideal for enterprise customers with large-scale production workloads requiring high stability and security. You can call the MigrateCluster operation to migrate an ACK managed Basic cluster to an ACK managed Pro cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/MigrateCluster)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/MigrateCluster)

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

cs:MigrateCluster

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{cluster_id}/migrate HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

cluster\_id

string

Yes

The cluster ID.

c21e0591548ba4c10bdb535d6572b\*\*\*\*

body

object

No

The request body.

oss\_bucket\_name

string

No

The name of the Object Storage Service (OSS) bucket.

bucket-\*\*\*\*

oss\_bucket\_endpoint

string

No

The endpoint of the OSS bucket.

\*\*\*\*\*\*\*.oss-cn-hangzhou.aliyuncs.com

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

c8155823d057948c69a\*\*\*\*

request\_id

string

The request ID.

20758A-585D-4A41-A9B2-28DA8F4F534F

task\_id

string

The task ID.

T-62ccd14aacb8db06ca00\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c8155823d057948c69a****",
  "request_id": "20758A-585D-4A41-A9B2-28DA8F4F534F",
  "task_id": "T-62ccd14aacb8db06ca00****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-25

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/MigrateCluster?updateTime=2023-12-25#workbench-doc-change-demo)

2023-12-21

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/MigrateCluster?updateTime=2023-12-21#workbench-doc-change-demo)

2022-08-11

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/MigrateCluster?updateTime=2022-08-11#workbench-doc-change-demo)
