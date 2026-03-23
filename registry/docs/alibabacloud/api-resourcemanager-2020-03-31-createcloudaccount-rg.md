Creates a cloud account.

## Operation description

A resource directory supports two types of member accounts: resource accounts and cloud accounts.

-   Resource account (recommended): A resource account is only used as a resource container and fully depends on a resource directory. Such member accounts are secure and easy-to-create. For more information about how to create a resource account, see [CreateResourceAccount](/help/en/resource-management/api-createresourceaccount) .

**Note** A resource account can be upgraded to a cloud account. For more information, see [PromoteResourceAccount](/help/en/resource-management/api-promoteresourceaccount) .

-   Cloud account: A cloud account has all the features of an Alibaba Cloud account, including root permissions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CreateCloudAccount)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/CreateCloudAccount)

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

resourcemanager:CreateCloudAccount

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

DisplayName

string

Yes

The display name of the member account.

The name must be 2 to 50 characters in length and can contain letters, digits, underscores (\_), periods (.), and hyphens (-).

The name must be unique in the current resource directory.

admin-\*\*\*\*

ParentFolderId

string

No

The ID of the parent folder.

fd-bVaRIG\*\*\*\*

Email

string

Yes

The email address used to log on to the cloud account.

someone@example.com

PayerAccountId

string

No

The ID of the settlement account. If you do not specify this parameter, the current account is used for settlement.

12323344\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Account

object

The information of the member account.

Status

string

The status of the member account. Valid values:

-   CreateSuccess: The member account is created.
-   CreateVerifying: The creation of the member account is under confirmation.
-   CreateFailed: The member account failed to be created.
-   CreateExpired: The creation of the member account expired.
-   CreateCancelled: The creation of the member account is canceled.
-   PromoteVerifying: The upgrade of the member account is under confirmation.
-   PromoteFailed: The member account failed to be upgraded.
-   PromoteExpired: The upgrade of the member account expired.
-   PromoteCancelled: The upgrade of the member account is canceled.
-   PromoteSuccess: The member account is upgraded.
-   InviteSuccess: The owner of the member account accepted the invitation.
-   Removed: The member account is removed from the resource directory.

CreateVerifying

Type

string

The type of the member account. The value CloudAccount indicates that the member account is a cloud account.

CloudAccount

DisplayName

string

The display name of the member account.

admin-\*\*\*\*

FolderId

string

The ID of the folder.

fd-bVaRIG\*\*\*\*

ResourceDirectoryId

string

The ID of the resource directory.

rd-k3\*\*\*\*

RecordId

string

The account record ID.

06950264-3f0d-4ca9-82dd-6ee7a3d3\*\*\*\*

AccountId

string

The ID of the member account.

12323344\*\*\*\*

JoinMethod

string

The way in which the member account joined the resource directory. Valid values:

-   invited: The member account is invited to join the resource directory.
-   created: The member account is directly created in the resource directory.

created

ModifyTime

string

The time when the member account was modified.

2015-01-23T12:33:18Z

AccountName

string

The name of the member account.

someone@example.com

RequestId

string

The ID of the request.

9B34724D-54B0-4A51-B34D-4512372FE1BE

## Examples

Sample success responses

`JSON`format

```
{
  "Account": {
    "Status": "CreateVerifying",
    "Type": "CloudAccount",
    "DisplayName": "admin-****",
    "FolderId": "fd-bVaRIG****",
    "ResourceDirectoryId": "rd-k3****",
    "RecordId": "06950264-3f0d-4ca9-82dd-6ee7a3d3****",
    "AccountId": "12323344****",
    "JoinMethod": "created",
    "ModifyTime": "2015-01-23T12:33:18Z",
    "AccountName": "someone@example.com"
  },
  "RequestId": "9B34724D-54B0-4A51-B34D-4512372FE1BE"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter.Account.DisplayName

You must specify DisplayName.

You must specify the display name.

400

InvalidParameter.Account.DisplayName

The DisplayName of account is invalid.

The display name is invalid. The display name can contain only letters, digits, underscores (\_), periods (.), and hyphens (-).

400

InvalidParameter.Account.DisplayName.Length

The DisplayName of the account exceeds the length limit.

The display name of account exceeds the length limit. The name must be 2 to 50 characters in length.

400

InvalidParameter.ParentFolderId

The ParentFolderId is invalid.

The specified ID of the parent folder is invalid. The ID must either be a 6-character string that starts with r- or a 10-character string that starts with fd-. The ID can contain letters and digits.

400

MissingParameter.Email

You must specify Email.

The specified email address is invalid. You must specify a valid email address.

400

InvalidParameter.Email

The Email is invalid.

The format of the specified email address is invalid.

404

EntityNotExists.ResourceDirectory

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

404

EntityNotExists.Folder

The resource directory folder does not exist.

The specified resource directory does not exist. We recommend that you first create a resource directory.

409

LimitExceeded.Account

The maximum number of member accounts in a resource directory exceeds the limit.

The maximum number of member accounts in a resource directory exceeds the limit.

409

InvalidParameter.Account.DisplayName.AlreadyUsed

The displayname of account has been used.

The display name of account has been used. You must specify a valid display name.

409

EntityAlreadyExists.ResourceDirectory.Account

The email address that the system generates when you create a member account already exists. Try again later.

The email address that the system generates when you create a member account already exists. Try again later.

409

InvalidParameter.Email.AlreadyUsed

The email has been used.

The specified email address already exists. You must specify a valid email address.

409

Invalid.PayRelation

Failed to create a member. The specified billing account is unavailable. Please change to another billing account and try again.

Failed to create a member. The specified billing account is unavailable. Please change to another billing account and try again.

409

NotSupport.PayerAccountInAnotherResourceDirectory

The specified settlement account does not exist in the resource directory. You must specify a valid settlement account.

\-

409

CreateAccountDisabled

This resource directory is denied to create account.

\-

409

PaymentAccountEnterpriseVerifyError

The type of the payment account is not enterprise verified.

The type of the payment account must be enterprise verified.

409

PaymentAccountFinancialRelationshipVerifyError

The payment account must not be the beneficiary account from other financial relationships.

The payment account must not be the beneficiary account from other financial relationships.

409

PaymentAccountEnterpriseTypeError

The type of the payment account is not enterprise.

The type of the payment account must be enterprise.

409

PaymentAccountFinancialRelationshipsChangeFrequencyVerifyError

The financial relationship of payment account changes too frequently. Please try again later.

The financial relationship of payment account changes too frequently. Please try again later.

409

MemberAccountVirtualCloudOperatorVerifyError

The type of the member account must not be virtual operator.

\-

409

MemberAccountResellerVerifyError

The type of the member account must not be reseller.

\-

409

PaymentAccountVirtualCloudOperatorVerifyError

The type of the payment account must not be virtual operator.

The type of the member account must not be virtual operator.

409

PaymentAccountResellerVerifyError

The type of the payment account must not be reseller.

The type of the member account must not be reseller.

409

PaymentAccountCreditIdentityTypeError

The identity of the payment account is not credit.

\-

409

InconsistentEnterpriseNameError

The enterprise name of the payment account and the member account must be consistent.

\-

409

PaymentAccountEnterpriseInvoiceError

No enterprise invoice header information is set for the payment account.

No enterprise invoice header information is set for the payment account.

409

UnknownFinancialError

An unknown financial error occurred.

An unknown financial error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).
