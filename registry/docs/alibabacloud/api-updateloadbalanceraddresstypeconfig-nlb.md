Changes the network type of the IPv4 address for a Network Load Balancer (NLB) instance.

## Operation description

-   Make sure that an NLB instance is created. For more information, see [CreateLoadBalancer](/help/en/slb/api-createloadbalancer) .
    
-   You can call the [GetLoadBalancerAttribute](/help/en/slb/api-getloadbalancerattribute-nlb) operation to query the **AddressType** value of an NLB instance after you change the network type.
    
-   **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](/help/en/slb/api-getjobstatus) operation to query the task status:
    
    -   If the task is in the **Succeeded** state, the network type of the IPv4 address of the NLB instance is changed.
    -   If the task is in the **Processing** state, the network type of the IPv4 address of the NLB instance is being changed. In this case, you can perform only query operations.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig)

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

nlb:UpdateLoadBalancerAddressTypeConfig

update

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

-   nlb:AddressType

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

The ID of the NLB instance.

nlb-83ckzc8d4xlp8o\*\*\*\*

AddressType

string

Yes

The new network type. Valid values:

-   **Internet**: The nodes of an Internet-facing NLB instance have public IP addresses. The DNS name of an Internet-facing NLB instance is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing NLB instances can route requests from clients over the Internet.
-   **Intranet**: The nodes of an internal-facing NLB instance have only private IP addresses. The DNS name of an internal-facing NLB instance is publicly resolvable to the private IP addresses of the nodes. Therefore, internal-facing NLB instances can route requests only from clients with access to the virtual private cloud (VPC) for the NLB instance.

Internet

ZoneMappings

array<object>

No

The mappings between zones and vSwitches. You can specify up to 10 zones.

ZoneMapping

object

No

The mapping between the zone and a vSwitch in the zone.

VSwitchId

string

No

The ID of the vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an NLB instance.

vsw-bp10ttov87felojcn\*\*\*\*

ZoneId

string

No

The zone ID of the NLB instance.

You can call the [DescribeZones](/help/en/slb/api-describezones) operation to query the most recent zone list.

cn-hangzhou-a

AllocationId

string

No

The ID of the elastic IP address (EIP).

eip-bp1aedxso6u80u0qf\*\*\*\*

EipType

string

No

The type of the EIP. Valid values:

-   **Common**: an EIP
-   **Anycast**: an Anycast EIP

**Note** This parameter is required only if **AddressType** is set to **Internet**.

Common

DryRun

boolean

No

Perform a dry run without actually making the request. Valid values are:

-   **true**: Perform only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the check, an error message specifying the issue is returned. If the request passes, the `DryRunOperation` error code is returned.
-   **false** (default): Check the request and perform the operation. If the request passes the check, a 2xx HTTP status code is returned, and the operation is performed.

false

ClientToken

string

No

The client token used to ensure the idempotence of the request.

You can use the client to generate this value. Ensure that the value is unique among all requests. Only ASCII characters are allowed.

**Note** If you do not specify this parameter, the value of **RequestId** is used.\*\*\*\* **RequestId** of each request is different.

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

Changes the network type of the IPv4 address of an NLB instance.

RequestId

string

The request ID.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

JobId

string

The ID of the asynchronous task.

72dcd26b-f12d-4c27-b3af-18f6aed5\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "JobId": "72dcd26b-f12d-4c27-b3af-18f6aed5****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DuplicatedParam.AllocationId

The param of AllocationId is duplicated.

\-

400

ResourceInConfiguring.loadbalancer

The specified resource of loadbalancer is being configured, please try again later.

The specified resource of loadbalancer is being configured, please try again later.

400

OperationDenied.EipAlreadyInBandwidthPackage

The operation is not allowed because of EipAlreadyInBandwidthPackage.

\-

400

ResourceInConfiguring.%s

The specified resource of %s is being configured, please try again later.

\-

400

OperationDenied.AddressTypeNotChanged

The operation is not allowed because of AddressTypeNotChanged.

\-

400

Mismatch.ZoneIdAndVswitchId

The ZoneIdAndVswitchId is mismatched for %s and %s.

\-

400

TagInvokeError

listTagsByResourceIds: InvalidResourceId.NotFound : The specified ResourceIds are not found in our records.

\-

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

IllegalParam

The param of %s is illegal.

\-

400

Throttling.User

Request was denied due to api flow control.

Request was denied due to api flow control.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

404

ResourceNotFound.AnycastInstance

The specified resource of AnycastInstance is not found.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig?updateTime=2025-01-16#workbench-doc-change-demo)

2024-02-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig?updateTime=2024-02-04#workbench-doc-change-demo)

2024-01-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig?updateTime=2024-01-22#workbench-doc-change-demo)

2023-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig?updateTime=2023-10-30#workbench-doc-change-demo)

2023-09-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig?updateTime=2023-09-12#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerAddressTypeConfig?updateTime=2023-08-22#workbench-doc-change-demo)
