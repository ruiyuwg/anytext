You can call this operation to query the information of a specific tenant in a specific cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/OceanBasePro/2019-09-01/DescribeTenant)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/OceanBasePro/2019-09-01/DescribeTenant)

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

oceanbase:DescribeTenant

get

\*All Resources

`*`

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

TenantId

string

Yes

The ID of the tenant.

ob2mr3oae0\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The details of the tenant.

RequestId

string

The ID of the request.

EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C

Tenant

object

The information about the tenant.

TenantId

string

The ID of the tenant.

t4louaeei\*\*\*\*

TenantName

string

The name of the tenant.

forMySQLTenant

TenantMode

string

The mode of the tenant. Valid values:

-   Oracle
-   MySQL

MySQL

VpcId

string

The Virtual Private Cloud (VPC) ID of the tenant. If no suitable VPC is available, create a VPC as prompted. For more information, see "What is a VPC".

vpc-bp1d2q3mhg9i23ofi\*\*\*\*

Status

string

The status of the tenant.

-   ONLINE: The tenant is running.
    
-   PENDING\_CREATE: The tenant is being created.
    
-   WAITING\_ALLOCATE\_MASTER\_ADDRESS: The standby cluster is waiting for the primary address to be created.
    
-   ALLOCATING\_MASTER\_ADDRESS: The primary address is being created.
    
-   DELETING\_MASTER\_ADDRESS: The primary address is being deleted.
    
-   ALLOCATING\_INTERNET\_ADDRESS: The Internet address is being created.
    
-   PENDING\_OFFLINE\_INTERNET\_ADDRESS: The Internet address is being deleted.
    
-   ALLOCATING\_READONLY\_ADDRESS: The read-only address is being created.
    
-   DELETING\_READONLY\_ADDRESS: The read-only address is being deleted.
    
-   ALLOCATING\_READWRITE\_ADDRESS: The read/write splitting address is being created.
    
-   DELETING\_READWRITE\_ADDRESS: The read/write splitting address is being deleted.
    
-   ALLOCATING\_CLOGSERVICE\_ADDRESS: The clog address is being created.
    
-   DELETING\_CLOGSERVICE\_ADDRESS: The clog address is being deleted.
    
-   MODIFYING\_ADDRESS: The domain name of the address is being modified.
    
-   MODIFYING\_PRIMARY\_ZONE: The primary zone is being switched.
    
-   MODIFYING\_READONLY\_ADDRESS: The read-only address is being modified.
    
-   MODIFYING\_READWRITE\_ADDRESS: The read/write splitting address is being modified.
    
-   SPEC\_MODIFYING: The specifications of the tenant are being modified.
    
-   WHITE\_LIST\_MODIFYING: The allowlist is being modified.
    
-   CREATING\_BINLOG: Binlogs are being created.
    

ONLINE

EnableInternetAddressService

boolean

Indicates whether the Internet address can be enabled for the tenant.

true

PrimaryZone

string

The primary zone of the tenant.

cn-hangzhou-h

DeployType

string

The deployment type of the cluster. Valid values:

-   multiple: multi-IDC deployment
-   single: single-IDC deployment
-   dual: dual-IDC deployment

multiple

DeployMode

string

The data replica distribution mode of the tenant.

-   For the high availability version, N-N-N indicates the three-zone mode, and N-N indicates the dual-zone or single-zone mode.
-   For the basic version, N indicates the single-zone mode.

**Note**  
N represents the number of nodes in a single zone.

1-1-1

Description

string

The description of the tenant.

paycore database

CreateTime

string

The time when the tenant was created.

2023-04-21 11:15:47.0

TenantResource

object

The resource information of the tenant.

UnitNum

integer

The number of resource units for the tenant.

1

Cpu

object

The information about the CPU resources of the tenant.

UsedCpu

float

The number of used CPU cores of the tenant.

8

TotalCpu

float

