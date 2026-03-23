DATASOURCE::CR::Namespaces is used to query namespaces.

## Syntax

```
{
  "Type": "DATASOURCE::CR::Namespaces",
  "Properties": {
    "Status": String,
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

Status

String

No

Yes

The status of the namespace.

Valid values:

-   NORMAL
    
-   DELETING
    

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   Namespaces: details of the namespaces.
    
-   NamespaceNames: the names of the namespaces.
    

**Property**

**Type**

**Description**

**Constraint**

Namespaces

List

Details of the namespaces.

None.

NamespaceNames

List

The names of the namespaces.

None.

Namespace

String

The name of the namespace.

None.

NamespaceStatus

String

The status of the namespace.

Valid values:

-   NORMAL
    
-   DELETING
    

AuthorizeType

String

The operation permissions that you have on the namespace.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Status": {
      "Type": "String",
      "Description": "The status of namespace."
    }
  },
  "Resources": {
    "Namespaces": {
      "Type": "DATASOURCE::CR::Namespaces",
      "Properties": {
        "Status": {
          "Ref": "Status"
        }
      }
    }
  },
  "Outputs": {
    "Namespaces": {
      "Description": "The list of namespaces.",
      "Value": {
        "Fn::GetAtt": [
          "Namespaces",
          "Namespaces"
        ]
      }
    },
    "NamespaceNames": {
      "Description": "The list of namespace names.",
      "Value": {
        "Fn::GetAtt": [
          "Namespaces",
          "NamespaceNames"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Status:
    Type: String
    Description: The status of namespace.
Resources:
  Namespaces:
    Type: DATASOURCE::CR::Namespaces
    Properties:
      Status:
        Ref: Status
Outputs:
  Namespaces:
    Description: The list of namespaces.
    Value:
      Fn::GetAtt:
        - Namespaces
        - Namespaces
  NamespaceNames:
    Description: The list of namespace names.
    Value:
      Fn::GetAtt:
        - Namespaces
        - NamespaceNames
```
