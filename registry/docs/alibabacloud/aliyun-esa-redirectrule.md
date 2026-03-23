The ALIYUN::ESA::RedirectRule type is used to create a redirection configuration.

## Syntax

```
{
  "Type": "ALIYUN::ESA::RedirectRule",
  "Properties": {
    "ReserveQueryString": String,
    "SiteId": Integer,
    "StatusCode": Integer,
    "Type": String,
    "TargetUrl": String,
    "RuleEnable": String,
    "Rule": String,
    "RuleName": String,
    "SiteVersion": Integer
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

ReserveQueryString

String

Yes

Yes

Specifies whether to retain the query string.

Valid values:

-   on
    
-   off
    

SiteId

Integer

Yes

No

The site ID.

None

StatusCode

Integer

Yes

Yes

The status code for the redirection response that the node sends to the client.

Valid values:

-   301
    
-   302
    
-   303
    
-   307
    
-   308
    

Type

String

Yes

Yes

The redirection type.

Valid values:

-   static: Static pattern.
    
-   dynamic: Dynamic pattern.
    

TargetUrl

String

Yes

Yes

The destination URL for the redirection.

None

RuleEnable

String

No

Yes

Specifies whether to enable the rule.

This parameter is not required for global configurations. Valid values:

-   on
    
-   off
    

Rule

String

No

Yes

The content of the rule.

Use a conditional expression to match user requests. This parameter is not required for global configurations. There are two scenarios:

-   To match all incoming requests, set the value to true.
    
-   To match specific requests, set the value to a custom expression, such as (http.host eq "video.example.com").
    

RuleName

String

No

Yes

The name of the rule.

None

SiteVersion

Integer

No

No

The version number of the site configuration.

For sites with configuration version management enabled, this parameter specifies the site version to which the configuration applies. The default version is 0.

## Return values

Fn::GetAtt

-   Type: The redirection type.
    
-   RuleEnable: Specifies whether the rule is enabled.
    
-   ReserveQueryString: Specifies whether the query string is retained.
    
-   Sequence: The execution order of the rule.
    
-   Rule: The content of the rule.
    
-   TargetUrl: The destination URL for the redirection.
    
-   ConfigId: The configuration ID.
    
-   SiteVersion: The version number of the site configuration.
    
-   ConfigType: The configuration type.
    
-   StatusCode: The status code that the node returns to the client for the redirection.
    
-   RuleName: The name of the rule.
    

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
  Type:
    Type: String
    Description:
      en: |-
        The redirection type. Valid value:
        *   static
    AllowedValues:
      - static
    Required: true
  RuleEnable:
    Type: String
    Description:
      en: |-
        Specifies whether to enable the rule. This parameter is not required for global configurations. Valid values:
        on
        off
    AllowedValues:
      - 'on'
      - 'off'
    Required: false
  ReserveQueryString:
    Type: String
    Description:
      en: |-
        Specifies whether to retain the query string. Valid values:
        on
        off
    AllowedValues:
      - 'on'
      - 'off'
    Required: true
  TargetUrl:
    Type: String
    Description:
      en: The destination URL to which requests are redirected.
    Required: true
  Rule:
    Type: String
    Description:
      en: |-
        The content of the rule. Use a conditional expression to match user requests. This parameter is not required for global configurations.
        Scenarios:
        * To match all incoming requests, set the value to `true`.
        * To match specific requests, set the value to a custom expression, such as `(http.host eq "video.example.com")`.
    Required: false
  StatusCode:
    Type: Number
    Description:
      en: |-
        The status code for the redirection response. Valid values:
        *   301
        *   302
        *   303
        *   307
        *   308
    AllowedValues:
      - 301
      - 302
      - 303
      - 307
      - 308
    Required: true
  RuleName:
    Type: String
    Description:
      en: The name of the rule. This parameter is not required for global configurations.
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::RedirectRule
    Properties:
      SiteId:
        Ref: SiteId
      Type:
        Ref: Type
      RuleEnable:
        Ref: RuleEnable
      ReserveQueryString:
        Ref: ReserveQueryString
      TargetUrl:
        Ref: TargetUrl
      Rule:
        Ref: Rule
      StatusCode:
        Ref: StatusCode
      RuleName:
        Ref: RuleName
Outputs:
  Type:
    Description: The redirection type.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Type
  RuleEnable:
    Description: Indicates whether the rule is enabled. This parameter is not required for global configurations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  ReserveQueryString:
    Description: Indicates whether the query string is retained.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ReserveQueryString
  Sequence:
    Description: The execution order of the rule. A smaller value indicates a higher priority.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Sequence
  Rule:
    Description: The content of the rule. This parameter is not required for global configurations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Rule
  TargetUrl:
    Description: The destination URL to which requests are redirected.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TargetUrl
  ConfigId:
    Description: The configuration ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigId
  SiteVersion:
    Description: The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the site version to which the configuration applies. The default is version 0.
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
  StatusCode:
    Description: The status code for the redirection response.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - StatusCode
  RuleName:
    Description: The name of the rule. This parameter is not required for global configurations.
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
        "en": "The site ID."
      },
      "Required": true
    },
    "Type": {
      "Type": "String",
      "Description": {
        "en": "The redirection type. Valid value:\n*   static"
      },
      "AllowedValues": [
        "static"
      ],
      "Required": true
    },
    "RuleEnable": {
      "Type": "String",
      "Description": {
        "en": "Specifies whether to enable the rule. This parameter is not required for global configurations. Valid values:\non\noff"
      },
      "AllowedValues": [
        "on",
        "off"
      ],
      "Required": false
    },
    "ReserveQueryString": {
      "Type": "String",
      "Description": {
        "en": "Specifies whether to retain the query string. Valid values:\non\noff"
      },
      "AllowedValues": [
        "on",
        "off"
      ],
      "Required": true
    },
    "TargetUrl": {
      "Type": "String",
      "Description": {
        "en": "The destination URL to which requests are redirected."
      },
      "Required": true
    },
    "Rule": {
      "Type": "String",
      "Description": {
        "en": "The content of the rule. Use a conditional expression to match user requests. This parameter is not required for global configurations.\nScenarios:\n* To match all incoming requests, set the value to `true`.\n* To match specific requests, set the value to a custom expression, such as `(http.host eq \\\"video.example.com\\\")`."
      },
      "Required": false
    },
    "StatusCode": {
      "Type": "Number",
      "Description": {
        "en": "The status code for the redirection response. Valid values:\n*   301\n*   302\n*   303\n*   307\n*   308"
      },
      "AllowedValues": [
        301,
        302,
        303,
        307,
        308
      ],
      "Required": true
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
      "Type": "ALIYUN::ESA::RedirectRule",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "Type": {
          "Ref": "Type"
        },
        "RuleEnable": {
          "Ref": "RuleEnable"
        },
        "ReserveQueryString": {
          "Ref": "ReserveQueryString"
        },
        "TargetUrl": {
          "Ref": "TargetUrl"
        },
        "Rule": {
          "Ref": "Rule"
        },
        "StatusCode": {
          "Ref": "StatusCode"
        },
        "RuleName": {
          "Ref": "RuleName"
        }
      }
    }
  },
  "Outputs": {
    "Type": {
      "Description": "The redirection type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Type"
        ]
      }
    },
    "RuleEnable": {
      "Description": "Indicates whether the rule is enabled. This parameter is not required for global configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleEnable"
        ]
      }
    },
    "ReserveQueryString": {
      "Description": "Indicates whether the query string is retained.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ReserveQueryString"
        ]
      }
    },
    "Sequence": {
      "Description": "The execution order of the rule. A smaller value indicates a higher priority.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Sequence"
        ]
      }
    },
    "Rule": {
      "Description": "The content of the rule. This parameter is not required for global configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Rule"
        ]
      }
    },
    "TargetUrl": {
      "Description": "The destination URL to which requests are redirected.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TargetUrl"
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
      "Description": "The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the site version to which the configuration applies. The default is version 0.",
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
    "StatusCode": {
      "Description": "The status code for the redirection response.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "StatusCode"
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
    }
  }
}
                        
```
