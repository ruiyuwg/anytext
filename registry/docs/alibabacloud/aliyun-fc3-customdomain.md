ALIYUN::FC3::CustomDomain is used to create a custom domain name in Function Compute 3.0.

## Syntax

```
{
  "Type": "ALIYUN::FC3::CustomDomain",
  "Properties": {
    "AuthConfig": Map,
    "DomainName": String,
    "Protocol": String,
    "CertConfig": Map,
    "RouteConfig": Map,
    "TlsConfig": Map,
    "WafConfig": Map
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

AuthConfig

Map

Yes

Yes

The permission authentication configurations.

For more information, see [AuthConfig properties](#5e67788165iio).

DomainName

String

Yes

No

The custom domain name.

You must specify a custom domain name that has obtained an Internet content provider (ICP) filing in the Alibaba Cloud ICP Filing system, or a custom domain name whose ICP filing information includes Alibaba Cloud as a service provider.

Protocol

String

Yes

Yes

The protocol type supported by the custom domain name.

Valid values:

-   HTTP: Only HTTP is supported.
    
-   HTTPS: Only HTTPS is supported.
    
-   HTTP,HTTPS: Both HTTP and HTTPS are supported.
    

CertConfig

Map

No

Yes

The HTTPS certificate configurations.

For more information, see [CertConfig properties](#6d21e5b2d229k).

RouteConfig

Map

No

Yes

The route table.

The route table maps paths to the function when the function is called by using the custom domain name. For more information, see [RouteConfig property](#0a1a0273760fk).

TlsConfig

Map

No

Yes

The Transport Layer Security (TLS) configurations.

For more information, see [TlsConfig properties](#57719d90b67u4).

WafConfig

Map

No

Yes

The Web Application Firewall (WAF) configurations.

For more information, see [WafConfig property](#aa089a89d54h8).

## CertConfig syntax

```
"CertConfig": {
  "PrivateKey": String,
  "CertName": String,
  "Certificate": String
}
```

## CertConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

CertName

String

Yes

Yes

The name of the certificate.

None.

Certificate

String

Yes

Yes

The certificate in the Privacy Enhanced Mail (PEM) format.

None.

PrivateKey

String

Yes

Yes

The private key in the PEM format.

None.

## TlsConfig syntax

```
"TlsConfig": {
  "MinVersion": String,
  "MaxVersion": String,
  "CipherSuites": List
}
```

## TlsConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

CipherSuites

List

Yes

Yes

The TLS cipher suites.

You can configure up to 100 cipher suites.

MinVersion

String

Yes

Yes

The minimum TLS version.

Valid values:

-   TLSv1.3
    
-   TLSv1.2
    

MaxVersion

String

No

Yes

The maximum TLS version.

Valid values:

-   TLSv1.3
    
-   TLSv1.2
    

## RouteConfig syntax

```
"RouteConfig": {
  "Routes": List
}
```

## RouteConfig property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Routes

List

Yes

Yes

The route configurations.

You can specify up to 100 sets of route configurations. For more information, see [Routes properties](#99ffa852ea8m6).

## Routes syntax

```
"Routes": [
  {
    "Path": String,
    "FunctionName": String,
    "Qualifier": String,
    "RewriteConfig": Map,
    "Methods": List
  }
]
```

## Routes properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

FunctionName

String

Yes

Yes

The name of the function.

None.

Path

String

Yes

Yes

The route matching rule.

None.

Qualifier

String

Yes

Yes

The version or alias.

None.

Methods

List

No

No

The supported methods.

Valid values:

-   HEAD
    
-   GET
    
-   POST
    
-   PUT
    
-   DELETE
    
-   PATCH
    
-   OPTIONS
    

RewriteConfig

Map

No

No

The rewrite configurations.

For more information, see [RewriteConfig properties](#8485edbe75djn).

## RewriteConfig syntax

```
"RewriteConfig": {
  "WildcardRules": List,
  "RegexRules": List,
  "EqualRules": List
}
```

## RewriteConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EqualRules

List

No

Yes

The exact matching rules.

You can configure up to 100 exact matching rules. For more information, see [EqualRules properties](#f4ee71fd300b8).

RegexRules

List

No

Yes

The regex matching rules.

You can configure up to 100 regex matching rules. For more information, see [RegexRules properties](#dc8b545c60d8e).

WildcardRules

List

No

Yes

The wildcard matching rules.

You can configure up to 100 wildcard matching rules. For more information, see [WildcardRules properties](#9d86153c7auoy).

## WildcardRules syntax

```
"WildcardRules": [
  {
    "Replacement": String,
    "Match": String
  }
]
```

## WildcardRules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Match

String

Yes

Yes

The matching rule.

None.

Replacement

String

Yes

Yes

The replacement rule.

None.

## RegexRules syntax

```
"RegexRules": [
  {
    "Replacement": String,
    "Match": String
  }
]
```

## RegexRules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Match

String

Yes

Yes

The matching rule.

None.

Replacement

String

Yes

Yes

The replacement rule.

None.

## EqualRules syntax

```
"EqualRules": [
  {
    "Replacement": String,
    "Match": String
  }
]
```

## EqualRules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Match

String

Yes

No

The matching rule.

None.

Replacement

String

Yes

No

The replacement rule.

None.

## AuthConfig syntax

```
"AuthConfig": {
  "AuthInfo": String,
  "AuthType": String
}
```

## AuthConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AuthType

String

Yes

Yes

The authentication type.

Valid values:

-   anonymous
    
-   function
    
-   jwt
    

AuthInfo

String

No

Yes

The authentication information.

None.

## WafConfig syntax

```
"WafConfig": {
  "EnableWAF": Boolean
}
```

## WafConfig property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EnableWAF

Boolean

No

Yes

Specifies whether to enable WAF protection.

None.

## Return values

Fn::GetAtt

DomainName: the custom domain name.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DomainName:
    Type: String
    Description:
      en: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
    Required: true
  AuthConfig:
    AssociationPropertyMetadata:
      Parameters:
        AuthInfo:
          Type: String
          Description:
            en: Authentication information.
          Required: false
        AuthType:
          Type: String
          Description:
            en: Authentication type.
          AllowedValues:
            - anonymous
            - function
            - jwt
          Required: true
    Type: Json
    Description:
      en: Permission authentication configuration.
    Required: true
  Protocol:
    Type: String
    Description:
      en: |-
        Protocol types supported by the domain name. Valid values:
        - HTTP: Only HTTP protocol is supported. 
        - HTTPS: HTTPS only is supported. 
        - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
    AllowedValues:
      - HTTP
      - HTTPS
      - HTTP,HTTPS
    Required: true
Resources:
  CustomDomain:
    Type: ALIYUN::FC3::CustomDomain
    Properties:
      DomainName:
        Ref: DomainName
      AuthConfig:
        Ref: AuthConfig
      Protocol:
        Ref: Protocol
Outputs:
  DomainName:
    Description: The domain name
    Value:
      Fn::GetAtt:
        - CustomDomain
        - DomainName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DomainName": {
      "Type": "String",
      "Description": {
        "en": "Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record."
      },
      "Required": true
    },
    "AuthConfig": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "AuthInfo": {
            "Type": "String",
            "Description": {
              "en": "Authentication information."
            },
            "Required": false
          },
          "AuthType": {
            "Type": "String",
            "Description": {
              "en": "Authentication type."
            },
            "AllowedValues": [
              "anonymous",
              "function",
              "jwt"
            ],
            "Required": true
          }
        }
      },
      "Type": "Json",
      "Description": {
        "en": "Permission authentication configuration."
      },
      "Required": true
    },
    "Protocol": {
      "Type": "String",
      "Description": {
        "en": "Protocol types supported by the domain name. Valid values:\n- HTTP: Only HTTP protocol is supported. \n- HTTPS: HTTPS only is supported. \n- HTTP,HTTPS: Supports HTTP and HTTPS protocols."
      },
      "AllowedValues": [
        "HTTP",
        "HTTPS",
        "HTTP,HTTPS"
      ],
      "Required": true
    }
  },
  "Resources": {
    "CustomDomain": {
      "Type": "ALIYUN::FC3::CustomDomain",
      "Properties": {
        "DomainName": {
          "Ref": "DomainName"
        },
        "AuthConfig": {
          "Ref": "AuthConfig"
        },
        "Protocol": {
          "Ref": "Protocol"
        }
      }
    }
  },
  "Outputs": {
    "DomainName": {
      "Description": "The domain name",
      "Value": {
        "Fn::GetAtt": [
          "CustomDomain",
          "DomainName"
        ]
      }
    }
  }
}
                        
```
