Stops an Elastic Compute Service (ECS) instance. You can specify parameters to determine whether to forcefully stop the instance and the stop mode.

## Operation description

This operation is an asynchronous operation. After you call this operation to stop an ECS instance, the operation sets the status of the ECS instance to Stopping and begins the stop process. You can call the [DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus) operation to query the status of the ECS instance. When the status of the ECS instance changes to `Stopped`, the instance is stopped.

### [](#precautions)[](#)Precautions

-   You cannot call this operation to stop an ECS instance that is locked for security reasons. For more information, see [API behavior when an instance is locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons).
-   After you enable the default economical mode for all pay-as-you-go ECS instances located in virtual private clouds (VPCs) in your account, you can set `StoppedMode` to KeepCharging for the ECS instance that you want to stop to enable standard mode. This way, the ECS instance continues to be billed after the instance is stopped. The instance type resources and public IP address of the instance are retained.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/StopInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/StopInstance)

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

ecs:StopInstance

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

The ID of the instance.

i-bp67acfmxazb4ph\*\*\*\*

ConfirmStop

boolean

No

This parameter will be removed in the future and is retained only to ensure compatibility. We recommend that you ignore this parameter.

true

ForceStop

boolean

No

Specifies whether to forcefully stop the ECS instance. Valid values:

-   true: forcefully stops the ECS instance. If you set ForceStop to true, this operation is equivalent to a power-off operation. Cache data that is not written to storage devices on the instance is lost.
-   false: normally stops the ECS instance.

Default value: false.

false

StoppedMode

string

No

The stop mode of the pay-as-you-go instance. Valid values:

-   StopCharging: economical mode. After an instance is stopped in economical mode:
    
    -   Billing for the following resources of the instance stops: computing resources (vCPUs, memory, and GPUs), image licenses, and public bandwidth of the static public IP address (if any) that uses the pay-by-bandwidth metering method.
    -   Billing for the following resources of the instance continues: system disk, data disks, and public bandwidth of the elastic IP address (EIP) (if any) that uses the pay-by-bandwidth metering method.
    -   The instance may fail to restart due to the reclaimed computing resources or insufficient resources. Try again later or change the instance type of the instance.
    -   If an EIP is associated with the instance before the instance is stopped, the EIP remains unchanged after the instance is restarted. If a static public IP address is associated with the instance before the instance is stopped, the static public IP address may change, but the private IP address does not change.
    
    For more information, see [Economical mode](/help/en/ecs/user-guide/economical-mode).
    
    \*\*
    
    **Note** If the instance does not support the economical mode, the system stops the instance and does not report errors during the operation call. The following types of instances are not supported: classic network instances, local disks, and monthly instances.
    
-   KeepCharging: standard mode. After the instance is stopped in standard mode, you continue to be charged for the instance.
    

Default value: If the conditions for [enabling the economical mode for an instance in a VPC](/help/en/ecs/user-guide/economical-mode#default) are met and you have enabled this mode in the ECS console, the default value is `StopCharging`. Otherwise, the default value is `KeepCharging`.

KeepCharging

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and available ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request.

Default value: false.

true

Hibernate

boolean

No

**Note** This parameter is in invitational preview and is not publicly available.

hide

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

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1C488B66-B819-4D14-8711-C4EAAA13AC01"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.Encrypted.KmsNotEnable

Failed to perform this operation because KMS is not activated.

You need to activate KMS key escrow service.

400

DiskError

IncorrectDiskStatus.

The disk state is invalid.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InstanceType.ParameterMismatch

The input parameter ConfirmStop must be true when an instance have localstorage.

The ConfirmStop parameter is not set to true for the instance that uses local storage.

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

InvalidInstanceId.NotSupport

Classic network Instance does not support this operation.

Instances that reside in the classic network do not support the operation.

403

InvalidInstanceId.NotSupport

Pre pay instance does not support this operation.

Subscription instances do not support the operation.

403

InvalidInstanceId.NotSupport

Local disk instance does not support this operation.

The operation is not supported while the instance has local disks attached.

403

InvalidInstanceId.NotSupport

Spot instance does not support this operation.

Spot instances do not support the operation.

403

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK needs to be added ECS tag

\-

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK needs to be enabled.

The customer master key (CMK) is not enabled when KMSKeyId is specified for an encrypted disk. You can call the DescribeKey operation of KMS to query information about the specified CMK.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

HibernationConfigured.InstanceOperationForbidden

The operation is not permitted due to limit of the hibernation configured instance.

The operation cannot be performed due to the limitations of instances for which the instance hibernation feature is enabled.

403

HibernationConfigured.NotEnabled

The instance hibernation configured option is not enabled.

\-

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstance?updateTime=2025-12-03#workbench-doc-change-demo)

2025-03-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstance?updateTime=2025-03-20#workbench-doc-change-demo)

2024-12-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstance?updateTime=2024-12-20#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstance?updateTime=2023-07-17#workbench-doc-change-demo)

2021-05-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StopInstance?updateTime=2021-05-25#workbench-doc-change-demo)
