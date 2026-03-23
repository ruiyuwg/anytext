ALIYUN::ICE::SearchLib is used to create a search library.

## Syntax

```
{
  "Type": "ALIYUN::ICE::SearchLib",
  "Properties": {
    "SearchLibName": String
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

SearchLibName

String

Yes

No

The name of the search library.

None.

## Return values

Fn::GetAtt

SearchLibName: the name of the search library.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SearchLibName:
    Type: String
    Description:
      en: The name of the Search Lib.
    Required: true
    Default: test1
Resources:
  ExtensionResource:
    Type: ALIYUN::ICE::SearchLib
    Properties:
      SearchLibName:
        Ref: SearchLibName
Outputs:
  SearchLibName:
    Description: The name of the Search Lib.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SearchLibName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SearchLibName": {
      "Type": "String",
      "Description": {
        "en": "The name of the Search Lib."
      },
      "Required": true,
      "Default": "test1"
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ICE::SearchLib",
      "Properties": {
        "SearchLibName": {
          "Ref": "SearchLibName"
        }
      }
    }
  },
  "Outputs": {
    "SearchLibName": {
      "Description": "The name of the Search Lib.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SearchLibName"
        ]
      }
    }
  }
}
                        
```
