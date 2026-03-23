Creates a DB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDBCluster)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateDBCluster)

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

polardb:CreateDBCluster

create

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

-   polardb:EncryptionRequired

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID.

**Note**

Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the available regions.

cn-hangzhou

ZoneId

string

No

The zone ID.

**Note**

Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the available zones.

cn-hangzhou-j

Architecture

string

No

The CPU architecture. Valid values:

-   X86
    
-   ARM
    

X86

DBType

string

Yes

The database engine. Valid values:

-   **MySQL**
    
-   **PostgreSQL**
    
-   **Oracle**
    

MySQL

DBVersion

string

Yes

The version of the database engine.

-   Valid values for MySQL:
    -   **5.6**
        
    -   **5.7**
        
    -   **8.0**
        
-   Valid values for PostgreSQL:
    -   **11**
        
    -   **14**
        
    -   **15**
        

**Note**

To create a serverless cluster for PolarDB for PostgreSQL, set this parameter to 14.

Valid values for Oracle: 11 14

5.6

DBNodeClass

string

No

The node specifications. For more information, see the following documents:

-   PolarDB for MySQL: [Compute node specifications](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes).
    
-   PolarDB for PostgreSQL (compatible with Oracle): [Compute node specifications](/help/en/polardb/polardb-for-oracle/specifications-of-compute-nodes-2).
    
-   PolarDB for PostgreSQL: [Compute node specifications](/help/en/polardb/polardb-for-postgresql/enterprise-edition-node-specifications-3).
    

**Note**

-   To create a serverless cluster for a PolarDB for MySQL Cluster Edition, set this parameter to **polar.mysql.sl.small**.
    
-   To create a serverless cluster for a PolarDB for MySQL Standard Edition, set this parameter to **polar.mysql.sl.small.c**.
    
-   To create a serverless cluster for a PolarDB for PostgreSQL Cluster Edition, set this parameter to **polar.pg.sl.small**.
    
-   To create a serverless cluster for a PolarDB for PostgreSQL Standard Edition, set this parameter to **polar.pg.sl.small.c**.
    
-   To create a serverless cluster for a PolarDB for PostgreSQL (compatible with Oracle) cluster, set this parameter to **polar.o.sl.small**.
    

polar.mysql.x4.medium

ClusterNetworkType

string

No

The network type of the cluster. Only VPC is supported. Set the value to **VPC**.

VPC

DBClusterDescription

string

No

The name of the cluster. The name must meet the following requirements:

-   It cannot start with `http://` or `https://`.
    
-   It must be 2 to 256 characters in length.
    

test

PayType

string

Yes

The billing method. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Postpaid

AutoRenew

boolean

No

Specifies whether to enable auto-renewal. Valid values:

-   **true**: enables auto-renewal.
    
-   **false**: disables auto-renewal.
    

Default value: **false**.

**Note**

This parameter is valid only if you set the **PayType** parameter to **Prepaid**.

true

Period

string

No

The subscription duration unit of the subscription cluster. This parameter is required if you set the PayType parameter to **Prepaid**. Valid values:

-   **Year**: The subscription duration is in years.
    
-   **Month**: The subscription duration is in months.
    

Month

UsedTime

string

No

The subscription duration. This parameter is required if you set the PayType parameter to **Prepaid**.

-   If you set **Period** to **Month**, the value of **UsedTime** is an integer from 1 to 9.
    
-   If you set **Period** to **Year**, the value of **UsedTime** is an integer from 1 to 3.
    

1

VPCId

string

No

The VPC ID.

vpc-\*\*\*\*\*\*\*\*\*\*

VSwitchId

string

No

The virtual switch ID.

**Note**

If you specify a VPCId, you must also specify this parameter.

vsw-\*\*\*\*\*\*\*\*\*\*

CreationOption

string

No

The method to create the cluster. Valid values:

-   **Normal**: Creates a new PolarDB cluster. For more information about how to perform this operation in the console, see the following documents:
    
    -   [Create a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster)
        
    -   [Create a PolarDB for PostgreSQL cluster](/help/en/polardb/polardb-for-postgresql/create-a-polardb-for-postgresql-cluster)
        
    -   [Create a PolarDB for PostgreSQL (compatible with Oracle) cluster](/help/en/polardb/polardb-for-oracle/create-a-polardb-for-oracle-cluster)
        
