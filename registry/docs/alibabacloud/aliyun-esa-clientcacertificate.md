The ALIYUN::ESA::ClientCaCertificate type uploads a client CA certificate.

## Syntax

```
{
  "Type": "ALIYUN::ESA::ClientCaCertificate",
  "Properties": {
    "Certificate": String,
    "SiteId": Integer,
    "ClientCaCertName": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Certificate

String

Yes

No

The content of the certificate.

None

SiteId

Integer

Yes

No

The ID of the site.

None

ClientCaCertName

String

No

No

The name of the certificate.

None

## Return values

Fn::GetAtt

-   ClientCaCertName: The name of the certificate.
    
-   SAN: The subject alternative name of the certificate.
    
-   SiteId: The site ID.
    
-   SiteName: The site name.
    
-   Issuer: The certificate issuer.
    
-   PubkeyAlgorithm: The public key algorithm.
    
-   CreateTime: The time when the certificate was created.
    
-   SignatureAlgorithm: The signature algorithm.
    
-   NotAfter: The end of the certificate validity period.
    
-   Type: The certificate type.
    
-   ClientCaCertId: The client CA certificate ID.
    
-   UpdateTime: The time when the certificate was last updated.
    
-   NotBefore: The start of the certificate validity period.
    
-   Certificate: The certificate content.
    
-   CommonName: The common name of the certificate.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SiteId:
    Type: Number
    Description:
      en: Site Id.
    Required: true
  Certificate:
    Type: String
    Description:
      en: Certificate content.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::ClientCaCertificate
    Properties:
      SiteId:
        Ref: SiteId
      Certificate:
        Ref: Certificate
Outputs:
  ClientCaCertName:
    Description: The certificate name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ClientCaCertName
  SAN:
    Description: Alternate certificate subject name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SAN
  SiteId:
    Description: Site Id.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  SiteName:
    Description: The website name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteName
  Issuer:
    Description: Certificate Authority.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Issuer
  PubkeyAlgorithm:
    Description: Certificate public key algorithm.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - PubkeyAlgorithm
  CreateTime:
    Description: Creation time.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  SignatureAlgorithm:
    Description: Certificate signature algorithm.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SignatureAlgorithm
  NotAfter:
    Description: The expiration date of the certificate validity period.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NotAfter
  Type:
    Description: The certificate type.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Type
  ClientCaCertId:
    Description: ClientCaCertificate Id.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ClientCaCertId
  UpdateTime:
    Description: Update time.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UpdateTime
  NotBefore:
    Description: The start time of the certificate validity period.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NotBefore
  Certificate:
    Description: Certificate content.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Certificate
  CommonName:
    Description: The certificate common name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "Site Id."
      },
      "Required": true
    },
    "Certificate": {
      "Type": "String",
      "Description": {
        "en": "Certificate content."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::ClientCaCertificate",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "Certificate": {
          "Ref": "Certificate"
        }
      }
    }
  },
  "Outputs": {
    "ClientCaCertName": {
      "Description": "The certificate name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ClientCaCertName"
        ]
      }
    },
    "SAN": {
      "Description": "Alternate certificate subject name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SAN"
        ]
      }
    },
    "SiteId": {
      "Description": "Site Id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "SiteName": {
      "Description": "The website name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteName"
        ]
      }
    },
    "Issuer": {
      "Description": "Certificate Authority.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Issuer"
        ]
      }
    },
    "PubkeyAlgorithm": {
      "Description": "Certificate public key algorithm.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "PubkeyAlgorithm"
        ]
      }
    },
    "CreateTime": {
      "Description": "Creation time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "SignatureAlgorithm": {
      "Description": "Certificate signature algorithm.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SignatureAlgorithm"
        ]
      }
    },
    "NotAfter": {
      "Description": "The expiration date of the certificate validity period.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NotAfter"
        ]
      }
    },
    "Type": {
      "Description": "The certificate type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Type"
        ]
      }
    },
    "ClientCaCertId": {
      "Description": "ClientCaCertificate Id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ClientCaCertId"
        ]
      }
    },
    "UpdateTime": {
      "Description": "Update time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UpdateTime"
        ]
      }
    },
    "NotBefore": {
      "Description": "The start time of the certificate validity period.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NotBefore"
        ]
      }
    },
    "Certificate": {
      "Description": "Certificate content.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Certificate"
        ]
      }
    },
    "CommonName": {
      "Description": "The certificate common name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CommonName"
        ]
      }
    }
  }
}
                        
```
