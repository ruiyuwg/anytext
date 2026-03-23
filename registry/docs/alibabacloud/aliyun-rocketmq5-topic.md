ALIYUN::ROCKETMQ5::Topic is used to create a topic for a Message Queue for Apache RocketMQ V5.0 instance.

## Syntax

```
{
  "Type": "ALIYUN::ROCKETMQ5::Topic",
  "Properties": {
    "InstanceId": String,
    "MessageType": String,
    "Remark": String,
    "TopicName": String
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

InstanceId

String

Yes

No

The ID of the instance to which the topic belongs.

None.

MessageType

String

Yes

No

The message type of the topic that you want to create.

Valid values:

-   TRANSACTION: transactional message
-   FIFO: ordered message
-   DELAY: scheduled or delayed message
-   NORMAL: normal message

**Note** The type of the topic and the message must be the same. For example, if you create a topic of the ordered message type, you can use the topic to send and receive only ordered messages.

Remark

String

No

Yes

The description of the topic.

None.

TopicName

String

Yes

No

The name of the topic.

The name is used to identify the topic and is globally unique.

The name is subjected to the following limits:

-   Character limit: The name can contain letters, digits, underscores (\_), hyphens (-), and percent signs (%).
-   Length limit: The name must be 1 to 60 characters in length.

## Return values

Fn::GetAtt

-   InstanceId: the ID of the instance to which the topic belongs.
-   MessageType: the message type of the topic.
-   TopicName: the name of the topic.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      InstanceId:
        Type: String
        Description: The ID of the instance.
    Resources:
      Topic:
        Type: ALIYUN::ROCKETMQ5::Topic
        Properties:
          InstanceId:
            Ref: InstanceId
          MessageType: NORMAL
          TopicName: TestTopic
    Outputs:
      InstanceId:
        Description: The ID of the instance.
        Value:
          Fn::GetAtt:
            - Topic
            - InstanceId
      MessageType:
        Description: The type of the message.
        Value:
          Fn::GetAtt:
            - Topic
            - MessageType
      TopicName:
        Description: The name of the topic.
        Value:
          Fn::GetAtt:
            - Topic
            - TopicName
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "InstanceId": {
          "Type": "String",
          "Description": "The ID of the instance."
        }
      },
      "Resources": {
        "Topic": {
          "Type": "ALIYUN::ROCKETMQ5::Topic",
          "Properties": {
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "MessageType": "NORMAL",
            "TopicName": "TestTopic"
          }
        }
      },
      "Outputs": {
        "InstanceId": {
          "Description": "The ID of the instance.",
          "Value": {
            "Fn::GetAtt": [
              "Topic",
              "InstanceId"
            ]
          }
        },
        "MessageType": {
          "Description": "The type of the message.",
          "Value": {
            "Fn::GetAtt": [
              "Topic",
              "MessageType"
            ]
          }
        },
        "TopicName": {
          "Description": "The name of the topic.",
          "Value": {
            "Fn::GetAtt": [
              "Topic",
              "TopicName"
            ]
          }
        }
      }
    }
    ```
