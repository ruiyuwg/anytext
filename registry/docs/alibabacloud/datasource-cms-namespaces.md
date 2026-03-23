DATASOURCE::CMS::Namespaces is used to query the information about namespaces.

## Syntax

```
{
  "Type": "DATASOURCE::CMS::Namespaces",
  "Properties": {
    "Namespace": String,
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

Namespace

String

No

Yes

The name of the namespace.

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

Namespaces: details of the namespaces.

**Property**

**Type**

**Description**

**Constraint**

Namespaces

List

Details of the namespaces.

None.

CreateTime

String

The time when the namespace was created.

Unit: milliseconds.  

Namespace

String

The name of the namespace.

None.

Specification

String

The data retention period.

None.

Description

String

The description of the namespace.

None.

ModifyTime

String

The most recent time when the namespace was modified.

Unit: milliseconds.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Namespace:
    Description: Indicator warehouse name.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      Namespace:
        Ref: Namespace
    Type: DATASOURCE::CMS::Namespaces
Outputs:
  Namespaces:
    Description: The list of namespaces.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Namespaces
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Namespace": {
      "Type": "String",
      "Description": "Indicator warehouse name."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CMS::Namespaces",
      "Properties": {
        "Namespace": {
          "Ref": "Namespace"
        }
      }
    }
  },
  "Outputs": {
    "Namespaces": {
      "Description": "The list of namespaces.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Namespaces"
        ]
      }
    }
  }
}
```
