Cancels the directory quota of a file system.

## Operation description

Only General-purpose file systems support the directory quota feature.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/NAS/2017-06-26/CancelDirQuota)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/NAS/2017-06-26/CancelDirQuota)

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

nas:CancelDirQuota

delete

\*FileSystem

`acs:nas:{#regionId}:{#accountId}:filesystem/{#filesystemId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

FileSystemId

string

Yes

The ID of the file system.

1ca404\*\*\*\*

Path

string

Yes

The absolute path of a directory.

/data/sub1

UserType

string

Yes

The type of the user.

Valid values:

-   Uid: user ID
-   Gid: user group ID
-   AllUsers: all users

Uid

UserId

string

No

The UID or GID of a user for whom you want to cancel the directory quota.

This parameter is required and valid only if the UserType parameter is set to Uid or Gid.

Examples:

-   If you want to cancel a quota for a user whose UID is 500, set the UserType parameter to Uid and set the UserId parameter to 500.
-   If you want to cancel a quota for a group whose GID is 100, set the UserType parameter to Gid and set the UserId parameter to 100.

500

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

5BC5CB97-9F28-42FE-84A4-0CD0DF42\*\*\*\*

Success

boolean

Indicates whether the request is successful.

Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5BC5CB97-9F28-42FE-84A4-0CD0DF42****",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/NAS/2017-06-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-09-05

API Description Update

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/CancelDirQuota?updateTime=2024-09-05#workbench-doc-change-demo)
