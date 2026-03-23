Queries the attributes of a specific Elastic Compute Service (ECS) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceAttribute)

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

ecs:DescribeInstanceAttribute

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The instance ID.

i-uf6f5trc95ug8t33\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Status

string

The status of the instance. Valid values:

-   Pending: The instance is being created.
-   Running: The instance is running.
-   Starting: The instance is being started.
-   Stopping: The instance is being stopped.
-   Stopped: The instance is stopped.

Running

SerialNumber

string

The serial number of the instance.

51d1353b-22bf-4567-a176-8b3e12e4\*\*\*\*

CreationTime

string

The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. For more information, see [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format).

2017-12-10T04:04Z

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

Description

string

The description of the instance.

testDescription

InstanceName

string

The instance name.

testInstanceName

InstanceNetworkType

string

The network type of the instance. Valid values:

-   classic: classic network
-   vpc: VPC

vpc

Memory

integer

The memory size of the instance. Unit: MiB.

16384

ImageId

string

The ID of the image that the instance is running.

m-bp1h46wfpjsjastc\*\*\*\*

ClusterId

string

The ID of the cluster to which the instance belongs.

**Note** This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.

cls-bp67acfmxazb4p\*\*\*\*

VlanId

string

The virtual LAN (VLAN) ID of the instance.

**Note** This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.

10

StoppedMode

string

Indicates whether the system implements billing after the instance is stopped. Valid values:

-   KeepCharging: The instance is stopped in standard mode. The billing of the instance continues after the instance is stopped, and resources are retained for the instance.
-   StopCharging: The instance is stopped in economical mode. The billing of some resources of the instance stops after the instance is stopped. When the instance is stopped, its resources such as vCPUs, memory, and public IP address are released. The instance may be unable to start again if some required resources are out of stock in the current region.
-   Not-applicable: The instance does not support economical mode.

KeepCharging

HostName

string

The hostname of the instance.

testHostName

InstanceId

string

The instance ID

i-uf6f5trc95ug8t33\*\*\*\*

InstanceType

string

The instance type.

ecs.g5.large

InternetMaxBandwidthIn

integer

The maximum inbound public bandwidth. Unit: Mbit/s.

50

InternetMaxBandwidthOut

integer

The maximum outbound public bandwidth. Unit: Mbit/s.

5

RegionId

string

The ID of the region in which the instance resides.

cn-hangzhou

InstanceChargeType

string

The billing method of the instance. Valid values:

-   PrePaid: subscription.
-   PostPaid: pay-as-you-go

PrePaid

IoOptimized

string

Indicates whether the ECS instance is I/O optimized. Valid values:

-   optimized: The ECS instance is I/O optimized.
-   none: The ECS instance is not I/O optimized.

true

Cpu

integer

The number of vCPUs.

8

ExpiredTime

string

The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. For more information, see [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format).

2017-12-10T04:04Z

ZoneId

string

The ID of the zone in which the instance resides.

cn-hangzhou-g

InternetChargeType

string

The billing method for network usage. Valid values:

-   PayByBandwidth
-   PayByTraffic

**Note** When the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios in which demands exceed resource supplies, the maximum bandwidths may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

PayByTraffic

CreditSpecification

string

The performance mode of the burstable instance. Valid values:

