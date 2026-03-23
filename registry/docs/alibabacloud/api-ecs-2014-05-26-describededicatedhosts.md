Queries the details of one or more Dedicated Hosts (DDHs). You can call this operation to obtain information about a DDH, including the physical performance specifications, machine code, service status, and the list of created ECS instances. You can specify relevant parameters, such as DDH IDs, DDH cluster IDs, hostname, and status, to query the required DDH details. This helps you efficiently manage and optimize cloud computing resources.

## Operation description

## [](#usage-notes)[](#)Usage notes

You can use one of the following methods to query the information about dedicated hosts:

-   Specify `DedicatedHostIds` to query the details of specified dedicated hosts.
-   Specify `DedicatedHostClusterId` to query the details of dedicated hosts in a dedicated host cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHosts)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHosts)

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

ecs:DescribeDedicatedHosts

get

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/*`

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

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

The region ID of the dedicated host. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ZoneId

string

No

The zone ID of the dedicated host. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

cn-hangzhou-g

DedicatedHostIds

string

No

The list of DDH IDs. You can specify up to 100 deployment set IDs in each request. Separate the deployment set IDs with commas (,).

\["dh-bp165p6xk2tlw61e\*\*\*\*", "dh-bp1f9vxmno7emy96\*\*\*\*"\]

DedicatedHostName

string

No

The name of the dedicated host.

MyDDHTestName

Status

string

No

The service state of the dedicated host. Valid values:

-   Available: The dedicated host is running normally.
-   UnderAssessment: The dedicated host is available but has potential risks that may cause the ECS instances on the dedicated host to fail.
-   PermanentFailure: The dedicated host encounters permanent failures and is unavailable.
-   TempUnavailable: The dedicated host is temporarily unavailable.
-   Redeploying: The dedicated host is being restored.

Default value: Available.

Available

DedicatedHostType

string

No

The type of the DDH. You can call the [DescribeDedicatedHostTypes](/help/en/dedicated-host/developer-reference/api-describededicatedhosttypes) operation to query the most recent list of DDH types.

ddh.g5

LockReason

string

No

The reason why the dedicated host is locked. Valid values:

-   financial: The dedicated host is locked due to overdue payments.
-   security: The dedicated host is locked due to security reasons.

financial

PageNumber

integer

No

**Note** This parameter will be removed in the future. You can use NextToken and MaxResults for a paged query.

1

PageSize

integer

No

**Note** This parameter will be removed in the future. You can use NextToken and MaxResults for a paged query.

10

ResourceGroupId

string

No

The ID of the resource group to which the dedicated host belongs. When this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of how this parameter is set.

rg-aek3b6jzp66\*\*\*\*

Tag

array<object>

No

The list of tags. The list length ranges from 0 to 20.

object

No

Key

string

No

The key of tag N of the DDH. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N of the DDH. You can specify empty strings as tag values. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

DedicatedHostClusterId

string

No

The ID of the dedicated host cluster.

dc-bp12wlf6am0vz9v2\*\*\*\*

SocketDetails

string

No

Specifies whether to display socket information. You can view the remaining resources (vCPUs, memory usage, remaining resources, and total resources) based on the capacity information of the socket dimension. Then you can determine whether ECS instances of the corresponding specifications can be created. Valid values:

-   true Only some DDHs support the information about resources in the socket dimension. For more information, see [View and export information about DDHs](/help/en/dedicated-host/user-guide/view-and-import-the-information-of-a-dedicated-host).
-   false

**Note** Each DDH generally has two CPUs, and each CPU corresponds to Socket 0 and Socket 1. To maximize the performance of an ECS instance on a DDH, ECS instances are not created across sockets.

-   If one socket has available computing resources for creating the ECS instance, creation succeeds.
    
-   If not, creation fails even if the combined available resources of both sockets are sufficient. Although the remaining resources of the two sockets on the DDH are larger than the ECS instance type, the ECS instance cannot be created.
    

true

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

e71d8a535bd9cc11

MaxResults

integer

No

The maximum number of entries per page. If you specify this parameter, both MaxResults and NextToken are used for a paged query.

Valid values: 1 to 100.

Default value: 10.

10

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

1

RequestId

string

The ID of the request.

7654525A-9964-4ABB-8BCD-98F8835E809A

PageNumber

integer

The page number.

5

TotalCount

integer

The total number of dedicated hosts.

3

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. If the return value of this parameter is empty when you specify MaxResults and NextToken for a paged query, no more results are to be returned.

e71d8a535bd9cc11

DedicatedHosts

array<object>

Details about the DDH.

DedicatedHost

object

The ID of the managed private space to which the DDH belongs.

CreationTime

string

The time when the dedicated host was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.

2018-01-01T12:00Z

SchedulerOptions.ManagedPrivateSpaceId

string

The ID of the managed private space to which the dedicated host belongs.

mps-iq81z6pkbqjx61php46e

Status

string

The status of the dedicated host. Valid values:

-   Available: The dedicated host is running as expected.
-   UnderAssessment: The dedicated host is available but has potential risks that may cause the ECS instances on the dedicated host to fail.
-   PermanentFailure: The dedicated host has permanent failures and is unavailable.

Available

Cores

integer

The number of physical cores per CPU.

3

AutoPlacement

string

Indicates whether the dedicated host is added to the resource pool for automatic deployment. Valid values:

-   on: The dedicated host is added to the resource pool for automatic deployment.
-   off: The dedicated host is not added to the resource pool for automatic deployment.

For information about automatic deployment, see the "Automatic deployment" section in [Functions and features](/help/en/dedicated-host/product-overview/functions-and-features).

on

GPUSpec

string

The GPU model.

gpu

AutoReleaseTime

string

The automatic release time of the dedicated host. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.

2017-01-01T12:00Z

ChargeType

string

The billing method of the dedicated host.

Prepaid

CpuOverCommitRatio

float

The CPU overcommit ratio. Valid values: 1 to 5.

1

ActionOnMaintenance

string

The policy used to migrate the ECS instances deployed on the dedicated host when the dedicated host fails. Valid values:

-   Migrate: The instances are migrated to another physical machine. Instances that are not in the Stopped state when the dedicated host fails are restarted.
-   Stop: The instances are stopped. If the dedicated host cannot be repaired, the instances are migrated to another physical machine and then restarted.

If the dedicated host has cloud disks attached, the default value is Migrate. If the dedicated host has local disks attached, the default value is Stop.

Migrate

SaleCycle

string

The unit of the subscription duration. Valid values:

-   Month
-   Year

Month

PhysicalGpus

integer

The number of physical GPUs.

10

RegionId

string

The region ID of the dedicated host.

cn-hangzhou

DedicatedHostName

string

The name of the dedicated host.

MyDDHTestName

Description

string

The description of the dedicated host.

this-is-my-DDH

DedicatedHostClusterId

string

The ID of the dedicated host cluster to which the dedicated host belongs.

dc-bp12wlf6am0vz9v2\*\*\*\*

ExpiredTime

string

The expiration time of the subscription dedicated host. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.

2019-01-01T12:00Z

DedicatedHostType

string

The type of the dedicated host.

ddh.g5

ResourceGroupId

string

The ID of the resource group to which the dedicated host belongs.

rg-aek3b6jzp66\*\*\*\*

ZoneId

string

The zone ID of the dedicated host.

cn-hangzhou-g

DedicatedHostId

string

The ID of the dedicated host.

dh-bp165p6xk2tlw61e\*\*\*\*

Sockets

integer

The number of physical CPUs.

5

MachineId

string

The machine code of the dedicated host.

12aaa123456ff19dec12345d3026e\*\*\*\*

Instances

array<object>

The ECS instances that were created on the dedicated host.

Instance

object

InstanceType

string

The instance type of the ECS instance that was created on the dedicated host.

ecs.g5.large

InstanceId

string

The ID of the ECS instance.

i-bp14ot0ykf8w13a1\*\*\*\*

SocketId

string

The ID of the socket to which the ECS instance belongs.

0,1

InstanceOwnerId

long

The ID of the ECS instance owner.

128\*\*\*\*\*\*\*\*\*\*\*\*0

OperationLocks

array<object>

The reasons why the resources of the dedicated host were locked.

OperationLock

object

LockReason

string

The reason why the dedicated host was locked. Valid values:

-   financial: The dedicated host was locked due to overdue payments.
-   security: The dedicated host was locked due to security reasons.

financial

Tags

array<object>

The tags of the dedicated host.

Tag

object

TagValue

string

The tag value of the dedicated host.

TestValue

TagKey

string

The tag key of the dedicated host.

TestKey

SupportedInstanceTypeFamilies

array

The ECS instance families that are supported by the dedicated host.

SupportedInstanceTypeFamily

string

The ECS instance family that is supported by the dedicated host.

ecs.g5

SupportedCustomInstanceTypeFamilies

array

The custom ECS instance families that are supported by the dedicated host.

SupportedCustomInstanceTypeFamily

string

The custom ECS instance family that is supported by the dedicated host.

ecs.ddh6s.custom

SupportedInstanceTypesList

array

The ECS instance types that are supported by the dedicated host.

SupportedInstanceTypesList

string

The ECS instance type that is supported by the dedicated host.

ecs.g5.large

Capacity

object

The performance specifications of the dedicated host.

AvailableMemory

float

The amount of available memory. Unit: GiB.

25

LocalStorageCategory

string

The category of local disks.

i2

TotalMemory

float

The total amount of memory. Unit: GiB.

1024

TotalLocalStorage

integer

The total capacity of local disks. Unit: GiB.

512

TotalVcpus

integer

The total number of vCPUs.

56

TotalVgpus

integer

The total number of vGPUs.

10

AvailableLocalStorage

integer

The amount of available space on the local disks. Unit: GiB

65

AvailableVcpus

integer

The number of available vCPUs.

5

AvailableVgpus

integer

The number of available vGPUs.

2

SocketCapacities

array<object>

The socket capacities.

SocketCapacity

object

SocketId

integer

The socket ID.

1

AvailableMemory

float

The amount of available memory. Unit: GiB.

65

TotalMemory

float

The total amount of memory. Unit: GiB.

128

AvailableVcpu

integer

The number of available vCPUs.

64

TotalVcpu

integer

The total number of vCPUs.

128

NetworkAttributes

object

The network attributes of the dedicated host.

UdpTimeout

integer

The timeout period of the UDP session that is established between a user and an Alibaba Cloud service on the dedicated host. Unit: seconds. Only 60 is returned.

60

SlbUdpTimeout

integer

The timeout period of the UDP session that is established between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Only 60 is returned.

60

HostDetailInfo

object

This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.

SerialNumber

string

This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.

null

DedicatedHostOwnerId

long

The ID of the dedicated host owner.

100\*\*\*\*\*\*\*\*\*\*\*\*7

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "RequestId": "7654525A-9964-4ABB-8BCD-98F8835E809A",
  "PageNumber": 5,
  "TotalCount": 3,
  "NextToken": "e71d8a535bd9cc11",
  "DedicatedHosts": {
    "DedicatedHost": [
      {
        "CreationTime": "2018-01-01T12:00Z",
        "SchedulerOptions.ManagedPrivateSpaceId": "mps-iq81z6pkbqjx61php46e",
        "Status": "Available",
        "Cores": 3,
        "AutoPlacement": "on",
        "GPUSpec": "gpu",
        "AutoReleaseTime": "2017-01-01T12:00Z",
        "ChargeType": "Prepaid",
        "CpuOverCommitRatio": 1,
        "ActionOnMaintenance": "Migrate",
        "SaleCycle": "Month",
        "PhysicalGpus": 10,
        "RegionId": "cn-hangzhou",
        "DedicatedHostName": "MyDDHTestName",
        "Description": "this-is-my-DDH",
        "DedicatedHostClusterId": "dc-bp12wlf6am0vz9v2****",
        "ExpiredTime": "2019-01-01T12:00Z",
        "DedicatedHostType": "ddh.g5",
        "ResourceGroupId": "rg-aek3b6jzp66****",
        "ZoneId": "cn-hangzhou-g",
        "DedicatedHostId": "dh-bp165p6xk2tlw61e****",
        "Sockets": 5,
        "MachineId": "12aaa123456ff19dec12345d3026e****",
        "Instances": {
          "Instance": [
            {
              "InstanceType": "ecs.g5.large",
              "InstanceId": "i-bp14ot0ykf8w13a1****",
              "SocketId": "0,1",
              "InstanceOwnerId": 0
            }
          ]
        },
        "OperationLocks": {
          "OperationLock": [
            {
              "LockReason": "financial"
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
        "SupportedInstanceTypeFamilies": {
          "SupportedInstanceTypeFamily": [
            "ecs.g5"
          ]
        },
        "SupportedCustomInstanceTypeFamilies": {
          "SupportedCustomInstanceTypeFamily": [
            "ecs.ddh6s.custom"
          ]
        },
        "SupportedInstanceTypesList": {
          "SupportedInstanceTypesList": [
            "ecs.g5.large"
          ]
        },
        "Capacity": {
          "AvailableMemory": 25,
          "LocalStorageCategory": "i2",
          "TotalMemory": 1024,
          "TotalLocalStorage": 512,
          "TotalVcpus": 56,
          "TotalVgpus": 10,
          "AvailableLocalStorage": 65,
          "AvailableVcpus": 5,
          "AvailableVgpus": 2,
          "SocketCapacities": {
            "SocketCapacity": [
              {
                "SocketId": 1,
                "AvailableMemory": 65,
                "TotalMemory": 128,
                "AvailableVcpu": 64,
                "TotalVcpu": 128
              }
            ]
          },
          "AvailableInstanceTypes": {
            "AvailableInstanceType": [
              {
                "AvailableInstanceCapacity": 0,
                "InstanceType": ""
              }
            ]
          }
        },
        "NetworkAttributes": {
          "UdpTimeout": 60,
          "SlbUdpTimeout": 60
        },
        "HostDetailInfo": {
          "SerialNumber": null
        },
        "DedicatedHostOwnerId": 0
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

InvalidStatus.ValueNotSupported

The pecified dedicated host status is not supported.

The host is in a state that does not support the current operation.

400

MissingParamter.RegionId

The regionId should not be null.

The RegionId parameter is required.

400

InvalidParameter.DedicatedHostIds

The specified parameter dedicatedHostIds is not valid.

The specified DedicatedHostIds parameter is invalid.

400

InvalidRegion.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidZone.NotFound

The specified parameter ZoneId is not valid.

The specified ZoneId parameter is invalid.

403

InvalidDedicatedHostIds.Malformed

The amount of specified dedicatedHostIds exceeds the limit.

More than 100 dedicated host IDs are specified in the DedicatedHostIds value.

404

InvalidLockReason.NotFound

The specified LockReason is not found.

The specified lockout reason does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDedicatedHosts?updateTime=2025-02-20#workbench-doc-change-demo)

2024-04-11

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDedicatedHosts?updateTime=2024-04-11#workbench-doc-change-demo)

2023-03-16

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDedicatedHosts?updateTime=2023-03-16#workbench-doc-change-demo)
