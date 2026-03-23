Queries the attributes of a specified cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterAttribute)

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

polardb:DescribeDBClusterAttribute

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The ID of the cluster.

**Note**

You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters in your account, including the cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DescribeType

string

No

Specifies whether to query information about AI nodes.

AI

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DeletionLock

integer

The lock state of the cluster for deletion. Valid values:

-   **0**: The cluster is not locked and can be deleted.
    
-   **1**: The cluster is locked and cannot be deleted.
    

0

Category

string

The [product edition](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series). Valid values:

-   **Normal**: Cluster Edition
    
-   **Basic**: single node
    
-   **Archive**: X-Engine
    
-   **NormalMultimaster**: Multi-master Cluster Edition
    
-   **SENormal**: Standard Edition
    

**Note**

-   PolarDB for PostgreSQL that runs PostgreSQL 11 does not support the single node edition.
    
-   PolarDB for MySQL that runs MySQL 8.0 or 5.7 and PolarDB for PostgreSQL that runs PostgreSQL 14 support the Standard Edition.
    
-   PolarDB for MySQL that runs MySQL 8.0 supports X-Engine and the Multi-master Cluster Edition.
    

Normal

ResourceGroupId

string

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DataLevel1BackupChainSize

integer

The total size of level-1 backups (snapshots). Unit: bytes.

74448896

DBClusterId

string

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBType

string

The database engine type.

MySQL

DBClusterNetworkType

string

The network type of the cluster.

VPC

IsLatestVersion

boolean

Indicates whether the kernel is of the latest version. Valid values:

-   **true**
    
-   **false**
    

false

HasCompleteStandbyRes

boolean

Indicates whether resources of the new primary database are provisioned after a cross-zone failover. Valid values:

-   **true**
    
-   **false**
    

false

HotStandbyCluster

string

Indicates whether the hot standby storage cluster (and standby compute nodes) is enabled. Valid values:

-   **StandbyClusterON**: The hot standby storage cluster or both the hot standby storage cluster and standby compute nodes are enabled.
    
-   **StandbyClusterOFF**: The hot standby storage cluster or both the hot standby storage cluster and standby compute nodes are disabled.
    

StandbyClusterON

DataSyncMode

string

The data replication mode. Valid values:

-   **AsyncSync**: asynchronous
    
-   **SemiSync**: semi-synchronous
    

AsyncSync

StandbyHAMode

string

The cross-zone disaster recovery mode. Valid values:

-   **ON**: The cross-zone disaster recovery mode is enabled.
    
-   **OFF**: The cross-zone disaster recovery mode is disabled.
    
-   **0**: The customer drill mode.
    

OFF

CompressStorageMode

string

Indicates whether storage compression is enabled. Valid values:

-   ON: enabled
    
-   OFF: disabled
    

ON

StorageMax

integer

The maximum storage capacity of the current cluster specifications. Unit: bytes.

10995116277760

DBVersion

string

The database engine version.

8.0

DBNodes

array<object>

The details of the nodes.

object

CreationTime

string

The time when the node was created.

2020-03-23T21:35:43Z

FailoverPriority

integer

The failover priority. Each node has a failover priority. A larger value indicates a higher priority for the node to be promoted to the primary node during a failover. Valid values: 1 to 15.

1

MaxIOPS

integer

The maximum input/output operations per second (IOPS).

32000

DBNodeClass

string

The node specifications.

polar.mysql.x4.large

CpuCores

string

The number of CPU cores of the node.

2

MemorySize

string

The memory size of the node. Unit: MB.

8192

DBNodeRole

string

The role of the node. Valid values:

-   **Writer**: the primary node.
    
-   **Reader**: a read-only node.
    

Reader

ZoneId

string

The ID of the zone.

cn-hangzhou-i

MaxConnections

integer

The maximum number of concurrent connections to the cluster.

8000

DBNodeStatus

string

The status of the node. Valid values:

-   **Creating**
    
-   **Running**
    
-   **Deleting**
    
-   **Rebooting**
    
-   **DBNodeCreating**: A node is being added.
    
-   **DBNodeDeleting**: A node is being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **NetAddressCreating**: A network connection is being created.
    
-   **NetAddressDeleting**: A network connection is being deleted.
    
-   **NetAddressModifying**: A network connection is being modified.
    
-   **MinorVersionUpgrading**: The minor version is being upgraded.
    
-   **Maintaining**: The instance is being maintained.
    
-   **Switching**: A switchover is in progress.
    

Running

DBNodeId

string

The ID of the node.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ImciSwitch

string

Indicates whether the In-Memory Column Index (IMCI) feature is enabled. Valid values:

-   **ON**: enabled
    
-   **OFF**: disabled
    

ON

HotReplicaMode

string

