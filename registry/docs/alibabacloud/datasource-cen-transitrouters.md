DATASOURCE::CEN::TransitRouters is used to query the information about transit routers of a Cloud Enterprise Network (CEN) instance.

## Syntax

```
{
  "Type": "DATASOURCE::CEN::TransitRouters",
  "Properties": {
    "CenId": String,
    "RegionId": String,
    "TransitRouterId": String,
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

CenId

String

Yes

Yes

The ID of the CEN instance.

None.

RegionId

String

No

Yes

The region ID of the transit router.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions#doc-api-Vpc-DescribeRegions) operation to query the region ID.

TransitRouterId

String

No

Yes

The ID of the transit router.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   TransitRouterIds: the IDs of the transit routers.
    
-   TransitRouters: details of the transit routers.
    

**Property**

**Type**

**Description**

**Constraint**

TransitRouterIds

List

The IDs of the transit routers.

None.

TransitRouters

List

Details of the transit routers.

None.

AliUid

String

The ID of the Alibaba Cloud account to which the CEN instance belongs.

None.

CenId

String

The ID of the CEN instance.

None.

CreationTime

String

The time when the transit router was created.

The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.

RegionId

String

The region ID of the transit router.

None.

Status

String

The status of the transit router.

Valid values:

-   Creating: The transit router is being created.
    
-   Active: The transit router is in use.
    
-   Deleting: The transit router is being deleted.
    
-   Deleted: The transit router is deleted.
    
-   Upgrading: The transit router is being upgraded.
    

TransitRouterDescription

String

The description of the transit router.

None.

TransitRouterName

String

The name of the transit router.

None.

Type

String

The type of the transit router.

Valid values:

-   Enterprise: Enterprise Edition
    
-   Basic: Basic Edition
    

TransitRouterId

String

The ID of the transit router.

None.

## Examples

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "CenId": {
      "Type": "String",
      "Description": "The ID of the CEN instance."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CEN::TransitRouters",
      "Properties": {
        "CenId": {
          "Ref": "CenId"
        }
      }
    }
  },
  "Outputs": {
    "TransitRouterIds": {
      "Description": "The list of TransitRouter IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TransitRouterIds"
        ]
      }
    },
    "TransitRouters": {
      "Description": "The list of TransitRouters.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TransitRouters"
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
  CenId:
    Type: String
    Description: The ID of the CEN instance.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CEN::TransitRouters
    Properties:
      CenId:
        Ref: CenId
Outputs:
  TransitRouterIds:
    Description: The list of TransitRouter IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TransitRouterIds
  TransitRouters:
    Description: The list of TransitRouters.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TransitRouters
                    
```
