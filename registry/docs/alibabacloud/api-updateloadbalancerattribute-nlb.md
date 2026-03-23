Updates the attributes, including the name, of a Network Load Balancer (NLB) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateLoadBalancerAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateLoadBalancerAttribute)

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

nlb:UpdateLoadBalancerAttribute

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

nlb-wb7r6dlwetvt5j\*\*\*\*

LoadBalancerName

string

No

The NLB instance name.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

NLB1

CrossZoneEnabled

boolean

No

Specifies whether to enable cross-zone load balancing for the NLB instance. Valid values:

-   **true**
-   **false**

false

DryRun

boolean

No

Specifies whether to perform a dry run, without sending the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
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

cn-beijing

Cps

integer

No

The maximum number of new connections per second in each zone supported by the NLB instance (virtual IP address). Valid values: **1** to **1000000**.

1

## Response parameters

Parameter

Type

Description

Example

object

Updates the attributes, including the name, of an NLB instance.

RequestId

string

The request ID.

7294679F-08DE-16D4-8E5D-1625685DC10B

JobId

string

The ID of the asynchronous task.

aab74cfa-3bc4-48fc-80fc-0101da5a\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7294679F-08DE-16D4-8E5D-1625685DC10B",
  "JobId": "aab74cfa-3bc4-48fc-80fc-0101da5a****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

SystemBusy

System is busy, please try again later.

\-

400

ResourceInConfiguring.loadbalancer

The specified resource of loadbalancer is being configured, please try again later.

The specified resource of loadbalancer is being configured, please try again later.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

IllegalParam.loadBalancerName

Param loadBalancerName is illegal.

The instance name is invalid. Check the parameters.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAttribute?updateTime=2024-01-24#workbench-doc-change-demo)

2023-12-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAttribute?updateTime=2023-12-20#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAttribute?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAttribute?updateTime=2023-08-22#workbench-doc-change-demo)
