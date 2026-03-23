ALIYUN::ResourceManager::PolicyAttachment is used to attach a policy to an object. After you attach a policy to an object, the object has the permissions to manage the resources in the current resource group or within the current Alibaba Cloud account.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::PolicyAttachment",
  "Properties": {
    "PolicyType": String,
    "ResourceGroupId": String,
    "PolicyName": String,
    "PrincipalName": String,
    "PrincipalType": String
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

PolicyType

String

Yes

No

The policy type.

Valid values:

-   Custom
    
-   System
    

ResourceGroupId

String

No

No

The ID of the resource group or the ID of the Alibaba Cloud account.

This property indicates the resource group or the Alibaba Cloud account for which you want to grant permissions.

PolicyName

String

Yes

No

The policy name.

The name must be 1 to 128 characters in length, and can contain letters, digits, and hyphens (-).

PrincipalName

String

Yes

No

The name of the object to which you want to attach the policy.

None.

PrincipalType

String

Yes

No

The type of the object to which you want to attach the policy.

Valid values:

-   IMSUser: RAM user
    
-   IMSGroup: RAM user group
    
-   ServiceRole: RAM role
    

## Return values

Fn::GetAtt

-   PolicyType: the type of the object to which the policy is attached.
    
-   Description: the description of the policy.
    
-   ResourceGroupId: the ID of the resource group or the ID of the Alibaba Cloud account. This property indicates the resource group or the Alibaba Cloud account for which you want to grant permissions.
    
-   AttachDate: the time when the policy was attached.
    
-   PolicyName: the policy name.
    
-   PrincipalName: the name of the object to which the policy is attached.
    
-   PrincipalType: the type of the object to which the policy is attached.
    

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  PolicyName:
    Description: The name of the policy
    Type: String
  PolicyType:
    Description: The type of the policy
    Type: String
  PrincipalName:
    Description: The name of the object to which you want to attach the policy
    Type: String
  PrincipalType:
    Description: 'The type of the object to which you want to attach the policy. Valid
      values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role'
    Type: String
  ResourceGroupId:
    Description: The ID of the resource group or the ID of the Alibaba Cloud account
      to which the resource group belongs.
    Type: String
Resources:
  ResourceManagerPolicyAttachment:
    Properties:
      PolicyName:
        Ref: PolicyName
      PolicyType:
        Ref: PolicyType
      PrincipalName:
        Ref: PrincipalName
      PrincipalType:
        Ref: PrincipalType
      ResourceGroupId:
        Ref: ResourceGroupId
    Type: ALIYUN::ResourceManager::PolicyAttachment
Outputs:
  AttachDate:
    Description: Authorization time
    Value:
      Fn::GetAtt:
      - ResourceManagerPolicyAttachment
      - AttachDate
  Description:
    Description: Policy description
    Value:
      Fn::GetAtt:
      - ResourceManagerPolicyAttachment
      - Description
  PolicyName:
    Description: The name of the policy
    Value:
      Fn::GetAtt:
      - ResourceManagerPolicyAttachment
      - PolicyName
  PolicyType:
    Description: The type of the policy
    Value:
      Fn::GetAtt:
      - ResourceManagerPolicyAttachment
      - PolicyType
  PrincipalName:
    Description: The name of the object to which you want to attach the policy
    Value:
      Fn::GetAtt:
      - ResourceManagerPolicyAttachment
      - PrincipalName
  PrincipalType:
    Description: 'The type of the object to which you want to attach the policy. Valid
      values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role'
    Value:
      Fn::GetAtt:
      - ResourceManagerPolicyAttachment
      - PrincipalType
  ResourceGroupId:
    Description: The ID of the resource group or the ID of the Alibaba Cloud account
      to which the resource group belongs.
    Value:
      Fn::GetAtt:
      - ResourceManagerPolicyAttachment
      - ResourceGroupId
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "PolicyType": {
      "Type": "String",
      "Description": "The type of the policy"
    },
    "ResourceGroupId": {
      "Type": "String",
      "Description": "The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs."
    },
    "PolicyName": {
      "Type": "String",
      "Description": "The name of the policy"
    },
    "PrincipalName": {
      "Type": "String",
      "Description": "The name of the object to which you want to attach the policy"
    },
    "PrincipalType": {
      "Type": "String",
      "Description": "The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role"
    }
  },
  "Resources": {
    "ResourceManagerPolicyAttachment": {
      "Type": "ALIYUN::ResourceManager::PolicyAttachment",
      "Properties": {
        "PolicyType": {
          "Ref": "PolicyType"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "PolicyName": {
          "Ref": "PolicyName"
        },
        "PrincipalName": {
          "Ref": "PrincipalName"
        },
        "PrincipalType": {
          "Ref": "PrincipalType"
        }
      }
    }
  },
  "Outputs": {
    "PolicyType": {
      "Description": "The type of the policy",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerPolicyAttachment",
          "PolicyType"
        ]
      }
    },
    "Description": {
      "Description": "Policy description",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerPolicyAttachment",
          "Description"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerPolicyAttachment",
          "ResourceGroupId"
        ]
      }
    },
    "AttachDate": {
      "Description": "Authorization time",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerPolicyAttachment",
          "AttachDate"
        ]
      }
    },
    "PolicyName": {
      "Description": "The name of the policy",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerPolicyAttachment",
          "PolicyName"
        ]
      }
    },
    "PrincipalName": {
      "Description": "The name of the object to which you want to attach the policy",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerPolicyAttachment",
          "PrincipalName"
        ]
      }
    },
    "PrincipalType": {
      "Description": "The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerPolicyAttachment",
          "PrincipalType"
        ]
      }
    }
  }
}
```
