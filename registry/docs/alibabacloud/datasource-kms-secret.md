DATASOURCE::KMS::Secret is used to query the information about a secret.

## Syntax

```
{
  "Type": "DATASOURCE::KMS::Secret",
  "Properties": {
    "SecretName": String,
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

SecretName

String

Yes

Yes

The name of the secret.

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

-   Description: the description of the secret.
    
-   RotationInterval: the interval for automatic rotation of the secret.
    
-   LastRotationDate: the time when the last rotation was performed.
    
-   SecretType: the secret type.
    
-   CreateTime: the time when the secret was created.
    
-   DKMSInstanceId: the ID of the Key Management Service (KMS) instance.
    
-   AutomaticRotation: indicates whether automatic rotation is enabled.
    
-   SecretName: the name of the secret.
    
-   NextRotationDate: the time when the next rotation will be performed.
    
-   UpdateTime: the time when the secret was updated.
    
-   PlannedDeleteTime: the time when the secret is scheduled to be deleted.
    
-   ExtendedConfig: the extended configuration of the secret.
    
-   Arn: the Alibaba Cloud Resource Name (ARN) of the secret.
    
-   EncryptionKeyId: the ID of the KMS key that is used to encrypt the secret value.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SecretName:
    Type: String
    Description:
      en: The name of the secret.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::KMS::Secret
    Properties:
      SecretName:
        Ref: SecretName
Outputs:
  Description:
    Description: The description of the secret.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  RotationInterval:
    Description: 'The interval for automatic rotation. The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RotationInterval
  LastRotationDate:
    Description: The time when the last rotation was performed.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LastRotationDate
  SecretType:
    Description: 'The type of the secret. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SecretType
  CreateTime:
    Description: The time when the secret was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  DKMSInstanceId:
    Description: The ID of the dedicated KMS instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DKMSInstanceId
  AutomaticRotation:
    Description: 'Indicates whether automatic rotation is enabled. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AutomaticRotation
  SecretName:
    Description: The name of the secret.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SecretName
  NextRotationDate:
    Description: The time when the next rotation will be performed.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NextRotationDate
  UpdateTime:
    Description: The time when the secret was updated.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UpdateTime
  PlannedDeleteTime:
    Description: The time when the secret is scheduled to be deleted.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PlannedDeleteTime
  ExtendedConfig:
    Description: The extended configuration of the secret.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ExtendedConfig
  Arn:
    Description: The Alibaba Cloud Resource Name (ARN) of the secret.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Arn
  EncryptionKeyId:
    Description: The ID of the customer master key (CMK) that is used to encrypt the secret value.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EncryptionKeyId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SecretName": {
      "Type": "String",
      "Description": {
        "en": "The name of the secret."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::KMS::Secret",
      "Properties": {
        "SecretName": {
          "Ref": "SecretName"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the secret.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "RotationInterval": {
      "Description": "The interval for automatic rotation. The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RotationInterval"
        ]
      }
    },
    "LastRotationDate": {
      "Description": "The time when the last rotation was performed.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LastRotationDate"
        ]
      }
    },
    "SecretType": {
      "Description": "The type of the secret. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecretType"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the secret was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "DKMSInstanceId": {
      "Description": "The ID of the dedicated KMS instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DKMSInstanceId"
        ]
      }
    },
    "AutomaticRotation": {
      "Description": "Indicates whether automatic rotation is enabled. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AutomaticRotation"
        ]
      }
    },
    "SecretName": {
      "Description": "The name of the secret.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecretName"
        ]
      }
    },
    "NextRotationDate": {
      "Description": "The time when the next rotation will be performed.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NextRotationDate"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the secret was updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UpdateTime"
        ]
      }
    },
    "PlannedDeleteTime": {
      "Description": "The time when the secret is scheduled to be deleted.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PlannedDeleteTime"
        ]
      }
    },
    "ExtendedConfig": {
      "Description": "The extended configuration of the secret.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ExtendedConfig"
        ]
      }
    },
    "Arn": {
      "Description": "The Alibaba Cloud Resource Name (ARN) of the secret.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Arn"
        ]
      }
    },
    "EncryptionKeyId": {
      "Description": "The ID of the customer master key (CMK) that is used to encrypt the secret value.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EncryptionKeyId"
        ]
      }
    }
  }
}
                        
```
