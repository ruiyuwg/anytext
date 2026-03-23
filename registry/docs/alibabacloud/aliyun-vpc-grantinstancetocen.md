ALIYUN::VPC::GrantInstanceToCen is used to authorize a CEN instance.

## Syntax

```
{
  "Type": "ALIYUN::VPC::GrantInstanceToCen",
  "Properties": {
    "InstanceId": String,
    "CenOwnerId": Integer,
    "CenId": String,
    "InstanceType": String
  }
}
```

## Properties

     

Property

Data type

Required

Editable

Description

Constraint

InstanceId

String

Yes

No

The ID of the network instance.

None

CenOwnerId

Integer

Yes

No

The UID of the account to which the Cloud Enterprise Network instance belongs.

None

CenId

String

Yes

No

The instance ID of the Cloud Enterprise Network to be authorized.

None

InstanceType

String

Yes

No

The type of the attached network.

Valid values:

-   VPC: Virtual Private Cloud
-   VBR: Virtual Border Router
-   CCN: Cloud Connect Network (CCN)

## Response parameters

Fn::GetAtt

-   InstanceId: the ID of the network instance.
-   CenId: indicates the ID of the Cloud Enterprise Network instance.

## Example

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the network instance."
    },
    "CenOwnerId": {
      "Type": "Number",
      "Description": "The UID of the account to which the target CEN instance belongs."
    },
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance to be authorized."
    },
    "InstanceType": {
      "Type": "String",
      "Description": "The type of the network instance. Valid values:\nVPC: Virtual Private Cloud (VPC).\nVBR: Virtual Border Router (VBR).\nCCN: Cloud Connect Network (CCN).",
      "AllowedValues": [
        "CCN",
        "VBR",
        "VPC"
      ]
    }
  },
  "Resources": {
    "GrantInstanceToCen": {
      "Type": "ALIYUN::VPC::GrantInstanceToCen",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "CenOwnerId": {
          "Ref": "CenOwnerId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "InstanceType": {
          "Ref": "InstanceType"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the network instance.",
      "Value": {
        "Fn::GetAtt": [
          "GrantInstanceToCen",
          "InstanceId"
        ]
      }
    },
    "CenId": {
      "Description": "The ID of the CEN instance to be authorized.",
      "Value": {
        "Fn::GetAtt": [
          "GrantInstanceToCen",
          "CenId"
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
  InstanceId:
    Type: String
    Description: The ID of the network instance.
  CenOwnerId:
    Type: Number
    Description: The UID of the account to which the target CEN instance belongs.
  CenId:
    Type: String
    Description: The ID of the CEN instance to be authorized.
  InstanceType:
    Type: String
    Description: |-
      The type of the network instance. Valid values:
      VPC: Virtual Private Cloud (VPC).
      VBR: Virtual Border Router (VBR).
      CCN: Cloud Connect Network (CCN).
    AllowedValues:
      -CCN
      -VBR
      - VPC
Resources:
  GrantInstanceToCen:
    Type: 'ALIYUN::VPC::GrantInstanceToCen'
    Properties:
      InstanceId:
        Ref: InstanceId
      CenOwnerId:
        Ref: CenOwnerId
      CenId:
        Ref: CenId
      InstanceType:
        Ref: InstanceType
Outputs:
  InstanceId:
    Description: The ID of the network instance.
    Value:
      'Fn::GetAtt':
        -GrantInstanceToCen
        - InstanceId
  CenId:
    Description: The ID of the CEN instance to be authorized.
    Value:
      'Fn::GetAtt':
        -GrantInstanceToCen
        -CenId
```
