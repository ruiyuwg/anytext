You can call the ListTransitRouterMulticastDomainAssociations operation to query the associations between multicast domains and vSwitches.

## Operation description

-   When you call this operation, you must specify either the **TransitRouterMulticastDomainId** or **TransitRouterAttachmentId** request parameter. If you specify **TransitRouterAttachmentId**, the system queries the vSwitches that are associated with the multicast domain in the VPC. If you specify **TransitRouterMulticastDomainId**, the system queries the vSwitches that are associated with the specified multicast domain.
    
-   When you call the **ListTransitRouterMulticastDomainAssociations** operation, you must provide valid parameter values. If you provide an invalid parameter, the system returns a **RequestId** but does not return the association between the multicast domain and the vSwitch.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastDomainAssociations)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastDomainAssociations)

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

cen:ListTransitRouterMulticastDomainAssociations

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

The client token that is used to ensure the idempotence of the request.

Generate a token from your client to ensure that it is unique among different requests. The ClientToken parameter can contain only ASCII characters.

123e4567-e89b-12d3-a456-4266\*\*\*\*

TransitRouterMulticastDomainId

string

No

The ID of the multicast domain.

tr-mcast-domain-91wpg6wbhchjeq\*\*\*\*

TransitRouterAttachmentId

string

No

The ID of the network instance connection.

tr-attach-p90y3ymbbwuvy5\*\*\*\*

VSwitchIds

array

No

The list of vSwitch IDs.

string

No

The vSwitch ID.

You can specify up to 20 vSwitch IDs.

vsw-p0w9s2ig1jnwgrbzl\*\*\*\*

ResourceType

string

No

The type of resource associated with the multicast domain.

The value is **VPC**.

VPC

ResourceId

string

No

The ID of the resource associated with the multicast domain.

vpc-p0w9alkte4w2htrqe\*\*\*\*

MaxResults

integer

No

The number of entries to return on each page. Default value: **20**.

20

NextToken

string

No

The token that determines the start point of the next query. Valid values:

-   If this is your first query and no next query is to be sent, ignore this parameter.
    
-   If a next query is to be sent, set the value to the NextToken value returned from the last API call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

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

1CD0969B-A605-5D2D-BFF0-699FD182FB7F

TotalCount

integer

The total number of entries returned.

1

MaxResults

integer

The number of entries returned per page.

20

NextToken

string

The token for the next query. Valid values:

-   If **NextToken** is empty, it indicates that no next query is to be sent.
    
-   If a value is returned for **NextToken**, the value is the token that is used for the next query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

TransitRouterMulticastAssociations

array<object>

The list of associations.

object

The information about the association.

TransitRouterMulticastDomainId

string

The ID of the multicast domain.

tr-mcast-domain-91wpg6wbhchjeq\*\*\*\*

TransitRouterAttachmentId

string

The ID of the network instance connection.

tr-attach-p90y3ymbbwuvy5\*\*\*\*

VSwitchId

string

The ID of the vSwitch.

vsw-p0wxk12u6okfkr8xy\*\*\*\*

Status

string

The association status.

-   **Associated**: The resource is associated with the multicast domain.
    
-   **Associating**: The resource is being associated with the multicast domain.
    
-   **Dissociating**: The resource is being dissociated from the multicast domain.
    

Dissociating

ResourceType

string

The type of resource associated with the multicast domain.

The value is **VPC**.

VPC

ResourceOwnerId

integer

The ID of the Alibaba Cloud account to which the resource associated with the multicast domain belongs.

1210123456123456

ResourceId

string

The ID of the resource associated with the multicast domain.

vpc-p0w9b7g9l90yofr0n\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1CD0969B-A605-5D2D-BFF0-699FD182FB7F",
  "TotalCount": 1,
  "MaxResults": 20,
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "TransitRouterMulticastAssociations": [
    {
      "TransitRouterMulticastDomainId": "tr-mcast-domain-91wpg6wbhchjeq****",
      "TransitRouterAttachmentId": "tr-attach-p90y3ymbbwuvy5****",
      "VSwitchId": "vsw-p0wxk12u6okfkr8xy****",
      "Status": "Dissociating",
      "ResourceType": "VPC",
      "ResourceOwnerId": 1210123456123456,
      "ResourceId": "vpc-p0w9b7g9l90yofr0n****"
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

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterMulticastDomainAssociations#workbench-doc-change-demo) for a complete list.
