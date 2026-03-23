ALIYUN::CEN::TransitRouterRouteEntry is used to add routes to a route table of an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterRouteEntry",
  "Properties": {
    "TransitRouterRouteTableId": String,
    "TransitRouterRouteEntryDestinationCidrBlock": String,
    "TransitRouterRouteEntryNextHopId": String,
    "TransitRouterRouteEntryDescription": String,
    "TransitRouterRouteEntryNextHopType": String,
    "TransitRouterRouteEntryName": String
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

TransitRouterRouteEntryDestinationCidrBlock

String

Yes

No

The destination CIDR block of the route.

None

TransitRouterRouteEntryNextHopType

String

Yes

No

The type of the next hop.

Valid values:

-   BlackHole: routes network traffic to a black hole. All packets that match this route are dropped. If you select this option, you do not need to specify the next hop information.
    
-   Attachment: routes network traffic to a network instance connection. If you select this option, you must specify the ID of the network instance connection. All packets that match this route are routed to the specified network instance connection.
    

TransitRouterRouteTableId

String

Yes

No

The ID of the route table of the Enterprise Edition transit router.

None

TransitRouterRouteEntryDescription

String

No

Yes

The description of the route.

The description must be 2 to 256 characters in length and can contain letters, digits, and special characters. The following special characters are supported: **, . ; / @ \_ -**

TransitRouterRouteEntryName

String

No

Yes

The name of the route.

The name must be 0 to 128 characters in length and can contain letters, digits, and special characters. The following special characters are supported: **, . ; / @ \_ -**

TransitRouterRouteEntryNextHopId

String

No

No

The ID of the network instance connection that you want to specify as the next hop.

None

## Return values

Fn::GetAtt

-   TransitRouterRouteTableId: the ID of the route table of the Enterprise Edition transit router.
    
-   TransitRouterRouteEntryDestinationCidrBlock: the destination CIDR block of the route.
    
-   TransitRouterRouteEntryNextHopId: the ID of the network instance connection that you specified as the next hop.
    
-   TransitRouterRouteEntryType: the type of the route.
    
-   TransitRouterRouteEntryDescription: the description of the route.
    
-   TransitRouterRouteEntryNextHopType: the type of the next hop.
    
-   TransitRouterRouteEntryName: the name of the route.
    
-   TransitRouterRouteEntryId: the ID of the route.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TransitRouterRouteEntryDescription:
    Description: TransitRouterRouteEntryDescription
    Type: String
  TransitRouterRouteEntryDestinationCidrBlock:
    Description: TransitRouterRouteEntryDestinationCidrBlock
    Type: String
  TransitRouterRouteEntryName:
    Description: TransitRouterRouteEntryName
    Type: String
  TransitRouterRouteEntryNextHopId:
    Description: TransitRouterRouteEntryNextHopId
    Type: String
  TransitRouterRouteEntryNextHopType:
    Description: TransitRouterRouteEntryNextHopType
    Type: String
  TransitRouterRouteTableId:
    Description: TransitRouterRouteTableId
    Type: String
Resources:
  CENTransitRouterRouteEntry:
    Properties:
      TransitRouterRouteEntryDescription:
        Ref: TransitRouterRouteEntryDescription
      TransitRouterRouteEntryDestinationCidrBlock:
        Ref: TransitRouterRouteEntryDestinationCidrBlock
      TransitRouterRouteEntryName:
        Ref: TransitRouterRouteEntryName
      TransitRouterRouteEntryNextHopId:
        Ref: TransitRouterRouteEntryNextHopId
      TransitRouterRouteEntryNextHopType:
        Ref: TransitRouterRouteEntryNextHopType
      TransitRouterRouteTableId:
        Ref: TransitRouterRouteTableId
    Type: ALIYUN::CEN::TransitRouterRouteEntry
Outputs:
  TransitRouterRouteEntryDescription:
    Description: TransitRouterRouteEntryDescription
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
      - TransitRouterRouteEntryDescription
  TransitRouterRouteEntryDestinationCidrBlock:
    Description: TransitRouterRouteEntryDestinationCidrBlock
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
      - TransitRouterRouteEntryDestinationCidrBlock
  TransitRouterRouteEntryId:
    Description: The first ID of the resource
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
      - TransitRouterRouteEntryId
  TransitRouterRouteEntryName:
    Description: TransitRouterRouteEntryName
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
      - TransitRouterRouteEntryName
  TransitRouterRouteEntryNextHopId:
    Description: TransitRouterRouteEntryNextHopId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
      - TransitRouterRouteEntryNextHopId
  TransitRouterRouteEntryNextHopType:
    Description: TransitRouterRouteEntryNextHopType
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
      - TransitRouterRouteEntryNextHopType
  TransitRouterRouteEntryType:
    Description: TransitRouterRouteEntryType
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
      - TransitRouterRouteEntryType
  TransitRouterRouteTableId:
    Description: TransitRouterRouteTableId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteEntry
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
    "TransitRouterRouteEntryDestinationCidrBlock": {
      "Type": "String",
      "Description": "TransitRouterRouteEntryDestinationCidrBlock"
    },
    "TransitRouterRouteEntryNextHopId": {
      "Type": "String",
      "Description": "TransitRouterRouteEntryNextHopId"
    },
    "TransitRouterRouteEntryDescription": {
      "Type": "String",
      "Description": "TransitRouterRouteEntryDescription"
    },
    "TransitRouterRouteEntryNextHopType": {
      "Type": "String",
      "Description": "TransitRouterRouteEntryNextHopType"
    },
    "TransitRouterRouteEntryName": {
      "Type": "String",
      "Description": "TransitRouterRouteEntryName"
    }
  },
  "Resources": {
    "CENTransitRouterRouteEntry": {
      "Type": "ALIYUN::CEN::TransitRouterRouteEntry",
      "Properties": {
        "TransitRouterRouteTableId": {
          "Ref": "TransitRouterRouteTableId"
        },
        "TransitRouterRouteEntryDestinationCidrBlock": {
          "Ref": "TransitRouterRouteEntryDestinationCidrBlock"
        },
        "TransitRouterRouteEntryNextHopId": {
          "Ref": "TransitRouterRouteEntryNextHopId"
        },
        "TransitRouterRouteEntryDescription": {
          "Ref": "TransitRouterRouteEntryDescription"
        },
        "TransitRouterRouteEntryNextHopType": {
          "Ref": "TransitRouterRouteEntryNextHopType"
        },
        "TransitRouterRouteEntryName": {
          "Ref": "TransitRouterRouteEntryName"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterRouteTableId": {
      "Description": "TransitRouterRouteTableId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteTableId"
        ]
      }
    },
    "TransitRouterRouteEntryDestinationCidrBlock": {
      "Description": "TransitRouterRouteEntryDestinationCidrBlock",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteEntryDestinationCidrBlock"
        ]
      }
    },
    "TransitRouterRouteEntryNextHopId": {
      "Description": "TransitRouterRouteEntryNextHopId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteEntryNextHopId"
        ]
      }
    },
    "TransitRouterRouteEntryType": {
      "Description": "TransitRouterRouteEntryType",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteEntryType"
        ]
      }
    },
    "TransitRouterRouteEntryDescription": {
      "Description": "TransitRouterRouteEntryDescription",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteEntryDescription"
        ]
      }
    },
    "TransitRouterRouteEntryNextHopType": {
      "Description": "TransitRouterRouteEntryNextHopType",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteEntryNextHopType"
        ]
      }
    },
    "TransitRouterRouteEntryName": {
      "Description": "TransitRouterRouteEntryName",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteEntryName"
        ]
      }
    },
    "TransitRouterRouteEntryId": {
      "Description": "The first ID of the resource",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteEntry",
          "TransitRouterRouteEntryId"
        ]
      }
    }
  }
}
```
