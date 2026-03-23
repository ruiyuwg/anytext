Changes the virtual private cloud (VPC), private IP address, security groups, or vSwitch of an Elastic Compute Service (ECS) instance located in a VPC.

## Operation description

The ECS instance that you want to manage must be in the **Stopped** (`Stopped`) state.

-   When you call this operation to change the private IP address or vSwitch of an ECS instance, take note of the following items:
    
    -   If the instance is a new instance, you must restart the instance before you call this operation.
    -   After the private IP address or vSwitch of the instance is changed, you must restart the instance before you can recall this operation.
-   When you call this operation to change the VPC of an ECS instance, take note of the following items:
    
    -   **ECS instance:**
        
        -   The instance cannot be in the Locked, To Be Released, Expired, To Be Recycled, Expired and Being Recycled, or Overdue and Being Recycled state. For more information, see [Overview of instances](/help/en/ecs/user-guide/instance-lifecycle).
        -   The instance cannot be associated with Server Load Balancer (SLB) instances.
        -   The instance cannot be used in other Alibaba Cloud services. For example, the instance cannot be in the process of being migrated or having its VPC changed, or the databases deployed on the instance cannot be managed by Data Transmission Service (DTS).
    -   **Network:**
        
        -   The cut-through mode or the multi-elastic IP address (EIP)-to-elastic network interface (ENI) mode cannot be enabled for the ECS instance.
        -   The ECS instance cannot be associated with a high-availability virtual IP address (HAVIP).
        -   The vSwitch of the ECS instance cannot be associated with a custom route table.
        -   Global Accelerator (GA) cannot be activated for the ECS instance.
        -   Secondary ENIs cannot be attached to the ECS instance.
        -   The ECS instance cannot be assigned an IPv6 address.
        -   The primary ENI of the ECS instance cannot be associated with multiple IP addresses.
        -   The vSwitch must belong to the new VPC.
        -   The original and new vSwitches must reside in the same zone.
        -   If you assign a private IP address to the primary ENI of the ECS instance, the private IP address must be an idle IP address within the CIDR block of the new vSwitch. If you do not assign a private IP address to the primary ENI of the ECS instance, a private IP address is randomly assigned to the ENI. Make sure that sufficient IP addresses are available in the CIDR block of the new vSwitch.
        -   If you use a VPC that is shared by another Alibaba Cloud account with your account and want to change the security groups of the ECS instance, specify the security groups that you created in the VPC, instead of the security group created by the VPC owner, as the new security groups.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceVpcAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceVpcAttribute)

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

