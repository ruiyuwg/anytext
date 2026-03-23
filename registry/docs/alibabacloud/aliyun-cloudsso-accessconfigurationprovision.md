ALIYUN::CloudSSO::AccessConfigurationProvision is used to provision an access configuration for an account in your resource directory.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::AccessConfigurationProvision",
  "Properties": {
    "DirectoryId": String,
    "TargetType": String,
    "AccessConfigurationId": String,
    "TargetId": String
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

AccessConfigurationId

String

Yes

No

The ID of the access configuration.

None.

DirectoryId

String

Yes

No

The directory ID.

None.

TargetId

String

Yes

No

The ID of the task object.

None.

TargetType

String

Yes

No

The type of the task object.

Set the value to RD-Account. A value of RD-Account specifies accounts in your resource directory.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AccessConfigurationId:
    Description:
      en: The ID of the access configuration.
    Required: true
    Type: String
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  TargetId:
    Description:
      en: The ID of the task object.
    Required: true
    Type: String
  TargetType:
    AllowedValues:
    - RD-Account
    Description:
      en: The type of the task object. Set the value to RD-Account, which specifies
        the accounts in the resource directory.
    Required: true
    Type: String
Resources:
  AccessConfigurationProvision:
    Properties:
      AccessConfigurationId:
        Ref: AccessConfigurationId
      DirectoryId:
        Ref: DirectoryId
      TargetId:
        Ref: TargetId
      TargetType:
        Ref: TargetType
    Type: ALIYUN::CloudSSO::AccessConfigurationProvision
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    },
    "TargetType": {
      "Type": "String",
      "Description": {
        "en": "The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory."
      },
      "AllowedValues": [
        "RD-Account"
      ],
      "Required": true
    },
    "AccessConfigurationId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the access configuration."
      },
      "Required": true
    },
    "TargetId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the task object."
      },
      "Required": true
    }
  },
  "Resources": {
    "AccessConfigurationProvision": {
      "Type": "ALIYUN::CloudSSO::AccessConfigurationProvision",
      "Properties": {
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "TargetType": {
          "Ref": "TargetType"
        },
        "AccessConfigurationId": {
          "Ref": "AccessConfigurationId"
        },
        "TargetId": {
          "Ref": "TargetId"
        }
      }
    }
  }
}
                        
```
