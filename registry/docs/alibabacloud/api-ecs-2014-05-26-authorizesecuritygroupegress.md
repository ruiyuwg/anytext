Creates outbound rules in a security group. You can use the created rules to allow or deny outbound traffic from Elastic Compute Service (ECS) instances in the security group to other objects for fine-grained network access control.

## Operation description

### [](#precautions)[](#)Precautions

-   **Quantity limit**: The maximum number of inbound and outbound rules in all security groups associated with an elastic network interface (ENI) cannot exceed 1,000. For more information, see the [Security group limits](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) section of the "Limits" topic.
-   **Rule priorities**: For outbound security group rules, the valid values of Priority range from 1 to 100. A smaller value indicates a higher priority. When multiple security group rules have the same priority, drop rules take precedence.

### [](#considerations)[](#)Considerations

If the security group rule that you call the AuthorizeSecurityGroupEgress operation to create exists in the security group, the call is successful but no security group rule is created.

### [](#parameters-that-define-a-security-group-rule)[](#)Parameters that define a security group rule

Define an outbound security group rule by configuring the following parameters together:

-   One of the following parameters: DestCidrIp, Ipv6DestCidrIp, DestPrefixListId, and DestGroupId. DestCidrIp specifies the destination IPv4 CIDR block. Ipv6DestCidrIp specifies the destination IPv6 CIDR block. DestPrefixListId specifies the ID of the destination prefix list. DestGroupId specifies the destination security group.
-   PortRange: specifies the range of destination port numbers.
-   IpProtocol: specifies the protocol.
-   Policy: specifies the action.

**Note** Advanced security groups do not support security group rules that reference security groups as authorization objects. Each basic security group can contain up to 20 security group rules that reference security groups as authorization objects.

### [](#sample-requests)[](#)Sample requests

Sample requests to create outbound security group rules that control access to different destinations in a security group in the China (Hangzhou) region:

-   Sample request to create an outbound security group rule that controls access to a specified CIDR block:
    
    ```
    "RegionId":"cn-hangzhou", // The region ID.
    "SecurityGroupId":"sg-bp17vs63txqxbds9***", // The ID of the source security group.
    "Permissions":[
         {
           "DestCidrIp":"10.0.0.0/8", // The destination IPv4 CIDR block.
           "PortRange":"-1/-1", // The range of destination port numbers.
           "IpProtocol":"ICMP", //T he protocol.       "Policy":"Accept" // Specify the action.
         }
    ]
    ```
    
-   Sample request to create an outbound security group rule that controls access to a security group and an outbound security group rule that controls access to a prefix list:
    
    ```
    "RegionId":"cn-hangzhou",
    "SecurityGroupId":"sg-bp17vs63txqxbds9***",
    "Permissions":[
         {
           "DestGroupId":"sg-bp67acfmxazb4pi***", // The ID of the destination security group.
           "PortRange":"22/22",
           "IpProtocol":"TCP",
           "Policy":"Drop"
         },{
          "DestPrefixListId":"pl-x1j1k5ykzqlixdcy****", // The destination prefix list.
           "PortRange":"22/22",
           "IpProtocol":"TCP",
           "Policy":"Drop"
         }
    ]
    ```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AuthorizeSecurityGroupEgress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AuthorizeSecurityGroupEgress)

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

ecs:AuthorizeSecurityGroupEgress

create

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

The region ID of the source security group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

SecurityGroupId

string

Yes

The security group ID.

sg-bp67acfmxazb4p\*\*\*\*

Permissions

array<object>

No

An array of security group rules. You can specify 1 to 100 security group rules.

object

No

Security group rule N.

Policy

string

No

The action of the security group rule. Valid values:

-   accept: allows outbound access.
-   drop: denies outbound access and returns no responses. In this case, the request times out or the connection cannot be established.

Default value: accept.

accept

Priority

string

No

The priority of security group rule N. A smaller value specifies a higher priority. Valid values: 1 to 100.

Default value: 1.

1

IpProtocol

string

No

Network Layer /transport layer protocol. Two types of assignments are supported:

1.  The case-insensitive protocol name. Valid value:

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

ALL

DestCidrIp

string

No

The destination IPv4 CIDR block of the security group rule. IPv4 CIDR blocks and IPv4 addresses are supported.

10.0.0.0/8

Ipv6DestCidrIp

string

No

