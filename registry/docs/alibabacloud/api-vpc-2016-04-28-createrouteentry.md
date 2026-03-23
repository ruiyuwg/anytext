Creates a custom route entry in the route table of a VRouter or virtual border router (VBR).

## Operation description

-   **CreateRouteEntry** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeRouteEntryList](/help/en/vpc/api-describerouteentrylist) operation to query the status of the task:
    
    -   If a route is in the **Creating** state, the route is being added.
    -   If a route is in the **Created** state, the route is added.
-   You cannot repeatedly call **CreateRouteEntry** within a specific period of time.
    

**When you call this operation to add a custom route entry to the route table of a vRouter, take note of the following limits:**

**Note** When you add a route entry from a prefix list, the quota usage is calculated by adding the number of existing route entries and the maximum number of route entries of the prefix list.

-   A route table can contain up to 200 custom route entries.
    
-   The destination CIDR block (**DestinationCidrBlock**) of a custom route entry cannot be the same as or be a subset of the CIDR block of a vSwitch in the virtual private cloud (VPC). The destination CIDR block can contain the CIDR block of a vSwitch.
    
-   The destination CIDR block (**DestinationCidrBlock**) of a custom route entry cannot be 100.64.0.0/10 or a subset of it.
    
-   The destination CIDR blocks (**DestinationCidrBlock**) of route entries in the same route table must be unique.
    
-   If you do not include the mask length when you specify the destination CIDR block (**DestinationCidrBlock**), the destination CIDR block is considered a host IP address whose mask length is 32 bits.
    
-   Multiple custom route entries can point to the same next hop (**NextHopId**).
    
-   The next hop (**NextHopId**) of a custom route entry must in the same VPC as the route table.
    
-   Equal-cost multi-path (ECMP) routing can be configured by specifying the **NextHopList** parameter.
    
    -   When you add non-ECMP route entries, you must specify **DestinationCidrBlock**, **NextHopType**, and **NextHopId**, and you must not specify **NextHopList**.
    -   When you add route entries for ECMP routing, you must specify **DestinationCidrBlock** and **NextHopList**, and you must not specify **NextHopType** or **NextHopId**.

**When you call this operation to add a custom route entry to the route table of a VBR, take note of the following limits:**

-   A route table can contain up to 200 custom route entries.
-   **NextHopList** is not supported.
-   The destination CIDR block (**DestinationCidrBlock**) of a custom route entry cannot be 100.64.0.0/10 or a subset of it.
-   The destination CIDR blocks (**DestinationCidrBlock**) of route entries in the same route table must be unique.
-   If you do not include the mask length when you specify the destination CIDR block (**DestinationCidrBlock**), the destination CIDR block is considered a host IP address whose mask length is 32 bits.
-   Multiple custom route entries can point to the same next hop (**NextHopId**).
-   The next hop (**NextHopId**) of a custom route entry must be a router interface associated with the VBR.
-   You can add route entries only when the VBR is in the **Active** state, and the Express Connect circuit associated with the VBR is in the **Enabled** state and is not locked due to overdue payments.
-   Only non-ECMP route entries are supported. When you add non-ECMP route entries, you must specify **DestinationCidrBlock**, **NextHopType**, and **NextHopId**, and you cannot specify **NextHopList**.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateRouteEntry)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateRouteEntry)

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

vpc:CreateRouteEntry

