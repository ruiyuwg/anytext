Disassociates the route table of an Enterprise Edition transit router from a prefix list.

## Operation description

After you disassociate a route table of an Enterprise Edition transit router from a prefix list, the routes that point to the CIDR blocks in the prefix list are automatically withdrawn from the route table. Before you disassociate the route table of an Enterprise Edition transit router from a prefix list, you must migrate workloads that use the routes in case services are interrupted.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterPrefixListAssociation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterPrefixListAssociation)

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

cen:DeleteTransitRouterPrefixListAssociation

delete

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

You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.

**Note**

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

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

The ID of the next hop.

**Note**

If **NextHopType** is set to **BlackHole**, you must set this parameter to **BlackHole**.

tr-attach-flbq507rg2ckrj\*\*\*\*

NextHopType

string

No

The type of the next hop. Valid values:

-   **BlackHole**: All the CIDR blocks in the prefix list are blackhole routes. Packets destined for the CIDR blocks are dropped.
    
-   **VPC**: The next hop of the CIDR blocks in the prefix list is a VPC connection.
    
-   **VBR**: The next hop of the CIDR blocks in the prefix list is a VBR connection.
    
-   **TR**: The next hop of the CIDR blocks in the prefix list is an inter-region connection.
    

VPC

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and sends the task.
    

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

835E7F4B-B380-4E0F-96A5-6EA572388047

## Examples

Success response

`JSON` format

```
{
  "RequestId": "835E7F4B-B380-4E0F-96A5-6EA572388047"
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

ResourceNotFound.PrefixlistCidrs

Can not find any cidr of specified prefix list.

The error message returned because the specified prefix list does not contain a CIDR block.

400

ResourceNotFound.Nexthop

The specified nexthop instance is not exsit.

The error message returned because the specified next hop does not exist.

400

ResourceNotFound.PrefixlistAssociation

The prefix list is not associated with this route table.

400

MultipleFound.PrefixlistAssociation

multiple same prefix association record found.

The error message returned because multiple configuration duplicates exist in the system.

400

InvalidStatus.PrefixlistAssociation

The prefix list association is not in a valid state for the operation.

The error message returned because the status of the specified prefix list does not support this operation. Try again later.

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

IncorrectStatus.RouteTable

RouteTable status is invalid.

The error message returned because the operation is not supported when the specified route table is in an unstable state.

400

OperationFailed.TransitRouterNotExist

Operation failed because transit router not exist.

The error message returned because the specified transit router does not exist.

400

IncorrectStatus.TransitRouter

TransitRouter status is invalid.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

IllegalParam.TransitRouterTableId

The specified Route Table ID is invalid.

The Route Table ID is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterPrefixListAssociation#workbench-doc-change-demo) for a complete list.
