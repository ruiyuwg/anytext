DATASOURCE::GraphDatabase::Accounts is used to query the information about accounts.

## Syntax

```
{
  "Type": "DATASOURCE::GraphDatabase::Accounts",
  "Properties": {
    "DbInstanceId": String,
    "AccountName": String,
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

DbInstanceId

String

Yes

Yes

The ID of the Graph Database (GDB) instance.

None.

AccountName

String

No

Yes

The account name.

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

-   AccountNames: the names of the accounts.
    
-   Accounts: details of the accounts.
    

**Property**

**Type**

**Description**

**Constraint**

AccountNames

List

The names of the accounts.

None.

Accounts

List

Details of the accounts.

None.

Status

String

The status of the account.

None.

AccountDescription

String

The description of the account.

None.

AccountType

String

The account type.

None.

AccountName

String

The account name.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DbInstanceId:
    Type: String
    Description: Instance Id.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::GraphDatabase::Accounts
    Properties:
      DbInstanceId:
        Ref: DbInstanceId
      AccountName: DBAdmin
Outputs:
  AccountNames:
    Description: The list of account names.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AccountNames
  Accounts:
    Description: The list of accounts.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Accounts
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DbInstanceId": {
      "Type": "String",
      "Description": "Instance Id."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::GraphDatabase::Accounts",
      "Properties": {
        "DbInstanceId": {
          "Ref": "DbInstanceId"
        },
        "AccountName": "DBAdmin"
      }
    }
  },
  "Outputs": {
    "AccountNames": {
      "Description": "The list of account names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccountNames"
        ]
      }
    },
    "Accounts": {
      "Description": "The list of accounts.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Accounts"
        ]
      }
    }
  }
}
```
