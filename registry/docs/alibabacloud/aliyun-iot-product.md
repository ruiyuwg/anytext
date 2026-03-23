ALIYUN::IOT::Product is used to create a product.

You can create products in the following regions:

-   Shanghai
-   Singapore (Singapore)
-   Japan (Tokyo)
-   Germany (Frankfurt)
-   US (Silicon Valley)
-   US (Virginia)

## Syntax

```
{
  "Type": "ALIYUN::IOT::Product",
  "Properties": {
    "AuthType": String,
    "NodeType": Integer,
    "Description": String,
    "CategoryKey": String,
    "IotInstanceId": String,
    "ProtocolType": String,
    "PublishAuto": Boolean,
    "Id2": Boolean,
    "ProductName": String,
    "ResourceGroupId": String,
    "DataFormat": Integer,
    "AliyunCommodityCode": String,
    "JoinPermissionId": String,
    "NetType": String
  }
}
```

## Properties

     

Parameter

Type

Required

Editable

Description

Constraint

AuthType

String

No

Released

The type of authentication for devices of a product to access IoT Platform.

Valid values:

-   secret: The device secret is used for device authentication.
-   id2: Uses the id² of the IoT device for identity authentication.
-   x509: Use the device X.509 certificate for device authentication.

NodeType

Integer

Yes

Not supported

The node type of the product.

This parameter is only available for AliyunCommodityCode=iothub\_senior.

Valid values:

-   0: Device. A device cannot be mounted with sub-devices. You can connect a IoT Platform to IoT platform either directly or as a sub-device of a gateway IoT Platform.
-   1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain the topological relationships with sub-devices, and synchronize the topological relationships to IoT Platform.

Description

String

Not supported

Supported

Product description information

None

CategoryKey

String

No

Released

The identifier of the product category.

If you specify this parameter, the created product will use the TSL of the specified category. If you do not specify this parameter, the standard TSL of any category will not be used.

IotInstanceId

String

No

Released

The ID of the instance.

This parameter is not required for public instances.

ProtocolType

String

No

Released

The protocol type when the device is connected to the Gateway.

If you want to connect devices of a AliyunCommodityCode=iothub\_senior to IoT Platform through a gateway, you must specify this parameter.

Valid values:

-   modbus: Modbus Protocol
-   opc-ua: OPC UA protocol
-   customize: customize a protocol
-   ble: BLE.
-   zigbee: ZigBee protocol

PublishAuto

Boolean

Erased

Released

Indicates whether to automatically publish the TSL after the product is created.

Valid values:

-   true (default)
-   false

Id2

Boolean

Erased

Released

Whether to use id² authentication

Valid values:

-   true
-   false (default)

The id² authentication is only supported in the China (Shanghai) region. If you set the AuthType parameter to true but set the AuthType parameter to id2, Oss uses the AuthType parameter.

ProductName

String

Yes

Yes

Product Name

The name must be 4 to 30 characters in length, and can contain Chinese characters, uppercase letters, lowercase letters, digits, and underscores (\_).

**Note** One Chinese character accounts for two.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None

DataFormat

Integer

Erased

Released

Product Type data format

This parameter is only available for AliyunCommodityCode=iothub\_senior. Valid values:

-   0: Do not parse /custom (CUSTOM\_FORMAT)
-   1: Alink protocol (ALINK\_FORMAT)

AliyunCommodityCode

String

No

Released

Product type

Valid values:

-   iothub\_senior: Uses the TSL model.
-   iothub: Without the TSL model

JoinPermissionId

String

No

Released

LoRaWAN ingress credential ID

Network connection method `NetType` if you set the parameter to LORA, this parameter is required.

NetType

String

No

Released

Network Connection Method

If you are using a AliyunCommodityCode=iothub\_senior and the devices of this product are gateways or the devices not connected to gateways, you must specify this parameter.

Valid values:

-   WIFI (default): WiFi
-   CELLULAR
-   ETHERNET
-   LORA:LoRaWAN
-   OTHER

## Return value

Fn::GetAtt

