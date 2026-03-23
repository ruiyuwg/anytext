ALIYUN::AMQP::Exchange is used to create an exchange.

## Syntax

```
{
  "Type": "ALIYUN::AMQP::Exchange",
  "Properties": {
    "InstanceId": String,
    "AlternateExchange": String,
    "Internal": Boolean,
    "VirtualHost": String,
    "AutoDeleteState": Boolean,
    "ExchangeName": String,
    "ExchangeType": String,
    "XDelayedType": String
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

AutoDeleteState

Boolean

Yes

No

Specifies whether to automatically delete the exchange.

Valid values:

-   true: When the last queue that is bound to the exchange is unbound, the exchange is automatically deleted.
    
-   false: When the last queue that is bound to the exchange is unbound, the exchange is not automatically deleted.
    

ExchangeName

String

Yes

No

The exchange name.

-   The name of an exchange must be 1 to 255 characters in length and can contain only letters, digits, hyphens (-), underscores (\_), periods (.), number signs (#), forward slashes (/), and at signs (@).
    
-   After an exchange is created, you cannot modify its name. If you want to modify the name of an exchange, delete the exchange and create a new exchange.
    

ExchangeType

String

Yes

No

The exchange type.

Valid values:

-   DIRECT: direct exchange. An exchange of this type routes a message to the queue whose binding key exactly matches the routing key of the message.
    
-   TOPIC: topic exchange. This type of exchange is similar to direct exchanges. An exchange of this type routes a message to one or more queues based on the results of fuzzy match or multi-condition match between the routing key of the message and the binding keys of the current exchange.
    
-   FANOUT: fanout exchange. An exchange of this type routes all received messages to all queues bound to this exchange. You can use a fanout exchange to broadcast messages.
    
-   HEADERS: headers exchange. This type of exchange is similar to direct exchanges. The only difference is that a headers exchange routes messages based on the headers attributes instead of routing keys. When you bind a headers exchange to a queue, you must configure binding attributes in the key-value pair format for the binding. When you send a message to a headers exchange, you must configure the headers attributes in the key-value pair format for the message. After a headers exchange receives a message, the exchange routes the message to bound queues based on the matching results between the headers attributes of the message and the binding attributes.
    

InstanceId

String

Yes

No

The instance ID.

None.

Internal

Boolean

Yes

No

Specifies whether the exchange is an internal exchange.

Valid values:

-   true
    
-   false
    

VirtualHost

String

Yes

No

The name of the vhost in which you want to create the exchange.

None.

AlternateExchange

String

No

No

The alternate exchange.

An alternate exchange is used to receive messages that fail to be routed to queues from the current exchange.

XDelayedType

String

No

No

The type of the exchange to which delayed messages are delivered.

You can use the x-delay header of a message to specify a period of time after which the message is delivered from an x-delayed-message exchange. The period of time is in milliseconds. The routing rule of an x-delayed-message exchange varies based on the exchange type specified by the XDelayedType property. Valid values:

-   **DIRECT**: delivers delayed messages to queues that are bound to a direct exchange.
    
-   **TOPIC**: delivers delayed messages to queues that are bound to a topic exchange.
    
-   **FANOUT**: delivers delayed messages to queues that are bound to a fanout exchange.
    
-   **HEADERS**: delivers delayed messages to queues that are bound to a headers exchange.
    
-   **X-JMS-TOPIC**: delivers delayed messages to queues that are bound to an x-jms-topic exchange.
    

## Return values

Fn::GetAtt

ExchangeName: the exchange name.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AutoDeleteState:
    AllowedValues:
    - 'True'
    - 'true'
    - 'False'
    - 'false'
    Description: 'Specifies whether the Auto Delete attribute is configured. Valid
      values:

      true: The Auto Delete attribute is configured. If the last queue that is bound
      to an exchange is unbound, the exchange is automatically deleted.

      false: The Auto Delete attribute is not configured. If the last queue that is
      bound to an exchange is unbound, the exchange is not automatically deleted.'
    Type: Boolean
  ExchangeName:
    Description: The name of the exchange.
    MaxLength: 255
    Type: String
  ExchangeType:
    AllowedValues:
    - FANOUT
    - DIRECT
    - TOPIC
    - HEADERS
    Description: 'The type of the exchange. Valid values:

      FANOUT: An exchange of this type routes all the received messages to all the
      queues bound to this exchange. You can use a fanout exchange to broadcast messages.

      DIRECT: An exchange of this type routes a message to the queue whose binding
      key is exactly the same as the routing key of the message.

      TOPIC: This type is similar to the direct exchange type. An exchange of this
      type routes a message to one or more queues based on the fuzzy match or multi-condition
      match result between the routing key of the message and the binding keys of
      the current exchange.

      HEADERS: Headers Exchange uses the Headers property instead of Routing Key for
      routing matching. When binding Headers Exchange and Queue, set the key-value
      pair of the binding property; when sending a message to the Headers Exchange,
      set the message''s Headers property key-value pair and use the message Headers
      The message is routed to the bound Queue by comparing the attribute key-value
      pair and the bound attribute key-value pair.'
    Type: String
  InstanceId:
    Description: InstanceId
    Type: String
  Internal:
    AllowedValues:
    - 'True'
    - 'true'
    - 'False'
    - 'false'
    Description: 'Specifies whether an exchange is an internal exchange. Valid values:

      false: The exchange is not an internal exchange.

      true: The exchange is an internal exchange.'
    Type: Boolean
  VirtualHost:
    Description: The name of the virtual host.
    Type: String
Resources:
  Exchange:
    Properties:
      AutoDeleteState:
        Ref: AutoDeleteState
      ExchangeName:
        Ref: ExchangeName
      ExchangeType:
        Ref: ExchangeType
      InstanceId:
        Ref: InstanceId
      Internal:
        Ref: Internal
      VirtualHost:
        Ref: VirtualHost
    Type: ALIYUN::AMQP::Exchange
Outputs:
  ExchangeName:
    Description: The name of the exchange.
    Value:
      Fn::GetAtt:
      - Exchange
      - ExchangeName
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
    "Internal": {
      "Type": "Boolean",
      "Description": "Specifies whether an exchange is an internal exchange. Valid values:\nfalse: The exchange is not an internal exchange.\ntrue: The exchange is an internal exchange.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "VirtualHost": {
      "Type": "String",
      "Description": "The name of the virtual host."
    },
    "AutoDeleteState": {
      "Type": "Boolean",
      "Description": "Specifies whether the Auto Delete attribute is configured. Valid values:\ntrue: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.\nfalse: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "ExchangeName": {
      "Type": "String",
      "Description": "The name of the exchange.",
      "MaxLength": 255
    },
    "ExchangeType": {
      "Type": "String",
      "Description": "The type of the exchange. Valid values:\nFANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.\nDIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.\nTOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.\nHEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.",
      "AllowedValues": [
        "FANOUT",
        "DIRECT",
        "TOPIC",
        "HEADERS"
      ]
    }
  },
  "Resources": {
    "Exchange": {
      "Type": "ALIYUN::AMQP::Exchange",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "Internal": {
          "Ref": "Internal"
        },
        "VirtualHost": {
          "Ref": "VirtualHost"
        },
        "AutoDeleteState": {
          "Ref": "AutoDeleteState"
        },
        "ExchangeName": {
          "Ref": "ExchangeName"
        },
        "ExchangeType": {
          "Ref": "ExchangeType"
        }
      }
    }
  },
  "Outputs": {
    "ExchangeName": {
      "Description": "The name of the exchange.",
      "Value": {
        "Fn::GetAtt": [
          "Exchange",
          "ExchangeName"
        ]
      }
    }
  }
}
```
