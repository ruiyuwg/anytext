The ALIYUN::ESA::NetworkOptimization type is used to add network optimization configurations for a website.

## Syntax

```
{
  "Type": "ALIYUN::ESA::NetworkOptimization",
  "Properties": {
    "SiteId": Integer,
    "Grpc": String,
    "Http2Origin": String,
    "RuleEnable": String,
    "Rule": String,
    "RuleName": String,
    "SmartRouting": String,
    "Sequence": Integer,
    "SiteVersion": Integer,
    "UploadMaxFilesize": Integer,
    "Websocket": String
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

The site ID.

None

Grpc

String

No

Yes

Specifies whether to enable gRPC.

Disabled by default. Valid values:

-   on
    
-   off
    

Http2Origin

String

No

Yes

Specifies whether to enable HTTP/2 to Origin.

Disabled by default. Valid values:

-   on
    
-   off
    

RuleEnable

String

No

Yes

The switch for the rule.

Do not set this parameter for a global configuration. Valid values:

-   on
    
-   off
    

Rule

String

No

Yes

The content of the rule.

Use a conditional expression to match user requests. Do not set this parameter for a global configuration. Scenarios:

-   Match all incoming requests: Set the value to true.
    
-   Match a specific request: Set the value to a custom expression, such as (http.host eq "video.example.com").
    

RuleName

String

No

Yes

The name of the rule.

Do not set this parameter for a global configuration.

SmartRouting

String

No

Yes

Specifies whether to enable the smart routing service.

Disabled by default. Valid values:

-   On
    
-   off
    

Sequence

Integer

No

Yes

The execution order of the rule.

A smaller value indicates a higher priority.

SiteVersion

Integer

No

No

The version number of the site configuration.

For sites with configuration version management enabled, this parameter specifies the version for which the configuration takes effect. The default value is 0.

UploadMaxFilesize

Integer

No

Yes

The maximum size of a file that can be uploaded.

The unit is MB. The value must be in the range of 100 to 500.

Websocket

String

No

Yes

Specifies whether to enable WebSocket.

Enabled by default. Valid values:

-   on
    
-   off
    

## Return values

Fn::GetAtt

-   SmartRouting: Specifies whether the smart routing service is enabled.
    
-   Websocket: Specifies whether WebSocket is enabled.
    
-   RuleEnable: Specifies whether the rule is enabled.
    
-   Sequence: The execution order of the rule.
    
-   Rule: The rule content.
    
-   ConfigId: The configuration ID.
    
-   Grpc: Specifies whether gRPC is enabled.
    
-   SiteVersion: The version number of the site configuration.
    
-   ConfigType: The configuration type.
    
-   Http2Origin: Specifies whether HTTP/2 to Origin is enabled.
    
-   RuleName: The name of the rule.
    
-   UploadMaxFilesize: The maximum size of a file that can be uploaded.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SiteId:
    Type: Number
    Description: The site ID.
    Required: true
  RuleEnable:
    Type: String
    Description: |-
      The switch for the rule. This parameter is not required for a global configuration. Valid values:
      - 'on'
      - 'off'
    AllowedValues:
      - 'on'
      - 'off'
    Required: false
  Rule:
    Type: String
    Description: |-
      The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for a global configuration. Scenarios:
      - To match all incoming requests, set the value to true.
      - To match a specific request, set the value to a custom expression, such as (http.host eq \"video.example.com\").
    Required: false
  SiteVersion:
    Type: Number
    Description: The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the version for which the configuration takes effect. The default value is 0.
    Required: false
  RuleName:
    Type: String
    Description: The name of the rule.
    Required: false
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::NetworkOptimization
    Properties:
      SiteId:
        Ref: SiteId
      RuleEnable:
        Ref: RuleEnable
      Rule:
        Ref: Rule
      SiteVersion:
        Ref: SiteVersion
      RuleName:
        Ref: RuleName
Outputs:
  SmartRouting:
    Description: Specifies whether the smart routing service is enabled. This service is disabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SmartRouting
  Websocket:
    Description: Specifies whether WebSocket is enabled. This service is enabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Websocket
  RuleEnable:
    Description: The switch for the rule. This parameter is not required for a global configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleEnable
  Sequence:
    Description: The execution order of the rule. A smaller value indicates a higher priority.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Sequence
  Rule:
    Description: The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for a global configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Rule
  ConfigId:
    Description: The ID of the configuration. Call the ListNetworkOptimizations operation to obtain the ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigId
  Grpc:
    Description: Specifies whether gRPC is enabled. This feature is disabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Grpc
  SiteVersion:
    Description: The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the version for which the configuration takes effect. The default value is 0.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteVersion
  ConfigType:
    Description: The configuration type. Use this parameter to query global or rule-based configurations.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConfigType
  Http2Origin:
    Description: Specifies whether HTTP/2 back-to-origin is enabled. This feature is disabled by default.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Http2Origin
  RuleName:
    Description: The name of the rule.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - RuleName
  UploadMaxFilesize:
    Description: 'The maximum size of a file that can be uploaded, in MB. The value must be in the range of 100 to 500.'
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UploadMaxFilesize
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SiteId": {
      "Type": "Number",
      "Description": "The site ID.",
      "Required": true
    },
    "RuleEnable": {
      "Type": "String",
      "Description": "The switch for the rule. This parameter is not required for a global configuration. Valid values:\n- on\n- off",
      "AllowedValues": [
        "on",
        "off"
      ],
      "Required": false
    },
    "Rule": {
      "Type": "String",
      "Description": "The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for a global configuration. Scenarios:\n- To match all incoming requests, set the value to true.\n- To match a specific request, set the value to a custom expression, such as (http.host eq \\\"video.example.com\\\").",
      "Required": false
    },
    "SiteVersion": {
      "Type": "Number",
      "Description": "The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the version for which the configuration takes effect. The default value is 0.",
      "Required": false
    },
    "RuleName": {
      "Type": "String",
      "Description": "The name of the rule.",
      "Required": false
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::NetworkOptimization",
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
        "SiteVersion": {
          "Ref": "SiteVersion"
        },
        "RuleName": {
          "Ref": "RuleName"
        }
      }
    }
  },
  "Outputs": {
    "SmartRouting": {
      "Description": "Specifies whether the smart routing service is enabled. This service is disabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SmartRouting"
        ]
      }
    },
    "Websocket": {
      "Description": "Specifies whether WebSocket is enabled. This service is enabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Websocket"
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
      "Description": "The content of the rule, which uses a conditional expression to match user requests. This parameter is not required for a global configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Rule"
        ]
      }
    },
    "ConfigId": {
      "Description": "The ID of the configuration. Call the ListNetworkOptimizations operation to obtain the ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigId"
        ]
      }
    },
    "Grpc": {
      "Description": "Specifies whether gRPC is enabled. This feature is disabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Grpc"
        ]
      }
    },
    "SiteVersion": {
      "Description": "The version number of the site configuration. For sites with configuration version management enabled, this parameter specifies the version for which the configuration takes effect. The default value is 0.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteVersion"
        ]
      }
    },
    "ConfigType": {
      "Description": "The configuration type. Use this parameter to query global or rule-based configurations.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConfigType"
        ]
      }
    },
    "Http2Origin": {
      "Description": "Specifies whether HTTP/2 back-to-origin is enabled. This feature is disabled by default.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Http2Origin"
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
    },
    "UploadMaxFilesize": {
      "Description": "The maximum size of a file that can be uploaded, in MB. The value must be in the range of 100 to 500.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UploadMaxFilesize"
        ]
      }
    }
  }
}
                        
```
