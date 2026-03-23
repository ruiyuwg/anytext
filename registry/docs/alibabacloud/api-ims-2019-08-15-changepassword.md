Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.

## Operation description

**Note** This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](/help/en/ram/api-security-management-apis-setsecuritypreference) is set to `True`. The value True indicates that RAM users can manage their passwords.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ims/2019-08-15/ChangePassword)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ims/2019-08-15/ChangePassword)

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

ram:ChangePassword

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

OldPassword

string

Yes

The old password that is used to log on to the console.

mypassword

NewPassword

string

Yes

The new password that is used to log on to the console.

The password must meet the complexity requirements. For more information, see [GetPasswordPolicy](/help/en/ram/developer-reference/api-security-settings-getpasswordpolicy) .

newpassword

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE73368

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-14

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ims/2019-08-15/ChangePassword?updateTime=2024-08-14#workbench-doc-change-demo)
