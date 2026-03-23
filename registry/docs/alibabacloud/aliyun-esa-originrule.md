The ALIYUN::ESA::OriginRule type is used to add origin rules to a website.

## Syntax

```
{
  "Type": "ALIYUN::ESA::OriginRule",
  "Properties": {
    "SiteId": Integer,
    "DnsRecord": String,
    "Follow302MaxTries": Integer,
    "Follow302RetainArgs": String,
    "Follow302RetainHeader": String,
    "Follow302TargetHost": String,
    "Follow302Enable": String,
    "OriginHttpsPort": Integer,
    "OriginScheme": String,
    "OriginReadTimeout": Integer,
    "OriginHost": String,
    "OriginHttpPort": Integer,
    "OriginMtls": String,
    "OriginSni": String,
    "OriginVerify": String,
    "RuleEnable": String,
    "Range": String,
    "RangeChunkSize": String,
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

DnsRecord

String

No

Yes

The DNS record used to overwrite the origin request.

None

Follow302MaxTries

Integer

No

Yes

The maximum number of 302 redirects to follow.

Valid values: 1 to 5.

Follow302RetainArgs

String

No

Yes

Specifies whether to retain the original request parameters.

Valid values:

-   on: Enables the feature.
    
-   off: Disables the feature.
    

Follow302RetainHeader

String

No

Yes

Specifies whether to retain the original request headers.

Valid values:

-   on: Enables the feature.
    
-   off: Disables the feature.
    

Follow302TargetHost

String

No

Yes

The origin host to use after a 302 redirect.

None

Follow302Enable

String

No

Yes

Specifies whether to follow 302 redirects for origin rules requests.

Valid values:

-   Enabled.
    
-   off: Disables the feature.
    

OriginHttpsPort

Integer

No

Yes

The origin server port to access for origin rules requests over HTTPS.

None

OriginScheme

String

No

Yes

The protocol for origin rules requests.

Valid values:

-   http: Uses HTTP for origin rules requests.
    
-   https: Uses HTTPS for origin rules requests.
    
-   follow: Uses the same protocol as the client request.
    

OriginReadTimeout

Integer

No

Yes

The origin read timeout in seconds.

None

OriginHost

String

No

Yes

The HOST header to include in the back-to-origin request.

None

OriginHttpPort

Integer

No

Yes

The origin server port to access for back-to-origin requests over HTTP.

None

OriginMtls

String

No

Yes

Specifies whether to enable mutual Transport Layer Security (mTLS).

Valid values:

-   on: Enables the feature.
    
-   off: Disables the feature.
    

OriginSni

String

No

Yes

The Server Name Indication (SNI) to include in the back-to-origin request.

None

OriginVerify

String

No

Yes

Specifies whether to verify the origin server certificate.

Valid values:

-   on: The state is On.
    
-   off: Indicates the shutdown state.
    

RuleEnable

String

No

Yes

Specifies whether to enable the rule.

This parameter is not required for global configurations. Valid values:

-   on
    
-   off
    

Range

String

No

Yes

Specifies whether to use range requests to download files from the origin.

Valid values:

-   on: Enables the feature.
    
-   off: Disables the feature.
    
-   force: Forces the feature.
    

RangeChunkSize

String

No

Yes

The size of each range shard.

Valid values:

-   512 KB
    
-   1 MB
    
-   2 MB
    
-   4 MB
    

Rule

String

No

Yes

The content of the rule.

Use a conditional expression to match user requests. This parameter is not required for global configurations. Two scenarios exist:

-   To match all incoming requests, set the value to true.
    
-   To match specific requests, set the value to a custom expression, such as (http.host eq "video.example.com").
    

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

None

## Return values

Fn::GetAtt

-   Follow302MaxTries: The maximum number of 302 redirects to follow.
    
-   RuleEnable: Whether the rule is enabled.
    
-   OriginHttpsPort: The origin server port for origin rules requests over HTTPS.
    
-   Follow302RetainArgs: Whether to retain the original request parameters.
    
-   Follow302RetainHeader: Whether to retain the original request headers.
    
-   OriginScheme: The protocol for origin rules requests.
    
-   Sequence: The execution priority of the rule.
    
-   Range: Whether to use range-based sharding to download files from the origin.
    
-   RangeChunkSize: The size of each range shard.
    
-   OriginReadTimeout: The origin read timeout in seconds.
    
-   OriginHost: The HOST header in the origin rules request.
    
-   OriginHttpPort: The origin server port for origin rules requests over HTTP.
    
-   OriginMtls: Whether mutual TLS (mTLS) is enabled.
    
-   Follow302TargetHost: The origin host to use after a 302 redirect.
    
-   OriginSni: The Server Name Indication (SNI) in the origin rules request.
    
-   Rule: The content of the rule.
    
-   ConfigId: The configuration ID.
    
-   Follow302Enable: Whether to follow 302 redirects for origin rules requests.
    
-   DnsRecord: The DNS record used to overwrite the origin request.
    
-   ConfigType: The configuration type.
    
-   SiteVersion: The version number of the website configuration.
    
-   RuleName: The name of the rule.
    
-   OriginVerify: Whether to verify the origin server certificate.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SiteId:
    Type: Number
    Description:
      en: The site ID.
    Required: true
  RuleEnable:
    Type: String
    Description:
      en: |-
        Specifies whether to enable the rule. This parameter is not required for global configurations. Valid values:
        - `on`: Enables the rule.
        - `off`: Disables the rule.
    AllowedValues:
      - 'on'
      - 'off'
    Required: false
  Rule:
    Type: String
    Description:
      en: |-
        The content of the rule. Use a conditional expression to match user requests. This parameter is not required for global configurations. Scenarios:
        - To match all incoming requests, set the value to true.
        - To match a specific request, set the value to a custom expression, such as (http.host eq "video.example.com").
    Required: false
  RuleName:
    Type: String
    Description:
      en: The name of the rule. This parameter is not required for global configurations.
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::OriginRule
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
  Follow302MaxTries:
    Description: The maximum number of 302 redirects to follow. Valid values: 1 to 5.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Follow302MaxTries
  RuleEnable:
    Description: Specifies whether the rule is enabled. This parameter is not required for global configurations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  OriginHttpsPort:
    Description: The origin server port for back-to-origin requests over HTTPS.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginHttpsPort
  Follow302RetainArgs:
    Description: Specifies whether to retain the original request parameters.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Follow302RetainArgs
  Follow302RetainHeader:
    Description: Specifies whether to retain the original request headers.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Follow302RetainHeader
  OriginScheme:
    Description: The protocol for origin rules requests.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginScheme
  Sequence:
    Description: The execution priority of the rule. A smaller value indicates a higher priority.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Sequence
  Range:
    Description: Specifies whether to use range-based sharding to download files from the origin.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Range
  RangeChunkSize:
    Description: The size of each range shard.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RangeChunkSize
  OriginReadTimeout:
    Description: The origin read timeout in seconds.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginReadTimeout
  OriginHost:
    Description: The HOST header in the origin rules request.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginHost
  OriginHttpPort:
    Description: The origin server port for origin rules requests over HTTP.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginHttpPort
  OriginMtls:
    Description: Specifies whether mTLS is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginMtls
  Follow302TargetHost:
    Description: The origin host to use after a 302 redirect.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Follow302TargetHost
  OriginSni:
    Description: The SNI in the origin rules request.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginSni
  Rule:
    Description: The content of the rule. Use a conditional expression to match user requests. This parameter is not required for global configurations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Rule
  ConfigId:
    Description: The ID of the back-to-origin rule configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigId
  Follow302Enable:
    Description: Specifies whether to follow 302 redirects for back-to-origin requests.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Follow302Enable
  DnsRecord:
    Description: The DNS record used to overwrite the origin request.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - DnsRecord
  ConfigType:
    Description: The configuration type. Use this parameter to identify whether the configuration is global or a rule.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigType
  SiteVersion:
    Description: The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the active configuration version. The default is version 0.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteVersion
  RuleName:
    Description: The name of the rule. This parameter is not required for global configurations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleName
  OriginVerify:
    Description: Specifies whether to verify the origin server certificate.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - OriginVerify
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The site ID."
      },
      "Required": true
    },
    "RuleEnable": {
      "Type": "String",
      "Description": {
        "en": "Specifies whether to enable the rule. This parameter is not required for global configurations. Valid values:\n- `on`: Enables the rule.\n- `off`: Disables the rule."
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
        "en": "The content of the rule. Use a conditional expression to match user requests. This parameter is not required for global configurations. Scenarios:\n- To match all incoming requests, set the value to true.\n- To match a specific request, set the value to a custom expression, such as (http.host eq \\\"video.example.com\\\")."
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
      "Type": "ALIYUN::ESA::OriginRule",
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
    "Follow302MaxTries": {
      "Description": "The maximum number of 302 redirects to follow. Valid values: 1 to 5.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Follow302MaxTries"
        ]
      }
    },
    "RuleEnable": {
      "Description": "Specifies whether the rule is enabled. This parameter is not required for global configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleEnable"
        ]
      }
    },
    "OriginHttpsPort": {
      "Description": "The origin server port for back-to-origin requests over HTTPS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginHttpsPort"
        ]
      }
    },
    "Follow302RetainArgs": {
      "Description": "Specifies whether to retain the original request parameters.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Follow302RetainArgs"
        ]
      }
    },
    "Follow302RetainHeader": {
      "Description": "Specifies whether to retain the original request headers.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Follow302RetainHeader"
        ]
      }
    },
    "OriginScheme": {
      "Description": "The protocol for origin rules requests.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginScheme"
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
    "Range": {
      "Description": "Specifies whether to use range-based sharding to download files from the origin.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Range"
        ]
      }
    },
    "RangeChunkSize": {
      "Description": "The size of each range shard.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RangeChunkSize"
        ]
      }
    },
    "OriginReadTimeout": {
      "Description": "The origin read timeout in seconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginReadTimeout"
        ]
      }
    },
    "OriginHost": {
      "Description": "The HOST header in the back-to-origin request.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginHost"
        ]
      }
    },
    "OriginHttpPort": {
      "Description": "The origin server port for origin rules requests over HTTP.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginHttpPort"
        ]
      }
    },
    "OriginMtls": {
      "Description": "Specifies whether mTLS is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginMtls"
        ]
      }
    },
    "Follow302TargetHost": {
      "Description": "The origin host to use after a 302 redirect.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Follow302TargetHost"
        ]
      }
    },
    "OriginSni": {
      "Description": "The SNI in the back-to-origin request.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginSni"
        ]
      }
    },
    "Rule": {
      "Description": "The content of the rule. Use a conditional expression to match user requests. This parameter is not required for global configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Rule"
        ]
      }
    },
    "ConfigId": {
      "Description": "The ID of the origin rules rule configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigId"
        ]
      }
    },
    "Follow302Enable": {
      "Description": "Specifies whether to follow 302 redirects for origin rules requests.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Follow302Enable"
        ]
      }
    },
    "DnsRecord": {
      "Description": "The DNS record used to overwrite the origin request.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "DnsRecord"
        ]
      }
    },
    "ConfigType": {
      "Description": "The configuration type. Use this parameter to identify whether the configuration is global or a rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigType"
        ]
      }
    },
    "SiteVersion": {
      "Description": "The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the active configuration version. The default is version 0.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteVersion"
        ]
      }
    },
    "RuleName": {
      "Description": "The name of the rule. This parameter is not required for global configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleName"
        ]
      }
    },
    "OriginVerify": {
      "Description": "Specifies whether to verify the origin server certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "OriginVerify"
        ]
      }
    }
  }
}
                        
```
