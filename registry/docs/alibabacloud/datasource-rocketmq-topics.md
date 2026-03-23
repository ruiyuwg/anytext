DATASOURCE::ROCKETMQ::Topics is used to query topics on an ApsaraMQ for RocketMQ instance.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ::Topics",
  "Properties": {
    "InstanceId": String,
    "TopicName": String,
    "RefreshOptions": String
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

InstanceId

String

No

Yes

The ID of the instance that contains the topic.

None.

TopicName

String

No

Yes

The topic name.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Topics: details of the topics.
    
-   TopicNames: the names of the topics.
    

**Property**

**Type**

**Description**

**Constraint**

TopicNames

List

Details of the topics.

None.

Topics

List

The names of the topics.

None.

Remark

string

The description of the topic.

None.

Tags

Map

The tags that are added to the topic.

Example:

```
[
            {
              "Key": "CartService",
              "Value": "SrviceA"
            }
          ]
```

InstanceId

string

The ID of the instance that contains the topic.

None.

RelationName

string

The relationship between the current account and the topic.

Valid values:

-   The current account is the owner of the topic.
    
-   The current account can subscribe to the topic.
    
-   The current account can publish messages to the topic.
    
-   The current account can publish messages to and subscribe to the topic.
    

MessageType

Number

The message type of the topic.

Valid values:

-   0: normal message
    
-   1: partitionally ordered message
    
-   2: globally ordered message
    
-   4: transactional message
    
-   5: scheduled or delayed messages
    

CreateTime

string

The time when the topic was created.

None.

IndependentNaming

boolean

Indicates whether the instance that contains the topic has a separate namespace.

Valid values:

-   true: The instance has a separate namespace. Resource names must be unique within an instance but can be the same across different instances.
    
-   false: The instance does not have a separate namespace. Resource names must be globally unique within and across all instances.
    

Relation

integer

The code of the relationship between the current account and the topic.

Valid values:

-   1: The current account is the owner of the topic.
    
-   2: The current account can publish messages to the topic.
    
-   4: The current account can subscribe to the topic.
    
-   6: The current account can publish messages to and subscribe to the topic.
    

Owner

string

The ID of the topic owner.

None.

TopicName

string

The topic name.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ROCKETMQ::Topics
    Properties:
      TopicName: DemoTopic
Outputs:
  Topics:
    Description: The list of topics.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Topics
  TopicNames:
    Description: The list of topic names.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TopicNames
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ::Topics",
      "Properties": {
        "TopicName": "DemoTopic"
      }
    }
  },
  "Outputs": {
    "Topics": {
      "Description": "The list of topics.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Topics"
        ]
      }
    },
    "TopicNames": {
      "Description": "The list of topic names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TopicNames"
        ]
      }
    }
  }
}
```
