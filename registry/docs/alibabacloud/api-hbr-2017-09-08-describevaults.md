Describes one or more backup vaults that meet specified criteria.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeVaults)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeVaults)

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

hbr:DescribeVaults

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

VaultId

string

No

The ID of the backup vault.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

VaultRegionId

string

No

The ID of the region where the backup vault resides.

cn-shanghai

Status

string

No

The status of the backup vault.

-   **UNKNOWN**: The status is unknown.
    
-   **INITIALIZING**: The backup vault is being initialized.
    
-   **CREATED**: The backup vault has been created.
    
-   **ERROR**: An error occurred.
    

CREATED

PageNumber

integer

No

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

VaultType

string

No

The type of the backup vault. Valid values:

-   **STANDARD**: standard backup vault. This type of vault can be used for ECS file backup, OSS backup, and NAS backup.
    
-   **OTS\_BACKUP**: Tablestore backup vault. This type of vault is dedicated to Tablestore backup.
    

STANDARD

Tag

array<object>

No

The tags. You can specify a maximum of 20 tags.

6a745bceffb042959b3b5206d6f12ad1

object

No

The tag.

Key

string

No

The key of the tag.

key1

Value

string

No

The value of the tag.

value1

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

VaultName

string

No

The name of the backup vault. The name must be 1 to 64 characters in length.

vaultname

VaultOwnerId

integer

No

The ID of the Alibaba Cloud account that owns the backup vault.

144\*\*\*\*\*\*732

Replication

boolean

No

Specifies whether to query the backup vaults that are used as replication destinations.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The message that is returned. If the request is successful, "successful" is returned. If the request fails, an error message is returned.

successful

PageNumber

integer

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

TotalCount

integer

The total number of backup vaults that are returned.

8

Vaults

object

Vault

array<object>

The list of backup vaults.

{'Vault': \[\]}

array<object>

The list of backup vaults.

Status

string

The status of the backup vault.

-   **UNKNOWN**: The status is unknown.
    
-   **INITIALIZING**: The backup vault is being initialized.
    
-   **CREATED**: The backup vault has been created.
    
-   **ERROR**: An error occurred.
    

CREATED

VaultId

string

The ID of the backup vault.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ChargeType

string

The billing method of the backup vault.

FREE

VaultType

string

The type of the backup vault. The value is fixed as **STANDARD**, which indicates a standard backup vault.

STANDARD

Dedup

boolean

Indicates whether the deduplication feature is enabled.

true

ReplicationSourceVaultId

string

The ID of the source vault for geo-redundancy.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

IndexUpdateTime

integer

The time when the index was updated.

1639645628

Description

string

The description of the vault.

vault description

VaultStorageClass

string

The storage class of the backup vault. The value is fixed as **STANDARD**.

STANDARD

Retention

integer

The retention period of the backup vault. Unit: days.

2

CreatedTime

integer

The time when the backup vault was created. This value is a UNIX timestamp. Unit: seconds.

1554347313

IndexLevel

string

The index level.

-   OFF: No index is created.
    
-   META: A metadata index is created.
    
-   ALL: A full-text index is created.
    

OFF

VaultName

string

The name of the backup vault.

vaultname

StorageSize

integer

The usage of the backup vault. Unit: bytes.

10

LatestReplicationTime

integer

The time of the last geo-redundancy sync. This value is a UNIX timestamp. Unit: seconds.

1554347313

VaultStatusMessage

string

The error message for the geo-redundant vault. This parameter is valid only for geo-redundant vaults. Valid values:

-   **UNKNOWN\_ERROR**: An unknown error occurred.
    
-   **SOURCE\_VAULT\_ALREADY\_HAS\_REPLICATION**: Another replication destination is configured for the source vault.
    

SOURCE\_VAULT\_ALREADY\_HAS\_REPLICATION

Replication

boolean

Indicates whether the vault is a geo-redundant vault.

-   true: The vault is a geo-redundant vault.
    
-   false: The vault is a local backup vault.
    

false

ReplicationSourceRegionId

string

The ID of the region where the source vault of the geo-redundant vault resides. This parameter is valid only for geo-redundant vaults.

cn-shanghai

VaultRegionId

string

The ID of the region where the backup vault resides.

cn-shanghai

UpdatedTime

integer

The time when the backup vault was updated. This value is a UNIX timestamp. Unit: seconds.

