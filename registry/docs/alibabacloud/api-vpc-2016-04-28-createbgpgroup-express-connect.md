Creates a BGP group for a virtual border router (VBR).

## Operation description

You can connect a VBR to a data center through BGP. Each BGP group is associated with a VBR. You can add a BGP peer that needs to communicate with a VBR to a BGP group and advertise the BGP network in the VBR.

BGP groups are used to simplify BGP configurations. You can add BGP peers that use the same configurations to one BGP group. Before you start, you must create a BGP group with the requested autonomous system number (ASN).

When you call this operation, take note of the following limits:

-   You can specify only the data center that is connected to the VBR through an Express Connect circuit as a BGP peer.
-   VBRs support only BGP-4.
-   You can create at most eight BGP peers for each VBR.
-   Each BGP peer supports at most 110 dynamic routes.
-   The ASN of Alibaba Cloud is 45104. You can specify a 2-byte or 4-byte ASN for the data center.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateBgpGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateBgpGroup)

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

vpc:CreateBgpGroup

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

The region ID of the VBR.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

RouterId

string

Yes

The ID of the VBR.

vbr-bp1ctxy813985gkuk\*\*\*\*

Name

string

No

The name of the BGP group.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

test

Description

string

No

The description of the BGP group.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

BGP

LocalAsn

long

No

The custom ASN on the Alibaba Cloud side. Valid values:

-   **45104**
-   **64512~65534**
-   **4200000000~4294967294**

**Note** **65025** is reserved by Alibaba Cloud. By default, Alibaba Cloud uses **45104** as **LocalAsn**. If you use custom **LocalAsn** in multi-line access scenarios, loops in BGP may occur.

45104

PeerAsn

long

Yes

The ASN of the gateway device in the data center.

1\*\*\*\*

AuthKey

string

No

The authentication key of the BGP group.

!PWZ2\*\*\*\*

IsFakeAsn

boolean

No

Specifies whether to use a fake ASN. Valid values:

-   **false** (default)
-   **true**

**Note** A router that runs BGP typically belongs to only one AS. If you need to replace an existing AS with a new AS and you cannot immediately modify BGP configurations, you can use fake ASNs to ensure service continuity.

true

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

IpVersion

string

No

The IP version. Valid values:

-   **IPv4**: This is the default value.
-   **IPv6**: IPv6 is supported only if the VBR for which you want to create the BGP group has IPv6 enabled.

IPv4

RouteQuota

integer

No

The maximum number of routes supported by a BGP peer. Default value: **110**.

110

## Response parameters

Parameter

Type

Description

Example

object

The ID of the BGP group.

BgpGroupId

string

The ID of the BGP group.

bgpg-bp1k25cyp26cllath\*\*\*\*

RequestId

string

The request ID.

C1221A1F-2ACD-4592-8F27-474E02883159

## Examples

Sample success responses

`JSON`format

```
{
  "BgpGroupId": "bgpg-bp1k25cyp26cllath****",
  "RequestId": "C1221A1F-2ACD-4592-8F27-474E02883159"
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

InvalidBgpDescription.Malformed

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

params must not null.

The parameter is required.

400

InvalidBgpGroup.LocalAsnInvalid

The specified BgpGroup LocalAsn is invalid, only support 64512 to 65534 or 4200000000 to 4294967294, but cannot be 65025.

The local ASN of the BGP group is invalid. You must set a value from 64512 to 65534 or from 420000000 to 429496729.

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

IllegalParam.PeerAsn

The param of PeerAsn is illegal

The PeerAsn parameter is set to an invalid value.

400

IllegalParam.LocalAsn

The param of LocalAsn is illegal

The LocalAsn parameter is set to an invalid value.

400

OperationFailed.PconnTrafficNotEnable

The operation is failed because of PconnTrafficNotEnable.

Billing for outbound data transfer is disabled.

400

OperationUnsupport

Operation is unsupport, not in vbr support custom local asn white list.

The operation is not supported.

400

IllegalParam.RouteLimit

The operation is failed because of bgp group max route entry num quota exceed.

The number of routes that can be received by each BGP peer in the BGP group exceeds the upper limit.

404

InvalidRegionId.NotFound

The specified RegionId is not found.

The specified region ID is invalid. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateBgpGroup?updateTime=2024-08-16#workbench-doc-change-demo)

2024-06-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateBgpGroup?updateTime=2024-06-19#workbench-doc-change-demo)

2024-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateBgpGroup?updateTime=2024-06-13#workbench-doc-change-demo)

2024-04-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateBgpGroup?updateTime=2024-04-19#workbench-doc-change-demo)
