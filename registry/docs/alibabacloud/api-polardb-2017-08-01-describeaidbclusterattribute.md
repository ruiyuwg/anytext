View the details of a custom instance

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAIDBClusterAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAIDBClusterAttribute)

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

polardb:DescribeAIDBClusterAttribute

get

\*All Resource

`*`

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The ID of the request.

EBEAA83D-1734-42E3-85E3-E25F6E\*\*\*\*\*\*

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterStatus

string

The status of the cluster. Valid values:

-   **Creating**: The cluster is being created.
    
-   **Running**: The cluster is running.
    
-   **Deleting**: The cluster is being released.
    
-   **DBNodeCreating**: A node is being added.
    
-   **DBNodeDeleting**: A node is being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **Deleted**: The cluster is released.
    

Running

DBClusterDescription

string

The description of the cluster. Fuzzy queries are supported.

test

RegionId

string

The region ID.

cn-hangzhou

ZoneId

string

The zone ID of the PolarDB cluster node.

cn-hangzhou-d

VPCId

string

The ID of the virtual private cloud (VPC). You can specify a VPC when you switch zones.

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

VSwitchId

string

The virtual switch ID.

**Note**

If you specify a VPCId, VSwitchId is required.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

InternalIp

string

The private IP address.

10.\*.\*.72

StorageType

string

The storage class for the Enterprise Edition. Valid values:

-   **PSL5**
    
-   **PSL4**
    

The storage class for the Standard Edition. Valid values:

-   **ESSDPL0**
    
-   **ESSDPL1**
    
-   **ESSDPL2**
    
-   **ESSDPL3**
    
-   **ESSDAUTOPL**
    

essdpl1

DBNodes

array<object>

The details of the nodes.

array<object>

The details of the nodes.

DBNodeClass

string

The node specifications.

polar.pg.g8.8xlarge.gu30

CpuCores

string

The number of CPU cores of the node.

2

MemorySize

string

The memory size of the node. Unit: MB.

8192

GPU

string

The number of GPUs.

2

DBNodeId

string

The node ID.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBNodeDescription

string

The description of the node.

test

VSwitchId

string

The virtual switch ID.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

VPCId

string

The VPC ID.

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBNodeStatus

string

The status of the node. Valid values:

-   **Creating**: The node is being created.
    
-   **Running**: The node is running.
    
-   **Deleting**: The node is being deleted.
    
-   **Rebooting**: The node is being restarted.
    
-   **DBNodeCreating**: A node is being added.
    
-   **DBNodeDeleting**: A node is being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **MinorVersionUpgrading**: The minor version is being upgraded.
    
-   **Maintaining**: The instance is under maintenance.
    
-   **Switching**: A switchover is in progress.
    

Running

ZoneId

string

The zone.

cn-hangzhou-d

VNodeId

string

The ID of the Kubernetes virtual node.

vn-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

LinkIP

string

The private IP address.

10.\*.\*12

ChildVolumes

array<object>

object

StorageType

string

PL1

StorageCategory

string

PolarFs

SizeGB

string

8192

Name

string

jueming

MountPath

string

/tmp/CrowdStrike

PublicIp

string

101.101.101.101

CreationTime

string

2020-08-14T05:58:42Z

LockMode

string

The lock mode of the instance. A value of **lock** indicates that the instance is locked due to expiration or an overdue payment.

Unlock

CreationTime

string

The time when the cluster was created.

2020-08-14T05:58:42Z

PayType

string

The billing method. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Postpaid

ExpireTime

string

The expiration time of the cluster.

**Note**

This parameter is returned only for subscription clusters. For pay-as-you-go clusters, an empty string is returned.

2020-11-14T16:00:00Z

Expired

boolean

Indicates whether the cluster has expired. Valid values:

-   **true**
    
-   **false**
    

false

ZoneIds

string

The zone ID.

cn-hangzhou-i,cn-hangzhou-g

RunType

string

The architecture type. Valid values:

-   container: AI container
    
-   ainode: AI node
    

container

KubeClusterId

string

The ACK cluster ID.

xxxxxxxxxxxxxxxxxxxxxxx

DBVersion

string

The cluster version. Valid values:

