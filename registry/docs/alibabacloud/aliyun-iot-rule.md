ALIYUN::IOT::Rule is used to create a rule for a specific topic.

## Syntax

```
{
  "Type": "ALIYUN::IOT::Rule",
  "Properties": {
    "TopicType": Integer,
    "IotInstanceId": String,
    "ResourceGroupId": String,
    "ShortTopic": String,
    "Select": String,
    "DataType": String,
    "RuleDesc": String,
    "Where": String,
    "ProductKey": String,
    "RuleAction": List,
    "StartRule": Boolean,
    "Name": String
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

TopicType

Integer

No

Yes

The type of the topic.

Valid values:

-   0: the Thing Specification Language (TSL)-based communication topic or the basic communication topic specified in the ShortTopic parameter, such as the topic used to submit the status of OTA update batches.
-   1: the custom topic.
-   2: the topic that is used to submit device status changes. Format: `/as/mqtt/status/${productKey}/${deviceName}`.

IotInstanceId

String

No

No

The ID of the instance.

This parameter is required for Enterprise Edition instances, but not required for public instances.

ResourceGroupId

String

No

No

The ID of the resource group.

None

ShortTopic

String

No

Yes

The topic to which the rule is applied.

Format: `${deviceName}/topicShortName`. `${deviceName}` indicates the name of the device, and `topicShortName` indicates the custom name of the topic.

Select

String

No

Yes

The SQL SELECT statement that you want to execute. For more information, see [SQL statements](/help/en/iot/user-guide/sql-statements#concept-vc2-d4n-vdb "You can write SQL statements to parse and process data when you create data forwarding rules. Binary data will not be parsed, but directly passed through to targets. This topic describes SQL statements.").

Set this parameter to the content that follows the SELECT keyword. For example, if the SELECT statement is `SELECT a,b,c`, set this parameter to `a,b,c`.

DataType

String

No

No

The format of the data to be processed by the rule. The value of this parameter must be the same as the format of the device data to be processed.

Default value: JSON. Valid values:

-   JSON
-   BINARY
    
    **Note** If you set this parameter to BINARY, you cannot set the TopicType parameter to 0 or forward data to the time series data storage in the instance, Time Series Database (TSDB), Tablestore, or ApsaraDB RDS.
    

RuleDesc

String

No

Yes

The description of the rule.

The description can be up to 100 characters in length.

Where

String

No

Yes

The condition that is used to trigger the rule. For more information, see [SQL statements](/help/en/iot/user-guide/sql-statements#concept-vc2-d4n-vdb "You can write SQL statements to parse and process data when you create data forwarding rules. Binary data will not be parsed, but directly passed through to targets. This topic describes SQL statements.").

Set this parameter to the content that follows the WHERE keyword. For example, if the WHERE statement is `WHERE a>10`, set this parameter to `a>10`.

ProductKey

String

No

No

The unique identifier of the product to which the rule applies.

None

RuleAction

List

No

Yes

The rule action.

For more information, see [RuleAction properties](#section-plu-pfu-bgn).

StartRule

Boolean

No

Yes

Specifies whether to enable the rule.

Valid values:

-   true
-   false

Name

String

Yes

Yes

The name of the rule.

The name must be 1 to 30 bytes in length and can contain letters, digits, hyphens (-), and underscores (\_).

## RuleAction syntax

```
"RuleAction": [
  {
    "ErrorActionFlag": String,
    "Configuration": String,
    "Type": String
  }
] 
```

## RuleAction properties

     

Property

Type

Required

Editable

Description

Constraint

ErrorActionFlag

String

No

No

Specifies whether the rule action is to forward error operation data. Error operation data is generated when the rules engine failed to forward data from the IoT Platform topic to the destination cloud service. A data forwarding failure indicates that forwarding retries also fail.

Valid values:

-   true
-   false

Configuration

String

Yes

No

The configurations of the rule action. Set the value to a JSON string.

For more information, see [CreateRuleAction](/help/en/iot/developer-reference/api-5f8fe3#doc-api-Iot-CreateRuleAction "Creates a rule action for a specified rule to forward processed data from a topic to another topic or a supported Alibaba Cloud service.").

Type

String

Yes

No

The type of the rule action.

For more information, see [CreateRuleAction](/help/en/iot/developer-reference/api-5f8fe3#doc-api-Iot-CreateRuleAction "Creates a rule action for a specified rule to forward processed data from a topic to another topic or a supported Alibaba Cloud service.").

## Response parameters

Fn::GetAtt

-   RuleId: the ID of the rule.
-   ActionId: the ID of the rule action.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TopicType": {
      "Type": "Number",
      "Description": "0: The topic is a basic communication topic or TSL-based communication topic.\n1: The topic is a custom topic.\n2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}."
    },
    "IotInstanceId": {
      "Type": "String",
      "Description": "The ID of the instance. This parameter is not required for public instances. However,\nthe parameter is required for the instances that you have purchased."
    },
    "ResourceGroupId": {
      "Type": "String",
      "Description": "The ID of the resource group to which the rule is assigned. You can view the resource\ngroup information in the Resource Management console.\nIf you do not specify this parameter, the rule is assigned to the default resource\ngroup."
    },
    "RuleAction": {
      "Type": "Json",
      "Description": "",
      "MinLength": 1,
      "MaxLength": 10
    },
    "ShortTopic": {
      "Type": "String",
      "Description": "The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.\nBasic communication topics or Thing Specification Language (TSL)-based communication\ntopics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the\nproduct. Valid values of topicShortName:\n/thing/event/property/post: submits the property data of a device.\n/thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.\n/thing/lifecycle: submits device lifecycle changes.\n/thing/downlink/reply/message: sends a response to a request from IoT Platform.\n/thing/list/found: submits the data when a gateway detects a new sub-device.\n/thing/topo/lifecycle: submits device topology changes.\n/thing/event/property/history/post: submits historical property data of a device.\n/thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.\n/ota/upgrade: submits OTA update status.\n/ota/version/post: submits OTA module versions.\n/thing/deviceinfo/update: submits device tag changes.\n/edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.\n${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.\n${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.\nCustom topics. Example:${deviceName}/user/get.\nYou can call theQueryProductTopicoperation to view all custom topics of the product.\nWhen you specify a custom topic, you can use the + and # wildcards.\nYou can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the\nproduct.\nYou can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that\nfollow/user.\nFor more information about how to use wildcards, see Wildcards in topics.\nTopic that is used to submit device status changes: ${deviceName}.\nYou can use the+wildcard. In this case, the status changes of all devices under the product are submitted."
    },
    "Select": {
      "Type": "String",
      "Description": "The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.\nNote Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter."
    },
    "StartRule": {
      "Type": "Boolean",
      "Description": "Start the rule. The rule at least contains one rule action with normal data forward. ",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "DataType": {
      "Type": "String",
      "Description": "The format of the data to be processed by the rule. You must specify the format of\ndevice data to be processed for this parameter. Valid values:\nJSON: JSON data\nBINARY: binary data\nNote If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB\nfor RDS.\nDefault value: JSON.",
      "AllowedValues": [
        "BINARY",
        "JSON"
      ]
    },
    "RuleDesc": {
      "Type": "String",
      "Description": "The description of the rule. The description can be up to 100 characters in length.\nEach Chinese symbol occupies 1 characters."
    },
    "Where": {
      "Type": "String",
      "Description": "The condition that is used to trigger the rule. For more information, seeSQL expressions.\nNote Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter."
    },
    "ProductKey": {
      "Type": "String",
      "Description": "The ProductKey of the product to which the rule applies."
    },
    "Name": {
      "Type": "String",
      "Description": "The name of the rule. The name must be 1 to 30 characters in length and can contain\nEnglish letters, digits, underscores (_), and hyphens (-). Chinese language is also\nsupported. Each Chinese symbol occupies 2 characters."
    }
  },
  "Resources": {
    "Rule": {
      "Type": "ALIYUN::IOT::Rule",
      "Properties": {
        "TopicType": {
          "Ref": "TopicType"
        },
        "IotInstanceId": {
          "Ref": "IotInstanceId"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "RuleAction": {
          "Ref": "RuleAction"
        },
        "ShortTopic": {
          "Ref": "ShortTopic"
        },
        "Select": {
          "Ref": "Select"
        },
        "StartRule": {
          "Ref": "StartRule"
        },
        "DataType": {
          "Ref": "DataType"
        },
        "RuleDesc": {
          "Ref": "RuleDesc"
        },
        "Where": {
          "Ref": "Where"
        },
        "ProductKey": {
          "Ref": "ProductKey"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "ActionId": {
      "Description": "The ID of the rule action. ",
      "Value": {
        "Fn::GetAtt": [
          "Rule",
          "ActionId"
        ]
      }
    },
    "RuleId": {
      "Description": "The ID of the rule. ",
      "Value": {
        "Fn::GetAtt": [
          "Rule",
          "RuleId"
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
  TopicType:
    Type: Number
    Description: >-
      0: The topic is a basic communication topic or TSL-based communication
      topic.

      1: The topic is a custom topic.

      2: The topic is used to submit device status changes. Syntax:
      /as/mqtt/status/${productKey}/${deviceName}.
  IotInstanceId:
    Type: String
    Description: >-
      The ID of the instance. This parameter is not required for public
      instances. However,

      the parameter is required for the instances that you have purchased.
  ResourceGroupId:
    Type: String
    Description: >-
      The ID of the resource group to which the rule is assigned. You can view
      the resource

      group information in the Resource Management console.

      If you do not specify this parameter, the rule is assigned to the default
      resource

      group.
  RuleAction:
    Type: Json
    Description: ''
    MinLength: 1
    MaxLength: 10
  ShortTopic:
    Type: String
    Description: >-
      The topic to which this rule is applied. Syntax:
      ${deviceName}/topicShortName. ${deviceName}specifies the name of the
      device, and topicShortNamespecifies the custom name of the topic.

      Basic communication topics or Thing Specification Language (TSL)-based
      communication

      topics. Syntax: ${deviceName}/topicShortName. You can replace
      ${deviceName} with the + wildcard. The wildcard indicates that the topic
      applies to all devices under the

      product. Valid values of topicShortName:

      /thing/event/property/post: submits the property data of a device.

      /thing/event/${tsl.event.identifier}/post: submits the event data of a
      device.${tsl.event.identifier} specifies the identifier of an event in the
      TSL.

      /thing/lifecycle: submits device lifecycle changes.

      /thing/downlink/reply/message: sends a response to a request from IoT
      Platform.

      /thing/list/found: submits the data when a gateway detects a new
      sub-device.

      /thing/topo/lifecycle: submits device topology changes.

      /thing/event/property/history/post: submits historical property data of a
      device.

      /thing/event/${tsl.event.identifier}/post: submits the historical event
      data of a device.${tsl.event.identifier}specifies the identifier of an
      event in the TSL.

      /ota/upgrade: submits OTA update status.

      /ota/version/post: submits OTA module versions.

      /thing/deviceinfo/update: submits device tag changes.

      /edge/driver/${driver_id}/point_post: submits pass-through data from Link
      IoT Edge.${driver_id} specifies the ID of the driver that a device uses to
      access Link IoT Edge.

      ${packageId}/${jobId}/ota/job/status: submits the status of OTA update
      batches. This topic is a basic communication topic.

      ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of
      the update batch.

      Custom topics. Example:${deviceName}/user/get.

      You can call theQueryProductTopicoperation to view all custom topics of
      the product.

      When you specify a custom topic, you can use the + and # wildcards.

      You can replace ${deviceName} with the+ wildcard. The wildcard indicates
      that the topic applies to all devices under the

      product.

      You can replace the fields that follow ${deviceName} with /user/#. The #
      wildcard indicates that the topic applies whatever values are specified
      for the fields that

      follow/user.

      For more information about how to use wildcards, see Wildcards in topics.

      Topic that is used to submit device status changes: ${deviceName}.

      You can use the+wildcard. In this case, the status changes of all devices
      under the product are submitted.
  Select:
    Type: String
    Description: >-
      The SQL SELECT statement that you want to execute. For more information,
      seeSQL expressions.

      Note Specify the fields that follow the Select keyword for this parameter.
      For example, if the Select statement is Select a,b,c, specify a,b,c for
      this parameter.
  StartRule:
    Type: Boolean
    Description: >-
      Start the rule. The rule at least contains one rule action with normal
      data forward. 
    AllowedValues:
      - 'True'
      - 'true'
      - 'False'
      - 'false'
  DataType:
    Type: String
    Description: >-
      The format of the data to be processed by the rule. You must specify the
      format of

      device data to be processed for this parameter. Valid values:

      JSON: JSON data

      BINARY: binary data

      Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and
      forward data to Table Store, Time Series Database (TSDB), or ApsaradDB

      for RDS.

      Default value: JSON.
    AllowedValues:
      - BINARY
      - JSON
  RuleDesc:
    Type: String
    Description: >-
      The description of the rule. The description can be up to 100 characters
      in length.

      Each Chinese symbol occupies 1 characters.
  Where:
    Type: String
    Description: >-
      The condition that is used to trigger the rule. For more information,
      seeSQL expressions.

      Note Specify the fields that follow theWherekeyword for this parameter.
      For example, if the Where statement is Where a>10, specify a>10 for this
      parameter.
  ProductKey:
    Type: String
    Description: The ProductKey of the product to which the rule applies.
  Name:
    Type: String
    Description: >-
      The name of the rule. The name must be 1 to 30 characters in length and
      can contain

      English letters, digits, underscores (_), and hyphens (-). Chinese
      language is also

      supported. Each Chinese symbol occupies 2 characters.
Resources:
  Rule:
    Type: 'ALIYUN::IOT::Rule'
    Properties:
      TopicType:
        Ref: TopicType
      IotInstanceId:
        Ref: IotInstanceId
      ResourceGroupId:
        Ref: ResourceGroupId
      RuleAction:
        Ref: RuleAction
      ShortTopic:
        Ref: ShortTopic
      Select:
        Ref: Select
      StartRule:
        Ref: StartRule
      DataType:
        Ref: DataType
      RuleDesc:
        Ref: RuleDesc
      Where:
        Ref: Where
      ProductKey:
        Ref: ProductKey
      Name:
        Ref: Name
Outputs:
  ActionId:
    Description: 'The ID of the rule action. '
    Value:
      'Fn::GetAtt':
        - Rule
        - ActionId
  RuleId:
    Description: 'The ID of the rule. '
    Value:
      'Fn::GetAtt':
        - Rule
        - RuleId         
```
