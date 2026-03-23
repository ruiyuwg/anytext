ALIYUN::IOT::Device is used to register a Device.

Alibaba Cloud allows you to register devices in the following regions:

-   China (Shanghai)
-   Singapore (Singapore)
-   Japan (Tokyo)
-   Germany (Frankfurt)
-   US (Silicon Valley)
-   US (Virginia)

## Syntax

```
{
  "Type": "ALIYUN::IOT::Device",
  "Properties": {
    "DeviceName": String,
    "IotInstanceId": String,
    "ProductKey": String,
    "PinCode": String,
    "DevEui": String,
    "Nickname": String
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

DeviceName

String

No

Released

The name of the device to be registered. If you do not specify this parameter, the system will randomly generate a device name.

The password must be 4 to 32 characters in length and can contain letters, digits, and the following special characters:

`- _@:`

DeviceName is used with ProductKey to identify a device.

IotInstanceId

String

No

Released

The ID of the instance.

This parameter is not specified for public instances.

ProductKey

String

Yes

Not supported

The key of the product to which the device to be registered belongs. ProductKey is IoT Platform identifier, which is globally unique for the product. You can view the domain name in the IoT Platform console or call `QueryProductList` view information about all products under the current account.

None

PinCode

String

No

Released

The PIN Code of LoRaWAN. It is used to verify the validity of DevEUI.

This parameter must be specified when you create a LoRaWAN device.

DevEui

String

No

Released

DevEUI for LoRaWAN device

This parameter must be specified when you create a LoRaWAN device.

Nickname

String

No

Released

The alias of the device to be registered. If you do not specify this parameter, the system does not generate a alias for the device.

The name must be 4 to 64 characters in length, and can contain uppercase letters, lowercase letters, digits, and underscores (\_).

**Note** A Chinese character occupies 2 characters.

## Return value

Fn::GetAtt

-   DeviceName: Device name.
-   NodeType: The node type of the product.
-   IotInstanceId: The ID of the instance.
-   ProductKey: The ProductKey of the product to which the device belongs.
-   NickName: The NickName of the NickName.
-   The Guid issued by IotId: IoT Platform to the device.
-   ProductName: The name of the product.
-   DeviceSecret: Device secret.
-   IpAddress: The IP address.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Device": {
      "Type": "ALIYUN::IOT::Device",
      "Properties": {
        "DeviceName": {
          "Ref": "DeviceName"
        },
        "IotInstanceId": {
          "Ref": "IotInstanceId"
        },
        "ProductKey": {
          "Ref": "ProductKey"
        },
        "PinCode": {
          "Ref": "PinCode"
        },
        "DevEui": {
          "Ref": "DevEui"
        },
        "Nickname": {
          "Ref": "Nickname"
        }
      }
    }
  },
  "Parameters": {
    "DeviceName": {
      "Type": "String",
      "Description": "The name of the device that you want to register. The device name must consist of\n4 to 32 characters, including English letters, digits, and special characters, for\nexample, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).\nDeviceName is used with ProductKey to identify a specified device.\nNote If you do not specify this parameter, the system will generate a name for the device."
    },
    "IotInstanceId": {
      "Type": "String",
      "Description": "Public instance does not pass this parameter; instance that you need to buy the incoming instance ID."
    },
    "ProductKey": {
      "Type": "String",
      "Description": "The identifier of the product to which the device to be registered belongs."
    },
    "PinCode": {
      "Type": "String",
      "Description": "PIN Code LoRaWAN device for checking the legitimacy of DevEUI.\nWhen you create a LoRaWAN devices, this will pass."
    },
    "DevEui": {
      "Type": "String",
      "Description": "DevEUI LoRaWAN equipment.\nWhen you create a LoRaWAN devices, this will pass."
    },
    "Nickname": {
      "Type": "String",
      "Description": "Add a nickname for the device. A nickname can be 4-64 characters in length, and can\ncontain Chinese characters, English letters, numbers and underscores (_). A Chinese\ncharacter counts as two characters."
    }
  },
  "Outputs": {
    "DeviceName": {
      "Description": "Device name.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "DeviceName"
        ]
      }
    },
    "NodeType": {
      "Description": "Node type.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "NodeType"
        ]
      }
    },
    "IotInstanceId": {
      "Description": "IOT instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "IotInstanceId"
        ]
      }
    },
    "ProductKey": {
      "Description": "Product key.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "ProductKey"
        ]
      }
    },
    "IpAddress": {
      "Description": "IP address.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "IpAddress"
        ]
      }
    },
    "DeviceSecret": {
      "Description": "Device key.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "DeviceSecret"
        ]
      }
    },
    "ProductName": {
      "Description": "Product name.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "ProductName"
        ]
      }
    },
    "IotId": {
      "Description": "Things internet device ID issued for the device, as the unique identifier of the device.\nDescription Keep, do not leak.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "IotId"
        ]
      }
    },
    "NickName": {
      "Description": "Nick name.",
      "Value": {
        "Fn::GetAtt": [
          "Device",
          "NickName"
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
  Device:
    Type: 'ALIYUN::IOT::Device'
    Properties:
      DeviceName:
        Ref: DeviceName
      IotInstanceId:
        Ref: IotInstanceId
      ProductKey:
        Ref: ProductKey
      PinCode:
        Ref: PinCode
      DevEui:
        Ref: DevEui
      Nickname:
        Ref: Nickname
Parameters:
  DeviceName:
    Type: String
    Description: >-
      The name of the device that you want to register. The device name must
      consist of

      4 to 32 characters, including English letters, digits, and special
      characters, for

      example, hyphens (-), underscores (_), at signs (@), periods (.) , and
      colons (:).

      DeviceName is used with ProductKey to identify a specified device.

      Note If you do not specify this parameter and the system will generate a name
      for the device.
  IotInstanceId:
    Type: String
    Description: >-
      Public instance does not pass this parameter; instance that you need to
      buy the incoming instance ID.
  ProductKey:
    Type: String
    Description: >-
      The identifier of the product to which the device to be registered
      belongs.
  PinCode:
    Type: String
    Description: |-
      PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
      When you create a LoRaWAN devices, this will pass.
  DevEui:
    Type: String
    Description: |-
      DevEUI LoRaWAN equipment.
      When you create a LoRaWAN devices, this will pass.
  Nickname:
    Type: String
    Description: >-
      Add a nickname for the device. A nickname can be 4-64 characters in
      length, and can

      contain Chinese characters, English letters, numbers and underscores (_).
      A Chinese

      character counts as two characters.
Outputs:
  DeviceName:
    Description: Device name.
    Value:
      'Fn::GetAtt':
        -Device
        -DeviceName
  NodeType:
    Description: Node type.
    Value:
      'Fn::GetAtt':
        -Device
        -NodeType
  IotInstanceId:
    Description: IOT instance ID.
    Value:
      'Fn::GetAtt':
        -Device
        -IotInstanceId
  ProductKey:
    Description: Product key.
    Value:
      'Fn::GetAtt':
        -Device
        -ProductKey
  IpAddress:
    Description: IP address.
    Value:
      'Fn::GetAtt':
        -Device
        -IpAddress
  DeviceSecret:
    Description: Device key.
    Value:
      'Fn::GetAtt':
        -Device
        -DeviceSecret
  ProductName:
    Description: Product name.
    Value:
      'Fn::GetAtt':
        -Device
        -ProductName
  IotId:
    Description: >-
      Things internet device ID issued for the device and as the unique identifier
      of the device.

      Description Keep, do not leak.
    Value:
      'Fn::GetAtt':
        -Device
        -IotId
  NickName:
    Description: Nick name.
    Value:
      'Fn::GetAtt':
        -Device
        -NickName
```
