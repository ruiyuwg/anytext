The ALIYUN::DataLakeFormation::Catalog type creates a data catalog in Data Lake Formation.

## Syntax

```
{
  "Type": "ALIYUN::DataLakeFormation::Catalog",
  "Properties": {
    "Name": String,
    "IsShared": Boolean,
    "Options": Map,
    "ShareId": String,
    "Type": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Name

String

Yes

No

The name of the data catalog.

None

IsShared

Boolean

No

No

Indicates whether the data catalog is shared.

None

Options

Map

No

No

The configuration parameters for the data catalog.

None

ShareId

String

No

No

The shared ID of the data catalog.

None

Type

String

No

No

The type of the data catalog.

None

## Return values

Fn::GetAtt

-   Options: The configuration parameters for the data catalog.
    
-   Type: The type of the data catalog.
    
-   ShareId: The share ID of the data catalog.
    
-   IsShared: Indicates whether the data catalog is shared.
    
-   CatalogId: The ID of the data catalog.
    
-   Name: The name of the data catalog.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Name:
    Type: String
    Description: The name of the data catalog.
    AllowedPattern: ^[a-zA-Z][a-zA-Z0-9_]{1,255}$
    Required: true
Resources:
  Catalog:
    Type: ALIYUN::DataLakeFormation::Catalog
    Properties:
      Name:
        Ref: Name
Outputs:
  Options:
    Description: The configuration parameters for the data catalog.
    Value:
      Fn::GetAtt:
        - Catalog
        - Options
  Type:
    Description: The type of the data catalog.
    Value:
      Fn::GetAtt:
        - Catalog
        - Type
  ShareId:
    Description: The shared ID of the data catalog.
    Value:
      Fn::GetAtt:
        - Catalog
        - ShareId
  IsShared:
    Description: Indicates whether the data catalog is shared.
    Value:
      Fn::GetAtt:
        - Catalog
        - IsShared
  CatalogId:
    Description: The ID of the data catalog.
    Value:
      Fn::GetAtt:
        - Catalog
        - CatalogId
  Name:
    Description: The name of the data catalog.
    Value:
      Fn::GetAtt:
        - Catalog
        - Name
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Name": {
      "Type": "String",
      "Description": "The name of the data catalog.",
      "AllowedPattern": "^[a-zA-Z][a-zA-Z0-9_]{1,255}$",
      "Required": true
    }
  },
  "Resources": {
    "Catalog": {
      "Type": "ALIYUN::DataLakeFormation::Catalog",
      "Properties": {
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "Options": {
      "Description": "The configuration parameters for the data catalog.",
      "Value": {
        "Fn::GetAtt": [
          "Catalog",
          "Options"
        ]
      }
    },
    "Type": {
      "Description": "The type of the data catalog.",
      "Value": {
        "Fn::GetAtt": [
          "Catalog",
          "Type"
        ]
      }
    },
    "ShareId": {
      "Description": "The shared ID of the data catalog.",
      "Value": {
        "Fn::GetAtt": [
          "Catalog",
          "ShareId"
        ]
      }
    },
    "IsShared": {
      "Description": "Indicates whether the data catalog is shared.",
      "Value": {
        "Fn::GetAtt": [
          "Catalog",
          "IsShared"
        ]
      }
    },
    "CatalogId": {
      "Description": "The ID of the data catalog.",
      "Value": {
        "Fn::GetAtt": [
          "Catalog",
          "CatalogId"
        ]
      }
    },
    "Name": {
      "Description": "The name of the data catalog.",
      "Value": {
        "Fn::GetAtt": [
          "Catalog",
          "Name"
        ]
      }
    }
  }
}
                        
```
