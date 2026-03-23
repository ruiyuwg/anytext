Modifies the attributes of an Elastic Compute Service (ECS) instance, such as the password, name, description, hostname, security groups, maximum transmission unit (MTU), and user data of the instance.

## Operation description

You cannot call this operation to modify the attributes of the ECS instances that are locked for security reasons. For more information, see [API behavior when an instance is locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceAttribute)

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

ecs:ModifyInstanceAttribute

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#SecurityGroupId}`

-   ecs:tag
-   ecs:PasswordCustomized

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

The instance ID.

i-bp67acfmxazb4ph\*\*\*\*

Password

string

No

The password of the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include **( ) \` ~ ! @ # $ % ^ & \* - \_ + = | { } \[ \] : ; ' < > , . ? /** The password of a Windows instance cannot start with a forward slash (/). Take note of the following items:

-   The instance cannot be in the Starting (`Starting`) state.
-   The parameter takes effect after the instance is restarted. You can restart an instance in the ECS console. For more information, see [Restart an instance](/help/en/ecs/user-guide/restart-instances). You can also call the [RebootInstance](/help/en/ecs/api-rebootinstance) operation to restart the instance. The parameter cannot take effect if you restart an instance within the operating system.

**Note** For security reasons, we recommend that you use HTTPS to send requests if `Password` is specified.

Test123456

HostName

string

No

The hostname of the instance. Take note of the following items:

-   The instance cannot be in the Creating (`Pending`) or Starting (`Starting`) state. Otherwise, the new hostname and the configurations in the `/etc/hosts` file may not take effect. You can call the [DescribeInstances](/help/en/ecs/api-describeinstances) operation to query the status of the instance.
-   The parameter takes effect after the instance is restarted. You can restart an instance in the ECS console. For more information, see [Restart an instance](/help/en/ecs/user-guide/restart-instances). You can also call the [RebootInstance](/help/en/ecs/api-rebootinstance) operation to restart the instance. The parameter cannot take effect if you restart an instance within the operating system.

The following limits apply to the hostnames of instances that run different operating systems:

-   For Windows Server, the hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). The hostname cannot start or end with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
-   For other operating systems such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-). The hostname cannot contain consecutive periods (.) or hyphens (-). The hostname cannot start or end with a period (.) or a hyphen (-).

testHostName

InstanceName

string

No

The name of the instance. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testInstanceName

Description

string

No

The description of the instance. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

testInstanceDescription

UserData

string

No

The user data of the instance. We recommend that you encode the data in Base64. Take note of the following items:

-   The instance must meet the limits for user data. For more information, see [Initialize an instance by using instance user data](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance).
-   After you restart the instance, the new user data is displayed but not run as scripts.

**Note** The maximum size of the raw data before encoding is 32 KB. We recommend that you do not pass in confidential information such as passwords and private keys in plaintext. If you must pass in confidential information, we recommend that you encrypt and Base64-encode the information before you pass it in. Then, you can decode and decrypt the information in the same way within the instance.

ZWNobyBoZWxsbyBlY3Mh

Recyclable

boolean

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

CreditSpecification

string

No

The performance mode of the burstable instance. Valid values:

-   Standard
-   Unlimited

For more information about the performance modes of burstable instances, see [Overview](/help/en/ecs/user-guide/burst-performance-instance-overview) .

Standard

DeletionProtection

boolean

No

The release protection attribute of the instance. This parameter specifies whether you can use the ECS console or call the [DeleteInstance](/help/en/ecs/api-deleteinstance) operation to release the instance.

**Note** This parameter is applicable only to pay-as-you-go instances. The release protection attribute can protect instances against manual releases, but not against automatic releases.

false

NetworkInterfaceQueueNumber

integer

No

The number of queues supported by the primary elastic network interface (ENI) of the instance. Take note of the following items:

-   The instance must be in the Stopped (`Stopped`) state.
-   The number of queues supported by an ENI cannot exceed the maximum number of queues that the instance type allows for each ENI. The total number of queues on all ENIs on the instance cannot exceed the queue quota that the instance type supports. To query the maximum number of queues that an instance type allows for each ENI and the queue quota for the instance type, call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation.
-   If you set this parameter to -1, the value is reset to the default value for the instance type. To query the default number of queues of an ENI of each instance type, call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation.

8

SecurityGroupIds

array

No

The IDs of the new security groups to which to assign the instance. Take note of the following items:

-   The security group IDs in the array cannot be duplicate. The length of the array is related to the quota of security groups to which the instance can be assigned. For more information, see the [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) section in the "Limits and quotas" topic.
-   The instance is moved from the current security groups to the replacement security groups. If you want the instance to remain in the current security groups, add the IDs of the current security groups to the array.
-   You can move the instance to security groups of a different type. However, the array cannot contain the IDs of both basic and advanced security groups.
-   The security groups and the instance must belong to the same VPC.
-   Security groups of instances in the classic network cannot be changed.

**Note** New security groups become valid for the instance after a short delay.

string

No

The ID of the security group.

sg-bp15ed6xe1yxeycg7o\*\*\*\*

RemoteConnectionOptions

object

No

**Note** This parameter is in invitational preview and is not publicly available.

Password

string

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

Type

string

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

EnableJumboFrame

boolean

No

Specifies whether to enable the Jumbo Frames feature for the instance. Valid values:

-   true: The Jumbo Frame feature is enabled for the instance.
-   false: The Jumbo Frame feature is disabled for the instance.

Take note of the following items:

-   The instance must be in the Running (`Running`) or Stopped (`Stopped`) state.
-   The instance must reside in a VPC.
-   After the Jumbo Frames feature is enabled, the MTU value of the instance is set to 8500. After the Jumbo Frames feature is disabled, the MTU value of the instance is set to 1500. You can enable the Jumbo Frames feature only for specific instance types. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/).

false

CpuOptions.Core

integer

No

The number of CPU cores. This parameter cannot be specified but only uses its default value.

2

CpuOptions.ThreadsPerCore

integer

No

The number of threads per CPU core. The following formula is used to calculate the number of vCPUs of the instance: `CpuOptions.Core` value × `CpuOptions.ThreadsPerCore` value.

-   If `CpuOptionsThreadPerCore` is set to 1, Hyper-Threading (HT) is disabled.
-   This parameter is applicable only to specific instance types.

2

CpuOptions.TopologyType

string

No

The CPU topology type of the instance. Valid values:

-   ContinuousCoreToHTMapping: The Hyper-Threading (HT) technology allows continuous threads to run on the same core in the CPU topology of the instance.
-   DiscreteCoreToHTMapping: The HT technology allows discrete threads to run on the same core.

This parameter is left empty by default.

Take note of the following items:

-   The instance must be in the Stopped (`Stopped`) state.

**Note** This parameter is supported only for specific instance families. For information about the supported instance families, see [View and modify CPU topologies](/help/en/ecs/user-guide/view-and-modify-cpu-topology).

DiscreteCoreToHTMapping

PrivateDnsNameOptions

object

No

The private domain name options of the ECS instance.

For information about private domain name resolution, see [ECS private DNS resolution](/help/en/ecs/user-guide/ecs-private-domain-resolution).

EnableInstanceIdDnsARecord

boolean

No

Specifies whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:

-   true
-   false

Default value: false.

false

EnableInstanceIdDnsAAAARecord

boolean

No

Specifies whether DNS Resolution from the Instance ID-based Hostname to the Instance Primary Private IPv6 Address (AAAA Record) is enabled. Valid values:

-   true
-   false

Default value: false.

false

EnableIpDnsARecord

boolean

No

Specifies whether DNS Resolution from the IP Address-based Hostname to the Instance Primary Private IPv4 Address (A Record) is enabled. Valid values:

-   true
-   false

Default value: false.

false

EnableIpDnsPtrRecord

boolean

No

Specifies whether Reverse DNS Resolution from the Instance Primary Private IPv4 Address to the IP Address-based Hostname (PTR Record) is enabled. Valid values:

-   true
-   false

Default value: false.

false

HostnameType

string

No

The type of the hostname. Valid values:

-   Custom: custom hostname.
-   IpBased: IP address-based hostname.
-   InstanceIdBased: instance ID-based hostname.

Default value: Custom.

Custom

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

InvalidInstanceName.Malformed

The specified parameter "InstanceName" is not valid.

The specified InstanceName parameter is invalid.

400

InvalidDescription.Malformed

The specified parameter "Description" is not valid.

The source description can be 2 to 256 characters in length. It cannot start with http:// and https://.

400

InvalidRemoteConnectionOptions.Password

The remote connection password is invalid.

\-

400

InvalidRemoteConnectionOptions.Type

The remote connection type is invalid.

\-

400

InstanceType.ValueNotSupported

The instance type not supported.

\-

400

OSType.ValueNotSupported

The OS type is not supported.

\-

400

InvalidHostPassword.Malformed

The specified parameter "Password" is not valid.

\-

400

InvalidHostName.Malformed

The specified parameter "HostName" is not valid.

\-

400

InvalidPassword.Malformed

The specified parameter "Password" is not valid.

\-

400

InvalidUserData.SizeExceeded

The specified parameter "UserData" exceeds the size.

\-

400

InvalidUserData.NotSupported

TThe specified parameter "UserData" only support the vpc and IoOptimized Instance.

\-

400

InvalidUserData.NotSupported

The specified parameter "UserData" only support the vpc and IoOptimized Instance.

\-

400

ImageNotSupportCloudInit

The specified image does not support cloud-init.

\-

400

ChargeTypeViolation

Pay-As-You-Go instances do not support this operation.

The operation is not supported by pay-as-you-go instances. Check the billing method of the instance.

400

InvalidParameter.RecycleBin

You do not have permission to set recyclable properties.

You are not authorized to perform the operation.

400

InvalidParameter.CreditSpecification

The specified CreditSpecification is not supported in this region.

The running mode of the specified burst performance instance is not supported in this zone.

400

InvalidInstanceStatus.CreditSpecRestricted

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

400

InvalidInstanceStatus.NotRunning

The current status of the resource is invalid, you can only do this operation when instance is running.

The resource is in a state that does not support the operation. Perform the operation when the instance is in the Running state.

400

InvalidNetworkType.NotSupported

The classic networkType does not support to modify security group

\-

400

InvalidOperation.EniCountExceeded

\=The maximum number of eni in a enterprise security group is exceeded.

\-

400

JoinedGroupLimitExceed

%s

The maximum number of security groups to which the specified resource can be added has been reached. For more information, see the return value of the %s placeholder in the error message.

400

InvalidParameter

The specified parameter is not valid.

A specified parameter is invalid.

400

InvalidOperation.InvalidEcsState

%s

\-

400

InvalidParam.NotSupportJumboFrame

Not support jumbo frame.

\-

400

InvalidOperation.InstanceStatusNotSupport

The instance status is not support modify mtu config.

\-

400

InvalidOperation.InstanceStatusUnsupported

The specified instance status does not support modification of cpu topology type.

The specified instance status does not support modification of cpu topology type.

400

InvalidParameter.CpuOptionsTopologyType

The specified parameter CpuOptions.TopologyType: %s is not valid.

Illegal enumeration value for current CPU topology type

400

InvalidInstanceType.NotSupportCpuOptionsTopologyType

The specified instance type does not support CpuOptions.TopologyType: %s.

The current specification does not support the specified CPU topology type

400

InvalidAdditionalInfoPvdConfig.SizeExceeded

The specified parameter AdditionalInfo.PvdConfig exceeds the size.

\-

400

InvalidInstanceType.NotSupportHighDensityMode

The specified instance type does not support the use of the high density mode.

The current instance type does not support the cloud disk high-density mode.

400

InvalidStatus.StoppedRequired

The current state of the resource does not support this operation, it can only be operated in a stopped state.

The current state of the resource does not support this operation, only down state can operate

400

InvalidStatus.StoppedRequired

The instance is in an incorrect status for the requested action. The status of the specified instance is '%s' but the expected status is in ('Stopped').

The current status of the resource does not support this operation, it can only be operated in the Stopped status.

400

InvalidParameter.CpuOptionsTurboMode

The specified parameter TurboMode is not valid.

The specified parameter frequency mode is invalid

400

InvalidInstanceType.EnableNVSUnsupported

The specified instance type does not support EnableNVS.

\-

400

InvalidInstanceType.EnableVISSTUnsupported

The specified instance type does not support EnableVISST.

\-

400

InvalidInstanceType.EnableVRDTUnsupported

The specified instance type does not support EnableVRDT.

\-

400

InvalidInstanceType.SingleCoreMaxModeUnsupported

The specified instance type does not support TurboMode: "SINGLE CORE MAX".

The specified instance type does not support single-core maximum turbo mode

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

OperationDenied

The instance amount in the specified SecurityGroup reach its limit.

The maximum number of instances in the specified security group has been reached.

403

OperationDenied

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InvalidUserData.Forbidden

User not authorized to input the parameter "UserData"please apply for permission "UserData"

\-

403

InvalidUserData.Base64FormatInvalid

The specified UserData is not valid

An error occurred when the specified UserData parameter is encoded.

403

InvalidChargeType.ValueNotSupported

Deletion protection is only valid for postPaid instance, not for prePaid or spot instance.

Release protection can be enabled only for pay-as-you-go instances.

403

InvalidUser.Unauthorized

The user is not authorized

You are not authorized to perform this operation.

403

EnterpriseGroupLimited.MutliGroupType

The specified instance can not join multi SecurityGroup types.

The specified instance cannot belong to both a basic and an advanced security group. You can call the DescribeSecurityGroups operation to query the type of security groups.

403

SecurityGroupInstanceLimitExceed

%s

\-

403

InstanceNotInSecurityGroup

The instance not in the group.

The specified instance does not belong to the security group.

403

InvalidOperation.InvalidRegion

%s

The specified RegionId parameter is invalid.

403

OperationDenied

The specified Image is disabled or is deleted.

The specified image is disabled or deleted.

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

InvalidOperation.InstanceTypeNotSupportHighPerformanceTrafficMode

%s

The instance type of the specified instance does not support the NIC of the RDMA communication mode.

403

InvalidParameter.InvalidQueuePairNumber

%s

\-

403

InvalidOperation.MaxEniQueuePairNumberExceed

%s

\-

403

InvalidOperation.EniQueuePairNumberOverflow

%s

\-

403

AclLimitExceed

%s

The number of ACL rules for an ENI or instance exceeds the upper limit.

403

InvalidInstanceType.CpuOptionsThreadsPerCoreUnsupported

The current instance type does not support setting or modifying the CpuOptions.ThreadsPerCore parameter.

The current instance type does not support setting or modifying the CpuOptions.ThreadsPerCore parameter.

403

InvalidParameter.CpuOptionsCore

The specified parameter CpuOptions.Core is not valid.

The specified parameter CpuOptions.Core is not valid.

403

InvalidParameter.CpuOptionsThreadsPerCore

The specified parameter CpuOptions.ThreadsPerCore is not valid.

The specified parameter CpuOptions.ThreadsPerCore is not valid.

403

InvalidOperation.UserNotSupportNetworkEncryption

User not support network encryption.

The user does not support specifying network traffic encryption parameters.

403

InvalidOperation.InstanceTypeNotSupportNetworkEncryption

The specified instance type does not support network encryption.

the specified instance type does not support vpc traffic encryption

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

404

Credit.NotFound

The specified credit information does not exist.

The specified burst performance instance credit information does not exist.

404

InvalidInstanceStatus.NeedRestart

The current status of the resource is invalid, you can only do this operation after instance is restarted.

\-

404

InvalidParameter.SecurityGroupIdRepeated

The specified security group ids has repeated.

Duplicate security group IDs are specified. Check whether the specified SecurityGroupIds.N parameter is valid.

404

InvalidSecurityGroupType.NotSupportClassic

The specified SecurityGroupIds have classic group type.

The specified security group is in the classic network. Check whether the specified SecurityGroupIds.N parameter is valid.

404

InvalidSecurityGroupVpc.NotBelongToOneVpc

The specified SecurityGroupIds are belong to different vpc.

The specified security groups belong to different VPCs. Check whether the specified SecurityGroupIds.N parameter is valid. You can call the DescribeSecurityGroups operation to query the VPCs to which the security groups belong.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2025-04-11#workbench-doc-change-demo)

2025-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2025-04-02#workbench-doc-change-demo)

2024-12-25

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2024-12-25#workbench-doc-change-demo)

2024-08-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2024-08-29#workbench-doc-change-demo)

2024-08-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2024-08-08#workbench-doc-change-demo)

2024-07-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2024-07-03#workbench-doc-change-demo)

2024-05-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2024-05-11#workbench-doc-change-demo)

2023-12-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2023-12-14#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceAttribute?updateTime=2023-07-17#workbench-doc-change-demo)
