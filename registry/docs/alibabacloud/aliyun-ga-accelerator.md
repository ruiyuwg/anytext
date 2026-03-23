ALIYUN::GA::Accelerator is used to create a Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::Accelerator",
  "Properties": {
    "AcceleratorName": String,
    "AutoUseCoupon": String,
    "PricingCycle": String,
    "Duration": String,
    "AutoPay": Boolean,
    "Spec": String,
    "BandwidthBillingType": String,
    "InstanceChargeType": String,
    "ResourceGroupId": String,
    "IpSetConfig": Map,
    "EnableCrossBorder": Boolean
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

AcceleratorName

String

No

No

The name of the GA instance.

None.

AutoUseCoupon

String

No

No

Specifies whether to use coupons.

Valid values:

-   True
    
-   False
    

PricingCycle

String

No

No

The unit of the billing cycle.

Valid values:

-   Month
    
-   Year
    

Duration

String

No

No

The billing cycle.

Valid values:

-   Valid values when PricingCycle is set to Month: 1 to 9.
    
-   Valid values when PricingCycle is set to Year: 1 to 3.
    

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

Valid values:

-   True
    
-   False
    

Spec

String

No

No

The specification of the GA instance.

Valid values:

-   1: Small Ⅰ (specification unit).
    
-   2: Small ⅠⅠ.
    
-   3: Small ⅠⅠⅠ.
    
-   5: Medium Ⅰ.
    
-   8: Medium ⅠⅠ.
    
-   10: Medium ⅠⅠⅠ.
    

BandwidthBillingType

String

No

No

The metering method for the bandwidth.

Valid values:

-   **BandwidthPackage**: You are charged for the bandwidth based on bandwidth plans.
    
-   **CDT**: You are charged for the bandwidth based on data transfers.
    

InstanceChargeType

String

No

No

The billing method.

Valid values:

-   PREPAY: subscription.
    
-   POSTPAY: pay-as-you-go.
    

Default value: PREPAY.

ResourceGroupId

String

No

No

The ID of the resource group to which the standard GA instance belongs.

None.

IpSetConfig

Map

No

No

The configurations of the acceleration area.

For more information, see [IpSetConfig property](#1122fcb350dyh).

EnableCrossBorder

Boolean

No

No

Specifies whether to enable the cross-border mode.  

Valid values:

-   true
    
-   false
    

## IpSetConfig syntax

```
"IpSetConfig": {
  "AccessMode": String
}
```

## IpSetConfig property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AccessMode

String

No

No

The access mode of the acceleration area.

Valid values:

-   **UserDefine**: custom nearby access mode. You can select acceleration areas and regions based on your business requirements. GA allocates a separate elastic IP address (EIP) to each acceleration region.
    
-   **Anycast**: automatic nearby access mode. You do not need to specify an acceleration area. GA allocates an Anycast EIP to multiple regions across the globe. You can connect to the nearest access point of the Alibaba Cloud global transmission network by sending requests to the Anycast EIP.
    

## Return values

Fn::GetAtt

-   AcceleratorName: the name of the GA instance.
    
-   AutoUseCoupon: indicates whether coupons are used.
    
-   PricingCycle: the unit of the billing cycle.
    
-   PaymentType: the billing method.
    
-   Duration: the billing cycle.
    
-   AutoPay: indicates whether automatic payment is enabled.
    
-   OrderId: the ID of the order.
    
-   Spec: the specification of the GA instance.
    
-   AcceleratorId: the ID of the GA instance.
    
-   DnsName: the canonical name (CNAME) assigned to the GA instance.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  GaAccelerator:
    Type: ALIYUN::GA::Accelerator
    Properties:
      AcceleratorName: GATest
      AutoUseCoupon: 'True'
      PricingCycle: Month
      Duration: 3
      AutoPay: 'True'
      Spec: 1
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "GaAccelerator": {
      "Type": "ALIYUN::GA::Accelerator",
      "Properties": {
        "AcceleratorName": "GATest",
        "AutoUseCoupon": "True",
        "PricingCycle": "Month",
        "Duration": 3,
        "AutoPay": "True",
        "Spec": 1
      }
    }
  },
  "Outputs": {
  }
}
```
