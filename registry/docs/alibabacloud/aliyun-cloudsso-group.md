ALIYUN::CloudSSO::Group is used to create a group in CloudSSO.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::Group",
  "Properties": {
    "GroupName": String,
    "DirectoryId": String,
    "Description": String
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

DirectoryId

String

Yes

No

The directory ID.

None.

GroupName

String

Yes

Yes

The group name.

The name can contain letters, digits, underscores (\_), hyphens (-), and periods (.).

It can be up to 128 characters in length.

Description

String

No

Yes

The description of the group.

The description can be up to 1,024 characters in length.

## Return values

Fn::GetAtt

GroupId: the group ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    AssociationProperty: TextArea
    Description:
      en: 'The description of the group.

        The description can be up to 1,024 characters in length.'
    MaxLength: 1024
    Required: false
    Type: String
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  GroupName:
    AllowedPattern: ^[a-zA-Z0-9._-]{1,128}$
    Description:
      en: 'The name of the group.

        The name can contain letters, digits, underscores (_), hyphens (-), and periods
        (.).

        The name can be up to 128 characters in length.'
    Required: true
    Type: String
Resources:
  Group:
    Properties:
      Description:
        Ref: Description
      DirectoryId:
        Ref: DirectoryId
      GroupName:
        Ref: GroupName
    Type: ALIYUN::CloudSSO::Group
Outputs:
  GroupId:
    Description: The ID of the group.
    Value:
      Fn::GetAtt:
      - Group
      - GroupId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "GroupName": {
      "Type": "String",
      "Description": {
        "en": "The name of the group.\nThe name can contain letters, digits, underscores (_), hyphens (-), and periods (.).\nThe name can be up to 128 characters in length."
      },
      "AllowedPattern": "^[a-zA-Z0-9._-]{1,128}$",
      "Required": true
    },
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    },
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The description of the group.\nThe description can be up to 1,024 characters in length."
      },
      "Required": false,
      "MaxLength": 1024
    }
  },
  "Resources": {
    "Group": {
      "Type": "ALIYUN::CloudSSO::Group",
      "Properties": {
        "GroupName": {
          "Ref": "GroupName"
        },
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "Description": {
          "Ref": "Description"
        }
      }
    }
  },
  "Outputs": {
    "GroupId": {
      "Description": "The ID of the group.",
      "Value": {
        "Fn::GetAtt": [
          "Group",
          "GroupId"
        ]
      }
    }
  }
}
                        
```
