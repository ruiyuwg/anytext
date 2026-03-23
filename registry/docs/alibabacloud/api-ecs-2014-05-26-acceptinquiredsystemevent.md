Accepts the default operation for a system event in the Inquiring state and authorizes the system to perform the operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AcceptInquiredSystemEvent)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AcceptInquiredSystemEvent)

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

ecs:AcceptInquiredSystemEvent

update

\*All Resources

`*`

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

The region ID of the system event. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

EventId

string

Yes

The ID of the system event.

e-2zeielxl1qzq8slb\*\*\*\*

Choice

string

No

**Note** This parameter is in invitational preview and is unavailable to general users.

hide

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

4DD56CA6-6D75-4D33-BE34-E4A44EBE1C3D

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4DD56CA6-6D75-4D33-BE34-E4A44EBE1C3D"
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

InvalidParameter

%s

The specified parameter is invalid.

400

IncorrectInstanceStatus

Current instance status does not support this operation.

The instance is in a state that does not support the current operation.

403

OperationConflict

%s

This operation conflicts with another operation in progress. Try again later.

403

OperationFail.DiskCategoryNotSupported

%s

\-

403

OperationFail.DiskStatusNotSupported

%s

\-

403

OperationFail.InstanceStatusNotSupported

%s

\-

403

OperationDenied.AcceptNotSupported

Accept is not supported on current event type.

The current event type does not support this response action.

403

SwitchToOffline.OnlineIsolateFail

Failed to online isolate disk while offline isolation succeeded.

Online isolation failed and has been converted to offline isolation.

403

SwitchToOffline.OnlineReinitFail

Failed to online reinitialize disk while offline reinitialization succeeded.

Online repair failed and has been converted to offline repair.

403

Forbidden.RAM

User not authorized to operate on the specified resource, or this API does not support RAM.

You are not authorized to manage this resource, or this API operation does not support RAM roles.

404

InvalidEventId.NoInquiringEventFound

%s

The specified EventId parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AcceptInquiredSystemEvent?updateTime=2025-11-03#workbench-doc-change-demo)

2025-03-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AcceptInquiredSystemEvent?updateTime=2025-03-20#workbench-doc-change-demo)

2024-11-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AcceptInquiredSystemEvent?updateTime=2024-11-07#workbench-doc-change-demo)
