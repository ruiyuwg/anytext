Queries the attributes of an PolarDB on ENS cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDbClusterAttributeZonal)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDbClusterAttributeZonal)

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

polardb:DescribeDbClusterAttributeZonal

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DescribeType

string

No

Specifies whether to obtain information about AI-related nodes.

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
    
-   **Basic**: Single Node
    
-   **Archive**: X-Engine
    
-   **NormalMultimaster**: Multi-master Cluster Edition
    
-   **SENormal**: Standard Edition
    

**Note**

-   PolarDB for PostgreSQL clusters of PostgreSQL 11 do not support the single node edition.
    
-   PolarDB for MySQL clusters of 8.0 and 5.7, and PolarDB for PostgreSQL clusters of PostgreSQL 14 support the Standard Edition.
    
-   PolarDB for MySQL clusters of 8.0 support X-Engine and the Multi-master Cluster Edition.
    

Normal

ResourceGroupId

string

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

DataLevel1BackupChainSize

integer

The total size of level-1 backups (snapshots). Unit: bytes.

74448896

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

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

Indicates whether the cluster uses the latest kernel version. Valid values:

-   **true**: Yes
    
-   **false**: No
    

false

HasCompleteStandbyRes

boolean

Indicates whether resources of the new primary database are supplemented after a cross-zone failover. Valid values:

-   **true**: Yes
    
-   **false**: No
    

false

HotStandbyCluster

string

Indicates whether the hot standby storage cluster (and standby compute nodes) feature is enabled. Valid values:

-   **StandbyClusterON**: The hot standby storage cluster feature or both the hot standby storage cluster and standby compute node features are enabled.
    
-   **StandbyClusterOFF**: The hot standby storage cluster feature or both the hot standby storage cluster and standby compute node features are disabled.
    

StandbyClusterON

DataSyncMode

string

The data replication relationship mode. Valid values:

-   **AsyncSync**: Asynchronous
    
-   **SemiSync**: Semi-synchronous
    

AsyncSync

StandbyHAMode

string

The cross-zone disaster recovery mode. Valid values:

-   **ON**: The cross-zone disaster recovery mode is enabled.
    
-   **OFF**: The cross-zone disaster recovery mode is disabled.
    
-   **0**: Customer drill mode.
    

OFF

CompressStorageMode

string

Indicates whether storage compression is enabled. Valid values:

-   ON: Enabled
    
-   OFF: Disabled
    

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

The details of the node information.

object

DBNodeStatus

string

The node status. Valid values:

-   **Creating**: The node is being created.
    
-   **Running**: The node is running.
    
-   **Deleting**: The node is being deleted.
    
-   **Rebooting**: The node is being restarted.
    
-   **DBNodeCreating**: A node is being added.
    
-   **DBNodeDeleting**: A node is being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **NetAddressCreating**: A network connection is being created.
    
-   **NetAddressDeleting**: A network connection is being deleted.
    
-   **NetAddressModifying**: A network connection is being modified.
    
-   **MinorVersionUpgrading**: The minor version is being updated.
    
-   **Maintaining**: The instance is under maintenance.
    
-   **Switching**: A failover is in progress.
    

Running

SubGroupDescription

string

SubGroupDescription

SubGroupDescription

AddedCpuCores

string

The number of CPU cores for bursting.

6

Orca

string

The Orca feature. Valid values:

-   on: Enabled
    
-   off: Disabled
    

off

DBNodeRole

string

The node role. Valid values:

-   **Writer**: The primary node.
    
-   **Reader**: The read-only node.
    

Reader

SubCluster

string

Indicates whether the node is in the primary or secondary zone. This parameter is mainly used for resource peering. Valid values:

-   Primary: The primary zone
    
-   Standby: The secondary zone
    

Primary

ImciSwitch

string

Indicates whether the In-Memory Column Index (IMCI) feature is enabled. Valid values:

-   **ON**: Enabled
    
-   **OFF**: Disabled
    

ON

DBNodeId

string

The node ID.

pi-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RemoteMemorySize

string

The size of the remote memory. Unit: MB.

3072

MultiMasterLocalStandby

string

MultiMasterLocalStandby

MultiMasterLocalStandby

MultiMasterPrimaryNode

