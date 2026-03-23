ALIYUN::SAG::SmartAccessGateway is used to create a Smart Access Gateway (SAG) instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::SmartAccessGateway",
  "Properties": {
    "ReceiverCountry": String,
    "Description": String,
    "ReceiverZip": String,
    "BuyerMessage": String,
    "CidrBlock": String,
    "ReceiverTown": String,
    "HardWareSpec": String,
    "Name": String,
    "ReceiverPhone": String,
    "ReceiverCity": String,
    "RoutingStrategy": String,
    "SecurityLockThreshold": Integer,
    "ReceiverAddress": String,
    "AlreadyHaveSag": Boolean,
    "HaType": String,
    "Period": Integer,
    "MaxBandWidth": Integer,
    "AutoPay": Boolean,
    "ReceiverMobile": String,
    "ReceiverDistrict": String,
    "Activate": Boolean,
    "ChargeType": String,
    "ReceiverState": String,
    "ReceiverName": String,
    "ReceiverEmail": String
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

ReceiverCountry

String

Yes

No

The country where the SAG device is received.

Example: China.

Description

String

No

Yes

The description of the SAG instance.

The description must be 2 to 256 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

ReceiverZip

String

Yes

No

The postcode of the address where the SAG device is received.

None.

BuyerMessage

String

Yes

No

The remarks left by the buyer.

None.

CidrBlock

String

No

Yes

The private CIDR block.

None.

ReceiverTown

String

Yes

No

The town where the SAG device is received.

None.

HardWareSpec

String

Yes

No

The type of the SAG instance.

Valid values:

-   sag-100wm: an SAG instance of the hardware type. The SAG instance uses SAG-100WM and can connect portals or small branches to Alibaba Cloud.
-   sag-1000: an SAG instance of the hardware type. The SAG instance uses SAG-1000 and can be installed on your workbench or rack.
-   sag-vcpe: an SAG instance of the virtual customer-premises equipment (vCPE) type. If you deploy the SAG instance on a host, you can use the host as a CPE device to migrate services to Alibaba Cloud.

Name

String

No

Yes

The name of the SAG instance.

The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

ReceiverPhone

String

No

No

The landline phone number of the recipient.

None.

ReceiverCity

String

Yes

No

The city where the SAG device is received.

None.

RoutingStrategy

String

No

Yes

The routing policy of the SAG device.

None.

SecurityLockThreshold

Integer

No

Yes

The time threshold. If the SAG device remains offline for the specified period of time, the SAG device is locked.

Unit: seconds.

ReceiverAddress

String

Yes

No

The detailed address of the recipient.

None.

AlreadyHaveSag

Boolean

No

No

Specifies whether an SAG device already exists.

Default value: false. Valid values:

-   true
-   false

HaType

String

Yes

No

The deployment mode of the SAG device.

Valid values:

-   no\_backup: Only one SAG device is bought and deployed to connect to Alibaba Cloud.
-   cold\_backup: Two SAG devices are bought and deployed in active-standby mode. One SAG device serves as an active device and the other serves as a standby device. Only the active device is connected to Alibaba Cloud. If the active device does not work as expected, you must manually perform a switchover.
-   warm\_backup: Two SAG devices are bought and deployed in active-active mode. Both SAG devices are connected to Alibaba Cloud. If an active device does not work as expected, a failover is automatically performed.
    
    **Note** If you set the HardWareSpec property to sag-vcpe, you must set this property to warm\_backup.
    

Period

Integer

Yes

No

The subscription period of the SAG instance.

Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36.

Unit: months.

MaxBandWidth

Integer

Yes

No

The bandwidth of the SAG instance.

Valid values:

-   Valid values if the HardWareSpec property is set to sag-100wm: 2 to 50.
-   Valid values if the HardWareSpec property is set to sag-1000: 10 to 500.
-   Valid values if the HardWareSpec property is set to sag-vcpe: 10 to 1000.

Unit: Mbit/s.

AutoPay

Boolean

No

No

Specifies whether to enable auto-payment for the subscription SAG instance.

Default value: false. Valid values:

-   true
-   false

ReceiverMobile

String

Yes

No

The mobile number of the recipient.

None.

ReceiverDistrict

String

Yes

No

The district where the SAG device is received.

None.

Activate

Boolean

No

Yes

Specifies whether to activate the SAG instance.

Default value: false. Valid values:

-   true
-   false

ChargeType

String

Yes

No

The billing method of the SAG instance.

Set the value to PREPAY, which indicates the subscription billing method.

ReceiverState

String

Yes

No

The province where the SAG device is received.

None.

ReceiverName

String

Yes

No

The name of the recipient.

None.

ReceiverEmail

String

Yes

No

The email address of the recipient.

None.

## Return values

Fn::GetAtt

-   OrderId: the ID of the order.
-   SmartAGId: the ID of the SAG instance.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ReceiverCountry": {
      "Type": "String",
      "Description": "The country of the recipient address.",
      "Default": "China"
    },
    "ReceiverZip": {
      "Type": "String",
      "Description": "The postcode of the recipient address.",
      "Default": "310000"
    },
    "BuyerMessage": {
      "Type": "String",
      "Description": "The remarks left by the buyer.",
      "Default": "Message"
    },
    "ReceiverTown": {
      "Type": "String",
      "Description": "The town of the recipient address.",
      "Default": "Zhuantang"
    },
    "HardWareSpec": {
      "Type": "String",
      "Description": "The type of the SAG instance. Valid values:\nsag-100wm\nsag-1000\nsag-vcpe",
      "Default": "sag-100wm"
    },
    "Name": {
      "Type": "String",
      "Description": "The name of the SAG instance.\nThe name must be 2 to 128 characters in length and can contain digits, periods (.),\nunderscores (_), and hyphens (-). It must start with a letter.",
      "Default": "test"
    },
    "ReceiverCity": {
      "Type": "String",
      "Description": "The city of the recipient address.",
      "Default": "Hangzhou"
    },
    "ReceiverAddress": {
      "Type": "String",
      "Description": "The detailed address of the recipient.",
      "Default": "No. XX"
    },
    "HaType": {
      "Type": "String",
      "Description": "The deployment mode. Valid values:\nno_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.\ncold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active\ndevice and the other serves as a standby device. Only the active device is connected\nto Alibaba Cloud. If the active device is not working as expected, you must manually\nperform a switchover.\nwarm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to\nAlibaba Cloud. If an active device is not working as expected, a failover is automatically\nperformed.\nNote If you want to create an SAG vCPE instance, set the value to warm_backup.",
      "AllowedValues": [
        "cold_backup",
        "no_backup",
        "warm_backup"
      ],
      "Default": "cold_backup"
    },
    "Period": {
      "Type": "Number",
      "Description": "The subscription period of the SAG instance. Unit: months.\nValid values: 1 to 9, 12, 24, and 36.",
      "Default": 12
    },
    "MaxBandWidth": {
      "Type": "Number",
      "Description": "The bandwidth of the SAG instance.\nIf you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.\nIf you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.\nIf you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.",
      "Default": 12
    },
    "AutoPay": {
      "Type": "Boolean",
      "Description": "Specifies whether to enable auto-payment for the instance. Valid values:\ntrue: yes\nfalse: no\nIf you set the parameter to false, go to Billing Management to complete the payment\nafter you call this operation. After you complete the payment, the instance can be\ncreated.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ],
      "Default": "false"
    },
    "ReceiverMobile": {
      "Type": "String",
      "Description": "The mobile phone number of the recipient.",
      "Default": "1884085****"
    },
    "ReceiverDistrict": {
      "Type": "String",
      "Description": "The district of the recipient address.",
      "Default": "Xihu"
    },
    "Activate": {
      "Type": "Boolean",
      "Description": "Activate SAG or not. Default is False",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ],
      "Default": "true"
    },
    "ChargeType": {
      "Type": "String",
      "Description": "The billing method of the SAG instance. \nSet the value to PREPAY, which specifies the subscription billing method.",
      "Default": "PREPAY"
    },
    "ReceiverState": {
      "Type": "String",
      "Description": "The province of the recipient address.",
      "Default": "China"
    },
    "ReceiverName": {
      "Type": "String",
      "Description": "The name of the recipient.",
      "Default": "Zhang San"
    },
    "ReceiverEmail": {
      "Type": "String",
      "Description": "The email address of the recipient.",
      "Default": "xx@example.com"
    }
  },
  "Resources": {
    "SmartAccessGateway": {
      "Type": "ALIYUN::SAG::SmartAccessGateway",
      "Properties": {
        "ReceiverCountry": {
          "Ref": "ReceiverCountry"
        },
        "ReceiverZip": {
          "Ref": "ReceiverZip"
        },
        "BuyerMessage": {
          "Ref": "BuyerMessage"
        },
        "ReceiverTown": {
          "Ref": "ReceiverTown"
        },
        "HardWareSpec": {
          "Ref": "HardWareSpec"
        },
        "Name": {
          "Ref": "Name"
        },
        "ReceiverCity": {
          "Ref": "ReceiverCity"
        },
        "ReceiverAddress": {
          "Ref": "ReceiverAddress"
        },
        "HaType": {
          "Ref": "HaType"
        },
        "Period": {
          "Ref": "Period"
        },
        "MaxBandWidth": {
          "Ref": "MaxBandWidth"
        },
        "AutoPay": {
          "Ref": "AutoPay"
        },
        "ReceiverMobile": {
          "Ref": "ReceiverMobile"
        },
        "ReceiverDistrict": {
          "Ref": "ReceiverDistrict"
        },
        "Activate": {
          "Ref": "Activate"
        },
        "ChargeType": {
          "Ref": "ChargeType"
        },
        "ReceiverState": {
          "Ref": "ReceiverState"
        },
        "ReceiverName": {
          "Ref": "ReceiverName"
        },
        "ReceiverEmail": {
          "Ref": "ReceiverEmail"
        }
      }
    }
  },
  "Outputs": {
    "OrderId": {
      "Description": "The ID of the order.",
      "Value": {
        "Fn::GetAtt": [
          "SmartAccessGateway",
          "OrderId"
        ]
      }
    },
    "SmartAGId": {
      "Description": "The ID of the SAG instance.",
      "Value": {
        "Fn::GetAtt": [
          "SmartAccessGateway",
          "SmartAGId"
        ]
      }
    }
  }
}
```
