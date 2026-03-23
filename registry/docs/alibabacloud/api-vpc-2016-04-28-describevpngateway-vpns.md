Queries the detailed information about a VPN gateway.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpnGateway)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpnGateway)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

vpc:DescribeVpnGateway

get

\*VpnGateway

`acs:vpc:{#regionId}:{#accountId}:vpngateway/{#VpnGatewayId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the VPN gateway.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

VpnGatewayId

string

Yes

The ID of the VPN gateway.

vpn-bp1r3v1xqkl0w519g\*\*\*\*

IncludeReservationData

boolean

No

Specifies whether to include the data about pending orders. Valid values:

-   **false** (default)
-   **true**

true

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

VpnType

string

The type of VPN gateway. Only **Normal** may be returned, which indicates a standard VPN gateway.

Normal

Status

string

The status of the VPN gateway. Valid values:

-   **init**
-   **provisioning**
-   **active**
-   **updating**
-   **deleting**

init

VpcId

string

The ID of the VPC to which the VPN gateway belongs.

vpc-bp19m2yx1m5q0avyq\*\*\*\*

SslMaxConnections

long

The maximum number of concurrent SSL-VPN connections.

5

Spec

string

The maximum bandwidth of the VPN gateway. Unit: Mbit/s.

5

InternetIp

string

-   If the VPN gateway supports IPsec-VPN connections in single-tunnel mode, the address is the IP address of the VPN gateway and can be used to create an IPsec-VPN connection or an SSL-VPN connection.
    
-   If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the address is the first IP address used to create an IPsec-VPN connection. The address cannot be used to create an SSL-VPN connection.
    
    If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the system assigns two IP addresses to the VPN gateway to create two encrypted tunnels.
    

47.22.XX.XX

CreateTime

long

The timestamp when the VPN gateway was created. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1495382400000

AutoPropagate

boolean

Indicates whether BGP routes are automatically advertised to the VPC. Valid values:

-   **true**
-   **false**

true

ChargeType

string

The billing method. Valid value:

**POSTPAY**: pay-as-you-go

中国站示例值：Prepay，国际站示例值：POSTPAY

VpnGatewayId

string

The ID of the VPN gateway.

vpn-bp1r3v1xqkl0w519g\*\*\*\*

Tag

string

The tag that is automatically generated for the VPN gateway. The tag consists of the following parameters:

-   **VpnEnableBgp**: indicates whether the VPN gateway supports BGP. Valid values:
    
    -   **true**
    -   **false**
-   **VisuallySsl**: indicates whether the VPN gateway allows you to view the connection information of SSL clients. Valid values:
    
    -   **true**
    -   **false**
-   **PbrPriority**: indicates whether the VPN gateway allows you to configure priorities for policy-based routes. Valid values:
    
    -   **true**
    -   **false**
-   **VpnNewImage**: indicates whether the VPN gateway is upgraded. Valid values:
    
    -   **true**
    -   **false**
-   **description**: the description of the VPN gateway. This parameter is only for internal use.
    
-   **VpnVersion**: the version of the VPN gateway.
    
-   **IDaaSNewVersion**: indicates whether the VPN gateway can be associated with an EIAM 2.0 instance.
    
    -   **true**
    -   **false**

{\\"VpnEnableBgp\\":\\"true\\",\\"VisuallySsl\\":\\"true\\",\\"PbrPriority\\":\\"true\\",\\"VpnNewImage\\":\\"true\\",\\"description\\":\\"转发1.3.24\\",\\"VpnVersion\\":\\"v1.2.4\\",\\"IDaaSNewVersion\\":\\"true\\"}

IpsecVpn

string

Indicates whether the IPsec-VPN feature is enabled. Valid values:

-   **enable**
-   **disable**

enable

EndTime

long

The timestamp when the VPN gateway expires. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1544666102000

VSwitchId

string

The ID of the vSwitch to which the VPN gateway belongs.

vsw-bp1dmzugdikc6hdgx\*\*\*\*

RequestId

string

The request ID.

27E4E088-8DE0-4672-BF5C-0A412389DB9E

Description

string

The description of the VPN gateway.

vpngatewaydescription

EnableBgp

boolean

Indicates whether BGP is enabled for the VPN gateway. Valid values:

-   **true**
-   **false**

true

BusinessStatus

string

The payment status of the VPN gateway. Valid values:

-   **Normal**
-   **FinancialLocked**

Normal

SslVpn

string

The status of the SSL-VPN feature. Valid values:

-   **enable**
-   **disable**

enable

Name

string

The name of the VPN gateway.

vpngatewayname

ReservationData

object

The information about pending orders.

**Note** This set of parameters is returned only when **IncludeReservationData** is set to **true**.

Status

string

The status of the pending order. Valid values:

-   **1**: indicates that the order of the renewal or specification change has not taken effect.
-   **2**: indicates that the order is an order for temporary upgrade and the order has taken effect. After the temporary upgrade expires, the system restores the VPN gateway to its previous specifications. In this case, **ReservationIpsec**, **ReservationMaxConnections**, **ReservationSpec**, and **ReservationSsl** indicate the previous specification.

1

ReservationOrderType

string

The type of the pending order. Valid values:

-   **RENEWCHANGE**: renewal with upgrade or downgrade
-   **TEMP\_UPGRADE**: temporary upgrade
-   **RENEW**: renewal

TEMP\_UPGRADE

ReservationIpsec

string

The IPsec-VPN status of the pending order. Valid values:

-   **enable**
-   **disable**

enable

ReservationSpec

string

The bandwidth of the pending order. Unit: Mbit/s.

5

ReservationSsl

string

The SSL-VPN status of the pending order. Valid values:

-   **enable**
-   **disable**

enable

ReservationMaxConnections

integer

The maximum number of concurrent SSL-VPN connections of the pending order.

5

ReservationEndTime

string

If the order type is **TEMP\_UPGRADE** (temporary upgrade), this parameter specifies the time when the temporary upgrade expires.

If the order type is **RENEWCHANGE** (renewal with a specification change) or **RENEW** (renewal), this parameter indicates the time when the renewal or renewal with a specification change takes effect.

2020-07-20T16:00:00Z

Tags

object

NetworkType

string

The network type of the VPN gateway.

-   **public**
-   **private**

public

DisasterRecoveryInternetIp

string

The second IP address assigned by the system to create an IPsec-VPN connection.

This parameter is returned only when the VPN gateway supports the dual-tunnel mode.

47.91.XX.XX

DisasterRecoveryVSwitchId

string

The ID of the second vSwitch associated with the VPN gateway.

This parameter is returned only when the VPN gateway supports the dual-tunnel mode.

vsw-p0w95ql6tmr2ludkt\*\*\*\*

SslVpnInternetIp

string

The IP address of the SSL-VPN connection.

This parameter is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.

47.74.XX.XX

ResourceGroupId

string

The ID of the resource group to which the VPN gateway belongs.

You can call the [ListResourceGroups](/help/en/resource-management/api-listresourcegroups) operation to query resource groups.

rg-acfmzs372yg\*\*\*\*

EniInstanceIds

object

GatewayType

string

Type of VPN gateway:

-   **Traditional**: Traditional-type VPN gateway, supports both IPSec and SSL.
-   **Enhanced.SiteToSite**: Enhanced Site-to-Site VPN gateway, only supports IPSec.

Enhanced.SiteToSite

## Examples

Sample success responses

`JSON`format

```
{
  "VpnType": "Normal",
  "Status": "init",
  "VpcId": "vpc-bp19m2yx1m5q0avyq****",
  "SslMaxConnections": 5,
  "Spec": 5,
  "InternetIp": "47.22.XX.XX",
  "CreateTime": 1495382400000,
  "AutoPropagate": true,
  "ChargeType": "中国站示例值：Prepay，国际站示例值：POSTPAY",
  "VpnGatewayId": "vpn-bp1r3v1xqkl0w519g****",
  "Tag": "{\\\"VpnEnableBgp\\\":\\\"true\\\",\\\"VisuallySsl\\\":\\\"true\\\",\\\"PbrPriority\\\":\\\"true\\\",\\\"VpnNewImage\\\":\\\"true\\\",\\\"description\\\":\\\"转发1.3.24\\\",\\\"VpnVersion\\\":\\\"v1.2.4\\\",\\\"IDaaSNewVersion\\\":\\\"true\\\"}",
  "IpsecVpn": "enable",
  "EndTime": 1544666102000,
  "VSwitchId": "vsw-bp1dmzugdikc6hdgx****",
  "RequestId": "27E4E088-8DE0-4672-BF5C-0A412389DB9E",
  "Description": "vpngatewaydescription",
  "EnableBgp": true,
  "BusinessStatus": "Normal",
  "SslVpn": "enable",
  "Name": "vpngatewayname",
  "ReservationData": {
    "Status": 1,
    "ReservationOrderType": "TEMP_UPGRADE",
    "ReservationIpsec": "enable",
    "ReservationSpec": 5,
    "ReservationSsl": "enable",
    "ReservationMaxConnections": 5,
    "ReservationEndTime": "2020-07-20T16:00:00Z"
  },
  "Tags": {
    "test": "test",
    "test2": 1
  },
  "NetworkType": "public",
  "DisasterRecoveryInternetIp": "47.91.XX.XX",
  "DisasterRecoveryVSwitchId": "vsw-p0w95ql6tmr2ludkt****",
  "SslVpnInternetIp": "47.74.XX.XX",
  "ResourceGroupId": "rg-acfmzs372yg****",
  "EniInstanceIds": {
    "test": "test",
    "test2": 1
  },
  "GatewayType": "Enhanced.SiteToSite"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

Forbbiden.SubUser

User not authorized to operate on the specified resource as your account is created by another user.

You are unauthorized to perform this operation on the specified resource. Acquire the required permissions and try again.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

404

InvalidVpnGatewayInstanceId.NotFound

The specified vpn gateway instance id does not exist.

The specified VPN gateway does not exist. Check whether the specified VPN gateway is valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-15

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateway?updateTime=2026-01-15#workbench-doc-change-demo)

2024-05-06

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateway?updateTime=2024-05-06#workbench-doc-change-demo)

2023-10-19

API Description Update. The API operation is not deprecated.. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateway?updateTime=2023-10-19#workbench-doc-change-demo)

2023-06-30

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateway?updateTime=2023-06-30#workbench-doc-change-demo)
