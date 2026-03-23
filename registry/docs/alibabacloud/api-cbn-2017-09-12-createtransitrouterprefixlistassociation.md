Associates the route table of an Enterprise Edition transit router with a prefix list.

## Operation description

To associate an Enterprise Edition transit router with a route prefix, you must meet the following requirements:

-   You are familiar with the limits and route compatibility notes of prefix lists. For more information, see [Prefix lists](/help/en/cen/user-guide/prefix-lists).
    
-   A prefix list is created. For more information, see [CreateVpcPrefixList](/help/en/vpc/api-creatvpcprefixlist).
    
-   If the prefix list and the Enterprise Edition transit router belong to different Alibaba Cloud accounts, the prefix list is shared with the Alibaba Cloud account that owns the Enterprise Edition transit router. For more information, see [Resource sharing](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview) and [API references for resource sharing](/help/en/resource-management/developer-reference/api-reference-3/).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterPrefixListAssociation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterPrefixListAssociation)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a RAM policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding ARN in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of common condition keys applicable across all RAM-supported services. For more information, see [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms).
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:CreateTransitRouterPrefixListAssociation

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-4266\*\*\*\*

RegionId

string

Yes

The ID of the region where the transit router is deployed.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to query the most recent region list.

cn-hangzhou

TransitRouterId

string

Yes

The ID of the transit router.

tr-6ehx7q2jze8ch5ji0\*\*\*\*

NextHopType

string

No

The type of the next hop. Valid values:

-   **BlackHole**: specifies that all the CIDR blocks in the prefix list are blackhole routes. Packets destined for the CIDR blocks are dropped.
    
-   **VPC**: specifies a virtual private cloud (VPC) connection as the next hop.
    
-   **VBR**: specifies a virtual border router (VBR) connection as the next hop.
    
-   **TR**: specifies an inter-region connection as the next hop.
    
-   **ECR**: specifies an Express Connect Router (ECR) connection as the next hop.
    

VPC

PrefixListId

string

Yes

The ID of the prefix list.

pl-6ehtn5kqxgeyy08fi\*\*\*\*

TransitRouterTableId

string

Yes

The ID of the route table of the transit router.

vtb-6ehgc262hr170qgyc\*\*\*\*

NextHop

string

Yes

The ID of the next hop connection.

To specify all CIDR blocks in the prefix list as blackhole routes, set this parameter to **BlackHole**.

tr-attach-flbq507rg2ckrj\*\*\*\*

OwnerUid

integer

No

The ID of the Alibaba Cloud account to which the prefix list belongs.

1210123456123456

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and sends the request.
    

**Note**

This parameter is not in use.

false

## **Response parameters**

**Parameter**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The ID of the request.

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

NoPermission.AliyunServiceRolePolicyForCEN

You are not authorized to create the service linked role. Role Name: AliyunServiceRolePolicyForCEN. Service Name: cen.aliyuncs.com. Make sure that the user has been granted the ram:CreateServiceLinkedRole permission.

The error message returned because you do not have the permissions to create the service-linked role whose role name is AliyunServiceRolePolicyForCEN and service name is cen.aliyuncs.com. You must acquire the ram:CreateServiceLinkedRole permission before you can create the service-linked role.

400

ResourceNotSupport.CCN

CCN not support prefix list.

The error message returned because prefix lists are not supported by CCN instances.

400

ResourceNotFound.PrefixlistCidrs

Can not find any cidr of specified prefix list.

The error message returned because the specified prefix list does not contain a CIDR block.

400

ResourceNotFound.Nexthop

The specified nexthop instance is not exsit.

The error message returned because the specified next hop does not exist.

400

ResourceExisted.PrefixlistAssociation

The prefix list has been already associated with this route table.

The error message returned because the specified prefix list is already associated with a route table.

400

ResourceNotFound.PrefixlistAssociation

The prefix list is not associated with this route table.

400

ResourceConflict.Route

Some of the prefixes of the prefix list are conflicted with exsited routes.

400

MultipleFound.PrefixlistAssociation

multiple same prefix association record found.

The error message returned because multiple configuration duplicates exist in the system.

400

QuotaReached.Route

The quota of the route table is not enough for the request prefix list.

400

InvalidStatus.PrefixlistAssociation

The prefix list association is not in a valid state for the operation.

The error message returned because the status of the specified prefix list does not support this operation. Try again later.

400

NotSupport.TrType

The basic tr type is not support for this operation.

The error message returned because this operation is not supported by Basic Edition transit routers.

400

InvalidValue.PrefixlistCidr

Invalid cidr exist in the specified prefixlist.

The error message returned because the specified prefix list contains an invalid CIDR block.

400

ResourceNotSupport.Nexthop

The specified nexthop instance type is not support for the operation.

The error message returned because this operation is not supported by the specified next hop.

400

ResourceMismatch.Nexthop

The specified nexthop and nexthop type mismatched.

The error message returned because the specified next hop or next hop type is invalid.

400

ResourceNotFound.PrefixList

The specified prefixlist does not found.

The error message returned because the specified prefix list does not exist.

400

OperationDenied.SystemPrefixList

SystemPrefixList can not be operated.

The error message returned because this operation is not supported by the system prefix list.

400

OperationFailed.OperateShareResource

Operate share prefixlist failed.

The error message returned because the specified prefix list failed to be shared.

400

InvalidStatus.Prefixlist

Prefixlist is not in a operate status.

The error message returned because the status of the specified prefix list does not support this operation.

400

RegionNotSupport.Prefixlist

Prefixlist association are not supported in this region.

The error message returned because the feature is not supported in the specified region.

400

OperationFailed.TransitRouterNotExist

Operation failed because transit router not exist.

The error message returned because the specified transit router does not exist.

400

IncorrectStatus.RouteTable

RouteTable status is invalid.

The error message returned because the operation is not supported when the specified route table is in an unstable state.

400

IllegalParam.TransitRouterTableId

The specified Route Table ID is invalid.

The Route Table ID is invalid.

400

OperationDenied.ECSPrefixList

Associate ECS PrefixList is not supported.

Associate ECS PrefixList is not supported.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTransitRouterPrefixListAssociation#workbench-doc-change-demo) for a complete list.
