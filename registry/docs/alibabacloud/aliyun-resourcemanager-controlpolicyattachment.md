ALIYUN::ResourceManager::ControlPolicyAttachment is used to attach a custom control policy.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::ControlPolicyAttachment",
  "Properties": {
    "TargetId": String,
    "PolicyId": String
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

TargetId

String

Yes

No

The ID of the object to which you want to attach the control policy.

Valid values:

-   Root folders
-   Subfolders of the Root folder
-   Member accounts

PolicyId

String

Yes

No

The ID of the control policy.

None

## Response parameters

Fn::GetAtt

-   PolicyType: the type of the control policy.
-   Description: the description of the control policy.
-   AttachDate: the time when the control policy was attached.
-   PolicyName: the name of the control policy.
-   TargetId: the ID of the object to which the control policy is attached.
-   PolicyId: the ID of the control policy.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TargetId": {
      "Type": "String",
      "Description": "TargetId"
    },
    "PolicyId": {
      "Type": "String",
      "Description": "PolicyId"
    }
  },
  "Resources": {
    "ResourceManagerControlPolicyAttachment": {
      "Type": "ALIYUN::ResourceManager::ControlPolicyAttachment",
      "Properties": {
        "TargetId": {
          "Ref": "TargetId"
        },
        "PolicyId": {
          "Ref": "PolicyId"
        }
      }
    }
  },
  "Outputs": {
    "PolicyType": {
      "Description": "PolicyType",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicyAttachment",
          "PolicyType"
        ]
      }
    },
    "Description": {
      "Description": "Description",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicyAttachment",
          "Description"
        ]
      }
    },
    "AttachDate": {
      "Description": "AttachDate",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicyAttachment",
          "AttachDate"
        ]
      }
    },
    "PolicyName": {
      "Description": "PolicyName",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicyAttachment",
          "PolicyName"
        ]
      }
    },
    "TargetId": {
      "Description": "TargetId",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicyAttachment",
          "TargetId"
        ]
      }
    },
    "PolicyId": {
      "Description": "PolicyId",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicyAttachment",
          "PolicyId"
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
  PolicyId:
    Description: PolicyId
    Type: String
  TargetId:
    Description: TargetId
    Type: String
Resources:
  ResourceManagerControlPolicyAttachment:
    Properties:
      PolicyId:
        Ref: PolicyId
      TargetId:
        Ref: TargetId
    Type: ALIYUN::ResourceManager::ControlPolicyAttachment
Outputs:
  AttachDate:
    Description: AttachDate
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicyAttachment
      - AttachDate
  Description:
    Description: Description
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicyAttachment
      - Description
  PolicyId:
    Description: PolicyId
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicyAttachment
      - PolicyId
  PolicyName:
    Description: PolicyName
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicyAttachment
      - PolicyName
  PolicyType:
    Description: PolicyType
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicyAttachment
      - PolicyType
  TargetId:
    Description: TargetId
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicyAttachment
      - TargetId
```
