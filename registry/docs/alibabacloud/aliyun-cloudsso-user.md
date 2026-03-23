ALIYUN::CloudSSO::User is used to create a user.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::User",
  "Properties": {
    "Status": String,
    "UserName": String,
    "DirectoryId": String,
    "Description": String,
    "Email": String,
    "FirstName": String,
    "DisplayName": String,
    "LastName": String
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

UserName

String

Yes

No

The username.

The username must be unique within the directory. It cannot be changed.

It can contain digits, letters, and the following special characters: `@ _ - .`.

It can be up to 64 characters in length.

Description

String

No

Yes

The description of the user.

The description can be up to 1,024 characters in length.

DisplayName

String

No

Yes

The display name of the user.

The display name can be up to 256 characters in length.

Email

String

No

Yes

The email address of the user.

The email address must be unique within the directory.

It can be up to 128 characters in length.

FirstName

String

No

Yes

The first name of the user.

The first name can be up to 64 characters in length.

LastName

String

No

Yes

The last name of the user.

The last name can be up to 64 characters in length.

Status

String

No

Yes

The status of the user.

Valid values:

-   Enabled (default)
    
-   Disabled
    

## Return values

Fn::GetAtt

UserId: the user ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    AssociationProperty: TextArea
    Description:
      en: 'The description of the user.

        The description can be up to 1,024 characters in length.'
    MaxLength: 1024
    Required: false
    Type: String
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  DisplayName:
    Description:
      en: 'The display name of the user.

        The name can be up to 256 characters in length.'
    MaxLength: 256
    Required: false
    Type: String
  Email:
    Description:
      en: 'The email address of the user. The email address must be unique within
        the directory.

        The email address can be up to 128 characters in length.'
    MaxLength: 128
    Required: false
    Type: String
  FirstName:
    Description:
      en: 'The first name of the user.
        The name can be up to 64 characters in length.'
    MaxLength: 64
    Required: false
    Type: String
  LastName:
    Description:
      en: 'The last name of the user.
        The name can be up to 64 characters in length.'
    MaxLength: 64
    Required: false
    Type: String
  Status:
    AllowedValues:
    - Enabled
    - Disabled
    Description:
      en: 'The status of the user. Valid values:

        - Enabled: The logon of the user is enabled. This is the default value.

        - Disabled: The logon of the user is disabled.'
    Required: false
    Type: String
  UserName:
    AllowedPattern: ^[a-zA-Z0-9@._-]{1,64}$
    Description:
      en: 'The name of the user. The name must be unique within the directory. The
        name cannot be changed.

        The name can contain numbers, letters, and the following special characters:
        @_-.

        The name can be up to 64 characters in length.'
    Required: true
    Type: String
Resources:
  User:
    Properties:
      Description:
        Ref: Description
      DirectoryId:
        Ref: DirectoryId
      DisplayName:
        Ref: DisplayName
      Email:
        Ref: Email
      FirstName:
        Ref: FirstName
      LastName:
        Ref: LastName
      Status:
        Ref: Status
      UserName:
        Ref: UserName
    Type: ALIYUN::CloudSSO::User
Outputs:
  UserId:
    Description: The ID of the user.
    Value:
      Fn::GetAtt:
      - User
      - UserId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Status": {
      "Type": "String",
      "Description": {
        "en": "The status of the user. Valid values:\n- Enabled: The logon of the user is enabled. This is the default value.\n- Disabled: The logon of the user is disabled."
      },
      "AllowedValues": [
        "Enabled",
        "Disabled"
      ],
      "Required": false
    },
    "UserName": {
      "Type": "String",
      "Description": {
        "en": "The name of the user. The name must be unique within the directory. The name cannot be changed.\nThe name can contain numbers, letters, and the following special characters: @_-.\nThe name can be up to 64 characters in length."
      },
      "AllowedPattern": "^[a-zA-Z0-9@._-]{1,64}$",
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
        "en": "The description of the user.\nThe description can be up to 1,024 characters in length."
      },
      "Required": false,
      "MaxLength": 1024
    },
    "Email": {
      "Type": "String",
      "Description": {
        "en": "The email address of the user. The email address must be unique within the directory.\nThe email address can be up to 128 characters in length."
      },
      "Required": false,
      "MaxLength": 128
    },
    "FirstName": {
      "Type": "String",
      "Description": {
        "en": "The first name of the user.\nThe name can be up to 64 characters in length."
      },
      "Required": false,
      "MaxLength": 64
    },
    "DisplayName": {
      "Type": "String",
      "Description": {
        "en": "The display name of the user.\nThe name can be up to 256 characters in length."
      },
      "Required": false,
      "MaxLength": 256
    },
    "LastName": {
      "Type": "String",
      "Description": {
        "en": "The last name of the user.\nThe name can be up to 64 characters in length."
      },
      "Required": false,
      "MaxLength": 64
    }
  },
  "Resources": {
    "User": {
      "Type": "ALIYUN::CloudSSO::User",
      "Properties": {
        "Status": {
          "Ref": "Status"
        },
        "UserName": {
          "Ref": "UserName"
        },
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "Description": {
          "Ref": "Description"
        },
        "Email": {
          "Ref": "Email"
        },
        "FirstName": {
          "Ref": "FirstName"
        },
        "DisplayName": {
          "Ref": "DisplayName"
        },
        "LastName": {
          "Ref": "LastName"
        }
      }
    }
  },
  "Outputs": {
    "UserId": {
      "Description": "The ID of the user.",
      "Value": {
        "Fn::GetAtt": [
          "User",
          "UserId"
        ]
      }
    }
  }
}
                        
```
