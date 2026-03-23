Queries the detailed information about a vSwitch.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVSwitchAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVSwitchAttributes)

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

vpc:DescribeVSwitchAttributes

get

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/{#VSwitchId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

VSwitchId

string

Yes

The ID of the vSwitch.

vsw-25naue4g\*\*\*\*

RegionId

string

No

The region ID of the virtual private cloud (VPC) to which the custom route table belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): sends a request and performs a dry run. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

## Response parameters

Parameter

Type

Description

Example

object

The details about the vSwitch.

VpcId

string

The ID of the VPC to which the vSwitch belongs.

vpc-257gq642n\*\*\*\*

Status

string

The status of the vSwitch. Valid values:

-   **Pending**
-   **Available**

Pending

CreationTime

string

The time when the vSwitch was created.

2021-08-22T10:40:25Z

IsDefault

boolean

Indicates whether the vSwitch is the default vSwitch. Valid values:

-   **true**
-   **false**

false

AvailableIpAddressCount

long

The number of available IP addresses.

12

NetworkAclId

string

The network access control list (ACL) rules.

1

OwnerId

long

The ID of the Alibaba Cloud account to which the resource belongs.

287683832402436789

VSwitchId

string

The vSwitch ID.

vsw-25b7pv15t\*\*\*\*

RequestId

string

The request ID.

7B48B4B9-1EAD-469F-B488-594DAB4B6A1A

CidrBlock

string

The CIDR block of the vSwitch.

192.168.0.1/24

Description

string

The description of the vSwitch.

abc

ResourceGroupId

string

The ID of the resource group to which the ACL belongs.

rg-acfmxazb4ph\*\*\*\*

ZoneId

string

The ID of the zone to which the vSwitch belongs.

cn-beijing-a

Ipv6CidrBlock

string

The IPv6 CIDR block of the vSwitch.

2408:XXXX:3c5:44e::/64

VSwitchName

string

The vSwitch name.

test

ShareType

string

Indicates whether the vSwitch is shared.

-   If no value is returned, the vSwitch is a regular vSwitch.
-   If **Shared** is returned, the vSwitch is shared.
-   If **Sharing** is returned, the vSwitch is being shared.

Shared

EnabledIpv6

boolean

Indicates whether IPv6 is enabled for the vSwitch. If you enable IPv6, you must configure the IPv6 CIDR block of the vSwitch. Valid values:

-   **true**
-   **false**

true

RouteTable

object

The information about the route table that is associated with the vSwitch.

RouteTableId

string

The ID of the route table that is associated with the vSwitch.

vtb-bp145q7glnuzdv\*\*\*\*

RouteTableType

string

The type of the route table. Valid values:

-   **System**
-   **Custom**

System

Tags

array<object>

The information about the tags.

Tag

object

Key

string

The key of tag N added to the resource.

FinanceDept

Value

string

The value of tag N added to the resource.

FinanceJoshua

## Examples

Sample success responses

`JSON`format

```
{
  "VpcId": "vpc-257gq642n****",
  "Status": "Pending",
  "CreationTime": "2021-08-22T10:40:25Z",
  "IsDefault": false,
  "AvailableIpAddressCount": 12,
  "NetworkAclId": 1,
  "OwnerId": 287683832402436800,
  "VSwitchId": "vsw-25b7pv15t****",
  "RequestId": "7B48B4B9-1EAD-469F-B488-594DAB4B6A1A",
  "CidrBlock": "192.168.0.1/24",
  "Description": "abc",
  "ResourceGroupId": "rg-acfmxazb4ph****",
  "ZoneId": "cn-beijing-a",
  "Ipv6CidrBlock": "2408:XXXX:3c5:44e::/64",
  "VSwitchName": "test",
  "ShareType": "Shared",
  "EnabledIpv6": true,
  "RouteTable": {
    "RouteTableId": "vtb-bp145q7glnuzdv****",
    "RouteTableType": "System"
  },
  "Tags": {
    "Tag": [
      {
        "Key": "FinanceDept",
        "Value": "FinanceJoshua"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidVSwitchId.NotFound

Specified VSwitch can not found.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-05

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitchAttributes?updateTime=2023-07-05#workbench-doc-change-demo)

2023-05-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVSwitchAttributes?updateTime=2023-05-22#workbench-doc-change-demo)
