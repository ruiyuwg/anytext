Retrieves the details of an instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Hologram/2022-06-01/GetInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Hologram/2022-06-01/GetInstance)

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

hologram:GetInstance

get

\*Instance

`acs:hologram:{#regionId}:{#accountId}:instance/{#InstanceId}`

None

None

## Request syntax

```
GET /api/v1/instances/{instanceId} HTTP/1.1
```

## **Path Parameters**

**Parameter**

**Type**

**Required**

**Description**

**Example**

instanceId

string

No

The instance ID. Required.

hgprecn-cn-i7m2v08uu00a

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

No parameters required.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

865A02C2-B374-5DD4-9B34-0CA15DA1AEBD

Instance

object

The instance details.

InstanceChargeType

string

The billing method of the instance.

**Valid values:**

-   PostPaid :
    
    Pay-as-you-go
    
-   PrePaid :
    
    Subscription
    

PrePaid

CommodityCode

string

The commodity code.

**Valid values:**

-   hologram\_maxcomputeAccelerate\_public\_cn :
    
    A shared cluster sold on the China site.
    
-   hologram\_combo\_public\_cn :
    
    A subscription instance on the China site.
    
-   hologram\_prepay\_public\_intl :
    
    A subscription instance sold on the International site.
    
-   hologram\_storage\_dp\_cn :
    
    A storage plan sold on the China site.
    
-   hologram\_postpay\_public\_cn :
    
    A pay-as-you-go instance sold on the China site.
    
-   hologram\_postpay\_public\_intl :
    
    A pay-as-you-go instance sold on the International site.
    
-   hologram\_maxcomputeAccelerate\_public\_intl :
    
    A shared cluster sold on the International site.
    
-   hologram\_cu\_dp\_cn :
    
    A compute plan sold on the China site.
    

hologram\_combo\_public\_cn

Cpu

integer

The number of vCPUs.

32

CreationTime

string

The creation time.

2021-02-03T13:06:06Z

Disk

string

The size of the standard storage. Unit: GB.

500

Endpoints

array<object>

The list of endpoints.

object

The endpoint details.

Endpoint

string

The domain name of the endpoint.

hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80

Type

string

The network type.

**Valid values:**

-   VPCSingleTunnel :
    
    VPC
    
-   Intranet :
    
    Internal network
    
-   VPCAnyTunnel :
    
    (Not supported for new instances)
    
-   Internet :
    
    Public network
    

Internet

Enabled

boolean

Indicates whether the network is enabled.

**Valid values:**

-   true :
    
    The network is enabled.
    
-   false :
    
    The network is disabled.
    

true

VSwitchId

string

The vSwitch ID.

vsw-bp1jqwp2ys6kp7tc9t983

VpcId

string

The VPC ID.

vpc-uf66jjber3hgvwhki3wna

VpcInstanceId

string

The VPC instance ID.

hgprecn-cn-uqm362o1b001-frontend-st

AlternativeEndpoints

string

Some earlier instances have both AnyTunnel and SingleTunnel enabled. When you switch from AnyTunnel to SingleTunnel, the endpoints for both are retained. This field is used to store the extra endpoint.

hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80

ExpirationTime

string

The expiration time. Pay-as-you-go instances do not expire.

2021-02-03T13:06:06Z

InstanceId

string

The instance ID.

hgpostcn-cn-tl32s6cgw00b

InstanceName

string

The name of the instance. The name must be 2 to 64 characters in length. Each letter or Chinese character is counted as a single character.

test

InstanceType

string

The instance type.

**Valid values:**

-   Warehouse :
    
    Virtual warehouse instance
    
-   Follower :
    
    Read-only secondary instance
    
-   Standard :
    
    General-purpose instance
    
-   Serverless :
    
    Serverless instance
    
-   Shared :
    
    Shared cluster
    

Standard

Memory

integer

The memory size. Unit: GB.

128

InstanceOwner

string

The instance owner.

12345678900000

InstanceStatus

string

The instance status.

**Valid values:**

-   Creating :
    
    The instance is being created.
    
-   Running :
    
    The instance is running.
    
-   Suspended :
    
    The instance is stopped.
    
-   Allocating :
    
    The instance is allocating resources.
    

Running

Version

string

The instance version.

r1.3.37

SuspendReason

string

The reason why the instance was stopped.

**Valid values:**

-   Indebet :
    
    The payment is overdue.
    
