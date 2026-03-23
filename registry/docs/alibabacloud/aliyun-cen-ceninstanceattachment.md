ALIYUN::CEN::CenInstanceAttachment is used to attach a network instance to a Cloud Enterprise Network (CEN) instance.

## Syntax

```
{
  "Type": "ALIYUN::CEN::CenInstanceAttachment",
  "Properties": {
    "ChildInstanceRegionId": String,
    "ChildInstanceType": String,
    "ChildInstanceId": String,
    "CenId": String,
    "ChildInstanceOwnerId": Integer
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

None.

ChildInstanceId

String

Yes

No

The ID of the network instance that you want to attach to the CEN instance.

None.

ChildInstanceRegionId

String

Yes

No

The region of the network instance.

None.

ChildInstanceType

String

Yes

No

The type of the network instance.

Valid values: VPC, VBR, and CCN.

ChildInstanceOwnerId

Integer

No

No

The unique identifier (UID) of the account to which the network instance belongs in a cross-account scenario.

None.

## Return values

**Fn::GetAtt**

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  CenId:
    Type: String
    Description: The ID of the CEN instance.
  ChildInstanceOwnerId:
    Type: Number
    Description: The account ID to which the network belongs.
Resources:
  CenInstanceAttachment:
    Type: ALIYUN::CEN::CenInstanceAttachment
    Properties:
      ChildInstanceRegionId: cn-beijing
      ChildInstanceType: VPC
      ChildInstanceId:
        Ref: VpcId
      CenId:
        Ref: CenId
      ChildInstanceOwnerId:
        Ref: ChildInstanceOwnerId
Outputs: {}
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance."
    },
    "ChildInstanceOwnerId": {
      "Type": "Number",
      "Description": "The account ID to which the network belongs."
    }
  },
  "Resources": {
    "CenInstanceAttachment": {
      "Type": "ALIYUN::CEN::CenInstanceAttachment",
      "Properties": {
        "ChildInstanceRegionId": "cn-beijing",
        "ChildInstanceType": "VPC",
        "ChildInstanceId": {
          "Ref": "VpcId"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "ChildInstanceOwnerId": {
          "Ref": "ChildInstanceOwnerId"
        }
      }
    }
  },
  "Outputs": {}
}
```
