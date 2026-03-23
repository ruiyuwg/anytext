Queries the details of VPC firewalls that protect traffic between a specified VPC and network instances in a Cloud Enterprise Network (CEN) instance.

## Operation description

This operation queries the details of a VPC firewall. The firewall protects traffic between a specified VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance. The network instance can be a VPC, a Virtual Border Router (VBR), or a Cloud Connect Network (CCN) instance.

## Limits

You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. This may affect your business. We recommend that you plan your calls accordingly.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallCenList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallCenList)

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

The language of the response. Valid values:

-   **zh** (default): Chinese.
    
-   **en**: English.
    

zh

Lang

string

No

The language of the response. Valid values:

-   **zh** (default): Chinese.
    
-   **en**: English.
    

zh

RegionNo

string

No

The region ID of the VPC.

**Note**

For more information about the regions that Cloud Firewall supports, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions).

cn-hangzhou

NetworkInstanceId

string

No

The ID of the network instance.

vpc-8vbwbo90rq0anm6t\*\*\*\*

FirewallSwitchStatus

string

No

The status of the VPC firewall. Valid values:

-   **opened**: The firewall is enabled.
    
-   **closed**: The firewall is disabled.
    
-   **notconfigured**: The firewall is not configured.
    
-   **configured**: The firewall is configured but is disabled.
    

**Note**

If you leave this parameter empty, VPC firewalls in all states are queried.

opened

VpcFirewallId

string

No

The instance ID of the VPC firewall.

vfw-m5e7dbc4y\*\*\*\*

VpcFirewallName

string

No

The instance name of the VPC firewall.

vpc-firewall-test

CenId

string

No

The ID of the CEN instance.

cen-x5jayxou71ad73\*\*\*\*

CurrentPage

string

No

The page number to return.

Default value: 1.

1

PageSize

string

No

The number of entries to return on each page.

Default value: 10. Maximum value: 50.

10

RouteMode

string

No

The routing mode. Valid values:

-   **auto**: automatic mode.
    
-   **manual**: manual mode.
    

**Note**

If you leave this parameter empty, VPC firewalls that use all routing modes are queried.

auto

MemberUid

string

No

The UID of a member account that is managed by your Alibaba Cloud account.

258039427902\*\*\*\*

TransitRouterType

string

No

The type of the transit router. Valid values:

-   **Basic**: Basic Edition transit router.
    
-   **Enterprise**: Enterprise Edition transit router.
    

Basic

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of VPC firewalls.

10

RequestId

string

The ID of the request.

850A84D6-0DE4-4797-A1E8-00090125k8g2

VpcFirewalls

array<object>

The details of the VPC firewalls.

array<object>

ConnectType

string

The connection type of the VPC firewall. The value is fixed as cen, which indicates a CEN instance.

cen

VpcFirewallId

string

The instance ID of the VPC firewall.

vfw-m5e7dbc4y\*\*\*\*

RegionStatus

string

The status of the region. Valid values:

-   **enable**: VPC firewalls can be configured in the region.
    
-   **disable**: VPC firewalls cannot be configured in the region.
    

enable

CenId

string

The ID of the CEN instance.

cen-x5jayxou71ad73\*\*\*\*

VpcFirewallName

string

The instance name of the VPC firewall.

vpc-firewall-test

ResultCode

string

The result code of the operation to create the VPC firewall. Valid values:

-   **Unauthorized**: The VPC firewall cannot be created because a network instance is not authorized.
    
-   **RegionDisable**: The VPC firewall cannot be created because the region of the network instance is not supported.
    
-   **OpsDisable**: The VPC firewall cannot be created.
    
-   **VbrNotSupport**: The VPC firewall cannot be created because the VBR in the CEN instance is not supported.
    
-   An empty string indicates that the VPC firewall can be created for the network instance.
    

Unauthorized

CenName

string

The name of the CEN instance.

cen-test

FirewallSwitchStatus

string

The status of the VPC firewall. Valid values:

-   **opened**: enabled.
    
-   **closed**: disabled.
    
-   **notconfigured**: not configured.
    

opened

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

NetworkInstanceId

string

The ID of the network instance.

vpc-2zefk9fbn8j7v585g\*\*\*\*

RouteMode

string

The routing mode. Valid values:

-   **auto**: automatic.
    
-   **manual**: manual.
    

auto

RegionNo

string

The region ID of the VPC.

cn-hangzhou

AuthorizationStatus

string

The authorization status of the VPC. The value is fixed as **authorized**. This value indicates that the VPC is authorized.

authorized

ManualVSwitchId

string

The ID of the vSwitch that is specified for the manual routing mode.

vsw-zeq4o875u\*\*\*\*

