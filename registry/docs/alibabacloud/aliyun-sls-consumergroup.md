ALIYUN::SLS::ConsumerGroup is used to create a consumer group for a Logstore.

## Syntax

```
{
  "Type": "ALIYUN::SLS::ConsumerGroup",
  "Properties": {
    "ConsumerGroup": String,
    "Logstore": String,
    "Order": Boolean,
    "Project": String,
    "Timeout": Integer
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

ConsumerGroup

String

Yes

No

The name of the consumer group.

The name must be unique in a project.

Logstore

String

Yes

No

The Logstore name.

None.

Order

Boolean

Yes

Yes

Specifies whether to consume data in sequence.

Valid values:

-   true: consumes data in sequence.
    
    -   In a shard, data is consumed in ascending order based on the value of the reserved field \*\*\_\_tag\_\_:\_\_receive\_time\_\_\*\*.
        
    -   If a shard is split, the data in the original shard is consumed and then the data in the new shards is consumed.
        
    -   If shards are merged, the data in the original shards is consumed and then the data in the new shard is consumed.
        
-   false: does not consume data in sequence. The data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, the data in the new shard is immediately consumed.
    

Project

String

Yes

No

The project name.

None.

Timeout

Integer

Yes

Yes

The timeout period.

If Simple Log Service (SLS) does not receive heartbeats from a consumer within the timeout period, SLS deletes the consumer. Unit: seconds.

## Return values

Fn::GetAtt

-   Project: the project name.
    
-   Logstore: the Logstore name.
    
-   ConsumerGroup: the name of the consumer group.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Order:
    Type: Boolean
    Description:
      en: |-
        Specifies whether to consume data in sequence. Valid values:
        true
        In a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.
        If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
        If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
        false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
    Required: true
  Project:
    Type: String
    Description:
      en: The name of the project.
    Required: true
  Logstore:
    Type: String
    Description:
      en: The name of the Logstore.
    Required: true
  Timeout:
    Type: Number
    Description:
      en: 'The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.'
    Required: true
    MinValue: 1
    MaxValue: 4294967295
  ConsumerGroup:
    Type: String
    Description:
      en: The name of the consumer group. The name must be unique in a project.
    Required: true
Resources:
  SLSConsumerGroup:
    Type: ALIYUN::SLS::ConsumerGroup
    Properties:
      Order:
        Ref: Order
      Project:
        Ref: Project
      Logstore:
        Ref: Logstore
      Timeout:
        Ref: Timeout
      ConsumerGroup:
        Ref: ConsumerGroup
Outputs:
  Project:
    Description: The name of the project to which the logstore belongs.
    Value:
      Fn::GetAtt:
        - SLSConsumerGroup
        - Project
  Logstore:
    Description: The name of the logstore to which this consumer group belongs.
    Value:
      Fn::GetAtt:
        - SLSConsumerGroup
        - Logstore
  ConsumerGroup:
    Description: The name of the consumer group.
    Value:
      Fn::GetAtt:
        - SLSConsumerGroup
        - ConsumerGroup
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Order": {
      "Type": "Boolean",
      "Description": {
        "en": "Specifies whether to consume data in sequence. Valid values:\ntrue\nIn a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.\nIf a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.\nIf shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.\nfalse Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed."
      },
      "Required": true
    },
    "Project": {
      "Type": "String",
      "Description": {
        "en": "The name of the project."
      },
      "Required": true
    },
    "Logstore": {
      "Type": "String",
      "Description": {
        "en": "The name of the Logstore."
      },
      "Required": true
    },
    "Timeout": {
      "Type": "Number",
      "Description": {
        "en": "The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds."
      },
      "Required": true,
      "MinValue": 1,
      "MaxValue": 4294967295
    },
    "ConsumerGroup": {
      "Type": "String",
      "Description": {
        "en": "The name of the consumer group. The name must be unique in a project."
      },
      "Required": true
    }
  },
  "Resources": {
    "SLSConsumerGroup": {
      "Type": "ALIYUN::SLS::ConsumerGroup",
      "Properties": {
        "Order": {
          "Ref": "Order"
        },
        "Project": {
          "Ref": "Project"
        },
        "Logstore": {
          "Ref": "Logstore"
        },
        "Timeout": {
          "Ref": "Timeout"
        },
        "ConsumerGroup": {
          "Ref": "ConsumerGroup"
        }
      }
    }
  },
  "Outputs": {
    "Project": {
      "Description": "The name of the project to which the logstore belongs.",
      "Value": {
        "Fn::GetAtt": [
          "SLSConsumerGroup",
          "Project"
        ]
      }
    },
    "Logstore": {
      "Description": "The name of the logstore to which this consumer group belongs.",
      "Value": {
        "Fn::GetAtt": [
          "SLSConsumerGroup",
          "Logstore"
        ]
      }
    },
    "ConsumerGroup": {
      "Description": "The name of the consumer group.",
      "Value": {
        "Fn::GetAtt": [
          "SLSConsumerGroup",
          "ConsumerGroup"
        ]
      }
    }
  }
}
                        
```
