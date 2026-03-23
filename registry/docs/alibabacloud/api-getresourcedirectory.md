Queries the information of a resource directory. If you use a management account to call this API operation, the system returns the information of the resource directory that is enabled by using the management account. If you use a member to call this operation, the system returns the information of

## Operation description

This topic provides an example on how to use a management account to call the API operation to query the information of the resource directory that is enabled by using the management account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetResourceDirectory)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetResourceDirectory)

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

resourcemanager:GetResourceDirectory

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

The current API does not require request parameters

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

CD76D376-2517-4924-92C5-DBC52262F93A

ResourceDirectory

object

The information of the resource directory.

RootFolderId

string

The ID of the Root folder.

r-Zo\*\*\*\*

ResourceDirectoryId

string

The ID of the resource directory.

rd-St\*\*\*\*

CreateTime

string

The time when the resource directory was enabled.

2019-02-18T15:32:10.473Z

MasterAccountId

string

The ID of the management account.

172845045600\*\*\*\*

MasterAccountName

string

The name of the management account.

aliyun-admin

ControlPolicyStatus

string

The status of the Control Policy feature. Valid values:

-   Enabled: The feature is enabled.
-   PendingEnable: The feature is being enabled.
-   Disabled: The feature is disabled.
-   PendingDisable: The feature is being disabled.

Enabled

MemberDeletionStatus

string

The status of the member deletion feature. Valid values:

-   Enabled: The feature is enabled. You can call the [DeleteAccount](/help/en/resource-management/api-delete-account) operation to delete members of the resource account type.
-   Disabled: The feature is disabled. You cannot delete members of the resource account type.

Enabled

IdentityInformation

string

The real-name verification information.

\\\*\\\*\\\* Co., Ltd.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CD76D376-2517-4924-92C5-DBC52262F93A",
  "ResourceDirectory": {
    "RootFolderId": "r-Zo****",
    "ResourceDirectoryId": "rd-St****",
    "CreateTime": "2019-02-18T15:32:10.473Z",
    "MasterAccountId": "172845045600****",
    "MasterAccountName": "aliyun-admin",
    "ControlPolicyStatus": "Enabled",
    "MemberDeletionStatus": "Enabled",
    "IdentityInformation": "\\*\\*\\* Co., Ltd."
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

ResourceDirectoryNotInUse

The specified account is not an Alibaba Cloud account or a member account of the resource directory.

The specified account is not an Alibaba Cloud account or a member account of the resource directory.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
