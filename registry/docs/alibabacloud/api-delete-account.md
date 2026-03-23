Deletes a member of the resource account type.

## Usage notes

Before you delete a member, we recommend that you call the [CheckAccountDelete](/help/en/resource-management/api-check-account-delete) and [GetAccountDeletionCheckResult](/help/en/resource-management/api-get-account-deletion-check-result) operations to check whether the member meets deletion requirements. You can call the DeleteAccount operation to delete only members that meet the deletion requirements.

After you submit a deletion request for a member, you can call the [GetAccountDeletionStatus](/help/en/resource-management/api-get-account-deletion-status) operation to query the deletion status of the member. After a member is deleted, the resources and data within the member are deleted, and you can no longer use the member to log on to the Alibaba Cloud Management Console. In addition, the member cannot be recovered. Proceed with caution. For more information about how to delete a member, see [Delete a member of the resource account type](/help/en/resource-management/resource-directory/user-guide/delete-a-member-of-the-resource-account-type).

This topic provides an example on how to call the API operation to delete the member whose Alibaba Cloud account ID is `169946124551****`.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=ResourceManager&api=DeleteAccount&type=RPC&version=2020-03-31)

## Request parameters

Parameter

Type

Required

Example

Description

Action

String

Yes

DeleteAccount

The operation that you want to perform. Set the value to DeleteAccount.

AccountId

String

Yes

169946124551\*\*\*\*

The Alibaba Cloud account ID of the member that you want to delete.

AbandonableCheckId

Array of String

No

NON\_SP\_cs

The ID of a check item that you can choose to ignore for the member deletion.

You can obtain the ID from the response of the [GetAccountDeletionCheckResult](/help/en/resource-management/api-get-account-deletion-check-result) operation.

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Example

Description

RequestId

String

009429F8-C1C0-5872-B674-A6C2333B9647

The ID of the request.

DeletionType

String

0

The type of the deletion. Valid values:

-   0: direct deletion. If the member does not have pay-as-you-go resources that are purchased within the previous 30 days, the system directly deletes the member.
-   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](/help/en/resource-management/faq-about-managing-a-member)

## Examples

Sample requests

```
https://resourcemanager.aliyuncs.com/?Action=DeleteAccount
&AccountId=169946124551****
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DeleteAccountResponse>
    <RequestId>55B22096-0D0C-542D-9A01-9B95977D3A10</RequestId>
    <DeletionType>0</DeletionType>
</DeleteAccountResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "55B22096-0D0C-542D-9A01-9B95977D3A10",
  "DeletionType" : 0
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter.AccountId

You must specify AccountId.

The error message returned because the AccountId parameter is not configured.

400

InvalidParameter.AccountId

The AccountId is invalid.

The error message returned because the value of the AccountId parameter is invalid. Specify a 16-digit ID.

404

EntityNotExists.Account

This resource directory account does not exist.

The error message returned because the member does not exist. Create such a member first.

404

EntityNotExists.ResourceDirectory

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

The error message returned because the current account has not been used to enable a resource directory. Use the account to enable a resource directory first.

409

AccountNotExist.DeleteAccount

The deletion failed. The account does not exist. Please confirm whether it has been deleted.

The error message returned because the member does not exist. Check whether the member is already deleted.

409

InvalidControlPolicyEnablementStatus

The control policy enablement status is not valid to perform this operation.

The error message returned because the enabled access control policy does not allow you to perform this operation.

409

NoLicense.ResourceDirectory

The resource directory has not enabled the delete operation.

The error message returned because the member deletion feature is disabled.

409

CallerIdentityError.DeleteAccount

Please use the RAM user or role of the management account to delete.

The error message returned because only a RAM user or RAM role that has administrator permissions within the management account can be used to perform this operation.

409

RemoveConfilctAccountAsDelegatedAdministator

You attempted to remove a member that is registered as a delegated administrator. To complete this operation, you must first deregister this account as a delegated administrator.

The error message returned because the member is a delegated administrator account of a trusted service. Remove the delegated administrator account for the trusted service first.

409

LegalEntityDifferent

The account legal entity is different from the one of the Management Account.

The error message returned because the legal entity of the current account is inconsistent with the legal entity of the management account of the resource directory.

409

MemberTypeError.DeleteAccount

You can only delete accounts of the resource account type created by Resource Directory.

The error message returned because the member is of the cloud account type. You can delete only members of the resource account type.

409

NotSupport.HasPayerAccount

This account has a payer account. Please release the financial relationship of this account first.

The error message returned because the current account is a linked account. Use the related main account to delete the trusteeship between the current account and the main account first.

409

NotSupportedOperation.DeletingAccount

The operation is not supported because the account is being deleted.

The error message returned because the current account is in the Deleting state and you are not allowed to perform this operation on the account.

409

NotSupportedOperation.CheckingAccount

The operation is not supported because the account is checking for deletion.

The error message returned because a deletion check is being performed for the current account and you are not allowed to perform this operation on the account.

409

UnknownError.Account

The deletion failed. An unknown error occurred. Please try again later.

The error message returned because an unknown error has occurred and the member fails to be deleted. Try again later.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/ResourceManager).
