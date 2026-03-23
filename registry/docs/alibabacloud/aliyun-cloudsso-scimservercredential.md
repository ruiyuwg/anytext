ALIYUN::CloudSSO::SCIMServerCredential is used to create a System for Cross-domain Identity Management (SCIM) credential.

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::SCIMServerCredential",
  "Properties": {
    "Status": String,
    "DirectoryId": String
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

DirectoryId

String

Yes

No

The directory ID.

None.

Status

String

No

Yes

The status of the SCIM credential.

Valid values:

-   Enabled
    
-   Disabled
    

## Return values

Fn::GetAtt

-   CredentialId: the ID of the SCIM credential.
    
-   CredentialSecret: the SCIM credential.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DirectoryId:
    Description:
      en: The ID of the directory.
    Required: true
    Type: String
  Status:
    AllowedValues:
    - Enabled
    - Disabled
    Default: Enabled
    Description:
      en: 'The new status of the SCIM credential. Valid values:

        - Enabled: The SCIM credential is enabled.

        - Disabled: The SCIM credential is disabled.

        The default value is Enabled.'
    Required: false
    Type: String
Resources:
  ScimServerCredential:
    Properties:
      DirectoryId:
        Ref: DirectoryId
      Status:
        Ref: Status
    Type: ALIYUN::CloudSSO::SCIMServerCredential
Outputs:
  CredentialId:
    Description: The ID of the SCIM credential.
    Value:
      Fn::GetAtt:
      - ScimServerCredential
      - CredentialId
  CredentialSecret:
    Description: The secret of the SCIM credential.
    Value:
      Fn::GetAtt:
      - ScimServerCredential
      - CredentialSecret
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Status": {
      "Type": "String",
      "Description": {
        "en": "The new status of the SCIM credential. Valid values:\n- Enabled: The SCIM credential is enabled.\n- Disabled: The SCIM credential is disabled.\nThe default value is Enabled."
      },
      "AllowedValues": [
        "Enabled",
        "Disabled"
      ],
      "Required": false,
      "Default": "Enabled"
    },
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    }
  },
  "Resources": {
    "ScimServerCredential": {
      "Type": "ALIYUN::CloudSSO::SCIMServerCredential",
      "Properties": {
        "Status": {
          "Ref": "Status"
        },
        "DirectoryId": {
          "Ref": "DirectoryId"
        }
      }
    }
  },
  "Outputs": {
    "CredentialId": {
      "Description": "The ID of the SCIM credential.",
      "Value": {
        "Fn::GetAtt": [
          "ScimServerCredential",
          "CredentialId"
        ]
      }
    },
    "CredentialSecret": {
      "Description": "The secret of the SCIM credential.",
      "Value": {
        "Fn::GetAtt": [
          "ScimServerCredential",
          "CredentialSecret"
        ]
      }
    }
  }
}
                        
```
