ALIYUN::Config::Rule is used to create or modify a rule.

## Syntax

```
{
  "Type": "ALIYUN::Config::Rule",
  "Properties": {
    "TagKeyScope": String,
    "TagValueScope": String,
    "Description": String,
    "ExcludeResourceIdsScope": String,
    "SourceOwner": String,
    "SourceIdentifier": String,
    "MaximumExecutionFrequency": String,
    "RegionIdsScope": String,
    "ConfigRuleTriggerTypes": String,
    "ResourceGroupIdsScope": String,
    "RiskLevel": Integer,
    "ResourceTypesScope": List,
    "RuleName": String,
    "InputParameters": Map,
    "TagKeyLogicScope": String
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

ConfigRuleTriggerTypes

String

Yes

Yes

The trigger types of the rule.

Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
    
-   ScheduledNotification: The rule is triggered as scheduled.
    

ResourceTypesScope

List

Yes

Yes

The types of the resources that are evaluated based on the rule.

None.

RiskLevel

Integer

Yes

Yes

The risk level.

Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

RuleName

String

Yes

No

The rule name.

None.

SourceIdentifier

String

Yes

No

The identifier of the rule or the Alibaba Cloud Resource Name (ARN) of the function.

This property specifies the identifier of the rule when SourceOwner is set to ALIYUN. A value of ALIYUN specifies a managed rule of Alibaba Cloud.

This property specifies the ARN of the function when SourceOwner is set to CUSTOM\_FC. A value of CUSTOM\_FC specifies a custom function.

SourceOwner

String

Yes

No

The method based on which the rule is created.

Valid values:

-   CUSTOM\_FC: custom function
    
-   ALIYUN: managed rule of Alibaba Cloud
    

Description

String

No

Yes

The description of the rule.

None.

ExcludeResourceIdsScope

String

No

Yes

The IDs of the resources that are excluded by the rule.

Separate multiple resource IDs with commas (,).

This property takes effect when SourceOwner is set to ALIYUN.

InputParameters

Map

No

Yes

The input parameters of the rule.

Example: `{"cpuCount": "2"}`.

MaximumExecutionFrequency

String

No

Yes

The interval at which the rule is executed.

Valid values:

-   One\_Hour
    
-   Three\_Hours
    
-   Six\_Hours
    
-   Twelve\_Hours
    
-   TwentyFour\_Hours
    

RegionIdsScope

String

No

Yes

The region IDs of the rule.

Separate multiple region IDs with commas (,).

This property takes effect when SourceOwner is set to ALIYUN.

ResourceGroupIdsScope

String

No

Yes

The resource group IDs of the rule.

Separate multiple resource group IDs with commas (,).

This property takes effect when SourceOwner is set to ALIYUN.

TagKeyLogicScope

String

No

No

The logical relationship between the tag keys of the rule.

None.

TagKeyScope

String

No

Yes

The tag key of the rule.

This property takes effect when SourceOwner is set to ALIYUN.

TagValueScope

String

No

Yes

The tag value of the rule.

This property takes effect when SourceOwner is set to ALIYUN.

## Return values

Fn::GetAtt

-   TagKeyScope: the tag key of the rule.
    
-   TagValueScope: the tag value of the rule.
    
-   Description: the description of the rule.
    
-   ExcludeResourceIdsScope: the IDs of the resources that are excluded by the rule.
    
-   SourceOwner: the method based on which the rule is created.
    
-   SourceIdentifier: the identifier of the rule.
    
-   MaximumExecutionFrequency: the interval at which the rule is executed.
    
-   ConfigRuleId: the rule ID.
    
-   EventSource: the source of the event.
    
-   RegionIdsScope: the region IDs of the rule.
    
-   ConfigRuleArn: the ARN of the rule.
    
-   ConfigRuleTriggerTypes: the trigger types of the rule.
    
-   ResourceGroupIdsScope: the resource group IDs of the rule.
    
-   RiskLevel: the risk level of the rule.
    
-   ResourceTypesScope: the types of the resources that are evaluated based on the rule.
    
-   RuleName: the rule name.
    
-   InputParameters: the input parameters of the rule.
    

## Examples

## `YAML`

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    Default: test
    Type: String
    Description: The description of the rule
  SourceOwner:
    Type: String
    Description: 'Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule'
    Default: ALIYUN
  SourceIdentifier:
    Type: String
    Description: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
    Default: ecs-instances-in-vpc
  ConfigRuleTriggerTypes:
    Type: String
    Description: 'The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.'
    Default: ConfigurationItemChangeNotification
  RiskLevel:
    Type: Number
    Description: 'The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info'
    Default: 3
  ResourceTypesScope:
    Type: Json
    Description: The types of the resources to be evaluated against the rule
    Default:
      - ACS::ECS::Instance
  RuleName:
    Type: String
    Description: The name of the rule.
    Default: MyRule
Resources:
  ConfigRule:
    Type: ALIYUN::Config::Rule
    Properties:
      Description:
        Ref: Description
      SourceOwner:
        Ref: SourceOwner
      SourceIdentifier:
        Ref: SourceIdentifier
      ConfigRuleTriggerTypes:
        Ref: ConfigRuleTriggerTypes
      RiskLevel:
        Ref: RiskLevel
      ResourceTypesScope:
        Ref: ResourceTypesScope
      RuleName:
        Ref: RuleName
Outputs:
  TagKeyScope:
    Description: The rule monitors the tag key, only applies to rules created based on managed rules
    Value:
      Fn::GetAtt:
        - ConfigRule
        - TagKeyScope
  TagValueScope:
    Description: The rule monitors the tag value, only applies to rules created based on managed rules
    Value:
      Fn::GetAtt:
        - ConfigRule
        - TagValueScope
  Description:
    Description: The description of the rule
    Value:
      Fn::GetAtt:
        - ConfigRule
        - Description
  ExcludeResourceIdsScope:
    Description: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
    Value:
      Fn::GetAtt:
        - ConfigRule
        - ExcludeResourceIdsScope
  SourceOwner:
    Description: 'Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule'
    Value:
      Fn::GetAtt:
        - ConfigRule
        - SourceOwner
  SourceIdentifier:
    Description: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
    Value:
      Fn::GetAtt:
        - ConfigRule
        - SourceIdentifier
  MaximumExecutionFrequency:
    Description: 'The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours'
    Value:
      Fn::GetAtt:
        - ConfigRule
        - MaximumExecutionFrequency
  ConfigRuleId:
    Description: The ID of the rule
    Value:
      Fn::GetAtt:
        - ConfigRule
        - ConfigRuleId
  EventSource:
    Description: The event source of the rule.
    Value:
      Fn::GetAtt:
        - ConfigRule
        - EventSource
  RegionIdsScope:
    Description: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
    Value:
      Fn::GetAtt:
        - ConfigRule
        - RegionIdsScope
  ConfigRuleArn:
    Description: config rule arn
    Value:
      Fn::GetAtt:
        - ConfigRule
        - ConfigRuleArn
  ConfigRuleTriggerTypes:
    Description: 'The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.'
    Value:
      Fn::GetAtt:
        - ConfigRule
        - ConfigRuleTriggerTypes
  ResourceGroupIdsScope:
    Description: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
    Value:
      Fn::GetAtt:
        - ConfigRule
        - ResourceGroupIdsScope
  RiskLevel:
    Description: 'The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info'
    Value:
      Fn::GetAtt:
        - ConfigRule
        - RiskLevel
  ResourceTypesScope:
    Description: The types of the resources to be evaluated against the rule
    Value:
      Fn::GetAtt:
        - ConfigRule
        - ResourceTypesScope
  RuleName:
    Description: The name of the rule.
    Value:
      Fn::GetAtt:
        - ConfigRule
        - RuleName
  InputParameters:
    Description: The settings of the input parameters for the rule
    Value:
      Fn::GetAtt:
        - ConfigRule
        - InputParameters
```

