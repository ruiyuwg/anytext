ALIYUN::AMQP::VirtualHost is used to create a vhost.

## Syntax

```
{
  "Type": "ALIYUN::AMQP::VirtualHost",
  "Properties": {
    "InstanceId": String,
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

InstanceId

String

Yes

No

The instance ID.

None.

VirtualHost

String

Yes

No

The vhost name.

When you specify the vhost name, take note of the following items:

-   The name can contain letters, digits, and the following special characters: -\_.#/@.
    
-   The name must be 1 to 255 characters in length.
    
-   After a vhost is created, you cannot change the name of the vhost. If you want to change the name, delete the vhost and create a new one.
    

## Return values

Fn::GetAtt

VirtualHost: the vhost name.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description: InstanceId
    Type: String
  VirtualHost:
    Description: The name of the virtual host.
    MaxLength: 100
    Type: String
Resources:
  AMQPVirtualHost:
    Properties:
      InstanceId:
        Ref: InstanceId
      VirtualHost:
        Ref: VirtualHost
    Type: ALIYUN::AMQP::VirtualHost
Outputs:
  VirtualHost:
    Description: The name of the virtual host.
    Value:
      Fn::GetAtt:
      - AMQPVirtualHost
      - VirtualHost
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
      "Description": "The name of the virtual host.",
      "MaxLength": 100
    }
  },
  "Resources": {
    "AMQPVirtualHost": {
      "Type": "ALIYUN::AMQP::VirtualHost",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "VirtualHost": {
          "Ref": "VirtualHost"
        }
      }
    }
  },
  "Outputs": {
    "VirtualHost": {
      "Description": "The name of the virtual host.",
      "Value": {
        "Fn::GetAtt": [
          "AMQPVirtualHost",
          "VirtualHost"
        ]
      }
    }
  }
}
```
