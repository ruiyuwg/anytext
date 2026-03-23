## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Ims/2019-08-15`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## User management

**API**

**Title**

**Description**

RAM user

RAM user

[ListUsers](/help/en/ram/developer-reference/api-ims-2019-08-15-listusers)

ListUsers

Queries information about all Resource Access Management (RAM) users.

[ListUserBasicInfos](/help/en/ram/developer-reference/api-ims-2019-08-15-listuserbasicinfos)

ListUserBasicInfos

Queries the basic information about all Resource Access Management (RAM) users.

[GetAccountSummary](/help/en/ram/developer-reference/api-ims-2019-08-15-getaccountsummary)

GetAccountSummary

Retrieves a summary of an Alibaba Cloud account.

Logon

Logon

[CreateLoginProfile](/help/en/ram/developer-reference/api-ims-2019-08-15-createloginprofile)

CreateLoginProfile

Creates a logon configuration for a Resource Access Management (RAM) user.

[GetLoginProfile](/help/en/ram/developer-reference/api-ims-2019-08-15-getloginprofile)

GetLoginProfile

Queries the console logon settings for a Resource Access Management (RAM) user.

[UpdateLoginProfile](/help/en/ram/developer-reference/api-ims-2019-08-15-updateloginprofile)

UpdateLoginProfile

Modifies the console logon settings for a Resource Access Management (RAM) user.

MFA

MFA

[ListVirtualMFADevices](/help/en/ram/developer-reference/api-ims-2019-08-15-listvirtualmfadevices)

ListVirtualMFADevices

Queries multi-factor authentication (MFA) devices.

## User group management

**API**

**Title**

**Description**

[ListGroups](/help/en/ram/developer-reference/api-ims-2019-08-15-listgroups)

ListGroups

Queries Resource Access Management (RAM) user groups.

## SSO management

**API**

**Title**

**Description**

[SetUserSsoSettings](/help/en/ram/developer-reference/api-ims-2019-08-15-setuserssosettings)

SetUserSsoSettings

Sets the identity provider (IdP) settings for user-based single sign-on (SSO).

[GetUserSsoSettings](/help/en/ram/developer-reference/api-ims-2019-08-15-getuserssosettings)

GetUserSsoSettings

Queries the identity provider settings for user-based SSO.

[CreateSAMLProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-createsamlprovider)

CreateSAMLProvider

Creates an identity provider (IdP) for role-based single sign-on (SSO).

[UpdateSAMLProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-updatesamlprovider)

UpdateSAMLProvider

Updates the information about a specified identity provider for role-based single sign-on (SSO).

[GetSAMLProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-getsamlprovider)

GetSAMLProvider

Retrieves information about a specified SAML provider for role-based SSO.

[CreateOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-createoidcprovider)

CreateOIDCProvider

Creates an OpenID Connect (OIDC) identity provider (IdP) to configure a trust relationship between Alibaba Cloud and an external IdP. This topic provides an example on how to create an IdP named TestOIDCProvider to configure a trust relationship between the external IdP Okta and Alibaba Cloud.

## OAuth management

**API**

**Title**

**Description**

[CreateApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-createapplication)

CreateApplication

Creates an application.

[GetApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-getapplication)

GetApplication

Queries the configuration information of a specified application.

[UpdateApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-updateapplication)

UpdateApplication

Updates the configuration of a specified application.

[ListApplications](/help/en/ram/developer-reference/api-ims-2019-08-15-listapplications)

ListApplications

Lists the applications that you have created.

[ListPredefinedScopes](/help/en/ram/developer-reference/api-ims-2019-08-15-listpredefinedscopes)

ListPredefinedScopes

Queries predefined application permissions.

[ListApplicationProvisionInfos](/help/en/ram/developer-reference/api-ims-2019-08-15-listapplicationprovisioninfos)

ListApplicationProvisionInfos

Queries installation information about all installed applications.

[ListExternalApplications](/help/en/ram/developer-reference/api-ims-2019-08-15-listexternalapplications)

ListExternalApplications

Queries information about all installed external applications.

## Security management

**API**

**Title**

**Description**

[SetPasswordPolicy](/help/en/ram/developer-reference/api-ims-2019-08-15-setpasswordpolicy)

