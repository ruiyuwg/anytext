ALIYUN::AMQP::Queue is used to create a queue.

## Syntax

```
{
  "Type": "ALIYUN::AMQP::Queue",
  "Properties": {
    "DeadLetterExchange": String,
    "MaximumPriority": Number,
    "InstanceId": String,
    "ExclusiveState": Boolean,
    "DeadLetterRoutingKey": String,
    "VirtualHost": String,
    "MaxLength": Number,
    "AutoDeleteState": Boolean,
    "QueueName": String,
    "MessageTTL": Number,
    "AutoExpireState": Number
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

The instance ID.

None.

QueueName

String

Yes

No

The queue name.

When you specify the name, take note of the following items:

-   The name must be 1 to 255 characters in length and can contain only letters, digits, hyphens (-), underscores (\_), periods (.), number signs (#), forward slashes (/), and at signs (@).
    
-   After the queue is created, you cannot change the name of the queue. If you want to change the name, you must delete the queue and create a new queue.
    

VirtualHost

String

Yes

No

The vhost name.

The vhost name can contain only letters, digits, hyphens (-), underscores (\_), periods (.), number signs (#), forward slashes (/), and at signs (@).

The vhost name must be 1 to 255 characters in length.

AutoDeleteState

Boolean

No

No

Specifies whether to automatically delete the queue.

Valid values:

-   true: automatically deletes the queue.
    
    After the last subscription from consumers to the queue is canceled, the queue is automatically deleted.
    
-   false: does not automatically delete the queue.
    

AutoExpireState

Number

No

No

The period of time after which the queue expires.

If the queue is not accessed within the specified period of time, the queue is automatically deleted.

**Note**

You can use the feature that corresponds to this property only after you enable the feature. To use this feature, [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23).

DeadLetterExchange

String

No

No

The dead-letter exchange.

A dead-letter exchange is used to receive rejected messages.

If a consumer rejects a message that cannot be retried, ApsaraMQ for RabbitMQ routes the message to the specified dead-letter exchange. Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange for storage.

DeadLetterRoutingKey

String

No

No

The dead-letter routing key.

The key name can contain only letters, digits, hyphens (-), underscores (\_), periods (.), number signs (#), forward slashes (/), and at signs (@).

The key name must be 1 to 255 characters in length.

ExclusiveState

Boolean

No

No

Specifies whether the exchange is an exclusive exchange.

Valid values:

-   true: The exchange is an exclusive exchange.
    
    Only the connection that declares the exclusive exchange can use the exclusive exchange. After the connection is closed, the exclusive exchange is automatically deleted.
    
-   false: The exchange is not an exclusive exchange.
    

MaximumPriority

Number

No

No

Queue priorities are not supported.

None.

MaxLength

Number

No

No

The maximum number of messages in the queue.

This parameter is unavailable in the current version of ApsaraMQ for RabbitMQ.

If the maximum number of messages in the queue is exceeded, the earliest messages that are stored in the queue are deleted.

MessageTTL

Number

No

No

The time-to-live (TTL) of messages in the queue. Unit: milliseconds.

When you specify the message TTL, take note of the following items:

-   If the retention period of a message in the queue exceeds the message TTL, the message expires.
    
-   The value of this property must be a non-negative integer. The maximum value of this parameter is 86400. Unit: milliseconds. For example, if the message TTL is 1,000 milliseconds, the message can be retained for up to 1 second in the queue.
    

## Return values

Fn::GetAtt

QueueName: the queue name.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description: InstanceId
  VirtualHost:
    Type: String
    Description: The name of the virtual host.
  QueueName:
    Type: String
    Description: The name of the queue.
    MaxLength: 255
Resources:
  Queue:
    Type: ALIYUN::AMQP::Queue
    Properties:
      InstanceId:
        Ref: InstanceId
      VirtualHost:
        Ref: VirtualHost
      QueueName:
        Ref: QueueName
Outputs:
  QueueName:
    Description: The name of the queue.
    Value:
      Fn::GetAtt:
        - Queue
        - QueueName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "InstanceId"
    },
    "VirtualHost": {
      "Type": "String",
      "Description": "The name of the virtual host."
    },
    "QueueName": {
      "Type": "String",
      "Description": "The name of the queue.",
      "MaxLength": 255
    }
  },
  "Resources": {
    "Queue": {
      "Type": "ALIYUN::AMQP::Queue",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "VirtualHost": {
          "Ref": "VirtualHost"
        },
        "QueueName": {
          "Ref": "QueueName"
        }
      }
    }
  },
  "Outputs": {
    "QueueName": {
      "Description": "The name of the queue.",
      "Value": {
        "Fn::GetAtt": [
          "Queue",
          "QueueName"
        ]
      }
    }
  }
}
```
