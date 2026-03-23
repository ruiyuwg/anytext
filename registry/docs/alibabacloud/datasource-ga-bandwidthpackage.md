DATASOURCE::GA::BandwidthPackage is used to query the information about a bandwidth plan.

## Syntax

```
{
  "Type": "DATASOURCE::GA::BandwidthPackage",
  "Properties": {
    "BandwidthPackageId": String,
    "RefreshOptions": String
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

BandwidthPackageId

String

Yes

Yes

The ID of the bandwidth plan.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   BandwidthPackageName: the name of the bandwidth plan.
    
-   CbnGeographicRegionIdB: Area B of the cross-border acceleration bandwidth plan.
    
-   Description: the description of the bandwidth plan.
    
-   CbnGeographicRegionIdA: Area A of the cross-border acceleration bandwidth plan.
    
-   ResourceGroupId: the ID of the resource group.
    
-   AutoRenew: indicates whether auto-renewal is enabled.
    
-   CreateTime: the time when the bandwidth plan was created.
    
-   RenewalStatus: the auto-renewal status.
    
-   AutoRenewDuration: the auto-renewal duration.
    
-   BandwidthType: the bandwidth type.
    
-   Type: the type of the bandwidth plan.
    
-   Bandwidth: the bandwidth of the bandwidth plan.
    
-   ExpiredTime: the timestamp that indicates the expiration time of the bandwidth plan.
    
-   PaymentType: the payment method.
    
-   BandwidthPackageId: the ID of the bandwidth plan.
    
-   Ratio: the percentage of the guaranteed minimum bandwidth when the pay-by-95th-percentile metering method is used.
    
-   BillingType: the metering method when the pay-as-you-go billing method is used.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  BandwidthPackageId:
    Description:
      en: The Resource ID of the bandwidth.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      BandwidthPackageId:
        Ref: BandwidthPackageId
    Type: DATASOURCE::GA::BandwidthPackage
Outputs:
  AutoRenew:
    Description: Whether to enable automatic renewal.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AutoRenew
  AutoRenewDuration:
    Description: 'The duration of automatic renewal. Unit: Month.'
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AutoRenewDuration
  Bandwidth:
    Description: 'The bandwidth value of the bandwidth package. Unit: Mbps. Value
      range: 2~2000.'
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Bandwidth
  BandwidthPackageId:
    Description: The Resource ID of the bandwidth.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - BandwidthPackageId
  BandwidthPackageName:
    Description: The Resource name of the bandwidth.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - BandwidthPackageName
  BandwidthType:
    Description: Bandwidth type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - BandwidthType
  BillingType:
    Description: Post-payment billing method.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - BillingType
  CbnGeographicRegionIdA:
    Description: The interworking region A of cross-region acceleration packages.
      The value is China-mainland only.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CbnGeographicRegionIdA
  CbnGeographicRegionIdB:
    Description: The interworking Region B of cross-region acceleration packages.
      The value is Global only.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CbnGeographicRegionIdB
  CreateTime:
    Description: Bandwidth package creation time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CreateTime
  Description:
    Description: the description of bandwidth package.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Description
  ExpiredTime:
    Description: Bandwidth package expiration time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ExpiredTime
  PaymentType:
    Description: Type of payment.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PaymentType
  Ratio:
    Description: '95 Billing guaranteed percentage. Value range: 30~100.'
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Ratio
  RenewalStatus:
    Description: Renewal status.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - RenewalStatus
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ResourceGroupId
  Type:
    Description: The type of the bandwidth package.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Type
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "BandwidthPackageId": {
      "Type": "String",
      "Description": {
        "en": "The Resource ID of the bandwidth."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::GA::BandwidthPackage",
      "Properties": {
        "BandwidthPackageId": {
          "Ref": "BandwidthPackageId"
        }
      }
    }
  },
  "Outputs": {
    "BandwidthPackageName": {
      "Description": "The Resource name of the bandwidth.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BandwidthPackageName"
        ]
      }
    },
    "CbnGeographicRegionIdB": {
      "Description": "The interworking Region B of cross-region acceleration packages. The value is Global only.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CbnGeographicRegionIdB"
        ]
      }
    },
    "Description": {
      "Description": "the description of bandwidth package.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "CbnGeographicRegionIdA": {
      "Description": "The interworking region A of cross-region acceleration packages. The value is China-mainland only.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CbnGeographicRegionIdA"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "AutoRenew": {
      "Description": "Whether to enable automatic renewal.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AutoRenew"
        ]
      }
    },
    "CreateTime": {
      "Description": "Bandwidth package creation time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "RenewalStatus": {
      "Description": "Renewal status.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RenewalStatus"
        ]
      }
    },
    "AutoRenewDuration": {
      "Description": "The duration of automatic renewal. Unit: Month.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AutoRenewDuration"
        ]
      }
    },
    "BandwidthType": {
      "Description": "Bandwidth type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BandwidthType"
        ]
      }
    },
    "Type": {
      "Description": "The type of the bandwidth package.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Type"
        ]
      }
    },
    "Bandwidth": {
      "Description": "The bandwidth value of the bandwidth package. Unit: Mbps. Value range: 2~2000.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Bandwidth"
        ]
      }
    },
    "ExpiredTime": {
      "Description": "Bandwidth package expiration time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ExpiredTime"
        ]
      }
    },
    "PaymentType": {
      "Description": "Type of payment.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PaymentType"
        ]
      }
    },
    "BandwidthPackageId": {
      "Description": "The Resource ID of the bandwidth.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BandwidthPackageId"
        ]
      }
    },
    "Ratio": {
      "Description": "95 Billing guaranteed percentage. Value range: 30~100.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Ratio"
        ]
      }
    },
    "BillingType": {
      "Description": "Post-payment billing method.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BillingType"
        ]
      }
    }
  }
}
                        
```
