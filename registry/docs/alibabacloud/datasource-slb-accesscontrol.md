DATASOURCE::SLB::AccessControl is used to query the configurations of an access control list (ACL).

## Syntax

```
{
  "Type": "DATASOURCE::SLB::AccessControl",
  "Properties": {
    "AclId": String,
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

AclId

String

Yes

Yes

The ID of the ACL.

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

-   AclEntries: the information about entries in the ACL.
    
-   AddressIpVersion: the IP version of the Server Load Balancer (SLB) instance with which the ACL is associated.
    
-   ResourceGroupId: the ID of the resource group.
    
-   AclId: the ID of the ACL.
    
-   RelatedListeners: the listeners that are associated with the ACL.
    
-   Tags: the tags of the ACL.
    
-   AclName: the name of the ACL.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclId:
    Type: String
    Description:
      en: The ID of the ACL.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::AccessControl
    Properties:
      AclId:
        Ref: AclId
Outputs:
  AclEntries:
    Description: The IP entries that you want to remove from the network ACL.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclEntries
  AddressIpVersion:
    Description: 'The IP version. Valid values: ipv4 and ipv6.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AddressIpVersion
  ResourceGroupId:
    Description: The resource group ID.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  AclId:
    Description: The ID of the ACL.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclId
  RelatedListeners:
    Description: The listeners that are associated with the network ACL.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RelatedListeners
  Tags:
    Description: The tags of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  AclName:
    Description: The ACL name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AclId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the ACL."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::AccessControl",
      "Properties": {
        "AclId": {
          "Ref": "AclId"
        }
      }
    }
  },
  "Outputs": {
    "AclEntries": {
      "Description": "The IP entries that you want to remove from the network ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclEntries"
        ]
      }
    },
    "AddressIpVersion": {
      "Description": "The IP version. Valid values: ipv4 and ipv6.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AddressIpVersion"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The resource group ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "AclId": {
      "Description": "The ID of the ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclId"
        ]
      }
    },
    "RelatedListeners": {
      "Description": "The listeners that are associated with the network ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RelatedListeners"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "AclName": {
      "Description": "The ACL name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclName"
        ]
      }
    }
  }
}
                        
```
