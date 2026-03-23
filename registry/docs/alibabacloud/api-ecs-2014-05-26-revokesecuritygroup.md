Deletes inbound security group rules from a specific security group.

## Operation description

**Note** Alibaba Cloud modified verification rules for the RevokeSecurityGroup operation on July 8, 2024. When you call the RevokeSecurityGroup operation to delete a security group rule that does not exist, the "InvalidParam.SecurityGroupRuleId" error code is returned instead of a success response. Update the RevokeSecurityGroup operation to use the new verification rules with the new error code based on your business requirements.

You can use one of the following groups of parameters to specify the security group rules that you want to delete:

-   Parameters used to specify the IDs of security group rules. We recommend that you specify the IDs of security group rules to delete the rules.
    
    -   If a specified security group rule ID does not exist, the call to RevokeSecurityGroup fails.
-   Parameters that start with Permissions.
    
    -   If no security group rule matches the specified parameters, the call to RevokeSecurityGroup is successful but no security group rules are deleted.
        
    -   Define an inbound security group rule by configuring the following parameters together:
        
        -   Source: You can specify one parameter from SourceCidrIp (IPv4 address), Ipv6SourceCidrIp (IPv6 address), SourcetPrefixListId (prefix list ID), and SourceGroupId (source security group ID).
        -   PortRange: specifies the destination port range.
        -   IpProtocol: specifies the protocol.
        -   Policy: specifies the action.

**Note** You cannot specify the IDs of security group rules and the parameters that start with Permissions in the same request.

### [](#sample-requests)[](#)Sample requests

-   Delete a security group rule based on the rule ID:

```
"SecurityGroupId":"sg-bp67acfmxazb4p****", //Specify the ID of the security group.
"SecurityGroupRuleId":["sgr-bpdfmk****","sgr-bpdfmg****"] //Specify the ID of the security group rule.
```

-   Delete a security group rule based on an IPv4 CIDR block:

```
"SecurityGroupId":"sg-bp67acfmxazb4p****",
"Permissions":[
  {
    "SourceCidrIp":"10.0.0.0/8", //Specify the source IPv4 CIDR block.
    "IpProtocol":"TCP", //Specify the protocol.
    "PortRange":"80/80", //Specify the destination port range.
    "Policy":"accept" //Specify the action.
  }
]
```

-   Delete a security group rule in which a security group is referenced:

```
"SecurityGroupId":"sg-bp67acfmxazb4p****",
"Permissions":[
  {
    "SourceGroupId":"sg-bp67acfmxa123b****", //Specify the ID of the source security group.
    "IpProtocol":"TCP,"
    "PortRange":"80/80",
    "Policy":"accept"
  ]
}
```

-   Delete a security group rule in which a prefix list is referenced:

