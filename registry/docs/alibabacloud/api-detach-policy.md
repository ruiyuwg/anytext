Detaches a tag policy from an object.

## Operation description

### [](#)

If you use the Tag Policy feature in single-account mode, you can call this API operation to detach a tag policy from the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to detach a tag policy from the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

This topic provides an example on how to call the API operation to detach the tag policy with an ID of `p-a3381efe2fe34a75****` from the current logon account. In this example, the Tag Policy feature in single-account mode is used.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/DetachPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/DetachPolicy)

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

tag:DetachPolicy

update

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

TargetId

string

No

The ID of the object.

**Note** If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this parameter is required.

151266687691\*\*\*\*

TargetType

string

No

The type of the object. Valid values:

-   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
-   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.

**Note** If you use the Tag Policy feature in single-account mode, this parameter is optional. If you use the Tag Policy feature in multi-account mode, this parameter is required. The value of this parameter is not case-sensitive.

ACCOUNT

PolicyId

string

Yes

The ID of the tag policy.

p-a3381efe2fe34a75\*\*\*\*

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

4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NoPermission.RAM

The operator is not permission for the action in ram policy.

The account is not supported.

403

EffectivePolicy.ResourceGroupScope.TooLong

The resource group range of for effective policy is too long.

The resource group range for a valid policy is too long.

403

RDAcount.HasOpened

As the RD master or administrator, you cannot activate the tag policy service because account has already enabled it, you can only activate it once the policy service is disabled by the aforementioned RD account.

The member account of the resource directory has a tag policy. You must disable the member account before you can activate the multi-account mode.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
