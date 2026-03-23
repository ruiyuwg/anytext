ALIYUN::BSS::ResourcePackage is used to create a resource plan.

## Syntax

```
{
  "Type": "ALIYUN::BSS::ResourcePackage",
  "Properties": {
    "ProductCode": String,
    "PricingCycle": String,
    "PackageType": String,
    "Specification": String,
    "Duration": Integer,
    "EffectiveDate": String,
    "AutoRenewPeriod": Integer,
    "AutoRenew": Boolean,
    "AutoRenewPeriodUnit": String
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

Duration

Integer

Yes

No

The validity period of the resource plan.

You can call the [DescribeResourcePackageProduct](/help/en/user-center/developer-reference/api-describeresourcepackageproduct#doc-api-BssOpenApi-DescribeResourcePackageProduct) operation and check the value of the Value parameter in AvailableDuration to query the validity period.

PackageType

String

Yes

No

The type of the resource plan.

You can call the [DescribeResourcePackageProduct](/help/en/user-center/developer-reference/api-describeresourcepackageproduct#doc-api-BssOpenApi-DescribeResourcePackageProduct) operation and check the value of the Code parameter in ResourcePackage to query the type of the resource plan.

ProductCode

String

Yes

No

The service code.

You can call the [QueryProductList](/help/en/user-center/developer-reference/api-queryproductlist#doc-api-BssOpenApi-QueryProductList) operation to query the service code.

Specification

String

Yes

No

The specification of the resource plan.

You can call the [DescribeResourcePackageProduct](/help/en/user-center/developer-reference/api-describeresourcepackageproduct#doc-api-BssOpenApi-DescribeResourcePackageProduct) operation and check the value of the Value parameter in Specification to query the specification.

**Note**

The `DescribeResourcePackageProduct` operation returns all resource plan types that correspond to the service code specified by the `ProductCode` parameter. If you want to query the specification of a resource plan, check the `Code` value that corresponds to the resource plan type specified by the `PackageType` parameter in the operation.

AutoRenewPeriod

Integer

No

Yes

The auto-renewal period.

Unit: month.

Valid values: 1, 2, 3, and 6.

AutoRenew

Boolean

No

Yes

Specifies whether to enable auto-renewal.

Valid values:

-   true
    
-   false (default)
    

AutoRenewPeriodUnit

String

No

Yes

The unit of the auto-renewal period.

Valid values:

-   Month
    
-   Year
    

EffectiveDate

String

No

No

The point in time when the resource plan takes effect.

If you do not specify this property, the resource plan takes effect when the resource plan is created.

Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

PricingCycle

String

No

No

The unit of the validity period of the resource plan.

Valid values:

-   Month (default)
    
-   Year
    

## Return values

Fn::GetAtt

-   InstanceId: the ID of the resource plan.
    
-   OrderId: the ID of the order.
    

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ProductCode:
    Type: String
    Description: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
    Default: ossbag
  PricingCycle:
    Type: String
    Description: 'The validity of the specified resource package. Default value: Month. Valid values: Month, Year'
    AllowedValues:
      - Month
      - Year
    Default: Month
  PackageType:
    Type: String
    Description: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
    Default: FPT_ossbag_deadlineAcc_CdnOut_china_common
  Specification:
    Type: String
    Description: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
    Default: '1024'
  Duration:
    Type: Number
    Description: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
    Default: 6
  EffectiveDate:
    Type: String
    Description: 'The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ'
    Default: '2021-12-03T12:00:00Z'
Resources:
  ResourcePackage:
    Type: ALIYUN::BSS::ResourcePackage
    Properties:
      ProductCode:
        Ref: ProductCode
      PricingCycle:
        Ref: PricingCycle
      PackageType:
        Ref: PackageType
      Specification:
        Ref: Specification
      Duration:
        Ref: Duration
      EffectiveDate:
        Ref: EffectiveDate
Outputs:
  InstanceId:
    Description: The ID of the specified instance.
    Value:
      Fn::GetAtt:
        - ResourcePackage
        - InstanceId
  OrderId:
    Description: The ID of the specified order.
    Value:
      Fn::GetAtt:
        - ResourcePackage
        - OrderId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ProductCode": {
      "Type": "String",
      "Description": "The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.",
      "Default": "ossbag"
    },
    "PricingCycle": {
      "Type": "String",
      "Description": "The validity of the specified resource package. Default value: Month. Valid values: Month, Year",
      "AllowedValues": [
        "Month",
        "Year"
      ],
      "Default": "Month"
    },
    "PackageType": {
      "Type": "String",
      "Description": "The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.",
      "Default": "FPT_ossbag_deadlineAcc_CdnOut_china_common"
    },
    "Specification": {
      "Type": "String",
      "Description": "The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.",
      "Default": "1024"
    },
    "Duration": {
      "Type": "Number",
      "Description": "The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.",
      "Default": 6
    },
    "EffectiveDate": {
      "Type": "String",
      "Description": "The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ",
      "Default": "2021-12-03T12:00:00Z"
    }
  },
  "Resources": {
    "ResourcePackage": {
      "Type": "ALIYUN::BSS::ResourcePackage",
      "Properties": {
        "ProductCode": {
          "Ref": "ProductCode"
        },
        "PricingCycle": {
          "Ref": "PricingCycle"
        },
        "PackageType": {
          "Ref": "PackageType"
        },
        "Specification": {
          "Ref": "Specification"
        },
        "Duration": {
          "Ref": "Duration"
        },
        "EffectiveDate": {
          "Ref": "EffectiveDate"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the specified instance.",
      "Value": {
        "Fn::GetAtt": [
          "ResourcePackage",
          "InstanceId"
        ]
      }
    },
    "OrderId": {
      "Description": "The ID of the specified order.",
      "Value": {
        "Fn::GetAtt": [
          "ResourcePackage",
          "OrderId"
        ]
      }
    }
  }
}
```
