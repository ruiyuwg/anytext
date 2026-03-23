Associates the vSwitch of a virtual private cloud (VPC) with a multicast domain.

## Operation description

-   A vSwitch can be associated with only one multicast domain. Make sure that the vSwitch is not associated with other multicast domains. For more information about how to disassociate a vSwitch from a multicast domain, see [DisassociateTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-disassociatetransitroutermulticastdomain).
    
-   AssociateTransitRouterMulticastDomain is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the ListTransitRouterMulticastDomainAssociations operation to query whether a vSwitch is associated with the specified multicast domain.
    -   If the status is Associating, it indicates that the vSwitch is being associated with the specified multicast domain. You can query the vSwitch but cannot perform other operations on the vSwitch.
        
    -   If the status is Associated, the vSwitch is associated with the specified multicast domain.
        
-   The VPC of the vSwitch must be associated with an Enterprise Edition transit router. For more information about how to associate a VPC with an Enterprise Edition transit router, see [CreateTransitRouterVpcAttachment](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitroutervpcattachment).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/AssociateTransitRouterMulticastDomain)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/AssociateTransitRouterMulticastDomain)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a RAM policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding ARN in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of common condition keys applicable across all RAM-supported services. For more information, see [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms).
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:AssociateTransitRouterMulticastDomain

update

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

You can use the client to generate the value, but you must make sure that it is unique among all requests. The client token can contain only ASCII characters.

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

tr-attach-g3kz2k3u76amsk\*\*\*\*

VSwitchIds

array

Yes

The IDs of vSwitches.

string

Yes

The vSwitch IDs.

You can specify at most five vSwitches in each call. A multicast domain can be associated with at most 10 vSwitches.

vsw-p0wxk12u6okfkr8xy\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run, without sending the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and sends the request.
    

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

F88AC12C-943B-50E9-A344-4F8820BB07A7

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F88AC12C-943B-50E9-A344-4F8820BB07A7"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidMulticastDomain.NotFound

The specified MulticastDomain is not found.

The error message returned because the specified multicast domain does not exist.

400

IncorrectStatus.MulticastDomain

The status of MulticastDomain is incorrect.

The error message returned because the status of the specified multicast domain does not support this operation. Try again later.

400

InvalidAttachmentId.NotFound

The specified AttachmentId is not found.

400

IllegalParam.AttachmentId

The specified AttachmentId is illegal.

The error message returned because the specified attachment ID is invalid.

400

IncorrectStatus.Attachment

The status of Attachment is incorrect.

The error message returned because the status of the attachment does not support this operation. Try again later.

400

MissingParam.VSwitchIds

The parameter VSwitchIds is mandatory.

The error message returned because the VSwitchIds parameter is not set.

400

InstanceNotExist

The instance is not exist.

The error message returned because the specified instance does not exist.

400

OperationUnsupported.CloudBoxVpc

The specified CloudBoxVpc does not support the operation.

The error message returned because the CloudBox VPC does not support this operation.

400

AssociationExist.VSwitchIds

The association already exists.

The error message returned because the specified resource is already associated with the vSwitch.

400

QuotaFull.VswitchPerMulticastDomain

The number of vswitch associated with multicast domain has exceed the maximum value that can be created.

The error message returned because the number of vSwitches associated with the multicast domain has reached the upper limit.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

OperationUnsupported.VpcRegion

The specified Region is not support for this operation.

The error message returned because this operation is not supported in the specified region.

400

OperationUnsupported.AdvancedFeature

The specified vpc does not support the operation.

400

QuotaFull.MulticastDomainPerVpc

The number of multicast domain that vpc associated has exceed the maximum value that can be associated.

The number of multicast domain that vpc associated has exceed the maximum value that can be associated.

400

IllegalParam.VSwitchIds

The parameter VSwitchIds is illegal.

The parameter VSwitchIds is illegal.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/AssociateTransitRouterMulticastDomain#workbench-doc-change-demo) for a complete list.
