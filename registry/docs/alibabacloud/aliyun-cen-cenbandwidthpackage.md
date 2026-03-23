ALIYUN::CEN::CenBandwidthPackage is used to purchase a bandwidth plan before you use Cloud Enterprise Network (CEN) to connect network instances that reside in different regions.

## Syntax

```
{
  "Type": "ALIYUN::CEN::CenBandwidthPackage",
  "Properties": {
    "Description": String,
    "BandwidthPackageChargeType": String,
    "GeographicRegionBId": String,
    "GeographicRegionAId": String,
    "PricingCycle": String,
    "AutoRenew": "Boolean",
    "Bandwidth": Integer,
    "Period": Integer,
    "AutoPay": "Boolean",
    "AutoRenewDuration": Integer,
    "Name": String,
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

Bandwidth

Integer

Yes

Yes

The maximum bandwidth provided by the bandwidth plan.

Unit: Mbit/s.

Minimum value: 2.

GeographicRegionAId

String

Yes

No

The area to which the region of Network Instance A belongs.

Valid values:

-   China
    
-   North-America
    
-   Asia-Pacific
    
-   Europe
    

GeographicRegionBId

String

Yes

No

The area to which the region of Network Instance B belongs.

Valid values:

-   China
    
-   North-America
    
-   Asia-Pacific
    
-   Europe
    

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

Valid values:

-   true (default)
    
-   false
    

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

Valid values:

-   true
    
-   false (default)
    

AutoRenewDuration

Integer

No

No

The auto-renewal period.

This property takes effect when AutoRenew is set to true.

Valid values:

-   1
    
-   2
    
-   3
    

Unit: month.

BandwidthPackageChargeType

String

No

No

The billing method of the bandwidth plan.

Valid values:

-   POSTPAY
    
-   PREPAY
    

Description

String

No

Yes

The description of the bandwidth plan.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

It can contain letters, digits, hyphens (-), periods (.), and underscores (\_).

Name

String

No

Yes

The name of the bandwidth plan.

The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

It can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

Period

Integer

No

No

The subscription duration of the bandwidth plan.

Default value: 1.

PricingCycle

String

No

No

The unit of the billing cycle of the bandwidth plan.

Valid values:

-   Month (default)
    
-   Year
    

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

Tags

List

No

Yes

The tags.

For more information, see [Tags properties](#title-7sd-9iu-9ct).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]
```

## Tags properties

Property

Type

Required

Editable

Description

Constraint

Key

String

Yes

No

The tag key.

None.

Value

String

No

No

The tag value.

None.

## Return values

Fn::GetAtt

-   CenBandwidthPackageId: the ID of the purchased bandwidth plan.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  CenBandwidthPackage:
    Type: ALIYUN::CEN::CenBandwidthPackage
    Properties:
      GeographicRegionBId: China
      GeographicRegionAId: China
      Bandwidth: 3
      BandwidthPackageChargeType: POSTPAY
Outputs:
  CenBandwidthPackageId:
    Description: The ID of the bandwidth package.
    Value:
      Fn::GetAtt:
        - CenBandwidthPackage
        - CenBandwidthPackageId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "CenBandwidthPackage": {
      "Type": "ALIYUN::CEN::CenBandwidthPackage",
      "Properties": {
        "GeographicRegionBId": "China",
        "GeographicRegionAId": "China",
        "Bandwidth": 3,
        "BandwidthPackageChargeType": "POSTPAY"
      }
    }
  },
  "Outputs": {
    "CenBandwidthPackageId": {
      "Description": "The ID of the bandwidth package.",
      "Value": {
        "Fn::GetAtt": [
          "CenBandwidthPackage",
          "CenBandwidthPackageId"
        ]
      }
    }
  }
}
```
