Queries the details about routes in the route tables of an Enterprise Edition transit router.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterRouteEntries)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterRouteEntries)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:ListTransitRouterRouteEntries

get

TransitRouterRouteEntry

`acs:cen:*:{#accountId}:centransitrouterroutentry/{#centransitrouterroutentryId}`

TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutetable/{#centransitrouterroutetableId}`

TransitRouterRouteEntry

`acs:cen:*:{#accountId}:centransitrouterroutentry/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

MaxResults

integer

No

The number of entries per page. Valid values: **1** to **100**. Default value: **20**.

20

TransitRouterRouteEntryDestinationCidrBlock `deprecated`

string

No

The destination CIDR block of the route. **This parameter is to be deprecated. We recommend that you use the RouteFilter parameter**.

192.168.0.0/24

TransitRouterRouteEntryStatus

string

No

The status of the route. Valid values:

-   **All**
    
-   **Active** (default)
    
-   **Rejected**
    
-   **Prohibited**
    
-   **Standby**
    
-   **Candidate**
    

If you do not specify a value, routes in the active state are queried.

Active

TransitRouterRouteTableId

string

Yes

The ID of the route table of the Enterprise Edition transit router.

vtb-bp1dudbh2d5na6b50\*\*\*\*

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. Valid values:

-   You do not need to specify this parameter for the first request.
    
-   You must specify the token that is obtained from the previous query as the value of **NextToken**.
    

fce19\*\*\*\*

TransitRouterRouteEntryNames

array

No

The route name.

testname

string

No

The route name.

The name is optional. If you enter a name, it must be 1 to 128 characters in length, and cannot start with http:// or https://.

**Note**

You can use this parameter to query only static routes in the specified route table. This parameter conflicts with other query conditions except for TransitRouterRouteEntryIds.

testname

TransitRouterRouteEntryIds

array

No

The route ID.

rte-oklkgwmj97z6dn\*\*\*\*

string

No

The route ID.

**Note**

You can use this parameter to query only static routes in the specified route table. This parameter conflicts with other query conditions except for TransitRouterRouteEntryNames.

rte-oklkgwmj97z6dn\*\*\*\*

TransitRouterRouteEntryType

string

No

The route type. Valid values:

-   **Propagated**: automatically learned by the route table.
    
-   **Static**: static routes.
    

Propagated

TransitRouterRouteEntryNextHopType

string

No

The next hop type. Valid values:

-   **BlackHole**: routes network traffic to a black hole.
    
-   **Attachment**: routes network traffic to a network instance connection.
    

Attachment

TransitRouterRouteEntryNextHopId

string

No

The ID of the network instance connection that you want to specify as the next hop.

tr-attach-nls9fzkfat8934\*\*\*\*

TransitRouterRouteEntryNextHopResourceId

string

No

The next hop ID.

vpc-m5ent6du8deaq5\*\*\*\*\*

TransitRouterRouteEntryNextHopResourceType

string

No

The next hop type. Valid values:

-   **VPC**
    
-   **VBR**
    
-   **TR**
    
-   **VPN**
    

VPC

TransitRouterRouteEntryOriginResourceId

string

No

The source instance ID.

vpc-m5ent6du8deaq5\*\*\*\*\*

TransitRouterRouteEntryOriginResourceType

string

No

The source instance type. Valid values:

-   **VPC**
    
-   **VBR**
    
-   **TR**
    
-   **VPN**
    

VPC

PrefixListId

string

No

The prefix list ID.

pl-6ehtn5kqxgeyy08fi\*\*\*\*

RouteFilter

array<object>

No

The filter conditions.

object

No

The filter conditions.

Key

string

No

The match pattern for filtering CIDR blocks. Valid values:

-   **PrefixExactMatchCidrs**: exact matching.
    
-   **LongestPrefixMatchCidrs**: longest prefix matching. You can specify IP addresses and CIDR blocks.
    
-   **SubnetOfMatchCidrs**: subnet matching. The subnets of the specified CIDR blocks, including the CIDR block, are matches against the match conditions.
    
-   **SupernetOfMatchCidrs**: supernet matching. The supernets of the CIDR block, including the CIDR block, are matched against the match conditions.
    

By default, the logical operator among filter conditions is **AND**. Information about a route entry is returned only if the route entry matches all filter conditions. Filter conditions must be unique.

PrefixExactMatchCidrs

Value

array

No

The filter value.

string

No

Specify a filter value based on the **Key**. You can specify multiple values for a **key**. The logical operator among values is OR, which indicates that a route entry is a match if the request matches one of the values. You can specify at most 500 values for each match condition.  
IPv4 addresses and CIDR blocks and IPv6 addresses and CIDR blocks are supported.  

192.168.1.0/24

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:

-   If **NextToken** is empty, no next page exists.
    
-   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
    

fce19\*\*\*\*

RequestId

string

The request ID.

C3835E5E-1504-4344-B1BB-98A4110F1079

TotalCount

integer

The total number of entries returned.

6

MaxResults

integer

The number of entries per page.

20

TransitRouterRouteEntries

array<object>

A list of route entries.

object

The information about the route.

TransitRouterRouteEntryId

string

The route ID.

**Note**

This parameter is returned only for static routes.

rte-oklkgwmj97z6dn\*\*\*\*

TransitRouterRouteEntryDestinationCidrBlock

string

The destination CIDR block of the route entry. An IPv4 or IPv6 CIDR block is returned.

192.168.0.0/24

TransitRouterRouteEntryType

string

The type of the route. Valid values:

-   **Static**: static routes.
    
-   **Propagated**: automatically learned by the route table.
    

Static

CreateTime

string

The time when the route entry was created.

The time follows the ISO8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.

**Note**

This parameter is returned only for static routes.

2021-06-15T07:01Z

TransitRouterRouteEntryName

string

The route name.

**Note**

This parameter is returned only for static routes.

testname

TransitRouterRouteEntryStatus

string

The route status. Valid values:

-   **Active**
    
-   **Rejected**
    
-   **Prohibited**
    
-   **Standby**
    
-   **Candidate**
    
-   **Creating**
    
-   **Deleting**
    

Active

TransitRouterRouteEntryNextHopType

string

The next hop type. Valid values:

-   **BlackHole**: a blackhole route. Packets destined for the destination CIDR block of the route are dropped.
    
-   **Attachment**: a network instance connection. Packets destined for the destination CIDR block of the route are forwarded to the specified network instance connection.
    

BlackHole

TransitRouterRouteEntryNextHopId

string

The next hop ID. This parameter is not returned if the route is a blackhole route.

tr-attach-vx6iwhjr1x1j78\*\*\*\*

TransitRouterRouteEntryDescription

string

The route description.

**Note**

This parameter is returned only for static routes.

CidrRoute

OperationalMode

boolean

Indicates whether the route can be managed. Valid values:

-   **true**: The route can be managed. You can delete the route.
    
-   **false**: The route cannot be managed because it is automatically generated by the system.
    

false

Tag

string

The route tag.

Only **PermitVbr** may be returned, which indicates that the route is advertised only to the route tables of the virtual border routers (VBRs) that are connected to the transit router.

**Note**

This parameter is returned only for routes whose CIDR blocks are automatically generated by the system.

PermitVbr

TransitRouterRouteEntryNextHopResourceId

string

The next hop ID.

vpc-m5ent6du8deaq5\*\*\*\*\*

TransitRouterRouteEntryNextHopResourceType

string

The next hop type. Valid values:

-   **VPC**
    
-   **VBR**
    
-   **TR**
    
-   **VPN**
    

VPC

TransitRouterRouteEntryOriginResourceType

string

The source instance type. Valid values:

-   **VPC**
    
-   **VBR**
    
-   **TR**
    
-   **VPN**
    

VPC

TransitRouterRouteEntryOriginResourceId

string

The source instance ID.

vpc-m5ent6du8deaq5\*\*\*\*\*

PrefixListId

string

The prefix list ID.

pl-k1ainl66z3527773d\*\*\*\*

PathAttributes

object

The route attributes.

Communities

array

The route community.

string

The community attributes of the routes.

65501:1

AsPaths

array

The route AS path.

string

The AS path of the route.

65501

OriginInstanceId

string

The source instance ID.

vbr-m5ent6du8deaq5\*\*\*\*\*

OriginInstanceType

string

The source instance type. Valid values:

-   **VPC**
    
-   **VBR**
    
-   **TR**
    
-   **VPN**
    
-   **CCN**
    

VBR

OriginRouteType

string

The route type. Valid values:

-   **System**
    
-   **Custom**
    
-   **static**
    
-   **BGP**
    
-   **BlackHole**
    

BGP

Preference

integer

The route priority.

A smaller value indicates a higher priority.

50

## Examples

Success response

`JSON` format

```
{
  "NextToken": "fce19****",
  "RequestId": "C3835E5E-1504-4344-B1BB-98A4110F1079",
  "TotalCount": 6,
  "MaxResults": 20,
  "TransitRouterRouteEntries": [
    {
      "TransitRouterRouteEntryId": "rte-oklkgwmj97z6dn****",
      "TransitRouterRouteEntryDestinationCidrBlock": "192.168.0.0/24",
      "TransitRouterRouteEntryType": "Static",
      "CreateTime": "2021-06-15T07:01Z",
      "TransitRouterRouteEntryName": "testname",
      "TransitRouterRouteEntryStatus": "Active",
      "TransitRouterRouteEntryNextHopType": "BlackHole",
      "TransitRouterRouteEntryNextHopId": "tr-attach-vx6iwhjr1x1j78****",
      "TransitRouterRouteEntryDescription": "CidrRoute",
      "OperationalMode": false,
      "Tag": "PermitVbr",
      "TransitRouterRouteEntryNextHopResourceId": "vpc-m5ent6du8deaq5*****",
      "TransitRouterRouteEntryNextHopResourceType": "VPC",
      "TransitRouterRouteEntryOriginResourceType": "VPC",
      "TransitRouterRouteEntryOriginResourceId": "vpc-m5ent6du8deaq5*****",
      "PrefixListId": "pl-k1ainl66z3527773d****",
      "PathAttributes": {
        "Communities": [
          "65501:1"
        ],
        "AsPaths": [
          "65501"
        ],
        "OriginInstanceId": "vbr-m5ent6du8deaq5*****\n",
        "OriginInstanceType": "VBR",
        "OriginRouteType": "BGP",
        "Preference": 50
      }
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.TransitRouterRouteTableId

TransitRouterRouteTableId is illegal.

The error message returned because the route table ID of the transit router (TransitRouterRouteTableId) is invalid.

400

IllegalParam.TransitRouterRouteEntryStatus

TransitRouterRouteEntryStatus is illegal.

The error message returned because the status of the route on the transit router (TransitRouterRouteEntryStatus) is invalid.

400

IllegalParam.NextToken

NextToken is illegal.

The error message returned because the NextToken parameter is set to an invalid value.

400

ParamExclusive.RouteEntryIdsAndStatus

TransitRouterRouteEntryIds and TransitRouterRouteEntryStatus is mutually exclusive.

The error message returned because the TransitRouterRouteEntryIds and TransitRouterRouteEntryStatus parameters conflict with each other.

400

InvalidTransitRouterRouteTableId.NotFound

TransitRouterRouteTableId is not found.

The error message returned because the specified route table ID of the transit router does not exist.

400

FilterKeyDuplicated.RouteFilter

The keys in RouteFilter are duplicated.

The error message returned because RouteFilter contains duplicate key values.

400

InvalidFilterKey

The key in filter is invalid.

The key in filter is invalid.

400

IllegalParam.TransitRouterRouteEntryNextHopType

TransitRouterRouteEntryNextHopType is invalid.

The error message returned because the TransitRouterRouteEntryNextHopType parameter is set to an invalid value.

400

IllegalParam.TransitRouterRouteEntryNextHopAttachmentId

TransitRouterRouteEntryNextHopAttachmentId is invalid.

The error message returned because TransitRouterRouteEntryNextHopAttachmentId is set to an invalid value.

400

IllegalParam.TransitRouterRouteEntryNextHopResourceId

TransitRouterRouteEntryNextHopResourceId is invalid.

The error message returned because TransitRouterRouteEntryNextHopResourceId is set to an invalid value.

400

IllegalParam.TransitRouterRouteEntryNextHopResourceType

TransitRouterRouteEntryNextHopResourceType is invalid.

The error message returned because TransitRouterRouteEntryNextHopResourceType is set to an invalid value.

400

IllegalParam.TransitRouterRouteEntryOriginResourceId

TransitRouterRouteEntryOriginResourceId is invalid.

The error message returned because TransitRouterRouteEntryOriginResourceId is set to an invalid value.

400

IllegalParam.TransitRouterRouteEntryOriginResourceType

TransitRouterRouteEntryOriginResourceType is invalid.

The error message returned because TransitRouterRouteEntryOriginResourceType is set to an invalid value.

400

IllegalParam.TransitRouterRouteEntryType

TransitRouterRouteEntryType is invalid.

The error message returned because TransitRouterRouteEntryType is set to an invalid value.

400

IllegalParam.PrefixExactMatchCidr

PrefixExactMatchCidr is invalid.

The error message returned because PrefixExactMatchCidr is set to an invalid value.

400

IllegalParam.LongestPrefixMatchCidr

LongestPrefixMatchCidr is invalid.

The error message returned because LongestPrefixMatchCidr is set to an invalid value.

400

IllegalParam.SubnetOfMatchCidr

SubnetOfMatchCidr is invalid.

The error message returned because SubnetOfMatchCidr is set to an invalid value.

400

IllegalParam.SupernetOfMatchCidr

SupernetOfMatchCidr is invalid.

The error message returned because SupernetOfMatchCidr is set to an invalid value.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

IllegalParam.TextMatchCidr

The TextMatchCidr specified in the parameter is illegal.

The TextMatchCidr specified in the parameter is illegal.

400

ResourceNotFound.PrefixlistAssociation

The prefix list is not associated with this route table.

The error message returned because the specified prefix list is not associated with a route table.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

404

InvalidRouteTableId.NotFound

The specified RouteTableId is not found.

The specified route table ID does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterRouteEntries#workbench-doc-change-demo) for a complete list.
