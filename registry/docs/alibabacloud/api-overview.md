## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Ram/2015-05-01`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. [Create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API-only access and use RAM policies to apply the principle of least privilege (PoLP). Alibaba Cloud accounts are only used when explicitly required.

To call APIs securely, configure the following:

-   A RAM user account
    
-   An [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) for the account
    

## User management

**API**

**Title**

**Description**

RAM User

RAM User

[CreateUser](/help/en/ram/developer-reference/api-ram-2015-05-01-createuser)

CreateUser

This operation creates a Resource Access Management (RAM) user.

[GetUser](/help/en/ram/developer-reference/api-ram-2015-05-01-getuser)

GetUser

You can call the GetUser operation to query the details of a Resource Access Management (RAM) user.

[UpdateUser](/help/en/ram/developer-reference/api-ram-2015-05-01-updateuser)

UpdateUser

Modifies information about a Resource Access Management (RAM) user.

[DeleteUser](/help/en/ram/developer-reference/api-ram-2015-05-01-deleteuser)

DeleteUser

Deletes a Resource Access Management (RAM) user.

[ListUsers](/help/en/ram/developer-reference/api-ram-2015-05-01-listusers)

ListUsers

Queries the information about all RAM users.

Login Profile

Login Profile

[CreateLoginProfile](/help/en/ram/developer-reference/api-ram-2015-05-01-createloginprofile)

CreateLoginProfile

Enables console logon for a Resource Access Management (RAM) user.

[GetLoginProfile](/help/en/ram/developer-reference/api-ram-2015-05-01-getloginprofile)

GetLoginProfile

Queries the logon configurations of a Resource Access Management (RAM) user.

[UpdateLoginProfile](/help/en/ram/developer-reference/api-ram-2015-05-01-updateloginprofile)

UpdateLoginProfile

Modifies the logon configurations of a Resource Access Management (RAM) user.

[DeleteLoginProfile](/help/en/ram/developer-reference/api-ram-2015-05-01-deleteloginprofile)

DeleteLoginProfile

Disables console logon for a Resource Access Management (RAM) user.

[ChangePassword](/help/en/ram/developer-reference/api-ram-2015-05-01-changepassword)

ChangePassword

Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.

AccessKey

AccessKey

[CreateAccessKey](/help/en/ram/developer-reference/api-ram-2015-05-01-createaccesskey)

CreateAccessKey

Creates an AccessKey pair for a Resource Access Management (RAM) user.

[UpdateAccessKey](/help/en/ram/developer-reference/api-ram-2015-05-01-updateaccesskey)

UpdateAccessKey

Changes the status of an AccessKey pair that belongs to a Resource Access Management (RAM) user.

[DeleteAccessKey](/help/en/ram/developer-reference/api-ram-2015-05-01-deleteaccesskey)

DeleteAccessKey

Deletes an AccessKey pair of a Resource Access Management (RAM) user.

[ListAccessKeys](/help/en/ram/developer-reference/api-ram-2015-05-01-listaccesskeys)

ListAccessKeys

Queries all AccessKey pairs that belong to a Resource Access Management (RAM) user.

MFA

MFA

[CreateVirtualMFADevice](/help/en/ram/developer-reference/api-ram-2015-05-01-createvirtualmfadevice)

CreateVirtualMFADevice

Creates a multi-factor authentication (MFA) device.

[GetUserMFAInfo](/help/en/ram/developer-reference/api-ram-2015-05-01-getusermfainfo)

GetUserMFAInfo

Queries the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.

[DeleteVirtualMFADevice](/help/en/ram/developer-reference/api-ram-2015-05-01-deletevirtualmfadevice)

DeleteVirtualMFADevice

Deletes a multi-factor authentication (MFA) device.

[ListVirtualMFADevices](/help/en/ram/developer-reference/api-ram-2015-05-01-listvirtualmfadevices)

ListVirtualMFADevices

Queries multi-factor authentication (MFA) devices.

