DATASOURCE::HBR::Vaults is used to query the basic information about backup vaults.

## Syntax

```
{
  "Type": "DATASOURCE::HBR::Vaults",
  "Properties": {
    "VaultType": String,
    "VaultId": String,
    "RefreshOptions": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

VaultType

String

No

Yes

The type of the backup vault.

Valid values:

-   STANDARD: standard backup vault
    
-   OTS\_BACKUP: backup vault for Tablestore
    

VaultId

String

No

Yes

The ID of the backup vault.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   VaultIds: the IDs of the backup vaults.
    
-   Vaults: details of the backup vaults.
    

**Property**

**Type**

**Description**

**Constraint**

VaultIds

List

The IDs of the backup vaults.

None.

Vaults

List

Details of the backup vaults.

None.

ReplicationSourceVaultId

String

The ID of the source vault.

None.

Replication

String

Indicates whether the backup vault is a remote backup vault.  

None.

ReplicationProgress

String

The progress of synchronizing data from the backup vault to the mirror vault.  

None.

ReplicationSourceRegionId

String

The region ID of the source vault.

None.

LatestReplicationTime

String

The time when the most recent remote backup is synchronized.

None.

Status

String

The status of the backup vault.

None.

EncryptType

String

The method that is used to encrypt the source data.

None.

RedundancyType

String

The data redundancy type of the backup vault.

None.

BackupPlanStatistics

String

The statistics of the backup plans that use the backup vault.  

None.

VaultId

String

The ID of the backup vault.

None.

PaymentType

String

The billing method.

None.

StorageSize

String

The usage of the backup vault.

Unit: bytes.

VaultStatusMessage

String

The status message that is returned when the backup vault is in the ERROR state.

None.

KmsKeyId

String

The custom key of Key Management Service (KMS) or the alias of the KMS key.

None.

VaultStorageClass

String

The storage class of the backup vault.

None.

VaultType

String

The type of the backup vault.

None.

CreateTime

String

The time when the backup vault was created.  

None.

IndexAvailable

String

Indicates whether indexes are available.

None.

Dedup

String

Indicates whether the deduplication feature is enabled.

None.

ResourceGroupId

String

The ID of the resource group.

None.

IndexUpdateTime

String

The time when the index was updated.

None.

TrialInfo

String

The information about the free trial.

None.

Tags

String

The tags of the backup vault.

None.

VaultName

String

The name of the backup vault.

None.

IndexLevel

String

The index level.

None.

Retention

String

The retention period of the backup vault.

None.

SourceTypes

String

The information about the data sources.

None.

Description

String

The description of the backup vault.

None.

BytesDone

String

The amount of data that is backed up.  

Unit: bytes.

SearchEnabled

String

Indicates whether the backup search feature is enabled.

None.

RegionId

String

The region ID.

None.

UpdatedTime

String

The time when the backup vault was updated.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VaultId:
    Description: VaultId.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      VaultId:
        Ref: VaultId
    Type: DATASOURCE::HBR::Vaults
Outputs:
  VaultIds:
    Description: The list of vault IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VaultIds
  Vaults:
    Description: The list of vaults.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Vaults
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VaultId": {
      "Type": "String",
      "Description": "VaultId."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::HBR::Vaults",
      "Properties": {
        "VaultId": {
          "Ref": "VaultId"
        }
      }
    }
  },
  "Outputs": {
    "VaultIds": {
      "Description": "The list of vault IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VaultIds"
        ]
      }
    },
    "Vaults": {
      "Description": "The list of vaults.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Vaults"
        ]
      }
    }
  }
}
```