```
"SecurityGroupId":"sg-bp67acfmxazb4p****",
"Permissions":[
  {
    "SourcePrefixListId":pl-x1j1k5ykzqlixdcy****", //Specify the ID of the source prefix list.
    "IpProtocol":"TCP",
    "PortRange":"80/80",
    "Policy":"accept"
  }
]
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/RevokeSecurityGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/RevokeSecurityGroup)

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

ecs:RevokeSecurityGroup

delete

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

-   ecs:tag

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

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

SecurityGroupId

string

Yes

The ID of the security group.

sg-bp67acfmxazb4p\*\*\*\*

SecurityGroupRuleId

array

No

The security group rule IDs. You can specify 1 to 100 security group rule IDs in a request.

string

No

Security group rule N.

**Note** This parameter is required if you delete a security group rule based on the ID of the security group rule.

sgr-bp67acfmxa123b\*\*\*

Permissions

array<object>

No

The security group rules. You can specify up to 100 security group rules.

object

No

Security group rule N.

Policy

string

No

The action of the security group rule. Valid values:

-   accept: allows inbound access.
-   drop: denies inbound access and returns no responses. In this case, the request times out or the connection cannot be established.

Default value: accept.

accept

Priority

string

No

The priority of the security group rule. A smaller value specifies a higher priority. Valid values: 1 to 100.

Default value: 1.

1

IpProtocol

string

No

The protocol. The values of this parameter are case-insensitive. Valid values:

-   TCP.
-   UDP.
-   ICMP.
-   ICMPv6.
-   GRE.
-   ALL: All protocols are supported.

TCP

SourceCidrIp

string

No

The source IPv4 CIDR block of the security group rule. IPv4 CIDR blocks and IPv4 addresses are supported.

10.0.0.0/8

Ipv6SourceCidrIp

string

No

The source IPv6 CIDR block of the security group rule. IPv6 CIDR blocks and IPv6 addresses are supported.

**Note** This parameter is valid only for Elastic Compute Service (ECS) instances that reside in virtual private clouds (VPCs) and support IPv6 CIDR blocks. You cannot specify both this parameter and `SourceCidrIp` in the same request.

2001:db8:1234:1a00::\*\*\*

SourceGroupId

string

No

The ID of the source security group referenced in the security group rule.

-   You must specify at least one of the following parameters: `SourceGroupId`, `SourceCidrIp`, `Ipv6SourceCidrIp`, and `SourcePrefixListId`.
-   If you specify `SourceGroupId` but do not specify `SourceCidrIp` or `Ipv6SourceCidrIp`, you must set NicType to intranet.
-   If you specify both `SourceGroupId` and `SourceCidrIp`, `SourceCidrIp` takes precedence.

Take note of the following items:

-   Advanced security groups do not support security group rules that reference security groups as authorization objects (sources or destinations of traffic).
-   Each basic security group can contain up to 20 security group rules that reference security groups as authorization objects.

sg-bp67acfmxa123b\*\*\*\*

SourcePrefixListId

string

No

The ID of the source prefix list of the security group rule. You can call the [DescribePrefixLists](/help/en/ecs/api-describeprefixlists) operation to query the IDs of available prefix lists.

Take note of the following items:

-   If a security group resides in the classic network, you cannot specify prefix lists in the rules of the security group. For information about the limits on security groups and prefix lists, see the [Security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) section of the "Limits and quotas on ECS" topic.
-   If you specify `SourceCidrIp`, `Ipv6SourceCidrIp`, or `SourceGroupId`, this parameter is ignored.

pl-x1j1k5ykzqlixdcy\*\*\*\*

PortRange

string

No

The destination port range of the security group rule. Valid values:

-   If you set IpProtocol to TCP or UDP, the valid values of this parameter are 1 to 65535. Specify a port range in the format of <Start port number>/<End port number>. Example: 1/200.
-   If you set IpProtocol to ICMP, the port range is -1/-1.
-   If you set IpProtocol to GRE, the port range is -1/-1.
-   If you set IpProtocol to ALL, the port range is -1/-1.

1/200

DestCidrIp

string

No

The destination IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.

This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](/help/en/ecs/use-cases/security-group-quintuple-rules).

10.0.0.0/8

Ipv6DestCidrIp

string

No

The destination IPv6 CIDR block. IPv6 CIDR blocks and IPv6 addresses are supported.

This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](/help/en/ecs/use-cases/security-group-quintuple-rules).

**Note** This parameter is valid only for ECS instances that reside in VPCs and support IPv6 CIDR blocks. You cannot specify both this parameter and `DestCidrIp` in the same request.

2001:db8:1233:1a00::\*\*\*

SourcePortRange

string

No

The source port range of the security group rule. Valid values:

-   If you set IpProtocol to TCP or UDP, the valid values of this parameter are 1 to 65535. Specify a port range in the format of <Start port number>/<End port number>. Example: 1/200.
-   If you set IpProtocol to ICMP, the port range is -1/-1.
-   If you set IpProtocol to GRE, the port range is -1/-1.
-   If you set IpProtocol to ALL, the port range is -1/-1.

This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](/help/en/ecs/use-cases/security-group-quintuple-rules).

80/80

SourceGroupOwnerAccount

string

No

The Alibaba Cloud account that manages the source security group referenced in the security group rule.

-   If both `SourceGroupOwnerAccount` and `SourceGroupOwnerId` are empty, access control on another security group in your Alibaba Cloud account is removed.
-   If you specify `SourceCidrIp`, `SourceGroupOwnerAccount` is ignored.

Test@aliyun.com

SourceGroupOwnerId

long

No

The ID of the Alibaba Cloud account that manages the source security group referenced in the security group rule.

-   If both `SourceGroupOwnerId` and `SourceGroupOwnerAccount` are empty, access control on another security group in your Alibaba Cloud account is removed.
-   If you specify `SourceCidrIp`, `SourceGroupOwnerId` is ignored.

12345678910

NicType

string

No

The network interface controller (NIC) type of the security group rule if the security group resides in the classic network. Valid values:

-   internet: public NIC.
-   intranet: internal NIC.

If the security group resides in a VPC, this parameter is set to intranet by default and cannot be modified.

If you specify `SourceGroupId` to delete inbound security group rules that reference the specified security group as an authorization object, you must set this parameter to intranet.

Default value: internet.

intranet

Description

string

No

The description of the security group rule. The description must be 1 to 512 characters in length.

This is description.

PortRangeListId

string

No

The ID of the port list. You can call the `DescribePortRangeLists` operation to query the IDs of available port lists.

-   If you specify `Permissions.N.PortRange`, this parameter is ignored.
-   If a security group resides in the classic network, you cannot reference port lists in the rules of the security group. For information about the limits on security groups and port lists, see the [Security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) section of the "Limits and quotas on ECS" topic.

prl-2ze9743\*\*\*\*

Policy`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.Policy` to specify whether to allow inbound access.

accept

Priority`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.Priority` to specify the rule priority.

1

IpProtocol`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.IpProtocol` to specify the protocol.

ALL

SourceCidrIp`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.SourceCidrIp` to specify the source IPv4 CIDR block.

10.0.0.0/8

Ipv6SourceCidrIp`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.Ipv6SourceCidrIp` to specify the source IPv6 CIDR block.

2001:db8:1234:1a00::\*\*\*

SourceGroupId`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.SourceGroupId` to specify the ID of the source security group.

sg-bp67acfmxa123b\*\*\*\*

SourcePrefixListId`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.SourcePrefixListId` to specify the ID of the source prefix list.

pl-x1j1k5ykzqlixdcy\*\*\*\*

PortRange`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.PortRange` to specify the range of destination ports.

1/200

DestCidrIp`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.DestCidrIp` to specify the destination IPv4 CIDR block.

10.0.0.0/8

Ipv6DestCidrIp`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.Ipv6DestCidrIp` to specify the destination IPv6 CIDR block.

2001:db8:1233:1a00::\*\*\*

SourcePortRange`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.SourcePortRange` to specify the range of source ports.

80/80

SourceGroupOwnerAccount`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.SourceGroupOwnerAccount` to specify the Alibaba Cloud account that manages the source security group.

Test@aliyun.com

SourceGroupOwnerId`deprecated`

long

No

This parameter is deprecated. Use `Permissions.N.SourceGroupOwnerId` to specify the ID of the Alibaba Cloud account that manages the source security group.

12345678910

NicType`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.NicType` to specify the network interface type.

intranet

Description`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.Description` to specify the rule description.

This is description.

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidSecurityGroupId.Malformed

The specified parameter SecurityGroupId is not valid.

The specified SecurityGroupId parameter is invalid.

400

InvalidIpProtocol.ValueNotSupported

The parameter IpProtocol must be specified with case insensitive TCP, UDP, ICMP, GRE or All.

The specified IpProtocol parameter is invalid. The valid values of this parameter are tcp, udp, icmp, gre, and all.

400

InvalidIpPortRange.Malformed

The specified parameter PortRange is not valid.

\-

400

InvalidSourceCidrIp.Malformed

The specified parameter SourceCidrIp is not valid.

The specified source CIDR block is invalid.

400

MissingParameter

The input parameter SourceGroupId or SourceCidrIp cannot be both blank.

At least one of the SourceGroupId and SourceCidrIp parameters must be specified.

400

InvalidPolicy.Malformed

The specified parameter %s is not valid.

The specified Policy parameter is invalid.

400

InvalidNicType.ValueNotSupported

The specified parameter %s is not valid.

The specified NicType parameter is invalid.

400

InvalidSourceGroupId.Mismatch

Specified security group and source group are not in the same VPC.

The specified source and destination security groups do not belong to the same VPC.

400

MissingParameter.Source

One of the parameters SourceCidrIp, Ipv6SourceCidrIp, SourceGroupId or SourcePrefixListId in %s must be specified.

At least one of the SourceCidrIp, SourceGroupId, and SourcePrefixListId parameters must be specified.

400

InvalidParam.PortRange

The specified parameter %s is not valid. It should be two integers less than 65535 in ?/? format.

The format of the port range is invalid. Specify the port range in the format of a slash separating two integers.

400

InvalidIpProtocol.ValueNotSupported

The parameter %s must be specified with case insensitive TCP, UDP, ICMP, GRE or All.

The specified Protocol parameter is invalid. You must set Protocol to a vaule that is case-insensitive, such as TCP, UDP, ICMP, GRE, and All.

400

InvalidPriority.Malformed

The parameter Priority is invalid.

The specified Priority parameter is invalid.

400

InvalidPriority.ValueNotSupported

The specified parameter %s is invalid.

The specified Priority parameter is invalid.

400

InvalidPriority.ValueNotSupported

The parameter Priority is invalid.

The specified Priority parameter is invalid.

400

InvalidParamter.Conflict

The specified SecurityGroupId should be different from the SourceGroupId.

The destination security group is the same as the source security group.

400

InvalidDestCidrIp.Malformed

The specified parameter DestCidrIp is not valid.

The specified DestCidrIp parameter is invalid.

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

InvalidGroupAuthParameter.OperationDenied

The security group can not authorize to enterprise level security group.

Security groups cannot be referenced as authorization objects (destinations or sources) in rules of advanced security groups.

400

InvalidPortRange.Malformed

The specified parameter PortRange must set.

The PortRange parameter must be specified.

400

InvalidSourcePortRange.Malformed

The specified parameter SourcePortRange is not valid.

The specified SourcePortRange parameter is invalid.

400

InvalidSecurityGroupDiscription.Malformed

The specified security group rule description is not valid.

The specified security group rule description is invalid.

400

NotSupported.ClassicNetworkPrefixList

The prefix list is not supported when the network type of security group is classic.

Security groups in the classic network do not support prefix lists.

400

InvalidParam.SourceCidrIp

The specified parameter %s is not valid.

The specified SourceCidrIp parameter is invalid.

400

InvalidParam.SourceCidrIp

The specified param SourceCidrIp is not valid.

The specified SourceCidrIp parameter is invalid.

400

InvalidParam.DestCidrIp

The specified parameter %s is not valid.

The specified DestCidrIp parameter is invalid.

400

InvalidParam.DestCidrIp

The specified parameter DestCidrIp is invalid.

The specified DestCidrIp parameter is invalid.

400

InvalidParam.Permissions

The specified parameter Permissions cannot coexist with other parameters.

The specified Permissions parameter and other parameters are mutually exclusive.

400

InvalidParam.DuplicatePermissions

There are duplicate permissions in the specified parameter Permissions.

The specified Permissions parameter contains duplicate permissions.

400

InvalidSecurityGroupId.NotFound

The specified parameter SecurityGroupId is not valid.

The specified security group does not exist in this account. Check whether the security group ID is correct.

400

InvalidParam.SecurityGroupRuleId

The specified parameter SecurityGroupRuleId is not valid.

The specified SecurityGroupRuleId parameter is invalid.

400

InvalidParam.SecurityGroupRuleIdRepeated

The specified parameter SecurityGroupRuleId is repeated.

The SecurityGroupRuleId parameter has duplicate values.

400

InvalidGroupParameter.OperationDenied

The attributes Policy, SourceGroupId, DestGroupId of enterprise level security groups are not allowed to be set or modified.

The attributes Policy, SourceGroupId, DestGroupId of enterprise level security groups are not allowed to be set or modified.

400

InvalidSecurityGroupRule.RuleNotExist

The specified rule does not exist.

The specified security group rule does not exist.

400

InvalidParam.ProtocolNotSupportPortRangeList

The specified protocol does not support the port range list.

The specified protocol does not support the port list.

400

InvalidPortRangeListId.NotFound

The specified port range list was not found.

The specified port list was not found.

401

InvalidOperation.SecurityGroupNotAuthorized

The specified security group is not authorized to operate.

You do not have permission to operate the current security group.

403

InvalidNicType.Mismatch

The specified NicType conflicts with the authorization record.

The specified NIC type does not match the existing rule.

403

InvalidGroupAuthItem.NotFound

Specified group authorized item does not exist in our records.

The security group referenced as the authorization object in the security group rule does not exist.

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

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2025-04-01#workbench-doc-change-demo)

2024-12-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2024-12-04#workbench-doc-change-demo)

2024-06-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2024-06-20#workbench-doc-change-demo)

2023-11-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2023-11-21#workbench-doc-change-demo)

2023-04-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2023-04-07#workbench-doc-change-demo)

2022-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2022-09-05#workbench-doc-change-demo)

2022-07-13

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2022-07-13#workbench-doc-change-demo)

2022-05-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/RevokeSecurityGroup?updateTime=2022-05-07#workbench-doc-change-demo)