SetPasswordPolicy

Set the password policy for Resource Access Management (RAM) users.

[GetPasswordPolicy](/help/en/ram/developer-reference/api-ims-2019-08-15-getpasswordpolicy)

GetPasswordPolicy

Queries the password policy for Resource Access Management (RAM) users.

[SetSecurityPreference](/help/en/ram/developer-reference/api-ims-2019-08-15-setsecuritypreference)

SetSecurityPreference

Configures the global security preferences for a Resource Access Management (RAM) user.

[GetSecurityPreference](/help/en/ram/developer-reference/api-ims-2019-08-15-getsecuritypreference)

GetSecurityPreference

Queries the global security preferences for Resource Access Management (RAM) users.

## Others

**API**

**Title**

**Description**

[AddClientIdToOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-addclientidtooidcprovider)

AddClientIdToOIDCProvider

Adds a client ID to an OpenID Connect (OIDC) identity provider (IdP).

[AddFingerprintToOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-addfingerprinttooidcprovider)

AddFingerprintToOIDCProvider

Adds a fingerprint to an OpenID Connect (OIDC) identity provider (IdP).

[AddUserToGroup](/help/en/ram/developer-reference/api-ims-2019-08-15-addusertogroup)

AddUserToGroup

Adds a Resource Access Management (RAM) user to a RAM user group.

[BindMFADevice](/help/en/ram/developer-reference/api-ims-2019-08-15-bindmfadevice)

BindMFADevice

Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.

[ChangePassword](/help/en/ram/developer-reference/api-ims-2019-08-15-changepassword)

ChangePassword

Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.

[CreateAccessKey](/help/en/ram/developer-reference/api-ims-2019-08-15-createaccesskey)

CreateAccessKey

Creates an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.

[CreateAppSecret](/help/en/ram/developer-reference/api-ims-2019-08-15-createappsecret)

CreateAppSecret

Creates an application secret for an application.

[CreateGroup](/help/en/ram/developer-reference/api-ims-2019-08-15-creategroup)

CreateGroup

Creates a Resource Access Management (RAM) user group.

[CreateUser](/help/en/ram/developer-reference/api-ims-2019-08-15-createuser)

CreateUser

Creates a RAM user.

[CreateVirtualMFADevice](/help/en/ram/developer-reference/api-ims-2019-08-15-createvirtualmfadevice)

CreateVirtualMFADevice

Creates a virtual multi-factor authentication (MFA) device.

[DeleteAccessKey](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteaccesskey)

DeleteAccessKey

Deletes an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.

[DeleteAccessKeyInRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteaccesskeyinrecyclebin)

DeleteAccessKeyInRecycleBin

Deletes a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.

[DeleteAppSecret](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteappsecret)

DeleteAppSecret

Deletes the application secret of an application.

[DeleteApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteapplication)

DeleteApplication

Deletes an application.

[DeleteGroup](/help/en/ram/developer-reference/api-ims-2019-08-15-deletegroup)

DeleteGroup

Deletes a Resource Access Management (RAM) user group.

[DeleteLoginProfile](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteloginprofile)

DeleteLoginProfile

Disables logon to the console for a Resource Access Management (RAM) user.

[DeleteOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteoidcprovider)

DeleteOIDCProvider

Deletes an OpenID Connect (OIDC) identity provider (IdP).

[DeletePasskey](/help/en/ram/developer-reference/api-ims-2019-08-15-deletepasskey)

DeletePasskey

Deletes a passkey for a Resource Access Management (RAM) user.

[DeleteSAMLProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-deletesamlprovider)

DeleteSAMLProvider

Deletes an identity provider (IdP) for role-based single sign-on (SSO).

[DeleteUser](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteuser)

DeleteUser

Deletes a Resource Access Management (RAM) user.

[DeleteUserInRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteuserinrecyclebin)

DeleteUserInRecycleBin

Deletes a specific Resource Access Management (RAM) user from the recycle bin.

[DeleteVirtualMFADevice](/help/en/ram/developer-reference/api-ims-2019-08-15-deletevirtualmfadevice)

DeleteVirtualMFADevice

Deletes a multi-factor authentication (MFA) device.

[DeprovisionApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-deprovisionapplication)

DeprovisionApplication

