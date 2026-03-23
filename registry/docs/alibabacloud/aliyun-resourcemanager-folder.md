ALIYUN::ResourceManager::Folder is used to create a folder.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::Folder",
  "Properties": {
    "FolderName": String,
    "ParentFolderId": String
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

FolderName

String

Yes

Yes

The name of the folder.

The name must be 1 to 24 characters in length and can contain letters, digits, underscores (\_), periods (.), and hyphens (-).

ParentFolderId

String

No

No

The ID of the parent folder.

None

## Response parameters

Fn::GetAtt

-   FolderId: the ID of the folder.
-   FolderName: the name of the folder.
-   ParentFolderId: the ID of the parent folder.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "FolderName": {
      "Type": "String",
      "Description": "The name of the folder"
    },
    "ParentFolderId": {
      "Type": "String",
      "Description": "The ID of the parent folder. If not set, the system default value will be used"
    }
  },
  "Resources": {
    "ResourceManagerFolder": {
      "Type": "ALIYUN::ResourceManager::Folder",
      "Properties": {
        "FolderName": {
          "Ref": "FolderName"
        },
        "ParentFolderId": {
          "Ref": "ParentFolderId"
        }
      }
    }
  },
  "Outputs": {
    "FolderId": {
      "Description": "The ID of the folder",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerFolder",
          "FolderId"
        ]
      }
    },
    "FolderName": {
      "Description": "The name of the folder",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerFolder",
          "FolderName"
        ]
      }
    },
    "ParentFolderId": {
      "Description": "The ID of the parent folder. If not set, the system default value will be used",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerFolder",
          "ParentFolderId"
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
  FolderName:
    Type: String
    Description: The name of the folder
  ParentFolderId:
    Type: String
    Description: >-
      The ID of the parent folder. If not set, the system default value will be
      used
Resources:
  ResourceManagerFolder:
    Type: 'ALIYUN::ResourceManager::Folder'
    Properties:
      FolderName:
        Ref: FolderName
      ParentFolderId:
        Ref: ParentFolderId
Outputs:
  FolderId:
    Description: The ID of the folder
    Value:
      'Fn::GetAtt':
        - ResourceManagerFolder
        - FolderId
  FolderName:
    Description: The name of the folder
    Value:
      'Fn::GetAtt':
        - ResourceManagerFolder
        - FolderName
  ParentFolderId:
    Description: >-
      The ID of the parent folder. If not set, the system default value will be
      used
    Value:
      'Fn::GetAtt':
        - ResourceManagerFolder
        - ParentFolderId
```
