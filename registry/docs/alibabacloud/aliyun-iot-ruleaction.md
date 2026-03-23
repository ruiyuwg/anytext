ALIYUN::IOT::RuleAction is used to create a rule action for a specified rule.

## Syntax

```
{
  "Type": "ALIYUN::IOT::RuleAction",
  "Properties": {
    "ErrorActionFlag": Boolean,
    "Type": String,
    "IotInstanceId": String,
    "Configuration": String,
    "RuleId": Integer
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

ErrorActionFlag

Boolean

No

No

Specifies whether the rule action forwards error operation data. Error operation data is generated when the rules engine failed to forward data from the IoT Platform (IOT) topic to the destination cloud service. A data forwarding failure indicates that forwarding retries also fail.

Default value: false. Valid values:

-   true: The rule action forwards error operation data.
-   false: The rule action does not forward error operation data.

Type

String

Yes

Yes

The type of the rule action. If the data type of the rules is the binary data format or the DataTypeparameter is set to BINARY, the rule does not support forwarding data to Tablestore (OTS).

Valid values:

-   REPUBLISH: forwards data that is processed by the rules engine to an IoT topic.
-   AMQP: forwards data to an Advanced Message Queuing Protocol (AMQP) consumer group.
-   DATAHUB: forwards data that is processed by the rules engine to DataHub for stream computing.
-   ONS: forwards data that is processed by the rules engine to Message Queue for Apache RocketMQ for message distribution.
-   MNS: forwards data that is processed by the rules engine to Message Service (MNS).
-   FC: forwards data that is processed by the rules engine to Function Compute for event computing.
-   OTS: forwards data that is processed by the rules engine to OTS for NoSQL data storage.

IotInstanceId

String

No

No

The ID of the instance.

This parameter is required for public and Enterprise Edition instances.

Configuration

String

Yes

Yes

The configurations of the rule action.

You must specify a JSON string. The configurations vary based on rule action types. For more information, see [CreateRuleAction](/help/en/iot/developer-reference/api-5f8fe3#doc-api-Iot-CreateRuleAction "Creates a rule action for a specified rule to forward processed data from a topic to another topic or a supported Alibaba Cloud service.").

RuleId

Integer

Yes

No

The ID of the rule for which you want to create an action.

None

## Response parameters

Fn::GetAtt

ActionId: the ID of the action.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ErrorActionFlag": {
      "Type": "Boolean",
      "Description": "Indicates whether the rule action forwarded error operation data. Error operation\ndata indicates that the rule engine failed to forward data from the IoT Platform topic\nto the destination cloud service. A data forwarding failure indicates that forwarding\nretries also failed. Valid values:\ntrue: forwards error operation data.\nfalse: forwards normal data instead of error operation data.\nDefault value: false.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "Type": {
      "Type": "String",
      "Description": "The type of the rule action. Valid values:\nMNS: forwards data in the topics that have been processed by the rule engine to Message\nService (MNS) for message transmission.\nFC: forwards data in the topics that have been processed by the rule engine to Function\nCompute for event computing.\nREPUBLISH: forwards data in the topics that have been processed by the rule engine to another\nIoT Platform topic.\nAMQP: forwards data to AMQP consumer groups.\nOTS: forwards data in the topics that have been processed by the rule engine to Table\nStore for NoSQL data storage.\nNote\nRules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.\nDestination Alibaba Cloud services that are supported by the rule engine vary based\non regions. For more information about the regions and destination cloud services\nthat are supported by the rule engine, see Regions and zones.",
      "AllowedValues": [
        "AMQP",
        "DATAHUB",
        "FC",
        "MNS",
        "ONS",
        "OTS",
        "REPUBLISH"
      ]
    },
    "Configuration": {
      "Type": "String",
      "Description": "The configurations of the rule action. You must specify a JSON string. The configurations\nfor different types of rule actions are different. For more information about required\nsyntax and examples, see the following tables."
    },
    "IotInstanceId": {
      "Type": "String",
      "Description": "The ID of the instance. This parameter is not required for public instances. However,\nthe parameter is required for the instances that you have purchased."
    },
    "RuleId": {
      "Type": "Number",
      "Description": "The ID of the rule for which you want to create an action. You can use either of the\nfollowing methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation."
    }
  },
  "Resources": {
    "RuleAction": {
      "Type": "ALIYUN::IOT::RuleAction",
      "Properties": {
        "ErrorActionFlag": {
          "Ref": "ErrorActionFlag"
        },
        "Type": {
          "Ref": "Type"
        },
        "Configuration": {
          "Ref": "Configuration"
        },
        "IotInstanceId": {
          "Ref": "IotInstanceId"
        },
        "RuleId": {
          "Ref": "RuleId"
        }
      }
    }
  },
  "Outputs": {
    "ActionId": {
      "Description": "The ID of the rule action. ",
      "Value": {
        "Fn::GetAtt": [
          "RuleAction",
          "ActionId"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ErrorActionFlag:
    Type: Boolean
    Description: >-
      Indicates whether the rule action forwarded error operation data. Error
      operation

      data indicates that the rule engine failed to forward data from the IoT
      Platform topic

      to the destination cloud service. A data forwarding failure indicates that
      forwarding

      retries also failed. Valid values:

      true: forwards error operation data.

      false: forwards normal data instead of error operation data.

      Default value: false.
    AllowedValues:
      - 'True'
      - 'true'
      - 'False'
      - 'false'
  Type:
    Type: String
    Description: >-
      The type of the rule action. Valid values:

      MNS: forwards data in the topics that have been processed by the rule
      engine to Message

      Service (MNS) for message transmission.

      FC: forwards data in the topics that have been processed by the rule
      engine to Function

      Compute for event computing.

      REPUBLISH: forwards data in the topics that have been processed by the
      rule engine to another

      IoT Platform topic.

      AMQP: forwards data to AMQP consumer groups.

      OTS: forwards data in the topics that have been processed by the rule
      engine to Table

      Store for NoSQL data storage.

      Note

      Rules of the binary data format (the DataType parameter is set toBINARY)
      do not support forwarding data to Table Store.

      Destination Alibaba Cloud services that are supported by the rule engine
      vary based

      on regions. For more information about the regions and destination cloud
      services

      that are supported by the rule engine, see Regions and zones.
    AllowedValues:
      - AMQP
      - DATAHUB
      - FC
      - MNS
      - ONS
      - OTS
      - REPUBLISH
  Configuration:
    Type: String
    Description: >-
      The configurations of the rule action. You must specify a JSON string. The
      configurations

      for different types of rule actions are different. For more information
      about required

      syntax and examples, see the following tables.
  IotInstanceId:
    Type: String
    Description: >-
      The ID of the instance. This parameter is not required for public
      instances. However,

      the parameter is required for the instances that you have purchased.
  RuleId:
    Type: Number
    Description: >-
      The ID of the rule for which you want to create an action. You can use
      either of the

      following methods to view the rule ID: 1. Log on to the IoT Platform
      console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
Resources:
  RuleAction:
    Type: 'ALIYUN::IOT::RuleAction'
    Properties:
      ErrorActionFlag:
        Ref: ErrorActionFlag
      Type:
        Ref: Type
      Configuration:
        Ref: Configuration
      IotInstanceId:
        Ref: IotInstanceId
      RuleId:
        Ref: RuleId
Outputs:
  ActionId:
    Description: 'The ID of the rule action. '
    Value:
      'Fn::GetAtt':
        - RuleAction
        - ActionId
```
