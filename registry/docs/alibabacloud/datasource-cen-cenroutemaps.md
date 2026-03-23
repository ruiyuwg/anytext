DATASOURCE::CEN::CenRouteMaps is used to query the information about routing policies.

## Syntax

```
{
  "Type": "DATASOURCE::CEN::CenRouteMaps",
  "Properties": {
    "TransitRouterRouteTableId": String,
    "TransmitDirection": String,
    "CenId": String,
    "CenRegionId": String,
    "RouteMapId": String,
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

TransitRouterRouteTableId

String

No

Yes

The route table ID of the transit router with which the routing policy is associated.

None.

TransmitDirection

String

No

Yes

The direction in which the routing policy is applied.

Valid values:

-   RegionIn: Routes are advertised to regional gateways of Cloud Enterprise Network (CEN).
    
-   RegionOut: Routes are advertised from CEN regional gateways.
    

CenId

String

Yes

Yes

The ID of the CEN instance.

None.

CenRegionId

String

No

Yes

The region ID of the routing policy.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23#doc-api-Cbn-DescribeChildInstanceRegions) operation to query the region ID.

RouteMapId

String

No

Yes

The ID of the routing policy.

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

-   RouteMapIds: the IDs of the routing policies.
    
-   RouteMaps: details of the routing policies.
    

**Property**

**Type**

**Description**

**Constraint**

RouteMapIds

List

The IDs of the routing policies.

None.

RouteMaps

List

Details of the routing policies.

None.

Status

String

The status of the routing policy.

Valid values:

-   Creating: The routing policy is being created.
    
-   Active: The routing policy is available.
    
-   Deleting: The routing policy is being deleted.
    

RouteMapId

String

The ID of the routing policy.

None.

TransmitDirection

String

The direction in which the routing policy is applied.

None.

SourceInstanceIdsReverseMatch

Boolean

Indicates whether source instance IDs are excluded.

Valid values:

-   true
    
-   false
    

CenRegionId

String

The region ID of the routing policy.

None.

CenId

String

The ID of the CEN instance.

None.

Priority

Number

The priority of the routing policy.

A smaller value indicates a higher priority.

TransitRouterRouteTableId

String

The route table ID of the transit router with which the routing policy is associated.

None.

CommunityOperateMode

String

The action performed on the community.

Valid values:

-   Additive: The community is added to the route.
    
-   Replace: The community is used to replace the original community of the route.
    

MapResult

String

The action performed on a route that meets all the match conditions.

Valid values:

-   Permit: The route is permitted.
    
-   Deny: The route is denied.
    

CommunityMatchMode

String

The mode in which routes are matched based on communities.

Valid values:

-   Include: fuzzy match. A route is matched if the community of the route overlaps with the community specified in the match condition.
    
-   Complete: exact match. A route is matched only if the community of the route is the same as the community specified in the match condition.
    

Description

String

The description of the routing policy.

None.

AsPathMatchMode

String

The mode in which routes are matched based on autonomous system (AS) paths.

None.

Preference

Integer

The priority of the route that is modified.

A smaller value indicates a higher priority.

DestinationInstanceIdsReverseMatch

Boolean

Indicates whether destination instance IDs are excluded.

Valid values:

-   true: Destination instance IDs are excluded. A route is matched if the destination instance ID is excluded from the list specified by DestinationInstanceIds.
    
-   false: Destination instance IDs are included. A route is matched if the destination instance ID is included in the list specified by DestinationInstanceIds.
    

CidrMatchMode

String

The mode in which routes are matched based on prefixes.

Valid values:

-   Include: fuzzy match
    
-   Complete: exact match
    

NextPriority

Integer

The priority of the next routing policy that is associated with the current routing policy.

None.

SourceRegionIds

List

The IDs of the source regions based on which routes are matched.

None.

SourceChildInstanceTypes

List

The types of the source instances based on which routes are matched.

None.

DestinationRouteTableIds

List

The IDs of the destination route tables based on which routes are matched.

None.

SourceInstanceIds

List

The IDs of the source instances based on which routes are matched.

None.

DestinationCidrBlocks

List

The route prefixes based on which routes are matched.

None.

SourceRouteTableIds

List

The IDs of the source route tables based on which routes are matched.

None.

MatchCommunitySet

List

The communities based on which routes are matched.

None.

PrependAsPath

List

The AS paths that are prepended when regional gateways receive or advertise routes.

None.

RouteTypes

List

The route types based on which routes are matched.

None.

DestinationChildInstanceTypes

List

The types of the destination instances based on which routes are matched.

None.

DestinationInstanceIds

List

The IDs of the destination instances based on which routes are matched.

None.

MatchAsns

List

The AS paths based on which routes are matched.

None.

OperateCommunitySet

List

The communities on which actions are performed.

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
      "Type": "DATASOURCE::CEN::CenRouteMaps",
      "Properties": {
        "CenId": {
          "Ref": "CenId"
        }
      }
    }
  },
  "Outputs": {
    "RouteMapIds": {
      "Description": "The list of The RouteMap ids.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RouteMapIds"
        ]
      }
    },
    "RouteMaps": {
      "Description": "The information about RouteMaps.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RouteMaps"
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
    Type: DATASOURCE::CEN::CenRouteMaps
    Properties:
      CenId:
        Ref: CenId
Outputs:
  RouteMapIds:
    Description: The list of The RouteMap ids.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RouteMapIds
  RouteMaps:
    Description: The information about RouteMaps.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RouteMaps
```
