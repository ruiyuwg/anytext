Changes the network type of the IPv6 address of a dual-stack Network Load Balancer (NLB) instance from internal-facing to Internet-facing.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/EnableLoadBalancerIpv6Internet)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/EnableLoadBalancerIpv6Internet)

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

nlb:EnableLoadBalancerIpv6Internet

update

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

LoadBalancerId

string

Yes

The NLB instance ID.

nlb-83ckzc8d4xlp8o\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run, without sending the actual request. Valid values:

-   **true**: prechecks the request without performing the operation. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token. Ensure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system uses the **request ID** as the **client token**. The **request ID** is different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The region ID of the NLB instance.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

response

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.NonDualStackInstance

The operation is not allowed because of NonDualStackInstance.

\-

400

ResourceInCreating.%s

The specified resource of %s is creating, please try again later.

\-

400

ResourceInCreating.loadbalancer

The specified resource of loadbalancer is creating, please try again later.

The specified resource of loadbalancer is creating, please try again later.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

404

ResourceNotFound.Ipv6Gateway

The specified resource of Ipv6Gateway is not found.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/EnableLoadBalancerIpv6Internet?updateTime=2024-02-29#workbench-doc-change-demo)

2023-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/EnableLoadBalancerIpv6Internet?updateTime=2023-12-18#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/EnableLoadBalancerIpv6Internet?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/EnableLoadBalancerIpv6Internet?updateTime=2023-08-22#workbench-doc-change-demo)

2023-03-30

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/EnableLoadBalancerIpv6Internet?updateTime=2023-03-30#workbench-doc-change-demo)
