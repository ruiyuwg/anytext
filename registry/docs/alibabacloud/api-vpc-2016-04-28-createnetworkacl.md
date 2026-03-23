Creates a network ACL.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateNetworkAcl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateNetworkAcl)

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

vpc:CreateNetworkAcl

create

\*NetworkAcl

`acs:vpc:{#regionId}:{#accountId}:networkacl/*`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VpcId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

VpcId

string

Yes

The ID of the virtual private cloud (VPC) to which the network ACL belongs.

If the VPC contains Elastic Compute Service (ECS) instances of the following instance families, you must upgrade the ECS instances or release the ECS instances. Otherwise, you cannot create a network ACL for the VPC.

ecs.c1, ecs.c2, ecs.c4, ecs.c5, ecs.ce4, ecs.cm4, ecs.d1, ecs.e3, ecs.e4, ecs.ga1, ecs.gn4, ecs.gn5, ecs.i1, ecs.m1, ecs.m2, ecs.mn4, ecs.n1, ecs.n2, ecs.n4, ecs.s1, ecs.s2, ecs.s3, ecs.se1, ecs.sn1, ecs.sn2, ecs.t1, and ecs.xn4.

-   For more information about how to upgrade an ECS instance, see [Upgrade subscription instances](/help/en/ecs/user-guide/upgrade-the-instance-types-of-subscription-instances) and [Change the specifications of pay-as-you-go instances](/help/en/ecs/user-guide/change-the-instance-type-of-a-pay-as-you-go-instance).
-   For more information about how to release an ECS instance, see [Release an ECS instance](/help/en/ecs/user-guide/release-an-instance).

**Note** If the VPC contains an ECS instance that does not support network ACLs, upgrade the ECS instance.

vpc-dsfd34356vdf\*\*\*\*

NetworkAclName

string

No

The name of the network ACL.

The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

acl-1

Description

string

No

The description of the network ACL.

The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.

This is my NetworkAcl.

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

Tag

array<object>

No

The tags of the resource.

object

No

Key

string

No

The key of tag N to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

RegionId

string

Yes

The region ID of the network ACL.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

NetworkAclId

string

The ID of the network ACL.

nacl-a2do9e413e0spzasx\*\*\*\*

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

NetworkAclAttribute

object

The attributes of the network ACL.

Status

string

The status of the network ACL. Valid values:

-   **Available**
-   **Modifying**

Modifying

VpcId

string

The ID of the VPC to which the network ACL belongs.

vpc-a2d33rfpl72k5xsscd\*\*\*\*

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

nacl-a2do9e413e0spdefr\*\*\*\*

RegionId

string

The region ID of the network ACL.

cn-hangzhou

IngressAclEntries

array<object>

The inbound rules.

IngressAclEntry

object

NetworkAclEntryId

string

The ID of the inbound rule.

nae-a2dk86arlydmexscd\*\*\*\*

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

Protocol

string

The protocol. Valid values:

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

The outbound rules.

EgressAclEntry

object

NetworkAclEntryId

string

The ID of the outbound rule.

nae-a2d447uw4tillxsdc\*\*\*\*

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

The protocol. Valid values:

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

Port

string

The destination port range of the outbound traffic.

-   If the **protocol** of the outbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which specified all ports.
-   If the **protocol** of the outbound rule is set to **tcp** or **udp**, set the port range in the following format: **1/200** or **80/80**, which specifies port 1 to port 200 or port 80. Valid values for a port: **1** to **65535**.

\-1/-1

Resources

array<object>

The information about the associated resources.

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

The type of resource with which you want to associate the network ACL.

VSwitch

ResourceId

string

The ID of the associated resource.

vsw-bp1de348lntdwgthy\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "NetworkAclId": "nacl-a2do9e413e0spzasx****",
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0",
  "NetworkAclAttribute": {
    "Status": "Modifying",
    "VpcId": "vpc-a2d33rfpl72k5xsscd****",
    "CreationTime": "2021-12-25 11:33:27",
    "Description": "This is my NetworkAcl.",
    "NetworkAclName": "acl-1\t",
    "NetworkAclId": "nacl-a2do9e413e0spdefr****",
    "RegionId": "cn-hangzhou\t",
    "IngressAclEntries": {
      "IngressAclEntry": [
        {
          "NetworkAclEntryId": "nae-a2dk86arlydmexscd****",
          "NetworkAclEntryName": "acl-3\t",
          "Policy": "accept",
          "Description": "This is IngressAclEntries.\t",
          "SourceCidrIp": "10.0.0.0/24\t",
          "Protocol": "all",
          "Port": "-1/-1"
        }
      ]
    },
    "EgressAclEntries": {
      "EgressAclEntry": [
        {
          "NetworkAclEntryId": "nae-a2d447uw4tillxsdc****",
          "NetworkAclEntryName": "acl-2",
          "Policy": "accept",
          "Description": "This is EgressAclEntries.",
          "Protocol": "all",
          "DestinationCidrIp": "10.0.0.0/24",
          "Port": "-1/-1\t"
        }
      ]
    },
    "Resources": {
      "Resource": [
        {
          "Status": "BINDED",
          "ResourceType": "VSwitch",
          "ResourceId": "vsw-bp1de348lntdwgthy****"
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

ParameterMissing.VpcId

ParameterMissing.VpcId

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

ParameterEmpty.VpcId

ParameterEmpty.VpcId

\-

400

InvalidVpcId.NotFound

The vpc is not exist.

\-

400

QuotaExceed.NetworkAcl

Network acl is over limit.

\-

400

NotSupport.NetworkAcl

Network acl is not support now.

\-

400

IllegalParamFormat.%s

The param format of %s is illegal.

The parameter mode is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-11-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateNetworkAcl?updateTime=2023-11-24#workbench-doc-change-demo)

2023-07-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateNetworkAcl?updateTime=2023-07-05#workbench-doc-change-demo)

2023-05-09

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateNetworkAcl?updateTime=2023-05-09#workbench-doc-change-demo)
