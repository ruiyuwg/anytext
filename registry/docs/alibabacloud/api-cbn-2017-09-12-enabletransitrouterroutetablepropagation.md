Creates a route learning correlation.

## Operation description

After you establish a network instance connection on a transit router, you can create a route learning correlation for the network instance connection. Then, the routes of the connected network instance are automatically advertised to the route table of the transit router. Before you begin, we recommend that you take note of the following rules:

-   You can create route learning correlations only on Enterprise Edition transit routers. For more information about the regions and zones that support Enterprise Edition transit routers, see [What is CEN?](/help/en/cen/product-overview/what-is-cen/)
    
-   **EnableTransitRouterRouteTablePropagation** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterRouteTablePropagations** operation to query the route learning status between a network instance connection and a route table.
    
    -   **Enabling** indicates that a route learning correlation is being created between the network instance connection and route table. You can query the route learning correlation but cannot perform other operations.
        
    -   **Active** indicates that the route learning correlation is created between the network instance connection and route table.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/EnableTransitRouterRouteTablePropagation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/EnableTransitRouterRouteTablePropagation)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:EnableTransitRouterRouteTablePropagation

update

\*TransitRouterPeerAttachment

`acs:cen:*:{#accountId}:centransitrouterattachment/{#centransitrouterattachmentId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

TransitRouterAttachmentId

string

Yes

The ID of the network instance connection.

tr-attach-nls9fzkfat8934\*\*\*\*

TransitRouterRouteTableId

string

Yes

The ID of the route table of the Enterprise Edition transit router.

vtb-bp1dudbh2d5na6b50\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Default values:

-   **false** (default): performs a dry run and performs the actual request.
    
-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    

false

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

59CF8BF9-DE61-421E-B903-D56AF46A303C

## Examples

Success response

`JSON` format

```
{
  "RequestId": "59CF8BF9-DE61-421E-B903-D56AF46A303C"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.TransitRouterTableId

The specified TransitRouterTableId is invalid.

The error message returned because the TransitRouterTableId parameter is set to an invalid value.

400

OperationFailed.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

IncorrectStatus.AttachmentOrRouteTable

The resource is not in a valid state for the operation.

The error message returned because this operation is not supported when the specified attachment or route table is in an unstable state. Try again later.

400

OperationUnsupported.EnablePropagation

The specified attachment or routeTable is not supported by this operation.

The error message returned because this operation is not supported by the specified attachment or route table.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

InvalidParameter.TransitRouterRouteTableId

The specified parameter TransitRouterRouteTableId is invalid.

400

InvalidParameter.TransitRouterAttachmentId

The specified parameter TransitRouterAttachmentId is invalid.

404

InvalidRouteTableId.NotFound

The specified RouteTableId is not found.

The specified route table ID does not exist.

404

InvalidAttachmentId.NotFound

The specified AttachmentId is not found.

The error message returned because the specified network instance connection ID does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/EnableTransitRouterRouteTablePropagation#workbench-doc-change-demo) for a complete list.
