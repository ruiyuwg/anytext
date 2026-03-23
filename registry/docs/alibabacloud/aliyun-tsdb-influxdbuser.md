ALIYUN::TSDB::InfluxDBUser is used to create a Time Series Database (TSDB) database account.

## Syntax

```
{
  "Type": "ALIYUN::TSDB::InfluxDBUser",
  "Properties": {
    "UserName": String,
    "DatabasePermissions": List,
    "InstanceId": String,
    "UserType": String,
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

Yes

No

The username of the database account.

The username must be 1 to 16 characters in length, and can contain lowercase letters, digits, and underscores (\_). It must start with a lowercase letter and end with a lowercase letter or digit.

DatabasePermissions

List

No

Yes

The TSDB databases on which the database account has access permissions.

This property takes effect only if the UserType property is set to normal.

For more information, see the [DatabasePermissions properties](#section-332-stw-au9) section of this topic.

InstanceId

String

Yes

No

The ID of the TSDB instance.

N/A

UserType

String

Yes

No

The role assumed by the database account.

Valid values:

-   admin: administrator
-   normal: regular user

Password

String

Yes

Yes

The password.

The password must be 8 to 32 characters in length, and can contain letters, digits, and the following special characters: `! @ # $ % ^ * ( ) _ + - =`

## DatabasePermissions syntax

```
"DatabasePermissions": [
  {
    "Permission": String,
    "DBName": String
  }
]
```

## DatabasePermissions properties

     

Property

Type

Required

Editable

Description

Constraint

Permission

String

Yes

Yes

The permissions on the TSDB database.

Valid values:

-   read: read permissions
-   write: write permissions
-   all: read and write permissions

DBName

String

Yes

Yes

The name of the TSDB database.

The name must be 1 to 64 characters in length, and can contain lowercase letters, digits, and underscores (\_). It must start with a lowercase letter and end with a lowercase letter or digit.

## Response parameters

Fn::GetAtt

-   UserName: the username of the database account.
-   InstanceId: the ID of the TSDB instance.
-   UserType: the role assumed by the database account.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "UserName": {
      "Type": "String",
      "Description": "The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.",
      "MinLength": 1,
      "MaxLength": 16,
      "Default": "test"
    },
    "DatabasePermissions": {
      "Type": "Json",
      "Description": "The list of databases that the user can access. If the user type is admin, do not specify this parameter.",
      "Default": [
        {
          "Permission": "all",
          "DBName": "testDB"
        }
      ]
    },
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of TSDB for InfluxDB.",
      "Default": "ts-wz99vz6u8jg39****"
    },
    "UserType": {
      "Type": "String",
      "Description": "The type of user. Valid values:\nnormal: normal user\nadmin: administrator user.",
      "AllowedValues": [
        "normal",
        "admin"
      ],
      "Default": "normal"
    },
    "Password": {
      "Type": "String",
      "Description": "The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^*()_+-=",
      "MinLength": 8,
      "MaxLength": 32,
      "Default": "Test_Pwd"
    }
  },
  "Resources": {
    "InfluxDBUser": {
      "Type": "ALIYUN::TSDB::InfluxDBUser",
      "Properties": {
        "UserName": {
          "Ref": "UserName"
        },
        "DatabasePermissions": {
          "Ref": "DatabasePermissions"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "UserType": {
          "Ref": "UserType"
        },
        "Password": {
          "Ref": "Password"
        }
      }
    }
  },
  "Outputs": {
    "UserName": {
      "Description": "The name of user.",
      "Value": {
        "Fn::GetAtt": [
          "InfluxDBUser",
          "UserName"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of TSDB for InfluxDB.",
      "Value": {
        "Fn::GetAtt": [
          "InfluxDBUser",
          "InstanceId"
        ]
      }
    },
    "UserType": {
      "Description": "The type of user.",
      "Value": {
        "Fn::GetAtt": [
          "InfluxDBUser",
          "UserType"
        ]
      }
    }
  }
}
```
