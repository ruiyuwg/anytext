Queries the details of route entries in a specific region of a Cloud Enterprise Network (CEN) instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCenRegionDomainRouteEntries)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCenRegionDomainRouteEntries)

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

cen:DescribeCenRegionDomainRouteEntries

get

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

CenId

string

Yes

The ID of the CEN instance.

cen-7qthudw0ll6j\*\*\*\*

CenRegionId

string

Yes

The region ID.

Call [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) to obtain the region ID.

cn-hangzhou

PageNumber

integer

No

The page number. The default value is **1**.

1

PageSize

integer

No

The number of entries to return on each page. The default value is **10**. Valid values: **1** to **500**.

10

Status

string

No

The status of the route entry. Valid values:

-   **Active** (default): active.
    
-   **Candidate**: backup.
    
-   **Rejected**: rejected.
    
-   **Prohibited**: disabled.
    
-   **All**: all route entries in the current region, regardless of their status.
    

Active

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The request ID.

004E99FB-E996-5777-888E-BA1D8F215407

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

4

CenRouteEntries

object

CenRouteEntry

array<object>

A list of route entries.

object

ToOtherRegionStatus

string

The status of the route entry that is advertised to another region.

-   **Active**: active.
    
-   **Prohibited**: disabled.
    

Active

Type

string

The type of the route entry.

-   **CEN**: The route is advertised through CEN.
    
-   **Custom**: The route is a custom route.
    
-   **System**: The route is a system route.
    

CEN

Status

string

The status of the route entry.

-   **Active**: active.
    
-   **Candidate**: backup.
    
-   **Rejected**: rejected.
    
-   **Prohibited**: disabled.
    

Active

NextHopType

string

The next hop type of the route entry.

-   **VPC**: virtual private cloud.
    
-   **VBR**: virtual border router.
    
-   **CCN**: Cloud Connect Network.
    
-   **local\_service**: The route entry is a system route for an Alibaba Cloud service and has no next hop.
    

VPC

NextHopInstanceId

string

The ID of the network instance that is associated with the next hop.

vpc-bp1j8728mm6pweeod\*\*\*\*

NextHopRegionId

string

The region ID of the network instance that is associated with the next hop.

cn-hangzhou

DestinationCidrBlock

string

The destination CIDR block of the route entry.

192.168.1.0/24

Preference

integer

The priority of the route entry.

A smaller value indicates a higher priority.

50

CenRouteMapRecords

object

CenRouteMapRecord

array<object>

The routing policy that the route entry matches in the Ingress direction.

object

RouteMapId

string

The routing policy ID.

cenrmap-cz5axczdxb7yfu\*\*\*\*

RegionId

string

The ID of the region where the routing policy is applied.

cn-hangzhou

CenOutRouteMapRecords

object

CenOutRouteMapRecord

array<object>

The routing policy that the route entry matches in the Egress direction.

object

RouteMapId

string

The routing policy ID.

cenrmap-dbarzidzp7ek4k\*\*\*\*

RegionId

string

The ID of the region where the routing policy is applied.

ccn-cn-shanghai

Communities

object

Community

array

A list of community attributes of the route entry.

string

The community attribute of the route entry.

65501:1

AsPaths

object

AsPath

array

A list of AS-Path attributes of the route entry.

string

The AS-Path attribute of the route entry.

65501

## Examples

Success response

`JSON` format

```
{
  "PageSize": 10,
  "RequestId": "004E99FB-E996-5777-888E-BA1D8F215407",
  "PageNumber": 1,
  "TotalCount": 4,
  "CenRouteEntries": {
    "CenRouteEntry": [
      {
        "ToOtherRegionStatus": "Active",
        "Type": "CEN",
        "Status": "Active",
        "NextHopType": "VPC",
        "NextHopInstanceId": "vpc-bp1j8728mm6pweeod****",
        "NextHopRegionId": "cn-hangzhou",
        "DestinationCidrBlock": "192.168.1.0/24",
        "Preference": 50,
        "CenRouteMapRecords": {
          "CenRouteMapRecord": [
            {
              "RouteMapId": "cenrmap-cz5axczdxb7yfu****",
              "RegionId": "cn-hangzhou"
            }
          ]
        },
        "CenOutRouteMapRecords": {
          "CenOutRouteMapRecord": [
            {
              "RouteMapId": "cenrmap-dbarzidzp7ek4k****",
              "RegionId": "ccn-cn-shanghai"
            }
          ]
        },
        "Communities": {
          "Community": [
            "65501:1"
          ]
        },
        "AsPaths": {
          "AsPath": [
            "65501"
          ]
        }
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DescribeCenRegionDomainRouteEntries#workbench-doc-change-demo) for a complete list.
