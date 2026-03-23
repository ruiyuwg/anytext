ALIYUN::CMS::MetricRuleTemplateDeployment is used to apply an alert template to an application group.

## Syntax

```
{
  "Type": "ALIYUN::CMS::MetricRuleTemplateDeployment",
  "Properties": {
    "GroupId": Integer,
    "TemplateIds": List,
    "AppendMode": String,
    "ApplyMode": String,
    "EnableEndTime": Integer,
    "EnableStartTime": Integer,
    "NotifyLevel": Integer,
    "SilenceTime": Integer,
    "Webhook": String
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

GroupId

Integer

Yes

No

The ID of the application group.

For more information about how to query the application group ID, see [DescribeMonitorGroups](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemonitorgroups).

TemplateIds

List

Yes

No

The ID of the alert template.

For more information about how to query the alert template ID, see [DescribeMetricRuleTemplateList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricruletemplatelist).

AppendMode

String

No

No

The policy for applying the alert template.

Valid values:

-   all (default): deletes all the rules that are created by using the alert template from the selected application group, and then creates alert rules based on the template.
    
-   append: deletes the rules that are created by using the alert template from the selected application group, and then creates alert rules based on the existing template.
    

ApplyMode

String

No

No

The mode in which the alert template is applied.

Valid values:

-   GROUP\_INSTANCE\_FIRST: The metrics in the application group take precedence. If a metric specified in the alert template does not exist in the application group, the system does not generate an alert rule for the metric based on the alert template.
    
-   ALARM\_TEMPLATE\_FIRST: The metrics specified in the alert template take precedence. If a metric specified in the alert template does not exist in the application group, the system still generates an alert rule for the metric based on the alert template.
    

EnableEndTime

Integer

No

No

The end of the time period during which the alert rule is effective.

Valid values: 00 to 23. A value of 00 indicates 00:59 and a value of 23 indicates 23:59.

EnableStartTime

Integer

No

No

The beginning of the time period during which the alert rule is effective.

Valid values: 00 to 23. A value of 00 indicates 00:00 and a value of 23 indicates 23:00.

NotifyLevel

Integer

No

No

The alert notification method.

Valid values:

-   2: Alert notifications are sent by using phone calls, text messages, emails, TradeManager, and DingTalk chatbots.
    
-   3: Alert notifications are sent by using text messages, emails, TradeManager, and DingTalk chatbots.
    
-   4: Alert notifications are sent by using TradeManager and DingTalk chatbots.
    

SilenceTime

Integer

No

No

The mute period during which notifications are not repeatedly sent for an alert.

Unit: seconds. Default value: 86400.

**Note**

Only one alert notification is sent during each mute period even if the metric value exceeds the alert threshold several times.

Webhook

String

No

No

The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.

None.

## Return values

Fn::GetAtt

-   RuleIds: the IDs of the alert rules.
    
-   GroupId: the ID of the application group.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TemplateIds:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Required: false
        MinLength: 1
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: |-
        The ID list of the Alarm Template to be applied.
        For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
    Required: true
    MinLength: 1
  GroupId:
    Type: Number
    Description:
      en: |-
        Apply group ID.
        For how to get the application group ID, see DescribeMonitorGroups.
    Required: true
    MaxValue: 9007199254740991
Resources:
  MetricRuleTemplateDeployment:
    Type: ALIYUN::CMS::MetricRuleTemplateDeployment
    Properties:
      TemplateIds:
        Ref: TemplateIds
      GroupId:
        Ref: GroupId
Outputs:
  RuleIds:
    Description: The IDs of rhe generated rules.
    Value:
      Fn::GetAtt:
        - MetricRuleTemplateDeployment
        - RuleIds
  GroupId:
    Description: The ID of the group that applied the template to.
    Value:
      Fn::GetAtt:
        - MetricRuleTemplateDeployment
        - GroupId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TemplateIds": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": false,
          "MinLength": 1
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The ID list of the Alarm Template to be applied.\nFor how to get the alarm template ID, see DescribeMetricRuleTemplateList."
      },
      "Required": true,
      "MinLength": 1
    },
    "GroupId": {
      "Type": "Number",
      "Description": {
        "en": "Apply group ID.\nFor how to get the application group ID, see DescribeMonitorGroups."
      },
      "Required": true,
      "MaxValue": 9007199254740991
    }
  },
  "Resources": {
    "MetricRuleTemplateDeployment": {
      "Type": "ALIYUN::CMS::MetricRuleTemplateDeployment",
      "Properties": {
        "TemplateIds": {
          "Ref": "TemplateIds"
        },
        "GroupId": {
          "Ref": "GroupId"
        }
      }
    }
  },
  "Outputs": {
    "RuleIds": {
      "Description": "The IDs of rhe generated rules.",
      "Value": {
        "Fn::GetAtt": [
          "MetricRuleTemplateDeployment",
          "RuleIds"
        ]
      }
    },
    "GroupId": {
      "Description": "The ID of the group that applied the template to.",
      "Value": {
        "Fn::GetAtt": [
          "MetricRuleTemplateDeployment",
          "GroupId"
        ]
      }
    }
  }
}
                        
```
