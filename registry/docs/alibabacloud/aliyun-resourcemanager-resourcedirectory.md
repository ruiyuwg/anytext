ALIYUN::ResourceManager::ResourceDirectory is used to enable a resource directory. After you enable a resource directory, the system creates a root folder and sets the current account as the master account. The master account has all administrative permissions on this resource directory.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::ResourceDirectory",
  "Properties": {}
}
```

## Properties

None

## Response parameters

Fn::GetAtt

-   ResourceDirectoryId: the ID of the resource directory.
-   MasterAccountName: the name of the master account.
-   CreateTime: the time when the resource directory was enabled.
-   RootFolderId: the ID of the root folder.
-   MasterAccountId: the ID of the master account.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ResourceManagerResourceDirectory": {
      "Type": "ALIYUN::ResourceManager::ResourceDirectory",
      "Properties": {}
    }
  },
  "Outputs": {
    "ResourceDirectoryId": {
      "Description": "The ID of the resource directory",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceDirectory",
          "ResourceDirectoryId"
        ]
      }
    },
    "MasterAccountName": {
      "Description": "The name of the master account",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceDirectory",
          "MasterAccountName"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the resource directory was created",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceDirectory",
          "CreateTime"
        ]
      }
    },
    "RootFolderId": {
      "Description": "The ID of the root folder",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceDirectory",
          "RootFolderId"
        ]
      }
    },
    "MasterAccountId": {
      "Description": "The ID of the master account",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceDirectory",
          "MasterAccountId"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ResourceManagerResourceDirectory:
    Type: 'ALIYUN::ResourceManager::ResourceDirectory'
    Properties: {}
Outputs:
  ResourceDirectoryId:
    Description: The ID of the resource directory
    Value:
      'Fn::GetAtt':
        - ResourceManagerResourceDirectory
        - ResourceDirectoryId
  MasterAccountName:
    Description: The name of the master account
    Value:
      'Fn::GetAtt':
        - ResourceManagerResourceDirectory
        - MasterAccountName
  CreateTime:
    Description: The time when the resource directory was created
    Value:
      'Fn::GetAtt':
        - ResourceManagerResourceDirectory
        - CreateTime
  RootFolderId:
    Description: The ID of the root folder
    Value:
      'Fn::GetAtt':
        - ResourceManagerResourceDirectory
        - RootFolderId
  MasterAccountId:
    Description: The ID of the master account
    Value:
      'Fn::GetAtt':
        - ResourceManagerResourceDirectory
        - MasterAccountId
```