The destination IPv6 CIDR block of the security group rule. IPv6 CIDR blocks and IPv6 addresses are supported.

**Note** This parameter is valid only for VPC-type ECS instances that support IPv6. This parameter and the `DestCidrIp` parameter cannot be set at the same time.

2001:db8:1233:1a00::\*\*\*

DestGroupId

string

No

The ID of the destination security group that is specified in the security group rule.

-   You must specify at least one of the following parameters: `DestGroupId`, `DestCidrIp`, `Ipv6DestCidrIp`, and `DestPrefixListId`.
-   If you specify `DestGroupId` but do not specify `DestCidrIp`, you must set `NicType` to intranet.
-   If you specify both `DestGroupId` and `DestCidrIp`, `DestCidrIp` takes precedence.

sg-bp67acfmxazb4p\*\*\*\*

DestPrefixListId

string

No

The ID of the destination prefix list. You can call the [DescribePrefixLists](/help/en/ecs/api-describeprefixlists) operation to query the IDs of available prefix lists.

Notes:

-   If a security group resides in the classic network, you cannot specify prefix lists in the rules of the security group. For information about the limits on security groups and prefix lists, see the [Security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1) section of the "Limits and quotas on ECS" topic.
-   If you specify `DestCidrIp`, `Ipv6DestCidrIp`, or `DestGroupId`, this parameter is ignored.

pl-x1j1k5ykzqlixdcy\*\*\*\*

PortRange

string

No

The destination port range of the security group rule. Valid values:

-   TCP/UDP: Valid values: 1 to 65535. Use a forward slash (/) to separate the start and end ports. Example: 1/200.
-   ICMP:-1/-1.
-   GRE:-1/-1.
-   ALL:-1/-1.

80/80

SourceCidrIp

string

No

The source IPv4 CIDR block of the security group rule. IPv4 CIDR blocks and IPv4 addresses are supported.

This property is used to support quintuple rules. For more information, see [Security group quintuple rules](/help/en/ecs/use-cases/security-group-quintuple-rules).

10.0.0.0/8

Ipv6SourceCidrIp

string

No

The source IPv6 CIDR block of the security group rule. or IPv6 address.

This property is used to support quintuple rules. For more information, see [Security group quintuple rules](/help/en/ecs/use-cases/security-group-quintuple-rules).

**Note** This parameter is valid only for ECS instances that reside in virtual private clouds (VPCs) and support IPv6 CIDR blocks. You cannot specify this parameter and `DestCidrIp` in the same request.

2001:db8:1234:1a00::\*\*\*

SourcePortRange

string

No

The source port range of the security group rule. Valid values:

-   TCP/UDP protocol: 1 to 65535. Use a forward slash (/) to separate the start and end ports. Example: 1/200.
-   ICMP protocol:-1/-1.
-   GRE protocol:-1/-1.
-   ALL:-1/-1.

This property is used to support quintuple rules. For more information, see [Security group quintuple rules](/help/en/ecs/use-cases/security-group-quintuple-rules).

80/80

DestGroupOwnerAccount

string

No

The Alibaba Cloud account that manages the destination security group.

-   If both `DestGroupOwnerAccount` and `DestGroupOwnerId` are empty, the rule is created to control access to another security group in your Alibaba Cloud account.
-   If `DestCidrIp` is configured, `DestGroupOwnerAccount` is ignored.

Test@aliyun.com

DestGroupOwnerId

long

No

The ID of the Alibaba Cloud account that manages the destination security group.

-   If both `DestGroupOwnerId` and `DestGroupOwnerAccount` are empty, the rule is created to control access to another security group in your Alibaba Cloud account.
-   If you specify `DestCidrIp`, `DestGroupOwnerId` is ignored.

12345678910

NicType

string

No

The network interface controller (NIC) type of the security group rule if the security group resides in the classic network. Valid values:

-   internet: public NIC.
    
-   intranet: internal NIC.
    
    -   If the security group resides in a VPC, this parameter is set to intranet by default and cannot be changed.
    -   If you specify only DestGroupId to create a rule that controls access to the specified security group, you must set this parameter to intranet.

Default value: internet.

intranet

Description

string

No

The description of the security group rule. The description can be up to 1 to 512 characters in length.

This is description.

PortRangeListId

string

No

The ID of the port list. You can call the `DescribePortRangeLists` operation to query the IDs of available prefix lists.

