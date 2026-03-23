## API standard and pre-built SDKs in multi-language

This product (`ResourceManager/2020-03-31`) OpenAPI adopts an RPC\-style signature mechanism. For implementation details, please refer to the [Signature Mechanism documentation](/help/en/sdk/product-overview/v3-request-structure-and-signature).

To streamline development, we provide official SDKs for major programming languages. [Using the SDK](https://api.alibabacloud.com/api-tools/sdk/ResourceManager?version=2020-03-31) allows you to call APIs directly without worrying about low-level details such as request signatures, significantly lowering the barrier to entry and reducing integration complexity.

## Custom signature

If your use case requires direct API integration with custom signatures, consult our technical support team first. Join our DingTalk support group (147535001692) to receive expert guidance.

## Before you begin

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, create a [Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Resource directory

API

Title

Description

[EnableResourceDirectory](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-enableresourcedirectory-rg)

EnableResourceDirectory

Enables a resource directory.

[SendVerificationCodeForEnableRD](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-sendverificationcodeforenablerd-rg)

SendVerificationCodeForEnableRD

Sends a verification code to the mobile phone number bound to a newly created account when you use the account to enable a resource directory.

[GetResourceDirectory](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getresourcedirectory-rg)

GetResourceDirectory

Queries the information of a resource directory. If you use a management account to call this API operation, the system returns the information of the resource directory that is enabled by using the management account. If you use a member to call this operation, the system returns the information of

[DestroyResourceDirectory](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-destroyresourcedirectory-rg)

DestroyResourceDirectory

Disables a resource directory. This operation cannot be undone. Therefore, exercise caution when you perform it.

## Folders

API

Title

Description

[CreateFolder](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createfolder-rg)

CreateFolder

Creates a folder.

[GetFolder](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getfolder-rg)

GetFolder

Queries the information of a folder.

[UpdateFolder](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updatefolder-rg)

UpdateFolder

Changes the name of a folder.

[DeleteFolder](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deletefolder-rg)

DeleteFolder

Deletes a folder.

[ListFoldersForParent](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listfoldersforparent-rg)

ListFoldersForParent

Queries the information of all subfolders of a folder.

[ListAncestors](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listancestors-rg)

ListAncestors

Queries the information of all the parent folders of a specified folder. The system returns the information of the folders based on their top-down hierarchy.

## Members

API

Title

Description

[CreateResourceAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createresourceaccount-rg)

CreateResourceAccount

Creates a member of the resource account type.

[UpdateAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updateaccount-rg)

UpdateAccount

Changes the display name of a member, or switches the type of a member.

[GetAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getaccount-rg)

GetAccount

Queries the information of a member.

[GetPayerForAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getpayerforaccount-rg)

GetPayerForAccount

Queries the information of a settlement account.

[ListAccounts](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listaccounts-rg)

ListAccounts

Queries all the members in a resource directory.

[ListAccountsForParent](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listaccountsforparent-rg)

ListAccountsForParent

Queries the information of members in a folder.

[MoveAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveaccount-rg)

MoveAccount

Moves a member account from a folder to another.

[RemoveCloudAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-removecloudaccount-rg)

RemoveCloudAccount

Removes a member of the cloud account type. After you remove a member of the cloud account type, the member is no longer managed by the management account of the resource directory to which the member belonged.

[BindSecureMobilePhone](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-bindsecuremobilephone-rg)

BindSecureMobilePhone

Binds a mobile phone number to a member of the resource account type in a resource directory for security purposes.

[SendVerificationCodeForBindSecureMobilePhone](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-sendverificationcodeforbindsecuremobilephone-rg)

SendVerificationCodeForBindSecureMobilePhone

Sends a verification code to the mobile phone number that you want to bind to a resource account in a resource directory for security purposes.

[ChangeAccountEmail](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-changeaccountemail-rg)

ChangeAccountEmail

Changes the email address that is bound to a member.

[RetryChangeAccountEmail](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-retrychangeaccountemail-rg)

RetryChangeAccountEmail

Resends a verification email for the email address change of a member.

[CancelChangeAccountEmail](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-cancelchangeaccountemail-rg)

CancelChangeAccountEmail

Cancels the email address change of a member.

[CheckAccountDelete](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-checkaccountdelete-rg)

CheckAccountDelete

Performs a member deletion check.

[DeleteAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deleteaccount-rg)

DeleteAccount

Deletes a member of the resource account type.

[SetMemberDeletionPermission](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-setmemberdeletionpermission-rg)

SetMemberDeletionPermission

Enables or disables the member deletion feature.

[GetAccountDeletionStatus](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getaccountdeletionstatus-rg)

GetAccountDeletionStatus

[GetAccountDeletionCheckResult](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getaccountdeletioncheckresult-rg)

GetAccountDeletionCheckResult

Queries the result of a member deletion check.

[InviteAccountToResourceDirectory](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-inviteaccounttoresourcedirectory-rg)

InviteAccountToResourceDirectory

Invites an account to join a resource directory.

[GetHandshake](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-gethandshake-rg)

GetHandshake

Queries the information of an invitation.

[CancelHandshake](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-cancelhandshake-rg)

CancelHandshake

Cancels an invitation.

[ListHandshakesForAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listhandshakesforaccount-rg)

ListHandshakesForAccount

Queries the invitations that are associated with an account.

[ListHandshakesForResourceDirectory](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listhandshakesforresourcedirectory-rg)

ListHandshakesForResourceDirectory

Queries invitations in a resource directory.

[AcceptHandshake](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-accepthandshake-rg)

AcceptHandshake

Accepts an invitation.

[DeclineHandshake](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-declinehandshake-rg)

DeclineHandshake

Rejects an invitation.

## Access control policies

API

Title

Description

[EnableControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-enablecontrolpolicy-rg)

EnableControlPolicy

Enables the Control Policy feature.

[GetControlPolicyEnablementStatus](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getcontrolpolicyenablementstatus-rg)

GetControlPolicyEnablementStatus

Queries the status of the Control Policy feature.

[DisableControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-disablecontrolpolicy-rg)

DisableControlPolicy

Disables the Control Policy feature.

[CreateControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createcontrolpolicy-rg)

CreateControlPolicy

Creates a custom access control policy.

[GetControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getcontrolpolicy-rg)

GetControlPolicy

Queries the details of an access control policy.

[UpdateControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updatecontrolpolicy-rg)

UpdateControlPolicy

Updates a custom access control policy.

[DeleteControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deletecontrolpolicy-rg)

DeleteControlPolicy

Deletes a custom control policy.

[AttachControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-attachcontrolpolicy-rg)

AttachControlPolicy

Attaches an access control policy.

[DetachControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-detachcontrolpolicy-rg)

DetachControlPolicy

Detaches an access control policy.

[ListControlPolicies](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listcontrolpolicies-rg)

ListControlPolicies

Queries access control policies.

[ListControlPolicyAttachmentsForTarget](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listcontrolpolicyattachmentsfortarget-rg)

ListControlPolicyAttachmentsForTarget

Queries the access control policies that are attached to a folder or member.

[ListTargetAttachmentsForControlPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listtargetattachmentsforcontrolpolicy-rg)

ListTargetAttachmentsForControlPolicy

Queries the objects to which a specific control policy is attached.

## Trusted services

API

Title

Description

[ListTrustedServiceStatus](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listtrustedservicestatus-rg)

ListTrustedServiceStatus

Queries the trusted services that are enabled within an enterprise management account or delegated administrator account.

[RegisterDelegatedAdministrator](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-registerdelegatedadministrator-rg)

RegisterDelegatedAdministrator

Specifies a member in a resource directory as a delegated administrator account of a trusted service.

[DeregisterDelegatedAdministrator](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deregisterdelegatedadministrator-rg)

DeregisterDelegatedAdministrator

Removes a delegated administrator account for a trusted service.

[ListDelegatedAdministrators](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listdelegatedadministrators-rg)

ListDelegatedAdministrators

Queries delegated administrator accounts.

[ListDelegatedServicesForAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listdelegatedservicesforaccount-rg)

ListDelegatedServicesForAccount

Queries the trusted services for which a member is specified as a delegated administrator account.

## Resource groups

API

Title

Description

[CreateResourceGroup](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createresourcegroup-rg)

CreateResourceGroup

Creates a resource group.

[DeleteResourceGroup](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deleteresourcegroup-rg)

DeleteResourceGroup

Deletes a resource group.

[UpdateResourceGroup](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updateresourcegroup-rg)

UpdateResourceGroup

Updates the basic information of a resource group.

[ListResourceGroups](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listresourcegroups-rg)

ListResourceGroups

Queries resource groups.

[ListResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listresources-rg)

ListResources

Queries resources that can be accessed by the current account in resource groups.

[GetResourceGroup](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getresourcegroup-rg)

GetResourceGroup

Queries the information of a resource group.

[MoveResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-moveresources-rg)

MoveResources

Moves resources from one resource group to another. You can move multiple resources that reside in different regions, are used by different Alibaba Cloud services, or belong to different resource groups.

[EnableAutoGrouping](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-enableautogrouping-rg)

EnableAutoGrouping

Enables the Automatic Resource Transfer feature. After the feature is enabled, you can create, update, delete, and query transfer rules.

[DisableAutoGrouping](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-disableautogrouping-rg)

DisableAutoGrouping

Disables the Automatic Resource Transfer feature. After the feature is disabled, existing custom transfer rules and existing transfer rules for associated resources are deleted. However, existing relationships between resources and resource groups are not affected. If you still want to use this feature, you can enable it again 1 minute later.

[UpdateAutoGroupingConfig](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updateautogroupingconfig-rg)

UpdateAutoGroupingConfig

Updates the configuration of the Automatic Resource Transfer feature. You can update only the configuration of the Transfer Existing Associated Resources feature.

[GetAutoGroupingStatus](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getautogroupingstatus-rg)

GetAutoGroupingStatus

Queries the status of the Automatic Resource Transfer feature.

[CreateAutoGroupingRule](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createautogroupingrule-rg)

CreateAutoGroupingRule

Creates a transfer rule. Custom transfer rules and transfer rules for associated resources are supported.

[DeleteAutoGroupingRule](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deleteautogroupingrule-rg)

DeleteAutoGroupingRule

Deletes a transfer rule.

[UpdateAutoGroupingRule](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updateautogroupingrule-rg)

UpdateAutoGroupingRule

Updates a transfer rule.

[ListAutoGroupingRules](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listautogroupingrules-rg)

ListAutoGroupingRules

Queries a list of transfer rules.

[GetAutoGroupingRule](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getautogroupingrule-rg)

GetAutoGroupingRule

Queries the information about a transfer rule.

[EnableAssociatedTransfer](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-enableassociatedtransfer-rg)

EnableAssociatedTransfer

Enables the Transfer Associated Resources feature.

[DisableAssociatedTransfer](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-disableassociatedtransfer-rg)

DisableAssociatedTransfer

Disables the Transfer Associated Resources feature.

[UpdateAssociatedTransferSetting](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updateassociatedtransfersetting-rg)

UpdateAssociatedTransferSetting

Updates the settings of the Transfer Associated Resources feature.

[ListAssociatedTransferSetting](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listassociatedtransfersetting-rg)

ListAssociatedTransferSetting

Queries the settings of the Transfer Associated Resources feature.

[GetResourceGroupResourceCounts](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getresourcegroupresourcecounts-rg)

GetResourceGroupResourceCounts

Queries the number of resources in a visible resource group.

[ListAutoGroupingRemediations](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listautogroupingremediations-rg)

ListAutoGroupingRemediations

Queries a list of automatic grouping remediation records.

[GetResourceGroupAdminSetting](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getresourcegroupadminsetting-rg)

GetResourceGroupAdminSetting

Queries the configurations of a resource group administrator.

[UpdateResourceGroupAdminSetting](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updateresourcegroupadminsetting-rg)

UpdateResourceGroupAdminSetting

Updates the configurations of a resource group administrator.

[LookupResourceGroupEvents](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-lookupresourcegroupevents-rg)

LookupResourceGroupEvents

Queries the events of resource groups.

[EnableResourceGroupNotification](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-enableresourcegroupnotification-rg)

EnableResourceGroupNotification

Enables group event notification.

[DisableResourceGroupNotification](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-disableresourcegroupnotification-rg)

DisableResourceGroupNotification

Disables group event notification.

[GetResourceGroupNotificationSetting](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getresourcegroupnotificationsetting-rg)

GetResourceGroupNotificationSetting

Queries the notification settings of a resource group.

[ListResourceGroupCapability](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listresourcegroupcapability-rg)

ListResourceGroupCapability

Queries whether a specific resource type or a given cloud service supports resource group events.

[ListResourceGroupsWithAuthDetails](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listresourcegroupswithauthdetails-rg)

ListResourceGroupsWithAuthDetails

Queries resource groups and their user authorization information.

## Roles

API

Title

Description

[CreateRole](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createrole-rg)

CreateRole

Creates a RAM role.

[DeleteRole](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deleterole-rg)

DeleteRole

Deletes a RAM role.

[UpdateRole](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-updaterole-rg)

UpdateRole

Updates the information about a Resource Access Management (RAM) role.

[GetRole](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getrole-rg)

GetRole

Queries the information about a RAM role.

[ListRoles](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listroles-rg)

ListRoles

Queries a list of RAM roles.

## Service-linked roles

API

Title

Description

[CreateServiceLinkedRole](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createservicelinkedrole-rg)

CreateServiceLinkedRole

Creates a service-linked role.

[DeleteServiceLinkedRole](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deleteservicelinkedrole-rg)

DeleteServiceLinkedRole

Deletes a service-linked role.

[GetServiceLinkedRoleDeletionStatus](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getservicelinkedroledeletionstatus-rg)

GetServiceLinkedRoleDeletionStatus

Queries the status of the task that is used to delete a service-linked role.

## Policies

API

Title

Description

[CreatePolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createpolicy-rg)

CreatePolicy

Creates a permission policy.

[DeletePolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deletepolicy-rg)

DeletePolicy

Deletes a permission policy.

[SetDefaultPolicyVersion](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-setdefaultpolicyversion-rg)

SetDefaultPolicyVersion

Sets a default version for a permission policy.

[AttachPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-attachpolicy-rg)

AttachPolicy

Attaches a permission policy to an object, which can be a RAM user, RAM user group, or RAM role. After you attach a permission policy to an object, the object has the operation permissions on the resources in a specific resource group or within a specific Alibaba Cloud account.

[DetachPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-detachpolicy-rg)

DetachPolicy

Detaches a permission policy from an object. After you detach a policy from an object, the object does not have the operation permissions on the current resource group or the resources within the current account.

[ListPolicies](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listpolicies-rg)

ListPolicies

Queries a list of permission policies.

[GetPolicy](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getpolicy-rg)

GetPolicy

Queries the information about a permission policy.

[ListPolicyAttachments](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listpolicyattachments-rg)

ListPolicyAttachments

Queries policy attachment records.

[CreatePolicyVersion](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createpolicyversion-rg)

CreatePolicyVersion

Creates a version for a permission policy.

[DeletePolicyVersion](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-deletepolicyversion-rg)

DeletePolicyVersion

Deletes a version of a permission policy.

[ListPolicyVersions](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listpolicyversions-rg)

ListPolicyVersions

Queries a list of versions of a policy.

[GetPolicyVersion](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-getpolicyversion-rg)

GetPolicyVersion

Queries the information about a version of a permission policy.

## Tag

API

Title

Description

[TagResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-tagresources-rg)

TagResources

Adds tags to resource groups or the members in a resource directory.

[UntagResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-untagresources-rg)

UntagResources

Removes tags from resource groups or the members in a resource directory.

[ListTagResources](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listtagresources-rg)

ListTagResources

Queries the tags that are added to resource groups or the members in a resource directory.

## Others (not maintained)

API

Title

Description

[InitResourceDirectory](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-initresourcedirectory-rg)

InitResourceDirectory

Enables a resource directory. After you enable a resource directory, the system automatically creates a root folder and sets the current account as the enterprise management account of the resource directory. The enterprise management account has all administrative permissions on this resource direc

[CreateCloudAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-createcloudaccount-rg)

CreateCloudAccount

Creates a cloud account.

[PromoteResourceAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-promoteresourceaccount-rg)

PromoteResourceAccount

Upgrades a resource account to a cloud account.

[ResendPromoteResourceAccountEmail](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-resendpromoteresourceaccountemail-rg)

ResendPromoteResourceAccountEmail

Resends an email that is used to confirm the upgrade from a resource account to a cloud account.

[ResendCreateCloudAccountEmail](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-resendcreatecloudaccountemail-rg)

ResendCreateCloudAccountEmail

Resends an email that is used to confirm the creation of a cloud account.

[CancelCreateCloudAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-cancelcreatecloudaccount-rg)

CancelCreateCloudAccount

Cancels the creation of a cloud account.

[CancelPromoteResourceAccount](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-cancelpromoteresourceaccount-rg)

CancelPromoteResourceAccount

Cancels the upgrade from a resource account to a cloud account.
