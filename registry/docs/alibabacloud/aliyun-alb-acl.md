ALIYUN::ALB::Acl is used to create an access control list (ACL).

## Syntax

```
{
  "Type": "ALIYUN::ALB::Acl",
  "Properties": {
    "AclEntries": List,
    "ResourceGroupId": String,
    "AclName": String
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

AclEntries

List

No

Yes

The configurations of the ACL entries.

None.

AclName

String

No

Yes

The ACL name.

The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

ResourceGroupId

String

No

No

The ID of the resource group.

None.

## AclEntries syntax

```
"AclEntries": [
  {
    "Entry": String,
    "Description": String
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

Yes

No

The CIDR block of the ACL entry.

None.

Description

String

No

No

The description of the ACL entry.

The description must be 2 to 256 characters in length and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (\_), and hyphens (-).

## Return values

Fn::GetAtt

AclId: the ACL ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclEntries:
    MaxLength: 1000
    Type: Json
  AclName:
    Description: 'The name of the ACL. The name must be 2 to 128 characters in length,
      and can contain

      letters, digits, hyphens (-) and underscores (_). It must start with a letter.'
    MaxLength: 128
    MinLength: 2
    Type: String
Resources:
  Acl:
    Properties:
      AclEntries:
        Ref: AclEntries
      AclName:
        Ref: AclName
    Type: ALIYUN::ALB::Acl
Outputs:
  AclId:
    Description: The ID of the ACL.
    Value:
      Fn::GetAtt:
      - Acl
      - AclId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AclEntries": {
      "Type": "Json",
      "MaxLength": 1000
    },
    "AclName": {
      "Type": "String",
      "Description": "The name of the ACL. The name must be 2 to 128 characters in length, and can contain\nletters, digits, hyphens (-) and underscores (_). It must start with a letter.",
      "MinLength": 2,
      "MaxLength": 128
    }
  },
  "Resources": {
    "Acl": {
      "Type": "ALIYUN::ALB::Acl",
      "Properties": {
        "AclEntries": {
          "Ref": "AclEntries"
        },
        "AclName": {
          "Ref": "AclName"
        }
      }
    }
  },
  "Outputs": {
    "AclId": {
      "Description": "The ID of the ACL.",
      "Value": {
        "Fn::GetAtt": [
          "Acl",
          "AclId"
        ]
      }
    }
  }
}
```