Uninstalls an external application or an internal application of the ServerApp type.

[DeprovisionExternalApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-deprovisionexternalapplication)

DeprovisionExternalApplication

Deletes an installed external application.

[DisableVirtualMFA](/help/en/ram/developer-reference/api-ims-2019-08-15-disablevirtualmfa)

DisableVirtualMFA

Unbinds and deletes a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.

[GenerateCredentialReport](/help/en/ram/developer-reference/api-ims-2019-08-15-generatecredentialreport)

GenerateCredentialReport

Generates the user credential report of an Alibaba Cloud account.

[GetAccessKeyInfoInRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-getaccesskeyinfoinrecyclebin)

GetAccessKeyInfoInRecycleBin

Queries information about a specific AccessKey pair of a Resource Access Management (RAM) user in the recycle bin.

[GetAccessKeyLastUsed](/help/en/ram/developer-reference/api-ims-2019-08-15-getaccesskeylastused)

GetAccessKeyLastUsed

Queries the time when an AccessKey pair was used for the last time.

[GetAccountMFAInfo](/help/en/ram/developer-reference/api-ims-2019-08-15-getaccountmfainfo)

GetAccountMFAInfo

Queries information about the multi-factor authentication (MFA) devices of an Alibaba Cloud account.

[GetAccountSecurityPracticeReport](/help/en/ram/developer-reference/api-ims-2019-08-15-getaccountsecuritypracticereport)

GetAccountSecurityPracticeReport

Queries the security report of an Alibaba Cloud account.

[GetAppSecret](/help/en/ram/developer-reference/api-ims-2019-08-15-getappsecret)

GetAppSecret

Queries the details of an application secret.

[GetApplicationProvisionInfo](/help/en/ram/developer-reference/api-ims-2019-08-15-getapplicationprovisioninfo)

GetApplicationProvisionInfo

Queries installation information about a specified installed application.

[GetCredentialReport](/help/en/ram/developer-reference/api-ims-2019-08-15-getcredentialreport)

GetCredentialReport

Queries the user credential reports of an Alibaba Cloud account.

[GetDefaultDomain](/help/en/ram/developer-reference/api-ims-2019-08-15-getdefaultdomain)

GetDefaultDomain

Queries the default domain name of an Alibaba Cloud account.

[GetExternalApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-getexternalapplication)

GetExternalApplication

Queries information about an installed external application.

[GetGroup](/help/en/ram/developer-reference/api-ims-2019-08-15-getgroup)

GetGroup

Queries the information about a Resource Access Management (RAM) user group.

[GetOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-getoidcprovider)

GetOIDCProvider

Queries the information about an OIDC IdP.

[GetUser](/help/en/ram/developer-reference/api-ims-2019-08-15-getuser)

GetUser

Queries the information about a RAM user.

[GetUserInRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-getuserinrecyclebin)

GetUserInRecycleBin

Queries information about a specific Resource Access Management (RAM) user in the recycle bin.

[GetUserMFAInfo](/help/en/ram/developer-reference/api-ims-2019-08-15-getusermfainfo)

GetUserMFAInfo

Queries information about the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.

[GetVerificationInfo](/help/en/ram/developer-reference/api-ims-2019-08-15-getverificationinfo)

GetVerificationInfo

Queries the status of the mobile phone or email that is bound to a Resource Access Management (RAM) user.

[ListAccessKeys](/help/en/ram/developer-reference/api-ims-2019-08-15-listaccesskeys)

ListAccessKeys

Queries the AccessKey pairs of an Alibaba Cloud account or a Resource Access Management (RAM) user.

[ListAccessKeysInRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-listaccesskeysinrecyclebin)

ListAccessKeysInRecycleBin

Queries the AccessKey pairs of a specific Resource Access Management (RAM) user in the recycle bin.

[ListAppSecretIds](/help/en/ram/developer-reference/api-ims-2019-08-15-listappsecretids)

ListAppSecretIds

Queries the secret IDs of an application.

[ListGroupsForUser](/help/en/ram/developer-reference/api-ims-2019-08-15-listgroupsforuser)

ListGroupsForUser

Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.

[ListOIDCProviders](/help/en/ram/developer-reference/api-ims-2019-08-15-listoidcproviders)

ListOIDCProviders

