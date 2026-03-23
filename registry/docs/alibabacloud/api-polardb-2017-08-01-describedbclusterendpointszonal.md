Queries the endpoints of an edge cluster for PolarDB on ENS.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterEndpointsZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterEndpointsZonal)

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

polardb:DescribeDBClusterEndpointsZonal

get

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

DBEndpointId

string

No

The cluster endpoint ID.

pe-\*\*\*\*\*\*\*\*\*\*\*\*\*

DescribeType

string

No

Specifies whether to return information about AI nodes.

AI

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

2DC120BF-6EBA-4C63-BE99-B09F9E\*\*\*\*\*\*

Items

array<object>

The details of the cluster endpoints.

array<object>

DBEndpointId

string

The endpoint ID.

pe-\*\*\*\*\*\*\*\*\*\*\*\*\*

PolarSccTimeoutAction

string

The policy for global consistency timeout. Valid values:

-   0: Sends the request to the primary node.
    
-   2: Degrades the request. If a global consistency read times out, the query is automatically degraded to a regular request. The client does not receive an error message.
    

0

DBClusterId

string

The cluster ID.

pc-bp1s826a1up\*\*\*\*\*\*

Nodes

string

The list of nodes that are configured for the endpoint.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*,pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ReadWriteMode

string

The read/write mode. Valid values:

-   ReadWrite: read and write (automatic read/write splitting).
    
-   ReadOnly: read-only.
    

ReadOnly

DBEndpointDescription

string

The name of the endpoint.

test

PolarSccWaitTimeout

string

The timeout period for global consistency.

100

NodeWithRoles

string

The role of each node in the endpoint. The primary node has the Writer role. Because multiple read-only nodes can be added to an endpoint, each read-only node is assigned a role name suffixed with a number, such as Reader1 and Reader2.

Reader1

AutoAddNewNodes

string

Specifies whether new nodes are automatically added to the default cluster endpoint. Valid values:

-   Enable.
    
-   Disable.
    

Enable

EndpointType

string

The type of the cluster endpoint. Valid values:

-   Cluster: the default cluster endpoint.
    
-   Primary: the primary endpoint.
    
-   Custom: a custom cluster endpoint.
    

Custom

AddressItems

array<object>

The connection string information.

object

DashboardUsed

boolean

Specifies whether the endpoint is the dashboard endpoint of a PolarDB search node. Valid values:

-   True: Yes.
    
-   False: No.
    

True

PrivateZoneConnectionString

string

The private domain name that is bound to the endpoint.

\*\*\*.\*\*\*.\*\*.com

VPCId

string

The ID of the virtual private cloud (VPC).

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

VSwitchId

string

The virtual switch ID.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*

Port

string

The port number.

1521

VpcInstanceId

string

The VPC instance ID.

pe-\*\*\*\*\*\*\*\*\*\*\*\*\*

ConnectionString

string

The connection string.

\*\*\*\*\*\*\*\*.rwlb.polardb-pg-public.rds.aliyuncs.com

IPAddress

string

The IP address.

192.\*\*\*.\*\*\*.\*\*\*

NetType

string

The network type. Valid values:

-   Public: Internet.
    
-   Private: internal network.
    

Private

SccMode

string

Specifies whether global consistency (high-performance mode) is enabled for the node. Valid values:

-   on: enabled.
    
-   off: disabled.
    

on

EndpointConfig

string

The advanced configurations of the cluster endpoint.

-   **DistributedTransaction**: The status of transaction splitting. Valid values:
    
    -   **on**: Transaction splitting is enabled.
        
    -   **off**: Transaction splitting is disabled.
        
-   **ConsistLevel**: The consistency level. Valid values:
    
    -   **0**: Eventual consistency.
        
    -   **1**: Session consistency.
        
    -   **2**: Global consistency.
        
-   **LoadBalanceStrategy**: The load balancing policy for automatic scheduling based on loads. The value is fixed as **load**.
    
-   **MasterAcceptReads**: Specifies whether the primary node accepts read requests. Valid values:
    
    -   **on**: The primary node accepts read requests.
        
    -   **off**: The primary node does not accept read requests.
        

{\\"DistributedTransaction\\":\\"off\\",\\"ConsistLevel\\":\\"0\\",\\"LoadBalanceStrategy\\":\\"load\\",\\"MasterAcceptReads\\":\\"on\\"}

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2DC120BF-6EBA-4C63-BE99-B09F9E******",
  "Items": [
    {
      "DBEndpointId": "pe-*************",
      "PolarSccTimeoutAction": "0",
      "DBClusterId": "pc-bp1s826a1up******",
      "Nodes": "pi-***************,pi-***************",
      "ReadWriteMode": "ReadOnly",
      "DBEndpointDescription": "test",
      "PolarSccWaitTimeout": "100",
      "NodeWithRoles": "Reader1",
      "AutoAddNewNodes": "Enable",
      "EndpointType": "Custom",
      "AddressItems": [
        {
          "DashboardUsed": true,
          "PrivateZoneConnectionString": "***.***.**.com",
          "VPCId": "vpc-***************",
          "VSwitchId": "vsw-************",
          "Port": "1521",
          "VpcInstanceId": "pe-*************",
          "ConnectionString": "********.rwlb.polardb-pg-public.rds.aliyuncs.com",
          "IPAddress": "192.***.***.***",
          "NetType": "Private"
        }
      ],
      "SccMode": "on",
      "EndpointConfig": "{\\\"DistributedTransaction\\\":\\\"off\\\",\\\"ConsistLevel\\\":\\\"0\\\",\\\"LoadBalanceStrategy\\\":\\\"load\\\",\\\"MasterAcceptReads\\\":\\\"on\\\"}"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClusterEndpointsZonal#workbench-doc-change-demo) for a complete list.
