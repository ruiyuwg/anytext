Modifies the log configurations of control plane components. The configurations include the log retention period and components whose logs that you want to collect. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube-apiserver, kube-scheduler, Kubernetes controller manager, and cloud controller manager (CCM).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateControlPlaneLog)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateControlPlaneLog)

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

cs:UpdateControlPlaneLog

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

-   cs:EnableCoreControlPlaneComponentsLog

none

## Request syntax

```
PUT /clusters/{ClusterId}/controlplanelog HTTP/1.1
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

body

object

No

The request parameters.

log\_project

string

No

The name of the Simple Log Service Project that you want to use to store the logs of control plane components.

Default value: k8s-log-$Cluster ID.

k8s-log-c5b5e80b0b64a4bf6939d2d8fbbc5\*\*\*\*

log\_ttl

string

No

The retention period of the log data stored in the Logstore. Valid values: 1 to 3000. Unit: days.

Default value: 30.

30

aliuid

string

No

The ID of the Alibaba Cloud account.

162981\*\*\*\*\*

components

array

No

The control plane components for which you want to enable log collection.

string

No

The control plane components for which you want to enable log collection. The following control plane components are supported:

-   `apiserver`
-   `ccm`
-   `scheduler`
-   `kcm`
-   `controlplane-events`
-   `vk`: supported only in Serverless Kubernetes (ASK) clusters.
-   `istio`: supported only in clusters that are associated with Service Mesh (ASM) instances.
-   `cluster-operator`: supported only in clusters that are managed by using Distributed Cloud Container Platform for Kubernetes (ACK One).
-   `application-controller`: supported only in clusters that are managed by using ACK One. By default, log collection is enabled for the following control plane components: `apiserver`, `ccm`, `scheduler`, `kcm`, and `controlplane-events`.

\["apiserver", "ccm", "scheduler", "kcm", "controlplane-events"\]

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

cb95aa626a47740afbf6aa099b650\*\*\*\*

request\_id

string

The request ID.

687C5BAA-D103-4993-884B-C35E4314\*\*\*\*

task\_id

string

The task ID.

T-5a54309c80282e39ea00\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "cb95aa626a47740afbf6aa099b650****",
  "request_id": "687C5BAA-D103-4993-884B-C35E4314****",
  "task_id": "T-5a54309c80282e39ea00****"
}
```

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c5b5e80b0b64a4bf6939d2d8fbbc5****",
  "request_id": "A0322123-8DE3-199A-913D-6CBC0F4C****",
  "task_id": "T-65840b469fc9d303b000****"
}
```

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c5b5e80b0b64a4bf6939d2d8fbbc5****",
  "request_id": "A0322123-8DE3-199A-913D-6CBC0F4C****",
  "task_id": "T-65840b469fc9d303b000****"
}
```

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c5b5e80b0b64a4bf6939d2d8fbbc5****",
  "request_id": "A0322123-8DE3-199A-913D-6CBC0F4C****",
  "task_id": "T-65840b469fc9d303b000****"
}
```

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c5b5e80b0b64a4bf6939d2d8fbbc5****",
  "request_id": "A0322123-8DE3-199A-913D-6CBC0F4C****",
  "task_id": "T-65840b469fc9d303b000****"
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

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/UpdateControlPlaneLog?updateTime=2023-12-25#workbench-doc-change-demo)
