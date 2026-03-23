You can call the DeleteTransitRouterRouteEntry operation to delete a static route of the Blackhole or Attachment type from the route table of an Enterprise Edition transit router.

## Operation description

Before you call this operation, note the following:

-   If you delete a route entry by specifying **TransitRouterRouteEntryId**, you do not need to specify the **TransitRouterRouteTableId** or **TransitRouterRouteEntryDestinationCidrBlock** parameters. These parameters are mutually exclusive.
    
-   If you do not specify **TransitRouterRouteEntryId**, you must specify the required parameters based on the next hop type:
    
    -   To delete a blackhole route, specify the **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, and **TransitRouterRouteEntryNextHopType** parameters.
        
    -   To delete a route that is not a blackhole route, specify the **TransitRouterRouteTableId**, **TransitRouterRouteEntryDestinationCidrBlock**, **TransitRouterRouteEntryNextHopType**, and **TransitRouterRouteEntryNextHopId** parameters.
        
-   **DeleteTransitRouterRouteEntry** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the route entry is not immediately deleted. The system deletes the route entry in the background. You can call the **ListTransitRouterRouteEntries** operation to query the status of the route entry.
    
    -   If a route entry is in the **Deleting** state, it is being deleted. You can only query the route entry and cannot perform other operations.
        
    -   If the specified route entry cannot be found, the route entry has been deleted.
        

### Limits

This operation deletes only static routes. It cannot delete routes that are automatically learned by the system. To query the type of a route entry, call the [ListTransitRouterRouteEntries](/help/en/cen/developer-reference/api-listtransitrouterrouteentries) operation.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterRouteEntry)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterRouteEntry)

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

cen:DeleteTransitRouterRouteEntry

delete

TransitRouterRouteEntry

`acs:cen:*:{#accountId}:centransitrouterroutentry/{#centransitrouterroutentryId}`

TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutentry/{#transitrouterroutetableId}`

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

A client token that is used to ensure the idempotence of the request.

The token must be unique for each request and can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. A dry run checks for potential issues, such as missing parameter values, incorrect request syntax, and service limits. Valid values:

-   **false** (default): Sends the request. If the request passes the check, the route entry is deleted.
    
-   **true**: Performs only a dry run. The system checks the request for potential issues. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
    

false

TransitRouterRouteEntryId

string

No

The ID of the route entry.

rte-75eg4jprkvk0pw\*\*\*\*

TransitRouterRouteEntryNextHopType

string

No

The type of the next hop. Valid values:

-   **BlackHole**: The route is a blackhole route. You do not need to specify a next hop.
    
-   **Attachment**: The next hop is a network instance connection. You must specify the ID of the network instance connection.
    

BlackHole

TransitRouterRouteEntryDestinationCidrBlock

string

No

The destination CIDR block of the route.

192.168.0.0/24

TransitRouterRouteEntryNextHopId

string

No

The ID of the network instance connection that serves as the next hop.

tr-attach-nls9fzkfat8934\*\*\*\*

TransitRouterRouteTableId

string

No

The ID of the route table of the Enterprise Edition transit router.

vtb-bp1dudbh2d5na6b50\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

2D69CCEA-42D0-48B2-8C9A-9BB207F76D6E

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2D69CCEA-42D0-48B2-8C9A-9BB207F76D6E"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

IllegalParam.TransitRouterRouteEntryId

TransitRouterRouteEntryId is not found.

The error message returned because the route ID of the transit router (TransitRouterRouteEntryId) is invalid.

400

ParamExclusive.RouteEntryIdAndRouteTableIdOrDestCidrBlock

RouteEntryId and TransitRouterRouteTableIdOrDestCidrBlock is mutually exclusive.

The error message returned because the RouteEntryId, TransitRouterRouteTableId, or DestCidrBlock parameter conflicts with each other.

400

InvalidTransitRouterRouteTableId.NotFound

TransitRouterRouteTableId is not found.

The error message returned because the specified route table ID of the transit router does not exist.

400

InvalidDestinationCidrBlock.NotFound

DestinationCidrBlock is not found.

The error message returned because the specified destination CIDR block does not exist.

400

OperationFailed.DeleteTransitRouterRouteEntry

Operation failed because this route entry is created automatically.

You cannot delete a route that is automatically created by the system.

400

IllegalParam.NextHopType

The NextHopType is illegal.

The error message returned because the NextHopType parameter is set to an invalid value.

400

IllegalParam.TransitRouterRouteTableId

The transitRouter route table id is illegal.

The error message returned because the route table ID of the transit router (TransitRouterRouteTableId) is invalid.

400

MissingParam.TransitRouterRouteEntryNextHopId

The parameter TransitRouterRouteEntryNextHopId is mandatory

The error message returned because the TransitRouterRouteEntryNextHopId parameter is not set.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterRouteEntry#workbench-doc-change-demo) for a complete list.
