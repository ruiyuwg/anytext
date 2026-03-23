Cancels the upgrade from a resource account to a cloud account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CancelPromoteResourceAccount)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CancelPromoteResourceAccount)

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

resourcemanager:CancelPromoteResourceAccount

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

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "9B34724D-54B0-4A51-B34D-4512372FE1BE"
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

EntityNotExists.AccountRecord

This resource directory account recordId does not exist.

The specified entry ID does not exist or is removed.

404

EntityNotExists.ResourceDirectory

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

409

AccountTypeOrStatusMismatch

You cannot perform the action on the member account.

You cannot perform the action on the member account.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
