Modifies the instance clock options.

## Operation description

When you call this operation, note that:

-   This is an asynchronous operation. The ID of the asynchronous task is returned after the call. Query the asynchronous task result to determine whether the execution is complete.
-   To modify the PtpStatus parameter, you must specify the parameter. The instance types that are supported. You can query the instance type list ( [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) ).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceClockOptions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceClockOptions)

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

ecs:ModifyInstanceClockOptions

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

Yes

The ID of the instance.

i-bp67acfmxazb4ph\*\*\*\*

PtpStatus

string

No

PTP status value. Valid values:

-   enabled
-   disabled

Default value: disabled.

enabled

DryRun

boolean

No

Specifies whether to perform only a dry run. Valid values:

-   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. Otherwise, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

Default value: false.

false

## Response parameters

Parameter

Type

Description

Example

object

The returned information.

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TaskId

string

The ID of the modification task.

You can call the [DescribeTasks](/help/en/ecs/api-describetasks) operation to query the modification results.

t-bp1hvgwromzv32iq\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TaskId": "t-bp1hvgwromzv32iq****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstanceId.NotFound

The specified instanceId does not exist.

The specified instance does not exist.

400

InvalidParameter.ClientToken

The parameter ClientToken is invalid.

The specified parameter ClientToken is invalid.

400

InvalidParameter.PtpStatus

The specified parameter PtpStatus: %s is not valid.

The specified parameter PtpStatus: %s is not valid.

400

InvalidInstanceType.NotSupportEnablePtp

The specified instance type does not support enable PTP.

The specified instance type does not support enable PTP.

403

Abs.InvalidRegionId.MalFormed

The specified parameter RegionId is not valid.

The specified parameter RegionId is illegal.

403

InvalidOperation.PtpStatusAlreadyEnabled

The specified instance already has PTP enabled.

The specified instance already has PTP enabled.

403

InvalidOperation.PtpStatusAlreadyDisabled

The specified instance does not have PTP enabled.

The specified instance does not have PTP enabled.

403

OperationDenied.HardwareNotSupportEnablePtp

The hardware of the instance does not support enable PTP.

The hardware of the specified instance does not support enabling PTP. Shut down and enable PTP before starting the instance.

403

OperationDenied.ClockPtpNoStock

The resource of PTP is out of usage.

The resource of PTP is out of usage.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).
