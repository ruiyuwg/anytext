Kubeconfig files store identity and authentication information that is used by clients to access Container Service for Kubernetes (ACK) clusters. To use a kubectl client to manage an ACK cluster, you need to use the corresponding kubeconfig file to connect to the ACK cluster. We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.

## Operation description

-   The default validity period of a kubeconfig file is 3 years. 180 days before a kubeconfig file expires, you can renew it in the Container Service for Kubernetes (ACK) console or by calling API operations. After a kubeconfig file is renewed, the kubeconfig file is valid for 3 years. The previous kubeconfig file still remains valid until expiration. We recommend that you renew your kubeconfig file at the earliest opportunity.
-   We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeClusterUserKubeconfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeClusterUserKubeconfig)

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

cs:DescribeClusterUserKubeconfig

get

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

-   cs:KubeConfigDurationMinutes

none

## Request syntax

```
GET /k8s/{ClusterId}/user_config HTTP/1.1
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

c5b5e80b0b64a4bf6939d2d8fbbc5\*\*\*\*

PrivateIpAddress

boolean

No

Specifies whether to obtain the kubeconfig file that is used to connect to the cluster over the internal network. You can obtain the terminal ID by calling one of the following operations:

-   `true`: obtains the kubeconfig file that is used to connect to the master instance over the internal network.
-   `false`: obtains the kubeconfig file that is used to connect to the master instance over the Internet.

Default value: `false`

true

TemporaryDurationMinutes

long

No

The validity period of the temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320 (3 days).

\*\*

**Usage notes** If you do not specify this parameter, the system specifies a longer validity period. The validity period is returned in the `expiration` parameter.

15

## Response parameters

Parameter

Type

Description

Example

object

The response body.

config

string

The kubeconfig file of the cluster.

apiVersion: v1\*\*\*\*

expiration

string

The expiration time of the kubeconfig file. Format: the UTC time in the RFC3339 format.

2024-03-10T09:56:17Z

## Examples

Sample success responses

`JSON`format

```
{
  "config": "apiVersion: v1****",
  "expiration": "2024-03-10T09:56:17Z"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