string

MultiMasterPrimaryNode

MultiMasterPrimaryNode

SccMode

string

Indicates whether the global consistency (high-performance mode) feature is enabled for the node. Valid values:

-   **ON**: Enabled
    
-   **OFF**: Disabled
    

ON

FailoverPriority

integer

The failover priority. Each node has a failover priority. A higher priority value indicates a higher probability that the node is elected as the primary node during a failover. Valid values: 1 to 15.

1

ServerWeight

string

The routing weight. Valid values: 1 to 100. Default value: 1.

1

DBNodeDescription

string

The node description.

test

MemorySize

string

The memory size of the node. Unit: MB.

8192

MirrorInsName

string

The name of the hot replica compute node that corresponds to the node in an architecture where hot standby storage and hot standby compute are enabled.

pi-bp18z52mirror\*\*\*\*\*

ZoneId

string

The zone ID.

cn-hangzhou-d

MaxConnections

integer

The maximum number of concurrent connections to the cluster.

8000

MaxIOPS

integer

The maximum number of input/output operations per second (IOPS).

32000

DBNodeClass

string

The node specifications.

polar.mysql.x4.large

ServerlessType

string

The Serverless type. Valid values:

-   AgileServerless: Agile
    
-   SteadyServerless: Steady
    

AgileServerless

CreationTime

string

The time when the cluster was created.

2020-08-14T05:58:42Z

CpuCores

string

The number of CPU cores in the node.

2

MasterId

string

The ID of the primary node in a Multi-master Cluster Edition cluster.

pi-bp18z52akld3\*\*\*\*\*

HotReplicaMode

string

Indicates whether hot standby is enabled. Valid values:

-   **ON**: Enabled
    
-   **OFF**: Disabled
    

ON

ZoneIds

string

The zone ID.

cn-hangzhou-i,cn-hangzhou-g

MaintainTime

string

The maintenance window of the cluster. The time is in the `HH:mmZ-HH:mmZ` format and is displayed in UTC. For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+8).

18:00Z-19:00Z

Engine

string

The database engine.

POLARDB

Tags

array<object>

The details of the tags.

object

Value

string

The tag value.

MySQL

Key

string

The tag key.

test

RequestId

string

The request ID.

074467EF-86B9-4C23-ACBF-E9B81A\*\*\*\*\*\*

VPCId

string

The virtual private cloud (VPC) ID.

vpc-\*\*\*\*\*\*\*\*\*\*

DBClusterStatus

string

The cluster status. Valid values:

-   **Creating**: The cluster is being created.
    
-   **Running**: The cluster is running.
    
-   **Deleting**: The cluster is being released.
    
-   **Rebooting**: The cluster is being restarted.
    
-   **DBNodeCreating**: A node is being added.
    
-   **DBNodeDeleting**: A node is being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **NetAddressCreating**: A network connection is being created.
    
-   **NetAddressDeleting**: A network connection is being deleted.
    
-   **NetAddressModifying**: A network connection is being modified.
    
-   **Deleted**: The cluster is released.
    
-   **ClassChanged**: Resources are being reclaimed after an upgrade or downgrade.
    

Running

VSwitchId

string

The virtual switch ID.

vsw-\*\*\*\*\*\*\*\*\*\*

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

-   **Postpaid**: Pay-as-you-go.
    
-   **Prepaid**: Subscription.
    

Prepaid

StoragePayType

string

The billing method for storage. Valid values:

-   **Postpaid**: Pay-as-you-go.
    
-   **Prepaid**: Subscription.
    

Prepaid

LockMode

string

The lock mode. Valid values:

-   **Unlock**: The cluster is not locked.
    
-   **ManualLock**: The cluster is manually locked.
    
-   **LockByExpiration**: The cluster is automatically locked upon expiration.
    

Unlock

StorageUsed

integer

The used storage space. Unit: bytes.

3012558848

CompressStorageUsed

integer

The size of the compressed data in storage.

**Note**

This parameter is returned only when storage compression is enabled for the cluster.

15529410560

StorageSpace

integer

The storage capacity. Unit: GB.

50

DBVersionStatus

string

The status of the current minor version of the database. Valid values:

-   **Stable**: The current version is stable.
    
