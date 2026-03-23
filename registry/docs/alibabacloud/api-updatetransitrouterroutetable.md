You can call the UpdateTransitRouterRouteTable operation to modify the name and description of a route table for an Enterprise Edition transit router, or to enable or disable multi-region equal-cost multi-path (ECMP) routing.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateTransitRouterRouteTable)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateTransitRouterRouteTable)

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

cen:UpdateTransitRouterRouteTable

update

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

TransitRouterRouteTableId

string

Yes

The ID of the route table for the Enterprise Edition transit router.

vtb-bp1dudbh2d5na6b50\*\*\*\*

TransitRouterRouteTableName

string

No

The name of the route table.

The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.

testname

TransitRouterRouteTableDescription

string

No

The description of the route table.

The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.

testdesc

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a parameter value from your client to make sure that the value is unique among different requests. The ClientToken can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. The dry run checks permissions and the status of the instance. Valid values:

-   **false** (default): Sends a normal request. After the request passes the check, the name and description of the route table are modified.
    
-   **true**: Sends a check request. The system checks the required parameters and the request format. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
    

false

RouteTableOptions

object

No

The features of the route table.

MultiRegionECMP

string

No

The multi-region ECMP routing feature. Valid values:

-   **disable**: Disables multi-region ECMP routing. After you disable this feature, if routes with the same prefix are learned from different regions and have the same attributes, the route that is learned from the region with the alphabetically smallest ID is used as the next hop. This may change traffic latency and inter-region bandwidth consumption. Evaluate the impact before you disable this feature.
    
-   **enable**: Enables multi-region ECMP routing. After you enable this feature, if routes with the same prefix are learned from different regions and have the same attributes, ECMP routes are formed. This may change traffic latency and inter-region bandwidth consumption. Evaluate the impact before you enable this feature.
    

disable

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

9D6D5548-F271-41C4-AA9F-A62F5599085B

## Examples

Success response

`JSON` format

```
{
  "RequestId": "9D6D5548-F271-41C4-AA9F-A62F5599085B"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTransitRouterRouteTableId.NotFound

TransitRouterRouteTableId is not found.

The error message returned because the specified route table ID of the transit router does not exist.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

InvalidDescription

Description is invalid.

The error message returned because the description is invalid.

400

OperationUnsupported.MultiRegionEcmp

This region does not support MultiRegionEcmp.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/UpdateTransitRouterRouteTable#workbench-doc-change-demo) for a complete list.
