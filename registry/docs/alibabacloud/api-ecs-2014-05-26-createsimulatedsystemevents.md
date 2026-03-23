Schedules simulated system events of Elastic Compute Service (ECS) instances. The simulated system events do not actually occur on or affect ECS instances.

## Operation description

You can use the ECS console, call [ECS API](/help/en/ecs/api-describeinstancehistoryevents) operations, or use CloudMonitor to view the scheduled simulated system events.

The following descriptions provide the lifecycle of a simulated system event:

-   Scheduled: The state of the simulated system event is automatically changed to Scheduled after it is scheduled.
-   Executed: The state of the simulated system event is automatically changed to Executed at the time specified by the NotBefore parameter if no manual intervention is involved.
-   Canceled: The state of the simulated system event is changed to Canceled if you cancel the event by calling the [CancelSimulatedSystemEvents](/help/en/ecs/api-cancelsimulatedsystemevents) operation.
-   Avoided: The state of the simulated system event generated from maintenance-triggered instance restart can be changed to Avoided if you restart the instance before the scheduled time of the simulated system event. The maintenance-triggered instance restart is indicated by the SystemMaintenance.Reboot value. For more information, see [RebootInstance](/help/en/ecs/api-rebootinstance) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateSimulatedSystemEvents)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateSimulatedSystemEvents)

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

ecs:CreateSimulatedSystemEvents

create

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

EventType

string

Yes

The type of the system event. Valid values:

-   SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
-   SystemFailure.Reboot: The instance is restarted due to a system error.
-   InstanceFailure.Reboot: The instance is restarted due to an instance error.
-   SystemMaintenance.Stop: The instance is stopped due to system maintenance.
-   SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
-   SystemFailure.Redeploy: The instance is redeployed due to a system error.
-   SystemFailure.Stop: The instance is stopped due to a system error.

SystemMaintenance.Reboot

NotBefore

string

Yes

The scheduled start time of the event. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note** For events that occur due to system errors or instance errors, the simulated events of such events enter the `Executing` state when the simulated events are created. The value of `NotBefore` is the time when the simulated events enter the `Executed` state.

2018-12-01T06:32:31Z

InstanceId

array

Yes

The IDs of the instances. You can specify up to 100 instance IDs.

string

Yes

The ID of the instance.

i-bp1gtjxuuvwj17zr\*\*\*\*

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

EventIdSet

array

The IDs of the simulated events.

EventId

string

The ID of the simulated event.

e-bp16helosl7v0ooj\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "EventIdSet": {
    "EventId": [
      "e-bp16helosl7v0ooj****"
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

InvalidParameter

%s

The specified parameter is invalid.

403

InvalidNotBefore.Passed

%s

The specified value of NotBefore is earlier than the current time.

403

SimulatedEventLimitExceeded

%s

\-

403

InstanceIdLimitExceeded

%s

More than 100 instance IDs are specified.

404

MissingParameter

%s

A parameter is not specified.

404

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateSimulatedSystemEvents?updateTime=2025-03-20#workbench-doc-change-demo)
