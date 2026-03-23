DATASOURCE::SLB::AccessControls is used to query created access control lists (ACLs).

## Syntax

```
{
  "Type": "DATASOURCE::SLB::AccessControls",
  "Properties": {
    "AddressIpVersion": String,
    "ResourceGroupId": String,
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

AddressIpVersion

String

No

Yes

The IP version of the Server Load Balancer (SLB) instance with which the ACL is associated.

Valid values:

-   ipv4
    
-   ipv6
    

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

AclName

String

No

Yes

The ACL name.

The name must be 1 to 80 characters in length, and can contain only letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (\_).

The name of the ACL must be unique.

Fuzzy match is supported.

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

-   AccessControls: details of the ACLs.
    
-   AclIds: the IDs of the ACLs.
    

**Property**

**Type**

**Description**

**Constraint**

AclIds

List

The IDs of the ACLs.

None.

AccessControls

List

Details of the ACLs.

None.

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

AddressIpVersion

String

The IP version of the SLB instance with which the ACL is associated.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AclName": {
      "Type": "String",
      "Description": "The name of the network ACL."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::AccessControls",
      "Properties": {
        "AclName": {
          "Ref": "AclName"
        }
      }
    }
  },
  "Outputs": {
    "AccessControls": {
      "Description": "The list of access controls.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccessControls"
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

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclName:
    Description: The name of the network ACL.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      AclName:
        Ref: AclName
    Type: DATASOURCE::SLB::AccessControls
Outputs:
  AccessControls:
    Description: The list of access controls.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AccessControls
  AclIds:
    Description: The list of acl IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AclIds
```
