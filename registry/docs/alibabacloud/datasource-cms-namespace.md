DATASOURCE::CMS::Namespace is used to query the information about a namespace and the metric data of the namespace.

## Syntax

```
{
  "Type": "DATASOURCE::CMS::Namespace",
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

Yes

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

-   ModifyTime: the timestamp when the namespace was last modified.
    
-   Description: the description of the namespace.
    
-   CreateTime: the timestamp when the namespace was created.
    
-   Specification: the data storage duration.
    
-   Namespace: the name of the namespace.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Namespace:
    Type: String
    Description:
      en: Indicator warehouse name.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CMS::Namespace
    Properties:
      Namespace:
        Ref: Namespace
Outputs:
  ModifyTime:
    Description: The timestamp of the last modification indicator warehouse.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ModifyTime
  Description:
    Description: Description of indicator warehouse.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  CreateTime:
    Description: Create the timestamp of the indicator warehouse.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  Specification:
    Description: Data storage duration.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Specification
  Namespace:
    Description: Indicator warehouse name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Namespace
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Namespace": {
      "Type": "String",
      "Description": {
        "en": "Indicator warehouse name."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CMS::Namespace",
      "Properties": {
        "Namespace": {
          "Ref": "Namespace"
        }
      }
    }
  },
  "Outputs": {
    "ModifyTime": {
      "Description": "The timestamp of the last modification indicator warehouse.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ModifyTime"
        ]
      }
    },
    "Description": {
      "Description": "Description of indicator warehouse.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "CreateTime": {
      "Description": "Create the timestamp of the indicator warehouse.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "Specification": {
      "Description": "Data storage duration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Specification"
        ]
      }
    },
    "Namespace": {
      "Description": "Indicator warehouse name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Namespace"
        ]
      }
    }
  }
}
                        
```
