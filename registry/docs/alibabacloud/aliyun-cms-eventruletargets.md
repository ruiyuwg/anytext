ALIYUN::CMS::EventRuleTargets is used to add or change the recipients to which alert notifications are sent based on an event-triggered alert rule.

## Syntax

```
{
  "Type": "ALIYUN::CMS::EventRuleTargets",
  "Properties": {
    "FcParameters": List,
    "WebhookParameters": List,
    "MnsParameters": List,
    "ContactParameters": List,
    "RuleName": String,
    "SlsParameters": List
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

RuleName

String

Yes

No

The name of the event-triggered alert rule.

None

ContactParameters

List

No

Yes

The contact properties.

For more information, see [ContactParameters properties](#section-jc0-omu-zdi).

FcParameters

List

No

Yes

The Function Compute properties.

You can specify up to five properties.

For more information, see [FcParameters properties](#section-j2r-zju-rgp).

MnsParameters

List

No

Yes

The Message Service (MNS) properties.

You can specify up to five properties.

For more information, see [MnsParameters properties](#section-1c6-h1c-atl).

SlsParameters

List

No

Yes

The Simple Log Service properties.

You can specify up to five properties.

For more information, see [SlsParameters properties](#section-skk-awy-dwl).

WebhookParameters

List

No

Yes

The webhook properties.

You can specify up to five properties.

For more information, see [WebhookParameters properties](#section-hf2-7jv-68i).

## FcParameters syntax

```
"FcParameters": [
  {
    "Region": String,
    "ServiceName": String,
    "Id": String,
    "FunctionName": String
  }
]
```

## FcParameters properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

FunctionName

String

No

Yes

The name of the function.

None

Id

String

No

Yes

The ID of the alert contact who you want to add or change.

None

Region

String

No

Yes

The region of Function Compute.

None

ServiceName

String

No

Yes

The name of the service in Function Compute.

None

## WebhookParameters syntax

```
"WebhookParameters": [
  {
    "Url": String,
    "Protocol": String,
    "Id": String,
    "Method": String
  }
]
```

## WebhookParameters properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Id

String

No

Yes

The ID of the alert contact who you want to add or change.

None

Method

String

No

Yes

The request method of the HTTP callback.

Valid values:

-   GET
    
-   POST
    

Protocol

String

No

Yes

The name of the protocol.

None

Url

String

No

Yes

The URL of the callback.

None

## MnsParameters syntax

```
"MnsParameters": [
  {
    "Queue": String,
    "Region": String,
    "Id": String
  }
]
```

## MnsParameters properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Id

String

No

Yes

The ID of the alert contact who you want to add or change.

None

Queue

String

No

Yes

The name of the queue.

None

Region

String

No

Yes

The region of MNS.

None

## ContactParameters syntax

```
"ContactParameters": [
  {
    "ContactGroupName": String,
    "Id": String,
    "Level": String
  }
]
```

## ContactParameters properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ContactGroupName

String

No

Yes

The name of the alert contact group.

None

Id

String

No

Yes

The ID of the alert contact who you want to add or change.

None

Level

String

No

Yes

The level of the alert notification.

Valid values:

-   2
    
-   3
    
-   4
    

Alert notifications are sent by using DingTalk and emails.

## SlsParameters syntax

```
"SlsParameters": [
  {
    "Project": String,
    "LogStore": String,
    "Region": String,
    "Id": String
  }
]
```

## SlsParameters properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Id

String

No

Yes

The ID of the alert contact who you want to add or change.

None

LogStore

String

No

Yes

The name of the Logstore in Simple Log Service.

None

Project

String

No

Yes

The name of the project in Simple Log Service.

None

Region

String

No

Yes

The region of Simple Log Service.

None

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test CMS EventRuleTargets
Parameters:
  ContactGroupName:
    Type: String
    Description: The name must be 2 to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a digit or a letter. 
    Label: Alert Contact
    ConstraintDescription: '[2, 128] English or Chinese characters'
    MinLength: 2
    MaxLength: 128
    Default: mytest
Resources:
  EventRuleTargets:
    Type: ALIYUN::CMS::EventRuleTargets
    Properties:
      ContactParameters:
        - ContactGroupName:
            Ref: ContactGroupName
          Id: '1'
          Level: '3'
      RuleName:
        Fn::Join:
          - _
          - - EventRule
            - Ref: ALIYUN::StackId
Outputs: {}
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test CMS EventRuleTargets",
  "Parameters": {
    "ContactGroupName": {
      "Type": "String",
      "Description": "The name must be 2 to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a digit or a letter.",
      "Label": "Alert Contact",
      "ConstraintDescription": "[2, 128] English or Chinese characters",
      "MinLength": 2,
      "MaxLength": 128,
      "Default": "mytest"
    }
  },
  "Resources": {
    "EventRuleTargets": {
      "Type": "ALIYUN::CMS::EventRuleTargets",
      "Properties": {
        "ContactParameters": [
          {
            "ContactGroupName": {
              "Ref": "ContactGroupName"
            },
            "Id": "1",
            "Level": "3"
          }
        ],
        "RuleName": {
          "Fn::Join": [
            "_",
            [
              "EventRule",
              {
                "Ref": "ALIYUN::StackId"
              }
            ]
          ]
        }
      }
    }
  },
  "Outputs": {
  }
}
```
