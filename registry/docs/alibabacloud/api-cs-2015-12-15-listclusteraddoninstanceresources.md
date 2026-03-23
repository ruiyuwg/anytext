Queries the list of resources associated with installed cluster add-ons, including Kubernetes resources and Helm release information.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/ListClusterAddonInstanceResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/ListClusterAddonInstanceResources)

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

cs:ListClusterAddonInstanceResources

list

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
GET /clusters/{cluster_id}/addon_instances/{instance_name}/resources HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

cluster\_id

string

No

The ID of the cluster.

cb95aa626a47740afbf6aa099b650\*\*\*\*

instance\_name

string

No

The name of the add-on.

terway-eniip

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

kubernetes\_objects

array<object>

A list of Kubernetes objects associated with the add-on.

kubernetes\_objects

object

The Kubernetes object.

group

string

The Kubernetes API group to which the object belongs.

rbac.authorization.k8s.io

version

string

The Kubernetes API version to which the object belongs.

v1

kind

string

The Kubernetes API type to which the object belongs.

ClusterRole

name

string

The name of the Kubernetes object.

terway-pod-reader

namespace

string

The namespace to which the object belongs.

kube-system

helm\_release

object

Information about the Helm release instance corresponding to the add-on.

release\_name

string

The name of the Helm release instance.

ack-node-problem-detector

namespace

string

The namespace where the Helm release is located.

kube-system

chart\_name

string

The name of the Helm chart.

ack-node-problem-detector

chart\_version

string

The version of the Helm chart.

1.2.28

## Examples

Sample success responses

`JSON`format

```
{
  "kubernetes_objects": [
    {
      "group": "rbac.authorization.k8s.io",
      "version": "v1",
      "kind": "ClusterRole",
      "name": "terway-pod-reader",
      "namespace": "kube-system"
    }
  ],
  "helm_release": {
    "release_name": "ack-node-problem-detector",
    "namespace": "kube-system",
    "chart_name": "ack-node-problem-detector",
    "chart_version": "1.2.28"
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-22

Add Operation

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ListClusterAddonInstanceResources?updateTime=2025-12-22#workbench-doc-change-demo)