Queries OIDC IdPs.

[ListPasskeys](/help/en/ram/developer-reference/api-ims-2019-08-15-listpasskeys)

ListPasskeys

Queries the information about the passkeys that are bound to a Resource Access Management (RAM) user.

[ListSAMLProviders](/help/en/ram/developer-reference/api-ims-2019-08-15-listsamlproviders)

ListSAMLProviders

Queries information about identity providers (IdPs) for role-based single sign-on (SSO).

[ListTagResources](/help/en/ram/developer-reference/api-ims-2019-08-15-listtagresources)

ListTagResources

Queries the tags that are added resources.

[ListUsersForGroup](/help/en/ram/developer-reference/api-ims-2019-08-15-listusersforgroup)

ListUsersForGroup

Queries Resource Access Management (RAM) users in a RAM user group.

[ListUsersInRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-listusersinrecyclebin)

ListUsersInRecycleBin

Queries the basic information about all Resource Access Management (RAM) users in the recycle bin.

[ProvisionApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-provisionapplication)

ProvisionApplication

Installs an application.

[ProvisionExternalApplication](/help/en/ram/developer-reference/api-ims-2019-08-15-provisionexternalapplication)

ProvisionExternalApplication

Installs an external application.

[RemoveClientIdFromOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-removeclientidfromoidcprovider)

RemoveClientIdFromOIDCProvider

Removes a client ID from an OpenID Connect (OIDC) identity provider (IdP).

[RemoveFingerprintFromOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-removefingerprintfromoidcprovider)

RemoveFingerprintFromOIDCProvider

Removes a fingerprint from an OpenID Connect (OIDC) identity provider (IdP).

[RemoveUserFromGroup](/help/en/ram/developer-reference/api-ims-2019-08-15-removeuserfromgroup)

RemoveUserFromGroup

Removes a Resource Access Management (RAM) user from a RAM user group.

[RestoreAccessKeyFromRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-restoreaccesskeyfromrecyclebin)

RestoreAccessKeyFromRecycleBin

Restores a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.

[RestoreUserFromRecycleBin](/help/en/ram/developer-reference/api-ims-2019-08-15-restoreuserfromrecyclebin)

RestoreUserFromRecycleBin

Restores a specific Resource Access Management (RAM) user from the recycle bin.

[SetDefaultDomain](/help/en/ram/developer-reference/api-ims-2019-08-15-setdefaultdomain)

SetDefaultDomain

Configures the default domain name for an Alibaba Cloud account.

[SetVerificationInfo](/help/en/ram/developer-reference/api-ims-2019-08-15-setverificationinfo)

SetVerificationInfo

Binds a mobile phone or email to a Resource Access Management (RAM) user.

[TagResources](/help/en/ram/developer-reference/api-ims-2019-08-15-tagresources)

TagResources

Adds tags to resources.

[UnbindMFADevice](/help/en/ram/developer-reference/api-ims-2019-08-15-unbindmfadevice)

UnbindMFADevice

Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.

[UnbindVerification](/help/en/ram/developer-reference/api-ims-2019-08-15-unbindverification)

UnbindVerification

Unbinds a mobile phone or email from a Resource Access Management (RAM) user.

[UntagResources](/help/en/ram/developer-reference/api-ims-2019-08-15-untagresources)

UntagResources

Removes tags from a resource.

[UpdateAccessKey](/help/en/ram/developer-reference/api-ims-2019-08-15-updateaccesskey)

UpdateAccessKey

Modifies the status of an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.

[UpdateGroup](/help/en/ram/developer-reference/api-ims-2019-08-15-updategroup)

UpdateGroup

Modifies information about a Resource Access Management (RAM) user group.

[UpdateOIDCProvider](/help/en/ram/developer-reference/api-ims-2019-08-15-updateoidcprovider)

UpdateOIDCProvider

Modifies the description and client IDs of an OpenID Connect (OIDC) identity provider (IdP).

[UpdatePasskey](/help/en/ram/developer-reference/api-ims-2019-08-15-updatepasskey)

UpdatePasskey

Updates the name of a passkey.

[UpdateUser](/help/en/ram/developer-reference/api-ims-2019-08-15-updateuser)

UpdateUser

Modifies the information about a RAM user.
