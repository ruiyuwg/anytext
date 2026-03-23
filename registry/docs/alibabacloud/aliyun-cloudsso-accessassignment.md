ALIYUN::CloudSSO::AccessAssignment is used to assign access permissions on an account in your resource directory to a user or group by using an access configuration.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::AccessAssignment",
  "Properties": {
    "DirectoryId": String,
    "PrincipalId": String,
    "TargetType": String,
    "PrincipalType": String,
    "AccessConfigurationId": String,
    "TargetId": String
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

AccessConfigurationId

String

Yes

No

The ID of the access configuration.

None.

DirectoryId

String

Yes

No

The directory ID.

None.

PrincipalId

String

Yes

No

The ID of the CloudSSO identity.

Valid values:

-   If you set `PrincipalType` to `User`, the value of `PrincipalId` is the ID of a CloudSSO user.
    
-   If you set `PrincipalType` to `Group`, the value of `PrincipalId` is the ID of a CloudSSO group.
    

PrincipalType

String

Yes

No

The type of the CloudSSO identity.

Valid values:

-   User
    
-   Group
    

TargetId

String

Yes

No

The ID of the task object.

None.

TargetType

String

Yes

No

The type of the task object.

Set the value to RD-Account. A value of RD-Account specifies accounts in your resource directory.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AccessConfigurationId:
    Description:
      en: The ID of the access configuration.
    Required: true
    Type: String
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  PrincipalId:
    Description:
      en: 'The ID of the CloudSSO identity.
        - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO
        user.
        - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO
        group.'
    Required: true
    Type: String
  PrincipalType:
    AllowedValues:
    - User
    - Group
    Description:
      en: 'The type of the CloudSSO identity. Valid values: User, Group'
    Required: true
    Type: String
  TargetId:
    Description:
      en: The ID of the task object.
    Required: true
    Type: String
  TargetType:
    AllowedValues:
    - RD-Account
    Description:
      en: The type of the task object. Set the value to RD-Account, which specifies
        the accounts in the resource directory.
    Required: true
    Type: String
Resources:
  AccessAssignment:
    Properties:
      AccessConfigurationId:
        Ref: AccessConfigurationId
      DirectoryId:
        Ref: DirectoryId
      PrincipalId:
        Ref: PrincipalId
      PrincipalType:
        Ref: PrincipalType
      TargetId:
        Ref: TargetId
      TargetType:
        Ref: TargetType
    Type: ALIYUN::CloudSSO::AccessAssignment                  
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
    "PrincipalId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the CloudSSO identity.\n- If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.\n- If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group."
      },
      "Required": true
    },
    "TargetType": {
      "Type": "String",
      "Description": {
        "en": "The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory."
      },
      "AllowedValues": [
        "RD-Account"
      ],
      "Required": true
    },
    "PrincipalType": {
      "Type": "String",
      "Description": {
        "en": "The type of the CloudSSO identity. Valid values: User, Group"
      },
      "AllowedValues": [
        "User",
        "Group"
      ],
      "Required": true
    },
    "AccessConfigurationId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the access configuration."
      },
      "Required": true
    },
    "TargetId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the task object."
      },
      "Required": true
    }
  },
  "Resources": {
    "AccessAssignment": {
      "Type": "ALIYUN::CloudSSO::AccessAssignment",
      "Properties": {
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "PrincipalId": {
          "Ref": "PrincipalId"
        },
        "TargetType": {
          "Ref": "TargetType"
        },
        "PrincipalType": {
          "Ref": "PrincipalType"
        },
        "AccessConfigurationId": {
          "Ref": "AccessConfigurationId"
        },
        "TargetId": {
          "Ref": "TargetId"
        }
      }
    }
  }
}                     
```
