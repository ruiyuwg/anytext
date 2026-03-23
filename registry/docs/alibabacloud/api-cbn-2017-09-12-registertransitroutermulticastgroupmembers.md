Creates or adds a multicast member.

## Operation description

Enterprise Edition transit routers support only elastic network interfaces (ENIs) as multicast members. You can call the `RegisterTransitRouterMulticastGroupMembers` operation to specify an ENI in the current region or a different region as a multicast member.

-   If you specify a value for the **NetworkInterfaceIds** parameter, an ENI in the current region is to be specified as a multicast member. Make sure that the ENI and vSwitch are associated with the multicast group. For more information, see [AssociateTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-associatetransitroutermulticastdomain).
    
-   If you specify a value for the **PeerTransitRouterMulticastDomains**, a multicast member in a multicast group that belongs to another region but has the same IP address as the current multicast group is to be specified as a multicast member for the current multicast group. Make sure that an inter-region connection is established between the regions. For more information, see [CreateTransitRouterPeerAttachment](/help/en/cen/developer-reference/api-createtransitrouterpeerattachment).
    
    For example, you created Multicast Group 1 in Multicast Domain 1, which is in the China (Hangzhou) region. You created Multicast Group 2 in Multicast Domain 2, which is in the China (Shanghai) region. Multicast Group 1 and Multicast Group 2 use the same multicast IP address, and Multicast Member 2 is in Multicast Group 2 in the China (Shanghai) region. If you call the `RegisterTransitRouterMulticastGroupMembers` operation to add multicast members to Multicast Group 1 in the China (Hangzhou) region and set **PeerTransitRouterMulticastDomains** to the ID of Multicast Group 2, which is in the China (Shanghai) region, Multicast Member 2, which is in Multicast Domain 2 in the China (Shanghai) region is added to Multicast Group 1 in the China (Hangzhou) region.
    
-   `RegisterTransitRouterMulticastGroupMembers` is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call the `ListTransitRouterMulticastGroups` operation to query the status of a multicast member.
    
    -   If the multicast member is in the **Registering**, the multicast member is being created. In this case, you can query the multicast member but cannot perform other operations on the multicast member.
        
    -   If the multicast member is in the **Registered** state, the multicast member is created.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/RegisterTransitRouterMulticastGroupMembers)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/RegisterTransitRouterMulticastGroupMembers)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact your account manager.

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

If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.

123e4567-e89b-12d3-a456-426655440000

TransitRouterMulticastDomainId

string

Yes

The ID of the multicast domain to which the multicast members belong.

tr-mcast-domain-91wpg6wbhchjeq\*\*\*\*

GroupIpAddress

string

Yes

The IP address of the multicast group to which the multicast members belong. Valid values: **224.0.0.1** to **239.255.255.254**.

If the multicast group does not exist in the specified multicast domain, the system automatically creates the multicast group in the multicast domain.

239.XX.XX.2

NetworkInterfaceIds

array

No

The IDs of the ENIs.

string

No

The ID of the ENI

You can specify multiple ENIs in each call. Make sure that the sum of the number of ENIs and the number of inter-region multicast domains is not larger than five.

eni-p0weuda3lszwzjly\*\*\*\*

PeerTransitRouterMulticastDomains

array

No

The IDs of inter-region multicast domains.

string

No

The ID of the inter-region multicast domain.

You can specify multiple inter-region multicast domains in each call. Make sure that the sum of the number of ENIs and the number of inter-region multicast domains is not larger than five.

tr-mcast-domain-5mjb5gjb6dgu98\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and performs the request.
    

false

VpcId

string

No

The ID of the VPC to which the ENI belongs.

-   If the ENI belongs to the current Alibaba Cloud account, ignore this parameter.
    
-   If the ENI belongs to a different Alibaba Cloud account, you must set this parameter.
    

vpc-wz9fusm6zq8uy7cfa\*\*\*\*

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

EB985B7E-2CF8-5EC9-A7DB-F7C82ABD3ACE

## Examples

Success response

`JSON` format

```
{
  "RequestId": "EB985B7E-2CF8-5EC9-A7DB-F7C82ABD3ACE"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

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

InstanceNotExist

The instance is not exist.

The error message returned because the specified instance does not exist.

400

InvalidOperation.PeerMulticastDomainRegion

Operation is invalid because to peer multicast domain in the same region with multicast domain.

400

InvalidOperation.MulticastDomainStatus

Operation is invalid, due to multicast domain not Active.

The error message returned because the status of the specified multicast domain does not support this operation.

400

InvalidOperation.BandwidthLimitNotExist

Operation is invalid because a bandwidth limit not exist.

The error message returned because the specified bandwidth cap of the bandwidth plan does not exist.

400

AttachmentNotFound

"The attachment does not exist.

400

IncorrectStatus.AttachmentId

The status of AttachmentId is incorrect.

The error message returned because the status of the attachment does not support this operation. Try again later.

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

InvalidOperation.MulticastDomainAssociationNotExist

Operation is invalid because multicast association domain association not exist.

The error message returned because this operation is not supported when the specified multicast domain is not associated with the specified resource.

400

InvalidOperation.MulticastDomainAssociationStatus

Operation is invalid, due to multicast domain association not Active.

The error message returned because the status of the specified multicast domain does not support this operation. Try again later.

400

InvalidPeerTrMulticastDomainId.NotFound

The specified PeerTrMulticastDomainId is not found.

The error message returned because the specified multicast domain on the peer transit does not exist.

400

IncorrectStatus.PeerTrMulticastDomainId

The status of PeerTrMulticastDomainId is incorrect.

The error message returned because the specified multicast domain on the peer transit router (PeerTrMulticastDomain) does not support this operation. Try again later.

400

IllegalParam.PeerTrMulticastDomainId

The specified PeerTrMulticastDomainId is illegal.

The error message returned because the PeerTrMulticastDomainId parameter is set to an invalid value.

400

InvalidOperation

Operation is invalid.

The error message returned because the operation is invalid.

400

QuotaFull.MulticastGroupPerDomain

The number of multicast group has exceed the maximum value that can be created.

The error message returned because the number of multicast groups in the multicast domain has reached the upper limit.

400

QuotaFull.MulticastMemberPerGroup

The number of multicast group member has exceed the maximum value that can be created.

The error message returned because the number of multicast members in the multicast group has reached the upper limit.

400

QuotaFull.MulticastPeerMemberPerGroup

The number of multicast group member peer domain has exceed the maximum value that can be created.

The error message returned because the number of multicast members from another region in the multicast group has reached the upper limit.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

InvalidConnectPeerIds.NotFound

The Connect Peer Ids are invalid.

The Connect Peer Ids are invalid.

400

InvalidVpcId.NotFound

The specified VpcId is not found.

The error message returned because the specified VPC ID (VpcId) is invalid.

400

OperationUnsupported.ExistsIgmpv2MemberOnEni

An igmpv2 multicast source or multicast member already exists on the ENI.

An igmpv2 multicast source or multicast member already exists on the ENI.

400

InvalidVpcId.NotValid

The specified Vpc is invalid.

The specified vpcId is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/RegisterTransitRouterMulticastGroupMembers#workbench-doc-change-demo) for a complete list.
