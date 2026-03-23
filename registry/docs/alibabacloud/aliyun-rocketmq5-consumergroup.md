ALIYUN::ROCKETMQ5::ConsumerGroup is used to create a consumer group in ApsaraMQ for RocketMQ 5.0.

## Syntax

```
{
  "Type": "ALIYUN::ROCKETMQ5::ConsumerGroup",
  "Properties": {
    "ConsumerGroupId": String,
    "InstanceId": String,
    "ConsumeRetryPolicy": Map,
    "DeliveryOrderType": String,
    "Remark": String
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

ConsumerGroupId

String

Yes

No

The ID of the consumer group.

The ID is globally unique and is used to identify a consumer group.

The ID is subject to the following limits:

-   Character limit: The ID can contain letters, digits, underscores (\_), hyphens (-), and percent signs (%).
    
-   Length limit: The ID must be 1 to 60 characters in length.
    

InstanceId

String

Yes

No

The ID of the instance in which you want to create the consumer group.

None.

ConsumeRetryPolicy

Map

Yes

Yes

The consumption retry policy of the consumer group.

None.

DeliveryOrderType

String

Yes

Yes

The delivery order type of the consumer group.

Valid values:

-   Concurrently: concurrent.
    
-   Orderly: ordered.
    

Remark

String

No

Yes

The remarks on the consumer group.

None.

## ConsumeRetryPolicy syntax

```
"ConsumeRetryPolicy": {
  "RetryPolicy": String,
  "MaxRetryTimes": Integer,
  "DeadLetterTargetTopic": String
}
```

## ConsumeRetryPolicy properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RetryPolicy

String

Yes

Yes

The type of the retry policy.

Valid values:

-   FixedRetryPolicy: The system implements the retry policy at a fixed interval.
    
-   DefaultRetryPolicy: The system implements the retry policy at an incremental interval.
    

MaxRetryTimes

Integer

No

Yes

The maximum number of retries.

None.

DeadLetterTargetTopic

String

No

Yes

The dead-letter topic.

If a consumer still fails to consume a message after the maximum number of retries specified for the message is reached, the message is delivered to the dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/developer-reference/consumption-retries).

## Return values

Fn::GetAtt

-   ConsumerGroupId: the ID of the consumer group.
    
-   InstanceId: the ID of the instance in which the consumer group is created.
    
-   DeliveryOrderType: the delivery order type of the consumer group.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ConsumerGroupId:
    Type: String
    Description: |-
      The ID of the consumer group to be created. Used to identify consumer groups, globally unique.
      The value description is as follows:
      Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
      Length limit: 1-60 characters.
    MinLength: 1
    MaxLength: 60
  InstanceId:
    Type: String
    Description: The ID of the instance.
Resources:
  ConsumerGroup:
    Type: ALIYUN::ROCKETMQ5::ConsumerGroup
    Properties:
      ConsumerGroupId:
        Ref: ConsumerGroupId
      InstanceId:
        Ref: InstanceId
      ConsumeRetryPolicy:
        RetryPolicy: DefaultRetryPolicy
        MaxRetryTimes: 5
      DeliveryOrderType: Concurrently
Outputs:
  ConsumerGroupId:
    Description: The ID of the consumer group.
    Value:
      Fn::GetAtt:
        - ConsumerGroup
        - ConsumerGroupId
  InstanceId:
    Description: The ID of the instance.
    Value:
      Fn::GetAtt:
        - ConsumerGroup
        - InstanceId
  DeliveryOrderType:
    Description: Delivery sequence of consumer group.
    Value:
      Fn::GetAtt:
        - ConsumerGroup
        - DeliveryOrderType
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ConsumerGroupId": {
      "Type": "String",
      "Description": "The ID of the consumer group to be created. Used to identify consumer groups, globally unique.\nThe value description is as follows:\nCharacter limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).\nLength limit: 1-60 characters.",
      "MinLength": 1,
      "MaxLength": 60
    },
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the instance."
    }
  },
  "Resources": {
    "ConsumerGroup": {
      "Type": "ALIYUN::ROCKETMQ5::ConsumerGroup",
      "Properties": {
        "ConsumerGroupId": {
          "Ref": "ConsumerGroupId"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "ConsumeRetryPolicy": {
          "RetryPolicy": "DefaultRetryPolicy",
          "MaxRetryTimes": 5
        },
        "DeliveryOrderType": "Concurrently"
      }
    }
  },
  "Outputs": {
    "ConsumerGroupId": {
      "Description": "The ID of the consumer group.",
      "Value": {
        "Fn::GetAtt": [
          "ConsumerGroup",
          "ConsumerGroupId"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ConsumerGroup",
          "InstanceId"
        ]
      }
    },
    "DeliveryOrderType": {
      "Description": "Delivery sequence of consumer group.",
      "Value": {
        "Fn::GetAtt": [
          "ConsumerGroup",
          "DeliveryOrderType"
        ]
      }
    }
  }
}
```
