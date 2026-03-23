Disassociates an elastic IP address (EIP) from a cloud resource.

## Operation description

-   **UnassociateEipAddress** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEipAddresses](/help/en/eip/developer-reference/api-120193) operation to query the status of the task.
    
    -   If the EIP is in the **Unassociating** state, the EIP is being disassociated. In this state, you can only query the EIP and cannot perform other operations.
    -   If the EIP is in the **Available** state, the EIP is disassociated.
-   You cannot repeatedly call the **UnassociateEipAddress** operation within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/UnassociateEipAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/UnassociateEipAddress)

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

vpc:UnassociateEipAddress

delete

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

\*Address

`acs:vpc:{#regionId}:{#accountId}:eip/{#AllocationId}`

HaVip

`acs:vpc:{#regionId}:{#accountId}:havip/{#HaVipId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

Force

boolean

No

Specifies whether to disassociate the EIP from a NAT gateway if a DNAT or SNAT entry is added to the NAT gateway. Valid values:

-   **false** (default)
-   **true**

false

RegionId

string

No

The ID of the region to which the EIP belongs. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

AllocationId

string

Yes

The ID of the EIP that you want to disassociate.

eip-2zeerraiwb7uj6i0d\*\*\*\*

InstanceId

string

No

The ID of the instance from which you want to disassociate the EIP.

i-hp3akk9irtd69jad\*\*\*\*

InstanceType

string

No

The type of instance from which you want to disassociate the EIP. Valid values:

-   **EcsInstance** (default): an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC)
-   **SlbInstance**: a Server Load Balancer (SLB) instance in a VPC
-   **NetworkInterface**: a secondary elastic network interface (ENI) in a VPC
-   **Nat**: a NAT gateway
-   **HaVip**: a high-availability virtual IP address (HAVIP)

EcsInstance

PrivateIpAddress

string

No

The private IP address of the ECS instance or the secondary ENI from which you want to disassociate the EIP.

192.XX.XX.2

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectEipStatus

Current elastic IP status does not support this operation.

You cannot perform the operation when the specified EIP is in the current state.

400

InvalidInstanceId.NotFound

Specified instance does not exist.

The instance does not exist. Check the instance ID.

400

IncorrectInstanceStatus

The current status of instance does not support this operation.

This operation cannot be performed while the instance is in the current state.

400

InvalidInstanceType.ValueNotSupported

The specified value of InstanceType is not supported.

InstanceType is set to an invalid value.

400

IncorrectHaVipStatus

This operation is denied because satus of the specified HaVip is neither Available nor InUse.

You cannot perform the operation when the specified HAVIP is in the Available or InUse state.

400

OperationDenied

Eip of default vpc not allow this operation

The operation is not supported by EIPs in a default VPC.

400

InvalidParameter

The specified parameter is not valid.

The parameter is set to an invalid value.

400

TaskConflict

The eip operate too frequent, TaskConflict.

Operations are too frequent and tasks conflict with each other.

400

InvalidBindingStatus

The eip binding status invalid.

The EIP is in an invalid state.

400

Forbidden.FinancialLocked

The ip business status is invalid.

The error message returned because the instance has overdue payments.

400

InvalidIpStatus.HasBeenUsedBySnatTable

The removed ip address has been used by snat table.

\-

400

InvalidIpStatus.HasBeenUsedByForwardEntry

The specified address has been used by forwardTable.

\-

400

Eni.Attached

The eni should be detached from ecs when associating with direct eip.

If the ENI is associated with an EIP in cut-through mode, you must disassociate the ENI from the ECS instance.

400

InvalidEIPStatus.BizDisabled

The EIP has been locked.

The error message returned because the EIP is locked.

400

InvalidStatus.EcsStatusNotSupport

The special instance status Pending is not support operate

The operation is not supported because the instance is suspended.

400

InvalidStatus.EniStatusNotSupport

%s

\-

400

InvalidStatus.SnatOrDnat

Operation failed because snat or dnat in unstable status.

The EIP failed to be disassociated because the SNAT or DNAT entry is in an unstable state.

400

DependencyViolation.SnatEntry

The specified eip is in ip pool.

\-

400

%s

%s

\-

400

InvalidStatus.NotAllow

Bind instance status invalid

The status of the associated instance is invalid.

400

DependencyViolation.SnatEntry

The specified resource of Snat depends on Eip, so the operation cannot be completed.

\-

400

Forbidden

The eip instance owener error

The EIP does not belong to your account. Check whether you have the permissions to perform the operation on the EIP.

400

InvalidLoadBalancerId.NotFound

LoadBalancerId does not exist.

The ID of the SLB instance does not exist.

400

OperationFailed.SystemBusy

Operation failed because system is busy.

The error message returned because the system is busy. Try again later.

404

InvalidAllocationId.NotFound

Specified allocation ID is not found

The specified EIP does not exist. Check whether the specified value is valid.

404

InvalidAllocationId.NotFound

Specified allocation ID is not found.

The error message returned because the specified EIP does not exist. Check whether the value of the parameter is valid.

404

InvalidBindInstance.NotFound

The specified bind instance does not exist.

\-

404

Forbidden.RegionNotFound

Specified region is not found during access authentication.

The specified region does not exist. Check whether the specified region ID is valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-31

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UnassociateEipAddress?updateTime=2023-07-31#workbench-doc-change-demo)

2023-06-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UnassociateEipAddress?updateTime=2023-06-26#workbench-doc-change-demo)
