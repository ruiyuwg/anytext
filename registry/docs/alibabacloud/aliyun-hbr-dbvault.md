ALIYUN::HBR::DbVault is used to create a mirror vault.

## Syntax

```
{
  "Type": "ALIYUN::HBR::DbVault",
  "Properties": {
    "Description": String,
    "VaultName": String,
    "RetentionDays": Integer,
    "VaultRegionId": String,
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

Description

String

No

No

The description of the mirror vault.

None.

VaultName

String

Yes

No

The name of the mirror vault.

None.

RetentionDays

Integer

Yes

Yes

The retention period of the backup data.

None.

VaultRegionId

String

Yes

No

The region ID of the mirror vault.

You must deploy the mirror vault in one of the regions where Hybrid Cloud Backup is available.

For more information, see [Supported regions](/help/en/cloud-backup/product-overview/supported-regions#reference-2116436).

Tags

List

No

Yes

The tags of the mirror vault.

For more information, see [Tags properties](#section-3ru-57w-e6h).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
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

Key

String

Yes

No

The key of the tag.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The tag value must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   Description: the description of the mirror vault.
    
-   VaultName: the name of the mirror vault.
    
-   RetentionDays: the retention period of backup data.
    
-   VaultId: the ID of the mirror vault.
    
-   VaultRegionId: the region ID of the mirror vault.
    

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VaultName:
    Type: String
    Description: Display name of the vault.
    Default: test
  RetentionDays:
    Type: Number
    Description: Data retention days of the vault. Data will be deleted when it's older than this time.
    Default: 1
  VaultRegionId:
    Type: String
    Description: The region ID to create the vault.
    Default: cn-hangzhou
Resources:
  HBRDbVault:
    Type: ALIYUN::HBR::DbVault
    Properties:
      VaultName:
        Ref: VaultName
      RetentionDays:
        Ref: RetentionDays
      VaultRegionId:
        Ref: VaultRegionId
Outputs:
  Description:
    Description: Description of the vault.
    Value:
      Fn::GetAtt:
        - HBRDbVault
        - Description
  VaultName:
    Description: Display name of the vault.
    Value:
      Fn::GetAtt:
        - HBRDbVault
        - VaultName
  RetentionDays:
    Description: Data retention days of the vault. Data will be deleted when it's older than this time.
    Value:
      Fn::GetAtt:
        - HBRDbVault
        - RetentionDays
  VaultId:
    Description: Vault ID.
    Value:
      Fn::GetAtt:
        - HBRDbVault
        - VaultId
  VaultRegionId:
    Description: The region ID to create the vault.
    Value:
      Fn::GetAtt:
        - HBRDbVault
        - VaultRegionId
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VaultName": {
      "Type": "String",
      "Description": "Display name of the vault.",
      "Default": "test"
    },
    "RetentionDays": {
      "Type": "Number",
      "Description": "Data retention days of the vault. Data will be deleted when it's older than this time.",
      "Default": 1
    },
    "VaultRegionId": {
      "Type": "String",
      "Description": "The region ID to create the vault.",
      "Default": "cn-hangzhou"
    }
  },
  "Resources": {
    "HBRDbVault": {
      "Type": "ALIYUN::HBR::DbVault",
      "Properties": {
        "VaultName": {
          "Ref": "VaultName"
        },
        "RetentionDays": {
          "Ref": "RetentionDays"
        },
        "VaultRegionId": {
          "Ref": "VaultRegionId"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "Description of the vault.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbVault",
          "Description"
        ]
      }
    },
    "VaultName": {
      "Description": "Display name of the vault.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbVault",
          "VaultName"
        ]
      }
    },
    "RetentionDays": {
      "Description": "Data retention days of the vault. Data will be deleted when it's older than this time.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbVault",
          "RetentionDays"
        ]
      }
    },
    "VaultId": {
      "Description": "Vault ID.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbVault",
          "VaultId"
        ]
      }
    },
    "VaultRegionId": {
      "Description": "The region ID to create the vault.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbVault",
          "VaultRegionId"
        ]
      }
    }
  }
}
```
