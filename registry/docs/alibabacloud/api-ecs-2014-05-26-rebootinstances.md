Restarts Elastic Compute Service (ECS) instances. When you call this operation, you can configure parameters to specify a batch operation mode and whether to forcefully restart the instances.

## Operation description

This operation is an asynchronous operation. After you call this operation to restart an ECS instance, the operation sets the status of the ECS instance to `Starting` and begins the restart process. You can call the [DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus) operation to query the status of the instance. When the status of the ECS instance changes to `Running`, the instance is restarted.

### [](#limits)[](#)Limits

-   You cannot call this operation to restart ECS instances that are locked due to security reasons. For more information, see [API behavior when an instance is locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons).
-   The ECS instances that you want to restart must be in the **Running** (`Running`) state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RebootInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RebootInstances)

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

ecs:RebootInstances

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

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and instance status. If the request fails the dry run, an error message is returned. If the request passes the dry run, `DRYRUN.SUCCESS` is returned.

**Note** If you set `BatchOptimization` to `SuccessFirst` and `DryRun` to true, only `DRYRUN.SUCCESS` is returned regardless of whether the request passes the dry run.

-   false: performs a dry run and sends the request. If the request passes the dry run, the instance is restarted.

Default value: false.

false

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ForceReboot

boolean

No

Specifies whether to forcefully restart the instance. Valid values:

-   true: forcefully restarts the instance. This operation is equivalent to the typical power-off operation. Cache data that is not written to storage devices on the instance is lost.
-   false: normally restarts the instance.

Default value: false.

false

BatchOptimization

string

No

The batch operation mode. Valid values:

-   AllTogether: In this mode, if all instances are restarted, a success message is returned. If an instance fails the verification, all instances fail to be restarted and an error message is returned.
-   SuccessFirst: In this mode, each instance is restarted separately. The response contains the operation results of each instance.

Default value: AllTogether.

AllTogether

InstanceId

array

Yes

The IDs of ECS instances. Valid values of N: 1 to 100.

string

Yes

The ID of ECS instance N.

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

InstanceResponses

array<object>

Details about instance-specific responses, which contain the status of each instance before and after the operation is called and the results of the operation.

InstanceResponse

object

Code

string

The error code returned for the instance. A return value of 200 indicates that the operation is successful. For more information, see the "Error codes" section of this topic.

200

Message

string

The error message that is returned for the operation on the instance. The return value Success indicates that the operation is successful. For more information, see the "Error codes" section of this topic.

success

InstanceId

string

The ID of the instance.

i-bp1g6zv0ce8oghu7\*\*\*\*

CurrentStatus

string

The current state of the instance.

Stopping

PreviousStatus

string

The state of the instance before the operation is called.

Running

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "InstanceResponses": {
    "InstanceResponse": [
      {
        "Code": 200,
        "Message": "success",
        "InstanceId": "i-bp1g6zv0ce8oghu7****",
        "CurrentStatus": "Stopping",
        "PreviousStatus": "Running"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK needs to be added ECS tag

\-

400

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK needs to be enabled.

The customer master key (CMK) is not enabled when KMSKeyId is specified for an encrypted disk. You can call the DescribeKey operation of KMS to query information about the specified CMK.

400

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service account have no right to access your KMS.

\-

400

DRYRUN.SUCCESS

This request is a dryrun request with successful result.

The request is checked and determined as valid.

403

InvalidInstanceId.NotFound

InstanceId should not be null.

\-

403

InvalidParameter.TooManyInstanceIds

Instance ids cannot be more than 100.

InstanceIds cannot be more than 100.

403

Abs.InvalidInstanceIds.MalFormed

The specified instanceIds is not valid.

\-

403

InstanceLockedForSecurity

%s

\-

403

InstanceExpiredOrInArrears

%s

\-

403

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

403

InvalidInstance.NotFoundSystemDisk

%s

\-

403

InsufficientBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InstanceNotReady

The specified instance is not ready for use.

The resource is in a state that does not support the current operation. Try again later and check whether the instance state supports the operation.

404

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

404

InvalidInstanceIds.NotFound

The specified InstanceIds does not exist.

The specified InstanceId parameter does not exist. You can call the DescribeInstances operation to query the state of the instance.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

409

InvalidOperation.Conflict

Request was denied due to conflict with a previous request, please try again later.

\-

500

InternalError

The request processing has failed due to some unknown error.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RebootInstances?updateTime=2025-12-03#workbench-doc-change-demo)
