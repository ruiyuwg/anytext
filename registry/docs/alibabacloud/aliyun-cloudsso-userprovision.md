ALIYUN::CloudSSO::UserProvision is used to create a Resource Access Management (RAM) user provisioning.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::UserProvision",
  "Properties": {
    "Description": String,
    "DirectoryId": String,
    "PrincipalId": String,
    "TargetType": String,
    "DuplicationStrategy": String,
    "DeletionStrategy": String,
    "PrincipalType": String,
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

DeletionStrategy

String

Yes

Yes

The deletion policy.

You can use this policy to determine whether to delete the synchronized RAM users when you delete the RAM user provisioning. Valid values:

-   Delete: deletes the synchronized RAM users when you delete the RAM user provisioning.
    
-   Keep: retains the synchronized RAM users when you delete the RAM user provisioning.
    

DirectoryId

String

Yes

No

The directory ID.

None.

DuplicationStrategy

String

Yes

Yes

The conflict handling policy.

The policy is used when an existing RAM user has the same username as the CloudSSO user that is synchronized to RAM. Valid values:

-   KeepBoth: retains the existing RAM user and the CloudSSO user. When an existing RAM user has the same username as the CloudSSO user that is synchronized to RAM, the system appends the `_sso` suffix to the username of the CloudSSO user to create a new RAM user.
    
-   TakeOver: replaces the existing RAM user with the CloudSSO user. When an existing RAM user has the same username as the CloudSSO user that is synchronized to RAM, the system replaces the RAM user with the CloudSSO user.
    

PrincipalId

String

Yes

No

The identity ID of the RAM user provisioning.

Valid values:

-   If you set `PrincipalType` to `Group`, you must set PrincipalId to the ID of a CloudSSO group in the g-\*\*\*\*\*\*\*\* format.
    
-   If you set `PrincipalType` to `User`, you must set PrincipalId to the ID of a CloudSSO user in the u-\*\*\*\*\*\*\*\* format.
    

PrincipalType

String

Yes

No

The identity type of the RAM user provisioning.

Valid values:

-   User: CloudSSO user
    
-   Group: CloudSSO group
    

TargetId

String

Yes

No

The ID of the object for which you want to create the RAM user provisioning.

The value must be the ID of an account in your resource directory.

TargetType

String

Yes

No

The type of the object for which you want to create the RAM user provisioning.

Set the value to `RD-Account`.

Description

String

No

Yes

The description.

None.

## Return values

Fn::GetAtt

UserProvisionId: the ID of the RAM user provisioning.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DeletionStrategy:
    AllowedValues:
    - Delete
    - Keep
    Description:
      en: 'Delete policy. The treatment strategy for the synchronized RAM users when
        the RAM user synchronization is removed. Valid values:

        - Delete: Delete When the RAM user synchronization is removed, the RAM users
        that have been synchronized to the RAM from the cloud SSO are deleted.

        - Keep: When the RAM user synchronization is removed, the RAM users that have
        been synchronized to the RAM from the cloud SSO are retained.'
    Required: true
    Type: String
  Description:
    AssociationProperty: TextArea
    Description:
      en: The description of the user.
    Required: false
    Type: String
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  DuplicationStrategy:
    AllowedValues:
    - KeepBoth
    - TakeOver
    Description:
      en: 'Conflict policy. When the cloud SSO user is synchronized to the RAM, the
        processing strategy if there is a user with the same name in the RAM. Valid
        values:

        - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to
        RAM, if the RAM already has a user with the same name, it will try to create
        a RAM user with the user name after adding the suffix _sso to the user name
        of the cloud SSO user.

        - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM,
        if the RAM already has a user with the same name, the existing RAM user is
        directly replaced by the cloud SSO synchronization user.'
    Required: true
    Type: String
  PrincipalId:
    Description:
      en: 'The ID of the principal. Valid values:

        - When the PrincipalType value is Group, the value is the cloud SSO user group
        ID (g-********).

        - When PrincipalType takes the value User, this value is the cloud SSO user
        ID (u-********).'
    Required: true
    Type: String
  PrincipalType:
    AllowedValues:
    - User
    - Group
    Description:
      en: 'The type of the principal. Valid values:

        - User: The principal is a cloud SSO user.

        - Group: The principal is a cloud SSO group.'
    Required: true
    Type: String
  TargetId:
    Description:
      en: Target ID for RAM user synchronization. Currently, it is the RD account
        ID.
    Required: true
    Type: String
  TargetType:
    AllowedValues:
    - RD-Account
    Description:
      en: Target type for RAM user synchronization. Currently, it is RD-Account.
    Required: true
    Type: String
Resources:
  UserProvision:
    Properties:
      DeletionStrategy:
        Ref: DeletionStrategy
      Description:
        Ref: Description
      DirectoryId:
        Ref: DirectoryId
      DuplicationStrategy:
        Ref: DuplicationStrategy
      PrincipalId:
        Ref: PrincipalId
      PrincipalType:
        Ref: PrincipalType
      TargetId:
        Ref: TargetId
      TargetType:
        Ref: TargetType
    Type: ALIYUN::CloudSSO::UserProvision
Outputs:
  UserProvisionId:
    Description: The ID of the user provisioning.
    Value:
      Fn::GetAtt:
      - UserProvision
      - UserProvisionId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The description of the user."
      },
      "Required": false
    },
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
        "en": "The ID of the principal. Valid values:\n- When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).\n- When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********)."
      },
      "Required": true
    },
    "TargetType": {
      "Type": "String",
      "Description": {
        "en": "Target type for RAM user synchronization. Currently, it is RD-Account."
      },
      "AllowedValues": [
        "RD-Account"
      ],
      "Required": true
    },
    "DuplicationStrategy": {
      "Type": "String",
      "Description": {
        "en": "Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:\n- KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.\n- TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user."
      },
      "AllowedValues": [
        "KeepBoth",
        "TakeOver"
      ],
      "Required": true
    },
    "DeletionStrategy": {
      "Type": "String",
      "Description": {
        "en": "Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:\n- Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.\n- Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained."
      },
      "AllowedValues": [
        "Delete",
        "Keep"
      ],
      "Required": true
    },
    "PrincipalType": {
      "Type": "String",
      "Description": {
        "en": "The type of the principal. Valid values:\n- User: The principal is a cloud SSO user.\n- Group: The principal is a cloud SSO group."
      },
      "AllowedValues": [
        "User",
        "Group"
      ],
      "Required": true
    },
    "TargetId": {
      "Type": "String",
      "Description": {
        "en": "Target ID for RAM user synchronization. Currently, it is the RD account ID."
      },
      "Required": true
    }
  },
  "Resources": {
    "UserProvision": {
      "Type": "ALIYUN::CloudSSO::UserProvision",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "PrincipalId": {
          "Ref": "PrincipalId"
        },
        "TargetType": {
          "Ref": "TargetType"
        },
        "DuplicationStrategy": {
          "Ref": "DuplicationStrategy"
        },
        "DeletionStrategy": {
          "Ref": "DeletionStrategy"
        },
        "PrincipalType": {
          "Ref": "PrincipalType"
        },
        "TargetId": {
          "Ref": "TargetId"
        }
      }
    }
  },
  "Outputs": {
    "UserProvisionId": {
      "Description": "The ID of the user provisioning.",
      "Value": {
        "Fn::GetAtt": [
          "UserProvision",
          "UserProvisionId"
        ]
      }
    }
  }
}
                        
```
