The ALIYUN::ESA::HttpsApplicationConfiguration resource is used to add an HTTPS application configuration for a website.

## Syntax

```
{
  "Type": "ALIYUN::ESA::HttpsApplicationConfiguration",
  "Properties": {
    "SiteId": Integer,
    "AltSvcMa": String,
    "AltSvc": String,
    "AltSvcPersist": String,
    "AltSvcClear": String,
    "HstsIncludeSubdomains": String,
    "HttpsForceCode": String,
    "HttpsNoSniDeny": String,
    "Hsts": String,
    "HstsPreload": String,
    "HstsMaxAge": String,
    "HttpsSniWhitelist": String,
    "HttpsSniVerify": String,
    "HttpsForce": String,
    "PaymentType": String,
    "RuleEnable": String,
    "Rule": String,
    "RuleName": String,
    "Sequence": Integer,
    "SiteVersion": Integer
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

SiteId

Integer

Yes

No

The website ID.

None

AltSvcMa

String

No

Yes

The validity period of Alt-Svc.

The unit is seconds. The default value is 86400 seconds.

AltSvc

String

No

Yes

Specifies whether to enable the Alt-Svc feature.

Valid values:

-   on: Enables the feature.
    
-   off: Disables the feature. (Default)
    

AltSvcPersist

String

No

Yes

Specifies whether the Alt-Svc header contains the persist parameter.

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

AltSvcClear

String

No

Yes

Specifies whether the Alt-Svc header contains the clear parameter.

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

HstsIncludeSubdomains

String

No

Yes

Specifies whether to include subdomains in HTTP Strict Transport Security (HSTS).

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

HttpsForceCode

String

No

Yes

The status code for the forced redirect to HTTPS.

Valid values:

-   301
    
-   302
    
-   307
    
-   308
    

HttpsNoSniDeny

String

No

Yes

Specifies whether to deny Transport Layer Security (TLS) handshake requests that do not have a Server Name Indication (SNI).

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

Hsts

String

No

Yes

Specifies whether to enable HSTS.

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

HstsPreload

String

No

Yes

Specifies whether to enable HSTS preload.

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

HstsMaxAge

String

No

Yes

The expiration time of HSTS.

The unit is seconds.

HttpsSniWhitelist

String

No

Yes

Specify the SNI whitelist.

Separate multiple values with spaces.

HttpsSniVerify

String

No

Yes

Specifies whether to enable SNI verification.

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

HttpsForce

String

No

Yes

Specifies whether to force HTTPS.

Valid values:

-   on: Yes.
    
-   off: No. (Default)
    

PaymentType

String

No

No

The payment type.

None

RuleEnable

String

No

Yes

Specifies whether to enable the rule.

This parameter is not required for global configurations. Valid values:

-   on: Enables the rule.
    
-   Off: Disables.
    

Rule

String

No

Yes

The content of the rule.

Use a conditional expression to match user requests. This parameter is not required for global configurations. Scenarios:

-   Match all incoming requests: Set the value to true.
    
-   Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
    

RuleName

String

No

Yes

The name of the rule.

This parameter is not required for global configurations.

Sequence

Integer

No

Yes

The execution priority of the rule.

A smaller value indicates a higher priority.

SiteVersion

Integer

No

No

The version number of the website configuration.

For websites with configuration version management enabled, use this parameter to specify the website version for the configuration. The default value is 0.

## Return values

Fn::GetAtt

-   HstsIncludeSubdomains: Indicates whether subdomains are included in HSTS.
    
-   AltSvcMa: The validity period of Alt-Svc.
    
-   RuleEnable: Indicates whether the rule is enabled.
    
-   HttpsForceCode: The status code for the forced redirect to HTTPS.
    
-   AltSvc: Indicates whether the Alt-Svc feature is enabled.
    
-   HttpsNoSniDeny: Indicates whether to deny TLS handshake requests that do not have an SNI.
    
-   Hsts: Indicates whether HSTS is enabled.
    
-   HstsPreload: Indicates whether HSTS preload is enabled.
    
-   HstsMaxAge: The expiration time of HSTS.
    
-   Sequence: The execution priority of the rule.
    
-   HttpsSniWhitelist: The SNI whitelist.
    
-   AltSvcPersist: Indicates whether the Alt-Svc header contains the persist parameter.
    
-   HttpsSniVerify: Indicates whether SNI verification is enabled.
    
-   AltSvcClear: Indicates whether the Alt-Svc header contains the clear parameter.
    
-   HttpsForce: Indicates whether HTTPS is forced.
    
-   Rule: The content of the rule.
    
-   ConfigId: The configuration ID.
    
-   SiteVersion: The version number of the website configuration.
    
-   ConfigType: The configuration type.
    
-   RuleName: The name of the rule.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SiteId:
    Type: Number
    Description:
      en: The ID of the site. You can obtain the ID by calling the ListSites API.
    Required: true
  RuleEnable:
    Type: String
    Description:
      en: |-
        Specifies whether to enable the rule. This parameter is not required for global configurations. Valid values:
        on: Enables the rule.
        off: Disables the rule.
    AllowedValues:
      - 'on'
      - 'off'
    Required: false
  Rule:
    Type: String
    Description:
      en: |-
        The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for global configurations.
        Examples:
        To match all incoming requests, set the value to true.
        To match a specific request, set the value to a custom expression, such as (http.host eq "video.example.com").
    Required: false
  RuleName:
    Type: String
    Description:
      en: The name of the rule. This parameter is not required for global configurations.
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::HttpsApplicationConfiguration
    Properties:
      SiteId:
        Ref: SiteId
      RuleEnable:
        Ref: RuleEnable
      Rule:
        Ref: Rule
      RuleName:
        Ref: RuleName
Outputs:
  HstsIncludeSubdomains:
    Description: Indicates whether subdomains are included in HSTS.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HstsIncludeSubdomains
  AltSvcMa:
    Description: The validity period of Alt-Svc, in seconds.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AltSvcMa
  RuleEnable:
    Description: Indicates whether the rule is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  HttpsForceCode:
    Description: The status code for the forced redirect to HTTPS.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HttpsForceCode
  AltSvc:
    Description: Indicates whether the Alt-Svc feature is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AltSvc
  HttpsNoSniDeny:
    Description: Indicates whether to deny TLS handshake requests that do not have an SNI.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HttpsNoSniDeny
  Hsts:
    Description: Indicates whether HSTS is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Hsts
  HstsPreload:
    Description: Indicates whether HSTS preload is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HstsPreload
  HstsMaxAge:
    Description: The expiration time of HSTS, in seconds.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HstsMaxAge
  Sequence:
    Description: The execution priority of the rule. A smaller value indicates a higher priority.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Sequence
  HttpsSniWhitelist:
    Description: The SNI whitelist. Multiple values are separated by spaces.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HttpsSniWhitelist
  AltSvcPersist:
    Description: Indicates whether the Alt-Svc header contains the persist parameter.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AltSvcPersist
  HttpsSniVerify:
    Description: Indicates whether SNI verification is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HttpsSniVerify
  AltSvcClear:
    Description: Indicates whether the Alt-Svc header contains the clear parameter.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AltSvcClear
  HttpsForce:
    Description: Indicates whether HTTPS is forced.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HttpsForce
  Rule:
    Description: The content of the rule.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Rule
  ConfigId:
    Description: The configuration ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigId
  SiteVersion:
    Description: The version number of the site configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteVersion
  ConfigType:
    Description: The type of the configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigType
  RuleName:
    Description: The name of the rule.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The ID of the site. You can obtain the ID by calling the ListSites API."
      },
      "Required": true
    },
    "RuleEnable": {
      "Type": "String",
      "Description": {
        "en": "Specifies whether to enable the rule. This parameter is not required for global configurations. Valid values:\non: Enables the rule.\noff: Disables the rule."
      },
      "AllowedValues": [
        "on",
        "off"
      ],
      "Required": false
    },
    "Rule": {
      "Type": "String",
      "Description": {
        "en": "The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for global configurations.\nExamples:\nTo match all incoming requests, set the value to true.\nTo match a specific request, set the value to a custom expression, such as (http.host eq \\\"video.example.com\\\")."
      },
      "Required": false
    },
    "RuleName": {
      "Type": "String",
      "Description": {
        "en": "The name of the rule. This parameter is not required for global configurations."
      },
      "Required": false
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::HttpsApplicationConfiguration",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "RuleEnable": {
          "Ref": "RuleEnable"
        },
        "Rule": {
          "Ref": "Rule"
        },
        "RuleName": {
          "Ref": "RuleName"
        }
      }
    }
  },
  "Outputs": {
    "HstsIncludeSubdomains": {
      "Description": "Indicates whether subdomains are included in HSTS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HstsIncludeSubdomains"
        ]
      }
    },
    "AltSvcMa": {
      "Description": "The validity period of Alt-Svc, in seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AltSvcMa"
        ]
      }
    },
    "RuleEnable": {
      "Description": "Indicates whether the rule is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleEnable"
        ]
      }
    },
    "HttpsForceCode": {
      "Description": "The status code for the forced redirect to HTTPS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HttpsForceCode"
        ]
      }
    },
    "AltSvc": {
      "Description": "Indicates whether the Alt-Svc feature is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AltSvc"
        ]
      }
    },
    "HttpsNoSniDeny": {
      "Description": "Indicates whether to deny TLS handshake requests that do not have an SNI.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HttpsNoSniDeny"
        ]
      }
    },
    "Hsts": {
      "Description": "Indicates whether HSTS is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Hsts"
        ]
      }
    },
    "HstsPreload": {
      "Description": "Indicates whether HSTS preload is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HstsPreload"
        ]
      }
    },
    "HstsMaxAge": {
      "Description": "The expiration time of HSTS, in seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HstsMaxAge"
        ]
      }
    },
    "Sequence": {
      "Description": "The execution priority of the rule. A smaller value indicates a higher priority.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Sequence"
        ]
      }
    },
    "HttpsSniWhitelist": {
      "Description": "The SNI whitelist. Multiple values are separated by spaces.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HttpsSniWhitelist"
        ]
      }
    },
    "AltSvcPersist": {
      "Description": "Indicates whether the Alt-Svc header contains the persist parameter.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AltSvcPersist"
        ]
      }
    },
    "HttpsSniVerify": {
      "Description": "Indicates whether SNI verification is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HttpsSniVerify"
        ]
      }
    },
    "AltSvcClear": {
      "Description": "Indicates whether the Alt-Svc header contains the clear parameter.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AltSvcClear"
        ]
      }
    },
    "HttpsForce": {
      "Description": "Indicates whether HTTPS is forced.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HttpsForce"
        ]
      }
    },
    "Rule": {
      "Description": "The content of the rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Rule"
        ]
      }
    },
    "ConfigId": {
      "Description": "The configuration ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigId"
        ]
      }
    },
    "SiteVersion": {
      "Description": "The version number of the site configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteVersion"
        ]
      }
    },
    "ConfigType": {
      "Description": "The type of the configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigType"
        ]
      }
    },
    "RuleName": {
      "Description": "The name of the rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleName"
        ]
      }
    }
  }
}
                        
```