-   **CloneFromPolarDB**: Clones data from an existing PolarDB cluster to a new PolarDB cluster. For more information about how to perform this operation in the console, see the following documents:
    
    -   [Clone a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/clone-a-cluster)
        
    -   [Clone a PolarDB for PostgreSQL cluster](/help/en/polardb/polardb-for-postgresql/clone-a-cluster-1)
        
    -   [Clone a PolarDB for PostgreSQL (compatible with Oracle) cluster](/help/en/polardb/polardb-for-oracle/clone-a-cluster)
        
-   **RecoverFromRecyclebin**: Restores data from a released PolarDB cluster to a new PolarDB cluster. For more information about how to perform this operation in the console, see the following documents:
    
    -   [Restore a released PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/restore-a-released-cluster)
        
    -   [Restore a released PolarDB for PostgreSQL cluster](/help/en/polardb/polardb-for-postgresql/restore-a-released-cluster-1)
        
    -   [Restore a released PolarDB for PostgreSQL (compatible with Oracle) cluster](/help/en/polardb/polardb-for-oracle/restore-a-released-cluster-1)
        
-   **CloneFromRDS**: Clones data from an existing ApsaraDB RDS instance to a new PolarDB cluster. For more information about how to perform this operation in the console, see [Clone an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/create-a-polardb-for-mysql-cluster-by-cloning-an-apsaradb-rds-for-mysql-instance).
    
-   **MigrationFromRDS**: Migrates data from an existing ApsaraDB RDS instance to a new PolarDB cluster. The created PolarDB cluster is in read-only mode and has binary logging enabled by default. For more information about how to perform this operation in the console, see [Upgrade an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/overview-43).
    
-   **CreateGdnStandby**: Creates a secondary cluster. For more information about how to perform this operation in the console, see [Add a secondary cluster](/help/en/polardb/polardb-for-mysql/user-guide/create-and-release-a-gdn).
    
-   **UpgradeFromPolarDB**: Upgrades a PolarDB cluster. For more information about how to perform this operation in the console, see [Major engine version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/major-version-upgrades/).
    

Default value: **Normal**.

**Note**

If **DBType** is set to **MySQL** and **DBVersion** is set to **8.0**, this parameter can be set to **CreateGdnStandby**.

Normal

SourceResourceId

string

No

The ID of the source ApsaraDB RDS instance or PolarDB cluster. This parameter is required only if you set **CreationOption** to **MigrationFromRDS**, **CloneFromRDS**, **CloneFromPolarDB**, or **RecoverFromRecyclebin**.

-   If you set **CreationOption** to **MigrationFromRDS** or **CloneFromRDS**, you must set this parameter to the ID of the source ApsaraDB RDS instance. The source ApsaraDB RDS instance must be an ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 High-availability Edition instance.
    
-   If you set **CreationOption** to **CloneFromPolarDB**, you must set this parameter to the ID of the source PolarDB cluster. By default, the new cluster is the same as the source cluster in terms of the database engine. For example, if the source cluster is a MySQL 8.0 cluster, you must set **DBType** to **MySQL** and **DBVersion** to **8.0** for the new cluster.
    
-   If you set **CreationOption** to **RecoverFromRecyclebin**, you must set this parameter to the ID of the released source PolarDB cluster. The database engine of the cluster that you want to restore from the recycle bin must be the same as the database engine of the source cluster. For example, if the source cluster is a MySQL 8.0 cluster, you must set **DBType** to **MySQL** and **DBVersion** to **8.0** for the cluster that you want to restore from the recycle bin.
    

rm-\*\*\*\*\*\*\*\*\*\*\*\*\*

CloneDataPoint

string

No

The point in time for the clone. Valid values:

-   **LATEST**: the latest point in time.
    
-   **BackupID**: the ID of a historical backup set. You must specify the ID of the backup set.
    
-   **Timestamp**: a specific point in time. You must specify the point in time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
    

Default value: **LATEST**.

**Note**

If you set **CreationOption** to **CloneFromRDS**, you can set this parameter only to **LATEST**.

LATEST

ClientToken

string

No

A client token to ensure that the request is idempotent. You can generate the token, but you must ensure that it is unique across different requests. The token is case-sensitive and cannot exceed 64 ASCII characters in length.

6000170000591aed949d0f5\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

SecurityIPList

string

No

The IP address whitelist of the cluster.

**Note**

To add multiple IP addresses, separate them with a comma (,).

10.\*\*\*.\*\*\*.\*\*\*

TDEStatus

boolean

No

Specifies whether to enable transparent data encryption (TDE). Valid values:

-   **true**: enables TDE.
    
-   **false**: disables TDE. This is the default value.
    

**Note**

-   This parameter is valid only if you set **DBType** to **PostgreSQL** or **Oracle**.
    
