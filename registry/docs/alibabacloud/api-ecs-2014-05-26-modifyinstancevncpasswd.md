Changes the Virtual Network Computing (VNC) password of an Elastic Compute Service (ECS) instance.

## Operation description

-   The VNC password must be six characters in length and can contain uppercase letters, lowercase letters, and digits.
    
-   After you modify the VNC password of an ECS instance, take note of the following items:
    
    -   If the instance is I/O optimized, the new password takes effect immediately without the need to restart the instance.
    -   If the instance is not I/O optimized, you must [restart the instance](/help/en/ecs/user-guide/restart-instances) in the ECS console or by calling the [RebootInstance](/help/en/ecs/api-rebootinstance) operation for the new password to take effect.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceVncPasswd)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceVncPasswd)

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

ecs:ModifyInstanceVncPasswd

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

The ID of the ECS instance.

i-bp67acfmxazb4ph\*\*\*\*

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

VncPassword

string

Yes

The new VNC password of the ECS instance.

Ecs123

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

IncorrectVncPassword.Malformed

The specified parameter VncPassword is not valid.

The specified VNC password is invalid.

400

IncorrectVncPassword.Malformed

The specified parameter VncPassword must be 6 characters, including uppercase characters, lowercase characters and numbers.

The specified VNC password VncPassword parameter is invalid.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceNotReady

Temporarily unable to connect the specified instance,please try later.

\-

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

NoSuchResource

The specified resource is not found.

The specified resource does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceVncPasswd?updateTime=2024-12-17#workbench-doc-change-demo)
