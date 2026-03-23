Adds an Elastic Compute Service (ECS) instance or an elastic network interface (ENI) to a specified security group.

## Operation description

**Note** This operation is not recommended. We recommend that you call the [ModifyInstanceAttribute](/help/en/ecs/api-modifyinstanceattribute) operation to add an instance to or remove an instance from a security group, and call the [ModifyNetworkInterfaceAttribute](/help/en/ecs/api-modifynetworkinterfaceattribute) operation to add an ENI to or remove an ENI from a security group.

-   An instance and an ENI cannot be added to a security group at the same time. You cannot specify `InstanceId` and `NetworkInterfaceId` at the same time in a request.
-   The security group and the ECS instance to be added to the security group must reside in the same region.
-   The security group and the instance must be of the same network type. If the network type is Virtual Private Cloud (VPC), the security group and the instance must reside in the same VPC.
-   Before you add an instance to a security group, the instance must be in the **Stopped** or **Running** state.
-   An instance can be added to up to five security groups by default. For more information, see [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/JoinSecurityGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/JoinSecurityGroup)

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

ecs:JoinSecurityGroup

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

SecurityGroupId

string

Yes

The ID of the security group. You can call the [DescribeSecurityGroups](/help/en/ecs/api-describesecuritygroups) operation to query the most recent security group list.

sg-bp67acfmxazb4p\*\*\*\*

InstanceId

string

No

The instance ID.

**Note** If you configure this parameter, you cannot configure `NetworkInterfaceId`.

i-bp67acfmxazb4p\*\*\*\*

NetworkInterfaceId

string

No

The ENI ID.

**Note** If you configure this parameter, you cannot configure `InstanceId`.

eni-bp13kd656hxambfe\*\*\*\*

RegionId

string

No

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

-   If you want to add an instance to a security group, you do not need to specify a region ID.
-   If you want to add an ENI to a security group, you must specify the region ID of the ENI.

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

InstanceSecurityGroupLimitExceeded

Exceeding the allowed amount of security groups that an instance can be in.

\-

400

InvalidInstanceId.Mismatch

Specified instance and security group are not in the same VPC.

The specified instance and security group do not belong to the same VPC, or one of the following cases has occurred: 1. The security group is of the VPC network type but the instance is not. 2. The instance is of the VPC network type but the security group is not.

400

InvalidInstanceId.Malformed

The specified parameter "InstanceId" is not valid.

\-

400

InvalidOperation.NotSupportEnterpriseGroup

The specified instance type doesn't support enterprise level security group.

\-

400

InvalidOperation.MultiGroupType

The specified instance can't join different types of security group.

\-

400

InvalidOperation.InvalidEniState

%s

\-

400

InvalidOperation.EniAndGroupNotBelongSameUser

%s

\-

400

NotBelongUser

%s

You are not authorized to manage the specified resource.

400

MissingParameter.RegionId

The specified RegionId should not be null.

The RegionId parameter is required.

400

InvalidStatus.EniOrInstanceIsBeingCreated

%s.

The specified ECS instance or ENI is currently being created. Please wait for the creation process to complete and try again.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

SecurityGroupInstanceLimitExceeded

The maximum number of instances in a security group is exceeded.

The maximum number of instances in the specified security group has been reached.

403

InvalidInstanceId.AlreadyExists

The specified instance already exists in the specified security group.

The specified instance is already present in the specified security group.

403

SecurityGroupInstanceLimitExceeded

%s

The maximum number of instances in the specified security group has been reached.

403

AclLimitExceed

%s

The number of ACL rules for an ENI or instance exceeds the upper limit.

403

InstanceSecurityGroupLimitExceeded

%s

\-

403

InvalidOperation.NetworkInterfaceCountExceeded

The maximum number of NetworkInterface in a enterprise level security group is exceeded.

The number of NICs in the specified enterprise security group exceeds the limit.

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

403

InvalidOperation.InvalidEniType

%s

\-

403

InvalidOperation.VpcMismatch

%s

The operation is invalid. Check whether the VPC in the operation corresponds to other parameters.

403

InvalidOperation.EniServiceManaged

%s

The operation is invalid.

403

InvalidParam.Malformed

%s

Invalid parameter

403

InvalidParam.EniIdAndInstanceId.Conflict

%s

The InstanceId and NetworkInterfaceId parameters are mutually exclusive and cannot be both specified.

403

Forbidden.InstanceIsBeingCreated

The specified instance is being created.

The specified instance is being created.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

404

InvalidInstanceId.NotFound

The specified parameter InstanceId does not exist.

The specified instance ID does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/JoinSecurityGroup?updateTime=2025-03-12#workbench-doc-change-demo)

2024-07-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/JoinSecurityGroup?updateTime=2024-07-09#workbench-doc-change-demo)
