Stops Elastic Compute Service (ECS) instances. You can specify parameters to determine whether to forcefully stop the instances and the stop mode.

## Operation description

This operation is an asynchronous operation. After you call this operation to stop an ECS instance, the operation sets the status of the ECS instance to Stopping and begins the stop process. You can call the [DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus) operation to query the status of the ECS instance. When the status of the ECS instance changes to `Stopped`, the instance is stopped.

### [](#considerations)[](#)Considerations

-   The instance is unavailable after you stop the instance. Make sure that stopping the instance does not affect your business. You can also call the [StartInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startinstance) or [StartInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startinstances) operation to start the instance.
-   You cannot call this operation to stop ECS instances that are locked for security reasons. For more information, see [API behavior when an instance is locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/StopInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/StopInstances)

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

ecs:StopInstances

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

Specifies whether to send a precheck request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and instance status. If the check fails, the corresponding error message is returned. If the request passes the dry run, `DRYRUN.SUCCESS` is returned.

**Note** If you set `BatchOptimization` to `SuccessFirst` and `DryRun` to true, only `DRYRUN.SUCCESS` is returned, regardless of whether the request passes the dry run.

-   false: performs a dry run and performs the actual request. If the request passes the dry run, instances are stopped.

Default value: false.

false

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ForceStop

boolean

No

Specifies whether to forcefully stop instances. Valid values:

-   true: forcefully stops the ECS instance.
    
    \*\*
    
    **Alert** Force Stop: forcefully stops the instance. A force stop is equivalent to a physical shutdown and may cause data loss if instance data has not been written to disks.
    
-   false: normally stops the ECS instance.
    

Default value: false.

false

StoppedMode

string

No

Stop mode. Valid values:

-   StopCharging: economical mode. After an instance is stopped in economical mode:
    
    -   Billing for the following resources of the instance stops: computing resources (vCPUs, memory, and GPUs), image licenses, and public bandwidth of the static public IP address (if any) that uses the pay-by-bandwidth metering method.
    -   Billing for the following resources of the instance continues: system disk, data disks, and public bandwidth of the elastic IP address (EIP) (if any) that uses the pay-by-bandwidth metering method.
    -   The instance may fail to restart due to the reclaimed computing resources or insufficient resources. Try again later or change the instance type of the instance.
    -   If an EIP is associated with the instance before the instance is stopped, the EIP remains unchanged after the instance is restarted. If a static public IP address is associated with the instance before the instance is stopped, the static public IP address may change, but the private IP address does not change.
    
    For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode).
    
    \*\*
    
    **Note** If the instance itself does not support the economical shutdown mode, the API side does not intercept errors, and the instance is preferentially stopped. The following types of instances are not supported: classic network instances, local disks, and monthly instances.
    
-   KeepCharging: standard mode. After the instance is stopped in standard mode, you continue to be charged for the instance. If you want to change the operating system, re-initialize disks, change the instance type, or modify the private IP address, we recommend selecting this mode to avoid startup failures.
    

Default value: If the conditions for [enabling the economical mode for an instance in a VPC](/help/en/ecs/user-guide/economical-mode#default) are met and you have enabled this mode in the ECS console, the default value is `StopCharging`. Otherwise, the default value is `KeepCharging`.

KeepCharging

BatchOptimization

string

No

Specifies the batch operation mode. Valid values:

-   AllTogether: The batch operation is successful only after all operations are successful. If any operation fails, the batch operation is considered failed, and all operations that have been performed are undone to restore the instances to the status before the batch operation.
-   SuccessFirst: allows each operation in a batch to be independently executed. If an operation fails, other operations can continue and confirm success. In this mode, successful operations are committed and failed operations are marked as failed, but the execution results of other operations are not affected.

Default value: AllTogether.

AllTogether

InstanceId

array

Yes

The IDs of ECS instances. You can specify 1 to 100 instance IDs.

string

Yes

The ID of the ECS instance.

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

1C488B66-B819-4D14-8711-C4EAAA13AC01

InstanceResponses

array<object>

The instance-specific responses, which contain the status of each instance before and after the operation was called and the results of the operation.

InstanceResponse

object

Code

string

The error code returned for the instance. A return value of 200 indicates that the operation was successful. For more information, see the "Error codes" section of this topic.

200

Message

string

The error message returned for the instance. The return value `success` indicates that the operation is successful. For more information, see the "Error codes" section of this topic.

success

InstanceId

string

The ID of the instance.

i-bp67acfmxazb4p\*\*\*\*

CurrentStatus

string

The current status of the instance.

Stopping

PreviousStatus

string

The status of the instance before the operation was called.

Running

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1C488B66-B819-4D14-8711-C4EAAA13AC01",
  "InstanceResponses": {
    "InstanceResponse": [
      {
        "Code": 200,
        "Message": "success",
        "InstanceId": "i-bp67acfmxazb4p****",
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

400

InvalidParameter.Encrypted.KmsNotEnable

Failed to perform this operation because KMS is not activated.

You need to activate KMS key escrow service.

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

InvalidInstanceId.NotSupport

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

403

InvalidOperation.KMSKeyIdNotFound

The specified KMSKeyId not found, %s.

The associated KMS encryption key cannot be found. Verify that the KMS encryption key is valid.

403

InvalidOperation.KMSServiceNotOpen

KMS service is currently not open.

The KMS service has not been enabled.

403

OperationDenied.SystemInstanceNotSupport

The system instance does not support the %s operation because %s.

\-

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstances?updateTime=2025-12-03#workbench-doc-change-demo)

2025-03-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstances?updateTime=2025-03-20#workbench-doc-change-demo)

2024-12-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstances?updateTime=2024-12-20#workbench-doc-change-demo)
