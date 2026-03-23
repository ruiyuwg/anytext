Queries the details of an ApsaraDB for MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeDBInstanceAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeDBInstanceAttribute)

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

dds:DescribeDBInstanceAttribute

get

\*dbinstance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Engine

string

No

The database engine. Set the value to **MongoDB**.

MongoDB

DBInstanceId

string

Yes

The instance ID.

dds-bp11483712c1\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group. For more information, see [View the basic information of a resource group](/help/en/resource-management/resource-group/user-guide/view-basic-information-of-a-resource-group).

**Note**

Only available on the Alibaba Cloud China site (www.aliyun.com).

rg-acfmyiu4ekp\*\*\*\*

IsDelete

boolean

No

Indicates if the instance is deleted. Valid values:

-   **false**: The instance is running.
    
-   **true**: The instance is deleted.
    

false

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The details of the instance.

RequestId

string

The request ID.

A935A8EE-A6CC-53DE-98BA-20ABAA7E632B

DBInstances

object

DBInstance

array<object>

The details of the instance.

array<object>

The details of the instance.

CreationTime

string

The time when the instance was created. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2022-01-02T07:43:59Z

ReplicaSets

object

ReplicaSet

array<object>

The details of the replica set instance.

**Note**

Returned when the instance is a replica set.

object

The details of the replica set instance.

**Note**

Returned when the instance is a replica set.

VSwitchId

string

The vSwitch ID.

**Note**

Returned when the network type is VPC.

vpc-bp1jk5vwkcri27qme\*\*\*\*

ConnectionPort

string

The connection port of the node.

3717

ReplicaSetRole

string

The role of the node. Valid values:

-   **Primary**: the primary node.
    
-   **Secondary**: a secondary node.
    

Primary

ConnectionDomain

string

The endpoint of the node.

dds-bp11483712c1\*\*\*\*.mongodb.rds.aliyuncs.com

VPCCloudInstanceId

string

The VPC instance ID of the replica set node.

**Note**

Returned when the network type is VPC.

dds-bp11483712c1\*\*\*\*

NetworkType

string

The network type. Valid values:

-   **Classic**: classic network.
    
-   **VPC**: VPC.
    

VPC

VPCId

string

The VPC ID.

**Note**

Returned when the network type is VPC.

vpc-bp1jk5vwkcri27qme\*\*\*\*

ReplacateId

string

The logical ID of the Global Distributed Cache instance.

**Note**

You can no longer purchase new instances of this type. This parameter is returned only for existing Global Distributed Cache instances.

bls-m\*\*\*\*

Tags

object

Tag

array<object>

A list of tags attached to the instance.

object

A list of tags attached to the instance.

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

The password-free access mode over a private network. Valid values:

-   **Open**: Password-free access is enabled.
    
-   **Close**: Password-free access is disabled. You must use a password to access the instance.
    
-   **NotSupport**: The instance does not support this feature.
    

Open

NetworkType

string

The network type of the instance. Valid values:

-   **Classic**: classic network.
    
-   **VPC**: VPC.
    

VPC

LockMode

string

The lock status of the instance. Valid values:

-   **Unlock**: The instance is not locked.
    
-   **ManualLock**: The instance is manually locked.
    
-   **LockByExpiration**: The instance is automatically locked due to expiration.
    
-   **LockByRestoration**: The instance is automatically locked before a rollback.
    
-   **LockByDiskQuota**: The instance is automatically locked because the disk space is exhausted.
    

Unlock

EngineVersion

string

The major version of the database engine.

4.4

MaxIOPS

integer

The maximum input/output operations per second (IOPS) of the instance.

1000

MaxMBPS

integer

The maximum throughput of the disk, in MB/s.

350

VPCCloudInstanceIds

string

The VPC instance ID.

**Note**

Returned when the network type is VPC.

**Important**

This parameter is deprecated.

dds-bp11483712c1\*\*\*\*

MongosList

object

MongosAttribute

array<object>

A list of Mongos node information.

**Note**

Returned when the instance is a sharded cluster.

object

A list of Mongos node information.

**Note**

Returned when the instance is a sharded cluster.

VpcCloudInstanceId

string

The VPC instance ID of the Mongos node.

s-bp1d8c262a158\*\*\*\*