-   Call the [ModifyDBClusterTDE](/help/en/polardb/polardb-for-mysql/api-modifydbclustertde) operation to enable TDE for a PolarDB for MySQL cluster.
    
-   You cannot disable TDE after it is enabled.
    

true

GDNId

string

No

The ID of the Global Database Network (GDN).

**Note**

This parameter is required if **CreationOption** is set to **CreateGdnStandby**.

gdn-\*\*\*\*\*\*\*\*\*\*\*

CreationCategory

string

No

The edition of the cluster. Valid values:

-   **Normal**: Cluster Edition (default)
    
-   **Basic**: Single Node Edition
    
-   **ArchiveNormal**: X-Engine Edition
    
-   **NormalMultimaster**: Multi-master Cluster Edition
    
-   **SENormal**: Standard Edition
    

**Note**

-   **Basic** is supported for PolarDB for **MySQL** **5.6**, **5.7**, and **8.0**, PolarDB for **PostgreSQL** **14**, and PolarDB for **PostgreSQL (compatible with Oracle) 2.0**.
    
-   **ArchiveNormal** and **NormalMultimaster** are supported for PolarDB for **MySQL** **8.0**.
    
-   **SENormal** is supported for PolarDB for **MySQL** **5.6**, **5.7**, and **8.0** and PolarDB for **PostgreSQL** **14**.
    

For more information about product editions, see [Product editions](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series).

Normal

DefaultTimeZone

string

No

The time zone of the cluster. The value must be a UTC offset on the hour, from \*\*-12:00\*\* to \*\*+13:00\*\*. For example, \*\*00:00\*\*. The default value is \*\*SYSTEM\*\*, which means the cluster uses the same time zone as its region.

**Note**

This parameter is valid only if you set **DBType** to **MySQL**.

SYSTEM

LowerCaseTableNames

string

No

Specifies whether the table names are case-sensitive. Valid values:

-   **1**: The table names are not case-sensitive.
    
-   **0**: The table names are case-sensitive.
    

Default value: **1**.

**Note**

This parameter is valid only if you set **DBType** to **MySQL**.

1

BackupRetentionPolicyOnClusterDeletion

string

No

The backup retention policy for the cluster when it is deleted. Valid values:

-   **ALL**: All backups are permanently retained.
    
-   **LATEST**: The last backup is permanently retained. An automatic backup is performed before the cluster is deleted.
    
-   **NONE**: No backup sets are retained when the cluster is deleted.
    

The default value is **NONE**, which means no backup sets are retained when the cluster is deleted.

**Note**

-   This parameter is valid only if you set **DBType** to **MySQL**.
    
-   This parameter is not supported for serverless clusters.
    

NONE

StorageSpace

integer

No

The storage space of the subscription cluster that uses the subscription billing method for storage. Unit: GB.

**Note**

-   The storage space of a PolarDB for MySQL Enterprise Edition cluster ranges from 10 GB to 50,000 GB.
    
-   The storage space of a PolarDB for MySQL Standard Edition cluster ranges from 20 GB to 64,000 GB.
    
-   If the storage class of the Standard Edition cluster is ESSDAUTOPL, the storage space ranges from 40 GB to 64,000 GB. The step size is 10 GB. You can specify only values such as 40, 50, and 60.
    

50

DBMinorVersion

string

No

The minor version of the database engine. Valid values:

-   **8.0.2**
    
-   **8.0.1**
    

**Note**

This parameter is valid only if you set **DBType** to **MySQL** and **DBVersion** to **8.0**.

8.0.1

ParameterGroupId

string

No

The ID of the parameter template.

**Note**

Call the [DescribeParameterGroups](/help/en/polardb/polardb-for-mysql/api-describeparametergroups) operation to query the parameter templates in a region, including the ID of each parameter template.

pcpg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Tag

array<object>

No

The tags of the cluster.

object

No

Key

string

No

The key of tag N. To add multiple tags to the cluster, click **Add** to add tag keys.

**Note**

You can add up to 20 tags. `Tag.N.Key` corresponds to `Tag.N.Value`.

type

Value

string

No

The value of tag N. To add multiple tags to the cluster, click **Add** to add tag values.

**Note**

You can add up to 20 tags. `Tag.N.Value` corresponds to `Tag.N.Key`.

test

ServerlessType

string

No

The type of the serverless cluster. Set the value to **AgileServerless**.

**Note**

This parameter applies only to serverless clusters.

AgileServerless

ScaleMin

string

No

