Reactivates a pay-as-you-go Elastic Compute Service (ECS) instance that has expired or has been reclaimed due to overdue payments.

## Operation description

After you complete the overdue payment for a pay-as-you-go ECS instance, you do not need to call this operation to reactivate the instance. The system automatically reactivates the instance to restore the instance to the status before the payment became overdue. Automatic reactivation occasionally fails. Take note of the status of automatic reactivation. If the automatic reactivation fails, call this operation to manually reactivate the instance.

-   The instance must be in the **Expired** `(Stopped)` state.
-   You cannot call this operation to start ECS instances that are locked for security reasons. For more information, see [API behavior when an instance is locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReActivateInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReActivateInstances)

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

ecs:ReActivateInstances

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

RegionId

string

No

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

Yes

The ID of the instance that you want to reactivate.

i-bp67acfmxazb4p\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

51AB7717-6E1A-4D1D-A44D-54CB123ABC

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "51AB7717-6E1A-4D1D-A44D-54CB123ABC"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ReopenInstance.InstanceNotEnoughBalance

Reopen instance must have enough account balance.

\-

400

ReopenInstance.ImageNotEnoughBalance

Reopen instance must have enough cash balance.

\-

400

ReopenInstance.InstanceStatusNotValid

Instance status is not Expired, ImageExpired or EcsAndImageExpired.

The instance cannot be restarted because the instance or its image has expired.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InsufficientBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidPayType.NotSupport

The specified pre pay instance not support.

Subscription instances do not support the operation.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-21

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReActivateInstances?updateTime=2025-01-21#workbench-doc-change-demo)
