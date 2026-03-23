Queries the information of prefix lists.

## Operation description

You can specify the `AddressFamily`, `PrefixListId.N`, and `PrefixListName` request parameters in the request. Specified parameters have logical AND relations. Only the parameters that you set are included in the filter conditions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePrefixLists)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePrefixLists)

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

ecs:DescribePrefixLists

get

\*PrefixList

`acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-chengdu

PrefixListName

string

No

The name of the prefix list.

PrefixListNameSample

NextToken

string

No

The pagination token that is used in the request to retrieve a new page of results. Set the value to the `NextToken` value returned in the last call to this operation. Leave this parameter empty the first time you call this operation.

AAAAAdDWBF2\*\*\*\*

MaxResults

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

AddressFamily

string

No

The IP address family. Valid values:

-   IPv4
-   IPv6

This parameter is empty by default, which indicates that all prefix lists are queried.

IPv4

PrefixListId

array

No

The IDs of prefix lists. Valid values of N: 0 to 100.

string

No

The ID of prefix list N. Valid values of N: 0 to 100.

pl-x1j1k5ykzqlixdcy\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the prefix list belongs.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags of the prefix list.

object

No

Tag N of the prefix list.

Key

string

No

The key of tag N of the prefix list. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http:// or https://`.

TestKey

Value

string

No

The value of tag N of the prefix list. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http:// or https://`.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

The query token that is returned in this call. If the return value is empty, no more data is returned.

AAAAAdDWBF2\*\*\*\*

RequestId

string

The request ID.

38793DB8-A4B2-4AEC-BFD3-111234E9188D

PrefixLists

array<object>

Details about the prefix lists.

PrefixList

object

CreationTime

string

The time when the prefix list was created.

2021-02-20T07:11Z

AssociationCount

integer

The number of associated resources.

1

MaxEntries

integer

The maximum number of entries that the prefix list can contain.

20

Description

string

The description of the prefix list.

This is description.

AddressFamily

string

The IP address family of the prefix list. Valid values:

-   IPv4
-   IPv6

IPv4

PrefixListName

string

The name of the prefix list.

PrefixListNameSample

PrefixListId

string

The ID of the prefix list.

pl-x1j1k5ykzqlixdcy\*\*\*\*

Tags

array<object>

The tags of the prefix list.

Tag

object

The tag of the prefix list.

TagValue

string

The tag key. A prefix list can have 1 to 20 tags. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

TagKey

string

The tag value. A prefix list can have 1 to 20 tags. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http:// or https://`.

TestValue

ResourceGroupId

string

The ID of the resource group to which the prefix list belongs.

rg-bp67acfmxazb4p\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAdDWBF2****",
  "RequestId": "38793DB8-A4B2-4AEC-BFD3-111234E9188D",
  "PrefixLists": {
    "PrefixList": [
      {
        "CreationTime": "2021-02-20T07:11Z",
        "AssociationCount": 1,
        "MaxEntries": 20,
        "Description": "This is description.",
        "AddressFamily": "IPv4",
        "PrefixListName": "PrefixListNameSample",
        "PrefixListId": "pl-x1j1k5ykzqlixdcy****",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestKey",
              "TagKey": "TestValue\n"
            }
          ]
        },
        "ResourceGroupId": "rg-bp67acfmxazb4p****\n"
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

400

InvalidParameter

%s

The specified parameter is invalid.

400

LimitExceed.PrefixListId

The specified number of PrefixListId exceeds the limit.

The number of specified prefix list IDs exceeds the upper limit.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-21

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrefixLists?updateTime=2025-04-21#workbench-doc-change-demo)

2025-01-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrefixLists?updateTime=2025-01-02#workbench-doc-change-demo)

2023-11-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrefixLists?updateTime=2023-11-13#workbench-doc-change-demo)
