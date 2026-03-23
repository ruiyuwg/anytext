ALIYUN::GPDB::Account is used to create a database account for an AnalyticDB for PostgreSQL instance.

## Syntax

```
{
  "Type": "ALIYUN::GPDB::Account",
  "Properties": {
    "AccountDescription": String,
    "DBInstanceId": String,
    "AccountPassword": String,
    "AccountName": String
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

AccountDescription

String

No

No

The description of the database account.

N/A

DBInstanceId

String

Yes

No

The ID of the instance.

N/A

AccountPassword

String

Yes

Yes

The password of the database account.

Limits:

-   The password must contain uppercase letters, lowercase letters, digits, and special characters.
    
    Special characters include ! @ # $ % ^ & \* ( ) \_ + - =
    
-   The password must be 8 to 32 characters in length.

AccountName

String

Yes

No

The name of the database account.

N/A

## Response parameters

Fn::GetAtt

-   DBInstanceId: the ID of the instance.
-   AccountName: the name of the database account.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DBInstanceId": {
      "Type": "String",
      "Description": "The ID of the instance.\nNote You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific\nregion, including instance IDs."
    },
    "AccountPassword": {
      "Type": "String",
      "Description": "The password of the privileged account.\nThe password must contain at least three of the following character types: uppercase\nletters, lowercase letters, digits, and special characters.\nSpecial characters include ! @ # & $ % ^  * ( ) _ + - =\nThe password must be 8 to 32 characters in length."
    },
    "AccountName": {
      "Type": "String",
      "Description": "The name of the privileged account.\nThe name can contain lowercase letters, digits, and underscores (_).\nThe name must start with a lowercase letter and end with a lowercase letter or a digit.\nThe name cannot start with gp.\nThe name must be 2 to 16 characters in length."
    }
  },
  "Resources": {
    "Account": {
      "Type": "ALIYUN::GPDB::Account",
      "Properties": {
        "DBInstanceId": {
          "Ref": "DBInstanceId"
        },
        "AccountPassword": {
          "Ref": "AccountPassword"
        },
        "AccountName": {
          "Ref": "AccountName"
        }
      }
    }
  },
  "Outputs": {
    "DBInstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "Account",
          "DBInstanceId"
        ]
      }
    },
    "AccountName": {
      "Description": "The name of the account.",
      "Value": {
        "Fn::GetAtt": [
          "Account",
          "AccountName"
        ]
      }
    }
  }
}
```
