Use ALIYUN::ESA::CustomList to create a custom list.

## Syntax

```
{
  "Type": "ALIYUN::ESA::CustomList",
  "Properties": {
    "Items": List,
    "Kind": String,
    "ListName": String,
    "Description": String
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

Items

List

Yes

Yes

The content of the list.

The items in the list. You can configure a maximum of 500 items.

Kind

String

Yes

No

The type of the list.

Valid values:

-   host
    
-   ip
    
-   asn
    

ListName

String

Yes

Yes

The name of the list.

None

Description

String

No

Yes

The description of the list.

None

## Return values

Fn::GetAtt

-   Description: The description of the list.
    
-   ListId: The ID of the custom list.
    
-   ListName: The name of the list.
    
-   Kind: The type of the list.
    
-   UpdateTime: The time the list was last updated.
    
-   Items: The items in the list.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ListName:
    Type: String
    Description:
      en: The name of the custom list.
    Required: true
  Kind:
    Type: String
    Description:
      en: The type of the custom list.
    AllowedValues:
      - host
      - ip
      - asn
    Required: true
  Items:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Description:
          en: The item in the custom list.
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: The items in the custom list, which are displayed as an array.
    Required: true
    MinLength: 0
    MaxLength: 500
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::CustomList
    Properties:
      ListName:
        Ref: ListName
      Kind:
        Ref: Kind
      Items:
        Ref: Items
Outputs:
  Description:
    Description: The description of the custom list.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Description
  ListId:
    Description: The ID of the custom list.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ListId
  ListName:
    Description: The name of the custom list.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ListName
  Kind:
    Description: The type of the custom list.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Kind
  UpdateTime:
    Description: The time when the custom list was last updated.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UpdateTime
  Items:
    Description: The items in the custom list, which are displayed as an array.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Items
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ListName": {
      "Type": "String",
      "Description": {
        "en": "The name of the custom list."
      },
      "Required": true
    },
    "Kind": {
      "Type": "String",
      "Description": {
        "en": "The type of the custom list."
      },
      "AllowedValues": [
        "host",
        "ip",
        "asn"
      ],
      "Required": true
    },
    "Items": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "The item in the custom list."
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The items in the custom list, which are displayed as an array."
      },
      "Required": true,
      "MinLength": 0,
      "MaxLength": 500
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::CustomList",
      "Properties": {
        "ListName": {
          "Ref": "ListName"
        },
        "Kind": {
          "Ref": "Kind"
        },
        "Items": {
          "Ref": "Items"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the custom list.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "ListId": {
      "Description": "The ID of the custom list.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ListId"
        ]
      }
    },
    "ListName": {
      "Description": "The name of the custom list.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ListName"
        ]
      }
    },
    "Kind": {
      "Description": "The type of the custom list.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Kind"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the custom list was last updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UpdateTime"
        ]
      }
    },
    "Items": {
      "Description": "The items in the custom list, which are displayed as an array.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Items"
        ]
      }
    }
  }
}
                        
```
