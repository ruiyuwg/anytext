This API is deprecated. You are advised to use [Vpc(2016-04-28) - DescribeRouteTableList](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTableList).

Queries route tables.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouteTables)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouteTables)

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

vpc:DescribeRouteTables

list

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}`

-   vpc:VBR
-   vpc:VRouter

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

The region ID of the VPC to which the route table belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

VRouterId

string

No

The ID of the vRouter.

vtb-bp1krxxzp0c29fmon\*\*\*\*

RouteTableId

string

No

The ID of the route table that you want to query.

rtb-bp12mw1f8k3jgygk9\*\*\*\*

RouterType

string

No

The type of the router to which the route table belongs. Valid values:

-   **VRouter** (default)
-   **VBR**

VRouter

RouterId

string

No

The ID of the router to which the route table belongs.

vtb-bp1krxxzp0c29fmon\*\*\*\*

Type

string

No

The route type. Valid values:

-   **Custom**
-   **System**
-   **BGP**
-   **CEN**

custom

RouteTableName

string

No

The name of the route table that you want to query.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

RouteTable-1

ResourceGroupId

string

No

The ID of the resource group to which the route table to be queried belongs.

rg-acfmxazccb4ph\*\*\*\*

PageNumber

integer

No

The page number. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

## Response parameters

Parameter

Type

Description

Example

object

The number of entries per page.

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

DC668356-BCB4-42FD-9BC3-FA2B2E04B634

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

1

RouteTables

array<object>

The detailed information about the route tables.

RouteTable

object

CreationTime

string

The time when the route table was created.

The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format in UTC.

2017-08-22T10:40:25Z

Status

string

The status of the route table. Valid values:

-   **Pending**
-   **Available**

Available

VRouterId

string

The vRouter ID.

vrt-bp1lhl0taikrteen8\*\*\*\*

RouteTableType

string

The type of the route table. Valid values:

-   **Custom**
-   **System**

System

ResourceGroupId

string

The ID of the resource group to which the route table belongs.

rg-acfmxazb4ph\*\*\*\*

RouteTableId

string

The ID of the route table.

vtb-bp145q7glnuzdvzu2\*\*\*\*

RouteEntrys

array<object>

The information about the route.

RouteEntry

object

Type

string

The route type. Valid values:

-   **Custom**
-   **System**
-   **BGP**
-   **CEN**

System

Status

string

The route status. Valid values:

-   **Pending**
-   **Available**
-   **Modifying**

Pending

NextHopType

string

The type of the next hop. Valid values:

-   **Instance** (default): an Elastic Compute Service (ECS) instance
-   **HaVip**: a high-availability virtual IP address (HaVip).
-   **VpnGateway**: a VPN gateway
-   **NatGateway**: a NAT gateway
-   **NetworkInterface**: a secondary elastic network interface (ENI)
-   **RouterInterface**: a router interface
-   **IPv6Gateway**: an IPv6 gateway
-   **Attachment**: a transit router

local

RouteEntryName

string

The route name.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

test

RouteEntryId

string

The ID of the route.

rte-bp1mnnr2al0naomnpxxx

InstanceId

string

The ID of the instance associated with the next hop.

ri-2zeo3xzyf38r4urzd\*\*\*\*

RouteTableId

string

The route table ID.

vtb-bp145q7glnuzdvzu2\*\*\*\*

Description

string

The description of the route. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.

RouteEntryDescription

DestinationCidrBlock

string

The destination CIDR block of the route. The destination CIDR block supports IPv4 and IPv6. Make sure that the destination CIDR block meets the following requirements:

-   The destination CIDR block is not 100.64.0.0/10 or a subset of 100.64.0.0/10.
-   The destination CIDR block of each route in the route table is unique.

192.168.0.1/24

NextHops

array<object>

The information about the next hop.

NextHop

object

NextHopId

string

The ID of the next hop.

ri-2zeo3xzyf38r4urzdpvqw

Weight

integer

The weight of the route.

80

NextHopType

string

The type of the next hop. Valid values:

-   **Instance**: an ECS instance
-   **HaVip**: an HaVip
-   **VpnGateway**: a VPN gateway
-   **NatGateway**: a NAT gateway
-   **NetworkInterface**: a secondary ENI
-   **RouterInterface**: a router interface
-   **IPv6Gateway**: an IPv6 gateway
-   **Attachment**: a transit router

HaVip

Enabled

integer

Indicates whether the route is available. Valid values:

-   **0**: unavailable
-   **1**: available

0

VSwitchIds

array

The vSwitch ID.

VSwitchId

string

The vSwitch ID.

vsw-bp14cagpfysr29fe\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "DC668356-BCB4-42FD-9BC3-FA2B2E04B634",
  "PageNumber": 1,
  "TotalCount": 1,
  "RouteTables": {
    "RouteTable": [
      {
        "CreationTime": "2017-08-22T10:40:25Z",
        "Status": "Available",
        "VRouterId": "vrt-bp1lhl0taikrteen8****",
        "RouteTableType": "System",
        "ResourceGroupId": "rg-acfmxazb4ph****",
        "RouteTableId": "vtb-bp145q7glnuzdvzu2****",
        "RouteEntrys": {
          "RouteEntry": [
            {
              "Type": "System",
              "Status": "Pending",
              "NextHopType": "local",
              "RouteEntryName": "test",
              "RouteEntryId": "rte-bp1mnnr2al0naomnpxxx",
              "InstanceId": "ri-2zeo3xzyf38r4urzd****",
              "RouteTableId": "vtb-bp145q7glnuzdvzu2****",
              "Description": "RouteEntryDescription",
              "DestinationCidrBlock": "192.168.0.1/24",
              "NextHops": {
                "NextHop": [
                  {
                    "NextHopId": "ri-2zeo3xzyf38r4urzdpvqw",
                    "Weight": 80,
                    "NextHopType": "HaVip",
                    "Enabled": 0
                  }
                ]
              }
            }
          ]
        },
        "VSwitchIds": {
          "VSwitchId": [
            "vsw-bp14cagpfysr29fe****"
          ]
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

InvalidVRouterId.NotFound

Specified virtual router does not exist.

The specified vRouter does not exist. Check whether the specified vRouter is valid.

400

OperationFailed.DescribeCenRoute

An error occurred while querying the CEN route entry.

CEN routes are abnormal.

400

OperationFailed.VRouterNotExist

Operation failed because the VRouter does not exist.

Operation failed because the VRouter does not exist.

400

IllegalParam.Type

The parameter of Type is illegal.

Illegal parameter Type.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTables?updateTime=2024-12-31#workbench-doc-change-demo)

2023-09-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTables?updateTime=2023-09-25#workbench-doc-change-demo)

2023-09-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTables?updateTime=2023-09-06#workbench-doc-change-demo)

2023-08-09

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTables?updateTime=2023-08-09#workbench-doc-change-demo)
