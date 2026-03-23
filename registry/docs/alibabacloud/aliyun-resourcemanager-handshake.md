ALIYUN::ResourceManager::Handshake is used to create an invitation.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::Handshake",
  "Properties": {
    "Note": String,
    "TargetType": String,
    "TargetEntity": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

Note

String

No

No

The remarks of the invitation.

None

TargetType

String

Yes

No

The type of the invited account.

Valid values:

-   Account: the ID of the account.
-   Email: the logon email address of the account.

TargetEntity

String

Yes

No

The ID or logon email address of the invited account.

None

## Response parameters

Fn::GetAtt

-   ResourceDirectoryId: the ID of the resource directory.
-   HandshakeId: the ID of the invitation.
-   Note: the remarks of the invitation.
-   TargetType: the type of the invited account.
-   TargetEntity: the ID or logon email address of the invited account.
-   MasterAccountName: the name of the master account.
-   MasterAccountId: the ID of the master account.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Note": {
      "Type": "String",
      "Description": "Remarks"
    },
    "TargetType": {
      "Type": "String",
      "Description": "Type of account being invited. Valid values: Account, Email"
    },
    "TargetEntity": {
      "Type": "String",
      "Description": "Invited account ID or login email"
    }
  },
  "Resources": {
    "ResourceManagerHandshake": {
      "Type": "ALIYUN::ResourceManager::Handshake",
      "Properties": {
        "Note": {
          "Ref": "Note"
        },
        "TargetType": {
          "Ref": "TargetType"
        },
        "TargetEntity": {
          "Ref": "TargetEntity"
        }
      }
    }
  },
  "Outputs": {
    "ResourceDirectoryId": {
      "Description": "Resource directory ID",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerHandshake",
          "ResourceDirectoryId"
        ]
      }
    },
    "HandshakeId": {
      "Description": "This ID of Resource Manager handshake",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerHandshake",
          "HandshakeId"
        ]
      }
    },
    "Note": {
      "Description": "Remarks",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerHandshake",
          "Note"
        ]
      }
    },
    "MasterAccountName": {
      "Description": "The name of the main account of the resource directory",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerHandshake",
          "MasterAccountName"
        ]
      }
    },
    "TargetType": {
      "Description": "Type of account being invited. Valid values: Account, Email",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerHandshake",
          "TargetType"
        ]
      }
    },
    "MasterAccountId": {
      "Description": "Resource account master account ID",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerHandshake",
          "MasterAccountId"
        ]
      }
    },
    "TargetEntity": {
      "Description": "Invited account ID or login email",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerHandshake",
          "TargetEntity"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Note:
    Type: String
    Description: Remarks
  TargetType:
    Type: String
    Description: 'Type of account being invited. Valid values: Account, Email'
  TargetEntity:
    Type: String
    Description: Invited account ID or login email
Resources:
  ResourceManagerHandshake:
    Type: 'ALIYUN::ResourceManager::Handshake'
    Properties:
      Note:
        Ref: Note
      TargetType:
        Ref: TargetType
      TargetEntity:
        Ref: TargetEntity
Outputs:
  ResourceDirectoryId:
    Description: Resource directory ID
    Value:
      'Fn::GetAtt':
        - ResourceManagerHandshake
        - ResourceDirectoryId
  HandshakeId:
    Description: This ID of Resource Manager handshake
    Value:
      'Fn::GetAtt':
        - ResourceManagerHandshake
        - HandshakeId
  Note:
    Description: Remarks
    Value:
      'Fn::GetAtt':
        - ResourceManagerHandshake
        - Note
  MasterAccountName:
    Description: The name of the main account of the resource directory
    Value:
      'Fn::GetAtt':
        - ResourceManagerHandshake
        - MasterAccountName
  TargetType:
    Description: 'Type of account being invited. Valid values: Account, Email'
    Value:
      'Fn::GetAtt':
        - ResourceManagerHandshake
        - TargetType
  MasterAccountId:
    Description: Resource account master account ID
    Value:
      'Fn::GetAtt':
        - ResourceManagerHandshake
        - MasterAccountId
  TargetEntity:
    Description: Invited account ID or login email
    Value:
      'Fn::GetAtt':
        - ResourceManagerHandshake
        - TargetEntity
```