LockMode

string

The lock status of the instance. Valid values:

-   **Unlock**: The instance is not locked.
    
-   **ManualLock**: The instance is manually locked.
    
-   **LockByExpiration**: The instance is automatically locked due to expiration.
    
-   **LockByRestoration**: The instance is automatically locked before a rollback.
    
-   **LockByDiskQuota**: The instance is automatically locked because the disk space is exhausted.
    

Unlock

MaxIOPS

integer

The maximum IOPS of the Mongos node.

800

VSwitchId

string

The vSwitch ID.

**Note**

Returned when the network type is VPC.

vsw-bp1vj604nj5a9zz74\*\*\*\*

NodeClass

string

The instance type of the Mongos node.

dds.mongos.mid

MaxConnections

integer

The maximum number of connections to the Mongos node.

1000

Port

integer

The connection port of the Mongos node.

3717

VPCId

string

The VPC ID.

**Note**

Returned when the network type is VPC.

vpc-bp1n3i15v90el48nx\*\*\*\*

ConnectSting

string

The endpoint of the Mongos node.

**Warning**

This parameter is being deprecated. Use the ConnectString parameter instead.

s-bp1d8c262a15\*\*\*\*.mongodb.rds.aliyuncs.com

NodeDescription

string

The name of the Mongos node.

mongos1

NodeId

string

The ID of the Mongos node.

s-bp1d8c262a15\*\*\*\*

Status

string

The status of the Mongos node. For more information, see [Instance states](/help/en/mongodb/instance-states).

Running

CurrentKernelVersion

string

The minor engine version of the MongoDB node.

mongodb\_20220518\_4.0.21

ConnectString

string

The endpoint of the Mongos node.

s-bp1d8c262a15\*\*\*\*.mongodb.rds.aliyuncs.com

ProtocolType

string

The protocol type of the instance. Valid values:

-   **mongodb**: MongoDB protocol.
    
-   **dynamodb**: DynamoDB protocol.
    

**Note**

Returned when the instance is a sharded cluster.

mongodb

DBInstanceDescription

string

The instance name.

测试数据库

CurrentKernelVersion

string

The minor engine version of the instance.

5.0.5-20220721143518\_0

DBInstanceReleaseProtection

boolean

Indicates whether release protection is enabled for the instance. Valid values:

-   **true**: Release protection is enabled.
    
-   **false**: Release protection is disabled.
    

false

ExpireTime

string

The expiration time of the subscription instance. The time is in the _yyyy-MM-dd_T_HH:mm_Z format. The time is displayed in UTC.

**Note**

Returned when the charge type is prepaid.

2022-02-05T16:00Z

MaintainStartTime

string

The start time of the maintenance window. The time is in the _HH:mm_Z format. The time is displayed in UTC.

18:00Z

DBInstanceType

string

The instance type. Valid values:

-   **replicate**: replica set instance.
    
-   **sharding**: sharded cluster instance.
    

replicate

LastDowngradeTime

string

The time when the instance was last downgraded.

2022-01-08

ShardList

object

ShardAttribute

array<object>

A list of shard node information.

**Note**

Returned when the instance is a sharded cluster.

object

A list of shard node information.

**Note**

Returned when the instance is a sharded cluster.

LockMode

string

The lock mode of the cluster. Valid values:

-   **Unlock**: The cluster is not locked.
    
-   **ManualLock**: The cluster is manually locked.
    
-   **LockByExpiration**: The cluster is automatically locked due to expiration.
    
-   **LockByRestoration**: The cluster is automatically locked before a rollback.
    
-   **LockByDiskQuota**: The cluster is automatically locked because the disk space is exhausted.
    

Unlock

MaxIOPS

integer

The maximum IOPS of the shard node.

8000

ConnectString

string

The endpoint of the shard node.

d-bp1af0680a9c6d3\*\*\*\*.mongodb.rds.aliyuncs.com:\*\*\*\*

NodeClass

string

The instance type of the shard node.

dds.shard.mid

MaxConnections

integer

The maximum number of connections to the shard node.

8000

Port

integer

The port of the shard node.

3717

NodeDescription

string

The name of the shard node.

testshard

NodeId

string

The ID of the shard node.

