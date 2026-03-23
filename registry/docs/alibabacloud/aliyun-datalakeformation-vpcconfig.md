The ALIYUN::DataLakeFormation::VpcConfig type is used to configure a VPC whitelist.

## Syntax

```
{
  "Type": "ALIYUN::DataLakeFormation::VpcConfig",
  "Properties": {
    "VpcId": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC).

None

## Return values

Fn::GetAtt

VpcId: The ID of the VPC.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: The ID of the VPC to configure.
    Required: true
Resources:
  VpcConfig:
    Type: ALIYUN::DataLakeFormation::VpcConfig
    Properties:
      VpcId:
        Ref: VpcId
Outputs:
  VpcId:
    Description: VPC ID.
    Value:
      Fn::GetAtt:
        - VpcConfig
        - VpcId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC to configure."
      },
      "Required": true
    }
  },
  "Resources": {
    "VpcConfig": {
      "Type": "ALIYUN::DataLakeFormation::VpcConfig",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        }
      }
    }
  },
  "Outputs": {
    "VpcId": {
      "Description": "VPC ID.",
      "Value": {
        "Fn::GetAtt": [
          "VpcConfig",
          "VpcId"
        ]
      }
    }
  }
}
                        
```
