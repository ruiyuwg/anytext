Deletes or releases a pay-as-you-go Elastic Compute Service (ECS) instance or an expired subscription ECS instance. You can configure parameters to specify whether to release the disks attached to the instance or retain the disks as pay-as-you-go disks.

## Operation description

\*\*

**Warning** After you release an instance, the physical resources used by the instance are recycled. Relevant data is erased and cannot be restored.

-   After you release an instance, manual snapshots of the cloud disks attached to the instance are retained and continue to be billed. You can call the [DeleteSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesnapshot) operation to delete the snapshots.
    
-   After you release an instance, whether the cloud disks attached to the instance and the automatic snapshots of the disks are released is determined by the disk attributes. Before you release an instance, you can call the [DescribeDisks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedisks) and [ModifyDiskAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskattribute) operations to query and modify disk attributes.
    
    -   The cloud disks for which `DeleteWithInstance` is set to false are retained as pay-as-you-go disks after the instance is released. The cloud disks for which DeleteWithInstance is set to true are released along with the instance.
    -   If `DeleteAutoSnapshot` is set to false for a cloud disk attached to the instance, the automatic snapshots of the cloud disk are retained when the instance is released. If DeleteAutoSnapshot is set to true for the cloud disk, the automatic snapshots of the disk are released along with the instance.
-   Elastic IP addresses (EIPs) are not released together with instances. You can call the [ReleaseEipAddress](/help/en/vpc/developer-reference/api-vpc-2016-04-28-releaseeipaddress) operation to release EIPs.
    
    \*\*
    
    **Note** When you release an instance that is locked for security reasons, the cloud disks attached to the instance are released even if DeleteWithInstance is set to false.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteInstance)

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

ecs:DeleteInstance

delete

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

i-bp1g6zv0ce8oghu7\*\*\*\*

Force

boolean

No

Specifies whether to forcefully release the ECS instance in the **Running** (`Running`) state. Valid values:

-   true: forcefully releases the ECS instance in the **Running** (`Running`) state.
-   false: normally releases the ECS instance. This value is valid only if the instance is in the **Stopped** (`Stopped`) state.

Default value: false.

\*\*

**Warning** When Force is set to true, this operation is equivalent to a power-off operation. Temporary data in the memory and storage of the instance is erased and cannot be restored.

false

ForceStop

boolean

No

Specifies whether to forcefully stop the ECS instance in the **Running** (`Running`) state before the instance is released. This parameter takes effect only when `Force` is set to true. Valid values:

-   true: forcefully stops and releases the ECS instance. In this case, this operation is equivalent to a power-off operation. The instance directly enters the resource release process.
    
    \*\*
    
    **Warning** A forceful stop and release is equivalent to a power-off operation. Temporary data in the memory and storage of the instance is erased and cannot be restored.
    
-   false: stops the ECS instance in the normal stop process and then releases the instance. In this case, the release process takes several minutes to complete. You can configure business drainage actions to reduce the noise of the business system on operating system shutdown.
    

Default value: true.

true

TerminateSubscription

boolean

No

Specifies whether to release the expired subscription instance. Valid values:

-   true
-   false

Default value: false.

false

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and unavailable ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false (default): performs a dry run and performs the actual request. If the request passes the dry run, the instance is released.

false

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

DependencyViolation.SLBConfiguring

Specified operation is denied as your instance is using by another product.

The instance is referenced by an SLB instance that is being configured.

400

DependencyViolation.RouteEntry

Specified instance is used by route entry.

Custom route entries exist in the VPC and the VPC cannot be deleted.

400

InvalidParameter

The input parameter InstanceId is invalid.

The specified InstanceId parameter is invalid.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

ChargeTypeViolation

The operation is not permitted due to charge type of the instance.

The operation is not supported while the instance is using the current billing method.

403

IncorrectInstanceStatus.Initializing

The specified instance status does not support this operation.

The specified instance cannot be released at this time. Try again later.

403

IncorrectInstanceStatus

The specified instance is still attached by volumes.

The specified instance has data volumes.

403

InvalidOperation.DeletionProtection

%s

The operation is invalid. Disable release protection for the instance first.

403

InvalidOperation.DeletionProtection

The operation is not allowed due to deletion protection.

Instance has release protection turned on, so this operation cannot be performed

403

InvalidOperation.EniLinked

%s

The operation is invalid because the current ENI of the instance is associated with other ENIs. You must disassociate the ENI from the other ENIs before you can unbind the ENI from the instance.

403

OperationDenied.SystemInstanceNotSupport

The system instance does not support the %s operation because %s.

\-

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-09

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteInstance?updateTime=2025-04-09#workbench-doc-change-demo)

2025-03-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteInstance?updateTime=2025-03-20#workbench-doc-change-demo)

2024-02-01

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteInstance?updateTime=2024-02-01#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteInstance?updateTime=2023-07-17#workbench-doc-change-demo)
