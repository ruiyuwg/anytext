Call the DisassociateTransitRouterMulticastDomain operation to dissociate a vSwitch from a multicast domain.

## Operation description

-   Before you dissociate a vSwitch from a multicast domain, make sure that no multicast source or member exists on the vSwitch. For more information about how to delete a multicast source and a multicast member, see [DeregisterTransitRouterMulticastGroupSources](/help/en/cen/developer-reference/api-cbn-2017-09-12-deregistertransitroutermulticastgroupsources) and [DeregisterTransitRouterMulticastGroupMembers](/help/en/cen/developer-reference/api-cbn-2017-09-12-deregistertransitroutermulticastgroupmembers).
    
-   If you provide invalid parameters, the system returns a request ID but does not dissociate the vSwitch from the multicast domain.
    
-   **DisassociateTransitRouterMulticastDomain** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the vSwitch is not immediately dissociated from the multicast domain. The system runs the dissociation task in the background. You can call the **ListTransitRouterMulticastDomainAssociations** operation to query the association status of the vSwitch and the multicast domain.
    
    -   If the association status is **Dissociating**, the vSwitch is being dissociated from the multicast domain. In this state, you can only query the vSwitch. You cannot perform other operations.
        
    -   If the vSwitch cannot be found in the multicast domain, the vSwitch has been successfully dissociated from the multicast domain.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DisassociateTransitRouterMulticastDomain)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DisassociateTransitRouterMulticastDomain)

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

cen:DisassociateTransitRouterMulticastDomain

delete

\*TransitRouterMulticastDomain

`acs:cen:*:{#accountId}:centransitroutermulticast/{#centransitroutermulticastId}`

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

Generate a token from your client to make sure that the token is unique among different requests. The token can contain only ASCII characters.

123e4567-e89b-12d3-a456-426655440000

TransitRouterMulticastDomainId

string

Yes

The ID of the multicast domain.

tr-mcast-domain-91wpg6wbhchjeq\*\*\*\*

TransitRouterAttachmentId

string

Yes

The ID of the VPC connection.

The VPC connection is created after the Virtual Private Cloud (VPC) to which the vSwitch belongs is connected to the transit router.

tr-attach-g3kz2k3u76amsk\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a normal request. If the request passes the check, the vSwitch is dissociated from the multicast domain.
    

false

VSwitchIds

array

No

The list of vSwitch IDs.

string

Yes

The ID of the vSwitch.

You can dissociate a multicast domain from up to 5 vSwitches at a time.

vsw-p0w9s2ig1jnwgrbzl\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The request ID.

6F6B3FF0-45D1-5416-B189-C45A42A0222B

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6F6B3FF0-45D1-5416-B189-C45A42A0222B"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidMulticastDomainId.NotFound

The specified MulticastDomainId is not found.

The error message returned because the specified multicast domain does not exist.

400

IncorrectStatus.MulticastDomain

The status of MulticastDomain is incorrect.

The error message returned because the status of the specified multicast domain does not support this operation. Try again later.

400

InstanceStatusNotSupport

The status of instance not support the operation.

The error message returned because the operation is not supported while the instance is in the current state.

400

InvalidAttachmentId.NotFound

The specified AttachmentId is not found.

400

IncorrectStatus.Attachment

The status of Attachment is incorrect.

The error message returned because the status of the attachment does not support this operation. Try again later.

400

IllegalParam.AttachmentId

The specified AttachmentId is illegal.

The error message returned because the specified attachment ID is invalid.

400

InvalidOperation.MulticastGroupExist

Operation is invalid because multicast groups exist.

The error message returned because this operation is not supported when a multicast domain group exists.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DisassociateTransitRouterMulticastDomain#workbench-doc-change-demo) for a complete list.
