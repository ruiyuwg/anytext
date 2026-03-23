Deletes an elastic network interface (ENI) in a region. DeleteNetworkInterface is an asynchronous operation.

## Operation description

Take note of the following items:

-   The ENI to be deleted must be in the Available state.
    
-   If the ENI to be deleted is attached to an Elastic Compute Service (ECS) instance, you must detach the ENI from the instance before you can delete the ENI. To detach the ENI, you can call the [DetachNetworkInterface](/help/en/ecs/api-detachnetworkinterface) operation.
    
-   After an ENI is deleted, the following situations occur:
    
    -   All private IP addresses (including primary and secondary private IP addresses) of the ENI are automatically released.
    -   The ENI is automatically removed from all security groups.
-   The DeleteNetworkInterface operation is an asynchronous operation. After this operation is called to delete an ENI, you can check the status or events of the ENI to determine whether the ENI is deleted. The following figure shows the transitions between the states of the ENI. ![](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20230223/krcd/DeleteNetworkInterface.png)
    
    -   If the ENI is in the Deleting state, the ENI deletion request is sent and the ENI is being deleted.
    -   If the ENI is not found, the ENI is deleted.
    -   If the ENI is stuck in the Deleting state, the ENI fails to be deleted. You can re-initiate the request to delete the ENI.

For information about examples on how to call the DeleteNetworkInterface operation, see [Delete an ENI](/help/en/ecs/developer-reference/delete-an-eni).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteNetworkInterface)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteNetworkInterface)

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

ecs:DeleteNetworkInterface

delete

\*NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

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

The region ID of the ENI. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

NetworkInterfaceId

string

Yes

The ID of the ENI.

eni-bp14v2sdd3v8htln\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

F3CD6886-D8D0-4FEE-B93E-1B73239673DE

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F3CD6886-D8D0-4FEE-B93E-1B73239673DE"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidOperation.HasSlaveEniBonded

%s

This network card also has a SLAVE network card bound to it.

400

MissingParameter

%s

A parameter is not specified.

400

UnsupportedParameter

%s

The parameter is not supported.

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidInstanceID.Malformed

%s

The specified InstanceId parameter is invalid.

400

InvalidOperation.InvalidEcsState

%s

\-

400

InvalidOperation.InvalidEniState

%s

\-

400

InvalidOperation.DetachPrimaryEniNotAllowed

%s

\-

400

Forbidden.RegionId

%s

The service is unavailable in the current region.

400

InvalidParams.EniId

%s

The specified EniId parameter is invalid.

403

InvalidUserType.NotSupported

%s

Your account does not support this operation.

403

Abs.InvalidAccount.NotFound

%s

Your Alibaba Cloud account does not exist or your AccessKey pair has expired.

403

Forbidden.NotSupportRAM

%s

RAM users are not authorized to perform this operation.

403

Forbidden.SubUser

%s

You are not authorized to manage this resource. Contact the owner of the Alibaba Cloud account for authorization.

403

MaxEniCountExceeded

%s

The maximum number of ENIs that can be managed has been reached.

403

EniPerInstanceLimitExceeded

%s

The maximum number of ENIs that can be attached to the specified instance has been reached.

403

InvalidOperation.AvailabilityZoneMismatch

%s

The operation is invalid.

403

InvalidOperation.VpcMismatch

%s

The operation is invalid. Check whether the VPC in the operation corresponds to other parameters.

403

SecurityGroupInstanceLimitExceed

%s

\-

403

InvalidSecurityGroupId.NotVpc

%s

The specified SecurityGroupId parameter is invalid and the network type of the security group is not VPC.

403

InvalidOperation.InvalidEniType

%s

\-

403

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

403

InvalidOperation.EniServiceManaged

%s

The operation is invalid.

404

InvalidEcsId.NotFound

%s

The specified instance ID does not exist.

404

InvalidVSwitchId.NotFound

%s

The specified vSwitch does not exist.

404

InvalidSecurityGroupId.NotFound

%s

The specified security group ID does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-31

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteNetworkInterface?updateTime=2024-12-31#workbench-doc-change-demo)

2024-09-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteNetworkInterface?updateTime=2024-09-12#workbench-doc-change-demo)
