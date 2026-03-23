Use the RegisterTransitRouterMulticastGroupSources operation to create a multicast source. A multicast source enables one-to-many communication.

## Operation description

-   You can specify only an Elastic Network Interface (ENI) as a multicast source.
    
-   `RegisterTransitRouterMulticastGroupSources` is an asynchronous operation. After you send a request, the system returns a **RequestId**. The multicast source is created in the background and is not immediately available. You can call the `ListTransitRouterMulticastGroups` operation to query the status of the multicast source.
    
    -   If a multicast source is in the **Registering** status, the multicast source is being created. In this status, you can only query the multicast source.
        
    -   If a multicast source is in the **Registered** status, the multicast source is created.
        

### Prerequisites

Before you call `RegisterTransitRouterMulticastGroupSources`, ensure that the vSwitch to which the ENI belongs is associated with the multicast domain. For more information, see [AssociateTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-associatetransitroutermulticastdomain).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/RegisterTransitRouterMulticastGroupSources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/RegisterTransitRouterMulticastGroupSources)

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

cen:RegisterTransitRouterMulticastGroupSources

create

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

A client token to ensure the idempotence of the request.

Generate a unique value from your client. The client token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system uses the request ID as the client token. The request ID is different for each request.

123e4567-e89b-12d3-a456-4266\*\*\*\*

TransitRouterMulticastDomainId

string

Yes

The ID of the multicast domain to which the multicast source belongs.

tr-mcast-domain-5mjb5gjb6dgu98\*\*\*\*

GroupIpAddress

string

Yes

The IP address of the multicast group to which the multicast source belongs. Valid values range from **224.0.1.0** to **239.255.255.254**.

**Important**

The IP addresses from 224.0.0.0 to 224.0.0.127 are system reserved IP addresses. They cannot be used as multicast group IP addresses.

If the specified multicast group does not exist in the multicast domain, the system automatically creates the multicast group.

239.XX.XX.2

NetworkInterfaceIds

array

No

A list of ENI IDs.

string

No

The ID of the ENI, which serves as the multicast source.

You can create up to five multicast sources for a multicast group at a time.

**Note**

This parameter is required.

eni-p0w92o2wupc3c05t\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): sends the request. If the request passes the check, a multicast source is created.
    

false

VpcId

string

No

The ID of the VPC to which the ENI belongs.

-   If the ENI belongs to your Alibaba Cloud account, this parameter is optional.
    
-   If the ENI belongs to a different Alibaba Cloud account, this parameter is required.
    

vpc-wz9fusm6zq8uy7cfa\*\*\*\*

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

9C5D5D70-0AFF-5E5C-8D8A-E92C90C8FB08

## Examples

Success response

`JSON` format

```
{
  "RequestId": "9C5D5D70-0AFF-5E5C-8D8A-E92C90C8FB08"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidOperation.PeerMulticastDomainSource

Operation is invalid because peer multicast domain can not be group source.

The error message returned because you cannot specify a multicast domain in another region as the multicast source.

400

IllegalParam.GroupIpAddress

The specified GroupIpAddress is illegal.

The error message returned because the GroupIpAddress parameter is set to an invalid value.

400

InvalidMulticastDomainId.NotFound

The specified AttachmentId is not found.

The error message returned because the specified multicast domain does not exist.

400

IncorrectStatus.MulticastDomainId

The status of MulticastDomainId is incorrect.

The error message returned because the status of the specified multicast domain does not support this operation. Try again later.

400

IncorrectStatus.Cen

The status of Cen is incorrect.

The error message returned because the status of the specified CEN instance does not support this operation. Try again later.

400

InstanceExist

The instance already exists.

The error message returned because the specified instance already exists.

400

InvalidOperation.NetworkInterfaceNotExist

Operation is invalid bacause network interface not exist.

The error message returned because the network instance does not exist.

400

InvalidOperation.NTRNetworkInterfaceNotSupport

Operation is invalid, due to ntr eni not support.

The error message returned because the ENI of the transit router cannot be added to the multicast group.

400

InstanceNotExist

The instance is not exist.

The error message returned because the specified instance does not exist.

400

InvalidOperation.MulticastDomainAssociationNotExist

Operation is invalid because multicast association domain association not exist.

The error message returned because this operation is not supported when the specified multicast domain is not associated with the specified resource.

400

InvalidOperation.MulticastDomainAssociationStatus

Operation is invalid, due to multicast domain association not Active.

The error message returned because the status of the specified multicast domain does not support this operation. Try again later.

400

QuotaFull.MulticastGroupPerDomain

The number of multicast group has exceed the maximum value that can be created.

The error message returned because the number of multicast groups in the multicast domain has reached the upper limit.

400

QuotaFull.MulticastSourcePerGroup

The number of multicast group source has exceed the maximum value that can be created.

The error message returned because the number of multicast sources in the multicast group has reached the upper limit.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

IncorrectStatus.ConnectPeerIds

Connect Peer statuses are incorrect.

Connect Peer statuses are incorrect.

400

InvalidConnectPeerIds.NotFound

The Connect Peer Ids are invalid.

The Connect Peer Ids are invalid.

400

OperationUnsupported.ExistsIgmpv2MemberOnEni

An igmpv2 multicast source or multicast member already exists on the ENI.

An igmpv2 multicast source or multicast member already exists on the ENI.

400

QuotaExceeded.SourceAndMemberPerTransitRouter

The number of multicast group members and sources has exceed the maximum value that can be created.

The number of multicast group members and sources has exceed the maximum value that can be created.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/RegisterTransitRouterMulticastGroupSources#workbench-doc-change-demo) for a complete list.
