Queries the details of one or more Elastic Network Interface (ENIs).

## Operation description

## [](#usage-notes)[](#)Usage notes

You can call the `DescribeNetworkInterfaces` operation for paged query by specifying the `MaxResults` or `NextToken` parameter. Take note of the following items:

-   During a paged query, when you call the DescribeNetworkInterfaces operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token that can be used in the next call to retrieve a new page of results.
-   When you call the DescribeNetworkInterfaces operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set `MaxResults` to specify the maximum number of entries to return in this call.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeNetworkInterfaces)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeNetworkInterfaces)

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

ecs:DescribeNetworkInterfaces

get

NetworkInterface

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

Tag

array<object>

No

The tags to use for query.

object

No

Key

string

No

The key of tag N of the ENI. Valid values of N: 1 to 20.

TestKey

Value

string

No

The value of tag N of the ENI. Valid values of N: 1 to 20.

If a single tag is specified to query ENIs, up to 1,000 ENIs that have this tag can be returned. If multiple tags are specified to query ENIs, up to 1,000 ENIs that have all these tags can be returned. To query more than 1,000 resources that have specified tags, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestValue

ResourceGroupId

string

No

The ID of the resource group to which the ENI belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be returned.

**Note** Resources in the default resource group are displayed in the response regardless of how this parameter is set.

rg-bp67acfmxazb4p\*\*\*\*

VSwitchId

string

No

The ID of the vSwitch with which the ENI is associated.

vsw-bp16usj2p27htro3\*\*\*\*

VpcId

string

No

The ID of the virtual private cloud (VPC) to which the elastic network interface (ENI) belongs.

vsw-bp16usj2p27htro3\*\*\*\*

PrimaryIpAddress

string

No

The primary private IPv4 address of the ENI.

192.168.\*\*.\*\*

SecurityGroupId

string

No

The ID of the security group to which the secondary ENI belongs.

-   To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
-   To query the details of primary ENIs based on the ID of a security group, call the [DescribeInstances](/help/en/ecs/api-describeinstances) operation and specify the `SecurityGroupId` parameter.

sg-bp144yr32sx6ndw\*\*\*\*

NetworkInterfaceName

string

No

The name of the ENI.

test-eni-name

Type

string

No

The type of the ENI. Valid values:

-   Primary
-   Secondary

This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.

Secondary

InstanceId

string

No

The ID of the instance to which the ENI is attached.

i-bp1e2l6djkndyuli\*\*\*\*

ServiceManaged

boolean

No

Specifies whether the user of the ENI is an Alibaba Cloud service or a distributor.

true

Status

string

No

The state of the ENI. Valid values:

-   Available: The ENI is available.
-   Attaching: The ENI is being attached to an instance.
-   InUse: The ENI is attached to an instance.
-   Detaching: The ENI is being detached from an instance.
-   Deleting: The ENI is being deleted.

This parameter is empty by default, which indicates that ENIs in all states are queried.

Available

PageNumber`deprecated`

integer

No

The page number.

Pages start from page 1.

Default value: 1.

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

1

PageSize`deprecated`

integer

No

The number of entries per page.

Valid values: 1 to 1000.

Default value: 10.

**Note** This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.

100

NextToken

string

No

The query token. Set the value to the `NextToken` value returned in the last call to this operation.

For more information about how to check the responses returned by this operation, see the preceding "Description" section.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on each page. Valid values: 10 to 500.

Default values:

-   If this parameter is not specified or if this parameter is set to a value less than 10, the default value is 10.
-   If this parameter is set to a value greater than 500, the default value is 500.

50

PrivateIpAddress

array

No

An array that consists of the secondary private IPv4 addresses of the ENI. You can specify multiple secondary private IPv4 addresses. Valid values of N: 1 to 100.

string

No

The secondary private IPv4 addresses of the ENI. You can specify multiple secondary private IPv4 addresses. Valid values of N: 1 to 100.

192.168.\*\*.\*\*

NetworkInterfaceId

array

No

An array that consists of the IDs of the ENIs. You specify multiple ENI IDs. Valid values of N: 1 to 100.

string

No

The ID of the ENI N. You specify multiple ENI IDs. Valid values of N: 1 to 100.

eni-bp125p95hhdhn3ot\*\*\*\*

Ipv6Address

array

No

An array that consists of the IPv6 address of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.

string

No

IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.

2408:4321:180:1701:94c7:bc38:3bfa:\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2\*\*\*\*

PageSize

integer

The number of entries returned per page.

**Note** This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.

1

PageNumber

integer

The page number of the returned page.

**Note** This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.

1

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of ENIs.

**Note** If you specify the `MaxResults` and `NextToken` parameters to perform a paged query, the value of the `TotalCount` response parameter is invalid.

