Queries the details of a specified security group and the security group rules of the security group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSecurityGroupAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSecurityGroupAttribute)

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

ecs:DescribeSecurityGroupAttribute

get

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

SecurityGroupId

string

Yes

The ID of the security group.

sg-bp1gxw6bznjjvhu3\*\*\*\*

RegionId

string

Yes

The region ID of the security group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

NicType

string

No

The network interface controller (NIC) type of the security group rule.

-   Valid values for rules of security groups in the classic network:
    
    -   internet (default)
    -   intranet
    
    \*\*
    
    **Note** You can query security group rules of only one NIC type in a single call. To query security group rules of both NIC types, call the operation twice.
    
-   When the security group is in a virtual private cloud (VPC), set the value to intranet, which is the default value for rules of security groups in VPCs.
    
    \*\*
    
    **Note** If you set this parameter to internet or leave this parameter empty, a value of intranet is automatically used.
    

intranet

Direction

string

No

The direction in which the security group rule is applied. Valid values:

-   egress: outbound
-   ingress: inbound
-   all: outbound and inbound

Default value: all.

all

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page.

-   Minimum value: 10.
-   Maximum value: 1000.

Default value: 500.

500

Attribute

string

No

The attributes of the security group. Valid value:

-   snapshotPolicyIds: queries information about snapshot policies associated with a security group.

snapshotPolicyIds

## Response parameters

Parameter

Type

Description

Example

object

VpcId

string

The ID of the VPC. If a VPC ID is returned, the network type of the security group is VPC. If no VPC ID is returned, the network type of the security group is classic network.

vpc-bp1opxu1zkhn00gzv\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

InnerAccessPolicy

string

The access control policy of the security group. Valid values:

-   Accept: All instances in the security group can communicate with each other.
-   Drop: All instances in the security group are isolated from each other.

Accept

Description

string

The description of the security group.

This is description.

SecurityGroupId

string

The ID of the security group.

sg-bp1gxw6bznjjvhu3\*\*\*\*

SecurityGroupName

string

The name of the security group.

SecurityGroupName Sample

RegionId

string

The ID of the region.

cn-hangzhou

Permissions

array<object>

Details about the security group rules.

Permission

object

SecurityGroupRuleId

string

The ID of the security group rule.

sgr-bp12kewq32dfwrdi\*\*\*\*

Direction

string

The direction in which the security group rule is applied.

ingress

SourceGroupId

string

The source security group for inbound access control.

sg-bp12kc4rqohaf2js\*\*\*\*

DestGroupOwnerAccount

string

The ID of the Alibaba Cloud account to which the destination security group belongs.

1234567890

DestPrefixListId

string

The ID of the destination prefix list for outbound access control.

pl-x1j1k5ykzqlixabc\*\*\*\*

DestPrefixListName

string

The name of the destination prefix list.

DestPrefixListName Sample

SourceCidrIp

string

The source CIDR block for inbound access control.

0.0.0.0/0

Ipv6DestCidrIp

string

The destination IPv6 CIDR block.

2001:db8:1233:1a00::\*\*\*

CreateTime

string

The time when the security group rule was created. The time is displayed in UTC.

2018-12-12T07:28:38Z

Ipv6SourceCidrIp

string

The source IPv6 CIDR block.

2001:db8:1234:1a00::\*\*\*

DestGroupId

string

The ID of the destination security group for outbound access control.

sg-bp1czdx84jd88i7v\*\*\*\*

DestCidrIp

string

The destination CIDR block for outbound access control.

0.0.0.0/0

IpProtocol

string

The transport layer protocol.

TCP

Priority

string

The priority of the rule.

1

DestGroupName

string

The name of the destination security group.

testDestGroupName

NicType

string

The network type.

intranet

Policy

string

The access control policy.

Accept

Description

string

The description of the security group.

Description Sample 01

PortRange

string

The port range.

80/80

SourcePrefixListName

string

The name of the source prefix list.

SourcePrefixListName Sample

SourcePrefixListId

string

