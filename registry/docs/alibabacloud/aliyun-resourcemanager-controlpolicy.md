ALIYUN::ResourceManager::ControlPolicy is used to create a custom control policy.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::ControlPolicy",
  "Properties": {
    "Description": String,
    "PolicyDocument": String,
    "ControlPolicyName": String,
    "EffectScope": String
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

Description

String

No

Yes

The description of the control policy.

The description must be 1 to 1,024 characters in length and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.

PolicyDocument

String

Yes

Yes

The document of the control policy.

The document can be up to 2,048 characters in length.

For more information, see [Examples of custom control policies](/help/en/resource-management/resource-directory/user-guide/examples-of-custom-access-control-policies#concept-1936123 "This topic describes examples of custom control policies.") and [Control policy languages](/help/en/resource-management/resource-directory/user-guide/languages-of-access-control-policies#concept-xg5-51g-xdb "Before you create or update a custom control policy, you must understand the basic elements and usage rules of control policy languages.").

ControlPolicyName

String

Yes

Yes

The name of the control policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-). It must start with a letter.

EffectScope

String

Yes

No

The effective scope of the control policy.

Set the value to RAM. The value of RAM indicates that the control policy is in effect for Resource Access Management (RAM) users and roles.

## Response parameters

Fn::GetAtt

-   PolicyType: the type of the control policy.
-   Description: the description of the control policy.
-   AttachmentCount: the number of times that the control policy is referenced.
-   PolicyDocument: the document of the control policy.
-   ControlPolicyName: the name of the control policy.
-   EffectScope: the effective scope of the control policy.
-   PolicyId: the ID of the control policy.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "Type": "String",
      "Description": "Description"
    },
    "PolicyDocument": {
      "Type": "String",
      "Description": "PolicyDocument"
    },
    "ControlPolicyName": {
      "Type": "String",
      "Description": "PolicyName"
    },
    "EffectScope": {
      "Type": "String",
      "Description": "EffectScope"
    }
  },
  "Resources": {
    "ResourceManagerControlPolicy": {
      "Type": "ALIYUN::ResourceManager::ControlPolicy",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "PolicyDocument": {
          "Ref": "PolicyDocument"
        },
        "ControlPolicyName": {
          "Ref": "ControlPolicyName"
        },
        "EffectScope": {
          "Ref": "EffectScope"
        }
      }
    }
  },
  "Outputs": {
    "PolicyType": {
      "Description": "PolicyType",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicy",
          "PolicyType"
        ]
      }
    },
    "Description": {
      "Description": "Description",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicy",
          "Description"
        ]
      }
    },
    "AttachmentCount": {
      "Description": "AttachmentCount",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicy",
          "AttachmentCount"
        ]
      }
    },
    "PolicyDocument": {
      "Description": "PolicyDocument",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicy",
          "PolicyDocument"
        ]
      }
    },
    "ControlPolicyName": {
      "Description": "PolicyName",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicy",
          "ControlPolicyName"
        ]
      }
    },
    "EffectScope": {
      "Description": "EffectScope",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicy",
          "EffectScope"
        ]
      }
    },
    "PolicyId": {
      "Description": "PolicyId",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerControlPolicy",
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
  ControlPolicyName:
    Description: PolicyName
    Type: String
  Description:
    Description: Description
    Type: String
  EffectScope:
    Description: EffectScope
    Type: String
  PolicyDocument:
    Description: PolicyDocument
    Type: String
Resources:
  ResourceManagerControlPolicy:
    Properties:
      ControlPolicyName:
        Ref: ControlPolicyName
      Description:
        Ref: Description
      EffectScope:
        Ref: EffectScope
      PolicyDocument:
        Ref: PolicyDocument
    Type: ALIYUN::ResourceManager::ControlPolicy
Outputs:
  AttachmentCount:
    Description: AttachmentCount
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicy
      - AttachmentCount
  ControlPolicyName:
    Description: PolicyName
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicy
      - ControlPolicyName
  Description:
    Description: Description
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicy
      - Description
  EffectScope:
    Description: EffectScope
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicy
      - EffectScope
  PolicyDocument:
    Description: PolicyDocument
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicy
      - PolicyDocument
  PolicyId:
    Description: PolicyId
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicy
      - PolicyId
  PolicyType:
    Description: PolicyType
    Value:
      Fn::GetAtt:
      - ResourceManagerControlPolicy
      - PolicyType
```
