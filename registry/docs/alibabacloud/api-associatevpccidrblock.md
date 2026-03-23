Adds a secondary CIDR block to a virtual private cloud (VPC).

## Operation description

## [](#)[](#)

-   Take note of the following limits:
    
    -   Each VPC can contain up to five secondary IPv4 CIDR blocks.
    -   Each VPC can contain up to five secondary IPv6 CIDR blocks.
-   You cannot repeatedly call the **AssociateVpcCidrBlock** operation to add secondary CIDR blocks to a VPC within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AssociateVpcCidrBlock)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AssociateVpcCidrBlock)

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

vpc:AssociateVpcCidrBlock

create

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VpcId}`

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

The region ID of the VPC to which you want to add a secondary CIDR block.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the region ID.

ch-hangzhou

VpcId

string

Yes

The ID of the VPC to which you want to add a secondary CIDR block.

vpc-o6wrloqsdqc9io3mg\*\*\*\*

SecondaryCidrBlock

string

No

The IPv4 CIDR block to be added. Take note of the following requirements:

-   You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
-   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.

The CIDR block must meet the following requirements:

-   The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
-   The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.

**Note** You must and can specify only one of **SecondaryCidrBlock** and **Ipv6CidrBlock**.

192.168.0.0/16

SecondaryCidrMask

integer

No

Add an IPv4 CIDR block from the IPAM pool to the VPC by specifying a mask.

**Note** If you use an IPAM pool, you must specify at least one of SecondaryCidrBlock and SecondaryCidrMask.

16

IPv6CidrBlock

string

No

The IPv6 CIDR block that you want to add to the VPC.

**Note** You can specify only one of **SecondaryCidrBlock** and **Ipv6CidrBlock**.

2408:XXXX:0:6a::/56

Ipv6Isp

string

No

The type of the IPv6 CIDR block. Valid values:

-   **BGP** (default)
-   **ChinaMobile**
-   **ChinaUnicom**
-   **ChinaTelecom**

**Note** If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to **ChinaTelecom**, **ChinaUnicom**, or **ChinaMobile**.

BGP

IpVersion

string

No

The version of the IP address. Valid values:

-   **IPV4**: the IPv4 address.
-   **IPV6**: the IPv6 address. If you set **IpVersion** to **IPV6** and do not specify **SecondaryCidrBlock**, you can add a secondary IPv6 CIDR block to the VPC.

IPV4

IpamPoolId

string

No

The ID of the IPAM pool.

ipam-pool-sycmt3p2a9v63i\*\*\*\*

Ipv6CidrMask

integer

No

Add an IPv6 CIDR block from the IPAM pool to the VPC by entering a mask.

**Note** To add an IPv6 CIDR block to a VPC, specify at least one of the IPv6CidrBlock and Ipv6CidrMask parameters.

56

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

C1221A1F-2ACD-4592-8F27-474E02883159

CidrBlock

string

The IPv4 CIDR block to be added.

192.168.0.0/16

IpVersion

string

The version of the IP address. Valid values:

-   **IPV4**: the IPv4 address.
-   **IPV6**: the IPv6 address.

IPV4

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C1221A1F-2ACD-4592-8F27-474E02883159",
  "CidrBlock": "192.168.0.0/16",
  "IpVersion": "IPV4"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidVpc.NotFound

%s

\-

400

IncorrectStatus.Vpc

%s

\-

400

ParamExclusive.SecondaryCidrAndIpv6Cidr

%s

\-

400

OperationUnsupported.VpcMultiCidr

%s

\-

400

MissingParam.SecondaryCidrOrIpv6Cidr

%s

\-

400

OperationUnsupported.IPv6ULA

%s

\-

400

OperationFailed.Ipv6CidrBlockExisted

%s

\-

400

InvalidIpv6ULACidrBlock.Malformed

%s

\-

400

QuotaExceeded.GUAIpv6CidrBlock

%s

\-

400

IllegalParam.Ipv6CidrType

%s

\-

400

OperationUnsupported.OnlyULA

%s

\-

400

InvalidCidrBlock.Malformed

Specified CIDR block is not valid.

The format of the CIDR block is invalid.

400

IllegalParam.SecondaryCidrBlock

%s

\-

400

Duplicated.SecondaryCidrBlock

%s

\-

400

OperationFailed.ConflictWithEntry

%s

\-

400

QuotaExceeded.VpcMultiCidr

%s

\-

400

MissingParam.SecondaryCidrBlockOrIpv6CidrBlock

Either SecondaryCidrBlock or Ipv6CidrBlock must be specified.

The secondary CIDR block or the IPv6 CIDR block is not specified.

400

MissingParam.VpcId

You must specify VpcId.

You must specify VpcId.

400

UnsupportedFeature.Ipv6Isp

The Ipv6Isp feature is not supported.

The specified IPv6 ISP is not supported.

400

IllegalParam.IpVersion

%s

\-

400

OperationDenied.GUAIpv6CidrBlock

The operation is not allowed because this ipv6 CIDR is not reserved.

\-

400

OperationFailed.IPv6CidrNotReserved

Operation failed because this ipv6 cidr is not reserved.

\-

400

InvalidCidrBlock

Specified CIDR block is already exists.

The vSwitch CIDR block overlaps with another vSwitch CIDR block or with the destination CIDR block of a custom route entry. Try a different CIDR block that is not in use.

400

IllegalParam.IpamPool

The specified IPAM pool cannot be empty.

The IPAM pool cannot be empty.

400

MissingParam.SecondaryCidrMask

The parameter SecondaryCidrMask must be input.

SecondaryCidrMask is required.

400

IllegalParam.SecondaryCidrMask

The specified Secondary CIDR Mask is illegal.

Invalid SecondaryCidrMask.

400

OperationDenied.RequestRegionInvalid

The operation is not allowed because the request is not invoked in the region of the IPAM pool.

The operation is not allowed because the request is not invoked in the region of the IPAM pool.

400

OperationDenied.IpamPoolNotInRegion

The operation is not allowed because the IPAM pool not in specific region does not support creating VPC or associating CIDR for VPC.

The operation is not allowed because the IPAM pool not in specific region does not support creating VPC or associating CIDR for VPC.

400

MissingParam.CidrOrCidrMask

The CIDR or CIDR Mask must be input.

The CIDR or CIDR Mask must be input.

400

OperationDenied.CidrInExcludeCidrs

The operation is not allowed because the input CIDR is within the illegal CIDRs.

The operation is not allowed because the input CIDR is within the illegal CIDRs.

400

OperationDenied.AvailableCidrInsufficient

The operation is not allowed because available CIDR is insufficient.

The operation is not allowed because available CIDR is insufficient.

400

UnsupportedFeature.Ipam

IPAM is not supported in this region.

The IPAM feature is not supported in this region.

400

UnsupportedFeature.VpcIpamIpv6

The specified IPAM pool does not support the IPv6 feature.

The specified IPAM pool does not support the IPv6 feature.

400

OperationDenied.CidrUnavailableInPool

The operation is not allowed because the CIDR is unavailable in the IPAM pool.

The operation is not allowed because the CIDR is unavailable in the IPAM pool.

400

InvalidIpv6CidrBlock.Malformed

Param Ipv6CidrBlock is malformed.

IPv6 network segment is illegal

400

MissingParam.IpVersion

The parameter IpVersion is missing.

The parameter IpVersion is missing.

400

Mismatch.IpVersionAndIpamPoolIpVersion

The input IpVersion is inconsistent with the IpVersion of the input IPAM pool.

The input IpVersion is inconsistent with the IpVersion of the input IPAM pool.

400

IllegalParam.Ipv6CidrBlock

The parameter of Ipv6CidrBlock is illegal.

\-

400

OperationFailed.Ipv6CidrBlockOverLapped

The input IPv6 CIDR block overlaps with the existing ones.

The input IPv6 CIDR block overlaps with the existing ones.

400

QuotaExceeded.IPv6CidrBlock

The number of IPv6 CIDR blocks in the VPC exceeds the limit.

The number of IPv6 CIDR blocks in the VPC exceeds the limit.

400

OperationDenied.MaskOfCidrIsNotAllowed

The input mask or mask of the input CIDR is not allowed.

The input mask or mask of the input CIDR is not allowed.

400

IllegalParam.Ipv6Isp

The specified Ipv6Isp is illegal.

The specified Ipv6Isp is illegal.

400

IllegalParam.CidrMask

The input CIDR mask is illegal.

The input CIDR mask is illegal.

403

Forbbiden

User not authorized to operate on the specified resource.

User not authorized to operate on the specified resource.

404

ResourceNotFound.IpamPool

The dependent IPAM pool is not found.

The dependent IPAM pool is not found.

500

OperationFailed.ResourceNotEnough

Insufficient resources.

The resources that you request are insufficient. If you still want to request the resources, submit a ticket.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-16

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2025-01-16#workbench-doc-change-demo)

2024-12-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2024-12-30#workbench-doc-change-demo)

2024-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2024-12-18#workbench-doc-change-demo)

2024-08-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2024-08-28#workbench-doc-change-demo)

2024-05-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2024-05-21#workbench-doc-change-demo)

2024-04-25

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2024-04-25#workbench-doc-change-demo)

2023-08-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2023-08-24#workbench-doc-change-demo)

2023-04-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2023-04-14#workbench-doc-change-demo)

2023-04-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateVpcCidrBlock?updateTime=2023-04-13#workbench-doc-change-demo)
