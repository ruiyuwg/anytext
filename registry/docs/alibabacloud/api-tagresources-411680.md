Adds tags to resource groups or the members in a resource directory.

## Operation description

This topic provides an example on how to call the API operation to add the tag `k1:v1` to the resource group with an ID of `rg-aekz6bre2uq****`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/TagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/TagResources)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ResourceId

array

Yes

The ID of a resource group or member.

string

Yes

The ID of a resource group or member.

You can specify a maximum of 50 IDs.

rg-aekz6bre2uq\*\*\*\*

Tag

array<object>

Yes

The tags.

object

Yes

The tags.

Key

string

No

A tag key.

A tag key can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.

k1

Value

string

No

A tag value.

A tag value can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:`.

v1

ResourceType

string

No

The type of the objects to which you want to add tags. Valid values:

-   ResourceGroup : resource group. This is the default value.
-   Account: member.

**Note** This parameter is required if you add tags to members in a resource directory.

ResourceGroup

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
