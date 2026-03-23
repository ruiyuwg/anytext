Container Intelligence Service (CIS) provides a variety of cluster check capabilities to allow you to perform cluster update check, cluster migration check, component installation check, component update check, and node pool check. A precheck is automatically triggered before an update, migration, or installation is performed. You can perform changes only if the cluster passes the precheck. You can also manually call the RunClusterCheck operation to initiate cluster checks. We recommend that you periodically check and maintain your cluster to mitigate potential risks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/RunClusterCheck)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/RunClusterCheck)

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

cs:RunClusterCheck

none

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/[cluster_id]/checks HTTP/1.1
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

The cluster ID.

ce0da5a1d627e4e9e9f96cae8ad07\*\*\*\*

body

object

No

The request body.

type

string

Yes

The check type.

Valid values:

-   ClusterMigrate: cluster migration.
-   MasterUpgrade: control plane upgrade.
-   NodePoolUpgrade: node pool upgrade.
-   ClusterUpgrade: cluster upgrade.

ClusterUpgrade

target

string

No

The check target.

If you set `type=NodePoolUpgrade`, you must set this parameter to the node pool ID. Otherwise, this parameter is optional.

np1f6779297c4444a3a1cdd29be8e5\*\*\*\*

options

object

No

The cluster check parameters.

string

No

A cluster check parameter.

next\_version

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

request\_id

string

The ID of the request.

F04DF81D-5C12-1524-B36A-86E02526\*\*\*\*

check\_id

string

The ID of the cluster check task.

1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07\*\*\*\*-clustercheck-lboto

## Examples

Sample success responses

`JSON`format

```
{
  "request_id": "F04DF81D-5C12-1524-B36A-86E02526****",
  "check_id": "1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-03-14

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/RunClusterCheck?updateTime=2024-03-14#workbench-doc-change-demo)

2023-11-21

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/RunClusterCheck?updateTime=2023-11-21#workbench-doc-change-demo)
