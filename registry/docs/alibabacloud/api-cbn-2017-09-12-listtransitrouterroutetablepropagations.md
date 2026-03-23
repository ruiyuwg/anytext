Lists the route propagations for the route table of an Enterprise Edition transit router.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterRouteTablePropagations)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterRouteTablePropagations)

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

cen:ListTransitRouterRouteTablePropagations

get

TransitRouterPeerAttachment

`acs:cen:*:{#accountid}:centransitrouterattachment/{#TransitRouterAttachmentId}`

TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutetable/{#TransitRouterRouteTableId}`

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

The number of entries to return on each page. The default value is **50**.

50

NextToken

string

No

The token that is used to retrieve the next page of results.

dd20\*\*\*\*

TransitRouterRouteTableId

string

Yes

The ID of the route table of the Enterprise Edition transit router.

vtb-bp1dudbh2d5na6b50\*\*\*\*

TransitRouterAttachmentId

string

No

The ID of the network instance connection.

tr-attach-vx6iwhjr1x1j78\*\*\*\*

TransitRouterAttachmentResourceId

string

No

The ID of the network instance.

vpc-bp1h8vbrbcgohcju5\*\*\*\*

TransitRouterAttachmentResourceType

string

No

The type of the network instance.

-   **VPC**: a virtual private cloud (VPC).
    
-   **VBR**: a virtual border router (VBR).
    
-   **TR**: a transit router.
    
-   **VPN**: a VPN connection.
    

VPC

Status

string

No

The status of the route propagation.

-   **Active**: The propagation is active.
    
-   **Enabling**: The propagation is being enabled.
    
-   **Disabling**: The propagation is being disabled.
    

Active

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

NextToken

string

The token that is used to retrieve the next page of results.

dd20\*\*\*\*

RequestId

string

The request ID.

04C81E0D-945E-4D61-A561-3DEA322F243B

TotalCount

integer

The total number of entries.

2

MaxResults

integer

The number of entries returned per page.

50

TransitRouterPropagations

array<object>

A list of the route propagations.

object

TransitRouterAttachmentId

string

The ID of the network instance connection.

tr-attach-vx6iwhjr1x1j78\*\*\*\*

Status

string

The status of the route propagation.

-   **Enabling**: The propagation is being enabled.
    
-   **Disabling**: The propagation is being disabled.
    
-   **Active**: The propagation is active.
    

Active

ResourceType

string

The type of the network instance.

-   **VPC**: a VPC.
    
-   **VBR**: a VBR.
    
-   **TR**: a transit router.
    
-   **VPN**: a VPN connection.
    

VPC

ResourceId

string

The ID of the network instance.

vpc-bp1h8vbrbcgohcju5\*\*\*\*

TransitRouterRouteTableId

string

The ID of the route table of the Enterprise Edition transit router.

vtb-bp1dudbh2d5na6b50\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "NextToken": "dd20****",
  "RequestId": "04C81E0D-945E-4D61-A561-3DEA322F243B",
  "TotalCount": 2,
  "MaxResults": 50,
  "TransitRouterPropagations": [
    {
      "TransitRouterAttachmentId": "tr-attach-vx6iwhjr1x1j78****",
      "Status": "Active",
      "ResourceType": "VPC",
      "ResourceId": "vpc-bp1h8vbrbcgohcju5****",
      "TransitRouterRouteTableId": "vtb-bp1dudbh2d5na6b50****"
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

IllegalParam.NextToken

The parameter NextToken is invalid.

The error message returned because the NextToken parameter is set to an invalid value. Check the value and try again.

400

IllegalParam.MaxResults

The specified MaxResults is illegal.

MaxResults illegal.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterRouteTablePropagations#workbench-doc-change-demo) for a complete list.
