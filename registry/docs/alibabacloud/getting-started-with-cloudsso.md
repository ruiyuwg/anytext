This topic describes the prerequisites and procedure to use CloudSSO and provides links to configuration examples.

## Prerequisites

-   A resource directory is enabled, and the multi-account organizational structure is built.
    
    For more information, see [Resource Directory overview](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview#concept-2436329).
    
-   Only the management account of a resource directory or a RAM user that has administrative rights within the management account can be used to enable CloudSSO.
    
    -   Management account
        
        A management account is the account that is used to enable a resource directory and is the super administrator of the resource directory. The management account has full permissions on the resource directory and the members in the resource directory. You must use an Alibaba Cloud account that has passed [enterprise identity verification](/help/en/account/account-verification-faqs) to enable a resource directory. Each resource directory has only one management account.
        
    -   RAM users
        
        You must attach the AliyunCloudSSOFullAccess system policy to the RAM users of the management account. For more information, see [Grant permissions to RAM users](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        

## Procedure

1.  Enable CloudSSO and create the CloudSSO directory.
    
    For more information, see [Enable CloudSSO](/help/en/cloudsso/user-guide/enable-cloudsso#task-2089273) and [Create the CloudSSO directory](/help/en/cloudsso/user-guide/create-the-cloudsso-directory#task-2089674).
    
2.  Manage users and groups.
    
    You can use one of the following methods:
    
    -   Synchronize users or groups from an identity provider (IdP). We recommend that you use this method.
        
        1.  Enable System for Cross-domain Identity Management (SCIM) synchronization and create SCIM credentials in the CloudSSO console.
            
            For more information, see [Enable SCIM synchronization](/help/en/cloudsso/user-guide/enable-or-disable-scim-synchronization#section-t4j-nwr-088) and [Create SCIM credentials](/help/en/cloudsso/user-guide/manage-scim-credentials#section-eas-0wd-sbc).
            
        2.  Configure user and group synchronization in the IdP.
            
            For more information, see [Configuration examples](#section-7gr-ra6-qu6).
            
            **Note**
            
            You can configure SCIM synchronization only when the IdP supports SCIM.
            
    -   Create users or groups in the CloudSSO console.
        
        For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk), [Create a group](/help/en/cloudsso/user-guide/perform-basic-operations-1#section-d1z-01e-e06), and [Add a user to a group](/help/en/cloudsso/user-guide/perform-basic-operations-1#section-1i4-c5n-c7t).
        
3.  Specify a logon method.
    
    You can enable one of the following logon methods. If you enable a logon method, the other logon method is automatically disabled.
    
    -   SSO logon
        
        For more information, see [Enable SSO logon](/help/en/cloudsso/user-guide/configure-sso#section-ne6-8lq-n0a) and [Configuration examples](#section-7gr-ra6-qu6).
        
    -   Username-password logon
        
        For more information, see [Enable username-password logon](/help/en/cloudsso/user-guide/configure-logon-settings#section-280-dws-hv0).
        
4.  Create an access configuration.
    
    An access configuration is a configuration template for CloudSSO users to access the accounts in resource directories. The template includes information such as the access permissions, session duration, and relay state. For more information, see [Overview](/help/en/cloudsso/user-guide/overview-1#concept-2090837) and [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration#task-2091273).
    
5.  Assign access permissions on the accounts in your resource directory to users or groups.
    
    You can specify the users or groups that are allowed to access the accounts in your resource directory based on the structure of the resource directory. You can also assign access permissions or configurations to users or groups. You can assign access permissions on the enterprise management account and members in your resource directory. For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971).
    
6.  Access Alibaba Cloud resources.
    
    1.  Log on to the CloudSSO user portal by using the logon method that you specified.
        
    2.  View all the accounts that you can access in your resource directory.
        
    3.  Select an account to access the Alibaba Cloud resources on which the account has permissions.
        
    
    For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#task-2090790).
    

## Configuration examples

**Enterprise IdP**

**SCIM synchronization**

**SSO logon**

Azure AD

[Synchronize users or groups in Azure AD by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-azure-ad-by-using-scim#task-2090820)

[Configure SSO from Azure AD to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-from-azure-ad-to-cloudsso#task-2513116)

Okta

[Synchronize users or groups in Okta by using SCIM](/help/en/cloudsso/user-guide/synchronize-users-or-groups-in-okta-by-using-scim#task-2090820)

[Configure SSO from Okta to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-logon-from-okta-to-cloudsso#task-2513116)

AD FS

None

[Configure SSO from AD FS to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-logon-from-ad-fs-to-cloudsso#task-bpk-3jc-mfb)

Shibboleth

None

[Configure SSO from Shibboleth to CloudSSO](/help/en/cloudsso/user-guide/configure-sso-from-shibboleth-to-cloudsso)
