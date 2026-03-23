Queries information about route entries in a route table.

## Operation description

Before you call the [DeleteRouteEntry](/help/en/vpc/api-deleterouteentry) operation to delete a route, you can call this operation to query the next hop of the route that you want to delete.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouteEntryList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouteEntryList)

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

vpc:DescribeRouteEntryList

get

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}`

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

The region ID of the route table.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

RouteTableId

string

Yes

The ID of the route table that you want to query.

vtb-bp1r9pvl4xen8s9ju\*\*\*\*

RouteEntryId

string

No

The ID of the route that you want to query.

rte-bp1mnnr2al0naomnp\*\*\*\*

DestinationCidrBlock

string

No

The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.

192.168.2.0/24

RouteEntryName

string

No

The name of the route entry.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

abc

IpVersion

string

No

The IP version. Valid values:

-   **IPv4**
-   **IPv6**

IPv4

RouteEntryType

string

No

The route type. Valid values:

-   **Custom**: custom routes.
-   **System**: system routes.
-   **BGP**: BGP routes.
-   **CEN**: Cloud Enterprise Network (CEN) routes.
-   **ECR**: Express Connect Router (ECR) routes.

System

NextHopId

string

No

The ID of the next hop.

vpn-bp10zyaph5cc8b7c7\*\*\*\*

NextHopType

string

No

The next hop type. Valid values:

-   **Instance**: an Elastic Compute Service (ECS) instance. This is the default value.
-   **HaVip**: a high-availability virtual IP address (HaVip).
-   **VpnGateway**: a VPN gateway.
-   **NatGateway**: a NAT gateway.
-   **NetworkInterface**: a secondary elastic network interface (ENI).
-   **RouterInterface**: a router interface.
-   **IPv6Gateway**: an IPv6 gateway.
-   **Attachment**: a transit router.
-   **Ipv4Gateway**: an IPv4 gateway.
-   **GatewayEndpoint**: a gateway endpoint.
-   **CenBasic**: CEN does not support transit routers.
-   **Ecr**: Express Connect Router (ECR).

Instance

MaxResult

integer

No

The number of entries per page. Valid values: **1** to **100**. Default value: **10**.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. Valid values:

-   You do not need to specify this parameter for the first request.
-   You must specify the token that is obtained from the previous query as the value of NextToken.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

ServiceType

string

No

Specifies whether to host the route. If the parameter is empty, the route is not hosted.

Set the value to **TR**, which specifies that the route is hosted by a transit router.

TR

DestCidrBlockList

array

No

The destination CIDR blocks of the routes.

string

No

The destination CIDR blocks of the routes. You can specify at most 20 destination CIDR blocks.

192.168.0.0/24

## Response parameters

Parameter

Type

Description

Example

object

The route details.

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:

-   If no value is returned for **NextToken**, no next queries are sent.
-   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The request ID.

14A07460-EBE7-47CA-9757-12CC4761D47A

RouteEntrys

array<object>

The information about the routes.

RouteEntry

object

The information about the routes.

Status

string

The status of the route entry. Valid values:

-   **Pending**
-   **Available**
-   **Modifying**
-   **Deleting**

Available

Type

string

The route type. Valid values:

-   **Custom**: custom routes.
-   **System**: system routes.
-   **BGP**: BGP routes.
-   **CEN**: CEN routes.
-   **ECR**: ECR routes.

Custom

IpVersion

string

The IP version. Valid values: Valid values:

-   **ipv4**
-   **ipv6**

IPv4

Description

string

The description of the route.

RouteEntryDescription

RouteEntryName

string

The name of the route.

aaa

DestinationCidrBlock

string

The destination CIDR block of the route.

192.168.2.0/24

RouteEntryId

string

The ID of the route.

rte-bp1mnnr2al0naomnp\*\*\*\*

RouteTableId

string

The ID of the route table.

vtb-bp15w5q90d2rk3bww\*\*\*\*

GmtModified

string

The time when the route was modified. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.

2022-05-09T03:00:07Z

NextHops

array<object>

The information about the next hops.

NextHop

object

NextHopRegionId

string

The ID of the region where the next hop is deployed.

**Note** This parameter is returned when the next hop type is set to **RouterInterface**.

cn-hangzhou

Weight

integer

The weight of the route.

**Note** This parameter is returned when the next hop type is set to **RouterInterface**.

100

NextHopId

string

The ID of the next hop.

vpn-bp10zyaph5cc8b7c7\*\*\*\*

Enabled

integer

Indicates whether the route is available. Valid values:

-   **0**: unavailable
-   **1**: available

**Note** This parameter is returned when the next hop type is set to **RouterInterface**.

1

NextHopType

string

The next hop type. Valid values:

-   **Instance**: an ECS instance.
-   **HaVip**: an HaVip.
-   **VpnGateway**: a VPN gateway.
-   **NatGateway**: a NAT gateway.
-   **NetworkInterface**: a secondary ENI.
-   **RouterInterface**: a router interface.
-   **IPv6Gateway**: an IPv6 gateway.
-   **Attachment**: a transit router.
-   **Ipv4Gateway**: an IPv4 gateway.
-   **GatewayEndpoint**: a gateway endpoint.
-   **CenBasic**: CEN does not support transit routers.
-   **Ecr**: ECR.

Instance

NextHopRelatedInfo

object

The information about the next hop.

InstanceId

string

The ID of the instance that is associated with the next hop.

vpc-bp1t36rn9l53iwbsf\*\*\*\*

InstanceType

string

The type of the instance associated with the next hop. Valid values:

-   **VPC**: a VPC
-   **VBR**: a VBR
-   **PCONN**: an Express Connect circuit

VPC

RegionId

string

The region ID of the instance associated with the next hop. Valid values:

ch-hangzhou

ServiceType

string

Indicates whether the route is hosted. If the parameter is empty, the route is not hosted.

If **TR** is returned, the route is hosted by a transit router.

TR

Origin

string

The route origin. Valid values:

-   **RoutePropagation**: The route is created by a dynamic propagation source.
-   **SystemCreate**: The route is created by the system.
-   **CustomCreate**: The route is created by a user.

RoutePropagation

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "14A07460-EBE7-47CA-9757-12CC4761D47A",
  "RouteEntrys": {
    "RouteEntry": [
      {
        "Status": "Available",
        "Type": "Custom",
        "IpVersion": "IPv4",
        "Description": "RouteEntryDescription",
        "RouteEntryName": "aaa",
        "DestinationCidrBlock": "192.168.2.0/24",
        "RouteEntryId": "rte-bp1mnnr2al0naomnp****",
        "RouteTableId": "vtb-bp15w5q90d2rk3bww****",
        "GmtModified": "2022-05-09T03:00:07Z",
        "NextHops": {
          "NextHop": [
            {
              "NextHopRegionId": "cn-hangzhou",
              "Weight": 100,
              "NextHopId": "vpn-bp10zyaph5cc8b7c7****",
              "Enabled": 1,
              "NextHopType": "Instance",
              "NextHopRelatedInfo": {
                "InstanceId": "vpc-bp1t36rn9l53iwbsf****",
                "InstanceType": "VPC",
                "RegionId": "ch-hangzhou"
              }
            }
          ]
        },
        "ServiceType": "TR",
        "Origin": "RoutePropagation"
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

IllegalParam.NextToken

User nextToken is illegal.

\-

400

InvalidNextHop.NotFound

The specified route entry nexthop does not exist in our records.

\-

400

OperationFailed.QueryCenEntry

Operation is denied because getting CEN route entry has failed.

Operation is denied because getting CEN route entry has failed.

400

OperationDenied.UseGatewayRouteEntryQueryInterface

Use listGatewayRouteTableEntries to describe gateway route entries.

\-

400

InvalidRouteTable.NotFound

The specified RouteTable was not found.

\-

400

IllegalParam.RouteEntryType

The parameter of RouteEntryType is illegal.

\-

400

MissingParam.context

The param of context is missing.

\-

400

MissingParam.aliUid

The param of aliUid is missing.

\-

400

MissingParam.bid

The param of bid is missing.

\-

400

IllegalParam.IpVersion

Param IpVersion illegal.

Illegal parameter: IpVersion

400

OperationFailed.FilterParamUnderWrongRouteType

Operation failed because only custom type support filter by routeEntryId or routeEntryName

The operation failed because only custom routes support search by route ID or route name.

400

IllegalParam.NextTokenExpired

The parameter of NextTokenExpired is illegal.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteEntryList?updateTime=2025-02-10#workbench-doc-change-demo)

2024-08-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteEntryList?updateTime=2024-08-26#workbench-doc-change-demo)

2024-01-05

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteEntryList?updateTime=2024-01-05#workbench-doc-change-demo)

2023-07-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouteEntryList?updateTime=2023-07-03#workbench-doc-change-demo)
