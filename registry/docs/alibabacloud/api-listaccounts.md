Queries all the members in a resource directory.

## Operation description

You can use only the management account of a resource directory or a delegated administrator account of a trusted service to call this operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListAccounts)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListAccounts)

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

resourcemanager:ListAccounts

get

\*Account

`acs:resourcemanager:*:{#accountId}:account/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PageNumber

integer

No

The number of the page to return.

Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page.

Valid values: 1 to 100. Default value: 10.

10

Tag

array<object>

No

The tag key and value.

object

No

The tag key and value.

Key

string

No

A tag key.

tag\_key

Value

string

No

A tag value.

tag\_value

IncludeTags

boolean

No

Specifies whether to return the information of tags. Valid values:

-   false (default value)
-   true

true

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

TotalCount

integer

The total number of entries returned.

2

RequestId

string

The ID of the request.

7B8A4E7D-6CFF-471D-84DF-195A7A241ECB

PageSize

integer

The number of entries returned per page.

5

PageNumber

integer

The page number of the returned page.

1

Accounts

array<object>

The members returned.

Account

object

The members returned.

Status

string

The status of the member. Valid values:

-   CreateSuccess: The member is created.
-   PromoteVerifying: The upgrade of the member is being confirmed.
-   PromoteFailed: The upgrade of the member fails.
-   PromoteExpired: The upgrade of the member expires.
-   PromoteCancelled: The upgrade of the member is canceled.
-   PromoteSuccess: The member is upgraded.
-   InviteSuccess: The member accepts the invitation.

CreateSuccess

Type

string

The type of the member. Valid values:

-   CloudAccount: cloud account
-   ResourceAccount: resource account

ResourceAccount

DisplayName

string

The display name of the member.

test

FolderId

string

The ID of the folder.

fd-QRzuim\*\*\*\*

ResourceDirectoryId

string

The ID of the resource directory.

rd-3G\*\*\*\*

JoinTime

string

The time when the member joined the resource directory. The time is displayed in UTC.

2021-01-18T08:01:50.522Z

AccountId

string

The Alibaba Cloud account ID of the member.

181761095690\*\*\*\*

JoinMethod

string

The way in which the member joins the resource directory. Valid values:

-   invited: The member is invited to join the resource directory.
-   created: The member is directly created in the resource directory.

created

ModifyTime

string

The time when the member was modified. The time is displayed in UTC.

2021-01-18T08:04:37.668Z

ResourceDirectoryPath

string

The path of the member in the resource directory.

rd-3G\*\*\*\*/r-Wm\*\*\*\*/fd-QRzuim\*\*\*\*/181761095690\*\*\*\*

Tags

array<object>

The tags that are added to the member.

Tag

object

The tags that are added to the member.

Key

string

A tag key.

tag\_key

Value

string

A tag value.

tag\_value

## Examples

Sample success responses

`JSON`format

```
{
  "TotalCount": 2,
  "RequestId": "7B8A4E7D-6CFF-471D-84DF-195A7A241ECB",
  "PageSize": 5,
  "PageNumber": 1,
  "Accounts": {
    "Account": [
      {
        "Status": "CreateSuccess",
        "Type": "ResourceAccount",
        "DisplayName": "test",
        "FolderId": "fd-QRzuim****",
        "ResourceDirectoryId": "rd-3G****",
        "JoinTime": "2021-01-18T08:01:50.522Z",
        "AccountId": "181761095690****",
        "JoinMethod": "created",
        "ModifyTime": "2021-01-18T08:04:37.668Z",
        "ResourceDirectoryPath": "rd-3G****/r-Wm****/fd-QRzuim****/181761095690****",
        "Tags": {
          "Tag": [
            {
              "Key": "tag_key",
              "Value": "tag_value"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

EntityNotExists.ResourceDirectory

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
