Modifies the maintenance attributes of an instance.

## Operation description

This operation is used to modify the maintenance policy of an instance. The maintenance policy consists of the following maintenance attributes:

-   Maintenance window: the time period that you specify for maintenance.
-   Maintenance action: the action that you specify in response to instance shutdown.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceMaintenanceAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceMaintenanceAttributes)

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

ecs:ModifyInstanceMaintenanceAttributes

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

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ActionOnMaintenance

string

No

The maintenance action. Valid values:

-   Stop: stops the instance.
-   AutoRecover: automatically recovers the instance.
-   AutoRedeploy: redeploys the instance, which may damage the data disks attached to the instance.

AutoRecover

NotifyOnMaintenance

boolean

No

Specifies whether to send an event notification before maintenance. Valid values:

-   true
-   false

Default value: false.

false

InstanceId

array

No

The ID of instance N. Valid values of N: 1 to 100.

string

No

The ID of instance N. Valid values of N: 1 to 100.

i-bp67acfmxazb4ph\*\*\*\*

MaintenanceWindow

array<object>

No

The maintenance windows.

object

No

The maintenance windows.

EndTime

string

No

The end time of the maintenance window. The time must be on the hour. You must configure both StartTime and EndTime. The value of EndTime must be 1 to 23 hours later than the value of StartTime. Specify the time in the `HH:mm:ss` format. The time must be in UTC+8. Set the value of N to 1.

18:00:00

StartTime

string

No

The start time of the maintenance window. The time must be on the hour. You must configure both StartTime and EndTime. The value of EndTime must be 1 to 23 hours later than the value of StartTime. Specify the time in the `HH:mm:ss` format. The time must be in UTC+8. Set the value of N to 1.

02:00:00

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

403

InvalidParameter

%s

The specified parameter is invalid.

403

OperationDenied.NotInWhiteList

%s

You are not authorized to perform this operation. Try again when you are authorized.

404

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceMaintenanceAttributes?updateTime=2025-11-24#workbench-doc-change-demo)
