ALIYUN::GA::BandwidthPackage is used to create a bandwidth plan.

## Syntax

```
{
  "Type": "ALIYUN::GA::BandwidthPackage",
  "Properties": {
    "BandwidthType": String,
    "CbnGeographicRegionIdB": String,
    "Type": String,
    "CbnGeographicRegionIdA": String,
    "AutoUseCoupon": String,
    "PricingCycle": String,
    "ChargeType": String,
    "Bandwidth": Integer,
    "Ratio": String,
    "Duration": String,
    "AutoPay": String,
    "BillingType": String
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

BandwidthType

String

No

Yes

The bandwidth type.

Valid values:

-   Basic: basic acceleration bandwidth
-   Enhanced: enhanced acceleration bandwidth
-   Advanced: premium acceleration bandwidth

CbnGeographicRegionIdB

String

No

No

Area B defined in the cross-border bandwidth plan.

None

Type

String

Yes

No

The type of the bandwidth plan.

Valid values:

-   Basic: basic bandwidth plan
-   CrossDomain: cross-border bandwidth plan

CbnGeographicRegionIdA

String

No

No

Area A defined in the cross-border bandwidth plan.

None

AutoUseCoupon

String

No

Yes

Specifies whether to use coupons.

Valid values:

-   True
-   False

PricingCycle

String

No

No

The unit of the subscription period.

Valid values:

-   Month
-   Year

ChargeType

String

No

No

The billing method of the bandwidth plan.

Set the value to PREPAY.

Bandwidth

Integer

Yes

Yes

The bandwidth provided by the bandwidth plan.

Valid values: 2 to 2000

Unit: MB

Ratio

String

No

No

The minimum bandwidth guaranteed in percentile.

None

Duration

String

No

No

The subscription period.

-   Valid values when the PricingCycle parameter is set to Month: 1 to 9
-   Valid values when the PricingCycle parameter is set to Year: 1 to 3

AutoPay

String

No

Yes

Specifies whether to enable automatic payment.

Valid values:

-   True
-   False

BillingType

String

No

No

The billing method for network usage.

None

## Response parameters

Fn::GetAtt

-   BandwidthPackageName: the name of the bandwidth plan.
-   CbnGeographicRegionIdA: Area A defined in the cross-border bandwidth plan.
-   CbnGeographicRegionIdB: Area B defined in the cross-border bandwidth plan.
-   AutoPay: indicates whether automatic payment is enabled.
-   BandwidthType: the bandwidth type.
-   Type: the type of the bandwidth plan.
-   AutoUseCoupon: indicates whether coupons are used.
-   ChargeType: the billing method of the bandwidth plan.
-   Bandwidth: the bandwidth provided by the bandwidth plan.
-   BandwidthPackageId: the ID of the bandwidth plan.
-   Ratio: the minimum bandwidth guaranteed in percentile.
-   BillingType: the billing method for network usage.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      GaBandwidthPackage:
        Type: ALIYUN::GA::BandwidthPackage
        Properties:
          CbnGeographicRegionIdA: cn-beijing
          CbnGeographicRegionIdB: cn-hangzhou
          BandwidthType: Basic
          Type: CrossDomain
          AutoUseCoupon: 'True'
          PricingCycle: Month
          ChargeType: PREPAY
          Bandwidth: 200
          Duration: 3
          AutoPay: 'False'
    Outputs: {}
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "GaBandwidthPackage": {
          "Type": "ALIYUN::GA::BandwidthPackage",
          "Properties": {
            "CbnGeographicRegionIdA": "cn-beijing",
            "CbnGeographicRegionIdB": "cn-hangzhou",
            "BandwidthType": "Basic",
            "Type": "CrossDomain",
            "AutoUseCoupon": "True",
            "PricingCycle": "Month",
            "ChargeType": "PREPAY",
            "Bandwidth": 200,
            "Duration": 3,
            "AutoPay": "False"
          }
        }
      },
      "Outputs": {
      }
    }
    ```
