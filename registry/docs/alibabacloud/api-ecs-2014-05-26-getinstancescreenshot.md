Obtains the screenshots of an Elastic Compute Service (ECS) instance.

## Operation description

After ECS returns a Base64-encoded instance screenshot in the JPG format, you must decode the screenshot. We recommend that you call this operation for troubleshooting and diagnosis. When you call this operation, take note of the following items:

-   The instance must be in the Running state.
-   For instances of the retired instance types, you cannot obtain screenshots. For more information, see [Retired instance types](/help/en/ecs/user-guide/retired-instance-types).
-   If you call this operation on an instance for multiple times, the call interval must be at least 10 seconds. Otherwise, the `Throttling` error is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/GetInstanceScreenshot)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/GetInstanceScreenshot)

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

ecs:GetInstanceScreenshot

get

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

cn-shenzhen

InstanceId

string

Yes

The instance ID.

i-bp1gbz20g229bvu5\*\*\*\*

WakeUp

boolean

No

Specifies whether to wake up the hibernated instance.

Default value: false.

false

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

InstanceId

string

The instance ID.

i-bp1gbz20g229bvu5\*\*\*\*

Screenshot

string

The Base64-encoded instance screenshot in the JPG format.

iVBORw0KGgoA...AAABJRU5ErkJggg==

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "InstanceId": "i-bp1gbz20g229bvu5****",
  "Screenshot": "iVBORw0KGgoA...AAABJRU5ErkJggg=="
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

404

InvalidParameter

%s

The specified parameter is invalid.

405

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

405

NotSupported

%s

Your operation is invalid.

429

Throttling

%s

Your request is being throttled.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/GetInstanceScreenshot?updateTime=2024-12-05#workbench-doc-change-demo)
