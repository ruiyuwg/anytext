Queries resource shares.

## Operation description

This topic provides an example on how to call the API operation to query the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows that the following resource shares are created within the account `151266687691****`:

-   `rs-hX9wC5jO****`, which is in the `Deleted` state
-   `rs-PqysnzIj****`, which is in the `Active` state

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceShares)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceShares)

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

resourcesharing:ListResourceShares

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

ResourceOwner

string

Yes

The owner of the resource shares. Valid values:

-   Self: the current account
-   OtherAccounts: an account other than the current account

Self

ResourceShareName

string

No

The name of the resource share.

test

ResourceShareStatus

string

No

The status of the resource shares. Valid values:

-   Active
-   Pending
-   Deleting
-   Deleted

**Note** The system automatically deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.

Active

MaxResults

integer

No

The maximum number of entries to return for a single request.

Valid values: 1 to 100. Default value: 20.

20

NextToken

string

No

The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.

TGlzdFJlc291cm\*\*\*\*

ResourceShareIds

array

No

The IDs of the resource shares.

Valid values of N: 1 to 5. This indicates that a maximum of five resource shares can be specified at a time.

string

No

The ID of a resource share.

rs-PqysnzIj\*\*\*\*

PermissionName

string

No

The information about the permissions. For more information, see [Permission library](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing).

AliyunRSDefaultPermissionVSwitch

ResourceGroupId

string

No

The ID of the resource group.

rg-aekz5nlvlak\*\*\*\*

Tag

array<object>

No

The tags.

object

No

A tag.

Key

string

No

The tag key.

**Note** The tag key can be 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.

k1

Value

string

No

The tag value.

**Note** The tag value can be 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.

v1

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

NextToken

string

The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.

TGlzdFJlc291cm\*\*\*\*

RequestId

string

The request ID.

2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA

ResourceShares

array<object>

The information about the resource shares.

ResourceShare

object

The information about a resource share.

AllowExternalTargets

boolean

Indicates whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:

-   false: Resources in the resource share can be shared only with accounts in the resource directory.
-   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.

false

CreateTime

string

The time when the resource share was created.

2020-12-03T02:20:31.292Z

ResourceGroupId

string

The ID of the resource group.

rg-aekz5nlvlak\*\*\*\*

ResourceShareId

string

The ID of the resource share.

rs-PqysnzIj\*\*\*\*

ResourceShareName

string

The name of the resource share.

test

ResourceShareOwner

string

The owner of the resource share.

151266687691\*\*\*\*

ResourceShareStatus

string

The status of the resource share. Valid values:

-   Active
-   Pending
-   Deleting
-   Deleted

**Note** The system automatically deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.

Active

Tags

array<object>

The tags.

Tag

object

A tag.

Key

string

The tag key.

k1

Value

string

The tag value.

v1

UpdateTime

string

The time when the resource share was updated.

2020-12-03T08:01:43.638Z

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "TGlzdFJlc291cm****",
  "RequestId": "2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA",
  "ResourceShares": [
    {
      "AllowExternalTargets": false,
      "CreateTime": "2020-12-03T02:20:31.292Z",
      "ResourceGroupId": "rg-aekz5nlvlak****",
      "ResourceShareId": "rs-PqysnzIj****",
      "ResourceShareName": "test",
      "ResourceShareOwner": "151266687691****",
      "ResourceShareStatus": "Active",
      "Tags": [
        {
          "Key": "k1",
          "Value": "v1"
        }
      ],
      "UpdateTime": "2020-12-03T08:01:43.638Z"
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

MissingParameter.ResourceOwner

You must specify ResourceOwner.

You must specify ResourceOwner.

400

InvalidParameter.ResourceOwner

The ResourceOwner is invalid.

The ResourceOwner parameter is invalid.

400

InvalidParameter.ResourceShareName

The ResourceShareName is invalid.

The ResourceShareName parameter is invalid.

400

InvalidParameter.ResourceShareName.Length

The maximum length of ResourceShareName exceeds 50 characters.

The length of ResourceShareName cannot exceed 50 characters.

400

InvalidParameter.ResourceShareStatus

The ResourceShareStatus is invalid.

The ResourceShareStatus parameter is invalid.

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

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

400

InvalidParameter.ResourceOwnerAndTag

You cannot use ResourceOwner set to OtherAccounts and tags in one request.

You cannot use ResourceOwner set to OtherAccounts and tags in one request.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-04-03

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ListResourceShares?updateTime=2023-04-03#workbench-doc-change-demo)

2023-03-02

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ListResourceShares?updateTime=2023-03-02#workbench-doc-change-demo)
