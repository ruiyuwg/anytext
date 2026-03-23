Adds a Border Gateway Protocol (BGP) peer to a BGP group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateBgpPeer)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateBgpPeer)

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

vpc:CreateBgpPeer

create

\*VirtualBorderRouter

`acs:vpc:{#regionId}:{#accountId}:virtualborderrouter/{#VirtualBorderRouterId}`

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

The ID of the region to which the BGP group belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

BgpGroupId

string

Yes

The ID of the BGP group.

bgpg-wz9f62v4fbg\*\*\*\*

PeerIpAddress

string

No

The IP address of the BGP peer.

116.62.XX.XX

EnableBfd

boolean

No

Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature. Valid values:

-   **true**: enables BFD.
-   **false**: disables BFD.

true

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not set this parameter, the system uses the value of **RequestId** as **ClientToken**. The value of **RequestId** for each API request is different.

123e4567-e89b-12d3-a456-426655440000

IpVersion

string

No

The IP version. Valid values:

-   **IPv4**: This is the default value.
-   **IPv6**: IPv6 is supported only if the VBR for which you want to create the BGP group has IPv6 enabled.

IPv4

BfdMultiHop

integer

No

The BFD hop count. Valid values: **1** to **255**.

This parameter is required only if you enable BFD. The parameter specifies the maximum number of network devices that a packet can traverse from the source to the destination. Set a value based on your network topology.

**Note** If you use BFD in a multi-cloud environment or a fiber-optic direct connection network without any bridge device, you need to change the default BFD hop count from **255** to **1**.

3

## Response parameters

Parameter

Type

Description

Example

object

BgpPeerId

string

The ID of the BGP peer.

bgp-m5eoyp2mwegk8ce9v\*\*\*\*

RequestId

string

The ID of the request.

D4B7649A-61BB-4C64-A586-1DFF1EDA6A42

## Examples

Sample success responses

`JSON`format

```
{
  "BgpPeerId": "bgp-m5eoyp2mwegk8ce9v****",
  "RequestId": "D4B7649A-61BB-4C64-A586-1DFF1EDA6A42"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

QuotaExceeded.Bgp

bgp peer count per vbr quota exceed.

The number of BGP peers in the VBR has reached the upper limit.

400

QuotaExceeded.Bgp

bgp group count per vbr quota exceed.

The number of BGP groups in the VBR has reached the upper limit.

400

QuotaExceeded.Nqa

nqa count per vbr quota exceed.

The number of Network Quality Analyzers (NQAs) has reached the upper limit that is supported by the VBR.

400

InvalidAccessDeviceId.NotFound

There is no Access\_Device\_Id in our records

\-

400

QuotaExceeded.BfdSession

Your Bfd Session number reaches the upper limit.

\-

400

QuotaExceeded.BfdSession

The Bfd Session on device reaches the upper limit.

\-

400

QuotaExceeded.BgpNetwork

bgp network count per vbr quota exceed.

The number of BGP networks in the VBR has reached the upper limit.

400

InvalidPeerIpAddress

multi pconn peer ip can not be null.

The IP addresses of multiple Express Connect circuits cannot be empty.

400

InvalidVbrNetwork

vbr netowrk not exists

The VBR does not exist. Check the VBR ID.

400

InvalidBgpGroup

bgp group not exists

The BGP group does not exist.

400

InvalidBgpName.Malformed

Specified Bgp Group name is not valid.

The name of the BGP group is invalid.

400

InvalidBgpDiscription.Malformed

Specified Bgp Group description is not valid.

The description of the BGP group is invalid.

400

InvalidBgpAuthkey.Malformed

Specified Bgp Group authkey is not valid.

The authentication key of the BGP group is invalid.

400

InvalidIP.Malformed

Ip malformed.

The format of the IP address is invalid.

400

InvalidPeerAsn.Malformed

invalid peer asn cannot equals aliyun asn:45104

The AS number cannot be the same as the AS number on the Alibaba Cloud side.

400

InvalidParams.NotNull

invalid peer asn cannot equals aliyun asn:45104

The AS number cannot be the same as the AS number on the Alibaba Cloud side.

400

InvalidParams.NotFound

instance not found

The specified instance does not exist.

400

InvalidParams.NotFound

vpc instance not found

The VPC does not exist. Check whether the specified VPC is valid.

400

InvalidParams.AlreadyExists

bgp network already exists

The BGP network already exists.

400

InvalidStatus.CannotOperate

invalid status cannot operate

You cannot perform the operation when the specified resource is in the current state.

400

InvalidParams.PeerIpAddressMustPointOut

vbr has 0 or more than 1 subif ,point out peerIpAddress.

You must set the PeerIpAddress parameter.

400

InvalidParams.PeerIpAddressInUse

peer ip address in use ,cannot create bgp peer.

The peer IP address is being used. Therefore, you cannot use it to create a BGP peer.

400

BgpPeer.Already.Exists

bgp peer already exists.

\-

400

MissingParam.EnableBfd

The parameter EnableBfd is missing.

\-

400

OperationUnsupported.IPV6ForThisRegion

This Region is unsupported IPV6.

\-

400

IllegalParam.BfdMultiHop

BfdMultiHop is illegal.

\-

400

OperationFailed.PconnTrafficNotEnable

The operation is failed because of PconnTrafficNotEnable.

Billing for outbound data transfer is disabled.

400

UnsupportedFeature.Vpconn

The feature of Vpconn is not supported.

The Express Connect circuit type is not supported.

400

DuplicatedParam.PeerIpAddress

The param of PeerIpAddress is duplicated.

Duplicate IP addresses of BGP peers exist.

400

DuplicatedParam.LocalIpAddress

The LocalIpAddress already exists.

The error message returned because you specified a duplicate local IP address. Change the local IP address and try again.

400

DuplicatedParam.PeerIpv6Address

The PeerIpv6Address already exists.

The error message returned because you specified a duplicate peer IP address. Change the peer IP address and try again.

400

DuplicatedParam.LocalIpv6Address

The LocalIpv6Address already exists.

The error message returned because you specified a duplicate local IP address. Change the local IP address and try again.

400

IllegalParam.LocalGatewayIpAndMask

The LocalGatewayIpAndMask value is invalid.

The error message returned because the IP address of the local gateway and the subnet mask are invalid. Specify a valid IP address and subnet mask and try again.

400

IllegalParam.PeeringIpv6SubnetMask

The PeeringIpv6SubnetMask value is invalid.

The error message returned because the subnet mask is invalid. Specify a valid subnet mask and try again.

400

IllegalParam.IpVersion

The param of IPV6 is illegal.

The parameter IpVersion is abnormal. Please check the parameter and try again.

400

IllegalParam.PeerIpAddress

The param of PeerIpAddress is illegal.

The peer IP address is invalid.

404

InvalidRegionId.NotFound

Specified value of "regionId" is not supported.

RegionId is set to an invalid value. Check whether the service is available in the specified region and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateBgpPeer?updateTime=2025-03-19#workbench-doc-change-demo)

2024-08-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateBgpPeer?updateTime=2024-08-16#workbench-doc-change-demo)

2022-06-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateBgpPeer?updateTime=2022-06-09#workbench-doc-change-demo)
