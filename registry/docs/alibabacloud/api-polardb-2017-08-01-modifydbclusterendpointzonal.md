Modifies the connection string for an edge cluster for PolarDB on ENS.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterEndpointZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyDBClusterEndpointZonal)

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

polardb:ModifyDBClusterEndpointZonal

update

\*All Resource

`*`

None

None

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

DBEndpointId

string

Yes

The ID of the cluster endpoint.

pe-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Nodes

string

No

The read-only nodes to add to the endpoint. Separate multiple node IDs with commas (,). If you do not specify this parameter, the original nodes are retained.

**Note**

-   For PolarDB for MySQL, specify the node IDs.
    
-   For PolarDB for PostgreSQL and PolarDB for PostgreSQL (compatible with Oracle), specify the node role names, such as `Writer,Reader1,Reader2`.
    
-   If you set **ReadWriteMode** to **ReadOnly**, you can attach only one node. However, if this node fails, the endpoint might be unavailable for up to one hour. Do not use this configuration in a production environment. Select at least two nodes to improve availability.
    
-   If you set **ReadWriteMode** to **ReadWrite**, you must select at least two nodes. \* For PolarDB for MySQL, you can select any two nodes. If both nodes are read-only nodes, write requests are sent to the primary node. \* For PolarDB for PostgreSQL and PolarDB for PostgreSQL (compatible with Oracle), you must include the primary node.
    

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*,pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

ReadWriteMode

string

No

The read/write mode. Valid values:

-   **ReadWrite**: read-write (automatic read/write splitting)
    
-   **ReadOnly**: read-only
    

ReadWrite

AutoAddNewNodes

string

No

Specifies whether to automatically add new nodes to this endpoint. Valid values:

-   **Enable**: yes
    
-   **Disable**: no (default)
    

Enable

EndpointConfig

string

No

The advanced configurations of the cluster endpoint, which are specified in the JSON format. You can set the consistency level, transaction splitting, whether the primary node accepts read requests, the connection pool, and more.

-   To set the load balancing policy, use the format `{\"LoadBalancePolicy\":\"policy\"}`. Valid values:
    
    -   **0**: connection-based load balancing (default)
        
    -   **1**: active request-based load balancing
        
-   To specify whether the primary node accepts read requests, use the format `{\"MasterAcceptReads\":\"value\"}`. Valid values:
    
    -   **on**: The primary node accepts read requests (default).
        
    -   **off**: The primary node does not accept read requests.
        
-   To configure transaction splitting, use the format `{\"DistributedTransaction\":\"value\"}`. Valid values:
    
    -   **on**: enables transaction splitting (default)
        
    -   **off**: disables transaction splitting
        
-   To set the consistency level, use the format `{\"ConsistLevel\":\"level\"}`. Valid values:
    
    -   **0**: eventual consistency (weak)
        
    -   **1**: session consistency (medium) (default)
        
    -   **2**: global consistency (strong)
        
-   To set the timeout period for a global consistency read, use the format `{\"ConsistTimeout\":\"timeout\"}`. Valid values: 0 to 60000. Default value: 20. Unit: ms.
    
-   To set the timeout period for a session consistency read, use the format `{\"ConsistSessionTimeout\":\"timeout\"}`. Valid values: 0 to 60000. Default value: 0. Unit: ms.
    
-   To set the policy for a global or session consistency read timeout, use the format `{\"ConsistTimeoutAction\":\"policy\"}`. Valid values:
    
    -   **0**: Sends the read request to the primary node (default).
        
    -   **1**: The proxy returns a \`wait replication complete timeout, please retry\` error message to the application.
        
-   To configure the connection pool, use the format `{\"ConnectionPersist\":\"pool_type\"}`. Valid values:
    
    -   **off**: disables the connection pool (default)
        
    -   **Session**: enables the session-level connection pool
        
    -   **Transaction**: enables transaction-level connection pooling
        
-   To configure parallel queries, use the format `{\"MaxParallelDegree\":\"value\"}`. Valid values:
    
    -   **on**: enables parallel queries
        
    -   **off**: disables parallel queries (default)
        
-   To configure automatic routing between row store and column store, use the format `{\"EnableHtapImci\":\"value\"}`. Valid values:
    
    -   **on**: enables automatic routing between row store and column store
        
    -   **off**: disables automatic routing between row store and column store (default)
        
-   To specify whether to enable overload protection, use the format `{\"EnableOverloadThrottle\":\"value\"}`. Valid values:
    
    -   **on**: enables overload protection
        
    -   **off**: disables overload protection (default)
        

**Note**

-   You can configure transaction splitting, specify whether the primary node accepts read requests, configure the connection pool, and enable overload protection only when the read/write mode of the cluster endpoint for PolarDB for MySQL is set to **ReadWrite** (automatic read/write splitting).
    
-   If the read/write mode of a cluster endpoint for PolarDB for MySQL is **ReadOnly**, both connection-based and active request-based load balancing policies are supported. If the read/write mode is **ReadWrite** (automatic read/write splitting), only the active request-based load balancing policy is supported.
    
-   You can configure automatic routing between row store and column store when the read/write mode of the cluster endpoint for PolarDB for MySQL is **ReadWrite** (automatic read/write splitting), or when the read/write mode is **ReadOnly** and the load balancing policy is active request-based.
    
-   Only PolarDB for MySQL supports the global consistency level.
    
-   If you set **ReadWriteMode** to **ReadOnly**, you can set the consistency level only to **0**.
    
-   You can set the consistency level, transaction splitting, whether the primary node accepts read requests, and the connection pool at the same time. For example: `{\"ConsistLevel\":\"1\",\"DistributedTransaction\":\"on\",\"ConnectionPersist\":\"Session\",\"MasterAcceptReads\":\"on\"}`.
    
-   The transaction splitting setting is constrained by the consistency level. For example, if the consistency level is **0**, you cannot enable transaction splitting. If the consistency level is **1** or **2**, you can enable transaction splitting.
    

{\\"DistributedTransaction\\":\\"off\\",\\"ConsistLevel\\":\\"0\\",\\"LoadBalanceStrategy\\":\\"load\\",\\"MasterAcceptReads\\":\\"on\\"}

DBEndpointDescription

string

No

The name of the endpoint.

test

SccMode

string

No

Specifies whether to enable the global consistency (high-performance mode) feature for the node. Valid values:

-   **ON**: enables the feature
    
-   **OFF**: disables the feature
    

OFF

PolarSccWaitTimeout

string

No

The timeout period for global consistency.

100

PolarSccTimeoutAction

string

No

The policy for a global consistency timeout. Valid values:

-   **0**: Sends the request to the primary node.
    
-   **2**: Timeout degradation. If a global consistency read times out, the query is automatically downgraded to a regular request, and the client does not receive an error message.
    

0

ClientToken

string

No

A client token to ensure the idempotence of the request. The client generates the value, but you must make sure that the value is unique among different requests. The token is case-sensitive and can contain up to 64 ASCII characters.

6000170000591aed949d0f\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

F2A9EFA7-915F-4572-8299-85A307\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F2A9EFA7-915F-4572-8299-85A307******"
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyDBClusterEndpointZonal#workbench-doc-change-demo) for a complete list.
