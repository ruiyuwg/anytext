ALIYUN::IOT::ProductTopic is used to create a topic category for a specified product.

## Syntax

```
{
  "Type": "ALIYUN::IOT::ProductTopic",
  "Properties": {
    "Desc": String,
    "IotInstanceId": String,
    "TopicShortName": String,
    "Operation": String,
    "ProductKey": String
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

Desc

String

No

Yes

The description of the topic category.

The description can be up to 100 characters in length.

IotInstanceId

String

No

No

The ID of the instance.

This parameter is required for Enterprise Edition instances, but not required for public instances.

TopicShortName

String

Yes

Yes

The custom category hierarchy in the topic category.

By default, a topic category contains the following system-defined category hierarchies: `_productKey_` and `_deviceName_`. Separate the hierarchies with forward slashes (/). Format of a topic category: `productKey/deviceName/topicShortName`.

The name of each category hierarchy can contain only letters, digits, and underscores (\_), and cannot be empty.

Operation

String

Yes

Yes

The operation permissions of devices on the topic category.

Valid values:

-   SUB: subscribe
-   PUB: publish
-   ALL: publish and subscribe

ProductKey

String

Yes

No

The unique identifier of the product for which you want to create a topic category.

None

## Response parameters

Fn::GetAtt

TopicId: the ID of the topic category.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Desc": {
      "Type": "String",
      "Description": "The description of the topic category. You can enter a description with up to 100 characters.",
      "MaxLength": 100
    },
    "IotInstanceId": {
      "Type": "String",
      "Description": "Instance ID you purchased. Public instances do not need pass this property."
    },
    "TopicShortName": {
      "Type": "String",
      "Description": "The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.\nNote The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty."
    },
    "Operation": {
      "Type": "String",
      "Description": "Operation permissions of devices on the topic category. Value options:\nSUB: Subscribe. Devices can subscribe to the topics of this category.\nPUB: Publish. Devices can publish messages using the topics of this category.\nALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.",
      "AllowedValues": [
        "ALL",
        "PUB",
        "SUB"
      ]
    },
    "ProductKey": {
      "Type": "String",
      "Description": "The unique identifier of the product for which you want to create a topic category."
    }
  },
  "Resources": {
    "ProductTopic": {
      "Type": "ALIYUN::IOT::ProductTopic",
      "Properties": {
        "Desc": {
          "Ref": "Desc"
        },
        "IotInstanceId": {
          "Ref": "IotInstanceId"
        },
        "TopicShortName": {
          "Ref": "TopicShortName"
        },
        "Operation": {
          "Ref": "Operation"
        },
        "ProductKey": {
          "Ref": "ProductKey"
        }
      }
    }
  },
  "Outputs": {
    "TopicId": {
      "Description": "Topic ID",
      "Value": {
        "Fn::GetAtt": [
          "ProductTopic",
          "TopicId"
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
  Desc:
    Type: String
    Description: >-
      The description of the topic category. You can enter a description with up
      to 100 characters.
    MaxLength: 100
  IotInstanceId:
    Type: String
    Description: >-
      Instance ID you purchased. Public instances do not need pass this
      property.
  TopicShortName:
    Type: String
    Description: >-
      The custom category hierarchy in the topic category. By default, a topic
      category contains two system defined category hierarchies: productKey and
      ${deviceName}. Forward slashes (/) are used to delimit the topic
      hierarchies. The format of a topic category is
      productKey/${deviceName}/topicShortName.

      Note The name of each category hierarchy can contain English letters,
      digits, and underscores (_), and cannot be empty.
  Operation:
    Type: String
    Description: >-
      Operation permissions of devices on the topic category. Value options:

      SUB: Subscribe. Devices can subscribe to the topics of this category.

      PUB: Publish. Devices can publish messages using the topics of this
      category.

      ALL: Subscribe and publish. Devices can subscribe to and publish messages
      to the topics of this category.
    AllowedValues:
      - ALL
      - PUB
      - SUB
  ProductKey:
    Type: String
    Description: >-
      The unique identifier of the product for which you want to create a topic
      category.
Resources:
  ProductTopic:
    Type: 'ALIYUN::IOT::ProductTopic'
    Properties:
      Desc:
        Ref: Desc
      IotInstanceId:
        Ref: IotInstanceId
      TopicShortName:
        Ref: TopicShortName
      Operation:
        Ref: Operation
      ProductKey:
        Ref: ProductKey
Outputs:
  TopicId:
    Description: Topic ID
    Value:
      'Fn::GetAtt':
        - ProductTopic
        - TopicId
```
