Rejects a resource sharing invitation.

## Operation description

This topic provides an example on how to call the API operation to reject the resource sharing invitation `i-yyTWbkjHArYh****` in the `cn-hangzhou` region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/RejectResourceShareInvitation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/RejectResourceShareInvitation)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ResourceShareInvitationId

string

Yes

The ID of the resource sharing invitation.

You can call the [ListResourceShareInvitations](/help/en/resource-management/api-listresourceshareinvitations) operation to obtain the ID of a resource sharing invitation.

i-yyTWbkjHArYh\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

E446D6DE-BFC8-5F37-A494-33D7B118147D

ResourceShareInvitation

object

The information of the resource sharing invitation.

ResourceShareInvitationId

string

The ID of the invitation.

i-yyTWbkjHArYh\*\*\*\*

ResourceShareId

string

The ID of the resource share.

rs-JoA1Ayjm\*\*\*\*

ResourceShareName

string

The name of the resource share.

example

SenderAccountId

string

The Alibaba Cloud account ID of the inviter.

151266687691\*\*\*\*

ReceiverAccountId

string

The Alibaba Cloud account ID of the invitee.

134254031178\*\*\*\*

CreateTime

string

The time when the invitation was created. The time is displayed in UTC.

2022-09-02T07:07:30.809Z

Status

string

The status of the invitation. Valid values:

-   Pending: The invitation is waiting for confirmation.
-   Accepted: The invitation is accepted.
-   Cancelled: The invitation is canceled.
-   Rejected: The invitation is rejected.
-   Expired: The invitation has expired.

Rejected

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E446D6DE-BFC8-5F37-A494-33D7B118147D",
  "ResourceShareInvitation": {
    "ResourceShareInvitationId": "i-yyTWbkjHArYh****",
    "ResourceShareId": "rs-JoA1Ayjm****",
    "ResourceShareName": "example",
    "SenderAccountId": "151266687691****",
    "ReceiverAccountId": "134254031178****",
    "CreateTime": "2022-09-02T07:07:30.809Z",
    "Status": "Rejected"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
