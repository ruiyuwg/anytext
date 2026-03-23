Queries a list of tag policies that are attached to an object.

## Operation description

If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag policies that are attached to the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag policies that are attached to the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

This topic provides an example on how to call the API operation to query the tag policies that are attached to the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag policy is attached to the current logon account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListPoliciesForTarget)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListPoliciesForTarget)

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

tag:ListPoliciesForTarget

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

No

The region ID. Set the value to cn-shanghai.

cn-shanghai

MaxResult

integer

No

The number of entries to return on each page.

Default value: 50. Maximum value: 1000.

50

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

TargetId

string

No

The ID of the object. This parameter specifies a filter condition for the query.

154950938137\*\*\*\*

TargetType

string

No

The type of the object. This parameter specifies a filter condition for the query. Valid values:

-   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
-   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.

**Note** The value of this parameter is not case-sensitive.

ACCOUNT

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Data

array<object>

The tag policies that are attached to the object.

Data

object

The tag policies that are attached to the object.

PolicyId

string

The ID of the tag policy.

p-de62a0bf400e4b69\*\*\*\*

PolicyName

string

The name of the tag policy.

example

PolicyDesc

string

The description of the tag policy.

This is a tag policy example.

PolicyContent

string

The document of the tag policy.

{\\"tags\\":{\\"CostCenter\\":{\\"tag\_value\\":{\\"@@assign\\":\[\\"Beijing\\",\\"Shanghai\\"\]},\\"tag\_key\\":{\\"@@assign\\":\\"CostCenter\\"}}}}

UserType

string

The mode of the Tag Policy feature. Valid values:

-   USER: single-account mode
-   RD: multi-account mode

For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

USER

RequestId

string

The ID of the request.

8C962146-AB38-516C-818C-695D4E9F2EA2

NextToken

string

Indicates whether the next query is required.

-   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Data": [
    {
      "PolicyId": "p-de62a0bf400e4b69****",
      "PolicyName": "example",
      "PolicyDesc": "This is a tag policy example.",
      "PolicyContent": "{\\\"tags\\\":{\\\"CostCenter\\\":{\\\"tag_value\\\":{\\\"@@assign\\\":[\\\"Beijing\\\",\\\"Shanghai\\\"]},\\\"tag_key\\\":{\\\"@@assign\\\":\\\"CostCenter\\\"}}}}",
      "UserType": "USER"
    }
  ],
  "RequestId": "8C962146-AB38-516C-818C-695D4E9F2EA2",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
