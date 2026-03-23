DATASOURCE::KMS::Secrets is used to query all secrets that are created within the current account in the current region.

## Syntax

```
{
  "Type": "DATASOURCE::KMS::Secrets",
  "Properties": {
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

-   Secrets: details of the secrets.
    
-   SecretNames: the names of the secrets.
    

**Property**

**Type**

**Description**

**Constraint**

SecretNames

List

The names of the secrets.

None.

Secrets

List

Details of the secrets.

None.

UpdateTime

String

The time when the secret was updated.

None.

Tags

List

The tags of the secret.

Example:

```
[ {
      "TagValue" : "val1",
      "TagKey" : "key1"
    } ]
```

SecretType

String

The secret type.

Valid values:

-   Rds: managed ApsaraDB RDS secret
    
-   Generic: generic secret
    

SecretName

String

The secret name.

None.

PlannedDeleteTime

String

The time when the secret is scheduled to be deleted.

None.

CreateTime

String

The time when the secret was created.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ExtensionDataSource:
    Properties: {}
    Type: DATASOURCE::KMS::Secrets
Outputs:
  SecretNames:
    Description: The list of secret names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SecretNames
  Secrets:
    Description: The list of secrets.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Secrets
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::KMS::Secrets",
      "Properties": {}
    }
  },
  "Outputs": {
    "Secrets": {
      "Description": "The list of secrets.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Secrets"
        ]
      }
    },
    "SecretNames": {
      "Description": "The list of secret names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecretNames"
        ]
      }
    }
  }
}
```