The total number of CPU cores of the tenant.

10

UnitCpu

float

The number of CPU cores in each resource unit of the tenant.

8

Memory

object

The information about the memory resources of the tenant.

UsedMemory

float

The size of used memory of the tenant, in GB.

30

TotalMemory

float

The total memory size of the tenant, in GB.

64

UnitMemory

float

The memory size of each resource unit of the tenant, in GB.

32

DiskSize

object

The information about the disk resources of the tenant.

UsedDiskSize

float

The size of used disk space of the tenant, in GB.

86

CapacityUnit

object

The information about capacity units.

MaxCapacityUnit

integer

The maximum number of capacity units.

16

MinCapacityUnit

integer

The minimum number of capacity units.

1

UsedCapacit

integer

The number of used capacity units.

5

LogDiskSize

object

The information about the log disk resources of the tenant.

TotalLogDisk

integer

The total size of log disk of the tenant, in GB.

8.0

UnitLogDisk

integer

The log disk size of each resource unit of the tenant, in GB.

8.0

TenantConnections

array<object>

The connection information of the tenant.

TenantConnections

object

The connection information of the tenant.

IntranetAddress

string

The intranet address for accessing the tenant.

t4nunwxr0\*\*\*\*.oceanbase.aliyuncs.com

IntranetPort

integer

The intranet port for accessing the tenant.

2983

InternetAddress

string

The Internet address for accessing the tenant.

t32a7ru5u\*\*\*\*mo.oceanbase.aliyuncs.com

InternetPort

integer

The Internet port for accessing the tenant.

3306

VpcId

string

The ID of the VPC.

vpc-bp1qiail1asmfe23t\*\*\*\*

VSwitchId

string

The ID of the vSwitch.

vsw-bp1i7b94u2et716yl\*\*\*\*

IntranetAddressMasterZoneId

string

The primary zone corresponding to the address for accessing the tenant.

cn-hangzhou-b

IntranetAddressSlaveZoneId

string

The standby zone corresponding to the address for accessing the tenant.

cn-hangzhou-g

IntranetAddressStatus

string

The status of the intranet address for accessing the tenant.  
The value ONLINE indicates that the address is in service.

ONLINE

ConnectionZones

array

The list of zones corresponding to the tenant connection.

ConnectionZones

string

The zone corresponding to the tenant connection.

cn-hangzhou-b

InternetAddressStatus

string

The status of the Internet address for accessing the tenant. Valid values:

-   CLOSED: The address is disabled.
-   ALLOCATING\_INTERNET\_ADDRESS: An address is being applied for.
-   PENDING\_OFFLINE\_INTERNET\_ADDRESS: The address is being disabled.
-   ONLINE: The address is in service.

CLOSED

TransactionSplit

boolean

Specifies whether to enable transaction splitting.

false

AddressType

string

The type of the address.

-   MASTER: the primary address, which supports both data read and write.
-   READONLY: a read-only address.
-   READWRITE: a read/write splitting address.
-   CLOGSERVICE: a clog service address.

READONLY

EnableTransactionSplit

boolean

Specifies whether to enable transaction splitting.

false

ParallelQueryDegree

long

The degree of parallelism (DOP).

1

TenantEndpointId

string

The ID of the tenant endpoint.

obe-4tw51gp7\*\*\*\*

MaxConnectionNum

long

The maximum number of connections.

5000

ConnectionReplicaType

string

The type of the replica corresponding to the tenant connection.

FULL

ProxyClusterId

string

The ID of the OceanBase Database Proxy (ODP) cluster.

proxy-xxxxxxx

MaxConnectionLimit

long

The current value set for the maximum number of private connections.

1000

InternetMaxConnectionLimit

long

The upper limit of the maximum number of public connections.

4000

IntranetRpcPort

integer

The port for direct loads of private connections.

3307

InternetMaxConnectionNum

long

