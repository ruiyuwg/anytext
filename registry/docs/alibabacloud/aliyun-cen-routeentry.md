ALIYUN::CEN::RouteEntry is used to advertise a route of an attached virtual private cloud (VPC) or virtual border router (VBR) to a Cloud Enterprise Network (CEN) instance.

## Syntax

```
{
  "Type": "ALIYUN::CEN::RouteEntry",
  "Properties": {
    "ChildInstanceRegionId": String,
    "CenId": String,
    "DestinationCidrBlock": String,
    "ChildInstanceRouteTableId": String,
    "ChildInstanceType": String,
    "ChildInstanceId": String
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

The ID of the CEN instance.

None

ChildInstanceId

String

Yes

No

The ID of the attached network instance.

None

ChildInstanceRegionId

String

Yes

No

The region ID of the attached network instance.

None

ChildInstanceRouteTableId

String

Yes

No

The ID of the route table of the attached network instance.

None

ChildInstanceType

String

Yes

No

The type of the attached network instance.

Valid values:

-   VPC
    
-   VBR
    

DestinationCidrBlock

String

Yes

No

The destination CIDR block of the route.

None

## Return values

**Fn::GetAtt**

None

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  RouteEntry:
    Type: ALIYUN::CEN::RouteEntry
    Properties:
      ChildInstanceRegionId:
        Ref: ChildInstanceRegionId
      CenId:
        Ref: CenId
      DestinationCidrBlock:
        Ref: DestinationCidrBlock
      ChildInstanceRouteTableId:
        Ref: ChildInstanceRouteTableId
      ChildInstanceType:
        Ref: ChildInstanceType
      ChildInstanceId:
        Ref: ChildInstanceId
Parameters:
  ChildInstanceRegionId:
    Type: String
    Description: The ID of the region where the attached VBR or VPC is located.
  CenId:
    Type: String
    Description: The ID of the CEN instance where the route entry is published.
  DestinationCidrBlock:
    Type: String
    Description: The destination CIDR block of the route entry to publish.
  ChildInstanceRouteTableId:
    Type: String
    Description: The route table of the attached VBR or VPC.
  ChildInstanceType:
    Type: String
    Description: 'The type of the network, value: VPC VBR'
    AllowedValues:
      - VPC
      - VBR
  ChildInstanceId:
    Type: String
    Description: The ID of the attached network (VPC or VBR).
Outputs: {}
```

## JSON format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "RouteEntry": {
      "Type": "ALIYUN::CEN::RouteEntry",
      "Properties": {
        "ChildInstanceRegionId": {
          "Ref": "ChildInstanceRegionId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "DestinationCidrBlock": {
          "Ref": "DestinationCidrBlock"
        },
        "ChildInstanceRouteTableId": {
          "Ref": "ChildInstanceRouteTableId"
        },
        "ChildInstanceType": {
          "Ref": "ChildInstanceType"
        },
        "ChildInstanceId": {
          "Ref": "ChildInstanceId"
        }
      }
    }
  },
  "Parameters": {
    "ChildInstanceRegionId": {
      "Type": "String",
      "Description": "The ID of the region where the attached VBR or VPC is located."
    },
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance where the route entry is published."
    },
    "DestinationCidrBlock": {
      "Type": "String",
      "Description": "The destination CIDR block of the route entry to publish."
    },
    "ChildInstanceRouteTableId": {
      "Type": "String",
      "Description": "The route table of the attached VBR or VPC."
    },
    "ChildInstanceType": {
      "Type": "String",
      "Description": "The type of the network, value: VPC VBR",
      "AllowedValues": [
        "VPC",
        "VBR"
      ]
    },
    "ChildInstanceId": {
      "Type": "String",
      "Description": "The ID of the attached network (VPC or VBR)."
    }
  },
  "Outputs": {}
}
```
