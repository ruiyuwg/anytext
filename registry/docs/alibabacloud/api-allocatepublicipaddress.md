Assigns a static public IP address (also called system-assigned public IP address or auto-assigned public IP address) to an Elastic Compute Service (ECS) instance.

## Operation description

### [](#precautions)[](#)Precautions

-   The ECS instance to which you want to assign a static public IP address must be in the **Running** (`Running`) or **Stopped** (`Stopped`) state.
-   If `OperationLocks` in the response of the DescribeInstances operation contains `"LockReason" : "security"` for an ECS instance, the instance is [locked for security reasons](/help/en/ecs/developer-reference/api-behavior-when-an-instance-is-locked-for-security-reasons) and cannot be assigned a static public IP address.
-   When you call the AllocatePublicIpAddress operation for an ECS instance, make sure that the public bandwidth of the instance is greater than 0 Mbit/s. You can call the [ModifyInstanceNetworkSpec](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancenetworkspec) operation to change the public bandwidth.

### [](#considerations)[](#)Considerations

-   Only users in the whitelist can specify `IpAddress` in the AllocatePublicIpAddress operation. If the public bandwidth of your ECS instance is greater than 0 Mbit/s, you can specify the ID of the instance (`InstanceId`) to randomly assign a static public IP address to the instance. If the public bandwidth of your ECS instance is 0 Mbit/s, you must call the [ModifyInstanceNetworkSpec](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancenetworkspec) operation to increase the public bandwidth of the instance before you call the AllocatePublicIpAddress operation.
-   You can assign only one static public IP address to an ECS instance. If the instance already has a static public IP address, the static public IP address is returned for the `IpAddress` response parameter.
-   After you assign a static public IP address to an ECS instance, you must restart the instance ( [RebootInstance](/help/en/ecs/api-rebootinstance) ) or start the instance ( [StartInstance](/help/en/ecs/api-startinstance) ) for the public IP address to take effect.

If an ECS instance resides in a virtual private cloud (VPC), you can assign a static public IP address to the instance or associate an elastic IP address (EIP) with the instance. For more information, see [AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AllocatePublicIpAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AllocatePublicIpAddress)

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

ecs:AllocatePublicIpAddress

create

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

The ID of the instance to which you want to assign a public IP address.

i-bp1gtjxuuvwj17zr\*\*\*\*

IpAddress

string

No

The static public IP address that you want to assign to the instance. This parameter is empty by default, which indicates that a static public IP address is randomly assigned by the system.

**Note** Only users in the whitelist can specify this parameter.

112.124.\*\*.\*\*

VlanId

string

No

The virtual LAN (VLAN) ID of the instance.

**Note** This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.

720

## Response parameters

Parameter

Type

Description

Example

object

IpAddress

string

The public IP address.

112.124.\*\*.\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "IpAddress": "112.124.**.**",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidOperation.AllocateFailed

The current instance failed to allocate public IP, please try again later.

\-

400

InvalidIpAddress.Malformed

The specified parameter "IpAddress" is not valid.

\-

400

OperationDenied

Specified operation is denied as your instance is in VPC.

The operation is not supported while the instance resides in a VPC.

400

InsufficientPublicIp

Ip address not found.

\-

400

AllocateIpInvalidInstanceBandwidth

OperationDenied The InternetMaxBandwidthOut of the specified instance cannot be less than 0.

The operation is not supported while the maximum outbound public bandwidth is not greater than 0 Mbit/s.

400

OperationDenied

The specified parameter "VlanId" is not valid or vlan has not enough IP address.

\-

400

OperationDenied

The specified instance already has a public IP.

\-

400

OperationDenied.CloudboxNotSupport

This operation is denied, because the specified ECS instance which is in the Cloudbox dose not support PublicIp or Eip.

\-

400

OperationDenied.DedicatedRegionNotSupported

This operation is denied, because the specified ECS instance which is in the dedicated region dose not support PublicIp or Eip.

error of api not supported by the exclusive cloud

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceLockedForSecurity

The specified operation is denied as your instance is locked for security reasons.

\-

403

InstanceExpiredOrInArrears

The specified operation is denied as your prepay instance is expired (prepay mode) or in arrears (afterpay mode).

The subscription instance has expired. You must renew the instance before you can proceed.

403

IpInUse

The specified IP is already in use.

\-

403

AllocatedAlready

There is an IpAddress allocated already for the specified instance.

The instance to which you attempt to assign an IP address is already assigned another IP address.

403

AllocateIp.Fail

The specified instance fails to allocate ip, please try again.

\-

403

NAT\_PUBLIC\_IP\_BINDING\_FAILED

Binding nat public ip failed.

\-

403

NAT\_PUBLIC\_IP\_ALLOCATE\_FAILED

Nat public ip binding failed.

The public IP address cannot be associated.

403

InvalidIpAddress.NotPublic

The specified IP is not public address.

\-

403

AllocatedAlready

An IpAddress has been assigned to the specified instance.

\-

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidVlanId.NotFound

The VlanId provided does not exist in our records.

The specified VLAN ID does not exist.

404

InvalidIpAddress.NotFound

The specified IP is not in the specified vlan.

The specified IP address is not in the specified VLAN.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AllocatePublicIpAddress?updateTime=2026-01-28#workbench-doc-change-demo)

2024-12-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AllocatePublicIpAddress?updateTime=2024-12-20#workbench-doc-change-demo)

2023-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AllocatePublicIpAddress?updateTime=2023-10-10#workbench-doc-change-demo)