1554347313

ResourceGroupId

string

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

BucketName

string

The name of the Object Storage Service (OSS) bucket used for the backup vault.

hbr-0005i51\*\*\*\*\*\*t58

SearchEnabled

boolean

Indicates whether the backup search feature is enabled.

true

IndexAvailable

boolean

Indicates whether the index is available. An index is available when it is not being updated.

true

BytesDone

integer

The backup data size. Unit: bytes.

20

Tags

object

Tag

array<object>

The tags of the backup vault.

object

The tags of the backup vault.

Key

string

The tag key of the vault.

-   The key cannot start with `aliyun` or `acs:`.
    
-   The key cannot contain `http://` or `https://`.
    
-   The key cannot be an empty string.
    

aaa

Value

string

The tag value of the vault.

-   The value cannot start with `aliyun` or `acs:`.
    
-   The value cannot contain `http://` or `https://`.
    
-   The value cannot be an empty string.
    

a1

SourceTypes

object

SourceType

array

The types of data sources that are backed up to the vault.

string

The type of the data source.

ECS\_FILE

ReplicationProgress

object

The replication progress of the backup vault.

HistoricalReplicationProgress

integer

The replication progress of historical data in the backup vault. Valid values: 0 to 100.

100

NewReplicationProgress

integer

The most recent replication time of incremental data in the backup vault.

1579413159

BackupPlanStatistics

object

The statistics of backup plans for the backup vault.

Oracle

integer

The number of Oracle backup plans.

1

LocalFile

integer

The number of backup plans for on-premises servers.

1

Nas

integer

The number of NAS backup plans.

1

CommonNas

integer

The number of backup plans for general-purpose NAS file systems.

1

Isilon

integer

The number of Isilon backup plans.

1

Oss

integer

The number of OSS backup plans.

1

SqlServer

integer

The number of SQL Server backup plans.

1

Csg

integer

The number of Cloud Storage Gateway (CSG) backup plans.

1

EcsFile

integer

The number of ECS file backup plans.

1

MySql

integer

The number of MySQL backup plans.

1

EcsHana

integer

The number of SAP HANA backup plans.

1

LocalVm

integer

The number of backup plans for on-premises virtual machines.

1

Ots

integer

The number of Tablestore backup plans.

1

Archive

integer

The number of archive plans.

1

CommonFileSystem

integer

The number of Cloud Paralleled File System (CPFS) backup plans.

1

TrialInfo

object

The free trial properties.

TrialStartTime

integer

The start time of the free trial.

1579413159

TrialVaultReleaseTime

integer

The time when the trial backup vault is released.

1594965600

TrialExpireTime

integer

The expiration time of the free trial.

1584597600

KeepAfterTrialExpiration

boolean

Indicates whether the backup vault is converted to a pay-as-you-go vault after the free trial ends.

true

EncryptType

string

The encryption type of the backup vault.

-   NONE: No encryption is used.
    
-   HBR\_PRIVATE: The backup vault is encrypted using a key that is managed by Hybrid Backup Recovery (HBR). This is the default value.
    
-   KMS: The backup vault is encrypted using a key that is managed by Key Management Service (KMS).
    

HBR\_PRIVATE

WormEnabled

boolean

Indicates whether backup locking is enabled.

true

SnapshotCount

integer

The number of snapshots in the vault.

0

CompressionAlgorithm

string

The compression algorithm that is used for the backup vault. Valid values:

-   DISABLED: Compression is disabled.
    
-   SNAPPY: The SNAPPY algorithm is used.
    
-   ZSTD: The Zstandard algorithm is used. Zstandard is a fast, lossless compression algorithm.
    

ZSTD

RedundancyType

string

The data redundancy type of the backup vault. Valid values:

-   LRS: locally redundant storage (LRS). HBR stores redundant copies of your data on multiple devices in the same zone to ensure data durability and availability in case of hardware failures.
    
-   ZRS: zone-redundant storage (ZRS). HBR uses a multi-zone mechanism to distribute your data across three zones within the same region. This ensures that your data remains accessible even if a zone becomes unavailable.
    

LRS

KmsKeyId

string

The ID of the customer master key (CMK) or the alias of the CMK that is used for KMS encryption. This parameter is required only if you set EncryptType to KMS.

alias/acs/acm

ChargedStorageSize

