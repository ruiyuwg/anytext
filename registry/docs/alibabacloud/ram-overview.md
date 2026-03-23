To ensure the security of your accounts and resources on Alibaba Cloud, do not use your Alibaba Cloud account to access Elastic Compute Service (ECS) unless required. We recommend that you use your Resource Access Management (RAM) identities instead, including RAM users and RAM roles.

## **RAM users**

RAM users can be created by Alibaba Cloud accounts, or RAM users or RAM roles that have administrative rights. RAM users are allowed to log on to consoles or access Alibaba Cloud resources within the Alibaba Cloud accounts only if the RAM user has the required permissions.

We recommend that you take note of the following items:

-   Use your Alibaba Cloud account to create a RAM user and grant the RAM user the administrative rights. Then, you can use the RAM user to create and manage other RAM users.
    
-   Separate RAM users for individuals from RAM users for programs.
    
    You can use the **RAM console** or **call API operations** to create RAM users. If you use the RAM console, you must provide the username and password of your Alibaba Cloud account. If you call API operations, you must provide your AccessKey pair. We recommend that you separate RAM users for individuals from RAM users for programs to prevent human errors. If you use the RAM console, we recommend that you enable multi-factor authentication (MFA) to increase security.
    
-   Grant permissions to RAM users based on the principle of least privilege.
    
    Least-privilege permissions refer to the minimum permissions that are required to perform an operation. Least-privilege permissions improve data security and prevent permission abuse.
    
-   Do not embed your AccessKey ID or AccessKey secret in code. Otherwise, your AccessKey pair may be leaked, which causes security risks for all resources within your account. We recommend that you use Security Token Service (STS) tokens or configure environment variables to obtain access permissions.
    
-   Enable single sign-on (SSO) for RAM users to allow the RAM users to log on to and access Alibaba Cloud resources from the identity management systems of their enterprises.
    

## **Related operations**

-   [Overview of RAM users](/help/en/ram/user-guide/overview-of-ram-users)
    
-   [AccessKey security solution](/help/en/openapi/accesskey-security-solution)
    
-   [Overview of user-based SSO](/help/en/ram/overview-of-user-based-sso)
    

## **RAM user groups**

If you use your Alibaba Cloud account to create multiple RAM users, you can group the RAM users to facilitate permission management. For example, you can grant the same permissions to RAM users in the same RAM user group. We recommend that you take note of the following items:

-   Grant permissions to RAM user groups based on the principle of least privilege.
    
-   Remove a RAM user from the RAM user group if the work duties of the RAM user change.
    
-   Remove a RAM user from the RAM user group if the RAM user no longer needs the permissions of the RAM user group.
    

## **Related operations**

-   [Overview of a RAM user group](/help/en/ram/user-guide/overview-of-a-ram-user-group)
    

## **RAM roles**

A RAM role is a virtual identity to which policies can be attached. A RAM role does not have permanent identity credentials, such as a logon password or an AccessKey pair. A RAM role can be used only after the role is assumed by a trusted entity. After a RAM role is assumed by a trusted entity, the trusted entity can obtain a Security Token Service (STS) token. Then, the trusted entity can use the STS token to access Alibaba Cloud resources as the RAM role.

We recommend that you take note of the following items:

-   Do not frequently change the trusted entity of a RAM user after the RAM user is created. If you change the trusted entity of a RAM user, permission loss may occur, which affects your business. If you add a trusted entity, security risks may arise due to privilege escalation. Make sure that the changes are fully tested before you apply them to a RAM user.
    
-   After a trusted entity is granted a permission, the trusted entity can call the AssumeRole operation to obtain an STS token, which can be used to assume a RAM role. For more information, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole). An STS token is valid only for a limited period of time. We recommend that you set the validity period to an appropriate value to reduce security risks.
    
    **Note**
    
    The maximum validity period of an STS token is the longest session duration specified for the RAM role. We recommend that you specify an appropriate session duration for a RAM role to reduce security risks.
    
-   Enable SSO for RAM roles to allow the RAM roles to log on to and access Alibaba Cloud resources from the identity management systems of their enterprises.
    

## **Related operations**

-   [RAM role overview](/help/en/ram/user-guide/ram-role-overview)
    
-   [Assume a RAM role](/help/en/ram/user-guide/assume-a-ram-role)
    
-   [Specify the maximum session duration for a RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role)
    
-   [Role-based SSO](/help/en/ram/role-based-sso/)
