The ALIYUN::ESA::HttpsBasicConfiguration type is used to add a basic HTTPS configuration for a website.

## Syntax

```
{
  "Type": "ALIYUN::ESA::HttpsBasicConfiguration",
  "Properties": {
    "SiteId": Integer,
    "Ciphersuite": String,
    "CiphersuiteGroup": String,
    "Https": String,
    "Http3": String,
    "Http2": String,
    "OcspStapling": String,
    "RuleEnable": String,
    "Rule": String,
    "RuleName": String,
    "Sequence": Integer,
    "Tls10": String,
    "Tls11": String,
    "Tls12": String,
    "Tls13": String
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

Ciphersuite

String

No

Yes

The custom cipher suite.

Specifies the encryption algorithms to use when CiphersuiteGroup is set to custom.

CiphersuiteGroup

String

No

Yes

The cipher suite group.

The default value is all. Valid values:

-   all: All cipher suites.
    
-   strict: Strong cipher suites.
    
-   custom: Custom cipher suites.
    

Https

String

No

Yes

Specifies whether to enable HTTPS.

This is enabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

Http3

String

No

Yes

Specifies whether to enable HTTP/3.

This is enabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

Http2

String

No

Yes

Specifies whether to enable HTTP/2.

This setting is enabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

OcspStapling

String

No

Yes

Specifies whether to enable OCSP Stapling.

Disabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

RuleEnable

String

No

Yes

The switch for the rule.

Do not set this parameter for a global configuration. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

Rule

String

No

Yes

The content of the rule.

Use a conditional expression to match user requests. Do not set this parameter for a global configuration. Two scenarios exist:

-   To match all incoming requests, set the value to true.
    
-   To match specific requests, set the value to a custom expression, such as (http.host eq "video.example.com").
    

RuleName

String

No

Yes

The name of the rule.

None

Sequence

Integer

No

Yes

The execution priority of the rule.

A smaller value indicates a higher priority.

Tls10

String

No

Yes

Specifies whether to enable TLS 1.0.

This feature is disabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

Tls11

String

No

Yes

Specifies whether to enable TLS 1.1.

This setting is enabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

Tls12

String

No

Yes

Specifies whether to enable TLS 1.2.

This feature is enabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

Tls13

String

No

Yes

Specifies whether to enable TLS 1.3.

This is enabled by default. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

## Return values

Fn::GetAtt

-   Ciphersuite: The custom cipher suite.
    
-   RuleEnable: Indicates whether the rule is enabled.
    
-   Https: Indicates whether HTTPS is enabled.
    
-   Http3: Indicates whether HTTP/3 is enabled.
    
-   Http2: Indicates whether HTTP/2 is enabled.
    
-   Tls10: Indicates whether TLS 1.0 is enabled.
    
-   Tls11: Indicates whether TLS 1.1 is enabled.
    
-   Sequence: The execution priority of the rule.
    
-   Tls12: Indicates whether TLS 1.2 is enabled.
    
-   Tls13: Indicates whether TLS 1.3 is enabled.
    
-   CiphersuiteGroup: The cipher suite group.
    
-   Rule: The content of the rule.
    
-   ConfigId: The configuration ID.
    
-   ConfigType: The configuration type.
    
-   RuleName: The name of the rule.
    
-   OcspStapling: Indicates whether OCSP Stapling is enabled.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SiteId:
    Type: Number
    Description:
      en: The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
    Required: true
  Https:
    Type: String
    Description:
      en: |-
        Specifies whether to enable HTTPS. HTTPS is enabled by default. Valid values:
        - on: Enabled.
        - off: Disabled.
    AllowedValues:
      - 'on'
      - 'off'
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::HttpsBasicConfiguration
    Properties:
      SiteId:
        Ref: SiteId
      Https:
        Ref: Https
Outputs:
  Ciphersuite:
    Description: The custom cipher suite. This specifies the encryption algorithms to use when CiphersuiteGroup is set to custom.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Ciphersuite
  RuleEnable:
    Description: The switch for the rule. This parameter is not required for a global configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  Https:
    Description: Indicates whether HTTPS is enabled. HTTPS is enabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Https
  Http3:
    Description: Indicates whether HTTP/3 is enabled. HTTP/3 is enabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Http3
  Http2:
    Description: Indicates whether HTTP/2 is enabled. HTTP/2 is enabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Http2
  Tls10:
    Description: Indicates whether TLS 1.0 is enabled. TLS 1.0 is disabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tls10
  Tls11:
    Description: Indicates whether TLS 1.1 is enabled. TLS 1.1 is enabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tls11
  Sequence:
    Description: The execution priority of the rule. A smaller value indicates a higher priority.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Sequence
  Tls12:
    Description: Indicates whether TLS 1.2 is enabled. TLS 1.2 is enabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tls12
  Tls13:
    Description: Indicates whether TLS 1.3 is enabled. TLS 1.3 is enabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tls13
  CiphersuiteGroup:
    Description: The cipher suite group. The default value includes all cipher suites.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CiphersuiteGroup
  Rule:
    Description: The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for a global configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Rule
  ConfigId:
    Description: The ID of the configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigId
  ConfigType:
    Description: The configuration type. You can use this type to query global or rule-based configurations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigType
  RuleName:
    Description: The name of the rule. This parameter is not required for a global configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleName
  OcspStapling:
    Description: Indicates whether OCSP Stapling is enabled. OCSP Stapling is disabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OcspStapling
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID."
      },
      "Required": true
    },
    "Https": {
      "Type": "String",
      "Description": {
        "en": "Specifies whether to enable HTTPS. HTTPS is enabled by default. Valid values:\n- on: Enabled.\n- off: Disabled."
      },
      "AllowedValues": [
        "on",
        "off"
      ],
      "Required": false
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::HttpsBasicConfiguration",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "Https": {
          "Ref": "Https"
        }
      }
    }
  },
  "Outputs": {
    "Ciphersuite": {
      "Description": "The custom cipher suite. This specifies the encryption algorithms to use when CiphersuiteGroup is set to custom.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Ciphersuite"
        ]
      }
    },
    "RuleEnable": {
      "Description": "The switch for the rule. This parameter is not required for a global configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleEnable"
        ]
      }
    },
    "Https": {
      "Description": "Indicates whether HTTPS is enabled. HTTPS is enabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Https"
        ]
      }
    },
    "Http3": {
      "Description": "Indicates whether HTTP/3 is enabled. HTTP/3 is enabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Http3"
        ]
      }
    },
    "Http2": {
      "Description": "Indicates whether HTTP/2 is enabled. HTTP/2 is enabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Http2"
        ]
      }
    },
    "Tls10": {
      "Description": "Indicates whether TLS 1.0 is enabled. TLS 1.0 is disabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tls10"
        ]
      }
    },
    "Tls11": {
      "Description": "Indicates whether TLS 1.1 is enabled. TLS 1.1 is enabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tls11"
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
    "Tls12": {
      "Description": "Indicates whether TLS 1.2 is enabled. TLS 1.2 is enabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tls12"
        ]
      }
    },
    "Tls13": {
      "Description": "Indicates whether TLS 1.3 is enabled. TLS 1.3 is enabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tls13"
        ]
      }
    },
    "CiphersuiteGroup": {
      "Description": "The cipher suite group. The default value includes all cipher suites.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CiphersuiteGroup"
        ]
      }
    },
    "Rule": {
      "Description": "The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for a global configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Rule"
        ]
      }
    },
    "ConfigId": {
      "Description": "The ID of the configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigId"
        ]
      }
    },
    "ConfigType": {
      "Description": "The configuration type. You can use this type to query global or rule-based configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigType"
        ]
      }
    },
    "RuleName": {
      "Description": "The name of the rule. This parameter is not required for a global configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleName"
        ]
      }
    },
    "OcspStapling": {
      "Description": "Indicates whether OCSP Stapling is enabled. OCSP Stapling is disabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OcspStapling"
        ]
      }
    }
  }
}
                        
```