The minimum number of PolarDB Capacity Units (PCUs) for a single node. Valid values: 1 to 31.

**Note**

This parameter applies only to serverless clusters.

1

ScaleMax

string

No

The maximum number of PCUs for a single node. Valid values: 1 to 32.

**Note**

This parameter applies only to serverless clusters.

3

AllowShutDown

string

No

Specifies whether to enable No-activity Suspension. Valid values:

-   **true**: enables No-activity Suspension.
    
-   **false**: disables No-activity Suspension. This is the default value.
    

**Note**

This parameter applies only to serverless clusters.

true

ScaleRoNumMin

string

No

The minimum number of read-only nodes for scaling. Valid values: 0 to 15.

**Note**

This parameter applies only to serverless clusters.

2

ScaleRoNumMax

string

No

The maximum number of read-only nodes for scaling. Valid values: 0 to 15.

**Note**

This parameter applies only to serverless clusters.

4

StorageType

string

No

The storage class of the Enterprise Edition cluster. Valid values:

-   **PSL5**
    
-   **PSL4**
    

The storage class of the Standard Edition cluster. Valid values:

-   **ESSDPL0**
    
-   **ESSDPL1**
    
-   **ESSDPL2**
    
-   **ESSDPL3**
    
-   **ESSDAUTOPL**
    

PSL4

DBNodeNum

integer

No

The number of nodes for the Standard Edition or Enterprise Edition cluster. Valid values:

-   Standard Edition: 1 to 8. You can add one read/write node and seven read-only nodes.
    
-   Enterprise Edition: 1 to 16. You can add one read/write node and 15 read-only nodes.
    

**Note**

-   By default, an Enterprise Edition cluster has two nodes, and a Standard Edition cluster has one node.
    
-   This parameter is valid only for PolarDB for MySQL.
    
-   You cannot change the number of nodes for a Multi-master Cluster.
    

1

HotStandbyCluster

string

No

Specifies whether to enable the hot standby cluster feature. Valid values:

-   **ON** (default): enables the hot standby storage cluster feature.
    
-   **OFF**: disables the hot standby cluster feature.
    
-   **STANDBY**: enables the Hot Standby Cluster feature.
    
-   **EQUAL**: enables hot standby for both storage and computing.
    
-   **3AZ**: enables strong consistency for multi-zone data.
    

**Note**

**STANDBY** is valid only for PolarDB for PostgreSQL.

ON

StrictConsistency

string

No

Specifies whether to enable strong consistency for multi-zone data. Valid values:

-   **ON**: enables strong consistency for multi-zone data. This value is valid for the 3AZ scenario of the Standard Edition.
    
-   **OFF**: disables strong consistency for multi-zone data.
    

ON

StandbyAZ

string

No

The zone of the hot standby cluster.

**Note**

This parameter is valid only if you enable the hot standby cluster feature or strong consistency for multi-zone data.

cn-hangzhou-g

ProxyType

string

No

The type of the database proxy. Valid values:

-   **EXCLUSIVE**: Dedicated Enterprise Edition
    
-   **GENERAL**: Standard Enterprise Edition
    

**Note**

The proxy type must be consistent with the type of the node specifications of the cluster. For example:

-   If the node specifications are General-purpose, the proxy type must be Standard Enterprise Edition.
    
-   If the node specifications are Dedicated, the proxy type must be Dedicated Enterprise Edition.
    

Exclusive

ProxyClass

string

No

The specifications of the database proxy for the Standard Edition cluster. Valid values:

-   **polar.maxscale.g2.medium.c**: 2 cores.
    
-   **polar.maxscale.g2.large.c**: 4 cores.
    
-   **polar.maxscale.g2.xlarge.c**: 8 cores.
    
-   **polar.maxscale.g2.2xlarge.c**: 16 cores.
    
-   **polar.maxscale.g2.3xlarge.c**: 24 cores.
    
-   **polar.maxscale.g2.4xlarge.c**: 32 cores.
    
-   **polar.maxscale.g2.8xlarge.c**: 64 cores.
    

polar.maxscale.g2.medium.c

LoosePolarLogBin

string

No

Specifies whether to enable binary logging. Valid values:

-   **ON**: enables binary logging for the cluster.
    
-   **OFF**: disables binary logging for the cluster.
    

**Note**

This parameter is valid only if you set **DBType** to **MySQL**.

ON

LooseXEngine

string

No

Specifies whether to enable the X-Engine storage engine. Valid values:

-   **ON**: enables the X-Engine storage engine for the cluster.
    
-   **OFF**: disables the X-Engine storage engine for the cluster.
    

