ALIYUN::CMS::EventRule is used to create or modify an event-triggered alert rule. If the specified rule name does not exist, an event-triggered alert rule is created. If the specified rule name exists, the specified event-triggered alert rule is modified.

## Syntax

```
{
  "Type": "ALIYUN::CMS::EventRule",
  "Properties": {
    "Description": String,
    "EventType": String,
    "EventPattern": List,
    "State": String,
    "RuleName": String,
    "GroupId": String
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

EventPattern

List

Yes

Yes

The event pattern properties.

You can specify up to 50 event pattern properties.

For more information, see [EventPattern properties](#section-zls-ezy-5fg).

RuleName

String

Yes

No

The name of the alert rule.

None.

Description

String

No

Yes

The description of the alert rule.

None.

EventType

String

No

Yes

The type of the alert rule.

Valid values:

-   SYSTEM
    
-   CUSTOM
    

GroupId

String

No

Yes

The ID of the application group.

None.

State

String

No

Yes

The status of the alert rule.

Valid values:

-   ENABLED
    
-   DISABLED
    

## EventPattern syntax

```
"EventPattern": [
  {
    "StatusList": List,
    "NameList": List,
    "Product": String,
    "EventTypeList": List,
    "LevelList": List,
    "SQLFilter": String,
    "CustomFilters": String
  }
]
```

## EventPattern properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EventTypeList

List

No

Yes

The event type.

An asterisk (\*) indicates all types.

LevelList

List

No

Yes

The alert level of the event.

Valid values:

-   CRITICAL
    
-   WARN
    
-   INFO
    

An asterisk (\*) indicates all levels.

NameList

List

No

Yes

The name of the event.

None.

Product

String

No

Yes

The product type.

None.

StatusList

List

No

Yes

The status of the event.

None.

SQLFilter

String

No

No

Specifies whether to filter logs based on the specified SQL statement.

If the specified conditions are met, an alert is triggered.

CustomFilters

String

No

No

The custom filter conditions.

None.

## Return values

Fn::GetAtt

Data: the number of rows that are affected by the alert rule.

## Examples

## `YAML`

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test CMS EventRule
Parameters:
  RuleName:
    Type: String
    Default: mytest
  EventTypeList:
    Type: Json
    Default:
      - '*'
  LevelList:
    Type: Json
    Default:
      - WARN
Resources:
  EventRule:
    Type: ALIYUN::CMS::EventRule
    Properties:
      RuleName:
        Ref: RuleName
      EventPattern:
        - EventTypeList:
            Ref: EventTypeList
          LevelList:
            Ref: LevelList
          Product: ADS
Outputs:
  Data:
    Value:
      Fn::GetAtt:
        - EventRule
        - Data
```

## `JSON`

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test CMS EventRule",
  "Parameters": {
    "RuleName": {
      "Type": "String",
      "Default": "mytest"
    },
    "EventTypeList": {
      "Type": "Json",
      "Default": [
        "*"
      ]
    },
    "LevelList": {
      "Type": "Json",
      "Default": [
        "WARN"
      ]
    }
  },
  "Resources": {
    "EventRule": {
      "Type": "ALIYUN::CMS::EventRule",
      "Properties": {
        "RuleName": {
          "Ref": "RuleName"
        },
        "EventPattern": [
          {
            "EventTypeList": {
              "Ref": "EventTypeList"
            },
            "LevelList": {
              "Ref": "LevelList"
            },
            "Product": "ADS"
          }
        ]
      }
    }
  },
  "Outputs": {
    "Data": {
      "Value": {
        "Fn::GetAtt": [
          "EventRule",
          "Data"
        ]
      }
    }
  }
}
```
