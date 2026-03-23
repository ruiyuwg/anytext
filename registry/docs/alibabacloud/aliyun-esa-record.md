The ALIYUN::ESA::Record type is used to create a DNS record.

## Syntax

```
{
  "Type": "ALIYUN::ESA::Record",
  "Properties": {
    "Data": Map,
    "RecordName": String,
    "RecordType": String,
    "SiteId": Integer,
    "AuthConf": Map,
    "BizName": String,
    "Comment": String,
    "HostPolicy": String,
    "Proxied": Boolean,
    "SourceType": String,
    "Ttl": Integer
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

Data

Map

Yes

Yes

The DNS information of the record.

The content of this field varies based on the record type. For more information, see [Data properties](#37699946b6ows).

RecordName

String

Yes

No

The record name.

None

RecordType

String

Yes

No

The DNS type of the record.

Valid values:

-   A/AAAA
    
-   CNAME
    
-   NS
    
-   MX
    
-   TXT
    
-   CAA
    
-   SRV
    
-   URI
    
-   CAA
    
-   CERT
    
-   SMIMEA
    
-   SSHFP
    
-   TLSA
    

SiteId

Integer

Yes

No

The site ID.

None

AuthConf

Map

No

Yes

The origin authentication information for the CNAME record.

For more information, see [AuthConf properties](#f8b8ac1bfa5r6).

BizName

String

No

Yes

The business scenario for the DNS record.

This parameter is required when proxy acceleration is enabled for the DNS record (Proxied is set to true). This parameter is not required when proxy acceleration is disabled (Proxied is set to false). Valid values:

-   **image\_video**: Images and videos.
    
-   **api**: API.
    
-   **web**: Web pages.
    

Comment

String

No

Yes

The comments for the record.

The maximum length is 100 characters.

HostPolicy

String

No

Yes

The origin fetch HOST policy.

This parameter takes effect when the record type is CNAME. It specifies the policy for including the HOST header during origin fetch. Two modes are available:

-   **follow\_hostname**: Follows the request HOST.
    
-   **follow\_origin\_domain**: Follows the origin domain name.
    

Proxied

Boolean

No

Yes

Specifies whether to enable proxy acceleration for the record.

Only CNAME or A/AAAA records can have proxy acceleration enabled. Valid values:

-   **true**: Enables the proxy.
    
-   **false**: Disables proxy acceleration.
    

SourceType

String

No

Yes

The origin type for the CNAME record.

This parameter is required when you add a CNAME record. Valid values:

-   **OSS**: OSS origin.
    
-   **S3**: S3 origin.
    
-   **LB**: Server Load Balancer origin.
    
-   **OP**: Origin address pool.
    
-   **Domain**: Regular domain name origin.
    

If this parameter is not specified or is left empty, the default value is Domain, which indicates a regular domain name origin.

Ttl

Integer

No

Yes

The TTL of the record.

Unit: seconds. A value of 1 indicates that the TTL is automatic.

## Data syntax

```
"Data": {
  "Fingerprint": String,
  "Usage": Integer,
  "Priority": Integer,
  "Port": Integer,
  "Algorithm": Integer,
  "Flag": Integer,
  "Weight": Integer,
  "MatchingType": Integer,
  "Type": Integer,
  "KeyTag": Integer,
  "Value": String,
  "Tag": String,
  "Certificate": String,
  "Selector": Integer
}
```

## Data properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Algorithm

Integer

No

Yes

The encryption algorithm of the record.

The value ranges from **0 to 255**. This field is required when you add a CERT or SSHFP record.

Certificate

String

No

Yes

The public key certificate information of the record.

This parameter is required when you add a CERT, SMIMEA, or TLSA record.

Fingerprint

String

No

Yes

The public key fingerprint of the record.

This parameter is required when you add an SSHFP record.

Flag

Integer

No

Yes

The flag of the record.

The flag for a CAA record indicates its priority and processing method. The value ranges from **0 to 255**. This parameter is required when you add a CAA record.

KeyTag

Integer

No

Yes

The public key identifier of the record.

The value ranges from **0 to 65535**. This parameter is required when you add a CERT record.

MatchingType

Integer

No

Yes

The algorithm policy used to match or authenticate the certificate.

The value ranges from **0 to 255**. This parameter is required when you add an SMIMEA or TLSA record.

Priority

Integer

No

Yes

The priority of the record.

The value ranges from **0 to 65535**. A smaller value indicates a higher priority. This parameter is required when you add an MX, SRV, or URI record.

Port

Integer

No

Yes

The port of the record.

The value ranges from **0 to 65535**. This parameter is required when you add an SRV record.

Selector

Integer

No

Yes

The type of certificate or public key used by the record.

The value ranges from **0 to 255**. This parameter is required when you add an SMIMEA or TLSA record.

Type

Integer

No

Yes

The certificate type or public key type of the record.

This parameter is required when you add a CERT or SSHFP record.

Tag

String

No

Yes

The tag of the record.

The tag for a CAA record indicates its specific type and purpose. This parameter is required when you add a CAA record. Valid values for Tag:

-   **issue**: Authorizes a specific certification authority (CA) to issue a certificate for the domain name. This is usually followed by the domain name of the CA.
    
-   **issuewild**: Authorizes a specific CA to issue a wildcard certificate (for example, \*.example.com) for the domain name.
    
-   **iodef**: Specifies a URI for receiving reports about CAA record violations.
    

Usage

Integer

No

Yes

The usage identifier of the record.

The value ranges from **0 to 255**. This parameter is required when you add an SMIMEA or TLSA record.

Value

String

No

Yes

The record value or part of its content.

This parameter is required when you add an A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, or URI record. The meaning of this parameter varies based on the record type:

-   **A/AAAA**: The IP address that the record points to. Separate multiple IP addresses with commas (,). At least one IPv4 address is required.
    
-   **CNAME**: The target domain name.
    
-   **NS**: The name server for the domain name.
    
-   **MX**: A valid domain name of the target mail server.
    
-   **TXT**: A valid text string.
    
-   **CAA**: A valid domain name of the certification authority.
    
-   **SRV**: A valid domain name of the target host.
    
-   **URI**: A valid URI string.
    

Weight

Integer

No

Yes

The weight of the record.

The value ranges from **0 to 65535**. This parameter is required when you add an SRV or URI record.

## AuthConf syntax

```
"AuthConf": {
  "SecretKey": String,
  "Version": String,
  "Region": String,
  "AccessKey": String,
  "AuthType": String
}
```

## AuthConf properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

AccessKey

String

No

Yes

The AccessKey of the account to which the origin belongs.

This value is required when the origin type is OSS and the authentication type is private cross-account read, or when the origin type is S3 and the authentication type is private read.

AuthType

String

No

Yes

The origin authentication type.

The supported authentication types vary based on the origin type, which is specified by the SourceType parameter. You must specify the origin authentication type when the origin type is OSS or S3. Valid values:

-   **public**: Public read. Select this value when the origin type is OSS or S3 and the origin allows public read.
    
-   **private**: Private read. Select this value when the origin type is S3 and the origin requires private read.
    
-   **private\_same\_account**: Private same-account read. Select this value when the origin type is OSS, the origin is under the same Alibaba Cloud account, and the origin requires private read.
    
-   **private\_cross\_account**: Private cross-account read. Select this value when the origin type is OSS, the origin is not under the same Alibaba Cloud account, and the origin requires private read.
    

Region

String

No

Yes

The region where the origin is located.

This value is required when the origin type is S3. Obtain the region of the origin from the official S3 website.

SecretKey

String

No

Yes

The SecretKey of the account to which the origin belongs.

This value is required when the origin type is OSS and the authentication type is private cross-account read, or when the origin type is S3 and the authentication type is private read.

Version

String

No

Yes

The version of the signature algorithm.

This parameter is required when the origin type is S3 and the authentication type is private read. The following versions are supported:

-   **v2**
    
-   **v4**
    

If this parameter is not specified, the default value is v4.

## Return values

Fn::GetAtt

-   RecordName: The record name.
    
-   Comment: The comments for the record.
    
-   ModifyTime: The time when the record was last updated. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
    
-   SiteId: The site ID.
    
-   SiteName: The site name.
    
-   SourceType: The origin type of the CNAME record.
    
-   CreateTime: The time when the record was created.
    
-   Data: The DNS data of the record. The content of this field varies based on the record type.
    
-   Ttl: The TTL of the record.
    
-   Proxied: Indicates whether proxy acceleration is enabled for the record.
    
-   RecordType: The DNS type of the record.
    
-   BizName: The business scenario for record acceleration.
    
-   HostPolicy: The back-to-origin HOST policy.
    
-   RecordId: The ID of the record.
    
-   AuthConf: The origin authentication information for the CNAME record.
    
-   RecordCname: The CNAME of the record.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  RecordName:
    Type: String
    Description:
      en: The record name. This parameter specifies a filter condition for the query.
    Required: true
  Proxied:
    Type: Boolean
    Description:
      en: |-
        Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied. Valid values:
        true
        false.
    Required: false
  SiteId:
    Type: Number
    Description:
      en: The website ID.
    Required: true
  RecordType:
    Type: String
    Description:
      en: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
    AllowedValues:
      - A/AAAA
      - CNAME
      - NS
      - MX
      - TXT
      - CAA
      - SRV
      - URI
      - CAA
      - CERT
      - SMIMEA
      - SSHFP
      - TLSA
    Required: true
  Data:
    AssociationPropertyMetadata:
      Parameters:
        Fingerprint:
          Type: String
          Description:
            en: The public key fingerprint of the record. This parameter is required when you add a SSHFP record.
          Required: false
        Usage:
          Type: Number
          Description:
            en: The usage identifier of the record, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
          Required: false
          MinValue: 0
          MaxValue: 255
        Priority:
          Type: Number
          Description:
            en: The priority of the record, specified within the range of 0 to 65,535. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, and URI records.
          Required: false
          MinValue: 0
          MaxValue: 65535
        Port:
          Type: Number
          Description:
            en: The port of the record, specified within the range of 0 to 65,535. This parameter is required when you add an SRV record.
          Required: false
          MinValue: 0
          MaxValue: 65535
        Algorithm:
          Type: Number
          Description:
            en: The encryption algorithm used for the record, specified within the range from 0 to 255. This parameter is required when you add CERT or SSHFP records.
          Required: false
          MinValue: 0
          MaxValue: 255
        Flag:
          Type: Number
          Description:
            en: The flag bit of the record. The Flag for a CAA record indicates its priority and how it is processed, specified within the range of 0 to 255. This parameter is required when you add a CAA record.
          Required: false
          MinValue: 0
          MaxValue: 255
        Weight:
          Type: Number
          Description:
            en: The weight of the record, specified within the range of 0 to 65,535. This parameter is required when you add SRV or URI records.
          Required: false
          MinValue: 0
          MaxValue: 65535
        MatchingType:
          Type: Number
          Description:
            en: The algorithm policy used to match or validate the certificate, specified within the range 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
          Required: false
          MinValue: 0
          MaxValue: 255
        Type:
          Type: Number
          Description:
            en: The certificate type of the record (in CERT records), or the public key type (in SSHFP records). This parameter is required when you add CERT or SSHFP records.
          Required: false
        KeyTag:
          Type: Number
          Description:
            en: The public key identification for the record, specified within the range of 0 to 65,535. This parameter is required when you add a CAA record.
          Required: false
          MinValue: 0
          MaxValue: 65535
        Value:
          Type: String
          Description:
            en: |-
              Record value or part of the record content. This parameter is required when you add A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It has different meanings based on types of records:
              A/AAAA: the IP address(es). Separate IP addresses with commas (,). You must have at least one IPv4 address.
              CNAME: the target domain name.
              NS: the name servers for the domain name.
              MX: a valid domain name of the target mail server.
              TXT: a valid text string.
              CAA: a valid domain name of the certificate authority.
              SRV: a valid domain name of the target host.
              URI: a valid URI string.
          AllowedValues:
            - A/AAAA
            - CNAME
            - NS
            - MX
            - TXT
            - CAA
            - SRV
            - URI
          Required: false
        Tag:
          Type: String
          Description:
            en: |-
              The label of the record. The Tag of a CAA record indicate its specific type and usage. This parameter is required when you add a CAA record. Valid values:
              issue: indicates that a CA is authorized to issue a certificate for the domain name. This is usually followed by the domain name of the CA.
              issuewild: indicates that a CA is authorized to issue a wildcard certificate (such as *.example.com) for the domain name.
              iodef: specifies a URI to receive reports about CAA record violations.
          AllowedValues:
            - issue
            - issuewild
            - iodef
          Required: false
        Certificate:
          Type: String
          Description:
            en: The public key of the certificate. This parameter is required when you add CERT, SMIMEA, or TLSA records.
          Required: false
        Selector:
          Type: Number
          Description:
            en: The type of certificate or public key, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
          Required: false
          MinValue: 0
          MaxValue: 255
    Type: Json
    Description:
      en: The DNS record information. The format of this field varies based on the record type. For more information, see [References] https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
    Required: true
  BizName:
    Type: String
    Description:
      en: |-
        The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
        image_video: video and image.
        api: API.
        web: web page.
    AllowedValues:
      - image_video
      - api
      - web
    Required: false
  Ttl:
    Type: Number
    Description:
      en: 'The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.'
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::Record
    Properties:
      RecordName:
        Ref: RecordName
      Proxied:
        Ref: Proxied
      SiteId:
        Ref: SiteId
      RecordType:
        Ref: RecordType
      Data:
        Ref: Data
      BizName:
        Ref: BizName
      Ttl:
        Ref: Ttl
Outputs:
  RecordName:
    Description: The record name. This parameter specifies a filter condition for the query.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RecordName
  Comment:
    Description: The comment of the record. The maximum length is 100 characters.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Comment
  ModifyTime:
    Description: The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ModifyTime
  SiteId:
    Description: The website ID.
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
  SourceType:
    Description: The origin type for the CNAME record. This parameter is required when you add a CNAME record.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SourceType
  CreateTime:
    Description: The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  Data:
    Description: The DNS record information. The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Data
  Ttl:
    Description: 'The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.'
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Ttl
  Proxied:
    Description: Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Proxied
  RecordType:
    Description: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RecordType
  BizName:
    Description: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - BizName
  HostPolicy:
    Description: The origin host policy. This policy takes effect when the record type is CNAME.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HostPolicy
  RecordId:
    Description: Record Id.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RecordId
  AuthConf:
    Description: The origin authentication information of the CNAME record.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AuthConf
  RecordCname:
    Description: The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RecordCname
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RecordName": {
      "Type": "String",
      "Description": {
        "en": "The record name. This parameter specifies a filter condition for the query."
      },
      "Required": true
    },
    "Proxied": {
      "Type": "Boolean",
      "Description": {
        "en": "Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied. Valid values:\ntrue\nfalse."
      },
      "Required": false
    },
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The website ID."
      },
      "Required": true
    },
    "RecordType": {
      "Type": "String",
      "Description": {
        "en": "The type of the DNS record, such as A/AAAA, CNAME, and TXT."
      },
      "AllowedValues": [
        "A/AAAA",
        "CNAME",
        "NS",
        "MX",
        "TXT",
        "CAA",
        "SRV",
        "URI",
        "CAA",
        "CERT",
        "SMIMEA",
        "SSHFP",
        "TLSA"
      ],
      "Required": true
    },
    "Data": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Fingerprint": {
            "Type": "String",
            "Description": {
              "en": "The public key fingerprint of the record. This parameter is required when you add a SSHFP record."
            },
            "Required": false
          },
          "Usage": {
            "Type": "Number",
            "Description": {
              "en": "The usage identifier of the record, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 255
          },
          "Priority": {
            "Type": "Number",
            "Description": {
              "en": "The priority of the record, specified within the range of 0 to 65,535. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, and URI records."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 65535
          },
          "Port": {
            "Type": "Number",
            "Description": {
              "en": "The port of the record, specified within the range of 0 to 65,535. This parameter is required when you add an SRV record."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 65535
          },
          "Algorithm": {
            "Type": "Number",
            "Description": {
              "en": "The encryption algorithm used for the record, specified within the range from 0 to 255. This parameter is required when you add CERT or SSHFP records."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 255
          },
          "Flag": {
            "Type": "Number",
            "Description": {
              "en": "The flag bit of the record. The Flag for a CAA record indicates its priority and how it is processed, specified within the range of 0 to 255. This parameter is required when you add a CAA record."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 255
          },
          "Weight": {
            "Type": "Number",
            "Description": {
              "en": "The weight of the record, specified within the range of 0 to 65,535. This parameter is required when you add SRV or URI records."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 65535
          },
          "MatchingType": {
            "Type": "Number",
            "Description": {
              "en": "The algorithm policy used to match or validate the certificate, specified within the range 0 to 255. This parameter is required when you add SMIMEA or TLSA records."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 255
          },
          "Type": {
            "Type": "Number",
            "Description": {
              "en": "The certificate type of the record (in CERT records), or the public key type (in SSHFP records). This parameter is required when you add CERT or SSHFP records."
            },
            "Required": false
          },
          "KeyTag": {
            "Type": "Number",
            "Description": {
              "en": "The public key identification for the record, specified within the range of 0 to 65,535. This parameter is required when you add a CAA record."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 65535
          },
          "Value": {
            "Type": "String",
            "Description": {
              "en": "Record value or part of the record content. This parameter is required when you add A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It has different meanings based on types of records:\nA/AAAA: the IP address(es). Separate IP addresses with commas (,). You must have at least one IPv4 address.\nCNAME: the target domain name.\nNS: the name servers for the domain name.\nMX: a valid domain name of the target mail server.\nTXT: a valid text string.\nCAA: a valid domain name of the certificate authority.\nSRV: a valid domain name of the target host.\nURI: a valid URI string."
            },
            "AllowedValues": [
              "A/AAAA",
              "CNAME",
              "NS",
              "MX",
              "TXT",
              "CAA",
              "SRV",
              "URI"
            ],
            "Required": false
          },
          "Tag": {
            "Type": "String",
            "Description": {
              "en": "The label of the record. The Tag of a CAA record indicate its specific type and usage. This parameter is required when you add a CAA record. Valid values:\nissue: indicates that a CA is authorized to issue a certificate for the domain name. This is usually followed by the domain name of the CA.\nissuewild: indicates that a CA is authorized to issue a wildcard certificate (such as *.example.com) for the domain name.\niodef: specifies a URI to receive reports about CAA record violations."
            },
            "AllowedValues": [
              "issue",
              "issuewild",
              "iodef"
            ],
            "Required": false
          },
          "Certificate": {
            "Type": "String",
            "Description": {
              "en": "The public key of the certificate. This parameter is required when you add CERT, SMIMEA, or TLSA records."
            },
            "Required": false
          },
          "Selector": {
            "Type": "Number",
            "Description": {
              "en": "The type of certificate or public key, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records."
            },
            "Required": false,
            "MinValue": 0,
            "MaxValue": 255
          }
        }
      },
      "Type": "Json",
      "Description": {
        "en": "The DNS record information. The format of this field varies based on the record type. For more information, see [References] https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr."
      },
      "Required": true
    },
    "BizName": {
      "Type": "String",
      "Description": {
        "en": "The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:\nimage_video: video and image.\napi: API.\nweb: web page."
      },
      "AllowedValues": [
        "image_video",
        "api",
        "web"
      ],
      "Required": false
    },
    "Ttl": {
      "Type": "Number",
      "Description": {
        "en": "The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system."
      },
      "Required": false
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::Record",
      "Properties": {
        "RecordName": {
          "Ref": "RecordName"
        },
        "Proxied": {
          "Ref": "Proxied"
        },
        "SiteId": {
          "Ref": "SiteId"
        },
        "RecordType": {
          "Ref": "RecordType"
        },
        "Data": {
          "Ref": "Data"
        },
        "BizName": {
          "Ref": "BizName"
        },
        "Ttl": {
          "Ref": "Ttl"
        }
      }
    }
  },
  "Outputs": {
    "RecordName": {
      "Description": "The record name. This parameter specifies a filter condition for the query.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RecordName"
        ]
      }
    },
    "Comment": {
      "Description": "The comment of the record. The maximum length is 100 characters.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Comment"
        ]
      }
    },
    "ModifyTime": {
      "Description": "The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ModifyTime"
        ]
      }
    },
    "SiteId": {
      "Description": "The website ID.",
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
    "SourceType": {
      "Description": "The origin type for the CNAME record. This parameter is required when you add a CNAME record.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SourceType"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "Data": {
      "Description": "The DNS record information. The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Data"
        ]
      }
    },
    "Ttl": {
      "Description": "The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Ttl"
        ]
      }
    },
    "Proxied": {
      "Description": "Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Proxied"
        ]
      }
    },
    "RecordType": {
      "Description": "The type of the DNS record, such as A/AAAA, CNAME, and TXT.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RecordType"
        ]
      }
    },
    "BizName": {
      "Description": "The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "BizName"
        ]
      }
    },
    "HostPolicy": {
      "Description": "The origin host policy. This policy takes effect when the record type is CNAME.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HostPolicy"
        ]
      }
    },
    "RecordId": {
      "Description": "Record Id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RecordId"
        ]
      }
    },
    "AuthConf": {
      "Description": "The origin authentication information of the CNAME record.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AuthConf"
        ]
      }
    },
    "RecordCname": {
      "Description": "The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RecordCname"
        ]
      }
    }
  }
}
                        
```