## `JSON`

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "Default": "test",
      "Type": "String",
      "Description": "The description of the rule"
    },
    "SourceOwner": {
      "Type": "String",
      "Description": "Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule",
      "Default": "ALIYUN"
    },
    "SourceIdentifier": {
      "Type": "String",
      "Description": "The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule",
      "Default": "ecs-instances-in-vpc"
    },
    "ConfigRuleTriggerTypes": {
      "Type": "String",
      "Description": "The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.",
      "Default": "ConfigurationItemChangeNotification"
    },
    "RiskLevel": {
      "Type": "Number",
      "Description": "The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info",
      "Default": 3
    },
    "ResourceTypesScope": {
      "Type": "Json",
      "Description": "The types of the resources to be evaluated against the rule",
      "Default": [
        "ACS::ECS::Instance"
      ]
    },
    "RuleName": {
      "Type": "String",
      "Description": "The name of the rule.",
      "Default": "MyRule"
    }
  },
  "Resources": {
    "ConfigRule": {
      "Type": "ALIYUN::Config::Rule",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "SourceOwner": {
          "Ref": "SourceOwner"
        },
        "SourceIdentifier": {
          "Ref": "SourceIdentifier"
        },
        "ConfigRuleTriggerTypes": {
          "Ref": "ConfigRuleTriggerTypes"
        },
        "RiskLevel": {
          "Ref": "RiskLevel"
        },
        "ResourceTypesScope": {
          "Ref": "ResourceTypesScope"
        },
        "RuleName": {
          "Ref": "RuleName"
        }
      }
    }
  },
  "Outputs": {
    "TagKeyScope": {
      "Description": "The rule monitors the tag key, only applies to rules created based on managed rules",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "TagKeyScope"
        ]
      }
    },
    "TagValueScope": {
      "Description": "The rule monitors the tag value, only applies to rules created based on managed rules",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "TagValueScope"
        ]
      }
    },
    "Description": {
      "Description": "The description of the rule",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "Description"
        ]
      }
    },
    "ExcludeResourceIdsScope": {
      "Description": "The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "ExcludeResourceIdsScope"
        ]
      }
    },
    "SourceOwner": {
      "Description": "Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "SourceOwner"
        ]
      }
    },
    "SourceIdentifier": {
      "Description": "The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "SourceIdentifier"
        ]
      }
    },
    "MaximumExecutionFrequency": {
      "Description": "The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "MaximumExecutionFrequency"
        ]
      }
    },
    "ConfigRuleId": {
      "Description": "The ID of the rule",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "ConfigRuleId"
        ]
      }
    },
    "EventSource": {
      "Description": "The event source of the rule.",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "EventSource"
        ]
      }
    },
    "RegionIdsScope": {
      "Description": "The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "RegionIdsScope"
        ]
      }
    },
    "ConfigRuleArn": {
      "Description": "config rule arn",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "ConfigRuleArn"
        ]
      }
    },
    "ConfigRuleTriggerTypes": {
      "Description": "The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "ConfigRuleTriggerTypes"
        ]
      }
    },
    "ResourceGroupIdsScope": {
      "Description": "The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "ResourceGroupIdsScope"
        ]
      }
    },
    "RiskLevel": {
      "Description": "The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "RiskLevel"
        ]
      }
    },
    "ResourceTypesScope": {
      "Description": "The types of the resources to be evaluated against the rule",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "ResourceTypesScope"
        ]
      }
    },
    "RuleName": {
      "Description": "The name of the rule.",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "RuleName"
        ]
      }
    },
    "InputParameters": {
      "Description": "The settings of the input parameters for the rule",
      "Value": {
        "Fn::GetAtt": [
          "ConfigRule",
          "InputParameters"
        ]
      }
    }
  }
}
```
