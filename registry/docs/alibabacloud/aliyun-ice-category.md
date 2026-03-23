ALIYUN::ICE::Category is used to create a media asset category.

## Syntax

```
{
  "Type": "ALIYUN::ICE::Category",
  "Properties": {
    "CateName": String,
    "ParentId": Integer,
    "Type": String
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

CateName

String

Yes

Yes

The name of the category.

-   The name can be up to 64 bytes in length.
    
-   It must be encoded in UTF-8.
    

ParentId

Integer

No

No

The ID of the parent category.

None.

Type

String

No

No

The type of the category.

Valid values:

-   default (default): audios, videos, and images
    
-   material: materials of short videos
    

## Return values

Fn::GetAtt

-   ParentId: the ID of the parent category.
    
-   Level: the level of the category.
    
-   CateId: the ID of the created category.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  CateName:
    Type: String
    Description:
      en: |-
        The category name.
        The value can be up to 64 bytes in length.
        The value must be encoded in UTF-8.
    Required: true
    Default: test_category
Resources:
  Category:
    Type: ALIYUN::ICE::Category
    Properties:
      CateName:
        Ref: CateName
Outputs:
  ParentId:
    Description: The ID of the parent category.
    Value:
      Fn::GetAtt:
        - Category
        - ParentId
  Level:
    Description: The level of the category. The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
    Value:
      Fn::GetAtt:
        - Category
        - Level
  CateId:
    Description: The ID of the category.
    Value:
      Fn::GetAtt:
        - Category
        - CateId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "CateName": {
      "Type": "String",
      "Description": {
        "en": "The category name.\nThe value can be up to 64 bytes in length.\nThe value must be encoded in UTF-8."
      },
      "Required": true,
      "Default": "test_category"
    }
  },
  "Resources": {
    "Category": {
      "Type": "ALIYUN::ICE::Category",
      "Properties": {
        "CateName": {
          "Ref": "CateName"
        }
      }
    }
  },
  "Outputs": {
    "ParentId": {
      "Description": "The ID of the parent category.",
      "Value": {
        "Fn::GetAtt": [
          "Category",
          "ParentId"
        ]
      }
    },
    "Level": {
      "Description": "The level of the category. The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.",
      "Value": {
        "Fn::GetAtt": [
          "Category",
          "Level"
        ]
      }
    },
    "CateId": {
      "Description": "The ID of the category.",
      "Value": {
        "Fn::GetAtt": [
          "Category",
          "CateId"
        ]
      }
    }
  }
}
                        
```
