ALIYUN::CEN::TransitRouter is used to create an Enterprise Edition transit router.

## Syntax

```
{
  "Type": "ALIYUN::CEN::TransitRouter",
  "Properties": {
    "CenId": String,
    "TransitRouterDescription": String,
    "TransitRouterName": String
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

TransitRouterDescription

String

No

Yes

The description of the transit router.

The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.

TransitRouterName

String

No

Yes

The name of the transit router.

The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://` The name can contain digits, periods (.), underscores (\_), and hyphens (-).

## Return values

Fn::GetAtt

-   Type: the type of the transit router.
    
-   CenId: the ID of the CEN instance.
    
-   TransitRouterName: the name of the transit router.
    
-   TransitRouterDescription: the description of the transit router.
    
-   TransitRouterId: the ID of the transit router.
    
-   AliUid: the ID of the Alibaba Cloud account to which the CEN instance belongs.
    
-   SystemTransitRouterRouteTableId: the route table ID of the system router.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  CenId:
    Description: CenId
    Type: String
  TransitRouterDescription:
    Description: TransitRouterDescription
    Type: String
  TransitRouterName:
    Description: TransitRouterName
    Type: String
Resources:
  CENTransitRouter:
    Properties:
      CenId:
        Ref: CenId
      TransitRouterDescription:
        Ref: TransitRouterDescription
      TransitRouterName:
        Ref: TransitRouterName
    Type: ALIYUN::CEN::TransitRouter
Outputs:
  AliUid:
    Description: AliUid
    Value:
      Fn::GetAtt:
      - CENTransitRouter
      - AliUid
  CenId:
    Description: CenId
    Value:
      Fn::GetAtt:
      - CENTransitRouter
      - CenId
  TransitRouterDescription:
    Description: TransitRouterDescription
    Value:
      Fn::GetAtt:
      - CENTransitRouter
      - TransitRouterDescription
  TransitRouterId:
    Description: TransitRouterId
    Value:
      Fn::GetAtt:
      - CENTransitRouter
      - TransitRouterId
  TransitRouterName:
    Description: TransitRouterName
    Value:
      Fn::GetAtt:
      - CENTransitRouter
      - TransitRouterName
  Type:
    Description: Type
    Value:
      Fn::GetAtt:
      - CENTransitRouter
      - Type
```

## `**JSON**` **format**

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "CenId": {
      "Type": "String",
      "Description": "CenId"
    },
    "TransitRouterName": {
      "Type": "String",
      "Description": "TransitRouterName"
    },
    "TransitRouterDescription": {
      "Type": "String",
      "Description": "TransitRouterDescription"
    }
  },
  "Resources": {
    "CENTransitRouter": {
      "Type": "ALIYUN::CEN::TransitRouter",
      "Properties": {
        "CenId": {
          "Ref": "CenId"
        },
        "TransitRouterName": {
          "Ref": "TransitRouterName"
        },
        "TransitRouterDescription": {
          "Ref": "TransitRouterDescription"
        }
      }
    }
  },
  "Outputs": {
    "Type": {
      "Description": "Type",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouter",
          "Type"
        ]
      }
    },
    "CenId": {
      "Description": "CenId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouter",
          "CenId"
        ]
      }
    },
    "TransitRouterName": {
      "Description": "TransitRouterName",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouter",
          "TransitRouterName"
        ]
      }
    },
    "TransitRouterDescription": {
      "Description": "TransitRouterDescription",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouter",
          "TransitRouterDescription"
        ]
      }
    },
    "TransitRouterId": {
      "Description": "TransitRouterId",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouter",
          "TransitRouterId"
        ]
      }
    },
    "AliUid": {
      "Description": "AliUid",
      "Value": {
        "Fn::GetAtt": [
          "CENTransitRouter",
          "AliUid"
        ]
      }
    }
  }
}
```
