ALIYUN::KAFKA::Topic is used to create a topic.

## Syntax

```
{
  "Type": "ALIYUN::KAFKA::Topic",
  "Properties": {
    "InstanceId": String,
    "Topic": String,
    "Remark": String,
    "PartitionNum": Integer,
    "ReplicationFactor": Integer,
    "LocalTopic": Boolean,
    "CompactTopic": Boolean,
    "Config": Map,
    "MinInsyncReplicas": Integer,
    "Tags": List
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

No

The ID of the instance.

None.

Topic

String

Yes

No

The name of the topic.

The name must be 3 to 64 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-).

**Note**

The name cannot be modified after the topic is created.

Remark

String

Yes

No

The description of the topic.

The description must be 3 to 64 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-).

PartitionNum

Integer

No

No

The number of partitions in the topic.

Valid values: 1 to 48.

To reduce the risk of data skew, we recommend that you set the number of partitions to a multiple of 6.

ReplicationFactor

Integer

No

No

The number of replicas of the topic.

This property is valid if the LocalTopic property is set to true.

Valid values: 1 to 3.

**Note**

If you set this property to 1, the risk of data loss increases. Proceed with caution.

LocalTopic

Boolean

No

No

Specifies whether the topic uses local storage.

Valid values:

-   false: The topic uses cloud storage.
    
-   true: The topic uses local storage.
    

CompactTopic

Boolean

No

No

Specifies whether the topic uses the log compaction policy.

This property is valid if the LocalTopic property is set to true.

Valid values:

-   false: The topic uses the message cleanup policy. If the system has sufficient disk space, messages are retained for the maximum retention period. The system considers disk space to be insufficient if the disk usage exceeds 85%. If disk space is insufficient, the system deletes messages starting from the earliest stored message to ensure service availability.
    
-   true: The topic uses the log compaction policy. If different messages share the same key, the message that has the latest key value is retained.
    

Config

Map

No

No

The additional configurations.

This property is valid if the LocalTopic property is set to true.

Sample value: `{"replications": 3}`. The sample value indicates that the number of topic replicas is 3. The value of the replications field ranges from 1 to 3.

MinInsyncReplicas

Integer

No

No

The minimum number of in-sync replicas (ISRs).

This property is valid if the LocalTopic property is set to true.

Valid values: 1 to 3. The value must be smaller than the number of topic replicas.

Tags

List

No

Yes

The tags of the topic.

For more information, see [Tags properties](#section-kqg-p7x-yw7).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The key of the tag.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The tag value must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   InstanceId: the ID of the instance.
    
-   Topic: the name of the topic.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test create Kafka Topic
Parameters:
  InstanceId:
    Type: String
    Description: Kafka Instance Id
    Default: alikafka_****
  Topic:
    Type: String
    Description: |-
      The name of the topic. The value of this parameter must meet the following requirements:
      The name can only contain letters, digits, hyphens (-), and underscores (_).
      The name must be 3 to 64 characters in length, and will be automatically truncated
      if it contains more characters.
      The name cannot be modified after being created.
    Default: myTopic
  Remark:
    Type: String
    Description: |-
      The description of the topic. The value of this parameter must meet the following
      requirements:
      The value can only contain letters, digits, hyphens (-), and underscores (_).
      The value must be 3 to 64 characters in length.
    Default: test
Resources:
  Topic:
    Type: ALIYUN::KAFKA::Topic
    Properties:
      InstanceId:
        Ref: InstanceId
      Topic:
        Ref: TopicName
      Remark:
        Ref: Remark
Outputs:
  TopicName:
    Value:
      Fn::GetAtt:
        - Topic
        - Topic
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test create Kafka Topic",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "Kafka Instance Id",
      "Default": "alikafka_****"
    },
    "Topic": {
      "Type": "String",
      "Description": "The name of the topic. The value of this parameter must meet the following requirements:\nThe name can only contain letters, digits, hyphens (-), and underscores (_).\nThe name must be 3 to 64 characters in length, and will be automatically truncated\nif it contains more characters.\nThe name cannot be modified after being created.",
      "Default": "myTopic"
    },
    "Remark": {
      "Type": "String",
      "Description": "The description of the topic. The value of this parameter must meet the following\nrequirements:\nThe value can only contain letters, digits, hyphens (-), and underscores (_).\nThe value must be 3 to 64 characters in length.",
      "Default": "test"
    }
  },
  "Resources": {
    "Topic": {
      "Type": "ALIYUN::KAFKA::Topic",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "Topic": {
          "Ref": "TopicName"
        },
        "Remark": {
          "Ref": "Remark"
        }
      }
    }
  },
  "Outputs": {
    "TopicName": {
      "Value": {
        "Fn::GetAtt": [
          "Topic",
          "Topic"
        ]
      }
    }
  }
}
```
