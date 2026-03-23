ALIYUN::SAG::ACLAssociation is used to associate an access control list (ACL) with a Smart Access Gateway (SAG) instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::ACLAssociation",
  "Properties": {
    "SmartAGId": String,
    "AclId": String
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

SmartAGId

String

Yes

No

The ID of the SAG instance to be associated with the ACL.

None

AclId

String

Yes

No

The ID of the ACL.

None

## Response parameters

Fn::GetAtt

None

## Examples

`JSON` format

```
{
    "ROSTemplateFormatVersion": "2015-09-01",
    "Parameters": {
    "AclId": {
      "Type": "String",
      "Description": "Access control ID."
    },
    "SmartAGId": {
      "Type": "String",
      "Description": "An intelligent gateway instance that needs to bind access control."
    }
  },
  "Resources": {
    "ACLAssociation": {
      "Type": "ALIYUN::SAG::ACLAssociation",
      "Properties": {
        "AclId": {
          "Ref": "AclId"
        },
        "SmartAGId": {
          "Ref": "SmartAGId"
        }
      }
    }
  },
  "Outputs": {}
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclId:
    Type: String
    Description: Access control ID.
  SmartAGId:
    Type: String
    Description: An intelligent gateway instance that needs to bind access control.
Resources:
  ACLAssociation:
    Type: 'ALIYUN::SAG::ACLAssociation'
    Properties:
      AclId:
        Ref: AclId
      SmartAGId:
        Ref: SmartAGId
Outputs: {}
```
