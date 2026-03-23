Changes the VPC or vSwitch of a Tair (Redis OSS-compatible) instance. If the instance is deployed in the classic network, the network type of the instance is changed from the classic network to VPC.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/SwitchNetwork)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/SwitchNetwork)

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

kvstore:SwitchNetwork

update

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

TargetNetworkType

string

No

The network type to which you want to switch. If you want to switch to VPC network, Set the value to **VPC**.

Enumeration Value:

-   CLASSIC
-   VPC

VPC

VpcId

string

Yes

The ID of the VPC to which you want to switch. You can call the [DescribeVpcs](/help/en/vpc/api-describevpcs) operation to query the VPC ID.

**Note**

-   The VPC and the instance must be deployed in the same region.
    
-   After you set this parameter, you must also set the **VSwitchId** parameter.
    

vpc-bp1nme44gek34slfc\*\*\*\*

VSwitchId

string

Yes

The ID of the vSwitch that belongs to the VPC to which you want to switch. You can call the [DescribeVpcs](/help/en/vpc/api-describevpcs) operation to query the vSwitch ID.

**Note** The vSwitch and the instance must be deployed in the same zone.

vsw-bp1e7clcw529l773d\*\*\*\*

InstanceId

string

Yes

The ID of the instance. You can call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

RetainClassic

string

No

Specifies whether to retain the original classic network endpoint after you switch the instance from classic network to VPC. Default value: False. Valid values:

-   **True**: retains the classic network endpoint.
-   **False**: does not retain the classic network endpoint.

**Note** This parameter is available only when the network type of the instance is classic network.

True

ClassicExpiredDays

string

No

The retention period of the classic network endpoint. Valid values: **14**, **30**, **60**, and **120**. Unit: days.

**Note**

-   This parameter is available and required only when the **RetainClassic** parameter is set to **True**.
    
-   After you complete the switchover operation, you can also call the [ModifyInstanceNetExpireTime](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancenetexpiretime-redis) operation to modify the retention period of the classic network endpoint.
    

30

## Response parameters

Parameter

Type

Description

Example

object

TaskId

string

The ID of the task.

578678678

RequestId

string

The ID of the request.

F0997EE8-F4C2-4503-9168-85177ED78C70

## Examples

Sample success responses

`JSON`format

```
{
  "TaskId": 578678678,
  "RequestId": "F0997EE8-F4C2-4503-9168-85177ED78C70"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidToken.Malformed

The Specified parameter Token is not valid.

\-

400

VpcServiceError

Invoke vpc service failed.

\-

400

IzNotSupportVpcError

Specify iz not support vpc.

The specified iz does not support VPCs.

400

IzNotSupportSwitchNetworkError

Specify iz not support switch network.

The specified iz does not support network switching.

400

VpcVerifyError

VpcId is wrong.

\-

400

VpcAndVSwitchNotChange

VpcId and vSwitchId not change.

The VpcId and vSwitchId parameter values are not changed.

403

ResourceAlreadyExists

Resource already exists.

\-

403

InsufficientResourceCapacity

ip resource is conflict with other custins.

\-

403

VpcFreePasswordNoSupport

The custins opend VPCFreePassword not support this operation.

This operation is not supported for the instance because the VPC secret exemption is enabled or the# no\_loose\_check-whitelist-always parameter is set to no at the same time.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/SwitchNetwork?updateTime=2024-02-26#workbench-doc-change-demo)

2023-07-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/SwitchNetwork?updateTime=2023-07-20#workbench-doc-change-demo)
