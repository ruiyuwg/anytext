Deletes a preset tag.

## Operation description

This topic provides an example on how to call the API operation to delete the preset tag whose tag key is `Environment` and tag value is `test`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/DeleteTag)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/DeleteTag)

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

tag:DeleteTag

delete

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

Key

string

Yes

The tag key.

If no tag value is associated with a tag key, you can specify the `Key` parameter without specifying the Value parameter to delete the tag key. Otherwise, you must specify both the `Key` and `Value` parameters to delete a preset tag.

Environment

Value

string

No

The tag value.

test

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

6E27F22C-EDA3-132E-A53F-77DE3BC2343D

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6E27F22C-EDA3-132E-A53F-77DE3BC2343D"
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

NoPermission.Operator

The user is not authorized to operate on the specified resource.

The user is not authorized to operate on the specified resource.

403

MetaTagKeyNotFound

The meta tag key is not found.

\-

404

MissingParameter.Key

The Key must not be empty.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-01-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/DeleteTag?updateTime=2022-01-25#workbench-doc-change-demo)
