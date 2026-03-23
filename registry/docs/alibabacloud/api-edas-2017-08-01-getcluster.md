Queries a specific cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Edas/2017-08-01/GetCluster)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Edas/2017-08-01/GetCluster)

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

edas:ReadCluster

get

\*Cluster

`acs:edas:{#regionId}:{#accountId}:namespace/{#NameSpaceId}/cluster/{#ClusterId}`

None

None

## Request syntax

```
GET /pop/v5/resource/cluster HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ClusterId

string

Yes

The ID of the cluster in Enterprise Distributed Application Service (EDAS). You can call the ListCluster operation to query the cluster ID. For more information, see [ListCluster](/help/en/edas/api-listcluster).

5439271a-015b-433d-\*\*\*\*-d76db49\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

integer

The HTTP status code that is returned.

200

Message

string

The detailed information that is returned.

success

RequestId

string

The ID of the request.

d76db491

Cluster

object

The information about the cluster.

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-xxxxz1mlwpb\*\*\*\*

OversoldFactor

integer

The overcommit ratio supported by a Docker cluster. Valid values:

-   1: 1:1, which means that resources are not overcommitted.
    
-   2: 1:2, which means that resources are overcommitted by 1:2.
    
-   4: 1:4, which means that resources are overcommitted by 1:4.
    
-   8: 1:8, which means that resources are overcommitted by 1:8.
    

2

UpdateTime

integer

The time when the cluster was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

1570708232145

MemUsed

integer

The size of used memory. Unit: MB.

1024

IaasProvider

string

The provider of Infrastructure as a Service (IaaS) resources used in the cluster.

ALIYUN

CreateTime

integer

The time when the cluster was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.

1570708232145

CpuUsed

integer

The number of used CPU cores.

2

Mem

integer

The total size of memory. Unit: MB.

2048

RegionId

string

The ID of the region where the cluster resides.

cn-hangzhou

Cpu

integer

The total number of CPU cores.

4

CsClusterId

string

The ID of the Container Service for Kubernetes (ACK) cluster.

c2ce62869f4d4466b920312315f05\*\*\*\*

NetworkMode

integer

The network type of the cluster. Valid values:

-   1: classic network
    
-   2: virtual private cloud (VPC)
    

2

Description

string

The description of the cluster.

测试

ClusterType

integer

The type of the cluster. Valid values:

-   0: regular Docker cluster
    
-   1: Swarm cluster
    
-   2: Elastic Compute Service (ECS) cluster
    
-   3: self-managed Kubernetes cluster in EDAS
    
-   4: cluster in which Pandora automatically registers applications
    
-   5: ACK cluster
    

2

ClusterName

string

The name of the cluster.

ClusterTest

NodeNum

integer

The number of ECS instances.

4

ClusterImportStatus

integer

The import status of the cluster. Valid values:

-   1: The cluster is imported.
    
-   2: The cluster fails to be imported.
    
-   3: The cluster is being imported.
    
-   4: The cluster is deleted.
    
-   0: The cluster is not imported.
    

0

ClusterId

string

The ID of the cluster.

5439271a-015b-433d-befb-d76d\*\*\*\*

SubClusterType

string

The subtype of the Kubernetes cluster. Valid values: ManagedKubernetes, Ask, and ExternalKubernetes. ManagedKubernetes refers to the ACK cluster. Ask refers to the Serverless Kubernetes (ASK) cluster. ExternalKubernetes refers to the external cluster.

ManagedKubernetes

## Examples

Success response

`JSON` format

```
{
  "Code": 200,
  "Message": "success",
  "RequestId": "d76db491",
  "Cluster": {
    "VpcId": "vpc-xxxxz1mlwpb****",
    "OversoldFactor": 2,
    "UpdateTime": 1570708232145,
    "MemUsed": 1024,
    "IaasProvider": "ALIYUN",
    "CreateTime": 1570708232145,
    "CpuUsed": 2,
    "Mem": 2048,
    "RegionId": "cn-hangzhou",
    "Cpu": 4,
    "CsClusterId": "c2ce62869f4d4466b920312315f05****",
    "NetworkMode": 2,
    "Description": "测试",
    "ClusterType": 2,
    "ClusterName": "ClusterTest",
    "NodeNum": 4,
    "ClusterImportStatus": 0,
    "ClusterId": "5439271a-015b-433d-befb-d76d****",
    "SubClusterType": "ManagedKubernetes"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Edas/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Edas/2017-08-01/GetCluster#workbench-doc-change-demo) for a complete list.
