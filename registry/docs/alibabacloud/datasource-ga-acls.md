DATASOURCE::GA::Acls is used to query access control lists (ACLs).

## Syntax

```
{
  "Type": "DATASOURCE::GA::Acls",
  "Properties": {
    "ResourceGroupId": String,
    "AclId": String,
    "AclName": String,
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

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

AclId

String

No

Yes

The ACL ID.

None.

AclName

String

No

Yes

The ACL name.

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

-   Acls: details of the ACLs.
    
-   AclIds: the IDs of the ACLs.
    

**Property**

**Type**

**Description**

**Constraint**

AclIds

List

The IDs of the ACLs.

None.

Acls

List

Details of the ACLs.

None.

Status

String

The status of the ACL.

Valid values:

-   init: The ACL is being initialized.
    
-   active: The ACL is available.
    
-   configuring: The ACL is being configured.
    
-   updating: The ACL is being updated.
    
-   deleting: The ACL is being deleted.
    

ResourceGroupId

String

The ID of the resource group.

None.

AclName

String

The ACL name.

None.

AclId

String

The ACL ID.

None.

AddressIPVersion

String

The IP version of the ACL.

Valid values:

-   IPv4
    
-   IPv6
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::GA::Acls
    Properties:
      AclName: test-acl
Outputs:
  Acls:
    Description: The list of acls.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Acls
  AclIds:
    Description: The list of acl IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::GA::Acls",
      "Properties": {
        "AclName": "test-acl"
      }
    }
  },
  "Outputs": {
    "Acls": {
      "Description": "The list of acls.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Acls"
        ]
      }
    },
    "AclIds": {
      "Description": "The list of acl IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclIds"
        ]
      }
    }
  }
}
```
