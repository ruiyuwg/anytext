Enables resource sharing for a resource directory.

## Operation description

You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory as a resource owner only after you enable resource sharing for your resource directory.

You can call this API operation only by using the management account of your resource directory or a RAM user or RAM role to which the required permissions are granted within the management account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/EnableSharingWithResourceDirectory)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/EnableSharingWithResourceDirectory)

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

resourcesharing:EnableSharingWithResourceDirectory

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

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

RequestId

string

The request ID.

2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

409

ActionNotPermitted

The caller must be the master account for the Resource Directory.

The caller must be the management account for Resource Directory.

409

AlreadyEnabled

You have already enabled sharing with the Resource Directory.

You have enabled sharing with Resource Directory.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/EnableSharingWithResourceDirectory?updateTime=2024-01-24#workbench-doc-change-demo)