The current value set for the maximum number of public connections.

2500

InternetRpcPort

integer

The port for direct loads of public connections.

3307

ConnectionLogicalZones

array

The logical zones of the endpoints.

ConnectionLogicalZones

string

The logical zones of the endpoints.

cn-bejing-3-z0,cn-bejing-4-z0

IntranetSqlPort

integer

The port of private SQL connections.

3306

OdpVersion

string

The ODP version.

4.3.1-xxxxxxxxx

TenantZones

array<object>

The information about zones in the tenant.

TenantZones

object

The information about zones in the tenant.

TenantZoneId

string

The ID of the zone.

cn-hangzhou-h

Region

string

The region where the zone of the tenant resides.

cn-hangzhou

TenantZoneRole

string

The role of the zone of the tenant.

ReadWrite

TenantZoneReplicas

array<object>

The zone replicas of the tenant.

TenantZoneReplicas

object

The zone replicas of the tenant.

ZoneReplicaType

string

The type of the zone replica.

FULL

ZoneNodes

string

The number of nodes in the zone.

1

LogicZoneName

string

The name of the logical zone.

cn-shanghai-f-z0

ZoneCopyId

integer

The ID of the zone replica.

2

FullCopyId

integer

The ID of the full-featured replica.

3

ReadOnlyCopyId

string

The ID of the read-only replica.

3

ReadOnlyReplicaType

string

The type of the read-only replica.

ROW\_STORE

ClogServiceStatus

string

The enabling status of the clog service.

-   CLOSED: The clog service is disabled.
-   ONLINE: The clog service is running.

CLOSED

EnableClogService

boolean

Indicates whether the clog service is available. To enable the clog service, submit a ticket.

false

Charset

string

The character set.

utf8mb4

Collation

string

The collation.

utf8mb4\_general\_ci

PrimaryZoneDeployType

string

The deployment type of the primary zone.

Enumeration Value:

-   RANDOM: RANDOM.
-   STATIC: STATIC.

RANDOM

MasterIntranetAddressZone

string

The zone where the primary node is located.

cn-hangzhou-h

PayType

string

The type of the payment.

POSTPAY

InstanceType

string

The type of the instance.

KAFKA\_PUBLIC

Series

string

The series of the instance.

normal

DiskType

string

The type of the disk.

cloud\_essd\_pl1

AvailableZones

array

The list of zones.

AvailableZones

string

The list of zones.

\["cn-hangzhou-i"\]

EnableReadWriteSplit

boolean

Indicates whether to enable read/write splitting endpoint.

false

EnableParallelQuery

boolean

Indicates whether parallel query can be enabled.

true

MaxParallelQueryDegree

long

The maximum value of DOP.

32

EnableBinlogService

boolean

Indicates whether the binlog service is available for application.

true

TimeZone

string

The time zone.

Asia/Shanghai

DataMergeTime

string

The major compaction time of the tenant. This parameter is supported only in OceanBase Database V4.0.0 and later.

02:36Z

ReadOnlyResource

object

The information about read-only resources.

UnitNum

integer

The number of resource units in the tenant.

2

Cpu

object

The number of CPU cores of each replica node in the cluster.

UsedCpu

float

The number of CPU cores used by the cluster.

8

TotalCpu

float

The total number of CPU cores of the tenant.

10

UnitCpu

float

The number of CPU cores in each resource unit of the tenant.

8

Memory

object

The information about the memory resources of the cluster.

UsedMemory

float

The size of memory used by the tenant, in GB.

30

TotalMemory

float

The total memory size of the tenant, in GB.

64

UnitMemory

float

The memory size of each resource unit of the tenant, in GB.

32

DiskSize

object

The size of the data disk.

UsedDiskSize

float

The size of disk space used by the tenant, in GB.

86

CapacityUnit

object

The information about capacity units.

MaxCapacityUnit

integer

The maximum number of capacity units.

16

