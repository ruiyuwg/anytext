DATASOURCE::HBR::Vault is used to query the information about a backup vault.

## Syntax

```
{
  "Type": "DATASOURCE::HBR::Vault",
  "Properties": {
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

VaultId

String

Yes

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

-   Description: the description of the backup vault.
    
-   ResourceGroupId: the ID of the resource group.
    
-   TrialInfo: the information about the free trial.
    
-   ReplicationSourceRegionId: the ID of the region where the source vault is located.
    
-   IndexUpdateTime: the time when the index was updated.
    
-   VaultId: the ID of the backup vault.
    
-   Retention: the retention period of the backup vault.
    
-   Dedup: indicates whether the deduplication feature is enabled.
    
-   VaultStatusMessage: the status message that is returned when the backup vault is in the ERROR state.
    
-   BytesDone: the amount of data that is backed up.
    
-   ReplicationProgress: the progress of synchronizing data from the backup vault to the mirror vault.
    
-   PaymentType: the billing method.
    
-   BackupPlanStatistics: the statistics of the backup plans that use the backup vault.
    
-   Tags: the tags of the backup vault.
    
-   VaultName: the name of the backup vault.
    
-   RedundancyType: the data redundancy type of the backup vault.
    
-   VaultStorageClass: the storage class of the backup vault.
    
-   CreateTime: the time when the backup vault was created.
    
-   StorageSize: the usage of the backup vault.
    
-   ReplicationSourceVaultId: the ID of the source vault.
    
-   VaultType: the type of the backup vault.
    
-   LatestReplicationTime: the time when the remote backup was last synchronized.
    
-   Replication: indicates whether the backup vault is a remote backup vault.
    
-   IndexLevel: the index level.
    
-   UpdatedTime: the time when the backup vault was updated.
    
-   SourceTypes: the information about the data sources.
    
-   IndexAvailable: indicates whether indexes are available.
    
-   SearchEnabled: indicates whether the backup search feature is enabled.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VaultId:
    Type: String
    Description:
      en: The ID of the backup vault.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::HBR::Vault
    Properties:
      VaultId:
        Ref: VaultId
Outputs:
  Description:
    Description: The description of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  TrialInfo:
    Description: The free trial information.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TrialInfo
  ReplicationSourceRegionId:
    Description: The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ReplicationSourceRegionId
  IndexUpdateTime:
    Description: The time when the index was updated.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - IndexUpdateTime
  VaultId:
    Description: The ID of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VaultId
  Retention:
    Description: 'The retention period of the backup vault. Unit: days.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Retention
  Dedup:
    Description: Indicates whether the deduplication feature is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Dedup
  VaultStatusMessage:
    Description: The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VaultStatusMessage
  BytesDone:
    Description: 'The amount of data that is backed up. Unit: bytes.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BytesDone
  ReplicationProgress:
    Description: The progress of data synchronization from the backup vault to the mirror vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ReplicationProgress
  PaymentType:
    Description: The payment type of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PaymentType
  BackupPlanStatistics:
    Description: The statistics of backup plans that use the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BackupPlanStatistics
  Tags:
    Description: The tags of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  VaultName:
    Description: The name of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VaultName
  RedundancyType:
    Description: 'The data redundancy type of the backup vault. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RedundancyType
  VaultStorageClass:
    Description: Backup repository storage type. The value is only **STANDARD**, which indicates STANDARD storage.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VaultStorageClass
  CreateTime:
    Description: The creation time of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  StorageSize:
    Description: 'The usage of the backup vault. Unit: bytes.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StorageSize
  ReplicationSourceVaultId:
    Description: The ID of the source vault that corresponds to the remote backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ReplicationSourceVaultId
  VaultType:
    Description: The type of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VaultType
  LatestReplicationTime:
    Description: 'The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LatestReplicationTime
  Replication:
    Description: Indicates whether the backup vault is a remote backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Replication
  IndexLevel:
    Description: The index level.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - IndexLevel
  UpdatedTime:
    Description: 'The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UpdatedTime
  SourceTypes:
    Description: The data source types of the backup vault.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SourceTypes
  IndexAvailable:
    Description: Indicates whether indexes are available. Indexes are available when they are not being updated.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - IndexAvailable
  SearchEnabled:
    Description: Indicates whether the backup search feature is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SearchEnabled
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VaultId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the backup vault."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::HBR::Vault",
      "Properties": {
        "VaultId": {
          "Ref": "VaultId"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "TrialInfo": {
      "Description": "The free trial information.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TrialInfo"
        ]
      }
    },
    "ReplicationSourceRegionId": {
      "Description": "The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ReplicationSourceRegionId"
        ]
      }
    },
    "IndexUpdateTime": {
      "Description": "The time when the index was updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IndexUpdateTime"
        ]
      }
    },
    "VaultId": {
      "Description": "The ID of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VaultId"
        ]
      }
    },
    "Retention": {
      "Description": "The retention period of the backup vault. Unit: days.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Retention"
        ]
      }
    },
    "Dedup": {
      "Description": "Indicates whether the deduplication feature is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Dedup"
        ]
      }
    },
    "VaultStatusMessage": {
      "Description": "The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VaultStatusMessage"
        ]
      }
    },
    "BytesDone": {
      "Description": "The amount of data that is backed up. Unit: bytes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BytesDone"
        ]
      }
    },
    "ReplicationProgress": {
      "Description": "The progress of data synchronization from the backup vault to the mirror vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ReplicationProgress"
        ]
      }
    },
    "PaymentType": {
      "Description": "The payment type of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PaymentType"
        ]
      }
    },
    "BackupPlanStatistics": {
      "Description": "The statistics of backup plans that use the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BackupPlanStatistics"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "VaultName": {
      "Description": "The name of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VaultName"
        ]
      }
    },
    "RedundancyType": {
      "Description": "The data redundancy type of the backup vault. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RedundancyType"
        ]
      }
    },
    "VaultStorageClass": {
      "Description": "Backup repository storage type. The value is only **STANDARD**, which indicates STANDARD storage.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VaultStorageClass"
        ]
      }
    },
    "CreateTime": {
      "Description": "The creation time of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "StorageSize": {
      "Description": "The usage of the backup vault. Unit: bytes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StorageSize"
        ]
      }
    },
    "ReplicationSourceVaultId": {
      "Description": "The ID of the source vault that corresponds to the remote backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ReplicationSourceVaultId"
        ]
      }
    },
    "VaultType": {
      "Description": "The type of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VaultType"
        ]
      }
    },
    "LatestReplicationTime": {
      "Description": "The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LatestReplicationTime"
        ]
      }
    },
    "Replication": {
      "Description": "Indicates whether the backup vault is a remote backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Replication"
        ]
      }
    },
    "IndexLevel": {
      "Description": "The index level.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IndexLevel"
        ]
      }
    },
    "UpdatedTime": {
      "Description": "The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UpdatedTime"
        ]
      }
    },
    "SourceTypes": {
      "Description": "The data source types of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SourceTypes"
        ]
      }
    },
    "IndexAvailable": {
      "Description": "Indicates whether indexes are available. Indexes are available when they are not being updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IndexAvailable"
        ]
      }
    },
    "SearchEnabled": {
      "Description": "Indicates whether the backup search feature is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SearchEnabled"
        ]
      }
    }
  }
}
                        
```