create

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}`

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

No

The region ID of the route table.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

RouteTableId

string

Yes

The ID of the route table to which you want to add a custom route entry.

vtb-bp145q7glnuzd\*\*\*\*

DestinationCidrBlock

string

Yes

The destination CIDR block of the custom route entry. Both IPv4 and IPv6 CIDR blocks are supported. Make sure that the destination CIDR block meets the following requirements:

-   The destination CIDR block is not 100.64.0.0/10 or a subset of 100.64.0.0/10.
-   The destination CIDR block of the custom route entry is different from the destination CIDR blocks of other route entries in the same route table.

192.168.0.0/24

NextHopId

string

No

The ID of the next hop for the custom route.

**Note** [](#-nexthoptype--ecr-describeexpressconnectrouterassociation--associationid--id)If you set the NextHopType parameter to ECR, call the [DescribeExpressConnectRouterAssociation](/help/en/express-connect/developer-reference/api-expressconnectrouter-2023-09-01-describeexpressconnectrouterassociation) operation to access the AssociationId and use it as the next hop ID.

i-j6c2fp57q8rr4jlu\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters.

**Note** If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

RouteEntryName

string

No

The name of the custom route entry that you want to add.

The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

test

Description

string

No

The description of the custom route entry.

The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.

test

NextHopType

string

No

The type of next hop of the custom route entry. Valid values:

-   **Instance**: an Elastic Compute Service (ECS) instance. This is the default value.
-   **HaVip**: a high-availability virtual IP address (HaVip).
-   **RouterInterface**: a router interface.
-   **NetworkInterface**: an elastic network interface (ENI).
-   **VpnGateway**: a VPN gateway.
-   **IPv6Gateway**: an IPv6 gateway.
-   **NatGateway**: a NAT gateway.
-   **Attachment**: a transit router.
-   **VpcPeer**: a VPC peering connection.
-   **Ipv4Gateway**: an IPv4 gateway.
-   **GatewayEndpoint**: a gateway endpoint.
-   **Ecr**: an Express Connect Router (ECR).

Enumeration Value:

-   HaVip: HaVip.
-   VpnGateway: VpnGateway.
-   GatewayLoadBalancerEndpoint: GatewayLoadBalancerEndpoint.
-   VpcPeer: VpcPeer.
-   Instance: Instance.
-   NetworkInterface: NetworkInterface.
-   NatGateway: NatGateway.
-   Attachment: Attachment.
-   Ipv4Gateway: Ipv4Gateway.
-   GatewayEndpoint: GatewayEndpoint.
-   Ecr: Ecr.
-   RouterInterface: RouterInterface.
-   IPv6Gateway: IPv6Gateway.

RouterInterface

NextHopList

array<object>

No

The next hop list.

object

No

The next hop list.

NextHopType

string

No

The type of next hop of the ECMP route entry. Set the value to **RouterInterface**.

RouterInterface

NextHopId

string

No

The ID of the next hop of the ECMP route.

ri-2zeo3xzyf3cd8r4\*\*\*\*

Weight

integer

No

The weight of the next hop of the ECMP route entry.

10

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs only a dry run. The system checks the required parameters, request syntax, and limits. If the request fails, an error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
-   **false** (default): sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.

false

## Response parameters

Parameter

Type

Description

Example

object

The returned information.

RouteEntryId

string

The ID of the custom route entry.

rte-sn6vjkioxte1gz83z\*\*\*\*

RequestId

string

The ID of the request.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RouteEntryId": "rte-sn6vjkioxte1gz83z****",
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IllegalParam.CidrBlock

The specified CidrBlock is illegal.

The operation failed because CidrBlock is set to an invalid value.

400

QuotaExceeded

Route entry quota exceeded in this route table.

The number of route entries in the route table has reached the upper limit.

400

MissingParameter

Miss mandatory parameter.

Some required parameters are not specified. Specify all required parameters and try again.

400

InvalidCidrBlock.Malformed

Specified CIDR block is not valid.

The format of the CIDR block is invalid.

400

InvalidCIDRBlock.Duplicate

Specified CIDR block is already exists.

This CIDR block already exists in the routing table.

400

IncorrectVpcStatus

Current VPC status does not support this operation.

This operation cannot be performed when the VPC is in the current state.

400

IncorrectInstanceStatus

Current instance status does not support this operation.

This operation cannot be performed while the instance is in the current state.

400

IncorrectRouteEntryStatus

Some route entry status blocked this operation.

The operation is not supported because the route table contains routes in the Pending or Modifying state.

400

IncorrectVSwitchStatus

The current virtual switch status does not support this operation.

The error message returned because the vSwitch is in the Pending state and cannot be deleted.

400

InvalidCidrBlock

Specified CIDR block is not valid.

Possible reasons for error reporting: 1. You are not in the whitelist of the 10.0.0.0/8 CIDR block and cannot use this CIDR block. 2. The target CIDR block of the added custom route cannot belong to the CIDR block of all vSwitches under the same VPC. 3. Because 100.64.0.0/10 is a cloud service address, you cannot add this CIDR block to point to the IDC under the cloud. 4. Except for 100.64.0.0/10, the detailed route network segments such as 100.64.0.0/11 and 100.96.0.0/11 cannot be used in the IDC under the cloud.

400

InvalidNextHop.NotFound

Specified next hop does not exist.

The specified next hop does not exist.

400

InvalidVRouter.NotFound

vRouter not exists.

The specified vRouter does not exist. Check whether the specified vRouter is valid.

400

InvalidVPC.NotFound

vpc not exists.

The VPC does not exist. Check whether the specified VPC is valid.

400

InvalidNexthopTypeAndList.BothNull

both nexthopType and nextHopList are null.

NextHopType and NextHopList are not specified.

400

InvalidNexthopTypeAndList.BothNotNull

both nexthopType and nextHopList are not null.

You cannot leave both NextHopType and NextHopList empty.

400

InvalidRouterInterface

invalid router interface.

The specified router interface does not exist.

400

InvalidOppositeRouterType

nexthop list cannot only contain router interface whose opposite router interface is on vbr.

The specified next hop is invalid. The peer router of the router interface that you specify as the next hop must be a VBR.

400

InvalidNexthopListSize

nexthop size is illegal. Must be between 2 and 4.

You must specify two to four router interfaces as next hops.

400

InvalidEntryRuleQuota.NotFound

Route entry quota rule not exists.

The quota rules of route entries do not exist.

400

Forbidden.CheckEntryRuleQuota

Route entry quota rule check error.

An error occurred when the system was checking the quota of route entries.

400

InvalidVBRStatus

invalid virtual border router status.

The VBR is in an invalid state.

400

InvalidPhysicalConnectionBusinessStatus

invalid physical connection business status.

The Express Connect circuit is in an invalid state.

400

InvalidRouterType

Cannot specify nexthop list in vbr's route table.

The specified next hop does not exist in the VBR routing table

400

IncorrectHaVipStatus

This operation is denied because satus of the specified HaVip is neither Available nor InUse.

You cannot perform the operation when the specified HAVIP is in the Available or InUse state.

400

CountLimitExceed.HaVipRouteEntry

The count of route entry to HaVip in one route table is exceeded.

The number of routes that point to the HAVIP in a route table exceeds the upper limit.

400

InvalidRouteEntry.Duplicate

The route entry already exist.

The specified route entry already exists.

400

IncorrectRouteEntryStatus

Specified routeEntry status error.

The operation is not supported because the route table contains routes in the Pending or Modifying state.

400

IncorrectRouteEntryStatus

VBR has NotStable route entry.

The operation is not supported because the route table contains routes in the Pending or Modifying state.

400

InvalidParam

The Ecmp routerEntry with router interfaces local vgw vip not match.

The Ecmp routerEntry with router interfaces local vgw vip not match.

400

INVALID\_WEIGHT\_PARAM

Specified value of weight invalid

The specified weight is invalid.

400

FORBIDDEN\_USE\_VPC\_AS\_INTERNET\_GATEWAY

The Specified CIDR must be in vpc CIDR.

The specified CIDR block must be a subset of the VPC CIDR block.

400

InvalidNexthop

The Specified nexthop illegal.

\-

400

INVALID\_VPC\_ID

The Specified VpcId not match.

The specified VPC does not exist.

400

InvalidRouteEntrySize

The Specified routerEntry size not legal.

You must specify two to four router interfaces as next hops if you want to configure ECMP routing.

400

TaskConflict

The operation is too frequent, please wait a moment and try again.

Your requests are too frequent. Try again later.

400

InvalidRouteEntry

Specified routeEntry not exist.

The specified route entry does not exist.

400

InvalidDestinationCidrBlock

The specified destinationCidrBlock must not included in black list cidr.

\-

400

Forbidden.VRouterNotFound

Specified virtual switch is not found during access authentication.

The specified vSwitch is not found during access authentication.

400

DefaultValidate.Error

validte fail.

\-

400

Region.NotSupport

The specified region does not currently support nextHopType for networkInterface

\-

400

OperationFailed.NotifyCenCreate

Failed to notify cen when create route entry.

\-

400

Forbidden.PrivateIpNotFound

Private ip address not exist.

\-

400

OperationUnsupported.InactiveMode

Vpc multi scope route only support active standby.

\-

400

InvalidRouteEntryName.Malformed

Specified RouteEntry name is not valid.

The new name of the route is invalid.

400

IncorrectStatus.MultiScopeRiRouteEntry

MultiScope ri status must not in idle.

\-

400

OperationUnsupported.MoreThanOneVpnOrHavip

MultiScope can not support more than one vpn/havip.

\-

400

OperationUnsupported.EcmpRiTypeOrNumber

Emcp entry not supported if vpc-vbr or vbr-vlan ri does not exist.

\-

400

Duplicated.VpcNextHop

Route entry nexthop duplicate.

Duplicate next hops are specified.

400

OperationUnsupported.SubRouteTableECMP

Vpc subRouteTable don't support ecmp or multiScope.

\-

400

InvalidNexthop.NotFound

VRouterEntry nexthop does not exist.

\-

400

IllegalParam.NextHopId

Instance not exists or not vpc vm.

\-

400

QuotaExceeded.HaVipRouteEntry

Vpc havip route entry quota exceed.

\-

400

InvalidNexthop.DirectEni

The direct Eni cannot be nexthop.

An ENI in cut-through mode cannot be specified as a next hop.

400

OperationFailed.InvalidNexthop

vpc multi scope route must has a enable nexthop.

\-

400

OperationFailed.NotifyCenDelete

Failed to notify cen when delete route entry.

\-

400

InvalidNatGateway.NotFound

Natgateway not exist.

\-

400

OperationFailed.CxpRouteExist

Cxp route alreay existed.

\-

400

OperationFailed.GetEniInfo

Failed to get networkInterface info.

\-

400

OperationUnsupported.InvalidRouterInterfaceType

Only vpc vbr interface support ecmp route.

\-

400

InvalidHaVip.NotFound

The specified HaVip does not exist in the specified region.

\-

400

OperationFailed.MultiScopeType

The specified nexthop type is not support in multiScope.

\-

400

OperationFailed.DistibuteLock

Distibute lock fail.

The operation is locked by another request;

400

QuotaExceeded.VpnRouteEntry

Vpn route entry quota exceeded.

The system failed to create the route because the number of routes in the VPN gateway route table has reached the upper limit.

400

InvalidAttachment.NotFound

The attachment is not found.

The specified transit router does not exist.

400

OperationFailed.ActiveNetworkInterfaceNotFound

No active network interface is found on the attachment.

No ENI is available on the specified transit router.

400

InvalidNetworkInterface.NotFound

The network interface is not found on the attachment.

No ENI is associated with the specified transit router.

400

OperationFailed.QueryAttachmentInfo

Failed to query attachment information.

The system fails to query the transit router.

400

IllegalParam.AttachmentId

The attachment is invalid.

The specified transit router is invalid.

400

OperationFailed.NotSupportIPV6

The specified next hop does not support IPv6.

The specified next hop does not support IPv6.

400

IncorrectStatus.Ipv6Address

The IPv6 address of the specified next hop is being assigned or deleted.

The IPv6 address that is specified as the next hop is being created or being deleted.

400

OperationUnsupported.Ipv6EntryOnPrimaryNetworkInterface

You cannot create IPv6 route entries on a primary network interface.

You cannot create an IPv6 route whose next hop is a primary ENI.

400

OperationUnsupported.SpecifyIpOnIpv6Entry

You cannot specify the private IP address when you create IPv6 route entries.

You cannot specify a private IPv6 address as the destination CIDR block.

400

OperationUnsupported.MutipleIpv6Address

You cannot specify a next hop that has bound multiple IPv6 addresses.

You cannot specify a next hop that is assigned multiple IPv6 addresses.

400

OperationDenied.Ipv6EntryOnCustomTable

You cannot create any IPv6 route entry on a custom route table.

\-

400

OperationDenied.CloudBoxVbrEntryAllowedInCustomRouteTable

The operation is not allowed because only the custom routing table can add a routing entry with the next hop pointing to the cloud box type VBR.

\-

400

OperationDenied.RouteTableAssociateNotCloudBoxVSwitch

The operation is not allowed because of the routing table is bound to a non-cloud box type vswitch, and routing entries pointing to the cloud box VBR cannot be added.

The operation is not allowed because the route table is associated with a non-CloudBox vSwitch. You cannot add routes that point to VBRs of the CloudBox instance.

400

OperationDenied.VbrMisMatchCloudBox

The operation is not allowed because the routing table is bound to a cloud box vswitch, and routing entries pointing to other cloud box VBRs cannot be added.

The operation failed because the route table is associated with the vSwitch of a CloudBox instance. You cannot add routes that point to VBRs of other CloudBox instances.

400

OperationDenied.VbrIdle

The operation is not allowed because the next hop of the added routing entry is a VBR type RI at the opposite end, which cannot be in an idle state.

The operation failed because the next hop of the added route is a router interface whose peer device is a VBR, and the VBR must not be in the Idle state.

400

OperationDenied.RouterInterfaceToDifferentVpc

The operation is not allowed because the router interface is connected to different VPCs.

The operation failed because the router interfaces point to different VPCs.

400

OperationDenied.RouterInterfaceFromDifferentZones

The operation is not allowed because the router interface resides in different zones.

\-

400

OperationFailed.PconnTrafficNotEnable

The operation is failed because of PconnTrafficNotEnable.

Billing for outbound data transfer is disabled.

400

ResourceNotFound.VpcPeer

The specified resource of %s is not found.

The peer VPC cannot be found.

400

IncorrectStatus.VpcPeer

The status of %s \[%s\] is incorrect.

The status of %s\[%s\] is invalid.

400

OperationDenied.RouteTableTypeNotPermitted

The operation is not allowed because the type of route table is not permitted.

You cannot create routes for route tables of the specified type.

400

OperationDenied.GatewayRouteTableNotPermitted

The operation is not allowed to create a route pointing to this nextHop type on gateway route table.

You cannot create routes that point to instances of this type in the gateway route table.

400

UnsupportedFeature.VpcPeerIpv6

IPv6 route entries for VPC peering connections cannot be created in this region.

The error message returned because the peer of the router interface is a VPC and you cannot create a route whose next hop type is IPv6 address in this region.

400

OperationDenied.VpcIpv6NotEnabled

IPv6 has not been enabled for the VPC.

The error message returned because the VPC does not support IPv6 and the operation is denied.

400

IncorrectStatus.Ipv4Gateway

The status of Ipv4Gateway is incorrect.

The error message returned because the IPv4 gateway is unstable.

400

ResourceNotFound.PrefixList

The specified resource of prefixList is not found.

The prefix list does not exist.

400

UnsupportedFeature.CreatePrefixListEcmpRouteEntry

The feature of creating ecmp route entry with prefixList is not supported.

You cannot create ECMP routes by using a prefix list.

400

OperationDenied.RouterInterfaceIpv6NotEnabled

Routerinterface does not support IPv6.

The operation failed because the router interface does not support IPv6.

400

OperationDenied.NextHopTypeNotPermitted

The operation is not allowed because the nextHop type is invalid.

You are not allowed to create a route whose next hop is of this type.

400

ResourceAlreadyAssociated.PrefixList

The operation failed because the specified prefixList route entry already exists.

The operation failed because the prefix list route already exists.

400

OperationFailed.CidrConflictWithPrefixList

The specified CIDR block already exists in a prefixList route entry.

The route conflicts with an existing prefix list route.

400

ResourceNotFound.Ipv4Gateway

Specified Ipv4Gateway does not exist.

The specified IPv4 gateway is not found.

400

Mismatch.HaVipIdAndRouteTableId

The HaVip and RouteTable are mismatched.

The specified HAVIP and route table do not belong to the same VPC.

400

OperationFailed.OperationLocked

The operation failed because the nextHop instance is in the O&M lock state.

The operation failed because the next hop instance is locked for O&M.

400

Mismatch.Ipv4GatewayIdAndRouteTableId

The specified IPv4Gateway and RouteTable are not matched.

The operation failed because the IPv4 gateway and route table do not belong to the same VPC.

400

OperationUnsupported.DestinationCidrBlockOverlapWithVSwitch

The destination IPv6 network segment specified in the route entry overlaps with the vSwitch network segment.

The error message returned because the destination IPv6 CIDR block of the route overlaps with the vSwitch CIDR block.

400

ResourceNotAssociated.Cen

The Vpc and Cen are not associated.

Failed to attach the VPC to the CEN instance.

400

IncorrectStatus.CenRelation

The status of Vpc in Cen is incorrect.

The operation failed because the VPC attached to the CEN instance is in an unstable state.

400

OperationDenied.CenTypeInvalid

The operation is not allowed because of Cen type is invalid..

You cannot add a route that points to a CEN instance of this type to the route table.

400

ResourceNotFound.Cen

The specified resource of Cen is not found.

The operation failed because the CEN resources do not exist.

400

ResourceNotFound.NetworkInterface

The specified resource of network interface is not found.

The specified ENI does not exist.

400

RouteConflict.AlreadyExist

Route conflict exists in routing table.

Route conflicts exist in the route table.

400

IncorrectStatus.RouterInterface

The specified RouterInterface status is invalid.

The router interface status is abnormal.

400

InvalidNexthop.UnsupportedEniBizType

The biz type of NetworkInterface is illegal.

The biz type of NetworkInterface as the nexthop is illegal.

400

OperationDenied.RouterInterfaceIpv6

RouterInterface does not support IPv6.

RouterInterface does not support IPv6.

400

InvalidNextHopType

Specified parameter "NextHopType" is not valid.

Specified parameter "NextHopType" is not valid.

400

OperationDenied.VbrAttachEcrInMiddleStatus

The operation is not allowed because of VBR attach or detach ECR in middle status.

The current operation cannot be performed because the VBR is in the process of loading or unloading the leased line gateway. Please wait a moment and try again.

400

ResourceNotAssociated.Ecr

The ECR is not associated.

The current resource is not associated with ECR and cannot perform this operation. Please check and try again.

400

UnsupportedFeature.RouterInterfaceIpv6

The feature of ipv6 is not supported for the routerInterface.

The router interface does not support ipv6

400

InvalidVpnInstanceId.NotFound

The specified VPN was not found.

\-

400

OperationFailed.ScopeActiveRouteEntryType

Operation failed because the type of the active route entry is not supported.

\-

400

OperationFailed.ScopeStandbyRouteEntryQuota

Operation failed because the quota for standby route entries in the scope has been exceeded.

\-

400

OperationFailed.ScopeActiveRouteEntryQuota

Operation failed because the quota for active route entries in the scope has been exceeded.

\-

400

OperationUnsupported.ScopeInvalidRouteType

The specified route type is unsupported.

\-

400

OperationFailed.EcmpInvalidRouterInterfaceOppositeType

Operation failed because the opposite type of the router interface is invalid for ECMP configuration.

\-

400

OperationUnsupported.Ipv6EcmpRouteEntry

The EcmpRouteEntry is not supported for IPv6.

\-

400

OperationUnsupported.Ipv6CidrBlock

The specified IPv6 CIDR block is unsupported.

\-

400

OperationUnsupported.Ipv6ForVBR

IPv6 route entry is not supported for VirtualBorderRouter.

\-

400

IncorrectStatus.RouteTableStatus

The status of the specified RouteTable is incorrect.

\-

400

OperationFailed.InvalidNextHopType

Operation failed because Ecmp routeEntry has more than one ri entry and can only support one non-ri entry.

The system failed to create the route because the next hop of an ECMP route must not be a router interface.

400

UnsupportedRegion

The feature is not supported in current region.

The feature is not supported in the current region.

400

UnsupportedFeature.VpcAdvancedFeature

The VPC does not support some advanced features.

The VPC does not support some advanced features. Please submit a ticket.

400

OperationDenied.CreateEcmpForPublishedRouteEntry

Operation denied because of can not create EcmpRouteEntry for published RouteEntry.

The published route does not support the creation of primary and secondary routes or load balancing routes.

400

OperationDenied.TrAttachmentIpv6Disabled

The operation is not allowed because tr attachment Ipv6 is disabled.

The operation is not allowed because tr attachment Ipv6 is disabled.

400

Mismatch.EniIdAndRouteTableId

The operation is not allowed because eni and route table not in same vpc.

The operation is not allowed because eni and route table not in same vpc.

400

InvalidDescription.Malformed

The Description is illegal.

\-

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The specified resource is in a state that does not support the operation.

404

InvalidParameter

Instance not exists or not vpc vm

\-

404

InvalidNatGatewayId.NotFound

Specified value of NatGatewayId is not found in our record.

\-

404

InvalidInstanId.NotFound

Specified instance does not exist.

The specified instance does not exist.

404

InvalidNextHopId.NotFound

Specified next hop does not exist.

The next hop does not exist.

404

InvalidRouteTableId.NotFound

Specified route table does not exist.

The specified route table does not exist.

404

InvalidHaVipId.NotFound

The specified HaVip does not exist in the specified VPC.

The specified HAVIP does not exist in the VPC.

404

InvalidNetworkInterface.NotFound

The specified networkInterface does not exist.

\-

404

InvalidVpc.NotFound

Specified vpc is not found in our record.

\-

404

OperationFailed.InstanceDismatchCurrentVpc

The specified instance does not exist in current vpc.

The specified instance does not exist in the VPC.

404

InvalidIpv6Gateway.NotFound

Specified Ipv6Gateway does not exist.

\-

404

ResourceNotFound.GatewayLoadBalancerEndpoint

GatewayLoadBalancerEndpoint instance not found.

GatewayLoadBalancerEndpoint instance not found.

500

VPC.ERROR

error code 500,Internal server error.

\-

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2025-12-12#workbench-doc-change-demo)

2025-05-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2025-05-19#workbench-doc-change-demo)

2025-01-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2025-01-14#workbench-doc-change-demo)

2024-12-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-12-31#workbench-doc-change-demo)

2024-09-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-09-13#workbench-doc-change-demo)

2024-09-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-09-03#workbench-doc-change-demo)

2024-08-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-08-23#workbench-doc-change-demo)

2024-08-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-08-12#workbench-doc-change-demo)

2024-06-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-06-19#workbench-doc-change-demo)

2024-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-06-13#workbench-doc-change-demo)

2024-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-04-02#workbench-doc-change-demo)

2024-03-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-03-25#workbench-doc-change-demo)

2024-01-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2024-01-04#workbench-doc-change-demo)

2023-09-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2023-09-25#workbench-doc-change-demo)

2023-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2023-09-01#workbench-doc-change-demo)

2023-07-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2023-07-25#workbench-doc-change-demo)

2023-06-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2023-06-25#workbench-doc-change-demo)

2023-06-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2023-06-21#workbench-doc-change-demo)

2023-06-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2023-06-16#workbench-doc-change-demo)

2023-06-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteEntry?updateTime=2023-06-09#workbench-doc-change-demo)
