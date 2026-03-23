ALIYUN::CloudSSO::SAMLIdentityProvider is used to configure the information about a Security Assertion Markup Language (SAML) identity provider (IdP).

## Syntax

```
{
  "Type": "ALIYUN::CloudSSO::SAMLIdentityProvider",
  "Properties": {
    "EntityId": String,
    "SSOStatus": String,
    "DirectoryId": String,
    "EncodedMetadataDocument": String,
    "WantRequestSigned": Boolean,
    "LoginUrl": String,
    "X509Certificate": String
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

EncodedMetadataDocument

String

No

No

The metadata file of the IdP. The value of this property is Base64-encoded.

The file is provided by the IdP that supports SAML 2.0.

EntityId

String

No

No

The entity ID of the IdP.

None.

LoginUrl

String

No

No

The logon URL of the IdP.

None.

SSOStatus

String

No

No

The status of single sign-on (SSO) logon.

Valid values:

-   Enabled
    
-   Disabled (default)
    

WantRequestSigned

Boolean

No

No

Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO.

Valid values:

-   true
    
-   false (default)
    

X509Certificate

String

No

No

The X.509 certificate in the Privacy Enhanced Mail (PEM) format.

If you specify this property, all existing certificates are replaced.

## Return values

Fn::GetAtt

None.

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
  EncodedMetadataDocument:
    Description:
      en: 'The metadata file of the IdP. The value of this parameter is Base64-encoded.

        The file is provided by the IdP that supports SAML 2.0.'
    Required: false
    Type: String
  EntityId:
    Description:
      en: The entity ID of the IdP.
    Required: false
    Type: String
  LoginUrl:
    Description:
      en: The logon URL of the IdP.
    Required: false
    Type: String
  SSOStatus:
    AllowedValues:
    - Enabled
    - Disabled
    Description:
      en: 'The status of SSO logon. Valid values:

        - Enabled

        - Disabled (default)'
    Required: false
    Type: String
  WantRequestSigned:
    Description:
      en: 'Specifies whether CloudSSO needs to sign SAML requests. The requests are
        sent when users log on to the CloudSSO user portal to initiate SAML-based
        SSO. Valid values:

        - true: yes

        - false: no (default)'
    Required: false
    Type: Boolean
  X509Certificate:
    Description:
      en: The X.509 certificate n the PEM format. If you specify this parameter, all
        existing certificates are replaced.
    Required: false
    Type: String
Resources:
  SAMLIdentityProvider:
    Properties:
      DirectoryId:
        Ref: DirectoryId
      EncodedMetadataDocument:
        Ref: EncodedMetadataDocument
      EntityId:
        Ref: EntityId
      LoginUrl:
        Ref: LoginUrl
      SSOStatus:
        Ref: SSOStatus
      WantRequestSigned:
        Ref: WantRequestSigned
      X509Certificate:
        Ref: X509Certificate
    Type: ALIYUN::CloudSSO::SAMLIdentityProvider
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EntityId": {
      "Type": "String",
      "Description": {
        "en": "The entity ID of the IdP."
      },
      "Required": false
    },
    "SSOStatus": {
      "Type": "String",
      "Description": {
        "en": "The status of SSO logon. Valid values:\n- Enabled\n- Disabled (default)"
      },
      "AllowedValues": [
        "Enabled",
        "Disabled"
      ],
      "Required": false
    },
    "DirectoryId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the directory."
      },
      "Required": true
    },
    "EncodedMetadataDocument": {
      "Type": "String",
      "Description": {
        "en": "The metadata file of the IdP. The value of this parameter is Base64-encoded.\nThe file is provided by the IdP that supports SAML 2.0."
      },
      "Required": false
    },
    "WantRequestSigned": {
      "Type": "Boolean",
      "Description": {
        "en": "Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:\n- true: yes\n- false: no (default)"
      },
      "Required": false
    },
    "LoginUrl": {
      "Type": "String",
      "Description": {
        "en": "The logon URL of the IdP."
      },
      "Required": false
    },
    "X509Certificate": {
      "Type": "String",
      "Description": {
        "en": "The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced."
      },
      "Required": false
    }
  },
  "Resources": {
    "SAMLIdentityProvider": {
      "Type": "ALIYUN::CloudSSO::SAMLIdentityProvider",
      "Properties": {
        "EntityId": {
          "Ref": "EntityId"
        },
        "SSOStatus": {
          "Ref": "SSOStatus"
        },
        "DirectoryId": {
          "Ref": "DirectoryId"
        },
        "EncodedMetadataDocument": {
          "Ref": "EncodedMetadataDocument"
        },
        "WantRequestSigned": {
          "Ref": "WantRequestSigned"
        },
        "LoginUrl": {
          "Ref": "LoginUrl"
        },
        "X509Certificate": {
          "Ref": "X509Certificate"
        }
      }
    }
  }
}
                        
```