The ID of the source prefix list for inbound access control.

pl-x1j1k5ykzqlixdcy\*\*\*\*

SourceGroupOwnerAccount

string

The ID of the Alibaba Cloud account to which the source security group belongs.

1234567890

SourceGroupName

string

The name of the source security group.

testSourceGroupName1

SourcePortRange

string

The source port range.

80/80

PortRangeListId

string

The ID of the port list.

prl-2ze9743\*\*\*\*

PortRangeListName

string

The name of the port list.

PortRangeListNameSample

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If the return value of this parameter is empty when you specify `MaxResults` and `NextToken` for a paged query, no more results are to be returned.

AAAAAdDWBF2\*\*\*\*

SnapshotPolicyIds

array

The IDs of the snapshot policies associated with the security group.

SnapshotPolicyId

string

The ID of the snapshot policy associated with the security group.

sgsp-mj74\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "VpcId": "vpc-bp1opxu1zkhn00gzv****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "InnerAccessPolicy": "Accept",
  "Description": "This is description.",
  "SecurityGroupId": "sg-bp1gxw6bznjjvhu3****",
  "SecurityGroupName": "SecurityGroupName Sample",
  "RegionId": "cn-hangzhou",
  "Permissions": {
    "Permission": [
      {
        "SecurityGroupRuleId": "sgr-bp12kewq32dfwrdi****",
        "Direction": "ingress",
        "SourceGroupId": "sg-bp12kc4rqohaf2js****",
        "DestGroupOwnerAccount": 1234567890,
        "DestPrefixListId": "pl-x1j1k5ykzqlixabc****",
        "DestPrefixListName": "DestPrefixListName Sample",
        "SourceCidrIp": "0.0.0.0/0",
        "Ipv6DestCidrIp": "2001:db8:1233:1a00::***",
        "CreateTime": "2018-12-12T07:28:38Z",
        "Ipv6SourceCidrIp": "2001:db8:1234:1a00::***",
        "DestGroupId": "sg-bp1czdx84jd88i7v****",
        "DestCidrIp": "0.0.0.0/0",
        "IpProtocol": "TCP",
        "Priority": 1,
        "DestGroupName": "testDestGroupName",
        "NicType": "intranet",
        "Policy": "Accept",
        "Description": "Description Sample 01",
        "PortRange": "80/80",
        "SourcePrefixListName": "SourcePrefixListName Sample",
        "SourcePrefixListId": "pl-x1j1k5ykzqlixdcy****",
        "SourceGroupOwnerAccount": 1234567890,
        "SourceGroupName": "testSourceGroupName1",
        "SourcePortRange": "80/80",
        "PortRangeListId": "prl-2ze9743****",
        "PortRangeListName": "PortRangeListNameSample"
      }
    ]
  },
  "NextToken": "AAAAAdDWBF2****",
  "SnapshotPolicyIds": {
    "SnapshotPolicyId": [
      "sgsp-mj74****"
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidNicType.ValueNotSupported

The specified NicType does not exist.

The specified NicType parameter does not exist.

400

InvalidParamter

Invalid Parameter.

The specified parameter is invalid.

400

InvalidSecurityGroupId.Malformed

The specified parameter "SecurityGroupId" is not valid.

The specified parameter SecurityGroupId is illegal.

400

MissingParameter.RegionId

The parameter RegionId is missing.

\-

400

InvalidParameter.AttributeNotSupported

The specified value for parameter Attribute is not supported. Valid values: snapshotPolicyIds.

The specified value for the parameter Attribute is not supported. Valid values are: snapshotPolicyIds.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

ServiceUnavailable

The service is unavailable, please try again later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroupAttribute?updateTime=2026-01-13#workbench-doc-change-demo)

2025-04-21

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroupAttribute?updateTime=2025-04-21#workbench-doc-change-demo)

2025-04-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroupAttribute?updateTime=2025-04-01#workbench-doc-change-demo)

2024-05-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSecurityGroupAttribute?updateTime=2024-05-21#workbench-doc-change-demo)
