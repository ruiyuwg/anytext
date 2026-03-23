DATASOURCE::CloudStorageGateway::StorageBundle is used to query the information about a gateway cluster.

## Syntax

```
{
  "Type": "DATASOURCE::CloudStorageGateway::StorageBundle",
  "Properties": {
    "StorageBundleId": String,
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

StorageBundleId

String

Yes

Yes

The ID of the gateway cluster.

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

-   Description: the description of the gateway cluster.
    
-   CreateTime: the timestamp when the gateway cluster was created. Unit: seconds.
    
-   StorageBundleId: the ID of the gateway cluster.
    
-   StorageBundleName: the name of the gateway cluster.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  StorageBundleId:
    Type: String
    Description:
      en: The ID of the gateway cluster.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CloudStorageGateway::StorageBundle
    Properties:
      StorageBundleId:
        Ref: StorageBundleId
Outputs:
  Description:
    Description: The description of the gateway cluster.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  CreateTime:
    Description: 'The timestamp when the gateway cluster was created. Unit: seconds.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  StorageBundleId:
    Description: The ID of the gateway cluster.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StorageBundleId
  StorageBundleName:
    Description: The name of the gateway cluster.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StorageBundleName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "StorageBundleId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the gateway cluster."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CloudStorageGateway::StorageBundle",
      "Properties": {
        "StorageBundleId": {
          "Ref": "StorageBundleId"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the gateway cluster.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "CreateTime": {
      "Description": "The timestamp when the gateway cluster was created. Unit: seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "StorageBundleId": {
      "Description": "The ID of the gateway cluster.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StorageBundleId"
        ]
      }
    },
    "StorageBundleName": {
      "Description": "The name of the gateway cluster.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StorageBundleName"
        ]
      }
    }
  }
}
                        
```
