An identity uniquely identifies a user in a system. The system determines the permissions of a user based on the identity of the user. Alibaba Cloud supports the following types of identities: Alibaba Cloud account, Resource Access Management (RAM) user, and RAM role.

## **Alibaba Cloud account**

An Alibaba Cloud account is the basic entity for the ownership of Alibaba Cloud resources, and the metering and billing of resource usage. An Alibaba Cloud account is charged for the usage of all resources within the account and has full permissions on the resources. Except for scenarios in which you must use an Alibaba Cloud account, we recommend that you use a RAM user or RAM role to log on to the Alibaba Cloud Management Console and call API operations.

## RAM user

A RAM user is a physical identity that has a fixed ID and credential information. A RAM user represents a person or an application. A RAM user has the following characteristics:

-   A RAM user can be created by an Alibaba Cloud account. In this case, the RAM user belongs to the Alibaba Cloud account. A RAM user can also be created by a RAM user or a RAM role that has administrative rights. In this case, the RAM user belongs to the Alibaba Cloud account that creates the RAM user or the RAM role.
    
-   A RAM user does not own resources. Resource usage fees of the RAM user are billed to the Alibaba Cloud account to which the RAM user belongs. A RAM user does not receive individual bills and cannot make payments.
    
-   Before RAM users can log on to the Alibaba Cloud Management Console or call operations, they must be authorized by Alibaba Cloud accounts. After RAM users are authorized, the RAM users can access resources that are owned by the Alibaba Cloud accounts.
    
-   RAM users have independent passwords or AccessKey pairs for logon.
    
-   An Alibaba Cloud account can create multiple RAM users. RAM users can be used to represent employees, systems, and applications within an enterprise.
    

For more information, see [Overview of RAM users](/help/en/ram/user-guide/overview-of-ram-users).

### **Suggestions**

**Create a separate RAM user for each developer**

You can create multiple RAM users for different developers based on their regions, services, development environments, and organizations. The benefit of fine-grained separation is that different RAM users have clear boundaries for business ownership, which can facilitate identification and operation analysis.

Disadvantages of sharing a RAM user:

1.  If an abnormal operation is performed, the RAM user that performs the operation can be determined. However, the specific organization or individual that performed the operation is hardly identified because the RAM user is shared by multiple organizations or individuals.
    
2.  If the AccessKey pair of a RAM user is leaked, you must disable the AccessKey pair at the earliest opportunity. If the RAM user is shared by multiple developers and the AccessKey pair is hardcoded in your applications, you cannot disable the AccessKey pair until the AccessKey pair is removed from all code. This poses critical threats to the system.
    

**Separate console users from API users**

We recommend that you do not create a logon password for console operations and an AccessKey pair for API operations for a RAM user at the same time. This prevents your business from being affected by misoperations of RAM users.

Recommendations:

-   To allow an application to access resources by calling API operations, you need to only apply for an AccessKey pair for the RAM user of the application.
    
-   To allow an employee to manage resources in the console, you need to only set a logon password for the RAM user of the employee.
    

## RAM role

A RAM role is a virtual identity to which policies can be attached. A RAM role does not have permanent identity credentials, such as a logon password or an AccessKey pair. A RAM role can be used only after the role is assumed by a trusted entity. After a RAM role is assumed by a trusted entity, the trusted entity can obtain a Security Token Service (STS) token. Then, the trusted entity can use the STS token to access Alibaba Cloud resources as the RAM role.

For example, Alibaba Cloud Account A creates the RAM role _a\_rr1_, grants the `FullAccess` permission on Object Storage Service (OSS) to the RAM role, and then assigns the RAM role to the RAM user _b\_ru1_ of Alibaba Cloud Account B. This way, developers can log on to the console as the RAM user _b\_ru1_ and manage the OSS resources of Account A by assuming the RAM role _a\_rr1_.

### **RAM role types**

RAM roles are classified into the following types based on trusted entities:

-   **RAM role whose trusted entity is an Alibaba Cloud account**: RAM users within an Alibaba Cloud account can assume this type of RAM role. RAM users that assume this type of RAM role can belong to their owner Alibaba Cloud accounts or other Alibaba Cloud accounts. This type of RAM role is used for cross-account access and temporary authorization.
    
-   **RAM role whose trusted entity is an Alibaba Cloud service**: Alibaba Cloud services can assume this type of RAM role. RAM roles that a trusted Alibaba Cloud service can assume are classified into two types: normal service role and service-linked role. For more information about service-linked roles, see [service-linked roles](/help/en/ram/user-guide/service-linked-roles). This type of RAM role is used to authorize access across Alibaba Cloud services.
    
-   **RAM role whose trusted entity is an identity provider (IdP)**: Users of a trusted IdP can assume this type of RAM role. This type of RAM role is used to implement role-based single sign-on (SSO) between Alibaba Cloud and a trusted IdP.
    

### **Scenarios**

-   **Authorize temporary access**
    
    In most cases, we recommend that you call API operations on the server to prevent AccessKey pair leaks. However, in some scenarios, we recommend that you directly upload files from the client to prevent overheads that are caused by resource transfer by using the server. In this case, the server can issue an STS token and the client can use the STS token to directly transfer resources.
    
    For more information, see [Use an STS token for authorizing a mobile app to access Alibaba Cloud resources](/help/en/ram/use-cases/use-an-sts-token-for-authorizing-a-mobile-app-to-access-alibaba-cloud-resources#concept-tdn-n2k-xdb).
    
-   **Grant permissions across Alibaba Cloud accounts**
    
    For example, you own Alibaba Cloud accounts Account A and Account B, and you want Account A to access specific resources of Account B. You can create a RAM role whose trusted entity is Account A within Account B and authorize a RAM user or RAM role that belongs to Account A to assume the RAM role whose trusted entity is Account A. Then, you can use the RAM role whose trusted entity is Account A to access specific resources of Account B.
    
    For more information, see [Use a RAM role to grant permissions across Alibaba Cloud accounts](/help/en/ram/use-cases/use-a-ram-role-to-grant-permissions-across-alibaba-cloud-accounts#task-es5-cgk-xdb).
    
-   **Grant permissions across Alibaba Cloud services**
    
    In some scenarios, an Alibaba Cloud service needs to be authorized to access other services and use a specific feature. For example, to retrieve resource lists and log data from Elastic Compute Service (ECS) and ApsaraDB RDS, Cloud Config requires the access permissions on ECS and ApsaraDB RDS. In this case, you can create a RAM role whose trusted entity is an Alibaba Cloud service. We recommend that you use a service-linked role. For Alibaba Cloud services that do not support service-linked roles, use a normal service role.
    
    For more information, see [Services that work with service-linked roles](/help/en/ram/product-overview/services-that-work-with-service-linked-roles).
    
-   **Implement role-based SSO**
    
    If Alibaba Cloud and the identity management system of an enterprise work together to implement role-based SSO, Alibaba Cloud is the service provider (SP) and the identity management system is the IdP. Role-based SSO allows the enterprise to manage users in the local IdP without the need to synchronize users from the IdP to Alibaba Cloud. In addition, employees of the enterprise can access Alibaba Cloud by using a specific RAM role. In this case, you can create a RAM role whose trusted entity is an IdP.
    
    For more information, see [Overview of SAML-based SSO](/help/en/ram/overview) and [Overview of OIDC-based SSO](/help/en/ram/overview-of-oidc-based-sso).
