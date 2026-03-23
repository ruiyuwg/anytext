Queries the details of an elastic network interface (ENI). When you call this operation, you can set the NetworkInterfaceId parameter to specify an ENI.

## Operation description

## [](#debugging)Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ecs&api=DescribeNetworkInterfaceAttribute&type=RPC&version=2014-05-26)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute)

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

ecs:DescribeNetworkInterfaceAttribute

get

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

Tag

array<object>

No

**Note** This parameter is unavailable.

object

No

**Note** This parameter is unavailable.

Key

string

No

**Note** This parameter is unavailable.

TestKey

Value

string

No

**Note** This parameter is unavailable.

TestValue

NetworkInterfaceId

string

Yes

The ID of the ENI.

eni-bp67acfmxazb4p\*\*\*\*

Attribute

string

No

The attribute of the ENI. Valid values:

attachment: member ENI attachment information of the trunk ENI. This value is in invitational preview and is not publicly available.

connectionTrackingConfiguration: connection tracking configuration.

Default value:

attachment

## Response parameters

Parameter

Type

Description

Example

object

Details of the ENI.

CreationTime

string

The time when the ENI was created.

2019-12-25T12:31:31Z

VpcId

string

The ID of the virtual private cloud (VPC) to which the ENI belongs.

vpc-bp67acfmxazb4p\*\*\*\*

Type

string

The type of the ENI. Valid values:

-   Primary
-   Secondary

Secondary

Status

string

The state of the ENI. Valid values:

-   Available: The ENI is not attached to an instance.
-   Attaching: The ENI is being attached to an instance.
-   InUse: The ENI is attached to an instance.
-   Detaching: The ENI is being detached from an instance.
-   Deleting: The ENI is being deleted.

This parameter is empty by default, which indicates that all states are queried.

Available

NetworkInterfaceTrafficMode

string

The communication mode of the ENI. Valid values:

-   Standard: The TCP communication mode is used.
-   HighPerformance: The Elastic RDMA Interface (ERI) feature is enabled and the remote direct memory access (RDMA) communication mode is used.

**Note** This parameter can have a value of HighPerformance only when the ENI is attached to a c7re RDMA-enhanced instance.

Standard

NetworkInterfaceName

string

The name of the ENI.

my-eni-name

MacAddress

string

The media access control (MAC) address of the ENI.

00:16:3e:12:\*\*:\*\*

QueuePairNumber

integer

**Note** This parameter is in invitational preview and unavailable for general users.

22

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

The ID of the instance to which the ENI is attached.

**Note** If the ENI is managed and controlled by other Alibaba Cloud services, no instance ID is returned.

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

The ID of the vSwitch to which the ENI is connected.

vsw-bp1s5fnvk4gn2tws0\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

Description

string

The description of the ENI.

testDescription

ResourceGroupId

string

The ID of the resource group to which the instance belongs. If this parameter is specified to query ENIs, up to 1,000 ENIs that belong to the specified resource group can be displayed in the response.

**Note** ENIs in the default resource group are displayed in the response regardless of how this parameter is set.

rg-bp67acfmxazb4p\*\*\*\*

ZoneId

string

The zone ID of the ENI.

cn-hangzhou-g

PrivateIpAddress

string

The private IP address of the ENI.

10.1.\*\*.\*\*

QueueNumber

integer

The number of queues supported by the ENI.

-   For a primary ENI: The default number of queues that the instance type supports for the ENI is returned.
    
-   For a secondary ENI:
    
    -   When the ENI is in the InUse state, the following situations occur for the QueueNumber parameter:
        
        -   If the number of queues supported by the ENI has not been modified, the default number of queues that the instance type supports for the ENI is returned.
        -   If the number of queues supported by the ENI has been modified, the new number of queues is returned.
    -   When the ENI is in the Available state, the following situations occur for the QueueNumber parameter:
        
        -   If the number of queues supported by the ENI has not been modified, the return value is empty.
        -   If the number of queues supported by the ENI has been modified, the new number of queues is returned.

8

SecurityGroupIds

array

The IDs of the security groups to which the ENI belongs.

SecurityGroupId

string

The IDs of the security groups to which the ENI belongs.

sg-bp18kz60mefsicfg\*\*\*\*

AssociatedPublicIp

object

Details about the elastic IP address (EIP) that is associated with the secondary private IP address of the ENI.

PublicIpAddress

string

The EIP.

116.62.\*\*.\*\*

AllocationId

string

The ID of the EIP.

null

Attachment

object

**Note** This parameter is in invitational preview and unavailable for general users.

DeviceIndex

integer

**Note** This parameter is in invitational preview and unavailable for general users.

hide

InstanceId

string

**Note** This parameter is in invitational preview and unavailable for general users.

hide

TrunkNetworkInterfaceId

string

**Note** This parameter is in invitational preview and unavailable for general users.

hide

MemberNetworkInterfaceIds

array

**Note** This parameter is in invitational preview and unavailable for general users.

MemberNetworkInterfaceId

string

**Note** This parameter is in invitational preview and unavailable for general users.

hide

