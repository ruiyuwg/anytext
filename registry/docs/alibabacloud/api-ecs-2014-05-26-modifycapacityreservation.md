Modifies the information of a capacity reservation, including the name, description, release mode, and the total number of Elastic Compute Service (ECS) instances for which capacity is reserved.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyCapacityReservation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyCapacityReservation)

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

ecs:ModifyCapacityReservation

update

\*CapacityReservation

`acs:ecs:{#regionId}:{#accountId}:capacityreservation/{#CapacityReservationId}`

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

The region ID of the capacity reservation. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PrivatePoolOptions.Id

string

Yes

The capacity reservation ID.

crp-bp67acfmxazb4\*\*\*\*

PrivatePoolOptions.Name

string

No

The name of the capacity reservation. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

eapTestName

Description

string

No

The description of the capacity reservation. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.

This is description.

StartTime

string

No

The mode in which the capacity reservation takes effect. Only immediate capacity reservations are supported. You do not need to specify a value for this parameter.

**Note** If you do not specify a value for this parameter, the capacity reservation immediately takes effect.

Now

EndTime

string

No

The expiration time of the capacity reservation. This parameter takes effect only when `EndTimeType` is set to Limited. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format).

2021-10-30T06:32:00Z

EndTimeType

string

No

The release mode of the capacity reservation. Valid values:

-   Limited: The capacity reservation is automatically released at the specified point in time. If you configure this parameter, you must also configure `EndTime`.
-   Unlimited: The capacity reservation must be manually released. You can release it anytime.

Unlimited

Platform

string

No

The operating system of the image used by the instance. Valid values:

-   Windows
-   Linux

**Note** This parameter is unavailable.

Linux

InstanceAmount

integer

No

The total number of instances for which capacity is reserved. Valid values: the number of used instances to 1000.

**Note** When you increase the number of instances, the increase may fail due to insufficient resources.

100

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

8455DD10-84F8-43C9-8365-5F448EB169B6

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8455DD10-84F8-43C9-8365-5F448EB169B6"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstanceAmount.ValueNotSupported

The specified parameter InstanceAmount is not valid.

The specified parameter InstanceAmount is invalid.

400

InvalidDescription.ValueNotSupported

The specified Description is invalid.

\-

400

InvalidEndTime.ValueNotSupported

The specified EndTime is invalid.

\-

400

InvalidStartTime.ValueNotSupported

The specified StartTime is invalid.

\-

401

InvalidUser.Unauthorized

The user is not authorized.

The account you are currently using does not have permission.

403

IncorrectPrivatePoolStatus

The current status of the private pool does not support this operation.

The specified private pool state does not support the operation.

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

403

InvalidPrivatePoolOptionsName.ValueNotSupported

The specified PrivatePoolOptions.Name is invalid.

\-

403

InvalidPlatform.ValueNotSupported

The specified Platform is invalid.

\-

403

OperationDenied.PlatformNotSupported

The specified private pool does not support this operation.

\-

403

OperationDenied.EndTimeTypeNotSupported

The specified private pool does not support this operation.

\-

403

OperationDenied.StartTimeNotSupported

The specified private pool does not support this operation.

\-

403

OperationDenied.InstanceAmountNotSupported

The specified private pool does not support this operation.

\-

403

InvalidInstanceAmount.ValueNotSupported

The specified InstanceAmount is invalid.

\-

403

InvalidPrivatePoolOptions.Id

The specified private pool does not support this operation.

\-

403

InvalidPrivatePoolOptions.Id

The specified PrivatePoolOptions.Id is invalid.

The specified private pool is invalid

403

OperationDenied.InstanceTypeNotAuthorized

The specified InstanceType is not available or not authorized.

The specified InstanceType is not available or is not authorized.

404

InvalidPrivatePoolId.NotFound

The specified private pool does not exist.

The specified private pool does not exist

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCapacityReservation?updateTime=2025-02-19#workbench-doc-change-demo)

2023-12-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyCapacityReservation?updateTime=2023-12-06#workbench-doc-change-demo)
