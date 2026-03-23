DATASOURCE::CR::Instance is used to query the information about an instance.

## Syntax

```
{
  "Type": "DATASOURCE::CR::Instance",
  "Properties": {
    "InstanceId": String,
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

InstanceId

String

Yes

Yes

The instance ID.

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

-   InstanceName: the instance name.
    
-   ModifiedTime: the most recent time when the instance was modified.
    
-   ResourceGroupId: the ID of the resource group.
    
-   InstanceId: the instance ID.
    
-   InstanceSpecification: the specification of the Container Registry Enterprise Edition instance.
    
-   CreateTime: the time when the instance was created.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: The first ID of the resource.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      InstanceId:
        Ref: InstanceId
    Type: DATASOURCE::CR::Instance
Outputs:
  CreateTime:
    Description: The creation time of the resource.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CreateTime
  InstanceId:
    Description: The first ID of the resource.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceId
  InstanceName:
    Description: InstanceName.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceName
  InstanceSpecification:
    Description: InstanceSpecification.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceSpecification
  ModifiedTime:
    Description: Last modification time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ModifiedTime
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ResourceGroupId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The first ID of the resource."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CR::Instance",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "InstanceName": {
      "Description": "InstanceName.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceName"
        ]
      }
    },
    "ModifiedTime": {
      "Description": "Last modification time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ModifiedTime"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "InstanceId": {
      "Description": "The first ID of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "InstanceSpecification": {
      "Description": "InstanceSpecification.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceSpecification"
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