NetworkCardIndex

integer

The index of the network interface controller (NIC).

-   If the ENI is in the Available state or if no NIC index was specified when the ENI was attached, this parameter has no value.
-   If the ENI is in the InUse state and an NIC index was specified when the ENI was attached, the specified NIC index is returned as the value of this parameter.

0

PrivateIpSets

array<object>

The private IP addresses of the ENI.

PrivateIpSet

object

PrivateIpAddress

string

The private IP address of the ENI.

172.17.\*\*.\*\*

Primary

boolean

Indicates whether the IP address is the primary private IP address. Valid values:

-   true: The IP address is the primary private IP address.
-   false: The IP address is a secondary private IP address.

true

AssociatedPublicIp

object

The EIP that is associated with the secondary private IP address of the ENI.

PublicIpAddress

string

The EIP.

116.62.\*\*.\*\*

AllocationId

string

**Note** This parameter is in invitational preview and is not publicly available.

null

Ipv6Sets

array<object>

The IPv6 addresses of the ENI.

Ipv6Set

object

The IPv6 addresses of the ENI.

Ipv6Address

string

The IPv6 address of the ENI.

2001:db8:1234:1a00::\*\*\*\*

Ipv4PrefixSets

array<object>

The IPv4 prefixes of the ENI.

Ipv4PrefixSet

object

**Note** This parameter is in invitational preview and unavailable for general users.

Ipv4Prefix

string

The IPv4 prefix of the ENI.

192.168.\*\*.0/28

Ipv6PrefixSets

array<object>

The IPv6 prefixes of the ENI.

Ipv6PrefixSet

object

**Note** This parameter is in invitational preview and unavailable for general users.

Ipv6Prefix

string

The IPv6 prefix of the ENI.

2001:db8:1234:1a00:\*\*\*\*::/80

Tags

array<object>

The tags of the ENI.

Tag

object

The tags of the ENI.

TagValue

string

The tag value of the ENI.

TestValue

TagKey

string

The tag key of the ENI.

TestKey

BondInterfaceSpecification

object

**Note** This parameter is in invitational preview and unavailable for general users.

BondMode

string

**Note** This parameter is in invitational preview and unavailable for general users.

null

SlaveInterfaceSpecification

array<object>

**Note** This parameter is in invitational preview and unavailable for general users.

SlaveInterfaceSpecificationSet

object

**Note** This parameter is in invitational preview and unavailable for general users.

SlaveNetworkInterfaceId

string

**Note** This parameter is in invitational preview and is not publicly available.

null

WorkState

string

**Note** This parameter is in invitational preview and is not publicly available.

null

BondNetworkInterfaceId

string

**Note** This parameter is in invitational preview and is not publicly available.

null

SlaveInterfaceSpecification

object

**Note** This parameter is in invitational preview and unavailable for general users.

SlaveNetworkInterfaceId

string

**Note** This parameter is in invitational preview and unavailable for general users.

null

WorkState

string

**Note** This parameter is in invitational preview and unavailable for general users.

null

BondNetworkInterfaceId

string

**Note** This parameter is in invitational preview and unavailable for general users.

null

DeleteOnRelease

boolean

Indicates whether to retain the ENI when the associated instance is released. Valid values:

-   true
-   false

true

TcpOptionAddressEnabled

string

**Note** This parameter is in invitational preview and is not publicly available.

null

NetworkInterfaceTrafficConfig

object

The communication settings of the ENI.

NetworkInterfaceTrafficMode

string

The communication mode of the ENI.

HighPerformance

QueueNumber

integer

The number of queues supported by the ENI.

8

QueuePairNumber

integer

The number of queues supported by the ERI.

8

ConnectionTrackingConfiguration

object

The connection tracking configurations of the ENI.

Before you use the parameter, familiarize yourself with how to manage the timeout periods of connections. For more information, see [Mange connection timeout periods](/help/en/ecs/user-guide/connection-timeout-management).

**Note** This parameter is returned only when the value of the input parameter `Attribute` is: `connectionTrackingConfiguration`.

TcpEstablishedTimeout

integer

The timeout period for TCP connections in the ESTABLISHED state. Unit: seconds. Valid values: 30, 60, 80, 100, 200, 300, 500, 700, and 910.

910

TcpClosedAndTimeWaitTimeout

integer

The timeout period for TCP connections in the TIME\_WAIT or CLOSE\_WAIT state. Unit: seconds. Valid values: integers from 3 to 15.

**Note** If the associated Elastic Compute Service (ECS) instance is used with a Network Load Balancer (NLB) or Classic Load Balancer (CLB) instance, the default timeout period for TCP connections in the `TIME_WAIT` state is 15 seconds.

3

UdpTimeout

integer

The timeout period for UDP flows. Unit: seconds. Valid values: 10, 20, 30, 60, 80, and 100.

**Note** If the associated ECS instance is used with an NLB or CLB instance, the default timeout period for UDP flows is 100 seconds.

30

SourceDestCheck

boolean

This parameter is not publicly available.

false

EnhancedNetwork

object

This parameter is not publicly available.

