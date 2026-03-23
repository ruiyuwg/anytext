Redeploys an Elastic Compute Service (ECS) instance. You can call this operation to redeploy an ECS instance when the instance receives a system event notification.

## Operation description

## [](#usage-notes)Usage notes

RedeployInstance is an asynchronous operation. The operation migrates the instance to a healthy physical server and then restarts the instance. After the instance is redeployed, it enters the Running (`Running`) state. If the instance fails to be redeployed, it returns to the original physical server and the state before the redeployment.

When you call this operation, take note of the following item:

-   The instance must be in the Running (Running) or Stopped (Stopped) state. After the instance is redeployed, the following changes occur to the status of the instance:
    -   If the instance is in the Running (`Running`) state, the instance enters the Stopping (`Stopping`) state.
    -   If the instance is in the Stopped (`Stopped`) state, the instance enters the Starting (`Starting`) state.
-   If an instance is deployed on a dedicated host, you cannot redeploy the instance.
-   If `OperationLocks` in the response of the DescribeInstances operation contains `"LockReason": "security"` for an instance, the instance is locked for security reasons and cannot be redeployed.
-   If an instance receives notifications about simulated events that are created by calling the CreateSimulatedSystemEvent operation for the instance, you cannot call this operation to redeploy the instance.
-   When you handle a local disk-related system event for an instance, if the damaged local disk is isolated but the SystemMaintenance.RebootAndReInitErrorDisk (**instance restart and re-initialization of damaged disks due to system maintenance**) event is not sent, you can still call the RedeployInstance operation to redeploy the instance. For more information, see [O&M scenarios and system events for instances equipped with local disks](/help/en/ecs/user-guide/operations-and-maintenance-scenarios-and-system-events-for-instances-equipped-with-local-disks).

The following table describes the types and states of events that you can handle by calling the RedeployInstance operation.

System event

Event status

Instance restart due to system maintenance (SystemMaintenance.Reboot)

Inquiring and Scheduled

Instance redeployment due to system maintenance (SystemMaintenance.Redeploy)

Inquiring and Scheduled

Instance restart and replacement of damaged disks due to system maintenance (SystemMaintenance.RebootAndIsolateErrorDisk)

Inquiring

Instance restart and re-initialization of damaged disks due to system maintenance (SystemMaintenance.RebootAndReInitErrorDisk)

Inquiring

Instance redeployment due to system errors (SystemFailure.Redeploy)

Inquiring

For ECS instances that use only local disks: instance restart due to system errors (SystemFailure.Reboot)

Executing

Isolation of damaged disks due to system maintenance (SystemMaintenance.IsolateErrorDisk)

Inquiring

Re-initialization of damaged disks due to system maintenance (SystemMaintenance.ReInitErrorDisk)

Inquiring

**Note** When the system redeploys instances equipped with local disks, the local disks are re-initialized and data on the local disks is cleared.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RedeployInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RedeployInstance)

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

ecs:RedeployInstance

update

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

InstanceId

string

Yes

The ID of the instance.

i-bp1azkttqpldxgted\*\*\*\*

ForceStop

boolean

No

Specifies whether to forcefully stop the instance that is in the Running state.

Default value: false.

**Note** A forced stop is equivalent to a power outage and can result in loss of data that is not written to storage devices. We recommend that you redeploy instances when they are in the Stopped state.

false

## Response parameters

Parameter

Type

Description

Example

object

TaskId

string

The ID of the redeployment task.

You can call the [DescribeTasks](/help/en/ecs/api-describetasks) operation to query the redeployment result.

t-bp10e8orkp8x\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "TaskId": "t-bp10e8orkp8x****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

DiskError

IncorrectDiskStatus.

The disk state is invalid.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

403

InvalidOperation.RedeployInstance

%s

The operation is invalid.

404

InvalidInstanceId.NotFound

The InstanceId provided does not exist in our records.

The specified instance does not exist. Check whether the instance ID is correct.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
