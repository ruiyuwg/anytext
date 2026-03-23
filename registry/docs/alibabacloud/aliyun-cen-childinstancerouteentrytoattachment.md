ALIYUN::CEN::ChildInstanceRouteEntryToAttachment is used to add a route to a network instance that is connected to an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "ALIYUN::CEN::ChildInstanceRouteEntryToAttachment",
  "Properties": {
    "TransitRouterAttachmentId": String,
    "RouteTableId": String,
    "CenId": String,
    "DestinationCidrBlock": String
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

CenId

String

Yes

No

The ID of the Cloud Enterprise Network (CEN) instance.

None

DestinationCidrBlock

String

Yes

No

The destination CIDR block of the route.

None

RouteTableId

String

Yes

No

The ID of the route table of the network instance.

None

TransitRouterAttachmentId

String

Yes

No

The connection ID of the network instance.

None

## Return values

Fn::GetAtt

-   TransitRouterAttachmentId: the connection ID of the network instance.
    
-   RouteTableId: the ID of the route table of the network instance.
    
-   CenId: the ID of the CEN instance.
    
-   DestinationCidrBlock: the destination CIDR block of the route.
    

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TransitRouterAttachmentId:
    Type: String
    Description: The ID of the network instance connection.
  RouteTableId:
    Type: String
    Description: The ID of the route table configured on the network instance.
  CenId:
    Type: String
    Description: The ID of the CEN instance.
  DestinationCidrBlock:
    Type: String
    Description: The destination CIDR block of the route.
Resources:
  ChildInstanceRouteEntryToAttachment:
    Type: ALIYUN::CEN::ChildInstanceRouteEntryToAttachment
    Properties:
      TransitRouterAttachmentId:
        Ref: TransitRouterAttachmentId
      RouteTableId:
        Ref: RouteTableId
      CenId:
        Ref: CenId
      DestinationCidrBlock:
        Ref: DestinationCidrBlock
Outputs:
  TransitRouterAttachmentId:
    Description: The ID of the network instance connection.
    Value:
      Fn::GetAtt:
        - ChildInstanceRouteEntryToAttachment
        - TransitRouterAttachmentId
  RouteTableId:
    Description: The ID of the route table configured on the network instance.
    Value:
      Fn::GetAtt:
        - ChildInstanceRouteEntryToAttachment
        - RouteTableId
  CenId:
    Description: The ID of the CEN instance.
    Value:
      Fn::GetAtt:
        - ChildInstanceRouteEntryToAttachment
        - CenId
  DestinationCidrBlock:
    Description: The destination CIDR block of the route.
    Value:
      Fn::GetAtt:
        - ChildInstanceRouteEntryToAttachment
        - DestinationCidrBlock
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TransitRouterAttachmentId": {
      "Type": "String",
      "Description": "The ID of the network instance connection."
    },
    "RouteTableId": {
      "Type": "String",
      "Description": "The ID of the route table configured on the network instance."
    },
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance."
    },
    "DestinationCidrBlock": {
      "Type": "String",
      "Description": "The destination CIDR block of the route."
    }
  },
  "Resources": {
    "ChildInstanceRouteEntryToAttachment": {
      "Type": "ALIYUN::CEN::ChildInstanceRouteEntryToAttachment",
      "Properties": {
        "TransitRouterAttachmentId": {
          "Ref": "TransitRouterAttachmentId"
        },
        "RouteTableId": {
          "Ref": "RouteTableId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "DestinationCidrBlock": {
          "Ref": "DestinationCidrBlock"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterAttachmentId": {
      "Description": "The ID of the network instance connection.",
      "Value": {
        "Fn::GetAtt": [
          "ChildInstanceRouteEntryToAttachment",
          "TransitRouterAttachmentId"
        ]
      }
    },
    "RouteTableId": {
      "Description": "The ID of the route table configured on the network instance.",
      "Value": {
        "Fn::GetAtt": [
          "ChildInstanceRouteEntryToAttachment",
          "RouteTableId"
        ]
      }
    },
    "CenId": {
      "Description": "The ID of the CEN instance.",
      "Value": {
        "Fn::GetAtt": [
          "ChildInstanceRouteEntryToAttachment",
          "CenId"
        ]
      }
    },
    "DestinationCidrBlock": {
      "Description": "The destination CIDR block of the route.",
      "Value": {
        "Fn::GetAtt": [
          "ChildInstanceRouteEntryToAttachment",
          "DestinationCidrBlock"
        ]
      }
    }
  }
}
```
