DATASOURCE::ROCKETMQ5::Topic is used to query the information about a topic.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ5::Topic",
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

Yes

Yes

The ID of the instance to which the topic belongs.

None.

TopicName

String

Yes

Yes

The name of the topic.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Status: the state of the topic.
    
-   InstanceId: the ID of the instance to which the topic belongs.
    
-   CreateTime: the time when the topic was created.
    
-   UpdateTime: the time when the topic was last modified.
    
-   MessageType: the message type of the topic.
    
-   Remark: the remarks on the topic.
    
-   TopicName: the name of the topic.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the instance to which the topic belongs.
    Required: true
  TopicName:
    Type: String
    Description:
      en: The name of the topic.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ROCKETMQ5::Topic
    Properties:
      InstanceId:
        Ref: InstanceId
      TopicName:
        Ref: TopicName
Outputs:
  Status:
    Description: The state of the topic.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Status
  InstanceId:
    Description: The ID of the RocketMQ instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceId
  CreateTime:
    Description: The time when the topic was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  UpdateTime:
    Description: The time when the topic was last updated.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UpdateTime
  MessageType:
    Description: The message type of the topic.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MessageType
  Remark:
    Description: The remarks on the topic.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Remark
  TopicName:
    Description: The name of the topic.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TopicName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the instance to which the topic belongs."
      },
      "Required": true
    },
    "TopicName": {
      "Type": "String",
      "Description": {
        "en": "The name of the topic."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ5::Topic",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "TopicName": {
          "Ref": "TopicName"
        }
      }
    }
  },
  "Outputs": {
    "Status": {
      "Description": "The state of the topic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the topic was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the topic was last updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UpdateTime"
        ]
      }
    },
    "MessageType": {
      "Description": "The message type of the topic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MessageType"
        ]
      }
    },
    "Remark": {
      "Description": "The remarks on the topic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Remark"
        ]
      }
    },
    "TopicName": {
      "Description": "The name of the topic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TopicName"
        ]
      }
    }
  }
}
                        
```
