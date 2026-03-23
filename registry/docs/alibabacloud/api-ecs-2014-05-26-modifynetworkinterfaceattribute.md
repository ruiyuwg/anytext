Modifies the attributes of an elastic network interface (ENI), such as the number of queues supported by the ENI, the security groups to which the ENI belongs, the queue depth, the communication mode, and whether to retain the ENI when the Elastic Compute Service (ECS) instance to which the ENI is attached is released.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute)

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

ecs:ModifyNetworkInterfaceAttribute

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the ENI. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

NetworkInterfaceName

string

No

The name of the ENI. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

This parameter is left empty by default.

eniTestName

NetworkInterfaceId

string

Yes

The ID of the ENI.

eni-bp67acfmxazb4p\*\*\*\*

QueueNumber

integer

No

The number of queues supported by the ENI. Valid values: 1 to 2048.

-   You can change the number of queues supported by an ENI only when the ENI is in the `Available` state or the ENI is attached (`InUse`) to an instance that is in the `Stopped` state.
-   The number of queues supported by the ENI cannot exceed the maximum number of queues that the instance type allows for each ENI. The total number of queues on all ENIs on an instance cannot exceed the queue quota that the instance type supports. To query the maximum number of queues per ENI and the queue quota for an instance type, you can call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation and check the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` values in the response.

8

Description

string

No

The description of the ENI. The description must be 2 to 255 characters in length and cannot start with [http:// or https://](http://https://%E3%80%82).

This parameter is left empty by default.

testDescription

SecurityGroupId

array

No

The IDs of the security groups to which to add the secondary ENI. The secondary ENI is added to the specified security groups and removed from the original security groups.

-   The valid values of N vary based on the maximum number of security groups to which an ENI can be added. For more information, see the [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota) section of the "Limits and quotas" topic.
-   The new security groups take effect after a short delay.

string

No

The ID of security group N.

-   The valid values of N vary based on the maximum number of security groups to which an ENI can be added. For more information, see the [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota) section of the "Limits and quotas" topic.
-   You can change only the security groups to which a secondary ENI is added.
-   After you specify this parameter, the secondary ENI is added to the specified security groups and removed from the original security groups.
-   The new security groups take effect after a short delay.

sg-bp67acfmxazb4p\*\*\*\*

DeleteOnRelease

boolean

No

Specifies whether to release the ENI when the associated instance is released. Valid values:

-   true
-   false

true

RxQueueSize

integer

No

The receive (Rx) queue depth of the ENI.

Take note of the following items:

-   The Rx queue depth of an ENI must be the same as the transmit (Tx) queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
-   A larger Rx queue depth yields higher inbound throughput but consumes more memory.

8192

TxQueueSize

integer

No

The Tx queue depth of the ENI.

Take note of the following items:

-   The Tx queue depth of an ENI must be the same as the Rx queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
-   A larger Tx queue depth yields higher outbound throughput but consumes more memory.

8192

NetworkInterfaceTrafficConfig

object

No

The communication parameters of the ENI.

NetworkInterfaceTrafficMode

string

No

The communication mode of the ENI. Valid values:

-   Standard: uses the TCP communication mode.
-   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.

When the ENI is in the InUse state, take note of the following items:

-   The total number of ERIs attached to the instance cannot exceed the ERI quota for the instance type. To query the ERI quota for an instance type, call the DescribeInstanceTypes operation and check the EriQuantity value in the response.

**Note** This parameter is in invitational preview and is not publicly available.

HighPerformance

QueueNumber

integer

No

The number of queues supported by the ENI. When the ENI is in the InUse state, take note of the following items:

-   The value of this parameter cannot exceed the maximum number of queues allowed per ENI for the instance type.
-   The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type. To query the maximum number of queues per ENI and the queue quota for an instance type, call the DescribeInstanceTypes operation and check the MaximumQueueNumberPerEnig and TotalEniQueueQuantity values in the response.

**Note** This parameter is in invitational preview and is not publicly available.

8

QueuePairNumber

integer

No

The number of queues supported by the ERI. When the ERI is in the InUse state, take note of the following items:

-   The value of this parameter cannot exceed the maximum number of queues allowed per ERI for the instance type. To query the maximum number of queues allowed per ERI for an instance type, call the DescribeInstanceTypes operation and check the QueuePairNumber value in the response.

**Note** This parameter is in invitational preview and is not publicly available.

8

RxQueueSize

integer

No

The receive (Rx) queue depth of the ENI.

Take note of the following items:

-   The Rx queue depth of an ENI must be the same as the transmit (Tx) queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
-   A larger Rx queue depth yields higher inbound throughput but consumes more memory.

**Note** This parameter is in invitational preview and is not publicly available.

8192

TxQueueSize

integer

No

The Tx queue depth of the ENI.

Take note of the following items:

-   The Tx queue depth of an ENI must be the same as the Rx queue depth of the ENI. Valid values: powers of 2 in the range of 8192 to 16384.
-   A larger Tx queue depth yields higher outbound throughput but consumes more memory.

**Note** This parameter is in invitational preview and is not publicly available.

8192

ConnectionTrackingConfiguration

object

No

The connection tracking configuration of the ENI.

TcpEstablishedTimeout

integer

No

The timeout period for TCP connections in the ESTABLISHED state. Unit: seconds. Valid values: 30, 60, 80, 100, 200, 300, 500, 700, and 910.

Default value: 910.

910

TcpClosedAndTimeWaitTimeout

integer

No

The timeout period for TCP connections in the TIME\_WAIT or CLOSE\_WAIT state. Unit: seconds. Valid values: integers from 3 to 15.

Default value: 3.

**Note** If the associated ECS instance is used together with a Network Load Balancer (NLB) or Classic Load Balancer (CLB) instance, the default timeout period for TCP connections in the `TIME_WAIT` state is 15 seconds.

3

UdpTimeout

integer

No

The timeout period for UDP flows. Unit: seconds. Valid values: 10, 20, 30, 60, 80, and 100.

Default value: 30.

**Note** If the associated ECS instance is used together with an NLB or CLB instance, the default timeout period for UDP flows is 100 seconds.

30

EnhancedNetwork

object

No

This parameter is not publicly available.

EnableSriov

boolean

No

This parameter is not publicly available.

true

EnableRss

boolean

No

**Note** This parameter is not publicly available.

false

SourceDestCheck

boolean

No

Source and destination IP address check We recommend that you enable the feature to improve network security. Valid value:

-   true
-   false

Default value: false.

**Note** This feature is available only in some regions. Before you use this method, read [Source and destination IP address check](/help/en/ecs/user-guide/source-and-destination-check).

false

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidOperation.NotSupportModifyQueueNumber

%s

\-

400

MissingParameter

%s

A parameter is not specified.

400

UnsupportedParameter

%s

The parameter is not supported.

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidInstanceID.Malformed

%s

The specified InstanceId parameter is invalid.

400

InvalidOperation.InvalidEcsState

%s

\-

400

InvalidOperation.InvalidEniState

%s

\-

400

InvalidOperation.DetachPrimaryEniNotAllowed

%s

\-

400

InvalidParams.EniId

%s

The specified EniId parameter is invalid.

400

Forbidden.RegionId

%s

The service is unavailable in the current region.

400

JoinedGroupLimitExceed

%s

The maximum number of security groups to which the specified resource can be added has been reached. For more information, see the return value of the %s placeholder in the error message.

400

InvalidEniQueueSize.RegionOrUserNotSupported

The specified parameter RxQueueSize or TxQueueSize is not supported in this region, or this account is not in the whitelist of using eni QueueSize.

You are not authorized to specify the length of NIC queues or cannot specify the length of NIC queues in the current region.

400

InvalidParameter.EniQueueSize

The specified parameter TxQueueSize and RxQueueSize are not equal or exceed limit.

The specified parameter TxQueueSize and RxQueueSize are not equal or exceed limit.

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

400

InvalidConnectionTrackingConfiguration.RegionOrUserNotSupported

The specified parameter ConnectionTrackingConfiguration is not supported in this region, or this account is not in the whitelist of using network interface ConnectionTrackingConfiguration.

The specified parameter ConnectionTrackingConfiguration is not supported in this region, or this account is not in the whitelist of using network interface ConnectionTrackingConfiguration.

400

InvalidParameter.InvalidQueuePairNumber

The specified parameter QueuePairNumber exceeds limit.

The number of queues on the specified ERI exceeds the limit.

400

InvalidParameter.EniConnectionTrackingConfiguration

The specify network interface connection tracking configuration exceeds limit.

The network connection configuration of the ENI is out of range.

400

InvalidOperation.MaxEniQueuePairNumberExceed

The QueuePairNumber on the RDMA ENI exceeds the upper limit allowed for a single ENI.

The number of RDMA queues on the ENI exceeds the maximum number of RDMA queues allowed per ENI.

400

InvalidOperation.HighPerformanceEniPerInstanceLimitExceeded

The number of RDMA ENIs attached to the ECS instance exceeds the upper limit.

The number of eRDMA interfaces (ERIs) on the ECS instance to which the ENI is attached exceeds the upper limit.

400

InvalidOperation.InstanceTypeNotSupportHighPerformance

The ECS instance type where the ENI is located does not support the RDMA mode.

The instance type of the ECS instance to which the ENI is attached does not support the RDMA communication mode.

400

InvalidTrafficMode.ModifyToStandardNotSupported

The specified parameter NetworkInterfaceTrafficMode is not supported to modify to Standard.

You cannot set the NetworkInterfaceTrafficMode parameter of the ENI to Standard.

400

InvalidOperation.EniTrafficModeNotSupportIPv6

The ENI using High Performance traffic mode does not support IPv6.

ENIs that use the RDMA communication mode do not support IPv6.

400

InvalidOperation.EniQueuePairNumberOverflow

The RDMA QueuePairNumber of the ECS instance associated with the specified ENI exceeds the limit.

The number of RDMA queues on ENIs of the ECS instance to which the specified ENI is attached exceeds the upper limit.

400

InvalidParameter.QueuePairNumberMustEmpty

When the traffic mode is set to Standard, the QueuePairNumber must be empty.

When you create an ENI that uses the TCP communication mode, do not specify the number of RDMA queues for the ENI.

400

InvalidParameter.EniTrafficMode

The ENI traffic mode is set incorrectly, it must be either Standard or HighPerformance.

The NetworkInterfaceTrafficMode value is invalid. Valid values: Standard and HighPerformance.

400

InvalidOperation.InstanceTypeNotSupportRss

The ECS instance type does not support Rss.

The ECS instance type does not support Rss.

400

InvalidParameter.EniEnhancedNetwork

The input parameter "EnhancedNetwork" is illegal, when EnableSriov is true, VirtualFunctionTotalQueueNumber must not be empty, and VirtualFunctionQuantity must be 1 to 256. When EnableSriov is empty or false, VirtualFunctionTotalQueueNumber and VirtualFunctionQuantity must be empty.

The specified network enhancement function parameter is illegal. When the EnableSriov is set to true, the VirtualFunctionTotalQueueNumber must not be empty and the VirtualFunctionQuantity value range is 1-256; When the EnableSriov is empty or set to false, the VirtualFunctionTotalQueueNumber and VirtualFunctionQuantity must be empty

400

InvalidOperation.NotSupportModifyVFQueueNumberAndVFQuantity

The ENI not support modify VirtualFunctionTotalQueueNumber and VirtualFunctionQuantity when EnableSriov is true.

The ENI not support modify VirtualFunctionTotalQueueNumber and VirtualFunctionQuantity when EnableSriov is true.

400

InvalidOperation.TrunkAttachmentMustEmpty

The Attachment of the current Trunk type Network Interface must be empty when modify EnableSriov to true.

The Attachment of the current Trunk type Network Interface must be empty when modify EnableSriov to true.

403

InvalidUserType.NotSupported

%s

Your account does not support this operation.

403

Abs.InvalidAccount.NotFound

%s

Your Alibaba Cloud account does not exist or your AccessKey pair has expired.

403

Forbidden.NotSupportRAM

%s

RAM users are not authorized to perform this operation.

403

Forbidden.SubUser

%s

You are not authorized to manage this resource. Contact the owner of the Alibaba Cloud account for authorization.

403

MaxEniCountExceeded

%s

The maximum number of ENIs that can be managed has been reached.

403

EniPerInstanceLimitExceeded

%s

The maximum number of ENIs that can be attached to the specified instance has been reached.

403

InvalidOperation.AvailabilityZoneMismatch

%s

The operation is invalid.

403

InvalidOperation.VpcMismatch

%s

The operation is invalid. Check whether the VPC in the operation corresponds to other parameters.

403

SecurityGroupInstanceLimitExceed

%s

\-

403

InvalidSecurityGroupId.NotVpc

%s

The specified SecurityGroupId parameter is invalid and the network type of the security group is not VPC.

403

InvalidOperation.InvalidEniType

%s

\-

403

InvalidOperation.EniServiceManaged

%s

The operation is invalid.

403

InvalidOperation.MultiGroupType

The specified instance can't join different types of security group.

\-

403

InvalidOperation.EniCountExceeded

The maximum number of eni in a enterprise level security group is exceeded.

The number of NICs in the enterprise security group exceeds the limit.

403

InvalidParams.NetworkInterfaceName

%s

\-

403

InvalidOperation.ModifyPrimaryEniQueueNumber

Primary NetworkInterface is not allowed to modify queue number.

\-

403

InvalidOperation.InvalidEniState

Available status or ECS instance attached is Stopped is allowed to modify network interface queue number.

\-

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

403

InvalidParameter.InvalidEniQueueNumber

%s

\-

403

InvalidOperation.MaxEniQueueNumberExceeded

%s

\-

403

InvalidOperation.ExceedInstanceTypeQueueNumber

%s

The maximum number of queues for all ENIs on an instance has been exceeded. For more information, see the return value of the %s placeholder in the error message.

403

AclLimitExceed

%s

The number of ACL rules for an ENI or instance exceeds the upper limit.

404

InvalidEcsId.NotFound

%s

The specified instance ID does not exist.

404

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

404

InvalidVSwitchId.NotFound

%s

The specified vSwitch does not exist.

404

InvalidSecurityGroupId.NotFound

%s

The specified security group ID does not exist.

404

InvalidOperation.PrimaryEniOnlySupportModifyNameAndDesc

Primary NetworkInterface is only allowed to modify name and description.

Primary ENIs can only have their names and descriptions modified.

404

InvalidSecurityGroupId.NotFound

Specified security group not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

404

InvalidParameter.SecurityGroupIdRepeated

The specified security group ids has repeated.

Duplicate security group IDs are specified. Check whether the specified SecurityGroupIds.N parameter is valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2026-01-13#workbench-doc-change-demo)

2025-05-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2025-05-21#workbench-doc-change-demo)

2025-01-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2025-01-09#workbench-doc-change-demo)

2024-12-31

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-12-31#workbench-doc-change-demo)

2024-09-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-09-23#workbench-doc-change-demo)

2024-09-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-09-14#workbench-doc-change-demo)

2024-07-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-07-03#workbench-doc-change-demo)

2024-07-03

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-07-03#workbench-doc-change-demo)

2024-05-17

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-05-17#workbench-doc-change-demo)

2024-05-07

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-05-07#workbench-doc-change-demo)

2024-01-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2024-01-24#workbench-doc-change-demo)

2023-10-09

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2023-10-09#workbench-doc-change-demo)

2023-06-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute?updateTime=2023-06-14#workbench-doc-change-demo)
