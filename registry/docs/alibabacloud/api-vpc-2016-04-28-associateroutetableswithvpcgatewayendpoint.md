Associates a route table with a gateway endpoint.

## Operation description

When you call this operation, take note of the following limits:

-   The gateway endpoint to be associated with the route table cannot be in one of the following states: **Creating**, **Modifying**, **Associating**, **Dissociating**, or **Deleting**.
    
-   The route table cannot be in one of the following states: **Creating**, **Modifying**, **Associating**, **Dissociating**, or **Deleting**.
    
-   The gateway endpoint and route table must belong to the same virtual private cloud (VPC).
    
-   The route table cannot be shared.
    
-   You cannot associate a gateway endpoint with a virtual border router (VBR) route table.
    
-   You can associate a gateway endpoint with at most 20 route tables at a time.
    
-   **AssociateRouteTablesWithVpcGatewayEndpoint** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetVpcGatewayEndpointAttribute](/help/en/vpc/api-311017) operation to query whether a route table is associated with a gateway endpoint.
    
    -   If the **Associating** status is returned, the route table is being associated with the gateway endpoint.
    -   If the **Created** status is returned, the route table is associated with the gateway endpoint.
-   You cannot repeatedly call the **AssociateRouteTablesWithVpcGatewayEndpoint** operation within a specific period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AssociateRouteTablesWithVpcGatewayEndpoint)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AssociateRouteTablesWithVpcGatewayEndpoint)

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

vpc:AssociateRouteTablesWithVpcGatewayEndpoint

create

\*GatewayEndpoint

`acs:vpc:{#regionId}:{#accountId}:gatewayendpoint/{#GatewayEndpointId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

EndpointId

string

Yes

The ID of the gateway endpoint to be associated with the route table.

vpce-m5e371h5clm3uadih\*\*\*\*

RouteTableIds

array

Yes

The ID of the route table. Valid values of **N** are **1** to **20**, which specifies that you can associate a gateway endpoint with at most 20 route tables at a time.

string

Yes

The ID of the route table. Valid values of **N** are **1** to **20**, which specifies that you can associate a gateway endpoint with at most 20 route tables at a time.

vtb-m5elgtm3aj586iitr\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate a client token. Make sure that a unique client token is used for each request. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

5A2CFF0E-5718-45B5-9D4D-70B3FF3898

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks your AccessKey pair, the RAM user permissions, and the required parameters. If the request fails the dry run, the DryRunOperation error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

RegionId

string

Yes

The region ID of the gateway endpoint.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

59BDDA2D-FB52-59F9-9DC5-5EA7D6808B8E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "59BDDA2D-FB52-59F9-9DC5-5EA7D6808B8E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationFailed.ConcurrentOperation

The operation is failed because of concurrent operation.

\-

400

IdempotentParameterMismatch

The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical.

\-

400

ResourceNotFound.GatewayEndpoint

The specified resource gateway endpoint is not found.

The error message returned because the specified gateway endpoint does not exist.

400

IncorrectStatus.GatewayEndpoint

The status of GatewayEndpoint \[%s\] is incorrect.

\-

400

ResourceNotFound.ServiceName

The specified resource service name is not found.

\-

400

ResourceNotFound.PrefixList

The specified resource prefixList is not found.

\-

400

ResourceNotFound.RouteTable

The specified resource routetable is not found.

\-

400

Mismatch.VpcAndRouteTable

The vpc and routetable are mismatched.

\-

400

IncorrectStatus.RouteTable

The status of route table \[%s\] is incorrect.

\-

400

ResourceAlreadyExist.Association

The specified resource of \[%s\] is already exist.

\-

400

VPC\_ROUTE\_ENTRY\_CIDR\_BLOCK\_DUPLICATE

Specified CIDR block is already exists.

\-

400

VPC\_SWITCH\_STATUS\_ERROR

vSwitch status error, %s

\-

400

QuotaExceeded.VpcRouteEntryNum

The quota of vpc route entry num is exceeded, usage %s/%s.

\-

400

OperationUnsupported.DestinationCidrBlockOverlapWithVSwitch

The operation is failed because of destination CIDR block is in the CIDR of the VSwitch.

\-

400

SystemBusy

System is busy, please try again later.

\-

400

Forbbiden

User not authorized to operate on the specified resource.

User not authorized to operate on the specified resource.

400

InvalidRegionId.NotFound

The regionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

400

IncorrectStatus.Vpc

The status of vpc \[%s\] is incorrect.

\-

400

IncorrectStatus.CenStatus

The status of vpc cenStatus \[%s\] is incorrect.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateRouteTablesWithVpcGatewayEndpoint?updateTime=2023-12-07#workbench-doc-change-demo)
