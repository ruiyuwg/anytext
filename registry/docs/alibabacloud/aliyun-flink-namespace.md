ALIYUN::Flink::Namespace is used to create a project.

## Syntax

```
{
  "Type": "ALIYUN::Flink::Namespace",
  "Properties": {
    "InstanceId": String,
    "ResourceSpec": Map,
    "Namespace": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

InstanceId

String

Yes

No

The ID of the instance.

None.

ResourceSpec

Map

No

Yes

The resource specifications.

For more information, see [ResourceSpec properties](#section-dtk-60c-vnu).

Namespace

String

Yes

No

The name of the project.

None.

## ResourceSpec syntax

```
"ResourceSpec": {
  "Cpu": Integer,
  "MemoryGB": Integer
}
```

## ResourceSpec properties

     

Property

Type

Required

Editable

Description

Constraint

Cpu

Integer

No

Yes

The number of vCPUs.

This property is required if the project uses the subscription billing method.

**Note**

The number of vCPUs that you can configure for the project must be less than the number of remaining vCPUs in the workspace to which the project belongs. Otherwise, an error is returned. The number of remaining vCPUs in the workspace is calculated based on the following formula: Number of remaining vCPUs in the workspace = Total number of vCPUs in the workspace - Number of vCPUs allocated to projects.

MemoryGB

Integer

No

Yes

The memory size.

This property is required if the project uses the subscription billing method. The value of the MemoryGB property must be four times the value of the Cpu property.

**Note**

The memory size that you can configure for the project must be less than the size of remaining memory in the workspace to which the project belongs. Otherwise, an error is returned. The size of remaining memory in the workspace is calculated based on the following formula: Size of remaining memory in the workspace = Total size of memory in the workspace - Size of memory allocated to projects.

## Return values

Fn::GetAtt

-   InstanceId: the ID of the instance.
-   Namespace: the name of the project.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "Instance ID."
    },
    "Namespace": {
      "Type": "String",
      "Description": "Project space name.",
      "AllowedPattern": "^[a-z][a-z0-9-]{1,60}"
    }
  },
  "Resources": {
    "FlinkNamespace": {
      "Type": "ALIYUN::Flink::Namespace",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "Namespace": {
          "Ref": "Namespace"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "Instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "FlinkNamespace",
          "InstanceId"
        ]
      }
    },
    "Namespace": {
      "Description": "Project space name.",
      "Value": {
        "Fn::GetAtt": [
          "FlinkNamespace",
          "Namespace"
        ]
      }
    }
  }
}
```
