To ensure data security for your resources, you need to regulate access from users to your Server Load Balancer (SLB) resources so that only trusted users can access or manage your resources. SLB is integrated with Resource Access Management (RAM), which can manage access permissions on resources.

## **RAM users**

RAM users can be created by using Alibaba Cloud accounts or using RAM users and RAM roles who have administrative rights. After a RAM user is granted the required permissions, the RAM user can use the Alibaba Cloud Management Console or call API operations to access Alibaba Cloud resources within the Alibaba Cloud account to which the RAM user belongs.

We recommend that you take not of the following items:

-   Use your Alibaba Cloud account to create a RAM user and grant the RAM user the administrative rights. Then, you can use the RAM user to create and manage other RAM users.
    
-   Separate RAM users for individuals from RAM users for programs.
    
    When you create a RAM user, you can configure its access mode with **Console Access**, **Using permanent AccessKey to access**, or both for the **Access Mode** parameter.
    
    To access resources, a RAM user designated for console access logs on to the Alibaba Cloud Management Console by using its username and password, whereas a RAM user designated for AccessKey pair-based access makes API calls. We recommend that you separate RAM users for individuals from RAM users for programs to prevent impacts of unintended operations. We recommend that you enable multi-factor authentication (MFA) for a RAM user designated for console access.
    
-   Grant permissions to RAM users based on the principle of least privilege.
    
    Least-privilege permissions refer to the minimum permissions that are required to perform an operation. Least-privilege permissions improve data security and prevent permission abuse.
    
-   Do not embed your AccessKey ID or AccessKey secret in code to prevent an AccessKey pair leak. An AccessKey pair leak causes security risks for all resources within your account. We recommend that you use Security Token Service (STS) tokens or configure environment variables to obtain access permissions.
    
-   If applicable, enable single sign-on (SSO) for RAM users to allow the RAM users to log on to and access Alibaba Cloud resources from the identity management systems of their enterprises.
    

## **Related operations**

-   [Overview of RAM users](/help/en/ram/user-guide/overview-of-ram-users)
    
-   [Credential security solutions](/help/en/openapi/accesskey-security-solution)
    
-   [Overview of user-based SSO](/help/en/ram/overview-of-user-based-sso)
    

## **RAM user groups**

If you use your Alibaba Cloud account to create multiple RAM users, you can group the RAM users to facilitate permission management. For example, you can grant the same permissions to RAM users in the same RAM user group. We recommend that you take note of the following items:

-   Grant permissions to RAM user groups based on the principle of least privilege.
    
-   Remove a RAM user from the RAM user group if the work duties of the RAM user change.
    
-   Revoke permissions from RAM user groups if the RAM user groups no longer need the permissions.
    

## **Related operations**

-   [Overview of a RAM user group](/help/en/ram/user-guide/overview-of-a-ram-user-group)
    

## **RAM roles**

A RAM role is a virtual identity to which policies can be attached. A RAM role does not have permanent identity credentials, such as a logon password or an AccessKey pair. A RAM role can be used only after the role is assumed by a trusted entity. After a RAM role is assumed by a trusted entity, the trusted entity can obtain a Security Token Service (STS) token. Then, the trusted entity can use the STS token to access Alibaba Cloud resources as the RAM role.

We recommend that you take note of the following items:

-   Do not frequently change the trusted entity of a RAM role after the RAM role is created. If you change the trusted entity of a RAM role, permission loss may occur, which affects your business. If you add a trusted entity, security risks may arise due to privilege escalation. Make sure that the changes are fully tested before you apply them to a RAM role.
    
-   After a trusted entity is granted a permission, the trusted entity can call the AssumeRole operation to obtain an STS token, which can be used to assume a RAM role. For more information, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole). An STS token is valid only for a limited period of time. We recommend that you set the validity period to an appropriate value to reduce security risks.
    
    **Note**
    
    The maximum validity period of an STS token is the maximum session duration specified for the RAM role. We recommend that you set the maximum session duration for a RAM role to an appropriate value to reduce security risks.
    
-   If applicable, enable SSO for RAM roles to allow the RAM roles to log on to and access Alibaba Cloud resources from the identity management systems of their enterprises.
    

## **Related operations**

-   [RAM role overview](/help/en/ram/user-guide/ram-role-overview)
    
-   [Assume a RAM role](/help/en/ram/user-guide/assume-a-ram-role)
    
-   [Specify the maximum session duration for a RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role)
    
-   [Role-based SSO](/help/en/ram/role-based-sso/)
