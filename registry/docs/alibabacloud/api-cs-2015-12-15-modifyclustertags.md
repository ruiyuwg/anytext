You can add labels in key-value pairs to clusters. This allows cluster developers or O\\\\\\&M engineers to classify and manage clusters in a more flexible manner. This also meets the requirements for monitoring, cost analysis, and tenant isolation. You can call the ModifyClusterTags operation to modify the labels of a cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyClusterTags)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyClusterTags)

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

cs:ModifyClusterTags

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{ClusterId}/tags HTTP/1.1
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

The ID of the cluster.

c106f377e16f34eb1808d6b9362c9\*\*\*\*

body

array

No

The data of the tags that you want to modify.

[tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-tag)

No

The list of tags.

## Response parameters

Parameter

Type

Description

Example

The current API has no return parameters

## Examples

Sample success responses

`JSON`format

```
{}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterTags?updateTime=2024-12-18#workbench-doc-change-demo)
