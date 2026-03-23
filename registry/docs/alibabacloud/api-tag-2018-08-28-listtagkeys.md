Queries tag keys.

## Operation description

This topic provides an example on how to call the API operation to query the tag keys in the `cn-hangzhou` region. The response shows that the following tag keys exist: `team`, `k1`, and `k2`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTagKeys)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTagKeys)

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

tag:ListTagKeys

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

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

PageSize

integer

No

The number of tag keys to return on each page.

Maximum value: 1000. Default value: 50.

50

Category

string

No

The type of the resource tags. This parameter specifies a filter condition for the query. Valid values:

-   all (default value)
-   custom
-   system

**Note** The value of this parameter is not case-sensitive.

all

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

TagFilter.Key

string

No

The tag key for a fuzzy query.

This parameter is used together with the `FuzzyType` parameter.

team

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

DC09A6AA-2713-4E10-A2E9-E6C5C43A8842

Keys

array<object>

The information of the tag keys.

Key

object

The information of the tag keys.

Key

string

The tag key.

team

Category

string

The type of the resource tag. Valid values:

-   custom
-   system

custom

Description

string

The description of the tag key.

Business team

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "RequestId": "DC09A6AA-2713-4E10-A2E9-E6C5C43A8842",
  "Keys": {
    "Key": [
      {
        "Key": "team",
        "Category": "custom",
        "Description": "Business team"
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

InvalidParameter.Category

The specified Category is invalid. Valid values are Custom and System.

The specified Category is invalid. Valid values are Custom and System.

403

InvalidParameter.ResourceType

The ResourceType parameter is invalid.

The ResourceType parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