integer

The billable storage usage of the archive vault. Unit: bytes.

1024000

ArchiveStorageSize

integer

The billable storage usage of the Archive storage class. Unit: bytes.

1024000

ArchiveBytesDone

integer

The backup data size of the Archive storage class. Unit: bytes.

1024000

ReplicationSourceVault

boolean

Indicates whether the vault is a source vault for geo-redundancy.

-   true: The vault is a source vault for geo-redundancy.
    
-   false: The vault is not a source vault for geo-redundancy.
    

false

ReplicationTargetRegionId

string

The destination region for geo-redundancy.

cn-shanghai

VaultOwnerId

integer

The ID of the account that owns the data store.

123\*\*\*7890

ReplicationTargetVaultId

string

The ID of the replication destination vault.

v-123\*\*\*7890

ReplicationSourceOwnerId

integer

The ID of the source account for replication.

123\*\*\*7890

ReplicationTargetOwnerId

integer

The ID of the account that owns the replication destination vault.

123\*\*\*7890

ReplicationStatus

string

The replication status of the replication destination vault.

RUNNING

RsTargetAccountIds

object

RsTargetAccountId

array

The destination account for resource sharing.

integer

The destination account for resource sharing.

123\*\*\*7890

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 8,
  "Vaults": {
    "Vault": [
      {
        "Status": "CREATED",
        "VaultId": "v-*********************",
        "ChargeType": "FREE",
        "VaultType": "STANDARD",
        "Dedup": true,
        "ReplicationSourceVaultId": "v-*********************",
        "IndexUpdateTime": 1639645628,
        "Description": "vault description",
        "VaultStorageClass": "STANDARD",
        "Retention": 2,
        "CreatedTime": 1554347313,
        "IndexLevel": "OFF",
        "VaultName": "vaultname",
        "StorageSize": 10,
        "LatestReplicationTime": 1554347313,
        "VaultStatusMessage": "SOURCE_VAULT_ALREADY_HAS_REPLICATION",
        "Replication": false,
        "ReplicationSourceRegionId": "cn-shanghai",
        "VaultRegionId": "cn-shanghai",
        "UpdatedTime": 1554347313,
        "ResourceGroupId": "rg-*********************",
        "BucketName": "hbr-0005i51******t58",
        "SearchEnabled": true,
        "IndexAvailable": true,
        "BytesDone": 20,
        "Tags": {
          "Tag": [
            {
              "Key": "aaa",
              "Value": "a1"
            }
          ]
        },
        "SourceTypes": {
          "SourceType": [
            "ECS_FILE"
          ]
        },
        "ReplicationProgress": {
          "HistoricalReplicationProgress": 100,
          "NewReplicationProgress": 1579413159
        },
        "BackupPlanStatistics": {
          "Oracle": 1,
          "LocalFile": 1,
          "Nas": 1,
          "CommonNas": 1,
          "Isilon": 1,
          "Oss": 1,
          "SqlServer": 1,
          "Csg": 1,
          "EcsFile": 1,
          "MySql": 1,
          "EcsHana": 1,
          "LocalVm": 1,
          "Ots": 1,
          "Archive": 1,
          "CommonFileSystem": 1
        },
        "TrialInfo": {
          "TrialStartTime": 1579413159,
          "TrialVaultReleaseTime": 1594965600,
          "TrialExpireTime": 1584597600,
          "KeepAfterTrialExpiration": true
        },
        "EncryptType": "HBR_PRIVATE",
        "WormEnabled": true,
        "SnapshotCount": 0,
        "CompressionAlgorithm": "ZSTD",
        "RedundancyType": "LRS",
        "KmsKeyId": "alias/acs/acm",
        "ChargedStorageSize": 1024000,
        "ArchiveStorageSize": 1024000,
        "ArchiveBytesDone": 1024000,
        "ReplicationSourceVault": false,
        "ReplicationTargetRegionId": "cn-shanghai",
        "VaultOwnerId": 0,
        "ReplicationTargetVaultId": "v-123***7890",
        "ReplicationSourceOwnerId": 0,
        "ReplicationTargetOwnerId": 0,
        "ReplicationStatus": "RUNNING",
        "RsTargetAccountIds": {
          "RsTargetAccountId": [
            0
          ]
        }
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeVaults#workbench-doc-change-demo) for a complete list.
