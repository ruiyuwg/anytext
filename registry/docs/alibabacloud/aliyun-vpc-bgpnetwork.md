ALIYUN::VPC::BgpNetwork is used to advertise a Border Gateway Protocol (BGP) network.

## Syntax

```
{
  "Type": "ALIYUN::VPC::BgpNetwork",
  "Properties": {
    "DstCidrBlock": String,
    "RouterId": String
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

DstCidrBlock

String

Yes

No

The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to your data center.

None

RouterId

String

Yes

No

The ID of the router that is associated with the router interface.

None

## Response parameters

Fn::GetAtt

-   DstCidrBlock: the CIDR block of the VPC or vSwitch that you want to connect to your data center.
-   RouterId: the ID of the router that is associated with the router interface.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DstCidrBlock": {
      "Type": "String",
      "Description": "The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect\nto a data center."
    },
    "RouterId": {
      "Type": "String",
      "Description": "The ID of the vRouter associated with the router interface."
    }
  },
  "Resources": {
    "BgpNetwork": {
      "Type": "ALIYUN::VPC::BgpNetwork",
      "Properties": {
        "DstCidrBlock": {
          "Ref": "DstCidrBlock"
        },
        "RouterId": {
          "Ref": "RouterId"
        }
      }
    }
  },
  "Outputs": {
    "DstCidrBlock": {
      "Description": "The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect\nto a data center.",
      "Value": {
        "Fn::GetAtt": [
          "BgpNetwork",
          "DstCidrBlock"
        ]
      }
    },
    "RouterId": {
      "Description": "The ID of the vRouter associated with the router interface.",
      "Value": {
        "Fn::GetAtt": [
          "BgpNetwork",
          "RouterId"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DstCidrBlock:
    Description: 'The CIDR block of the virtual private cloud (VPC) or vSwitch that
      you want to connect

      to a data center.'
    Type: String
  RouterId:
    Description: The ID of the vRouter associated with the router interface.
    Type: String
Resources:
  BgpNetwork:
    Properties:
      DstCidrBlock:
        Ref: DstCidrBlock
      RouterId:
        Ref: RouterId
    Type: ALIYUN::VPC::BgpNetwork
Outputs:
  DstCidrBlock:
    Description: 'The CIDR block of the virtual private cloud (VPC) or vSwitch that
      you want to connect

      to a data center.'
    Value:
      Fn::GetAtt:
      - BgpNetwork
      - DstCidrBlock
  RouterId:
    Description: The ID of the vRouter associated with the router interface.
    Value:
      Fn::GetAtt:
      - BgpNetwork
      - RouterId
```
