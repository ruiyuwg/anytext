Queries the details of a VPC firewall that protects traffic between a network instance in a Cloud Enterprise Network (CEN) and a specified VPC.

## Operation description

You can call this operation to query the details of a VPC firewall. The VPC firewall protects traffic between a specified VPC and a network instance in a Cloud Enterprise Network (CEN). The network instance can be a VPC, a Virtual Border Router (VBR), or a Cloud Connect Network (CCN) instance.

## QPS limit

This operation has a queries per second (QPS) limit of 10 for each user. If you exceed the limit, your API calls are throttled. This may affect your business. We recommend that you call this operation at a reasonable rate.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallCenDetail)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallCenDetail)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Lang

string

No

The language of the request and response. Valid values:

-   **zh** (default): Chinese.
    
-   **en**: English.
    

zh

Lang

string

No

The language of the request and response. Valid values:

-   **zh** (default): Chinese.
    
-   **en**: English.
    

zh

VpcFirewallId

string

Yes

The instance ID of the VPC firewall.

**Note**

You can call the [DescribeVpcFirewallCenList](/help/en/cloud-firewall/api-describevpcfirewallcenlist) operation to query the instance IDs of VPC firewalls.

vfw-m5e7dbc4y\*\*\*\*

NetworkInstanceId

string

No

The ID of the VPC instance for which the VPC firewall is created.

vpc-2zefk9fbn8j7v585g\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

ConnectType

string

The connection type of the VPC firewall. The value is fixed as **cen**, which indicates CEN.

cen

VpcFirewallName

string

The instance name of the VPC firewall.

vpc-firewall-test

VpcFirewallId

string

The instance ID of the VPC firewall.

vfw-m5e7dbc4y\*\*\*\*

FirewallSwitchStatus

string

The status of the VPC firewall. Valid values:

-   **opened**: The firewall is enabled.
    
-   **closed**: The firewall is disabled.
    
-   **notconfigured**: The firewall is not configured.
    

opened

RequestId

string

The ID of the request.

850A84D6-0DE4-4797-A1E8-00090125g4d2

LocalVpc

object

The details of the VPC.

VpcId

string

The instance ID of the VPC.

vpc-8vbwbo90rq0anm6t\*\*\*\*

TransitRouterType

string

The edition of the CEN transit router. Valid values:

-   **Basic**: Basic Edition.
    
-   **Enterprise**: Enterprise Edition.
    

Basic

RouteMode

string

The routing mode. Valid values:

-   auto: automatic mode.
    
-   manual: manual mode.
    

auto

NetworkInstanceId

string

The ID of the VPC instance for which the VPC firewall is created.

vpc-2zefk9fbn8j7v585g\*\*\*\*

RegionNo

string

The region ID of the VPC.

cn-hangzhou

ManualVSwitchId

string

The ID of the vSwitch that is specified for the manual routing mode.

vsw-zeq4o875u\*\*\*\*

OwnerId

string

The UID of the Alibaba Cloud account to which the VPC belongs.

158039427902\*\*\*\*

NetworkInstanceType

string

The type of the network instance. The value is fixed as **VPC**.

VPC

VpcName

string

The instance name of the VPC.

vpc-firewall-test

SupportManualMode

string

Indicates whether the manual routing mode is supported. Valid values:

-   **1**: yes.
    
-   **0**: no.
    

0

TransitRouterId

string

The instance ID of the CEN transit router.

tr-2zetwxskej633l3u1\*\*\*\*

AttachmentId

string

The ID of the network instance connection.

tr-attach-sxig7bye51fid5\*\*\*\*

NetworkInstanceName

string

The name of the network instance.

test-vpc

AttachmentName

string

The name of the network instance connection.

local-test

VpcCidrTableList

array<object>

The list of CIDR blocks for the VPC.

array<object>

RouteTableId

string

The ID of the route table for the VPC.

vtb-1234

RouteEntryList

array<object>

The list of route entries for the VPC.

object

NextHopInstanceId

string

The ID of the next hop instance in the VPC.

vrt-m5eb5me6c3l5sezae\*\*\*\*

DestinationCidr

string

The destination CIDR block of the VPC.

192.168.XX.XX/24

EniList

array<object>

The list of elastic network interfaces (ENIs).

object

EniId

string

The instance ID of the ENI in the VPC.

eni-8vbhfosfqv2rff42\*\*\*\*

EniPrivateIpAddress

string

The private IP address of the ENI in the VPC.

192.168.XX.XX

EniVSwitchId

string

The ID of the vSwitch for the ENI in the VPC.

vsw-wz9viido7j436b0n1\*\*\*\*

DefendCidrList

