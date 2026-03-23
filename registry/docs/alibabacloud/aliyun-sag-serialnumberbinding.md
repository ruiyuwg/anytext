ALIYUN::SAG::SerialNumberBinding is used to associate a Smart Access Gateway (SAG) device with an SAG instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::SerialNumberBinding",
  "Properties": {
    "SerialNumber": String,
    "SmartAGId": String
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

SerialNumber

String

Yes

No

The serial number (SN) of the SAG device.

Example: `sage62x021922****`.

SmartAGId

String

Yes

No

The ID of the SAG instance.

Example: `sag-r79m060r6oy55******`.

## Return values

Fn::GetAtt

SmartAGId: the ID of the SAG instance.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SerialNumber": {
      "Type": "String",
      "Description": "The serial number (SN) of the SAG device.",
      "Default": "sage62x021922****"
    },
    "SmartAGId": {
      "Type": "String",
      "Description": "The ID of the SAG instance.",
      "Default": "sag-r79m060r6oy55******"
    }
  },
  "Resources": {
    "SerialNumberBinding": {
      "Type": "ALIYUN::SAG::SerialNumberBinding",
      "Properties": {
        "SerialNumber": {
          "Ref": "SerialNumber"
        },
        "SmartAGId": {
          "Ref": "SmartAGId"
        }
      }
    }
  },
  "Outputs": {
    "SmartAGId": {
      "Description": "The ID of the SAG instance.",
      "Value": {
        "Fn::GetAtt": [
          "SerialNumberBinding",
          "SmartAGId"
        ]
      }
    }
  }
}
```
