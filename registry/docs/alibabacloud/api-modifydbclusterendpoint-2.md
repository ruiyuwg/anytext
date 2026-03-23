This operation modifies the properties of a PolarDB cluster endpoint. You can configure settings such as the read/write mode, automatic node addition, consistency level, transaction splitting, the connection pool, and whether the primary node accepts read requests.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterEndpoint)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterEndpoint)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

polardb:ModifyDBClusterEndpoint

update

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

DBEndpointId

string

Yes

The ID of the cluster endpoint.

pe-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Nodes

string

No

The nodes to be added to the endpoint for read request distribution. Separate multiple node IDs with commas (,). The original nodes are used by default.

**Note**

-   For PolarDB for MySQL, specify the node IDs.
    
-   For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Oracle Compatible), specify the node roles, such as `Writer,Reader1,Reader2`.
    
-   If you set **ReadWriteMode** to **ReadOnly**, you can attach only one node. However, if this node fails, the endpoint may be unavailable for up to one hour. Do not use this configuration in a production environment. Select at least two nodes to improve availability.
    
-   If you set **ReadWriteMode** to **ReadWrite**, you must select at least two nodes. \* For PolarDB for MySQL, you can select any two nodes. If both nodes are read-only nodes, write requests are sent to the primary node. \* For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Oracle Compatible), you must include the primary node.
    

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*,pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

ReadWriteMode

string

No

The read/write mode. Valid values:

-   **ReadWrite**: Read/write (automatic read/write splitting)
    
-   **ReadOnly**: Read-only
    

ReadWrite

AutoAddNewNodes

string

No

Specifies whether to automatically add new nodes to the endpoint. Valid values:

-   **Enable**: Automatically adds new nodes.
    
-   **Disable**: Does not automatically add new nodes. This is the default value.
    

Enable

EndpointConfig

string

No

The advanced configurations of the cluster endpoint in JSON format. You can set the consistency level, transaction splitting, whether the primary node accepts read requests, the connection pool, and other settings.

-   Sets the load balancing policy. Format: `{\"LoadBalancePolicy\":\"policy\"}`. Valid values:
    
    -   **0**: Connections-based load balancing (default)
        
    -   **1**: Active requests-based load balancing
        
-   Specifies whether the primary node accepts read requests. Format: `{\"MasterAcceptReads\":\"value\"}`. Valid values:
    
    -   **on**: The primary node accepts read requests (default).
        
    -   **off**: The primary node does not accept read requests.
        
-   Enables or disables transaction splitting. Format: `{\"DistributedTransaction\":\"value\"}`. Valid values:
    
    -   **on**: Enables transaction splitting (default).
        
    -   **off**: Disables transaction splitting.
        
-   Sets the consistency level. Format: `{\"ConsistLevel\":\"level\"}`. Valid values:
    
    -   **0**: Eventual consistency (weak)
        
    -   **1**: Session consistency (medium) (default)
        
    -   **2**: Global consistency (strong)
        
-   Sets the timeout period for a global consistency read. Format: `{\"ConsistTimeout\":\"timeout\"}`. Valid values: 0 to 60000. Default value: 20. Unit: ms.
    
-   Sets the timeout period for a session consistency read. Format: `{\"ConsistSessionTimeout\":\"timeout\"}`. Valid values: 0 to 60000. Default value: 0. Unit: ms.
    
-   Sets the policy for handling timeouts of global or session consistency reads. Format: `{\"ConsistTimeoutAction\":\"policy\"}`. Valid values:
    
    -   **0**: Forwards read requests to the primary node (default).
        
    -   **1**: The proxy returns the error message \`wait replication complete timeout, please retry\` to the application.
        
-   Sets the connection pool type. Format: `{\"ConnectionPersist\":\"type\"}`. Valid values:
    
    -   **off**: Disables the connection pool (default).
        
    -   **Session**: Enables the session-level connection pool.
        
    -   **Transaction**: Enables the transaction-level connection pool.
        
-   Enables or disables parallel query. Format: `{\"MaxParallelDegree\":\"value\"}`. Valid values:
    
    -   **on**: Enables parallel query.
        
    -   **off**: Disables parallel query (default).
        
-   Enables or disables automatic routing of requests to the row store or column store. Format: `{\"EnableHtapImci\":\"value\"}`. Valid values:
    
    -   **on**: Enables automatic routing.
        
    -   **off**: Disables automatic routing (default).
        
-   Enables or disables overload protection. Format: `{\"EnableOverloadThrottle\":\"value\"}`. Valid values:
    
    -   **on**: Enables overload protection.
        
    -   **off**: Disables overload protection (default).
        

**Note**

-   You can set transaction splitting, whether the primary node accepts read requests, the connection pool, and overload protection only when the read/write mode of the cluster endpoint for PolarDB for MySQL is set to ReadWrite (automatic read/write splitting).
    
-   If the read/write mode of a cluster endpoint for PolarDB for MySQL is **ReadOnly**, both **connections-based** and **active requests-based** load balancing policies are supported. If the read/write mode is **ReadWrite** (automatic read/write splitting), only the **active requests-based** load balancing policy is supported.
    
-   You can enable automatic routing to the row store or column store if the read/write mode of the cluster endpoint for PolarDB for MySQL is **ReadWrite** (automatic read/write splitting), or if the read/write mode is **ReadOnly** and the load balancing policy is **active requests-based**.
    
-   Only PolarDB for MySQL supports global consistency.
    
-   If you set the **ReadWriteMode** parameter to **ReadOnly**, you can only set the consistency level to **0**.
    
-   You can set the consistency level, transaction splitting, whether the primary node accepts read requests, and the connection pool at the same time. For example: `{\"ConsistLevel\":\"1\",\"DistributedTransaction\":\"on\",\"ConnectionPersist\":\"Session\",\"MasterAcceptReads\":\"on\"}`.
    
-   The transaction splitting setting is constrained by the consistency level. For example, you cannot enable transaction splitting if the consistency level is **0** (eventual consistency). You can enable transaction splitting if the consistency level is **1** (session consistency) or **2** (global consistency).
    

{"ConsistLevel":"1","DistributedTransaction":"on","MasterAcceptReads":"off","ConnectionPersist": "on"}

DBEndpointDescription

string

No

The name of the endpoint.

test

SccMode

string

No

Specifies whether to enable the global consistency (high-performance mode) feature for the node. Valid values:

-   **ON**: Enable
    
-   **OFF**: Disable
    

on

PolarSccWaitTimeout

string

No

The timeout period for global consistency.

100

PolarSccTimeoutAction

string

No

The policy for handling global consistency timeouts. Valid values:

-   **0**: Forwards the request to the primary node.
    
-   **2**: Degrades the request. If a global consistency read times out, the query is automatically degraded to a regular request. The client does not receive an error message.
    

0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

CD3FA5F3-FAF3-44CA-AFFF-BAF869\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CD3FA5F3-FAF3-44CA-AFFF-BAF869******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidEndpointConfig.Malformed

The specified parameter EndpointConfig is not valid.

The specified EndpointConfig parameter is invalid.

400

InvalidDBEndpointId.Malformed

The specified parameter DBEndpointId is not valid.

The specified DBEndpointId parameter is invalid.

400

InvalidNodes.Malformed

The specified parameter Nodes is not valid.

The specified Nodes parameter is invalid.

403

OperationDenied.InstanceType

The operation is not permitted due to instance type.

The operation is not allowed due to the instance type

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

EndpointStatus.NotSupport

Current endpoint status does not support this operation.

This operation is not supported while the node is in the current state.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyDBClusterEndpoint#workbench-doc-change-demo) for a complete list.
