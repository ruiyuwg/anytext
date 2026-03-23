Queries the attribute of Tair (Redis OSS-compatible) instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeInstanceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeInstanceAttribute)

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

kvstore:DescribeInstanceAttribute

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

CA40C261-EB72-4EDA-AC57-958722162595

Instances

array<object>

Details about the instances.

DBInstanceAttribute

object

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-bp1nme44gek34slfc\*\*\*\*

PrivateIp

string

The private IP address of the instance.

**Note** This parameter is not returned when the instance is deployed in the classic network.

172.16.49.\*\*\*

Capacity

long

The storage capacity of the instance. Unit: MB.

1024

CreateTime

string

The time when the instance was created. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-03-06T10:42:03Z

ConnectionDomain

string

The internal endpoint of the instance.

r-bp1d72gwl41z7f\*\*\*\*.redis.rds.aliyuncs.com

IsRds

boolean

Indicates whether the instance is managed by ApsaraDB RDS. Valid values:

-   **true**
-   **false**

true

ChargeType

string

The billing method of the instance. Valid values:

-   **PrePaid**: subscription
-   **PostPaid**: pay-as-you-go

PostPaid

StorageType

string

The storage type.

essd\_pl1

VpcAuthMode

string

Indicates whether password authentication is enabled. Valid values:

-   **Open**: Password authentication is enabled.
-   **Close**: Password authentication is disabled and [password-free access](/help/en/redis/user-guide/enable-password-free-access) is enabled.

Open

ArchitectureType

string

The architecture of the instance. Valid values:

-   **cluster**: cluster architecture
-   **standard**: standard architecture
-   **rwsplit**: read/write splitting architecture

standard

AvailabilityValue

string

The availability metric of the current month.

100%

NetworkType

string

The network type of the instance. Valid values:

-   **CLASSIC**
-   **VPC**

CLASSIC

Port

long

The service port of the instance.

6379

SecondaryZoneId

string

The ID of the secondary zone.

**Note** This parameter is returned only if the instance has a secondary zone ID.

cn-hongkong-h

PackageType

string

The plan type. Valid values:

-   **standard**: standard plan.
-   **customized**: custom plan. This plan type is phased out.

standard

EngineVersion

string

The database engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.

4.0

Config

string

The parameter configurations of the instance in the JSON format. For more information, see [Parameter descriptions](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/). You can use the [DescribeAuditLogConfig](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeauditlogconfig-redis) operation to query audit log configurations.

{\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}

VpcCloudInstanceId

string

The ID of the instance in the VPC.

r-bp1d72gwl41z7f\*\*\*\*

Bandwidth

long

The bandwidth of the instance. Unit: Mbit/s.

10

InstanceName

string

The name of the instance.

apitest

SecurityIPList

string

The IP addresses in the whitelist.

127.0.0.1

ShardCount

integer

The number of shards. This parameter is available only for instances that are purchased on the China site (aliyun.com).

2

ReplicaCount

integer

The number of replica nodes in the primary zone.

**Note** The **ReplicaCount** and **SlaveReplicaCount** parameters are applicable only to cloud-native instances. If the instance is a cluster instance, the preceding parameters indicate the number of replica nodes **per node** in the primary and secondary zones of the instance.

1

SlaveReplicaCount

integer

The number of replica nodes in the secondary zone.

1

ReadOnlyCount

integer

The number of read replicas. This parameter is available only for read/write splitting instances that use cloud disks.

5

SlaveReadOnlyCount

long

The number of read replicas in the secondary zone. This parameter is returned only after read/write splitting is enabled for the instance across multiple zones.

2

GlobalInstanceId

string

The ID of the distributed instance to which the instance belongs.

**Note** This parameter is returned only when the Tair (Redis OSS-compatible) instance is a child instance of a distributed instance.

gr-bp14rkqrhac\*\*\*\*

QPS

long

The expected maximum queries per second (QPS).

100000

AuditLogRetention

string

The retention period of audit logs. Unit: day. A value of 0 indicates that the audit log feature is disabled. For information about how to enable the feature, see [Enable the audit log feature](/help/en/redis/user-guide/enable-the-new-audit-log-feature/).

15

ZoneType

string

The deployment type of the instance. Valid values:

