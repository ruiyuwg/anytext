You can call this operation to query the detailed information of an OceanBase cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/OceanBasePro/2019-09-01/DescribeInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/OceanBasePro/2019-09-01/DescribeInstance)

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

oceanbase:DescribeInstance

get

\*Instance

`acs:oceanbase:{#regionId}:{#accountId}:instance/{#InstanceId}`

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

The ID of the OceanBase cluster.

ob317v4uif\*\*\*\*

PageNumber

integer

No

The number of the page to return.

-   Pages start from page 1.
-   Default value: 1.

1

## Response parameters

Parameter

Type

Description

Example

object

The return result of the request.

RequestId

string

The ID of the request.

EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C

Instance

object

The information of the OceanBase cluster.

InstanceId

string

The ID of the OceanBase cluster.

ob317v4uif\*\*\*\*

InstanceName

string

The name of the OceanBase cluster.

ob4test

InstanceClass

string

The specifications of the cluster. You can specify one of the following four plans:

-   8C32G: indicates 8 CPU cores and 32 GB of memory.
-   14C70G: indicates 14 CPU cores and 70 GB of memory.
-   30C180G: indicates 30 CPU cores and 180 GB of memory.
-   62C400G: indicates 62 CPU cores and 400 GB of memory.

14C70G

Series

string

The series of the instance. Valid values:

-   normal: Standard Cluster Edition (Cloud Disk). This is the default value.
    
-   normal\_ssd: Standard Cluster Edition (Local Disk)
    
-   history: History Database Cluster Edition
    

Normal

PayType

string

The billing method of the OceanBase cluster. Valid values:

-   PREPAY: the subscription billing method.
-   POSTPAY: the pay-as-you-go billing method.

PREPAY

CreateTime

string

The time in UTC when the cluster was created.

2021-10-19T07:13:41Z

ExpireTime

string

The time in UTC when the cluster expires.

2021-10-17T16:00:00Z

Version

string

The version of OceanBase Database.

2.2.77

DeployType

string

The deployment type of the cluster. Valid values:

-   multiple: multi-IDC deployment
-   single: single-IDC deployment
-   dual: dual-IDC deployment

multiple

DeployMode

string

The data replica distribution mode of the cluster. Valid values:

-   n: indicates the single-IDC mode.
-   n-n: indicates the dual-IDC mode.
-   n-n-n: indicates the multi-IDC mode.

**Note**  
The integer n represents the number of OBServer nodes in each IDC.

1-1-1

DiskType

string

The type of the storage disk where the cluster is deployed.

The default value is cloud\_essd\_pl1, which indicates an ESSD cloud disk.

cloud\_essd\_pl1

MaintainTime

string

The period in UTC for the daily routine maintenance of the cluster.

19:00Z-20:00Z

DataMergeTime

string

The time when the major compaction of cluster data is performed.

02:00

AutoRenewal

boolean

Indicates whether automatic renewal is enabled.

This parameter is valid only for clusters whose billing methods are set to PREPAY.

true

IsTrustEcs

boolean

Indicates whether trusted ECS instances are used.

true

Status

string

The status of the cluster. Valid values:

-   PENDING\_CREATE: The cluster is being created.
-   ONLINE: The cluster is running.
-   TENANT\_CREATING: The tenant is being created.
-   TENANT\_SPEC\_MODIFYING: The tenant specifications are being modified.
-   EXPANDING: Nodes are being added to the cluster to increase its capacity.
-   REDUCING: Nodes are being removed from the cluster to reduce its capacity.
-   SPEC\_UPGRADING: The service plan is being upgraded.
-   DISK\_UPGRADING: The storage space is being expanded.
-   WHITE\_LIST\_MODIFYING: The whitelist is being modified.
-   PARAMETER\_MODIFYING: Parameters are being modified.
-   SSL\_MODIFYING: The SSL certificate is being changed.
-   PREPAID\_EXPIRE\_CLOSED: The payment is overdue. This parameter is valid for a cluster whose billing method is set to PREPAY.
-   ARREARS\_CLOSED: The payment is overdue. This parameter is valid for a cluster whose billing method is set to POSTPAY.
-   PENDING\_DELETE: The cluster is being deleted.  
    Generally, the cluster is in the ONLINE state.

