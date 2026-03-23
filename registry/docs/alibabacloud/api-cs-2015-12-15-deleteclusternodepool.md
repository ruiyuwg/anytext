Deletes unused node pools. Deleting a node pool terminates all pods on its nodes, which triggers pod rescheduling. Insufficient cluster resources may cause scheduling failures and business impact.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/DeleteClusterNodepool)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/DeleteClusterNodepool)

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

cs:DeleteClusterNodepool

delete

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
DELETE /clusters/{ClusterId}/nodepools/{NodepoolId} HTTP/1.1
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

c61da77e8bfbc4c4c999af2b51b65\*\*\*\*

NodepoolId

string

Yes

The node pool ID.

np30db56bcac7843dca90b999c8928\*\*\*\*

force

boolean

No

Specifies whether to forcefully delete the node pool.

false

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

7263C978-3DBD-4E06-B319-793B38A2F388

task\_id

string

task IDs

T-655ace947e0e6603af000004

## Examples

Sample success responses

`JSON`format

```
{
  "request_id": "7263C978-3DBD-4E06-B319-793B38A2F388",
  "task_id": "T-655ace947e0e6603af000004"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-13

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/DeleteClusterNodepool?updateTime=2023-12-13#workbench-doc-change-demo)
