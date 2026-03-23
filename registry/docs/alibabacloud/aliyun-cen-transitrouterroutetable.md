ALIYUN::CEN::TransitRouterRouteTable is used to create a custom route table for an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouterRouteTable",
  "Properties": {
    "TransitRouterRouteTableDescription": String,
    "TransitRouterRouteTableName": String,
    "TransitRouterId": String
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

TransitRouterId

String

Yes

No

The ID of the Enterprise Edition transit router.

None

TransitRouterRouteTableDescription

String

No

Yes

The description of the custom route table.

The description must be 2 to 256 characters in length and can contain letters, digits, and special characters. The following special characters are supported: **, . ; / @ \_ -**

TransitRouterRouteTableName

String

No

Yes

The name of the custom route table.

The name must be 0 to 128 characters in length and can contain letters, digits, and special characters. The following special characters are supported: **, . ; / @ \_ -**

## Return values

Fn::GetAtt

-   TransitRouterRouteTableId: the ID of the custom route table.
    
-   TransitRouterRouteTableType: the type of the custom route table.
    
-   TransitRouterRouteTableDescription: the description of the custom route table.
    
-   TransitRouterRouteTableName: the name of the custom route table.
    
-   ClientToken: the client token that is used to ensure the idempotence of the request.
    
-   TransitRouterId: the ID of the Enterprise Edition transit router.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TransitRouterId:
    Description: TransitRouterId
    Type: String
  TransitRouterRouteTableDescription:
    Description: TransitRouterRouteTableDescription
    Type: String
  TransitRouterRouteTableName:
    Description: TransitRouterRouteTableName
    Type: String
Resources:
  CENTransitRouterRouteTable:
    Properties:
      TransitRouterId:
        Ref: TransitRouterId
      TransitRouterRouteTableDescription:
        Ref: TransitRouterRouteTableDescription
      TransitRouterRouteTableName:
        Ref: TransitRouterRouteTableName
    Type: ALIYUN::CEN::TransitRouterRouteTable
Outputs:
  ClientToken:
    Description: ClientToken
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTable
      - ClientToken
  TransitRouterId:
    Description: TransitRouterId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTable
      - TransitRouterId
  TransitRouterRouteTableDescription:
    Description: TransitRouterRouteTableDescription
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTable
      - TransitRouterRouteTableDescription
  TransitRouterRouteTableId:
    Description: TransitRouterRouteTableId
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTable
      - TransitRouterRouteTableId
  TransitRouterRouteTableName:
    Description: TransitRouterRouteTableName
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTable
      - TransitRouterRouteTableName
  TransitRouterRouteTableType:
    Description: TransitRouterRouteTableType
    Value:
      Fn::GetAtt:
      - CENTransitRouterRouteTable
      - TransitRouterRouteTableType
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TransitRouterRouteTableDescription": {
      "Type": "String",
      "Description": "TransitRouterRouteTableDescription"
    },
    "TransitRouterRouteTableName": {
      "Type": "String",
      "Description": "TransitRouterRouteTableName"
    },
    "TransitRouterId": {
      "Type": "String",
      "Description": "TransitRouterId"
    }
  },
  "Resources": {
    "CENTransitRouterRouteTable": {
      "Type": "ALIYUN::CEN::TransitRouterRouteTable",
      "Properties": {
        "TransitRouterRouteTableDescription": {
          "Ref": "TransitRouterRouteTableDescription"
        },
        "TransitRouterRouteTableName": {
          "Ref": "TransitRouterRouteTableName"
        },
        "TransitRouterId": {
          "Ref": "TransitRouterId"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterRouteTableId": {
      "Description": "TransitRouterRouteTableId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTable",
          "TransitRouterRouteTableId"
        ]
      }
    },
    "TransitRouterRouteTableType": {
      "Description": "TransitRouterRouteTableType",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTable",
          "TransitRouterRouteTableType"
        ]
      }
    },
    "TransitRouterRouteTableDescription": {
      "Description": "TransitRouterRouteTableDescription",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTable",
          "TransitRouterRouteTableDescription"
        ]
      }
    },
    "TransitRouterRouteTableName": {
      "Description": "TransitRouterRouteTableName",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTable",
          "TransitRouterRouteTableName"
        ]
      }
    },
    "ClientToken": {
      "Description": "ClientToken",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTable",
          "ClientToken"
        ]
      }
    },
    "TransitRouterId": {
      "Description": "TransitRouterId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouterRouteTable",
          "TransitRouterId"
        ]
      }
    }
  }
}
```
