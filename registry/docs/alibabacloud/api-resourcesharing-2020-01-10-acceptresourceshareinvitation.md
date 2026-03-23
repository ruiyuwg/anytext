Accepts a resource sharing invitation.

## Operation description

### Usage notes

-   A principal needs to accept or reject a resource sharing invitation only if the principal is not the management account or a member of a resource directory. If you share resources with a principal in a resource directory, the system automatically accepts the resource sharing invitation for the principal.
    
-   A resource sharing invitation is valid for seven days. A principal must accept or reject the invitation within the validity period.
    

This topic provides an example of how to accept a sharing invitation with the ID `i-pMnItMX19fBJ****` in the `cn-hangzhou` region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/AcceptResourceShareInvitation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/AcceptResourceShareInvitation)

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

resourcesharing:AcceptResourceShareInvitation

update

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceShareInvitationId

string

Yes

The ID of the sharing invitation.

You can call the [ListResourceShareInvitations](/help/en/resource-management/api-listresourceshareinvitations) operation to obtain the ID of the sharing invitation.

i-pMnItMX19fBJ\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

08F18B04-47CB-5C0E-A6D2-37DEF5C2A961

ResourceShareInvitation

object

The information about the sharing invitation.

ResourceShareInvitationId

string

The ID of the sharing invitation.

i-pMnItMX19fBJ\*\*\*\*

ResourceShareId

string

The ID of the resource share.

rs-ysGRci9z\*\*\*\*

ResourceShareName

string

The name of the resource share.

example

SenderAccountId

string

The ID of the Alibaba Cloud account that sent the invitation.

151266687691\*\*\*\*

ReceiverAccountId

string

The ID of the Alibaba Cloud account that received the invitation.

134254031178\*\*\*\*

CreateTime

string

The time when the invitation was created. The time is displayed in UTC.

2022-09-02T06:43:12.353Z

Status

string

The status of the invitation. Valid values:

-   Pending: The invitation is pending confirmation.
    
-   Accepted: The invitation is accepted.
    
-   Cancelled: The invitation is canceled.
    
-   Rejected: The invitation is rejected.
    
-   Expired: The invitation is expired.
    
-   AcceptFailed: The invitation failed to be accepted.
    

AcceptFailed

AcceptInvitationFailedDetails

array<object>

The information about the failure.

object

The information about the failure.

Status

string

This parameter is deprecated. Use FailureReason instead.

None

StatusMessage

string

This parameter is deprecated. Use FailureDescription instead.

None

AssociateType

string

This parameter is deprecated. Use OperationType instead.

None

ResourceArn

string

The Alibaba Cloud Resource Name (ARN) of the shared resource.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

ResourceType

string

The type of the shared resource.

For more information about the resource types that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

Snapshot

FailureReason

string

The failure cause. Valid values:

-   Unavailable: The resource cannot be shared.
    
-   LimitExceeded: The number of shared resources within the Alibaba Cloud account exceeds the upper limit.
    
-   ZonalResourceInaccessible: The resource is inaccessible in the zone.
    
-   InternalError: An internal error occurred during the check.
    

Unavailable

FailureDescription

string

The failure description.

You cannot access the specified resource at this time.

OperationType

string

The type of the operation. Valid values:

-   Associate: An association operation.
    

Associate

ResourceId

string

The ID of the shared resource.

s-7xvh46nx5oqlre0wv\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "08F18B04-47CB-5C0E-A6D2-37DEF5C2A961",
  "ResourceShareInvitation": {
    "ResourceShareInvitationId": "i-pMnItMX19fBJ****",
    "ResourceShareId": "rs-ysGRci9z****",
    "ResourceShareName": "example",
    "SenderAccountId": "151266687691****",
    "ReceiverAccountId": "134254031178****",
    "CreateTime": "2022-09-02T06:43:12.353Z",
    "Status": "AcceptFailed",
    "AcceptInvitationFailedDetails": [
      {
        "Status": "None",
        "StatusMessage": "None",
        "AssociateType": "None",
        "ResourceArn": "acs:vpc:cn-shanghai:103755469187****:vswitch/vsw-uf62b11ue4m8oz2di****",
        "ResourceType": "Snapshot",
        "FailureReason": "Unavailable",
        "FailureDescription": "You cannot access the specified resource at this time.",
        "OperationType": "Associate",
        "ResourceId": "s-7xvh46nx5oqlre0wv***"
      }
    ]
  }
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.ResourceShareInvitationId

The ResourceShareInvitationId is invalid.

The invitation ID is invalid.

400

MissingParameter.ResourceShareInvitationId

You must specify ResourceShareInvitationId.

You must specify an invitation ID.

409

InvitationStatus.Expired

The resource share invitation status is expired.

The invitation has expired.

409

EntityNotExists.ResourceShareInvitation

The resource share invitation does not exist in the current account.

The invitation does not exist.

409

InvitationStatus.AlreadyRejected

The resource share invitation status is rejected.

The invitation has been rejected.

409

InvitationStatus.AlreadyAccepted

The resource share invitation status is alredy accepted.

The invitation has been accepted.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/AcceptResourceShareInvitation#workbench-doc-change-demo) for a complete list.
