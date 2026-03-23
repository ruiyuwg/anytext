ALIYUN::SAG::App is used to create a Smart Access Gateway (SAG) app instance.

## Syntax

```
{
  "Type": "ALIYUN::SAG::App",
  "Properties": {
    "ChargeType": String,
    "UserCount": Integer,
    "DataPlan": Integer,
    "Period": Integer,
    "AutoPay": Boolean
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

ChargeType

String

No

No

The billing method of the SAG app instance that you want to create.

Set the value to PREPAY.

This value indicates that the SAG app instance is a subscription instance.

UserCount

Integer

Yes

No

The quota of client accounts for the SAG app instance.

The quota must be a positive multiple of 5. For example, you can set this property to 5, 10, or 15.

DataPlan

Integer

Yes

No

The quota of the data transfer plan that the system allows each client account to use for free each month.

Unit: GB. Set the value to 5.

**Note** The system allows each client account to use a data transfer plan of 5 GB for free each month.

Period

Integer

Yes

No

The subscription duration of the SAG app instance.

Unit: months.

Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36.

AutoPay

Boolean

Yes

No

Specifies whether to automatically pay the bills of the SAG app instance.

Valid values:

-   true: automatically pays the bills of the SAG app instance.
-   false: does not automatically pay the bills of the SAG app instance. This is the default value.

If you set this property to false, you must log on to the Alibaba Cloud Management Console, go to the Orders page, and then complete the payment after you call this operation. This way, the instance is created.

## Response parameters

Fn::GetAtt

-   OrderId: the order ID of the SAG app instance.
-   SmartAGId: the ID of the SAG app instance.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "UserCount": {
      "Type": "Number",
      "Description": "The quota of client accounts for the SAG APP instance.\nNote The quota must be a positive multiple of 5, for example, 5, 10, and 15."
    },
    "DataPlan": {
      "Type": "Number",
      "Description": "The quota of the traffic plan that the system allows each client account to use for\nfree each month. Unit: GB. Set the value to 5.\nNote The system allows each client account to use 5 GB traffic plan for free."
    },
    "Period": {
      "Type": "Number",
      "Description": "The subscription period of the SAG APP instance. Unit: months.\nValid values: 1~9, 12, 24, and 36."
    },
    "AutoPay": {
      "Type": "Boolean",
      "Description": "Specifies whether to automatically pay the bills of SAG APP instances. Default value:\nfalse. Valid values:\ntrue: automatically pays the bills of SAG APP instances.\nfalse: does not automatically pay the bills of SAG APP instances.\nIf you set the parameter to false, after you call this operation, go to Billing Management\nof the SAG console to complete the payment, the instance can be created.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    }
  },
  "Resources": {
    "App": {
      "Type": "ALIYUN::SAG::App",
      "Properties": {
        "UserCount": {
          "Ref": "UserCount"
        },
        "DataPlan": {
          "Ref": "DataPlan"
        },
        "Period": {
          "Ref": "Period"
        },
        "AutoPay": {
          "Ref": "AutoPay"
        }
      }
    }
  },
  "Outputs": {
    "OrderId": {
      "Description": "The ID of the order that you placed to subscribe to the SAG APP instance.",
      "Value": {
        "Fn::GetAtt": [
          "App",
          "OrderId"
        ]
      }
    },
    "SmartAGId": {
      "Description": "The ID of the SAG APP instance.",
      "Value": {
        "Fn::GetAtt": [
          "App",
          "SmartAGId"
        ]
      }
    }
  }
}
```
