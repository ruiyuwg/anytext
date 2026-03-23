Sets the validity period of a kubeconfig file used by a Resource Access Management (RAM) user or RAM role to connect to a Container Service for Kubernetes (ACK) cluster. The validity period ranges from 1 to 876,000 hours. You can call this API operation when you customize configurations by using an Alibaba Cloud account. The default validity period of a kubeconfig file is three years.

## Operation description

-   You can call this operation only with an Alibaba Cloud account.
-   If the kubeconfig file used by your cluster is revoked, the custom validity period of the kubeconfig file is reset. In this case, you need to call this API operation to reconfigure the validity period of the kubeconfig file.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateK8sClusterUserConfigExpire)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateK8sClusterUserConfigExpire)

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

cs:UpdateK8sClusterUserConfigExpire

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /k8s/{ClusterId}/user_config/expire HTTP/1.1
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

c5b5e80b0b64a4bf6939d2d8fbbc5\*\*\*\*

body

object

No

The request body.

expire\_hour

long

Yes

Specifies the expiration time of the kubeconfig file. Unit: hours.

Valid values: \[1, 1876000\]. The maximum value is 100 years.

720

user

string

Yes

The RAM user ID.

The ID of the Resource Access Management (RAM) user that you use.

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

2023-03-28

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpdateK8sClusterUserConfigExpire?updateTime=2023-03-28#workbench-doc-change-demo)
