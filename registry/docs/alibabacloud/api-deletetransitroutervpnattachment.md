Deletes a VPN connection.

## Operation description

When you call the **DeleteTransitRouterVpnAttachment** operation, ensure that the parameter values are valid. If you specify invalid parameters, the system returns a **RequestId** but does not delete the VPN connection.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterVpnAttachment)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterVpnAttachment)

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

cen:DeleteTransitRouterVpnAttachment

delete

\*TransitRouterVpnAttachment

`acs:cen:*:{#accountId}:centransitrouterattachment/{#centransitrouterattachmentId}`

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

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each request is unique.

123e4567-e89b-12d3-a456-42665544\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): sends a normal request. If the request passes the check, the VPN connection is deleted.
    

false

TransitRouterAttachmentId

string

Yes

The ID of the VPN connection.

tr-attach-b9xj1dv69600kj\*\*\*\*

Force

boolean

No

Specifies whether to forcefully delete the VPN connection. Valid values:

-   **false** (default): checks for resource dependencies, such as associated forwarding and route learning, before the VPN connection is deleted. If a dependency is found, the deletion fails and an error message is returned.
    
-   **true**: deletes the VPN connection and all its dependencies.
    

false

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response that is returned.

RequestId

string

The request ID.

FA43C571-E88B-56C0-8FF8-5646D9B96297

## Examples

Success response

`JSON` format

```
{
  "RequestId": "FA43C571-E88B-56C0-8FF8-5646D9B96297"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.RouteTableAssociationExist

Operation failed because TransitRouterRouteTable exists.

The error message returned because a transit router route table (TransitRouterRouteTable) exists.

400

OperationFailed.RouteEntryExist

Operation failed because the TransitRouterAttachment exists in RouteTable.

400

InvalidTransitRouterAttachmentId.NotFound

The TransitRouterAttachmentId is not found.

The error message returned because the specified transit router attachment ID (TransitRouterAttachmentId) does not exist.

400

OperationFailed.NotSupportForceDelete

Not support force delete attachment.

The error message returned because the specified resource cannot be forcefully deleted.

400

OperationUnsupported.TransitRouterType

The operation is not supported because of the wrong transitRouter type.

The error message returned because this operation is not supported by the specified type of transit router.

400

IncorrectStatus.ResourceStatus

The resource is not in a valid state for the attachment operation.

The error message returned because this operation is not supported when the specified resource is in an unstable state. Try again later.

400

OperationFailed.RouteTablePropagationExist

Operation failed because You are not allowed to delete TransitAttachment with TransitRouter RouteTable Associated.

The error message returned because the transit route attachment (TransitAttachment) is associated with a route table. Disassociate the attachment from the route table and try again.

400

OperationFailed.PrefixListExist

Operation failed because PrefixList exists.

The error message returned because a prefix list exists.

400

OperationFailed.FlowLogExistOrNisOpened

Operation failed because FlowLog exists or Nis opened.

The error message returned because this operation is not supported when a flow log exists or the NIS service is activated.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterVpnAttachment#workbench-doc-change-demo) for a complete list.
