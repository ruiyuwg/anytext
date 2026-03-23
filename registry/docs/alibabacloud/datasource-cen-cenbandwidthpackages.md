DATASOURCE::CEN::CenBandwidthPackages is used to query the information about Cloud Enterprise Network (CEN) bandwidth plans within the logon account.

## Syntax

```
{
  "Type": "DATASOURCE::CEN::CenBandwidthPackages",
  "Properties": {
    "IsOrKey": Boolean,
    "Filter": List,
    "IncludeReservationData": Boolean,
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

IsOrKey

Boolean

No

Yes

Specifies whether the OR logic operator is applied to the filters.

Valid values:

-   true: The OR logic operator is applied to the filters. Bandwidth plans that meet one of the filters are returned.
    
-   false (default): The AND logic operator is applied to the filters. Bandwidth plans that meet all filters are returned.
    

Filter

List

No

Yes

The filters.

For more information, see [Filter properties](#section-p9b-tl9-drp).

IncludeReservationData

Boolean

No

Yes

Specifies whether to include renewal data.

Valid values:

-   true
    
-   false
    

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Filter syntax

```
"Filter": [
  {
    "Value": List,
    "Key": String
  }
]
```

## Filter properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

List

No

No

The value of the filter. You can specify filter values based on filter keys.

You can specify multiple filter values for a filter key. The logical operator among filter values is OR. Bandwidth plans that meet one of the filter values are returned.

Key

String

Yes

No

The key of the filter.

Valid values:

-   CenId: the ID of the CEN instance
    
-   Status: the status of the bandwidth plan
    
-   CenBandwidthPackageId: the ID of the bandwidth plan
    
-   Name: the name of the bandwidth plan
    

## Return values (Fn::GetAtt)

-   CenBandwidthPackages: details of the bandwidth plans.
    
-   CenBandwidthPackageIds: the IDs of the bandwidth plans.
    

**Property**

**Type**

**Description**

**Constraint**

CenBandwidthPackageIds

List

The IDs of the bandwidth plans.

None.

CenBandwidthPackages

List

Details of the bandwidth plans.

None.

ReservationActiveTime

String

The expiration time of the temporary upgrade.

None.

CenBandwidthPackageId

String

The ID of the bandwidth plan.

None.

Status

String

Indicates whether the bandwidth plan is associated with a CEN instance.

Valid values:

-   Idle: The bandwidth plan is not associated with a CEN instance.
    
-   InUse: The bandwidth plan is associated with a CEN instance.
    

CreationTime

String

The time when the bandwidth plan was created.

The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format.

ReservationOrderType

String

The type of the configuration change during renewal.

Valid values:

-   TEMP\_UPGRADE: temporary upgrade
    
-   UPGRADE: upgrade
    

BandwidthPackageChargeType

String

The billing method of the bandwidth plan.

None.

ReservationInternetChargeType

String

The billing method after the configuration change.

None.

GeographicRegionAId

String

The ID of the area that is queried.

Valid values:

-   china: Chinese mainland
    
-   asia-pacific: Asia Pacific
    
-   europe: Europe
    
-   australia: Australia
    
-   north-america: North America
    

Bandwidth

Number

The maximum bandwidth of the bandwidth plan.

None.

Description

String

The description of the bandwidth plan.

None.

ExpiredTime

String

The expiration time of the bandwidth plan.

The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format.

ReservationBandwidth

String

The bandwidth to which the bandwidth plan is restored when the temporary upgrade ends.

None.

GeographicSpanId

String

The ID of the connected area.

None.

GeographicRegionBId

String

The ID of another area used in the cross-region connection for the bandwidth plan.

Valid values:

-   china: Chinese mainland
    
-   asia-pacific: Asia Pacific
    
-   europe: Europe
    
-   australia: Australia
    
-   north-america: North America
    

IsCrossBorder

Boolean

Indicates whether the bandwidth plan is a cross-border bandwidth plan.

Valid values:

-   true
    
-   false
    

BusinessStatus

String

The state of the bandwidth plan.

Valid values:

-   Normal: The bandwidth plan works as expected.
    
-   FinancialLocked: The bandwidth plan is locked due to overdue payments.
    
-   SecurityLocked: The bandwidth plan is locked due to security reasons.
    

Name

String

The name of the bandwidth plan.

None.

HasReservationData

String

Indicates whether renewal data is included.

Valid values:

-   true
    
-   false
    

**Note**

The system returns true for this property when the IncludeReservationData property is set to true and specific orders have not taken effect.

CenIds

List

The IDs of the CEN instances that are associated with the bandwidth plan.

Example:

```
[ "cen-xxjsjfkffkfkfjkf****" ]
```

OrginInterRegionBandwidthLimits

Map

Details of the cross-region connection.

Example:

```
{
      "BandwidthLimit" : "1",
      "OppositeRegionId" : "us-west-1",
      "GeographicSpanId" : "north-america_china",
      "LocalRegionId" : "cn-hangzhou"
    }
```

## Examples

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "IncludeReservationData": {
      "Type": "Boolean",
      "Description": "Specifies whether to include renewal data.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CEN::CenBandwidthPackages",
      "Properties": {
        "IncludeReservationData": {
          "Ref": "IncludeReservationData"
        }
      }
    }
  },
  "Outputs": {
    "CenBandwidthPackages": {
      "Description": "The information about CenBandwidthPackages.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CenBandwidthPackages"
        ]
      }
    },
    "CenBandwidthPackageIds": {
      "Description": "The list of The Cen bandwidth ids.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CenBandwidthPackageIds"
        ]
      }
    }
  }
}
```

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  IncludeReservationData:
    Type: Boolean
    Description: Specifies whether to include renewal data.
    AllowedValues:
      - 'True'
      - 'true'
      - 'False'
      - 'false'
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CEN::CenBandwidthPackages
    Properties:
      IncludeReservationData:
        Ref: IncludeReservationData
Outputs:
  CenBandwidthPackages:
    Description: The information about CenBandwidthPackages.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CenBandwidthPackages
  CenBandwidthPackageIds:
    Description: The list of The Cen bandwidth ids.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CenBandwidthPackageIds
                    
```
