Detach an elastic network interface (ENI) from an Elastic Compute Service (ECS) instance.

## Operation description

Take note of the following items:

-   You cannot detach the primary ENI of an instance.
    
-   Make sure that the ENI to be detached is in the Detaching (Unbinding) or InUse (Bound) state.
    
-   Make sure that the instance from which you want to detach an ENI is in the Running (Running) or Stopped (Stopped) state.
    
-   The DetachNetworkInterface operation is an asynchronous operation. After this operation is called to detach an ENI, you can check the status or events of the ENI to determine whether the ENI is detached. The following figure shows the transitions between the states of the ENI.![](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20230223/uemr/DetachNetworkInterface.png)
    
    -   If the ENI is in the Detaching state, the ENI detachment request is sent and the ENI is being detached from the associated instance.
    -   If the ENI is in the Available state, the ENI is detached from the associated instance.
    -   If the ENI is stuck in the Detaching state, the ENI may fail to be detached from the associated instance due to specific reasons. For example, the ENI may fail to be detached because the operating system of the instance did not respond to the ENI detachment request. If this issue occurs, you can re-initiate the request to detach the ENI. If the issue persists, restart the instance.

For information about examples on how to call the DetachNetworkInterface operation, see [Detach an ENI from an ECS instance](/help/en/ecs/developer-reference/detach-an-eni-from-an-ecs-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachNetworkInterface)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachNetworkInterface)

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

ecs:DetachNetworkInterface

update

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The ID of the ENI.

cn-hangzhou

NetworkInterfaceId

string

Yes

The ID of the instance

eni-bp67acfmxazb4p\*\*\*\*

InstanceId

string

Yes

The ID of the trunk ENI.

**Note** This parameter is unavailable for use.

i-bp67acfmxazb4p\*\*\*\*

TrunkNetworkInstanceId

string

No

The ID of the request.

eni-f8zapqwj1v1j4ia3\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

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

InvalidOperation.InvalidRegion

%s

The specified RegionId parameter is invalid.

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

Forbidden.RegionId

%s

The service is unavailable in the current region.

400

InvalidParams.EniId

%s

The specified EniId parameter is invalid.

400

InvalidParameter.EniNotBelongEcs

%s

\-

400

InvalidOperation.EniHotPlugNotSupported

The ENI with high-performance traffic mode cannot be hot-plugged. Please stop the ECS instance to which the ENI is attached, and try again.

An ENI with high-performance communication mode enabled does not support hot unplugging. Stop the ECS instance to which the ENI is mounted and try again.

400

InvalidOperation.InvalidEcsState

%s.

The current state of the instance does not support this operation.

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

InvalidOperation.EniLinked

%s

The operation is invalid because the current ENI of the instance is associated with other ENIs. You must disassociate the ENI from the other ENIs before you can unbind the ENI from the instance.

403

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

403

InvalidOperation.HotPlugNotSupport

%s

The operation is not supported while the specified resource is running. For more information, see the return value of the %s placeholder in the error message.

403

InvalidOperation.InvalidTrunkEniStatus

%s

\-

403

InvalidOperation.TrunkingIsNotAllowed

%s

The trunk network card is not operational.

403

InvalidOperation.InstanceTypeNotSupportEniTrunking

%s

\-

403

InvalidParameter.EniNotBelongTrunk

%s

The specified ENI is not in trunk mode. For more information, see the return value of the %s placeholder in the error message.

403

InvalidOperation.EniTypeNotSupportTrunking

%s

The type of the ENI does not support operations related to the trunk mode. For more information, see the return value of the %s placeholder in the error message.

403

InvalidOperation.HasMemberEniAttached

%s

Other ENIs are attached to the ENI that works in trunk mode. For more information, see the return value of the %s placeholder in the error message.

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

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-31

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachNetworkInterface?updateTime=2024-12-31#workbench-doc-change-demo)

2024-09-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachNetworkInterface?updateTime=2024-09-24#workbench-doc-change-demo)

2023-11-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachNetworkInterface?updateTime=2023-11-15#workbench-doc-change-demo)
