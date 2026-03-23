Creates an aggregate route.

## Operation description

After you add an aggregate route to the route table of an Enterprise Edition transit router, the transit router propagates the aggregate route only to the route tables of VPC instances that are associated with the transit router route table and have route synchronization enabled.

Before you create an aggregate route, make sure that the following requirements are met. Otherwise, the Enterprise Edition transit router does not propagate the aggregate route to the route tables of VPC instances:

-   The VPC instance is associated with the route table of the Enterprise Edition transit router. For more information, see [AssociateTransitRouterAttachmentWithRouteTable](/help/en/cen/developer-reference/api-associatetransitrouterattachmentwithroutetable).
    
-   Route synchronization is enabled for the VPC instance. For more information, see [CreateTransitRouterVpcAttachment](/help/en/cen/developer-reference/api-createtransitroutervpcattachment).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouteTableAggregation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouteTableAggregation)

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

cen:CreateTransitRouteTableAggregation

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

TransitRouteTableId

string

Yes

The ID of the route table of the Enterprise Edition transit router.

vtb-iq8qgruq1ry8jc7vt\*\*\*\*

TransitRouteTableAggregationName

string

No

The name of the aggregate route.

The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.

nametest

TransitRouteTableAggregationCidr

string

Yes

The destination CIDR block of the aggregate route.

**Note**

The following CIDR blocks are not supported:

-   CIDR blocks that start with 0 or 100.64
    
-   Multicast addresses (224.0.0.1 to 239.255.255.254)
    

192.168.10.0/24

TransitRouteTableAggregationScope

string

No

The propagation scope of the aggregate route.

The only valid value is **VPC**. This value indicates that the aggregate route is propagated to all VPC instances that are associated with the route table of the Enterprise Edition transit router and have route synchronization enabled.

VPC

TransitRouteTableAggregationScopeList

array

No

The list of propagation scopes for the aggregate route.

**Note**

You must specify either this parameter or TransitRouteTableAggregationScope. We recommend that you use this parameter. The elements in this list cannot be the same as the value of TransitRouteTableAggregationScope.

string

No

The list of propagation scopes for the aggregate route. Valid values:

-   **VPC**: propagates the aggregate route to all VPC instances that are associated with the route table of the Enterprise Edition transit router and have route synchronization enabled.
    
-   **VBR**: propagates the aggregate route to VBR instances that are attached to the Enterprise Edition transit router.
    
-   **Peer**: propagates the aggregate route to transit routers that have an inter-region connection with the Enterprise Edition transit router.
    
-   **VPN**: propagates the aggregate route to VPN attachments that are attached to the Enterprise Edition transit router.
    
-   **ECR**: propagates the aggregate route to ECR instances that are attached to the Enterprise Edition transit router.
    

VPC

TransitRouteTableAggregationDescription

string

No

The description of the aggregate route.

The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.

desctest

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a value from your client to make sure that the value is unique among different requests. The ClientToken can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run for the request. A dry run checks permissions and instance status. Valid values:

-   **false** (default): sends a normal request. If the request passes the check, an aggregate route is created.
    
-   **true**: sends a check request to verify the required parameters and the request format. The aggregate route is not created. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
    

false

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

0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidOperation.RegionNotSupport

The Operation is not Support in this region.

The error message returned because this operation is not supported in the specified region.

400

InstanceExist.AggregationRoute

This aggregation route is already created.

The error message returned because the aggregated route already exists.

400

InstanceNotExist.TransitRouteTable

The transitRouter route table is not exist.

The error message returned because the specified transit router route table does not exist.

400

IncorrectStatus.TransitRouteTable

The transitRouter route table is not in a valid state for the operation.

The error message returned because the status of the transit router route table does not support this operation. Try again later.

400

QuotaExceeded.AggregationRoute

The aggregation route count is over limit.

The error message returned because the number of aggregated routes has reached the upper limit.

400

InstanceNotExist.TransitRouter

The aggregation route is not exist.

The error message returned because the specified transit router does not exist.

400

OperationUnsupported.TransitRouterType

The operation is not supported because of the wrong transitRouter type.

The error message returned because this operation is not supported by the specified type of transit router.

400

IncorrectStatus.TransitRouter

The status of transitRouter is invalid.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

OperationUnsupported.ServiceMode

The operation is not supported because of the wrong transitRouter service mode.

The error message returned because the transit router mode does not support this operation.

400

InvalidCidrBlock

The cidr block is invalid.

The error message returned because the specified CIDR block is invalid.

400

RouteConflict

The specified route already exists.

The specified route already exists.

400

InvalidOperation.InstanceNotSupportIPv6Route

The cen dose not support Ipv6 route.

400

IllegalParam.TransitRouteTableAggregationCidr

The param TransitRouteTableAggregationCidr is illegal.

400

MissingParameter.ScopeListOrScope

The input parameter TransitRouteTableAggregationScopeList or TransitRouteTableAggregationScope that is mandatory for processing this request is not supplied.

The input parameter TransitRouteTableAggregationScopeList or TransitRouteTableAggregationScope that is mandatory for processing this request is not supplied.

400

InvalidParameter.TransitRouteTableAggregationScope

TransitRouteTableAggregationScope is invalid.

The propagation scope of the aggregate route is illegal.

400

InvalidParameter.TransitRouteTableAggregationScopeList

TransitRouteTableAggregationScopeList is invalid.

TransitRouteTableAggregationScopeList is invalid.

400

MissingParam.TransitRouteTableAggregationScope

The parameter TransitRouteTableAggregationScope is mandatory.

The parameter TransitRouteTableAggregationScope is mandatory.

400

IllegalParam.TransitRouteTableAggregationScope

TransitRouteTableAggregationScope is invalid, valid value is VPC.

TransitRouteTableAggregationScope is invalid, valid value is VPC.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTransitRouteTableAggregation#workbench-doc-change-demo) for a complete list.
