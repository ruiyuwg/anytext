ALIYUN::CAS::SslCertificate is used to create an SSL certificate.

## Syntax

```
{
  "Type": "ALIYUN::CAS::SslCertificate",
  "Properties": {
    "Domains": List,
    "CompanyName": String,
    "DomainType": String,
    "Email": String,
    "Csr": String,
    "Username": String,
    "ProductCode": String,
    "Phone": String,
    "CertType": String,
    "CertBrand": String,
    "ValidateType": String
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

No

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

No

No

The certificate type.

Valid values:

-   DV: DV certificate
    
-   OV: organization validated (OV) certificate
    
-   EV: extended validation (EV) certificate
    

CompanyName

String

No

No

The name of the company that applies for the certificate.

None.

Csr

String

No

No

The content of the certificate signing request (CSR) file that is manually generated for the domain name by using OpenSSL or Keytool.

The key algorithm in the CSR file must be Rivest-Shamir-Adleman (RSA) or elliptic-curve cryptography (ECC), and the key of the RSA algorithm must be at least 2,048 characters in length. For more information about how to create a CSR file, see [Manage CSRs](/help/en/ssl-certificate/manage-csrs). If you leave this property empty, Certificate Management Service automatically creates a CSR file.

A CSR file contains the information about your server and company. When you apply for an SSL certificate, you must submit the CSR file to the certificate authority (CA). The CA signs the CSR file by using the private key of the root certificate and generates a public key file to issue your certificate.

Domains

List

No

No

The domain names that you want to bind to the certificate.

You can specify up to five domain names.

DomainType

String

No

No

The domain name type.

Valid values:

-   one: single domain name
    
-   multiple: multiple domain names
    
-   all: hybrid domain names
    

Email

String

No

No

The email address of the applicant.

None.

Phone

String

No

No

The phone number of the applicant.

None.

ProductCode

String

No

No

The specifications of the certificate that you want to apply for.

Valid values:

-   **digicert-free-1-free** (default): individual test certificate of the Free type in a validity period of three months, available only on the China site (aliyun.com)
    
-   **symantec-free-1-free**: individual test certificate of the Pro type in a validity period of 12 months, available only on the China site (aliyun.com)
    
-   **symantec-dv-1-starter**: DigiCert wildcard DV certificate
    
-   **symantec-ov-1-personal**: DigiCert single-domain OV certificate
    
-   **symantec-ov-w-personal**: DigiCert wildcard OV certificate
    
-   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate
    
-   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate
    
-   **geotrust-ov-1-personal**: GeoTrust single-domain OV certificate
    
-   **geotrust-ov-w-personal**: GeoTrust wildcard OV certificate
    
-   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate
    
-   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate
    
-   **globalsign-ov-1-personal**: GlobalSign single-domain OV certificate
    
-   **globalsign-ov-w-advanced**: GlobalSign wildcard OV certificate
    
-   **cfca-ov-1-personal**: CFCA single-domain OV certificate, available only on the China site (aliyun.com)
    
-   **cfca-ev-w-advanced**: CFCA wildcard OV certificate, available only on the China site (aliyun.com)
    

Username

String

No

No

The applicant name.

None.

ValidateType

String

No

No

The verification method of the domain name ownership.

Valid values:

-   **DNS**: Domain Name System (DNS) verification. If you use this method, you must add a TXT record to the DNS records of the domain name in the management platform of the domain name. To verify the domain name ownership, you must have the management permissions on domain name resolution.
    
-   **FILE**: file verification. If you use this method, you must create a specified file on the DNS server. To verify the domain name ownership, you must have the administrator permissions on the DNS server.
    

## Return values

Fn::GetAtt

-   CertificateId: the certificate ID.
    
-   OrderId: the ID of the order that is used to create the certificate.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Domains:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: |-
        The domain to bind the certificate to. The specific requirements are as follows:
        - Supports single or wildcard domains (e.g., *.aliyundoc.com).
        - Multiple domains are supported. You can set up to 5 domains.
        - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
        **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
    Required: false
    MinLength: 1
    MaxLength: 5
  DomainType:
    Type: String
    Description:
      en: |-
        Domain type. Valid values: one, all, multiple.
        **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
    AllowedValues:
      - all
      - one
      - multiple
    Required: false
  CertType:
    Type: String
    Description:
      en: |-
        Certificate type. Valid values: DV, OV, EV.
        **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
    AllowedValues:
      - DV
      - OV
      - EV
    Required: false
  CertBrand:
    Type: String
    Description:
      en: |-
        Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
    AllowedValues:
      - Rapid
      - Globalsign
      - vTrus
      - Wosign
      - Digicert
      - Digicert pro
      - Geotrust
      - CFCA
    Required: false
Resources:
  SslCertificate:
    Type: ALIYUN::CAS::SslCertificate
    Properties:
      Domains:
        Ref: Domains
      DomainType:
        Ref: DomainType
      CertType:
        Ref: CertType
      CertBrand:
        Ref: CertBrand
Outputs:
  CertificateId:
    Description: The ID of the certificate issued to you.
    Value:
      Fn::GetAtt:
        - SslCertificate
        - CertificateId
  OrderId:
    Description: The ID of the certificate order.
    Value:
      Fn::GetAtt:
        - SslCertificate
        - OrderId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Domains": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The domain to bind the certificate to. The specific requirements are as follows:\n- Supports single or wildcard domains (e.g., *.aliyundoc.com).\n- Multiple domains are supported. You can set up to 5 domains.\n- If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.\n**Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to."
      },
      "Required": false,
      "MinLength": 1,
      "MaxLength": 5
    },
    "DomainType": {
      "Type": "String",
      "Description": {
        "en": "Domain type. Valid values: one, all, multiple.\n**Note:** This parameter must be specified along with or without the CertType and CertBrand parameters."
      },
      "AllowedValues": [
        "all",
        "one",
        "multiple"
      ],
      "Required": false
    },
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
        "Domains": {
          "Ref": "Domains"
        },
        "DomainType": {
          "Ref": "DomainType"
        },
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
