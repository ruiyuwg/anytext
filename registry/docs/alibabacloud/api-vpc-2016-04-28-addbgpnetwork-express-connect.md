Advertises a Border Gateway Protocol (BGP) network.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AddBgpNetwork)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AddBgpNetwork)

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

vpc:AddBgpNetwork

get

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

The region ID of the virtual border router (VBR) group.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

DstCidrBlock

string

Yes

The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.

10.10.XX.XX/32

VpcId

string

No

The ID of the VPC.

vpc-bp1qpo0kug3a2\*\*\*\*\*

RouterId

string

Yes

The ID of the router that is associated with the router interface.

vrt-2zeo3xzyf38r4u\*\*\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

9C7FA9D6-72E0-48A9-A9C3-2DA8569CD5EB

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "9C7FA9D6-72E0-48A9-A9C3-2DA8569CD5EB"
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

QuotaExceeded.Nqa

nqa count per vbr quota exceed.

The number of Network Quality Analyzers (NQAs) has reached the upper limit that is supported by the VBR.

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

parameter must not null.

A required parameter is not specified.

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

QuotaExceeded.Bgp

bgp group count per vbr quota exceed.

The number of BGP groups in the VBR has reached the upper limit.

400

Duplicated.CidrBlock

bgp network cidr already exists.

\-

400

InvalidIP.IpInSnatPool

Multi ip in snat pool cannot remove ip from bandwidth package.

\-

400

InvalidDestCidrBlock.Malformed

Specified dstCidrBlock is not valid.

\-

400

IllegalParam.ConflictWithDClass

DClass IP can not support.

\-

400

OperationFailed.PconnTrafficNotEnable

The operation is failed because of PconnTrafficNotEnable.

Billing for outbound data transfer is disabled.

400

OperationFailed.NoActiveRouterInterface

there's not active routerInterface,cannot add bgp network.

\-

400

IllegalParamFormat.DstCidrBlock

The format of the specified destination CIDR block is invalid.

The error message returned because the format of the destination CIDR block is invalid.

400

IllegalParam.IpVersion

The parameter of IpVersion is illegal.

\-

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-10-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AddBgpNetwork?updateTime=2025-10-17#workbench-doc-change-demo)

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AddBgpNetwork?updateTime=2025-03-19#workbench-doc-change-demo)

2024-07-29

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AddBgpNetwork?updateTime=2024-07-29#workbench-doc-change-demo)
