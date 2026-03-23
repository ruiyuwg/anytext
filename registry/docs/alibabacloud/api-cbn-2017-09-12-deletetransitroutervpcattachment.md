Deletes a virtual private cloud (VPC) connection from an Enterprise Edition transit router.

## Operation description

**DeleteTransitRouterVpcAttachment** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTransitRouterVpcAttachments** operation to query the status of a VPC connection.

-   If a VPC connection is in the **Detaching** state, the VPC connection is being deleted. You can query the VPC connection but cannot perform other operations.
    
-   If a VPC connection cannot be found, it is deleted.
    

## Prerequisites

Before you delete a VPC connection, make sure that the following requirements are met:

-   No associated forwarding correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete an associated forwarding correlation, see [DissociateTransitRouterAttachmentFromRouteTable](/help/en/cen/developer-reference/api-dissociatetransitrouterattachmentfromroutetable).
    
-   No route learning correlation is established between the VPC connection and the route tables of the Enterprise Edition transit router. For more information about how to delete a route learning correlation, see [DisableTransitRouterRouteTablePropagation](/help/en/cen/developer-reference/api-disabletransitrouterroutetablepropagation).
    
-   The route table of the VPC does not contain routes that point to the VPC connection. For more information about how to delete routes from a VPC route table, see [DeleteRouteEntry](/help/en/vpc/api-deleterouteentry).
    
-   The route tables of the Enterprise Edition transit router do not contain a custom route entry whose next hop is the network instance connection. For more information about how to delete custom routes from the route tables of an Enterprise Edition transit router, see [DeleteTransitRouterRouteEntry](/help/en/cen/developer-reference/api-deletetransitrouterrouteentry).
    
-   The route tables of the Enterprise Edition transit router do not contain a route that is generated from a prefix list and the next hop is the VPC connection. You can delete such routes by disassociating the route table from the prefix list. For more information, see [DeleteTransitRouterPrefixListAssociation](/help/en/cen/developer-reference/api-deletetransitrouterprefixlistassociation).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterVpcAttachment)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterVpcAttachment)

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

cen:DeleteTransitRouterVpcAttachment

delete

\*TransitRouterVpcAttachment

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

You can use the client to generate the token, but you must make sure that the token is unique among all requests. The token can contain only ASCII characters.

**Note**

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

TransitRouterAttachmentId

string

Yes

The ID of the VPC connection.

tr-attach-ia340z7xis7t5s\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Default values:

-   **false** (default): performs a dry run and sends the request.
    
-   **true**: performs a dry run. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, the system returns the ID of the request.
    

false

Force

boolean

No

Specifies whether to forcefully delete the VPC connection. Valid values:

-   **false** (default): checks resources such as associated forwarding correlations and route learning policies that are related to the VPC connection before it is deleted. If such a resource exists, the VPC connection is not deleted and an error message is returned.
    
-   **true**: deletes the VPC connection and all resources that are related to the VPC connection.
    

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

The ID of the request.

7E61D334-4025-41EF-9145-FC327B35301D

## Examples

Success response

`JSON` format

```
{
  "RequestId": "7E61D334-4025-41EF-9145-FC327B35301D"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.AttachmentReferencedVpcRouteEntryExisted

Operation is failed because there is at least one route entry which next hop is the specified attachment.

The error message returned because this operation is not supported when a route points to an attachment.

400

OperationFailed.RouteTablePropagationExist

The specified TransitRouterAttachment has configured RouteTablePropagation. Please remove the configuration first.

The error message returned because you cannot perform the operation when a route learning correlation is configured for the network instance connection. Disassociate from the route learning correlation and try again.

400

OperationFailed.MulticastDomainAssociationExist

The specified TransitRouterAttachment has configured MulticastDomainAssociation. Please remove the configuration first.

The error message returned because the specified transit router attachment (TransitRouterAttachment) is added to a multicast domain. Remove the attachment from the multicast domain and try again.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

OperationFailed.PrefixListExist

Operation failed because PrefixList exists.

The error message returned because a prefix list exists.

400

InvalidTransitRouterAttachmentId.NotFound

TransitRouterAttachmentId is not found.

The error message returned because the ID of the network instance does not exist.

400

IncorrectStatus.VpcRouteEntry

The resource is not in a valid state for the attachment operation.

The error message returned because the status of the VPC route entry does not support this operation. Try again later.

400

IncorrectStatus.VpcSwitch

The resource is not in a valid state for the attachment operation.

The error message returned because the status of the vSwitch does not support this operation. Try again later.

400

IncorrectStatus.Vpc

The resource is not in a valid state for the operation.

The error message returned because the status of the VPC does not support this operation. Try again later.

400

OperationFailed.NotSupportForceDelete

Not support force delete attachment.

The error message returned because the specified resource cannot be forcefully deleted.

400

IncorrectStatus.VpcRouteTable

The VPC route table is not in a desired state.

The error message returned because the VPC route table is in an unstable state. Try again later.

400

OperationFailed.RouteEntryExist

Failed to delete the instance because a route table entry points to the instance.

Failed to delete the instance because one or more routes point to the instance. Delete the routes and try again.

400

OperationFailed.RouteTableAssociationExist

Operation failed because there is associated routing table.

The network connection deletion failed because there is an associated routing table.

400

IncorrectStatus.VpcResource

The resource is not in a valid state for the attachment operation.

The error message returned because this operation is not supported when the specified VPC is in an unstable state. Wait until all operations related to the VPC are completed.

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

400

OperationNotPermitted.AttachmentManagedByCloudService

The specified Attachment managed by cloud service can only be deleted through cloud service.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterVpcAttachment#workbench-doc-change-demo) for a complete list.
