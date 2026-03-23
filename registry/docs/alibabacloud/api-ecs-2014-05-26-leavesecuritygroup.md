Removes an Elastic Compute Service (ECS) instance or an elastic network interface (ENI) from a security group.

## Operation description

**Note** This operation is not recommended. We recommend that you call the [ModifyInstanceAttribute](/help/en/ecs/api-modifyinstanceattribute) operation to add an instance to or remove an instance from a security group, and call the [ModifyNetworkInterfaceAttribute](/help/en/ecs/api-modifynetworkinterfaceattribute) operation to add an ENI to or remove an ENI from a security group.

**Note** Alibaba Cloud modified verification rules for the LeaveSecurityGroup operation on July 8, 2024. When you remove an ECS instance or ENI that does not belong to a security group from the security group, the "InvalidSecurityGroupAssociation.NotFound" error code is returned instead of a success response. Update the LeaveSecurityGroup operation to use the new verification rules with the new error code based on your business requirements.

-   You cannot remove an instance and an ENI from a security group at the same time. This indicates that you cannot specify `InstanceId` and `NetworkInterfaceId` in one request.
-   Before you remove an instance from a security group, the instance must be in the **Stopped** (Stopped) or **Running** (Running) state.
-   An instance or ENI must be added to at least one security group. If you remove an instance or ENI from the only security group, the removal request fails and an error is returned.
-   When you remove an instance or ENI that is not in a security group from the security group, the removal request fails and an error is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/LeaveSecurityGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/LeaveSecurityGroup)

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

ecs:LeaveSecurityGroup

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

The security group ID.

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

-   If you want to remove an instance from a security group, you do not need to specify a region ID.
-   If you want to remove an ENI from a security group, you must specify the ID of the region in which the ENI resides.

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

InvalidInstanceId.Malformed

The specified parameter "InstanceId" is not valid.

\-

400

MissingParameter.RegionId

The specified RegionId should not be null.

The RegionId parameter is required.

400

InvalidOperation.InvalidEniState

%s

\-

400

InvalidSecurityGroupAssociation.NotFound

%s.

The specified ECS or ENI is not associated with the specified security group.

403

InstanceLastSecurityGroup

The specified security group is the last security group for the instance.

The specified security group is the only security group to which the instance belongs.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InstanceNotInSecurityGroup

The instance not in the group.

The specified instance does not belong to the security group.

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

403

InvalidOperation.AtLeastInOneGroup

%s

\-

403

InvalidOperation.EniServiceManaged

%s

The operation is invalid.

403

InvalidOperation.InvalidEniType

%s

\-

403

InvalidParam.Malformed

%s

Invalid parameter

403

InvalidParam.EniIdAndInstanceId.Conflict

%s

The InstanceId and NetworkInterfaceId parameters are mutually exclusive and cannot be both specified.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

404

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

404

InvalidInstanceId.NotFound

The specified parameter InstanceId does not exist.

The specified instance ID does not exist.

504

RequestTimeout

The request encounters an upstream server timeout.

The request is denied due to a timeout error of the upstream server.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/LeaveSecurityGroup?updateTime=2025-03-12#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/LeaveSecurityGroup?updateTime=2024-06-03#workbench-doc-change-demo)
