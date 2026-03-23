ALIYUN::SAG::QosAssociation is used to associate a quality of service (QoS) policy with a Smart Access Gateway (SAG) instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::QosAssociation",
  "Properties": {
    "QosId": String,
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

QosId

String

Yes

No

The ID of the QoS policy.

For more information about QoS policies, see [What is a QoS policy?](/help/en/sag/user-guide/what-is-a-qos-policy#concept-1813952 "Smart Access Gateway (SAG) supports quality of service (QoS) policies. QoS policies classify network traffic distributed across applications and services. You can use QoS policies to allocate bandwidth resources based on business requirements and improve network quality.").

SmartAGId

String

Yes

No

The SAG instance with which you want to associate the QoS policy.

None.

## Return values

Fn::GetAtt

-   QosId: the ID of the QoS policy.
-   SmartAGId: the SAG instance that is associated with the QoS policy.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "QosId": {
      "Type": "String",
      "Description": "The instance ID of the QoS policy."
    },
    "SmartAGId": {
      "Type": "String",
      "Description": "The ID of the SAG instance to which the QoS policy is to be applied."
    }
  },
  "Resources": {
    "QosAssociation": {
      "Type": "ALIYUN::SAG::QosAssociation",
      "Properties": {
        "QosId": {
          "Ref": "QosId"
        },
        "SmartAGId": {
          "Ref": "SmartAGId"
        }
      }
    }
  },
  "Outputs": {
    "QosId": {
      "Description": "The ID of the QoS policy.",
      "Value": {
        "Fn::GetAtt": [
          "QosAssociation",
          "QosId"
        ]
      }
    },
    "SmartAGId": {
      "Description": "The ID of the SAG instance to which the QoS policy is to be applied.",
      "Value": {
        "Fn::GetAtt": [
          "QosAssociation",
          "SmartAGId"
        ]
      }
    }
  }
}
```
