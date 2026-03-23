Creates a virtual private cloud (VPC).

## Operation description

When you call this operation, take note of the following items:

-   You can specify only one CIDR block for each VPC.
    
-   After you create a VPC, you cannot change its CIDR block. However, you can add secondary IPv4 CIDR blocks to the VPC.
    
-   In each VPC, cloud services can use a maximum of 60,000 private IP addresses. You cannot increase the quota.
    
-   After you create a VPC, a vRouter and a route table are automatically created.
    
-   At most three user CIDR blocks can be added to a VPC. If a user CIDR block includes another user CIDR block, the one with the shorter subnet mask takes effect. For example, if both 10.0.0.0/8 and 10.1.0.0/16 are specified, only 10.0.0.0/8 takes effect.
    
-   **CreateVpc** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeVpcAttribute](/help/en/vpc/api-describevpcattribute) operation to query the status of the task:
    
    -   If the VPC is in the **Creating** state, the VPC is being created.
    -   If the VPC is in the **Created** state, the VPC is created.
-   You cannot repeatedly call the **DeleteRouteEntry** operation to create default VPCs within a specific time period. However, you can repeatedly call this operation to create custom VPCs within a specific time period.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateVpc)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateVpc)

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

vpc:CreateVpc

create

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/*`

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

The ID of the region to which the VPC belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

CidrBlock

string

No

The CIDR block of the VPC.

-   We recommend using the private IPv4 address specified in RFC 1918 as the primary IPv4 CIDR block of the VPC with a recommended mask length of 16 to 28 bits. For example, 10.0.0.0/16, 172.16.0.0/16, and 192.168.0.0/16.
-   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the primary IPv4 CIDR block.

172.16.0.0/12

Ipv6CidrBlock

string

No

The IPv6 CIDR block of the VPC. If you enable IPv6 for a VPC, the system allocates an IPv6 CIDR block. To specify an IPv6 CIDR block, you must call the [AllocateVpcIpv6Cidr](/help/en/vpc/developer-reference/api-vpc-2016-04-28-allocatevpcipv6cidr) operation to reserve the specified IPv6 CIDR block.

2408:XXXX:0:6a::/56

VpcName

string

No

The name of the VPC.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

abc

EnableIpv6

boolean

No

Indicates whether IPv6 is enabled. Valid values:

-   **false** (default): disabled.
-   **true**: enabled.

false

Description

string

No

The description of the VPC.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

This is my first Vpc

ResourceGroupId

string

No

The ID of the resource group.

For more information about resource groups, see [What is a resource group?](/help/en/resource-management/product-overview/what-is-resource-management)

rg-acfmxazb4ph6aiy\*\*\*\*

Tag

array<object>

No

The tag of the resource.

object

No

Key

string

No

The key of tag N to add to the resource. You can specify at most 20 tag keys. The tag key cannot be an empty string.

The tag key can be at most 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length, but cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

DryRun

boolean

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

UserCidr

string

No

The user CIDR block. Separate user CIDR blocks with commas (,). You can specify up to three user CIDR blocks.

For more information about user CIDR blocks, see the `What is a user CIDR block?` section in [VPC FAQ](/help/en/vpc/frequently-asked-questions).

192.168.0.0/12

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

Ipv6Isp

string

No

The type of the IPv6 CIDR block of the VPC. Valid values:

-   **BGP** (default)
-   **ChinaMobile**
-   **ChinaUnicom**
-   **ChinaTelecom**

**Note** If you are allowed to use single-ISP bandwidth, you can set the value to **ChinaTelecom**, **ChinaUnicom**, or **ChinaMobile**.

BGP

Ipv4IpamPoolId

string

No

The ID of the IP Address Manager (IPAM) pool of the IPv4 type.

ipam-pool-sycmt3p2a9v63i\*\*\*\*

Ipv4CidrMask

integer

No

Allocate VPC from the IPAM address pool by inputting a mask.

**Note** When creating a VPC with a specified IPAM address pool, at least one of the parameters CidrBlock or Ipv4CidrMask must be provided.

12

EnableDnsHostname

boolean

No

Whether to enable the DNS hostname feature. Values:

-   **false** (default): Not enabled.
-   **true**: Enabled.

false

Ipv6IpamPoolId

string

No

The ID of the IP Address Manager (IPAM) pool of the IPv6 type.

ipam-pool-bp1aq51kkfh477z03\*\*\*\*

Ipv6CidrMask

integer

No

Add an IPv6 CIDR block from the IPAM pool to the VPC by entering a mask.

56

## Response parameters

Parameter

Type

Description

Example

object

The ID of the created VPC.

VpcId

string

The ID of the created VPC.

vpc-bp15zckdt37pq72zv\*\*\*\*

VRouterId

string

The ID of the vRouter that is automatically created by the system after the VPC is created.

vrt-bp1lhl0taikrteen8\*\*\*\*

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

RouteTableId

string

The ID of the route table that is automatically created by the system after the VPC is created.

vtb-bp145q7glnuzdv\*\*\*\*

ResourceGroupId

string

The resource group ID.

rg-acfmxazb4ph6aiy\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "VpcId": "vpc-bp15zckdt37pq72zv****",
  "VRouterId": "vrt-bp1lhl0taikrteen8****",
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0",
  "RouteTableId": "vtb-bp145q7glnuzdv****",
  "ResourceGroupId": "rg-acfmxazb4ph6aiy****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

TOKEN\_PROCESSING

Action is processing.

\-

400

InvokeError

instance quota rule invoke error.

Failed to get rule data, please wait zai shi

400

InvalidParameter

Specified CIDR block is not valid

The specified CIDR block is invalid.

400

ResourceNotAvailable

Resource you requested is not available in this region or zone.

You cannot create a vSwitch in the current region or zone.

400

InvalidVpcName.Malformed

Specified VPC name is not valid.

The format of the VPC name is invalid. Enter a valid VPC name and try again.

400

InvalidVpcDiscription.Malformed

Specified VPC description is not valid.

The format of the VPC description is invalid.

400

QuotaExceeded.Vpc

VPC quota exceeded.

The number of VPCs in this account has reached the upper limit.

400

ResourceNotAvailable.Vpc

Resource you requested is not available in this region or zone.

The resource you requested is not available in this region or zone.

400

InvalidParameter

Specified UserCidr invalid format.

The format of the user CIDR block is invalid.

400

InvalidParameter

Specified UserCidr Subnet mask is not valid .

The subnet mask of the user CIDR block is invalid.

400

InvalidUserCidr.Quota

Specified UserCidr number is greater than 3.

The number of user CIDR blocks that you specify has reached the upper limit.

400

InvalidUserCidr.Malformed

Specified UserCidr overlapping in of 100.64.0.0/10.

The user CIDR block that you specify overlaps with 100.64.0.0/10.

400

InvalidResourceGroupId

The specified ResourceGroupId does not exist.

The specified resource group ID does not exist.

400

IllegalParam.Ipv6CidrBlock

%s

\-

400

OperationFailed.IPv6CidrNotReserved

%s

\-

400

MissingParam.EnableIpv6

%s

\-

400

OperationUnsupported.Ipv6Feature

%s

\-

400

System.ServiceBusy

System is busy, please try later.

\-

400

IllegalParam.UserCidr

UserCidr is not a valid or strict address.

UserCidr is illegal.

400

OperationUnsupported.ResourceGroupId

ResourceGroup is not supported in this region.

\-

400

IllegalParam.UserCidr

%s

\-

400

IllegalParam.EnableIpv6

%s

\-

400

InvalidIpv6CidrBlock.Malformed

Specified Ipv6CidrBlock is not valid.

\-

400

UnsupportedFeature.Ipv6Isp

The Ipv6Isp feature is not supported.

The specified IPv6 ISP is not supported.

400

ResourceNotEnough.Ipv6Cidr

The specified resource of Ipv6Cidr is not enough.

IPv6 addresses are insufficient.

400

UnsupportedFeature.IPAM

VPCs cannot be created by using IPAM.

You cannot use IPAM to create a VPC.

400

OperationUnsupported.Ipv6Feature

The IPv6 feature is not supported in the region.

This region does not support IPv6.

400

IllegalParam.Ipv4CidrMask

The specified Ipv4CidrMask is illegal.

Invalid Ipv4CidrMask.

400

IllegalParam.IpamPool

The specified IPAM pool cannot be empty.

The IPAM pool cannot be empty.

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

OperationDenied.CidrUnavailableInPool

The operation is not allowed because the CIDR is unavailable in the IPAM pool.

The operation is not allowed because the CIDR is unavailable in the IPAM pool.

400

IllegalParam.CidrBlockMask

The param of CidrBlock Mask \[%s\] is illegal.

The subnet mask of the CIDR block is invalid.

400

UnsupportedFeature.VpcDnsHostname

The feature of vpc dns hostname is unsupported.

The VPC private domain name function does not take effect in the current region.

400

IllegalParam.Ipv6CidrBlock

The parameter of Ipv6CidrBlock is illegal.

\-

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

400

UnsupportedFeature.DhcpOptionsSet

The feature of dhcp options set is unsupported.

The DHCP Options Set function does not take effect in the current region.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

404

InvalidRegionId.NotFound

Specified value of "regionId" is not supported.

RegionId is set to an invalid value. Check whether the service is available in the specified region and try again.

404

ResourceNotFound.IpamPool

The dependent IPAM pool is not found.

The dependent IPAM pool is not found.

500

InternalError

The request processing has failed due to some unknown error.

An unknown error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2025-12-12#workbench-doc-change-demo)

2025-01-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2025-01-16#workbench-doc-change-demo)

2024-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2024-12-18#workbench-doc-change-demo)

2024-10-10

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2024-10-10#workbench-doc-change-demo)

2024-08-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2024-08-27#workbench-doc-change-demo)

2024-05-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2024-05-21#workbench-doc-change-demo)

2024-05-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2024-05-17#workbench-doc-change-demo)

2024-04-25

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2024-04-25#workbench-doc-change-demo)

2023-09-21

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2023-09-21#workbench-doc-change-demo)

2023-07-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2023-07-05#workbench-doc-change-demo)

2023-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2023-06-13#workbench-doc-change-demo)

2023-04-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2023-04-26#workbench-doc-change-demo)

2023-04-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpc?updateTime=2023-04-13#workbench-doc-change-demo)