EnableSriov

boolean

This parameter is not publicly available.

false

EnableRss

boolean

**Note** This parameter is not publicly available.

true

QoSConfig

object

QoS Speed Limit Settings

EnableQoS

boolean

Whether to enable QoS speed limit settings

QoS

object

QoS Speed Limit Settings

BandwidthTx

long

Maximum outbound internal bandwidth

50000

BandwidthRx

long

maximum inbound internal bandwidth

50000

PpsTx

long

Outbound packet forwarding rate over the internal network

50000

PpsRx

long

Inbound packet forwarding rate over the internal network

50000

ConcurrentConnections

long

Maximum number of sessions

50000

## Examples

Sample success responses

`JSON`format

```
{
  "CreationTime": "2019-12-25T12:31:31Z",
  "VpcId": "vpc-bp67acfmxazb4p****",
  "Type": "Secondary",
  "Status": "Available",
  "NetworkInterfaceTrafficMode": "Standard",
  "NetworkInterfaceName": "my-eni-name",
  "MacAddress": "00:16:3e:12:**:**",
  "QueuePairNumber": 22,
  "NetworkInterfaceId": "eni-bp125p95hhdhn3ot****",
  "ServiceID": 12345678910,
  "InstanceId": "i-bp1e2l6djkndyuli****",
  "OwnerId": "123456****",
  "ServiceManaged": true,
  "VSwitchId": "vsw-bp1s5fnvk4gn2tws0****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "Description": "testDescription",
  "ResourceGroupId": "rg-bp67acfmxazb4p****",
  "ZoneId": "cn-hangzhou-g",
  "PrivateIpAddress": "10.1.**.**",
  "QueueNumber": 8,
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
    "InstanceId": "hide",
    "TrunkNetworkInterfaceId": "hide",
    "MemberNetworkInterfaceIds": {
      "MemberNetworkInterfaceId": [
        "hide"
      ]
    },
    "NetworkCardIndex": 0
  },
  "PrivateIpSets": {
    "PrivateIpSet": [
      {
        "PrivateIpAddress": "172.17.**.**",
        "Primary": true,
        "AssociatedPublicIp": {
          "PublicIpAddress": "116.62.**.**",
          "AllocationId": null
        }
      }
    ]
  },
  "Ipv6Sets": {
    "Ipv6Set": [
      {
        "Ipv6Address": "2001:db8:1234:1a00::****"
      }
    ]
  },
  "Ipv4PrefixSets": {
    "Ipv4PrefixSet": [
      {
        "Ipv4Prefix": "192.168.**.0/28"
      }
    ]
  },
  "Ipv6PrefixSets": {
    "Ipv6PrefixSet": [
      {
        "Ipv6Prefix": "2001:db8:1234:1a00:****::/80"
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
  "BondInterfaceSpecification": {
    "BondMode": null,
    "SlaveInterfaceSpecification": {
      "SlaveInterfaceSpecificationSet": [
        {
          "SlaveNetworkInterfaceId": null,
          "WorkState": null,
          "BondNetworkInterfaceId": null
        }
      ]
    }
  },
  "SlaveInterfaceSpecification": {
    "SlaveNetworkInterfaceId": null,
    "WorkState": null,
    "BondNetworkInterfaceId": null
  },
  "DeleteOnRelease": true,
  "TcpOptionAddressEnabled": null,
  "NetworkInterfaceTrafficConfig": {
    "NetworkInterfaceTrafficMode": "HighPerformance",
    "QueueNumber": 8,
    "QueuePairNumber": 8
  },
  "ConnectionTrackingConfiguration": {
    "TcpEstablishedTimeout": 910,
    "TcpClosedAndTimeWaitTimeout": 3,
    "UdpTimeout": 30
  },
  "SourceDestCheck": false,
  "EnhancedNetwork": {
    "EnableSriov": false,
    "EnableRss": true,
    "VirtualFunctionTotalQueueNumber": 0,
    "VirtualFunctionQuantity": 0
  },
  "QoSConfig": {
    "EnableQoS": true,
    "QoS": {
      "BandwidthTx": 50000,
      "BandwidthRx": 50000,
      "PpsTx": 50000,
      "PpsRx": 50000,
      "ConcurrentConnections": 50000
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

404

InvalidEniId.NotFound

%s

The specified ENI ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-03

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2025-12-03#workbench-doc-change-demo)

2025-05-21

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2025-05-21#workbench-doc-change-demo)

2025-01-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2025-01-09#workbench-doc-change-demo)

2024-12-31

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2024-12-31#workbench-doc-change-demo)

2024-09-14

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2024-09-14#workbench-doc-change-demo)

2024-07-03

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2024-07-03#workbench-doc-change-demo)

2024-05-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2024-05-17#workbench-doc-change-demo)

2024-05-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2024-05-07#workbench-doc-change-demo)

2024-02-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2024-02-01#workbench-doc-change-demo)

2023-10-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2023-10-09#workbench-doc-change-demo)

2023-01-04

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute?updateTime=2023-01-04#workbench-doc-change-demo)
