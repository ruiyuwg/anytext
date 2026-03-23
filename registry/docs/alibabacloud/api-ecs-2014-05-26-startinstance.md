Starts an Elastic Compute Service (ECS) instance. You can specify the ID of an ECS instance and parameters, such as InitLocalDisk, in the request based on your business requirements to start the instance.

## Operation description

This operation is an asynchronous operation. After you call this operation to start an ECS instance, the operation sets the status of the ECS instance to Starting and begins the startup process. You can call the [DescribeInstanceStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancestatus) operation to query the status of the ECS instance. When the status of the ECS instance changes to `Running`, the instance is started.

### [](#precautions)[](#)Precautions

-   You cannot call this operation to start an ECS instance that is locked for security reasons. For more information, see [API behavior when an instance is locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons).
-   The ECS instance that you want to start must be in the **Stopped** (`Stopped`) state.
-   If an ECS instance is stopped in economical mode, the instance may fail to be started due to insufficient resources.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/StartInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/StartInstance)

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

ecs:StartInstance

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

The ID of the instance that you want to start.

i-bp67acfmxazb4p\*\*\*\*

InitLocalDisk

boolean

No

Specifies whether to restore the ECS instance to the initial health state on startup if a local disk fails. This parameter is applicable to ECS instances that are equipped with local disks, such as d1, i1, and i2 instances. Valid values:

-   true: restores the ECS instance to the initial health state on startup.
    
    \*\*
    
    **Warning**: After the ECS instance is restored to the initial health state, data stored on the local disks of the instance is lost.
    
-   false: does not restore the ECS instance to the initial health state on startup. The instance remains in the current state.
    

Default value: false.

true

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   true: performs only a dry run. The system checks the AccessKey pair, the permissions of the RAM user, and the required parameters. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

true

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

400

LackResource

There's no enough resource on the specified capacity reservation.

\-

400

InvalidDedicatedHost.NotEnoughResource

The specified dedicated host has not enough resource due to host affinity.

\-

400

InvalidDedicatedHost.NotEnoughResource

There's no available dedicated host to perform the operation.

\-

400

InvalidInstance.NotFoundSystemDisk

The specified instance does not have system disk.

\-

400

Invalid.PrivatePoolOptions.NoStock

The PrivatePool has been used up.

The capacity of the specified private pool (elastic assurance, capacity reservation) has been used up.

403

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InsufficientBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

DiskError

IncorrectDiskStatus.

The disk state is invalid.

403

InstanceExpired

The postPaid instance has been expired.Please ensure your account have enough balance.

The pay-as-you-go instance has expired. Make sure that your Alibaba Cloud account balance is sufficient.

403

InstanceExpired

The prePaid instance has been expired.

\-

403

InstanceNotReady

The specified instance is not ready for use.

The resource is in a state that does not support the current operation. Try again later and check whether the instance state supports the operation.

403

DiskInArrears

The specified operation is denied as your disk has expired.

The disk has expired due to an overdue payment.

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

403

OperationDenied.SpotPriceLowerThanPublicPrice

The spot instance price is lower than public price.

Your user-defined maximum hourly price of a spot instance is lower than the current market price.

403

IncorrectInstanceStatus

%s

The instance is in a state that does not support the current operation.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK needs to be added ECS tag.

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

QuotaExceed.ElasticQuota

No additional quota is available for the specified ECS instance type.

The maximum number of instances of the specified instance type in the region has been reached. Reduce the quantity of instances that you want to purchase or try another region or instance type. Alternatively, you can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type.

The maximum number of instances of the specified instance type in the region has been reached. Reduce the quantity of instances that you want to purchase or try another region or instance type. Alternatively, you can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.

The maximum number of vCPUs for all instance types has been reached. You can go to the ECS console or Quota Center to request a quota increase.

403

QuotaExceed.ElasticQuota

The number of the specified ECS instances has exceeded the quota of the specified instance type, or the number of vCPUs assigned to the ECS instances has exceeded the quota in the zone.

The maximum number of instances of the specified instance type in the region has been reached, or the maximum number of vCPUs for all instance types has been reached. You can go to the ECS console or Quota Center to request a quota increase.

403

OperationDenied.HostRepairing

The specified operation is denied as the host of ECS instance is being repaired.

The operation is not supported while the physical machine that hosts the ECS instance is being repaired.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidCapacityReservationId.NotFound

The specified capacity reservation does not exist.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartInstance?updateTime=2025-12-03#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartInstance?updateTime=2023-07-17#workbench-doc-change-demo)
