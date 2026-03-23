Queries the prefix list associations for the route table of an Enterprise Edition transit router.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterPrefixListAssociation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterPrefixListAssociation)

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

cen:ListTransitRouterPrefixListAssociation

get

\*TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutetable/{#centransitrouterroutetableId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID of the transit router.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain the region ID.

cn-hangzhou

TransitRouterId

string

Yes

The ID of the transit router.

tr-6ehx7q2jze8ch5ji0\*\*\*\*

TransitRouterTableId

string

No

The ID of the route table of the transit router.

vtb-6ehgc262hr170qgyc\*\*\*\*

PrefixListId

string

No

The ID of the prefix list.

pl-6ehtn5kqxgeyy08fi\*\*\*\*

OwnerUid

integer

No

The ID of the Alibaba Cloud account to which the prefix list belongs.

1210123456123456

PageNumber

integer

No

The number of the page to return. Default value: **1**.

1

PageSize

integer

No

The number of entries to return on each page. Maximum value: **100**. Default value: **10**.

10

NextHop

string

No

The ID of the next hop connection.

**Note**

If you want to query information about the prefix list that is used to generate blackhole routes, set this parameter to **BlackHole**.

tr-attach-flbq507rg2ckrj\*\*\*\*

NextHopType

string

No

The next hop type. Valid values:

-   **BlackHole**: queries the prefix lists that generate blackhole routes.
    
-   **VPC**: queries the prefix lists whose next hop is a Virtual Private Cloud (VPC) connection.
    
-   **VBR**: queries the prefix lists whose next hop is a virtual border router (VBR) connection.
    
-   **TR**: queries the prefix lists whose next hop is an inter-region connection.
    

VPC

NextHopInstanceId

string

No

The ID of the network instance that is associated with the next hop connection.

vpc-6eh7fp9hdqa2wv85t\*\*\*\*

Status

string

No

The status of the prefix list.

-   **Active**: The prefix list is active.
    
-   **Updating**: The prefix list is being updated.
    

Active

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The request ID.

6005CA94-676E-1FEE-985E-7602EFAADD6A

TotalCount

integer

The total number of entries returned.

1

PageSize

integer

The number of entries per page.

10

PageNumber

integer

The page number.

1

PrefixLists

array<object>

The information about the prefix lists.

object

The information about the prefix list.

PrefixListId

string

The ID of the prefix list.

pl-6ehtn5kqxgeyy08fi\*\*\*\*

OwnerUid

integer

The ID of the Alibaba Cloud account to which the prefix list belongs.

1210123456123456

Status

string

The status of the prefix list.

-   **Active**: The prefix list is active.
    
-   **Updating**: The prefix list is being updated.
    

Active

NextHop

string

The ID of the next hop connection.

**Note**

If **BlackHole** is returned, it indicates that all CIDR blocks in the prefix list are blackhole routes. All traffic destined for the CIDR blocks in the prefix list is dropped.

tr-attach-flbq507rg2ckrj\*\*\*\*

NextHopInstanceId

string

The ID of the network instance that is associated with the next hop connection.

vpc-6eh7fp9hdqa2wv85t\*\*\*\*

NextHopType

string

The next hop type.

-   **BlackHole**: The routes are blackhole routes. All traffic destined for the CIDR blocks in the prefix list is dropped.
    
-   **VPC**: The next hop is a Virtual Private Cloud (VPC) connection.
    
-   **VBR**: The next hop is a virtual border router (VBR) connection.
    
-   **TR**: The next hop is an inter-region connection.
    

VPC

TransitRouterTableId

string

The ID of the route table of the transit router.

vtb-6ehgc262hr170qgyc\*\*\*\*

TransitRouterId

string

The ID of the transit router.

tr-6ehx7q2jze8ch5ji0\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6005CA94-676E-1FEE-985E-7602EFAADD6A",
  "TotalCount": 1,
  "PageSize": 10,
  "PageNumber": 1,
  "PrefixLists": [
    {
      "PrefixListId": "pl-6ehtn5kqxgeyy08fi****",
      "OwnerUid": 1210123456123456,
      "Status": "Active",
      "NextHop": "tr-attach-flbq507rg2ckrj****",
      "NextHopInstanceId": "vpc-6eh7fp9hdqa2wv85t****",
      "NextHopType": "VPC",
      "TransitRouterTableId": "vtb-6ehgc262hr170qgyc****",
      "TransitRouterId": "tr-6ehx7q2jze8ch5ji0****"
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

IllegalParam.Region

The specified Region is invalid.

The error message returned because the specified region is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterPrefixListAssociation#workbench-doc-change-demo) for a complete list.
