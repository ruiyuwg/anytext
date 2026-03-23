ALIYUN::ALB::AdditionalCertificateAssociation is used to add additional certificates to a listener.

## Syntax

```
{
  "Type": "ALIYUN::ALB::AdditionalCertificateAssociation",
  "Properties": {
    "Certificates": List,
    "ListenerId": String
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

Certificates

List

Yes

Yes

The additional certificates that you want to add to the listener.

You can add up to 25 certificates to the listener. For more information, see [Certificates property](#f7bfbe45d927w).

ListenerId

String

Yes

No

The listener ID.

You must specify the ID of an HTTPS listener or a Quick UDP Internet Connections (QUIC) listener.

## Certificates syntax

```
"Certificates": [
  {
    "CertificateId": String
  }
]
```

## Certificates property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

CertificateId

String

Yes

No

The certificate ID.

Only server certificates are supported.

## Return values

Fn::GetAtt

ListenerId: the listener ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Certificates:
    Type: Json
    Description: The list of the additional certificates.
    MinLength: 1
    MaxLength: 25
    Default:
      - '***'
  ListenerId:
    Type: String
    Description: The ID of the listener.
    Default: '***'
Resources:
  AdditionalCertificateAssociation:
    Type: ALIYUN::ALB::AdditionalCertificateAssociation
    Properties:
      Certificates:
        Ref: Certificates
      ListenerId:
        Ref: ListenerId
Outputs:
  ListenerId:
    Description: The ID of the listener.
    Value:
      Fn::GetAtt:
        - AdditionalCertificateAssociation
        - ListenerId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Certificates": {
      "Type": "Json",
      "Description": "The list of the additional certificates.",
      "MinLength": 1,
      "MaxLength": 25,
      "Default": ["***"]
    },
    "ListenerId": {
      "Type": "String",
      "Description": "The ID of the listener.",
      "Default": "***"
    }
  },
  "Resources": {
    "AdditionalCertificateAssociation": {
      "Type": "ALIYUN::ALB::AdditionalCertificateAssociation",
      "Properties": {
        "Certificates": {
          "Ref": "Certificates"
        },
        "ListenerId": {
          "Ref": "ListenerId"
        }
      }
    }
  },
  "Outputs": {
    "ListenerId": {
      "Description": "The ID of the listener.",
      "Value": {
        "Fn::GetAtt": [
          "AdditionalCertificateAssociation",
          "ListenerId"
        ]
      }
    }
  }
}
                        
```