d-bp16e09d9c5d\*\*\*\*

NodeStorage

integer

The storage space of the shard node. Unit: GB.

10

ReadonlyReplicas

integer

The number of read-only nodes in the shard node. Valid values: integers from **0** to **5**.

0

Status

string

The status of the shard node. For more information, see [Instance states](/help/en/mongodb/instance-states).

Running

MaxDiskMbps

string

The maximum disk throughput of the shard node.

350

CurrentKernelVersion

string

The minor engine version of the MongoDB node.

mongodb\_20220518\_4.0.21

ReplicaSetName

string

The name of the shard node.

mgset-xxxx

MaintainEndTime

string

The end time of the maintenance window. The time is in the _HH:mm_Z format. The time is displayed in UTC.

03:00Z

DBInstanceStatus

string

The instance status. For more information, see [Instance states](/help/en/mongodb/instance-states).

Running

VPCId

string

The VPC ID.

**Note**

Returned when the network type is VPC.

vpc-bp1n3i15v90el48nx\*\*\*\*

RegionId

string

The region ID of the instance.

cn-hangzhou

DBInstanceStorage

integer

The storage space of the instance.

10

ReplicaSetName

string

The name of the replica set instance.

**Note**

Returned when the instance is a replica set.

mgset-10ace\*\*\*\*

VSwitchId

string

The vSwitch ID.

**Note**

Returned when the network type is VPC.

vsw-bp1oo2a7isyrb8igf\*\*\*\*

StorageEngine

string

The storage engine of the instance.

WiredTiger

ConfigserverList

object

ConfigserverAttribute

array<object>

A list of Configserver node information.

**Note**

Returned when the instance is a sharded cluster.

object

A list of Configserver node information.

**Note**

Returned when the instance is a sharded cluster.

MaxIOPS

integer

The maximum IOPS of the Configserver node.

1000

LockMode

string

The lock status of the instance. Valid values:

-   **Unlock**: The instance is not locked.
    
-   **ManualLock**: The instance is manually locked.
    
-   **LockByExpiration**: The instance is automatically locked due to expiration.
    
-   **LockByRestoration**: The instance is automatically locked before a rollback.
    
-   **LockByDiskQuota**: The instance is automatically locked because the disk space is exhausted.
    

Unlock

ConnectString

string

The endpoint of the Configserver node.

dds-bp18b0934e7053e4-cs\*\*\*\*.mongodb.rds.aliyuncs.com

NodeClass

string

The instance type of the Configserver node.

dds.cs.mid

MaxConnections

integer

The maximum number of connections to the Configserver node.

1000

Port

integer

The port of the Configserver node.

3717

NodeDescription

string

The name of the Configserver node.

testConfigserver

NodeId

string

The ID of the Configserver node.

dds-bp11483712c1\*\*\*\*-cs

NodeStorage

integer

The storage space of the Configserver node. Unit: GB.

20

Status

string

The status of the ConfigServer node. For more information, see [Instance states](/help/en/mongodb/instance-states).

Running

CurrentKernelVersion

string

The minor engine version of the MongoDB node.

mongodb\_20220518\_4.0.21

ResourceGroupId

string

The ID of the resource group to which the instance belongs.

**Note**

Returned only on the Alibaba Cloud China site (www.aliyun.com).

rg-acfmyiu4ekp\*\*\*\*

ZoneId

string

The zone ID of the instance.

cn-hangzhou-b

MaxConnections

integer

The maximum number of connections to the instance.

500

DBInstanceId

string

The instance ID.

dds-bp11483712c1\*\*\*\*

DBInstanceClass

string

The instance type.

dds.mongo.mid

Engine

string

The database engine.

MongoDB

ReadonlyReplicas

string

The number of read-only nodes in the instance.

1

ReplicationFactor

string

The number of nodes in the instance.

**Note**

Returned when the instance is a replica set.

3

KindCode

string

The type of the instance. Valid values:

-   **0**: an instance that uses local disks.
    
-   **3**: a standalone instance.
    
-   **18**: an instance that uses cloud disks.
    

18

CapacityUnit

string

The read and write throughput consumed by the instance.

100

ChargeType

string

The billing method of the instance. Valid values:

-   **PrePaid**: subscription.
    
