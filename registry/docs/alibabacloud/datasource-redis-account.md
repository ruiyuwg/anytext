DATASOURCE::REDIS::Account is used to query an account in an ApsaraDB for Redis instance.

## Syntax

```
{
  "Type": "DATASOURCE::REDIS::Account",
  "Properties": {
    "AccountName": String,
    "InstanceId": String,
    "RefreshOptions": String
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

AccountName

String

Yes

Yes

The name of the account.

None.

InstanceId

String

Yes

Yes

The ID of the instance.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Description: the description of the account.
    
-   InstanceId: the ID of the instance.
    
-   AccountPrivilege: the permissions of the account.
    
-   AccountType: the type of the account.
    
-   AccountName: the name of the account.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the Redis instance.
    Required: true
  AccountName:
    Type: String
    Description:
      en: The name of the account that you want to query.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::REDIS::Account
    Properties:
      InstanceId:
        Ref: InstanceId
      AccountName:
        Ref: AccountName
Outputs:
  Description:
    Description: The description of the account.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  InstanceId:
    Description: The ID of the Redis instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceId
  AccountPrivilege:
    Description: |-
      The permission of the account. Default value: RoleReadWrite. Valid values:
      * RoleReadOnly: The account has the read-only permissions.
      * RoleReadWrite: The account has the read and write permissions.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AccountPrivilege
  AccountType:
    Description: |-
      The type of the account. Valid values:
      * Normal: standard account
      * Super: super account
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AccountType
  AccountName:
    Description: The name of the account.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AccountName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the Redis instance."
      },
      "Required": true
    },
    "AccountName": {
      "Type": "String",
      "Description": {
        "en": "The name of the account that you want to query."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::REDIS::Account",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "AccountName": {
          "Ref": "AccountName"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the account.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the Redis instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "AccountPrivilege": {
      "Description": "The permission of the account. Default value: RoleReadWrite. Valid values:\n* RoleReadOnly: The account has the read-only permissions.\n* RoleReadWrite: The account has the read and write permissions.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccountPrivilege"
        ]
      }
    },
    "AccountType": {
      "Description": "The type of the account. Valid values:\n* Normal: standard account\n* Super: super account",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccountType"
        ]
      }
    },
    "AccountName": {
      "Description": "The name of the account.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccountName"
        ]
      }
    }
  }
}
                        
```
