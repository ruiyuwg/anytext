Disassociates a gateway route table from an IPv4 gateway.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DissociateRouteTableFromGateway)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DissociateRouteTableFromGateway)

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

vpc:DissociateRouteTableFromGateway

get

\*Ipv4Gateway

`acs:vpc:{#regionId}:{#accountId}:ipv4gateway/{#ipv4gatewayId}`

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

The region ID of the IPv4 gateway from which you want to disassociate the gateway route table.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

ap-southeast-6

RouteTableId

string

Yes

The ID of the gateway route table.

vtb-5ts0ohchwkp3dydt2\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to only precheck the request. Valid values:

-   **true**: prechecks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
-   **false** (default): sends the request. After the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.

false

GatewayId

string

Yes

The ID of the IPv4 gateway.

ipv4gw-5tsnc6s4ogsedtp3k\*\*\*\*

GatewayType

string

Yes

The type of a gateway to be disassociated from a route table.

Ipv4Gateway

## Response parameters

Parameter

Type

Description

Example

object

The returned information.

RequestId

string

The ID of the request.

C5644C9A-7480-13B6-AECB-30FF142E3724

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C5644C9A-7480-13B6-AECB-30FF142E3724"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationFailed.NotExistAssociateRelation

The operation is not failed because of not exist this associate relation.

The system failed to disassociate the route table from the gateway because the route table is not associated with the gateway.

400

ResourceNotFound.Ipv4Gateway

The specified resource ipv4Gateway is not found.

The IPv4 gateway is not found and cannot be deleted.

400

IncorrectStatus.Ipv4Gateway

The status of %s \[%s\] is incorrect.

The IPv4 gateway is in an invalid state. Try again later.

400

ResourceNotFound.GatewayRouteTable

The specified resource GatewayRouteTable is not found.

The gateway route table cannot be found.

400

IncorrectStatus.GatewayRouteTable

The status of %s \[%s\] is incorrect.

The gateway route table is in an invalid state. Try again later.

400

ResourceNotFound.RouteTable

The specified resource gatewayRouteTable is not found.

The gateway route table does not exist.

400

OperationDenied.RouteTableTypeIncorrect

The operation is not allowed because of %s.

The gateway route table is not a border gateway route table.

400

IncorrectStatus.Ipv6Gateway

The status of %s \[%s\] is incorrect.

The IPv6 gateway is in an unstable state. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-14

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DissociateRouteTableFromGateway?updateTime=2023-08-14#workbench-doc-change-demo)
