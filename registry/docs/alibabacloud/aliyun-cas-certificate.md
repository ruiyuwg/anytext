ALIYUN::CAS::Certificate is used to add a certificate.

## Syntax

```
{
  "Type": "ALIYUN::CAS::Certificate",
  "Properties": {
    "Lang": String,
    "Cert": String,
    "SourceIp": String,
    "Name": String,
    "Key": String
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

Cert

String

Yes

No

The content of the certificate. You must encode the property value in the Privacy Enhanced Mail (PEM) format.

None.

Key

String

Yes

No

The private key of the certificate. You must encode the property value in the PEM format.

None.

Name

String

Yes

No

The custom name of the certificate. The name must be unique within an account.

None.

Lang

String

No

No

The language of the content in the request and response.

None.

SourceIp

String

No

No

The source IP address of the request.

None.

## Return values

Fn::GetAtt

-   CertId: the certificate ID.
    

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Certificate:
    Type: ALIYUN::CAS::Certificate
    Properties:
      Lang:
        Ref: Lang
      Cert:
        Ref: Cert
      SourceIp:
        Ref: SourceIp
      Name:
        Ref: Name
      Key:
        Ref: Key
Parameters:
  Lang:
    Type: String
    Description: Specifies the language type for requesting and receiving messages.
  Cert:
    Type: String
    Description: Specify the content of the certificate. To use the PEM encoding format.
  SourceIp:
    Type: String
    Description: Specifies the source IP address of the request.
  Name:
    Type: String
    Description: Custom certificate name. The certificate name under a user cannot be duplicated.
  Key:
    Type: String
    Description: Specify the certificate private key content. To use the PEM encoding format.
Outputs:
  CertId:
    Description: Certificate ID.
    Value:
      Fn::GetAtt:
        - Certificate
        - CertId
```

## JSON format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Certificate": {
      "Type": "ALIYUN::CAS::Certificate",
      "Properties": {
        "Lang": {
          "Ref": "Lang"
        },
        "Cert": {
          "Ref": "Cert"
        },
        "SourceIp": {
          "Ref": "SourceIp"
        },
        "Name": {
          "Ref": "Name"
        },
        "Key": {
          "Ref": "Key"
        }
      }
    }
  },
  "Parameters": {
    "Lang": {
      "Type": "String",
      "Description": "Specifies the language type for requesting and receiving messages."
    },
    "Cert": {
      "Type": "String",
      "Description": "Specify the content of the certificate. To use the PEM encoding format."
    },
    "SourceIp": {
      "Type": "String",
      "Description": "Specifies the source IP address of the request."
    },
    "Name": {
      "Type": "String",
      "Description": "Custom certificate name. The certificate name under a user cannot be duplicated."
    },
    "Key": {
      "Type": "String",
      "Description": "Specify the certificate private key content. To use the PEM encoding format."
    }
  },
  "Outputs": {
    "CertId": {
      "Description": "Certificate ID.",
      "Value": {
        "Fn::GetAtt": [
          "Certificate",
          "CertId"
        ]
      }
    }
  }
}
```
