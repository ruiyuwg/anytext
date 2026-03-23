Queries resource groups.

## Operation description

You can call this API operation to query all resource groups within the current account. You can also call this API operation to query a specific resource group based on the status, ID, identifier, or display name of the resource group.

This topic provides an example on how to call the API operation to query the basic information about the resource groups `rg-1hSBH2****` and `rg-9gLOoK****` within the current account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListResourceGroups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListResourceGroups)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

Status

string

No

The status of the resource group. This parameter specifies a filter condition for the query. Valid values:

-   Creating: The resource group is being created.
-   OK: The resource group is created.
-   PendingDelete: The resource group is waiting to be deleted.

OK

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

ResourceGroupId

string

No

The ID of the resource group. This parameter specifies a filter condition for the query.

The ID can be a maximum of 18 characters in length and must start with `rg-`.

**Note** This parameter is incorporated into the `ResourceGroupIds` parameter. If you configure both the `ResourceGroupId` and `ResourceGroupIds` parameters, the value of the `ResourceGroupIds` parameter prevails.

rg-9gLOoK\*\*\*\*

DisplayName

string

No

The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.

The display name can be a maximum of 50 characters in length.

my-project

Name

string

No

The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.

The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).

my-project

Tag

array<object>

No

The tag. This parameter specifies a filter condition for the query.

object

No

Key

string

No

The tag key.

k1

Value

string

No

The tag value.

v1

IncludeTags

boolean

No

Specifies whether to return the information of tags. Valid values:

-   false (default value)
-   true

**Note** If you configure the Tag parameter, the system returns the information of tags regardless of the setting of the `IncludeTags` parameter.

false

ResourceGroupIds

array

No

The IDs of the resource groups. This parameter specifies a filter condition for the query.

You can specify a maximum of 100 resource group IDs.

**Note** If you configure both the `ResourceGroupId` and `ResourceGroupIds` parameters, the value of the `ResourceGroupIds` parameter prevails.

string

No

{"rg-1hSBH2\*\*\*\*","rg-9gLOoK\*\*\*\*"}

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

4B450CA1-36E8-4AA2-8461-86B42BF4CC4E

PageSize

integer

The number of entries returned per page.

10

PageNumber

integer

The page number of the returned page.

1

ResourceGroups

array<object>

The information of the resource groups.

ResourceGroup

object

DisplayName

string

The display name of the resource group.

my-project

Status

string

The status of the resource group. Valid values:

-   Creating: The resource group is being created.
-   OK: The resource group is created.
-   PendingDelete: The resource group is waiting to be deleted.

OK

AccountId

string

The ID of the Alibaba Cloud account to which the resource group belongs.

123456789\*\*\*\*

Name

string

The identifier of the resource group.

my-project

CreateDate

string

The time when the resource group was created. The time is displayed in UTC.

2015-01-23T12:33:18Z

Id

string

The ID of the resource group.

rg-9gLOoK\*\*\*\*

Tags

array<object>

The tags that are added to the resource group.

Tag

object

TagKey

string

The tag key.

k1

TagValue

string

The tag value.

v1

## Examples

Sample success responses

`JSON`format

```
{
  "TotalCount": 2,
  "RequestId": "4B450CA1-36E8-4AA2-8461-86B42BF4CC4E",
  "PageSize": 10,
  "PageNumber": 1,
  "ResourceGroups": {
    "ResourceGroup": [
      {
        "DisplayName": "my-project",
        "Status": "OK",
        "AccountId": "123456789****",
        "Name": "my-project",
        "CreateDate": "2015-01-23T12:33:18Z",
        "Id": "rg-9gLOoK****",
        "Tags": {
          "Tag": [
            {
              "TagKey": "k1",
              "TagValue": "v1"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
