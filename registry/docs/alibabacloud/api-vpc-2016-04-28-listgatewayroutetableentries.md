Queries route entries of a gateway route table.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListGatewayRouteTableEntries)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListGatewayRouteTableEntries)

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

vpc:ListGatewayRouteTableEntries

list

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#routetableId}`

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

The region ID of the gateway route table.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent list of regions.

ap-southeast-6

MaxResults

integer

No

The number of entries to return on each page. Valid values: **1** to **100**. Default value: **10**.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. Valid values:

-   You do not need to specify this parameter for the first request.
-   If a value is returned for NextToken, specify the value in the next request to retrieve a new page of results.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

GatewayRouteTableId

string

Yes

The ID of the gateway route table that you want to query.

vtb-5ts0ohchwkp3dydt2\*\*\*\*

DestinationCidrBlock

string

No

The destination CIDR block of the route entry in the gateway route table.

192.168.0.5

## Response parameters

Parameter

Type

Description

Example

object

The route entries in the gateway route table.

NextToken

string

The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:

-   If **NextToken** is empty, no next page exists.
-   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

TotalCount

string

The total number of entries returned.

1

GatewayRouteEntryModels

array<object>

The details of the routes in the gateway route table.

GatewayRouteEntryModels

object

Status

string

The status of the route entry. Valid values:

-   **Pending**
-   **Available**
-   **Modifying**

Available

NextHopId

string

The ID of the next hop.

i-bp11gcl0sm85t9bi\*\*\*\*

Description

string

The name of the route entry.

test

NextHopType

string

The type of the next hop. Valid values:

-   **EcsInstance**: Elastic Compute Service (ECS) instance
-   **NetworkInterface**: elastic network interfaces (ENIs).
-   **Local**: local next hop

EcsInstance

DestinationCidrBlock

string

The destination CIDR block of the route.

192.168.0.5

Name

string

The name of the route entry.

The name must be 2 to 128 characters in length and can contain letter, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

name

NextHops

array<object>

The information about the next hop.

NextHop

object

NextHopId

string

The ID of the next hop.

vpn-bp10zyaph5cc8b7c7\*\*\*\*

NextHopType

string

The type of the next hop. Valid values:

-   **Instance** (default): an ECS instance
-   **HaVip**: a high-availability virtual IP address (HaVip).
-   **VpnGateway**: a VPN gateway
-   **NatGateway**: a NAT gateway
-   **NetworkInterface**: a secondary ENI
-   **RouterInterface**: a router interface
-   **IPv6Gateway**: an IPv6 gateway
-   **Attachment**: a transit router

Instance

Weight

string

The weight of the route.

100

Enabled

string

Indicates whether the route is available. Valid values:

-   **0**: unavailable
-   **1**: available

1

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0",
  "TotalCount": 1,
  "GatewayRouteEntryModels": [
    {
      "Status": "Available",
      "NextHopId": "i-bp11gcl0sm85t9bi****",
      "Description": "test",
      "NextHopType": "EcsInstance",
      "DestinationCidrBlock": "192.168.0.5",
      "Name": "name",
      "NextHops": [
        {
          "NextHopId": "vpn-bp10zyaph5cc8b7c7****",
          "NextHopType": "Instance",
          "Weight": 100,
          "Enabled": 1
        }
      ]
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ResourceNotFound.GatewayRouteTable

The specified resource GatewayRouteTable is not found.

The gateway route table cannot be found.

400

IllegalParam.NextToken

The param of nextToken is illegal

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-07

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ListGatewayRouteTableEntries?updateTime=2023-08-07#workbench-doc-change-demo)
