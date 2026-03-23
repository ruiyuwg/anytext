Queries the information about available vSwitches that are used for an internal network.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVSwitches)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVSwitches)

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

vpc:DescribeVSwitches

list

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/*`

-   vpc:VPC

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

The ID of the virtual private cloud (VPC) to which the vSwitches belong.

**Note** You must set at least one of **RegionId** and **VpcId**.

vpc-25cdvfeq58pl\*\*\*\*

VSwitchId

string

No

The ID of the vSwitch that you want to query.

vsw-23dscddcffvf3\*\*\*\*

ZoneId

string

No

The ID of the zone to which the vSwitches belong. You can call the [DescribeZones](/help/en/vpc/api-describezones) operation to query the most recent zone list.

cn-hangzhou-d

RegionId

string

No

The region ID of the vSwitch. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

**Note** You must set at least one of **RegionId** and **VpcId**.

cn-hangzhou

VSwitchName

string

No

The vSwitch name.

The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

vSwitch

DryRun

boolean

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

true

IsDefault

boolean

No

Specifies whether to query the default vSwitches in the specified region. Valid values:

-   **true**
-   **false**

If you do not set this parameter, the system queries all vSwitches in the specified region by default.

true

RouteTableId

string

No

The ID of the route table.

vtb-bp145q7glnuzdvzu2\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the vSwitch belongs.

rg-bp67acfmxazb4ph\*\*\*\*

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

VSwitchOwnerId

long

No

The ID of the Alibaba Cloud account to which the vSwitch belongs.

2546073170691\*\*\*\*

EnableIpv6

boolean

No

Specifies whether to query vSwitches with IPv6 enabled in the region. Valid values:

-   **true**
-   **false**

If you do not set this parameter, the system queries all vSwitches in the specified region by default.

false

Tag

array<object>

No

The tags.

object

No

Key

string

No

The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The tag value. You can specify at most 20 tag values. The tag value can be an empty string.

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

The number of entries returned per page.

10

RequestId

string

The request ID.

9A572171-4E27-40D1-BD36-D26C9E71E29E

PageNumber

integer

The number of the returned page.

1

TotalCount

integer

The total number of entries returned.

1

VSwitches

array<object>

The details about the vSwitch.

VSwitch

object

VpcId

string

The ID of the VPC to which the vSwitch belongs.

vpc-257gcdcdq64\*\*\*\*

Status

string

The status of the vSwitch. Valid values:

-   **Pending**
-   **Available**

Available

CreationTime

string

The time when the vSwitch was created.

2022-01-18T12:43:57Z

IsDefault

boolean

Indicates whether the vSwitch is the default vSwitch. Valid values:

-   **true**
-   **false**

true

AvailableIpAddressCount

long

The number of available IP addresses in the vSwitch.

1

NetworkAclId

string

The ID of the network access control list (ACL).

nacl-a2do9e413e0spzasx\*\*\*\*

OwnerId

long

The ID of the Alibaba Cloud account to which the resource belongs.

25346073170691\*\*\*\*

VSwitchId

string

The vSwitch ID.

vsw-25bcdxs7pv1\*\*\*\*

CidrBlock

string

The IPv4 CIDR block of the vSwitch.

172.16.0.0/24

Description

string

The description of the vSwitch.

VSwitchDescription

ResourceGroupId

string

The ID of the resource group to which the vSwitch belongs.

rg-acfmxazb4ph6aiy\*\*\*\*

ZoneId

string

The ID of the zone to which the vSwitch belongs.

cn-hangzhou-d

Ipv6CidrBlock

string

The IPv6 CIDR block of the vSwitch.

2408:4002:10c4:4e03::/64

VSwitchName

string

The vSwitch name.

vSwitch

ShareType

string

Indicates whether the vSwitch is shared.

-   If no value is returned, the vSwitch is a regular vSwitch.
-   If **Shared** is returned, the vSwitch is shared.
-   If **Sharing** is returned, the vSwitch is being shared.

Shared

EnabledIpv6

boolean

Indicates whether IPv6 is enabled for the vSwitch. If you enable IPv6, you must configure an IPv6 CIDR block for the vSwitch. Valid values:

-   **true**
-   **false**

true

Tags

array<object>

The tags of the vSwitch.

Tag

object

Key

string

The tag key.

department

Value

string

The tag value.

dev

RouteTable

object

The information about the route table.

RouteTableId

string

The ID of the route table that is associated with the vSwitch.

vrt-bp145q7glnuzdv\*\*\*\*

RouteTableType

string

The type of the route table. Valid values:

-   **System**
-   **Custom**

System

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "9A572171-4E27-40D1-BD36-D26C9E71E29E",
  "PageNumber": 1,
  "TotalCount": 1,
  "VSwitches": {
    "VSwitch": [
      {
        "VpcId": "vpc-257gcdcdq64****",
        "Status": "Available",
        "CreationTime": "2022-01-18T12:43:57Z",
        "IsDefault": true,
        "AvailableIpAddressCount": 1,
        "NetworkAclId": "nacl-a2do9e413e0spzasx****",
        "OwnerId": 0,
        "VSwitchId": "vsw-25bcdxs7pv1****",
        "CidrBlock": "172.16.0.0/24",
        "Description": "VSwitchDescription",
        "ResourceGroupId": "rg-acfmxazb4ph6aiy****",
        "ZoneId": "cn-hangzhou-d",
        "Ipv6CidrBlock": "2408:4002:10c4:4e03::/64",
        "VSwitchName": "vSwitch",
        "ShareType": "Shared",
        "EnabledIpv6": true,
        "Tags": {
          "Tag": [
            {
              "Key": "department",
              "Value": "dev"
            }
          ]
        },
        "RouteTable": {
          "RouteTableId": "vrt-bp145q7glnuzdv****",
          "RouteTableType": "System"
        }
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

Forbidden.VpcNotFound

Specified VPC can not found.

The specified VPC does not exist.

400

InvalidTagKey

The tag keys are not valid.

The tag index is invalid.

400

InvalidTagValue

The tag values are not valid.

The tag value is invalid.

400

IellgalParameter.OwnerAccount

The specified parameter OwnerAccount is not valid.

The specified parameter OwnerAccount is illegal.

400

IllegalParam.OwnerId

The specified parameter VSwitchOwnerId is not valid.

\-

404

InvalidVSwitchId.NotFound

VSwitch not exist.

The error message returned because the specified vSwitch does not exist. Check whether the specified vSwitch ID is valid.

404

InvalidVpcIdNumber.NotSupported

The number of vpcIds exceeds the limit.

The value of the vpcId parameter has reached the upper limit.

404

InvalidVSwitchIdNumber.NotSupported

The number of vSwitchIds exceeds the limit.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitches?updateTime=2025-12-12#workbench-doc-change-demo)

2024-05-16

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitches?updateTime=2024-05-16#workbench-doc-change-demo)

2023-07-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitches?updateTime=2023-07-26#workbench-doc-change-demo)

2023-07-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitches?updateTime=2023-07-26#workbench-doc-change-demo)

2023-07-05

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitches?updateTime=2023-07-05#workbench-doc-change-demo)

2023-05-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitches?updateTime=2023-05-22#workbench-doc-change-demo)