[BindMFADevice](/help/en/ram/developer-reference/api-ram-2015-05-01-bindmfadevice)

BindMFADevice

Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.

[UnbindMFADevice](/help/en/ram/developer-reference/api-ram-2015-05-01-unbindmfadevice)

UnbindMFADevice

Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.

## User group management

**API**

**Title**

**Description**

[CreateGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-creategroup)

CreateGroup

Creates a RAM user group.

[GetGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-getgroup)

GetGroup

Queries information about a Resource Access Management (RAM) user group.

[UpdateGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-updategroup)

UpdateGroup

Modifies a Resource Access Management (RAM) user group.

[DeleteGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-deletegroup)

DeleteGroup

Deletes a Resource Access Management (RAM) user group.

[ListGroups](/help/en/ram/developer-reference/api-ram-2015-05-01-listgroups)

ListGroups

Queries Resource Access Management (RAM) user groups.

[ListGroupsForUser](/help/en/ram/developer-reference/api-ram-2015-05-01-listgroupsforuser)

ListGroupsForUser

Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.

[ListUsersForGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-listusersforgroup)

ListUsersForGroup

Queries Resource Access Management (RAM) users in a RAM user group.

[AddUserToGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-addusertogroup)

AddUserToGroup

Adds a Resource Access Management (RAM) user to a RAM user group.

[RemoveUserFromGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-removeuserfromgroup)

RemoveUserFromGroup

Removes a Resource Access Management (RAM) user from a RAM user group.

## Role management

**API**

**Title**

**Description**

[CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole)

CreateRole

Creates a Resource Access Management (RAM) role.

[DeleteRole](/help/en/ram/developer-reference/api-ram-2015-05-01-deleterole)

DeleteRole

Deletes a regular Resource Access Management (RAM) role.

[UpdateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-updaterole)

UpdateRole

Modifies information about a Resource Access Management (RAM) role.

[GetRole](/help/en/ram/developer-reference/api-ram-2015-05-01-getrole)

GetRole

Queries information about a Resource Access Management (RAM) role.

[ListRoles](/help/en/ram/developer-reference/api-ram-2015-05-01-listroles)

ListRoles

Queries all Resource Access Management (RAM) roles.

## Permission management

**API**

**Title**

**Description**

Permission Policy Management

Permission Policy Management

[CreatePolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-createpolicy)

CreatePolicy

Creates a custom policy.

[GetPolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-getpolicy)

GetPolicy

Queries information about a policy.

[UpdatePolicyDescription](/help/en/ram/developer-reference/api-ram-2015-05-01-updatepolicydescription)

UpdatePolicyDescription

Modifies the description of a custom policy.

[DeletePolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-deletepolicy)

DeletePolicy

Deletes a policy.

[ListPolicies](/help/en/ram/developer-reference/api-ram-2015-05-01-listpolicies)

ListPolicies

Queries a list of policies.

[CreatePolicyVersion](/help/en/ram/developer-reference/api-ram-2015-05-01-createpolicyversion)

CreatePolicyVersion

Creates a version for a policy.

[GetPolicyVersion](/help/en/ram/developer-reference/api-ram-2015-05-01-getpolicyversion)

GetPolicyVersion

Queries the information about a policy version.

[DeletePolicyVersion](/help/en/ram/developer-reference/api-ram-2015-05-01-deletepolicyversion)

DeletePolicyVersion

Deletes a policy version.

[ListPolicyVersions](/help/en/ram/developer-reference/api-ram-2015-05-01-listpolicyversions)

ListPolicyVersions

Queries the versions of a policy.

[SetDefaultPolicyVersion](/help/en/ram/developer-reference/api-ram-2015-05-01-setdefaultpolicyversion)

SetDefaultPolicyVersion

Specifies a version for a policy as the default version.

Authorization Management

Authorization Management

[AttachPolicyToUser](/help/en/ram/developer-reference/api-ram-2015-05-01-attachpolicytouser)

AttachPolicyToUser

