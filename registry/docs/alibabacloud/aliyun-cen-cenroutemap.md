ALIYUN::CEN::CenRouteMap is used to create a routing policy.

## Syntax

```
{
  "Type": "ALIYUN::CEN::CenRouteMap",
  "Properties": {
    "Description": String,
    "SourceInstanceIdsReverseMatch": Boolean,
    "TransmitDirection": String,
    "MatchCommunitySet": List,
    "CenRegionId": String,
    "SourceRouteTableIds": List,
    "DestinationInstanceIds": List,
    "DestinationInstanceIdsReverseMatch": Boolean,
    "SourceInstanceIds": List,
    "DestinationRouteTableIds": List,
    "DestinationCidrBlocks": List,
    "OperateCommunitySet": List,
    "DestinationChildInstanceTypes": List,
    "Priority": Integer,
    "SourceChildInstanceTypes": List,
    "AsPathMatchMode": String,
    "CidrMatchMode": String,
    "MapResult": String,
    "RouteTypes": List,
    "Preference": Integer,
    "CommunityOperateMode": String,
    "CenId": String,
    "NextPriority": Integer,
    "PrependAsPath": List,
    "CommunityMatchMode": String,
    "MatchAsns": List,
    "SourceRegionIds": List
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

No

The ID of the Cloud Enterprise Network (CEN) instance.

None.

CenRegionId

String

Yes

No

The region of the CEN instance.

None.

MapResult

String

Yes

Yes

The action that is performed on a route if the route matches all match conditions.

Valid values:

-   Permit: allows a route if the route matches all match conditions.
    
-   Deny: rejects a route if the route matches all match conditions.
    

Priority

Integer

Yes

Yes

The priority of the routing policy.

Valid values: 1 to 100. A smaller value specifies a higher priority.

**Note**

The priority must be unique in the same region and direction. The system evaluates routes based on the match conditions of routing policies in descending order of priority. A smaller value specifies a higher priority. To sort routing policies in the expected order, you must specify appropriate values.

TransmitDirection

String

Yes

No

The direction in which the routing policy is applied.

Valid values:

-   RegionIn: Routes are advertised to CEN regional gateways. For example, routes are advertised to a regional gateway from a network instance in the same region or from a network instance in a different region.
    
-   RegionOut: Routes are advertised from CEN regional gateways. For example, routes are advertised from a regional gateway to a network instance in the same region or to a regional gateway in a different region.
    

AsPathMatchMode

String

No

Yes

The mode in which you want to match routes based on autonomous system (AS) paths.

Match statements are used. Valid values:

-   Include: fuzzy match. A route is matched if the AS path of the route overlaps with the AS path specified in the match condition.
    
-   Complete: exact match. A route is matched only if the AS path of the route is the same as the AS path specified in the match condition.
    

CidrMatchMode

String

No

Yes

The mode in which you want to match routes based on prefixes.

Match statements are used. Valid values:

-   Include: fuzzy match. A route is matched if the route prefix is included in the route prefix specified in the match condition. For example, you can set the route prefix in the match condition to 1.1.XX.XX/16 to match a route whose prefix is 1.1.1.0/24 by using a fuzzy match.
    
-   Complete: exact match. A route is matched only if the route prefix is the same as the route prefix specified in the match condition. For example, you can set the route prefix in the match condition to 1.1.XX.XX/16 to match only the route whose prefix is 1.1.XX.XX/16 by using an exact match.
    

CommunityMatchMode

String

No

Yes

The mode in which you want to match routes based on communities.

Match statements are used. Valid values:

-   Include: fuzzy match. A route is matched if the community of the route overlaps with the community specified in the match condition.
    
-   Complete: exact match. A route is matched only if the community of the route is the same as the community specified in the match condition.
    

CommunityOperateMode

String

No

Yes

The action that you want to perform on a community.

Action statements are used. Valid values:

-   Additive: adds a community.
    
-   Replace: replaces a community.
    

Description

String

No

Yes

The description of the routing policy.

None.

DestinationChildInstanceTypes

List

No

Yes

The destination instance types based on which you want to match routes.

Match statements are used. Valid values:

-   VPC
    
-   VBR
    

**Note**

This property is valid only when the routing policy is used for scenarios in which routes are advertised from regional gateways to destination instances in the same region.

DestinationCidrBlocks

List

No

Yes

The prefixes based on which you want to match routes.

Match statements are used.

Specify the prefixes in the CIDR block format. You can specify up to 32 CIDR blocks.

DestinationInstanceIds

List

No

Yes

The destination instance IDs based on which you want to match routes.

Match statements are used.

You can specify the IDs of virtual private clouds (VPCs), virtual border routers (VBRs), and Smart Access Gateway (SAG) instances.

You can specify up to 32 instance IDs.

**Note**

This property is valid only when the routing policy is used for scenarios in which routes are advertised from regional gateways to destination instances in the same region.

DestinationInstanceIdsReverseMatch

Boolean

No

Yes

Specifies whether routes are matched if the destination instance IDs are not in the list specified by DestinationInstanceIds.

Valid values:

-   false (default)
    
-   true
    

DestinationRouteTableIds

List

No

Yes

The destination route table IDs based on which you want to match routes.

Match statements are used.

You can specify up to 32 route table IDs.

MatchAsns

List

No

Yes

The AS paths based on which you want to match routes.

Match statements are used.

An AS path is a required attribute. An AS path describes the AS number that is used to pass a Border Gateway Protocol (BGP) route when the BGP route is advertised.

Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. In other words, only the AS number list is supported. Sets and sub-lists are not supported.

MatchCommunitySet

List

No

Yes

The communities based on which you want to match routes.

Match statements are used.

Specify a community in the "nn:nn" format. Valid values of "nn": 1 to 65535.

You can specify up to 32 communities.

A community must comply with the Request for Comments (RFC) 1997 standard. The RFC 8092 standard that defines large communities is not supported.

**Note**

If a community is improperly configured, routes may not be advertised to data centers.

NextPriority

Integer

No

Yes

The priority of the next routing policy that you want to associate with the current routing policy.

Valid values: 1 to 100.

-   If you leave this property empty, no routing policy is associated with the current routing policy.
    
-   If you set this property to 1, the next routing policy is associated with the current routing policy.
    
-   If you set this property to a value other than 1, the priority of the next routing policy must be higher than the priority of the current routing policy.
    

The system continues to match the matched routes by using the next routing policy only when MapResult is set to Permit.

OperateCommunitySet

List

No

Yes

The communities on which you want to perform actions.

Action statements are used.

Specify a community in the "nn:nn" format. Valid values of "nn": 1 to 65535.

You can specify up to 32 communities.

A community must comply with the RFC 1997 standard. The RFC 8092 standard that defines large communities is not supported.

**Note**

If a community is improperly configured, routes may not be advertised to data centers.

Preference

Integer

No

Yes

The new priority of the route.

Action statements are used.

Valid values: 1 to 100.

Default value: 50.

A smaller value specifies a higher priority.

PrependAsPath

List

No

Yes

The AS paths that are prepended when regional gateways receive or advertise routes.

Action statements are used. The requirements on AS paths that are prepended vary based on the direction in which the routing policy is applied:

-   If AS paths are prepended in the RegionIn direction, you must specify the source instance IDs and the source region in the match condition. The source region must be the same as the region in which the routing policy is applied.
    
-   If AS paths are prepended in the RegionOut direction, you must specify the destination instance IDs in the match condition.
    

RouteTypes

List

No

Yes

The route types that you want to match.

Match statements are used. Valid values:

-   System: system routes that are generated by the system
    
-   Custom: custom routes that are created by users
    
-   BGP: BGP routes that are advertised to BGP
    

You can specify multiple route types.

SourceChildInstanceTypes

List

No

Yes

The source instance types based on which you want to match routes.

Match statements are used. Valid values:

-   VPC
    
-   VBR
    

SourceInstanceIds

List

No

Yes

The source instance IDs based on which you want to match routes.

Match statements are used.

You can specify the IDs of VPCs, VBRs, and SAG instances.

You can specify up to 32 instance IDs.

SourceInstanceIdsReverseMatch

Boolean

No

Yes

Specifies whether routes are matched if the source instance IDs are not in the list specified by SourceInstanceIds.

Valid values:

-   false (default)
    
-   true
    

SourceRegionIds

List

No

Yes

The source region IDs based on which you want to match routes.

Match statements are used.

You can specify up to 32 source region IDs.

SourceRouteTableIds

List

No

Yes

The source route table IDs based on which you want to match routes.

Match statements are used.

You can specify up to 32 route table IDs.

## Return values

Fn::GetAtt

RouteMapId: the ID of the routing policy.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AsPathMatchMode:
    Description: "Match statements are used to match the AS paths. Valid values:\n\
      \ Include: uses fuzzy match. If the AS path in the condition overlaps with the\
      \ AS path in the route, the match is successful.\n Complete: uses exact match.\
      \ Only when the AS path in the condition is the same as the AS path in the route,\
      \ the match is successful."
    Type: String
  CenId:
    Description: The ID of the Cloud Enterprise Network (CEN) instance.
    Type: String
  CenRegionId:
    Description: The region where the CEN instance is deployed. You can call the DescribeRegions
      operation to query region IDs.
    Type: String
  CidrMatchMode:
    Description: "Match statements are used to match the prefixes. Valid values: \n\
      \ Include: uses fuzzy match. If the routing prefix in the condition contains\
      \ the routing prefix of the route, the match is successful. \n For example,\
      \ the 1.1.XX.XX/16 policy can match the 1.1.1.0/24 route. \n Complete: uses exact\
      \ match. Only when the routing prefix in the condition is the same as the routing\
      \ prefix of the route, the match is successful. \n For example, the 1.1.XX.XX/16\
      \ policy can match the 1.1.XX.XX/16 route."
    Type: String
  CommunityMatchMode:
    Description: "Match statements are used to match the Communities. Valid values:\
      \ \n Include: uses fuzzy match. If the Community in the condition overlaps with\
      \ the Community of the route, the match is successful. \n Complete: uses exact\
      \ match. Only when the Community in the condition is the same as the Community\
      \ of the route, the match is successful."
    Type: String
  CommunityOperateMode:
    Description: "Action statements are used to operate the Communities. Valid values:\
      \ \n Additive: adds. \n Replace: replaces."
    Type: String
  Description:
    Description: The description of the route map.
    Type: String
  DestinationChildInstanceTypes:
    Description: "Match statements are used to match the destination instance types.\
      \ Valid values: \n VPC: VPCs. \n VBR: VBRs. \n CCN: CCN instances in mainland\
      \ China. \n Note The destination instance types are valid only when the route\
      \ map is applied to scenarios where routes are advertised from gateways in the\
      \ current region to instances in the current region."
    Type: Json
  DestinationCidrBlocks:
    Description: Match statements are used to match the routing prefixes. The CIDR
      format is used. You can enter at most 32 CIDR blocks.
    Type: Json
  DestinationInstanceIds:
    Description: "Match statements are used to match the destination instance IDs.\
      \ \n You can enter instance IDs of the following types: VPC, VBR, CCN in mainland\
      \ China, and SAG. You can enter at most 32 instance IDs. \n Note The destination\
      \ instance IDs are valid only when the route map is applied to scenarios where\
      \ routes are advertised from gateways in the current region to instances in\
      \ the current region."
    Type: Json
  DestinationInstanceIdsReverseMatch:
    AllowedValues:
    - 'True'
    - 'true'
    - 'False'
    - 'false'
    Description: "The IDs of destination instances to be advertised do not support\
      \ match statements. Valid values: \n false(default value): If the ID of the\
      \ destination instance to be advertised is in the DestinationInstanceIds field,\
      \ the match is successful. \n true: If the ID of the destination instance to\
      \ be advertised is not in the DestinationInstanceIds filed, the match is successful."
    Type: Boolean
  DestinationRouteTableIds:
    Description: "Match statements are used to match the IDs of the destination route\
      \ tables. You can enter at most 32 route table IDs. \n Note The destination\
      \ route table IDs are valid only when the route map is applied to scenarios\
      \ where routes are advertised from gateways in the current region to route tables\
      \ in the current region."
    Type: Json
  MapResult:
    Description: "The route map behavior after all conditions are matched. Valid values:\
      \ \n Permit: allows the routes that are matched. \n Deny: rejects the routes\
      \ that are matched."
    Type: String
  MatchAsns:
    Description: "Match statements are used to match AS paths of the routes. An AS\
      \ path is a mandatory attribute, which describes the AS number through which\
      \ a BGP route passes when the BGP route is advertised. \n Only the AS-SEQUENCE\
      \ parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET\
      \ parameters are not supported. Specifically, only the AS number list is supported.\
      \ Sets and sub-lists are not supported."
    Type: Json
  MatchCommunitySet:
    Description: "Match statements are used to match the Communities. Enter each Community\
      \ in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most\
      \ 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not\
      \ supported. \n Note If the configurations of the Communities are incorrect,\
      \ routes may not be advertised to the on-premises data center."
    Type: Json
  NextPriority:
    Description: "The priority of the next associated route map. Valid values: 1 to\
      \ 100. \n If the priority is not set, no next route map is associated with the\
      \ current route map. \n If the priority is set to 1, the next route map is associated\
      \ with the current route map. \n If the priority is set and the value is not\
      \ 1, the priority of the associated route map must be higher than that of the\
      \ current route map. \n Only when the MapResult parameter is set to Permit,\
      \ the matched routes continue to match the next associated route maps."
    Type: Number
  OperateCommunitySet:
    Description: "Action statements are used to operate the Communities. Valid values:\
      \ Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535.\
      \ You can enter at most 32 Communities. Each Community must comply with RFC\
      \ 1997. RFC 8092 is not supported. \n Note If the configurations of the Communities\
      \ are incorrect, routes may not be advertised to the on-premises data center."
    Type: Json
  Preference:
    Description: 'Action statements are used to modify route priorities. Valid values:
      1 to 100. Default value: 50. A smaller number indicates a higher priority.'
    Type: Number
  PrependAsPath:
    Description: "AS paths are attached when regional gateways receive or advertise\
      \ routes. \n For route maps that are applied in different directions, the requirements\
      \ for AS paths to be attached are different: \n For the inbound direction: You\
      \ must specify the list of source instance IDs and the source region in the\
      \ condition to be matched. The source region must be the same as the region\
      \ where the route map is applied. \n For the outbound direction: You must specify\
      \ the list of destination instance IDs in the condition to be matched."
    Type: Json
  Priority:
    Description: "The priority of the route map. Valid values: 1 to 100 . A lower\
      \ value indicates a higher priority. \n Note In the same region, for route maps\
      \ that are applied in the same direction, the priority is unique. When a route\
      \ map is implemented, the system matches conditions with a route map whose priority\
      \ number is the smallest. Therefore, make sure that you set priorities for route\
      \ maps to meet your requirements."
    Type: Number
  RouteTypes:
    Description: "Match statements are used to match the route types. Valid values:\
      \ \n System: system routes that are generated by the system. \n Custom: custom\
      \ routes that are created by users. \n BGP: Border Gateway Protocol (BGP) routes\
      \ that are advertised to BGP. \n You can enter multiple types."
    Type: Json
  SourceChildInstanceTypes:
    Description: "Match statements are used to match source instance types of the\
      \ routes. Valid values: \n VPC: VPCs. \n VBR: VBRs. \n CCN: CCN instances in\
      \ mainland China."
    Type: Json
  SourceInstanceIds:
    Description: "Match statements are used to match source instance IDs of the routes.\
      \ \n You can enter instance IDs of the following types: virtual private cloud\
      \ (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland\
      \ China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs."
    Type: Json
  SourceInstanceIdsReverseMatch:
    AllowedValues:
    - 'True'
    - 'true'
    - 'False'
    - 'false'
    Description: "The IDs of source instances to be advertised do not support match\
      \ statements. Valid values: \n false (default value): If the source instance\
      \ ID is in the SourceInstanceIds field, the match is successful. \n true: If\
      \ the source instance ID is not in the SourceInstanceIds field, the match is\
      \ successful."
    Type: Boolean
  SourceRegionIds:
    Description: Match statements are used to match source region IDs of the routes.
      You can enter at most 32 region IDs.
    Type: Json
  SourceRouteTableIds:
    Description: Match statements are used to match source route table IDs of the
      routes. You can enter at most 32 route table IDs.
    Type: Json
  TransmitDirection:
    Description: "The direction in which the route map is applied. Valid values: \n\
      \ RegionIn: Routes are advertised to CEN gateways. \n For example, routes are\
      \ advertised from network instances deployed in the current region or other\
      \ regions to the gateways deployed in the current region. \n RegionOut: Routes\
      \ are advertised from CEN gateways. \n For example, routes are advertised from\
      \ gateways deployed in the current region to network instances or gateways deployed\
      \ in other regions."
    Type: String
Resources:
  CENCenRouteMap:
    Properties:
      AsPathMatchMode:
        Ref: AsPathMatchMode
      CenId:
        Ref: CenId
      CenRegionId:
        Ref: CenRegionId
      CidrMatchMode:
        Ref: CidrMatchMode
      CommunityMatchMode:
        Ref: CommunityMatchMode
      CommunityOperateMode:
        Ref: CommunityOperateMode
      Description:
        Ref: Description
      DestinationChildInstanceTypes:
        Ref: DestinationChildInstanceTypes
      DestinationCidrBlocks:
        Ref: DestinationCidrBlocks
      DestinationInstanceIds:
        Ref: DestinationInstanceIds
      DestinationInstanceIdsReverseMatch:
        Ref: DestinationInstanceIdsReverseMatch
      DestinationRouteTableIds:
        Ref: DestinationRouteTableIds
      MapResult:
        Ref: MapResult
      MatchAsns:
        Ref: MatchAsns
      MatchCommunitySet:
        Ref: MatchCommunitySet
      NextPriority:
        Ref: NextPriority
      OperateCommunitySet:
        Ref: OperateCommunitySet
      Preference:
        Ref: Preference
      PrependAsPath:
        Ref: PrependAsPath
      Priority:
        Ref: Priority
      RouteTypes:
        Ref: RouteTypes
      SourceChildInstanceTypes:
        Ref: SourceChildInstanceTypes
      SourceInstanceIds:
        Ref: SourceInstanceIds
      SourceInstanceIdsReverseMatch:
        Ref: SourceInstanceIdsReverseMatch
      SourceRegionIds:
        Ref: SourceRegionIds
      SourceRouteTableIds:
        Ref: SourceRouteTableIds
      TransmitDirection:
        Ref: TransmitDirection
    Type: ALIYUN::CEN::CenRouteMap
Outputs:
  RouteMapId:
    Description: The ID of the route map.
    Value:
      Fn::GetAtt:
      - CENCenRouteMap
      - RouteMapId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "Type": "String",
      "Description": "The description of the route map."
    },
    "SourceInstanceIdsReverseMatch": {
      "Type": "Boolean",
      "Description": "The IDs of source instances to be advertised do not support match statements. Valid values: \n false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful. \n true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "TransmitDirection": {
      "Type": "String",
      "Description": "The direction in which the route map is applied. Valid values: \n RegionIn: Routes are advertised to CEN gateways. \n For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region. \n RegionOut: Routes are advertised from CEN gateways. \n For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions."
    },
    "MatchCommunitySet": {
      "Type": "Json",
      "Description": "Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. \n Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center."
    },
    "CenRegionId": {
      "Type": "String",
      "Description": "The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs."
    },
    "SourceRouteTableIds": {
      "Type": "Json",
      "Description": "Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs."
    },
    "DestinationInstanceIds": {
      "Type": "Json",
      "Description": "Match statements are used to match the destination instance IDs. \n You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs. \n Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region."
    },
    "DestinationInstanceIdsReverseMatch": {
      "Type": "Boolean",
      "Description": "The IDs of destination instances to be advertised do not support match statements. Valid values: \n false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful. \n true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "SourceInstanceIds": {
      "Type": "Json",
      "Description": "Match statements are used to match source instance IDs of the routes. \n You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs."
    },
    "DestinationRouteTableIds": {
      "Type": "Json",
      "Description": "Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs. \n Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region."
    },
    "DestinationCidrBlocks": {
      "Type": "Json",
      "Description": "Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks."
    },
    "OperateCommunitySet": {
      "Type": "Json",
      "Description": "Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. \n Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center."
    },
    "DestinationChildInstanceTypes": {
      "Type": "Json",
      "Description": "Match statements are used to match the destination instance types. Valid values: \n VPC: VPCs. \n VBR: VBRs. \n CCN: CCN instances in mainland China. \n Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region."
    },
    "Priority": {
      "Type": "Number",
      "Description": "The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority. \n Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements."
    },
    "SourceChildInstanceTypes": {
      "Type": "Json",
      "Description": "Match statements are used to match source instance types of the routes. Valid values: \n VPC: VPCs. \n VBR: VBRs. \n CCN: CCN instances in mainland China."
    },
    "AsPathMatchMode": {
      "Type": "String",
      "Description": "Match statements are used to match the AS paths. Valid values:\n Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.\n Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful."
    },
    "CidrMatchMode": {
      "Type": "String",
      "Description": "Match statements are used to match the prefixes. Valid values: \n Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful. \n For example, the 1.1.XX.XX/16 policy can match the 1.1.1.0/24 route. \n Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful. \n For example, the 1.1.XX.XX/16 policy can match the 1.1.XX.XX/16 route."
    },
    "MapResult": {
      "Type": "String",
      "Description": "The route map behavior after all conditions are matched. Valid values: \n Permit: allows the routes that are matched. \n Deny: rejects the routes that are matched."
    },
    "RouteTypes": {
      "Type": "Json",
      "Description": "Match statements are used to match the route types. Valid values: \n System: system routes that are generated by the system. \n Custom: custom routes that are created by users. \n BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP. \n You can enter multiple types."
    },
    "Preference": {
      "Type": "Number",
      "Description": "Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority."
    },
    "CommunityOperateMode": {
      "Type": "String",
      "Description": "Action statements are used to operate the Communities. Valid values: \n Additive: adds. \n Replace: replaces."
    },
    "CenId": {
      "Type": "String",
      "Description": "The ID of the Cloud Enterprise Network (CEN) instance."
    },
    "NextPriority": {
      "Type": "Number",
      "Description": "The priority of the next associated route map. Valid values: 1 to 100. \n If the priority is not set, no next route map is associated with the current route map. \n If the priority is set to 1, the next route map is associated with the current route map. \n If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map. \n Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps."
    },
    "PrependAsPath": {
      "Type": "Json",
      "Description": "AS paths are attached when regional gateways receive or advertise routes. \n For route maps that are applied in different directions, the requirements for AS paths to be attached are different: \n For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied. \n For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched."
    },
    "CommunityMatchMode": {
      "Type": "String",
      "Description": "Match statements are used to match the Communities. Valid values: \n Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful. \n Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful."
    },
    "MatchAsns": {
      "Type": "Json",
      "Description": "Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised. \n Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported."
    },
    "SourceRegionIds": {
      "Type": "Json",
      "Description": "Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs."
    }
  },
  "Resources": {
    "CENCenRouteMap": {
      "Type": "ALIYUN::CEN::CenRouteMap",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "SourceInstanceIdsReverseMatch": {
          "Ref": "SourceInstanceIdsReverseMatch"
        },
        "TransmitDirection": {
          "Ref": "TransmitDirection"
        },
        "MatchCommunitySet": {
          "Ref": "MatchCommunitySet"
        },
        "CenRegionId": {
          "Ref": "CenRegionId"
        },
        "SourceRouteTableIds": {
          "Ref": "SourceRouteTableIds"
        },
        "DestinationInstanceIds": {
          "Ref": "DestinationInstanceIds"
        },
        "DestinationInstanceIdsReverseMatch": {
          "Ref": "DestinationInstanceIdsReverseMatch"
        },
        "SourceInstanceIds": {
          "Ref": "SourceInstanceIds"
        },
        "DestinationRouteTableIds": {
          "Ref": "DestinationRouteTableIds"
        },
        "DestinationCidrBlocks": {
          "Ref": "DestinationCidrBlocks"
        },
        "OperateCommunitySet": {
          "Ref": "OperateCommunitySet"
        },
        "DestinationChildInstanceTypes": {
          "Ref": "DestinationChildInstanceTypes"
        },
        "Priority": {
          "Ref": "Priority"
        },
        "SourceChildInstanceTypes": {
          "Ref": "SourceChildInstanceTypes"
        },
        "AsPathMatchMode": {
          "Ref": "AsPathMatchMode"
        },
        "CidrMatchMode": {
          "Ref": "CidrMatchMode"
        },
        "MapResult": {
          "Ref": "MapResult"
        },
        "RouteTypes": {
          "Ref": "RouteTypes"
        },
        "Preference": {
          "Ref": "Preference"
        },
        "CommunityOperateMode": {
          "Ref": "CommunityOperateMode"
        },
        "CenId": {
          "Ref": "CenId"
        },
        "NextPriority": {
          "Ref": "NextPriority"
        },
        "PrependAsPath": {
          "Ref": "PrependAsPath"
        },
        "CommunityMatchMode": {
          "Ref": "CommunityMatchMode"
        },
        "MatchAsns": {
          "Ref": "MatchAsns"
        },
        "SourceRegionIds": {
          "Ref": "SourceRegionIds"
        }
      }
    }
  },
  "Outputs": {
    "RouteMapId": {
      "Description": "The ID of the route map.",
      "Value": {
        "Fn::GetAtt": [
          "CENCenRouteMap",
          "RouteMapId"
        ]
      }
    }
  }
}
```
