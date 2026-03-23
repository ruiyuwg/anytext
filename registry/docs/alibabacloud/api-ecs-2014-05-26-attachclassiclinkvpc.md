Links an instance that is deployed in the classic network to a virtual private cloud (VPC) by establishing a ClassicLink connection between the instance and the VPC. This way, the instance can communicate with cloud resources in the VPC over the internal network.

## Operation description

When you call this operation, take note of the following items:

-   The instance that you want to connect to a VPC must be in the **Running** or **Stopped** state.
-   The ClassicLink feature must be enabled for the destination VPC. For more information, see [Create a ClassicLink connection](/help/en/vpc/create-classiclink-connection).
-   The instance and the VPC must reside in the same region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachClassicLinkVpc)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachClassicLinkVpc)

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

ecs:AttachClassicLinkVpc

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#vpcId}`

-   vpc:tag

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

The ID of the instance that is deployed in the classic network. You can call the [DescribeInstances](/help/en/ecs/api-describeinstances) operation to query available instances.

i-bp1gtjxuuvwj17zr\*\*\*\*

VpcId

string

Yes

The ID of the VPC for which the ClassicLink feature is enabled. You can call the [DescribeVpcs](/help/en/vpc/api-describevpcs) operation to query available VPCs.

vpc-bp1j4z1sr8zxu4l8u\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

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

The instance does not allow link to vpc.

The instance is linked to another VPC.

403

InvalidParameter.InvalidInstanceIdAndVpcId

The parameter InstanceId and VpcId are not allowed to be empty at the same time.

At least one of the InstanceId and VpcId parameters must be specified.

403

OperationDenied

The instance has been linked to other vpc.

\-

403

OperationDenied

The specified vpc is disabled attach classic link.

ClassicLink connections cannot be established to the specified VPC.

403

InvalidInstanceId.NotFound

The specified instance does not exist.

The specified instance does not exist. Check whether the instance ID is correct.

403

InvalidStatus.InstanceStatus

The specified instance status is not support this operation ,expect status is running or shutted.

The instance is in a state that does not support the operation. The operation can be performed only when the instance is in the Running or Stopped state.

403

InvalidStatus.InstanceStatus

The specified instance status is not support this operation, expect status is running or shutted.

The instance is in a state that does not support the operation. The operation can be performed only when the instance is in the Running or Stopped state.

403

InvalidInstanceId.NotBelong

The specified instance is not belong to you.

The specified instance does not exist in your account.

403

QuotaExceeded

The link quota exceeded in this vpc.

The maximum number of ClassicLink connections that can be established to the specified VPC has been reached.

403

InvalidStatus.InstanceLocked

The specified instance is locked,please wait more.

\-

403

InvalidInstanceId.LimitedRegion

The specified instance does not support this operation due to the limitation of its region.

The operation is not supported while the instance resides in the current region.

403

Forbidden.SubUser

User not authorized to operate on the specified resource.

Your RAM user is not authorized to manage this resource.

403

InvalidInstanceId.NotFound

The specified Instance is not exist.

\-

403

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachClassicLinkVpc?updateTime=2024-12-20#workbench-doc-change-demo)
