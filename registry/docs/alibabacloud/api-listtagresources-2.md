Queries the tags that are added to resource groups or the members in a resource directory.

## Operation description

This topic provides an example on how to call the API operation to query the tags that are added to the resource group with an ID of `rg-aekz6bre2uq****`. The response shows that only the `k1:v1` tag is added to the resource group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListTagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListTagResources)

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

resourcemanager:ListTagResources

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

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResults

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

k1

Value

string

No

A tag value.

v1

ResourceId

array

No

The resource ID.

string

No

The ID of a resource group or member. This parameter specifies a filter condition for the query.

**Note** If you want to query the tags that are added to the members in a resource directory, you must configure both the `ResourceId.N` and `ResourceType` parameters and set the `ResourceType` parameter to `Account` in your request.

rg-aekz6bre2uq\*\*\*\*

ResourceType

string

No

The type of the objects whose tags you want to query. This parameter specifies a filter condition for the query. Valid values:

-   ResourceGroup: resource group. This is the default value.
-   Account: member.

ResourceGroup

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

Indicates whether the next query is required.

-   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

RequestId

string

The ID of the request.

8054B059-6B36-53BF-AA45-B8C9A0ED05AB

TagResources

array<object>

The tags.

TagResource

object

TagValue

string

The tag value.

k1

ResourceId

string

The ID of the resource group or member.

rg-aekz6bre2uq\*\*\*\*

TagKey

string

The tag key.

k1

ResourceType

string

The type of the object whose tags are queried. Valid values:

-   resourcegroup: resource group
-   Account: member

resourcegroup

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "RequestId": "8054B059-6B36-53BF-AA45-B8C9A0ED05AB",
  "TagResources": [
    {
      "TagValue": "k1",
      "ResourceId": "rg-aekz6bre2uq****",
      "TagKey": "k1",
      "ResourceType": "resourcegroup"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
