ALIYUN::CAS::Order is used to create a certificate order.

## Syntax

```
{
  "Type": "ALIYUN::CAS::Order",
  "Properties": {
    "DomainCnt": Integer,
    "DomainType": String,
    "Service": String,
    "Period": Integer,
    "CertType": String,
    "CertBrand": String
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

CertBrand

String

Yes

No

The brand of the SSL certificate.

Valid values:

-   Rapid: GeoTrust domain validated (DV) certificate
    
-   Globalsign: GlobalSign certificate
    
-   vTrus: vTrus certificate
    
-   Wosign: WoSign certificate
    
-   Digicert: DigiCert certificate
    
-   Digicert pro: DigiCert Pro certificate
    
-   Geotrust: GeoTrust certificate
    
-   CFCA: China Financial Certification Authority (CFCA) certificate
    

CertType

String

Yes

No

The certificate type.

Valid values:

-   DV: DV certificate
    
-   OV: organization validated (OV) certificate
    
-   EV: extended validation (EV) certificate
    

DomainCnt

Integer

No

No

The number of domain names that are bound to the certificate.

Valid values: 1 to 500.

DomainType

String

No

No

The type of domain names.

Valid values:

-   one: single domain name
    
-   multiple: multiple domain names
    
-   all: hybrid domain names
    

Period

Integer

No

No

The usage duration of the certificate.

Unit: year.

Valid values: 1 to 3.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  CertType:
    Type: String
    Description:
      en: 'Certificate type. Valid values: DV, OV, EV.'
    AllowedValues:
      - DV
      - OV
      - EV
    Required: true
  CertBrand:
    Type: String
    Description:
      en: 'Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.'
    AllowedValues:
      - Rapid
      - Globalsign
      - vTrus
      - Wosign
      - Digicert
      - Digicert pro
      - Geotrust
      - CFCA
    Required: true
Resources:
  SslOrder:
    Type: ALIYUN::CAS::Order
    Properties:
      CertType:
        Ref: CertType
      CertBrand:
        Ref: CertBrand
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "CertType": {
      "Type": "String",
      "Description": {
        "en": "Certificate type. Valid values: DV, OV, EV.\n**Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters."
      },
      "AllowedValues": [
        "DV",
        "OV",
        "EV"
      ],
      "Required": false
    },
    "CertBrand": {
      "Type": "String",
      "Description": {
        "en": "Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.\n**Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters."
      },
      "AllowedValues": [
        "Rapid",
        "Globalsign",
        "vTrus",
        "Wosign",
        "Digicert",
        "Digicert pro",
        "Geotrust",
        "CFCA"
      ],
      "Required": false
    }
  },
  "Resources": {
    "SslCertificate": {
      "Type": "ALIYUN::CAS::SslCertificate",
      "Properties": {
        "CertType": {
          "Ref": "CertType"
        },
        "CertBrand": {
          "Ref": "CertBrand"
        }
      }
    }
  },
  "Outputs": {
    "CertificateId": {
      "Description": "The ID of the certificate issued to you.",
      "Value": {
        "Fn::GetAtt": [
          "SslCertificate",
          "CertificateId"
        ]
      }
    },
    "OrderId": {
      "Description": "The ID of the certificate order.",
      "Value": {
        "Fn::GetAtt": [
          "SslCertificate",
          "OrderId"
        ]
      }
    }
  }
}
                        
```
