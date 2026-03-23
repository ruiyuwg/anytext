You can call the DeleteTransitRouterRouteTable operation to delete a custom route table of an Enterprise Edition transit router.

## Operation description

-   You cannot delete the default route table of an Enterprise Edition transit router.
    
-   **DeleteTransitRouterRouteTable** is an asynchronous operation. After you send a request, the system returns a **RequestId**. The custom route table is not deleted immediately because the system deletes the route table in the background. You can call the **ListTransitRouterRouteTables** operation to query the status of the custom route table.
    
    -   If a custom route table is in the Deleting state, the route table is being deleted. In this state, you can only query the route table. You cannot perform other operations.
        
    -   If the specified custom route table cannot be found, the route table has been deleted.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterRouteTable)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterRouteTable)

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

cen:DeleteTransitRouterRouteTable

delete

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a token from your client to ensure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. A dry run checks for issues such as permissions and instance status. Valid values:

-   **false** (default): Sends a normal request. The custom route table is deleted after the request passes the check.
    
-   **true**: Sends a check request. The system checks the required parameters, request format, and permissions. If the check fails, an error message is returned. If the check succeeds, the `DryRunOperation` error code is returned. The custom route table is not deleted.
    

false

TransitRouterRouteTableId

string

Yes

The ID of the custom route table.

vtb-bp1xbcgpgcz9axl9m\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

EAB2F133-8556-4D7C-9E91-7EE4FE9CC7D2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "EAB2F133-8556-4D7C-9E91-7EE4FE9CC7D2"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.DeleteSystemRouteTable

Operation failed because You are not allowed to Delete System Transit Route Table.

The error message returned because system route tables cannot be deleted.

400

InvalidTransitRouterRouteTableId.NotFound

TransitRouterRouteTableId is not found.

The error message returned because the specified route table ID of the transit router does not exist.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

MissingParam.TransitRouterRouteTableId

The parameter TransitRouterRouteTableId is mandatory.

The error message returned because the TransitRouterRouteTableId parameter is not set.

400

IncorrectStatus.TransitRouterRouteTable

TransitRouterRouteTable status is invalid.

The error message returned because the transit router is in an invalid state.

400

OperationFailed.DeleteRouteTableWithAssociation

Operation failed because you are not allowed to delete TransitRouterRouteTable with association

The error message returned because the route table cannot be deleted when it is associated with a forwarding correlation. Disassociate the route table from the forwarding correlation and try again.

400

OperationFailed.DeleteRouteTableWithPropagation

Operation failed because you are not allowed to delete transit router route table with propagation

The error message returned because the route table cannot be deleted when it is associated with a route leaning policy. Disassociate the route table from the route learning policy and try again.

400

OperationFailed.DeleteRouteTableWithRouteEntry

Operation failed because you are not allowed to delete transit touter route table with route entry

The error message returned because the route table cannot be deleted when it contains a route entry. Delete all route entries from the route table and try again.

400

OperationFailed.DeleteRouteTableWithRouteAggregation

Operation is invalid because delete route table with route aggregation.

The error message returned because the specified route table contains one or more aggregated routes. Delete the aggregated routes and try again.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterRouteTable#workbench-doc-change-demo) for a complete list.
