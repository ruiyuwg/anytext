Call the DeleteTransitRouterPeerAttachment operation to delete an inter-region connection from an Enterprise Edition transit router.

## Operation description

The **DeleteTransitRouterPeerAttachment** operation is asynchronous. After you send a request, the system returns a **RequestId**, but the inter-region connection is not immediately deleted. The system deletes the connection in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of the inter-region connection.

-   If an inter-region connection is in the **Detaching** state, it is being deleted. In this state, you can only query the connection and cannot perform other operations.
    
-   If the specified inter-region connection is not found, the connection has been deleted.
    

Make sure that you specify valid parameter values when you call the **DeleteTransitRouterPeerAttachment** operation. If you specify an invalid parameter value, the system returns a **RequestId** but does not delete the inter-region connection.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterPeerAttachment)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterPeerAttachment)

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

cen:DeleteTransitRouterPeerAttachment

delete

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

ClientToken

string

No

A client token that is used to ensure the idempotence of the request.

Generate a token from your client to ensure that the token is unique among different requests. The ClientToken parameter can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each request is different.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

TransitRouterAttachmentId

string

Yes

The ID of the inter-region connection.

tr-attach-gyjhtx9sjsxhm6\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. A dry run checks permissions and the status of the instance. Valid values:

-   **false** (default): sends the request. If the request passes the check, the inter-region connection is deleted.
    
-   **true**: sends a check request. The system checks the required parameters and the request format. If the request fails the check, an error is returned. If the request passes the check, the corresponding request ID is returned. The inter-region connection is not deleted.
    

false

Force

boolean

No

Specifies whether to forcefully delete the inter-region connection. Valid values:

-   **false** (default): checks for resource dependencies, such as associated forwarding and route learning, before deleting the inter-region connection. If dependencies exist, the deletion is not allowed and an error is returned.
    
-   **true**: deletes all related dependencies when deleting the inter-region connection.
    

false

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

A01FEDD7-7D69-4EB3-996D-CF79F6F885CA

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A01FEDD7-7D69-4EB3-996D-CF79F6F885CA"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.RouteTablePropagationExist

Operation failed because You are not allowed to delete TransitAttachment with TransitRouter RouteTable Associated.

The error message returned because the transit route attachment (TransitAttachment) is associated with a route table. Disassociate the attachment from the route table and try again.

400

OperationFailed.RouteEntryExist

Operation failed because the TransitRouterAttachment exists in RouteTable.

400

OperationFailed.RouteTableAssociationExist

Operation failed because TransitRouterRouteTable exists

The error message returned because you cannot perform the operation when the connection is associated with a route table.

400

OperationFailed.TrafficQosExist

Operation failed because TrafficQos exists

The error message returned because a QoS policy exists. Delete the QoS policy and try again.

400

InvalidValue.PrefixlistCidr

Invalid cidr exist in the specified prefixlist.

The error message returned because the specified prefix list contains an invalid CIDR block.

400

OperationFailed.FlowLogExistOrNisOpened

Operation failed because FlowLog exists or Nis opened.

The error message returned because this operation is not supported when a flow log exists or the NIS service is activated.

400

OperationFailed.NotSupportForceDelete

Not support force delete attachment.

The error message returned because the specified resource cannot be forcefully deleted.

400

InvalidTransitRouterAttachmentId.NotFound

TransitRouterAttachmentId is not found.

The error message returned because the ID of the network instance does not exist.

400

OperationUnsupported.TransitRouterType

The operation is not supported because of the wrong transitRouter type.

The error message returned because this operation is not supported by the specified type of transit router.

400

OperationFailed.MulticastGroupExist

Operation is failed because attachment exists in multicast groups.

The error message returned because the specified attachment is in a multicast group. Remove the attachment from the multicast group and try again.

400

OperationUnsupported.TransitRouterAttachment

The specified TransitRouterAttachment has configured TransitRegion. Please remove the configuration first.

The error message returned because bandwidth multiplexing is enabled. Disable bandwidth multiplexing and try again.

400

OperationFailed.PrefixListExist

Operation failed because PrefixList exists.

The error message returned because a prefix list exists.

400

OperationFailed.InterRegionCloudRouteEntryExist

Operation failed because inter region cloud route associated with specified attachment exist.

Inter region cloud route associated with specified attachment exist.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterPeerAttachment#workbench-doc-change-demo) for a complete list.
