Enables a resource directory. After you enable a resource directory, the system automatically creates a root folder and sets the current account as the enterprise management account of the resource directory. The enterprise management account has all administrative permissions on this resource direc

## Operation description

**Note**

-   An account can be used to enable a resource directory only after it passes enterprise real-name verification. An account that only passed individual real-name verification cannot be used to enable a resource directory.
-   We recommend that you only use the enterprise management account as the administrator of the resource directory. Do not use the enterprise management account to purchase cloud resources.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/InitResourceDirectory)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/InitResourceDirectory)

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

resourcemanager:InitResourceDirectory

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

The current API does not require request parameters

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

The ID of the root folder.

r-Zo\*\*\*\*

MasterAccountId

string

The ID of the enterprise management account.

172841235500\*\*\*\*

MasterAccountName

string

The name of the enterprise management account.

aliyun-\*\*\*\*

ResourceDirectoryId

string

The ID of the resource directory.

rd-Ss\*\*\*\*

CreateTime

string

The time when the resource directory was enabled.

2019-02-18T15:32:10.473Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CD76D376-2517-4924-92C5-DBC52262F93A",
  "ResourceDirectory": {
    "RootFolderId": "r-Zo****",
    "MasterAccountId": "172841235500****",
    "MasterAccountName": "aliyun-****",
    "ResourceDirectoryId": "rd-Ss****",
    "CreateTime": "2019-02-18T15:32:10.473Z"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

409

NotSupport.AccountInAnotherResourceDirectory

The specified account is an Alibaba Cloud account or already exists in another resource directory.

\-

409

EnterpriseRealNameVerificationError

The specified account does not pass enterprise real-name verification. We recommend you first complete enterprise real-name verification for the account.

The specified account does not pass enterprise real-name verification. We recommend you first complete enterprise real-name verification for the account.

409

Invalid.AccountType

The specified profile type of account is invalid.

The specified AccountType is invalid.

409

Invalid.EnterpriseName

You must specify the enterprise name.

You must specify the enterprise name.

409

NotSupport.Account.Site

The caller is not a China site account, which is not supported.

The specified account does not reside in the current region. You must specify a valid account.

409

EntityAlreadyExists.ResourceDirectory

The resource directory for the account is already enabled. We recommend that you do not enable the resource directory again.

The resource directory for the account is already enabled. We recommend that you do not enable the resource directory again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