ONLINE

Resource

object

The information about cluster resources.

Cpu

object

The information about the CPU resources of the cluster.

TotalCpu

long

The total number of CPU cores of the cluster.

14

UsedCpu

long

The number of CPU cores used in the cluster.

10

UnitCpu

long

The number of CPU cores of each replica node in the cluster.

10

OriginalTotalCpu

long

The number of original CPU cores in the cluster.

14

Memory

object

The information about the memory resources of the cluster.

TotalMemory

long

The total memory size of the cluster, in GB.

70

UsedMemory

long

The size of used memory in the cluster, in GB.

10

UnitMemory

long

The memory size of each replica node in the cluster, in GB.

10

OriginalTotalMemory

long

The original memory size of the cluster, in GB.

72

DiskSize

object

The information about the storage resources of the cluster.

TotalDiskSize

long

The total storage space of the cluster, in GB.

200

UsedDiskSize

long

The size of used storage space of the cluster, in GB.

100

UnitDiskSize

long

The storage space of each replica node in the cluster, in GB.

200

DataUsedSize

double

The size of the data disk, in GB.

200

MaxDiskUsedPercent

double

The maximum disk usage, in percentage.

0.14

MaxDiskUsedObServer

array

The maximum disk usage of the OBServer node.

MaxDiskUsedObServer

string

The maximum disk usage of the OBServer node.

i-bp1fhj23fs32dfbg4\*\*\*\*

OriginalTotalDiskSize

long

The original size of the disk.

200

MaxDiskSize

double

The maximum disk size that can be created.

80000

UnitCount

long

The number of resource units in the cluster.

1

LogDiskSize

object

The information about the log disk space of the cluster.

TotalDiskSize

long

The total log disk space of the cluster, in GB.

400

UnitDiskSize

long

The log disk space of each replica node in the cluster. Unit: GB.

200

LogAssignedSize

string

The allocated disk space for log storage, in GB.

0.0

MaxLogAssignedObServer

array

The maximum storage space allocated for.

MaxLogAssignedObServer

string

The list of the OBServer nodes that are allocated the maximum log storage space.

\["i-bp1g\*\*\*\*","i-bp11\*\*\*\*","i-bp19\*\*\*\*"\]

MaxLogAssignedPercent

string

The maximum percentage of space allocated for log storage.

6.68

OriginalTotalDiskSize

integer

The original size of the disk.

200

CapacityUnit

object

The information about capacity units.

MaxCapacityUnit

integer

The maximum number of capacity units.

4

MinCapacityUnit

integer

The minimum number of capacity units.

1

UsedCapacityUnit

string

The number of used capacity units.

2

AutoUpgradeObVersion

boolean

Indicates whether automatic upgrade of the OBServer version is enabled.

true

ObRpmVersion

string

The detailed information of the OBServer version.

2.2.77-20210526202046

IsLatestObVersion

boolean

Indicates whether the OBServer version is the latest.

true

AvailableZones

array

The list of zones.

AvailableZones

string

The list of zones.

cn-hangzhou-i

EnableUpgradeLogDisk

boolean

Indicates whether the log disk specifications can be upgraded.

false

Zones

array

