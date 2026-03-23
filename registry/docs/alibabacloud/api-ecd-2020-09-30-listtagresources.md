Queries the tags of cloud computers.

## Operation description

You must use at least one of the following parameters in the request to determine the object that you want to query: `ResourceId.N`, `Tag.N.Key`, and `Tag.N.Value`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ListTagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ListTagResources)

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

ecd:ListTagResources

get

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceType

string

Yes

The type of the resource.

Valid values:

-   ALIYUN::GWS::INSTANCE: cloud computer.

ALIYUN::GWS::INSTANCE

MaxResults

integer

No

The number of entries per page.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

caeba0bbb2be03f84eb48b699f0a4883

ResourceId

array

No

The resource IDs, which are cloud computer IDs. You can specify 1 to 50 IDs.

string

No

The resource ID, which is the cloud computer ID.

ecd-ia2zw38bi6cm7\*\*\*\*

Tag

array<object>

No

The tags that you want to query.

object

No

The tag value of the resource.

Key

string

No

The tag keys. You can specify 1 to 20 tag keys.

TestKey

Value

string

No

The tag values. You can specify 1 to 20 tag values.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

Schema of response.

NextToken

string

A pagination token. If NextToken is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0a4883

RequestId

string

The request ID.

484256DA-D816-44D2-9D86-B6EE4D5BA78C

TagResources

array<object>

The resources and their tags.

TagResource

object

TagValue

string

The tag values.

TestValue

ResourceType

string

The type of the resource.

Valid values:

-   ALIYUN::GWS::INSTANCE: cloud computer.

ALIYUN::GWS::INSTANCE

ResourceId

string

The resource ID, which is the cloud computer ID.

ecd-ia2zw38bi6cm7\*\*\*\*

TagKey

string

The tag keys.

TestKey

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "RequestId": "484256DA-D816-44D2-9D86-B6EE4D5BA78C",
  "TagResources": [
    {
      "TagValue": "TestValue",
      "ResourceType": "ALIYUN::GWS::INSTANCE",
      "ResourceId": "ecd-ia2zw38bi6cm7****",
      "TagKey": "TestKey"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
