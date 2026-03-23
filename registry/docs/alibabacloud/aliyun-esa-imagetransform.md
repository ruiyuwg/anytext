You can use the ALIYUN::ESA::ImageTransform resource type to add an image transform configuration for a website.

## Syntax

```
{
  "Type": "ALIYUN::ESA::ImageTransform",
  "Properties": {
    "SiteId": Integer,
    "Enable": String,
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

Enable

String

No

Yes

Specifies whether to enable image transform.

Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

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

The switch for the rule.

This parameter is not required for global configurations. Valid values:

-   on: Enabled.
    
-   off: Disabled.
    

Rule

String

No

Yes

The content of the rule.

A conditional expression used to match user requests. This parameter is not required for global configurations. The following scenarios are supported:

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

For websites that have configuration version management enabled, this parameter specifies the website version to which the configuration applies. The default value is 0.

## Return values

Fn::GetAtt

-   RuleEnable: Indicates whether the rule is enabled.
    
-   Enable: Indicates whether image transform is enabled.
    
-   Sequence: The execution priority of the rule.
    
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
      en: The site ID, which can be obtained by calling the ListSites API.
    Required: true
  RuleEnable:
    Type: String
    Description:
      en: |-
        Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        on: Enabled.
        off: Disabled.
    AllowedValues:
      - 'on'
      - 'off'
    Required: false
  Enable:
    Type: String
    Description:
      en: |-
        Indicates whether the image transform feature is enabled. Valid values:
        on: Enabled.
        off: Disabled.
    AllowedValues:
      - 'on'
      - 'off'
    Required: false
  Rule:
    Type: String
    Description:
      en: |-
        Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        Match all incoming requests: value set to true
        Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
    Required: false
  RuleName:
    Type: String
    Description:
      en: Rule name. When adding global configuration, this parameter does not need to be set.
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::ImageTransform
    Properties:
      SiteId:
        Ref: SiteId
      RuleEnable:
        Ref: RuleEnable
      Enable:
        Ref: Enable
      Rule:
        Ref: Rule
      RuleName:
        Ref: RuleName
Outputs:
  RuleEnable:
    Description: Rule switch. When adding global configuration, this parameter does not need to be set.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  Enable:
    Description: Indicates whether the image transform feature is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Enable
  Sequence:
    Description: The execution priority of the rule. A smaller value indicates a higher priority.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Sequence
  Rule:
    Description: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
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
    Description: The version number of the site configuration. For sites that have configuration version management enabled, this parameter specifies the site version to which the configuration applies. The default value is 0.
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
    Description: Rule name. When adding global configuration, this parameter does not need to be set.
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
        "en": "The site ID, which can be obtained by calling the ListSites API."
      },
      "Required": true
    },
    "RuleEnable": {
      "Type": "String",
      "Description": {
        "en": "Rule switch. When adding global configuration, this parameter does not need to be set. Value range:\non: Enabled.\noff: Disabled."
      },
      "AllowedValues": [
        "on",
        "off"
      ],
      "Required": false
    },
    "Enable": {
      "Type": "String",
      "Description": {
        "en": "Indicates whether the image transform feature is enabled. Valid values:\non: Enabled.\noff: Disabled."
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
        "en": "Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:\nMatch all incoming requests: value set to true\nMatch specified request: Set the value to a custom expression, for example: (http.host eq \\\"video.example.com\\\")."
      },
      "Required": false
    },
    "RuleName": {
      "Type": "String",
      "Description": {
        "en": "Rule name. When adding global configuration, this parameter does not need to be set."
      },
      "Required": false
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::ImageTransform",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "RuleEnable": {
          "Ref": "RuleEnable"
        },
        "Enable": {
          "Ref": "Enable"
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
    "RuleEnable": {
      "Description": "Rule switch. When adding global configuration, this parameter does not need to be set.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RuleEnable"
        ]
      }
    },
    "Enable": {
      "Description": "Indicates whether the image transform feature is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Enable"
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
    "Rule": {
      "Description": "Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.",
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
      "Description": "The version number of the site configuration. For sites that have configuration version management enabled, this parameter specifies the site version to which the configuration applies. The default value is 0.",
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
      "Description": "Rule name. When adding global configuration, this parameter does not need to be set.",
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
