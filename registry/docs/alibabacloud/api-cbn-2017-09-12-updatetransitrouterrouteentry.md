Modifies the name and description of a route in a route table of an Enterprise Edition transit router.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateTransitRouterRouteEntry)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateTransitRouterRouteEntry)

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

cen:UpdateTransitRouterRouteEntry

update

\*TransitRouterRouteTable

`acs:cen:*:{#accountId}:centransitrouterroutetable/{#TransitRouterRouteTableId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

TransitRouterRouteEntryId

string

Yes

The ID of the route.

rte-ksssq7kto4wfdx\*\*\*\*

TransitRouterRouteEntryName

string

No

The new name of the route.

The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

testname

TransitRouterRouteEntryDescription

string

No

The new description of the route.

The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

testdesc

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** is different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Default values:

-   **false** (default): performs a dry run and sends the request.
    
-   **true**: performs a dry run. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    

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

IllegalParam.TransitRouterRouteEntryId

TransitRouterRouteEntryId is not found.

The error message returned because the route ID of the transit router (TransitRouterRouteEntryId) is invalid.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

InvalidDescription

Description is invalid.

The error message returned because the description is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

OperationFailed.UpdateTransitRouterRouteEntry

Operation failed because this route entry is created by system.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/UpdateTransitRouterRouteEntry#workbench-doc-change-demo) for a complete list.