-   Manual :
    
    The instance was manually stopped.
    
-   Overdue :
    
    The subscription has expired.
    

Manual

Tags

array<object>

The tags of the instance.

object

The tag details.

Key

string

The tag key.

tag

Value

string

The tag value.

value

LeaderInstanceId

string

The ID of the primary instance.

hgpostcn-cn-i7m2ncd6w002

EnableHiveAccess

string

Indicates whether data lake acceleration is enabled.

true

ResourceGroupId

string

The ID of the resource group.

rg-aekzuq7hpybze2i

ComputeNodeCount

integer

The number of compute nodes. A node has 16 vCPUs and 32 GB of memory.

2

ZoneId

string

The zone ID.

cn-hangzhou-h

ColdStorage

integer

The cold storage capacity. Unit: GB. SSD is hot storage, which is also standard storage. HDD is cold storage.

800

AutoRenewal

string

Indicates whether auto-renewal is enabled.

**Valid values:**

-   true :
    
    Auto-renewal is enabled.
    
-   false :
    
    Auto-renewal is disabled.
    

true

GatewayCount

integer

The number of gateway nodes.

2

GatewayCpu

integer

The vCPU resources of the gateway. Unit: cores.

4

GatewayMemory

integer

The memory resources of the gateway. Unit: GB.

16

RegionId

string

The region ID.

cn-hangzhou

ReplicaRole

string

The role of instance in disaster recovery. Active: the primary instance. Passive: the secondary instance. PreActive: a primary instance that has not reached the desired state.

Active

EnableServerless

boolean

Indicates whether Serverless Computing is enabled.

**Valid values:**

-   true :
    
    Serverless Computing is enabled.
    
-   false :
    
    Serverless Computing is disabled.
    

true

StorageType

string

The storage class:

-   redundant: Zone-redundant storage
    
-   local: Locally redundant storage
    

redundant

EnableSSL

boolean

Indicates whether SSL is enabled.

true

Success

boolean

The result of the request, which indicates whether an exception occurred. This parameter is not related to the business logic.

true

ErrorCode

string

The error code.

null

ErrorMessage

string

The error message.

null

HttpStatusCode

string

The HTTP status code.

200

## Examples

Success response

`JSON` format

```
{
  "RequestId": "865A02C2-B374-5DD4-9B34-0CA15DA1AEBD",
  "Instance": {
    "InstanceChargeType": "PrePaid",
    "CommodityCode": "hologram_combo_public_cn",
    "Cpu": 32,
    "CreationTime": "2021-02-03T13:06:06Z",
    "Disk": "500",
    "Endpoints": [
      {
        "Endpoint": "hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80",
        "Type": "Internet",
        "Enabled": true,
        "VSwitchId": "vsw-bp1jqwp2ys6kp7tc9t983",
        "VpcId": "vpc-uf66jjber3hgvwhki3wna",
        "VpcInstanceId": "hgprecn-cn-uqm362o1b001-frontend-st",
        "AlternativeEndpoints": "hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80"
      }
    ],
    "ExpirationTime": "2021-02-03T13:06:06Z",
    "InstanceId": "hgpostcn-cn-tl32s6cgw00b",
    "InstanceName": "test",
    "InstanceType": "Standard",
    "Memory": 128,
    "InstanceOwner": "12345678900000",
    "InstanceStatus": "Running",
    "Version": "r1.3.37",
    "SuspendReason": "Manual",
    "Tags": [
      {
        "Key": "tag",
        "Value": "value"
      }
    ],
    "LeaderInstanceId": "hgpostcn-cn-i7m2ncd6w002",
    "EnableHiveAccess": "true",
    "ResourceGroupId": "rg-aekzuq7hpybze2i",
    "ComputeNodeCount": 2,
    "ZoneId": "cn-hangzhou-h",
    "ColdStorage": 800,
    "AutoRenewal": "true",
    "GatewayCount": 2,
    "GatewayCpu": 4,
    "GatewayMemory": 16,
    "RegionId": "cn-hangzhou",
    "ReplicaRole": "Active",
    "EnableServerless": true,
    "StorageType": "redundant",
    "EnableSSL": true
  },
  "Success": true,
  "ErrorCode": "null",
  "ErrorMessage": "null",
  "HttpStatusCode": "200"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Hologram/2022-06-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Hologram/2022-06-01/GetInstance#workbench-doc-change-demo) for a complete list.