-   **Old**: The current version is old. We recommend that you upgrade the cluster to the latest version.
    
-   **HighRisk**: The current version has critical bugs. Upgrade the cluster to the latest version immediately.
    
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

The storage usage for SQL. Unit: bytes. A value of -1 indicates that no data is available.

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

The region ID.

cn-hangzhou

ExpireTime

string

The expiration time of the cluster.

**Note**

This parameter is returned only for **Prepaid** (subscription) clusters. An empty value is returned for **Postpaid** (pay-as-you-go) clusters.

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

Indicates whether the database proxy uses the latest version. Valid values:

-   **true**: Yes
    
-   **false**: No
    

false

StorageType

string

The storage class of the Enterprise Edition. Valid values:

-   **PSL5**
    
-   **PSL4**
    

The storage class of the Standard Edition. Valid values:

-   **ESSDPL0**
    
-   **ESSDPL1**
    
-   **ESSDPL2**
    
-   **ESSDPL3**
    
-   **ESSDAUTOPL**
    

ESSDPL0

ServerlessType

string

The Serverless type. Valid values:

-   AgileServerless: Agile
    
-   SteadyServerless: Steady
    

AgileServerless

StrictConsistency

string

Indicates whether strong consistency is enabled for the multi-zone cluster. Valid values:

-   **ON**: Strong consistency is enabled for the multi-zone cluster. This applies to Standard Edition clusters that are deployed in three zones.
    
-   **OFF**: Strong consistency is not enabled for the multi-zone cluster.
    

ON

ProxyCpuCores

string

The number of CPU cores for the database proxy.

4

ProxyStandardCpuCores

string

The number of CPU cores for the database proxy with standard specifications.

2

ProxyType

string

The type of the database proxy. Valid values:

-   **Exclusive**: Dedicated Enterprise Edition
    
-   **General**: Standard Enterprise Edition
    

Exclusive

ProxyStatus

string

The status of the database proxy. Valid values:

-   **Creating**: The proxy is being created.
    
-   **Running**: The proxy is running.
    
-   **Deleting**: The proxy is being released.
    
-   **Rebooting**: The proxy is being restarted.
    
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

-   AgileServerless: Agile. This indicates a Serverless cluster.
    
-   SteadyServerless: Steady. This indicates a cluster with defined specifications (a subscription or pay-as-you-go cluster).
    

SteadyServerless

Architecture

string

The CPU architecture. Valid values:

-   **X86**
    
-   **ARM**
    

x86

AiType

string

The AI node type. Valid values:

-   **SearchNode**: Search node.
    
-   **DLNode**: AI node.
    

DLNode

ProvisionedIops

string

1000

AiCreatingTime

string

The start time of the free trial for the AI feature

2024-03-13T01:20:28Z

SupportInstantSwitchWithImci

string

Indicates whether the failover with hot replica feature that is compatible with the IMCI feature is supported.

ON

Orca

string

The Orca feature. Valid values:

-   on: Enabled
    
-   off: Disabled
    

ON

SourceDBCluster

string

The source cluster ID.

**Note**

This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.

pc-pz51ziv48317b2880

RestoreType

string

The method used to restore the cluster. Valid values:

-   **RestoreByTime**: The cluster is restored from a point in time based on a level-1 backup.
    
-   **RestoreByBackupSet**: The cluster is restored from a backup set based on a level-1 backup.
    
-   **RestoreByTimeOss**: The cluster is restored from a point in time based on a level-2 backup.
    
-   **RestoreByBackupSetOss**: The cluster is restored from a backup set based on a level-2 backup.
    
-   **CloneFromSourceCluster**: The cluster is cloned from a source cluster.
    

**Note**

This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.

RestoreByTime

RestoreDataPoint

string

-   If RestoreType is set to **RestoreByTime** or **RestoreByTimeOss**, this parameter indicates the point in time for the restoration.
    
-   If RestoreType is set to **RestoreByBackupSet** or **RestoreByBackupSetOss**, this parameter indicates the ID of the backup set that is used for the restoration.
    

**Note**

This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.

2179639137

SourceRegionId

string

The ID of the region where the source cluster resides.

**Note**

This parameter is returned only if a source cluster ID exists.

cn-beijing