The ID of the zone to which the instance belongs. For more information about how to obtain the list of zones, see [DescribeZones](https://www.alibabacloud.com/help/en/apsaradb-for-oceanbase/latest/api-oceanbasepro-2019-09-01-describezones) .

Zones

string

The ID of the zone to which the instance belongs. For more information about how to obtain the list of zones, see [DescribeZones](https://www.alibabacloud.com/help/en/apsaradb-for-oceanbase/latest/api-oceanbasepro-2019-09-01-describezones) .

cn-hangzhou-h,cn-hangzhou-i,cn-hangzhou-j

InstanceRole

string

The role of the instance.

NORMAL

NodeNum

string

The number of nodes in the cluster. If the cluster is deployed in n-n-n mode, the number of nodes in the cluster equals n × 3.

6

ReplicaMode

string

The number of full-featured replicas. Return value: 3 or 2.

-   3: three full-featured replicas.
-   2: two full-featured replicas.

An OceanBase cluster deployed in three-zone mode supports only three full-featured replicas. An OceanBase cluster deployed in two-zone mode supports only two full-featured replicas. An OceanBase cluster deployed in one single zone supports two or three full-featured replicas.

2F1A

IsolationOptimization

boolean

Specifies whether to enable the control group feature.

false

EnableIsolationOptimization

boolean

Specifies whether to enable isolation optimization.

false

InTempCapacityStatus

boolean

Specifies whether to indicate the temporary status of the capacity.

false

DataDiskAutoScale

boolean

Specifies whether to enable automatic scaling of the data disk.

**Note**  
This parameter is deprecated.

\-

TenantCreatable

object

Specifies whether a tenant can be created.

EnableCreateTenant

boolean

Specifies whether a tenant can be created.

true

DisableCreateTenantReason

string

The reason why you cannot create a tenant in the cluster.

CPU\_NOT\_ENOUGH, MEMORY\_NOT\_ENOUGH, TENANT\_COUNT\_EXCEEDS\_LIMIT

DataDiskAutoScaleConfig

object

Specifies parameters for the automatic scaling of the data disk.

AutoScale

boolean

Specifies whether to enable the automatic scaling of the data disk.

true

Upperbound

long

The maximum space, in GB, to which the data disk can be scaled.

16

UpperThreshold

long

The maximum usage of the data disk, in percentage, that triggers the scaling of the data disk for daily use.

80

UpperMergeThreshold

long

The maximum usage of the data disk, in percentage, that triggers the scaling of the data disk for major compactions.

90

MaxDiskSize

long

The maximum size of the disk, in GB.

80000

ScaleStepInNormal

long

The size of scaling step during daily use.

50

ScaleStepInMerge

long

The size of scaling step during a major compaction.

100

UpperScaleStrategy

string

The scale-out strategy. Valid values: RAW and PERCENTAGE.

RAW

UpperScaleStep

string

The step size of the scale-out.

5

EnableProxyService

boolean

Specifies whether to enable the proxy service.

-   true
-   false

true

ProxyServiceStatus

string

The status of the proxy service.

ONLINE

ProxyClusterId

string

The ID of the proxy cluster.

**Note** This parameter returns a value only if you set the **EnableProxyService** parameter to true.

proxy-56\*\*\*\*a6tg2o

CpuArchitecture

string

The CPU architecture of the cluster.

X86

ReadOnlyResource

object

The information about cluster resources.

Cpu

object

The information about the CPU resources of the cluster.

TotalCpu

long

The total number of CPU cores of the cluster.

14

UsedCpu

long

The number of CPU cores used by the cluster.

10

UnitCpu

long

The number of CPU cores of each replica node in the cluster.

10

OriginalTotalCpu

long

The number of original CPU cores in the cluster.

14

Memory

object

The information about the memory resources of the cluster.

TotalMemory

long

The total memory size of the cluster, in GB.

70

UsedMemory

long

The size of memory used by the cluster, in GB.

10

UnitMemory

long

The memory size of each replica node in the cluster, in GB.

10

OriginalTotalMemory

long

The original memory size of the cluster.

72

DiskSize

object

The information about the storage resources of the cluster.

TotalDiskSize

long

The total storage space of the cluster, in GB.

200

UsedDiskSize

long

The size of used storage space of the cluster, in GB.

100

UnitDiskSize

long

The storage space of each replica node in the cluster, in GB.

200

DataUsedSize

double

The size of the data disk, in GB.

200

MaxDiskUsedPercent

double

The maximum disk usage, in percentage.

0.14

MaxDiskUsedObServer

array

The maximum disk usage of the OBServer node.

MaxDiskUsedObServer

string

The maximum disk usage of the OBServer node.

i-bp1fhj23fs32dfbg4\*\*\*\*

OriginalTotalDiskSize

long

The original size of the disk.

200

MaxDiskSize

double

The maximum disk size that can be created.

80000

UnitCount

long

The number of resource units in the cluster.

1

LogDiskSize

object

The information about the log disk space of the cluster.

TotalDiskSize

long

The information about the log disk space of the cluster.

400

UnitDiskSize

long

The log disk space of each replica node in the cluster, in GB.

200

LogAssignedSize

string

The allocated disk space for log storage, in GB.

0.0

MaxLogAssignedObServer

array

The maximum storage space allocated for.

MaxLogAssignedObServer

string

The list of the OBServer nodes that are allocated the maximum log storage space.

\["i-bp1g\*\*\*\*","i-bp11\*\*\*\*","i-bp19\*\*\*\*"\]

MaxLogAssignedPercent

string

The maximum percentage of space allocated for log storage.

6.68

CapacityUnit

object

The information about capacity units.

MaxCapacityUnit

integer

The maximum number of capacity units.

4

MinCapacityUnit

integer

The minimum number of capacity units.

1

UsedCapacityUnit

string

The number of used capacity units.

2

UnitSpec

string

The unit specification of the proxy service.

2C4G

SharedUnitNumLimit

integer

The maximum number of units of the proxy service in shared mode.

3

ExclusiveUnitNumLimit

integer

The maximum number of units of the proxy service in exclusive mode.

1

EnableReadOnlyReplica

boolean

Indicates whether read-only replicas are supported.

true

EnableReadOnlyReplicaManagement

boolean

Indicates whether read-only replicas can be purchased for the cluster.

false

PrimaryInstance

string

The ID of the primary cluster.

ob3h8ytroxxxxx

PrimaryRegion

string

The region of the primary cluster.

cn-hangzhou

SpecType

string

The specification type.

dedicatedspec

AllowModifyInternetAddressConnectionLimit

boolean

Indicates whether the maximum number of public connections can be modified.

false

AllowCreateProxySqlFirewallRule

boolean

Indicates whether the OceanBase Database Proxy (ODP) SQL firewall is supported.

false

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C",
  "Instance": {
    "InstanceId": "ob317v4uif****",
    "InstanceName": "ob4test",
    "InstanceClass": "14C70G",
    "Series": "Normal",
    "PayType": "PREPAY",
    "CreateTime": "2021-10-19T07:13:41Z",
    "ExpireTime": "2021-10-17T16:00:00Z",
    "Version": "2.2.77",
    "DeployType": "multiple",
    "DeployMode": "1-1-1",
    "DiskType": "cloud_essd_pl1",
    "MaintainTime": "19:00Z-20:00Z",
    "DataMergeTime": "02:00",
    "AutoRenewal": true,
    "IsTrustEcs": true,
    "Status": "ONLINE",
    "Resource": {
      "Cpu": {
        "TotalCpu": 14,
        "UsedCpu": 10,
        "UnitCpu": 10,
        "OriginalTotalCpu": 14
      },
      "Memory": {
        "TotalMemory": 70,
        "UsedMemory": 10,
        "UnitMemory": 10,
        "OriginalTotalMemory": 72
      },
      "DiskSize": {
        "TotalDiskSize": 200,
        "UsedDiskSize": 100,
        "UnitDiskSize": 200,
        "DataUsedSize": 200,
        "MaxDiskUsedPercent": 0.14,
        "MaxDiskUsedObServer": [
          "i-bp1fhj23fs32dfbg4****"
        ],
        "OriginalTotalDiskSize": 200,
        "MaxDiskSize": 80000
      },
      "UnitCount": 1,
      "LogDiskSize": {
        "TotalDiskSize": 400,
        "UnitDiskSize": 200,
        "LogAssignedSize": 0,
        "MaxLogAssignedObServer": [
          [
            "i-bp1g****",
            "i-bp11****",
            "i-bp19****"
          ]
        ],
        "MaxLogAssignedPercent": 6.68,
        "OriginalTotalDiskSize": 200
      },
      "CapacityUnit": {
        "MaxCapacityUnit": 4,
        "MinCapacityUnit": 1,
        "UsedCapacityUnit": 2
      }
    },
    "AutoUpgradeObVersion": true,
    "ObRpmVersion": "2.2.77-20210526202046",
    "IsLatestObVersion": true,
    "AvailableZones": [
      "cn-hangzhou-i"
    ],
    "EnableUpgradeLogDisk": false,
    "Zones": [
      "cn-hangzhou-h,cn-hangzhou-i,cn-hangzhou-j"
    ],
    "InstanceRole": "NORMAL",
    "NodeNum": 6,
    "ReplicaMode": "2F1A",
    "IsolationOptimization": false,
    "EnableIsolationOptimization": false,
    "InTempCapacityStatus": false,
    "DataDiskAutoScale": true,
    "TenantCreatable": {
      "EnableCreateTenant": true,
      "DisableCreateTenantReason": "CPU_NOT_ENOUGH,  MEMORY_NOT_ENOUGH, TENANT_COUNT_EXCEEDS_LIMIT"
    },
    "DataDiskAutoScaleConfig": {
      "AutoScale": true,
      "Upperbound": 16,
      "UpperThreshold": 80,
      "UpperMergeThreshold": 90,
      "MaxDiskSize": 80000,
      "ScaleStepInNormal": 50,
      "ScaleStepInMerge": 100,
      "UpperScaleStrategy": "RAW",
      "UpperScaleStep": 5
    },
    "EnableProxyService": true,
    "ProxyServiceStatus": "ONLINE",
    "ProxyClusterId": "proxy-56****a6tg2o",
    "CpuArchitecture": "X86",
    "ReadOnlyResource": {
      "Cpu": {
        "TotalCpu": 14,
        "UsedCpu": 10,
        "UnitCpu": 10,
        "OriginalTotalCpu": 14
      },
      "Memory": {
        "TotalMemory": 70,
        "UsedMemory": 10,
        "UnitMemory": 10,
        "OriginalTotalMemory": 72
      },
      "DiskSize": {
        "TotalDiskSize": 200,
        "UsedDiskSize": 100,
        "UnitDiskSize": 200,
        "DataUsedSize": 200,
        "MaxDiskUsedPercent": 0.14,
        "MaxDiskUsedObServer": [
          "i-bp1fhj23fs32dfbg4****"
        ],
        "OriginalTotalDiskSize": 200,
        "MaxDiskSize": 80000
      },
      "UnitCount": 1,
      "LogDiskSize": {
        "TotalDiskSize": 400,
        "UnitDiskSize": 200,
        "LogAssignedSize": 0,
        "MaxLogAssignedObServer": [
          [
            "i-bp1g****",
            "i-bp11****",
            "i-bp19****"
          ]
        ],
        "MaxLogAssignedPercent": 6.68
      },
      "CapacityUnit": {
        "MaxCapacityUnit": 4,
        "MinCapacityUnit": 1,
        "UsedCapacityUnit": 2
      }
    },
    "UnitSpec": "2C4G",
    "SharedUnitNumLimit": 3,
    "ExclusiveUnitNumLimit": 1,
    "EnableReadOnlyReplica": true,
    "EnableReadOnlyReplicaManagement": false,
    "PrimaryInstance": "ob3h8ytroxxxxx",
    "PrimaryRegion": "cn-hangzhou",
    "SpecType": "dedicatedspec",
    "AllowModifyInternetAddressConnectionLimit": false,
    "AllowCreateProxySqlFirewallRule": false
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-29

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2025-12-29#workbench-doc-change-demo)

2025-08-05

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2025-08-05#workbench-doc-change-demo)

2025-07-03

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2025-07-03#workbench-doc-change-demo)

2024-09-19

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2024-09-19#workbench-doc-change-demo)

2024-08-15

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2024-08-15#workbench-doc-change-demo)

2024-06-06

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2024-06-06#workbench-doc-change-demo)

2024-04-15

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2024-04-15#workbench-doc-change-demo)

2024-02-02

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2024-02-02#workbench-doc-change-demo)

2023-12-26

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-12-26#workbench-doc-change-demo)

2023-12-07

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-12-07#workbench-doc-change-demo)

2023-11-20

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-11-20#workbench-doc-change-demo)

2023-10-30

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-10-30#workbench-doc-change-demo)

2023-08-21

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-08-21#workbench-doc-change-demo)

2023-07-04

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-07-04#workbench-doc-change-demo)

2023-05-17

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-05-17#workbench-doc-change-demo)

2023-03-21

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2023-03-21#workbench-doc-change-demo)

2022-08-15

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2022-08-15#workbench-doc-change-demo)

2021-08-19

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2021-08-19#workbench-doc-change-demo)

2021-08-19

Add Operation

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2021-08-19#workbench-doc-change-demo)

2021-08-19

API Description Update. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeInstance?updateTime=2021-08-19#workbench-doc-change-demo)
