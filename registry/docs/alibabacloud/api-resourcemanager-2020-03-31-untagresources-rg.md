Removes tags from resource groups or the members in a resource directory.

## Operation description

This topic provides an example on how to call the API operation to remove the tag whose tag key is `k1` from the resource group whose ID is `rg-aek2dpwyrfr****`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/UntagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/UntagResources)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

All

boolean

No

Specifies whether to remove all tags from the specified resource groups or members. Valid values:

-   false (default value)
-   true

false

ResourceId

array

Yes

The ID of a resource group or member.

You can specify a maximum of 50 IDs.

string

Yes

The ID of a resource group or member.

You can specify a maximum of 50 IDs.

rg-aek2dpwyrfr\*\*\*\*

TagKey

array

No

A tag key.

You can specify a maximum of 20 tag keys.

**Note** If you set the `All` parameter to `true`, you do not need to configure this parameter.

string

No

A tag key.

You can specify a maximum of 20 tag keys.

**Note** If you set the `All` parameter to `true`, you do not need to configure this parameter.

k1

ResourceType

string

No

The type of the objects from which you want to remove tags. Valid values:

-   ResourceGroup: resource group. This is the default value.
-   Account: member.

**Note** This parameter is required if you remove tags from members in a resource directory.

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
