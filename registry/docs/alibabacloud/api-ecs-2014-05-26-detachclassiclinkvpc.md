Unlinks an Elastic Compute Service (ECS) instance that resides in the classic network from a virtual private cloud (VPC) by closing the ClassicLink connection between the instance and the VPC. After the instance is unlinked from the VPC, the instance can no longer communicate with instances in the VPC.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachClassicLinkVpc)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachClassicLinkVpc)

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

ecs:DetachClassicLinkVpc

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#vpcId}`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

Yes

The ID of the instance that resides in the classic network.

i-bp67acfmxazb4p\*\*\*\*

VpcId

string

Yes

The ID of the VPC to which the instance is connected.

vpc-bp67acfmxazb4p\*\*\*\*

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

InvalidInstanceId.NotFound

The InstanceId provided does not exist in our records.

The specified instance does not exist. Check whether the instance ID is correct.

403

InvalidRegionId.Malformed

The specified parameter ?RegionId? is not valid.

The specified RegionId parameter is invalid.

403

InvalidVpcId.Malformed

The specified parameter ?VpcId? is not valid.

The specified VpcId parameter is invalid.

403

InvalidInstanceId.MalFormed

The specified instance is not a classic network instance.

The specified instance does not reside in the classic network.

403

OperationDenied

The instances are not allowed to detach from the linked vpc.

The instance cannot be unlinked from the VPC.

403

InvalidParameter.InvalidInstanceIdAndVpcId

The parameter InstanceId and VpcId are not allowed to be empty at the same time.

At least one of the InstanceId and VpcId parameters must be specified.

403

InvalidInstanceId.NotFound

The specified instance does not exist.

The specified instance does not exist. Check whether the instance ID is correct.

403

InvalidStatus.InstanceStatus

The specified instance status is not support this operation ,expect status is running or shutted.

The instance is in a state that does not support the operation. The operation can be performed only when the instance is in the Running or Stopped state.

403

InvalidInstanceId.NotBelong

The specified instance is not belong to you.

The specified instance does not exist in your account.

403

Forbidden.SubUser

User not authorized to operate on the specified resource.

Your RAM user is not authorized to manage this resource.

403

InvalidOperation.InvalidVpc

The specified instance not link specify vpc

\-

403

InvalidStatus.InstanceStatus

The specified instance status does not support this operation, expected status is Running or Stopped.

The instance is in a state that does not support the current operation. The operation can be performed only when the instance is in the Running or Stopped state.

403

OperationDenied

The specified vpc is disabled detach classic link.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachClassicLinkVpc?updateTime=2024-12-20#workbench-doc-change-demo)

2023-08-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachClassicLinkVpc?updateTime=2023-08-31#workbench-doc-change-demo)
