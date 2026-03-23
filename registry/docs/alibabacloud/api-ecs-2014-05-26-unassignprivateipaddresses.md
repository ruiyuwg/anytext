Unassigns secondary private IP addresses from an elastic network interface (ENI).

## Operation description

## [](#usage-notes)[](#)Usage notes

-   The ENI from which to unassign secondary private IP addresses must be in the **Available** (Available) or **InUse** (InUse) state.
-   If the ENI is a primary ENI, the Elastic Compute Service (ECS) instance to which the ENI is attached must be in the **Running** (Running) or **Stopped** (Stopped) state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/UnassignPrivateIpAddresses)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/UnassignPrivateIpAddresses)

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

ecs:UnassignPrivateIpAddresses

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

eni-bp67acfmxazb4ph\*\*\*\*

PrivateIpAddress

array

No

The secondary private IP addresses to unassign.

string

No

Secondary private IP address N to unassign. Valid values of N: 1 to 32.

192.168.\*\*.\*\*

Ipv4Prefix

array

No

The IPv4 prefixes to unassign.

string

No

IPv4 prefix N to unassign. Valid values of N: 1 to 10.

192.168.\*\*.\*\*/28

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

MissingParameter

%s

A parameter is not specified.

400

Forbidden.RegionId

%s

The service is unavailable in the current region.

400

InvalidAction

%s

The operation is invalid.

400

InvalidEniId.Malformed

The specified parameter "EniId" is not valid.

\-

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

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

InvalidVSwitchId.IpInvalid

%s

The specified private IP address is invalid.

403

InvalidIp.IpUnassigned

%s

The specified IP address is not assigned.

403

Operation.Conflict

%s

This operation conflicts with another operation in progress. Try again later.

403

InvalidOperation.EniServiceManaged

%s

The operation is invalid.

403

InvalidPrivateIpAddress.Malformed

%s

\-

403

InvalidIp.IpPrefixMaskInvalid

The ip prefixes mask %s is illegal which must be between %s and %s.

The IP address prefix mask is invalid and is not within the valid range.

403

InvalidIp.IpPrefixMaskNotSame

The ip prefixes %s are illegal which mask must be same.

The IP address prefix masks are not the same.

403

InvalidIp.IpPrefixNotStrict

The ip prefix must be strict cidr format.

The IP address prefix is invalid and is not in the CIDR format.

403

InvalidIp.IpPrefixIllegal

The ip prefixes %s is/are illegal.

The IP address prefix is invalid and is not in the CIDR format.

403

MissingParameter

These parameters %s cannot be both empty.

At least one of the multiple parameters must be filled in (cannot be all empty).

404

InvalidEcsId.NotFound

%s

The specified instance ID does not exist.

404

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

404

InvalidVSwitchId.NotFound

%s

The specified vSwitch does not exist.

404

InvalidSecurityGroupId.NotFound

%s

The specified security group ID does not exist.

404

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

500

InvalidOperation.RegionNotSupportIpPrefix

The current region does not support ip prefix.

You cannot assign IP address prefixes in this region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/UnassignPrivateIpAddresses?updateTime=2024-12-17#workbench-doc-change-demo)