Indicates whether the hot replica feature is enabled. Valid values:

-   **ON**: enabled
    
-   **OFF**: disabled
    

ON

AddedCpuCores

string

The number of CPU cores that are added for the elastic scaling feature within seconds.

6

MasterId

string

The ID of the primary node in a Multi-master Cluster Edition cluster.

pi-bp18z52akld3\*\*\*\*\*

SccMode

string

Indicates whether global consistency (high-performance mode) is enabled for the node. Valid values:

-   **ON**: enabled
    
-   **OFF**: disabled
    

ON

ServerWeight

string

The routing weight. Valid values: 1 to 100. Default value: 1.

1

ServerlessType

string

The Serverless type of the node. Valid values:

-   AgileServerless: agile, which indicates a Serverless node.
    
-   SteadyServerless: steady, which indicates that the Serverless feature is enabled for a node with defined specifications.
    

**Note**

-   This parameter is supported only for Serverless clusters or clusters with defined specifications for which the Serverless feature is enabled. For more information, see [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/).
    

SteadyServerless

SubCluster

string

Indicates whether the node is in the primary zone or a secondary zone. This parameter is mainly used for peer resources. Valid values:

-   Primary: the primary zone
    
-   Standby: a secondary zone
    

Primary

RemoteMemorySize

string

The size of the remote memory. Unit: MB.

3072

Orca

string

The Orca feature. Valid values:

-   on: enabled
    
-   off: disabled
    

off

MultiMasterLocalStandby

string

MultiMasterPrimaryNode

string

DBNodeDescription

string

The node description.

test

SubGroupDescription

string

MirrorInsName

string

The name of the hot replica compute node that corresponds to the node in an architecture where both hot standby storage and hot standby compute are enabled.

pi-bp18z52mirror\*\*\*\*\*

DBNodeCXLRemoteMemory

string

ZoneIds

string

The ID of the zone.

cn-hangzhou-i,cn-hangzhou-g

MaintainTime

string

The maintenance window of the cluster. The time is in the `HH:mmZ-HH:mmZ` format and is in UTC. For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+8).

18:00Z-19:00Z

Engine

string

The cluster engine.

POLARDB

Tags

array<object>

The details of the tags.

object

Key

string

The tag key.

test

Value

string

The tag value.

MySQL

RequestId

string

The ID of the request.

074467EF-86B9-4C23-ACBF-E9B81A\*\*\*\*\*\*

VPCId

string

The ID of the virtual private cloud (VPC).

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SearchClusterStatus

string

VSwitchId

string

The ID of the virtual switch.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterDescription

string

The cluster description.

test

Expired

string

Indicates whether the cluster has expired.

**Note**

This parameter is returned only for subscription clusters.

false

PayType

string

The billing method. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Prepaid

StoragePayType

string

The billing method for storage. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Prepaid

LockMode

string

The lock mode. Valid values:

-   **Unlock**: The cluster is not locked.
    
-   **ManualLock**: The cluster is manually locked.
    
-   **LockByExpiration**: The cluster is automatically locked after it expires.
    

Unlock

SearchStorageUsed

integer

SearchCompressStorageUsed

integer

StorageSpace

integer

The storage space of the subscription cluster. Unit: bytes.

50

DBVersionStatus

string

The status of the minor engine version. Valid values:

-   **Stable**: The current version is stable.
    
-   **Old**: The current version is old. We recommend that you upgrade the cluster to the latest version.
    
-   **HighRisk**: The current version has critical defects. We recommend that you immediately upgrade the cluster to the latest version.
    
-   **Beta**: The current version is a beta version.
    

**Note**

-   For more information about how to upgrade the minor engine version, see [Upgrade versions](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version).
    
-   This parameter is returned only when the **DBType** parameter is set to **MySQL**.
    

Stable

CreationTime

string

The time when the cluster was created.

2020-08-14T05:58:42Z

SQLSize

integer

The storage usage for SQL statements. Unit: bytes. A value of -1 indicates that no data is available.

0

InodeTotal

integer

The maximum number of inodes for the file system.

6,291,456

InodeUsed

integer

The number of used inodes.

4,194,304

BlktagTotal

integer

The maximum number of blktags for the file system.

7,864,320

BlktagUsed

integer

The number of used blktags.

5,242,880

RegionId

string

The ID of the region.

cn-hangzhou

ExpireTime

string

The expiration time of the cluster.

**Note**

This parameter is returned only for subscription clusters. An empty value is returned for pay-as-you-go clusters.

2020-11-14T16:00:00Z

SubCategory

string

The specification type of the compute node. Valid values:

-   **Exclusive**: Dedicated
    
-   **General**: General-purpose
    

**Note**

This parameter is returned only for PolarDB for MySQL Cluster Edition clusters.

