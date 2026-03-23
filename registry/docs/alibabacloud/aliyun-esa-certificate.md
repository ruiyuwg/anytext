The ALIYUN::ESA::Certificate type configures a website certificate.

## Syntax

```
{
  "Type": "ALIYUN::ESA::Certificate",
  "Properties": {
    "CreatedType": String,
    "Domains": List,
    "SiteId": Integer,
    "CertId": String,
    "CertName": String,
    "CasId": String,
    "Certificate": String,
    "PrivateKey": String
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

CreatedType

String

Yes

No

The type of the certificate.

Valid values:

-   **cas**: A certificate from Certificate Management Service.
    
-   **upload**: A custom certificate that you upload.
    
-   free: A free certificate.
    

Domains

List

Yes

No

A list of domain names.

You can configure a maximum of 50 domain names.

SiteId

Integer

Yes

No

The ID of the website.

None

CertId

String

No

No

The ID of the certificate.

This property does not support IDs for free certificates created by calling the ApplyCertificate operation. It supports IDs for cas and upload certificates.

CertName

String

No

Yes

The name of the certificate.

This property is required when CreatedType is set to upload.

CasId

String

No

Yes

The ID of the certificate from Certificate Management Service.

This property is required when CreatedType is set to cas.

Certificate

String

No

Yes

The content of the certificate.

This property is required when CreatedType is set to upload.

PrivateKey

String

No

No

The private key of the certificate.

This property is required when CreatedType is set to upload.

## Return values

Fn::GetAtt

-   SiteId: The ID of the website.
    
-   ApplyMessage: The error message that is returned for the certificate application.
    
-   FingerprintSha256: The SHA-256 fingerprint of the certificate.
    
-   SiteName: The name of the website.
    
-   IssuerCN: The certificate authority (CA) that issued the certificate.
    
-   Issuer: The issuer of the certificate.
    
-   CertId: The ID of the certificate.
    
-   CreateTime: The time when the certificate was created.
    
-   ApplyCode: The error code that is returned for the certificate application.
    
-   NotAfter: The expiration date of the certificate.
    
-   CasId: The ID of the certificate from Certificate Management Service.
    
-   Domains: The list of domain names.
    
-   SigAlg: The signature algorithm of the certificate.
    
-   SerialNumber: The serial number of the certificate.
    
-   DCV: The Domain Control Validation (DCV) information.
    
-   UpdateTime: The time when the certificate was last updated.
    
-   CertName: The name of the certificate.
    
-   NotBefore: The start date of the certificate validity period.
    
-   PubAlg: The public key algorithm of the certificate.
    
-   Certificate: The content of the certificate.
    
-   CommonName: The Common Name (CN) field of the certificate.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Domains:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Description:
          en: The domain name.
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: A list of domain names.
    Required: true
    MinLength: 1
    MaxLength: 50
  SiteId:
    Type: Number
    Description:
      en: The ID of the site. You can obtain the site ID by calling the ListSites operation.
    Required: true
  CreatedType:
    Type: String
    Description:
      en: |-
        The type of the certificate. Valid values:
        - cas: A certificate from Certificate Management Service.
        - upload: A custom certificate that you upload.
        - free: A free certificate.
    AllowedValues:
      - cas
      - upload
      - free
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::Certificate
    Properties:
      Domains:
        Ref: Domains
      SiteId:
        Ref: SiteId
      CreatedType:
        Ref: CreatedType
Outputs:
  SiteId:
    Description: The ID of the site.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  ApplyMessage:
    Description: The error message returned for the certificate application.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ApplyMessage
  FingerprintSha256:
    Description: The SHA-256 fingerprint of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FingerprintSha256
  SiteName:
    Description: The name of the site.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteName
  IssuerCN:
    Description: The common name (CN) of the certificate issuer.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - IssuerCN
  Issuer:
    Description: The issuer of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Issuer
  CertId:
    Description: The ID of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CertId
  CreateTime:
    Description: The time when the resource was created.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  ApplyCode:
    Description: The error code returned for the certificate application.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ApplyCode
  NotAfter:
    Description: The expiration date of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NotAfter
  CasId:
    Description: The ID of the certificate from Certificate Management Service.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CasId
  Domains:
    Description: The list of domain names.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Domains
  SigAlg:
    Description: The signature algorithm of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SigAlg
  SerialNumber:
    Description: The serial number of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SerialNumber
  DCV:
    Description: The Domain Control Validation (DCV) information.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - DCV
  UpdateTime:
    Description: The time when the resource was last updated.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UpdateTime
  CertName:
    Description: The name of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CertName
  NotBefore:
    Description: The start date of the certificate validity period.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - NotBefore
  PubAlg:
    Description: The public key algorithm of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - PubAlg
  Certificate:
    Description: The content of the certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Certificate
  CommonName:
    Description: The Common Name (CN) field of the certificate.
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
    "Domains": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "The domain name."
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "A list of domain names."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 50
    },
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The ID of the site. You can obtain the site ID by calling the ListSites operation."
      },
      "Required": true
    },
    "CreatedType": {
      "Type": "String",
      "Description": {
        "en": "The type of the certificate.\n- cas: A certificate from Certificate Management Service.\n- upload: A custom certificate that you upload.\n- free: A free certificate."
      },
      "AllowedValues": [
        "cas",
        "upload",
        "free"
      ],
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::Certificate",
      "Properties": {
        "Domains": {
          "Ref": "Domains"
        },
        "SiteId": {
          "Ref": "SiteId"
        },
        "CreatedType": {
          "Ref": "CreatedType"
        }
      }
    }
  },
  "Outputs": {
    "SiteId": {
      "Description": "The ID of the site.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "ApplyMessage": {
      "Description": "The error message returned for the certificate application.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ApplyMessage"
        ]
      }
    },
    "FingerprintSha256": {
      "Description": "The SHA-256 fingerprint of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FingerprintSha256"
        ]
      }
    },
    "SiteName": {
      "Description": "The name of the site.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteName"
        ]
      }
    },
    "IssuerCN": {
      "Description": "The common name (CN) of the certificate issuer.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "IssuerCN"
        ]
      }
    },
    "Issuer": {
      "Description": "The issuer of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Issuer"
        ]
      }
    },
    "CertId": {
      "Description": "The ID of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CertId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the resource was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "ApplyCode": {
      "Description": "The error code returned for the certificate application.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ApplyCode"
        ]
      }
    },
    "NotAfter": {
      "Description": "The expiration date of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NotAfter"
        ]
      }
    },
    "CasId": {
      "Description": "The ID of the certificate from Certificate Management Service.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CasId"
        ]
      }
    },
    "Domains": {
      "Description": "The list of domain names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Domains"
        ]
      }
    },
    "SigAlg": {
      "Description": "The signature algorithm of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SigAlg"
        ]
      }
    },
    "SerialNumber": {
      "Description": "The serial number of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SerialNumber"
        ]
      }
    },
    "DCV": {
      "Description": "The Domain Control Validation (DCV) information.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "DCV"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the resource was last updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UpdateTime"
        ]
      }
    },
    "CertName": {
      "Description": "The name of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CertName"
        ]
      }
    },
    "NotBefore": {
      "Description": "The start date of the certificate validity period.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "NotBefore"
        ]
      }
    },
    "PubAlg": {
      "Description": "The public key algorithm of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "PubAlg"
        ]
      }
    },
    "Certificate": {
      "Description": "The content of the certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Certificate"
        ]
      }
    },
    "CommonName": {
      "Description": "The Common Name (CN) field of the certificate.",
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
