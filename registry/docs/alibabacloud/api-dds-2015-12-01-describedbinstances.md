Queries a list of MongoDB instances.

## Operation description

By default, this operation queries a list of replica set instances, which includes standalone instances. If you do not specify the **DBInstanceType** request parameter, the default value is **replicate**. To query a list of sharded cluster instances, set **DBInstanceType** to **sharding**.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeDBInstances)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeDBInstances)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dds:DescribeDBInstances

get

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/*`

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region ID. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the region ID.

cn-hangzhou

PageNumber

integer

No

The page number. The value must be greater than 0 and no greater than the maximum value of the integer data type. Default value: **1**.

1

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30** (default)
    
-   **50**
    
-   **100**
    

30

DBInstanceId

string

No

The instance ID.

dds-bp199659b178\*\*\*\*

ReplicationFactor

string

No

The number of nodes in the replica set instance. Valid values:

-   **3**
    
-   **5**
    
-   **7**
    

3

DBInstanceDescription

string

No

The instance name. The name must meet the following requirements:

-   It must start with a Chinese character or a letter.
    
-   It can contain digits, Chinese characters, letters, underscores (\_), and hyphens (-).
    
-   It must be 2 to 256 characters in length.
    

测试数据库

ExpireTime

string

No

The expiration time of the instance. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. This parameter is used to filter instances that expire on or before the specified time.

2019-12-26T16:00:00Z

DBInstanceStatus

string

No

The instance status. For more information, see [Instance states](/help/en/mongodb/instance-states).

Running

DBInstanceType

string

No

The instance architecture. Valid values:

-   **sharding**: sharded cluster instance.
    
-   **replicate**: replica set or standalone instance. This is the default value.
    

sharding

DBInstanceClass

string

No

The instance type. For more information, see [Instance types](/help/en/mongodb/product-overview/instance-types/).

dds.mongo.mid

Engine

string

No

The database engine. Set the value to **MongoDB**.

MongoDB

EngineVersion

string

No

The database engine version. Valid values:

-   **7.0**
    
-   **6.0**
    
-   **5.0**
    
-   **4.4**
    
-   **4.2**
    
-   **4.0**
    
-   **3.4**
    

4.0

NetworkType

string

No

The network type of the instance. Valid values:

-   **Classic**: classic network.
    
-   **VPC**: virtual private cloud (VPC).
    

VPC

VpcId

string

No

The VPC ID.

vpc-bp1n3i15v90el48nx\*\*\*\*

VSwitchId

string

No

The vSwitch ID of the VPC.

vsw-bp1vj604nj5a9zz74\*\*\*\*

ChargeType

string

No

The billing method of the instance. Valid values:

-   **PrePaid**: subscription.
    
-   **PostPaid**: pay-as-you-go.
    

PrePaid

ZoneId

string

No

The zone ID. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the zone ID.

cn-hangzhou-b

Expired

string

No

The expiration status of the instance. Valid values:

-   **true**: The instance is expired.
    
-   **false**: The instance is not expired.
    

true

ConnectionDomain

string

No

The endpoint of the node. You can call the [DescribeDBInstanceAttribute](/help/en/mongodb/api-describedbinstanceattribute) operation to query the endpoint.

dds-bp1ea17b41abecf43\*\*\*\*.mongodb.rds.aliyuncs.com

ResourceGroupId

string

No

The resource group ID.

rg-acfmyiu4ekp\*\*\*\*

Tag

array<object>

No

The tags of the instance.

object

No

Key

string

No

The key of tag N. The value of N must be in the range of **1** to **20**.

-   The tag key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
    
-   The tag key can be up to 64 characters in length.
    
-   The tag key cannot be an empty string.
    

testdatabase

Value

string

No

The value of tag N. The value of N must be in the range of **1** to **20**.

-   The tag value cannot start with `aliyun`, `acs`:, `http://`, or `https://`.
    
-   The tag value can be up to 128 characters in length.
    
-   The tag value can be an empty string.
    

apitest

DBNodeType

string

No

Filters instances by type. Valid values:

1.  customized: standalone instances and DBFS instances.
    
2.  standard: standard instances, which include replica set and sharded cluster instances.
    
3.  default: all instances.
    

default

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The number of instances returned.

5

RequestId

string

The request ID.

0E4FE33F-5510-5758-8FA7-A6672CDE\*\*\*\*

PageSize

integer

The number of entries returned per page.

30

PageNumber

integer

The page number.

1

DBInstances

object

DBInstance

array<object>

The details of the instances.

array<object>

CreationTime

string

The time when the instance was created. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2021-03-25T02:18:00Z

ChargeType

string

The billing method of the instance. Valid values:

-   **PrePaid**: subscription.
    
-   **PostPaid**: pay-as-you-go.
    

PrePaid

Tags

object

Tag

array<object>

The details of the resource tags.

object

The details of the resource tags.

Key

string

The tag key.

test

Value

string

The tag value.

api

VpcAuthMode

string

Indicates whether password-free access over a VPC is enabled. Valid values:

-   **Open**: enabled.
    
-   **Close**: disabled.
    

Close

NetworkType

string

The network type of the instance. Valid values:

-   **Classic**: classic network.
    
-   **VPC**: VPC.
    

Classic

LockMode

string

The lock status of the instance. Valid values:

-   **Unlock**: The instance is not locked.
    
-   **ManualLock**: The instance is manually locked.
    
-   **LockByExpiration**: The instance is automatically locked due to expiration.
    
-   **LockByRestoration**: The instance is automatically locked before a rollback.
    
-   **LockByDiskQuota**: The instance is automatically locked because the storage space is full.
    
-   **Released**: The instance is released. In this state, the instance cannot be unlocked. You can only create a new instance from a backup file. The restoration process may take a long time.
    

Unlock

EngineVersion

string

The database engine version. Valid values:

-   **7.0**
    
-   **6.0**
    
-   **5.0**
    
-   **4.4**
    
-   **4.2**
    
-   **4.0**
    
-   **3.4**
    

4.2

MongosList

object

MongosAttribute

array<object>

The details of the Mongos nodes.

**Note**

This parameter is returned only for sharded cluster instances.

object

The details of the Mongos nodes.

**Note**

This parameter is returned only for sharded cluster instances.

NodeClass

string

The instance type of the Mongos node.

dds.mongos.standard

NodeDescription

string

The description of the Mongos node.

测试mongos节点

NodeId

string

The ID of the Mongos node.

s-bp10e3b0d02f\*\*\*\*

DBInstanceDescription

string

The description of the instance.

测试数据库

ExpireTime

string

The time when the instance expires. The time is in the _yyyy-MM-dd_T_HH:mm_Z format. The time is displayed in UTC.

2021-11-25T16:00Z

DBInstanceType

string

The instance architecture. Valid values:

-   **sharding**: sharded cluster instance.
    
-   **replicate**: replica set or standalone instance.
    

sharding

LastDowngradeTime

string

The last time when the instance was downgraded.

2021-05-08

ShardList

object

ShardAttribute

array<object>

The details of the shard nodes.

**Note**

This parameter is returned only for sharded cluster instances.

object

The details of the shard nodes.

**Note**

This parameter is returned only for sharded cluster instances.

NodeClass

string

The instance type of the shard node.

dds.shard.mid

NodeDescription

string

The description of the shard node.

测试shard节点

NodeStorage

integer

The storage space of the shard node. Unit: GB.

10

NodeId

string

The ID of the shard node.

d-bp1cac6f2083\*\*\*\*

ReadonlyReplicas

integer

The number of read-only nodes in the shard node. The value can be an integer from **0** to **5**.

2

DestroyTime

string

The time when the data of the instance is destroyed. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note**

-   For a subscription instance, its computing resources are released on the 16th day after the instance expires. The data is retained for another 7 days. On the 23rd day, the data is deleted and cannot be recovered.
    
-   For a pay-as-you-go instance, its computing resources are released on the 16th day after its payment becomes overdue. The data is retained for another 7 days. On the 23rd day, the data is deleted and cannot be recovered.
    

2021-12-10T16:00:00Z

DBInstanceStatus

string

The instance status. For more information, see [Instance states](/help/en/mongodb/instance-states).

Running

RegionId

string

The region ID of the instance.

cn-hangzhou

DBInstanceStorage

integer

The storage space of the instance.

20

ResourceGroupId

string

The resource group ID.

rg-acfmyiu4ekp\*\*\*\*

ZoneId

string

The zone ID of the instance.

cn-hangzhou-g

DBInstanceId

string

The instance ID.

dds-bp18b0934e70\*\*\*\*

DBInstanceClass

string

The instance type.

dds.mongo.mid

Engine

string

The database engine.

MongoDB

ReplicationFactor

string

The number of nodes in the instance.

**Note**

This parameter is returned only for replica set instances.

3

KindCode

string

The type of the instance. Valid values:

-   **0**: physical server.
    
-   **1**: ECS.
    
-   **2**: Docker.
    
-   **18**: instance on the new Kubernetes-based architecture.
    

1

CapacityUnit

string

The read and write throughput consumed by the instance.

**Note**

This parameter is returned only for serverless instances.

100

StorageType

string

The storage type. Valid values:

-   **cloud\_essd**: ESSD cloud disk.
    
-   **local\_ssd**: local SSD.
    

local\_ssd

BackupRetentionPolicy

integer

The backup retention policy. Valid values:

-   **0**: All backup sets are immediately deleted when the instance is released.
    
-   **1**: An automatic backup is performed when the instance is released, and this backup set is retained for a long time.
    
-   **2**: An automatic backup is performed when the instance is released, and all backup sets of the cluster are retained for a long time.
    

1

ReleaseTime

string

The release time of the instance.

2024-06-17T07:01Z

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 5,
  "RequestId": "0E4FE33F-5510-5758-8FA7-A6672CDE****",
  "PageSize": 30,
  "PageNumber": 1,
  "DBInstances": {
    "DBInstance": [
      {
        "CreationTime": "2021-03-25T02:18:00Z",
        "ChargeType": "PrePaid",
        "Tags": {
          "Tag": [
            {
              "Key": "test",
              "Value": "api"
            }
          ]
        },
        "VpcAuthMode": "Close",
        "NetworkType": "Classic",
        "LockMode": "Unlock",
        "EngineVersion": "4.2",
        "MongosList": {
          "MongosAttribute": [
            {
              "NodeClass": "dds.mongos.standard",
              "NodeDescription": "测试mongos节点",
              "NodeId": "s-bp10e3b0d02f****"
            }
          ]
        },
        "DBInstanceDescription": "测试数据库",
        "ExpireTime": "2021-11-25T16:00Z",
        "DBInstanceType": "sharding",
        "LastDowngradeTime": "2021-05-08",
        "ShardList": {
          "ShardAttribute": [
            {
              "NodeClass": "dds.shard.mid",
              "NodeDescription": "测试shard节点",
              "NodeStorage": 10,
              "NodeId": "d-bp1cac6f2083****",
              "ReadonlyReplicas": 2
            }
          ]
        },
        "DestroyTime": "2021-12-10T16:00:00Z",
        "DBInstanceStatus": "Running",
        "RegionId": "cn-hangzhou",
        "DBInstanceStorage": 20,
        "ResourceGroupId": "rg-acfmyiu4ekp****",
        "ZoneId": "cn-hangzhou-g",
        "DBInstanceId": "dds-bp18b0934e70****",
        "DBInstanceClass": "dds.mongo.mid",
        "Engine": "MongoDB",
        "ReplicationFactor": "3",
        "KindCode": "1",
        "CapacityUnit": "100",
        "StorageType": "local_ssd",
        "BackupRetentionPolicy": 1,
        "ReleaseTime": "2024-06-17T07:01Z"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/DescribeDBInstances#workbench-doc-change-demo) for a complete list.