ImciAutoIndex

string

The automatic IMCI-based query acceleration feature. Valid values:

-   `ON`: Enabled.
    
-   `OFF`: Disabled.
    

OFF

AutoUpgradeMinorVersion

string

The upgrade method for the minor version

-   Auto: Automatic upgrade
    
-   Manual: Manual upgrade
    

Auto

BurstingEnabled

string

Indicates whether the I/O performance burst feature is enabled for the ESSD AutoPL disk. Valid values:

-   **true**: Enabled
    
-   **false**: Disabled
    

false

RowCompression

string

RowCompression

OFF

ImperceptibleSwitch

string

Failover with hot replica. Valid values:

-   `true`: Enabled.
    
-   `false`: Disabled.
    

False

DBClusterClass

string

The cluster specifications.

polar.mysql.x8.medium.c

## Examples

Success response

`JSON` format

```
{
  "DeletionLock": 0,
  "Category": "Normal",
  "ResourceGroupId": "rg-************",
  "DataLevel1BackupChainSize": 74448896,
  "DBClusterId": "pc-**************",
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
      "DBNodeStatus": "Running",
      "SubGroupDescription": "SubGroupDescription",
      "AddedCpuCores": "6",
      "Orca": "off",
      "DBNodeRole": "Reader",
      "SubCluster": "Primary",
      "ImciSwitch": "ON",
      "DBNodeId": "pi-****************",
      "RemoteMemorySize": "3072",
      "MultiMasterLocalStandby": "MultiMasterLocalStandby",
      "MultiMasterPrimaryNode": "MultiMasterPrimaryNode",
      "SccMode": "ON",
      "FailoverPriority": 1,
      "ServerWeight": "1",
      "DBNodeDescription": "test",
      "MemorySize": "8192",
      "MirrorInsName": "pi-bp18z52mirror*****",
      "ZoneId": "cn-hangzhou-d\t\n",
      "MaxConnections": 8000,
      "MaxIOPS": 32000,
      "DBNodeClass": "polar.mysql.x4.large",
      "ServerlessType": "AgileServerless",
      "CreationTime": "2020-08-14T05:58:42Z",
      "CpuCores": "2",
      "MasterId": "pi-bp18z52akld3*****",
      "HotReplicaMode": "ON"
    }
  ],
  "ZoneIds": "cn-hangzhou-i,cn-hangzhou-g",
  "MaintainTime": "18:00Z-19:00Z",
  "Engine": "POLARDB",
  "Tags": [
    {
      "Value": "MySQL",
      "Key": "test"
    }
  ],
  "RequestId": "074467EF-86B9-4C23-ACBF-E9B81A******",
  "VPCId": "vpc-**********",
  "DBClusterStatus": "Running",
  "VSwitchId": "vsw-**********",
  "DBClusterDescription": "test",
  "Expired": "false",
  "PayType": "Prepaid",
  "StoragePayType": "Prepaid",
  "LockMode": "Unlock",
  "StorageUsed": 3012558848,
  "CompressStorageUsed": 15529410560,
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
  "StorageType": "ESSDPL0",
  "ServerlessType": "AgileServerless",
  "StrictConsistency": "ON",
  "ProxyCpuCores": "4",
  "ProxyStandardCpuCores": "2",
  "ProxyType": "Exclusive",
  "ProxyStatus": "Running",
  "ProxyServerlessType": "SteadyServerless",
  "Architecture": "x86",
  "AiType": "DLNode",
  "ProvisionedIops": "1000",
  "AiCreatingTime": "2024-03-13T01:20:28Z",
  "SupportInstantSwitchWithImci": "ON",
  "Orca": "ON",
  "SourceDBCluster": "pc-pz51ziv48317b2880",
  "RestoreType": "RestoreByTime",
  "RestoreDataPoint": "2179639137",
  "SourceRegionId": "cn-beijing",
  "ImciAutoIndex": "OFF",
  "AutoUpgradeMinorVersion": "Auto",
  "BurstingEnabled": "false",
  "RowCompression": "OFF",
  "ImperceptibleSwitch": "False",
  "DBClusterClass": "polar.mysql.x8.medium.c"
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDbClusterAttributeZonal#workbench-doc-change-demo) for a complete list.
