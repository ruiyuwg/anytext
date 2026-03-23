ALIYUN::CloudSSO::UserToGroupAddition is used to add a user to a group.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::UserToGroupAddition",
  "Properties": {
    "DirectoryId": String,
    "UserId": String,
    "GroupId": String
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

GroupId

String

Yes

No

The group ID.

None.

UserId

String

Yes

No

The user ID.

None.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  GroupId:
    Description:
      en: The ID of the group.
    Required: true
    Type: String
  UserId:
    Description:
      en: The ID of the user.
    Required: true
    Type: String
Resources:
  UserToGroupAddition:
    Properties:
      DirectoryId:
        Ref: DirectoryId
      GroupId:
        Ref: GroupId
      UserId:
        Ref: UserId
    Type: ALIYUN::CloudSSO::UserToGroupAddition
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    },
    "UserId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the user."
      },
      "Required": true
    },
    "GroupId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the group."
      },
      "Required": true
    }
  },
  "Resources": {
    "UserToGroupAddition": {
      "Type": "ALIYUN::CloudSSO::UserToGroupAddition",
      "Properties": {
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "UserId": {
          "Ref": "UserId"
        },
        "GroupId": {
          "Ref": "GroupId"
        }
      }
    }
  }
}
                        
```