-   **PostPaid**: pay-as-you-go.
    

PostPaid

StorageType

string

The storage class. Valid values:

**cloud\_essd1**: enhanced SSD (ESSD) PL1 disk. **cloud\_essd2**: ESSD PL2 disk. **cloud\_essd3**: ESSD PL3 disk. **local\_ssd**: local SSD. **cloud\_essd\_dbfs\_s**: DBFS-based shared storage disk.

cloud\_essd1

DestroyTime

string

The time when the data of the instance is destroyed. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2021-12-10T16:00:00Z

DBInstanceOrderStatus

string

The state of the order that is generated for the instance. Valid values:

-   **all\_completed**: All orders are being provisioned or are complete.
    
-   **order\_unpaid**: The instance has an unpaid order.
    
-   **order\_wait\_for\_produce**: The order is pending provisioning.
    

**Note**

The order fulfillment process is as follows: An order is placed and paid, submitted for provisioning, and then the instance is provisioned.

-   If the order status remains **order\_wait\_for\_produce** for a long time, an issue occurred during submission. The system automatically retries.
    
-   The instance status changes only when the instance is being provisioned or is complete. For example, the status changes to Upgrading or Running.
    

all\_completed

Encrypted

boolean

Indicates whether disk encryption is enabled.

true

EncryptionKey

string

The ID of the KMS key used for disk encryption.

07609cc3-3109-408f-a35e-c548e776da0b

SyncPercent

string

The data synchronization progress in percentage. When an instance is undergoing a configuration change, data synchronization is required. You can check this parameter to view the synchronization progress.

0.8

UseClusterBackup

boolean

Indicates whether the cluster backup mode is enabled. Valid values:

-   **true**: The cluster backup mode is enabled.
    
-   **false**: The cluster backup mode is disabled.
    

true

BurstingEnabled

boolean

Indicates whether the bursting feature is enabled.

true

ProvisionedIops

integer

The provisioned performance.

1960

DisasterRecoveryInfo

string

Information about the source and destination instances of a Global Distributed Cache instance.

{"relations":\[{"destInsName":"dds-bp11483712c1\*\*\*\*","destRegionId":"cn-hangzhou","srcInsName":"dds-7xv054b9c43c\*\*\*\*","srcRegionId":"cn-guangzhou"}\]}

SearchNodeClass

string

The specifications of the Search node for the configuration change.

mdb.shard.2x.xlarge.d

SearchNodeStorage

integer

The storage capacity of the Search node for the configuration change.

20

SearchNodeCount

integer

The number of Search nodes for the configuration change.

