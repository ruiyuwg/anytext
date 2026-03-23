Queries tags that are added to specified resources.

## Operation description

**Note** The maximum number of times that each user can call this operation per second is 10.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeTagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeTagResources)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:DescribeTagResources

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

ResourceType

string

Yes

The resource type. Set the value to **DOMAIN**.

DOMAIN

ResourceId

array

Yes

The IDs of the resources. You can specify up to 50 IDs in each request.

string

Yes

The ID of the resource. The value is an accelerated domain name.

example.com

Tag

array<object>

No

The tags. You can specify up to 20 tags in each request.

object

No

Key

string

No

The key of the tag. Valid values of N: **1** to **20**.

key

Value

string

No

The value of the tag. Valid values of N: **1** to **20**.

value

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

34AB41F1-04A5-496F-8C8D-634BDBE6A9FB

TagResources

array<object>

The tags that are attached to the specified resource.

TagResource

object

ResourceId

string

The ID of the resource.

example.com

Tag

array<object>

The key-value pair of the tag.

Tag

object

Key

string

The key of the tag.

env

Value

string

The value of the tag.

product

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "34AB41F1-04A5-496F-8C8D-634BDBE6A9FB",
  "TagResources": [
    {
      "ResourceId": "example.com",
      "Tag": [
        {
          "Key": "env",
          "Value": "product"
        }
      ]
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeTagResources?updateTime=2024-12-18#workbench-doc-change-demo)
