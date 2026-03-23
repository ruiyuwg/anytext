An identity uniquely identifies a user in a system. A credential is a group of information that can be used to verify the identity of a user. Authorization is the process of granting permissions on specific resources to a user whose identity is verified. You can use identities, credentials, and authorization to ensure the security of user identities and control user access to resources.

## **Identity**

An identity uniquely identifies a user in a system. The system determines the permissions of a user based on the identity of the user. Alibaba Cloud supports the following types of identities: Alibaba Cloud account, Resource Access Management (RAM) user, and RAM role.

-   Alibaba Cloud account
    
    An Alibaba Cloud account is the basic entity for the ownership of Alibaba Cloud resources, and the metering and billing of resource usage. An Alibaba Cloud account is charged for the usage of all resources within the account and has full permissions on the resources. Except for scenarios in which you must use an Alibaba Cloud account, we recommend that you log on to the Alibaba Cloud Management Console and call API operations as a RAM user or by assuming a RAM role.
    
-   RAM user
    
    A physical identity that has a fixed ID and credential information. A RAM user represents a person or an application. For more information, see [Overview of RAM users](/help/en/ram/user-guide/overview-of-ram-users).
    
-   RAM role
    
    A RAM role is a virtual identity to which policies can be attached. Unlike a RAM user, a RAM role does not have permanent identity credentials, such as a logon password or an AccessKey pair. A RAM role can be used only after the role is assumed by a trusted entity. After a RAM role is assumed by a trusted entity, the trusted entity can obtain a Security Token Service (STS) token and use the STS token to access Alibaba Cloud resources as the RAM role.
    
    For example, Alibaba Cloud Account A creates the RAM role _a\_rr1_, grants the `FullAccess` permission on Object Storage Service (OSS) to the RAM role, and then assigns the RAM role to the RAM user _b\_ru1_ of Alibaba Cloud Account B. This way, developers can log on to the console as the RAM user _b\_ru1_ and manage the OSS resources of Account A by assuming the RAM role _a\_rr1_.
    
    For more information, see [RAM role overview](/help/en/ram/user-guide/ram-role-overview).
    

## **Credential**

A credential is a group of information that can be used to verify the identity of a user. When you log on to a system, you must provide a valid credential to complete identity authentication. The following types of credentials are commonly used on Alibaba Cloud:

-   An AccessKey pair of an Alibaba Cloud account or a RAM user. An AccessKey pair is permanently valid. It consists of an AccessKey ID and an AccessKey secret.
    
    **Warning**
    
    An AccessKey pair of an Alibaba Cloud account has full access to all resources within the account. AccessKey pair leaks pose critical threats to the resources within an Alibaba Cloud account. We recommend that you use the AccessKey pair of a RAM user and regularly rotate the AccessKey pair. For information about how to create an AccessKey pair for a RAM user, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   A Security Token Service (STS) token of a RAM role. An STS token is a temporary credential. You can specify the validity period and access permissions of an STS token. For more information, see [What is STS?](/help/en/ram/user-guide/what-is-sts)
    
    **Note**
    
    An STS token has a validity period. You must update an STS token after it expires.
    
-   A bearer token. It is used for identity authentication and authorization. Only [Cloud Call Center](https://api.alibabacloud.com/api/CCC/2020-07-01/ListPrivilegesOfUser) allows you to use a bearer token to initialize a Credentials client. To use a bearer token, select BearerToken for the **_Configure Authentication Mode_** parameter.
    

The leaks of credentials pose critical threats to cloud resources and your business. Pay special attention to credential security during routine O&M. For more information, see [Credential security solutions](/help/en/openapi/accesskey-security-solution).

## **Authorization**

Authorization is the process in which system administrators or resource owners grant resource access permissions to users. After the system verifies the identity of a user, the system determines whether to allow the user to perform specific operations based on the permissions.

Specific minimum permissions are required to call each Alibaba Cloud API operation. Before you call an API operation, make sure that you have the required permissions. You can view the required minimum permissions of an API operation on the **API Docs** page of the API operation in **OpenAPI Explorer**. The following figure shows the authorization information of the [RunInstances](https://api.alibabacloud.com/document/Ecs/2014-05-26/RunInstances) operation of Elastic Compute Service (ECS).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9102857171/p795176.png)

-   Alibaba Cloud account
    
    An Alibaba Cloud account has full permissions on all cloud resources within the account. You do not need to grant permissions to an Alibaba Cloud account, and the permissions of an Alibaba Cloud account cannot be modified. However, if an Alibaba Cloud account belongs to a resource directory, the account may be restricted by the access control policies of the resource directory. For more information, see [Overview](/help/en/resource-management/resource-directory/user-guide/control-policy-overview).
    
-   RAM user
    
    You can grant the permissions displayed on the API Docs page of an API operation to a RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
-   RAM role
    
    Compared with authorization for a RAM user, authorization for a RAM role requires an additional step.
    
    1.  Specify the trusted entity. You can specify an Alibaba Cloud account, a RAM user, or another RAM role as the trusted entity of a RAM role.
        
    2.  Grant required permissions. For more information, see [RAM role overview](/help/en/ram/user-guide/ram-role-overview).
        
    
    Take note of the following scenarios when you grant permissions to a RAM role:
    
    **Scenario 1: Authorization chain**
    
    For example, the RAM user **_aRamUser1_** of Account A is authorized to assume the RAM role **_bRamRole1_** of Account B, and the RAM role **_bRamRole1_** of Account B is authorized to assume the RAM role **_cRamRole1_** of Account C. Although the RAM user **_aRamUser1_** of Account A is not authorized to assume the RAM role **_cRamRole1_** of Account C, the RAM user **_aRamUser1_** of Account A can access the resources of Account C by assuming the RAM role **_bRamRole1_** that is authorized to assume the RAM role **_cRamRole1_**. This is called the authorization chain effect.
    
    **Scenario 2: Implicit authorization**
    
    If you select the current Alibaba Cloud account as the trusted entity when you create a RAM role within the Alibaba Cloud account, every RAM user or RAM role that has the `assumeRole` permission within the Alibaba Cloud account is allowed to assume the RAM role by default. If the RAM role is granted high permissions, every RAM user or RAM role that has only the `assumeRole` permission can obtain these high permissions.