ecs:ModifyInstanceVpcAttribute

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/{#vswitchId}`

-   vpc:tag
-   vpc:VPC

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the ECS instance.

**Note** When you call this operation, the ECS instance must be in the **Stopped** (`Stopped`) state. For other limits on the ECS instance, see the **Usage notes** section of this topic.

i-bp1iudwa5b1tqag1\*\*\*\*

VSwitchId

string

Yes

The ID of the new vSwitch.

-   If you set this parameter to the ID of the current vSwitch, the vSwitch of the ECS instance remains unchanged.
-   If you set this parameter to the ID of a different vSwitch and leave `VpcId` empty, the new vSwitch must belong to the same zone and VPC as the current vSwitch.
-   If you specify `VpcId`, the vSwitch specified by this parameter must belong to the specified VPC and the same zone as the current vSwitch.

vsw-bp1s5fnvk4gn3tw12\*\*\*\*

PrivateIpAddress

string

No

The new private IP address of the ECS instance.

**Note** The value of `PrivateIpAddress` depends on the value of `VSwitchId`. The specified IP address must be within the CIDR block of the specified vSwitch.

By default, if this parameter is empty, a private IP address is randomly assigned from the CIDR block of the specified vSwitch.

172.17.\*\*.\*\*

VpcId

string

No

The ID of the new VPC.

vpc-bp1vwnn14rqpyiczj\*\*\*\*

SecurityGroupId

array

No

The IDs of new security groups to which the ECS instance belongs after the VPC is changed. This parameter is required only if `VpcId` is specified.

-   The security groups that you specify must belong to the new VPC.
-   You can specify one or more security groups. The valid values of N vary based on the maximum number of security groups to which an ECS instance can belong. For more information, see [Limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) .
-   The specified security groups must be of the same type.
-   You can switch the ECS instance to security groups of a different type. To ensure network connectivity, we recommend that you understand the differences in rule configurations of the two security group types before you switch the ECS instance to security groups of a different type. For more information, see [Overview of security groups](/help/en/ecs/user-guide/overview-44).

string

No

The ID of new security group N.

sg-o6w9l8bc8dgmkw87\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidTarget.TrafficMirrorSession

Instance is target of traffic mirror session.

\-

400

InvalidSource.TrafficMirrorSession

Instance is source of traffic mirror session.

\-

400

InvalidPrivateIpAddress.Malformed

Specified private IP address is malformed.

The specified private IP address is invalid.

400

InvalidPrivateIpAddress.Duplicated

Specified private IP address is duplicated.

\-

400

IncorrectVSwitchStatus

The current status of virtual switch does not support this operation.

The specified vSwitch is in the Pending state and cannot be deleted.

400

IncorrectInstanceStatus

The current status of instance does not support this operation.

The instance is in a state that does not support the current operation.

400

OperationDenied

Specified operation is denied as your instance is not in VPC.

The specified instance does not reside in a VPC.

400

InvalidVSwitchId.Mismatch

Specified instance and virtual switch are not in the same zone.

The specified instance and vSwitch are not in the same zone.

400

InvalidPrivateIpAddress.Mismatch

Specified private IP address is not in the CIDR block of virtual switch.

The specified private IP address is not in the CIDR block of the specified vSwitch.

400

InvalidPrivateIp.Changing

Previous action is not finished yet.

The private IP address is being modified.

400

InvalidPrivateIpAddress.Duplicated

The specified IP address already exists on current ENI.

\-

400

OperationDenied

The operation is denied due to existence of an SNAT entity.

\-

400

PrimaryEniHasSubIp

Primary network interface of the specified instance has more than one private ip.

The primary ENI has multiple secondary private IP addresses.

400

VSwitchIdNotMatch

The subnet of private ip is different to the instance, please unbind ha vip.

\-

400

InvalidOperation.EniCountExceeded

The number of ENIs in an enterprise security group has reached the maximum limit.

\-

400

InvalidParameter.SecurityGroupId

Security group ids are invalid.

Invalid security group ID

400

InvalidPrivateIpAddress.Duplicated

The specified private IP address "%s" is duplicated.

The specified IP address is already in use.

401

InvalidOperation.SecurityGroupNotAuthorized

The specified security group is not authorized to operate.

You do not have permission to operate the current security group.

403

OperationDenied

The Specified operation is denied as your instance is locked for security reasons.

The operation is denied because the instance is locked for security reasons.

403

InvalidIp.Ipv6Assigned

The specified instance has been assigned IPv6 address.

\-

403

OperationDenied

%s

The operation is denied.

403

SecurityGroupInstanceLimitExceed

%s

\-

403

InvalidInstance.HasTransitionRecord

The operation is denied because the specified instance has a migration plan.

\-

403

InvalidInstanceStatus.NotNormal

The Specified operation is denied due to instance status.

\-

403

InvalidVpcId.SharedVpc

The Specified operation is denied as your targe vpc is SharedVpc.

\-

403

InvalidOperation.NotAllowed

The operation is denied because the specified VPC has advanced features enabled.

\-

403

InvalidParameter.ToSecurityGroupId

%s

\-

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

403

InvalidOperation.VswAndEcsAvailabilityZoneMismatch

Specified instance and virtual switch are not in the same zone.

The instance and the destination VSwitch do not belong to the same zone.

403

InvalidOperation.CloudBoxEcsNotSupport

Cloud box ecs instance does not support modifying VPC.

Cloud box instances do not support modifying VPC

403

AclLimitExceed

%s

The number of ACL rules for an ENI or instance exceeds the upper limit.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidVSwitchId.NotFound

Specified virtual switch does not exist.

The specified vSwitch ID does not exist.

404

InvalidVSwitchId.NotFound

Specified virtual switch is not found in current VPC.

The specified vSwitch does not exist in the current VPC.

404

NoSuchResource

The specified resource is not found.

The specified resource does not exist.

404

InvalidParameter.InvalidInstanceId

The specified InstanceId does not exist.

The specified InstanceId does not exist.

404

InvalidParameter.VSwitchId

The specified virtual vswitch does not exist.

The specified vSwitch does not exist.

404

InvalidRegion.ValueNotSupported

The specified Region does not exist.

\-

404

InvalidInstance.AttachedEni

The Specified operation is denied due to elastic network interface.

The VPC cannot be changed while the instance has secondary ENIs bound.

404

InvalidIp.MultiPrimaryIp

The Specified operation is denied due to multi private ip.

This operation is not allowed while the primary ENI has multiple private IP addresses.

404

InvalidIp.Ipv6

The Specified operation is denied due to ipv6.

\-

404

InvalidVSwitch.NotBelongToVpc

%s

\-

404

InvalidParameter.EniNo

%s

\-

404

InvalidSecurityGroupId.NotFound

%s

The specified security group ID does not exist.

404

InvalidParameter.SecurityGroupIdRepeated

%s

The security group ID passed in is duplicate.

404

InvalidSecurityGroupType.NotSupportClassic

The specified SecurityGroupIds have classic group type.

The specified security group is in the classic network. Check whether the specified SecurityGroupIds.N parameter is valid.

404

InvalidSecurityGroupVpc.NotBelongToOneVpc

The specified SecurityGroupIds are belong to different vpc.

The specified security groups belong to different VPCs. Check whether the specified SecurityGroupIds.N parameter is valid. You can call the DescribeSecurityGroups operation to query the VPCs to which the security groups belong.

404

EnterpriseGroupLimited.MutliGroupType

The specified instance can not join multi SecurityGroup types.

The specified instance cannot belong to both a basic and an advanced security group. You can call the DescribeSecurityGroups operation to query the type of security groups.

404

InvalidParameter.AlreadyInTargetVpc

The specified instance is already in the destination VPC.

\-

404

InvalidParameter.SecurityGroupId

The specified SecurityGroupId.N is invalid or does not exist.

\-

404

JoinedGroupLimitExceed

The specified instance has exceed quota of SecurityGroup.

\-

404

InvalidParameter.MustBeEmpty

The specified parameter SecurityGroupId.N and VpcId need be empty.

The SecurityGroupId.N and VpcId parameters must be left empty.

404

InvalidParameter.NotEnoughIpInVSwitch

The specified virtual switch has not enough available ip.

\-

404

InvalidDependence.MutliDirectlyEip

The Specified operation is denied due to multi directly Eips.

\-

404

InvalidDependence.HaVip

The Specified operation is denied due to HaVip.

\-

404

InvalidDependence.NextHopOfCustomRouter

The Specified operation is denied due to next hop of Custom Router.

This operation is not allowed when the instance is the next hop of custom routes.

404

InvalidDependence.BeenUsedAsAppServer

The Specified operation is denied due to AppServer.

\-

404

InvalidDependence.GrantAccess

The Specified operation is denied due to grant access.

The ECS instance may use other products (such as DBS, DTS, DMS, and Workbench), have records of authorization for other products, and have reverse access rules.

404

InvalidDependence.BindGA

The Specified operation is denied due to GA.

\-

404

InvalidDependence.SLB

The Specified operation is denied as your instance with alb or clb.

The operation is denied because the instance is associated with an ALB instance or a CLB instance.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVpcAttribute?updateTime=2025-12-22#workbench-doc-change-demo)

2025-03-14

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVpcAttribute?updateTime=2025-03-14#workbench-doc-change-demo)

2024-07-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVpcAttribute?updateTime=2024-07-03#workbench-doc-change-demo)

2024-01-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVpcAttribute?updateTime=2024-01-23#workbench-doc-change-demo)

2023-12-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVpcAttribute?updateTime=2023-12-19#workbench-doc-change-demo)

2023-12-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVpcAttribute?updateTime=2023-12-15#workbench-doc-change-demo)

2023-04-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVpcAttribute?updateTime=2023-04-27#workbench-doc-change-demo)
