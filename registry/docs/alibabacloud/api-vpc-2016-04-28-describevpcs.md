Queries virtual private clouds (VPCs).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpcs)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpcs)

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

vpc:DescribeVpcs

list

VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/*`

VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VPCId}`

-   vpc:tag

none

## Request parameters

Parameter

Type

Required

Description

Example

VpcId

string

No

The VPC ID.

You can specify up to 20 VPC IDs. Separate multiple IDs with commas (,).

vpc-bp1b1xjllp3ve5yze\*\*\*\*

RegionId

string

Yes

The region ID of the VPC.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

VpcName

string

No

The name of the VPC.

Vpc-1

IsDefault

boolean

No

Specifies whether to query the default VPC in the specified region. Valid values:

-   **true** (default)
-   **false**

false

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system prechecks whether your AccessKey pair is valid, whether the RAM user is authorized, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and VPCs are queried.

false

ResourceGroupId

string

No

The ID of the resource group to which the VPC to be queried belongs.

rg-acfmxvfvazb4p\*\*\*\*

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

VpcOwnerId

long

No

The ID of the Alibaba Cloud account to which the VPC belongs.

253460731706911258

DhcpOptionsSetId

string

No

The ID of the DHCP options set.

dopt-o6w0df4epg9zo8isy\*\*\*\*

EnableIpv6

boolean

No

Query for VPCs in the specified region that have enabled IPv6 CIDR blocks. The value is empty by default, which means no filtering based on IPv6 availability is conducted. Valid values:

-   false: disabled
    
-   true: enabled
    

false

Tag

array<object>

No

The tags of the resource.

object

No

Key

string

No

The key of tag N to add to the resource. You can specify at most 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

C6532AA8-D0F7-497F-A8EE-094126D441F5

PageNumber

integer

The page number.

1

TotalCount

integer

The number of entries returned.

2

Vpcs

array<object>

The details of the VPC.

Vpc

object

The details of the VPC.

CreationTime

string

The time when the VPC was created.

2021-04-18T15:02:37Z

Status

string

The status of the VPC. Valid values:

-   **Pending**
-   **Available**

Available

VpcId

string

The VPC ID.

vpc-bp1qpo0kug3a20qqe\*\*\*\*

IsDefault

boolean

Indicates whether the VPC is the default VPC in the region. Valid values:

-   **true**
-   **false**

false

OwnerId

long

The ID of the Alibaba Cloud account to which the VPC belongs.

253460731706911258

RegionId

string

The ID of the region to which the VPC belongs.

cn-hangzhou

VpcName

string

The name of the VPC.

vpc1

VRouterId

string

The ID of the vRouter.

vrt-bp1jcg5cmxjbl9xgc\*\*\*\*

DhcpOptionsSetStatus

string

The status of the DHCP options set. Valid values:

-   **Available**
-   **InUse**
-   **Deleted**
-   **Pending**

Available

CidrBlock

string

The IPv4 CIDR block of the VPC.

192.168.0.0/16

Description

string

The description of the VPC.

This is my VPC.

ResourceGroupId

string

The ID of the resource group to which the VPC belongs.

rg-acfmxazb4ph\*\*\*\*

DhcpOptionsSetId

string

The ID of the DHCP options set.

dopt-o6w0df4epg9zo8isy\*\*\*\*

Ipv6CidrBlock

string

The IPv6 CIDR block of the VPC.

2408:XXXX:0:a600::/56

CenStatus

string

The status of the Cloud Enterprise Network (CEN) instance to which the VPC is attached. **Attached** is returned only if the VPC is attached to a CEN instance.

Attached

Tags

array<object>

The tag information about the VPC.

Tag

object

Key

string

The key of tag N.

env

Value

string

The value of tag N.

internal

Ipv6CidrBlocks

array<object>

The IPv6 CIDR block of the VPC.

Ipv6CidrBlock

object

Ipv6Isp

string

The type of IPv6 CIDR block. Valid values:

-   **BGP**
-   **ChinaMobile**
-   **ChinaUnicom**
-   **ChinaTelecom**

**Note** If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to **ChinaTelecom**, **ChinaUnicom**, or **ChinaMobile**.

BGP

Ipv6CidrBlock

string

The IPv6 CIDR block of the VPC.

2408:XXXX:0:a600::/56

VSwitchIds

array

The vSwitches in the VPC.

You can query up to 300 vSwitches in the VPC. The information about the latest vSwitches is returned. If you want to query the information about all vSwitches in a VPC, call the [DescribeVSwitches](/help/en/vpc/api-describevswitches) operation.

VSwitchId

string

The vSwitches in the VPC.

You can query up to 300 vSwitches in the VPC. The information about the latest vSwitches is returned. If you want to query the information about all vSwitches in a VPC, call the [DescribeVSwitches](/help/en/vpc/api-describevswitches) operation.

vsw-bp1nhbnpv2blyz8dl\*\*\*\*

SecondaryCidrBlocks

array

The information about the secondary CIDR block.

SecondaryCidrBlock

string

The secondary CIDR block of the VPC.

192.168.20.0/24

UserCidrs

array

The list of user CIDR blocks.

UserCidr

string

The list of user CIDR blocks.

10.0.0.0/8

NatGatewayIds

array

The ID of the Internet NAT gateway.

NatGatewayIds

string

The ID of the Internet NAT gateway.

nat-245xxxftwt45bg\*\*\*\*

RouterTableIds

array

The information about the route table.

RouterTableIds

string

The ID of the route table.

vtb-bp1krxxzp0c29fmon\*\*\*\*

EnabledIpv6

boolean

Indicates whether the IPv6 is enabled.

Valid values:

-   false: false
    
-   true: true
    

false

DnsHostnameStatus

string

Indicates whether the Domain Name System (DNS) feature is enabled.

DISABLED

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "C6532AA8-D0F7-497F-A8EE-094126D441F5",
  "PageNumber": 1,
  "TotalCount": 2,
  "Vpcs": {
    "Vpc": [
      {
        "CreationTime": "2021-04-18T15:02:37Z",
        "Status": "Available",
        "VpcId": "vpc-bp1qpo0kug3a20qqe****",
        "IsDefault": false,
        "OwnerId": 253460731706911260,
        "RegionId": "cn-hangzhou",
        "VpcName": "vpc1",
        "VRouterId": "vrt-bp1jcg5cmxjbl9xgc****",
        "DhcpOptionsSetStatus": "Available",
        "CidrBlock": "192.168.0.0/16",
        "Description": "This is my VPC.",
        "ResourceGroupId": "rg-acfmxazb4ph****",
        "DhcpOptionsSetId": "dopt-o6w0df4epg9zo8isy****",
        "Ipv6CidrBlock": "2408:XXXX:0:a600::/56",
        "CenStatus": "Attached",
        "Tags": {
          "Tag": [
            {
              "Key": "env",
              "Value": "internal"
            }
          ]
        },
        "Ipv6CidrBlocks": {
          "Ipv6CidrBlock": [
            {
              "Ipv6Isp": "BGP",
              "Ipv6CidrBlock": "2408:XXXX:0:a600::/56"
            }
          ]
        },
        "VSwitchIds": {
          "VSwitchId": [
            "vsw-bp1nhbnpv2blyz8dl****"
          ]
        },
        "SecondaryCidrBlocks": {
          "SecondaryCidrBlock": [
            "192.168.20.0/24"
          ]
        },
        "UserCidrs": {
          "UserCidr": [
            "10.0.0.0/8"
          ]
        },
        "NatGatewayIds": {
          "NatGatewayIds": [
            "nat-245xxxftwt45bg****"
          ]
        },
        "RouterTableIds": {
          "RouterTableIds": [
            "vtb-bp1krxxzp0c29fmon****"
          ]
        },
        "EnabledIpv6": false,
        "DnsHostnameStatus": "DISABLED"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidVpcIdNumber.NotSupported

The number of vpcIds exceeds the limit.

The value of the vpcId parameter has reached the upper limit.

400

InvalidAliuid

User Id is not valid.

\-

400

InvalidResourceGroupId

The specified ResourceGroupId does not exist.

The specified resource group ID does not exist.

400

InvalidTagKey

The tag keys are not valid.

The tag index is invalid.

400

InvalidTagValue

The tag values are not valid.

The tag value is invalid.

400

InvalidResourceGroupId.NotFound

The Specified ResourceGroupId not exists.

\-

400

OperationUnsupported.ResourceGroupId

%s

\-

400

IellgalParameter.OwnerAccount

The specified parameter OwnerAccount is not valid.

The specified parameter OwnerAccount is illegal.

400

IllegalParam.OwnerId

The specified parameter VpcOwnerId is not valid.

\-

400

InvalidAccount.NotFound

The account is invalid.

The operation failed because an invalid account is used.

500

InternalError

The request processing has failed due to some unknown error.

An unknown error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-10-10

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcs?updateTime=2024-10-10#workbench-doc-change-demo)

2024-08-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcs?updateTime=2024-08-27#workbench-doc-change-demo)

2024-05-16

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcs?updateTime=2024-05-16#workbench-doc-change-demo)

2024-04-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcs?updateTime=2024-04-09#workbench-doc-change-demo)

2023-07-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcs?updateTime=2023-07-26#workbench-doc-change-demo)

2023-07-26

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcs?updateTime=2023-07-26#workbench-doc-change-demo)

2023-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcs?updateTime=2023-06-13#workbench-doc-change-demo)
