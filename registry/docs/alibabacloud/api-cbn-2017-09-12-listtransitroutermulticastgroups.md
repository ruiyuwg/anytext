Queries details about multicast members and sources in a multicast domain.

## Operation description

You can call the `ListTransitRouterMulticastGroups` operation to query information about multicast members and sources. These are collectively referred to as multicast resources.

-   If you specify the **GroupIpAddress** parameter, you can query information about the multicast resources in a specific multicast group.
    
-   If you specify the **VSwitchIds** parameter, you can query information about the multicast resources on specific vSwitches.
    
-   If you specify the **PeerTransitRouterMulticastDomains** parameter, you can query information about cross-region multicast resources.
    
-   If you specify the **ResourceType** parameter, you can query information about multicast resources of a specific resource type.
    
-   If you specify the **ResourceId** parameter, you can query information about the multicast resources on a specific resource.
    
-   If you specify only the **TransitRouterMulticastDomainId** parameter, you can query information about all multicast resources in the multicast domain.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastGroups)

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

cen:ListTransitRouterMulticastGroups

get

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

Generate a unique value from your client for each request. The \`ClientToken\` parameter can contain only ASCII characters.

123e4567-e89b-12d3-a456-426655440000

TransitRouterMulticastDomainId

string

No

The ID of the multicast domain.

You must specify \`TransitRouterMulticastDomainId\` or \`TransitRouterAttachmentId\`.

tr-mcast-domain-5mjb5gjb6dgu98\*\*\*\*

GroupIpAddress

string

No

The IP address of the multicast group.

Each multicast group is identified by a multicast IP address.

239.XX.XX.2

TransitRouterAttachmentId

string

No

The ID of the network instance connection.

You must specify \`TransitRouterMulticastDomainId\` or \`TransitRouterAttachmentId\`.

tr-attach-g3kz2k3u76amsk\*\*\*\*

VSwitchIds

array

No

A list of vSwitch IDs.

string

No

The ID of the vSwitch.

You can specify a maximum of 20 vSwitch IDs.

vsw-p0w9s2ig1jnwgrbzl\*\*\*\*

PeerTransitRouterMulticastDomains

array

No

A list of IDs of cross-region multicast domains.

string

No

The ID of a cross-region multicast domain.

You can specify a maximum of 20 cross-region multicast domain IDs.

tr-mcast-domain-91wpg6wbhchjeq\*\*\*\*

ResourceType

string

No

The type of the multicast resource.

-   **VPC**: queries information about multicast resources in a VPC.
    
-   **TR**: queries information about cross-region multicast resources.
    

VPC

ResourceId

string

No

The ID of the resource associated with the multicast resource.

vpc-p0w9alkte4w2htrqe\*\*\*\*

MaxResults

integer

No

The number of entries to return on each page. Default value: **20**.

20

NextToken

string

No

The token for the next page of results.

-   If this is your first query or if no next page exists, do not specify this parameter.
    
-   If a next page exists, set this parameter to the \`NextToken\` value that is returned from the previous call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

IsGroupSource

boolean

No

Specifies whether to query multicast sources.

-   **false**: No.
    
-   **true**: Yes.
    

**Note**

This parameter works with \`IsGroupMember\`.

-   If you do not specify \`IsGroupSource\` or \`IsGroupMember\`, the system queries both multicast sources and members.
    
-   If you specify one or both parameters, the system queries resources based on the specified parameters.
    

true

IsGroupMember

boolean

No

Specifies whether to query multicast members.

-   **false**: No.
    
-   **true**: Yes.
    

**Note**

This parameter works with \`IsGroupSource\`.

-   If you do not specify \`IsGroupMember\` or \`IsGroupSource\`, the system queries both multicast members and sources.
    
-   If you specify one or both parameters, the system queries resources based on the specified parameters.
    

false

NetworkInterfaceIds

array

No

A list of Elastic Network Interface (ENI) IDs.

string

No

The ID of the ENI.

You can specify a maximum of 20 ENI IDs.

eni-p0weuda3lszwzjly\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response object.

RequestId

string

The request ID.

FB3C4A16-0933-5850-9D43-0C3EA37BCBFB

TotalCount

integer

The total number of entries.

1

MaxResults

integer

The number of entries per page.

20

NextToken

string

The token for the next page of results.

-   If **NextToken** is empty, no next page exists.
    
-   If a value is returned for **NextToken**, the value is the token for the next page.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

TransitRouterMulticastGroups

array<object>

A list of multicast groups.

object

The details of the multicast group.

GroupIpAddress

string

The IP address of the multicast group.

239.XX.XX.2

TransitRouterAttachmentId

string

The ID of the network instance connection.

tr-attach-g3kz2k3u76amsk\*\*\*\*

VSwitchId

string

The ID of the vSwitch.

vsw-p0w9s2ig1jnwgrbzl\*\*\*\*

NetworkInterfaceId

string

The ID of the ENI. The ENI is the multicast resource.

eni-p0weuda3lszwzjly\*\*\*\*

PeerTransitRouterMulticastDomainId

string

The ID of the multicast domain that is associated with the cross-region multicast resource.

tr-mcast-domain-91wpg6wbhchjeq\*\*\*\*

Status

string

The status of the multicast resource.

-   **Registering**: The resource is being created.
    
-   **Registered**: The resource is available.
    
-   **Deregistering**: The resource is being deleted.
    

Registered

GroupSource

boolean

Indicates whether the multicast resource is a multicast source.

-   **true**: The resource is a multicast source.
    
-   **false**: The resource is not a multicast source.
    

false

GroupMember

boolean

Indicates whether the multicast resource is a multicast member.

-   **true**: The resource is a multicast member.
    
-   **false**: The resource is not a multicast member.
    

true

MemberType

string

The type of the multicast member.

-   **Static**: The multicast member is manually specified.
    
-   **IGMPv2**: The multicast member dynamically joins the multicast group based on Internet Group Management Protocol Version 2 (IGMPv2).
    

Static

SourceType

string

The type of the multicast source.

-   **Static**: The multicast source is manually specified.
    
-   **IGMPv2**: The multicast source dynamically joins the multicast group based on IGMPv2.
    

Static

ResourceType

string

The type of the multicast resource.

-   **VPC**: The multicast resource is in a VPC.
    
-   **TR**: The multicast resource is a cross-region resource.
    

VPC

ResourceOwnerId

integer

The ID of the Alibaba Cloud account that owns the multicast resource.

253460731706911258

ResourceId

string

The ID of the resource associated with the multicast resource.

vpc-p0w9alkte4w2htrqe\*\*\*\*

TransitRouterMulticastDomainId

string

The ID of the multicast domain.

tr-mcast-domain-kx0vk0v7fz8kx4\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "FB3C4A16-0933-5850-9D43-0C3EA37BCBFB",
  "TotalCount": 1,
  "MaxResults": 20,
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "TransitRouterMulticastGroups": [
    {
      "GroupIpAddress": "239.XX.XX.2",
      "TransitRouterAttachmentId": "tr-attach-g3kz2k3u76amsk****",
      "VSwitchId": "vsw-p0w9s2ig1jnwgrbzl****",
      "NetworkInterfaceId": "eni-p0weuda3lszwzjly****",
      "PeerTransitRouterMulticastDomainId": "tr-mcast-domain-91wpg6wbhchjeq****",
      "Status": "Registered",
      "GroupSource": false,
      "GroupMember": true,
      "MemberType": "Static",
      "SourceType": "Static",
      "ResourceType": "VPC",
      "ResourceOwnerId": 253460731706911260,
      "ResourceId": "vpc-p0w9alkte4w2htrqe****",
      "TransitRouterMulticastDomainId": "tr-mcast-domain-kx0vk0v7fz8kx4****"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.NextToken

The specified NextToken is illegal.

The error message returned because the NextToken parameter is set to an invalid value.

400

IllegalParam.TransitRouterMulticastDomainId

The specified TransitRouterMulticastDomainId is illegal.

The error message returned because the specified multicast domain ID specified for the transit router (TransitRouterMulticastDomainId) is invalid.

400

IllegalParam.MaxResults

The specified MaxResults is illegal.

MaxResults illegal.

400

IllegalParam.TransitRouterAttachmentId

TransitRouterAttachmentId is illegal.

The error message returned because the specified transit router is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterMulticastGroups#workbench-doc-change-demo) for a complete list.
