Puts or removes Elastic Compute Service (ECS) instances into or from the Protected state. After you put an ECS instance into the Protected state, the ECS instance will not be stopped or released when a scale-in event is triggered. In this case, you can manually delete the ECS instance in the Auto Scaling console or by calling the RemoveInstances operation.

## Operation description

Once ECS instances enter the Protected state, they become subject to the following restrictions:

-   ECS instances will persist in the Protected state, unless you deliberately remove them from this state.
-   Even in scenarios where automatic scale-in actions are initiated due to fluctuations in the number of ECS instances or the execution of event-triggered tasks, Auto Scaling does not remove ECS instances that are in the Protected state from their respective scaling groups. Only after being manually removed from their respective scaling groups can ECS instances that are in the Protected state be released. For more information, see [Remove an ECS instance](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-removeinstances).
-   ECS instances in the Protected state maintain their health status even when they undergo stopping or restarting processes.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ess/2022-02-22/SetInstancesProtection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ess/2022-02-22/SetInstancesProtection)

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

ess:SetInstancesProtection

update

\*ScalingGroup

`acs:ess:{#regionId}:{#accountId}:scalinggroup/{#ScalingGroupId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ScalingGroupId

string

Yes

The ID of the scaling group.

asg-bp18p2yfxow2dloq\*\*\*\*

ProtectedFromScaleIn

boolean

Yes

Specifies whether to protect ECS instances from being stopped or removed from the scaling group during scale-ins. Valid values:

-   true
-   false

true

InstanceIds

array

Yes

The IDs of the ECS instances.

string

Yes

The IDs of the ECS instances.

i-28wt4\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ess/2022-02-22/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-14

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ess/2022-02-22/SetInstancesProtection?updateTime=2025-03-14#workbench-doc-change-demo)