**Note**

This parameter is valid only if you set **CreationOption** to a value other than **CreateGdnStandby**, **DBType** to **MySQL**, and **DBVersion** to **8.0**. The memory of a node with X-Engine enabled must be 8 GB or larger.

ON

LooseXEngineUseMemoryPct

string

No

The percentage of memory that is allocated to the X-Engine storage engine. Valid values: integers from 10 to 90.

**Note**

This parameter is valid only if you set **LooseXEngine** to **ON**.

50

StoragePayType

string

No

The billing method for storage. Valid values:

-   Postpaid: pay-as-you-go by storage capacity.
    
-   Prepaid: subscription by storage space.
    

Prepaid

StorageAutoScale

string

No

Specifies whether to enable automatic storage scaling for a Standard Edition cluster. Valid values:

-   Enable: enables automatic storage scaling.
    
-   Disable: disables automatic storage scaling.
    

Enable

StorageUpperBound

integer

No

The upper limit of the storage space for the automatic scaling of a Standard Edition cluster. Unit: GB.

**Note**

The maximum value is 32,000.

800

ProvisionedIops

integer

No

1000

BurstingEnabled

string

No

Specifies whether to enable the performance burst feature for the ESSD AutoPL disk. Valid values:

-   **true**: enables the feature.
    
-   **false**: disables the feature. This is the default value.
    

**Note**

This parameter is valid only when you set StorageType to ESSDAUTOPL.

false

TargetMinorVersion

string

No

StorageEncryption

boolean

No

Specifies whether to enable disk encryption. Valid values:

-   **true**: enables disk encryption.
    
-   **false**: disables disk encryption. This is the default value.
    

**Note**

This parameter is valid only if you set **DBType** to **MySQL**.

**Note**

This parameter is valid only when the **StorageType** parameter is set to a storage class of the Standard Edition.

StorageEncryptionKey

string

No

The ID of the custom key for disk encryption in the same region as the instance. If you specify this parameter, disk encryption is automatically enabled. After disk encryption is enabled, it cannot be disabled. If you want to use the default service key for disk encryption, leave this parameter empty.

You can view the key ID or create a key in the Key Management Service (KMS) console.

**Note**

This parameter is valid only if you set **DBType** to **MySQL**.

**Note**

This parameter is valid only when the **StorageType** parameter is set to a storage class of the Standard Edition.

SourceUid

integer

No

The UID of the account that owns the source backup set. This parameter is required for cross-account backup and restoration.

1022xxxxxxxx

CloudProvider

string

No

The cloud service provider of the instance.

ENS

EnsRegionId

string

No

The ID of the Edge Node Service (ENS) node. This parameter is required when you create an ENS database.

vn-hanoi-3

AutoUseCoupon

boolean

No

Specifies whether to automatically use a coupon. Valid values:

-   true (default): automatically use a coupon.
    
-   false: do not use a coupon.
    

true

PromotionCode

string

No

The promotion code. If you do not specify this parameter, the default coupon is used.

727xxxxxx934

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DBClusterId

string

The cluster ID.

pc-bp1s826a1up\*\*\*\*\*\*

OrderId

string

The order ID.

211454967\*\*\*\*\*\*

RequestId

string

The request ID.

E56531A4-E552-40BA-9C58-137B80\*\*\*\*\*\*

ResourceGroupId

string

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "DBClusterId": "pc-bp1s826a1up******",
  "OrderId": "211454967******",
  "RequestId": "E56531A4-E552-40BA-9C58-137B80******",
  "ResourceGroupId": "rg-***************"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidBackupRetentionPolicyOnClusterDeletion.Malformed

The specified BackupRetentionPolicyOnClusterDeletion is invalid.

The specified BackupRetentionPolicyOnClusterDeletion parameter is invalid.

400

InvalidLowerCaseTableNames.Malformed

The specified LowerCaseTableNames is invalid.

The specified LowerCaseTableNames parameter is invalid.

400

InvalidDefaultTimeZone.Malformed

The specified DefaultTimeZone is invalid.

The specified DefaultTimeZone parameter is invalid.

400

Location.FailedGetSubDomain

The specified regionId does not match the zoneId or the zoneId does not exist.

The specified region ID or zone ID is invalid or the specified zone ID does not exist.

400

MissParameter.GDNId

The GDNId parameter is required.

The GDNId parameter is required.

400

EntityNotExist.ResourceGroup

The resource group does not exist..

The resource group does not exist.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateDBCluster#workbench-doc-change-demo) for a complete list.
