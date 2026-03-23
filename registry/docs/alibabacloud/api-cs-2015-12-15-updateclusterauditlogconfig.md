You can call the UpdateClusterAuditLogConfig operation to enable or disable the audit log feature in a Container Service for Kubernetes (ACK) cluster and update the audit log configuration. This operation also allows you to record requests to the Kubernetes API and the responses, which can be used to trace cluster operation history and troubleshoot cluster issues.

## Operation description

Before you call this operation, ensure that you understand the billing methods and pricing of [Simple Log Service](https://www.alibabacloud.com/product/log-service/pricing).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateClusterAuditLogConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateClusterAuditLogConfig)

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

cs:UpdateClusterAuditLogConfig

none

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
PUT /clusters/{clusterid}/audit_log HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

clusterid

string

No

The cluster ID.

c82e6987e2961451182edacd74faf\*\*\*\*

body

object

No

The request body.

sls\_project\_name

string

No

The [Simple Log Service project](/help/en/sls/project) to which the [Logstore](/help/en/sls/project) storing the cluster audit logs belongs.

-   Default value: k8s-log-{clusterid}.
-   After the cluster audit log feature is enabled, a Logstore is created in the specified Simple Log Service project to store cluster audit logs.
-   If you want to change the project after audit logging is enabled for the cluster, you can use this parameter to specify another project. You can perform this operation only in ACK managed clusters.

k8s-log-c82e6987e2961451182edacd74faf\*\*\*\*

disable

boolean

No

Enable or disable audit logging.

-   false: enables audit logging or updates the audit logging configurations.
-   true: disables audit logging.

false

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

cluster\_id

string

The cluster ID.

c93095129fc41463aa455d89444fd\*\*\*\*

request\_id

string

The ID of the request.

48BD70F6-A7E6-543D-9F23-08DEB764C92E

task\_id

string

The ID of the task.

T-5faa48fb31b6b8078d00\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "c93095129fc41463aa455d89444fd****",
  "request_id": "48BD70F6-A7E6-543D-9F23-08DEB764C92E",
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