-   If you specify `Permissions.N.PortRange`, this parameter is ignored.
-   If a security group resides in the classic network, you cannot reference port lists in the rules of the security group. For more information about limits on security groups and ports, see [Limits on security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1).

prl-2ze9743\*\*\*\*

Policy`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.Policy` to specify whether to allow outbound access.

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

DestGroupId`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.DestGroupId` to specify the ID of the destination security group.

sg-bp67acfmxazb4p\*\*\*\*

DestPrefixListId`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.DestPrefixListId` to specify the ID of the destination prefix list.

pl-x1j1k5ykzqlixdcy\*\*\*\*

PortRange`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.PortRange` to specify the range of destination ports.

80/80

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

SourcePortRange`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.SourcePortRange` to specify the range of source ports.

80/80

DestGroupOwnerAccount`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.DestGroupOwnerAccount` to specify the Alibaba Cloud account that manages the destination security group.

Test@aliyun.com

DestGroupOwnerId`deprecated`

long

No

This parameter is deprecated. Use `Permissions.N.DestGroupOwnerId` to specify the ID of the Alibaba Cloud account that manages the destination security group.

12345678910

NicType`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.NicType` to specify the NIC type.

intranet

Description`deprecated`

string

No

This parameter is deprecated. Use `Permissions.N.Description` to specify the description of security group rule N.

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

OperationDenied

The specified IpProtocol does not exist or IpProtocol and PortRange do not match.

The specified IP protocol does not exist or does not match the specified port range.

400

InvalidIpProtocol.Malformed

The specified parameter PortRange is not valid.

The specified IpProtocol or PortRange parameter is invalid.

400

InvalidDestCidrIp.Malformed

The specified parameter DestCidrIp is not valid.

The specified DestCidrIp parameter is invalid.

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

InvalidDestGroupId.Mismatch

Specified security group and destination group are not in the same VPC.

The specified source and destination security groups do not belong to the same VPC.

400

InvalidDestGroup.NotFound

Specified destination security group does not exist.

The specified DestGroupId parameter does not exist.

400

InvalidPriority.Malformed

The parameter Priority is invalid.

The specified Priority parameter is invalid.

400

InvalidPriority.ValueNotSupported

The specified parameter %s is invalid.

The specified Priority parameter is invalid.

400

InvalidDestCidrIp.Malformed

The parameter DestCidrIp is not valid.

The specified DestCidrIp parameter is invalid.

400

InvalidNicType.ValueNotSupported

The specified parameter %s is not valid.

The specified NicType parameter is invalid.

400

InvalidPolicy.Malformed

The specified parameter %s is not valid.

The specified Policy parameter is invalid.

400

InvalidSecurityGroupDiscription.Malformed

The specified security group rule description parameter %s is not valid.

The specified security group rule description is invalid.

400

InvalidSecurityGroup.InvalidNetworkType

The specified security group network type is not support this operation, please check the security group network types. For VPC security groups, ClassicLink must be enabled.

The operation is not supported while the security group is of the current network type. If the network type is VPC, ClassicLink must be enabled.

400

MissingParameter.Dest

One of the parameters DestCidrIp, Ipv6DestCidrIp, DestGroupId or DestPrefixListId in %s must be specified.

Specify at least one of the DestCidrIp, Ipv6DestCidrIp, DestGroupId, and DestPrefixListId parameters.

400

InvalidParam.PortRange

The specified parameter %s is not valid. It should be two integers less than 65535 in ?/? format.

The format of the port range is invalid. Specify the port range in the format of a slash separating two integers.

400

InvalidIpProtocol.ValueNotSupported

The parameter %s must be specified with case insensitive TCP, UDP, ICMP, GRE or All.

The specified Protocol parameter is invalid. You must set Protocol to a vaule that is case-insensitive, such as TCP, UDP, ICMP, GRE, and All.

400

InvalidSecurityGroupId.Malformed

The specified parameter SecurityGroupId is not valid.

The specified SecurityGroupId parameter is invalid.

400

InvalidParamter.Conflict

The specified SourceCidrIp should be different from the DestCidrIp.

The value of SourceCidrIp must be different from that of DestCidrIp.

400

InvalidSourcePortRange.Malformed

The specified parameter SourcePortRange is not valid.

The specified SourcePortRange parameter is invalid.

400

InvalidPortRange.Malformed