**1.0**

**2.0**

**3.0**

1.0

AiNodeType

string

The node type. Valid values:

-   vnode: managed by ACK
    
-   container: logon container
    
-   maas: model service
    

vnode

Volumes

array<object>

The list of data disks.

object

The data of the data disk.

StorageType

string

The storage category.

PolarFs

StorageCategory

string

The storage class.

PL1

Name

string

The disk name.

jueming

SizeGB

string

The storage size.

8192

MountPath

string

The mount path in the container.

/var/run/secrets/kubernetes.io/serviceaccount

EndpointList

array<object>

A list of endpoints for the instance.

array<object>

The endpoint of the instance.

NetInfoItems

array<object>

A list of network information for the instance.

object

A list of network information for the instance.

NetType

string

The network type of the connection string. Valid values:

-   **Public**: public endpoint
    
-   **Private**: private endpoint
    
-   **Inner**: private endpoint (classic network)
    

Public

ConnectionString

string

The database endpoint.

pc-\*\*\*\*\*\*\*\*\*\*.rwlb.rds.aliyuncs.com

Port

string

The port number.

3306

ModelName

string

The model name.

Qwen3-Embedding-8B

MaxQPM

string

The maximum number of requests per minute.

20

PublicIp

string

KVCacheInstanceId

string

pkv-xxxxx

EcsSecurityGroupId

string

sg-xxxxxx

ModelType

string

ApiKey

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "EBEAA83D-1734-42E3-85E3-E25F6E******",
  "DBClusterId": "pc-**************",
  "DBClusterStatus": "Running",
  "DBClusterDescription": "test",
  "RegionId": "cn-hangzhou",
  "ZoneId": "cn-hangzhou-d\t\n",
  "VPCId": "vpc-*******************",
  "VSwitchId": "vsw-*********************",
  "InternalIp": "10.*.*.72",
  "StorageType": "essdpl1",
  "DBNodes": [
    {
      "DBNodeClass": "\npolar.pg.g8.8xlarge.gu30",
      "CpuCores": "2",
      "MemorySize": "8192",
      "GPU": "2",
      "DBNodeId": "pi-****************",
      "DBNodeDescription": "test",
      "VSwitchId": "vsw-*********************",
      "VPCId": "vpc-*******************",
      "DBNodeStatus": "Running",
      "ZoneId": "cn-hangzhou-d\t\n",
      "VNodeId": "vn-***************",
      "LinkIP": "10.*.*12",
      "ChildVolumes": [
        {
          "StorageType": "PL1",
          "StorageCategory": "PolarFs",
          "SizeGB": "8192",
          "Name": "jueming",
          "MountPath": "/tmp/CrowdStrike"
        }
      ],
      "PublicIp": "101.101.101.101",
      "CreationTime": "2020-08-14T05:58:42Z"
    }
  ],
  "LockMode": "Unlock",
  "CreationTime": "2020-08-14T05:58:42Z",
  "PayType": "Postpaid",
  "ExpireTime": "2020-11-14T16:00:00Z",
  "Expired": false,
  "ZoneIds": "cn-hangzhou-i,cn-hangzhou-g",
  "RunType": "container",
  "KubeClusterId": "xxxxxxxxxxxxxxxxxxxxxxx",
  "DBVersion": "1.0",
  "AiNodeType": "vnode",
  "Volumes": [
    {
      "StorageType": "PolarFs",
      "StorageCategory": "PL1",
      "Name": "jueming",
      "SizeGB": "8192",
      "MountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
    }
  ],
  "EndpointList": [
    {
      "NetInfoItems": [
        {
          "NetType": "Public",
          "ConnectionString": "pc-**********.rwlb.rds.aliyuncs.com",
          "Port": "3306"
        }
      ]
    }
  ],
  "ModelName": "\nQwen3-Embedding-8B",
  "MaxQPM": "20",
  "PublicIp": "",
  "KVCacheInstanceId": "pkv-xxxxx",
  "EcsSecurityGroupId": "sg-xxxxxx",
  "ModelType": "",
  "ApiKey": ""
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeAIDBClusterAttribute#workbench-doc-change-demo) for a complete list.
