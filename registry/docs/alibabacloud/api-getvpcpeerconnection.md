Queries the details of a specified VPC peering connection.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/GetVpcPeerConnectionAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/GetVpcPeerConnectionAttribute)

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

vpc:GetVpcPeerConnectionAttribute

get

\*PeerConnection

`acs:vpc:*:{#accountId}:vpcpeer/{#InstanceId}`

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

Yes

The ID of the VPC peering connection.

pcc-lnk0m24khwvtkm\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The request ID.

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3AC0DE3C83E

InstanceId

string

The ID of the VPC peering connection.

pcc-lnk0m24khwvtkm\*\*\*\*

GmtCreate

string

The time when the VPC peering connection was created. The time is displayed in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.

2022-04-24T09:02:36Z

GmtModified

string

The time when the VPC peering connection was last modified. The time is displayed in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.

2022-04-24T19:20:45Z

Name

string

The name of the VPC peering connection.

vpcpeer

Description

string

The description of the VPC peering connection.

test

OwnerId

integer

The ID of the Alibaba Cloud account to which the requester VPC belongs.

25346073170691\*\*\*\*

AcceptingOwnerUid

integer

The ID of the Alibaba Cloud account to which the accepter VPC belongs.

28311773240248\*\*\*\*

RegionId

string

The region ID of the requester VPC.

cn-hangzhou

AcceptingRegionId

string

The region ID of the accepter VPC.

cn-hangzhou

Bandwidth

integer

The bandwidth of the VPC peering connection. Unit: Mbps. The value must be an integer greater than 0.

**Note**

A value of -1 indicates that no limit is imposed on the bandwidth.

Default values:

-   The default bandwidth for a cross-region VPC peering connection is 1,024 Mbps.
    
-   The default bandwidth for an intra-region VPC peering connection is -1 Mbps. This indicates that no limit is imposed on the bandwidth.
    

1024

Status

string

The status of the VPC peering connection. Valid values:

-   **Creating**
    
-   **Accepting**
    
-   **Updating**
    
-   **Rejected**
    
-   **Expired**
    
-   **Activated**
    
-   **Deleting**
    
-   **Deleted**
    

For more information, see [VPC peering connection overview](/help/en/vpc/vpc-peer-to-peer-connection).

Activated

BizStatus

string

The business status of the VPC peering connection. Valid values:

-   **Normal**
    
-   **FinancialLocked**: The VPC peering connection is locked due to an overdue payment.
    

Normal

GmtExpired

string

The time when the VPC peering connection expires.

This parameter is returned only when the **Status** of the VPC peering connection is **Accepting** or **Expired**. For other statuses, the return value is **null**.

2022-05-01T09:02:36Z

ResourceGroupId

string

The ID of the resource group.

rg-acfmxazb4ph6aiy\*\*\*\*

Vpc

object

The details of the requester VPC.

VpcId

string

The ID of the requester VPC.

vpc-bp1gsk7h12ew7oegk\*\*\*\*

Ipv4Cidrs

array

The IPv4 CIDR blocks of the requester VPC.

string

The IPv4 CIDR block of the requester VPC.

192.168.0.0/16

Ipv6Cidrs

array

The IPv6 CIDR blocks of the requester VPC.

string

The IPv6 CIDR block of the requester VPC.

2408:XXXX:3c5:6e00::/56

AcceptingVpc

object

The details of the accepter VPC.

VpcId

string

The ID of the accepter VPC.

vpc-bp1vzjkp2q1xgnind\*\*\*\*

Ipv4Cidrs

array

The IPv4 CIDR blocks of the accepter VPC.

string

The IPv4 CIDR block of the accepter VPC.

10.0.0.0/16

Ipv6Cidrs

array

The IPv6 CIDR blocks of the accepter VPC.

string

The IPv6 CIDR block of the accepter VPC.

2408:XXXX:3b8:3a00::/56

Tags

array<object>

The list of tags.

object

The list of tags.

Key

string

The tag key.

FinanceDept

Value

string

The tag value.

FinanceJoshua

LinkType

string

The link type of the VPC peering connection.

Default values:

-   The default link type for a cross-region VPC peering connection is Gold.
    
-   The default link type for an intra-region VPC peering connection is empty.
    

Gold

ManagedService

string

The Alibaba Cloud service to which the resource belongs.

SWAS

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3AC0DE3C83E",
  "InstanceId": "pcc-lnk0m24khwvtkm****",
  "GmtCreate": "2022-04-24T09:02:36Z",
  "GmtModified": "2022-04-24T19:20:45Z",
  "Name": "vpcpeer",
  "Description": "test",
  "OwnerId": 0,
  "AcceptingOwnerUid": 0,
  "RegionId": "cn-hangzhou",
  "AcceptingRegionId": "cn-hangzhou",
  "Bandwidth": 1024,
  "Status": "Activated",
  "BizStatus": "Normal",
  "GmtExpired": "2022-05-01T09:02:36Z",
  "ResourceGroupId": "rg-acfmxazb4ph6aiy****",
  "Vpc": {
    "VpcId": "vpc-bp1gsk7h12ew7oegk****",
    "Ipv4Cidrs": [
      "192.168.0.0/16"
    ],
    "Ipv6Cidrs": [
      "2408:XXXX:3c5:6e00::/56"
    ]
  },
  "AcceptingVpc": {
    "VpcId": "vpc-bp1vzjkp2q1xgnind****",
    "Ipv4Cidrs": [
      "10.0.0.0/16"
    ],
    "Ipv6Cidrs": [
      "2408:XXXX:3b8:3a00::/56"
    ]
  },
  "Tags": [
    {
      "Key": "FinanceDept",
      "Value": "FinanceJoshua"
    }
  ],
  "LinkType": "Gold",
  "ManagedService": "SWAS"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ResourceNotFound.InstanceId

The specified resource of %s is not found.

The specified instance is not found

See [Error Codes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/GetVpcPeerConnectionAttribute#workbench-doc-change-demo) for a complete list.
