ALIYUN::CloudStorageGateway::StorageBundle is used to create a gateway cluster.

## Syntax

```
{
  "Type": "ALIYUN::CloudStorageGateway::StorageBundle",
  "Properties": {
    "Description": String,
    "StorageBundleName": String
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

StorageBundleName

String

Yes

Yes

The name of the gateway cluster.

The name must be 1 to 60 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

Description

String

No

Yes

The description of the gateway cluster.

The description can be up to 128 characters in length.

## Return values

Fn::GetAtt

-   Description: the description of the gateway cluster.
    
-   CreateTime: the time when the gateway cluster was created.
    
-   StorageBundleId: the ID of the gateway cluster.
    
-   StorageBundleName: the name of the gateway cluster.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    AssociationProperty: TextArea
    Description:
      en: The description of the gateway cluster. The description must be 0 to 128
        characters in length.
    Required: false
    Type: String
  StorageBundleName:
    Description:
      en: The name of the gateway cluster. The name must be 1 to 60 characters in
        length and can contain letters, digits, periods (.), underscores (_), and
        hyphens (-). It must start with a letter.
    Required: true
    Type: String
Resources:
  ExtensionResource:
    Properties:
      Description:
        Ref: Description
      StorageBundleName:
        Ref: StorageBundleName
    Type: ALIYUN::CloudStorageGateway::StorageBundle
Outputs:
  CreateTime:
    Description: Create a gateway cluster timestamp.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - CreateTime
  Description:
    Description: Gateway cluster description.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Description
  StorageBundleId:
    Description: The ID of the gateway cluster.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - StorageBundleId
  StorageBundleName:
    Description: Gateway cluster name.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - StorageBundleName
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The description of the gateway cluster. The description must be 0 to 128 characters in length."
      },
      "Required": false
    },
    "StorageBundleName": {
      "Type": "String",
      "Description": {
        "en": "The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CloudStorageGateway::StorageBundle",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "StorageBundleName": {
          "Ref": "StorageBundleName"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "Gateway cluster description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "CreateTime": {
      "Description": "Create a gateway cluster timestamp.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "StorageBundleId": {
      "Description": "The ID of the gateway cluster.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "StorageBundleId"
        ]
      }
    },
    "StorageBundleName": {
      "Description": "Gateway cluster name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "StorageBundleName"
        ]
      }
    }
  }
}
                        
```
