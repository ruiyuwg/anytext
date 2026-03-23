Deletes a gateway endpoint.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteVpcGatewayEndpoint)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteVpcGatewayEndpoint)

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

vpc:DeleteVpcGatewayEndpoint

delete

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

The ID of the gateway endpoint.

vpce-bp1w1dmdqjpwul0v3\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs a dry run. The system checks the request for potential issues, including the AccessKey pair, the permissions of the RAM user, and the required parameters. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

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

A1122D0F-7B3B-5445-BB19-17F27F97FE1C

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A1122D0F-7B3B-5445-BB19-17F27F97FE1C"
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

DependencyViolation.Association

The specified resource of \[%s\] depends on \[%s\], so the operation cannot be completed.

The resource of the operation has dependencies. Please disassociate them first.

400

Forbbiden

User not authorized to operate on the specified resource.

User not authorized to operate on the specified resource.

400

InvalidRegionId.NotFound

The regionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
