DATASOURCE::Hologram::Instances is used to query Hologres instances.

## Syntax

```
{
  "Type": "DATASOURCE::Hologram::Instances",
  "Properties": {
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

InstanceId

String

The instance ID.

None.

ZoneId

String

The zone ID.

None.

Version

String

The version of the instance.

None.

CommodityCode

String

The commodity code.

None.

PaymentType

String

The billing method of the instance.

None.

SuspendReason

String

The reason for the suspension.

None.

ExpirationTime

String

The expiration time. This property is invalid for pay-as-you-go instances.

None.

Tags

String

The tags of the instance.

None.

Endpoints

String

The endpoints.

None.

InstanceType

String

The instance type.

None.

Status

String

The status of the instance.

None.

CreateTime

String

The time when the instance was created.

None.

LeaderInstanceId

String

The ID of the primary instance.

None.

EnableHiveAccess

String

Indicates whether data lake acceleration is enabled.

None.

InstanceName

String

The instance name.

None.

RegionId

String

The region ID.

None.

ResourceGroupId

String

The ID of the resource group.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ResourceGroupId:
    Description: The ID of the resource group.
    Type: String
    AssociationProperty: ALIYUN::ECS::ResourceGroup::ResourceGroupId
Resources:
  ExtensionDataSource:
    Properties:
      ResourceGroupId:
        Ref: ResourceGroupId
    Type: DATASOURCE::Hologram::Instances
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
  "Parameters": {
    "ResourceGroupId": {
      "Type": "String",
      "Description": "The ID of the resource group.",
      "AssociationProperty": "ALIYUN::ECS::ResourceGroup::ResourceGroupId"
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::Hologram::Instances",
      "Properties": {
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        }
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