The specified parameter PortRange must set.

The PortRange parameter must be specified.

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

InvalidParameter.Conflict

IPv6 and IPv4 addresses cannot exist at the same time.

IPv6 and IPv4 addresses cannot be both specified.

400

InvalidParam.PrefixListAddressFamilyMismatch

The address family of the specified prefix list does not match the specified CidrIp.

The address family of the specified prefix list does not match that of the specified CIDR block.

400

NotSupported.ClassicNetworkPrefixList

The prefix list is not supported when the network type of security group is classic.

Security groups in the classic network do not support prefix lists.

400

AuthorizedGroupRule.LimitExceed

You have reached the limit on the number of group authorization rules that you can add to a security group.When authorization object of rule is security group, the limit is 20.

Up to 20 rules in which security groups are specified as authorization objects can be present in a basic security group.

400

InvalidParam.DestCidrIp

The specified parameter %s is not valid.

The specified DestCidrIp parameter is invalid.

400

InvalidParam.DestCidrIp

The specified parameter DestCidrIp is invalid.

The specified DestCidrIp parameter is invalid.

400

InvalidParam.SourceCidrIp

The specified param SourceCidrIp is not valid.

The specified SourceCidrIp parameter is invalid.

400

InvalidParam.SourceCidrIp

The specified parameter %s is not valid.

The specified SourceCidrIp parameter is invalid.

400

InvalidParam.Permissions

The specified parameter Permissions cannot coexist with other parameters.

The specified Permissions parameter and other parameters are mutually exclusive.

400

InvalidParam.DuplicatePermissions

There are duplicate permissions in the specified parameter Permissions.

The specified Permissions parameter contains duplicate permissions.

400

InvalidGroupParameter.OperationDenied

The attributes Policy, SourceGroupId, DestGroupId of enterprise level security groups are not allowed to be set or modified.

The attributes Policy, SourceGroupId, DestGroupId of enterprise level security groups are not allowed to be set or modified.

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

InvalidDestGroupId.Mismatch

NicType is required or NicType expects intranet.

The NicType parameter is not specified or is not set to intranet.

403

MissingParameter

The input parameter DestGroupId or DestCidrIp cannot be both blank.

The DestGroupId and DestCidrIp parameters are required.

403

AuthorizationLimitExceed

The limit of authorization records in the security group reaches.

The security group has reached the maximum number of rules that can be added to it.

403

InvalidParamter.Conflict

The specified SecurityGroupId should be different from the SourceGroupId.

The destination security group is the same as the source security group.

403

InvalidNetworkType.Conflict

The specified SecurityGroup network type should be same with SourceGroup network type (vpc or classic).

The network type of the destination security group is different from that of the source security group.

403

InvalidSecurityGroup.IsSame

The authorized SecurityGroupId should be different from the DestGroupId.

The ID of the source security group is the same as that of the destination security group.

403

InvalidNetworkType.Conflict

The parameter SecurityGroup network type should be same with SourceGroup network type (vpc or classic).

The network type of the specified security group is different from that of the source security group.

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

403

LimitExceed.PrefixListAssociationResource

The number of resources associated with the prefix list exceeds the limit.

The maximum number of resources that can be associated with the prefix list has been exceeded.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

404

InvalidDestGroupId.NotFound

The DestGroupId provided does not exist in our records.

\-

404

InvalidPrefixListId.NotFound

The specified prefix list was not found.

The prefix list does not exist.

404

InvalidSecurityGroupId.NotFound

%s

The specified security group ID does not exist.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AuthorizeSecurityGroupEgress?updateTime=2025-04-01#workbench-doc-change-demo)

2024-12-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AuthorizeSecurityGroupEgress?updateTime=2024-12-04#workbench-doc-change-demo)

2023-11-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AuthorizeSecurityGroupEgress?updateTime=2023-11-21#workbench-doc-change-demo)

2023-04-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AuthorizeSecurityGroupEgress?updateTime=2023-04-07#workbench-doc-change-demo)

2022-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AuthorizeSecurityGroupEgress?updateTime=2022-09-05#workbench-doc-change-demo)

2022-07-13

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AuthorizeSecurityGroupEgress?updateTime=2022-07-13#workbench-doc-change-demo)

2022-03-30

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AuthorizeSecurityGroupEgress?updateTime=2022-03-30#workbench-doc-change-demo)
