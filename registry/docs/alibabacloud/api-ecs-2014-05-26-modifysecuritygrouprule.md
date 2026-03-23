Modifies an inbound security group rule in a security group.

## Operation description

Take note of the following items:

-   An authorization object in a security group rule can be of one of the following types: IPv4 CIDR block or address, IPv6 CIDR block or address, security group, or prefix list. You cannot call this operation to change the type of an existing authorization object. For example, if an authorization object is an IPv4 CIDR block, you can change the authorization object to a different IPv4 CIDR block or an IPv4 address, but you cannot change the authorization object to an IPv6 CIDR block or address, a security group, or a prefix list.
-   You cannot delete the value of a non-empty parameter. If you want to delete the values of non-empty parameters, we recommend that you create a security group rule and delete the original security group rule.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySecurityGroupRule)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySecurityGroupRule)

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

ecs:ModifySecurityGroupRule

update

\*All Resources

`*`

-   ecs:SecurityGroupIpProtocols
-   ecs:SecurityGroupSourceCidrIps

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

The region ID of the security group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

SecurityGroupId

string

Yes

The security group ID.

sg-bp67acfmxazb4p\*\*\*\*

SecurityGroupRuleId

string

No

The ID of the security group rule. You can call the [DescribeSecurityGroupAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesecuritygroupattribute) operation to query the IDs of security group rules in a security group.

sgr-bp67acfmxa123b\*\*\*

Policy

string

No

The action of the security group rule. Valid values:

-   accept: allows access.
-   drop: denies access and returns no responses.

Default value: accept.

accept

Priority

string

No

The priority of the security group rule. Valid values: 1 to 100.

Default value: 1.

1

IpProtocol

string

No

Network Layer /transport layer protocol. Two types of assignments are supported:

1.  The case-insensitive protocol name. Valid values:

-   ICMP
-   GRE
-   TCP
-   UDP
-   ALL: supports all protocols.

2.  The value of the IANA-compliant protocol number, which is an integer from 0 to 255. List of regions currently available:

-   Philippines (Manila)
-   UK (London)
-   Malaysia (Kuala Lumpur)
-   China (Hohhot)
-   China (Qingdao)
-   US (Silicon Valley)
-   Singapore

all

SourceCidrIp

string

No

The source IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.

By default, this parameter is left empty.

10.0.0.0/8

Ipv6SourceCidrIp

string

No

The source IPv6 CIDR block. IPv6 CIDR blocks and IPv6 addresses are supported.

**Note** Only the IP addresses of instances in virtual private clouds (VPCs) are supported. You cannot specify both Ipv6SourceCidrIp and `SourceCidrIp`.

By default, this parameter is left empty.

2001:db8:1233:1a00::\*\*\*

SourceGroupId

string

No

The source security group ID. You must specify either `SourceGroupId` or `SourceCidrIp` or specify both of them.

-   If `SourceGroupId` is specified but `SourceCidrIp` is not specified, the value of `NicType` must be set to intranet.
-   If both `SourceGroupId` and `SourceCidrIp` are specified, the value of `SourceCidrIp` prevails by default.

sg-bp67acfmxa123b\*\*\*\*

SourcePrefixListId

string

No

The ID of the source prefix list to which you want to control access. You can call the [DescribePrefixLists](/help/en/ecs/api-describeprefixlists) operation to query the IDs of available prefix lists.

If you specify `SourceCidrIp`, `Ipv6SourceCidrIp`, or `SourceGroupId`, this parameter is ignored.

pl-x1j1k5ykzqlixdcy\*\*\*\*

PortRange

string

No

The range of destination ports that correspond to the transport layer protocol. Valid values:

-   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
-   If you set IpProtocol to ICMP, the port number range is -1/-1.
-   If you set IpProtocol to GRE, the port number range is -1/-1.
-   If you set IpProtocol to ALL, the port number range is -1/-1.

80/80

DestCidrIp

string

No

The destination IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.

By default, this parameter is left empty.

10.0.0.0/8

Ipv6DestCidrIp

string

No

The destination IPv6 CIDR block. IPv6 CIDR blocks and IPv6 addresses are supported.

**Note** Only the IP addresses of instances in VPCs are supported. You cannot specify both Ipv6DestCidrIp and `DestCidrIp`.

By default, this parameter is left empty.

2001:db8:1234:1a00::\*\*\*

SourcePortRange

string

No

The range of source ports that correspond to the transport layer protocol. Valid values:

-   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
-   If you set IpProtocol to ICMP, the port number range is -1/-1.
-   If you set IpProtocol to GRE, the port number range is -1/-1.
-   If you set IpProtocol to ALL, the port number range is -1/-1.

80/80

SourceGroupOwnerAccount

string

No

The Alibaba Cloud account that manages the source security group when you configure a security group rule across accounts.

