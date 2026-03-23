Deletes a virtual border router (VBR) connection for an Enterprise Edition transit router.

## Operation description

The **DeleteTransitRouterVbrAttachment** operation is asynchronous. The system returns a **RequestId**, while running the deletion task in the background. You can call the **ListTransitRouterVbrAttachments** operation to query the status of the VBR connection.

-   When the VBR connection is in the **Detaching** state, the VBR is being deleted. You can only query the VBR connection but cannot perform other operations.
    
-   If a VBR connection cannot be found, the VBR connection is deleted.
    

Before you call the DeleteTransitRouterVbrAttachment operation, make sure that all request parameters are valid. If a parameter is invalid, the system returns a request ID and does not delete the VBR connection.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterVbrAttachment)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterVbrAttachment)

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

cen:DeleteTransitRouterVbrAttachment

\*TransitRouterVbrAttachment

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

Use the client to generate the token, but you must make sure that the token is unique among requests. The token can contain only ASCII characters.

**Note**

When left empty, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** is different for each API request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

TransitRouterAttachmentId

string

Yes

The ID of the VBR connection.

tr-attach-9nlnjv7by7n7a\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run to check permissions and instance status. Valid values:

-   **false** (default): sends a request and deletes the VBR connection.
    
-   **true**: sends a check request without deleting the VBR connection. The system checks the required parameters and request syntax. If the request fails the dry run, an error code is returned. If the request passes the dry run, a request ID is returned.
    

false

Force

boolean

No

Specifies whether to forcibly delete the VBR connection. Valid values:

-   **false** (default): The system checks resources, such as forwarding associations or route learning. If there are such resources, the VBR connection is not deleted and an error code is returned.
    
-   **true**: When the VBR connection is deleted, all associated resources are also deleted.
    

false

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned result.

RequestId

string

The request ID.

3EDA94DE-0AE5-41FC-A91E-7170E408E0FD

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3EDA94DE-0AE5-41FC-A91E-7170E408E0FD"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.RouteTableAssociationExist

Operation failed because TransitRouterRouteTable exists

The error message returned because you cannot perform the operation when the connection is associated with a route table.

400

OperationFailed.RouteEntryExist

Operation failed because the TransitRouterAttachment exists in RouteTable.

400

OperationFailed.RouteTablePropagationExist

The specified TransitRouterAttachment has configured RouteTablePropagation. Please remove the configuration first.

The error message returned because you cannot perform the operation when a route learning correlation is configured for the network instance connection. Disassociate from the route learning correlation and try again.

400

OperationFailed.VbrAttachedVbrHa

The operation is failed because of VbrAttachedVbrHa.

400

OperationFailed.FlowLogExistOrNisOpened

Operation failed because FlowLog exists or Nis opened.

The error message returned because this operation is not supported when a flow log exists or the NIS service is activated.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

InstanceReferenced.VpcRouteEntry

The specified attachment is referenced by vpc route entry.

The error message returned because the next hop of a VPC route is the specified attachment.

400

OperationFailed.NotSupportForceDelete

Not support force delete attachment.

The error message returned because the specified resource cannot be forcefully deleted.

400

InvalidTransitRouterAttachmentId.NotFound

The TransitRouterAttachmentId is not found.

The error message returned because the specified transit router attachment ID (TransitRouterAttachmentId) does not exist.

400

OperationFailed.PrefixListExist

Operation failed because PrefixList exists.

The error message returned because a prefix list exists.

400

OperationFailed.VbrWithAllowPrefixes

Operation failed because allow prefixes referenced by vbr exists.

A route prefix on the VBR is assigned the Allow action, which causes the operation to fail.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

InstanceReferenced.VbrRouteEntry

Operation is failed because there is at least one route entry which next hop is the specified attachment.

Operation is failed because there is at least one route entry which next hop is the specified attachment.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterVbrAttachment#workbench-doc-change-demo) for a complete list.
