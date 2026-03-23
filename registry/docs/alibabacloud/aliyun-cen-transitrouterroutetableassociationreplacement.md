The ALIYUN::CEN::TransitRouterRouteTableAssociationReplacement resource replaces the transit router route table associated with a network instance connection.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterRouteTableAssociationReplacement",
  "Properties": {
    "TransitRouterRouteTableId": String,
    "TransitRouterAttachmentId": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

TransitRouterRouteTableId

String

Yes

No

The ID of the transit router route table to associate with the network instance connection.

None

TransitRouterAttachmentId

String

Yes

No

The ID of the network instance connection.

None

## Return value

Fn::GetAtt

OriginalTransitRouterRouteTableId: The ID of the original transit router route table.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TransitRouterRouteTableId:
    Type: String
    Description:
      en: The ID of the transit router route table to be associated.
    Required: true
  TransitRouterAttachmentId:
    Type: String
    Description:
      en: The ID of the network instance connection.
    Required: true
Resources:
  TransitRouterRouteTableAssociationReplacement:
    Type: ALIYUN::CEN::TransitRouterRouteTableAssociationReplacement
    Properties:
      TransitRouterRouteTableId:
        Ref: TransitRouterRouteTableId
      TransitRouterAttachmentId:
        Ref: TransitRouterAttachmentId
Outputs:
  OriginalTransitRouterRouteTableId:
    Description: The original transit router route table ID before replacement.
    Value:
      Fn::GetAtt:
        - TransitRouterRouteTableAssociationReplacement
        - OriginalTransitRouterRouteTableId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TransitRouterRouteTableId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the transit router route table to be associated."
      },
      "Required": true
    },
    "TransitRouterAttachmentId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the network instance connection."
      },
      "Required": true
    }
  },
  "Resources": {
    "TransitRouterRouteTableAssociationReplacement": {
      "Type": "ALIYUN::CEN::TransitRouterRouteTableAssociationReplacement",
      "Properties": {
        "TransitRouterRouteTableId": {
          "Ref": "TransitRouterRouteTableId"
        },
        "TransitRouterAttachmentId": {
          "Ref": "TransitRouterAttachmentId"
        }
      }
    }
  },
  "Outputs": {
    "OriginalTransitRouterRouteTableId": {
      "Description": "The original transit router route table ID before replacement.",
      "Value": {
        "Fn::GetAtt": [
          "TransitRouterRouteTableAssociationReplacement",
          "OriginalTransitRouterRouteTableId"
        ]
      }
    }
  }
}
                        
```