-   If both `SourceGroupOwnerId` and `SourceGroupOwnerAccount` are empty, access permissions are configured for another security group managed by your account.
-   If `SourceCidrIp` is specified, `SourceGroupOwnerAccount` is ignored.

EcsforCloud@Alibaba.com

SourceGroupOwnerId

long

No

The ID of the Alibaba Cloud account that manages the source security group when you configure a security group rule across accounts.

-   If both `SourceGroupOwnerId` and `SourceGroupOwnerAccount` are empty, access permissions are configured for another security group managed by your account.
-   If `SourceCidrIp` is specified, `SourceGroupOwnerId` is ignored.

12345678910

NicType

string

No

The type of the network interface controller (NIC).

**Note** You cannot modify this parameter when you modify a security group rule by specifying the ID of the rule. If you want to change the NIC type of a security group rule, you can create a security group rule of a desired NIC type and delete the existing rule.

intranet

Description

string

No

The description of the security group rule. The description must be 1 to 512 characters in length.

This is a new security group rule.

PortRangeListId

string

No

The ID of the port list. You can call the `DescribePortRangeLists` operation to query the IDs of available port lists.

-   If you specify PortRange, this parameter is ignored.
-   If a security group is in the classic network, you cannot configure port lists in the rules of the security group. For information about the limits on security groups and port lists, see [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1).

prl-2ze9743\*\*\*\*

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

OperationDenied

The specified IpProtocol does not exist or IpProtocol and PortRange do not match.

The specified IP protocol does not exist or does not match the specified port range.

400

InvalidIpProtocol.Malformed

The specified parameter PortRange is not valid.

The specified IpProtocol or PortRange parameter is invalid.

400

InvalidSourceCidrIp.Malformed

The specified parameter SourceCidrIp is not valid.

The specified source CIDR block is invalid.

400

InvalidPolicy.Malformed

The specified parameter Policy is not valid.

The specified Policy parameter is invalid.

400

InvalidNicType.ValueNotSupported

The specified NicType does not exist.

The specified NicType parameter does not exist.

400

InvalidNicType.Mismatch

The specified NicType conflicts with the authorization record.

The specified NIC type does not match the existing rule.

400

InvalidSourceGroupId.Mismatch

Specified security group and source group are not in the same VPC.

The specified source and destination security groups do not belong to the same VPC.

400

InvalidSourceGroup.NotFound

Specified source security group does not exist.

The specified inbound security group rule does not exist, or required parameters are not specified.

400

InvalidPriority.Malformed

The parameter Priority is invalid.

The specified Priority parameter is invalid.

400

InvalidPriority.ValueNotSupported

The parameter Priority is invalid.

The specified Priority parameter is invalid.

400

InvalidSecurityGroupDiscription.Malformed

The specified security group rule description is not valid.

The specified security group rule description is invalid.

400

MissingParameter.Source

One of the parameters SourceCidrIp, SourceGroupId or SourcePrefixListId must be specified.

The source of the security group rule must be specified. Specify any of the SourceCidrIp, SourceGroupId, or SourcePrefixListId parameters.

400

InvalidParam.PortRange

The specified parameter %s is not valid. It should be two integers less than 65535 in ?/? format.

The format of the port range is invalid. Specify the port range in the format of a slash separating two integers.

400

InvalidIpProtocol.ValueNotSupported

The parameter IpProtocol must be specified with case insensitive TCP, UDP, ICMP, GRE or All.

The specified IpProtocol parameter is invalid. The valid values of this parameter are tcp, udp, icmp, gre, and all.

400

InvalidParam.SourceIp

The Parameters SourceCidrIp and Ipv6SourceCidrIp in %s cannot be set at the same time.

The SourceCidrIp and Ipv6SourceCidrIp parameters cannot be specified at the same time.

400

InvalidParam.DestIp

The Parameters DestCidrIp and Ipv6DestCidrIp in %s cannot be set at the same time.

The DestCidrIp and Ipv6DestCidrIp parameters cannot be specified at the same time.

400

InvalidParam.Ipv6DestCidrIp

The specified parameter %s is not valid.

The specified Ipv6DestCidrIp parameter is invalid.

400

InvalidParam.Ipv6SourceCidrIp

The specified parameter %s is not valid.

The specified Ipv6SourceCidrIp parameter is invalid.

400

InvalidParam.Ipv4ProtocolConflictWithIpv6Address

IPv6 address cannot be specified for IPv4-specific protocol.

IPv6 addresses cannot be specified for instances that use the IPv4 protocol.

400

InvalidParam.Ipv6ProtocolConflictWithIpv4Address

IPv4 address cannot be specified for IPv6-specific protocol.

IPv4 addresses cannot be specified for instances that use the IPv6 protocol.

400

InvalidParameter.Ipv6CidrIp

The specified Ipv6CidrIp is not valid.

The specified Ipv6CidrIp parameter is invalid.

400

InvalidParam.DestCidrIp

