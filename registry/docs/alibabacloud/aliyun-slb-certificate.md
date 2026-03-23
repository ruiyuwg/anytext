ALIYUN::SLB::Certificate is used to upload a certificate to a Server Load Balancer (SLB) instance. Server certificates and certificate authority (CA) certificates are supported.

**Important**

-   If you set CertificateType to CA, you can upload only one CA certificate at a time.
    
-   If you set CertificateType to Server, you can upload only one server certificate and the relevant private key at a time.
    

## Syntax

```
{
  "Type": "ALIYUN::SLB::Certificate",
  "Properties": {
    "CertificateName": String,
    "Certificate": String,
    "AliCloudCertificateName": String,
    "PrivateKey": String,
    "ResourceGroupId": String,
    "CertificateType": String,
    "AliCloudCertificateId": String,
    "AliCloudCertificateRegionId": String,
    "Tags": List
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

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

CertificateName

String

No

Yes

The name of the certificate.

None.

Certificate

String

No

No

The certificate that you want to upload.

None.

AliCloudCertificateName

String

No

No

The name of the certificate that is provided by Certificate Management Service.

None.

PrivateKey

String

No

No

The private key that you want to upload.

None.

AliCloudCertificateId

String

No

No

The ID of the certificate that is provided by Certificate Management Service.

This property must be specified when you use a certificate provided by Certificate Management Service.

AliCloudCertificateRegionId

String

No

No

The region ID of the certificate that is issued by Alibaba Cloud.

**Note**

You must specify this property when you use a certificate that is issued by Alibaba Cloud.

CertificateType

String

No

No

The type of the certificate.

Valid values:

-   Server
    
-   CA
    

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-z3s-r27-j2u).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The key of the tag.

The key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The value can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   CertificateId: the ID of the certificate.
    
-   Fingerprint: the fingerprint of the certificate.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
 AliCloudCertificateId:
  Description: The ID of the Alibaba Cloud certificate.
  Type: String
 AliCloudCertificateName:
  Description: The name of the Alibaba Cloud certificate.
  Type: String
 Certificate:
  Description: The content of the certificate public key.
  Type: String
 CertificateName:
  Description: The name of the certificate.
  Type: String
 CertificateType:
  AllowedValues:
  - Server
  - CA
  Default: Server
  Description: The type of the certificate.
  Type: String
 PrivateKey:
  Description: The private key.
  Type: String
 ResourceGroupId:
  Description: Resource group id.
  Type: String
 Tags:
  Description: Tags to attach to instance. Max support 20 tags to add during create
   instance. Each tag with two properties Key and Value, and Key is required.
  MaxLength: 20
  Type: Json
Resources:
 SLBCertificate:
  Properties:
   AliCloudCertificateId:
    Ref: AliCloudCertificateId
   AliCloudCertificateName:
    Ref: AliCloudCertificateName
   Certificate:
    Ref: Certificate
   CertificateName:
    Ref: CertificateName
   CertificateType:
    Ref: CertificateType
   PrivateKey:
    Ref: PrivateKey
   ResourceGroupId:
    Ref: ResourceGroupId
   Tags:
    Ref: Tags
  Type: ALIYUN::SLB::Certificate
Outputs:
 CertificateId:
  Description: The ID of the certificate.
  Value:
   Fn::GetAtt:
   - SLBCertificate
   - CertificateId
 Fingerprint:
  Description: The fingerprint of the certificate.
  Value:
   Fn::GetAtt:
   - SLBCertificate
   - Fingerprint
```

JSON

```
{
 "ROSTemplateFormatVersion": "2015-09-01",
 "Parameters": {
  "CertificateType": {
   "Type": "String",
   "Description": "The type of the certificate.",
   "AllowedValues": [
    "Server",
    "CA"
   ],
   "Default": "Server"
  },
  "AliCloudCertificateName": {
   "Type": "String",
   "Description": "The name of the Alibaba Cloud certificate."
  },
  "PrivateKey": {
   "Type": "String",
   "Description": "The private key."
  },
  "ResourceGroupId": {
   "Type": "String",
   "Description": "Resource group id."
  },
  "CertificateName": {
   "Type": "String",
   "Description": "The name of the certificate."
  },
  "Tags": {
   "Type": "Json",
   "Description": "Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.",
   "MaxLength": 20
  },
  "Certificate": {
   "Type": "String",
   "Description": "The content of the certificate public key."
  },
  "AliCloudCertificateId": {
   "Type": "String",
   "Description": "The ID of the Alibaba Cloud certificate."
  }
 },
 "Resources": {
  "SLBCertificate": {
   "Type": "ALIYUN::SLB::Certificate",
   "Properties": {
    "CertificateType": {
     "Ref": "CertificateType"
    },
    "AliCloudCertificateName": {
     "Ref": "AliCloudCertificateName"
    },
    "PrivateKey": {
     "Ref": "PrivateKey"
    },
    "ResourceGroupId": {
     "Ref": "ResourceGroupId"
    },
    "CertificateName": {
     "Ref": "CertificateName"
    },
    "Tags": {
     "Ref": "Tags"
    },
    "Certificate": {
     "Ref": "Certificate"
    },
    "AliCloudCertificateId": {
     "Ref": "AliCloudCertificateId"
    }
   }
  }
 },
 "Outputs": {
  "Fingerprint": {
   "Description": "The fingerprint of the certificate.",
   "Value": {
    "Fn::GetAtt": [
     "SLBCertificate",
     "Fingerprint"
    ]
   }
  },
  "CertificateId": {
   "Description": "The ID of the certificate.",
   "Value": {
    "Fn::GetAtt": [
     "SLBCertificate",
     "CertificateId"
    ]
   }
  }
 }
}
```
