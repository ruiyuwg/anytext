DATASOURCE::KMS::Instances is used to query Key Management Service (KMS) instances that are created within the current account in the current region.

## Syntax

```
{
  "Type": "DATASOURCE::KMS::Instances",
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

-   Instances: details of the KMS instances**.**
    
-   InstanceIds: the IDs of the KMS instances**.**
    

**Property**

**Type**

**Description**

**Constraint**

InstanceIds

List

The IDs of the KMS instances**.**

None.

Instances

List

Details of the KMS instances**.**

None.

PaymentType

String

The billing method of the KMS instance.

None.

InstanceId

String

The ID of the KMS instance.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ExtensionDataSource:
    Properties: {}
    Type: DATASOURCE::KMS::Instances
Outputs:
  InstanceIds:
    Description: The list of instance IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceIds
  Instances:
    Description: The list of instances.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Instances
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::KMS::Instances",
      "Properties": {}
    }
  },
  "Outputs": {
    "Instances": {
      "Description": "The list of instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Instances"
        ]
      }
    },
    "InstanceIds": {
      "Description": "The list of instance IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceIds"
        ]
      }
    }
  }
}
                        
```
