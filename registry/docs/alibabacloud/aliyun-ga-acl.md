ALIYUN::GA::Acl is used to create an access control list (ACL).

## Syntax

```
{
  "Type": "ALIYUN::GA::Acl",
  "Properties": {
    "AclEntries": List,
    "ResourceGroupId": String,
    "AddressIPVersion": String,
    "AclName": String,
    "Tags": List
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

AddressIPVersion

String

Yes

No

The IP version of the ACL.

Valid values:

-   **IPv4**
    
-   **IPv6**
    

AclEntries

List

No

No

The entries of IP addresses or CIDR blocks that you want to add to the ACL.

You can add up to 50 entries at a time. For more information, see the "AclEntries properties" section of this topic.

AclName

String

No

Yes

The ACL name.

The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

Tags

List

No

Yes

The tags of the ACL.

You can add up to 20 tags at a time. For more information, see the "Tags properties"of this topic.

## AclEntries syntax

```
"AclEntries": [
  {
    "Entry": String,
    "EntryDescription": String
  }
]
```

## AclEntries properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Entry

String

No

No

The entry that you want to add to the ACL.

For example, the entry is an IP address in the 192.168.XX.XX format or a CIDR block in the 10.0.XX.XX/24 format.

EntryDescription

String

No

No

The entry description.

You can specify up to 50 descriptions at a time.

The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

No

No

The tag value of the ACL.

The tag value can be an empty string.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

You can specify up to 20 tag values.

Key

String

Yes

No

The tag key of the ACL.

The tag key cannot be an empty string.

The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

You can specify up to 20 tag keys.

## Return values

Fn::GetAtt

-   AclEntries: the entries that are added to the ACL.
    
-   ResourceGroupId: the ID of the resource group.
    
-   AclId: the ACL ID.
    
-   AddressIPVersion: the IP version of the ACL.
    
-   Tags: the tags of the ACL.
    
-   AclName: the ACL name.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclEntries:
    AssociationPropertyMetadata:
      Parameters:
        Entry:
          Type: String
          Description:
            en: The IP addresses (192.168.XX.XX) or CIDR blocks (10.0.XX.XX/24) that you want to add to the ACL.
          Required: false
        EntryDescription:
          Type: String
          Description:
            en: The description of the entry that you want to add to the AC,The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
          Required: false
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
    Required: false
    MinLength: 0
    MaxLength: 20
  AddressIPVersion:
    Type: String
    Description:
      en: The IP version of the ACL.
    Required: true
  AclName:
    Type: String
    Description:
      en: The name of the ACL.
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::Acl
    Properties:
      AclEntries:
        Ref: AclEntries
      AddressIPVersion:
        Ref: AddressIPVersion
      AclName:
        Ref: AclName
Outputs:
  AclEntries:
    Description: The entries of the ACL.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AclEntries
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ResourceGroupId
  AclId:
    Description: The  ID of the ACL.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AclId
  AddressIPVersion:
    Description: The IP version of the ACL.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AddressIPVersion
  Tags:
    Description: The tags of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tags
  AclName:
    Description: The name of the ACL.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AclName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AclEntries": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Entry": {
            "Type": "String",
            "Description": {
              "en": "The IP addresses (192.168.XX.XX) or CIDR blocks (10.0.XX.XX/24) that you want to add to the ACL."
            },
            "Required": false
          },
          "EntryDescription": {
            "Type": "String",
            "Description": {
              "en": "The description of the entry that you want to add to the AC,The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_)."
            },
            "Required": false
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries."
      },
      "Required": false,
      "MinLength": 0,
      "MaxLength": 20
    },
    "AddressIPVersion": {
      "Type": "String",
      "Description": {
        "en": "The IP version of the ACL."
      },
      "Required": true
    },
    "AclName": {
      "Type": "String",
      "Description": {
        "en": "The name of the ACL."
      },
      "Required": false
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::Acl",
      "Properties": {
        "AclEntries": {
          "Ref": "AclEntries"
        },
        "AddressIPVersion": {
          "Ref": "AddressIPVersion"
        },
        "AclName": {
          "Ref": "AclName"
        }
      }
    }
  },
  "Outputs": {
    "AclEntries": {
      "Description": "The entries of the ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AclEntries"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ResourceGroupId"
        ]
      }
    },
    "AclId": {
      "Description": "The  ID of the ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AclId"
        ]
      }
    },
    "AddressIPVersion": {
      "Description": "The IP version of the ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AddressIPVersion"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tags"
        ]
      }
    },
    "AclName": {
      "Description": "The name of the ACL.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AclName"
        ]
      }
    }
  }
}
                        
```
