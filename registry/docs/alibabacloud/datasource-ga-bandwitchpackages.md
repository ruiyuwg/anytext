DATASOURCE::GA::BandwidthPackages is used to query the information about bandwidth plans.

## Syntax

```
{
  "Type": "DATASOURCE::GA::BandwidthPackages",
  "Properties": {
    "Type": String,
    "ResourceGroupId": String,
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

Type

String

No

Yes

The type of the bandwidth plan.

Valid values:

-   **Basic**: basic bandwidth plan
    
-   **CrossDomain**: cross-border acceleration bandwidth plan
    

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

BandwidthPackageId

String

No

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

-   BandwidthPackageIds: the IDs of the bandwidth plans.
    
-   BandwidthPackages: details of the bandwidth plans.
    

**Property**

**Type**

**Description**

**Constraint**

BandwidthPackageIds

List

The IDs of the bandwidth plans.

None.

BandwidthPackages

List

Details of the bandwidth plans.

None.

ExpiredTime

String

The expiration time of the bandwidth plan.

None.

Type

String

The type of the bandwidth plan.

None.

CbnGeographicRegionIdA

String

Area A of the cross-border acceleration bandwidth plan.

None.

ResourceGroupId

String

The ID of the resource group.

None.

CreateTime

String

The time when the bandwidth plan was created.

None.

BandwidthPackageId

String

The ID of the bandwidth plan.

None.

Ratio

String

The percentage of the minimum bandwidth guaranteed if the pay-by-95th-percentile metering method is used.

None.

CbnGeographicRegionIdB

String

Area B of the cross-border acceleration bandwidth plan.

None.

Bandwidth

Number

The bandwidth value of the bandwidth plan.

None.

BillingType

String

The metering method when the pay-as-you-go billing method is used.

None.

BandwidthPackageName

String

The name of the bandwidth plan.

None.

Description

String

The description of the bandwidth plan.

None.

PaymentType

String

The billing method.

None.

BandwidthType

String

The bandwidth type.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  BandwidthPackageId:
    Description:
      en: The Resource ID of the bandwidth.
    Required: false
    Type: String
  ResourceGroupId:
    AssociationProperty: ALIYUN::ECS::ResourceGroup::ResourceGroupId
    Description:
      en: The ID of the resource group.
    Required: false
    Type: String
  Type:
    AllowedValues:
    - Basic
    - CrossDomain
    Description:
      en: 'The type of the bandwidth package. Value:

        Basic: Basic bandwidth package.

        CrossDomain: cross-region acceleration package.

        China Station only supports Basic.'
    Required: false
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      BandwidthPackageId:
        Ref: BandwidthPackageId
      ResourceGroupId:
        Ref: ResourceGroupId
      Type:
        Ref: Type
    Type: DATASOURCE::GA::BandwidthPackages
Outputs:
  BandwidthPackageIds:
    Description: The list of bandwidth package IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - BandwidthPackageIds
  BandwidthPackages:
    Description: The list of bandwidth packages.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - BandwidthPackages
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Type": {
      "Type": "String",
      "Description": {
        "en": "The type of the bandwidth package. Value:\nBasic: Basic bandwidth package.\nCrossDomain: cross-region acceleration package.\nChina Station only supports Basic."
      },
      "AllowedValues": [
        "Basic",
        "CrossDomain"
      ],
      "Required": false
    },
    "ResourceGroupId": {
      "AssociationProperty": "ALIYUN::ECS::ResourceGroup::ResourceGroupId",
      "Type": "String",
      "Description": {
        "en": "The ID of the resource group."
      },
      "Required": false
    },
    "BandwidthPackageId": {
      "Type": "String",
      "Description": {
        "en": "The Resource ID of the bandwidth."
      },
      "Required": false
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::GA::BandwidthPackages",
      "Properties": {
        "Type": {
          "Ref": "Type"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "BandwidthPackageId": {
          "Ref": "BandwidthPackageId"
        }
      }
    }
  },
  "Outputs": {
    "BandwidthPackageIds": {
      "Description": "The list of bandwidth package IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BandwidthPackageIds"
        ]
      }
    },
    "BandwidthPackages": {
      "Description": "The list of bandwidth packages.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BandwidthPackages"
        ]
      }
    }
  }
}
                        
```
