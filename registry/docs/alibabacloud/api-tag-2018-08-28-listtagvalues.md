Queries the tag values of a tag key.

## Operation description

This topic provides an example on how to call the API operation to query the values of the tag key `k1` in the `cn-hangzhou` region. The response shows that the value of the tag key `k1` is `v1`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTagValues)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTagValues)

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

tag:ListTagValues

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

The region ID.

For more information about region IDs, see [Endpoints](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-endpoint) .

cn-hangzhou

Key

string

Yes

The tag key. This parameter specifies a filter condition for the query.

k1

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

PageSize

integer

No

The number of tag values to return on each page.

Maximum value: 1000. Default value: 50.

50

ResourceType

string

No

The resource type. This parameter specifies a filter condition for the query.

Format: `ALIYUN::${ProductCode}::${ResourceType}`. All letters in the value of this parameter must be in uppercase.

-   `ProductCode`: the service code. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listsupportresourcetypes) operation.
-   `ResourceType`: the resource type. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listsupportresourcetypes) operation.

ALIYUN::ECS::INSTANCE

QueryType

string

No

The category of the tags. This parameter specifies a filter condition for the query. Valid values:

-   ResourceTag: resource tags, including custom and system tags. This is the default value.
-   MetaTag: preset tags.

**Note** The value of this parameter is not case-sensitive.

ResourceTag

FuzzyType

string

No

The type of the query. Valid values:

-   EQUAL (default): exact match
-   PREFIX: prefix-based fuzzy match

EQUAL

TagFilter.Value

string

No

The tag value for a fuzzy query.

This parameter is used together with the `FuzzyType` parameter.

v1

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

NextToken

string

Indicates whether the next query is required. The value of this parameter may be empty.

-   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

RequestId

string

The ID of the request.

8989CA7E-D2E0-4B6D-8282-311106E80150

Values

array

The information of the tag values.

Value

string

The information of the tag values.

v1

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "RequestId": "8989CA7E-D2E0-4B6D-8282-311106E80150",
  "Values": {
    "Value": [
      "v1"
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

FuzzyQuery.NotSupport

The fuzzy query is not supported.

\-

403

Invalid.NextToken

The parameter NextToken is invalid.

The parameter NextToken is invalid.

403

NoPermission.Operator

The user is not authorized to operate on the specified resource.

The user is not authorized to operate on the specified resource.

403

NoPermissionKey.Operator

You are not authorized to operate the tag key.

You are not authorized to operate the tag key.

403

InvalidParameter.ResourceType

The ResourceType parameter is invalid.

The ResourceType parameter is invalid.

403

InvalidParameter.TagKey

The Tag.N.Key parameter is invalid.

The Tag.N.Key parameter is invalid.

403

MetaTagKeyNotFound

The meta tag key is not found.

\-

404

Missing.TagKey

Tag.N.Value has been specified and you must specify Tag.N.Key.

Tag.N.Value has been specified and you must specify Tag.N.Key.

404

MissingParameter.TagKey

You must specify TagKey.

You must specify TagKey.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