-   **singlezone**: The instance is deployed in a single zone.
-   **doublezone**: The instance is deployed in two zones of the same region.

singlezone

MaintainStartTime

string

The start time of the maintenance window. The time is in the _HH:mmZ_ format. The time is displayed in UTC.

18:00Z

MaintainEndTime

string

The end time of the maintenance window. The time is in the _HH:mmZ_ format. The time is displayed in UTC.

22:00Z

InstanceClass

string

The instance type. For more information, see [Instance types](/help/en/redis/instance-types).

redis.master.small.default

RealInstanceClass

string

If the instance is a cluster instance that uses cloud disks, this parameter indicates the actual instance type of individual shards in the instance. The InstanceClass parameter indicates the virtual instance type.

**Note** To query fees for instances of the instance type, you can specify the instance type that is returned by this parameter in the [DescribePrice](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeprice-redis) operation.

tair.rdb.with.proxy.1g

InstanceId

string

The ID of the instance.

r-bp1d72gwl41z7f\*\*\*\*

InstanceType

string

The database engine of the instance. Valid values:

-   **Tair**
-   **Redis**
-   **Memcache**

Redis

HasRenewChangeOrder

string

Indicates whether your Alibaba Cloud account has pending orders for renewal and configuration change. Valid values:

-   **true**
-   **false**

false

InstanceReleaseProtection

boolean

Indicates whether the release protection feature is enabled for the instance. Valid values:

-   **true**
-   **false**

false

ReplicationMode

string

The architecture of the replica node. Valid values:

-   **master-slave**: the standard master-replica architecture.
-   **cluster**: the cluster architecture, which includes the read/write splitting instances and cluster instances.

master-slave

RegionId

string

The region ID.

cn-hangzhou

EndTime

string

The time when the subscription expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2019-04-06T10:42:03Z

VSwitchId

string

The ID of the vSwitch.

vsw-bp1e7clcw529l773d\*\*\*\*

ReplicaId

string

The ID of the replica node.

bls-awxxxxxxxxxxxxx

NodeType

string

The node type. Valid values:

-   **double**: The instance contains a master node and a replica node.
-   **single**: The instance is a standalone instance.

double

Connections

long

The maximum number of connections supported by the instance.

10000

BackupLogStartTime

string

The earliest point in time to which data can be restored. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note**

-   This parameter is returned only when the data flashback feature is enabled for the instance. For more information, see [Restore data to a point in time by using the data flashback feature](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time).
    
-   When you call the [RestoreInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-restoreinstance-redis) operation to implement data flashback, you can obtain the earliest point in time for data flashback from the return value of this parameter and set the **RestoreTime** parameter to this point in time.
    

2021-07-06T05:49:55Z

ResourceGroupId

string

The ID of the resource group to which the instance belongs.

rg-acfmyiu4ekp\*\*\*\*

ZoneId

string

The zone ID.

cn-hongkong-b

InstanceStatus

string

The state of the instance. Valid values:

-   **Normal**: The instance is normal.
-   **Creating**: The instance is being created.
-   **Changing**: The configurations of the instance are being changed.
-   **Inactive**: The instance is disabled.
-   **Flushing**: The instance is being released.
-   **Released**: The instance is released.
-   **Transforming**: The billing method of the instance is being changed.
-   **Unavailable**: The instance is unavailable.
-   **Error**: The instance failed to be created.
-   **Migrating**: The instance is being migrated.
-   **BackupRecovering**: The instance is being restored from a backup.
-   **MinorVersionUpgrading**: The minor version of the instance is being updated.
-   **NetworkModifying**: The network type of the instance is being changed.
-   **SSLModifying**: The SSL configurations of the instance are being changed.
-   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains accessible during the upgrade.

**Note** For more information about instance states, see [Instance states and impacts](/help/en/redis/user-guide/instance-states-and-impacts).

Normal

Engine

string

The database engine of the instance. The return value is **Redis**.

Redis

Storage

string

The storage capacity of the cloud disk.

50

CloudType

string

This parameter is returned only when the instance is in a cloud box.

cloudbox

IsOrderCompleted

boolean

Indicates whether the order for instance configuration change has reached the final state. Valid values:

-   **true**: The configuration change has been completed or has not been performed.
-   **false**: The configurations of the instance are being changed.

