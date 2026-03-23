DATASOURCE::GraphDatabase::Account is used to query the information about an account of a Graph Database (GDB) instance.

## Syntax

```
{
  "Type": "DATASOURCE::GraphDatabase::Account",
  "Properties": {
    "AccountName": String,
    "DbInstanceId": String,
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

The account name.

None.

DbInstanceId

String

Yes

Yes

The ID of the GDB instance.

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

-   AccountDescription: the account description of the GDB instance.
    
-   AccountType: the account type of the GDB instance.
    
-   AccountName: the account name of the GDB instance.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      DbInstanceId:
        Type: String
        Description:
          en: The ID of the GDB Instance.
        Required: true
      AccountName:
        Type: String
        Description:
          en: The name of the GDB Account.
        Required: true
    Resources:
      ExtensionDataSource:
        Type: DATASOURCE::GraphDatabase::Account
        Properties:
          DbInstanceId:
            Ref: DbInstanceId
          AccountName:
            Ref: AccountName
    Outputs:
      AccountDescription:
        Description: GDB Account description.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - AccountDescription
      AccountType:
        Description: GDB Account Type.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - AccountType
      AccountName:
        Description: The name of the GDB Account.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - AccountName
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "DbInstanceId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the GDB Instance."
          },
          "Required": true
        },
        "AccountName": {
          "Type": "String",
          "Description": {
            "en": "The name of the GDB Account."
          },
          "Required": true
        }
      },
      "Resources": {
        "ExtensionDataSource": {
          "Type": "DATASOURCE::GraphDatabase::Account",
          "Properties": {
            "DbInstanceId": {
              "Ref": "DbInstanceId"
            },
            "AccountName": {
              "Ref": "AccountName"
            }
          }
        }
      },
      "Outputs": {
        "AccountDescription": {
          "Description": "GDB Account description.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "AccountDescription"
            ]
          }
        },
        "AccountType": {
          "Description": "GDB Account Type.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "AccountType"
            ]
          }
        },
        "AccountName": {
          "Description": "The name of the GDB Account.",
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
