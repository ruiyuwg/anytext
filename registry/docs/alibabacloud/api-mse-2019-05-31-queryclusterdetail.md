Queries the details of a cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/mse/2019-05-31/QueryClusterDetail)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/mse/2019-05-31/QueryClusterDetail)

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

mse:QueryClusterDetail

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

InstanceId

string

No

The ID of the instance.

mse-cn-st21ri2\*\*\*\*

OrderId

string

No

The ID of the order.

20576750143\*\*\*\*

AclSwitch

boolean

No

Specifies whether to query the access control list (ACL).

false

AcceptLanguage

string

No

The language of the response. Valid values:

-   zh: Chinese
    
-   en: English
    

zh

## Response elements

**Element**

**Type**

**Description**

**Example**

object

A string object.

Message

string

The message that is returned.

The request is successfully processed.

RequestId

string

The ID of the request.

9515ACA4-E94D-440D-989E-C379FCED\*\*\*\*

Data

object

The data returned.

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-bp1hcg467ekqsv0zr\*\*\*\*

CreateTime

string

The time when the cluster was created.

2020-07-31 11:36:08

IntranetAddress

string

The private endpoint.

192.168.XX.XX

DiskType

string

The type of the disk.

alicloud-disk-ssd-multi-zone

PubNetworkFlow

string

The public bandwidth. Unit: Mbit/s.  
Valid values: 0 to 5000. A value of 0 indicates that no public bandwidth is used.  

3

DiskCapacity

integer

The capacity of the disk. Unit: GB.

60

MemoryCapacity

integer

The memory capacity. Unit: GB.

2

ClusterAliasName

string

The alias of the cluster.

mse-7413\*\*\*\*

InstanceCount

integer

The number of instances in the cluster.

3

IntranetPort

string

The private port.

8761

InstanceModels

array<object>

The list of instances.

object

A string.

PodName

string

The name of the pod.

mse-7413\*\*\*\*-159616656\*\*\*\*-reg-center-0-0

SingleTunnelVip

string

The single-threaded IP address.

192.168.XX.XX

InternetIp

string

The public IP address.

47.98.XX.XX

Ip

string

The IP address of the instance.

10.12.XX.XX

Role

string

The role of the instance.

Peer

HealthStatus

string

The health status of the instance.

Running

CreationTimestamp

string

The timestamp that indicates when the instance was created.

1578575377732

Zone

string

The zone.

cn-shanghai-f

IntranetDomain

string

The private endpoint.

mse-7413\*\*\*\*-eureka.mse.aliyuncs.com

InternetDomain

string

The public endpoint.

mse-7413\*\*\*\*-p.eureka.mse.aliyuncs.com

PayInfo

string

The billing method. Valid values include subscription and pay-as-you-go.

Pay-as-you-go

InternetAddress

string

The public IP address.

47.98.XX.XX

InstanceId

string

The ID of the instance.

mse-cn-st21ri2\*\*\*\*

AclEntryList

string

The whitelist.

\[\]

HealthStatus

string

The health status of the cluster.

RESTART\_SUCCESS

InitCostTime

integer

The time it took to create the cluster. Unit: ms.

98408

RegionId

string

The ID of the region.

cn-hangzhou

AclId

string

The ID of the whitelist.

acl-bp17020kiqvzutwwj\*\*\*\*

Cpu

integer

The number of CPU cores.

1

ClusterType

string

The type of the cluster. Valid values: ZooKeeper, Nacos-Ans, and Eureka.

Nacos-Ans

ClusterName

string

The name of the cluster.

mse-bc1a29b0-160230875\*\*\*\*

InitStatus

string

The creation status of the cluster.

RESTART\_SUCCESS

InternetPort

string

The private network port.

8761

AppVersion

string

The version of the application.

1.2.1

NetType

string

The network type. Valid values:

-   `privatenet`: a VPC.
    
-   `pubnet`: the public network.
    

privatenet

ClusterVersion

string

The version of the cluster.

1.2.1

ClusterSpecification

