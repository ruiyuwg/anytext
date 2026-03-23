ALIYUN::EventBridge::Rule is used to create an event rule for an event bus.

## Syntax

```
{
  "Type": "ALIYUN::EventBridge::Rule",
  "Properties": {
    "Status": String,
    "EventBusName": String,
    "FilterPattern": Map,
    "Description": String,
    "Targets": List,
    "RuleName": String
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

EventBusName

String

Yes

No

The name of the event bus.

For more information, refer to [Limits](/help/en/eventbridge/product-overview/limits#concept-337381).

FilterPattern

Map

Yes

Yes

The event pattern.

The property value must be in the JSON format. Valid values:

-   stringEqual pattern
    
-   stringExpression pattern
    

**Note**

You can have up to 5 event patterns.

Targets

List

Yes

Yes

The event targets to which events are delivered.

For more information, refer to [Targets properties](#section-s23-uur-88l).

RuleName

String

Yes

No

The name of the event rule.

For more information, refer to [Limits](/help/en/eventbridge/product-overview/limits#concept-337381).

Status

String

No

Yes

The status of the rule.

Valid values:

-   ENABLE (default)
    
-   DISABLE
    

Description

String

No

Yes

The description of the rule.

None

## Targets syntax

```
"Targets": [
  {
    "PushRetryStrategy": String,
    "Type": String,
    "Endpoint": String,
    "Id": String,
    "ParamList": List,
    "DeadLetterQueue": Map,
    "ConcurrentConfig": Map,
    "ErrorsTolerance": String
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

Endpoint

String

Yes

No

The endpoint of the event target.

None

Id

String

Yes

No

The custom ID of the target.

None

ParamList

List

Yes

No

The parameters to be passed by events.

For more information, refer to [ParamList properties](#section-v1v-hy6-dph).

Type

String

Yes

No

The type of the target.

None

PushRetryStrategy

String

No

No

The retry policy for pushing events.

Valid values:

-   BACKOFF\_RETRY: A failed event can be retried 3 times. The interval between two consecutive retries is a random value between 10 and 20 seconds.
    
-   EXPONENTIAL\_DECAY\_RETRY: A failed event can be retried 176 times. The interval between two consecutive retries exponentially increases to a maximum of 512 seconds. The total amount of time that can be used for retries is 1 day.
    
    Retry intervals (in seconds) are as follows: 1, 2, 4, 8, 16, 32, 64, 128, 256, and 512 (repeated 167 times for the 512-second interval).
    

DeadLetterQueue

Map

No

No

The dead-letter queue.

Events that are not processed or exceed the maximum number of retry attempts will be written to a dead-letter queue.

The following queue types support the dead-letter queue feature: Alibaba Cloud RocketMQ, Simple Message Queue, ApsaraMQ for Kafka and EventBridge. For more information, refer to [DeadLetterQueue properties](#789ed5d600ev7).

ConcurrentConfig

Map

No

No

The concurrency configuration.

For more information, refer to [ConcurrentConfig properties](#938f61652fs6f).

ErrorsTolerance

String

No

No

The error tolerance policy.

Valid values:

-   ALL: allows error tolerance. If an error occurs, it does not block event processing. If the email cannot be delivered after reaching the maximum number of retries specified by the retry policy, it will either be sent to a dead-letter queue or discarded, depending on your configuration.
    
-   NONE: error tolerance not allowed. If an error occurs and the message cannot be delivered after the maximum retry attempts, event processing will be blocked.
    

## DeadLetterQueue syntax

```
"DeadLetterQueue": 
  {
    "Arn": String
  }
```

## DeadLetterQueue properties

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

The Alibaba Cloud Resource Name (ARN) of the dead-letter queue.

Events that are not processed or exceed the maximum retry attempts will be written to a dead-letter queue.

The following queue types support the ARN feature: Alibaba Cloud RocketMQ and Simple Message Queue.

## ConcurrentConfig syntax

```
"ConcurrentConfig": 
  {
    "Concurrency": Integer
  }
```

## ConcurrentConfig properties

**Property**

**Type**

**Required**

**Allow Updates**

**Description**

**Constraint**

Concurrency

Integer

Yes

No

The number of concurrent connections.

None

## ParamList syntax

```
"ParamList": [
  {
    "Form": String,
    "Value": String,
    "ResourceKey": String,
    "Template": String
  }
]
```

## ParamList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Form

String

Yes

No

The form of the event transformation.

For more information, refer to [Event target parameters](/help/en/eventbridge/user-guide/event-target-parameters#task-1961616).

ResourceKey

String

Yes

No

The resource key of the event transformation.

For more information, refer to [Event target parameters](/help/en/eventbridge/user-guide/event-target-parameters#task-1961616).

Value

String

Yes

No

The value of the event transformation.

None

Template

String

No

No

Template style.

None

## Response parameters

Fn::GetAtt

-   EventBusName: the name of the event bus.
    
-   RuleARN: the Alibaba Cloud Resource Name (ARN) of the event rule. The ARN can be used for authorization.
    
-   RuleName: the name of the event rule.
    

## Example

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  EventBusName:
    Type: String
    Description: The name of the event bus.
  Targets:
    Type: Json
    Description: The event target to which events are delivered.
    MinLength: 1
    MaxLength: 5
  RuleName:
    Type: String
    Description: The name of the event rule.
  FilterPattern:
    Required: true
    Type: Json
    Description:
      en: The event pattern, in the JSON format.
    Label:
      zh-cn: event pattern
      en: FilterPattern
Resources:
  Rule:
    Type: ALIYUN::EventBridge::Rule
    Properties:
      FilterPattern:
        Ref: FilterPattern
      EventBusName:
        Ref: EventBusName
      Targets:
        Ref: Targets
      RuleName:
        Ref: RuleName
Outputs:
  EventBusName:
    Description: The name of the event bus.
    Value:
      Fn::GetAtt:
        - Rule
        - EventBusName
  RuleARN:
    Description: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
    Value:
      Fn::GetAtt:
        - Rule
        - RuleARN
  RuleName:
    Description: The name of the event rule.
    Value:
      Fn::GetAtt:
        - Rule
        - RuleName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EventBusName": {
      "Type": "String",
      "Description": "The name of the event bus."
    },
    "Targets": {
      "Type": "Json",
      "Description": "The event target to which events are delivered.",
      "MinLength": 1,
      "MaxLength": 5
    },
    "RuleName": {
      "Type": "String",
      "Description": "The name of the event rule."
    },
    "FilterPattern": {
      "Required": true,
      "Type": "Json",
      "Description": {
        "en": "The event pattern, in the JSON format."
      },
      "Label": {
        "zh-cn": "event pattern",
        "en": "FilterPattern"
      }
    }
  },
  "Resources": {
    "Rule": {
      "Type": "ALIYUN::EventBridge::Rule",
      "Properties": {
        "FilterPattern": {
          "Ref": "FilterPattern"
        },
        "EventBusName": {
          "Ref": "EventBusName"
        },
        "Targets": {
          "Ref": "Targets"
        },
        "RuleName": {
          "Ref": "RuleName"
        }
      }
    }
  },
  "Outputs": {
    "EventBusName": {
      "Description": "The name of the event bus.",
      "Value": {
        "Fn::GetAtt": [
          "Rule",
          "EventBusName"
        ]
      }
    },
    "RuleARN": {
      "Description": "The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.",
      "Value": {
        "Fn::GetAtt": [
          "Rule",
          "RuleARN"
        ]
      }
    },
    "RuleName": {
      "Description": "The name of the event rule.",
      "Value": {
        "Fn::GetAtt": [
          "Rule",
          "RuleName"
        ]
      }
    }
  }
}
```
