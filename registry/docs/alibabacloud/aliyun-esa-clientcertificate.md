The ALIYUN::ESA::ClientCertificate type is used to create a client certificate.

## Syntax

```
{
  "Type": "ALIYUN::ESA::ClientCertificate",
  "Properties": {
    "SiteId": Integer,
    "ValidityDays": Integer,
    "CSR": String,
    "PkeyType": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

SiteId

Integer

Yes

No

The website ID.

None

ValidityDays

Integer

Yes

No

The certificate validity period.

Unit: days.

CSR

String

No

No

The content of the certificate signing request (CSR).

None

PkeyType

String

No

No

The type of the private key algorithm.

None

## Return values

Fn::GetAtt

-   SAN: The subject alternative name of the certificate.
    
-   SiteId: The website ID.
    
-   SiteName: The website name.
    
-   ClientCertificateName: The certificate name.
    
-   CACertificateId: The ID of the CA certificate.
    
-   Issuer: The certificate authority that issued the certificate.
    
-   PubkeyAlgorithm: The public key algorithm of the certificate.
    
-   CreateTime: The time when the certificate was created.
    
-   SignatureAlgorithm: The signature algorithm of the certificate.
    
-   ClientCertId: The certificate ID.
    
-   NotAfter: The time when the certificate expires.
    
-   Type: The certificate type.
    
-   UpdateTime: The time when the certificate was updated.
    
-   NotBefore: The time when the certificate becomes valid.
    
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
      en: The site ID.
    Required: true
  ValidityDays:
    Type: Number
    Description:
      en: The certificate validity period.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::ClientCertificate
    Properties:
      SiteId:
        Ref: SiteId
      ValidityDays:
        Ref: ValidityDays
Outputs:
  SAN:
    Description: The subject alternative name (SAN) of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SAN
  SiteId:
    Description: The site ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  SiteName:
    Description: The site name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteName
  ClientCertificateName:
    Description: The certificate name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ClientCertificateName
  CACertificateId:
    Description: The ID of the CA certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CACertificateId
  Issuer:
    Description: The certification authority (CA) that issued the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Issuer
  PubkeyAlgorithm:
    Description: The public key algorithm of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - PubkeyAlgorithm
  CreateTime:
    Description: The time when the certificate was created.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  SignatureAlgorithm:
    Description: The signature algorithm of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SignatureAlgorithm
  ClientCertId:
    Description: The client certificate ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ClientCertId
  NotAfter:
    Description: The time when the certificate expires.
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
  UpdateTime:
    Description: The time when the certificate was updated.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UpdateTime
  NotBefore:
    Description: The time when the certificate becomes valid.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NotBefore
  Certificate:
    Description: The certificate content.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Certificate
  CommonName:
    Description: The common name of the certificate.
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
        "en": "The site ID."
      },
      "Required": true
    },
    "ValidityDays": {
      "Type": "Number",
      "Description": {
        "en": "The certificate validity period."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::ClientCertificate",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "ValidityDays": {
          "Ref": "ValidityDays"
        }
      }
    }
  },
  "Outputs": {
    "SAN": {
      "Description": "The subject alternative name (SAN) of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SAN"
        ]
      }
    },
    "SiteId": {
      "Description": "The site ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "SiteName": {
      "Description": "The site name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteName"
        ]
      }
    },
    "ClientCertificateName": {
      "Description": "The certificate name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ClientCertificateName"
        ]
      }
    },
    "CACertificateId": {
      "Description": "The ID of the CA certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CACertificateId"
        ]
      }
    },
    "Issuer": {
      "Description": "The certification authority (CA) that issued the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Issuer"
        ]
      }
    },
    "PubkeyAlgorithm": {
      "Description": "The public key algorithm of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "PubkeyAlgorithm"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the certificate was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "SignatureAlgorithm": {
      "Description": "The signature algorithm of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SignatureAlgorithm"
        ]
      }
    },
    "ClientCertId": {
      "Description": "The client certificate ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ClientCertId"
        ]
      }
    },
    "NotAfter": {
      "Description": "The time when the certificate expires.",
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
    "UpdateTime": {
      "Description": "The time when the certificate was updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UpdateTime"
        ]
      }
    },
    "NotBefore": {
      "Description": "The time when the certificate becomes valid.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NotBefore"
        ]
      }
    },
    "Certificate": {
      "Description": "The certificate content.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Certificate"
        ]
      }
    },
    "CommonName": {
      "Description": "The common name of the certificate.",
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
