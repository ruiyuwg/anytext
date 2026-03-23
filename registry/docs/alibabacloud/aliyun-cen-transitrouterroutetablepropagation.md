ALIYUN::CEN::TransitRouterRouteTablePropagation is used to create a route learning correlation.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterRouteTablePropagation",
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
  CENTransitRouterRouteTablePropagation:
    Properties:
      TransitRouterAttachmentId:
        Ref: TransitRouterAttachmentId
      TransitRouterRouteTableId:
        Ref: TransitRouterRouteTableId
    Type: ALIYUN::CEN::TransitRouterRouteTablePropagation
Outputs:
  ResourceId:
    Description: ResourceId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTablePropagation
      - ResourceId
  ResourceType:
    Description: ResourceType
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTablePropagation
      - ResourceType
  TransitRouterAttachmentId:
    Description: TransitRouterAttachmentId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTablePropagation
      - TransitRouterAttachmentId
  TransitRouterRouteTableId:
    Description: TransitRouterRouteTableId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTablePropagation
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
    "CENTransitRouterRouteTablePropagation": {
      "Type": "ALIYUN::CEN::TransitRouterRouteTablePropagation",
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
          "CENTransitRouterRouteTablePropagation",
          "TransitRouterRouteTableId"
        ]
      }
    },
    "TransitRouterAttachmentId": {
      "Description": "TransitRouterAttachmentId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTablePropagation",
          "TransitRouterAttachmentId"
        ]
      }
    },
    "ResourceId": {
      "Description": "ResourceId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTablePropagation",
          "ResourceId"
        ]
      }
    },
    "ResourceType": {
      "Description": "ResourceType",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTablePropagation",
          "ResourceType"
        ]
      }
    }
  }
}
```
