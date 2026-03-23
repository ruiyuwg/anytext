ALIYUN::SAG::SmartAccessGatewayBinding is used to bind a Smart Access Gateway (SAG) instance to a specified Cloud Connect Network (CCN) instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::SmartAccessGatewayBinding",
  "Properties": {
    "SmartAGId": String,
    "CcnId": String
  }
}
```

## Properties

     

Name

Type

Required

Editable

Description

Validity

SmartAGId

String

Yes

No

The ID of the SAG instance.

None

CcnId

String

Yes

No

The ID of the CCN instance to be bound.

None

## Response parameters

**Fn::GetAtt**

SmartAGId: the ID of the SAG instance.

## Examples

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "SmartAccessGatewayBinding": {
      "Type": "ALIYUN::SAG::SmartAccessGatewayBinding",
      "Properties": {
        "SmartAGId": {
          "Ref": "SmartAGId"
        },
        "CcnId": {
          "Ref": "CcnId"
        }
      }
    }
  },
  "Parameters": {
    "SmartAGId": {
      "Type": "String",
      "Description": "The ID of the Smart Access Gateway instance."
    },
    "CcnId": {
      "Type": "String",
      "Description": "The ID of the CCN instance to be bound."
    }
  },
  "Outputs": {
    "SmartAGId": {
      "Description": "The ID of the Smart Access Gateway instance.",
      "Value": {
        "Fn::GetAtt": [
          "SmartAccessGatewayBinding",
          "SmartAGId"
        ]
      }
    }
  }
}
```
