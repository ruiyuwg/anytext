Restarts an Elastic Compute Service (ECS) instance.

## Operation description

This operation is an asynchronous operation. After you call this operation to restart an ECS instance, the operation sets the status of the ECS instance to `Starting` and begins the restart process. You can call the [DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus) operation to query the status of the instance. When the status of the ECS instance changes to `Running`, the instance is restarted.

### [](#considerations)[](#)Considerations

-   You cannot call this operation to restart an ECS instance that is locked for security reasons. For more information, see [API behavior when an instance is locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons).
-   The ECS instance that you want to restart must be in the **Running** (`Running`) state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RebootInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RebootInstance)

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

ecs:RebootInstance

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

The instance ID.

i-bp67acfmxazb4ph\*\*\*\*

ForceStop

boolean

No

Specifies whether to forcefully stop the ECS instance before the instance is restarted. Valid values:

-   true: forcefully stops the ECS instance. If you set this parameter to true, this operation is equivalent to a power-off operation. Cache data that is not written to storage devices on the instance is lost.
-   false: normally stops the ECS instance.

Default value: false.

false

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and available ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and sends the request. If the request passes the dry run, the ECS instance is restarted.

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

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

DiskError

IncorrectDiskStatus.

The disk state is invalid.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

%s

\-

403

InvalidParameter.KMSKeyId.CMKNotEnabled

%s

\-

403

InvalidParameter.KMSKeyId.KMSUnauthorized

%s

\-

404

InvalidParameter.KMSKeyId.NotFound

%s

\-

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

503

LimitedOperation.ServiceUnavailable

The service is currently unavailable. Please try again later.

The service is currently unavailable. Please try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-03

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RebootInstance?updateTime=2025-12-03#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RebootInstance?updateTime=2023-07-17#workbench-doc-change-demo)
