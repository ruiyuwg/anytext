DATASOURCE::KAFKA::Topic is used to query the information about a topic.

## Syntax

```
{
  "Type": "DATASOURCE::KAFKA::Topic",
  "Properties": {
    "InstanceId": String,
    "Topic": String,
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

Topic

String

Yes

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

-   PartitionNum: the number of partitions in the topic.
    
-   CompactTopic: the log cleanup policy. This property is returned if **LocalTopic** is set to **true**.
    
-   InstanceId: the instance ID.
    
-   CreateTime: the time when the topic is created. Unit: milliseconds.
    
-   StatusName: the status of the service.
    
-   TopicStatus: the status of the topic.
    
-   Topic: the topic name.
    
-   LocalTopic: the storage engine of the topic.
    
-   Tags: the tags.
    
-   Remark: the remarks.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: Resource id.
    Required: true
    Type: String
  Topic:
    Description:
      en: Topic Name.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      InstanceId:
        Ref: InstanceId
      Topic:
        Ref: Topic
    Type: DATASOURCE::KAFKA::Topic
Outputs:
  CompactTopic:
    Description: Can log merge.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CompactTopic
  CreateTime:
    Description: Creation time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CreateTime
  InstanceId:
    Description: Resource id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceId
  LocalTopic:
    Description: Whether to store locally.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - LocalTopic
  PartitionNum:
    Description: Number of partitions.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PartitionNum
  Remark:
    Description: Remarks.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Remark
  StatusName:
    Description: Meaning of status value.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StatusName
  Tags:
    Description: The tag of the kafka console, which is used to group instance,topic,
      and consumption.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Tags
  Topic:
    Description: Topic Name.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Topic
  TopicStatus:
    Description: The Topic status.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - TopicStatus
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "Resource id."
      },
      "Required": true
    },
    "Topic": {
      "Type": "String",
      "Description": {
        "en": "Topic Name."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::KAFKA::Topic",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "Topic": {
          "Ref": "Topic"
        }
      }
    }
  },
  "Outputs": {
    "PartitionNum": {
      "Description": "Number of partitions.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PartitionNum"
        ]
      }
    },
    "CompactTopic": {
      "Description": "Can log merge.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CompactTopic"
        ]
      }
    },
    "InstanceId": {
      "Description": "Resource id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "CreateTime": {
      "Description": "Creation time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "StatusName": {
      "Description": "Meaning of status value.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StatusName"
        ]
      }
    },
    "TopicStatus": {
      "Description": "The Topic status.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TopicStatus"
        ]
      }
    },
    "Topic": {
      "Description": "Topic Name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Topic"
        ]
      }
    },
    "LocalTopic": {
      "Description": "Whether to store locally.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LocalTopic"
        ]
      }
    },
    "Tags": {
      "Description": "The tag of the kafka console, which is used to group instance,topic, and consumption.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "Remark": {
      "Description": "Remarks.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Remark"
        ]
      }
    }
  }
}
                        
```
