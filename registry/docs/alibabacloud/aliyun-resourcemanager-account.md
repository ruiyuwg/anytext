ALIYUN::ResourceManager::Account is used to create a member of the resource account type.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::Account",
  "Properties": {
    "PayerAccountId": String,
    "DisplayName": String,
    "FolderId": String,
    "DeleteAccount": Boolean
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

PayerAccountId

String

No

No

The ID of the account used for settlement.

If you leave this property empty, the current account is used for settlement.

DisplayName

String

Yes

Yes

The display name of the member.

The name must be 2 to 50 characters in length, and can contain letters, digits, underscores (\_), periods (.), and hyphens (-).

The name must be unique in your resource directory.

FolderId

String

No

Yes

The ID of the resource folder.

None

DeleteAccount

Boolean

No

No

Specifies whether to delete the account.  

Valid values:

-   true
    
-   false (default)
    

## Return values

Fn::GetAtt

-   FolderId: the ID of the resource folder.
    
-   ResourceDirectoryId: the ID of the resource directory.
    
-   AccountId: the ID of the account.
    
-   DisplayName: the display name of the member.
    
-   Type: the member type. ResourceAccount indicates the resource account.
    
-   JoinMethod: the method for the member to join the resource directory. invited indicates that the member is invited into the resource directory. created indicates that the member account is created in the resource directory.
    

## Examples

YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
 PayerAccountId:
  Type: String
  Description: ''
 DisplayName:
  Type: String
  Description: Member name
 FolderId:
  Type: String
  Description: The ID of the parent folder
Resources:
 ResourceManagerAccount:
  Type: 'ALIYUN::ResourceManager::Account'
  Properties:
   PayerAccountId:
    Ref: PayerAccountId
   DisplayName:
    Ref: DisplayName
   FolderId:
    Ref: FolderId
Outputs:
 JoinMethod:
  Description: >-
   Ways for members to join the resource directory. Valid values: invited,
   created
  Value:
   'Fn::GetAtt':
    - ResourceManagerAccount
    - JoinMethod
 ResourceDirectoryId:
  Description: Resource directory ID
  Value:
   'Fn::GetAtt':
    - ResourceManagerAccount
    - ResourceDirectoryId
 Type:
  Description: Member type. The value of ResourceAccount indicates the resource account
  Value:
   'Fn::GetAtt':
    - ResourceManagerAccount
    - Type
 AccountId:
  Description: This ID of Resource Manager Account
  Value:
   'Fn::GetAtt':
    - ResourceManagerAccount
    - AccountId
 DisplayName:
  Description: Member name
  Value:
   'Fn::GetAtt':
    - ResourceManagerAccount
    - DisplayName
 FolderId:
  Description: The ID of the parent folder
  Value:
   'Fn::GetAtt':
    - ResourceManagerAccount
    - FolderId
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "PayerAccountId": {
      "Type": "String",
      "Description": ""
    },
    "DisplayName": {
      "Type": "String",
      "Description": "Member name"
    },
    "FolderId": {
      "Type": "String",
      "Description": "The ID of the parent folder"
    }
  },
  "Resources": {
    "ResourceManagerAccount": {
      "Type": "ALIYUN::ResourceManager::Account",
      "Properties": {
        "PayerAccountId": {
          "Ref": "PayerAccountId"
        },
        "DisplayName": {
          "Ref": "DisplayName"
        },
        "FolderId": {
          "Ref": "FolderId"
        }
      }
    }
  },
  "Outputs": {
    "JoinMethod": {
      "Description": "Ways for members to join the resource directory. Valid values: invited, created",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerAccount",
          "JoinMethod"
        ]
      }
    },
    "ResourceDirectoryId": {
      "Description": "Resource directory ID",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerAccount",
          "ResourceDirectoryId"
        ]
      }
    },
    "Type": {
      "Description": "Member type. The value of ResourceAccount indicates the resource account",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerAccount",
          "Type"
        ]
      }
    },
    "AccountId": {
      "Description": "This ID of Resource Manager Account",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerAccount",
          "AccountId"
        ]
      }
    },
    "DisplayName": {
      "Description": "Member name",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerAccount",
          "DisplayName"
        ]
      }
    },
    "FolderId": {
      "Description": "The ID of the parent folder",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerAccount",
          "FolderId"
        ]
      }
    }
  }
}
```
