Creates predefined tags.

## Operation description

### [](#)

A preset tag is a tag that you create in advance and is available for the resources in all regions. You can create preset tags in the stage of tag planning and add them to specific resources in the stage of tag implementation. When you create a preset tag, you can specify only the tag key. You can specify a tag value in the future.

This topic provides an example on how to call the API operation to create a preset tag whose tag key is `Environment` to indicate the business environment.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/CreateTags)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/CreateTags)

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

tag:CreateTags

create

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

**Note** Only `cn-hangzhou` is supported.

cn-hangzhou

TagKeyValueParamList

array<object>

Yes

The information about the tags.

object

Yes

The key of tag N.

The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.

Valid values of N: 1 to 10.

Key

string

Yes

The value of tag N.

The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.

Valid values of N: 1 to 10.

Environment

TagValueParamList

array<object>

No

The information about the tag values.

object

No

The value of tag N.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

Valid values of N: 1 to 10.

Value

string

No

The value of tag N.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

Valid values of N: 1 to 10.

test

Description

string

No

The description of the value for tag N.

Valid values of N: 1 to 10.

Test environment

Description

string

No

The description of the key for tag N.

Valid values of N: 1 to 10.

Business environment

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

RequestId

string

The request ID.

94E16BB6-3FB6-1297-B5B2-ED2250F437CD

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "94E16BB6-3FB6-1297-B5B2-ED2250F437CD"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MetaTagKeyHasValue

The specified TagKey already bind tag value

\-

403

WrongEndpoint

Only the central endpoint supports the create and delete operation of meta tag.

Only center endpoint supports meta tag create & delete operation.

403

InvalidParameter.Key

The Key is invalid.

\-

403

InvalidParameter.Value

The Value is invalid.

\-

403

NoPermission.Operator

The user is not authorized to operate on the specified resource.

The user is not authorized to operate on the specified resource.

403

MetaTagKey.BindingResources

Binding resource exists for tag key.

Binding resource exists for tag key.

403

MetaTagKeyNotFound

The meta tag key is not found.

\-

404

MissingParameter.TagKeyValueParamList

The parameter TagKeyValueParamList must not be null.

You must specify TagKeyValueParamList.

404

MissingParameter.Key

The Key must not be empty.

\-

404

MissingParameter.Value

The Value must not be empty.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
