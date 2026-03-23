Queries the resource sharing invitations that you have received.

## Operation description

### Usage notes

This topic provides an example of how to query the resource sharing invitations for the current account in the `cn-hangzhou` region. The response shows one invitation that is in the Pending state.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceShareInvitations)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceShareInvitations)

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

resourcesharing:ListResourceShareInvitations

list

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

MaxResults

integer

No

The maximum number of entries to return for a single request.

Valid values: 1 to 100. Default value: 20.

20

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. If the response is truncated, you can use this token to initiate another request and retrieve the remaining entries.

TGlzdFJlc291cm\*\*\*\*

ResourceShareIds

array

No

The IDs of the resource shares.

string

No

The ID of the resource share.

rs-ysGRci9z\*\*\*\*

ResourceShareInvitationIds

array

No

The IDs of the resource sharing invitations.

string

No

The ID of the resource sharing invitation.

i-p6eRytrkjVvM\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results. If the response is truncated, you can use this token to initiate another request and retrieve the remaining entries.

TGlzdFJlc291cm\*\*\*\*

RequestId

string

The request ID.

30EC8328-1BDE-51D5-BFAB-039508BD91A1

ResourceShareInvitations

array<object>

The information about the resource sharing invitations.

object

The information about the resource sharing invitation.

Status

string

The status of the invitation. Valid values:

-   Pending: The invitation is pending confirmation.
    
-   Accepted: The invitation is accepted.
    
-   Cancelled: The invitation is canceled.
    
-   Rejected: The invitation is rejected.
    
-   Expired: The invitation is expired.
    
-   AcceptFailed: The invitation failed to be accepted.
    

Pending

CreateTime

string

The time when the invitation was created. The time is displayed in UTC.

2022-08-18T05:36:45.024Z

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

ResourceShareInvitationId

string

The ID of the resource sharing invitation.

i-p6eRytrkjVvM\*\*\*\*

InvitationFailedDetails

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

For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

Snapshot

FailureReason

string

The failure cause. Valid values:

-   Unavailable: The resource cannot be shared.
    
-   LimitExceeded: The number of shared resources within the Alibaba Cloud account exceeds the upper limit.
    
-   ZonalResourceInaccessible: The resource is inaccessible in this region.
    
-   InternalError: An internal error occurred on the server during the check.
    
-   UnsupportedOperation: The operation is not supported.
    

Unavailable

FailureDescription

string

The failure description.

You cannot access the specified resource at this time.

OperationType

string

The operation type. Valid values:

-   Associate
    
-   Disassociate
    

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
  "NextToken": "TGlzdFJlc291cm****",
  "RequestId": "30EC8328-1BDE-51D5-BFAB-039508BD91A1",
  "ResourceShareInvitations": [
    {
      "Status": "Pending",
      "CreateTime": "2022-08-18T05:36:45.024Z",
      "ResourceShareId": "rs-ysGRci9z****",
      "ResourceShareName": "example",
      "SenderAccountId": "151266687691****",
      "ReceiverAccountId": "134254031178****",
      "ResourceShareInvitationId": "i-p6eRytrkjVvM****",
      "InvitationFailedDetails": [
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
  ]
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.MaxResults

The MaxResults is invalid.

The MaxResults parameter is invalid.

400

InvalidParameter.NextToken

The NextToken is invalid.

The NextToken parameter is invalid.

400

InvalidParameter.NextToken.Length

The maximum length of NextToken exceeds 256 characters.

The length of NextToken cannot exceed 256 characters.

400

InvalidParameter.ResourceShareIds

The ResourceShareIds is invalid.

The ResourceShareIds parameter is invalid.

400

InvalidParameter.ResourceShareIds.Duplicate

The ResourceShareIds contains duplicate values.

The ResourceShareIds parameter contains duplicate values.

400

InvalidParameter.ResourceShareIds.Length

The maximum length of ResourceShareIds exceeds 5 characters.

The number of ResourceShareIds values cannot exceed 5.

400

InvalidParameter.ResourceShareInvitationIds

The ResourceShareInvitationIds is invalid.

The value of ResourceShareInvitationIds is invalid.

400

InvalidParameter.ResourceShareInvitationIds.Duplicate

The ResourceShareInvitationIds duplicate values.

ResourceShareInvitationIds is already configured.

400

InvalidParameter.ResourceShareInvitationIds.Length

The maximum length of ResourceShareInvitationIds exceeds quota limit.

The length of the value specified for ResourceShareInvitationIds exceeds the limit.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ListResourceShareInvitations#workbench-doc-change-demo) for a complete list.
