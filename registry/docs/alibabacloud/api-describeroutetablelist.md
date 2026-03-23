Queries route tables.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouteTableList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouteTableList)

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

vpc:DescribeRouteTableList

list

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/*`

-   vpc:VRouter
-   vpc:VBR

none

## Request parameters

Parameter

Type

Required

Description

Example

RouterType

string

No

The type of the router to which the route table belongs. Valid value:

-   **VRouter** (default): a vRouter
-   **VBR**: a VBR

VRouter

RouterId

string

No

The ID of vRouter to which the route table belongs.

vrt-bp1lhl0taikrteen8\*\*\*\*

VpcId

string

No

The ID of the VPC to which the route table belongs.

When this parameter is set, the value of **RouterType** is automatically assigned to **VRouter**.

vpc-bp15zckdt37pq72\*\*\*\*

RouteTableId

string

No

The ID of the route table.

vtb-bp145q7glnuzdvzu2\*\*\*\*

RouteTableName

string

No

The name of the route table.

doctest

PageNumber

integer

No

The number of the returned page. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

ResourceGroupId

string

No

The ID of the resource group to which the route table belongs.

rg-acfmxazb4ph\*\*\*\*

RegionId

string

Yes

The region ID of the VPC to which the route table belongs.

You can call [DescribeRegions](/help/en/vpc/developer-reference/api-vpc-2016-04-28-describeregions) to query the most recent region list.

ap-southeast-6

Tag

array<object>

No

The tags of the resource.

object

No

The tags of the resource.

Key

string

No

The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

FinanceJoshua

RouteTableType

string

No

The type of the route table.

-   **System**
-   **Custom**

System

## Response parameters

Parameter

Type

Description

Example

object

The details of the route table.

RequestId

string

The request ID.

DC668356-BCB4-42FD-9BC3-FA2B2E04B634

PageSize

integer

The number of entries per page.

10

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

1

RouterTableList

array<object>

The detailed information about the route tables.

RouterTableListType

object

The details of the route table.

VpcId

string

The ID of the VPC to which the route table belongs.

vpc-bp15zckdt37pq72\*\*\*\*

CreationTime

string

The time when the route table was created.

2021-08-22T10:40:25Z

Status

string

The status of the route table. Valid values:

-   **Pending**
-   **Available**
-   **Deleting**

Available

RouterId

string

The ID of the vRouter to which the route table belongs.

vrt-bp1lhl0taikrteen8\*\*\*\*

AssociateType

string

The type of the cloud resource with which the route table is associated. Valid values:

-   **VSwitch**: vSwitch
-   **Gateway**: IPv4 gateway

VSwitch

RouteTableId

string

The ID of the route table.

vtb-bp145q7glnuzdvzu2\*\*\*\*

OwnerId

long

The ID of the Alibaba Cloud account to which the route table belongs.

253460731706911258

Description

string

The information about the route table.

This is Route Table.

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

RouterType

string

The type of the vRouter to which the route table belongs. Valid values:

-   **VRouter**: a vRouter.
    
-   **VBR**: a VBR.
    

VRouter

RouteTableName

string

The name of the route table.

doctest

Tags

array<object>

The tags.

Tag

object

The tags.

Key

string

The key of the tag that is added to the route table.

type

Value

string

The value of the tag that is added to the route table.

ingress

VSwitchIds

array

The vSwitch IDs.

VSwitchId

string

The vSwitch IDs.

vsw-bp12mw1f8k3jgygk9\*\*\*\*

GatewayIds

array

The detailed information about the IPv4 gateway.

GatewayIds

string

The detailed information about the IPv4 gateway.

ipv4gw-5tsnc6s4ogsedtp3k\*\*\*\*

RoutePropagationEnable

boolean

Whether to receive the propagation routes. Valid Values:

-   **true**: received.
    
-   **false**: not received.
    

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DC668356-BCB4-42FD-9BC3-FA2B2E04B634",
  "PageSize": 10,
  "PageNumber": 1,
  "TotalCount": 1,
  "RouterTableList": {
    "RouterTableListType": [
      {
        "VpcId": "vpc-bp15zckdt37pq72****",
        "CreationTime": "2021-08-22T10:40:25Z",
        "Status": "Available",
        "RouterId": "vrt-bp1lhl0taikrteen8****",
        "AssociateType": "VSwitch",
        "RouteTableId": "vtb-bp145q7glnuzdvzu2****",
        "OwnerId": 253460731706911260,
        "Description": "This is Route Table.",
        "RouteTableType": "System",
        "ResourceGroupId": "rg-acfmxazb4ph****",
        "RouterType": "VRouter",
        "RouteTableName": "doctest",
        "Tags": {
          "Tag": [
            {
              "Key": "type",
              "Value": "ingress"
            }
          ]
        },
        "VSwitchIds": {
          "VSwitchId": [
            "vsw-bp12mw1f8k3jgygk9****"
          ]
        },
        "GatewayIds": {
          "GatewayIds": [
            "ipv4gw-5tsnc6s4ogsedtp3k****"
          ]
        },
        "RoutePropagationEnable": true
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

403

Forbbiden

User not authorized to operate on the specified resource.

User not authorized to operate on the specified resource.

403

Abs.InvalidPayType

Specified pay type is not valid.

\-

403

Abs.InstanceNotExist

Specified instance not exist.

\-

403

Abs.Forbidden

Specified instance cannot change pay type.

\-

403

Abs.InvalidPayPeriod

Specified pay period not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-05

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTableList?updateTime=2024-01-05#workbench-doc-change-demo)

2023-11-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTableList?updateTime=2023-11-27#workbench-doc-change-demo)

2023-08-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTableList?updateTime=2023-08-14#workbench-doc-change-demo)

2023-08-03

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteTableList?updateTime=2023-08-03#workbench-doc-change-demo)