2

NetworkInterfaceSets

array<object>

Details of the ENIs.

NetworkInterfaceSet

object

CreationTime

string

The time when the security group was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2019-12-25T12:31:31Z

VpcId

string

The ID of the VPC to which the ENI belongs.

vpc-bp1j7w3gc1cexjqd\*\*\*\*

Type

string

The type of the ENI.

Secondary

Status

string

The state of the ENI.

Available

NetworkInterfaceTrafficMode

string

The communication mode of the ENI. Valid values:

-   Standard: The TCP communication mode is used.
-   HighPerformance: The Elastic RDMA Interface (ERI) is enabled and the remote direct memory access (RDMA) communication mode is used.

**Note** This parameter can have a value of HighPerformance only when the ENI is attached to a c7re RDMA-enhanced instance that resides in Beijing Zone K.

Standard

NetworkInterfaceName

string

The name of the ENI.

my-eni-name

MacAddress

string

The MAC address of the ENI.

00:16:3e:12:\*\*:\*\*

QueuePairNumber

integer

**Note** This parameter is in invitational preview and is not publicly available.

0

NetworkInterfaceId

string

The ID of the ENI.

eni-bp125p95hhdhn3ot\*\*\*\*

ServiceID

long

The ID of the distributor to which the ENI belongs.

12345678910

InstanceId

string

The ID of the Elastic Compute Service (ECS) instance to which the ENI is attached.

**Note** If the ENI is managed by other Alibaba Cloud services, no instance ID is returned.

i-bp1e2l6djkndyuli\*\*\*\*

OwnerId

string

The ID of the account to which the ENI belongs.

123456\*\*\*\*

ServiceManaged

boolean

Indicates whether the user of the ENI is an Alibaba Cloud service or a distributor.

true

VSwitchId

string

The ID of the vSwitch.

vsw-bp16usj2p27htro3\*\*\*\*

Description

string

The description of the ENI.

DescriptionTest

ResourceGroupId

string

The ID of the resource group to which the ENI belongs.

rg-2ze88m67qx5z\*\*\*\*

ZoneId

string

The zone ID of the ENI.

cn-hangzhou-e

PrivateIpAddress

string

The primary private IP address of the ENI.

172.17.\*\*.\*\*

QueueNumber

integer

The number of queues supported by the ENI.

-   If the ENI is a secondary ENI in the InUse state and the number of queues supported by the ENI has never been modified, the default number of queues per secondary ENI that the instance type supports is returned.
-   If the ENI is a secondary ENI and the number of queues supported by the ENI has been modified, the new number of queues is returned.
-   If the ENI is a secondary ENI in the Available state and the number of queues supported by the ENI has never been modified, an empty value is returned.
-   If the ENI is a primary ENI, the default number of queues per primary ENI that the instance type supports is returned.

8

PrivateIpSets

array<object>

Details about the private IP addresses of the ENI.

PrivateIpSet

object

PrivateIpAddress

string

The private IP address of the ENI.

172.17.\*\*.\*\*

Primary

boolean

Indicates whether the private IP address is the primary private IP address. Valid values:

-   true: The IP address is the primary private IP address.
-   false: The IP address is a secondary private IP address.

true

AssociatedPublicIp

object

The elastic IP address (EIP) that is associated with the private IP address.

PublicIpAddress

string

The EIP.

116.62.\*\*.\*\*

AllocationId

string

**Note** This parameter is in invitational preview and is not publicly available.

null

PrivateDnsName

string

The private domain name of the ECS instance.

**Note** A private domain name can be returned in a specific format only when `HostnameType` is set to `IP` or `InstanceId`.

DnsTestName

Ipv6Sets

array<object>

The IPv6 addresses of the ENI.

Ipv6Set

object

**Note** This parameter is in invitational preview and is unavailable.

Ipv6Address

string

The IPv6 address of the ENI.

2408:4321:180:1701:94c7:bc38:3bfa:\*\*\*\*

Ipv4PrefixSets

array<object>

The IPv4 prefixes of the ENI.

Ipv4PrefixSet

object

**Note** This parameter is in invitational preview and is unavailable.

Ipv4Prefix

string

The IPv4 prefix of the ENI.

hide

Ipv6PrefixSets

array<object>

The IPv6 prefixes of the ENI.

Ipv6PrefixSet

object

**Note** This parameter is in invitational preview and is unavailable.

Ipv6Prefix

string

The IPv6 prefix of the ENI.

hide

Tags

array<object>

The tags of the ENI.

Tag

object

TagValue

string

The tag value.

TestValue

TagKey

string

The tag key.

TestKey

SecurityGroupIds

array

The security groups to which the ENI belongs.

SecurityGroupId

string

The ID of the security group.

sg-bp18kz60mefsicfg\*\*\*\*

