ALIYUN::SAG::QoS is used to create a quality of service (QoS) policy for a Smart Access Gateway (SAG) instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::Qos",
  "Properties": {
    "QosName": String,
    "QosDescription": String
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

QosName

String

Yes

Yes

The name of the QoS policy.

The name must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

QosDescription

String

No

Yes

The description of the QoS policy.

The description must be 1 to 512 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The description must start with a letter.

## Return values

Fn::GetAtt

QosId: the ID of the QoS policy.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "QosName": {
      "Type": "String",
      "Description": "The name of the QoS policy.\nThe name must be 2 to 100 characters in length and can contain letters, digits, periods\n(.), underscores (_), and hyphens (-). It must start with a letter."
    },
    "QosDescription": {
      "Type": "String",
      "Description": "The description of the QoS policy.\nThe description must be 1 to 512 characters in length and can contain letters, digits,\nunderscores (_), and hyphens (-). It must start with a letter."
    }
  },
  "Resources": {
    "Qos": {
      "Type": "ALIYUN::SAG::Qos",
      "Properties": {
        "QosName": {
          "Ref": "QosName"
        },
        "QosDescription": {
          "Ref": "QosDescription"
        }
      }
    }
  },
  "Outputs": {
    "QosId": {
      "Description": "The ID of the QoS policy.",
      "Value": {
        "Fn::GetAtt": [
          "Qos",
          "QosId"
        ]
      }
    }
  }
}
```
