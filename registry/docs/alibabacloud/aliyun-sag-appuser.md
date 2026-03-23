ALIYUN::SAG::AppUser is used to create a client account for a Smart Access Gateway (SAG) app instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::AppUser",
  "Properties": {
    "UserName": String,
    "UserMail": String,
    "Bandwidth": Integer,
    "SmartAGId": String,
    "ClientIp": String,
    "Disable": Boolean,
    "Password": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

UserName

String

No

No

The username of the client account.

The usernames of client accounts that are created for the same SAG app instance must be unique.

The username must be 7 to 33 characters in length, and can contain letters, digits, underscores (\_), at signs (@), periods (.), and hyphens (-). The username must start with a letter or a digit.

**Note** For a client account, if you specify the username, you must also specify the password. If you specify the password, you must also specify the username.

UserMail

String

Yes

Yes

The email address of the client account.

The username and password are sent to the specified email address by an administrator.

Bandwidth

Integer

Yes

Yes

The maximum bandwidth.

Unit: Kbit/s.

Valid values: 1 to 20000.

Default value: 2000.

SmartAGId

String

Yes

No

The ID of the SAG app instance.

None

ClientIp

String

No

No

The IP address of the client account.

-   If you enable the client app service, you must specify an IP address for the client account. The current client account uses the specified IP address to connect to Alibaba Cloud.
    
    **Note** The IP address must fall within a private CIDR block.
    
-   If you disable the client app service, an IP address within a private CIDR block is assigned to the client account. Each connection to Alibaba Cloud uses a different IP address.

Disable

Boolean

No

Yes

Specifies whether to disable the client account.

Valid values:

-   true: disables the client account.
-   false: enables the client account.

Password

String

No

No

The password that is used to log on to the SAG app instance.

The password must be 8 to 32 characters in length, and can contain letters, digits, underscores (\_), at signs (@), and hyphens (-). The password must start with a letter or a digit.

## Response parameters

Fn::GetAtt

-   UserName: the username of the client account.
-   SmartAGId: the ID of the SAG app instance.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "UserMail": {
      "Type": "String",
      "Description": "The email address of the user. The username and password are sent to the specified\nemail address."
    },
    "Bandwidth": {
      "Type": "Number",
      "Description": "The bandwidth. Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s."
    },
    "SmartAGId": {
      "Type": "String",
      "Description": "The ID of the SAG APP instance."
    }
  },
  "Resources": {
    "AppUser": {
      "Type": "ALIYUN::SAG::AppUser",
      "Properties": {
        "UserMail": {
          "Ref": "UserMail"
        },
        "Bandwidth": {
          "Ref": "Bandwidth"
        },
        "SmartAGId": {
          "Ref": "SmartAGId"
        }
      }
    }
  },
  "Outputs": {
    "UserName": {
      "Description": "",
      "Value": {
        "Fn::GetAtt": [
          "AppUser",
          "UserName"
        ]
      }
    },
    "SmartAGId": {
      "Description": "The ID of the SAG APP instance.",
      "Value": {
        "Fn::GetAtt": [
          "AppUser",
          "SmartAGId"
        ]
      }
    }
  }
}
```