The specified parameter %s is not valid.

The specified DestCidrIp parameter is invalid.

400

InvalidSourcePortRange.Malformed

The specified parameter SourcePortRange is not valid.

The specified SourcePortRange parameter is invalid.

400

InvalidSecurityGroupId.Malformed

The specified parameter SecurityGroupId is not valid.

The specified SecurityGroupId parameter is invalid.

400

InvalidParam.SourceCidrIp

The specified param SourceCidrIp is not valid.

The specified SourceCidrIp parameter is invalid.

400

InvalidParam.DestCidrIp

The specified param DestCidrIp is not valid.

The specified DestCidrIp parameter is invalid.

400

InvalidParameter.Conflict

IPv6 and IPv4 addresses cannot exist at the same time.

IPv6 and IPv4 addresses cannot be both specified.

400

InvalidParam.SecurityGroupRuleId

The specified parameter SecurityGroupRuleId is not valid.

The specified SecurityGroupRuleId parameter is invalid.

400

InvalidOperation.ModifySgRuleEntityType

The source or destination type of the rules cannot be modified.

The type of the source or destination in the rule cannot be modified.

400

AuthorizationLimitExceed

The limit of authorization records in the security group reaches.

The security group has reached the maximum number of rules that can be added to it.

400

InvalidParam.ProtocolAndPortRangeMismatch

The specified Protocol and PortRange do not match.

The protocol and the port range do not match.

400

InvalidParam.ProtocolAndAddressFamilyMismatch

The specified Protocol and address family do not match.

The protocol and the address family do not match.

400

InvalidParam.PrefixListAddressFamilyMismatch

The address family of the prefix list does not match the rule.

The address family of the prefix list and the rule do not match.

400

InvalidParam.InvalidModifyRuleRequest

The request parameters are illegal.

The request parameter is invalid.

400

InvalidOperation.ModifyNicType

NicType is not allowed to modify.

The NicType parameter cannot be modified.

400

InvalidParamter.Conflict

The specified SourceCidrIp should be different from the DestCidrIp.

The value of SourceCidrIp must be different from that of DestCidrIp.

400

InvalidIpProtocol.ValueNotSupported

The parameter %s must be specified with case insensitive TCP, UDP, ICMP, GRE or All.

The specified Protocol parameter is invalid. You must set Protocol to a vaule that is case-insensitive, such as TCP, UDP, ICMP, GRE, and All.

400

InvalidOperation.RuleDuplicate

%s.

The rule being modified will be duplicated with an existing rule.

400

InvalidParam.ProtocolNotSupportPortRangeList

The specified protocol does not support the port range list.

The specified protocol does not support the port list.

400

InvalidSourceOrDestGroupId.DirectionMissmatch

The specified SourceGroupId or DestGroupId does not match the direction of the rule.

The specified SourceGroupId or DestGroupId does not match the direction of the security group rule.

400

InvalidOperation.ModifyPortRangeType

The PortRange type is not allowed to be modified. You cannot modify a rule from using the port list to not using it, and vice versa.

The port range type of a security group rule cannot be modified. You cannot change a rule from using the port list to not using, and vice versa.

400

InvalidPortRangeListId.NotFound

The specified port range list was not found.

The specified port list was not found.

403

InvalidSourceGroupId.Mismatch

NicType is required or NicType expects intrnet.

The NicType parameter is not specified or is not set to intranet.

403

MissingParameter

The input parameter SourceGroupId or SourceCidrIp cannot be both blank.

At least one of the SourceGroupId and SourceCidrIp parameters must be specified.

403

InvalidParamter.Conflict

The specified SecurityGroupId should be different from the SourceGroupId.

The destination security group is the same as the source security group.

403

InvalidNetworkType.Mismatch

The specified SecurityGroup network type should be same with SourceGroup network type (vpc or classic).

The network type of the destination security group is different from that of the source security group.

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

404

InvalidSourceGroupId.NotFound

The SourceGroupId provided does not exist in our records.

The specified SourceGroupId parameter does not exist.

404

SecurityGroupRule.NotFound

The target security group rule not exist.

\-

404

InvalidPrefixListId.NotFound

The specified prefix list was not found.

The prefix list does not exist.

404

InvalidSecurityGroupRuleId.NotFound

The specified SecurityGroupRuleId is not exists.

The specified SecurityGroupRuleId parameter does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-01

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupRule?updateTime=2025-04-01#workbench-doc-change-demo)

2024-06-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupRule?updateTime=2024-06-27#workbench-doc-change-demo)

2023-08-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupRule?updateTime=2023-08-23#workbench-doc-change-demo)

2023-04-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupRule?updateTime=2023-04-07#workbench-doc-change-demo)

2022-09-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupRule?updateTime=2022-09-05#workbench-doc-change-demo)

2022-05-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupRule?updateTime=2022-05-07#workbench-doc-change-demo)
