Queries the permissions that are associated with a resource share.

## Operation description

This topic provides an example on how to call the API operation to query the permissions that are associated with the resource share created by using the current Alibaba Cloud account in the `cn-hangzhou` region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceSharePermissions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceSharePermissions)

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

resourcesharing:ListResourceSharePermissions

list

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

ResourceShareId

string

Yes

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return for a single request.

Valid values: 1 to 100. Default value: 20.

20

NextToken

string

No

The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.

TGlzdFJlc291cm\*\*\*\*

ResourceOwner

string

Yes

The owner of the resource share. Valid values:

-   Self: the current account
-   OtherAccounts: an account other than the current account

Self

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.

TGlzdFJlc291cm\*\*\*\*

RequestId

string

The ID of the request.

2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA

Permissions

array<object>

The information about the permissions.

Permission

object

The information about the permissions.

PermissionName

string

The name of the permission.

AliyunRSDefaultPermissionVSwitch

PermissionVersion

string

The version of the permission.

v1

DefaultVersion

boolean

Indicates whether the version is the default version. Valid values:

-   false: The version is not the default version.
-   true: The version is the default version.

true

CreateTime

string

The creation time.

2020-12-07T07:39:01.818Z

UpdateTime

string

The update time.

2020-12-07T07:39:01.818Z

ResourceType

string

The type of the shared resources.

For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

VSwitch

DefaultPermission

boolean

Indicates whether the permission is the default permission. Valid values:

-   false: The permission is not the default permission.
-   true: The permission is the default permission.

true

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "TGlzdFJlc291cm****",
  "RequestId": "2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA",
  "Permissions": [
    {
      "PermissionName": "AliyunRSDefaultPermissionVSwitch",
      "PermissionVersion": "v1",
      "DefaultVersion": true,
      "CreateTime": "2020-12-07T07:39:01.818Z",
      "UpdateTime": "2020-12-07T07:39:01.818Z",
      "ResourceType": "VSwitch",
      "DefaultPermission": true
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter.ResourceShareId

You must specify ResourceShareId.

You must specify ResourceShareId.

400

InvalidParameter.ResourceShareId

The ResourceShareId is invalid.

The ResourceShareId parameter is invalid.

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

InvalidParameter.ResourceOwner

The ResourceOwner is invalid.

The ResourceOwner parameter is invalid.

400

MissingParameter.ResourceOwner

You must specify ResourceOwner.

You must specify ResourceOwner.

404

EntityNotExists.ResourceShare

The resource share does not exist in the current account.

The resource share does not exist in the current account.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
