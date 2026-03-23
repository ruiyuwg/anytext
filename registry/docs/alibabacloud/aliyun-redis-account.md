ALIYUN::REDIS::Account is used to create an account that has specific permissions for a Tair (Redis OSS-compatible) instance.

## Syntax

```
{
  "Type": "ALIYUN::REDIS::Account",
  "Properties": {
    "AccountDescription": String,
    "InstanceId": String,
    "AccountName": String,
    "AccountPrivilege": String,
    "AccountType": String,
    "AccountPassword": String
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

AccountDescription

String

No

Yes

The description of the account.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, and hyphens (-).

InstanceId

String

Yes

No

The instance ID.

None.

AccountName

String

Yes

No

The account name.

The name can be up to 16 characters in length. It must start with a letter. It can contain lowercase letters, digits, and underscores (\_).

AccountPrivilege

String

No

Yes

The permissions that you want to grant to the account.

Valid values:

-   RoleReadOnly: read-only permissions.
    
-   RoleReadWrite (default): read and write permissions.
    
-   RoleRepl: replication permissions. Replication permissions include read and write permissions and allow the account to run the `SYNC and PSYNC` commands. You can create an account that has replication permissions only for a standard instance of Redis 4.0.
    

AccountType

String

No

No

The account type.

Set the value to Normal, which specifies a standard account.

AccountPassword

String

Yes

Yes

The password of the account.

The password must be 8 to 32 characters in length. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: `! @ # $ % ^ * ( ) _ + - =`.

## Return values

Fn::GetAtt

-   InstanceId: the instance ID.
    
-   AccountName: the account name.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description: The ID of the instance for which you want to create the account.
Resources:
  Account:
    Type: ALIYUN::REDIS::Account
    Properties:
      AccountDescription: Test Create Redis Account
      InstanceId:
        Ref: InstanceId
      AccountType: Normal
      AccountName: demo_redis
      AccountPrivilege: RoleReadWrite
      AccountPassword: Admin@123!
Outputs:
  InstanceId:
    Description: The name of the instance.
    Value:
      Fn::GetAtt:
        - Account
        - InstanceId
  AccountName:
    Description: The name of the account.
    Value:
      Fn::GetAtt:
        - Account
        - AccountName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the instance for which you want to create the account."
    }
  },
  "Resources": {
    "Account": {
      "Type": "ALIYUN::REDIS::Account",
      "Properties": {
        "AccountDescription": "Test Create Redis Account",
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "AccountType": "Normal",
        "AccountName": "demo_redis",
        "AccountPrivilege": "RoleReadWrite",
        "AccountPassword": "Admin@123!"
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The name of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "Account",
          "InstanceId"
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

For more examples, visit [redis](https://github.com/aliyun/ros-templates/tree/master/resources/redis). In the examples, the following resource types are used: ALIYUN::REDIS::Instance, ALIYUN::REDIS::Whitelist, and ALIYUN::REDIS::Account.