Exclusive

IsProxyLatestVersion

boolean

Indicates whether the database proxy is of the latest version. Valid values:

-   **true**
    
-   **false**
    

false

StorageType

string

The storage class. The value is fixed as **HighPerformance**.

HighPerformance

ServerlessType

string

The Serverless type of the cluster. Valid values:

-   AgileServerless: agile, which indicates a Serverless cluster.
    
-   SteadyServerless: steady, which indicates a cluster with defined specifications for which the Serverless feature is enabled.
    

**Note**

This parameter is supported only for Serverless clusters or clusters with defined specifications for which the Serverless feature is enabled.

SteadyServerless

StrictConsistency

string

Indicates whether strong consistency is enabled for the multi-zone data. Valid values:

-   **ON**: Strong consistency is enabled for the multi-zone data. This applies to Standard Edition clusters that are deployed across three zones.
    
-   **OFF**: Strong consistency is not enabled for the multi-zone data.
    

ON

ProxyCpuCores

string

The number of CPU cores of the database proxy.

4

ProxyStandardCpuCores

string

The number of CPU cores of the database proxy with standard specifications.

2

ProxyType

string

The type of the database proxy. Valid values:

-   **Exclusive**: Dedicated Enterprise Edition
    
-   **General** : Standard Enterprise Edition
    

Exclusive

ProxyStatus

string

The status of the database proxy. Valid values:

-   **Creating**
    
-   **Running**
    
-   **Deleting**: The proxy is being released.
    
-   **Rebooting**
    
-   **DBNodeCreating**: A node is being added.
    
-   **DBNodeDeleting**: A node is being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **NetAddressCreating**: A network connection is being created.
    
-   **NetAddressDeleting**: A network connection is being deleted.
    
-   **NetAddressModifying**: A network connection is being modified.
    
-   **Deleted**: The proxy is released.
    

Running

ProxyServerlessType

string

The Serverless type of the database proxy. Valid values:

-   AgileServerless: agile, which indicates a Serverless cluster.
    
-   SteadyServerless: steady, which indicates a cluster with defined specifications (a subscription or pay-as-you-go cluster).
    

SteadyServerless

Architecture

string

The CPU architecture. Valid values:

-   **X86**
    
-   **ARM**
    

X86

AiType

string

The AI node type. Valid values:

-   **SearchNode**: a search node.
    
-   **DLNode**: an AI node.
    

DLNode

ProvisionedIops

string

2500

AiCreatingTime

string

The start time of the free trial for the AI feature.

2024-03-13T01:20:28Z

SupportInstantSwitchWithImci

string

Indicates whether the instant switchover feature that is compatible with IMCI is supported.

ON

Orca

string

The Orca feature. Valid values:

-   on: enabled
    
-   off: disabled
    

ON

SourceDBCluster

string

The source cluster ID.

**Note** This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.

pc-pz51ziv48317b2880

RestoreType

string

The method that is used to restore the cluster. Valid values:

-   **RestoreByTime**: The cluster is restored to a point in time from a level-1 backup.
    
-   **RestoreByBackupSet**: The cluster is restored from a level-1 backup set.
    
-   **RestoreByTimeOss**: The cluster is restored to a point in time from a level-2 backup.
    
-   **RestoreByBackupSetOss**: The cluster is restored from a level-2 backup set.
    
-   **CloneFromSourceCluster**: The cluster is cloned from a source cluster.
    

**Note** This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.

RestoreByTime

RestoreDataPoint

string

-   If RestoreType is set to **RestoreByTime** or **RestoreByTimeOss**, this parameter indicates the point in time for the restoration.
    
-   If RestoreType is set to **RestoreByBackupSet** or **RestoreByBackupSetOss**, this parameter indicates the ID of the backup set that is used for the restoration.
    

**Note** This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.

2179639137

SourceRegionId

string

The region ID of the source cluster.

**Note** This parameter is returned only when the source cluster ID exists.

cn-beijing

ImciAutoIndex

string

The automatic IMCI-based query acceleration feature. Valid values:

-   `ON`: enabled.
    
-   `OFF`: disabled.
    

OFF

AutoUpgradeMinorVersion

string

The method for minor version upgrades.

-   Auto: automatic upgrade
    
-   Manual: manual upgrade
    

Manual

BurstingEnabled

string

Indicates whether the performance burst feature is enabled for the ESSD AutoPL disk. Valid values:

-   **true**: enabled
    
-   **false**: disabled
    

false

RowCompression

string

ImperceptibleSwitch

string

The imperceptible switchover feature. Valid values:

-   `true`: enabled.
    
-   `false`: disabled.
    

StorageUsed

integer

The used storage space. Unit: bytes.

3012558848

CompressStorageUsed