OwnerId

integer

The UID of the Alibaba Cloud account to which the VPC belongs.

158039427902\*\*\*\*

NetworkInstanceType

string

The type of the network instance. Valid values:

-   **VPC**: Virtual Private Cloud.
    
-   **VBR**: Virtual Border Router.
    
-   **CCN**: Cloud Connect Network.
    

VPC

VpcName

string

The instance name of the VPC.

vpc-instance

SupportManualMode

string

Indicates whether the manual routing mode is supported. Valid values:

-   **1**: yes.
    
-   **0**: no.
    

0

NetworkInstanceName

string

The name of the network instance.

network-instance-test

VpcCidrTableList

array<object>

The CIDR blocks of the VPC.

array<object>

The CIDR blocks of the VPC.

RouteTableId

string

The ID of the route table for the VPC.

vtb-1234

RouteEntryList

array<object>

The routes of the VPC.

object

The routes of the VPC.

NextHopInstanceId

string

The ID of the next hop instance in the VPC.

vrt-m5eb5me6c3l5sezae\*\*\*\*

DestinationCidr

string

The destination CIDR block of the VPC.

192.168.XX.XX/24

DefendCidrList

array

The CIDR blocks that are protected by the VPC firewall.

string

A CIDR block that is protected by the VPC firewall.

10.0.XX.XX/24

IpsConfig

object

The intrusion prevention system (IPS) configuration.

BasicRules

integer

Indicates whether basic protection is enabled. Valid values:

-   **1**: enabled.
    
-   **0**: disabled.
    

1

EnableAllPatch

integer

Indicates whether virtual patching is enabled. Valid values:

-   **1**: enabled.
    
-   **0**: disabled.
    

1

RunMode

integer

The mode of the IPS. Valid values:

-   **1**: Block Mode.
    
-   **0**: Monitor mode.
    

0

RuleClass

integer

The type of the IPS rule group. Valid values:

-   **1**: loose.
    
-   **2**: medium.
    
-   **3**: strict.
    

1

MemberUid

string

The UID of the member account.

258039427902\*\*\*\*

PrecheckStatus

string

Indicates whether the firewall can be automatically created. Cloud Firewall automatically creates a firewall and protects VPC traffic based on route learning. Valid values:

-   **passed**: The firewall can be automatically created.
    
-   **failed**: The firewall cannot be automatically created.
    
-   **unknown**: The status is unknown.
    

failed

AclConfig

object

The access control list (ACL) engine mode.

StrictMode

integer

Indicates whether the strict mode is enabled. Valid values:

-   1: enabled
    
-   0: disabled
    

1

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 10,
  "RequestId": "850A84D6-0DE4-4797-A1E8-00090125k8g2",
  "VpcFirewalls": [
    {
      "ConnectType": "cen",
      "VpcFirewallId": "vfw-m5e7dbc4y****",
      "RegionStatus": "enable",
      "CenId": "cen-x5jayxou71ad73****",
      "VpcFirewallName": "vpc-firewall-test",
      "ResultCode": "Unauthorized",
      "CenName": "cen-test",
      "FirewallSwitchStatus": "opened",
      "LocalVpc": {
        "VpcId": "vpc-8vbwbo90rq0anm6t****",
        "TransitRouterType": "Basic",
        "NetworkInstanceId": "vpc-2zefk9fbn8j7v585g****",
        "RouteMode": "auto",
        "RegionNo": "cn-hangzhou",
        "AuthorizationStatus": "authorized",
        "ManualVSwitchId": "vsw-zeq4o875u****",
        "OwnerId": 0,
        "NetworkInstanceType": "VPC",
        "VpcName": "vpc-instance",
        "SupportManualMode": "0",
        "NetworkInstanceName": "network-instance-test",
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
        "DefendCidrList": [
          "10.0.XX.XX/24"
        ]
      },
      "IpsConfig": {
        "BasicRules": 1,
        "EnableAllPatch": 1,
        "RunMode": 0,
        "RuleClass": 1
      },
      "MemberUid": "258039427902****",
      "PrecheckStatus": "failed",
      "AclConfig": {
        "StrictMode": 1
      }
    }
  ]
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

ErrorPageNo

Either page number or page size is invalid.

Either page number or page size is invalid.

400

ErrorUserNotFound

User not found

The user does not exist.

400

ErrorFirewallStatus

firewall status error.

Firewall status error, please try again later.

400

ErrorOwnerId

owner id invalid.

The account is incorrect, please re-enter.

400

ErrorInvalidMemberUid

Member uid is invalid

The member is invalid.

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/DescribeVpcFirewallCenList#workbench-doc-change-demo) for a complete list.