string

The specifications of the engine.

MSE\_SC\_1\_2\_200\_c

VSwitchId

string

The ID of the vSwitch.

vsw-xxx-xxxx

ConnectionType

string

The type of the network connection. Valid values:

-   slb
    
-   eni
    

slb

MseVersion

string

The version of MSE.

mse\_basic

ChargeType

string

The billing method. Valid values are subscription and pay-as-you-go.

Pay-as-you-go

OrderClusterVersion

string

The version of the cluster in the original order.

1.2.0

Tags

object

The tags attached to the instance.

ResourceGroupId

string

The ID of the resource group.

rg-aek2dhgysj\*\*\*\*\*

VersionLifecycle

string

ErrorCode

string

The error code.

mse-100-000

Success

boolean

Indicates whether the request was successful. Valid values:

-   `true`: The request was successful.
    
-   `false`: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Message": "The request is successfully processed.\n",
  "RequestId": "9515ACA4-E94D-440D-989E-C379FCED****",
  "Data": {
    "VpcId": "vpc-bp1hcg467ekqsv0zr****",
    "CreateTime": "2020-07-31 11:36:08",
    "IntranetAddress": "192.168.XX.XX",
    "DiskType": "alicloud-disk-ssd-multi-zone",
    "PubNetworkFlow": "3",
    "DiskCapacity": 60,
    "MemoryCapacity": 2,
    "ClusterAliasName": "mse-7413****",
    "InstanceCount": 3,
    "IntranetPort": "8761",
    "InstanceModels": [
      {
        "PodName": "mse-7413****-159616656****-reg-center-0-0",
        "SingleTunnelVip": "192.168.XX.XX",
        "InternetIp": "47.98.XX.XX",
        "Ip": "10.12.XX.XX",
        "Role": "Peer",
        "HealthStatus": "Running",
        "CreationTimestamp": "1578575377732",
        "Zone": "cn-shanghai-f"
      }
    ],
    "IntranetDomain": "mse-7413****-eureka.mse.aliyuncs.com",
    "InternetDomain": "mse-7413****-p.eureka.mse.aliyuncs.com",
    "PayInfo": "Pay-as-you-go\n",
    "InternetAddress": "47.98.XX.XX",
    "InstanceId": "mse-cn-st21ri2****",
    "AclEntryList": "[]",
    "HealthStatus": "RESTART_SUCCESS",
    "InitCostTime": 98408,
    "RegionId": "cn-hangzhou",
    "AclId": "acl-bp17020kiqvzutwwj****",
    "Cpu": 1,
    "ClusterType": "Nacos-Ans",
    "ClusterName": "mse-bc1a29b0-160230875****",
    "InitStatus": "RESTART_SUCCESS",
    "InternetPort": "8761",
    "AppVersion": "1.2.1",
    "NetType": "privatenet",
    "ClusterVersion": "1.2.1",
    "ClusterSpecification": "MSE_SC_1_2_200_c",
    "VSwitchId": "vsw-xxx-xxxx",
    "ConnectionType": "slb",
    "MseVersion": "mse_basic",
    "ChargeType": "Pay-as-you-go\n",
    "OrderClusterVersion": "1.2.0",
    "Tags": {
      "test": "test",
      "test2": 1
    },
    "ResourceGroupId": "rg-aek2dhgysj*****",
    "VersionLifecycle": ""
  },
  "ErrorCode": "mse-100-000",
  "Success": true
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalRequest

Invalid request:%s

Invalid request: %s

400

InvalidParameter

Parameter error:%s

Request parameter error: %s

500

InternalError

Console error. Try again later:%s

Console error. Try again later: %s

403

NoPermission

You are not authorized to perform this operation:%s

You do not have the permission to use this interface:%s

404

NotFound

Not found:%s

The resource does not exist:%s

See [Error Codes](https://api.alibabacloud.com/document/mse/2019-05-31/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/mse/2019-05-31/QueryClusterDetail#workbench-doc-change-demo) for a complete list.
