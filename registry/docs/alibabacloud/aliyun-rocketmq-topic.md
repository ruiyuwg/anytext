ALIYUN::ROCKETMQ::Topic is used to create a topic.

## Syntax

```
{
  "Type": "ALIYUN::ROCKETMQ::Topic",
  "Properties": {
    "InstanceId": String,
    "Topic": String,
    "Remark": String,
    "MessageType": Integer
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

The ID of the Message Queue for Apache RocketMQ instance in which you want to create a topic.

None.

Topic

String

Yes

No

The name of the topic.

The name must be 3 to 64 characters in length and cannot start with `CID` or `GID`. The name can contain letters, digits, hyphens (-), and underscores (\_).

If the instance in which you want to create the topic uses a namespace, the topic name must be unique in the instance. The topic name cannot be the same as an existing topic name or group ID in the instance. However, the topic name can be the same as a topic name or group ID in another instance.

If the instance in which you want to create the topic does not use a namespace, the topic name must be globally unique across instances and regions. The topic name cannot be the same as an existing topic name or group ID in Message Queue for Apache RocketMQ within your Alibaba Cloud account.

Remark

String

No

No

The description of the topic.

None.

MessageType

Integer

Yes

No

The message type of the topic.

Valid values:

-   0: normal message
-   1: partitionally ordered message
-   2: globally ordered message
-   4: transactional message
-   5: scheduled or delayed message

## Return values

Fn::GetAtt

-   InstanceId: the ID of the instance to which the topic belongs.
-   Topic: the name of the topic.
-   MessageType: the message type of the topic.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      InstanceId:
        Type: String
        Description: The ID of the topic instance.
    Resources:
      Topic:
        Type: ALIYUN::ROCKETMQ::Topic
        Properties:
          InstanceId:
            Ref: InstanceId
          Topic: test-topic
          MessageType: 0
    Outputs:
      InstanceId:
        Description: The ID of the instance.
        Value:
          Fn::GetAtt:
            - Topic
            - InstanceId
      Topic:
        Description: The name of the topic.
        Value:
          Fn::GetAtt:
            - Topic
            - Topic
      MessageType:
        Description: The type of the message.
        Value:
          Fn::GetAtt:
            - Topic
            - MessageType
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "InstanceId": {
          "Type": "String",
          "Description": "The ID of the topic instance."
        }
      },
      "Resources": {
        "Topic": {
          "Type": "ALIYUN::ROCKETMQ::Topic",
          "Properties": {
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "Topic": "test-topic",
            "MessageType": 0
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
        "Topic": {
          "Description": "The name of the topic.",
          "Value": {
            "Fn::GetAtt": [
              "Topic",
              "Topic"
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
        }
      }
    }
    ```
    

For more examples, visit [ROCKETMQ.json](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/ROCKETMQ/JSON/ROCKETMQ.json) and [ROCKETMQ.yml](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/ROCKETMQ/YAML/ROCKETMQ.yml). In the examples, the ALIYUN::ROCKETMQ::Instance, ALIYUN::ROCKETMQ::Group, and ALIYUN::ROCKETMQ::Topic resource types are involved.
