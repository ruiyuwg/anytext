The ALIYUN::ESA::HttpRequestHeaderModificationRule type is used to create configurations that modify HTTP request headers.

## Syntax

```
{
  "Type": "ALIYUN::ESA::HttpRequestHeaderModificationRule",
  "Properties": {
    "RequestHeaderModification": List,
    "SiteId": Integer,
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

RequestHeaderModification

List

Yes

Yes

The configurations for modifying request headers.

Supports add, delete, and modify operations. For more information, see [RequestHeaderModification properties](#bbb37bdabcurp).

SiteId

Integer

Yes

No

The site ID.

None

RuleEnable

String

No

Yes

The switch that enables or disables the rule.

This parameter is not required for global configurations. Valid values:

-   on
    
-   Off
    

Rule

String

No

Yes

The content of the rule.

Use a conditional expression to match user requests. This parameter is not required for global configurations. Scenarios:

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

No

The execution priority of the rule.

A smaller value indicates a higher priority.

SiteVersion

Integer

No

No

The version number of the site configuration.

For sites where configuration version management is enabled, use this parameter to specify the site version for which the configuration takes effect. The default value is 0.

## RequestHeaderModification syntax

```
"RequestHeaderModification": [
  {
    "Type": String,
    "Value": String,
    "Operation": String,
    "Name": String
  }
]
```

## RequestHeaderModification properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Name

String

Yes

Yes

The name of the request header.

None

Operation

String

Yes

Yes

The operation.

Valid values:

-   add
    
-   del: Delete
    
-   modify
    

Type

String

No

Yes

The type of the value.

Valid values:

-   static: static mode.
    
-   dynamic: dynamic mode.
    

Value

String

No

Yes

The value of the request header.

None

## Return values

Fn::GetAtt

-   RuleEnable: Specifies whether the rule is enabled.
    
-   Sequence: The execution priority of the rule.
    
-   Rule: The content of the rule.
    
-   ConfigId: The ID of the configuration.
    
-   SiteVersion: The version number of the site configuration.
    
-   ConfigType: The type of the configuration.
    
-   RequestHeaderModification: The request header modification configurations.
    
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
  RequestHeaderModification:
    AssociationPropertyMetadata:
      Parameters:
        Type:
          Type: String
          Description:
            en: |-
              Value type. Value range:
              - `static`:static mode.
              - `dynamic`:dynamic mode.
          AllowedValues:
            - static
            - dynamic
          Required: false
        Value:
          Type: String
          Description:
            en: Request header value.
          Required: false
        Operation:
          Type: String
          Description:
            en: |-
              Mode of operation. Value range:
              - `add`: add.
              - `del`: delete
              - `modify`: change.
          AllowedValues:
            - add
            - del
            - modify
          Required: true
        Name:
          Type: String
          Description:
            en: Request Header Name.
          Required: true
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: The configurations of modifying request headers. You can add, delete, or modify a request header.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::HttpRequestHeaderModificationRule
    Properties:
      SiteId:
        Ref: SiteId
      RequestHeaderModification:
        Ref: RequestHeaderModification
Outputs:
  RuleEnable:
    Description: Rule switch. When adding global configuration, this parameter does not need to be set.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  Sequence:
    Description: Order of rule execution. The smaller the value, the higher the priority for execution.
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
    Description: Config Id.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigId
  SiteVersion:
    Description: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteVersion
  ConfigType:
    Description: The configuration type. You can use this parameter to check the global configuration or rule configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigType
  RequestHeaderModification:
    Description: The configurations of modifying request headers. You can add, delete, or modify a request header.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RequestHeaderModification
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
        "en": "The site ID."
      },
      "Required": true
    },
    "RequestHeaderModification": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Type": {
            "Type": "String",
            "Description": {
              "en": "Value type. Value range:\n- `static`:static mode.\n- `dynamic`:dynamic mode."
            },
            "AllowedValues": [
              "static",
              "dynamic"
            ],
            "Required": false
          },
          "Value": {
            "Type": "String",
            "Description": {
              "en": "Request header value."
            },
            "Required": false
          },
          "Operation": {
            "Type": "String",
            "Description": {
              "en": "Mode of operation. Value range:\n- `add`: add.\n- `del`: delete\n- `modify`: change."
            },
            "AllowedValues": [
              "add",
              "del",
              "modify"
            ],
            "Required": true
          },
          "Name": {
            "Type": "String",
            "Description": {
              "en": "Request Header Name."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The configurations of modifying request headers. You can add, delete, or modify a request header."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::HttpRequestHeaderModificationRule",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "RequestHeaderModification": {
          "Ref": "RequestHeaderModification"
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
    "Sequence": {
      "Description": "Order of rule execution. The smaller the value, the higher the priority for execution.",
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
      "Description": "Config Id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigId"
        ]
      }
    },
    "SiteVersion": {
      "Description": "The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteVersion"
        ]
      }
    },
    "ConfigType": {
      "Description": "The configuration type. You can use this parameter to check the global configuration or rule configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigType"
        ]
      }
    },
    "RequestHeaderModification": {
      "Description": "The configurations of modifying request headers. You can add, delete, or modify a request header.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "RequestHeaderModification"
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