Attaches a policy to a Resource Access Management (RAM) user.

[DetachPolicyFromUser](/help/en/ram/developer-reference/api-ram-2015-05-01-detachpolicyfromuser)

DetachPolicyFromUser

Detaches a policy from a Resource Access Management (RAM) user.

[AttachPolicyToGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-attachpolicytogroup)

AttachPolicyToGroup

Attaches a policy to a Resource Access Management (RAM) user group.

[DetachPolicyFromGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-detachpolicyfromgroup)

DetachPolicyFromGroup

Detaches a policy from a Resource Access Management (RAM) user group.

[AttachPolicyToRole](/help/en/ram/developer-reference/api-ram-2015-05-01-attachpolicytorole)

AttachPolicyToRole

Attaches a policy to a Resource Access Management (RAM) role.

[DetachPolicyFromRole](/help/en/ram/developer-reference/api-ram-2015-05-01-detachpolicyfromrole)

DetachPolicyFromRole

Detaches a policy from a Resource Access Management (RAM) role.

[ListPoliciesForUser](/help/en/ram/developer-reference/api-ram-2015-05-01-listpoliciesforuser)

ListPoliciesForUser

Queries the policies that are attached to a RAM user.

[ListPoliciesForGroup](/help/en/ram/developer-reference/api-ram-2015-05-01-listpoliciesforgroup)

ListPoliciesForGroup

Queries the policies that are attached to a Resource Access Management (RAM) user group.

[ListPoliciesForRole](/help/en/ram/developer-reference/api-ram-2015-05-01-listpoliciesforrole)

ListPoliciesForRole

Queries the policies that are attached to a Resource Access Management (RAM) role.

[ListEntitiesForPolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-listentitiesforpolicy)

ListEntitiesForPolicy

Queries the entities to which a policy is attached.

## Security management

**API**

**Title**

**Description**

[SetAccountAlias](/help/en/ram/developer-reference/api-ram-2015-05-01-setaccountalias)

SetAccountAlias

Configures an alias for an Alibaba Cloud account.

[GetAccountAlias](/help/en/ram/developer-reference/api-ram-2015-05-01-getaccountalias)

GetAccountAlias

Queries the alias of an Alibaba Cloud account.

[ClearAccountAlias](/help/en/ram/developer-reference/api-ram-2015-05-01-clearaccountalias)

ClearAccountAlias

Deletes the alias of an Alibaba Cloud account.

[SetPasswordPolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-setpasswordpolicy)

SetPasswordPolicy

Configures the password policy for Resource Access Management (RAM) users, including the password strength.

[GetPasswordPolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-getpasswordpolicy)

GetPasswordPolicy

Queries the password policy of Resource Access Management (RAM) users, including the password strength.

[SetSecurityPreference](/help/en/ram/developer-reference/api-ram-2015-05-01-setsecuritypreference)

SetSecurityPreference

Configures the security preferences.

[GetSecurityPreference](/help/en/ram/developer-reference/api-ram-2015-05-01-getsecuritypreference)

GetSecurityPreference

Queries the security preferences.

## Permission analysis and diagnostics

**API**

**Title**

**Description**

[DecodeDiagnosticMessage](/help/en/ram/developer-reference/api-ram-2015-05-01-decodediagnosticmessage)

DecodeDiagnosticMessage

Decodes the diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.

## Tag management

**API**

**Title**

**Description**

[TagResources](/help/en/ram/developer-reference/api-ram-2015-05-01-tagresources)

TagResources

Adds tags to cloud resources which are Resource Access Management (RAM) roles and policies.

[UntagResources](/help/en/ram/developer-reference/api-ram-2015-05-01-untagresources)

UntagResources

Removes tags from cloud resources that are Resource Access Management (RAM) roles and policies.

[ListTagResources](/help/en/ram/developer-reference/api-ram-2015-05-01-listtagresources)

ListTagResources

Queries the tags that are added to cloud resources which are Resource Access Management (RAM) roles and policies.
