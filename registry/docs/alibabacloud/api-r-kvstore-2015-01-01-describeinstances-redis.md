Queries the information about one or more Tair (Redis OSS-compatible) instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeInstances)

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

kvstore:DescribeInstances

list

DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/*`

DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID of the instance.

**Note** When you call this operation and specify the **Tag** parameter, you must also specify this parameter.

cn-hangzhou

InstanceIds

string

No

The IDs of the instances that you want to query.

**Note** If you want to specify multiple instance IDs, separate the instance IDs with commas (,). You can specify a maximum of 30 instance IDs in a single request.

r-bp1zxszhcgatnx\*\*\*\*

InstanceStatus

string

No

The state of the instance. Valid values:

-   **Normal**: The instance is normal.
-   **Creating**: The instance is being created.
-   **Changing**: The configurations of the instance are being changed.
-   **Inactive**: The instance is disabled.
-   **Flushing**: The instance is being released.
-   **Released**: The instance is released.
-   **Transforming**: The billing method of the instance is being changed.
-   **Unavailable**: The instance is suspended.
-   **Error**: The instance failed to be created.
-   **Migrating**: The instance is being migrated.
-   **BackupRecovering**: The instance is being restored from a backup.
-   **MinorVersionUpgrading**: The minor version of the instance is being updated.
-   **NetworkModifying**: The network type of the instance is being changed.
-   **SSLModifying**: The SSL certificate of the instance is being changed.
-   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains accessible during the upgrade.

**Note** For more information about instance states, see [Instance states and impacts](/help/en/redis/user-guide/instance-states-and-impacts).

Normal

ChargeType

string

No

The billing method of the instance. Valid values:

-   **PrePaid**: subscription
-   **PostPaid**: pay-as-you-go

PostPaid

NetworkType

string

No

The network type. Valid values:

-   **CLASSIC**
-   **VPC**

CLASSIC

EngineVersion

string

No

The database engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.

Enumerated values:

-   1.0
-   2.8
-   4.0
-   5.0
-   6.0
-   7.0

4.0

InstanceClass

string

No

The instance type of the instance. For more information, see [Instance types](/help/en/redis/instance-types).

redis.master.small.default

VpcId

string

No

The ID of the VPC.

vpc-bp1nme44gek34slfc\*\*\*\*

VSwitchId

string

No

The ID of the vSwitch.

vsw-bp1e7clcw529l773d\*\*\*\*

PageNumber

integer

No

The page number. Pages start from page **1**. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **30**.

10

InstanceType

string

No

The database engine. Valid values:

-   **Tair**: Tair (Enterprise Edition)
-   **Redis**: Redis Open-Source Edition
-   **Memcache**

Redis

SearchKey

string

No

The keyword used for fuzzy search. The keyword can be based on an instance name or an instance ID.

apitest

ArchitectureType

string

No

The architecture of the instance. Valid values:

-   **cluster**: cluster architecture
-   **standard**: standard architecture
-   **rwsplit**: read/write splitting architecture

standard

Expired

string

No

Specifies whether the instance has expired. Valid values:

-   **true**: The instance has expired.
-   **false**: The instance has not expired.

false

ZoneId

string

No

The zone ID of the instance.

cn-hongkong-b

ResourceGroupId

string

No

The ID of the resource group to which the instance belongs.

**Note** You can query resource group IDs by using the Tair (Redis OSS-compatible) console or by calling the [ListResourceGroups](/help/en/resource-management/api-listresourcegroups) operation. For more information, see [View basic information of a resource group](/help/en/resource-management/resource-group/user-guide/view-basic-information-of-a-resource-group).

rg-acfmyiu4ekp\*\*\*\*

GlobalInstance

boolean

No

Specifies whether to return the child instances of distributed instances. Valid values:

-   **true**: Only child instances are returned.
-   **false**: Child instances are not returned.

true

EditionType

string

No

The edition of the instance. Valid values:

-   **Community**: Redis Open-Source Edition
-   **Enterprise**: Tair (Enterprise Edition)

Enterprise

PrivateIp

string

No

The private IP address of the instance.

172.16.49.\*\*\*

Tag

array<object>

No

The tags of the instance.

object

No

The object.

Key

string

No

The tag key. A tag is a key-value pair.

**Note** A maximum of five key-value pairs can be specified at a time.

Storage type

Value

string

No

The tag value.

Local disk

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

1E83311F-0EE4-4922-A3BF-730B312B\*\*\*\*

PageNumber

integer

The page number of the returned page.

1

PageSize

integer

The number of entries returned per page.

30

TotalCount

integer

The total number of instances.

1

Instances

array<object>

Details about the instances.

KVStoreInstance

object

The information about the instance.

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-bp1nme44gek34slfc\*\*\*\*

PrivateIp

string

The private IP address.

**Note** This parameter is not returned when the instance is deployed in the classic network.

172.16.49.\*\*\*

Capacity

long

The storage capacity of the instance. Unit: MB.

4096

ReplacateId

string

The logical ID of the distributed instance.

grr-bp11381ebc16\*\*\*\*

CreateTime

string

The time when the instance was created.

2018-11-07T08:49:00Z

ConnectionDomain

string

The internal endpoint of the instance.

r-bp1zxszhcgatnx\*\*\*\*.redis.rds.aliyuncs.com

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

ArchitectureType

string

The architecture of the instance. Default value: NULL. Valid values:

-   **cluster**: cluster architecture
-   **standard**: standard architecture
-   **rwsplit**: read/write splitting architecture
-   **NULL**: all of the preceding architectures

cluster

NetworkType

string

The network type of the instance. Valid values:

-   **CLASSIC**
-   **VPC**

CLASSIC

ConnectionMode

string

The connection mode of the instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

Standard

Port

long

The service port of the instance.

6379

SecondaryZoneId

string

The ID of the secondary zone.

**Note** If multiple zones are returned for **ZoneId**, such as cn-hangzhou-MAZ10(h,i), this parameter is ignored.

cn-hangzhou-h

EngineVersion

string

The database engine version of the instance.

4.0

PackageType

string

The plan type. Valid values:

-   **standard**: standard plan
-   **customized**: custom plan

standard

Config

string

The parameter configurations of the instance. For more information, see [Modify parameters of an instance](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/).

{\\"maxmemory-policy\\":\\"volatile-lfu\\",\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64,\\"#no\_loose\_disabled-commands\\":\\"flushall,flushdb\\",\\"lazyfree-lazy-eviction\\":\\"yes\\"}

Bandwidth

long

The bandwidth of the instance. Unit: Mbit/s.

96

InstanceName

string

The name of the instance.

apitest

ShardCount

integer

The number of data shards in the cluster instance.

**Note** This parameter is returned only for cloud-native cluster instances or read/write splitting instances.

3

UserName

string

The username used to connect to the instance. By default, a username named after the instance ID is included.

r-bp1zxszhcgatnx\*\*\*\*

GlobalInstanceId

string

The ID of the distributed instance.

**Note** This parameter is returned only if the instance is a child instance of a distributed instance.

gr-bp14rkqrhac\*\*\*\*

QPS

long

The number of queries per second (QPS).

100000

InstanceClass

string

The instance class.

redis.logic.sharding.2g.2db.0rodb.4proxy.default

DestroyTime

string

The time when the instance was deleted.

2019-04-28T10:03:01Z

InstanceId

string

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

InstanceType

string

The database engine of the instance. Valid values:

-   **Tair**
-   **Redis**
-   **Memcache**

Redis

HasRenewChangeOrder

boolean

Indicates whether your Alibaba Cloud account has pending orders for renewal and configuration change. Valid values:

-   **true**
-   **false**

false

RegionId

string

The region ID.

cn-hangzhou

EndTime

string

The time when the subscription instance expires.

2019-06-13T16:00:00Z

VSwitchId

string

The ID of the vSwitch.

vsw-bp1e7clcw529l773d\*\*\*\*

NodeType

string

The node type. Valid values:

-   **double**: The instance contains a master node and a replica node.
-   **single**: The instance contains only a master node. This node type is phased out.

double

Connections

long

The maximum number of connections supported by the instance.

20000

ResourceGroupId

string

The ID of the resource group to which the instance belongs.

rg-acfmyiu4ekp\*\*\*\*

ZoneId

string

The zone ID.

cn-hangzhou-b

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

Normal

ComputingType

string

The type of the computing resource. Valid values:

-   **Ecs**: cloud-native computing service
-   **Machine**: physical machine

Ecs

CloudType

string

This parameter is returned only when the instance is in a cloud box.

cloudbox

EditionType

string

The edition of the instance. Valid values:

-   **Community**: Redis Open-Source Edition
-   **Enterprise**: Tair (Enterprise Edition)

Enterprise

Tags

array<object>

Details about the tags.

Tag

object

The object.

Key

string

The key of the tag.

key1

Value

string

The value of the tag.

value1

ShardClass

string

The shard class. For more information about shard classes, see [Overview](/help/en/redis/product-overview/overview-4/) .

**Note** The overall performance of a cluster instance is calculated by multiplying the class of a single shard (ShardClass) by the number of shards (ShardCount).

redis.shard.small.ce

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

string

The number of read replicas in the primary zone.

**Note** The **ReadOnlyCount** and **SlaveReadOnlyCount** parameters are applicable only to cloud-native instances for which read/write splitting is enabled. If the instance is a cluster instance, the preceding parameters indicate the number of read replicas **per node** in the primary and secondary zones of the instance.

1

SlaveReadOnlyCount

integer

The number of read replicas in the secondary zone.

1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1E83311F-0EE4-4922-A3BF-730B312B****",
  "PageNumber": 1,
  "PageSize": 30,
  "TotalCount": 1,
  "Instances": {
    "KVStoreInstance": [
      {
        "VpcId": "vpc-bp1nme44gek34slfc****",
        "PrivateIp": "172.16.49.***",
        "Capacity": 4096,
        "ReplacateId": "grr-bp11381ebc16****",
        "CreateTime": "2018-11-07T08:49:00Z",
        "ConnectionDomain": "r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com",
        "IsRds": true,
        "ChargeType": "PostPaid",
        "ArchitectureType": "cluster",
        "NetworkType": "CLASSIC",
        "ConnectionMode": "Standard",
        "Port": 6379,
        "SecondaryZoneId": "cn-hangzhou-h",
        "EngineVersion": 4,
        "PackageType": "standard",
        "Config": "{\\\"maxmemory-policy\\\":\\\"volatile-lfu\\\",\\\"EvictionPolicy\\\":\\\"volatile-lru\\\",\\\"hash-max-ziplist-entries\\\":512,\\\"zset-max-ziplist-entries\\\":128,\\\"zset-max-ziplist-value\\\":64,\\\"set-max-intset-entries\\\":512,\\\"hash-max-ziplist-value\\\":64,\\\"#no_loose_disabled-commands\\\":\\\"flushall,flushdb\\\",\\\"lazyfree-lazy-eviction\\\":\\\"yes\\\"}",
        "Bandwidth": 96,
        "InstanceName": "apitest",
        "ShardCount": 3,
        "UserName": "r-bp1zxszhcgatnx****",
        "GlobalInstanceId": "gr-bp14rkqrhac****",
        "QPS": 100000,
        "InstanceClass": "redis.logic.sharding.2g.2db.0rodb.4proxy.default",
        "DestroyTime": "2019-04-28T10:03:01Z",
        "InstanceId": "r-bp1zxszhcgatnx****",
        "InstanceType": "Redis",
        "HasRenewChangeOrder": false,
        "RegionId": "cn-hangzhou",
        "EndTime": "2019-06-13T16:00:00Z",
        "VSwitchId": "vsw-bp1e7clcw529l773d****",
        "NodeType": "double",
        "Connections": 20000,
        "ResourceGroupId": "rg-acfmyiu4ekp****",
        "ZoneId": "cn-hangzhou-b",
        "InstanceStatus": "Normal",
        "ComputingType": "Ecs",
        "CloudType": "cloudbox",
        "EditionType": "Enterprise",
        "Tags": {
          "Tag": [
            {
              "Key": "key1",
              "Value": "value1"
            }
          ]
        },
        "ShardClass": "redis.shard.small.ce",
        "ReplicaCount": 1,
        "SlaveReplicaCount": 1,
        "ReadOnlyCount": 1,
        "SlaveReadOnlyCount": 1
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidInstanceIds.Malformed

The Specified parameter InstanceIds is not valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstances?updateTime=2025-03-25#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstances?updateTime=2025-02-27#workbench-doc-change-demo)

2024-10-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstances?updateTime=2024-10-09#workbench-doc-change-demo)

2024-06-19

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstances?updateTime=2024-06-19#workbench-doc-change-demo)

2023-04-13

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstances?updateTime=2023-04-13#workbench-doc-change-demo)

2022-03-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstances?updateTime=2022-03-07#workbench-doc-change-demo)

2022-03-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeInstances?updateTime=2022-03-07#workbench-doc-change-demo)
