DATASOURCE::ThreatDetection::Instances is used to query the basic information about instances in Security Center.

## Syntax

```
{
  "Type": "DATASOURCE::ThreatDetection::Instances",
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

No

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

-   **Instances**: details of the instances.
    
-   **InstanceIds**: the IDs of the instances.
    
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
    
    InstanceId
    
    String
    
    The instance ID.
    
    None.
    
    CreateTime
    
    String
    
    The time when the instance was created.
    
    None.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: The first ID of the resource.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      InstanceId:
        Ref: InstanceId
    Type: DATASOURCE::ThreatDetection::Instances
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
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The first ID of the resource."
      }
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ThreatDetection::Instances",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
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
