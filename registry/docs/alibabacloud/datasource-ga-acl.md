DATASOURCE::GA::Acl is used to query the information about an access control list (ACL).

## Syntax

```
{
  "Type": "DATASOURCE::GA::Acl",
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

The ACL ID.

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

-   AclEntries: the entries in the ACL.
    
-   ResourceGroupId: the ID of the resource group to which the ACL belongs.
    
-   AclId: the ACL ID.
    
-   AddressIPVersion: the IP version of the ACL.
    
-   Tags: the tags that are added to the ACL.
    
-   AclName: the ACL name.
    

## Examples

-   `YAML` format
    
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
        Type: DATASOURCE::GA::Acl
        Properties:
          AclId:
            Ref: AclId
    Outputs:
      AclEntries:
        Description: The entries of the ACL.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - AclEntries
      ResourceGroupId:
        Description: The name of the network ACL.
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
      AddressIPVersion:
        Description: The ID of the network ACL.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - AddressIPVersion
      Tags:
        Description: The tag of the ACL.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - Tags
      AclName:
        Description: The ID of the GA instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - AclName
    ```
    
-   `JSON` format
    
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
          "Type": "DATASOURCE::GA::Acl",
          "Properties": {
            "AclId": {
              "Ref": "AclId"
            }
          }
        }
      },
      "Outputs": {
        "AclEntries": {
          "Description": "The entries of the ACL.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "AclEntries"
            ]
          }
        },
        "ResourceGroupId": {
          "Description": "The name of the network ACL.",
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
        "AddressIPVersion": {
          "Description": "The ID of the network ACL.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "AddressIPVersion"
            ]
          }
        },
        "Tags": {
          "Description": "The tag of the ACL.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "Tags"
            ]
          }
        },
        "AclName": {
          "Description": "The ID of the GA instance.",
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
