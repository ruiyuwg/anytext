Initiates a zonal failover for a PolarDB cluster, promoting a secondary node to primary.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/FailoverDBClusterZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/FailoverDBClusterZonal)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

TargetDBNodeId

string

No

The ID of the node to promote to the primary node. If you do not specify this parameter, the system automatically selects a node. Call the DescribeDBClusters operation to query node information, such as node IDs.

pi-\*\*\*\*\*\*\*\*\*\*\*

RollBackForDisaster

boolean

No

Specifies whether to fail back to the original primary zone after a failover. Valid values:

-   true: Yes.
    
-   false: No.
    

false

ClientToken

string

No

A client token to ensure the idempotence of the request. The client generates this token. It must be unique across requests. The token is case-sensitive and cannot exceed 64 ASCII characters.

6000170000591aed949d0f54a343f1a4233c1e7d1c5\*\*\*\*\*\*

TargetZoneType

string

No

The type of failover. Valid values:

-   Primary: A primary/secondary failover within the primary zone.
    
-   Standby: A switch to the hot standby storage cluster.
    

Primary

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

925B84D9-CA72-432C-95CF-738C22\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "925B84D9-CA72-432C-95CF-738C22******"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

HaStatusNotSupport

Current DB instance HA status does not support this operation.

The HA status of the instance does not support this operation.

400

InvalidDBNodeId.Malformed

The specified parameter DBNodeId is not valid.

The specified DBNodeId parameter is invalid.

400

InvalidDBType.Malformed

The Specified DBType is not valid.

The specified database type is invalid.

400

UnsupportHighFrequenceSwitchOver

The instance has switch over too frequent within ten minutes.

The current switch is too frequent, it is recommended to try again in 5 minutes.

400

UnsupportWitchUnhealthyReplication

The action is unsupported with unhealthy replication.

The current replication relationship is abnormal. Switching is not supported.

403

OperationDenied.DBNodeType

The operation is not permitted due to type of node.

The specified node type does not support this operation.

403

OperationDenied.ClusterCategory

The operation is not permitted due to cluster category.

This series is not supported by the cluster.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/FailoverDBClusterZonal#workbench-doc-change-demo) for a complete list.