true

IsSupportTDE

boolean

Indicates whether the transparent data encryption (TDE) feature is supported for the instance. Valid values:

-   **true**: This feature is supported only for DRAM-based classic instances.
-   **false**: This feature is not supported.

true

Tags

array<object>

Details about the tags.

Tag

object

Key

string

The tag key.

tagkey

Value

string

The tag value.

tagvalue

AutoSecondaryZone

boolean

Indicates whether a secondary zone is automatically allocated.

-   **true**
-   **false**

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CA40C261-EB72-4EDA-AC57-958722162595",
  "Instances": {
    "DBInstanceAttribute": [
      {
        "VpcId": "vpc-bp1nme44gek34slfc****",
        "PrivateIp": "172.16.49.***",
        "Capacity": 1024,
        "CreateTime": "2019-03-06T10:42:03Z",
        "ConnectionDomain": "r-bp1d72gwl41z7f****.redis.rds.aliyuncs.com",
        "IsRds": true,
        "ChargeType": "PostPaid",
        "StorageType": "essd_pl1",
        "VpcAuthMode": "Open",
        "ArchitectureType": "standard",
        "AvailabilityValue": "100%",
        "NetworkType": "CLASSIC",
        "Port": 6379,
        "SecondaryZoneId": "cn-hongkong-h",
        "PackageType": "standard",
        "EngineVersion": 4,
        "Config": "{\\\"EvictionPolicy\\\":\\\"volatile-lru\\\",\\\"hash-max-ziplist-entries\\\":512,\\\"zset-max-ziplist-entries\\\":128,\\\"zset-max-ziplist-value\\\":64,\\\"set-max-intset-entries\\\":512,\\\"hash-max-ziplist-value\\\":64}",
        "VpcCloudInstanceId": "r-bp1d72gwl41z7f****",
        "Bandwidth": 10,
        "InstanceName": "apitest",
        "SecurityIPList": "127.0.0.1",
        "ShardCount": 2,
        "ReplicaCount": 1,
        "SlaveReplicaCount": 1,
        "ReadOnlyCount": 5,
        "SlaveReadOnlyCount": 2,
        "GlobalInstanceId": "gr-bp14rkqrhac****",
        "QPS": 100000,
        "AuditLogRetention": 15,
        "ZoneType": "singlezone",
        "MaintainStartTime": "18:00Z",
        "MaintainEndTime": "22:00Z",
        "InstanceClass": "redis.master.small.default",
        "RealInstanceClass": "tair.rdb.with.proxy.1g",
        "InstanceId": "r-bp1d72gwl41z7f****",
        "InstanceType": "Redis",
        "HasRenewChangeOrder": false,
        "InstanceReleaseProtection": false,
        "ReplicationMode": "master-slave",
        "RegionId": "cn-hangzhou",
        "EndTime": "2019-04-06T10:42:03Z",
        "VSwitchId": "vsw-bp1e7clcw529l773d****",
        "ReplicaId": "bls-awxxxxxxxxxxxxx",
        "NodeType": "double",
        "Connections": 10000,
        "BackupLogStartTime": "2021-07-06T05:49:55Z",
        "ResourceGroupId": "rg-acfmyiu4ekp****",
        "ZoneId": "cn-hongkong-b",
        "InstanceStatus": "Normal",
        "Engine": "Redis",
        "Storage": 50,
        "CloudType": "cloudbox",
        "IsOrderCompleted": true,
        "IsSupportTDE": true,
        "Tags": {
          "Tag": [
            {
              "Key": "tagkey",
              "Value": "tagvalue"
            }
          ]
        },
        "AutoSecondaryZone": true
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-12

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2025-11-12#workbench-doc-change-demo)

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2025-03-25#workbench-doc-change-demo)

2025-02-18

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2025-02-18#workbench-doc-change-demo)

2024-10-09

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2024-10-09#workbench-doc-change-demo)

2023-12-27

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2023-12-27#workbench-doc-change-demo)

2023-10-13

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2023-10-13#workbench-doc-change-demo)

2023-03-08

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2023-03-08#workbench-doc-change-demo)

2022-07-14

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstanceAttribute?updateTime=2022-07-14#workbench-doc-change-demo)
