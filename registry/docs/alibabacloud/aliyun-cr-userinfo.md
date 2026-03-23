ALIYUN::CR::UserInfo is used to create the information about a user.

## Syntax

```
{
  "Type": "ALIYUN::CR::UserInfo",
  "Properties": {
    "User": Map,
    "InstanceId": String
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

User

Map

Yes

Yes

The information about the user.

If the user already exists, you can specify this property to update the information. For more information, see [User syntax](#section-7ej-w2j-a9h) and [User property](#section-5ob-7ka-ga2).

InstanceId

String

No

No

The ID of the Container Registry instance.

None.

## User syntax

```
"User": {
  "Password": String
}
```

## User property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Password

String

Yes

Yes

The password.

The password must be 8 to 32 characters in length. It must contain at least two of the following character types: letters, digits, and special characters. The following special characters are supported: `( ) ' ~ ! @ # $ % ^ & * - + = | { } [ ] : ; < > , . ? / -`.

## Return values

Fn::GetAtt

-   LoginName: the logon name.
    
-   UserId: the user ID.
    

## Examples

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "User": {
      "Type": "Json",
      "Description": "User info. If user exists, will update user info.",
      "Default": "{\"Password\": \"Admin****\"}"
    }
  },
  "Resources": {
    "UserInfo": {
      "Type": "ALIYUN::CR::UserInfo",
      "Properties": {
        "User": {
          "Ref": "User"
        }
      }
    }
  },
  "Outputs": {
    "LoginName": {
      "Description": "Login name.",
      "Value": {
        "Fn::GetAtt": [
          "UserInfo",
          "LoginName"
        ]
      }
    },
    "UserId": {
      "Description": "User ID.",
      "Value": {
        "Fn::GetAtt": [
          "UserInfo",
          "UserId"
        ]
      }
    }
  }
}
```