MinCapacityUnit

integer

The minimum number of capacity units.

1

UsedCapacit

integer

The number of used capacity units.

5

LogDiskSize

object

The information about the log disk resources of the tenant.

TotalLogDisk

integer

The total log disk size of the tenant, in GB.

8.0

UnitLogDisk

integer

The log disk size of each resource unit of the tenant, in GB.

8.0

EnableReadOnlyReplica

boolean

Indicates whether read-only replicas are supported.

true

RecycleBinStatus

string

The status of the recycle bin in the tenant. Valid values:

-   ON: The recycly bin is enabled.
-   OFF: The recycle bin is disabled.

ON

LowerCaseTableNames

byte

Indicates whether the table name is case-sensitive. Valid values:

-   **1**: The table name is case-insensitive.
-   **0**: The table name is case-sensitive.

1

Version

string

The version information.

4.2.1

OdpVersion

string

The ODP version.

4.3.1-xxxxxxxxx

TenantMaxConnections

string

The maximum number of connections allowed in the tenant.

1600

ParameterTemplate

string

The parameter template.

express\_oltp

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C",
  "Tenant": {
    "TenantId": "t4louaeei****",
    "TenantName": "forMySQLTenant",
    "TenantMode": "MySQL",
    "VpcId": "vpc-bp1d2q3mhg9i23ofi****",
    "Status": "ONLINE",
    "EnableInternetAddressService": true,
    "PrimaryZone": "cn-hangzhou-h",
    "DeployType": "multiple",
    "DeployMode": "1-1-1",
    "Description": "paycore database",
    "CreateTime": "2023-04-21 11:15:47.0",
    "TenantResource": {
      "UnitNum": 1,
      "Cpu": {
        "UsedCpu": 8,
        "TotalCpu": 10,
        "UnitCpu": 8
      },
      "Memory": {
        "UsedMemory": 30,
        "TotalMemory": 64,
        "UnitMemory": 32
      },
      "DiskSize": {
        "UsedDiskSize": 86
      },
      "CapacityUnit": {
        "MaxCapacityUnit": 16,
        "MinCapacityUnit": 1,
        "UsedCapacit": 5
      },
      "LogDiskSize": {
        "TotalLogDisk": 8,
        "UnitLogDisk": 8
      }
    },
    "TenantConnections": [
      {
        "IntranetAddress": "t4nunwxr0****.oceanbase.aliyuncs.com",
        "IntranetPort": 2983,
        "InternetAddress": "t32a7ru5u****mo.oceanbase.aliyuncs.com",
        "InternetPort": 3306,
        "VpcId": "vpc-bp1qiail1asmfe23t****",
        "VSwitchId": "vsw-bp1i7b94u2et716yl****",
        "IntranetAddressMasterZoneId": "cn-hangzhou-b",
        "IntranetAddressSlaveZoneId": "cn-hangzhou-g",
        "IntranetAddressStatus": "ONLINE",
        "ConnectionZones": [
          "cn-hangzhou-b"
        ],
        "InternetAddressStatus": "CLOSED",
        "TransactionSplit": false,
        "AddressType": "READONLY",
        "EnableTransactionSplit": false,
        "ParallelQueryDegree": 1,
        "TenantEndpointId": "obe-4tw51gp7****",
        "MaxConnectionNum": 5000,
        "ConnectionReplicaType": "FULL",
        "ProxyClusterId": "proxy-xxxxxxx",
        "MaxConnectionLimit": 1000,
        "InternetMaxConnectionLimit": 4000,
        "IntranetRpcPort": 3307,
        "InternetMaxConnectionNum": 2500,
        "InternetRpcPort": 3307,
        "ConnectionLogicalZones": [
          "cn-bejing-3-z0,cn-bejing-4-z0"
        ],
        "IntranetSqlPort": 3306,
        "OdpVersion": "4.3.1-xxxxxxxxx"
      }
    ],
    "TenantZones": [
      {
        "TenantZoneId": "cn-hangzhou-h",
        "Region": "cn-hangzhou",
        "TenantZoneRole": "ReadWrite",
        "TenantZoneReplicas": [
          {
            "ZoneReplicaType": "FULL",
            "ZoneNodes": 1,
            "LogicZoneName": "cn-shanghai-f-z0",
            "ZoneCopyId": 2,
            "FullCopyId": 3,
            "ReadOnlyCopyId": 3,
            "ReadOnlyReplicaType": "ROW_STORE"
          }
        ]
      }
    ],
    "ClogServiceStatus": "CLOSED",
    "EnableClogService": false,
    "Charset": "utf8mb4",
    "Collation": "utf8mb4_general_ci",
    "PrimaryZoneDeployType": "RANDOM",
    "MasterIntranetAddressZone": "cn-hangzhou-h",
    "PayType": "POSTPAY",
    "InstanceType": "KAFKA_PUBLIC",
    "Series": "normal",
    "DiskType": "cloud_essd_pl1",
    "AvailableZones": [
      [
        "cn-hangzhou-i"
      ]
    ],
    "EnableReadWriteSplit": false,
    "EnableParallelQuery": true,
    "MaxParallelQueryDegree": 32,
    "EnableBinlogService": true,
    "TimeZone": "Asia/Shanghai",
    "DataMergeTime": "02:36Z",
    "ReadOnlyResource": {
      "UnitNum": 2,
      "Cpu": {
        "UsedCpu": 8,
        "TotalCpu": 10,
        "UnitCpu": 8
      },
      "Memory": {
        "UsedMemory": 30,
        "TotalMemory": 64,
        "UnitMemory": 32
      },
      "DiskSize": {
        "UsedDiskSize": 86
      },
      "CapacityUnit": {
        "MaxCapacityUnit": 16,
        "MinCapacityUnit": 1,
        "UsedCapacit": 5
      },
      "LogDiskSize": {
        "TotalLogDisk": 8,
        "UnitLogDisk": 8
      }
    },
    "EnableReadOnlyReplica": true,
    "RecycleBinStatus": "ON",
    "LowerCaseTableNames": 1,
    "Version": "4.2.1",
    "OdpVersion": "4.3.1-xxxxxxxxx",
    "TenantMaxConnections": 1600,
    "ParameterTemplate": "express_oltp"
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-03-17

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2026-03-17#workbench-doc-change-demo)

2025-08-05

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2025-08-05#workbench-doc-change-demo)

2025-07-03

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2025-07-03#workbench-doc-change-demo)

2025-06-06

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2025-06-06#workbench-doc-change-demo)

2024-10-29

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2024-10-29#workbench-doc-change-demo)

2024-08-15

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2024-08-15#workbench-doc-change-demo)

2024-08-01

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2024-08-01#workbench-doc-change-demo)

2024-06-06

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2024-06-06#workbench-doc-change-demo)

2024-04-15

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2024-04-15#workbench-doc-change-demo)

2024-02-02

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2024-02-02#workbench-doc-change-demo)

2023-12-26

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2023-12-26#workbench-doc-change-demo)

2023-10-30

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2023-10-30#workbench-doc-change-demo)

2023-08-25

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2023-08-25#workbench-doc-change-demo)

2023-08-21

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2023-08-21#workbench-doc-change-demo)

2023-08-09

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2023-08-09#workbench-doc-change-demo)

2023-07-04

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2023-07-04#workbench-doc-change-demo)

2023-05-17

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2023-05-17#workbench-doc-change-demo)

2022-09-28

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2022-09-28#workbench-doc-change-demo)

2021-08-19

Add Operation

[View Change Details](https://api.alibabacloud.com/document/OceanBasePro/2019-09-01/DescribeTenant?updateTime=2021-08-19#workbench-doc-change-demo)
