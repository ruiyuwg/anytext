ALIYUN::AMQP::Binding is used to bind a queue or an exchange to an exchange.

## Syntax

```
{
  "Type": "ALIYUN::AMQP::Binding",
  "Properties": {
    "Argument": String,
    "SourceExchange": String,
    "InstanceId": String,
    "BindingKey": String,
    "BindingType": String,
    "DestinationName": String,
    "VirtualHost": String
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

Argument

String

Yes

No

The key-value pairs that are configured for the headers attributes of a message.

One or more key-value pairs can be concatenated to configure the headers attributes of a message. The `x-match` attribute must be set to one of the following valid values. Custom values can be specified for other attributes.

Valid values of the `x-match` attribute:

-   all (default): A headers exchange routes a message to a queue only if all binding attributes of the queue, except for x-match, match the headers attributes of the message.
    
-   any: A headers exchange routes a message to a queue if one or more binding attributes of the queue, except for x-match, match the headers attributes of the message.
    

Separate the attributes with semicolons (;). Separate the key and value of an attribute with a colon (:). For example, the `x-match:all;type:report;format:pdf` parameter takes effect only for `Headers exchanges`.

BindingKey

String

Yes

No

The binding key.

If the source exchange is not a topic exchange, configure the binding key based on the following requirements:

-   The binding key can contain only letters, digits, hyphens (-), underscores (\_), periods (.), forward slashes (/), and at signs (@).
    
-   The binding key must be 1 to 255 characters in length.
    

If the source exchange is a topic exchange, configure the binding key based on the following requirements:

-   The binding key can contain letters, digits, hyphens (-), underscores (\_), asterisks (\*), periods (.), number signs (#), forward slashes (/), and at signs (@).
    
-   The binding key cannot start or end with a period (.). If a binding key starts with a number sign (#) or an asterisk (\*), the number sign (#) or asterisk (\*) must be followed by a period (.). If the binding key ends with a number sign (#) or an asterisk (\*), the number sign (#) or asterisk (\*) must be preceded by a period (.). If a number sign (#) or an asterisk (\*) is used in the middle of a binding key, the number sign (#) or asterisk (\*) must be preceded and followed by a period (.).
    
-   The binding key must be 1 to 255 characters in length.
    

BindingType

String

Yes

No

The type of the object that you want to bind to the source exchange.

Valid values:

-   0: queue
    
-   1: exchange
    

DestinationName

String

Yes

No

The name of the object that you want to bind to the source exchange.

You must create the object in the ApsaraMQ for RabbitMQ console. Make sure that the vhost to which the object belongs is the same as the vhost to which the exchange specified by `SourceExchange` belongs.

InstanceId

String

Yes

No

The instance ID.

None.

SourceExchange

String

Yes

No

The name of the source exchange.

None.

VirtualHost

String

Yes

No

The vhost name.

You must create the vhost in the console. The object specified by DestinationName and the object specified by SourceExchange belong to the vhost.

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Argument:
    Description: 'X-match Attributes. Valid Values:

      "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored
      in the Must Match.

      "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored
      in the Must Match.'
    Type: String
  BindingKey:
    Description: The Binding Key.
    Type: String
  BindingType:
    AllowedValues:
    - 0
    - '0'
    - QUEUE
    - 1
    - '1'
    - EXCHANGE
    Description: 'The Target Binding Types. Valid values: EXCHANGE, QUEUE.'
    Type: String
  DestinationName:
    Description: The Target Queue Or Exchange of the Name.
    Type: String
  InstanceId:
    Description: InstanceId
    Type: String
  SourceExchange:
    Description: The Source Exchange Name.
    Type: String
  VirtualHost:
    Description: The name of the virtual host.
    Type: String
Resources:
  Binding:
    Properties:
      Argument:
        Ref: Argument
      BindingKey:
        Ref: BindingKey
      BindingType:
        Ref: BindingType
      DestinationName:
        Ref: DestinationName
      InstanceId:
        Ref: InstanceId
      SourceExchange:
        Ref: SourceExchange
      VirtualHost:
        Ref: VirtualHost
    Type: ALIYUN::AMQP::Binding
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Argument": {
      "Type": "String",
      "Description": "X-match Attributes. Valid Values:\n\"x-match:all\": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.\n\"x-match:any\": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match."
    },
    "SourceExchange": {
      "Type": "String",
      "Description": "The Source Exchange Name."
    },
    "InstanceId": {
      "Type": "String",
      "Description": "InstanceId"
    },
    "BindingKey": {
      "Type": "String",
      "Description": "The Binding Key."
    },
    "BindingType": {
      "Type": "String",
      "Description": "The Target Binding Types. Valid values: EXCHANGE, QUEUE.",
      "AllowedValues": [
        0,
        "0",
        "QUEUE",
        1,
        "1",
        "EXCHANGE"
      ]
    },
    "DestinationName": {
      "Type": "String",
      "Description": "The Target Queue Or Exchange of the Name."
    },
    "VirtualHost": {
      "Type": "String",
      "Description": "The name of the virtual host."
    }
  },
  "Resources": {
    "Binding": {
      "Type": "ALIYUN::AMQP::Binding",
      "Properties": {
        "Argument": {
          "Ref": "Argument"
        },
        "SourceExchange": {
          "Ref": "SourceExchange"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "BindingKey": {
          "Ref": "BindingKey"
        },
        "BindingType": {
          "Ref": "BindingType"
        },
        "DestinationName": {
          "Ref": "DestinationName"
        },
        "VirtualHost": {
          "Ref": "VirtualHost"
        }
      }
    }
  }
}
```
