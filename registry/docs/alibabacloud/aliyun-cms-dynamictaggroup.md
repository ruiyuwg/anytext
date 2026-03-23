ALIYUN::CMS::DynamicTagGroup is used to create a tag rule based on which cloud resources are automatically added to an application group.

**Note**

ALIYUN::CMS::DynamicTagGroup is supported only for Elastic Compute Service (ECS), ApsaraDB RDS, and Server Load Balancer (SLB) resources.

## Syntax

```
{
  "Type": "ALIYUN::CMS::DynamicTagGroup",
  "Properties": {
    "ContactGroupList": List,
    "MatchExpressFilterRelation": String,
    "EnableSubscribeEvent": Boolean,
    "TemplateIdList": List,
    "TagKey": String,
    "EnableInstallAgent": Boolean,
    "MatchExpress": List
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

ContactGroupList

List

Yes

No

The alert contacts.

None.

TagKey

String

Yes

No

The tag key.

None.

EnableInstallAgent

Boolean

No

No

Specifies whether to install the CloudMonitor agent.

Valid values:

-   true
    
-   false (default)
    

**Note**

If the CloudMonitor agent is not installed on ECS instances that are added to the application group, the system determines whether to install the CloudMonitor agent on the ECS instances based on the value of this property.

EnableSubscribeEvent

Boolean

No

No

Specifies whether to subscribe to event notifications.

Valid values:

-   true
    
-   false
    

MatchExpress

List

No

No

The conditional expressions.

You can specify up to three conditional expressions.

For more information, see [MatchExpress properties](#section-klz-dlm-73a).

MatchExpressFilterRelation

String

No

No

The logical operator between conditional expressions.

Valid values:

-   and
    
-   or
    

TemplateIdList

List

No

No

The IDs of the alert templates.

None.

## MatchExpress syntax

```
"MatchExpress": [
  {
    "TagValue": String,
    "TagValueMatchFunction": String
  }
]
```

## MatchExpress properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

TagValue

String

Yes

No

The tag value.

None.

TagValueMatchFunction

String

Yes

No

The method for matching the tag value.

Valid values:

-   contains: contains the tag value.
    
-   startWith: starts with the tag value.
    
-   endWith: ends with the tag value.
    
-   notContains: does not contain the tag value.
    
-   equals: equals to the tag value.
    
-   all: matches all.
    

## Return values

Fn::GetAtt

-   DynamicTagRuleId: the ID of the tag rule.
    
-   TagKey: the tag key.
    

## Examples

**Important**

You must change the masked values of properties in the following code based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  MatchExpressFilterRelation:
    Type: String
    Description: |-
      The relationship between the conditional expressions. Values are:
      and: the relationship between
      or: the relationship or the
      Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
    AllowedValues:
      - and
      - or
    Default: or
  EnableSubscribeEvent:
    Type: Boolean
    Description: |-
      Whether the event subscription is enabled. Values are
      :true: enable event subscription
      false: disable event subscription
    AllowedValues:
      - true
      - false
    Default: false
  ContactGroupList:
    Type: Json
    Description: Alarm contacts.
    Default:
      - ros-ut-group
Resources:
  DynamicTagGroup:
    Type: ALIYUN::CMS::DynamicTagGroup
    Properties:
      ContactGroupList:
        Ref: ContactGroupList
      MatchExpressFilterRelation:
        Ref: MatchExpressFilterRelation
      EnableSubscribeEvent:
        Ref: EnableSubscribeEvent
      TemplateIdList: Null
      TagKey: test1
      EnableInstallAgent: false
      MatchExpress:
        - TagValue: '123'
          TagValueMatchFunction: all
Outputs:
  DynamicTagRuleId:
    Value:
      Fn::GetAtt:
        - DynamicTagGroup
        - DynamicTagRuleId
  TagKey:
    Value:
      Fn::GetAtt:
        - DynamicTagGroup
        - TagKey
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "MatchExpressFilterRelation": {
      "Type": "String",
      "Description": "The relationship between the conditional expressions. Values are:\nand: the relationship between\nor: the relationship or the\nDescription currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.",
      "AllowedValues": [
        "and",
        "or"
      ],
      "Default": "or"
    },
    "EnableSubscribeEvent": {
      "Type": "Boolean",
      "Description": "Whether the event subscription is enabled. Values are\n:true: enable event subscription\nfalse: disable event subscription",
      "AllowedValues": [
        true,
        false
      ],
      "Default": false
    },
    "ContactGroupList": {
      "Type": "Json",
      "Description": "Alarm contacts.",
      "Default": ["ros-ut-***"]
    }
  },
  "Resources": {
    "DynamicTagGroup": {
      "Type": "ALIYUN::CMS::DynamicTagGroup",
      "Properties": {
        "ContactGroupList": {
          "Ref": "ContactGroupList"
        },
        "MatchExpressFilterRelation": {
          "Ref": "MatchExpressFilterRelation"
        },
        "EnableSubscribeEvent": {
          "Ref": "EnableSubscribeEvent"
        },
        "TemplateIdList": null,
        "TagKey": "test1",
        "EnableInstallAgent": false,
        "MatchExpress": [
          {
            "TagValue": "123",
            "TagValueMatchFunction": "all"
          }
        ]
      }
    }
  },
  "Outputs": {
    "DynamicTagRuleId": {
      "Value": {
        "Fn::GetAtt": [
          "DynamicTagGroup",
          "DynamicTagRuleId"
        ]
      }
    },
    "TagKey": {
      "Value": {
        "Fn::GetAtt": [
          "DynamicTagGroup",
          "TagKey"
        ]
      }
    }
  }
}
```
