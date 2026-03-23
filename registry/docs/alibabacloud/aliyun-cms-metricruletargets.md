ALIYUN::CMS::MetricRuleTargets is used to add or modify one or more message resources for an alert rule.

## Syntax

```
{
  "Type": "ALIYUN::CMS::MetricRuleTargets",
  "Properties": {
    "RuleId": String,
    "Targets": List
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

RuleId

String

Yes

No

The ID of the alert rule.

None

Targets

List

Yes

No

The message resources of the alert rule.

You can specify up to five message resources. For more information, see [Targets properties](#section-3g2-2as-gkt).

## Targets syntax

```
"Targets": [
  {
    "Level": String,
    "Id": String,
    "Arn": String
  }
]
```

## Targets properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Arn

String

Yes

No

The Alibaba Cloud Resource Name (ARN) of the message resource.

The ARN must be in the following format: `acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource name}/message`. Example: `acs:mns:cn-hangzhou:111:/queues/test/message`

-   {Service name abbreviation}: the abbreviation of the service name. Set the value to mns. Only Message Service (MNS) is supported.
    
-   {regionId}: the region ID of the message resource.
    
-   {userId}: the ID of the account to which the message resource belongs.
    
-   {Message resource type}: the type of the message resource. Valid values: queues and topics.
    
-   {Resource name}: the name of the message resource.
    

Id

String

Yes

No

The ID of the message resource.

The ID must be unique in the alert rule.

Level

String

No

No

The alert level.

Valid values:

-   INFO
    
-   WARN
    
-   CRITICAL
    

## Return values

Fn::GetAtt

-   Arns: the ARNs of the message resources.
    
-   Ids: the IDs of the message resources.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  RuleId:
    Type: String
    Description: The ID of the alert rule.
  TopicArn:
    Type: String
    Description: Resource description
    Default: acs:mns:cn-hangzhou:111:/queues/test
Resources:
  MetricRuleTargets:
    Type: ALIYUN::CMS::MetricRuleTargets
    Properties:
      RuleId:
        Ref: RuleId
      Targets:
        - Level: WARN
          Id: '1'
          Arn:
            Fn::Sub:
              - ${TopicArn}/message
              - TopicArn:
                  Ref: TopicArn
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RuleId": {
      "Type": "String",
      "Description": "The ID of the alert rule."
    },
    "TopicArn": {
      "Type": "String",
      "Description": "Resource description",
      "Default": "acs:mns:cn-hangzhou:111:/queues/test"
    }
  },
  "Resources": {
    "MetricRuleTargets": {
      "Type": "ALIYUN::CMS::MetricRuleTargets",
      "Properties": {
        "RuleId": {
          "Ref": "RuleId"
        },
        "Targets": [
          {
            "Level": "WARN",
            "Id": "1",
            "Arn": {
              "Fn::Sub": [
                "${TopicArn}/message",
                {
                  "TopicArn": {
                    "Ref": "TopicArn"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```
