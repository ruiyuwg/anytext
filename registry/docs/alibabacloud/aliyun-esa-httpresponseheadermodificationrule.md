The ALIYUN::ESA::HttpResponseHeaderModificationRule resource type is used to create a configuration for modifying HTTP response headers.

## Syntax

```
{
  "Type": "ALIYUN::ESA::HttpResponseHeaderModificationRule",
  "Properties": {
    "ResponseHeaderModification": List,
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

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

ResponseHeaderModification

List

Yes

Yes

Modifies the response header.

Supports add, delete, and modify operations. For more information, see [ResponseHeaderModification properties](#dce98aedc3i38).

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

The rule switch.

This parameter is not required for global configurations. Valid values:

-   On: Enabled
    
-   Off: Disabled.
    

Rule

String

No

Yes

The rule content.

Uses a conditional expression to match user requests. This parameter is not required for global configurations. Two scenarios are supported:

-   To match all incoming requests, set the value to true.
    
-   To match specific requests, set the value to a custom expression, such as (http.host eq "video.example.com").
    

RuleName

String

No

Yes

The rule name.

This parameter is not required for global configurations.

Sequence

Integer

No

Yes

The execution order of the rule.

A smaller value indicates a higher execution priority.

SiteVersion

Integer

No

No

The version number of the site configuration.

For sites that have configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. The default value is 0.

## ResponseHeaderModification syntax

```
"ResponseHeaderModification": [
  {
    "Type": String,
    "Value": String,
    "Operation": String,
    "Name": String
  }
]
```

## ResponseHeaderModification properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Name

String

Yes

Yes

Specifies the name of the request header.

None

Operation

String

Yes

Yes

The operation.

Valid values:

-   add
    
-   del: delete
    
-   Modify
    

Type

String

No

Yes

The value type.

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

-   RuleEnable: Indicates whether the rule is enabled.
    
-   ResponseHeaderModification: The response header modification configuration.
    
-   Sequence: The execution order of the rule.
    
-   Rule: The rule content.
    
-   ConfigId: The configuration ID.
    
-   SiteVersion: The version number of the site configuration.
    
-   ConfigType: The configuration type.
    
-   RuleName: The rule name.
    

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
  ResponseHeaderModification:
    AssociationPropertyMetadata:
      Parameters:
        Type:
          Type: String
          Description:
            en: |-
              The value type. Value range:
              - `static`: Static mode.
              - `dynamic`: Dynamic mode.
          AllowedValues:
            - static
            - dynamic
          Required: false
        Value:
          Type: String
          Description:
            en: The response header value.
          Required: false
        Operation:
          Type: String
          Description:
            en: |-
              Operation method. Possible values:
              - `add`: Add
              - `del`: Delete
              - `modify`: Modify.
          AllowedValues:
            - add
            - del
            - modify
          Required: true
        Name:
          Type: String
          Description:
            en: The response header name.
          Required: true
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: Modify response headers, supporting add, delete, and modify operations.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::HttpResponseHeaderModificationRule
    Properties:
      SiteId:
        Ref: SiteId
      ResponseHeaderModification:
        Ref: ResponseHeaderModification
Outputs:
  RuleEnable:
    Description: Rule switch. When adding global configuration, this parameter does not need to be set.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  ResponseHeaderModification:
    Description: Modify response headers, supporting add, delete, and modify operations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ResponseHeaderModification
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
    Description: The configuration type.
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
        "en": "The site ID."
      },
      "Required": true
    },
    "ResponseHeaderModification": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Type": {
            "Type": "String",
            "Description": {
              "en": "The value type. Value range:\n- `static`: Static mode.\n- `dynamic`: Dynamic mode."
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
              "en": "The response header value."
            },
            "Required": false
          },
          "Operation": {
            "Type": "String",
            "Description": {
              "en": "Operation method. Possible values:\n- `add`: Add\n- `del`: Delete\n- `modify`: Modify."
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
              "en": "The response header name."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "Modify response headers, supporting add, delete, and modify operations."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::HttpResponseHeaderModificationRule",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "ResponseHeaderModification": {
          "Ref": "ResponseHeaderModification"
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
    "ResponseHeaderModification": {
      "Description": "Modify response headers, supporting add, delete, and modify operations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ResponseHeaderModification"
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
      "Description": "The configuration type.",
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
