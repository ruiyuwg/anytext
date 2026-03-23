Modifies the zones and zone attributes of a Network Load Balancer (NLB) instance.

## Operation description

When you call this operation, make sure that you specify all the zones of the NLB instance, including the existing zones and new zones. If you do not specify the existing zones, the existing zones are removed.

Prerequisites

-   An NLB instance is created. For more information, see [CreateLoadBalancer](/help/en/slb/api-createloadbalancer) .
    
-   You can call the [GetLoadBalancerAttribute](/help/en/slb/api-getloadbalancerattribute-nlb) operation to query the zones and zone attributes of an NLB instance.
    
-   **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](/help/en/slb/api-getjobstatus) operation query to query the status of a task:
    
    -   If the task is in the **Succeeded** state, the zones and zone attributes are modified.
    -   If the task is in the **Processing** state, the zones and zone attributes are being modified. In this case, you can perform only query operations.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateLoadBalancerZones)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateLoadBalancerZones)

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

nlb:UpdateLoadBalancerZones

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

The ID of the NLB instance.

nlb-83ckzc8d4xlp8o\*\*\*\*

ZoneMappings

array<object>

Yes

The mappings between the zones and the vSwitches. You can specify up to 10 zones.

ZoneMapping

object

Yes

The mapping between the zone and the vSwitch. You can specify up to 10 zones.

VSwitchId

string

Yes

The ID of the vSwitch in the zone. By default, each zone uses one vSwitch and one subnet.

vsw-bp1rmcrwg3erh1fh8\*\*\*\*

ZoneId

string

Yes

The zone ID. You can call the [DescribeZones](/help/en/slb/api-describezones) operation to query the most recent zone list.

cn-hangzhou-a

PrivateIPv4Address

string

No

The private IP address.

192.168.36.16

AllocationId

string

No

The ID of the elastic IP address (EIP) or Anycast EIP.

eip-bp1aedxso6u80u0qf\*\*\*\*

EipType

string

No

The type of the EIP. Valid values:

-   **Common**: an EIP
-   **Anycast**: an Anycast EIP

**Note** For regions that support Anycast EIPs, see [Limits](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance) .This parameter is required if **AddressType** is set to **Internet**.

Common

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
-   **false** (default): validates the request and performs the request. If the request passes the validation, an HTTP 2xx status code is returned and the operation is performed.

false

ClientToken

string

No

The client token used to ensure the idempotence of the request.

You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.

**Note** If you do not set this parameter, the value of **RequestId** is used.\*\*\*\* The value of **RequestId** is different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The ID of region where the NLB instance is deployed.

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

ResourceInCreating.loadbalancer

The specified resource of loadbalancer is creating, please try again later.

The specified resource of loadbalancer is creating, please try again later.

400

OperationDenied.ProtectedPrivateIPv4AddressChanged

The operation is not allowed because of ProtectedPrivateIPv4AddressChanged.

\-

400

OperationFailed.vSwitchNotSupportIpv6

The operation failed because of vSwitchNotSupportIpv6.

\-

400

OperationDenied.%s

The operation is not allowed because of %s.

\-

400

OperationDenied.ZoneVSwitchChanged

The operation is not allowed because of ZoneVSwitchChanged.

The existing zone does not allow changes to the virtual switch.

400

InvalidZones

The current zone list is illegal.

The Availability Zone used in Zone maping is illegal.

400

ResourceInConfiguring.loadbalancer

The specified resource of loadbalancer is being configured, please try again later.

The specified resource of loadbalancer is being configured, please try again later.

400

SystemBusy

System is busy, please try again later.

\-

400

ResourceNotEnough.VSwitchIp

The specified resource of VSwitchIp is not enough.

The specified virtual switch (vSwitch) IP resources are insufficient.

403

UnauthorizedZone

The specified zone of %s is not authorized.

\-

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

404

ResourceNotFound.VSwitch

The specified resource of vSwitch is not found.

The specified vSwitch resource was not found. Please check the input parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerZones?updateTime=2024-04-02#workbench-doc-change-demo)

2024-01-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerZones?updateTime=2024-01-22#workbench-doc-change-demo)

2023-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerZones?updateTime=2023-12-18#workbench-doc-change-demo)

2023-10-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerZones?updateTime=2023-10-30#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerZones?updateTime=2023-09-26#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerZones?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateLoadBalancerZones?updateTime=2023-08-22#workbench-doc-change-demo)
