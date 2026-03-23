ALIYUN::CEN::TransitRouterRouteTableAssociation is used to create an associated forwarding correlation.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterRouteTableAssociation",
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

**Editable**

**Description**

**Constraint**

TransitRouterAttachmentId

String

Yes

No

The ID of the network instance connection.

None.

TransitRouterRouteTableId

String

Yes

No

The route table ID of the Enterprise Edition transit router.

None.

## Return values

Fn::GetAtt

-   TransitRouterRouteTableId: the route table ID of the Enterprise Edition transit router.
    
-   TransitRouterAttachmentId: the ID of the network instance connection.
    
-   ResourceId: the resource ID.
    
-   ResourceType: the resource type.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TransitRouterAttachmentId:
    Description: TransitRouterAttachmentId
    Type: String
  TransitRouterRouteTableId:
    Description: TransitRouterRouteTableId
    Type: String
Resources:
  CENTransitRouterRouteTableAssociation:
    Properties:
      TransitRouterAttachmentId:
        Ref: TransitRouterAttachmentId
      TransitRouterRouteTableId:
        Ref: TransitRouterRouteTableId
    Type: ALIYUN::CEN::TransitRouterRouteTableAssociation
Outputs:
  ResourceId:
    Description: ResourceId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTableAssociation
      - ResourceId
  ResourceType:
    Description: ResourceType
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTableAssociation
      - ResourceType
  TransitRouterAttachmentId:
    Description: TransitRouterAttachmentId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTableAssociation
      - TransitRouterAttachmentId
  TransitRouterRouteTableId:
    Description: TransitRouterRouteTableId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTableAssociation
      - TransitRouterRouteTableId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TransitRouterRouteTableId": {
      "Type": "String",
      "Description": "TransitRouterRouteTableId"
    },
    "TransitRouterAttachmentId": {
      "Type": "String",
      "Description": "TransitRouterAttachmentId"
    }
  },
  "Resources": {
    "CENTransitRouterRouteTableAssociation": {
      "Type": "ALIYUN::CEN::TransitRouterRouteTableAssociation",
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
    "TransitRouterRouteTableId": {
      "Description": "TransitRouterRouteTableId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTableAssociation",
          "TransitRouterRouteTableId"
        ]
      }
    },
    "TransitRouterAttachmentId": {
      "Description": "TransitRouterAttachmentId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTableAssociation",
          "TransitRouterAttachmentId"
        ]
      }
    },
    "ResourceId": {
      "Description": "ResourceId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTableAssociation",
          "ResourceId"
        ]
      }
    },
    "ResourceType": {
      "Description": "ResourceType",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTableAssociation",
          "ResourceType"
        ]
      }
    }
  }
}
```
