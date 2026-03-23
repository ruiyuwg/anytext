DATASOURCE::CLOUDFW::AddressBook is used to query the information about an address book for access control in Cloud Firewall.

## Syntax

```
{
  "Type": "DATASOURCE::CLOUDFW::AddressBook",
  "Properties": {
    "GroupUuid": String,
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

GroupUuid

String

Yes

Yes

The UUID of the address book.

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

-   GroupName: the name of the address book.
    
-   Description: the description of the address book.
    
-   TagRelation: the logical relation among Elastic Compute Service (ECS) tags.
    
-   GroupType: the type of the address book.
    
-   GroupUuid: the UUID of the address book.
    
-   AddressListCount: the number of addresses in the address book.
    
-   AutoAddTagEcs: indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags. This property is returned only for newly purchased ECS instances whose tag settings are complete or ECS instances whose tag settings are modified.
    
-   AddressList: the addresses in the address book.
    
-   Tags: the information about the ECS tags that can be automatically added to the address book.
    
-   ReferenceCount: the number of times that the address book is referenced.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  GroupUuid:
    Type: String
    Description:
      en: The UUID of the address book.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CLOUDFW::AddressBook
    Properties:
      GroupUuid:
        Ref: GroupUuid
Outputs:
  GroupName:
    Description: The name of the address book.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GroupName
  Description:
    Description: The description of the address book.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  TagRelation:
    Description: The logical relationship among ECS tags.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TagRelation
  GroupType:
    Description: The type of the address book.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GroupType
  GroupUuid:
    Description: The UUID of the address book.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GroupUuid
  AddressListCount:
    Description: The number of addresses in the address book.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AddressListCount
  AutoAddTagEcs:
    Description: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AutoAddTagEcs
  AddressList:
    Description: The addresses in the address book.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AddressList
  Tags:
    Description: The details about the ECS tags that can be automatically added to the address book.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  ReferenceCount:
    Description: The number of times that the address book is referenced.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ReferenceCount
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "GroupUuid": {
      "Type": "String",
      "Description": {
        "en": "The UUID of the address book."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CLOUDFW::AddressBook",
      "Properties": {
        "GroupUuid": {
          "Ref": "GroupUuid"
        }
      }
    }
  },
  "Outputs": {
    "GroupName": {
      "Description": "The name of the address book.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupName"
        ]
      }
    },
    "Description": {
      "Description": "The description of the address book.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "TagRelation": {
      "Description": "The logical relationship among ECS tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TagRelation"
        ]
      }
    },
    "GroupType": {
      "Description": "The type of the address book.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupType"
        ]
      }
    },
    "GroupUuid": {
      "Description": "The UUID of the address book.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupUuid"
        ]
      }
    },
    "AddressListCount": {
      "Description": "The number of addresses in the address book.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AddressListCount"
        ]
      }
    },
    "AutoAddTagEcs": {
      "Description": "Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AutoAddTagEcs"
        ]
      }
    },
    "AddressList": {
      "Description": "The addresses in the address book.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AddressList"
        ]
      }
    },
    "Tags": {
      "Description": "The details about the ECS tags that can be automatically added to the address book.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "ReferenceCount": {
      "Description": "The number of times that the address book is referenced.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ReferenceCount"
        ]
      }
    }
  }
}
                        
```