integer

The size of the compressed storage data.

**Note**

This parameter is returned only when the storage compression feature is enabled for the cluster.

15529410560

DBClusterStatus

string

The cluster status. For more information about the valid values, see [Cluster states](/help/en/polardb/polardb-for-mysql/cluster-states).

Running

## Examples

Success response

`JSON` format

```
{
  "DeletionLock": 0,
  "Category": "Normal",
  "ResourceGroupId": "rg-***************",
  "DataLevel1BackupChainSize": 74448896,
  "DBClusterId": "pc-*****************",
  "DBType": "MySQL",
  "DBClusterNetworkType": "VPC",
  "IsLatestVersion": false,
  "HasCompleteStandbyRes": false,
  "HotStandbyCluster": "StandbyClusterON",
  "DataSyncMode": "AsyncSync",
  "StandbyHAMode": "OFF",
  "CompressStorageMode": "ON",
  "StorageMax": 10995116277760,
  "DBVersion": "8.0",
  "DBNodes": [
    {
      "CreationTime": "2020-03-23T21:35:43Z",
      "FailoverPriority": 1,
      "MaxIOPS": 32000,
      "DBNodeClass": "polar.mysql.x4.large",
      "CpuCores": "2",
      "MemorySize": "8192",
      "DBNodeRole": "Reader",
      "ZoneId": "cn-hangzhou-i",
      "MaxConnections": 8000,
      "DBNodeStatus": "Running",
      "DBNodeId": "pi-****************",
      "ImciSwitch": "ON",
      "HotReplicaMode": "ON",
      "AddedCpuCores": "6",
      "MasterId": "pi-bp18z52akld3*****",
      "SccMode": "ON",
      "ServerWeight": "1",
      "ServerlessType": "SteadyServerless",
      "SubCluster": "Primary",
      "RemoteMemorySize": "3072",
      "Orca": "off",
      "MultiMasterLocalStandby": "",
      "MultiMasterPrimaryNode": "",
      "DBNodeDescription": "test",
      "SubGroupDescription": "",
      "MirrorInsName": "pi-bp18z52mirror*****",
      "DBNodeCXLRemoteMemory": ""
    }
  ],
  "ZoneIds": "cn-hangzhou-i,cn-hangzhou-g",
  "MaintainTime": "18:00Z-19:00Z",
  "Engine": "POLARDB",
  "Tags": [
    {
      "Key": "test",
      "Value": "MySQL"
    }
  ],
  "RequestId": "074467EF-86B9-4C23-ACBF-E9B81A******",
  "VPCId": "vpc-*******************",
  "SearchClusterStatus": "",
  "VSwitchId": "vsw-*********************",
  "DBClusterDescription": "test",
  "Expired": "false",
  "PayType": "Prepaid",
  "StoragePayType": "Prepaid",
  "LockMode": "Unlock",
  "SearchStorageUsed": 0,
  "SearchCompressStorageUsed": 0,
  "StorageSpace": 50,
  "DBVersionStatus": "Stable",
  "CreationTime": "2020-08-14T05:58:42Z",
  "SQLSize": 0,
  "InodeTotal": 0,
  "InodeUsed": 0,
  "BlktagTotal": 0,
  "BlktagUsed": 0,
  "RegionId": "cn-hangzhou",
  "ExpireTime": "2020-11-14T16:00:00Z",
  "SubCategory": "Exclusive",
  "IsProxyLatestVersion": false,
  "StorageType": "HighPerformance",
  "ServerlessType": "SteadyServerless",
  "StrictConsistency": "ON",
  "ProxyCpuCores": "4",
  "ProxyStandardCpuCores": "2",
  "ProxyType": "Exclusive",
  "ProxyStatus": "Running",
  "ProxyServerlessType": "SteadyServerless",
  "Architecture": "X86",
  "AiType": "DLNode",
  "ProvisionedIops": "2500",
  "AiCreatingTime": "2024-03-13T01:20:28Z",
  "SupportInstantSwitchWithImci": "ON",
  "Orca": "ON",
  "SourceDBCluster": "pc-pz51ziv48317b2880",
  "RestoreType": "RestoreByTime",
  "RestoreDataPoint": "2179639137",
  "SourceRegionId": "cn-beijing",
  "ImciAutoIndex": "OFF",
  "AutoUpgradeMinorVersion": "Manual",
  "BurstingEnabled": "false",
  "RowCompression": "",
  "ImperceptibleSwitch": "",
  "StorageUsed": 3012558848,
  "CompressStorageUsed": 15529410560,
  "DBClusterStatus": "Running"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

403

Forbidden.RAM

User not authorized to operate on the specified resource, or this API does not support RAM.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClusterAttribute#workbench-doc-change-demo) for a complete list.
