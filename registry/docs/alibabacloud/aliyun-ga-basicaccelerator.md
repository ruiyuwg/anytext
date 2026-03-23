ALIYUN::GA::BasicAccelerator is used to create a basic Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::BasicAccelerator",
  "Properties": {
    "AutoUseCoupon": String,
    "AutoRenew": Boolean,
    "AutoPay": Boolean,
    "AutoRenewDuration": Integer,
    "BandwidthBillingType": String,
    "ChargeType": String,
    "Duration": Integer,
    "PromotionOptionNo": String,
    "PricingCycle": String,
    "ResourceGroupId": String,
    "Tags": List
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

AutoUseCoupon

String

No

No

Specifies whether to automatically pay bills by using coupons.

Valid values:

-   **true**
    
-   **false** (default)
    

**Note**

This property takes effect only when **AutoPay** is set to **true**.

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

Valid values:

-   **true**
    
-   **false** (default)
    

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

Valid values:

-   **false** (default): disables automatic payment. After an order is generated, you must go to the Expenses and Costs console to complete the payment.
    
-   **true**: enables automatic payment. After an order is generated, the system automatically completes the payment.
    

AutoRenewDuration

Integer

No

No

The auto-renewal duration.

Unit: month.

Valid values: **1** to **12**. Default value: **1**.

**Note**

This property takes effect only when **AutoRenew** is set to **true**.

BandwidthBillingType

String

No

No

The bandwidth billing method.

Valid values:

-   **BandwidthPackage**: You are charged based on bandwidth plans.
    
-   **CDT**: You are charged based on data transfers. The bills are managed by Cloud Data Transfer (CDT).
    
-   **CDT95**: You are charged based on the 95th percentile bandwidth. The bills are managed by CDT. This value is available only for users that are included in the whitelist.
    

ChargeType

String

No

No

The billing method.

Valid values:

-   **PREPAY** (default): subscription
    
-   **POSTPAY**: pay-as-you-go
    

Duration

Integer

No

No

The subscription duration.

-   Valid values of **Duration** when **PricingCycle** is set to **Month**: **1** to **9**.
    
-   Valid values of **Duration** when **PricingCycle** is set to **Year**: **1** to **3**.
    

PromotionOptionNo

String

No

No

The coupon code.

None.

PricingCycle

String

No

No

The unit of the billing cycle.

Valid values:

-   **Month**
    
-   **Year**
    

ResourceGroupId

String

No

No

The ID of the resource group to which the basic GA instance belongs.

None.

Tags

List

No

No

The tags of the basic GA instance.

For more information, see [Tags properties](#d706a4b474sfn).

PromotionOptionNo

String

No

No

The coupon code.

**Note**

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

No

No

The tag key of the basic GA instance.

The tag key cannot be an empty string.

The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

You can specify up to 20 tag keys.

Value

String

No

No

The tag value of the basic GA instance.

The tag value cannot be an empty string.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

You can specify up to 20 tag values.

## Return values

Fn::GetAtt

AcceleratorId: the ID of the basic GA instance.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  BandwidthBillingType:
    Type: String
    Description:
      en: |-
        The bandwidth billing method. Valid values:
        BandwidthPackage: billed based on bandwidth plans.
        CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
        CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
    AllowedValues:
      - BandwidthPackage
      - CDT
      - CDT95
    Required: false
    Default: CDT
  ChargeType:
    Type: String
    Description:
      en: |-
        The billing method. Valid values:
        PREPAY (default)POSTPAY
    AllowedValues:
      - POSTPAY
      - PREPAY
    Required: false
    Default: POSTPAY
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::BasicAccelerator
    Properties:
      BandwidthBillingType:
        Ref: BandwidthBillingType
      ChargeType:
        Ref: ChargeType
Outputs:
  AcceleratorId:
    Description: The ID of the accelerated IP address.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AcceleratorId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "BandwidthBillingType": {
      "Type": "String",
      "Description": {
        "en": "The bandwidth billing method. Valid values:\nBandwidthPackage: billed based on bandwidth plans.\nCDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).\nCDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information."
      },
      "AllowedValues": [
        "BandwidthPackage",
        "CDT",
        "CDT95"
      ],
      "Required": false,
      "Default": "CDT"
    },
    "ChargeType": {
      "Type": "String",
      "Description": {
        "en": "The billing method. Valid values:\nPREPAY (default)POSTPAY"
      },
      "AllowedValues": [
        "POSTPAY",
        "PREPAY"
      ],
      "Required": false,
      "Default": "POSTPAY"
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::BasicAccelerator",
      "Properties": {
        "BandwidthBillingType": {
          "Ref": "BandwidthBillingType"
        },
        "ChargeType": {
          "Ref": "ChargeType"
        }
      }
    }
  },
  "Outputs": {
    "AcceleratorId": {
      "Description": "The ID of the accelerated IP address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AcceleratorId"
        ]
      }
    }
  }
}
                        
```