-   ProductKey: The product identifier.
-   IotInstanceId: The ID of the instance.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Product": {
      "Type": "ALIYUN::IOT::Product",
      "Properties": {
        "AuthType": {
          "Ref": "AuthType"
        },
        "NodeType": {
          "Ref": "NodeType"
        },
        "Description": {
          "Ref": "Description"
        },
        "CategoryKey": {
          "Ref": "CategoryKey"
        },
        "IotInstanceId": {
          "Ref": "IotInstanceId"
        },
        "ProtocolType": {
          "Ref": "ProtocolType"
        },
        "PublishAuto": {
          "Ref": "PublishAuto"
        },
        "Id2": {
          "Ref": "Id2"
        },
        "ProductName": {
          "Ref": "ProductName"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "DataFormat": {
          "Ref": "DataFormat"
        },
        "AliyunCommodityCode": {
          "Ref": "AliyunCommodityCode"
        },
        "JoinPermissionId": {
          "Ref": "JoinPermissionId"
        },
        "NetType": {
          "Ref": "NetType"
        }
      }
    }
  },
  "Parameters": {
    "AuthType": {
      "Type": "String",
      "Description": "Authentication device to access the Internet of Things platform under the product. Optional:\nsecret: using a device key for device authentication.\nDetails can be found MQTT-TCP connection communication.\nid2: Use things device authentication ID.\nx509: X.509 certificates using the device for device authentication.\nThe use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.\nIf this parameter is passed, the default value is secret."
    },
    "NodeType": {
      "Type": "Number",
      "Description": "The node type of the product. Values:\n0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform\neither directly or as a sub-device of a gateway.\n1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain\nthe topological relationships with sub-devices, and synchronize the topological relationships\nto IoT Platform.",
      "AllowedValues": [
        0,
        1
      ]
    },
    "Description": {
      "Type": "String",
      "Description": "A description of the product. The description can be a maximum of 100 characters in\nlength."
    },
    "CategoryKey": {
      "Type": "String",
      "Description": "Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.\nCall ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey."
    },
    "IotInstanceId": {
      "Type": "String",
      "Description": "Public instance does not pass this parameter; instance that you need to buy the incoming instance ID."
    },
    "ProtocolType": {
      "Type": "String",
      "Description": "The protocol that devices of this product use to connect to gateways.\nSet this parameter only if you are creating a product whose devices will be connected\nto gateways.\nOptions:\nmodbus: Modbus.\nopc-ua: OPC UA.\ncustomize: Customized protocol.\nble: BLE.\nzigbee: ZigBee.",
      "AllowedValues": [
        "ble",
        "customize",
        "modbus",
        "opc-ua",
        "zigbee"
      ]
    },
    "PublishAuto": {
      "Type": "Boolean",
      "Description": "Whether to automatically model publication after the product is created.\ntrue: publishing.\nfalse: not released.\nThis parameter is not passed, the default value true.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "Id2": {
      "Type": "Boolean",
      "Description": "Whether ID2 certification.\nOptional values:\ntrue: the opening of ID2 certification.\nfalse: do not open ID2 certification.\nDo not pass this parameter, the default is not opened.\nExplanation\nOnly 2 East China (Shanghai) regional support ID2 authentication.\nIf this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "ProductName": {
      "Type": "String",
      "Description": "The name of the product. A product name can be 4 to 30 characters in length and can\ncontain Chinese characters, English letters, digits, and underscores (_).\nNote A product name must be unique in an account."
    },
    "ResourceGroupId":"",
      "Type": "String",
      "Description": "Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.\nIf this parameter is passed, the product will be classified as a default resource group."
    },
    "DataFormat": {
      "Type": "Number",
      "Description": "You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.\nThis parameter is only available and required when you create a Pro Edition product.\nOptions:\n0: Do not parse/Custom.\n1: Alink JSON.",
      "AllowedValues": [
        0,
        1
      ]
    },
    "AliyunCommodityCode": {
      "Type": "String",
      "Description": "The edition of the product that you want to create. There are two options:\niothub_senior: Pro Edition.\niothub: Basic Edition.\nIf you do not input this parameter, the default value is used, which is iothub (Basic\nEdition)."
    },
    "JoinPermissionId": {
      "Type": "String",
      "Description": "LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.\nPlease call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.\nIf you do not LoRaWAN network credentials, visit the network management platform to create things together."
    },
    "NetType": {
      "Type": "String",
      "Description": "Networking mode.\nSet this parameter only if you are creating a product whose devices directly connect\nto IoT Platform.\nOptions:\nWIFI\nCELLULAR\nETHERNET\nOTHER\nThe default value is WIFI.",
      "AllowedValues": [
        "CELLULAR",
        "ETHERNET",
        "LORA",
        "OTHER",
        "WIFI"
      ]
    }
  },
  "Outputs": {
    "ProductKey": {
      "Description": "The globally unique identifier of the product issued by IoT Platform.",
      "Value": {
        "Fn::GetAtt": [
          "Product",
          "ProductKey"
        ]
      }
    },
    "IotInstanceId": {
      "Description": "IOT instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "Product",
          "IotInstanceId"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Product:
    Type: 'ALIYUN::IOT::Product'
    Properties:
      AuthType:
        Ref: AuthType
      NodeType:
        Ref: NodeType
      Description:
        Ref: Description
      CategoryKey:
        Ref: CategoryKey
      IotInstanceId:
        Ref: IotInstanceId
      ProtocolType:
        Ref: ProtocolType
      PublishAuto:
        Ref: PublishAuto
      Id2:
        Ref: Id2
      ProductName:
        Ref: ProductName
      ResourceGroupId:
        Ref: ResourceGroupId
      DataFormat:
        Ref: DataFormat
      AliyunCommodityCode:
        Ref: AliyunCommodityCode
      JoinPermissionId:
        Ref: JoinPermissionId
      NetType:
        Ref: NetType
Parameters:
  AuthType:
    Type: String
    Description: >-
      Authentication device to access the Internet of Things platform under the
      product. Optional:

      secret: using a device key for device authentication.

      Details can be found MQTT-TCP connection communication.

      id2: Use things device authentication ID.

      x509: X.509 certificates using the device for device authentication.

      The use of X.509 certificates device side configuration instructions, see
      Using X.509 certificate authentication.

      If this parameter is passed, the default value is secret.
  NodeType:
    Type: Number
    Description: >-
      The node type of the product. Values:

      0: Device. A device cannot be mounted with sub-devices. It can connect to
      IoT Platform

      either directly or as a sub-device of a gateway.

      1: Gateway. A gateway can be mounted with sub-devices. It can manage
      sub-devices, maintain

      the topological relationships with sub-devices and and synchronize the
      topological relationships

      to IoT Platform.
    AllowedValues:
      -0
      - 1
  Description:
    Type: String
    Description: >-
      A description of the product. The description can be a maximum of 100
      characters in

      length.
  CategoryKey:
    Type: String
    Description: >-
      Identifier Product category. If you pass this parameter and the product will
      be created using the object model specified category; not passed, the
      standard model is not used in any category.

      Call ListThingTemplates, view of things platform predefined category
      information from the returned results, get the value of CategoryKey.
  IotInstanceId:
    Type: String
    Description: >-
      Public instance does not pass this parameter; instance that you need to
      buy the incoming instance ID.
  ProtocolType:
    Type: String
    Description: >-
      The protocol that devices of this product use to connect to gateways.

      Set this parameter only if you are creating a product whose devices will
      be connected

      to gateways.

      Options:

      modbus: Modbus.

      opc-ua: OPC UA.

      customize: Customized protocol.

      ble: BLE.

      zigbee: ZigBee.
    AllowedValues:
      -ble
      -customize
      -modbus
      -opc-ua
      -zigbee
  PublishAuto:
    Type: Boolean
    Description: |-
      Whether to automatically model publication after the product is created.
      true: publishing.
      false: not released.
      This parameter is not passed, the default value true.
    AllowedValues:
      - 'True'
      - 'true'
      - 'False'
      - 'false'
  Id2:
    Type: Boolean
    Description: >-
      Whether ID2 certification.

      Optional values:

      true: the opening of ID2 certification.

      false: do not open ID2 certification.

      Do not pass this parameter, the default is not opened.

      Explanation

      Only 2 East China (Shanghai) regional support ID2 authentication.

      If this parameter value is set to true and but passed AuthType parameter
      value is not id2, the system will AuthType parameter values prevail.
    AllowedValues:
      - 'True'
      - 'true'
      - 'False'
      - 'false'
  ProductName:
    Type: String
    Description: >-
      The name of the product. A product name can be 4 to 30 characters in
      length and can

      contain Chinese characters, English letters, digits, and underscores (_).

      Note A product name must be unique in an account.
  ResourceGroupId:
    Type: String
    Description: >-
      Resource group ID (group ID to view the resource in the resource
      management console), specify the product is classified as a resource
      group.

      If this parameter is passed and the product will be classified as a default
      resource group.
  DataFormat:
    Type: Number
    Description: >-
      You must specify this parameter if the value of AliyunCommodityCode is
      iothub_senior.

      This parameter is only available and required when you create a Pro
      Edition product.

      Options:

      0: Do not parse/Custom.

      1: Alink JSON.
    AllowedValues:
      -0
      - 1
  AliyunCommodityCode:
    Type: String
    Description: >-
      The edition of the product that you want to create. There are two options:

      iothub_senior: Pro Edition.

      iothub: Basic Edition.

      If you do not input this parameter, the default value is used, which is
      iothub (Basic

      Edition).
  JoinPermissionId:
    Type: String
    Description: >-
      LoRaWAN network credential ID. When networking mode NetType chosen LORA,
      the necessary parameters.

      Please call QueryLoRaJoinPermissions query JoinPermissionId network
      credentials LoRaWAN under your account.

      If you do not LoRaWAN network credentials and visit the network management
      platform to create things together.
  NetType:
    Type: String
    Description: >-
      Networking mode.

      Set this parameter only if you are creating a product whose devices
      directly connect

      to IoT Platform.

      Options:

      Wi-Fi

      CELLULAR

      ETHERNET

      OTHER

      The default value is WIFI.
    AllowedValues:
      -CELLULAR
      -ETHERNET
      -LORA
      -OTHER
      -WIFI
Outputs:
  ProductKey:
    Description: The globally unique identifier of the product issued by IoT Platform.
    Value:
      'Fn::GetAtt':
        -Product
        -ProductKey
  IotInstanceId:
    Description: IOT instance ID.
    Value:
      'Fn::GetAtt':
        -Product
        -IotInstanceId
```