AssociatedPublicIp

object

The EIPs that are associated with the secondary private IP addresses of the ENI.

PublicIpAddress

string

The EIP.

116.62.\*\*.\*\*

AllocationId

string

**Note** This parameter is in invitational preview and is not publicly available.

null

Attachment

object

**Note** This parameter is in invitational preview and is not publicly available.

DeviceIndex

integer

**Note** This parameter is in invitational preview and is not publicly available.

0

InstanceId

string

**Note** This parameter is in invitational preview and is not publicly available.

null

TrunkNetworkInterfaceId

string

**Note** This parameter is in invitational preview and is not publicly available.

null

NetworkCardIndex

integer

The index of the network card.

-   If the ENI is in the Available state or if no network card index was specified when the ENI was attached, this parameter is empty.
-   If the ENI is in the InUse state and a network card index was specified when the ENI was attached, the specified network card index is returned as the value of this parameter.

0

DeleteOnRelease

boolean

Indicates whether to retain the ENI when the associated instance is released. Valid values:

-   true
-   false

true

SourceDestCheck

boolean

Indicates whether the source and destination IP address check feature is enabled. To improve network security, enable this feature. Valid values:

-   true
-   false

Default value: false.

**Note** Before you use this parameter, read [Source and destination IP address check](/help/en/ecs/user-guide/source-and-destination-check).

false

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAdDWBF2****",
  "PageSize": 1,
  "PageNumber": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 2,
  "NetworkInterfaceSets": {
    "NetworkInterfaceSet": [
      {
        "CreationTime": "2019-12-25T12:31:31Z",
        "VpcId": "vpc-bp1j7w3gc1cexjqd****",
        "Type": "Secondary",
        "Status": "Available",
        "NetworkInterfaceTrafficMode": "Standard",
        "NetworkInterfaceName": "my-eni-name",
        "MacAddress": "00:16:3e:12:**:**",
        "QueuePairNumber": 0,
        "NetworkInterfaceId": "eni-bp125p95hhdhn3ot****",
        "ServiceID": 12345678910,
        "InstanceId": "i-bp1e2l6djkndyuli****",
        "OwnerId": "123456****",
        "ServiceManaged": true,
        "VSwitchId": "vsw-bp16usj2p27htro3****",
        "Description": "DescriptionTest",
        "ResourceGroupId": "rg-2ze88m67qx5z****",
        "ZoneId": "cn-hangzhou-e",
        "PrivateIpAddress": "172.17.**.**",
        "QueueNumber": 8,
        "PrivateIpSets": {
          "PrivateIpSet": [
            {
              "PrivateIpAddress": "172.17.**.**",
              "Primary": true,
              "AssociatedPublicIp": {
                "PublicIpAddress": "116.62.**.**",
                "AllocationId": null
              },
              "PrivateDnsName": "DnsTestName"
            }
          ]
        },
        "Ipv6Sets": {
          "Ipv6Set": [
            {
              "Ipv6Address": "2408:4321:180:1701:94c7:bc38:3bfa:****"
            }
          ]
        },
        "Ipv4PrefixSets": {
          "Ipv4PrefixSet": [
            {
              "Ipv4Prefix": "hide"
            }
          ]
        },
        "Ipv6PrefixSets": {
          "Ipv6PrefixSet": [
            {
              "Ipv6Prefix": "hide"
            }
          ]
        },
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        },
        "SecurityGroupIds": {
          "SecurityGroupId": [
            "sg-bp18kz60mefsicfg****"
          ]
        },
        "AssociatedPublicIp": {
          "PublicIpAddress": "116.62.**.**",
          "AllocationId": null
        },
        "Attachment": {
          "DeviceIndex": 0,
          "InstanceId": null,
          "TrunkNetworkInterfaceId": null,
          "NetworkCardIndex": 0
        },
        "DeleteOnRelease": true,
        "SourceDestCheck": false
      }
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

InvalidRegionId.MalFormed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

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

InvalidVpc.Empty

%s

No vSwitches exist in the specified VPC. For more information, see the return value of the %s placeholder in the error message.

403

InvalidOperation.InvalidEniPageNumber

%s

\-

403

InvalidVpc.Indeterminacy

%s

\-

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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-31

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaces?updateTime=2024-12-31#workbench-doc-change-demo)

2024-09-14

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaces?updateTime=2024-09-14#workbench-doc-change-demo)

2024-08-08

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaces?updateTime=2024-08-08#workbench-doc-change-demo)

2023-10-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaces?updateTime=2023-10-09#workbench-doc-change-demo)

2023-01-04

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaces?updateTime=2023-01-04#workbench-doc-change-demo)

2021-05-20

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaces?updateTime=2021-05-20#workbench-doc-change-demo)
