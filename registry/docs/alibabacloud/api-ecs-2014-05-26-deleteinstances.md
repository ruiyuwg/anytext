Releases multiple pay-as-you-go Elastic Compute Service (ECS) instances or expired subscription ECS instances at a time. You can configure parameters to specify whether to release the disks attached to the instances or retain the disks as pay-as-you-go disks.

## Operation description

**Warning** After you release an instance, the physical resources used by the instance are recycled. Relevant data is erased and cannot be restored.

-   After you release an instance, manual snapshots of the cloud disks attached to the instance are retained and continue to be billed. You can call the [DeleteSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesnapshot) operation to delete the snapshots.
    
-   After you release an instance, whether the cloud disks attached to the instance and the automatic snapshots of the disks are released is determined by the disk attributes. Before you release an instance, you can call the [DescribeDisks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedisks) and [ModifyDiskAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskattribute) operations to query and modify disk attributes.
    
    -   If `DeleteWithInstance` is set to false for a cloud disk attached to the instance, the cloud disk is changed to a pay-as-you-go disk and retained after the instance is released. If DeleteWithInstance is set to true for the cloud disk, the disk is released together with the instance.
    -   If `DeleteAutoSnapshot` is set to false for a cloud disk attached to the instance, the automatic snapshots of the disk are retained when the instance is released. If DeleteAutoSnapshot is set to true for the cloud disk, the automatic snapshots of the disk are released together with the instance.
-   Elastic IP addresses (EIPs) are not released together with instances. You can call the [ReleaseEipAddress](/help/en/vpc/developer-reference/api-vpc-2016-04-28-releaseeipaddress) operation to release EIPs.
    

**Note** When you release an instance that is locked for security reasons, the cloud disks attached to the instance are released together with the instance even if DeleteWithInstance is set to false for the disks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteInstances)

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

ecs:DeleteInstances

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

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request.

-   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DRYRUN.SUCCESS error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

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

Specifies whether to release the expired subscription instance.

-   true
-   false

Default value: false.

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

array

Yes

The IDs of ECS instances. You can specify 1 to 100 ECS instances.

string

Yes

The ID of the ECS instance.

i-bp1g6zv0ce8oghu7\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

7B7813C6-57BF-41XX-B12B-F172F65A6046

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7B7813C6-57BF-41XX-B12B-F172F65A6046"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.CrossRegionNotSupport

Instances of multiple regions not support.

\-

400

DRYRUN.SUCCESS

This request is a dryrun request with successful result.

The request is checked and determined as valid.

400

DependencyViolation.SLBConfiguring

Specified operation is denied as your instance is using by another product.

The instance is referenced by an SLB instance that is being configured.

400

DependencyViolation.RouteEntry

Specified instance is used by route entry.

Custom route entries exist in the VPC and the VPC cannot be deleted.

403

InvalidParameter.TooManyInstanceIds

Instance ids cannot be more than 100.

InstanceIds cannot be more than 100.

403

InvalidInstanceIds.ValueNotSupported

The specified instanceIds is not valid.

\-

403

InvalidOperation.DeletionProtection

The operation is not allowed due to deletion protection.

Instance has release protection turned on, so this operation cannot be performed

403

InvalidOperation.DeletionProtection

%s

The operation is invalid. Disable release protection for the instance first.

403

ChargeTypeViolation

%s

The payment type conflicts. This operation is not supported for resources of the payment type.

403

IncorrectInstanceStatus.Initializing

%s

\-

403

InvalidOperation.EniLinked

%s

The operation is invalid because the current ENI of the instance is associated with other ENIs. You must disassociate the ENI from the other ENIs before you can unbind the ENI from the instance.

403

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

OperationDenied.SystemInstanceNotSupport

The system instance does not support the %s operation because %s.

\-

404

InvalidInstanceIds.NotFound

The specified InstanceIds does not exist.

The specified InstanceId parameter does not exist. You can call the DescribeInstances operation to query the state of the instance.

404

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

500

InvalidParameter

Invalid parameters.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

%s

An internal error has occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-09

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteInstances?updateTime=2025-04-09#workbench-doc-change-demo)

2025-03-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteInstances?updateTime=2025-03-20#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteInstances?updateTime=2023-07-17#workbench-doc-change-demo)