-   Standard: the standard mode. For more information, see the [Performance modes](/help/en/ecs/user-guide/burst-performance-instance-overview#section-svb-w9d-dju) section of the "Overview of burstable instances" topic.
-   Unlimited: the unlimited mode. For more information, see the [Performance modes](/help/en/ecs/user-guide/burst-performance-instance-overview#section-svb-w9d-dju) section of the "Overview of burstable instances" topic.

Standard

SecurityGroupIds

array

The IDs of the security groups to which the instance belongs.

SecurityGroupId

string

The IDs of the security groups to which the instance belongs.

sg-bp1fg655nh68xyz9i\*\*\*\*

PublicIpAddress

array

The public IP address of the instance.

IpAddress

string

The public IP address of the instance.

121.40.\*\*.\*\*

InnerIpAddress

array

The internal IP address of the instance located in the classic network.

IpAddress

string

The internal IP address of the instance located in the classic network.

192.168.\*\*.\*\*

VpcAttributes

object

The VPC attributes of the instance.

VpcId

string

The ID of the VPC.

vpc-wz9e4e9pmbcnj6ki6\*\*\*\*

NatIpAddress

string

The NAT IP address of the instance. It is used by ECS instances in different VPCs for communication.

172.17.\*\*.\*\*

VSwitchId

string

The ID of the vSwitch to which the instance is connected.

vsw-uf6ixacqz8osrwnqb\*\*\*\*

PrivateIpAddress

array

The private IP address of the instance.

IpAddress

string

The private IP address of the instance.

192.168.\*\*.\*\*

EipAddress

object

The elastic IP address (EIP) associated with the instance.

InternetChargeType

string

The billing method for network usage. Valid values:

-   PayByBandwidth
-   PayByTraffic

**Note** When the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios in which demands exceed resource supplies, the maximum bandwidths may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.

PayByTraffic

IpAddress

string

The ID of the elastic IP address (EIP).

30.21.\*\*.\*\*

Bandwidth

integer

The maximum public bandwidth of the EIP. Unit: Mbit/s.

8

AllocationId

string

The ID of the EIP.

eip-wz9uilio26dfscamm\*\*\*\*

DedicatedHostAttribute

object

Details about the dedicated host. It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.

DedicatedHostName

string

The name of the dedicated host.

ecs-autoui-create-ddh-temp

DedicatedHostId

string

The ID of the dedicated host.

dh-2ze7qrzz6lvbfhr0\*\*\*\*

OperationLocks

array<object>

The reason why the instance was locked. Valid values:

-   financial: The dedicated host was locked due to overdue payments.
-   security: The instance was locked due to security reasons.
-   recycling: The spot instance was locked and pending release.
-   dedicatedhostfinancial: The instance was locked due to overdue payments for the dedicated host.
-   refunded: The instance was locked because a refund was made for the instance.

LockReason

object

The reason why the instance was locked. Valid values:

-   financial: The dedicated host was locked due to overdue payments.
-   security: The instance was locked due to security reasons.
-   recycling: The spot instance was locked and pending release.
-   dedicatedhostfinancial: The instance was locked due to overdue payments for the dedicated host.
-   refunded: The instance was locked because a refund was made for the instance.

LockReason

string

The reason why the instance was locked. Valid values:

-   financial: The instance was locked due to overdue payments.
-   security: The instance was locked due to security reasons.
-   recycling: The spot instance was locked and pending release.
-   dedicatedhostfinancial: The instance was locked due to overdue payments for the dedicated host.
-   refunded: The instance was locked because a refund is made for the instance.

financial

EnableJumboFrame

boolean

Indicates whether the Jumbo Frame feature is enabled for the instance. Valid values:

-   true
-   false

For more information, see [MTUs](/help/en/ecs/user-guide/jumbo-frame/) .

false

NetworkOptions

object

Details about network options.

**Note** This parameter is in invitational preview and is not publicly available.

BandwidthWeighting

string

The bandwidth weight.

The supported values vary with instance types. You can query the bandwidth weights supported by the current instance type by using the DescribeInstanceTypes.

Valid values:

-   Vpc-L1.
-   Vpc-L2.
-   Ebs-L1.
-   Ebs-L2.
-   Default.

Vpc-L1

## Examples

Sample success responses

`JSON`format

```
{
  "Status": "Running",
  "SerialNumber": "51d1353b-22bf-4567-a176-8b3e12e4****",
  "CreationTime": "2017-12-10T04:04Z",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "Description": "testDescription",
  "InstanceName": "testInstanceName",
  "InstanceNetworkType": "vpc",
  "Memory": 16384,
  "ImageId": "m-bp1h46wfpjsjastc****",
  "ClusterId": "cls-bp67acfmxazb4p****",
  "VlanId": 10,
  "StoppedMode": "KeepCharging",
  "HostName": "testHostName",
  "InstanceId": "i-uf6f5trc95ug8t33****",
  "InstanceType": "ecs.g5.large",
  "InternetMaxBandwidthIn": 50,
  "InternetMaxBandwidthOut": 5,
  "RegionId": "cn-hangzhou",
  "InstanceChargeType": "PrePaid",
  "IoOptimized": true,
  "Cpu": 8,
  "ExpiredTime": "2017-12-10T04:04Z",
  "ZoneId": "cn-hangzhou-g",
  "InternetChargeType": "PayByTraffic",
  "CreditSpecification": "Standard",
  "SecurityGroupIds": {
    "SecurityGroupId": [
      "sg-bp1fg655nh68xyz9i****"
    ]
  },
  "PublicIpAddress": {
    "IpAddress": [
      "121.40.**.**"
    ]
  },
  "InnerIpAddress": {
    "IpAddress": [
      "192.168.**.**"
    ]
  },
  "VpcAttributes": {
    "VpcId": "vpc-wz9e4e9pmbcnj6ki6****",
    "NatIpAddress": "172.17.**.**",
    "VSwitchId": "vsw-uf6ixacqz8osrwnqb****",
    "PrivateIpAddress": {
      "IpAddress": [
        "192.168.**.**"
      ]
    }
  },
  "EipAddress": {
    "InternetChargeType": "PayByTraffic",
    "IpAddress": "30.21.**.**",
    "Bandwidth": 8,
    "AllocationId": "eip-wz9uilio26dfscamm****"
  },
  "DedicatedHostAttribute": {
    "DedicatedHostName": "ecs-autoui-create-ddh-temp",
    "DedicatedHostId": "dh-2ze7qrzz6lvbfhr0****"
  },
  "OperationLocks": {
    "LockReason": [
      {
        "LockReason": "financial"
      }
    ]
  },
  "EnableJumboFrame": false,
  "EnableNetworkEncryption": true,
  "NetworkOptions": {
    "EnableJumboFrame": false,
    "EnableNetworkEncryption": true,
    "BandwidthWeighting": "Vpc-L1"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-11

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceAttribute?updateTime=2025-04-11#workbench-doc-change-demo)

2025-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceAttribute?updateTime=2025-02-28#workbench-doc-change-demo)

2025-01-15

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceAttribute?updateTime=2025-01-15#workbench-doc-change-demo)
