ALIYUN::HBR::Vault is used to create a backup vault.

## Syntax

```
{
  "Type": "ALIYUN::HBR::Vault",
  "Properties": {
    "VaultType": String,
    "Description": String,
    "EncryptType": String,
    "ResourceGroupId": String,
    "KmsKeyId": String,
    "VaultName": String,
    "RedundancyType": String,
    "VaultStorageClass": String,
    "Tags": List
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

Yes

No

The type of the backup vault.

Valid values:

-   STANDARD: standard backup vault
    
-   OTS\_BACKUP: backup vault for Tablestore
    

Description

String

No

Yes

The description of the backup vault.

The description can be up to 255 characters in length.

EncryptType

String

No

No

The method that is used to encrypt the source data.

Valid values:

-   HBR\_PRIVATE: encrypts the source data by using the built-in encryption method of Hybrid Backup Recovery (HBR).
    
-   KMS: encrypts the source data by using a custom key of Key Management Service (KMS).
    

This property takes effect only when VaultType is set to STANDARD or OTS\_BACKUP.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

KmsKeyId

String

No

No

The custom key of KMS or the alias of the KMS key.

This property must be specified when EncryptType is set to KMS.

VaultName

String

Yes

Yes

The name of the backup vault.

The name must be 1 to 64 characters in length.

RedundancyType

String

No

No

The data redundancy type of the backup vault.

Valid values:

-   LRS: enables locally redundant storage (LRS) for the backup vault. Hybrid Backup Recovery (HBR) stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
    
-   ZRS: enables zone-redundant storage (ZRS) for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. Even if one zone fails, the data that is stored in the other two zones is still accessible.
    

VaultStorageClass

String

No

No

The storage type of the backup vault.

Set the value to STANDARD. A value of STANDARD specifies standard storage.

Tags

List

No

Yes

The tags of the backup vault.

You can add up to 20 tags.

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

No

No

The value of the tag.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

Key

String

Yes

No

The key of the tag.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   Description: the description of the backup vault.
    
-   ResourceGroupId: the ID of the resource group.
    
-   TrialInfo: the information about the free trial.
    
-   ReplicationSourceRegionId: the region ID of the source vault.
    
-   IndexUpdateTime: the time when the index was updated.
    
-   VaultId: the ID of the backup vault.
    
-   Retention: the retention period of the backup vault.
    
-   Dedup: indicates whether the deduplication feature is enabled.
    
-   VaultStatusMessage: the status message that is returned when the backup vault is in the `ERROR` state.
    
-   BytesDone: the amount of data that is backed up.  
    
-   ReplicationProgress: the progress of data synchronization from the backup vault to the mirror vault.  
    
-   PaymentType: the billing method of the backup vault.
    
-   BackupPlanStatistics: the statistics of backup plans that use the backup vault.  
    
-   Tags: the tags of the backup vault.
    
-   VaultName: the name of the backup vault.
    
-   RedundancyType: the data redundancy type of the backup vault.  
    
-   VaultStorageClass: the storage type of the backup vault.
    
-   CreateTime: the time when the backup vault was created.  
    
-   StorageSize: the usage of the backup vault.
    
-   ReplicationSourceVaultId: the ID of the source vault.
    
-   VaultType: the type of the backup vault.
    
-   LatestReplicationTime: the time of the most recent successful remote backup.
    
-   Replication: indicates whether the backup vault is a remote backup vault.  
    
-   IndexLevel: the index level.
    
-   UpdatedTime: the time when the backup vault was updated.
    
-   SourceTypes: the information about the data sources.
    
-   IndexAvailable: indicates whether indexes are available.
    
-   SearchEnabled: indicates whether the backup search feature is enabled.  
    

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VaultName:
    Description: The name of the backup vault. The name must be 1 to 64 characters
      in length.
    MaxLength: 64
    MinLength: 1
    Type: String
    Default: test-valut
Resources:
  ExtensionResource:
    Properties:
      VaultName:
        Ref: VaultName
      VaultType: STANDARD
    Type: ALIYUN::HBR::Vault
Outputs:
  BackupPlanStatistics:
    Description: The statistics of backup plans that use the backup vault.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - BackupPlanStatistics
  BytesDone:
    Description: 'The amount of data that is backed up. Unit: bytes.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - BytesDone
  CreateTime:
    Description: 'The time when the backup vault was created. This value is a UNIX
      timestamp. Unit: seconds.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - CreateTime
  Dedup:
    Description: Indicates whether the deduplication feature is enabled.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Dedup
  Description:
    Description: The description of the backup vault.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Description
  IndexAvailable:
    Description: Indicates whether indexes are available. Indexes are available when
      they are not being updated.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - IndexAvailable
  IndexLevel:
    Description: 'The index level.

      - **OFF**: No indexes are created.

      - **META**: Metadata indexes are created.

      - **ALL**: Full-text indexes are created.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - IndexLevel
  IndexUpdateTime:
    Description: The time when the index was updated.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - IndexUpdateTime
  LatestReplicationTime:
    Description: 'The time when the last remote backup was synchronized. This value
      is a UNIX timestamp. Unit: seconds.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - LatestReplicationTime
  PaymentType:
    Description: PaymentType.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - PaymentType
  RedundancyType:
    Description: 'The data redundancy type of the backup vault. Valid values:

      - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault.
      HBR stores the copies of each object on multiple devices of different facilities
      in the same zone. This way, HBR ensures data durability and availability even
      if hardware failures occur.

      - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR
      uses the multi-zone mechanism to distribute data across three zones within the
      same region. If a zone fails, the data that is stored in the other two zones
      is still accessible.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - RedundancyType
  Replication:
    Description: 'Indicates whether the backup vault is a remote backup vault. Valid
      values:

      - **true**: The backup vault is a remote backup vault.

      - **false**: The backup vault is an on-premises backup vault.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Replication
  ReplicationProgress:
    Description: The progress of data synchronization from the backup vault to the
      mirror vault.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ReplicationProgress
  ReplicationSourceRegionId:
    Description: The ID of the region where the remote backup vault resides.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ReplicationSourceRegionId
  ReplicationSourceVaultId:
    Description: The ID of the source vault that corresponds to the remote backup
      vault.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ReplicationSourceVaultId
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ResourceGroupId
  Retention:
    Description: 'The retention period of the backup vault. Unit: days.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Retention
  SearchEnabled:
    Description: Indicates whether the backup search feature is enabled.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - SearchEnabled
  SourceTypes:
    Description: The information about the data source.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - SourceTypes
  StorageSize:
    Description: 'The usage of the backup vault. Unit: bytes.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - StorageSize
  Tags:
    Description: The tags of the backup vault.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Tags
  TrialInfo:
    Description: The free trial information.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - TrialInfo
  UpdatedTime:
    Description: 'The time when the backup vault was updated. This value is a UNIX
      timestamp. Unit: seconds.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - UpdatedTime
  VaultId:
    Description: The ID of the backup vault.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - VaultId
  VaultName:
    Description: The name of the backup vault.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - VaultName
  VaultStatusMessage:
    Description: 'The status message that is returned when the backup vault is in
      the ERROR state. This parameter is available only for remote backup vaults.
      Valid values:

      - **UNKNOWN_ERROR*: An unknown error occurs.

      - **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for
      the source vault.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - VaultStatusMessage
  VaultStorageClass:
    Description: 'The storage type of the backup vault. Valid value: **STANDARD**,
      which indicates standard storage.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - VaultStorageClass
  VaultType:
    Description: 'The type of the backup vault. Valid value: **STANDARD**, which indicates
      a standard backup vault.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - VaultType
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VaultName": {
      "Description": "The name of the backup vault. The name must be 1 to 64 characters in length.",
      "MaxLength": 64,
      "MinLength": 1,
      "Type": "String",
      "Default": "test-valut"
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Properties": {
        "VaultName": {
          "Ref": "VaultName"
        },
        "VaultType": "STANDARD"
      },
      "Type": "ALIYUN::HBR::Vault"
    }
  },
  "Outputs": {
    "BackupPlanStatistics": {
      "Description": "The statistics of backup plans that use the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "BackupPlanStatistics"
        ]
      }
    },
    "BytesDone": {
      "Description": "The amount of data that is backed up. Unit: bytes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "BytesDone"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the backup vault was created. This value is a UNIX timestamp. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "Dedup": {
      "Description": "Indicates whether the deduplication feature is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Dedup"
        ]
      }
    },
    "Description": {
      "Description": "The description of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "IndexAvailable": {
      "Description": "Indicates whether indexes are available. Indexes are available when they are not being updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "IndexAvailable"
        ]
      }
    },
    "IndexLevel": {
      "Description": "The index level.\n- **OFF**: No indexes are created.\n- **META**: Metadata indexes are created.\n- **ALL**: Full-text indexes are created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "IndexLevel"
        ]
      }
    },
    "IndexUpdateTime": {
      "Description": "The time when the index was updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "IndexUpdateTime"
        ]
      }
    },
    "LatestReplicationTime": {
      "Description": "The time when the last remote backup was synchronized. This value is a UNIX timestamp. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "LatestReplicationTime"
        ]
      }
    },
    "PaymentType": {
      "Description": "PaymentType.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "PaymentType"
        ]
      }
    },
    "RedundancyType": {
      "Description": "The data redundancy type of the backup vault. Valid values:\n- **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.\n- **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RedundancyType"
        ]
      }
    },
    "Replication": {
      "Description": "Indicates whether the backup vault is a remote backup vault. Valid values:\n- **true**: The backup vault is a remote backup vault.\n- **false**: The backup vault is an on-premises backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Replication"
        ]
      }
    },
    "ReplicationProgress": {
      "Description": "The progress of data synchronization from the backup vault to the mirror vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ReplicationProgress"
        ]
      }
    },
    "ReplicationSourceRegionId": {
      "Description": "The ID of the region where the remote backup vault resides.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ReplicationSourceRegionId"
        ]
      }
    },
    "ReplicationSourceVaultId": {
      "Description": "The ID of the source vault that corresponds to the remote backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ReplicationSourceVaultId"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ResourceGroupId"
        ]
      }
    },
    "Retention": {
      "Description": "The retention period of the backup vault. Unit: days.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Retention"
        ]
      }
    },
    "SearchEnabled": {
      "Description": "Indicates whether the backup search feature is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SearchEnabled"
        ]
      }
    },
    "SourceTypes": {
      "Description": "The information about the data source.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SourceTypes"
        ]
      }
    },
    "StorageSize": {
      "Description": "The usage of the backup vault. Unit: bytes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "StorageSize"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tags"
        ]
      }
    },
    "TrialInfo": {
      "Description": "The free trial information.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TrialInfo"
        ]
      }
    },
    "UpdatedTime": {
      "Description": "The time when the backup vault was updated. This value is a UNIX timestamp. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UpdatedTime"
        ]
      }
    },
    "VaultId": {
      "Description": "The ID of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VaultId"
        ]
      }
    },
    "VaultName": {
      "Description": "The name of the backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VaultName"
        ]
      }
    },
    "VaultStatusMessage": {
      "Description": "The status message that is returned when the backup vault is in the ERROR state. This parameter is available only for remote backup vaults. Valid values:\n- **UNKNOWN_ERROR*: An unknown error occurs.\n- **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VaultStatusMessage"
        ]
      }
    },
    "VaultStorageClass": {
      "Description": "The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VaultStorageClass"
        ]
      }
    },
    "VaultType": {
      "Description": "The type of the backup vault. Valid value: **STANDARD**, which indicates a standard backup vault.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VaultType"
        ]
      }
    }
  }
}
```