array

The list of CIDR blocks that are protected by the VPC firewall.

string

The CIDR block that is protected by the VPC firewall.

10.0.XX.XX/24

FirewallVpc

object

The VPC that is used by the firewall.

VpcId

string

The VPC instance ID.

vpc-bp1245k5oagy2bp74\*\*\*\*

VpcCidr

string

The CIDR block of the VPC.

10.0.0.0/8

VswitchId

string

The virtual switch ID.

vsw-bp1sqg9wms9wxcs1\*\*\*\*

VswitchCidr

string

The CIDR block of the virtual switch.

10.0.0.1/24

ZoneId

string

The ID of the primary zone for the firewall.

cn-hangzhou-i

AllowConfiguration

integer

Indicates whether you can specify a CIDR block for the firewall VPC when you create a VPC firewall for a Basic Edition transit router. Valid values:

-   **1**: yes.
    
-   **0**: no.
    

0

VswitchZoneId

string

The zone ID of the virtual switch.

cn-hangzhou-i

StandbyZoneId

string

The ID of the secondary zone for the firewall.

cn-hangzhou-k

## Examples

Success response

`JSON` format

```
{
  "ConnectType": "cen",
  "VpcFirewallName": "vpc-firewall-test",
  "VpcFirewallId": "vfw-m5e7dbc4y****",
  "FirewallSwitchStatus": "opened",
  "RequestId": "850A84D6-0DE4-4797-A1E8-00090125g4d2",
  "LocalVpc": {
    "VpcId": "vpc-8vbwbo90rq0anm6t****",
    "TransitRouterType": "Basic",
    "RouteMode": "auto",
    "NetworkInstanceId": "vpc-2zefk9fbn8j7v585g****",
    "RegionNo": "cn-hangzhou",
    "ManualVSwitchId": "vsw-zeq4o875u****",
    "OwnerId": "158039427902****",
    "NetworkInstanceType": "VPC",
    "VpcName": "vpc-firewall-test",
    "SupportManualMode": "0",
    "TransitRouterId": "tr-2zetwxskej633l3u1****",
    "AttachmentId": "tr-attach-sxig7bye51fid5****",
    "NetworkInstanceName": "test-vpc",
    "AttachmentName": "local-test",
    "VpcCidrTableList": [
      {
        "RouteTableId": "vtb-1234",
        "RouteEntryList": [
          {
            "NextHopInstanceId": "vrt-m5eb5me6c3l5sezae****",
            "DestinationCidr": "192.168.XX.XX/24"
          }
        ]
      }
    ],
    "EniList": [
      {
        "EniId": "eni-8vbhfosfqv2rff42****",
        "EniPrivateIpAddress": "192.168.XX.XX",
        "EniVSwitchId": "vsw-wz9viido7j436b0n1****"
      }
    ],
    "DefendCidrList": [
      "10.0.XX.XX/24"
    ]
  },
  "FirewallVpc": {
    "VpcId": "vpc-bp1245k5oagy2bp74****",
    "VpcCidr": "10.0.0.0/8",
    "VswitchId": "vsw-bp1sqg9wms9wxcs1****",
    "VswitchCidr": "10.0.0.1/24",
    "ZoneId": "cn-hangzhou-i",
    "AllowConfiguration": 0,
    "VswitchZoneId": "cn-hangzhou-i",
    "StandbyZoneId": "cn-hangzhou-k"
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ErrorAliUid

The aliuid is invalid.

The aliuid is invalid.

400

ErrorDBSelectError

A database select error occurred.

The error message returned because an internal error has occurred in querying the database.

400

ErrorVpcFirewallId

The VPC firewall ID is invalid.

The VPC firewall ID is invalid.

400

ErrorVpcFirewallExist

The firewall has been configured and cannot be created repeatedly.

The firewall is configured and cannot be repeatedly created.

400

ErrorUnmarshalJSON

An error occurred while parsing JSON.

An error occurred while decoding JSON.

400

ErrorDBTxError

A database transaction error occurred.

The error message returned because an internal error has occurred in the database transaction.

400

ErrorVpcOpenApi

vpc open api failed

Failed to call the VPC API.

400

ErrorInvalidMemberUid

Member uid is invalid

The member is invalid.

400

ErrorVpcIdPara

vpc id and firewall id parameter not exist.

The firewall VPC parameter is incorrect. Select another one.

400

ErrorFirewallNotFound

Firewall not found

The firewall does not exist.

400

ErrorDBNoRow

No rows in database.

No data found.

400

ErrorUserNotFound

User not found

The user does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/DescribeVpcFirewallCenDetail#workbench-doc-change-demo) for a complete list.
