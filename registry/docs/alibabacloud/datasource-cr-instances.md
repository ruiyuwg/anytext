DATASOURCE::CR::Instances is used to query Container Registry instances.

## Syntax

```
{
  "Type": "DATASOURCE::CR::Instances",
  "Properties": {
    "InstanceName": String,
    "ResourceGroupId": String,
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

InstanceName

String

No

Yes

The instance name.

None.

ResourceGroupId

String

No

Yes

The ID of the resource group.

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

-   Instances: details of the instances.
    
-   InstanceIds: the IDs of the instances.
    

**Property**

**Type**

**Description**

**Constraint**

InstanceIds

List

The IDs of the instances.

None.

Instances

List

Details of the instances.

None.

Status

String

The status of the instance.

None.

ModifiedTime

String

The most recent time when the instance was modified.

None.

InstanceId

String

The instance ID.

None.

InstanceSpecification

String

The edition of the Enterprise Edition instance.

None.

RegionId

String

The region ID.

None.

ResourceGroupId

String

The ID of the resource group.

None.

InstanceName

String

The instance name.

None.

CreateTime

String

The time when the instance was created.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CR::Instances
    Properties:
      InstanceName: demo
Outputs:
  Instances:
    Description: The list of instances.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Instances
  InstanceIds:
    Description: The list of instance IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceIds
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CR::Instances",
      "Properties": {
        "InstanceName": "demo"
      }
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
