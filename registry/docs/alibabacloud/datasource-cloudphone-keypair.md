DATASOURCE::CloudPhone::KeyPair is used to query the information about a key pair.

## Syntax

```
{
  "Type": "DATASOURCE::CloudPhone::KeyPair",
  "Properties": {
    "KeyPairName": String,
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

KeyPairName

String

Yes

Yes

The name of the key pair.

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

-   KeyPairFingerPrint: the fingerprint of the key pair.
    
-   KeyPairName: the name of the key pair.
    
-   CreateTime: the time when the key pair was created.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  KeyPairName:
    Description:
      en: The Key Name.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      KeyPairName:
        Ref: KeyPairName
    Type: DATASOURCE::CloudPhone::KeyPair
Outputs:
  CreateTime:
    Description: The creation time of the resource.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CreateTime
  KeyPairFingerPrint:
    Description: The Private Key of the Fingerprint.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - KeyPairFingerPrint
  KeyPairName:
    Description: The Key Name.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - KeyPairName
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "KeyPairName": {
      "Type": "String",
      "Description": {
        "en": "The Key Name."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CloudPhone::KeyPair",
      "Properties": {
        "KeyPairName": {
          "Ref": "KeyPairName"
        }
      }
    }
  },
  "Outputs": {
    "KeyPairFingerPrint": {
      "Description": "The Private Key of the Fingerprint.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "KeyPairFingerPrint"
        ]
      }
    },
    "KeyPairName": {
      "Description": "The Key Name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "KeyPairName"
        ]
      }
    },
    "CreateTime": {
      "Description": "The creation time of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    }
  }
}
                        
```
