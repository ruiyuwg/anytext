Edge Cloud API: Create Link Address

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDBClusterEndpointZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDBClusterEndpointZonal)

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

polardb:CreateDBClusterEndpointZonal

create

\*All Resource

`*`

None

None

## Request syntax

```
GET  HTTP/1.1
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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

EndpointType

string

Yes

The type of the custom cluster endpoint. The value is fixed to **Custom**.

Custom

Nodes

string

No

The read-only nodes to be added to the endpoint. Separate multiple node IDs with commas (,). By default, all nodes are added.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*,pi-\*\*\*\*\*\*\*\*\*\*\*\*\*

ReadWriteMode

string

No

The read/write mode. Valid values:

-   ReadWrite: read and write (automatic read/write splitting).
    
-   ReadOnly: read-only. This is the default value.
    

ReadOnly

AutoAddNewNodes

string

No

Specifies whether to automatically add new nodes to this endpoint. Valid values:

-   Enable: New nodes are automatically added to this endpoint.
    
-   Disable: New nodes are not automatically added to this endpoint. This is the default value.
    

Disable

EndpointConfig

string

No

The advanced configurations of the cluster endpoint, specified in the JSON format. This parameter supports settings for consistency level, transaction splitting, offloading reads from the primary node, and the connection pool.

-   Sets the load balancing policy. The format is {"LoadBalancePolicy":"policy"}. Valid values:
    -   **0**: Connections-based load balancing. This is the default value.
        
    -   **1**: Active requests-based load balancing.
        
-   Sets the consistency level. The format is `{"ConsistLevel":"level"}`. Valid values:
    -   **0**: Eventual consistency.
        
    -   **1**: Session consistency. This is the default value.
        
    -   **2**: Global consistency.
        
-   Sets transaction splitting. The format is `{"DistributedTransaction":"on/off"}`. Valid values:
    -   **on**: Enables transaction splitting. This is the default value.
        
    -   **off**: Disables transaction splitting.
        
-   Specifies whether the primary node accepts read requests. The format is `{"MasterAcceptReads":"on/off"}`. Valid values:
    -   **on**: The primary node accepts read requests.
        
    -   **off**: The primary node does not accept read requests. This is the default value.
        
-   Sets the connection pool. The format is `{"ConnectionPersist":"type"}`. Valid values:
    -   **off**: Disables the connection pool. This is the default value.
        
    -   **Session**: Enables the session-level connection pool.
        
    -   **Transaction**: Enables transaction-level connection pooling.
        
-   Sets parallel query. The format is {"MaxParallelDegree":"degree"}. Valid values:
    -   A specific number of concurrent queries. Example: "MaxParallelDegree":"2".
        
    -   **off**: Disables parallel query. This is the default value.
        
-   Sets automatic routing for row store and column store. The format is {"EnableHtapImci":"on/off"}. Valid values:
    -   **on**: Enables automatic routing for row store and column store.
        
    -   **off**: Disables automatic routing for row store and column store. This is the default value.
        
-   Specifies whether to enable overload protection. The format is {"EnableOverloadThrottle":"on/off"}. Valid values:
    -   **on**: Enables overload protection.
        
    -   **off**: Disables overload protection. This is the default value.
        

**Note**

-   You can set transaction splitting, specify whether the primary node accepts read requests, configure the connection pool, and enable overload protection only when the read/write mode of the cluster endpoint for a PolarDB for MySQL cluster is set to \*\*ReadWrite\*\* (automatic read/write splitting).
    
-   When the read/write mode of the cluster endpoint for a PolarDB for MySQL cluster is set to **ReadOnly**, both **connections-based load balancing** and **active requests-based load balancing** are supported. When the read/write mode is set to **ReadWrite** (automatic read/write splitting), only **active requests-based load balancing** is supported.
    
-   You can enable automatic routing for row store and column store when the read/write mode of the cluster endpoint for a PolarDB for MySQL cluster is set to **ReadWrite** (automatic read/write splitting), or when the read/write mode is set to **ReadOnly** and the load balancing policy is set to **active requests-based load balancing**.
    
-   Only PolarDB for MySQL supports setting the consistency level to global consistency.
    
-   If you set the **ReadWriteMode** parameter to **ReadOnly**, you can only set the consistency level to **0**.
    
-   You can configure the consistency level, transaction splitting, whether the primary node accepts reads, and the connection pool at the same time. For example: `{"ConsistLevel":"1","DistributedTransaction":"on","ConnectionPersist":"Session","MasterAcceptReads":"on"}`.
    
-   The transaction splitting setting is constrained by the consistency level. For example, if the consistency level is set to **0**, you cannot enable transaction splitting. If the consistency level is set to **1** or **2**, you can enable transaction splitting.
    

{"ConsistLevel": "1","DistributedTransaction": "on"}

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. The client generates the value, which must be unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.

6000170000591aed949d0f\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBEndpointDescription

string

No

The name of the custom cluster endpoint.

test

SccMode

string

No

Specifies whether to enable the global consistency (high-performance mode) feature for the node. Valid values:

-   ON: Enables the feature.
    
-   OFF: Disables the feature.
    

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

-   0: Sends the request to the primary node.
    
-   2: Degrades to regular requests. If a global consistency read times out, the query is automatically degraded to a regular request, and the client does not receive an error message.
    

0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The request ID.

CD35F3-F3-44CA-AFFF-BAF869\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CD35F3-F3-44CA-AFFF-BAF869******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ClusterEndpoint.StatusNotValid

Cluster endpoint status is not valid.

The state of the cluster endpoint is invalid.

400

EndpointNum.Error

Endpoint number error.

The maximum number of endpoints is exceeded.

400

LockTimeout

The request processing has failed due to lock timeout.

Failed to process the request due to a lock timeout.

403

OperationDenied.InstanceType

The operation is not permitted due to instance type.

The operation is not allowed due to the instance type

404

EndpointConfig.Invalid

Endpoint config is invalid.

The advanced parameter of the cluster endpoint is invalid.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

EndpointConfig.Conflict

Endpoint config is invalid, CausalConsistRead should be session since node SCC mode enabled.

Endpoint the configuration is invalid, the CausalConsistRead should be a session because global consistency (high performance mode) for the node is enabled.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateDBClusterEndpointZonal#workbench-doc-change-demo) for a complete list.
