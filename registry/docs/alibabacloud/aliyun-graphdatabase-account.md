ALIYUN::GraphDatabase::Account is used to create an account.

## Syntax

```
{
  "Type": "ALIYUN::GraphDatabase::Account",
  "Properties": {
    "AccountDescription": String,
    "DbInstanceId": String,
    "AccountPassword": String,
    "AccountName": String
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

No

The description of the account.

None.

DbInstanceId

String

Yes

No

The ID of the Graph Database (GDB) instance.

None.

AccountPassword

String

Yes

Yes

The password of the account.

None.

AccountName

String

Yes

No

The name of the account.

None.

## Return values

Fn::GetAtt

-   AccountDescription: the description of the account.
    
-   AccountType: the type of the account.
    
-   AccountName: the name of the account.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      DbInstanceId:
        Type: String
        Description: Instance Id.
      AccountPassword:
        Type: String
        Description: Account password.
    Resources:
      ExtensionResource:
        Type: ALIYUN::GraphDatabase::Account
        Properties:
          DbInstanceId:
            Ref: DbInstanceId
          AccountPassword:
            Ref: AccountPassword
          AccountName: Demo
    Outputs:
      AccountDescription:
        Description: Account description.
        Value:
          Fn::GetAtt:
            - ExtensionResource
            - AccountDescription
      AccountType:
        Description: Account Type.
        Value:
          Fn::GetAtt:
            - ExtensionResource
            - AccountType
      AccountName:
        Description: Account name.
        Value:
          Fn::GetAtt:
            - ExtensionResource
            - AccountName
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "DbInstanceId": {
          "Type": "String",
          "Description": "Instance Id."
        },
        "AccountPassword": {
          "Type": "String",
          "Description": "Account password."
        }
      },
      "Resources": {
        "ExtensionResource": {
          "Type": "ALIYUN::GraphDatabase::Account",
          "Properties": {
            "DbInstanceId": {
              "Ref": "DbInstanceId"
            },
            "AccountPassword": {
              "Ref": "AccountPassword"
            },
            "AccountName": "Demo"
          }
        }
      },
      "Outputs": {
        "AccountDescription": {
          "Description": "Account description.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "AccountDescription"
            ]
          }
        },
        "AccountType": {
          "Description": "Account Type.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "AccountType"
            ]
          }
        },
        "AccountName": {
          "Description": "Account name.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "AccountName"
            ]
          }
        }
      }
    }
    ```
