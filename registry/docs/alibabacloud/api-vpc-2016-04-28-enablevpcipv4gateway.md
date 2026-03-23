Activates an IPv4 gateway.

## Operation description

## [](#description)[](#)Description

-   **EnableVpcIpv4Gateway** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the [GetIpv4GatewayAttribute](/help/en/vpc/api-getipv4gatewayattribute) operation to query the status of an IPv4 gateway.
    
    -   If the IPv4 gateway is in the **Activating** state, the IPv4 gateway is being activated.
    -   If the IPv4 gateway is in the **Created** state, the IPv4 gateway is activated.
-   You cannot repeatedly call the **EnableVpcIpv4Gateway** operation to activate an IPv4 gateway within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/EnableVpcIpv4Gateway)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/EnableVpcIpv4Gateway)

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

vpc:EnableVpcIpv4Gateway

update

\*Ipv4Gateway

`acs:vpc:{#regionId}:{#accountId}:ipv4gateway/{#ipv4gatewayId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

Ipv4GatewayId

string

Yes

The ID of the IPv4 gateway that you want to activate.

ipv4gw-5tsp9lumsxoqizvq2\*\*\*\*

RegionId

string

Yes

The region ID of the IPv4 gateway.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent list of regions.

ap-southeast-6

DryRun

boolean

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

RouteTableList

array

No

A list of route tables. The system adds a 0.0.0.0/0 route that points to the IPv4 gateway to the route tables.

string

No

A list of route tables. The system adds a 0.0.0.0/0 route that points to the IPv4 gateway to the route tables. The system supports at most 10 route tables.

**Note** The route table and the IPv4 gateway must belong to the same virtual private cloud (VPC).

vtb-5ts0ohchwkp3dydt2\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

54B48E3D-DF70-471B-AA93-08E683A1B45

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

VPC\_ROUTE\_ENTRY\_CIDR\_BLOCK\_DUPLICATE

Specified CIDR block is already exists.

\-

400

ResourceNotFound.Ipv4Gateway

The specified resource ipv4Gateway is not found.

The IPv4 gateway is not found and cannot be deleted.

400

IncorrectStatus.Ipv4Gateway

The status of %s \[%s\] is incorrect.

The IPv4 gateway is in an invalid state. Try again later.

400

OperationFailed.Ipv4GatewayAlreadyActive.

The operation failed because of ipv4Gateway is already active.

\-

400

OperationDenied.ConflictOfAllZeroRouting

The operation is not allowed because of routetable \[%s\] exist all-zero route entry.

\-

400

UnsupportedFeature.Ipv4Gateway

The feature of ipv4Gateway is not supported for \[%s\].

The system failed to create the IPv4 gateway because IPv4 gateways are not supported.

400

OperationDenied.VpnExist

The operation is not allowed because of existing vpn.

You are not allowed to create an IPv4 gateway because a VPN gateway already exists in the VPC.

400

OperationDenied.NatgatewayExist

The operation is not allowed because of existing nat.

\-

400

OperationDenied.DirectEipExist

The operation is not allowed because of existing directEip.

EIPs are associated with the VPC in cut-through mode or enhanced NAT gateways are deployed in the VPC.

400

OperationDenied.VpcHasAlreadyActive

The operation is not allowed because of vpc has already been active.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-07

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/EnableVpcIpv4Gateway?updateTime=2023-08-07#workbench-doc-change-demo)
