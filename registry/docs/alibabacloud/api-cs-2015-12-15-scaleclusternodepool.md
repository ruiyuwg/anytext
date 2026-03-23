Scales out a node pool.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/ScaleClusterNodePool)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/ScaleClusterNodePool)

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

cs:ScaleClusterNodePool

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{ClusterId}/nodepools/{NodepoolId} HTTP/1.1
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

c23421cfa74454bc8b37163fd19af\*\*\*\*

NodepoolId

string

Yes

The node pool ID.

np31da1b38983f4511b490fc62108a\*\*\*\*

body

object

No

The request body parameters.

count

long

No

The number of worker nodes that you want to add. For example, the current node pool contains two nodes. After the two node is scaled out, the node pool contains four nodes. Due to the limit of the node quota, you can add at most 500 nodes in each request.

2

## Response parameters

Parameter

Type

Description

Example

object

The response body.

task\_id

string

The task ID.

T-5faa48fb31b6b8078d00\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "task_id": "T-5faa48fb31b6b8078d00****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
