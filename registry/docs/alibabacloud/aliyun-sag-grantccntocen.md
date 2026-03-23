ALIYUN::SAG::GrantCcnToCen is used to grant permissions on a Cloud Connect Network (CCN) instance to a Cloud Enterprise Network (CEN) instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::GrantCcnToCen",
  "Properties": {
    "CenInstanceId": String,
    "CenUid": String,
    "CcnInstanceId": String
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

CenInstanceId

String

Yes

No

The ID of the CEN instance.

None.

CenUid

String

Yes

No

The ID of the account to which the CEN instance belongs.

None.

CcnInstanceId

String

Yes

No

The ID of the CCN instance.

None.

## Response parameters

Fn::GetAtt

-   CenInstanceId: the ID of the CEN instance.
-   CcnInstanceId: the ID of the CCN instance.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "GrantCcnToCen": {
      "Type": "ALIYUN::SAG::GrantCcnToCen",
      "Properties": {
        "CenInstanceId": {
          "Ref": "CenInstanceId"
        },
        "CenUid": {
          "Ref": "CenUid"
        },
        "CcnInstanceId": {
          "Ref": "CcnInstanceId"
        }
      }
    }
  },
  "Parameters": {
    "CenInstanceId": {
      "Type": "String",
      "Description": "The ID of the CEN instance."
    },
    "CenUid": {
      "Type": "String",
      "Description": "The ID of the account to which the CEN instance belongs."
    },
    "CcnInstanceId": {
      "Type": "String",
      "Description": "The ID of the CCN instance."
    }
  },
  "Outputs": {
    "CenInstanceId": {
      "Description": "The ID of the CEN instance.",
      "Value": {
        "Fn::GetAtt": [
          "GrantCcnToCen",
          "CenInstanceId"
        ]
      }
    },
    "CcnInstanceId": {
      "Description": "The ID of the CCN instance.",
      "Value": {
        "Fn::GetAtt": [
          "GrantCcnToCen",
          "CcnInstanceId"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  GrantCcnToCen:
    Type: ALIYUN::SAG::GrantCcnToCen
    Properties:
      CenInstanceId:
        Ref: CenInstanceId
      CenUid:
        Ref: CenUid
      CcnInstanceId:
        Ref: CcnInstanceId
Parameters:
  CenInstanceId:
    Type: String
    Description: The ID of the CEN instance.
  CenUid:
    Type: String
    Description: The ID of the account to which the CEN instance belongs.
  CcnInstanceId:
    Type: String
    Description: The ID of the CCN instance.
Outputs:
  CenInstanceId:
    Description: The ID of the CEN instance.
    Value:
      Fn::GetAtt:
      - GrantCcnToCen
      - CenInstanceId
  CcnInstanceId:
    Description: The ID of the CCN instance.
    Value:
      Fn::GetAtt:
      - GrantCcnToCen
      - CcnInstanceId
```
