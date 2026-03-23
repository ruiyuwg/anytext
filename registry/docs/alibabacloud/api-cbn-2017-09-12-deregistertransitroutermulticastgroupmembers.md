If a multicast member no longer needs to receive multicast traffic, you can call the DeregisterTransitRouterMulticastGroupMembers operation to delete the member from the multicast group.

## Operation description

`DeregisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the multicast member is not deleted immediately. The deletion task runs in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast member.

-   If a multicast member is in the **Deregistering** state, it is being deleted. In this state, you can only query the member. You cannot perform other operations.
    
-   If the `ListTransitRouterMulticastGroups` operation does not find the multicast member in the multicast domain, the member is deleted.
    

Ensure that you enter correct parameter values when you call the DeregisterTransitRouterMulticastGroupMembers operation. If you enter an incorrect parameter, the operation still returns a RequestId but does not delete the multicast member.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeregisterTransitRouterMulticastGroupMembers)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeregisterTransitRouterMulticastGroupMembers)

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

cen:DeregisterTransitRouterMulticastGroupMembers

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

Generate a unique value from your client for each request. The ClientToken parameter supports only ASCII characters.

123e4567-e89b-12d3-a456-426655440000

TransitRouterMulticastDomainId

string

Yes

The ID of the multicast domain to which the multicast member belongs.

tr-mcast-domain-91wpg6wbhchjeq\*\*\*\*

GroupIpAddress

string

Yes

The IP address of the multicast group to which the multicast member belongs.

239.XX.XX.2

NetworkInterfaceIds

array

No

A list of Elastic Network Interface (ENI) IDs.

string

No

The ENI ID.

You can delete multiple ENIs at a time. Make sure that the total number of specified ENIs and inter-region multicast domains does not exceed 5.

eni-p0weuda3lszwzjly\*\*\*\*

PeerTransitRouterMulticastDomains

array

No

A list of inter-region multicast domain IDs.

string

No

The ID of an inter-region multicast domain.

You can delete multiple inter-region multicast domains at a time. Make sure that the total number of specified ENIs and inter-region multicast domains does not exceed 5.

tr-mcast-domain-5mjb5gjb6dgu98\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: Sends a check request without deleting the multicast member. The system checks required parameters, the request format, and service limits. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
    
-   **false** (default): Sends a normal request. After the request passes the check, the multicast member is deleted.
    

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

61D0A553-5E4E-53B5-9DA3-01CBA076A286

## Examples

Success response

`JSON` format

```
{
  "RequestId": "61D0A553-5E4E-53B5-9DA3-01CBA076A286"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTransitRouterMulticastDomainId.NotFound

The specified TransitRouterMulticastDomainId is not found.

The error message returned because the specified ID of the multicast domain (TransitRouterMulticastDomainId) on the transit router does not exist.

400

InvalidOperation.MulticastDomainStatus

Operation is invalid, due to multicast domain not Active.

The error message returned because the status of the specified multicast domain does not support this operation.

400

IncorrectStatus.MulticastGroup

The status of MulticastGroup is incorrect.

The error message returned because the status of the specified multicast group does not support this operation. Try again later.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

OperationUnsupported.NotAllowedDeleteIgmpv2Member

You cannot delete a multicast source or multicast member of the igmpv2 type.

You cannot delete a multicast source or member of the igmpv2 type.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeregisterTransitRouterMulticastGroupMembers#workbench-doc-change-demo) for a complete list.
