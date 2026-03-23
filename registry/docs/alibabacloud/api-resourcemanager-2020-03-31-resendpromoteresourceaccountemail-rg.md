Resends an email that is used to confirm the upgrade from a resource account to a cloud account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ResendPromoteResourceAccountEmail)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ResendPromoteResourceAccountEmail)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

resourcemanager:ResendPromoteResourceAccountEmail

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RecordId

string

Yes

The account record ID.

06950264-3f0d-4ca9-82dd-6ee7a3d33d6b

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

9B34724D-54B0-4A51-B34D-4512372FE1BE

Account

object

The information of the member account.

Status

string

The status of the member account. Valid values:

-   CreateSuccess: The member account is created.
-   CreateVerifying: The creation of the member account is under confirmation.
-   CreateFailed: The member account failed to be created.
-   CreateExpired: The creation of the member account expired.
-   CreateCancelled: The creation of the member account is canceled.
-   PromoteVerifying: The upgrade of the member account is under confirmation.
-   PromoteFailed: The member account failed to be upgraded.
-   PromoteExpired: The upgrade of the member account expired.
-   PromoteCancelled: The upgrade of the member account is canceled.
-   PromoteSuccess: The member account is upgraded.
-   InviteSuccess: The owner of the member account accepted the invitation.
-   Removed: The member account is removed from the resource directory.

PromoteVerifying

Type

string

The type of the member account. Valid values:

-   CloudAccount: cloud account
-   ResourceAccount: resource account

ResourceAccount

DisplayName

string

The display name of the member account.

admin

FolderId

string

The ID of the folder.

fd-bVaRIG\*\*\*\*

ResourceDirectoryId

string

The ID of the resource directory.

rd-k3\*\*\*\*

RecordId

string

The account record ID.

16950264-3f0d-4ca9-82dd-6ee7a3d33d6b

JoinTime

string

The time when the member account joined the resource directory.

2015-01-23T12:33:18Z

AccountId

string

The ID of the account.

12323344\*\*\*\*

JoinMethod

string

The way in which the member account joined the resource directory. Valid values:

-   invited: The member account is invited to join the resource directory.
-   created: The member account is directly created in the resource directory.

created

AccountName

string

The name of the account.

someone@example.com

ModifyTime

string

The time when the member account was modified.

2015-01-23T12:33:18Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "9B34724D-54B0-4A51-B34D-4512372FE1BE",
  "Account": {
    "Status": "PromoteVerifying",
    "Type": "ResourceAccount",
    "DisplayName": "admin",
    "FolderId": "fd-bVaRIG****",
    "ResourceDirectoryId": "rd-k3****",
    "RecordId": "16950264-3f0d-4ca9-82dd-6ee7a3d33d6b",
    "JoinTime": "2015-01-23T12:33:18Z",
    "AccountId": "12323344****",
    "JoinMethod": "created",
    "AccountName": "someone@example.com",
    "ModifyTime": "2015-01-23T12:33:18Z"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter.RecordId

You must specify RecordId.

The specified entry ID is invalid. You must specify a valid entry ID.

404

EntityNotExists.ResourceDirectory

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

404

EntityNotExists.AccountRecord

This resource directory account recordId does not exist.

The specified entry ID does not exist or is removed.

409

AccountTypeOrStatusMismatch

You cannot perform the action on the member account.

You cannot perform the action on the member account.

409

LimitExceeded.Frequency

The frequency of request exceeds limit.

The frequency of requests is high. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
