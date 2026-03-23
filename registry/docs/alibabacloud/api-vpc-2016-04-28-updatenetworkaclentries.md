Updates the rules of a network access control list (ACL).

## Operation description

-   **UpdateNetworkAclEntries** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeNetworkAclAttributes](/help/en/vpc/api-describenetworkaclattributes) operation to query the status of a network ACL:
    
    -   If the network ACL is in the **Modifying** state, the rules of the network ACL are being updated.
    -   If the network ACL is in the **Available** state, the rules of the network ACL are updated.
-   You cannot repeatedly call the **UpdateNetworkAclEntries** operation to update the rules of a network ACL within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/UpdateNetworkAclEntries)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/UpdateNetworkAclEntries)

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

vpc:UpdateNetworkAclEntries

update

\*NetworkAcl

`acs:vpc:{#regionId}:{#accountId}:networkacl/{#NetworkAclId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

IngressAclEntries

array<object>

No

The information about the inbound rules.

object

No

The information about the inbound rules.

NetworkAclEntryId

string

No

The ID of the inbound rule.

Valid values of **N**: **0** to **99**. You can specify at most 100 inbound rule IDs.

nae-2zepn32de59j8m4\*\*\*\*

EntryType

string

No

The rule type. Set the value to **custom**.

custom

NetworkAclEntryName

string

No

The name of the inbound rule.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

acl-3

Policy

string

No

The access control policy. Valid values:

-   **accept**: allows network traffic.
-   **drop**

accept

SourceCidrIp

string

No

The source CIDR block. Alternatively, a prefix list ID can be provided.

10.0.0.0/24 pl-xxxxxx

IpVersion

string

No

The IP version:

-   **IPv4**
-   **IPv6**

IPv4

Description

string

No

The description of the inbound rule.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

This is IngressAclEntries.

Protocol

string

No

Protocol type. Valid values:

-   **icmp**
-   **gre**
-   **tcp**
-   **udp**
-   **all**
-   **icmpv6**

all

Port

string

No

The source port range of the inbound rule.

-   If **Protocol** is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which indicates all ports are available.
-   If **Protocol** is set to **tcp** or **udp**, valid port numbers are **1** to **65535**. Format: **1/200** (port 1 to 200) or **80/80** (port 80).

\-1/-1

EgressAclEntries

array<object>

No

The information about the outbound rules.

object

No

The information about the outbound rules.

NetworkAclEntryId

string

No

The ID of the outbound rule.

Valid values of **N**: **0** to **99**. You can specify at most 100 outbound rule IDs.

nae-2zecs97e0brcge46\*\*\*\*

EntryType

string

No

The rule type. Set the value to **custom**.

custom

NetworkAclEntryName

string

No

The name of the outbound rule.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

acl-2

Policy

string

No

The access control policy. Valid values:

-   **accept**
-   **drop**

accept

Description

string

No

The description of the outbound rule.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

This is EgressAclEntries.

Protocol

string

No

The protocol type. Valid values:

-   **icmp**
-   **gre**
-   **tcp**
-   **udp**
-   **all**
-   **icmpv6**

all

DestinationCidrIp

string

No

The destination CIDR block. Alternatively, a prefix list ID can be provided.

10.0.0.0/24 pl-xxxxxx

IpVersion

string

No

The IP version:

-   **IPv4**
-   **IPv6**

IPv4

Port

string

No

The destination port range of the outbound traffic.

-   If **Protocol** is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which indicates all ports are available.
-   If **Protocol** is set to **tcp** or **udp**, valid port numbers are **1** to **65535**. Format: **1/200** (port 1 to 200) or **80/80** (port 80).

\-1/-1

UpdateIngressAclEntries

boolean

No

Specifies whether to update inbound rules. Valid values:

-   **true**
-   **false** (default)

**Note** This parameter cannot be used to add inbound rules to ACLs. If you want to add more inbound rules to ACLs, you must specify both the existing rule and the rule that you want to add when you call this API operation. If you specify only the rule that you want to add, it overwrites the existing rule.

false

UpdateEgressAclEntries

boolean

No

Specifies whether to update outbound rules. Valid values:

-   **true**
-   **false** (default)

**Note** This parameter cannot be used to add outbound rules to ACLs. If you want to add more outbound rules to ACLs, specify both the existing rule and the rule that you want to add when you call this API operation. If you specify only the rule that you want to add, it overwrites the existing rule.

false

NetworkAclId

string

Yes

The ID of the network ACL.

nacl-bp1lhl0taikrzxsc\*\*\*\*

RegionId

string

Yes

The region ID of the network ACL.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs a dry run. The system checks the request for potential issues, including the AccessKey pair, the permissions of the RAM user, and the required parameters. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

1170A5A0-E760-4331-9133-A7D38D973215

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1170A5A0-E760-4331-9133-A7D38D973215"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ParameterMissing.AliUid

ParameterMissing.AliUid

\-

400

ParameterMissing.Bid

ParameterMissing.Bid

\-

400

ParameterMissing.RegionId

ParameterMissing.RegionId

\-

400

ParameterEmpty.RegionId

ParameterEmpty.RegionId

\-

400

ParameterMissing.NetworkAclId

ParameterMissing.NetworkAclId

\-

400

ParameterEmpty.NetworkAclId

ParameterEmpty.NetworkAclId

\-

400

ParameterMissing.Port

ParameterMissing.Port

\-

400

ParameterIllegal.Port

ParameterIllegal.Port

\-

400

ParameterIllegal.Policy

ParameterIllegal.Policy

\-

400

ParameterMissing.Policy

ParameterMissing.Policy

\-

400

ParameterIllegal.Protocol

ParameterIllegal.Protocol

\-

400

ParameterMissing.Protocol

ParameterMissing.Protocol

\-

400

ParameterLengthIllegal.Name

ParameterLengthIllegal.Name

The length of the rule name is invalid.

400

ParameterIllegal.Name

ParameterIllegal.Name

The name of the entry is invalid.

400

ParameterLengthIllegal.Description

ParameterLengthIllegal.Description

\-

400

ParameterIllegal.Description

ParameterIllegal.Description

\-

400

ParameterIllegal.SourceCidrIp

ParameterIllegal.SourceCidrIp

\-

400

ParameterMissing.SourceCidrIp

ParameterMissing.SourceCidrIp

\-

400

ParameterIllegal.DestinationCidrIp

ParameterIllegal.DestinationCidrIp

\-

400

ParameterMissing.DestinationCidrIp

ParameterMissing.DestinationCidrIp

\-

400

QuotaExceed.NetworkAclEntry

Network acl entry is over limit.

The number of rules in the network ACL has reached the upper limit

400

InvalidNetworkAcl.NotFound

The special Network Acl is not found.

The network ACL is not found.

400

NetworkStatus.Modifying

The special Network Acl is in modifying.

The network ACL is being modified.

400

ResourceStatus.Error

The binding instance is in middle status.

The status of the instance is invalid.

400

NotSupport.NetworkAcl

Network acl is not support now.

\-

400

IllegalParam.IngressAclEntryId

The specified IngressAclEntryId is invalid.

The specified IngressAclEntryId is invalid.

400

IllegalParam.EgressAclEntryId

The specified EgressAclEntryId is invalid.

The specified EgressAclEntryId is invalid.

400

OperationDenied.VpcIpv6NotEnabled

IPv6 has not been enabled for the VPC.

The error message returned because the VPC does not support IPv6 and the operation is denied.

400

IllegalParam.SourceCidrIp

Param SourceCidrIp is illegal.

Illegal parameters: Source CIDR

400

IllegalParam.Policy

Param Policy illegal.

Illegal parameter: Policy

400

IllegalParam.Protocol

Param Protocol illegal.

Illegal parameter: Protocol.

400

IllegalParam.DestinationCidrIp

Param DestinationCidrIp illegal.

Illegal parameter: destination CIDR.

400

IllegalParam.IpVersion

Param IpVersion illegal.

Illegal parameter: IpVersion

400

IllegalParam.PortRange

The specified port range is invalid.

The port range is invalid.

400

ResourceNotFound.PrefixList

The specified resource of prefixList is not found.

The prefix list does not exist.

400

OperationDenied.IpVersionInconsistencyWithPrefixList

The ip version of the prefix list %s you passed in is inconsistent with the actual ip version of the prefix list.

the ip version of the prefix list you passed in is inconsistent with the actual ip version of the prefix list.

400

OperationDenied.SystemPrefixList

The operation is not allowed because of SystemPrefixList.

You cannot manage the system prefix list.

400

IncorrectStatus.PrefixList

The status of prefixList is incorrect.

The prefix list is in an unstable state.

400

UnsupportedRegion.PrefixListEntry

The feature of prefixList entry is not supported in this region.

\-

400

OperationDenied.NetworkAclAttachmentInMiddleStatus

The network ACL is being bound to or unbound from the switch.

The network ACL is being bound to or unbound from the switch.

500

InternalError

The request processing has failed due to some unknown error.

An unknown error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateNetworkAclEntries?updateTime=2025-12-08#workbench-doc-change-demo)

2025-12-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateNetworkAclEntries?updateTime=2025-12-01#workbench-doc-change-demo)

2025-10-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateNetworkAclEntries?updateTime=2025-10-27#workbench-doc-change-demo)

2024-10-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateNetworkAclEntries?updateTime=2024-10-25#workbench-doc-change-demo)

2024-03-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateNetworkAclEntries?updateTime=2024-03-26#workbench-doc-change-demo)

2023-11-24

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UpdateNetworkAclEntries?updateTime=2023-11-24#workbench-doc-change-demo)
