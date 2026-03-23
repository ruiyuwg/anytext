DATASOURCE::CloudStorageGateway::StorageBundles is used to query the information about gateway clusters in a region.

## Syntax

```
{
  "Type": "DATASOURCE::CloudStorageGateway::StorageBundles",
  "Properties": {
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

-   StorageBundleIds: the IDs of the gateway clusters.
    
-   StorageBundles: details of the gateway clusters.
    

**Property**

**Type**

**Description**

**Constraint**

StorageBundleIds

List

The IDs of the gateway clusters.

None.

StorageBundles

List

Details of the gateway clusters.

None.

Description

String

The description of the gateway cluster.

None.

StorageBundleId

String

The ID of the gateway cluster.

None.

CreateTime

String

The time when the gateway cluster was created.

Unit: seconds.

StorageBundleName

String

The name of the gateway cluster.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CloudStorageGateway::StorageBundles
    Properties: {}
Outputs:
  StorageBundleIds:
    Description: The list of storage bundle IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StorageBundleIds
  StorageBundles:
    Description: The list of storage bundles.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StorageBundles
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CloudStorageGateway::StorageBundles",
      "Properties": {
      }
    }
  },
  "Outputs": {
    "StorageBundleIds": {
      "Description": "The list of storage bundle IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StorageBundleIds"
        ]
      }
    },
    "StorageBundles": {
      "Description": "The list of storage bundles.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StorageBundles"
        ]
      }
    }
  }
}
                        
```
