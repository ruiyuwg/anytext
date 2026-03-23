You can call the DeleteTransitRouterMulticastDomain operation to delete a multicast domain.

## Operation description

Before you delete a multicast domain, ensure that the following requirements are met:

-   The multicast domain is not associated with any vSwitch. For more information, see [DisassociateTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-disassociatetransitroutermulticastdomain).
    
-   No multicast source or member exists in the multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupSources](/help/en/cen/developer-reference/api-deregistertransitroutermulticastgroupsources) and [DeregisterTransitRouterMulticastGroupMembers](/help/en/cen/developer-reference/api-deregistertransitroutermulticastgroupmembers).
    
-   The multicast domain is not associated with another multicast domain as a member. To disassociate the domains, delete the member from the other multicast domain. For more information, see [DeregisterTransitRouterMulticastGroupMembers](/help/en/cen/developer-reference/api-deregistertransitroutermulticastgroupmembers).
    
-   Ensure that you enter the correct parameter values when you call the operation. If you enter an incorrect parameter value, a request ID is returned, but the multicast domain is not deleted.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterMulticastDomain)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteTransitRouterMulticastDomain)

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

cen:DeleteTransitRouterMulticastDomain

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

A client token that is used to ensure the idempotence of the request.

Generate a token on your client to make sure that it is unique among different requests. The token can contain only ASCII characters.

123e4567-e89b-12d3-a456-4266\*\*\*\*

TransitRouterMulticastDomainId

string

Yes

The ID of the multicast domain.

tr-mcast-domain-40cwj0rgzgdtam\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a normal request. If the request passes the check, the multicast domain is deleted.
    

false

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

40194E53-2484-5831-BB53-E11D123C1A32

## Examples

Success response

`JSON` format

```
{
  "RequestId": "40194E53-2484-5831-BB53-E11D123C1A32"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IncorrectStatus.MulticastDomain

The status of MulticastDomain is incorrect.

The error message returned because the status of the specified multicast domain does not support this operation. Try again later.

400

InstanceNotExist

The instance is not exist.

The error message returned because the specified instance does not exist.

400

IncorrectStatus.Cen

The status of Cen is incorrect.

The error message returned because the status of the specified CEN instance does not support this operation. Try again later.

400

IncorrectStatus.TransitRouter

The status of TransitRouter is incorrect.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

InvalidOperation.MulticastDomainAssociationExist

Operation is invalid because multicast domain associations exist.

The error message returned because this operation is not supported when the multicast domain is associated with a resource.

400

InvalidOperation.MulticastGroupExist

Operation is invalid because multicast groups exist.

The error message returned because this operation is not supported when a multicast domain group exists.

400

InvalidOperation.MulticastDomainInGroup

Operation is invalid because multicast domain has registered as multicast group member.

The error message returned because the specified multicast domain is added to a multicast group as a multicast member.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteTransitRouterMulticastDomain#workbench-doc-change-demo) for a complete list.
