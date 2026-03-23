Creates a gateway endpoint.

## Operation description

-   **CreateVpcGatewayEndpoint** is an asynchronous operation. After a request is sent, the system returns an **EndpointId** and runs the task in the background. You can call the [ListVpcGatewayEndpoints](/help/en/vpc/developer-reference/api-vpc-2016-04-28-listvpcgatewayendpoints) operation to query the status of the task.
    
    -   If the gateway endpoint is in the **Creating** state, the gateway endpoint is being created.
    -   If the gateway endpoint is in the **Created** state, the gateway endpoint is created.
-   You cannot repeatedly call the **CreateVpcGatewayEndpoint** operation for the same endpoint service within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateVpcGatewayEndpoint)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateVpcGatewayEndpoint)

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

vpc:CreateVpcGatewayEndpoint

create

\*GatewayEndpoint

`acs:vpc:{#regionId}:{#accountId}:gatewayendpoint/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

VpcId

string

Yes

The ID of the virtual private cloud (VPC) where you want to create the gateway endpoint.

The VPC and gateway endpoint must be deployed in the same region.

vpc-bp1gsk7h12ew7oegk\*\*\*\*

ServiceName

string

Yes

The name of the endpoint service.

com.aliyun.cn-hangzhou.oss

PolicyDocument

string

No

The access policy for the cloud service.

For more information about the syntax and structure of the access policy, see [Policy syntax and structure](/help/en/ram/policy-structure-and-syntax).

{ "Version" : "1", "Statement" : \[ { "Effect" : "Allow", "Resource" : \[ "\*" \], "Action" : \[ "\*" \], "Principal" : \[ "\*" \] } \] }

EndpointName

string

No

The name of the gateway endpoint.

The name must be 1 to 128 characters in length.

test

EndpointDescription

string

No

The description of the gateway endpoint.

The description must be 1 to 255 characters in length.

test

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

5A2CFF0E-5718-45B5-9D4D-70B3FF3898

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

ResourceGroupId

string

No

The ID of the resource group to which the gateway endpoint belongs.

rg-acfmxazb4ph\*\*\*\*

Tag

array<object>

No

The tags of the resource.

object

No

Key

string

No

The key of tag N to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

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

RequestId

string

The request ID.

62CFC815-E08A-5CF4-92D1-54273EC9E406

EndpointId

string

The ID of the gateway endpoint.

vpce-bp1w1dmdqjpwul0v3\*\*\*\*

ServiceName

string

The name of the endpoint service.

com.aliyun.cn-hangzhou.oss

EndpointName

string

The name of the gateway endpoint.

test

CreationTime

string

The time when the gateway endpoint was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.

2021-08-27T01:58:37Z

ResourceGroupId

string

The ID of the resource group to which the gateway endpoint belongs.

rg-acfmxazb4ph\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "62CFC815-E08A-5CF4-92D1-54273EC9E406",
  "EndpointId": "vpce-bp1w1dmdqjpwul0v3****",
  "ServiceName": "com.aliyun.cn-hangzhou.oss",
  "EndpointName": "test",
  "CreationTime": "2021-08-27T01:58:37Z",
  "ResourceGroupId": "rg-acfmxazb4ph****"
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

IllegalParam.PolicyDocument

The param of PolicyDocument is illegal.

\-

400

IllegalParam.GatewayEndpointName

The param of GatewayEndpointName is illegal.

\-

400

IllegalParam.GatewayEndpointDescription

The param of GatewayEndpointDescription is illegal.

\-

400

ResourceAlreadyExist.GatewayEndpoint

The specified resource gateway endpoint is already exist.

\-

400

ResourceNotFound.ServiceName

The specified resource service name is not found.

\-

400

ResourceNotFound.VpcId

The specified resource vpc is not found.

\-

400

Forbidden.OperateShareResource

The operation is failed because of shared vpc.

\-

400

IncorrectStatus.Vpc

The status of vpc \[%s\] is incorrect.

\-

400

IncorrectStatus.CenStatus

The status of vpc cenStatus \[%s\] is incorrect.

\-

400

OperationFailed.VpcIpv6Disabled

The operation is failed because of VpcIpv6Disabled.

\-

400

UnsupportedFeature.GatewayEndpoint

The feature of gatewayEndpoint is not supported for %s.

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

OperationDenied.PolicyDocument

The gatewayEndpoint does not support policy.

\-

400

MissingParam.PolicyDocument

The param of PolicyDocument is missing.

\-

400

OperationDenied.NotAuthorized

User not authorized to operate on the specified resource.

\-

400

InvalidPolicy.WrongFormat

Invalid input policy format.

The format of the policy information is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpcGatewayEndpoint?updateTime=2023-07-05#workbench-doc-change-demo)

2023-05-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpcGatewayEndpoint?updateTime=2023-05-29#workbench-doc-change-demo)

2023-03-23

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateVpcGatewayEndpoint?updateTime=2023-03-23#workbench-doc-change-demo)
