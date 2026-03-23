The ALIYUN::Flink::NamespaceV2 resource creates a project.

## Syntax

```
{
  "Type": "ALIYUN::Flink::NamespaceV2",
  "Properties": {
    "InstanceId": String,
    "Namespace": String,
    "ResourceSpec": Map
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

InstanceId

String

Yes

No

The ID of the Flink instance.

None

Namespace

String

Yes

No

The name of the project.

None

ResourceSpec

Map

No

No

The resource specifications.

For more information, see [ResourceSpec properties](#9fd5727c05wxj).

## ResourceSpec syntax

```
"ResourceSpec": {
  "Cpu": Integer,
  "MemoryGB": Integer
}
```

## ResourceSpec properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Cpu

Integer

No

No

The number of CPU cores.

None

MemoryGB

Integer

No

No

The memory size.

Unit: GB.

**Note**

The memory size must be four times the number of CPU cores.

## Return values

Fn::GetAtt

-   InstanceId: The ID of the Flink instance.
    
-   Namespace: The name of the project.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description: The ID of the Flink instance.
    Required: true
  ResourceSpec:
    AssociationPropertyMetadata:
      Parameters:
        Cpu:
          Type: Number
          Description: |-
            The number of CPU cores. This parameter is required for subscription projects but optional for pay-as-you-go projects.
            The number of CPU cores that you specify for the project cannot exceed the remaining CPU cores in the workspace. The remaining CPU cores are calculated by subtracting the cores allocated to other projects from the total purchased cores. An error is returned if the value of this parameter exceeds the remaining CPU cores.
          Required: false
        MemoryGB:
          Type: Number
          Description: |-
            The memory size in GB. This parameter is required for subscription projects but optional for pay-as-you-go projects.
            For subscription projects, the memory size must be four times the number of CPU cores.
            The memory size that you specify for the project cannot exceed the remaining memory in the workspace. The remaining memory is calculated by subtracting the memory allocated to other projects from the total purchased memory. An error is returned if the value of this parameter exceeds the remaining memory.
          Required: false
    Type: Json
    Description: The resource specifications.
    Required: false
  Namespace:
    Type: String
    Description: The name of the project.
    AllowedPattern: ^[a-z][a-z0-9-]{1,60}
    Required: true
Resources:
  NamespaceV2:
    Type: ALIYUN::Flink::NamespaceV2
    Properties:
      InstanceId:
        Ref: InstanceId
      ResourceSpec:
        Ref: ResourceSpec
      Namespace:
        Ref: Namespace
Outputs:
  InstanceId:
    Description: The ID of the Flink instance.
    Value:
      Fn::GetAtt:
        - NamespaceV2
        - InstanceId
  Namespace:
    Description: The name of the project.
    Value:
      Fn::GetAtt:
        - NamespaceV2
        - Namespace
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the Flink instance.",
      "Required": true
    },
    "ResourceSpec": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Cpu": {
            "Type": "Number",
            "Description": "The number of CPU cores. This parameter is required for subscription projects but optional for pay-as-you-go projects.\nThe number of CPU cores that you specify for the project cannot exceed the remaining CPU cores in the workspace. The remaining CPU cores are calculated by subtracting the cores allocated to other projects from the total purchased cores. An error is returned if the value of this parameter exceeds the remaining CPU cores.",
            "Required": false
          },
          "MemoryGB": {
            "Type": "Number",
            "Description": "The memory size in GB. This parameter is required for subscription projects but optional for pay-as-you-go projects.\nFor subscription projects, the memory size must be four times the number of CPU cores.\nThe memory size that you specify for the project cannot exceed the remaining memory in the workspace. The remaining memory is calculated by subtracting the memory allocated to other projects from the total purchased memory. An error is returned if the value of this parameter exceeds the remaining memory.",
            "Required": false
          }
        }
      },
      "Type": "Json",
      "Description": "The resource specifications.",
      "Required": false
    },
    "Namespace": {
      "Type": "String",
      "Description": "The name of the project.",
      "AllowedPattern": "^[a-z][a-z0-9-]{1,60}",
      "Required": true
    }
  },
  "Resources": {
    "NamespaceV2": {
      "Type": "ALIYUN::Flink::NamespaceV2",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "ResourceSpec": {
          "Ref": "ResourceSpec"
        },
        "Namespace": {
          "Ref": "Namespace"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the Flink instance.",
      "Value": {
        "Fn::GetAtt": [
          "NamespaceV2",
          "InstanceId"
        ]
      }
    },
    "Namespace": {
      "Description": "The name of the project.",
      "Value": {
        "Fn::GetAtt": [
          "NamespaceV2",
          "Namespace"
        ]
      }
    }
  }
}
                        
```