2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A935A8EE-A6CC-53DE-98BA-20ABAA7E632B",
  "DBInstances": {
    "DBInstance": [
      {
        "CreationTime": "2022-01-02T07:43:59Z",
        "ReplicaSets": {
          "ReplicaSet": [
            {
              "VSwitchId": "vpc-bp1jk5vwkcri27qme****",
              "ConnectionPort": "3717",
              "ReplicaSetRole": "Primary",
              "ConnectionDomain": "dds-bp11483712c1****.mongodb.rds.aliyuncs.com",
              "VPCCloudInstanceId": "dds-bp11483712c1****",
              "NetworkType": "VPC",
              "VPCId": "vpc-bp1jk5vwkcri27qme****"
            }
          ]
        },
        "ReplacateId": "bls-m****",
        "Tags": {
          "Tag": [
            {
              "Key": "test",
              "Value": "api"
            }
          ]
        },
        "VpcAuthMode": "Open",
        "NetworkType": "VPC",
        "LockMode": "Unlock",
        "EngineVersion": "4.4",
        "MaxIOPS": 1000,
        "MaxMBPS": 350,
        "VPCCloudInstanceIds": "dds-bp11483712c1****",
        "MongosList": {
          "MongosAttribute": [
            {
              "VpcCloudInstanceId": "s-bp1d8c262a158****",
              "LockMode": "Unlock",
              "MaxIOPS": 800,
              "VSwitchId": "vsw-bp1vj604nj5a9zz74****",
              "NodeClass": "dds.mongos.mid",
              "MaxConnections": 1000,
              "Port": 3717,
              "VPCId": "vpc-bp1n3i15v90el48nx****",
              "ConnectSting": "s-bp1d8c262a15****.mongodb.rds.aliyuncs.com",
              "NodeDescription": "mongos1",
              "NodeId": "s-bp1d8c262a15****",
              "Status": "Running",
              "CurrentKernelVersion": "mongodb_20220518_4.0.21",
              "ConnectString": "s-bp1d8c262a15****.mongodb.rds.aliyuncs.com"
            }
          ]
        },
        "ProtocolType": "mongodb",
        "DBInstanceDescription": "测试数据库",
        "CurrentKernelVersion": "5.0.5-20220721143518_0",
        "DBInstanceReleaseProtection": false,
        "ExpireTime": "2022-02-05T16:00Z",
        "MaintainStartTime": "18:00Z",
        "DBInstanceType": "replicate",
        "LastDowngradeTime": "2022-01-08",
        "ShardList": {
          "ShardAttribute": [
            {
              "LockMode": "Unlock",
              "MaxIOPS": 8000,
              "ConnectString": "d-bp1af0680a9c6d3****.mongodb.rds.aliyuncs.com:****",
              "NodeClass": "dds.shard.mid",
              "MaxConnections": 8000,
              "Port": 3717,
              "NodeDescription": "testshard",
              "NodeId": "d-bp16e09d9c5d****",
              "NodeStorage": 10,
              "ReadonlyReplicas": 0,
              "Status": "Running",
              "MaxDiskMbps": "350",
              "CurrentKernelVersion": "mongodb_20220518_4.0.21",
              "ReplicaSetName": "mgset-xxxx"
            }
          ]
        },
        "MaintainEndTime": "03:00Z",
        "DBInstanceStatus": "Running",
        "VPCId": "vpc-bp1n3i15v90el48nx****",
        "RegionId": "cn-hangzhou",
        "DBInstanceStorage": 10,
        "ReplicaSetName": "mgset-10ace****",
        "VSwitchId": "vsw-bp1oo2a7isyrb8igf****",
        "StorageEngine": "WiredTiger",
        "ConfigserverList": {
          "ConfigserverAttribute": [
            {
              "MaxIOPS": 1000,
              "LockMode": "Unlock",
              "ConnectString": "dds-bp18b0934e7053e4-cs****.mongodb.rds.aliyuncs.com",
              "NodeClass": "dds.cs.mid",
              "MaxConnections": 1000,
              "Port": 3717,
              "NodeDescription": "testConfigserver",
              "NodeId": "dds-bp11483712c1****-cs",
              "NodeStorage": 20,
              "Status": "Running",
              "CurrentKernelVersion": "mongodb_20220518_4.0.21"
            }
          ]
        },
        "ResourceGroupId": "rg-acfmyiu4ekp****",
        "ZoneId": "cn-hangzhou-b",
        "MaxConnections": 500,
        "DBInstanceId": "dds-bp11483712c1****",
        "DBInstanceClass": "dds.mongo.mid",
        "Engine": "MongoDB",
        "ReadonlyReplicas": "1",
        "ReplicationFactor": "3",
        "KindCode": "18",
        "CapacityUnit": "100",
        "ChargeType": "PostPaid",
        "StorageType": "cloud_essd1",
        "DestroyTime": "2021-12-10T16:00:00Z",
        "DBInstanceOrderStatus": "all_completed",
        "Encrypted": true,
        "EncryptionKey": "07609cc3-3109-408f-a35e-c548e776da0b",
        "SyncPercent": "0.8",
        "UseClusterBackup": true,
        "BurstingEnabled": true,
        "ProvisionedIops": 1960,
        "DisasterRecoveryInfo": "{\"relations\":[{\"destInsName\":\"dds-bp11483712c1****\",\"destRegionId\":\"cn-hangzhou\",\"srcInsName\":\"dds-7xv054b9c43c****\",\"srcRegionId\":\"cn-guangzhou\"}]}",
        "SearchNodeClass": "mdb.shard.2x.xlarge.d",
        "SearchNodeStorage": 20,
        "SearchNodeCount": 2
      }
    ]
  }
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

VpcCloudInstanceIdNumError

Get vpcCloudInstanceId number error.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/DescribeDBInstanceAttribute#workbench-doc-change-demo) for a complete list.
