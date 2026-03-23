CloudSSO is integrated with Alibaba Cloud Resource Directory to provide unified multi-account identity management and access control. You can use CloudSSO to manage enterprise users who need to access Alibaba Cloud resources and assign access permissions on the accounts in a resource directory to the users in a centralized manner. You can also configure settings only once to implement single sign-on (SSO) access to Alibaba Cloud resources from an identity provider (IdP).

## Features

-   **Allows you to manage users who need to access Alibaba Cloud resources in a centralized manner**
    
    CloudSSO allows you to create the CloudSSO directory to manage users. You can manage all users who need to access Alibaba Cloud resources in the directory. You can manually manage users and groups. You can also use System for Cross-domain Identity Management (SCIM) to synchronize users and groups from your IdP to the directory.
    
-   **Allows you to configure SSO access to Alibaba Cloud resources from an IdP**
    
    A user in the CloudSSO directory can use the username-password logon method and multi-factor authentication (MFA) to access Alibaba Cloud resources. However, to improve user experience and reduce risks, we recommend that you configure SSO access from an IdP. CloudSSO supports SSO logon for enterprises based on Security Assertion Markup Language (SAML) 2.0. You can configure settings only once in both CloudSSO and an IdP to implement SSO access.
    
-   **Allows you to assign access permissions on the accounts in a resource directory to all CloudSSO identities in a centralized manner**
    
    CloudSSO is deeply integrated with Resource Directory. You can assign access permissions on all members in your resource directory to CloudSSO identities in a centralized manner. An identity in CloudSSO can be a user or a group. A CloudSSO administrator can specify the CloudSSO identities that are allowed to access members in a resource directory based on the organizational structure of the resource directory. The administrator can assign access permissions to the identities. The administrator can also modify or remove the assigned permissions.
    
-   **Provides a unified CloudSSO user portal**
    
    CloudSSO provides a unified user portal. After an enterprise employee logs on to the user portal, the employee can view all accounts that the employee can access in a resource directory. Then, the employee can select an account to log on to the Alibaba Cloud Management Console. The employee can also switch between the accounts based on business requirements.
    
-   **Provides integration with Alibaba Cloud CLI**
    
    CloudSSO is integrated with Alibaba Cloud Command Line Interface (Alibaba Cloud CLI). A CloudSSO user can use a browser or Alibaba Cloud CLI to log on to the CloudSSO user portal. After the user logs on to the user portal, the user can select an account in a resource directory and the required access configuration and use the CLI to access Alibaba Cloud resources.
    
-   **Provides services free of charge**
    
    After you enable CloudSSO, you can use it free of charge.
    

## Architecture

A CloudSSO user can access the cloud resources of an account in a resource directory by using the **Resource Access Management (RAM) user-based logon** or **RAM role-based logon method**.

![产品架构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5564618661/p476371.png)

The following table describes the two methods.

**Access method**

**Description**

**Scenario**

**References**

RAM role-based logon

Enterprises can use CloudSSO to manage the users that are allowed to access Alibaba Cloud resources in a centralized manner. You can create and assign an access configuration to allow a CloudSSO user to log on to the Alibaba Cloud Management Console by using SSO logon method and a RAM role within an account in a resource directory. This way, the CloudSSO user can access the cloud resources of the account as the RAM role.

This method is suitable for cloud resources that can be accessed by assuming RAM roles.

-   [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration#task-2091273)
    
-   [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971)
    

RAM user-based logon

Enterprises can use CloudSSO to manage the users that are allowed to access Alibaba Cloud resources in a centralized manner. You can create a RAM user provisioning to allow a CloudSSO user to log on to the Alibaba Cloud Management Console by using a RAM user within an account in a resource directory. This way, the CloudSSO user can access the resources of the account as the RAM user.

This method is suitable for cloud resources that cannot be accessed by assuming RAM roles.

[Create a RAM user provisioning](/help/en/cloudsso/user-guide/create-a-ram-user-provisioning#task-2258334)

**Note**

If you create and assign an access configuration to allow a CloudSSO user to access an account in a resource directory and create a RAM user provisioning for the same CloudSSO user, the CloudSSO user can access the cloud resources of the account in the resource directory by using the RAM user-based logon and RAM role-based logon method.

## Relationship between CloudSSO and RAM

RAM allows you to manage identities and permissions within one Alibaba Cloud account. You can use RAM to configure SSO, manage permissions, and manage identities only within one Alibaba Cloud account. The identities can be users, groups, or RAM roles. If you use RAM and multiple Alibaba Cloud accounts are created for your enterprise, you must manage identities and permissions and configure SSO within each Alibaba Cloud account. This makes management challenging.

CloudSSO is integrated with Resource Directory and allows you to manage identities and permissions for multiple Alibaba Cloud accounts in a centralized manner. You can configure settings only in CloudSSO. After the configuration, you can manage identities and permissions for multiple Alibaba Cloud accounts in a centralized manner to implement SSO access. To achieve centralized management, you can use the CloudSSO directory that is independent of RAM to manage identities. CloudSSO reuses the system policies and the syntax of custom policies in RAM to manage permissions. For more information, see [Overview](/help/en/cloudsso/user-guide/overview-1#concept-2090837). When a CloudSSO user accesses an account in a resource directory, the user assumes the RAM role of the account to implement SSO access. For more information, see [Overview](/help/en/cloudsso/user-guide/overview-2#concept-2090970).

If you use CloudSSO to manage identities and permissions for the accounts in your resource directory in a centralized manner, you do not need to use RAM to manage permissions within one Alibaba Cloud account. In some cases, you can still use RAM to manage permissions within one Alibaba Cloud account. For example, you have created a RAM user or a RAM role, or you need to authorize applications to use AccessKey pairs to access Alibaba Cloud resources. CloudSSO does not affect the functionality of RAM. You can use CloudSSO and RAM together.
