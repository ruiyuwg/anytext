ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition is used to add a policy to an access configuration.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition",
  "Properties": {
    "InlinePolicyDocument": Map,
    "DirectoryId": String,
    "PermissionPolicyName": String,
    "PermissionPolicyType": String,
    "AccessConfigurationId": String
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

AccessConfigurationId

String

Yes

No

The ID of the access configuration.

None.

DirectoryId

String

Yes

No

The directory ID.

None.

PermissionPolicyName

String

Yes

No

The policy name.

Valid values:

-   If you set `PermissionPolicyType` to `System`, you must set PermissionPolicyName to the name of a system policy. System policies are provided by Resource Access Management (RAM) and can be obtained from RAM.
    
-   If you set `PermissionPolicyType` to `Inline`, you must set PermissionPolicyName to the name of an inline policy. You can set PermissionPolicyName to a custom value. The value of PermissionPolicyName can be up to 32 characters in length.
    

PermissionPolicyType

String

Yes

No

The policy type.

Valid values:

-   System: system policy. RAM system policies are used.
    
-   Inline: inline policy. Inline policies are custom policies that you create based on the syntax and structure of RAM policies.
    

InlinePolicyDocument

Map

No

No

The content of the inline policy.

The content can be up to 4,096 characters in length.

You must specify this property when `PermissionPolicyType` is set to `Inline`. For more information, see [Policy syntax and structure](/help/en/ram/policy-structure-and-syntax). Example:

```
{"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}
```

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AccessConfigurationId:
    Description:
      en: The ID of the access configuration.
    Required: true
    Type: String
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  InlinePolicyDocument:
    Description:
      en: 'The configurations of the inline policy.

        The value can be up to 4,096 characters in length.

        If you set PermissionPolicyType to Inline, you must specify this parameter.'
    Required: false
    Type: Json
  PermissionPolicyName:
    Description:
      en: 'The name of the permission policy.

        - If you set PermissionPolicyType to System, you must set this parameter to
        the name of the system policy. You can obtain the name of the system policy
        from RAM.

        - If you set PermissionPolicyType to Inline, you must set this parameter to
        the name of the inline policy. A custom value is supported.'
    Required: true
    Type: String
  PermissionPolicyType:
    AllowedValues:
    - System
    - Inline
    Description:
      en: 'The type of the permission policy. Valid values:

        - System: system policy. Resource Access Management (RAM) system policies
        are reused.

        - Inline: inline policy. Inline policies are created based on the RAM policy
        syntax and structure.'
    Required: true
    Type: String
Resources:
  PermissionPolicy:
    Properties:
      AccessConfigurationId:
        Ref: AccessConfigurationId
      DirectoryId:
        Ref: DirectoryId
      InlinePolicyDocument:
        Ref: InlinePolicyDocument
      PermissionPolicyName:
        Ref: PermissionPolicyName
      PermissionPolicyType:
        Ref: PermissionPolicyType
    Type: ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InlinePolicyDocument": {
      "Type": "Json",
      "Description": {
        "en": "The configurations of the inline policy.\nThe value can be up to 4,096 characters in length.\nIf you set PermissionPolicyType to Inline, you must specify this parameter."
      },
      "Required": false
    },
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    },
    "PermissionPolicyName": {
      "Type": "String",
      "Description": {
        "en": "The name of the permission policy.\n- If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.\n- If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported."
      },
      "Required": true
    },
    "PermissionPolicyType": {
      "Type": "String",
      "Description": {
        "en": "The type of the permission policy. Valid values:\n- System: system policy. Resource Access Management (RAM) system policies are reused.\n- Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure."
      },
      "AllowedValues": [
        "System",
        "Inline"
      ],
      "Required": true
    },
    "AccessConfigurationId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the access configuration."
      },
      "Required": true
    }
  },
  "Resources": {
    "PermissionPolicy": {
      "Type": "ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition",
      "Properties": {
        "InlinePolicyDocument": {
          "Ref": "InlinePolicyDocument"
        },
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "PermissionPolicyName": {
          "Ref": "PermissionPolicyName"
        },
        "PermissionPolicyType": {
          "Ref": "PermissionPolicyType"
        },
        "AccessConfigurationId": {
          "Ref": "AccessConfigurationId"
        }
      }
    }
  }
}
                        
```
