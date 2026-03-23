Queries network access control lists (ACLs).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeNetworkAclAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeNetworkAclAttributes)

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

vpc:DescribeNetworkAclAttributes

get

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

NetworkAclId

string

Yes

The ID of the network ACL.

nacl-a2do9e413e0spzasx\*\*\*\*

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

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

F5905F9C-0161-4E72-9CB1-1F3F3CF6268A

NetworkAclAttribute

object

The details of the network ACLs.

Status

string

The association status of the resource. Valid values:

-   **Available**
-   **Modifying**

Available

VpcId

string

The ID of the VPC to which the network ACL belongs.

vpc-a2d33rfpl72k5defr\*\*\*\*

CreationTime

string

The time when the network ACL was created.

2021-12-25 11:33:27

Description

string

The description of the network ACL.

This is my NetworkAcl.

NetworkAclName

string

The name of the network ACL.

acl-1

NetworkAclId

string

The ID of the network ACL.

nacl-a2do9e413e0spnhmj\*\*\*\*

OwnerId

long

The ID of the Alibaba Cloud account to which the network ACL belongs.

253460731706911258

RegionId

string

The region ID of the network ACL.

cn-hangzhou

IngressAclEntries

array<object>

The information about the inbound rules of the network ACL.

IngressAclEntry

object

NetworkAclEntryId

string

The ID of the inbound rule.

nae-a2dk86arlydmevfbg\*\*\*\*

EntryType

string

The type of the inbound rule.

-   **custom**
    
-   **system**
    

custom

NetworkAclEntryName

string

The name of the inbound rule.

acl-3

Policy

string

The action to be performed on network traffic that matches the rule. Valid values:

-   **accept**
-   **drop**

accept

Description

string

The description of the inbound rule.

This is IngressAclEntries.

SourceCidrIp

string

The source CIDR block.

10.0.0.0/24

IpVersion

string

The IP version. Valid values:

-   **IPv4**
-   **IPv6**

IPv4

Protocol

string

The protocol type. Valid values:

-   **icmp**
-   **gre**
-   **tcp**
-   **udp**
-   **all**

all

Port

string

The destination port range of the inbound traffic.

-   If the **protocol** of the inbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which specifies all ports.
-   If the **protocol** of the inbound rule is set to **tcp** or **udp**, set the port range in the following format: **1/200** or **80/80**, which specifies port 1 to port 200 or port 80. Valid ports: **1** to **65535**.

\-1/-1

EgressAclEntries

array<object>

The information about the outbound rules of the network ACL.

EgressAclEntry

object

NetworkAclEntryId

string

The ID of the outbound rule.

nae-a2d447uw4tillxdcv\*\*\*\*

EntryType

string

The type of the inbound rule.

-   **custom**
    
-   **system**
    

custom

NetworkAclEntryName

string

The name of the outbound rule.

acl-2

Policy

string

The action to be performed on network traffic that matches the rule. Valid values:

-   **accept**
-   **drop**

accept

Description

string

The description of the outbound rule.

This is EgressAclEntries.

Protocol

string

The protocol type. Valid values:

-   **icmp**
-   **gre**
-   **tcp**
-   **udp**
-   **all**

all

DestinationCidrIp

string

The destination CIDR block.

10.0.0.0/24

IpVersion

string

The IP version. Valid values:

-   **IPv4**
-   **IPv6**

IPv4

Port

string

The destination port range of the outbound traffic.

-   If the **protocol** of the outbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which specified all ports.
-   If the **protocol** of the outbound rule is set to **tcp** or **udp**, set the port range in the following format: **1/200** or **80/80**, which specifies port 1 to port 200 or port 80. Valid values for a port: **1** to **65535**.

\-1/-1

Resources

array<object>

The resources that are associated with the network ACL.

Resource

object

Status

string

The association status of the resource. Valid values:

-   **BINDED**
-   **BINDING**
-   **UNBINDING**

BINDED

ResourceType

string

The type of resource with which you want to associate the network ACL. The value is set to **VSwitch**.

VSwitch

ResourceId

string

The ID of the associated resource.

vsw-bp1de348lntdwxscd\*\*\*\*

Tags

array<object>

The information about the tags.

Tag

object

Key

string

The key of tag N added to the resource.

FinanceDept

Value

string

The value of tag N added to the resource.

FinanceJoshua

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F5905F9C-0161-4E72-9CB1-1F3F3CF6268A",
  "NetworkAclAttribute": {
    "Status": "Available",
    "VpcId": "vpc-a2d33rfpl72k5defr****",
    "CreationTime": "2021-12-25 11:33:27",
    "Description": "This is my NetworkAcl.",
    "NetworkAclName": "acl-1",
    "NetworkAclId": "nacl-a2do9e413e0spnhmj****",
    "OwnerId": 253460731706911260,
    "RegionId": "cn-hangzhou",
    "IngressAclEntries": {
      "IngressAclEntry": [
        {
          "NetworkAclEntryId": "nae-a2dk86arlydmevfbg****",
          "EntryType": "custom",
          "NetworkAclEntryName": "acl-3",
          "Policy": "accept",
          "Description": "This is IngressAclEntries.",
          "SourceCidrIp": "10.0.0.0/24",
          "IpVersion": "IPv4",
          "Protocol": "all",
          "Port": "-1/-1"
        }
      ]
    },
    "EgressAclEntries": {
      "EgressAclEntry": [
        {
          "NetworkAclEntryId": "nae-a2d447uw4tillxdcv****",
          "EntryType": "custom",
          "NetworkAclEntryName": "acl-2",
          "Policy": "accept",
          "Description": "This is EgressAclEntries.",
          "Protocol": "all",
          "DestinationCidrIp": "10.0.0.0/24",
          "IpVersion": "IPv4",
          "Port": "-1/-1"
        }
      ]
    },
    "Resources": {
      "Resource": [
        {
          "Status": "BINDED",
          "ResourceType": "VSwitch",
          "ResourceId": "vsw-bp1de348lntdwxscd****"
        }
      ]
    },
    "Tags": {
      "Tag": [
        {
          "Key": "FinanceDept",
          "Value": "FinanceJoshua"
        }
      ]
    }
  }
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

InvalidNetworkAcl.NotFound

The special Network Acl is not found.

The network ACL is not found.

400

NotSupport.NetworkAcl

Network acl is not support now.

\-

500

InternalError

The request processing has failed due to some unknown error.

An unknown error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-24

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeNetworkAclAttributes?updateTime=2023-11-24#workbench-doc-change-demo)
