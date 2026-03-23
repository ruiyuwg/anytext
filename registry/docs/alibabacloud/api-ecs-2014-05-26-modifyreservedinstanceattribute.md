Modifies the attributes of a reserved instance, such as the name and description of the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyReservedInstanceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyReservedInstanceAttribute)

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

ecs:ModifyReservedInstanceAttribute

update

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

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

The ID of the reserved instance.

cn-hangzhou

ReservedInstanceId

string

Yes

The new name of the reserved instance. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

ecsri-uf61hdhue4kcorqsk\*\*\*\*

ReservedInstanceName

string

No

The new description of the reserved instance. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.

This parameter is empty by default.

testReservedInstanceName

Description

string

No

The error code.

ri-example

## Response parameters

Parameter

Type

Description

Example

object

HttpStatusCode

integer

The ID of the request.

200

Code

string

Modifies the attributes of a reserved instance, such as its name and description.

200

Message

string

The error message for this instance operation. The return value Success indicates that this operation is successful. For more information, see the "Error codes" section in this topic.

Success

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "HttpStatusCode": 200,
  "Code": 200,
  "Message": "Success",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

InvalidParameter.ReservedInstanceName

The reservedInstanceName is invalid.

reservedInstanceName field value is illegal

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

InvalidReservedInstanceId.NotFound

The specified ReservedInstanceId does not exist.

The specified ReservedInstanceId resource does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyReservedInstanceAttribute?updateTime=2025-11-24#workbench-doc-change-demo)

2024-12-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyReservedInstanceAttribute?updateTime=2024-12-26#workbench-doc-change-demo)

2023-10-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyReservedInstanceAttribute?updateTime=2023-10-24#workbench-doc-change-demo)
