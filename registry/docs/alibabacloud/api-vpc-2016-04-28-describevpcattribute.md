Queries the configuration of a virtual private cloud (VPC).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpcAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpcAttribute)

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

vpc:DescribeVpcAttribute

get

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VpcId}`

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

Yes

The ID of the VPC that you want to query.

vpc-bp18sth14qii3pnv\*\*\*\*

RegionId

string

Yes

The ID of the region where the VPC is deployed.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

IsDefault

boolean

No

Specifies whether the VPC is the default VPC. Valid values:

-   **false** (default)
-   **true**

false

## Response parameters

Parameter

Type

Description

Example

object

The time when the VPC was created.

CreationTime

string

The time when the VPC was created.

2021-10-16T07:31:09Z

Status

string

The status of the VPC. Valid values:

-   **Available**
-   **Pending**

Available

VpcId

string

The ID of the VPC.

vpc-bp18sth14qii3pnvo\*\*\*\*

IsDefault

boolean

Indicates whether the VPC is the default VPC. Valid values:

-   **true**
-   **false** (default)

false

ClassicLinkEnabled

boolean

Indicates whether the ClassicLink feature is enabled. Valid values:

-   **true**
-   **false** (default)

false

OwnerId

long

The ID of the Alibaba Cloud account to which the VPC belongs.

28311773240248\*\*\*\*

RegionId

string

The ID of the region to which the VPC belongs.

cn-hangzhou

VpcName

string

The name of the VPC.

doctest2

VRouterId

string

The ID of the vRouter that belongs to the VPC.

vrt-bp1jso6ng1at0ajsc\*\*\*\*

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

RequestId

string

The request ID.

7486AE4A-129D-43DB-A714-2432C074BA04

Description

string

The description of the VPC.

VPC

ResourceGroupId

string

The ID of the resource group.

rg-acfmxazbvgb4ph\*\*\*\*

DhcpOptionsSetId

string

The ID of the DHCP options set.

dopt-o6w0df4epg9zo8isy\*\*\*\*

Ipv6CidrBlock

string

The IPv6 CIDR block of the VPC.

2408:XXXX:0:a600::/56

VSwitchIds

array

The list of vSwitches deployed in the VPC.

VSwitchId

string

The list of vSwitches deployed in the VPC.

{"VSwitchId": \[ "vsw-bp14cagpfysr29feg\*\*\*\*" \]}

UserCidrs

array

The user CIDR block. Multiple CIDR blocks are separated by commas (,). At most three CIDR blocks are returned.

UserCidr

string

The user CIDR block. Multiple CIDR blocks are separated by commas (,). At most three CIDR blocks are returned.

172.16.0.1/24

SecondaryCidrBlocks

array

The secondary IPv4 CIDR block of the VPC.

SecondaryCidrBlock

string

The secondary IPv4 CIDR block of the VPC.

192.168.0.0/16

AssociatedCens

array<object>

The list of Cloud Enterprise Network (CEN) instances to which the VPC is attached.

If the VPC is not attached to a CEN instance, the parameter is not returned.

AssociatedCen

object

CenOwnerId

long

The ID of the account to which the CEN instance belongs.

28311773240248\*\*\*\*

CenId

string

The ID of the CEN instance to which the VPC is attached.

cen-7qthudw0ll6jmc\*\*\*\*

CenStatus

string

The status of the CEN instance.

**Attached** is returned only when the VPC is attached to a CEN instance.

Attached

CloudResources

array<object>

The list of resources deployed in the VPC.

CloudResourceSetType

object

ResourceCount

integer

The number of resources in the VPC.

1

ResourceType

string

The type of resource deployed in the VPC. Valid values: Valid values:

-   **VSwitch**
-   **VRouter**
-   **RouteTable**

VSwitch

Ipv6CidrBlocks

array<object>

The IPv6 CIDR block of the VPC.

Ipv6CidrBlock

object

Ipv6Isp

string

The IPv6 CIDR block type of the VPC. Valid values:

-   **BGP** (default)
-   **ChinaMobile**
-   **ChinaUnicom**
-   **ChinaTelecom**

**Note** If you are allowed to use single-ISP bandwidth, valid values are **ChinaTelecom**, **ChinaUnicom**, and **ChinaMobile**

BGP

Ipv6CidrBlock

string

The IPv6 CIDR block of the VPC.

2408:XXXX:0:6a::/56

SupportIpv4Gateway

boolean

Indicates whether the VPC supports IPv4 gateways.

-   **true**
-   **false**

true

Ipv4GatewayId

string

The ID of the IPv4 gateway.

ipv4gw-5tsnc6s4ogsedtp3k\*\*\*\*

Tags

array<object>

The information about the tags.

Tag

object

The tags.

Key

string

The key of tag N.

FinanceDept

Value

string

The value of tag N.

FinanceJoshua

AssociatedPropagationSources

array<object>

The route source associated with the VPC.

AssociatedPropagationSources

object

SourceType

string

The source type.

-   **CEN**
-   **VPN**
-   **TR**
-   **ECR**

CEN

SourceOwnerId

long

The account ID of the source.

153980532164\*\*\*\*

SourceInstanceId

string

The instance ID of the source.

cen-dc4vwznpwbobrl\*\*\*\*

Status

string

The binding status.

-   **Attaching**
-   **Attached**
-   **Detaching**

Attaching

RoutePropagated

boolean

Indicates whether routes are advertised to the VPC.

true

EnabledIpv6

boolean

Indicates whether the VPC enables IPv6 .

-   true
-   false

false

DnsHostnameStatus

string

Indicates whether DNS hostname is enabled.

DISABLED

## Examples

Sample success responses

`JSON`format

```
{
  "CreationTime": "2021-10-16T07:31:09Z",
  "Status": "Available",
  "VpcId": "vpc-bp18sth14qii3pnvo****",
  "IsDefault": false,
  "ClassicLinkEnabled": false,
  "OwnerId": 0,
  "RegionId": "cn-hangzhou",
  "VpcName": "doctest2",
  "VRouterId": "vrt-bp1jso6ng1at0ajsc****",
  "DhcpOptionsSetStatus": "Available",
  "CidrBlock": "192.168.0.0/16",
  "RequestId": "7486AE4A-129D-43DB-A714-2432C074BA04",
  "Description": "VPC",
  "ResourceGroupId": "rg-acfmxazbvgb4ph****",
  "DhcpOptionsSetId": "dopt-o6w0df4epg9zo8isy****",
  "Ipv6CidrBlock": "2408:XXXX:0:a600::/56",
  "VSwitchIds": {
    "VSwitchId": [
      {
        "VSwitchId": [
          "vsw-bp14cagpfysr29feg****"
        ]
      }
    ]
  },
  "UserCidrs": {
    "UserCidr": [
      "172.16.0.1/24"
    ]
  },
  "SecondaryCidrBlocks": {
    "SecondaryCidrBlock": [
      "192.168.0.0/16"
    ]
  },
  "AssociatedCens": {
    "AssociatedCen": [
      {
        "CenOwnerId": 0,
        "CenId": "cen-7qthudw0ll6jmc****",
        "CenStatus": "Attached"
      }
    ]
  },
  "CloudResources": {
    "CloudResourceSetType": [
      {
        "ResourceCount": 1,
        "ResourceType": "VSwitch"
      }
    ]
  },
  "Ipv6CidrBlocks": {
    "Ipv6CidrBlock": [
      {
        "Ipv6Isp": "BGP",
        "Ipv6CidrBlock": "2408:XXXX:0:6a::/56"
      }
    ]
  },
  "SupportIpv4Gateway": true,
  "Ipv4GatewayId": "ipv4gw-5tsnc6s4ogsedtp3k****",
  "Tags": {
    "Tag": [
      {
        "Key": "FinanceDept",
        "Value": "FinanceJoshua"
      }
    ]
  },
  "AssociatedPropagationSources": {
    "AssociatedPropagationSources": [
      {
        "SourceType": "CEN",
        "SourceOwnerId": 0,
        "SourceInstanceId": "cen-dc4vwznpwbobrl****",
        "Status": "Attaching",
        "RoutePropagated": true
      }
    ]
  },
  "EnabledIpv6": false,
  "DnsHostnameStatus": "DISABLED"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectVpcStatus

Current VPC status does not support this operation.

This operation cannot be performed when the VPC is in the current state.

400

Forbidden.VpcNotFound

Specified VPC does not exist.

\-

404

InvalidVpcId.NotFound

Specified VPC does not exist.

The specified VPC does not exist.

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

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcAttribute?updateTime=2024-10-10#workbench-doc-change-demo)

2024-08-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcAttribute?updateTime=2024-08-27#workbench-doc-change-demo)

2024-06-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcAttribute?updateTime=2024-06-24#workbench-doc-change-demo)

2024-04-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcAttribute?updateTime=2024-04-09#workbench-doc-change-demo)

2024-01-05

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcAttribute?updateTime=2024-01-05#workbench-doc-change-demo)

2023-05-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpcAttribute?updateTime=2023-05-17#workbench-doc-change-demo)
