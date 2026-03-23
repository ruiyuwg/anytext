Deletes a transit router.

## Operation description

**DeleteTransitRouter** is an asynchronous operation. After you send a request, the **request ID** is returned but the operation is still being performed in the system background. You can call **ListTransitRouters** to query the status of a transit router.

-   If a transit router is in the **Deleting** state, the transit router is being deleted. In this case, you can query the transit router but cannot perform other operations.
    
-   If a transit router cannot be found, the transit router is deleted.
    

#### Prerequisites

Before you delete a transit router, make sure that the following prerequisites are met:

-   No network instance connections are created on the transit router.
    
    -   For more information about how to delete a virtual private cloud (VPC) connection, see [DeleteTransitRouterVpcAttachment](/help/en/cen/developer-reference/api-deletetransitroutervpcattachment).
        
    -   For more information about how to delete a virtual border router (VBR) connection, see [DeleteTransitRouterVbrAttachment](/help/en/cen/developer-reference/api-deletetransitroutervbrattachment).
        
    -   For more information about how to delete a Cloud Connect Network (CCN) connection, see [DetachCenChildInstance](/help/en/cen/developer-reference/api-9250e2).
        
    -   For more information about how to delete a VPN connection, see [DeleteTransitRouterVpnAttachment](/help/en/cen/developer-reference/api-deletetransitroutervpnattachment).
        
    -   For more information about how to delete an inter-region connection, see [DeleteTransitRouterPeerAttachment](/help/en/cen/developer-reference/api-deletetransitrouterpeerattachment).
        
-   No custom route tables are created on the transit router. For more information about how to delete a custom route table, see [DeleteTransitRouterRouteTable](/help/en/cen/developer-reference/api-deletetransitrouterroutetable).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouter)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouter)

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

cen:DeleteTransitRouter

delete

\*TransitRouter

`acs:cen:*:{#accountId}:centransitrouter/{#centransitrouterId}`

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

You can use the client to generate the value, but you must make sure that it is unique among different requests. ClientToken can contain only ASCII characters.

**Note**

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** may be different for each API request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

DryRun

boolean

No

Specifies whether only to precheck the request. Check items include permissions and the status of the transit router. Valid values:

-   **false** (default): sends the request. If the request passes the precheck, the transit router is deleted.
    
-   **true**: prechecks the request but does not delete the transit router. If you use this value, the system checks the required parameters and the request syntax. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
    

false

TransitRouterId

string

Yes

The ID of the transit router.

tr-uf654ttymmljlvh2x\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

6DE3EE92-39C8-4BBD-A3AD-F568D74741BB

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6DE3EE92-39C8-4BBD-A3AD-F568D74741BB"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.DeleteTransitRouter

Operation failed because TransitRouterRouteTable or TransitRouterRouteEntry or BandwidthTransitRegion exists.

The error message returned because this operation is not supported when a custom route or a custom route table exists, or bandwidth multiplexing is enabled. Delete the custom route table and route, disable bandwidth multiplexing, and then try again.

400

IncorrectStatus.TransitRouterInstance

The status of TransitRouter is incorrect.

The error message returned because the transit router is in an invalid state.

400

OperationFailed.CCNAttached

Can not delete transit router because CCN still attached.

The error message returned because the transit router cannot be deleted when it is connected to a CCN instance.

400

OperationFailed.BandwidthLimitExist

Operation is invalid because a bandwidth limit exist.

Please delete all cross region bandwidth limits associated with current TR and try again.

400

IncorrectStatus.CenInstance

The status of CenInstance is incorrect.

The error message returned because the status of the CEN instance to which the transit router is connected does not support this operation. Wait until the CEN instance is in a stable state.

400

OperationFailed.TrafficMarkingPolicyExist

Operation is invalid because traffic marking policy exists.

The error message returned because the transit router is associated with a traffic marking policy. Disassociate the transit router from the traffic marking policy before you delete the transit router.

400

OperationFailed.MulticastDomainExist

Operation is invalid because multicast domain exists.

The error message returned because the transit router is associated with a multicast domain. Disassociate the transit router from the multicast domain before you delete the transit router.

400

OperationFailed.PrefixListExist

Operation is invalid because prefix list exists.

The error message returned because this operation is not supported when a prefix list exists. Delete the prefix list and try again.

400

OperationFailed.TrafficQosPolicyExist

Operation is invalid because traffic qos policy exists.

The error message returned because this operation is not supported when a QoS policy exists. Delete the QoS policy and try again.

400

OperationFailed.CloudRouteExist

Operation is invalid because cloud route exists.

400

OperationFailed.FlowLogExistOrNisOpened

Operation failed because FlowLog exists or Nis opened.

The error message returned because this operation is not supported when a flow log exists or the NIS service is activated.

400

OperationFailed.AggregationRouteExist

Operation failed because TransitRouterRouteAggregation exists.

Operation failed because TransitRouterRouteAggregation exists.

400

InvalidOperation.BondVbrExist

The operation failed due to BondVbr exists.

The operation failed because the BondVbr exists.

400

InvalidTransitRouterInstance.NotFound

The Transit Router instance is not found.

The Transit Router instance is not found.

400

OperationFailed.FlowLogExist

Flow log configurations exist. Delete the flow log configurations and retry the operation.

Flow log configurations exist. Delete the flow log configurations and retry the operation.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

InvalidOperation.RelatedEcrExists

Operation is invalid due to related ECR exists.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouter#workbench-doc-change-demo) for a complete list.
